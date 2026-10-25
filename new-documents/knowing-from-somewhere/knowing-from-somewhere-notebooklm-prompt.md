# NotebookLM prompt: Knowing From Somewhere

## Setup

1. Create a **new notebook** and add only `knowing-from-somewhere-notebooklm-source.md` as its source: upload this
   file, or the Google Doc made from it once it is in the video's Drive folder. Do not add the article PDF or anything
   else: NotebookLM draws on every source in a notebook, and the article still holds one wording the source corrects
   (see the canon check below).
2. Choose **Video Overview**, in the **Cinematic** style, and paste the steering prompt below into the customisation
   box.
3. Save the video to the video's Drive folder, turn on "Anyone with the link" while Claude downloads it, and send
   Claude the file name. Claude checks the transcript against the precision notes and the canon, proposes cuts, and
   writes the YouTube text.

## Steering prompt

> Cover all 24 sections of the source in order, with every argument, sutta image and example, and treat every
> "precision note" as binding. Key points: (1) the hinge of the video is "wider is not the same as from nowhere": the
> argument rules out a view from nowhere, never the higher knowledges themselves; (2) the view is neither for nor
> against them: logic removes objections and proves nothing; say clearly that removing a bad argument against
> something is not supplying a good argument for it; (3) nothing is exempt from the search: not matter, not mind, not
> awareness; when a substance is removed, put nothing in its place; (4) emptiness is never a cause: never "because
> empty, things can arise" or "emptiness makes things work"; (5) knowing others' minds is "with their own mind":
> never "all minds are one" or a universal consciousness; (6) recollecting past lives proves no soul and no
> travelling consciousness; tell the story of the ascetics who concluded the self is eternal, and Sāti; (7) the divine
> eye's seer stands in a raised house at the central square: a height, not a God's-eye view; (8) the sixth knowledge
> is not a power and does not see a hidden ground; nothing is added to the lake; (9) tell the story of the monk who
> went to the gods in full, including Brahmā admitting he does not know and the bird returning to the ship; if the
> "radiant all-round" verse is quoted, include its last line and never make it a cosmic consciousness; (10) physics
> illustrates and never explains or confirms; (11) include the Buddha's refusal to display powers, the monastic rule,
> and the two opposite mistakes; (12) end on "no longer grasping what is reached, or the one who reaches it", not on
> "what remains". Pronounce names as in the pronunciation list: nah-GAR-joo-nah, chun-drah-KEER-tee,
> ah-bee-GNYAH, SAH-tee, BRAH-mah, nah-gah-SAY-nah. Main visuals: a monk meditating with five kinds of knowing
> around him, a chariot taken apart, a log fire and a grass fire, a tick, bat and bee in their worlds, a cone of vision
> widening from a person, a lamp lit from a lamp, a person passing a wall, a potter shaping clay, a traveller on a road
> hearing drums, a mirror, two lamps, a mountain peak and a pillar, a raised house over a town square, a clear
> mountain lake with fish, the monk climbing the heavens to Brahmā, a bird flying from a ship and returning.

If the box has a character limit, use this shorter version:

> Cover all 24 sections in order and follow every precision note. Hinge: wider is not from nowhere; the argument
> never rules the knowledges out. Logic removes objections and proves nothing. Nothing is exempt from the search; put
> nothing in its place. Emptiness is never a cause. Others' minds are known with one's own mind, not "all minds are
> one". Past lives prove no soul. The divine eye sees from a height, not from nowhere. The sixth is not a power. Tell
> the monk who went to the gods. End on not grasping, not on what remains.

## Canon check

The source is the bonus article "Knowing From Somewhere", as merged in JohnTLM/EBooks (`knowing-from-somewhere/source/`,
PR #20, 2026-10-25). It was checked against CanonView (`canon/nature-canonical-view.md` and
`canon/mind-phenomena-and-luminous-clarity.md`, including Part III's list of drifts) on 2026-10-25. Every sutta
quotation and image was checked against the SuttaCentral texts (Sujato and Brahmali translations): DN 1, DN 2, DN 11,
MN 4, MN 6, MN 38, AN 3.60, Pācittiya 8. Changes made for the video:

- **"Because nothing has a fixed nature, things can arise, change, act, and cease"** (article Part I §3B) is replaced by
  the canon's framing: a thing with its nature fixed from its own side could not respond, combine or change, and
  *Fundamental Verses* 24.14 is Nāgārjuna's reply to critics (canon Part I point 8, "Emptiness enables nothing and
  explains nothing", and point 12). The article still has the old sentence, and so does the `build.py` video script
  (ep95); both are to be corrected.
- **The closing verse 24.14**, which ends the article, is not used as the video's last line, so it is not heard as
  "emptiness makes things work". The source ends on the article's own conclusion instead.
- **The DN 11 verse "consciousness … radiant all-round"** gets a precision note, and its last line ("with the
  cessation of consciousness, here they cease") is kept, so it is not read as a luminous ground (canon Part I point 25
  and Part II points 1–2).
- **Karma** keeps the canon's own wording ("agent, action and result are empty"; a karma with its own nature could
  never be made or end) from point 20.
