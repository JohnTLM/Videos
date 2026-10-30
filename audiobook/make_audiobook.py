"""Record the audiobooks: text/<set>/*.txt -> out/<set>/*.mp3 (prog-spec.md, section 5).

    python audiobook/make_audiobook.py                                   # every set
    python audiobook/make_audiobook.py 4-observer-and-presence --only 04-ob-1
    python audiobook/make_audiobook.py --voice en-GB-RyanNeural --rate -5% --glossaries
    python audiobook/make_audiobook.py --check                           # only check the MP3s already made

Each paragraph is recorded on its own (long ones are cut at sentence ends into parts of at most about 2,500
characters), up to 8 at a time. The parts are joined with ffmpeg into one MP3 per chapter (mono, 64 kbps),
with 0.8 s of silence between paragraphs and 1.5 s after headings, and tagged. Every part and every file is
checked: the service reports each word it speaks, so a part that stopped early is caught and recorded again,
and each whole file must come out at 140 to 185 words a minute.

Cloud sessions: set SSL_CERT_FILE=/root/.ccr/ca-bundle.crt and pass --proxy "$HTTPS_PROXY". The server needs neither.
Parts are kept in out/.work/ (named by voice, settings and text), so a re-run records only what changed.
"""
import argparse, asyncio, hashlib, os, re, shutil, subprocess, sys, time
from pathlib import Path

HERE = Path(__file__).resolve().parent
TEXT, OUT = HERE / "text", HERE / "out"
WORK = OUT / ".work"
VOICE, RATE, PITCH = "en-US-AndrewMultilingualNeural", "+0%", "+0Hz"
ARTIST = "John Tan (Thusness)"
PART_MAX = 2500
PARA_GAP, HEAD_GAP = 0.8, 1.5
WPM_MIN, WPM_MAX = 140, 185            # whole file, silences included
PART_WPM_MAX = 240                      # a part faster than this lost words (checked on parts of 8+ words)
GLOSSARIES = {"19-sw-glossary", "28-ob-b"}  # left out unless --glossaries (the owner decides)
SR = 24000


def read_text(path):
    lines = path.read_text(encoding="utf-8").split("\n")
    meta = {}
    while lines and ":" in lines[0] and lines[0].split(":")[0] in ("title", "album"):
        k, v = lines.pop(0).split(":", 1)
        meta[k] = v.strip()
    paras = [p.strip() for p in "\n".join(lines).split("\n\n") if p.strip()]
    return meta, [(p[2:].strip(), True) if p.startswith("# ") else (p, False) for p in paras]


def cut(text, limit=PART_MAX):
    """Cut a long paragraph at sentence ends into pieces of at most `limit` characters."""
    if len(text) <= limit:
        return [text]
    out, cur = [], ""
    for s in re.split(r"(?<=[.?!…”’\"])\s+", text):
        while len(s) > limit:                       # a single very long sentence: cut at a comma or space
            k = max(s.rfind(", ", 0, limit), s.rfind("; ", 0, limit), s.rfind(" ", 0, limit))
            if cur:
                out.append(cur)
                cur = ""
            out.append(s[:k + 1].strip())
            s = s[k + 1:].strip()
        if cur and len(cur) + 1 + len(s) > limit:
            out.append(cur)
            cur = s
        else:
            cur = f"{cur} {s}".strip()
    if cur:
        out.append(cur)
    return out


def words(s):
    return len(re.findall(r"\w+(?:['’-]\w+)*", s))


def norm(s):
    return "".join(c.lower() for c in s if c.isalnum())


def duration(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
                       capture_output=True, text=True)
    try:
        return float(r.stdout.strip())
    except ValueError:
        return 0.0


async def tts(text, path, voice, rate, pitch, proxy):
    import edge_tts
    tmp = path.with_suffix(".part")
    com = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch, boundary="WordBoundary", proxy=proxy)
    said = []
    with open(tmp, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio":
                f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                said.append(ch["text"])
    # the service reports each word it spoke: all of the text must be there, or the part stopped early
    got, want = len(norm(" ".join(said))), len(norm(text))
    if want and got < 0.98 * want:
        tmp.unlink(missing_ok=True)
        raise RuntimeError(f"only {got} of {want} letters spoken")
    tmp.replace(path)


def part_ok(text, path):
    if not path.exists() or path.stat().st_size < 1000:
        return False, "no audio"
    d, w = duration(path), words(text)
    if w >= 8 and w / (d / 60) > PART_WPM_MAX:
        return False, f"{w} words in {d:.1f} s"
    return True, ""


async def record_parts(jobs, args):
    """jobs: list of (text, path). Records the missing or failed ones, up to args.jobs at a time."""
    sem = asyncio.Semaphore(args.jobs)
    failed = []

    async def one(text, path):
        async with sem:
            if part_ok(text, path)[0]:
                return
            why = ""
            for attempt in range(8):    # the free service now and then returns no audio or stops early; wait longer each time
                try:
                    await tts(text, path, args.voice, args.rate, args.pitch, args.proxy)
                    ok, why = part_ok(text, path)
                    if ok:
                        return
                except Exception as e:
                    why = f"{type(e).__name__}: {e}"
                print(f"    {path.name}: {why}; trying again", flush=True)
                path.unlink(missing_ok=True)
                await asyncio.sleep(5 * (attempt + 1))
            failed.append((path, why))

    await asyncio.gather(*(one(t, p) for t, p in jobs))
    return failed


def silence(sec):
    p = WORK / f"silence-{sec:.1f}.mp3"
    if not p.exists():
        WORK.mkdir(parents=True, exist_ok=True)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", f"anullsrc=r={SR}:cl=mono", "-t", str(sec),
                        "-c:a", "libmp3lame", "-b:a", "48k", str(p)], check=True)
    return p


def check_file(mp3, text_words):
    d = duration(mp3)
    wpm = text_words / (d / 60) if d else 0
    return WPM_MIN <= wpm <= WPM_MAX, d, wpm


def build(txt, setname, track, total, args):
    meta, paras = read_text(txt)
    key = f"{args.voice}|{args.rate}|{args.pitch}"
    wdir = WORK / setname / txt.stem
    wdir.mkdir(parents=True, exist_ok=True)
    seq, jobs = [], []                      # seq: part files and silences, in order
    for n, (p, head) in enumerate(paras):
        for k, piece in enumerate(cut(p)):
            h = hashlib.sha1(f"{key}|{piece}".encode()).hexdigest()[:12]
            path = wdir / f"p{n:04d}-{k}-{h}.mp3"
            jobs.append((piece, path))
            seq.append(path)
        if n < len(paras) - 1:
            seq.append(silence(HEAD_GAP if head or n == 0 else PARA_GAP))   # the opening title line counts as a heading
    keep = {p.name for _, p in jobs}
    for old in wdir.glob("p*.mp3"):         # parts from an older text or voice
        if old.name not in keep:
            old.unlink()
    t0 = time.time()
    failed = asyncio.run(record_parts(jobs, args))
    if failed:
        print(f"  {txt.stem}: FAILED, {len(failed)} parts could not be recorded: {failed[:3]}")
        return None
    out = OUT / setname / (txt.stem + ".mp3")
    out.parent.mkdir(parents=True, exist_ok=True)
    lst = wdir / "list.txt"
    lst.write_text("".join(f"file '{p.resolve()}'\n" for p in seq), encoding="utf-8")
    tags = {"title": meta.get("title", txt.stem), "album": meta.get("album", setname), "artist": ARTIST,
            "album_artist": ARTIST, "track": f"{track}/{total}", "genre": "Audiobook"}
    cmd = ["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", str(lst), "-ac", "1", "-ar", str(SR),
           "-c:a", "libmp3lame", "-b:a", "64k", "-id3v2_version", "3"]
    for k, v in tags.items():
        cmd += ["-metadata", f"{k}={v}"]
    subprocess.run(cmd + [str(out)], check=True)
    w = sum(words(p) for p, _ in paras)
    ok, d, wpm = check_file(out, w)
    print(f"  {txt.stem}: {len(jobs)} parts, {w} words, {d / 60:.1f} min, {wpm:.0f} words a minute"
          f" {'OK' if ok else 'CHECK FAILED'} ({time.time() - t0:.0f} s)", flush=True)
    return ok, d


def files_for(setname, args):
    files = sorted((TEXT / setname).glob("*.txt"))
    if not args.glossaries:
        files = [f for f in files if f.stem not in GLOSSARIES]
    return files


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("sets", nargs="*", help="set folders under text/ (default: all)")
    ap.add_argument("--only", nargs="*", help="file names without .txt, e.g. 04-ob-1")
    ap.add_argument("--voice", default=VOICE)
    ap.add_argument("--rate", default=RATE)
    ap.add_argument("--pitch", default=PITCH)
    ap.add_argument("--glossaries", action="store_true", help="include the two glossaries")
    ap.add_argument("--jobs", type=int, default=8)
    ap.add_argument("--proxy", default=os.environ.get("TTS_PROXY") or None)
    ap.add_argument("--check", action="store_true", help="only check the MP3s in out/")
    args = ap.parse_args()
    if os.environ.get("SSL_CERT_FILE"):   # cloud sessions: edge-tts pins certifi; use the session's CA bundle instead
        import ssl, edge_tts.communicate as etc
        etc._SSL_CTX = ssl.create_default_context(cafile=os.environ["SSL_CERT_FILE"])
    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg is needed")
    sets = args.sets or sorted(d.name for d in TEXT.iterdir() if d.is_dir())
    bad, total_s, count = [], 0.0, 0
    for s in sets:
        files = files_for(s, args)
        print(f"{s}: {len(files)} files", flush=True)
        for n, f in enumerate(files, 1):
            if args.only and f.stem not in args.only:
                continue
            if args.check:
                mp3 = OUT / s / (f.stem + ".mp3")
                ok, d, wpm = check_file(mp3, sum(words(p) for p, _ in read_text(f)[1])) if mp3.exists() else (False, 0, 0)
                print(f"  {f.stem}: {d / 60:.1f} min, {wpm:.0f} words a minute {'OK' if ok else 'CHECK FAILED'}")
                r = (ok, d)
            else:
                r = build(f, s, n, len(files), args)
            if not r or not r[0]:
                bad.append(f"{s}/{f.stem}")
            if r:
                total_s += r[1]
                count += 1
    print(f"\n{count} files, {total_s / 3600:.2f} hours" + (f"; FAILED: {', '.join(bad)}" if bad else "; all checks passed"))
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
