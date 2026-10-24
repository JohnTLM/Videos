# Making a narrated video for a new document

For a new article or episode on the Thusness website (the Substrateless World and Anatta-to-Emptiness series and
their bonus articles). Moved here from section 11 of the website's `prog-spec.md` on 2026-10-21, so all video-making
lives in this repository. When the video is made, the website repository adds its Watch and Phone links
(`prog-spec.md` rule 1 there).

The owner's video system is documented in Google Drive, next to the videos:
`Substrateless-World/Videos/VIDEO-SPEC.md` (base rules), `Anatta-to-Emptiness/Videos/VIDEO-SPEC.md` (this book's stance
rules, which replace the base stance list) and `Substrateless-World/Videos/SETUP-AND-ARCHITECTURE.md` (how it works).
`build.py` does it all: script -> voice (free edge-tts, Andrew) -> subtitles -> spoken title -> Remotion drawings ->
MP4 -> check frames. Normally it runs on the owner's Windows computer (`C:\dev\video-tools`).

**Two versions, `build.py` first** (owner's rule, 2026-10-24): every new bonus article gets a `build.py` video
first, by the steps below (Andrew's voice, Remotion drawings). `build.py` is the main route.

**Length of a bonus-article video** (owner's rule, 2026-10-24): aim for **10–12 minutes** (about 1,800–2,000
words at Andrew's pace), and run longer when the article is rich. The 450–550-word limit does not apply to bonus
articles. Quality of content comes first: cover the whole argument rather than cut it to fit. `build.py` still
marks longer scripts "check" in `manifest.csv`; for a bonus video that is expected, not a fault.
Only after the owner is satisfied with that video does Claude write the two NotebookLM files
(`NOTEBOOKLM-VIDEOS.md`). The owner may or may not then make a NotebookLM version.

Steps for one video:
1. Write `<ep|ch>NN-script.md` (450–550 words for a chapter, 10–12 minutes or more for a bonus article; front matter `chapter: bonus` for a bonus, `intro: yes`, `voice: male`)
   following the right VIDEO-SPEC, and get the owner's approval of the script.
2. Write the drawings `src/chapters/<AE|Ch>NN.tsx` (a `PHRASES` list copied from the script in order, plus a `Body`
   of scenes; model: `AE03.tsx` for the companion series). Phrases must not include words the pronunciation map
   respells (Madhyamaka, svabhāva, Longchenpa...), because cues are matched on the spoken text.
3. Build, look at a contact sheet of frames, fix, rebuild (the voice is cached).
4. Make the phone version: `ffmpeg -i <video>.mp4 -vf scale=1280:720 -c:v libx264 -crf 26 -c:a aac -b:a 128k
   -movflags +faststart <prefix>NN-preview-720p.mp4`.
5. The owner puts both MP4s in Drive and shares them "Anyone with the link can view"; then add the Watch and Phone
   links to the site (rule 1).

Built from a Claude cloud session (done for ep90, 2026-10-18):
- The environment's network must allow `speech.platform.bing.com` (the owner added it).
- Copy the tools from Drive byte for byte (Drive connector `download_file_content`, then base64-decode):
  `Substrateless-World/Videos/{build.py, pronunciation.json, assets/}`, the Anatta `Videos/{build.py, series.json,
  pronunciation.json}`, and the engine backup `Substrateless-World/Videos/_engine/explainer/{package.json,
  package-lock.json, src/, public/fonts/}`. Run `npm ci` in `explainer`.
- Keep the Drive layout: `<root>/Substrateless-World/Videos/` and `<root>/Anatta-to-Emptiness/Videos/` (the Anatta
  `build.py` finds the shared builder at `../../Substrateless-World/Videos/build.py`).
- Fonts: GitHub's font files are blocked from cloud sessions (403); fetch Cormorant Garamond and Source Sans 3
  from Google Fonts instead (`fonts.googleapis.com/css2` gives the `.ttf` link) and save them under the names
  `build.py` expects (done for ep93, 2026-10-21).
- Local changes to the copied `build.py` (not in Drive): `REMOTION` from env `REMOTION_DIR`; `npx` instead of
  `npx.cmd` off Windows; `--browser-executable` from env `REMOTION_BROWSER`; edge-tts `proxy=` from env `TTS_PROXY`.
- Run: `TTS_PROXY="$HTTPS_PROXY" SSL_CERT_FILE=/root/.ccr/ca-bundle.crt REMOTION_DIR=<explainer>
  REMOTION_BROWSER=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell python build.py --chapter 90`
  from the Anatta `Videos` folder. Remotion needs the headless shell, not full Chromium. The render takes ~15 min.
- The Drive connector cannot upload the MP4s (too large to send). Send them to the owner (SendUserFile) to put in
  Drive; upload only the text files (script, narration, SRT, scenes .tsx) and add the new `.tsx` to the engine
  backup `_engine/explainer/src/chapters/`.

**Book 4 series** (2026-10-21, owner chose the drawing style, reuse of the five bonus-article videos, and "two first,
then the rest"): series folder `Observer-and-Presence/Videos/` beside the other two (wrapper `build.py`, `series.json`
`{"drawing_prefix": "OB", "folder_prefix": "ob", "intro_word": "Chapter", "min_words": 250}`, `pronunciation.json`),
folders `obNN-<slug>/`, drawings `src/chapters/OBNN.tsx` (plum-and-gold moods; model: `OB01.tsx`). Scripts follow the
Anatta VIDEO-SPEC stance list. Chapters 1–2 built and approved (3:19, 3:28). Another local change to the copied
`build.py`: each paragraph's speech is retried up to four times (the free service sometimes returns no audio).
Built in a cloud session, the files live in that session's scratchpad until the owner puts them in Drive.

Done so far for this site: ep90 "Dependent Designation and the Taste of Presence" (Drive folder
`Anatta-to-Emptiness/Videos/ep90-dependent-designation-taste-of-presence`, drawings `AE90.tsx`) and ep91 "Two Modes,
One Seeing" (2026-10-20, Drive folder `Anatta-to-Emptiness/Videos/ep91-two-modes-one-seeing`, drawings `AE91.tsx`).

ep92 "Beyond Cause and Effect": the first build's script, drawings and subtitles (2026-10-20) are in
`new-documents/ep92-beyond-cause-and-effect/`.

ep93 "Insubstantial Appearances" (2026-10-21): script, drawings and subtitles in
`new-documents/ep93-insubstantial-appearances/`.
