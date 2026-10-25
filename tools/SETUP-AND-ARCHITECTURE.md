# Book Video System — How It Works and How to Set It Up

This system turns a chapter of a book into a narrated explainer video: a calm voice reads a condensed script,
colourful teacher-style drawings appear exactly as each idea is spoken, and subtitles run along the bottom.
It is used for two series:

| Series | Videos folder | Videos |
|---|---|---|
| *The Logical Necessity of a Substrateless World* | `Book-1-complete\Substrateless-World\Videos` | Chapters 1–15 + bonus 90 |
| *The Transition from Anatta to Emptiness* | `Book-1-complete\Anatta-to-Emptiness\Videos` | Chapters 1–23 |

Everything runs on your own computer and is free. The only online service is Microsoft's free voice service
(edge-tts), which needs an internet connection while the voice is being recorded.

---

## Part 1 — The architecture

### 1.1 The pieces and where they live

```
Google Drive  (G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\)        ← backed up by Drive
│
├── Substrateless-World\
│   ├── substrateless-world-v67-A4.docx          the manuscript
│   └── Videos\
│       ├── build.py                             THE BUILDER (shared by both series)
│       ├── VIDEO-SPEC.md                        rules for scripts, voice, drawings, stance
│       ├── SETUP-AND-ARCHITECTURE.md            this file
│       ├── pronunciation.json                   shared word → spoken-form map (Sanskrit, Pali, Tibetan…)
│       ├── manifest.csv                         one row per finished video
│       ├── assets\fonts\                        title and subtitle fonts
│       ├── _source\                             chapter texts extracted from the manuscript
│       ├── _engine\                             BACKUP of the drawing engine and the /video-progress add-on
│       └── ch01-<slug>\ … ch15-<slug>\, ch90-death-and-continuity\     one folder per video
│
└── Anatta-to-Emptiness\
    ├── anatta-to-emptiness-v24-A4.docx
    └── Videos\
        ├── build.py                             small wrapper → runs the shared builder for this series
        ├── series.json                          this series' settings (see 1.4)
        ├── VIDEO-SPEC.md                        this book's rules (builds on the first spec)
        ├── pronunciation.json                   this series' extra terms
        ├── _source\
        └── ep01-<slug>\ … ep23-<slug>\

This computer only  (C:\dev\video-tools\)                                          ← NOT on Drive, NOT in git
├── .venv\                                       Python with edge-tts, Pillow, python-docx
└── explainer\                                   the drawing engine (a Remotion project)
    ├── src\lib.tsx                              shared parts: backgrounds, glow, phone, ice cube, orbs, title card, subtitles…
    ├── src\Chapter.tsx                          one video = title card + drawings + narration + subtitles
    ├── src\Root.tsx                             tells Remotion the video's size, speed and length
    ├── src\chapters\Ch01.tsx … AE23.tsx         the drawings for each video (one file per video)
    ├── src\entries\                             written by build.py, one tiny start file per video
    ├── public\                                  fonts + audio copied in by build.py for rendering
    └── node_modules\                            Remotion and React (installed with npm)

Installed programs:  FFmpeg (video/audio tool) · Node.js (runs Remotion) · Python 3.13
Claude Code:         helpers that write scripts and drawings · the /video-progress add-on
```

`C:\dev\video-tools` is the one part not protected by Drive. `build.py` therefore copies the engine
(`explainer\src`, `package.json`, `package-lock.json`, fonts) and the `/video-progress` add-on into
`Substrateless-World\Videos\_engine\` after every build. That copy is what you restore from on a new computer.

### 1.2 What happens when you build one video

`python build.py --chapter 3` does this, in order:

1. **Read the script** `ch03-script.md`: the settings at the top (title, `intro`, `voice`) and the narration paragraphs.
2. **Fix pronunciation.** Terms like *Nāgārjuna* are swapped for spoken forms ("Nah-gar-joo-nah") using the
   pronunciation maps (shared → series → chapter). Result: `ch03-narration.txt`.
3. **Record the voice** with edge-tts, one paragraph at a time, collecting the exact time of every word.
   Paragraphs are joined with short pauses and the loudness is evened out. Result: `ch03-narration.mp3`.
   *If the script and voice have not changed, the old recording is reused (much faster).*
4. **Make the subtitles** from the word times (two lines, at most 42 characters each, 1.2–6 seconds per line),
   with the special terms changed back to their proper spellings. Result: `ch03.srt`.
5. **Record the spoken title** "Chapter 3. Title." (unless the script says `intro: no`). Result: `ch03-intro.mp3`.
6. **Hand everything to the drawing engine.** The word times, subtitles and audio go into `_work\props.json`;
   a start file `src\entries\ch03.ts` points Remotion at that video's drawings `src\chapters\Ch03.tsx`.
7. **Render** with Remotion: it opens the drawings in an invisible Chrome browser and records every frame
   (1920×1080, 30 frames a second), adds the narration, and saves an MP4. About 5–15 minutes.
8. **Check** — save still frames (`check-0m02.png` etc.), check word count, length and subtitle timing, and add
   a row to `manifest.csv` (`status: built`, or `check: …` with the problem).
9. **Back up** the engine to `_engine\`.

### 1.3 How the drawings stay in time with the voice

Each drawing file (`Ch03.tsx`) starts with a list called `PHRASES`: short phrases copied from the script, in
order, e.g. `"Pick up your phone"`, `"cool against the palm"`. When the video is built, each phrase is found
in the recorded word times, so the drawing code can say "show the snowflake when the narrator reaches
*cool against the palm*". This is why changing the wording of a script can mean a small change to its drawing
file (see Part 4).

### 1.4 Settings

**In each script** (top of `chNN-script.md` / `epNN-script.md`):

```
intro: yes      yes = title card + spoken "Chapter N. Title."    no = start straight with the narration
voice: male     male = Andrew (en-US-AndrewNeural)   female = Ava (en-US-AvaMultilingualNeural)
                or any exact edge-tts voice name, e.g. en-GB-RyanNeural
```

**Per series** (`series.json` in that series' Videos folder; the first series uses the defaults):

| Setting | Meaning | Substrateless World | Anatta to Emptiness |
|---|---|---|---|
| `folder_prefix` | start of folder and file names | `ch` (default) | `ep` |
| `drawing_prefix` | start of drawing file names | `Ch` (default) | `AE` |
| `intro_word` | word before the number | `Chapter` (default) | `Chapter` |
| `min_words` | shortest script allowed | 450 (default) | 250 |

**In `build.py`** (top of the file): the voices and their speed/pitch, pauses, title-card length, and the path
of the drawing engine (`REMOTION = C:\dev\video-tools\explainer`).

### 1.5 Files in each video folder

| File | What it is |
|---|---|
| `chNN-script.md` | the narration you can edit (+ settings at the top) |
| `pronunciation.json` | optional: spoken forms of new terms for this video only |
| `chNN-narration.txt` | the text actually sent to the voice (after pronunciation swaps) |
| `chNN-narration.mp3`, `chNN-intro.mp3` | the recorded voice and spoken title |
| `chNN.srt` | subtitles (also burned into the video) |
| `chNN-<slug>.mp4` | **the finished video** (full HD) |
| `chNN-preview-720p.mp4` | smaller copy for phones (under 30 MB) |
| `chNN-scenes.tsx` | copy of this video's drawing file, kept with the book |
| `check-*.png` | still frames for checking |
| `_work\` | working files (word times, props, paragraph recordings); safe to delete, rebuilds recreate them |

---

## Part 2 — Setting up a new computer (step by step)

You need: Windows 10/11, an internet connection, about 3 GB of free disk space, and the Claude desktop app.

### Step 1 — Google Drive

1. Install **Google Drive for desktop** and sign in with the same account.
2. Check that the books appear at `G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\`.
   *If Drive uses another letter than `G:`, note it — you will change three paths in Step 7.*
3. Right-click the `Book-1-complete` folder → **Offline access → Available offline**, so the videos and
   scripts are on the computer, not fetched one by one.

### Step 2 — FFmpeg (video and audio tool)

Open **PowerShell** and run:

```powershell
winget install --id Gyan.FFmpeg -e
```

The builder finds FFmpeg by itself, even if it is not on the PATH.

### Step 3 — Python 3.13

```powershell
winget install --id Python.Python.3.13 -e
```

Close and reopen PowerShell afterwards.

### Step 4 — Node.js (runs the drawing engine)

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

Close and reopen PowerShell. Check with `node --version` (any version 18 or newer works).

### Step 5 — The Python tools folder

```powershell
mkdir C:\dev\video-tools
python -m venv C:\dev\video-tools\.venv
C:\dev\video-tools\.venv\Scripts\python -m pip install -r "G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\Videos\_engine\requirements-video.txt"
```

### Step 6 — Restore the drawing engine

```powershell
Copy-Item -Recurse "G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\Videos\_engine\explainer" C:\dev\video-tools\explainer
Set-Location C:\dev\video-tools\explainer
npm ci
```

`npm ci` installs exactly the versions recorded in `package-lock.json` (Remotion 4.0.534, React 18).
The first render later downloads a small invisible Chrome browser for Remotion by itself.

### Step 7 — Only if Drive is not `G:` or the tools are not in `C:\dev\video-tools`

Change these paths:

| File | Line to change |
|---|---|
| `Substrateless-World\Videos\build.py` | `REMOTION = Path(r"C:\dev\video-tools\explainer")` |
| `Substrateless-World\Videos\_engine\video-progress-mod\hooks\register.tsx` | `const BOOKS = 'G:/My Drive/…'` and `const DRAWINGS = 'C:/dev/…'` |
| commands in this file and the specs | the `G:\` and `C:\dev\video-tools` parts |

(The Anatta series' `build.py` finds the shared builder by itself.)

### Step 8 — Test

Rebuild one finished chapter. Its voice is reused, so this only tests the drawing engine (about 5–10 minutes):

```powershell
Set-Location "G:\My Drive\Avatar-brain\My-Book\New Book\Book-1-complete\Substrateless-World\Videos"
$env:PYTHONIOENCODING="utf-8"
C:\dev\video-tools\.venv\Scripts\python build.py --chapter 1
```

It should end with `status: built`. Open `ch01-the-substantialist-misconception\ch01-the-substantialist-misconception.mp4` to watch it.

To test the voice too, build any chapter after deleting its `_work\timed.json` (it records afresh; needs internet).

### Step 9 — The `/video-progress` button (optional)

The add-on's files are in `Substrateless-World\Videos\_engine\video-progress-mod\`. In a Claude Code session in the
desktop app, ask: *"Load the video-progress mod from `_engine\video-progress-mod` as a mod for this session."*
Claude copies it into the session's mod folder; accept **Enable hot reloading** when asked. Then type
`/video-progress` for a list of every video in both series.
(From a terminal you can also run `claude --plugin-dir "<path to video-progress-mod>"`.)

### Step 10 — Claude Code project memory (optional)

Claude's notes about this project (your decisions: Remotion style, voices, spoken title, stance rules) live in
`C:\Users\<you>\.claude\projects\…\memory\` on the old computer. Copy that folder across if you want a new
session to remember them; otherwise point Claude at the two `VIDEO-SPEC.md` files, which hold the same rules.

---

## Part 3 — Everyday use

**Rebuild one video** (from that series' Videos folder):

```powershell
$env:PYTHONIOENCODING="utf-8"
C:\dev\video-tools\.venv\Scripts\python build.py --chapter 7
```

**Build every video that does not have a finished MP4 yet:** `... build.py --all --skip-existing`

**Make a phone preview** (inside the video's folder):

```powershell
& (Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Gyan.FFmpeg*\*\bin\ffmpeg.exe")[0].FullName -y -i ch07-<slug>.mp4 -vf scale=1280:720 -c:v libx264 -crf 26 -c:a aac -b:a 128k -movflags +faststart ch07-preview-720p.mp4
```

**Change the words:** edit the paragraphs in `chNN-script.md`, save, rebuild. The voice, subtitles and video follow.

**Change voice or opening:** edit `voice:` or `intro:` at the top of the script, save, rebuild.

**Change how a word is said:** add it to the chapter's `pronunciation.json` (or the shared one), rebuild.

---

## Part 4 — Adding new videos

### A new chapter in an existing series

1. Create the folder, e.g. `Videos\ch16-<short-title>\` (or `ep24-…` for the Anatta series).
2. Write `ch16-script.md` in the same format as the others (settings block, `# Chapter 16 — Title`, paragraphs).
3. Write the drawings `C:\dev\video-tools\explainer\src\chapters\Ch16.tsx` (or `AE24.tsx`): a `PHRASES` list
   copied from the script in order, and a `Body` of scenes. The easiest way is to ask Claude:
   *"Build chapter 16 following VIDEO-SPEC.md, using Ch01.tsx as the model."*
4. Build, look at the check frames, adjust, rebuild.

### A new book series

1. In the book's folder create `Videos\` and copy `build.py`, `series.json` and `VIDEO-SPEC.md` from
   `Anatta-to-Emptiness\Videos\`.
2. In `series.json` pick a new `drawing_prefix` (two letters, e.g. `"XY"`) and `folder_prefix`, so files never clash.
3. Rewrite the new `VIDEO-SPEC.md`: episode list and, most importantly, the book's own stance rules.
4. Extract the chapter texts into `_source\`, make a pilot, review it, then build the rest.
5. Add the series to the `SERIES` list in the `/video-progress` add-on if you want it listed there.

---

## Part 5 — When something goes wrong

| Message or symptom | What it means | Fix |
|---|---|---|
| `phrase not found in narration: "…"` | a phrase in the drawing file's `PHRASES` is no longer in the script | change that phrase in `ChNN.tsx` to words that are in the script |
| `alignment failed at token …` | the voice read something differently from how it is written (often digits or symbols) | write numbers as words, avoid symbols, rebuild |
| `status: check: cue 57 length 0.96s` | a subtitle line flashes by too fast | lengthen that short sentence slightly, rebuild |
| `status: check: words …` | script shorter or longer than the series allows | adjust the script, or `min_words` in `series.json` |
| `'npx' is not recognized` / `'C:\Program' is not recognized` | Node.js missing or run from Git Bash | install Node.js (Step 4); run builds from PowerShell |
| voice step hangs or fails | no internet, or Microsoft's voice service is busy | check the connection, try again |
| `WSServerHandshakeError: 403` from the voice step | Microsoft changed its voice service; the voice tool is out of date | `C:\dev\video-tools\.venv\Scripts\python -m pip install -U edge-tts`, then rebuild |
| render very slow | several videos rendering at once | normal; one at a time takes about 5–10 minutes |
| a title runs off the card | (fixed) long titles wrap to two lines | rebuild that chapter |

Editing tip: when changing files that contain Windows paths (with `\`), use a text editor (or Claude's Edit tool),
not a script — sequences like `\v` and `\n` inside paths have corrupted files before.

---

## Part 6 — Versions in use (October 2026)

| Tool | Version |
|---|---|
| Windows | 11 |
| Python | 3.13.3 |
| edge-tts | 7.3.1 |
| Pillow | 12.3.0 |
| python-docx | 1.2.0 |
| Node.js | 18.15.0 (newer LTS fine) |
| Remotion / @remotion/cli | 4.0.534 |
| React | 18.3.1 |
| FFmpeg | 9.0.2 (winget `Gyan.FFmpeg`) |
| Fonts | Cormorant Garamond (titles), Source Sans 3 (subtitles), from Google Fonts |
| Voices | Andrew `en-US-AndrewNeural` (male), Ava `en-US-AvaMultilingualNeural` (female) |
