# The Logic, one full video (2026-10-27)

Made by cutting and joining the existing videos, with no new recording, following `../logic-full-cut-list.md`
(approved by the owner: "Go"). Result: `the-logic-full.mp4`, 61 min 5 s, 1280×720 (made from the 720p copies in the
After Anatta Site's asset store; the full-size copies are in the owner's Drive). The MP4 is not kept in git.

- `para-times.json`: start and end of every paragraph in the nine source videos, found at the 1.2 s pauses the builder
  leaves between paragraphs (`ffmpeg silencedetect`, -38 dB, 0.6 s), checked against each script's paragraph count.
- `sent-sil.json`: the short pauses inside each step's "This is the Nth step…" paragraph; the 4th pause ends the
  sentence "…known as Thusness.", which is cut.
- `full-plan.json`: the 30 pieces (video, start, end) in order.
- `make_full.py`: makes the pieces (short fades at each edge) and joins them. Run it in a folder that has
  `logic-videos/<asset id>.mp4` for the nine videos (ids in the script) and the two JSON files.

The eight step videos and the overview (ep96) are unchanged and stay on the site as they are.
