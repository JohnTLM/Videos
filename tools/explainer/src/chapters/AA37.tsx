// Bonus video: Dependent Arising Part 3: Measured, or Formed? (AA37).
// (Script: new-documents/after-anatta/aa37-measured-or-formed-script.md, from EBooks
// Bonus Articles/measured-or-formed, draft of 2026-11-22; approved by the owner 2026-11-22.)
// Arc: a detector clicks "up" -> Part 2 recap; "physics is different" -> echoes, not proofs; Rovelli and Barad
// -> a measured value as it feels (read off like a clock) -> formed: only chances before; a fact relative to the
// system that met it; not yet a fact for a third; stored value struck; the apple's red -> two observers as it feels
// (agreement proves the given) -> formed: links between me, you and the electron; no hidden value; the conch
// -> a stick in a dark room as it feels (a fixed line) -> formed: the cut moves with the grip; the agential cut;
// which path or interference, two phenomena; intra-action; Part 1's four creatures -> where I part: relations as a
// new floor, struck; a relation needs its sides; arising together; empty all the way through -> which holds:
// experience, logic, working -> verdict -> next, Part 4: many worlds.
// Stance: neither things nor relations are drawn as a base layer except to be struck; the web of relations is drawn
// dashed and struck; the cut is drawn as moving, never as a fixed line. Cue phrases avoid respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "A detector clicks", "Was the electron up all along", "I am John Tan, known as Thusness",
  // recap
  "In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", "And no neutral liquid was found underneath",
  "Beings still agree", "because they meet along shared channels, and correct one another",
  "A careful listener may say", "Physics is different", "Physics measures the world as it is, from no one's side",
  "Surely there, at least, the given is solid",
  // echoes
  "So in this part, I turn to physics", "I am not a physicist", "Carlo Rovelli's relational quantum mechanics",
  "And Karen Barad's agential realism", "I use them as echoes, not proofs", "Emptiness does not depend on physics",
  "And physics does not need my approval", "But it is striking", "starting from the laboratory and not from meditation",
  "The pattern is the same as before", "Then: which holds",
  // value, as it feels
  "First, a measured value", "Take one small particle, an electron", "say its spin along one direction",
  "The detector clicks. Up", "Surely the electron was up all along", "The measurement only revealed it",
  "from the electron's own side", "the way I read the time from a clock",
  // value, formed
  "Or, and it is a big or, look at how the value is formed", "Quantum mechanics has long resisted that picture",
  "the theory does not give the electron a definite value at all", "Only chances",
  "Rovelli draws a plain conclusion", "A physical value is not a property a thing carries on its own",
  "It is a fact that holds relative to another system, in an interaction",
  "Up is a fact for the detector that met the electron", "it is not yet a fact at all",
  "So the value is not stored in the electron, waiting", "It forms in the meeting",
  "The world is not made of things with their own properties", "It is made of events of interaction",
  "That is the same move as the apple in Part 1", "The red was not stored in the fruit",
  "even the most exact measurement is a meeting",
  "And even seen this way, nothing is missing. The click is real", "The record stays",
  "And the experiment can be repeated tomorrow",
  // observers, as it feels
  "Second, two observers compare notes", "I measure the electron, and get up", "Later you check, and you get up too",
  "We compare notes, and they match", "Surely that settles it", "why would we agree",
  "Agreement proves the given",
  // observers, formed
  "Or, and again it is a big or, look at how the agreement is formed",
  "Critics put exactly this question to Rovelli", "worked out with the philosopher Emily Adlam",
  "If I have measured the electron", "and you then interact both with the electron and with me",
  "then your result will match my record", "Agreement is real, and reliable",
  "But it is formed through the meeting between you, me and the electron",
  "It does not need a hidden value that existed before anyone met it",
  "answer from Part 2, met again in a laboratory", "healthy human eyes agreed that the conch is white",
  "with no judge standing outside every view", "Here, observers agree by interacting",
  "And errors are caught by checking again", "Not by standing on a floor",
  "Scientists still agree", "Papers are still checked", "Bridges are still built from the numbers",
  // stick, as it feels
  "Third, a stick in a dark room", "Barad starts from Niels Bohr",
  "Picture walking through a dark room with a stick", "If I grip it firmly, the stick becomes part of me",
  "I feel the wall at its tip", "If I hold it loosely, the stick becomes something I feel", "Its weight",
  "Surely there is a fixed line between me", "The line is simply there", "I only find it",
  // stick, formed
  "Or, and it is the biggest or, look at how the line is formed",
  "With the same stick and the same hand, the line falls in a different place",
  "Barad calls this the agential cut", "does not slice up a world already divided into observer and observed",
  "It enacts the cut", "what counts as the instrument", "and what counts as the object",
  "And what a word like position can even mean here", "Change the setup, and the cut moves",
  "Bohr showed that an experiment set up to find which path a particle takes",
  "cannot also show the interference that needs both paths",
  "These are not two windows onto one finished particle", "They are two different phenomena, each with its own cut",
  "So Barad says that things do not exist first, and then interact", "They emerge through what she calls",
  "Action within one phenomenon, not between things already there",
  "That is close to the bat, the bee and the ant in Part 1", "A different body singles out a different world",
  "Barad's cut is that togetherness, seen in the laboratory",
  "I still find my way across the dark room", "And I still do not walk into the wall",
  // where I part
  "Now, where I part from them", "this is where the echo can turn into a new floor",
  "It is easy to read both views this way", "Things are not real, but relations are",
  "Interactions are the true stuff of the world", "Phenomena are the real building blocks",
  "that reading only moves the floor", "Before, solid things sat underneath", "Now, solid relations do",
  "does not allow that", "A relation needs what it relates", "Between needs two sides",
  "Take away the electron and the detector, and no interaction is left standing on its own",
  "Relations and the things related arise together", "Neither comes first",
  "So the interaction is as unfindable as the electron", "And the cut is as unfindable as the two sides it divides",
  "What I meet is not a web of real relations under the appearances", "It is the appearances themselves",
  "Vivid, working, and empty all the way through", "The relations included",
  "Rovelli himself has written about reading", "I am glad of the meeting",
  "But I do not need physics to be right for dependent arising to hold",
  "And I do not need dependent arising to settle what physics will say next", "Scientific models are designations too",
  // which holds
  "Two ways of seeing, three times over, now in the laboratory", "Which carries more valid truth",
  "I test them as before. By experience. By logic. And by how things work",
  // experience
  "By experience. What does any physicist actually meet", "A click", "A trace on a screen", "A number on a display",
  "A colleague's report", "Never a value standing on its own, before any meeting", "That value is never met",
  "It is supplied", "By the same habit that supplies the apple standing on its own in the bowl",
  // logic
  "By logic. If the electron's value were fixed from its own side", "it would be the same for every system, met or not",
  "And the cut would not move with the setup", "Both fail", "And a relation put forward as the new floor fails too",
  "Picking it out needs the things it relates", "And they need it", "Nothing in the chain stands alone",
  // working
  "By working. The given view says physics works because a finished world sits underneath",
  "The formed view explains the working fully", "Measurements repeat", "Observers agree", "Predictions hold",
  "Because these are patterns meeting other patterns", "Working never needed a floor", "Not in the bowl",
  "And not in the laboratory",
  // verdict
  "So the given is not the truer view, even in physics", "It is the default view, carried by habit",
  "What fails is only the extra claim", "a value, a thing, or a relation, standing there from its own side",
  "Nothing that works is lost",
  // next
  "This is Part 3 of the Dependent Arising series", "In Part 4, I draw some conclusions",
  "Without essence, does everything turn ghostly and void", "The car still knocks you down", "It still rains",
  "And you still get sick",
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
  lab: { a: "rgba(40,90,140,0.5)", b: "rgba(60,50,140,0.42)", c: "rgba(40,130,120,0.32)" },
  dark: { a: "rgba(15,18,45,0.7)", b: "rgba(50,40,90,0.45)", c: "rgba(20,30,50,0.5)" },
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
  <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={34} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
  </div>
);
const Struck: React.FC<{ at: string; d?: number; children: React.ReactNode }> = ({ at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}>{children}<Strike at={cue(at) + d} /></div>;
};

// ---------------------------------------------------------------- drawings
/** An electron: a glowing dot with a spin arrow (`dir` 1 up, -1 down, 0 none). `fuzz` blurs it into chances. */
const Electron: React.FC<{ size?: number; dir?: number; fuzz?: number; col?: string }> = ({ size = 120, dir = 0, fuzz = 0, col = ICE }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible" }}>
      {fuzz > 0 && Array.from({ length: 18 }).map((_, i) => {
        const a = i * 2.4 + t * 1.3, r = 14 + 26 * ((i * 37) % 10) / 10;
        return <circle key={i} cx={50 + Math.cos(a) * r} cy={50 + Math.sin(a) * r} r={4} fill={col} opacity={0.35 * fuzz} />;
      })}
      <circle cx={50} cy={50} r={14} fill={`${col}88`} stroke={col} strokeWidth={3} opacity={1 - 0.6 * fuzz} style={{ filter: `drop-shadow(0 0 10px ${col})` }} />
      {dir !== 0 && <path d={dir > 0 ? "M50 40 L50 6 M40 18 L50 6 L60 18" : "M50 60 L50 94 M40 82 L50 94 L60 82"} fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />}
    </svg>
  );
};

/** A detector box with a small display. */
const Detector: React.FC<{ read?: string; on?: number }> = ({ read = "", on = 0 }) => (
  <div style={{ width: 220, height: 150, borderRadius: 16, border: `3px solid ${CHALK}`, background: "rgba(10,12,30,0.75)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
    <div style={{ width: 140, height: 56, borderRadius: 8, border: `2px solid ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center",
      background: `rgba(228,194,122,${0.15 * on})` }}>
      <Wd c={GOLD} s={34}>{on > 0.5 ? read : ""}</Wd>
    </div>
    <Wd c={DIM} s={18}>detector</Wd>
  </div>
);

/** A simple clock face. */
const Clock: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx={50} cy={50} r={44} fill="none" stroke={CHALK} strokeWidth={4} />
    <path d="M50 50 L50 20 M50 50 L72 58" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

/** A plain figure. */
const Person: React.FC<{ col?: string; size?: number }> = ({ col = CHALK, size = 110 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible" }}>
    <circle cx={30} cy={18} r={13} fill="none" stroke={col} strokeWidth={4} />
    <path d="M30 32 L30 66 M30 42 L10 58 M30 42 L50 58 M30 66 L14 96 M30 66 L46 96" fill="none" stroke={col} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

/** A notebook page with one word. */
const Note: React.FC<{ word: string; col?: string }> = ({ word, col = CHALK }) => (
  <div style={{ width: 120, height: 90, borderRadius: 6, border: `2px solid ${col}`, background: "rgba(236,231,218,0.08)",
    display: "flex", alignItems: "center", justifyContent: "center" }}><Wd c={GOLD} s={26}>{word}</Wd></div>
);

/** An apple (Part 1 callback). */
const Apple: React.FC<{ size?: number }> = ({ size = 110 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M50 30 C35 18 12 25 14 52 C16 78 34 92 50 84 C66 92 84 78 86 52 C88 25 65 18 50 30 Z" fill={`${ROSE}55`} stroke={ROSE} strokeWidth={4} />
    <path d="M50 30 L53 12" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

/** A conch (Part 2 callback). */
const Conch: React.FC = () => (
  <svg width={130} height={96} viewBox="0 0 150 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${CHALK})` }}>
    <path d="M10 60 Q30 10 90 16 Q140 24 140 56 Q120 70 96 64 Q80 96 40 96 Q14 90 10 60 Z" fill="rgba(236,231,218,0.3)" stroke={CHALK} strokeWidth={4} />
  </svg>
);

/** The dark room: a hand, a stick, a wall; `cut` 0 = cut at the stick's tip (firm grip), 1 = cut at the hand (loose). */
const DarkRoom: React.FC<{ p: number; cut: number; showCut: number }> = ({ p, cut, showCut }) => {
  const cx = 1180 - cut * 560;
  return (
    <svg width={1500} height={420} viewBox="0 0 1500 420" style={{ overflow: "visible", opacity: p }}>
      {/* wall */}
      <rect x={1300} y={20} width={40} height={380} fill="rgba(138,132,117,0.35)" stroke={DIM} strokeWidth={3} />
      {/* person (arm and hand) */}
      <circle cx={360} cy={120} r={34} fill="none" stroke={CHALK} strokeWidth={4} />
      <path d="M360 154 L360 330 M360 200 L560 230" fill="none" stroke={CHALK} strokeWidth={5} strokeLinecap="round" />
      <circle cx={580} cy={232} r={20} fill="rgba(236,231,218,0.25)" stroke={CHALK} strokeWidth={3} />
      {/* stick */}
      <path d="M590 234 L1296 210" stroke={GOLD} strokeWidth={7} strokeLinecap="round" />
      {/* the cut */}
      <path d={`M${cx} 30 L${cx} 390`} stroke={WARM} strokeWidth={4} strokeDasharray="14 10" opacity={showCut} />
      <text x={cx - 20} y={60} fill={CHALK} fontSize={26} textAnchor="end" opacity={showCut}>observer</text>
      <text x={cx + 20} y={60} fill={CHALK} fontSize={26} textAnchor="start" opacity={showCut}>observed</text>
    </svg>
  );
};

/** A double slit panel: `mode` "path" (two bands) or "wave" (interference stripes). */
const Slits: React.FC<{ mode: "path" | "wave"; col: string }> = ({ mode, col }) => (
  <svg width={420} height={260} viewBox="0 0 420 260" style={{ overflow: "visible" }}>
    <rect x={150} y={10} width={14} height={240} fill={DIM} />
    <rect x={150} y={80} width={14} height={30} fill="#06060d" />
    <rect x={150} y={150} width={14} height={30} fill="#06060d" />
    <circle cx={40} cy={130} r={10} fill={col} />
    <rect x={380} y={10} width={10} height={240} fill="rgba(236,231,218,0.2)" />
    {mode === "path"
      ? [95, 165].map((y) => <rect key={y} x={380} y={y - 22} width={10} height={44} fill={col} opacity={0.9} />)
      : Array.from({ length: 9 }).map((_, i) => <rect key={i} x={380} y={20 + i * 26} width={10} height={12} fill={col} opacity={1 - Math.abs(i - 4) * 0.18} />)}
    {mode === "path" && <circle cx={190} cy={95} r={12} fill="none" stroke={GOLD} strokeWidth={3} />}
  </svg>
);

/** A web of relations, drawn dashed (the tempting new floor). */
const Web: React.FC<{ p: number }> = ({ p }) => {
  const pts = Array.from({ length: 10 }).map((_, i) => [80 + ((i * 97) % 640), 40 + ((i * 53) % 180)]);
  return (
    <svg width={800} height={260} viewBox="0 0 800 260" style={{ overflow: "visible", opacity: p }}>
      {pts.map(([x, y], i) => pts.slice(i + 1, i + 4).map(([x2, y2], j) => (
        <line key={`${i}${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={VIOLET} strokeWidth={2.5} strokeDasharray="8 6" />
      )))}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={7} fill={VIOLET} />)}
    </svg>
  );
};

/** A balance beam. */
const Scale: React.FC<{ tilt: number; left: string; right: string; lc: string; rc: string }> = ({ tilt, left, right, lc, rc }) => {
  const a = tilt * 12;
  return (
    <div style={{ position: "relative", width: 1000, height: 360 }}>
      <svg width={1000} height={360} viewBox="0 0 1000 360" style={{ position: "absolute", overflow: "visible" }}>
        <path d="M500 330 L460 360 L540 360 Z" fill={DIM} />
        <line x1={500} y1={330} x2={500} y2={120} stroke={DIM} strokeWidth={6} />
        <g transform={`rotate(${a} 500 120)`}>
          <line x1={140} y1={120} x2={860} y2={120} stroke={CHALK} strokeWidth={6} />
          <line x1={140} y1={120} x2={140} y2={200} stroke={DIM} strokeWidth={3} />
          <line x1={860} y1={120} x2={860} y2={200} stroke={DIM} strokeWidth={3} />
          <path d="M60 200 Q140 250 220 200 Z" fill="none" stroke={lc} strokeWidth={4} />
          <path d="M780 200 Q860 250 940 200 Z" fill="none" stroke={rc} strokeWidth={4} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: 40, top: 270 - a * 6, width: 200, textAlign: "center" }}><Wd c={lc} s={26}>{left}</Wd></div>
      <div style={{ position: "absolute", left: 760, top: 270 + a * 6, width: 200, textAlign: "center" }}><Wd c={rc} s={26}>{right}</Wd></div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const click = c("A detector clicks");
  return (
    <AbsoluteFill>
      <At x={700} y={400} o={ramp(t, click - 0.3, 0.5)}><Electron size={150} dir={t > click + 0.6 ? 1 : 0} /></At>
      <At x={1180} y={400} o={ramp(t, click - 0.3, 0.5)} s={pop(t, 30, click + 0.5)}><Detector read="UP" on={ramp(t, click + 0.5, 0.3)} /></At>
      <Items items={[
        ["Was the electron up all along", 960, 160, <Wd c={GOLD} s={48} serif>Was it up all along?</Wd>],
        ["I am John Tan, known as Thusness", 960, 640, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 760, <Wd c={CHALK} s={32} serif>Dependent Arising · Part 3</Wd>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const RecapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const careful = c("A careful listener may say");
  return (
    <AbsoluteFill>
      {t < careful && (
        <Items items={[
          ["In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", 960, 130, <Wd c={DIM} s={30}>Part 2 · one bowl, four beings</Wd>],
          ["In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", 480, 280, <K c={ICE} s={26}>water</K>, { pop: true, d: 1.4 }],
          ["In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", 800, 280, <K c={WARM} s={26}>pus</K>, { pop: true, d: 1.9 }],
          ["In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", 1120, 280, <K c={TEAL} s={26}>a home</K>, { pop: true, d: 2.3 }],
          ["In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", 1440, 280, <K c={GOLD} s={26}>nectar</K>, { pop: true, d: 2.7 }],
          ["And no neutral liquid was found underneath", 960, 410, <SK c={DIM} s={28} at="And no neutral liquid was found underneath" d={1.2}>a neutral liquid underneath</SK>],
          ["Beings still agree", 960, 540, <Wd c={CHALK} s={34} serif>beings still agree</Wd>],
          ["because they meet along shared channels, and correct one another", 960, 620, <Wd c={GOLD} s={28}>meeting along shared channels, correcting one another</Wd>],
        ]} />
      )}
      {t >= careful && (
        <Items items={[
          ["Physics is different", 960, 260, <Wd c={CHALK} s={44} serif>"Physics is different."</Wd>],
          ["Physics measures the world as it is, from no one's side", 960, 380, <Box c={ICE} w={760} title="the world as it is" sub="measured from no one's side" />, { pop: true }],
          ["Surely there, at least, the given is solid", 960, 560, <Wd c={GOLD} s={38} serif>surely there, at least, the given is solid?</Wd>],
        ]} />
      )}
    </AbsoluteFill>
  );
};

const EchoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pat = c("The pattern is the same as before");
  return (
    <AbsoluteFill>
      {t < pat && (
        <Items items={[
          ["So in this part, I turn to physics", 960, 120, <Wd c={CHALK} s={44} serif>Now, physics</Wd>],
          ["I am not a physicist", 960, 200, <Wd c={DIM} s={28}>I am not a physicist; I report as fairly as I can</Wd>],
          ["Carlo Rovelli's relational quantum mechanics", 600, 340, <Box c={ICE} w={560} title="Carlo Rovelli" sub="relational quantum mechanics" />, { pop: true }],
          ["And Karen Barad's agential realism", 1320, 340, <Box c={VIOLET} w={560} title="Karen Barad" sub="agential realism" />, { pop: true }],
          ["I use them as echoes, not proofs", 960, 500, <Wd c={GOLD} s={40} serif>echoes, not proofs</Wd>],
          ["Emptiness does not depend on physics", 640, 600, <K c={CHALK} s={24}>emptiness does not depend on physics</K>, { pop: true }],
          ["And physics does not need my approval", 1280, 600, <K c={CHALK} s={24}>physics does not need my approval</K>, { pop: true }],
          ["starting from the laboratory and not from meditation", 960, 720, <Wd c={DIM} s={26}>from the laboratory, not from meditation, close to what was seen long ago</Wd>],
        ]} />
      )}
      {t >= pat && (
        <Items items={[
          ["The pattern is the same as before", 960, 260, <Wd c={CHALK} s={36} serif>Two ways of seeing, three times</Wd>],
          ["The pattern is the same as before", 500, 450, <Box c={ICE} w={360} title="a measured value" />, { pop: true, d: 1 }],
          ["The pattern is the same as before", 960, 450, <Box c={TEAL} w={360} title="two observers" />, { pop: true, d: 1.6 }],
          ["The pattern is the same as before", 1420, 450, <Box c={VIOLET} w={360} title="a stick in a dark room" />, { pop: true, d: 2.2 }],
          ["Then: which holds", 960, 650, <Wd c={GOLD} s={40} serif>then: which holds?</Wd>],
        ]} />
      )}
    </AbsoluteFill>
  );
};

const ValueFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const click = c("The detector clicks. Up");
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, a measured value", 960, 100, <Wd c={ICE} s={48} serif>1 · A measured value, as it feels</Wd>],
        ["say its spin along one direction", 520, 520, <Wd c={DIM} s={24}>its spin, along one direction</Wd>],
        ["Surely the electron was up all along", 1400, 230, <Wd c={GOLD} s={36} serif>surely it was up all along</Wd>],
        ["The measurement only revealed it", 1400, 310, <K c={ROSE} s={26}>measurement only revealed it</K>, { pop: true }],
        ["from the electron's own side", 1400, 380, <K c={ROSE} s={26}>finished, from its own side</K>, { pop: true }],
        ["the way I read the time from a clock", 1400, 700, <Wd c={DIM} s={26}>read off, like the time from a clock</Wd>],
      ]} />
      <At x={520} y={380} o={ramp(t, c("Take one small particle, an electron"), 0.6)}><Electron size={150} dir={t > click ? 1 : 0} /></At>
      <At x={900} y={380} o={ramp(t, click - 0.4, 0.5)}><Detector read="UP" on={ramp(t, click, 0.3)} /></At>
      <At x={1400} y={560} o={ramp(t, c("the way I read the time from a clock"), 0.6)}><Clock size={140} /></At>
    </AbsoluteFill>
  );
};

const ValueFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const before = c("the theory does not give the electron a definite value at all");
  const rov = c("Rovelli draws a plain conclusion");
  const stored = c("So the value is not stored in the electron, waiting");
  const apple = c("That is the same move as the apple in Part 1");
  const miss = c("And even seen this way, nothing is missing. The click is real");
  const phase = t < rov ? 0 : t < stored ? 1 : t < apple ? 2 : t < miss ? 3 : 4;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and it is a big or, look at how the value is formed", 960, 100, <Wd c={GOLD} s={46} serif>Or: how the value is formed</Wd>, { until: "That is the same move as the apple in Part 1" }],
      ]} />
      {phase === 0 && (
        <>
          <At x={960} y={420} o={ramp(t, before, 0.6)}><Electron size={220} fuzz={1} /></At>
          <Items items={[
            ["Quantum mechanics has long resisted that picture", 960, 200, <Wd c={DIM} s={28}>quantum theory resists that picture</Wd>],
            ["the theory does not give the electron a definite value at all", 960, 620, <SK c={DIM} s={28} at="Only chances">a definite value, before the meeting</SK>],
            ["Only chances", 960, 710, <K c={ICE} s={28}>only chances</K>, { pop: true }],
          ]} />
        </>
      )}
      {phase === 1 && (
        <>
          <At x={560} y={420}><Electron size={140} dir={1} /></At>
          <At x={1000} y={420}><Detector read="UP" on={1} /></At>
          <Svg><line x1={640} y1={420} x2={880} y2={420} stroke={GOLD} strokeWidth={4} strokeDasharray="10 8" opacity={ramp(t, c("It is a fact that holds relative to another system, in an interaction"), 0.6)} /></Svg>
          <At x={1560} y={420} o={ramp(t, c("it is not yet a fact at all"), 0.6)}><div style={{ width: 160, height: 120, borderRadius: 14, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Wd c={DIM} s={22}>a third system</Wd></div></At>
          <Items items={[
            ["A physical value is not a property a thing carries on its own", 960, 200, <SK c={DIM} s={28} at="It is a fact that holds relative to another system, in an interaction">a property it carries on its own</SK>],
            ["It is a fact that holds relative to another system, in an interaction", 960, 280, <Wd c={GOLD} s={32} serif>a fact relative to another system, in an interaction</Wd>],
            ["Up is a fact for the detector that met the electron", 780, 580, <K c={GOLD} s={26}>up: a fact for the detector</K>, { pop: true }],
            ["it is not yet a fact at all", 1560, 560, <K c={DIM} s={24}>for it: not yet a fact</K>, { pop: true }],
          ]} />
        </>
      )}
      {phase === 2 && (
        <Items items={[
          ["So the value is not stored in the electron, waiting", 960, 260, <SK c={DIM} s={32} at="It forms in the meeting">stored in the electron, waiting</SK>],
          ["It forms in the meeting", 960, 370, <Wd c={GOLD} s={44} serif>It forms in the meeting.</Wd>],
          ["The world is not made of things with their own properties", 960, 500, <SK c={DIM} s={28} at="It is made of events of interaction">things with their own properties</SK>],
          ["It is made of events of interaction", 960, 600, <K c={ICE} s={30}>events of interaction</K>, { pop: true }],
        ]} />
      )}
      {phase === 3 && (
        <>
          <Items items={[
            ["That is the same move as the apple in Part 1", 960, 130, <Wd c={CHALK} s={40} serif>The same move as the apple</Wd>],
            ["The red was not stored in the fruit", 560, 600, <Wd c={DIM} s={26}>red: with light, eye and attention</Wd>],
            ["even the most exact measurement is a meeting", 1360, 600, <Wd c={GOLD} s={28}>even the most exact measurement: a meeting</Wd>],
          ]} />
          <At x={560} y={400} o={ramp(t, apple, 0.6)}><Apple size={150} /></At>
          <At x={1360} y={400} o={ramp(t, c("even the most exact measurement is a meeting"), 0.6)}><Detector read="UP" on={1} /></At>
        </>
      )}
      {phase === 4 && (
        <Items items={[
          ["And even seen this way, nothing is missing. The click is real", 960, 160, <Wd c={GOLD} s={48} serif>Nothing is missing.</Wd>],
          ["And even seen this way, nothing is missing. The click is real", 560, 420, <K c={GREEN} s={28}>the click is real</K>, { pop: true, d: 1.4 }],
          ["The record stays", 960, 420, <K c={GREEN} s={28}>the record stays</K>, { pop: true }],
          ["And the experiment can be repeated tomorrow", 1360, 420, <K c={GREEN} s={28}>repeated tomorrow, same result</K>, { pop: true }],
        ]} />
      )}
    </AbsoluteFill>
  );
};

const ObserversFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Second, two observers compare notes", 960, 100, <Wd c={TEAL} s={48} serif>2 · Two observers, as it feels</Wd>],
        ["I measure the electron, and get up", 480, 600, <Note word="up" />, { pop: true }],
        ["Later you check, and you get up too", 1440, 600, <Note word="up" col={TEAL} />, { pop: true }],
        ["We compare notes, and they match", 960, 600, <K c={GREEN} s={28}>they match</K>, { pop: true }],
        ["Surely that settles it", 960, 720, <Wd c={GOLD} s={36} serif>surely that settles it</Wd>],
        ["why would we agree", 960, 790, <Wd c={DIM} s={24}>why would we agree, if the value were only relative?</Wd>],
        ["Agreement proves the given", 960, 230, <Box c={ROSE} w={640} title="agreement proves the given" sub="it was up before either of us looked" />, { pop: true }],
      ]} />
      <At x={480} y={400} o={ramp(t, c("I measure the electron, and get up"), 0.6)}><Person size={150} /></At>
      <At x={1440} y={400} o={ramp(t, c("Later you check, and you get up too"), 0.6)}><Person size={150} col={TEAL} /></At>
      <At x={960} y={420} o={ramp(t, c("Second, two observers compare notes"), 0.6) * (1 - ramp(t, c("Agreement proves the given"), 0.4))}><Electron size={120} dir={1} /></At>
    </AbsoluteFill>
  );
};

const ObserversFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cand = c("answer from Part 2, met again in a laboratory");
  const miss = c("Scientists still agree");
  const phase = t < cand ? 0 : t < miss ? 1 : 2;
  const L = (a: string) => ramp(t, c(a), 0.6);
  return (
    <AbsoluteFill>
      {phase === 0 && (
        <>
          <Items items={[
            ["Or, and again it is a big or, look at how the agreement is formed", 960, 100, <Wd c={GOLD} s={44} serif>Or: how the agreement is formed</Wd>],
            ["Critics put exactly this question to Rovelli", 960, 170, <Wd c={DIM} s={26}>the critics' question, put to Rovelli</Wd>],
            ["worked out with the philosopher Emily Adlam", 1500, 250, <Box c={ICE} w={520} title="links across perspectives" sub="Rovelli and Emily Adlam" />, { pop: true }],
            ["then your result will match my record", 960, 650, <K c={GREEN} s={28}>your result matches my record</K>, { pop: true }],
            ["Agreement is real, and reliable", 960, 720, <Wd c={CHALK} s={28}>real, and reliable</Wd>],
            ["But it is formed through the meeting between you, me and the electron", 960, 790, <Wd c={GOLD} s={28}>formed in the meeting between you, me and the electron</Wd>],
            ["It does not need a hidden value that existed before anyone met it", 1500, 560, <SK c={DIM} s={24} at="It does not need a hidden value that existed before anyone met it" d={1.4}>a hidden value, before any meeting</SK>],
          ]} />
          <At x={520} y={420} o={L("If I have measured the electron")}><Person size={120} /></At>
          <At x={960} y={300} o={L("If I have measured the electron")}><Electron size={100} dir={1} /></At>
          <At x={1400} y={420} o={L("and you then interact both with the electron and with me")}><Person size={120} col={TEAL} /></At>
          <Svg>
            <line x1={560} y1={380} x2={920} y2={310} stroke={GOLD} strokeWidth={4} opacity={L("If I have measured the electron")} />
            <line x1={1360} y1={380} x2={1000} y2={310} stroke={TEAL} strokeWidth={4} strokeDasharray="10 8" opacity={L("and you then interact both with the electron and with me")} />
            <line x1={580} y1={440} x2={1340} y2={440} stroke={TEAL} strokeWidth={4} strokeDasharray="10 8" opacity={ramp(t, c("and you then interact both with the electron and with me") + 1.2, 0.6)} />
          </Svg>
          <At x={960} y={470} o={ramp(t, c("and you then interact both with the electron and with me") + 1.2, 0.6)}><Wd c={DIM} s={22}>my record, my notes, my words</Wd></At>
        </>
      )}
      {phase === 1 && (
        <>
          <Items items={[
            ["answer from Part 2, met again in a laboratory", 960, 110, <Wd c={CHALK} s={38} serif>Part 2's answer, met again in a laboratory</Wd>],
            ["healthy human eyes agreed that the conch is white", 520, 470, <Wd c={DIM} s={24}>healthy eyes agree: white</Wd>],
            ["with no judge standing outside every view", 520, 540, <SK c={DIM} s={24} at="with no judge standing outside every view" d={1}>a judge outside every view</SK>],
            ["Here, observers agree by interacting", 1400, 330, <Box c={TEAL} w={560} title="observers agree by interacting" />, { pop: true }],
            ["And errors are caught by checking again", 1400, 450, <K c={GREEN} s={24}>errors caught by checking again</K>, { pop: true }],
            ["Not by standing on a floor", 960, 680, <Wd c={GOLD} s={36} serif>coordination and checking, not a floor</Wd>],
          ]} />
          <At x={520} y={340} o={ramp(t, c("healthy human eyes agreed that the conch is white"), 0.6)}><Conch /></At>
        </>
      )}
      {phase === 2 && (
        <Items items={[
          ["Scientists still agree", 960, 160, <Wd c={GOLD} s={48} serif>Nothing is missing.</Wd>],
          ["Scientists still agree", 520, 420, <K c={GREEN} s={28}>scientists still agree</K>, { pop: true, d: 0.4 }],
          ["Papers are still checked", 960, 420, <K c={GREEN} s={28}>papers are still checked</K>, { pop: true }],
          ["Bridges are still built from the numbers", 1400, 420, <K c={GREEN} s={28}>bridges still built from the numbers</K>, { pop: true }],
        ]} />
      )}
    </AbsoluteFill>
  );
};

const StickFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const loose = c("If I hold it loosely, the stick becomes something I feel");
  const firm = c("If I grip it firmly, the stick becomes part of me");
  const sure = c("Surely there is a fixed line between me");
  const cut = t < loose ? 0 : 1;
  const show = t < sure ? ramp(t, firm, 0.6) : 1;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Third, a stick in a dark room", 960, 100, <Wd c={VIOLET} s={48} serif>3 · A stick in a dark room, as it feels</Wd>],
        ["Barad starts from Niels Bohr", 960, 170, <Wd c={DIM} s={26}>an image Niels Bohr liked</Wd>],
        ["If I grip it firmly, the stick becomes part of me", 760, 720, <K c={GOLD} s={24}>gripped firmly: the stick is part of me</K>, { until: "If I hold it loosely, the stick becomes something I feel" }],
        ["I feel the wall at its tip", 1240, 720, <K c={CHALK} s={24}>I feel the wall at its tip</K>, { until: "If I hold it loosely, the stick becomes something I feel" }],
        ["If I hold it loosely, the stick becomes something I feel", 760, 720, <K c={GOLD} s={24}>held loosely: the stick is felt</K>, { until: "Surely there is a fixed line between me" }],
        ["Its weight", 1240, 720, <K c={CHALK} s={24}>its weight, its roughness</K>, { until: "Surely there is a fixed line between me" }],
        ["Surely there is a fixed line between me", 960, 720, <Wd c={GOLD} s={34} serif>surely a fixed line: me here, the things there</Wd>],
        ["The line is simply there", 760, 800, <K c={ROSE} s={24}>simply there</K>, { pop: true }],
        ["I only find it", 1160, 800, <K c={ROSE} s={24}>I only find it</K>, { pop: true }],
      ]} />
      <At x={960} y={440} o={ramp(t, c("Picture walking through a dark room with a stick"), 0.8)}>
        <DarkRoom p={1} cut={cut} showCut={show} />
      </At>
    </AbsoluteFill>
  );
};

const StickFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const mv = c("With the same stick and the same hand, the line falls in a different place");
  const cutName = c("Barad calls this the agential cut");
  const bohr = c("Bohr showed that an experiment set up to find which path a particle takes");
  const emerge = c("So Barad says that things do not exist first, and then interact");
  const miss = c("I still find my way across the dark room");
  const phase = t < cutName ? 0 : t < bohr ? 1 : t < emerge ? 2 : t < miss ? 3 : 4;
  const swing = (Math.sin((t - mv) * 1.6) + 1) / 2;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and it is the biggest or, look at how the line is formed", 960, 100, <Wd c={GOLD} s={46} serif>Or: how the line is formed</Wd>, { until: "Barad calls this the agential cut" }],
      ]} />
      {phase === 0 && (
        <>
          <At x={960} y={420} o={1}><DarkRoom p={1} cut={t > mv ? swing : 1} showCut={1} /></At>
          <Items items={[
            ["With the same stick and the same hand, the line falls in a different place", 960, 720, <Wd c={CHALK} s={30}>same stick, same hand: the line moves with the grip</Wd>],
          ]} />
        </>
      )}
      {phase === 1 && (
        <>
          <Items items={[
            ["Barad calls this the agential cut", 960, 120, <Wd c={GOLD} s={48} serif>the agential cut</Wd>],
            ["does not slice up a world already divided into observer and observed", 960, 220, <SK c={DIM} s={26} at="It enacts the cut">slicing a world already divided</SK>],
            ["It enacts the cut", 960, 300, <K c={WARM} s={30}>it enacts the cut</K>, { pop: true }],
            ["what counts as the instrument", 640, 440, <Box c={CHALK} w={440} title="the instrument" />, { pop: true }],
            ["and what counts as the object", 1280, 440, <Box c={ICE} w={440} title="the object" />, { pop: true }],
            ["And what a word like position can even mean here", 960, 600, <Wd c={DIM} s={26}>and what "position" can even mean here</Wd>],
            ["Change the setup, and the cut moves", 960, 700, <Wd c={GOLD} s={36} serif>change the setup, and the cut moves</Wd>],
          ]} />
          <At x={960} y={440} o={ramp(t, c("what counts as the instrument"), 0.6)}>
            <svg width={60} height={220} viewBox="0 0 60 220"><path d={`M${30 + Math.sin(t * 1.4) * 18} 0 L${30 + Math.sin(t * 1.4) * 18} 220`} stroke={WARM} strokeWidth={4} strokeDasharray="12 8" /></svg>
          </At>
        </>
      )}
      {phase === 2 && (
        <Items items={[
          ["Bohr showed that an experiment set up to find which path a particle takes", 960, 110, <Wd c={CHALK} s={36} serif>Which path, or interference?</Wd>],
          ["Bohr showed that an experiment set up to find which path a particle takes", 560, 380, <Slits mode="path" col={GOLD} />, { d: 0.5 }],
          ["Bohr showed that an experiment set up to find which path a particle takes", 560, 560, <K c={GOLD} s={24}>set up for which path</K>, { d: 1 }],
          ["cannot also show the interference that needs both paths", 1360, 380, <Slits mode="wave" col={ICE} />],
          ["cannot also show the interference that needs both paths", 1360, 560, <K c={ICE} s={24}>set up for interference</K>, { d: 0.5 }],
          ["These are not two windows onto one finished particle", 960, 660, <SK c={DIM} s={26} at="They are two different phenomena, each with its own cut">two windows onto one finished particle</SK>],
          ["They are two different phenomena, each with its own cut", 960, 750, <Wd c={GOLD} s={32} serif>two phenomena, each with its own cut</Wd>],
        ]} />
      )}
      {phase === 3 && (
        <Items items={[
          ["So Barad says that things do not exist first, and then interact", 960, 160, <SK c={DIM} s={30} at="They emerge through what she calls">things first, then interaction</SK>],
          ["They emerge through what she calls", 960, 270, <Wd c={GOLD} s={40} serif>intra-action</Wd>],
          ["Action within one phenomenon, not between things already there", 960, 350, <Wd c={DIM} s={26}>action within one phenomenon, not between things already there</Wd>],
          ["That is close to the bat, the bee and the ant in Part 1", 960, 470, <Wd c={CHALK} s={32} serif>close to the bat, the bee and the ant</Wd>],
          ["A different body singles out a different world", 960, 550, <Wd c={DIM} s={26}>a different body singles out a different world</Wd>],
          ["Barad's cut is that togetherness, seen in the laboratory", 960, 660, <Box c={VIOLET} w={820} title="the cut: that togetherness, in the laboratory" />, { pop: true }],
        ]} />
      )}
      {phase === 4 && (
        <>
          <Items items={[
            ["I still find my way across the dark room", 960, 160, <Wd c={GOLD} s={48} serif>Nothing is missing.</Wd>],
            ["And I still do not walk into the wall", 960, 720, <K c={GREEN} s={28}>I still find my way · I still do not walk into the wall</K>],
          ]} />
          <At x={960} y={440} o={ramp(t, miss, 0.6)}><DarkRoom p={1} cut={0} showCut={0} /></At>
        </>
      )}
    </AbsoluteFill>
  );
};

const PartScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const need = c("does not allow that");
  const meet = c("What I meet is not a web of real relations under the appearances");
  const rov = c("Rovelli himself has written about reading");
  const phase = t < need ? 0 : t < meet ? 1 : t < rov ? 2 : 3;
  const gone = ramp(t, c("Take away the electron and the detector, and no interaction is left standing on its own") + 1.2, 1);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now, where I part from them", 960, 100, <Wd c={WARM} s={46} serif>Where I part from them</Wd>],
      ]} />
      {phase === 0 && (
        <>
          <Items items={[
            ["this is where the echo can turn into a new floor", 960, 180, <Wd c={DIM} s={28}>where the echo can turn into a new floor</Wd>],
            ["Things are not real, but relations are", 960, 280, <Wd c={CHALK} s={32} serif>"things are not real, but relations are"</Wd>],
            ["Interactions are the true stuff of the world", 640, 360, <K c={VIOLET} s={24}>interactions: the true stuff</K>, { pop: true }],
            ["Phenomena are the real building blocks", 1280, 360, <K c={VIOLET} s={24}>phenomena: the building blocks</K>, { pop: true }],
            ["Before, solid things sat underneath", 560, 760, <SK c={DIM} s={24} at="Before, solid things sat underneath" d={1.2}>solid things underneath</SK>],
            ["Now, solid relations do", 1360, 760, <K c={WARM} s={24}>now: solid relations underneath</K>, { pop: true }],
          ]} />
          <At x={960} y={560} o={ramp(t, c("that reading only moves the floor"), 0.6)}>
            <Struck at="that reading only moves the floor" d={2.4}><Web p={1} /></Struck>
          </At>
        </>
      )}
      {phase === 1 && (
        <>
          <Items items={[
            ["A relation needs what it relates", 960, 190, <Wd c={GOLD} s={38} serif>a relation needs what it relates</Wd>],
            ["Between needs two sides", 960, 260, <Wd c={DIM} s={26}>"between" needs two sides</Wd>],
            ["Relations and the things related arise together", 960, 620, <Wd c={GOLD} s={34} serif>relations and the related arise together</Wd>],
            ["Neither comes first", 960, 690, <K c={GOLD} s={26}>neither comes first</K>, { pop: true }],
            ["So the interaction is as unfindable as the electron", 600, 780, <K c={DIM} s={24}>the interaction: as unfindable as the electron</K>],
            ["And the cut is as unfindable as the two sides it divides", 1340, 780, <K c={DIM} s={24}>the cut: as unfindable as its sides</K>],
          ]} />
          <At x={640} y={430} o={ramp(t, c("A relation needs what it relates"), 0.6) * (1 - gone)}><Electron size={110} dir={1} /></At>
          <At x={1280} y={430} o={ramp(t, c("A relation needs what it relates"), 0.6) * (1 - gone)}><Detector read="UP" on={1} /></At>
          <Svg><line x1={720} y1={430} x2={1160} y2={430} stroke={GOLD} strokeWidth={4} strokeDasharray="10 8" opacity={ramp(t, c("Between needs two sides"), 0.6) * (1 - gone)} /></Svg>
          <At x={960} y={430} o={ramp(t, c("Between needs two sides") + 0.5, 0.5) * (1 - gone)}><Wd c={GOLD} s={24}>between</Wd></At>
          <At x={960} y={470} o={gone * (1 - ramp(t, c("Relations and the things related arise together"), 0.5))}><Wd c={DIM} s={28}>no interaction left standing</Wd></At>
        </>
      )}
      {phase === 2 && (
        <Items items={[
          ["What I meet is not a web of real relations under the appearances", 960, 260, <Struck at="It is the appearances themselves"><Web p={0.8} /></Struck>],
          ["It is the appearances themselves", 960, 470, <Wd c={GOLD} s={40} serif>the appearances themselves</Wd>],
          ["Vivid, working, and empty all the way through", 960, 560, <Wd c={CHALK} s={30}>vivid, working, empty all the way through</Wd>],
          ["The relations included", 960, 640, <K c={GOLD} s={28}>the relations included</K>, { pop: true }],
        ]} />
      )}
      {phase === 3 && (
        <Items items={[
          ["Rovelli himself has written about reading", 960, 230, <Box c={ICE} w={760} title="Rovelli has read the Middle Way" sub="a world with no ultimate things" />, { pop: true }],
          ["I am glad of the meeting", 960, 350, <Wd c={GOLD} s={30} serif>I am glad of the meeting</Wd>],
          ["But I do not need physics to be right for dependent arising to hold", 560, 500, <K c={CHALK} s={24}>dependent arising does not need physics</K>, { pop: true }],
          ["And I do not need dependent arising to settle what physics will say next", 1360, 500, <K c={CHALK} s={24}>physics does not need dependent arising</K>, { pop: true }],
          ["Scientific models are designations too", 960, 650, <Wd c={GOLD} s={34} serif>scientific models are designations too</Wd>],
          ["Scientific models are designations too", 960, 720, <Wd c={DIM} s={24}>among the most reliable I have, inside their own fields</Wd>, { d: 1.5 }],
        ]} />
      )}
    </AbsoluteFill>
  );
};

const WhichScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Two ways of seeing, three times over, now in the laboratory", 960, 110, <Wd c={CHALK} s={38} serif>Two ways of seeing, now in the laboratory</Wd>],
        ["Which carries more valid truth", 960, 190, <Wd c={GOLD} s={46} serif>Which carries more valid truth?</Wd>],
      ]} />
      <At x={960} y={470} o={ramp(t, c("Which carries more valid truth"), 0.6)}>
        <Scale tilt={0} left="measured" right="formed" lc={ROSE} rc={GOLD} />
      </At>
      <Items items={[
        ["I test them as before. By experience. By logic. And by how things work", 560, 760, <K c={TEAL} s={30}>1 · experience</K>, { pop: true, d: 1.2 }],
        ["I test them as before. By experience. By logic. And by how things work", 960, 760, <K c={VIOLET} s={30}>2 · logic</K>, { pop: true, d: 2 }],
        ["I test them as before. By experience. By logic. And by how things work", 1360, 760, <K c={GREEN} s={30}>3 · working</K>, { pop: true, d: 2.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const ExperienceScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["By experience. What does any physicist actually meet", 960, 100, <Wd c={TEAL} s={48} serif>1 · By experience</Wd>],
      ["By experience. What does any physicist actually meet", 960, 180, <Wd c={DIM} s={28}>what does a physicist actually meet?</Wd>, { d: 1 }],
      ["A click", 420, 300, <K c={CHALK} s={28}>a click</K>, { pop: true }],
      ["A trace on a screen", 760, 300, <K c={ICE} s={28}>a trace on a screen</K>, { pop: true }],
      ["A number on a display", 1140, 300, <K c={GOLD} s={28}>a number on a display</K>, { pop: true }],
      ["A colleague's report", 1500, 300, <K c={TEAL} s={28}>a colleague's report</K>, { pop: true }],
      ["Never a value standing on its own, before any meeting", 960, 450, <Struck at="That value is never met" d={0.4}><div style={{ width: 520, height: 90, borderRadius: 45, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Wd c={DIM} s={26}>a value on its own, before any meeting</Wd></div></Struck>],
      ["That value is never met", 960, 570, <Wd c={CHALK} s={32} serif>never met</Wd>],
      ["It is supplied", 960, 650, <K c={WARM} s={28}>supplied</K>, { pop: true }],
      ["By the same habit that supplies the apple standing on its own in the bowl", 960, 750, <Wd c={DIM} s={24}>by the same habit that supplies the apple standing on its own</Wd>],
    ]} />
  </AbsoluteFill>
);

const LogicScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["By logic. If the electron's value were fixed from its own side", 960, 100, <Wd c={VIOLET} s={48} serif>2 · By logic</Wd>],
      ["it would be the same for every system, met or not", 560, 290, <Box c={ICE} w={640} title="a value fixed from its own side" sub="the same for every system, met or not" />, { pop: true }],
      ["And the cut would not move with the setup", 1360, 290, <Box c={VIOLET} w={600} title="a fixed cut" sub="it would not move with the setup" />, { pop: true }],
      ["Both fail", 960, 430, <K c={WARM} s={30}>both fail</K>, { pop: true }],
      ["And a relation put forward as the new floor fails too", 960, 560, <Box c={DIM} w={900} title="a relation as the new floor: fails too" />, { pop: true }],
      ["Picking it out needs the things it relates", 760, 680, <Wd c={CHALK} s={26}>it needs the things it relates</Wd>],
      ["And they need it", 1220, 680, <Wd c={CHALK} s={26}>and they need it</Wd>],
      ["Nothing in the chain stands alone", 960, 780, <Wd c={GOLD} s={36} serif>nothing in the chain stands alone</Wd>],
    ]} />
  </AbsoluteFill>
);

const WorkingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["By working. The given view says physics works because a finished world sits underneath", 960, 100, <Wd c={GREEN} s={48} serif>3 · By working</Wd>],
        ["By working. The given view says physics works because a finished world sits underneath", 960, 200, <SK c={DIM} s={26} at="The formed view explains the working fully">a finished world underneath, read by measurement</SK>, { d: 1.5 }],
        ["Measurements repeat", 520, 400, <K c={ICE} s={28}>measurements repeat</K>, { pop: true }],
        ["Observers agree", 960, 400, <K c={TEAL} s={28}>observers agree</K>, { pop: true }],
        ["Predictions hold", 1400, 400, <K c={GOLD} s={28}>predictions hold</K>, { pop: true }],
        ["Because these are patterns meeting other patterns", 960, 520, <Wd c={CHALK} s={28}>patterns meeting patterns, reliably, along their channels</Wd>],
        ["Working never needed a floor", 960, 650, <Wd c={GOLD} s={46} serif>Working never needed a floor.</Wd>],
        ["Not in the bowl", 760, 750, <K c={DIM} s={26}>not in the bowl</K>, { pop: true }],
        ["And not in the laboratory", 1160, 750, <K c={DIM} s={26}>not in the laboratory</K>, { pop: true }],
      ]} />
      <At x={960} y={290} o={ramp(t, c("The formed view explains the working fully"), 0.5)}><Wd c={GREEN} s={34} serif>the formed view explains it fully</Wd></At>
    </AbsoluteFill>
  );
};

const VerdictScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tip = ramp(t, c("It is the default view, carried by habit"), 1.4);
  const fails = c("What fails is only the extra claim");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So the given is not the truer view, even in physics", 960, 110, <Wd c={CHALK} s={40} serif>The given is not the truer view, even in physics.</Wd>],
        ["It is the default view, carried by habit", 960, 190, <K c={ROSE} s={28}>the default view: habit, and the way we talk</K>, { pop: true }],
      ]} />
      {t < fails && (
        <At x={960} y={520} o={ramp(t, c("So the given is not the truer view, even in physics"), 0.6)}>
          <Scale tilt={tip} left="habit" right="experience + logic" lc={ROSE} rc={GOLD} />
        </At>
      )}
      <Items items={[
        ["What fails is only the extra claim", 960, 330, <Wd c={CHALK} s={30}>what fails is only the extra claim:</Wd>],
        ["a value, a thing, or a relation, standing there from its own side", 960, 420, <SK c={WARM} s={28} at="a value, a thing, or a relation, standing there from its own side" d={3}>a value, a thing, or a relation, from its own side</SK>],
        ["Nothing that works is lost", 960, 600, <Wd c={GOLD} s={44} serif>Nothing that works is lost.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const NextScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And you still get sick");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 5, 1.5) }}>
      <Items items={[
        ["This is Part 3 of the Dependent Arising series", 960, 130, <Wd c={GOLD} s={44} serif>Dependent Arising · Part 3 · Measured, or Formed?</Wd>],
        ["In Part 4, I draw some conclusions", 960, 290, <Box c={VIOLET} w={800} title="Part 4 · Empty, Not Ghostly" sub="some conclusions" />, { pop: true }],
        ["Without essence, does everything turn ghostly and void", 960, 420, <SK c={DIM} s={28} at="And you still get sick" d={1}>without essence: ghostly, void?</SK>],
        ["The car still knocks you down", 520, 560, <K c={GREEN} s={26}>the car still knocks you down</K>, { pop: true }],
        ["It still rains", 960, 560, <K c={ICE} s={26}>it still rains</K>, { pop: true }],
        ["And you still get sick", 1400, 560, <K c={WARM} s={26}>you still get sick</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A detector clicks", "lab", <OpenScene />],
    ["In Part 2, one bowl of liquid was seen as water, pus, a home and nectar", "search", <RecapScene />],
    ["So in this part, I turn to physics", "dusk", <EchoScene />],
    ["First, a measured value", "lab", <ValueFeltScene />],
    ["Or, and it is a big or, look at how the value is formed", "light", <ValueFormedScene />],
    ["Second, two observers compare notes", "jade", <ObserversFeltScene />],
    ["Or, and again it is a big or, look at how the agreement is formed", "light", <ObserversFormedScene />],
    ["Third, a stick in a dark room", "dark", <StickFeltScene />],
    ["Or, and it is the biggest or, look at how the line is formed", "deep", <StickFormedScene />],
    ["Now, where I part from them", "doubt", <PartScene />],
    ["Two ways of seeing, three times over, now in the laboratory", "whole", <WhichScene />],
    ["By experience. What does any physicist actually meet", "jade", <ExperienceScene />],
    ["By logic. If the electron's value were fixed from its own side", "deep", <LogicScene />],
    ["By working. The given view says physics works because a finished world sits underneath", "light", <WorkingScene />],
    ["So the given is not the truer view, even in physics", "whole", <VerdictScene />],
    ["This is Part 3 of the Dependent Arising series", "night", <NextScene />],
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
