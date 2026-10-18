# Architecture

This file explains how the repository fits together. It is based only on the files in this repo.

## Purpose

The goal is a series of short narrated videos, one per chapter of the book
*The Logical Necessity of a Substrateless World*. Each video is a calm, documentary-style
retelling of one chapter, about 3 to 4 minutes long.

The repo has two parts:

| Part | What it is |
|---|---|
| `VIDEO-SPEC.md` | The instructions. Claude Code reads it and does the actual work: writing the script, making the audio, subtitles and video. |
| `chapter-builder/` | A small Claude Code plugin (also called a "mod"). It adds a button that tells Claude to build the next chapter, and shows a progress bar while it works. |

## How the spec and the plugin relate

The plugin does **not** make any audio or video itself. It only:

1. works out which chapter comes next,
2. sends Claude a prompt that says "follow VIDEO-SPEC.md and build Chapter N", and
3. watches the chapter folder and moves a progress bar as each expected file appears.

All the real work (text-to-speech, ffmpeg, Pillow images) is done by Claude Code following the spec.
The plugin's stage list mirrors the file names in spec sections 2, 8 and 9.

```
  You press "Build Next Chapter"  (or type /next-chapter)
              |
              v
  chapter-builder plugin --- finds first chapter with no .mp4
              |
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

## Repository layout

```
videos/                              (this repo; also a plugin "marketplace")
  VIDEO-SPEC.md                      the spec for the whole series
  .claude-plugin/marketplace.json    marketplace "videos", lists one plugin
  chapter-builder/                   the plugin
    .claude-plugin/plugin.json       name, version 0.1.0, types, one setting
    hooks/hooks.json                 loads ./register.tsx
    hooks/register.tsx               all plugin logic
    types/index.d.ts                 shared type definitions
    tests/button.test.tsx            offline test
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
| `session.start` | A Claude Code session starts | Registers the `/next-chapter` command. Works out the next chapter. If a build was already in progress, starts watching again. |
| `command.run` (`next-chapter`) | You type `/next-chapter` | Same as pressing the button. |
| `turn.start` | Claude starts answering a prompt | If a build is queued and the prompt carries the `[chapter-builder]` marker, marks the job as running and remembers that turn's id. |
| `turn.complete` | Claude finishes a turn | If it is the build turn (main agent, same turn id), runs a final check and marks the job `done` (all 7 stages) or `stopped`. Shows a toast and moves the button to the next chapter. |
| `ui.render` (`AbovePrompt`) | The area above the prompt is drawn | Idle: shows the button `▶ Build Next Chapter (Ch N)` (hotkey `n`), the chapters already built, a "Hide" button, and the last result. Busy: shows "Queued" or "Generating Chapter N", a timer, the bar, the percent and the current stage. |

While a job is active, a timer re-reads the chapter folder every 2 seconds and updates the bar.
It also puts a short status like `Ch 2: 29%` in the status line.

### How "next chapter" is chosen

The plugin lists folders in `Videos/` named like `ch01-...` (2 or 3 digits).
A chapter counts as built if its folder holds any `.mp4` file.
The next chapter is the lowest number, starting from 1, that is not built.

## Types (`types/index.d.ts`)

- `JobStatus`: `queued`, `running`, `done` or `stopped`.
- `Job`: the chapter number, its status, the build turn's id, how many stages are done,
  the current stage label, the folder, the start time and elapsed seconds.
- `NextInfo`: the next chapter number and the list of chapters already built.
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
| 6 | Video | any `.mp4` | `chNN-<slug>.mp4`: title, narration, burned-in subtitles (§8) |
| 7 | Check frames | any other `.png` | Frames at 0:02, 0:30, 2:00 and the end (§9) |

The spec also creates working files the plugin ignores: `chNN-raw.mp3` and `chNN-raw.srt`.
After each chapter, Claude updates `manifest.csv` and adds new terms to `pronunciation.json`.

## Inputs, outputs and where files live

- **Input:** the latest complete manuscript in
  `G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\`.
  Ignore `_Archive/`, `Anatta-to-Emptiness/` and `Companion-Essays/`. If there are several
  candidates, Claude must ask which one.
- **Output root:** `...\Substrateless-World\Videos\`. It should hold:
  - `VIDEO-SPEC.md` (the plugin builds its prompt from this path)
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

- with Chapter 1 built, the button reads `▶ Build Next Chapter (Ch 2)`;
- pressing it sends one prompt containing `Build Chapter 2 now.` and the spec's path;
- after the script and narration text appear, the bar shows 29% and the "Narration audio" stage;
- when all files exist and the turn ends, it shows "Chapter 2 finished" and the button moves to Ch 3.

Run it with `claude plugin test chapter-builder` from the repo root. No network or keys are needed.
