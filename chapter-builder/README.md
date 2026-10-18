# chapter-builder

A Claude Code mod for the *Substrateless World* video series (see `VIDEO-SPEC.md`).

It adds a **▶ Build Next Chapter** button above the prompt (hotkey `n` once the band has focus; also `/next-chapter`):

1. Pressing it finds the first chapter in `Videos/` that is not fully built and asks Claude to build it end to end, following `VIDEO-SPEC.md` (MD → MP3 → SRT → MP4, quality checks, `manifest.csv`).
2. While it runs, a progress bar shows the 7 stages, ticking forward as each file appears in `chNN-<slug>/`:
   script `.md` → narration `.txt` → `.mp3` → `.srt` → title `.png` → `chNN-<slug>.mp4` → four check frames (`chNN-frame-0002/0030/0200/end.png`).
3. When the turn ends it shows ✓ finished (or where it stopped) and the button moves on to the next chapter.

A chapter counts as built only when its video is there under its final name, is not empty, and all four check frames were made after it.

## Pilot gate and last chapter

- After Chapter 1 (the pilot) is built, the button changes to **Approve pilot** (hotkey `a`, or `/approve-pilot`). Review the video first. Approving writes `PILOT-APPROVED` in `Videos/`. Only then is Chapter 2 offered.
- The chapter count comes from `Videos/chapters.json`, which Claude writes at setup (spec §10). After the last chapter the band says **All N chapters built**.

## Commands

- `/next-chapter`: build the next chapter (same as the button).
- `/chapter-status`: show the band again after "Hide", and say what is built. Builds nothing.
- `/approve-pilot`: approve Chapter 1.
- `/reset-chapter`: stop tracking a stuck build (also the **Reset** button). Deletes no files. A build still "Queued" after 10 minutes is cancelled by itself.

## Install

```
/plugin install chapter-builder --marketplace JohnTLM/videos
```

Run Claude Code from inside the `Videos\` folder, or set the folder in `/config` → `chapter-builder.videosDir`.
Put `VIDEO-SPEC.md` in that folder: it is the working copy. The band warns you if it is missing.
