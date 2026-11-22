// Bonus video: Dependent Arising Section 2 Part 2: Looking for the Floor (AA41), recut 2026-11-23: the moment and the atom (space moved to AA42).
// (Script: new-documents/after-anatta/aa41-looking-for-the-floor-script.md, from EBooks
// Bonus Articles/looking-for-the-floor, draft of 2026-11-22; approved by the owner 2026-11-23.)
// Arc: where does the habit go next? -> the retreat: instant, smallest pieces, space; the Abhidharma floor ->
// a moment (a bar that splits into gone / not yet, a point that adds to nothing; the three marks; a search, not tiny
// pieces) -> an atom (six neighbours; one spot or six sides; the edge, the author's own step; the mind floor struck)
// -> space (the rule: one or many; bell and gate; a piece with two sides; the mirror; one courtyard, three rooms;
// space and its mark: "nothing blocks here"; two roads) -> two cautions (space is not emptiness; the sky an image,
// not a ground; only the test borrowed) -> tiny pieces, or nothing: both struck; three searches -> which holds ->
// the close; next: a car, a dream, a wave function.
// Stance: the floor is drawn only dashed and fades; the void and the container are drawn only to be struck.
// Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "When the thing is not found, where does the habit go next", "I am John Tan, known as Thusness",
  // retreat
  "In Part 1, a bell, a red flower and a passing thought were each looked for, and not found",
  "The habit does not give up when it hears this. It retreats",
  "surely at each instant something is really there", "Surely the smallest pieces are real",
  "Surely space itself is real", "This is not a theory anyone reasons into", "The tradition calls it innate grasping",
  "because it gives ground without giving up", "The retreat has a long history", "Partless moments", "Partless atoms",
  "among the unconditioned elements, space", "These were the floor",
  "So here I follow the habit down. In this part, twice", "The point is not to disprove time, matter or space",
  "A piece of reality, however small or however vast, that is real in itself",
  // moment
  "First, a moment", "Strike the bell again", "Surely, then, the instant is real",
  "String the instants together, and you have the ringing", "Or, and it is a big or, look for that instant",
  "Does the present moment last for some time, however short", "So it is not partless",
  "Divide it. Its first part is already gone", "Its last part is not yet here", "Only the middle is present",
  "So divide it again", "Each time I look for the present, it splits",
  "And no present is found standing between them", "Then perhaps the true instant has no length at all",
  "Line up as many as you like, and they never add up to a second", "No tone can ring in it",
  "So either way", "The partless moment is not found", "Arising, abiding, and ceasing",
  "Looked for one by one, none of the three is found", "Like a magic show. Like a dream",
  "The dividing is a search, not a discovery of tiny pieces",
  "It shows only that no present is found standing by itself, at any size",
  "The clock still keeps time",
  // atom
  "Second, an atom", "Pick a petal from the red flower", "Under a lens, it is cells",
  "Under a better one, molecules", "Under the best, the smallest bits physics can name",
  "Surely, at the bottom, there is something solid", "is the brick the whole world is built of",
  "Or, and again it is a big or, look at that brick", "with a test I find hard to forget",
  "the atoms must join", "with neighbours on all six sides",
  "If all six touch the same spot, they all occupy one place", "A mountain would be the size of one atom",
  "If they touch different places", "Six sides are six parts. The partless atom has parts",
  "I press the question one step further", "And this step is mine, not his",
  "is the edge part of this atom, or of that one", "If it has no width, it is nowhere",
  "So either way, no partless piece of matter is found", "He stopped there",
  "kept the mind as what is really there", "the mind is looked for the same way, and it is not found either",
  "Mind and matter fail together", "Bricks still make walls",
  // two searches, which holds
  "Two searches, one result so far", "Time breaks into before and after", "Matter breaks into this side and that side",
  "Neither is the floor the habit wanted", "So, which holds", "By experience. Listen to the bell's tone as it fades",
  "Never a floor underneath", "By logic. A partless moment either lasts, and splits",
  "Every candidate undoes itself the moment it is picked out", "By working. The tone fades because the bronze stops trembling",
  "Order never needed a floor", "So the floor view is not the truer one",
  "What fails is only a piece of reality, at the bottom, that is real in itself",
  // close
  "This is Section 2, Part 2 of the Dependent Arising series", "In Part 3, the habit makes its last stand",
  "Surely space itself is real", "The one still room that everything sits in", "I look for that room",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  temple: { a: "rgba(150,105,45,0.46)", b: "rgba(60,50,130,0.44)", c: "rgba(40,90,110,0.32)" },
  rose: { a: "rgba(160,60,80,0.45)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  court: { a: "rgba(40,90,120,0.48)", b: "rgba(120,95,50,0.38)", c: "rgba(60,50,130,0.36)" },
  sky: { a: "rgba(40,80,140,0.5)", b: "rgba(90,70,160,0.4)", c: "rgba(40,110,120,0.3)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
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
/** Fades a block in at `from` and out at `to` (cue phrases). */
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A temple bell; `ring` 0..1 sends sound rings out. */
const Bell: React.FC<{ size?: number; ring: number }> = ({ size = 200, ring }) => {
  const { t } = useT();
  return (
    <svg width={size * 2} height={size * 1.3} viewBox="-200 -20 400 260" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <circle key={i} cx={0} cy={120} r={90 + k * 110} fill="none" stroke={GOLD} strokeWidth={3} opacity={ring * (1 - k) * 0.7} />;
      })}
      <path d="M0 0 L0 20 M-60 40 C-60 10 60 10 60 40 L80 170 L-80 170 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M-95 170 L95 170" stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
      <circle cx={0} cy={192} r={12} fill={GOLD} />
    </svg>
  );
};

/** A bar of time that splits `n` times into gone (left) and not yet (right), a thin present between. */
const TimeBar: React.FC<{ n: number; o?: number }> = ({ n, o = 1 }) => {
  const w = 1100;
  const mid = w / Math.pow(3, n);
  const side = (w - mid) / 2;
  return (
    <svg width={w + 40} height={140} viewBox={`-20 -20 ${w + 40} 140`} style={{ overflow: "visible", opacity: o }}>
      {n > 0 && <rect x={0} y={20} width={side} height={50} rx={8} fill={`${DIM}33`} stroke={DIM} strokeWidth={3} />}
      <rect x={side} y={20} width={Math.max(mid, 2)} height={50} rx={Math.min(8, mid / 2)} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
      {n > 0 && <rect x={side + mid} y={20} width={side} height={50} rx={8} fill={`${ICE}22`} stroke={ICE} strokeWidth={3} strokeDasharray="10 8" />}
      {n > 0 && <text x={side / 2} y={105} fill={DIM} fontSize={26} textAnchor="middle" fontFamily="SourceSans">gone</text>}
      {n > 0 && <text x={side + mid + side / 2} y={105} fill={ICE} fontSize={26} textAnchor="middle" fontFamily="SourceSans">not yet</text>}
    </svg>
  );
};

/** A centre atom with six neighbours; `mode` 0 apart, 1 all on one spot, 2 touching six faces. */
const Atoms: React.FC<{ mode: number; p: number }> = ({ mode, p }) => {
  const dirs: [number, number][] = [[0, -1], [0, 1], [-1, 0], [1, 0], [-0.7, -0.45], [0.7, 0.45]];
  const r = 38;
  const dist = mode === 1 ? 0 : mode === 2 ? 2 * r : 3.2 * r;
  return (
    <svg width={520} height={520} viewBox="-260 -260 520 520" style={{ overflow: "visible", opacity: p }}>
      {dirs.map(([dx, dy], i) => (
        <circle key={i} cx={dx * dist} cy={dy * dist} r={r} fill={`${ICE}22`} stroke={ICE} strokeWidth={3} />
      ))}
      <circle cx={0} cy={0} r={r} fill={`${ROSE}55`} stroke={ROSE} strokeWidth={4} />
      {mode === 2 && dirs.map(([dx, dy], i) => <circle key={`d${i}`} cx={dx * r} cy={dy * r} r={6} fill={GOLD} />)}
    </svg>
  );
};

/** A courtyard: wall, gate, a bell hanging on the left; `glow` lights the open room. */
const Courtyard: React.FC<{ glow?: number; link?: number; piece?: number }> = ({ glow = 0, link = 0, piece = 0 }) => (
  <svg width={1000} height={440} viewBox="0 0 1000 440" style={{ overflow: "visible" }}>
    <rect x={40} y={40} width={920} height={360} rx={10} fill={`rgba(169,221,242,${0.05 + glow * 0.12})`} stroke={CHALK} strokeWidth={5} />
    <rect x={820} y={240} width={110} height={160} fill="rgba(10,12,30,0.9)" stroke={GOLD} strokeWidth={4} />
    <text x={875} y={232} fill={GOLD} fontSize={24} textAnchor="middle" fontFamily="SourceSans">gate</text>
    <path d="M200 40 L200 110" stroke={CHALK} strokeWidth={3} />
    <path d="M170 130 C170 110 230 110 230 130 L245 200 L155 200 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
    <circle cx={200} cy={156} r={52 * link} fill="none" stroke={TEAL} strokeWidth={3} opacity={link} />
    <circle cx={875} cy={300} r={52 * link} fill="none" stroke={TEAL} strokeWidth={3} opacity={link} />
    <path d="M260 160 Q540 60 820 290" stroke={TEAL} strokeWidth={3} strokeDasharray="10 8" fill="none" opacity={link} />
    {piece > 0 && <rect x={168} y={170} width={64} height={28} fill={`${VIOLET}44`} stroke={VIOLET} strokeWidth={3} opacity={piece} />}
  </svg>
);

/** A mirror with a face. */
const Mirror: React.FC = () => (
  <svg width={220} height={300} viewBox="0 0 220 300" style={{ overflow: "visible" }}>
    <ellipse cx={110} cy={140} rx={100} ry={130} fill="rgba(169,221,242,0.08)" stroke={ICE} strokeWidth={5} />
    <circle cx={110} cy={130} r={42} fill="none" stroke={CHALK} strokeWidth={4} opacity={0.8} />
    <circle cx={96} cy={122} r={4} fill={CHALK} /><circle cx={124} cy={122} r={4} fill={CHALK} />
    <path d="M96 148 Q110 158 124 148" stroke={CHALK} strokeWidth={3} fill="none" />
    <path d="M110 270 L110 296 M80 296 L140 296" stroke={ICE} strokeWidth={5} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["When the thing is not found, where does the habit go next", 960, 300, <Wd c={GOLD} s={52} serif>When the thing is not found,</Wd>],
      ["When the thing is not found, where does the habit go next", 960, 390, <Wd c={GOLD} s={52} serif>where does the habit go next?</Wd>, { d: 1.4 }],
      ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 2</Wd>, { d: 0.8 }],
    ]} />
  </AbsoluteFill>
);

const RetreatScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const steps: [string, string, string][] = [
    ["surely at each instant something is really there", "surely each instant…", ICE],
    ["Surely the smallest pieces are real", "surely the smallest pieces…", ROSE],
    ["Surely space itself is real", "surely space itself…", VIOLET],
  ];
  const floor = c("The retreat has a long history");
  return (
    <AbsoluteFill>
      <Items items={[
        ["In Part 1, a bell, a red flower and a passing thought were each looked for, and not found", 960, 100, <Wd c={DIM} s={26}>Part 1: a bell, a red flower, a thought · vivid, not found</Wd>, { until: "The retreat has a long history" }],
        ["The habit does not give up when it hears this. It retreats", 960, 170, <Wd c={CHALK} s={42} serif>The habit retreats</Wd>, { until: "The retreat has a long history" }],
      ]} />
      {steps.map(([cue, w, col], i) => (
        <At key={w} x={560 + i * 400} y={300 + i * 110} o={ramp(t, c(cue), 0.5) * (1 - ramp(t, floor, 0.5))} s={pop(t, 30, c(cue))}>
          <K c={col} s={28}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["This is not a theory anyone reasons into", 960, 680, <Wd c={DIM} s={26}>not a theory: a habit of seeing, before any thought</Wd>, { until: "The retreat has a long history" }],
        ["The tradition calls it innate grasping", 960, 740, <K c={GOLD} s={26}>innate grasping</K>, { pop: true, until: "The retreat has a long history" }],
        ["because it gives ground without giving up", 960, 800, <Wd c={DIM} s={24}>it gives ground without giving up</Wd>, { until: "The retreat has a long history" }],
        ["The retreat has a long history", 960, 120, <Wd c={CHALK} s={40} serif>The Abhidharma's floor</Wd>],
        ["Partless moments", 520, 320, <K c={ICE} s={28}>partless moments</K>, { pop: true }],
        ["Partless atoms", 960, 320, <K c={ROSE} s={28}>partless atoms</K>, { pop: true }],
        ["among the unconditioned elements, space", 1400, 320, <K c={VIOLET} s={28}>space</K>, { pop: true }],
        ["So here I follow the habit down. In this part, twice", 960, 560, <Wd c={GOLD} s={34} serif>follow it down: time · matter (space: Part 3)</Wd>],
        ["The point is not to disprove time, matter or space", 960, 640, <Wd c={DIM} s={24}>not disproving time, matter or space</Wd>],
        ["A piece of reality, however small or however vast, that is real in itself", 960, 720, <Wd c={CHALK} s={28} serif>looking only for: a piece of reality, real in itself</Wd>],
      ]} />
      <Svg>
        <path d="M300 420 L1620 420" stroke={DIM} strokeWidth={10} strokeDasharray="34 14" opacity={ramp(t, c("These were the floor"), 0.6) * 0.8} />
      </Svg>
      <Items items={[["These were the floor", 960, 460, <Wd c={DIM} s={24}>the floor (the everyday world built on it)</Wd>]]} />
    </AbsoluteFill>
  );
};

const MomentScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Or, and it is a big or, look for that instant");
  let n = 0;
  if (t >= c("Divide it. Its first part is already gone")) n = 1;
  if (t >= c("So divide it again")) n = 2;
  if (t >= c("Each time I look for the present, it splits")) n = 3;
  const point = c("Then perhaps the true instant has no length at all");
  const marks = c("Arising, abiding, and ceasing");
  return (
    <AbsoluteFill>
      <Items items={[["First, a moment", 960, 90, <Wd c={ICE} s={48} serif>1 · A moment</Wd>]]} />
      <Phase to="Or, and it is a big or, look for that instant">
        <At x={960} y={360} o={ramp(t, c("Strike the bell again"), 0.5)}><Bell ring={ramp(t, c("Strike the bell again") + 0.3, 0.4) * (1 - ramp(t, c("Surely, then, the instant is real"), 3))} /></At>
        <Items items={[
          ["Surely, then, the instant is real", 960, 620, <Wd c={DIM} s={28}>surely each instant is truly there…</Wd>],
          ["String the instants together, and you have the ringing", 960, 690, <Wd c={DIM} s={24}>string them together: the ringing</Wd>],
        ]} />
      </Phase>
      <Phase from="Or, and it is a big or, look for that instant" to="Then perhaps the true instant has no length at all">
        <Items items={[
          ["Or, and it is a big or, look for that instant", 960, 180, <Wd c={GOLD} s={36} serif>Or look for that instant.</Wd>],
          ["Does the present moment last for some time, however short", 960, 250, <Wd c={CHALK} s={26}>does it last at all? then: beginning · middle · end</Wd>],
          ["So it is not partless", 960, 300, <K c={WARM} s={24}>not partless</K>, { pop: true }],
          ["And no present is found standing between them", 960, 620, <Wd c={GOLD} s={30} serif>no present found standing between them</Wd>],
        ]} />
        <At x={960} y={450} o={ramp(t, look + 1, 0.5)}><TimeBar n={n} /></At>
      </Phase>
      <Phase from="Then perhaps the true instant has no length at all" to="Arising, abiding, and ceasing">
        <Items items={[
          ["Then perhaps the true instant has no length at all", 960, 200, <Wd c={CHALK} s={32} serif>a point of now, with no length?</Wd>],
          ["Line up as many as you like, and they never add up to a second", 960, 420, <Wd c={DIM} s={26}>· · · · · · · ·  ≠  one second</Wd>],
          ["No tone can ring in it", 960, 490, <K c={WARM} s={24}>no tone can ring in it</K>, { pop: true }],
          ["So either way", 960, 600, <Wd c={CHALK} s={26}>with duration: it splits · without: it adds to nothing</Wd>],
          ["The partless moment is not found", 960, 680, <Wd c={GOLD} s={34} serif>the partless moment is not found</Wd>],
        ]} />
        <At x={960} y={330} o={ramp(t, point + 0.5, 0.5)}><svg width={20} height={20}><circle cx={10} cy={10} r={5} fill={GOLD} /></svg></At>
      </Phase>
      <Phase from="Arising, abiding, and ceasing">
        <Items items={[
          ["Arising, abiding, and ceasing", 560, 230, <SK at="Looked for one by one, none of the three is found" s={26}>arising</SK>],
          ["Arising, abiding, and ceasing", 960, 230, <SK at="Looked for one by one, none of the three is found" s={26}>abiding</SK>, { d: 0.5 }],
          ["Arising, abiding, and ceasing", 1360, 230, <SK at="Looked for one by one, none of the three is found" s={26}>ceasing</SK>, { d: 1 }],
          ["Like a magic show. Like a dream", 960, 340, <Wd c={VIOLET} s={30} serif>like a magic show · like a dream · like a city in the clouds</Wd>],
          ["The dividing is a search, not a discovery of tiny pieces", 960, 470, <Wd c={GOLD} s={32} serif>a search, not a discovery of tiny pieces</Wd>],
          ["It shows only that no present is found standing by itself, at any size", 960, 540, <Wd c={DIM} s={24}>no present found standing by itself, at any size</Wd>],
          ["The clock still keeps time", 960, 680, <K c={GREEN} s={26}>nothing missing: the clock still keeps time</K>, { pop: true }],
        ]} />
      </Phase>
      {t > marks && <span />}
    </AbsoluteFill>
  );
};

const AtomScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const join = c("the atoms must join");
  let mode = 0;
  if (t >= c("If all six touch the same spot, they all occupy one place")) mode = 1;
  if (t >= c("If they touch different places")) mode = 2;
  const press = c("I press the question one step further");
  return (
    <AbsoluteFill>
      <Items items={[["Second, an atom", 960, 90, <Wd c={ROSE} s={48} serif>2 · An atom</Wd>]]} />
      <Phase to="the atoms must join">
        <Items items={[
          ["Pick a petal from the red flower", 960, 220, <K c={ROSE} s={28}>a petal</K>, { pop: true }],
          ["Under a lens, it is cells", 960, 300, <K c={CHALK} s={26}>cells</K>, { pop: true }],
          ["Under a better one, molecules", 960, 370, <K c={CHALK} s={24}>molecules</K>, { pop: true }],
          ["Under the best, the smallest bits physics can name", 960, 430, <K c={CHALK} s={22}>the smallest bits</K>, { pop: true }],
          ["Surely, at the bottom, there is something solid", 960, 560, <Wd c={DIM} s={28}>surely, at the bottom, something solid…</Wd>],
          ["is the brick the whole world is built of", 960, 620, <Wd c={DIM} s={26}>the partless brick of the world</Wd>],
          ["Or, and again it is a big or, look at that brick", 960, 720, <Wd c={GOLD} s={34} serif>Or look at that brick.</Wd>],
          ["with a test I find hard to forget", 960, 790, <Wd c={DIM} s={24}>a test from the Twenty Verses</Wd>],
        ]} />
      </Phase>
      <Phase from="the atoms must join" to="I press the question one step further">
        <At x={640} y={470} o={1}><Atoms mode={mode} p={ramp(t, c("with neighbours on all six sides"), 0.5)} /></At>
        <Items items={[
          ["the atoms must join", 1300, 200, <Wd c={CHALK} s={30} serif>atoms must join</Wd>],
          ["with neighbours on all six sides", 1300, 260, <Wd c={DIM} s={24}>six neighbours: above, below, front, back, left, right</Wd>],
          ["If all six touch the same spot, they all occupy one place", 1300, 380, <Box c={ICE} w={520} title="one spot?" sub="all six in one place" />, { pop: true }],
          ["A mountain would be the size of one atom", 1300, 480, <K c={WARM} s={24}>a mountain the size of one atom</K>, { pop: true }],
          ["If they touch different places", 1300, 600, <Box c={ROSE} w={520} title="different places?" sub="a left, a right, a top…" />, { pop: true }],
          ["Six sides are six parts. The partless atom has parts", 1300, 700, <K c={WARM} s={24}>six sides = six parts</K>, { pop: true }],
        ]} />
      </Phase>
      <Phase from="I press the question one step further">
        <Items items={[
          ["I press the question one step further", 960, 200, <Wd c={CHALK} s={32} serif>one step further: the edge</Wd>, { until: "So either way, no partless piece of matter is found" }],
          ["And this step is mine, not his", 960, 260, <K c={GOLD} s={22}>my own step</K>, { pop: true, until: "So either way, no partless piece of matter is found" }],
          ["is the edge part of this atom, or of that one", 960, 340, <Wd c={DIM} s={26}>whose is the edge? with width: two sides · without: nowhere</Wd>, { until: "So either way, no partless piece of matter is found" }],
          ["So either way, no partless piece of matter is found", 960, 220, <Wd c={GOLD} s={34} serif>no partless piece of matter is found</Wd>],
          ["kept the mind as what is really there", 960, 380, <SK at="the mind is looked for the same way, and it is not found either" s={28}>the mind as the floor</SK>],
          ["the mind is looked for the same way, and it is not found either", 960, 470, <Wd c={VIOLET} s={28}>the mind, looked for the same way, is not found</Wd>],
          ["Mind and matter fail together", 960, 550, <K c={GOLD} s={26}>mind and matter fail together · neither is the floor</K>, { pop: true }],
          ["Bricks still make walls", 960, 690, <K c={GREEN} s={26}>nothing missing: bricks still make walls</K>, { pop: true }],
        ]} />
        <At x={960} y={440} o={ramp(t, press + 0.6, 0.5) * (1 - ramp(t, c("So either way, no partless piece of matter is found"), 0.5))}>
          <svg width={300} height={120} viewBox="0 0 300 120"><circle cx={90} cy={60} r={55} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={3} /><circle cx={210} cy={60} r={55} fill={`${ICE}22`} stroke={ICE} strokeWidth={3} /><path d="M150 10 L150 110" stroke={GOLD} strokeWidth={4} strokeDasharray="6 6" /></svg>
        </At>
      </Phase>
      {t > join && <span />}
    </AbsoluteFill>
  );
};

const TwoScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Two searches, one result so far", 960, 200, <Wd c={GOLD} s={40} serif>Two searches, one result so far</Wd>],
      ["Time breaks into before and after", 640, 400, <Box c={ICE} w={480} title="time" sub="before · after" />, { pop: true }],
      ["Matter breaks into this side and that side", 1280, 400, <Box c={ROSE} w={480} title="matter" sub="this side · that side" />, { pop: true }],
      ["Neither is the floor the habit wanted", 960, 600, <Wd c={CHALK} s={30} serif>neither is the floor the habit wanted</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. Listen to the bell's tone as it fades", 400, 260, <Box c={ICE} w={500} title="Experience" sub="a still moment? a partless speck?" />, { pop: true }],
      ["Never a floor underneath", 400, 400, <Wd c={CHALK} s={24}>never a floor underneath</Wd>],
      ["By logic. A partless moment either lasts, and splits", 960, 260, <Box c={VIOLET} w={500} title="Logic" sub="it splits, or adds to nothing; one spot, or parts" />, { pop: true }],
      ["Every candidate undoes itself the moment it is picked out", 960, 400, <Wd c={CHALK} s={24}>picked out, each undoes itself</Wd>],
      ["By working. The tone fades because the bronze stops trembling", 1520, 260, <Box c={TEAL} w={500} title="Working" sub="the tone fades · the wall stands" />, { pop: true }],
      ["Order never needed a floor", 960, 540, <Wd c={GOLD} s={38} serif>Order never needed a floor.</Wd>],
      ["So the floor view is not the truer one", 960, 640, <Wd c={CHALK} s={28} serif>not the truer view: the default one</Wd>],
      ["What fails is only a piece of reality, at the bottom, that is real in itself", 960, 720, <Wd c={DIM} s={24}>only "real in itself, at the bottom" fails</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("I look for that room");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 6, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 2 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 2</Wd>],
        ["In Part 3, the habit makes its last stand", 960, 260, <Wd c={DIM} s={26}>next, Part 3: Space</Wd>],
        ["Surely space itself is real", 960, 380, <Wd c={TEAL} s={34} serif>surely space itself is real…</Wd>],
        ["The one still room that everything sits in", 960, 450, <Wd c={DIM} s={26}>the one still room that everything sits in</Wd>],
        ["I look for that room", 960, 560, <K c={GOLD} s={26}>looking for that room</K>, { pop: true }],
      ]} />
      <At x={960} y={720} o={ramp(t, c("The one still room that everything sits in"), 0.8) * 0.8}><Courtyard /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["When the thing is not found, where does the habit go next", "dusk", <OpenScene />],
    ["In Part 1, a bell, a red flower and a passing thought were each looked for, and not found", "search", <RetreatScene />],
    ["First, a moment", "temple", <MomentScene />],
    ["Second, an atom", "rose", <AtomScene />],
    ["Two searches, one result so far", "ghost", <TwoScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 2 of the Dependent Arising series", "night", <CloseScene />],
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
