# Carrierless Continuity (combined NotebookLM video)

Two NotebookLM cinematic videos combined into one (11:39), with duplicate content removed (2026-10-23).

- Main: `The_Architecture_of_Carrierless_Continuity.mp4` (9:05)
- Second: `The_Substantialist_Illusion__Deconstructing_the_Metaphysics_of_.mp4` (9:17)

Both are in the same Google Drive folder. The combined MP4 (152 MB) is not committed; rebuild it with
`render.py`, with the two sources saved as `src/main.mp4` and `src/second.mp4`.

## Files

- `render.py`: the edit list (9 segments, each cut on a scene change) and the render.
- `transcript-main.txt`, `transcript-second.txt`: Whisper (small.en) transcripts of the sources, with timestamps.
  Mishearings: "favava" is svabhāva, "opidarmic" is Abhidharmic, "Jason Kappa" / "J. Sankappa" is Je Tsongkhapa.
- `youtube.md`, `thumbnail.jpg`: title, description with chapters, tags, and the 1280×720 thumbnail.
- `notebooklm-source.md`, `notebooklm-prompt.md`: the corrected source text for regenerating the video in
  NotebookLM (chosen route), with setup steps and the steering prompt.
- `revision-plan.md`: doctrinal review against orthodox MMK and non-foundational Dzogchen. Six cuts and eight new
  narration scripts (G1–G8).

## Edit list (combined video)

| # | Source | Source time | Content |
|---|---|---|---|
| 1 | Main | 0:00–6:14 | Intro to the lamp |
| 2 | Second | 4:51–5:07 | Melody |
| 3 | Main | 6:14–7:03 | Anesthesia |
| 4 | Second | 3:24–4:01 | Anesthesia: duration constructed after the fact |
| 5 | Second | 6:10–7:17 | Dōgen, firewood and ash; reification |
| 6 | Main | 7:03–8:12 | Death; ethics and the mere I |
| 7 | Second | 5:50–6:00 | The child in the old photograph |
| 8 | Main | 8:12–8:53 | Plasticity (0.4 s fade at the end) |
| 9 | Second | 8:40–end | Luminosity ending |

## The NotebookLM version (2026-10-23)

Regenerated in NotebookLM from `notebooklm-source.md`:
`Carrierless_Continuity__Identity_Without_a_Bearer.mp4` (13:40, Drive folder with the originals). The transcript
was checked against the precision notes and CanonView, and three sentences were cut (final 13:17, rebuilt with
`render-v2.py`):

| Cut (source time) | Line | Why |
|---|---|---|
| 3:44–3:52 | "This is the fatal flaw in modern physicalist models…" | NotebookLM's own sweeping claim, not in the source |
| 4:22–4:29 | "This is the precise mechanism that allows continuity to function…" | Makes designation an enabling mechanism (canon Part I point 11: the designation is the continuity) |
| 12:24–12:32 | "Phenomena operate miraculously… exactly because they are… devoid of essence" | "Vivid because empty" (canon Part I point 8) |

At the last cut the next sentence begins 0.37 s before the shot changes, so the first frame of the next shot is
held over that gap. Left as they are (minor, not cuttable): "ethereal, like a neural pathway" (10:32), "realizing
the soul is unworkable, early Buddhist schools…" (3:10), "recognition, or rigpa" (12:56) and "actively releases"
(13:02). The second and third came from the source's wording, since corrected in `notebooklm-source.md`.

- `transcript-v2.txt`: transcript of the NotebookLM video (Whisper mishears some names: with spelling hints it
  gives svabhāva, prajñaptir upādāya, Candrakīrti and Je Tsongkhapa).
- `youtube-v2.md`, `thumbnail-v2.jpg`: title, description with chapters (checked against the cut video's audio),
  tags and thumbnail for this version. They replace `youtube.md` and `thumbnail.jpg`, which were for the combined
  first version.
