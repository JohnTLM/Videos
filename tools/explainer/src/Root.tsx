import React from "react";
import { Composition } from "remotion";
import { ChapterModule, ChapterProps, makeChapter } from "./Chapter";

const empty: ChapterProps = {
  chapter: 1, chapterLabel: "1", title: "", titleSec: 5, introAudio: "", introStart: 1, narration: "",
  durationSec: 10, words: [], cues: [],
};

/** Root with a single "Chapter" composition for one chapter module.
 *  build.py writes src/entries/chNN.ts: registerRoot(makeRoot(ChNN)), so each chapter bundles alone. */
export const makeRoot = (mod: ChapterModule): React.FC => {
  const Comp = makeChapter(mod);
  return () => (
    <Composition
      id="Chapter"
      component={Comp}
      fps={30}
      width={1920}
      height={1080}
      durationInFrames={300}
      defaultProps={empty}
      calculateMetadata={({ props }) => ({ durationInFrames: Math.round(props.durationSec * 30) })}
    />
  );
};
