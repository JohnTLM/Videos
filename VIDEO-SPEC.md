# Video Series Spec — *The Logical Necessity of a Substrateless World*

Instructions for Claude Code. Produce one short narrated video per chapter of the book, in the style of a calm documentary.

Work **one chapter at a time**. Build **Chapter 1 first as a pilot and stop for review** before batching the rest.

---

## 1. Goal

For each chapter, produce:

1. A **narration script** (`.md`): a condensed retelling of the chapter's core argument
2. **Narration audio** (`.mp3`): a calm, human-like male voice
3. **Subtitles** (`.srt`): timed to the audio
4. **Video** (`.mp4`): a title card, then narration over a quiet background with burned-in subtitles

Order per chapter: **MD → MP3 → SRT → MP4.** The SRT is generated from the audio so that the timings match what is actually spoken.

---

## 2. Locations

- **Book root:** `G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\`
  - Use the latest complete manuscript in this folder.
  - Ignore `_Archive/` and the other book folders (`Anatta-to-Emptiness/`, `Companion-Essays/`).
  - If more than one candidate manuscript exists, list them and ask which one to use.
- **Output root:** `...\Substrateless-World\Videos\`

```
Videos/
  VIDEO-SPEC.md            ← this file (the working copy; see below)
  chapters.json            ← every chapter's number and title (written at setup, §10)
  PILOT-APPROVED           ← created by the user once the pilot is approved (§10)
  pronunciation.json       ← word → spoken-form map (see §5)
  assets/
    fonts/                 ← title + subtitle fonts
    background.png         ← generated once, reused (see §7)
    music.mp3              ← OPTIONAL ambient bed; only used if present
  ch01-<slug>/
    ch01-script.md
    ch01-narration.txt     ← plain text sent to TTS (generated from the .md)
    ch01-narration.mp3
    ch01.srt
    ch01-title.png
    ch01-<slug>.mp4
    ch01-frame-0002.png    ← check frames (see §9)
    ch01-frame-0030.png
    ch01-frame-0200.png
    ch01-frame-end.png
  ch02-<slug>/
  ...
  manifest.csv             ← one row per chapter: number, title, words, duration, status
```

`<slug>` is the chapter title in lowercase kebab-case, at most about 5 words (e.g. `ch01-the-coldness-of-ice`).

The copy of this file in `Videos/` is the **working copy**: read it from there, and write the user's feedback into it (§10). The copy in the git repo is the master; the user copies changes back to it.

Creating folders and files is fine without asking. **Never delete or overwrite** anything outside `Videos/`.

---

## 3. Fixed settings

| Setting | Value |
|---|---|
| Episode length | **3:00–4:30** of narration: aim for 3–4 min, with up to 30 s over allowed (about **450–550 words** of script) |
| Voice | `edge-tts`, voice `en-US-AndrewNeural`, `--rate=-8%`, `--pitch=-2Hz` |
| Alternate voice (if asked) | `en-GB-RyanNeural` |
| Resolution / fps | 1920×1080, 30 fps |
| Video codec | H.264 (`libx264`), `-crf 20`, `-preset medium`, `-pix_fmt yuv420p` |
| Audio | AAC 192 kbps, 48 kHz, loudness normalised to **-16 LUFS** |
| Title card | 5 s, at the start, silent, fade in 1 s / fade out 1 s |
| Subtitles | Burned in; also keep the `.srt` beside the video |
| Tail | 2 s of background after narration ends, then a 1.5 s fade to black |

---

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

---

## 5. Pronunciation (`pronunciation.json`)

The TTS will mispronounce Sanskrit, Pali, Tibetan, and Japanese terms. Keep a shared map from each display spelling to a phonetic spoken form, for example:

```json
{
  "śūnyatā": "shoonya-tah",
  "Śūnyatā": "Shoonya-tah",
  "Madhyamaka": "Mahd-yah-mah-kah",
  "Prāsaṅgika": "Prah-sahng-gee-kah",
  "svabhāva": "svah-bhah-vah",
  "anattā": "ah-nah-tah",
  "pratītyasamutpāda": "prah-teet-yah-sah-moot-pah-dah",
  "Nāgārjuna": "Nah-gar-joo-nah",
  "Dzogchen": "Zog-chen",
  "Dōgen": "Doh-gen"
}
```

The process:

1. Build `chNN-narration.txt` from the script body, replacing each display term with its spoken form.
2. After the SRT is generated, **reverse the substitution in the SRT**, so the subtitles show the correct spelling with diacritics.
3. Whenever a new term appears in a chapter, add it to the map, and mention it in the chapter summary so the user can check how it sounds.

---

## 6. Audio and subtitles

### Install (first run only)

```
pip install edge-tts pillow
winget install Gyan.FFmpeg      # or confirm `ffmpeg -version` already works
```

### Generate

```
edge-tts --voice en-US-AndrewNeural --rate=-8% --pitch=-2Hz ^
  -f chNN-narration.txt ^
  --write-media chNN-raw.mp3 ^
  --write-subtitles chNN-raw.srt
```

- If this edge-tts version writes `.vtt` instead of `.srt`, convert it with `ffmpeg -i in.vtt out.srt`.
- Normalise the loudness and save the result as `chNN-narration.mp3`:
  `ffmpeg -i chNN-raw.mp3 -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 48000 chNN-narration.mp3`

### Clean up the SRT → `chNN.srt`

- Reverse the pronunciation substitutions (§5).
- Make each cue at most **2 lines** and at most **42 characters per line**, breaking at natural phrase boundaries.
- Keep each cue between **1.2 and 6 seconds** long. If a cue is too long, split it at a phrase boundary, dividing its time span in proportion to the characters on each side.
- Do not let cues overlap. Leave a gap of at least 80 ms between cues.
- **Shift every cue by +5.0 s** to account for the title card.
- Write the file as UTF-8 so the diacritics survive.

---

## 7. Visuals

### Background (`assets/background.png`, generate once)

Generate this with Pillow at 2120×1192 (oversized to allow a slow drift):

- A deep, near-black indigo-to-charcoal radial gradient (centre around `#1b1d2b`, edges around `#07080c`)
- Very faint film grain, at about 2% noise
- A soft vignette
- No text, symbols, or religious imagery

In the video, animate it with a very slow drift or zoom using `zoompan`, from about 1.00 to 1.06 over the whole episode, so the frame is never perfectly static.

### Fonts (`assets/fonts/`)

- **Title:** Cormorant Garamond (SemiBold) or EB Garamond, from Google Fonts. If neither can be downloaded, fall back to Georgia (`C:\Windows\Fonts\georgia.ttf`).
- **Subtitles:** Source Sans 3 or Inter (Regular). Fall back to Segoe UI.

### Title card (`chNN-title.png`, 1920×1080)

Use the same background, then add:

- **"CHAPTER N"** in the title font, about 34 px, letter-spaced (tracking about 0.35 em), colour `#b9b4a6`, centred, placed a little above the middle
- A thin horizontal rule, 120 px wide and 1 px thick, colour `#6f6a5e`, centred below it
- **The chapter title** in the title font, about 76 px, colour `#ece7da`, centred, wrapping to a maximum of 2 lines within 1500 px
- Use the chapter number as written in the manuscript. Convert it to a word only if the manuscript does so.

### Subtitle style (ffmpeg `subtitles` filter)

```
force_style='FontName=Source Sans 3,FontSize=22,PrimaryColour=&H00EDEDED,OutlineColour=&H80000000,BorderStyle=1,Outline=1.2,Shadow=0,MarginV=70,Alignment=2'
```

**Windows tip:** run ffmpeg *from inside the chapter folder* and pass the SRT as a bare relative filename (`subtitles=chNN.srt`). This avoids the drive-letter escaping problem in the filter. Pass the fonts folder with `:fontsdir=../assets/fonts`.

---

## 8. Assembly

For each chapter:

1. **Title segment (5 s):** build it from `chNN-title.png` with `fade=in:0:30, fade=out:st=4:d=1`, and pair it with 5 s of silence.
2. **Body segment:** the drifting background, plus `chNN-narration.mp3`, plus 2 s of tail, with a 1.5 s fade to black at the end.
3. **Optional music:** if `assets/music.mp3` exists, loop it under the whole video at about **-28 dB** relative to the voice, with a 3 s fade in and a 3 s fade out. If the file is absent, skip this step silently.
4. Concatenate the title and body segments, then burn in `chNN.srt`. Its timings already include the +5 s offset.
5. Write the result to `chNN-<slug>.partial.mp4`. Only when ffmpeg has finished without errors, rename it to `chNN-<slug>.mp4`. A file with the final name must always be a complete video.

A Python script `Videos/build.py` should wrap all of the above with this interface:
`python build.py --chapter 1`, `python build.py --all`, and `--skip-existing`.

---

## 9. Quality checks (each chapter)

- [ ] The script is 450–550 words and passes the §4 stance checklist. Read it back once, specifically looking for any wording that makes relation, awareness, or process into a substrate.
- [ ] Narration runs 3:00–4:30 (check with `ffprobe`; target 3–4 min, up to 30 s over is fine).
- [ ] The SRT parses cleanly: no overlaps, every cue within the limits, diacritics display correctly.
- [ ] Check frames at 0:02 (title card), 0:30 and 2:00 (subtitles readable and not clipped), and the end (clean fade). Take them from the final `chNN-<slug>.mp4` and save them in the chapter folder as `chNN-frame-0002.png`, `chNN-frame-0030.png`, `chNN-frame-0200.png` and `chNN-frame-end.png`. If the video is rebuilt, take the frames again.
- [ ] Update `manifest.csv`.

---

## 10. Workflow

1. **Setup:** install the tools, generate the background and fonts, create `pronunciation.json`, and list all chapters (number + title) found in the manuscript. Write that list to `Videos/chapters.json`, in order, as UTF-8:
   `[{"number": 1, "title": "<Exact title>"}, {"number": 2, "title": "..."}, ...]`
2. **Pilot:** build Chapter 1 end to end, then **stop**. Report the script, the duration, any new pronunciation entries, and the check frames, then wait for the user's feedback on voice, pace, look, and condensing style.
3. Apply the user's feedback to this spec (edit the working copy in `Videos/` so the change persists). Do not build Chapter 2 until the user has approved the pilot. The approval is the file `Videos/PILOT-APPROVED`, which the user creates (the chapter-builder button does this). Never create it yourself.
4. **Batch:** build the remaining chapters one at a time with `--skip-existing`. After each chapter, report a one-line status. Pause if a chapter fails a check.
5. **Finish:** produce a summary table of every chapter with its duration, plus a list of any terms the user should listen to.
