# Videos

All the video-making for John Tan (Thusness)'s books lives here. The videos are shown on the
Thusness website (its own repository, [thusness-website](https://github.com/JohnTLM/thusness-website)).

| Folder | Book | Videos |
|---|---|---|
| repo root + `chapter-builder/` | *The Logical Necessity of a Substrateless World* | one short narrated video per chapter |
| [`mmk/`](mmk/README.md) | *Nāgārjuna's Middle Way* (the MMK) | 27 chapter videos; see [mmk/README.md](mmk/README.md) |
| [`anatta-to-emptiness/`](anatta-to-emptiness/VIDEO-SPEC.md) | *The Transition from Anatta to Emptiness* | the series' own spec (its stance rules replace the base list) |
| [`NEW-DOCUMENT-VIDEOS.md`](NEW-DOCUMENT-VIDEOS.md) | New articles and episodes on the website | how to make one with the Drive tools (`build.py`, Remotion) |
| [`new-documents/`](new-documents/) | Bonus articles | each video's script, drawings (`*-scenes.tsx`) and subtitles |
| [`NOTEBOOKLM-VIDEOS.md`](NOTEBOOKLM-VIDEOS.md) | Bonus articles, from 2026-10-24 | the NotebookLM route: the two Markdown files Claude writes for each video, then review, cuts and YouTube text |

## Where the video specs live

A video spec is the written instruction Claude follows to make a series' videos: script length and style, the
book's stance, voice, drawings, subtitles and checks. Claude wrote the first versions on 2026-10-07 and 2026-10-08
from the owner's choices, and every later decision of the owner was written into them.

| Spec | Master copy (this repository) | Working copy (Google Drive, beside the videos) |
|---|---|---|
| Base spec, *Substrateless World* | [`VIDEO-SPEC.md`](VIDEO-SPEC.md) | `Substrateless-World/Videos/VIDEO-SPEC.md` |
| *Anatta to Emptiness* | [`anatta-to-emptiness/VIDEO-SPEC.md`](anatta-to-emptiness/VIDEO-SPEC.md) | `Anatta-to-Emptiness/Videos/VIDEO-SPEC.md` |

Claude reads the working copy while it builds and writes feedback into it; changes are then copied back here.
The two copies of the base spec had drifted apart; on 2026-10-21 this master copy gained the Drive copy's
drawing sections (switches, spoken opening, Remotion style, explainer drawings, subtitle sizes), so it now
holds both sets of changes. The Drive working copy has not been updated yet.

The rest of this page is about the Substrateless World videos.

This repo turns the book *The Logical Necessity of a Substrateless World* into short narrated
videos, one per chapter. Each video is about 3 to 4 minutes: a title card, then calm narration
over a dark background, with subtitles.

Claude Code does the work. It follows a written spec. A small plugin adds a
**▶ Build Next Chapter** button so you can build one chapter at a time and watch its progress.

- [ARCHITECTURE.md](ARCHITECTURE.md): how the parts fit together
- [VIDEO-SPEC.md](VIDEO-SPEC.md): the full instructions Claude follows
- [chapter-builder/README.md](chapter-builder/README.md): the plugin in brief

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

## Workflow

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
