# Task for Claude Code on the owner's server: texts on seven After Anatta videos (no bell)

**Owner's request (2026-10-29):** "Rebuild The Logic in full without the bell", the whole video. The overview (ep96)
and Steps 1, 2, 5, 6 and 7 were remade with every bell line replaced, and *The Logic in full* was joined again from
them, now with *What the Logic Is Looking At* after the overview (1:19:53). The owner uploads the seven new files by
hand in YouTube Studio (Unlisted, all at once). Each is a **new video with a new id**; the old versions stay until the
owner decides. Put the prepared title, description (with the new chapter times) and tags on each new upload, and add
them to the playlist **Logic After Anatta**.

Read `tools/publish/README.md` first. It explains the tools and the one-time setup (already done on this server on
2026-10-28; see `TASK-after-anatta-texts.md`, "Done").

## Rules for this task

- **Only change texts and the playlist.** Do not upload, delete or re-upload any video. Do not change any video's
  privacy (they stay Unlisted). Do not touch the old versions (table below): the owner decides what happens to them.
- **Never print, paste or commit** `~/.config/thusness-publish/client_secret.json` or `token.json`, or anything from them.
- **If anything does not match what is written here, stop and tell the owner.** Do not guess.
- Explain to the owner in plain language: short sentences, no jargon, one clear next step.

## The seven videos

The texts are in `new-documents/after-anatta/youtube-after-anatta-batch4.md`; the entry number is the `## N.` heading
there.

| Entry | File the owner uploads | Video | Length | Old version (leave alone) |
|---|---|---|---|---|
| 1 | `ep96-the-logic-after-anatta.mp4` | The Logic: After Anatta (overview, on Seeing Comes First) | 12:25 | `aJnvvc1wfxY` |
| 2 | `aa01-two-logics.mp4` | Two Logics (After Anatta 1) | 8:10 | `F0P_kfwAloE` |
| 3 | `aa02-what-is-negated.mp4` | What Is Negated (After Anatta 2) | 8:42 | `BXINN2sg_Z0` |
| 4 | `aa05-the-four-corners.mp4` | The Four Corners (After Anatta 5) | 8:05 | `QA9yrHNx5To` |
| 5 | `aa06-the-two-traps.mp4` | The Two Traps (After Anatta 6) | 8:03 | `wxhsA6xKIQM` |
| 6 | `aa07-function-without-substance.mp4` | Function Without Substance (After Anatta 7) | 8:02 | `q-YMWnYr2CI` |
| 7 | `the-logic-full.mp4` | The Logic in full | 1:19:53 | `lLkWbd2MoRw` |

YouTube may round a length by one second; a difference of one second is fine. Anything more means a wrong match.

**Careful:** most new videos are exactly as long as their old versions (the new lines are as long as the old), and
the new Step 7 is one second shorter than yesterday's. So match among the **new uploads only**: the seven most
recent, whose titles are still a file name or a date, never one of the ids in the last column.

## Steps

1. **Get the texts.** They are on a branch that is not merged yet:

   ```bash
   cd ~/videos && git fetch origin claude/dependent-arising-perception-10jty0 \
     && git checkout claude/dependent-arising-perception-10jty0 && git pull
   ```

2. **Check the tools and the sign-in.** `~/.venvs/publish` and `~/.config/thusness-publish/token.json` must exist.
   If the token is missing or refused, run `~/.venvs/publish/bin/python tools/publish/google_login.py` and guide the
   owner through the sign-in (README.md, Part B).

3. **Find the seven uploads and match them.**

   ```bash
   PY=~/.venvs/publish/bin/python
   $PY tools/publish/publish_youtube.py uploads -n 20
   ```

   Match each row of the table to one new upload by its length (and its title, if it is still the file name). Write
   the seven ids down in table order. Stop and tell the owner if one is missing, if a length is off by more than one
   second, if a match would be one of the old ids, or if two new uploads have the same length.

4. **Put the texts on and add them to the playlist.** Only after step 3 matched. Set the ids, then run:

   ```bash
   M=new-documents/after-anatta/youtube-after-anatta-batch4.md
   # entry:id pairs in table order, from step 3
   PAIRS="1:ID 2:ID 3:ID 4:ID 5:ID 6:ID 7:ID"
   for p in $PAIRS; do n=${p%%:*}; id=${p#*:}
     $PY tools/publish/publish_youtube.py update "$id" --meta $M --entry $n --playlist "Logic After Anatta" || break
   done
   ```

   Each line printed shows the new title. If one fails, stop and report the error message (it contains no secrets).
   Do not run the loop a second time over videos that already went through: that would add them to the playlist
   twice. If the owner already put some in the playlist while uploading, leave those out of `--playlist` (run their
   `update` line without it).

5. **Check the playlist.**

   ```bash
   $PY tools/publish/publish_youtube.py playlist "Logic After Anatta"
   ```

   Each new video must be there once. The old versions are still in it too: the tools cannot remove or move playlist
   items, so the owner does that in YouTube Studio (step 6).

6. **Tell the owner what is left for him in YouTube Studio** (https://studio.youtube.com):
   1. **Playlist:** open **Playlists › Logic After Anatta**. Remove the seven old versions (the ids in the last column)
      and drag each new one into its old version's place.
   2. **Comments off** on the seven new videos: **Content**, tick them, **Edit › Comments › Off**, **Update videos**.
   3. **The old versions:** his choice. Keep them Unlisted, make them Private, or delete them. Nothing on the website
      will point to them once the last step below is done.

7. **Record it.** Add a dated line at the end of this file under "Done" with the seven entry numbers and their new
   YouTube ids. Commit and push to the same branch (`claude/dependent-arising-perception-10jty0`). Do not merge.

8. **Report to the owner**, briefly: the seven new titles with their links, the Studio steps (step 6), and the next
   step: tell the website session **"The new videos are up"**. It reads the seven ids from this file and points the
   website's "Full quality" links, the server copy (`vm_videos.json`) and the ebook at the new videos.

## Done

- **2026-10-29, entries 1–6 (owner: "6/7 of the videos are uploaded").** Texts put on; all six were already in the
  playlist Logic After Anatta (the owner added them while uploading), so `update` ran without `--playlist`. New ids:
  1 `HB_-bl1Jf2Q`, 2 `EGSuFCoBwUc`, 3 `ntuzf3pHcgw`, 4 `Rf7BRLgxfMg`, 5 `aLZriJgtSns`, 6 `vh81K4RwTko` (each one
  second longer than the table, as allowed). **Entry 7 (The Logic in full, 1:19:53) not done yet:** still uploading.
- **2026-10-29, entry 7 (owner: "The last video is loaded").** Texts put on and added to the playlist Logic After
  Anatta: 7 `8xMTijGVNk8` (1:19:54, one second over, as allowed). **All seven are done.** Playlist checked: each of
  the seven new ids is in it once (37 videos; the seven old versions still there for the owner to remove in Studio).
  The seven new ids in table order: 1 `HB_-bl1Jf2Q`, 2 `EGSuFCoBwUc`, 3 `ntuzf3pHcgw`, 4 `Rf7BRLgxfMg`,
  5 `aLZriJgtSns`, 6 `vh81K4RwTko`, 7 `8xMTijGVNk8`.
