// Bonus video: Dependent Arising Section 2 Part 10: Total Exertion: Huayan (AA50).
// (Script: new-documents/after-anatta/aa50-total-exertion-huayan-script.md, from EBooks
// Bonus Articles/total-exertion-huayan, draft of 2026-11-23; approved by the owner 2026-11-25: "Approved".)
// Arc: three images: what do they mean, and what must they not? -> why Huayan -> worlds in a grain of dust:
// non-obstruction, not cramming -> the rafter (Fazang): a rafter only in the building, a piece of wood in the yard;
// where I part from "is" (MMK 18.10) -> Indra's net: seamless without fusion; the four realms (Chinese on screen only)
// -> what total exertion is for me ("appears" kept) -> where I keep a guard (struck: worlds packed in a container,
// principle as a source, the net as reality, one substance) -> which holds -> next: the close of Section 2.
// Stance: no Whole, source or net-as-reality is drawn except to be struck. Cue phrases avoid names and respelled words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "A net of jewels, each shining in all the others", "But what do they mean, and what must they not mean",
  "I am John Tan, known as Thusness",
  // why
  "In Parts 6 to 9, I tried to say how what appears can be complete, and yet wholly dependent",
  "But the taste is not his alone", "Its great classical home is the", "And the family resemblance is plain",
  "matters a great deal", "I want to give them their full weight here",
  "can, if heard carelessly, put a new floor under it",
  // dust
  "First, worlds in a grain of dust", "The small does not shrink to make room", "They do not obstruct each other",
  "Surely, the habit says, this is fantasy", "And worlds are much bigger than it", "Or look at what the image is pointing to",
  "Nothing about it stands apart from those", "So it does not exclude anything", "A thing with none pushes nothing away",
  "And it is not about cramming worlds into a small space", "It is about non obstruction",
  "What lacks its own core does not block",
  // rafter
  "Second, the rafter", "put this into a famous dialogue, about a building and its rafter",
  "What is the building? The rafter is the building", "How can one rafter be the whole building",
  "So the rafter makes the whole building", "And each of them makes the whole building in the same way",
  "And here is the turn", "It is a piece of wood", "It is a rafter only in the building, with the tiles, the walls and the beams",
  "It is fully exerted as this building", "Neither the part nor the whole stands first",
  "Here I should say where I part from", "His argument really does say the rafter is the building", "would not say is",
  "Neither the same as it, nor apart from it", "That is my reading of", "And it is also the boat",
  // net
  "hangs a net, stretching in every direction", "At every knot is a jewel",
  "No jewel is the central one. No jewel is the original", "This is the taste of seamlessness without fusion",
  "Everything shines in everything else", "One is all, and all is one", "First, things", "Second, principle",
  "Third, principle and things without obstruction", "Fourth, things and things without obstruction",
  "The fourth is the one closest to total exertion", "None of them standing alone",
  // mine
  "What total exertion is, for me", "Watching leaves move in the wind", "There was only the washing",
  "The whole universe appears to be completely occupied with this one event",
  "I keep the word appears in that sentence on purpose", "That is the difference between a taste and a theory",
  "gives the taste its full colour", "I find I need all three",
  // guards
  "Where I keep a guard", "Not a claim about space", "Principle is not a ground", "A cosmic mind behind the display",
  "And emptiness is not a source, or a ground, of anything", "The net is not found either",
  "and a ground has come back, as a web", "One is all is not one thing", "That is holism again",
  "Intimate without merging. Distinct without walls", "With those guards in place",
  // which holds
  "So, which holds", "By experience. When I wash a cup", "What is met is the second",
  "By logic. A rafter that was a rafter on its own", "It is no better off", "By working. Nothing works the less for this",
  "Non obstruction does not make the world thin", "Things with solid cores would push each other away",
  "Both are the default", "The rafter holds up the roof, and the cup is clean",
  "What fails is only a rafter, a cup, or a cosmos, standing on its own",
  // close
  "This is Section 2, Part 10 of the Dependent Arising series", "In Part 11, I close Section 2",
  "Privacy, objectivity, causal power, inside and outside", "Each a genuine feature of appearing, misread as a thing",
];

const M = {
  gold: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  temple: { a: "rgba(150,105,45,0.46)", b: "rgba(60,50,130,0.44)", c: "rgba(40,90,110,0.32)" },
  net: { a: "rgba(40,90,150,0.5)", b: "rgba(90,70,160,0.42)", c: "rgba(40,120,130,0.32)" },
  cup: { a: "rgba(40,110,110,0.46)", b: "rgba(60,50,130,0.42)", c: "rgba(150,120,60,0.3)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
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
/** A grain of dust, with small worlds shining in it, none crowding another. */
const Dust: React.FC<{ worlds: number }> = ({ worlds }) => {
  const { t } = useT();
  const pts = [...Array(14)].map((_, i) => [Math.cos(i * 2.4) * (30 + (i % 4) * 22), Math.sin(i * 2.4) * (30 + (i % 4) * 22)]);
  return (
    <svg width={360} height={360} viewBox="-180 -180 360 360" style={{ overflow: "visible" }}>
      <circle cx={0} cy={0} r={140} fill="rgba(200,180,140,0.08)" stroke={GOLD} strokeWidth={4} />
      {pts.map(([x, y], i) => (
        <g key={i} opacity={worlds * (0.6 + 0.4 * Math.sin(t * 2 + i))}>
          <circle cx={x} cy={y} r={12} fill="none" stroke={[ICE, ROSE, TEAL, VIOLET][i % 4]} strokeWidth={2} />
          <circle cx={x} cy={y} r={4} fill={[ICE, ROSE, TEAL, VIOLET][i % 4]} />
        </g>
      ))}
    </svg>
  );
};
/** A building with its rafters; `hl` lights one rafter; `alone` 0..1 moves that rafter out to lie in a yard. */
const Building: React.FC<{ hl: number; alone: number }> = ({ hl, alone }) => (
  <svg width={760} height={420} viewBox="0 0 760 420" style={{ overflow: "visible" }}>
    <g opacity={1 - alone * 0.6}>
      <path d="M60 170 L250 60 L440 170" fill={`${WARM}22`} stroke={WARM} strokeWidth={5} />
      {[0, 1, 2, 3, 4].map((i) => i === 2 ? null : <path key={i} d={`M${100 + i * 75} 170 L250 70`} stroke={WARM} strokeWidth={3} opacity={0.7} />)}
      <rect x={90} y={170} width={320} height={190} fill="rgba(20,20,40,0.5)" stroke={CHALK} strokeWidth={4} />
      <rect x={220} y={270} width={60} height={90} fill="none" stroke={CHALK} strokeWidth={3} />
      <text x={250} y={400} fill={DIM} fontSize={22} textAnchor="middle" fontFamily="SourceSans">tiles · walls · beams</text>
    </g>
    <g transform={`translate(${alone * 330}, ${alone * 200})`}>
      <path d={alone > 0.5 ? "M120 150 L320 150" : "M250 170 L250 70"} stroke={GOLD} strokeWidth={8} opacity={0.4 + hl * 0.6} strokeLinecap="round" />
    </g>
    {alone > 0.5 && <text x={550} y={330} fill={DIM} fontSize={24} textAnchor="middle" fontFamily="SourceSans" opacity={alone}>in a yard: a piece of wood</text>}
  </svg>
);
/** A net of jewels; each jewel faintly holds the colours of the others. */
const Net: React.FC = () => {
  const { t } = useT();
  const cols = [ICE, ROSE, GOLD, TEAL, VIOLET, GREEN];
  const pts: [number, number][] = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) pts.push([-250 + c * 100 + (r % 2) * 50, -150 + r * 100]);
  return (
    <svg width={700} height={420} viewBox="-350 -210 700 420" style={{ overflow: "visible" }}>
      {pts.map(([x, y], i) => pts.slice(i + 1).filter(([x2, y2]) => Math.hypot(x2 - x, y2 - y) < 120).map(([x2, y2], j) =>
        <path key={`${i}-${j}`} d={`M${x} ${y} L${x2} ${y2}`} stroke={DIM} strokeWidth={1.5} opacity={0.6} />))}
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={14} fill={`${cols[i % 6]}33`} stroke={cols[i % 6]} strokeWidth={3} />
          {[0, 1, 2].map((k) => <circle key={k} cx={x + 5 * Math.cos(k * 2.1 + t)} cy={y + 5 * Math.sin(k * 2.1 + t)} r={2.5} fill={cols[(i + k + 1) % 6]} />)}
        </g>
      ))}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A net of jewels, each shining in all the others", 440, 420, <Dust worlds={1} />, { d: -3 }],
        ["A net of jewels, each shining in all the others", 960, 430, <Wd c={WARM} s={30} serif>a rafter, and the building it makes</Wd>, { d: -1.5 }],
        ["A net of jewels, each shining in all the others", 1480, 420, <Wd c={ICE} s={30} serif>a net of jewels</Wd>],
        ["But what do they mean, and what must they not mean", 960, 760, <Wd c={GOLD} s={40} serif>What do they mean, and what must they not?</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="In Parts 6 to 9, I tried to say how what appears can be complete, and yet wholly dependent">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Total Exertion: Huayan</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 10</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="In Parts 6 to 9, I tried to say how what appears can be complete, and yet wholly dependent">
      <Items items={[
        ["In Parts 6 to 9, I tried to say how what appears can be complete, and yet wholly dependent", 960, 200, <Wd c={DIM} s={26}>Parts 6–9: complete, and dependent · Dōgen's four images</Wd>],
        ["But the taste is not his alone", 960, 300, <Wd c={CHALK} s={30} serif>the taste is not Dōgen's alone</Wd>],
        ["Its great classical home is the", 960, 400, <K c={GOLD} s={26}>its classical home: Huayan (Flower Ornament sūtra)</K>, { pop: true }],
        ["And the family resemblance is plain", 960, 480, <Wd c={DIM} s={22}>Dōgen's Zen grew in a Buddhism Huayan helped shape</Wd>],
        ["I want to give them their full weight here", 960, 600, <Wd c={CHALK} s={26}>the images, given their full weight</Wd>],
        ["can, if heard carelessly, put a new floor under it", 960, 680, <K c={WARM} s={24}>and a guard: heard carelessly, they lay a new floor</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const DustScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["First, worlds in a grain of dust", 960, 80, <Wd c={GOLD} s={44} serif>1 · Worlds in a grain of dust</Wd>]]} />
      <At x={520} y={460} o={1}><Dust worlds={ramp(t, c("First, worlds in a grain of dust") + 2, 1.5)} /></At>
      <Phase to="Or look at what the image is pointing to">
        <Items items={[
          ["The small does not shrink to make room", 1380, 260, <Wd c={CHALK} s={24}>buddha-fields in one grain, none crowding another</Wd>],
          ["They do not obstruct each other", 1380, 330, <K c={GOLD} s={24}>they do not obstruct each other</K>, { pop: true }],
          ["Surely, the habit says, this is fantasy", 1380, 470, <Wd c={DIM} s={24}>surely fantasy: a grain has its own size and edges</Wd>],
        ]} />
      </Phase>
      <Phase from="Or look at what the image is pointing to">
        <Items items={[
          ["Or look at what the image is pointing to", 1380, 200, <Wd c={CHALK} s={26} serif>no size or edge of its own</Wd>],
          ["Nothing about it stands apart from those", 1380, 270, <Wd c={DIM} s={22}>the light · the eye · the floor · the wind · the scale</Wd>],
          ["So it does not exclude anything", 1380, 350, <Wd c={CHALK} s={24}>so it excludes nothing</Wd>],
          ["A thing with none pushes nothing away", 1380, 420, <Wd c={DIM} s={22}>a core pushes others away · no core pushes nothing away</Wd>],
          ["And it is not about cramming worlds into a small space", 1380, 520, <SK at="It is about non obstruction" d={0.3} s={22}>worlds crammed into a tiny place</SK>],
          ["It is about non obstruction", 1380, 600, <Wd c={GOLD} s={28} serif>non-obstruction</Wd>],
          ["What lacks its own core does not block", 1380, 670, <K c={TEAL} s={24}>what lacks its own core does not block</K>, { pop: true }],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const RafterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hl = ramp(t, c("What is the building? The rafter is the building"), 0.6);
  const alone = ramp(t, c("And here is the turn"), 1.2) * (1 - ramp(t, c("It is fully exerted as this building"), 1));
  return (
    <AbsoluteFill>
      <Items items={[["Second, the rafter", 960, 80, <Wd c={WARM} s={44} serif>2 · The rafter</Wd>]]} />
      <At x={520} y={470} o={1}><Building hl={hl} alone={alone} /></At>
      <Phase to="Here I should say where I part from">
        <Items items={[
          ["put this into a famous dialogue, about a building and its rafter", 1380, 180, <Wd c={DIM} s={22}>Fazang (643–712): the rafter and the building, in my words</Wd>],
          ["What is the building? The rafter is the building", 1380, 260, <Wd c={CHALK} s={26}>"the rafter is the building"</Wd>],
          ["So the rafter makes the whole building", 1380, 330, <Wd c={DIM} s={22}>without it, a broken building, not this one</Wd>],
          ["And each of them makes the whole building in the same way", 1380, 400, <Wd c={DIM} s={22}>tiles, walls, beams: each makes the whole</Wd>],
          ["It is a piece of wood", 1380, 480, <K c={WARM} s={24}>alone in a yard: a piece of wood</K>, { pop: true }],
          ["It is a rafter only in the building, with the tiles, the walls and the beams", 1380, 550, <Wd c={CHALK} s={22}>a rafter only in the building</Wd>],
          ["It is fully exerted as this building", 1380, 640, <Wd c={GOLD} s={28} serif>fully exerted as this building</Wd>],
          ["Neither the part nor the whole stands first", 1380, 710, <Wd c={CHALK} s={22}>neither part nor whole stands first</Wd>],
        ]} />
      </Phase>
      <Phase from="Here I should say where I part from">
        <Items items={[
          ["Here I should say where I part from", 1380, 220, <Wd c={CHALK} s={28} serif>where I part from Fazang</Wd>],
          ["His argument really does say the rafter is the building", 1380, 300, <SK at="Neither the same as it, nor apart from it" s={24}>the rafter IS the building (mutual identity, one mind)</SK>],
          ["would not say is", 1380, 380, <Wd c={DIM} s={22}>neither that thing nor different from it (MMK 18.10)</Wd>],
          ["Neither the same as it, nor apart from it", 1380, 460, <Wd c={GOLD} s={26} serif>fully exerted as it: neither the same, nor apart</Wd>],
          ["That is my reading of", 1380, 540, <Wd c={DIM} s={22}>my reading of Fazang, not a summary of him</Wd>],
          ["And it is also the boat", 1380, 640, <K c={TEAL} s={22}>a rower only in rowing · a rafter only in the building</K>, { pop: true }],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const NetScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[["hangs a net, stretching in every direction", 960, 80, <Wd c={ICE} s={44} serif>3 · Indra's net</Wd>]]} />
    <Phase to="One is all, and all is one">
      <Items items={[
        ["hangs a net, stretching in every direction", 960, 430, <Net />],
        ["No jewel is the central one. No jewel is the original", 960, 690, <Wd c={CHALK} s={26}>no jewel central · no jewel original</Wd>],
        ["This is the taste of seamlessness without fusion", 960, 760, <K c={TEAL} s={24}>seamless, without fusion: jewels still jewels</K>, { pop: true }],
        ["Everything shines in everything else", 960, 830, <Wd c={DIM} s={22}>each shines in all · none sealed off · none merged</Wd>],
      ]} />
    </Phase>
    <Phase from="One is all, and all is one">
      <Items items={[
        ["One is all, and all is one", 960, 170, <Wd c={GOLD} s={32} serif>one is all, all is one · four realms</Wd>],
        ["First, things", 960, 280, <Box c={CHALK} w={1000} title="1 · things (shi)" sub="the cup, the tree, the bell" />, { pop: true }],
        ["Second, principle", 960, 400, <Box c={VIOLET} w={1000} title="2 · principle (li)" sub="their emptiness" />, { pop: true }],
        ["Third, principle and things without obstruction", 960, 520, <Box c={TEAL} w={1000} title="3 · principle and things without obstruction (lishi wu'ai)" sub="form is emptiness, emptiness is form" />, { pop: true }],
        ["Fourth, things and things without obstruction", 960, 640, <Box c={GOLD} w={1000} title="4 · things and things without obstruction (shishi wu'ai)" sub="each meeting all, none blocking" />, { pop: true }],
        ["The fourth is the one closest to total exertion", 960, 760, <K c={GOLD} s={24}>the fourth: closest to total exertion</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const MineScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["What total exertion is, for me", 960, 100, <Wd c={TEAL} s={42} serif>What total exertion is, for me</Wd>],
      ["Watching leaves move in the wind", 960, 220, <Wd c={DIM} s={24}>after anatta · ordinary moments · walking, traffic, leaves, washing a cup</Wd>],
      ["There was only the washing", 960, 300, <K c={TEAL} s={26}>only the washing</K>, { pop: true }],
      ["The whole universe appears to be completely occupied with this one event", 960, 420, <Wd c={GOLD} s={30} serif>"the whole universe appears to be completely occupied with this one event"</Wd>],
      ["I keep the word appears in that sentence on purpose", 960, 500, <K c={WARM} s={24}>"appears": kept on purpose</K>, { pop: true }],
      ["That is the difference between a taste and a theory", 960, 580, <Wd c={CHALK} s={24}>no cosmic substance in the cup: a taste, not a theory</Wd>],
      ["gives the taste its full colour", 480, 720, <Box c={GOLD} w={420} title="Huayan" sub="its full colour" />, { pop: true }],
      ["gives the taste its full colour", 960, 720, <Box c={WARM} w={420} title="Dōgen" sub="its precision: this stroke" />, { pop: true, d: 2.5 }],
      ["I find I need all three", 1440, 720, <Box c={VIOLET} w={420} title="Nāgārjuna" sub="its grammar: designated together" />, { pop: true, d: -1.5 }],
    ]} />
  </AbsoluteFill>
);

const GuardScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Where I keep a guard", 960, 100, <Wd c={WARM} s={42} serif>Where I keep a guard</Wd>],
      ["Not a claim about space", 960, 230, <SK at="Principle is not a ground" s={24}>worlds packed into a tiny place in a container</SK>],
      ["Principle is not a ground", 960, 330, <SK at="And emptiness is not a source, or a ground, of anything" s={24}>principle as a source: a cosmic mind behind the display</SK>],
      ["And emptiness is not a source, or a ground, of anything", 960, 400, <Wd c={CHALK} s={22}>principle read as emptiness: no source, no ground</Wd>],
      ["The net is not found either", 960, 490, <SK at="and a ground has come back, as a web" d={1} s={24}>the net as the reality, things as its knots</SK>],
      ["One is all is not one thing", 960, 580, <SK at="That is holism again" d={0.5} s={24}>one substance · one cosmic Whole in each moment</SK>],
      ["Intimate without merging. Distinct without walls", 960, 680, <Wd c={TEAL} s={28} serif>intimate without merging · distinct without walls</Wd>],
      ["With those guards in place", 960, 770, <Wd c={GOLD} s={24}>with these guards: among the most beautiful images ever made</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. When I wash a cup", 400, 270, <Box c={ICE} w={500} title="Experience" sub="the washing, complete · nothing met behind" />, { pop: true }],
      ["By logic. A rafter that was a rafter on its own", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="each only with the other" />, { pop: true }],
      ["By working. Nothing works the less for this", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="the building stands, the cup gets washed" />, { pop: true }],
      ["Non obstruction does not make the world thin", 960, 430, <Wd c={CHALK} s={24}>non-obstruction is why things can meet at all</Wd>],
      ["Both are the default", 960, 530, <Wd c={CHALK} s={28} serif>things in a container, or one Whole behind: the default</Wd>],
      ["The rafter holds up the roof, and the cup is clean", 960, 640, <K c={GREEN} s={24}>the rafter holds up the roof · the cup is clean</K>, { pop: true }],
      ["What fails is only a rafter, a cup, or a cosmos, standing on its own", 960, 730, <Wd c={DIM} s={22}>what fails: a rafter, a cup or a cosmos standing on its own</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("Each a genuine feature of appearing, misread as a thing");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 10 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 10</Wd>],
        ["In Part 11, I close Section 2", 960, 300, <Wd c={DIM} s={26}>next, Part 11: Where the Big Ideas Come From</Wd>],
        ["Privacy, objectivity, causal power, inside and outside", 960, 460, <Wd c={CHALK} s={30} serif>privacy · objectivity · causal power · inside and outside</Wd>],
        ["Each a genuine feature of appearing, misread as a thing", 960, 560, <K c={GOLD} s={26}>features of appearing, misread as things</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A net of jewels, each shining in all the others", "gold", <OpenScene />],
    ["First, worlds in a grain of dust", "dusk", <DustScene />],
    ["Second, the rafter", "temple", <RafterScene />],
    ["hangs a net, stretching in every direction", "net", <NetScene />],
    ["What total exertion is, for me", "cup", <MineScene />],
    ["Where I keep a guard", "ghost", <GuardScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 10 of the Dependent Arising series", "night", <CloseScene />],
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
