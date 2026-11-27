// Bonus video: Dependent Arising Section 4 Part 2: Questions That Lose Their Object (AA57).
// (Script: new-documents/after-anatta/aa57-questions-that-lose-their-object-script.md, from EBooks
// Bonus Articles/questions-that-lose-their-object, approved by the owner 2026-11-27: "Approve"; script approved the same
// day: "Approved aa57".)
// Arc: when, where, same? -> from Part 1 -> the eight extremes as eight ways of asking where a thing is -> turned over,
// not answered (four questions) -> the lamp -> the decisive point: one fact, one hand -> not the web either ->
// identity from essence to criteria (phone, ship, photograph) -> conventional, not merely conventional (three tests)
// -> in practice -> close.
// Stance: the whereabouts, the stored essence and the web are drawn only to be struck; nothing replaces them.
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
  "When did it start? Where did it go? Is it the same one", "Each question asks where a thing is",
  "I am John Tan, known as Thusness", "Part 1 set two logics side by side",
  "Here I turn the logic of dependency on the questions we ask about anything",
  // eight
  "opens his Middle Way by paying homage to dependent arising", "Arising and ceasing. Permanence and annihilation",
  "Under the logic of substance, these are not extremes at all", "Every one of these assumes the same thing",
  "That there is something with whereabouts", "Arising and ceasing place it at the two ends of a line",
  "they are eight ways of asking where a thing is",
  // turned over
  "The logic of dependency does not answer these questions in a subtler way", "And so the questions lose their object",
  "When did it come into being", "What stays the same underneath", "Where did it go? No whereabouts are found after",
  "Is it the same as that, or something else entirely", "And yet rice yields rice",
  // lamp
  "Switch off a lamp", "Switch it on", "Both are true of every appearance",
  "has nothing left to be about",
  // one hand
  "Now the decisive point", "The negations describe dependent arising itself",
  "If a sprout could be found arising from its seed", "Dependence and unfindability are one fact",
  "So I do not hold emptiness in one hand", "It is one hand",
  // web
  "Once the things are seen through, a new temptation comes", "The web is what is real",
  "But the relations are named together with what they relate", "The relating is as empty as what it relates",
  // identity
  "Now, identity", "A thing is what its essence makes it", "The logic of dependency moves the question",
  "the same by which criteria, for which purpose, within which framework", "A cracked phone is the same phone",
  "A ship whose every plank has been replaced", "The child in an old photograph is you",
  "Each answer is correct within its framework", "This does not make identity arbitrary", "A forged passport fails",
  "Identity seemed the most undeniable thing there was", "The reality of a designation that works",
  // conventional
  "The same shift changes the word conventional", "The logic of substance hears it as a demotion",
  "For the logic of dependency, conventional truth is the only kind of validity there is",
  "What is known to ordinary cognition", "Not overturned by further ordinary cognition",
  "And not contradicted by analysis of the ultimate", "The snake in the rope fails the second test",
  "The inherently existing rope fails the third", "The rope, as named, passes all three",
  "Convention is not the opposite of truth", "And there is no second, deeper truth",
  "There is one appearance, seen two ways",
  // practice
  "Next time one of these questions comes", "Where did that feeling go", "Is this the same person I married",
  "Is this only conventional",
  // close
  "This is Section 4, Part 2 of the Dependent Arising series", "The question does not need a cleverer answer",
];

const M = {
  open: { a: "rgba(60,90,130,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.32)" },
  eight: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  over: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  lamp: { a: "rgba(190,145,60,0.46)", b: "rgba(40,40,90,0.5)", c: "rgba(60,60,120,0.32)" },
  hand: { a: "rgba(40,110,120,0.48)", b: "rgba(80,60,150,0.4)", c: "rgba(150,110,60,0.3)" },
  identity: { a: "rgba(150,60,80,0.44)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  conv: { a: "rgba(60,110,70,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  practice: { a: "rgba(40,100,130,0.48)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
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
/** A lamp; `on` 0..1 lights it and fills the room with a glow. */
const Lamp: React.FC<{ on: number }> = ({ on }) => (
  <svg width={420} height={380} viewBox="-210 -190 420 380" style={{ overflow: "visible" }}>
    <circle cx={0} cy={-40} r={190} fill={`rgba(240,200,110,${0.22 * on})`} />
    <path d="M-70 -90 L70 -90 L45 -10 L-45 -10 Z" fill={`rgba(240,200,110,${0.25 + 0.5 * on})`} stroke={GOLD} strokeWidth={4} />
    <circle cx={0} cy={0} r={16} fill={`rgba(255,240,190,${0.15 + 0.85 * on})`} stroke={GOLD} strokeWidth={3} />
    <line x1={0} y1={16} x2={0} y2={140} stroke={CHALK} strokeWidth={5} />
    <rect x={-60} y={140} width={120} height={20} rx={8} fill="rgba(240,230,210,0.25)" stroke={CHALK} strokeWidth={4} />
  </svg>
);
/** A time line with a dot placed on it: "whereabouts". */
const Whereabouts: React.FC = () => (
  <svg width={760} height={120} viewBox="0 0 760 120" style={{ overflow: "visible" }}>
    <line x1={20} y1={60} x2={740} y2={60} stroke={CHALK} strokeWidth={3} />
    {[140, 620].map((x, i) => <line key={i} x1={x} y1={40} x2={x} y2={80} stroke={GOLD} strokeWidth={4} />)}
    <text x={140} y={110} fill={DIM} fontSize={22} textAnchor="middle" fontFamily="SourceSans">arises</text>
    <text x={620} y={110} fill={DIM} fontSize={22} textAnchor="middle" fontFamily="SourceSans">ceases</text>
    <circle cx={380} cy={60} r={22} fill="rgba(240,200,110,0.4)" stroke={GOLD} strokeWidth={4} />
    <text x={380} y={22} fill={GOLD} fontSize={22} textAnchor="middle" fontFamily="SourceSans">a thing, somewhere</text>
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["When did it start? Where did it go? Is it the same one", 960, 380, <Wd c={CHALK} s={44} serif>When did it start?</Wd>],
        ["When did it start? Where did it go? Is it the same one", 960, 480, <Wd c={CHALK} s={44} serif>Where did it go?</Wd>, { d: 1 }],
        ["When did it start? Where did it go? Is it the same one", 960, 580, <Wd c={CHALK} s={44} serif>Is it the same one?</Wd>, { d: 2 }],
        ["Each question asks where a thing is", 960, 740, <K c={GOLD} s={30}>each asks where a thing is</K>, { pop: true }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Part 1 set two logics side by side">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Questions That Lose Their Object</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 4 · Part 2</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Part 1 set two logics side by side">
      <Items items={[
        ["Part 1 set two logics side by side", 960, 300, <Wd c={DIM} s={26}>Part 1: substance · dependency · no bearer, so neither answer</Wd>],
        ["Here I turn the logic of dependency on the questions we ask about anything", 960, 440, <Wd c={TEAL} s={32} serif>the logic, turned on our questions</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const EightScene: React.FC = () => {
  const pairs = [["arising", "ceasing"], ["permanence", "annihilation"], ["coming", "going"], ["identity", "difference"]];
  return (
    <AbsoluteFill>
      <Items items={[
        ["opens his Middle Way by paying homage to dependent arising", 960, 90, <Wd c={GOLD} s={42} serif>The eight extremes</Wd>],
        ...pairs.map(([a, b], i) => ["Arising and ceasing. Permanence and annihilation", 960, 190 + i * 62, <Wd c={CHALK} s={28}>{a} · {b}</Wd>, { d: i * 0.8 }] as It),
        ["Under the logic of substance, these are not extremes at all", 960, 470, <Wd c={DIM} s={24}>under substance: just the questions we ask about anything</Wd>],
        ["That there is something with whereabouts", 960, 600, <Whereabouts />],
        ["they are eight ways of asking where a thing is", 960, 780, <K c={GOLD} s={30}>eight ways of asking where a thing is</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const OverScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The logic of dependency does not answer these questions in a subtler way", 960, 90, <Wd c={VIOLET} s={40} serif>Turned over, not answered</Wd>],
      ["The logic of dependency does not answer these questions in a subtler way", 960, 170, <SK at="And so the questions lose their object" s={22}>arises invisibly · lasts hidden · goes where we cannot see</SK>, { d: 1 }],
      ["And so the questions lose their object", 960, 250, <K c={TEAL} s={28}>no whereabouts found: the questions lose their object</K>, { pop: true }],
      ["When did it come into being", 960, 380, <Wd c={CHALK} s={24}>when did it begin? no edge crossed · "at noon" holds as convention</Wd>],
      ["What stays the same underneath", 960, 450, <Wd c={CHALK} s={24}>what stays underneath? no carrier</Wd>],
      ["Where did it go? No whereabouts are found after", 960, 520, <Wd c={CHALK} s={24}>where did it go? the question does not apply</Wd>],
      ["Is it the same as that, or something else entirely", 960, 590, <Wd c={CHALK} s={24}>the same, or other? the sprout is not the seed</Wd>],
      ["And yet rice yields rice", 960, 660, <K c={GOLD} s={24}>yet rice yields rice: not identical, not wholly other</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const LampScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const on = 1 - ramp(t, c("Switch off a lamp", -1), 0.6) + ramp(t, c("Switch it on", -0.5), 0.6);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Switch off a lamp", 1360, 300, <Wd c={CHALK} s={28}>off: dark · the light went nowhere</Wd>],
        ["Switch it on", 1360, 380, <Wd c={CHALK} s={28}>on: full · the light came from nowhere</Wd>],
        ["Both are true of every appearance", 1360, 480, <Wd c={DIM} s={24}>true of every appearance, all along</Wd>],
        ["has nothing left to be about", 1360, 580, <K c={GOLD} s={26}>"where did the light go?" has nothing to be about</K>, { pop: true }],
      ]} />
      <At x={540} y={500} o={1}><Lamp on={Math.min(1, on)} /></At>
    </AbsoluteFill>
  );
};

const HandScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now the decisive point", 960, 100, <Wd c={TEAL} s={42} serif>The decisive point</Wd>],
      ["The negations describe dependent arising itself", 960, 200, <Wd c={CHALK} s={26}>the negations describe dependent arising itself</Wd>],
      ["If a sprout could be found arising from its seed", 960, 290, <Wd c={DIM} s={24}>an arising of its own → no need to depend</Wd>],
      ["Dependence and unfindability are one fact", 960, 400, <K c={GOLD} s={30}>dependence and unfindability: one fact</K>, { pop: true }],
      ["So I do not hold emptiness in one hand", 620, 540, <Wd c={CHALK} s={26}>emptiness</Wd>],
      ["So I do not hold emptiness in one hand", 1300, 540, <Wd c={CHALK} s={26}>dependent arising</Wd>, { d: 1.5 }],
      ["It is one hand", 960, 640, <Wd c={GOLD} s={40} serif>one hand</Wd>],
      ["Once the things are seen through, a new temptation comes", 960, 760, <SK at="But the relations are named together with what they relate" d={0.5} s={24}>"the web is what is real"</SK>],
      ["The relating is as empty as what it relates", 960, 850, <Wd c={DIM} s={24}>the relating is as empty as what it relates · and works as well</Wd>],
    ]} />
  </AbsoluteFill>
);

const IdentityScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now, identity", 960, 90, <Wd c={ROSE} s={42} serif>Identity: from essence to criteria</Wd>],
      ["A thing is what its essence makes it", 960, 180, <SK at="The logic of dependency moves the question" d={0.5} s={24}>the answer hidden in the thing: its essence</SK>],
      ["the same by which criteria, for which purpose, within which framework", 960, 270, <K c={TEAL} s={26}>the same by which criteria? for which purpose? in which framework?</K>, { pop: true }],
      ["A cracked phone is the same phone", 400, 430, <Box c={ICE} w={500} title="a cracked phone" sub="the same, for the shop and the insurer" />, { pop: true }],
      ["A ship whose every plank has been replaced", 960, 430, <Box c={WARM} w={500} title="a ship of new planks" sub="the same on the register; perhaps not for the museum" />, { pop: true }],
      ["The child in an old photograph is you", 1520, 430, <Box c={ROSE} w={500} title="an old photograph" sub="you, for family, certificate and story" />, { pop: true }],
      ["Each answer is correct within its framework", 960, 590, <Wd c={CHALK} s={24}>each correct within its framework · none found apart from it</Wd>],
      ["This does not make identity arbitrary", 960, 660, <Wd c={DIM} s={22}>not arbitrary: a forged passport fails · a face in a crowd is corrected</Wd>],
      ["The reality of a designation that works", 960, 770, <K c={GOLD} s={26}>not less real: a designation that works</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const ConvScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The same shift changes the word conventional", 960, 90, <Wd c={GREEN} s={42} serif>Conventional, not "merely" conventional</Wd>],
      ["The logic of substance hears it as a demotion", 960, 170, <SK at="For the logic of dependency, conventional truth is the only kind of validity there is" s={24}>"merely" agreed · less than real</SK>],
      ["For the logic of dependency, conventional truth is the only kind of validity there is", 960, 250, <K c={GREEN} s={26}>the only kind of validity there is, fully valid</K>, { pop: true }],
      ["What is known to ordinary cognition", 960, 360, <Wd c={CHALK} s={24}>1 · known to ordinary cognition</Wd>],
      ["Not overturned by further ordinary cognition", 960, 420, <Wd c={CHALK} s={24}>2 · not overturned by further cognition</Wd>],
      ["And not contradicted by analysis of the ultimate", 960, 480, <Wd c={CHALK} s={24}>3 · not contradicted by analysis of the ultimate</Wd>],
      ["The snake in the rope fails the second test", 400, 610, <SK at="The snake in the rope fails the second test" d={1} s={24}>the snake in the rope: fails 2</SK>],
      ["The inherently existing rope fails the third", 960, 610, <SK at="The inherently existing rope fails the third" d={1} s={24}>the self-standing rope: fails 3</SK>],
      ["The rope, as named, passes all three", 1520, 610, <K c={GREEN} s={24}>the rope, as named: passes all three</K>, { pop: true }],
      ["Convention is not the opposite of truth", 960, 730, <Wd c={CHALK} s={26}>convention: where truth, in every usable sense, lives</Wd>],
      ["There is one appearance, seen two ways", 960, 820, <K c={GOLD} s={28}>no higher world · one appearance, seen two ways</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const PracticeScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Next time one of these questions comes", 960, 120, <Wd c={TEAL} s={42} serif>In practice</Wd>],
      ["Next time one of these questions comes", 960, 200, <Wd c={DIM} s={24}>notice its shape, before answering</Wd>, { d: 1 }],
      ["Where did that feeling go", 960, 330, <Wd c={CHALK} s={30} serif>Where did that feeling go?</Wd>],
      ["Is this the same person I married", 960, 430, <Wd c={CHALK} s={30} serif>Is this the same person I married?</Wd>],
      ["Is this only conventional", 960, 530, <Wd c={CHALK} s={30} serif>Is this only conventional?</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The question does not need a cleverer answer");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 4, Part 2 of the Dependent Arising series", 960, 220, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 4 · Part 2</Wd>],
        ["The question does not need a cleverer answer", 960, 500, <Wd c={DIM} s={34} serif>Not a cleverer answer.</Wd>],
        ["The question does not need a cleverer answer", 960, 600, <Wd c={CHALK} s={36} serif>Seen, for what it assumes.</Wd>, { d: 2.5 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["When did it start? Where did it go? Is it the same one", "open", <OpenScene />],
    ["opens his Middle Way by paying homage to dependent arising", "eight", <EightScene />],
    ["The logic of dependency does not answer these questions in a subtler way", "over", <OverScene />],
    ["Switch off a lamp", "lamp", <LampScene />],
    ["Now the decisive point", "hand", <HandScene />],
    ["Now, identity", "identity", <IdentityScene />],
    ["The same shift changes the word conventional", "conv", <ConvScene />],
    ["Next time one of these questions comes", "practice", <PracticeScene />],
    ["This is Section 4, Part 2 of the Dependent Arising series", "night", <CloseScene />],
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
