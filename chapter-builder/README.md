# chapter-builder

A Claude Code mod for the *Substrateless World* video series (see `VIDEO-SPEC.md`).

It adds a **▶ Build Next Chapter** button above the prompt (hotkey `n` once the band has focus; also `/next-chapter`):

1. Pressing it finds the first chapter in `Videos/` that is not fully built and asks Claude to build it end to end, following `VIDEO-SPEC.md` (MD → MP3 → SRT → MP4, quality checks, `manifest.csv`).
2. While it runs, a progress bar shows the 7 stages, ticking forward as each file appears in `chNN-<slug>/`:
   script `.md` → narration `.txt` → `.mp3` → `.srt` → title `.png` → `chNN-<slug>.mp4` → four check frames (`chNN-frame-0002/0030/0200/end.png`).
3. When the turn ends it shows ✓ finished (or where it stopped) and the button moves on to the next chapter.

A chapter counts as built only when its video is there under its final name, is not empty, and all four check frames were made after it.

## Pilot gate and last chapter

- After Chapter 1 (the pilot) is built, the button changes to **Approve pilot** (hotkey `a`, or `/approve-pilot`). Review the video first. Approving writes `PILOT-APPROVED` in `Videos/`. Only then is Chapter 2 offered.
- The chapter count comes from `Videos/chapters.json`, which Claude writes at setup (spec §10). After the last chapter the band says **All N chapters built**.

## Commands

- `/next-chapter`: build the next chapter (same as the button).
- `/chapter-status`: show the band again after "Hide", and say what is built. Builds nothing.
- `/approve-pilot`: approve Chapter 1.
- `/reset-chapter`: stop tracking a stuck build (also the **Reset** button). Deletes no files. A build still "Queued" after 10 minutes is cancelled by itself.

## Install

```
/plugin install chapter-builder --marketplace JohnTLM/videos
```

Run Claude Code from inside the `Videos\` folder, or set the folder in `/config` → `chapter-builder.videosDir`.
Put `VIDEO-SPEC.md` in that folder: it is the working copy. The band warns you if it is missing.

## The Substrateless World series and the plugin (moved from the main README on 2026-11-08)

This repo turns the book *The Logical Necessity of a Substrateless World* into short narrated
videos, one per chapter. Each video is about 3 to 4 minutes: a title card, then calm narration
over a dark background, with subtitles.

Claude Code does the work. It follows a written spec. A small plugin adds a
**▶ Build Next Chapter** button so you can build one chapter at a time and watch its progress.

- [ARCHITECTURE.md](ARCHITECTURE.md): how the parts fit together
- [VIDEO-SPEC.md](../VIDEO-SPEC.md): the full instructions Claude follows
- 
Readers watch the finished videos, and read each chapter, on the Thusness website. This repository
used to hold a second, small book website (`site/`); it was removed on 2026-10-21 because the
Thusness website already does that job.

## Prerequisites

- **Claude Code** (the command-line app).
- **Windows** with Google Drive for desktop. The book and outputs live on `G:\My Drive\...`.
- **Python** with `edge-tts` and `pillow`: `pip install edge-tts pillow`.
- **ffmpeg**: `winget install Gyan.FFmpeg`, or check that `ffmpeg -version` works.
- **Internet**, for the voice service used by edge-tts and for the Google Fonts download.

Claude can install the Python packages and ffmpeg for you during setup (spec §6 and §10).

## Install the plugin

The repo is a plugin **marketplace** (a list of plugins) named `videos`. It holds one plugin,
`chapter-builder`. In a terminal:

```
claude plugin install chapter-builder --marketplace JohnTLM/videos
```

Or inside Claude Code:

```
/plugin marketplace add JohnTLM/videos
/plugin install chapter-builder@videos
```

Restart Claude Code after installing.

## Set up the Videos folder

1. Create the output folder:
   `G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\Videos\`
2. Copy `VIDEO-SPEC.md` into it. This copy is the **working copy**. Claude reads it there, and
   your feedback is written there. The copy in this repo is the master. The plugin warns you if
   the `Videos\` folder has no `VIDEO-SPEC.md`.
3. Start Claude Code **inside** that `Videos\` folder.
   Or set the folder once in `/config` under `chapter-builder.videosDir`.

## Workflow (the original Book 1 chapter plugin, 2026-10; for new videos see "How a new video goes from idea to the website" above)

1. **Setup.** Ask Claude to do the setup step in `VIDEO-SPEC.md` §10. It installs the tools,
   makes the background and fonts, creates `pronunciation.json`, and lists every chapter in
   `chapters.json`. The plugin uses that file to know how many chapters there are.
2. **Pilot: Chapter 1.** Press **▶ Build Next Chapter (Ch 1)**. You can also press `n` when the
   button area has focus, or type `/next-chapter`. A progress bar moves through 7 stages:
   script → narration text → audio → subtitles → title card → video → check frames.
3. **Review.** Claude stops after Chapter 1. It reports the script, the length, new
   pronunciation entries, and the check frames. Watch the video and listen to the voice.
4. **Give feedback.** Tell Claude what to change (voice, pace, look, how much to condense).
   Ask it to write the changes into `VIDEO-SPEC.md` in `Videos\` so they stick. Then copy
   that file back to this repo, so the master stays up to date.
5. **Approve the pilot.** The button now says **Approve pilot** instead of offering Chapter 2.
   Press it (hotkey `a`), or type `/approve-pilot`, when you are happy. This writes a file
   named `PILOT-APPROVED` in `Videos\`. You can also create that file yourself.
6. **Batch.** Press the button again for each next chapter. After each one, Claude gives a
   one-line status and pauses if a check fails.
7. **Finish.** After the last chapter the band says **All N chapters built**. Ask for the
   summary table of all chapters and the list of words to listen to.

### Commands

| Command | What it does |
|---|---|
| `/next-chapter` | Same as the button: builds the next chapter. |
| `/chapter-status` | Shows the button again (after "Hide") and says what is built. Builds nothing. |
| `/approve-pilot` | Approves Chapter 1, so later chapters can be built. |
| `/reset-chapter` | Stops tracking a build that is stuck. Deletes no files. |

## Where outputs go

Everything goes under `...\Substrateless-World\Videos\`:

- `chNN-<slug>\` per chapter, for example `ch01-the-coldness-of-ice\`. It holds the script
  (`.md`), narration text (`.txt`), audio (`.mp3`), subtitles (`.srt`), title card, the
  final `chNN-<slug>.mp4`, and four check frames: `chNN-frame-0002.png`, `-0030`, `-0200`
  and `-end`.
- `VIDEO-SPEC.md`: the working copy of the spec.
- `chapters.json`: every chapter's number and title, written at setup.
- `PILOT-APPROVED`: there once you approve the pilot.
- `manifest.csv`: one row per chapter with words, duration and status.
- `pronunciation.json`: how to say Sanskrit, Pali, Tibetan and Japanese terms.
- `assets\`: fonts, the background image, and an optional `music.mp3`.

Claude must never delete or overwrite anything outside `Videos\`.

## Running the tests

The plugin has offline tests. They use a fake file system and a fake clock, so they are free
and need no internet or keys. From the repo root:

```
claude plugin test chapter-builder
```

To check the manifests: `claude plugin validate .`

## Troubleshooting

- **Button shows a chapter you think is built.** A chapter counts as built only when its
  `chNN-<slug>\` folder holds `chNN-<slug>.mp4` (not empty) and all four check frames, made
  after the video. Check the file names. Check that Claude Code runs in the right `Videos\`
  folder, or set `chapter-builder.videosDir`.
- **Button says "Approve pilot".** Chapter 1 is built and waits for your review. See Workflow
  step 5.
- **Button shows "Ch N" past the last chapter, or "Chapter count unknown".** `chapters.json`
  is missing or broken. Ask Claude to write it (spec §10, step 1).
- **Bar stuck on one stage.** Stages count in order. If one file is missing, later files do
  not count. Check the file names match the table in ARCHITECTURE.md.
- **"Stopped at: ..." message.** The build turn ended early. Press the button again. It picks
  the same chapter and reuses files already made.
- **"Chapter N is already being built."** A build is still running. Wait for the turn to end.
  If it is stuck on "Queued", press **Reset** or type `/reset-chapter`. A build that has not
  started after 10 minutes is cancelled by itself. If the queued prompt starts later anyway,
  the bar picks it up again.
- **Button gone.** You pressed "Hide". Type `/chapter-status` to bring it back. It builds nothing.
- **"No VIDEO-SPEC.md in the Videos folder".** Copy the spec from this repo into `Videos\`.
- **Subtitle errors from ffmpeg on Windows.** Run ffmpeg inside the chapter folder and pass the
  SRT as a bare file name (spec §7).
- **edge-tts wrote a `.vtt` file.** Convert it: `ffmpeg -i in.vtt out.srt` (spec §6).
