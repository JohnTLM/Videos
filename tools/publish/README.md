# Publish tools: YouTube and Drive from the owner's server

Claude Code on the owner's Google Cloud server uses these to put texts (title, description, chapters, tags) and
playlists on YouTube videos and to copy files to Google Drive. One-time Google sign-in, no password; all free.

| File | What it does |
|---|---|
| `google_login.py` | One-time sign-in. Saves a token that can manage the YouTube channel and Drive files |
| `publish_youtube.py` | `upload` a video with its texts, `update` the texts of a video already up, `info` (title, privacy, length), `uploads` (recent uploads), list a `playlist` or all `playlists` |
| `publish_drive.py` | Copy files into a Drive folder and check each one arrived whole (`--replace` trashes the old copy) |
| `fix_site_links.py` | Point YouTube descriptions and `new-documents/**/youtube*.md` at atr-passerby.com instead of the old claude.ai site (`plan`, `apply`, `texts`) |
| `gauth.py` | Shared sign-in code |
| `requirements-publish.txt` | The Python packages |
| `TASK-*.md` | Past jobs (After Anatta texts and playlists, 2026-10-28 on), with their video ids; done |

**Secrets.** `client_secret.json` (the sign-in key) and `token.json` live in `~/.config/thusness-publish/` on the
server, readable only by its user. Never in this repository, never printed, never pasted into a chat, not in `.env`.

**Uploads stay in YouTube Studio** (owner, 2026-10-28: Google's approval form is given up; do not suggest it again).
Without it, `upload` gives only Private videos. The owner uploads in Studio (Unlisted); the server then runs `update`
and adds the playlist, which work without approval. Comments: the API cannot turn them off; the owner does it in
Studio (*Content*, tick the videos, *Edit › Comments › Off*). Never use "made for kids" for this.

## Use

```bash
PY=~/.venvs/publish/bin/python
# put the texts on a video already uploaded in YouTube Studio (--entry N = the "## N." heading, for a file of several)
$PY tools/publish/publish_youtube.py update QA9yrHNx5To --meta new-documents/after-anatta/youtube-after-anatta.md --entry 2

# upload one video into a playlist (Private only, see above)
$PY tools/publish/publish_youtube.py upload tools/series/after-anatta/aa13-the-limits-of-the-tools/aa13-the-limits-of-the-tools.mp4 \
    --meta new-documents/after-anatta/aa13-youtube/youtube.md --privacy private --playlist "The Logic After Anatta"

# find videos just uploaded in Studio (titles are still the file names), with lengths; check ids and lengths
$PY tools/publish/publish_youtube.py uploads -n 20
$PY tools/publish/publish_youtube.py info <id> <id> ...

# check a playlist's order; list all playlists
$PY tools/publish/publish_youtube.py playlist "The Logic After Anatta"
$PY tools/publish/publish_youtube.py playlists

# copy files to Drive (folder id = the end of the folder's link); stays owner-only
$PY tools/publish/publish_drive.py 1s9rc1vgGHRs635vN6mhs2KBkF_6Kmm67 file.mp4 --replace
```

Each command prints one line of JSON per video or file (id, link, title or size). Hand the YouTube ids to the website
(thusness-website `scripts/vm_videos.json`, `["yt", id]`) or tell the owner.

The texts come from the usual YouTube Markdown files: headings *Title*, *Description* and *Tags* (`##` or `###`), tags
on one line, comma-separated. The tool refuses texts over YouTube's limits (title 100, description 5,000, tags 500
characters) and descriptions with `<` or `>`.

## Setup (done; only if the sign-in is lost)

**The owner, in a browser** (about 15 minutes), at https://console.cloud.google.com, in the project that holds the
server (`instance-20261026-235807`):

1. *APIs & Services › Library*: enable **YouTube Data API v3** and **Google Drive API**.
2. *OAuth consent screen* (or *Google Auth Platform › Branding*): user type **External**, any app name (e.g. *Thusness
   publisher*), the owner's email as contacts; under *Audience* add the channel's Google account as a **test user**;
   then **Publish app** (*In production*), or the sign-in stops working every 7 days. "Unverified" is fine.
3. *Credentials › Create credentials › OAuth client ID*, type **Desktop app**; **Download JSON** (never in a chat).
4. On the server: `mkdir -p ~/.config/thusness-publish && chmod 700 ~/.config/thusness-publish`, paste the file into
   `~/.config/thusness-publish/client_secret.json` (`nano`), then `chmod 600` it.

**Claude Code on the server:**

```bash
cd ~/videos && git pull
python3 -m venv ~/.venvs/publish
~/.venvs/publish/bin/pip install -r tools/publish/requirements-publish.txt
~/.venvs/publish/bin/python tools/publish/google_login.py
```

`google_login.py` prints a link. The owner opens it, signs in with the channel's account, passes the "unverified app"
page (*Advanced › Go to … (unsafe)*), and allows. The browser ends on a page that does not load
(`http://localhost:1/?…`); the owner copies that whole address back into the server window. Check with `playlists`.
