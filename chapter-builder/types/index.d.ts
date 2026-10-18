export type JobStatus = 'queued' | 'running' | 'done' | 'stopped' | 'cancelled'

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
  /** Why the job was cancelled: reset by the owner, timed out, or not sent. */
  reason?: string
}

export type NextInfo = {
  /** The first chapter that is not fully built. */
  chapter: number
  /** Chapters with all their files: the video and the four check frames. */
  built: number[]
  /** How many chapters the book has, from chapters.json; absent when unknown. */
  total?: number
  /** A problem reading chapters.json, if there was one. */
  totalWarning?: string
  /** Whether the Videos folder holds VIDEO-SPEC.md (the working copy). */
  hasSpec: boolean
  /** Whether the Videos folder holds PILOT-APPROVED. */
  isPilotApproved: boolean
}

declare module 'claude-code' {
  interface PluginState {
    'chapter-builder': { job: Job | null; next: NextInfo | null; isHidden: boolean }
  }
}
