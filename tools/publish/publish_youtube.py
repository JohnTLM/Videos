"""Upload videos to YouTube with their title, description and tags, and add them to a playlist.

Texts come from a YouTube Markdown file in the usual form: "Title", "Description" and "Tags" headings (## or ###),
the tags as one comma-separated line. A file holding several videos ("## 1. …", "## 2. …") needs --entry N.

  # upload one video
  python3 tools/publish/publish_youtube.py upload VIDEO.mp4 --meta new-documents/after-anatta/aa13-youtube/youtube.md \
      --privacy unlisted --playlist "The Logic After Anatta"
  # upload entry 3 of a multi-video file
  python3 tools/publish/publish_youtube.py upload aa02.mp4 --meta new-documents/after-anatta/youtube-after-anatta.md --entry 3
  # put the texts on a video that is already up (e.g. one uploaded in YouTube Studio)
  python3 tools/publish/publish_youtube.py update QA9yrHNx5To --meta new-documents/after-anatta/youtube-after-anatta.md --entry 2
  # list a playlist (to check the order) or the channel's playlists
  python3 tools/publish/publish_youtube.py playlist "The Logic After Anatta"
  python3 tools/publish/publish_youtube.py playlists
  # title, privacy and length of videos (to check an order)
  python3 tools/publish/publish_youtube.py info wxhsA6xKIQM QA9yrHNx5To

Each command prints one line of JSON per video (id, link, title, privacy). Nothing secret is printed.
Until Google approves the project (README.md, step 6), YouTube keeps every video uploaded this way Private.
"""
import argparse
import json
import re
import sys
import time
from pathlib import Path

from gauth import service

CATEGORY_EDUCATION = "27"


def read_meta(path, entry=None):
    text = Path(path).read_text(encoding="utf-8")
    blocks = re.split(r"\n## (\d+)\. ", text)
    if len(blocks) > 1:
        if entry is None:
            sys.exit(f"{path} holds {len(blocks) // 2} videos: give --entry N")
        found = {int(blocks[i]): blocks[i + 1] for i in range(1, len(blocks), 2)}
        if entry not in found:
            sys.exit(f"No entry {entry} in {path}")
        text = found[entry]

    def section(name):
        m = re.search(rf"^#{{2,3}} {name}[^\n]*\n(.*?)(?=^#{{2,3}} |\Z)", text, re.S | re.M)
        if not m:
            sys.exit(f"No '{name}' heading in {path}" + (f" entry {entry}" if entry else ""))
        return m.group(1).strip()

    title = section("Title").splitlines()[0].strip()
    description = section("Description")
    tags = [t.strip() for t in section("Tags").splitlines()[0].split(",") if t.strip()]
    problems = []
    if len(title) > 100:
        problems.append(f"title is {len(title)} characters (limit 100)")
    if len(description) > 5000:
        problems.append(f"description is {len(description)} characters (limit 5000)")
    if "<" in description or ">" in description:
        problems.append("description contains < or >, which YouTube refuses")
    if len(", ".join(tags)) > 500:
        problems.append("tags are over 500 characters")
    if problems:
        sys.exit("Fix the texts first: " + "; ".join(problems))
    return {"title": title, "description": description, "tags": tags,
            "categoryId": CATEGORY_EDUCATION, "defaultLanguage": "en", "defaultAudioLanguage": "en"}


def find_playlist(yt, name, create_privacy=None):
    """A playlist id from an id, a link or a title on this channel; create it if asked."""
    m = re.search(r"list=([\w-]+)", name)
    if m:
        return m.group(1)
    if re.fullmatch(r"PL[\w-]{10,}", name):
        return name
    req = yt.playlists().list(part="snippet", mine=True, maxResults=50)
    while req:
        res = req.execute()
        for p in res.get("items", []):
            if p["snippet"]["title"].strip().lower() == name.strip().lower():
                return p["id"]
        req = yt.playlists().list_next(req, res)
    if create_privacy:
        p = yt.playlists().insert(part="snippet,status", body={
            "snippet": {"title": name}, "status": {"privacyStatus": create_privacy}}).execute()
        return p["id"]
    sys.exit(f"No playlist called '{name}' on this channel (add --create-playlist to make it)")


def add_to_playlist(yt, playlist_id, video_id):
    yt.playlistItems().insert(part="snippet", body={"snippet": {
        "playlistId": playlist_id, "resourceId": {"kind": "youtube#video", "videoId": video_id}}}).execute()


def report(video_id, title, privacy, **extra):
    print(json.dumps({"id": video_id, "link": f"https://youtu.be/{video_id}", "title": title,
                      "privacy": privacy, **extra}, ensure_ascii=False), flush=True)


def upload(args):
    from googleapiclient.errors import HttpError
    from googleapiclient.http import MediaFileUpload
    yt = service("youtube", "v3")
    snippet = read_meta(args.meta, args.entry)
    playlist_id = find_playlist(yt, args.playlist, args.privacy if args.create_playlist else None) if args.playlist else None
    body = {"snippet": snippet, "status": {"privacyStatus": args.privacy, "selfDeclaredMadeForKids": False,
                                           "embeddable": True}}
    media = MediaFileUpload(args.video, mimetype="video/mp4", chunksize=16 * 1024 * 1024, resumable=True)
    req = yt.videos().insert(part="snippet,status", body=body, media_body=media)
    res, tries = None, 0
    while res is None:
        try:
            status, res = req.next_chunk()
            if status:
                print(f"  {int(status.progress() * 100)}%", file=sys.stderr, flush=True)
        except HttpError as e:
            if e.resp.status in (500, 502, 503, 504) and tries < 6:
                tries += 1
                time.sleep(2 ** tries)
                continue
            raise
    vid = res["id"]
    if args.thumbnail:
        yt.thumbnails().set(videoId=vid, media_body=MediaFileUpload(args.thumbnail)).execute()
    if playlist_id:
        add_to_playlist(yt, playlist_id, vid)
    got = res["status"]["privacyStatus"]
    if got != args.privacy:
        print(f"  YouTube set this video to {got}, not {args.privacy}: the project is not approved yet (README.md, step 6).",
              file=sys.stderr)
    report(vid, snippet["title"], got, playlist=playlist_id)


def update(args):
    yt = service("youtube", "v3")
    snippet = read_meta(args.meta, args.entry)
    items = yt.videos().list(part="snippet,status", id=args.video_id).execute().get("items", [])
    if not items:
        sys.exit(f"No video {args.video_id} on this channel")
    yt.videos().update(part="snippet", body={"id": args.video_id, "snippet": snippet}).execute()
    if args.playlist:
        add_to_playlist(yt, find_playlist(yt, args.playlist), args.video_id)
    report(args.video_id, snippet["title"], items[0]["status"]["privacyStatus"])


def info(args):
    yt = service("youtube", "v3")
    found = {v["id"]: v for v in yt.videos().list(part="snippet,status,contentDetails", id=",".join(args.ids)).execute().get("items", [])}
    for vid in args.ids:
        v = found.get(vid)
        if not v:
            print(json.dumps({"id": vid, "found": False}))
            continue
        m = re.fullmatch(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", v["contentDetails"]["duration"])
        h, mi, se = (int(x or 0) for x in m.groups())
        length = f"{h}:{mi:02d}:{se:02d}" if h else f"{mi}:{se:02d}"
        report(vid, v["snippet"]["title"], v["status"]["privacyStatus"], length=length)


def show_playlist(args):
    yt = service("youtube", "v3")
    pid = find_playlist(yt, args.name)
    req = yt.playlistItems().list(part="snippet,contentDetails", playlistId=pid, maxResults=50)
    n = 0
    while req:
        res = req.execute()
        for it in res.get("items", []):
            n += 1
            vid = it["contentDetails"]["videoId"]
            print(json.dumps({"n": n, "id": vid, "link": f"https://youtu.be/{vid}", "title": it["snippet"]["title"]},
                             ensure_ascii=False))
        req = yt.playlistItems().list_next(req, res)
    print(json.dumps({"playlist": pid, "link": f"https://www.youtube.com/playlist?list={pid}", "videos": n}))


def show_playlists(args):
    yt = service("youtube", "v3")
    req = yt.playlists().list(part="snippet,status,contentDetails", mine=True, maxResults=50)
    while req:
        res = req.execute()
        for p in res.get("items", []):
            print(json.dumps({"id": p["id"], "title": p["snippet"]["title"], "privacy": p["status"]["privacyStatus"],
                              "videos": p["contentDetails"]["itemCount"],
                              "link": f"https://www.youtube.com/playlist?list={p['id']}"}, ensure_ascii=False))
        req = yt.playlists().list_next(req, res)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    u = sub.add_parser("upload")
    u.add_argument("video")
    u.add_argument("--meta", required=True)
    u.add_argument("--entry", type=int)
    u.add_argument("--privacy", choices=["private", "unlisted", "public"], default="unlisted")
    u.add_argument("--playlist", help="playlist title, id or link")
    u.add_argument("--create-playlist", action="store_true", help="make the playlist if it does not exist")
    u.add_argument("--thumbnail")
    u.set_defaults(fn=upload)
    p = sub.add_parser("update")
    p.add_argument("video_id")
    p.add_argument("--meta", required=True)
    p.add_argument("--entry", type=int)
    p.add_argument("--playlist", help="also add it to this playlist")
    p.set_defaults(fn=update)
    s = sub.add_parser("playlist")
    s.add_argument("name", help="playlist title, id or link")
    s.set_defaults(fn=show_playlist)
    sub.add_parser("playlists").set_defaults(fn=show_playlists)
    i = sub.add_parser("info", help="title, privacy and length of videos")
    i.add_argument("ids", nargs="+")
    i.set_defaults(fn=info)
    args = ap.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
