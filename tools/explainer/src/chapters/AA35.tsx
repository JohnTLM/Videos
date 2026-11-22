// Bonus video: Undeniably There, or Formed? (AA35). Dependent arising, a series: Part 1 (Part 2: The Illusion of the Given).
// (Script: new-documents/after-anatta/aa35-undeniably-there-or-formed-script.md, from EBooks
// Bonus Articles/undeniably-there-or-formed, draft of 2026-11-22; approved by the owner 2026-11-22.)
// Arc: Feynman's quip -> agreeing is not living in it -> three contrasts, then a test -> the apple as it feels
// (tossed, undeniably objective) -> the big "or": six streams meet and are named "apple" (not what it is, how it forms)
// -> the habit ties them into a solid apple out there and a me in here; no bare layer, no factory (both struck)
// -> nothing missing -> the mountain as it feels -> the mountain formed (valley, path, map; a name draws an edge)
// -> when no one looks: the conventional claim kept, "from its own side" struck -> one mountain, many pictures
// -> four worlds (human, bat, bee, ant), designated together; the rockfall -> which holds: experience, logic, working
// -> verdict: the default, not the truer; the floor goes, the room stays -> Part 1, next Part 2 (one bowl, four seen).
// Stance: the apple is never drawn inside a head or made by the streams; the streams are never drawn as a layer under
// the apple except to strike it; the hidden "one mountain" is drawn only dashed, to be struck; nothing is drawn as a
// ground. Cue phrases avoid hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, Hand, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // Feynman
  "If you think you understand quantum mechanics", "Richard Feynman is said to have quipped that",
  "I am John Tan, known as Thusness",
  "The same holds for dependent arising", "If you think you understand it, you don't",
  "I can agree that nothing has an essence of its own", "And still I hold the world exactly as before",
  "Solid", "Out there", "Mine", "Agreeing is not living in it",
  "So I will not argue first", "three times, as sharply as I can", "Then we can ask which one holds",
  // apple, as it feels
  "First, an apple", "I can toss it from hand to hand", "Hold it tightly", "Bite into it",
  "Nothing seems more plainly there", "It appears undeniably objective", "External", "Existing on its own",
  "It was in the bowl before I walked into the kitchen", "drawn from its own side",
  "That is innate grasping", "the apple seems to stand by itself",
  // apple, formed
  "Or, and it is a big or, look at how this apple is formed", "Six streams of consciousness",
  "named apple in the meeting",
  "Touch", "They arise as skin meets fruit",
  "Seeing", "which turns orange under candlelight", "and grey at dusk",
  "Hearing", "That sound was never sitting inside the apple",
  "Smell and taste", "only when flesh meets tongue and breath",
  "And mind", "Recognising it", "The name, apple",
  "This is not what the apple really is", "It is how it forms",
  // the habit; no layer, no factory
  "Each stream is complete in its own conditions", "None of the six ever meets an apple standing on its own",
  "What ties them into one solid thing out there", "with a solid me in here tossing it", "is formation running on habit",
  "And the streams are not a bare layer underneath", "The coolness, the red and the crunch are designated too",
  "Nor are the six streams a factory in here", "Consciousness is as dependently arisen",
  "The apple is not found apart from the streams", "And it is not made by them either",
  "And even seen this way, nothing is missing", "The apple can still be tossed, eaten, and nourish me",
  "Seeing how it forms takes nothing away from it",
  // mountain, as it feels
  "Second, a mountain", "It is massive and still", "It was there long before me", "It does not move when I look away",
  "It stops the climber", "surely it is the mountain",
  // mountain, formed
  "Or, and again it is a big or, look at how this mountain is formed", "From the valley", "On the path",
  "On the map", "And the name mountain draws an edge where nature drew none", "Where does the mountain stop",
  "Look for the mountain among the rocks", "It is not among them", "And it is not apart from them",
  // no one looking
  "When no one is looking, is it there", "Two claims sound alike, and are not",
  "It is still there when I look away and look back", "That is true", "It is checked the ordinary way",
  "It exists from its own side, whether or not anything ever meets it", "And nothing has earned it",
  "It slips in because the first claim works so reliably", "But being reliable is not being independent",
  "The mountain still stops the climber, and still holds up the road",
  // one mountain, many pictures
  "Third, a bat, a bee and an ant", "Surely, though, the mountain is one", "Each sees it in its own way",
  "But what they see is one mountain, really there", "One world, many pictures of it",
  // four worlds
  "Or, and it is the biggest or", "The answers will not match, because the worlds do not match",
  "I see a bounded shape against the sky", "A bat, finding its way by echo", "A bee, seeing in ultraviolet",
  "An ant takes a day to cross one boulder", "Never a mountain",
  "This is not four creatures looking at one finished mountain", "A different body singles out a different world",
  "The mountain, the one who meets it, and the channel of meeting are designated together",
  "None of them is the bedrock under the others",
  "A rockfall can still crush the ant", "gravity here and scent there",
  // which holds
  "Two ways of seeing, three times over", "Which carries more valid truth", "I test them by experience",
  "Then by logic", "Then I ask which one explains how things work",
  // experience
  "By experience", "What is actually met", "At no point do I meet an apple standing on its own behind them",
  "apple is never found", "It is supplied", "is real, as a feeling",
  "But a feeling of solidity is not a finding", "The same goes for the mountain",
  // logic
  "By logic", "An apple with its own fixed nature could not ripen", "A fixed nature does not change with conditions",
  "A mountain with edges drawn from its own side", "They meet none of them",
  "And the one hidden mountain behind all four creatures cannot be described at all", "If it has features",
  "If it has no features", "undermines itself at once",
  "Even picking it out needs contrast, context and a name",
  // working
  "By working", "But what is fixed cannot interact", "And what cannot interact cannot work",
  "The second view explains the working fully", "An apple is tossed and eaten", "A mountain holds up a road",
  "A rockfall crushes an ant", "These are dependently arisen patterns",
  "Working never needed an essence",
  // verdict
  "So the first view is not the truer one", "It is the default one", "It carries the weight of habit, not of evidence",
  "The second carries both experience and logic", "This does not make the everyday claims false",
  "The apple is an apple", "And I still say so", "What fails is only the extra claim", "from its own side",
  "Nothing that works is lost", "Only a floor that was never there is gone",
  // next
  "of a series on dependent arising", "The Illusion of the Given",
  "It starts from one bowl of liquid", "A human sees water", "A hungry ghost sees pus", "A fish sees its home",
  "A god sees nectar",
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
  apple: { a: "rgba(150,60,70,0.45)", b: "rgba(80,60,150,0.4)", c: "rgba(150,110,50,0.3)" },
  hill: { a: "rgba(40,80,120,0.5)", b: "rgba(90,70,150,0.4)", c: "rgba(60,120,90,0.32)" },
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
/** A chip struck through at a cue (plus an optional delay). */
const SK: React.FC<{ c?: string; s?: number; at: string; d?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + d} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={34} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
  </div>
);
const mix = (a: number[], b: number[], k: number) => a.map((v, i) => Math.round(v + (b[i] - v) * k));

// ---------------------------------------------------------------- drawings
/** A simple apple; `col` sets its colour, `dashed` makes it an assumed outline. */
const Apple: React.FC<{ size?: number; col?: string; dashed?: boolean }> = ({ size = 160, col = ROSE, dashed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: dashed ? undefined : `drop-shadow(0 0 12px ${col})` }}>
    <path d="M50 30 C35 18 12 25 14 52 C16 78 34 92 50 84 C66 92 84 78 86 52 C88 25 65 18 50 30 Z"
      fill={dashed ? "none" : `${col}55`} stroke={dashed ? DIM : col} strokeWidth={4} strokeDasharray={dashed ? "6 6" : undefined} />
    <path d="M50 30 L53 12" stroke={dashed ? DIM : GOLD} strokeWidth={4} strokeLinecap="round" strokeDasharray={dashed ? "4 4" : undefined} />
    {!dashed && <path d="M54 18 Q66 8 74 16 Q64 24 54 18 Z" fill="rgba(143,212,154,0.4)" stroke={GREEN} strokeWidth={2.5} />}
  </svg>
);

/** A mountain outline drawn in; `dashed` for the assumed "one mountain". */
const Mountain: React.FC<{ p: number; w?: number; col?: string; dashed?: boolean }> = ({ p, w = 700, col = ICE, dashed }) => (
  <svg width={w} height={w * 0.5} viewBox="0 0 700 350" style={{ overflow: "visible" }}>
    <path d="M20 330 L250 90 L330 170 L430 40 L680 330 Z" fill={dashed ? "none" : `rgba(169,221,242,${0.12 * p})`}
      stroke="none" />
    <DrawPath d="M20 330 L250 90 L330 170 L430 40 L680 330" p={p} color={dashed ? DIM : col} width={5} len={1300} />
    {!dashed && <DrawPath d="M390 92 L430 40 L470 92 L450 80 L430 96 L410 80 Z" p={ramp(p, 0.6, 0.4)} color={CHALK} width={3} len={300} />}
    {dashed && <path d="M20 330 L250 90 L330 170 L430 40 L680 330" fill="none" stroke={DIM} strokeWidth={5} strokeDasharray="10 10" opacity={p} />}
  </svg>
);

/** A bowl of liquid. */
const Bowl: React.FC<{ p: number }> = ({ p }) => (
  <svg width={320} height={180} viewBox="0 0 320 180" style={{ overflow: "visible" }}>
    <DrawPath d="M20 50 Q160 200 300 50" p={p} color={CHALK} width={5} len={500} />
    <DrawPath d="M20 50 L300 50" p={p} color={DIM} width={3} len={300} />
    <DrawPath d="M50 70 Q160 90 270 70" p={ramp(p, 0.5, 0.5)} color={ICE} width={4} len={300} />
  </svg>
);

/** Echo arcs (the bat). */
const Echo: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  return (
    <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: "visible", opacity: p }}>
      {[0, 1, 2, 3].map((i) => {
        const k = ((t * 0.7 + i * 0.25) % 1);
        return <path key={i} d={`M${40 + k * 160} ${100 - 30 - k * 60} Q${70 + k * 170} 100 ${40 + k * 160} ${100 + 30 + k * 60}`}
          fill="none" stroke={VIOLET} strokeWidth={4} opacity={1 - k} />;
      })}
      <path d="M20 100 L36 88 L44 100 L36 112 Z" fill={VIOLET} />
    </svg>
  );
};

/** Ultraviolet dots and flowers (the bee). */
const Ultra: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  return (
    <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: "visible", opacity: p }}>
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} cx={20 + ((i * 53) % 200)} cy={20 + ((i * 37) % 160)} r={6 + 3 * Math.sin(t * 2 + i)} fill={i % 3 ? VIOLET : GOLD} opacity={0.7} />
      ))}
      {[60, 170].map((x) => (
        <g key={x}>{Array.from({ length: 5 }).map((_, j) => (
          <ellipse key={j} cx={x} cy={110} rx={8} ry={20} transform={`rotate(${j * 72} ${x} 128)`} fill="rgba(155,123,255,0.35)" stroke={VIOLET} strokeWidth={2} />
        ))}</g>
      ))}
    </svg>
  );
};

/** Grains and a scent trail (the ant). */
const Grains: React.FC<{ p: number }> = ({ p }) => (
  <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: "visible", opacity: p }}>
    {Array.from({ length: 22 }).map((_, i) => (
      <ellipse key={i} cx={15 + ((i * 41) % 210)} cy={120 + ((i * 17) % 60)} rx={9} ry={6} fill="rgba(217,135,108,0.4)" stroke={WARM} strokeWidth={2} />
    ))}
    <DrawPath d="M10 90 Q60 60 110 90 T230 80" p={p} color={GREEN} width={3} len={300} />
  </svg>
);

/** A small eye. */
const Eye: React.FC<{ col?: string }> = ({ col = CHALK }) => (
  <svg width={70} height={40} viewBox="0 0 70 40"><path d="M4 20 Q35 -6 66 20 Q35 46 4 20 Z" fill="none" stroke={col} strokeWidth={3} /><circle cx={35} cy={20} r={8} fill={col} /></svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["If you think you understand quantum mechanics", 960, 280, <Wd c={CHALK} s={46} serif>"If you think you understand quantum mechanics,</Wd>],
      ["If you think you understand quantum mechanics", 960, 370, <Wd c={CHALK} s={46} serif>you don't understand quantum mechanics."</Wd>, { d: 2 }],
      ["Richard Feynman is said to have quipped that", 960, 480, <Wd c={DIM} s={30}>Richard Feynman</Wd>],
      ["I am John Tan, known as Thusness", 960, 720, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.5 }],
    ]} />
  </AbsoluteFill>
);

const AgreeScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The same holds for dependent arising", 960, 130, <Wd c={GOLD} s={44} serif>Dependent arising</Wd>],
      ["If you think you understand it, you don't", 960, 210, <Wd c={CHALK} s={30}>if you think you understand it, you don't</Wd>],
      ["I can agree that nothing has an essence of its own", 560, 360, <Box c={TEAL} w={560} title="I agree:" sub="nothing has an essence of its own" />, { pop: true, until: "So I will not argue first" }],
      ["And still I hold the world exactly as before", 1360, 330, <Wd c={CHALK} s={32}>and still I hold the world…</Wd>, { until: "So I will not argue first" }],
      ["Solid", 1220, 420, <K c={ROSE}>solid</K>, { pop: true, until: "So I will not argue first" }],
      ["Out there", 1380, 420, <K c={ROSE}>out there</K>, { pop: true, until: "So I will not argue first" }],
      ["Mine", 1530, 420, <K c={ROSE}>mine</K>, { pop: true, until: "So I will not argue first" }],
      ["Agreeing is not living in it", 960, 560, <Wd c={GOLD} s={44} serif>Agreeing is not living in it.</Wd>, { until: "So I will not argue first" }],
      ["So I will not argue first", 960, 260, <Wd c={CHALK} s={36} serif>No argument first</Wd>],
      ["three times, as sharply as I can", 500, 450, <Box c={ROSE} w={360} title="an apple" />, { pop: true }],
      ["three times, as sharply as I can", 960, 450, <Box c={ICE} w={360} title="a mountain" />, { pop: true, d: 0.6 }],
      ["three times, as sharply as I can", 1420, 450, <Box c={VIOLET} w={360} title="a bat, a bee, an ant" />, { pop: true, d: 1.2 }],
      ["Then we can ask which one holds", 960, 650, <Wd c={GOLD} s={40} serif>then: which one holds?</Wd>],
    ]} />
  </AbsoluteFill>
);

const AppleFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const toss = c("I can toss it from hand to hand");
  const k = ramp(t, toss, 1.4);
  const bowl = c("It was in the bowl before I walked into the kitchen");
  const x = t < bowl ? 560 + k * 400 : 760;
  const y = t < bowl ? 470 - Math.sin(k * Math.PI) * 170 : 470;
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, an apple", 960, 110, <Wd c={ROSE} s={48} serif>1 · An apple, as it feels</Wd>],
      ]} />
      <At x={x} y={y} r={t < bowl ? k * 300 : 0} o={ramp(t, c("First, an apple"), 0.6)}><Apple /></At>
      <At x={760} y={560} o={ramp(t, bowl, 0.6)}><Bowl p={ramp(t, bowl, 1.2)} /></At>
      <Items items={[
        ["I can toss it from hand to hand", 400, 640, <K c={CHALK} s={26}>tossed</K>, { pop: true }],
        ["Hold it tightly", 400, 710, <K c={CHALK} s={26}>held tightly</K>, { pop: true }],
        ["Bite into it", 400, 780, <K c={CHALK} s={26}>bitten</K>, { pop: true }],
        ["It appears undeniably objective", 1380, 250, <Wd c={GOLD} s={40} serif>undeniably objective</Wd>],
        ["External", 1380, 340, <K c={ROSE}>external · out there</K>, { pop: true }],
        ["Existing on its own", 1380, 420, <K c={ROSE}>existing on its own</K>, { pop: true }],
        ["drawn from its own side", 1380, 500, <K c={ROSE}>its weight, hardness, edge: from its own side</K>, { pop: true }],
        ["That is innate grasping", 1380, 640, <Box c={WARM} w={520} title="innate grasping" sub="the naming vanishes into what appears" />, { pop: true }],
        ["the apple seems to stand by itself", 1380, 790, <Wd c={DIM} s={28}>it seems to stand by itself</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const STREAMS: [string, string, string, number, number][] = [
  ["Touch", "touch · coolness, weight", TEAL, 420, 300],
  ["Seeing", "seeing · red", ROSE, 1500, 300],
  ["Hearing", "hearing · the crunch", VIOLET, 360, 560],
  ["Smell and taste", "smell · taste", GOLD, 1560, 560],
  ["And mind", "mind · the name", CHALK, 960, 760],
];

const StreamsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s0 = c("Or, and it is a big or, look at how this apple is formed");
  const named = c("named apple in the meeting");
  // the red shifts with the light
  const k1 = ramp(t, c("which turns orange under candlelight"), 1.2), k2 = ramp(t, c("and grey at dusk"), 1.2);
  const rgb = mix(mix([255, 143, 163], [255, 170, 90], k1), [150, 150, 160], k2);
  const col = `rgb(${rgb.join(",")})`;
  const reset = ramp(t, c("Hearing"), 1);
  const appleCol = reset > 0 ? `rgb(${mix(rgb, [255, 143, 163], reset).join(",")})` : col;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and it is a big or, look at how this apple is formed", 960, 100, <Wd c={GOLD} s={46} serif>Or: how this apple is formed</Wd>],
        ["Six streams of consciousness", 960, 170, <Wd c={CHALK} s={28}>six streams, each dependently originated, meeting</Wd>],
      ]} />
      <Svg>
        {STREAMS.map(([cue, , clr, x, y]) => (
          <line key={cue} x1={x} y1={y} x2={960} y2={450} stroke={clr} strokeWidth={3}
            strokeDasharray="8 8" opacity={ramp(t, c(cue), 0.6) * 0.8} />
        ))}
      </Svg>
      <At x={960} y={450} o={ramp(t, named, 0.6)}><Apple size={170} col={appleCol} /></At>
      <Items items={[
        ["named apple in the meeting", 960, 580, <Wd c={GOLD} s={30} serif>"apple", named in the meeting</Wd>, { d: 0.6, until: "This is not what the apple really is" }],
        ...STREAMS.map(([cue, label, clr, x, y]) => [cue, x, y, <K c={clr} s={28}>{label}</K>, { pop: true }] as It),
        ["They arise as skin meets fruit", 420, 370, <Wd c={DIM} s={22}>arises as skin meets fruit</Wd>],
        ["which turns orange under candlelight", 1500, 370, <Wd c={DIM} s={22}>orange by candlelight · grey at dusk</Wd>],
        ["That sound was never sitting inside the apple", 360, 630, <Wd c={DIM} s={22}>never sitting inside the apple</Wd>],
        ["only when flesh meets tongue and breath", 1560, 630, <Wd c={DIM} s={22}>only as flesh meets tongue</Wd>],
        ["This is not what the apple really is", 700, 580, <SK c={DIM} s={28} at="It is how it forms">what it really is</SK>],
        ["It is how it forms", 1220, 580, <K c={GOLD} s={30}>how it forms</K>, { pop: true }],
      ]} />
      <At x={960} y={450} o={ramp(t, s0, 0.3) * 0} ><div /></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tie = c("What ties them into one solid thing out there");
  const layer = c("And the streams are not a bare layer underneath");
  const fac = c("Nor are the six streams a factory in here");
  const part1 = t < layer;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Each stream is complete in its own conditions", 960, 110, <Wd c={CHALK} s={38} serif>each stream complete in its own conditions</Wd>, { until: "And the streams are not a bare layer underneath" }],
        ["None of the six ever meets an apple standing on its own", 960, 190, <Wd c={DIM} s={28}>none of the six meets an apple on its own</Wd>, { until: "And the streams are not a bare layer underneath" }],
      ]} />
      {part1 && (
        <>
          <At x={1320} y={430} o={ramp(t, tie, 0.6)}><Apple size={190} /></At>
          <At x={1320} y={580} o={ramp(t, tie, 0.6)}><K c={ROSE} s={26}>a solid apple, out there</K></At>
          <At x={600} y={430} o={ramp(t, c("with a solid me in here tossing it"), 0.6)}><Hand size={150} /></At>
          <At x={600} y={580} o={ramp(t, c("with a solid me in here tossing it"), 0.6)}><K c={ROSE} s={26}>a solid me, in here</K></At>
          <Items items={[
            ["is formation running on habit", 960, 720, <Box c={WARM} w={700} title="formation running on habit" sub="so quick and smooth it goes unnoticed" />, { pop: true }],
          ]} />
        </>
      )}
      <Items items={[
        ["And the streams are not a bare layer underneath", 960, 380, <SK c={DIM} s={30} at="The coolness, the red and the crunch are designated too">a bare layer underneath, named later</SK>, { until: "Nor are the six streams a factory in here" }],
        ["The coolness, the red and the crunch are designated too", 960, 480, <K c={GOLD} s={28}>coolness, red, crunch: designated too</K>, { until: "Nor are the six streams a factory in here" }],
        ["Nor are the six streams a factory in here", 960, 330, <SK c={DIM} s={32} at="Consciousness is as dependently arisen">a factory in here, making the apple</SK>],
        ["Consciousness is as dependently arisen", 960, 450, <K c={TEAL} s={28}>consciousness: as dependently arisen, as unfindable</K>],
        ["The apple is not found apart from the streams", 960, 580, <Wd c={CHALK} s={34} serif>not found apart from the streams</Wd>],
        ["And it is not made by them either", 960, 660, <Wd c={GOLD} s={34} serif>and not made by them</Wd>],
      ]} />
      <At x={0} y={0} o={fac * 0}><div /></At>
    </AbsoluteFill>
  );
};

const MissingAppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("And even seen this way, nothing is missing");
  const k = ramp(t, s + 1, 1.4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["And even seen this way, nothing is missing", 960, 160, <Wd c={GOLD} s={48} serif>Nothing is missing.</Wd>],
      ]} />
      <At x={560 + k * 800} y={480 - Math.sin(k * Math.PI) * 180} r={k * 360} o={ramp(t, s, 0.5)}><Apple /></At>
      <Items items={[
        ["The apple can still be tossed, eaten, and nourish me", 660, 700, <K c={GREEN}>tossed</K>, { pop: true }],
        ["The apple can still be tossed, eaten, and nourish me", 960, 700, <K c={GREEN}>eaten</K>, { pop: true, d: 0.6 }],
        ["The apple can still be tossed, eaten, and nourish me", 1260, 700, <K c={GREEN}>nourishing</K>, { pop: true, d: 1.2 }],
        ["Seeing how it forms takes nothing away from it", 960, 800, <Wd c={CHALK} s={30}>seeing how it forms takes nothing away</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MountainFeltScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Second, a mountain");
  return (
    <AbsoluteFill>
      <Items items={[["Second, a mountain", 960, 110, <Wd c={ICE} s={48} serif>2 · A mountain, as it feels</Wd>]]} />
      <At x={960} y={430}><Mountain p={ramp(t, s, 2)} w={760} /></At>
      <Items items={[
        ["It is massive and still", 400, 640, <K c={CHALK} s={26}>massive and still</K>, { pop: true }],
        ["It was there long before me", 760, 640, <K c={CHALK} s={26}>before me, after me</K>, { pop: true }],
        ["It does not move when I look away", 1160, 640, <K c={CHALK} s={26}>unmoved when I look away</K>, { pop: true }],
        ["It stops the climber", 1530, 640, <K c={CHALK} s={26}>it stops the climber</K>, { pop: true }],
        ["surely it is the mountain", 960, 770, <Wd c={GOLD} s={38} serif>undeniably objective, if anything is</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MountainFormedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const v = c("From the valley"), p = c("On the path"), m = c("On the map");
  const edge = c("And the name mountain draws an edge where nature drew none");
  const look = c("Look for the mountain among the rocks");
  const early = t < look;
  return (
    <AbsoluteFill>
      <Items items={[["Or, and again it is a big or, look at how this mountain is formed", 960, 100, <Wd c={GOLD} s={44} serif>Or: how this mountain is formed</Wd>]]} />
      {early && (
        <>
          <At x={420} y={330} o={ramp(t, v, 0.6)}><svg width={360} height={180} viewBox="0 0 700 350"><path d="M20 330 L250 90 L330 170 L430 40 L680 330 Z" fill="rgba(110,150,220,0.55)" /></svg></At>
          <At x={420} y={460} o={ramp(t, v, 0.6)}><K c={ICE} s={24}>a blue shape · from the valley</K></At>
          <At x={960} y={330} o={ramp(t, p, 0.6)}><svg width={300} height={180} viewBox="0 0 300 180">{Array.from({ length: 16 }).map((_, i) => <circle key={i} cx={20 + (i * 37) % 260} cy={120 + (i * 13) % 50} r={7} fill="rgba(236,231,218,0.5)" />)}<path d="M30 110 L270 40" stroke={DIM} strokeWidth={4} strokeDasharray="10 8" /></svg></At>
          <At x={960} y={460} o={ramp(t, p, 0.6)}><K c={ICE} s={24}>aching legs, thin air, scree · on the path</K></At>
          <At x={1500} y={330} o={ramp(t, m, 0.6)}><svg width={300} height={180} viewBox="0 0 300 180">{[70, 55, 40, 25, 12].map((r, i) => <ellipse key={i} cx={150} cy={90} rx={r * 2} ry={r} fill="none" stroke={GOLD} strokeWidth={2} />)}</svg></At>
          <At x={1500} y={460} o={ramp(t, m, 0.6)}><K c={ICE} s={24}>contour lines, metres · on the map</K></At>
          <At x={960} y={640} o={ramp(t, edge, 0.6)}><svg width={1100} height={80} viewBox="0 0 1100 80"><path d="M0 60 Q300 60 520 20 Q760 -10 1100 60" fill="none" stroke={CHALK} strokeWidth={4} /><line x1={180} y1={0} x2={180} y2={80} stroke={WARM} strokeWidth={3} strokeDasharray="6 6" /></svg></At>
          <Items items={[
            ["And the name mountain draws an edge where nature drew none", 960, 740, <Wd c={CHALK} s={30}>the name draws an edge where nature drew none</Wd>],
            ["Where does the mountain stop", 600, 560, <K c={WARM} s={24}>where does it stop?</K>, { pop: true }],
          ]} />
        </>
      )}
      <Items items={[
        ["Look for the mountain among the rocks", 960, 260, <Wd c={CHALK} s={34} serif>Look for the mountain among…</Wd>],
        ["Look for the mountain among the rocks", 520, 380, <K c={DIM} s={26}>rocks</K>, { pop: true, d: 0.5 }],
        ["Look for the mountain among the rocks", 820, 380, <K c={DIM} s={26}>soil</K>, { pop: true, d: 1 }],
        ["Look for the mountain among the rocks", 1100, 380, <K c={DIM} s={26}>slopes</K>, { pop: true, d: 1.5 }],
        ["Look for the mountain among the rocks", 1400, 380, <K c={DIM} s={26}>tree line</K>, { pop: true, d: 2 }],
        ["It is not among them", 960, 540, <Wd c={GOLD} s={40} serif>Not among them.</Wd>],
        ["And it is not apart from them", 960, 630, <Wd c={GOLD} s={40} serif>Not apart from them.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LookingScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["When no one is looking, is it there", 960, 110, <Wd c={CHALK} s={44} serif>When no one is looking, is it there?</Wd>],
      ["Two claims sound alike, and are not", 960, 190, <Wd c={DIM} s={28}>two claims, alike in sound</Wd>],
      ["It is still there when I look away and look back", 520, 360, <Box c={GREEN} w={620} title="still there when I look back" />, { pop: true }],
      ["That is true", 520, 470, <K c={GREEN} s={28}>true</K>, { pop: true }],
      ["It is checked the ordinary way", 520, 550, <Wd c={DIM} s={24}>look again · others see it · the road is there</Wd>],
      ["It exists from its own side, whether or not anything ever meets it", 1400, 360, <div style={{ position: "relative" }}><Box c={WARM} w={620} title="there from its own side" /></div>, { pop: true }],
      ["And nothing has earned it", 1400, 470, <SK c={WARM} s={28} at="And nothing has earned it" d={0.8}>never earned</SK>],
      ["It slips in because the first claim works so reliably", 1400, 550, <Wd c={DIM} s={24}>it slips in on the first claim's reliability</Wd>],
      ["But being reliable is not being independent", 960, 680, <Wd c={GOLD} s={42} serif>Reliable is not independent.</Wd>],
      ["The mountain still stops the climber, and still holds up the road", 960, 790, <K c={GREEN} s={28}>nothing missing: it stops the climber, holds up the road</K>],
    ]} />
  </AbsoluteFill>
);

const OneMountainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Third, a bat, a bee and an ant");
  const who: [string, string][] = [["human", CHALK], ["bat", VIOLET], ["bee", GOLD], ["ant", WARM]];
  return (
    <AbsoluteFill>
      <Items items={[["Third, a bat, a bee and an ant", 960, 110, <Wd c={VIOLET} s={48} serif>3 · A bat, a bee, an ant</Wd>]]} />
      <At x={960} y={380} o={ramp(t, c("Surely, though, the mountain is one"), 0.6)}><Mountain p={ramp(t, c("Surely, though, the mountain is one"), 1.5)} w={560} /></At>
      {who.map(([w, col], i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 360} y={640} o={ramp(t, c("Each sees it in its own way") + i * 0.4, 0.5)}><Eye col={col} /></At>
          <At x={420 + i * 360} y={700} o={ramp(t, c("Each sees it in its own way") + i * 0.4, 0.5)}><K c={col} s={24}>{w}</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["But what they see is one mountain, really there", 960, 200, <Wd c={CHALK} s={30}>one mountain, really there · only the seeing differs</Wd>],
        ["One world, many pictures of it", 960, 800, <Wd c={GOLD} s={40} serif>one world, many pictures?</Wd>],
      ]} />
      <At x={0} y={0} o={s * 0}><div /></At>
    </AbsoluteFill>
  );
};

const FourWorldsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const not4 = c("This is not four creatures looking at one finished mountain");
  const early = t < not4;
  const panel = (x: number, cue: string, label: string, col: string, node: React.ReactNode) => (
    <React.Fragment key={label}>
      <At x={x} y={420} o={ramp(t, c(cue), 0.6)}>
        <div style={{ width: 360, height: 300, borderRadius: 18, border: `3px solid ${col}`, background: "rgba(10,12,30,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center" }}>{node}</div>
      </At>
      <At x={x} y={610} o={ramp(t, c(cue), 0.6)}><K c={col} s={24}>{label}</K></At>
    </React.Fragment>
  );
  return (
    <AbsoluteFill>
      <Items items={[
        ["Or, and it is the biggest or", 960, 100, <Wd c={GOLD} s={46} serif>Or: the worlds do not match</Wd>, { until: "This is not four creatures looking at one finished mountain" }],
      ]} />
      {early && (
        <>
          {panel(300, "I see a bounded shape against the sky", "human · a bounded shape", CHALK, <Mountain p={1} w={300} />)}
          {panel(720, "A bat, finding its way by echo", "bat · echo, no clean edge", VIOLET, <Echo p={1} />)}
          {panel(1140, "A bee, seeing in ultraviolet", "bee · hardly one thing", GOLD, <Ultra p={1} />)}
          {panel(1560, "An ant takes a day to cross one boulder", "ant · grain, warmth, scent", WARM, <Grains p={1} />)}
          <Items items={[["Never a mountain", 1560, 700, <Wd c={WARM} s={30} serif>never a mountain</Wd>]]} />
        </>
      )}
      <Items items={[
        ["This is not four creatures looking at one finished mountain", 960, 190, <div style={{ position: "relative" }}><Wd c={DIM} s={30}>four views of one finished mountain</Wd><Strike at={not4 + 1.5} /></div>],
        ["This is not four creatures looking at one finished mountain", 960, 330, <div style={{ opacity: 0.6 }}><Mountain p={1} w={420} dashed /></div>, { until: "A different body singles out a different world", o: 1 }],
        ["A different body singles out a different world", 960, 330, <Wd c={GOLD} s={42} serif>A different body singles out a different world.</Wd>],
        ["The mountain, the one who meets it, and the channel of meeting are designated together", 560, 470, <K c={ICE} s={26}>the mountain</K>, { pop: true }],
        ["The mountain, the one who meets it, and the channel of meeting are designated together", 960, 470, <K c={CHALK} s={26}>the one who meets it</K>, { pop: true, d: 1 }],
        ["The mountain, the one who meets it, and the channel of meeting are designated together", 1360, 470, <K c={TEAL} s={26}>the channel</K>, { pop: true, d: 2 }],
        ["The mountain, the one who meets it, and the channel of meeting are designated together", 960, 560, <Wd c={CHALK} s={28}>designated together</Wd>, { d: 3 }],
        ["None of them is the bedrock under the others", 960, 630, <Wd c={DIM} s={28}>none is the bedrock under the others</Wd>],
        ["A rockfall can still crush the ant", 960, 740, <K c={GREEN} s={28}>nothing missing: a rockfall still crushes the ant</K>],
        ["gravity here and scent there", 960, 810, <Wd c={DIM} s={24}>contact along its channels: gravity, scent</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

/** A balance beam; `tilt` -1..1 (positive: right side down). */
const Scale: React.FC<{ tilt: number; left: string; right: string; lc: string; rc: string }> = ({ tilt, left, right, lc, rc }) => {
  const a = tilt * 12;
  return (
    <div style={{ position: "relative", width: 1000, height: 360 }}>
      <svg width={1000} height={360} viewBox="0 0 1000 360" style={{ position: "absolute", overflow: "visible" }}>
        <path d="M500 330 L460 360 L540 360 Z" fill={DIM} />
        <line x1={500} y1={330} x2={500} y2={120} stroke={DIM} strokeWidth={6} />
        <g transform={`rotate(${a} 500 120)`}>
          <line x1={140} y1={120} x2={860} y2={120} stroke={CHALK} strokeWidth={6} />
          <line x1={140} y1={120} x2={140} y2={200} stroke={DIM} strokeWidth={3} />
          <line x1={860} y1={120} x2={860} y2={200} stroke={DIM} strokeWidth={3} />
          <path d="M60 200 Q140 250 220 200 Z" fill="none" stroke={lc} strokeWidth={4} />
          <path d="M780 200 Q860 250 940 200 Z" fill="none" stroke={rc} strokeWidth={4} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: 40, top: 270 - a * 6, width: 200, textAlign: "center" }}><Wd c={lc} s={26}>{left}</Wd></div>
      <div style={{ position: "absolute", left: 760, top: 270 + a * 6, width: 200, textAlign: "center" }}><Wd c={rc} s={26}>{right}</Wd></div>
    </div>
  );
};

const WhichScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Two ways of seeing, three times over", 960, 110, <Wd c={CHALK} s={40} serif>Two ways of seeing, three times over</Wd>],
        ["Which carries more valid truth", 960, 190, <Wd c={GOLD} s={46} serif>Which carries more valid truth?</Wd>],
      ]} />
      <At x={960} y={470} o={ramp(t, c("Which carries more valid truth"), 0.6)}>
        <Scale tilt={0} left="undeniably there" right="formed" lc={ROSE} rc={GOLD} />
      </At>
      <Items items={[
        ["I test them by experience", 560, 760, <K c={TEAL} s={30}>1 · experience</K>, { pop: true }],
        ["Then by logic", 960, 760, <K c={VIOLET} s={30}>2 · logic</K>, { pop: true }],
        ["Then I ask which one explains how things work", 1360, 760, <K c={GREEN} s={30}>3 · working</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ExperienceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const met = c("What is actually met");
  const items: [string, string][] = [["coolness", TEAL], ["red", ROSE], ["weight", TEAL], ["the crunch", VIOLET], ["the name", CHALK]];
  return (
    <AbsoluteFill>
      <Items items={[["By experience", 960, 110, <Wd c={TEAL} s={48} serif>1 · By experience</Wd>]]} />
      {items.map(([w, col], i) => (
        <At key={w} x={420 + i * 270} y={300} o={ramp(t, met + 0.6 + i * 0.5, 0.4)} s={pop(t, 30, met + 0.6 + i * 0.5)}><K c={col} s={28}>{w}</K></At>
      ))}
      <At x={960} y={470} o={ramp(t, c("At no point do I meet an apple standing on its own behind them"), 0.6)}>
        <div style={{ position: "relative" }}><Apple size={150} dashed /><Strike at={c("apple is never found")} /></div>
      </At>
      <Items items={[
        ["apple is never found", 960, 600, <Wd c={CHALK} s={34} serif>the self-standing apple: never found</Wd>],
        ["It is supplied", 960, 670, <K c={WARM} s={30}>supplied</K>, { pop: true }],
        ["is real, as a feeling", 600, 770, <K c={ROSE} s={26}>real, as a feeling</K>],
        ["But a feeling of solidity is not a finding", 1320, 770, <K c={GOLD} s={26}>not a finding</K>, { pop: true }],
        ["The same goes for the mountain", 960, 840, <Wd c={DIM} s={24}>the same for the mountain: the view, the climb, the map</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["By logic", 960, 100, <Wd c={VIOLET} s={48} serif>2 · By logic</Wd>],
      ["An apple with its own fixed nature could not ripen", 520, 260, <Box c={ROSE} w={700} title="a fixed apple could not ripen" sub="bruise, or turn orange in candlelight" />, { pop: true }],
      ["A fixed nature does not change with conditions", 520, 370, <Wd c={DIM} s={22}>a fixed nature does not change with conditions</Wd>],
      ["A mountain with edges drawn from its own side", 1400, 260, <Box c={ICE} w={700} title="edges from its own side" sub="would show to the bat and the ant" />, { pop: true }],
      ["They meet none of them", 1400, 370, <K c={WARM} s={24}>they meet none</K>, { pop: true }],
      ["And the one hidden mountain behind all four creatures cannot be described at all", 960, 480, <Wd c={CHALK} s={32} serif>one hidden mountain behind all four?</Wd>],
      ["If it has features", 620, 570, <K c={DIM} s={24}>features: then why do they not meet them?</K>],
      ["If it has no features", 1300, 570, <K c={DIM} s={24}>no features: then not what anyone meets</K>],
      ["undermines itself at once", 960, 680, <Box c={VIOLET} w={1100} title="self-standing undermines itself" />, { pop: true }],
      ["Even picking it out needs contrast, context and a name", 960, 790, <Wd c={GOLD} s={28}>picking it out needs contrast, context and a name</Wd>],
    ]} />
  </AbsoluteFill>
);

const WorkingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const second = c("The second view explains the working fully");
  return (
    <AbsoluteFill>
      <Items items={[
        ["By working", 960, 100, <Wd c={GREEN} s={48} serif>3 · By working</Wd>],
        ["But what is fixed cannot interact", 960, 230, <div style={{ position: "relative" }}><Box c={DIM} w={560} title="fixed: cannot interact" /><Strike at={c("And what cannot interact cannot work") + 1} /></div>, { pop: true, until: "The second view explains the working fully" }],
        ["And what cannot interact cannot work", 960, 340, <Wd c={DIM} s={26}>cannot interact, cannot work</Wd>, { until: "The second view explains the working fully" }],
        ["An apple is tossed and eaten", 480, 470, <K c={ROSE} s={28}>an apple, tossed and eaten</K>, { pop: true }],
        ["A mountain holds up a road", 960, 470, <K c={ICE} s={28}>a mountain holds up a road</K>, { pop: true }],
        ["A rockfall crushes an ant", 1440, 470, <K c={WARM} s={28}>a rockfall crushes an ant</K>, { pop: true }],
        ["These are dependently arisen patterns", 960, 600, <Wd c={CHALK} s={30}>dependently arisen patterns, meeting other patterns reliably</Wd>],
        ["Working never needed an essence", 960, 720, <Wd c={GOLD} s={46} serif>Working never needed an essence.</Wd>],
      ]} />
      <At x={960} y={250} o={ramp(t, second, 0.5)}><Wd c={GREEN} s={36} serif>the second view explains it fully</Wd></At>
    </AbsoluteFill>
  );
};

const VerdictScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tip = ramp(t, c("The second carries both experience and logic"), 1.4);
  const floor = c("Only a floor that was never there is gone");
  const late = t >= c("This does not make the everyday claims false");
  return (
    <AbsoluteFill>
      {!late && (
        <>
          <Items items={[
            ["So the first view is not the truer one", 960, 110, <Wd c={CHALK} s={40} serif>The first view is not the truer one.</Wd>],
            ["It is the default one", 960, 190, <K c={ROSE} s={30}>the default one</K>, { pop: true }],
            ["It carries the weight of habit, not of evidence", 960, 260, <Wd c={DIM} s={26}>the weight of habit, not of evidence</Wd>],
          ]} />
          <At x={960} y={540} o={ramp(t, c("So the first view is not the truer one"), 0.6)}>
            <Scale tilt={tip} left="habit" right="experience + logic" lc={ROSE} rc={GOLD} />
          </At>
        </>
      )}
      <Items items={[
        ["This does not make the everyday claims false", 960, 120, <Wd c={CHALK} s={36} serif>Everyday claims stay true</Wd>],
        ["The apple is an apple", 960, 200, <Wd c={DIM} s={26}>the apple is an apple · the mountain is there when I look back</Wd>],
        ["What fails is only the extra claim", 960, 280, <Wd c={CHALK} s={30}>what fails is only the extra claim:</Wd>],
        ["from its own side", 960, 350, <SK c={WARM} s={32} at="from its own side" d={1.2}>from its own side</SK>],
      ]} />
      {late && (
        <>
          <At x={760} y={560} o={ramp(t, c("Nothing that works is lost"), 0.6)}><Apple size={120} /></At>
          <At x={1160} y={560} o={ramp(t, c("Nothing that works is lost"), 0.6)}><Mountain p={1} w={260} /></At>
          <At x={960} y={680} o={ramp(t, c("Nothing that works is lost"), 0.6) * (1 - ramp(t, floor + 0.6, 1.6))}>
            <svg width={1200} height={60} viewBox="0 0 1200 60"><path d="M0 30 L1200 30" stroke={DIM} strokeWidth={10} strokeDasharray="30 12" /></svg>
          </At>
          <Items items={[
            ["Nothing that works is lost", 960, 450, <K c={GREEN} s={30}>nothing that works is lost</K>],
            ["Only a floor that was never there is gone", 960, 790, <Wd c={GOLD} s={42} serif>Only a floor that was never there is gone.</Wd>],
          ]} />
        </>
      )}
    </AbsoluteFill>
  );
};

const NextScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const bowl = c("It starts from one bowl of liquid");
  const end = c("A god sees nectar");
  const seen: [string, string, number, number][] = [
    ["A human sees water", "human · water", 560, 560],
    ["A hungry ghost sees pus", "hungry ghost · pus", 1360, 560],
    ["A fish sees its home", "fish · its home", 560, 760],
    ["A god sees nectar", "god · nectar", 1360, 760],
  ];
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 5, 1.5) }}>
      <Items items={[
        ["of a series on dependent arising", 960, 130, <Wd c={GOLD} s={44} serif>Part 1 · Undeniably there, or formed?</Wd>],
        ["The Illusion of the Given", 960, 260, <Box c={VIOLET} w={760} title="Part 2 · The Illusion of the Given" sub="one finished world, only seen differently?" />, { pop: true }],
      ]} />
      <At x={960} y={660} o={ramp(t, bowl, 0.6)}><Bowl p={ramp(t, bowl, 1.2)} /></At>
      {seen.map(([cue, label, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5)} s={pop(t, 30, c(cue))}><K c={ICE} s={26}>{label}</K></At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["If you think you understand quantum mechanics", "dusk", <OpenScene />],
    ["The same holds for dependent arising", "search", <AgreeScene />],
    ["First, an apple", "apple", <AppleFeltScene />],
    ["Or, and it is a big or, look at how this apple is formed", "light", <StreamsScene />],
    ["Each stream is complete in its own conditions", "deep", <HabitScene />],
    ["And even seen this way, nothing is missing", "whole", <MissingAppleScene />],
    ["Second, a mountain", "hill", <MountainFeltScene />],
    ["Or, and again it is a big or, look at how this mountain is formed", "light", <MountainFormedScene />],
    ["When no one is looking, is it there", "search", <LookingScene />],
    ["Third, a bat, a bee and an ant", "doubt", <OneMountainScene />],
    ["Or, and it is the biggest or", "jade", <FourWorldsScene />],
    ["Two ways of seeing, three times over", "whole", <WhichScene />],
    ["By experience", "jade", <ExperienceScene />],
    ["By logic", "deep", <LogicScene />],
    ["By working", "light", <WorkingScene />],
    ["So the first view is not the truer one", "whole", <VerdictScene />],
    ["of a series on dependent arising", "night", <NextScene />],
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
