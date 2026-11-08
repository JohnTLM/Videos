# Video series spec: *The Transition from Anatta to Emptiness*

One short narrated video per section of Book 2. The base spec (`VIDEO-SPEC.md` at the repository root) applies
**except where this file says otherwise**. Episodes 1–23 are built (pilot ep 3 approved 2026-10-08; `AE03.tsx` and
`ep03-script.md` are the model). New episodes are bonus articles (`ep9N`, base spec §3.1).

## 1. Locations

- **Drawings:** `tools/explainer/src/chapters/AENN.tsx`. **Build:** `tools/series/anatta-to-emptiness/build.py --chapter N`.
- **Series settings** (`series.json`): drawings prefix `AE`, folders `ep`, title word **Chapter** ("Chapter 3. The
  Collapse of the Observer."), minimum script length 250 words.
- **In the owner's Drive series folder** (the original Windows layout): the manuscript
  `../anatta-to-emptiness-v24-A4.docx`, section texts `_source/NN-<slug>.txt`, and per episode `epNN-<slug>/` with
  `epNN-script.md`, `epNN-narration.mp3`, `epNN.srt`, `epNN-<slug>.mp4`, `epNN-preview-720p.mp4`.

## 2. Episodes (owner's choices: Parts 1–4, no Appendix; the three longest sections split in two)

| Ep | Section (source file) | Source words |
|---|---|---|
| 1 | The Starting Point: The Journey Through Presence (04) | 1441 |
| 2 | Introduction: The Architecture of a Direct Realization (05) | 511 |
| 3 | The Collapse of the Observer (06) — **pilot** | 892 |
| 4 | The Taste of Total Exertion (07) | 2249 |
| 5 | The Great Desynchronization (08) | 2625 |
| 6–7 | The Chariot Comes Alive — Parts One and Two (09) | 4681 |
| 8 | The Last Refuge of Ontology: Dependent Arising Dismantles Itself (10) | 3277 |
| 9 | The Logic of the Single Stroke & The Eye as a Living Chariot (11) | 1929 |
| 10 | The Disease of Relentless Negation & The Principle of Formation (12) | 848 |
| 11 | Ye Shes: When Analysis Becomes Transparent & Freedom from Elaboration (13) | 1012 |
| 12 | Resonances and Open Questions, with the Epilogue (14 + 15) | 2846 |
| 13 | The Formation of a Mountain (17) | 1754 |
| 14–15 | The Formation of a Flower — Parts One and Two (18) | 4583 |
| 16 | Space Is Also a Formation (19) | 347 |
| 17 | The Painted Rice Cake: Designation Is Also a Formation (20) | 1079 |
| 18 | Beyond the Extremes: Why Life and Death Were Never the Right Words (21) | 1532 |
| 19 | The Taste, Not the Argument (22) | 1445 |
| 20 | Independent Paths: What Science Gave Up (24) | 3406 |
| 21 | At the Edges of Science: Mechanism, Evidence and Consciousness (25) | 1161 |
| 22–23 | Nothing to Find, Nothing Missing — Parts One and Two (27) | 4450 |

Skipped: Preface, A Note on Method (read them for the stance), Appendix. A split section divides at a natural heading
near the middle; each part stands alone, and the second opens with one line that picks up the thread (no
"previously"). Script length 450–550 words where the source allows; short sections (ep 2, 10, 16) down to about 250.
Never pad.

## 3. Defaults

Front matter `intro: yes`, `voice: male`. The title is the section title exactly as in the manuscript (split parts add
" — Part One" / " — Part Two").

## 4. Faithfulness to this book's stance (important; replaces the base spec's §4 stance list)

The book is a personal synthesis, in continuity with Madhyamaka and Dzogchen, tracing how the substrateless view came
to be **lived**. A script must not drift from these points:

- **Anatta is the beginning, not the end.** The observer is not found, not because it disappeared, merged with the
  universe or became infinite, but because it was never there as an independently existing entity. Anatta is not a
  blank void and not a hidden universal consciousness. It is a decisive liberation, **but not yet emptiness**.
- **Never make awareness, presence, luminosity, the "ground", total exertion, relation or dependent arising into a
  substrate.** Dependent arising demonstrates emptiness and then dismantles itself as a last refuge of ontology.
  The Dzogchen ground is empty, not a subtle existent thing.
- **Appearances are not denied.** Vivid, functional formation is precisely what shows emptiness. Relentless negation
  (endless analysis that mistakes examining for seeing) is a failure, as is spiritual bypass ("it's all empty anyway").
- **Designations are conventional:** not ultimately real, not simply non-existent. Conventional reality works.
- **Desynchronization:** direct experience (the taste of anatta, of total exertion) can arrive complete while the
  view used to understand it stays substantialist. This mismatch, not a lack in the experience, blocks full opening.
  View and experience close the same gap from two sides.
- **Mark the author's own syntheses as his reading, not orthodox doctrine,** at most once per episode ("in this book's
  reading…"): conceptual vs dependent designation (a teaching device), designation by relation, the logic of the
  single stroke, spontaneous presence = dependent arising, and "desynchronization" as a framing.
- **Science resonates; it does not prove** (Part Three).
- The narration may say "the author" or describe the practitioner, but must not put first-person experiences in the
  narrator's mouth as if they were the listener's or the narrator's.

## 5. Drawings

As in the base spec, plus: colourful and alive, above y = 860, no empty board over about 4 s. Never draw awareness,
presence, relation or a "ground" as a base layer. Colour mood: deeper golds and indigos, so the two series are told
apart; same parts library (`src/lib.tsx`).
