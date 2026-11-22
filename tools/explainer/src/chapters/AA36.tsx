// Bonus video: Dependent Arising Part 2: The Illusion of the Given (AA36).
// (Script: new-documents/after-anatta/aa36-the-illusion-of-the-given-script.md, from EBooks
// Bonus Articles/the-illusion-of-the-given-part-2, draft of 2026-11-22; approved by the owner 2026-11-22.)
// Arc: one bowl seen four ways -> Part 1 recap: one world, many pictures? that belief is the given -> three contrasts,
// then a test -> the bowl as it feels (neutral stuff under glasses) -> the bowl formed (seen, seer, channel designated
// together; the hidden liquid: features or none; wetness kept as a word, struck as a floor) -> the tick as it feels
// -> the tick formed (not in its world, yet carried; channels and degrees; dark matter, neutrino; solidity forms)
// -> the box as it feels -> space formed (a field; space and its mark designated together) -> "But we agree":
// conventional truth, jaundice within a kind, the ghost not a jaundiced human, the circle with no outside judge,
// Vasubandhu's mind floor struck, mind and pus together, a working reference point -> which holds: experience, logic,
// working -> verdict and compassion -> Part 2; next Part 3 (Rovelli, Barad).
// Stance: the neutral liquid, the hidden box and the mind as floor are drawn only dashed, to be struck; channels and
// the reference point are never drawn as a layer under things. Cue phrases avoid respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "One bowl of liquid", "A human sees water", "A hungry ghost sees burning pus", "A fish meets its home",
  "A god meets nectar", "Which one is really in the bowl",
  "I am John Tan, known as Thusness",
  // recap and the given
  "In Part 1, a human, a bat, a bee and an ant stood before the same mountain", "Their worlds did not match",
  "Surely something is there underneath", "One finished world", "only sees it through its own glasses",
  "One world, many pictures of it", "That belief is what I call the given",
  "It is not a theory I hold", "The world is already there, complete", "And seeing only reports it",
  "So again, I will not argue first", "three more times", "Then we can ask which one holds",
  // bowl, as it feels
  "First, a bowl", "is a being consumed by craving and lack", "it sees pus and blood",
  "Surely, then, something sits in the bowl before any of them looks", "Call it H two O", "Bare matter",
  "Neutral stuff", "each kind of being puts its own glasses on it",
  "The water is real", "The pus and the nectar are just ways of seeing it",
  // bowl, formed
  "Or, and it is a big or, look at how each of these is formed",
  "The water forms with a human body", "The pus forms with a ghost's craving", "The home forms with gills and fins",
  "The thing seen, the one who sees, and the channel of meeting are designated together",
  "None of them is a finished layer underneath the others",
  "Then what is in the bowl before anyone meets it", "If it has features of its own",
  "Its features should show through", "If it has no features at all",
  "Nothing with no qualities can set off the taste of water",
  "A careful mind falls back one step", "Just wetness", "But I have never met wetness on its own",
  "It only ever shows up as this drinkable water", "Wetness by itself is an idea drawn from those meetings",
  "As a working word for comparing notes, wetness is fine", "As a hidden floor",
  "And even seen this way, nothing is missing. I still drink the water",
  // tick, as it feels
  "Second, a tick at a pool", "a tick lives in a world of three signals", "The smell of mammal sweat",
  "The warmth of a body", "And hair", "A clear pool of spring water sends none of them",
  "Surely the pool is still there for the tick", "The tick is simply blind to it",
  // tick, formed
  "Or, and again it is a big or, look at how the meeting is formed",
  "The pool has no place in the tick's world", "It is not hidden from the tick", "It never forms there",
  "Yet if the tick falls in", "So the pool is not nothing to the tick either",
  "The tick is cut off from the channels of sight and recognition", "And it is fully joined to the water's surface",
  "Contact runs along channels", "And it comes in degrees",
  "Physics shows the same", "Dark matter", "Yet the Earth's mass still bends its path",
  "A neutrino passes through a wall of lead", "For one system, the lead is a wall", "it is almost open space",
  "Solidity is not stored in the rock", "It is a resistance that forms",
  "So the choice is not between a hidden object out there, and nothing at all", "depends on which channels meet",
  "The current still carries the tick",
  // box, as it feels
  "Third, the box", "Why does the given feel so certain", "Space is an empty box",
  "I put a solid object in the middle of it", "I put observers around it", "or is fooled",
  "Surely the box, at least, is given",
  // box, formed
  "Or, and it is the biggest or, look at how space itself is formed", "spacetime is not an empty stage",
  "It is a field that bends with mass", "asked whether space could exist before its own mark",
  "It cannot", "Space and what is in it are designated together",
  "Without the box, the puzzle of the bowl loses its grip", "There is no fixed place where the one real liquid sits",
  "Space, time, the one who looks, and what is looked at all come together", "None of them contains the rest",
  "I still walk across the room",
  // but we agree
  "But we agree", "That is the strongest reason for the given", "You and I both see water in the bowl",
  "Does that not prove one real liquid behind us both", "answered no",
  "Shared, reliable agreement is not proof of a hidden floor", "It is what conventional truth is",
  "healthy senses agree, and correct each other", "A human with jaundice sees a white conch shell as yellow",
  "Other humans see it white", "the jaundiced eye is mistaken",
  "But the hungry ghost is not a jaundiced human", "its senses work normally",
  "For it, the liquid really does work as pus",
  "Is that circular", "Yes. It is a circle", "a judge standing outside every view", "No such judge is found",
  "Inside the circle, mistakes are still caught", "A healthy eye corrects a jaundiced one",
  "only a correction from nowhere",
  "The bowl story did not begin with", "used the ghosts to argue that there are no outer things at all",
  "Shared karma, ripening in the mind", "That makes the mind the floor instead",
  "turned the story around", "neither is the mind that sees it", "They rise and fall together",
  "It shows that neither the world nor the mind is the floor",
  "What is left in the bowl, then", "A working reference point", "It lets different beings' appearances be lined up",
  "Its job is to coordinate the views, not to sit underneath them",
  // which holds
  "Two ways of seeing, three times over, and agreement tested as well", "Which carries more valid truth",
  "By experience. By logic. And by how things work",
  // experience
  "By experience. Look into a glass of water", "What is met", "Coolness", "Clearness", "Wetness on the lip",
  "The name", "At no point do I meet a neutral liquid behind them", "That liquid is never found", "It is supplied",
  "Then turn around, and look for a mind holding the water inside it", "That is not found either",
  "Mind and object come together",
  // logic
  "By logic. A given world would have to be like something", "they should show through to every being",
  "They do not", "If it has none, it cannot set off any meeting at all",
  "undoes itself the moment it is picked out", "Picking it out needs contrast, a channel and a name",
  // working
  "By working. The given view says", "But what is fixed cannot change", "And what cannot change cannot act",
  "The formed view explains the working fully", "Barley seeds grow barley", "Fire burns",
  "The current carries the tick", "Humans agree that this is water", "These are dependently arisen patterns",
  "Order never needed a floor",
  // verdict
  "So the given is not the truer view", "It is the default one", "It carries the weight of habit, and of language",
  "quietly sets up one object behind every view", "The formed view carries experience and logic both",
  "None of this makes my everyday claims false", "The water is water", "What fails is only the extra claim",
  "a finished world underneath, waiting to be seen",
  // compassion
  "And one thing matters more than the argument", "If the ghost's pus is truly pus for the ghost",
  "No single view owns the real world", "So no being's lived world can be brushed aside",
  "Seeing through the given takes nothing away from another's pain", "Or from the wish to ease it",
  // next
  "This is Part 2 of the Dependent Arising series", "In Part 3, Measured, or Formed",
  "Surely a measurement, at least, reads a world that is already there", "Carlo Rovelli and Karen Barad",
  "and where I part from them",
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
  water: { a: "rgba(40,100,150,0.5)", b: "rgba(80,60,150,0.4)", c: "rgba(40,130,140,0.34)" },
  ember: { a: "rgba(150,70,50,0.42)", b: "rgba(70,50,140,0.42)", c: "rgba(150,110,50,0.3)" },
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
/** A chip struck through at a cue (plus an optional delay). */
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
/** Something struck through at a cue. */
const Struck: React.FC<{ at: string; d?: number; children: React.ReactNode }> = ({ at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}>{children}<Strike at={cue(at) + d} /></div>;
};

// ---------------------------------------------------------------- drawings
/** A bowl of liquid; `liq` colours the liquid, `dashed` makes it an assumed outline. */
const Bowl: React.FC<{ p: number; liq?: string; w?: number; dashed?: boolean }> = ({ p, liq = ICE, w = 320, dashed }) => (
  <svg width={w} height={w * 0.56} viewBox="0 0 320 180" style={{ overflow: "visible" }}>
    {!dashed && <path d="M28 58 Q160 196 292 58 Z" fill={`${liq}33`} opacity={p} />}
    <DrawPath d="M20 50 Q160 200 300 50" p={p} color={dashed ? DIM : CHALK} width={5} len={500} />
    <DrawPath d="M20 50 L300 50" p={p} color={DIM} width={3} len={300} />
    <path d="M40 62 Q160 84 280 62" fill="none" stroke={dashed ? DIM : liq} strokeWidth={4} strokeDasharray={dashed ? "8 8" : undefined} opacity={ramp(p, 0.5, 0.5)} />
  </svg>
);

/** A glass of water. */
const Glass: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 70 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <path d="M8 30 L14 94 L56 94 L62 30 Z" fill="rgba(169,221,242,0.3)" />
    <path d="M4 4 L14 94 L56 94 L66 4" fill="none" stroke={CHALK} strokeWidth={3} />
    <path d="M8 30 Q35 36 62 30" fill="none" stroke={ICE} strokeWidth={3} />
  </svg>
);

/** A pair of glasses (the "glasses" each being puts on). */
const Specs: React.FC<{ col?: string; size?: number }> = ({ col = CHALK, size = 120 }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 120 48" style={{ overflow: "visible" }}>
    <circle cx={30} cy={26} r={18} fill="none" stroke={col} strokeWidth={4} />
    <circle cx={90} cy={26} r={18} fill="none" stroke={col} strokeWidth={4} />
    <path d="M48 24 Q60 16 72 24" fill="none" stroke={col} strokeWidth={4} />
  </svg>
);

/** A tick. */
const Tick: React.FC<{ size?: number }> = ({ size = 90 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${WARM})` }}>
    {[-1, 1].map((sd) => [30, 45, 60, 72].map((y, i) => (
      <path key={`${sd}${i}`} d={`M${50 + sd * 14} ${y} Q${50 + sd * 34} ${y - 8} ${50 + sd * 42} ${y + 10}`} fill="none" stroke={WARM} strokeWidth={4} />
    )))}
    <ellipse cx={50} cy={56} rx={20} ry={26} fill="rgba(217,135,108,0.55)" stroke={WARM} strokeWidth={3} />
    <circle cx={50} cy={26} r={9} fill={WARM} />
  </svg>
);

/** A pool with moving ripples. */
const Pool: React.FC<{ p: number; w?: number }> = ({ p, w = 520 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={w * 0.36} viewBox="0 0 520 190" style={{ overflow: "visible", opacity: p }}>
      <ellipse cx={260} cy={95} rx={250} ry={85} fill="rgba(169,221,242,0.22)" stroke={ICE} strokeWidth={4} />
      {[0, 1, 2].map((i) => {
        const k = (t * 0.25 + i / 3) % 1;
        return <ellipse key={i} cx={260} cy={95} rx={40 + k * 190} ry={12 + k * 62} fill="none" stroke={ICE} strokeWidth={2} opacity={1 - k} />;
      })}
    </svg>
  );
};

/** A plain figure (an observer). */
const Person: React.FC<{ col?: string; size?: number }> = ({ col = CHALK, size = 110 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible" }}>
    <circle cx={30} cy={18} r={13} fill="none" stroke={col} strokeWidth={4} />
    <path d="M30 32 L30 66 M30 42 L10 58 M30 42 L50 58 M30 66 L14 96 M30 66 L46 96" fill="none" stroke={col} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

/** A wireframe box (the container of space); `bend` 0..1 warps it into a field. */
const SpaceBox: React.FC<{ p: number; bend?: number; dashed?: boolean }> = ({ p, bend = 0, dashed }) => {
  const col = dashed ? DIM : ICE;
  const n = 7;
  const lines: string[] = [];
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    // horizontal-ish grid lines on the floor, sagging toward the middle as it bends
    let d = "";
    for (let j = 0; j <= 20; j++) {
      const v = j / 20;
      const x = 60 + v * 480, y = 120 + u * 220;
      const sag = bend * 70 * Math.exp(-(((v - 0.5) ** 2) + ((u - 0.5) ** 2)) * 9);
      d += `${j ? "L" : "M"}${x.toFixed(1)} ${(y + sag).toFixed(1)} `;
    }
    lines.push(d);
    let e = "";
    for (let j = 0; j <= 20; j++) {
      const v = j / 20;
      const x = 60 + u * 480, y = 120 + v * 220;
      const sag = bend * 70 * Math.exp(-(((u - 0.5) ** 2) + ((v - 0.5) ** 2)) * 9);
      e += `${j ? "L" : "M"}${x.toFixed(1)} ${(y + sag).toFixed(1)} `;
    }
    lines.push(e);
  }
  return (
    <svg width={600} height={420} viewBox="0 0 600 420" style={{ overflow: "visible", opacity: p }}>
      {lines.map((d, i) => <path key={i} d={d} fill="none" stroke={col} strokeWidth={1.6} opacity={0.6} strokeDasharray={dashed ? "6 6" : undefined} />)}
      <path d="M60 120 L60 0 M540 120 L540 0 M60 340 L60 220 M540 340 L540 220 M60 0 L540 0" fill="none" stroke={col}
        strokeWidth={3} strokeDasharray={dashed ? "8 8" : undefined} opacity={1 - bend} />
    </svg>
  );
};

/** A conch shell, white or yellow. */
const Conch: React.FC<{ col: string }> = ({ col }) => (
  <svg width={150} height={110} viewBox="0 0 150 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${col})` }}>
    <path d="M10 60 Q30 10 90 16 Q140 24 140 56 Q120 70 96 64 Q80 96 40 96 Q14 90 10 60 Z" fill={`${col}55`} stroke={col} strokeWidth={4} />
    <path d="M50 40 Q80 30 110 44 M44 60 Q78 52 112 58" fill="none" stroke={col} strokeWidth={2.5} />
  </svg>
);

/** A small eye. */
const Eye: React.FC<{ col?: string }> = ({ col = CHALK }) => (
  <svg width={70} height={40} viewBox="0 0 70 40"><path d="M4 20 Q35 -6 66 20 Q35 46 4 20 Z" fill="none" stroke={col} strokeWidth={3} /><circle cx={35} cy={20} r={8} fill={col} /></svg>
);

/** A balance beam; `tilt` -1..1 (positive: right side down). */
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
const SEEN: [string, string, string, number, number][] = [
  ["A human sees water", "human · water", ICE, 520, 560],
  ["A hungry ghost sees burning pus", "hungry ghost · burning pus", WARM, 1400, 560],
  ["A fish meets its home", "fish · its home", TEAL, 520, 720],
  ["A god meets nectar", "god · nectar", GOLD, 1400, 720],
];

const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("One bowl of liquid");
  return (
    <AbsoluteFill>
      <At x={960} y={330} o={ramp(t, s, 0.6)}><Bowl p={ramp(t, s, 1.4)} w={420} /></At>
      {SEEN.map(([cue, label, col, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5) * (1 - ramp(t, c("I am John Tan, known as Thusness"), 0.5))} s={pop(t, 30, c(cue))}><K c={col} s={28}>{label}</K></At>
      ))}
      <Items items={[
        ["Which one is really in the bowl", 960, 120, <Wd c={GOLD} s={48} serif>Which one is really in the bowl?</Wd>],
        ["I am John Tan, known as Thusness", 960, 640, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 760, <Wd c={CHALK} s={32} serif>Dependent Arising · Part 2</Wd>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const GivenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const given = c("That belief is what I call the given");
  const three = c("three more times");
  const who: [string, string][] = [["human", CHALK], ["bat", VIOLET], ["bee", GOLD], ["ant", WARM]];
  return (
    <AbsoluteFill>
      {t < given && (
        <>
          <Items items={[
            ["In Part 1, a human, a bat, a bee and an ant stood before the same mountain", 960, 110, <Wd c={DIM} s={30}>Part 1 · one mountain, four creatures</Wd>],
            ["Their worlds did not match", 960, 180, <Wd c={CHALK} s={36} serif>their worlds did not match</Wd>],
            ["Surely something is there underneath", 960, 640, <div style={{ opacity: 0.7 }}><svg width={900} height={60} viewBox="0 0 900 60"><path d="M0 30 L900 30" stroke={DIM} strokeWidth={8} strokeDasharray="24 12" /></svg></div>],
            ["One finished world", 960, 700, <K c={DIM} s={28}>one finished world underneath?</K>, { pop: true }],
            ["One world, many pictures of it", 960, 800, <Wd c={GOLD} s={38} serif>one world, many pictures of it?</Wd>],
          ]} />
          {who.map(([w, col], i) => (
            <React.Fragment key={w}>
              <At x={420 + i * 360} y={380} o={ramp(t, c("In Part 1, a human, a bat, a bee and an ant stood before the same mountain") + 1 + i * 0.4, 0.5)}><Eye col={col} /></At>
              <At x={420 + i * 360} y={440} o={ramp(t, c("In Part 1, a human, a bat, a bee and an ant stood before the same mountain") + 1 + i * 0.4, 0.5)}><K c={col} s={24}>{w}</K></At>
              <At x={420 + i * 360} y={540} o={ramp(t, c("only sees it through its own glasses") + i * 0.3, 0.5)}><Specs col={col} size={110} /></At>
            </React.Fragment>
          ))}
        </>
      )}
      {t >= given && (
        <>
          <Items items={[
            ["That belief is what I call the given", 960, 140, <Wd c={GOLD} s={56} serif>the given</Wd>, { until: "So again, I will not argue first" }],
            ["It is not a theory I hold", 960, 240, <Wd c={DIM} s={28}>not a theory: how things seem, before any thought</Wd>, { until: "So again, I will not argue first" }],
            ["The world is already there, complete", 960, 360, <Box c={ROSE} w={720} title="already there, complete" />, { pop: true, until: "So again, I will not argue first" }],
            ["And seeing only reports it", 960, 480, <K c={ROSE} s={28}>seeing only reports it</K>, { pop: true, until: "So again, I will not argue first" }],
            ["So again, I will not argue first", 960, 260, <Wd c={CHALK} s={36} serif>No argument first</Wd>],
            ["three more times", 500, 450, <Box c={ICE} w={360} title="a bowl" />, { pop: true }],
            ["three more times", 960, 450, <Box c={WARM} w={360} title="a tick at a pool" />, { pop: true, d: 0.6 }],
            ["three more times", 1420, 450, <Box c={VIOLET} w={360} title="the box" />, { pop: true, d: 1.2 }],
            ["Then we can ask which one holds", 960, 650, <Wd c={GOLD} s={40} serif>then: which one holds?</Wd>],
          ]} />
          <At x={0} y={0} o={three * 0}><div /></At>
        </>
      )}
    </AbsoluteFill>
  );
};

const BowlFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("First, a bowl");
  const sure = c("Surely, then, something sits in the bowl before any of them looks");
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, a bowl", 960, 100, <Wd c={ICE} s={48} serif>1 · A bowl, as it feels</Wd>],
        ["is a being consumed by craving and lack", 1460, 260, <K c={WARM} s={26}>hungry ghost: craving and lack</K>, { until: "Surely, then, something sits in the bowl before any of them looks" }],
        ["it sees pus and blood", 1460, 330, <Wd c={DIM} s={26}>where I see water, it sees pus</Wd>, { until: "Surely, then, something sits in the bowl before any of them looks" }],
      ]} />
      <At x={960} y={330} o={ramp(t, s, 0.6)}><Bowl p={ramp(t, s, 1.2)} w={380} /></At>
      {/* the assumed neutral stuff, with four pairs of glasses */}
      <At x={960} y={520} o={ramp(t, sure, 0.6)}><div style={{ width: 760, height: 80, borderRadius: 40, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Wd c={DIM} s={28}>something, before anyone looks</Wd></div></At>
      <Items items={[
        ["Call it H two O", 620, 620, <K c={DIM} s={26}>H₂O</K>, { pop: true }],
        ["Bare matter", 960, 620, <K c={DIM} s={26}>bare matter</K>, { pop: true }],
        ["Neutral stuff", 1300, 620, <K c={DIM} s={26}>neutral stuff</K>, { pop: true }],
      ]} />
      {SEEN.map(([cue, , col], i) => (
        <At key={cue} x={480 + i * 320} y={730} o={ramp(t, c("each kind of being puts its own glasses on it") + i * 0.35, 0.5)}><Specs col={col} size={100} /></At>
      ))}
      <Items items={[
        ["The water is real", 480, 250, <K c={ICE} s={28}>the water is real</K>, { pop: true }],
        ["The pus and the nectar are just ways of seeing it", 480, 330, <Wd c={DIM} s={24}>pus, nectar: just ways of seeing it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PAIRS: [string, string, string, string, number][] = [
  ["The water forms with a human body", "water", "a human body, thirst, tongue", ICE, 300],
  ["The pus forms with a ghost's craving", "pus", "a ghost's craving", WARM, 420],
  ["The home forms with gills and fins", "a home", "gills and fins", TEAL, 540],
];

const BowlFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ask = c("Then what is in the bowl before anyone meets it");
  const wet = c("A careful mind falls back one step");
  const miss = c("And even seen this way, nothing is missing. I still drink the water");
  const phase = t < ask ? 0 : t < wet ? 1 : t < miss ? 2 : 3;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and it is a big or, look at how each of these is formed", 960, 100, <Wd c={GOLD} s={46} serif>Or: how each of these is formed</Wd>, { until: "Then what is in the bowl before anyone meets it" }],
      ]} />
      {phase === 0 && (
        <>
          {PAIRS.map(([cue, a, b, col, y]) => (
            <React.Fragment key={cue}>
              <At x={620} y={y} o={ramp(t, c(cue), 0.5)} s={pop(t, 30, c(cue))}><K c={col} s={30}>{a}</K></At>
              <Svg><line x1={760} y1={y} x2={1060} y2={y} stroke={col} strokeWidth={3} strokeDasharray="8 8" opacity={ramp(t, c(cue) + 0.4, 0.5)} /></Svg>
              <At x={1300} y={y} o={ramp(t, c(cue) + 0.6, 0.5)}><K c={CHALK} s={26}>{b}</K></At>
            </React.Fragment>
          ))}
          <Items items={[
            ["The thing seen, the one who sees, and the channel of meeting are designated together", 560, 680, <K c={ICE} s={26}>the thing seen</K>, { pop: true }],
            ["The thing seen, the one who sees, and the channel of meeting are designated together", 960, 680, <K c={CHALK} s={26}>the one who sees</K>, { pop: true, d: 0.9 }],
            ["The thing seen, the one who sees, and the channel of meeting are designated together", 1360, 680, <K c={TEAL} s={26}>the channel</K>, { pop: true, d: 1.8 }],
            ["The thing seen, the one who sees, and the channel of meeting are designated together", 960, 760, <Wd c={GOLD} s={32} serif>designated together</Wd>, { d: 2.6 }],
            ["None of them is a finished layer underneath the others", 960, 830, <Wd c={DIM} s={24}>none is a finished layer under the others</Wd>],
          ]} />
        </>
      )}
      {phase === 1 && (
        <>
          <Items items={[
            ["Then what is in the bowl before anyone meets it", 960, 110, <Wd c={CHALK} s={40} serif>What is in the bowl before anyone meets it?</Wd>],
            ["Then what is in the bowl before anyone meets it", 960, 300, <Bowl p={1} w={300} dashed />, { d: 0.5 }],
            ["If it has features of its own", 520, 480, <Box c={ICE} w={620} title="features of its own: water" sub="then why does the ghost meet pus?" />, { pop: true }],
            ["Its features should show through", 520, 620, <K c={WARM} s={24}>they should show through · they do not</K>, { pop: true }],
            ["If it has no features at all", 1400, 480, <Box c={DIM} w={620} title="no features at all" sub="then not what anyone meets" />, { pop: true }],
            ["Nothing with no qualities can set off the taste of water", 1400, 620, <K c={WARM} s={24}>no qualities: sets off nothing</K>, { pop: true }],
          ]} />
        </>
      )}
      {phase === 2 && (
        <Items items={[
          ["A careful mind falls back one step", 960, 110, <Wd c={CHALK} s={38} serif>One step back: "just wetness"</Wd>],
          ["Just wetness", 960, 260, <SK c={DIM} s={34} at="Wetness by itself is an idea drawn from those meetings" d={1}>wetness, on its own</SK>, { pop: true }],
          ["But I have never met wetness on its own", 960, 350, <Wd c={DIM} s={26}>never met on its own</Wd>],
          ["It only ever shows up as this drinkable water", 560, 450, <K c={ICE} s={26}>this drinkable water</K>, { pop: true }],
          ["It only ever shows up as this drinkable water", 960, 450, <K c={WARM} s={26}>this burning pus</K>, { pop: true, d: 1.4 }],
          ["It only ever shows up as this drinkable water", 1360, 450, <K c={TEAL} s={26}>this home for a fish</K>, { pop: true, d: 2.4 }],
          ["Wetness by itself is an idea drawn from those meetings", 960, 560, <Wd c={CHALK} s={28}>an idea drawn from the meetings, not a stuff under them</Wd>],
          ["As a working word for comparing notes, wetness is fine", 560, 690, <Box c={GREEN} w={560} title="a working word" sub="fine for comparing notes" />, { pop: true }],
          ["As a hidden floor", 1360, 690, <Struck at="As a hidden floor" d={1.6}><Box c={WARM} w={560} title="a hidden floor" sub="an essence in new clothes" /></Struck>, { pop: true }],
        ]} />
      )}
      {phase === 3 && (
        <>
          <Items items={[
            ["And even seen this way, nothing is missing. I still drink the water", 960, 160, <Wd c={GOLD} s={48} serif>Nothing is missing.</Wd>],
            ["And even seen this way, nothing is missing. I still drink the water", 960, 680, <K c={GREEN} s={28}>I still drink it · it still quenches my thirst</K>, { d: 1 }],
          ]} />
          <At x={960} y={450} o={ramp(t, miss, 0.6)}><Glass size={220} /></At>
        </>
      )}
    </AbsoluteFill>
  );
};

const TickFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Second, a tick at a pool");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Second, a tick at a pool", 960, 100, <Wd c={WARM} s={48} serif>2 · A tick at a pool, as it feels</Wd>],
        ["a tick lives in a world of three signals", 480, 220, <Wd c={CHALK} s={30}>a world of three signals</Wd>],
        ["The smell of mammal sweat", 480, 300, <K c={GOLD} s={26}>the smell of sweat</K>, { pop: true }],
        ["The warmth of a body", 480, 370, <K c={ROSE} s={26}>the warmth of a body</K>, { pop: true }],
        ["And hair", 480, 440, <K c={CHALK} s={26}>hair</K>, { pop: true }],
        ["A clear pool of spring water sends none of them", 1300, 640, <Wd c={DIM} s={26}>the pool sends none of them</Wd>],
        ["Surely the pool is still there for the tick", 1300, 200, <Wd c={GOLD} s={36} serif>surely the pool is still there</Wd>],
        ["Surely the pool is still there for the tick", 1300, 270, <K c={ROSE} s={26}>undeniably objective</K>, { d: 1.2 }],
        ["The tick is simply blind to it", 1300, 340, <K c={DIM} s={26}>the tick is simply blind to it</K>, { pop: true }],
      ]} />
      <At x={480} y={600} o={ramp(t, s, 0.6)}><Tick size={120} /></At>
      <At x={1300} y={500} o={ramp(t, c("A clear pool of spring water sends none of them"), 0.6)}><Pool p={1} w={480} /></At>
    </AbsoluteFill>
  );
};

const TickFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const phys = c("Physics shows the same");
  const choice = c("So the choice is not between a hidden object out there, and nothing at all");
  const fall = c("Yet if the tick falls in");
  const k = ramp(t, fall, 2.6);
  const phase = t < phys ? 0 : t < choice ? 1 : 2;
  // the tick: on the bank, then into the pool and drifting along
  const tx = 560 + (t < fall ? 0 : k * 560 + Math.max(0, t - fall - 2.6) * 6);
  const ty = 470 + (t < fall ? 0 : Math.sin(Math.min(k, 0.5) * Math.PI) * 120 + Math.sin(t * 2) * 4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and again it is a big or, look at how the meeting is formed", 960, 100, <Wd c={GOLD} s={44} serif>Or: how the meeting is formed</Wd>, { until: "Physics shows the same" }],
      ]} />
      {phase === 0 && (
        <>
          {/* the tick's world: a circle of three signals */}
          <At x={560} y={420} o={ramp(t, c("The pool has no place in the tick's world"), 0.6) * (1 - ramp(t, fall, 0.6))}>
            <div style={{ width: 380, height: 380, borderRadius: "50%", border: `3px solid ${WARM}`, background: "rgba(217,135,108,0.08)" }} />
          </At>
          <Items items={[
            ["The pool has no place in the tick's world", 560, 250, <K c={WARM} s={22}>sweat · warmth · hair</K>, { until: "Yet if the tick falls in" }],
            ["It is not hidden from the tick", 1360, 250, <SK c={DIM} s={26} at="It never forms there">hidden from the tick</SK>],
            ["It never forms there", 1360, 320, <K c={GOLD} s={26}>it never forms there</K>, { pop: true }],
            ["So the pool is not nothing to the tick either", 960, 640, <Wd c={CHALK} s={32} serif>not nothing to the tick either</Wd>],
            ["The tick is cut off from the channels of sight and recognition", 600, 740, <SK c={DIM} s={24} at="The tick is cut off from the channels of sight and recognition" d={1.4}>sight, recognition</SK>],
            ["And it is fully joined to the water's surface", 1320, 740, <K c={GREEN} s={24}>surface and current: fully joined</K>, { pop: true }],
            ["Contact runs along channels", 960, 820, <Wd c={GOLD} s={30} serif>contact runs along channels…</Wd>],
            ["And it comes in degrees", 960, 820, <Wd c={GOLD} s={30} serif>…and comes in degrees</Wd>, { d: 0.2, o: 0 }],
          ]} />
          <At x={1240} y={500} o={ramp(t, c("The pool has no place in the tick's world"), 0.6)}><Pool p={1} w={520} /></At>
          <At x={tx} y={ty} o={ramp(t, c("Or, and again it is a big or, look at how the meeting is formed"), 0.6)}><Tick size={90} /></At>
        </>
      )}
      {phase === 1 && (
        <>
          <Items items={[
            ["Physics shows the same", 960, 100, <Wd c={CHALK} s={40} serif>Physics shows the same</Wd>],
            ["Dark matter", 520, 210, <K c={VIOLET} s={28}>dark matter</K>, { pop: true }],
            ["Dark matter", 520, 520, <Wd c={DIM} s={22}>passes through: no light, no bump</Wd>, { d: 1.5 }],
            ["Yet the Earth's mass still bends its path", 520, 590, <K c={GREEN} s={22}>yet gravity bends its path</K>, { pop: true }],
            ["A neutrino passes through a wall of lead", 1400, 210, <K c={TEAL} s={28}>a neutrino, a wall of lead</K>, { pop: true }],
            ["For one system, the lead is a wall", 1400, 520, <Wd c={DIM} s={22}>for one system: a wall</Wd>],
            ["it is almost open space", 1400, 590, <Wd c={DIM} s={22}>for another: almost open space</Wd>],
            ["Solidity is not stored in the rock", 960, 700, <SK c={DIM} s={28} at="It is a resistance that forms">solidity, stored in the rock</SK>],
            ["It is a resistance that forms", 960, 790, <Wd c={GOLD} s={30} serif>a resistance that forms when the right coupling meets</Wd>],
          ]} />
          {/* the Earth with a bent path through it */}
          <At x={520} y={380} o={ramp(t, c("Dark matter"), 0.6)}>
            <svg width={360} height={200} viewBox="0 0 360 200" style={{ overflow: "visible" }}>
              <circle cx={180} cy={100} r={70} fill="rgba(95,211,198,0.2)" stroke={TEAL} strokeWidth={3} />
              <DrawPath d="M0 40 Q180 130 360 60" p={ramp(t, c("Dark matter") + 0.4, 2)} color={VIOLET} width={4} len={420} />
            </svg>
          </At>
          {/* the lead wall with a neutrino passing */}
          <At x={1400} y={380} o={ramp(t, c("A neutrino passes through a wall of lead"), 0.6)}>
            <svg width={360} height={200} viewBox="0 0 360 200" style={{ overflow: "visible" }}>
              <rect x={140} y={10} width={80} height={180} fill="rgba(138,132,117,0.45)" stroke={DIM} strokeWidth={3} />
              <circle cx={((t - c("A neutrino passes through a wall of lead")) * 90) % 380 - 10} cy={100} r={8} fill={TEAL} />
            </svg>
          </At>
        </>
      )}
      {phase === 2 && (
        <>
          <Items items={[
            ["So the choice is not between a hidden object out there, and nothing at all", 520, 260, <SK c={DIM} s={30} at="depends on which channels meet">a hidden object out there</SK>],
            ["So the choice is not between a hidden object out there, and nothing at all", 1400, 260, <SK c={DIM} s={30} at="depends on which channels meet">nothing at all</SK>, { d: 1 }],
            ["depends on which channels meet", 960, 380, <Wd c={GOLD} s={38} serif>what appears depends on which channels meet</Wd>],
            ["depends on which channels meet", 440, 480, <K c={DIM} s={24}>a wall</K>, { pop: true, d: 0.6 }],
            ["depends on which channels meet", 800, 480, <K c={ICE} s={24}>a drink</K>, { pop: true, d: 1 }],
            ["depends on which channels meet", 1120, 480, <K c={WARM} s={24}>a burn</K>, { pop: true, d: 1.4 }],
            ["depends on which channels meet", 1480, 480, <K c={VIOLET} s={24}>open space</K>, { pop: true, d: 1.8 }],
            ["The current still carries the tick", 960, 780, <K c={GREEN} s={28}>nothing missing: the current still carries the tick</K>],
          ]} />
          <At x={960} y={640} o={ramp(t, c("The current still carries the tick"), 0.6)}><Pool p={1} w={420} /></At>
          <At x={860 + ((t - c("The current still carries the tick")) * 40) % 200} y={630} o={ramp(t, c("The current still carries the tick"), 0.6)}><Tick size={60} /></At>
        </>
      )}
    </AbsoluteFill>
  );
};

const BoxFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const box = c("Space is an empty box");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Third, the box", 960, 100, <Wd c={VIOLET} s={48} serif>3 · The box, as it feels</Wd>],
        ["Why does the given feel so certain", 960, 170, <Wd c={DIM} s={28}>why does the given feel so certain?</Wd>],
        ["Space is an empty box", 1520, 300, <K c={ICE} s={26}>space: an empty box, ready-made</K>, { pop: true }],
        ["I put a solid object in the middle of it", 1520, 370, <K c={ROSE} s={26}>a solid object in the middle</K>, { pop: true }],
        ["I put observers around it", 1520, 440, <K c={CHALK} s={26}>observers around it</K>, { pop: true }],
        ["or is fooled", 1520, 510, <Wd c={DIM} s={24}>each sees the real object, or is fooled</Wd>],
        ["Surely the box, at least, is given", 960, 790, <Wd c={GOLD} s={38} serif>surely the box, at least, is given</Wd>],
      ]} />
      <At x={760} y={480} o={ramp(t, box, 0.6)}><SpaceBox p={ramp(t, box, 1)} /></At>
      <At x={760} y={520} o={ramp(t, c("I put a solid object in the middle of it"), 0.6)} s={pop(t, 30, c("I put a solid object in the middle of it"))}><Bowl p={1} w={160} /></At>
      {[[520, 600], [1000, 600], [560, 380], [980, 380]].map(([x, y], i) => (
        <At key={i} x={x} y={y} o={ramp(t, c("I put observers around it") + i * 0.3, 0.5)}><Person size={80} col={[CHALK, VIOLET, GOLD, WARM][i]} /></At>
      ))}
    </AbsoluteFill>
  );
};

const BoxFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const field = c("It is a field that bends with mass");
  const after = c("Without the box, the puzzle of the bowl loses its grip");
  const bend = ramp(t, field, 2.2);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and it is the biggest or, look at how space itself is formed", 960, 100, <Wd c={GOLD} s={46} serif>Or: how space itself is formed</Wd>],
      ]} />
      {t < after && (
        <>
          <At x={620} y={470} o={ramp(t, c("spacetime is not an empty stage"), 0.6)}><SpaceBox p={1} bend={bend} /></At>
          <At x={620} y={520 + bend * 40} o={ramp(t, field, 0.6)}><svg width={60} height={60}><circle cx={30} cy={30} r={24} fill="rgba(228,194,122,0.6)" stroke={GOLD} strokeWidth={3} /></svg></At>
          <Items items={[
            ["spacetime is not an empty stage", 1400, 260, <SK c={DIM} s={28} at="It is a field that bends with mass">an empty stage</SK>],
            ["It is a field that bends with mass", 1400, 340, <K c={ICE} s={28}>a field: bends with mass, moves with energy</K>, { pop: true }],
            ["asked whether space could exist before its own mark", 1400, 470, <Box c={VIOLET} w={620} title="space before its own mark?" sub="its mark: the absence of obstruction" />, { pop: true }],
            ["It cannot", 1400, 590, <K c={WARM} s={28}>it cannot</K>, { pop: true }],
            ["Space and what is in it are designated together", 1400, 680, <Wd c={GOLD} s={32} serif>space and what is in it: designated together</Wd>],
          ]} />
        </>
      )}
      <Items items={[
        ["Without the box, the puzzle of the bowl loses its grip", 960, 220, <Wd c={CHALK} s={36} serif>without the box, the puzzle loses its grip</Wd>],
        ["There is no fixed place where the one real liquid sits", 960, 340, <Struck at="There is no fixed place where the one real liquid sits" d={1.6}><Bowl p={1} w={240} dashed /></Struck>],
        ["There is no fixed place where the one real liquid sits", 960, 440, <Wd c={DIM} s={24}>no fixed place for the one real liquid</Wd>, { d: 0.6 }],
        ["Space, time, the one who looks, and what is looked at all come together", 480, 540, <K c={ICE} s={24}>space</K>, { pop: true }],
        ["Space, time, the one who looks, and what is looked at all come together", 800, 540, <K c={TEAL} s={24}>time</K>, { pop: true, d: 0.6 }],
        ["Space, time, the one who looks, and what is looked at all come together", 1120, 540, <K c={CHALK} s={24}>the one who looks</K>, { pop: true, d: 1.2 }],
        ["Space, time, the one who looks, and what is looked at all come together", 1460, 540, <K c={GOLD} s={24}>what is looked at</K>, { pop: true, d: 1.8 }],
        ["None of them contains the rest", 960, 640, <Wd c={GOLD} s={34} serif>none of them contains the rest</Wd>],
        ["I still walk across the room", 960, 770, <K c={GREEN} s={28}>nothing missing: I still walk across the room</K>],
      ]} />
    </AbsoluteFill>
  );
};

const AgreeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cand = c("answered no");
  const circ = c("Is that circular");
  const story = c("The bowl story did not begin with");
  const ref = c("What is left in the bowl, then");
  const phase = t < cand ? 0 : t < circ ? 1 : t < story ? 2 : t < ref ? 3 : 4;
  const jaun = ramp(t, c("A human with jaundice sees a white conch shell as yellow"), 1);
  return (
    <AbsoluteFill>
      {phase === 0 && (
        <>
          <Items items={[
            ["But we agree", 960, 110, <Wd c={GOLD} s={52} serif>"But we agree."</Wd>],
            ["That is the strongest reason for the given", 960, 190, <Wd c={DIM} s={28}>the strongest reason for the given</Wd>],
            ["Does that not prove one real liquid behind us both", 960, 760, <Wd c={CHALK} s={34} serif>one real liquid behind us both?</Wd>],
          ]} />
          <At x={560} y={460} o={ramp(t, c("You and I both see water in the bowl"), 0.6)}><Person size={150} /></At>
          <At x={1360} y={460} o={ramp(t, c("You and I both see water in the bowl"), 0.6)}><Person size={150} col={TEAL} /></At>
          <At x={960} y={480} o={ramp(t, c("You and I both see water in the bowl"), 0.6)}><Bowl p={1} w={260} /></At>
          <At x={560} y={300} o={ramp(t, c("You and I both see water in the bowl") + 0.8, 0.5)}><K c={ICE} s={26}>water</K></At>
          <At x={1360} y={300} o={ramp(t, c("You and I both see water in the bowl") + 1.2, 0.5)}><K c={ICE} s={26}>water</K></At>
          <At x={960} y={620} o={ramp(t, c("Does that not prove one real liquid behind us both"), 0.6)}><div style={{ width: 560, height: 60, borderRadius: 30, border: `3px dashed ${DIM}` }} /></At>
        </>
      )}
      {phase === 1 && (
        <>
          <Items items={[
            ["answered no", 960, 110, <Wd c={CHALK} s={38} serif>An Indian philosopher's answer: no</Wd>],
            ["Shared, reliable agreement is not proof of a hidden floor", 960, 200, <SK c={DIM} s={28} at="It is what conventional truth is">proof of a hidden floor</SK>],
            ["It is what conventional truth is", 960, 290, <Box c={GOLD} w={640} title="conventional truth" sub="shared, reliable agreement" />, { pop: true }],
            ["healthy senses agree, and correct each other", 960, 400, <Wd c={DIM} s={26}>within one kind: healthy senses agree and correct each other</Wd>],
            ["Other humans see it white", 520, 680, <K c={CHALK} s={24}>others: white</K>, { pop: true }],
            ["the jaundiced eye is mistaken", 520, 760, <K c={WARM} s={24}>jaundiced eye: mistaken, by human standards</K>, { pop: true }],
            ["But the hungry ghost is not a jaundiced human", 1400, 520, <Box c={WARM} w={560} title="a hungry ghost" sub="not a jaundiced human" />, { pop: true }],
            ["its senses work normally", 1400, 650, <K c={GREEN} s={24}>its senses work normally, for its kind</K>, { pop: true }],
            ["For it, the liquid really does work as pus", 1400, 740, <Wd c={CHALK} s={26}>for it, the liquid really works as pus</Wd>],
          ]} />
          <At x={520} y={560} o={ramp(t, c("A human with jaundice sees a white conch shell as yellow"), 0.6)}>
            <Conch col={`rgb(${Math.round(236 + (240 - 236) * jaun)},${Math.round(231 + (215 - 231) * jaun)},${Math.round(218 + (90 - 218) * jaun)})`} />
          </At>
        </>
      )}
      {phase === 2 && (
        <>
          <Items items={[
            ["Is that circular", 960, 110, <Wd c={CHALK} s={44} serif>Is that circular?</Wd>],
            ["Yes. It is a circle", 960, 190, <Wd c={GOLD} s={32} serif>yes, a circle</Wd>],
            ["a judge standing outside every view", 1500, 330, <Struck at="No such judge is found" d={0.4}><Person size={120} col={DIM} /></Struck>],
            ["a judge standing outside every view", 1500, 460, <K c={DIM} s={22}>a judge outside every view</K>],
            ["No such judge is found", 1500, 530, <K c={WARM} s={24}>none is found</K>, { pop: true }],
            ["Inside the circle, mistakes are still caught", 760, 720, <Wd c={CHALK} s={28}>inside the circle, mistakes are still caught</Wd>],
            ["A healthy eye corrects a jaundiced one", 760, 790, <Wd c={DIM} s={24}>a second look · a healthy eye</Wd>],
            ["only a correction from nowhere", 1500, 640, <SK c={DIM} s={24} at="only a correction from nowhere" d={1}>a correction from nowhere</SK>],
          ]} />
          <At x={760} y={420} o={ramp(t, c("Yes. It is a circle"), 0.6)}>
            <svg width={420} height={420} viewBox="0 0 420 420" style={{ overflow: "visible" }}>
              <DrawPath d="M210 30 A180 180 0 1 1 209 30" p={ramp(t, c("Yes. It is a circle"), 1.6)} color={GOLD} width={4} len={1140} />
              <text x={210} y={150} fill={CHALK} fontSize={28} textAnchor="middle">healthy senses</text>
              <text x={210} y={290} fill={CHALK} fontSize={28} textAnchor="middle">the group</text>
              <path d="M210 170 L210 250" stroke={DIM} strokeWidth={3} />
            </svg>
          </At>
        </>
      )}
      {phase === 3 && (
        <Items items={[
          ["The bowl story did not begin with", 960, 110, <Wd c={CHALK} s={38} serif>Where the bowl story began</Wd>],
          ["used the ghosts to argue that there are no outer things at all", 520, 260, <Box c={VIOLET} w={640} title="no outer things at all" sub="the first telling" />, { pop: true }],
          ["Shared karma, ripening in the mind", 520, 380, <Wd c={DIM} s={24}>shared karma, ripening in the mind</Wd>],
          ["That makes the mind the floor instead", 520, 500, <SK c={WARM} s={30} at="neither is the mind that sees it">the mind as the floor</SK>],
          ["turned the story around", 1400, 260, <Box c={GOLD} w={640} title="the story turned around" />, { pop: true }],
          ["neither is the mind that sees it", 1400, 370, <Wd c={CHALK} s={26}>the pus is not found on its own · nor is the mind</Wd>],
          ["They rise and fall together", 1400, 450, <K c={GOLD} s={26}>mind and pus rise and fall together</K>, { pop: true }],
          ["It shows that neither the world nor the mind is the floor", 960, 680, <Wd c={GOLD} s={36} serif>neither the world nor the mind is the floor</Wd>],
        ]} />
      )}
      {phase === 4 && (
        <>
          <Items items={[
            ["What is left in the bowl, then", 960, 110, <Wd c={CHALK} s={40} serif>What is left in the bowl, then?</Wd>],
            ["A working reference point", 960, 200, <Wd c={GOLD} s={40} serif>a working reference point</Wd>],
            ["It lets different beings' appearances be lined up", 960, 760, <Wd c={DIM} s={26}>a handy label, made from the human side, for lining up the views</Wd>],
            ["Its job is to coordinate the views, not to sit underneath them", 960, 830, <K c={GOLD} s={28}>it coordinates the views · it does not sit underneath</K>],
          ]} />
          <At x={960} y={460} o={ramp(t, c("A working reference point"), 0.6)}><K c={GOLD} s={30}>"this bowl"</K></At>
          {SEEN.map(([cue, label, col], i) => {
            const x = [560, 1360, 560, 1360][i], y = [340, 340, 600, 600][i];
            const a = c("It lets different beings' appearances be lined up") + i * 0.3;
            return (
              <React.Fragment key={cue}>
                <Svg><line x1={x} y1={y} x2={960} y2={460} stroke={col} strokeWidth={3} strokeDasharray="8 8" opacity={ramp(t, a, 0.5)} /></Svg>
                <At x={x} y={y} o={ramp(t, a, 0.5)}><K c={col} s={24}>{label}</K></At>
              </React.Fragment>
            );
          })}
        </>
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
        ["Two ways of seeing, three times over, and agreement tested as well", 960, 110, <Wd c={CHALK} s={38} serif>Two ways of seeing, three times over</Wd>],
        ["Which carries more valid truth", 960, 190, <Wd c={GOLD} s={46} serif>Which carries more valid truth?</Wd>],
      ]} />
      <At x={960} y={470} o={ramp(t, c("Which carries more valid truth"), 0.6)}>
        <Scale tilt={0} left="given" right="formed" lc={ROSE} rc={GOLD} />
      </At>
      <Items items={[
        ["By experience. By logic. And by how things work", 560, 760, <K c={TEAL} s={30}>1 · experience</K>, { pop: true }],
        ["By experience. By logic. And by how things work", 960, 760, <K c={VIOLET} s={30}>2 · logic</K>, { pop: true, d: 0.8 }],
        ["By experience. By logic. And by how things work", 1360, 760, <K c={GREEN} s={30}>3 · working</K>, { pop: true, d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const ExperienceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const turn = c("Then turn around, and look for a mind holding the water inside it");
  return (
    <AbsoluteFill>
      <Items items={[
        ["By experience. Look into a glass of water", 960, 100, <Wd c={TEAL} s={48} serif>1 · By experience</Wd>],
        ["Coolness", 420, 260, <K c={TEAL} s={28}>coolness</K>, { pop: true }],
        ["Clearness", 720, 260, <K c={ICE} s={28}>clearness</K>, { pop: true }],
        ["Wetness on the lip", 1060, 260, <K c={ICE} s={28}>wetness on the lip</K>, { pop: true }],
        ["The name", 1420, 260, <K c={CHALK} s={28}>the name</K>, { pop: true }],
        ["What is met", 960, 180, <Wd c={DIM} s={26}>what is met?</Wd>],
      ]} />
      <At x={600} y={500} o={ramp(t, c("By experience. Look into a glass of water"), 0.6)}><Glass size={200} /></At>
      <Items items={[
        ["At no point do I meet a neutral liquid behind them", 1200, 470, <Struck at="That liquid is never found"><Bowl p={1} w={260} dashed /></Struck>],
        ["At no point do I meet a neutral liquid behind them", 1200, 580, <Wd c={DIM} s={22}>a neutral liquid, neither water nor home nor pus</Wd>, { d: 0.5 }],
        ["That liquid is never found", 1200, 650, <Wd c={CHALK} s={30} serif>never found</Wd>],
        ["It is supplied", 1200, 720, <K c={WARM} s={28}>supplied</K>, { pop: true }],
        ["Then turn around, and look for a mind holding the water inside it", 600, 700, <Struck at="That is not found either" d={0.4}><div style={{ width: 300, height: 90, borderRadius: 45, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Wd c={DIM} s={24}>a mind holding it</Wd></div></Struck>],
        ["Mind and object come together", 960, 820, <Wd c={GOLD} s={34} serif>mind and object come together</Wd>],
      ]} />
      <At x={0} y={0} o={turn * 0}><div /></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["By logic. A given world would have to be like something", 960, 100, <Wd c={VIOLET} s={48} serif>2 · By logic</Wd>],
      ["By logic. A given world would have to be like something", 960, 180, <Wd c={DIM} s={28}>a given world would have to be like something</Wd>, { d: 1 }],
      ["they should show through to every being", 520, 320, <Box c={ICE} w={660} title="with features" sub="they would show through to every being" />, { pop: true }],
      ["They do not", 520, 440, <K c={WARM} s={26}>they do not</K>, { pop: true }],
      ["If it has none, it cannot set off any meeting at all", 1400, 320, <Box c={DIM} w={660} title="with none" sub="it sets off no meeting at all" />, { pop: true }],
      ["undoes itself the moment it is picked out", 960, 600, <Box c={VIOLET} w={1100} title="self-standing wetness or matter undoes itself" />, { pop: true }],
      ["Picking it out needs contrast, a channel and a name", 960, 720, <Wd c={GOLD} s={30}>picking it out needs contrast, a channel and a name</Wd>],
    ]} />
  </AbsoluteFill>
);

const WorkingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const second = c("The formed view explains the working fully");
  return (
    <AbsoluteFill>
      <Items items={[
        ["By working. The given view says", 960, 100, <Wd c={GREEN} s={48} serif>3 · By working</Wd>],
        ["By working. The given view says", 960, 190, <Wd c={DIM} s={26}>"a solid something underneath holds it steady"</Wd>, { d: 1, until: "The formed view explains the working fully" }],
        ["But what is fixed cannot change", 960, 300, <div style={{ position: "relative" }}><Box c={DIM} w={560} title="fixed: cannot change" /><Strike at={c("And what cannot change cannot act") + 1} /></div>, { pop: true, until: "The formed view explains the working fully" }],
        ["And what cannot change cannot act", 960, 410, <Wd c={DIM} s={26}>cannot change, cannot act</Wd>, { until: "The formed view explains the working fully" }],
        ["Barley seeds grow barley", 420, 460, <K c={GOLD} s={26}>barley grows barley</K>, { pop: true }],
        ["Fire burns", 800, 460, <K c={WARM} s={26}>fire burns</K>, { pop: true }],
        ["The current carries the tick", 1140, 460, <K c={ICE} s={26}>the current carries the tick</K>, { pop: true }],
        ["Humans agree that this is water", 1520, 460, <K c={TEAL} s={26}>we agree: water</K>, { pop: true }],
        ["These are dependently arisen patterns", 960, 590, <Wd c={CHALK} s={28}>patterns meeting patterns, reliably, along shared channels</Wd>],
        ["Order never needed a floor", 960, 720, <Wd c={GOLD} s={46} serif>Order never needed a floor.</Wd>],
      ]} />
      <At x={960} y={250} o={ramp(t, second, 0.5)}><Wd c={GREEN} s={36} serif>the formed view explains it fully</Wd></At>
    </AbsoluteFill>
  );
};

const VerdictScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tip = ramp(t, c("The formed view carries experience and logic both"), 1.4);
  const late = t >= c("None of this makes my everyday claims false");
  const floor = c("a finished world underneath, waiting to be seen");
  return (
    <AbsoluteFill>
      {!late && (
        <>
          <Items items={[
            ["So the given is not the truer view", 960, 110, <Wd c={CHALK} s={40} serif>The given is not the truer view.</Wd>],
            ["It is the default one", 960, 190, <K c={ROSE} s={30}>the default one</K>, { pop: true }],
            ["It carries the weight of habit, and of language", 960, 260, <Wd c={DIM} s={26}>the weight of habit, and of language</Wd>],
            ["quietly sets up one object behind every view", 960, 820, <Wd c={DIM} s={24}>the noun "the bowl" sets up one object behind every view</Wd>],
          ]} />
          <At x={960} y={540} o={ramp(t, c("So the given is not the truer view"), 0.6)}>
            <Scale tilt={tip} left="habit, language" right="experience + logic" lc={ROSE} rc={GOLD} />
          </At>
        </>
      )}
      {late && (
        <>
          <Items items={[
            ["None of this makes my everyday claims false", 960, 120, <Wd c={CHALK} s={36} serif>Everyday claims stay true</Wd>],
            ["The water is water", 960, 200, <Wd c={DIM} s={26}>the water is water · I still drink it, and say so</Wd>],
            ["What fails is only the extra claim", 960, 290, <Wd c={CHALK} s={30}>what fails is only the extra claim:</Wd>],
            ["a finished world underneath, waiting to be seen", 960, 370, <SK c={WARM} s={30} at="a finished world underneath, waiting to be seen" d={1.6}>a finished world underneath</SK>],
          ]} />
          <At x={960} y={560} o={ramp(t, c("The water is water"), 0.6)}><Glass size={170} /></At>
          <At x={960} y={700} o={ramp(t, c("What fails is only the extra claim"), 0.6) * (1 - ramp(t, floor + 1, 1.6))}>
            <svg width={1000} height={60} viewBox="0 0 1000 60"><path d="M0 30 L1000 30" stroke={DIM} strokeWidth={10} strokeDasharray="30 12" /></svg>
          </At>
        </>
      )}
    </AbsoluteFill>
  );
};

const CompassionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["And one thing matters more than the argument", 960, 130, <Wd c={GOLD} s={42} serif>One thing matters more than the argument</Wd>],
        ["If the ghost's pus is truly pus for the ghost", 960, 260, <Wd c={CHALK} s={30}>if the ghost's pus is truly pus for the ghost…</Wd>],
        ["If the ghost's pus is truly pus for the ghost", 960, 340, <SK c={DIM} s={26} at="If the ghost's pus is truly pus for the ghost" d={2.5}>an optical mistake, waved away</SK>, { d: 1.5 }],
        ["No single view owns the real world", 960, 460, <Box c={TEAL} w={720} title="no single view owns the real world" />, { pop: true }],
        ["So no being's lived world can be brushed aside", 960, 570, <Wd c={CHALK} s={28}>no being's lived world can be brushed aside</Wd>],
        ["Seeing through the given takes nothing away from another's pain", 960, 690, <Wd c={GOLD} s={34} serif>seeing through the given takes nothing from another's pain</Wd>],
        ["Or from the wish to ease it", 960, 780, <K c={ROSE} s={28}>or from the wish to ease it</K>],
      ]} />
      <At x={0} y={0} o={t * 0 + c("Or from the wish to ease it") * 0}><div /></At>
    </AbsoluteFill>
  );
};

const NextScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("and where I part from them");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 5, 1.5) }}>
      <Items items={[
        ["This is Part 2 of the Dependent Arising series", 960, 130, <Wd c={GOLD} s={44} serif>Dependent Arising · Part 2 · The Illusion of the Given</Wd>],
        ["In Part 3, Measured, or Formed", 960, 300, <Box c={VIOLET} w={800} title="Part 3 · Measured, or Formed?" sub="does a measurement read a world already there?" />, { pop: true }],
        ["Carlo Rovelli and Karen Barad", 700, 500, <K c={ICE} s={28}>Carlo Rovelli</K>, { pop: true }],
        ["Carlo Rovelli and Karen Barad", 1220, 500, <K c={ICE} s={28}>Karen Barad</K>, { pop: true, d: 0.8 }],
        ["and where I part from them", 960, 620, <Wd c={CHALK} s={30}>where they echo it, and where I part from them</Wd>],
      ]} />
      <At x={0} y={0} o={c("Surely a measurement, at least, reads a world that is already there") * 0}><div /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["One bowl of liquid", "dusk", <OpenScene />],
    ["In Part 1, a human, a bat, a bee and an ant stood before the same mountain", "search", <GivenScene />],
    ["First, a bowl", "water", <BowlFeltScene />],
    ["Or, and it is a big or, look at how each of these is formed", "light", <BowlFormedScene />],
    ["Second, a tick at a pool", "ember", <TickFeltScene />],
    ["Or, and again it is a big or, look at how the meeting is formed", "water", <TickFormedScene />],
    ["Third, the box", "deep", <BoxFeltScene />],
    ["Or, and it is the biggest or, look at how space itself is formed", "light", <BoxFormedScene />],
    ["But we agree", "doubt", <AgreeScene />],
    ["Two ways of seeing, three times over, and agreement tested as well", "whole", <WhichScene />],
    ["By experience. Look into a glass of water", "jade", <ExperienceScene />],
    ["By logic. A given world would have to be like something", "deep", <LogicScene />],
    ["By working. The given view says", "light", <WorkingScene />],
    ["So the given is not the truer view", "whole", <VerdictScene />],
    ["And one thing matters more than the argument", "jade", <CompassionScene />],
    ["This is Part 2 of the Dependent Arising series", "night", <NextScene />],
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
