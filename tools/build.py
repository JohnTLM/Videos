"""Build narrated chapter videos per VIDEO-SPEC.md.

    python build.py --chapter 1
    python build.py --all [--skip-existing]

Each chapter folder must already contain chNN-script.md (written by hand / Claude).
"""
import argparse, asyncio, csv, glob, json, os, re, shutil, subprocess, sys, urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageChops

CODE = Path(__file__).resolve().parent                     # this builder, shared assets and pronunciation map
ROOT = Path(os.environ.get("VIDEO_ROOT") or CODE)           # the series being built (another book sets VIDEO_ROOT)
ASSETS = CODE / "assets"
FONTS = ASSETS / "fonts"
# per-series settings in ROOT/series.json, e.g. {"drawing_prefix": "AE", "intro_word": "Episode", "min_words": 250}
SERIES = json.loads((ROOT / "series.json").read_text(encoding="utf-8")) if (ROOT / "series.json").exists() else {}
PREFIX = SERIES.get("drawing_prefix", "Ch")                 # drawings: REMOTION/src/chapters/<PREFIX>NN.tsx
INTRO_WORD = SERIES.get("intro_word", "Chapter")            # spoken and shown: "<INTRO_WORD> N. Title."
MIN_WORDS = SERIES.get("min_words", 450)
FP = SERIES.get("folder_prefix", "ch")                    # folders and files: <FP>NN-slug/, <FP>NN-script.md
VOICE, RATE, PITCH = "en-US-AndrewNeural", "-8%", "-2Hz"   # used when a script names a voice directly
# `voice: male` / `voice: female` in a script's front matter: the most natural-sounding free voices
VOICES = {
    "male": ("en-US-AndrewNeural", "-8%", "-2Hz"),                 # warm, confident (the owner's choice)
    "female": ("en-US-AvaMultilingualNeural", "-6%", "+0Hz"),      # expressive, caring (the owner's choice)
}
NO_INTRO_LEAD = 0.8    # with `intro: no`, seconds of background before the narration starts
PARA_GAP = 0.7          # seconds of silence between paragraphs
TITLE_S, TAIL_S, FADE_S = 5.0, 2.0, 1.5
INTRO_START = 1.2      # the spoken "Chapter N. Title." starts this far into the title card
# Remotion project (src/chapters/ChNN.tsx per chapter): REMOTION_DIR if set, else the copy in this repository
# (tools/explainer in JohnTLM/Videos), else the owner's Windows folder.
REMOTION = Path(os.environ.get("REMOTION_DIR") or (CODE / "explainer" if (CODE / "explainer" / "package.json").exists()
                                                 else r"C:\dev\video-tools\explainer"))
W, H, FPS = 1920, 1080, 30
# libass scales these from a 288-line script to 1080p (x3.75): size 17 ~ 64 px, margin 22 ~ 82 px.
# Keeps two subtitle lines below y = -2.1 in the scene drawings.
SUB_STYLE = ("FontName={font},FontSize=17,PrimaryColour=&H00EDEDED,OutlineColour=&H80000000,"
             "BorderStyle=1,Outline=1.0,Shadow=0,MarginV=22,Alignment=2")
GF = "https://github.com/google/fonts/raw/main/ofl/"
FONT_SOURCES = {
    "title": [("CormorantGaramond-Var.ttf", GF + "cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf"),
              ("EBGaramond-Var.ttf", GF + "ebgaramond/EBGaramond%5Bwght%5D.ttf")],
    "sub": [("SourceSans3-Var.ttf", GF + "sourcesans3/SourceSans3%5Bwght%5D.ttf"),
            ("Inter-Var.ttf", GF + "inter/Inter%5Bopsz,wght%5D.ttf")],
}


# ---------------------------------------------------------------- tools
def find_ffmpeg(name="ffmpeg"):
    p = shutil.which(name)
    if p:
        return p
    hits = glob.glob(os.path.join(os.environ.get("LOCALAPPDATA", ""),
                                  "Microsoft", "WinGet", "Packages", "Gyan.FFmpeg*", "*", "bin", name + ".exe"))
    if not hits:
        sys.exit(f"{name} not found")
    return hits[0]


FFMPEG, FFPROBE = find_ffmpeg("ffmpeg"), find_ffmpeg("ffprobe")


def run(cmd, cwd=None):
    r = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode:
        sys.exit("command failed:\n" + " ".join(map(str, cmd)) + "\n" + r.stderr[-3000:])
    return r


def duration(path):
    r = run([FFPROBE, "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)])
    return float(r.stdout.strip())


# ---------------------------------------------------------------- assets
def ensure_fonts():
    FONTS.mkdir(parents=True, exist_ok=True)
    chosen = {}
    for role, options in FONT_SOURCES.items():
        for fname, url in options:
            dest = FONTS / fname
            if not dest.exists():
                try:
                    urllib.request.urlretrieve(url, dest)
                except Exception as e:
                    print(f"  font download failed ({fname}): {e}")
                    dest.unlink(missing_ok=True)
                    continue
            chosen[role] = dest
            break
    title = chosen.get("title") or Path(r"C:\Windows\Fonts\georgia.ttf")
    sub = chosen.get("sub")
    if sub:
        fam = ImageFont.truetype(str(sub), 20).getname()[0]
    else:
        fam = "Segoe UI"
    return title, fam


def title_font(path, size):
    f = ImageFont.truetype(str(path), size)
    try:
        f.set_variation_by_axes([600])   # SemiBold on a variable font
    except Exception:
        pass
    return f


def ensure_background():
    out = ASSETS / "background.png"
    if out.exists():
        return out
    bw, bh = 2120, 1192
    mask = Image.radial_gradient("L").resize((bw, bh), Image.LANCZOS)  # 0 centre -> 255 edge
    centre = Image.new("RGB", (bw, bh), (0x1b, 0x1d, 0x2b))
    edge = Image.new("RGB", (bw, bh), (0x07, 0x08, 0x0c))
    img = Image.composite(edge, centre, mask)
    # soft vignette: darken toward the corners
    vig = mask.point(lambda v: int(min(255, (v / 255) ** 2.2 * 170)))
    img = Image.composite(Image.new("RGB", (bw, bh), (0, 0, 0)), img, vig)
    # faint film grain (~2%)
    noise = Image.effect_noise((bw, bh), 40).convert("RGB")
    img = Image.blend(img, ImageChops.add(img, noise, scale=1.0, offset=-128), 0.15)
    img.save(out)
    return out


def make_title(bg, title_font_path, number, title, out):
    bgimg = Image.open(bg)
    bw, bh = bgimg.size
    img = bgimg.crop(((bw - W) // 2, (bh - H) // 2, (bw + W) // 2, (bh + H) // 2)).convert("RGB")
    d = ImageDraw.Draw(img)
    # "CHAPTER N", letter-spaced
    label = f"CHAPTER {number}".upper()
    f1 = title_font(title_font_path, 34)
    track = 0.35 * 34
    widths = [d.textlength(c, font=f1) for c in label]
    total = sum(widths) + track * (len(label) - 1)
    x, y = (W - total) / 2, 400
    for c, cw in zip(label, widths):
        d.text((x, y), c, font=f1, fill="#b9b4a6")
        x += cw + track
    # rule
    d.rectangle([(W - 120) // 2, 470, (W + 120) // 2 - 1, 470], fill="#6f6a5e")
    # title, wrapped to max 2 lines within 1500px
    size = 76
    while True:
        f2 = title_font(title_font_path, size)
        lines, cur = [], ""
        for word in title.split():
            trial = (cur + " " + word).strip()
            if d.textlength(trial, font=f2) <= 1500:
                cur = trial
            else:
                lines.append(cur)
                cur = word
        lines.append(cur)
        if len(lines) <= 2 or size <= 50:
            break
        size -= 4
    y = 510
    for line in lines:
        lw = d.textlength(line, font=f2)
        d.text(((W - lw) / 2, y), line, font=f2, fill="#ece7da")
        y += int(size * 1.2)
    img.save(out)


# ---------------------------------------------------------------- script / pronunciation
def read_script(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---\n(.*)", text, re.S)
    front, body = m.group(1), m.group(2)
    body = re.sub(r"^#.*\n", "", body.strip(), count=1).strip()
    meta = {}
    for line in front.splitlines():
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip().strip('"')
    paras = [re.sub(r"\s+", " ", p).strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    return text, meta, paras


def update_script_words(path, text, paras):
    n = sum(len(p.split()) for p in paras)
    new = re.sub(r"^script_words: .*$", f"script_words: {n}", text, count=1, flags=re.M)
    if new != text:
        path.write_text(new, encoding="utf-8")
    return n


def load_pron(chdir=None):
    """Shared map, plus the chapter's own pronunciation.json (new terms; merged into the shared map later)."""
    out = {}
    maps = [CODE / "pronunciation.json"] + ([ROOT / "pronunciation.json"] if ROOT != CODE else [])
    for p in maps + ([chdir / "pronunciation.json"] if chdir else []):
        if p.exists():
            out.update(json.loads(p.read_text(encoding="utf-8")))
    return out


def apply_pron(s, pron):
    for k in sorted(pron, key=len, reverse=True):
        s = s.replace(k, pron[k])
    return s


def reverse_pron(s, pron):
    for k in sorted(pron, key=lambda k: len(pron[k]), reverse=True):
        s = s.replace(pron[k], k)
    return s


# ---------------------------------------------------------------- TTS
def resolve_voice(meta):
    """(voice, rate, pitch) from the script's `voice:` field: male, female, or an exact edge-tts voice name."""
    v = meta.get("voice", "male").strip()
    return VOICES.get(v.lower(), (v, RATE, PITCH))


def wants_intro(meta):
    """`intro: no` starts the video without the chapter number and title (no title card, nothing spoken)."""
    return meta.get("intro", "yes").strip().lower() not in ("no", "off", "false", "0")


async def tts_paragraph(text, mp3_path, voice=(VOICE, RATE, PITCH)):
    import edge_tts
    if os.environ.get("SSL_CERT_FILE"):   # cloud sessions: edge-tts pins certifi; use the session's CA bundle instead
        import ssl, edge_tts.communicate as etc
        etc._SSL_CTX = ssl.create_default_context(cafile=os.environ["SSL_CERT_FILE"])
    name, rate, pitch = voice
    proxy = os.environ.get("TTS_PROXY") or None
    try:
        com = edge_tts.Communicate(text, name, rate=rate, pitch=pitch, boundary="WordBoundary", proxy=proxy)
    except TypeError:
        com = edge_tts.Communicate(text, name, rate=rate, pitch=pitch, proxy=proxy)
    words = []
    with open(mp3_path, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio":
                f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                s = ch["offset"] / 1e7
                words.append((s, s + ch["duration"] / 1e7, ch["text"]))
    return words


def norm(s):
    return "".join(c.lower() for c in s if c.isalnum())


def align(tokens, words):
    """Give each whitespace token of the narration a (start, end) from the word boundaries."""
    stream = []
    for s, e, t in words:
        for c in norm(t):
            stream.append((c, s, e))
    out, i = [], 0
    for tok in tokens:
        need = norm(tok)
        if not need:
            st = out[-1][1] if out else (stream[0][1] if stream else 0)
            out.append((tok, st, st))
            continue
        got = stream[i:i + len(need)]
        if "".join(c for c, _, _ in got) != need:
            raise RuntimeError(f"alignment failed at token {tok!r}")
        out.append((tok, got[0][1], got[-1][2]))
        i += len(need)
    return out


def synthesize(paras_spoken, work, voice=(VOICE, RATE, PITCH)):
    """TTS each paragraph, join with pauses. Returns raw wav path and aligned tokens."""
    timed, parts, t0 = [], [], 0.0
    for n, para in enumerate(paras_spoken):
        mp3 = work / f"p{n:02d}.mp3"
        for attempt in range(8):   # the free service now and then returns no audio or drops a word; try again, waiting longer
            try:
                words = asyncio.run(tts_paragraph(para, mp3, voice))
                align(para.split(), words)
                break
            except Exception as e:
                if attempt == 7:
                    raise
                print(f"  paragraph {n}: {type(e).__name__}, retrying")
                import time; time.sleep(5 * (attempt + 1))
        d = duration(mp3)
        for tok, s, e in align(para.split(), words):
            timed.append((tok, s + t0, e + t0, n))
        parts.append(mp3)
        t0 += d + PARA_GAP
    # concat with silences
    cmd, filt, labels = [FFMPEG, "-y"], [], []
    for p in parts:
        cmd += ["-i", str(p)]
    for k in range(len(parts)):
        filt.append(f"[{k}:a]aresample=48000,aformat=channel_layouts=mono,apad=pad_dur={PARA_GAP}[a{k}]")
        labels.append(f"[a{k}]")
    filt.append("".join(labels) + f"concat=n={len(parts)}:v=0:a=1[out]")
    raw = work / "raw.wav"
    run(cmd + ["-filter_complex", ";".join(filt), "-map", "[out]", str(raw)])
    return raw, timed


# ---------------------------------------------------------------- subtitles
def wrap2(text, limit=42):
    if len(text) <= limit:
        return [text]
    words = text.split()
    best = None
    for k in range(1, len(words)):
        a, b = " ".join(words[:k]), " ".join(words[k:])
        if len(a) <= limit and len(b) <= limit:
            score = abs(len(a) - len(b))
            if best is None or score < best[0]:
                best = (score, [a, b])
    return best[1] if best else None


def build_cues(timed, pron, offset=TITLE_S):
    """Group timed tokens into cues: <=2 lines of <=42 chars, 1.2-6 s, no overlaps."""
    cues, cur = [], []

    def flush():
        if cur:
            cues.append([cur[0][1], cur[-1][2], " ".join(t[0] for t in cur)])
            cur.clear()

    for idx, tok in enumerate(timed):
        if cur:
            text = " ".join(t[0] for t in cur + [tok])
            shown = reverse_pron(text, pron)
            too_long = wrap2(shown) is None or (tok[2] - cur[0][1]) > 6.0
            new_para = tok[3] != cur[-1][3]
            soft = cur[-1][0][-1] in ",;:—" and len(reverse_pron(" ".join(t[0] for t in cur), pron)) > 40
            if too_long or new_para or soft:
                flush()
        cur.append(tok)
        if tok[0][-1] in ".?!\"”" and (tok[0].rstrip("\"”")[-1:] in ".?!"):
            flush()
    flush()

    # merge very short cues into a neighbour when the text still fits
    merged = []
    for c in cues:
        if merged and (c[1] - c[0] < 1.2 or merged[-1][1] - merged[-1][0] < 1.2):
            joined = merged[-1][2] + " " + c[2]
            if wrap2(reverse_pron(joined, pron)) and c[1] - merged[-1][0] <= 6.0 and c[0] - merged[-1][1] < 0.5:
                merged[-1] = [merged[-1][0], c[1], joined]
                continue
        merged.append(c)
    cues = merged

    # timing: hold each cue a little longer for reading, keep >=80 ms gaps, >=1.2 s
    for i, c in enumerate(cues):
        nxt = cues[i + 1][0] if i + 1 < len(cues) else c[1] + 2.0
        c[1] = min(max(c[1] + 0.4, c[0] + 1.2), nxt - 0.08, c[0] + 6.0)
    out = []
    for s, e, text in cues:
        out.append((s + offset, e + offset, wrap2(reverse_pron(text, pron))))
    return out


def ts(t):
    ms = int(round(t * 1000))
    return f"{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}"


def write_srt(cues, path):
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        for n, (s, e, lines) in enumerate(cues, 1):
            f.write(f"{n}\n{ts(s)} --> {ts(e)}\n" + "\n".join(lines) + "\n\n")


def check_srt(cues):
    problems = []
    for i, (s, e, lines) in enumerate(cues):
        if not (1.2 - 1e-6 <= e - s <= 6.0 + 1e-6):
            problems.append(f"cue {i+1} length {e-s:.2f}s")
        if len(lines) > 2 or any(len(l) > 42 for l in lines):
            problems.append(f"cue {i+1} too wide")
        if i + 1 < len(cues) and cues[i + 1][0] - e < 0.08 - 1e-6:
            problems.append(f"cue {i+1} gap")
    return problems


# ---------------------------------------------------------------- video
def render_graphics(chdir, nn, body, title_font_path, sub_family):
    """Render chNN-scenes.py (Manim, transparent) to _work/graphics.mov; None if no scenes file."""
    scenes = chdir / f"{FP}{nn}-scenes.py"
    if not scenes.exists():
        return None
    work = chdir / "_work"
    env = dict(os.environ, EXPLAINER_TIMINGS=str(work / "timed.json"), EXPLAINER_BODY=f"{body:.3f}",
               EXPLAINER_TITLE_FONT=str(title_font_path), EXPLAINER_SUB_FONT=sub_family,
               EXPLAINER_FONTS=str(FONTS), PYTHONPATH=str(ROOT), PYTHONIOENCODING="utf-8")
    media = work / "media"
    hits = sorted(media.rglob("graphics.mov"), key=lambda p: p.stat().st_mtime)
    inputs = [scenes, work / "timed.json", ROOT / "explainer.py"]
    if hits and hits[-1].stat().st_mtime > max(p.stat().st_mtime for p in inputs):
        print(f"{FP}{nn}: drawings unchanged, reusing them")
        return hits[-1]
    cmd = [sys.executable, "-m", "manim", "render", "-t", "--format", "mov", "-r", f"{W},{H}",
           "--fps", str(FPS), "--media_dir", str(media), "-o", "graphics", "--disable_caching",
           "--progress_bar", "none", "-v", "WARNING", str(scenes), "Chapter"]
    r = subprocess.run(cmd, cwd=chdir, env=env, capture_output=True, text=True, encoding="utf-8", errors="replace")
    for line in (r.stdout + r.stderr).splitlines():
        if "LATE" in line:
            print("  " + line.strip())
    if r.returncode:
        sys.exit("manim failed:\n" + r.stderr[-4000:])
    hits = sorted(media.rglob("graphics.mov"), key=lambda p: p.stat().st_mtime)
    return hits[-1]


def assemble(chdir, nn, slug, narr_dur, sub_family, gfx=None):
    body = narr_dur + TAIL_S + FADE_S
    total = TITLE_S + body
    frames = int(round(body * FPS))
    music = ASSETS / "music.mp3"
    out = f"{FP}{nn}-{slug}.mp4"
    cmd = [FFMPEG, "-y",
           "-loop", "1", "-framerate", str(FPS), "-t", str(TITLE_S), "-i", f"{FP}{nn}-title.png",
           "-i", "../assets/background.png",
           "-i", f"{FP}{nn}-narration.mp3"]
    style = SUB_STYLE.format(font=sub_family)
    if gfx:
        cmd += ["-i", str(gfx)]
        g = 3
    bgfilt = (f"[1:v]zoompan=z='1+0.06*on/{frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'"
              f":d={frames}:s={W}x{H}:fps={FPS}")
    if gfx:
        bgfilt += f"[bg];[bg][{g}:v]overlay=format=auto:eof_action=pass"
    vf = [
        f"[0:v]fade=in:0:30,fade=out:st={TITLE_S-1}:d=1,format=yuv420p,setsar=1[t]",
        bgfilt + f",fade=out:st={body-FADE_S:.3f}:d={FADE_S},format=yuv420p,setsar=1[b]",
        f"[t][b]concat=n=2:v=1:a=0,subtitles={FP}{nn}.srt:fontsdir=../assets/fonts:force_style='{style}'[v]",
        f"[2:a]aresample=48000,adelay={int(TITLE_S*1000)}:all=1,apad,atrim=0:{total:.3f},"
        f"afade=out:st={total-FADE_S:.3f}:d={FADE_S}[voice]",
    ]
    amap = "[voice]"
    if music.exists():
        cmd += ["-stream_loop", "-1", "-i", "../assets/music.mp3"]
        vf.append(f"[{4 if gfx else 3}:a]aresample=48000,volume=-28dB,atrim=0:{total:.3f},afade=in:0:d=3,"
                  f"afade=out:st={total-3:.3f}:d=3[mus]")
        vf.append("[voice][mus]amix=inputs=2:duration=first:normalize=0[mix]")
        amap = "[mix]"
    cmd += ["-filter_complex", ";".join(vf), "-map", "[v]", "-map", amap,
            "-c:v", "libx264", "-crf", "20", "-preset", "medium", "-pix_fmt", "yuv420p", "-r", str(FPS),
            "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", "-t", f"{total:.3f}", out]
    run(cmd, cwd=chdir)
    return chdir / out, total


def check_frames(chdir, mp4, total):
    for label, t in [("0m02", 2), ("0m30", 30), ("2m00", 120), ("end", total - 0.7)]:
        run([FFMPEG, "-y", "-ss", f"{t:.2f}", "-i", mp4.name, "-frames:v", "1", f"check-{label}.png"], cwd=chdir)


# ---------------------------------------------------------------- Remotion path
def speak_intro(chdir, nn, line, pron, work, voice=(VOICE, RATE, PITCH)):
    """TTS the spoken title line ("Chapter 1. Title."); cached by text and voice."""
    out = chdir / f"{FP}{nn}-intro.mp3"
    meta = work / "intro.json"
    spoken = apply_pron(line, pron)
    key = {"text": spoken, "voice": list(voice)}
    old = json.loads(meta.read_text(encoding="utf-8")) if meta.exists() else {}
    if not (out.exists() and old.get("text") == spoken and old.get("voice", [VOICE, RATE, PITCH]) == list(voice)):
        raw = work / "intro_raw.mp3"
        for attempt in range(4):   # the free service now and then returns no audio; try again
            try:
                asyncio.run(tts_paragraph(spoken, raw, voice))
                break
            except Exception as e:
                if attempt == 3:
                    raise
                print(f"  spoken title: {type(e).__name__}, retrying")
                import time; time.sleep(3 * (attempt + 1))
        run([FFMPEG, "-y", "-i", str(raw), "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000", "-b:a", "192k", str(out)])
        meta.write_text(json.dumps(key, ensure_ascii=False), encoding="utf-8")
    return out, duration(out)


def render_remotion(chdir, nn, slug, label, title, title_sec, intro, narr, total, timed, cues, scenes_tsx):
    """intro: the spoken title mp3, or None for a video that starts without chapter number and title."""
    pub = REMOTION / "public"
    # files shared in the Remotion project carry the series prefix, so two books never overwrite each other
    tag = "" if PREFIX == "Ch" else f"{PREFIX.lower()}-"
    if intro:
        shutil.copy(intro, pub / f"{tag}{intro.name}")
    shutil.copy(narr, pub / f"{tag}{narr.name}")
    bonus = label.lower() == "bonus"   # `chapter: bonus` → title card "BONUS", no number
    props = {"chapter": int(nn), "chapterLabel": "" if bonus else label, "labelWord": "Bonus" if bonus else INTRO_WORD,
             "title": title, "titleSec": round(title_sec, 3),
             "showTitle": intro is not None, "introAudio": f"{tag}{intro.name}" if intro else "", "introStart": INTRO_START,
             "narration": f"{tag}{narr.name}", "durationSec": round(total, 3),
             "words": [list(t) for t in timed], "cues": [{"s": s, "e": e, "lines": lines} for s, e, lines in cues]}
    pfile = chdir / "_work" / "props.json"
    pfile.write_text(json.dumps(props, ensure_ascii=False), encoding="utf-8")
    # each chapter gets its own entry, so it bundles alone (other chapters' files cannot break it)
    name = f"{PREFIX.lower()}{nn}"
    entry = REMOTION / "src" / "entries" / f"{name}.ts"
    entry.parent.mkdir(exist_ok=True)
    entry.write_text('import { registerRoot } from "remotion";\nimport { makeRoot } from "../Root";\n'
                     f'import * as Ch from "../chapters/{scenes_tsx.stem}";\n\nregisterRoot(makeRoot(Ch));\n', encoding="utf-8")
    tmp = REMOTION / "out" / f"{name}.mp4"
    browser = [f"--browser-executable={os.environ['REMOTION_BROWSER']}"] if os.environ.get("REMOTION_BROWSER") else []
    run(["npx.cmd" if os.name == "nt" else "npx", "remotion", "render", f"src/entries/{name}.ts", "Chapter", str(tmp), f"--props={pfile}", "--codec", "h264",
         "--crf", "20", "--audio-bitrate", "192k", "--log", "error"] + browser, cwd=REMOTION)
    mp4 = chdir / f"{FP}{nn}-{slug}.mp4"
    shutil.copy(tmp, mp4)
    shutil.copy(scenes_tsx, chdir / f"{FP}{nn}-scenes.tsx")   # keep a copy of the drawings with the book
    return mp4


def backup_engine():
    """Copy the drawing engine (Remotion source) and the /video-progress mod to Drive, beside this builder.

    C:\\dev\\video-tools is not on Drive or in git; this keeps a restorable copy in Videos\\_engine\\.
    See SETUP-AND-ARCHITECTURE.md for how to restore it on a new computer.
    """
    if REMOTION.resolve() == (CODE / "explainer").resolve():
        return   # running from the JohnTLM/Videos repository: git already keeps the engine
    dest = CODE / "_engine"
    try:
        for name in ("package.json", "package-lock.json"):
            (dest / "explainer").mkdir(parents=True, exist_ok=True)
            shutil.copy(REMOTION / name, dest / "explainer" / name)
        shutil.copytree(REMOTION / "src", dest / "explainer" / "src", dirs_exist_ok=True,
                        ignore=shutil.ignore_patterns("entries"))
        shutil.copytree(REMOTION / "public" / "fonts", dest / "explainer" / "public" / "fonts", dirs_exist_ok=True)
        mods = sorted((Path.home() / ".claude" / "dev-mods").glob("*/video-progress"), key=lambda p: p.stat().st_mtime)
        if mods:
            # skip the engine-generated type files under .claude-plugin (large; rewritten on load)
            skip = lambda d, names: [n for n in names if Path(d).name == ".claude-plugin" and n in ("types", "tsconfig.json")]
            shutil.copytree(mods[-1], dest / "video-progress-mod", dirs_exist_ok=True, ignore=skip)
    except OSError as e:
        print(f"  (engine backup skipped: {e})")


# ---------------------------------------------------------------- driver
def chapter_dirs():
    return sorted(p for p in ROOT.glob(f"{FP}[0-9][0-9]-*") if p.is_dir())


def update_manifest(row):
    path = ROOT / "manifest.csv"
    rows = {}
    if path.exists():
        with open(path, encoding="utf-8", newline="") as f:
            for r in csv.DictReader(f):
                rows[r["number"]] = r
    rows[row["number"]] = row
    with open(path, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["number", "title", "words", "duration", "status"])
        w.writeheader()
        for k in sorted(rows, key=int):
            w.writerow(rows[k])


def build(chdir, skip_existing=False):
    nn = chdir.name[2:4]
    slug = chdir.name[5:]
    mp4 = chdir / f"{FP}{nn}-{slug}.mp4"
    if skip_existing and mp4.exists():
        print(f"{FP}{nn}: exists, skipped")
        return
    script = chdir / f"{FP}{nn}-script.md"
    if not script.exists():
        print(f"{FP}{nn}: no script, skipped")
        return
    title_path, sub_family = ensure_fonts()
    bg = ensure_background()
    pron = load_pron(chdir)
    text, meta, paras = read_script(script)
    words = update_script_words(script, text, paras)

    spoken = [apply_pron(p, pron) for p in paras]
    (chdir / f"{FP}{nn}-narration.txt").write_text("\n\n".join(spoken) + "\n", encoding="utf-8")

    work = chdir / "_work"
    work.mkdir(exist_ok=True)
    narr = chdir / f"{FP}{nn}-narration.mp3"
    voice = resolve_voice(meta)
    cache = work / "timed.json"
    cached = json.loads(cache.read_text(encoding="utf-8")) if cache.exists() else {}
    # caches made before voices were switchable were all the old fixed voice
    same_voice = cached.get("voice", [VOICE, RATE, PITCH]) == list(voice)
    if cached.get("text") == spoken and same_voice and narr.exists():
        timed = [tuple(t) for t in cached["timed"]]
        print(f"{FP}{nn}: narration unchanged, reusing audio")
    else:
        print(f"{FP}{nn}: recording narration with {voice[0]}")
        raw, timed = synthesize(spoken, work, voice)
        run([FFMPEG, "-y", "-i", str(raw), "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000",
             "-b:a", "192k", str(narr)])
        cache.write_text(json.dumps({"text": spoken, "voice": list(voice), "timed": timed}, ensure_ascii=False), encoding="utf-8")
    narr_dur = duration(narr)

    scenes_tsx = REMOTION / "src" / "chapters" / f"{PREFIX}{nn}.tsx"
    if scenes_tsx.exists():
        label = str(meta.get("chapter", int(nn)))
        if wants_intro(meta):
            line = f"Bonus. {meta['title']}" if label.lower() == "bonus" else f"{INTRO_WORD} {label}. {meta['title']}"
            line = line if line[-1] in ".?!" else line + "."
            intro, intro_dur = speak_intro(chdir, nn, line, pron, work, voice)
            title_sec = max(TITLE_S, INTRO_START + intro_dur + 1.4)
        else:
            intro, title_sec = None, NO_INTRO_LEAD
        cues = build_cues(timed, pron, offset=title_sec)
        write_srt(cues, chdir / f"{FP}{nn}.srt")
        problems = check_srt(cues)
        total = title_sec + narr_dur + TAIL_S + FADE_S
        mp4 = render_remotion(chdir, nn, slug, label, meta["title"], title_sec, intro, narr, total, timed, cues, scenes_tsx)
    else:
        cues = build_cues(timed, pron)
        write_srt(cues, chdir / f"{FP}{nn}.srt")
        problems = check_srt(cues)
        make_title(bg, title_path, meta.get("chapter", int(nn)), meta["title"], chdir / f"{FP}{nn}-title.png")
        gfx = render_graphics(chdir, nn, narr_dur + TAIL_S + FADE_S, title_path, sub_family)
        mp4, total = assemble(chdir, nn, slug, narr_dur, sub_family, gfx)
    check_frames(chdir, mp4, total)
    backup_engine()

    ok_len = (180 if MIN_WORDS >= 450 else 100) <= narr_dur <= 270 and MIN_WORDS <= words <= 550
    status = "built" if ok_len and not problems else "check: " + "; ".join(
        ([] if ok_len else [f"words {words} / narration {narr_dur:.0f}s"]) + problems[:5])
    update_manifest({"number": str(int(nn)), "title": meta["title"], "words": words,
                     "duration": f"{int(total // 60)}:{int(total % 60):02d}", "status": status})
    print(f"{FP}{nn}: {words} words, narration {narr_dur:.1f}s, video {total:.1f}s, "
          f"{len(cues)} cues, subtitle font '{sub_family}', status: {status}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--chapter", type=int)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--skip-existing", action="store_true")
    a = ap.parse_args()
    if a.all:
        for d in chapter_dirs():
            build(d, a.skip_existing)
    elif a.chapter is not None:
        hits = [d for d in chapter_dirs() if d.name.startswith(f"{FP}{a.chapter:02d}-")]
        if not hits:
            sys.exit(f"no folder for chapter {a.chapter}")
        build(hits[0], a.skip_existing)
    else:
        ap.print_help()


if __name__ == "__main__":
    main()
