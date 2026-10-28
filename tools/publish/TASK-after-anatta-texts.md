# Task for Claude Code on the owner's server: put the texts on the ten After Anatta videos

**Owner's request (2026-10-28):** the ten After Anatta videos were uploaded by hand in YouTube Studio (Unlisted).
Their titles are still the upload date, and they have no descriptions or tags. Put the prepared title, description
(with chapter times) and tags on each one, and make sure all ten are in the playlist **The Logic After Anatta**, in order.

Read `tools/publish/README.md` first. It explains the tools and the one-time setup.

## Rules for this task

- **Only change texts and the playlist.** Do not upload, delete or re-upload any video. Do not change any video's
  privacy (they stay Unlisted).
- **Never print, paste or commit** `~/.config/thusness-publish/client_secret.json` or `token.json`, or anything from them.
- **If anything does not match what is written here, stop and tell the owner.** Do not guess.
- Explain to the owner in plain language: short sentences, no jargon, one clear next step.

## The ten videos, in order

The texts are in `new-documents/after-anatta/youtube-after-anatta.md`; the entry number is the `## N.` heading there.

| Entry | Video | YouTube id | Length on YouTube |
|---|---|---|---|
| 1 | What the Logic Is Looking At | `wxhsA6xKIQM` | 7:12 |
| 2 | Step 1, Two Logics | `QA9yrHNx5To` | 8:10 |
| 3 | Step 2, What Is Negated | `lLkWbd2MoRw` | 8:42 |
| 4 | Step 3, Designated, Not Found | `LmlHbrwg1xk` | 7:40 |
| 5 | Step 4, The Two Truths | `ERBH0_9vwVU` | 8:28 |
| 6 | Step 5, The Four Corners | `F0P_kfwAloE` | 8:05 |
| 7 | Step 6, The Two Traps | `BXINN2sg_Z0` | 8:04 |
| 8 | Step 7, Function Without Substance | `HX7xwtsSYjs` | 7:59 |
| 9 | Step 8, The Four Questions | `qn8SZaV1Akc` | 7:34 |
| 10 | The Logic in full | `6BAD37Dk_lw` | 1:05:29 |

The ids come from the owner's list. Nobody has yet checked them against YouTube, which is why step 3 below exists.
YouTube may round a length by one second (for example 8:04 shown as 8:05); a difference of one second is fine.
Anything more means the order is wrong.

## Steps

1. **Get the latest repository.**

   ```bash
   cd ~/videos 2>/dev/null && git pull || (git clone https://github.com/JohnTLM/videos ~/videos && cd ~/videos)
   ```

2. **Make sure the tools are installed and signed in.**
   - If `~/.venvs/publish` does not exist, follow README.md, Part B, to create it and install
     `tools/publish/requirements-publish.txt`.
   - If `~/.config/thusness-publish/client_secret.json` is missing, stop: the owner has not finished README.md Part A
     (steps 1 to 5). Tell him which step is next. Step 6 (Google's approval form) is **not** needed for this task.
   - If `~/.config/thusness-publish/token.json` is missing, run
     `~/.venvs/publish/bin/python tools/publish/google_login.py` and guide the owner through the sign-in (README.md,
     Part B). On the "unverified app" page he presses *Advanced*, then *Go to … (unsafe)*.

3. **Check the order.** Run:

   ```bash
   PY=~/.venvs/publish/bin/python
   $PY tools/publish/publish_youtube.py info wxhsA6xKIQM QA9yrHNx5To lLkWbd2MoRw LmlHbrwg1xk ERBH0_9vwVU F0P_kfwAloE BXINN2sg_Z0 HX7xwtsSYjs qn8SZaV1Akc 6BAD37Dk_lw
   ```

   Compare each length with the table. Every video must be found and on this channel. If one is missing or a length
   is off by more than one second, stop and show the owner the list of ids with their lengths, and which entry each
   length belongs to.

4. **Put the texts on.** Only after step 3 matched:

   ```bash
   M=new-documents/after-anatta/youtube-after-anatta.md
   n=1; for id in wxhsA6xKIQM QA9yrHNx5To lLkWbd2MoRw LmlHbrwg1xk ERBH0_9vwVU F0P_kfwAloE BXINN2sg_Z0 HX7xwtsSYjs qn8SZaV1Akc 6BAD37Dk_lw; do
     $PY tools/publish/publish_youtube.py update $id --meta $M --entry $n || break; n=$((n+1)); done
   ```

   Each line printed shows the new title. If one fails, stop and report the error message (it contains no secrets).

5. **Check the playlist.**

   ```bash
   $PY tools/publish/publish_youtube.py playlists
   $PY tools/publish/publish_youtube.py playlist "The Logic After Anatta"
   ```

   - If there is no playlist with that name, tell the owner and ask whether to make one (`--create-playlist`) or which
     existing playlist to use. Do not make one without asking.
   - If some of the ten are missing from it, add only the missing ones, in table order:
     `$PY tools/publish/publish_youtube.py update <id> --meta $M --entry <n> --playlist "The Logic After Anatta"`.
     Never add a video that is already there (that would list it twice).
   - If the order in the playlist differs from the table, tell the owner. He can drag them into order in YouTube Studio.

6. **Report to the owner**, briefly:
   - the ten new titles, each with its link;
   - the playlist link (printed by step 5) and whether all ten are in it, in order;
   - the next step: send the playlist link to the website session, so it can add it to the site and point the
     "Full quality" links to YouTube.

7. **Record it.** Add a short dated line at the end of this file under "Done", saying what was changed, then commit and
   push on a new branch and open a pull request for the owner (do not merge it yourself).

## Done

- 2026-10-28: done, with the owner. The owner's list was out of order and had Step 7 twice and Step 4 missing.
  The owner uploaded Step 4 (`sMa1ajWETec`, 8:28) and asked to delete the duplicates: `qn8SZaV1Akc` (same file as
  `HX7xwtsSYjs`) and `-n3GbTOG8-s` (9:34, an untitled copy of The Limits of the Tools) were deleted. Texts put on, by
  length: 1 `ERBH0_9vwVU`, 2 `F0P_kfwAloE`, 3 `BXINN2sg_Z0`, 4 `LmlHbrwg1xk`, 5 `sMa1ajWETec`, 6 `QA9yrHNx5To`,
  7 `wxhsA6xKIQM`, 8 `HX7xwtsSYjs`, 9 `6BAD37Dk_lw`, 10 `lLkWbd2MoRw` (all still Unlisted). The playlist is called
  **Logic After Anatta** (`PLPlnPvDUj6mE`, Unlisted): the ten now in order 1 to 10, then Beyond Cause and Effect and
  The Limits of the Tools, as the owner chose.
