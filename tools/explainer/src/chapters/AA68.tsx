// Bonus video: Yogācāra: The Three Natures, and Where I Part (AA68).
// (Script: new-documents/after-anatta/aa68-three-natures-where-i-part-script.md, from EBooks Bonus Articles/
// three-natures-where-i-part, approved by the owner; video asked for 28 Nov 2026; script approved: "Approved".)
// Arc: wood and elephant -> the three natures -> the magic show -> gold-bearing earth -> three lacks -> where I walk
// with it -> three places of parting -> one thing -> mind and object together -> two keys -> close.
// Stance: the wood is never drawn as a real basis; mind is never drawn as the floor.
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
  "By a spell, a piece of wood appears as an elephant. There is no elephant", "I am John Tan, known as Thusness",
  "In the Dependent Arising series I say more than once", "has a key of its own, the three natures",
  // three
  "puts it in three lines", "The dependent nature is what appears", "The imagined nature is how it appears",
  "And the perfected nature is that it never exists",
  // magic
  "His image is a magic show", "The elephant is the imagined nature", "The appearing is the dependent nature",
  "And that there is no elephant in it",
  // gold
  "before firing, shows the clay and not the gold", "Fired in wisdom, the clay goes", "Seen wrongly, it is defiled",
  // lacks
  "of this school takes the old saying", "The imagined lacks a defining mark of its own",
  "The dependent lacks a nature of its own in its arising", "And the perfected is the absence of a self itself",
  "And it warns: take the saying as nothing at all",
  // walk
  "Much of this I can walk with", "And seeing that is not losing the wood", "That is close to what I mean by empty",
  // part
  "But I part at three places", "The first. In the Tibetan presentation", "Something real has to be there",
  "Here I side with", "Things work because they are empty", "The second", "in refusing the storehouse",
  "Neither carried, nor cut", "The third", "Otherwise, it asks, how could I remember seeing",
  "answers that memory arises in dependence", "it is the knower coming back",
  // one
  "These three come to one thing", "A real basis. A real carrier", "Take them away, and what is left is not less",
  "The bell still rings",
  // mind
  "does keep mind as the floor", "used the hungry ghosts and the river of pus", "turned the story around",
  "Mind and object stand or fall together", "The dream proves nothing",
  "In the absence of an object, there is also no intellect", "Idealism is materialism turned inside out",
  "Some scholars read", "the three places I named are where it remains",
  // keys
  "There are two keys here", "calls its own key the third turning", "says the reverse",
  "reading as final, for one reason", "What appears is dependent all the way", "joined the two", "I borrow his test",
  // close
  "the three natures, and where I part", "The elephant was never there. And nothing real was needed",
];

const M = {
  open: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  three: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  magic: { a: "rgba(150,90,70,0.44)", b: "rgba(60,50,120,0.42)", c: "rgba(170,125,50,0.3)" },
  gold: { a: "rgba(170,120,50,0.46)", b: "rgba(90,60,40,0.42)", c: "rgba(60,110,90,0.3)" },
  lacks: { a: "rgba(40,100,130,0.46)", b: "rgba(60,50,120,0.4)", c: "rgba(40,90,110,0.32)" },
  walk: { a: "rgba(60,110,80,0.46)", b: "rgba(150,120,60,0.34)", c: "rgba(40,80,100,0.32)" },
  part: { a: "rgba(150,70,60,0.42)", b: "rgba(60,50,120,0.44)", c: "rgba(150,110,60,0.3)" },
  one: { a: "rgba(130,60,80,0.44)", b: "rgba(50,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  mind: { a: "rgba(60,45,130,0.52)", b: "rgba(160,80,90,0.36)", c: "rgba(30,70,120,0.32)" },
  keys: { a: "rgba(150,110,50,0.44)", b: "rgba(60,45,130,0.46)", c: "rgba(40,60,100,0.36)" },
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
/** A piece of wood, and the elephant laid over it; the elephant fades at "no elephant", the wood stays. */
const WoodElephant: React.FC<{ fadeAt: string }> = ({ fadeAt }) => {
  const { t } = useT();
  const c = useCue();
  const gone = ramp(t, c(fadeAt) + 0.8, 1.5);
  return (
    <div style={{ position: "relative", width: 700, height: 260 }}>
      <div style={{ position: "absolute", left: 210, top: 150, width: 280, height: 56, borderRadius: 14,
        background: "linear-gradient(90deg,#7a5532,#9b6e43,#7a5532)", boxShadow: "0 0 24px rgba(200,150,90,0.35)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 216, textAlign: "center" }}><Wd c={WARM} s={22}>wood</Wd></div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 20, textAlign: "center", opacity: 1 - 0.85 * gone,
        filter: `blur(${3 * gone}px)` }}>
        <Wd c={ICE} s={60} serif>an elephant</Wd>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["By a spell, a piece of wood appears as an elephant. There is no elephant", 960, 380,
          <WoodElephant fadeAt="By a spell, a piece of wood appears as an elephant. There is no elephant" />],
        ["By a spell, a piece of wood appears as an elephant. There is no elephant", 960, 640, <Wd c={GOLD} s={34} serif>but is there really wood?</Wd>, { d: 4.5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="In the Dependent Arising series I say more than once">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 380, <Wd c={GOLD} s={48} serif>Yogācāra: The Three Natures, and Where I Part</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 600, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ]} />
    </Phase>
    <Phase from="In the Dependent Arising series I say more than once">
      <Items items={[
        ["In the Dependent Arising series I say more than once", 960, 280, <Wd c={DIM} s={26}>in the series: I part from Yogācāra, where mind is made the floor</Wd>],
        ["In the Dependent Arising series I say more than once", 960, 360, <Wd c={DIM} s={22}>fair to Yogācāra as it is commonly read</Wd>, { d: 4 }],
        ["has a key of its own, the three natures", 960, 520, <K c={GOLD} s={30}>its own key: the three natures</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ThreeScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["puts it in three lines", 960, 110, <Wd c={VIOLET} s={40} serif>The three natures</Wd>],
      ["The dependent nature is what appears", 340, 400, <Box c={TEAL} w={540} title="dependent" sub="what appears · from causes and conditions" />, { pop: true }],
      ["The imagined nature is how it appears", 960, 400, <Box c={ROSE} w={540} title="imagined" sub="how it appears · a thing out there, a me in here" />, { pop: true }],
      ["And the perfected nature is that it never exists", 1580, 400, <Box c={GOLD} w={540} title="perfected" sub="it never exists the way it appears" />, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const MagicScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["His image is a magic show", 960, 110, <Wd c={WARM} s={40} serif>A magic show</Wd>],
      ["His image is a magic show", 960, 380, <WoodElephant fadeAt="And that there is no elephant in it" />],
      ["The elephant is the imagined nature", 500, 640, <K c={ROSE} s={24}>the elephant: imagined</K>],
      ["The appearing is the dependent nature", 960, 640, <K c={TEAL} s={24}>the appearing: dependent</K>],
      ["And that there is no elephant in it", 1420, 640, <K c={GOLD} s={24}>no elephant in it: perfected</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const GoldScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["before firing, shows the clay and not the gold", 960, 110, <Wd c={GOLD} s={40} serif>Gold-bearing earth</Wd>],
      ["before firing, shows the clay and not the gold", 600, 400, <Box c={WARM} w={560} title="before firing" sub="the clay shows, not the gold" />, { pop: true }],
      ["Fired in wisdom, the clay goes", 1320, 400, <Box c={GOLD} w={560} title="fired in wisdom" sub="the clay goes, the gold shows" />, { pop: true }],
      ["Seen wrongly, it is defiled", 960, 620, <Wd c={CHALK} s={28} serif>the dependent is the earth: seen wrongly, defiled · seen rightly, pure</Wd>],
    ]} />
  </AbsoluteFill>
);

const LacksScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["of this school takes the old saying", 960, 110, <Wd c={TEAL} s={38} serif>All things lack a nature: three lacks</Wd>],
      ["The imagined lacks a defining mark of its own", 960, 280, <Wd c={ROSE} s={26}>the imagined: no mark of its own · a flower in the sky</Wd>],
      ["The dependent lacks a nature of its own in its arising", 960, 370, <Wd c={TEAL} s={26}>the dependent: no nature of its own in arising · a magic show</Wd>],
      ["And the perfected is the absence of a self itself", 960, 460, <Wd c={GOLD} s={26}>the perfected: the absence of a self itself</Wd>],
      ["And it warns: take the saying as nothing at all", 960, 620, <SK at="And it warns: take the saying as nothing at all" d={2.5} s={26}>"nothing at all"</SK>],
      ["And it warns: take the saying as nothing at all", 960, 700, <Wd c={DIM} s={22}>that way lies nihilism</Wd>, { d: 3 }],
    ]} />
  </AbsoluteFill>
);

const WalkScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Much of this I can walk with", 960, 110, <Wd c={GREEN} s={40} serif>Where I can walk with it</Wd>],
      ["Much of this I can walk with", 960, 280, <Wd c={CHALK} s={28}>arising in dependence · vivid · working · not what it seems</Wd>, { d: 2.5 }],
      ["And seeing that is not losing the wood", 960, 420, <K c={GOLD} s={28}>no elephant · the wood not lost</K>, { pop: true }],
      ["That is close to what I mean by empty", 960, 560, <Wd c={TEAL} s={28} serif>empty, and not ghostly</Wd>],
    ]} />
  </AbsoluteFill>
);

const PartScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["But I part at three places", 960, 100, <Wd c={ROSE} s={40} serif>Where I part: three places</Wd>],
      ["The first. In the Tibetan presentation", 340, 330, <Box c={WARM} w={540} title="1 · a real basis" sub="the dependent nature truly established" />, { pop: true }],
      ["Things work because they are empty", 340, 500, <Wd c={TEAL} s={22}>things work because they are empty</Wd>],
      ["The second", 960, 330, <Box c={WARM} w={540} title="2 · a real carrier" sub="a storehouse carrying seeds" />, { pop: true }],
      ["Neither carried, nor cut", 960, 500, <Wd c={TEAL} s={22}>neither carried, nor cut</Wd>],
      ["The third", 1580, 330, <Box c={WARM} w={540} title="3 · a real self-knowing" sub="awareness knowing itself" />, { pop: true }],
      ["answers that memory arises in dependence", 1580, 500, <Wd c={TEAL} s={22}>memory arises in dependence · no extra knower</Wd>],
    ]} />
  </AbsoluteFill>
);

const OneScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["These three come to one thing", 960, 120, <Wd c={CHALK} s={40} serif>One thing</Wd>],
      ["A real basis. A real carrier", 960, 300, <SK at="Take them away, and what is left is not less" s={28}>something real underneath</SK>],
      ["Take them away, and what is left is not less", 960, 460, <Wd c={TEAL} s={30} serif>what is left is not less</Wd>, { d: 1 }],
      ["The bell still rings", 960, 580, <K c={GOLD} s={30}>the bell still rings</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const MindScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["does keep mind as the floor", 960, 100, <Wd c={VIOLET} s={38} serif>Mind and object together</Wd>],
      ["used the hungry ghosts and the river of pus", 960, 230, <Wd c={DIM} s={24}>the river of pus: shared karma in the mind, no outer river</Wd>],
      ["Mind and object stand or fall together", 960, 340, <K c={GOLD} s={28}>mind and object stand or fall together</K>, { pop: true }],
      ["The dream proves nothing", 960, 440, <Wd c={CHALK} s={24}>if the dreaming mind was there, the dream objects were too</Wd>],
      ["In the absence of an object, there is also no intellect", 960, 530, <Wd c={CHALK} s={26} serif>no object, no intellect</Wd>],
      ["Idealism is materialism turned inside out", 960, 640, <K c={ROSE} s={28}>idealism: materialism turned inside out</K>, { pop: true }],
      ["Some scholars read", 960, 750, <Wd c={DIM} s={22}>another reading: how experience is built · the gap smaller, the three places remain</Wd>],
    ]} />
  </AbsoluteFill>
);

const KeysScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["There are two keys here", 960, 110, <Wd c={GOLD} s={40} serif>Two keys</Wd>],
      ["calls its own key the third turning", 600, 330, <Box c={VIOLET} w={600} title="the sūtra" sub="three natures: definitive · 'all lack a nature': provisional" />, { pop: true }],
      ["says the reverse", 1320, 330, <Box c={TEAL} w={600} title="Madhyamaka" sub="the reverse" />, { pop: true }],
      ["reading as final, for one reason", 960, 510, <Wd c={CHALK} s={28} serif>nothing left standing underneath, and none needed</Wd>],
      ["What appears is dependent all the way", 960, 600, <K c={GOLD} s={26}>dependent all the way · that is why it works</K>, { pop: true }],
      ["joined the two", 960, 720, <Wd c={DIM} s={22}>Śāntarakṣita: his test of one or many, yes · the everyday mind-only, no</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The elephant was never there. And nothing real was needed");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["the three natures, and where I part", 960, 160, <Wd c={GOLD} s={40} serif>Yogācāra: the three natures, and where I part</Wd>],
        ["The elephant was never there. And nothing real was needed", 960, 440, <Wd c={CHALK} s={40} serif>the elephant was never there,</Wd>],
        ["The elephant was never there. And nothing real was needed", 960, 540, <Wd c={TEAL} s={40} serif>and nothing real was needed under the wood</Wd>, { d: 2 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["By a spell, a piece of wood appears as an elephant. There is no elephant", "open", <OpenScene />],
    ["puts it in three lines", "three", <ThreeScene />],
    ["His image is a magic show", "magic", <MagicScene />],
    ["before firing, shows the clay and not the gold", "gold", <GoldScene />],
    ["of this school takes the old saying", "lacks", <LacksScene />],
    ["Much of this I can walk with", "walk", <WalkScene />],
    ["But I part at three places", "part", <PartScene />],
    ["These three come to one thing", "one", <OneScene />],
    ["does keep mind as the floor", "mind", <MindScene />],
    ["There are two keys here", "keys", <KeysScene />],
    ["the three natures, and where I part", "night", <CloseScene />],
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
