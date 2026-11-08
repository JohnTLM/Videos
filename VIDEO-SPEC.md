# Video spec: rules for every narrated video

The base spec for every series (*Substrateless World* chapters, bonus articles, After Anatta). A series spec adds to
it (*Anatta to Emptiness*: `anatta-to-emptiness/VIDEO-SPEC.md` replaces the stance list in §4). **`tools/build.py`
does the mechanics** (voice, subtitles, title card, drawings, assembly, check frames); a session writes the script and
the drawings and checks the result. Steps: `README.md`, *Making one video*. The original long spec (manual ffmpeg
steps, Windows layout, first pilot) is `chapter-builder/VIDEO-SPEC-original.md`.

## 1. Goal

A calm, documentary-style narrated video: a script (`.md`), its narration (`.mp3`, Andrew), subtitles timed to the
audio (`.srt`, also burned in), and the video (`.mp4`) with a spoken title and animated drawings.

## 2. Where files go

Each video has a folder `<prefix>NN-<slug>/` (slug: the title in lowercase kebab-case, about 5 words at most) with
`<prefix>NN-script.md`, the narration, `.mp3`, `.srt`, the `.mp4` and four check frames; `manifest.csv` has one row per
video. What is saved in git: `CLAUDE.md`.

## 3. Fixed settings

| Setting | Value |
|---|---|
| Chapter length | **3:00–4:30** of narration (about **450–550 words**) |
| Bonus-article length | **10–12 min**, longer when the article is rich (about 1,800–2,000 words or more); §3.1 |
| Voice | edge-tts `en-US-AndrewNeural`, `--rate=-8%`, `--pitch=-2Hz` (free) |
| Picture | 1920×1080, 30 fps, H.264 `-crf 20` |
| Audio | AAC 192 kbps, 48 kHz, -16 LUFS |
| Opening | title card with the spoken "Chapter N. Title." (§7) |
| Subtitles | burned in, at most 2 lines of 42 characters, 1.2–6 s per cue; the `.srt` kept beside the video |
| End | 2 s of background after the narration, then a 1.5 s fade to black |

### 3.1 Bonus-article videos (owner, 2026-10-24)

- **Length:** cover the whole argument rather than cut it to fit. `manifest.csv` marks a long script "check"; for a
  bonus video that is expected.
- **This `build.py` video comes first.** The NotebookLM version is optional and later (`NOTEBOOKLM-VIDEOS.md`).

## 4. Script writing (`chNN-script.md`)

### File format

```markdown
---
chapter: 1          (or: bonus)
title: "<Exact chapter title from the manuscript>"
source_words: <word count of the original chapter>
script_words: <word count of the narration body>
intro: yes          (§7)
voice: male         (§7)
---

# Chapter 1 — <Title>

<Narration body: plain paragraphs only.>
```

`chNN-narration.txt` is the narration body only (no front matter, no heading): the text sent to the voice after the
§5 substitutions.

### Voice and style

- Calm, unhurried documentary narration, written for the ear. Short sentences, mostly 8–20 words, one idea each.
- No lists, parentheses, footnotes, citations, or "as discussed in Chapter X".
- Define a technical term in plain words the first time (*śūnyatā*, *Prāsaṅgika*, *svabhāva*).
- Prefer concrete, present-moment images (holding a phone, the coldness of ice). Invite the listener to notice their
  own experience, but do not sound like a meditation guide.
- Paragraph breaks where a pause belongs (the voice pauses there).
- Open with a line that draws the listener in, not a summary. Close with one quiet line that settles the point; no
  "next time…" teaser.

### Faithfulness to the book's stance (important)

The script condenses the chapter. It must not drift from the book's position:

- Dependent arising is used to **demonstrate** emptiness. It is **not** asserted as a metaphysical ground.
- "Relation is primary" holds only **conventionally**, relative to a conceptual framework. Never present relation,
  process, or awareness as the real underlying substrate.
- The approach is **Prāsaṅgika, without relentless negation.** Appearances are not denied. Their vivid, functional
  formation is precisely what shows they are empty.
- Production, cessation, death, and continuity are **conventional designations** relative to a paradigm. They are not
  ultimately real, and they are not simply non-existent either.
- The default sense that things are "undeniably real, inherent" is a **habit of thought**, not how phenomena are.
- Use the chapter's own examples. The coldness-of-ice example is central: the coldness does not reside in the ice, and
  coldness, ice, feeler, and felt are co-designated.

When a chapter is too dense, keep its **single main argument** and drop secondary points. Never add claims that are not
in the chapter.

## 5. Pronunciation

The voice mispronounces Sanskrit, Pali, Tibetan and Japanese terms. `tools/pronunciation.json` (shared) and the
series' own `pronunciation.json` map each spelling to a spoken form (`"śūnyatā": "shoonya-tah"`). `build.py` speaks
the spoken form and keeps the right spelling in the subtitles. For a new term, add it to the map and tell the owner,
who checks how it sounds.

## 6. Audio and subtitles

`build.py` records one paragraph at a time (pausing at paragraph breaks), normalises loudness and times the subtitles
from the audio (§3). The voice is cached, so a rebuild after a drawing change is quick.

## 7. Visuals

### Switches (script front matter)

- `intro: yes` = title card and spoken "Chapter N. Title."; `no` = straight into the narration.
- `voice: male` = Andrew (`en-US-AndrewNeural`); `female` = Ava (`en-US-AvaMultilingualNeural`); or an exact edge-tts
  name.

Missing settings mean `intro: yes` and `voice: male`. Changing the voice re-records the narration; changing `intro`
only re-renders the picture.

### Drawings (Remotion; owner's choice, October 2026)

Never plain narration: animated drawings explain what is said, **as a teacher explains to a student at a board**.
Each video has `tools/explainer/src/chapters/<PREFIX>NN.tsx` (registered in `src/Chapter.tsx`): a `PHRASES` list copied
word for word from the script in order, and a `Body` of scenes; shared parts are in `src/lib.tsx`. `build.py` copies
it beside the video as `<prefix>NN-scenes.tsx`.

- Each drawing waits for its phrase. Phrases must not contain words the pronunciation map respells (Madhyamaka,
  svabhāva...), because cues are matched on the spoken text.
- Draw the text's own examples (phone, ice, river, traveller...) and simple diagrams of the argument. One idea on the
  board at a time; clear it between ideas.
- **The stance (§4) applies to pictures too:** never draw relation, process or awareness as a ground or base layer;
  show a "ground" only to remove it.
- Keep drawings clear of the subtitles at the bottom.
- Colours: chalk `#ECE7DA`, dim `#8A8475`, gold `#C9B37E` (emphasis), ice `#9CC3D5`, warm `#D9876C` (crossing out).
  A series may set its own (Anatta to Emptiness: its spec §5).
- `build.py` reports any drawing that falls behind the narration (`LATE`); fix those.

## 8. Assembly

`build.py --chapter NN` (in `tools/series/<name>/`) writes `…partial.mp4` and renames it only when ffmpeg has
finished, so a file with the final name is always complete.

## 9. Quality checks (each video)

- [ ] The script has the right length (§3) and passes the stance list (§4). Read it back once for any wording that
      makes relation, awareness or process into a substrate.
- [ ] No `LATE` drawings; a contact sheet of frames (title, two middle frames, the end): subtitles readable and not
      over the drawings, a clean fade.
- [ ] Subtitles: correct spellings, no overlaps.
- [ ] `manifest.csv` updated.
