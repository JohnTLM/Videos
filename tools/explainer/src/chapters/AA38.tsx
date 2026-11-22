// Bonus video: Dependent Arising Part 4: Empty, Not Ghostly (AA38).
// (Script: new-documents/after-anatta/aa38-empty-not-ghostly-script.md, from EBooks
// Bonus Articles/empty-not-ghostly, draft of 2026-11-22; approved by the owner 2026-11-22.)
// Arc: is anything really there without essence? -> recap of Parts 1-3 -> the fear: hollow, ghostly, void
// -> a car (a shape in the mind? or it knocks me down: conditions meet) -> the rain -> a fever -> the big contrast:
// ghostly struck; vivid, forceful, reliable -> the misunderstanding: understanding, analysing, orienting ("nothing
// there" struck, "nothing missing") -> the room never stood on that floor; nihilism, the inherent view in mourning
// -> what Parts 1-3 have shown -> which holds -> why these examples -> gradual: rejection to tenable -> the close of
// the first section; next sections.
// Stance: the floor is drawn only dashed, to fade while the room stays; "ghostly" is drawn only to be struck.
// Cue phrases avoid respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "If nothing has an essence, is anything really there", "I am John Tan, known as Thusness",
  // recap
  "Three parts, one pattern", "An apple, a mountain, and a bat, a bee and an ant",
  "A bowl of liquid, a tick at a pool, and the box of space",
  "A measured value, two observers, and a stick in a dark room",
  "Undeniably there, given, measured from its own side", "Or formed, in dependence",
  "Each time, the formed view held", "By experience, by logic, and by how things work",
  "I want to stop, and draw some conclusions",
  // the fear
  "And first, there is a fear to face", "everything else will be heard wrongly",
  "The fear goes like this", "then nothing is really there", "The world must be hollow", "Ghostly", "A kind of void",
  "Things become dreamlike and thin", "Nothing can really hurt", "And nothing really matters",
  "Let me set this beside what happens",
  // car
  "First, a car", "it is only a shape in the mind", "It cannot really touch me", "Or look. I step off the curb",
  "and the car knocks me down", "The brakes", "The speed", "The weight", "The road", "My not looking",
  "Conditions meet, and I am on the ground", "No essence was needed for that",
  "The car was never dangerous because of a core inside it", "It is dangerous because of how it meets a body",
  // rain
  "Second, the rain", "Surely, if the rain is empty, it is a kind of picture", "Nothing gets wet",
  "Or look. The rain still falls", "The clothes still soak through", "The river still rises, and the rice still grows",
  "The rain works exactly as before",
  // fever
  "Third, a fever", "sickness is a sort of illusion", "I can think it away", "Or look. I still catch the flu",
  "My head still aches", "My temperature still climbs", "And I still need rest, and medicine",
  "The medicine still works",
  // contrast
  "So without essence, the car still knocks you down", "It still rains. And you still get sick",
  "That is the big contrast", "everything turns ghostly and void", "It is just the other way round",
  "Nothing turns ghostly", "It is all exactly as vivid, as forceful, and as reliable as it was",
  // misunderstanding
  "Where does the fear come from, then", "Not from looking", "It is a misunderstanding, produced by confusion",
  "Understanding. The habit links being real with having a core", "So when the core is denied",
  "Analysing. The habit analyses by looking for what something is made of", "it reports: nothing there",
  "Instead of: nothing missing",
  "Orienting. The habit stands as a solid me in here", "feels it has lost its footing",
  "As if the ground had dropped away",
  // floor and room
  "But the force of the car never came from a core", "Remove the essence, and nothing is removed from the working",
  "The ghostliness is the old view looking at emptiness through its own glasses",
  "It sees the floor gone, and expects the room to fall", "The room was never standing on that floor",
  "This is why I call it a misunderstanding, not a discovery",
  "Nihilism is not the opposite of the inherent view", "It is the inherent view in mourning",
  // shown
  "So what have the first three parts shown", "The given is the default, not the finding", "They are supplied",
  "What appears is formed", "Agreement needs no floor", "No new floor, either", "Nothing that works is lost",
  "And now a fourth. Without essence, nothing turns ghostly",
  "What goes is only the floor that was never there",
  // which holds
  "One last time in this section, the test", "By experience. In four parts, an essence was never met",
  "What was met was always the appearing itself", "By logic. Anything put forward as standing on its own has to be picked out",
  "And picking it out makes it dependent", "And the ghostly void is no better off",
  "By working. The car knocks you down", "Dependence explains all of it",
  "So the given, the inherent, is not the truer view", "And the ghostly void it fears is its own shadow",
  // why the examples
  "I want to say plainly why I keep using these examples", "An apple tossed from hand to hand", "A mountain",
  "A bowl of liquid", "A tick at a pool", "A click in a laboratory", "A car, the rain, a fever",
  "They are not decorations for an argument", "The whole purpose is to correct a misconception",
  "and to do it with impact", "The misconception does not live in our theories",
  "It lives in how the apple feels in the hand", "An argument alone rarely reaches that far",
  "So I put the two ways of seeing side by side", "The contrast has to be felt, not only followed",
  // gradual
  "I know it is not easy to turn around and see this", "The habit is older than any thought",
  "The first response is usually rejection", "That is natural", "I do not expect one reading, or one video, to undo it",
  "But it is gradual", "it loosens a little", "starts to make sense", "What makes sense starts to look logical",
  "it is the old view that looks strange", "And the dependent view that is simply tenable",
  "From rejection to acceptance", "to highly logical and tenable", "That is the turn these examples are for",
  // close
  "This is Part 4 of the Dependent Arising series, and the close of its first section",
  "Next, the series turns to other major sides of dependent arising", "What is a phenomenon", "Mind and matter",
  "And the logic of dependency", "What is left when essence goes is not less than before", "It is exactly this",
  "Vivid and working, with nothing behind it, and nothing missing",
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
  street: { a: "rgba(150,80,50,0.42)", b: "rgba(60,50,130,0.42)", c: "rgba(140,110,50,0.3)" },
  rain: { a: "rgba(40,80,130,0.55)", b: "rgba(60,60,120,0.45)", c: "rgba(40,110,120,0.35)" },
  fever: { a: "rgba(160,70,60,0.45)", b: "rgba(80,50,130,0.42)", c: "rgba(150,100,50,0.3)" },
  ghost: { a: "rgba(40,40,70,0.6)", b: "rgba(70,60,110,0.42)", c: "rgba(40,50,80,0.4)" },
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
  <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={34} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
  </div>
);

// ---------------------------------------------------------------- drawings
/** A simple car; `dashed` draws it as a mere outline. */
const Car: React.FC<{ w?: number; dashed?: boolean; col?: string }> = ({ w = 300, dashed, col = WARM }) => (
  <svg width={w} height={w * 0.45} viewBox="0 0 200 90" style={{ overflow: "visible", filter: dashed ? undefined : `drop-shadow(0 0 10px ${col})` }}>
    <path d="M10 60 L20 38 L60 34 L80 14 L140 14 L165 36 L190 42 L192 60 Z" fill={dashed ? "none" : `${col}44`}
      stroke={dashed ? DIM : col} strokeWidth={4} strokeDasharray={dashed ? "8 6" : undefined} />
    <circle cx={50} cy={64} r={14} fill={dashed ? "none" : "#06060d"} stroke={dashed ? DIM : CHALK} strokeWidth={4} strokeDasharray={dashed ? "6 5" : undefined} />
    <circle cx={152} cy={64} r={14} fill={dashed ? "none" : "#06060d"} stroke={dashed ? DIM : CHALK} strokeWidth={4} strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

/** A figure, standing (`fall` 0) or lying on the ground (`fall` 1). */
const Figure: React.FC<{ fall: number; col?: string }> = ({ fall, col = CHALK }) => (
  <div style={{ transform: `rotate(${-fall * 80}deg)`, transformOrigin: "50% 100%" }}>
    <svg width={70} height={120} viewBox="0 0 60 100" style={{ overflow: "visible" }}>
      <circle cx={30} cy={16} r={12} fill="none" stroke={col} strokeWidth={4} />
      <path d="M30 28 L30 64 M30 40 L12 56 M30 40 L48 56 M30 64 L16 96 M30 64 L44 96" fill="none" stroke={col} strokeWidth={4} strokeLinecap="round" />
    </svg>
  </div>
);

/** Falling rain over a width. */
const Rain: React.FC<{ w?: number; h?: number; p: number }> = ({ w = 900, h = 360, p }) => {
  const { t } = useT();
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible", opacity: p }}>
      {Array.from({ length: 60 }).map((_, i) => {
        const x = (i * 97) % w, sp = 260 + (i * 37) % 160;
        const y = ((t * sp + i * 53) % (h + 40)) - 40;
        return <line key={i} x1={x} y1={y} x2={x - 6} y2={y + 26} stroke={ICE} strokeWidth={2.5} opacity={0.7} />;
      })}
    </svg>
  );
};

/** A thermometer with a rising level 0..1. */
const Thermo: React.FC<{ level: number }> = ({ level }) => (
  <svg width={80} height={300} viewBox="0 0 80 300" style={{ overflow: "visible" }}>
    <rect x={28} y={10} width={24} height={240} rx={12} fill="none" stroke={CHALK} strokeWidth={4} />
    <circle cx={40} cy={262} r={28} fill={`${WARM}aa`} stroke={CHALK} strokeWidth={4} />
    <rect x={34} y={240 - 220 * level} width={12} height={20 + 220 * level} fill={WARM} />
  </svg>
);

/** A room standing on a floor that fades away (`gone` 0..1). */
const Room: React.FC<{ p: number; gone: number }> = ({ p, gone }) => (
  <svg width={700} height={420} viewBox="0 0 700 420" style={{ overflow: "visible", opacity: p }}>
    <path d="M120 360 L120 150 L350 40 L580 150 L580 360" fill="rgba(236,231,218,0.06)" stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
    <rect x={300} y={250} width={100} height={110} fill="none" stroke={GOLD} strokeWidth={4} />
    <rect x={170} y={200} width={80} height={70} fill="none" stroke={ICE} strokeWidth={3} />
    <rect x={450} y={200} width={80} height={70} fill="none" stroke={ICE} strokeWidth={3} />
    <path d="M40 380 L660 380" stroke={DIM} strokeWidth={14} strokeDasharray="34 14" opacity={1 - gone} />
  </svg>
);

/** A simple apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 90 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ROSE})` }}>
    <path d="M50 30 C35 18 12 25 14 52 C16 78 34 92 50 84 C66 92 84 78 86 52 C88 25 65 18 50 30 Z" fill={`${ROSE}55`} stroke={ROSE} strokeWidth={4} />
    <path d="M50 30 L53 12" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["If nothing has an essence, is anything really there", 960, 300, <Wd c={GOLD} s={52} serif>If nothing has an essence,</Wd>],
      ["If nothing has an essence, is anything really there", 960, 390, <Wd c={GOLD} s={52} serif>is anything really there?</Wd>, { d: 1.2 }],
      ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Part 4</Wd>, { d: 0.8 }],
    ]} />
  </AbsoluteFill>
);

const RecapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const concl = c("I want to stop, and draw some conclusions");
  const rows: [string, string, string, string][] = [
    ["An apple, a mountain, and a bat, a bee and an ant", "Part 1", "an apple · a mountain · a bat, a bee, an ant", ROSE],
    ["A bowl of liquid, a tick at a pool, and the box of space", "Part 2", "a bowl · a tick at a pool · the box of space", ICE],
    ["A measured value, two observers, and a stick in a dark room", "Part 3", "a measured value · two observers · a stick in the dark", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["Three parts, one pattern", 960, 110, <Wd c={CHALK} s={44} serif>Three parts, one pattern</Wd>]]} />
      {rows.map(([cue, part, label, col], i) => (
        <React.Fragment key={part}>
          <At x={470} y={230 + i * 90} o={ramp(t, c(cue), 0.5) * (1 - ramp(t, concl, 0.5))}><K c={col} s={26}>{part}</K></At>
          <At x={1050} y={230 + i * 90} o={ramp(t, c(cue) + 0.3, 0.5) * (1 - ramp(t, concl, 0.5))}><Wd c={CHALK} s={26}>{label}</Wd></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Undeniably there, given, measured from its own side", 560, 560, <Box c={ROSE} w={560} title="given" sub="undeniably there, from its own side" />, { pop: true, until: "I want to stop, and draw some conclusions" }],
        ["Or formed, in dependence", 1360, 560, <Box c={GOLD} w={560} title="formed" sub="in dependence, designated together" />, { pop: true, until: "I want to stop, and draw some conclusions" }],
        ["Each time, the formed view held", 1360, 700, <K c={GREEN} s={26}>each time, it held</K>, { pop: true, until: "I want to stop, and draw some conclusions" }],
        ["By experience, by logic, and by how things work", 960, 790, <Wd c={DIM} s={26}>by experience · by logic · by how things work</Wd>, { until: "I want to stop, and draw some conclusions" }],
        ["I want to stop, and draw some conclusions", 960, 450, <Wd c={GOLD} s={48} serif>Some conclusions</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FearScene: React.FC = () => {
  const { t } = useT();
  const words: [string, string, number, number][] = [
    ["The world must be hollow", "hollow", 520, 400],
    ["Ghostly", "ghostly", 960, 360],
    ["A kind of void", "void", 1400, 400],
    ["Things become dreamlike and thin", "dreamlike, thin", 700, 540],
    ["Nothing can really hurt", "nothing hurts", 1220, 540],
    ["And nothing really matters", "nothing matters", 960, 660],
  ];
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["And first, there is a fear to face", 960, 120, <Wd c={WARM} s={46} serif>First, a fear to face</Wd>],
        ["everything else will be heard wrongly", 960, 190, <Wd c={DIM} s={26}>unfaced, everything else is heard wrongly</Wd>],
        ["then nothing is really there", 960, 270, <Wd c={CHALK} s={32} serif>"no essence, so nothing is really there"</Wd>],
        ["Let me set this beside what happens", 960, 790, <Wd c={GOLD} s={32} serif>set beside what happens, three times</Wd>],
      ]} />
      {words.map(([cue, w, x, y], i) => (
        <At key={w} x={x + Math.sin(t * 0.8 + i) * 8} y={y + Math.cos(t * 0.7 + i) * 6} o={ramp(t, c(cue), 0.8) * (0.55 + 0.25 * Math.sin(t * 1.3 + i))}>
          <Wd c={DIM} s={36} serif>{w}</Wd>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const CarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Or look. I step off the curb");
  const hit = c("and the car knocks me down");
  const conds = c("The brakes");
  const k = ramp(t, look, 2.4);
  const carX = 1700 - k * 900;
  const fall = ramp(t, hit + 0.4, 0.6);
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, a car", 960, 100, <Wd c={WARM} s={48} serif>1 · A car</Wd>],
        ["it is only a shape in the mind", 960, 190, <Wd c={DIM} s={28}>surely only a shape in the mind…</Wd>, { until: "Or look. I step off the curb" }],
        ["It cannot really touch me", 960, 250, <Wd c={DIM} s={26}>…it cannot really touch me</Wd>, { until: "Or look. I step off the curb" }],
      ]} />
      {t < look && <At x={960} y={440} o={ramp(t, c("it is only a shape in the mind"), 0.6)}><Car w={360} dashed /></At>}
      {t >= look && t < conds && (
        <>
          <At x={960} y={560}><svg width={1600} height={20}><path d="M0 10 L1600 10" stroke={DIM} strokeWidth={4} /></svg></At>
          <At x={800} y={490} o={1}><Figure fall={fall} /></At>
          <At x={Math.max(carX, 1000)} y={500}><Car w={300} /></At>
          <Items items={[["and the car knocks me down", 960, 220, <Wd c={WARM} s={40} serif>and the car knocks me down</Wd>, { d: 0.4 }]]} />
        </>
      )}
      <Items items={[
        ["The brakes", 400, 340, <K c={CHALK} s={26}>the brakes</K>, { pop: true }],
        ["The speed", 680, 340, <K c={CHALK} s={26}>the speed</K>, { pop: true }],
        ["The weight", 960, 340, <K c={CHALK} s={26}>the weight</K>, { pop: true }],
        ["The road", 1240, 340, <K c={CHALK} s={26}>the road</K>, { pop: true }],
        ["My not looking", 1520, 340, <K c={CHALK} s={26}>my not looking</K>, { pop: true }],
        ["Conditions meet, and I am on the ground", 960, 450, <Wd c={GOLD} s={34} serif>conditions meet, and I am on the ground</Wd>],
        ["No essence was needed for that", 960, 530, <K c={GREEN} s={26}>no essence needed</K>, { pop: true }],
        ["The car was never dangerous because of a core inside it", 960, 650, <SK c={DIM} s={26} at="It is dangerous because of how it meets a body">dangerous by a core inside it</SK>],
        ["It is dangerous because of how it meets a body", 960, 740, <Wd c={GOLD} s={32} serif>dangerous by how it meets a body</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Or look. The rain still falls");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Second, the rain", 960, 100, <Wd c={ICE} s={48} serif>2 · The rain</Wd>],
        ["Surely, if the rain is empty, it is a kind of picture", 960, 190, <Wd c={DIM} s={28}>surely only a picture…</Wd>, { until: "Or look. The rain still falls" }],
        ["Nothing gets wet", 960, 250, <Wd c={DIM} s={26}>…nothing gets wet</Wd>, { until: "Or look. The rain still falls" }],
        ["The clothes still soak through", 420, 660, <K c={ICE} s={26}>clothes soak through</K>, { pop: true }],
        ["The river still rises, and the rice still grows", 960, 660, <K c={TEAL} s={26}>the river rises</K>, { pop: true }],
        ["The river still rises, and the rice still grows", 1500, 660, <K c={GREEN} s={26}>the rice grows</K>, { pop: true, d: 1.4 }],
        ["The rain works exactly as before", 960, 770, <Wd c={GOLD} s={34} serif>the rain works exactly as before</Wd>],
      ]} />
      <At x={960} y={430} o={ramp(t, c("Surely, if the rain is empty, it is a kind of picture"), 0.6) * (t < look ? 0.5 : 1)}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 900, height: 340, borderRadius: 12, border: t < look ? `3px dashed ${DIM}` : "none" }} />
          <div style={{ position: "absolute", left: 0, top: 0 }}><Rain p={t < look ? 0.4 : 1} w={900} h={340} /></div>
        </div>
      </At>
    </AbsoluteFill>
  );
};

const FeverScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const level = 0.25 + 0.6 * ramp(t, c("My temperature still climbs"), 2.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Third, a fever", 960, 100, <Wd c={WARM} s={48} serif>3 · A fever</Wd>],
        ["sickness is a sort of illusion", 960, 190, <Wd c={DIM} s={28}>surely sickness is a sort of illusion…</Wd>, { until: "Or look. I still catch the flu" }],
        ["I can think it away", 960, 250, <Wd c={DIM} s={26}>…I can think it away</Wd>, { until: "Or look. I still catch the flu" }],
        ["Or look. I still catch the flu", 1300, 300, <K c={WARM} s={28}>I still catch the flu</K>, { pop: true }],
        ["My head still aches", 1300, 390, <K c={CHALK} s={26}>my head still aches</K>, { pop: true }],
        ["My temperature still climbs", 1300, 480, <K c={WARM} s={26}>my temperature still climbs</K>, { pop: true }],
        ["And I still need rest, and medicine", 1300, 570, <K c={CHALK} s={26}>rest, and medicine</K>, { pop: true }],
        ["The medicine still works", 1300, 680, <Wd c={GREEN} s={30} serif>the medicine still works, along its own channels</Wd>],
      ]} />
      <At x={600} y={470} o={ramp(t, c("Third, a fever"), 0.6)}><Thermo level={level} /></At>
    </AbsoluteFill>
  );
};

const ContrastScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So without essence, the car still knocks you down", 520, 250, <K c={WARM} s={30}>the car still knocks you down</K>, { pop: true }],
      ["It still rains. And you still get sick", 960, 250, <K c={ICE} s={30}>it still rains</K>, { pop: true }],
      ["It still rains. And you still get sick", 1400, 250, <K c={ROSE} s={30}>you still get sick</K>, { pop: true, d: 1 }],
      ["That is the big contrast", 960, 120, <Wd c={GOLD} s={46} serif>The big contrast</Wd>],
      ["everything turns ghostly and void", 960, 420, <SK c={DIM} s={34} at="It is just the other way round" d={0.4}>without essence: ghostly and void</SK>],
      ["Nothing turns ghostly", 960, 540, <Wd c={GOLD} s={40} serif>Nothing turns ghostly.</Wd>],
      ["It is all exactly as vivid, as forceful, and as reliable as it was", 560, 670, <K c={GREEN} s={28}>as vivid</K>, { pop: true }],
      ["It is all exactly as vivid, as forceful, and as reliable as it was", 960, 670, <K c={GREEN} s={28}>as forceful</K>, { pop: true, d: 0.9 }],
      ["It is all exactly as vivid, as forceful, and as reliable as it was", 1360, 670, <K c={GREEN} s={28}>as reliable</K>, { pop: true, d: 1.8 }],
    ]} />
  </AbsoluteFill>
);

const HabitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const floorCue = c("But the force of the car never came from a core");
  return (
    <AbsoluteFill>
      {t < floorCue && (
        <Items items={[
          ["Where does the fear come from, then", 960, 110, <Wd c={CHALK} s={42} serif>Where does the fear come from?</Wd>],
          ["Not from looking", 960, 180, <K c={DIM} s={26}>not from looking</K>, { pop: true }],
          ["It is a misunderstanding, produced by confusion", 960, 250, <Wd c={WARM} s={32} serif>a misunderstanding, from habit</Wd>],
          ["Understanding. The habit links being real with having a core", 400, 430, <Box c={ICE} w={500} title="understanding" sub="real = has a core" />, { pop: true }],
          ["So when the core is denied", 400, 560, <Wd c={DIM} s={22}>deny the core, and reality seems denied</Wd>],
          ["Analysing. The habit analyses by looking for what something is made of", 960, 430, <Box c={VIOLET} w={500} title="analysing" sub="looking for what lies underneath" />, { pop: true }],
          ["it reports: nothing there", 960, 560, <SK c={DIM} s={24} at="Instead of: nothing missing">nothing there</SK>],
          ["Instead of: nothing missing", 960, 630, <K c={GREEN} s={26}>nothing missing</K>, { pop: true }],
          ["Orienting. The habit stands as a solid me in here", 1520, 430, <Box c={ROSE} w={500} title="orienting" sub="a solid me, facing solid things" />, { pop: true }],
          ["feels it has lost its footing", 1520, 560, <Wd c={DIM} s={22}>it feels it has lost its footing</Wd>],
          ["As if the ground had dropped away", 1520, 620, <Wd c={DIM} s={22}>as if the ground had dropped away</Wd>],
        ]} />
      )}
      {t >= floorCue && (
        <>
          <Items items={[
            ["But the force of the car never came from a core", 960, 110, <Wd c={CHALK} s={38} serif>The force never came from a core</Wd>],
            ["Remove the essence, and nothing is removed from the working", 960, 180, <Wd c={DIM} s={26}>remove the essence, and nothing is removed from the working</Wd>],
            ["It sees the floor gone, and expects the room to fall", 1500, 380, <Wd c={DIM} s={26}>floor gone: will the room fall?</Wd>],
            ["The room was never standing on that floor", 1500, 450, <K c={GOLD} s={26}>it never stood on that floor</K>, { pop: true }],
            ["This is why I call it a misunderstanding, not a discovery", 960, 720, <Wd c={CHALK} s={28}>a misunderstanding, not a discovery</Wd>],
            ["It is the inherent view in mourning", 960, 800, <Wd c={GOLD} s={36} serif>Nihilism: the inherent view in mourning.</Wd>],
          ]} />
          <At x={720} y={440} o={ramp(t, c("The ghostliness is the old view looking at emptiness through its own glasses"), 0.6)}>
            <Room p={1} gone={ramp(t, c("It sees the floor gone, and expects the room to fall"), 1.6)} />
          </At>
        </>
      )}
    </AbsoluteFill>
  );
};

const ShownScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So what have the first three parts shown", 960, 110, <Wd c={CHALK} s={42} serif>What the first three parts have shown</Wd>],
      ["The given is the default, not the finding", 960, 210, <K c={ROSE} s={28}>the given: the default, not the finding</K>, { pop: true }],
      ["They are supplied", 960, 270, <Wd c={DIM} s={22}>the self-standing apple, the neutral liquid, the value before measuring: supplied</Wd>],
      ["What appears is formed", 960, 350, <K c={GOLD} s={28}>what appears is formed</K>, { pop: true }],
      ["Agreement needs no floor", 960, 430, <K c={TEAL} s={28}>agreement needs no floor</K>, { pop: true }],
      ["No new floor, either", 960, 510, <K c={VIOLET} s={28}>no new floor: not mind, not relations</K>, { pop: true }],
      ["Nothing that works is lost", 960, 590, <K c={GREEN} s={28}>nothing that works is lost</K>, { pop: true }],
      ["And now a fourth. Without essence, nothing turns ghostly", 960, 690, <Wd c={GOLD} s={34} serif>and now: nothing turns ghostly</Wd>],
      ["What goes is only the floor that was never there", 960, 780, <Wd c={DIM} s={24}>only the floor that was never there goes, and the fear it grew</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["One last time in this section, the test", 960, 110, <Wd c={GOLD} s={44} serif>One last time, the test</Wd>],
      ["By experience. In four parts, an essence was never met", 400, 300, <Box c={TEAL} w={520} title="by experience" sub="in four parts, an essence never met" />, { pop: true }],
      ["What was met was always the appearing itself", 400, 430, <Wd c={DIM} s={22}>only the appearing: vivid, exact</Wd>],
      ["By logic. Anything put forward as standing on its own has to be picked out", 960, 300, <Box c={VIOLET} w={520} title="by logic" sub="picked out, so dependent" />, { pop: true }],
      ["And the ghostly void is no better off", 960, 430, <Wd c={DIM} s={22}>the ghostly void undoes itself too</Wd>],
      ["By working. The car knocks you down", 1520, 300, <Box c={GREEN} w={520} title="by working" sub="car, rain, fever, medicine" />, { pop: true }],
      ["Dependence explains all of it", 1520, 430, <Wd c={DIM} s={22}>dependence explains all of it</Wd>],
      ["So the given, the inherent, is not the truer view", 960, 620, <Wd c={CHALK} s={32} serif>the given is not the truer view</Wd>],
      ["And the ghostly void it fears is its own shadow", 960, 710, <Wd c={GOLD} s={34} serif>the void it fears is its own shadow</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const icons: [string, string, string][] = [
    ["An apple tossed from hand to hand", "an apple", ROSE], ["A mountain", "a mountain", ICE], ["A bowl of liquid", "a bowl", ICE],
    ["A tick at a pool", "a tick", WARM], ["A click in a laboratory", "a click", GOLD], ["A car, the rain, a fever", "a car · rain · a fever", WARM],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["I want to say plainly why I keep using these examples", 960, 110, <Wd c={GOLD} s={42} serif>Why these examples?</Wd>],
        ["They are not decorations for an argument", 960, 360, <SK c={DIM} s={28} at="The whole purpose is to correct a misconception">decorations for an argument</SK>],
        ["The whole purpose is to correct a misconception", 960, 450, <Wd c={GOLD} s={36} serif>to correct a misconception…</Wd>],
        ["and to do it with impact", 960, 520, <K c={WARM} s={28}>…with impact</K>, { pop: true }],
        ["The misconception does not live in our theories", 560, 630, <SK c={DIM} s={24} at="It lives in how the apple feels in the hand">in our theories</SK>],
        ["It lives in how the apple feels in the hand", 1360, 630, <K c={ROSE} s={24}>in how the apple feels in the hand</K>, { pop: true }],
        ["An argument alone rarely reaches that far", 960, 700, <Wd c={DIM} s={24}>an argument alone rarely reaches that far</Wd>],
        ["The contrast has to be felt, not only followed", 960, 800, <Wd c={GOLD} s={36} serif>felt, not only followed</Wd>],
      ]} />
      {icons.map(([cue, w, col], i) => (
        <At key={w} x={300 + i * 264} y={230} o={ramp(t, c(cue), 0.5)} s={pop(t, 30, c(cue))}><K c={col} s={22}>{w}</K></At>
      ))}
      <At x={960} y={360} o={0}><Apple /></At>
    </AbsoluteFill>
  );
};

const GradualScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const steps: [string, string, string][] = [
    ["The first response is usually rejection", "rejection", WARM],
    ["starts to make sense", "makes sense", CHALK],
    ["What makes sense starts to look logical", "logical", VIOLET],
    ["And the dependent view that is simply tenable", "tenable", GOLD],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["I know it is not easy to turn around and see this", 960, 110, <Wd c={CHALK} s={40} serif>Not easy to turn around and see</Wd>],
        ["The habit is older than any thought", 960, 180, <Wd c={DIM} s={26}>the habit is older than any thought</Wd>],
        ["That is natural", 400, 520, <Wd c={DIM} s={22}>that is natural</Wd>],
        ["I do not expect one reading, or one video, to undo it", 960, 760, <Wd c={DIM} s={24}>not undone by one reading, or one video</Wd>, { until: "But it is gradual" }],
        ["But it is gradual", 960, 270, <Wd c={GOLD} s={42} serif>But it is gradual.</Wd>],
        ["it loosens a little", 960, 330, <Wd c={DIM} s={24}>each time, it loosens a little</Wd>],
        ["it is the old view that looks strange", 960, 600, <Wd c={DIM} s={26}>in the end, the old view looks strange</Wd>],
        ["From rejection to acceptance", 960, 720, <Wd c={GOLD} s={34} serif>from rejection to acceptance</Wd>],
        ["to highly logical and tenable", 960, 790, <Wd c={GOLD} s={30} serif>from counter-intuitive to logical and tenable</Wd>],
        ["That is the turn these examples are for", 960, 850, <Wd c={DIM} s={22}>the turn these examples are for</Wd>],
      ]} />
      <Svg>
        <path d="M400 440 L1520 440" stroke={DIM} strokeWidth={3} strokeDasharray="10 8" opacity={ramp(t, c("But it is gradual"), 0.8)} />
      </Svg>
      {steps.map(([cue, w, col], i) => (
        <At key={w} x={400 + i * 373} y={440} o={ramp(t, c(cue), 0.5)} s={pop(t, 30, c(cue))}><K c={col} s={28}>{w}</K></At>
      ))}
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("Vivid and working, with nothing behind it, and nothing missing");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 6, 1.5) }}>
      <Items items={[
        ["This is Part 4 of the Dependent Arising series, and the close of its first section", 960, 120, <Wd c={GOLD} s={42} serif>Dependent Arising · Part 4 · the close of the first section</Wd>],
        ["Next, the series turns to other major sides of dependent arising", 960, 210, <Wd c={DIM} s={26}>next, other major sides of dependent arising</Wd>],
        ["What is a phenomenon", 480, 340, <Box c={ICE} w={440} title="What is a phenomenon?" />, { pop: true }],
        ["Mind and matter", 960, 340, <Box c={VIOLET} w={440} title="Mind and matter" />, { pop: true }],
        ["And the logic of dependency", 1440, 340, <Box c={GREEN} w={440} title="The logic of dependency" />, { pop: true }],
        ["What is left when essence goes is not less than before", 960, 520, <Wd c={CHALK} s={32} serif>what is left when essence goes is not less</Wd>],
        ["It is exactly this", 960, 600, <Wd c={GOLD} s={40} serif>It is exactly this.</Wd>],
        ["Vivid and working, with nothing behind it, and nothing missing", 960, 690, <Wd c={CHALK} s={28}>vivid and working · nothing behind it · nothing missing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["If nothing has an essence, is anything really there", "dusk", <OpenScene />],
    ["Three parts, one pattern", "search", <RecapScene />],
    ["And first, there is a fear to face", "ghost", <FearScene />],
    ["First, a car", "street", <CarScene />],
    ["Second, the rain", "rain", <RainScene />],
    ["Third, a fever", "fever", <FeverScene />],
    ["So without essence, the car still knocks you down", "whole", <ContrastScene />],
    ["Where does the fear come from, then", "deep", <HabitScene />],
    ["So what have the first three parts shown", "jade", <ShownScene />],
    ["One last time in this section, the test", "whole", <WhichScene />],
    ["I want to say plainly why I keep using these examples", "light", <WhyScene />],
    ["I know it is not easy to turn around and see this", "doubt", <GradualScene />],
    ["This is Part 4 of the Dependent Arising series, and the close of its first section", "night", <CloseScene />],
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
