# Publish tools: YouTube and Drive without manual uploads

These tools let Claude Code on the owner's Google Cloud server upload finished videos to YouTube (with title,
description, chapters, tags and playlist) and copy files to Google Drive. They use a one-time Google sign-in, never a
password. All of it is free.

| File | What it does |
|---|---|
| `google_login.py` | One-time sign-in. Saves a token that can manage the YouTube channel and Drive files |
| `publish_youtube.py` | `upload` a video with its texts, `update` the texts of a video already up, `info` (title, privacy, length), list a `playlist` or all `playlists` |
| `publish_drive.py` | Copy files into a Drive folder and check each one arrived whole (`--replace` trashes the old copy) |
| `gauth.py` | Shared sign-in code |
| `requirements-publish.txt` | The Python packages |

**Where the secrets live.** The sign-in key (`client_secret.json`) and the token (`token.json`) go in
`~/.config/thusness-publish/` on the server, readable only by its user. They are never put in this repository,
never printed, never pasted into a chat. Not in `.env` either: the token is a file of its own.

## Setup (once)

### Part A: the owner, in a browser (about 15 minutes)

1. **Open the Google Cloud console** at https://console.cloud.google.com and pick the project that holds the server
   (the one with `instance-20261026-235807`). A new project also works.
2. **Turn on the two services.** Menu › *APIs & Services* › *Library*. Search **YouTube Data API v3**, open it, press
   **Enable**. Then search **Google Drive API** and press **Enable**.
3. **Set up the sign-in screen.** *APIs & Services* › *OAuth consent screen* (it may be called *Google Auth Platform* ›
   *Branding*):
   - User type **External**. App name, for example *Thusness publisher*. Your email as support and developer contact.
   - Under *Audience*, add your own Google account (the one that owns the YouTube channel) as a **test user**.
   - Then press **Publish app** (status *In production*). Without this the sign-in stops working every 7 days.
     Google will say the app is unverified; that is fine for an app only you use.
4. **Make the sign-in key.** *APIs & Services* › *Credentials* › **Create credentials** › **OAuth client ID**.
   Application type **Desktop app**, any name. Press **Download JSON**. Do not send this file in a chat.
5. **Put the key on the server.** On the server (the SSH window in the console works), run:

   ```bash
   mkdir -p ~/.config/thusness-publish && chmod 700 ~/.config/thusness-publish
   nano ~/.config/thusness-publish/client_secret.json   # paste the downloaded file's contents, save with Ctrl+O, Ctrl+X
   chmod 600 ~/.config/thusness-publish/client_secret.json
   ```

6. **Ask Google to allow Unlisted and Public uploads.** Until this is approved, every video the tool uploads is
   locked to **Private** (Google's rule for new projects). Fill in the *YouTube API Services: Audit and Quota Extension
   Form*: https://support.google.com/youtube/contact/yt_api_form. Say it is a personal tool that uploads the owner's
   own videos to his own channel, a few a week, with title, description, tags and playlist. Approval usually takes days
   to a few weeks. Until then use the tool with `--privacy private`, or keep uploading in YouTube Studio, and use
   `update` to put the texts on (that works at once).

   The daily limit is about 6 uploads; the same form can ask for more.

### Part B: Claude Code on the server

```bash
cd ~/videos && git pull                      # this repository (clone it first if it is not there)
python3 -m venv ~/.venvs/publish
~/.venvs/publish/bin/pip install -r tools/publish/requirements-publish.txt
~/.venvs/publish/bin/python tools/publish/google_login.py
```

`google_login.py` prints a link. The owner opens it on his own computer, signs in with the YouTube channel's account,
passes the "unverified app" page (*Advanced* › *Go to … (unsafe)*), and allows. The browser then ends on a page that
does not load (`http://localhost:1/?…`). That is expected: the owner copies that whole address back into the server
window. The token is saved; nothing is printed.

Check it works (lists the channel's playlists):

```bash
~/.venvs/publish/bin/python tools/publish/publish_youtube.py playlists
```

## Use

```bash
PY=~/.venvs/publish/bin/python
# upload one video, unlisted, into a playlist
$PY tools/publish/publish_youtube.py upload tools/series/after-anatta/aa13-the-limits-of-the-tools/aa13-the-limits-of-the-tools.mp4 \
    --meta new-documents/after-anatta/aa13-youtube/youtube.md --privacy unlisted --playlist "The Logic After Anatta"

# a YouTube file that holds several videos needs --entry N (the "## N." number)
$PY tools/publish/publish_youtube.py upload aa01-two-logics.mp4 --meta new-documents/after-anatta/youtube-after-anatta.md --entry 2

# put the texts on a video already uploaded in YouTube Studio
$PY tools/publish/publish_youtube.py update QA9yrHNx5To --meta new-documents/after-anatta/youtube-after-anatta.md --entry 2

# check a playlist's order
$PY tools/publish/publish_youtube.py playlist "The Logic After Anatta"

# copy files to Drive (folder id = the end of the folder's link); stays owner-only
$PY tools/publish/publish_drive.py 1s9rc1vgGHRs635vN6mhs2KBkF_6Kmm67 file.mp4 --replace
```

Each command prints one line of JSON per video or file (id, link, title or size). Hand the YouTube ids to the website
(thusness-website `scripts/vm_videos.json`, `["yt", id]`) or tell the owner.

The texts come from the usual YouTube Markdown files: headings *Title*, *Description* and *Tags* (`##` or `###`), tags
on one line, comma-separated. The tool refuses texts over YouTube's limits (title 100, description 5,000, tags 500
characters) and descriptions with `<` or `>`.

## First job once set up

The full, step-by-step version for Claude Code on the server is `TASK-after-anatta-texts.md` in this folder.

The ten After Anatta videos of 2026-10-28 were uploaded in YouTube Studio with no texts (their titles are the date).
Put the texts on them, in the order of `new-documents/after-anatta/youtube-after-anatta.md`:

```bash
PY=~/.venvs/publish/bin/python; M=new-documents/after-anatta/youtube-after-anatta.md
n=1; for id in wxhsA6xKIQM QA9yrHNx5To lLkWbd2MoRw LmlHbrwg1xk ERBH0_9vwVU F0P_kfwAloE BXINN2sg_Z0 HX7xwtsSYjs qn8SZaV1Akc 6BAD37Dk_lw; do
  $PY tools/publish/publish_youtube.py update $id --meta $M --entry $n; n=$((n+1)); done
$PY tools/publish/publish_youtube.py playlist "The Logic After Anatta"
```

Before running it, check that the ten links really are in that order (the owner sent them in a list; nobody could
open YouTube to check). The lengths must read 7:12, 8:10, 8:42, 7:40, 8:28, 8:05, 8:04, 7:59, 7:34, 1:05:29:

```bash
$PY tools/publish/publish_youtube.py info wxhsA6xKIQM QA9yrHNx5To lLkWbd2MoRw LmlHbrwg1xk ERBH0_9vwVU F0P_kfwAloE BXINN2sg_Z0 HX7xwtsSYjs qn8SZaV1Akc 6BAD37Dk_lw
```
