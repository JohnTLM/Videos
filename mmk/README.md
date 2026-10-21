# Making the MMK videos on your own computer

The narrated videos for *Nāgārjuna's Middle Way* (the MMK), one per chapter, 27 in all.
They play on the chapter pages of the Thusness website.

Moved here from `thusness-website` (`scripts/mmk_video/`) on 2026-10-21, so all video-making lives in this
repository. The chapter pages themselves stay in the website: each slide takes its verses and diagrams from the
page (`thusness-website/mmk/mmk-<n>.html`), so the video always matches it.

| File | What it does |
|---|---|
| `make_video.py <n>` | Makes one chapter's video: slides, Andrew's voice, subtitles, full-size and phone-size MP4 |
| `narration/<n>.json` | What each slide shows and says |
| `render.js` | Draws each slide at 1920×1080 (Playwright, Chromium) |
| `make_local.ps1` | Windows: makes many chapters and saves them straight into Google Drive |
| `youtube_meta.py` | Writes the YouTube titles, descriptions (with timestamps) and tags |
| `HANDOFF.md` | The 2026-10-19 note for the laptop session that made the Drive copies |

When a new video is ready, its link is put on the website from the website repository
(`scripts/mmk_set_video.py` there).

On your computer, Google Drive is a drive letter (usually `G:`). Anything saved there goes to Drive by itself,
whatever its size. So videos made on your computer can be saved straight into your Drive folder.
(A cloud session cannot do this: it has no `G:` drive.)

Everything here is free. The voice is edge-tts (Andrew); no paid AI is used.

## One-time setup (about 15 minutes)

Get both repositories side by side:

```powershell
git clone https://github.com/JohnTLM/videos C:\dev\videos
git clone https://github.com/JohnTLM/thusness-website C:\dev\thusness-website
```

If the website is somewhere else, add `-Website "<its folder>"` to the commands below.
Then, in PowerShell:

```powershell
winget install --id Python.Python.3.13 -e
winget install --id Gyan.FFmpeg -e
winget install --id OpenJS.NodeJS.LTS -e
```

Close and reopen PowerShell, go to the `videos` folder, then:

```powershell
py -3.13 -m venv .venv
.venv\Scripts\python -m pip install -r mmk\requirements.txt
npm install -g playwright
npx playwright install chromium
```

## Make the videos

Find your Drive folder for the book first (the one called `Nagarjuna-Middle-Way`). Try one chapter:

```powershell
powershell -ExecutionPolicy Bypass -File mmk\make_local.ps1 -Drive "G:\My Drive\Nagarjuna-Middle-Way" -Chapters 3
```

Then all of them (leave out `-Chapters`). Each chapter's full-size and phone-size video and its subtitle file
(`.srt`, which YouTube can use as captions) are saved in a `videos` folder inside your Drive folder.

- The videos leave out the reading of the verses (your choice, 2026-10-19). Add `-WithVerses` to keep it.
- It takes about as long as the videos themselves (all 27: about 3 to 4 hours). Chapters run one at a time.
- If a chapter fails (the free voice service sometimes refuses), run it again with `-Chapters <number>`.
- Working files (slides and audio) stay in your Temp folder, not on Drive.

## For Claude Code on this computer

You can also just ask: "make the MMK videos without the verses and save them to my Drive folder".
The script is `mmk/make_local.ps1`; it runs `make_video.py --no-verses` per chapter.
When it finishes, it prints the command that writes the YouTube titles, descriptions (with chapter
timestamps) and tags to `youtube.json` in your Drive folder (`youtube_meta.py`, reading the logs in Temp\mmk-video).

Running `make_video.py` or `youtube_meta.py` by hand: they find the website next to this repository
(`..\thusness-website`), or in the folder named by the `THUSNESS_WEBSITE` environment variable.
