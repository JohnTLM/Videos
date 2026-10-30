# Task for Claude Code on the owner's server: build and publish batch 5 (the chain of insight)

**Owner's request (2026-10-30):** remake the videos that no longer match their pages, and join *The Logic in full*
again. A cloud session wrote and checked the scripts and drawings (Videos PR #35, merged) and built the three videos
there to test them; the website already plays its small copies (main site version 130). This server now builds the
full-quality files, joins *The Logic in full*, and puts all four in Drive. The owner uploads them to YouTube by hand.
Then this server puts on the texts.

| # | Video | Script (in this repository) | Drawings | Length the cloud build had |
|---|---|---|---|---|
| 1 | AA09 *Decoding Anatta and MMK Chapter 3* | `new-documents/after-anatta/aa09-decoding-anatta-and-mmk-3-script.md` | `tools/explainer/src/chapters/AA09.tsx` | 18:40 (1119.8 s) |
| 2 | AA12 *What the Logic Is Looking At* | `new-documents/after-anatta/aa12-what-the-logic-is-looking-at-script.md` | `AA12.tsx` | 11:22 (682.5 s) |
| 3 | ep96 *The Logic: After Anatta* (overview) | `new-documents/the-logic-after-anatta/ep96-script.md` | `AE96.tsx` | 13:45 (824.8 s) |
| 4 | *The Logic in full* | joined by `tools/series/after-anatta/make_full.py` | | about 1:22 |

Read `README.md` ("Rule: build on the owner's server") and `tools/publish/README.md` first.

## Rules for this task

- **Never print, paste or commit** `~/.config/thusness-publish/client_secret.json` or `token.json`, or anything from them.
- **Do not upload to YouTube, delete or change any YouTube video, or change any video's privacy.** The owner uploads.
  Only put the texts on the four new uploads (step 6) and add them to the playlist.
- **Drive:** upload only into the two folders named below; never change sharing; do not use `--replace` (the old files
  stay until the owner decides).
- **If anything does not match what is written here, stop and tell the owner.** Do not guess.
- Explain to the owner in plain language: short sentences, no jargon, one clear next step.

## Steps

1. **Get the files.**

   ```bash
   cd ~/videos && git checkout main && git pull
   ```

2. **Put the scripts where the builder reads them** (the series folders are not in git):

   ```bash
   S=tools/series
   mkdir -p $S/after-anatta/aa09-decoding-anatta-and-mmk-3 $S/after-anatta/aa12-what-the-logic-is-looking-at \
            $S/anatta-to-emptiness/ep96-the-logic-after-anatta
   cp new-documents/after-anatta/aa09-decoding-anatta-and-mmk-3-script.md $S/after-anatta/aa09-decoding-anatta-and-mmk-3/aa09-script.md
   cp new-documents/after-anatta/aa12-what-the-logic-is-looking-at-script.md $S/after-anatta/aa12-what-the-logic-is-looking-at/aa12-script.md
   cp new-documents/the-logic-after-anatta/ep96-script.md $S/anatta-to-emptiness/ep96-the-logic-after-anatta/ep96-script.md
   cp new-documents/the-logic-after-anatta/pronunciation.json $S/anatta-to-emptiness/ep96-the-logic-after-anatta/pronunciation.json
   ```

   Each folder must then hold exactly one `*-script.md` (remove any older script of another name in it).

3. **Build the three videos** (one at a time; AA09 takes the longest):

   ```bash
   PY=~/.venvs/build/bin/python
   $PY $S/after-anatta/build.py --chapter 9
   $PY $S/after-anatta/build.py --chapter 12
   $PY $S/anatta-to-emptiness/build.py --chapter 96
   ```

   Each prints `words ..., narration ...s, video ...s`. The video lengths should be within about 3 seconds of the
   table (the free voice can vary a little). Look at the four `check-*.png` frames in each folder. Stop and tell the
   owner if a build fails or a length is off by more than 5 seconds.

4. **Join *The Logic in full*.** It uses the new overview and AA12 and the eight step videos already on this server
   (`$S/after-anatta/aa0N-*/aa0N-*.mp4`). First check that each step video is the current one (batch 3 and 4): their
   lengths should be AA01 8:10, AA02 8:42, AA03 7:40, AA04 8:31, AA05 8:05, AA06 8:03, AA07 8:02, AA08 7:33 (one
   second either way). If one is missing or different, stop and tell the owner.

   ```bash
   $PY $S/after-anatta/make_full.py ~/the-logic-full.mp4
   ```

   It prints the chapter list and the total. Copy the chapter list into `new-documents/after-anatta/youtube-after-anatta-batch5.md`,
   entry 4, in place of the line `CHAPTERS`, and put the total in that entry's heading.

5. **Put the four files in Drive** (owner only; the folders are private):

   ```bash
   PUB=~/.venvs/publish/bin/python
   $PUB tools/publish/publish_drive.py 1-XX6lrSSpd4PgI8VZcLjC3LdddfIQbQC \
     $S/after-anatta/aa09-decoding-anatta-and-mmk-3/aa09-decoding-anatta-and-mmk-3.mp4      # Bonus Articles › Who Is Seeing
   $PUB tools/publish/publish_drive.py 1rMYnmbFgk3dBuparRmVk36BzA5KSiJvx \
     $S/after-anatta/aa12-what-the-logic-is-looking-at/aa12-what-the-logic-is-looking-at.mp4 \
     $S/anatta-to-emptiness/ep96-the-logic-after-anatta/ep96-the-logic-after-anatta.mp4 \
     ~/the-logic-full.mp4                                                                    # Bonus Articles › Logic After Anatta
   ```

   The folders already hold older files with the same names; that is fine (no `--replace`). Each upload is checked
   by size. Then commit the edited `youtube-after-anatta-batch5.md` and this file's **Done** section on a
   `claude/` branch and push.

   **Tell the owner:** the four files are in Drive (names and folders), ready to download and upload to YouTube
   Studio as **Unlisted**, all four at once. Then wait for the owner to say they are up.

6. **After the owner uploads: put the texts on.**

   ```bash
   $PUB tools/publish/publish_youtube.py uploads -n 20
   ```

   Match the four newest uploads to entries 1–4 of `youtube-after-anatta-batch5.md` by length (one second either
   way); never one of the old ids `a5DV2fTb-OI`, `uMGOHMZe0Qo`, `HB_-bl1Jf2Q`, `8xMTijGVNk8`. Stop and tell the owner
   if one is missing or two have the same length. Then:

   ```bash
   M=new-documents/after-anatta/youtube-after-anatta-batch5.md
   PAIRS="1:ID 2:ID 3:ID 4:ID"
   for p in $PAIRS; do n=${p%%:*}; id=${p#*:}
     $PUB tools/publish/publish_youtube.py update "$id" --meta $M --entry $n --playlist "Logic After Anatta" || break
   done
   ```

   If one fails, stop and report the error (it holds no secrets). Do not run the loop twice over the same videos.

7. **Record the ids** in this file's **Done** section (entry, new id, title shown), commit and push. Tell the owner the
   four new ids, and that a cloud session can now put the "Full quality" links back on the website (thusness-website
   `after-anatta/pages.json`, `scripts/vm_videos.json`) and update the ebook's watch links (EBooks
   `Ebooks/5-the-logic-after-anatta/build_book.py`, `VIDEOS` and `FULL_VIDEO`).

## Done

(filled in by the server session)
