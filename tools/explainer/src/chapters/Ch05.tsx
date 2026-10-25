// Chapter 5: The Non-Dimensional Two Truths. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill, interpolateColors } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, SERIF, Snowflake, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Hold a cube of ice", "First a sharp sting", "Then an ache", "Then numbness",
  "The cold seems", "beyond any doubt", "The ice is cold", "The hand merely finds out",
  "Many philosophies build", "two storeys", "Upstairs is the surface", "cups and tables", "Downstairs is a hidden level",
  "a backstage of particles", "appearance is a cover",
  "This book leaves no room", "no backstage producer", "no deeper dimension", "Appearance is not a cover", "nothing behind it to cover",
  "speaks instead of two truths", "Conventional truth is the world", "A table", "a rainbow", "a passing thought", "not illusions",
  "follow patterns", "They do things", "What is relied on",
  "Ultimate truth is not", "a secret realm", "Search any thing", "no such core is found", "a truth about ordinary things", "their emptiness",
  "not two worlds", "not two layers", "two aspects of one appearance", "The cup that holds", "is conventional truth", "The unfindability",
  "is ultimate truth", "Not a second object", "Not a deeper floor",
  "Now return to the ice", "look for the coldness", "one hand in hot water", "the other in cold", "the same lukewarm basin",
  "To one hand it feels cold", "To the other, warm", "barely felt by a numbed hand", "through a thick glove", "Physics finds a temperature",
  "not the sting",
  "Nor is the coldness sealed", "Without the ice", "hang between them", "a third thing", "Sought there",
  "What appears is not an ice", "sends coldness to a feeler", "The coldness, the ice as cold", "the one who feels", "and the felt",
  "identified together", "None of them comes first", "not even the relation",
  "None of this makes", "It still forms", "cools a drink", "warns the hand away", "this vivid forming", "shows its emptiness",
  "depended on nothing", "could never be felt", "To be felt and to be independent",
  "The sting arises", "sharpens and fades", "Empty, it is felt", "right now",
  "What falls away", "a cold thing behind it", "a feeler standing apart", "The cold in your palm", "one appearance, seen from two sides",
];

const M = {
  ice: { a: "rgba(30,150,190,0.55)", b: "rgba(60,80,160,0.4)", c: "rgba(120,170,200,0.25)" },
  storeys: { a: "rgba(90,60,160,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,60,110,0.35)" },
  conv: { a: "rgba(30,130,120,0.5)", b: "rgba(70,140,80,0.35)", c: "rgba(150,110,50,0.3)" },
  ult: { a: "rgba(40,40,120,0.55)", b: "rgba(150,120,50,0.4)", c: "rgba(80,40,140,0.3)" },
  one: { a: "rgba(30,110,130,0.5)", b: "rgba(160,120,50,0.45)", c: "rgba(90,60,160,0.3)" },
  basin: { a: "rgba(170,80,50,0.45)", b: "rgba(30,130,180,0.5)", c: "rgba(90,60,150,0.3)" },
  search: { a: "rgba(50,60,140,0.5)", b: "rgba(30,140,170,0.4)", c: "rgba(140,70,110,0.3)" },
  codes: { a: "rgba(150,110,50,0.45)", b: "rgba(90,60,170,0.45)", c: "rgba(30,130,160,0.35)" },
  form: { a: "rgba(30,150,190,0.5)", b: "rgba(150,70,100,0.4)", c: "rgba(80,60,150,0.3)" },
  close: { a: "rgba(150,110,50,0.45)", b: "rgba(30,120,140,0.5)", c: "rgba(90,60,160,0.3)" },
};

// ---------------------------------------------------------------- parts for this chapter
const Palm: React.FC<{ w?: number; color?: string }> = ({ w = 520, color = ROSE }) => (
  <svg width={w} height={w * 0.4} viewBox="0 0 420 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M20 40 Q 30 120 140 140 Q 260 155 360 110 Q 400 90 410 60 Q 395 50 380 62 Q 360 80 330 84 Q 250 96 150 92 Q 70 86 50 40 Q 40 25 20 40 Z"
      fill={`${color}22`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <path d="M300 96 Q 340 90 372 70 M262 102 Q 300 100 330 90" fill="none" stroke={color} strokeWidth={2.5} strokeOpacity={0.6} />
  </svg>
);

/** Little lightning sparks around a point (the sting). k = strength 0..1. */
const Sparks: React.FC<{ x: number; y: number; k: number; color?: string; n?: number; r?: number }> = ({ x, y, k, color = ICE, n = 9, r = 120 }) => {
  const { t } = useT();
  if (k <= 0.01) return null;
  return (
    <Svg>
      {Array.from({ length: n }).map((_, i) => {
        const a = (i / n) * Math.PI * 2 + rand(i) * 0.4;
        const fl = 0.6 + 0.4 * Math.sin(t * 14 + i * 2.1);
        const r0 = r * 0.55, r1 = r * (0.9 + 0.2 * fl), mid = (r0 + r1) / 2, pa = a + 0.14;
        return <polyline key={i} points={`${x + r0 * Math.cos(a)},${y + r0 * Math.sin(a)} ${x + mid * Math.cos(pa)},${y + mid * Math.sin(pa)} ${x + r1 * Math.cos(a)},${y + r1 * Math.sin(a)}`}
          fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" opacity={k * fl} style={{ filter: `drop-shadow(0 0 6px ${color})` }} />;
      })}
    </Svg>
  );
};

const Cup: React.FC<{ size?: number; color?: string; steam?: number; dashed?: boolean }> = ({ size = 200, color = GOLD, steam = 0, dashed }) => {
  const { t } = useT();
  const dash = dashed ? "10 8" : undefined;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
      {[70, 100, 130].map((x, i) => (
        <path key={i} d={`M${x} 55 C ${x - 14} 40, ${x + 14} 25, ${x} ${8 - 6 * Math.sin(t * 2 + i)}`} fill="none" stroke={CHALK} strokeWidth={4}
          strokeLinecap="round" opacity={steam * (0.35 + 0.3 * Math.sin(t * 2.4 + i * 2))} />
      ))}
      <path d="M158 92 Q 195 94 192 126 Q 188 156 150 150" fill="none" stroke={color} strokeWidth={6} strokeDasharray={dash} />
      <path d="M40 70 L160 70 L150 170 Q 148 182 135 182 L65 182 Q 52 182 50 170 Z" fill={dashed ? "none" : `${color}33`} stroke={color} strokeWidth={5} strokeDasharray={dash} strokeLinejoin="round" />
      {!dashed && <ellipse cx={100} cy={72} rx={58} ry={9} fill="#6b4226" stroke={color} strokeWidth={2} />}
    </svg>
  );
};

const MiniTable: React.FC<{ color?: string; w?: number }> = ({ color = GOLD, w = 220 }) => (
  <svg width={w} height={w * 0.64} viewBox="0 0 220 140" style={{ filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <polygon points="30,20 190,20 210,50 10,50" fill="#b98a5588" stroke={color} strokeWidth={3} />
    <rect x={10} y={50} width={200} height={12} fill="#7a5a35" />
    {[20, 186].map((x) => <rect key={x} x={x} y={62} width={14} height={72} fill="#7a5a35" stroke={color} strokeWidth={2} />)}
  </svg>
);

const Rainbow: React.FC<{ p: number; w?: number }> = ({ p, w = 300 }) => (
  <svg width={w} height={w * 0.57} viewBox="0 0 300 170" style={{ overflow: "visible", filter: "drop-shadow(0 0 8px #ffffff55)" }}>
    {[ROSE, WARM, GOLD, GREEN, TEAL, VIOLET].map((col, i) => (
      <path key={i} d={`M${20 + i * 14} 160 A ${130 - i * 14} ${130 - i * 14} 0 0 1 ${280 - i * 14} 160`} stroke={col} strokeWidth={10} fill="none"
        strokeDasharray={420} strokeDashoffset={420 * (1 - p)} />
    ))}
  </svg>
);

const Thought: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={220} height={180} viewBox="0 0 220 180" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M60 110 Q 20 110 25 80 Q 20 45 60 45 Q 70 15 110 20 Q 150 10 165 40 Q 205 45 198 80 Q 205 112 165 112 Q 150 135 110 128 Q 75 138 60 110 Z"
      fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={50} cy={145} r={10} fill={`${color}22`} stroke={color} strokeWidth={3} />
    <circle cx={30} cy={168} r={6} fill={`${color}22`} stroke={color} strokeWidth={3} />
  </svg>
);

const Lens: React.FC<{ size?: number; color?: string }> = ({ size = 170, color = GOLD }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={40} cy={40} r={28} fill="#ffffff12" stroke={color} strokeWidth={5} />
    <path d="M24 30 Q 28 22 38 20" fill="none" stroke="#ffffff88" strokeWidth={3} strokeLinecap="round" />
    <line x1={61} y1={61} x2={92} y2={92} stroke={color} strokeWidth={9} strokeLinecap="round" />
  </svg>
);

const Gear: React.FC<{ size: number; rot: number; color?: string }> = ({ size, rot, color = DIM }) => (
  <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${rot})`} fill={`${color}33`} stroke={color} strokeWidth={3}>
      {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={-7} y={-48} width={14} height={14} rx={2} transform={`rotate(${i * 45})`} />)}
      <circle r={36} /><circle r={11} fill="#0b0c1a" />
    </g>
  </svg>
);

const Person: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 170, color = ROSE, dashed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={50} cy={30} r={18} fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "6 5" : undefined} />
    <path d="M14 96 Q 16 56 50 54 Q 84 56 86 96" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

const Basin: React.FC<{ color: string; w?: number }> = ({ color, w = 300 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={w * 0.55} viewBox="0 0 300 165" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
      <path d="M20 40 Q 30 155 150 155 Q 270 155 280 40" fill={`${color}18`} stroke={CHALK} strokeWidth={4} />
      <ellipse cx={150} cy={42} rx={128} ry={22} fill={`${color}66`} stroke={color} strokeWidth={3} />
      <ellipse cx={150 + 30 * Math.sin(t * 1.3)} cy={42} rx={40} ry={6} fill="#ffffff22" />
    </svg>
  );
};

const Mitten: React.FC<{ size?: number; color?: string }> = ({ size = 170, color = VIOLET }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 100 120" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M30 115 L30 70 Q 18 62 14 50 Q 10 38 20 36 Q 28 36 32 48 L32 30 Q 32 8 52 8 Q 74 8 74 30 L74 115 Z" fill={`${color}44`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <rect x={26} y={100} width={52} height={16} rx={4} fill={`${color}88`} stroke={color} strokeWidth={2} />
  </svg>
);

const Thermo: React.FC<{ level: number; color?: string }> = ({ level, color = ICE }) => (
  <svg width={70} height={240} viewBox="0 0 70 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <rect x={22} y={10} width={26} height={180} rx={13} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
    <rect x={29} y={190 - 160 * level} width={12} height={160 * level + 10} rx={6} fill={color} />
    <circle cx={35} cy={205} r={24} fill={color} stroke={CHALK} strokeWidth={3} />
    {[40, 80, 120, 160].map((y) => <line key={y} x1={48} x2={58} y1={y} y2={y} stroke={CHALK} strokeWidth={2} />)}
  </svg>
);

const Glass: React.FC<{ cool: number }> = ({ cool }) => {
  const liquid = interpolateColors(cool, [0, 1], ["#D9876C", "#7FC8E8"]);
  return (
    <svg width={200} height={260} viewBox="0 0 200 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${8 + cool * 14}px ${ICE})` }}>
      <path d="M38 90 L162 90 L151 238 L49 238 Z" fill={liquid} opacity={0.6} />
      {[[70, 98, 12], [112, 104, -10]].map(([x, y, r], i) => (
        <rect key={i} x={x} y={y} width={34} height={34} rx={5} fill="rgba(225,246,255,0.5)" stroke="#E8FAFF" strokeWidth={2} transform={`rotate(${r} ${x + 17} ${y + 17})`} />
      ))}
      <path d="M30 20 L170 20 L152 242 L48 242 Z" fill="#ffffff08" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
      {Array.from({ length: 9 }).map((_, i) => (
        <circle key={i} cx={42 + rand(i) * 116} cy={60 + rand(i + 4) * 170} r={3 + rand(i + 2) * 3} fill="#E8FAFF" opacity={cool * 0.8} />
      ))}
    </svg>
  );
};

const Globe: React.FC<{ color: string }> = ({ color }) => (
  <svg width={190} height={190} viewBox="-50 -50 100 100" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={2.5}>
      <circle r={44} fill={`${color}22`} /><ellipse rx={18} ry={44} /><ellipse rx={44} ry={15} /><line x1={-44} x2={44} y1={0} y2={0} />
    </g>
  </svg>
);

const Slab: React.FC<{ color: string; w?: number }> = ({ color, w = 520 }) => (
  <div style={{ width: w, height: 70, borderRadius: 10, transform: "perspective(600px) rotateX(55deg)", border: `3px solid ${color}`,
    background: `linear-gradient(90deg, ${color}22, ${color}55, ${color}22)`, boxShadow: `0 0 24px ${color}88` }} />
);

/** Two diagonal strokes drawn across a point. */
const Cross: React.FC<{ x: number; y: number; at: number; r?: number; color?: string }> = ({ x, y, at, r = 90, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.45)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.45)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

const Struck: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode }> = ({ at, color = CHALK, size = 44, children }) => (
  <div style={{ position: "relative" }}><Glow color={color} size={size}>{children}</Glow><Strike at={at} /></div>
);

const Centre: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- 1-2. ice in the palm
const IceHold: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Hold a cube of ice");
  const sting = c("First a sharp sting"), ache = c("Then an ache"), numb = c("Then numbness");
  const seems = c("The cold seems");
  const stagesOut = ramp(t, seems - 0.2, 0.5);
  const numbK = ramp(t, numb, 1.2) * (1 - stagesOut);
  const flash = between(t, c("beyond any doubt"), c("beyond any doubt") + 1.0, 0.4);
  const finds = c("The hand merely finds out");
  const ap = (t - ache) % 1.3 / 1.3;
  return (
    <AbsoluteFill>
      <At x={960} y={640} s={pop(t, fps, t0, 14)} o={1 - 0.55 * numbK} blur={numbK * 3}><Palm /></At>
      <Mist x={960} y={540} start={t0 + 0.6} />
      <At x={960} y={450} s={pop(t, fps, t0 + 0.2, 13)}><IceCube size={210} spin={(t - t0) * 8} flash={flash} /></At>
      <Sparks x={960} y={580} k={between(t, sting, ache + 0.6, 0.3)} r={170} />
      {t > ache && t < numb + 0.8 && <Ring x={960} y={590} p={ap} r0={60} r1={260} color={VIOLET} width={5} />}
      {[["sting", sting, ICE, 300], ["ache", ache, VIOLET, 440], ["numbness", numb, DIM, 580]].map(([lab, at, col, y], i) => (
        <At key={i} x={1530} y={y as number} s={pop(t, fps, at as number)} o={1 - stagesOut}><Chip color={col as string} size={40}>{lab as string}</Chip></At>
      ))}
      <Svg style={{ opacity: ramp(t, sting, 0.5) * (1 - stagesOut) }}>
        <DrawPath d="M1530 340 L1530 540" p={ramp(t, ache - 0.2, numb - ache + 0.4)} color={DIM} width={3} len={200} />
      </Svg>
      <At x={960} y={450} s={pop(t, fps, seems)} o={ramp(t, seems, 0.4)}><Glow color={ICE} size={64} serif style={{ color: "#fff" }}>cold</Glow></At>
      <Ring x={960} y={450} p={ramp(t, c("The ice is cold"), 1.4)} r0={120} r1={230} color={GOLD} width={4} />
      <At x={420} y={330} o={ramp(t, c("The ice is cold"), 0.6)}><Glow color={GOLD} size={46} serif>in the ice?</Glow></At>
      <Flow x1={1240} y1={640} x2={1110} y2={500} color={ROSE} p={ramp(t, finds, 0.8)} />
      <At x={1420} y={700} o={ramp(t, finds + 0.3, 0.6)}><Glow color={ROSE} size={40}>the hand finds out</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3-4. two storeys, then no backstage
const Storeys: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Many philosophies build");
  const draw = ramp(t, c("two storeys"), 1.4);
  const up = c("Upstairs is the surface"), cups = c("cups and tables");
  const down = c("Downstairs is a hidden level"), parts = c("a backstage of particles");
  const cover = c("appearance is a cover");
  const noProd = c("no backstage producer"), noDeep = c("no deeper dimension");
  const notCover = c("Appearance is not a cover"), behind = c("nothing behind it to cover");
  const fall = ramp(t, noProd + 1.1, 1.6);
  const shell = 1 - ramp(t, behind, 1.0);
  const sheet = ramp(t, cover, 1.0) * (1 - ramp(t, behind, 1.0));
  const lowerO = ramp(t, down, 0.6) * (1 - fall);
  return (
    <AbsoluteFill>
      <At x={960} y={70} o={ramp(t, t0, 0.6) * shell}><Glow color={CHALK} size={42}>a world in two storeys</Glow></At>
      <Svg style={{ opacity: shell }}>
        <DrawPath d="M560 150 L1360 150 L1360 430 L560 430 Z" p={draw} color={GOLD} width={4} len={2200} />
      </Svg>
      <Svg style={{ opacity: lowerO }}>
        <rect x={560} y={450 + fall * 200} width={800} height={300} fill="#0d0a1c" fillOpacity={0.6} stroke={DIM} strokeWidth={4} rx={6} />
      </Svg>
      <At x={380} y={290} o={ramp(t, up, 0.6) * shell}><Chip color={GOLD}>surface</Chip></At>
      <At x={380} y={600 + fall * 200} o={lowerO}><Chip color={DIM}>backstage</Chip></At>
      {/* upstairs: colours, a cup, a table */}
      {[TEAL, ROSE, GOLD].map((col, i) => (
        <At key={i} x={650 + i * 70} y={300 + (i % 2) * 40} s={pop(t, fps, up + 0.2 + i * 0.12)}><Orb size={58} color={col} /></At>
      ))}
      <At x={1000} y={300} s={pop(t, fps, cups)}><Cup size={170} steam={ramp(t, cups + 0.5, 1)} /></At>
      <At x={1220} y={320} s={pop(t, fps, cups + 0.3)}><MiniTable w={190} /></At>
      {/* downstairs: gears and particles */}
      <AbsoluteFill style={{ opacity: lowerO, transform: `translateY(${fall * 200}px)` }}>
        <At x={740} y={600} s={pop(t, fps, down + 0.2)}><Gear size={150} rot={t * 50} /></At>
        <At x={860} y={680} s={pop(t, fps, down + 0.4)}><Gear size={100} rot={-t * 75 + 20} /></At>
        {Array.from({ length: 16 }).map((_, i) => (
          <At key={i} x={980 + rand(i) * 340 + Math.sin(t * 3 + i) * 14} y={500 + rand(i + 7) * 220 + Math.cos(t * 2.6 + i) * 12}
            s={pop(t, fps, parts + rand(i + 3) * 0.8)}><Orb size={22 + rand(i + 1) * 18} color={i % 3 ? TEAL : VIOLET} /></At>
        ))}
        <Cross x={800} y={620} at={noProd} r={110} />
      </AbsoluteFill>
      {/* the cover */}
      <div style={{ position: "absolute", left: 560, top: 150, width: 800, height: 280 * sheet, borderRadius: 6, opacity: 0.9,
        background: `linear-gradient(180deg, ${GOLD}44, ${GOLD}18)`, boxShadow: `0 0 40px ${GOLD}55` }} />
      <At x={1600} y={290} o={ramp(t, cover, 0.6) * shell}><Struck at={notCover} color={GOLD}>a cover</Struck></At>
      {/* depth arrow */}
      <Svg style={{ opacity: between(t, noDeep, notCover + 0.4) }}>
        <DrawPath d="M1520 460 L1520 720 M1495 690 L1520 725 L1545 690" p={ramp(t, noDeep, 0.6)} color={VIOLET} width={5} len={400} />
      </Svg>
      <At x={1620} y={590} o={between(t, noDeep, notCover + 0.4)}><Struck at={noDeep + 0.9} color={VIOLET} size={38}>deeper</Struck></At>
      <Centre top={600}><Reveal text="nothing behind it" at={behind + 0.3} size={76} /></Centre>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. conventional truth
const Conventional: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("speaks instead of two truths");
  const conv = c("Conventional truth is the world");
  const ill = c("not illusions"), pat = c("follow patterns"), does = c("They do things"), works = c("What is relied on");
  const icons: [string, React.ReactNode, number][] = [
    ["A table", <MiniTable w={230} />, 520], ["a rainbow", <Rainbow p={ramp(t, c("a rainbow"), 1.2)} w={280} />, 960], ["a passing thought", <Thought />, 1400],
  ];
  return (
    <AbsoluteFill>
      <Centre top={60}><Reveal text="Two truths" at={t0 + 0.3} size={88} /></Centre>
      <At x={960} y={230} s={pop(t, fps, conv)}><Chip color={TEAL} size={42}>conventional truth</Chip></At>
      {icons.map(([ph, node, x], i) => (
        <React.Fragment key={i}>
          <At x={x} y={420} s={pop(t, fps, c(ph))}>{node}</At>
          <Ring x={x} y={420} p={(t - does - i * 0.3) > 0 ? ((t - does - i * 0.3) % 1.6) / 1.6 : 0} r0={90} r1={200} color={TEAL} />
        </React.Fragment>
      ))}
      <At x={440} y={680} o={ramp(t, ill, 0.5)}><Struck at={ill + 0.6} color={DIM} size={46}>illusion?</Struck></At>
      <Svg style={{ opacity: ramp(t, pat, 0.4) }}>
        <path d="M760 690 C 820 610, 880 610, 940 690 S 1060 770, 1120 690" fill="none" stroke={TEAL} strokeOpacity={0.35} strokeWidth={3} strokeDasharray="8 8" />
        {Array.from({ length: 5 }).map((_, i) => {
          const u = i / 4, x = 760 + u * 360, y = 690 - 80 * Math.sin(u * Math.PI * 2);
          return <circle key={i} cx={x} cy={y} r={11} fill={TEAL} opacity={ramp(t, pat + 0.2 + i * 0.25, 0.3)} style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} />;
        })}
      </Svg>
      <At x={940} y={800} o={ramp(t, pat + 0.6, 0.5)}><Glow color={TEAL} size={32}>predictable</Glow></At>
      <Svg>
        <DrawPath d="M1370 690 L1420 740 L1520 620" p={ramp(t, works, 0.6)} color={GREEN} width={10} len={260} />
      </Svg>
      <At x={1450} y={800} o={ramp(t, works + 0.4, 0.5)}><Glow color={GREEN} size={40}>it works</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. ultimate truth
const Ultimate: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Ultimate truth is not");
  const realm = c("a secret realm"), search = c("Search any thing"), none = c("no such core is found");
  const about = c("a truth about ordinary things"), emp = c("their emptiness");
  const ghosts = 1 - ramp(t, search - 0.6, 0.6);
  const sweep = ramp(t, search + 0.3, 2.6);
  const lx = 960 + 160 * Math.sin(sweep * Math.PI * 2.0), ly = 440 + 70 * Math.cos(sweep * Math.PI * 3);
  const core = between(t, search + 0.8, none + 1.6, 0.4);
  return (
    <AbsoluteFill>
      <At x={960} y={80} s={pop(t, fps, t0)}><Chip color={GOLD} size={42}>ultimate truth</Chip></At>
      <AbsoluteFill style={{ opacity: ghosts }}>
        <At x={620} y={420} s={pop(t, fps, realm)}>
          <div style={{ width: 200, height: 300, borderRadius: "100px 100px 8px 8px", border: `3px solid ${VIOLET}`,
            background: `radial-gradient(circle at 50% 40%, ${VIOLET}88, ${VIOLET}11 70%)`, boxShadow: `0 0 40px ${VIOLET}` }} />
        </At>
        <At x={620} y={640} o={ramp(t, realm, 0.5)}><Struck at={realm + 1.0} size={36}>a secret realm</Struck></At>
        <At x={1300} y={420} s={pop(t, fps, realm + 0.8)}><Orb size={190} color={GOLD} core={1} /></At>
        <At x={1300} y={640} o={ramp(t, realm + 0.8, 0.5)}><Struck at={realm + 1.6} size={36}>a hidden substance</Struck></At>
      </AbsoluteFill>
      <Scene from={search - 0.3} to={1e9}>
        <At x={960} y={460} s={pop(t, fps, search)}><Cup size={260} steam={1} /></At>
        <At x={960} y={490} o={core} s={0.8 + 0.2 * core}>
          <div style={{ width: 110, height: 110, borderRadius: "50%", border: `3px dashed ${WARM}`, boxShadow: `0 0 20px ${WARM}66` }} />
        </At>
        <At x={1180} y={600} o={core}><Glow color={WARM} size={40}>core?</Glow></At>
        <At x={lx + 20} y={ly + 20} o={ramp(t, search + 0.2, 0.4) * (1 - ramp(t, about, 0.5))}><Lens size={190} /></At>
        <At x={960} y={250} o={ramp(t, none + 0.4, 0.5)}><Glow color={CHALK} size={44}>no core found</Glow></At>
        <At x={960} y={720} o={ramp(t, about, 0.6)}><Glow color={DIM} size={36}>a truth about this very cup</Glow></At>
        <Centre top={760}><Reveal text="emptiness" at={emp} size={80} /></Centre>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. one appearance, two aspects
const OneAppearance: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const worlds = c("not two worlds"), layers = c("not two layers"), one = c("two aspects of one appearance");
  const holds = c("The cup that holds"), conv = c("is conventional truth"), unf = c("The unfindability"), ult = c("is ultimate truth");
  const second = c("Not a second object"), floor = c("Not a deeper floor");
  const pre = 1 - ramp(t, one - 0.2, 0.6);
  const ghostCup = between(t, second, second + 1.8, 0.4);
  const ghostFloor = ramp(t, floor, 0.4), drop = ramp(t, floor + 1.0, 1.2);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: pre }}>
        <At x={420} y={380} s={pop(t, fps, worlds)}><Globe color={TEAL} /></At>
        <At x={680} y={380} s={pop(t, fps, worlds + 0.15)}><Globe color={VIOLET} /></At>
        <Cross x={550} y={380} at={worlds + 0.9} r={150} />
        <At x={1400} y={320} s={pop(t, fps, layers)}><Slab color={GOLD} w={460} /></At>
        <At x={1400} y={450} s={pop(t, fps, layers + 0.15)}><Slab color={VIOLET} w={460} /></At>
        <Cross x={1400} y={385} at={layers + 0.9} r={140} />
      </AbsoluteFill>
      <Scene from={one - 0.2} to={1e9}>
        <Centre top={70}><Reveal text="one appearance" at={one + 0.2} size={80} /></Centre>
        <At x={960} y={450} s={pop(t, fps, one + 0.3, 13)}><Cup size={300} steam={ramp(t, holds, 1)} /></At>
        <Svg>
          <DrawPath d="M780 450 A 180 180 0 0 1 960 270" p={ramp(t, conv, 0.8)} color={TEAL} width={6} len={300} />
          <DrawPath d="M780 450 A 180 180 0 0 0 960 630" p={ramp(t, conv + 0.2, 0.8)} color={TEAL} width={6} len={300} />
          <path d="M960 270 A 180 180 0 0 1 960 630" fill="none" stroke={GOLD} strokeWidth={6} strokeDasharray="14 12"
            opacity={ramp(t, ult, 0.8)} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
        </Svg>
        <At x={520} y={450} o={ramp(t, conv, 0.6)}><Chip color={TEAL} size={36}>conventional</Chip></At>
        <At x={1400} y={450} o={ramp(t, ult, 0.6)}><Chip color={GOLD} size={36}>ultimate</Chip></At>
        <At x={1180} y={360} o={between(t, unf, ult + 1.2)}><Lens size={150} /></At>
        <At x={1500} y={260} o={ghostCup}><div style={{ position: "relative", opacity: 0.6 }}><Cup size={170} dashed color={DIM} /></div></At>
        <Cross x={1500} y={260} at={second + 0.6} r={80} />
        <At x={960 - drop * 40} y={760 + drop * 120} o={ghostFloor * (1 - drop)} r={-drop * 6}><Slab color={WARM} w={600} /></At>
        <At x={1420} y={760 + drop * 120} o={ghostFloor * (1 - drop)}><Glow color={WARM} size={36}>a deeper floor?</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. looking for the coldness: basins, glove, physics
const Basins: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Now return to the ice");
  const look = c("look for the coldness");
  const hot = c("one hand in hot water"), cold = c("the other in cold"), luke = c("the same lukewarm basin");
  const f1 = c("To one hand it feels cold"), f2 = c("To the other, warm");
  const partB = c("barely felt by a numbed hand", 0.6);
  const mv = ramp(t, luke, 1.2);
  const lhX = 480 + (880 - 480) * mv, rhX = 1440 + (1040 - 1440) * mv;
  const lhY = 380 + 60 * ramp(t, hot, 0.6) - 60 * between(t, luke - 0.1, luke + 0.7, 0.3);
  const rhY = 380 + 60 * ramp(t, cold, 0.6) - 60 * between(t, luke - 0.1, luke + 0.7, 0.3);
  const numb = c("barely felt by a numbed hand"), glove = c("through a thick glove"), phys = c("Physics finds a temperature"), notS = c("not the sting");
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={960} y={120} o={ramp(t, look, 0.5)}><Glow color={CHALK} size={42}>where is the coldness?</Glow></At>
        <At x={480} y={640} s={pop(t, fps, t0 + 0.2)}><Basin color={WARM} /></At>
        <At x={960} y={640} s={pop(t, fps, t0 + 0.4)}><Basin color={GREEN} /></At>
        <At x={1440} y={640} s={pop(t, fps, t0 + 0.6)}><Basin color={ICE} /></At>
        <Mist x={480} y={600} start={t0 + 0.6} color={WARM} spread={180} n={12} />
        <At x={480} y={790} o={ramp(t, hot, 0.5)}><Glow color={WARM} size={32}>hot</Glow></At>
        <At x={960} y={790} o={ramp(t, luke, 0.5)}><Glow color={GREEN} size={32}>lukewarm</Glow></At>
        <At x={1440} y={790} o={ramp(t, cold, 0.5)}><Glow color={ICE} size={32}>cold</Glow></At>
        <At x={lhX} y={lhY} s={pop(t, fps, hot)} r={180}><Hand size={170} /></At>
        <At x={rhX} y={rhY} s={pop(t, fps, cold)} r={180}><Hand size={170} /></At>
        <At x={720} y={290} s={pop(t, fps, f1)}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Snowflake size={60} rot={t * 40} /><Glow color={ICE} size={46}>cold</Glow></div>
        </At>
        <At x={1210} y={290} s={pop(t, fps, f2)}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Sun size={64} rot={t * 30} /><Glow color={WARM} size={46}>warm</Glow></div>
        </At>
        <At x={960} y={200} o={ramp(t, f2 + 0.6, 0.6)}><Glow color={GOLD} size={36}>the same water</Glow></At>
      </Scene>
      <Scene from={partB + 0.2} to={1e9}>
        {/* numbed hand */}
        <At x={430} y={360} s={pop(t, fps, numb)}><IceCube size={130} spin={t * 10} /></At>
        <At x={430} y={560} s={pop(t, fps, numb + 0.2)} style={{ filter: "grayscale(0.85) brightness(0.75)" }}><Hand size={170} /></At>
        <Sparks x={430} y={470} k={0.25 * ramp(t, numb + 0.6, 0.5)} r={80} />
        <At x={430} y={720} o={ramp(t, numb + 0.4, 0.5)}><Glow color={DIM} size={36}>numbed hand</Glow></At>
        {/* glove */}
        <At x={960} y={360} s={pop(t, fps, glove)}><IceCube size={130} spin={t * 10 + 30} /></At>
        <At x={960} y={570} s={pop(t, fps, glove + 0.2)}><Mitten size={150} /></At>
        <At x={960} y={720} o={ramp(t, glove + 0.4, 0.5)}><Glow color={VIOLET} size={36}>thick glove</Glow></At>
        {/* physics */}
        <At x={1420} y={460} s={pop(t, fps, phys)}><Thermo level={0.25 + 0.05 * Math.sin(t * 2)} /></At>
        {Array.from({ length: 10 }).map((_, i) => (
          <At key={i} x={1560 + rand(i) * 140 + Math.sin(t * 9 + i * 2) * 8} y={340 + rand(i + 5) * 220 + Math.cos(t * 8 + i) * 8} o={ramp(t, phys + 0.3, 0.5)}>
            <Orb size={22} color={ICE} />
          </At>
        ))}
        <At x={1500} y={650} o={ramp(t, phys + 0.4, 0.5)}><Glow color={ICE} size={36}>temperature</Glow></At>
        <At x={1500} y={730} o={ramp(t, notS, 0.4)}><Struck at={notS + 0.4} color={ICE} size={36}>the sting</Struck></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. not in the hand, not between
const NotBetween: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Nor is the coldness sealed");
  const without = c("Without the ice"), hang = c("hang between them"), third = c("a third thing"), sought = c("Sought there");
  const iceO = 1 - between(t, without, hang - 0.2, 0.5);
  const lensU = ramp(t, sought, 1.4);
  const gone = ramp(t, sought + 1.0, 1.2);
  return (
    <AbsoluteFill>
      <At x={460} y={430} s={pop(t, fps, t0)} o={iceO} blur={(1 - iceO) * 10}><IceCube size={200} spin={t * 9} /></At>
      <At x={1460} y={430} s={pop(t, fps, t0 + 0.2)} r={-90}><Hand size={210} /></At>
      <At x={1460} y={430} o={ramp(t, t0 + 0.4, 0.5)}>
        <div style={{ width: 300, height: 300, borderRadius: "50%", border: `3px dashed ${ROSE}`, boxShadow: `0 0 20px ${ROSE}55` }} />
      </At>
      <At x={1460} y={660} o={ramp(t, t0 + 0.5, 0.5)}><Struck at={t0 + 2.0} color={ROSE} size={38}>sealed inside the hand?</Struck></At>
      <At x={1460} y={210} o={between(t, without + 0.3, hang - 0.2)}><Glow color={DIM} size={40}>no sting</Glow></At>
      {/* the supposed third thing */}
      <Svg style={{ opacity: ramp(t, hang, 0.6) * (1 - gone) }}>
        <line x1={580} y1={430} x2={890} y2={430} stroke={GOLD} strokeWidth={3} strokeDasharray="10 10" />
        <line x1={1030} y1={430} x2={1320} y2={430} stroke={GOLD} strokeWidth={3} strokeDasharray="10 10" />
      </Svg>
      <At x={960} y={430} s={pop(t, fps, hang + 0.2)} o={1 - gone} blur={gone * 16}><Orb size={120} color={GOLD} /></At>
      <At x={960} y={290} o={ramp(t, third, 0.5) * (1 - gone)}><Glow color={GOLD} size={42}>the relation?</Glow></At>
      <At x={960 - 260 + lensU * 280} y={470} o={between(t, sought, sought + 2.4, 0.4)}><Lens size={180} /></At>
      <At x={960} y={620} o={ramp(t, sought + 1.4, 0.6)}><Glow color={WARM} size={46} serif>not found there either</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. co-designation
const CoDesignation: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("What appears is not an ice");
  const send = c("sends coldness to a feeler");
  const B = c("The coldness, the ice as cold", 0.5);
  const feels = c("the one who feels"), felt = c("and the felt"), tog = c("identified together");
  const first = c("None of them comes first"), rel = c("not even the relation");
  const nodes: [number, number, React.ReactNode, string, string, number][] = [
    [960, 210, <Snowflake size={120} rot={t * 30} />, "coldness", ICE, B + 0.2],
    [560, 460, <IceCube size={120} spin={t * 12} />, "ice as cold", ICE, B + 0.8],
    [1360, 460, <Person size={140} />, "one who feels", ROSE, feels],
    [960, 690, <Hand size={120} />, "the felt", VIOLET, felt],
  ];
  const pairs = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
  const link = ramp(t, tog, 0.8);
  const travel = ramp(t, send, 1.6);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={B - 0.2}>
        <At x={460} y={430} s={pop(t, fps, t0)}><IceCube size={170} spin={t * 9} /></At>
        <At x={460} y={620} o={ramp(t, t0 + 0.6, 0.5)}><Chip color={DIM} size={30}>exists first</Chip></At>
        <Flow x1={620} y1={430} x2={1300} y2={430} color={ICE} p={ramp(t, send, 0.8)} />
        <At x={620 + 680 * travel} y={430} o={ramp(t, send, 0.3) * (1 - ramp(t, send + 1.6, 0.3))}><Snowflake size={80} rot={t * 90} /></At>
        <At x={1460} y={430} s={pop(t, fps, send + 0.3)}><Person size={180} /></At>
        <At x={1460} y={620} o={ramp(t, send + 0.9, 0.5)}><Chip color={DIM} size={30}>exists first</Chip></At>
        <Cross x={960} y={480} at={send + 2.0} r={200} />
      </Scene>
      <Scene from={B} to={1e9}>
        {pairs.map(([i, j], k) => (
          <Flow key={k} x1={nodes[i][0]} y1={nodes[i][1]} x2={nodes[j][0]} y2={nodes[j][1]} color={GOLD} p={link} width={2.5} />
        ))}
        {nodes.map(([x, y, icon, lab, col, at], i) => (
          <React.Fragment key={i}>
            <Ring x={x} y={y} p={ramp(t, tog, 1.2)} r0={70} r1={170} color={GOLD} width={4} />
            <At x={x} y={y} s={pop(t, fps, at)}>
              <div style={{ width: 170, height: 170, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                background: "radial-gradient(circle, #0b0c1acc 55%, transparent 72%)" }}>{icon}</div>
            </At>
            <At x={x + (i === 1 ? -190 : i === 2 ? 200 : 170)} y={y + (i === 0 ? 0 : i === 3 ? 10 : 0)} o={ramp(t, at + 0.3, 0.5)}><Glow color={col} size={34}>{lab}</Glow></At>
          </React.Fragment>
        ))}
        <At x={1560} y={150} o={ramp(t, first, 0.5)}><Glow color={GOLD} size={40}>none comes first</Glow></At>
        <At x={380} y={150} o={ramp(t, rel, 0.5)}><Struck at={rel + 0.9} size={40}>relation first?</Struck></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. formation demonstrates emptiness
const Formation: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("None of this makes");
  const forms = c("It still forms"), drink = c("cools a drink"), away = c("warns the hand away");
  const vivid = c("this vivid forming"), shows = c("shows its emptiness");
  const dep = c("depended on nothing"), never = c("could never be felt"), felt = c("To be felt and to be independent");
  const back = ramp(t, away + 0.3, 0.5);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={vivid - 0.3}>
        <At x={960} y={110} o={ramp(t, t0 + 0.4, 0.5)}><Glow color={CHALK} size={42}>no less real</Glow></At>
        <At x={480} y={440} s={pop(t, fps, t0)}><IceCube size={200} spin={t * 10} flash={between(t, forms, forms + 1.2, 0.3)} /></At>
        <Sparks x={480} y={440} k={between(t, forms, vivid, 0.4)} r={190} />
        <At x={480} y={700} o={ramp(t, forms, 0.5)}><Glow color={ICE} size={36}>it forms</Glow></At>
        <At x={980} y={430} s={pop(t, fps, drink)}><Glass cool={ramp(t, drink + 0.3, 2.5)} /></At>
        <At x={980} y={700} o={ramp(t, drink + 0.3, 0.5)}><Glow color={ICE} size={36}>cools a drink</Glow></At>
        <At x={1440 + back * 160} y={440 - back * 30} s={pop(t, fps, away)} r={-90 + back * 25}><Hand size={190} /></At>
        <Flow x1={1400} y1={560} x2={1640} y2={560} color={ROSE} p={back} />
        <At x={1500} y={700} o={ramp(t, away + 0.3, 0.5)}><Glow color={ROSE} size={36}>warns the hand</Glow></At>
      </Scene>
      <Scene from={vivid - 0.2} to={dep - 0.3}>
        <Centre top={250}><Reveal text="vivid forming" at={vivid} size={86} color={ICE} top="#F0FBFF" /></Centre>
        <Svg><DrawPath d="M960 380 L960 500 M935 475 L960 505 L985 475" p={ramp(t, vivid + 0.8, 0.6)} color={GOLD} width={5} len={250} /></Svg>
        <Centre top={540}><Reveal text="shows emptiness" at={shows} size={86} /></Centre>
      </Scene>
      <Scene from={dep - 0.2} to={1e9}>
        <At x={680} y={400} s={pop(t, fps, dep)}>
          <div style={{ width: 280, height: 280, border: `5px solid ${GOLD}`, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center",
            background: `${GOLD}14`, boxShadow: `0 0 30px ${GOLD}88, inset 0 0 30px ${GOLD}55` }}>
            <IceCube size={130} spin={0} />
          </div>
        </At>
        <At x={680} y={600} o={ramp(t, dep + 0.4, 0.5)}><Glow color={GOLD} size={34}>depends on nothing</Glow></At>
        <At x={1340} y={400} s={pop(t, fps, dep + 0.5)} r={90}><Hand size={190} /></At>
        {[0, 1, 2].map((k) => {
          const u = ((t - dep - 0.8 - k * 0.4) % 1.6) / 1.6;
          const on = t > dep + 0.8 + k * 0.4 ? 1 : 0;
          const x = 1230 - Math.sin(u * Math.PI) * 380;
          return <At key={k} x={x} y={360 + k * 40} o={on * Math.sin(u * Math.PI)}><Orb size={26} color={ROSE} /></At>;
        })}
        <At x={1340} y={600} o={ramp(t, never, 0.5)}><Glow color={WARM} size={40} serif>never felt</Glow></At>
        <At x={960} y={760} o={ramp(t, felt, 0.6)}>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <Chip color={ICE} size={40}>felt</Chip>
            <Glow color={WARM} size={44}>cannot go with</Glow>
            <Chip color={GOLD} size={40}>independent</Chip>
          </div>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. arises, sharpens, fades
const Unfolding: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The sting arises"), sh = c("sharpens and fades"), emp = c("Empty, it is felt"), now = c("right now");
  const curve = ramp(t, t0, sh - t0 + 1.8);
  const melt = ramp(t, t0, 6);
  return (
    <AbsoluteFill>
      <Svg>
        <path d="M360 560 L1560 560" stroke={DIM} strokeWidth={2} strokeOpacity={0.5} />
        <DrawPath d="M360 560 C 520 540, 640 260, 800 250 C 960 245, 1100 420, 1260 520 C 1360 560, 1460 560, 1560 560" p={curve} color={ICE} width={6} len={1500} />
      </Svg>
      <At x={560} y={620} o={ramp(t, t0, 0.5)}><Glow color={ICE} size={38}>arises</Glow></At>
      <At x={830} y={200} o={ramp(t, sh, 0.5)}><Glow color={ICE} size={38}>sharpens</Glow></At>
      <At x={1300} y={620} o={ramp(t, sh + 0.9, 0.5)}><Glow color={DIM} size={38}>fades</Glow></At>
      <At x={1640} y={380} s={pop(t, fps, t0)}><IceCube size={150 * (1 - 0.5 * melt)} spin={t * 10} /></At>
      <At x={1640} y={470} o={melt}><div style={{ width: 200 * melt, height: 24, borderRadius: "50%", background: `${ICE}55`, boxShadow: `0 0 20px ${ICE}` }} /></At>
      <Centre top={680}><Reveal text="empty, and felt" at={emp} size={84} /></Centre>
      <Ring x={960} y={720} p={ramp(t, now, 1.4)} r0={100} r1={420} color={GOLD} width={4} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 13. close
const Close: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("What falls away");
  const thing = c("a cold thing behind it"), feeler = c("a feeler standing apart"), palm = c("The cold in your palm"), two = c("one appearance, seen from two sides");
  const ghost1 = between(t, thing, thing + 2.0, 0.5), drift1 = ramp(t, thing + 1.2, 1.4);
  const ghost2 = between(t, feeler, feeler + 2.0, 0.5), drift2 = ramp(t, feeler + 1.2, 1.4);
  return (
    <AbsoluteFill>
      <At x={1120 + drift1 * 200} y={330 - drift1 * 60} o={ghost1 * 0.7} blur={drift1 * 10}>
        <div style={{ width: 360, height: 360, border: `3px dashed ${DIM}`, borderRadius: 20, background: "#ffffff06" }} />
      </At>
      <At x={1120 + drift1 * 200} y={110} o={ghost1}><Glow color={DIM} size={36}>a cold thing behind?</Glow></At>
      <At x={1560 + drift2 * 160} y={460} o={ghost2 * 0.8} blur={drift2 * 10}><Person size={220} color={DIM} dashed /></At>
      <At x={1560} y={640} o={ghost2}><Glow color={DIM} size={36}>a feeler apart?</Glow></At>
      <At x={960} y={650} s={pop(t, fps, t0 - 0.2, 14)}><Palm /></At>
      <At x={960} y={460} s={pop(t, fps, t0, 13)}><IceCube size={210} spin={(t - t0) * 7} flash={between(t, palm, palm + 1.5, 0.5)} /></At>
      <Mist x={960} y={560} start={palm} spread={260} n={18} />
      <Svg>
        <DrawPath d="M820 330 A 210 210 0 0 0 820 610" p={ramp(t, two, 1.0)} color={TEAL} width={6} len={420} />
        <DrawPath d="M1100 330 A 210 210 0 0 1 1100 610" p={ramp(t, two + 0.4, 1.0)} color={GOLD} width={6} len={420} />
      </Svg>
      <At x={560} y={470} o={ramp(t, two + 0.6, 0.6)}><Glow color={TEAL} size={40}>vivid</Glow></At>
      <At x={1380} y={470} o={ramp(t, two + 1.0, 0.6) * (1 - ghost2)}><Glow color={GOLD} size={40}>unfindable</Glow></At>
      <Centre top={110}><Reveal text="one appearance, two sides" at={two + 0.3} size={78} /></Centre>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["ice", 0], ["storeys", c("Many philosophies build", 0.6)], ["conv", c("speaks instead of two truths", 0.6)], ["ult", c("Ultimate truth is not", 0.6)],
    ["one", c("not two worlds", 0.6)], ["basin", c("Now return to the ice", 0.6)], ["search", c("Nor is the coldness sealed", 0.6)],
    ["codes", c("What appears is not an ice", 0.6)], ["form", c("None of this makes", 0.6)], ["ice", c("The sting arises", 0.6)], ["close", c("What falls away", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Many philosophies build", 0.9)], <IceHold />],
    [S("Many philosophies build", "speaks instead of two truths"), <Storeys />],
    [S("speaks instead of two truths", "Ultimate truth is not"), <Conventional />],
    [S("Ultimate truth is not", "not two worlds"), <Ultimate />],
    [S("not two worlds", "Now return to the ice"), <OneAppearance />],
    [S("Now return to the ice", "Nor is the coldness sealed"), <Basins />],
    [S("Nor is the coldness sealed", "What appears is not an ice"), <NotBetween />],
    [S("What appears is not an ice", "None of this makes"), <CoDesignation />],
    [S("None of this makes", "The sting arises"), <Formation />],
    [S("The sting arises", "What falls away"), <Unfolding />],
    [S("What falls away", null), <Close />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
