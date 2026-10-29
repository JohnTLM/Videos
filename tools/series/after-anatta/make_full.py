"""Join "The Logic in full": the overview's opening, What the Logic Is Looking At, Steps 1-8 whole, and the overview's close.

Usage: python3 tools/series/after-anatta/make_full.py <out.mp4>

Reads the finished videos in tools/series/anatta-to-emptiness/ep96-*/ and tools/series/after-anatta/aa0N-*/ and aa12-*/
(What the Logic Is Looking At comes after the overview, as on the website; owner, 2026-10-29).
The overview (ep96) is cut by its subtitles: from the start to the end of the cue holding OPEN_END, and from the cue
starting with CLOSE_START to the end. Prints the YouTube chapter list (start of each part) when it is done.
Re-encodes everything to one 1080p H.264 + AAC file, so the parts may have been built at different times.
"""
import glob
import json
import re
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OPEN_END = "cannot do the work"
CLOSE_START = "Listen to a sound once more"
TITLES = ["Two Logics", "What Is Negated", "Designated, Not Found", "The Two Truths", "The Four Corners",
          "The Two Traps", "Function Without Substance", "The Four Questions"]


def one(pattern):
    found = sorted(glob.glob(str(pattern)))
    if len(found) != 1:
        sys.exit(f"expected one file for {pattern}, found {found}")
    return found[0]


def cues(srt):
    out = []
    for block in Path(srt).read_text(encoding="utf-8").strip().split("\n\n"):
        lines = block.strip().split("\n")
        if len(lines) < 3:
            continue
        a, b = [sum(float(x) * m for x, m in zip(t.replace(",", ".").split(":"), (3600, 60, 1))) for t in lines[1].split(" --> ")]
        out.append((a, b, " ".join(lines[2:])))
    return out


def length(mp4):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "json", mp4],
                       capture_output=True, text=True, check=True)
    return float(json.loads(r.stdout)["format"]["duration"])


def stamp(s):
    s = int(s)
    return f"{s // 3600}:{s % 3600 // 60:02d}:{s % 60:02d}" if s >= 3600 else f"{s // 60}:{s % 60:02d}"


def main(out):
    ep = one(HERE.parent / "anatta-to-emptiness" / "ep96-*" / "ep96-*.mp4")
    c = cues(one(HERE.parent / "anatta-to-emptiness" / "ep96-*" / "ep96.srt"))
    flat = lambda x: re.sub(r"\s+", " ", x)
    open_end = next(b for a, b, x in c if OPEN_END in flat(x)) + 0.6
    close_start = next(a for a, b, x in c if flat(x).startswith(CLOSE_START)) - 0.4
    steps = [one(HERE / f"aa0{n}-*" / f"aa0{n}-*.mp4") for n in range(1, 9)]
    looking = one(HERE / "aa12-*" / "aa12-*.mp4")
    parts = [(ep, 0, open_end), (looking, 0, length(looking))] + [(s, 0, length(s)) for s in steps] + [(ep, close_start, length(ep))]
    args, chains = [], []
    for i, (f, a, b) in enumerate(parts):
        args += ["-ss", f"{a:.3f}", "-to", f"{b:.3f}", "-i", f]
        chains.append(f"[{i}:v]scale=1920:1080,fps=30,setsar=1,format=yuv420p[v{i}];"
                      f"[{i}:a]aresample=48000,aformat=channel_layouts=stereo[a{i}];")
    n = len(parts)
    graph = "".join(chains) + "".join(f"[v{i}][a{i}]" for i in range(n)) + f"concat=n={n}:v=1:a=1[v][a]"
    subprocess.run(["ffmpeg", "-nostdin", "-loglevel", "error", "-y", *args, "-filter_complex", graph,
                    "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-preset", "veryfast", "-crf", "21",
                    "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", out], check=True)
    t, names = 0.0, ["Overview: The Logic, After Anatta", "What the Logic Is Looking At"] + [f"Step {k}: {x}" for k, x in enumerate(TITLES, 1)] + ["A sound, once more"]
    for (f, a, b), name in zip(parts, names):
        print(f"{stamp(t)} {name}")
        t += b - a
    print(f"total {stamp(t)}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
