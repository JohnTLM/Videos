# Substrateless World videos

This repo turns the book *The Logical Necessity of a Substrateless World* into short narrated
videos, one per chapter. Each video is about 3 to 4 minutes: a title card, then calm narration
over a dark background, with subtitles.

Claude Code does the work. It follows a written spec. A small plugin adds a
**▶ Build Next Chapter** button so you can build one chapter at a time and watch its progress.

- [ARCHITECTURE.md](ARCHITECTURE.md): how the parts fit together
- [VIDEO-SPEC.md](VIDEO-SPEC.md): the full instructions Claude follows
- [chapter-builder/README.md](chapter-builder/README.md): the plugin in brief

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
2. Copy `VIDEO-SPEC.md` into it. The plugin tells Claude to read the spec from this folder.
3. Start Claude Code **inside** that `Videos\` folder.
   Or set the folder once in `/config` under `chapter-builder.videosDir`.

## Workflow

1. **Setup.** Ask Claude to do the setup step in `VIDEO-SPEC.md` §10. It installs the tools,
   makes the background and fonts, creates `pronunciation.json`, and lists every chapter.
2. **Pilot: Chapter 1.** Press **▶ Build Next Chapter (Ch 1)**. You can also press `n` when the
   button area has focus, or type `/next-chapter`. A progress bar moves through 7 stages:
   script → narration text → audio → subtitles → title card → video → check frames.
3. **Review.** Claude stops after Chapter 1. It reports the script, the length, new
   pronunciation entries, and the check frames. Watch the video and listen to the voice.
4. **Give feedback.** Tell Claude what to change (voice, pace, look, how much to condense).
   Ask it to write the changes into `VIDEO-SPEC.md` so they stick. If you change the copy in
   `Videos\`, copy it back to this repo too.
5. **Batch.** Press the button again for each next chapter. After each one, Claude gives a
   one-line status and pauses if a check fails.
6. **Finish.** Ask for the summary table of all chapters and the list of words to listen to.

## Where outputs go

Everything goes under `...\Substrateless-World\Videos\`:

- `chNN-<slug>\` per chapter, for example `ch01-the-coldness-of-ice\`. It holds the script
  (`.md`), narration text (`.txt`), audio (`.mp3`), subtitles (`.srt`), title card, the
  final `.mp4`, and check-frame PNGs.
- `manifest.csv`: one row per chapter with words, duration and status.
- `pronunciation.json`: how to say Sanskrit, Pali, Tibetan and Japanese terms.
- `assets\`: fonts, the background image, and an optional `music.mp3`.

Claude must never delete or overwrite anything outside `Videos\`.

## Running the tests

The plugin has one offline test. It uses a fake file system, so it is free and needs no
internet or keys. From the repo root:

```
claude plugin test chapter-builder
```

To check the manifests: `claude plugin validate .`

## Troubleshooting

- **Button shows Ch 1 even though you built it.** A chapter counts as built only when its
  `chNN-...` folder holds an `.mp4`. Check that Claude Code runs in the right `Videos\` folder,
  or set `chapter-builder.videosDir`.
- **Bar stuck on one stage.** Stages count in order. If one file is missing, later files do
  not count. Check the file names match the table in ARCHITECTURE.md.
- **"Stopped at: ..." message.** The build turn ended early. Press the button again. It picks
  the same chapter and reuses files already made.
- **"Chapter N is already being built."** A build is still running. Wait for the turn to end.
- **Button gone.** You pressed "Hide". Type `/next-chapter` to bring it back. Note: this also starts the next build.
- **Subtitle errors from ffmpeg on Windows.** Run ffmpeg inside the chapter folder and pass the
  SRT as a bare file name (spec §7).
- **edge-tts wrote a `.vtt` file.** Convert it: `ffmpeg -i in.vtt out.srt` (spec §6).
