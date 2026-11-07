# Thusness Voice: read your ebooks and articles aloud, on your own computer

Free. Choose a PDF (for example from your **Ebooks for readers** folder), tick the chapters, pick a voice, press
**Start**. A progress bar and the time left show it is working. You get one MP3 per chapter.
Microsoft's natural voices (Jenny, Aria, Ava, Andrew, …) through edge-tts: no account, no key, no charge.
(Owner, 2026-11-07: "a separate program where I can generate the voices read of my ebooks or articles. Show a
progress bar … It must allow me to load a pdf from my readers for ebooks folder.")

## Once: set up (about 5 minutes)

1. Install Python from https://www.python.org/downloads/
   - Windows: on the first screen tick **"Add python.exe to PATH"**, then Install.
   - Mac: run the installer as it is.
2. Download these two files from this GitHub folder (open each file, then the download button ⤓) into a new folder,
   for example `Documents\Thusness Voice`:
   - `thusness_voice_pdf.py` (the program)
   - `run-windows.bat` (Windows only: double-click to start)
3. Windows: double-click `run-windows.bat`. The first time it installs what it needs (a minute), then the window opens.
   Mac: open Terminal and type `pip3 install edge-tts pypdf`, then `python3 ~/Documents/Thusness\ Voice/thusness_voice_pdf.py`.

## Each time

1. **1. Choose a PDF…** Your readers' folder in Google Drive for desktop is usually
   `G:\My Drive\My-Book\Ebooks for readers` (Windows) or Google Drive › My Drive › My-Book › Ebooks for readers (Mac).
   A PDF you downloaded works too.
2. **Chapters.** The list comes from the PDF's bookmarks (the five books have them; an article is one piece).
   Contents, Glossary, References and the title page start unticked. Click a line to tick or untick it.
3. **Voice and Speed.** Jenny is first. Speed -10% is a little slower.
4. **Start.** The bar fills as each part is recorded; the line under it says which chapter and the time left.
   **Stop** stops after the part in progress. When it says *Finished*, press **Open the folder**.

The MP3s go into a folder named `<PDF name> - voice` beside the PDF (or press **Change folder…**), named
`05 - Chapter 1 The Substantialist Misconception.mp3` and so on. If a chapter shows "Not recorded" (the free service
sometimes drops out), press Start again with just that chapter ticked.

Speed: a 10-minute chapter takes about 20–30 seconds; a whole book of 5–7 hours about 10–15 minutes.

## Without the window

    python thusness_voice_pdf.py --cli "5 The Logic After Anatta.pdf" --list
    python thusness_voice_pdf.py --cli "5 The Logic After Anatta.pdf" --chapters 3-6 --voice en-US-AriaNeural --rate -10%

## Also here

`thusness_voice.py` records from the website's text instead of a PDF (all books and articles, cleaned for listening:
no figures, reference lists or Sanskrit verse lines). See its first lines for how to run it.
