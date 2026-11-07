# Thusness Voice: make the recordings on your own computer

Free. It records the five books and the bonus articles as MP3 files, in Jenny's voice (or another Microsoft voice
you choose), from the latest text on the website. Nothing runs on the server and nothing is charged.
(Owner, 2026-11-07: "Make it as a separate program that I can generate separately locally.")

## Once: set up

1. Install Python from https://www.python.org/downloads/ (on Windows, tick "Add python.exe to PATH").
2. Open a terminal (Windows: Start, type `cmd`; Mac: Terminal) and type:

       pip install edge-tts

3. Download `thusness_voice.py` from this folder (on GitHub: open the file, then the download button) and put it in
   a folder of its own, for example `Documents\Thusness Voice`. On Windows you can put `run-windows.bat` beside it.

## Each time

In the terminal, go to that folder (`cd Documents\Thusness Voice`) and type one of these:

| To do this | Type |
|---|---|
| Record everything (about 41 hours of audio; takes about an hour) | `python thusness_voice.py` |
| See what there is, with minutes | `python thusness_voice.py --list` |
| Record a few files only | `python thusness_voice.py --only pathway sw-1` |
| Record one set | `python thusness_voice.py --sets bonus-articles` |
| Another voice | `python thusness_voice.py --voice en-US-AriaNeural` |
| List the voices | `python thusness_voice.py --voices` |
| Slower or faster | `python thusness_voice.py --rate -10%` |

On Windows you can instead double-click `run-windows.bat`: it installs edge-tts if needed and records everything.

The files go into the folder `voices for ebooks and articles` beside the program, with `AUDIO_CHANGELOG.md`
(each file marked NEW, UPDATED or Unchanged) and `voice_manifest.json`. Run it again after the books change: only
the changed chapters are recorded again. If a file fails (the free service sometimes drops out), run it again.

To have the files in Google Drive by themselves, use Google Drive for desktop and point the program there, e.g.
`python thusness_voice.py --out "G:\My Drive\voices for ebooks and articles"`.

## Where the text comes from

The public GitHub repository JohnTLM/videos, `audiobook/text/`: the website's text with links, figures, reference
lists and Sanskrit verse lines left out, made by `audiobook/refresh_source.py` and `prepare_text.py`. When the site
changes, a Claude session refreshes that text (ask: "refresh the audiobook text"); the program then picks it up.
The two glossaries are left out (owner's choice).
