# Audiobooks: changelog

The dated log, moved out of `prog-spec.md` section 7 on 2026-11-08. Add new entries at the end. Search it; do not read
it in full.

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
- 2026-11-07 (owner: "Yes, free script with Jenny, run on the server"): voice chosen, Jenny (`en-US-JennyNeural`).
  Text refreshed from EBooks `Website/` (5fc1f41, live site of 7 Nov) with the new `refresh_source.py`, widened to
  every book, page and article (section 1: 142 files, about 36 hours). New `manifest.py` (manifest, changelog in the
  owner's NEW / UPDATED / Unchanged format, Drive upload). Test recording in the cloud session: Book 4 Chapter 1,
  4.7 min, 168 words a minute, all checks passed. The full recording and the Drive upload are the server's:
  thusness-website `server/TASK-audiobook-jenny.md`. Glossaries stay out unless the owner asks. Nothing on the
  website yet: a player on each page is a later step, after the owner has listened.
- 2026-11-07 (owner: "Leave the glossaries out"): the two glossaries (`19-sw-glossary`, `28-ob-b`) stay out of the recordings for good; `make_audiobook.py` leaves them out by default, so never pass `--glossaries`.
- 2026-11-07 (server, thusness-website `server/TASK-audiobook-jenny.md`): **full recording done and in Drive.**
  - Text refreshed from EBooks `Website/` and the site with `refresh_source.py` + `prepare_text.py`: no change from
    the committed `source/` and `text/`.
  - Recorded on the server (edge-tts 7.3.1, Jenny, default rate), about 75 minutes: **142 files, 41.3 hours**
    (1.2 GB of MP3s): Book 1 18, Book 2 24, Book 3 27, Book 4 27, Book 5 17, Explorations 15, Zoom-ins 6, Canon View 1,
    articles 7. No part failed to record; all 142 files decode cleanly. More hours than the 36 estimated: Jenny
    speaks more slowly than Andrew (about 140–150 words a minute with the pauses).
  - **The speed check flags 34 files below 140 words a minute** (lowest: Zoom-in `01-pathway` 87, Book 4 `29-ob-c` 111,
    Book 2 `24-ae-appendix` 123; the rest 128–140): 12 of Book 2, 7 of Book 3, 2 of Book 4, 8 Explorations, 3 Zoom-ins,
    the Canon View and the article `04-beyond`. They are complete (every part passed the word check). A low rate
    means more pauses for the number of words (short lines, lists, tables), not lost words. They were uploaded as
    they are. `WPM_MIN` (140) was set for Andrew; for Jenny about 120 would fit, with `01-pathway` as the one
    exception. Left for the owner to judge on listening; a re-run gives the same result (the parts are cached).
  - Drive: private folder `voices for ebooks and articles` at the top of My Drive, id
    `1T-8zbX_6H8DxfsXcBT3GyKAnyFgP8rP_` (owner only). 142 MP3s (all NEW), `voice_manifest.json` and
    `AUDIO_CHANGELOG.md`; every upload checked by MD5, and the folder checked again afterwards.
- 2026-11-07 (owner: "Disable download for non-approved users in the ebooks for readers", "Yes, use Drive"): the Drive folder `voices for ebooks and articles` (`1T-8zbX_6H8DxfsXcBT3GyKAnyFgP8rP_`) moves into `My-Book › Ebooks for readers`, so only the approved readers can open it; the site's Download button opens each file there (thusness-website `server/TASK-audio-limits.md`). `manifest.py` now finds the folder by name wherever it is. Playing on the site stays open to everyone, limited to 30 recordings a day per visitor.
- 2026-11-07 (server, thusness-website `server/TASK-audio-limits.md`): done. The folder `voices for ebooks and articles` (`1T-8zbX_6H8DxfsXcBT3GyKAnyFgP8rP_`, id unchanged) is now in `My-Book › Ebooks for readers`; it and all 144 files in it have the owner and the same 7 readers, no link sharing, and an MP3 asks for sign-in from outside. On atr-passerby.com `/audio/index.json` carries each Drive id (`"d"`), the card's *Download (invited readers)* opens `drive.google.com/uc?export=download&id=…`, and the 31st new recording of a day from one address is refused (403).
- 2026-11-07 (owner: "For my original voice program, since it costs so much, hide it in case I need it in the future"): the owner's Gemini program kept unchanged in `audiobook/archive/gemini_voice_generator.py` (no key in it), with `archive/README.md`: what it does, why it was set aside (summaries, not the books), the cost, how to bring it back (full text from `text/`, chosen pages only, MP3, cost first) and what to say to Claude. Nothing runs it.
- 2026-11-07 (owner: "eliminate the Redbox. Make it as a separate program that I can generate separately locally"): the voice narration card comes off the site (thusness-website `server/TASK-audio-off-site.md`), and recordings are made on the owner's own computer with `audiobook/local/thusness_voice.py` (one file, needs only `pip install edge-tts`; reads `audiobook/text/` from this public repository; records only what changed; writes the manifest and changelog; tested in the cloud session). `local/README.md` has the steps; `run-windows.bat` for a double-click. The server no longer records. The 142 recordings already in Drive (`Ebooks for readers › voices for ebooks and articles`) stay for the invited readers.
- 2026-11-07 (owner: "a separate program where I can generate the voices read of my ebooks or articles. Show a progress bar … It must allow me to load a pdf from my readers for ebooks folder"): `audiobook/local/thusness_voice_pdf.py`, a window (tkinter) and a text mode: choose a PDF, chapters from its bookmarks (Contents, Glossary, References, title page unticked), voice and speed, Start; a progress bar with the chapter and time left; Stop; one MP3 per chapter in `<PDF name> - voice`. Running titles and page numbers are dropped, line-end hyphens joined, ligatures fixed. Needs `pip install edge-tts pypdf`; `run-windows.bat` opens it. Tested in the cloud session: the five own-voice books list their chapters (Book 1: 27, Book 5: 33), an article is one piece; two chapters of Book 1 recorded in the window (bar to 100%, Finished, Open the folder) and in text mode (11.9 min chapter, plays through). `README.md` rewritten for it.
- 2026-11-07 (owner: "Y not install it at my Google cloud server? Then when owner logs in, I can use the same website page to load the program", then "Google sign-in, my email only", "Pick from Drive, save to Drive"): `audiobook/web/voice_web.py`, a private page at https://atr-passerby.com/voice/ (systemd `thusness-voice`, 127.0.0.1:7803, nginx `/voice/`; settings in `/etc/thusness-voice.env`). Sign in with Google: only the account the server's own Drive sign-in belongs to gets in (ID token checked with Google's keys, then a signed 30-day cookie; posts need a custom header). Lists the PDFs in `Ebooks for readers` and its subfolders, or takes an upload; chapters from the bookmarks; voice and speed; Start, a progress bar with the chapter and time left, Stop; each chapter's MP3 is saved to Drive `Voice recordings › <PDF name>` (private, top of My Drive) as soon as it is done. One job at a time. Reuses `audiobook/local/thusness_voice_pdf.py`. Tested in the cloud session in test mode (no Google): sign-in refused before login (401), the PDF list, chapters, two chapters recorded and saved, Finished with the folder link, at 390 px. Install: thusness-website `server/TASK-voice-page.md`, after the owner makes a Google sign-in client id.
- 2026-11-08: `prog-spec.md` shortened to how things work now (the server pipeline, the owner's local program and private page; Jenny). **The spec as it stood on 2026-11-08**, word for word:

  # Audiobooks: spec for Claude sessions

  Read this before starting. It holds everything a session needs for this project. Website, ebook and video work are
  **out of scope**: they belong to other sessions. Update this file when a decision changes how things work; log each step done in `CHANGELOG.md`.

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

  **Widened on 2026-11-07** (owner's voice spec: all five books and all bonus articles, "Book 3" and "The Canon View"
  among them): every chapter and page the site has, 147 source files in nine sets, 142 recorded (about 36 hours):

  | Set | Files recorded | Words | About |
  |---|---|---|---|
  | `1-substrateless-world` | 18 (references left out; glossary only with `--glossaries`) | 40,900 | 4.1 h |
  | `2-anatta-to-emptiness` | 24 | 48,400 | 4.8 h |
  | `3-nagarjunas-middle-way` (new) | 27 (English translation read; the Sanskrit verse lines left out) | 59,000 | 5.9 h |
  | `4-observer-and-presence` | 27 (verse index and references left out; glossary only with `--glossaries`) | 18,400 | 1.8 h |
  | `5-the-logic-after-anatta` (The Logic: intro pages and Steps 1–8, as `pages.json` lists them) | 17 | 61,200 | 6.1 h |
  | `explorations` (was `questions`; `pages.json` `questions`) | 15 | 77,200 | 7.7 h |
  | `zoom-ins` (new; `pages.json` `essays`) | 6 | 18,800 | 1.9 h |
  | `the-canon-view` (new) | 1 (Part III and the source lists left out) | 10,600 | 1.0 h |
  | `bonus-articles` (the Library page) | 7 | 29,700 | 2.9 h |

  The owner's 19 articles are all in these sets: *The Lamp That Does Not Light Itself* is part of *Luminosity*
  (zoom-ins), *The Yang Spirit and the Rainbow Body* part of *Rainbow Body*, and *Three Descriptions, One Taste* was
  folded into *Dependent Arising and Designation* (both explorations).

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

  - **Chosen (owner, 2026-11-07: "Yes, free script with Jenny, run on the server"): Jenny, `en-US-JennyNeural`**,
    American woman, at its own speed (`+0%`): Book 4 Chapter 1 came out at 4.7 min, 168 words a minute. It is the
    default in `make_audiobook.py`. (The owner had first tried a paid Gemini voice script; it read only short
    summaries, so it was set aside.)
  - Earlier: the owner heard 14 sample voices on 2026-10-30, all free; Andrew was the default until 2026-11-07.
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

  **Since 2026-11-07: `refresh_source.py <EBooks> <thusness-website>`** rebuilds `source/` from EBooks `Website/` (the
  live site's text, refreshed by the server after every deploy) in the site's own order, and writes `source/index.json`
  (each file's page slug and address). Then `prepare_text.py`, then `make_audiobook.py`; `manifest.py` marks each MP3
  NEW, UPDATED or Unchanged (`out/voice_manifest.json`, `out/AUDIO_CHANGELOG.md`) and with `--upload` puts the new and
  changed ones in Drive `voices for ebooks and articles` (private, top of My Drive). A re-run records only what changed.
  `prepare_text.py` now also leaves out the Explorations "Zoom in" box, the "Last updated" line, the Canon View's source
  lists and Part III, and the MMK's Sanskrit verse lines (the English translation is read).

  The notes below describe the first snapshot (2026-10-30).

  - `audiobook/source/` is a snapshot, taken on 2026-10-30, of the website text kept in the knowledge base. That is GitHub `JohnTLM/EBooks`, folder `Website/`, commit `9d586c0` (live site version 129). The file names and numbers give the reading order:
    - Book 5 follows the site's *The Logic* list;
    - the bonus articles follow the Library page;
    - the Questions follow the Questions page.
  - **If the owner says the text has changed since**, refresh the snapshot from EBooks `Website/`. The session can attach `JohnTLM/EBooks` with read access. Then re-prepare and re-record only the changed files.
  - The website: https://claude.ai/artifact/Qpz9X7zL4i265i8pTjNfeJ. The live site's text is the source of truth. Do not edit it from this project.

  ## 7. Log

  The dated log is in `CHANGELOG.md` in this folder (since 2026-11-08). Add new entries there, not here.
- 2026-11-08 (owner: "Relax the check for Jenny"): `make_audiobook.py` `WPM_MIN` 140 → 120. Of the 34 files flagged on 2026-11-07, 32 now pass; `01-pathway` (87) and `29-ob-c` (111) still show as slow and are complete. No recording changed.
