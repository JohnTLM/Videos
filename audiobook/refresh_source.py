"""Refresh source/ from the knowledge base: the live site's text in EBooks `Website/` (prog-spec.md, section 6).

    python audiobook/refresh_source.py <EBooks checkout> <thusness-website checkout>

Rebuilds every set folder under source/ (the old copies are removed first) and writes source/index.json, which
names, for each file, the website page it reads (slug and address). The website's own lists give the order:
- Books 1-4: `Website/books/<book>/` (already numbered in reading order);
- The Logic, the Explorations and the zoom-ins: `after-anatta/pages.json` (intro + steps, questions, essays);
- The bonus articles: the site's Library page (`Website/pages/articles.md`);
- The Canon View: `after-anatta/canon.md`.
Then run prepare_text.py.
"""
import json, re, shutil, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE / "source"

BOOKS = {
    "1-substrateless-world": "1-the-logical-necessity-of-a-substrateless-world",
    "2-anatta-to-emptiness": "2-the-transition-from-anatta-to-emptiness",
    "3-nagarjunas-middle-way": "3-nagarjunas-middle-way",
    "4-observer-and-presence": "4-the-observer-and-the-taste-of-presence",
}
# The Library page links each article by its address; the Markdown file is named by the site's page name.
ARTICLE_FILES = {"isn-t-energy-the-substrate": "energy", "dependent-designation-and-the-taste-of-presence": "presence",
                 "two-modes-one-seeing": "modes", "beyond-cause-and-effect": "beyond",
                 "insubstantial-appearances": "insubstantial", "vivid-and-nowhere-what-a-phenomenon-is": "phenomenon",
                 "one-flame-lights-another": "rebirth"}
ARTICLE_SLUGS = {"energy": "energy", "presence": "presence", "modes": "modes", "beyond": "beyond",
                 "insubstantial": "insubstantial", "phenomenon": "phenomenon", "rebirth": "rebirth"}


def main(ebooks, site):
    web = Path(ebooks) / "Website"
    site = Path(site)
    addresses = json.loads((site / "scripts" / "page_addresses.json").read_text(encoding="utf-8"))
    pages = json.loads((site / "after-anatta" / "pages.json").read_text(encoding="utf-8"))
    sets = {}                                   # set -> [(source path, slug)]
    for name, folder in BOOKS.items():
        sets[name] = [(p, re.sub(r"^\d+-", "", p.stem)) for p in sorted((web / "books" / folder).glob("*.md"))]
    aa = web / "after-anatta"
    md = lambda x: aa / (Path(x["file"]).stem + ".md")
    sets["5-the-logic-after-anatta"] = [(md(x), x["slug"]) for x in pages["intro"] + pages["steps"]]
    sets["explorations"] = [(md(x), x["slug"]) for x in pages["questions"]]
    sets["zoom-ins"] = [(md(x), x["slug"]) for x in pages["essays"]]
    sets["the-canon-view"] = [(aa / "canon.md", "aa-canon")]
    lib = (web / "pages" / "articles.md").read_text(encoding="utf-8")
    order = [ARTICLE_FILES[a] for a in re.findall(r"atr-passerby\.com/([\w-]+)/", lib) if a in ARTICLE_FILES]
    order += sorted(p.stem for p in (web / "bonus-articles").glob("*.md") if p.stem not in order)
    sets["bonus-articles"] = [(web / "bonus-articles" / f"{n}.md", ARTICLE_SLUGS.get(n, n)) for n in order]

    for d in SRC.iterdir():
        if d.is_dir():
            shutil.rmtree(d)
    index = {}
    for name, files in sets.items():
        (SRC / name).mkdir(parents=True)
        for n, (p, slug) in enumerate(files, 1):
            if not p.exists():
                sys.exit(f"missing: {p}")
            out = f"{n:02d}-{p.stem}" if not re.match(r"^\d+-", p.stem) else p.stem
            shutil.copyfile(p, SRC / name / f"{out}.md")
            title = next((l[2:].strip() for l in p.read_text(encoding="utf-8").splitlines() if l.startswith("# ")), slug)
            index[f"{name}/{out}"] = {"slug": slug, "title": title, "address": addresses.get(slug)}
        print(f"{name}: {len(files)} files")
    (SRC / "index.json").write_text(json.dumps(index, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{len(index)} files in all; source/index.json written")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(*sys.argv[1:])
