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
| [`NOTEBOOKLM-VIDEOS.md`](NOTEBOOKLM-VIDEOS.md) | The optional NotebookLM version of a bonus-article video |
| [`audiobook/`](audiobook/prog-spec.md) | Read-aloud MP3s of every chapter and page (Jenny, free); its own spec |

## How a new video goes from idea to the website

The whole system is in thusness-website [`ARCHITECTURE.md`](https://github.com/JohnTLM/thusness-website/blob/main/ARCHITECTURE.md).
Other sessions check with the orchestrating cloud session first, so no video is made twice.

1. **Script** in `new-documents/<series>/<prefix>NN-<slug>-script.md`; the owner approves it.
2. **Drawings and build, in the cloud** (below). Check the frames; commit the text files.
3. **To the owner:** the MP4 (`SendUserFile`), and a `draft` task note for the server in thusness-website `server/`.
   A task note never asks the server for `build.py`.
4. **YouTube:** the owner uploads it (Unlisted) and gives its YouTube id; the note gets that id and `ready`.
5. **The server** puts the YouTube texts on it (`tools/publish/publish_youtube.py`), adds it to the playlist (by id)
   and puts it on the page.

If the owner wants a video in Drive, they share it into Drive `Inbox` and the server files it.

## Making one video

Rules: `VIDEO-SPEC.md` (length §3, script §4; for *Anatta to Emptiness* also its own spec). `build.py` does it all:
script → voice → subtitles → spoken title → Remotion drawings → MP4 → check frames.

1. Write `<ep|ch>NN-script.md` (front matter `chapter: bonus` for a bonus, `intro: yes`, `voice: male`) and get the
   owner's approval.
2. Write `tools/explainer/src/chapters/<PREFIX>NN.tsx`: a `PHRASES` list copied from the script in order, and a `Body`
   of scenes (model: `AE03.tsx`). No phrase may contain a word the pronunciation map respells (Madhyamaka, svabhāva...).
3. Build (setup and the cloud command: `tools/README.md`), look at a contact sheet of frames, fix, rebuild (the voice
   is cached).
4. Send the MP4 to the owner and save the text files here.

The NotebookLM version comes only afterwards, and only if the owner wants it (`NOTEBOOKLM-VIDEOS.md`).
