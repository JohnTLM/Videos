"""Shared Google sign-in for the publish tools.

The sign-in key and the saved token live outside this repository, in ~/.config/thusness-publish/
(override with THUSNESS_PUBLISH_DIR). They are never printed, never committed.
"""
import json
import os
import stat
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

# youtube: upload, set titles, add to playlists. drive: put files in the owner's existing folders.
SCOPES = ["https://www.googleapis.com/auth/youtube", "https://www.googleapis.com/auth/drive"]

DIR = Path(os.environ.get("THUSNESS_PUBLISH_DIR", Path.home() / ".config" / "thusness-publish"))
CLIENT = DIR / "client_secret.json"
TOKEN = DIR / "token.json"


def private(path):
    os.chmod(path, stat.S_IRUSR | stat.S_IWUSR)


def credentials():
    """The saved sign-in, refreshed if needed. Run google_login.py first."""
    if not TOKEN.exists():
        raise SystemExit(f"Not signed in yet: run  python3 tools/publish/google_login.py  (token goes to {TOKEN})")
    creds = Credentials.from_authorized_user_file(str(TOKEN), SCOPES)
    if not creds.valid:
        if creds.expired and creds.refresh_token:
            creds.refresh(Request())
            TOKEN.write_text(creds.to_json())
            private(TOKEN)
        else:
            raise SystemExit("The saved sign-in no longer works: run google_login.py again.")
    return creds


def service(name, version):
    from googleapiclient.discovery import build
    return build(name, version, credentials=credentials(), cache_discovery=False)


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))
