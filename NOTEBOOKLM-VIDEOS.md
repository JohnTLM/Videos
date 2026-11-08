# Bonus-article videos made with NotebookLM

The second, optional version of a bonus-article video. **`build.py` is the main route** (owner, 2026-10-24): write
these files only after the owner is satisfied with the `build.py` video (`README.md`). The owner may or may not then
make the NotebookLM version. **No word limit:** the source covers the whole article. Worked example:
`new-documents/carrierless-continuity/`.

## What Claude delivers

Two Markdown files, named after the article in lowercase kebab-case (owner, 2026-11-08; EBooks `prog-spec.md`
section 6.7). Older packs keep their names (`…-notebooklm-source.md` / `…-notebooklm-prompt.md`, or `notebooklm-instructions.md` /
`<topic>-sources.md`). A pack for a whole topic uses the same two names.

1. **`<article-slug>-notebooklm-sources.md`**: the article as a NotebookLM source, after Claude has reviewed it.
   - **Review first.** Read the article in EBooks `Bonus Articles/<slug>/` (the own-voice Markdown when there is
     one). Check it against the Canon View (EBooks `Canon/canon/nature-canonical-view.md` and
     `Canon/canon/mind-phenomena-and-luminous-clarity.md`, including Part III's list of drifts) and against orthodox
     Prāsaṅgika MMK and non-foundational Nyingma Dzogchen. Verify every citation and quotation; drop any that can't be
     confirmed. Show the owner what was found before writing the source.
   - **Then write it** as `# Source 1. <title>`: numbered sections in the order the video should follow, with the
     whole argument, its examples and its sources. Not shortened to a script.
   - **Precision notes:** a short italic note under any section where a summary could slip, saying what not to say.
     Typical slips: bringing real momentary events back, making awareness or luminosity a ground, "because empty, it
     can arise", a stream that continues through sleep or death, ending on "what remains".
   - **End with a pronunciation list** for every Sanskrit, Pāli, Tibetan and Japanese name and term, glossed
     accurately (rigpa is knowing awareness, not "recognition").
2. **`<article-slug>-notebooklm-instructions.md`**: what the owner does in NotebookLM.
   - **He is a practitioner, never a teacher** (owner, 2026-11-08: "I m not a teacher and refused to be one"): never
     stage a student asking him, never call viewers or readers his students, never give him a teaching, advising or
     guiding role. He shares his own journey, experiences and research (EBooks `prog-spec.md` section 2).
   - Setup: a new notebook containing only this source; Video Overview; Cinematic style.
   - The "Customise" box text, long and short versions (owner, 2026-11-08): the key points, the most likely slips, the
     main visuals, and the Canon View stance to keep.
   - A record of the canon check: date, and what was changed to fit the canon.

The owner approves both. Save them in EBooks `Bonus Articles/<slug>/drive/` (their one home; the server copies it to
the article's private Drive folder within about 5 minutes), and send both with `SendUserFile`. A revision replaces
the same files.

## After the owner generates the video

1. **Download.** The owner shares the MP4 into Drive `Inbox` (the server files it into the article's folder) and, for
   the review only, turns on "Anyone with the link". Download it with
   `https://drive.usercontent.google.com/download?id=<id>&export=download&confirm=t` (private files return a sign-in
   page; the Drive connector can't carry files this large). Remind the owner to set it back to Restricted after.
2. **Transcribe** with faster-whisper `small.en`, word timestamps. Decode the audio with ffmpeg to 16 kHz PCM first
   (the installed PyAV doesn't work with faster-whisper). The model download needs `huggingface.co` and `*.hf.co`
   (allowed). Whisper mishears names: re-transcribe those passages with the correct spellings as `initial_prompt`
   before reporting a mispronunciation.
3. **Review** the transcript against the precision notes and the Canon View. Report what is right, what must be cut,
   what is optional, and what cannot be fixed by cutting, with timestamps. Correct the source if it caused a slip.
4. **Cut, after the owner approves.** Cut in pauses (ffmpeg `silencedetect`) near scene changes
   (`select='gt(scene,0.3)'`). Encode each kept segment, then concatenate with `loudnorm` (template: `render-v2.py` in
   the worked example). If the next sentence starts before its shot does, hold that shot's first frame (`tpad`) rather
   than show the removed shot. Check every join: transcribe across it and look at frames on both sides.
5. **YouTube texts.** Title: **never "NotebookLM"**; it says what the video is about (owner, 2026-11-08; the
   description may mention NotebookLM). Description with chapters (each checked against the cut video's audio, at
   least 10 s each), ending with the owner's disclaimer (EBooks `prog-spec.md` section 2: "All views and understanding
   here are my own …"), tags within 500 characters, and a 1280×720 thumbnail: a frame from the video beside a dark panel,
   Cormorant Garamond title in `#ece7da`, Source Sans 3 kicker in `#b9b4a6`.
6. **Hand over and save.** Send the cut MP4 and the thumbnail (`SendUserFile`). The owner uploads it as Unlisted and
   says "Uploaded" with the link; then the same route as the main video (`README.md`). Commit the two Markdown files,
   the render script, the transcript, the YouTube text and the thumbnail to `new-documents/<slug>/` with a README
   listing the cuts. Not the MP4.
