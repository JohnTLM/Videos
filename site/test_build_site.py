"""Offline tests for build_site.py. Run: python -m unittest discover -s site"""

import json
import tempfile
import unittest
from pathlib import Path

import build_site as b


class MarkdownTests(unittest.TestCase):
    def test_headings_paragraphs_and_sections(self):
        out, sections = b.markdown_to_html("## First Part\r\n\r\nOne line\r\nsame paragraph.\r\n\r\n## Second\r\n\r\nNext.")
        self.assertIn('<h2 id="first-part">First Part</h2>', out)
        self.assertIn("<p>One line same paragraph.</p>", out)
        self.assertEqual(sections, [("first-part", "First Part"), ("second", "Second")])

    def test_html_is_escaped_and_inline_marks_work(self):
        out, _ = b.markdown_to_html("A <b> & **bold** and *ital* and svabhāva.")
        self.assertIn("A &lt;b&gt; &amp; <strong>bold</strong> and <em>ital</em> and svabhāva.", out)

    def test_lists_and_quotes(self):
        out, _ = b.markdown_to_html("- one\n- two\n\n1. first\n2. second\n\n> quoted\n> text")
        self.assertIn("<ul><li>one</li><li>two</li></ul>", out)
        self.assertIn("<ol><li>first</li><li>second</li></ol>", out)
        self.assertIn("<blockquote><p>quoted text</p></blockquote>", out)

    def test_duplicate_headings_get_unique_anchors(self):
        _, sections = b.markdown_to_html("## Same\n\n## Same")
        self.assertEqual([a for a, _ in sections], ["same", "same-x"])

    def test_title_heading_is_dropped(self):
        body = b.drop_title_heading("## Chapter 1: The Title\n\n## Part\n\nText", "The Title")
        self.assertNotIn("Chapter 1", body)
        self.assertIn("## Part", body)
        self.assertEqual(b.drop_title_heading("## Essay Title\n\nText", "Essay Title").strip(), "Text")
        self.assertIn("## Other", b.drop_title_heading("## Other\n\nText", "Essay Title"))


class YouTubeTests(unittest.TestCase):
    def test_accepts_ids_and_common_links(self):
        for value in ["dQw4w9WgXcQ", "https://youtu.be/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3",
                      "https://www.youtube.com/embed/dQw4w9WgXcQ", "https://youtube.com/shorts/dQw4w9WgXcQ"]:
            self.assertEqual(b.youtube_id(value), "dQw4w9WgXcQ", value)
        self.assertEqual(b.youtube_id(""), "")

    def test_rejects_other_links(self):
        with self.assertRaises(ValueError):
            b.youtube_id("https://drive.google.com/file/d/abc/view")


class BuildTests(unittest.TestCase):
    def test_builds_index_and_chapter_pages(self):
        with tempfile.TemporaryDirectory() as tmp:
            site = Path(tmp) / "site"
            (site / "chapters").mkdir(parents=True)
            (site / "style.css").write_text("body{}", encoding="utf-8")
            (site / "chapters.json").write_text(json.dumps({
                "book_title": "Book", "author": "Author", "intro": "Intro",
                "chapters": [
                    {"number": 1, "title": "One", "slug": "ch01-one", "text": "ch01.md", "youtube": "https://youtu.be/dQw4w9WgXcQ"},
                    {"number": 2, "title": "Two", "slug": "ch02-two", "text": "ch02.md", "youtube": ""},
                    {"number": 3, "title": "Missing", "slug": "ch03-missing", "text": "ch03.md", "youtube": ""},
                    {"number": 90, "title": "Essay", "slug": "ch90-essay", "text": "ch90.md", "youtube": "", "essay": True},
                ]}), encoding="utf-8")
            (site / "chapters" / "ch01.md").write_text("## Chapter 1: One\n\n## A\n\nAlpha.\n\n## B\n\nBeta.", encoding="utf-8")
            (site / "chapters" / "ch02.md").write_text("## Chapter 2: Two\n\nText.", encoding="utf-8")
            (site / "chapters" / "ch90.md").write_text("## Essay\n\nEssay text.", encoding="utf-8")
            out = Path(tmp) / "_site"
            written = b.build(site, out)

            self.assertEqual(len(written), 4)  # index + 3 chapters; the missing one is left out
            index = (out / "index.html").read_text(encoding="utf-8")
            self.assertIn('href="chapters/ch01-one.html"', index)
            self.assertNotIn("Missing", index)
            self.assertIn("Companion essays", index)
            self.assertIn("▶ Video", index)

            one = (out / "chapters" / "ch01-one.html").read_text(encoding="utf-8")
            self.assertIn("youtube-nocookie.com/embed/dQw4w9WgXcQ", one)
            self.assertIn("In this chapter", one)
            self.assertIn('href="ch02-two.html"', one)
            self.assertNotIn("Chapter 1: One</h2>", one)

            two = (out / "chapters" / "ch02-two.html").read_text(encoding="utf-8")
            self.assertIn("coming soon", two)
            self.assertIn('rel="prev" href="ch01-one.html"', two)
            self.assertTrue((out / "style.css").exists())
            self.assertTrue((out / ".nojekyll").exists())


if __name__ == "__main__":
    unittest.main()
