# Making videos: a guide for John

What to do when you want a video for a new bonus article or a new ebook. Claude does the work. This page shows
where you come in.

**Every time:** when you start a Claude session, select **both repositories**: `JohnTLM/Videos` (everything for
making videos) and `JohnTLM/thusness-website` (the website). Then say what you want in plain words. The session
finds the rules in these repositories, so there is nothing to explain.

## A new bonus article

**Start:** put the article in Drive (`website/bonus-articles`) and say, for example:
*"Make the video for my new bonus article The Illusion of the Given."*

1. **Script.** Claude writes the narration: 10–12 minutes, longer when the article is rich. **You approve it.**
2. **Drawings and build.** Claude draws the scenes and builds the video in Andrew's voice, with subtitles.
   The voice is free.
3. **Preview.** Claude shows you the video. **You approve it, or ask for changes.**
4. **Video files.** Claude sends you two MP4s (full size and phone size). **You drop them into the Drive folder
   Claude names.**
5. **Saving.** Claude saves the script, drawings and subtitles here and opens a pull request. **You merge it.**
6. **Website.** Claude adds the article and its video to the site. **You say "go live", then "push".**
7. **Optional.** Once you are happy with the video, Claude can write the NotebookLM files for a second version
   (`NOTEBOOKLM-VIDEOS.md`). Making that version is up to you.

## A new ebook

**Start:** put the manuscript in Drive and say, for example:
*"Add my new book X to the website and make videos for its chapters."*

A new book is a new video series, so first **you make a few choices**: the drawing style, the colour, the voice,
and whether any chapters reuse an existing bonus-article video.

1. **Pilot.** Claude makes the first two chapters' videos. **You approve them** before the rest are made.
2. **The rest.** Claude writes all the other scripts. **You approve them** before the drawings are made. Then they
   are built one by one.
3. Then steps 4–6 above (Drive, merge, go live), in batches.
4. If you want the book as a PDF, say so (the website's notes, `prog-spec.md` section 9a, have the steps).

## Your short checklist

- Select **both repositories** when you start a session.
- **Approve** scripts and previews.
- **Drop the MP4s** into the Drive folder you are given.
- **Merge** the pull request on GitHub: press **"Merge pull request"**, then **"Confirm merge"**. The page then shows
  a purple "Merged" badge.
- Say **"go live"** and **"push"** for the website.
- At the end, ask: *"Is everything saved to the Videos repo?"*

## Words used here

- **Repository:** a project's folder on GitHub, with its full history.
- **Branch:** a working copy where changes are made before they are accepted.
- **Pull request:** a request to take a branch's changes into the main version. You see every change first, and
  nothing changes until you merge it.
- **Merge:** accept the changes. Future sessions see them from then on.
- **Push:** send saved work from the session to GitHub.
