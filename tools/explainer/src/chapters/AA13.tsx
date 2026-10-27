// After Anatta · The Logic: The Limits of the Tools (thusness-website after-anatta/limits.html).
// Arc: rain on a roof, vivid and never still -> the words come out flat -> the tools were made for daily life, and a
// tool that cannot show something shows something else -> three features: vivid and moving, not found, following
// conditions -> picking out cannot hold what never stands still; the trap of a raw layer under the concepts -> cause
// turned into production (the factory, struck); the three senses of cause -> the bell: the ringing is the meeting of
// its conditions; change one and a different vividness -> verbs -> spontaneous presence: not a source; two questions
// kept apart -> the premise "present = something, somewhere"; the search by the framework's own standard -> the four
// nots, not even nowhere -> not despite the vividness; emptiness does nothing -> the rainbow -> the web: dots and lines,
// two readings, three more distortions (around, still, an onlooker), the line as unfindable as the dot; laws struck ->
// no presentation free of tools; the mapmaker -> how to use them: say it, show by change, start inside, draw then undo
// -> "real": two jobs, two words -> rain again -> the owner's closing verse (taste, nature, the limits of the tools,
// clarity, an effortless opening).
// Stance: relation, conditions, emptiness and awareness are never drawn as a ground, field, container or background;
// the web, a source, a raw given, a void and the onlooker appear only to be struck or dissolved. Appearing stays vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // rain
  "Listen to rain on a roof", "Every drop is different", "and changes as the wind changes", "It is vivid",
  "and it never holds still",
  "Now try to say exactly what you heard", "The words come out flat", "Rain", "A sound", "Loud, then soft",
  "What you heard was far richer than that",
  "This is After Anatta",
  // the tools
  "The difficulty in presenting this view is not mainly in the view", "It is in the tools",
  "Words, concepts and drawings were made for daily life", "Lifting a cup", "Catching a bus", "Keeping a promise",
  "For that they work well",
  "But turned on what actually appears, the tools are clumsy", "And there is a worse problem",
  "A tool that cannot show something does not stay silent", "It shows something else instead, shaped like the tool",
  "Not knowing the limits of our tools shapes what we present",
  // three features
  "Three things make the trouble plain", "What appears is vivid and moving", "It is not found when looked for",
  "And it follows its conditions", "It is not haphazard",
  // vividness
  "Start with the vividness", "A concept works by picking out", "this, not that",
  "It gives a thing edges and keeps it the same", "But no sound is ever the same sound twice",
  "A wall is one colour at noon and another at dusk",
  "A tool made for picking out steady things cannot show what never stands still",
  // the first trap
  "Here is the first trap", "underneath the concepts there is raw, vivid experience",
  "and the concepts are a thin layer on top", "That brings the floor back",
  "There is no bare layer waiting to be named", "Whatever appears is already picked out as this, before any word",
  "So the poverty of the tools is not a gap between words and a truer world behind them",
  "The tools fit their job and hold much less than what is there",
  "when a word is taken to have caught the thing itself",
  // conditions
  "Now the conditions", "The bell rings when it is struck, not otherwise", "Rice seed gives rice",
  "This order is what makes the world workable",
  "But as soon as we say it, cause and effect turns into production", "First the conditions",
  "then something made out of them, like goods from a factory",
  "Nagarjuna refuses exactly that", "Cause has three senses, and only one is refused",
  "A cause that exists on its own and hands over an effect is refused",
  "Conditions that come together, so that a result appears, are kept", "That works",
  "And the cause is the part attention picks out when it lays a process out in order", "That is all a cause is",
  // the bell
  "So show the conditions as the shape of the appearing, not a machine behind it", "A bell is struck",
  "Bronze, the strike, the air, the ear", "The ringing is not made by these and then sent out",
  "The ringing is their meeting, vivid and complete", "Crack the bell", "add wind, change the ear",
  "and it is not the same sound altered", "It is a different vividness",
  // verbs
  "Verbs help", "The wind is blowing", "there is no wind apart from the blowing", "It is raining",
  "there is no it that rains",
  // spontaneous presence
  "spontaneous presence, beyond cause and effect", "Heard with the old habits, this swings to the other mistake",
  "perhaps it comes from nowhere, or flows out of a ground",
  "Keep two questions apart", "How does this appearance come about", "Through conditions",
  "What is the nature of what appears", "Emptiness, which is not produced",
  "Beyond cause and effect answers the second question", "It never cancels the first",
  "Spontaneous means already complete", "Complete because nothing is hidden behind it",
  "not because nothing conditions it", "It is dependent arising without a producer",
  "why does anything appear at all", "is not answered by a hidden source", "It simply loses its object",
  // the premise
  "Now the hardest part", "to be present is to be something, somewhere",
  "So how can something so clearly present not be found at all",
  "Do not argue from outside", "Search exactly as the framework says a present thing should be found",
  "Is the sound in the bell", "In the air", "In the ear", "In the mind", "In all of them together",
  "Apart from them", "Each search fails, by the framework's own standard",
  "The contradiction belongs to the premise, not to the view",
  // the nots
  "Each not closes a door", "Not here, not there", "here and there are named in relation to each other",
  "Not in my mind", "the mind is searched the same way, and is not found either", "Not in another's mind",
  "And not even nowhere", "the mind quietly makes its absence into a place, a void, a background",
  "But the search removes the assumed thing and puts nothing in its place", "Where is it, really",
  "That question, like the last why, has nothing left to hold",
  // not despite
  "And this is not despite the vividness", "If the sound had a fixed nature of its own",
  "it could not ring differently in wind, or from a cracked bell",
  "What is vivid and answers to its conditions is exactly what cannot be found as a fixed thing",
  "Vivid and not found are one appearing, seen from two sides",
  "Careful here", "Emptiness does not do anything", "It is not a power that makes vividness possible",
  "Appearing simply never needed an essence",
  // rainbow
  "A rainbow is vivid", "Everyone sees it in the same place, and a camera records it",
  "Walk to where it is, and nothing is there", "But the rainbow only opens the door",
  "The cup, the hand and the mind meet the same search, and work just as fully",
  // the web
  "Now the third trap", "so surely what is there is relations", "A web", "A network",
  "The things are not found, but surely the connections are",
  "The tools push us here", "A diagram has only dots and lines", "Dots for things, lines for relations",
  "So it can be read only two ways", "The dots are what is there, and the lines join them",
  "Or the lines are what is there, and the dots are only where lines cross",
  "Things as the floor, or the web as the floor",
  "The drawing does more on its own", "It sets the conditions around the appearance",
  "so they look like outside causes", "It holds still, so the movement is lost",
  "And someone looks at the whole web from outside",
  "The onlooker that anatta took away is quietly put back",
  "Nagarjuna searched the connections as closely as the things",
  "Contact, coming into contact, and the one who brings them into contact are not found",
  "The line is as unfindable as the dot", "Relation and the things related are named together",
  "and neither is the ground", "Nor is the order of conditions a hidden set of laws behind things",
  "The order is fully valid", "It works, and it can be relied on", "It is not a floor",
  // no presentation free of tools
  "So there is no presentation free of tools", "Every presentation picks out this rather than that",
  "so whatever it shows comes already cut into pieces and links", "That is not a fault to fix",
  "The fix is to know it, and to say so",
  "A mapmaker cannot draw a round earth on a flat page without distortion",
  "A good one says which distortion was chosen, and why",
  // how
  "Here is how to use the tools anyway", "Say what the tool cannot do, while using it",
  "Show dependence by change, not by maps", "Strike the bell harder", "crack it", "add wind",
  "each time a different vividness", "Start inside the one appearing", "and treat its conditions as its own detail",
  "If you draw, then undo the drawing", "Search a dot", "Search a line",
  "Search for the one looking at the picture", "What remains is not a blank, and not a web",
  "It is the bell, ringing",
  // real
  "One word carries the whole difficulty", "It says that something works",
  "and it denies that anything stands on its own", "One word for two opposite jobs",
  "So say validly functioning where it affirms", "and not found where it denies",
  // close
  "Listen to the rain again", "Changing with the wind", "Following its conditions",
  "Not found anywhere, not even nowhere",
  "The more you taste the appearances", "the more you see the nature of appearances",
  "The more you see and understand the lack and limitations of the tools", "the clearer the mind becomes",
  "And the opening turns effortless and relaxed",
];

const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  sea: { a: "rgba(30,90,130,0.48)", b: "rgba(60,50,140,0.42)", c: "rgba(150,120,50,0.3)" },
};

// ---------------------------------------------------------------- helpers
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

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
/** A chip struck through at `strikeAt`: only for what is never found (a source, a raw given, a void, the web as floor). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

// ---------------------------------------------------------------- drawings
/** Rain: short streaks falling, each a little different. */
const Rain: React.FC<{ w?: number; h?: number; n?: number; color?: string; wind?: number }> =
  ({ w = 1400, h = 520, n = 70, color = ICE, wind = 0 }) => {
    const { t } = useT();
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
        {Array.from({ length: n }, (_, i) => {
          const sp = 0.6 + rand(i) * 0.9;
          const q = ((t * sp + rand(i + 50)) % 1 + 1) % 1;
          const x = rand(i + 7) * w + wind * q * 80;
          const y = q * h;
          const len = 18 + rand(i + 3) * 26;
          return <line key={i} x1={x} y1={y} x2={x + wind * 8} y2={y + len} stroke={color} strokeWidth={2 + rand(i + 9) * 2}
            strokeLinecap="round" opacity={0.35 + 0.5 * Math.sin(Math.PI * q)} />;
        })}
      </svg>
    );
  };

/** Sound: rings going out from a small source. */
const SoundRings: React.FC<{ at: number; color?: string; size?: number; speed?: number; wobble?: number }> =
  ({ at, color = GOLD, size = 300, speed = 0.5, wobble = 0 }) => {
    const { t } = useT();
    return (
      <svg width={size} height={size} viewBox="-150 -150 300 300" style={{ overflow: "visible" }}>
        <circle r={14} fill={color} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
        {[0, 1, 2, 3].map(i => {
          const q = (((t - at) * speed + i / 4) % 1 + 1) % 1;
          const r = 20 + q * 120;
          const d = wobble * Math.sin(t * 5 + i);
          return <ellipse key={i} rx={r + d * 8} ry={r - d * 6} fill="none" stroke={color} strokeWidth={4}
            opacity={(1 - q) * ramp(t, at, 0.6)} />;
        })}
      </svg>
    );
  };

/** The one vivid appearing: a bright disc, glowing from itself (not a container, nothing inside it). */
const Appearing: React.FC<{ size?: number; o?: number; hue?: string }> = ({ size = 220, o = 1, hue = ROSE }) => {
  const { t } = useT();
  const b = 1 + 0.03 * Math.sin(t * 2);
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", opacity: o, transform: `scale(${b})`,
      background: `radial-gradient(circle at 40% 35%, #FFF6DD, ${GOLD} 45%, ${hue}aa 75%, ${TEAL}55)`,
      boxShadow: `0 0 50px ${GOLD}, 0 0 90px ${hue}66` }} />
  );
};

/** A bell, cracked when `crack` > 0. */
const Bell: React.FC<{ size?: number; color?: string; crack?: number }> = ({ size = 200, color = GOLD, crack = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
    <path d="M100 20 C60 20 50 60 48 100 C46 130 30 145 22 158 L178 158 C170 145 154 130 152 100 C150 60 140 20 100 20 Z"
      fill={`${color}33`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
    <circle cx={100} cy={172} r={12} fill={color} />
    <rect x={92} y={6} width={16} height={16} rx={4} fill={color} />
    {crack > 0 && <DrawPath d="M112 40 L100 70 L116 92 L102 124 L114 150" p={crack} color={WARM} width={5} len={140} />}
  </svg>
);

/** An eye (the onlooker). */
const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

/** A spotlight ring picking out one "this". */
const Pick: React.FC<{ at: number; label: string; color: string }> = ({ at, label, color }) => {
  const { t, fps } = useT();
  return (
    <div style={{ position: "relative", width: 230, height: 230, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={230} height={230} viewBox="0 0 230 230" style={{ position: "absolute", overflow: "visible" }}>
        <DrawPath d="M115 10 A105 105 0 1 1 114.9 10" p={ramp(t, at, 0.7)} color={color} width={5} len={680} />
      </svg>
      <div style={{ transform: `scale(${pop(t, fps, at + 0.2)})` }}><Glow color={color} size={34} serif>{label}</Glow></div>
    </div>
  );
};

/** A rainbow arc; `o` fades it. */
const Rainbow: React.FC<{ p: number; o?: number }> = ({ p, o = 1 }) => {
  const cols = [ROSE, WARM, GOLD, GREEN, TEAL, ICE, VIOLET];
  return (
    <svg width={900} height={460} viewBox="0 0 900 460" style={{ overflow: "visible", opacity: o }}>
      {cols.map((col, i) => {
        const r = 400 - i * 16;
        return <DrawPath key={i} d={`M${450 - r} 450 A${r} ${r} 0 0 1 ${450 + r} 450`} p={p} color={col} width={14} len={1300} />;
      })}
    </svg>
  );
};

// the network used in the web scene: dots (things) and lines (relations)
const NODES: [number, number][] = [[560, 300], [820, 230], [1100, 280], [1360, 320], [700, 470], [980, 450], [1240, 520], [860, 640], [1120, 660]];
const EDGES: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 6], [4, 5], [5, 6], [4, 7], [5, 7], [5, 8], [6, 8], [7, 8]];

/** Dots and lines. dotsBold / linesBold: 0..1 which reading is "what is there"; fade: 0..1 the whole thing dissolves. */
const Net: React.FC<{ draw: number; dotsBold?: number; linesBold?: number; dashD?: number; dashL?: number; fade?: number }> =
  ({ draw, dotsBold = 0, linesBold = 0, dashD = 0, dashL = 0, fade = 0 }) => (
    <Svg style={{ opacity: 1 - fade }}>
      {EDGES.map(([a, b], i) => {
        const [x1, y1] = NODES[a], [x2, y2] = NODES[b];
        const len = Math.hypot(x2 - x1, y2 - y1);
        return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={TEAL} strokeWidth={3 + 4 * linesBold}
          strokeDasharray={dashL > 0.1 ? "8 12" : `${len}`} strokeDashoffset={dashL > 0.1 ? 0 : len * (1 - draw)}
          opacity={0.75 - 0.4 * dotsBold + 0.25 * linesBold} style={{ filter: `drop-shadow(0 0 ${6 + 10 * linesBold}px ${TEAL})` }} />;
      })}
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={(14 + 10 * dotsBold - 6 * linesBold) * Math.min(1, draw * 1.5)}
          fill={dashD > 0.1 ? "none" : GOLD} stroke={GOLD} strokeWidth={3} strokeDasharray={dashD > 0.1 ? "6 6" : undefined}
          opacity={0.9 - 0.4 * linesBold} style={{ filter: `drop-shadow(0 0 ${8 + 12 * dotsBold}px ${GOLD})` }} />
      ))}
    </Svg>
  );

// ---------------------------------------------------------------- scenes
const RainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Listen to rain on a roof");
  const flat = c("Now try to say exactly what you heard");
  const aa = c("This is After Anatta");
  const wind = Math.sin(t * 0.4) * (t > c("and changes as the wind changes") ? 1 : 0.2);
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, s, 0.8) * (1 - 0.6 * ramp(t, flat, 0.6)) * (1 - ramp(t, aa, 0.6))}><Rain wind={wind} /></At>
      <Items items={[
        ["Every drop is different", 960, 140, <Wd c={ICE} s={32}>every drop different</Wd>, { until: "Now try to say exactly what you heard" }],
        ["It is vivid", 600, 720, <Wd c={GOLD} s={40} serif>vivid</Wd>, { until: "Now try to say exactly what you heard" }],
        ["and it never holds still", 1320, 720, <Wd c={TEAL} s={40} serif>never still</Wd>, { until: "Now try to say exactly what you heard" }],
        ["Rain", 640, 330, <Wd c={DIM} s={36}>rain</Wd>, { until: "This is After Anatta" }],
        ["A sound", 960, 330, <Wd c={DIM} s={36}>a sound</Wd>, { until: "This is After Anatta" }],
        ["Loud, then soft", 1280, 330, <Wd c={DIM} s={36}>loud, then soft</Wd>, { until: "This is After Anatta" }],
        ["The words come out flat", 960, 200, <Wd c={CHALK} s={32}>the words come out flat</Wd>, { until: "This is After Anatta" }],
        ["What you heard was far richer than that", 960, 600, <Appearing size={170} hue={ICE} />, { until: "This is After Anatta" }],
        ["What you heard was far richer than that", 960, 760, <Wd c={GOLD} s={34} serif>what was heard: far richer</Wd>, { d: 0.6, until: "This is After Anatta" }],
      ]} />
      <At x={960} y={430} o={ramp(t, aa, 0.5)}><Glow color={CHALK} size={52} serif>After Anatta · The Logic</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5)}><Wd c={DIM} s={28}>notes by John Tan (Thusness)</Wd></At>
    </AbsoluteFill>
  );
};

const ToolsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const clumsy = c("But turned on what actually appears, the tools are clumsy");
  const else_ = c("It shows something else instead, shaped like the tool");
  return (
    <AbsoluteFill>
      <Title at={c("It is in the tools")} color={GOLD}>the tools</Title>
      {["words", "concepts", "drawings"].map((w, i) => (
        <At key={w} x={560 + i * 400} y={250} s={pop(t, fps, c("Words, concepts and drawings were made for daily life") + i * 0.4)}>
          <K c={[TEAL, VIOLET, ROSE][i]} s={32}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["Lifting a cup", 560, 400, <Wd c={CHALK} s={28}>lifting a cup</Wd>, { until: "But turned on what actually appears, the tools are clumsy" }],
        ["Catching a bus", 960, 400, <Wd c={CHALK} s={28}>catching a bus</Wd>, { until: "But turned on what actually appears, the tools are clumsy" }],
        ["Keeping a promise", 1360, 400, <Wd c={CHALK} s={28}>keeping a promise</Wd>, { until: "But turned on what actually appears, the tools are clumsy" }],
        ["For that they work well", 960, 500, <Wd c={GREEN} s={32} serif>they work well</Wd>, { until: "But turned on what actually appears, the tools are clumsy" }],
      ]} />
      <At x={960} y={450} o={ramp(t, clumsy, 0.6)}><Appearing size={160} /></At>
      <At x={960} y={590} o={ramp(t, clumsy + 0.5, 0.5)}><Wd c={WARM} s={30}>clumsy here</Wd></At>
      <At x={560} y={720} o={ramp(t, c("A tool that cannot show something does not stay silent"), 0.5)}><Wd c={DIM} s={28}>it does not stay silent</Wd></At>
      <At x={1360} y={720} o={ramp(t, else_, 0.5)}><Wd c={GOLD} s={28}>it shows something else, shaped like the tool</Wd></At>
      <At x={960} y={800} o={ramp(t, c("Not knowing the limits of our tools shapes what we present"), 0.5)}>
        <Wd c={CHALK} s={32} serif>unknown limits shape the presentation</Wd>
      </At>
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const F: [string, string, string][] = [
    ["What appears is vivid and moving", "vivid and moving", GOLD],
    ["It is not found when looked for", "not found when looked for", VIOLET],
    ["And it follows its conditions", "follows its conditions", TEAL],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("Three things make the trouble plain")}>three things</Title>
      <At x={960} y={460} o={ramp(t, c("Three things make the trouble plain") + 0.4, 0.6)}><Appearing size={200} /></At>
      {F.map(([cue, w, col], i) => (
        <At key={w} x={[480, 960, 1440][i]} y={[300, 720, 300][i]} s={pop(t, fps, c(cue))}><K c={col} s={30}>{w}</K></At>
      ))}
      <At x={1440} y={390} o={ramp(t, c("It is not haphazard"), 0.5)}><Wd c={DIM} s={26}>not haphazard</Wd></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pick = c("A concept works by picking out");
  const twice = c("But no sound is ever the same sound twice");
  const wall = c("A wall is one colour at noon and another at dusk");
  const q = ramp(t, wall + 0.5, 2.5);
  const wc = q < 0.5 ? GOLD : VIOLET;
  return (
    <AbsoluteFill>
      <Title at={c("Start with the vividness")} color={GOLD}>vividness</Title>
      <At x={560} y={380} o={ramp(t, pick, 0.4) * (1 - ramp(t, twice, 0.5) * 0.6)}><Pick at={pick} label="this" color={GOLD} /></At>
      <Items items={[
        ["this, not that", 560, 540, <Wd c={DIM} s={28}>this, not that</Wd>],
        ["It gives a thing edges and keeps it the same", 560, 610, <Wd c={CHALK} s={26}>edges · kept the same</Wd>],
      ]} />
      {[0, 1, 2].map(i => (
        <At key={i} x={1180 + i * 170} y={330} o={ramp(t, twice + i * 0.5, 0.5)}>
          <SoundRings at={twice + i * 0.5} size={150} color={[GOLD, ROSE, TEAL][i]} speed={0.4 + i * 0.2} wobble={i} />
        </At>
      ))}
      <At x={1350} y={470} o={ramp(t, twice + 1, 0.5)}><Wd c={CHALK} s={26}>never the same sound twice</Wd></At>
      <At x={1350} y={610} o={ramp(t, wall, 0.5)}>
        <div style={{ width: 300, height: 90, borderRadius: 8, background: wc, opacity: 0.85, boxShadow: `0 0 30px ${wc}`,
          transition: "none" }} />
      </At>
      <At x={1350} y={690} o={ramp(t, wall + 0.4, 0.5)}><Wd c={DIM} s={24}>noon · dusk</Wd></At>
      <At x={960} y={790} o={ramp(t, c("A tool made for picking out steady things cannot show what never stands still"), 0.5)}>
        <Wd c={CHALK} s={30} serif>a tool for steady things, and what never stands still</Wd>
      </At>
    </AbsoluteFill>
  );
};

const LayerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const raw = c("underneath the concepts there is raw, vivid experience");
  const top = c("and the concepts are a thin layer on top");
  const none = c("There is no bare layer waiting to be named");
  const already = c("Whatever appears is already picked out as this, before any word");
  const gap = c("So the poverty of the tools is not a gap between words and a truer world behind them");
  const fit = c("The tools fit their job and hold much less than what is there");
  return (
    <AbsoluteFill>
      <Title at={c("Here is the first trap")} color={WARM}>the first trap</Title>
      <At x={960} y={300} o={ramp(t, top, 0.5) * (1 - ramp(t, none, 0.6))}>
        <div style={{ width: 700, height: 70, borderRadius: 8, border: `3px solid ${VIOLET}`, background: `${VIOLET}22`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={CHALK} size={28}>concepts, a thin layer</Glow></div>
      </At>
      <At x={960} y={420} o={ramp(t, raw, 0.5)}>
        <div style={{ position: "relative" }}>
          <Chip color={DIM} size={30}>raw experience underneath, waiting to be named</Chip><Strike at={none + 0.3} />
        </div>
      </At>
      <At x={960} y={500} o={ramp(t, c("That brings the floor back"), 0.4) * (1 - ramp(t, none, 0.5))}><Wd c={WARM} s={28}>a floor again</Wd></At>
      <At x={960} y={560} o={ramp(t, already, 0.5)}><Pick at={already} label="this" color={GOLD} /></At>
      <At x={960} y={700} o={ramp(t, already + 0.8, 0.5) * (1 - ramp(t, gap, 0.4))}><Wd c={GOLD} s={28}>already picked out, before any word</Wd></At>
      <At x={960} y={700} o={ramp(t, gap, 0.5) * (1 - ramp(t, fit, 0.4))}>
        <SK c={DIM} s={26} strikeAt={gap + 2.2}>a truer world behind the words</SK>
      </At>
      <At x={960} y={700} o={ramp(t, fit, 0.5)}><Wd c={CHALK} s={28}>the tools fit their job, and hold much less than what is there</Wd></At>
      <At x={960} y={790} o={ramp(t, c("when a word is taken to have caught the thing itself"), 0.5)}>
        <Wd c={WARM} s={28}>the mistake: taking the word to have caught the thing</Wd>
      </At>
    </AbsoluteFill>
  );
};

const ProductionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const prod = c("But as soon as we say it, cause and effect turns into production");
  const fac = c("then something made out of them, like goods from a factory");
  const ref = c("Nagarjuna refuses exactly that");
  const three = c("Cause has three senses, and only one is refused");
  return (
    <AbsoluteFill>
      <Title at={c("Now the conditions")}>conditions</Title>
      <Items items={[
        ["The bell rings when it is struck, not otherwise", 560, 260, <Bell size={120} />, { pop: true, until: "But as soon as we say it, cause and effect turns into production" }],
        ["Rice seed gives rice", 1360, 260, <K c={GREEN} s={28}>rice seed → rice</K>, { pop: true, until: "But as soon as we say it, cause and effect turns into production" }],
        ["This order is what makes the world workable", 960, 400, <Wd c={CHALK} s={30}>order makes the world workable</Wd>, { until: "But as soon as we say it, cause and effect turns into production" }],
      ]} />
      {/* the factory picture, then struck */}
      <At x={960} y={330} o={ramp(t, prod, 0.5) * (1 - ramp(t, three, 0.6))}>
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <K c={TEAL} s={28}>conditions</K>
          <svg width={120} height={30}><DrawPath d="M5 15 L110 15 M95 5 L110 15 L95 25" p={ramp(t, fac, 0.6)} color={DIM} width={4} len={150} /></svg>
          <div style={{ position: "relative" }}><Chip color={WARM} size={28}>factory</Chip><Strike at={ref + 0.3} /></div>
          <svg width={120} height={30}><DrawPath d="M5 15 L110 15 M95 5 L110 15 L95 25" p={ramp(t, fac + 0.6, 0.6)} color={DIM} width={4} len={150} /></svg>
          <K c={GOLD} s={28}>a product</K>
        </div>
      </At>
      <At x={960} y={430} o={ramp(t, ref, 0.5) * (1 - ramp(t, three, 0.6))}><Wd c={TEAL} s={30}>Nagarjuna refuses this</Wd></At>
      <At x={960} y={300} o={ramp(t, three, 0.5)} s={pop(t, fps, c("A cause that exists on its own and hands over an effect is refused"))}>
        <SK c={WARM} s={28} strikeAt={c("A cause that exists on its own and hands over an effect is refused") + 1.6}>a cause on its own, handing over an effect</SK>
      </At>
      <Items items={[
        ["Cause has three senses, and only one is refused", 960, 200, <Wd c={CHALK} s={30}>three senses of “cause”</Wd>],
        ["Conditions that come together, so that a result appears, are kept", 960, 450, <K c={GREEN} s={28}>conditions come together, a result appears: kept</K>, { pop: true }],
        ["That works", 960, 530, <Wd c={GREEN} s={26}>it works</Wd>],
        ["And the cause is the part attention picks out when it lays a process out in order", 960, 640, <K c={ICE} s={28}>the part attention picks out, laying a process in order</K>, { pop: true }],
        ["That is all a cause is", 960, 740, <Wd c={GOLD} s={32} serif>that is all a cause is</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const struck = c("A bell is struck");
  const meet = c("The ringing is their meeting, vivid and complete");
  const crack = c("Crack the bell");
  const wind = c("add wind, change the ear");
  const ear = wind + 0.9;
  const diff = c("It is a different vividness");
  const verbs = c("Verbs help");
  const col = t > ear ? VIOLET : t > wind ? TEAL : t > crack ? WARM : GOLD;
  const C: [string, number, number][] = [["bronze", 620, 260], ["the strike", 1300, 260], ["the air", 620, 600], ["the ear", 1300, 600]];
  const fade = ramp(t, verbs, 0.6);
  return (
    <AbsoluteFill>
      <Title at={c("So show the conditions as the shape of the appearing, not a machine behind it")}>the shape of the appearing</Title>
      <At x={960} y={420} o={ramp(t, struck, 0.5) * (1 - fade)}><Bell size={180} crack={ramp(t, crack, 0.6)} /></At>
      <At x={960} y={420} o={ramp(t, meet, 0.6) * (1 - fade)} s={1.6}>
        <SoundRings at={meet} color={col} wobble={t > wind ? 1.5 : 0} speed={t > ear ? 0.8 : 0.5} />
      </At>
      {C.map(([w, x, y], i) => (
        <At key={w} x={x} y={y} s={pop(t, fps, c("Bronze, the strike, the air, the ear") + i * 0.4)} o={1 - fade}><K c={ICE} s={26}>{w}</K></At>
      ))}
      <At x={960} y={700} o={ramp(t, c("The ringing is not made by these and then sent out"), 0.4) * (1 - ramp(t, meet, 0.4))}>
        <SK c={DIM} s={26} strikeAt={c("The ringing is not made by these and then sent out") + 1.6}>made by these, then sent out</SK>
      </At>
      <At x={960} y={700} o={ramp(t, meet + 0.4, 0.5) * (1 - ramp(t, crack, 0.4))}><Wd c={GOLD} s={32} serif>the ringing is their meeting</Wd></At>
      <At x={960} y={700} o={ramp(t, diff, 0.5) * (1 - fade)}><Wd c={col} s={32} serif>a different vividness</Wd></At>
      <At x={960} y={780} o={ramp(t, c("and it is not the same sound altered"), 0.4) * (1 - fade)}><Wd c={DIM} s={24}>not the same sound, altered</Wd></At>
      {/* verbs */}
      <Items items={[
        ["The wind is blowing", 600, 380, <Wd c={TEAL} s={40} serif>blowing</Wd>, { pop: true }],
        ["there is no wind apart from the blowing", 600, 480, <SK c={DIM} s={26} strikeAt={c("there is no wind apart from the blowing") + 1.2}>a wind apart from the blowing</SK>],
        ["It is raining", 1320, 380, <Wd c={ICE} s={40} serif>raining</Wd>, { pop: true }],
        ["there is no it that rains", 1320, 480, <SK c={DIM} s={26} strikeAt={c("there is no it that rains") + 1}>an “it” that rains</SK>],
      ]} />
      <At x={960} y={250} o={ramp(t, verbs, 0.5)}><Wd c={GOLD} s={34} serif>verbs help</Wd></At>
    </AbsoluteFill>
  );
};

const SpontScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("spontaneous presence, beyond cause and effect");
  const two = c("Keep two questions apart");
  const comp = c("Spontaneous means already complete");
  const why = c("why does anything appear at all");
  return (
    <AbsoluteFill>
      <Title at={sp} color={GOLD}>spontaneous presence</Title>
      <At x={960} y={220} o={ramp(t, sp + 0.6, 0.5) * (1 - ramp(t, two, 0.4))}><Wd c={DIM} s={28}>beyond cause and effect</Wd></At>
      <At x={660} y={400} o={ramp(t, c("perhaps it comes from nowhere, or flows out of a ground"), 0.5) * (1 - ramp(t, two, 0.5))}>
        <SK c={DIM} s={28} strikeAt={c("perhaps it comes from nowhere, or flows out of a ground") + 2.2}>from nowhere</SK>
      </At>
      <At x={1260} y={400} o={ramp(t, c("perhaps it comes from nowhere, or flows out of a ground") + 1, 0.5) * (1 - ramp(t, two, 0.5))}>
        <SK c={DIM} s={28} strikeAt={c("perhaps it comes from nowhere, or flows out of a ground") + 2.4}>out of a ground</SK>
      </At>
      <Items items={[
        ["How does this appearance come about", 560, 300, <Wd c={CHALK} s={30}>how does it come about?</Wd>, { until: "Spontaneous means already complete" }],
        ["Through conditions", 560, 390, <K c={TEAL} s={28}>through conditions</K>, { pop: true, until: "Spontaneous means already complete" }],
        ["What is the nature of what appears", 1360, 300, <Wd c={CHALK} s={30}>what is its nature?</Wd>, { until: "Spontaneous means already complete" }],
        ["Emptiness, which is not produced", 1360, 390, <K c={VIOLET} s={28}>emptiness, not produced</K>, { pop: true, until: "Spontaneous means already complete" }],
        ["Beyond cause and effect answers the second question", 1360, 490, <Wd c={GOLD} s={26}>“beyond cause and effect”</Wd>, { until: "Spontaneous means already complete" }],
        ["It never cancels the first", 560, 490, <Wd c={TEAL} s={26}>never cancelled</Wd>, { until: "Spontaneous means already complete" }],
      ]} />
      <At x={960} y={440} o={ramp(t, comp, 0.6)}><Appearing size={190} /></At>
      <At x={960} y={260} o={ramp(t, comp, 0.5)}><Wd c={GOLD} s={36} serif>already complete</Wd></At>
      <Items items={[
        ["Complete because nothing is hidden behind it", 520, 440, <Wd c={CHALK} s={26}>nothing hidden behind it</Wd>],
        ["not because nothing conditions it", 1400, 440, <Wd c={TEAL} s={26}>still conditioned</Wd>],
        ["It is dependent arising without a producer", 960, 620, <K c={GOLD} s={30}>dependent arising, no producer</K>, { pop: true }],
      ]} />
      <At x={960} y={720} o={ramp(t, why, 0.5)}>
        <SK c={DIM} s={26} strikeAt={c("is not answered by a hidden source") + 1}>a hidden source</SK>
      </At>
      <At x={960} y={800} o={ramp(t, c("It simply loses its object"), 0.5)}><Wd c={CHALK} s={28}>“why?” loses its object</Wd></At>
    </AbsoluteFill>
  );
};

const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const prem = c("to be present is to be something, somewhere");
  const search = c("Search exactly as the framework says a present thing should be found");
  const fails = c("Each search fails, by the framework's own standard");
  const S: [string, string, number, number][] = [
    ["Is the sound in the bell", "in the bell?", 420, 420], ["In the air", "in the air?", 760, 420], ["In the ear", "in the ear?", 1100, 420],
    ["In the mind", "in the mind?", 1440, 420], ["In all of them together", "all together?", 760, 560], ["Apart from them", "apart from them?", 1100, 560],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("Now the hardest part")} color={VIOLET}>the hardest part</Title>
      <At x={960} y={220} o={ramp(t, prem, 0.5)}>
        <div style={{ position: "relative" }}><Chip color={WARM} size={30}>present = something, somewhere</Chip><Strike at={c("The contradiction belongs to the premise, not to the view") + 0.4} /></div>
      </At>
      <At x={960} y={420} o={ramp(t, c("So how can something so clearly present not be found at all"), 0.5) * (1 - ramp(t, search, 0.5))}><Appearing size={170} /></At>
      <At x={960} y={300} o={ramp(t, c("Do not argue from outside"), 0.4) * (1 - ramp(t, search, 0.4))}><Wd c={DIM} s={26}>not from outside</Wd></At>
      {S.map(([cue, w, x, y]) => (
        <At key={w} x={x} y={y} s={pop(t, fps, c(cue))} o={ramp(t, c(cue), 0.3) * (1 - 0.5 * ramp(t, fails, 0.6))}><K c={ICE} s={26}>{w}</K></At>
      ))}
      <Items items={[
        ["Search exactly as the framework says a present thing should be found", 960, 320, <Wd c={CHALK} s={28}>search by its own standard</Wd>],
        ["Each search fails, by the framework's own standard", 960, 680, <Wd c={VIOLET} s={34} serif>not found, by its own standard</Wd>],
        ["The contradiction belongs to the premise, not to the view", 960, 780, <Wd c={GOLD} s={28}>the contradiction is the premise's</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const NotsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const N: [string, string, number][] = [
    ["Not here, not there", "not here, not there", 220], ["Not in my mind", "not in my mind", 340],
    ["Not in another's mind", "not in another's mind", 460], ["And not even nowhere", "not even nowhere", 580],
  ];
  const place = c("the mind quietly makes its absence into a place, a void, a background");
  const removes = c("But the search removes the assumed thing and puts nothing in its place");
  return (
    <AbsoluteFill>
      <Title at={c("Each not closes a door")}>each “not” closes a door</Title>
      {N.map(([cue, w, y], i) => (
        <At key={w} x={560} y={y} s={pop(t, fps, c(cue))}><K c={[ICE, TEAL, VIOLET, GOLD][i]} s={28}>{w}</K></At>
      ))}
      <Items items={[
        ["here and there are named in relation to each other", 1300, 220, <Wd c={DIM} s={24}>here and there: named together</Wd>, { until: "And not even nowhere" }],
        ["the mind is searched the same way, and is not found either", 1300, 340, <Wd c={DIM} s={24}>the mind: searched, not found</Wd>, { until: "And not even nowhere" }],
      ]} />
      {/* the void the mind makes, then dissolved */}
      <At x={1300} y={440} o={ramp(t, place, 0.6) * (1 - ramp(t, removes + 1.2, 0.8))}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 380, height: 220, borderRadius: 16, border: `3px dashed ${DIM}`, background: "#00000033",
            display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={DIM} size={26}>a void · a background</Glow></div>
          <Strike at={removes + 0.4} />
        </div>
      </At>
      <At x={1300} y={640} o={ramp(t, removes + 0.8, 0.5)}><Wd c={CHALK} s={26}>nothing put in its place</Wd></At>
      <At x={960} y={760} o={ramp(t, c("Where is it, really"), 0.4)}><Wd c={GOLD} s={34} serif>“where is it, really?”</Wd></At>
      <At x={960} y={820} o={ramp(t, c("That question, like the last why, has nothing left to hold"), 0.5)}><Wd c={DIM} s={26}>like the last “why”: nothing left to hold</Wd></At>
    </AbsoluteFill>
  );
};

const DespiteScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fixed = c("If the sound had a fixed nature of its own");
  const one = c("Vivid and not found are one appearing, seen from two sides");
  const careful = c("Careful here");
  const power = c("It is not a power that makes vividness possible");
  return (
    <AbsoluteFill>
      <Title at={c("And this is not despite the vividness")} color={GOLD}>not despite the vividness</Title>
      <At x={560} y={380} o={ramp(t, fixed, 0.5) * (1 - ramp(t, one, 0.5))}>
        <SK c={DIM} s={28} strikeAt={c("it could not ring differently in wind, or from a cracked bell") + 1.6}>a fixed nature of its own</SK>
      </At>
      <At x={1360} y={380} o={ramp(t, c("it could not ring differently in wind, or from a cracked bell"), 0.5) * (1 - ramp(t, one, 0.5))}>
        <SoundRings at={fixed} size={200} color={TEAL} wobble={1.2} />
      </At>
      <At x={960} y={560} o={ramp(t, c("What is vivid and answers to its conditions is exactly what cannot be found as a fixed thing"), 0.5) * (1 - ramp(t, one, 0.5))}>
        <Wd c={CHALK} s={28}>answering to conditions = not found as a fixed thing</Wd>
      </At>
      <At x={960} y={420} o={ramp(t, one, 0.6) * (1 - ramp(t, careful, 0.5) * 0.5)}><Appearing size={200} /></At>
      <At x={620} y={420} s={pop(t, fps, one + 0.4)}><K c={GOLD} s={30}>vivid</K></At>
      <At x={1300} y={420} s={pop(t, fps, one + 0.9)}><K c={VIOLET} s={30}>not found</K></At>
      <At x={960} y={620} o={ramp(t, one + 1.4, 0.5) * (1 - ramp(t, careful, 0.4))}><Wd c={CHALK} s={30} serif>one appearing, two sides</Wd></At>
      <Items items={[
        ["Emptiness does not do anything", 960, 620, <Wd c={CHALK} s={30} serif>emptiness does not do anything</Wd>],
        ["It is not a power that makes vividness possible", 960, 710, <SK c={DIM} s={26} strikeAt={power + 1.5}>a power making vividness possible</SK>],
        ["Appearing simply never needed an essence", 960, 800, <Wd c={GOLD} s={28}>appearing never needed an essence</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RainbowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const r = c("A rainbow is vivid");
  const walk = c("Walk to where it is, and nothing is there");
  const door = c("But the rainbow only opens the door");
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={1 - 0.75 * ramp(t, walk + 0.6, 1.2)}><Rainbow p={ramp(t, r, 1.4)} /></At>
      <Items items={[
        ["Everyone sees it in the same place, and a camera records it", 520, 640, <Wd c={CHALK} s={26}>seen in one place · recorded</Wd>, { until: "But the rainbow only opens the door" }],
        ["Walk to where it is, and nothing is there", 1400, 640, <Wd c={VIOLET} s={28}>walk there: nothing</Wd>, { until: "But the rainbow only opens the door" }],
      ]} />
      {["the cup", "the hand", "the mind"].map((w, i) => (
        <At key={w} x={620 + i * 340} y={620} s={pop(t, fps, c("The cup, the hand and the mind meet the same search, and work just as fully") + i * 0.4)}>
          <K c={[GOLD, ROSE, ICE][i]} s={28}>{w}</K>
        </At>
      ))}
      <At x={960} y={720} o={ramp(t, door + 3, 0.5)}><Wd c={CHALK} s={28}>the same search · just as fully working</Wd></At>
    </AbsoluteFill>
  );
};

const WebScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const web = c("A web");
  const diag = c("A diagram has only dots and lines");
  const dotsR = c("The dots are what is there, and the lines join them");
  const linesR = c("Or the lines are what is there, and the dots are only where lines cross");
  const floor = c("Things as the floor, or the web as the floor");
  const more = c("The drawing does more on its own");
  const around = c("It sets the conditions around the appearance");
  const still = c("It holds still, so the movement is lost");
  const onl = c("And someone looks at the whole web from outside");
  const naga = c("Nagarjuna searched the connections as closely as the things");
  const contact = c("Contact, coming into contact, and the one who brings them into contact are not found");
  const laws = c("Nor is the order of conditions a hidden set of laws behind things");
  const dotsBold = ramp(t, dotsR, 0.6) * (1 - ramp(t, linesR, 0.6));
  const linesBold = ramp(t, linesR, 0.6) * (1 - ramp(t, more, 0.6));
  return (
    <AbsoluteFill>
      <Title at={c("Now the third trap")} color={WARM}>the third trap</Title>
      <At x={960} y={220} o={ramp(t, web, 0.4) * (1 - ramp(t, diag, 0.4))}><Wd c={TEAL} s={34} serif>a web · a network</Wd></At>
      <Net draw={ramp(t, web, 2.5)} dotsBold={dotsBold} linesBold={linesBold}
        dashD={ramp(t, contact + 1.5, 0.5)} dashL={ramp(t, contact + 0.5, 0.5)} fade={ramp(t, laws, 1.2) * 0.85} />
      <Items items={[
        ["The things are not found, but surely the connections are", 960, 780, <Wd c={DIM} s={26}>no things, but surely connections?</Wd>, { until: "The tools push us here" }],
        ["Dots for things, lines for relations", 960, 780, <Wd c={CHALK} s={28}>dots: things · lines: relations</Wd>, { until: "So it can be read only two ways" }],
        ["The dots are what is there, and the lines join them", 960, 780, <Wd c={GOLD} s={28}>the dots are what is there</Wd>, { until: "Or the lines are what is there, and the dots are only where lines cross" }],
        ["Or the lines are what is there, and the dots are only where lines cross", 960, 780, <Wd c={TEAL} s={28}>the lines are what is there</Wd>, { until: "Things as the floor, or the web as the floor" }],
        ["Things as the floor, or the web as the floor", 960, 780, <SK c={DIM} s={28} strikeAt={floor + 2.4}>things as the floor · the web as the floor</SK>, { until: "The drawing does more on its own" }],
      ]} />
      {/* three more distortions */}
      <At x={300} y={460} o={ramp(t, around, 0.5) * (1 - ramp(t, naga, 0.5))}><Wd c={WARM} s={24}>conditions set around it</Wd></At>
      <At x={300} y={520} o={ramp(t, c("so they look like outside causes"), 0.5) * (1 - ramp(t, naga, 0.5))}><Wd c={DIM} s={22}>like outside causes</Wd></At>
      <At x={1640} y={460} o={ramp(t, still, 0.5) * (1 - ramp(t, naga, 0.5))}><Wd c={WARM} s={24}>it holds still</Wd></At>
      <At x={960} y={790} o={ramp(t, onl, 0.5) * (1 - ramp(t, naga, 0.5))}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 20 }}>
          <Eye size={110} /><Chip color={DIM} size={26}>an onlooker, outside the web</Chip><Strike at={c("The onlooker that anatta took away is quietly put back") + 2.2} />
        </div>
      </At>
      <Items items={[
        ["Contact, coming into contact, and the one who brings them into contact are not found", 960, 780, <Wd c={CHALK} s={26}>contact, coming into contact, the one who brings it: not found (MMK 14.8)</Wd>, { until: "Relation and the things related are named together" }],
        ["The line is as unfindable as the dot", 960, 180, <Wd c={VIOLET} s={32} serif>the line, as unfindable as the dot</Wd>, { until: "Nor is the order of conditions a hidden set of laws behind things" }],
        ["Relation and the things related are named together", 960, 780, <Wd c={CHALK} s={28}>named together; neither the ground</Wd>, { until: "Nor is the order of conditions a hidden set of laws behind things" }],
        ["Nor is the order of conditions a hidden set of laws behind things", 960, 420, <SK c={DIM} s={28} strikeAt={laws + 2.4}>hidden laws behind things</SK>],
        ["The order is fully valid", 960, 560, <K c={GREEN} s={28}>the order: fully valid</K>, { pop: true }],
        ["It works, and it can be relied on", 960, 650, <Wd c={GREEN} s={26}>it works, it can be relied on</Wd>],
        ["It is not a floor", 960, 740, <Wd c={GOLD} s={30} serif>not a floor</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const map = c("A mapmaker cannot draw a round earth on a flat page without distortion");
  const good = c("A good one says which distortion was chosen, and why");
  return (
    <AbsoluteFill>
      <Title at={c("So there is no presentation free of tools")}>no presentation free of tools</Title>
      <At x={960} y={300} o={ramp(t, c("Every presentation picks out this rather than that"), 0.5) * (1 - ramp(t, map, 0.5))}>
        <Wd c={CHALK} s={30}>this, rather than that</Wd>
      </At>
      <At x={960} y={400} o={ramp(t, c("so whatever it shows comes already cut into pieces and links"), 0.5) * (1 - ramp(t, map, 0.5))}>
        <Wd c={TEAL} s={28}>already cut into pieces and links</Wd>
      </At>
      <At x={960} y={520} o={ramp(t, c("That is not a fault to fix"), 0.5) * (1 - ramp(t, map, 0.5))}><Wd c={DIM} s={28}>not a fault to fix</Wd></At>
      <At x={960} y={600} o={ramp(t, c("The fix is to know it, and to say so"), 0.5) * (1 - ramp(t, map, 0.5))}><Wd c={GOLD} s={34} serif>know it, and say so</Wd></At>
      {/* a globe and its flat map */}
      <At x={620} y={430} o={ramp(t, map, 0.6)}>
        <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${TEAL})` }}>
          <circle r={120} fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} />
          {[-60, 0, 60].map(y => <ellipse key={y} cx={0} cy={y} rx={Math.sqrt(120 * 120 - y * y)} ry={8} fill="none" stroke={TEAL} strokeWidth={2} opacity={0.6} />)}
          {[40, 80].map(r => <ellipse key={r} rx={r} ry={120} fill="none" stroke={TEAL} strokeWidth={2} opacity={0.6} />)}
          <line x1={0} y1={-120} x2={0} y2={120} stroke={TEAL} strokeWidth={2} opacity={0.6} />
        </svg>
      </At>
      <At x={1060} y={430} o={ramp(t, map + 1, 0.6)}>
        <svg width={120} height={30}><DrawPath d="M5 15 L110 15 M95 5 L110 15 L95 25" p={ramp(t, map + 1, 0.6)} color={DIM} width={4} len={150} /></svg>
      </At>
      <At x={1380} y={430} o={ramp(t, map + 1.6, 0.6)}>
        <svg width={420} height={240} viewBox="0 0 420 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <rect x={2} y={2} width={416} height={236} rx={6} fill={`${GOLD}18`} stroke={GOLD} strokeWidth={4} />
          {[60, 120, 180].map(y => <line key={y} x1={2} y1={y} x2={418} y2={y} stroke={GOLD} strokeWidth={2} opacity={0.5} />)}
          {[84, 168, 252, 336].map(x => <line key={x} x1={x} y1={2} x2={x} y2={238} stroke={GOLD} strokeWidth={2} opacity={0.5} />)}
        </svg>
      </At>
      <At x={1380} y={600} o={ramp(t, map + 2.4, 0.5)}><Wd c={WARM} s={24}>stretched at the edges</Wd></At>
      <At x={960} y={720} o={ramp(t, good, 0.5)}><Wd c={GOLD} s={32} serif>say which distortion, and why</Wd></At>
    </AbsoluteFill>
  );
};

const HowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const L: [string, string][] = [
    ["Say what the tool cannot do, while using it", "say what the tool cannot do"],
    ["Show dependence by change, not by maps", "show dependence by change"],
    ["Start inside the one appearing", "start inside the one appearing"],
    ["If you draw, then undo the drawing", "draw, then undo the drawing"],
  ];
  const undo = c("If you draw, then undo the drawing");
  const dot = c("Search a dot");
  const line = c("Search a line");
  const look = c("Search for the one looking at the picture");
  const rem = c("What remains is not a blank, and not a web");
  const bell = c("It is the bell, ringing");
  const vary = c("Strike the bell harder");
  const col = t > c("each time a different vividness") ? VIOLET : t > c("add wind") ? TEAL : t > c("crack it") ? WARM : GOLD;
  return (
    <AbsoluteFill>
      <Title at={c("Here is how to use the tools anyway")} color={GOLD}>using the tools anyway</Title>
      {L.map(([cue, w], i) => (
        <At key={w} x={420} y={260 + i * 110} s={pop(t, fps, c(cue))} o={1 - 0.5 * ramp(t, rem, 0.5)}><K c={[TEAL, GOLD, ROSE, ICE][i]} s={26}>{w}</K></At>
      ))}
      {/* change, not maps */}
      <At x={1280} y={360} o={ramp(t, vary, 0.5) * (1 - ramp(t, c("Start inside the one appearing"), 0.5))}>
        <div style={{ position: "relative", width: 300, height: 300 }}>
          <At x={150} y={150} s={1.2}><SoundRings at={vary} color={col} wobble={t > c("add wind") ? 1.5 : 0} speed={0.7} /></At>
          <At x={150} y={150}><Bell size={110} color={col} crack={ramp(t, c("crack it"), 0.5)} /></At>
        </div>
      </At>
      <At x={1280} y={560} o={ramp(t, c("each time a different vividness"), 0.5) * (1 - ramp(t, c("Start inside the one appearing"), 0.5))}>
        <Wd c={col} s={28} serif>each time, a different vividness</Wd>
      </At>
      <At x={1280} y={380} o={ramp(t, c("Start inside the one appearing"), 0.6) * (1 - ramp(t, undo, 0.5))}><Appearing size={180} /></At>
      <At x={1280} y={560} o={ramp(t, c("and treat its conditions as its own detail"), 0.5) * (1 - ramp(t, undo, 0.5))}>
        <Wd c={CHALK} s={26}>its conditions: its own detail</Wd>
      </At>
      {/* draw, then undo */}
      <At x={1280} y={400} o={ramp(t, undo, 0.5) * (1 - ramp(t, rem, 0.6))}>
        <svg width={420} height={260} viewBox="0 0 420 260" style={{ overflow: "visible" }}>
          {[[60, 60, 210, 200], [210, 200, 360, 70], [60, 60, 360, 70]].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={TEAL} strokeWidth={4}
              strokeDasharray={t > line + 0.6 ? "8 10" : undefined} opacity={t > line + 0.6 ? 0.5 : 0.9} />
          ))}
          {[[60, 60], [210, 200], [360, 70]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={16} fill={t > dot + 0.6 ? "none" : GOLD} stroke={GOLD} strokeWidth={3}
              strokeDasharray={t > dot + 0.6 ? "6 6" : undefined} />
          ))}
        </svg>
      </At>
      <Items items={[
        ["Search a dot", 1100, 640, <Wd c={DIM} s={24}>a dot: not found</Wd>, { until: "What remains is not a blank, and not a web" }],
        ["Search a line", 1460, 640, <Wd c={DIM} s={24}>a line: not found</Wd>, { until: "What remains is not a blank, and not a web" }],
        ["Search for the one looking at the picture", 1280, 720, <SK c={DIM} s={24} strikeAt={look + 2}>the one looking at the picture</SK>, { until: "What remains is not a blank, and not a web" }],
      ]} />
      <At x={1280} y={380} o={ramp(t, bell, 0.6)}>
        <div style={{ position: "relative", width: 300, height: 300 }}>
          <At x={150} y={150} s={1.4}><SoundRings at={bell} color={GOLD} /></At>
          <At x={150} y={150}><Bell size={120} /></At>
        </div>
      </At>
      <At x={1280} y={640} o={ramp(t, rem, 0.5)}><Wd c={DIM} s={24}>not a blank · not a web</Wd></At>
      <At x={1280} y={720} o={ramp(t, bell + 0.4, 0.5)}><Wd c={GOLD} s={34} serif>the bell, ringing</Wd></At>
    </AbsoluteFill>
  );
};

const RealScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("One word carries the whole difficulty");
  const works = c("It says that something works");
  const denies = c("and it denies that anything stands on its own");
  const two = c("One word for two opposite jobs");
  const vf = c("So say validly functioning where it affirms");
  const nf = c("and not found where it denies");
  return (
    <AbsoluteFill>
      <Title at={one}>one word</Title>
      <At x={960} y={280} s={pop(t, fps, one + 0.6)} o={1 - 0.6 * ramp(t, vf, 0.6)}><Glow color={CHALK} size={70} serif>“real”</Glow></At>
      <Svg>
        <DrawPath d="M900 330 L560 470" p={ramp(t, works, 0.6)} color={GREEN} width={4} len={400} />
        <DrawPath d="M1020 330 L1360 470" p={ramp(t, denies, 0.6)} color={VIOLET} width={4} len={400} />
      </Svg>
      <At x={560} y={520} o={ramp(t, works + 0.4, 0.5)}><Wd c={DIM} s={26}>affirms: it works</Wd></At>
      <At x={1360} y={520} o={ramp(t, denies + 0.4, 0.5)}><Wd c={DIM} s={26}>denies: standing on its own</Wd></At>
      <At x={960} y={420} o={ramp(t, two, 0.5)}><Wd c={WARM} s={28}>two opposite jobs</Wd></At>
      <At x={560} y={640} s={pop(t, fps, vf)}><K c={GREEN} s={32}>validly functioning</K></At>
      <At x={1360} y={640} s={pop(t, fps, nf)}><K c={VIOLET} s={32}>not found</K></At>
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Listen to the rain again");
  const v = c("The more you taste the appearances");
  const L: [string, string, string][] = [
    ["The more you taste the appearances", "The more you taste the appearances,", GOLD],
    ["the more you see the nature of appearances", "the more you see their nature,", ROSE],
    ["The more you see and understand the lack and limitations of the tools", "the more you see the limits of the tools,", TEAL],
    ["the clearer the mind becomes", "the clearer the mind becomes,", ICE],
    ["And the opening turns effortless and relaxed", "and the opening turns effortless and relaxed.", GOLD],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, s, 0.8) * (1 - 0.7 * ramp(t, v, 0.8))}><Rain wind={Math.sin(t * 0.5)} n={60} h={480} /></At>
      <Items items={[
        ["Changing with the wind", 560, 640, <Wd c={TEAL} s={28}>changing with the wind</Wd>, { until: "The more you taste the appearances" }],
        ["Following its conditions", 960, 700, <Wd c={ICE} s={28}>following its conditions</Wd>, { until: "The more you taste the appearances" }],
        ["Not found anywhere, not even nowhere", 1360, 640, <Wd c={VIOLET} s={28}>not found, not even nowhere</Wd>, { until: "The more you taste the appearances" }],
      ]} />
      {L.map(([cue, text, col], i) => (
        <At key={i} x={960} y={250 + i * 105} o={ramp(t, c(cue) - 0.2, 0.3)}><Reveal text={text} at={c(cue)} size={46} color={col} speed={0.03} /></At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Listen to rain on a roof", "vivid", <RainScene />],
    ["The difficulty in presenting this view is not mainly in the view", "open", <ToolsScene />],
    ["Three things make the trouble plain", "whole", <ThreeScene />],
    ["Start with the vividness", "vivid", <VividScene />],
    ["Here is the first trap", "doubt", <LayerScene />],
    ["Now the conditions", "search", <ProductionScene />],
    ["So show the conditions as the shape of the appearing, not a machine behind it", "vivid", <BellScene />],
    ["spontaneous presence, beyond cause and effect", "whole", <SpontScene />],
    ["Now the hardest part", "search", <SearchScene />],
    ["Each not closes a door", "sea", <NotsScene />],
    ["And this is not despite the vividness", "vivid", <DespiteScene />],
    ["A rainbow is vivid", "open", <RainbowScene />],
    ["Now the third trap", "web", <WebScene />],
    ["So there is no presentation free of tools", "search", <MapScene />],
    ["Here is how to use the tools anyway", "whole", <HowScene />],
    ["One word carries the whole difficulty", "doubt", <RealScene />],
    ["Listen to the rain again", "vivid", <EndScene />],
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
