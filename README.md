# Videos

All the video-making for John Tan (Thusness)'s books. The videos are on YouTube (Unlisted) and shown on
atr-passerby.com, built from [thusness-website](https://github.com/JohnTLM/thusness-website). Sessions: start with
`CLAUDE.md`. **John: start with [OWNER-GUIDE.md](OWNER-GUIDE.md).**

| Folder or file | What it holds |
|---|---|
| [`tools/`](tools/README.md) | The builder (`build.py`), the drawing engine with every drawing (`explainer/src/chapters/`), fonts, pronunciation maps, series settings (`series/<name>/`), and the YouTube and Drive tools (`publish/`) |
| [`VIDEO-SPEC.md`](VIDEO-SPEC.md) | The rules for every video: settings, script and stance, drawings, checks |
| [`new-documents/`](new-documents/) | Bonus-article and After Anatta videos: each one's script, drawings, subtitles and YouTube texts |
| [`anatta-to-emptiness/`](anatta-to-emptiness/VIDEO-SPEC.md) | Book 2 series; its own stance rules replace the base list |
| [`observer-and-presence/`](observer-and-presence/README.md) | Book 4 series (18 chapter videos) |
| [`mmk/`](mmk/README.md) | *Nāgārjuna's Middle Way* (27 chapter videos) |
| [`chapter-builder/`](chapter-builder/README.md) | The first series (*Substrateless World* chapters) and its old "Build Next Chapter" plugin |
| [`NOTEBOOKLM-VIDEOS.md`](NOTEBOOKLM-VIDEOS.md) | The NotebookLM version of a bonus-article video (optional, after the main one) |
| [`audiobook/`](audiobook/prog-spec.md) | Read-aloud MP3s of every chapter and page (Jenny, free); its own spec |

## How a new video goes from idea to the website

The whole system is in thusness-website [`ARCHITECTURE.md`](https://github.com/JohnTLM/thusness-website/blob/main/ARCHITECTURE.md).
Other sessions check with the orchestrating cloud session first, so no video is made twice.

1. **Script.** The cloud session writes `new-documents/<series>/<prefix>NN-<slug>-script.md`. **The owner approves it**
   before anything is drawn.
2. **Drawings and build, in the cloud** (steps below). Check the frames; commit the text files.
3. **To the owner:** the MP4 (`SendUserFile`), and a `draft` task note for the server in thusness-website `server/`.
4. **YouTube:** the owner uploads it (Unlisted) and gives its YouTube id; the note gets that id and `ready`.
5. **The server** puts the YouTube texts on it (`tools/publish/publish_youtube.py`), adds it to the playlist (by id)
   and puts it on the page.

## Rules

- **Videos are built in claude.ai cloud sessions, never on the server** (owner, 2026-10-30: "All videos are supposed
  to be done in claude.ai, not server side"). A task note never asks the server for `build.py`.
- **No Drive copy of a new video** (owner, 2026-10-30): YouTube keeps it. If the owner wants one in Drive, they share
  it into Drive `Inbox` and the server files it.
- **Save every video here** (owner, 2026-10-21): the approved script, narration text, drawings (`*-scenes.tsx`),
  subtitles (`.srt`), YouTube texts, series settings when they change, and a short README for a new video. (The
  NotebookLM files are saved in EBooks: `NOTEBOOKLM-VIDEOS.md`.) Commit, push and merge (standing OK, 2026-10-29). Never the MP4s.

## Making one video

Rules: `VIDEO-SPEC.md` (and `anatta-to-emptiness/VIDEO-SPEC.md` for that series). `build.py` does it all: script →
voice (free edge-tts, Andrew) → subtitles → spoken title → Remotion drawings → MP4 → check frames.

**Bonus-article length** (owner, 2026-10-24): **10–12 minutes** or longer when the article is rich (about 1,800–2,000
words); the 450–550-word limit is for book chapters. The NotebookLM files come only after the owner is satisfied with
this video, and only if the owner wants that version.

1. Write `<ep|ch>NN-script.md` (front matter `chapter: bonus` for a bonus, `intro: yes`, `voice: male`) by
   `VIDEO-SPEC.md` §4, and get the owner's approval.
2. Write `tools/explainer/src/chapters/<PREFIX>NN.tsx`: a `PHRASES` list copied from the script in order, and a `Body`
   of scenes (model: `AE03.tsx`). No phrase may contain a word the pronunciation map respells (Madhyamaka, svabhāva...).
3. Build, look at a contact sheet of frames, fix, rebuild (the voice is cached).
4. Send the MP4 to the owner and save the text files here.

**Building in a cloud session:** the network must allow `speech.platform.bing.com`.
`pip install -r tools/requirements-video.txt` and `npm ci` in `tools/explainer`. Then run the series' `build.py` (for
example `tools/series/anatta-to-emptiness/build.py --chapter 94`) with
`TTS_PROXY="$HTTPS_PROXY" SSL_CERT_FILE=/root/.ccr/ca-bundle.crt
REMOTION_BROWSER=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell`
(Remotion needs the headless shell, not full Chromium). Rendering takes roughly 3–4 minutes per minute of video.

Shortened on 2026-11-08; earlier versions (the Drive working copies of the specs, the old guide
`NEW-DOCUMENT-VIDEOS.md`) are in the git history.
