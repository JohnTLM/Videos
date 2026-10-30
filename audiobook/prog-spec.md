# Audiobooks: spec for Claude sessions

Read this before starting. It holds everything a session needs for this project. Website, ebook and video work are
**out of scope**: they belong to other sessions. Update this file whenever a decision is made or a step is done.

## 1. The task

Owner's request (John Tan, Thusness), 2026-10-30: produce read-aloud MP3s, **one file per chapter or page**, for:

| Set | Source folder | Files | Words (approx.) | Listening time (approx.) |
|---|---|---|---|---|
| Book 1 · *The Logical Necessity of a Substrateless World* | `source/1-substrateless-world/` | 20 | 42,700 | 4 h 27 min |
| Book 2 · *The Transition from Anatta to Emptiness* | `source/2-anatta-to-emptiness/` | 24 | 48,100 | 5 h 01 min |
| Book 4 · *The Observer and the Taste of Presence* | `source/4-observer-and-presence/` | 30 | 21,000 | 2 h 11 min |
| Book 5 · *The Logic After Anatta*: the introduction, the five Logic pages, *The Illusion of the Given*, *The Logic of Dependency* and Steps 1–8 | `source/5-the-logic-after-anatta/` | 15 | 58,300 | 6 h 04 min |
| Bonus articles (the nine on the site's Library page) | `source/bonus-articles/` | 9 | 34,900 | 3 h 38 min |
| The Questions (rebirth, the six powers, mind, time and the rest) | `source/questions/` | 13 | 45,000 | 4 h 41 min |
| **Total** | | **111** | **250,000** | **≈ 26 h** |

**Not included:** *Nāgārjuna's Middle Way* (the 27 MMK chapters) and the Canon View page.

The numbers are from the raw text. After cleaning (section 4), the listening time will be about 5–10% less.

## 2. Rules from the owner (always apply)

- **Plain language** with the owner: short sentences, no jargon, one clear next step.
- **Free voices only.** Use edge-tts (Microsoft's free neural voices). Never use a paid voice or a paid AI service without asking first, with a cost estimate.
- **Never print, upload or commit API keys or credentials.**
- **Push and merge without asking** (owner, 2026-10-29). Open the pull request, merge it into `main`, and tell the owner afterwards what went in.
- **Ask before anything outward-facing or hard to undo:**
  - changing Drive sharing;
  - moving or trashing Drive files;
  - putting audio on YouTube or the website.

  The MP3s are **private** (owner only) unless the owner says otherwise.
- **Do not change the text.** The MP3s read the books as published. Spoken-form tidying is allowed (section 4), but no rewording. If a passage reads badly aloud, note it for the owner instead.
- **Never put MP3s in git.** About 750 MB of audio would bloat the repository. Commit only scripts, cleaned text and this spec.
- **Big builds and uploads run on the owner's server** (owner, 2026-10-28). The server is a Google Cloud machine with a Claude Code session that the owner relays tasks to. It uploads with `tools/publish/publish_drive.py`, which takes any size. A cloud session prepares, tests and writes the task file. Send the owner only short samples to listen to.

## 3. The voice

- **Not decided yet.** The owner heard 14 sample voices on 2026-10-30, all free.
- **Default until the owner chooses:** Andrew, `en-US-AndrewMultilingualNeural`.
- **Settings:** the narrated videos use rate `-8%` and pitch `-2Hz` with `en-US-AndrewNeural` (`tools/build.py`). The read-alouds the owner liked on 2026-10-29 used `en-US-AndrewMultilingualNeural` at the default rate, about 160 words a minute.
- **Ask the owner which voice before the full run.**

| # | Voice name | Accent, character |
|---|---|---|
| 1 | `en-US-AndrewMultilingualNeural` | American man, warm, calm (default) |
| 2 | `en-US-BrianMultilingualNeural` | American man, relaxed, friendly |
| 3 | `en-US-ChristopherNeural` | American man, deeper, narrator |
| 4 | `en-US-GuyNeural` | American man, newsreader |
| 5 | `en-US-EricNeural` | American man, plain, even |
| 6 | `en-US-SteffanNeural` | American man, soft, measured |
| 7 | `en-GB-RyanNeural` | British man, calm |
| 8 | `en-GB-ThomasNeural` | British man, gentle |
| 9 | `en-AU-WilliamMultilingualNeural` | Australian man, warm |
| 10 | `en-IE-ConnorNeural` | Irish man, soft |
| 11 | `en-US-AvaMultilingualNeural` | American woman, warm |
| 12 | `en-US-EmmaMultilingualNeural` | American woman, bright |
| 13 | `en-GB-SoniaNeural` | British woman, composed |
| 14 | `en-AU-NatashaNeural` | Australian woman, friendly |

## 4. Preparing the text (once; kept in `audiobook/text/`)

The source files are Markdown from the website (section 6). For each file, write a clean spoken text file `text/<set>/<same name>.txt`:

- **Start** with the book or set name and the chapter title, for example "The Observer and the Taste of Presence. Chapter 3. Ignorance and Its Habit."
- **Keep** headings, as their own sentence with a short pause around them.
- **Drop** these:
  - web addresses and image or figure lines;
  - Markdown marks (`*`, `_`, `#`, `>`, `|`);
  - "Read more" and "Further reading" lists;
  - reference lists;
  - "Watch the video" lines.
- **Tables:**
  - simple ones become sentences, "Row: column, column";
  - large ones are left out and replaced with one line, "A table follows in the book; it is not read aloud."

  Note each table you drop.
- **Diagram captions:** read as "Figure: …" only if they make sense without the picture; otherwise leave them out.
- **Pronunciation:**
  - apply `tools/pronunciation.json` to every word it lists (the same list the videos use), with the same function as `tools/build.py` (`apply_pron`);
  - when you meet other Sanskrit, Pali or Tibetan words, add them to the list, carefully, and tell the owner which you added.
- **Skip these files entirely**, and tell the owner:
  - Book 1: `20-sw-references.md` (references);
  - Book 4: `27-ob-a.md` (verse index) and `30-ob-d.md` (references);
  - Book 1 `19-sw-glossary.md` and Book 4 `28-ob-b.md` (glossaries): ask the owner whether to include them.

## 5. Steps

1. **Read** this spec and `tools/build.py` (to see how the videos call edge-tts: proxy, voice, rate, pronunciation).
2. **Write** `audiobook/make_audiobook.py`, which turns `text/<set>/*.txt` into `out/<set>/*.mp3`:
   - split each text at paragraph ends into parts of at most about 2,500 characters, and record the parts in parallel (up to 8 at a time);
   - join each chapter's parts with `ffmpeg` into one MP3 (mono, 64 kbps), with 0.8 s of silence between paragraphs and 1.5 s after headings;
   - add MP3 tags: title (the chapter title), album (the book or set), artist "John Tan (Thusness)", track number;
   - **check every file**: listening time ÷ word count must be between 140 and 185 words a minute. On 2026-10-29 a single long run stopped silently halfway, so the parts are what prevent this. Re-record any part that fails.
   - In a cloud session, set `SSL_CERT_FILE=/root/.ccr/ca-bundle.crt` and pass `--proxy "$HTTPS_PROXY"` (or `proxy=` in Python). The server needs neither.
3. **Prepare all the text** (section 4). Commit `text/` and the script, then push and merge.
4. **Test**: record one full chapter, Book 4 Chapter 1 (`04-ob-1`), in the chosen voice. Send it to the owner and ask:
   - Is the voice right?
   - Is the speed right?
   - Glossaries in or out?
5. **Record everything:**
   - **On the server (preferred):** write `audiobook/TASK-record-and-upload.md` with these steps: pull `main`; install edge-tts into a Python environment; run the script for all sets; check every file (step 2); create a private Drive folder `My-Book › Audiobooks` with one subfolder per set; upload with `tools/publish/publish_drive.py`, then download each file back and compare byte for byte; record the Drive folder ids. Leave a "Done" section at the end. Tell the owner to give it to the server Claude.
   - **In the cloud (if the owner prefers):** run the script here. Send the owner each set's MP3s, at most about 400 MB per message, and say that Drive is the server's job.
6. **Record the result** in this spec under section 7: voice, settings, file counts, total listening time, the Drive folder ids, and anything skipped or left for the owner.

## 6. Where the text comes from

- `audiobook/source/` is a snapshot, taken on 2026-10-30, of the website text kept in the knowledge base. That is GitHub `JohnTLM/EBooks`, folder `Website/`, commit `9d586c0` (live site version 129). The file names and numbers give the reading order:
  - Book 5 follows the site's *The Logic* list;
  - the bonus articles follow the Library page;
  - the Questions follow the Questions page.
- **If the owner says the text has changed since**, refresh the snapshot from EBooks `Website/`. The session can attach `JohnTLM/EBooks` with read access. Then re-prepare and re-record only the changed files.
- The website: https://claude.ai/artifact/Qpz9X7zL4i265i8pTjNfeJ. The live site's text is the source of truth. Do not edit it from this project.

## 7. Log

- 2026-10-30: project set up (spec and text snapshot). Voice not yet chosen. Nothing recorded yet.
- 2026-10-30: steps 1–4 done.
  - `audiobook/prepare_text.py` writes `text/<set>/*.txt` from `source/` (108 files: the 111 less the three skipped;
    the two glossaries are prepared but `make_audiobook.py` leaves them out unless given `--glossaries`).
    `text/REPORT.txt` lists everything left out, file by file.
  - Left out of the spoken text: "Read more", "In the books", "Talks", "Sources and Further Reading" and
    "Notes on sources" sections; "Watch" video lines, "In the chain" and "Companion pages" navigation lines;
    the Diagram images (no captions) and the Figure 3 caption in Book 1 Chapter 4 (needs the picture); the
    figure 9b image (no caption); Chinese and Japanese characters (the romanized words and translations stay);
    in Book 2's appendix, the symbol column of the axiom table and the three "Notation:" formula lines.
    All tables are read as sentences (none was too large to read).
  - Spoken-form tidying: "vs." → "versus", "§" → "section", "Skt./Tib./Jpn." → "Sanskrit/Tibetan/Japanese",
    "Ch./ch." → "Chapter", "trans." → "translated by", "vol." → "volume", "ff." → "and following", ψ → "psi".
  - Added 36 words to `tools/pronunciation.json` (nirvāṇa, saṃsāra, Mūlamadhyamakakārikā, Dharmakīrti, Yogācāra,
    Madhyamakāvatāra, Mahāyāna, Tathāgata, Genjōkōan, Shōbōgenzō, prajñā and others).
  - `audiobook/make_audiobook.py`: one part per paragraph (long ones cut at sentence ends, ≤ 2,500 characters),
    8 at a time; every part checked against the service's word report (a part that stopped early is redone).
    Default rate: Andrew Multilingual at its own speed comes out at **about 177 words a minute** with the pauses,
    faster than the 160 noted in section 3, so near the 185 upper check. If the owner wants it slower, `--rate -8%`.
  - Test recording: Book 4 Chapter 1 (`04-ob-1`), Andrew, default rate: 4.4 min, 783 words, 177 words a minute,
    sent to the owner with the three questions (voice, speed, glossaries). Waiting for the answers.
  - Estimated full length at this speed: about 22 hours (236,000 words), plus 12 minutes if the glossaries go in.
