// After Anatta · The Logic: Three Descriptions, One Taste: Anatta, Dependent Arising and Spontaneous Presence
// (thusness-website after-anatta/three-descriptions.html, aa-three-descriptions; EBooks Bonus Articles/three-descriptions-one-taste).
// Arc: a colour, who sees? -> one thread: the doer behind, never found, nothing put in its place -> three names, three
// descriptions, one taste -> Part One, the journey: anatta (Bahiya, the wind) -> the first taste (just colours, intimate,
// alignment) -> not a refined oneness (six clarities) -> total exertion, the same taste widening -> not yet freedom (the flower,
// the desynchronisation) -> the logic with the taste (no seer, goer, fire apart, causal power) -> the hinges (parts, whole, qi,
// field, relations, substrate) -> the taste revisited (reach, stability; nothing making it) -> the marketplace (who decides, why
// help) -> three encounters -> Part Two, the map: three descriptions and their guards -> the framework is not the prison (one
// stroke, not one stuff; not somewhere else) -> many faces (a death; shape, not stuff) -> where the doer comes back -> the masters
// -> try it.
// Stance: a doer, a seer, a cause pushing, a ground, a "one" everything is made of, a cosmic whole, a web, a source, a keeper and
// a recogniser are drawn only to be struck. Colours, sounds and conditions stay drawn and vivid. Nothing becomes one.
// Cue phrases avoid the respelled names (Nagarjuna, Dogen, Dzogchen, Tsongkhapa).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "Look at a colour in front of you", "who is doing the seeing", "This is After Anatta",
  // one thread
  "the same move keeps turning up", "A seer behind seeing", "A walker behind walking", "A cause behind its effect",
  "A ground behind appearances", "Each time it is looked for", "nothing is put in its place",
  // three names
  "are three names for that one finding", "Anatta makes it in seeing", "Dependent arising makes it everywhere",
  "Spontaneous presence is what is met", "they are not three teachings", "They are three descriptions of one taste",
  "Anatta says no one is behind it", "Dependent arising says nothing in it stands on its own",
  "Spontaneous presence says nothing is missing", "This talk has two parts", "First the journey", "Then the map",
  // anatta
  "The journey starts with anatta", "in the seen, just the seen", "Think of the wind", "The blowing is the wind",
  "there is seeing, and no seer left over behind it", "experience does not go blank", "The tree is more vivid",
  "But anatta does not do everything", "The observer has disappeared, but the world has not",
  // first taste
  "Right after anatta comes a first taste", "Seeing is just colours", "Hearing is just sound",
  "Nothing is doing the seeing", "Nothing runs underneath the colours", "And the colours are not dark",
  "the factors are intimate", "The alignment of these factors is the appearing", "Not two steps",
  "taste of spontaneous presence", "Remember it",
  // refined non-dual
  "How is this different from a refined", "It is still haunted by substance",
  "Oneness merges the seer into everything", "Anatta finds no seer there to merge", "In the taste, there is no",
  "The colour is clear as colour", "Six clarities", "So the test is simple",
  // total exertion
  "This taste does not stay in seeing and hearing", "Each event seems to spend itself completely",
  "The car is still the car", "called this total exertion", "Firewood in its place, ash in its place",
  "That is holism", "no cosmos packed inside it", "It is not a second taste", "Already two descriptions of one taste",
  // not yet freedom
  "But a taste is not yet freedom", "Ignorance has not been unbound", "Because they are not in the same place",
  "While I see a flower", "the flower is still assumed to be sitting there by itself", "A cause is still felt to push its effect",
  "Death is still the end of a someone", "That gap is what I call the desynchronisation", "It feels like the world itself",
  // the logic
  "It is only when it is challenged by", "That is what the logic is for", "The logic does not do this alone",
  "Then I look, and check it against the taste", "Insight without the logic drifts back into nouns",
  "Logic without the taste stays a clever argument", "makes the same move as anatta, again and again",
  "There is no seer, either bound up with seeing", "A goer does not go", "Fire is neither the same as its fuel",
  "A self is the doer behind the doing", "A causal power is the doer behind the causing", "Neither is found",
  // hinges
  "Before freedom, the mind always hinges on something", "First it hinges on parts", "It hinges on the whole",
  "Qi, energy, a field, relations, a substrate", "Each time, it is looking for a foundation", "The tools meet each hinge in turn",
  "the mind was looking for all along", "free from all elaborations, and in a stable way",
  "Stable does not mean the habit can never stir",
  // revisited
  "This is the first taste, revisited", "It is the same taste", "Reach: at first the taste lived in the senses",
  "And stability", "Take away the doer from everything", "Then nothing is making the appearing",
  "It shows up whole and vivid", "That is what spontaneous presence means to me", "It is not uncaused",
  "And it is not a source", "light, magical and plastic",
  // marketplace
  "and dirty my hands", "The marketplace is ordinary life", "with helping hands, smiling",
  "Here dependent arising changes its role", "Dependent arising is how help works", "Who decides, if no one is there",
  "Nobody disappears", "Responsibility is answered first", "And why help, if others are not found",
  "Because it is not fixed, it can be eased",
  // encounters
  "the taste has been met three times", "Anatta, in seeing", "Freedom from all elaborations, when every hinge is exhausted",
  "And dependent arising and emptiness, in the marketplace", "In the taste there is no order", "it goes round more than once",
  // the map
  "Now the map", "Three descriptions, one taste", "Not a blank; nobody disappears", "Not a web, and not a ground",
  "Not uncaused, and not a source", "None is higher", "any more than we say summer becomes winter", "Nothing crosses",
  "read as a seal", "The descriptions keep each other honest",
  // framework
  "Dependent arising lives in the default framework", "That framework works", "The framework is not the prison",
  "That habit is the matrix", "It is the wisdom that shows the matrix up", "Without the framework, there is one complete stroke",
  "One here does not mean one stuff", "Freedom from all elaborations is known without the cutting",
  "without becoming a refuge",
  // faces
  "I recognise its many faces", "A death, too", "But no one is found who goes",
  "It is much like a model that recognises faces", "Once the taste is known, it is recognised by its shape",
  "The shape is the same each time", "If the taste became an essence", "And no one is doing the recognising",
  "Recognition can misfire", "The test is the shape",
  // the doer comes back
  "every mistake on this path has the same shape", "After anatta, a vast Awareness", "In total exertion, a cosmic whole",
  "In dependent arising, a web", "In spontaneous presence, a source", "In the marketplace, the saviour",
  "And in practice, a state to keep up", "None of this is kept", "It is recognised",
  // masters
  "Do I depart from the great masters", "praises dependent arising as without arising",
  "says spontaneous presence is not made by causes and conditions", "I read that as", "Where I part, I say so",
  "on the order of the path", "On the bridge across time", "And from the reading of", "These are my readings",
  // try it
  "Listen to a sound nearby", "Look for the hearer behind the hearing", "Now look for what makes the sound",
  "Then stop looking", "Do not try to keep this", "No one behind it, nothing standing on its own, nothing missing",
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
/** Wind lines blowing, p 0..1. */
const Wind: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  return (
    <svg width={600} height={260} viewBox="0 0 600 260" style={{ overflow: "visible" }} opacity={p}>
      {[0, 1, 2, 3].map((i) => {
        const k = ((t * 0.35 + i / 4) % 1);
        const y = 40 + i * 60;
        return <path key={i} d={`M${k * 500 - 120} ${y} q60 -30 120 0 t120 0`} fill="none" stroke={ICE} strokeWidth={5}
          opacity={Math.sin(k * Math.PI)} style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} />;
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
/** A simple face: the shape recognised. */
const Face: React.FC<{ c: string; tilt?: number }> = ({ c, tilt = 0 }) => (
  <svg width={140} height={170} viewBox="0 0 140 170" style={{ overflow: "visible", transform: `rotate(${tilt}deg)` }}>
    <ellipse cx={70} cy={85} rx={55} ry={72} fill="none" stroke={c} strokeWidth={5} style={{ filter: `drop-shadow(0 0 8px ${c})` }} />
    <circle cx={50} cy={70} r={6} fill={c} /><circle cx={90} cy={70} r={6} fill={c} />
    <path d="M45 115 q25 18 50 0" fill="none" stroke={c} strokeWidth={5} />
  </svg>
);
/** A box on the board, for the three descriptions and the encounters. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; guard?: React.ReactNode }> = ({ c, w = 460, title, sub, guard }) => (
  <div style={{ width: w, padding: "26px 24px", borderRadius: 20, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)", boxShadow: `0 0 34px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={38} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 12 }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
    {guard ? <div style={{ marginTop: 14 }}>{guard}</div> : null}
  </div>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  const first = 1 - ramp(t, aa + 2.5, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={380} o={ramp(t, 0.4, 0.6) * first}>
        <div style={{ position: "relative" }}><Patch color="#3E7BD8" size={180} /><Pick at={c("Look at a colour in front of you") + 1} w={250} h={250} color={GOLD} /></div>
      </At>
      <Items items={[["who is doing the seeing", 960, 600, <Wd c={GOLD} s={44} serif>who is doing the seeing?</Wd>, { until: "This is After Anatta", ud: 2.5 }]]} />
      <At x={960} y={360} o={ramp(t, aa + 2.8, 0.8)}><Wd c={CHALK} s={66} serif>Three Descriptions, One Taste</Wd></At>
      <At x={960} y={470} o={ramp(t, aa + 3.4, 0.8)}><Wd c={GOLD} s={34} serif>Anatta, Dependent Arising and Spontaneous Presence</Wd></At>
    </AbsoluteFill>
  );
};

const ThreadScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const found = c("Each time it is looked for") + 1.2;
  const pairs: [string, string, string, number][] = [
    ["A seer behind seeing", "a seer", "seeing", 230],
    ["A walker behind walking", "a walker", "walking", 360],
    ["A cause behind its effect", "a cause, pushing", "its effect", 490],
    ["A ground behind appearances", "a ground", "appearances", 620],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["the same move keeps turning up", 960, 110, <Wd c={CHALK} s={38} serif>something seems to stand behind, doing it</Wd>]]} />
      {pairs.map(([cue, behind, act, y]) => (
        <React.Fragment key={cue}>
          <At x={720} y={y} o={ramp(t, c(cue), 0.5)}><SK c={DIM} s={28} strikeAt={found}>{behind}</SK></At>
          <At x={1200} y={y} o={ramp(t, c(cue) + 0.3, 0.5)}><K c={TEAL} s={28}>{act}</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Each time it is looked for", 960, 740, <Wd c={GOLD} s={32}>looked for: not found</Wd>],
        ["nothing is put in its place", 960, 810, <Wd c={CHALK} s={28}>and nothing is put in its place</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const desc = c("They are three descriptions of one taste");
  const two = c("This talk has two parts");
  const cols: [string, string, string, string, string, number][] = [
    ["Anatta makes it in seeing", "Anatta says no one is behind it", "anatta", "no one is behind it", GOLD, 420],
    ["Dependent arising makes it everywhere", "Dependent arising says nothing in it stands on its own", "dependent arising", "nothing stands on its own", TEAL, 960],
    ["Spontaneous presence is what is met", "Spontaneous presence says nothing is missing", "spontaneous presence", "nothing missing, nothing making it", VIOLET, 1500],
  ];
  const out = 1 - ramp(t, two, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["are three names for that one finding", 960, 110, <Wd c={CHALK} s={36} serif>three names for one finding</Wd>, { until: "This talk has two parts" }]]} />
      {cols.map(([a, b, name, says, col, x]) => (
        <React.Fragment key={name}>
          <At x={x} y={300} o={ramp(t, c(a), 0.5) * out}><K c={col} s={32}>{name}</K></At>
          <At x={x} y={430} o={ramp(t, c(b), 0.5) * out}><Wd c={CHALK} s={26}>{says}</Wd></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["they are not three teachings", 960, 560, <Wd c={DIM} s={28}>not three teachings, not three stages</Wd>, { until: "This talk has two parts" }],
        ["They are three descriptions of one taste", 960, 660, <Wd c={GOLD} s={44} serif>three descriptions, one taste</Wd>, { until: "This talk has two parts" }],
      ]} />
      <At x={960} y={380} o={ramp(t, two, 0.5)}><Wd c={CHALK} s={36} serif>two parts</Wd></At>
      <Items items={[
        ["First the journey", 660, 500, <Box c={GOLD} w={420} title="the journey" sub="how the taste is met" />],
        ["Then the map", 1260, 500, <Box c={TEAL} w={420} title="the map" sub="how it is described" />],
      ]} />
      <At x={960} y={800} o={ramp(t, desc, 0.5) * 0}><span /></At>
    </AbsoluteFill>
  );
};

const AnattaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const wind = c("Think of the wind");
  const blow = c("The blowing is the wind");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The journey starts with anatta", 960, 110, <Wd c={GOLD} s={40} serif>anatta: no doer in seeing</Wd>],
        ["in the seen, just the seen", 960, 220, <Wd c={CHALK} s={34} serif>in the seen, just the seen</Wd>, { until: "Think of the wind" }],
      ]} />
      <At x={960} y={360} o={ramp(t, wind, 0.6)}><Wind p={ramp(t, wind, 0.8)} /></At>
      <At x={660} y={560} o={ramp(t, wind + 1, 0.5)}><SK c={DIM} s={28} strikeAt={blow + 0.6}>the wind, a thing</SK></At>
      <At x={1260} y={560} o={ramp(t, wind + 1.6, 0.5)}><K c={ICE} s={28}>blowing</K></At>
      <Items items={[
        ["The blowing is the wind", 960, 660, <Wd c={ICE} s={32}>the blowing is the wind</Wd>],
        ["there is seeing, and no seer left over behind it", 960, 740, <Wd c={CHALK} s={30}>seeing, and no seer left over</Wd>, { until: "experience does not go blank" }],
        ["experience does not go blank", 960, 740, <Wd c={TEAL} s={30}>not blank: the tree more vivid, not less</Wd>, { until: "But anatta does not do everything" }],
        ["But anatta does not do everything", 960, 740, <Wd c={ROSE} s={30}>the observer has gone; the world is still solid</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TasteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const intimate = c("the factors are intimate");
  const align = c("The alignment of these factors is the appearing");
  const conds: [string, number, number][] = [["light", 420, 300], ["eye", 420, 450], ["attention", 420, 600]];
  const first = 1 - ramp(t, intimate, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["Right after anatta comes a first taste", 960, 110, <Wd c={GOLD} s={40} serif>the first taste</Wd>]]} />
      <At x={700} y={380} o={ramp(t, c("Seeing is just colours"), 0.6) * first}><div style={{ display: "flex", gap: 24 }}><Patch color="#3E7BD8" size={110} /><Patch color="#E2593E" size={110} /><Patch color="#5FC48A" size={110} /></div></At>
      <At x={1260} y={380} o={ramp(t, c("Hearing is just sound"), 0.6) * first}><Waves p={1} /></At>
      <Items items={[
        ["Seeing is just colours", 700, 540, <Wd c={CHALK} s={30}>just colours, no effort</Wd>, { until: "the factors are intimate" }],
        ["Hearing is just sound", 1260, 540, <Wd c={CHALK} s={30}>just sound, no effort</Wd>, { until: "the factors are intimate" }],
        ["Nothing runs underneath the colours", 960, 650, <SK c={DIM} s={26} strikeAt={c("Nothing runs underneath the colours") + 1.4}>a process running underneath</SK>, { until: "the factors are intimate" }],
        ["And the colours are not dark", 960, 760, <Wd c={GOLD} s={30}>clear, known and vivid: no knower behind</Wd>, { until: "the factors are intimate" }],
      ]} />
      {conds.map(([n, x, y], i) => (
        <React.Fragment key={n}>
          <At x={x} y={y} o={ramp(t, intimate + 0.4 * i, 0.5)}><K c={GOLD} s={28}>{n}</K></At>
          <Flow x1={x + 100} y1={y} x2={1040} y2={450} color={TEAL} p={ramp(t, align + 0.2 * i, 0.8)} />
        </React.Fragment>
      ))}
      <At x={1200} y={450} o={ramp(t, intimate, 0.6)}><Patch color="#3E7BD8" size={140} /></At>
      <Items items={[
        ["The alignment of these factors is the appearing", 1200, 620, <Wd c={TEAL} s={30}>their alignment is the appearing</Wd>],
        ["Not two steps", 1200, 700, <Wd c={DIM} s={26}>not factors first, then a lining up</Wd>],
        ["taste of spontaneous presence", 960, 800, <Wd c={GOLD} s={32} serif>a first taste of spontaneous presence</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OneScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = c("It is still haunted by substance");
  const no = c("In the taste, there is no");
  const six: [string, string][] = [["seeing", "#3E7BD8"], ["hearing", TEAL], ["smelling", GREEN], ["tasting", WARM], ["touching", ROSE], ["thinking", VIOLET]];
  const outOne = 1 - ramp(t, no, 0.6);
  return (
    <AbsoluteFill>
      <Items items={[["How is this different from a refined", 960, 110, <Wd c={CHALK} s={38} serif>not a refined oneness</Wd>]]} />
      <At x={960} y={420} o={ramp(t, one, 0.6) * outOne}>
        <div style={{ width: 520, height: 260, borderRadius: 140, background: "radial-gradient(rgba(228,194,122,0.5), rgba(228,194,122,0.08))", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SK c={DIM} s={30} strikeAt={c("Anatta finds no seer there to merge") + 1}>one luminosity, everything made of it</SK>
        </div>
      </At>
      <Items items={[
        ["Oneness merges the seer into everything", 960, 660, <Wd c={DIM} s={28}>oneness merges the seer into everything</Wd>, { until: "In the taste, there is no" }],
        ["Anatta finds no seer there to merge", 960, 740, <Wd c={GOLD} s={30}>anatta: no seer to merge</Wd>, { until: "In the taste, there is no" }],
        ["In the taste, there is no", 960, 230, <Wd c={TEAL} s={34} serif>no "made of"</Wd>],
        ["The colour is clear as colour", 960, 310, <Wd c={CHALK} s={28}>colour clear as colour, sound clear as sound</Wd>],
      ]} />
      {six.map(([n, col], i) => (
        <At key={n} x={360 + i * 240} y={480} o={ramp(t, c("Six clarities") + 0.25 * i, 0.5)}><K c={col} s={26}>{n}</K></At>
      ))}
      <Items items={[
        ["Six clarities", 960, 600, <Wd c={GOLD} s={34} serif>six clarities, not one lamp</Wd>],
        ["So the test is simple", 960, 720, <Wd c={CHALK} s={30}>the test: is there a "one" everything is made of?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["This taste does not stay in seeing and hearing", 960, 110, <Wd c={GOLD} s={40} serif>the taste widens</Wd>],
        ["Each event seems to spend itself completely", 960, 230, <Wd c={CHALK} s={32}>each event spends itself completely</Wd>],
        ["The car is still the car", 960, 320, <K c={TEAL} s={28}>boundaries soften; the car is still the car</K>],
        ["called this total exertion", 960, 430, <Wd c={GOLD} s={42} serif>total exertion</Wd>],
        ["Firewood in its place, ash in its place", 960, 520, <div style={{ display: "flex", gap: 60 }}><K c={WARM} s={28}>firewood, complete</K><K c={DIM} s={28}>ash, complete</K></div>],
        ["That is holism", 960, 630, <SK c={DIM} s={28} strikeAt={c("no cosmos packed inside it") + 0.4}>the whole cosmos in each moment</SK>],
        ["It is not a second taste", 960, 740, <Wd c={CHALK} s={30}>not a second taste: the same one, widening</Wd>],
        ["Already two descriptions of one taste", 960, 810, <Wd c={TEAL} s={28}>already two descriptions of one taste</Wd>],
      ]} />
      <At x={1600} y={320} o={ramp(t, c("The car is still the car"), 0.5)}><Waves p={0.8} color={GOLD} /></At>
    </AbsoluteFill>
  );
};

const NotFreeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const flower = c("While I see a flower");
  const turn = c("the flower is still assumed to be sitting there by itself");
  return (
    <AbsoluteFill>
      <Items items={[
        ["But a taste is not yet freedom", 960, 110, <Wd c={ROSE} s={40} serif>a taste is not yet freedom</Wd>],
        ["Ignorance has not been unbound", 960, 200, <Wd c={DIM} s={28}>the habit of reifying stays</Wd>],
        ["Because they are not in the same place", 600, 300, <K c={TEAL} s={26}>the taste: in the senses</K>],
        ["Because they are not in the same place", 1320, 300, <K c={ROSE} s={26}>the habit: in how the world is understood</K>, { d: 1 }],
      ]} />
      <At x={600} y={520} o={ramp(t, flower, 0.6)}><Flower /></At>
      <At x={600} y={710} o={ramp(t, flower + 0.8, 0.5)}><Wd c={CHALK} s={26}>seeing: just colours</Wd></At>
      <At x={1320} y={480} o={ramp(t, turn, 0.6)}><SK c={ROSE} s={26} strikeAt={c("It feels like the world itself") + 1.6}>the flower, there by itself; its red its own</SK></At>
      <Items items={[
        ["A cause is still felt to push its effect", 1320, 570, <SK c={ROSE} s={26} strikeAt={c("It feels like the world itself") + 1.8}>a cause pushing</SK>],
        ["Death is still the end of a someone", 1320, 660, <SK c={ROSE} s={26} strikeAt={c("It feels like the world itself") + 2}>death, the end of a someone</SK>],
        ["That gap is what I call the desynchronisation", 960, 790, <Wd c={GOLD} s={34} serif>the desynchronisation</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const move = c("makes the same move as anatta, again and again");
  const first = 1 - ramp(t, move, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["It is only when it is challenged by", 960, 110, <Wd c={GOLD} s={38} serif>the logic brings the habit up</Wd>],
        ["The logic does not do this alone", 960, 230, <Wd c={CHALK} s={30}>the habit is in perception, even in the body</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["Then I look, and check it against the taste", 960, 340, <K c={TEAL} s={28}>a whole apart from its parts? a cause pushing?</K>, { until: "makes the same move as anatta, again and again" }],
        ["Insight without the logic drifts back into nouns", 960, 460, <Wd c={DIM} s={28}>insight without logic: back into nouns</Wd>, { until: "makes the same move as anatta, again and again" }],
        ["Logic without the taste stays a clever argument", 960, 540, <Wd c={DIM} s={28}>logic without the taste: words about words</Wd>, { until: "makes the same move as anatta, again and again" }],
      ]} />
      <At x={960} y={660} o={ramp(t, c("Then I look, and check it against the taste") + 1, 0.5) * first}><Wd c={GOLD} s={32} serif>the logic and the taste, together</Wd></At>
      <Items items={[
        ["makes the same move as anatta, again and again", 960, 230, <Wd c={CHALK} s={32} serif>the same move, again and again</Wd>],
        ["There is no seer, either bound up with seeing", 560, 360, <SK c={DIM} s={26} strikeAt={c("Neither is found")}>a seer</SK>],
        ["A goer does not go", 960, 360, <SK c={DIM} s={26} strikeAt={c("Neither is found") + 0.2}>a goer</SK>],
        ["Fire is neither the same as its fuel", 1360, 360, <SK c={DIM} s={26} strikeAt={c("Neither is found") + 0.4}>fire apart from fuel</SK>],
        ["A self is the doer behind the doing", 700, 520, <SK c={DIM} s={28} strikeAt={c("Neither is found") + 0.6}>a self: the doer behind the doing</SK>],
        ["A causal power is the doer behind the causing", 1220, 520, <SK c={DIM} s={28} strikeAt={c("Neither is found") + 0.8}>a causal power: the doer behind the causing</SK>],
        ["Neither is found", 960, 680, <Wd c={GOLD} s={34} serif>neither is found</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const HingeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tools = c("The tools meet each hinge in turn");
  const hinges: [string, string, number][] = [
    ["First it hinges on parts", "parts", 0], ["It hinges on the whole", "the whole", 1],
    ["Qi, energy, a field, relations, a substrate", "qi, energy", 2], ["Qi, energy, a field, relations, a substrate", "a field", 3],
    ["Qi, energy, a field, relations, a substrate", "relations", 4], ["Qi, energy, a field, relations, a substrate", "a substrate", 5],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["Before freedom, the mind always hinges on something", 960, 110, <Wd c={CHALK} s={38} serif>what the mind hinges on</Wd>]]} />
      {hinges.map(([cue, label, i]) => (
        <At key={label} x={960} y={230 + i * 80} o={ramp(t, c(cue) + (i >= 2 ? (i - 2) * 0.5 : 0), 0.5)}>
          <SK c={i >= 5 ? ROSE : DIM} s={28} strikeAt={tools + 0.8 + 0.6 * i}>{label}</SK>
        </At>
      ))}
      <Items items={[
        ["Each time, it is looking for a foundation", 1500, 420, <Wd c={ROSE} s={28}>looking for a foundation</Wd>],
        ["The tools meet each hinge in turn", 420, 420, <Wd c={TEAL} s={28}>the tools, hinge by hinge</Wd>],
        ["free from all elaborations, and in a stable way", 960, 740, <Wd c={GOLD} s={36} serif>free from all elaborations, stable</Wd>],
        ["Stable does not mean the habit can never stir", 960, 820, <Wd c={DIM} s={26}>no longer needing looking or effort</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RevisitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const take = c("Take away the doer from everything");
  const first = 1 - ramp(t, take, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["This is the first taste, revisited", 960, 110, <Wd c={GOLD} s={40} serif>the taste, revisited</Wd>],
        ["It is the same taste", 960, 230, <Wd c={CHALK} s={30}>the same taste; the understanding has matured</Wd>, { until: "Take away the doer from everything" }],
        ["Reach: at first the taste lived in the senses", 660, 380, <Box c={TEAL} w={460} title="reach" sub="thought, body, things, causes, time, death" />, { until: "Take away the doer from everything" }],
        ["And stability", 1260, 380, <Box c={GOLD} w={460} title="stability" sub="no longer depends on looking" />, { until: "Take away the doer from everything" }],
      ]} />
      <At x={960} y={560} o={ramp(t, c("And stability") + 1, 0.5) * first}><span /></At>
      <Items items={[
        ["Take away the doer from everything", 960, 260, <SK c={DIM} s={28} strikeAt={c("Then nothing is making the appearing")}>a seer · a producing cause · dependence as a thing</SK>],
        ["Then nothing is making the appearing", 960, 360, <Wd c={CHALK} s={32}>nothing is making the appearing</Wd>],
        ["It shows up whole and vivid", 960, 470, <K c={TEAL} s={30}>a car going by: whole and vivid, as its conditions meet</K>],
        ["That is what spontaneous presence means to me", 960, 580, <Wd c={GOLD} s={42} serif>spontaneous presence</Wd>],
        ["It is not uncaused", 700, 680, <K c={DIM} s={26}>not uncaused</K>],
        ["And it is not a source", 1220, 680, <K c={DIM} s={26}>not a source</K>],
        ["light, magical and plastic", 960, 790, <Wd c={TEAL} s={32} serif>light, magical and plastic</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MarketScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const who = c("Who decides, if no one is there");
  const first = 1 - ramp(t, who, 0.5);
  const life = ["work", "family", "money", "arguments", "others' troubles", "choices"];
  return (
    <AbsoluteFill>
      <Items items={[["and dirty my hands", 960, 110, <Wd c={GOLD} s={42} serif>the marketplace, with dirty hands</Wd>]]} />
      {life.map((w, i) => (
        <At key={w} x={360 + i * 240} y={250} o={ramp(t, c("The marketplace is ordinary life") + 0.3 * i, 0.5) * first}><K c={WARM} s={24}>{w}</K></At>
      ))}
      <Items items={[
        ["with helping hands, smiling", 960, 380, <Wd c={CHALK} s={30} serif>with helping hands, smiling</Wd>, { until: "Who decides, if no one is there" }],
        ["Here dependent arising changes its role", 960, 500, <Wd c={TEAL} s={30}>from a tool that takes apart</Wd>, { until: "Who decides, if no one is there" }],
        ["Dependent arising is how help works", 960, 600, <Wd c={GOLD} s={36} serif>to how help works</Wd>, { until: "Who decides, if no one is there" }],
        ["Who decides, if no one is there", 960, 260, <Wd c={CHALK} s={34} serif>who decides?</Wd>],
        ["Nobody disappears", 960, 360, <K c={TEAL} s={28}>I act, choose, keep promises, answer for it</K>],
        ["Nobody disappears", 960, 450, <SK c={DIM} s={26} strikeAt={c("Responsibility is answered first")}>someone behind, pulling the levers</SK>, { d: 2 }],
        ["And why help, if others are not found", 960, 580, <Wd c={CHALK} s={34} serif>why help?</Wd>],
        ["Because it is not fixed, it can be eased", 960, 690, <Wd c={GOLD} s={32}>not fixed, so it can be eased</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EncounterScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["the taste has been met three times", 960, 110, <Wd c={CHALK} s={40} serif>one taste, met three times</Wd>],
      ["Anatta, in seeing", 420, 400, <Box c={GOLD} w={460} title="anatta" sub="in seeing" />],
      ["Freedom from all elaborations, when every hinge is exhausted", 960, 400, <Box c={VIOLET} w={460} title="free of elaborations" sub="every hinge exhausted" />],
      ["And dependent arising and emptiness, in the marketplace", 1500, 400, <Box c={TEAL} w={460} title="dependent arising" sub="in the marketplace" />],
      ["In the taste there is no order", 960, 650, <Wd c={DIM} s={28}>in the taste, no order; in a life, one</Wd>],
      ["it goes round more than once", 960, 740, <Wd c={GOLD} s={32}>and it goes round more than once</Wd>],
    ]} />
  </AbsoluteFill>
);

const MapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const none = c("None is higher");
  const first = 1 - ramp(t, none, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now the map", 960, 110, <Wd c={GOLD} s={42} serif>the map</Wd>],
        ["Three descriptions, one taste", 420, 380, <Box c={GOLD} w={460} title="anatta" sub="no one is behind it" guard={<K c={DIM} s={22}>not a blank</K>} />, { until: "None is higher" }],
        ["Not a web, and not a ground", 960, 380, <Box c={TEAL} w={460} title="dependent arising" sub="nothing stands on its own" guard={<K c={DIM} s={22}>not a web, not a ground</K>} />, { d: -1.2, until: "None is higher" }],
        ["Not uncaused, and not a source", 1500, 380, <Box c={VIOLET} w={460} title="spontaneous presence" sub="nothing missing, nothing making it" guard={<K c={DIM} s={22}>not uncaused, not a source</K>} />, { d: -1.2, until: "None is higher" }],
      ]} />
      <At x={960} y={620} o={ramp(t, c("Three descriptions, one taste") + 1, 0.5) * first}><Wd c={CHALK} s={32} serif>three angles on one face</Wd></At>
      <Items items={[
        ["None is higher", 960, 260, <Wd c={CHALK} s={36} serif>none is higher; not stages</Wd>],
        ["any more than we say summer becomes winter", 960, 380, <div style={{ display: "flex", gap: 60 }}><K c={WARM} s={28}>summer</K><K c={ICE} s={28}>winter</K></div>],
        ["Nothing crosses", 960, 470, <SK c={DIM} s={26} strikeAt={c("Nothing crosses") + 0.8}>a traveller crossing from one to the other</SK>],
        ["read as a seal", 960, 590, <Wd c={GOLD} s={30}>anatta as a seal: all things without self</Wd>],
        ["The descriptions keep each other honest", 960, 720, <Wd c={TEAL} s={30}>no hidden ground · no machine in the dark</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FrameScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stroke = c("Without the framework, there is one complete stroke");
  const first = 1 - ramp(t, stroke, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Dependent arising lives in the default framework", 960, 110, <Wd c={CHALK} s={36} serif>the default framework</Wd>],
        ["Dependent arising lives in the default framework", 960, 200, <K c={TEAL} s={26}>parts and whole · before and after · cause and effect</K>, { d: 1, until: "Without the framework, there is one complete stroke" }],
        ["That framework works", 960, 290, <Wd c={GREEN} s={28}>it works: to speak, to cook, to keep promises</Wd>, { until: "Without the framework, there is one complete stroke" }],
        ["The framework is not the prison", 960, 400, <Wd c={GOLD} s={36} serif>not the prison</Wd>, { until: "Without the framework, there is one complete stroke" }],
        ["That habit is the matrix", 960, 500, <K c={ROSE} s={28}>the matrix: living in it with reified thoughts</K>, { until: "Without the framework, there is one complete stroke" }],
        ["It is the wisdom that shows the matrix up", 960, 600, <Wd c={TEAL} s={30}>dependent arising shows the matrix up</Wd>, { until: "Without the framework, there is one complete stroke" }],
      ]} />
      <At x={960} y={700} o={ramp(t, c("It is the wisdom that shows the matrix up") + 1.5, 0.5) * first}><span /></At>
      <Items items={[
        ["Without the framework, there is one complete stroke", 960, 260, <Wd c={GOLD} s={40} serif>one complete stroke</Wd>],
        ["One here does not mean one stuff", 960, 380, <SK c={DIM} s={26} strikeAt={c("One here does not mean one stuff") + 1}>one stuff</SK>],
        ["One here does not mean one stuff", 960, 470, <div style={{ display: "flex", gap: 30 }}><K c={ICE} s={26}>not cut into before and after</K><K c={TEAL} s={26}>colour still colour</K></div>, { d: 1.5 }],
        ["Freedom from all elaborations is known without the cutting", 960, 600, <Wd c={CHALK} s={30}>known without the cutting: not somewhere else</Wd>],
        ["without becoming a refuge", 960, 700, <Wd c={GOLD} s={28}>so it goes back to work, not to a refuge</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FacesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const model = c("It is much like a model that recognises faces");
  const first = 1 - ramp(t, model, 0.5);
  const faces = ["a sound", "a thought", "anger", "a cause", "time", "the dishes"];
  return (
    <AbsoluteFill>
      <Items items={[["I recognise its many faces", 960, 110, <Wd c={GOLD} s={40} serif>many faces</Wd>]]} />
      {faces.map((f, i) => (
        <At key={f} x={360 + i * 240} y={240} o={ramp(t, c("I recognise its many faces") + 0.3 * i, 0.5) * first}><K c={TEAL} s={24}>{f}</K></At>
      ))}
      <Items items={[
        ["A death, too", 960, 380, <K c={VIOLET} s={28}>a death, mourned</K>, { until: "It is much like a model that recognises faces" }],
        ["But no one is found who goes", 960, 480, <SK c={DIM} s={26} strikeAt={c("But no one is found who goes") + 1.2}>someone who goes · something cut off</SK>, { until: "It is much like a model that recognises faces" }],
      ]} />
      {[0, 1, 2].map((i) => (
        <At key={i} x={660 + i * 300} y={330} o={ramp(t, model + 0.4 * i, 0.5)}><Face c={[GOLD, TEAL, VIOLET][i]} tilt={[-12, 0, 14][i]} /></At>
      ))}
      <Items items={[
        ["Once the taste is known, it is recognised by its shape", 960, 500, <Wd c={CHALK} s={30}>known by its shape</Wd>],
        ["The shape is the same each time", 960, 580, <K c={GOLD} s={26}>no one behind · nothing on its own · nothing missing</K>],
        ["If the taste became an essence", 700, 680, <SK c={DIM} s={24} strikeAt={c("If the taste became an essence") + 1.4}>an essence in everything</SK>],
        ["And no one is doing the recognising", 1220, 680, <SK c={DIM} s={24} strikeAt={c("And no one is doing the recognising") + 1}>a recogniser behind</SK>],
        ["Recognition can misfire", 960, 780, <Wd c={ROSE} s={28}>misfires: the I AM, a blank quiet, a refined oneness</Wd>, { until: "The test is the shape" }],
        ["The test is the shape", 960, 780, <Wd c={GOLD} s={28}>the test is the shape</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BackScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const kept = c("None of this is kept");
  const rows: [string, string, number, number][] = [
    ["After anatta, a vast Awareness", "a vast Awareness", 560, 240],
    ["In total exertion, a cosmic whole", "a cosmic whole", 1360, 240],
    ["In dependent arising, a web", "a web, a mechanism", 560, 380],
    ["In spontaneous presence, a source", "a source, or no causes", 1360, 380],
    ["In the marketplace, the saviour", "a saviour, a bystander", 560, 520],
    ["And in practice, a state to keep up", "a state to keep up", 1360, 520],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["every mistake on this path has the same shape", 960, 110, <Wd c={CHALK} s={36} serif>the doer, back in a bigger coat</Wd>]]} />
      {rows.map(([cue, label, x, y], i) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5)}><SK c={ROSE} s={28} strikeAt={kept + 0.3 * i}>{label}</SK></At>
      ))}
      <At x={960} y={720}><Reveal text="None of this is kept. It was always so." at={kept} size={40} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

const MastersScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Do I depart from the great masters", 960, 110, <Wd c={CHALK} s={38} serif>the masters: not at the core</Wd>],
      ["praises dependent arising as without arising", 960, 230, <K c={GOLD} s={28}>dependent arising: without arising, without ceasing</K>],
      ["says spontaneous presence is not made by causes and conditions", 960, 330, <K c={VIOLET} s={28}>spontaneous presence: not made by causes</K>],
      ["I read that as", 960, 430, <Wd c={TEAL} s={34} serif>unborn by nature</Wd>],
      ["Where I part, I say so", 960, 540, <Wd c={CHALK} s={30}>where I part</Wd>],
      ["on the order of the path", 520, 640, <K c={DIM} s={24}>the taste first, the view later</K>],
      ["On the bridge across time", 960, 640, <K c={DIM} s={24}>neither carried nor cut</K>],
      ["And from the reading of", 1400, 640, <K c={DIM} s={24}>no net as the real</K>],
      ["These are my readings", 960, 760, <Wd c={GOLD} s={28}>my readings: read them for yourself</Wd>],
    ]} />
  </AbsoluteFill>
);

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("No one behind it, nothing standing on its own, nothing missing");
  const pre = 1 - ramp(t, end, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Listen to a sound nearby", 960, 120, <Wd c={GOLD} s={40} serif>try it: a sound nearby</Wd>],
        ["Look for the hearer behind the hearing", 960, 250, <Wd c={DIM} s={28}>a hearer behind? a process underneath?</Wd>, { o: 1, until: "No one behind it, nothing standing on its own, nothing missing" }],
        ["Now look for what makes the sound", 960, 350, <K c={TEAL} s={26}>engine · air · ear · attention: none behind it</K>, { until: "No one behind it, nothing standing on its own, nothing missing" }],
        ["Then stop looking", 960, 460, <Wd c={CHALK} s={30}>complete, as its conditions meet</Wd>, { until: "No one behind it, nothing standing on its own, nothing missing" }],
        ["Do not try to keep this", 960, 560, <Wd c={DIM} s={26}>do not keep it; the next sound is complete too</Wd>, { until: "No one behind it, nothing standing on its own, nothing missing" }],
      ]} />
      <At x={1600} y={300} o={ramp(t, c("Listen to a sound nearby"), 0.6) * pre}><Waves p={1} /></At>
      <At x={960} y={460}><Reveal text="No one behind it, nothing standing on its own, nothing missing." at={end} size={44} color={GOLD} speed={0.04} /></At>
      <At x={960} y={600} o={ramp(t, end + 4, 0.8)}><Wd c={CHALK} s={36} serif>one taste, met again and again</Wd></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Look at a colour in front of you", "dusk", <OpenScene />],
    ["the same move keeps turning up", "search", <ThreadScene />],
    ["are three names for that one finding", "whole", <ThreeScene />],
    ["The journey starts with anatta", "light", <AnattaScene />],
    ["Right after anatta comes a first taste", "jade", <TasteScene />],
    ["How is this different from a refined", "doubt", <OneScene />],
    ["This taste does not stay in seeing and hearing", "light", <ExertionScene />],
    ["But a taste is not yet freedom", "doubt", <NotFreeScene />],
    ["It is only when it is challenged by", "deep", <LogicScene />],
    ["Before freedom, the mind always hinges on something", "search", <HingeScene />],
    ["This is the first taste, revisited", "whole", <RevisitScene />],
    ["and dirty my hands", "market", <MarketScene />],
    ["the taste has been met three times", "dusk", <EncounterScene />],
    ["Now the map", "light", <MapScene />],
    ["Dependent arising lives in the default framework", "search", <FrameScene />],
    ["I recognise its many faces", "jade", <FacesScene />],
    ["every mistake on this path has the same shape", "deep", <BackScene />],
    ["Do I depart from the great masters", "dusk", <MastersScene />],
    ["Listen to a sound nearby", "night", <TryScene />],
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
