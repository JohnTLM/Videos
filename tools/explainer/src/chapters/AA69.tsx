// Bonus video: Dependent Arising Section 7 Part 3: Twenty-Four Conditions, No Power (AA69), the close of the series.
// (Script: new-documents/after-anatta/aa69-twenty-four-conditions-no-power-script.md, from EBooks Bonus Articles/
// twenty-four-conditions-no-power; owner: "The 24 conditions must be in dependent arising section 7 too"; script and
// framing approved 28 Nov 2026: "Approved".)
// Arc: twenty-four ways, a condition assists -> the question -> what a condition is -> four I already use -> where I
// part: the pieces -> conditions are the appearing -> the map kept -> close of the series.
// Stance: no condition drawn as a power handed across; the qualities end as one appearing, not as pieces.
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
  "ways one thing conditions another", "And it defined a condition as what assists", "I am John Tan, known as Thusness",
  "I say often that conditions condition", "has a whole book on conditions", "It is the longest work in its canon",
  "This last part meets it",
  // def
  "defines a condition in one line", "Not produces. Not creates. Assists",
  "He also says that no single cause gives a fruit", "That is close to what I mean",
  "What I never find is a power sitting in the cause", "word already leaves that power out",
  // four
  "I will take four, because I have been using them", "Mutuality. Things that support each other at once",
  "These are the two sheaves of reeds", "Decisive support", "We arrange them, and something grows",
  "Kamma from another time", "Its images are an echo", "This is what I call neither carried, nor cut",
  "Absence. A mind moment that has ceased", "Nothing passes. The moment before", "So the reeds, the arranged conditions",
  // part
  "keeps one thing I do not keep: the pieces", "Its commentaries say each dhamma bears its own nature",
  "But the pieces remain the real units", "That is where I part", "finds the dharmas empty too",
  "So I would say it the other way round", "Conditions are the appearing", "The cuts are useful. They are not the floor",
  // map
  "None of this throws the map away", "It is a very good one", "with no one inside holding it",
  "What I add is only this", "It is how appearing goes together",
  // close
  "This is Section 7, Part 3 of the Dependent Arising series, and the close of the series", "No power. And nothing lost",
];

const M = {
  open: { a: "rgba(170,120,50,0.42)", b: "rgba(50,70,120,0.44)", c: "rgba(60,110,90,0.3)" },
  def: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  four: { a: "rgba(60,110,80,0.46)", b: "rgba(150,120,60,0.34)", c: "rgba(40,80,100,0.32)" },
  part: { a: "rgba(150,70,60,0.42)", b: "rgba(60,50,120,0.44)", c: "rgba(150,110,60,0.3)" },
  map: { a: "rgba(40,100,130,0.46)", b: "rgba(150,110,60,0.34)", c: "rgba(40,90,110,0.32)" },
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
/** Four qualities: first as separate boxed pieces with links between them, then as one appearing. */
const Pieces: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = ramp(t, c("Conditions are the appearing") + 0.6, 1.8);
  const q = ["hardness", "moisture", "warmth", "motion"];
  return (
    <div style={{ position: "relative", width: 1300, height: 220 }}>
      {q.map((w, i) => {
        const x0 = 130 + i * 340, x1 = 400 + i * 165;
        const x = x0 + (x1 - x0) * one;
        return (
          <div key={i} style={{ position: "absolute", left: x, top: 110, transform: "translate(-50%,-50%)" }}>
            <div style={{ padding: "10px 18px", borderRadius: 12, border: `2px solid rgba(220,200,160,${0.8 * (1 - one)})`,
              background: `rgba(10,12,30,${0.7 * (1 - one)})` }}>
              <Wd c={one > 0.5 ? TEAL : CHALK} s={26}>{w}</Wd>
            </div>
          </div>
        );
      })}
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ position: "absolute", left: 130 + i * 340 + 80, top: 108, width: 180, height: 3,
          background: DIM, opacity: 0.7 * (1 - one) }} />
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: 170, textAlign: "center", opacity: one }}>
        <Wd c={GOLD} s={24}>one appearing</Wd>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["ways one thing conditions another", 960, 360, <Wd c={CHALK} s={40} serif>twenty-four ways one thing conditions another</Wd>],
        ["And it defined a condition as what assists", 960, 480, <K c={GOLD} s={32}>a condition assists · it does not produce</K>, { pop: true }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="I say often that conditions condition">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Twenty-Four Conditions, No Power</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 7 · Part 3 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="I say often that conditions condition">
      <Items items={[
        ["I say often that conditions condition", 960, 260, <Wd c={CHALK} s={30} serif>conditions condition · no causal power is found</Wd>],
        ["I say often that conditions condition", 960, 350, <Wd c={DIM} s={24}>"is that not just the Abhidhamma?"</Wd>, { d: 3 }],
        ["has a whole book on conditions", 960, 480, <K c={GOLD} s={28}>the Paṭṭhāna, the Great Treatise</K>, { pop: true }],
        ["It is the longest work in its canon", 960, 570, <Wd c={DIM} s={22}>the longest work in its canon</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const DefScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["defines a condition in one line", 960, 110, <Wd c={VIOLET} s={40} serif>What a condition is</Wd>],
      ["defines a condition in one line", 960, 250, <Wd c={CHALK} s={30} serif>it helps a state to arise, or to stay</Wd>, { d: 2.5 }],
      ["Not produces. Not creates. Assists", 960, 360, <SK at="Not produces. Not creates. Assists" d={1.8} s={26}>produces · creates</SK>],
      ["Not produces. Not creates. Assists", 960, 440, <K c={GOLD} s={30}>assists</K>, { pop: true, d: 2.4 }],
      ["He also says that no single cause gives a fruit", 960, 540, <Wd c={DIM} s={24}>no single cause gives a fruit · many causes, many fruits</Wd>],
      ["What I never find is a power sitting in the cause", 960, 650, <SK at="word already leaves that power out" s={24}>a power in the cause, handed across</SK>],
      ["word already leaves that power out", 960, 740, <Wd c={TEAL} s={24}>the word already leaves that power out</Wd>, { d: 0.6 }],
    ]} />
  </AbsoluteFill>
);

const FourScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["I will take four, because I have been using them", 960, 90, <Wd c={GREEN} s={38} serif>Four I already use</Wd>],
      ["Mutuality. Things that support each other at once", 500, 300, <Box c={TEAL} w={720} title="mutuality" sub="a tripod · the two sheaves of reeds · no first" />, { pop: true }],
      ["Decisive support", 1420, 300, <Box c={GREEN} w={720} title="decisive support" sub="faith, a teacher, food, a place · arranged, and something grows" />, { pop: true }],
      ["Kamma from another time", 500, 520, <Box c={WARM} w={720} title="kamma from another time" sub="an echo, a lamp, a seal · neither carried nor cut" />, { pop: true }],
      ["Absence. A mind moment that has ceased", 1420, 520, <Box c={VIOLET} w={720} title="absence" sub="the moment before gives opportunity · nothing passes" />, { pop: true }],
      ["So the reeds, the arranged conditions", 960, 720, <K c={GOLD} s={26}>all already in the tradition's own map</K>, { pop: true, d: 2 }],
    ]} />
  </AbsoluteFill>
);

const PartScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["keeps one thing I do not keep: the pieces", 960, 100, <Wd c={ROSE} s={40} serif>Where I part: the pieces</Wd>],
      ["Its commentaries say each dhamma bears its own nature", 960, 220, <Wd c={DIM} s={24}>each dhamma bears its own nature · conditioned, but the real units</Wd>],
      ["finds the dharmas empty too", 960, 300, <Wd c={CHALK} s={26}>the self, the person, the chariot seen through · the dharmas empty too</Wd>],
      ["So I would say it the other way round", 960, 470, <Pieces />],
      ["Conditions are the appearing", 960, 650, <K c={GOLD} s={30}>conditions are the appearing</K>, { pop: true }],
      ["The cuts are useful. They are not the floor", 960, 750, <Wd c={TEAL} s={24}>the cuts are useful · not the floor</Wd>],
    ]} />
  </AbsoluteFill>
);

const MapScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["None of this throws the map away", 960, 120, <Wd c={TEAL} s={40} serif>The map kept</Wd>],
      ["None of this throws the map away", 960, 260, <Wd c={CHALK} s={26}>for meditation · for ethics · for understanding rebirth</Wd>, { d: 2 }],
      ["with no one inside holding it", 960, 380, <Wd c={CHALK} s={28} serif>how a life is held together, with no one inside holding it</Wd>],
      ["What I add is only this", 960, 520, <Wd c={DIM} s={24}>the map's pieces are designated too</Wd>, { d: 1 }],
      ["It is how appearing goes together", 960, 630, <K c={GOLD} s={28}>assists: how appearing goes together</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("No power. And nothing lost");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 7, Part 3 of the Dependent Arising series, and the close of the series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · the close of the series</Wd>],
        ["No power. And nothing lost", 960, 440, <Wd c={CHALK} s={40} serif>twenty-four conditions</Wd>, { d: -1.5 }],
        ["No power. And nothing lost", 960, 540, <Wd c={TEAL} s={40} serif>no power, and nothing lost</Wd>, { d: 0.3 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["ways one thing conditions another", "open", <OpenScene />],
    ["defines a condition in one line", "def", <DefScene />],
    ["I will take four, because I have been using them", "four", <FourScene />],
    ["keeps one thing I do not keep: the pieces", "part", <PartScene />],
    ["None of this throws the map away", "map", <MapScene />],
    ["This is Section 7, Part 3 of the Dependent Arising series, and the close of the series", "night", <CloseScene />],
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
