# Video tools

Everything needed to make a narrated video (Andrew's voice, subtitles, Remotion drawings) lives here, so a session
only has to clone this repository. Added 2026-10-25 from the owner's Drive copy (`Substrateless-World/Videos/`),
which is now the backup; this folder is the master copy of the tools.

| Path | What it is |
|---|---|
| `build.py` | The builder: script → voice (free edge-tts) → subtitles → spoken title → drawings → MP4 → check frames |
| `pronunciation.json` | The shared pronunciation map (each series adds its own on top) |
| `assets/` | Background image and the title and subtitle fonts |
| `explainer/` | The drawing engine (Remotion): `package.json`, `package-lock.json`, `src/lib.tsx`, `src/Root.tsx`, `src/Chapter.tsx`, `public/fonts/`, and every video's drawings in `src/chapters/` (`ChNN` main book, `AENN` Anatta to Emptiness, `OBNN` Book 4) |
| `series/<name>/` | One folder per series: a small `build.py` that runs the builder for that series, `series.json` (drawing prefix, folder prefix, spoken word) and the series' `pronunciation.json` |
| `requirements-video.txt` | Python packages (edge-tts **7.3.1**: older versions no longer reach the voice service) |
| `SETUP-AND-ARCHITECTURE.md` | The full guide from Drive: how the parts fit together and how to set up the owner's Windows computer |

The main book (`ch` folders, `Ch` drawings) runs `build.py` here directly; the other series run their own
`series/<name>/build.py`. Bonus articles follow their series (`NEW-DOCUMENT-VIDEOS.md`).

## Set up (once per machine)

```bash
pip install -r tools/requirements-video.txt
cd tools/explainer && npm ci
```

You also need `ffmpeg`. On the owner's Windows computer see `SETUP-AND-ARCHITECTURE.md`. In a Claude cloud session
`ffmpeg` and a headless Chromium are already installed, and the network must allow `speech.platform.bing.com`.

## Make a video

1. Put the approved script in a new folder: for the Anatta series `tools/series/anatta-to-emptiness/ep94-<slug>/ep94-script.md`,
   for Book 4 `tools/series/observer-and-presence/obNN-<slug>/`, for the main book `tools/chNN-<slug>/`.
2. Put the drawings in `tools/explainer/src/chapters/<PREFIX>NN.tsx`.
3. Run the series' `build.py` with `--chapter NN`. On Windows that is all. In a cloud session add:

   ```bash
   TTS_PROXY="$HTTPS_PROXY" SSL_CERT_FILE=/root/.ccr/ca-bundle.crt \
   REMOTION_BROWSER=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell \
   python tools/series/observer-and-presence/build.py --chapter 20
   ```

4. Check the frames and the subtitles. Then follow the saving rule (`README.md` at the top of this repository):
   copy the text files (script, narration, `.srt`, `*-scenes.tsx`) into the series' folder here, commit the new
   drawings in `tools/explainer/src/chapters/`, and give the MP4s to the owner for Drive.

Build output (MP4, MP3, WAV, the `_work` folders and `node_modules`) is ignored by git (`tools/.gitignore`).

## Differences from the Drive copy

The Drive `build.py` is the same builder with these small changes, which keep it working on Windows unchanged:

- `REMOTION_DIR` if set; otherwise `tools/explainer` here; otherwise `C:\dev\video-tools\explainer`.
- `npx` on Linux (`npx.cmd` on Windows); `--browser-executable` from `REMOTION_BROWSER`; the voice service's proxy
  from `TTS_PROXY`.
- Each paragraph's speech and the spoken title are retried up to four times (the free service sometimes returns no
  audio or drops a word).
- The "copy the engine to Drive" step is skipped when the engine is this repository's copy.
- `ffmpeg` is looked for on the PATH first, so Linux works without Windows' `LOCALAPPDATA`.

The series `build.py` files look for the builder here first and fall back to the Drive layout
(`<root>/Substrateless-World/Videos/build.py`).
