# Bonus-article videos made with NotebookLM

The second, optional version of a bonus-article video. **`build.py` is the main route** (owner's rule,
2026-10-24): first build the `build.py` video (`NEW-DOCUMENT-VIDEOS.md`), and write these NotebookLM files only after
the owner is satisfied with it. The owner may or may not then make the NotebookLM version. **There is no word
limit** here: the 450–550-word script rule belongs only to `build.py`'s synthetic-voice drawing videos. The source
covers the whole article.

Worked example: `new-documents/carrierless-continuity/` (2026-10-23).

## What Claude delivers for every video

**File names carry the article's name** (owner's rule, 2026-10-25). `<article-slug>` is the bonus article's title in
lowercase kebab-case, e.g. `the-illusion-of-the-given-notebooklm-source.md` and
`the-illusion-of-the-given-notebooklm-prompt.md`, so the files can be told apart once they are downloaded or put
in Drive. (The Carrierless Continuity files from 2026-10-23 keep their old names.)

Two Markdown files in `new-documents/<slug>/`:

1. **`<article-slug>-notebooklm-source.md`**: the article as a NotebookLM source, after Claude has reviewed it.
   - **Review first.** Read the article: the site page is its source, and a Markdown copy is in Drive
     `website/bonus-articles`. Check it against CanonView (`canon/nature-canonical-view.md` and
     `canon/mind-phenomena-and-luminous-clarity.md`, including Part III's list of drifts) and against orthodox
     Prāsaṅgika MMK and non-foundational Nyingma Dzogchen. Verify every citation and quotation, and don't keep
     one that can't be confirmed. Show the owner what was found before writing the source.
   - **Then write the source.** Use numbered sections in the order the video should follow, with the whole
     argument, its examples and its sources. Do not shorten it to a script.
   - **Add precision notes.** A short italic note under any section where a summary could slip, saying what not
     to say. Typical slips are bringing real momentary events back, making awareness or luminosity a ground,
     "because empty, it can arise", a stream that continues through sleep or death, and ending on "what remains".
   - **End with a pronunciation list** for every Sanskrit, Pāli, Tibetan and Japanese name and term. Gloss terms
     accurately: rigpa is knowing awareness, not "recognition".
2. **`<article-slug>-notebooklm-prompt.md`**: the custom prompt for NotebookLM.
   - Setup steps: a new notebook containing only this source; Video Overview; Cinematic style.
   - A full steering prompt and a short version for when the box has a character limit. Name the key points, the
     most likely slips and the main visuals.
   - A record of the canon check: date, and what was changed to fit the canon.

The owner approves both. The source also goes into the owner's Drive folder for the video as a Google Doc, created
from the Markdown with `contentMimeType: text/markdown`. The Drive connector cannot change a Doc's contents, so for
a revision create a new Doc and rename the old one "(superseded <date>)". Delete it only when the owner asks.

## After the owner generates the video

1. **Download.** The owner saves the MP4 to Drive and turns on "Anyone with the link" sharing. Download it with
   `https://drive.usercontent.google.com/download?id=<id>&export=download&confirm=t`. Private files return a
   sign-in page instead, and the Drive connector can't carry files this large.
2. **Transcribe.** Use faster-whisper `small.en` with word timestamps. Decode the audio with ffmpeg to 16 kHz PCM
   first: the installed PyAV doesn't work with faster-whisper. The model download needs `huggingface.co` and
   `*.hf.co`, which the environment's network allows. Whisper mishears names, so re-transcribe those passages
   with the correct spellings as `initial_prompt` before reporting a mispronunciation.
3. **Review.** Check the transcript against the precision notes and CanonView. Report what is right, what must
   be cut, what is optional, and what cannot be fixed by cutting, with timestamps. Correct the source if it
   caused a slip.
4. **Cut, after the owner approves.** Put cut points in pauses (ffmpeg `silencedetect`) and near scene changes
   (`select='gt(scene,0.3)'`). Encode each kept segment, then concatenate with `loudnorm`; `render-v2.py` in the
   worked example is the template. If the next sentence starts before its shot does, hold that shot's first frame
   (`tpad`) rather than show the removed shot. Check every join: transcribe across it and look at frames on both
   sides.
5. **YouTube.** Write a title, a description with chapters (each checked against the cut video's audio; YouTube
   needs each chapter to be at least 10 s), tags within 500 characters, and a 1280×720 thumbnail. The thumbnail
   uses a frame from the video beside a dark panel: Cormorant Garamond title in `#ece7da`, Source Sans 3 kicker in
   `#b9b4a6`.
6. **Hand over and save.** Send the MP4, thumbnail and YouTube text to the owner (SendUserFile). Commit the two
   Markdown files, the render script, the transcript, the YouTube text and the thumbnail to `new-documents/<slug>/`
   with a README listing the cuts, then open and merge a pull request when the owner says so. The MP4 is not
   committed.
