import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Job, JobStatus, NextInfo } from '../types'

// The button's name, as it appears above the prompt.
export const BUTTON_LABEL = '▶ Build Next Chapter'
const COMMAND = 'next-chapter'
const MARKER = '[chapter-builder]'
const POLL_MS = 2000

const job = atom({ plugin: 'chapter-builder', key: 'job' } as const, null)
const next = atom({ plugin: 'chapter-builder', key: 'next' } as const, null)
const isHidden = atom({ plugin: 'chapter-builder', key: 'isHidden' } as const, false)

// The per-chapter pipeline from VIDEO-SPEC.md (§2, §8, §9), in order.
// Each stage is finished when its file shows up in the chapter folder.
export const STAGES: { label: string; isDone: (files: string[], nn: string) => boolean }[] = [
  { label: 'Writing script (.md)', isDone: (f, nn) => f.includes(`ch${nn}-script.md`) },
  { label: 'Narration text (.txt)', isDone: (f, nn) => f.includes(`ch${nn}-narration.txt`) },
  { label: 'Narration audio (.mp3)', isDone: (f, nn) => f.includes(`ch${nn}-narration.mp3`) },
  { label: 'Subtitles (.srt)', isDone: (f, nn) => f.includes(`ch${nn}.srt`) },
  { label: 'Title card (.png)', isDone: (f, nn) => f.includes(`ch${nn}-title.png`) },
  { label: 'Video (.mp4)', isDone: f => f.some(n => n.endsWith('.mp4')) },
  { label: 'Check frames (.png)', isDone: f => f.some(n => n.endsWith('.png') && !n.endsWith('-title.png')) },
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
export function countDone(files: string[], chapter: number): number {
  const nn = pad(chapter)
  let done = 0
  for (const stage of STAGES) {
    if (!stage.isDone(files, nn)) break
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

async function videosDir($: EngineInterface): Promise<string> {
  return configuredDir === '' ? $.session.cwd() : configuredDir
}

async function chapterFolders($: EngineInterface): Promise<Map<number, string>> {
  const dir = await videosDir($)
  const entries = await $.fs.list(dir).catch(() => [])
  const folders = new Map<number, string>()
  for (const entry of entries) {
    const match = /^ch(\d{2,3})-/.exec(entry.name)
    if (entry.kind === 'dir' && match) folders.set(Number(match[1]), joinPath(dir, entry.name))
  }
  return folders
}

async function filesIn($: EngineInterface, folder: string | undefined): Promise<string[]> {
  if (folder === undefined) return []
  return (await $.fs.list(folder).catch(() => [])).map(e => e.name)
}

// Finds the first chapter without a finished .mp4.
async function refreshNext($: EngineInterface): Promise<NextInfo> {
  const built: number[] = []
  for (const [chapter, folder] of await chapterFolders($)) {
    if ((await filesIn($, folder)).some(n => n.endsWith('.mp4'))) built.push(chapter)
  }
  built.sort((a, b) => a - b)
  let chapter = 1
  while (built.includes(chapter)) chapter += 1
  const info: NextInfo = { chapter, built }
  await update($, next, () => info)
  return info
}

// Re-reads the chapter folder and moves the progress bar.
async function scan($: EngineInterface): Promise<void> {
  const current = await read($, job)
  if (!isActive(current)) return
  const folder = (await chapterFolders($)).get(current.chapter)
  const done = countDone(await filesIn($, folder), current.chapter)
  const now = await $.clock.now()
  await update($, job, j =>
    j === null
      ? j
      : {
          ...j,
          folder,
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
  poll?.cancel()
  poll = undefined
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
    `Follow ${joinPath(dir, 'VIDEO-SPEC.md')} exactly: read it first, then produce Chapter ${chapter} end to end in the order MD → MP3 → SRT → MP4 (ch${nn}-script.md, ch${nn}-narration.txt, ch${nn}-narration.mp3, ch${nn}.srt, ch${nn}-title.png, ch${nn}-<slug>.mp4), inside a ch${nn}-<slug>/ folder under ${dir}.`,
    `Use build.py (--chapter ${chapter} --skip-existing) where it exists; reuse anything already made for this chapter.`,
    `Run the §9 quality checks, save the check frames as PNGs in the chapter folder, update manifest.csv, and add any new terms to pronunciation.json.`,
    chapter === 1
      ? `This is the pilot (§10): when it is done, stop and report the script, the duration, new pronunciation entries and the check frames.`
      : `When it is done, report a one-line status and any new terms to listen to. If a check fails, stop and say which.`,
  ].join('\n')
}

// What the button and /next-chapter do.
async function buildNext($: EngineInterface): Promise<string> {
  const current = await read($, job)
  if (isActive(current)) return `Chapter ${current.chapter} is already being built.`
  const dir = await videosDir($)
  const { chapter } = await refreshNext($)
  const queued: Job = {
    chapter,
    status: 'queued',
    done: 0,
    stage: STAGES[0]?.label ?? '',
    startedAt: await $.clock.now(),
    elapsedSeconds: 0,
  }
  await update($, job, () => queued)
  await update($, isHidden, () => false)
  startPolling($)
  void scan($)
  void $.prompt.submit({ text: buildPrompt(dir, chapter) })
  return `Building Chapter ${chapter}…`
}

export const register: Register = (on, options) => {
  configuredDir = String((options as { videosDir?: unknown }).videosDir ?? '').trim()

  on('session.start', async ($, e, nextHook) => {
    await $.command.register({
      name: COMMAND,
      description: 'Continue the video series: build the next chapter (same as the Build Next Chapter button)',
    })
    await refreshNext($).catch(() => undefined)
    if (isActive(await read($, job))) startPolling($)
    return nextHook(e)
  })

  on('command.run', { command: COMMAND }, async $ => ({ text: await buildNext($) }))

  on('turn.start', async ($, e, nextHook) => {
    const result = await nextHook(e)
    const current = await read($, job)
    if (current?.status === 'queued' && e.text.includes(MARKER)) {
      await update($, job, j => (j === null ? j : { ...j, status: 'running' as const, turnId: result.turnId }))
    }
    return result
  })

  on('turn.complete', async ($, e, nextHook) => {
    const result = await nextHook(e)
    const current = await read($, job)
    if (e.agentId === undefined && current?.status === 'running' && current.turnId === e.turnId) {
      await finish($)
    }
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
            : undefined
      return (
        <Box flexDirection="column">
          {lastLine !== undefined && (
            <Text color={current?.status === 'done' ? 'success' : 'warning'}>{lastLine}</Text>
          )}
          <Box>
            <Button
              key="build"
              variant="primary"
              hotkey="n"
              label={upcoming === null ? BUTTON_LABEL : `${BUTTON_LABEL} (Ch ${upcoming.chapter})`}
              onPress={() => void buildNext($)}
            />
            <Text dimColor>
              {' '}
              {upcoming === null || upcoming.built.length === 0
                ? 'No chapters built yet.'
                : `Built: ${upcoming.built.map(pad).join(', ')}`}{' '}
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
        <Text bold>
          {current.status === 'queued' ? '⏳ Queued' : '🎬 Generating'} Chapter {current.chapter}{' '}
          <Text dimColor>{clock}</Text>
        </Text>
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
