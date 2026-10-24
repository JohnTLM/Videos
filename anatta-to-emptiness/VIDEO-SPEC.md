# Video Series Spec — *The Transition from Anatta to Emptiness*

Instructions for Claude Code. One short narrated explainer video per section of the book, built with the same system
as the *Substrateless World* series. That series' spec (`..\..\Substrateless-World\Videos\VIDEO-SPEC.md`) is the base:
everything in it applies here (script style, voice, subtitles, Remotion teacher-style drawings, switches, checks)
**except where this file says otherwise**.

Build the pilot (episode 3) first and stop for review before batching the rest.

---

## 1. Locations

- **Manuscript:** `..\anatta-to-emptiness-v24-A4.docx`. Section texts are extracted to `_source\NN-<slug>.txt`.
- **Output:** this folder, one folder per episode: `epNN-<slug>\` with `epNN-script.md`, `epNN-narration.mp3`,
  `epNN.srt`, `epNN-<slug>.mp4`, `epNN-preview-720p.mp4`.
- **Drawings:** `C:\dev\video-tools\explainer\src\chapters\AENN.tsx` (prefix `AE` so they never clash with the first series).
- **Build:** `C:\dev\video-tools\.venv\Scripts\python build.py --chapter N` from this folder (it uses the shared builder).
- **Series settings** (`series.json`): drawings prefix `AE`, folders `ep`, title word **Chapter** (owner's choice:
  "Chapter 3. The Collapse of the Observer."), minimum script length 250 words (some sections are short).
- **Pilot approved** (style, pace, stance rules) on 2026-10-08. `AE03.tsx` and `ep03-script.md` are the model.

## 2. Episodes (owner's choices: Parts 1–4, no Appendix; the three longest sections split in two)

| Ep | Section (source file) | Source words |
|---|---|---|
| 1 | The Starting Point: The Journey Through Presence (04) | 1441 |
| 2 | Introduction: The Architecture of a Direct Realization (05) | 511 |
| 3 | The Collapse of the Observer (06) — **pilot** | 892 |
| 4 | The Taste of Total Exertion (07) | 2249 |
| 5 | The Great Desynchronization (08) | 2625 |
| 6 | The Chariot Comes Alive — Part One (09, first half) | 4681 |
| 7 | The Chariot Comes Alive — Part Two (09, second half) | |
| 8 | The Last Refuge of Ontology: Dependent Arising Dismantles Itself (10) | 3277 |
| 9 | The Logic of the Single Stroke & The Eye as a Living Chariot (11) | 1929 |
| 10 | The Disease of Relentless Negation & The Principle of Formation (12) | 848 |
| 11 | Ye Shes: When Analysis Becomes Transparent & Freedom from Elaboration (13) | 1012 |
| 12 | Resonances and Open Questions, with the Epilogue (14 + 15) | 2846 |
| 13 | The Formation of a Mountain (17) | 1754 |
| 14 | The Formation of a Flower — Part One (18, first half) | 4583 |
| 15 | The Formation of a Flower — Part Two (18, second half) | |
| 16 | Space Is Also a Formation (19) | 347 |
| 17 | The Painted Rice Cake: Designation Is Also a Formation (20) | 1079 |
| 18 | Beyond the Extremes: Why Life and Death Were Never the Right Words (21) | 1532 |
| 19 | The Taste, Not the Argument (22) | 1445 |
| 20 | Independent Paths: What Science Gave Up (24) | 3406 |
| 21 | At the Edges of Science: Mechanism, Evidence and Consciousness (25) | 1161 |
| 22 | Nothing to Find, Nothing Missing — Part One (27, first half) | 4450 |
| 23 | Nothing to Find, Nothing Missing — Part Two (27, second half) | |

Skipped: Preface, A Note on Method (about the book, not the ideas; read them for the stance), Appendix.
Split sections: divide at a natural heading near the middle; each part stands on its own and the second opens
with one line that picks up the thread (no "previously").

Script length: 450–550 words where the source allows. Short sections (ep 2, 10, 16) may be shorter (down to ~250
words); never pad with claims that are not in the section.

Bonus articles (`chapter: bonus`) follow the base spec §3.1: a `build.py` video first, 10–12 minutes or longer
when the article is rich, and NotebookLM files only after the owner is satisfied.

## 3. Defaults (owner's choice)

Every script's front matter: `intro: yes`, `voice: male` (Andrew, as in the first series). Title in front matter is the
section title exactly as in the manuscript (split parts add " — Part One" / " — Part Two").

## 4. Faithfulness to this book's stance (important — replaces §4's stance list of the base spec)

This book is a personal synthesis, developed in continuity with Madhyamaka and Dzogchen, tracing how the
substrateless view came to be **lived**. The script condenses a section; it must not drift from these points:

- **Anatta is the beginning, not the end.** The observer is not found — not because it disappeared, merged with the
  universe or became infinite, but because it was never there as an independently existing entity. Anatta is not a
  blank void and not a hidden universal consciousness. It is a decisive liberation, **but not yet emptiness**.
- **Never make awareness, presence, luminosity, the "ground", total exertion, relation or dependent arising into a
  substrate.** Dependent arising demonstrates emptiness and then dismantles itself as a last refuge of ontology.
  The Dzogchen ground is empty, not a subtle existent thing.
- **Appearances are not denied.** Vivid, functional formation is precisely what shows emptiness. Relentless negation
  (endless analysis that mistakes examining for seeing) is a failure, as is spiritual bypass ("it's all empty anyway").
- **Designations are conventional:** not ultimately real, not simply non-existent. Conventional reality works.
- **Desynchronization:** direct experience (the taste of anatta, of total exertion) can arrive complete while the
  view used to understand it stays substantialist. This mismatch, not a lack in the experience, is what blocks full
  opening. View and experience close the same gap from two sides.
- **Mark the author's own syntheses as his reading, not orthodox doctrine,** when a script uses them: conceptual vs
  dependent designation (a teaching device), designation by relation, the logic of the single stroke, spontaneous
  presence = dependent arising, and "desynchronization" as a framing. A light touch is enough ("in this book's
  reading…"), once per episode at most.
- **Science resonates; it does not prove** (Part Three).
- The author speaks from his own practice: the narration may say "the author" or describe the practitioner, but must
  not put first-person experiences in the narrator's mouth as if they were the listener's or the narrator's.

## 5. Drawings

As in the base spec: teacher-style, every idea illustrated as it is spoken, colourful and alive, above y = 860,
no empty board over ~4 s. The stance applies to pictures: never draw awareness, presence, relation or a "ground"
as a base layer; show a ground only in order to remove it. This series may use a slightly different colour mood
(deeper golds and indigos) so the two series are told apart, but the same parts library (`src/lib.tsx`).

## 6. Workflow

1. **Pilot:** episode 3, built end to end; report the script, length and frames; wait for the owner's feedback.
2. Apply feedback to this file.
3. **Batch:** remaining episodes in parallel helpers, each following this file; previews sent as they finish.
4. **Finish:** summary table and terms to listen to.
