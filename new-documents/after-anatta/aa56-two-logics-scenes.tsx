// Bonus video: Dependent Arising Section 4 Part 1: Two Logics (AA56).
// (Script: new-documents/after-anatta/aa56-two-logics-script.md, from EBooks Bonus Articles/two-logics,
// approved by the owner 2026-11-27: "Approved two logics"; script approved the same day: "Approved".)
// Arc: a candle, "the flame is changing" -> the two logics -> two starting points -> what "logic" means (a
// consequence; not a survey; a negation without a thesis; keeps non-contradiction) -> the refusals as a failed
// presupposition (the King of France) -> change without a changer (the passenger let go) -> two ways of reasoning
// about one candle -> the test -> close.
// Stance: the passenger is drawn only to be struck; no process, flow or energy is put in its seat.
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
  "Watch a candle burn, and the answer comes before any thought", "Something is there, and something is happening to it",
  "I am John Tan, known as Thusness", "Section 3 looked at one question, mind and matter",
  "This section takes up the way of reasoning that the default mode runs on", "I call it the logic of substance",
  "Beside it, I set the logic of dependency", "But they begin in different places",
  // candle
  "First, the candle", "Notice the shape of that answer", "The flame is the stable one",
  "If I ask what really changed", "It is not a belief that a counter argument can remove", "That is why I call it a logic",
  // starting points
  "So, two starting points", "The logic of substance starts with things", "The questions are about their fate",
  "The logic of dependency starts one step earlier", "On its parts. Its causes", "No thing is found standing there before that identification",
  "So the two do not disagree about the candle's fate",
  // logic
  "Now, the word logic needs care", "I mean the necessity of a consequence", "The proposal undermines itself",
  "Three things follow, and they matter", "It is not a survey", "It ends in a negation without a thesis",
  "And it keeps the ordinary rules", "The chariot cannot be both identical with its parts and different from them",
  "A view that claims to transcend logic can say anything, and so says nothing",
  "What is proposed as standing on its own is not found to do so",
  // refusals
  "What, then, of the famous refusals", "They refuse a presupposition", "is the present King of France bald",
  "There is no answer, yes or no", "But because there is no present King of France", "Does the self exist, or not",
  "Each one presupposes a bearer with a status of its own", "both answers fall together",
  "the world mostly leans on two notions", "We have met this move before", "The question had nothing to be about",
  // changer
  "Now go back to the candle, and look for the carrier", "The flame at this moment is wax vapour, air and light",
  "The noun is never found apart from the verbs", "But the verbs are not found apart from the noun either",
  "The walker and the walking", "So the logic of dependency does not replace the subject with a better subject",
  "A new passenger, in the old seat", "What remains is change, met without a thing that changes",
  "The candle still burns down", "Only the passenger is let go",
  // one candle
  "So these are not two worlds", "The logic of substance is not stupid", "What it cannot do is survive being looked at",
  "It only stops supplying the one who was supposed to be undergoing all of it",
  // test
  "This can be tested at once", "The sound that is fading", "Look for what is changing, apart from the changing",
  "The picture insists it must be there",
  // close
  "This is Section 4, Part 1 of the Dependent Arising series", "The looking finds more change, vivid and exact",
];

const M = {
  candle: { a: "rgba(170,110,40,0.46)", b: "rgba(60,45,130,0.44)", c: "rgba(40,40,80,0.4)" },
  logic: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  start: { a: "rgba(60,90,130,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.32)" },
  rules: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  king: { a: "rgba(150,60,80,0.44)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  flame: { a: "rgba(190,120,50,0.46)", b: "rgba(70,60,160,0.4)", c: "rgba(60,120,150,0.3)" },
  test: { a: "rgba(40,100,130,0.48)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
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
/** A candle whose flame leans and flickers; `rider` 0..1 shows a dashed "passenger" box riding on the flame. */
const Candle: React.FC<{ rider?: number; melt?: number }> = ({ rider = 0, melt = 0 }) => {
  const { t } = useT();
  const lean = 10 * Math.sin(t * 1.3) + 4 * Math.sin(t * 5.1);
  const h = 70 + 8 * Math.sin(t * 7);
  const body = 180 - 60 * melt;
  return (
    <svg width={320} height={420} viewBox="-160 -260 320 420" style={{ overflow: "visible" }}>
      <rect x={-40} y={140 - body} width={80} height={body} rx={8} fill="rgba(240,230,210,0.25)" stroke={CHALK} strokeWidth={4} />
      <line x1={0} y1={140 - body} x2={0} y2={128 - body} stroke={CHALK} strokeWidth={3} />
      <g transform={`translate(0, ${128 - body}) rotate(${lean})`}>
        <path d={`M0 ${-h} C26 ${-h * 0.5} 22 0 0 0 C-22 0 -26 ${-h * 0.5} 0 ${-h} Z`} fill="rgba(240,170,70,0.75)" stroke={GOLD} strokeWidth={3} />
        <path d={`M0 ${-h * 0.55} C10 ${-h * 0.3} 8 0 0 0 C-8 0 -10 ${-h * 0.3} 0 ${-h * 0.55} Z`} fill="rgba(255,240,200,0.8)" />
      </g>
      <g opacity={rider}>
        <rect x={-75} y={-250} width={150} height={56} rx={12} fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="8 6" />
        <text x={0} y={-214} fill={DIM} fontSize={22} textAnchor="middle" fontFamily="SourceSans">the flame itself?</text>
      </g>
    </svg>
  );
};
/** A crown with a question mark: the absent King of France. */
const Crown: React.FC = () => (
  <svg width={260} height={200} viewBox="-130 -100 260 200" style={{ overflow: "visible" }}>
    <path d="M-90 40 L-90 -30 L-45 10 L0 -50 L45 10 L90 -30 L90 40 Z" fill="none" stroke={GOLD} strokeWidth={5} strokeDasharray="12 8" />
    <text x={0} y={30} fill={GOLD} fontSize={56} textAnchor="middle" fontFamily="SourceSans">?</text>
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["Watch a candle burn, and the answer comes before any thought", 960, 470, <Candle />],
        ["Something is there, and something is happening to it", 960, 860, <Wd c={GOLD} s={40} serif>the flame is changing</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Section 3 looked at one question, mind and matter">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Two Logics</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 4 · Part 1</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Section 3 looked at one question, mind and matter">
      <Items items={[
        ["Section 3 looked at one question, mind and matter", 960, 220, <Wd c={DIM} s={24}>Section 3: mind and matter · the default mode: "what is it, really?"</Wd>],
        ["This section takes up the way of reasoning that the default mode runs on", 960, 330, <Wd c={CHALK} s={28} serif>the way of reasoning underneath</Wd>],
        ["I call it the logic of substance", 620, 480, <Box c={WARM} w={560} title="logic of substance" />, { pop: true }],
        ["Beside it, I set the logic of dependency", 1300, 480, <Box c={TEAL} w={560} title="logic of dependency" />, { pop: true }],
        ["But they begin in different places", 960, 640, <Wd c={CHALK} s={24}>the same words: change · cause · identity · continuity · the path</Wd>],
        ["But they begin in different places", 960, 710, <K c={GOLD} s={26}>different starting places, different worlds</K>, { d: 1.5, pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const CandleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rider = ramp(t, c("The flame is the stable one"), 0.8);
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, the candle", 960, 90, <Wd c={GOLD} s={42} serif>A candle</Wd>],
        ["Notice the shape of that answer", 1340, 260, <Wd c={CHALK} s={26}>a flame · and something happens to it</Wd>],
        ["The flame is the stable one", 1340, 340, <Wd c={DIM} s={24}>the flame stays · its states come and go</Wd>],
        ["If I ask what really changed", 1340, 420, <Wd c={CHALK} s={24}>"what really changed?" → look for the one that stayed</Wd>],
        ["It is not a belief that a counter argument can remove", 1340, 540, <Wd c={DIM} s={24}>not a belief: a pattern of inference, below argument</Wd>],
        ["That is why I call it a logic", 1340, 630, <K c={GOLD} s={28}>that is why it is a logic</K>, { pop: true }],
      ]} />
      <At x={560} y={520} o={1}><Candle rider={rider} /></At>
    </AbsoluteFill>
  );
};

const StartScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, two starting points", 960, 90, <Wd c={GOLD} s={42} serif>Two starting points</Wd>],
      ["The logic of substance starts with things", 520, 300, <Box c={WARM} w={700} title="substance" sub="things first · then what happens to them" />, { pop: true }],
      ["The questions are about their fate", 520, 430, <Wd c={DIM} s={22}>arise? last? move? end? stay the same?</Wd>],
      ["The logic of dependency starts one step earlier", 1400, 300, <Box c={TEAL} w={700} title="dependency" sub="how is anything identified as a thing at all?" />, { pop: true }],
      ["On its parts. Its causes", 1400, 430, <Wd c={DIM} s={22}>on parts · causes · contrasts · the name it is picked out by</Wd>],
      ["No thing is found standing there before that identification", 1400, 490, <Wd c={CHALK} s={22}>no thing standing there first</Wd>],
      ["So the two do not disagree about the candle's fate", 960, 650, <Wd c={CHALK} s={28} serif>not about the candle's fate:</Wd>],
      ["So the two do not disagree about the candle's fate", 960, 720, <K c={GOLD} s={26}>about whether there is a candle whose fate it is</K>, { d: 2, pop: true }],
    ]} />
  </AbsoluteFill>
);

const RulesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now, the word logic needs care", 960, 90, <Wd c={VIOLET} s={42} serif>What "logic" means here</Wd>],
      ["Now, the word logic needs care", 960, 170, <SK at="I mean the necessity of a consequence" s={22}>a special logic · or beyond logic</SK>, { d: 1 }],
      ["I mean the necessity of a consequence", 960, 260, <K c={TEAL} s={28}>the necessity of a consequence</K>, { pop: true }],
      ["The proposal undermines itself", 960, 330, <Wd c={CHALK} s={24}>say what it is → pick it out → made dependent</Wd>],
      ["It is not a survey", 400, 480, <Box c={ICE} w={500} title="not a survey" sub="shows what any exception must already do" />, { pop: true }],
      ["It ends in a negation without a thesis", 960, 480, <Box c={VIOLET} w={500} title="no thesis" sub="nothing put in its place" />, { pop: true }],
      ["And it keeps the ordinary rules", 1520, 480, <Box c={GOLD} w={500} title="keeps the rules" sub="non-contradiction, throughout" />, { pop: true }],
      ["The chariot cannot be both identical with its parts and different from them", 960, 640, <Wd c={DIM} s={22}>the chariot: not both its parts and other than them · fire and fuel</Wd>],
      ["A view that claims to transcend logic can say anything, and so says nothing", 960, 730, <Wd c={CHALK} s={24}>beyond logic: says anything, so says nothing</Wd>],
      ["What is proposed as standing on its own is not found to do so", 960, 820, <K c={GOLD} s={26}>what is proposed as standing on its own is not found to</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const KingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["What, then, of the famous refusals", 960, 90, <Wd c={ROSE} s={40} serif>Refusing a presupposition</Wd>],
        ["What, then, of the famous refusals", 960, 170, <Wd c={DIM} s={24}>neither existent nor non-existent · neither arising nor ceasing</Wd>, { d: 1 }],
        ["is the present King of France bald", 1340, 300, <Wd c={CHALK} s={28} serif>"Is the present King of France bald?"</Wd>],
        ["There is no answer, yes or no", 1200, 380, <SK at="But because there is no present King of France" d={0.3} s={24}>yes</SK>],
        ["There is no answer, yes or no", 1480, 380, <SK at="But because there is no present King of France" d={0.5} s={24}>no</SK>],
        ["But because there is no present King of France", 1340, 460, <Wd c={DIM} s={22}>no king: the question fails first</Wd>],
        ["Does the self exist, or not", 1340, 560, <Wd c={CHALK} s={24}>does the self exist? does this moment arise or cease?</Wd>],
        ["Each one presupposes a bearer with a status of its own", 1340, 620, <Wd c={DIM} s={22}>each presupposes a bearer</Wd>],
        ["both answers fall together", 1340, 690, <K c={GOLD} s={26}>no bearer: both answers fall together</K>, { pop: true }],
        ["the world mostly leans on two notions", 1340, 770, <Wd c={DIM} s={22}>"it exists" · "it does not exist": take hold of neither</Wd>],
        ["We have met this move before", 1340, 850, <Wd c={CHALK} s={22}>Section 2: the given · Section 3: the fixed natures</Wd>],
        ["The question had nothing to be about", 960, 940, <K c={TEAL} s={24}>logic never suspended · the question had nothing to be about</K>, { pop: true }],
      ]} />
      <At x={520} y={460} o={ramp(t, c("is the present King of France bald"), 0.5)}><Crown /></At>
    </AbsoluteFill>
  );
};

const ChangerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rider = ramp(t, c("Now go back to the candle, and look for the carrier"), 0.6) * (1 - ramp(t, c("Only the passenger is let go"), 0.8));
  const melt = ramp(t, c("The candle still burns down"), 4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now go back to the candle, and look for the carrier", 960, 90, <Wd c={GOLD} s={40} serif>Change without a changer</Wd>],
        ["The flame at this moment is wax vapour, air and light", 1340, 230, <Wd c={CHALK} s={24}>this moment: wax vapour, air, light · gone the next</Wd>],
        ["The noun is never found apart from the verbs", 1340, 300, <Wd c={CHALK} s={24}>no flame apart from the burning</Wd>],
        ["But the verbs are not found apart from the noun either", 1340, 360, <Wd c={CHALK} s={24}>no flickering with nothing flickering</Wd>],
        ["The walker and the walking", 1340, 430, <K c={TEAL} s={24}>walker and walking · changer and change: named together</K>, { pop: true }],
        ["So the logic of dependency does not replace the subject with a better subject", 1340, 530, <SK at="A new passenger, in the old seat" d={0.5} s={22}>a process · a flow · an energy</SK>],
        ["A new passenger, in the old seat", 1340, 600, <Wd c={DIM} s={22}>a new passenger in the old seat</Wd>],
        ["What remains is change, met without a thing that changes", 1340, 700, <Wd c={CHALK} s={26} serif>change, without a thing that changes</Wd>],
        ["The candle still burns down", 1340, 770, <Wd c={DIM} s={22}>lit at dusk · shorter at midnight · nothing lost</Wd>],
        ["Only the passenger is let go", 1340, 850, <K c={GOLD} s={26}>only the passenger is let go</K>, { pop: true }],
      ]} />
      <At x={540} y={540} o={1}><Candle rider={rider} melt={melt} /></At>
    </AbsoluteFill>
  );
};

const OneScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So these are not two worlds", 960, 120, <Wd c={GOLD} s={40} serif>Two ways of reasoning, one candle</Wd>],
      ["So these are not two worlds", 960, 210, <SK at="The logic of substance is not stupid" s={24}>one false world, one true world behind it</SK>, { d: 0.5 }],
      ["The logic of substance is not stupid", 960, 330, <Wd c={CHALK} s={26}>substance: how the habit reasons · fast · good enough</Wd>],
      ["What it cannot do is survive being looked at", 960, 410, <K c={ROSE} s={26}>it cannot survive being looked at</K>, { pop: true }],
      ["It only stops supplying the one who was supposed to be undergoing all of it", 960, 530, <Wd c={CHALK} s={26}>dependency keeps the candle, the burning, the clock</Wd>],
      ["It only stops supplying the one who was supposed to be undergoing all of it", 960, 600, <Wd c={DIM} s={24}>and stops supplying the one undergoing it</Wd>, { d: 2 }],
    ]} />
  </AbsoluteFill>
);

const TestScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["This can be tested at once", 960, 90, <Wd c={TEAL} s={40} serif>In practice</Wd>],
        ["The sound that is fading", 1340, 280, <Wd c={CHALK} s={26}>a fading sound · a passing thought · a leaning flame</Wd>],
        ["Look for what is changing, apart from the changing", 1340, 380, <SK at="This is Section 4, Part 1 of the Dependent Arising series" s={26}>what is changing, apart from the changing</SK>],
        ["The picture insists it must be there", 1340, 480, <Wd c={DIM} s={24}>the picture insists it must be there</Wd>],
      ]} />
      <At x={560} y={520} o={1}><Candle /></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The looking finds more change, vivid and exact");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 4, Part 1 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 4 · Part 1</Wd>],
        ["The looking finds more change, vivid and exact", 960, 470, <Candle />],
        ["The looking finds more change, vivid and exact", 960, 820, <Wd c={CHALK} s={36} serif>More change, vivid and exact. No changer behind it.</Wd>, { d: 1 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Watch a candle burn, and the answer comes before any thought", "candle", <OpenScene />],
    ["First, the candle", "candle", <CandleScene />],
    ["So, two starting points", "start", <StartScene />],
    ["Now, the word logic needs care", "logic", <RulesScene />],
    ["What, then, of the famous refusals", "king", <KingScene />],
    ["Now go back to the candle, and look for the carrier", "flame", <ChangerScene />],
    ["So these are not two worlds", "rules", <OneScene />],
    ["This can be tested at once", "test", <TestScene />],
    ["This is Section 4, Part 1 of the Dependent Arising series", "night", <CloseScene />],
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
