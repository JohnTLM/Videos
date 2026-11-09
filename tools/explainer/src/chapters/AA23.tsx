// After Anatta · Dependent Arising: If You Think You Understand, You Don't. Part 1 of 6: If You Think You Understand
// (EBooks Bonus Articles/dependent-arising-and-designation, notebooklm-parts/part-1-if-you-think-you-understand).
// Arc: Part 1 of 6 -> Feynman's quip, the same trap -> the formula, straightforward? -> the apple: solid, out there,
// objective, but is it? (pause, the search: red, press, weight, arc) -> many appearings designated, works, no bottom layer ->
// the full toss twice: the habit (three solid things, the matrix) and as it occurs (many dependent arisings, designated on a
// basis, no bottom brick, causal efficacy without causal power, no thrower behind throwing, co-designated, the mere I stays)
// -> the taste of the toss -> pointer to 5 Elements -> the mountain (not among its parts, not imaginary) -> bat, bee, ant ->
// not one objective mountain (the given, the dilemma, calibration, the rockfall) -> looked away: conventionally there, not
// from its own side -> DN 15 -> read The Illusion of the Given (one bowl) -> the tradition's definitions -> designation ->
// many insights, the six qualities -> stranger than it sounds: eight extremes, rainbow, long and short, subject and object,
// cause without power -> Part 2.
// Stance: a solid apple, a solid thrower, a mountain from its own side, a bottom layer, a power in the cause and a mind-stuff
// are drawn only to be struck. The apple and the mountain stay drawn and working: never "only concepts". Emptiness is
// never drawn as a source.
// Cue phrases avoid the respelled names (Nagarjuna, Candrakirti, Tsongkhapa, Madhyamaka, Abhidharma, Ananda) and numerals.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words, numerals or hyphenated words inside.
export const PHRASES = [
  // opening
  "This is Part", "It comes from After Anatta", "The six parts make one article",
  // Feynman
  "If you think you understand quantum mechanics", "Richard Feynman is said to have quipped", "The same trap waits here",
  "If you think you understand dependent arising",
  // the formula
  "On paper it sounds straightforward", "When this is, that is", "From the arising of this, that arises",
  "When this is not, that is not", "From the ceasing of this, that ceases", "nothing has an essence of its own",
  "It reads like ordinary cause and effect", "But is it really that straightforward", "Take two ordinary examples",
  // the apple
  "The first is an apple", "one solid, independent object", "This is almost intuitive",
  "It feels solid, out there, undeniably objective", "But is it", "Pause here",
  "where exactly is this solid, independent apple", "Is it the red I see", "The press on my palm",
  "The weight, the arc through the air", "or something behind them",
  // found
  "Looked for, that solid apple is not found", "many appearings met together",
  "They are gathered as one apple by designation", "And the apple works perfectly in the hand", "no substrate under it",
  "The shapes, the pressure and the motion are not a bottom layer", "So I am not catching a fiction",
  "exists only conventionally, and works",
  // the toss: habit
  "Let me go through the whole toss", "Look at it twice", "As the habit sees it", "A solid thrower sends it",
  "I call this the inherent framework", "It is a habit in the body",
  // as it occurs
  "Now look at the moment directly", "The touch and the density", "The shape and the colour",
  "The scent, where what drifts", "None of these belongs to a hidden apple core", "The conditions themselves are the appearing",
  // basis
  "The apple is designated on a basis", "Its basis is the colour", "cuts experience into a unit",
  "I find only more bases", "No bottom brick is ever reached",
  // works
  "Then why does the toss still work", "This is causal efficacy without causal power",
  "The meeting of conditions is the working",
  // thrower
  "The thrower is singled out the same way", "Intention arises, muscles contract", "No little me sits inside the head",
  "The wind blows with no wind apart from the blowing", "Look for the hand", "No ultimate thrower is reached",
  "are designated together, as one event", "But nobody disappears", "the mere I",
  // taste
  "And the toss tastes different", "Centerless", "Effortless", "Seamless and intimate", "Yet nothing merges",
  "For the same apple held to the five elements",
  // the mountain
  "The second example is a mountain", "It is a massive, immovable fact of geology",
  "But look for the mountain among the rocks", "it is not apart from them", "This does not make it imaginary",
  "no mountain comes with its edges drawn by nature",
  // bat, bee, ant
  "Does a bat see a mountain", "the answers will not match", "I see a bounded shape against the sky",
  "A bat, finding its way by echo", "A bee, seeing in ultraviolet", "An ant takes a day to cross one boulder",
  "This is not four creatures looking", "Body and world arise together",
  // the given
  "The usual reply is that the mountain is there all the same", "That reply slips in a noun", "That is the given",
  "If the hidden mountain has a summit and slopes", "If it has no features at all", "Nor is measuring a view from nowhere",
  "like instruments with the same calibration", "a rockfall can crush it", "So it is not one objective mountain",
  "The mountain, the one who meets it",
  // looking away
  "When no one is looking, is the mountain there", "Two claims sound almost the same",
  "is still there when I look away and look back", "exists from its own side", "But reliability is not independence",
  "That line keeps me out of two mistakes", "everything is unfindable, and works perfectly all the same",
  // DN 15
  "I am not the first to say", "tells the Buddha how wonderful it is", "The Buddha stops him",
  "This dependent arising is deep, and it appears deep", "tangled like a knotted ball of thread", "was his closest attendant",
  // Illusion of the Given
  "At this point, read my article", "It starts from one bowl of liquid", "A human sees water", "a hungry ghost sees pus",
  "a fish sees its home", "a god sees nectar", "Then come back here",
  // definitions
  "Now the two words, as the tradition defines them",
  "Dependent arising is arising in dependence on causes and conditions", "it is the twelve links", "In forward order",
  "In reverse order", "reads the word itself", "widens it to every phenomenon", "sets out three levels of dependence",
  // designation
  "Designation is naming, by word and concept, on a basis", "used it to sort what exists",
  "The final units, they said, exist substantially", "takes that floor away", "In one verse he joins the two words",
  "Depending and being designated are one fact", "The concept that designates is singled out too",
  // insights
  "I keep these definitions", "does not mean production", "In practice, these words open into many key insights",
  "we do not live in the wisdom of dependent arising", "every experience would be vividly appearing yet unfindable",
  "Centerless, mutual, seamless, effortless and intimate",
  // stranger
  "And it is stranger than it sounds", "free of eight extremes", "No ceasing and no arising",
  "cannot really come from anywhere",
  "What arises in dependence appears vividly", "A rainbow appears with brilliant clarity",
  "Vividness and unfindability are not opposites",
  "Is long long in itself", "They make each other",
  "A subject is a subject only with an object to know", "where is the mind", "Mind is a word for the knowing side of appearing",
  "Then what is cause and effect", "We picture a force", "no power passes between them",
  "Things come about in dependable patterns", "because things are empty, they can arise",
  "That does not make emptiness a source", "Being empty and arising in dependence are one fact",
  // close
  "All views and understanding here are my own", "Next: what dependent arising says",
];

const RED = "#E8564A";

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
  orchard: { a: "rgba(150,50,45,0.42)", b: "rgba(60,120,70,0.38)", c: "rgba(60,50,130,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
  peak: { a: "rgba(70,60,160,0.5)", b: "rgba(60,120,140,0.36)", c: "rgba(140,110,60,0.3)" },
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
/** Something drawn and then struck (a solid thing, shown only to be removed). */
const Struck: React.FC<{ strikeAt: number; children: React.ReactNode }> = ({ strikeAt, children }) => (
  <div style={{ position: "relative", display: "inline-block" }}>{children}<Strike at={strikeAt} /></div>
);

const Apple: React.FC<{ size?: number; glow?: number; o?: number; dashed?: boolean }> = ({ size = 220, glow = 1, o = 1, dashed }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 ${8 + 16 * glow}px ${RED})` }}>
    <path d="M100 56 C70 30 22 46 26 104 C30 160 70 190 100 172 C130 190 170 160 174 104 C178 46 130 30 100 56 Z"
      fill={dashed ? `${RED}22` : `${RED}cc`} stroke={RED} strokeWidth={5} strokeDasharray={dashed ? "12 9" : undefined} />
    {!dashed && <path d="M60 80 Q52 100 58 122" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.45} fill="none" />}
    <path d="M100 56 Q98 34 108 18" stroke="#8a5a2b" strokeWidth={6} strokeLinecap="round" fill="none" />
    <path d="M106 30 Q130 8 152 22 Q132 44 106 30 Z" fill={`${GREEN}aa`} stroke={GREEN} strokeWidth={3} />
  </svg>
);

/** A plain standing figure. */
const Person: React.FC<{ color?: string; size?: number; dashed?: boolean }> = ({ color = CHALK, size = 150, dashed }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "5 4" : undefined} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round"
      strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

/** The toss: thrower left, receiver right, the apple along an arc (p 0..1 = flight). */
const Toss: React.FC<{ p: number; w?: number; color?: string; dashed?: boolean; appleDashed?: boolean }> = ({ p, w = 1100, color = CHALK, dashed, appleDashed }) => {
  const k = w / 1100;
  const x = 170 + 760 * p, y = 250 - 260 * 4 * p * (1 - p) * 0.75;
  return (
    <div style={{ position: "relative", width: w, height: 330 * k }}>
      <svg width={w} height={330 * k} viewBox="0 0 1100 330" style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <path d="M170 250 Q550 -140 930 250" fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="10 12" />
      </svg>
      <div style={{ position: "absolute", left: 40 * k, top: 120 * k }}><Person color={color} size={200 * k} dashed={dashed} /></div>
      <div style={{ position: "absolute", left: 960 * k, top: 120 * k }}><Person color={color} size={200 * k} dashed={dashed} /></div>
      <div style={{ position: "absolute", left: (x - 40) * k, top: (y - 40) * k }}><Apple size={80 * k} glow={0.6} dashed={appleDashed} /></div>
    </div>
  );
};

const Mountain: React.FC<{ w?: number; dashed?: boolean; glow?: string }> = ({ w = 560, dashed, glow = VIOLET }) => (
  <svg width={w} height={(w * 330) / 500} viewBox="0 0 500 330" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${glow})` }}>
    <defs>
      <linearGradient id="aa23mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8E86F5" /><stop offset="1" stopColor="#2A2466" /></linearGradient>
    </defs>
    <path d="M10 310 L170 90 L230 160 L310 40 L490 310 Z" fill={dashed ? "rgba(142,134,245,0.12)" : "url(#aa23mt)"} stroke={glow} strokeWidth={4}
      strokeLinejoin="round" strokeDasharray={dashed ? "16 12" : undefined} />
    {!dashed && <path d="M310 40 L272 98 L292 92 L310 114 L330 90 L350 100 Z" fill={CHALK} opacity={0.9} />}
    {!dashed && <path d="M170 90 L148 120 L170 114 L188 128 Z" fill={CHALK} opacity={0.75} />}
  </svg>
);

const Bat: React.FC<{ c?: string }> = ({ c = VIOLET }) => (
  <svg width={200} height={110} viewBox="0 0 200 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${c})` }}>
    <path d="M100 40 Q80 20 50 22 Q20 26 4 50 Q24 46 34 60 Q46 48 60 62 Q72 52 86 66 Q92 56 100 62 Q108 56 114 66 Q128 52 140 62 Q154 48 166 60 Q176 46 196 50 Q180 26 150 22 Q120 20 100 40 Z"
      fill={`${c}44`} stroke={c} strokeWidth={4} strokeLinejoin="round" />
    <path d="M92 36 L94 24 L100 32 L106 24 L108 36" fill="none" stroke={c} strokeWidth={4} />
  </svg>
);
const Bee: React.FC<{ c?: string }> = ({ c = GOLD }) => (
  <svg width={150} height={110} viewBox="0 0 150 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${c})` }}>
    <ellipse cx={58} cy={30} rx={26} ry={18} fill={`${ICE}44`} stroke={ICE} strokeWidth={3} transform="rotate(-20 58 30)" />
    <ellipse cx={88} cy={28} rx={26} ry={18} fill={`${ICE}44`} stroke={ICE} strokeWidth={3} transform="rotate(20 88 28)" />
    <ellipse cx={75} cy={70} rx={46} ry={28} fill={`${c}aa`} stroke={c} strokeWidth={4} />
    <path d="M62 44 V96 M80 42 V98 M98 46 V94" stroke="#2a2010" strokeWidth={7} />
    <circle cx={128} cy={66} r={14} fill={`${c}aa`} stroke={c} strokeWidth={4} />
  </svg>
);
const Ant: React.FC<{ c?: string }> = ({ c = WARM }) => (
  <svg width={170} height={100} viewBox="0 0 170 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${c})` }}>
    {[40, 75, 110].map((x, i) => (
      <path key={i} d={`M${x} 52 L${x - 18} 90 M${x} 52 L${x + 14} 90`} stroke={c} strokeWidth={4} strokeLinecap="round" />
    ))}
    <ellipse cx={34} cy={50} rx={26} ry={18} fill={`${c}88`} stroke={c} strokeWidth={4} />
    <ellipse cx={80} cy={50} rx={16} ry={12} fill={`${c}88`} stroke={c} strokeWidth={4} />
    <circle cx={122} cy={46} r={16} fill={`${c}88`} stroke={c} strokeWidth={4} />
    <path d="M132 34 Q148 14 160 16 M128 32 Q136 10 150 6" fill="none" stroke={c} strokeWidth={3} strokeLinecap="round" />
  </svg>
);
const Rainbow: React.FC<{ p: number; w?: number }> = ({ p, w = 700 }) => {
  const cols = [ROSE, WARM, GOLD, GREEN, TEAL, ICE, VIOLET];
  return (
    <svg width={w} height={w / 2 + 10} viewBox="0 0 900 460" style={{ overflow: "visible" }}>
      {cols.map((col, i) => {
        const r = 400 - i * 16;
        return <DrawPath key={i} d={`M${450 - r} 450 A${r} ${r} 0 0 1 ${450 + r} 450`} p={p} color={col} width={14} len={1300} />;
      })}
    </svg>
  );
};
const Bowl: React.FC<{ fill?: string }> = ({ fill = ICE }) => (
  <svg width={260} height={140} viewBox="0 0 260 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${fill})` }}>
    <ellipse cx={130} cy={30} rx={120} ry={22} fill={`${fill}55`} stroke={fill} strokeWidth={4} />
    <path d="M10 30 Q20 130 130 132 Q240 130 250 30" fill={`${fill}18`} stroke={CHALK} strokeWidth={4} />
  </svg>
);
/** The tangle: a knotted ball of thread. */
const Tangle: React.FC<{ p: number }> = ({ p }) => (
  <svg width={260} height={260} viewBox="0 0 260 260" style={{ overflow: "visible" }}>
    <DrawPath d="M130 30 C230 40 230 200 130 220 C40 230 20 90 110 70 C200 50 220 170 140 190 C70 205 60 110 130 110 C180 110 170 160 130 160 C100 160 100 130 120 130"
      p={p} color={ROSE} width={5} len={2400} />
    <DrawPath d="M50 140 C60 40 200 30 210 120 C220 210 80 230 60 160" p={p} color={WARM} width={4} len={1200} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const p = c("This is Part");
  return (
    <AbsoluteFill>
      <At x={960} y={300} o={ramp(t, p, 0.6)}><Wd c={GOLD} s={40} serif>Part 1 of 6</Wd></At>
      <At x={960} y={400}><Reveal text="If you think you understand" at={p + 0.6} size={76} /></At>
      <Items items={[
        ["It comes from After Anatta", 960, 540, <Wd c={DIM} s={30}>After Anatta: notes by John Tan (Thusness)</Wd>],
        ["The six parts make one article", 960, 640, <K c={TEAL} s={30}>Dependent Arising: If You Think You Understand, You Don't</K>],
      ]} />
    </AbsoluteFill>
  );
};

const FeynmanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = c("If you think you understand quantum mechanics");
  const da = c("If you think you understand dependent arising");
  return (
    <AbsoluteFill>
      <At x={960} y={260} o={ramp(t, q, 0.5)}><Wd c={CHALK} s={40} serif>"If you think you understand quantum mechanics,</Wd></At>
      <At x={960} y={330} o={ramp(t, q + 1.6, 0.5)}><Wd c={CHALK} s={40} serif>you don't understand quantum mechanics."</Wd></At>
      <Items items={[
        ["Richard Feynman is said to have quipped", 1300, 420, <Wd c={DIM} s={30}>Richard Feynman</Wd>],
        ["The same trap waits here", 960, 560, <Wd c={WARM} s={34}>the same trap</Wd>],
      ]} />
      <At x={960} y={660} o={ramp(t, da, 0.5)}><Wd c={GOLD} s={42} serif>If you think you understand dependent arising,</Wd></At>
      <At x={960} y={730} o={ramp(t, da + 2.0, 0.5)}><Wd c={GOLD} s={42} serif>you don't.</Wd></At>
    </AbsoluteFill>
  );
};

const FormulaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = c("But is it really that straightforward");
  const lines: [string, string, number][] = [
    ["When this is, that is", "when this is, that is", 260],
    ["From the arising of this, that arises", "from the arising of this, that arises", 330],
    ["When this is not, that is not", "when this is not, that is not", 400],
    ["From the ceasing of this, that ceases", "from the ceasing of this, that ceases", 470],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["On paper it sounds straightforward", 960, 140, <Wd c={CHALK} s={38} serif>on paper: straightforward, even safe</Wd>]]} />
      {lines.map(([cue, txt, y]) => (
        <At key={cue} x={960} y={y} o={ramp(t, c(cue), 0.5)}><Wd c={TEAL} s={34} serif>{txt}</Wd></At>
      ))}
      <Items items={[
        ["nothing has an essence of its own", 960, 560, <K c={GOLD} s={28}>many causes and conditions · no essence of its own</K>],
        ["It reads like ordinary cause and effect", 960, 660, <Wd c={DIM} s={30}>like ordinary cause and effect, in an objective world</Wd>],
      ]} />
      <At x={960} y={760} o={ramp(t, q, 0.5)} s={1 + 0.06 * Math.sin(Math.max(0, t - q) * 3) * (1 - ramp(t, q + 2, 1))}>
        <Wd c={GOLD} s={44} serif>Is it really that straightforward?</Wd>
      </At>
      <Items items={[["Take two ordinary examples", 960, 830, <Wd c={CHALK} s={28}>two ordinary examples: an apple, a mountain</Wd>]]} />
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("The first is an apple");
  const solid = c("It feels solid, out there, undeniably objective");
  const but = c("But is it");
  const pause = c("Pause here");
  const where = c("where exactly is this solid, independent apple");
  // a slow toss loop until the pause; the apple hangs still during the search
  const tl = Math.max(0, Math.min(t, pause) - a);
  const fly = (tl * 0.45) % 1;
  const parts: [string, string, number, number, string][] = [
    ["Is it the red I see", "the red I see", 520, 300, RED],
    ["The press on my palm", "the press on my palm", 1400, 300, GOLD],
    ["The weight, the arc through the air", "the weight · the arc", 520, 600, TEAL],
    ["or something behind them", "something behind them?", 1400, 600, DIM],
  ];
  const tossOut = 1 - ramp(t, where, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["The first is an apple", 960, 110, <Wd c={GOLD} s={40} serif>an apple</Wd>]]} />
      <At x={960} y={430} o={ramp(t, a, 0.6) * tossOut}><Toss p={fly} w={1000} /></At>
      <Items items={[
        ["one solid, independent object", 960, 650, <K c={CHALK} s={28}>one solid, independent object: edges, weight, speed</K>, { until: "It feels solid, out there, undeniably objective" }],
        ["This is almost intuitive", 960, 730, <Wd c={DIM} s={28}>almost intuitive: the mind's default</Wd>, { until: "It feels solid, out there, undeniably objective" }],
      ]} />
      <At x={960} y={680} o={ramp(t, solid, 0.5) * (1 - ramp(t, where, 0.4))}>
        <div style={{ display: "flex", gap: 30 }}><K c={RED} s={30}>solid</K><K c={RED} s={30}>out there</K><K c={RED} s={30}>undeniably objective</K></div>
      </At>
      <At x={960} y={790} o={ramp(t, but, 0.4) * (1 - ramp(t, where, 0.4))}><Wd c={GOLD} s={52} serif>But is it?</Wd></At>
      {/* the search: the apple held still, its appearings around it */}
      <At x={960} y={450} o={ramp(t, where, 0.6)}>
        <div style={{ position: "relative" }}><Apple size={240} glow={0.8} /></div>
      </At>
      <Items items={[["where exactly is this solid, independent apple", 960, 160, <Wd c={CHALK} s={36} serif>where exactly is this solid, independent apple?</Wd>]]} />
      {parts.map(([cue, txt, x, y, col]) => (
        <React.Fragment key={cue}>
          <At x={x} y={y} o={ramp(t, c(cue), 0.5)}><K c={col} s={30}>{txt}</K></At>
          <Flow x1={x < 960 ? x + 150 : x - 150} y1={y} x2={x < 960 ? 840 : 1080} y2={450} color={col} p={ramp(t, c(cue) + 0.2, 0.7)} pulses={false} />
        </React.Fragment>
      ))}
      <At x={960} y={760} o={ramp(t, c("or something behind them") + 1.2, 0.5)}><Wd c={DIM} s={28}>any one? all together? behind them?</Wd></At>
    </AbsoluteFill>
  );
};

const FoundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nf = c("Looked for, that solid apple is not found");
  const many = c("many appearings met together");
  const works = c("And the apple works perfectly in the hand");
  const apps: [string, string, number][] = [["shapes and colours", RED, 360], ["the press on the palm", GOLD, 960], ["the arc of the motion", TEAL, 1560]];
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, nf, 0.5)}><Struck strikeAt={nf + 1.6}><Wd c={DIM} s={38} serif>a solid, independent apple</Wd></Struck></At>
      {apps.map(([n, col, x], i) => (
        <At key={n} x={x} y={280} o={ramp(t, many + 0.5 * i, 0.5)}><K c={col} s={28}>{n}</K></At>
      ))}
      {apps.map(([n, col, x], i) => (
        <Flow key={n + "f"} x1={x} y1={310} x2={960} y2={420} color={col} p={ramp(t, c("They are gathered as one apple by designation") + 0.2 * i, 0.8)} pulses={false} />
      ))}
      <At x={960} y={480} o={ramp(t, c("They are gathered as one apple by designation"), 0.5)}><Apple size={150} glow={0.7} /></At>
      <Items items={[
        ["They are gathered as one apple by designation", 1300, 470, <Wd c={GOLD} s={30}>"apple": designated, quick and smooth</Wd>],
        ["And the apple works perfectly in the hand", 600, 470, <K c={GREEN} s={28}>it works: gravity, momentum</K>],
        ["no substrate under it", 960, 620, <SK c={DIM} s={28} strikeAt={c("no substrate under it") + 0.6}>apple-ness inside · a substrate under it</SK>],
        ["The shapes, the pressure and the motion are not a bottom layer", 960, 700, <SK c={DIM} s={28} strikeAt={c("The shapes, the pressure and the motion are not a bottom layer") + 2.2}>a bottom layer of shapes and pressures</SK>],
        ["So I am not catching a fiction", 960, 790, <Wd c={CHALK} s={32}>not a fiction</Wd>, { until: "exists only conventionally, and works" }],
        ["exists only conventionally, and works", 960, 790, <Wd c={GOLD} s={36} serif>an apple that exists only conventionally, and works</Wd>],
      ]} />
      <At x={960} y={0} o={ramp(t, works, 0.5) * 0}><span /></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const habit = c("As the habit sees it");
  const fly = ((Math.max(0, t - habit)) * 0.4) % 1;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Let me go through the whole toss", 960, 110, <Wd c={GOLD} s={40} serif>the whole toss, looked at twice</Wd>],
        ["Look at it twice", 960, 190, <Wd c={DIM} s={28}>as the habit sees it · as it actually occurs</Wd>, { until: "As the habit sees it" }],
        ["As the habit sees it", 960, 190, <Wd c={RED} s={32}>as the habit sees it</Wd>],
      ]} />
      <At x={960} y={440} o={ramp(t, habit, 0.6)}><Toss p={fly} w={1000} color={RED} /></At>
      <Items items={[
        ["As the habit sees it", 960, 640, <K c={RED} s={28}>a solid apple, owning its shape, colour, weight and smell</K>, { d: 1 }],
        ["A solid thrower sends it", 560, 290, <K c={RED} s={26}>solid thrower</K>],
        ["A solid thrower sends it", 1360, 290, <K c={RED} s={26}>solid receiver</K>, { d: 1.2 }],
        ["I call this the inherent framework", 960, 730, <Wd c={GOLD} s={34} serif>the inherent framework, the matrix</Wd>],
        ["It is a habit in the body", 960, 810, <Wd c={CHALK} s={28}>not a thought I hold: a habit in the body, before thought</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OccursScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const now = c("Now look at the moment directly");
  const cols: [string, string, string, string, number][] = [
    ["The touch and the density", "touch and density", "skin · nerve · pressure · resistance", GOLD, 420],
    ["The shape and the colour", "shape and colour", "light · eye · angle of seeing", RED, 960],
    ["The scent, where what drifts", "scent", "what drifts · the nose", GREEN, 1500],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["Now look at the moment directly", 960, 110, <Wd c={TEAL} s={38} serif>as it actually occurs</Wd>]]} />
      <At x={960} y={230} o={ramp(t, now + 0.8, 0.5)}><Struck strikeAt={now + 3}><K c={DIM} s={28}>one apple-entity behind it</K></Struck></At>
      {cols.map(([cue, name, conds, col, x]) => (
        <React.Fragment key={cue}>
          <At x={x} y={400} o={ramp(t, c(cue), 0.5)}><K c={col} s={32}>{name}</K></At>
          <At x={x} y={480} o={ramp(t, c(cue) + 0.6, 0.5)}><Wd c={CHALK} s={24}>{conds}</Wd></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Now look at the moment directly", 960, 320, <Wd c={CHALK} s={28}>many dependent arisings, at once</Wd>, { d: 2 }],
        ["None of these belongs to a hidden apple core", 960, 620, <SK c={DIM} s={28} strikeAt={c("None of these belongs to a hidden apple core") + 1.4}>a hidden apple core underneath</SK>],
        ["The conditions themselves are the appearing", 960, 730, <Wd c={GOLD} s={36} serif>the conditions themselves are the appearing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const b = c("Its basis is the colour");
  const more = c("I find only more bases");
  const basis: [string, string][] = [["colour", RED], ["shape", ROSE], ["touch", GOLD], ["what it is for", TEAL]];
  const layers = ["cells", "molecules", "tones of colour", "..."];
  return (
    <AbsoluteFill>
      <Items items={[["The apple is designated on a basis", 960, 110, <Wd c={GOLD} s={40} serif>designated on a basis</Wd>]]} />
      <At x={960} y={250} o={ramp(t, b - 0.6, 0.5)}><div style={{ position: "relative" }}><Apple size={120} glow={0.6} /></div></At>
      <Items items={[["The apple is designated on a basis", 1340, 250, <Wd c={DIM} s={26}>as a chariot on wheels, axle, frame</Wd>]]} />
      {basis.map(([n, col], i) => (
        <At key={n} x={480 + i * 320} y={400} o={ramp(t, b + 0.5 * i, 0.5)}><K c={col} s={28}>{n}</K></At>
      ))}
      <Items items={[["cuts experience into a unit", 960, 490, <Wd c={CHALK} s={28}>"apple": a unit cut, to toss, catch and eat</Wd>]]} />
      {layers.map((n, i) => (
        <At key={n} x={960} y={570 + i * 58} o={ramp(t, more + 0.6 * i, 0.5)}><Wd c={DIM} s={28}>{i < 3 ? `${n}: designated in turn` : n}</Wd></At>
      ))}
      <At x={1440} y={680} o={ramp(t, c("No bottom brick is ever reached"), 0.5)}>
        <SK c={WARM} s={28} strikeAt={c("No bottom brick is ever reached") + 1}>a bottom brick</SK>
      </At>
    </AbsoluteFill>
  );
};

const WorksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const w = c("Then why does the toss still work");
  const fly = ((Math.max(0, t - w)) * 0.45) % 1;
  return (
    <AbsoluteFill>
      <Items items={[["Then why does the toss still work", 960, 110, <Wd c={CHALK} s={38} serif>why does the toss still work?</Wd>]]} />
      <At x={960} y={380} o={ramp(t, w, 0.6)}><Toss p={fly} w={900} color={TEAL} appleDashed /></At>
      <Items items={[
        ["This is causal efficacy without causal power", 960, 600, <Wd c={GOLD} s={40} serif>causal efficacy without causal power</Wd>],
        ["This is causal efficacy without causal power", 960, 690, <div style={{ display: "flex", gap: 40 }}><K c={GREEN} s={28}>conditions condition: kept</K><SK c={DIM} s={28} strikeAt={c("This is causal efficacy without causal power") + 3}>a power in the cause</SK></div>, { d: 1.2 }],
        ["The meeting of conditions is the working", 960, 790, <Wd c={TEAL} s={32}>the meeting of conditions is the working, completely</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ThrowerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("The thrower is singled out the same way");
  const steps = ["intention arises", "muscles contract", "momentum carries", "the apple moves"];
  const hand = c("Look for the hand");
  const one = c("are designated together, as one event");
  const first = 1 - ramp(t, hand, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["The thrower is singled out the same way", 960, 110, <Wd c={GOLD} s={40} serif>the thrower, singled out the same way</Wd>]]} />
      {steps.map((n, i) => (
        <At key={n} x={390 + i * 380} y={280} o={ramp(t, c("Intention arises, muscles contract") + 0.6 * i, 0.5) * first}><K c={TEAL} s={28}>{n}</K></At>
      ))}
      <At x={960} y={420} o={ramp(t, c("No little me sits inside the head"), 0.5) * first}>
        <SK c={DIM} s={30} strikeAt={c("No little me sits inside the head") + 1.4}>a little me inside, pulling the levers</SK>
      </At>
      <Items items={[
        ["The wind blows with no wind apart from the blowing", 960, 540, <Wd c={ICE} s={32}>the wind is the blowing; the throwing, no thrower behind it</Wd>, { until: "Look for the hand" }],
        ["Look for the hand", 960, 260, <Wd c={CHALK} s={30}>hand: fingers · palm · bones · muscles · nerves</Wd>, { until: "are designated together, as one event" }],
        ["No ultimate thrower is reached", 960, 360, <SK c={DIM} s={28} strikeAt={c("No ultimate thrower is reached") + 0.8}>an ultimate thrower</SK>, { until: "are designated together, as one event" }],
      ]} />
      {["thrower", "apple", "tossing", "receiver"].map((n, i) => (
        <At key={n} x={480 + i * 320} y={300} o={ramp(t, one + 0.3 * i, 0.5)}><K c={GOLD} s={30}>{n}</K></At>
      ))}
      <Items items={[
        ["are designated together, as one event", 960, 400, <Wd c={GOLD} s={32} serif>designated together, as one event: none comes first</Wd>, { d: 1 }],
        ["But nobody disappears", 960, 560, <Wd c={CHALK} s={32}>but nobody disappears</Wd>],
        ["the mere I", 960, 650, <K c={GREEN} s={30}>the mere I: tosses apples, keeps promises, catches the bus</K>],
      ]} />
      <At x={960} y={0} o={ramp(t, s, 0.5) * 0}><span /></At>
    </AbsoluteFill>
  );
};

const TossTasteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const d = c("And the toss tastes different");
  const fly = ((Math.max(0, t - d)) * 0.35) % 1;
  return (
    <AbsoluteFill>
      <Items items={[["And the toss tastes different", 960, 110, <Wd c={GOLD} s={40} serif>what the toss tastes like</Wd>]]} />
      <At x={960} y={340} o={ramp(t, d, 0.6) * (1 - ramp(t, c("For the same apple held to the five elements"), 0.5))}><Toss p={fly} w={820} color={GOLD} /></At>
      <Items items={[
        ["Centerless", 480, 560, <K c={TEAL} s={30}>centerless</K>, { until: "For the same apple held to the five elements" }],
        ["Effortless", 960, 560, <K c={GREEN} s={30}>effortless</K>, { until: "For the same apple held to the five elements" }],
        ["Seamless and intimate", 1440, 560, <K c={VIOLET} s={30}>seamless and intimate</K>, { until: "For the same apple held to the five elements" }],
        ["Yet nothing merges", 960, 680, <Wd c={CHALK} s={30}>not merged: the throw stays the throw, the catch the catch</Wd>, { until: "For the same apple held to the five elements" }],
        ["For the same apple held to the five elements", 960, 420, <Wd c={DIM} s={30}>the same apple, held to the five elements:</Wd>],
        ["For the same apple held to the five elements", 960, 510, <K c={GOLD} s={40}>video: 5 Elements: Chinese vs Tibet</K>, { d: 1.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const MountainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const m = c("The second example is a mountain");
  const look = c("But look for the mountain among the rocks");
  const parts: [string, number, number][] = [["rocks", 420, 330], ["soil", 420, 450], ["height", 1500, 330], ["tree line", 1500, 450]];
  return (
    <AbsoluteFill>
      <Items items={[
        ["The second example is a mountain", 960, 110, <Wd c={GOLD} s={40} serif>a mountain: does it exist?</Wd>],
        ["It is a massive, immovable fact of geology", 960, 190, <Wd c={CHALK} s={28}>yes: a massive, immovable fact of geology</Wd>, { until: "But look for the mountain among the rocks" }],
      ]} />
      <At x={960} y={420} o={ramp(t, m, 0.6)}><Mountain w={560} /></At>
      {parts.map(([n, x, y], i) => (
        <At key={n} x={x} y={y} o={ramp(t, look + 0.4 * i, 0.5)}><K c={DIM} s={28}>{n}</K></At>
      ))}
      <Items items={[
        ["But look for the mountain among the rocks", 960, 190, <Wd c={CHALK} s={28}>not among them</Wd>, { d: 2.2 }],
        ["it is not apart from them", 960, 650, <Wd c={CHALK} s={28}>and not apart from them</Wd>],
        ["This does not make it imaginary", 600, 740, <K c={GREEN} s={28}>not imaginary: it stops the climber</K>],
        ["no mountain comes with its edges drawn by nature", 1340, 740, <SK c={WARM} s={28} strikeAt={c("no mountain comes with its edges drawn by nature") + 1.8}>edges drawn by nature</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const CreaturesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const not4 = c("This is not four creatures looking");
  const out = 1 - ramp(t, not4, 0.5);
  const cols: [string, React.ReactNode, string, number][] = [
    ["I see a bounded shape against the sky", <Person color={CHALK} size={130} />, "a shape: summit, slopes, base", 300],
    ["A bat, finding its way by echo", <Bat />, "returning sound, no clean edge", 740],
    ["A bee, seeing in ultraviolet", <Bee />, "ultraviolet, flowers: hardly one thing", 1180],
    ["An ant takes a day to cross one boulder", <Ant />, "grain, warmth, scent trails: never a mountain", 1620],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Does a bat see a mountain", 960, 110, <Wd c={GOLD} s={40} serif>does a bat see a mountain? a bee? an ant?</Wd>],
        ["the answers will not match", 960, 190, <Wd c={DIM} s={28}>the answers do not match, because the worlds do not match</Wd>, { until: "This is not four creatures looking" }],
      ]} />
      {cols.map(([cue, icon, txt, x]) => (
        <React.Fragment key={cue}>
          <At x={x} y={380} o={ramp(t, c(cue), 0.5) * (0.35 + 0.65 * out)}>{icon}</At>
          <At x={x} y={520} o={ramp(t, c(cue) + 0.6, 0.5) * out}><Wd c={CHALK} s={23}>{txt}</Wd></At>
        </React.Fragment>
      ))}
      <At x={960} y={560} o={ramp(t, not4, 0.5)}><SK c={DIM} s={28} strikeAt={not4 + 2}>four creatures, one ready-made mountain, four angles</SK></At>
      <Items items={[
        ["Body and world arise together", 960, 680, <Wd c={GOLD} s={40} serif>body and world arise together</Wd>],
        ["Body and world arise together", 960, 770, <Wd c={CHALK} s={28}>a different body singles out a different world</Wd>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const GivenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const given = c("That is the given");
  const meas = c("Nor is measuring a view from nowhere");
  const first = 1 - ramp(t, meas, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["The usual reply is that the mountain is there all the same", 960, 110, <Wd c={DIM} s={32} serif>"there all the same; only the experiences differ"</Wd>],
      ]} />
      <At x={960} y={330} o={ramp(t, c("That reply slips in a noun"), 0.5) * first}>
        <div style={{ position: "relative" }}><Mountain w={360} dashed /><Strike at={given + 1.5} /></div>
      </At>
      <Items items={[
        ["That reply slips in a noun", 960, 500, <Wd c={CHALK} s={28}>a noun slipped in: the mountain, finished before anything meets it</Wd>, { until: "Nor is measuring a view from nowhere" }],
        ["That is the given", 960, 570, <Wd c={WARM} s={36} serif>the given</Wd>, { until: "Nor is measuring a view from nowhere" }],
        ["If the hidden mountain has a summit and slopes", 560, 680, <K c={DIM} s={24}>features? then why do bat and ant meet none?</K>, { until: "Nor is measuring a view from nowhere" }],
        ["If it has no features at all", 1380, 680, <K c={DIM} s={24}>no features? then not what they all meet</K>, { until: "Nor is measuring a view from nowhere" }],
        ["Nor is measuring a view from nowhere", 960, 250, <Wd c={CHALK} s={32}>metres and maps: a human channel of contact</Wd>],
        ["like instruments with the same calibration", 960, 350, <K c={TEAL} s={28}>agreement: alike bodies, alike instruments</K>],
        ["a rockfall can crush it", 960, 450, <K c={WARM} s={28}>the ant is not cut off: a rockfall can crush it</K>],
        ["So it is not one objective mountain", 960, 560, <SK c={DIM} s={28} strikeAt={c("So it is not one objective mountain") + 1.6}>one objective mountain, many subjective pictures</SK>],
        ["The mountain, the one who meets it", 960, 670, <div style={{ display: "flex", gap: 30 }}><K c={VIOLET} s={28}>the mountain</K><K c={CHALK} s={28}>the one who meets it</K><K c={TEAL} s={28}>the channel</K></div>],
        ["The mountain, the one who meets it", 960, 770, <Wd c={GOLD} s={32} serif>designated together; none the bedrock</Wd>, { d: 2.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const LookAwayScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("Two claims sound almost the same");
  const end = c("everything is unfindable, and works perfectly all the same");
  const pre = 1 - ramp(t, end, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["When no one is looking, is the mountain there", 960, 110, <Wd c={GOLD} s={40} serif>when no one is looking, is it there?</Wd>, { until: "everything is unfindable, and works perfectly all the same" }]]} />
      <At x={960} y={300} o={ramp(t, two, 0.5) * pre}><Mountain w={320} /></At>
      <Items items={[
        ["is still there when I look away and look back", 540, 500, <K c={GREEN} s={28}>still there when I look back: true</K>, { until: "everything is unfindable, and works perfectly all the same" }],
        ["is still there when I look away and look back", 540, 570, <Wd c={CHALK} s={24}>conventional: look again, others see it, the road</Wd>, { d: 2, until: "everything is unfindable, and works perfectly all the same" }],
        ["exists from its own side", 1380, 500, <SK c={DIM} s={28} strikeAt={c("exists from its own side") + 3}>exists from its own side</SK>, { until: "everything is unfindable, and works perfectly all the same" }],
        ["exists from its own side", 1380, 570, <Wd c={CHALK} s={24}>never earned</Wd>, { d: 3, until: "everything is unfindable, and works perfectly all the same" }],
        ["But reliability is not independence", 960, 680, <Wd c={GOLD} s={36} serif>reliability is not independence</Wd>, { until: "everything is unfindable, and works perfectly all the same" }],
        ["That line keeps me out of two mistakes", 960, 780, <div style={{ display: "flex", gap: 40 }}><SK c={DIM} s={24} strikeAt={c("That line keeps me out of two mistakes") + 2}>an illusion</SK><SK c={DIM} s={24} strikeAt={c("That line keeps me out of two mistakes") + 4}>exists on its own</SK></div>, { until: "everything is unfindable, and works perfectly all the same" }],
      ]} />
      <At x={600} y={380} o={ramp(t, end, 0.5)}><Apple size={160} /></At>
      <At x={1320} y={360} o={ramp(t, end + 0.5, 0.5)}><Mountain w={360} /></At>
      <At x={960} y={620}><Reveal text="unfindable, and works perfectly all the same" at={end + 1} size={50} speed={0.03} /></At>
    </AbsoluteFill>
  );
};

const AnandaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const deep = c("This dependent arising is deep, and it appears deep");
  return (
    <AbsoluteFill>
      <Items items={[
        ["I am not the first to say", 960, 110, <Wd c={GOLD} s={38} serif>the Buddha's warning</Wd>],
        ["I am not the first to say", 960, 180, <Wd c={DIM} s={26}>Mahānidāna Sutta, Long Discourses (DN 15)</Wd>, { d: 1 }],
        ["tells the Buddha how wonderful it is", 960, 290, <Wd c={CHALK} s={30}>Ānanda: "so deep, yet to me as plain as can be"</Wd>],
        ["The Buddha stops him", 960, 380, <Wd c={CHALK} s={32} serif>"Do not say so, Ānanda.</Wd>],
      ]} />
      <At x={960} y={470}><Reveal text="This dependent arising is deep, and it appears deep." at={deep} size={50} speed={0.03} /></At>
      <At x={760} y={680} o={ramp(t, c("tangled like a knotted ball of thread"), 0.5)}><Tangle p={ramp(t, c("tangled like a knotted ball of thread"), 2)} /></At>
      <Items items={[
        ["tangled like a knotted ball of thread", 1240, 640, <Wd c={ROSE} s={28}>tangled like a knotted ball of thread</Wd>],
        ["was his closest attendant", 1240, 720, <Wd c={CHALK} s={26}>his closest attendant, told: not yet understood</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GivenArticleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const views: [string, string, string, number][] = [
    ["A human sees water", "human: water", ICE, 360],
    ["a hungry ghost sees pus", "hungry ghost: pus", WARM, 760],
    ["a fish sees its home", "fish: its home", TEAL, 1160],
    ["a god sees nectar", "god: nectar", GOLD, 1560],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["At this point, read my article", 960, 130, <Wd c={CHALK} s={32}>at this point, read my article</Wd>],
        ["At this point, read my article", 960, 220, <K c={GOLD} s={42}>The Illusion of the Given</K>, { d: 1, pop: true }],
      ]} />
      <At x={960} y={420} o={ramp(t, c("It starts from one bowl of liquid"), 0.5)}><Bowl /></At>
      {views.map(([cue, txt, col, x]) => (
        <At key={cue} x={x} y={600} o={ramp(t, c(cue), 0.5)}><K c={col} s={28}>{txt}</K></At>
      ))}
      <Items items={[
        ["a god sees nectar", 960, 700, <Wd c={DIM} s={26}>agreement needs no hidden substance underneath</Wd>, { d: 1.2 }],
        ["Then come back here", 960, 790, <Wd c={CHALK} s={30}>then come back here</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DefineScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const links = c("it is the twelve links");
  const fwd = c("In forward order"), rev = c("In reverse order");
  const n = 12;
  const out = 1 - ramp(t, c("reads the word itself"), 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now the two words, as the tradition defines them", 960, 110, <Wd c={GOLD} s={38} serif>as the tradition defines them</Wd>],
        ["Dependent arising is arising in dependence on causes and conditions", 960, 200, <Wd c={CHALK} s={30}>dependent arising: arising in dependence on causes and conditions</Wd>],
      ]} />
      {Array.from({ length: n }).map((_, i) => {
        const x = 300 + i * 120;
        return (
          <React.Fragment key={i}>
            <At x={x} y={340} o={ramp(t, links + 0.12 * i, 0.4) * out}>
              <div style={{ width: 70, height: 70, borderRadius: 35, border: `3px solid ${TEAL}`, background: `${TEAL}22`, boxShadow: `0 0 16px ${TEAL}66` }} />
            </At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["it is the twelve links", 300, 420, <Wd c={DIM} s={24}>ignorance</Wd>, { until: "reads the word itself" }],
        ["it is the twelve links", 1620, 420, <Wd c={DIM} s={24}>ageing and death</Wd>, { until: "reads the word itself" }],
        ["In forward order", 960, 480, <Wd c={WARM} s={28}>forward: how suffering comes about →</Wd>, { until: "reads the word itself" }],
        ["In reverse order", 960, 540, <Wd c={GREEN} s={28}>← reverse: how it ends</Wd>, { until: "reads the word itself" }],
        ["reads the word itself", 960, 330, <div style={{ display: "flex", gap: 30 }}><K c={TEAL} s={30}>pratītya: meeting, depending</K><K c={GOLD} s={30}>samutpāda: arising</K></div>],
        ["reads the word itself", 960, 410, <Wd c={DIM} s={24}>Candrakīrti</Wd>, { d: 0.8 }],
        ["widens it to every phenomenon", 960, 510, <Wd c={CHALK} s={28}>Madhyamaka: every phenomenon; so no nature of its own</Wd>],
        ["sets out three levels of dependence", 960, 610, <Wd c={DIM} s={24}>Tsongkhapa: three levels of dependence</Wd>],
        ["sets out three levels of dependence", 960, 690, <div style={{ display: "flex", gap: 24 }}><K c={TEAL} s={26}>causes and conditions</K><K c={GOLD} s={26}>parts</K><K c={VIOLET} s={26}>designation (subtlest)</K></div>, { d: 0.8 }],
      ]} />
      <At x={960} y={0} o={ramp(t, fwd + rev, 0.5) * 0}><span /></At>
    </AbsoluteFill>
  );
};

const DesignScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const floor = c("takes that floor away");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Designation is naming, by word and concept, on a basis", 960, 110, <Wd c={GOLD} s={38} serif>designation: naming on a basis</Wd>],
        ["Designation is naming, by word and concept, on a basis", 960, 180, <Wd c={DIM} s={24}>prajñapti · btags pa · basis of designation: gdags gzhi</Wd>, { d: 1 }],
        ["used it to sort what exists", 600, 290, <K c={CHALK} s={26}>designated only: chariot · person · forest</K>, { until: "Depending and being designated are one fact" }],
        ["The final units, they said, exist substantially", 1360, 290, <div style={{ position: "relative" }}><K c={DIM} s={26}>final units: substantial</K><Strike at={floor + 0.8} /></div>, { until: "Depending and being designated are one fact" }],
        ["used it to sort what exists", 960, 360, <Wd c={DIM} s={22}>the Abhidharma's sorting</Wd>, { until: "Depending and being designated are one fact" }],
        ["takes that floor away", 960, 450, <Wd c={WARM} s={32}>the floor taken away: the units are designated too</Wd>, { until: "Depending and being designated are one fact" }],
        ["In one verse he joins the two words", 960, 560, <Wd c={CHALK} s={28} serif>what arises in dependence is emptiness,</Wd>, { until: "Depending and being designated are one fact" }],
        ["In one verse he joins the two words", 960, 620, <Wd c={CHALK} s={28} serif>a designation in dependence, the middle way</Wd>, { d: 1.5, until: "Depending and being designated are one fact" }],
        ["In one verse he joins the two words", 960, 690, <Wd c={DIM} s={22}>Nāgārjuna, MMK 24.18</Wd>, { d: 2, until: "Depending and being designated are one fact" }],
        ["Depending and being designated are one fact", 960, 360, <div style={{ display: "flex", gap: 30, alignItems: "center" }}><K c={TEAL} s={32}>depending</K><Wd c={GOLD} s={34}>=</Wd><K c={GOLD} s={32}>designated</K></div>],
        ["Depending and being designated are one fact", 960, 450, <Wd c={CHALK} s={28}>one fact, two sides</Wd>, { d: 1 }],
        ["The concept that designates is singled out too", 960, 580, <SK c={DIM} s={26} strikeAt={c("The concept that designates is singled out too") + 0.4}>the chariot, a thing in the mind</SK>],
        ["The concept that designates is singled out too", 960, 670, <Wd c={GOLD} s={30}>the designating concept is singled out too</Wd>, { d: 1 }],
      ]} />
    </AbsoluteFill>
  );
};

const InsightScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const six = c("Centerless, mutual, seamless, effortless and intimate");
  const q: [string, string][] = [["centerless", TEAL], ["mutual", GOLD], ["seamless", ICE], ["effortless", GREEN], ["intimate", VIOLET]];
  return (
    <AbsoluteFill>
      <Items items={[
        ["I keep these definitions", 960, 110, <Wd c={GOLD} s={36} serif>I keep these definitions</Wd>],
        ["does not mean production", 960, 200, <SK c={DIM} s={28} strikeAt={c("does not mean production") + 0.8}>arising = production</SK>],
        ["does not mean production", 960, 280, <Wd c={CHALK} s={26}>conditions meet and this appears; nothing born from its own side</Wd>, { d: 1.5 }],
        ["In practice, these words open into many key insights", 960, 370, <Wd c={TEAL} s={30}>in practice: many key insights</Wd>],
        ["we do not live in the wisdom of dependent arising", 960, 450, <Wd c={DIM} s={28}>we do not yet live in its wisdom</Wd>],
        ["every experience would be vividly appearing yet unfindable", 960, 550, <Wd c={GOLD} s={38} serif>vividly appearing yet unfindable</Wd>],
        ["every experience would be vividly appearing yet unfindable", 960, 615, <Wd c={DIM} s={24}>med par gsal snang</Wd>, { d: 1.5 }],
      ]} />
      {q.map(([n, col], i) => (
        <At key={n} x={440 + i * 260} y={720} o={ramp(t, six + 0.4 * i, 0.5)}><K c={col} s={28}>{n}</K></At>
      ))}
    </AbsoluteFill>
  );
};

const ExtremesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const e = c("No ceasing and no arising");
  const pairs = ["ceasing · arising", "annihilation · permanence", "coming · going", "difference · identity"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["And it is stranger than it sounds", 960, 110, <Wd c={GOLD} s={42} serif>stranger than it sounds</Wd>],
        ["free of eight extremes", 960, 210, <Wd c={CHALK} s={32}>free of eight extremes</Wd>],
      ]} />
      {pairs.map((p, i) => (
        <At key={p} x={i % 2 ? 1300 : 620} y={330 + Math.floor(i / 2) * 110} o={ramp(t, e + 1.1 * i, 0.5)}>
          <SK c={DIM} s={30} strikeAt={e + 1.1 * i + 0.8}>{p}</SK>
        </At>
      ))}
      <Items items={[
        ["free of eight extremes", 960, 600, <Wd c={DIM} s={24}>Nāgārjuna, opening verses</Wd>, { d: 1 }],
        ["cannot really come from anywhere", 960, 700, <Wd c={CHALK} s={30}>no nature of its own: from nowhere, to nowhere</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const r = c("A rainbow appears with brilliant clarity");
  const long = c("Is long long in itself");
  const out = 1 - ramp(t, long, 0.5);
  const each = c("They make each other");
  return (
    <AbsoluteFill>
      <Items items={[["What arises in dependence appears vividly", 960, 110, <Wd c={GOLD} s={38} serif>vivid, and nowhere</Wd>, { until: "Is long long in itself" }]]} />
      <At x={960} y={420} o={ramp(t, r, 0.5) * out}><Rainbow p={ramp(t, r, 2.5)} w={760} /></At>
      <Items items={[
        ["A rainbow appears with brilliant clarity", 960, 560, <SK c={DIM} s={26} strikeAt={r + 3.5}>a rainbow-essence in droplets or light</SK>, { d: 2.2, until: "Is long long in itself" }],
        ["Vividness and unfindability are not opposites", 960, 680, <Wd c={GOLD} s={36} serif>vividness and unfindability: the same fact</Wd>, { until: "Is long long in itself" }],
        ["Is long long in itself", 960, 150, <Wd c={CHALK} s={38} serif>long and short</Wd>],
      ]} />
      <At x={960} y={330} o={ramp(t, long + 0.5, 0.5)}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}><div style={{ width: 600 * ramp(t, long + 0.5, 1), height: 14, background: TEAL, borderRadius: 7, boxShadow: `0 0 16px ${TEAL}` }} /><Wd c={TEAL} s={30}>long</Wd></div>
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}><div style={{ width: 240 * ramp(t, long + 1, 1), height: 14, background: GOLD, borderRadius: 7, boxShadow: `0 0 16px ${GOLD}` }} /><Wd c={GOLD} s={30}>short</Wd></div>
        </div>
      </At>
      <At x={960} y={500} o={ramp(t, each, 0.5)}><Wd c={CHALK} s={32}>each only beside the other: they make each other</Wd></At>
    </AbsoluteFill>
  );
};

const MindScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const w = c("where is the mind");
  return (
    <AbsoluteFill>
      <Items items={[
        ["A subject is a subject only with an object to know", 960, 120, <Wd c={GOLD} s={38} serif>subject and object</Wd>],
        ["A subject is a subject only with an object to know", 640, 320, <K c={VIOLET} s={32}>subject</K>, { d: 0.5 }],
        ["A subject is a subject only with an object to know", 1280, 320, <K c={TEAL} s={32}>object</K>, { d: 1 }],
      ]} />
      <Flow x1={760} y1={320} x2={1160} y2={320} color={GOLD} p={ramp(t, c("A subject is a subject only with an object to know") + 1.4, 0.8)} />
      <Items items={[
        ["where is the mind", 960, 450, <SK c={DIM} s={28} strikeAt={w + 1}>a mind standing apart, with no object</SK>],
        ["Mind is a word for the knowing side of appearing", 960, 560, <Wd c={CHALK} s={30}>"mind": the knowing side of appearing</Wd>],
        ["Mind is a word for the knowing side of appearing", 960, 640, <Wd c={DIM} s={26}>as empty as what it knows</Wd>, { d: 2.5 }],
        ["Mind is a word for the knowing side of appearing", 960, 720, <SK c={DIM} s={26} strikeAt={c("Mind is a word for the knowing side of appearing") + 6.5}>the stuff everything is made of</SK>, { d: 4.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const CauseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const f = c("We picture a force");
  const np = c("no power passes between them");
  const pat = c("Things come about in dependable patterns");
  const first = 1 - ramp(t, pat, 0.5);
  const push = ramp(t, f + 0.8, 1.4);
  return (
    <AbsoluteFill>
      <Items items={[["Then what is cause and effect", 960, 110, <Wd c={GOLD} s={40} serif>then what is cause and effect?</Wd>]]} />
      <At x={640} y={330} o={ramp(t, f, 0.5) * first}><div style={{ position: "relative" }}><K c={DIM} s={36}>A</K><Strike at={np + 0.4} /></div></At>
      <At x={1280} y={330} o={ramp(t, f + 0.3, 0.5) * first}><div style={{ position: "relative" }}><K c={DIM} s={36}>B</K><Strike at={np + 0.8} /></div></At>
      <At x={700 + 520 * push} y={330} o={ramp(t, f + 0.8, 0.3) * (1 - ramp(t, np + 1.2, 0.5)) * first}>
        <div style={{ position: "relative" }}><K c={WARM} s={24}>power</K><Strike at={np + 1.2} /></div>
      </At>
      <Items items={[
        ["We picture a force", 960, 450, <Wd c={DIM} s={26}>a hidden power, pushed from A into B</Wd>, { until: "Things come about in dependable patterns" }],
        ["Things come about in dependable patterns", 960, 280, <Wd c={TEAL} s={32}>dependable patterns, nothing standing by itself enforcing them</Wd>],
        ["Things come about in dependable patterns", 960, 370, <Wd c={GOLD} s={36} serif>causal efficacy without causal power</Wd>, { d: 2.5 }],
        ["because things are empty, they can arise", 960, 480, <Wd c={CHALK} s={30}>because empty, they can arise, change and work</Wd>],
        ["because things are empty, they can arise", 960, 545, <Wd c={DIM} s={22}>MMK 24.14</Wd>, { d: 1 }],
        ["That does not make emptiness a source", 960, 640, <SK c={DIM} s={28} strikeAt={c("That does not make emptiness a source") + 1}>emptiness as a source</SK>],
        ["Being empty and arising in dependence are one fact", 960, 740, <Wd c={GOLD} s={34} serif>empty and arising in dependence: one fact</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nx = c("Next: what dependent arising says");
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, c("All views and understanding here are my own"), 0.6) * (1 - ramp(t, nx, 0.5))}>
        <div style={{ maxWidth: 1200, whiteSpace: "normal" }}>
          <Wd c={CHALK} s={30}>All views and understanding here are my own,</Wd>
          <div style={{ height: 14 }} />
          <Wd c={CHALK} s={30}>from my practice and contemplation.</Wd>
          <div style={{ height: 14 }} />
          <Wd c={DIM} s={28}>I do not represent any tradition, school or teacher.</Wd>
        </div>
      </At>
      <At x={960} y={340} o={ramp(t, nx, 0.6)}><Wd c={DIM} s={34}>Next</Wd></At>
      <At x={960} y={440}><Reveal text="Part 2: What dependent arising says" at={nx + 0.3} size={60} speed={0.03} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["This is Part", "dusk", <OpenScene />],
    ["If you think you understand quantum mechanics", "deep", <FeynmanScene />],
    ["On paper it sounds straightforward", "search", <FormulaScene />],
    ["The first is an apple", "orchard", <AppleScene />],
    ["Looked for, that solid apple is not found", "search", <FoundScene />],
    ["Let me go through the whole toss", "doubt", <HabitScene />],
    ["Now look at the moment directly", "jade", <OccursScene />],
    ["The apple is designated on a basis", "light", <BasisScene />],
    ["Then why does the toss still work", "jade", <WorksScene />],
    ["The thrower is singled out the same way", "deep", <ThrowerScene />],
    ["And the toss tastes different", "orchard", <TossTasteScene />],
    ["The second example is a mountain", "peak", <MountainScene />],
    ["Does a bat see a mountain", "night", <CreaturesScene />],
    ["The usual reply is that the mountain is there all the same", "doubt", <GivenScene />],
    ["When no one is looking, is the mountain there", "peak", <LookAwayScene />],
    ["I am not the first to say", "dusk", <AnandaScene />],
    ["At this point, read my article", "light", <GivenArticleScene />],
    ["Now the two words, as the tradition defines them", "search", <DefineScene />],
    ["Designation is naming, by word and concept, on a basis", "deep", <DesignScene />],
    ["I keep these definitions", "jade", <InsightScene />],
    ["And it is stranger than it sounds", "doubt", <ExtremesScene />],
    ["What arises in dependence appears vividly", "light", <VividScene />],
    ["A subject is a subject only with an object to know", "deep", <MindScene />],
    ["Then what is cause and effect", "search", <CauseScene />],
    ["All views and understanding here are my own", "night", <CloseScene />],
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
