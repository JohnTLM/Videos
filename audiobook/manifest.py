"""List the recordings, mark what changed, and (with --upload) put them in Google Drive (prog-spec.md, section 5).

    python audiobook/manifest.py                # write out/voice_manifest.json and out/AUDIO_CHANGELOG.md
    python audiobook/manifest.py --upload       # the same, then send NEW and UPDATED files to Drive (server only)

Each MP3 in out/<set>/ is compared with the previous out/voice_manifest.json by a hash of its spoken text and the
voice settings: 🟢 NEW (not there before), 🟡 UPDATED (text or voice changed), ⚪ Unchanged.
The manifest names, for each file, the website page it reads (slug, address from source/index.json), so the site
can link the right recording to the right page later.

Drive: one private folder, "voices for ebooks and articles", at the top of My Drive (made if missing; never shared).
Files keep friendly names ("Book 1 - Substrateless World - 02 - The Substantialist Misconception.mp3"). An UPDATED
file replaces the Drive file of the same name in place (same id and link). Every upload is checked by its MD5.
The sign-in is tools/publish/gauth.py (~/.config/thusness-publish/token.json), as for the other server uploads.
"""
import argparse, hashlib, json, mimetypes, re, subprocess, sys
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
TEXT, OUT, SRC = HERE / "text", HERE / "out", HERE / "source"
MANIFEST, CHANGELOG = OUT / "voice_manifest.json", OUT / "AUDIO_CHANGELOG.md"
FOLDER = "voices for ebooks and articles"
LABEL = {
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
sys.path.insert(0, str(HERE))
from make_audiobook import VOICE, RATE, PITCH, duration  # noqa: E402


def md5(p):
    h = hashlib.md5()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def drive_name(setname, stem, title):
    num = stem.split("-")[0]
    clean = re.sub(r'[\\/*?:"<>|]', "", title).replace("’", "'")
    clean = re.sub(r"\s+", " ", clean).strip()
    return f"{LABEL[setname]} - {clean}.mp3" if setname == "bonus-articles" else f"{LABEL[setname]} - {num} - {clean}.mp3"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--upload", action="store_true")
    ap.add_argument("--voice", default=VOICE)
    ap.add_argument("--rate", default=RATE)
    ap.add_argument("--pitch", default=PITCH)
    args = ap.parse_args()
    index = json.loads((SRC / "index.json").read_text(encoding="utf-8"))
    old = {r["id"]: r for r in json.loads(MANIFEST.read_text(encoding="utf-8"))} if MANIFEST.exists() else {}
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    rows = []
    for setname in LABEL:
        for mp3 in sorted((OUT / setname).glob("*.mp3")):
            txt = TEXT / setname / f"{mp3.stem}.txt"
            if not txt.exists():
                continue
            key = f"{setname}/{mp3.stem}"
            text = txt.read_text(encoding="utf-8")
            title = text.split("\n", 1)[0].removeprefix("title:").strip()
            h = hashlib.sha1(f"{args.voice}|{args.rate}|{args.pitch}|{text}".encode()).hexdigest()
            prev = old.get(key)
            status = "NEW" if not prev else ("UNCHANGED" if prev["content_hash"] == h else "UPDATED")
            info = index.get(key, {})
            rows.append({
                "id": key, "set": setname, "album": LABEL[setname], "title": title,
                "slug": info.get("slug"), "address": info.get("address"),
                "file": f"{setname}/{mp3.name}", "drive_name": drive_name(setname, mp3.stem, title),
                "bytes": mp3.stat().st_size, "md5": md5(mp3), "seconds": round(duration(mp3), 1),
                "voice": args.voice, "rate": args.rate, "content_hash": h, "status": status,
                "updated": now if status != "UNCHANGED" else prev.get("updated", now),
                "drive_id": (prev or {}).get("drive_id"),
            })
    gone = sorted(set(old) - {r["id"] for r in rows})

    put = upload(rows) if args.upload else None
    MANIFEST.write_text(json.dumps(rows, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    write_changelog(rows, gone, now)
    if put:
        put(MANIFEST, MANIFEST.name, "application/json")
        put(CHANGELOG, CHANGELOG.name, "text/markdown")
    n = {s: sum(r["status"] == s for r in rows) for s in ("NEW", "UPDATED", "UNCHANGED")}
    hours = sum(r["seconds"] for r in rows) / 3600
    print(f"{len(rows)} files, {hours:.1f} hours: {n['NEW']} new, {n['UPDATED']} updated, {n['UNCHANGED']} unchanged"
          + (f"; no longer recorded: {', '.join(gone)}" if gone else ""))


def write_changelog(rows, gone, now):
    badge = {"NEW": "🟢 **NEW**", "UPDATED": "🟡 **UPDATED**", "UNCHANGED": "⚪ Unchanged"}
    n = {s: sum(r["status"] == s for r in rows) for s in badge}
    lines = ["# Voice Audio Updates & Changelog Ledger", "",
             f"**Last sync**: `{now}`  ", f"**Voice**: `{rows[0]['voice'] if rows else '-'}` (Microsoft, free)  ",
             f"**Files**: `{len(rows)}`, {sum(r['seconds'] for r in rows) / 3600:.1f} hours  ",
             f"**This run**: 🟢 `{n['NEW']} new` | 🟡 `{n['UPDATED']} updated` | ⚪ `{n['UNCHANGED']} unchanged`", "",
             "| Status | Set | Title | File | Length | Size | Website page | Updated |",
             "| :--- | :--- | :--- | :--- | ---: | ---: | :--- | :--- |"]
    for r in rows:
        m, s = divmod(int(r["seconds"]), 60)
        page = f"/{r['address']}/" if r["address"] else "-"
        lines.append(f"| {badge[r['status']]} | {r['album']} | {r['title'].replace('|', '-')} | `{r['drive_name']}` | "
                     f"{m}:{s:02d} | {r['bytes'] / 1e6:.1f} MB | `{page}` | {r['updated']} |")
    if gone:
        lines += ["", "No longer recorded (the page left the site): " + ", ".join(f"`{g}`" for g in gone)]
    lines += ["", "For the website: link only the 🟢 NEW and 🟡 UPDATED rows; ⚪ Unchanged rows are already linked.", ""]
    CHANGELOG.write_text("\n".join(lines), encoding="utf-8")


def upload(rows):
    sys.path.insert(0, str(HERE.parent / "tools" / "publish"))
    from gauth import service
    from googleapiclient.http import MediaFileUpload
    drive = service("drive", "v3")
    q = f"'root' in parents and name = '{FOLDER}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false"
    found = drive.files().list(q=q, fields="files(id)").execute()["files"]
    folder = found[0]["id"] if found else drive.files().create(
        body={"name": FOLDER, "mimeType": "application/vnd.google-apps.folder"}, fields="id").execute()["id"]
    print(f"Drive folder '{FOLDER}': {folder}")
    perms = drive.permissions().list(fileId=folder, fields="permissions(type)").execute()["permissions"]
    if any(p["type"] in ("anyone", "domain") for p in perms):
        sys.exit("The Drive folder is shared with anyone; recordings stay private. Nothing uploaded.")

    def put(path, name, mime):
        esc = name.replace("\\", "\\\\").replace("'", "\\'")
        same = drive.files().list(q=f"'{folder}' in parents and name = '{esc}' and trashed = false",
                                  fields="files(id,md5Checksum)").execute()["files"]
        h = md5(path)
        if same and same[0].get("md5Checksum") == h:
            return same[0]["id"]
        media = MediaFileUpload(str(path), mimetype=mime, chunksize=32 * 1024 * 1024, resumable=True)
        if same:
            req = drive.files().update(fileId=same[0]["id"], media_body=media, fields="id,md5Checksum")
        else:
            req = drive.files().create(body={"name": name, "parents": [folder]}, media_body=media,
                                       fields="id,md5Checksum")
        res = None
        while res is None:
            _, res = req.next_chunk()
        if res.get("md5Checksum") != h:
            sys.exit(f"{name}: the Drive copy does not match (MD5); stopped")
        return res["id"]

    for r in rows:
        if r["status"] != "UNCHANGED" or not r["drive_id"]:
            r["drive_id"] = put(OUT / r["file"], r["drive_name"], "audio/mpeg")
            print(f"  {r['status'].lower()}: {r['drive_name']} -> {r['drive_id']}", flush=True)
    return put


if __name__ == "__main__":
    main()
