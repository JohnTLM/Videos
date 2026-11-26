// Bonus video: Dependent Arising Section 3 Part 2: Without a Fixed Nature (AA54), the close of Section 3.
// (Script: new-documents/after-anatta/aa54-without-a-fixed-nature-script.md, from EBooks
// Bonus Articles/without-a-fixed-nature; script approved by the owner 2026-11-26: "Approved aa54".)
// Arc: how does grey matter give rise to the felt red? -> the problem stated fairly -> what it needs: two fixed
// natures; the gap made by the starting point -> the hard problem of the fist -> without a fixed nature -> differing
// characteristics arise (three reds; the chord) -> without replacement (the gap moves one level down) -> the same cut
// three times: time, mind and matter, interaction -> a problem that does not arise (the fire) -> the tea ->
// mechanical to luminously plastic -> close.
// Stance: the two fixed natures, and every replacement ground, are drawn only to be struck. Nothing is put in their place.
// Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "How does grey matter give rise to the felt redness of red", "I am John Tan, known as Thusness",
  "In Part 1, I set out our default mode of thinking", "Now I take the habit to the place it is felt most sharply",
  "Seeing emptiness does not solve this problem", "It shows a problem that was never there",
  // stated fairly
  "First, the problem, stated fairly", "He called these the easy problems", "The hard problem is different",
  "Why is there something it is like to see red", "Tell the whole story of wavelengths, cones and neurons",
  "The felt red still seems left over", "Philosophers call this distance the explanatory gap",
  "I do not want to make it smaller than it is",
  // what it needs
  "Now look at what has to be in place before the question can be asked", "First, matter must have a fixed nature",
  "Tastes, smells and colours, he said, live only in the one who senses them",
  "Second, mind must have a fixed nature too", "Grant both, and the question is forced",
  "And it can never be answered", "A nature that turns into its opposite was never a nature",
  "The gap was made by the starting point",
  // fist
  "Let me show the same move with something so ordinary", "Close your hand. There is a fist",
  "Open it. The fist is gone", "Now let me make it puzzling", "First, give the hand a fixed nature",
  "Second, give the fist a fixed nature too", "Where was the fist before the hand closed",
  "Call it the hard problem of the fist", "Yet nothing was ever missing", "Fist names the hand closed",
  "Just close the hand", "Mind and matter are the same shape",
  "We made it unsolvable, when no such issue was there to begin with", "One caution",
  "That would make matter the floor again", "Fix two natures. Then look for the bridge",
  "Why do the two steps feel so natural",
  // without a fixed nature
  "Emptiness is exactly this", "Empty does not mean that nothing is there", "Turn this on the two boxes",
  "Matter has no fixed nature of lacking experience", "Then experience has to be squeezed out of it",
  "Mind has no fixed nature of being felt, either", "Consciousness is always of something, through something",
  "So neither side owns its characteristics", "Because nothing had a fixed nature to begin with",
  // characteristics
  "People sometimes hear", "It is the other way round", "For whom emptiness is possible, everything is possible",
  "differing characteristics can arise, each one dependent on its conditions", "Take red",
  "Felt redness arises with an eye, light, a surface and attention", "A firing pattern in the visual cortex arises",
  "A wavelength of about six hundred and fifty", "Each is real within its conditions",
  "None of them is what red really is", "So where is the redness",
  "It belongs to the coming together", "The way a chord belongs to no single string",
  "Pluck one string, and listen for the chord in it", "And it is not nothing",
  "Now see what the hard problem asks", "When nothing has a fixed nature, nothing is basic",
  // without replacement
  "Here is where I part from most of the answers on offer", "So they change one of them",
  "Idealism says all is mind", "Panpsychism says matter was experiential all along", "Neutral monism says one hidden stuff",
  "Others put process, or information, under everything", "I respect each of these",
  "the gap comes back, one level down", "If the base is mind", "If the smallest parts have tiny experiences",
  "It has changed address", "Emptiness without replacement puts nothing in the place the essence was taken from",
  "And the clarity of what appears is not a replacement either",
  // three cuts
  "The hard problem is a problem like time divided into past, present and future", "Cut time into three",
  "Then ask how the past passes into the present", "And the clocks still work",
  "Cut what appears into mind and matter", "There is a third form", "How can a soul that only thinks move a body",
  "Without them, the intending and the moving arise together", "Nobody has to cross over to lift it",
  "All three are the same move", "The train leaves at nine",
  // does not arise
  "So I do not say the hard problem is solved", "where a fire goes when it goes out", "that does not apply",
  "The fire burned dependent on grass and sticks", "That is the same kind of question",
  "What remains is ordinary, and it stays important", "This shows dependence, plainly",
  "This is not a retreat to", "What is denied is only the fixed nature",
  // tea
  "The reasoning shows that the gap was built into the question", "Take a sip of tea",
  "Look for the point where matter turns into feeling", "There is no such point", "There is the warmth",
  "And no taster is found behind it",
  // plastic
  "When this is seen, something more than a question goes", "Before, appearances looked mechanical, fixed and rigid",
  "After, the same appearances are met as spontaneous, and luminously plastic",
  "Spontaneous, because nothing stands behind them making them happen", "Luminous, because appearing is never in the dark",
  "Plastic, because nothing has a fixed nature", "Plastic does not mean vague",
  "It is precisely because nothing is fixed",
  // close
  "This is Section 3, Part 2 of the Dependent Arising series, and the close of Section 3",
  "The world does not lose its order. It loses its rigidity",
];

const M = {
  red: { a: "rgba(150,50,70,0.5)", b: "rgba(70,50,140,0.42)", c: "rgba(40,60,110,0.32)" },
  fair: { a: "rgba(60,45,130,0.5)", b: "rgba(150,100,50,0.34)", c: "rgba(30,70,120,0.3)" },
  gap: { a: "rgba(110,70,40,0.5)", b: "rgba(60,45,120,0.44)", c: "rgba(40,40,80,0.4)" },
  hand: { a: "rgba(150,90,60,0.44)", b: "rgba(60,60,150,0.42)", c: "rgba(40,110,120,0.32)" },
  empty: { a: "rgba(40,100,130,0.48)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
  chord: { a: "rgba(190,145,60,0.44)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  moved: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  three: { a: "rgba(60,90,130,0.48)", b: "rgba(110,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  fire: { a: "rgba(170,90,40,0.46)", b: "rgba(60,40,110,0.44)", c: "rgba(40,40,70,0.4)" },
  tea: { a: "rgba(60,110,70,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  plastic: { a: "rgba(190,150,70,0.44)", b: "rgba(60,90,170,0.44)", c: "rgba(50,140,140,0.34)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
};

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
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
const SK: React.FC<{ c?: string; s?: number; at: string; d?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + d} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "18px 16px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={32} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 8 }}><Wd c={CHALK} s={22}>{sub}</Wd></div> : null}
  </div>
);
/** A box that is struck through at `at`. */
const SBox: React.FC<{ c: string; w?: number; title: string; sub?: string; at: string; d?: number }> = ({ at, d = 0, ...b }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Box {...b} /><Strike at={cue(at) + d} /></div>;
};
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A red patch beside a brain outline, a dashed gap between them. */
const RedAndBrain: React.FC<{ gap?: number }> = ({ gap = 1 }) => (
  <svg width={760} height={320} viewBox="0 0 760 320" style={{ overflow: "visible" }}>
    <path d="M90 170 C60 90 150 40 220 70 C270 30 350 60 345 120 C390 150 370 230 310 240 C290 290 190 290 160 250 C100 260 70 220 90 170 Z"
      fill="rgba(240,200,210,0.12)" stroke={ROSE} strokeWidth={4} />
    <path d="M150 140 Q200 110 240 150 T320 150 M170 200 Q220 170 270 210" stroke={ROSE} strokeWidth={3} fill="none" opacity={0.7} />
    <line x1={400} y1={160} x2={520} y2={160} stroke={GOLD} strokeWidth={4} strokeDasharray="10 10" opacity={gap} />
    <text x={460} y={140} fill={GOLD} fontSize={36} textAnchor="middle" fontFamily="SourceSans" opacity={gap}>?</text>
    <circle cx={640} cy={160} r={80} fill="rgba(220,40,60,0.75)" stroke={ROSE} strokeWidth={4} />
  </svg>
);
/** A hand, animated between open (k=0) and closed into a fist (k=1). */
const Hand: React.FC<{ k: number }> = ({ k }) => {
  const fingers = [-54, -18, 18, 54];
  return (
    <svg width={360} height={420} viewBox="-180 -220 360 420" style={{ overflow: "visible" }}>
      <rect x={-80} y={-30} width={160} height={150} rx={50} fill="rgba(240,200,170,0.25)" stroke={WARM} strokeWidth={5} />
      {fingers.map((x, i) => {
        const len = 130 - Math.abs(i - 1.5) * 18;
        const h = len * (1 - 0.78 * k);
        return <rect key={i} x={x - 16} y={-30 - h} width={32} height={h + 20} rx={16} fill="rgba(240,200,170,0.25)" stroke={WARM} strokeWidth={5} />;
      })}
      <rect x={-118 + 30 * k} y={10 - 30 * k} width={34} height={90 - 30 * k} rx={17} transform={`rotate(${-35 + 60 * k} -100 60)`} fill="rgba(240,200,170,0.25)" stroke={WARM} strokeWidth={5} />
    </svg>
  );
};
/** Strings of a lute: one plucked string vibrates; `all` 0..1 brings the chord glow over every string. */
const Chord: React.FC<{ one: number; all: number }> = ({ one, all }) => {
  const { t } = useT();
  return (
    <svg width={560} height={300} viewBox="0 0 560 300" style={{ overflow: "visible" }}>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = 40 + i * 44;
        const amp = (i === 2 ? one : all) * 8 * Math.sin(t * 30 + i);
        return <path key={i} d={`M20 ${y} Q280 ${y + amp} 540 ${y}`} stroke={i === 2 ? GOLD : CHALK} strokeWidth={3} fill="none" opacity={0.85} />;
      })}
      <ellipse cx={280} cy={150} rx={260} ry={140} fill="none" stroke={TEAL} strokeWidth={3} opacity={all * 0.7} />
    </svg>
  );
};
/** A small flame that dies out when `out` goes 0 -> 1. */
const Flame: React.FC<{ out: number }> = ({ out }) => {
  const { t } = useT();
  const f = (1 - out) * (0.9 + 0.1 * Math.sin(t * 12));
  return (
    <svg width={260} height={300} viewBox="-130 -200 260 300" style={{ overflow: "visible" }}>
      <path d={`M0 ${-150 * f} C${60 * f} ${-80 * f} ${50 * f} 0 0 0 C${-50 * f} 0 ${-60 * f} ${-80 * f} 0 ${-150 * f} Z`} fill={`rgba(240,150,60,${0.7 * (1 - out)})`} stroke={WARM} strokeWidth={4} opacity={1 - out} />
      {[-60, -20, 20, 60].map((x, i) => <line key={i} x1={x - 30} y1={30 + (i % 2) * 8} x2={x + 30} y2={10 - (i % 2) * 8} stroke={out > 0.5 ? DIM : WARM} strokeWidth={8} strokeLinecap="round" />)}
    </svg>
  );
};
/** A cup of tea with steam. */
const Tea: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={340} height={320} viewBox="-170 -200 340 320" style={{ overflow: "visible" }}>
      {[-40, 0, 40].map((x, i) => <path key={i} d={`M${x} -60 q${15 * Math.sin(t * 2 + i)} -40 0 -80 q${-15 * Math.sin(t * 2 + i)} -40 0 -80`} stroke={CHALK} strokeWidth={3} fill="none" opacity={0.4} />)}
      <path d="M-110 -40 L110 -40 L90 80 Q0 110 -90 80 Z" fill="rgba(120,160,100,0.3)" stroke={GREEN} strokeWidth={5} />
      <path d="M110 -10 q60 0 50 40 q-10 30 -60 30" stroke={GREEN} strokeWidth={5} fill="none" />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["How does grey matter give rise to the felt redness of red", 960, 440, <RedAndBrain />],
        ["How does grey matter give rise to the felt redness of red", 960, 760, <Wd c={GOLD} s={42} serif>grey matter → the felt redness of red?</Wd>, { d: 1.5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="In Part 1, I set out our default mode of thinking">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Without a Fixed Nature</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 3 · Part 2 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="In Part 1, I set out our default mode of thinking">
      <Items items={[
        ["In Part 1, I set out our default mode of thinking", 960, 240, <Wd c={DIM} s={26}>Part 1: "what is it, really?" · there has to be something · a habit</Wd>],
        ["Now I take the habit to the place it is felt most sharply", 960, 360, <Wd c={CHALK} s={30} serif>the habit, where it is felt most sharply</Wd>],
        ["Seeing emptiness does not solve this problem", 960, 500, <SK at="It shows a problem that was never there" s={28}>emptiness solves the problem</SK>],
        ["It shows a problem that was never there", 960, 600, <K c={GOLD} s={30}>it shows a problem that was never there</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const FairScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["First, the problem, stated fairly", 960, 90, <Wd c={GOLD} s={42} serif>The problem, stated fairly</Wd>],
      ["He called these the easy problems", 500, 260, <Box c={TEAL} w={560} title="the easy problems" sub="picking out colours · storing memories · steering the body" />, { pop: true }],
      ["The hard problem is different", 1420, 260, <Box c={ROSE} w={560} title="the hard problem" sub="why is any of this felt?" />, { pop: true }],
      ["Why is there something it is like to see red", 1420, 400, <Wd c={CHALK} s={24}>something it is like · not processing in the dark</Wd>],
      ["Tell the whole story of wavelengths, cones and neurons", 960, 560, <Wd c={CHALK} s={28}>wavelengths → cones → neurons → …</Wd>],
      ["The felt red still seems left over", 960, 640, <Wd c={ROSE} s={30} serif>the felt red, left over</Wd>],
      ["Philosophers call this distance the explanatory gap", 960, 730, <K c={GOLD} s={28}>the explanatory gap</K>, { pop: true }],
      ["I do not want to make it smaller than it is", 960, 830, <Wd c={DIM} s={22}>a serious question, asked by careful people</Wd>],
    ]} />
  </AbsoluteFill>
);

const NeedsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now look at what has to be in place before the question can be asked", 960, 90, <Wd c={GOLD} s={40} serif>What the problem needs</Wd>],
      ["First, matter must have a fixed nature", 480, 300, <Box c={WARM} w={560} title="matter" sub="fixed nature: to lack experience" />, { pop: true }],
      ["Tastes, smells and colours, he said, live only in the one who senses them", 480, 430, <Wd c={DIM} s={22}>colours and tastes taken out · mass and motion kept</Wd>],
      ["Second, mind must have a fixed nature too", 1440, 300, <Box c={VIOLET} w={560} title="mind" sub="fixed nature: to be felt" />, { pop: true }],
      ["Grant both, and the question is forced", 960, 560, <Wd c={CHALK} s={28} serif>how does the one produce the other?</Wd>],
      ["And it can never be answered", 960, 640, <Wd c={DIM} s={24}>a nature cannot become otherwise</Wd>],
      ["A nature that turns into its opposite was never a nature", 960, 710, <Wd c={CHALK} s={24}>turned into its opposite, it was never a nature</Wd>],
      ["The gap was made by the starting point", 960, 820, <K c={GOLD} s={30}>the gap was made by the starting point</K>, { pop: true }],
    ]} />
    <Items items={[["Grant both, and the question is forced", 960, 300, <Wd c={GOLD} s={60} serif>?</Wd>]]} />
  </AbsoluteFill>
);

const FistScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const close1 = ramp(t, c("Close your hand. There is a fist"), 0.8) * (1 - ramp(t, c("Open it. The fist is gone"), 0.8));
  const close2 = ramp(t, c("Just close the hand"), 0.8);
  const k = Math.max(close1, close2);
  return (
    <AbsoluteFill>
      <Items items={[["Let me show the same move with something so ordinary", 960, 80, <Wd c={WARM} s={42} serif>The hard problem of the fist</Wd>]]} />
      <At x={460} y={520} o={ramp(t, c("Close your hand. There is a fist", 0.6), 0.5)}><Hand k={k} /></At>
      <Items items={[
        ["Open it. The fist is gone", 1360, 200, <Wd c={DIM} s={24}>nobody is puzzled</Wd>, { until: "Now let me make it puzzling" }],
        ["Now let me make it puzzling", 1360, 190, <Wd c={CHALK} s={26}>two steps</Wd>],
        ["First, give the hand a fixed nature", 1360, 270, <SBox c={WARM} w={620} title="hand" sub="bones, tendons, skin · no fist in it" at="Yet nothing was ever missing" />, { pop: true }],
        ["Second, give the fist a fixed nature too", 1360, 420, <SBox c={ROSE} w={620} title="fist" sub="a thing in its own right" at="Yet nothing was ever missing" d={0.3} />, { pop: true }],
        ["Where was the fist before the hand closed", 1360, 550, <Wd c={CHALK} s={24}>where was it before? where does it go?</Wd>],
        ["Call it the hard problem of the fist", 1360, 620, <K c={GOLD} s={26}>no anatomy will ever bridge it</K>, { pop: true }],
        ["Fist names the hand closed", 1360, 700, <Wd c={CHALK} s={30} serif>"fist" names the hand closed</Wd>],
        ["Just close the hand", 1360, 780, <K c={GREEN} s={26}>just close the hand</K>, { pop: true }],
        ["Mind and matter are the same shape", 960, 880, <Wd c={GOLD} s={26}>mind and matter: the same shape · unsolvable, when no issue was there</Wd>, { until: "One caution" }],
        ["One caution", 960, 880, <Wd c={DIM} s={24}>not: mind is a shape the brain takes · the hand is singled out too</Wd>],
        ["Fix two natures. Then look for the bridge", 960, 950, <K c={TEAL} s={24}>the shape of the mistake: fix two natures, then look for the bridge</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const EmptyScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Why do the two steps feel so natural", 960, 90, <Wd c={DIM} s={24}>why so natural? Part 1: the grammar of things</Wd>, { until: "Emptiness is exactly this" }],
      ["Emptiness is exactly this", 960, 90, <Wd c={TEAL} s={42} serif>Without a fixed nature</Wd>],
      ["Emptiness is exactly this", 960, 170, <Wd c={DIM} s={24}>svabhāva: what a thing would be from its own side</Wd>, { d: 2 }],
      ["Empty does not mean that nothing is there", 960, 240, <Wd c={CHALK} s={24}>the tea is hot · the red is red · the neurons fire</Wd>],
      ["Turn this on the two boxes", 480, 400, <SBox c={WARM} w={600} title="matter" sub="no fixed nature of lacking experience" at="Then experience has to be squeezed out of it" />, { pop: true }],
      ["Matter has no fixed nature of lacking experience", 480, 540, <Wd c={DIM} s={22}>mass, charge, wavelength: singled out by instruments</Wd>],
      ["Turn this on the two boxes", 1440, 400, <SBox c={VIOLET} w={600} title="mind" sub="no fixed nature of being felt" at="Consciousness is always of something, through something" />, { pop: true, d: 0.4 }],
      ["Consciousness is always of something, through something", 1440, 540, <Wd c={DIM} s={22}>always of something, through something</Wd>],
      ["So neither side owns its characteristics", 960, 700, <K c={GOLD} s={28}>neither side owns its characteristics</K>, { pop: true }],
      ["Because nothing had a fixed nature to begin with", 960, 800, <Wd c={CHALK} s={26}>nothing to cross · nothing turned into its opposite</Wd>],
    ]} />
  </AbsoluteFill>
);

const ChordScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = ramp(t, c("Pluck one string, and listen for the chord in it"), 0.3);
  const all = ramp(t, c("The way a chord belongs to no single string"), 0.6) * (1 - one * 0.85) + ramp(t, c("And it is not nothing"), 0.6) * 0.85;
  return (
    <AbsoluteFill>
      <Items items={[
        ["People sometimes hear", 960, 80, <Wd c={DIM} s={24}>"without a fixed nature": a loss?</Wd>, { until: "For whom emptiness is possible, everything is possible" }],
        ["For whom emptiness is possible, everything is possible", 960, 80, <Wd c={GOLD} s={36} serif>for whom emptiness is possible, everything is possible</Wd>],
        ["differing characteristics can arise, each one dependent on its conditions", 960, 150, <Wd c={CHALK} s={24}>differing characteristics arise, each with its conditions</Wd>],
        ["Felt redness arises with an eye, light, a surface and attention", 400, 290, <Box c={ROSE} w={520} title="felt red" sub="eye · light · surface · attention" />, { pop: true }],
        ["A firing pattern in the visual cortex arises", 960, 290, <Box c={VIOLET} w={520} title="a firing pattern" sub="electrodes · instruments · a laboratory" />, { pop: true }],
        ["A wavelength of about six hundred and fifty", 1520, 290, <Box c={ICE} w={520} title="650 nm" sub="spectrometer · the theory that defines it" />, { pop: true }],
        ["Each is real within its conditions", 960, 430, <Wd c={CHALK} s={24}>each real within its conditions · the painter, the neurologist, the engineer</Wd>],
        ["None of them is what red really is", 960, 490, <Wd c={DIM} s={22}>none is what red really is</Wd>],
        ["So where is the redness", 400, 640, <Wd c={CHALK} s={26}>not in the rose · the brain · a mind</Wd>],
        ["It belongs to the coming together", 400, 710, <K c={GOLD} s={26}>it belongs to the coming together</K>, { pop: true }],
        ["Now see what the hard problem asks", 1500, 640, <Wd c={CHALK} s={24}>one set asked to produce another</Wd>],
        ["When nothing has a fixed nature, nothing is basic", 1500, 710, <K c={TEAL} s={24}>nothing basic · nothing to derive</K>, { pop: true }],
      ]} />
      <At x={960} y={800} o={ramp(t, c("The way a chord belongs to no single string"), 0.5)}><Chord one={one} all={all} /></At>
    </AbsoluteFill>
  );
};

const MovedScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Here is where I part from most of the answers on offer", 960, 90, <Wd c={VIOLET} s={40} serif>Without replacement</Wd>],
      ["So they change one of them", 960, 170, <Wd c={DIM} s={24}>change one nature, or put a new stuff under both</Wd>],
      ["Idealism says all is mind", 330, 330, <SBox c={VIOLET} w={400} title="idealism" sub="all is mind" at="the gap comes back, one level down" />, { pop: true }],
      ["Panpsychism says matter was experiential all along", 770, 330, <SBox c={ROSE} w={400} title="panpsychism" sub="experience in the smallest parts" at="the gap comes back, one level down" d={0.2} />, { pop: true }],
      ["Neutral monism says one hidden stuff", 1210, 330, <SBox c={ICE} w={400} title="neutral monism" sub="one hidden stuff" at="the gap comes back, one level down" d={0.4} />, { pop: true }],
      ["Others put process, or information, under everything", 1640, 330, <SBox c={TEAL} w={400} title="process" sub="or information, underneath" at="the gap comes back, one level down" d={0.6} />, { pop: true }],
      ["I respect each of these", 960, 470, <Wd c={CHALK} s={24}>each sees something true · each keeps a fixed nature, moved</Wd>],
      ["the gap comes back, one level down", 960, 540, <K c={GOLD} s={26}>the gap comes back, one level down</K>, { pop: true }],
      ["If the base is mind", 960, 620, <Wd c={DIM} s={22}>mind → the shared, measurable world?</Wd>],
      ["If the smallest parts have tiny experiences", 960, 670, <Wd c={DIM} s={22}>tiny experiences → one felt red? the combination problem</Wd>],
      ["It has changed address", 960, 730, <Wd c={CHALK} s={26} serif>the question has changed address</Wd>],
      ["Emptiness without replacement puts nothing in the place the essence was taken from", 960, 830, <K c={TEAL} s={26}>nothing in its place: not mind, not awareness, not process, not a ground</K>, { pop: true }],
      ["And the clarity of what appears is not a replacement either", 960, 910, <Wd c={DIM} s={22}>clarity: never absent, never the stuff of things</Wd>],
    ]} />
  </AbsoluteFill>
);

const Cut: React.FC<{ a: string; b: string; c?: string; col: string }> = ({ a, b, c, col }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    {[a, b, c].filter(Boolean).map((x, i) => (
      <React.Fragment key={i}>
        {i ? <Wd c={GOLD} s={30}>?</Wd> : null}
        <div style={{ padding: "10px 20px", borderRadius: 12, border: `3px solid ${col}`, background: "rgba(10,12,30,0.7)" }}><Wd c={col} s={28} serif>{x as string}</Wd></div>
      </React.Fragment>
    ))}
  </div>
);
const ThreeScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The hard problem is a problem like time divided into past, present and future", 960, 90, <Wd c={GOLD} s={36} serif>The same cut, three times</Wd>],
      ["Cut time into three", 560, 260, <Cut a="past" b="present" c="future" col={ICE} />],
      ["Then ask how the past passes into the present", 560, 350, <Wd c={DIM} s={22}>how does the past pass into the present?</Wd>],
      ["And the clocks still work", 560, 410, <K c={GREEN} s={22}>change simply happens · the clocks still work</K>, { pop: true }],
      ["Cut what appears into mind and matter", 1360, 260, <Cut a="matter" b="mind" col={VIOLET} />],
      ["Cut what appears into mind and matter", 1360, 350, <Wd c={DIM} s={22}>no bridge, for the same reason</Wd>, { d: 2 }],
      ["There is a third form", 960, 520, <Cut a="a soul that only thinks" b="a body only extended" col={ROSE} />],
      ["How can a soul that only thinks move a body", 960, 610, <Wd c={DIM} s={22}>how can a thought move an arm?</Wd>],
      ["Without them, the intending and the moving arise together", 960, 670, <Wd c={CHALK} s={24}>intending and moving arise together · the doer named on the doing</Wd>],
      ["Nobody has to cross over to lift it", 960, 740, <K c={GREEN} s={22}>the arm lifts · nobody crosses over</K>, { pop: true }],
      ["All three are the same move", 960, 850, <K c={GOLD} s={28}>fix the natures first · then look for the bridge</K>, { pop: true }],
      ["The train leaves at nine", 960, 930, <Wd c={DIM} s={22}>the train leaves at nine · the hand reaches for the cup · the red is seen</Wd>],
    ]} />
  </AbsoluteFill>
);

const FireScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const out = ramp(t, c("The fire burned dependent on grass and sticks", -2.5), 2);
  return (
    <AbsoluteFill>
      <Items items={[
        ["So I do not say the hard problem is solved", 960, 90, <Wd c={WARM} s={40} serif>A problem that does not arise</Wd>],
        ["where a fire goes when it goes out", 1360, 220, <Wd c={CHALK} s={26}>where does the fire go? north, south, east, west?</Wd>],
        ["that does not apply", 1360, 300, <K c={GOLD} s={28}>"that does not apply"</K>, { pop: true }],
        ["The fire burned dependent on grass and sticks", 1360, 380, <Wd c={DIM} s={22}>it burned dependent on grass and sticks · no "where" to go</Wd>],
        ["That is the same kind of question", 1360, 470, <Wd c={CHALK} s={26}>how does matter give rise to mind? the same kind</Wd>],
        ["What remains is ordinary, and it stays important", 1360, 590, <Box c={GREEN} w={640} title="what remains" sub="science maps conditions · medicine acts on the brain" />, { pop: true }],
        ["This shows dependence, plainly", 1360, 720, <Wd c={CHALK} s={22}>dependence, plainly · not production by a brain on its own</Wd>],
        ["This is not a retreat to", 1360, 800, <Wd c={DIM} s={22}>not "all is mind" · not "nothing is there"</Wd>],
        ["What is denied is only the fixed nature", 1360, 870, <K c={TEAL} s={22}>denied: only the fixed nature the problem needed</K>, { pop: true }],
      ]} />
      <At x={480} y={520} o={ramp(t, c("where a fire goes when it goes out"), 0.5)}><Flame out={out} /></At>
    </AbsoluteFill>
  );
};

const TeaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The reasoning shows that the gap was built into the question", 960, 90, <Wd c={GREEN} s={40} serif>Seeing, not only reasoning</Wd>],
        ["Look for the point where matter turns into feeling", 1360, 260, <SK at="There is no such point" d={0.4} s={26}>the point where matter turns into feeling</SK>],
        ["There is the warmth", 1360, 380, <Wd c={CHALK} s={30} serif>the warmth · the bitterness · the swallow</Wd>],
        ["There is the warmth", 1360, 460, <Wd c={DIM} s={22}>nothing outside the tasting, waiting to be turned into it</Wd>, { d: 3 }],
        ["And no taster is found behind it", 1360, 540, <Wd c={DIM} s={22}>no taster behind it, across a gap</Wd>],
      ]} />
      <At x={520} y={500} o={ramp(t, c("Take a sip of tea"), 0.5)}><Tea /></At>
    </AbsoluteFill>
  );
};

const PlasticScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["When this is seen, something more than a question goes", 960, 90, <Wd c={GOLD} s={38} serif>From mechanical to luminously plastic</Wd>],
      ["Before, appearances looked mechanical, fixed and rigid", 960, 220, <SK at="After, the same appearances are met as spontaneous, and luminously plastic" d={1} s={28}>mechanical · fixed · rigid</SK>],
      ["Before, appearances looked mechanical, fixed and rigid", 960, 300, <Wd c={DIM} s={22}>dead stuff pushed by dead stuff · a light shut inside</Wd>, { d: 2 }],
      ["After, the same appearances are met as spontaneous, and luminously plastic", 960, 410, <Wd c={GOLD} s={40} serif>spontaneous · luminous · plastic</Wd>],
      ["Spontaneous, because nothing stands behind them making them happen", 400, 580, <Box c={WARM} w={500} title="spontaneous" sub="nothing behind, making it happen" />, { pop: true }],
      ["Luminous, because appearing is never in the dark", 960, 580, <Box c={GOLD} w={500} title="luminous" sub="clear as it appears · the appearance's own" />, { pop: true }],
      ["Plastic, because nothing has a fixed nature", 1520, 580, <Box c={TEAL} w={500} title="plastic" sub="arising, changing, falling away with conditions" />, { pop: true }],
      ["Plastic does not mean vague", 960, 760, <Wd c={CHALK} s={24}>not vague · not anything goes · the red is precise, the medicine works</Wd>],
      ["It is precisely because nothing is fixed", 960, 840, <K c={GREEN} s={24}>because nothing is fixed, things arise exactly as conditions allow</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The world does not lose its order. It loses its rigidity");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 3, Part 2 of the Dependent Arising series, and the close of Section 3", 960, 260, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 3 · the close</Wd>],
        ["The world does not lose its order. It loses its rigidity", 960, 520, <Wd c={CHALK} s={40} serif>The world does not lose its order.</Wd>],
        ["The world does not lose its order. It loses its rigidity", 960, 610, <Wd c={GOLD} s={40} serif>It loses its rigidity.</Wd>, { d: 2.2 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["How does grey matter give rise to the felt redness of red", "red", <OpenScene />],
    ["First, the problem, stated fairly", "fair", <FairScene />],
    ["Now look at what has to be in place before the question can be asked", "gap", <NeedsScene />],
    ["Let me show the same move with something so ordinary", "hand", <FistScene />],
    ["Why do the two steps feel so natural", "empty", <EmptyScene />],
    ["People sometimes hear", "chord", <ChordScene />],
    ["Here is where I part from most of the answers on offer", "moved", <MovedScene />],
    ["The hard problem is a problem like time divided into past, present and future", "three", <ThreeScene />],
    ["So I do not say the hard problem is solved", "fire", <FireScene />],
    ["The reasoning shows that the gap was built into the question", "tea", <TeaScene />],
    ["When this is seen, something more than a question goes", "plastic", <PlasticScene />],
    ["This is Section 3, Part 2 of the Dependent Arising series, and the close of Section 3", "night", <CloseScene />],
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
