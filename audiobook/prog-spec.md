# Audiobooks: spec for Claude sessions

Read-aloud MP3s of the books and articles, one per chapter or page, in a free voice. Website, ebook and video work are
**out of scope**. This file says how things work now; the history and the earlier spec are in `CHANGELOG.md` (search it).

## 1. What exists

- **The full set** (2026-11-07): every chapter and page on the site, 142 MP3s, about 41 hours, Jenny's voice, in nine
  sets (`source/<set>/`): Book 1, Book 2, Book 3 (*Nāgārjuna's Middle Way*, English only), Book 4, Book 5 (The Logic),
  Explorations, Zoom-ins, the Canon View, the bonus articles (the Library page). In Drive: `My-Book › Ebooks for readers
  › voices for ebooks and articles` (`1T-8zbX_6H8DxfsXcBT3GyKAnyFgP8rP_`), private to the owner and the invited readers,
  with `voice_manifest.json` and `AUDIO_CHANGELOG.md`.
- **Not on the website** (owner, 2026-11-07): the narration card was taken off the site.
- **Three ways to record:**
  1. **The server pipeline** (section 5): re-records only what changed, after the site's text changes.
  2. **The owner's own computer:** `local/thusness_voice_pdf.py`, a window that reads a PDF (for example from
     *Ebooks for readers*) chapter by chapter; how to install and use it: `local/README.md`.
  3. **The owner's private page** https://atr-passerby.com/voice/ (`web/voice_web.py`, systemd `thusness-voice`):
     Google sign-in for the owner's account only; picks a PDF from Drive and saves each chapter's MP3 to Drive
     `Voice recordings › <PDF name>`.
- `archive/`: the owner's Gemini voice program, **paid**, kept but not used (`archive/README.md`). Never run it without
  the owner's yes and a cost estimate.

## 2. Rules from the owner (always apply)

The repository rules in `CLAUDE.md` apply (free voices only, ask before spending, no keys, plain language, SGT, push
and merge without asking, then tell the owner what went in). Also:

- **Ask before anything outward-facing or hard to undo:** changing Drive sharing, moving or trashing Drive files,
  putting audio on YouTube or the website. The MP3s stay private (owner and invited readers only).
- **Do not change the text.** The MP3s read the books as published. Spoken-form tidying is allowed (section 4), no
  rewording. If a passage reads badly aloud, note it for the owner.
- **Never put MP3s in git.** Commit only scripts, cleaned text and this spec.
- **Full recording runs and Drive uploads are the server's job**, through a task note in thusness-website `server/`.
  A cloud session prepares and tests, and sends the owner only short samples.

## 3. The voice

- **Jenny, `en-US-JennyNeural`, at its own speed (`+0%`)** (owner, 2026-11-07), the default in `make_audiobook.py`.
  About 140–150 words a minute with the pauses.
- The speed check passes a whole file at **120–185 words a minute** (owner, 2026-11-08). Of the 142 files only Zoom-in `01-pathway` (87, mostly short lines) and Book 4 `29-ob-c`
  (111) still fall below; they are complete, and a low rate there means more pauses, not lost words.
- Other free voices the owner heard (14 samples, 2026-10-30) are listed in `CHANGELOG.md`.

## 4. Preparing the text (`prepare_text.py`; kept in `audiobook/text/`)

The source files are Markdown from the website (section 5). For each, `prepare_text.py` writes a clean spoken text
file `text/<set>/<same name>.txt`, by these rules (change the script, not the text, when a rule changes):

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
- **Also left out:** the Explorations "Zoom in" box and "Last updated" line, the Canon View's source lists and Part III,
  and the MMK's Sanskrit verse lines (the English translation is read).
- **Files not recorded:** Book 1 `20-sw-references`, Book 4 `27-ob-a` (verse index) and `30-ob-d` (references), and
  the glossaries Book 1 `19-sw-glossary` and Book 4 `28-ob-b` (owner, 2026-11-07; never pass `--glossaries`).

## 5. Re-recording after the site changes (server)

1. `refresh_source.py <EBooks> <thusness-website>` rebuilds `source/` from EBooks `Website/` (the live site's text) in
   the site's order, with `source/index.json` (each file's page and address).
2. `prepare_text.py` makes `text/` (section 4).
3. `make_audiobook.py` records `out/<set>/*.mp3`: each text split at paragraph ends into parts of at most about
   2,500 characters, recorded up to 8 at a time and cached; joined with ffmpeg (mono, 64 kbps; 0.8 s between
   paragraphs, 1.5 s after headings), tagged (title, album, artist "John Tan (Thusness)", track), and each file's
   words per minute checked. In a cloud session set `SSL_CERT_FILE=/root/.ccr/ca-bundle.crt` and pass the proxy;
   the server needs neither.
4. `manifest.py` marks each MP3 NEW, UPDATED or Unchanged (`out/voice_manifest.json`, `out/AUDIO_CHANGELOG.md`);
   `--upload` puts the new and changed ones in the Drive folder above, checked by MD5.
5. Log the run in `CHANGELOG.md`.
