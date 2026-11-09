// After Anatta · Dependent Arising, a draft: Five Elements, Five Lights, Rainbow Body (Part 6 of 6, a DRAFT).
// DRAFT, NOT FOR PUBLISHING: a private test video for the owner (section 17 stays a draft, owner 2026-11-08).
// (EBooks Bonus Articles/dependent-arising-and-designation, section 17; notebooklm-parts/draft-section-17-five-lights.)
// Arc: Part 6, a draft -> his note: my contemplation, not claimed as orthodox, to be tested; history, method, view -> the
// videos -> five steps from the apple (the article's section 17 diagram: five boxes, the knot below step 3, the wisdom of
// dependent arising untying it) -> the key middle step -> one movement, two descriptions -> what reasoning can and cannot show
// -> why the wisdom of dependent arising comes first -> trekcho and thogal -> why the view becomes clear -> misheard and seen ->
// four guards -> the thread -> the apple again: if you think you understand it, keep looking.
// Stance: the lights are never drawn as a shining substance or a layer underneath; nothing condenses out of or returns to a
// source; a "ground", a "hidden core", a "luminous stuff" and "a goal" are drawn only to be struck. The rainbow body is drawn as
// a realization, never as a body turning into light.
// Cue phrases avoid the respelled names (Dzogchen, Longchenpa, samsara, Abhidharma, trekcho, thogal, ka dag).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, Svg, DrawPath, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening and note
  "This is Part 6 of 6, a draft", "This is After Anatta",
  "Before anything else, a note", "This part is a draft", "It comes from my own contemplation",
  "I have not read these links put this way anywhere else", "And I do not claim that this is how orthodox",
  "So please read it as my contemplation, to be tested",
  "It is simply where many years of refinement have brought me", "holding three things together", "The history",
  "The method of practice", "And the view",
  // the videos
  "That is why I made the videos", "on inner winds and the subtle body", "on the five elements, Chinese and Tibetan",
  "And the five parts before this one", "If we live in the wisdom of dependent arising", "are recognised as the five lights",
  "That is what the rainbow body is about", "this is where the pieces fall into place",
  // the five steps
  "So let me go step by step, from the apple",
  "Step one, the apple", "Toss an apple and catch it", "But where exactly is it", "Is it the red I see", "The press on my palm",
  "The weight, the arc through the air", "Look for that solid apple, and it is never found",
  "What is there is hardness, coolness, red, weight", "and designated as one thing",
  "The apple still works perfectly in the hand", "and no substrate under it", "They are designated too",
  "That is dependent arising, in one ordinary moment",
  "Step two, the five elements", "Earth is hardness", "Water is cohesion", "Fire is heat", "Wind is motion", "And space is room",
  "they are already properties, not stuff", "They are the apple's appearings, given names",
  "Step three, the habit", "What makes them seem solid is the knot", "into one thing out there, and into one body in here",
  "describes the same moment from the other side", "The display, not recognised, is taken as other",
  "From the elements come the body and the world", "So the ordinary body is light not recognised",
  "Step four, the five lights", "five lights. Untie the knot, and nothing is lost", "Hardness, warmth and motion remain, vivid and unowned",
  "That vivid, unfound appearing is what", "The elements, recognised as display",
  "Step five, the rainbow body", "carried all the way through, the body included", "It is a realization",
  "What happens to the corpse is only a sign",
  "So the apple is the whole path in small", "Holding the apple solid is where", "Seeing through it is where the rainbow body begins",
  "The key is the middle step", "is the same habit that makes the lights harden into the elements",
  "is not a different path from the rainbow body", "It is the beginning of the same path",
  // one movement
  "Put the apple beside the five lights", "calls the display taken as other", "is what I call the knot",
  "As if hardness, red and sweetness belonged to a hidden core", "the knot is the formations aggregate",
  "It is the grasping that hardens the lights", "Untie the knot, and nothing is lost",
  "Just this hardness, this red, this coolness, this sweetness", "many unmixed streams of vivid appearing",
  "would say the five lights", "I say: just this, vivid and light",
  // reasoning
  "what reasoning can show, and what it cannot", "Steps one to three can be checked by reasoning",
  "Steps four and five are a matter of realization", "Reasoning can point to them", "It cannot test them",
  "to be tested in practice",
  // why first
  "Why does the wisdom of dependent arising come first", "It is the way towards it",
  "the elements stay solid, however much we hear about light", "the solidity has nothing left to rest on",
  "Then the recognition of the lights becomes natural",
  // the two practices
  "has two practices here", "cutting through, frees the mind from grasping", "direct crossing, recognises the appearing side",
  "Both are the same knot coming untied", "Once from the side of the mind", "and once from the side of appearance",
  // the view
  "And this is why the view of", "its words are easily heard the wrong way", "The five lights sound like a shining substance",
  "The ground sounds like a source they condense out of", "The rainbow body sounds like a body turning into light",
  "And practice sounds like unfreezing frozen energy", "every one of these falls away",
  "The essence of the ground is primordial purity", "That is, emptiness", "calls it a groundless ground",
  "The lights are its display, with nothing behind them", "Condensing into the elements names how appearing is taken",
  "And spontaneous presence is dependent arising seen without the habit of fixing", "It is never uncaused",
  "So nothing condenses, and nothing needs to be unfrozen", "There was only a deep habit",
  // misheard and seen
  "So each word has a way it is misheard", "Dependent arising is misheard as a web",
  "The five elements are misheard as five kinds of stuff", "The five lights are misheard as a luminous substance",
  "And the rainbow body is misheard as a goal",
  // four guards
  "Four guards keep this from going wrong", "First, the lights are not a stuff", "That is a substrate again",
  "Clarity is the knowing clarity of appearing", "Second, nothing returns to a source", "Nothing is produced either",
  "the coarse body no longer appears as coarse", "Third, the colour tables are maps",
  "Any single table is one lineage's pairing for practice", "Fourth, it is not the measure of insight",
  "Many great masters left ordinary bodies", "The reports of bodies shrinking cannot be checked",
  // the thread
  "So the thread runs one way", "The wisdom of dependent arising unties the habit", "The elements are no longer held as solid",
  "They are recognised as the five lights", "is what the rainbow body means", "In essence, a realization, not a goal",
  "All views and understanding here are my own",
  // the apple again
  "Pick up an apple, or just picture one", "Look for the solid apple behind the red",
  "It is not found, and the apple is still right here, working", "That one moment holds the whole thread",
  "If you think you understand it, keep looking",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
};

// the five qualities / elements, each with its colour
const EL: [string, string, string][] = [
  ["earth", "hardness", GOLD], ["water", "cohesion", ICE], ["fire", "heat", WARM], ["wind", "motion", TEAL], ["space", "room", VIOLET],
];

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
const Items: React.FC<{ items: It[] }> = ({ items }) => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <>
      {items.map(([cue, x, y, node, opt = {} as Opt], i) => {
        const a = c(cue) + (opt.d ?? 0);
        const out = opt.until ? 1 - ramp(t, c(opt.until) + (opt.ud ?? 0), 0.4) : 1;
        return (
          <At key={i} x={x} y={y} o={ramp(t, a, 0.5) * out * (opt.o ?? 1)} s={opt.pop ? pop(t, fps, a) : undefined}>
            {node}
          </At>
        );
      })}
    </>
  );
};
const Wd: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;
/** A chip struck through at `strikeAt`: only for what is never found. */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);
/** A dashed ring that draws round something at `at`. */
const Pick: React.FC<{ at: number; w: number; h: number; color?: string }> = ({ at, w, h, color = GOLD }) => {
  const { t } = useT();
  const p = ramp(t, at, 0.8);
  const len = 2 * Math.PI * Math.sqrt((w * w + h * h) / 8);
  return (
    <svg width={w + 20} height={h + 20} style={{ overflow: "visible", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      <ellipse cx={(w + 20) / 2} cy={(h + 20) / 2} rx={w / 2} ry={h / 2} fill="none" stroke={color} strokeWidth={4}
        strokeDasharray={`${len * p} ${len}`} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
    </svg>
  );
};
/** A box on the board. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; sub2?: string; dashed?: boolean; ts?: number }> =
  ({ c, w = 460, title, sub, sub2, dashed, ts = 36 }) => (
    <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px ${dashed ? "dashed" : "solid"} ${c}`, background: "rgba(10,12,30,0.72)",
      boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
      <Wd c={c} s={ts} serif>{title}</Wd>
      {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
      {sub2 ? <div style={{ marginTop: 4 }}><Wd c={CHALK} s={24}>{sub2}</Wd></div> : null}
    </div>
  );
/** An apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
    <path d="M100 58 C70 30 22 44 24 98 C26 150 62 186 100 172 C138 186 174 150 176 98 C178 44 130 30 100 58 Z"
      fill="rgba(226,70,70,0.55)" stroke="#FF6B6B" strokeWidth={5} style={{ filter: "drop-shadow(0 0 14px #FF6B6B)" }} />
    <path d="M100 58 C100 44 104 30 112 20" stroke="#B08850" strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M108 34 C124 18 146 20 154 28 C140 40 122 42 108 34 Z" fill="rgba(143,212,154,0.5)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
/** A simple seated figure, outlined. */
const Figure: React.FC<{ color?: string; p?: number }> = ({ color = CHALK, p = 1 }) => (
  <svg width={260} height={300} viewBox="0 0 260 300" style={{ overflow: "visible" }}>
    <DrawPath d="M130 30 a34 34 0 1 1 -0.1 0 Z" p={p} color={color} width={5} len={240} />
    <DrawPath d="M130 98 C88 104 76 150 82 200 M130 98 C172 104 184 150 178 200" p={p} color={color} width={5} len={400} />
    <DrawPath d="M40 250 C70 214 110 210 130 214 C150 210 190 214 220 250 C180 262 80 262 40 250 Z" p={p} color={color} width={5} len={700} />
    <DrawPath d="M82 200 C96 214 116 218 130 214 C144 218 164 214 178 200" p={p} color={color} width={5} len={300} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  return (
    <AbsoluteFill>
      <At x={960} y={340} o={ramp(t, 0.3, 0.8)}><Wd c={CHALK} s={70} serif>Five Elements, Five Lights, Rainbow Body</Wd></At>
      <At x={960} y={450} o={ramp(t, c("This is Part 6 of 6, a draft") + 0.6, 0.8)}><Wd c={GOLD} s={36} serif>Part 6 of 6 · a draft</Wd></At>
      <At x={960} y={560} o={ramp(t, aa, 0.8)}><Wd c={DIM} s={30}>After Anatta: notes by John Tan, known as Thusness</Wd></At>
    </AbsoluteFill>
  );
};

const NoteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const three = c("It is simply where many years of refinement have brought me");
  const out = 1 - ramp(t, three, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["Before anything else, a note", 960, 110, <Wd c={GOLD} s={42} serif>first, a note</Wd>, { until: "It is simply where many years of refinement have brought me" }]]} />
      <At x={960} y={420} o={ramp(t, c("This part is a draft"), 0.5) * out}>
        <div style={{ width: 1100, padding: "34px 40px", borderRadius: 18, border: `3px dashed ${GOLD}`, background: "rgba(10,12,30,0.7)" }}>
          <div style={{ opacity: ramp(t, c("This part is a draft"), 0.5) }}><Wd c={GOLD} s={46} serif>a draft</Wd></div>
          <div style={{ marginTop: 18, opacity: ramp(t, c("It comes from my own contemplation"), 0.5) }}><Wd c={CHALK} s={30}>my own contemplation, over many years</Wd></div>
          <div style={{ marginTop: 14, opacity: ramp(t, c("I have not read these links put this way anywhere else"), 0.5) }}><Wd c={CHALK} s={30}>links I have not read put this way elsewhere</Wd></div>
          <div style={{ marginTop: 14, opacity: ramp(t, c("And I do not claim that this is how orthodox"), 0.5) }}><Wd c={DIM} s={30}>not claimed as orthodox Dzogchen</Wd></div>
        </div>
      </At>
      <Items items={[["So please read it as my contemplation, to be tested", 960, 720, <Wd c={TEAL} s={36} serif>read it as contemplation, to be tested</Wd>, { until: "It is simply where many years of refinement have brought me" }]]} />
      <Items items={[
        ["It is simply where many years of refinement have brought me", 960, 150, <Wd c={CHALK} s={38} serif>how the links became visible</Wd>],
        ["holding three things together", 960, 250, <Wd c={GOLD} s={32}>three things held together</Wd>],
        ["The history", 420, 480, <Box c={GOLD} w={460} title="the history" sub="the Indian five, the Chinese five" sub2="and the five lights, side by side in Tibet" ts={38} />],
        ["The method of practice", 960, 480, <Box c={TEAL} w={460} title="the method" sub="trekchö and thögal," sub2="and the logic that unties the habit" ts={38} />],
        ["And the view", 1500, 480, <Box c={VIOLET} w={460} title="the view" sub="dependent arising," sub2="emptiness never a ground" ts={38} />],
      ]} />
    </AbsoluteFill>
  );
};

const VideosScene: React.FC = () => {
  return (
    <AbsoluteFill>
      <Items items={[
        ["That is why I made the videos", 960, 120, <Wd c={CHALK} s={40} serif>why I made these videos</Wd>],
        ["on inner winds and the subtle body", 960, 250, <K c={TEAL} s={30}>1 · Inner Winds and Subtle Body Practices</K>],
        ["on the five elements, Chinese and Tibetan", 960, 340, <K c={GOLD} s={30}>2 · 5 Elements: Chinese vs Tibet</K>],
        ["And the five parts before this one", 960, 430, <K c={VIOLET} s={30}>3 · Dependent Arising, Parts 1 to 5</K>],
        ["If we live in the wisdom of dependent arising", 960, 560, <Wd c={CHALK} s={32}>living in the wisdom of dependent arising, in time:</Wd>],
        ["are recognised as the five lights", 960, 650, <Wd c={GOLD} s={38} serif>the elements recognised as the five lights</Wd>],
        ["That is what the rainbow body is about", 960, 740, <Wd c={CHALK} s={32}>that is what the rainbow body is about</Wd>],
        ["this is where the pieces fall into place", 960, 810, <Wd c={TEAL} s={28}>one thread</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// the five step boxes of the section 17 diagram
const STEPS: [string, string, string, string, string, boolean][] = [
  ["Step one, the apple", "1. The apple", "appearings met,", "designated as one", CHALK, false],
  ["Step two, the five elements", "2. Five elements", "hardness, cohesion,", "heat, motion, room", CHALK, false],
  ["Step three, the habit", "3. The habit", "ties them into", "one solid thing", WARM, true],
  ["Step four, the five lights", "4. Five lights", "the elements", "seen as display", CHALK, false],
  ["Step five, the rainbow body", "5. Rainbow body", "that recognition,", "all the way through", GOLD, false],
];
const SX = [250, 605, 960, 1315, 1670];
const SY = 200;

const StepsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const step = (i: number) => c(STEPS[i][0]);
  const summary = c("So the apple is the whole path in small");
  const key = c("The key is the middle step");
  const win = (a: number, b: number) => ramp(t, a, 0.5) * (1 - ramp(t, b, 0.4));
  // step 1 parts
  const toss = c("Toss an apple and catch it");
  const k = ((t - toss) % 2.4) / 2.4;
  const tossing = t > toss && t < c("Look for that solid apple, and it is never found");
  const ax = 520 + (tossing ? Math.sin(k * Math.PI) * 0 : 0);
  const ay = 600 - (tossing ? Math.sin(k * Math.PI) * 200 : 0);
  const quals = ["hardness", "coolness", "red", "weight", "the arc"];
  const qcol = [GOLD, ICE, ROSE, VIOLET, TEAL];
  const w1 = win(step(0), step(1));
  const w2 = win(step(1), step(2));
  const w3 = win(step(2), step(3));
  const w4 = win(step(3), step(4));
  const w5 = win(step(4), summary);
  const knotAt = c("What makes them seem solid is the knot");
  const tie = ramp(t, c("into one thing out there, and into one body in here"), 1.2);
  return (
    <AbsoluteFill>
      <Items items={[["So let me go step by step, from the apple", 960, 60, <Wd c={DIM} s={28}>from the apple, step by step</Wd>, { until: "The key is the middle step" }]]} />
      {/* the five boxes */}
      {STEPS.map(([cue, title, a, b, col, dashed], i) => (
        <At key={cue} x={SX[i]} y={SY} o={ramp(t, c(cue), 0.6)}>
          <div style={{ width: 315, padding: "16px 10px", borderRadius: 14, border: `3px ${dashed ? "dashed" : "solid"} ${col}`,
            background: i === 4 ? "rgba(228,194,122,0.12)" : "rgba(10,12,30,0.72)", boxShadow: `0 0 24px ${col}44` }}>
            <Wd c={col === CHALK ? GOLD : col} s={32} serif>{title}</Wd>
            <div style={{ marginTop: 6 }}><Wd c={CHALK} s={23}>{a}</Wd></div>
            <div><Wd c={CHALK} s={23}>{b}</Wd></div>
          </div>
        </At>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Flow key={i} x1={SX[i] + 160} y1={SY} x2={SX[i + 1] - 162} y2={SY} color={GOLD} p={ramp(t, c(STEPS[i + 1][0]), 0.6)} pulses={false} width={4} />
      ))}
      {/* the key: the middle step */}
      <At x={SX[2]} y={SY} o={ramp(t, key, 0.4)}><div style={{ position: "relative", width: 340, height: 150 }}><Pick at={key} w={380} h={190} color={GOLD} /></div></At>
      <Items items={[
        ["The key is the middle step", 960, 60, <Wd c={GOLD} s={34} serif>the key is the middle step</Wd>, { until: "is the same habit that makes the lights harden into the elements" }],
        ["is the same habit that makes the lights harden into the elements", 960, 60, <Wd c={GOLD} s={30}>one habit: the apple held solid, the lights hardened</Wd>, { until: "It is the beginning of the same path" }],
        ["It is the beginning of the same path", 960, 60, <Wd c={GOLD} s={30}>the wisdom of dependent arising: the beginning of the same path</Wd>],
      ]} />

      {/* step 1: the apple */}
      <At x={ax} y={ay} o={w1}><Apple size={200} /></At>
      <At x={520} y={760} o={w1 * ramp(t, toss, 0.5)}><Wd c={DIM} s={26}>toss, catch</Wd></At>
      {[["Is it the red I see", "the red?", 1080, 420], ["The press on my palm", "the press on my palm?", 1440, 420],
        ["The weight, the arc through the air", "the weight? the arc?", 1260, 500]].map(([cue, txt, x, y]) => (
        <At key={cue as string} x={x as number} y={y as number}
          o={w1 * ramp(t, c(cue as string), 0.5) * (1 - ramp(t, c("Look for that solid apple, and it is never found"), 0.4))}>
          <K c={DIM} s={28}>{txt}</K>
        </At>
      ))}
      <At x={1260} y={420} o={w1 * ramp(t, c("Look for that solid apple, and it is never found"), 0.5)}>
        <SK c={DIM} s={28} strikeAt={c("Look for that solid apple, and it is never found") + 1.6}>one solid apple, out there</SK>
      </At>
      <At x={1260} y={540} o={w1}>
        <div style={{ position: "relative", display: "flex", gap: 14 }}>
          {quals.map((q, i) => (
            <div key={q} style={{ opacity: ramp(t, c("What is there is hardness, coolness, red, weight") + 0.45 * i, 0.4) }}><K c={qcol[i]} s={26}>{q}</K></div>
          ))}
          <Pick at={c("and designated as one thing")} w={900} h={120} />
        </div>
      </At>
      <Items items={[
        ["and designated as one thing", 1260, 640, <Wd c={GOLD} s={28}>met together, designated as one: "apple"</Wd>, { until: "Step two, the five elements" }],
        ["The apple still works perfectly in the hand", 1260, 720, <Wd c={TEAL} s={26}>it works: it follows gravity</Wd>, { until: "and no substrate under it" }],
        ["and no substrate under it", 1260, 720, <SK c={DIM} s={24} strikeAt={c("and no substrate under it") + 0.6}>apple-ness inside, a substrate under</SK>, { until: "They are designated too" }],
        ["They are designated too", 1260, 720, <Wd c={CHALK} s={26}>the qualities: designated too, no bottom layer</Wd>, { until: "Step two, the five elements" }],
        ["That is dependent arising, in one ordinary moment", 960, 810, <Wd c={GOLD} s={32} serif>dependent arising, in one ordinary moment</Wd>, { until: "Step two, the five elements" }],
      ]} />

      {/* step 2: the five elements */}
      {[["Earth is hardness", 0, 560, 440], ["Water is cohesion", 1, 960, 440], ["Fire is heat", 2, 1360, 440],
        ["Wind is motion", 3, 760, 550], ["And space is room", 4, 1160, 550]].map(([cue, i, x, y]) => {
        const [el, q, col] = EL[i as number];
        return <At key={cue as string} x={x as number} y={y as number} o={w2 * ramp(t, c(cue as string), 0.5)}><K c={col} s={30}>{el} · {q}</K></At>;
      })}
      <At x={960} y={680} o={w2 * ramp(t, c("they are already properties, not stuff"), 0.5)}><Wd c={CHALK} s={30}>Abhidharma: already properties, not stuff</Wd></At>
      <At x={960} y={780} o={w2 * ramp(t, c("They are the apple's appearings, given names"), 0.5)}><Wd c={GOLD} s={34} serif>the apple's appearings, given names</Wd></At>

      {/* step 3: the knot */}
      <Svg>
        {EL.map(([, q, col], i) => {
          const y = 390 + i * 85;
          return (
            <g key={q} opacity={w3}>
              <line x1={330} y1={y} x2={330 + (640 - 330) * tie} y2={y + (560 - y) * tie} stroke={col} strokeWidth={4} opacity={0.7} />
            </g>
          );
        })}
        <g opacity={w3 * tie}>
          <DrawPath d="M640 520 c60 -30 80 40 20 60 c-60 20 -70 -60 -10 -70 c50 -10 70 60 10 80 c-50 15 -60 -40 -20 -50" p={tie} color={WARM} width={6} len={700} />
        </g>
      </Svg>
      {EL.map(([, q, col], i) => (
        <At key={q} x={250} y={390 + i * 85} o={w3 * ramp(t, knotAt, 0.5)}><K c={col} s={24}>{q}</K></At>
      ))}
      <At x={650} y={680} o={w3 * tie}><Wd c={WARM} s={28}>the knot</Wd></At>
      <At x={650} y={735} o={w3 * tie}><Wd c={CHALK} s={24}>one thing out there · one body in here</Wd></At>
      <Items items={[
        ["describes the same moment from the other side", 1380, 370, <Wd c={DIM} s={26}>the same moment, from the other side</Wd>, { until: "Step four, the five lights" }],
        ["The display, not recognised, is taken as other", 1380, 440, <K c={VIOLET} s={26}>the display, not recognised</K>, { until: "Step four, the five lights" }],
        ["The display, not recognised, is taken as other", 1380, 515, <Wd c={CHALK} s={26}>taken as other, hardens into the elements</Wd>, { d: 1.2, until: "Step four, the five lights" }],
        ["From the elements come the body and the world", 1380, 590, <Wd c={CHALK} s={26}>then the body and the world</Wd>, { until: "Step four, the five lights" }],
        ["So the ordinary body is light not recognised", 1380, 690, <Wd c={GOLD} s={32} serif>the ordinary body: light not recognised</Wd>, { until: "Step four, the five lights" }],
      ]} />

      {/* step 4: five lights, the knot untied */}
      {EL.map(([, q, col], i) => {
        const x = 560 + i * 200;
        const sway = Math.sin(t * 1.3 + i) * 6;
        return (
          <At key={q} x={x} y={500} o={w4 * ramp(t, c("five lights. Untie the knot, and nothing is lost") + 0.25 * i, 0.6)}>
            <div style={{ width: 26, height: 200, borderRadius: 13, transform: `translateX(${sway}px)`,
              background: `linear-gradient(180deg, transparent, ${col}, transparent)`, boxShadow: `0 0 26px ${col}` }} />
            <div style={{ marginTop: 14 }}><Wd c={col} s={26}>{q}</Wd></div>
          </At>
        );
      })}
      <Items items={[
        ["five lights. Untie the knot, and nothing is lost", 960, 340, <Wd c={CHALK} s={30}>untied: nothing is lost</Wd>, { until: "Step five, the rainbow body" }],
        ["Hardness, warmth and motion remain, vivid and unowned", 960, 700, <Wd c={TEAL} s={30}>vivid, unowned, unfound; nothing behind</Wd>, { until: "Step five, the rainbow body" }],
        ["The elements, recognised as display", 960, 790, <Wd c={GOLD} s={34} serif>the five lights: the elements recognised as display</Wd>, { until: "Step five, the rainbow body" }],
      ]} />

      {/* step 5: the rainbow body, a realization */}
      <At x={700} y={560} o={w5}><Figure p={ramp(t, step(4), 1.6)} /></At>
      <Items items={[
        ["carried all the way through, the body included", 1260, 430, <Wd c={CHALK} s={30}>that recognition, all the way through,</Wd>, { until: "So the apple is the whole path in small" }],
        ["carried all the way through, the body included", 1260, 490, <Wd c={CHALK} s={30}>the body included</Wd>, { d: 1.2, until: "So the apple is the whole path in small" }],
        ["It is a realization", 1260, 600, <Wd c={GOLD} s={42} serif>a realization</Wd>, { until: "So the apple is the whole path in small" }],
        ["What happens to the corpse is only a sign", 1260, 700, <Wd c={DIM} s={26}>what happens to the corpse: only a sign</Wd>, { until: "So the apple is the whole path in small" }],
      ]} />

      {/* the whole path in small: the knot below step 3, untied by the wisdom of dependent arising */}
      <Flow x1={SX[2]} y1={SY + 82} x2={SX[2]} y2={398} color={WARM} p={ramp(t, summary + 0.4, 0.6)} pulses={false} width={4} />
      <At x={960} y={460} o={ramp(t, summary + 0.6, 0.6)}>
        <Box c={WARM} w={980} dashed title="Held solid: the knot" sub="appearings tied into a thing out there, and a body in here" ts={34} />
      </At>
      <Flow x1={SX[2]} y1={522} x2={SX[2]} y2={580} color={GOLD} p={ramp(t, summary + 1.6, 0.6)} pulses={false} width={4} />
      <At x={960} y={642} o={ramp(t, summary + 1.8, 0.6)}>
        <Box c={GOLD} w={980} title="The wisdom of dependent arising" sub="unties the same knot: nothing condenses, nothing returns to a source" ts={34} />
      </At>
      <At x={960} y={790} o={ramp(t, c("Holding the apple solid is where"), 0.6)}><Wd c={DIM} s={24}>Holding the apple solid is where saṃsāra starts;</Wd></At>
      <At x={960} y={830} o={ramp(t, c("Seeing through it is where the rainbow body begins"), 0.6)}><Wd c={GOLD} s={24}>seeing through it is where the rainbow body begins.</Wd></At>
    </AbsoluteFill>
  );
};

const MovementScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const untie = c("Untie the knot, and nothing is lost");
  const out = 1 - ramp(t, untie, 0.5);
  const streams = ["this hardness", "this red", "this coolness", "this sweetness"];
  const scol = [GOLD, ROSE, ICE, GREEN];
  return (
    <AbsoluteFill>
      <Items items={[["Put the apple beside the five lights", 960, 110, <Wd c={CHALK} s={40} serif>one movement, two descriptions</Wd>]]} />
      <At x={540} y={300} o={ramp(t, c("calls the display taken as other"), 0.5) * out}><Box c={VIOLET} w={640} title="Dzogchen" sub="the display taken as other," sub2="condensing into elements and a solid body" ts={34} /></At>
      <At x={1380} y={300} o={ramp(t, c("is what I call the knot"), 0.5) * out}><Box c={WARM} w={640} title="the knot" sub="the habit of the inherent framework," sub2="tying appearings into one thing out there" ts={34} /></At>
      <At x={960} y={300} o={ramp(t, c("is what I call the knot") + 0.5, 0.5) * out}><Wd c={GOLD} s={44}>=</Wd></At>
      <At x={960} y={500} o={ramp(t, c("As if hardness, red and sweetness belonged to a hidden core"), 0.5) * out}>
        <SK c={DIM} s={28} strikeAt={c("As if hardness, red and sweetness belonged to a hidden core") + 2.2}>a hidden core owning hardness, red, sweetness</SK>
      </At>
      <Items items={[
        ["the knot is the formations aggregate", 960, 610, <Wd c={CHALK} s={30}>in the five aggregates: formations</Wd>, { until: "Untie the knot, and nothing is lost" }],
        ["It is the grasping that hardens the lights", 960, 700, <Wd c={WARM} s={32}>the grasping that hardens the lights</Wd>, { until: "Untie the knot, and nothing is lost" }],
      ]} />
      {streams.map((s, i) => (
        <At key={s} x={420 + i * 360} y={400} o={ramp(t, c("Just this hardness, this red, this coolness, this sweetness") + 0.5 * i, 0.5)}>
          <div style={{ width: 22, height: 160, margin: "0 auto", borderRadius: 11, background: `linear-gradient(180deg, transparent, ${scol[i]}, transparent)`,
            boxShadow: `0 0 22px ${scol[i]}`, transform: `translateX(${Math.sin(t * 1.2 + i) * 5}px)` }} />
          <div style={{ marginTop: 12 }}><K c={scol[i]} s={28}>{s}</K></div>
        </At>
      ))}
      <Items items={[
        ["Untie the knot, and nothing is lost", 960, 220, <Wd c={TEAL} s={32}>untied: nothing is lost</Wd>],
        ["many unmixed streams of vivid appearing", 960, 620, <Wd c={CHALK} s={30}>unmixed streams of vivid appearing, nothing owning them</Wd>],
        ["would say the five lights", 620, 730, <Wd c={VIOLET} s={32} serif>Dzogchen: the five lights</Wd>],
        ["I say: just this, vivid and light", 1300, 730, <Wd c={GOLD} s={32} serif>I say: just this, vivid and light</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ReasonScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const minis = ["apple", "elements", "habit", "lights", "rainbow body"];
  return (
    <AbsoluteFill>
      <Items items={[["what reasoning can show, and what it cannot", 960, 110, <Wd c={CHALK} s={40} serif>what reasoning can show, and what it cannot</Wd>]]} />
      {minis.map((m, i) => (
        <At key={m} x={300 + i * 330} y={300} o={ramp(t, c("what reasoning can show, and what it cannot") + 0.3 * i, 0.5)}><K c={i < 3 ? TEAL : GOLD} s={28}>{i + 1}. {m}</K></At>
      ))}
      <Svg>
        <path d="M200 360 V380 H960 V360" fill="none" stroke={TEAL} strokeWidth={4} opacity={ramp(t, c("Steps one to three can be checked by reasoning"), 0.5)} />
        <path d="M1160 360 V380 H1680 V360" fill="none" stroke={GOLD} strokeWidth={4} opacity={ramp(t, c("Steps four and five are a matter of realization"), 0.5)} />
      </Svg>
      <Items items={[
        ["Steps one to three can be checked by reasoning", 580, 450, <Wd c={TEAL} s={32} serif>checked by reasoning</Wd>],
        ["Steps one to three can be checked by reasoning", 580, 530, <Wd c={CHALK} s={24}>apple not found · qualities of appearing · the habit ties</Wd>, { d: 1.5 }],
        ["Steps four and five are a matter of realization", 1420, 450, <Wd c={GOLD} s={32} serif>realization, not argument</Wd>],
        ["Reasoning can point to them", 1420, 530, <Wd c={CHALK} s={26}>reasoning can point to them</Wd>],
        ["It cannot test them", 1420, 590, <Wd c={WARM} s={26}>it cannot test them</Wd>],
        ["to be tested in practice", 960, 740, <Wd c={GOLD} s={34} serif>contemplation, to be tested in practice</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FirstScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nat = c("the solidity has nothing left to rest on");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Why does the wisdom of dependent arising come first", 960, 110, <Wd c={CHALK} s={40} serif>why the wisdom of dependent arising comes first</Wd>],
        ["Why does the wisdom of dependent arising come first", 960, 220, <Wd c={CHALK} s={28}>the habit hardens the lights; this wisdom undoes the habit</Wd>, { d: 2 }],
        ["It is the way towards it", 960, 310, <Wd c={GOLD} s={32}>not a step beside the rainbow body: the way towards it</Wd>],
        ["the elements stay solid, however much we hear about light", 560, 520, <Box c={DIM} w={620} title="thinking inherently" sub="the elements stay solid," sub2="however much we hear about light" ts={32} />],
        ["the solidity has nothing left to rest on", 1360, 520, <Box c={TEAL} w={620} title="seen as dependent arising" sub="vivid and unfindable:" sub2="solidity has nothing to rest on" ts={32} />],
        ["Then the recognition of the lights becomes natural", 960, 740, <Wd c={GOLD} s={34} serif>the recognition of the lights becomes natural</Wd>],
      ]} />
      <Flow x1={880} y1={520} x2={1040} y2={520} color={GOLD} p={ramp(t, nat, 0.6)} width={4} />
    </AbsoluteFill>
  );
};

const PracticeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const both = c("Both are the same knot coming untied");
  const loose = ramp(t, both, 2);
  return (
    <AbsoluteFill>
      <Items items={[["has two practices here", 960, 110, <Wd c={CHALK} s={40} serif>two practices, one knot</Wd>]]} />
      <At x={960} y={460} o={ramp(t, c("has two practices here"), 0.5)}>
        <svg width={300} height={200} viewBox="0 0 300 200" style={{ overflow: "visible" }}>
          <path d={`M20 100 C ${90 - loose * 40} ${40 - loose * 30} ${150} ${160} 150 100 S ${210 + loose * 40} ${40 - loose * 30} 280 100`}
            fill="none" stroke={WARM} strokeWidth={6} style={{ filter: `drop-shadow(0 0 10px ${WARM})` }} opacity={1 - loose * 0.5} />
          <path d={`M20 ${100 + loose * 0} C 100 ${160 + loose * 20} 200 ${40 - loose * 20} 280 100`}
            fill="none" stroke={GOLD} strokeWidth={4} opacity={0.4 + loose * 0.6} />
        </svg>
      </At>
      <At x={960} y={600} o={ramp(t, both, 0.5)}><Wd c={GOLD} s={30}>the same knot coming untied</Wd></At>
      <Items items={[
        ["cutting through, frees the mind from grasping", 420, 330, <Wd c={TEAL} s={38} serif>trekchö · cutting through</Wd>],
        ["cutting through, frees the mind from grasping", 420, 400, <Wd c={CHALK} s={26}>frees the mind from grasping</Wd>, { d: 0.8 }],
        ["direct crossing, recognises the appearing side", 1500, 330, <Wd c={VIOLET} s={38} serif>thögal · direct crossing</Wd>],
        ["direct crossing, recognises the appearing side", 1500, 400, <Wd c={CHALK} s={26}>recognises the display, through and through</Wd>, { d: 0.8 }],
        ["Once from the side of the mind", 420, 600, <K c={TEAL} s={28}>from the side of the mind</K>],
        ["and once from the side of appearance", 1500, 600, <K c={VIOLET} s={28}>from the side of appearance</K>],
      ]} />
    </AbsoluteFill>
  );
};

const ViewScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fall = c("every one of these falls away");
  const ess = c("The essence of the ground is primordial purity");
  const out = 1 - ramp(t, ess, 0.4);
  const wrong: [string, string, number][] = [
    ["The five lights sound like a shining substance", "the lights: a shining substance", 280],
    ["The ground sounds like a source they condense out of", "the ground: a source they condense out of", 380],
    ["The rainbow body sounds like a body turning into light", "the rainbow body: a body turning into light", 480],
    ["And practice sounds like unfreezing frozen energy", "practice: unfreezing frozen energy", 580],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["And this is why the view of", 960, 110, <Wd c={CHALK} s={40} serif>why the view becomes clear</Wd>],
        ["its words are easily heard the wrong way", 960, 190, <Wd c={DIM} s={28}>without dependent arising, heard the wrong way</Wd>, { until: "The essence of the ground is primordial purity" }],
      ]} />
      {wrong.map(([cue, txt, y], i) => (
        <At key={cue} x={960} y={y} o={ramp(t, c(cue), 0.5) * out}><SK c={DIM} s={28} strikeAt={fall + 0.3 * i}>{txt}</SK></At>
      ))}
      <Items items={[
        ["every one of these falls away", 960, 700, <Wd c={TEAL} s={32}>with dependent arising, every one falls away</Wd>, { until: "The essence of the ground is primordial purity" }],
        ["The essence of the ground is primordial purity", 960, 210, <Wd c={GOLD} s={34} serif>ka dag, primordial purity</Wd>],
        ["That is, emptiness", 960, 280, <Wd c={CHALK} s={28}>that is, emptiness</Wd>],
        ["calls it a groundless ground", 960, 350, <Wd c={CHALK} s={28}>Longchenpa: a groundless ground</Wd>],
        ["The lights are its display, with nothing behind them", 960, 440, <K c={VIOLET} s={28}>the lights: its display, nothing behind them</K>],
        ["Condensing into the elements names how appearing is taken", 960, 530, <K c={WARM} s={28}>"condensing": how appearing is taken, not a stuff turning solid</K>],
        ["And spontaneous presence is dependent arising seen without the habit of fixing", 960, 620, <K c={TEAL} s={28}>lhun grub: dependent arising, without the habit of fixing</K>],
        ["It is never uncaused", 960, 690, <Wd c={DIM} s={26}>never uncaused</Wd>],
        ["So nothing condenses, and nothing needs to be unfrozen", 960, 770, <Wd c={GOLD} s={30}>nothing condenses; nothing to unfreeze; only a deep habit</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MisheardScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, string, string][] = [
    ["Dependent arising is misheard as a web", "dependent arising", "a web or machine behind things", "the wisdom that unties the knot"],
    ["The five elements are misheard as five kinds of stuff", "the five elements", "five kinds of stuff", "qualities of appearing"],
    ["The five lights are misheard as a luminous substance", "the five lights", "a luminous substance underneath", "the clarity of appearing, as empty"],
    ["And the rainbow body is misheard as a goal", "the rainbow body", "a goal; light-stuff", "a realization"],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["So each word has a way it is misheard", 960, 110, <Wd c={CHALK} s={40} serif>misheard, and seen</Wd>]]} />
      <At x={960} y={210} o={ramp(t, c("So each word has a way it is misheard") + 0.8, 0.5)}>
        <div style={{ display: "flex", width: 1640 }}>
          <div style={{ width: 400 }} /><div style={{ width: 620 }}><Wd c={DIM} s={26}>misheard</Wd></div><div style={{ width: 620 }}><Wd c={TEAL} s={26}>seen with dependent arising</Wd></div>
        </div>
      </At>
      {rows.map(([cue, name, wrong, seen], i) => {
        const a = c(cue);
        const y = 310 + i * 120;
        return (
          <React.Fragment key={cue}>
            <At x={340} y={y} o={ramp(t, a, 0.5)}><Wd c={GOLD} s={32} serif>{name}</Wd></At>
            <At x={850} y={y} o={ramp(t, a + 0.3, 0.5)}><SK c={DIM} s={24} strikeAt={a + 2.0}>{wrong}</SK></At>
            <At x={1470} y={y} o={ramp(t, a + 2.2, 0.5)}><K c={TEAL} s={24}>{seen}</K></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const GuardsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const g: [string, string, string, string, string, number, number][] = [
    ["First, the lights are not a stuff", "1. the lights are not a stuff", "clarity of appearing, as empty as all", "not a layer underneath", GOLD, 540, 330],
    ["Second, nothing returns to a source", "2. nothing returns to a source", "no luminous ground to go back into", "coarse conditions part: dependent arising too", TEAL, 1380, 330],
    ["Third, the colour tables are maps", "3. the colour tables are maps", "one lineage's pairing for practice", "not a chart of what the world is made of", VIOLET, 540, 620],
    ["Fourth, it is not the measure of insight", "4. not a measure, not a goal", "insight: the freedom of the mind", "shrinking bodies: cannot be checked", ROSE, 1380, 620],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["Four guards keep this from going wrong", 960, 110, <Wd c={CHALK} s={40} serif>four guards</Wd>]]} />
      {g.map(([cue, title, a, b, col, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5)}>
          <Box c={col} w={760} title={title} sub={a} sub2={b} ts={34} />
        </At>
      ))}
      <At x={540} y={470} o={ramp(t, c("That is a substrate again"), 0.4) * (1 - ramp(t, c("Second, nothing returns to a source"), 0.4))}>
        <SK c={DIM} s={24} strikeAt={c("That is a substrate again") + 0.6}>light underneath the aggregates</SK>
      </At>
      <At x={1380} y={470} o={ramp(t, c("Nothing is produced either"), 0.4) * (1 - ramp(t, c("Third, the colour tables are maps"), 0.4))}>
        <Wd c={DIM} s={24}>nothing produced either</Wd>
      </At>
      <At x={1380} y={760} o={ramp(t, c("Many great masters left ordinary bodies"), 0.4)}>
        <Wd c={DIM} s={24}>many great masters left ordinary bodies</Wd>
      </At>
    </AbsoluteFill>
  );
};

const ThreadScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const chain: [string, string, string][] = [
    ["The wisdom of dependent arising unties the habit", "the wisdom of dependent arising unties the habit", TEAL],
    ["The elements are no longer held as solid", "the elements, no longer held as solid", CHALK],
    ["They are recognised as the five lights", "recognised as the five lights", VIOLET],
    ["is what the rainbow body means", "that recognition, all the way through: the rainbow body", GOLD],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["So the thread runs one way", 960, 110, <Wd c={CHALK} s={40} serif>one thread, one seeing</Wd>]]} />
      {chain.map(([cue, txt, col], i) => (
        <React.Fragment key={cue}>
          <At x={960} y={230 + i * 110} o={ramp(t, c(cue), 0.5)}><K c={col} s={28}>{txt}</K></At>
          {i < 3 ? <Flow x1={960} y1={258 + i * 110} x2={960} y2={312 + i * 110} color={DIM} p={ramp(t, c(chain[i + 1][0]), 0.5)} pulses={false} width={3} /> : null}
        </React.Fragment>
      ))}
      <Items items={[
        ["In essence, a realization, not a goal", 960, 680, <Wd c={GOLD} s={40} serif>in essence, a realization, not a goal</Wd>],
        ["All views and understanding here are my own", 960, 790, <Wd c={DIM} s={24}>my own views, from practice and contemplation; no tradition represented. A draft.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("If you think you understand it, keep looking");
  const pre = 1 - ramp(t, end, 0.6);
  const s = c("Pick up an apple, or just picture one");
  const k = ((t - s) % 2.6) / 2.6;
  return (
    <AbsoluteFill>
      <At x={960} y={380 - Math.sin(k * Math.PI) * 120 * pre} o={ramp(t, s, 0.6)}><Apple size={180} /></At>
      <Items items={[
        ["Look for the solid apple behind the red", 960, 620, <SK c={DIM} s={28} strikeAt={c("It is not found, and the apple is still right here, working")}>a solid apple behind the red and the press</SK>, { until: "If you think you understand it, keep looking" }],
        ["It is not found, and the apple is still right here, working", 960, 720, <Wd c={TEAL} s={30}>not found; still right here, working</Wd>, { until: "If you think you understand it, keep looking" }],
        ["That one moment holds the whole thread", 960, 120, <Wd c={CHALK} s={34} serif>one moment holds the whole thread</Wd>],
      ]} />
      <At x={960} y={640}><Reveal text="If you think you understand it, keep looking." at={end} size={54} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["This is Part 6 of 6, a draft", "dusk", <OpenScene />],
    ["Before anything else, a note", "doubt", <NoteScene />],
    ["That is why I made the videos", "whole", <VideosScene />],
    ["So let me go step by step, from the apple", "search", <StepsScene />],
    ["Put the apple beside the five lights", "light", <MovementScene />],
    ["what reasoning can show, and what it cannot", "deep", <ReasonScene />],
    ["Why does the wisdom of dependent arising come first", "jade", <FirstScene />],
    ["has two practices here", "dusk", <PracticeScene />],
    ["And this is why the view of", "search", <ViewScene />],
    ["So each word has a way it is misheard", "doubt", <MisheardScene />],
    ["Four guards keep this from going wrong", "deep", <GuardsScene />],
    ["So the thread runs one way", "whole", <ThreadScene />],
    ["Pick up an apple, or just picture one", "night", <EndScene />],
  ];
  const moods: Mood[] = [];
  order.forEach(([cue, k], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < order.length ? c(order[i + 1][0], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, , node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
