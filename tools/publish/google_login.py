"""One-time Google sign-in for the publish tools (works on a server with no browser).

Usage: python3 tools/publish/google_login.py

1. It prints a link. Open it on your own computer, sign in with the YouTube channel's Google account, and allow.
2. The browser then goes to a page that does not load (http://localhost:1/?...). That is expected.
   Copy the whole address from the address bar and paste it here.
3. The token is saved to ~/.config/thusness-publish/token.json (only you can read it). Nothing is printed.
"""
import sys

from google_auth_oauthlib.flow import Flow

from gauth import CLIENT, DIR, SCOPES, TOKEN, private

REDIRECT = "http://localhost:1/"


def main():
    if not CLIENT.exists():
        sys.exit(f"Put the downloaded sign-in key at {CLIENT} first (README.md, step 4).")
    flow = Flow.from_client_secrets_file(str(CLIENT), scopes=SCOPES, redirect_uri=REDIRECT)
    url, _ = flow.authorization_url(access_type="offline", prompt="consent", include_granted_scopes="true")
    print("\n1. Open this link on your own computer and allow access:\n")
    print(url)
    print("\n2. The browser ends on a page that does not load. Copy its whole address and paste it here.\n")
    answer = input("Address: ").strip()
    if "code=" not in answer:
        sys.exit("That address has no sign-in code in it. Run this again and paste the whole address.")
    flow.fetch_token(authorization_response=answer)
    creds = flow.credentials
    if not creds.refresh_token:
        sys.exit("Google gave no long-term token. Remove the app's access at myaccount.google.com/permissions and run this again.")
    DIR.mkdir(parents=True, exist_ok=True)
    TOKEN.write_text(creds.to_json())
    private(TOKEN)
    print(f"\nSigned in. Token saved to {TOKEN}.")


if __name__ == "__main__":
    import os
    os.environ.setdefault("OAUTHLIB_INSECURE_TRANSPORT", "1")  # the localhost redirect is plain http
    main()
