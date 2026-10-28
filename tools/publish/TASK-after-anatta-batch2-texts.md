# Task for Claude Code on the owner's server: put the texts on 14 more After Anatta videos

**Owner's request (2026-10-28):** 14 videos shown on the After Anatta pages (The Logic and Questions) were not on
YouTube yet. The owner uploads them by hand in YouTube Studio (Unlisted, all at once). Their titles are then still the
file names (`01-seeing-comes-first` and so on), with no descriptions or tags. Put the prepared title, description
(with chapter times) and tags on each one, and add all 14 to the playlist **Logic After Anatta**. The owner also
wants comments off on all 14 (step 6: YouTube's programming interface cannot do that, so the owner does it in
YouTube Studio in one go).

Read `tools/publish/README.md` first. It explains the tools and the one-time setup (already done on this server on
2026-10-28; see `TASK-after-anatta-texts.md`, "Done").

## Rules for this task

- **Only change texts and the playlist.** Do not upload, delete or re-upload any video. Do not change any video's privacy
  (they stay Unlisted). If you find a duplicate, tell the owner; delete nothing unless he says so.
- **Never print, paste or commit** `~/.config/thusness-publish/client_secret.json` or `token.json`, or anything from them.
- **If anything does not match what is written here, stop and tell the owner.** Do not guess.
- Explain to the owner in plain language: short sentences, no jargon, one clear next step.

## The 14 videos

The texts are in `new-documents/after-anatta/youtube-after-anatta-batch2.md`; the entry number is the `## N.`
heading there, and it is also the number at the start of the file name. There is no entry 5: file 5, *The Limits of
the Tools*, is already on YouTube with its texts and in the playlist, so the owner does not upload it again. If it
was uploaded again anyway, it is a duplicate: tell the owner.

| Entry | File name (= title after upload) | Video | Length |
|---|---|---|---|
| 1 | `01-seeing-comes-first` | The Logic: After Anatta (overview, Seeing Comes First) | 12:25 |
| 2 | `02-does-it-arise-or-cease` | Does It Arise or Cease? (the koan) | 11:54 |
| 3 | `03-decoding-anatta-and-mmk-ch3` | Decoding Anatta and MMK Chapter 3 | 7:00 |
| 4 | `04-the-great-desynchronization` | The Great Desynchronization | 7:18 |
| 6 | `06-vivid-and-nowhere` | Vivid and Nowhere | 21:11 |
| 7 | `07-knowing-from-somewhere` | Knowing From Somewhere | 21:01 |
| 8 | `08-the-illusion-of-the-given` | The Illusion of the Given | 20:56 |
| 9 | `09-isnt-energy-the-substrate` | Isn't Energy the Substrate? | 3:00 |
| 10 | `10-carrierless-continuity` | Carrierless Continuity | 13:17 |
| 11 | `11-book4-ch01-witness-behind-experience` | Book 4, Ch. 1: The Witness Behind Experience | 3:19 |
| 12 | `12-book4-ch02-vividness-without-a-viewer` | Book 4, Ch. 2: Vividness Without a Viewer | 3:28 |
| 13 | `13-book4-ch23-recognition-not-effort` | Book 4, Ch. 23: Recognition, Not Effort (the video says "Chapter 22, Recognition, Not Achievement") | 3:16 |
| 14 | `14-the-world-itself` | The World Itself (AA10) | 7:44 |
| 15 | `15-ethics-and-compassion` | Ethics and Compassion (AA11) | 7:34 |

YouTube may round a length by one second; a difference of one second is fine. Anything more means a wrong match.
All 14 go into the existing playlist **Logic After Anatta**, in entry order, after the videos already there.

## Steps

1. **Get the latest repository.**

   ```bash
   cd ~/videos && git checkout main && git pull
   ```

2. **Check the tools and the sign-in.** `~/.venvs/publish` and `~/.config/thusness-publish/token.json` must exist.
   If the token is missing or refused, run `~/.venvs/publish/bin/python tools/publish/google_login.py` and guide the
   owner through the sign-in (README.md, Part B).

3. **Find the 14 uploads and match them.**

   ```bash
   PY=~/.venvs/publish/bin/python
   $PY tools/publish/publish_youtube.py uploads -n 30
   ```

   Match each row of the table to one upload by its title (the file name) **and** its length. Write the 14 ids down
   in table order. Stop and tell the owner if any of the 14 is missing, if a length is off by more than one second,
   or if a file name appears twice (show him the ids, titles and lengths).

4. **Put the texts on and add the playlists.** Only after step 3 matched. Set the ids, then run:

   ```bash
   M=new-documents/after-anatta/youtube-after-anatta-batch2.md
   # entry:id pairs in table order, from step 3
   PAIRS="1:ID 2:ID 3:ID 4:ID 6:ID 7:ID 8:ID 9:ID 10:ID 11:ID 12:ID 13:ID 14:ID 15:ID"
   for p in $PAIRS; do n=${p%%:*}; id=${p#*:}
     $PY tools/publish/publish_youtube.py update "$id" --meta $M --entry $n --playlist "Logic After Anatta" || break
   done
   ```

   Each line printed shows the new title. If one fails, stop and report the error message (it contains no secrets).
   Do not run the loop a second time over videos that already went through: that would add them to the playlist
   twice. To redo only the texts of one video, run the same `update` line without `--playlist`.

5. **Check the playlist.**

   ```bash
   $PY tools/publish/publish_youtube.py playlist "Logic After Anatta"
   ```

   Each of the 14 must be there once, after the twelve already there. On the website entries 1 to 4 come before
   Step 1, so tell the owner he can drag them up in YouTube Studio if he wants.

6. **Comments off: the owner does this in YouTube Studio.** The YouTube Data API has no setting for a video's
   comments, so do not try (and never use "made for kids" to switch them off: it changes much more). Tell the owner:
   1. Open https://studio.youtube.com and go to **Content**.
   2. Tick the 14 videos (their new titles from step 4).
   3. At the top, press **Edit**, then **Comments**, then choose **Off** (or **Disable comments**), and press
      **Update videos**. Tick the box to confirm, and press **Update videos** again.
   4. Optional, for future uploads: **Settings** › **Upload defaults** › **Advanced settings** › **Comments**: **Off**.

7. **Report to the owner**, briefly:
   - the 14 new titles, each with its link;
   - the playlist link (printed by step 5);
   - the Studio steps for comments (step 6);
   - the next step: tell the website session **"The new videos are up"**. It reads the ids from the pull request in
     step 8 and points the website and the server copy at YouTube.

8. **Record it.** Add a dated line at the end of this file under "Done" with the 14 entry numbers and their YouTube
   ids. Commit and push on a new branch and open a pull request for the owner (do not merge
   it yourself).

## Done
