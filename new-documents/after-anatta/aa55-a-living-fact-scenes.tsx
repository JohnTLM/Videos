// Bonus video: Dependent Arising Section 3 Part 3: A Living Fact (AA55), the close of Section 3.
// (Script: new-documents/after-anatta/aa55-a-living-fact-script.md, from EBooks Bonus Articles/a-living-fact,
// approved by the owner 2026-11-27; script approved the same day: "Approved aa55".)
// Arc: on paper the gap, in life no gap -> a useful division -> how the gap is made (two banks) -> the living fact
// (the cup, the door, uneven ground, coffee, a sad memory; effortless; lived first, picture after) -> relation without
// resolving one into the other (five collapses struck; seamless, not merged) -> two truths, two ways -> the habit and
// the caution -> in practice -> close.
// Stance: the two banks and every collapse are drawn only to be struck; the non-dual taste is never drawn as a ground.
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
  "Divide mind from matter, and the gap can never be bridged", "Reach for a cup, and no gap is ever crossed",
  "I am John Tan, known as Thusness", "Part 1 set out the habit that there has to be something",
  "Here I want to set two pictures side by side", "On paper, mind and matter cannot meet",
  // division
  "First, a useful division", "The doctor asks whether a pain is in the knee", "The neurologist separates",
  "The law separates what you did from what you intended", "In ordinary speech", "As a convention, the division is fine",
  // gap
  "The trouble begins when the convention is taken for two things", "Mind becomes an inner stuff",
  "Matter becomes an outer stuff", "Each is now complete on its own side", "How does a thought move an arm",
  "How does light on the eye become a seen colour", "How does coffee make me alert",
  "And no bridge can be built", "But only because we made the two banks first",
  // living fact
  "Now drop the picture, and look at what actually happens", "I want a drink. My hand reaches",
  "At no point is there a moment when a thought has to travel over to a hand", "Nothing is sent across",
  "They arise together, each with the others, in one seamless movement", "A door slams behind me",
  "I walk over uneven ground", "I drink coffee, and the dullness lifts", "A sad memory comes",
  "And it is effortless", "We have never once felt a bridge being crossed", "It is a living fact. Not a theory",
  "So the order is the other way round", "The gap comes afterwards, as a picture laid over it",
  // relation
  "Why is it seamless", "Because neither has a nature of its own",
  "Almost every way of thinking about relation tries to settle it", "Reductionism collapses the whole into its parts",
  "Holism collapses the parts into a Whole", "Materialism collapses mind into matter",
  "Idealism collapses matter into mind", "collapses both into a third stuff",
  "Each one needs one side to be really real", "Dependent arising and emptiness give another way",
  "Without the need to resolve one into the other", "The intending and the moving",
  "Each arises with the other, and neither is the floor", "And the relation is not a third thing either",
  "The relating is as empty as what it relates", "Seamless does not mean merged", "Distinctions stay perfectly vivid",
  // two truths
  "In a world without a substrate", "presented the two truths in two ways", "In the first, the conventional truth is appearance",
  "In the second, the two truths are told apart", "Experience that accords", "Experience that does not accord",
  "The substrateless view meets both", "Ontologically, the two truths are emptiness and dependent arising",
  "Not two facts, but one", "Experientially, it is a",
  "That reified taste is what Part 1 called the habit", "A flash happens", "A reaching happens",
  "When the habit is seen through", "One caution, and here I am careful", "A pure awareness that is finally, really there",
  "I do not take it that way", "It is not a new floor",
  // practice
  "This can be noticed in any ordinary moment", "Pick up a cup", "There is no such point", "When startled",
  "And when the thought comes", "A picture of the event. Not the event", "The convention stays useful",
  "What drops away is only the belief",
  // close
  "This is Section 3, Part 3 of the Dependent Arising series, and the close of Section 3",
  "On paper, the gap could never be bridged",
];

const M = {
  open: { a: "rgba(60,90,130,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.32)" },
  divide: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  banks: { a: "rgba(110,70,40,0.5)", b: "rgba(60,45,120,0.44)", c: "rgba(40,40,80,0.4)" },
  living: { a: "rgba(60,120,80,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  relation: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  truths: { a: "rgba(190,145,60,0.44)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
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
const SBox: React.FC<{ c: string; w?: number; title: string; sub?: string; at: string; d?: number }> = ({ at, d = 0, ...b }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Box {...b} /><Strike at={cue(at) + d} /></div>;
};
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A hand reaching for a cup; `k` 0..1 moves the hand to the cup and lifts it. */
const Reach: React.FC<{ k: number }> = ({ k }) => {
  const { t } = useT();
  const hx = -170 + 150 * Math.min(1, k * 1.6);
  const lift = Math.max(0, k - 0.65) / 0.35 * 50;
  return (
    <svg width={560} height={360} viewBox="-280 -180 560 360" style={{ overflow: "visible" }}>
      <g transform={`translate(80, ${40 - lift})`}>
        {[-26, 0, 26].map((x, i) => <path key={i} d={`M${x} -60 q${10 * Math.sin(t * 2 + i)} -25 0 -50`} stroke={CHALK} strokeWidth={3} fill="none" opacity={0.35} />)}
        <path d="M-50 -50 L50 -50 L40 50 Q0 64 -40 50 Z" fill="rgba(160,120,80,0.35)" stroke={WARM} strokeWidth={5} />
        <path d="M50 -25 q36 0 30 28 q-6 20 -36 20" stroke={WARM} strokeWidth={5} fill="none" />
      </g>
      <g transform={`translate(${hx}, ${30 - lift})`}>
        <rect x={-120} y={-18} width={110} height={36} rx={18} fill="rgba(240,200,170,0.25)" stroke={ROSE} strokeWidth={4} />
        <rect x={-14} y={-34} width={52} height={68} rx={22} fill="rgba(240,200,170,0.25)" stroke={ROSE} strokeWidth={4} />
      </g>
    </svg>
  );
};
/** Two banks with a river between; `bridge` shows a broken dashed bridge. */
const Banks: React.FC<{ o: number }> = ({ o }) => (
  <svg width={900} height={260} viewBox="0 0 900 260" style={{ overflow: "visible" }} opacity={o}>
    <path d="M0 120 L330 120 L360 260 L0 260 Z" fill="rgba(90,60,140,0.35)" stroke={VIOLET} strokeWidth={4} />
    <path d="M900 120 L570 120 L540 260 L900 260 Z" fill="rgba(140,90,50,0.35)" stroke={WARM} strokeWidth={4} />
    {[0, 1, 2].map((i) => <path key={i} d={`M360 ${170 + i * 28} Q450 ${155 + i * 28} 540 ${170 + i * 28}`} stroke={ICE} strokeWidth={3} fill="none" opacity={0.5} />)}
    <path d="M330 118 L410 100 M490 100 L570 118" stroke={GOLD} strokeWidth={5} strokeDasharray="12 10" />
    <text x={450} y={90} fill={GOLD} fontSize={44} textAnchor="middle" fontFamily="SourceSans">?</text>
    <text x={165} y={200} fill={CHALK} fontSize={28} textAnchor="middle" fontFamily="SourceSans">mind: inner, felt</text>
    <text x={735} y={200} fill={CHALK} fontSize={28} textAnchor="middle" fontFamily="SourceSans">matter: outer, unfelt</text>
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const k = ramp(t, c("Reach for a cup, and no gap is ever crossed"), 3);
  return (
    <AbsoluteFill>
      <Phase to="I am John Tan, known as Thusness">
        <Items items={[
          ["Divide mind from matter, and the gap can never be bridged", 960, 300, <Banks o={1} />],
          ["Reach for a cup, and no gap is ever crossed", 960, 700, <Reach k={k} />],
        ]} />
      </Phase>
      <Phase from="I am John Tan, known as Thusness" to="Part 1 set out the habit that there has to be something">
        <Items items={[
          ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>A Living Fact</Wd>, { d: 0.2 }],
          ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
          ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 3 · Part 3 · the close</Wd>, { d: 0.8 }],
        ]} />
      </Phase>
      <Phase from="Part 1 set out the habit that there has to be something">
        <Items items={[
          ["Part 1 set out the habit that there has to be something", 960, 260, <Wd c={DIM} s={24}>Part 1: there has to be something · Part 2: a gap made by two fixed natures</Wd>],
          ["Here I want to set two pictures side by side", 960, 380, <Wd c={CHALK} s={30} serif>the gap we drew · the living fact we live</Wd>],
          ["On paper, mind and matter cannot meet", 960, 520, <Wd c={DIM} s={30}>on paper: they cannot meet</Wd>],
          ["On paper, mind and matter cannot meet", 960, 600, <K c={GREEN} s={30}>in life: they never once fail to</K>, { d: 2, pop: true }],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const DivideScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["First, a useful division", 960, 100, <Wd c={GOLD} s={42} serif>A useful division</Wd>],
      ["The doctor asks whether a pain is in the knee", 960, 240, <Wd c={CHALK} s={26}>the doctor: in the knee, or in the head?</Wd>],
      ["The neurologist separates", 960, 320, <Wd c={CHALK} s={26}>the neurologist: the scan, and the report</Wd>],
      ["The law separates what you did from what you intended", 960, 400, <Wd c={CHALK} s={26}>the law: the deed, and the intent</Wd>],
      ["In ordinary speech", 960, 480, <Wd c={CHALK} s={26}>"I changed my mind" · "I moved the table"</Wd>],
      ["As a convention, the division is fine", 960, 640, <Box c={TEAL} w={760} title="a convention: fine" sub="two aspects singled out, to talk, treat, measure and judge" />, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const BanksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The trouble begins when the convention is taken for two things", 960, 100, <Wd c={WARM} s={40} serif>How the gap is made</Wd>],
        ["Each is now complete on its own side", 960, 470, <Wd c={DIM} s={24}>each complete on its own side</Wd>],
        ["How does a thought move an arm", 960, 560, <Wd c={CHALK} s={26}>how does a thought move an arm?</Wd>],
        ["How does light on the eye become a seen colour", 960, 620, <Wd c={CHALK} s={26}>how does light become a seen colour?</Wd>],
        ["How does coffee make me alert", 960, 680, <Wd c={CHALK} s={26}>how does coffee bring alertness, a memory a heavy chest?</Wd>],
        ["And no bridge can be built", 960, 780, <K c={GOLD} s={28}>no bridge can be built</K>, { pop: true }],
        ["But only because we made the two banks first", 960, 860, <Wd c={DIM} s={24}>because we made the two banks first</Wd>],
      ]} />
      <At x={960} y={290} o={ramp(t, c("Mind becomes an inner stuff"), 0.8)}><Banks o={1} /></At>
    </AbsoluteFill>
  );
};

const LivingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const k = ramp(t, c("I want a drink. My hand reaches"), 6);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now drop the picture, and look at what actually happens", 960, 90, <Wd c={GREEN} s={42} serif>The living fact</Wd>],
        ["At no point is there a moment when a thought has to travel over to a hand", 1380, 220, <Wd c={CHALK} s={24}>no thought travels over to a hand</Wd>],
        ["Nothing is sent across", 1380, 280, <Wd c={DIM} s={22}>nothing is sent across</Wd>],
        ["They arise together, each with the others, in one seamless movement", 1380, 350, <K c={GREEN} s={24}>wanting · seeing · reaching · weight: one movement</K>, { pop: true }],
        ["A door slams behind me", 1380, 440, <Wd c={CHALK} s={22}>a door slams: sound, jump, heartbeat as one</Wd>],
        ["I walk over uneven ground", 1380, 495, <Wd c={CHALK} s={22}>uneven ground: the feet find the stones</Wd>],
        ["I drink coffee, and the dullness lifts", 1380, 550, <Wd c={CHALK} s={22}>coffee: the dullness lifts</Wd>],
        ["A sad memory comes", 1380, 605, <Wd c={CHALK} s={22}>a sad memory: the chest grows heavy</Wd>],
        ["And it is effortless", 1380, 690, <Box c={GREEN} w={600} title="effortless" sub="no bridge ever felt being crossed" />, { pop: true }],
        ["It is a living fact. Not a theory", 1380, 800, <Wd c={GOLD} s={30} serif>a living fact, not a theory</Wd>],
        ["So the order is the other way round", 960, 900, <Wd c={CHALK} s={24}>lived first, seamless · the gap afterwards, a picture laid over it</Wd>],
      ]} />
      <At x={500} y={480} o={ramp(t, c("I want a drink. My hand reaches"), 0.5)}><Reach k={k} /></At>
    </AbsoluteFill>
  );
};

const RelationScene: React.FC = () => {
  const strikeAt = "Dependent arising and emptiness give another way";
  return (
    <AbsoluteFill>
      <Items items={[
        ["Why is it seamless", 960, 80, <Wd c={VIOLET} s={40} serif>Relation, without resolving one into the other</Wd>],
        ["Because neither has a nature of its own", 960, 150, <Wd c={CHALK} s={24}>not one secret stuff · neither has a nature of its own</Wd>],
        ["Reductionism collapses the whole into its parts", 960, 240, <SK at={strikeAt} s={22}>reductionism: the whole into its parts</SK>],
        ["Holism collapses the parts into a Whole", 960, 295, <SK at={strikeAt} d={0.15} s={22}>holism: the parts into a Whole</SK>],
        ["Materialism collapses mind into matter", 960, 350, <SK at={strikeAt} d={0.3} s={22}>materialism: mind into matter</SK>],
        ["Idealism collapses matter into mind", 960, 405, <SK at={strikeAt} d={0.45} s={22}>idealism: matter into mind</SK>],
        ["collapses both into a third stuff", 960, 460, <SK at={strikeAt} d={0.6} s={22}>a ground: both into a third stuff</SK>],
        ["Each one needs one side to be really real", 960, 520, <Wd c={DIM} s={22}>each needs one side really real</Wd>],
        ["Without the need to resolve one into the other", 960, 610, <K c={TEAL} s={28}>another way: nothing resolved into anything</K>, { pop: true }],
        ["The intending and the moving", 960, 690, <Wd c={CHALK} s={24}>intending and moving · light and colour · key and door</Wd>],
        ["Each arises with the other, and neither is the floor", 960, 745, <Wd c={CHALK} s={24}>each arises with the other · neither is the floor</Wd>],
        ["And the relation is not a third thing either", 960, 810, <Wd c={DIM} s={22}>the relating is as empty as what it relates</Wd>],
        ["Seamless does not mean merged", 960, 890, <K c={GOLD} s={24}>seamless, not merged · distinctions stay vivid</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const TruthsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["In a world without a substrate", 960, 80, <Wd c={GOLD} s={40} serif>Two truths, two ways</Wd>],
      ["presented the two truths in two ways", 960, 150, <Wd c={DIM} s={22}>two models of the two truths (Mipham)</Wd>],
      ["In the first, the conventional truth is appearance", 520, 290, <Box c={ICE} w={680} title="appearance and emptiness" sub="conventional: appearance · ultimate: emptiness · inseparable" />, { pop: true }],
      ["In the second, the two truths are told apart", 1400, 290, <Box c={VIOLET} w={680} title="authentic and inauthentic" sub="does experience accord with how things are?" />, { pop: true }],
      ["Ontologically, the two truths are emptiness and dependent arising", 520, 470, <Wd c={CHALK} s={24}>ontologically: emptiness and dependent arising</Wd>],
      ["Not two facts, but one", 520, 530, <K c={TEAL} s={22}>not two facts, but one</K>, { pop: true }],
      ["Experientially, it is a", 1400, 470, <Wd c={CHALK} s={24}>experientially: non-dual, non-substantialist</Wd>],
      ["Experientially, it is a", 1400, 530, <SK at="When the habit is seen through" s={22}>reified: agent and action, object and characteristics</SK>, { d: 3 }],
      ["A reaching happens", 960, 660, <Wd c={DIM} s={22}>a reaching happens → "a mind over here sends orders to a hand over there"</Wd>],
      ["When the habit is seen through", 960, 720, <K c={GREEN} s={24}>tasted as lived: seamless, without effort, nothing crossing</K>, { pop: true }],
      ["A pure awareness that is finally, really there", 960, 820, <SK at="I do not take it that way" d={0.4} s={24}>a pure awareness, finally really there</SK>],
      ["It is not a new floor", 960, 900, <Wd c={GOLD} s={26} serif>the non-dual taste: empty too, not a new floor</Wd>],
    ]} />
  </AbsoluteFill>
);

const PracticeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const k = ramp(t, c("Pick up a cup"), 3);
  return (
    <AbsoluteFill>
      <Items items={[
        ["This can be noticed in any ordinary moment", 960, 90, <Wd c={TEAL} s={40} serif>In practice</Wd>],
        ["There is no such point", 1360, 240, <SK at="There is no such point" d={1.2} s={24}>where the wanting hands over to the hand</SK>],
        ["When startled", 1360, 340, <Wd c={CHALK} s={24}>startled: sound, jump, heartbeat as one</Wd>],
        ["And when the thought comes", 1360, 420, <Wd c={CHALK} s={24}>"my mind is moving my body": comes afterwards</Wd>],
        ["A picture of the event. Not the event", 1360, 490, <K c={GOLD} s={24}>a picture of the event, not the event</K>, { pop: true }],
        ["The convention stays useful", 1360, 600, <Wd c={DIM} s={22}>the doctor still asks where it hurts</Wd>],
        ["What drops away is only the belief", 1360, 670, <Wd c={CHALK} s={24}>gone: only the belief in two things needing a bridge</Wd>],
      ]} />
      <At x={540} y={480} o={ramp(t, c("Pick up a cup"), 0.5)}><Reach k={k} /></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("On paper, the gap could never be bridged");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 3, Part 3 of the Dependent Arising series, and the close of Section 3", 960, 220, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 3 · the close</Wd>],
        ["On paper, the gap could never be bridged", 960, 500, <Wd c={DIM} s={36} serif>On paper, the gap could never be bridged.</Wd>],
        ["On paper, the gap could never be bridged", 960, 600, <Wd c={CHALK} s={38} serif>In life, it was never there to cross.</Wd>, { d: 2.4 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Divide mind from matter, and the gap can never be bridged", "open", <OpenScene />],
    ["First, a useful division", "divide", <DivideScene />],
    ["The trouble begins when the convention is taken for two things", "banks", <BanksScene />],
    ["Now drop the picture, and look at what actually happens", "living", <LivingScene />],
    ["Why is it seamless", "relation", <RelationScene />],
    ["In a world without a substrate", "truths", <TruthsScene />],
    ["This can be noticed in any ordinary moment", "practice", <PracticeScene />],
    ["This is Section 3, Part 3 of the Dependent Arising series, and the close of Section 3", "night", <CloseScene />],
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
