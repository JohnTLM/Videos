import { atom, read, update } from 'claude-code'
import type { EngineInterface, FsEntry, Register } from 'claude-code'

import type { Job, JobStatus, NextInfo } from '../types'

// The button's name, as it appears above the prompt.
export const BUTTON_LABEL = '▶ Build Next Chapter'
const COMMAND = 'next-chapter'
const STATUS_COMMAND = 'chapter-status'
const APPROVE_COMMAND = 'approve-pilot'
const RESET_COMMAND = 'reset-chapter'
const MARKER = '[chapter-builder]'
const POLL_MS = 2000
/** A queued build whose turn has not started after this long is cancelled. */
export const QUEUE_TIMEOUT_MS = 10 * 60 * 1000

// Files the plugin reads in the Videos/ folder (VIDEO-SPEC.md §2 and §10).
const SPEC_FILE = 'VIDEO-SPEC.md'
const CHAPTERS_FILE = 'chapters.json'
const APPROVAL_FILE = 'PILOT-APPROVED'

const job = atom({ plugin: 'chapter-builder', key: 'job' } as const, null)
const next = atom({ plugin: 'chapter-builder', key: 'next' } as const, null)
const isHidden = atom({ plugin: 'chapter-builder', key: 'isHidden' } as const, false)

/** The check frames VIDEO-SPEC.md §9 names, for chapter `nn`. */
export const frameNames = (nn: string) =>
  ['0002', '0030', '0200', 'end'].map(at => `ch${nn}-frame-${at}.png`)

const fileOf = (files: FsEntry[], name: string) => files.find(f => f.kind === 'file' && f.name === name)
const has = (files: FsEntry[], name: string) => fileOf(files, name) !== undefined

// The per-chapter pipeline from VIDEO-SPEC.md (§2, §8, §9), in order.
// Each stage is finished when its file shows up in the chapter folder.
// `base` is the chapter folder's name, `chNN-<slug>`, so the video is `<base>.mp4`.
export const STAGES: { label: string; isDone: (files: FsEntry[], nn: string, base: string) => boolean }[] = [
  { label: 'Writing script (.md)', isDone: (f, nn) => has(f, `ch${nn}-script.md`) },
  { label: 'Narration text (.txt)', isDone: (f, nn) => has(f, `ch${nn}-narration.txt`) },
  { label: 'Narration audio (.mp3)', isDone: (f, nn) => has(f, `ch${nn}-narration.mp3`) },
  { label: 'Subtitles (.srt)', isDone: (f, nn) => has(f, `ch${nn}.srt`) },
  { label: 'Title card (.png)', isDone: (f, nn) => has(f, `ch${nn}-title.png`) },
  // The spec writes <base>.partial.mp4 and renames it when ffmpeg is done,
  // so only a non-empty file with the final name counts.
  { label: 'Video (.mp4)', isDone: (f, _nn, base) => (fileOf(f, `${base}.mp4`)?.size ?? 0) > 0 },
  // All four frames, each taken after the video was last written.
  {
    label: 'Check frames (.png)',
    isDone: (f, nn, base) => {
      const video = fileOf(f, `${base}.mp4`)
      return frameNames(nn).every(name => {
        const frame = fileOf(f, name)
        return frame !== undefined && frame.size > 0 && frame.mtimeMs >= (video?.mtimeMs ?? Infinity)
      })
    },
  },
]

// The Videos/ folder from the plugin's options; empty means the session's cwd.
let configuredDir = ''
let poll: { cancel: () => void } | undefined

export const pad = (n: number) => String(n).padStart(2, '0')

export function joinPath(dir: string, name: string): string {
  const sep = dir.includes('\\') && !dir.includes('/') ? '\\' : '/'
  return dir.endsWith(sep) ? dir + name : dir + sep + name
}

/** Counts the stages finished, in order: a later file never skips an earlier stage. */
export function countDone(files: FsEntry[], chapter: number, base: string): number {
  const nn = pad(chapter)
  let done = 0
  for (const stage of STAGES) {
    if (!stage.isDone(files, nn, base)) break
    done += 1
  }
  return done
}

export function progressBar(done: number, total: number, width: number): string {
  const filled = Math.round((done / total) * width)
  return '█'.repeat(filled) + '░'.repeat(width - filled)
}

function isActive(j: Job | null): j is Job & { status: 'queued' | 'running' } {
  return j !== null && (j.status === 'queued' || j.status === 'running')
}

/** Why the next chapter cannot be offered now, or undefined when it can. */
export function blocker(info: NextInfo): 'all-built' | 'pilot' | undefined {
  if (info.total !== undefined && info.chapter > info.total) return 'all-built'
  if (info.built.includes(1) && info.chapter > 1 && !info.isPilotApproved) return 'pilot'
  return undefined
}

async function videosDir($: EngineInterface): Promise<string> {
  return configuredDir === '' ? $.session.cwd() : configuredDir
}

type Folder = { path: string; base: string }

function chapterFolders(dir: string, entries: FsEntry[]): Map<number, Folder> {
  const folders = new Map<number, Folder>()
  for (const entry of entries) {
    const match = /^ch(\d{2,3})-/.exec(entry.name)
    if (entry.kind === 'dir' && match) {
      folders.set(Number(match[1]), { path: joinPath(dir, entry.name), base: entry.name })
    }
  }
  return folders
}

async function listDir($: EngineInterface, path: string | undefined): Promise<FsEntry[]> {
  if (path === undefined) return []
  return $.fs.list(path).catch(() => [])
}

/** Reads chapters.json: a JSON list with one entry per chapter. */
async function readTotal($: EngineInterface, dir: string): Promise<{ total?: number; totalWarning?: string }> {
  const text = await $.fs.read(joinPath(dir, CHAPTERS_FILE)).catch(() => undefined)
  if (typeof text !== 'string') return {}
  try {
    const list: unknown = JSON.parse(text)
    if (Array.isArray(list) && list.length > 0) return { total: list.length }
  } catch {
    // Falls through to the warning.
  }
  return { totalWarning: `${CHAPTERS_FILE} is not a JSON list of chapters, so the chapter count is unknown.` }
}

// Finds the first chapter that is not fully built.
async function refreshNext($: EngineInterface): Promise<NextInfo> {
  const dir = await videosDir($)
  const entries = await listDir($, dir)
  const built: number[] = []
  for (const [chapter, folder] of chapterFolders(dir, entries)) {
    if (countDone(await listDir($, folder.path), chapter, folder.base) >= STAGES.length) built.push(chapter)
  }
  built.sort((a, b) => a - b)
  let chapter = 1
  while (built.includes(chapter)) chapter += 1
  const info: NextInfo = {
    chapter,
    built,
    hasSpec: has(entries, SPEC_FILE),
    isPilotApproved: has(entries, APPROVAL_FILE),
    ...(has(entries, CHAPTERS_FILE) ? await readTotal($, dir) : {}),
  }
  await update($, next, () => info)
  return info
}

function stopPolling(): void {
  poll?.cancel()
  poll = undefined
}

async function cancel($: EngineInterface, reason: string): Promise<void> {
  stopPolling()
  await update($, job, j => (j === null ? j : { ...j, status: 'cancelled' as const, reason }))
  $.ui.status(undefined)
}

// Re-reads the chapter folder and moves the progress bar.
async function scan($: EngineInterface): Promise<void> {
  const current = await read($, job)
  if (!isActive(current)) return
  const now = await $.clock.now()
  if (current.status === 'queued' && now - current.startedAt > QUEUE_TIMEOUT_MS) {
    await cancel($, `the build turn did not start within ${QUEUE_TIMEOUT_MS / 60000} min`)
    return
  }
  const dir = await videosDir($)
  const folder = chapterFolders(dir, await listDir($, dir)).get(current.chapter)
  const done = folder === undefined ? 0 : countDone(await listDir($, folder.path), current.chapter, folder.base)
  await update($, job, j =>
    j === null
      ? j
      : {
          ...j,
          folder: folder?.path,
          done,
          stage: STAGES[Math.min(done, STAGES.length - 1)]?.label ?? '',
          elapsedSeconds: Math.round((now - j.startedAt) / 1000),
        },
  )
  $.ui.status(`Ch ${current.chapter}: ${Math.round((done / STAGES.length) * 100)}%`)
}

function startPolling($: EngineInterface): void {
  poll?.cancel()
  poll = $.clock.every(POLL_MS, () => void scan($))
}

async function finish($: EngineInterface): Promise<void> {
  await scan($)
  stopPolling()
  const current = await read($, job)
  if (current === null) return
  const isDone = current.done >= STAGES.length
  const status: JobStatus = isDone ? 'done' : 'stopped'
  await update($, job, j => (j === null ? j : { ...j, status }))
  $.ui.status(undefined)
  $.ui.toast(
    isDone
      ? `Chapter ${current.chapter} video is ready.`
      : `Chapter ${current.chapter} stopped at: ${current.stage}. Press ${BUTTON_LABEL} to resume.`,
  )
  await refreshNext($)
}

export function buildPrompt(dir: string, chapter: number): string {
  const nn = pad(chapter)
  return [
    `${MARKER} Continue the video series. Build Chapter ${chapter} now.`,
    ``,
    `Follow ${joinPath(dir, SPEC_FILE)} exactly: read it first, then produce Chapter ${chapter} end to end in the order MD → MP3 → SRT → MP4 (ch${nn}-script.md, ch${nn}-narration.txt, ch${nn}-narration.mp3, ch${nn}.srt, ch${nn}-title.png, ch${nn}-<slug>.mp4), inside a ch${nn}-<slug>/ folder under ${dir}.`,
    `Write the video as ch${nn}-<slug>.partial.mp4 and rename it to ch${nn}-<slug>.mp4 only when ffmpeg has finished.`,
    `Use build.py (--chapter ${chapter} --skip-existing) where it exists; reuse anything already made for this chapter.`,
    `Run the §9 quality checks, save the check frames from the final video as ${frameNames(nn).join(', ')}, update manifest.csv, and add any new terms to pronunciation.json.`,
    chapter === 1
      ? `This is the pilot (§10): when it is done, stop and report the script, the duration, new pronunciation entries and the check frames. Do not create ${APPROVAL_FILE}; the owner does that.`
      : `When it is done, report a one-line status and any new terms to listen to. If a check fails, stop and say which.`,
  ].join('\n')
}

/** One plain line per problem the owner should know about. */
function warnings(info: NextInfo, where: string): string[] {
  const lines: string[] = []
  if (!info.hasSpec) lines.push(`⚠ No ${SPEC_FILE} in ${where}. Copy it there from the repo (it is the working copy).`)
  if (info.totalWarning !== undefined) lines.push(`⚠ ${info.totalWarning}`)
  else if (info.total === undefined) lines.push(`Chapter count unknown: no ${CHAPTERS_FILE} yet (spec §10 setup writes it).`)
  return lines
}

function statusText(info: NextInfo, dir: string): string {
  const reason = blocker(info)
  const total = info.total === undefined ? '' : ` of ${info.total}`
  const built = info.built.length === 0 ? 'No chapters built yet.' : `Built${total}: ${info.built.map(pad).join(', ')}.`
  const nextLine =
    reason === 'all-built'
      ? `All ${info.total} chapters built.`
      : reason === 'pilot'
        ? `Chapter 1 (the pilot) is built. Review it, then approve it with /${APPROVE_COMMAND} before Chapter ${info.chapter} can be built.`
        : `Next: Chapter ${info.chapter}${total}.`
  return [built, nextLine, ...warnings(info, dir)].join('\n')
}

// What the button and /next-chapter do.
async function buildNext($: EngineInterface): Promise<string> {
  const current = await read($, job)
  if (isActive(current)) {
    return `Chapter ${current.chapter} is already being built. If it is stuck, use /${RESET_COMMAND} or the Reset button.`
  }
  const dir = await videosDir($)
  const info = await refreshNext($)
  await update($, isHidden, () => false)
  if (blocker(info) !== undefined) return statusText(info, dir)
  const { chapter } = info
  const queued: Job = {
    chapter,
    status: 'queued',
    done: 0,
    stage: STAGES[0]?.label ?? '',
    startedAt: await $.clock.now(),
    elapsedSeconds: 0,
  }
  await update($, job, () => queued)
  startPolling($)
  void scan($)
  void $.prompt
    .submit({ text: buildPrompt(dir, chapter) })
    .then(async result => {
      if (result.drop !== undefined) await cancel($, `the prompt was not sent (${result.drop})`)
    })
    .catch(() => cancel($, 'the prompt was not sent'))
  return [`Building Chapter ${chapter}…`, ...warnings(info, dir)].join('\n')
}

async function approvePilot($: EngineInterface): Promise<string> {
  const dir = await videosDir($)
  const info = await refreshNext($)
  if (!info.built.includes(1)) return 'Chapter 1 (the pilot) is not built yet. Build and review it first.'
  if (info.isPilotApproved) return `The pilot is already approved (${APPROVAL_FILE} exists).`
  const when = new Date(await $.clock.now()).toISOString()
  await $.fs.write(joinPath(dir, APPROVAL_FILE), `Pilot (Chapter 1) approved by the owner on ${when}.\n`)
  await refreshNext($)
  return `Pilot approved. ${APPROVAL_FILE} was written to ${dir}. You can now build Chapter ${info.chapter}.`
}

async function reset($: EngineInterface): Promise<string> {
  const current = await read($, job)
  if (!isActive(current)) return 'No build is being tracked. Nothing to reset.'
  await cancel($, 'reset by you')
  await refreshNext($)
  return `Stopped tracking Chapter ${current.chapter}. No files were deleted.`
}

export const register: Register = (on, options) => {
  configuredDir = String((options as { videosDir?: unknown }).videosDir ?? '').trim()

  on('session.start', async ($, e, nextHook) => {
    await $.command.register({
      name: COMMAND,
      description: 'Build the next chapter of the video series (same as the Build Next Chapter button)',
    })
    await $.command.register({
      name: STATUS_COMMAND,
      description: 'Show the chapter-builder button again and say which chapters are built (builds nothing)',
    })
    await $.command.register({
      name: APPROVE_COMMAND,
      description: 'Approve the Chapter 1 pilot (writes PILOT-APPROVED) so the next chapters can be built',
    })
    await $.command.register({
      name: RESET_COMMAND,
      description: 'Stop tracking a chapter build that is stuck (deletes no files)',
    })
    await refreshNext($).catch(() => undefined)
    if (isActive(await read($, job))) startPolling($)
    return nextHook(e)
  })

  on('command.run', { command: COMMAND }, async $ => ({ text: await buildNext($) }))

  on('command.run', { command: STATUS_COMMAND }, async $ => {
    await update($, isHidden, () => false)
    return { text: statusText(await refreshNext($), await videosDir($)) }
  })

  on('command.run', { command: APPROVE_COMMAND }, async $ => ({ text: await approvePilot($) }))

  on('command.run', { command: RESET_COMMAND }, async $ => ({ text: await reset($) }))

  on('turn.start', async ($, e, nextHook) => {
    const result = await nextHook(e)
    const asked = /\[chapter-builder\][^\n]*Build Chapter (\d+) now\./.exec(e.text)
    const current = await read($, job)
    if (asked !== null && current?.status !== 'running') {
      // Our build turn started: track it, even if it was reset or timed out while queued.
      const chapter = Number(asked[1])
      const isSame = current !== null && current.chapter === chapter
      const startedAt = isSame ? current.startedAt : await $.clock.now()
      await update($, job, () => ({
        chapter,
        status: 'running' as const,
        turnId: result.turnId,
        done: isSame ? current.done : 0,
        stage: isSame ? current.stage : STAGES[0]?.label ?? '',
        folder: isSame ? current.folder : undefined,
        startedAt,
        elapsedSeconds: 0,
      }))
      startPolling($)
    }
    return result
  })

  on('turn.complete', async ($, e, nextHook) => {
    const result = await nextHook(e)
    if (e.agentId !== undefined) return result
    const current = await read($, job)
    if (current?.status === 'running' && current.turnId === e.turnId) await finish($)
    // Any turn may have added files (or PILOT-APPROVED): keep the button current.
    else if (!isActive(current)) await refreshNext($).catch(() => undefined)
    return result
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, nextHook) => {
    if (e.props.hasSurvey || (await read($, isHidden))) return nextHook(e)

    const { Box, Button, Text } = $.ui.resolve(e)
    const current = await read($, job)
    const upcoming = await read($, next)

    if (!isActive(current)) {
      const lastLine =
        current?.status === 'done'
          ? `✓ Chapter ${current.chapter} finished in ${Math.max(1, Math.round(current.elapsedSeconds / 60))} min.`
          : current?.status === 'stopped'
            ? `■ Chapter ${current.chapter} stopped at: ${current.stage} (${current.done}/${STAGES.length}).`
            : current?.status === 'cancelled'
              ? `■ Chapter ${current.chapter} build cancelled: ${current.reason ?? 'reset'}.`
              : undefined
      const reason = upcoming === null ? undefined : blocker(upcoming)
      const total = upcoming?.total === undefined ? '' : ` of ${upcoming.total}`
      const builtText =
        upcoming === null || upcoming.built.length === 0
          ? 'No chapters built yet.'
          : `Built${total}: ${upcoming.built.map(pad).join(', ')}`
      return (
        <Box flexDirection="column">
          {lastLine !== undefined && (
            <Text color={current?.status === 'done' ? 'success' : 'warning'}>{lastLine}</Text>
          )}
          {upcoming !== null &&
            warnings(upcoming, 'the Videos folder').map((line, i) =>
              line.startsWith('⚠') ? (
                <Text key={`warn${i}`} color="warning">
                  {line}
                </Text>
              ) : (
                <Text key={`warn${i}`} dimColor>
                  {line}
                </Text>
              ),
            )}
          {reason === 'pilot' && (
            <Text>Pilot built. Watch Chapter 1 and give feedback. When you are happy, approve it.</Text>
          )}
          <Box>
            {reason === 'all-built' ? (
              <Text color="success">✓ All {upcoming?.total} chapters built.</Text>
            ) : reason === 'pilot' ? (
              <Button
                key="approve"
                variant="primary"
                hotkey="a"
                label="Approve pilot"
                onPress={() => void approvePilot($)}
              />
            ) : (
              <Button
                key="build"
                variant="primary"
                hotkey="n"
                label={upcoming === null ? BUTTON_LABEL : `${BUTTON_LABEL} (Ch ${upcoming.chapter}${total})`}
                onPress={() => void buildNext($)}
              />
            )}
            <Text dimColor>
              {' '}
              {builtText}{' '}
            </Text>
            <Button key="hide" label="Hide" dimColor onPress={() => update($, isHidden, () => true)} />
          </Box>
        </Box>
      )
    }

    const columns = e.props.bodyColumns ?? e.viewport?.columns ?? 80
    const barWidth = Math.max(10, Math.min(50, columns - 45))
    const percent = Math.round((current.done / STAGES.length) * 100)
    const clock = `${Math.floor(current.elapsedSeconds / 60)}:${pad(current.elapsedSeconds % 60)}`
    return (
      <Box flexDirection="column">
        <Box>
          <Text bold>
            {current.status === 'queued' ? '⏳ Queued' : '🎬 Generating'} Chapter {current.chapter}{' '}
            <Text dimColor>{clock}</Text>{' '}
          </Text>
          <Button key="reset" label="Reset" dimColor onPress={() => void reset($)} />
        </Box>
        <Text>
          <Text color="claude">{progressBar(current.done, STAGES.length, barWidth)}</Text> {percent}%{' '}
          <Text dimColor>
            ({current.done}/{STAGES.length}) {current.stage}
          </Text>
        </Text>
      </Box>
    )
  })
}
