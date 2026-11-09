// After Anatta · Dependent Arising, Part 4 of 6: The Taste
// (EBooks Bonus Articles/dependent-arising-and-designation, section 11; notebooklm-parts/part-4-the-taste).
// Arc: Parts 1 to 3 in a line -> a taste first, the view later; met three times -> anatta: seeing, no seer; "events" is
// still words -> the first taste (just colours, just sound, no process, not dark, no knower behind) -> not a refined oneness
// (six clarities, not one lamp) -> effortless, seamless, intimate; the alignment is the appearing; three cautions -> total
// exertion (the car, firewood and ash; holism struck; the same taste widening) -> not yet freedom (the flower; the
// desynchronisation) -> the logic with the taste (the same move again and again) -> the chariot bridge; dependence not found
// either -> the hinges (parts, whole, qi, field, relations, substrate) -> the taste revisited (dashed line: the same taste;
// reach, stability; nothing making it; not uncaused, not a source; production struck) -> the marketplace (helping hands; who
// decides; "nothing matters" struck as annihilation; why help) -> three encounters, not stages; round more than once -> close.
// Stance: a seer, a process underneath, a knower, a "one" or lamp everything is made of, a cosmic whole, a cause pushing, a
// web, a foundation, a producer and a lever-puller are drawn only to be struck. Colours, sounds and conditions stay vivid.
// Cue phrases avoid the respelled names (Nagarjuna, Dogen, Nagasena), digits and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words, and no digits, inside.
export const PHRASES = [
  // opening
  "So far I have looked at why", "what it says, and what it is for", "One of its uses is to describe a taste",
  "did not come to me first as a view", "It came as a taste", "the taste was met three times", "right after anatta",
  "again when every hinge was exhausted", "and again in the marketplace",
  // anatta
  "Start with anatta", "only seeing, no seer", "The agent is seen through", "what are seeing and hearing",
  "it is still words", "So look, in real time",
  // first taste
  "Seeing is just colours", "Hearing is just sound", "Nothing is doing the seeing", "Nothing runs underneath the colours",
  "And the colours are not dark", "The knowing is right there in the colour", "a first taste of spontaneous presence",
  "Remember this taste",
  // refined oneness
  "How is this different from a refined", "It is still haunted by substance", "Oneness merges the seer into everything",
  "Anatta finds no seer there to merge", "In this taste there is no", "The colour is clear as colour",
  "Six clarities, one for each stream", "Not one lamp lighting them all", "So the test is simple",
  // intimate
  "the factors are intimate", "The colour is there only with light", "The sound only with the air",
  "So three things are found together", "Effortless: no one is doing it", "Seamless: nothing strings it together",
  "Intimate: the factors are not outside it", "The alignment of these factors is the appearing", "Three cautions",
  "does not leave an object standing out there", "is not two steps", "does not deny change",
  // total exertion
  "This taste does not stay in seeing and hearing", "Each event seems to spend itself completely", "The car is still the car",
  "called this total exertion", "Firewood abides in its own place", "Here I have to be careful", "That is holism",
  "no cosmos packed inside it", "It is not a second taste", "Already two descriptions of one taste",
  // not yet freedom
  "But a taste is not yet freedom", "Ignorance has not been unbound", "Because they are not in the same place",
  "While I see a flower", "the flower is still assumed to be sitting there by itself", "A cause is still felt to push its effect",
  "Death is still the end of a someone", "The self had dissolved, but the universe had not",
  "That gap is what I call the desynchronisation", "It feels like the world itself",
  // the logic
  "It is only when it is challenged by", "That is what the logic is for", "The logic does not do this alone",
  "It is in perception itself", "The logic points to the place to look", "Is a whole found apart from its parts",
  "Is a cause found pushing", "the habit loosens a little", "Insight without the logic drifts back into nouns",
  "Logic without the taste stays a clever argument", "makes the same move as anatta, again and again",
  "No seer behind seeing", "No goer behind going", "No fire apart from its fuel", "no producer behind arising",
  "A self is the doer behind the doing", "A causal power is the doer behind the causing", "Neither is found",
  // chariot
  "The bridge for me was", "The chariot is not found apart from its parts", "It is designated in dependence",
  "the taste of total exertion recognised itself", "each event wholly this", "nothing here stands from its own side",
  "the logic turns on itself", "Dependence too is not found", "The conditions are not a web", "Conditions are the appearing",
  // hinges
  "the mind will always hinge on something", "First it hinges on parts", "It hinges on the whole",
  "Qi, energy, a field, relations, a substrate", "Each time, it is looking for a foundation", "The tools meet each hinge in turn",
  "Qi and energy are not a stuff", "A field is the whole again", "Relations are not found either",
  "the mind was looking for all along", "free from all elaborations, and in a stable way",
  "Stable does not mean the habit can never stir",
  // revisited
  "Then appearance is again tasted", "This is the first taste, revisited", "It is the same taste",
  "Reach: at first the taste lived", "And stability", "Take away the doer from everything",
  "Not even dependence kept as a new thing", "Then nothing is making the appearing", "It shows up whole and vivid",
  "That is what spontaneous presence means to me", "It is not uncaused", "And it is not a source",
  "Mind and matter lose their weight", "Ignorance sees the coming together", "But nothing is made, and nothing is handed on",
  "neither mind nor matter from its own side",
  // marketplace
  "and dirty my hands", "The marketplace is ordinary life", "pictures shows it", "with helping hands, smiling broadly",
  "Why after freedom", "It goes back to work", "Here dependent arising changes its role", "Dependent arising is how help works",
  "a freedom that holds only in quiet", "Who decides, if no one is there", "Nobody disappears", "pulling the levers",
  "Responsibility is answered first", "so nothing matters", "It is the annihilation view",
  "And why help, if others are not found", "Because it is not fixed, it can be eased",
  // encounters
  "the taste has been met three times", "First, anatta, around", "Then the desynchronisation, and the work",
  "Second, freedom from all elaborations", "And third, dependent arising and emptiness", "These are not stages of the taste",
  "It unbinds the habit", "it is not a ladder climbed once", "It goes round more than once", "rather than adding a floor",
  // close
  "All views and understanding here are my own", "I do not represent any tradition", "Next: one taste, many faces",
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
  market: { a: "rgba(170,110,55,0.48)", b: "rgba(60,110,90,0.4)", c: "rgba(90,60,140,0.32)" },
};

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
/** A glowing patch of colour. */
const Patch: React.FC<{ color: string; size?: number }> = ({ color, size = 150 }) => (
  <div style={{ width: size, height: size, borderRadius: size * 0.22, background: color, opacity: 0.9, boxShadow: `0 0 50px ${color}` }} />
);
/** Sound waves, p 0..1. */
const Waves: React.FC<{ p: number; color?: string }> = ({ p, color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={300} height={240} viewBox="0 0 300 240" style={{ overflow: "visible" }} opacity={p}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <path key={i} d={`M${40 + k * 180} 40 Q${90 + k * 200} 120 ${40 + k * 180} 200`} fill="none" stroke={color} strokeWidth={5}
          opacity={1 - k} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />;
      })}
    </svg>
  );
};
/** A flower. */
const Flower: React.FC = () => (
  <svg width={200} height={260} viewBox="0 0 200 260" style={{ overflow: "visible" }}>
    <path d="M100 120 V250" stroke={GREEN} strokeWidth={6} />
    <path d="M100 200 q-40 -10 -50 -40 q40 0 50 40" fill="rgba(110,200,140,0.4)" stroke={GREEN} strokeWidth={3} />
    {[0, 72, 144, 216, 288].map((a) => {
      const r = (a * Math.PI) / 180;
      return <ellipse key={a} cx={100 + 38 * Math.cos(r)} cy={90 + 38 * Math.sin(r)} rx={30} ry={20}
        transform={`rotate(${a} ${100 + 38 * Math.cos(r)} ${90 + 38 * Math.sin(r)})`} fill="rgba(255,120,140,0.55)" stroke={ROSE} strokeWidth={3} />;
    })}
    <circle cx={100} cy={90} r={18} fill={GOLD} />
  </svg>
);
/** A chariot. */
const Chariot: React.FC = () => (
  <svg width={420} height={220} viewBox="0 0 520 260" style={{ overflow: "visible" }}>
    <path d="M20 120 H200" stroke={WARM} strokeWidth={8} />
    <path d="M200 70 H420 L440 150 H200 Z" fill="rgba(228,194,122,0.22)" stroke={GOLD} strokeWidth={5} />
    <circle cx={330} cy={180} r={66} fill="none" stroke={GOLD} strokeWidth={6} />
    <circle cx={330} cy={180} r={10} fill={GOLD} />
    {[0, 45, 90, 135].map((a) => {
      const r = (a * Math.PI) / 180;
      return <line key={a} x1={330 - 60 * Math.cos(r)} y1={180 - 60 * Math.sin(r)} x2={330 + 60 * Math.cos(r)} y2={180 + 60 * Math.sin(r)} stroke={GOLD} strokeWidth={4} />;
    })}
  </svg>
);
/** A car going by. */
const Car: React.FC<{ c?: string }> = ({ c = TEAL }) => (
  <svg width={300} height={140} viewBox="0 0 300 140" style={{ overflow: "visible" }}>
    <path d="M20 95 L40 60 Q55 35 90 35 H190 Q220 35 240 60 L280 70 Q290 75 290 95 Z" fill={`${c}33`} stroke={c} strokeWidth={5}
      style={{ filter: `drop-shadow(0 0 10px ${c})` }} />
    <circle cx={80} cy={100} r={22} fill="#0b0d1c" stroke={c} strokeWidth={5} />
    <circle cx={230} cy={100} r={22} fill="#0b0d1c" stroke={c} strokeWidth={5} />
  </svg>
);
/** The figure of the tenth ox-herding picture: a walker with open hands. */
const Walker: React.FC = () => (
  <svg width={220} height={300} viewBox="0 0 220 300" style={{ overflow: "visible" }}>
    <g fill="none" stroke={WARM} strokeWidth={6} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }}>
      <circle cx={110} cy={50} r={30} />
      <path d="M95 52 q15 12 30 0" />
      <path d="M110 80 V190" />
      <path d="M110 110 L45 140 M110 110 L175 140" />
      <path d="M110 190 L70 280 M110 190 L150 280" />
    </g>
    <circle cx={45} cy={140} r={9} fill={GOLD} /><circle cx={175} cy={140} r={9} fill={GOLD} />
  </svg>
);
/** A box on the board. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; guard?: React.ReactNode }> = ({ c, w = 460, title, sub, guard }) => (
  <div style={{ width: w, padding: "26px 24px", borderRadius: 20, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)", boxShadow: `0 0 34px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={38} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 12 }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
    {guard ? <div style={{ marginTop: 14 }}>{guard}</div> : null}
  </div>
);
/** A dashed line drawn between two points, p 0..1. */
const Dash: React.FC<{ x1: number; y1: number; x2: number; y2: number; p: number; color?: string }> = ({ x1, y1, x2, y2, p, color = GOLD }) => (
  <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
    <line x1={x1} y1={y1} x2={x1 + (x2 - x1) * p} y2={y1 + (y2 - y1) * p} stroke={color} strokeWidth={4} strokeDasharray="14 12"
      style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const recap = c("So far I have looked at why");
  const title = 1 - ramp(t, recap, 0.5);
  const parts: [string, string, number][] = [
    ["So far I have looked at why", "stranger than it sounds", 480],
    ["what it says, and what it is for", "what it says", 960],
    ["what it says, and what it is for", "what it is for", 1440],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, 0.3, 0.6) * title}><Wd c={GOLD} s={36} serif>Part 4 of 6</Wd></At>
      <At x={960} y={460} o={ramp(t, 0.8, 0.8) * title}><Wd c={CHALK} s={84} serif>The taste</Wd></At>
      {parts.map(([cue, label, x], i) => (
        <At key={label} x={x} y={300} o={ramp(t, c(cue) + (i === 2 ? 1.2 : 0.3), 0.5)}>
          <K c={DIM} s={28}>{`Part ${i + 1}: ${label}`}</K>
        </At>
      ))}
      <Items items={[
        ["One of its uses is to describe a taste", 960, 460, <Wd c={TEAL} s={34}>explains · dismantles · describes a taste</Wd>],
        ["One of its uses is to describe a taste", 960, 600, <Wd c={GOLD} s={56} serif>Part 4: the taste</Wd>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const OverviewScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const three = c("the taste was met three times");
  const stops: [string, string, string, number][] = [
    ["right after anatta", "after anatta", GOLD, 480],
    ["again when every hinge was exhausted", "every hinge exhausted", VIOLET, 960],
    ["and again in the marketplace", "the marketplace", TEAL, 1440],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["did not come to me first as a view", 700, 200, <SK c={DIM} s={30} strikeAt={c("It came as a taste") + 0.3}>first a view</SK>],
        ["It came as a taste", 1220, 200, <K c={GOLD} s={30}>first a taste; the view syncs later</K>],
        ["the taste was met three times", 960, 340, <Wd c={CHALK} s={38} serif>one taste, met three times</Wd>],
      ]} />
      <Flow x1={420} y1={540} x2={1500} y2={540} color={GOLD} p={ramp(t, three, 1.2)} pulses={false} />
      {stops.map(([cue, label, col, x]) => (
        <React.Fragment key={label}>
          <At x={x} y={540} o={ramp(t, c(cue), 0.4)}>
            <div style={{ width: 34, height: 34, borderRadius: 17, background: col, boxShadow: `0 0 26px ${col}` }} />
          </At>
          <At x={x} y={630} o={ramp(t, c(cue) + 0.2, 0.5)}><K c={col} s={28}>{label}</K></At>
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const AnattaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Start with anatta", 960, 120, <Wd c={GOLD} s={42} serif>anatta</Wd>],
        ["only seeing, no seer", 760, 280, <K c={TEAL} s={30}>seeing</K>],
        ["only seeing, no seer", 1160, 280, <SK c={DIM} s={30} strikeAt={c("The agent is seen through") + 0.2}>a seer</SK>, { d: 0.6 }],
        ["only seeing, no seer", 760, 380, <K c={TEAL} s={30}>hearing</K>, { d: 1.2 }],
        ["only seeing, no seer", 1160, 380, <SK c={DIM} s={30} strikeAt={c("The agent is seen through") + 0.5}>a hearer</SK>, { d: 1.6 }],
        ["The agent is seen through", 960, 480, <Wd c={CHALK} s={30}>never there from its own side</Wd>],
        ["what are seeing and hearing", 960, 600, <Wd c={CHALK} s={36} serif>then what are seeing and hearing?</Wd>],
        ["what are seeing and hearing", 960, 690, <K c={DIM} s={26}>"events, processes"</K>, { d: 1.6 }],
        ["it is still words", 960, 770, <Wd c={ROSE} s={28}>still words</Wd>, { until: "So look, in real time" }],
        ["So look, in real time", 960, 770, <Wd c={GOLD} s={32}>so look, in real time</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TasteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dark = c("And the colours are not dark");
  return (
    <AbsoluteFill>
      <Items items={[["Seeing is just colours", 960, 110, <Wd c={GOLD} s={40} serif>the first taste</Wd>]]} />
      <At x={660} y={330} o={ramp(t, c("Seeing is just colours"), 0.6)}>
        <div style={{ display: "flex", gap: 24, filter: `brightness(${0.85 + 0.35 * ramp(t, dark, 1)})` }}>
          <Patch color="#3E7BD8" size={110} /><Patch color="#E2593E" size={110} /><Patch color="#5FC48A" size={110} />
        </div>
      </At>
      <At x={1280} y={330} o={ramp(t, c("Hearing is just sound"), 0.6)}><Waves p={1} /></At>
      <Items items={[
        ["Seeing is just colours", 660, 470, <Wd c={CHALK} s={30}>just colours · no effort</Wd>],
        ["Hearing is just sound", 1280, 470, <Wd c={CHALK} s={30}>just sound · no effort</Wd>],
        ["Nothing is doing the seeing", 960, 570, <SK c={DIM} s={26} strikeAt={c("Nothing is doing the seeing") + 1.2}>a doer of the seeing</SK>, { until: "And the colours are not dark" }],
        ["Nothing runs underneath the colours", 960, 650, <SK c={DIM} s={26} strikeAt={c("Nothing runs underneath the colours") + 1.4}>a process running underneath</SK>, { until: "And the colours are not dark" }],
        ["And the colours are not dark", 960, 590, <Wd c={GOLD} s={32}>clear, known and vivid</Wd>, { until: "a first taste of spontaneous presence" }],
        ["The knowing is right there in the colour", 960, 680, <SK c={DIM} s={26} strikeAt={c("The knowing is right there in the colour") + 2}>a knower behind the colour</SK>, { until: "a first taste of spontaneous presence" }],
        ["a first taste of spontaneous presence", 960, 620, <Wd c={GOLD} s={40} serif>a first taste of spontaneous presence</Wd>],
        ["a first taste of spontaneous presence", 960, 710, <K c={TEAL} s={26}>immediate · effortless · spontaneous</K>, { d: 1.4 }],
        ["Remember this taste", 960, 800, <Wd c={CHALK} s={28}>remember this taste</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OneScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = c("It is still haunted by substance");
  const no = c("In this taste there is no");
  const six: [string, string][] = [["seeing", "#3E7BD8"], ["hearing", TEAL], ["smelling", GREEN], ["tasting", WARM], ["touching", ROSE], ["thinking", VIOLET]];
  const outOne = 1 - ramp(t, no, 0.6);
  return (
    <AbsoluteFill>
      <Items items={[["How is this different from a refined", 960, 110, <Wd c={CHALK} s={38} serif>not a refined oneness</Wd>]]} />
      <At x={960} y={400} o={ramp(t, one, 0.6) * outOne}>
        <div style={{ width: 620, height: 260, borderRadius: 140, background: "radial-gradient(rgba(228,194,122,0.5), rgba(228,194,122,0.08))", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SK c={DIM} s={28} strikeAt={c("Anatta finds no seer there to merge") + 1}>one luminosity, everything made of it</SK>
        </div>
      </At>
      <Items items={[
        ["Oneness merges the seer into everything", 960, 640, <Wd c={DIM} s={28}>oneness: the seer merged into everything</Wd>, { until: "In this taste there is no" }],
        ["Anatta finds no seer there to merge", 960, 720, <Wd c={GOLD} s={30}>anatta: no seer there to merge</Wd>, { until: "In this taste there is no" }],
        ["In this taste there is no", 960, 220, <Wd c={TEAL} s={36} serif>no "made of"</Wd>],
        ["The colour is clear as colour", 960, 310, <Wd c={CHALK} s={28}>colour clear as colour · sound clear as sound</Wd>],
      ]} />
      {six.map(([n, col], i) => (
        <React.Fragment key={n}>
          <At x={360 + i * 240} y={450} o={ramp(t, c("Six clarities, one for each stream") + 0.35 * i, 0.5)}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: col, boxShadow: `0 0 30px ${col}` }} />
          </At>
          <At x={360 + i * 240} y={520} o={ramp(t, c("Six clarities, one for each stream") + 0.35 * i, 0.5)}><K c={col} s={24}>{n}</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Six clarities, one for each stream", 960, 630, <Wd c={GOLD} s={36} serif>six clarities</Wd>],
        ["Not one lamp lighting them all", 960, 710, <SK c={DIM} s={26} strikeAt={c("Not one lamp lighting them all") + 1}>one lamp lighting them all</SK>],
        ["So the test is simple", 960, 800, <Wd c={CHALK} s={30}>the test: is there a "one" everything is made of?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const IntimateScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const intimate = c("the factors are intimate");
  const cautions = c("Three cautions");
  const pre = 1 - ramp(t, cautions, 0.5);
  const conds: [string, number][] = [["light", 260], ["eye", 380], ["attention", 500]];
  const snd: [string, number][] = [["air", 260], ["ear", 380], ["a car going by", 500]];
  const three: [string, string, string, number][] = [
    ["Effortless: no one is doing it", "effortless", "no one doing it", 420],
    ["Seamless: nothing strings it together", "seamless", "nothing strings it together", 960],
    ["Intimate: the factors are not outside it", "intimate", "the factors not outside", 1500],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["the factors are intimate", 960, 110, <Wd c={GOLD} s={40} serif>the factors are intimate</Wd>, { until: "Three cautions" }]]} />
      {conds.map(([n, y], i) => (
        <React.Fragment key={n}>
          <At x={260} y={y} o={ramp(t, c("The colour is there only with light") + 0.4 * i, 0.5) * pre}><K c={GOLD} s={26}>{n}</K></At>
          <Flow x1={350} y1={y} x2={560} y2={380} color={GOLD} p={ramp(t, c("The colour is there only with light") + 0.4 * i, 0.8) * pre} />
        </React.Fragment>
      ))}
      <At x={640} y={380} o={ramp(t, intimate, 0.5) * pre}><Patch color="#3E7BD8" size={120} /></At>
      {snd.map(([n, y], i) => (
        <React.Fragment key={n}>
          <At x={1700} y={y} o={ramp(t, c("The sound only with the air") + 0.4 * i, 0.5) * pre}><K c={TEAL} s={26}>{n}</K></At>
          <Flow x1={1580} y1={y} x2={1360} y2={380} color={TEAL} p={ramp(t, c("The sound only with the air") + 0.4 * i, 0.8) * pre} />
        </React.Fragment>
      ))}
      <At x={1260} y={380} o={ramp(t, intimate, 0.5) * pre}><Waves p={0.9} /></At>
      <Items items={[["The sound only with the air", 960, 380, <Wd c={CHALK} s={26}>none outside, feeding it in</Wd>, { d: 1.6, until: "So three things are found together" }]]} />
      {three.map(([cue, w, sub, x]) => (
        <At key={w} x={x} y={630} o={ramp(t, c(cue), 0.5) * pre}><Box c={TEAL} w={420} title={w} sub={sub} /></At>
      ))}
      <Items items={[
        ["The alignment of these factors is the appearing", 960, 790, <Wd c={GOLD} s={34} serif>their alignment is the appearing</Wd>, { until: "Three cautions" }],
        ["Three cautions", 960, 150, <Wd c={CHALK} s={40} serif>three cautions</Wd>],
        ["does not leave an object standing out there", 960, 320, <SK c={DIM} s={28} strikeAt={c("does not leave an object standing out there") + 1.5}>colours standing out there on their own</SK>],
        ["does not leave an object standing out there", 960, 400, <Wd c={TEAL} s={26}>the colour too is singled out, in dependence</Wd>, { d: 2.4 }],
        ["is not two steps", 960, 520, <SK c={DIM} s={28} strikeAt={c("is not two steps") + 1.2}>factors first, then a lining up</SK>],
        ["does not deny change", 960, 640, <K c={GREEN} s={28}>things change; causes work</K>],
        ["does not deny change", 960, 730, <SK c={DIM} s={26} strikeAt={c("does not deny change") + 3}>a process as a thing, underneath</SK>, { d: 1.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const careful = c("Here I have to be careful");
  const pre = 1 - ramp(t, careful, 0.5);
  const carX = 400 + 900 * ramp(t, c("Each event seems to spend itself completely"), 6);
  return (
    <AbsoluteFill>
      <Items items={[
        ["This taste does not stay in seeing and hearing", 960, 110, <Wd c={GOLD} s={40} serif>the taste widens</Wd>],
        ["Each event seems to spend itself completely", 960, 200, <Wd c={CHALK} s={32}>each event spends itself completely</Wd>, { until: "Here I have to be careful" }],
      ]} />
      <At x={carX} y={340} o={ramp(t, c("Each event seems to spend itself completely"), 0.5) * pre}><Car /></At>
      <At x={carX + 230} y={330} o={ramp(t, c("Each event seems to spend itself completely") + 0.5, 0.5) * pre}><Waves p={0.8} color={GOLD} /></At>
      <Items items={[
        ["The car is still the car", 960, 470, <K c={TEAL} s={28}>boundaries soften; the car is still the car</K>, { until: "Here I have to be careful" }],
        ["called this total exertion", 960, 580, <Wd c={GOLD} s={44} serif>total exertion</Wd>, { until: "Here I have to be careful" }],
        ["Firewood abides in its own place", 960, 690, <div style={{ display: "flex", gap: 60 }}><K c={WARM} s={28}>firewood, complete</K><K c={DIM} s={28}>ash, complete</K></div>, { until: "Here I have to be careful" }],
        ["Firewood abides in its own place", 960, 780, <Wd c={CHALK} s={26}>no wider whole behind it</Wd>, { d: 2.5, until: "Here I have to be careful" }],
        ["That is holism", 960, 280, <SK c={DIM} s={30} strikeAt={c("no cosmos packed inside it") + 0.4}>the whole cosmos in each moment</SK>],
        ["That is holism", 960, 370, <Wd c={ROSE} s={26}>holism: the whole made the ground</Wd>, { d: 1 }],
        ["It is not a second taste", 960, 500, <Wd c={CHALK} s={32}>not a second taste: the same one, widening</Wd>],
        ["It is not a second taste", 640, 620, <K c={VIOLET} s={26}>spontaneous presence: nothing making it</K>, { d: 4 }],
        ["It is not a second taste", 1300, 620, <K c={GOLD} s={26}>total exertion: nothing apart</K>, { d: 6.5 }],
        ["Already two descriptions of one taste", 960, 740, <Wd c={TEAL} s={32} serif>already two descriptions of one taste</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const NotFreeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const flower = c("While I see a flower");
  const strike = c("It feels like the world itself");
  return (
    <AbsoluteFill>
      <Items items={[
        ["But a taste is not yet freedom", 960, 110, <Wd c={ROSE} s={40} serif>a taste is not yet freedom</Wd>],
        ["Ignorance has not been unbound", 960, 200, <Wd c={DIM} s={28}>the habit of reifying stays</Wd>],
        ["Because they are not in the same place", 600, 290, <K c={TEAL} s={26}>the taste: in the senses</K>],
        ["Because they are not in the same place", 1320, 290, <K c={ROSE} s={26}>the habit: how the world is understood</K>, { d: 1 }],
      ]} />
      <At x={600} y={500} o={ramp(t, flower, 0.6)}><Flower /></At>
      <At x={600} y={680} o={ramp(t, flower + 0.8, 0.5)}><Wd c={CHALK} s={26}>seeing: just colours</Wd></At>
      <Items items={[
        ["the flower is still assumed to be sitting there by itself", 1320, 420, <SK c={ROSE} s={26} strikeAt={strike + 1.6}>the flower, there by itself; its red its own</SK>],
        ["A cause is still felt to push its effect", 1320, 510, <SK c={ROSE} s={26} strikeAt={strike + 1.8}>a cause pushing its effect</SK>],
        ["Death is still the end of a someone", 1320, 600, <SK c={ROSE} s={26} strikeAt={strike + 2}>death, the end of a someone</SK>],
        ["The self had dissolved, but the universe had not", 1320, 690, <Wd c={CHALK} s={26}>the self dissolved; the universe had not</Wd>],
        ["That gap is what I call the desynchronisation", 960, 800, <Wd c={GOLD} s={34} serif>the desynchronisation</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nf = c("Neither is found");
  return (
    <AbsoluteFill>
      <Items items={[
        ["It is only when it is challenged by", 960, 110, <Wd c={GOLD} s={38} serif>the logic brings the habit up</Wd>],
        ["That is what the logic is for", 960, 210, <Wd c={CHALK} s={28}>not a better taste: bring it up, then unwind it</Wd>, { until: "The logic does not do this alone" }],
        ["The logic does not do this alone", 960, 210, <Wd c={CHALK} s={28}>the logic does not do it alone</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["It is in perception itself", 960, 300, <K c={ROSE} s={26}>the habit: in perception, even in the body</K>, { until: "makes the same move as anatta, again and again" }],
        ["The logic points to the place to look", 960, 400, <Wd c={TEAL} s={30}>it points to the place to look</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["Is a whole found apart from its parts", 700, 490, <K c={TEAL} s={26}>a whole apart from its parts?</K>, { until: "makes the same move as anatta, again and again" }],
        ["Is a cause found pushing", 1220, 490, <K c={TEAL} s={26}>a cause pushing?</K>, { until: "makes the same move as anatta, again and again" }],
        ["the habit loosens a little", 960, 580, <Wd c={GOLD} s={30}>seen, not only agreed to: it loosens</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["Insight without the logic drifts back into nouns", 960, 680, <Wd c={DIM} s={28}>insight without logic: back into nouns</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["Logic without the taste stays a clever argument", 960, 760, <Wd c={DIM} s={28}>logic without the taste: words about words</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["makes the same move as anatta, again and again", 960, 220, <Wd c={CHALK} s={34} serif>the same move, again and again</Wd>],
        ["No seer behind seeing", 420, 360, <SK c={DIM} s={26} strikeAt={nf}>a seer</SK>],
        ["No goer behind going", 780, 360, <SK c={DIM} s={26} strikeAt={nf + 0.2}>a goer</SK>],
        ["No fire apart from its fuel", 1140, 360, <SK c={DIM} s={26} strikeAt={nf + 0.4}>fire apart from fuel</SK>],
        ["no producer behind arising", 1500, 360, <SK c={DIM} s={26} strikeAt={nf + 0.6}>a producer</SK>],
        ["A self is the doer behind the doing", 960, 500, <SK c={DIM} s={28} strikeAt={nf + 0.8}>a self: the doer behind the doing</SK>],
        ["A causal power is the doer behind the causing", 960, 600, <SK c={DIM} s={28} strikeAt={nf + 1}>a causal power: the doer behind the causing</SK>],
        ["Neither is found", 960, 730, <Wd c={GOLD} s={36} serif>neither is found</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const turns = c("the logic turns on itself");
  const pre = 1 - ramp(t, turns, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["The bridge for me was", 960, 110, <Wd c={GOLD} s={38} serif>the bridge: the chariot</Wd>, { until: "the logic turns on itself" }]]} />
      <At x={960} y={320} o={ramp(t, c("The bridge for me was") + 0.5, 0.6) * pre}><Chariot /></At>
      <Items items={[
        ["The chariot is not found apart from its parts", 620, 500, <SK c={DIM} s={26} strikeAt={c("It is designated in dependence")}>apart from its parts</SK>, { until: "the logic turns on itself" }],
        ["The chariot is not found apart from its parts", 1300, 500, <SK c={DIM} s={26} strikeAt={c("It is designated in dependence") + 0.3}>as the parts</SK>, { d: 1.8, until: "the logic turns on itself" }],
        ["It is designated in dependence", 960, 590, <K c={GOLD} s={28}>designated in dependence</K>, { until: "the logic turns on itself" }],
        ["each event wholly this", 620, 710, <K c={VIOLET} s={26}>tasted: each event wholly this</K>, { until: "the logic turns on itself" }],
        ["nothing here stands from its own side", 1300, 710, <K c={TEAL} s={26}>the logic: nothing from its own side</K>, { until: "the logic turns on itself" }],
        ["the logic turns on itself", 960, 160, <Wd c={CHALK} s={38} serif>the logic turns on itself</Wd>],
        ["Dependence too is not found", 960, 290, <SK c={DIM} s={28} strikeAt={c("Conditions are the appearing")}>dependence as a thing</SK>],
        ["The conditions are not a web", 700, 400, <SK c={DIM} s={26} strikeAt={c("Conditions are the appearing") + 0.2}>a web behind</SK>],
        ["The conditions are not a web", 1220, 400, <SK c={DIM} s={26} strikeAt={c("Conditions are the appearing") + 0.4}>a basement under appearances</SK>, { d: 1 }],
        ["Conditions are the appearing", 960, 560, <Wd c={GOLD} s={44} serif>conditions are the appearing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const HingeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hinges: [string, string, number, string][] = [
    ["First it hinges on parts", "parts", 0, "The tools meet each hinge in turn"],
    ["It hinges on the whole", "the whole", 1, "The tools meet each hinge in turn"],
    ["Qi, energy, a field, relations, a substrate", "qi, energy", 2, "Qi and energy are not a stuff"],
    ["Qi, energy, a field, relations, a substrate", "a field", 3, "A field is the whole again"],
    ["Qi, energy, a field, relations, a substrate", "relations", 4, "Relations are not found either"],
    ["Qi, energy, a field, relations, a substrate", "a substrate", 5, "the mind was looking for all along"],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["the mind will always hinge on something", 960, 110, <Wd c={CHALK} s={38} serif>what the mind hinges on</Wd>]]} />
      {hinges.map(([cue, label, i, strike]) => (
        <At key={label} x={960} y={220 + i * 75} o={ramp(t, c(cue) + (i >= 2 ? (i - 2) * 0.5 : 0), 0.5)}>
          <SK c={i >= 5 ? ROSE : DIM} s={28} strikeAt={c(strike) + (i === 1 ? 2.5 : 0.8)}>{label}</SK>
        </At>
      ))}
      <Items items={[
        ["Each time, it is looking for a foundation", 1500, 410, <Wd c={ROSE} s={28}>looking for a foundation</Wd>],
        ["The tools meet each hinge in turn", 420, 410, <Wd c={TEAL} s={28}>the tools, hinge by hinge</Wd>],
        ["free from all elaborations, and in a stable way", 960, 730, <Wd c={GOLD} s={36} serif>free from all elaborations, stable</Wd>],
        ["Stable does not mean the habit can never stir", 960, 810, <Wd c={DIM} s={26}>if it stirs, the same seeing meets it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RevisitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const take = c("Take away the doer from everything");
  const pre = 1 - ramp(t, take, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Then appearance is again tasted", 1340, 190, <Box c={GOLD} w={460} title="the taste revisited" sub="vivid, spontaneous, free" />, { until: "Take away the doer from everything" }],
        ["Then appearance is again tasted", 580, 190, <Box c={VIOLET} w={460} title="the first taste" sub="just colours, just sound" />, { d: -0.2, until: "Take away the doer from everything" }],
        ["It is the same taste", 960, 330, <Wd c={GOLD} s={30}>the same taste</Wd>, { until: "Take away the doer from everything" }],
        ["It is the same taste", 960, 410, <Wd c={CHALK} s={26}>what changed is the understanding around it</Wd>, { d: 1.2, until: "Take away the doer from everything" }],
        ["Reach: at first the taste lived", 560, 580, <Box c={TEAL} w={620} title="reach" sub="thought, body, things, causes, time, death" />, { until: "Take away the doer from everything" }],
        ["And stability", 1360, 580, <Box c={GOLD} w={460} title="stability" sub="no longer depends on looking" />, { until: "Take away the doer from everything" }],
      ]} />
      <div style={{ opacity: pre }}><Dash x1={815} y1={190} x2={1105} y2={190} p={ramp(t, c("It is the same taste"), 1)} /></div>
      <Items items={[
        ["Take away the doer from everything", 960, 150, <SK c={DIM} s={28} strikeAt={c("Then nothing is making the appearing")}>the doer, everywhere</SK>, { until: "Mind and matter lose their weight" }],
        ["Not even dependence kept as a new thing", 960, 240, <SK c={DIM} s={26} strikeAt={c("Then nothing is making the appearing") + 0.3}>dependence kept as a new thing</SK>, { until: "Mind and matter lose their weight" }],
        ["Then nothing is making the appearing", 960, 340, <Wd c={CHALK} s={32}>nothing is making the appearing</Wd>, { until: "Mind and matter lose their weight" }],
        ["It shows up whole and vivid", 960, 440, <K c={TEAL} s={28}>a car going by: whole and vivid, as its conditions meet</K>, { until: "Mind and matter lose their weight" }],
        ["That is what spontaneous presence means to me", 960, 560, <Wd c={GOLD} s={44} serif>spontaneous presence</Wd>, { until: "Mind and matter lose their weight" }],
        ["It is not uncaused", 700, 670, <K c={DIM} s={26}>not uncaused: conditions</K>, { until: "Mind and matter lose their weight" }],
        ["And it is not a source", 1220, 670, <K c={DIM} s={26}>not a source behind it</K>, { until: "Mind and matter lose their weight" }],
        ["Mind and matter lose their weight", 960, 170, <Wd c={TEAL} s={40} serif>light, magical and plastic</Wd>],
        ["Ignorance sees the coming together", 960, 330, <SK c={DIM} s={28} strikeAt={c("But nothing is made, and nothing is handed on") + 0.5}>something there first, making something else</SK>],
        ["But nothing is made, and nothing is handed on", 960, 440, <Wd c={CHALK} s={30}>nothing made, nothing handed on</Wd>],
        ["neither mind nor matter from its own side", 760, 580, <SK c={DIM} s={28} strikeAt={c("neither mind nor matter from its own side") + 1.6}>mind, from its own side</SK>],
        ["neither mind nor matter from its own side", 1180, 580, <SK c={DIM} s={28} strikeAt={c("neither mind nor matter from its own side") + 1.9}>matter, from its own side</SK>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const MarketScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const role = c("Here dependent arising changes its role");
  const who = c("Who decides, if no one is there");
  const first = 1 - ramp(t, role, 0.5);
  const second = ramp(t, role, 0.5) * (1 - ramp(t, who, 0.5));
  const life = ["work", "family", "money", "arguments", "others' troubles", "choices"];
  return (
    <AbsoluteFill>
      <Items items={[["and dirty my hands", 960, 110, <Wd c={GOLD} s={42} serif>the marketplace, with dirty hands</Wd>]]} />
      {life.map((w, i) => (
        <At key={w} x={360 + i * 240} y={220} o={ramp(t, c("The marketplace is ordinary life") + 0.3 * i, 0.5) * first}><K c={WARM} s={24}>{w}</K></At>
      ))}
      <At x={600} y={500} o={ramp(t, c("pictures shows it"), 0.6) * first}><Walker /></At>
      <Items items={[
        ["pictures shows it", 1180, 420, <Wd c={CHALK} s={28}>the tenth ox-herding picture</Wd>, { until: "Here dependent arising changes its role" }],
        ["with helping hands, smiling broadly", 1180, 500, <Wd c={GOLD} s={30} serif>into the market with helping hands</Wd>, { until: "Here dependent arising changes its role" }],
        ["Why after freedom", 1180, 610, <Wd c={CHALK} s={26}>one re-enters only what one was free of</Wd>, { until: "Here dependent arising changes its role" }],
        ["It goes back to work", 1180, 690, <K c={TEAL} s={26}>freedom goes back to work</K>, { until: "Here dependent arising changes its role" }],
      ]} />
      <At x={960} y={330} o={second}><Wd c={TEAL} s={32}>before: the tool that took each hinge apart</Wd></At>
      <At x={960} y={450} o={ramp(t, c("Dependent arising is how help works"), 0.5) * (1 - ramp(t, who, 0.5))}><Wd c={GOLD} s={40} serif>now: how help works</Wd></At>
      <At x={960} y={570} o={ramp(t, c("a freedom that holds only in quiet"), 0.5) * (1 - ramp(t, who, 0.5))}><Wd c={DIM} s={28}>a freedom only in quiet is not yet stable</Wd></At>
      <Items items={[
        ["Who decides, if no one is there", 960, 220, <Wd c={CHALK} s={36} serif>who decides?</Wd>, { until: "And why help, if others are not found" }],
        ["Nobody disappears", 960, 320, <K c={TEAL} s={28}>I act, choose, keep promises, answer for it</K>, { until: "And why help, if others are not found" }],
        ["pulling the levers", 960, 410, <SK c={DIM} s={26} strikeAt={c("pulling the levers") + 0.8}>a doer behind, pulling the levers</SK>, { until: "And why help, if others are not found" }],
        ["Responsibility is answered first", 960, 500, <Wd c={GOLD} s={30}>responsibility answered first</Wd>, { until: "And why help, if others are not found" }],
        ["so nothing matters", 960, 610, <SK c={ROSE} s={26} strikeAt={c("It is the annihilation view")}>"no one there, so nothing matters"</SK>, { d: -1.5, until: "And why help, if others are not found" }],
        ["It is the annihilation view", 960, 700, <Wd c={ROSE} s={28}>not freedom: annihilation</Wd>, { until: "And why help, if others are not found" }],
        ["And why help, if others are not found", 960, 300, <Wd c={CHALK} s={36} serif>why help?</Wd>],
        ["And why help, if others are not found", 960, 420, <K c={TEAL} s={28}>suffering still functions, in dependence</K>, { d: 2.5 }],
        ["Because it is not fixed, it can be eased", 960, 560, <Wd c={GOLD} s={34} serif>not fixed, so it can be eased</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EncounterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const round = c("It goes round more than once");
  const p = ramp(t, round, 2.2);
  const R = 150;
  const len = 2 * Math.PI * R;
  return (
    <AbsoluteFill>
      <Items items={[
        ["the taste has been met three times", 960, 110, <Wd c={CHALK} s={40} serif>one taste, met three times</Wd>, { until: "These are not stages of the taste" }],
        ["First, anatta, around", 420, 380, <Box c={GOLD} w={460} title="anatta" sub="around 1997: no seer, in seeing" />, { until: "These are not stages of the taste" }],
        ["Then the desynchronisation, and the work", 420, 540, <K c={DIM} s={22}>then the desynchronisation</K>, { until: "These are not stages of the taste" }],
        ["Second, freedom from all elaborations", 960, 380, <Box c={VIOLET} w={460} title="free of elaborations" sub="every hinge exhausted" />, { until: "These are not stages of the taste" }],
        ["And third, dependent arising and emptiness", 1500, 380, <Box c={TEAL} w={460} title="dependent arising" sub="in the marketplace" />, { until: "These are not stages of the taste" }],
        ["These are not stages of the taste", 960, 130, <Wd c={CHALK} s={38} serif>not stages of the taste</Wd>],
        ["It unbinds the habit", 960, 220, <Wd c={TEAL} s={28}>the logic does not make the taste; it unbinds the habit</Wd>],
        ["it is not a ladder climbed once", 960, 320, <SK c={DIM} s={26} strikeAt={round}>a ladder climbed once</SK>],
        ["rather than adding a floor", 960, 800, <Wd c={GOLD} s={30}>each turn clarifies one seeing</Wd>],
      ]} />
      <At x={960} y={560} o={ramp(t, round, 0.5)}>
        <svg width={360} height={360} viewBox="0 0 360 360" style={{ overflow: "visible" }}>
          <circle cx={180} cy={180} r={R} fill="none" stroke={GOLD} strokeWidth={5} strokeDasharray={`${len * p} ${len}`}
            transform="rotate(-90 180 180)" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
        </svg>
      </At>
      <At x={960} y={560} o={ramp(t, round + 0.8, 0.5)}><Wd c={CHALK} s={28} serif>round more than once</Wd></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const next = c("Next: one taste, many faces");
  const pre = 1 - ramp(t, next, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, c("All views and understanding here are my own"), 0.8) * pre}>
        <Wd c={CHALK} s={32} serif>my own views, from practice and contemplation</Wd>
      </At>
      <At x={960} y={480} o={ramp(t, c("I do not represent any tradition"), 0.8) * pre}>
        <Wd c={DIM} s={28}>not representing any tradition, school or teacher</Wd>
      </At>
      <At x={960} y={380}><Reveal text="Next: one taste, many faces" at={next} size={60} color={GOLD} speed={0.04} /></At>
      <At x={960} y={500} o={ramp(t, next + 2, 0.8)}><Wd c={CHALK} s={36} serif>Part 5</Wd></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["So far I have looked at why", "dusk", <OpenScene />],
    ["did not come to me first as a view", "whole", <OverviewScene />],
    ["Start with anatta", "light", <AnattaScene />],
    ["Seeing is just colours", "jade", <TasteScene />],
    ["How is this different from a refined", "doubt", <OneScene />],
    ["the factors are intimate", "jade", <IntimateScene />],
    ["This taste does not stay in seeing and hearing", "light", <ExertionScene />],
    ["But a taste is not yet freedom", "doubt", <NotFreeScene />],
    ["It is only when it is challenged by", "deep", <LogicScene />],
    ["The bridge for me was", "search", <ChariotScene />],
    ["the mind will always hinge on something", "search", <HingeScene />],
    ["Then appearance is again tasted", "whole", <RevisitScene />],
    ["and dirty my hands", "market", <MarketScene />],
    ["the taste has been met three times", "dusk", <EncounterScene />],
    ["All views and understanding here are my own", "night", <CloseScene />],
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
