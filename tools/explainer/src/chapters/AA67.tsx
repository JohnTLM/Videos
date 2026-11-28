// Bonus video: Dependent Arising: An Overview (AA67), the overview of all seven sections.
// (Script: new-documents/after-anatta/aa67-dependent-arising-overview-script.md, from EBooks Bonus Articles/
// dependent-arising-overview, approved by the owner 2026-11-28 ("Approve overview"); script approved: "approved aa67".)
// Arc: one thread -> its two halves -> Sections 1 to 7, each with its question, on a seven-station map -> how to read
// it -> close.
// Stance: emptiness never drawn as a thing or a void; both halves of the thread kept on screen together.
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
  "Seven sections. Twenty-nine parts. One thread", "I am John Tan, known as Thusness",
  "If you think you understand dependent arising, you don't", "Agreeing is not living in it",
  "So the series does not argue first", "By experience, by logic, and by how things work",
  "This overview says what each section asks",
  // thread
  "First, the thread", "Nothing appears with a nature of its own. Look for the apple",
  "Each time, what is looked for is not there by itself", "And what appears still works. The apple is still bitten",
  "Nothing is taken away", "Drop the first half", "Drop the second", "The series keeps both, in every section",
  // s1
  "Section 1 asks", "It starts with an apple", "Next, one bowl of liquid", "No finished world waits underneath",
  "Then two physicists", "Without essence, nothing turns ghostly",
  // s2
  "Section 2 asks", "A sound, a colour, a thought", "Then the habit retreats and looks for a floor",
  "The solid, the dreamlike and the described", "Then clarity. Is there a knower behind it",
  "The clarity is the sound itself", "From there, how what is seen can be complete", "Three parts follow",
  "One part goes to", "the last part shows where the big ideas come from",
  // s3
  "Section 3 asks", "Hear the rain and ask", "There has to be something underneath",
  "Then the place this habit is felt most sharply", "Seen through emptiness, the question is not answered",
  "And last, the living fact", "Reach for a cup, and no gap is ever crossed",
  // s4
  "Section 4 asks", "Watch a candle burn", "First a thing, then what happens to it",
  "The other way starts a step earlier", "Then the questions we ask about anything",
  "the questions lose their object", "It is where truth lives", "Last, continuity without a carrier",
  "The path becomes arranging conditions",
  // s5
  "Section 5 asks", "Here I stay with the tradition", "The chain is reeds leaning on each other",
  "Then, who ages and dies", "Karma and rebirth are kept", "Last, where the chain is cut",
  "What ends is the second arrow", "ignorance ends by seeing",
  // s6
  "Section 6 asks", "for teaching dependent arising, without ceasing", "How can arising be without arising",
  "A pattern, not a handover", "Then his chapter on the twelve links", "Only the owner is left out",
  "Last, how the chain ends", "Ignorance is not a thing to destroy", "And elaboration stops in emptiness",
  // s7
  "Section 7 asks", "First, compassion", "As I see it, compassion has two sides",
  "Then six objections, put as fairly as I can", "Is it all mind", "Is the physics stretched",
  // read
  "How to read it. In order, if you can", "Or start where your question is", "And try the tests",
  // close
  "This is the overview of the Dependent Arising series", "And the bell still rings",
];

const M = {
  open: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  thread: { a: "rgba(150,110,50,0.44)", b: "rgba(60,45,130,0.46)", c: "rgba(40,60,100,0.36)" },
  s1: { a: "rgba(150,90,70,0.44)", b: "rgba(60,50,120,0.42)", c: "rgba(170,125,50,0.3)" },
  s2: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  s3: { a: "rgba(40,100,130,0.46)", b: "rgba(60,50,120,0.4)", c: "rgba(40,90,110,0.32)" },
  s4: { a: "rgba(150,70,60,0.42)", b: "rgba(60,50,120,0.44)", c: "rgba(150,110,60,0.3)" },
  s5: { a: "rgba(170,120,50,0.42)", b: "rgba(50,70,120,0.44)", c: "rgba(60,110,90,0.3)" },
  s6: { a: "rgba(60,110,70,0.46)", b: "rgba(150,120,60,0.36)", c: "rgba(40,80,90,0.32)" },
  s7: { a: "rgba(160,80,90,0.44)", b: "rgba(150,110,60,0.36)", c: "rgba(60,50,120,0.34)" },
  read: { a: "rgba(60,90,130,0.46)", b: "rgba(150,110,60,0.34)", c: "rgba(60,110,90,0.3)" },
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
/** Seven stations on one gold thread; the current section is lit. */
const SEC = ["Formed?", "Phenomenon", "Mind and matter", "Logic", "Twelve links", "Nāgārjuna", "Questions"];
const Map7: React.FC<{ n: number }> = ({ n }) => (
  <div style={{ position: "relative", width: 1600, height: 70 }}>
    <div style={{ position: "absolute", left: 60, right: 60, top: 18, height: 3, background: GOLD, opacity: 0.45, borderRadius: 2 }} />
    {SEC.map((s, i) => {
      const on = i + 1 === n, past = i + 1 < n;
      return (
        <div key={i} style={{ position: "absolute", left: 60 + (i * 1480) / 6, top: 0, transform: "translateX(-50%)", textAlign: "center", width: 220 }}>
          <div style={{ width: 36, height: 36, margin: "0 auto", borderRadius: 18, border: `2px solid ${on ? GOLD : "rgba(200,200,220,0.4)"}`,
            background: on ? "rgba(200,170,90,0.35)" : past ? "rgba(200,170,90,0.15)" : "rgba(10,12,30,0.8)",
            boxShadow: on ? `0 0 20px ${GOLD}99` : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Wd c={on ? GOLD : DIM} s={18}>{String(i + 1)}</Wd>
          </div>
          <div style={{ marginTop: 4, opacity: on ? 1 : 0.55 }}><Wd c={on ? GOLD : DIM} s={16}>{s}</Wd></div>
        </div>
      );
    })}
  </div>
);
const Sec: React.FC<{ n: number; cue: string; col: string; q: string; items: It[] }> = ({ n, cue, col, q, items }) => (
  <AbsoluteFill>
    <Items items={[
      [cue, 960, 70, <Map7 n={n} />],
      [cue, 960, 200, <Wd c={col} s={34} serif>{q}</Wd>, { d: 0.4 }],
      ...items,
    ]} />
  </AbsoluteFill>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["Seven sections. Twenty-nine parts. One thread", 960, 340, <Wd c={CHALK} s={40} serif>seven sections · twenty-nine parts · one thread</Wd>],
        ["Seven sections. Twenty-nine parts. One thread", 960, 470, <Wd c={GOLD} s={36} serif>nothing appears with a nature of its own</Wd>, { d: 3 }],
        ["Seven sections. Twenty-nine parts. One thread", 960, 560, <Wd c={TEAL} s={36} serif>and what appears still works</Wd>, { d: 5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="If you think you understand dependent arising, you don't">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Dependent Arising: An Overview</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ]} />
    </Phase>
    <Phase from="If you think you understand dependent arising, you don't">
      <Items items={[
        ["If you think you understand dependent arising, you don't", 960, 200, <Wd c={CHALK} s={32} serif>if you think you understand it, you don't</Wd>],
        ["Agreeing is not living in it", 960, 290, <K c={ROSE} s={28}>agreeing is not living in it</K>, { pop: true }],
        ["So the series does not argue first", 600, 450, <Box c={WARM} w={560} title="stands on its own" sub="one way of seeing" />, { pop: true }],
        ["So the series does not argue first", 1320, 450, <Box c={TEAL} w={560} title="formed" sub="the other way of seeing" />, { pop: true, d: 2 }],
        ["By experience, by logic, and by how things work", 960, 610, <Wd c={DIM} s={26}>which holds? by experience · by logic · by how things work</Wd>],
        ["This overview says what each section asks", 960, 730, <Map7 n={0} />],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ThreadScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["First, the thread", 960, 100, <Wd c={GOLD} s={40} serif>The thread, in two halves</Wd>],
      ["Nothing appears with a nature of its own. Look for the apple", 540, 300, <Box c={VIOLET} w={720} title="nothing appears with a nature of its own" sub="the apple · the sound · the one who ages: not found by itself" />, { pop: true }],
      ["And what appears still works. The apple is still bitten", 1380, 300, <Box c={TEAL} w={720} title="and what appears still works" sub="bitten · rings · grief is no illusion" />, { pop: true }],
      ["Nothing is taken away", 960, 470, <Wd c={CHALK} s={26}>what goes: only the extra weight of taking things to stand on their own</Wd>],
      ["Drop the first half", 540, 600, <Wd c={WARM} s={24}>drop the first: solid · out there · mine</Wd>],
      ["Drop the second", 1380, 600, <Wd c={ICE} s={24}>drop the second: ghostly · a void behind things</Wd>],
      ["The series keeps both, in every section", 960, 730, <K c={GOLD} s={30}>both, in every section</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const S1: React.FC = () => <Sec n={1} cue="Section 1 asks" col={WARM} q="Is the world already there, or formed?" items={[
  ["It starts with an apple", 960, 340, <Wd c={CHALK} s={28}>an apple: sight · sound · smell · taste · touch · mind, meeting, named "apple"</Wd>],
  ["Next, one bowl of liquid", 960, 450, <Wd c={CHALK} s={28}>one bowl: water · pus · home · nectar</Wd>],
  ["No finished world waits underneath", 960, 530, <SK at="No finished world waits underneath" d={1.5} s={24}>a finished world underneath</SK>],
  ["Then two physicists", 960, 640, <Wd c={DIM} s={24}>two physicists: echoes, and where I part</Wd>],
  ["Without essence, nothing turns ghostly", 960, 740, <K c={TEAL} s={26}>empty, not ghostly · it still rains</K>, { pop: true }],
]} />;

const S2: React.FC = () => <Sec n={2} cue="Section 2 asks" col={VIOLET} q="What is it that appears?" items={[
  ["A sound, a colour, a thought", 960, 320, <Wd c={CHALK} s={26}>vivid · not found · dependently arisen, at once</Wd>],
  ["Then the habit retreats and looks for a floor", 960, 400, <SK at="The solid, the dreamlike and the described" d={2} s={24}>the instant · the smallest piece · space · the web</SK>],
  ["Then clarity. Is there a knower behind it", 960, 490, <Wd c={CHALK} s={26}>clarity without a knower</Wd>],
  ["The clarity is the sound itself", 960, 560, <Wd c={TEAL} s={24}>the clarity is the sound itself</Wd>],
  ["From there, how what is seen can be complete", 960, 640, <Wd c={DIM} s={24}>complete, and dependent</Wd>],
  ["Three parts follow", 960, 710, <Wd c={DIM} s={22}>shore and boat · firewood and ash · fish and bird · the net of jewels</Wd>],
  ["the last part shows where the big ideas come from", 960, 790, <Wd c={WARM} s={22}>privacy · objectivity · causal power · inside and outside</Wd>],
]} />;

const S3: React.FC = () => <Sec n={3} cue="Section 3 asks" col={TEAL} q="Is mind or matter worth leaning towards?" items={[
  ["Hear the rain and ask", 960, 330, <Wd c={CHALK} s={28}>the rain: what is it, really?</Wd>],
  ["There has to be something underneath", 960, 410, <Wd c={DIM} s={24}>mind · matter · some third stuff</Wd>],
  ["Then the place this habit is felt most sharply", 960, 510, <Wd c={CHALK} s={28}>the Hard Problem</Wd>],
  ["Seen through emptiness, the question is not answered", 960, 590, <Wd c={TEAL} s={24}>not answered: what it stands on is not found</Wd>],
  ["And last, the living fact", 960, 700, <K c={GOLD} s={26}>reach for a cup: no gap is ever crossed</K>, { pop: true }],
]} />;

const S4: React.FC = () => <Sec n={4} cue="Section 4 asks" col={ROSE} q="How do we reason without own natures?" items={[
  ["Watch a candle burn", 540, 360, <Box c={WARM} w={600} title="first a thing" sub="then what happens to it" />, { pop: true }],
  ["The other way starts a step earlier", 1380, 360, <Box c={TEAL} w={600} title="a step earlier" sub="how is anything picked out as a thing?" />, { pop: true }],
  ["Then the questions we ask about anything", 960, 520, <Wd c={DIM} s={24}>when did it start? where did it go? the same one?</Wd>],
  ["the questions lose their object", 960, 590, <Wd c={CHALK} s={26}>no thing found: the questions lose their object</Wd>],
  ["It is where truth lives", 960, 660, <Wd c={GOLD} s={24}>the conventional: where truth lives</Wd>],
  ["Last, continuity without a carrier", 960, 750, <K c={TEAL} s={24}>a melody, not a passenger · arranging conditions</K>, { pop: true }],
]} />;

const S5: React.FC = () => <Sec n={5} cue="Section 5 asks" col={GOLD} q="How does the tradition teach it?" items={[
  ["Here I stay with the tradition", 960, 330, <Wd c={CHALK} s={28}>when this is, that is · twelve links, forward and reverse</Wd>],
  ["The chain is reeds leaning on each other", 960, 410, <Wd c={DIM} s={24}>leaning reeds, not dominoes</Wd>],
  ["Then, who ages and dies", 960, 510, <Wd c={CHALK} s={28}>who ages and dies? not a valid question</Wd>],
  ["Karma and rebirth are kept", 960, 590, <Wd c={DIM} s={24}>karma and rebirth kept · no one who goes round</Wd>],
  ["Last, where the chain is cut", 960, 690, <K c={TEAL} s={26}>the pain still comes · the second arrow ends</K>, { pop: true }],
  ["ignorance ends by seeing", 960, 780, <Wd c={DIM} s={22}>ended by seeing, not by stopping thought</Wd>],
]} />;

const S6: React.FC = () => <Sec n={6} cue="Section 6 asks" col={GREEN} q="How does Nāgārjuna read it?" items={[
  ["for teaching dependent arising, without ceasing", 960, 330, <Wd c={CHALK} s={28} serif>without ceasing, without arising</Wd>],
  ["A pattern, not a handover", 960, 410, <K c={GOLD} s={26}>a pattern, not a handover</K>, { pop: true }],
  ["Then his chapter on the twelve links", 960, 510, <Wd c={DIM} s={24}>his chapter on the twelve links: no refutation in it</Wd>],
  ["Only the owner is left out", 960, 580, <Wd c={CHALK} s={26}>only the owner is left out</Wd>],
  ["Ignorance is not a thing to destroy", 960, 680, <Wd c={DIM} s={24}>ignorance: a way of taking things · elaboration</Wd>],
  ["And elaboration stops in emptiness", 960, 760, <K c={TEAL} s={26}>elaboration stops in emptiness</K>, { pop: true }],
]} />;

const S7: React.FC = () => <Sec n={7} cue="Section 7 asks" col={ROSE} q="What does it do for others? Does it survive?" items={[
  ["First, compassion", 960, 320, <Wd c={DIM} s={24}>compassion: not caused by emptiness, not diminished</Wd>],
  ["As I see it, compassion has two sides", 600, 440, <Box c={ROSE} w={560} title="an open heart" sub="shows itself as the habit loosens" />, { pop: true }],
  ["As I see it, compassion has two sides", 1320, 440, <Box c={GREEN} w={560} title="a learning" sub="grows as it is practised" />, { pop: true, d: 3 }],
  ["Then six objections, put as fairly as I can", 960, 610, <Wd c={CHALK} s={24}>nihilism? · all mind? · only concepts?</Wd>],
  ["Is the physics stretched", 960, 680, <Wd c={CHALK} s={24}>the Hard Problem avoided? · physics stretched? · a new absolute?</Wd>, { d: -1.5 }],
]} />;

const ReadScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["How to read it. In order, if you can", 960, 100, <Wd c={ICE} s={40} serif>How to read it</Wd>],
      ["How to read it. In order, if you can", 960, 260, <K c={GOLD} s={28}>in order, if you can</K>, { d: 1.5 }],
      ["How to read it. In order, if you can", 960, 340, <Wd c={DIM} s={22}>each section leans on the ones before</Wd>, { d: 3 }],
      ["Or start where your question is", 960, 460, <K c={TEAL} s={28}>or start where your question is</K>],
      ["Or start where your question is", 960, 540, <Wd c={DIM} s={22}>mind and matter: Section 3 · karma and rebirth: Section 5</Wd>, { d: 3 }],
      ["And try the tests", 960, 660, <K c={ROSE} s={28}>try the tests · the practice guide</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And the bell still rings");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is the overview of the Dependent Arising series", 960, 150, <Map7 n={8} />],
        ["This is the overview of the Dependent Arising series", 960, 300, <Wd c={GOLD} s={40} serif>Dependent Arising · seven sections</Wd>, { d: 1 }],
        ["And the bell still rings", 960, 470, <Wd c={CHALK} s={40} serif>nothing appears with a nature of its own,</Wd>, { d: -3 }],
        ["And the bell still rings", 960, 570, <Wd c={TEAL} s={40} serif>and the bell still rings</Wd>, { d: 0.3 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Seven sections. Twenty-nine parts. One thread", "open", <OpenScene />],
    ["First, the thread", "thread", <ThreadScene />],
    ["Section 1 asks", "s1", <S1 />],
    ["Section 2 asks", "s2", <S2 />],
    ["Section 3 asks", "s3", <S3 />],
    ["Section 4 asks", "s4", <S4 />],
    ["Section 5 asks", "s5", <S5 />],
    ["Section 6 asks", "s6", <S6 />],
    ["Section 7 asks", "s7", <S7 />],
    ["How to read it. In order, if you can", "read", <ReadScene />],
    ["This is the overview of the Dependent Arising series", "night", <CloseScene />],
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
