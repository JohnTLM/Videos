"""Turn the website Markdown in source/<set>/*.md into spoken text in text/<set>/*.txt (prog-spec.md, section 4).

    python audiobook/prepare_text.py            # all sets
    python audiobook/prepare_text.py questions  # one set

Text file format (read by make_audiobook.py):
    line 1   "title: <chapter title>"   (MP3 title tag)
    line 2   "album: <book or set>"     (MP3 album tag)
    then paragraphs separated by blank lines. A paragraph starting "# " is a heading: it is read the same way,
    with a longer pause after it.

Prints a report of what was left out (tables, figures, sections), for the owner.
"""
import json, re, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC, OUT = HERE / "source", HERE / "text"
PRON = HERE.parent / "tools" / "pronunciation.json"

SETS = {
    "1-substrateless-world": "The Logical Necessity of a Substrateless World",
    "2-anatta-to-emptiness": "The Transition from Anatta to Emptiness",
    "4-observer-and-presence": "The Observer and the Taste of Presence",
    "5-the-logic-after-anatta": "The Logic After Anatta",
    "bonus-articles": "Bonus Articles",
    "questions": "The Questions",
}
SKIP = {"20-sw-references.md": "references", "27-ob-a.md": "verse index", "30-ob-d.md": "references"}
# Sections left out with everything under them: reading lists, link lists and references.
DROP_SECTIONS = re.compile(r"^(read more|further reading|sources and further reading|notes on sources|"
                           r"references|in the books|talks)$", re.I)
# Website-only paragraphs: video links, page-to-page navigation, companion-page links.
NAV = re.compile(r"^(\*\*Watch|\*\*Prefer to watch\?|\[Watch|\*\*In the chain:\*\*|\*Companion pages:|Three talks on rebirth on YouTube)")
NOTATION = re.compile(r"^Notation:")                # Book 2 appendix: symbol formulas, not readable aloud
TABLE_MAX_COLS, TABLE_MAX_CHARS = 4, 3000     # larger tables are left out (one line says so)
# Figure captions that need the picture to make sense: left out. (Captions are read as "Figure: ..." otherwise.)
FIGURE_SKIP = {"figure3.png"}


def apply_pron(s, pron):
    """Same as tools/build.py apply_pron."""
    for k in sorted(pron, key=len, reverse=True):
        s = s.replace(k, pron[k])
    return s


ABBREV = [(r"\bvs\.", "versus"), (r"\be\.g\.", "for example"), (r"\bi\.e\.", "that is"), (r"\bcf\.", "compare"),
          (r"\bff\.", "and following"), (r"\bSkt\.", "Sanskrit"), (r"\bTib\.", "Tibetan"),
          (r"\bJpn\.", "Japanese"), (r"\bChs\.", "Chapters"), (r"\bCh\.", "Chapter"), (r"\bch\.", "chapter"),
          (r"\btrans\.", "translated by"), (r"\bvol\.", "volume"), (r"\b(\w+) \(\1\)", r"\1"), (r"§§\s*", "sections "), (r"§\s*", "section "),
          (r" & ", " and "), (r"→", " to "), (r"H₂O", "H 2 O"), (r"ψ", "psi")]


def symbols(s):
    """Book 2 appendix notation such as (\\[~\\]) or (~\\>): left out, it cannot be read aloud."""
    s = re.sub(r"\s*\((?:[^\w()]|\\.|v|O)*\)", lambda m: "" if re.search(r"[~@<>=!:{}\\\[]", m.group()) else m.group(), s)
    return s


def inline(s):
    s = symbols(s)
    s = re.sub(r"\\([^\w\s])", r"\1", s)                         # Markdown escapes: 1\. -> 1.
    s = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", s)                      # images
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)                  # links: keep the words
    s = re.sub(r"<?https?://\S+>?", "", s)                          # bare web addresses
    s = re.sub(r"[　-鿿＀-￯―]+", "", s)       # Chinese and Japanese characters (not read)
    s = re.sub(r"\(\s*[,;]?\s*\)", "", s)                           # brackets left empty by the line above
    s = re.sub(r"\(([^()]*?),\s*\)", r"(\1)", s)
    s = s.replace("**", "").replace("__", "")
    s = re.sub(r"(?<![\w*])\*(?!\s)|(?<!\s)\*(?![\w*])", "", s)      # *italic*
    s = re.sub(r"(?<!\w)_(?=\S)|(?<=\S)_(?!\w)", "", s)              # _italic_
    s = s.replace("`", "").replace(" · ", ". ").replace("·", ", ")
    for a, b in ABBREV:
        s = re.sub(a, b, s)
    s = re.sub(r"\s+([,.;:?!])", r"\1", s)
    return re.sub(r"\s{2,}", " ", s).strip()


def end(s):
    s = s.rstrip()
    return s if not s or s[-1] in ".?!:;…”’\"')" else s + "."


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def table(rows, where, notes):
    cells = [split_row(r) for r in rows if not re.match(r"^\|[\s:|-]*-[\s:|-]*$", r.strip())]
    sym = lambda c: bool(c) and re.fullmatch(r"(\\?[^\w\s]|v|O)+", c.replace(" ", "")) is not None
    keep = [k for k in range(len(cells[0])) if not all(sym(r[k]) for r in cells[1:] if k < len(r))]
    if len(keep) < len(cells[0]):                 # a column of symbols only (Book 2 appendix): left out
        notes.append(f"{where}: table column of symbols left out")
        cells = [[r[k] for k in keep if k < len(r)] for r in cells]
    head, body = cells[0], cells[1:]
    ncols, chars = len(head), sum(len(c) for r in cells for c in r)
    if ncols > TABLE_MAX_COLS or chars > TABLE_MAX_CHARS:
        notes.append(f"{where}: table left out ({ncols} columns, {len(body)} rows; first column: "
                     f"{inline(head[0]) or inline(body[0][0])!r})")
        return ["A table follows in the book; it is not read aloud."]
    out = []
    if any(inline(h) for h in head):
        out.append("A table. " + "; ".join(inline(h) for h in head if inline(h)) + ".")
    for r in body:
        parts = [inline(c) for c in r if inline(c)]
        if not parts:
            continue
        s = parts[0] + ("" if parts[0][-1] in ".?!:" else ":")
        for p in parts[1:]:
            s += " " + p + ("" if p[-1] in ".?!" else ";")
        out.append(end(s.rstrip(";")))
    notes.append(f"{where}: table read as sentences ({ncols} columns, {len(body)} rows)")
    return [" ".join(out)] if len(" ".join(out)) < 1500 else out


def convert(md, setname, notes, where):
    lines = md.splitlines()
    # front matter: "# Title", then a "*Book* · Chapter N · Part I" line (or "Bonus article · Book" above the title)
    title, chapter, i = None, None, 0
    while i < len(lines) and (not lines[i].strip() or title is None):
        l = lines[i].strip()
        if l.startswith("# "):
            title = l[2:].strip()
        elif l.startswith("Bonus article"):
            pass
        elif l:
            break
        i += 1
    if i < len(lines) and lines[i].strip().startswith("*" + SETS[setname] + "*"):
        m = re.search(r"Chapter (\d+)", lines[i])
        chapter = m and m.group(1)
        i += 1
    album = SETS[setname]
    t = inline(title)
    intro = {"bonus-articles": f"Bonus article. {end(t)}", "questions": f"The Questions. {end(t)}"}.get(
        setname, f"{album}. " + (f"Chapter {chapter}. " if chapter else "") + end(t))
    paras, drop_level = [intro], None

    block = []                                            # lines of the paragraph being collected

    def flush():
        if block:
            paras.append(end(" ".join(block)))
            block.clear()

    rows, quote, skip_para = [], False, False
    for raw in lines[i:] + [""]:
        l = raw.rstrip("\n")
        s = l.strip()
        if skip_para:                                     # a website-only paragraph, up to the next blank line
            skip_para = bool(s)
            continue
        if NAV.match(s) or re.fullmatch(r"\[\d+\]\([^)]*\)", s):
            flush()
            skip_para = True
            notes.append(f"{where}: website line left out ({s[:50]!r})")
            continue
        if NOTATION.match(s):
            flush()
            notes.append(f"{where}: symbol line left out ({s[:50]!r})")
            continue
        if rows and not s.startswith("|"):
            paras.extend(table(rows, where, notes)) if drop_level is None else None
            rows = []
        h = re.match(r"^(#{1,6})\s+(.*)$", s)
        if h:
            level, text = len(h.group(1)), inline(h.group(2))
            if drop_level is not None and level > drop_level:
                continue
            drop_level = None
            flush()
            if DROP_SECTIONS.match(text):
                drop_level = level
                notes.append(f"{where}: section {text!r} left out")
                continue
            paras.append("# " + end(text))
            continue
        if drop_level is not None:
            continue
        if s.startswith("|"):
            flush()
            rows.append(s)
            continue
        if re.match(r"^!\[", s):
            flush()
            m = re.match(r"^!\[([^\]]*)\]\(([^)]*)\)", s)
            cap, img = m.group(1), Path(m.group(2)).name
            cm = re.match(r"^Figure \d+[a-z]?\.\s*(.*)", cap)
            if cm and img not in FIGURE_SKIP:
                paras.append(end("Figure: " + inline(cm.group(1))))
                notes.append(f"{where}: figure {img} caption read")
            else:
                notes.append(f"{where}: figure {img} left out ({cap[:60]!r})")
            continue
        if re.match(r"^(-{3,}|\*{3,})$", s):
            flush()
            continue
        if s.startswith(">"):
            s = s.lstrip(">").strip()
            if not quote:
                flush()
            quote = True
            if not s:
                flush()
                continue
        elif quote:
            quote = False
            flush()
        if not s:
            flush()
            continue
        item = re.match(r"^([-*+]|\d+\.)\s+(.*)$", s)
        if item:                                          # each list item is its own paragraph
            flush()
            block.append((item.group(1) + " " if item.group(1)[0].isdigit() else "") + inline(item.group(2)))
            flush()
            continue
        text = inline(s)
        if not text:
            continue
        if raw.endswith("  ") and not quote and not block:  # "Term  \nDefinition" (word lists)
            block.append(text.rstrip(":") + ":")
            continue
        if raw.endswith("  ") and quote:                    # verse lines
            text = text if text[-1] in ",;:.?!—" else text + ","
        block.append(text)
    flush()
    return t, album, paras


def main(only=None):
    pron = json.loads(PRON.read_text(encoding="utf-8"))
    report = []
    for setname in SETS:
        if only and setname not in only:
            continue
        (OUT / setname).mkdir(parents=True, exist_ok=True)
        for f in sorted((SRC / setname).glob("*.md")):
            where = f"{setname}/{f.name}"
            if f.name in SKIP:
                report.append(f"{where}: skipped ({SKIP[f.name]})")
                continue
            notes = []
            title, album, paras = convert(f.read_text(encoding="utf-8"), setname, notes, where)
            body = "\n\n".join(apply_pron(p, pron) for p in paras)
            (OUT / setname / (f.stem + ".txt")).write_text(f"title: {title}\nalbum: {album}\n\n{body}\n", encoding="utf-8")
            report += notes
    (OUT / "REPORT.txt").write_text("\n".join(report) + "\n", encoding="utf-8")
    print("\n".join(r for r in report if "caption read" not in r and "read as sentences" not in r))


if __name__ == "__main__":
    main(sys.argv[1:])
