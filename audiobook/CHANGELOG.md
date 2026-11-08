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
