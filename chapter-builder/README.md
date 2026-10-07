# chapter-builder

A Claude Code mod for the *Substrateless World* video series (see `VIDEO-SPEC.md`).

It adds a **▶ Build Next Chapter** button above the prompt (hotkey `n` once the band has focus; also `/next-chapter`):

1. Pressing it finds the first chapter in `Videos/` without a finished `.mp4` and asks Claude to build that chapter end to end, following `VIDEO-SPEC.md` (MD → MP3 → SRT → MP4, quality checks, `manifest.csv`). Chapter 1 is treated as the pilot and stops for review.
2. While it runs, a progress bar shows the 7 stages, ticking forward as each file appears in `chNN-<slug>/`:
   script `.md` → narration `.txt` → `.mp3` → `.srt` → title `.png` → `.mp4` → check frames.
3. When the turn ends it shows ✓ finished (or where it stopped) and the button moves on to the next chapter.

## Install

```
/plugin install chapter-builder --marketplace johntlm/videos
```

Run Claude Code from inside the `Videos\` folder, or set the folder in `/config` → `chapter-builder.videosDir`.
