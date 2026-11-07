# Archive: the Gemini voice program (not in use)

Kept for later (owner, 2026-11-07: "since it costs so much, hide it in case I need it in the future").
Nothing runs this folder. The recordings in use are made by `audiobook/make_audiobook.py` (Jenny, free).

## What is here

`gemini_voice_generator.py`: the owner's own program, as he sent it on 2026-11-07, unchanged.

- Voice: Google Gemini text-to-speech (`gemini-2.5-flash-preview-tts`), voice "Kore". Very natural, but **paid**:
  it needs the owner's Google API key (`GEMINI_API_KEY` on his computer; never in this repository) and a billing account.
- Output: WAV (about 173 MB per hour of speech, 6 times larger than the MP3s in use), into a Drive folder on the
  owner's computer, with `voice_manifest.json` and `AUDIO_CHANGELOG.md`.
- **Why it was set aside:** it does not read the books. Its catalogue holds short summaries typed into the script
  (about 2,300 words, 15 minutes for all 55 files), several not in the owner's words, with chapter titles that are not
  in the books (Book 2's five chapters, Book 4's "The Scent of the Witness", "Collapse of Distance"). Do not publish
  its recordings as narration of the chapters.

## Cost (checked 2026-11-07; check Google's current price before use)

Roughly USD 0.60–0.75 per hour of speech: about USD 25–30 for all 41 hours, about USD 4–5 for a few key pages
(the Pathway, Seeing Comes First and the eight Steps). The model is a "preview", so Google may change it or its price.
**Always ask the owner, with an estimate, before running it** (CLAUDE.md: ask before spending).

## How to bring it back

Do not run the archived script as it is. Change it first so that it:

1. reads the full text from `audiobook/text/<set>/*.txt` (the same cleaned text Jenny reads; `refresh_source.py` and
   `prepare_text.py` keep it current), not its own summaries;
2. records only the pages the owner names (for example `--only 01-pathway 01-intro`), one part per paragraph as
   `make_audiobook.py` does, and checks each part (the service can stop early);
3. saves MP3 (ffmpeg, 64 kbps mono), not WAV, so the site's card and limits work as they do now;
4. writes into `audiobook/out/<set>/` with the same file names, so `manifest.py` marks them UPDATED and the server's
   `vm_audio.py` puts them on the site in place of Jenny's;
5. prints the cost estimate (characters and hours) and stops unless given `--yes`.

Run it on the owner's computer (the key stays there) or ask him to save the key as a network secret for the server.

## What to say to Claude

> "Bring back my Gemini voice program from Videos `audiobook/archive/`. Use voice Kore for these pages only:
> [list the pages]. Give me the cost first."

or, for everything:

> "Re-record all the audiobooks with my Gemini voice program (Videos `audiobook/archive/`), voice Kore. Cost first."
