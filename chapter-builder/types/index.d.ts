export type JobStatus = 'queued' | 'running' | 'done' | 'stopped'

export type Job = {
  chapter: number
  status: JobStatus
  /** The turn that builds the chapter, once it has started. */
  turnId?: string
  /** How many of the STAGES are finished. */
  done: number
  /** Label of the stage being worked on (or the last one, when finished). */
  stage: string
  folder?: string
  startedAt: number
  elapsedSeconds: number
}

export type NextInfo = {
  /** The first chapter without a finished .mp4. */
  chapter: number
  /** Chapters that already have a finished .mp4. */
  built: number[]
}

declare module 'claude-code' {
  interface PluginState {
    'chapter-builder': { job: Job | null; next: NextInfo | null; isHidden: boolean }
  }
}
