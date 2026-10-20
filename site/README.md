# The book website

A small website for *The Logical Necessity of a Substrateless World*. Each chapter has its own
page: the narrated video at the top, then the full chapter text to read.

Once it is live, it is at **https://johntlm.github.io/videos/**.

## What is in this folder

| File | What it is |
|---|---|
| `chapters.json` | The book title, the intro line and the list of chapters: number, title, page name (`slug`), text file and YouTube link |
| `chapters/chNN.md` | The full text of each chapter, copied from the book's `_source` folder on Google Drive |
| `style.css` | How every page looks (light and dark mode follow the reader's device) |
| `build_site.py` | Turns the files above into web pages. Uses plain Python, nothing to install |
| `test_build_site.py` | Offline tests for the builder |

## One-time setup on GitHub

1. Open the repo on GitHub, then **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

After that, every change to `site/` on `main` publishes the site again within a minute or two
(the "Publish website" workflow in the **Actions** tab).

## Adding a chapter's video

1. Upload the chapter's `.mp4` to YouTube. "Unlisted" works if you don't want it in search results.
2. Copy the video's link (for example `https://youtu.be/AbCdEfGhIjK`).
3. In `chapters.json`, paste it into that chapter's `"youtube": ""` field.
4. Commit to `main`. The page shows the video, and the chapter list shows a **▶ Video** badge.

Until a link is added, the page shows "The video for this chapter is coming soon", and the text
can still be read.

## Updating a chapter's text

Replace `chapters/chNN.md` with the new version and commit. The files use simple Markdown:
`## Heading` for sections, a blank line between paragraphs, `*italic*`, `**bold**`, `> ` for
quotes and `- ` for lists. The first line (`## Chapter N: Title`) is not shown twice: the page
already shows the title.

A chapter whose text file is missing is simply left out of the site, so the site can go live
before every chapter is ready.

## Previewing on your own computer

```
python site/build_site.py
python -m http.server 8000 --directory _site
```

Then open http://localhost:8000. Run the tests with `python -m unittest discover -s site`.
