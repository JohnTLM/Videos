// After Anatta · Explorations: Dependent Arising and Designation: What It Is and What It Is For
// (thusness-website after-anatta/dependent-arising.html, aa-dependent-arising; EBooks Bonus Articles/dependent-arising-and-designation).
// Arc: one sound, what made it? -> a hub; five mishearings -> what it says (bell, seed, harsh word) -> causal efficacy without
// causal power -> the doer behind the doing (anatta turned outwards; no goer, seer, fire apart, producer) -> designation is
// singling out (blue world) -> the chariot, sevenfold search -> the basis designated too, no bottom layer -> not arbitrary ->
// conditions are the appearing (loaf) -> not a web (net fades) -> two modes of right knowing -> three uses -> an enlightened view
// -> default and inherent framework -> ignorance not a power; the antidote -> why the masters praise it; twelve links both ways
// -> the veil is ignorance, three meanings of samvrti, mere convention -> spontaneous presence (two questions; summer, winter)
// -> where it meets and may part from the masters -> five guards -> try it.
// Stance: a power in the cause, a producer, a doer behind, a bottom layer, a web, a ground, a veil made of dependent arising and a
// keeper are drawn only to be struck. Conditions and what appears stay drawn and vivid. The net is drawn and then fades.
// Cue phrases avoid the respelled names (Nāgārjuna, Candrakīrti, Nāgasena, Milinda, Tsongkhapa, Dzogchen, Prāsaṅgika, saṃvṛti).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Snowflake, Strike, Sun, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "Listen to one sound near you", "what made it", "This is After Anatta",
  // hub and mishearings
  "Dependent arising runs through almost everything I write", "None of them sets out the view itself", "This one does",
  "easy to agree with, and easy to mishear", "Then they hear one of five things", "A web: things are unfindable",
  "A machine: causes working in the dark", "Only concepts: if it is designated", "A lower truth: fine for the world",
  "And the shape of ignorance", "Each takes something true and sets it on the wrong foot",
  // what it says
  "Start with what it says", "A bell rings when it is struck", "A seed of rice gives rice",
  "A harsh word, met with a certain mood, brings anger", "Dependent arising says: these conditions, met together",
  "Designated, and working",
  // the bell
  "What it never says is that a cause", "The ringing is not made by the bronze", "It is their meeting",
  "Nothing passes from the strike to the sound", "Yet without the strike, there is no ringing",
  "This is what I call causal efficacy without causal power", "And no power is ever found sitting in a cause",
  // the doer
  "Dependent arising did not come to me as a theory", "Anatta is the insight that there is no doer behind seeing",
  "In seeing, only the seen", "The person does not disappear", "What falls away is one picture",
  "makes the same move everywhere", "There is no goer behind going", "There is no seer behind seeing",
  "no fire standing apart from its fuel", "and no producer behind arising", "Dependent arising is this: no doer behind anything",
  "The wind is blowing", "It is raining, and there is no", "So anatta and dependent arising are not two subjects",
  "Dependent arising takes it out of everything else",
  // designation
  "Now designation", "Designation does not need words", "This sound, this colour, this ache",
  "In a world of only blue, no one would see blue", "It is the appearing", "By appearing, a thing is already empty",
  // the chariot
  "The clearest case is the oldest", "It is not the pole, not the axle", "makes the search complete, in seven ways",
  "Nothing is found", "Yet the chariot is not denied", "It still carries you to town", "Walking is the chariot",
  "Hearing is the chariot",
  // the basis
  "And the parts are designated too", "But a wheel is singled out in turn", "And they on their wood",
  "And the wood on its grain", "No bottom layer is ever reached", "Not because the search was cut short",
  // not arbitrary
  "does not mean only a name", "Designation and functioning arise together",
  "The chariot is called a chariot because it carries", "A designation holds because it works",
  "And the mind that seems to do the designating is singled out too", "No one stands behind it, doing it",
  // conditions are the appearing
  "two pictures creep back", "The first puts the conditions underneath", "But the conditions are the appearing",
  "The cook, the chemist and the physicist cut the same loaf differently", "None of them is the loaf from its own side",
  // not a web
  "The second keeps the relations when the things are gone", "But the line is as unfindable as the dot", "says it plainly",
  "Relation and what is related are designated together", "is a fine image", "so long as the net itself is not taken",
  "is only half of it", "the relations are not found from their own side either", "It is this, appearing",
  // two modes
  "There are two ways of knowing rightly here", "The first works through concepts, within the framework",
  "This is not a lesser knowing", "It is how a doctor treats", "corrects the inherent reading",
  "The second is freedom from all elaborations", "Without the framework, there is one complete stroke",
  "Neither cancels the other", "The first is not a ladder to throw away",
  "Freedom kept apart from the framework would become a new ground", "with the parts and conditions now light",
  // three uses
  "dependent arising does three kinds of work", "It explains", "It dismantles", "calls it the king of reasons",
  "And it describes the taste", "They hang together", "What validly depends cannot also stand by itself",
  "What goes is only the", "And it puts nothing in place of what it removes", "It dismantles itself too",
  // an enlightened view
  "Dependent arising is an enlightened view", "a view that only the enlightened can hold",
  "I mean the right view of how things are", "We do not live in the wisdom of dependent arising",
  "We live reading the matrix as inherent", "Things seem to stand by themselves", "Causes seem to push",
  "A self seems to sit behind the seeing", "It is a deep habit of seeing",
  // two frameworks
  "So I keep two frameworks apart", "The default framework is the conventional cutting itself", "Dependent arising lives here",
  "The inherent framework is the habit", "That is the matrix", "Dependent arising lives in the first, and unbinds the second",
  "That is the slide into annihilation",
  // ignorance
  "Some readings say dependent arising originates with ignorance", "That reading needs refining", "Ignorance is not a power",
  "It is a very deep habit of confused seeing", "And it can end, because nothing stands behind it",
  "originates as the corrective antidote for that ignorance",
  // praise
  "If it simply came from ignorance", "opens his verses by bowing", "wrote a whole praise to it", "And the Buddha said",
  "The twelve links do begin with ignorance", "In forward order", "In reverse order", "No one praises ignorance",
  "They praise the seeing that undoes it",
  // the veil
  "I have read more than once that conventional truth is a veil", "The source is genuine", "can mean a covering",
  "gives the word three meanings", "mutual dependence", "and worldly convention", "Read carefully, this supports the refinement",
  "What veils is ignorance, the concealer", "The same appearance can be held two ways", "Held by the concealer",
  "it is the seeing that lifts the veil", "says as much himself", "things appear like reflections",
  "He calls this mere convention", "With wisdom, why would it veil",
  // spontaneous presence
  "And here is how it meets spontaneous presence", "is how the appearing is described when we analyse",
  "Spontaneous presence is how it is described when the habit of fixing stops", "They are not two things",
  "Keep two questions apart", "How does this appearing come about", "Through causes and conditions, always",
  "What is its nature", "Not produced", "says spontaneous presence is not made by causes and conditions",
  "appearing through conditions, yet with no birth from its own side", "Neither description is higher",
  "any more than summer becomes winter", "keeps spontaneous presence from being heard as coming from a hidden ground",
  "keeps dependent arising from being heard as a mechanism",
  // the masters
  "At the core, I do not think this departs from the orthodox view", "reasoning refutes production by its own nature",
  "Where I may part from how some masters are read is in four places", "Its status", "Its origin", "Its object",
  "And bridges", "These are my readings", "Weigh both sides",
  // guards
  "Five guards, to end", "Not only concepts", "Not uncaused", "Not a web, and not a ground", "Not a stage to leave behind",
  "And not a state to keep", "Maintenance is the split",
  // try it
  "Try it", "Take that sound again", "Find its conditions", "The sound is not made by them and sent out",
  "Change one condition", "It is a different appearing", "Look for whoever is hearing", "Then look for the",
  "Then ask: did any of this need a hearer behind it", "Let the question go, and hear the sound",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
};

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
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
/** A chip struck through at `strikeAt`: only for what is never found. */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);
/** A dashed ring that draws round something at `at`: the act of singling out. */
const Pick: React.FC<{ at: number; w: number; h: number; color?: string }> = ({ at, w, h, color = GOLD }) => {
  const { t } = useT();
  const p = ramp(t, at, 0.8);
  const len = 2 * Math.PI * Math.sqrt((w * w + h * h) / 8);
  return (
    <svg width={w + 20} height={h + 20} style={{ overflow: "visible", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      <ellipse cx={(w + 20) / 2} cy={(h + 20) / 2} rx={w / 2} ry={h / 2} fill="none" stroke={color} strokeWidth={4}
        strokeDasharray={`${len * p} ${len}`} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
    </svg>
  );
};

/** A bell. */
const Bell: React.FC<{ swing?: number }> = ({ swing = 0 }) => (
  <svg width={220} height={240} viewBox="0 0 220 240" style={{ overflow: "visible", transform: `rotate(${swing}deg)`, transformOrigin: "110px 20px" }}>
    <path d="M110 20 V40" stroke={GOLD} strokeWidth={6} />
    <path d="M50 180 Q50 60 110 45 Q170 60 170 180 Z" fill="rgba(228,194,122,0.28)" stroke={GOLD} strokeWidth={5} />
    <rect x={30} y={178} width={160} height={16} rx={8} fill="rgba(228,194,122,0.4)" stroke={GOLD} strokeWidth={4} />
    <circle cx={110} cy={208} r={12} fill={WARM} />
  </svg>
);
/** Sound waves for the ringing, p 0..1. */
const Waves: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  return (
    <svg width={300} height={240} viewBox="0 0 300 240" style={{ overflow: "visible" }} opacity={p}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <path key={i} d={`M${40 + k * 180} 40 Q${90 + k * 200} 120 ${40 + k * 180} 200`} fill="none" stroke={TEAL} strokeWidth={5}
          opacity={1 - k} style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} />;
      })}
    </svg>
  );
};
/** A chariot. */
const Chariot: React.FC = () => (
  <svg width={520} height={260} viewBox="0 0 520 260" style={{ overflow: "visible" }}>
    <path d="M20 120 H200" stroke={WARM} strokeWidth={8} />
    <path d="M200 70 H420 L440 150 H200 Z" fill="rgba(228,194,122,0.22)" stroke={GOLD} strokeWidth={5} />
    <circle cx={330} cy={180} r={66} fill="none" stroke={GOLD} strokeWidth={6} />
    <circle cx={330} cy={180} r={10} fill={GOLD} />
    {[0, 45, 90, 135].map((a) => {
      const r = (a * Math.PI) / 180;
      return <line key={a} x1={330 - 60 * Math.cos(r)} y1={180 - 60 * Math.sin(r)} x2={330 + 60 * Math.cos(r)} y2={180 + 60 * Math.sin(r)} stroke={GOLD} strokeWidth={4} />;
    })}
  </svg>
);
/** A loaf. */
const Loaf: React.FC = () => (
  <svg width={300} height={160} viewBox="0 0 360 200" style={{ overflow: "visible" }}>
    <path d="M30 170 Q30 50 180 50 Q330 50 330 170 Z" fill="rgba(228,194,122,0.28)" stroke={GOLD} strokeWidth={5} />
    {[110, 170, 230].map((x) => <path key={x} d={`M${x} 70 q20 18 40 0`} fill="none" stroke={WARM} strokeWidth={4} />)}
    <line x1={20} y1={172} x2={340} y2={172} stroke={DIM} strokeWidth={3} />
  </svg>
);
/** A net of dots and lines; `lines` and `dots` (0..1) fade each part. */
const NET: [number, number][] = [[80, 60], [260, 30], [440, 80], [620, 40], [140, 200], [340, 180], [530, 210], [700, 170], [90, 330], [280, 320], [470, 350], [660, 310]];
const Net: React.FC<{ lines: number; dots: number }> = ({ lines, dots }) => (
  <svg width={780} height={380} viewBox="0 0 780 380" style={{ overflow: "visible" }}>
    {NET.flatMap(([x, y], i) => NET.slice(i + 1).filter(([x2, y2]) => Math.hypot(x2 - x, y2 - y) < 240).map(([x2, y2], j) =>
      <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={VIOLET} strokeWidth={3} opacity={0.7 * lines} />))}
    {NET.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={GOLD} opacity={dots} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />)}
  </svg>
);
/** A veil that thins with `gone` (0..1). */
const Veil: React.FC<{ gone: number }> = ({ gone }) => {
  const { t } = useT();
  return (
    <svg width={900} height={300} viewBox="0 0 900 300" style={{ overflow: "visible" }} opacity={0.75 * (1 - gone)}>
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M${i * 100 + 20} 0 Q${i * 100 + 60 + 20 * Math.sin(t + i)} 150 ${i * 100 + 20} 300`}
          fill="none" stroke={VIOLET} strokeWidth={14} opacity={0.5} />
      ))}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  const first = 1 - ramp(t, aa + 2.5, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, 0.4, 0.6) * first}>
        <div style={{ position: "relative" }}><K c={TEAL} s={40}>a car going by · a fan</K><Pick at={c("Listen to one sound near you") + 1} w={520} h={110} color={TEAL} /></div>
      </At>
      <Items items={[["what made it", 960, 560, <Wd c={GOLD} s={44} serif>what made it?</Wd>, { until: "This is After Anatta", ud: 2.5 }]]} />
      <At x={960} y={400} o={ramp(t, aa + 2.8, 0.8)}><Wd c={CHALK} s={58} serif>Dependent Arising and Designation</Wd></At>
      <At x={960} y={500} o={ramp(t, aa + 3.4, 0.8)}><Wd c={GOLD} s={36} serif>What It Is and What It Is For</Wd></At>
    </AbsoluteFill>
  );
};

const HubScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const five = c("Then they hear one of five things");
  const pages: [string, number, number][] = [["the eight steps", 560, 300], ["cause and effect", 1360, 300], ["continuity", 560, 460], ["mind", 1360, 460]];
  const first = 1 - ramp(t, c("easy to agree with, and easy to mishear"), 0.5);
  const hear: [string, string, number, number][] = [
    ["A web: things are unfindable", "a web: the floor at last", 520, 300],
    ["A machine: causes working in the dark", "a machine in the dark", 1400, 300],
    ["Only concepts: if it is designated", "only concepts, only a story", 520, 430],
    ["A lower truth: fine for the world", "a lower truth, to leave behind", 1400, 430],
    ["And the shape of ignorance", "the shape of ignorance", 960, 560],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={380} o={ramp(t, c("Dependent arising runs through almost everything I write"), 0.6) * first}><K c={GOLD} s={36}>dependent arising</K></At>
      {pages.map(([p, x, y], i) => (
        <React.Fragment key={p}>
          <At x={x} y={y} o={ramp(t, c("Dependent arising runs through almost everything I write") + 0.8 + 0.4 * i, 0.5) * first}><K c={DIM} s={26}>{p}</K></At>
          <Flow x1={960} y1={380} x2={x} y2={y} color={DIM} p={ramp(t, c("Dependent arising runs through almost everything I write") + 0.8 + 0.4 * i, 0.8) * first} />
        </React.Fragment>
      ))}
      <Items items={[
        ["None of them sets out the view itself", 960, 640, <Wd c={CHALK} s={30}>none sets out the view itself, whole</Wd>, { until: "easy to agree with, and easy to mishear" }],
        ["This one does", 960, 730, <Wd c={TEAL} s={34} serif>this page is the hub</Wd>, { until: "easy to agree with, and easy to mishear" }],
        ["easy to agree with, and easy to mishear", 960, 130, <Wd c={CHALK} s={38} serif>easy to agree with, easy to mishear</Wd>],
      ]} />
      <At x={960} y={210} o={ramp(t, five, 0.5)}><Wd c={DIM} s={28}>five mishearings</Wd></At>
      {hear.map(([cue, label, x, y]) => <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5)}><K c={ROSE} s={28}>{label}</K></At>)}
      <Items items={[["Each takes something true and sets it on the wrong foot", 960, 700, <Wd c={GOLD} s={30}>each: something true, on the wrong foot</Wd>]]} />
    </AbsoluteFill>
  );
};

const SaysScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Start with what it says", 960, 120, <Wd c={CHALK} s={40} serif>what it says</Wd>],
      ["A bell rings when it is struck", 520, 300, <K c={GOLD} s={28}>a bell, struck, rings</K>],
      ["A seed of rice gives rice", 960, 300, <K c={GREEN} s={28}>a seed of rice gives rice</K>],
      ["A harsh word, met with a certain mood, brings anger", 1400, 300, <K c={ROSE} s={28}>a harsh word, a mood: anger</K>],
      ["Dependent arising says: these conditions, met together", 960, 470, <Wd c={TEAL} s={40} serif>these conditions, met together, and this appears</Wd>],
      ["Designated, and working", 960, 580, <Wd c={GOLD} s={34}>designated, and working</Wd>],
    ]} />
  </AbsoluteFill>
);

const BellScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const meet = c("It is their meeting");
  const conds: [string, number, number][] = [["bronze", 420, 250], ["the strike", 420, 420], ["air", 420, 590], ["ear", 420, 760]];
  return (
    <AbsoluteFill>
      <Items items={[
        ["What it never says is that a cause", 960, 110, <SK strikeAt={c("The ringing is not made by the bronze") + 0.4} c={DIM} s={30}>a cause makes the effect and hands it across</SK>],
      ]} />
      {conds.map(([n, x, y], i) => (
        <React.Fragment key={n}>
          <At x={x} y={y} o={ramp(t, c("The ringing is not made by the bronze") + 0.4 * i, 0.5)}><K c={GOLD} s={28}>{n}</K></At>
          <Flow x1={x + 110} y1={y} x2={1000} y2={480} color={TEAL} p={ramp(t, meet + 0.2 * i, 0.8)} />
        </React.Fragment>
      ))}
      <At x={1120} y={460} o={ramp(t, c("The ringing is not made by the bronze"), 0.6)}><Bell swing={6 * Math.sin(t * 4) * ramp(t, meet, 0.6)} /></At>
      <At x={1380} y={450} o={1}><Waves p={ramp(t, meet, 0.8)} /></At>
      <Items items={[
        ["It is their meeting", 1150, 650, <Wd c={TEAL} s={32}>the ringing is their meeting</Wd>],
        ["Nothing passes from the strike to the sound", 1300, 250, <SK strikeAt={c("Nothing passes from the strike to the sound") + 1.2} c={DIM} s={26}>something passed across</SK>],
        ["Yet without the strike, there is no ringing", 1150, 740, <Wd c={CHALK} s={28}>yet no strike, no ringing</Wd>],
      ]} />
      <At x={960} y={460} o={ramp(t, c("This is what I call causal efficacy without causal power"), 0.6)}>
        <div style={{ padding: "40px 70px", borderRadius: 24, background: "rgba(10,12,30,0.85)", boxShadow: `0 0 60px ${GOLD}55`, textAlign: "center" }}>
          <Wd c={GOLD} s={46} serif>causal efficacy without causal power</Wd>
          <div style={{ height: 30 }} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SK strikeAt={c("And no power is ever found sitting in a cause") + 1.2} c={DIM} s={28}>a power sitting in the cause</SK>
          </div>
        </div>
      </At>
    </AbsoluteFill>
  );
};

const DoerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const seen = c("In seeing, only the seen");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Dependent arising did not come to me as a theory", 960, 120, <Wd c={CHALK} s={36} serif>the same seeing as anatta, turned outwards</Wd>],
        ["Anatta is the insight that there is no doer behind seeing", 960, 260, <SK strikeAt={c("Anatta is the insight that there is no doer behind seeing") + 2} c={DIM} s={30}>a doer behind seeing</SK>],
        ["In seeing, only the seen", 960, 380, <Wd c={TEAL} s={40} serif>in seeing, only the seen</Wd>],
        ["The person does not disappear", 960, 500, <Wd c={GOLD} s={28}>the person stays: a name, the bus, promises kept</Wd>],
        ["What falls away is one picture", 960, 600, <SK strikeAt={c("What falls away is one picture") + 1.5} c={DIM} s={28}>someone behind the action, making it happen</SK>],
      ]} />
      <Ring x={960} y={380} p={ramp(t, seen, 1.6)} r0={40} r1={420} color={TEAL} />
    </AbsoluteFill>
  );
};

const MoveScene: React.FC = () => {
  const c = useCue();
  const row: [string, string, number][] = [
    ["There is no goer behind going", "a goer behind going", 300],
    ["There is no seer behind seeing", "a seer behind seeing", 380],
    ["no fire standing apart from its fuel", "a fire apart from its fuel", 460],
    ["and no producer behind arising", "a producer behind arising", 540],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["makes the same move everywhere", 960, 120, <Wd c={CHALK} s={36} serif>the same move, everywhere</Wd>]]} />
      <Items items={row.map(([cue, label, y], i) =>
        [cue, 600, y, <SK strikeAt={c(cue) + 1.2} c={DIM} s={26}>{label}</SK>] as It)} />
      <Items items={[
        ["There is no goer behind going", 1340, 300, <Wd c={DIM} s={24}>MMK 2</Wd>],
        ["There is no seer behind seeing", 1340, 380, <Wd c={DIM} s={24}>MMK 3</Wd>],
        ["no fire standing apart from its fuel", 1340, 460, <Wd c={DIM} s={24}>MMK 10</Wd>],
        ["and no producer behind arising", 1340, 540, <Wd c={DIM} s={24}>MMK 1</Wd>],
        ["Dependent arising is this: no doer behind anything", 960, 220, <Wd c={TEAL} s={34}>no doer behind anything</Wd>],
        ["The wind is blowing", 600, 660, <K c={ICE} s={26}>the wind is the blowing</K>],
        ["It is raining, and there is no", 1320, 660, <K c={ICE} s={26}>no "it" that rains</K>],
        ["So anatta and dependent arising are not two subjects", 960, 760, <Wd c={GOLD} s={30}>not two subjects: anatta in seeing, dependent arising everywhere</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DesigScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const blue = c("In a world of only blue, no one would see blue");
  const after = c("It is the appearing");
  const items: [string, string, number][] = [["this sound", TEAL, 560], ["this colour", GOLD, 960], ["this ache", ROSE, 1360]];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now designation", 960, 110, <Wd c={CHALK} s={40} serif>designation: singling out</Wd>],
        ["Designation does not need words", 960, 200, <Wd c={DIM} s={28}>no words needed</Wd>],
      ]} />
      {items.map(([n, col, x], i) => (
        <At key={n} x={x} y={360} o={ramp(t, c("This sound, this colour, this ache") + 0.5 * i, 0.5) * (1 - ramp(t, blue, 0.5))}>
          <div style={{ position: "relative" }}><K c={col} s={32}>{n}</K><Pick at={c("This sound, this colour, this ache") + 0.5 * i + 0.3} w={240} h={90} color={col} /></div>
        </At>
      ))}
      <At x={960} y={420} o={ramp(t, blue, 0.6) * (1 - ramp(t, after, 0.6))}>
        <div style={{ width: 760, height: 300, borderRadius: 18, background: "rgba(50,100,220,0.55)", boxShadow: "0 0 60px rgba(60,120,240,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Wd c={CHALK} s={34}>only blue: no one would see blue</Wd>
        </div>
      </At>
      <Items items={[
        ["It is the appearing", 960, 340, <Wd c={TEAL} s={44} serif>singling out is the appearing</Wd>],
        ["By appearing, a thing is already empty", 960, 460, <K c={GOLD} s={32}>by appearing, already empty</K>],
      ]} />
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const seven = c("makes the search complete, in seven ways");
  const ways = ["the same as its parts", "other than them", "possessing them", "in them", "containing them", "their collection", "their shape"];
  const out = 1 - ramp(t, c("Yet the chariot is not denied"), 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["The clearest case is the oldest", 960, 110, <Wd c={CHALK} s={38} serif>where is the chariot?</Wd>]]} />
      <At x={500} y={420} o={ramp(t, c("The clearest case is the oldest"), 0.6)}><Chariot /></At>
      <Items items={[
        ["It is not the pole, not the axle", 500, 620, <Wd c={DIM} s={26}>not the pole, axle, wheels, frame, sum</Wd>, { until: "makes the search complete, in seven ways" }],
      ]} />
      {ways.map((w, i) => (
        <At key={w} x={1360} y={230 + i * 78} o={ramp(t, seven + 0.9 * i, 0.4) * out}>
          <SK strikeAt={seven + 0.9 * i + 0.5} c={DIM} s={24}>{w}</SK>
        </At>
      ))}
      <Items items={[
        ["Nothing is found", 500, 640, <Wd c={TEAL} s={32}>nothing is found</Wd>, { until: "Yet the chariot is not denied" }],
        ["Yet the chariot is not denied", 1360, 330, <Wd c={GOLD} s={36} serif>yet not denied</Wd>],
        ["It still carries you to town", 1360, 430, <K c={GREEN} s={28}>it still carries you to town</K>],
        ["Walking is the chariot", 1200, 560, <K c={TEAL} s={26}>walking</K>],
        ["Hearing is the chariot", 1520, 560, <K c={TEAL} s={26}>hearing</K>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["And the parts are designated too", 960, 110, <Wd c={CHALK} s={38} serif>the basis is designated too</Wd>],
        ["And the parts are designated too", 960, 230, <K c={GOLD} s={30}>chariot</K>, { d: 0.6 }],
        ["But a wheel is singled out in turn", 960, 340, <K c={GOLD} s={28}>wheel: rim, spokes, hub</K>],
        ["And they on their wood", 960, 440, <K c={WARM} s={28}>wood</K>],
        ["And the wood on its grain", 960, 540, <K c={WARM} s={26}>grain</K>],
        ["No bottom layer is ever reached", 960, 660, <SK strikeAt={c("No bottom layer is ever reached") + 1} c={DIM} s={28}>a bottom layer that stands by itself</SK>],
        ["Not because the search was cut short", 960, 770, <Wd c={TEAL} s={28}>there is nowhere for the search to end</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ArbScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["does not mean only a name", 960, 120, <SK strikeAt={c("does not mean only a name") + 0.6} c={DIM} s={32}>"only a name"</SK>],
        ["Designation and functioning arise together", 960, 260, <Wd c={TEAL} s={36} serif>designation and functioning arise together</Wd>],
        ["The chariot is called a chariot because it carries", 960, 370, <K c={GOLD} s={28}>called a chariot because it carries</K>],
        ["A designation holds because it works", 960, 470, <Wd c={CHALK} s={28}>it holds because it works, in its agreements and setting</Wd>],
        ["And the mind that seems to do the designating is singled out too", 960, 590, <K c={VIOLET} s={28}>the designating mind: singled out too</K>],
        ["No one stands behind it, doing it", 960, 690, <SK strikeAt={c("No one stands behind it, doing it") + 0.8} c={DIM} s={26}>someone behind, doing it</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const LoafScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cuts: [string, string, number][] = [["cook", WARM, 560], ["chemist", TEAL, 960], ["physicist", ICE, 1360]];
  return (
    <AbsoluteFill>
      <Items items={[
        ["two pictures creep back", 960, 110, <Wd c={CHALK} s={38} serif>two pictures creep back</Wd>],
        ["The first puts the conditions underneath", 960, 230, <SK strikeAt={c("But the conditions are the appearing") + 0.3} c={DIM} s={28}>conditions underneath, producing the appearing on top</SK>],
        ["But the conditions are the appearing", 960, 340, <Wd c={TEAL} s={40} serif>the conditions are the appearing</Wd>],
      ]} />
      <At x={960} y={490} o={ramp(t, c("The cook, the chemist and the physicist cut the same loaf differently"), 0.6)}><Loaf /></At>
      {cuts.map(([n, col, x], i) => (
        <At key={n} x={x} y={650} o={ramp(t, c("The cook, the chemist and the physicist cut the same loaf differently") + 0.5 * i, 0.5)}><K c={col} s={26}>{n}: a cut that works</K></At>
      ))}
      <Items items={[["None of them is the loaf from its own side", 960, 750, <SK strikeAt={c("None of them is the loaf from its own side") + 1} c={DIM} s={26}>the loaf from its own side</SK>]]} />
    </AbsoluteFill>
  );
};

const WebScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const net = c("The second keeps the relations when the things are gone");
  const line = c("But the line is as unfindable as the dot");
  const half = c("is only half of it");
  return (
    <AbsoluteFill>
      <Items items={[["The second keeps the relations when the things are gone", 960, 100, <Wd c={CHALK} s={36} serif>a web, when the things are gone?</Wd>, { until: "is only half of it" }]]} />
      <At x={960} y={400} o={ramp(t, net, 0.8) * (1 - ramp(t, half, 0.6))}>
        <Net dots={1 - ramp(t, net + 1.5, 1.2) * 0.85} lines={1 - ramp(t, line + 0.5, 2)} />
      </At>
      <Items items={[
        ["But the line is as unfindable as the dot", 960, 650, <Wd c={TEAL} s={30}>the line is as unfindable as the dot</Wd>, { until: "is only half of it" }],
        ["says it plainly", 960, 720, <Wd c={DIM} s={24}>contact, what has come into contact, the one who joins: not found · MMK 14.8</Wd>, { until: "Relation and what is related are designated together" }],
        ["Relation and what is related are designated together", 960, 720, <Wd c={GOLD} s={28}>relation and related: designated together</Wd>, { until: "is a fine image" }],
        ["is a fine image", 960, 720, <Wd c={VIOLET} s={28}>Indra's net: a fine image</Wd>, { until: "is only half of it" }],
        ["so long as the net itself is not taken", 960, 790, <SK strikeAt={c("so long as the net itself is not taken") + 1.5} c={DIM} s={24}>the net as what is finally found</SK>, { until: "is only half of it" }],
        ["is only half of it", 960, 260, <Wd c={CHALK} s={34}>"nothing stands alone" is only half</Wd>],
        ["the relations are not found from their own side either", 960, 370, <Wd c={TEAL} s={30}>the relations are not found from their own side either</Wd>],
        ["It is this, appearing", 960, 500, <Reveal text="It is this, appearing." at={c("It is this, appearing")} size={56} color={GOLD} speed={0.04} />],
      ]} />
    </AbsoluteFill>
  );
};

const ModesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const neither = c("Neither cancels the other");
  const box = (label: string, sub: string, col: string) => (
    <div style={{ width: 640, padding: "28px 20px", borderRadius: 22, border: `3px solid ${col}`, background: `${col}18`, boxShadow: `0 0 30px ${col}44`, textAlign: "center" }}>
      <Glow color={col} size={34} serif>{label}</Glow>
      <div style={{ height: 10 }} />
      <Glow color={CHALK} size={24}>{sub}</Glow>
    </div>
  );
  return (
    <AbsoluteFill>
      <Items items={[["There are two ways of knowing rightly here", 960, 100, <Wd c={CHALK} s={38} serif>two modes of right knowing</Wd>]]} />
      <At x={540} y={320} o={ramp(t, c("The first works through concepts, within the framework"), 0.6)}>{box("within the framework", "conventional and empty, working", TEAL)}</At>
      <At x={1380} y={320} o={ramp(t, c("The second is freedom from all elaborations"), 0.6)}>{box("freedom from all elaborations", "one complete stroke", GOLD)}</At>
      <Items items={[
        ["This is not a lesser knowing", 540, 480, <Wd c={TEAL} s={26}>not a lesser knowing</Wd>, { until: "Neither cancels the other" }],
        ["It is how a doctor treats", 540, 550, <K c={TEAL} s={22}>a doctor · a cook · a promise · karma</K>, { until: "Neither cancels the other" }],
        ["corrects the inherent reading", 540, 630, <Wd c={CHALK} s={24}>shows emptiness, corrects the inherent reading</Wd>, { until: "Neither cancels the other" }],
        ["Without the framework, there is one complete stroke", 1380, 500, <Wd c={GOLD} s={26}>no before and after, part and whole</Wd>, { until: "Neither cancels the other" }],
        ["Neither cancels the other", 960, 520, <Wd c={CHALK} s={34}>neither cancels the other</Wd>],
        ["The first is not a ladder to throw away", 600, 620, <SK strikeAt={c("The first is not a ladder to throw away") + 1} c={DIM} s={24}>a ladder to throw away</SK>],
        ["The first is not a ladder to throw away", 1320, 620, <SK strikeAt={c("The first is not a ladder to throw away") + 2.4} c={DIM} s={24}>a place outside the world</SK>, { d: 1.4 }],
        ["Freedom kept apart from the framework would become a new ground", 960, 710, <SK strikeAt={c("Freedom kept apart from the framework would become a new ground") + 2} c={DIM} s={24}>freedom kept apart: a new ground</SK>],
        ["with the parts and conditions now light", 960, 800, <Wd c={TEAL} s={28}>met again in ordinary life, the parts now light</Wd>],
      ]} />
      <Ring x={960} y={520} p={ramp(t, neither, 1.4)} r0={30} r1={300} color={GOLD} />
    </AbsoluteFill>
  );
};

const UsesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hang = c("They hang together");
  const uses: [string, string, string, string, number][] = [
    ["It explains", "it explains", "how does this come about?", TEAL, 460],
    ["It dismantles", "it dismantles", "shows emptiness · the king of reasons", GOLD, 960],
    ["And it describes the taste", "it describes", "the taste: nothing alone, nothing missing", VIOLET, 1460],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["dependent arising does three kinds of work", 960, 100, <Wd c={CHALK} s={38} serif>three uses</Wd>]]} />
      <At x={960} y={210} o={ramp(t, c("dependent arising does three kinds of work"), 0.6)}><K c={GOLD} s={30}>dependent arising</K></At>
      {uses.map(([cue, h, sub, col, x]) => (
        <React.Fragment key={cue}>
          <Flow x1={960} y1={240} x2={x} y2={340} color={col} p={ramp(t, c(cue), 0.6)} />
          <At x={x} y={380} o={ramp(t, c(cue), 0.5)}><K c={col} s={30}>{h}</K></At>
          <At x={x} y={460} o={ramp(t, c(cue) + 0.6, 0.5)}><Wd c={CHALK} s={22}>{sub}</Wd></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["They hang together", 960, 570, <Wd c={CHALK} s={30}>it can dismantle because it explains</Wd>],
        ["What validly depends cannot also stand by itself", 960, 640, <Wd c={TEAL} s={28}>what validly depends cannot also stand by itself</Wd>],
        ["What goes is only the", 960, 710, <Wd c={GOLD} s={26}>only the "from its own side" goes</Wd>],
        ["And it puts nothing in place of what it removes", 600, 790, <SK strikeAt={c("And it puts nothing in place of what it removes") + 1} c={DIM} s={22}>something put in its place</SK>],
        ["It dismantles itself too", 1320, 790, <K c={GOLD} s={22}>dependence too: not from its own side</K>],
      ]} />
      <Ring x={960} y={380} p={ramp(t, hang, 1.6)} r0={40} r1={600} color={GOLD} />
    </AbsoluteFill>
  );
};

const ViewScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Dependent arising is an enlightened view", 960, 110, <Wd c={GOLD} s={42} serif>an enlightened view</Wd>],
        ["a view that only the enlightened can hold", 960, 210, <SK strikeAt={c("a view that only the enlightened can hold") + 1} c={DIM} s={26}>a view only the enlightened can hold</SK>],
        ["I mean the right view of how things are", 960, 300, <Wd c={TEAL} s={30}>the right view of how things are, not yet lived in</Wd>],
        ["We live reading the matrix as inherent", 960, 410, <Wd c={ROSE} s={32}>we live reading the matrix as inherent</Wd>],
        ["Things seem to stand by themselves", 520, 530, <K c={ROSE} s={24}>things seem to stand alone</K>],
        ["Causes seem to push", 960, 530, <K c={ROSE} s={24}>causes seem to push</K>],
        ["A self seems to sit behind the seeing", 1400, 530, <K c={ROSE} s={24}>a self seems to sit behind</K>],
        ["It is a deep habit of seeing", 960, 660, <Wd c={CHALK} s={30}>not a thought we hold: a deep habit, in the body, before thought</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FrameScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["So I keep two frameworks apart", 960, 110, <Wd c={CHALK} s={38} serif>two frameworks</Wd>],
        ["The default framework is the conventional cutting itself", 520, 260, <K c={TEAL} s={30}>the default framework</K>],
        ["The default framework is the conventional cutting itself", 520, 350, <Wd c={CHALK} s={22}>parts, whole, cause, effect, a time sequence</Wd>, { d: 0.6 }],
        ["Dependent arising lives here", 520, 430, <Wd c={TEAL} s={26}>it works · dependent arising lives here</Wd>],
        ["The inherent framework is the habit", 1400, 260, <K c={ROSE} s={30}>the inherent framework</K>],
        ["The inherent framework is the habit", 1400, 350, <Wd c={CHALK} s={22}>taking what is cut out as standing by itself</Wd>, { d: 0.6 }],
        ["That is the matrix", 1400, 430, <Wd c={ROSE} s={26}>the matrix: a habit, not a field</Wd>],
        ["Dependent arising lives in the first, and unbinds the second", 960, 580, <Wd c={GOLD} s={34}>lives in the first, unbinds the second</Wd>],
        ["That is the slide into annihilation", 960, 690, <SK strikeAt={c("That is the slide into annihilation") + 0.5} c={DIM} s={26}>"only a story": the slide into annihilation</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const IgnScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Some readings say dependent arising originates with ignorance", 960, 120, <Wd c={CHALK} s={34} serif>does it originate with ignorance?</Wd>],
        ["That reading needs refining", 960, 210, <Wd c={DIM} s={26}>that reading needs refining</Wd>],
        ["Ignorance is not a power", 960, 330, <SK strikeAt={c("Ignorance is not a power") + 1} c={DIM} s={28}>a power in us that blinds</SK>],
        ["It is a very deep habit of confused seeing", 960, 430, <Wd c={ROSE} s={30}>a deep habit of confused seeing, designated as ignorance</Wd>],
        ["And it can end, because nothing stands behind it", 960, 520, <Wd c={TEAL} s={28}>it can end: nothing stands behind it</Wd>],
        ["originates as the corrective antidote for that ignorance", 960, 660, <Reveal text="the corrective antidote for ignorance" at={c("originates as the corrective antidote for that ignorance")} size={52} color={GOLD} speed={0.035} />],
      ]} />
    </AbsoluteFill>
  );
};

const PraiseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const links = c("The twelve links do begin with ignorance");
  return (
    <AbsoluteFill>
      <Items items={[
        ["If it simply came from ignorance", 960, 110, <Wd c={CHALK} s={36} serif>why the masters praise it</Wd>],
        ["opens his verses by bowing", 960, 260, <K c={GOLD} s={26}>the homage of the Middle Way verses</K>, { until: "The twelve links do begin with ignorance" }],
        ["wrote a whole praise to it", 960, 370, <K c={GOLD} s={26}>Praise of Dependent Arising: seeing it reverses ignorance</K>, { until: "The twelve links do begin with ignorance" }],
        ["And the Buddha said", 960, 480, <K c={GOLD} s={26}>who sees dependent arising sees the Dhamma · MN 28</K>, { until: "The twelve links do begin with ignorance" }],
      ]} />
      <At x={540} y={300} o={ramp(t, c("In forward order"), 0.6)}>
        <div style={{ textAlign: "center" }}><K c={ROSE} s={28}>forward: ignorance … suffering</K><div style={{ height: 12 }} /><Wd c={DIM} s={24}>how the round runs</Wd></div>
      </At>
      <At x={1380} y={300} o={ramp(t, c("In reverse order"), 0.6)}>
        <div style={{ textAlign: "center" }}><K c={TEAL} s={28}>reverse: ignorance ceasing … suffering ceasing</K><div style={{ height: 12 }} /><Wd c={DIM} s={24}>how it ends</Wd></div>
      </At>
      <At x={960} y={260} o={ramp(t, links, 0.5) * (1 - ramp(t, c("In forward order"), 0.5))}><Wd c={CHALK} s={30}>the twelve links do begin with ignorance</Wd></At>
      <Items items={[
        ["No one praises ignorance", 960, 520, <Wd c={CHALK} s={34}>no one praises ignorance</Wd>],
        ["They praise the seeing that undoes it", 960, 620, <Wd c={GOLD} s={40} serif>they praise the seeing that undoes it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const VeilScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const three = c("gives the word three meanings");
  const read = c("Read carefully, this supports the refinement");
  const two = c("The same appearance can be held two ways");
  const lifts = c("it is the seeing that lifts the veil");
  const himself = c("says as much himself");
  const first = 1 - ramp(t, two, 0.5);
  const meanings: [string, string, string, number][] = [
    ["gives the word three meanings", "concealment: ignorance", ROSE, 480],
    ["mutual dependence", "mutual dependence", TEAL, 960],
    ["and worldly convention", "worldly convention", GOLD, 1440],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["I have read more than once that conventional truth is a veil", 960, 110, <Wd c={CHALK} s={34} serif>is dependent arising the veil?</Wd>],
        ["The source is genuine", 960, 200, <Wd c={DIM} s={26}>the word for conventional can mean a covering</Wd>, { until: "gives the word three meanings" }],
      ]} />
      {meanings.map(([cue, label, col, x]) => (
        <At key={cue} x={x} y={300} o={ramp(t, c(cue), 0.5) * first}><K c={col} s={28}>{label}</K></At>
      ))}
      <At x={960} y={220} o={ramp(t, three, 0.5) * first}><Wd c={DIM} s={24}>three meanings of one word</Wd></At>
      <Items items={[
        ["What veils is ignorance, the concealer", 480, 400, <Wd c={ROSE} s={26}>this one veils</Wd>, { until: "The same appearance can be held two ways" }],
        ["What veils is ignorance, the concealer", 960, 400, <Wd c={TEAL} s={26}>dependent arising</Wd>, { d: 1, until: "The same appearance can be held two ways" }],
        ["What veils is ignorance, the concealer", 1440, 400, <Wd c={GOLD} s={26}>the default framework</Wd>, { d: 1.6, until: "The same appearance can be held two ways" }],
      ]} />
      <At x={960} y={500} o={ramp(t, read, 0.5) * first}><Wd c={CHALK} s={30}>read carefully, it supports the refinement</Wd></At>
      <At x={960} y={430} o={ramp(t, two, 0.6) * (1 - ramp(t, himself, 0.6))}><Veil gone={ramp(t, lifts, 2)} /></At>
      <Items items={[
        ["Held by the concealer", 960, 300, <Wd c={ROSE} s={28}>held by ignorance: it seems to stand alone, the veil</Wd>, { until: "says as much himself" }],
        ["it is the seeing that lifts the veil", 960, 620, <Wd c={TEAL} s={30}>seen as dependent arising: the veil lifts</Wd>, { until: "says as much himself" }],
        ["things appear like reflections", 960, 300, <K c={ICE} s={28}>without ignorance: like reflections</K>],
        ["He calls this mere convention", 960, 410, <Wd c={GOLD} s={38} serif>mere convention</Wd>],
        ["He calls this mere convention", 960, 500, <Wd c={CHALK} s={24}>still appearing, still working, no longer taken as true</Wd>, { d: 0.8 }],
        ["With wisdom, why would it veil", 960, 640, <Reveal text="With wisdom, why would it veil?" at={c("With wisdom, why would it veil")} size={50} color={GOLD} speed={0.035} />],
      ]} />
    </AbsoluteFill>
  );
};

const PresenceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = c("Keep two questions apart");
  const season = c("any more than summer becomes winter");
  const first = 1 - ramp(t, q, 0.5);
  const second = ramp(t, q, 0.5) * (1 - ramp(t, c("Neither description is higher"), 0.5));
  return (
    <AbsoluteFill>
      <Items items={[["And here is how it meets spontaneous presence", 960, 100, <Wd c={CHALK} s={38} serif>one appearing, two descriptions</Wd>]]} />
      <At x={540} y={300} o={ramp(t, c("is how the appearing is described when we analyse"), 0.6) * first}>
        <div style={{ textAlign: "center" }}><K c={TEAL} s={30}>dependent arising</K><div style={{ height: 12 }} /><Wd c={CHALK} s={24}>described when we analyse</Wd></div>
      </At>
      <At x={1380} y={300} o={ramp(t, c("Spontaneous presence is how it is described when the habit of fixing stops"), 0.6) * first}>
        <div style={{ textAlign: "center" }}><K c={GOLD} s={30}>spontaneous presence</K><div style={{ height: 12 }} /><Wd c={CHALK} s={24}>described when the fixing stops</Wd></div>
      </At>
      <Items items={[["They are not two things", 960, 500, <Wd c={CHALK} s={32}>not two things</Wd>, { until: "Keep two questions apart" }]]} />
      <At x={960} y={220} o={second}><Wd c={CHALK} s={30}>keep two questions apart</Wd></At>
      <At x={540} y={340} o={ramp(t, c("How does this appearing come about"), 0.5) * second}>
        <div style={{ textAlign: "center" }}><K c={TEAL} s={26}>how does it come about?</K><div style={{ height: 12 }} /><Wd c={TEAL} s={26}>through conditions, always</Wd></div>
      </At>
      <At x={1380} y={340} o={ramp(t, c("What is its nature"), 0.5) * second}>
        <div style={{ textAlign: "center" }}><K c={GOLD} s={26}>what is its nature?</K><div style={{ height: 12 }} /><Wd c={GOLD} s={26}>empty: not produced</Wd></div>
      </At>
      <Items items={[
        ["says spontaneous presence is not made by causes and conditions", 960, 500, <Wd c={CHALK} s={26}>"not made by causes and conditions"</Wd>, { until: "Neither description is higher" }],
        ["appearing through conditions, yet with no birth from its own side", 960, 580, <Wd c={TEAL} s={26}>read as "unborn by nature": no birth from its own side</Wd>, { until: "Neither description is higher" }],
        ["Neither description is higher", 960, 280, <Wd c={CHALK} s={34}>neither is higher</Wd>],
      ]} />
      <At x={760} y={430} o={ramp(t, season, 0.5)}><Sun size={70} rot={t * 10} /></At>
      <At x={1160} y={430} o={ramp(t, season + 0.4, 0.5)}><Snowflake size={70} rot={t * 10} /></At>
      <Items items={[
        ["any more than summer becomes winter", 960, 430, <SK strikeAt={season + 1.6} c={DIM} s={24}>becomes</SK>, { d: 0.6 }],
        ["keeps spontaneous presence from being heard as coming from a hidden ground", 960, 580, <SK strikeAt={c("keeps spontaneous presence from being heard as coming from a hidden ground") + 2} c={DIM} s={24}>presence from a hidden ground</SK>],
        ["keeps dependent arising from being heard as a mechanism", 960, 680, <SK strikeAt={c("keeps dependent arising from being heard as a mechanism") + 1.5} c={DIM} s={24}>dependent arising as a mechanism</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const MastersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const four = c("Where I may part from how some masters are read is in four places");
  const first = 1 - ramp(t, four, 0.5);
  const parts: [string, string, number][] = [
    ["Its status", "status: an enlightened view, not only the world's description", 290],
    ["Its origin", "origin: the antidote, not the pattern of ignorance", 380],
    ["Its object", "object: the relations are not found either", 470],
    ["And bridges", "bridges: no link needed to carry an act to its fruit", 560],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={300} o={ramp(t, c("At the core, I do not think this departs from the orthodox view"), 0.6) * first}><Wd c={TEAL} s={38} serif>at the core, in line with the orthodox view</Wd></At>
      <At x={960} y={420} o={ramp(t, c("reasoning refutes production by its own nature"), 0.6) * first}><Wd c={CHALK} s={26}>production by its own nature is refuted, not production as the world speaks of it</Wd></At>
      <At x={960} y={150} o={ramp(t, four, 0.5)}><Wd c={CHALK} s={34} serif>where I may part, in four places</Wd></At>
      {parts.map(([cue, label, y]) => <At key={cue} x={960} y={y} o={ramp(t, c(cue), 0.5)}><K c={GOLD} s={24}>{label}</K></At>)}
      <Items items={[
        ["These are my readings", 960, 680, <Wd c={DIM} s={26}>my readings, not the schools'</Wd>],
        ["Weigh both sides", 960, 760, <Wd c={TEAL} s={28}>weigh both sides</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GuardsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Five guards, to end", 960, 110, <Wd c={CHALK} s={38} serif>five guards</Wd>],
        ["Not only concepts", 960, 230, <Wd c={TEAL} s={28}>not only concepts: things work, harm is harm, actions bear fruit</Wd>],
        ["Not uncaused", 960, 320, <Wd c={TEAL} s={28}>not uncaused: the producer goes, not the order</Wd>],
        ["Not a web, and not a ground", 960, 410, <Wd c={TEAL} s={28}>not a web, not a ground</Wd>],
        ["Not a stage to leave behind", 960, 500, <Wd c={TEAL} s={28}>not a stage to leave: held lightly, in ordinary life</Wd>],
        ["And not a state to keep", 960, 590, <Wd c={TEAL} s={28}>not a state to keep</Wd>],
        ["Maintenance is the split", 960, 690, <SK strikeAt={c("Maintenance is the split") + 0.8} c={DIM} s={26}>a keeper, maintaining it</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const conds = c("Find its conditions");
  const items: [string, number][] = [["source", 560], ["air", 827], ["ear", 1094], ["attention", 1360]];
  return (
    <AbsoluteFill>
      <Items items={[["Try it", 960, 100, <Wd c={CHALK} s={38} serif>try it</Wd>]]} />
      <At x={960} y={420} o={ramp(t, c("Take that sound again"), 0.5)}><K c={TEAL} s={34}>the sound</K></At>
      {items.map(([n, x], i) => (
        <React.Fragment key={n}>
          <At x={x} y={240} o={ramp(t, conds + 0.4 * i, 0.5)}><K c={GOLD} s={26}>{n}</K></At>
          <Flow x1={x} y1={270} x2={960} y2={395} color={GOLD} p={ramp(t, conds + 0.4 * i, 0.8)} />
        </React.Fragment>
      ))}
      <Items items={[
        ["The sound is not made by them and sent out", 960, 520, <Wd c={TEAL} s={28}>not made and sent out: their meeting</Wd>],
        ["Change one condition", 960, 600, <K c={ICE} s={24}>cover one ear, turn your head</K>],
        ["It is a different appearing", 960, 670, <Wd c={CHALK} s={26}>a different appearing</Wd>],
        ["Look for whoever is hearing", 600, 740, <Wd c={DIM} s={24}>whoever is hearing?</Wd>],
        ["Then look for the", 1320, 740, <Wd c={DIM} s={24}>the "between"?</Wd>],
      ]} />
      <At x={960} y={810} o={ramp(t, c("Then ask: did any of this need a hearer behind it"), 0.5) * (1 - ramp(t, c("Let the question go, and hear the sound"), 0.5))}>
        <Wd c={CHALK} s={26}>a hearer behind? a web underneath? a power in the cause?</Wd>
      </At>
      <At x={960} y={810}><Reveal text="Let the question go, and hear the sound." at={c("Let the question go, and hear the sound")} size={48} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Listen to one sound near you", "dusk", <OpenScene />],
    ["Dependent arising runs through almost everything I write", "search", <HubScene />],
    ["Start with what it says", "light", <SaysScene />],
    ["What it never says is that a cause", "deep", <BellScene />],
    ["Dependent arising did not come to me as a theory", "jade", <DoerScene />],
    ["makes the same move everywhere", "dusk", <MoveScene />],
    ["Now designation", "search", <DesigScene />],
    ["The clearest case is the oldest", "whole", <ChariotScene />],
    ["And the parts are designated too", "deep", <BasisScene />],
    ["does not mean only a name", "jade", <ArbScene />],
    ["two pictures creep back", "dusk", <LoafScene />],
    ["The second keeps the relations when the things are gone", "deep", <WebScene />],
    ["There are two ways of knowing rightly here", "light", <ModesScene />],
    ["dependent arising does three kinds of work", "whole", <UsesScene />],
    ["Dependent arising is an enlightened view", "doubt", <ViewScene />],
    ["So I keep two frameworks apart", "search", <FrameScene />],
    ["Some readings say dependent arising originates with ignorance", "doubt", <IgnScene />],
    ["If it simply came from ignorance", "light", <PraiseScene />],
    ["I have read more than once that conventional truth is a veil", "deep", <VeilScene />],
    ["And here is how it meets spontaneous presence", "light", <PresenceScene />],
    ["At the core, I do not think this departs from the orthodox view", "dusk", <MastersScene />],
    ["Five guards, to end", "search", <GuardsScene />],
    ["Try it", "night", <TryScene />],
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
