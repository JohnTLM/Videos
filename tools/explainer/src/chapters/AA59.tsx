// Bonus video: Dependent Arising Section 5 Part 1: When This Is, That Is (AA59).
// (Script: new-documents/after-anatta/aa59-when-this-is-that-is-script.md, from EBooks Bonus Articles/
// when-this-is-that-is, approved by the owner 2026-11-28; script approved the same day: "Approved".)
// Arc: a harsh word becomes a grievance -> Sections 1-4 recalled -> the sentence, "when this is, that is" -> the
// twelve links, lit one by one on a wheel -> forward and reverse -> not dominoes but leaning reeds -> three readings
// (three lives, four ways, the moment) -> one afternoon, link by link -> deep, and appearing deep -> close.
// Stance: the tradition's standpoint; nothing is drawn as a power passing from this to that.
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
  "A harsh word is said in the morning", "I am John Tan, known as Thusness",
  "Four sections have looked at dependent arising as a view", "But when the Buddha speaks of dependent arising",
  "He gives it as twelve links",
  // sentence
  "Before the twelve, there is one sentence", "When this is, that is. From the arising of this, that arises",
  "When this is not, that is not", "But look at what it does not say", "It only says, when",
  "Nothing is passed across",
  // links
  "Applied to suffering, the sentence becomes a chain", "Ignorance. Not knowing suffering",
  "Formations. Intentional shaping", "Consciousness. Knowing, through the six senses",
  "Name and form. Feeling, perception", "The six senses. The fields where meeting happens",
  "Contact. Sense, object and consciousness", "Feeling. Pleasant, painful, or neither",
  "Craving. Thirst, for more of the pleasant", "Clinging. Taking hold", "Becoming. Taking on a mode of existence",
  "Birth. And ageing and death, with sorrow",
  // orders
  "In forward order, each conditions the next", "In reverse order, each ends with the ending of the one before",
  "As I read them, the forward order describes how suffering runs", "A teaching that gave only the first would describe a trap",
  // reeds
  "It is natural to picture the twelve as a line of dominoes", "In one long discourse, the chain stops at consciousness",
  "The image given is two sheaves of reeds", "A line of dominoes has a first domino",
  "Reeds leaning on each other have no first",
  // scales
  "The tradition has read this chain at more than one scale", "The classical reading spreads it over three lives",
  "Another school allowed four ways of taking the chain", "And some modern teachers, the Thai monk",
  "I do not think these need to compete", "Emptiness removes one objection to rebirth",
  "But that does not prove that rebirth happens", "What I can say from practice",
  // afternoon
  "Someone says something harsh to me at work", "There is contact. The words, the ear",
  "There is feeling. Unpleasant, sharp", "Then craving. For it to stop", "Then clinging. To a view",
  "Then becoming. I take on a whole mode of being", "Then birth. By evening", "Then ageing and death. It hardens",
  "And behind it, ignorance and formations", "Nothing in that afternoon was made by one thing alone",
  // deep
  "told the Buddha that dependent arising seemed plain to him", "This dependent arising is deep, he said",
  "The twelve links are not hard to memorise",
  // close
  "This is Section 5, Part 1 of the Dependent Arising series",
  "It describes how the knot is tied",
];

const M = {
  open: { a: "rgba(130,60,60,0.44)", b: "rgba(50,70,130,0.42)", c: "rgba(140,100,50,0.3)" },
  sentence: { a: "rgba(170,125,50,0.42)", b: "rgba(40,60,120,0.46)", c: "rgba(40,100,120,0.3)" },
  links: { a: "rgba(60,45,130,0.5)", b: "rgba(150,100,50,0.34)", c: "rgba(40,90,120,0.32)" },
  orders: { a: "rgba(40,100,130,0.46)", b: "rgba(130,60,80,0.38)", c: "rgba(60,60,130,0.32)" },
  reeds: { a: "rgba(60,110,70,0.46)", b: "rgba(150,120,60,0.36)", c: "rgba(40,80,90,0.32)" },
  scales: { a: "rgba(80,50,120,0.48)", b: "rgba(40,80,120,0.42)", c: "rgba(120,90,50,0.3)" },
  noon: { a: "rgba(150,70,60,0.44)", b: "rgba(60,50,120,0.42)", c: "rgba(150,110,60,0.3)" },
  deep: { a: "rgba(30,40,100,0.56)", b: "rgba(70,50,130,0.42)", c: "rgba(20,60,90,0.4)" },
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
const LINKS = ["ignorance", "formations", "consciousness", "name and form", "six senses", "contact",
  "feeling", "craving", "clinging", "becoming", "birth", "ageing and death"];
const LINK_CUES: [string, number][] = [
  ["Ignorance. Not knowing suffering", 0], ["Formations. Intentional shaping", 0],
  ["Consciousness. Knowing, through the six senses", 0], ["Name and form. Feeling, perception", 0],
  ["The six senses. The fields where meeting happens", 0], ["Contact. Sense, object and consciousness", 0],
  ["Feeling. Pleasant, painful, or neither", 0], ["Craving. Thirst, for more of the pleasant", 0],
  ["Clinging. Taking hold", 0], ["Becoming. Taking on a mode of existence", 0],
  ["Birth. And ageing and death, with sorrow", 0], ["Birth. And ageing and death, with sorrow", 0.9],
];

/** The twelve links on a ring, each lit when it is named; a travelling light shows forward or reverse order. */
const Wheel: React.FC<{ r?: number; mode?: "name" | "forward" | "reverse" }> = ({ r = 300, mode = "name" }) => {
  const { t } = useT();
  const c = useCue();
  const k = mode === "forward" ? Math.floor((t * 2) % 12) : mode === "reverse" ? 11 - Math.floor((t * 2) % 12) : -1;
  return (
    <svg width={r * 2 + 300} height={r * 2 + 120} viewBox={`${-r - 150} ${-r - 60} ${r * 2 + 300} ${r * 2 + 120}`} style={{ overflow: "visible" }}>
      <circle cx={0} cy={0} r={r} fill="none" stroke={DIM} strokeWidth={2} opacity={0.5} />
      {LINKS.map((l, i) => {
        const ang = -Math.PI / 2 + (i * 2 * Math.PI) / 12;
        const x = r * Math.cos(ang), y = r * Math.sin(ang);
        const [cue, d] = LINK_CUES[i];
        const lit = mode === "name" ? ramp(t, c(cue) + d, 0.4) : 1;
        const hot = k === i;
        const col = hot ? GOLD : i === 0 ? ROSE : i === 7 || i === 8 ? WARM : CHALK;
        return (
          <g key={i} opacity={0.25 + 0.75 * lit}>
            <circle cx={x} cy={y} r={hot ? 20 : 14} fill={hot ? GOLD : "rgba(10,12,30,0.8)"} stroke={col} strokeWidth={3} />
            <text x={x + Math.cos(ang) * 30} y={y + Math.sin(ang) * 30 + 9}
              textAnchor={Math.cos(ang) > 0.2 ? "start" : Math.cos(ang) < -0.2 ? "end" : "middle"}
              fill={col} fontSize={28} fontFamily="serif">{l}</text>
          </g>
        );
      })}
    </svg>
  );
};

/** A row of dominoes, the first one falling. */
const Dominoes: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={560} height={220} viewBox="0 0 560 220" style={{ overflow: "visible" }}>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const ph = (t * 0.35) % 1.6;
        const tilt = Math.min(62, Math.max(0, (ph * 7 - i) * 62));
        return <rect key={i} x={40 + i * 85} y={60} width={26} height={130} rx={4} fill="rgba(240,230,210,0.25)" stroke={CHALK} strokeWidth={3}
          transform={`rotate(${tilt} ${66 + i * 85} 190)`} />;
      })}
    </svg>
  );
};
/** Two sheaves of reeds leaning on each other. */
const Reeds: React.FC<{ label?: boolean }> = ({ label = true }) => {
  const { t } = useT();
  const sway = 2 * Math.sin(t * 1.2);
  const sheaf = (dx: number, rot: number, col: string) => (
    <g transform={`translate(${dx} 0) rotate(${rot + sway} 0 200)`}>
      {[-12, -6, 0, 6, 12].map((o, i) => <line key={i} x1={o} y1={200} x2={o * 0.4} y2={-10} stroke={col} strokeWidth={4} strokeLinecap="round" />)}
      <line x1={-16} y1={120} x2={16} y2={120} stroke={GOLD} strokeWidth={5} />
    </g>
  );
  return (
    <svg width={420} height={330} viewBox="-210 -40 420 330" style={{ overflow: "visible" }}>
      {sheaf(-58, 14, GREEN)}
      {sheaf(58, -14, TEAL)}
      <line x1={-180} y1={204} x2={180} y2={204} stroke={DIM} strokeWidth={3} />
      {label ? <>
        <text x={-130} y={250} textAnchor="middle" fill={GREEN} fontSize={24} fontFamily="serif">consciousness</text>
        <text x={130} y={250} textAnchor="middle" fill={TEAL} fontSize={24} fontFamily="serif">name and form</text>
      </> : null}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A harsh word is said in the morning", 960, 360, <Wd c={ROSE} s={44} serif>a harsh word, in the morning</Wd>],
        ["A harsh word is said in the morning", 960, 520, <Wd c={WARM} s={40} serif>by evening, a grievance with a life of its own</Wd>, { d: 2 }],
        ["A harsh word is said in the morning", 960, 680, <Wd c={DIM} s={30}>how did that happen?</Wd>, { d: 4 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Four sections have looked at dependent arising as a view">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>When This Is, That Is</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 5 · The Twelve Links · Part 1</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Four sections have looked at dependent arising as a view">
      <Items items={[
        ["Four sections have looked at dependent arising as a view", 960, 220, <Wd c={DIM} s={26}>formed? · what is a phenomenon? · mind and matter · the logic of dependency</Wd>],
        ["But when the Buddha speaks of dependent arising", 960, 400, <Wd c={CHALK} s={34} serif>how suffering comes about, and how it ends</Wd>],
        ["He gives it as twelve links", 960, 560, <K c={GOLD} s={30}>the twelve links, as the tradition teaches them</K>, { pop: true }],
        ["He gives it as twelve links", 960, 660, <Wd c={DIM} s={24}>next section: the same links, read with Nāgārjuna</Wd>, { d: 4 }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const SentenceScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Before the twelve, there is one sentence", 960, 100, <Wd c={GOLD} s={40} serif>One sentence</Wd>],
      ["When this is, that is. From the arising of this, that arises", 960, 260, <Wd c={CHALK} s={40} serif>When this is, that is.</Wd>],
      ["When this is, that is. From the arising of this, that arises", 960, 340, <Wd c={CHALK} s={36} serif>From the arising of this, that arises.</Wd>, { d: 1.6 }],
      ["When this is not, that is not", 960, 420, <Wd c={CHALK} s={40} serif>When this is not, that is not.</Wd>],
      ["When this is not, that is not", 960, 500, <Wd c={CHALK} s={36} serif>From the ceasing of this, that ceases.</Wd>, { d: 1.6 }],
      ["But look at what it does not say", 960, 640, <SK at="It only says, when" s={26}>this makes that · a power passes from this into that</SK>],
      ["It only says, when", 960, 730, <K c={GOLD} s={30}>only: when</K>, { pop: true }],
      ["Nothing is passed across", 960, 800, <Wd c={TEAL} s={28} serif>named together, in arising and in ceasing · nothing passed across</Wd>],
    ]} />
  </AbsoluteFill>
);

const LinksScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Applied to suffering, the sentence becomes a chain", 960, 70, <Wd c={VIOLET} s={38} serif>The twelve links</Wd>],
      ["Applied to suffering, the sentence becomes a chain", 960, 470, <Wheel r={250} mode="name" />, { d: 0.5 }],
    ]} />
  </AbsoluteFill>
);

const OrdersScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="In reverse order, each ends with the ending of the one before">
      <Items items={[
        ["In forward order, each conditions the next", 960, 70, <Wd c={WARM} s={38} serif>Forward: the arising of this whole mass of suffering</Wd>],
        ["In forward order, each conditions the next", 960, 480, <Wheel r={250} mode="forward" />],
      ]} />
    </Phase>
    <Phase from="In reverse order, each ends with the ending of the one before" to="As I read them, the forward order describes how suffering runs">
      <Items items={[
        ["In reverse order, each ends with the ending of the one before", 960, 70, <Wd c={TEAL} s={38} serif>Reverse: the ending of this whole mass of suffering</Wd>],
        ["In reverse order, each ends with the ending of the one before", 960, 480, <Wheel r={250} mode="reverse" />],
      ]} />
    </Phase>
    <Phase from="As I read them, the forward order describes how suffering runs">
      <Items items={[
        ["As I read them, the forward order describes how suffering runs", 540, 380, <Box c={WARM} w={640} title="forward" sub="how suffering runs, while ignorance is present" />, { pop: true }],
        ["As I read them, the forward order describes how suffering runs", 1380, 380, <Box c={TEAL} w={640} title="reverse" sub="how it ends, when ignorance ends" />, { pop: true, d: 2.5 }],
        ["A teaching that gave only the first would describe a trap", 960, 620, <K c={GOLD} s={28}>given so that the trap can be seen, and left</K>, { pop: true, d: 1.5 }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ReedsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["It is natural to picture the twelve as a line of dominoes", 960, 90, <Wd c={GREEN} s={40} serif>Not dominoes</Wd>],
      ["It is natural to picture the twelve as a line of dominoes", 480, 380, <Dominoes />, { d: 0.5 }],
      ["In one long discourse, the chain stops at consciousness", 1440, 520, <Wd c={DIM} s={22}>the chain turns back on itself</Wd>],
      ["The image given is two sheaves of reeds", 1440, 340, <Reeds />, { pop: true }],
      ["A line of dominoes has a first domino", 480, 600, <SK at="Reeds leaning on each other have no first" s={24}>a first domino, standing on its own</SK>],
      ["Reeds leaning on each other have no first", 1440, 640, <K c={GOLD} s={26}>leaning reeds: no first</K>, { pop: true }],
      ["Reeds leaning on each other have no first", 960, 800, <Wd c={CHALK} s={26} serif>no first point of the round is found</Wd>, { d: 1.5 }],
    ]} />
  </AbsoluteFill>
);

const ScalesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The tradition has read this chain at more than one scale", 960, 90, <Wd c={VIOLET} s={40} serif>Three ways of reading it</Wd>],
      ["The classical reading spreads it over three lives", 400, 320, <Box c={GOLD} w={540} title="across three lives" sub="past · this life · the next: rebirth at the centre" />, { pop: true }],
      ["Another school allowed four ways of taking the chain", 960, 320, <Box c={ICE} w={540} title="four ways" sub="a moment · a long span · a series · stages across lives" />, { pop: true }],
      ["And some modern teachers, the Thai monk", 1520, 320, <Box c={TEAL} w={540} title="in the moment" sub="as it runs in present experience" />, { pop: true }],
      ["I do not think these need to compete", 960, 520, <K c={GOLD} s={28}>one pattern, two scales</K>, { pop: true }],
      ["Emptiness removes one objection to rebirth", 960, 640, <Wd c={CHALK} s={24}>no carrier needed: one objection removed</Wd>],
      ["But that does not prove that rebirth happens", 960, 710, <Wd c={DIM} s={24}>not a proof: a matter for its own evidence</Wd>],
      ["What I can say from practice", 960, 790, <Wd c={CHALK} s={28} serif>the same chain, in a single afternoon</Wd>],
    ]} />
  </AbsoluteFill>
);

const NOON: [string, string, string][] = [
  ["There is contact. The words, the ear", "contact", "the words, the ear"],
  ["There is feeling. Unpleasant, sharp", "feeling", "unpleasant, sharp"],
  ["Then craving. For it to stop", "craving", "an apology · to be shown right"],
  ["Then clinging. To a view", "clinging", "“I was wronged”"],
  ["Then becoming. I take on a whole mode of being", "becoming", "the injured party"],
  ["Then birth. By evening", "birth", "a grievance, rehearsed in the car"],
  ["Then ageing and death. It hardens", "ageing and death", "it hardens, it fades, leaving sorrow"],
];
const NoonScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Someone says something harsh to me at work", 960, 80, <Wd c={ROSE} s={40} serif>One afternoon</Wd>],
      ...NOON.map(([cue, l, sub], i): It => [cue, 520, 170 + i * 78, <K c={i >= 2 && i <= 3 ? WARM : CHALK} s={26}>{l}</K>, { pop: true }]),
      ...NOON.map(([cue, , sub], i): It => [cue, 1240, 170 + i * 78, <Wd c={DIM} s={24}>{sub}</Wd>, { d: 0.4 }]),
      ["And behind it, ignorance and formations", 960, 720, <Wd c={ROSE} s={26} serif>behind it: ignorance and formations, the old readiness to react</Wd>],
      ["Nothing in that afternoon was made by one thing alone", 960, 800, <K c={GOLD} s={24}>not made by one thing alone · not without conditions</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const DeepScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["told the Buddha that dependent arising seemed plain to him", 960, 300, <SK at="This dependent arising is deep, he said" s={30}>plain as plain can be</SK>],
      ["This dependent arising is deep, he said", 960, 440, <Wd c={GOLD} s={44} serif>deep, and it appears deep</Wd>],
      ["The twelve links are not hard to memorise", 960, 640, <Wd c={CHALK} s={28}>easy to memorise · hard to see run</Wd>],
      ["The twelve links are not hard to memorise", 960, 720, <Wd c={DIM} s={26}>without someone at the centre, turning the wheel</Wd>, { d: 3 }],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("It describes how the knot is tied");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 5, Part 1 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 5 · Part 1</Wd>],
        ["It describes how the knot is tied", 960, 440, <Wd c={CHALK} s={44} serif>When this is, that is.</Wd>],
        ["It describes how the knot is tied", 960, 600, <Wd c={WARM} s={30} serif>how the knot is tied</Wd>, { d: 0.8 }],
        ["It describes how the knot is tied", 960, 680, <Wd c={TEAL} s={30} serif>how the knot comes loose</Wd>, { d: 2.6 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A harsh word is said in the morning", "open", <OpenScene />],
    ["Before the twelve, there is one sentence", "sentence", <SentenceScene />],
    ["Applied to suffering, the sentence becomes a chain", "links", <LinksScene />],
    ["In forward order, each conditions the next", "orders", <OrdersScene />],
    ["It is natural to picture the twelve as a line of dominoes", "reeds", <ReedsScene />],
    ["The tradition has read this chain at more than one scale", "scales", <ScalesScene />],
    ["Someone says something harsh to me at work", "noon", <NoonScene />],
    ["told the Buddha that dependent arising seemed plain to him", "deep", <DeepScene />],
    ["This is Section 5, Part 1 of the Dependent Arising series", "night", <CloseScene />],
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
