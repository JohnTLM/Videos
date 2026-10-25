# ep95: Knowing From Somewhere (bonus article video)

Bonus article "Knowing From Somewhere: The Six Higher Knowledges in a Non-Substantialist View", in EBooks
`knowing-from-somewhere/` (PR #20, with the emptiness wording fixed in PR #21). Two versions, `build.py` first (owner's
rule, 2026-10-24).

## 1. `build.py` video (main): built 2026-10-25

21:01, Andrew's voice (free edge-tts), Remotion drawings, built in a Claude cloud session with the Drive tools.
Episode number 95 in the Anatta-to-Emptiness series folder.

- `ep95-script.md`: the narration for the whole article (Parts I–IV, 3,242 words), approved by the owner on
  2026-10-25. Longer than the 10–12-minute aim because the article is rich (owner's rule: quality first);
  `manifest.csv` marks it "check", which is expected for a bonus video.
- `ep95-scenes.tsx`: the drawings, 39 scenes timed to 213 phrases (in the engine it is `src/chapters/AE95.tsx`).
- `ep95.srt`: the subtitles (347 cues). Two cues are a little under the 1.2 s minimum (cue 45, 0.93 s; cue 155, 1.14 s).
- `pronunciation.json`: this episode's own terms (abhijñā, Brahmā, Sāti), to merge into the series map.

The MP4s (`ep95-knowing-from-somewhere.mp4`, 189 MB, and `ep95-preview-720p.mp4`, 59 MB) are too large for this
repository; they were sent to the owner to keep in Drive, `Anatta-to-Emptiness/Videos/ep95-knowing-from-somewhere/`.

The first build was replaced the same day: its script said "because nothing has a fixed nature, things can arise",
which CanonView Part I point 8 rules out ("Emptiness enables nothing and explains nothing"), and three cones of vision
did not start from the seer. The rebuild says "a thing with a nature fixed from its own side could never respond, or
combine, or change", and every cone opens from its seer.

**Local changes to the copied `build.py`** (cloud session only, not in Drive): the ones listed in
`NEW-DOCUMENT-VIDEOS.md` and in the ep94 README (edge-tts pointed at `SSL_CERT_FILE`; a paragraph is retried up to four
times when its audio is missing or cut short). The Drive `_engine` backup has no `package-lock.json` here, so
`npm install` resolved Remotion 4.0.538. Fonts came from Google Fonts as static files (Cormorant Garamond 600,
Source Sans 3 400) under the names the builder expects.

### Canon and source checks applied to the script

Checked against CanonView on 2026-10-25, and every sutta image against the SuttaCentral texts (DN 1, DN 2, DN 11, MN 4,
MN 6, MN 38, AN 3.60, Pācittiya 8).

- **Emptiness is not a cause** (Part I points 8 and 12): see above.
- **Rebirth** is affirmed conventionally, not proven by emptiness; no traveller (Part I point 20).
- **Knower and known** arise together; consciousness is named after its conditions (MN 38's fire).
- **The higher knowledges** are widenings of a view from somewhere, never a view from nowhere; the sixth is not a
  power and sees no hidden ground.
- **The DN 11 verse** ("consciousness … radiant all-round") is not used in the video; the story ends on the question
  changed from a place to "no footing".

## 2. NotebookLM (optional)

Written on 2026-10-25 at the owner's request, before the `build.py` video was reviewed.

- `knowing-from-somewhere-notebooklm-source.md`: the whole article in 24 sections with precision notes and a
  pronunciation list. Also in Drive as a Google Doc in the ep95 folder.
- `knowing-from-somewhere-notebooklm-prompt.md`: setup, the steering prompt and a short version, and the canon check.
