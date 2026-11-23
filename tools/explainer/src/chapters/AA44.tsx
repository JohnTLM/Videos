// Bonus video: Dependent Arising Section 2 Part 4: Solid, Dreamlike, Described (AA44).
// (Script: new-documents/after-anatta/aa44-solid-dreamlike-described-script.md, from EBooks
// Bonus Articles/solid-dreamlike-described, draft of 2026-11-23; approved by the owner 2026-11-23: "Approve Aa44".)
// Arc: a car, a dream, a wave function: which is the real one? -> the habit ranks across (three ways of appearing; each
// made the real one in turn) -> a car (hardness met in the hand; not stored in the metal; the car not found; still
// knocks you down) -> a dream (the one in the dream not found; the mind not found; conditions; one mistake in two
// directions) -> a wave function (symbols and clicks; designations too; physics an echo) -> the web (the quieter
// floor; conditions as unfindable as what they condition; designated together; essence spread thin) -> illusions
// that work (the magician's elephant, the dream, the mirage; emptiness is not a power; rest) -> which holds -> next.
// Stance: no ranking is drawn as true; each "floor" is drawn only to be struck; the web is drawn dashed and fades.
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
  "A car. A dream. A wave function. Which of them is the real one", "I am John Tan, known as Thusness",
  "In Part 1, a bell, a red flower and a passing thought were looked for, and not found",
  "So the habit tries something else", "It stops digging down, and starts ranking across",
  "Some of it appears solid, and undeniable", "Some of it appears dreamlike", "And some of it is never met at all",
  "Only described", "It picks one as the real one, and makes the others its shadow",
  "For one person, the solid is real, and the mind is a shadow of it",
  "For another, the mind is real, and matter is its projection",
  "For a third, the equations are the reality, and the apple is only how they look to us",
  "Then I look at a fourth, quieter candidate", "The web of conditions itself",
  // car
  "First, a car", "Is the solid the most real of all", "Surely it is. The car is hard, heavy and fast",
  "Whatever else is real, matter is real", "Or, and it is a big or, look at how the solid appears",
  "The hardness is met in the hand", "The weight is met in the muscles that push", "What would hard or heavy still mean",
  "Solidity is not stored in the metal", "For a body, the car is a wall", "it is almost open space",
  "And look for the car itself", "Not the wheels. Not the engine. Not the frame", "Yet it carries me to work",
  "So the solid is not more real than anything else", "The way that pushes back", "The car still knocks you down",
  // dream
  "Second, a dream", "someone dear who has died is alive again", "and wake with tears on my face",
  "Surely, then, the mind is what is real", "The mind is the floor",
  "Or, and again it is a big or, look at how the dream appears", "But look for the one in the dream",
  "Where is that mind", "And the dream came from conditions too", "The years together", "A song heard the day before",
  "Take those away, and that dream does not come", "A thought is as unfindable as a stone, and as dependent",
  "Losing the solid floor does not hand the floor to the mind", "are one mistake, made in two directions",
  "The tears were wet",
  // wave function
  "Third, a wave function", "It describes. And its descriptions are astonishingly reliable",
  "Surely, then, the description is the reality", "The equations are the floor",
  "Or, and it is the biggest or, look at how the described appears", "Nobody has met a wave function",
  "It appears as symbols on a page", "And as predictions that match clicks on a detector",
  "A measured value is a fact relative to the system that interacts", "But they are designations too",
  "A field is no better a candidate for what is really there than an apple",
  "Physics does not show that things are empty", "And emptiness does not need physics", "The equations still predict",
  // web
  "So the three ways of appearing have each been looked for", "That is why this view is neither realism nor mind only",
  "But here a quieter trap opens", "An appearance, it seems, sits at the centre of a web of relations",
  "Surely, then, the web is what is real", "Dependent arising itself is the floor", "Or look at the web",
  "is not found in their conditions",
  "The meeting, what has met, and the one who brings them together, are not found",
  "So the conditions are as unfindable as what they condition", "A relation needs what it relates",
  "Relation and the things related are designated together",
  "This matters, because the web is the most respectable floor of all",
  "It is the old essence, spread thin across the gaps between things", "The seed still needs water",
  // illusions
  "are they unreal", "The tradition answers with images",
  "walks across the stage, and the audience gasps", "It is not an elephant", "A dream can make the dreamer weep",
  "A mirage is seen, and thirsty travellers turn towards it", "None of these is nothing",
  "Suppose the Buddha conjured a magical person, and that person conjured another",
  "one magically created man can stop another", "So the effects are fully real", "One way of putting this needs care",
  "Emptiness does not do anything", "Function never needed an essence in the first place",
  "Finding Rest in Illusion", "It is rest. Nothing in it needs to be held",
  // which holds
  "So, which holds? The ranking, or none of them privileged", "By experience. I meet the car's hardness",
  "By logic. Whichever is made the floor meets the same search as the others",
  "By working. The car, the dream and the equation each work in their own domain",
  "Nothing needed to be the floor for any of it", "So ranking is not the truer view",
  "Really matter. Just mind. Really equations. Just relations", "None of this makes my everyday words false",
  "And something eases when this is seen", "Without one swallowing the others",
  // close
  "This is Section 2, Part 4 of the Dependent Arising series",
  "In Part 5, I turn to the clarity that runs through all appearing",
  "And what experience is like, when no layer is left",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  street: { a: "rgba(150,80,45,0.46)", b: "rgba(50,55,120,0.44)", c: "rgba(140,110,60,0.3)" },
  dream: { a: "rgba(90,60,160,0.5)", b: "rgba(40,50,120,0.44)", c: "rgba(150,90,140,0.3)" },
  lab: { a: "rgba(40,100,140,0.5)", b: "rgba(50,50,120,0.42)", c: "rgba(60,140,140,0.3)" },
  web: { a: "rgba(40,90,120,0.48)", b: "rgba(120,95,50,0.38)", c: "rgba(60,50,130,0.36)" },
  stage: { a: "rgba(160,60,80,0.45)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
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
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
const Car: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <svg width={420 * size} height={200 * size} viewBox="0 0 420 200" style={{ overflow: "visible" }}>
    <path d="M30 130 L60 80 L140 50 L280 50 L340 90 L395 105 L395 140 L30 140 Z" fill={`${WARM}33`} stroke={WARM} strokeWidth={5} strokeLinejoin="round" />
    <path d="M150 60 L270 60 L315 92 L120 92 Z" fill="rgba(169,221,242,0.15)" stroke={ICE} strokeWidth={3} />
    <circle cx={110} cy={145} r={32} fill="rgba(10,12,30,0.9)" stroke={CHALK} strokeWidth={5} />
    <circle cx={315} cy={145} r={32} fill="rgba(10,12,30,0.9)" stroke={CHALK} strokeWidth={5} />
  </svg>
);
const Cloud: React.FC<{ face?: number }> = ({ face = 1 }) => (
  <svg width={460} height={300} viewBox="0 0 460 300" style={{ overflow: "visible" }}>
    <path d="M90 230 Q20 230 30 170 Q20 100 100 100 Q120 30 210 50 Q280 10 330 70 Q430 70 420 160 Q450 230 360 235 Z"
      fill="rgba(170,150,230,0.14)" stroke={VIOLET} strokeWidth={5} />
    <g opacity={face}>
      <circle cx={230} cy={130} r={34} fill="none" stroke={CHALK} strokeWidth={4} />
      <path d="M180 215 Q230 160 280 215" fill="none" stroke={CHALK} strokeWidth={4} />
    </g>
  </svg>
);
const Wave: React.FC = () => {
  const { t } = useT();
  const pts = [...Array(121)].map((_, i) => {
    const x = -300 + i * 5;
    const env = Math.exp(-(x * x) / 18000);
    return `${i ? "L" : "M"}${x} ${-env * 90 * Math.cos(x / 14 - t * 3)}`;
  }).join(" ");
  return (
    <svg width={660} height={260} viewBox="-330 -130 660 260" style={{ overflow: "visible" }}>
      <path d="M-320 0 L320 0" stroke={DIM} strokeWidth={2} />
      <path d={pts} stroke={ICE} strokeWidth={4} fill="none" />
      <text x={0} y={120} fill={CHALK} fontSize={34} textAnchor="middle" fontFamily="SourceSerif">ψ(x, t)</text>
    </svg>
  );
};
/** Nodes with dashed relations; `fade` thins the lines (the web is not the floor). */
const Web: React.FC<{ fade?: number }> = ({ fade = 0 }) => {
  const { t } = useT();
  const n: [number, number, string, string][] = [[0, 0, "red", ROSE], [-260, -120, "light", GOLD], [260, -120, "eye", ICE], [-250, 140, "surface", WARM], [250, 140, "attention", TEAL]];
  return (
    <svg width={720} height={420} viewBox="-360 -210 720 420" style={{ overflow: "visible" }}>
      {n.slice(1).map(([x, y], i) => (
        <path key={i} d={`M0 0 L${x} ${y}`} stroke={CHALK} strokeWidth={3} strokeDasharray="10 8" strokeDashoffset={-t * 20} opacity={0.8 * (1 - fade * 0.8)} />
      ))}
      {n.map(([x, y, w, col], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i ? 34 : 46} fill={`${col}33`} stroke={col} strokeWidth={4} strokeDasharray={fade > 0.5 ? "6 6" : undefined} />
          <text x={x} y={y + (i ? 64 : 80)} fill={col} fontSize={26} textAnchor="middle" fontFamily="SourceSans">{w}</text>
        </g>
      ))}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A car. A dream. A wave function. Which of them is the real one", 480, 420, <Car />],
        ["A car. A dream. A wave function. Which of them is the real one", 960, 420, <Cloud />, { d: 0.8 }],
        ["A car. A dream. A wave function. Which of them is the real one", 1440, 420, <Wave />, { d: 1.6 }],
        ["A car. A dream. A wave function. Which of them is the real one", 960, 760, <Wd c={GOLD} s={44} serif>Which of them is the real one?</Wd>, { d: 2.6 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="It stops digging down, and starts ranking across">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Solid, Dreamlike, Described</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 4</Wd>, { d: 0.8 }],
        ["In Part 1, a bell, a red flower and a passing thought were looked for, and not found", 960, 160, <Wd c={DIM} s={26}>Parts 1–3: no floor down there</Wd>, { d: 0.3 }],
      ]} />
    </Phase>
    <Phase from="It stops digging down, and starts ranking across">
      <Items items={[
        ["It stops digging down, and starts ranking across", 960, 130, <Wd c={CHALK} s={40} serif>The habit ranks across</Wd>],
        ["Some of it appears solid, and undeniable", 440, 330, <Box c={WARM} w={440} title="solid" sub="a ball, a car" />, { pop: true }],
        ["Some of it appears dreamlike", 960, 330, <Box c={VIOLET} w={440} title="dreamlike" sub="a thought, a memory, a dream" />, { pop: true }],
        ["Only described", 1480, 330, <Box c={ICE} w={440} title="described" sub="fields, wave functions: never met" />, { pop: true }],
        ["It picks one as the real one, and makes the others its shadow", 960, 490, <Wd c={DIM} s={26}>one is made real, the others its shadow</Wd>],
        ["For one person, the solid is real, and the mind is a shadow of it", 440, 580, <SK at="Then I look at a fourth, quieter candidate" s={22}>really matter</SK>],
        ["For another, the mind is real, and matter is its projection", 960, 580, <SK at="Then I look at a fourth, quieter candidate" d={0.2} s={22}>really mind</SK>],
        ["For a third, the equations are the reality, and the apple is only how they look to us", 1480, 580, <SK at="Then I look at a fourth, quieter candidate" d={0.4} s={22}>really equations</SK>],
        ["The web of conditions itself", 960, 720, <K c={TEAL} s={26}>a fourth, quieter candidate: the web of conditions</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const CarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["First, a car", 960, 90, <Wd c={WARM} s={46} serif>1 · A car</Wd>]]} />
      <At x={560} y={460} o={1 - 0.6 * ramp(t, c("And look for the car itself"), 0.5) + 0.6 * ramp(t, c("Yet it carries me to work"), 0.5)}><Car size={1.3} /></At>
      <Phase to="Or, and it is a big or, look at how the solid appears">
        <Items items={[
          ["Is the solid the most real of all", 1360, 260, <Wd c={CHALK} s={30} serif>the most real of all?</Wd>],
          ["Surely it is. The car is hard, heavy and fast", 1360, 340, <Wd c={DIM} s={26}>hard · heavy · fast · there in the morning</Wd>],
          ["Whatever else is real, matter is real", 1360, 420, <Wd c={DIM} s={26}>surely matter is real, and mind is what it does</Wd>],
        ]} />
      </Phase>
      <Phase from="Or, and it is a big or, look at how the solid appears" to="And look for the car itself">
        <Items items={[
          ["The hardness is met in the hand", 1360, 230, <K c={WARM} s={24}>hardness: met in the hand</K>, { pop: true }],
          ["The weight is met in the muscles that push", 1360, 300, <K c={WARM} s={24}>weight: met in the muscles</K>, { pop: true }],
          ["What would hard or heavy still mean", 1360, 380, <Wd c={CHALK} s={26}>take them away: what is "hard"?</Wd>],
          ["Solidity is not stored in the metal", 1360, 470, <Wd c={GOLD} s={28} serif>not stored in the metal</Wd>],
          ["For a body, the car is a wall", 1360, 550, <Wd c={DIM} s={24}>for a body: a wall</Wd>],
          ["it is almost open space", 1360, 610, <Wd c={DIM} s={24}>for a neutrino: almost open space</Wd>],
        ]} />
      </Phase>
      <Phase from="And look for the car itself" to="Second, a dream">
        <Items items={[
          ["And look for the car itself", 1360, 230, <Wd c={CHALK} s={30} serif>look for the car itself</Wd>],
          ["Not the wheels. Not the engine. Not the frame", 1360, 310, <Wd c={DIM} s={24}>not wheels · engine · frame · sum · shape</Wd>],
          ["Yet it carries me to work", 1360, 380, <K c={GREEN} s={24}>yet it carries me to work</K>, { pop: true }],
          ["So the solid is not more real than anything else", 1360, 480, <Wd c={GOLD} s={28} serif>not more real: one way of appearing</Wd>],
          ["The way that pushes back", 1360, 550, <Wd c={CHALK} s={24}>the way that pushes back</Wd>],
          ["The car still knocks you down", 1360, 650, <K c={GREEN} s={24}>nothing missing: it still knocks you down</K>, { pop: true }],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const DreamScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["Second, a dream", 960, 90, <Wd c={VIOLET} s={46} serif>2 · A dream</Wd>]]} />
      <At x={560} y={450} o={1}><Cloud face={1 - 0.7 * ramp(t, c("But look for the one in the dream"), 1)} /></At>
      <Phase to="Or, and again it is a big or, look at how the dream appears">
        <Items items={[
          ["someone dear who has died is alive again", 1360, 260, <Wd c={CHALK} s={26}>someone dear, alive again</Wd>],
          ["and wake with tears on my face", 1360, 330, <Wd c={DIM} s={24}>waking with tears</Wd>],
          ["Surely, then, the mind is what is real", 1360, 430, <Wd c={DIM} s={26}>surely mind is what is real</Wd>],
          ["The mind is the floor", 1360, 500, <SK at="Or, and again it is a big or, look at how the dream appears" s={24}>mind as the floor</SK>],
        ]} />
      </Phase>
      <Phase from="Or, and again it is a big or, look at how the dream appears" to="Third, a wave function">
        <Items items={[
          ["But look for the one in the dream", 1360, 220, <Wd c={CHALK} s={26}>the one in the dream: not in the room</Wd>],
          ["Where is that mind", 1360, 290, <Wd c={CHALK} s={26}>in the mind? that mind is not found</Wd>],
          ["And the dream came from conditions too", 1360, 380, <Wd c={DIM} s={24}>conditions too:</Wd>],
          ["The years together", 1360, 440, <K c={VIOLET} s={22}>the years together · the missing</K>, { pop: true }],
          ["A song heard the day before", 1360, 500, <K c={VIOLET} s={22}>a song the day before · the body asleep</K>, { pop: true }],
          ["A thought is as unfindable as a stone, and as dependent", 1360, 590, <Wd c={GOLD} s={26} serif>as unfindable as a stone, and as dependent</Wd>],
          ["are one mistake, made in two directions", 1360, 670, <K c={WARM} s={24}>mind as floor, matter as floor: one mistake</K>, { pop: true }],
          ["The tears were wet", 1360, 760, <K c={GREEN} s={24}>the grief was grief · the tears were wet</K>, { pop: true }],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const WaveScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[["Third, a wave function", 960, 90, <Wd c={ICE} s={46} serif>3 · A wave function</Wd>]]} />
    <Items items={[["Third, a wave function", 560, 430, <Wave />]]} />
    <Phase to="Or, and it is the biggest or, look at how the described appears">
      <Items items={[
        ["It describes. And its descriptions are astonishingly reliable", 1360, 260, <Wd c={CHALK} s={26}>it describes, astonishingly well</Wd>],
        ["Surely, then, the description is the reality", 1360, 340, <Wd c={DIM} s={26}>surely the description is the reality</Wd>],
        ["The equations are the floor", 1360, 410, <SK at="Or, and it is the biggest or, look at how the described appears" s={24}>equations as the floor</SK>],
      ]} />
    </Phase>
    <Phase from="Or, and it is the biggest or, look at how the described appears" to="So the three ways of appearing have each been looked for">
      <Items items={[
        ["Nobody has met a wave function", 1360, 220, <Wd c={CHALK} s={28} serif>nobody has met one</Wd>],
        ["It appears as symbols on a page", 1360, 290, <K c={ICE} s={22}>symbols on a page</K>, { pop: true }],
        ["And as predictions that match clicks on a detector", 1360, 350, <K c={ICE} s={22}>predictions that match clicks</K>, { pop: true }],
        ["A measured value is a fact relative to the system that interacts", 1360, 430, <Wd c={DIM} s={22}>a value: relative to what interacts</Wd>],
        ["But they are designations too", 1360, 520, <Wd c={GOLD} s={28} serif>reliable designations, still designations</Wd>],
        ["A field is no better a candidate for what is really there than an apple", 1360, 590, <Wd c={CHALK} s={22}>a field is no better a candidate than an apple</Wd>],
        ["Physics does not show that things are empty", 1360, 670, <K c={WARM} s={22}>physics does not show emptiness</K>, { pop: true }],
        ["And emptiness does not need physics", 1360, 730, <K c={WARM} s={22}>emptiness does not need physics: an echo</K>, { pop: true }],
        ["The equations still predict", 1360, 810, <K c={GREEN} s={22}>the equations still predict</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const WebScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fade = ramp(t, c("So the conditions are as unfindable as what they condition"), 1.5);
  return (
    <AbsoluteFill>
      <Phase to="But here a quieter trap opens">
        <Items items={[
          ["So the three ways of appearing have each been looked for", 960, 250, <Wd c={CHALK} s={34} serif>solid · dreamlike · described: none the floor</Wd>],
          ["That is why this view is neither realism nor mind only", 960, 340, <Wd c={DIM} s={26}>neither realism nor mind only · no ranking</Wd>],
        ]} />
      </Phase>
      <Phase from="But here a quieter trap opens">
        <Items items={[["But here a quieter trap opens", 960, 90, <Wd c={TEAL} s={46} serif>4 · The web</Wd>]]} />
        <At x={560} y={470} o={ramp(t, c("An appearance, it seems, sits at the centre of a web of relations"), 0.8)}><Web fade={fade} /></At>
        <Items items={[
          ["Surely, then, the web is what is real", 1380, 230, <Wd c={DIM} s={26}>surely the relations are real</Wd>, { until: "Or look at the web" }],
          ["Dependent arising itself is the floor", 1380, 300, <SK at="Or look at the web" d={0.5} s={24}>dependent arising as the floor</SK>, { until: "is not found in their conditions", ud: 0.8 }],
          ["is not found in their conditions", 1380, 240, <Wd c={CHALK} s={24}>own nature: not found in the conditions</Wd>, { d: 1.5 }],
          ["The meeting, what has met, and the one who brings them together, are not found", 1380, 310, <Wd c={CHALK} s={22}>the meeting, the met, the bringer: not found</Wd>],
          ["So the conditions are as unfindable as what they condition", 1380, 400, <Wd c={GOLD} s={26} serif>conditions: as unfindable as what they condition</Wd>],
          ["A relation needs what it relates", 1380, 480, <Wd c={CHALK} s={22}>a relation needs what it relates</Wd>],
          ["Relation and the things related are designated together", 1380, 540, <K c={GOLD} s={22}>designated together · neither first</K>, { pop: true }],
          ["It is the old essence, spread thin across the gaps between things", 1380, 640, <K c={WARM} s={22}>the old essence, spread thin across the gaps</K>, { pop: true }],
          ["The seed still needs water", 1380, 730, <K c={GREEN} s={22}>the seed still needs water</K>, { pop: true }],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const IllusionScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["are they unreal", 960, 90, <Wd c={ROSE} s={42} serif>Illusions that work</Wd>],
      ["The tradition answers with images", 960, 170, <Wd c={DIM} s={24}>a magic show · a dream · a city in the clouds · a mirage</Wd>],
    ]} />
    <Phase to="Suppose the Buddha conjured a magical person, and that person conjured another">
      <Items items={[
        ["walks across the stage, and the audience gasps", 440, 360, <Box c={ROSE} w={440} title="the magician's elephant" sub="seen · it frightens · not an elephant" />, { pop: true }],
        ["A dream can make the dreamer weep", 960, 360, <Box c={VIOLET} w={440} title="a dream" sub="it makes the dreamer weep" />, { pop: true }],
        ["A mirage is seen, and thirsty travellers turn towards it", 1480, 360, <Box c={GOLD} w={440} title="a mirage" sub="thirsty travellers turn towards it" />, { pop: true }],
        ["None of these is nothing", 960, 560, <Wd c={CHALK} s={32} serif>none is nothing · each lacks a nature of its own</Wd>],
      ]} />
    </Phase>
    <Phase from="Suppose the Buddha conjured a magical person, and that person conjured another" to="So, which holds? The ranking, or none of them privileged">
      <Items items={[
        ["Suppose the Buddha conjured a magical person, and that person conjured another", 960, 260, <Wd c={CHALK} s={26}>a conjured person conjures another: made, and it acts</Wd>],
        ["one magically created man can stop another", 960, 330, <Wd c={DIM} s={24}>one magical man can stop another</Wd>],
        ["So the effects are fully real", 960, 420, <K c={GREEN} s={26}>the effects are fully real</K>, { pop: true }],
        ["Emptiness does not do anything", 960, 520, <SK at="Function never needed an essence in the first place" s={24}>emptiness as a power</SK>],
        ["Function never needed an essence in the first place", 960, 600, <Wd c={GOLD} s={28} serif>function never needed an essence</Wd>],
        ["Finding Rest in Illusion", 960, 700, <Wd c={CHALK} s={26}>Longchenpa: Finding Rest in Illusion · eight images</Wd>],
        ["It is rest. Nothing in it needs to be held", 960, 780, <K c={TEAL} s={24}>rest: nothing needs to be held</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds? The ranking, or none of them privileged", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. I meet the car's hardness", 400, 270, <Box c={ICE} w={500} title="Experience" sub="none met underneath the others" />, { pop: true }],
      ["By logic. Whichever is made the floor meets the same search as the others", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="each candidate fails the same search" />, { pop: true }],
      ["By working. The car, the dream and the equation each work in their own domain", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="each works in its own domain" />, { pop: true }],
      ["Nothing needed to be the floor for any of it", 960, 430, <Wd c={GOLD} s={34} serif>Nothing needed to be the floor.</Wd>],
      ["So ranking is not the truer view", 960, 530, <Wd c={CHALK} s={26}>ranking: the default, not the truer view</Wd>],
      ["Really matter. Just mind. Really equations. Just relations", 960, 600, <SK at="None of this makes my everyday words false" s={24}>really matter · just mind · really equations · just relations</SK>],
      ["None of this makes my everyday words false", 960, 690, <Wd c={DIM} s={24}>the car is solid · the dream was a dream · good physics</Wd>],
      ["Without one swallowing the others", 960, 790, <K c={GOLD} s={24}>each met as it appears, none swallowing the others</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And what experience is like, when no layer is left");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 4 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 4</Wd>],
        ["In Part 5, I turn to the clarity that runs through all appearing", 960, 300, <Wd c={DIM} s={26}>next, Part 5: Clarity Without a Knower</Wd>],
        ["In Part 5, I turn to the clarity that runs through all appearing", 960, 470, <Wd c={CHALK} s={34} serif>a knower behind the clarity?</Wd>, { d: 1.5 }],
        ["And what experience is like, when no layer is left", 960, 580, <Wd c={TEAL} s={30} serif>when no layer is left</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A car. A dream. A wave function. Which of them is the real one", "dusk", <OpenScene />],
    ["First, a car", "street", <CarScene />],
    ["Second, a dream", "dream", <DreamScene />],
    ["Third, a wave function", "lab", <WaveScene />],
    ["So the three ways of appearing have each been looked for", "web", <WebScene />],
    ["are they unreal", "stage", <IllusionScene />],
    ["So, which holds? The ranking, or none of them privileged", "whole", <WhichScene />],
    ["This is Section 2, Part 4 of the Dependent Arising series", "night", <CloseScene />],
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
