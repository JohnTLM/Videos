// Bonus video: Dependent Arising Section 6 Part 1: Arising That Does Not Arise (AA62).
// (Script: new-documents/after-anatta/aa62-arising-that-does-not-arise-script.md, from EBooks Bonus Articles/
// arising-that-does-not-arise, approved by the owner 2026-11-28; script approved the same day: "Approved".)
// Arc: dependent arising without arising -> Section 5 and the Abhidharma recalled -> the sentence's two kinds of line:
// handover or pattern -> the homage -> the four ways refused; production refused -> a condition named from the
// effect's side (long and short, fire and fuel; defining, not timing) -> three senses of cause; the bell -> the
// sentence again: the yeast and the loaf -> one meaning -> the discourse to Kaccana -> the harsh word -> close.
// Stance: a cause is never drawn handing anything over; conditions and effect appear only together.
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
  "Dependent arising, without arising. It sounds like a contradiction", "I am John Tan, known as Thusness",
  "Section 5 stayed with the twelve links", "Behind that reading stood the", "This section reads the same teaching with",
  // sentence
  "When this is, that is. From the arising of this, that arises", "The sentence holds two kinds of line",
  "Some speak of being", "Others speak of arising",
  "As I see it, the difference between the two readings begins right here", "The traditional reading hears a handover",
  // homage
  "He opens his Middle Way with a bow", "How can dependent arising be without arising",
  "The answer is the key to the whole difference", "If a sprout could be found arising from its seed",
  "On the traditional reading, dependent arising is a law",
  // four ways
  "He puts it in one line. Not from itself", "These are the only ways a real thing could arise",
  "Notice what is refused. Not causes", "What is refused is production",
  // condition
  "So what is a condition, if it does not produce", "These are conditions, because in dependence on them that arises",
  "A seed is not a cause sitting there", "As long and short are named together", "Fire and fuel are the same",
  "One caution here", "The seed still comes before the sprout", "What is mutual is the defining, not the timing",
  // cause
  "It helps to separate three things the word cause can mean", "Production is refused", "Alignment is kept",
  "And designation is kept", "A bell is struck", "The ringing is their meeting", "Change one condition",
  // again
  "Now return to the sentence", "On the traditional reading, it describes a handover", "Leave out the yeast",
  "And the sentence never said production", "This is not a weaker dependent arising",
  "Things work. And what works is found empty",
  // one meaning
  "draws the line that joins everything in this series", "Dependent arising is what we call emptiness",
  "That a thing depends is exactly why it has no nature of its own", "work is carried one step further",
  "It found the person empty", "Not because they are nothing",
  // the Buddha's meaning
  "He does not present this as a new teaching", "He singles out one discourse",
  "There the Buddha says the world mostly leans on two ideas", "Avoiding both, he teaches by the middle",
  "A chain of real things would sit on the side of it is", "So, as I read it, the difference is not between",
  // harsh word
  "Return to the harsh word at work", "Then the task is to manage the dominoes",
  "On the second reading, the word, the hearing", "But nothing in it was handed over from outside",
  // close
  "This is Section 6, Part 1 of the Dependent Arising series", "Not a handover. A pattern, holding",
];

const M = {
  open: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  sentence: { a: "rgba(170,125,50,0.42)", b: "rgba(40,60,120,0.46)", c: "rgba(40,100,120,0.3)" },
  homage: { a: "rgba(150,110,50,0.44)", b: "rgba(60,45,130,0.46)", c: "rgba(40,60,100,0.36)" },
  four: { a: "rgba(130,60,80,0.44)", b: "rgba(50,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  cond: { a: "rgba(40,100,130,0.46)", b: "rgba(150,100,50,0.36)", c: "rgba(40,60,110,0.32)" },
  cause: { a: "rgba(60,110,70,0.44)", b: "rgba(60,50,130,0.42)", c: "rgba(150,120,60,0.3)" },
  again: { a: "rgba(170,125,50,0.4)", b: "rgba(60,90,130,0.44)", c: "rgba(60,110,90,0.3)" },
  one: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  sutta: { a: "rgba(150,100,40,0.42)", b: "rgba(40,40,100,0.5)", c: "rgba(60,90,120,0.36)" },
  noon: { a: "rgba(150,70,60,0.44)", b: "rgba(60,50,120,0.42)", c: "rgba(150,110,60,0.3)" },
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
/** A handover: a ball passed from "this" to "that". Struck later. */
const Handover: React.FC = () => {
  const { t } = useT();
  const k = (t * 0.6) % 1;
  return (
    <svg width={520} height={180} viewBox="0 0 520 180" style={{ overflow: "visible" }}>
      <rect x={10} y={50} width={130} height={80} rx={14} fill="rgba(10,12,30,0.7)" stroke={WARM} strokeWidth={3} />
      <rect x={380} y={50} width={130} height={80} rx={14} fill="rgba(10,12,30,0.7)" stroke={WARM} strokeWidth={3} />
      <text x={75} y={100} textAnchor="middle" fill={WARM} fontSize={28} fontFamily="serif">this</text>
      <text x={445} y={100} textAnchor="middle" fill={WARM} fontSize={28} fontFamily="serif">that</text>
      <circle cx={150 + k * 220} cy={90 - 50 * Math.sin(k * Math.PI)} r={14} fill={GOLD} />
    </svg>
  );
};
/** A pattern: this and that lighting together, with no ball between. */
const Pattern: React.FC = () => {
  const { t } = useT();
  const on = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 2));
  return (
    <svg width={520} height={180} viewBox="0 0 520 180" style={{ overflow: "visible" }}>
      {[75, 445].map((x, i) => (
        <g key={i} opacity={on}>
          <rect x={x - 65} y={50} width={130} height={80} rx={14} fill="rgba(10,12,30,0.7)" stroke={TEAL} strokeWidth={3} />
          <text x={x} y={100} textAnchor="middle" fill={TEAL} fontSize={28} fontFamily="serif">{i ? "that" : "this"}</text>
        </g>
      ))}
      <line x1={150} y1={90} x2={370} y2={90} stroke={DIM} strokeWidth={2} strokeDasharray="4 10" />
    </svg>
  );
};
/** Two sticks named long and short only together. */
const LongShort: React.FC = () => (
  <svg width={420} height={160} viewBox="0 0 420 160" style={{ overflow: "visible" }}>
    <line x1={20} y1={50} x2={400} y2={50} stroke={GOLD} strokeWidth={12} strokeLinecap="round" />
    <line x1={20} y1={110} x2={180} y2={110} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
    <text x={410} y={30} textAnchor="end" fill={GOLD} fontSize={24} fontFamily="serif">long</text>
    <text x={200} y={118} fill={ICE} fontSize={24} fontFamily="serif">short</text>
  </svg>
);
/** A bell struck, with rings of sound. */
const Bell: React.FC = () => {
  const { t } = useT();
  const k = (t * 0.8) % 1;
  return (
    <svg width={360} height={300} viewBox="-180 -150 360 300" style={{ overflow: "visible" }}>
      {[0, 0.33, 0.66].map((o, i) => { const r = 60 + ((k + o) % 1) * 110; return <circle key={i} cx={0} cy={0} r={r} fill="none" stroke={TEAL} strokeWidth={3} opacity={1 - ((k + o) % 1)} />; })}
      <path d="M-60 40 C-60 -20 -40 -70 0 -70 C40 -70 60 -20 60 40 Z" fill="rgba(200,150,70,0.5)" stroke={GOLD} strokeWidth={4} />
      <circle cx={0} cy={54} r={10} fill={GOLD} />
    </svg>
  );
};
/** "It is" and "it is not", with the middle between. */
const Middle: React.FC = () => {
  const c = useCue();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
      <SK at="Avoiding both, he teaches by the middle" s={30}>it is</SK>
      <K c={GOLD} s={30}>the middle: the twelve links</K>
      <SK at="Avoiding both, he teaches by the middle" d={0.3} s={30}>it is not</SK>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["Dependent arising, without arising. It sounds like a contradiction", 960, 420, <Wd c={GOLD} s={52} serif>dependent arising, without arising</Wd>],
        ["Dependent arising, without arising. It sounds like a contradiction", 960, 560, <Wd c={DIM} s={28}>a contradiction?</Wd>, { d: 2 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Section 5 stayed with the twelve links">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Arising That Does Not Arise</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 6 · Nāgārjuna's Reading · Part 1</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Section 5 stayed with the twelve links">
      <Items items={[
        ["Section 5 stayed with the twelve links", 960, 260, <Wd c={DIM} s={26}>Section 5: the twelve links, as the tradition teaches them</Wd>],
        ["Behind that reading stood the", 960, 380, <Wd c={CHALK} s={30} serif>the person: no self among the pieces</Wd>],
        ["Behind that reading stood the", 960, 460, <Wd c={WARM} s={30} serif>the pieces: kept real · one producing the next</Wd>, { d: 3 }],
        ["This section reads the same teaching with", 960, 620, <K c={GOLD} s={30}>the same teaching, read with Nāgārjuna</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const SentenceScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["When this is, that is. From the arising of this, that arises", 960, 120, <Wd c={CHALK} s={36} serif>When this is, that is · From the arising of this, that arises</Wd>],
      ["Some speak of being", 520, 260, <K c={TEAL} s={26}>being: found together, missing together</K>, { pop: true }],
      ["Others speak of arising", 1400, 260, <K c={WARM} s={26}>arising: a sequence in time?</K>, { pop: true }],
      ["As I see it, the difference between the two readings begins right here", 520, 480, <SBoxWrap at="So what is a condition, if it does not produce"><Handover /></SBoxWrap>],
      ["As I see it, the difference between the two readings begins right here", 520, 620, <Wd c={WARM} s={26}>a handover?</Wd>, { d: 0.5 }],
      ["As I see it, the difference between the two readings begins right here", 1400, 480, <Pattern />, { d: 2 }],
      ["As I see it, the difference between the two readings begins right here", 1400, 620, <Wd c={TEAL} s={26}>or a pattern?</Wd>, { d: 2.5 }],
      ["The traditional reading hears a handover", 960, 760, <Wd c={CHALK} s={26}>the tradition hears a handover · Nāgārjuna hears a pattern</Wd>],
    ]} />
  </AbsoluteFill>
);
// A wrapper that keeps the handover visible (it is struck later, in its own scene).
const SBoxWrap: React.FC<{ at: string; children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

const HomageScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["He opens his Middle Way with a bow", 960, 110, <Wd c={GOLD} s={40} serif>The homage</Wd>],
      ["He opens his Middle Way with a bow", 960, 230, <Wd c={CHALK} s={28} serif>without ceasing, without arising · without annihilation, without permanence</Wd>, { d: 1 }],
      ["He opens his Middle Way with a bow", 960, 300, <Wd c={CHALK} s={28} serif>not one, not many · without coming, without going</Wd>, { d: 4 }],
      ["He opens his Middle Way with a bow", 960, 380, <Wd c={TEAL} s={26}>dependent arising: the quieting of elaborations, peace</Wd>, { d: 7 }],
      ["How can dependent arising be without arising", 960, 500, <Wd c={WARM} s={34} serif>without arising?</Wd>],
      ["If a sprout could be found arising from its seed", 960, 620, <Wd c={CHALK} s={26}>an arising of its own: then no need to depend</Wd>],
      ["If a sprout could be found arising from its seed", 960, 690, <K c={GOLD} s={26}>it depends: so no arising is found, when sought</K>, { pop: true, d: 4 }],
      ["On the traditional reading, dependent arising is a law", 960, 790, <Wd c={DIM} s={24}>a law of how real things arise · why nothing arises that way at all</Wd>],
    ]} />
  </AbsoluteFill>
);

const FourScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["He puts it in one line. Not from itself", 960, 110, <Wd c={ROSE} s={40} serif>The four ways, refused</Wd>],
      ["He puts it in one line. Not from itself", 300, 280, <SK at="He puts it in one line. Not from itself" d={1} s={26}>from itself</SK>],
      ["He puts it in one line. Not from itself", 740, 280, <SK at="He puts it in one line. Not from itself" d={2.2} s={26}>from another</SK>, { d: 1.2 }],
      ["He puts it in one line. Not from itself", 1180, 280, <SK at="He puts it in one line. Not from itself" d={3.2} s={26}>from both</SK>, { d: 2.2 }],
      ["He puts it in one line. Not from itself", 1620, 280, <SK at="He puts it in one line. Not from itself" d={4.4} s={26}>without a cause</SK>, { d: 3.2 }],
      ["These are the only ways a real thing could arise", 960, 430, <Wd c={DIM} s={24}>already there · a gap no one crosses · a world that would not work</Wd>],
      ["Notice what is refused. Not causes", 960, 560, <Wd c={CHALK} s={28}>kept: causes, the order of the world</Wd>],
      ["What is refused is production", 960, 680, <K c={GOLD} s={30}>refused: production</K>, { pop: true }],
      ["What is refused is production", 960, 770, <Wd c={DIM} s={24}>a real thing, on its own, bringing about another</Wd>, { d: 1 }],
    ]} />
  </AbsoluteFill>
);

const CondScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So what is a condition, if it does not produce", 960, 100, <Wd c={TEAL} s={40} serif>What makes a condition a condition</Wd>],
      ["So what is a condition, if it does not produce", 520, 300, <SBoxWrap at="So what is a condition, if it does not produce"><div style={{ position: "relative" }}><Handover /><StrikeAt at="So what is a condition, if it does not produce" d={1} /></div></SBoxWrap>],
      ["These are conditions, because in dependence on them that arises", 1300, 260, <Wd c={CHALK} s={26} serif>"conditions, because that arises"</Wd>],
      ["A seed is not a cause sitting there", 1300, 340, <Wd c={DIM} s={24}>a seed is called a cause because there is a sprout</Wd>],
      ["As long and short are named together", 960, 500, <LongShort />],
      ["As long and short are named together", 960, 620, <K c={GOLD} s={26}>named from the effect's side, together with the effect</K>, { pop: true, d: 1 }],
      ["Fire and fuel are the same", 960, 690, <Wd c={WARM} s={24}>no fuel apart from what burns · no fire apart from what it burns</Wd>],
      ["The seed still comes before the sprout", 960, 760, <Wd c={DIM} s={24}>the seed still comes before the sprout</Wd>],
      ["What is mutual is the defining, not the timing", 960, 820, <K c={TEAL} s={24}>mutual: the defining, not the timing</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);
const StrikeAt: React.FC<{ at: string; d?: number }> = ({ at, d = 0 }) => { const c = useCue(); return <Strike at={c(at) + d} />; };

const CauseScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["It helps to separate three things the word cause can mean", 960, 100, <Wd c={GREEN} s={40} serif>Three senses of cause</Wd>],
      ["Production is refused", 400, 290, <SBoxR c={ROSE} title="production" sub="a cause on its own, delivering an effect" at="Production is refused" />, { pop: true }],
      ["Alignment is kept", 960, 290, <Box c={GREEN} w={520} title="alignment" sub="factors come together, a result appears" />, { pop: true }],
      ["And designation is kept", 1520, 290, <Box c={TEAL} w={520} title="designation" sub="the part attention picks out" />, { pop: true }],
      ["A bell is struck", 700, 600, <Bell />],
      ["The ringing is their meeting", 1260, 560, <Wd c={CHALK} s={26} serif>bronze · strike · air · ear</Wd>],
      ["The ringing is their meeting", 1260, 630, <Wd c={GOLD} s={26} serif>the ringing is their meeting</Wd>, { d: 1 }],
      ["Change one condition", 1260, 710, <Wd c={DIM} s={24}>a cracked bell: a different sound altogether</Wd>],
    ]} />
  </AbsoluteFill>
);
const SBoxR: React.FC<{ c: string; title: string; sub: string; at: string }> = ({ c, title, sub, at }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Box c={c} w={520} title={title} sub={sub} /><Strike at={cue(at) + 1.2} /></div>;
};

const AgainScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now return to the sentence", 960, 100, <Wd c={GOLD} s={40} serif>When this is, that is</Wd>],
      ["On the traditional reading, it describes a handover", 960, 230, <Wd c={DIM} s={26}>a handover? · a pattern, holding</Wd>],
      ["Leave out the yeast", 960, 360, <Wd c={CHALK} s={30} serif>no yeast: a flat loaf, in every kitchen</Wd>],
      ["Leave out the yeast", 960, 440, <Wd c={DIM} s={24}>nothing passes from the yeast into the loaf</Wd>, { d: 3 }],
      ["And the sentence never said production", 960, 560, <K c={GOLD} s={30}>it said: when</K>, { pop: true }],
      ["This is not a weaker dependent arising", 960, 670, <Wd c={CHALK} s={28} serif>not weaker: stronger</Wd>],
      ["Things work. And what works is found empty", 960, 770, <K c={TEAL} s={26}>things work · what works is found empty</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const OneScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["draws the line that joins everything in this series", 960, 100, <Wd c={VIOLET} s={40} serif>One meaning</Wd>],
      ["Dependent arising is what we call emptiness", 960, 240, <Wd c={GOLD} s={34} serif>dependent arising = emptiness = designation = the middle way</Wd>],
      ["That a thing depends is exactly why it has no nature of its own", 960, 380, <Wd c={CHALK} s={26}>it depends, so it has no nature of its own · it has no nature of its own, so it can depend</Wd>],
      ["work is carried one step further", 520, 560, <Box c={WARM} w={620} title="the person: empty" sub="the earlier analysis" />, { pop: true }],
      ["It found the person empty", 1400, 560, <Box c={TEAL} w={620} title="the pieces: empty too" sub="each what it is only with the others" />, { pop: true, d: 2 }],
      ["Not because they are nothing", 960, 740, <Wd c={DIM} s={24}>not nothing: each only with the others</Wd>],
    ]} />
  </AbsoluteFill>
);

const SuttaScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["He does not present this as a new teaching", 960, 100, <Wd c={GOLD} s={40} serif>The Buddha's own meaning</Wd>],
      ["He singles out one discourse", 960, 210, <Wd c={DIM} s={26}>the discourse to Kaccāna</Wd>],
      ["There the Buddha says the world mostly leans on two ideas", 960, 400, <Middle />],
      ["A chain of real things would sit on the side of it is", 960, 580, <Wd c={CHALK} s={26}>a chain of real things: on the side of "it is"</Wd>],
      ["So, as I read it, the difference is not between", 960, 720, <K c={GOLD} s={26}>not Nāgārjuna against the Buddha · one way of reading the Buddha</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const NoonScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Return to the harsh word at work", 960, 100, <Wd c={ROSE} s={40} serif>The harsh word</Wd>],
      ["Return to the harsh word at work", 520, 330, <Box c={WARM} w={660} title="first reading" sub="a real word, producing a real feeling, producing craving" />, { pop: true, d: 1 }],
      ["Then the task is to manage the dominoes", 520, 480, <Wd c={DIM} s={22}>manage the dominoes</Wd>],
      ["On the second reading, the word, the hearing", 1400, 330, <Box c={TEAL} w={660} title="second reading" sub="the word, the hearing, the feeling, the one hurt: only together" />, { pop: true }],
      ["But nothing in it was handed over from outside", 1400, 480, <Wd c={DIM} s={22}>vivid · exact · nothing handed over · nothing on its own</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("Not a handover. A pattern, holding");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 6, Part 1 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 6 · Part 1</Wd>],
        ["Not a handover. A pattern, holding", 960, 420, <Wd c={CHALK} s={44} serif>When this is, that is.</Wd>],
        ["Not a handover. A pattern, holding", 960, 560, <Pattern />, { d: 1.2 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Dependent arising, without arising. It sounds like a contradiction", "open", <OpenScene />],
    ["When this is, that is. From the arising of this, that arises", "sentence", <SentenceScene />],
    ["He opens his Middle Way with a bow", "homage", <HomageScene />],
    ["He puts it in one line. Not from itself", "four", <FourScene />],
    ["So what is a condition, if it does not produce", "cond", <CondScene />],
    ["It helps to separate three things the word cause can mean", "cause", <CauseScene />],
    ["Now return to the sentence", "again", <AgainScene />],
    ["draws the line that joins everything in this series", "one", <OneScene />],
    ["He does not present this as a new teaching", "sutta", <SuttaScene />],
    ["Return to the harsh word at work", "noon", <NoonScene />],
    ["This is Section 6, Part 1 of the Dependent Arising series", "night", <CloseScene />],
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
