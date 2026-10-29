# Task for Claude Code on the owner's server: texts on five remade After Anatta videos

**Owner's request (2026-10-29):** five After Anatta videos were remade. In Steps 3, 4, 7 and 8 the bell is replaced by
each step's own example, and *What the Logic Is Looking At* gains *Holding an apple*. The owner uploads the five new
files by hand in YouTube Studio (Unlisted, all at once). YouTube cannot swap the file of a video that is already up,
so each one is a **new video with a new id**, and the old version stays on the channel until the owner decides
otherwise. Put the prepared title, description (with the new chapter times) and tags on each new upload, and add them
to the playlist **Logic After Anatta**.

Read `tools/publish/README.md` first. It explains the tools and the one-time setup (already done on this server on
2026-10-28; see `TASK-after-anatta-texts.md`, "Done").

## Rules for this task

- **Only change texts and the playlist.** Do not upload, delete or re-upload any video. Do not change any video's
  privacy (they stay Unlisted). Do not touch the old versions (table below): the owner decides what happens to them.
- **Never print, paste or commit** `~/.config/thusness-publish/client_secret.json` or `token.json`, or anything from them.
- **If anything does not match what is written here, stop and tell the owner.** Do not guess.
- Explain to the owner in plain language: short sentences, no jargon, one clear next step.

## The five videos

The texts are in `new-documents/after-anatta/youtube-after-anatta-batch3.md`; the entry number is the `## N.` heading
there.

| Entry | File the owner uploads | Video | Length | Old version (leave alone) |
|---|---|---|---|---|
| 1 | `aa12-what-the-logic-is-looking-at.mp4` | What the Logic Is Looking At (AA12) | 8:58 | `ERBH0_9vwVU` |
| 2 | `aa03-designated-not-found.mp4` | Designated, Not Found (After Anatta 3) | 7:40 | `LmlHbrwg1xk` |
| 3 | `aa04-the-two-truths.mp4` | The Two Truths (After Anatta 4) | 8:31 | `sMa1ajWETec` |
| 4 | `aa07-function-without-substance.mp4` | Function Without Substance (After Anatta 7) | 8:02 | `HX7xwtsSYjs` |
| 5 | `aa08-the-four-questions.mp4` | The Four Questions (After Anatta 8) | 7:33 | `6BAD37Dk_lw` |

YouTube may round a length by one second; a difference of one second is fine. Anything more means a wrong match.

**Careful:** the new Step 3 is exactly as long as the old one (7:40), and the new Step 8 only one second shorter than
the old (7:34). So match among the **new uploads only**: the five most recent, whose titles are still a file name or a
date, never one of the ids in the last column.

## Steps

1. **Get the texts.** They are on a branch that is not merged yet:

   ```bash
   cd ~/videos && git fetch origin claude/dependent-arising-perception-10jty0 \
     && git checkout claude/dependent-arising-perception-10jty0 && git pull
   ```

2. **Check the tools and the sign-in.** `~/.venvs/publish` and `~/.config/thusness-publish/token.json` must exist.
   If the token is missing or refused, run `~/.venvs/publish/bin/python tools/publish/google_login.py` and guide the
   owner through the sign-in (README.md, Part B).

3. **Find the five uploads and match them.**

   ```bash
   PY=~/.venvs/publish/bin/python
   $PY tools/publish/publish_youtube.py uploads -n 15
   ```

   Match each row of the table to one new upload by its length (and its title, if it is still the file name). Write
   the five ids down in table order. Stop and tell the owner if one is missing, if a length is off by more than one
   second, if a match would be one of the old ids, or if two new uploads have the same length.

4. **Put the texts on and add them to the playlist.** Only after step 3 matched. Set the ids, then run:

   ```bash
   M=new-documents/after-anatta/youtube-after-anatta-batch3.md
   # entry:id pairs in table order, from step 3
   PAIRS="1:ID 2:ID 3:ID 4:ID 5:ID"
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
   1. **Playlist:** open **Playlists › Logic After Anatta**. Remove the five old versions (the ids in the last column)
      and drag each new one into the old one's place: What the Logic Is Looking At first, then Steps 1 to 8 in order.
   2. **Comments off** on the five new videos: **Content**, tick them, **Edit › Comments › Off**, **Update videos**.
   3. **The old versions:** his choice. Keep them Unlisted, make them Private, or delete them. Nothing on the website
      will point to them once the last step below is done.

7. **Record it.** Add a dated line at the end of this file under "Done" with the five entry numbers and their new
   YouTube ids. Commit and push to the same branch (`claude/dependent-arising-perception-10jty0`). Do not merge.

8. **Report to the owner**, briefly: the five new titles with their links, the Studio steps (step 6), and the next
   step: tell the website session **"The new videos are up"**. It reads the five ids from this file and points the
   website's "Full quality" links, the server copy (`vm_videos.json`) and the ebook at the new videos.

## Done

