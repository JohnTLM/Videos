"""Point YouTube descriptions and their text copies at atr-passerby.com instead of the old claude.ai site.

The website is atr-passerby.com only since 2026-10-30. Only the description changes: the rest of each video's snippet
goes back as it came, and status, playlists and the video itself are not touched.

  # what would change, on the whole channel (any privacy); changes nothing
  python3 tools/publish/fix_site_links.py plan --addresses ../thusness-website/scripts/page_addresses.json
  # apply it one video at a time, stop at the first error, read each description back
  python3 tools/publish/fix_site_links.py apply --addresses ../thusness-website/scripts/page_addresses.json
  # the same replacement in the text copies (new-documents/**/youtube*.md)
  python3 tools/publish/fix_site_links.py texts --addresses ../thusness-website/scripts/page_addresses.json

Each command prints one line of JSON per change. Nothing secret is printed.

Warning (seen 2026-10-30, QqAbkXRRqqY): on a video with no default audio language, a description update makes YouTube set
it to en-US, and the API refuses to clear it. So `apply` changes one field besides the description on such videos, and
stops there. With the owner's OK (given 2026-10-31, thusness-website server/TASK-youtube-links-2.md), --allow-audio-en-us
accepts that one change, from empty to en-US, and still stops at any other difference, playlists included.
"""
import argparse
import json
import re
import sys
import time
from pathlib import Path

MAIN_SITE = "Qpz9X7zL4i265i8pTjNfeJ"
NEW_SITE = "https://atr-passerby.com"
LINK = re.compile(r"(?:https?://)?(?:www\.)?claude\.ai/artifact/([\w-]+)(?:#([\w/-]+))?")
OLD_HOSTS = re.compile(r"claude\.(?:ai|site)", re.I)
TAKEN_DOWN = {"death", "carrierless"}
WRITABLE = ("title", "tags", "categoryId", "defaultLanguage", "defaultAudioLanguage")
READ_BACK_WAITS = (0, 5, 10, 20, 30)
READ_LINE = re.compile(r"^\s*read (?:the|this) (?:page|article)\b", re.I)


def replace_links(text, addresses):
    """The new text, the changes made, and anything left for a person to look at."""
    changes, left = [], []
    lines = []
    for line in text.split("\n"):
        drop = False

        def swap(m):
            nonlocal drop
            artifact, slug = m.group(1), m.group(2)
            if artifact != MAIN_SITE:
                left.append({"link": m.group(0), "why": "not the main site"})
                return m.group(0)
            if not slug:
                new = f"{NEW_SITE}/"
            elif slug in TAKEN_DOWN:
                if READ_LINE.match(line):
                    drop = True
                    changes.append({"old": m.group(0), "new": "(line dropped)"})
                else:
                    left.append({"link": m.group(0), "why": "taken-down page, not on a Read the page line"})
                return m.group(0)
            elif slug in addresses:
                new = f"{NEW_SITE}/{addresses[slug]}/"
            elif slug.split("/")[0] in addresses:
                left.append({"link": m.group(0), "why": "points inside a page"})
                return m.group(0)
            else:
                new = f"{NEW_SITE}/#{slug}"
            changes.append({"old": m.group(0), "new": new})
            return new

        new_line = LINK.sub(swap, line)
        if not drop:
            lines.append(new_line)
    new_text = "\n".join(lines)
    if not LINK.search(new_text) and OLD_HOSTS.search(new_text):
        left.append({"link": OLD_HOSTS.search(new_text).group(0), "why": "other mention of the old site"})
    return new_text, changes, left


def all_videos(yt):
    """Every upload on the channel, any privacy: the uploads playlist lists them all for the signed-in owner."""
    ch = yt.channels().list(part="contentDetails", mine=True).execute()["items"][0]
    pid = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    req = yt.playlistItems().list(part="contentDetails", playlistId=pid, maxResults=50)
    while req:
        res = req.execute()
        ids = [it["contentDetails"]["videoId"] for it in res.get("items", [])]
        yield from yt.videos().list(part="snippet,status", id=",".join(ids), maxResults=50).execute().get("items", [])
        req = yt.playlistItems().list_next(req, res)


def playlists_by_video(yt, only=None):
    """Which of the channel's playlists each video is in; `only` limits the playlists read."""
    found = {}
    req = yt.playlists().list(part="contentDetails", mine=True, maxResults=50)
    while req:
        res = req.execute()
        for pl in res.get("items", []):
            if only is not None and pl["id"] not in only:
                continue
            # YouTube can offer a next page forever (seen on one playlist, 2026-10-31), so stop at the item count
            seen = 0
            items = yt.playlistItems().list(part="contentDetails", playlistId=pl["id"], maxResults=50)
            while items and seen < pl["contentDetails"]["itemCount"]:
                page = items.execute()
                seen += len(page.get("items", []))
                for it in page.get("items", []):
                    found.setdefault(it["contentDetails"]["videoId"], set()).add(pl["id"])
                items = yt.playlistItems().list_next(items, page)
        req = yt.playlists().list_next(req, res)
    return found


def plan_videos(yt, addresses):
    total, planned = 0, []
    for v in all_videos(yt):
        total += 1
        new, changes, left = replace_links(v["snippet"].get("description", ""), addresses)
        if changes or left:
            planned.append((v, new, changes, left))
    return total, planned


def show(v, changes, left):
    print(json.dumps({"id": v["id"], "title": v["snippet"]["title"], "privacy": v["status"]["privacyStatus"],
                      "changes": changes, "left": left}, ensure_ascii=False), flush=True)


def plan(args, addresses):
    from gauth import service
    total, planned = plan_videos(service("youtube", "v3"), addresses)
    for v, _, changes, left in planned:
        show(v, changes, left)
    print(json.dumps({"videos": total, "to_change": sum(bool(p[2]) for p in planned),
                      "with_left": sum(bool(p[3]) for p in planned)}))


def apply(args, addresses):
    from gauth import service
    yt = service("youtube", "v3")
    _, planned = plan_videos(yt, addresses)
    playlists = playlists_by_video(yt)
    held = {pl for v, _, changes, _ in planned if changes for pl in playlists.get(v["id"], set())}
    done = 0
    for v, new, changes, left in planned:
        if not changes or done == args.limit:
            continue
        before = v["snippet"]
        snippet = {k: before[k] for k in WRITABLE if k in before} | {"description": new}
        yt.videos().update(part="snippet", body={"id": v["id"], "snippet": snippet}).execute()
        # YouTube can return the old description for some seconds after an update
        for wait in READ_BACK_WAITS:
            time.sleep(wait)
            after = yt.videos().list(part="snippet,status", id=v["id"]).execute()["items"][0]
            differs = [k for k in WRITABLE if after["snippet"].get(k) != before.get(k)
                       and not (args.allow_audio_en_us and k == "defaultAudioLanguage" and not before.get(k)
                                and after["snippet"].get(k) == "en-US")]
            differs += ["description"] if after["snippet"].get("description") != new else []
            differs += [f"status.{k}" for k in set(after["status"]) | set(v["status"])
                        if after["status"].get(k) != v["status"].get(k)]
            if not differs:
                break
        if playlists_by_video(yt, held).get(v["id"], set()) != playlists.get(v["id"], set()):
            differs.append("playlists")
        if differs:
            sys.exit(f"Read-back differs on {v['id']} in {differs}: stopped after {done} videos")
        done += 1
        print(json.dumps({"id": v["id"], "checked": True, "audio": after["snippet"].get("defaultAudioLanguage"),
                          "changes": changes, "left": left}, ensure_ascii=False), flush=True)
    print(json.dumps({"changed": done}))


def texts(args, addresses):
    for path in sorted(Path(args.root).glob("new-documents/**/youtube*.md")):
        old = path.read_text(encoding="utf-8")
        new, changes, left = replace_links(old, addresses)
        if new != old:
            path.write_text(new, encoding="utf-8")
        if changes or left:
            print(json.dumps({"file": str(path), "changes": changes, "left": left}, ensure_ascii=False))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    for name, fn in (("plan", plan), ("apply", apply), ("texts", texts)):
        p = sub.add_parser(name)
        p.add_argument("--addresses", required=True, help="thusness-website scripts/page_addresses.json")
        p.set_defaults(fn=fn)
        if name == "apply":
            p.add_argument("--limit", type=int, help="change at most this many videos")
            p.add_argument("--allow-audio-en-us", action="store_true",
                           help="accept an empty default audio language becoming en-US (needs the owner's OK)")
        if name == "texts":
            p.add_argument("--root", default=".", help="the Videos repository")
    args = ap.parse_args()
    args.fn(args, json.loads(Path(args.addresses).read_text(encoding="utf-8")))


if __name__ == "__main__":
    main()
