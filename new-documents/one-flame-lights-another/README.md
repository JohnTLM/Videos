# ch94: One Flame Lights Another (bonus article video)

Bonus article "One Flame Lights Another: Karma and Rebirth in a Non-Substantialist View", in EBooks
`one-flame-lights-another/` (PRs #23 and #24). The website lists it under *The Logical Necessity of a Substrateless
World* (`#rebirth`, `BONUS` n 94), so the video is in the main-book series (`ch94`, base `VIDEO-SPEC.md`). Two versions,
`build.py` first (owner's rule, 2026-10-24).

## 1. `build.py` video (main)

Andrew's voice (free edge-tts), Remotion drawings, built in a Claude cloud session.

- `ch94-script.md`: the narration for the whole article (Parts I–VI), approved by the owner on 2026-10-25. About 3,000
  words, so longer than the 10–12-minute aim, as the article is rich (owner's rule: quality first); `manifest.csv`
  marks it "check", which is expected for a bonus video.
- `ch94-scenes.tsx`: the drawings, 42 scenes timed to 228 phrases (in the engine it is `src/chapters/Ch94.tsx`).
- `ch94.srt`: the subtitles.
- `ch94-narration.txt`: the spoken text after the pronunciation map.
- `pronunciation.json`: this video's own terms (Sāti, Theravāda, Baizhang, nirvāṇa), to merge into the shared map.

The MP4s are too large for this repository; they go to the owner for Drive, `Substrateless-World/Videos/ch94-one-flame-lights-another/`
(or the article's folder `My-Book/Bonus Articles/Rebirth`, the owner's choice).

**Builder fix (2026-10-25, committed in `tools/build.py`):** edge-tts pins its own certificate bundle (`certifi`), so in
a cloud session behind the agent proxy every paragraph failed with `NoAudioReceived`. When `SSL_CERT_FILE` is set, the
builder now points edge-tts at that bundle. Nothing changes on the owner's Windows computer.

### Canon points applied to the script

Checked against CanonView, Part I point 20 above all.

- **Rebirth is affirmed conventionally**, as the tradition teaches it; **emptiness does not prove it**, it removes only
  the objection that rebirth needs a carrier.
- **No traveler and no cut-off:** soul, subtle stream, store and energy are each searched and none is found; "put
  nothing in its place". The very subtle mind is declined as a carrier.
- **The clear light** is the knowing clarity of appearing, empty like everything else, never a light beneath
  experience (Part II points 1–3); the drawing crosses out "a light beneath everything".
- **Emptiness is not a cause:** "because nothing has a nature of its own, karma works" is said as Nāgārjuna's reply
  (a karma with its own nature could not be made, change or end), never as a power of emptiness (point 8).
- **Drawings:** a house, a traveling spark and a pipe are drawn only to be crossed out; lamps are always two lamps.

## 2. NotebookLM (optional)

Not written yet: only once the owner is satisfied with the `build.py` video (`NOTEBOOKLM-VIDEOS.md`).
