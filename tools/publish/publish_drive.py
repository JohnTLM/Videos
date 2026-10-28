"""Copy files into a Google Drive folder, and check each one arrived whole.

  python3 tools/publish/publish_drive.py FOLDER_ID file1.mp4 [file2.pdf ...] [--replace]

FOLDER_ID is the long id at the end of the folder's Drive link. Files stay owner-only (Restricted); this tool never
changes sharing. With --replace, a file of the same name already in the folder is moved to the Drive Trash after the
new copy is checked. Prints one line of JSON per file (name, id, link, bytes).
"""
import argparse
import json
import mimetypes
import sys
from pathlib import Path

from gauth import service


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("folder_id")
    ap.add_argument("files", nargs="+")
    ap.add_argument("--replace", action="store_true")
    args = ap.parse_args()
    from googleapiclient.http import MediaFileUpload
    drive = service("drive", "v3")
    for f in map(Path, args.files):
        size = f.stat().st_size
        name = f.name.replace("'", "\\'")
        old = drive.files().list(q=f"'{args.folder_id}' in parents and name = '{name}' and trashed = false",
                                 fields="files(id)").execute().get("files", [])
        mime = mimetypes.guess_type(f.name)[0] or "application/octet-stream"
        media = MediaFileUpload(str(f), mimetype=mime, chunksize=32 * 1024 * 1024, resumable=True)
        req = drive.files().create(body={"name": f.name, "parents": [args.folder_id]}, media_body=media,
                                   fields="id,size,webViewLink")
        res = None
        while res is None:
            status, res = req.next_chunk()
            if status:
                print(f"  {f.name}: {int(status.progress() * 100)}%", file=sys.stderr, flush=True)
        if int(res.get("size", -1)) != size:
            sys.exit(f"{f.name}: Drive has {res.get('size')} bytes, the file has {size}. Not replacing anything.")
        if args.replace:
            for o in old:
                drive.files().update(fileId=o["id"], body={"trashed": True}).execute()
        print(json.dumps({"name": f.name, "id": res["id"], "link": res["webViewLink"], "bytes": size,
                          "replaced": [o["id"] for o in old] if args.replace else []}), flush=True)


if __name__ == "__main__":
    main()
