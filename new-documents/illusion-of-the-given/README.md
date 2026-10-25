# ep94: The Illusion of the Given (bonus article video)

Bonus article "The Illusion of the Given" (Expanded Edition). Two copies are in EBooks:
`the-illusion-of-the-given/` (Parts I–III, PRs #18 and #19) and `intersubjectivity-and-dependent-arising/`. The video
follows the first, which is the full article. Two versions, `build.py` first (owner's rule, 2026-10-24).

## 1. `build.py` video (main): built 2026-10-25

20:56, Andrew's voice (free edge-tts), Remotion drawings, built in a Claude cloud session with the Drive tools.
Episode number 94 in the Anatta-to-Emptiness series folder (ep90–ep93 were the earlier bonus videos).

- `ep94-script.md`: the narration for the whole article (Parts I–III, 3,112 words), approved by the owner on
  2026-10-24. Longer than the 10–12-minute aim because the article is rich (owner's rule: quality first);
  `manifest.csv` marks it "check", which is expected for a bonus video.
- `ep94-scenes.tsx`: the drawings, 45 scenes timed to 256 phrases (in the engine it is `src/chapters/AE94.tsx`).
- `ep94.srt`: the subtitles (345 cues).
- `pronunciation.json`: this episode's own terms (Māmakī, Vajrayāna, Vimalakīrti, Yogācāra, Sūtra, Mipham, rigpa,
  Vasubandhu, Abhidharma, Huayan, Tiantai, Uexküll, Umwelt), to merge into the series map.

The MP4s (`ep94-illusion-of-the-given.mp4`, 188 MB, and `ep94-preview-720p.mp4`) are too large for this repository;
they were sent to the owner to keep in Drive, `Anatta-to-Emptiness/Videos/ep94-illusion-of-the-given/`.

**Local changes to the copied `build.py`** (cloud session only, not in Drive), on top of those listed in
`NEW-DOCUMENT-VIDEOS.md`: edge-tts pins its own certificate bundle, so when `SSL_CERT_FILE` is set the builder points
edge-tts at it; and the speech retry now also retries a paragraph whose audio comes back cut short (its word
timings do not cover the whole text), which otherwise stops the build with "alignment failed".

### Canon points applied to the script

Checked against CanonView on 2026-10-24.

- **Self-knowing awareness:** said as the canon puts it (no second act, no knower behind, empty), not "this article
  follows Mipham" (canon Part II points 7 and 12).
- **Rigpa:** the knowing of the basis, not the basis.
- **Pure vision:** Mipham's two kinds of conventional seeing only; his fourfold scheme is left out (canon Part I points
  14–15).
- **Emptiness is not a cause:** "Emptiness enables nothing and explains nothing." Nāgārjuna's 24.14 is framed as a
  reductio (Part I points 8 and 25).
- **The tick is carried by the water,** not drowned (ticks survive in water for days).
- **Other worlds are "not elsewhere",** never "in the same place".
- **The water offering:** tradition, not proof, and physics gives it no support.

## 2. NotebookLM (optional, later)

Two sets of early files, both written on 2026-10-24 before the `build.py`-first rule was clear. Once the owner is
satisfied with the `build.py` video, the final NotebookLM files are written from the approved script and the canon
check, replacing both sets.

- `the-illusion-of-the-given-notebooklm-source.md`, `the-illusion-of-the-given-notebooklm-prompt.md`: from the first
  session.
- `the-illusion-of-the-given-notebooklm-source-canon-checked.md`,
  `the-illusion-of-the-given-notebooklm-prompt-canon-checked.md`: full article in 18 sections, checked against
  CanonView. The prompt file lists what was changed to fit the canon.

File names carry the article's name (owner's rule, 2026-10-25).
