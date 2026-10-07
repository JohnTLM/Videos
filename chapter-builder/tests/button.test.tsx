import { expect, mock, test } from 'claude-code/testing'

const BAND = {
  component: 'AbovePrompt',
  props: { hasSurvey: false, isWorking: false, maxRows: 6, bodyColumns: 100, scroll: { top: 0 } },
} as const

const file = (name: string) => ({ name, kind: 'file' as const, size: 1, mtimeMs: 0, isLink: false })
const dir = (name: string) => ({ name, kind: 'dir' as const, size: 0, mtimeMs: 0, isLink: false })

test('the button builds the next chapter and the bar follows the files', async ($, on) => {
  const clock = mock.clock(on)
  const tree: Record<string, string[]> = {
    '/videos': ['VIDEO-SPEC.md', 'ch01-the-coldness-of-ice/'],
    '/videos/ch01-the-coldness-of-ice': ['ch01-script.md', 'ch01-the-coldness-of-ice.mp4'],
  }
  const submitted: string[] = []
  on('session.cwd', () => ({ value: '/videos' }) as never)
  on('fs.list', ($, e): never => {
    const names = tree[e.path]
    if (names === undefined) throw new Error('ENOENT')
    return { value: names.map(n => (n.endsWith('/') ? dir(n.slice(0, -1)) : file(n))) } as never
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
  await $.session.start({ cwd: '/videos', surface: 'terminal', isInteractive: true })
  const ui = await $.ui.mount({ plugin: 'chapter-builder', surface: 'terminal', ...BAND } as never)

  const button = await ui.find({ key: 'build' })
  expect(button?.props.label).toBe('▶ Build Next Chapter (Ch 2)')

  await ui.press({ key: 'build' })
  expect(submitted.length).toBe(1)
  expect(submitted[0]).toContain('Build Chapter 2 now.')
  expect(submitted[0]).toContain('/videos/VIDEO-SPEC.md')

  // Claude writes the script and the narration text.
  tree['/videos'] = [...(tree['/videos'] ?? []), 'ch02-the-phone-in-your-hand/']
  tree['/videos/ch02-the-phone-in-your-hand'] = ['ch02-script.md', 'ch02-narration.txt']
  await clock.advance(2000)
  expect(await ui.find({ type: 'Text', text: /29%/ })).toBeDefined()
  expect(await ui.find({ type: 'Text', text: /Narration audio/ })).toBeDefined()

  // The build turn starts, makes the rest of the files, and ends.
  await $.turn.start({ text: submitted[0] ?? '', turnId: 't1' })
  tree['/videos/ch02-the-phone-in-your-hand'] = [
    'ch02-script.md', 'ch02-narration.txt', 'ch02-narration.mp3', 'ch02.srt',
    'ch02-title.png', 'ch02-the-phone-in-your-hand.mp4', 'ch02-frame-0030.png',
  ]
  await $.turn.complete({ answer: 'done', durationMs: 1, isAborted: false, turnId: 't1', reason: 'answer' })
  expect(await ui.find({ type: 'Text', text: /Chapter 2 finished/ })).toBeDefined()
  expect((await ui.find({ key: 'build' }))?.props.label).toBe('▶ Build Next Chapter (Ch 3)')
  await ui.unmount()
})
