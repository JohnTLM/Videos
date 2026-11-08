# Video spec: rules for every narrated video

The base spec for every series (the *Substrateless World* chapters, bonus articles, After Anatta). A series with its
own spec adds to it (for *Anatta to Emptiness*, `anatta-to-emptiness/VIDEO-SPEC.md` replaces the stance list in §4).
**`tools/build.py` does all the mechanics** (voice, subtitles, title card, drawings, assembly, check frames) with the
settings below; a session writes the script and the drawings and checks the result. The steps for one video are in
`README.md`, *Making one video*. Shortened on 2026-11-08; the original spec, with the manual ffmpeg steps, the Windows
folder layout and the pilot workflow of the first series, is `chapter-builder/VIDEO-SPEC-original.md`.

## 1. Goal

A calm, documentary-style narrated video: a script (`.md`), its narration (`.mp3`, Andrew's voice), subtitles timed
to the audio (`.srt`, also burned in), and the video (`.mp4`) with a spoken title and animated drawings.

## 2. Where files go

Each video has a folder `<prefix>NN-<slug>/` (slug: the title in lowercase kebab-case, about 5 words at most) with
`<prefix>NN-script.md`, the narration, `.mp3`, `.srt`, the `.mp4` and four check frames; `manifest.csv` has one row per
video. The text files are saved in this repository (`README.md`, *Rules*); the MP4 is not.

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

### 3.1 Bonus-article videos (owner's rules, 2026-10-24)

- **`build.py` video first.** Only after the owner is satisfied with it does Claude write the NotebookLM files
  (`NOTEBOOKLM-VIDEOS.md`), named `<article-slug>-notebooklm-instructions.md` and `<article-slug>-notebooklm-sources.md` and saved in EBooks
  `Bonus Articles/<slug>/drive/` (owner, 2026-11-08).
- **Length.** 10–12 minutes, longer when the article is rich: cover the whole argument rather than cut it to fit.
  `manifest.csv` marks a long script "check"; for a bonus video that is expected.
- The script is written for the ear (§4) and needs the owner's approval before the drawings are made.

## 4. Script writing (`chNN-script.md`)

### File format

```markdown
---
chapter: 1
title: "<Exact chapter title from the manuscript>"
source_words: <word count of the original chapter>
script_words: <word count of the narration body>
voice: en-US-AndrewNeural
---

# Chapter 1 — <Title>

<Narration body: plain paragraphs only.>
```

`chNN-narration.txt` is the narration body only, with no front matter and no heading. This is the text that goes to TTS, after the pronunciation substitutions in §5.

### Voice and style

- Calm, unhurried documentary narration. Write for the ear, not the page.
- Use short sentences, mostly 8–20 words. Make one idea per sentence.
- Do not use lists, parentheses, footnotes, citations, or "as discussed in Chapter X".
- Define any technical term in plain words the first time it appears (e.g. *śūnyatā*, *Prāsaṅgika*, *svabhāva*).
- Prefer concrete, present-moment images: holding a phone, the coldness of ice. Invite the listener to notice their own experience, but avoid instructions that sound like a meditation guide.
- Use paragraph breaks where a natural pause belongs. The TTS pauses at paragraph breaks.
- Open with a line that draws the listener in, not with a summary of the chapter.
- Close with a single quiet line that settles the point. Do not add a "next time…" teaser.

### Faithfulness to the book's stance (important)

The script condenses the chapter. It must not drift from the book's position:

- Dependent arising is used to **demonstrate** emptiness. It is **not** asserted as a metaphysical ground.
- "Relation is primary" holds only **conventionally**, relative to a conceptual framework. Never present relation, process, or awareness as the real underlying substrate.
- The approach is **Prāsaṅgika, without relentless negation.** Appearances are not denied. Their vivid, functional formation is precisely what shows they are empty.
- Production, cessation, death, and continuity are **conventional designations** relative to a paradigm. They are not ultimately real, and they are not simply non-existent either.
- The default sense that things are "undeniably real, inherent" is presented as a **habit of thought**, not as how phenomena actually are.
- Use the chapter's own examples where possible. The coldness-of-ice example is central: the coldness does not reside in the ice, and coldness, ice, feeler, and felt are co-designated.

When a chapter is too dense to condense, keep its **single main argument** and drop secondary points. Do not add claims that are not in the chapter.

## 5. Pronunciation

The voice mispronounces Sanskrit, Pali, Tibetan and Japanese terms. `tools/pronunciation.json` (shared) and the
series' own `pronunciation.json` map each spelling to a spoken form (`"śūnyatā": "shoonya-tah"`). `build.py` speaks
the spoken form and puts the right spelling back in the subtitles. When a new term appears, add it to the map and tell
the owner, who checks how it sounds.

## 6. Audio and subtitles

Made by `build.py` from the script (§3 settings): one paragraph at a time (it pauses at paragraph breaks), loudness
normalised, subtitles timed from the audio. The voice is cached, so a rebuild after a drawing change is quick.

## 7. Visuals

### Switches (front matter of the script)

```markdown
---
chapter: 1          (or: bonus)
title: "The Substantialist Misconception"
intro: yes          yes = title card and spoken "Chapter N. Title."; no = straight into the narration
voice: male         male = Andrew (en-US-AndrewNeural); female = Ava (en-US-AvaMultilingualNeural); or an exact edge-tts name
---
```

Missing settings mean `intro: yes` and `voice: male`. Changing the voice re-records the narration; changing `intro`
only re-renders the picture.

### Drawings (Remotion; owner's choice, October 2026)

The video is never plain narration: animated drawings explain what is said, **as a teacher explains to a student at a
board**. Each video has `tools/explainer/src/chapters/<PREFIX>NN.tsx` (registered in `src/Chapter.tsx`): a `PHRASES`
list copied word for word from the script in order, and a `Body` of scenes; shared parts are in `src/lib.tsx`.
`build.py` copies it beside the video as `<prefix>NN-scenes.tsx`.

- Each drawing waits for its phrase in the narration. Phrases must not contain words the pronunciation map respells
  (Madhyamaka, svabhāva...), because cues are matched on the spoken text.
- Draw the text's own examples (phone, ice, river, traveller...) and simple diagrams of the argument. One idea on the
  board at a time; clear it between ideas.
- **The stance (§4) applies to pictures too:** never draw relation, process or awareness as a ground or base layer;
  show a "ground" only to remove it.
- Keep drawings clear of the subtitles at the bottom.
- Colours: chalk `#ECE7DA`, dim `#8A8475`, gold `#C9B37E` (emphasis), ice `#9CC3D5`, warm `#D9876C` (crossing out).
  A series may set its own (Anatta to Emptiness: its spec §5).
- `build.py` reports any drawing that falls behind the narration (`LATE`); fix those.

## 8. Assembly

`build.py --chapter NN` (in the series folder `tools/series/<name>/`) writes `…partial.mp4` and renames it only when
ffmpeg has finished, so a file with the final name is always a complete video.

## 9. Quality checks (each video)

- [ ] The script has the right length (§3) and passes the §4 stance list. Read it back once looking for any wording
      that makes relation, awareness or process into a substrate.
- [ ] No `LATE` drawings; look at a contact sheet of frames (title, two middle frames, the end): subtitles readable and
      not over the drawings, a clean fade.
- [ ] Subtitles: correct spellings, no overlaps.
- [ ] `manifest.csv` updated.

## 10. Workflow

Script → the owner approves → drawings → build → check (§9) → send the MP4 to the owner → save the text files here.
Details: `README.md`, *Making one video*.
