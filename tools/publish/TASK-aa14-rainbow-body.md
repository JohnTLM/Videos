# Task for Claude Code on the owner's server: Rainbow Body (AA14) to Drive, and its YouTube texts

**Owner's request (2026-10-30):** a video for the question page *Rainbow Body* (thusness-website `aa-rainbow`). A cloud
session wrote the script and drawings and built the video (11:41, 701 s); the website plays its small copy. The owner
uploaded the video to YouTube on 2026-10-30. This server now builds the full-quality file, puts it in Drive, and puts
the texts on the YouTube upload.

| What | Where (this repository) |
|---|---|
| Script | `new-documents/after-anatta/aa14-rainbow-body-script.md` |
| Drawings | `tools/explainer/src/chapters/AA14.tsx` |
| Narration and subtitles | `new-documents/after-anatta/aa14-rainbow-body-narration.txt`, `aa14-rainbow-body.srt` |
| YouTube texts | `new-documents/after-anatta/youtube-after-anatta-aa14.md` (one entry) |

Read `README.md` ("Rule: build on the owner's server") and `tools/publish/README.md` first.

## Rules for this task

- **Never print, paste or commit** `~/.config/thusness-publish/client_secret.json` or `token.json`, or anything from them.
- **Do not upload, delete or re-upload any YouTube video, or change any video's privacy.** Only put the texts on the
  owner's upload (step 4) and add it to the playlist.
- **Drive:** upload only into the folder named in step 3; never change sharing; do not use `--replace`.
- **If anything does not match what is written here, stop and tell the owner.** Do not guess.
- Explain to the owner in plain language: short sentences, no jargon, one clear next step.

## Steps

1. **Get the files.**

   ```bash
   cd ~/videos && git checkout main && git pull
   S=tools/series/after-anatta
   mkdir -p $S/aa14-rainbow-body
   cp new-documents/after-anatta/aa14-rainbow-body-script.md $S/aa14-rainbow-body/aa14-script.md
   ```

2. **Build it.**

   ```bash
   PY=~/.venvs/build/bin/python
   $PY $S/build.py --chapter 14
   ```

   It prints `words 1738, narration ...s, video ...s`. The video should be about 701 s (within 3 s). Look at the four
   `check-*.png` frames. Stop and tell the owner if the build fails or the length is off by more than 5 s.

3. **Put the MP4 in Drive** (owner only). The article's Drive folder is `My-Book › Bonus Articles ›
   rainbow-body-and-emptiness`, made by the automatic Drive copy (thusness-website `scripts/drive_sync.json`, key
   `rainbow-body-and-emptiness`; look the id up there or by name under `Bonus Articles`
   `1ea2OkxEyhC9s64AVglW70-b76s3PWQCx`). If it does not exist, stop and tell the owner.

   ```bash
   PUB=~/.venvs/publish/bin/python
   $PUB tools/publish/publish_drive.py <folder id> $S/aa14-rainbow-body/aa14-rainbow-body.mp4
   ```

   The upload is checked by size. Do not share it; the owner decides.

4. **Put the texts on the owner's upload.**

   ```bash
   $PUB tools/publish/publish_youtube.py uploads -n 10
   ```

   Find the upload of about 11:41 (one second either way) titled like "aa14" or "Rainbow Body". Stop and tell the owner
   if there is none or more than one. Then:

   ```bash
   $PUB tools/publish/publish_youtube.py update <ID> --meta new-documents/after-anatta/youtube-after-anatta-aa14.md \
     --entry 1 --playlist "Logic After Anatta"
   ```

   Run it once only (a second run adds it to the playlist twice).

5. **Record** the Drive file id and the YouTube id in **Done** below, commit on a `claude/` branch, push, open a pull
   request and merge it. Tell the owner both, and that a cloud session can now add the "Full quality" link to the page
   (thusness-website `after-anatta/pages.json`, `aa-rainbow`, and `scripts/vm_videos.json`).

## Done

(filled in by the server session)
