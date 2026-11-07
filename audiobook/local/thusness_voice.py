#!/usr/bin/env python3
"""Thusness Voice: record John Tan's books and articles as MP3 files on your own computer.

Free: it uses Microsoft's natural voices through edge-tts (no account, no key, no charge). It reads the text the
website shows, already cleaned for listening, from the public GitHub repository JohnTLM/videos (audiobook/text/),
so each run picks up the latest wording. Only files whose text or voice changed are recorded again.

    python thusness_voice.py                          # everything, Jenny's voice (about 41 hours of audio, about an hour to make)
    python thusness_voice.py --list                   # what there is, with the minutes of each
    python thusness_voice.py --only pathway sw-1      # just some files (part of the file name or title)
    python thusness_voice.py --sets bonus-articles    # one set
    python thusness_voice.py --voice en-US-AriaNeural # another voice;  --voices lists them
    python thusness_voice.py --out "G:/My Drive/voices for ebooks and articles"

The MP3s go into the folder "voices for ebooks and articles" beside this file (or --out), with voice_manifest.json and
AUDIO_CHANGELOG.md, which mark each file NEW, UPDATED or Unchanged. Put that folder inside Google Drive for desktop and
the files reach Drive by themselves. Needs Python 3.9+ and: pip install edge-tts
"""
import argparse, asyncio, hashlib, json, os, re, sys, time, urllib.request
from datetime import datetime
from pathlib import Path

REPO, BRANCH = "JohnTLM/videos", "main"
RAW = f"https://raw.githubusercontent.com/{REPO}/{BRANCH}/audiobook/text/"
API = f"https://api.github.com/repos/{REPO}/contents/audiobook/text/"
SETS = {  # folder in audiobook/text -> name used for the MP3 files
    "1-substrateless-world": "Book 1 - Substrateless World",
    "2-anatta-to-emptiness": "Book 2 - Anatta to Emptiness",
    "3-nagarjunas-middle-way": "Book 3 - Nagarjuna Middle Way",
    "4-observer-and-presence": "Book 4 - Observer and Presence",
    "5-the-logic-after-anatta": "Book 5 - Logic After Anatta",
    "explorations": "Explorations",
    "zoom-ins": "Zoom-ins",
    "the-canon-view": "Canon View",
    "bonus-articles": "Article",
}
LEFT_OUT = {"19-sw-glossary", "28-ob-b"}   # the two glossaries (owner, 2026-11-07: "Leave the glossaries out")
VOICE, PART_MAX, JOBS = "en-US-JennyNeural", 2500, 4
HERE = Path(__file__).resolve().parent


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "thusness-voice"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:
            if attempt == 3:
                raise
            print(f"  (network: {e}; trying again)")
            time.sleep(3 * (attempt + 1))


def catalogue(sets):
    out = []
    for s in sets:
        names = sorted(x["name"] for x in json.loads(get(API + s + f"?ref={BRANCH}")) if x["name"].endswith(".txt"))
        out += [(s, n[:-4]) for n in names if n[:-4] not in LEFT_OUT]
    return out


def parse(text):
    lines = text.replace("\r", "").split("\n")
    meta = {}
    while lines and ":" in lines[0] and lines[0].split(":")[0] in ("title", "album"):
        k, v = lines.pop(0).split(":", 1)
        meta[k] = v.strip()
    paras = [p.strip() for p in "\n".join(lines).split("\n\n") if p.strip()]
    return meta.get("title", ""), [p[2:].strip() if p.startswith("# ") else p for p in paras]


def cut(text, limit=PART_MAX):
    """Long paragraphs are recorded in pieces, cut at sentence ends, so the free service never stops halfway."""
    if len(text) <= limit:
        return [text]
    out, cur = [], ""
    for s in re.split(r"(?<=[.?!…”’\"])\s+", text):
        while len(s) > limit:
            k = max(s.rfind(", ", 0, limit), s.rfind("; ", 0, limit), s.rfind(" ", 0, limit))
            if cur:
                out.append(cur); cur = ""
            out.append(s[:k + 1].strip()); s = s[k + 1:].strip()
        if cur and len(cur) + 1 + len(s) > limit:
            out.append(cur); cur = s
        else:
            cur = f"{cur} {s}".strip()
    if cur:
        out.append(cur)
    return out


def letters(s):
    return "".join(c.lower() for c in s if c.isalnum())


async def speak(text, voice, rate, proxy):
    import edge_tts
    for attempt in range(8):
        try:
            com = edge_tts.Communicate(text, voice, rate=rate, boundary="WordBoundary", proxy=proxy)
            audio, said = bytearray(), []
            async for ch in com.stream():
                if ch["type"] == "audio":
                    audio += ch["data"]
                elif ch["type"] == "WordBoundary":
                    said.append(ch["text"])
            # the service reports every word it spoke: all of the text must be there, or it stopped early
            if audio and len(letters(" ".join(said))) >= 0.98 * len(letters(text)):
                return bytes(audio)
            why = "stopped early"
        except Exception as e:
            why = f"{type(e).__name__}: {e}"
        print(f"    a part did not come through ({why}); trying again")
        await asyncio.sleep(5 * (attempt + 1))
    raise RuntimeError("a part could not be recorded after 8 tries")


async def record(paras, voice, rate, proxy):
    pieces = [p for para in paras for p in cut(para)]
    sem = asyncio.Semaphore(JOBS)

    async def one(p):
        async with sem:
            return await speak(p, voice, rate, proxy)
    return b"".join(await asyncio.gather(*(one(p) for p in pieces))), len(pieces)


def file_name(setname, stem, title):
    clean = re.sub(r"\s+", " ", re.sub(r'[\\/*?:"<>|]', "", title).replace("’", "'")).strip()
    num = stem.split("-")[0]
    return f"{SETS[setname]} - {clean}.mp3" if setname == "bonus-articles" else f"{SETS[setname]} - {num} - {clean}.mp3"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--out", default=str(HERE / "voices for ebooks and articles"))
    ap.add_argument("--voice", default=VOICE)
    ap.add_argument("--rate", default="+0%", help="speed, e.g. -10%% slower, +10%% faster")
    ap.add_argument("--sets", nargs="*", choices=list(SETS), help="only these sets")
    ap.add_argument("--only", nargs="*", help="only files whose name or title contains one of these words")
    ap.add_argument("--list", action="store_true", help="list what there is, record nothing")
    ap.add_argument("--voices", action="store_true", help="list the English voices, record nothing")
    ap.add_argument("--proxy", default=None, help=argparse.SUPPRESS)
    a = ap.parse_args()
    try:
        import edge_tts
        if os.environ.get("SSL_CERT_FILE"):        # networks that inspect HTTPS: use their certificate bundle
            import ssl, edge_tts.communicate as etc
            etc._SSL_CTX = ssl.create_default_context(cafile=os.environ["SSL_CERT_FILE"])
    except ImportError:
        sys.exit("First run:  pip install edge-tts")
    if a.voices:
        for v in sorted(asyncio.run(edge_tts.list_voices()), key=lambda v: v["ShortName"]):
            if v["Locale"].startswith("en-"):
                print(f'{v["ShortName"]:34} {v["Gender"]:7} {v["Locale"]}')
        return

    out = Path(a.out); out.mkdir(parents=True, exist_ok=True)
    mf = out / "voice_manifest.json"
    old = {r["id"]: r for r in json.loads(mf.read_text(encoding="utf-8"))} if mf.exists() else {}
    print("Reading the list of books and articles from GitHub…")
    items = catalogue(a.sets or list(SETS))
    rows, done, failed, t0 = [], 0, [], time.time()
    for setname, stem in items:
        text = get(RAW + f"{setname}/{stem}.txt").decode("utf-8")
        title, paras = parse(text)
        name = file_name(setname, stem, title)
        words = len(re.findall(r"\w+", " ".join(paras)))
        if a.only and not any(w.lower() in (stem + " " + title).lower() for w in a.only):
            if f"{setname}/{stem}" in old:
                rows.append({**old[f"{setname}/{stem}"], "status": "UNCHANGED"})
            continue
        if a.list:
            print(f"{SETS[setname]:30} {stem:28} {words / 160:5.0f} min  {title}")
            continue
        key = f"{setname}/{stem}"
        h = hashlib.sha1(f"{a.voice}|{a.rate}|{text}".encode()).hexdigest()
        prev = old.get(key)
        mp3 = out / name
        if prev and prev["content_hash"] == h and mp3.exists():
            rows.append({**prev, "status": "UNCHANGED"})
            continue
        print(f"Recording {name} ({words / 160:.0f} min)…", flush=True)
        try:
            audio, parts = asyncio.run(record(paras, a.voice, a.rate, a.proxy))
        except Exception as e:
            print(f"  FAILED: {e}")
            failed.append(name)
            if prev:
                rows.append(prev)
            continue
        if prev and prev.get("file") and prev["file"] != name:
            (out / prev["file"]).unlink(missing_ok=True)       # the title changed: the old file goes
        mp3.write_bytes(audio)
        minutes = len(audio) * 8 / 48000 / 60                    # the free voices send 48 kbit/s MP3
        rows.append({"id": key, "set": SETS[setname], "title": title, "file": name, "bytes": len(audio),
                     "minutes": round(minutes, 1), "voice": a.voice, "rate": a.rate, "content_hash": h,
                     "status": "UPDATED" if prev else "NEW", "updated": datetime.now().strftime("%Y-%m-%d %H:%M")})
        done += 1
        print(f"  done: {parts} parts, {minutes:.1f} min, {len(audio) / 1e6:.1f} MB", flush=True)
    if a.list:
        return
    keep = {r["id"] for r in rows}
    rows += [r for k, r in old.items() if k not in keep and a.sets and k.split("/")[0] not in a.sets]
    mf.write_text(json.dumps(rows, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    badge = {"NEW": "🟢 **NEW**", "UPDATED": "🟡 **UPDATED**", "UNCHANGED": "⚪ Unchanged"}
    lines = ["# Voice Audio Updates & Changelog Ledger", "", f"**Last run**: {datetime.now():%Y-%m-%d %H:%M}  ",
             f"**Files**: {len(rows)}, {sum(r.get('minutes', 0) for r in rows) / 60:.1f} hours  ",
             "**This run**: " + " | ".join(f"{badge[s]} {sum(r['status'] == s for r in rows)}" for s in badge), "",
             "| Status | Set | Title | File | Length | Updated |", "| :--- | :--- | :--- | :--- | ---: | :--- |"]
    lines += [f"| {badge[r['status']]} | {r['set']} | {r['title'].replace('|', '-')} | `{r['file']}` | "
              f"{r.get('minutes', 0):.0f} min | {r.get('updated', '')} |" for r in rows]
    (out / "AUDIO_CHANGELOG.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"\n{done} recorded, {len(rows) - done} unchanged, in {(time.time() - t0) / 60:.0f} min. Folder: {out}")
    if failed:
        print("Not recorded (run again to retry): " + ", ".join(failed))


if __name__ == "__main__":
    main()
