// Chapter 2: The Logical Impossibility of Intrinsic Nature. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb, Phone,
  ROSE, Reveal, Ring, Scene, SERIF, Snowflake, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Hold your phone", "ask it a simple question", "What are you, in yourself",
  "Most people will grant", "depends on many things", "the defender of substance", "one last reply", "Yes, it depends",
  "beneath the dependencies", "Intrinsic nature means", "apart from everything else", "the ground that decides",
  "the defence meets a problem", "an independent ground", "without pointing back", "only name it", "it adds nothing", "described again",
  "So let us search", "Start with structure", "Lay out the glass", "not among the parts", "not their heap", "how they hold together",
  "not one more part",
  "Look to its origin", "Designers", "a factory", "mined lithium", "a long line of telephones", "None of that is inside",
  "known through all of it",
  "Look to its function", "a network", "a charger", "a hand, and someone", "the other end", "In a world without networks",
  "a smooth slab of glass",
  "Look to its qualities", "cool against a warm palm", "bright against a dim room", "Look to its continuity", "same phone as yesterday",
  "before and after", "look to its boundary", "Is the case part of it", "The cable", "The photographs on a server", "Where the phone ends",
  "for a purpose",
  "Everywhere we look", "something vivid", "something dependent", "Nothing unconditioned is left over",
  "Now try a test", "Take off the case", "Crack the screen", "Take out the battery", "A dead phone", "Remove the board", "the speaker",
  "the camera", "stop saying phone", "start saying parts", "no essence ever left", "No single part", "the words work", "a pile of components",
  "more than tidying up", "Occam's razor", "a ghost in the attic", "the wind explains", "leaves the ghost possible", "a square circle",
  "does not describe anything", "this second kind", "a demand that nothing could meet",
  "Why can nothing escape", "a pure awareness", "a final particle", "to pick it out", "a contrast with what it is not",
  "a name to pick it out", "already depends on what",
  "This does not mean", "the mind makes the phone", "dependence is not the new foundation", "picked out by contrast", "empty as well",
  "The phone still rings", "never needed to be made",
];

const M = {
  intro: { a: "rgba(30,110,130,0.55)", b: "rgba(110,60,170,0.5)", c: "rgba(150,110,50,0.35)" },
  defence: { a: "rgba(150,110,50,0.45)", b: "rgba(90,60,160,0.45)", c: "rgba(40,90,120,0.3)" },
  problem: { a: "rgba(140,70,90,0.42)", b: "rgba(90,60,160,0.45)", c: "rgba(150,110,50,0.3)" },
  structure: { a: "rgba(30,120,140,0.5)", b: "rgba(60,80,160,0.4)", c: "rgba(120,170,200,0.2)" },
  origin: { a: "rgba(160,100,50,0.45)", b: "rgba(60,120,90,0.4)", c: "rgba(150,110,50,0.3)" },
  func: { a: "rgba(40,60,150,0.5)", b: "rgba(30,130,140,0.45)", c: "rgba(110,60,170,0.3)" },
  qual: { a: "rgba(140,60,100,0.42)", b: "rgba(30,120,160,0.45)", c: "rgba(170,130,60,0.3)" },
  every: { a: "rgba(90,60,160,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(30,110,130,0.35)" },
  test: { a: "rgba(30,110,130,0.5)", b: "rgba(140,70,60,0.4)", c: "rgba(80,60,150,0.3)" },
  razor: { a: "rgba(50,50,120,0.5)", b: "rgba(120,50,110,0.42)", c: "rgba(40,90,120,0.3)" },
  escape: { a: "rgba(90,60,170,0.5)", b: "rgba(30,120,130,0.45)", c: "rgba(150,110,50,0.3)" },
  close: { a: "rgba(30,110,130,0.5)", b: "rgba(110,60,170,0.45)", c: "rgba(170,130,60,0.4)" },
};

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const Center: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);
const Arrow: React.FC<{ x1: number; y1: number; x2: number; y2: number; color: string; p: number }> = ({ x1, y1, x2, y2, color, p }) => {
  const a = Math.atan2(y2 - y1, x2 - x1), hx = x1 + (x2 - x1) * p, hy = y1 + (y2 - y1) * p;
  const pt = (d: number, s: number) => `${hx + Math.cos(a + s) * d},${hy + Math.sin(a + s) * d}`;
  return (
    <>
      <Flow x1={x1} y1={y1} x2={x2} y2={y2} color={color} p={p} />
      <Svg><polygon points={`${hx},${hy} ${pt(-26, 0.45)} ${pt(-26, -0.45)}`} fill={color} opacity={p > 0.05 ? 1 : 0} /></Svg>
    </>
  );
};

// ---------------------------------------------------------------- small icons
const Compass: React.FC = () => (
  <svg width={120} height={120} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <circle cx={50} cy={14} r={6} fill="none" stroke={GOLD} strokeWidth={3} />
    <path d="M50 20 L26 88 M50 20 L74 88" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
    <path d="M30 70 Q50 80 70 70" fill="none" stroke={CHALK} strokeWidth={2.5} strokeDasharray="4 4" />
  </svg>
);
const Factory: React.FC = () => (
  <svg width={150} height={124} viewBox="0 0 170 140" style={{ filter: `drop-shadow(0 0 8px ${DIM})` }}>
    <path d="M10 130 L10 70 L50 50 L50 70 L90 50 L90 70 L130 50 L130 130 Z" fill="#ffffff10" stroke={CHALK} strokeWidth={3} strokeLinejoin="round" />
    <rect x={135} y={20} width={22} height={110} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
    {[30, 70, 110].map((x) => <rect key={x} x={x - 8} y={95} width={16} height={16} fill={`${GOLD}88`} />)}
  </svg>
);
const Crystal: React.FC = () => (
  <svg width={110} height={120} viewBox="0 0 100 110" style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }}>
    <polygon points="50,5 88,30 88,80 50,105 12,80 12,30" fill={`${GREEN}33`} stroke={GREEN} strokeWidth={3} />
    <path d="M50 5 L50 105 M12 30 L88 80 M88 30 L12 80" stroke={GREEN} strokeOpacity={0.5} strokeWidth={2} />
  </svg>
);
const OldPhone: React.FC<{ s: number }> = ({ s }) => (
  <svg width={110 * s} height={90 * s} viewBox="0 0 110 90" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
    <path d="M10 30 Q55 0 100 30 L92 40 Q55 18 18 40 Z" fill={`${ROSE}44`} stroke={ROSE} strokeWidth={3} />
    <path d="M28 44 L82 44 L98 86 L12 86 Z" fill={`${ROSE}22`} stroke={ROSE} strokeWidth={3} strokeLinejoin="round" />
    <circle cx={55} cy={66} r={13} fill="none" stroke={ROSE} strokeWidth={3} />
  </svg>
);
const Tower: React.FC<{ on: number }> = ({ on }) => {
  const { t } = useT();
  return (
    <svg width={200} height={220} viewBox="-100 -110 200 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${TEAL})` }}>
      <path d="M0 -60 L-40 100 M0 -60 L40 100 M-30 60 L30 60 M-20 20 L20 20 M-12 -20 L12 -20" stroke={TEAL} strokeWidth={4} fill="none" />
      <circle cx={0} cy={-64} r={8} fill={TEAL} />
      {[0, 1, 2].map((k) => {
        const u = ((t * 0.7 + k / 3) % 1);
        return <path key={k} d={`M${-30 - u * 60} ${-90 - u * 20} A ${40 + u * 70} ${40 + u * 70} 0 0 1 ${30 + u * 60} ${-90 - u * 20}`}
          stroke={TEAL} strokeWidth={4} fill="none" opacity={on * (1 - u)} />;
      })}
    </svg>
  );
};
const Plug: React.FC = () => (
  <svg width={150} height={110} viewBox="0 0 150 110" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <rect x={60} y={30} width={60} height={50} rx={10} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={3} />
    <path d="M120 45 L142 45 M120 65 L142 65" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    <path d="M60 55 C 30 55, 30 95, 4 95" stroke={GOLD} strokeWidth={4} fill="none" />
  </svg>
);
const Person: React.FC<{ color: string }> = ({ color }) => (
  <svg width={120} height={130} viewBox="0 0 100 110" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={50} cy={30} r={20} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <path d="M12 105 C 14 70, 86 70, 88 105 Z" fill={`${color}22`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);
const Cloud: React.FC = () => (
  <svg width={240} height={170} viewBox="0 0 240 170" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <path d="M50 120 C 10 120, 10 70, 50 70 C 55 30, 115 25, 125 60 C 150 35, 200 50, 195 85 C 230 90, 225 125, 190 125 Z"
      fill={`${ICE}22`} stroke={ICE} strokeWidth={3} />
    {[0, 1, 2].map((i) => <rect key={i} x={70 + i * 38} y={78} width={30} height={24} rx={3} fill={[GOLD, ROSE, GREEN][i]} opacity={0.75} />)}
  </svg>
);
const Ghost: React.FC<{ dashed?: boolean }> = ({ dashed }) => (
  <svg width={120} height={140} viewBox="0 0 100 120" style={{ filter: `drop-shadow(0 0 10px ${CHALK})` }}>
    <path d="M15 110 L15 50 C 15 10, 85 10, 85 50 L85 110 L72 98 L60 110 L50 98 L40 110 L28 98 Z" fill={dashed ? "none" : "#ffffff22"}
      stroke={CHALK} strokeWidth={3} strokeDasharray={dashed ? "7 6" : undefined} />
    <circle cx={38} cy={50} r={6} fill={CHALK} /><circle cx={62} cy={50} r={6} fill={CHALK} />
  </svg>
);
const Head: React.FC = () => (
  <svg width={220} height={260} viewBox="0 0 220 260" style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
    <path d="M70 250 L70 200 C 30 180, 20 120, 40 80 C 60 30, 150 20, 180 70 C 195 95, 190 120, 200 140 L185 150 C 190 175, 180 190, 150 190 L150 250 Z"
      fill={`${VIOLET}22`} stroke={VIOLET} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// ---------------------------------------------------------------- 1. the question
const IntroScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("ask it a simple question");
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, c("Hold your phone"), 14) * 0.95}><Phone screen={ramp(t, c("Hold your phone") + 0.4, 1)} /></At>
      <At x={1330} y={260} s={pop(t, fps, q, 9)} r={Math.sin(t * 1.5) * 6}><Glow color={GOLD} size={170} serif>?</Glow></At>
      <Ring x={960} y={430} p={ramp(t, c("What are you, in yourself"), 1.6)} r0={160} r1={480} color={GOLD} />
      <Center top={740}><Reveal text="What are you, in yourself?" at={c("What are you, in yourself")} size={74} /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the defence
const DEPS = [
  { a: -155, label: "light", color: GOLD }, { a: -90, label: "network", color: TEAL }, { a: -25, label: "your hand", color: ROSE },
  { a: 25, label: "charger", color: GREEN }, { a: 155, label: "the word", color: VIOLET },
];
const DefenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cx = 960, cy = 430;
  const many = c("depends on many things");
  const core = ramp(t, c("beneath the dependencies"), 1.0);
  const apart = ramp(t, c("apart from everything else"), 1.0);
  const ground = c("the ground that decides");
  const g = ramp(t, ground, 0.8);
  return (
    <AbsoluteFill>
      {DEPS.map((d, i) => {
        const a = (d.a * Math.PI) / 180, x = cx + 520 * Math.cos(a), y = cy + 200 * Math.sin(a);
        const on = pop(t, fps, many + i * 0.15);
        return (
          <React.Fragment key={i}>
            <Flow x1={x} y1={y} x2={cx + (x - cx) * 0.3} y2={cy + (y - cy) * 0.3} color={d.color} p={ramp(t, many + 0.2 + i * 0.15, 0.6) * (1 - 0.7 * apart)} />
            <At x={x} y={y} s={on} o={1 - 0.6 * apart}><Orb size={58} color={d.color} /><Glow color={d.color} size={28} style={{ marginTop: 4 }}>{d.label}</Glow></At>
            <Flow x1={cx + (x - cx) * 0.15} y1={790} x2={x} y2={y + 40} color={WARM} p={ramp(t, ground + 0.8 + i * 0.1, 0.6)} pulses dash />
          </React.Fragment>
        );
      })}
      <At x={cx} y={cy} s={0.62}><Phone screen={0.7} rim={core > 0.5 ? GOLD : TEAL} /></At>
      <At x={cx} y={cy} s={0.4 + 0.6 * core} o={core}><Orb size={150} color={GOLD} core={core} /></At>
      <At x={cx} y={cy + 240} o={ramp(t, c("Intrinsic nature means") + 0.6, 0.6) * (1 - g)}><Glow color={GOLD} size={34}>from its own side</Glow></At>
      <Center top={40}><Reveal text="intrinsic nature" at={c("Intrinsic nature means")} size={80} /></Center>
      <At x={420} y={120} o={between(t, c("the defender of substance"), c("Intrinsic nature means") - 0.4)} s={pop(t, fps, c("the defender of substance"))}>
        <Chip color={WARM} size={34}>the defender of substance</Chip>
      </At>
      <At x={1450} y={120} s={pop(t, fps, c("one last reply"), 10)} o={1 - ramp(t, c("Intrinsic nature means") - 0.3, 0.4)}>
        <div style={{ padding: "16px 30px", borderRadius: 24, border: `2px solid ${CHALK}`, background: "rgba(255,255,255,0.08)", fontFamily: SERIF, fontSize: 46, color: CHALK }}>
          {t > c("Yes, it depends") ? "Yes, it depends... but" : "..."}
        </div>
      </At>
      <At x={cx} y={800} s={pop(t, fps, ground, 12)} o={g}>
        <div style={{ width: 900, height: 34, borderRadius: 8, background: `linear-gradient(90deg, ${WARM}44, ${WARM}, ${WARM}44)`, boxShadow: `0 0 30px ${WARM}` }} />
      </At>
      <At x={1560} y={760} o={ramp(t, ground + 0.4, 0.5)}><Glow color={WARM} size={36}>a ground that decides?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the problem: pointing back
const Cluster: React.FC<{ x: number; y: number; dashed?: boolean; s?: number; o?: number }> = ({ x, y, dashed, s = 1, o = 1 }) => {
  const pts = [[-110, -70], [100, -90], [130, 70], [-80, 100], [10, 0]];
  return (
    <div style={{ position: "absolute", left: 0, top: 0, opacity: o, transform: `translate(${x}px, ${y}px) scale(${s})` }}>
      <svg width={1} height={1} style={{ overflow: "visible", position: "absolute" }}>
        {[[0, 4], [1, 4], [2, 4], [3, 4], [0, 1], [2, 3]].map(([a, b], i) => (
          <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={TEAL} strokeWidth={3} strokeDasharray={dashed ? "8 7" : undefined}
            style={{ filter: `drop-shadow(0 0 6px ${TEAL})` }} />
        ))}
        {pts.map(([px, py], i) => <circle key={i} cx={px} cy={py} r={i === 4 ? 26 : 20} fill={dashed ? "none" : `${TEAL}66`} stroke={TEAL} strokeWidth={3}
          strokeDasharray={dashed ? "6 5" : undefined} style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} />)}
      </svg>
    </div>
  );
};
const ProblemScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("the defence meets a problem");
  const back = ramp(t, c("without pointing back"), 1.0);
  const nothing = ramp(t, c("it adds nothing"), 0.8);
  const again = ramp(t, c("described again"), 1.0);
  const drop = ramp(t, c("described again") + 0.8, 1.4);
  const { f } = useT();
  const loop = `M 640 360 C 760 140, 1200 140, 1300 300`;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={56} serif>an independent ground?</Glow></At>
      <Cluster x={1340} y={450} s={pop(t, fps, t0 + 0.3)} />
      <At x={1340} y={640} o={ramp(t, t0 + 0.5, 0.5)}><Glow color={TEAL} size={34}>the dependencies</Glow></At>
      <At x={580} y={450} s={pop(t, fps, t0) * (1 - 0.55 * nothing)} o={1 - again}><Orb size={190} color={GOLD} core={1} /></At>
      <At x={580} y={640} o={ramp(t, t0, 0.5) * (1 - again)}><Glow color={GOLD} size={34}>intrinsic nature</Glow></At>
      <Svg>
        <DrawPath d={loop} p={back} color={ROSE} width={5} len={900} />
        <polygon points="1300,300 1268,286 1290,262" fill={ROSE} opacity={ramp(t, c("without pointing back") + 0.8, 0.3)} />
      </Svg>
      <At x={960} y={255} o={ramp(t, c("only name it"), 0.5) * (1 - again)}><Glow color={ROSE} size={34}>named only by pointing back</Glow></At>
      <At x={580} y={300} o={between(t, c("it adds nothing"), c("described again") - 0.2)}><Glow color={WARM} size={44}>adds nothing</Glow></At>
      <Cluster x={580} y={450} dashed s={0.2 + 0.8 * again} o={again} />
      <At x={580} y={640} o={again}><Glow color={TEAL} size={34}>the same, described again</Glow></At>
      <At x={960} y={450} o={again * (0.6 + 0.4 * Math.sin(f / 8))}><Glow color={CHALK} size={80} serif>=</Glow></At>
      <At x={580 - drop * 40} y={790 + drop * 160} o={ramp(t, t0, 0.5) * (1 - drop)} r={-drop * 8}>
        <div style={{ width: 600, height: 26, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}44, ${WARM}, ${WARM}44)`, boxShadow: `0 0 26px ${WARM}` }} />
      </At>
      <At x={1000} y={790} o={ramp(t, t0, 0.5) * (1 - drop)}><Glow color={WARM} size={30}>the ground?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. the search
const QUESTIONS = ["structure", "origin", "function", "qualities", "continuity", "boundary"];
const Tracker: React.FC<{ marks: number[] }> = ({ marks }) => {
  const { t } = useT();
  const cur = marks.filter((m) => t >= m).length - 1;
  return (
    <>
      {QUESTIONS.map((q, i) => {
        const on = ramp(t, marks[i], 0.5);
        const active = i === cur;
        return (
          <At key={q} x={385 + i * 230} y={70} s={active ? 1.12 : 0.92} o={0.35 + 0.65 * on}>
            <Chip color={active ? GOLD : on > 0.5 ? TEAL : DIM} size={28}>{q}</Chip>
          </At>
        );
      })}
    </>
  );
};

type PartKey = "case" | "board" | "battery" | "glass";
const PartView: React.FC<{ k: PartKey }> = ({ k }) => {
  if (k === "case") return <div style={{ width: 220, height: 420, borderRadius: 42, border: `7px solid ${VIOLET}`, boxSizing: "border-box",
    background: "linear-gradient(150deg,#2a2550,#17142c)", boxShadow: `0 0 30px ${VIOLET}88` }} />;
  if (k === "battery") return <div style={{ width: 140, height: 240, borderRadius: 16, border: `3px solid ${GREEN}`, boxSizing: "border-box",
    background: `linear-gradient(180deg, ${GREEN}66, ${GREEN}22)`, boxShadow: `0 0 24px ${GREEN}88`, display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: SERIF, fontSize: 70, color: CHALK }}>+</div>;
  if (k === "board") return (
    <svg width={180} height={340} viewBox="0 0 180 340" style={{ filter: `drop-shadow(0 0 12px ${TEAL})` }}>
      <rect x={3} y={3} width={174} height={334} rx={14} fill="#0e4d47" stroke={TEAL} strokeWidth={3} />
      {[40, 90, 150, 210, 270].map((y, i) => <path key={i} d={`M15 ${y} L70 ${y} L90 ${y + 20} L165 ${y + 20}`} stroke={GOLD} strokeWidth={2} fill="none" opacity={0.8} />)}
      <rect x={55} y={110} width={70} height={70} rx={6} fill="#1b1d2b" stroke={CHALK} strokeWidth={2} />
      <rect x={40} y={230} width={40} height={30} rx={4} fill="#1b1d2b" stroke={CHALK} strokeWidth={2} />
    </svg>
  );
  return <div style={{ width: 200, height: 404, borderRadius: 34, border: `2px solid ${ICE}`, boxSizing: "border-box",
    background: "linear-gradient(135deg, rgba(225,246,255,0.35), rgba(110,170,215,0.08) 60%, rgba(225,246,255,0.25))", boxShadow: `0 0 24px ${ICE}88` }} />;
};
const PARTS: { k: PartKey; label: string; color: string }[] = [
  { k: "case", label: "case", color: VIOLET }, { k: "board", label: "circuit board", color: TEAL },
  { k: "battery", label: "battery", color: GREEN }, { k: "glass", label: "glass", color: ICE },
];
const StructureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Start with structure");
  const lay = ramp(t, c("Lay out the glass"), 1.3), heap = ramp(t, c("not their heap"), 1.0), hold = ramp(t, c("how they hold together"), 1.2);
  const notAmong = c("not among the parts");
  const layout = [1440, 1080, 760, 440];
  return (
    <AbsoluteFill>
      {PARTS.map((p, i) => {
        const ax = 960, ay = 470;
        const lx = layout[i], ly = 470;
        const hx = 900 + [0, 90, -60, 40][i], hy = 560 + [0, -30, 20, -60][i];
        let x = lerp(ax, lx, lay), y = lerp(ay, ly, lay);
        x = lerp(x, hx, heap); y = lerp(y, hy, heap);
        x = lerp(x, ax, hold); y = lerp(y, ay, hold);
        const r = heap * (1 - hold) * [-62, 20, 75, -28][i];
        const s = 1 - 0.35 * heap * (1 - hold);
        return (
          <React.Fragment key={p.k}>
            <At x={x} y={y} r={r} s={s * pop(t, fps, t0 + i * 0.12)}><PartView k={p.k} /></At>
            <At x={lx} y={720} o={lay * (1 - heap)}><Glow color={p.color} size={32}>{p.label}</Glow></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={800} o={between(t, notAmong, c("not their heap") - 0.2, 0.5)}><Glow color={WARM} size={40}>no phone among them</Glow></At>
      <At x={1380} y={560} o={between(t, c("not their heap"), c("how they hold together") - 0.1, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={46}>a heap</Glow><Strike at={c("not their heap") + 0.9} /></div>
      </At>
      <Svg style={{ opacity: hold }}>
        {[[960, 260], [960, 680], [850, 470], [1070, 470]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={12 + 6 * Math.sin(t * 4 + i)} fill="none" stroke={GOLD} strokeWidth={3} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
        ))}
      </Svg>
      <At x={960} y={470} o={hold * 0.9}><div style={{ width: 300, height: 520, borderRadius: 50, boxShadow: `0 0 60px ${GOLD}aa, inset 0 0 40px ${GOLD}55` }} /></At>
      <At x={1450} y={470} o={ramp(t, c("how they hold together") + 0.6, 0.6)}><Glow color={GOLD} size={42}>how they hold together</Glow></At>
      <At x={1450} y={540} o={ramp(t, c("not one more part"), 0.6)}><Glow color={DIM} size={32}>is not one more part</Glow></At>
    </AbsoluteFill>
  );
};

const OriginScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const src = [
    { ph: "Designers", x: 380, y: 300, color: GOLD, label: "designers", icon: <Compass /> },
    { ph: "a factory", x: 380, y: 640, color: CHALK, label: "a factory", icon: <Factory /> },
    { ph: "mined lithium", x: 1540, y: 300, color: GREEN, label: "lithium", icon: <Crystal /> },
    { ph: "a long line of telephones", x: 1540, y: 640, color: ROSE, label: "telephones before it",
      icon: <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}><OldPhone s={0.6} /><OldPhone s={0.8} /><OldPhone s={1} /></div> },
  ];
  const none = c("None of that is inside"), known = ramp(t, c("known through all of it"), 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={470} s={0.55 * pop(t, fps, c("Look to its origin"))}><Phone screen={0.8} rim={known > 0.5 ? GOLD : TEAL} /></At>
      <Ring x={960} y={470} p={ramp(t, none, 1.0)} r0={120} r1={200} color={WARM} />
      <At x={960} y={470} o={between(t, none, c("known through all of it"), 0.4)}>
        <div style={{ width: 300, height: 420, borderRadius: 40, border: `3px dashed ${WARM}` }} />
      </At>
      <At x={960} y={160} o={between(t, none + 0.3, c("known through all of it") + 3, 0.5)}><Glow color={WARM} size={40}>none of it inside</Glow></At>
      {src.map((s, i) => {
        const at = c(s.ph, 0.15);
        const ex = 960 + (s.x < 960 ? -190 : 190), ey = 470 + (s.y < 470 ? -90 : 90);
        return (
          <React.Fragment key={i}>
            <Flow x1={s.x + (s.x < 960 ? 110 : -130)} y1={s.y} x2={ex} y2={ey} color={known > 0.3 ? GOLD : s.color} p={ramp(t, at + 0.4, 0.8)} dash={known < 0.3} />
            <At x={s.x} y={s.y} s={pop(t, fps, at)}>{s.icon}<Glow color={s.color} size={30} style={{ marginTop: 6 }}>{s.label}</Glow></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={800} o={known}><Glow color={GOLD} size={42}>known through all of it</Glow></At>
    </AbsoluteFill>
  );
};

const FunctionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const off = ramp(t, c("In a world without networks"), 1.0);
  const slab = c("a smooth slab of glass");
  const items = [
    { ph: "a network", x: 400, y: 330, node: <Tower on={1 - off} />, color: TEAL, label: "network" },
    { ph: "a charger", x: 520, y: 700, node: <Plug />, color: GOLD, label: "charger" },
    { ph: "a hand, and someone", x: 1400, y: 690, node: <Hand size={130} />, color: ROSE, label: "a hand" },
    { ph: "the other end", x: 1530, y: 320, node: <Person color={VIOLET} />, color: VIOLET, label: "someone at the other end" },
  ];
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, c("the other end"), 0.6) * (1 - off) }}>
        <DrawPath d="M1080 300 Q 1300 120, 1470 260" p={ramp(t, c("the other end"), 1.0)} color={VIOLET} width={4} len={600} />
      </Svg>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <Flow x1={it.x} y1={it.y} x2={960 + (it.x - 960) * 0.3} y2={470 + (it.y - 470) * 0.3} color={it.color} p={ramp(t, c(it.ph, 0.1) + 0.3, 0.6) * (1 - off)} />
          <At x={it.x} y={it.y} s={pop(t, fps, c(it.ph, 0.15))} o={1 - 0.85 * off} blur={off * 8}>{it.node}<Glow color={it.color} size={30}>{it.label}</Glow></At>
        </React.Fragment>
      ))}
      <At x={960} y={470} s={0.62 * pop(t, fps, c("Look to its function"))}><Phone screen={1 - off} rim={off > 0.5 ? DIM : TEAL} tilt={off < 0.5} /></At>
      {[0, 1].map((k) => <Ring key={k} x={960} y={470} p={ramp(t, c("the other end") + 0.3 + k * 0.4, 1.0) * (1 - off)} r0={200} r1={300} color={TEAL} />)}
      <At x={400} y={330} o={ramp(t, c("In a world without networks") + 0.2, 0.5)}>
        <Svg style={{ left: -60, top: -60, width: 120, height: 120 }}>
          <DrawPath d="M10 10 L110 110" p={ramp(t, c("In a world without networks") + 0.2, 0.4)} color={WARM} width={8} len={150} />
          <DrawPath d="M110 10 L10 110" p={ramp(t, c("In a world without networks") + 0.4, 0.4)} color={WARM} width={8} len={150} />
        </Svg>
      </At>
      <Center top={790}><Reveal text="a smooth slab of glass" at={slab} size={62} color={ICE} top="#F0FBFF" /></Center>
    </AbsoluteFill>
  );
};

const QualScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q0 = c("Look to its qualities"), cont = c("Look to its continuity"), bnd = c("look to its boundary");
  const scratch = ramp(t, c("same phone as yesterday") + 1.2, 0.6);
  const purpose = c("Where the phone ends");
  return (
    <AbsoluteFill>
      <Scene from={q0 - 0.2} to={cont - 0.5}>
        <At x={560} y={440} s={pop(t, fps, c("cool against a warm palm"))}>
          <div style={{ position: "relative", width: 360, height: 360 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: `radial-gradient(circle, ${WARM}55, transparent 70%)` }} />
            <div style={{ position: "absolute", left: 40, top: 30 }}><Hand size={280} /></div>
            <div style={{ position: "absolute", left: 230, top: 40 }}><Snowflake size={90} rot={t * 40} /></div>
          </div>
        </At>
        <At x={560} y={720} o={ramp(t, c("cool against a warm palm"), 0.6)}><Glow color={ICE} size={36}>cool, against a warm palm</Glow></At>
        <At x={1360} y={440} s={pop(t, fps, c("bright against a dim room"))}>
          <div style={{ width: 460, height: 340, borderRadius: 12, background: "linear-gradient(180deg,#0b0c18,#141428)", border: `2px solid ${DIM}`,
            boxShadow: "inset 0 0 80px #000", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 200, top: 120, width: 60, height: 110, borderRadius: 10, background: `linear-gradient(140deg, ${TEAL}, ${VIOLET})`,
              boxShadow: `0 0 80px 30px ${TEAL}88` }} />
          </div>
        </At>
        <At x={1360} y={720} o={ramp(t, c("bright against a dim room"), 0.6)}><Glow color={TEAL} size={36}>bright, against a dim room</Glow></At>
      </Scene>
      <Scene from={cont - 0.3} to={bnd - 0.5}>
        <Svg><line x1={300} y1={600} x2={1620} y2={600} stroke={DIM} strokeWidth={3} />
          <polygon points="1620,600 1596,588 1596,612" fill={DIM} /></Svg>
        <At x={560} y={400} s={0.5 * pop(t, fps, cont)}><Phone screen={0.8} tilt={false} /></At>
        <At x={1360} y={400} s={0.5 * pop(t, fps, c("same phone as yesterday"))}><Phone screen={0.8} tilt={false} /></At>
        <Svg><DrawPath d="M1405 270 L1440 300 L1425 318" p={scratch} color={CHALK} width={4} len={90} /></Svg>
        <At x={560} y={660} o={ramp(t, cont, 0.6)}><Glow color={DIM} size={34}>yesterday</Glow></At>
        <At x={1360} y={660} o={ramp(t, c("same phone as yesterday"), 0.6)}><Glow color={DIM} size={34}>today, one new scratch</Glow></At>
        <Flow x1={720} y1={400} x2={1200} y2={400} color={GOLD} p={ramp(t, c("same phone as yesterday") + 0.4, 0.8)} />
        <At x={960} y={350} o={ramp(t, c("same phone as yesterday") + 0.6, 0.6)}><Glow color={GOLD} size={38}>the same phone</Glow></At>
        <At x={960} y={430} o={ramp(t, c("before and after"), 0.6)}>
          <div style={{ width: 1500, height: 560, borderRadius: 24, border: `3px dashed ${ICE}`, boxShadow: `0 0 20px ${ICE}55` }} />
        </At>
        <At x={960} y={760} o={ramp(t, c("before and after"), 0.6)}><Chip color={ICE} size={30}>a frame of before and after</Chip></At>
      </Scene>
      <Scene from={bnd - 0.3} to={1e9}>
        <At x={600} y={440} s={0.5 * pop(t, fps, bnd)}><Phone screen={0.9} /></At>
        <At x={600} y={440} o={ramp(t, c("Is the case part of it"), 0.5)}>
          <div style={{ width: 200, height: 360, borderRadius: 34, border: `4px dashed ${VIOLET}`, boxShadow: `0 0 18px ${VIOLET}` }} />
        </At>
        <At x={600} y={235} o={ramp(t, c("Is the case part of it"), 0.5)}><Glow color={VIOLET} size={30}>the case?</Glow></At>
        <Svg><DrawPath d="M600 590 C 600 740, 820 760, 860 640" p={ramp(t, c("The cable"), 0.8)} color={GOLD} width={5} len={500} /></Svg>
        <At x={900} y={600} o={ramp(t, c("The cable") + 0.4, 0.5)}><Glow color={GOLD} size={30}>the cable?</Glow></At>
        <At x={1430} y={300} s={pop(t, fps, c("The photographs on a server"))}><Cloud /><Glow color={ICE} size={30}>photographs on a server?</Glow></At>
        <Flow x1={700} y1={360} x2={1300} y2={310} color={ICE} p={ramp(t, c("The photographs on a server") + 0.3, 0.8)} dash />
        <Svg>
          <DrawPath d="M440 200 C 900 120, 1700 120, 1700 360 C 1700 560, 1000 520, 900 760 C 820 840, 380 780, 400 520 C 410 360, 330 260, 440 200 Z"
            p={ramp(t, purpose, 2.0)} color={GOLD} width={4} len={4200} />
        </Svg>
        <At x={1380} y={700} s={pop(t, fps, c("for a purpose"))}><Chip color={GOLD} size={36}>drawn for a purpose</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const SearchSeries: React.FC = () => {
  const c = useCue();
  const marks = [c("Start with structure"), c("Look to its origin"), c("Look to its function"), c("Look to its qualities"), c("Look to its continuity"), c("look to its boundary")];
  const { t } = useT();
  return (
    <AbsoluteFill>
      <At x={960} y={160} o={between(t, c("So let us search"), c("Start with structure") + 0.5, 0.5)}><Glow color={GOLD} size={56} serif>six places to look</Glow></At>
      <Tracker marks={marks} />
      <Scene from={c("Start with structure", 0.3)} to={c("Look to its origin", 0.9)}><StructureScene /></Scene>
      <Scene from={c("Look to its origin", 0.3)} to={c("Look to its function", 0.9)}><OriginScene /></Scene>
      <Scene from={c("Look to its function", 0.3)} to={c("Look to its qualities", 0.9)}><FunctionScene /></Scene>
      <Scene from={c("Look to its qualities", 0.3)} to={1e9}><QualScene /></Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. everywhere: vivid and dependent
const EveryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Everywhere we look");
  const vivid = ramp(t, c("something vivid"), 0.6), dep = ramp(t, c("something dependent"), 0.8);
  const none = c("Nothing unconditioned is left over");
  const cols = [VIOLET, GOLD, TEAL, ROSE, ICE, GREEN];
  const pos = QUESTIONS.map((_, i) => {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return [960 + 520 * Math.cos(a), 450 + 280 * Math.sin(a)];
  });
  return (
    <AbsoluteFill>
      {pos.map(([x, y], i) => {
        const [x2, y2] = pos[(i + 1) % 6];
        return <Flow key={`f${i}`} x1={x} y1={y} x2={x2} y2={y2} color={GOLD} p={dep} />;
      })}
      {pos.map(([x, y], i) => (
        <At key={i} x={x} y={y} s={pop(t, fps, t0 + i * 0.1)}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", width: 180, height: 180, transform: "translate(-50%,-50%)", borderRadius: "50%",
              background: `radial-gradient(circle, ${cols[i]}${vivid > 0.5 ? "77" : "00"}, transparent 70%)` }} />
            <Chip color={cols[i]} size={32}>{QUESTIONS[i]}</Chip>
          </div>
        </At>
      ))}
      <At x={760} y={250} o={vivid}><Glow color={ROSE} size={36}>vivid</Glow></At>
      <At x={1160} y={250} o={dep}><Glow color={GOLD} size={36}>dependent</Glow></At>
      <At x={960} y={450} o={ramp(t, none, 0.6)}>
        <div style={{ width: 210, height: 210, borderRadius: "50%", border: `3px dashed ${CHALK}`, boxShadow: `0 0 20px ${CHALK}44` }} />
      </At>
      <At x={960} y={450} o={ramp(t, none + 0.3, 0.6)}><Glow color={DIM} size={30}>empty-handed</Glow></At>
      <Center top={775}><Reveal text="nothing unconditioned left over" at={none + 0.4} size={60} /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. the lived test
const TestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Now try a test");
  const caseOff = ramp(t, c("Take off the case"), 1.0), crack = ramp(t, c("Crack the screen"), 0.6), batt = ramp(t, c("Take out the battery"), 1.0);
  const dead = ramp(t, c("A dead phone"), 0.8);
  const board = ramp(t, c("Remove the board"), 1.0), spk = ramp(t, c("the speaker"), 0.8), cam = ramp(t, c("the camera"), 0.8);
  const parts = ramp(t, c("start saying parts"), 0.6);
  const words = c("the words work");
  const pile = c("a pile of components");
  const shift = ramp(t, words - 0.3, 0.8);
  const px = 760, py = 440;
  const fly = (p: number, tx: number, ty: number) => ({ x: lerp(0, tx, p), y: lerp(0, ty, p) - Math.sin(p * Math.PI) * 120, r: p * 40 });
  const labels: [number, string][] = [[t0, "a phone"], [c("Take off the case"), "still a phone"], [c("Crack the screen"), "a cracked phone"],
    [c("A dead phone"), "a dead phone"], [c("start saying parts"), "parts"]];
  const curLabel = labels.filter(([s]) => t >= s).pop() || labels[0];
  const tray = [[1470, 300], [1650, 330], [1520, 520], [1700, 520], [1600, 650]];
  const P = (p: number, i: number) => fly(p, tray[i][0] - px, tray[i][1] - py);
  const caseP = P(caseOff, 0), battP = P(batt, 1), boardP = P(board, 2), spkP = P(spk, 3), camP = P(cam, 4);
  return (
    <AbsoluteFill style={{ transformOrigin: "1200px 450px", transform: `scale(${1 - 0.15 * shift}) translateY(${-60 * shift}px)` }}>
      <At x={px} y={140} o={ramp(t, t0, 0.5)}><Glow key={curLabel[1]} color={curLabel[1] === "parts" ? WARM : GOLD} size={56} serif>{curLabel[1]}</Glow></At>
      <div style={{ position: "absolute", left: px, top: py, transform: `scale(${pop(t, fps, t0)})` }}>
        <svg width={1} height={1} style={{ overflow: "visible", position: "absolute" }}>
          <g transform={`translate(${boardP.x} ${boardP.y}) rotate(${boardP.r})`}>
            <rect x={-90} y={-170} width={180} height={340} rx={14} fill="#0e4d47" stroke={TEAL} strokeWidth={3} />
            {[-120, -60, 0, 60, 120].map((y, i) => <path key={i} d={`M-75 ${y} L-20 ${y} L0 ${y + 20} L75 ${y + 20}`} stroke={GOLD} strokeWidth={2} fill="none" />)}
          </g>
          <g transform={`translate(${battP.x} ${battP.y}) rotate(${battP.r})`}>
            <rect x={-60} y={-90} width={120} height={200} rx={14} fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} />
          </g>
          <g transform={`translate(${spkP.x} ${spkP.y})`}><rect x={-40} y={-200} width={80} height={14} rx={7} fill={DIM} stroke={CHALK} strokeWidth={2} /></g>
          <g transform={`translate(${camP.x} ${camP.y})`}><circle cx={-60} cy={-190} r={16} fill="#111" stroke={ICE} strokeWidth={3} /></g>
          <g opacity={1 - parts * 0.6}>
            <rect x={-105} y={-215} width={210} height={430} rx={30} fill={`rgba(169,221,242,${0.12 + 0.3 * (1 - dead)})`} stroke={ICE} strokeWidth={2}
              style={{ filter: `drop-shadow(0 0 ${24 * (1 - dead)}px ${TEAL})` }} />
            <g opacity={crack}>
              <path d="M30 -60 L-10 -10 L20 30 L-40 120 M-10 -10 L-80 0 M20 30 L90 70 M30 -60 L80 -150" stroke={CHALK} strokeWidth={3} fill="none" />
            </g>
          </g>
          <g transform={`translate(${caseP.x} ${caseP.y}) rotate(${caseP.r})`}>
            <rect x={-120} y={-230} width={240} height={460} rx={42} fill="none" stroke={VIOLET} strokeWidth={10} style={{ filter: `drop-shadow(0 0 14px ${VIOLET})` }} />
          </g>
        </svg>
      </div>
      <At x={px} y={py} o={between(t, c("no essence ever left"), words - 0.3, 0.5)}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 90, height: 90, borderRadius: "50%", border: `3px dashed ${GOLD}`, margin: "0 auto" }} />
          <Glow color={GOLD} size={34} style={{ marginTop: 10 }}>an essence leaving?</Glow>
          <Strike at={c("No single part")} />
        </div>
      </At>
      <At x={px} y={780} o={ramp(t, words, 0.5)}>
        <div style={{ display: "flex", gap: 24 }}>
          {["phone", "broken phone", "parts"].map((w, i) => <div key={w} style={{ transform: `scale(${pop(t, fps, words + i * 0.25)})` }}><Chip color={GREEN} size={34}>{w}</Chip></div>)}
        </div>
      </At>
      <At x={1600} y={800} o={ramp(t, pile, 0.5)}>
        <div style={{ position: "relative" }}>
          <Glow color={WARM} size={34}>no calls on a pile of parts</Glow>
        </div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. razor: ghost vs square circle
const RazorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const razor = c("Occam's razor"), ghostAt = c("a ghost in the attic"), wind = c("the wind explains");
  const possible = ramp(t, c("leaves the ghost possible"), 0.6);
  const sq = c("a square circle");
  const morph = (Math.sin((t - sq) * 2.4) + 1) / 2;
  const none = ramp(t, c("does not describe anything"), 0.6);
  const second = ramp(t, c("this second kind"), 1.0);
  const demand = c("a demand that nothing could meet");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("more than tidying up"), 0.5) * (1 - ramp(t, razor, 0.4))}><Glow color={CHALK} size={50} serif>more than tidying up</Glow></At>
      <At x={960} y={110} s={pop(t, fps, razor)} o={ramp(t, razor, 0.3)}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={160} height={60} viewBox="0 0 160 60" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
            <path d="M10 15 L150 15 L150 45 L10 45 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={3} />
            <path d="M10 45 L150 45" stroke="#fff" strokeWidth={2} /><rect x={60} y={24} width={40} height={10} rx={5} fill="none" stroke={ICE} strokeWidth={2} />
          </svg>
          <Glow color={ICE} size={46}>Occam's razor</Glow>
        </div>
      </At>
      {/* attic with a ghost */}
      <At x={520} y={470} s={pop(t, fps, ghostAt)}>
        <svg width={460} height={420} viewBox="0 0 460 420" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}66)` }}>
          <path d="M20 200 L230 30 L440 200" fill="none" stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
          <rect x={60} y={198} width={340} height={210} fill="#ffffff08" stroke={CHALK} strokeWidth={5} />
          <path d="M130 198 L230 110 L330 198" fill="#ffffff0a" stroke={DIM} strokeWidth={3} />
          <circle cx={230} cy={160} r={22} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
        </svg>
      </At>
      <At x={520} y={385 + Math.sin(t * 2) * 8} o={ramp(t, ghostAt + 0.4, 0.5) * (1 - 0.6 * ramp(t, wind + 0.8, 0.6)) + possible * 0.25}>
        <Ghost dashed={possible > 0.5 || t > wind + 1} />
      </At>
      <At x={520} y={290} o={ramp(t, c("leaves the ghost possible"), 0.6)}><Glow color={CHALK} size={46} serif>?</Glow></At>
      {Array.from({ length: 5 }).map((_, i) => {
        const u = ((t - wind) * 0.6 + i / 5) % 1;
        return t > wind ? <div key={i} style={{ position: "absolute", left: 180 + u * 700, top: 330 + i * 50 + Math.sin(u * 8 + i) * 12, width: 120, height: 4, borderRadius: 2,
          background: `linear-gradient(90deg, transparent, ${ICE}, transparent)`, opacity: Math.sin(u * Math.PI) * ramp(t, wind, 0.6) }} /> : null;
      })}
      <At x={520} y={740} o={ramp(t, wind, 0.5)}><Glow color={ICE} size={34}>unneeded, but possible</Glow></At>
      {/* the square circle */}
      <At x={1400} y={450} s={pop(t, fps, sq)}>
        <div style={{ width: 260, height: 260, borderRadius: `${morph * 50}%`, border: `5px solid ${VIOLET}`, boxShadow: `0 0 30px ${VIOLET}`,
          transform: `rotate(${morph * 20}deg)`, opacity: 1 - 0.5 * none }} />
      </At>
      <At x={1400} y={450} o={none}>
        <Svg style={{ left: -150, top: -150, width: 300, height: 300 }}>
          <DrawPath d="M20 20 L280 280" p={none} color={WARM} width={8} len={380} />
          <DrawPath d="M280 20 L20 280" p={ramp(t, c("does not describe anything") + 0.2, 0.6)} color={WARM} width={8} len={380} />
        </Svg>
      </At>
      <At x={1400} y={260} o={ramp(t, sq, 0.5)}><Glow color={VIOLET} size={40}>a square circle</Glow></At>
      <At x={1400} y={680} o={none}><Glow color={WARM} size={34}>describes nothing at all</Glow></At>
      <At x={1400} y={790} s={pop(t, fps, c("this second kind"))} o={second}><Chip color={GOLD} size={40}>intrinsic nature</Chip></At>
      <At x={960} y={450} o={ramp(t, c("this second kind"), 0.5) * 0.8}><Glow color={DIM} size={60} serif>≠</Glow></At>
      <Ring x={1400} y={450} p={ramp(t, demand, 1.4)} r0={150} r1={360} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. why nothing escapes
const EscapeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pick = c("to pick it out"), contrast = c("a contrast with what it is not"), name = c("a name to pick it out"), dep = c("already depends on what");
  const sp = ramp(t, pick, 0.8), co = ramp(t, contrast, 0.8), nm = ramp(t, name, 0.6), d = ramp(t, dep, 1.0);
  const cands = [{ ph: "a pure awareness", x: 640, color: VIOLET, label: "a pure awareness" }, { ph: "a final particle", x: 1280, color: GOLD, label: "a final particle" }];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Why can nothing escape"), 0.5)}><Glow color={CHALK} size={54} serif>could anything escape?</Glow></At>
      {cands.map((k, i) => {
        const x = k.x, y = 450;
        return (
          <React.Fragment key={i}>
            <At x={x} y={y} o={co}>
              <div style={{ width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(circle, transparent 30%, #00000088 60%, transparent 72%)`,
                border: `2px dashed ${DIM}` }} />
            </At>
            <At x={x - 210} y={y - 200} o={co}><Glow color={DIM} size={28}>not this</Glow></At>
            <At x={x} y={y} o={sp}>
              <div style={{ width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${CHALK}33, transparent 70%)`, boxShadow: `0 0 60px ${CHALK}44` }} />
            </At>
            <At x={x} y={y} s={pop(t, fps, c(k.ph, 0.1))}>
              {i === 0 ? <Orb size={140} color={VIOLET} /> : <Orb size={44} color={GOLD} />}
            </At>
            {i === 1 && <Mist x={x} y={y + 40} start={c(k.ph)} color={GOLD} spread={80} n={10} seed={7} />}
            <At x={x} y={y + 150} s={pop(t, fps, name + i * 0.2)} o={nm}><Chip color={k.color} size={30}>{k.label}</Chip></At>
            {[[-200, -120], [200, -120], [0, 230]].map(([dx, dy], j) => (
              <Flow key={j} x1={x + dx} y1={y + dy} x2={x + dx * 0.35} y2={y + dy * 0.35} color={GOLD} p={d} />
            ))}
          </React.Fragment>
        );
      })}
      <At x={960} y={450} o={sp}><Glow color={CHALK} size={34}>picked out</Glow></At>
      <Center top={790}><Reveal text="already dependent" at={dep + 0.4} size={60} /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. not mind-made; dependence is no foundation
const NotGroundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mind = c("the mind makes the phone"), found = c("dependence is not the new foundation");
  const g = ramp(t, found, 0.6), fall = ramp(t, c("picked out by contrast") + 0.2, 1.4);
  const tag = ramp(t, c("picked out by contrast") + 0.4, 0.6);
  const empty = c("empty as well");
  return (
    <AbsoluteFill>
      <Scene from={c("This does not mean") - 0.3} to={found - 0.5}>
        <At x={700} y={480} s={pop(t, fps, c("This does not mean"))}><Head /></At>
        <Svg>
          {[[860, 330, 14], [900, 290, 20], [950, 245, 26]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="none" stroke={CHALK} strokeWidth={3} opacity={ramp(t, mind + 0.2 + i * 0.15, 0.3)} />)}
        </Svg>
        <At x={1180} y={330} o={ramp(t, mind + 0.6, 0.5)}>
          <div style={{ width: 380, height: 260, borderRadius: "50%", border: `3px solid ${CHALK}`, background: "#ffffff0d", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "scale(0.28)" }}><Phone screen={0.9} tilt={false} /></div>
          </div>
        </At>
        <Svg>
          <DrawPath d="M1000 200 L1360 460" p={ramp(t, mind + 1.2, 0.5)} color={WARM} width={8} len={450} />
          <DrawPath d="M1360 200 L1000 460" p={ramp(t, mind + 1.4, 0.5)} color={WARM} width={8} len={450} />
        </Svg>
        <At x={960} y={760} o={ramp(t, mind + 0.8, 0.5)}><Glow color={WARM} size={40}>not made by the mind</Glow></At>
      </Scene>
      <Scene from={found - 0.3} to={1e9}>
        {[[600, 380], [960, 300], [1320, 380]].map(([x, y], i) => (
          <At key={i} x={x} y={y} s={pop(t, fps, found + i * 0.12)}><Orb size={100} color={TEAL} /></At>
        ))}
        <Flow x1={650} y1={370} x2={910} y2={310} color={TEAL} p={ramp(t, found + 0.3, 0.6)} />
        <Flow x1={1010} y1={310} x2={1270} y2={370} color={TEAL} p={ramp(t, found + 0.4, 0.6)} />
        <At x={960 - fall * 50} y={600 + fall * 200} o={g * (1 - fall)} r={-fall * 7}>
          <div style={{ width: 900, height: 60, borderRadius: 10, background: `linear-gradient(90deg, ${TEAL}33, ${TEAL}aa, ${TEAL}33)`, boxShadow: `0 0 30px ${TEAL}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: CHALK }}>dependence as foundation?</div>
        </At>
        <At x={960} y={515} o={ramp(t, c("picked out by contrast"), 0.4)}><Glow color={CHALK} size={36}>also picked out, by contrast and name</Glow></At>
        <At x={780} y={270} s={pop(t, fps, c("picked out by contrast") + 0.4)} o={tag} r={-12}><Chip color={GOLD} size={28}>"dependence"</Chip></At>
        <At x={960} y={350} o={tag}><div style={{ width: 900, height: 220, borderRadius: 30, border: `3px dashed ${GOLD}`, boxShadow: `0 0 20px ${GOLD}44` }} /></At>
        {Array.from({ length: 16 }).map((_, i) => fall > 0 && fall < 1 ? (
          <div key={i} style={{ position: "absolute", left: 540 + rand(i) * 840, top: 600 + fall * (120 + rand(i + 2) * 200), width: 10, height: 10, borderRadius: 3,
            background: TEAL, opacity: 1 - fall, transform: `rotate(${rand(i + 4) * 90}deg)` }} />
        ) : null)}
        <Center top={700}><Reveal text="empty as well" at={empty} size={80} /></Center>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The phone still rings");
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, t0 + 0.4, 1.4)}>
        <div style={{ width: 900, height: 900, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}44 0%, ${GOLD}14 40%, transparent 70%)` }} />
      </At>
      <At x={960} y={420} s={0.85 * pop(t, fps, t0, 14)}><Phone screen={1} rim={GOLD} ring={ramp(t, t0 + 0.3, 1.6)} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={960} y={420} p={ramp(t, t0 + 0.3 + k * 0.4, 1.2)} r0={260} r1={420} color={TEAL} />)}
      <Center top={760}><Reveal text="nothing beneath it, and it rings" at={c("never needed to be made")} size={66} /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["intro", 0], ["defence", c("Most people will grant", 0.6)], ["problem", c("the defence meets a problem", 0.6)],
    ["structure", c("So let us search", 0.6)], ["origin", c("Look to its origin", 0.6)], ["func", c("Look to its function", 0.6)],
    ["qual", c("Look to its qualities", 0.6)], ["every", c("Everywhere we look", 0.6)], ["test", c("Now try a test", 0.6)],
    ["razor", c("more than tidying up", 0.6)], ["escape", c("Why can nothing escape", 0.6)], ["close", c("This does not mean", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Most people will grant", 0.9)], <IntroScene />],
    [S("Most people will grant", "the defence meets a problem"), <DefenceScene />],
    [S("the defence meets a problem", "So let us search"), <ProblemScene />],
    [S("So let us search", "Everywhere we look"), <SearchSeries />],
    [S("Everywhere we look", "Now try a test"), <EveryScene />],
    [S("Now try a test", "more than tidying up"), <TestScene />],
    [S("more than tidying up", "Why can nothing escape"), <RazorScene />],
    [S("Why can nothing escape", "This does not mean"), <EscapeScene />],
    [S("This does not mean", "The phone still rings"), <NotGroundScene />],
    [S("The phone still rings", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
