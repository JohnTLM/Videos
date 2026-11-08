# Video tools

Everything needed to make a narrated video (Andrew's voice, subtitles, Remotion drawings). This folder is the master
copy; the owner's Drive copy (`Substrateless-World/Videos/`) is the backup.

| Path | What it is |
|---|---|
| `build.py` | The builder: script → voice (free edge-tts) → subtitles → spoken title → drawings → MP4 → check frames |
| `pronunciation.json` | The shared pronunciation map (each series adds its own on top) |
| `assets/` | Background image and the title and subtitle fonts |
| `explainer/` | The drawing engine (Remotion): `src/lib.tsx` (shared parts), `src/Root.tsx`, `src/Chapter.tsx`, `public/fonts/`, and every video's drawings in `src/chapters/` (`ChNN` main book, `AENN` Anatta to Emptiness, `OBNN` Book 4, `AANN` After Anatta) |
| `series/<name>/` | Per series: a small `build.py` that runs the builder, `series.json` (drawing prefix, folder prefix, spoken title word, minimum words) and its `pronunciation.json` |
| `publish/` | YouTube and Drive tools for the owner's server (`publish/README.md`) |
| `requirements-video.txt` | Python packages (edge-tts **7.3.1**: older versions no longer reach the voice service) |
| `SETUP-AND-ARCHITECTURE.md` | How the parts fit together and how to set up the owner's Windows computer |

The main book (`ch` folders, `Ch` drawings) runs `build.py` here directly; the other series run their own
`series/<name>/build.py`. Bonus articles follow their series.

## Set up and build

Once per machine: `pip install -r tools/requirements-video.txt` and `npm ci` in `tools/explainer`; you also need
`ffmpeg` (Windows: `SETUP-AND-ARCHITECTURE.md`).

1. Put the approved script in a build folder: `tools/series/<name>/<prefix>NN-<slug>/` (e.g.
   `anatta-to-emptiness/ep94-<slug>/ep94-script.md`, `after-anatta/aa13-<slug>/`, `observer-and-presence/obNN-<slug>/`);
   main book `tools/chNN-<slug>/`.
2. Put the drawings in `tools/explainer/src/chapters/<PREFIX>NN.tsx`.
3. Run the series' `build.py --chapter NN`. On Windows that is all. In a **cloud session** (ffmpeg and a headless
   Chromium are installed; the network must allow `speech.platform.bing.com`; Remotion needs the headless shell, not
   full Chromium):

   ```bash
   TTS_PROXY="$HTTPS_PROXY" SSL_CERT_FILE=/root/.ccr/ca-bundle.crt \
   REMOTION_BROWSER=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell \
   python tools/series/observer-and-presence/build.py --chapter 20
   ```

   Rendering takes roughly 3–4 minutes per minute of video.
4. Check the frames and subtitles, then copy the text files (script, narration, `.srt`, `*-scenes.tsx`) to their
   folder here (`CLAUDE.md`) and commit the new drawings.

Build output (MP4, MP3, WAV, `_work` folders, `node_modules`) is ignored by git (`tools/.gitignore`).

## The owner's server

`instance-20261026-235807`, Debian 13, 40 GB. Videos are not built there (`CLAUDE.md`), but it has the same tools for
the EBooks builders and publishing: `ffmpeg` 7.1, `pandoc`, Node 20, Noto/DejaVu fonts; Python packages in
`~/.venvs/build` (this file's requirements plus `markdown-it-py`, `beautifulsoup4`, `lxml`, `pymupdf`, `playwright`);
`npm ci` done in `tools/explainer` with its headless shell (`npx remotion browser ensure`). Run with
`~/.venvs/build/bin/python`; Drive uploads with `~/.venvs/publish/bin/python tools/publish/publish_drive.py`.

## How `build.py` finds things

- Engine: `REMOTION_DIR` if set, else `tools/explainer`, else `C:\dev\video-tools\explainer`. Browser:
  `REMOTION_BROWSER`. Voice proxy: `TTS_PROXY`. `ffmpeg` from the PATH first (else Windows `LOCALAPPDATA`); `npx`
  (`npx.cmd` on Windows). It skips the Drive layout's "copy the engine to Drive" step when using this copy.
- Each paragraph's speech and the spoken title are retried up to four times (the free service sometimes returns no
  audio or drops a word).
- Series `build.py` files look for `tools/build.py` first, then the Drive layout
  (`<root>/Substrateless-World/Videos/build.py`).
