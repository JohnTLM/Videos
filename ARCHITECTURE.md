# Architecture

This file explains how the repository fits together. It is based only on the files in this repo.

## Purpose

The goal is a series of short narrated videos, one per chapter of the book
*The Logical Necessity of a Substrateless World*. Each video is a calm, documentary-style
retelling of one chapter, about 3 to 4 minutes long (3:00 to 4:30 is allowed).

The repo has two parts:

| Part | What it is |
|---|---|
| `VIDEO-SPEC.md` | The instructions. Claude Code reads it and does the actual work: writing the script, making the audio, subtitles and video. This repo holds the master copy. The copy in the Drive `Videos/` folder is the working copy that Claude reads and edits. |
| `chapter-builder/` | A small Claude Code plugin (also called a "mod"). It adds a button that tells Claude to build the next chapter, and shows a progress bar while it works. |

## How the spec and the plugin relate

The plugin does **not** make any audio or video itself. It only:

1. works out which chapter comes next (and whether one may be built yet),
2. sends Claude a prompt that says "follow VIDEO-SPEC.md and build Chapter N",
3. watches the chapter folder and moves a progress bar as each expected file appears, and
4. writes one small file, `PILOT-APPROVED`, when you approve the pilot.

All the real work (text-to-speech, ffmpeg, Pillow images) is done by Claude Code following the spec.
The plugin's stage list mirrors the file names in spec sections 2, 8 and 9.

```
  You press "Build Next Chapter"  (or type /next-chapter)
              |
              v
  chapter-builder plugin --- finds first chapter not fully built
              |             (stops here if the pilot is not approved,
              |              or if all chapters in chapters.json are built)
              |  sends prompt: "[chapter-builder] ... Build Chapter N now.
              |                 Follow <Videos>/VIDEO-SPEC.md exactly ..."
              v
  Claude Code (reads VIDEO-SPEC.md, runs edge-tts, ffmpeg, Pillow, build.py)
              |
              |  writes files into  Videos/chNN-<slug>/
              v
  Plugin checks the folder every 2 s --> progress bar (0..7 stages)
              |
              v
  Turn ends --> "Chapter N finished" or "stopped at: <stage>"
```

### Where the spec lives

There are two copies of `VIDEO-SPEC.md`. The one in this repo is the master. The one in the Drive
`Videos/` folder is the working copy: the plugin points Claude at it, and feedback is written into
it (spec §10, step 3). Copy changes back to the repo by hand. The plugin shows a warning if the
`Videos/` folder has no `VIDEO-SPEC.md`.

## Repository layout

```
videos/                              (this repo; also a plugin "marketplace")
  VIDEO-SPEC.md                      the spec for the whole series
  .claude-plugin/marketplace.json    marketplace "videos", lists one plugin
  chapter-builder/                   the plugin
    .claude-plugin/plugin.json       name, version 0.2.0, author, types, one setting
    hooks/hooks.json                 loads ./register.tsx
    hooks/register.tsx               all plugin logic
    types/index.d.ts                 shared type definitions
    tests/button.test.tsx            offline tests
    README.md                        short plugin guide
```

A **marketplace** is a list of plugins that Claude Code can install from.
Here the marketplace is named `videos` and lists one plugin, `chapter-builder`,
found at `./chapter-builder`.

### Plugin setting

`plugin.json` declares one option, `videosDir`: the `Videos/` folder that holds `VIDEO-SPEC.md`.
If it is empty, the plugin uses the folder Claude Code was started in.

## Hooks: what each does and when it fires

A **hook** is a function Claude Code calls at a certain moment. All of them live in
`hooks/register.tsx`.

| Hook | Fires when | What it does |
|---|---|---|
| `session.start` | A Claude Code session starts | Registers the four commands. Works out the next chapter. If a build was already in progress, starts watching again. |
| `command.run` (`next-chapter`) | You type `/next-chapter` | Same as pressing the button. Says why not, if the pilot needs approval or all chapters are built. |
| `command.run` (`chapter-status`) | You type `/chapter-status` | Shows the band again after "Hide" and prints what is built. Builds nothing. |
| `command.run` (`approve-pilot`) | You type `/approve-pilot` | Same as the "Approve pilot" button: writes `PILOT-APPROVED` in `Videos/`. |
| `command.run` (`reset-chapter`) | You type `/reset-chapter` | Same as the "Reset" button: stops tracking the current build. Deletes no files. |
| `turn.start` | Claude starts answering a prompt | If the prompt carries the `[chapter-builder]` marker and says "Build Chapter N now.", marks the job as running and remembers that turn's id. This also catches a build that was reset or timed out while it waited in the queue. |
| `turn.complete` | Claude finishes a turn | If it is the build turn (main agent, same turn id), runs a final check and marks the job `done` (all 7 stages) or `stopped`. Shows a toast and moves the button to the next chapter. After any other turn, re-reads the folder so the band stays current. |
| `ui.render` (`AbovePrompt`) | The area above the prompt is drawn | Idle: shows the button `▶ Build Next Chapter (Ch N of M)` (hotkey `n`), or "Approve pilot" (hotkey `a`), or "All M chapters built". Also the chapters already built, a "Hide" button, warnings, and the last result. Busy: shows "Queued" or "Generating Chapter N", a timer, a "Reset" button, the bar, the percent and the current stage. |

While a job is active, a timer re-reads the chapter folder every 2 seconds and updates the bar.
It also puts a short status like `Ch 2: 29%` in the status line. If a job is still "Queued"
after 10 minutes (its turn never started), it is cancelled. If the prompt was refused, it is
cancelled at once.

### How "next chapter" is chosen

The plugin lists folders in `Videos/` named like `ch01-...` (2 or 3 digits).
A chapter counts as built only when all 7 stages below are done. In short: its folder holds
`<folder name>.mp4`, not empty, and all four check frames, each written after the video.
The next chapter is the lowest number, starting from 1, that is not built.

Two files in `Videos/` can stop the button:

- **Pilot gate.** Once Chapter 1 is built, later chapters are not offered until
  `PILOT-APPROVED` exists. The "Approve pilot" button or `/approve-pilot` writes it.
- **Last chapter.** `chapters.json` (written at setup, spec §10) lists every chapter. Its
  length is the chapter count. When the next chapter is past the end, the band says
  "All N chapters built". Without the file, the count is unknown and the band says so.

## Types (`types/index.d.ts`)

- `JobStatus`: `queued`, `running`, `done`, `stopped` or `cancelled`.
- `Job`: the chapter number, its status, the build turn's id, how many stages are done,
  the current stage label, the folder, the start time, elapsed seconds, and why it was cancelled.
- `NextInfo`: the next chapter number, the chapters already built, the chapter count (if
  known), and whether `VIDEO-SPEC.md` and `PILOT-APPROVED` are in `Videos/`.
- The plugin keeps three pieces of saved state: `job`, `next` and `isHidden`.

## The per-chapter pipeline and its artifacts

The spec's order is **MD → MP3 → SRT → MP4**. The SRT is made from the audio, so subtitle
timings match what is spoken. The plugin tracks 7 stages, in order. A stage counts only if every
earlier stage is also done.

| # | Stage (plugin label) | File the plugin looks for | What the spec says it is |
|---|---|---|---|
| 1 | Writing script | `chNN-script.md` | Condensed script, 450-550 words, with front matter (§4) |
| 2 | Narration text | `chNN-narration.txt` | Script body only, with pronunciation swaps (§5) |
| 3 | Narration audio | `chNN-narration.mp3` | edge-tts output, loudness-normalised to -16 LUFS, 48 kHz (§6) |
| 4 | Subtitles | `chNN.srt` | Cleaned SRT: spellings restored, line limits, +5 s shift (§6) |
| 5 | Title card | `chNN-title.png` | 1920x1080 card with "CHAPTER N" and the title (§7) |
| 6 | Video | `chNN-<slug>.mp4`, not empty (`<slug>` from the folder name) | Title, narration, burned-in subtitles (§8). Written as `.partial.mp4` and renamed when ffmpeg is done |
| 7 | Check frames | `chNN-frame-0002.png`, `-0030`, `-0200`, `-end`, all newer than the video | Frames at 0:02, 0:30, 2:00 and the end (§9) |

The spec also creates working files the plugin ignores: `chNN-raw.mp3`, `chNN-raw.srt` and
`chNN-<slug>.partial.mp4`. The video counts only under its final name, so a half-written
ffmpeg output never counts. A frame older than the video means the video was rebuilt after
it, so the chapter does not count until the frames are taken again.
After each chapter, Claude updates `manifest.csv` and adds new terms to `pronunciation.json`.

## Inputs, outputs and where files live

- **Input:** the latest complete manuscript in
  `G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\`.
  Ignore `_Archive/`, `Anatta-to-Emptiness/` and `Companion-Essays/`. If there are several
  candidates, Claude must ask which one.
- **Output root:** `...\Substrateless-World\Videos\`. It should hold:
  - `VIDEO-SPEC.md` (the working copy; the plugin builds its prompt from this path)
  - `chapters.json` (every chapter's number and title, written at setup)
  - `PILOT-APPROVED` (written when you approve the pilot)
  - `pronunciation.json` (display spelling → spoken form)
  - `assets/fonts/`, `assets/background.png`, and an optional `assets/music.mp3`
  - one `chNN-<slug>/` folder per chapter
  - `manifest.csv` (number, title, words, duration, status)
  - `build.py` (to be written by Claude; `--chapter N`, `--all`, `--skip-existing`)
- **Rule:** Claude may create files freely, but must never delete or overwrite anything outside `Videos/`.

## External tools and services

| Tool | Used for | Notes |
|---|---|---|
| `edge-tts` (Python) | Narration audio and raw subtitles | Voice `en-US-AndrewNeural`, `--rate=-8%`, `--pitch=-2Hz`. Uses Microsoft's online voice service, so it needs internet. No API key appears in the spec. |
| `ffmpeg` / `ffprobe` | Loudness, VTT→SRT, video assembly, subtitle burn-in, duration checks | H.264 `libx264`, AAC 192 kbps, 1920x1080 at 30 fps. Install with `winget install Gyan.FFmpeg`. |
| Pillow (Python) | Background image and title cards | Background is 2120x1192, animated with `zoompan`. |
| Google Fonts | Title font (Cormorant Garamond or EB Garamond), subtitle font (Source Sans 3 or Inter) | Fallbacks: Georgia and Segoe UI from Windows. |
| Claude Code | Runs the plugin and does all the work | Speech-to-text tools like Whisper are **not** used; subtitles come from edge-tts. |

## Tests

`chapter-builder/tests/button.test.tsx` runs fully offline with a fake file system and fake clock.
It checks that:

- with Chapter 1 built and approved, the button reads `▶ Build Next Chapter (Ch 2 of 3)`;
  pressing it sends one prompt with `Build Chapter 2 now.` and the spec's path; the bar shows
  29% after two files; and when the turn ends it shows "Chapter 2 finished" and moves to Ch 3;
- with Chapter 1 built but not approved, there is no build button, `/next-chapter` builds
  nothing, and "Approve pilot" writes `PILOT-APPROVED` and brings the build button back;
- after the last chapter in `chapters.json`, the band says "All 2 chapters built";
- an empty video, a `.partial.mp4`, missing frames, or frames older than the video do not count;
- a build that never starts is cancelled after 10 minutes, "Reset" cancels one at once, and a
  late start is tracked again;
- `/chapter-status` brings back a hidden band without building, and a missing
  `VIDEO-SPEC.md` shows a warning.

Run it with `claude plugin test chapter-builder` from the repo root. No network or keys are needed.
