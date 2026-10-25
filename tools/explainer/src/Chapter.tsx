// One chapter video: spoken title card, then the narrated body with explainer drawings.
import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { Background, Bokeh, Cue, CueCtx, Fonts, TitleCard, Subtitles, Word, makeCues, ramp, useT } from "./lib";

export type ChapterModule = { PHRASES: string[]; Body: React.FC };

export type ChapterProps = {
  chapter: number;
  chapterLabel: string;   // as written in the manuscript, e.g. "1"
  labelWord?: string;     // word before the number on the title card: "Chapter" (default), "Episode", ...
  title: string;
  titleSec: number;       // length of the title card (or of the short lead-in when showTitle is false)
  showTitle?: boolean;    // false: start without chapter number and title (script front matter `intro: no`)
  introAudio: string;     // spoken "Chapter N. Title." (in public/)
  introStart: number;     // seconds into the title card
  narration: string;      // body narration (in public/)
  durationSec: number;    // whole video
  words: Word[];          // body word timings (seconds from body start)
  cues: Cue[];            // subtitles, absolute video time
};

const EndFade: React.FC<{ dur: number }> = ({ dur }) => {
  const { t } = useT();
  return <AbsoluteFill style={{ background: "#000", opacity: ramp(t, dur - 1.5, 1.5) }} />;
};

/** Build the video component for one chapter module (src/chapters/ChNN.tsx). */
export const makeChapter = (ch: ChapterModule): React.FC<ChapterProps> => (p) => {
  const { fps } = useVideoConfig();
  const cues = React.useMemo(() => makeCues(p.words, ch.PHRASES), [p.words]);
  const titleFrames = Math.round(p.titleSec * fps);
  return (
    <AbsoluteFill style={{ backgroundColor: "#06060d" }}>
      <Fonts />
      {p.showTitle !== false && (
        <Sequence durationInFrames={titleFrames}>
          <Background moods={[{ t: 0, a: "rgba(60,50,120,0.45)", b: "rgba(150,110,50,0.35)", c: "rgba(30,90,110,0.3)" }]} />
          <Bokeh n={24} />
          <TitleCard chapter={p.chapterLabel} title={p.title} dur={p.titleSec} word={p.labelWord} />
          <Sequence from={Math.round(p.introStart * fps)}><Audio src={staticFile(p.introAudio)} /></Sequence>
        </Sequence>
      )}
      {p.showTitle === false && (
        // no title card: a short lead-in of the living background before the narration starts
        <Sequence durationInFrames={titleFrames + 1}>
          <Background moods={[{ t: 0, a: "rgba(30,110,130,0.5)", b: "rgba(110,60,170,0.45)", c: "rgba(150,110,50,0.35)" }]} />
        </Sequence>
      )}
      <Sequence from={titleFrames}>
        <CueCtx.Provider value={cues}><ch.Body /></CueCtx.Provider>
        <Audio src={staticFile(p.narration)} />
      </Sequence>
      <Subtitles cues={p.cues} />
      <EndFade dur={p.durationSec} />
    </AbsoluteFill>
  );
};
