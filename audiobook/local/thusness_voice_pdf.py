#!/usr/bin/env python3
"""Thusness Voice (PDF): turn a PDF of the ebooks or articles into MP3 files read aloud, on your own computer.

Free: Microsoft's natural voices through edge-tts (no account, no key, no charge). Owner, 2026-11-07: "a separate
program where I can generate the voices read of my ebooks or articles. Show a progress bar during the generation so
that I know it's not hang. It must allow me to load a pdf from my readers for ebooks folder."

Window (double-click run-windows.bat, or:  python thusness_voice_pdf.py):
    1. Choose a PDF (for example from "Ebooks for readers" in Google Drive for desktop).
    2. Tick the chapters to record (taken from the PDF's bookmarks; "Contents" is left unticked).
    3. Pick the voice and speed, press Start. A progress bar and the time left show it is working.

Text mode (no window):
    python thusness_voice_pdf.py --cli "5 The Logic After Anatta.pdf"
    python thusness_voice_pdf.py --cli book.pdf --chapters 3-5 --voice en-US-AriaNeural --rate -10%
    python thusness_voice_pdf.py --cli book.pdf --list           # just show the chapters

One MP3 per chapter ("03 - Chapter title.mp3"), or one for the whole PDF when it has no bookmarks, in a folder
"<PDF name> - voice" beside the PDF (or the folder you choose). Needs Python 3.9+ and:  pip install edge-tts pypdf
"""
import argparse, asyncio, json, os, queue, re, subprocess, sys, threading, time, unicodedata
from collections import Counter
from pathlib import Path

VOICES = [  # (shown name, edge-tts voice)
    ("Jenny (American woman)", "en-US-JennyNeural"),
    ("Aria (American woman)", "en-US-AriaNeural"),
    ("Ava (American woman, warm)", "en-US-AvaMultilingualNeural"),
    ("Emma (American woman, bright)", "en-US-EmmaMultilingualNeural"),
    ("Andrew (American man, warm)", "en-US-AndrewMultilingualNeural"),
    ("Brian (American man, relaxed)", "en-US-BrianMultilingualNeural"),
    ("Sonia (British woman)", "en-GB-SoniaNeural"),
    ("Ryan (British man)", "en-GB-RyanNeural"),
    ("Natasha (Australian woman)", "en-AU-NatashaNeural"),
]
PART_MAX, JOBS = 1800, 4
SKIP_TITLES = re.compile(r"^(contents|table of contents|also by|copyright|licen[cs]e|glossary|references|bibliography|title page)\b", re.I)


# ---------------------------------------------------------------- reading the PDF
def load_pdf(path):
    """Return (chapters, total_pages); each chapter is (title, text). Bookmarks give the chapters."""
    from pypdf import PdfReader
    r = PdfReader(str(path))
    pages = [unicodedata.normalize("NFKC", p.extract_text() or "") for p in r.pages]
    pages = strip_running_lines(pages)
    marks = []

    def walk(items, depth=0):
        for it in items:
            if isinstance(it, list):
                walk(it, depth + 1)
            else:
                try:
                    marks.append((it.title.strip(), r.get_destination_page_number(it), depth))
                except Exception:
                    pass
    try:
        walk(r.outline)
    except Exception:
        marks = []
    # every bookmark level counts: a Part becomes a short opening of its own, then its chapters
    seen, uniq = set(), []
    for t, p, d in marks:
        if (t, p) not in seen and 0 <= p < len(pages):
            seen.add((t, p)); uniq.append((t, p))
    marks = uniq
    if not marks:
        return [(Path(path).stem, clean(" \n".join(pages)))], len(pages)
    chapters = []
    starts = []
    for title, p in marks:
        starts.append((p, find_title(pages[p], title), title))
    starts.sort(key=lambda x: (x[0], x[1]))
    for i, (p, k, title) in enumerate(starts):
        q, j = (starts[i + 1][0], starts[i + 1][1]) if i + 1 < len(starts) else (len(pages) - 1, None)
        if q == p:
            text = pages[p][k:j]
        else:
            text = pages[p][k:] + "\n" + "\n".join(pages[p + 1:q]) + "\n" + pages[q][:j if j is not None else None]
        chapters.append((title, clean(text)))
    front = clean("\n".join(pages[:starts[0][0]]) + "\n" + pages[starts[0][0]][:starts[0][1]])
    if len(front) > 200:
        chapters.insert(0, ("Title page", front))
    return [c for c in chapters if c[1].strip()], len(pages)


def find_title(page, title):
    """Where a bookmarked title starts on its page (the start of the page if not found)."""
    words = re.findall(r"\w+", title)[:4]
    if not words:
        return 0
    m = re.search(r"\W+".join(map(re.escape, words)), page, re.I)
    return m.start() if m else 0


def strip_running_lines(pages):
    """Drop page numbers and running titles: short lines that come back, with only the number changed, on many pages."""
    def key(line):
        return re.sub(r"\d+", "#", line.strip().lower())
    edges = Counter()
    for p in pages:
        lines = [l for l in p.split("\n") if l.strip()]
        for l in set(lines[:2] + lines[-2:]):
            edges[key(l)] += 1
    common = {k for k, n in edges.items() if n >= max(3, len(pages) // 4) and len(k) < 90}
    out = []
    for p in pages:
        lines = p.split("\n")
        keep = [l for i, l in enumerate(lines)
                if not (re.fullmatch(r"\s*\d+(\s*/\s*\d+)?\s*", l) or
                        ((i < 2 or i >= len(lines) - 2) and key(l) in common))]
        out.append("\n".join(keep))
    return out


def clean(text):
    text = re.sub(r"[‐­]\n", "", text)              # words broken at the end of a line
    text = re.sub(r"https?://\S+", "", text)
    text = re.sub(r"\s*\n\s*", " ", text)
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text.strip()


def pieces(text, limit=PART_MAX):
    """Cut the text at sentence ends into parts the free service reads reliably."""
    out, cur = [], ""
    for s in re.split(r"(?<=[.?!…”’\"])\s+", text):
        while len(s) > limit:
            k = max(s.rfind(", ", 0, limit), s.rfind("; ", 0, limit), s.rfind(" ", 0, limit))
            k = k if k > 0 else limit
            if cur:
                out.append(cur); cur = ""
            out.append(s[:k + 1].strip()); s = s[k + 1:].strip()
        if cur and len(cur) + 1 + len(s) > limit:
            out.append(cur); cur = s
        else:
            cur = f"{cur} {s}".strip()
    if cur:
        out.append(cur)
    return [p for p in out if re.search(r"\w", p)]


def safe_name(s):
    s = re.sub(r'[\\/*?:"<>|]', "", s).replace("’", "'")
    return re.sub(r"\s+", " ", s).strip()[:90] or "part"


# ---------------------------------------------------------------- speaking
def letters(s):
    return "".join(c.lower() for c in s if c.isalnum())


async def speak(text, voice, rate, proxy, stop):
    import edge_tts
    why = ""
    for attempt in range(8):
        if stop.is_set():
            raise RuntimeError("stopped")
        try:
            com = edge_tts.Communicate(text, voice, rate=rate, boundary="WordBoundary", proxy=proxy)
            audio, said, marks = bytearray(), [], []
            async for ch in com.stream():
                if ch["type"] == "audio":
                    audio += ch["data"]
                elif ch["type"] == "WordBoundary":
                    said.append(ch["text"])
                    marks.append(ch["offset"] / 1e7)     # seconds from the start of this part
            # the service names every word it spoke: all of the text must be there, or it stopped early
            if audio and len(letters(" ".join(said))) >= 0.97 * len(letters(text)):
                return bytes(audio), marks
            why = "stopped early"
        except Exception as e:
            why = f"{type(e).__name__}: {e}"
        await asyncio.sleep(4 * (attempt + 1))
    raise RuntimeError(f"a part could not be recorded ({why})")


WORD = re.compile(r"\w+(?:['’\-]\w+)*")


def split_sentences(text):
    return [x for x in re.split(r"(?<=[.?!…])[\"”’)]*\s+(?=[A-Z\"“‘(\d])", text) if x.strip()]


def timings(parts, results):
    """[[start second, sentence], …] for a chapter, from the moment the voice reached each sentence's first word."""
    out, base = [], 0.0
    for text, (audio, marks) in zip(parts, results):
        k = 0
        for sent in split_sentences(text):
            t = marks[min(k, len(marks) - 1)] if marks else 0.0
            out.append([round(base + t, 2), sent.strip()])
            k += len(WORD.findall(sent))
        base += len(audio) * 8 / 48000                 # the free voices send 48 kbit/s MP3
    return out


def run(chapters, out_dir, voice, rate, report, stop, proxy=None):
    """Record the chosen chapters. report(done_chars, total_chars, message) is called as it goes."""
    out_dir.mkdir(parents=True, exist_ok=True)
    jobs = [(i, t, pieces(x)) for i, t, x in chapters]
    total = sum(len(p) for _, _, ps in jobs for p in ps) or 1
    done, made, failed = 0, [], []

    async def chapter(i, title, ps):
        nonlocal done
        sem = asyncio.Semaphore(JOBS)

        async def one(p):
            nonlocal done
            async with sem:
                a = await speak(p, voice, rate, proxy, stop)
                done += len(p)
                report(done, total, f"Chapter {i}: {title}")
                return a
        results = await asyncio.gather(*(one(p) for p in ps))
        return b"".join(a for a, _ in results), timings(ps, results)

    for n, (i, title, ps) in enumerate(jobs, 1):
        if stop.is_set():
            break
        report(done, total, f"Chapter {i}: {title} ({n} of {len(jobs)})")
        try:
            audio, sentences = asyncio.run(chapter(i, title, ps))
        except Exception as e:
            if stop.is_set():
                break
            failed.append(title)
            report(done, total, f"Not recorded: {title} ({e}). Run it again later.")
            continue
        f = out_dir / f"{i:02d} - {safe_name(title)}.mp3"
        f.write_bytes(audio)
        # the text, sentence by sentence with the second each one starts, so a player can show it and follow along
        f.with_suffix(".json").write_text(json.dumps({"title": title, "voice": voice, "sentences": sentences},
                                                     ensure_ascii=False), encoding="utf-8")
        made.append(f)
    return made, failed


def eta(start, done, total):
    if done <= 0:
        return "working out the time left…"
    left = (time.time() - start) * (total - done) / done
    return f"about {int(left // 60)} min {int(left % 60):02d} s left" if left >= 60 else f"about {int(left)} s left"


# ---------------------------------------------------------------- text mode
def cli(a):
    chapters, n = load_pdf(a.pdf)
    print(f"{Path(a.pdf).name}: {n} pages, {len(chapters)} chapters")
    for i, (t, x) in enumerate(chapters, 1):
        print(f"  {i:2d}. {t}  ({len(x.split()) / 160:.0f} min)")
    if a.list:
        return
    chosen = set(range(1, len(chapters) + 1))
    if a.chapters:
        chosen = set()
        for part in a.chapters.split(","):
            lo, _, hi = part.partition("-")
            chosen |= set(range(int(lo), int(hi or lo) + 1))
    else:
        chosen = {i for i, (t, _) in enumerate(chapters, 1) if not SKIP_TITLES.match(t)}
    picked = [(i, t, x) for i, (t, x) in enumerate(chapters, 1) if i in chosen]
    out = Path(a.out) if a.out else Path(a.pdf).with_name(Path(a.pdf).stem + " - voice")
    start, stop = time.time(), threading.Event()

    def report(done, total, msg):
        w = 30
        f = int(w * done / total)
        sys.stdout.write(f"\r[{'#' * f}{'.' * (w - f)}] {100 * done / total:5.1f}%  {eta(start, done, total)}  ")
        sys.stdout.flush()
    try:
        made, failed = run(picked, out, a.voice, a.rate, report, stop, a.proxy)
    except KeyboardInterrupt:
        stop.set(); print("\nStopped."); return
    print(f"\nDone: {len(made)} files in {out}" + (f"; not recorded: {', '.join(failed)}" if failed else ""))


# ---------------------------------------------------------------- window
def gui():
    import tkinter as tk
    from tkinter import ttk, filedialog, messagebox
    root = tk.Tk()
    root.title("Thusness Voice: read a PDF aloud")
    root.geometry("720x620")
    st = {"pdf": None, "chapters": [], "out": None, "stop": threading.Event(), "busy": False}
    q = queue.Queue()
    pad = {"padx": 12, "pady": 6}

    top = ttk.Frame(root); top.pack(fill="x", **pad)
    ttk.Button(top, text="1. Choose a PDF…", command=lambda: choose()).pack(side="left")
    pdf_lbl = ttk.Label(top, text="No PDF chosen yet", foreground="#555"); pdf_lbl.pack(side="left", padx=10)

    ttk.Label(root, text="2. Chapters to record (click to tick or untick):").pack(anchor="w", **pad)
    box = tk.Listbox(root, selectmode="multiple", height=14, activestyle="none", exportselection=False)
    box.pack(fill="both", expand=True, padx=12)

    row = ttk.Frame(root); row.pack(fill="x", **pad)
    ttk.Label(row, text="3. Voice").pack(side="left")
    voice = ttk.Combobox(row, state="readonly", width=30, values=[v[0] for v in VOICES]); voice.current(0)
    voice.pack(side="left", padx=6)
    ttk.Label(row, text="Speed").pack(side="left", padx=(12, 0))
    speed = ttk.Combobox(row, state="readonly", width=8, values=["-20%", "-10%", "+0%", "+10%", "+20%"]); speed.set("+0%")
    speed.pack(side="left", padx=6)

    row2 = ttk.Frame(root); row2.pack(fill="x", **pad)
    out_lbl = ttk.Label(row2, text="Saves to: (beside the PDF)", foreground="#555")
    ttk.Button(row2, text="Change folder…", command=lambda: pick_out()).pack(side="left")
    out_lbl.pack(side="left", padx=10)

    bar = ttk.Progressbar(root, maximum=1000); bar.pack(fill="x", padx=12, pady=(10, 2))
    status = ttk.Label(root, text="Ready."); status.pack(anchor="w", padx=12)
    left = ttk.Label(root, text="", foreground="#555"); left.pack(anchor="w", padx=12)

    btns = ttk.Frame(root); btns.pack(fill="x", **pad)
    start_b = ttk.Button(btns, text="Start", command=lambda: start()); start_b.pack(side="left")
    stop_b = ttk.Button(btns, text="Stop", state="disabled", command=lambda: st["stop"].set()); stop_b.pack(side="left", padx=6)
    open_b = ttk.Button(btns, text="Open the folder", state="disabled", command=lambda: open_folder()); open_b.pack(side="right")

    def choose():
        f = filedialog.askopenfilename(title="Choose a PDF", filetypes=[("PDF", "*.pdf")])
        if not f:
            return
        status.config(text="Reading the PDF…"); root.update()
        try:
            chapters, n = load_pdf(f)
        except Exception as e:
            messagebox.showerror("Could not read the PDF", str(e)); status.config(text="Ready."); return
        st.update(pdf=Path(f), chapters=chapters)
        pdf_lbl.config(text=f"{Path(f).name}  ({n} pages, {len(chapters)} chapters)")
        box.delete(0, "end")
        for i, (t, x) in enumerate(chapters, 1):
            box.insert("end", f"{i:2d}.  {t}   ({max(1, round(len(x.split()) / 160))} min)")
            if not SKIP_TITLES.match(t):
                box.selection_set(i - 1)
        if not st["out"]:
            out_lbl.config(text=f"Saves to: {Path(f).with_name(Path(f).stem + ' - voice')}")
        status.config(text="Untick anything you don't want, then press Start.")

    def pick_out():
        d = filedialog.askdirectory(title="Where to save the MP3s")
        if d:
            st["out"] = Path(d); out_lbl.config(text=f"Saves to: {d}")

    def out_dir():
        return st["out"] or st["pdf"].with_name(st["pdf"].stem + " - voice")

    def open_folder():
        d = str(out_dir())
        if sys.platform.startswith("win"):
            os.startfile(d)
        else:
            subprocess.Popen(["open" if sys.platform == "darwin" else "xdg-open", d])

    def start():
        if not st["pdf"]:
            messagebox.showinfo("Choose a PDF first", "Press '1. Choose a PDF…' first."); return
        sel = box.curselection()
        if not sel:
            messagebox.showinfo("Nothing ticked", "Tick at least one chapter."); return
        picked = [(i + 1, *st["chapters"][i]) for i in sel]
        st["stop"].clear(); st["busy"] = True; st["t0"] = time.time()
        start_b.config(state="disabled"); stop_b.config(state="normal"); open_b.config(state="disabled")
        bar["value"] = 0; status.config(text="Starting…")
        v = dict(VOICES)[voice.get()]

        def work():
            try:
                made, failed = run(picked, out_dir(), v, speed.get(),
                                   lambda d, t, m: q.put(("progress", d, t, m)), st["stop"])
                q.put(("done", made, failed))
            except Exception as e:
                q.put(("error", str(e)))
        threading.Thread(target=work, daemon=True).start()

    def poll():
        try:
            while True:
                m = q.get_nowait()
                if m[0] == "progress":
                    _, d, t, msg = m
                    bar["value"] = 1000 * d / t
                    status.config(text=f"{msg}   {100 * d / t:.0f}%")
                    left.config(text=eta(st["t0"], d, t))
                else:
                    st["busy"] = False
                    start_b.config(state="normal"); stop_b.config(state="disabled"); open_b.config(state="normal")
                    if m[0] == "error":
                        status.config(text=f"Stopped: {m[1]}"); left.config(text="")
                    else:
                        made, failed = m[1], m[2]
                        stopped = st["stop"].is_set()
                        if not stopped:
                            bar["value"] = 1000
                        status.config(text=("Stopped. " if stopped else "Finished. ") + f"{len(made)} MP3 files saved."
                                      + (f" Not recorded: {', '.join(failed)} (press Start again for those)." if failed else ""))
                        left.config(text=str(out_dir()))
        except queue.Empty:
            pass
        root.after(200, poll)

    def closing():
        if st["busy"] and not messagebox.askyesno("Still recording", "Recording is still running. Stop and close?"):
            return
        st["stop"].set(); root.destroy()
    root.protocol("WM_DELETE_WINDOW", closing)
    poll()
    root.mainloop()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--cli", dest="pdf", help="text mode: the PDF to read")
    ap.add_argument("--chapters", help="text mode: e.g. 1-3,7 (default: all but Contents)")
    ap.add_argument("--voice", default=VOICES[0][1])
    ap.add_argument("--rate", default="+0%")
    ap.add_argument("--out", help="folder for the MP3s")
    ap.add_argument("--list", action="store_true", help="text mode: list the chapters only")
    ap.add_argument("--proxy", help=argparse.SUPPRESS)
    a = ap.parse_args()
    import importlib.util
    missing = [m for m in ("edge_tts", "pypdf") if not importlib.util.find_spec(m)]
    if missing:
        sys.exit("First run:  pip install edge-tts pypdf")
    if os.environ.get("SSL_CERT_FILE"):        # networks that inspect HTTPS: use their certificate bundle
        import ssl, edge_tts.communicate as etc
        etc._SSL_CTX = ssl.create_default_context(cafile=os.environ["SSL_CERT_FILE"])
    cli(a) if a.pdf else gui()


if __name__ == "__main__":
    main()
