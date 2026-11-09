// After Anatta · Explorations: Dependent Arising, Part 2 of 6: What It Is
// (EBooks Bonus Articles/dependent-arising-and-designation, "Dependent Arising: If You Think You Understand, You Don't",
// sections 1 to 5; notebooklm-parts/part-2-what-it-is).
// Arc: Part 1 recalled (apple, mountain) -> five mishearings -> what it says: the bell, these conditions met, no power in
// the cause -> the ting as my clarity, and the skew towards mind broken by dependency; not made of any stuff -> the doer
// behind the doing (anatta turned outwards; goer, seer, fire, producer; the wind) -> designation: singling out (only blue)
// -> the chariot and the sevenfold search; it carries you -> the basis designated too, no bottom layer -> the Abhidharma's
// dharma, its own mark and own nature, the floor -> MMK 5: space and its mark set up together -> MMK 15: own nature could
// not arise, change or cease -> fire is still hot, by convention -> the apple's hardness designated too -> not found, yet
// it carries you: four points -> conditions are the appearing (the loaf), not a web (MMK 14.8) -> disclaimer -> Part 3.
// Stance: a producer, a power in the cause, one clarity everything is made of, a doer, a floor of self-marked dharmas, a
// labelling mind and a web are drawn only to be struck. The bell, the chariot, the apple and fire stay drawn and working.
// Cue phrases avoid the respelled names (Nagarjuna, Abhidharma, Candrakirti, Nagasena, Milinda, Yogacara, svalaksana,
// svabhava, Sarvastivada) and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "This is Part", "In Part 1, I asked whether the apple and the mountain", "They are not",
  "Now I set out the view itself, whole",
  // five mishearings
  "easy to agree with, and easy to mishear", "Then they hear one of five things", "First, a web", "Second, a machine",
  "Third, only concepts", "Fourth, a lower truth", "Fifth, the shape of ignorance", "Each takes something true",
  // what it says
  "So what does it say", "A seed of rice gives rice", "A harsh word", "The order is reliable",
  "these conditions, met together, and this appears", "Designated, and working",
  "makes an effect and hands it across", "It is their meeting", "Nothing passes from the strike to the sound",
  "Yet without the strike, there is no ringing", "This is what I call causal efficacy without causal power",
  "no power is ever found sitting in a cause", "Conventionally, we say the strike produces the sound",
  // the ting
  "But when the producing cause falls away", "The resounding ting is consciousness", "It is my very radiance clarity",
  "This reading is fine", "The ting is the hearing", "What I want to stress is what tends to happen next",
  "then fold everything into consciousness", "become contents of one clarity", "That is the ground coming back",
  "Here dependency is the key", "it is not mind from its own side", "Clarity is never absent from what appears",
  "it is one more reification", "So a phenomenon leans neither to mind nor to matter", "It is vivid, empty appearing",
  "When matter is seen through", "Matter traded for mind is still stuff", "A phenomenon is not made of anything",
  "That is what mere convention means to me",
  // the doer
  "did not come to me as a theory", "Anatta is the insight that there is no doer behind seeing", "In seeing, only the seen",
  "The person does not disappear", "makes the same move everywhere", "A goer does not go", "There is no seer behind seeing",
  "no fire standing apart from its fuel", "and no producer behind arising", "Dependent arising is this: no doer behind anything",
  "The wind is blowing", "It is raining", "When the witness is not found", "The tree is more vivid",
  "But anatta does not do everything", "The observer has disappeared, but the world has not",
  "So anatta and dependent arising are not two subjects", "Anatta, met first, takes the doer out of seeing",
  "Dependent arising takes it out of everything else",
  // designation
  "Then designation", "It is the same seeing, turned on the", "Designation does not need words",
  "It needs only singling out", "stands out only against what it is not", "In a world of only blue",
  "So the singling out is not done to an appearance", "It is the appearing", "it is already empty",
  // chariot
  "The clearest case is the oldest", "where his chariot is", "It is not the pole", "not the axle", "not the wheels",
  "not the frame", "Not their sum", "and not something apart from them", "makes the search complete, in seven ways",
  "Nothing is found", "Yet the chariot is not denied", "It carries you to town", "Walking is the chariot",
  // basis
  "And the basis is designated too", "But a wheel is singled out in turn", "They on their wood",
  "No bottom layer is ever reached", "There is nowhere for the search to end",
  // the floor
  "the Buddhist tradition itself once set out to find that bottom layer", "tried to list what is finally there",
  "Tables, people and chariots", "Take them apart, and they are gone", "What the analysis comes down to are the dharmas",
  "A moment of hardness", "Each is defined by its own mark", "Earth by hardness", "Water by cohesion", "Fire by heat",
  "Space by not obstructing", "a dharma is so called because it bears its own mark", "And that mark is its own nature",
  "whether or not anyone designates it", "So the chariot was designated, but its floor was not",
  // chapter 5
  "aims at exactly this definition", "In chapter 5 of his Middle Way verses", "Can space be there before its mark",
  "No space at all is found before the defining characteristic of space", "Space without its mark",
  "Then the mark must apply to something", "But it cannot apply to what has no mark", "nor to what already has one",
  "and there is nowhere else for it to apply", "So mark and marked stand or fall together",
  "The characterised is not found", "Neither comes first", "Which is to say, designated",
  // chapter 15
  "Chapter 15 shows why it had to be so", "is not made, and does not depend on anything else",
  "But the dharmas were said to arise from causes and conditions", "would be something made",
  "A dharma with its own nature could not arise", "A nature becoming otherwise never makes sense",
  "Grant the dharmas their own nature",
  // fire is still hot
  "None of this denies that fire burns", "Fire is still hot", "A doctor still reads a fever", "A builder still tests a beam",
  "What goes is their standing as the final building blocks", "does not put a better definition of a phenomenon in their place",
  "is reification",
  // the apple
  "This is where the apple comes back", "Earth's own mark, found at last", "But hardness is singled out on touch",
  "It stands out only against softness", "It arises with the hand that meets it", "It is not a mark that something carries",
  "For me, a phenomenon is just this", "The dharmas were meant to be the bottom layer", "They are designated too",
  // four points
  "Here is where the expression is hardest", "So what is a chariot that is merely designated",
  "It is not only a name, and it is not only in the mind", "Four points hold it",
  "First, designation and functioning arise together", "You cannot point at a heap of sand",
  "A designation holds only where it works", "Second, the search removes only a chariot standing from its own side",
  "The wheels turn, the load moves, you arrive", "Third, it is not only in the mind",
  "But it quietly sets up a mind that is found", "That mind is singled out too", "No labeller stands behind it",
  "Fourth, the basis has no bottom layer", "carry you, break down and be mended", "In one line",
  // conditions, not a web
  "Two pictures creep back", "The first puts the conditions underneath", "But the conditions are the appearing",
  "The cook, the chemist and the physicist cut the same loaf differently", "None is the loaf from its own side",
  "The second keeps the relations when the things are gone", "But the line is as unfindable as the dot",
  "Coming into contact, having come into contact", "Relation and what it relates are designated together",
  "fine image", "And the order is fully valid", "is only half of it", "What is left is not a web",
  "It is this, appearing",
  // end
  "All views and understanding here are my own", "Next: what it is for",
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
  ember: { a: "rgba(170,80,45,0.46)", b: "rgba(70,50,140,0.4)", c: "rgba(140,100,40,0.32)" },
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
/** A quotation card, with its verse number. */
const Quote: React.FC<{ text: string; src: string; at: number; c?: string; size?: number }> = ({ text, src, at, c = GOLD, size = 40 }) => {
  const { t } = useT();
  return (
    <div style={{ width: 1320, padding: "26px 40px", borderRadius: 20, border: `2px solid ${c}88`, background: "rgba(10,12,30,0.66)", boxShadow: `0 0 34px ${c}33` }}>
      <Reveal text={`“${text}”`} at={at} size={size} color={c} speed={0.018} wrap />
      <div style={{ marginTop: 12, opacity: ramp(t, at + 1, 0.6) }}><Wd c={DIM} s={24}>{src}</Wd></div>
    </div>
  );
};
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
    <svg width={600} height={220} viewBox="0 0 600 220" style={{ overflow: "visible" }} opacity={p}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.35 + i / 3) % 1);
        const y = 40 + i * 70;
        return <path key={i} d={`M${k * 500 - 120} ${y} q60 -30 120 0 t120 0`} fill="none" stroke={ICE} strokeWidth={5}
          opacity={Math.sin(k * Math.PI)} style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} />;
      })}
    </svg>
  );
};
/** A bell, swinging a little after `at`. */
const Bell: React.FC<{ at: number; size?: number }> = ({ at, size = 1 }) => {
  const { t } = useT();
  const sw = t > at ? Math.sin((t - at) * 6) * 10 * Math.exp(-(t - at) * 0.7) : 0;
  return (
    <svg width={220 * size} height={240 * size} viewBox="0 0 220 240" style={{ overflow: "visible", transform: `rotate(${sw}deg)`, transformOrigin: "50% 8%" }}>
      <path d="M110 10 v20" stroke={GOLD} strokeWidth={6} />
      <path d="M110 30 C60 30 50 90 48 150 C46 175 30 185 20 195 H200 C190 185 174 175 172 150 C170 90 160 30 110 30 Z"
        fill="rgba(228,194,122,0.25)" stroke={GOLD} strokeWidth={5} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
      <circle cx={110} cy={212} r={14} fill={GOLD} />
    </svg>
  );
};
/** An apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 160 }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" style={{ overflow: "visible" }}>
    <path d="M80 45 C55 25 15 35 18 85 C21 130 55 150 80 138 C105 150 139 130 142 85 C145 35 105 25 80 45 Z"
      fill="rgba(226,89,62,0.45)" stroke={WARM} strokeWidth={5} style={{ filter: `drop-shadow(0 0 10px ${WARM})` }} />
    <path d="M80 45 C80 30 85 18 95 10" stroke={GREEN} strokeWidth={5} fill="none" />
    <path d="M88 26 C100 12 120 14 126 22 C112 32 98 32 88 26 Z" fill="rgba(143,212,154,0.5)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
/** A mountain. */
const Mountain: React.FC = () => (
  <svg width={260} height={170} viewBox="0 0 260 170" style={{ overflow: "visible" }}>
    <path d="M10 160 L100 30 L140 85 L170 55 L250 160 Z" fill="rgba(169,221,242,0.18)" stroke={ICE} strokeWidth={5}
      style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} />
    <path d="M80 60 L100 30 L118 56" fill="none" stroke={CHALK} strokeWidth={4} />
  </svg>
);
/** A chariot. */
const Chariot: React.FC<{ spin?: number }> = ({ spin = 0 }) => (
  <svg width={420} height={220} viewBox="0 0 520 260" style={{ overflow: "visible" }}>
    <path d="M20 120 H200" stroke={WARM} strokeWidth={8} />
    <path d="M200 70 H420 L440 150 H200 Z" fill="rgba(228,194,122,0.22)" stroke={GOLD} strokeWidth={5} />
    <circle cx={330} cy={180} r={66} fill="none" stroke={GOLD} strokeWidth={6} />
    <circle cx={330} cy={180} r={10} fill={GOLD} />
    {[0, 45, 90, 135].map((a) => {
      const r = ((a + spin) * Math.PI) / 180;
      return <line key={a} x1={330 - 60 * Math.cos(r)} y1={180 - 60 * Math.sin(r)} x2={330 + 60 * Math.cos(r)} y2={180 + 60 * Math.sin(r)} stroke={GOLD} strokeWidth={4} />;
    })}
  </svg>
);
/** A flame. */
const Flame: React.FC = () => {
  const { t } = useT();
  const f = 1 + Math.sin(t * 9) * 0.04;
  return (
    <svg width={160} height={220} viewBox="0 0 160 220" style={{ overflow: "visible", transform: `scaleY(${f})`, transformOrigin: "50% 100%" }}>
      <path d="M80 10 C110 60 140 90 135 140 C130 190 100 210 80 210 C60 210 30 190 25 140 C20 95 60 80 80 10 Z"
        fill="rgba(255,122,89,0.45)" stroke={WARM} strokeWidth={5} style={{ filter: `drop-shadow(0 0 16px ${WARM})` }} />
      <path d="M80 90 C95 120 108 140 104 165 C100 190 88 198 80 198 C72 198 58 190 56 165 C54 140 70 125 80 90 Z" fill="rgba(228,194,122,0.7)" />
    </svg>
  );
};
/** A web of dots and lines; `fade` 0..1 removes the lines as well as the dots. */
const Web: React.FC<{ p: number; fadeDots: number; fadeLines: number }> = ({ p, fadeDots, fadeLines }) => {
  const pts: [number, number][] = [[60, 60], [220, 30], [380, 80], [120, 190], [300, 200], [440, 210], [200, 320], [380, 330], [60, 300]];
  const links: [number, number][] = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7], [3, 8], [6, 8]];
  return (
    <svg width={500} height={380} viewBox="0 0 500 380" style={{ overflow: "visible" }} opacity={p}>
      {links.map(([a, b], i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={TEAL} strokeWidth={3}
        opacity={0.8 * (1 - fadeLines)} style={{ filter: `drop-shadow(0 0 6px ${TEAL})` }} />)}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={12} fill={GOLD} opacity={1 - fadeDots} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />)}
    </svg>
  );
};
/** A loaf cut three ways. */
const Loaf: React.FC<{ cuts: number }> = ({ cuts }) => (
  <svg width={420} height={200} viewBox="0 0 420 200" style={{ overflow: "visible" }}>
    <path d="M20 170 C10 80 70 30 210 30 C350 30 410 80 400 170 Z" fill="rgba(217,135,108,0.35)" stroke={GOLD} strokeWidth={5}
      style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
    {cuts > 0.01 && [110, 210, 310].map((x, i) => <line key={i} x1={x} y1={30 + (i === 1 ? 0 : 10)} x2={x} y2={30 + 140 * Math.min(1, cuts * 3 - i)} stroke={[TEAL, VIOLET, ICE][i]} strokeWidth={4} opacity={cuts * 3 - i > 0 ? 1 : 0} />)}
  </svg>
);
/** A box on the board. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "22px 22px", borderRadius: 20, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)", boxShadow: `0 0 34px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={34} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
  </div>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const p1 = c("In Part 1, I asked whether the apple and the mountain");
  const out1 = 1 - ramp(t, p1, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={330} o={ramp(t, 0.3, 0.6) * out1}><Wd c={DIM} s={36} serif>Part 2 of 6</Wd></At>
      <At x={960} y={440} o={ramp(t, 0.8, 0.8) * out1}><Wd c={CHALK} s={84} serif>What It Is</Wd></At>
      <At x={960} y={560} o={ramp(t, 1.4, 0.8) * out1}><Wd c={GOLD} s={30}>Dependent Arising: If You Think You Understand, You Don't</Wd></At>
      <Items items={[
        ["In Part 1, I asked whether the apple and the mountain", 620, 360, <Apple size={170} />, { d: 0.6 }],
        ["In Part 1, I asked whether the apple and the mountain", 1300, 360, <Mountain />, { d: 1.6 }],
        ["In Part 1, I asked whether the apple and the mountain", 960, 560, <Wd c={CHALK} s={34}>as straightforward as they look?</Wd>, { d: 2.4 }],
        ["They are not", 960, 640, <Wd c={ROSE} s={32}>they are not</Wd>],
        ["Now I set out the view itself, whole", 960, 760, <Wd c={GOLD} s={40} serif>now: the view itself, whole</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MishearScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const wrong = c("Each takes something true");
  const rows: [string, string, string][] = [
    ["First, a web", "a web: the connections as the floor", TEAL],
    ["Second, a machine", "a machine: causes pushing in the dark", WARM],
    ["Third, only concepts", "“only concepts”: just a story", VIOLET],
    ["Fourth, a lower truth", "a lower truth: to be left behind", ICE],
    ["Fifth, the shape of ignorance", "the shape of ignorance", ROSE],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["easy to agree with, and easy to mishear", 960, 110, <Wd c={CHALK} s={38} serif>easy to agree with, easy to mishear</Wd>],
        ["Then they hear one of five things", 960, 190, <Wd c={GOLD} s={32}>five mishearings</Wd>],
      ]} />
      {rows.map(([cue, label, col], i) => (
        <At key={cue} x={960} y={290 + i * 95} o={ramp(t, c(cue), 0.5)}>
          <div style={{ position: "relative" }}><Chip color={col} size={30}>{label}</Chip><Strike at={wrong + 0.8 + i * 0.25} color={WARM} /></div>
        </At>
      ))}
      <Items items={[["Each takes something true", 960, 790, <Wd c={GOLD} s={32}>each takes something true, and sets it on the wrong foot</Wd>]]} />
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const met = c("these conditions, met together, and this appears");
  const hand = c("makes an effect and hands it across");
  const meet = c("It is their meeting");
  const eff = c("This is what I call causal efficacy without causal power");
  const top = 1 - ramp(t, met, 0.5);
  const mid = between2(t, hand, eff);
  const conds: [string, number, number][] = [["bronze", 520, 330], ["strike", 520, 460], ["air", 1400, 330], ["ear", 1400, 460]];
  return (
    <AbsoluteFill>
      <Items items={[["So what does it say", 960, 100, <Wd c={GOLD} s={40} serif>what it says</Wd>]]} />
      <At x={420} y={380} o={ramp(t, c("So what does it say") + 0.8, 0.5) * top}><Bell at={c("So what does it say") + 1.2} /></At>
      <Items items={[
        ["A seed of rice gives rice", 960, 330, <K c={GREEN} s={30}>a seed of rice gives rice</K>, { until: "these conditions, met together, and this appears" }],
        ["A harsh word", 1450, 330, <K c={ROSE} s={30}>a harsh word, a mood: anger</K>, { until: "these conditions, met together, and this appears" }],
        ["The order is reliable", 1100, 480, <Wd c={CHALK} s={32}>the order is reliable; actions have results</Wd>, { until: "these conditions, met together, and this appears" }],
      ]} />
      {/* conditions meet */}
      {conds.map(([n, x, y], i) => (
        <React.Fragment key={n}>
          <At x={x} y={y} o={ramp(t, met + 0.3 * i, 0.5) * (1 - ramp(t, hand, 0.5)) + mid * 0 + ramp(t, meet, 0.5) * (1 - ramp(t, eff, 0.5))}><K c={GOLD} s={28}>{n}</K></At>
        </React.Fragment>
      ))}
      <At x={960} y={395} o={ramp(t, met + 1.2, 0.5) * (1 - ramp(t, hand, 0.5)) + ramp(t, meet, 0.5) * (1 - ramp(t, eff, 0.5))}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Waves p={1} color={TEAL} /></div>
      </At>
      <Items items={[
        ["these conditions, met together, and this appears", 960, 620, <Wd c={TEAL} s={34}>these conditions, met together: this appears</Wd>, { until: "makes an effect and hands it across" }],
        ["Designated, and working", 960, 700, <Wd c={GOLD} s={30}>designated, and working</Wd>, { until: "makes an effect and hands it across" }],
      ]} />
      {/* the picture it never says */}
      <At x={620} y={420} o={ramp(t, hand, 0.5) * (1 - ramp(t, meet, 0.4))}><SK c={DIM} s={30} strikeAt={hand + 2.2}>a cause, standing alone</SK></At>
      <At x={960} y={420} o={ramp(t, hand + 0.4, 0.5) * (1 - ramp(t, meet, 0.4))}><Wd c={WARM} s={44}>{"→"}</Wd></At>
      <At x={1300} y={420} o={ramp(t, hand + 0.8, 0.5) * (1 - ramp(t, meet, 0.4))}><K c={DIM} s={30}>an effect, handed across</K></At>
      <Items items={[
        ["It is their meeting", 960, 620, <Wd c={TEAL} s={34}>the ringing is their meeting</Wd>, { until: "This is what I call causal efficacy without causal power" }],
        ["Nothing passes from the strike to the sound", 960, 700, <Wd c={CHALK} s={28}>nothing passes across; nothing stands behind it</Wd>, { until: "This is what I call causal efficacy without causal power" }],
        ["Yet without the strike, there is no ringing", 960, 770, <Wd c={GOLD} s={28}>yet without the strike, no ringing</Wd>, { until: "This is what I call causal efficacy without causal power" }],
        ["This is what I call causal efficacy without causal power", 960, 330, <Wd c={GOLD} s={56} serif>causal efficacy</Wd>],
        ["This is what I call causal efficacy without causal power", 960, 420, <Wd c={CHALK} s={40} serif>without causal power</Wd>, { d: 1 }],
        ["no power is ever found sitting in a cause", 960, 540, <SK c={DIM} s={30} strikeAt={c("no power is ever found sitting in a cause") + 1.2}>a power sitting in the cause</SK>],
        ["Conventionally, we say the strike produces the sound", 960, 680, <K c={TEAL} s={28}>"the strike produces the sound": fine, by convention</K>],
      ]} />
    </AbsoluteFill>
  );
};
function between2(t: number, a: number, b: number) { return Math.min(ramp(t, a, 0.5), 1 - ramp(t, b, 0.5)); }

const TingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stress = c("What I want to stress is what tends to happen next");
  const key = c("Here dependency is the key");
  const lean = c("So a phenomenon leans neither to mind nor to matter");
  const stuff = c("When matter is seen through");
  const a1 = 1 - ramp(t, stress, 0.5);
  const a2 = between2(t, stress, lean);
  const a3 = between2(t, lean, stuff);
  return (
    <AbsoluteFill>
      <Items items={[["But when the producing cause falls away", 960, 100, <Wd c={CHALK} s={38} serif>what is left over</Wd>]]} />
      {/* the ting as my clarity */}
      <At x={760} y={380} o={ramp(t, c("But when the producing cause falls away") + 0.5, 0.5) * a1}><Bell at={c("But when the producing cause falls away") + 0.6} /></At>
      <At x={1080} y={360} o={ramp(t, c("The resounding ting is consciousness"), 0.5) * a1}><Waves p={1} color={GOLD} /></At>
      <Items items={[
        ["The resounding ting is consciousness", 1320, 300, <Wd c={GOLD} s={44} serif>ting</Wd>, { until: "What I want to stress is what tends to happen next" }],
        ["It is my very radiance clarity", 960, 620, <Wd c={CHALK} s={34}>"the ting is my radiance clarity"</Wd>, { until: "What I want to stress is what tends to happen next" }],
        ["This reading is fine", 960, 700, <K c={TEAL} s={28}>fine: a true non-dual insight</K>, { until: "What I want to stress is what tends to happen next" }],
        ["The ting is the hearing", 960, 780, <Wd c={TEAL} s={30}>no hearer apart: the ting is the hearing</Wd>, { until: "What I want to stress is what tends to happen next" }],
      ]} />
      {/* the skew towards mind */}
      <At x={960} y={400} o={a2 * ramp(t, c("then fold everything into consciousness"), 0.6)}>
        <div style={{ position: "relative", width: 760, height: 300, borderRadius: 160, background: "radial-gradient(rgba(155,123,255,0.45), rgba(155,123,255,0.06))", border: `2px dashed ${VIOLET}` }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 26, opacity: ramp(t, c("become contents of one clarity"), 0.5) }}>
            <SK c={VIOLET} s={28} strikeAt={key + 0.6}>one clarity, everything made of it</SK>
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, top: 150, display: "flex", justifyContent: "center", gap: 30, opacity: ramp(t, c("become contents of one clarity") + 0.4, 0.5) }}>
            <K c={GOLD} s={26}>bell</K><K c={ICE} s={26}>air</K><K c={ROSE} s={26}>ear</K>
          </div>
        </div>
      </At>
      <Items items={[
        ["What I want to stress is what tends to happen next", 960, 180, <Wd c={ROSE} s={30}>then, almost always: mind left standing</Wd>, { until: "So a phenomenon leans neither to mind nor to matter" }],
        ["That is the ground coming back", 960, 630, <Wd c={WARM} s={32}>the ground coming back, as mind</Wd>, { until: "Here dependency is the key" }],
        ["Here dependency is the key", 960, 630, <Wd c={GOLD} s={34}>dependency breaks the skew</Wd>, { until: "So a phenomenon leans neither to mind nor to matter" }],
        ["it is not mind from its own side", 960, 700, <Wd c={CHALK} s={28}>the ting: not mind from its own side, not bronze either</Wd>, { until: "So a phenomenon leans neither to mind nor to matter" }],
        ["Clarity is never absent from what appears", 960, 770, <Wd c={TEAL} s={28}>clarity never absent; lifted out, one more reification</Wd>, { until: "So a phenomenon leans neither to mind nor to matter" }],
      ]} />
      {/* neither mind nor matter */}
      <At x={620} y={330} o={a3}><SK c={VIOLET} s={32} strikeAt={lean + 2}>mind</SK></At>
      <At x={1300} y={330} o={a3}><SK c={ICE} s={32} strikeAt={lean + 2.4}>matter</SK></At>
      <At x={960} y={470} o={a3 * ramp(t, c("It is vivid, empty appearing"), 0.6)}><Reveal text="vivid, empty appearing" at={c("It is vivid, empty appearing")} size={60} color={GOLD} /></At>
      {/* not made of any stuff */}
      <Items items={[
        ["When matter is seen through", 960, 260, <Wd c={CHALK} s={34} serif>not made of any stuff</Wd>],
        ["Matter traded for mind is still stuff", 960, 380, <div style={{ display: "flex", gap: 40, alignItems: "center" }}><SK c={ICE} s={28} strikeAt={c("A phenomenon is not made of anything")}>matter stuff</SK><Wd c={DIM} s={36}>{"→"}</Wd><SK c={VIOLET} s={28} strikeAt={c("A phenomenon is not made of anything") + 0.3}>mind stuff</SK></div>],
        ["A phenomenon is not made of anything", 960, 500, <Wd c={GOLD} s={34}>made of nothing at all</Wd>],
        ["That is what mere convention means to me", 960, 620, <K c={TEAL} s={30}>mere convention: appearing that works, no stuff underneath</K>],
      ]} />
    </AbsoluteFill>
  );
};

const DoerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const found = c("Dependent arising is this: no doer behind anything");
  const wind = c("The wind is blowing");
  const two = c("So anatta and dependent arising are not two subjects");
  const pairs: [string, string, string, number][] = [
    ["Anatta is the insight that there is no doer behind seeing", "a seer", "seeing", 230],
    ["A goer does not go", "a goer", "going", 320],
    ["no fire standing apart from its fuel", "fire apart from fuel", "burning", 410],
    ["and no producer behind arising", "a producer", "arising", 500],
  ];
  const outA = 1 - ramp(t, wind, 0.5);
  const outB = 1 - ramp(t, two, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["did not come to me as a theory", 960, 110, <Wd c={GOLD} s={38} serif>the same seeing as anatta, turned outwards</Wd>]]} />
      {pairs.map(([cue, behind, act, y]) => (
        <React.Fragment key={cue}>
          <At x={720} y={y} o={ramp(t, c(cue), 0.5) * outA}><SK c={DIM} s={28} strikeAt={c(cue) + 1.4}>{behind}</SK></At>
          <At x={1200} y={y} o={ramp(t, c(cue) + 0.3, 0.5) * outA}><K c={TEAL} s={28}>{act}</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["In seeing, only the seen", 960, 620, <Wd c={CHALK} s={30}>in seeing, only the seen; the person does not disappear</Wd>, { until: "makes the same move everywhere" }],
        ["makes the same move everywhere", 960, 620, <Wd c={CHALK} s={30}>the same move, everywhere</Wd>, { until: "Dependent arising is this: no doer behind anything" }],
        ["Dependent arising is this: no doer behind anything", 960, 620, <Wd c={GOLD} s={38} serif>no doer behind anything</Wd>, { until: "The wind is blowing" }],
      ]} />
      <At x={960} y={300} o={ramp(t, wind, 0.6) * outB}><Wind p={ramp(t, wind, 0.8)} /></At>
      <Items items={[
        ["The wind is blowing", 960, 470, <Wd c={ICE} s={32}>no wind apart from the blowing</Wd>, { until: "So anatta and dependent arising are not two subjects" }],
        ["It is raining", 960, 540, <Wd c={CHALK} s={30}>no "it" that rains</Wd>, { until: "So anatta and dependent arising are not two subjects" }],
        ["When the witness is not found", 960, 640, <Wd c={TEAL} s={30}>not blank: the tree more vivid, not less</Wd>, { until: "But anatta does not do everything" }],
        ["But anatta does not do everything", 960, 640, <Wd c={ROSE} s={30}>the observer has gone; the world can still be held as solid</Wd>, { until: "So anatta and dependent arising are not two subjects" }],
        ["So anatta and dependent arising are not two subjects", 960, 230, <Wd c={CHALK} s={36} serif>not two subjects</Wd>],
        ["Anatta, met first, takes the doer out of seeing", 640, 430, <Box c={GOLD} w={520} title="anatta" sub="the doer out of seeing" />],
        ["Dependent arising takes it out of everything else", 1280, 430, <Box c={TEAL} w={560} title="dependent arising" sub="out of the cause, the object, the whole, the field" />],
      ]} />
    </AbsoluteFill>
  );
};

const SingleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pick = c("It needs only singling out");
  const blue = c("In a world of only blue");
  const back = c("So the singling out is not done to an appearance");
  const a1 = 1 - ramp(t, blue, 0.5);
  const a2 = between2(t, blue, back);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Then designation", 960, 100, <Wd c={GOLD} s={40} serif>designation</Wd>],
        ["It is the same seeing, turned on the", 960, 180, <Wd c={CHALK} s={30}>the same seeing, turned on the "this"</Wd>],
      ]} />
      <At x={960} y={400} o={ramp(t, c("Designation does not need words"), 0.5) * a1}>
        <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
          <div style={{ position: "relative" }}><Patch color="#3E7BD8" size={120} /><Pick at={pick + 0.4} w={180} h={180} /></div>
          <Waves p={1} color={TEAL} />
          <Patch color="#5FC48A" size={120} />
        </div>
      </At>
      <Items items={[
        ["It needs only singling out", 960, 600, <Wd c={GOLD} s={34}>no words needed: only singling out, "this"</Wd>, { until: "In a world of only blue" }],
        ["stands out only against what it is not", 960, 680, <Wd c={CHALK} s={28}>only against what it is not, only with these conditions</Wd>, { until: "In a world of only blue" }],
      ]} />
      <At x={960} y={420} o={a2}>
        <div style={{ width: 900, height: 340, borderRadius: 24, background: "rgba(62,123,216,0.75)", boxShadow: "0 0 60px #3E7BD8", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Wd c={CHALK} s={38} serif>only blue: no one would see blue</Wd>
        </div>
      </At>
      <Items items={[
        ["So the singling out is not done to an appearance", 960, 380, <SK c={DIM} s={28} strikeAt={c("It is the appearing")}>an appearance first, waiting to be named</SK>],
        ["It is the appearing", 960, 500, <Wd c={TEAL} s={40} serif>the singling out is the appearing</Wd>],
        ["it is already empty", 960, 620, <Wd c={GOLD} s={34}>already dependence, so already empty</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const seven = c("makes the search complete, in seven ways");
  const nf = c("Nothing is found");
  const carry = c("It carries you to town");
  const parts: [string, string][] = [["It is not the pole", "pole"], ["not the axle", "axle"], ["not the wheels", "wheels"], ["not the frame", "frame"], ["Not their sum", "their sum"], ["and not something apart from them", "apart from them"]];
  const sev = ["the same as its parts", "other than them", "possessing them", "in them", "containing them", "their collection", "their shape"];
  const a1 = 1 - ramp(t, seven, 0.5);
  const a2 = between2(t, seven, carry);
  const drive = Math.max(0, t - carry);
  return (
    <AbsoluteFill>
      <Items items={[["The clearest case is the oldest", 960, 100, <Wd c={GOLD} s={40} serif>the chariot</Wd>]]} />
      <At x={960 + Math.min(drive * 60, 300)} y={320} o={ramp(t, c("where his chariot is") - 0.6, 0.6) * (1 - ramp(t, seven, 0.5)) + ramp(t, carry, 0.6)}><Chariot spin={drive * 120} /></At>
      {parts.map(([cue, n], i) => (
        <At key={cue} x={360 + i * 240} y={560} o={ramp(t, c(cue), 0.4) * a1}><SK c={DIM} s={26} strikeAt={c(cue) + 0.6}>{n}</SK></At>
      ))}
      <Items items={[["where his chariot is", 960, 680, <Wd c={CHALK} s={30}>where is the chariot?</Wd>, { until: "makes the search complete, in seven ways" }]]} />
      <At x={960} y={200} o={a2}><Wd c={CHALK} s={32}>the sevenfold search: the chariot is not</Wd></At>
      {sev.map((n, i) => (
        <At key={n} x={i < 4 ? 420 + i * 360 : 600 + (i - 4) * 360} y={i < 4 ? 340 : 460} o={ramp(t, seven + 1 + i * 0.7, 0.4) * a2}>
          <SK c={DIM} s={26} strikeAt={seven + 1.5 + i * 0.7}>{n}</SK>
        </At>
      ))}
      <At x={960} y={600} o={ramp(t, nf, 0.5) * a2}><Wd c={ROSE} s={36} serif>nothing is found</Wd></At>
      <Items items={[
        ["Yet the chariot is not denied", 960, 520, <Wd c={TEAL} s={36} serif>not denied</Wd>, { d: 0.4 }],
        ["It carries you to town", 960, 600, <Wd c={GOLD} s={40} serif>it carries you to town</Wd>],
        ["Walking is the chariot", 960, 700, <K c={TEAL} s={28}>walking is the chariot · hearing is the chariot</K>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const levels: [string, string, number][] = [
    ["And the basis is designated too", "chariot", 0],
    ["And the basis is designated too", "wheels", 1.2],
    ["But a wheel is singled out in turn", "rim · spokes · hub", 0.6],
    ["They on their wood", "wood", 0],
    ["They on their wood", "grain", 1.2],
  ];
  const floor = c("No bottom layer is ever reached");
  return (
    <AbsoluteFill>
      <Items items={[["And the basis is designated too", 960, 100, <Wd c={GOLD} s={40} serif>the basis is designated too</Wd>]]} />
      {levels.map(([cue, n, d], i) => (
        <React.Fragment key={n}>
          <At x={760} y={200 + i * 105} o={ramp(t, c(cue) + d, 0.5)}><K c={[GOLD, GOLD, TEAL, ICE, VIOLET][i]} s={28}>{n}</K></At>
          {i > 0 && <At x={760} y={148 + i * 105} o={ramp(t, c(cue) + d, 0.5)}><Wd c={DIM} s={24}>{"↓ designated on"}</Wd></At>}
        </React.Fragment>
      ))}
      <At x={760} y={735} o={ramp(t, floor, 0.5)}><Wd c={DIM} s={40}>{"↓  …"}</Wd></At>
      <At x={1380} y={520} o={ramp(t, floor, 0.5)}><SK c={DIM} s={28} strikeAt={floor + 1.4}>a floor that stands by itself</SK></At>
      <Items items={[
        ["No bottom layer is ever reached", 1380, 400, <Wd c={GOLD} s={36} serif>no bottom layer</Wd>],
        ["There is nowhere for the search to end", 1380, 640, <Wd c={CHALK} s={28}>nowhere for the search to end</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FloorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const units = c("What the analysis comes down to are the dharmas");
  const marks = c("Each is defined by its own mark");
  const bears = c("a dharma is so called because it bears its own mark");
  const fin = c("So the chariot was designated, but its floor was not");
  const a1 = 1 - ramp(t, marks, 0.5);
  const a2 = between2(t, marks, fin);
  const rows: [string, string, string, string][] = [
    ["Earth by hardness", "earth", "hardness", GOLD],
    ["Water by cohesion", "water", "cohesion", ICE],
    ["Fire by heat", "fire", "heat", WARM],
    ["Space by not obstructing", "space", "not obstructing", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["the Buddhist tradition itself once set out to find that bottom layer", 960, 100, <Wd c={GOLD} s={38} serif>the Abhidharma: looking for the floor</Wd>],
        ["tried to list what is finally there", 960, 175, <Wd c={DIM} s={26}>above all the Sarvāstivāda: a list of what is finally there</Wd>, { until: "Each is defined by its own mark" }],
      ]} />
      <At x={960} y={300} o={ramp(t, c("Tables, people and chariots"), 0.5) * a1}>
        <div style={{ display: "flex", gap: 30 }}><K c={DIM} s={28}>tables</K><K c={DIM} s={28}>people</K><K c={DIM} s={28}>chariots</K></div>
      </At>
      <Items items={[
        ["Tables, people and chariots", 960, 380, <Wd c={CHALK} s={28}>"only designated": take them apart, gone</Wd>, { d: 1, until: "Each is defined by its own mark" }],
        ["What the analysis comes down to are the dharmas", 960, 480, <Wd c={GOLD} s={34} serif>the dharmas: last units of experience</Wd>, { until: "Each is defined by its own mark" }],
      ]} />
      <At x={960} y={600} o={ramp(t, c("A moment of hardness"), 0.5) * a1}>
        <div style={{ display: "flex", gap: 24 }}>{["hardness", "heat", "sound", "feeling"].map((n, i) => <K key={n} c={[GOLD, WARM, TEAL, ROSE][i]} s={28}>{n}</K>)}</div>
      </At>
      <At x={960} y={180} o={a2}><Wd c={CHALK} s={32}>each defined by its own mark (svalakṣaṇa)</Wd></At>
      {rows.map(([cue, el, mk, col], i) => (
        <React.Fragment key={el}>
          <At x={760} y={290 + i * 85} o={ramp(t, c(cue), 0.4) * a2}><K c={col} s={28}>{el}</K></At>
          <At x={1160} y={290 + i * 85} o={ramp(t, c(cue) + 0.3, 0.4) * a2}><Wd c={CHALK} s={28}>{mk}</Wd></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["a dharma is so called because it bears its own mark", 960, 640, <Wd c={GOLD} s={30}>a dharma: "what bears its own mark"</Wd>, { until: "So the chariot was designated, but its floor was not" }],
        ["And that mark is its own nature", 960, 720, <K c={GOLD} s={28}>own mark = own nature (svabhāva), from its own side</K>, { until: "So the chariot was designated, but its floor was not" }],
        ["whether or not anyone designates it", 960, 790, <Wd c={DIM} s={26}>whether or not anyone designates it</Wd>, { until: "So the chariot was designated, but its floor was not" }],
      ]} />
      {/* the picture: designated chariot on a floor of self-marked units */}
      <At x={960} y={320} o={ramp(t, fin, 0.6)}><div style={{ opacity: 0.55 }}><Chariot /></div></At>
      <At x={960} y={450} o={ramp(t, fin + 0.3, 0.5)}><Wd c={DIM} s={28}>designated</Wd></At>
      <At x={960} y={560} o={ramp(t, fin + 0.8, 0.6)}>
        <div style={{ display: "flex", gap: 0, border: `3px solid ${GOLD}`, borderRadius: 8, boxShadow: `0 0 30px ${GOLD}66` }}>
          {["hardness", "cohesion", "heat", "motion", "sound", "feeling"].map((n) => <div key={n} style={{ padding: "16px 26px", borderRight: `2px solid ${GOLD}66`, background: "rgba(228,194,122,0.18)" }}><Wd c={CHALK} s={24}>{n}</Wd></div>)}
        </div>
      </At>
      <At x={960} y={670} o={ramp(t, fin + 1.4, 0.5)}><Wd c={GOLD} s={30}>the floor: not designated, said to be there by itself</Wd></At>
    </AbsoluteFill>
  );
};

const FiveScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = c("No space at all is found before the defining characteristic of space");
  const apply = c("Then the mark must apply to something");
  const together = c("So mark and marked stand or fall together");
  const a1 = 1 - ramp(t, apply, 0.5);
  const a2 = between2(t, apply, together);
  return (
    <AbsoluteFill>
      <Items items={[
        ["aims at exactly this definition", 960, 100, <Wd c={GOLD} s={38} serif>Nāgārjuna aims at exactly this</Wd>],
        ["In chapter 5 of his Middle Way verses", 960, 170, <Wd c={DIM} s={28}>MMK 5: space, the hardest case</Wd>],
      ]} />
      <At x={960} y={320} o={ramp(t, c("Can space be there before its mark"), 0.5) * a1}>
        <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
          <K c={VIOLET} s={32}>space</K><Wd c={DIM} s={36}>before</Wd><K c={GOLD} s={32}>its mark: not obstructing</K><Wd c={ROSE} s={40}>?</Wd>
        </div>
      </At>
      <At x={960} y={500} o={ramp(t, q, 0.5) * a1}><Quote text="No space at all is found before the defining characteristic of space." src="MMK 5.1" at={q} /></At>
      <Items items={[["Space without its mark", 960, 680, <Wd c={CHALK} s={28}>space with no mark: no such thing is found (5.2)</Wd>, { until: "Then the mark must apply to something" }]]} />
      <At x={960} y={250} o={a2}><Wd c={CHALK} s={32}>the mark must apply to something (5.3)</Wd></At>
      <Items items={[
        ["But it cannot apply to what has no mark", 520, 400, <SK c={DIM} s={26} strikeAt={c("But it cannot apply to what has no mark") + 1.2}>to what has no mark</SK>, { until: "So mark and marked stand or fall together" }],
        ["nor to what already has one", 960, 400, <SK c={DIM} s={26} strikeAt={c("nor to what already has one") + 1}>to what already has one</SK>, { until: "So mark and marked stand or fall together" }],
        ["and there is nowhere else for it to apply", 1400, 400, <SK c={DIM} s={26} strikeAt={c("and there is nowhere else for it to apply") + 1.2}>anywhere else</SK>, { until: "So mark and marked stand or fall together" }],
      ]} />
      <At x={960} y={260} o={ramp(t, together, 0.5)}>
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}><K c={GOLD} s={34}>mark</K><Wd c={TEAL} s={44}>{"⇄"}</Wd><K c={VIOLET} s={34}>marked</K></div>
      </At>
      <At x={960} y={450} o={ramp(t, c("The characterised is not found"), 0.5)}><Quote text="The characterised is not found, and the characteristic is not found." src="MMK 5.5" at={c("The characterised is not found")} size={36} /></At>
      <Items items={[
        ["Neither comes first", 960, 640, <Wd c={CHALK} s={30}>neither first: each set up only with the other</Wd>],
        ["Which is to say, designated", 960, 730, <Wd c={GOLD} s={40} serif>designated</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FifteenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q2 = c("is not made, and does not depend on anything else");
  const q1 = c("But the dharmas were said to arise from causes and conditions");
  const cannot = c("A dharma with its own nature could not arise");
  const a1 = 1 - ramp(t, cannot, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["Chapter 15 shows why it had to be so", 960, 100, <Wd c={GOLD} s={38} serif>MMK 15: own nature</Wd>]]} />
      <At x={960} y={270} o={ramp(t, q2 - 0.3, 0.5) * a1}><Quote text="Own nature is not made, and does not depend on anything else." src="MMK 15.2" at={q2 - 0.3} size={36} /></At>
      <At x={960} y={490} o={ramp(t, q1, 0.5) * a1}><Wd c={CHALK} s={30}>but the dharmas arise from causes and conditions</Wd></At>
      <At x={960} y={640} o={ramp(t, c("would be something made") - 1.5, 0.5) * a1}><Quote text="Own nature that came about from causes and conditions would be something made." src="MMK 15.1" at={c("would be something made") - 1.5} size={34} c={ROSE} /></At>
      <At x={960} y={260} o={ramp(t, cannot, 0.5)}>
        <div style={{ display: "flex", gap: 40 }}>
          {["could not arise", "could not change", "could not cease"].map((n, i) => <K key={n} c={ROSE} s={30}>{n}</K>)}
        </div>
      </At>
      <At x={960} y={180} o={ramp(t, cannot, 0.5)}><Wd c={CHALK} s={30}>a dharma with its own nature</Wd></At>
      <At x={960} y={430} o={ramp(t, c("A nature becoming otherwise never makes sense"), 0.5)}><Quote text="A nature becoming otherwise never makes sense." src="MMK 15.8" at={c("A nature becoming otherwise never makes sense")} size={38} /></At>
      <Items items={[["Grant the dharmas their own nature", 960, 640, <Wd c={WARM} s={32}>grant them own nature, and dependent arising stops working</Wd>]]} />
    </AbsoluteFill>
  );
};

const FireScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const blocks = c("What goes is their standing as the final building blocks");
  const tab = c("does not put a better definition of a phenomenon in their place");
  const a1 = 1 - ramp(t, tab, 0.5);
  const rows: [string, string, string][] = [
    ["the dharmas", "final building blocks", "empty of own nature"],
    ["their marks", "carried from their own side", "conventions, set up in dependence"],
    ["dependent arising", "real units acting on each other", "the reason nothing has own nature"],
  ];
  return (
    <AbsoluteFill>
      <At x={560} y={380} o={ramp(t, c("None of this denies that fire burns"), 0.5) * a1}><Flame /></At>
      <Items items={[
        ["Fire is still hot", 1180, 260, <Wd c={WARM} s={52} serif>fire is still hot</Wd>, { until: "does not put a better definition of a phenomenon in their place" }],
        ["Fire is still hot", 1180, 340, <Wd c={CHALK} s={28}>the marks keep working, by convention</Wd>, { d: 1, until: "does not put a better definition of a phenomenon in their place" }],
        ["A doctor still reads a fever", 1180, 430, <K c={TEAL} s={28}>a doctor reads a fever</K>, { until: "does not put a better definition of a phenomenon in their place" }],
        ["A builder still tests a beam", 1180, 520, <K c={GOLD} s={28}>a builder tests a beam</K>, { until: "does not put a better definition of a phenomenon in their place" }],
        ["What goes is their standing as the final building blocks", 1180, 640, <SK c={DIM} s={28} strikeAt={blocks + 1.8}>the final building blocks</SK>, { until: "does not put a better definition of a phenomenon in their place" }],
      ]} />
      <At x={960} y={110} o={ramp(t, tab, 0.5)}><Wd c={CHALK} s={32} serif>no better definition put in their place</Wd></At>
      <At x={960} y={200} o={ramp(t, tab + 0.6, 0.5)}>
        <div style={{ display: "grid", gridTemplateColumns: "300px 520px 560px", gap: 14, alignItems: "center" }}>
          <div /><Wd c={DIM} s={28}>the Abhidharma</Wd><Wd c={GOLD} s={28}>Nāgārjuna</Wd>
        </div>
      </At>
      {rows.map(([a, b, d], i) => (
        <At key={a} x={960} y={300 + i * 110} o={ramp(t, tab + 1.2 + i * 0.8, 0.5)}>
          <div style={{ display: "grid", gridTemplateColumns: "300px 520px 560px", gap: 14, alignItems: "center" }}>
            <K c={CHALK} s={24}>{a}</K><Wd c={DIM} s={26}>{b}</Wd><Wd c={TEAL} s={26}>{d}</Wd>
          </div>
        </At>
      ))}
      <Items items={[["is reification", 960, 680, <Wd c={WARM} s={30}>self-contained, uniquely marked units: reification</Wd>]]} />
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nc = c("It is not a mark that something carries");
  const me = c("For me, a phenomenon is just this");
  const conds: [string, string, number, number][] = [
    ["But hardness is singled out on touch", "touch · skin · pressure", 1380, 260],
    ["It stands out only against softness", "against softness", 1380, 360],
    ["It arises with the hand that meets it", "the hand, the knowing", 1380, 460],
  ];
  const a1 = 1 - ramp(t, me, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["This is where the apple comes back", 960, 100, <Wd c={GOLD} s={40} serif>the apple comes back</Wd>]]} />
      <At x={560} y={340} o={ramp(t, c("This is where the apple comes back") + 0.5, 0.6) * a1}><Apple size={200} /></At>
      <At x={560} y={520} o={ramp(t, c("Earth's own mark, found at last") - 1.5, 0.5) * a1}><SK c={GOLD} s={28} strikeAt={nc + 0.6}>hardness: earth's own mark</SK></At>
      {conds.map(([cue, n, x, y]) => <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5) * a1}><K c={TEAL} s={28}>{n}</K></At>)}
      {conds.map(([cue, , x, y], i) => <Flow key={i} x1={x - 190} y1={y} x2={720} y2={500} color={TEAL} p={ramp(t, c(cue) + 0.3, 0.8) * a1} />)}
      <Items items={[["It is not a mark that something carries", 960, 680, <Wd c={CHALK} s={30}>not a mark carried from its own side</Wd>, { until: "For me, a phenomenon is just this" }]]} />
      <At x={960} y={330} o={ramp(t, me, 0.5)}><Reveal text="vividly appearing, singled out in dependence" at={me + 0.4} size={46} color={GOLD} speed={0.03} /></At>
      <At x={960} y={430} o={ramp(t, me + 2.5, 0.5)}><Wd c={CHALK} s={30}>mark and marked designated together; nothing found that holds it there</Wd></At>
      <Items items={[
        ["The dharmas were meant to be the bottom layer", 960, 560, <SK c={DIM} s={28} strikeAt={c("They are designated too")}>the dharmas as the bottom layer</SK>],
        ["They are designated too", 960, 660, <Wd c={TEAL} s={34} serif>they are designated too</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FourScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pts = c("Four points hold it");
  const one = c("In one line");
  const a1 = 1 - ramp(t, pts, 0.5);
  const a2 = between2(t, pts, one);
  const boxes: [string, string, string, number, number][] = [
    ["First, designation and functioning arise together", "1  designation and functioning together", "the name is not free: a heap of sand will not carry you", 520, 290],
    ["Second, the search removes only a chariot standing from its own side", "2  the search removes only a chariot by itself", "the wheels turn, the load moves, you arrive", 1400, 290],
    ["Third, it is not only in the mind", "3  not only in the mind", "the labelling mind is singled out too", 520, 560],
    ["Fourth, the basis has no bottom layer", "4  no bottom layer needed", "built, carried, broken, mended", 1400, 560],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Here is where the expression is hardest", 960, 110, <Wd c={GOLD} s={40} serif>not found, yet it carries you</Wd>, { until: "In one line" }],
        ["So what is a chariot that is merely designated", 960, 330, <Wd c={CHALK} s={34}>what is a "merely designated" chariot?</Wd>, { until: "Four points hold it" }],
      ]} />
      <At x={720} y={470} o={ramp(t, c("It is not only a name, and it is not only in the mind"), 0.5) * a1}><SK c={DIM} s={28} strikeAt={c("It is not only a name, and it is not only in the mind") + 1}>only a name</SK></At>
      <At x={1200} y={470} o={ramp(t, c("It is not only a name, and it is not only in the mind") + 1.4, 0.5) * a1}><SK c={DIM} s={28} strikeAt={c("It is not only a name, and it is not only in the mind") + 2.4}>only in the mind</SK></At>
      {boxes.map(([cue, title, sub, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5) * a2}>
          <div style={{ width: 780, padding: "22px 20px", borderRadius: 18, border: `3px solid ${GOLD}`, background: "rgba(10,12,30,0.72)", boxShadow: `0 0 30px ${GOLD}33` }}>
            <Wd c={GOLD} s={30} serif>{title}</Wd>
            <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div>
          </div>
        </At>
      ))}
      <At x={960} y={760} o={between2(t, c("No labeller stands behind it"), c("Fourth, the basis has no bottom layer")) * a2}><SK c={DIM} s={26} strikeAt={c("No labeller stands behind it") + 0.6}>a labeller behind, painting names on a world</SK></At>
      <At x={960} y={360} o={ramp(t, one, 0.5)}><Reveal text="Unfound: the chariot that stands by itself." at={one + 0.4} size={46} color={DIM} top="#E8E2D2" speed={0.03} /></At>
      <At x={960} y={470} o={ramp(t, one + 3.2, 0.5)}><Reveal text="Left whole: the chariot that carries you." at={one + 3.2} size={52} color={GOLD} speed={0.03} /></At>
      <At x={960} y={640} o={ramp(t, one + 4.5, 0.6)}><Chariot /></At>
    </AbsoluteFill>
  );
};

const WebScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const first = c("The first puts the conditions underneath");
  const app = c("But the conditions are the appearing");
  const loaf = c("The cook, the chemist and the physicist cut the same loaf differently");
  const second = c("The second keeps the relations when the things are gone");
  const line = c("But the line is as unfindable as the dot");
  const half = c("is only half of it");
  const a1 = between2(t, first, second);
  const a2 = between2(t, second, half);
  return (
    <AbsoluteFill>
      <Items items={[["Two pictures creep back", 960, 100, <Wd c={CHALK} s={38} serif>two pictures that creep back</Wd>, { until: "is only half of it" }]]} />
      {/* picture 1: conditions underneath */}
      <At x={960} y={300} o={ramp(t, first, 0.5) * (1 - ramp(t, loaf, 0.5))}><K c={GOLD} s={30}>the appearing, on top</K></At>
      <At x={960} y={470} o={ramp(t, first + 0.8, 0.5) * (1 - ramp(t, loaf, 0.5))}>
        <div style={{ position: "relative", display: "flex", gap: 30 }}>
          {["condition", "condition", "condition", "condition"].map((n, i) => <K key={i} c={DIM} s={26}>{n}</K>)}
          <Strike at={app + 0.4} />
        </div>
      </At>
      <At x={960} y={385} o={ramp(t, first + 1.2, 0.5) * (1 - ramp(t, app, 0.5))}><Wd c={DIM} s={36}>{"↑ produce"}</Wd></At>
      <Items items={[["But the conditions are the appearing", 960, 620, <Wd c={TEAL} s={34}>the conditions are the appearing, cut into parts</Wd>, { until: "The cook, the chemist and the physicist cut the same loaf differently" }]]} />
      <At x={960} y={380} o={ramp(t, loaf, 0.5) * a1}><Loaf cuts={ramp(t, loaf + 0.5, 3)} /></At>
      <At x={960} y={560} o={ramp(t, loaf + 0.5, 0.5) * a1}>
        <div style={{ display: "flex", gap: 40 }}><K c={TEAL} s={26}>the cook</K><K c={VIOLET} s={26}>the chemist</K><K c={ICE} s={26}>the physicist</K></div>
      </At>
      <Items items={[["None is the loaf from its own side", 960, 680, <Wd c={GOLD} s={30}>each cut works; none is the loaf from its own side</Wd>, { until: "The second keeps the relations when the things are gone" }]]} />
      {/* picture 2: the web */}
      <At x={620} y={420} o={a2}><Web p={ramp(t, second, 0.6)} fadeDots={ramp(t, second + 2, 1) * 0.85} fadeLines={ramp(t, line + 0.8, 1.2) * 0.85} /></At>
      <Items items={[
        ["The second keeps the relations when the things are gone", 1340, 260, <Wd c={CHALK} s={30}>things gone; surely the web is left?</Wd>, { until: "is only half of it" }],
        ["But the line is as unfindable as the dot", 1340, 340, <Wd c={GOLD} s={32}>the line, as unfindable as the dot</Wd>, { until: "is only half of it" }],
        ["Coming into contact, having come into contact", 1340, 450, <div style={{ width: 640, whiteSpace: "normal" }}><Reveal text="“Coming into contact, having come into contact, and the one who brings them into contact are not found.”" at={c("Coming into contact, having come into contact")} size={30} color={GOLD} speed={0.012} wrap /><div style={{ marginTop: 8 }}><Wd c={DIM} s={22}>MMK 14.8</Wd></div></div>, { until: "is only half of it" }],
        ["Relation and what it relates are designated together", 1340, 590, <Wd c={TEAL} s={26}>relation and relata, designated together</Wd>, { until: "is only half of it" }],
        ["fine image", 1340, 660, <Wd c={DIM} s={24}>Indra's net: fine, if the net is not taken as found</Wd>, { until: "is only half of it" }],
        ["And the order is fully valid", 1340, 730, <Wd c={CHALK} s={24}>the order is valid: not a hidden code, no laws behind</Wd>, { until: "is only half of it" }],
      ]} />
      {/* end */}
      <Items items={[
        ["is only half of it", 960, 260, <Wd c={CHALK} s={34}>"nothing stands alone": only half</Wd>],
        ["is only half of it", 960, 350, <Wd c={TEAL} s={30}>the relations are not found from their own side either</Wd>, { d: 2.5 }],
        ["What is left is not a web", 960, 460, <SK c={DIM} s={30} strikeAt={c("It is this, appearing") - 0.2}>a web</SK>],
      ]} />
      <At x={960} y={600}><Reveal text="It is this, appearing." at={c("It is this, appearing")} size={60} color={GOLD} speed={0.05} /></At>
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nx = c("Next: what it is for");
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, c("All views and understanding here are my own"), 0.6) * (1 - ramp(t, nx, 0.5))}>
        <div style={{ width: 1300, whiteSpace: "normal" }}><Wd c={CHALK} s={32} serif>All views and understanding here are my own, from my practice and contemplation.</Wd></div>
      </At>
      <At x={960} y={470} o={ramp(t, c("All views and understanding here are my own") + 3.5, 0.6) * (1 - ramp(t, nx, 0.5))}>
        <Wd c={DIM} s={28}>I do not represent any tradition, school or teacher.</Wd>
      </At>
      <At x={960} y={340} o={ramp(t, nx, 0.6)}><Wd c={DIM} s={34} serif>Next</Wd></At>
      <At x={960} y={440} o={ramp(t, nx + 0.4, 0.6)}><Wd c={GOLD} s={60} serif>Part 3: What It Is For</Wd></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["This is Part", "dusk", <OpenScene />],
    ["easy to agree with, and easy to mishear", "doubt", <MishearScene />],
    ["So what does it say", "light", <BellScene />],
    ["But when the producing cause falls away", "deep", <TingScene />],
    ["did not come to me as a theory", "jade", <DoerScene />],
    ["Then designation", "search", <SingleScene />],
    ["The clearest case is the oldest", "light", <ChariotScene />],
    ["And the basis is designated too", "deep", <BasisScene />],
    ["the Buddhist tradition itself once set out to find that bottom layer", "whole", <FloorScene />],
    ["aims at exactly this definition", "search", <FiveScene />],
    ["Chapter 15 shows why it had to be so", "doubt", <FifteenScene />],
    ["None of this denies that fire burns", "ember", <FireScene />],
    ["This is where the apple comes back", "jade", <AppleScene />],
    ["Here is where the expression is hardest", "whole", <FourScene />],
    ["Two pictures creep back", "deep", <WebScene />],
    ["All views and understanding here are my own", "night", <EndScene />],
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
