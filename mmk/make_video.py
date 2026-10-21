"""Make the narrated video for one MMK chapter.

Usage: python make_video.py <chapter> [--out <folder>] [--only-slides] [--no-verses]

--no-verses leaves out the reading of the verses (the "The verses" slide and every verse slide):
the owner keeps the verses on the chapter page and wants the videos to hold only the explanations.

Reads narration/<chapter>.json and mmk/mmk-<chapter>.html (verses and diagrams come from the page,
so the video always matches it). Writes to <folder> (default: work/<chapter>):
  slide-NN.html / .png   each slide, drawn at 1920x1080 by render.js
  slide-NN.mp3           Andrew's narration (edge-tts, free)
  mmk-<chapter>.srt      subtitles
  mmk-<chapter>-full.mp4 full size, subtitles burned in
  mmk-<chapter>-phone.mp4 phone size (1280x720, smaller file)
Needs: edge-tts (pip), ffmpeg, node with Playwright.
"""
import argparse
import asyncio
import html
import json
import os
import re
import ssl
import subprocess
from pathlib import Path

HERE = Path(__file__).resolve().parent
# The chapter pages live in the website repository (thusness-website). By default it sits next to this one
# (C:\dev\videos beside C:\dev\thusness-website); set THUSNESS_WEBSITE to its folder if it is elsewhere.
MMK = Path(os.environ.get("THUSNESS_WEBSITE") or HERE.parent.parent / "thusness-website") / "mmk"
VOICE = "en-US-AndrewNeural"
LEAD, TAIL = 0.5, 1.1      # seconds of quiet before and after each slide's narration
SUBFONT = "Arial" if os.name == "nt" else "DejaVu Sans"   # subtitle font that the computer has
CA = "/root/.ccr/ca-bundle.crt"  # cloud session proxy certificate; ignored when missing

STYLE = """
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Source+Serif+4:ital,wght@0,400;1,400&family=Source+Sans+3:wght@400;600&display=swap');
:root { --paper:#f5f5f1; --surface:#ecece6; --ink:#191c21; --muted:#5b6068; --rule:#d8d8d0; --indigo:#2c3b6b; --saffron:#b8841f; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1920px; height: 1080px; overflow: hidden; }
body { background: var(--paper); color: var(--ink); font-family: "Source Serif 4", Georgia, "DejaVu Serif", serif;
       padding: 90px 150px 230px; display: flex; flex-direction: column; }
.label { font-family: "Source Sans 3", "DejaVu Sans", sans-serif; font-size: 26px; font-weight: 600; letter-spacing: .14em;
         text-transform: uppercase; color: var(--muted); }
.label b { color: var(--saffron); font-weight: 600; }
h1 { font-family: "Cormorant Garamond", Georgia, serif; font-weight: 600; font-size: 84px; line-height: 1.05; margin: 22px 0 40px; }
.main { flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 0; }
ul { list-style: none; padding: 0; }
li { font-size: 50px; line-height: 1.3; padding: 18px 0 18px 46px; position: relative; }
li::before { content: ""; position: absolute; left: 0; top: 40px; width: 18px; height: 18px; background: var(--saffron); border-radius: 50%; }
.sa { font-style: italic; color: var(--muted); font-size: 34px; line-height: 1.5; margin-bottom: 36px; }
.en { font-size: 50px; line-height: 1.38; }
.en.long { font-size: 42px; }
table { border-collapse: collapse; width: 100%; font-family: "Source Sans 3", "DejaVu Sans", sans-serif; font-size: 36px; }
th, td { text-align: left; padding: 20px 24px 20px 0; border-bottom: 2px solid var(--rule); vertical-align: top; }
th { border-bottom: 3px solid var(--ink); }
td:first-child { font-weight: 600; }
.title { background: var(--indigo); color: #f3f1ea; justify-content: center; }
.title .label { color: #d9a646; }
.title h1 { font-size: 120px; margin: 30px 0; }
.title p:not(.label) { font-family: "Cormorant Garamond", Georgia, serif; font-style: italic; font-size: 48px; opacity: .85; }
.fig { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; }
.fig svg { width: 100%; height: 100%; color: var(--ink); font-family: "Source Sans 3", "DejaVu Sans", sans-serif; }
.fig .h { font-size: 15px; font-weight: 600; fill: currentColor; }
.fig .t { font-size: 13px; fill: currentColor; }
.fig .muted { fill: var(--muted); }
.fig .on { font-size: 13px; font-weight: 600; fill: #fff; }
.fig .strike { text-decoration: line-through; }
.fig .box rect, .fig rect.box, .fig circle.box, .fig .box circle { fill: none; stroke: currentColor; stroke-width: 1.3; }
.fig rect.acc { stroke: var(--saffron); stroke-width: 2; }
.fig .acc-fill { fill: var(--saffron); }
.fig .dash { fill: none; stroke: var(--muted); stroke-width: 1.3; stroke-dasharray: 5 4; }
.fig .ln, .fig .ln line { stroke: currentColor; stroke-width: 1.3; fill: none; }
.fig .rule { stroke: var(--rule); stroke-width: 1; }
.fig .x path { stroke: var(--saffron); stroke-width: 2.5; stroke-linecap: round; }
"""


def page_parts(chapter):
    """Verses {number: (sanskrit_html, english)} and diagram SVGs, in page order."""
    text = (MMK / f"mmk-{chapter}.html").read_text(encoding="utf8")
    verses = {m[0]: (m[1], m[2]) for m in re.findall(
        r'<div class="verse"><div class="vn">(.*?)</div><div><div class="sa">(.*?)</div><p>(.*?)</p>', text, re.S)}
    figs = re.findall(r'<figure class="dg">\s*(<svg.*?</svg>)', text, re.S)
    return verses, figs


def plain(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s))


def spoken(s):
    """Spell Sanskrit names plainly so the voice says them sensibly."""
    for a, b in [("Nāgārjuna", "Nagarjuna"), ("Candrakīrti", "Chandrakirti"), ("ā", "a"), ("ī", "i"), ("ū", "u"),
                 ("ṇ", "n"), ("ṃ", "m"), ("ś", "sh"), ("ṣ", "sh"), ("ñ", "n"), ("ḥ", "h"), ("‘", "'"), ("’", "'")]:
        s = s.replace(a, b)
    return s


def slide_html(s, chapter, title, verses, figs):
    label = f"Nāgārjuna's Middle Way · <b>Chapter {chapter}</b>"
    if s["kind"] == "title":
        return f'<body class="title"><p class="label">Mūlamadhyamakakārikā · Chapter {chapter}</p><h1>{title}</h1><p>Nāgārjuna\'s Fundamental Verses on the Middle Way</p></body>'
    if s["kind"] == "verse":
        sa, en = verses[s["n"]]
        name = "The homage" if s["n"] == "Homage" else f"Verse {s['n']}"
        return (f'<body><p class="label">{label} · {name}</p><div class="main"><div class="sa">{sa}</div>'
                f'<p class="en{" long" if len(plain(en)) > 260 else ""}">{en}</p></div></body>')
    head = f'<p class="label">{label}</p><h1>{s["heading"]}</h1>'
    if s["kind"] == "text":
        return f'<body>{head}<div class="main"><ul>{"".join(f"<li>{p}</li>" for p in s["points"])}</ul></div></body>'
    if s["kind"] == "table":
        rows = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in s["rows"])
        return f'<body>{head}<div class="main"><table><tr>{"".join(f"<th>{h}</th>" for h in s.get("head", ["Condition", "What it does", "Seeing a flower"]))}</tr>{rows}</table></div></body>'
    if s["kind"] == "diagram":
        return f'<body>{head}<div class="fig">{figs[s["fig"] - 1]}</div></body>'
    raise ValueError(s["kind"])


def say_text(s, verses):
    if "say" in s:
        return s["say"]
    en = plain(verses[s["n"]][1])
    return ("The homage. " if s["n"] == "Homage" else f"Verse {s['n']}. ") + en


async def tts(text, mp3, tries=5):
    """Andrew's voice to mp3; returns sentence cues [(start, end, text)] in seconds.
    The free service sometimes sends no audio, so each slide is retried a few times."""
    for k in range(tries):
        try:
            return await tts_once(text, mp3)
        except Exception:
            if k == tries - 1:
                raise
            await asyncio.sleep(5 * (k + 1))


async def tts_once(text, mp3):
    import edge_tts
    import edge_tts.communicate as comm
    if os.path.exists(CA):
        comm._SSL_CTX = ssl.create_default_context(cafile=CA)
    cues = []
    with open(mp3, "wb") as f:
        async for chunk in edge_tts.Communicate(text, VOICE).stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])
            elif chunk["type"] == "SentenceBoundary":
                start = chunk["offset"] / 1e7
                cues.append((start, start + chunk["duration"] / 1e7, chunk["text"]))
    return cues


def split_cue(start, end, text, limit=84):
    """Break a long sentence into subtitle lines of at most `limit` characters, timed by length."""
    words, parts, cur = text.split(), [], ""
    for w in words:
        if cur and len(cur) + 1 + len(w) > limit:
            parts.append(cur); cur = w
        else:
            cur = f"{cur} {w}".strip()
        if cur.endswith((",", ";", ":")) and len(cur) > limit * 0.55:
            parts.append(cur); cur = ""
    if cur:
        parts.append(cur)
    total, t, out = sum(len(p) for p in parts), start, []
    for p in parts:
        d = (end - start) * len(p) / total
        out.append((t, t + d, p)); t += d
    return out


def stamp(t):
    ms = round(t * 1000)
    return f"{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02},{ms % 1000:03}"


def duration(path):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                                          "-of", "csv=p=0", str(path)]).decode())


def run(cmd):
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("chapter", type=int)
    ap.add_argument("--out")
    ap.add_argument("--only-slides", action="store_true")
    ap.add_argument("--no-verses", action="store_true")
    a = ap.parse_args()
    out = Path(a.out or HERE / "work" / str(a.chapter)); out.mkdir(parents=True, exist_ok=True)
    nar = json.loads((HERE / "narration" / f"{a.chapter}.json").read_text(encoding="utf8"))
    if a.no_verses:
        nar["slides"] = [s for s in nar["slides"] if s["kind"] != "verse" and s.get("heading") != "The verses"]
    verses, figs = page_parts(a.chapter)

    for i, s in enumerate(nar["slides"], 1):
        (out / f"slide-{i:02}.html").write_text(
            f"<!doctype html><html><head><meta charset=utf-8><style>{STYLE}</style></head>"
            + slide_html(s, a.chapter, nar["title"], verses, figs) + "</html>", encoding="utf8")
    run(["node", str(HERE / "render.js"), str(out)])
    print(f"{len(nar['slides'])} slides drawn")
    if a.only_slides:
        return

    srt, t, parts = [], 0.0, []
    for i, s in enumerate(nar["slides"], 1):
        mp3 = out / f"slide-{i:02}.mp3"
        cues = asyncio.run(tts(spoken(say_text(s, verses)), mp3))
        d = LEAD + duration(mp3) + TAIL
        for c in cues:
            srt += split_cue(t + LEAD + c[0], t + LEAD + c[1], c[2])
        seg = out / f"seg-{i:02}.mp4"
        run(["ffmpeg", "-y", "-loop", "1", "-framerate", "25", "-i", str(out / f"slide-{i:02}.png"), "-i", str(mp3),
             "-af", f"adelay={int(LEAD * 1000)}:all=1,apad", "-t", f"{d:.3f}", "-c:v", "libx264", "-tune", "stillimage",
             "-pix_fmt", "yuv420p", "-c:a", "aac", "-ar", "48000", "-ac", "2", "-b:a", "128k", str(seg)])
        parts.append(seg); t += duration(seg)
        print(f"slide {i}: {d:.1f}s")

    name = f"mmk-{a.chapter}"
    (out / f"{name}.srt").write_text("".join(f"{k}\n{stamp(s)} --> {stamp(e)}\n{x}\n\n" for k, (s, e, x) in enumerate(srt, 1)), encoding="utf8")
    (out / "list.txt").write_text("".join(f"file '{p.name}'\n" for p in parts))
    run(["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(out / "list.txt"), "-c", "copy", str(out / "joined.mp4")])
    subs = (f"subtitles={name}.srt:force_style='FontName={SUBFONT},FontSize=13,PrimaryColour=&H00FFFFFF,"
            "BackColour=&H80000000,OutlineColour=&H80000000,BorderStyle=3,Outline=6,Shadow=0,MarginV=22'")
    # ffmpeg's subtitles filter reads the .srt path relative to the working folder
    subprocess.run(["ffmpeg", "-y", "-i", "joined.mp4", "-vf", subs, "-c:v", "libx264", "-crf", "22", "-preset", "faster",
                    "-tune", "stillimage", "-c:a", "copy", "-movflags", "+faststart", f"{name}-full.mp4"], cwd=out, check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    subprocess.run(["ffmpeg", "-y", "-i", f"{name}-full.mp4", "-vf", "scale=1280:720", "-c:v", "libx264", "-crf", "28",
                    "-preset", "faster", "-tune", "stillimage", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", f"{name}-phone.mp4"],
                   cwd=out, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"done: {t / 60:.1f} min -> {out / (name + '-full.mp4')}")


if __name__ == "__main__":
    main()
