"""Build the book website: one page per chapter with its video and full text.

Usage (from the repo root):
    python site/build_site.py            # writes the site into _site/
    python site/build_site.py --out DIR  # writes it somewhere else

Inputs, all in site/:
    chapters.json   the book title and the list of chapters (title, slug, text file, YouTube link)
    chapters/*.md   the full text of each chapter
    style.css       the look of every page

Only the Python standard library is used, so there is nothing to install.
A chapter whose text file is missing is left out of the site (with a warning),
so the site can go live before every chapter is ready.
"""

import argparse
import html
import json
import re
import shutil
import sys
from pathlib import Path

SITE_DIR = Path(__file__).resolve().parent
WORDS_PER_MINUTE = 230

YOUTUBE_ID = re.compile(r"^[A-Za-z0-9_-]{11}$")
YOUTUBE_URL_PATTERNS = [
    re.compile(r"youtu\.be/([A-Za-z0-9_-]{11})"),
    re.compile(r"[?&]v=([A-Za-z0-9_-]{11})"),
    re.compile(r"/(?:embed|shorts|live)/([A-Za-z0-9_-]{11})"),
]


# --- Markdown (the small subset the chapter files use) ---------------------------------

def inline(text: str) -> str:
    """Escape HTML, then apply **bold**, *italic*, `code` and [links](url)."""
    out = html.escape(text, quote=False)
    out = re.sub(r"`([^`]+)`", r"<code>\1</code>", out)
    out = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", out)
    out = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", out)
    out = re.sub(r"(?<!\w)_(?!\s)(.+?)(?<!\s)_(?!\w)", r"<em>\1</em>", out)
    out = re.sub(
        r"\[([^\]]+)\]\((https?://[^)\s]+)\)",
        lambda m: f'<a href="{html.escape(m.group(2))}">{m.group(1)}</a>',
        out,
    )
    return out


def slugify(text: str) -> str:
    text = re.sub(r"[^\w\s-]", "", text.lower())
    return re.sub(r"[\s_]+", "-", text).strip("-") or "section"


def markdown_to_html(source: str) -> tuple[str, list[tuple[str, str]]]:
    """Return (html, sections). Sections are (anchor, heading) for each ## heading."""
    lines = source.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    blocks: list[str] = []
    sections: list[tuple[str, str]] = []
    used_anchors: set[str] = set()
    paragraph: list[str] = []
    list_items: list[str] = []
    list_tag = ""
    quote: list[str] = []

    def flush_paragraph():
        if paragraph:
            blocks.append(f"<p>{inline(' '.join(paragraph))}</p>")
            paragraph.clear()

    def flush_list():
        nonlocal list_tag
        if list_items:
            items = "".join(f"<li>{inline(item)}</li>" for item in list_items)
            blocks.append(f"<{list_tag}>{items}</{list_tag}>")
            list_items.clear()
        list_tag = ""

    def flush_quote():
        if quote:
            inner, _ = markdown_to_html("\n".join(quote))
            blocks.append(f"<blockquote>{inner}</blockquote>")
            quote.clear()

    table: list[str] = []

    def flush_table():
        if not table:
            return
        rows = [[cell.strip() for cell in row.strip().strip("|").split("|")] for row in table]
        is_separator = len(rows) > 1 and all(re.fullmatch(r":?-{2,}:?", c) for c in rows[1] if c)
        if is_separator:
            head = "".join(f"<th>{inline(c)}</th>" for c in rows[0])
            body = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in rows[2:])
            blocks.append(f'<div class="table-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
        else:
            blocks.append(f"<p>{inline(' '.join(table))}</p>")
        table.clear()

    def flush_all():
        flush_paragraph()
        flush_list()
        flush_quote()
        flush_table()

    for raw in lines:
        line = raw.rstrip()
        stripped = line.strip()

        if stripped.startswith(">"):
            flush_paragraph()
            flush_list()
            quote.append(stripped[1:].removeprefix(" "))
            continue
        if quote:
            flush_quote()

        if stripped.startswith("|"):
            flush_paragraph()
            flush_list()
            table.append(stripped)
            continue
        if table:
            flush_table()

        if not stripped:
            flush_paragraph()
            flush_list()
            continue

        heading = re.match(r"^(#{1,6})\s+(.*?)\s*#*$", stripped)
        if heading:
            flush_all()
            level = max(2, min(len(heading.group(1)), 4))
            text = heading.group(2)
            anchor = slugify(text)
            while anchor in used_anchors:
                anchor += "-x"
            used_anchors.add(anchor)
            if level == 2:
                sections.append((anchor, text))
            blocks.append(f'<h{level} id="{anchor}">{inline(text)}</h{level}>')
            continue

        if re.match(r"^(\*\s*){3,}$|^(-\s*){3,}$", stripped):
            flush_all()
            blocks.append("<hr>")
            continue

        bullet = re.match(r"^[-*+]\s+(.*)$", stripped)
        number = re.match(r"^\d+[.)]\s+(.*)$", stripped)
        if bullet or number:
            flush_paragraph()
            tag = "ul" if bullet else "ol"
            if list_tag and list_tag != tag:
                flush_list()
            list_tag = tag
            list_items.append((bullet or number).group(1))
            continue

        if list_items and raw.startswith((" ", "\t")):
            list_items[-1] += " " + stripped
            continue

        flush_list()
        paragraph.append(stripped)

    flush_all()
    return "\n".join(blocks), sections


def drop_title_heading(source: str, title: str) -> str:
    """Remove the first heading if it only repeats the chapter title (the page shows it already)."""
    lines = source.replace("\r\n", "\n").split("\n")
    for i, line in enumerate(lines):
        if not line.strip():
            continue
        match = re.match(r"^#{1,6}\s+(.*?)\s*$", line.strip())
        if match:
            heading = re.sub(r"^(chapter|essay)\s+\d+\s*[:.\-–—]\s*", "", match.group(1), flags=re.I)
            if heading.strip().lower() == title.strip().lower() or re.match(r"^(chapter|essay)\s+\d+", match.group(1), re.I):
                return "\n".join(lines[i + 1:])
        return source
    return source


# --- Videos ------------------------------------------------------------------------------

def youtube_id(value: str) -> str:
    """Accept a YouTube video id or any common YouTube link; return the 11-character id or ''."""
    value = (value or "").strip()
    if not value:
        return ""
    if YOUTUBE_ID.match(value):
        return value
    for pattern in YOUTUBE_URL_PATTERNS:
        match = pattern.search(value)
        if match:
            return match.group(1)
    raise ValueError(f"Not a YouTube link or video id: {value!r}")


def video_block(chapter: dict) -> str:
    vid = chapter["video_id"]
    if not vid:
        return '<div class="video video-pending"><p>The video for this chapter is coming soon.</p></div>'
    title = html.escape(f"Video: {chapter['title']}")
    return (
        '<div class="video"><iframe '
        f'src="https://www.youtube-nocookie.com/embed/{vid}?rel=0" title="{title}" '
        'loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; '
        'picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" '
        "allowfullscreen></iframe></div>"
    )


# --- Pages -------------------------------------------------------------------------------

def label(chapter: dict) -> str:
    return "Essay" if chapter.get("essay") else f"Chapter {chapter['number']}"


def page(title: str, body: str, css_href: str, description: str = "") -> str:
    desc = f'\n<meta name="description" content="{html.escape(description)}">' if description else ""
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>{desc}
<link rel="stylesheet" href="{css_href}">
</head>
<body>
{body}
</body>
</html>
"""


def chapter_page(book: dict, chapter: dict, prev_ch: dict | None, next_ch: dict | None) -> str:
    content, sections = markdown_to_html(chapter["body"])
    minutes = max(1, round(chapter["words"] / WORDS_PER_MINUTE))
    contents = ""
    if len(sections) > 1:
        links = "".join(f'<li><a href="#{a}">{inline(t)}</a></li>' for a, t in sections)
        contents = f'<details class="contents"><summary>In this chapter</summary><ol>{links}</ol></details>'

    def nav_link(ch: dict | None, rel: str, arrow: str) -> str:
        if not ch:
            return "<span></span>"
        text = f"{arrow} {label(ch)}: {html.escape(ch['title'])}" if rel == "prev" else \
            f"{label(ch)}: {html.escape(ch['title'])} {arrow}"
        return f'<a rel="{rel}" href="{ch["slug"]}.html">{text}</a>'

    nav = (
        '<nav class="pager">'
        f'{nav_link(prev_ch, "prev", "←")}'
        f'{nav_link(next_ch, "next", "→")}'
        "</nav>"
    )
    body = f"""<header class="site-header"><a href="../index.html">{html.escape(book['book_title'])}</a></header>
<main class="chapter">
<p class="eyebrow">{label(chapter)}</p>
<h1>{html.escape(chapter['title'])}</h1>
<section aria-label="Watch">
<h2 class="section-label">Watch</h2>
{video_block(chapter)}
</section>
<section aria-label="Read" class="read">
<h2 class="section-label">Read <span class="meta">about {minutes} min · {chapter['words']:,} words</span></h2>
{contents}
<article class="text">
{content}
</article>
</section>
{nav}
</main>
<footer class="site-footer"><a href="../index.html">All chapters</a> · {html.escape(book['author'])}</footer>"""
    return page(
        f"{label(chapter)}: {chapter['title']} · {book['book_title']}",
        body,
        "../style.css",
        f"{label(chapter)} of {book['book_title']}: read it in full or watch the narrated video.",
    )


def index_page(book: dict, chapters: list[dict]) -> str:
    def item(ch: dict) -> str:
        badge = '<span class="badge">▶ Video</span>' if ch["video_id"] else ""
        num = "" if ch.get("essay") else f'<span class="num">{ch["number"]}</span>'
        return (
            f'<li><a href="chapters/{ch["slug"]}.html">{num}'
            f'<span class="title">{html.escape(ch["title"])}</span>{badge}</a></li>'
        )

    main_list = "".join(item(c) for c in chapters if not c.get("essay"))
    essays = [c for c in chapters if c.get("essay")]
    essay_block = ""
    if essays:
        essay_block = (
            '<h2 class="section-label">Companion essays</h2>'
            f'<ol class="toc essays">{"".join(item(c) for c in essays)}</ol>'
        )
    body = f"""<main class="home">
<p class="eyebrow">{html.escape(book['author'])}</p>
<h1>{html.escape(book['book_title'])}</h1>
<p class="lede">{html.escape(book.get('intro', ''))}</p>
<h2 class="section-label">Chapters</h2>
<ol class="toc">{main_list}</ol>
{essay_block}
</main>
<footer class="site-footer">{html.escape(book['author'])}</footer>"""
    return page(book["book_title"], body, "style.css", book.get("intro", ""))


# --- Build -------------------------------------------------------------------------------

def load_chapters(site_dir: Path) -> tuple[dict, list[dict]]:
    book = json.loads((site_dir / "chapters.json").read_text(encoding="utf-8"))
    chapters = []
    for entry in book["chapters"]:
        ch = dict(entry)
        text_path = site_dir / "chapters" / ch["text"]
        if not text_path.exists():
            print(f"warning: {text_path.name} not found, leaving out {label(ch)}: {ch['title']}", file=sys.stderr)
            continue
        source = text_path.read_text(encoding="utf-8")
        ch["body"] = drop_title_heading(source, ch["title"])
        ch["words"] = len(re.findall(r"\b\w+\b", ch["body"]))
        ch["video_id"] = youtube_id(ch.get("youtube", ""))
        chapters.append(ch)
    return book, chapters


def build(site_dir: Path, out_dir: Path) -> list[Path]:
    book, chapters = load_chapters(site_dir)
    if out_dir.exists():
        shutil.rmtree(out_dir)
    (out_dir / "chapters").mkdir(parents=True)
    shutil.copy(site_dir / "style.css", out_dir / "style.css")
    (out_dir / ".nojekyll").write_text("", encoding="utf-8")
    written = [out_dir / "index.html"]
    written[0].write_text(index_page(book, chapters), encoding="utf-8")
    for i, ch in enumerate(chapters):
        prev_ch = chapters[i - 1] if i > 0 else None
        next_ch = chapters[i + 1] if i + 1 < len(chapters) else None
        path = out_dir / "chapters" / f"{ch['slug']}.html"
        path.write_text(chapter_page(book, ch, prev_ch, next_ch), encoding="utf-8")
        written.append(path)
    return written


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--out", type=Path, default=SITE_DIR.parent / "_site", help="output folder (default: _site/)")
    args = parser.parse_args()
    written = build(SITE_DIR, args.out)
    print(f"Built {len(written) - 1} chapter pages into {args.out}")


if __name__ == "__main__":
    main()
