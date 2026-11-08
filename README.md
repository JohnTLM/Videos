# Videos

All the video-making for John Tan (Thusness)'s books lives here. The videos are shown on the
Thusness website (its own repository, [thusness-website](https://github.com/JohnTLM/thusness-website)).

**John: start with [OWNER-GUIDE.md](OWNER-GUIDE.md)**: what to do for a new bonus article or a new ebook.

| Folder | Book | Videos |
|---|---|---|
| [`tools/`](tools/README.md) | All series | **the video tools**: the builder (`build.py`), the drawing engine and every drawing, fonts, background, pronunciation maps and series settings; clone and run, no copying from Drive |
| repo root + `chapter-builder/` | *The Logical Necessity of a Substrateless World* | one short narrated video per chapter |
| [`mmk/`](mmk/README.md) | *Nāgārjuna's Middle Way* (the MMK) | 27 chapter videos; see [mmk/README.md](mmk/README.md) |
| [`anatta-to-emptiness/`](anatta-to-emptiness/VIDEO-SPEC.md) | *The Transition from Anatta to Emptiness* | the series' own spec (its stance rules replace the base list) |
| `README.md`, *Making one video* (below) | New articles and episodes on the website | the steps and the cloud build settings (`build.py`, Remotion) |
| [`new-documents/`](new-documents/) | Bonus articles | each video's script, drawings (`*-scenes.tsx`) and subtitles |
| [`NOTEBOOKLM-VIDEOS.md`](NOTEBOOKLM-VIDEOS.md) | New bonus articles, from 2026-10-24 | the NotebookLM route: the two Markdown files Claude writes for each video, then review, cuts and YouTube text |
| [`observer-and-presence/`](observer-and-presence/README.md) | *The Observer and the Taste of Presence* (Book 4) | 18 chapter videos: script, drawings, subtitles, series settings |
| [`audiobook/`](audiobook/prog-spec.md) | Books 1, 2, 4 and 5, the bonus articles and the Questions | read-aloud MP3s, one per chapter (edge-tts, free voices); its own spec and a text snapshot |

## How a new video goes from idea to the website (2026-10-30)

The whole system (the owner, the orchestrating cloud session, the server, GitHub, YouTube) is described in
thusness-website [`ARCHITECTURE.md`](https://github.com/JohnTLM/thusness-website/blob/main/ARCHITECTURE.md). For videos:

1. **Script.** The orchestrating cloud session (the one the owner named, owner 2026-10-30: "I think u can be the
   orchestrating agent") writes `new-documents/<series>/<prefix>NN-<slug>-script.md` and sends it to the owner.
   **The owner approves it** before anything is drawn.
2. **Drawings and build, in the cloud.** `tools/explainer/src/chapters/<PREFIX>NN.tsx` (cue phrases copied word for word
   from the narration; avoid respelled words), then the series `build.py --chapter NN` (Andrew's voice, subtitles,
   drawings, MP4). Check the frames; commit script, drawings, narration, subtitles and `youtube-…-<prefix>NN.md`.
3. **To the owner.** The MP4 goes to the owner (`SendUserFile`); a `draft` task note for the server goes into
   thusness-website `server/`.
4. **YouTube.** The owner uploads it (Unlisted) and says so. The note gets the video's YouTube id (never a title to
   match) and `ready`.
5. **The server** puts the YouTube texts on the upload (`tools/publish/publish_youtube.py`), adds it to the playlist,
   gives the page its video box and deploys. It never builds a video, and no Drive copy is made.

Other sessions that want to make a video check with the orchestrating session first, so no video is made twice.

## Rule: videos are built in claude.ai cloud sessions, never on the server (owner, 2026-10-30)

Owner, 2026-10-30: "All videos are supposed to be done in claude.ai, not server side as it doesn't have the
processing power" (and to another session: "You shouldn't be building any videos. Videos building are done at
claude.ai"). So:

- **A cloud session builds every video** (`tools/README.md`, cloud settings), checks the frames, commits the text
  files (script, drawings, narration, subtitles, YouTube texts) and sends the MP4 to the owner with `SendUserFile`.
- **The owner** uploads it to YouTube from the phone, as Unlisted. YouTube is the full-quality copy. If the owner
  wants a copy in Drive too, they share the MP4 into Drive `Inbox` and the server files it by name.
- **The server never builds or renders a video.** In a task note it only puts the YouTube texts on the upload
  (`tools/publish/publish_youtube.py`) and the links on the website. A task note never asks for `build.py` or a Drive
  video upload.
- **No Drive copy of a new video** (owner, 2026-10-30: "Yes, since YouTube already have the videos"). YouTube keeps it; this
  repository keeps what is needed to rebuild it.
- Ebooks (PDF, EPUB, Word) are still built on the server (EBooks `prog-spec.md` section 2).

(Until 2026-10-30 this rule said the opposite, "build on the owner's server"; that is withdrawn.)

## Rule: save every video here (owner's decision, 2026-10-21)

Every Claude session that makes or remakes a video saves its **text files** in this repository before it finishes,
in the folder for its series (table above): the approved script, the narration text, the drawings
(`*-scenes.tsx`) and the subtitles (`.srt`), plus the series settings when they change, with a short README for a new
video; for a bonus article, also the NotebookLM source and prompt once written (`NOTEBOOKLM-VIDEOS.md`). Commit, push
and merge them (standing OK, owner 2026-10-29). The **MP4s** never go here (too large): they go to the owner, who
uploads them to YouTube (rule above; no Drive copy since 2026-10-30).

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

## Making one video: the steps

The rules are `VIDEO-SPEC.md` (base) and `anatta-to-emptiness/VIDEO-SPEC.md` (that book's stance rules, which replace
the base stance list). **All the tools are in [`tools/`](tools/README.md)**: `build.py` does it all: script → voice
(free edge-tts, Andrew) → subtitles → spoken title → Remotion drawings → MP4 → check frames.

**Length of a bonus-article video** (owner, 2026-10-24): aim for **10–12 minutes** (about 1,800–2,000 words at Andrew's
pace), longer when the article is rich; cover the whole argument rather than cut it to fit. The 450–550-word limit is
for book chapters only. `build.py` marks longer scripts "check" in `manifest.csv`; for a bonus video that is expected.
Only after the owner is satisfied with the video does Claude write the two NotebookLM files (`NOTEBOOKLM-VIDEOS.md`),
and only if the owner wants a NotebookLM version.

1. Write `<ep|ch>NN-script.md` (450–550 words for a chapter, 10–12 minutes or more for a bonus article; front matter
   `chapter: bonus` for a bonus, `intro: yes`, `voice: male`) following the right VIDEO-SPEC, and get the owner's
   approval of the script.
2. Write the drawings `tools/explainer/src/chapters/<PREFIX>NN.tsx` (a `PHRASES` list copied from the script in order,
   plus a `Body` of scenes; model: `AE03.tsx`). Phrases must not include words the pronunciation map respells
   (Madhyamaka, svabhāva, Longchenpa...), because cues are matched on the spoken text.
3. Build, look at a contact sheet of frames, fix, rebuild (the voice is cached).
4. Send the MP4 to the owner and save the text files here (the rules above).

**Building in a Claude cloud session:**
- The network must allow `speech.platform.bing.com`.
- `pip install -r tools/requirements-video.txt` and `npm ci` in `tools/explainer` (`tools/README.md`). Fonts are in
  `tools/assets/fonts/`.
- Run the series' `build.py` (for example `tools/series/anatta-to-emptiness/build.py --chapter 94`) with
  `TTS_PROXY="$HTTPS_PROXY" SSL_CERT_FILE=/root/.ccr/ca-bundle.crt
  REMOTION_BROWSER=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell`.
  Remotion needs the headless shell, not full Chromium. Rendering takes roughly 3–4 minutes per minute of video.

The old guide `NEW-DOCUMENT-VIDEOS.md` (with the Drive and phone-copy steps from before 2026-10-30) was folded in here
on 2026-11-08; it is in the git history.

The chapter-builder plugin (the original *Substrateless World* chapter button) is described in
[`chapter-builder/README.md`](chapter-builder/README.md) and [`chapter-builder/ARCHITECTURE.md`](chapter-builder/ARCHITECTURE.md).
