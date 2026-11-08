# Videos: notes for Claude Code

All video-making for John Tan (Thusness)'s books. The website and the ebooks are other repositories
(thusness-website, EBooks); do not change them from a video task.

**Save tokens (owner, 2026-11-08).** Read only the file for your task, below; search scripts, sources and logs
rather than read them in full.

| Task | Read |
|---|---|
| A new video for a bonus article or After Anatta page (the usual task) | `README.md` and `tools/README.md` |
| Its drawings, voice, subtitles, checks | `VIDEO-SPEC.md`, only the section you need (`grep -n '^## ' VIDEO-SPEC.md`) |
| An *Anatta to Emptiness* video | `anatta-to-emptiness/VIDEO-SPEC.md` (its stance rules replace the base list) |
| A NotebookLM pack | `NOTEBOOKLM-VIDEOS.md` |
| YouTube texts or uploads (server only) | `tools/publish/README.md` |
| Audiobooks | `audiobook/prog-spec.md` (log in `audiobook/CHANGELOG.md`) |
| Book 4 or MMK series | `observer-and-presence/README.md` or `mmk/README.md` |
| The chapter-builder plugin (old Book 1 series) | `chapter-builder/README.md` and `chapter-builder/ARCHITECTURE.md` |

## Rules that always apply

- **Videos are built in claude.ai cloud sessions, never on the server.** Send the MP4 to the owner (`SendUserFile`);
  the owner uploads it to YouTube as Unlisted. No Drive copy of new videos.
- **The owner approves the script** before anything is drawn.
- **Save the text files here, never the MP4s:** script, narration, drawings, subtitles, YouTube texts, changed series
  settings, a short README per new video. Push and merge without asking (owner, 2026-10-29).
- **Every YouTube description ends with the owner's disclaimer** (owner, 2026-11-08): "All views and understanding
  here are my own, from my practice and contemplation. I do not represent any tradition, school or teacher. Where I
  report what a tradition holds, I try to report it fairly; where I part from it, I say so."
- **Ask before spending.** The voices (edge-tts) are free; anything paid needs the owner's yes and a cost estimate.
- **Never print, upload or commit API keys.**
- **Explain in plain language**, short sentences, one clear next step. Give times in Singapore time (SGT).
