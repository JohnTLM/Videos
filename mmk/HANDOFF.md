# Handoff: make the MMK videos on this computer, straight into Google Drive

For a Claude Code session on the owner's Windows laptop. Written 2026-10-19 by the cloud session that made the videos.
Paths updated on 2026-10-21, when the video scripts moved from `thusness-website/scripts/mmk_video/` to this folder
(`videos/mmk/`); the chapter pages stay in `thusness-website/mmk/`.
Read the website's `CLAUDE.md` first; its rules apply (ask before downloads and installs, explain in plain language, commit after
each step).

## What the owner wants

The 27 MMK chapter videos, **without the reading of the verses**, saved into the owner's Google Drive folder for the
book, so they can be kept there and uploaded to YouTube. The owner watched a sample (chapter 3) and approved it.

A cloud session cannot write to the laptop's `G:` drive. This computer can: anything saved under `G:\My Drive\` is
uploaded by Google Drive for desktop on its own, whatever the size.

## What is already done (do not redo)

- The chapter pages, the narration for each video (`mmk/narration/<n>.json`) and the video
  script are finished and committed.
- The cloud session is making its own copies of the shorter videos for the owner's website. **Do not change the
  website** (`index.html` or the live artifact); that is the cloud session's job.
- Everything is free: the voice is edge-tts (Microsoft's free voice, en-US-AndrewNeural). There is no paid AI call
  in this task, so no budget is needed.

## Steps

1. **Get the code.** Clone this repository to `C:\dev\videos` and the website to `C:\dev\thusness-website`
   (side by side; see `mmk\README.md`). Check that `mmk\make_local.ps1` exists.
2. **Check the tools.** Needed: `ffmpeg`, `node`, `npm`, the project's `.venv`, and edge-tts in it.
   Test each one (`ffmpeg -version`, `node -v`, `.venv\Scripts\python -c "import edge_tts"`). If `.venv` is
   missing, create it in the `videos` folder (see `mmk\README.md`).
3. **Install what is missing. Ask the owner first** (these are downloads):
   ```powershell
   winget install --id Gyan.FFmpeg -e
   winget install --id OpenJS.NodeJS.LTS -e
   # reopen PowerShell, then in the videos folder:
   npm install -g playwright
   npx playwright install chromium
   .venv\Scripts\python -m pip install edge-tts
   ```
4. **Find the Drive folder.** It is called `Nagarjuna-Middle-Way`, beside `Substrateless-World` and
   `Anatta-to-Emptiness` (Drive id `1I57dKM9chF8gA13e27Vfv4kLV4rNhT_g`). Look under `G:\My Drive\`
   (the drive letter may differ). Confirm the path with the owner.
5. **Make one chapter and show the owner.**
   ```powershell
   powershell -ExecutionPolicy Bypass -File mmk\make_local.ps1 -Drive "<the folder>" -Chapters 3
   ```
   It saves `mmk-3-full.mp4`, `mmk-3-phone.mp4` and `mmk-3.srt` in `<the folder>\videos`. Ask the owner to play
   the full one: about 5.9 minutes; it goes from "The shape of the chapter" straight to "Now the explanation",
   with no verse reading; subtitles at the bottom.
6. **Make the rest** once the owner is happy: the same command without `-Chapters` (all 27; about 3 to 4 hours).
   It runs one chapter at a time. If a chapter fails (the free voice service sometimes refuses), run it again
   with `-Chapters <n>`. Tell the owner the progress in plain words.
7. **YouTube text.** When the script finishes it prints a `youtube_meta.py` command. Run it: it writes
   `youtube.json` to the Drive folder with a title, a description (with chapter timestamps) and tags for each
   video. Offer the owner a simple page or document to copy from.

## Things that may need fixing on Windows

The scripts were written and tested in the cloud (Linux); the Windows parts are untested.

- `make_local.ps1` reads the slide timings from logs in `%TEMP%\mmk-video\log-<n>.txt`; `youtube_meta.py`
  reads UTF-8 or UTF-16.
- Slides are drawn by `render.js` (Playwright, Chromium); it needs `NODE_PATH` set to `npm root -g`
  (the script does this).
- Subtitles are burned in by ffmpeg with the Arial font on Windows (`SUBFONT` in `make_video.py`).
- The slides load fonts from Google Fonts, so the laptop needs internet while drawing.

If you fix something, keep the change small, commit it with a clear message and tell the owner. Ask before
`git push`.

## YouTube notes for the owner

- The owner uploads in YouTube Studio (up to 15 videos at a time), using the full-size files.
- **Turn ads off** for these videos: the verse numbering follows the GRETIL Sanskrit text, which is licensed for
  non-commercial use (CC BY-NC-SA 4.0). Keep the credit line that `youtube_meta.py` puts in each description.
- Suggested playlist: "Nāgārjuna's Middle Way: the MMK chapter by chapter".
