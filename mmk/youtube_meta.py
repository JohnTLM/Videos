"""Write the YouTube title, description and tags for each MMK chapter video (the version without the verse reading).

Usage: python youtube_meta.py <work folder> <out.json> [chapter ...]

<work folder> holds log-<n>.txt from make_video.py --no-verses (one "slide i: 12.3s" line per slide); the timestamps
in each description come from those lines. The description opens with the chapter page's first paragraph.
"""
import html
import json
import os
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
# The chapter pages live in the website repository (thusness-website). By default it sits next to this one
# (C:\dev\videos beside C:\dev\thusness-website); set THUSNESS_WEBSITE to its folder if it is elsewhere.
MMK = Path(os.environ.get("THUSNESS_WEBSITE") or HERE.parent.parent / "thusness-website") / "mmk"
SITE = "https://atr-passerby.com"   # the only website since 2026-10-30
# Each chapter's readable address, fixed in thusness-website scripts/page_addresses.json.
ADDRESSES = json.loads((MMK.parent / "scripts" / "page_addresses.json").read_text(encoding="utf8"))
SERIES = "Nāgārjuna's Middle Way: the MMK chapter by chapter"
TAGS = ["Nagarjuna", "Mulamadhyamakakarika", "MMK", "Madhyamaka", "Middle Way", "emptiness", "dependent arising",
        "Buddhist philosophy", "Thusness", "John Tan"]


def plain(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def stamp(t):
    t = int(t)
    return f"{t // 60}:{t % 60:02}"


def chapter(n, work):
    nar = json.loads((HERE / "narration" / f"{n}.json").read_text(encoding="utf8"))
    slides = [s for s in nar["slides"] if s["kind"] != "verse" and s.get("heading") != "The verses"]
    raw = (Path(work) / f"log-{n}.txt").read_bytes()
    log = raw.decode("utf-16" if raw[:2] in (b"\xff\xfe", b"\xfe\xff") else "utf8", "replace")   # Windows PowerShell writes UTF-16
    secs = [float(x) for x in re.findall(r"slide \d+: ([\d.]+)s", log)]
    assert len(secs) == len(slides), f"chapter {n}: {len(secs)} timings for {len(slides)} slides"
    # YouTube chapters: the first at 0:00, each at least 10 seconds long
    marks, t = [], 0.0
    for s, d in zip(slides, secs):
        if not marks:
            marks.append((0.0, "Introduction"))
        elif t - marks[-1][0] >= 10:
            marks.append((t, s["heading"]))
        t += d
    page = (MMK / f"mmk-{n}.html").read_text(encoding="utf8")
    opening = plain(re.search(r"<p>(.*?)</p>", page, re.S).group(1))
    title = next(c["t"] for c in json.loads((MMK / "chapters.json").read_text(encoding="utf8")) if c["n"] == n)
    desc = "\n".join([
        opening, "",
        *[f"{stamp(a)} {b}" for a, b in marks], "",
        f"Read the chapter, with every verse in Sanskrit and in a new English translation: {SITE}/{ADDRESSES[f'mmk-{n}']}/", "",
        f"Part of the series \"{SERIES}\" (Mūlamadhyamakakārikā), by John Tan (Thusness).",
        "The verse numbers follow the GRETIL Sanskrit e-text (CC BY-NC-SA 4.0). Narration: synthetic voice.",
    ])
    return {"n": n, "title": f"Nāgārjuna's Middle Way, Chapter {n}: {title} (MMK)", "minutes": round(t / 60, 1),
            "description": desc, "tags": TAGS + [re.sub(r"^Examination of (the )?", "", title)], "playlist": SERIES}


if __name__ == "__main__":
    work, out, *ns = sys.argv[1:]
    data = [chapter(n, work) for n in (map(int, ns) if ns else range(1, 28))]
    Path(out).write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf8")
    print(f"{len(data)} chapter(s) written to {out}")
