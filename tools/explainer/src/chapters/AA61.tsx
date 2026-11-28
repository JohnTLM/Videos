// Bonus video: Dependent Arising Section 5 Part 3: Where the Chain Is Cut (AA61), the close of Section 5.
// (Script: new-documents/after-anatta/aa61-where-the-chain-is-cut-script.md, from EBooks Bonus Articles/
// where-the-chain-is-cut, approved by the owner 2026-11-28; script approved the same day: "Approved".)
// Arc: the first arrow and the second -> from Parts 1 and 2 -> the reverse order: not link by link -> two places to
// watch: ignorance, and feeling to craving -> the second arrow; not numbness -> seeing, not stopping thought -> what
// ends: becoming, not the world; the fire gone out -> the chain toward freedom -> the afternoon again -> close.
// Stance: the tradition's standpoint; the ending is never drawn as a blank or a destruction.
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
  "A painful feeling is the first arrow", "I am John Tan, known as Thusness",
  "Part 1 set out the twelve links, and traced them", "The twelve links come in two orders",
  // reverse
  "The discourses give it as plainly as the forward order", "So the chain does not have to be broken link by link",
  "Each link stands only on its condition", "When this is not, that is not",
  // two places
  "The tradition points to two places", "At the start, ignorance", "So it ends by knowing those four",
  "And in the middle, feeling and craving", "This is one of the three joints of the chain",
  "I see these as two sides of one cut",
  // arrow
  "The Buddha gives an image for the middle", "When an untaught person is touched by a painful feeling",
  "It is as if they were struck by one arrow", "When a taught disciple is touched",
  "Struck by the first arrow, they are not struck by the second", "Notice what this does not say",
  "What ends is the second arrow", "So the cut is not numbness", "The reverse order leaves the world vivid",
  // seeing
  "How does ignorance end? In the discourses, by seeing", "Ignorance does not end by stopping thought",
  "A quiet, wordless mind can be very pleasant", "But thought is not the problem. The habit of fixing is",
  "A quiet mind does not end that habit by being quiet", "What ends it is seeing",
  // ends
  "Such is the ending of this whole mass of suffering. It is easy to hear", "The discourses do not say that",
  "The ending of becoming", "Not the bell ringing when struck", "And when a wanderer asks where",
  "When a fire goes out, in which direction has it gone", "It went out because its fuel was used up",
  "The ending of suffering is not a thing being destroyed",
  // freedom
  "There is one more teaching I want to include", "With suffering as condition, there is faith",
  "Then seeing things as they are", "The same sentence runs both ways", "The path is not outside dependent arising",
  // afternoon
  "Return to the afternoon of Part 1", "There is contact. The words", "The first arrow lands, and that is fine",
  "But this time it is seen", "A feeling arising and passing", "The pull does not find much to hold",
  "The words were still heard",
  // close
  "This is Section 5, Part 3 of the Dependent Arising series, and the close of Section 5",
  "What changed is only that the chain was watched",
];

const M = {
  open: { a: "rgba(130,60,60,0.44)", b: "rgba(50,70,130,0.42)", c: "rgba(140,100,50,0.3)" },
  reverse: { a: "rgba(40,100,130,0.46)", b: "rgba(60,50,120,0.4)", c: "rgba(40,90,110,0.32)" },
  two: { a: "rgba(80,50,120,0.5)", b: "rgba(150,100,50,0.34)", c: "rgba(40,80,120,0.32)" },
  arrow: { a: "rgba(150,60,60,0.44)", b: "rgba(40,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  seeing: { a: "rgba(60,45,130,0.5)", b: "rgba(40,110,120,0.36)", c: "rgba(30,70,120,0.3)" },
  ends: { a: "rgba(170,110,40,0.42)", b: "rgba(40,40,100,0.5)", c: "rgba(40,40,80,0.4)" },
  freedom: { a: "rgba(60,110,70,0.46)", b: "rgba(170,140,60,0.36)", c: "rgba(40,100,110,0.32)" },
  noon: { a: "rgba(60,90,130,0.46)", b: "rgba(150,110,60,0.34)", c: "rgba(60,110,90,0.3)" },
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
/** A chain of links fading out one after another, from the start. */
const Fading: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("So the chain does not have to be broken link by link");
  const names = ["ignorance", "formations", "consciousness", "name and form", "six senses", "contact",
    "feeling", "craving", "clinging", "becoming", "birth", "ageing and death"];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, width: 1500 }}>
      {names.map((n, i) => {
        const o = 1 - 0.85 * ramp(t, a + 1 + i * 0.45, 0.5);
        return <div key={i} style={{ opacity: o }}><K c={i === 0 ? ROSE : CHALK} s={24}>{n}</K></div>;
      })}
    </div>
  );
};
/** A figure struck by one arrow, and perhaps a second. */
const Arrows: React.FC<{ second: boolean }> = ({ second }) => (
  <svg width={360} height={300} viewBox="-180 -150 360 300" style={{ overflow: "visible" }}>
    <circle cx={0} cy={-80} r={28} fill="none" stroke={CHALK} strokeWidth={4} />
    <path d="M0 -50 L0 50 M0 50 L-40 120 M0 50 L40 120 M-50 -10 L50 -10" stroke={CHALK} strokeWidth={4} fill="none" />
    <g><line x1={-150} y1={-60} x2={-12} y2={0} stroke={WARM} strokeWidth={5} /><path d="M-12 0 L-30 -16 L-26 6 Z" fill={WARM} /></g>
    {second ? <g><line x1={150} y1={-110} x2={14} y2={-60} stroke={ROSE} strokeWidth={5} /><path d="M14 -60 L34 -72 L28 -50 Z" fill={ROSE} /></g> : null}
  </svg>
);
/** A fire burning down, and going out as its fuel is used. */
const FireOut: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("It went out because its fuel was used up");
  const k = 1 - ramp(t, a, 2.5);
  const h = (60 + 8 * Math.sin(t * 6)) * k;
  return (
    <svg width={300} height={260} viewBox="-150 -170 300 260" style={{ overflow: "visible" }}>
      {[-50, -20, 10, 40].map((x, i) => <line key={i} x1={x - 30} y1={70} x2={x + 30} y2={40} stroke="rgba(150,110,70,0.8)" strokeWidth={10} strokeLinecap="round" opacity={0.3 + 0.7 * k} />)}
      <path d={`M0 ${40 - h * 1.6} C40 ${40 - h} 34 40 0 40 C-34 40 -40 ${40 - h} 0 ${40 - h * 1.6} Z`} fill="rgba(240,150,60,0.8)" stroke={GOLD} strokeWidth={3} opacity={k} />
    </svg>
  );
};
const STEPS = ["suffering", "faith", "gladness", "joy", "calm", "happiness", "a settled mind", "seeing as it is",
  "turning away", "letting go", "freedom"];
const Steps: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("With suffering as condition, there is faith");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, width: 1600 }}>
      {STEPS.map((s, i) => (
        <div key={i} style={{ opacity: ramp(t, a + i * 0.7, 0.4) }}>
          <K c={i === 0 ? ROSE : i === STEPS.length - 1 ? GOLD : GREEN} s={24}>{s}{i < STEPS.length - 1 ? "  →" : ""}</K>
        </div>
      ))}
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A painful feeling is the first arrow", 960, 400, <Arrows second={false} />],
        ["A painful feeling is the first arrow", 960, 680, <Wd c={WARM} s={36} serif>the first arrow · what we do with it, the second</Wd>, { d: 1.5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Part 1 set out the twelve links, and traced them">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Where the Chain Is Cut</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 5 · Part 3 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Part 1 set out the twelve links, and traced them">
      <Items items={[
        ["Part 1 set out the twelve links, and traced them", 960, 300, <Wd c={DIM} s={26}>Part 1: the twelve links · Part 2: no one goes round</Wd>],
        ["The twelve links come in two orders", 960, 440, <Wd c={CHALK} s={34} serif>now the second order: how the chain stops</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ReverseScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The discourses give it as plainly as the forward order", 960, 100, <Wd c={TEAL} s={40} serif>The reverse order</Wd>],
      ["The discourses give it as plainly as the forward order", 960, 200, <Wd c={DIM} s={24}>with the ending of ignorance, formations end … such is the ending of this whole mass of suffering</Wd>, { d: 1 }],
      ["So the chain does not have to be broken link by link", 960, 400, <Fading />],
      ["Each link stands only on its condition", 960, 620, <Wd c={CHALK} s={26}>each link stands only on its condition</Wd>],
      ["When this is not, that is not", 960, 720, <K c={GOLD} s={30}>when this is not, that is not</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const TwoScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The tradition points to two places", 960, 100, <Wd c={VIOLET} s={40} serif>Two places to watch</Wd>],
      ["At the start, ignorance", 520, 330, <Box c={ROSE} w={660} title="at the start: ignorance" sub="not knowing suffering, its arising, its ending, the way" />, { pop: true }],
      ["So it ends by knowing those four", 520, 480, <Wd c={DIM} s={22}>ends by knowing those four: insight</Wd>],
      ["And in the middle, feeling and craving", 1400, 330, <Box c={WARM} w={660} title="in the middle: feeling → craving" sub="more of the pleasant · an end to the painful" />, { pop: true }],
      ["This is one of the three joints of the chain", 1400, 480, <Wd c={DIM} s={22}>where what is met turns into what is done</Wd>],
      ["I see these as two sides of one cut", 960, 660, <K c={GOLD} s={28}>two sides of one cut</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const ArrowScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The Buddha gives an image for the middle", 960, 90, <Wd c={ROSE} s={40} serif>The second arrow</Wd>],
      ["When an untaught person is touched by a painful feeling", 540, 340, <Arrows second={true} />],
      ["It is as if they were struck by one arrow", 540, 560, <Wd c={DIM} s={24}>two pains: bodily, and mental</Wd>],
      ["When a taught disciple is touched", 1380, 340, <Arrows second={false} />],
      ["Struck by the first arrow, they are not struck by the second", 1380, 560, <Wd c={DIM} s={24}>one pain: the bodily one</Wd>],
      ["What ends is the second arrow", 960, 660, <Wd c={CHALK} s={26}>the first arrow still lands · what ends: craving, pushing away, the story</Wd>],
      ["So the cut is not numbness", 960, 740, <SK at="The reverse order leaves the world vivid" s={26}>numbness · dull senses · staying above the world</SK>],
      ["The reverse order leaves the world vivid", 960, 820, <K c={GOLD} s={26}>the world stays vivid</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const SeeingScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["How does ignorance end? In the discourses, by seeing", 960, 100, <Wd c={VIOLET} s={40} serif>Seeing, not stopping</Wd>],
      ["How does ignorance end? In the discourses, by seeing", 960, 210, <Wd c={DIM} s={24}>arising and passing, again and again: not mine, not I, not my self</Wd>, { d: 1.5 }],
      ["Ignorance does not end by stopping thought", 960, 360, <SK at="But thought is not the problem. The habit of fixing is" s={28}>stopping thought</SK>],
      ["A quiet, wordless mind can be very pleasant", 960, 460, <Wd c={CHALK} s={24}>a quiet mind: pleasant, and the ground for insight</Wd>],
      ["But thought is not the problem. The habit of fixing is", 960, 580, <Wd c={WARM} s={30} serif>the habit of fixing</Wd>],
      ["A quiet mind does not end that habit by being quiet", 960, 680, <Wd c={DIM} s={24}>thinking starts again · the habit is still there</Wd>],
      ["What ends it is seeing", 960, 790, <K c={GOLD} s={30}>what ends it: seeing</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const EndsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Such is the ending of this whole mass of suffering. It is easy to hear", 960, 100, <Wd c={GOLD} s={40} serif>What ends, and what does not</Wd>],
      ["Such is the ending of this whole mass of suffering. It is easy to hear", 960, 200, <SK at="The discourses do not say that" s={26}>no feeling · no world · a blank</SK>, { d: 2 }],
      ["The ending of becoming", 520, 330, <K c={TEAL} s={28}>ends: becoming</K>, { pop: true }],
      ["Not the bell ringing when struck", 520, 420, <Wd c={DIM} s={24}>not the bell · not the seed giving rice</Wd>],
      ["When a fire goes out, in which direction has it gone", 1360, 380, <FireOut />],
      ["When a fire goes out, in which direction has it gone", 1360, 560, <Wd c={DIM} s={24}>east? west? north? south?</Wd>, { d: 1.5 }],
      ["It went out because its fuel was used up", 1360, 630, <Wd c={CHALK} s={24} serif>it does not apply: the fuel was used up</Wd>],
      ["The ending of suffering is not a thing being destroyed", 960, 760, <K c={GOLD} s={26}>not a thing destroyed · not someone going somewhere</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const FreedomScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["There is one more teaching I want to include", 960, 100, <Wd c={GREEN} s={40} serif>A chain that runs the other way</Wd>],
      ["With suffering as condition, there is faith", 960, 340, <Steps />],
      ["The same sentence runs both ways", 960, 560, <Wd c={CHALK} s={30} serif>when this is, that is: how suffering builds, and how freedom builds</Wd>],
      ["The path is not outside dependent arising", 960, 680, <K c={GOLD} s={28}>the path: dependent arising, arranged the other way</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const NoonScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Return to the afternoon of Part 1", 960, 100, <Wd c={ICE} s={40} serif>The afternoon again</Wd>],
      ["There is contact. The words", 520, 240, <K c={CHALK} s={26}>contact</K>, { pop: true }],
      ["There is contact. The words", 960, 240, <K c={CHALK} s={26}>feeling</K>, { pop: true, d: 2.5 }],
      ["The first arrow lands, and that is fine", 1400, 240, <Wd c={DIM} s={24}>the first arrow lands</Wd>],
      ["But this time it is seen", 960, 380, <Wd c={TEAL} s={34} serif>seen: not suppressed, not argued with</Wd>],
      ["A feeling arising and passing", 960, 470, <Wd c={CHALK} s={24}>a feeling arising and passing · a pull arising and passing · no owner</Wd>],
      ["The pull does not find much to hold", 600, 580, <SK at="The pull does not find much to hold" d={1} s={24}>clinging</SK>],
      ["The pull does not find much to hold", 960, 580, <SK at="The pull does not find much to hold" d={1.6} s={24}>the injured party</SK>, { d: 0.4 }],
      ["The pull does not find much to hold", 1360, 580, <SK at="The pull does not find much to hold" d={2.2} s={24}>a grievance</SK>, { d: 0.8 }],
      ["The words were still heard", 960, 720, <Wd c={CHALK} s={26} serif>still heard · still felt · nothing taken from the afternoon</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("What changed is only that the chain was watched");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 5, Part 3 of the Dependent Arising series, and the close of Section 5", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 5 · the close</Wd>],
        ["What changed is only that the chain was watched", 960, 460, <Wd c={CHALK} s={40} serif>the chain was watched,</Wd>],
        ["What changed is only that the chain was watched", 960, 560, <Wd c={TEAL} s={40} serif>instead of obeyed</Wd>, { d: 1.6 }],
        ["What changed is only that the chain was watched", 960, 720, <Wd c={DIM} s={26}>next: Section 6, Nāgārjuna's reading</Wd>, { d: 4 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A painful feeling is the first arrow", "open", <OpenScene />],
    ["The discourses give it as plainly as the forward order", "reverse", <ReverseScene />],
    ["The tradition points to two places", "two", <TwoScene />],
    ["The Buddha gives an image for the middle", "arrow", <ArrowScene />],
    ["How does ignorance end? In the discourses, by seeing", "seeing", <SeeingScene />],
    ["Such is the ending of this whole mass of suffering. It is easy to hear", "ends", <EndsScene />],
    ["There is one more teaching I want to include", "freedom", <FreedomScene />],
    ["Return to the afternoon of Part 1", "noon", <NoonScene />],
    ["This is Section 5, Part 3 of the Dependent Arising series, and the close of Section 5", "night", <CloseScene />],
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
