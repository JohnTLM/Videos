# Videos: notes for Claude Code

All video-making for John Tan (Thusness)'s books. The website and the ebooks are other repositories
(thusness-website, EBooks); do not change them from a video task.

**Save tokens (owner, 2026-11-08).** Read only the file for your task, below. Do not open the other specs, and never
read a script, source text or log in full when a search will do.

| Task | Read |
|---|---|
| A new video for a bonus article or After Anatta page (the usual task) | `README.md` (all of it; about 10 KB) and `tools/README.md` |
| Its drawings, voice, subtitles, checks | `VIDEO-SPEC.md`, only the section you need (`grep -n '^## ' VIDEO-SPEC.md`) |
| An *Anatta to Emptiness* video | `anatta-to-emptiness/VIDEO-SPEC.md` (its stance rules replace the base list) |
| A NotebookLM pack | `NOTEBOOKLM-VIDEOS.md` |
| YouTube texts or uploads (server only) | `tools/publish/README.md` |
| Audiobooks | `audiobook/prog-spec.md` (log in `audiobook/CHANGELOG.md`) |
| Book 4 or MMK series | `observer-and-presence/README.md` or `mmk/README.md` |
| The chapter-builder plugin (old Book 1 series) | `chapter-builder/README.md` and `chapter-builder/ARCHITECTURE.md` |

## Rules that always apply

- **Videos are built in claude.ai cloud sessions, never on the server.** Send the MP4 to the owner (`SendUserFile`);
  the owner uploads it to YouTube as Unlisted. No Drive copy of new videos. (`README.md` has the full rules.)
- **The owner approves the script** before anything is drawn.
- **Save the text files here** (script, narration, drawings, subtitles, YouTube texts), never the MP4s. Push and merge
  without asking (owner, 2026-10-29).
- **Ask before spending.** The voice (edge-tts, Andrew) is free; anything paid needs the owner's yes and a cost
  estimate first.
- **Never print, upload or commit API keys.**
- **Explain in plain language**, short sentences, one clear next step. Give times in Singapore time (SGT).
