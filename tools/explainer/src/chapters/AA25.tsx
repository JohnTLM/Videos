// After Anatta · Explorations: Dependent Arising, Part 3 of 6: What It Is For
// (EBooks Bonus Articles/dependent-arising-and-designation, own-voice text as of 2026-11-08, sections 7 to 10).
// Arc: what is it for? -> two modes of right knowing (by concepts within the framework; one complete stroke, free of all
// elaborations; neither cancels the other) -> the framework held three ways (the article's diagram) -> three uses (explains,
// dismantles, describes the taste; two guards) -> an enlightened view not yet lived -> have a second thought: toss the apple
// again -> two frameworks: default and inherent (the matrix); the framework is not the prison -> spontaneous presence understood
// within it -> ignorance not a power; the antidote, not its shape -> the masters praise it -> twelve links forward and reverse ->
// the veil is ignorance (three meanings of the word for conventional) -> other readings stated fairly -> disclaimer -> Part 4.
// Stance: a ground, a power, a self behind seeing, a solid apple out there, the web, "only a story" are drawn only to be struck.
// The net is drawn dim and dashed, labelled conventional and empty, never as a base layer. "One stroke" is never one stuff.
// Cue phrases avoid the respelled names (Nagarjuna, Candrakirti, Tsongkhapa, Dzogchen, samvrti, Gorampa, Sakya, Kagyu).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "What it is for", "I asked whether dependent arising is as plain as it sounds", "no power in the cause",
  "no doer behind the doing", "whatever appears singled out and designated", "not a web", "Now the other question",
  // two modes
  "there are two ways of knowing rightly here", "The first works through concepts", "how the whole of Indra's net comes about",
  "The net is conventional and empty", "This is not a lesser knowing", "how a doctor treats", "how a cook cooks",
  "how a promise is kept", "how karma is understood", "It corrects the inherent reading",
  "The second is freedom from all elaborations", "Nothing is cut into before and after",
  "Without the framework, there is one complete stroke", "One here does not mean one stuff", "The colour is still the colour",
  "does not mean somewhere else", "It is the same appearing, known without the cutting",
  "Neither cancels the other", "The first is not a ladder", "The second is not a place outside the world",
  "would become a new ground", "the taste is met again inside the framework",
  // three ways
  "So the framework can be held three ways", "Without it one complete stroke", "the same parts and conditions, now light",
  "And in between, where we mostly live", "That middle one is the matrix",
  // three uses
  "dependent arising does three kinds of work", "It explains", "These conditions, met together", "It dismantles",
  "takes apart the self", "calls it the king of reasons", "And it describes the taste", "nothing standing on its own, nothing missing",
  "The three hang together", "It can dismantle because it explains", "So the reasoning does not destroy the world",
  "What goes is only the", "joins all three in one verse", "What arises in dependence is what we call emptiness",
  "That is a designation in dependence", "And that itself is the middle way", "Two guards go with the dismantling",
  "It puts nothing in place of what it removes", "And it dismantles itself too", "A reason held as the final truth",
  // enlightened view
  "Dependent arising is an enlightened view", "I do not mean a view only the enlightened can hold", "which we do not yet live in",
  "We live reading the matrix as inherent", "Things seem to stand by themselves", "Causes seem to push",
  "A self seems to sit behind the seeing", "It is a deep habit of seeing",
  // second thought
  "Have a second thought", "If you think you do not think inherently", "Toss the apple again", "Do you first meet a hardness",
  "and only then put", "Or is the solid apple simply there", "For almost all of us", "That is the habit at work",
  "It is just the way things look", "So agreeing with dependent arising is not living in it", "We live in the confusion of thinking",
  "habitually and without knowing it", "is usually held the same way", "It is Feynman's quip again", "If you think you understand",
  // two frameworks
  "So I keep two frameworks apart", "The default framework is the conventional cutting itself", "We need it to speak",
  "Dependent arising lives here", "The inherent framework is the habit", "That is the matrix", "A habit of seeing",
  "This does not mean we live in a matrix", "What binds us is living in it with reified thoughts", "Dependent arising is not the matrix",
  "It is the wisdom that shows the matrix up", "The framework is not the prison",
  "Dependent arising lives in the first and unbinds the second", "is only a story", "That is the slide into annihilation",
  // spontaneous presence within the framework
  "even spontaneous presence can be understood within it", "Crudely and clumsily", "Conditions are the appearing",
  "Nothing produces it", "It is complete as its conditions meet", "That would make it a new ground",
  "How is that different from reading a taste", "The difference is not concepts", "When the concepts are taken as found",
  "Held as designations", "It is the taste understood rightly",
  // ignorance
  "Ignorance is not a power either", "with a force to blind", "It is a very deep habit of confused seeing", "It blinds reliably",
  "And it can end, because nothing stands behind it", "Some readings say dependent arising originates with ignorance",
  "That reading needs refining", "the corrective antidote for ignorance",
  // masters
  "it would be odd to praise it", "opens his Fundamental Verses", "without arising or ceasing", "opens his Clear Words",
  "praises the Buddha for this one teaching", "reverses the root of the round", "And the Buddha himself",
  "whoever sees dependent arising sees the Dhamma", "It stands whether or not buddhas arise", "Not as a law kept somewhere behind things",
  // twelve links
  "The twelve links do begin with ignorance", "Forward, from ignorance to old age and death", "In reverse, from ignorance ceasing",
  "No one praises ignorance", "They praise the seeing that undoes it",
  // the veil
  "One last knot", "conventional truth is a veil", "must be the veil", "The source is genuine", "The Sanskrit word for conventional",
  "gives it three meanings", "Concealment, the ignorance that hides", "Mutual dependence", "And worldly convention",
  "Read carefully, this supports the refinement", "What veils is ignorance, the concealer", "Concealment is the matrix",
  "Mutual dependence is dependent arising", "Worldly convention is the default framework", "The same appearance can be held two ways",
  "Held by the concealer", "Seen as dependent arising, it is the seeing that lifts the veil", "says as much himself",
  "things appear like reflections", "He calls this mere convention", "Still appearing, still working, no longer veiling",
  "With wisdom, why would it veil",
  // other readings
  "Other readings deserve to be stated fairly", "define the conventional as what appears to mistaken cognition",
  "Then convention veils by definition", "Where I differ is in giving dependence and designation",
  "things can still appear as standing by themselves", "The veil of belief goes first", "The veil of habitual appearance thins in time",
  "the framework is still an elaboration", "It is the other mode of right knowing",
  // end
  "All views and understanding here are my own", "So what is it for", "It is the antidote to ignorance, not its shape",
  "And what veils is ignorance, never dependent arising", "how it is met",
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
/** A glowing patch of colour. */
const Patch: React.FC<{ color: string; size?: number }> = ({ color, size = 150 }) => (
  <div style={{ width: size, height: size, borderRadius: size * 0.22, background: color, opacity: 0.9, boxShadow: `0 0 50px ${color}` }} />
);
/** Sound waves, p 0..1. */
const Waves: React.FC<{ p: number; color?: string }> = ({ p, color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={200} height={160} viewBox="0 0 300 240" style={{ overflow: "visible" }} opacity={p}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <path key={i} d={`M${40 + k * 180} 40 Q${90 + k * 200} 120 ${40 + k * 180} 200`} fill="none" stroke={color} strokeWidth={6}
          opacity={1 - k} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />;
      })}
    </svg>
  );
};
/** A box on the board. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; sub2?: string; dashed?: boolean }> = ({ c, w = 460, title, sub, sub2, dashed }) => (
  <div style={{ width: w, padding: "24px 22px", borderRadius: 20, border: `3px ${dashed ? "dashed" : "solid"} ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 34px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={36} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 12 }}><Wd c={CHALK} s={25}>{sub}</Wd></div> : null}
    {sub2 ? <div style={{ marginTop: 6 }}><Wd c={CHALK} s={25}>{sub2}</Wd></div> : null}
  </div>
);
const APPLE = "#E2593E";
/** An apple. `solid` gives it a hard outline and shadow: the habit's picture. */
const Apple: React.FC<{ size?: number; solid?: boolean }> = ({ size = 170, solid }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${solid ? 26 : 14}px ${APPLE})` }}>
    <path d="M100 56 C70 30 22 46 26 104 C30 160 70 190 100 172 C130 190 170 160 174 104 C178 46 130 30 100 56 Z"
      fill={`${APPLE}${solid ? "ee" : "aa"}`} stroke={solid ? "#FFD7C9" : APPLE} strokeWidth={solid ? 8 : 5} />
    <path d="M60 80 Q52 100 58 122" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.45} fill="none" />
    <path d="M100 56 Q98 34 108 18" stroke="#8a5a2b" strokeWidth={6} strokeLinecap="round" fill="none" />
    <path d="M106 30 Q130 8 152 22 Q132 44 106 30 Z" fill={`${GREEN}aa`} stroke={GREEN} strokeWidth={3} />
  </svg>
);
/** Indra's net, drawn dim and dashed: conventional, empty, never a base. */
const Net: React.FC<{ p: number }> = ({ p }) => {
  const pts: [number, number][] = [];
  for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) pts.push([40 + k * 110 + (r % 2) * 55, 30 + r * 80]);
  return (
    <svg width={480} height={220} viewBox="0 0 480 220" style={{ overflow: "visible" }} opacity={p}>
      {pts.map(([x, y], i) => pts.slice(i + 1).filter(([x2, y2]) => Math.hypot(x2 - x, y2 - y) < 130).map(([x2, y2], j) => (
        <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={DIM} strokeWidth={2} strokeDasharray="8 8" />
      )))}
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={9} fill="none" stroke={ICE} strokeWidth={3} style={{ filter: `drop-shadow(0 0 6px ${ICE})` }} />)}
    </svg>
  );
};
/** One brush stroke drawn round: "one complete stroke", not one stuff. */
const Stroke: React.FC<{ p: number; size?: number }> = ({ p, size = 260 }) => (
  <svg width={size} height={size} viewBox="0 0 260 260" style={{ overflow: "visible" }}>
    <DrawPath d="M200 70 C170 30 90 28 55 75 C20 125 40 200 105 222 C170 242 230 200 232 140 C233 112 224 96 214 86" p={p} color={GOLD} width={14} len={720} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const recap = c("I asked whether dependent arising is as plain as it sounds");
  const q = c("Now the other question");
  const out = 1 - ramp(t, recap, 0.5);
  const recapOut = 1 - ramp(t, q, 0.5);
  const chips: [string, string, number][] = [
    ["no power in the cause", "no power in the cause", 300],
    ["no doer behind the doing", "no doer behind the doing", 400],
    ["whatever appears singled out and designated", "singled out, designated", 500],
    ["not a web", "conditions are the appearing, not a web", 600],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={340} o={ramp(t, 0.3, 0.6) * out}><Wd c={DIM} s={34} serif>Part 3 of 6</Wd></At>
      <At x={960} y={440} o={ramp(t, 0.5, 0.7) * out}><Wd c={CHALK} s={84} serif>What it is for</Wd></At>
      <At x={960} y={560} o={ramp(t, 1.2, 0.8) * out}><Wd c={GOLD} s={32} serif>Dependent Arising: If You Think You Understand, You Don't</Wd></At>
      <At x={960} y={170} o={ramp(t, recap, 0.5) * recapOut}><Wd c={CHALK} s={36} serif>Parts 1 and 2: what it says</Wd></At>
      {chips.map(([cue, label, y]) => (
        <At key={cue} x={960} y={y} o={ramp(t, c(cue), 0.5) * recapOut}><K c={TEAL} s={30}>{label}</K></At>
      ))}
      <At x={960} y={430} s={ramp(t, q, 0.8) * 0.15 + 0.85} o={ramp(t, q, 0.6)}><Wd c={GOLD} s={80} serif>What is it for?</Wd></At>
    </AbsoluteFill>
  );
};

const TwoModesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const second = c("The second is freedom from all elaborations");
  const neither = c("Neither cancels the other");
  const leftOut = 1 - ramp(t, second, 0.5);
  const strokeIn = c("Without the framework, there is one complete stroke");
  const midOut = 1 - ramp(t, neither, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["there are two ways of knowing rightly here", 960, 100, <Wd c={CHALK} s={40} serif>two modes of right knowing</Wd>]]} />
      {/* first mode */}
      <Items items={[
        ["The first works through concepts", 960, 200, <K c={TEAL} s={32}>1 · by concepts, within the framework</K>, { until: "The second is freedom from all elaborations" }],
        ["The net is conventional and empty", 960, 500, <Wd c={DIM} s={26}>conventional and empty, presenting itself upon conditions</Wd>, { until: "This is not a lesser knowing" }],
      ]} />
      <At x={960} y={350} o={ramp(t, c("how the whole of Indra's net comes about"), 0.6) * (1 - ramp(t, c("This is not a lesser knowing"), 0.5))}>
        <Net p={1} />
      </At>
      <Items items={[
        ["This is not a lesser knowing", 960, 300, <Wd c={GOLD} s={34} serif>not a lesser knowing</Wd>, { until: "The second is freedom from all elaborations" }],
        ["how a doctor treats", 480, 420, <K c={GOLD} s={28}>a doctor treats</K>, { until: "The second is freedom from all elaborations" }],
        ["how a cook cooks", 800, 420, <K c={GOLD} s={28}>a cook cooks</K>, { until: "The second is freedom from all elaborations" }],
        ["how a promise is kept", 1120, 420, <K c={GOLD} s={28}>a promise is kept</K>, { until: "The second is freedom from all elaborations" }],
        ["how karma is understood", 1440, 420, <K c={GOLD} s={28}>karma is understood</K>, { until: "The second is freedom from all elaborations" }],
        ["It corrects the inherent reading", 960, 560, <Wd c={TEAL} s={30}>it shows emptiness, from inside the framework</Wd>, { until: "The second is freedom from all elaborations" }],
      ]} />
      {/* second mode */}
      <Items items={[
        ["The second is freedom from all elaborations", 960, 200, <K c={GOLD} s={32}>2 · free of all elaborations, not within the framework</K>, { until: "Neither cancels the other" }],
        ["Nothing is cut into before and after", 960, 290, <Wd c={DIM} s={28}>not cut into before and after, part and whole, cause and effect</Wd>, { until: "Without the framework, there is one complete stroke" }],
      ]} />
      <At x={600} y={450} o={ramp(t, strokeIn, 0.4) * midOut}><Stroke p={ramp(t, strokeIn, 1.6)} /></At>
      <Items items={[
        ["Without the framework, there is one complete stroke", 600, 640, <Wd c={GOLD} s={32} serif>one complete stroke</Wd>, { until: "Neither cancels the other" }],
        ["One here does not mean one stuff", 1300, 330, <SK c={DIM} s={28} strikeAt={c("One here does not mean one stuff") + 1.2}>one stuff, a refined oneness</SK>, { until: "Neither cancels the other" }],
        ["The colour is still the colour", 1300, 460, <div style={{ display: "flex", gap: 40, alignItems: "center" }}><Patch color="#3E7BD8" size={90} /><Waves p={1} /></div>, { until: "Neither cancels the other" }],
        ["The colour is still the colour", 1300, 580, <Wd c={CHALK} s={26}>colour still colour, sound still sound</Wd>, { until: "Neither cancels the other", d: 0.4 }],
        ["does not mean somewhere else", 960, 740, <Wd c={TEAL} s={30}>not somewhere else: the same appearing, known without the cutting</Wd>, { until: "Neither cancels the other" }],
      ]} />
      {/* neither cancels */}
      <Items items={[
        ["Neither cancels the other", 960, 230, <Wd c={GOLD} s={44} serif>neither cancels the other</Wd>],
        ["The first is not a ladder", 620, 380, <SK c={DIM} s={28} strikeAt={c("The first is not a ladder") + 1}>a ladder to throw away</SK>],
        ["The second is not a place outside the world", 1300, 380, <SK c={DIM} s={28} strikeAt={c("The second is not a place outside the world") + 1.4}>a place outside the world</SK>],
        ["would become a new ground", 960, 520, <SK c={ROSE} s={28} strikeAt={c("would become a new ground") + 1}>freedom kept apart: a new ground</SK>],
        ["the taste is met again inside the framework", 960, 660, <Wd c={TEAL} s={32}>met again in ordinary life: the parts and conditions now light</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ThreeWaysScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const matrix = c("That middle one is the matrix");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So the framework can be held three ways", 960, 120, <Wd c={CHALK} s={40} serif>the framework, held three ways</Wd>],
        ["Without it one complete stroke", 420, 400, <Box c={GOLD} w={460} title="without the framework" sub="one complete stroke," sub2="free of all elaborations" />],
        ["the same parts and conditions, now light", 1500, 400, <Box c={TEAL} w={460} title="within, with the wisdom" sub="the same parts and" sub2="conditions, now light" />],
        ["And in between, where we mostly live", 960, 400, <Box c={ROSE} w={420} title="within, reified" sub="things, causes, a self," sub2="each standing alone" />],
        ["That middle one is the matrix", 960, 620, <Wd c={ROSE} s={34} serif>the matrix: where we live</Wd>],
        ["That middle one is the matrix", 960, 720, <Wd c={DIM} s={26}>the outer two: the two modes of right knowing</Wd>, { d: 1.5 }],
      ]} />
      <Flow x1={1180} y1={400} x2={1265} y2={400} color={TEAL} p={ramp(t, matrix + 2.5, 0.8)} width={4} />
    </AbsoluteFill>
  );
};

const UsesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hang = c("The three hang together");
  const guards = c("Two guards go with the dismantling");
  const listAt = c("takes apart the self");
  const list = ["the self", "the object", "the cause", "the whole", "the field", "the substrate", "energy", "the web"];
  const verse = c("joins all three in one verse");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("dependent arising does three kinds of work"), 0.5) * (1 - ramp(t, guards, 0.5))}>
        <Box c={GOLD} w={560} title="dependent arising" sub="conditions met, designated, working" />
      </At>
      <Items items={[
        ["It explains", 420, 380, <Box c={TEAL} w={420} title="it explains" sub="how does this come about?" />, { until: "Two guards go with the dismantling" }],
        ["It dismantles", 960, 380, <Box c={ROSE} w={420} title="it dismantles" sub="and shows emptiness" />, { until: "Two guards go with the dismantling" }],
        ["And it describes the taste", 1500, 380, <Box c={VIOLET} w={420} title="it describes" sub="the taste" />, { until: "Two guards go with the dismantling" }],
        ["These conditions, met together", 420, 520, <Wd c={CHALK} s={26}>these conditions, met together</Wd>, { until: "The three hang together" }],
        ["calls it the king of reasons", 960, 760, <Wd c={GOLD} s={30} serif>the king of reasons</Wd>, { until: "And it describes the taste" }],
        ["nothing standing on its own, nothing missing", 1500, 520, <Wd c={CHALK} s={24}>nothing on its own, nothing missing</Wd>, { until: "The three hang together" }],
      ]} />
      {list.map((n, i) => (
        <At key={n} x={600 + (i % 4) * 240} y={560 + Math.floor(i / 4) * 80} o={ramp(t, listAt + 0.35 * i, 0.4) * (1 - ramp(t, c("And it describes the taste"), 0.5))}>
          <SK c={DIM} s={24} strikeAt={listAt + 3.2 + 0.15 * i}>{n}</SK>
        </At>
      ))}
      <Items items={[
        ["It can dismantle because it explains", 960, 560, <Wd c={GOLD} s={30}>what validly depends cannot also stand by itself</Wd>, { until: "joins all three in one verse" }],
        ["So the reasoning does not destroy the world", 960, 640, <Wd c={CHALK} s={28}>the world stays; it is not destroyed</Wd>, { until: "joins all three in one verse" }],
        ["What goes is only the", 960, 720, <SK c={DIM} s={26} strikeAt={c("What goes is only the") + 1.4}>"from its own side"</SK>, { until: "joins all three in one verse" }],
      ]} />
      <At x={960} y={560} o={ramp(t, verse, 0.4) * (1 - ramp(t, guards, 0.5))}><Wd c={DIM} s={24}>one verse joins the three</Wd></At>
      <Items items={[
        ["What arises in dependence is what we call emptiness", 960, 620, <Wd c={CHALK} s={28} serif>what arises in dependence is what we call emptiness;</Wd>, { until: "Two guards go with the dismantling" }],
        ["That is a designation in dependence", 960, 680, <Wd c={CHALK} s={28} serif>that is a designation in dependence;</Wd>, { until: "Two guards go with the dismantling" }],
        ["And that itself is the middle way", 960, 740, <Wd c={GOLD} s={30} serif>that itself is the middle way.</Wd>, { until: "Two guards go with the dismantling" }],
      ]} />
      <At x={960} y={170} o={ramp(t, guards, 0.5)}><Wd c={CHALK} s={40} serif>two guards on the dismantling</Wd></At>
      <Items items={[
        ["It puts nothing in place of what it removes", 960, 330, <K c={TEAL} s={30}>nothing put in place of what it removes</K>],
        ["It puts nothing in place of what it removes", 960, 420, <SK c={DIM} s={26} strikeAt={c("It puts nothing in place of what it removes") + 2.6}>emptiness as the next hinge</SK>, { d: 1.6 }],
        ["And it dismantles itself too", 960, 540, <K c={TEAL} s={30}>it dismantles itself too</K>],
        ["A reason held as the final truth", 960, 650, <SK c={DIM} s={26} strikeAt={c("A reason held as the final truth") + 1.6}>a reason held as the final truth</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const ViewScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const habit = c("It is a deep habit of seeing");
  const rows: [string, string, number][] = [
    ["Things seem to stand by themselves", "things standing by themselves", 400],
    ["Causes seem to push", "causes pushing", 500],
    ["A self seems to sit behind the seeing", "a self behind the seeing", 600],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Dependent arising is an enlightened view", 960, 130, <Wd c={GOLD} s={46} serif>an enlightened view</Wd>],
        ["I do not mean a view only the enlightened can hold", 960, 230, <SK c={DIM} s={26} strikeAt={c("I do not mean a view only the enlightened can hold") + 1.8}>a view only the enlightened can hold</SK>, { until: "We live reading the matrix as inherent" }],
        ["which we do not yet live in", 960, 320, <Wd c={CHALK} s={32}>the right view, which we do not yet live in</Wd>, { until: "We live reading the matrix as inherent" }],
        ["We live reading the matrix as inherent", 960, 260, <Wd c={ROSE} s={32}>how we live: reading the matrix as inherent</Wd>],
      ]} />
      {rows.map(([cue, label, y], i) => (
        <At key={cue} x={960} y={y} o={ramp(t, c(cue), 0.5)}><K c={ROSE} s={28}>{label}</K></At>
      ))}
      <At x={960} y={740} o={ramp(t, habit, 0.5)}><Wd c={GOLD} s={32}>not a thought we hold: a habit of seeing, in the body, before thought</Wd></At>
    </AbsoluteFill>
  );
};

const SecondScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const toss = c("Toss the apple again");
  const hard = c("Do you first meet a hardness");
  const simply = c("Or is the solid apple simply there");
  const agree = c("So agreeing with dependent arising is not living in it");
  // the apple flies in an arc for 2.4 s, then rests in the middle
  const k = Math.min(1, Math.max(0, (t - toss) / 2.4));
  const ax = 420 + k * 1080, ay = 560 - Math.sin(k * Math.PI) * 320;
  const appleOut = 1 - ramp(t, agree, 0.6);
  const flying = t < simply;
  return (
    <AbsoluteFill>
      <At x={960} y={130} s={pop(t, fps, c("Have a second thought"))}><Wd c={GOLD} s={58} serif>have a second thought</Wd></At>
      <Items items={[
        ["If you think you do not think inherently", 960, 230, <Wd c={CHALK} s={30}>if you think you do not think inherently...</Wd>, { until: "Toss the apple again" }],
      ]} />
      <Svg>
        <path d="M420 560 Q960 -80 1500 560" fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="10 12"
          opacity={ramp(t, toss, 0.5) * (1 - ramp(t, simply, 0.5))} />
      </Svg>
      <At x={flying ? ax : 960} y={flying ? ay : 430} o={ramp(t, toss - 0.2, 0.3) * appleOut} s={flying ? 0.8 : 1 + 0.06 * ramp(t, simply, 0.6)}>
        <Apple size={150} solid={!flying} />
      </At>
      <Items items={[
        ["Do you first meet a hardness", 560, 720, <K c={DIM} s={26}>a hardness</K>, { until: "Or is the solid apple simply there" }],
        ["Do you first meet a hardness", 820, 720, <K c={WARM} s={26}>a red</K>, { d: 0.7, until: "Or is the solid apple simply there" }],
        ["Do you first meet a hardness", 1060, 720, <K c={ICE} s={26}>an arc</K>, { d: 1.3, until: "Or is the solid apple simply there" }],
        ["and only then put", 1360, 720, <Wd c={GOLD} s={30}>then "apple"?</Wd>, { until: "Or is the solid apple simply there" }],
        ["Or is the solid apple simply there", 960, 620, <Wd c={CHALK} s={34} serif>simply there, out there, before any thought</Wd>, { until: "So agreeing with dependent arising is not living in it" }],
        ["For almost all of us", 960, 700, <Wd c={DIM} s={28}>for almost all of us</Wd>, { until: "So agreeing with dependent arising is not living in it" }],
        ["That is the habit at work", 960, 770, <Wd c={ROSE} s={30}>the habit at work: it does not announce itself</Wd>, { until: "So agreeing with dependent arising is not living in it" }],
      ]} />
      <At x={960} y={280} o={ramp(t, c("That is the habit at work"), 0.5) * appleOut}><Wd c={ROSE} s={26}>solid, from its own side?</Wd></At>
      <Items items={[
        ["So agreeing with dependent arising is not living in it", 960, 280, <Wd c={CHALK} s={34}>agreeing with it is not living in it</Wd>],
      ]} />
      <At x={960} y={430}>
        <div style={{ width: 1500 }}>
          <Reveal text="We live in the confusion of thinking, analysing and orienting ourselves with inherent thoughts," at={c("We live in the confusion of thinking")} size={44} color={GOLD} speed={0.035} wrap />
        </div>
      </At>
      <Items items={[
        ["habitually and without knowing it", 960, 560, <Wd c={GOLD} s={40} serif>habitually and without knowing it.</Wd>],
        ["is usually held the same way", 960, 670, <SK c={DIM} s={26} strikeAt={c("is usually held the same way") + 2}>"I do not think inherently": a self behind the thought</SK>],
        ["It is Feynman's quip again", 960, 770, <Wd c={TEAL} s={32} serif>if you think you understand, you don't</Wd>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const FrameworksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const story = c("is only a story");
  const unbind = c("Dependent arising lives in the first and unbinds the second");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So I keep two frameworks apart", 960, 110, <Wd c={CHALK} s={40} serif>two frameworks, kept apart</Wd>],
        ["The default framework is the conventional cutting itself", 520, 300, <Box c={TEAL} w={620} title="the default framework" sub="parts and whole, before and after," sub2="cause and effect, agent and action" />],
        ["We need it to speak", 520, 460, <Wd c={CHALK} s={26}>it works: to speak, to cook, to keep promises</Wd>],
        ["Dependent arising lives here", 520, 530, <K c={TEAL} s={26}>dependent arising lives here</K>],
        ["The inherent framework is the habit", 1400, 300, <Box c={ROSE} w={620} title="the inherent framework" sub="taking what is singled out" sub2="as standing by itself" />],
        ["That is the matrix", 1400, 460, <Wd c={ROSE} s={30} serif>the matrix</Wd>],
        ["A habit of seeing", 1400, 530, <K c={ROSE} s={26}>not a world, not a field: a habit of seeing</K>],
      ]} />
      <At x={960} y={640} o={ramp(t, c("This does not mean we live in a matrix"), 0.5) * (1 - ramp(t, c("Dependent arising is not the matrix"), 0.4))}>
        <SK c={DIM} s={26} strikeAt={c("This does not mean we live in a matrix") + 1.6}>a matrix we must escape</SK>
      </At>
      <Items items={[
        ["What binds us is living in it with reified thoughts", 960, 740, <Wd c={GOLD} s={28}>what binds: living in it with reified thoughts</Wd>, { until: "Dependent arising lives in the first and unbinds the second" }],
        ["It is the wisdom that shows the matrix up", 960, 640, <Wd c={TEAL} s={30}>dependent arising: the wisdom that shows the matrix up</Wd>, { until: "The framework is not the prison" }],
        ["The framework is not the prison", 960, 640, <Wd c={GOLD} s={40} serif>the framework is not the prison</Wd>, { until: "Dependent arising lives in the first and unbinds the second" }],
      ]} />
      <Flow x1={850} y1={300} x2={1080} y2={300} color={TEAL} p={ramp(t, unbind, 1)} width={5} />
      <Items items={[
        ["Dependent arising lives in the first and unbinds the second", 960, 660, <Wd c={TEAL} s={30}>lives in the first, unbinds the second</Wd>],
        ["is only a story", 960, 750, <SK c={ROSE} s={26} strikeAt={story + 1.6}>"dependent arising is only a story"</SK>],
        ["That is the slide into annihilation", 960, 820, <Wd c={DIM} s={24}>the slide into annihilation</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PresenceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const diff = c("How is that different from reading a taste");
  const out = 1 - ramp(t, diff, 0.5);
  const conds: [string, number][] = [["light", 300], ["eye", 430], ["attention", 560]];
  const app = c("Conditions are the appearing");
  return (
    <AbsoluteFill>
      <Items items={[
        ["even spontaneous presence can be understood within it", 960, 120, <Wd c={VIOLET} s={40} serif>spontaneous presence, understood within the framework</Wd>, { until: "How is that different from reading a taste" }],
        ["Crudely and clumsily", 960, 200, <Wd c={DIM} s={28}>crudely and clumsily, in pieces and in sequence; but truly</Wd>, { until: "How is that different from reading a taste" }],
      ]} />
      {conds.map(([n, y], i) => (
        <React.Fragment key={n}>
          <At x={420} y={y + 30} o={ramp(t, app + 0.3 * i, 0.5) * out}><K c={GOLD} s={26}>{n}</K></At>
          <Flow x1={520} y1={y + 30} x2={760} y2={460} color={TEAL} p={ramp(t, app + 0.3 * i, 0.8) * out} />
        </React.Fragment>
      ))}
      <At x={860} y={460} o={ramp(t, app, 0.6) * out}><Patch color="#3E7BD8" size={130} /></At>
      <Items items={[
        ["Conditions are the appearing", 1400, 340, <Wd c={TEAL} s={30}>conditions are the appearing</Wd>, { until: "How is that different from reading a taste" }],
        ["Nothing produces it", 1400, 430, <SK c={DIM} s={26} strikeAt={c("Nothing produces it") + 0.8}>a producer behind</SK>, { until: "How is that different from reading a taste" }],
        ["It is complete as its conditions meet", 1400, 520, <Wd c={GOLD} s={30}>complete as its conditions meet</Wd>, { until: "How is that different from reading a taste" }],
        ["That would make it a new ground", 960, 720, <SK c={ROSE} s={26} strikeAt={c("That would make it a new ground") + 0.8}>a place beyond concepts, outside the framework</SK>, { until: "How is that different from reading a taste" }],
      ]} />
      <Items items={[
        ["How is that different from reading a taste", 960, 140, <Wd c={CHALK} s={36} serif>reading a taste through a concept?</Wd>],
        ["The difference is not concepts", 960, 250, <Wd c={GOLD} s={36} serif>not concepts: reification</Wd>],
        ["When the concepts are taken as found", 560, 430, <Box c={ROSE} w={560} title="taken as found" sub="the taste fixed into" sub2="a self or a source" />],
        ["Held as designations", 1360, 430, <Box c={TEAL} w={560} title="held as designations" sub="the same concepts" sub2="point, and do not fix" />],
        ["It is the taste understood rightly", 960, 680, <Wd c={CHALK} s={30}>understanding is not the taste: it is the taste understood rightly</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const IgnoranceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const some = c("Some readings say dependent arising originates with ignorance");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Ignorance is not a power either", 960, 130, <Wd c={CHALK} s={44} serif>ignorance is not a power either</Wd>],
        ["with a force to blind", 960, 270, <SK c={DIM} s={28} strikeAt={c("with a force to blind") + 0.9}>a thing in us with a force to blind</SK>, { until: "Some readings say dependent arising originates with ignorance" }],
        ["It is a very deep habit of confused seeing", 960, 380, <Wd c={ROSE} s={30}>a very deep habit of confused seeing, designated, not found</Wd>, { until: "Some readings say dependent arising originates with ignorance" }],
        ["It blinds reliably", 620, 500, <K c={DIM} s={26}>blinds reliably: its conditions renewed</K>, { until: "Some readings say dependent arising originates with ignorance" }],
        ["And it can end, because nothing stands behind it", 1300, 500, <K c={TEAL} s={26}>can end: nothing stands behind it</K>, { until: "Some readings say dependent arising originates with ignorance" }],
      ]} />
      <At x={960} y={350} o={ramp(t, some, 0.5)}>
        <SK c={DIM} s={30} strikeAt={c("That reading needs refining") + 0.6}>dependent arising originates with ignorance</SK>
      </At>
      <Items items={[
        ["the corrective antidote for ignorance", 960, 520, <Wd c={GOLD} s={44} serif>the corrective antidote for ignorance</Wd>],
        ["the corrective antidote for ignorance", 960, 620, <Wd c={TEAL} s={28}>the antidote, not the shape of ignorance</Wd>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const MastersScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["it would be odd to praise it", 960, 110, <Wd c={CHALK} s={38} serif>why the masters praise it</Wd>],
      ["opens his Fundamental Verses", 960, 220, <K c={GOLD} s={26}>Nāgārjuna, Fundamental Verses: homage to the teacher of dependent arising</K>],
      ["without arising or ceasing", 960, 300, <Wd c={CHALK} s={26}>without arising or ceasing, the stilling of elaborations, peace</Wd>],
      ["opens his Clear Words", 960, 390, <K c={GOLD} s={26}>Candrakīrti, Clear Words: unpacking that homage</K>],
      ["praises the Buddha for this one teaching", 960, 480, <K c={GOLD} s={26}>Tsongkhapa, Praise of Dependent Arising: the best of all he taught</K>],
      ["reverses the root of the round", 960, 560, <Wd c={CHALK} s={26}>seeing it reverses the root of the round: ignorance</Wd>],
      ["whoever sees dependent arising sees the Dhamma", 960, 650, <K c={TEAL} s={26}>whoever sees dependent arising sees the Dhamma (MN 28)</K>],
      ["It stands whether or not buddhas arise", 960, 730, <Wd c={CHALK} s={26}>it stands whether or not buddhas arise (SN 12.20)</Wd>],
      ["Not as a law kept somewhere behind things", 960, 800, <Wd c={DIM} s={24}>not a law behind things: how appearing is</Wd>],
    ]} />
  </AbsoluteFill>
);

const LinksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const praise = c("They praise the seeing that undoes it");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The twelve links do begin with ignorance", 960, 120, <Wd c={CHALK} s={40} serif>the twelve links, read two ways</Wd>],
        ["Forward, from ignorance to old age and death", 520, 320, <Box c={ROSE} w={620} title="forward" sub="ignorance ... old age and death:" sub2="the round runs" />],
        ["In reverse, from ignorance ceasing", 1400, 320, <Box c={TEAL} w={620} title="in reverse" sub="ignorance ceasing ... suffering ceasing:" sub2="the round ends" />],
        ["They praise the seeing that undoes it", 960, 620, <Box c={GOLD} w={640} title="dependent arising, seen rightly" sub="the corrective antidote for ignorance" />],
        ["No one praises ignorance", 960, 790, <Wd c={CHALK} s={30}>no one praises ignorance: they praise the seeing that undoes it</Wd>],
      ]} />
      <Flow x1={1080} y1={560} x2={1300} y2={430} color={GOLD} p={ramp(t, praise + 0.8, 0.8)} width={4} />
    </AbsoluteFill>
  );
};

const VeilScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const knotOut = 1 - ramp(t, c("The Sanskrit word for conventional"), 0.5);
  const read = c("Read carefully, this supports the refinement");
  const two = c("The same appearance can be held two ways");
  const refl = c("says as much himself");
  const rowsOut = 1 - ramp(t, two, 0.5);
  const twoOut = 1 - ramp(t, refl, 0.5);
  const rows: [string, string, string, string, string, number][] = [
    ["Concealment, the ignorance that hides", "Concealment is the matrix", "concealment: ignorance", "the matrix: the veil", ROSE, 330],
    ["Mutual dependence", "Mutual dependence is dependent arising", "mutual dependence", "dependent arising", TEAL, 460],
    ["And worldly convention", "Worldly convention is the default framework", "worldly convention", "the default framework", GOLD, 590],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["One last knot", 960, 110, <Wd c={CHALK} s={40} serif>the veil is ignorance, not dependent arising</Wd>],
        ["conventional truth is a veil", 960, 300, <K c={DIM} s={28}>conventional truth is a veil</K>, { until: "The Sanskrit word for conventional" }],
        ["must be the veil", 960, 420, <div style={{ position: "relative" }}><K c={ROSE} s={28}>so dependent arising is the veil?</K></div>, { until: "The Sanskrit word for conventional" }],
        ["The source is genuine", 960, 540, <Wd c={DIM} s={26}>the source is genuine</Wd>, { until: "The Sanskrit word for conventional" }],
        ["The Sanskrit word for conventional", 960, 210, <Wd c={GOLD} s={36} serif>saṃvṛti: a covering, with three meanings</Wd>, { until: "The same appearance can be held two ways" }],
      ]} />
      {rows.map(([a, b, left, right, col, y]) => (
        <React.Fragment key={a}>
          <At x={620} y={y} o={ramp(t, c(a), 0.5) * rowsOut}><K c={col} s={28}>{left}</K></At>
          <Flow x1={860} y1={y} x2={1080} y2={y} color={col} p={ramp(t, c(b), 0.6) * rowsOut} />
          <At x={1320} y={y} o={ramp(t, c(b), 0.5) * rowsOut}><K c={col} s={28}>{right}</K></At>
        </React.Fragment>
      ))}
      <At x={960} y={730} o={ramp(t, read, 0.5) * rowsOut}><Wd c={CHALK} s={28}>what veils is ignorance, the concealer</Wd></At>
      {/* one appearance, two holdings */}
      <At x={960} y={250} o={ramp(t, two, 0.5) * twoOut}><Wd c={CHALK} s={34} serif>one appearance, held two ways</Wd></At>
      <At x={560} y={440} o={ramp(t, c("Held by the concealer"), 0.5) * twoOut}>
        <div style={{ position: "relative", width: 260, height: 220 }}>
          <div style={{ position: "absolute", left: 45, top: 10 }}><Apple size={170} solid /></div>
          <div style={{ position: "absolute", inset: 0, borderRadius: 30, background: "rgba(120,110,130,0.55)", backdropFilter: "blur(3px)" }} />
        </div>
      </At>
      <Items items={[
        ["Held by the concealer", 560, 620, <Wd c={ROSE} s={28}>held by the concealer: it seems to stand alone</Wd>, { until: "says as much himself" }],
        ["Seen as dependent arising, it is the seeing that lifts the veil", 1360, 440, <Apple size={170} />, { until: "says as much himself" }],
        ["Seen as dependent arising, it is the seeing that lifts the veil", 1360, 620, <Wd c={TEAL} s={28}>seen as dependent arising: the veil lifts</Wd>, { until: "says as much himself" }],
      ]} />
      {/* mere convention */}
      <Items items={[
        ["things appear like reflections", 960, 300, <Wd c={ICE} s={34} serif>without afflictive ignorance: like reflections</Wd>],
        ["He calls this mere convention", 960, 420, <Wd c={GOLD} s={44} serif>mere convention</Wd>],
        ["Still appearing, still working, no longer veiling", 960, 540, <K c={TEAL} s={28}>still appearing · still working · no longer veiling</K>],
        ["With wisdom, why would it veil", 960, 680, <Wd c={CHALK} s={32}>with wisdom, why would it veil?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ReadingsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sub = c("things can still appear as standing by themselves");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Other readings deserve to be stated fairly", 960, 120, <Wd c={CHALK} s={38} serif>other readings, stated fairly</Wd>],
        ["define the conventional as what appears to mistaken cognition", 960, 260, <K c={DIM} s={26}>Gorampa, Sakya; some Kagyu and Dzogchen teachers</K>, { until: "things can still appear as standing by themselves" }],
        ["define the conventional as what appears to mistaken cognition", 960, 350, <Wd c={CHALK} s={28}>the conventional: what appears to mistaken cognition</Wd>, { d: 0.6, until: "things can still appear as standing by themselves" }],
        ["Then convention veils by definition", 960, 440, <Wd c={ROSE} s={28}>convention veils by definition: the first meaning as the whole word</Wd>, { until: "things can still appear as standing by themselves" }],
        ["Where I differ is in giving dependence and designation", 960, 560, <Wd c={TEAL} s={30}>where I differ: dependence and designation have their own place</Wd>, { until: "things can still appear as standing by themselves" }],
      ]} />
      <At x={960} y={260} o={ramp(t, sub, 0.5)}><K c={DIM} s={26}>in Tsongkhapa's tradition: a subtle obscuration until buddhahood</K></At>
      <Items items={[
        ["things can still appear as standing by themselves", 960, 350, <Wd c={CHALK} s={28}>things still appear as standing alone: the habit of seeing</Wd>, { d: 0.6 }],
        ["The veil of belief goes first", 620, 470, <K c={TEAL} s={26}>the veil of belief: goes first</K>],
        ["The veil of habitual appearance thins in time", 1320, 470, <K c={GOLD} s={26}>the veil of habitual appearance: thins</K>],
        ["the framework is still an elaboration", 960, 610, <Wd c={CHALK} s={28}>without ignorance, the framework is still an elaboration</Wd>],
        ["It is the other mode of right knowing", 960, 700, <Wd c={GOLD} s={32} serif>not a veil: the other mode of right knowing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const so = c("So what is it for");
  const next = c("how it is met");
  const discOut = 1 - ramp(t, so, 0.5);
  const sumOut = 1 - ramp(t, next, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, c("All views and understanding here are my own"), 0.6) * discOut}>
        <div style={{ width: 1400 }}><Wd c={CHALK} s={32} serif>All views and understanding here are my own,</Wd></div>
        <div style={{ marginTop: 14 }}><Wd c={CHALK} s={32} serif>from my practice and contemplation.</Wd></div>
        <div style={{ marginTop: 14 }}><Wd c={DIM} s={28}>I do not represent any tradition, school or teacher.</Wd></div>
      </At>
      <At x={960} y={160} o={ramp(t, so, 0.5) * sumOut}><Wd c={GOLD} s={44} serif>what it is for</Wd></At>
      <At x={420} y={340} o={ramp(t, so + 1.2, 0.5) * sumOut}><K c={TEAL} s={30}>it explains</K></At>
      <At x={960} y={340} o={ramp(t, so + 1.8, 0.5) * sumOut}><K c={ROSE} s={30}>it dismantles</K></At>
      <At x={1500} y={340} o={ramp(t, so + 2.4, 0.5) * sumOut}><K c={VIOLET} s={30}>it describes the taste</K></At>
      <Items items={[
        ["It is the antidote to ignorance, not its shape", 960, 490, <Wd c={CHALK} s={32}>the antidote to ignorance, not its shape</Wd>, { until: "how it is met" }],
        ["And what veils is ignorance, never dependent arising", 960, 590, <Wd c={GOLD} s={32}>what veils is ignorance, never dependent arising</Wd>, { until: "how it is met" }],
      ]} />
      <At x={960} y={400} o={ramp(t, next, 0.6)}><Wd c={DIM} s={34} serif>Next</Wd></At>
      <At x={960} y={490}><Reveal text="Part 4: how it is met, as a taste" at={next} size={56} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["What it is for", "dusk", <OpenScene />],
    ["there are two ways of knowing rightly here", "light", <TwoModesScene />],
    ["So the framework can be held three ways", "search", <ThreeWaysScene />],
    ["dependent arising does three kinds of work", "whole", <UsesScene />],
    ["Dependent arising is an enlightened view", "deep", <ViewScene />],
    ["Have a second thought", "doubt", <SecondScene />],
    ["So I keep two frameworks apart", "search", <FrameworksScene />],
    ["even spontaneous presence can be understood within it", "jade", <PresenceScene />],
    ["Ignorance is not a power either", "deep", <IgnoranceScene />],
    ["it would be odd to praise it", "dusk", <MastersScene />],
    ["The twelve links do begin with ignorance", "whole", <LinksScene />],
    ["One last knot", "search", <VeilScene />],
    ["Other readings deserve to be stated fairly", "light", <ReadingsScene />],
    ["All views and understanding here are my own", "night", <EndScene />],
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
