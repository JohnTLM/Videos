# Bonus-article videos made with NotebookLM

The second, optional version of a bonus-article video. **`build.py` is the main route** (owner's rule,
2026-10-24): first build the `build.py` video (`README.md`, *Making one video*), and write these NotebookLM files only after
the owner is satisfied with it. The owner may or may not then make the NotebookLM version. **There is no word
limit** here: the 450–550-word script rule belongs only to `build.py`'s synthetic-voice drawing videos. The source
covers the whole article.

Worked example: `new-documents/carrierless-continuity/` (2026-10-23).

## What Claude delivers for every video

**One naming standard** (owner, 2026-11-08, building on 2026-10-25 and 2026-10-27): two Markdown files named after
the article, `<article-slug>` in lowercase kebab-case, the same for every pack (EBooks `prog-spec.md` section 6.7).
Packs made before 2026-11-08 keep their old names (`…-notebooklm-source.md` / `…-notebooklm-prompt.md`, or
`notebooklm-instructions.md` / `<topic>-sources.md`).

1. **`<article-slug>-notebooklm-sources.md`**: the article as a NotebookLM source, after Claude has reviewed it.
   - **Review first.** Read the article: its source is EBooks `Bonus Articles/<slug>/` (the own-voice Markdown when
     there is one). Check it against the Canon View (EBooks `Canon/canon/nature-canonical-view.md` and
     `Canon/canon/mind-phenomena-and-luminous-clarity.md`, including Part III's list of drifts) and against orthodox
     Prāsaṅgika MMK and non-foundational Nyingma Dzogchen. Verify every citation and quotation, and don't keep
     one that can't be confirmed. Show the owner what was found before writing the source.
   - **Then write it** as `# Source 1. <title>`: numbered sections in the order the video should follow, with the
     whole argument, its examples and its sources. Do not shorten it to a script.
   - **Add precision notes.** A short italic note under any section where a summary could slip, saying what not
     to say. Typical slips are bringing real momentary events back, making awareness or luminosity a ground,
     "because empty, it can arise", a stream that continues through sleep or death, and ending on "what remains".
   - **End with a pronunciation list** for every Sanskrit, Pāli, Tibetan and Japanese name and term. Gloss terms
     accurately: rigpa is knowing awareness, not "recognition".
2. **`<article-slug>-notebooklm-instructions.md`**: what the owner does in NotebookLM.
   - **He is a practitioner, never a teacher** (owner, 2026-11-08: "I m not a teacher and refused to be one. I m a practitioner sharing my journey, experiences and researches on those I have gone through"): never stage a student asking him, never call viewers or readers his students, never give him a teaching, advising or guiding role. He shares his own journey, experiences and research (EBooks `prog-spec.md` section 2).
   - Setup steps: a new notebook containing only this source; Video Overview; Cinematic style.
   - The text for the "Customise" box: a full steering prompt and a short version for when the box has a character
     limit. Name the key points, the most likely slips and the main visuals, and the Canon View stance to keep.
   - A record of the canon check: date, and what was changed to fit the canon.

The owner approves both. **Where they are saved:** in EBooks `Bonus Articles/<slug>/drive/` (their one home): the server copies that folder
into the article's private Drive folder within about 5 minutes. Also send both with `SendUserFile`. A revision
replaces the same files; nothing to delete. A pack for a whole topic follows the same two names (EBooks
`prog-spec.md` section 6.7).

## After the owner generates the video

1. **Download.** The owner shares NotebookLM's MP4 into Drive `Inbox` from the phone (the server files it into the
   article's folder) and, for the review only, turns on "Anyone with the link". Download it with
   `https://drive.usercontent.google.com/download?id=<id>&export=download&confirm=t` (private files return a sign-in
   page, and the Drive connector can't carry files this large). Remind the owner to set it back to Restricted after.
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
5. **YouTube.** Write a title (**never "NotebookLM" in the title**; the title says what the video is about, e.g. *Inner Winds and Subtle Body Practices*; owner, 2026-11-08: "In future, don't put notebooklm in the title. The title conveys the content." The description may say it was made with NotebookLM), a description with chapters (each checked against the cut video's audio; YouTube
   needs each chapter to be at least 10 s), tags within 500 characters, and a 1280×720 thumbnail. The thumbnail
   uses a frame from the video beside a dark panel: Cormorant Garamond title in `#ece7da`, Source Sans 3 kicker in
   `#b9b4a6`.
6. **Hand over and save.** Send the cut MP4 and the thumbnail to the owner (`SendUserFile`). The owner uploads it to
   YouTube as Unlisted and says "Uploaded" with the link; a task note then has the server put on the texts and
   playlist and link it from the page (the same route as the main video, `README.md`). Commit the two Markdown files,
   the render script, the transcript, the YouTube text and the thumbnail to `new-documents/<slug>/` with a README
   listing the cuts, and merge (standing OK). The MP4 is not committed.
