import { expect, mock, test } from 'claude-code/testing'
import type { Engine } from 'claude-code/testing'
import type { On } from 'claude-code'

const BAND = {
  component: 'AbovePrompt',
  props: { hasSurvey: false, isWorking: false, maxRows: 6, bodyColumns: 100, scroll: { top: 0 } },
} as const

type Entry = string | { name: string; size?: number; mtimeMs?: number }

const toEntry = (e: Entry) => {
  const { name, size = 1, mtimeMs = 0 } = typeof e === 'string' ? { name: e } : e
  return name.endsWith('/')
    ? { name: name.slice(0, -1), kind: 'dir' as const, size: 0, mtimeMs: 0, isLink: false }
    : { name, kind: 'file' as const, size, mtimeMs, isLink: false }
}

/** Every file a finished chapter folder holds (VIDEO-SPEC.md §2 and §9). */
const chapterFiles = (nn: string, slug: string): string[] => [
  `ch${nn}-script.md`, `ch${nn}-narration.txt`, `ch${nn}-narration.mp3`, `ch${nn}.srt`, `ch${nn}-title.png`,
  `ch${nn}-${slug}.mp4`,
  `ch${nn}-frame-0002.png`, `ch${nn}-frame-0030.png`, `ch${nn}-frame-0200.png`, `ch${nn}-frame-end.png`,
]

const THREE_CHAPTERS = JSON.stringify([
  { number: 1, title: 'The Coldness of Ice' },
  { number: 2, title: 'The Phone in Your Hand' },
  { number: 3, title: 'Designation' },
])

/** A fake Videos folder; the tree and the file texts can change during a test. */
function world(on: On, tree: Record<string, Entry[]>, texts: Record<string, string> = {}) {
  const submitted: string[] = []
  const written: Record<string, string> = {}
  on('session.cwd', () => ({ value: '/videos' }) as never)
  on('fs.list', ($, e): never => {
    const names = tree[e.path]
    if (names === undefined) throw new Error('ENOENT')
    return { value: names.map(toEntry) } as never
  })
  on('fs.read', ($, e): never => {
    const text = texts[e.path]
    if (text === undefined) throw new Error('ENOENT')
    return { value: text } as never
  })
  on('fs.write', ($, e): never => {
    written[e.path] = e.text
    tree['/videos'] = [...(tree['/videos'] ?? []), e.path.replace('/videos/', '')]
    return { value: undefined } as never
  })
  on('turn.start', ($, e) => ({ turnId: e.turnId }))
  on('turn.complete', () => ({ text: '' }))
  on('ui.status', () => ({ value: undefined }) as never)
  on('ui.toast', () => ({ value: undefined }) as never)
  on('prompt.submit', ($, e) => {
    submitted.push(e.text)
    return { text: e.text }
  })
  on('command.register', () => ({ value: undefined }) as never)
  on('session.start', () => ({ cwd: '/videos' }))
  // What the engine draws above the prompt when the plugin draws nothing.
  on('ui.render', ($, e) => {
    const { Box } = $.ui.resolve(e)
    return <Box key="engine" />
  })
  return { submitted, written }
}

/** Runs one of the plugin's slash commands as if typed, and returns its text. */
async function command($: Engine, name: string): Promise<string> {
  const result = await $.command.run({
    command: name,
    args: '',
    origin: { kind: 'composer' },
    presentation: { isFullscreen: false, columns: 100 },
  })
  return result.text ?? ''
}

async function start($: Engine) {
  await $.session.start({ cwd: '/videos', surface: 'terminal', isInteractive: true })
  return $.ui.mount({ plugin: 'chapter-builder', surface: 'terminal', ...BAND } as never)
}

test('the button builds the next chapter and the bar follows the files', async ($, on) => {
  const clock = mock.clock(on)
  const tree: Record<string, Entry[]> = {
    '/videos': ['VIDEO-SPEC.md', 'chapters.json', 'PILOT-APPROVED', 'ch01-the-coldness-of-ice/'],
    '/videos/ch01-the-coldness-of-ice': chapterFiles('01', 'the-coldness-of-ice'),
  }
  const { submitted } = world(on, tree, { '/videos/chapters.json': THREE_CHAPTERS })
  const ui = await start($)

  const button = await ui.find({ key: 'build' })
  expect(button?.props.label).toBe('▶ Build Next Chapter (Ch 2 of 3)')

  await ui.press({ key: 'build' })
  expect(submitted.length).toBe(1)
  expect(submitted[0]).toContain('Build Chapter 2 now.')
  expect(submitted[0]).toContain('/videos/VIDEO-SPEC.md')
  expect(submitted[0]).toContain('ch02-frame-end.png')

  // Claude writes the script and the narration text.
  tree['/videos'] = [...(tree['/videos'] ?? []), 'ch02-the-phone-in-your-hand/']
  tree['/videos/ch02-the-phone-in-your-hand'] = ['ch02-script.md', 'ch02-narration.txt']
  await clock.advance(2000)
  expect(await ui.find({ type: 'Text', text: /29%/ })).toBeDefined()
  expect(await ui.find({ type: 'Text', text: /Narration audio/ })).toBeDefined()

  // The build turn starts, makes the rest of the files, and ends.
  await $.turn.start({ text: submitted[0] ?? '', turnId: 't1' })
  tree['/videos/ch02-the-phone-in-your-hand'] = chapterFiles('02', 'the-phone-in-your-hand')
  await $.turn.complete({ answer: 'done', durationMs: 1, isAborted: false, turnId: 't1', reason: 'answer' })
  expect(await ui.find({ type: 'Text', text: /Chapter 2 finished/ })).toBeDefined()
  expect((await ui.find({ key: 'build' }))?.props.label).toBe('▶ Build Next Chapter (Ch 3 of 3)')
  await ui.unmount()
})

test('after the pilot, the next chapter waits for approval', async ($, on) => {
  mock.clock(on)
  const tree: Record<string, Entry[]> = {
    '/videos': ['VIDEO-SPEC.md', 'chapters.json', 'ch01-the-coldness-of-ice/'],
    '/videos/ch01-the-coldness-of-ice': chapterFiles('01', 'the-coldness-of-ice'),
  }
  const { submitted, written } = world(on, tree, { '/videos/chapters.json': THREE_CHAPTERS })
  const ui = await start($)

  expect(await ui.find({ key: 'build' })).toBeUndefined()
  expect(await ui.find({ key: 'approve' })).toBeDefined()
  const answer = await command($, 'next-chapter')
  expect(answer).toContain('approve-pilot')
  expect(submitted.length).toBe(0)

  await ui.press({ key: 'approve' })
  expect(Object.keys(written)).toEqual(['/videos/PILOT-APPROVED'])
  expect((await ui.find({ key: 'build' }))?.props.label).toBe('▶ Build Next Chapter (Ch 2 of 3)')
  await ui.unmount()
})

test('after the last chapter it says all chapters are built', async ($, on) => {
  mock.clock(on)
  const tree: Record<string, Entry[]> = {
    '/videos': ['VIDEO-SPEC.md', 'chapters.json', 'PILOT-APPROVED', 'ch01-a/', 'ch02-b/'],
    '/videos/ch01-a': chapterFiles('01', 'a'),
    '/videos/ch02-b': chapterFiles('02', 'b'),
  }
  const twoChapters = JSON.stringify([{ number: 1, title: 'A' }, { number: 2, title: 'B' }])
  const { submitted } = world(on, tree, { '/videos/chapters.json': twoChapters })
  const ui = await start($)

  expect(await ui.find({ type: 'Text', text: /All 2 chapters built/ })).toBeDefined()
  expect(await ui.find({ key: 'build' })).toBeUndefined()
  expect((await command($, 'next-chapter'))).toContain('All 2 chapters built.')
  expect(submitted.length).toBe(0)
  await ui.unmount()
})

test('a half-made chapter does not count as built', async ($, on) => {
  mock.clock(on)
  const all = chapterFiles('01', 'the-coldness-of-ice')
  const cases: Entry[][] = [
    // An empty video, as ffmpeg leaves it when it has just started.
    all.map(f => (f === 'ch01-the-coldness-of-ice.mp4' ? { name: f, size: 0 } : f)),
    // A video that is still being written under its working name, and no frames.
    [...all.slice(0, 5), 'ch01-the-coldness-of-ice.partial.mp4'],
    // A video, but only one check frame.
    [...all.slice(0, 6), 'ch01-frame-0030.png'],
    // Frames older than the video: the video was rebuilt after them.
    all.map(f => (f.endsWith('.mp4') ? { name: f, mtimeMs: 5000 } : { name: f, mtimeMs: 1000 })),
  ]
  const tree: Record<string, Entry[]> = { '/videos': ['VIDEO-SPEC.md', 'ch01-the-coldness-of-ice/'] }
  world(on, tree)
  for (const files of cases) {
    tree['/videos/ch01-the-coldness-of-ice'] = files
    const answer = await command($, 'chapter-status')
    expect(answer).toContain('No chapters built yet.')
    expect(answer).toContain('Next: Chapter 1.')
  }
  tree['/videos/ch01-the-coldness-of-ice'] = all
  expect((await command($, 'chapter-status'))).toContain('Built: 01.')
})

test('a build whose turn never starts times out, and Reset clears it', async ($, on) => {
  const clock = mock.clock(on)
  const tree: Record<string, Entry[]> = { '/videos': ['VIDEO-SPEC.md'] }
  const { submitted } = world(on, tree)
  const ui = await start($)

  await ui.press({ key: 'build' })
  expect(await ui.find({ type: 'Text', text: /Queued/ })).toBeDefined()
  expect((await command($, 'next-chapter'))).toContain('reset-chapter')
  await clock.advance(11 * 60 * 1000)
  expect(await ui.find({ type: 'Text', text: /cancelled: the build turn did not start/ })).toBeDefined()
  expect(await ui.find({ key: 'build' })).toBeDefined()

  await ui.press({ key: 'build' })
  await ui.press({ key: 'reset' })
  expect(await ui.find({ type: 'Text', text: /cancelled: reset by you/ })).toBeDefined()
  expect(await ui.find({ key: 'build' })).toBeDefined()

  // If the queued prompt starts after all, the bar picks the build up again.
  await $.turn.start({ text: submitted[0] ?? '', turnId: 't9' })
  expect(await ui.find({ type: 'Text', text: /Generating/ })).toBeDefined()
  await ui.unmount()
})

test('/chapter-status shows the hidden button without building, and warns about a missing spec', async ($, on) => {
  mock.clock(on)
  const tree: Record<string, Entry[]> = { '/videos': [] }
  const { submitted } = world(on, tree)
  const ui = await start($)

  expect(await ui.find({ type: 'Text', text: /No VIDEO-SPEC.md in the Videos folder/ })).toBeDefined()
  await ui.press({ key: 'hide' })
  expect(await ui.find({ key: 'build' })).toBeUndefined()

  const answer = await command($, 'chapter-status')
  expect(answer).toContain('No VIDEO-SPEC.md in /videos')
  expect(submitted.length).toBe(0)
  expect(await ui.find({ key: 'build' })).toBeDefined()
  await ui.unmount()
})
