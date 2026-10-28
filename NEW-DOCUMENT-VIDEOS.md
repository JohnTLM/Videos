# Making a narrated video for a new document

For a new article or episode on the Thusness website (the Substrateless World and Anatta-to-Emptiness series and
their bonus articles). Moved here from section 11 of the website's `prog-spec.md` on 2026-10-21, so all video-making
lives in this repository. When the video is made, the website repository adds its Watch and Phone links
(`prog-spec.md` rule 1 there).

The rules are `VIDEO-SPEC.md` (base) and `anatta-to-emptiness/VIDEO-SPEC.md` (that book's stance rules, which replace
the base stance list). **All the tools are in [`tools/`](tools/README.md)** (since 2026-10-25): `build.py` does it
all: script -> voice (free edge-tts, Andrew) -> subtitles -> spoken title -> Remotion drawings -> MP4 -> check
frames. It runs the same on the owner's Windows computer and in a Claude cloud session. Drive
(`Substrateless-World/Videos/`) keeps a backup copy; `tools/SETUP-AND-ARCHITECTURE.md` explains how it all fits.

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
6. Save the text files (script, narration, drawings, subtitles) in this repository and push (see "Rule: save every
   video here" in `README.md`).

Built from a Claude cloud session (done for ep90, 2026-10-18):
- The environment's network must allow `speech.platform.bing.com` (the owner added it).
- No copying from Drive any more: clone this repository, then `pip install -r tools/requirements-video.txt` and
  `npm ci` in `tools/explainer` (setup and run steps: `tools/README.md`). The fonts are in `tools/assets/fonts/`.
- Run the series' `build.py` (for example `tools/series/anatta-to-emptiness/build.py --chapter 94`) with
  `TTS_PROXY="$HTTPS_PROXY" SSL_CERT_FILE=/root/.ccr/ca-bundle.crt
  REMOTION_BROWSER=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell`. Remotion needs the
  headless shell, not full Chromium. A 3–4 minute video takes about 10–15 minutes to render.
- Build on the owner's server (README.md, "build on the owner's server") and upload the MP4s there with
  `tools/publish/publish_drive.py <folder id> <files>`; never send them to the owner. Save the text files here (step 6) and also in the video's Drive folder; commit new drawings in
  `tools/explainer/src/chapters/` and add them to Drive's engine backup `_engine/explainer/src/chapters/`.

**Book 4 series** (2026-10-21, owner chose the drawing style, reuse of the five bonus-article videos, and "two first,
then the rest"): series folder `Observer-and-Presence/Videos/` beside the other two (wrapper `build.py`, `series.json`
`{"drawing_prefix": "OB", "folder_prefix": "ob", "intro_word": "Chapter", "min_words": 250}`, `pronunciation.json`),
folders `obNN-<slug>/`, drawings `src/chapters/OBNN.tsx` (plum-and-gold moods; model: `OB01.tsx`). Scripts follow the
Anatta VIDEO-SPEC stance list. All 18 built (2026-10-21); their text files are in `observer-and-presence/`, the
MP4s in Drive `Observer-and-Presence/Videos/`. The series settings are in `tools/series/observer-and-presence/`.

Done so far for this site: ep90 "Dependent Designation and the Taste of Presence" (Drive folder
`Anatta-to-Emptiness/Videos/ep90-dependent-designation-taste-of-presence`, drawings `AE90.tsx`) and ep91 "Two Modes,
One Seeing" (2026-10-20, Drive folder `Anatta-to-Emptiness/Videos/ep91-two-modes-one-seeing`, drawings `AE91.tsx`).

ep92 "Beyond Cause and Effect": the first build's script, drawings and subtitles (2026-10-20) are in
`new-documents/ep92-beyond-cause-and-effect/`.

ep93 "Insubstantial Appearances" (2026-10-21): script, drawings and subtitles in
`new-documents/ep93-insubstantial-appearances/`.

ep95 "Knowing From Somewhere" (2026-10-25): script, drawings, subtitles and the NotebookLM files in
`new-documents/knowing-from-somewhere/`.
