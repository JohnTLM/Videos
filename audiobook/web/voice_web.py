#!/usr/bin/env python3
"""Thusness Voice on the server: a private web page that reads an ebook or article PDF aloud into MP3s.

Owner, 2026-11-07: "Y not install it at my Google cloud server? Then when owner logs in, I can use the same website
page to load the program." Then: "Google sign-in, my email only" and "Pick from Drive, save to Drive".

    https://atr-passerby.com/voice/      (nginx: server/nginx/thusness-voice.conf in thusness-website)

- Sign in with Google; only the owner gets in: the address the server's own Drive sign-in belongs to (so no address is
  written anywhere in this repository). The ID token is checked with Google's keys; then a signed cookie (30 days).
- Pick a PDF from "Ebooks for readers" (and its subfolders), or upload one. Chapters come from its bookmarks.
- Voice, speed, Start: a progress bar with the chapter and the time left. One job at a time; Stop stops it.
- Each chapter's MP3 goes to Drive, "Voice recordings › <PDF name>" (private, top of My Drive; made if missing).
- Free: Microsoft's voices through edge-tts; the reading engine is audiobook/local/thusness_voice_pdf.py.

Settings, in /etc/thusness-voice.env (systemd EnvironmentFile; never in git):
    GOOGLE_CLIENT_ID   the "Web application" OAuth client id, JavaScript origin https://atr-passerby.com
    SESSION_KEY        a long random string made on the server (openssl rand -hex 32)
    READERS_FOLDER     Drive id of "Ebooks for readers" (1A4Krqy0-KAzwTEGN7jEmb6CyyHfWZ60f)
    PORT               default 7803 (listens on 127.0.0.1 only)
For a local test without Google: VOICE_DEV=1 VOICE_DEV_PDFS=<folder> VOICE_DEV_OUT=<folder> python voice_web.py
"""
import hashlib, hmac, json, os, re, shutil, sys, threading, time, uuid
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent / "local"))
sys.path.insert(0, str(HERE.parent.parent / "tools" / "publish"))
import thusness_voice_pdf as engine  # noqa: E402

DEV = os.environ.get("VOICE_DEV") == "1"
CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "")
KEY = (os.environ.get("SESSION_KEY") or ("dev" if DEV else "")).encode()
READERS = os.environ.get("READERS_FOLDER", "1A4Krqy0-KAzwTEGN7jEmb6CyyHfWZ60f")
OUT_NAME = "Voice recordings"
WORK = Path(os.environ.get("VOICE_WORK", Path.home() / "voice-work"))
MAX_UPLOAD = 200 * 1024 * 1024
COOKIE = "tv_session"
lock = threading.Lock()
docs = {}            # token -> {"name", "path", "chapters"}
job = {"state": "idle"}
_drive = None
_owner = None


# ------------------------------------------------------------------ Google
def drive():
    global _drive
    if _drive is None:
        from gauth import service
        _drive = service("drive", "v3")
    return _drive


def owner_email():
    global _owner
    if _owner is None:
        _owner = drive().about().get(fields="user(emailAddress)").execute()["user"]["emailAddress"].lower()
    return _owner


def check_google(credential):
    from google.oauth2 import id_token
    from google.auth.transport import requests as greq
    info = id_token.verify_oauth2_token(credential, greq.Request(), CLIENT_ID)
    return info.get("email_verified") and info.get("email", "").lower() == owner_email()


def list_pdfs():
    if DEV:
        d = Path(os.environ["VOICE_DEV_PDFS"])
        return [{"id": "dev:" + p.name, "name": p.name, "folder": "", "size": p.stat().st_size} for p in sorted(d.glob("*.pdf"))]
    d, out = drive(), []
    folders = [(READERS, "")] + [(f["id"], f["name"]) for f in d.files().list(
        q=f"'{READERS}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
        fields="files(id,name)", pageSize=100).execute()["files"]]
    for fid, fname in folders:
        r = d.files().list(q=f"'{fid}' in parents and mimeType = 'application/pdf' and trashed = false",
                           fields="files(id,name,size)", orderBy="name", pageSize=200).execute()
        out += [{"id": f["id"], "name": f["name"], "folder": fname, "size": int(f.get("size", 0))} for f in r["files"]]
    return out


def fetch_pdf(file_id, dest):
    if DEV:
        shutil.copy(Path(os.environ["VOICE_DEV_PDFS"]) / file_id[4:], dest); return
    from googleapiclient.http import MediaIoBaseDownload
    with open(dest, "wb") as f:
        dl = MediaIoBaseDownload(f, drive().files().get_media(fileId=file_id), chunksize=16 * 1024 * 1024)
        done = False
        while not done:
            _, done = dl.next_chunk()


def drive_folder(name, parent=None):
    if DEV:
        p = Path(parent or os.environ["VOICE_DEV_OUT"]) / name; p.mkdir(parents=True, exist_ok=True); return str(p)
    esc = name.replace("\\", "\\\\").replace("'", "\\'")
    q = f"name = '{esc}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false and " + \
        (f"'{parent}' in parents" if parent else "'root' in parents")
    found = drive().files().list(q=q, fields="files(id)").execute()["files"]
    if found:
        return found[0]["id"]
    body = {"name": name, "mimeType": "application/vnd.google-apps.folder", **({"parents": [parent]} if parent else {})}
    return drive().files().create(body=body, fields="id").execute()["id"]


def upload(path, folder):
    if DEV:
        shutil.copy(path, Path(folder) / path.name); return
    from googleapiclient.http import MediaFileUpload
    esc = path.name.replace("\\", "\\\\").replace("'", "\\'")
    same = drive().files().list(q=f"'{folder}' in parents and name = '{esc}' and trashed = false",
                                fields="files(id)").execute()["files"]
    media = MediaFileUpload(str(path), mimetype="application/json" if path.suffix == ".json" else "audio/mpeg", resumable=True)
    if same:
        drive().files().update(fileId=same[0]["id"], media_body=media).execute()
    else:
        drive().files().create(body={"name": path.name, "parents": [folder]}, media_body=media).execute()


# ------------------------------------------------------------------ listen and read
READERS_VOICES = "voices for ebooks and articles"     # the 142 recordings for invited readers (Videos audiobook/)
AUDIOBOOK = HERE.parent                                 # ~/videos/audiobook: text/ and out/voice_manifest.json
allowed = set()                                        # folder ids the page may play from (filled by library())


def library():
    """The folders that hold recordings: each PDF's folder under Voice recordings, then the readers' recordings."""
    if DEV:
        root = Path(os.environ["VOICE_DEV_OUT"])
        out = [{"id": str(d), "name": d.name} for d in sorted(root.rglob("*")) if d.is_dir() and any(d.glob("*.mp3"))]
        allowed.update(x["id"] for x in out)
        return out
    d, out = drive(), []
    top = drive_folder(OUT_NAME)
    for f in d.files().list(q=f"'{top}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
                            fields="files(id,name)", orderBy="modifiedTime desc", pageSize=200).execute()["files"]:
        out.append({"id": f["id"], "name": f["name"]})
    for f in d.files().list(q=f"name = '{READERS_VOICES}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
                            fields="files(id)").execute()["files"][:1]:
        out.append({"id": f["id"], "name": "The books and articles (Jenny, for invited readers)"})
    allowed.update(x["id"] for x in out)
    return out


def collection(folder):
    if folder not in allowed:
        library()
    if folder not in allowed:
        raise ValueError("Not one of your recording folders.")
    if DEV:
        files = [{"id": str(p), "name": p.name} for p in sorted(Path(folder).iterdir())]
    else:
        files, tok = [], None
        while True:
            r = drive().files().list(q=f"'{folder}' in parents and trashed = false", fields="nextPageToken,files(id,name)",
                                     orderBy="name", pageSize=1000, pageToken=tok).execute()
            files += r["files"]; tok = r.get("nextPageToken")
            if not tok:
                break
    texts = {f["name"][:-5]: f["id"] for f in files if f["name"].endswith(".json")}
    return [{"id": f["id"], "name": f["name"][:-4], "text": texts.get(f["name"][:-4])}
            for f in files if f["name"].lower().endswith(".mp3")]


def read_drive(file_id):
    if DEV:
        return Path(file_id).read_bytes()
    return drive().files().get_media(fileId=file_id).execute()


def plain_sentences(text):
    return [x.strip() for x in engine.split_sentences(text) if x.strip()]


LABELS = {"1-substrateless-world": "Book 1 - Substrateless World", "2-anatta-to-emptiness": "Book 2 - Anatta to Emptiness",
          "3-nagarjunas-middle-way": "Book 3 - Nagarjuna Middle Way", "4-observer-and-presence": "Book 4 - Observer and Presence",
          "5-the-logic-after-anatta": "Book 5 - Logic After Anatta", "explorations": "Explorations", "zoom-ins": "Zoom-ins",
          "the-canon-view": "Canon View", "bonus-articles": "Article"}   # as in audiobook/manifest.py


def reader_name(setname, stem, title):
    clean = re.sub(r"\s+", " ", re.sub(r'[\\/*?:"<>|]', "", title).replace("’", "'")).strip()
    return f"{LABELS[setname]} - {clean}" if setname == "bonus-articles" else f"{LABELS[setname]} - {stem.split('-')[0]} - {clean}"


def unsay(s):
    """The readers' text is spelled for the voice (Madhyamaka as Mahd-yah-mah-kah); put the words back for reading."""
    f = AUDIOBOOK.parent / "tools" / "pronunciation.json"
    back = {}
    if f.exists():
        for k, v in json.loads(f.read_text(encoding="utf-8")).items():
            back.setdefault(v, k)
    for v in sorted(back, key=len, reverse=True):
        s = s.replace(v, back[v])
    return s


def reader_text(mp3_id, name):
    """The text file of one of the readers' recordings: by the manifest, else by its file name."""
    mf = AUDIOBOOK / "out" / "voice_manifest.json"
    if mf.exists():
        for r in json.loads(mf.read_text(encoding="utf-8")):
            if r.get("drive_id") == mp3_id or r.get("drive_name", "")[:-4] == name:
                t = (AUDIOBOOK / "text" / r["id"]).with_suffix(".txt")
                if t.exists():
                    return t
    for t in sorted((AUDIOBOOK / "text").glob("*/*.txt")):
        title = t.read_text(encoding="utf-8").split("\n", 1)[0].removeprefix("title:").strip()
        if t.parent.name in LABELS and reader_name(t.parent.name, t.stem, title) == name:
            return t
    return None


def text_for(mp3_id, name, text_id):
    """The sentences of a recording: with their start times when the recording made them, else without (the page
    then follows along by length)."""
    if text_id:
        d = json.loads(read_drive(text_id))
        return {"timed": True, "sentences": d["sentences"]}
    t = reader_text(mp3_id, name)                          # the readers' recordings: their text is in audiobook/text/
    if t:
        lines = unsay(t.read_text(encoding="utf-8")).split("\n")
        while lines and lines[0].split(":")[0] in ("title", "album"):
            lines.pop(0)
        sents = []
        for para in "\n".join(lines).split("\n\n"):
            para = para.strip().removeprefix("# ")
            if para:
                sents += [[None, x] for x in plain_sentences(para)]
        return {"timed": False, "sentences": sents}
    return {"timed": False, "sentences": [], "note": "No text was kept with this recording."}


def stream_audio(handler, file_id):
    """Send an MP3 from Drive to the player, passing through the part it asks for, so it can skip ahead."""
    rng = handler.headers.get("Range")
    if DEV:
        data = Path(file_id).read_bytes()
        m = re.match(r"bytes=(\d+)-(\d*)", rng or "")
        a, z = (int(m[1]), int(m[2] or len(data) - 1)) if m else (0, len(data) - 1)
        handler.send_response(206 if m else 200); handler.send_header("Content-Type", "audio/mpeg")
        handler.send_header("Accept-Ranges", "bytes")
        if m:
            handler.send_header("Content-Range", f"bytes {a}-{z}/{len(data)}")
        handler.send_header("Content-Length", str(z - a + 1)); handler.end_headers(); handler.wfile.write(data[a:z + 1]); return
    meta = drive().files().get(fileId=file_id, fields="parents,mimeType").execute()
    if not set(meta.get("parents", [])) & allowed:
        library()
    if not set(meta.get("parents", [])) & allowed or meta.get("mimeType") != "audio/mpeg":
        return handler.send(403, {"error": "Not one of your recordings."})
    from google.auth.transport.requests import AuthorizedSession
    from gauth import credentials
    r = AuthorizedSession(credentials()).get(f"https://www.googleapis.com/drive/v3/files/{file_id}?alt=media",
                                             headers={"Range": rng} if rng else {}, stream=True, timeout=60)
    handler.send_response(r.status_code)
    for k in ("Content-Type", "Content-Length", "Content-Range"):
        if k in r.headers:
            handler.send_header(k, r.headers[k])
    handler.send_header("Accept-Ranges", "bytes")
    handler.send_header("Cache-Control", "private, max-age=3600")
    handler.end_headers()
    try:
        for chunk in r.iter_content(256 * 1024):
            handler.wfile.write(chunk)
    except (BrokenPipeError, ConnectionResetError):
        pass
    finally:
        r.close()


# ------------------------------------------------------------------ the job
def start_job(doc, picks, voice, rate):
    with lock:
        if job.get("state") == "running":
            raise ValueError("A recording is already running. Wait for it, or press Stop.")
        stop = threading.Event()
        job.clear()
        job.update(state="running", done=0, total=1, message="Starting…", started=time.time(), files=[],
                   failed=[], name=doc["name"], stop=stop, folder_link=None)

    def work():
        try:
            folder = drive_folder(re.sub(r"\.pdf$", "", doc["name"], flags=re.I), drive_folder(OUT_NAME))
            job["folder_link"] = folder if DEV else f"https://drive.google.com/drive/folders/{folder}"
            job["folder_id"] = folder
            out = WORK / "out" / uuid.uuid4().hex
            chosen = [(i, *doc["chapters"][i - 1]) for i in picks]

            def report(done, total, msg):
                job.update(done=done, total=total, message=msg)
            # record a chapter, then send it to Drive at once, so a Stop keeps what is done
            tot, base = sum(len(x) for *_, x in chosen) or 1, 0
            for i, title, text in chosen:
                if stop.is_set():
                    break
                made, failed = engine.run([(i, title, text)], out, voice, rate,
                                          lambda d, t, m, b=base, n=len(text): report(b + d * n / max(t, 1), tot, m),
                                          stop, os.environ.get("VOICE_PROXY"))
                base += len(text)
                for f in made:
                    job["message"] = f"Saving to Drive: {f.name}"
                    upload(f, folder)
                    if f.with_suffix(".json").exists():       # the text with its timings, for Listen and read
                        upload(f.with_suffix(".json"), folder)
                        f.with_suffix(".json").unlink()
                    job["files"].append(f.name)
                    f.unlink()
                job["failed"] += failed
            shutil.rmtree(out, ignore_errors=True)
            job["state"] = "stopped" if stop.is_set() else "finished"
            job["message"] = ("Stopped. " if stop.is_set() else "Finished. ") + f"{len(job['files'])} MP3 files in Drive."
        except Exception as e:
            job.update(state="error", message=f"Something went wrong: {e}")
    threading.Thread(target=work, daemon=True).start()


def job_view():
    j = {k: v for k, v in job.items() if k not in ("stop",)}
    if j.get("state") == "running":
        j["eta"] = engine.eta(j["started"], j["done"], j["total"])
    return j


# ------------------------------------------------------------------ web
def signed(exp):
    return f"{exp}.{hmac.new(KEY, str(exp).encode(), hashlib.sha256).hexdigest()}"


def valid(cookie):
    try:
        exp, sig = cookie.split(".", 1)
        return hmac.compare_digest(signed(int(exp)), cookie) and int(exp) > time.time()
    except Exception:
        return False


class H(BaseHTTPRequestHandler):
    server_version = "ThusnessVoice"

    def log_message(self, *a):
        pass

    def send(self, code, body=b"", ctype="application/json", headers=()):
        if isinstance(body, (dict, list)):
            body = json.dumps(body).encode()
        elif isinstance(body, str):
            body = body.encode()
        self.send_response(code)
        self.send_header("Content-Type", ctype + ("; charset=utf-8" if "json" in ctype or "html" in ctype else ""))
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Frame-Options", "DENY")
        for k, v in headers:
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def authed(self):
        c = SimpleCookie(self.headers.get("Cookie", ""))
        return COOKIE in c and valid(c[COOKIE].value)

    def body(self, limit=1 << 20):
        n = int(self.headers.get("Content-Length", 0))
        if n > limit:
            raise ValueError("too large")
        return self.rfile.read(n)

    def route(self):
        return re.sub(r"^/voice", "", self.path.split("?", 1)[0]) or "/"

    def do_GET(self):
        r = self.route()
        if r in ("/", "/index.html"):
            return self.send(200, PAGE.replace("{{CLIENT_ID}}", CLIENT_ID).replace("{{AUTHED}}", "true" if self.authed() else "false")
                             .replace("{{VOICES}}", json.dumps(engine.VOICES)), "text/html")
        if not self.authed():
            return self.send(401, {"error": "Please sign in."})
        if r == "/api/pdfs":
            return self.send(200, list_pdfs())
        if r == "/api/job":
            return self.send(200, job_view())
        from urllib.parse import parse_qs, urlparse
        q = {k: v[0] for k, v in parse_qs(urlparse(self.path).query).items()}
        try:
            if r == "/api/library":
                return self.send(200, library())
            if r == "/api/collection":
                return self.send(200, collection(q.get("id", "")))
            if r == "/api/text":
                return self.send(200, text_for(q.get("id", ""), q.get("name", ""), q.get("text") or None))
            if r == "/api/audio":
                return stream_audio(self, q.get("id", ""))
        except ValueError as e:
            return self.send(400, {"error": str(e)})
        except Exception as e:
            return self.send(500, {"error": f"{type(e).__name__}: {e}"})
        self.send(404, {"error": "not found"})

    def do_POST(self):
        r = self.route()
        if self.headers.get("X-Thusness") != "1":          # a page on another site cannot send this header
            return self.send(403, {"error": "refused"})
        try:
            if r == "/api/login":
                cred = json.loads(self.body()).get("credential", "")
                ok = DEV or (CLIENT_ID and check_google(cred))
                if not ok:
                    return self.send(403, {"error": "This page is only for the site's owner."})
                exp = int(time.time()) + 30 * 86400
                return self.send(200, {"ok": True}, headers=[("Set-Cookie",
                                 f"{COOKIE}={signed(exp)}; Path=/voice; Max-Age={30 * 86400}; HttpOnly; Secure; SameSite=Lax")])
            if r == "/api/logout":
                return self.send(200, {"ok": True}, headers=[("Set-Cookie", f"{COOKIE}=; Path=/voice; Max-Age=0; HttpOnly; Secure; SameSite=Lax")])
            if not self.authed():
                return self.send(401, {"error": "Please sign in."})
            if r == "/api/open":
                a = json.loads(self.body())
                WORK.mkdir(parents=True, exist_ok=True)
                tok = uuid.uuid4().hex
                path = WORK / f"{tok}.pdf"
                if a.get("upload"):
                    path = WORK / f"{a['upload']}.pdf"
                    name = docs.get(a["upload"], {}).get("name", "upload.pdf")
                else:
                    fetch_pdf(a["id"], path); name = a.get("name", "document.pdf")
                chapters, pages = engine.load_pdf(path, name)
                docs[tok] = {"name": name, "path": path, "chapters": chapters}
                return self.send(200, {"doc": tok, "name": name, "pages": pages, "chapters": [
                    {"n": i, "title": t, "min": max(1, round(len(x.split()) / 160)), "tick": not engine.SKIP_TITLES.match(t)}
                    for i, (t, x) in enumerate(chapters, 1)]})
            if r == "/api/upload":
                data = self.body(MAX_UPLOAD)
                if not data.startswith(b"%PDF"):
                    return self.send(400, {"error": "That is not a PDF."})
                WORK.mkdir(parents=True, exist_ok=True)
                tok = uuid.uuid4().hex
                (WORK / f"{tok}.pdf").write_bytes(data)
                from urllib.parse import unquote
                docs[tok] = {"name": Path(unquote(self.headers.get("X-Filename", "upload.pdf"))).name}
                return self.send(200, {"upload": tok})
            if r == "/api/start":
                a = json.loads(self.body())
                doc = docs.get(a.get("doc"))
                if not doc or "chapters" not in doc:
                    return self.send(400, {"error": "Open the PDF again."})
                picks = [int(n) for n in a.get("chapters", []) if 1 <= int(n) <= len(doc["chapters"])]
                voices = dict((v, v) for _, v in engine.VOICES)
                if not picks or a.get("voice") not in voices or a.get("rate") not in ("-20%", "-10%", "+0%", "+10%", "+20%"):
                    return self.send(400, {"error": "Tick a chapter, and choose a voice and speed."})
                start_job(doc, picks, a["voice"], a["rate"])
                return self.send(200, job_view())
            if r == "/api/stop":
                if job.get("stop"):
                    job["stop"].set(); job["message"] = "Stopping after the part in progress…"
                return self.send(200, job_view())
            self.send(404, {"error": "not found"})
        except ValueError as e:
            self.send(400, {"error": str(e)})
        except Exception as e:
            self.send(500, {"error": f"{type(e).__name__}: {e}"})

    do_PUT = do_POST


PAGE = r"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>Thusness Voice</title>
<style>
:root{--paper:#f5f5f1;--ink:#191c21;--muted:#5b6068;--rule:#d8d8d0;--saffron:#b8841f;--surface:#ecece6;color-scheme:light}
@media (prefers-color-scheme:dark){:root{--paper:#121418;--ink:#e8e6e0;--muted:#a2a6ad;--rule:#2c3038;--saffron:#d9a646;--surface:#1b1e24;color-scheme:dark}}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.5 "Source Sans 3","Segoe UI",system-ui,sans-serif}
main{max-width:46rem;margin:0 auto;padding:1.2rem max(16px,env(safe-area-inset-left))}
h1{font:600 1.7rem/1.2 Georgia,serif;margin:.4rem 0 .2rem}.sub{color:var(--muted);margin:0 0 1.2rem}
section{border:1px solid var(--rule);border-radius:12px;padding:1rem;margin:0 0 1rem;background:var(--surface)}
h2{font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--saffron);margin:0 0 .6rem}
select,button,input{font:inherit;color:inherit}select{width:100%;padding:.55rem;border:1px solid var(--rule);border-radius:8px;background:var(--paper)}
button{padding:.6rem 1.1rem;border-radius:8px;border:1.5px solid var(--ink);background:var(--ink);color:var(--paper);font-weight:600;cursor:pointer}
button.ghost{background:transparent;color:var(--ink)}button:disabled{opacity:.45;cursor:default}
.row{display:flex;gap:.6rem;flex-wrap:wrap;align-items:center}.row>*{flex:1 1 12rem}
ul.ch{list-style:none;margin:0;padding:0;max-height:22rem;overflow:auto;border:1px solid var(--rule);border-radius:8px;background:var(--paper)}
ul.ch li{border-bottom:1px solid var(--rule)}ul.ch label{display:flex;gap:.6rem;padding:.45rem .6rem;cursor:pointer}ul.ch .m{margin-left:auto;color:var(--muted);white-space:nowrap}
progress{width:100%;height:1.1rem;accent-color:var(--saffron)}.muted{color:var(--muted)}.err{color:#c0392b}
a{color:var(--saffron)}[hidden]{display:none!important}
.txt{max-height:24rem;overflow:auto;border:1px solid var(--rule);border-radius:8px;background:var(--paper);padding:.8rem 1rem;font:1.05rem/1.7 Georgia,serif}
.txt span{cursor:pointer;border-radius:3px}.txt span.on{background:color-mix(in srgb,var(--saffron) 35%,transparent)}
ul.ch button.it{all:unset;display:flex;gap:.6rem;width:100%;padding:.45rem .6rem;cursor:pointer;box-sizing:border-box}ul.ch button.it.cur{font-weight:700;color:var(--saffron)}
</style></head><body><main>
<h1>Thusness Voice</h1><p class="sub">Read an ebook or article PDF aloud into MP3 files. Private: for the site's owner only.</p>
<section id="signin" hidden><h2>Sign in</h2><p>Sign in with your Google account to use this page.</p>
<div id="g_id_onload" data-client_id="{{CLIENT_ID}}" data-callback="onGoogle" data-auto_prompt="false"></div>
<div class="g_id_signin" data-type="standard" data-text="signin_with"></div><button id="devlogin" hidden>Sign in (test)</button><p id="loginmsg" class="err"></p></section>
<div id="app" hidden>
<section><h2>1 · Choose a PDF</h2><div class="row"><select id="pdf"><option>Loading your Ebooks for readers…</option></select><button id="open">Open</button></div>
<p class="muted" style="margin:.6rem 0 0">Or upload one: <input type="file" id="file" accept="application/pdf"></p></section>
<section id="chs" hidden><h2>2 · Chapters <span id="docname" class="muted" style="text-transform:none;letter-spacing:0"></span></h2>
<div class="row" style="margin-bottom:.5rem"><button class="ghost" id="all">Tick all</button><button class="ghost" id="none">Untick all</button></div><ul class="ch" id="list"></ul></section>
<section><h2>3 · Voice and speed</h2><div class="row"><select id="voice"></select><select id="rate"><option value="-20%">Slower (-20%)</option><option value="-10%">A little slower (-10%)</option><option value="+0%" selected>Normal</option><option value="+10%">A little faster (+10%)</option><option value="+20%">Faster (+20%)</option></select></div></section>
<section><h2>4 · Record</h2><div class="row"><button id="start" disabled>Start</button><button class="ghost" id="stop" disabled>Stop</button></div>
<p style="margin:.8rem 0 .3rem"><progress id="bar" max="1000" value="0"></progress></p><div id="status">Ready.</div><div id="eta" class="muted"></div><div id="result"></div></section>
<section id="lr"><h2>5 · Listen and read</h2>
<div class="row"><select id="coll"><option>Loading your recordings…</option></select></div>
<ul class="ch" id="items" style="margin-top:.6rem;max-height:14rem"></ul>
<div id="player" hidden><p style="margin:.8rem 0 .3rem"><b id="ptitle"></b></p><audio id="aud" controls preload="metadata" style="width:100%"></audio>
<p class="muted" id="pnote" style="margin:.3rem 0"></p><div id="txt" class="txt"></div></div></section>
<p><button class="ghost" id="logout">Sign out</button></p></div>
</main>
<script src="https://accounts.google.com/gsi/client" async></script>
<script>
const $=id=>document.getElementById(id),AUTHED={{AUTHED}},VOICES={{VOICES}},api=(p,o={})=>fetch("/voice/api/"+p,{...o,headers:{"X-Thusness":"1",...(o.headers||{})}}).then(async r=>{const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||r.status);return j});
let doc=null,poll=null;
VOICES.forEach(([n,v])=>$("voice").add(new Option(n,v)));
window.onGoogle=r=>api("login",{method:"POST",body:JSON.stringify({credential:r.credential})}).then(()=>location.reload()).catch(e=>$("loginmsg").textContent=e.message);
$("devlogin").onclick=()=>onGoogle({credential:"dev"});
if(!"{{CLIENT_ID}}")$("devlogin").hidden=false;
function show(){ $("signin").hidden=AUTHED; $("app").hidden=!AUTHED; if(AUTHED){loadPdfs();watch();loadLib();} }
function loadPdfs(){api("pdfs").then(l=>{const s=$("pdf");s.innerHTML="";l.forEach(f=>{const o=new Option((f.folder?f.folder+" › ":"")+f.name+"  ("+(f.size/1e6).toFixed(1)+" MB)",f.id);o.dataset.name=f.name;s.add(o)});if(!l.length)s.add(new Option("No PDFs found in Ebooks for readers"))}).catch(e=>$("status").textContent=e.message)}
function opened(j){doc=j.doc;$("docname").textContent="· "+j.name+" ("+j.pages+" pages)";const ul=$("list");ul.innerHTML="";
 j.chapters.forEach(c=>{const li=document.createElement("li"),l=document.createElement("label"),b=document.createElement("input"),t=document.createElement("span"),m=document.createElement("span");
  b.type="checkbox";b.value=c.n;b.checked=c.tick;t.textContent=c.n+". "+c.title;m.className="m";m.textContent=c.min+" min";l.append(b,t,m);li.append(l);ul.append(li)});
 $("chs").hidden=false;$("start").disabled=false;$("status").textContent="Untick anything you don't want, then press Start.";}
$("open").onclick=()=>{const o=$("pdf").selectedOptions[0];if(!o||!o.value)return;$("status").textContent="Opening "+o.dataset.name+"…";
 api("open",{method:"POST",body:JSON.stringify({id:o.value,name:o.dataset.name})}).then(opened).catch(e=>$("status").textContent=e.message)};
$("file").onchange=()=>{const f=$("file").files[0];if(!f)return;$("status").textContent="Uploading "+f.name+"…";
 api("upload",{method:"POST",headers:{"X-Filename":encodeURIComponent(f.name).replace(/%20/g," ")},body:f}).then(u=>api("open",{method:"POST",body:JSON.stringify({upload:u.upload})})).then(opened).catch(e=>$("status").textContent=e.message)};
$("all").onclick=()=>document.querySelectorAll("#list input").forEach(b=>b.checked=true);
$("none").onclick=()=>document.querySelectorAll("#list input").forEach(b=>b.checked=false);
$("start").onclick=()=>{const ch=[...document.querySelectorAll("#list input:checked")].map(b=>+b.value);if(!ch.length){$("status").textContent="Tick at least one chapter.";return}
 api("start",{method:"POST",body:JSON.stringify({doc,chapters:ch,voice:$("voice").value,rate:$("rate").value})}).then(paint).then(watch).catch(e=>$("status").textContent=e.message)};
$("stop").onclick=()=>api("stop",{method:"POST"}).then(paint);
$("logout").onclick=()=>api("logout",{method:"POST"}).then(()=>location.reload());
function paint(j){const run=j.state==="running";$("stop").disabled=!run;$("start").disabled=run||!doc;
 if(j.state==="idle")return j;$("bar").value=run?1000*j.done/j.total:(j.state==="finished"?1000:$("bar").value);
 $("status").textContent=(run?j.message+"   "+Math.round(100*j.done/j.total)+"%":j.message);$("eta").textContent=run?(j.eta||""):"";
 const r=$("result");r.textContent="";if(j.folder_link&&!run&&j.files&&j.files.length){const a=document.createElement("a");a.href=j.folder_link;a.target="_blank";a.rel="noopener";a.textContent="Open the Drive folder ("+j.files.length+" files)";r.append(a);if(j.folder_id){const b=document.createElement("button");b.className="ghost";b.style.marginLeft=".6rem";b.textContent="Listen and read";b.onclick=()=>{loadLib(j.folder_id);$("lr").scrollIntoView({behavior:"smooth"})};r.append(b)}}
 if(j.failed&&j.failed.length){const p=document.createElement("div");p.className="err";p.textContent="Not recorded: "+j.failed.join(", ")+". Tick just those and press Start again.";r.append(p)}
 return j}
let sents=[],timed=false,cur=-1;
function loadLib(sel){api("library").then(l=>{const s=$("coll");s.innerHTML="";l.forEach(f=>s.add(new Option(f.name,f.id)));if(!l.length)s.add(new Option("No recordings yet"));if(sel)s.value=sel;if(l.length)loadColl()}).catch(e=>$("coll").innerHTML="<option>"+e.message+"</option>")}
function loadColl(){const id=$("coll").value;const ul=$("items");ul.innerHTML="<li class='muted' style='padding:.5rem'>Loading…</li>";
 api("collection?id="+encodeURIComponent(id)).then(l=>{ul.innerHTML="";if(!l.length)ul.innerHTML="<li class='muted' style='padding:.5rem'>No MP3 files in this folder.</li>";
  l.forEach(x=>{const li=document.createElement("li"),b=document.createElement("button");b.className="it";b.textContent="▶ "+x.name;b.onclick=()=>{document.querySelectorAll("#items .it").forEach(e=>e.classList.remove("cur"));b.classList.add("cur");play(x)};li.append(b);ul.append(li)})}).catch(e=>ul.innerHTML="<li class='err' style='padding:.5rem'>"+e.message+"</li>")}
$("coll").onchange=loadColl;
function play(x){$("player").hidden=false;$("ptitle").textContent=x.name;const a=$("aud");a.src="/voice/api/audio?id="+encodeURIComponent(x.id);a.play().catch(()=>{});
 $("txt").textContent="Loading the text…";$("pnote").textContent="";cur=-1;
 api("text?id="+encodeURIComponent(x.id)+"&name="+encodeURIComponent(x.name)+(x.text?"&text="+encodeURIComponent(x.text):"")).then(d=>{
  sents=d.sentences;timed=d.timed;const t=$("txt");t.textContent="";
  $("pnote").textContent=d.note||(timed?"The sentence being read is highlighted. Tap a sentence to jump there.":"The highlight follows the reading roughly (this recording has no timings). Tap a sentence to jump near it.");
  let total=sents.reduce((n,s)=>n+s[1].length,0)||1,acc=0;sents.forEach((s,i)=>{s.f=acc/total;acc+=s[1].length;const sp=document.createElement("span");sp.textContent=s[1]+" ";sp.onclick=()=>{a.currentTime=timed?s[0]:s.f*(a.duration||0);a.play()};t.append(sp)})})}
$("aud").ontimeupdate=()=>{const a=$("aud");if(!sents.length)return;let i;
 if(timed){i=0;while(i+1<sents.length&&sents[i+1][0]<=a.currentTime)i++}else{const f=a.duration?a.currentTime/a.duration:0;i=0;while(i+1<sents.length&&sents[i+1].f<=f)i++}
 if(i===cur)return;const sp=$("txt").children;if(sp[cur])sp[cur].classList.remove("on");cur=i;if(sp[i]){sp[i].classList.add("on");const box=$("txt"),y=sp[i].offsetTop-box.offsetTop-box.clientHeight/3;box.scrollTo({top:y,behavior:"smooth"})}};
function watch(){clearInterval(poll);const tick=()=>api("job").then(j=>{paint(j);if(j.state!=="running")clearInterval(poll)}).catch(()=>{});tick();poll=setInterval(tick,1500)}
show();
</script></body></html>"""


def main():
    if not DEV and (not CLIENT_ID or len(KEY) < 32):
        sys.exit("Set GOOGLE_CLIENT_ID and SESSION_KEY (see the top of this file).")
    if os.environ.get("SSL_CERT_FILE"):
        import ssl, edge_tts.communicate as etc
        etc._SSL_CTX = ssl.create_default_context(cafile=os.environ["SSL_CERT_FILE"])
    port = int(os.environ.get("PORT", 7803))
    print(f"Thusness Voice on http://127.0.0.1:{port}/voice/" + ("  (test mode)" if DEV else ""))
    ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()


if __name__ == "__main__":
    main()
