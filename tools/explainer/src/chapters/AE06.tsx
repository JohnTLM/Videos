// Anatta to Emptiness, Chapter 6: The Chariot Comes Alive, Part One. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Picture an old wooden chariot", "Two wheels", "an axle", "a frame", "a pole for the horses",
  "Now ask a simple question", "Where, exactly, is the chariot",
  "an ancient dialogue", "A monk named", "puts it to King", "this small exchange", "the seed of everything",
  "It helps to be exact", "what the chariot gave", "It did not deepen", "the discovery of no self", "It did not intensify", "already arrived in full",
  "a way to understand", "Experience was free of substance", "The view still pictured", "a working demonstration",
  "function completely", "nowhere to be found", "simple enough to check",
  "never just explaining a vehicle", "how conventional reality works", "Walking is the chariot", "Hearing is the chariot",
  "The body, society and language",
  "assumes a simple order", "First there is a thing", "Then it receives a name", "A tree exists", "this book's reading",
  "conceptual designation", "refuses it from the start",
  "He does not ask", "He asks where it is", "Is it the wheels", "The axle", "The frame", "All the parts together",
  "Something apart from them", "Each answer fails",
  "Centuries later", "made the search complete", "He checked seven ways", "not the same as its parts", "not different from them",
  "It does not own them", "It is not inside them", "they are not inside it", "not their mere collection", "not their shape",
  "Every hiding place is closed",
  "the chariot is not denied", "Many readers think", "That is a mistake", "established by designation", "People still ride",
  "Then a second question", "exactly a chariot", "Remove the axle", "no smaller chariot", "There is no chariot",
  "not loose dependence", "a house and the colour", "Every condition is required", "not a new ground",
  "the name does not arrive", "arises together with the functioning", "itself only a convention", "not a hidden layer",
  "what makes a word valid", "Not matching a hidden essence", "because medicine heals", "Money is valid", "A teacher is a teacher",
  "every relationship", "A bell does not exist first", "join in sounding", "are designated together", "saw this in a boat",
  "Rower, oars, water", "Nothing comes first",
  "Ultimate analysis removes", "does not remove functioning",
  "the question turns around", "Not what really exists", "a world that cannot be found",
];

// deeper golds and indigos for this series
const AMBER = "#D9A441", INDIGO = "#7C7CF2";

const M = {
  chariot: { a: "rgba(50,45,150,0.55)", b: "rgba(190,135,40,0.42)", c: "rgba(30,80,120,0.3)" },
  dialogue: { a: "rgba(150,100,30,0.45)", b: "rgba(60,50,150,0.5)", c: "rgba(40,110,120,0.3)" },
  taste: { a: "rgba(40,110,140,0.45)", b: "rgba(180,130,50,0.4)", c: "rgba(70,55,160,0.4)" },
  grammar: { a: "rgba(70,50,160,0.5)", b: "rgba(170,120,40,0.4)", c: "rgba(120,60,120,0.3)" },
  search: { a: "rgba(35,40,130,0.6)", b: "rgba(200,140,40,0.38)", c: "rgba(30,90,130,0.3)" },
  together: { a: "rgba(190,140,50,0.48)", b: "rgba(70,60,170,0.45)", c: "rgba(50,140,130,0.32)" },
  function: { a: "rgba(60,130,120,0.45)", b: "rgba(190,140,50,0.42)", c: "rgba(80,60,170,0.4)" },
};

// ---------------------------------------------------------------- the chariot
// viewBox 0 0 600 420. Parts can fade in, spread apart (exploded view) or turn dashed.
type CP = { wheels?: number; axle?: number; frame?: number; pole?: number; spread?: number; rot?: number; dash?: boolean;
  axleOut?: number; rider?: number; hi?: number };
const PART = { // centre of each part in the viewBox, assembled, and its offset when spread = 1
  front: { x: 260, y: 300, dx: -110, dy: 20 }, rear: { x: 360, y: 265, dx: 140, dy: -5 },
  axle: { x: 312, y: 283, dx: 0, dy: 95 }, frame: { x: 305, y: 168, dx: 0, dy: -80 }, pole: { x: 95, y: 228, dx: -40, dy: -70 },
};
const WheelG: React.FC<{ cx: number; cy: number; r: number; rot: number; color: string; dash?: boolean; o?: number }> = ({ cx, cy, r, rot, color, dash, o = 1 }) => (
  <g opacity={o} transform={`translate(${cx} ${cy})`}>
    <circle r={r} fill={`${color}18`} stroke={color} strokeWidth={9} strokeDasharray={dash ? "16 12" : undefined} />
    <circle r={r - 12} fill="none" stroke={color} strokeWidth={2} opacity={0.5} />
    <g transform={`rotate(${rot})`}>
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-(r - 6)} stroke={color} strokeWidth={5}
        strokeDasharray={dash ? "10 8" : undefined} transform={`rotate(${i * 45})`} />)}
    </g>
    <circle r={14} fill={color} />
  </g>
);
const Chariot: React.FC<CP & { w?: number }> = ({ wheels = 1, axle = 1, frame = 1, pole = 1, spread = 0, rot = 0, dash, axleOut = 0, rider = 0, hi = 0, w = 600 }) => {
  const off = (k: keyof typeof PART) => `translate(${PART[k].dx * spread} ${PART[k].dy * spread})`;
  const da = dash ? "14 10" : undefined;
  return (
    <svg width={w} height={w * 0.7} viewBox="0 0 600 420" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${8 + 14 * hi}px ${AMBER})` }}>
      <g transform={off("rear")}><WheelG cx={360} cy={265} r={100} rot={rot} color={AMBER} dash={dash} o={wheels * 0.7} /></g>
      <g transform={`${off("axle")} translate(0 ${axleOut * 160})`} opacity={axle * (1 - axleOut)}>
        <line x1={240} y1={307} x2={385} y2={258} stroke={ICE} strokeWidth={16} strokeLinecap="round" strokeDasharray={da} />
      </g>
      <g transform={off("pole")} opacity={pole}>
        <line x1={175} y1={205} x2={20} y2={250} stroke={TEAL} strokeWidth={10} strokeLinecap="round" strokeDasharray={da} />
        <line x1={10} y1={222} x2={36} y2={280} stroke={TEAL} strokeWidth={9} strokeLinecap="round" strokeDasharray={da} />
      </g>
      <g transform={off("frame")} opacity={frame}>
        {rider > 0 && <g opacity={rider}>
          <circle cx={330} cy={62} r={20} fill="none" stroke={ROSE} strokeWidth={5} />
          <path d="M330 84 L330 130 M330 98 L290 120 M330 98 L370 112" stroke={ROSE} strokeWidth={5} strokeLinecap="round" fill="none" />
        </g>}
        <path d="M170 215 L440 215 L452 140 Q446 118 420 118 L196 118 Q178 140 170 215 Z" fill={`${INDIGO}40`} stroke={INDIGO}
          strokeWidth={7} strokeLinejoin="round" strokeDasharray={da} />
        <path d="M196 150 L436 150 M200 182 L440 182" stroke={INDIGO} strokeWidth={3} opacity={0.7} />
      </g>
      <g transform={off("front")}><WheelG cx={260} cy={300} r={105} rot={rot} color={GOLD} dash={dash} o={wheels} /></g>
    </svg>
  );
};
/** Screen position of a part for a chariot drawn with At at (cx, cy) and width w. */
const partAt = (k: keyof typeof PART, cx: number, cy: number, w: number, spread: number) => {
  const s = w / 600, p = PART[k];
  return { x: cx + (p.x + p.dx * spread - 300) * s, y: cy + (p.y + p.dy * spread - 210) * s };
};

// ---------------------------------------------------------------- small drawings
const Figure: React.FC<{ color: string; crown?: boolean; robe?: string }> = ({ color, crown, robe }) => (
  <svg width={200} height={320} viewBox="0 0 200 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    {crown && <path d="M70 48 L76 18 L90 38 L100 12 L110 38 L124 18 L130 48 Z" fill={GOLD} stroke={GOLD} strokeWidth={3} strokeLinejoin="round" />}
    <circle cx={100} cy={80} r={32} fill={`${color}22`} stroke={color} strokeWidth={5} />
    <path d="M100 116 Q40 140 36 300 L164 300 Q160 140 100 116 Z" fill={`${robe ?? color}44`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);
const Walker: React.FC<{ color?: string }> = ({ color = CHALK }) => {
  const { t } = useT();
  const s = Math.sin(t * 5);
  return (
    <svg width={110} height={200} viewBox="0 0 120 220" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      <circle cx={60} cy={30} r={22} fill="none" stroke={color} strokeWidth={6} />
      <path d={`M60 55 L60 130 M60 75 L${30 + 10 * s} 110 M60 75 L${90 - 10 * s} 110 M60 130 L${35 + 12 * s} 200 M60 130 L${85 - 12 * s} 200`}
        stroke={color} strokeWidth={6} strokeLinecap="round" fill="none" />
    </svg>
  );
};
const Note: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={90} height={100} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={color} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={color} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={color} />
  </svg>
);
const BodyIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg width={100} height={190} viewBox="0 0 100 190" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={50} cy={24} r={18} fill={`${color}33`} stroke={color} strokeWidth={4} />
    <path d="M50 44 Q20 46 18 90 L26 120 L34 120 L34 180 L66 180 L66 120 L74 120 L82 90 Q80 46 50 44 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);
const People: React.FC<{ color: string }> = ({ color }) => (
  <svg width={170} height={150} viewBox="0 0 170 150" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    {[30, 85, 140].map((x, i) => <g key={i} transform={`translate(${x} ${i === 1 ? 20 : 40})`}>
      <circle cx={0} cy={0} r={15} fill={`${color}33`} stroke={color} strokeWidth={4} />
      <path d="M-24 80 Q-22 22 0 20 Q22 22 24 80 Z" fill={`${color}33`} stroke={color} strokeWidth={4} />
    </g>)}
  </svg>
);
const Speech: React.FC<{ color: string; text: string; size?: number }> = ({ color, text, size = 34 }) => (
  <div style={{ position: "relative", padding: `${size * 0.5}px ${size * 0.8}px`, borderRadius: size, border: `3px solid ${color}`,
    background: `${color}22`, boxShadow: `0 0 24px ${color}66`, fontFamily: "SourceSans", fontSize: size, color: CHALK, whiteSpace: "nowrap" }}>
    {text}
    <div style={{ position: "absolute", left: 40, bottom: -22, width: 0, height: 0, borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent", borderTop: `22px solid ${color}` }} />
  </div>
);
const Tree: React.FC<{ size?: number }> = ({ size = 260 }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 200 230" style={{ filter: `drop-shadow(0 0 12px ${GREEN})` }}>
    <path d="M92 230 L96 140 L70 110 M98 150 L130 112 M100 230 L104 130" stroke={AMBER} strokeWidth={10} strokeLinecap="round" fill="none" />
    {[[100, 70, 62], [55, 100, 42], [148, 98, 44], [100, 120, 40]].map(([x, y, r], i) =>
      <circle key={i} cx={x} cy={y} r={r} fill={`${GREEN}55`} stroke={GREEN} strokeWidth={4} />)}
  </svg>
);
/** A luggage-style name tag. */
const Tag: React.FC<{ text: string; color?: string; size?: number }> = ({ text, color = GOLD, size = 40 }) => (
  <div style={{ position: "relative", display: "inline-block", padding: `${size * 0.25}px ${size * 0.6}px ${size * 0.25}px ${size * 1.0}px`,
    background: `${color}33`, border: `3px solid ${color}`, borderRadius: `${size * 0.6}px 10px 10px ${size * 0.6}px`,
    fontFamily: "Cormorant", fontWeight: 600, fontSize: size, color: CHALK, boxShadow: `0 0 22px ${color}88`, whiteSpace: "nowrap" }}>
    <div style={{ position: "absolute", left: size * 0.3, top: "50%", width: size * 0.3, height: size * 0.3, marginTop: -size * 0.15,
      borderRadius: "50%", border: `3px solid ${color}` }} />
    {text}
  </div>
);
const House: React.FC<{ fill: string }> = ({ fill }) => (
  <svg width={240} height={230} viewBox="0 0 240 230" style={{ filter: `drop-shadow(0 0 12px ${fill})` }}>
    <path d="M20 110 L120 20 L220 110 Z" fill={`${fill}66`} stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
    <rect x={40} y={110} width={160} height={110} fill={`${fill}88`} stroke={CHALK} strokeWidth={5} />
    <rect x={102} y={150} width={36} height={70} fill="#00000055" stroke={CHALK} strokeWidth={3} />
    <rect x={60} y={135} width={30} height={30} fill="#ffffff33" stroke={CHALK} strokeWidth={3} />
  </svg>
);
const Lens: React.FC = () => (
  <svg width={170} height={170} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.14)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);
const Bottle: React.FC = () => (
  <svg width={120} height={170} viewBox="0 0 120 170" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <rect x={38} y={8} width={44} height={24} rx={5} fill={ROSE} />
    <path d="M30 40 L90 40 L96 160 L24 160 Z" fill={`${ROSE}33`} stroke={ROSE} strokeWidth={5} strokeLinejoin="round" />
    <path d="M60 78 L60 122 M38 100 L82 100" stroke={CHALK} strokeWidth={10} strokeLinecap="round" />
  </svg>
);
const Coin: React.FC<{ rot: number }> = ({ rot }) => (
  <svg width={160} height={160} viewBox="-80 -80 160 160" style={{ filter: `drop-shadow(0 0 12px ${AMBER})` }}>
    <g transform={`scale(${Math.cos(rot)} 1)`}>
      <circle r={66} fill={`${AMBER}66`} stroke={GOLD} strokeWidth={6} /><circle r={48} fill="none" stroke={GOLD} strokeWidth={3} />
      <rect x={-12} y={-12} width={24} height={24} fill="#00000066" stroke={GOLD} strokeWidth={3} />
    </g>
  </svg>
);
const Board: React.FC = () => (
  <svg width={210} height={170} viewBox="0 0 210 170" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
    <rect x={10} y={10} width={150} height={100} rx={6} fill="#0e2a2a" stroke={TEAL} strokeWidth={5} />
    <path d="M30 40 L90 40 M30 64 L130 64 M30 88 L70 88" stroke={CHALK} strokeWidth={4} strokeLinecap="round" opacity={0.8} />
    <circle cx={182} cy={70} r={16} fill="none" stroke={TEAL} strokeWidth={5} />
    <path d="M182 88 L182 140 L170 168 M182 140 L196 168 M182 102 L150 74" stroke={TEAL} strokeWidth={5} strokeLinecap="round" fill="none" />
  </svg>
);
const Bell: React.FC = () => (
  <svg width={200} height={210} viewBox="0 0 200 210" style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }}>
    <path d="M100 18 Q50 22 48 100 Q46 140 22 160 L178 160 Q154 140 152 100 Q150 22 100 18 Z" fill={`${AMBER}55`} stroke={GOLD} strokeWidth={6} strokeLinejoin="round" />
    <circle cx={100} cy={176} r={16} fill={GOLD} /><circle cx={100} cy={12} r={9} fill="none" stroke={GOLD} strokeWidth={5} />
  </svg>
);
const Ear: React.FC = () => (
  <svg width={130} height={180} viewBox="0 0 130 180" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M40 150 Q20 130 30 110 Q40 92 30 70 Q22 20 72 14 Q118 14 112 66 Q108 96 84 110 Q70 120 72 140 Q72 168 46 166"
      fill={`${ROSE}22`} stroke={ROSE} strokeWidth={6} strokeLinecap="round" />
    <path d="M58 70 Q60 46 78 48 Q94 52 88 74 Q82 88 70 90" fill="none" stroke={ROSE} strokeWidth={5} strokeLinecap="round" />
  </svg>
);
const Boat: React.FC = () => {
  const { t } = useT();
  const a = Math.sin(t * 2.4) * 22;
  return (
    <svg width={520} height={330} viewBox="0 0 520 330" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((k) => <path key={k} d={Array.from({ length: 27 }, (_, i) => `${i ? "L" : "M"}${i * 20} ${250 + k * 26 + 8 * Math.sin(i * 0.7 - t * 2 + k)}`).join(" ")}
        fill="none" stroke={[ICE, TEAL, INDIGO][k]} strokeWidth={4} opacity={0.8} />)}
      <path d="M90 200 L430 200 Q400 260 260 262 Q130 260 90 200 Z" fill={`${AMBER}55`} stroke={GOLD} strokeWidth={6} strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
      <g style={{ filter: `drop-shadow(0 0 8px ${CHALK})` }}>
        <circle cx={250} cy={110} r={20} fill="none" stroke={CHALK} strokeWidth={5} />
        <path d="M250 132 L250 196 M250 148 L210 172" stroke={CHALK} strokeWidth={5} strokeLinecap="round" fill="none" />
        <g transform={`rotate(${a} 210 172)`}><line x1={150} y1={150} x2={330} y2={194} stroke={ROSE} strokeWidth={6} strokeLinecap="round" />
          <line x1={150} y1={150} x2={124} y2={250} stroke={ROSE} strokeWidth={6} strokeLinecap="round" /></g>
      </g>
      {[0, 1, 2].map((k) => <path key={k} d={`M${380 + ((t * 90 + k * 60) % 140)} ${60 + k * 34} q 40 -14 80 0`} fill="none" stroke={ICE} strokeWidth={3}
        opacity={0.6} strokeLinecap="round" />)}
    </svg>
  );
};

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};
const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };
const Centre: React.FC<{ y: number; children: React.ReactNode }> = ({ y, children }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Where, exactly, is the chariot");
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("Picture an old wooden chariot", 0.3), 0.6)}><Glow color={CHALK} size={46} serif>an old wooden chariot</Glow></At>
      <At x={960} y={490}>
        <Chariot w={760} wheels={ramp(t, c("Two wheels"), 0.5)} axle={ramp(t, c("an axle"), 0.5)} frame={ramp(t, c("a frame"), 0.5)}
          pole={ramp(t, c("a pole for the horses"), 0.5)} rot={t * 30} spread={0.35 * (1 - ramp(t, c("a pole for the horses") + 0.8, 1.2))}
          hi={ramp(t, q, 0.6)} />
      </At>
      {[["wheels", GOLD, "front", 0, "Two wheels"], ["axle", ICE, "axle", 40, "an axle"], ["frame", INDIGO, "frame", -70, "a frame"], ["pole", TEAL, "pole", -60, "a pole for the horses"]].map(([w, col, k, dy, ph], i) => {
        const p = partAt(k as keyof typeof PART, 960, 490, 760, 0.35);
        const at = c(ph as string);
        return <At key={i} x={p.x + (k === "pole" ? -60 : k === "front" ? -170 : 0)} y={p.y + (dy as number) + (k === "axle" ? 60 : 0)}
          o={between(t, at + 0.2, q - 0.3, 0.4)}><Glow color={col as string} size={32}>{w as string}</Glow></At>;
      })}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2 + t * 0.6;
        return <At key={i} x={960 + 470 * Math.cos(a)} y={480 + 230 * Math.sin(a)} s={pop(t, fps, q + i * 0.12)}><Glow color={GOLD} size={64} serif>?</Glow></At>;
      })}
      <At x={960} y={800} o={ramp(t, q, 0.5)}><Glow color={GOLD} size={50} serif>where, exactly, is the chariot?</Glow></At>
    </AbsoluteFill>
  );
};

const DialogueScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seed = c("the seed of everything");
  const out = 1 - ramp(t, seed - 0.2, 0.6);
  const branches = [
    "M960 760 C960 640 940 560 960 470", "M960 600 C900 540 820 520 760 430", "M960 560 C1030 500 1110 480 1180 400",
    "M960 470 C930 400 880 340 840 270", "M960 470 C1000 390 1050 330 1100 260", "M760 430 C700 380 650 360 600 330", "M1180 400 C1250 360 1300 340 1360 320",
  ];
  const tips = [[960, 470], [760, 430], [1180, 400], [840, 270], [1100, 260], [600, 330], [1360, 320]];
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("an ancient dialogue", 0.3), 0.5)}><Glow color={CHALK} size={44} serif>an ancient dialogue</Glow></At>
      <AbsoluteFill style={{ opacity: out }}>
        <At x={640} y={520} s={pop(t, fps, c("A monk named"))}><Figure color={AMBER} robe="#C8742A" /></At>
        <At x={640} y={730} o={ramp(t, c("A monk named") + 0.4, 0.4)}><Glow color={AMBER} size={34}>the monk Nāgasena</Glow></At>
        <At x={1280} y={520} s={pop(t, fps, c("puts it to King"))}><Figure color={INDIGO} crown /></At>
        <At x={1280} y={730} o={ramp(t, c("puts it to King") + 0.4, 0.4)}><Glow color={INDIGO} size={34}>King Milinda</Glow></At>
        <At x={900} y={300} s={pop(t, fps, c("puts it to King") + 0.6)}><Speech color={GOLD} text="where is the chariot?" /></At>
        <At x={960} y={790} o={ramp(t, c("this small exchange"), 0.4)}><Chip color={GOLD} size={30}>one small exchange</Chip></At>
      </AbsoluteFill>
      <Svg>
        {branches.map((d, i) => <DrawPath key={i} d={d} p={ramp(t, seed + 0.3 + i * 0.18, 0.9)} color={i % 2 ? AMBER : GOLD} width={i ? 6 : 10} len={600} />)}
      </Svg>
      <At x={960} y={770} s={pop(t, fps, seed)}><Orb size={60} color={GOLD} core={1} /></At>
      {tips.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, seed + 1.0 + i * 0.18)}><Orb size={34} color={[TEAL, ROSE, INDIGO, GOLD, ICE, VIOLET, GREEN][i]} /></At>)}
      <At x={1500} y={600} o={ramp(t, seed + 0.8, 0.5)}><Glow color={GOLD} size={36} serif>the seed of the whole book</Glow></At>
      <At x={1500} y={650} o={ramp(t, seed + 1.2, 0.5)}><Glow color={DIM} size={26}>as the author found it</Glow></At>
    </AbsoluteFill>
  );
};

const GaveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d1 = c("It did not deepen"), d2 = c("It did not intensify"), full = c("already arrived in full");
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("It helps to be exact", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>what the chariot did, and did not, give</Glow></At>
      <At x={960} y={470} s={pop(t, fps, c("It helps to be exact"))}><Chariot w={360} rot={t * 30} /></At>
      <At x={480} y={440} s={pop(t, fps, d1 - 0.2)}><Orb size={160 + 30 * ramp(t, full, 0.8)} color={GOLD} core={1} /></At>
      <At x={480} y={600} o={ramp(t, d1, 0.4)}><Glow color={GOLD} size={36} serif>the taste of anatta</Glow></At>
      <At x={480} y={650} o={ramp(t, c("the discovery of no self"), 0.4)}><Glow color={DIM} size={28}>no self</Glow></At>
      <Flow x1={800} y1={470} x2={600} y2={450} color={WARM} p={ramp(t, d1 + 0.3, 0.5)} dash />
      <StruckChip x={700} y={330} at={d1 + 0.2} strikeAt={d1 + 1.0} color={DIM} size={28}>deepen</StruckChip>
      <At x={1440} y={440} s={pop(t, fps, d2 - 0.2)}><Orb size={160 + 30 * ramp(t, full, 0.8)} color={TEAL} core={1} /></At>
      <At x={1440} y={600} o={ramp(t, d2, 0.4)}><Glow color={TEAL} size={36} serif>total exertion</Glow></At>
      <Flow x1={1120} y1={470} x2={1320} y2={450} color={WARM} p={ramp(t, d2 + 0.3, 0.5)} dash />
      <StruckChip x={1220} y={330} at={d2 + 0.2} strikeAt={d2 + 1.0} color={DIM} size={28}>intensify</StruckChip>
      <Ring x={480} y={440} p={ramp(t, full, 1.4)} r0={90} r1={220} color={GOLD} />
      <Ring x={1440} y={440} p={ramp(t, full + 0.2, 1.4)} r0={90} r1={220} color={TEAL} />
      <At x={960} y={790} o={ramp(t, full, 0.5)}><Chip color={GOLD} size={34}>both already complete</Chip></At>
    </AbsoluteFill>
  );
};

const MismatchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const exp = Math.min(c("Experience was free of substance"), c("a way to understand") + 1.2), view = c("The view still pictured"), demo = c("a working demonstration");
  const out = 1 - ramp(t, demo - 0.3, 0.6);
  const xs = Array.from({ length: 40 }, (_, i) => 240 + i * 13);
  const lensA = ramp(t, c("nowhere to be found") - 0.3, 2.2) * Math.PI * 2;
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("a way to understand", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>a way to understand the taste</Glow></At>
      <AbsoluteFill style={{ opacity: out }}>
        <Svg style={{ opacity: ramp(t, exp, 0.6) }}>
          {[0, 1, 2, 3].map((k) => (
            <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${390 + k * 60 + 24 * Math.sin(x / 45 - t * 2 + k)}`).join(" ")}
              fill="none" stroke={[TEAL, ICE, VIOLET, GOLD][k]} strokeWidth={4} opacity={0.85} />
          ))}
        </Svg>
        <At x={500} y={700} o={ramp(t, exp, 0.5)}><Glow color={TEAL} size={36}>experience · free of substance</Glow></At>
        {Array.from({ length: 4 }).map((_, i) => {
          const x = 1220 + (i % 2) * 260, y = 380 + Math.floor(i / 2) * 170, wob = Math.sin(t * 2 + i) * 18;
          return <At key={i} x={x + wob} y={y} s={pop(t, fps, view + i * 0.15)}>
            <div style={{ width: 110, height: 110, borderRadius: 10, border: `3px solid ${CHALK}`, background: "rgba(200,200,230,0.22)" }} /></At>;
        })}
        <Flow x1={1290} y1={380} x2={1420} y2={380} color={DIM} p={ramp(t, view + 0.6, 0.5)} />
        <Flow x1={1290} y1={550} x2={1420} y2={550} color={DIM} p={ramp(t, view + 0.8, 0.5)} />
        <At x={1350} y={700} o={ramp(t, view, 0.5)}><Glow color={CHALK} size={36}>view · separate things interacting</Glow></At>
      </AbsoluteFill>
      <At x={960} y={460} s={pop(t, fps, demo)} o={1 - out * 0.999}><Chariot w={560} rot={t * 40} hi={1} /></At>
      <At x={960 + 300 * Math.cos(lensA)} y={460 + 120 * Math.sin(lensA)} o={between(t, c("nowhere to be found") - 0.3, c("nowhere to be found") + 2.0)}><Lens /></At>
      <At x={480} y={460} o={ramp(t, c("function completely"), 0.5)}><Glow color={GOLD} size={40} serif>functions completely</Glow></At>
      <At x={1450} y={460} o={ramp(t, c("nowhere to be found"), 0.5)}><Glow color={ICE} size={40} serif>found nowhere</Glow></At>
      <At x={960} y={790} o={ramp(t, c("simple enough to check"), 0.5)}><Chip color={TEAL} size={32}>simple enough to check for yourself</Chip></At>
    </AbsoluteFill>
  );
};

const EverythingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("The body, society and language");
  const cards: [React.ReactNode, string, string, number][] = [
    [<Walker color={CHALK} />, "walking", CHALK, c("Walking is the chariot")],
    [<Note color={TEAL} />, "hearing", TEAL, c("Hearing is the chariot")],
    [<BodyIcon color={ROSE} />, "the body", ROSE, b + 0.1],
    [<People color={INDIGO} />, "society", INDIGO, b + 0.6],
    [<Speech color={GOLD} text="a b c" size={30} />, "language", GOLD, b + 1.2],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("never just explaining a vehicle", 0.3), 0.5)}><Glow color={DIM} size={36}>never just a vehicle</Glow></At>
      <Centre y={170}><Reveal text="the structure of conventional reality" at={c("how conventional reality works")} size={66} /></Centre>
      {cards.map(([icon, label, col, at], i) => {
        const x = 300 + i * 330;
        return (
          <React.Fragment key={i}>
            <At x={x} y={470} s={pop(t, fps, at)}>{icon}</At>
            <At x={x} y={610} o={ramp(t, at + 0.2, 0.4)}><Glow color={col} size={34}>{label}</Glow></At>
            <At x={x} y={720} s={pop(t, fps, at + 0.5)} r={t * 40}>
              <svg width={70} height={70} viewBox="-40 -40 80 80"><WheelG cx={0} cy={0} r={32} rot={0} color={AMBER} /></svg>
            </At>
          </React.Fragment>
        );
      })}
      <At x={960} y={810} o={ramp(t, b + 1.6, 0.5)}><Glow color={AMBER} size={32}>each one, a chariot</Glow></At>
    </AbsoluteFill>
  );
};

const ConceptualScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const thing = c("First there is a thing"), name = c("Then it receives a name"), refuse = c("refuses it from the start");
  const fly = ramp(t, name + 0.2, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("assumes a simple order", 0.3), 0.5)}><Glow color={CHALK} size={40}>the ordinary picture</Glow></At>
      <At x={640} y={470} s={pop(t, fps, thing)} r={Math.sin(t * 2) * 1.5 * ramp(t, c("A tree exists"), 0.5)}><Tree size={280} /></At>
      <At x={640} y={680} o={ramp(t, thing + 0.3, 0.4)}><Glow color={GREEN} size={34}>first · a thing</Glow></At>
      <At x={1450 - 610 * fly} y={330 + 40 * fly} o={ramp(t, name, 0.4)}><Tag text="tree" /></At>
      <At x={1350} y={560} o={ramp(t, name + 0.3, 0.4)}><Glow color={GOLD} size={34}>then · a name</Glow></At>
      <Flow x1={760} y1={680 + 0} x2={1240} y2={560} color={GOLD} p={ramp(t, name + 0.5, 0.6)} />
      <At x={960} y={220} o={ramp(t, c("this book's reading"), 0.4)}><Glow color={DIM} size={28}>in this book's reading</Glow></At>
      <Centre y={250}><Reveal text="conceptual designation" at={c("conceptual designation")} size={64} color={AMBER} /></Centre>
      <StruckChip x={960} y={790} at={c("conceptual designation") + 0.6} strikeAt={refuse + 0.4} color={GOLD} size={34}>thing first, label second</StruckChip>
      <Crossed x={1000} y={620} at={refuse + 0.2} size={70} />
    </AbsoluteFill>
  );
};

const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cx = 900, cy = 470, w = 700, sp = 1;
  const where = c("He asks where it is");
  const stops: [keyof typeof PART | "all" | "apart", number][] = [
    ["front", c("Is it the wheels")], ["axle", c("The axle")], ["frame", c("The frame")], ["all", c("All the parts together")], ["apart", c("Something apart from them")],
  ];
  const posOf = (k: string) => k === "all" ? { x: cx, y: cy } : k === "apart" ? { x: 1600, y: 380 } : partAt(k as keyof typeof PART, cx, cy, w, sp);
  let lx = posOf("front").x, ly = posOf("front").y;
  for (let i = 0; i < stops.length; i++) {
    if (t >= stops[i][1]) {
      const a = posOf(stops[i][0]), b = i + 1 < stops.length ? posOf(stops[i + 1][0]) : a;
      const k = i + 1 < stops.length ? ramp(t, stops[i + 1][1] - 0.5, 0.5) : 0;
      lx = a.x + (b.x - a.x) * k; ly = a.y + (b.y - a.y) * k;
    }
  }
  const fail = c("Each answer fails");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={between(t, c("He does not ask", 0.3), where - 0.2, 0.4)}><StruckChipInline at={c("He does not ask") + 0.8}>what should it be called?</StruckChipInline></At>
      <At x={960} y={110} o={ramp(t, where, 0.4)}><Glow color={GOLD} size={50} serif>where is it?</Glow></At>
      <At x={cx} y={cy} s={pop(t, fps, c("He does not ask"))} o={1 - 0.5 * ramp(t, fail, 0.8)}>
        <Chariot w={w} spread={ramp(t, where, 1.0) * sp} rot={t * 10} />
      </At>
      {stops.slice(0, 3).map(([k, at], i) => {
        const p = posOf(k);
        return <At key={i} x={p.x + (k === "frame" ? 260 : 0)} y={p.y + (k === "axle" ? 60 : k === "front" ? -150 : 0)} o={ramp(t, at + 0.9, 0.4)}>
          <Glow color={WARM} size={30}>not here</Glow></At>;
      })}
      <At x={cx} y={cy} o={between(t, stops[3][1] - 0.1, fail + 1.0, 0.4)}>
        <div style={{ width: 860, height: 560, borderRadius: "50%", border: `3px dashed ${GOLD}`, boxShadow: `0 0 20px ${GOLD}55` }} />
      </At>
      <At x={cx - 330} y={cy - 270} o={ramp(t, stops[3][1] + 0.9, 0.4)}><Glow color={WARM} size={30}>not the heap</Glow></At>
      <At x={1600} y={380} s={pop(t, fps, stops[4][1])}>
        <div style={{ width: 200, height: 200, borderRadius: "50%", border: `3px dashed ${ICE}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={ICE} size={70} serif>?</Glow></div>
      </At>
      <At x={1600} y={540} o={ramp(t, stops[4][1] + 0.9, 0.4)}><Glow color={WARM} size={30}>not apart</Glow></At>
      <At x={lx + 40} y={ly + 40} o={between(t, stops[0][1] - 0.4, fail, 0.4)}><Lens /></At>
      <At x={960} y={810} o={ramp(t, fail, 0.5)}><Glow color={ICE} size={48} serif>each answer fails</Glow></At>
    </AbsoluteFill>
  );
};
const StruckChipInline: React.FC<{ at: number; children: React.ReactNode }> = ({ at, children }) => (
  <div style={{ position: "relative" }}><Chip color={DIM} size={32}>{children}</Chip><Strike at={at} /></div>
);

const SevenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tiles: [string, string][] = [
    ["not the same as its parts", "not the same as its parts"], ["not different from them", "not different from them"],
    ["not their owner", "It does not own them"], ["not inside them", "It is not inside them"], ["not their container", "they are not inside it"],
    ["not their mere collection", "not their mere collection"], ["not their shape", "not their shape"],
  ];
  const closed = c("Every hiding place is closed");
  return (
    <AbsoluteFill>
      <At x={960} y={95} o={ramp(t, c("Centuries later", 0.3), 0.5)}><Glow color={DIM} size={30}>centuries later · Candrakīrti</Glow></At>
      <Centre y={120}><Reveal text="the sevenfold search" at={c("made the search complete")} size={64} /></Centre>
      <At x={960} y={510} s={pop(t, fps, c("Centuries later"))}><Chariot w={360} rot={t * 20} dash={t > closed + 0.3} /></At>
      {tiles.map(([label, ph], i) => {
        const a = -Math.PI / 2 + (i / 7) * Math.PI * 2;
        const x = 960 + 640 * Math.cos(a), y = 520 + 260 * Math.sin(a);
        const at = c(ph);
        return <React.Fragment key={i}>
          <Flow x1={960} y1={510} x2={x} y2={y} color={INDIGO} p={ramp(t, at, 0.4)} pulses={false} dash />
          <At x={x} y={y} s={pop(t, fps, at)}>
            <div style={{ position: "relative" }}><Chip color={[GOLD, TEAL, ROSE, INDIGO, ICE, AMBER, VIOLET][i]} size={30}>{label}</Chip></div>
          </At>
        </React.Fragment>;
      })}
      <Ring x={960} y={510} p={ramp(t, closed + 0.2, 1.4)} r0={150} r1={420} color={WARM} />
      <At x={960} y={720} o={ramp(t, closed, 0.5)}><Glow color={WARM} size={36}>every hiding place closed</Glow></At>
    </AbsoluteFill>
  );
};

const NotDeniedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ride = c("People still ride");
  const move = ramp(t, ride, 3.5);
  const des = c("established by designation");
  const tag = { x: 960, y: 200 };
  const ps = (["front", "frame", "pole", "rear"] as const).map((k) => partAt(k, 900 + 200 * move, 520, 560, 0));
  return (
    <AbsoluteFill>
      <Centre y={95}><Reveal text="not denied" at={c("the chariot is not denied")} size={70} color={TEAL} top="#E8FFFB" /></Centre>
      <StruckChip x={1560} y={300} at={c("Many readers think")} strikeAt={c("That is a mistake") + 0.2} color={DIM} size={30}>“it doesn't really exist”</StruckChip>
      <At x={900 + 200 * move} y={520} s={pop(t, fps, c("the chariot is not denied"))}><Chariot w={560} rot={t * 30 + move * 400} rider={ramp(t, ride, 0.6)} /></At>
      <At x={tag.x} y={tag.y + 20} s={pop(t, fps, des)} o={1 - ramp(t, ride, 0.6)}><Tag text="chariot" /></At>
      {ps.map((p, i) => <Flow key={i} x1={tag.x} y1={tag.y + 50} x2={p.x} y2={p.y} color={GOLD} p={ramp(t, des + 0.4 + i * 0.15, 0.5) * (1 - ramp(t, ride, 0.6))} />)}
      <At x={480} y={330} o={between(t, des + 0.6, ride, 0.4)}><Glow color={GOLD} size={32}>in dependence on its parts</Glow></At>
      <Svg>
        {Array.from({ length: 8 }).map((_, i) => {
          const x = ((i * 260 - (t - ride) * 300 * (t > ride ? 1 : 0)) % 2080 + 2080) % 2080 - 80;
          return <line key={i} x1={x} y1={770} x2={x + 120} y2={770} stroke={DIM} strokeWidth={5} strokeLinecap="round" opacity={0.6} />;
        })}
      </Svg>
      <At x={960} y={830} o={ramp(t, ride + 0.4, 0.5)}><Glow color={ROSE} size={34}>and people still ride in it</Glow></At>
    </AbsoluteFill>
  );
};

const ExhaustiveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rm = c("Remove the axle"), none = c("There is no chariot"), loose = c("not loose dependence"), req = c("Every condition is required"),
    ground = c("not a new ground");
  const back = ramp(t, req, 1.0);
  const collapse = ramp(t, c("no smaller chariot"), 1.0) * (1 - back);
  const houseHue = [ROSE, TEAL, GOLD, VIOLET][Math.floor(Math.max(0, t - loose) / 0.9) % 4];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Then a second question", 0.3), 0.5)}><Glow color={GOLD} size={44} serif>what does it take to be exactly a chariot?</Glow></At>
      <At x={620} y={470} s={pop(t, fps, c("Then a second question"))} o={1 - 0.7 * collapse}>
        <Chariot w={560} rot={t * 20} axleOut={ramp(t, rm + 0.2, 0.8) * (1 - back)} spread={collapse * 0.6} dash={collapse > 0.5} hi={back} />
      </At>
      <At x={620} y={760} o={between(t, none, req - 0.2, 0.4)}><Glow color={WARM} size={44} serif>no chariot at all</Glow></At>
      <AbsoluteFill style={{ opacity: between(t, loose - 0.2, req, 0.5) }}>
        <At x={1400} y={440}><House fill={houseHue} /></At>
        <At x={1400} y={620}><Glow color={CHALK} size={32}>any colour · still a house</Glow></At>
        <At x={1400} y={680}><Chip color={DIM} size={28}>loose dependence</Chip></At>
      </AbsoluteFill>
      <At x={1380} y={470} o={ramp(t, req + 0.3, 0.5)}><Chip color={GOLD} size={36}>every condition, in full</Chip></At>
      <At x={620} y={740} o={between(t, ground - 0.1, ground + 2.4, 0.5)}>
        <div style={{ width: 640, height: 60, borderRadius: 8, background: `linear-gradient(180deg, ${AMBER}66, ${AMBER}22)`, border: `2px solid ${AMBER}`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={CHALK} size={28}>conditions as a ground?</Glow></div>
      </At>
      <Crossed x={620} y={740} at={ground + 0.8} size={60} />
      <At x={1380} y={620} o={ramp(t, ground + 1.2, 0.5)}><Glow color={ICE} size={34}>no ground beneath</Glow></At>
    </AbsoluteFill>
  );
};

const TogetherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tog = c("arises together with the functioning"), conv = c("itself only a convention"), hid = c("not a hidden layer");
  return (
    <AbsoluteFill>
      <At x={760} y={140} o={ramp(t, c("the name does not arrive", 0.2), 0.4)}><Chip color={DIM} size={30}>a finished thing</Chip></At>
      <Flow x1={920} y1={140} x2={1060} y2={140} color={DIM} p={ramp(t, c("the name does not arrive") + 0.3, 0.4)} />
      <At x={1180} y={140} o={ramp(t, c("the name does not arrive") + 0.5, 0.4)}><Chip color={DIM} size={30}>then a name</Chip></At>
      <Crossed x={960} y={140} at={c("the name does not arrive") + 1.1} size={50} />
      <At x={820} y={460} s={pop(t, fps, tog)}><Chariot w={480} rot={t * 60} hi={1} /></At>
      <At x={1360} y={420} s={pop(t, fps, tog)}><Tag text="chariot" size={46} /></At>
      <Ring x={1000} y={450} p={ramp(t, tog + 0.1, 1.4)} r0={120} r1={520} color={GOLD} />
      <At x={1360} y={510} o={ramp(t, tog + 0.4, 0.5)}><Glow color={GOLD} size={40} serif>arising together</Glow></At>
      <At x={960} y={760} o={between(t, conv - 0.1, hid + 2.0, 0.5)}>
        <div style={{ width: 900, height: 70, borderRadius: 10, background: `repeating-linear-gradient(90deg, ${INDIGO}55 0 30px, transparent 30px 44px)`,
          border: `2px dashed ${INDIGO}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={CHALK} size={30}>functioning, as a hidden layer?</Glow></div>
      </At>
      <Crossed x={960} y={760} at={hid + 0.3} size={60} />
      <At x={1360} y={600} o={ramp(t, conv + 0.3, 0.5)}><Chip color={TEAL} size={30}>functioning · also a convention</Chip></At>
    </AbsoluteFill>
  );
};

const ValidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cards: [React.ReactNode, string, string, number][] = [
    [<Bottle />, "medicine · heals", ROSE, c("because medicine heals")],
    [<Coin rot={t * 2.2} />, "money · exchanges", GOLD, c("Money is valid")],
    [<Board />, "teacher · teaches", TEAL, c("A teacher is a teacher")],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("what makes a word valid", 0.3), 0.5)}><Glow color={CHALK} size={46} serif>what makes a word valid?</Glow></At>
      <StruckChip x={960} y={220} at={c("Not matching a hidden essence")} strikeAt={c("Not matching a hidden essence") + 1.0} color={DIM} size={30}>matching a hidden essence</StruckChip>
      {cards.map(([icon, label, col, at], i) => (
        <React.Fragment key={i}>
          <At x={480 + i * 480} y={470} s={0.8 + 0.2 * pop(t, fps, at)} o={0.3 + 0.7 * ramp(t, at, 0.3)}>{icon}</At>
          <At x={480 + i * 480} y={620} o={ramp(t, at + 0.3, 0.4)}><Glow color={col} size={36}>{label}</Glow></At>
          <Ring x={480 + i * 480} y={470} p={ramp(t, at + 0.4, 1.2)} r0={80} r1={200} color={col} />
        </React.Fragment>
      ))}
      <At x={960} y={780} o={ramp(t, c("A teacher is a teacher") + 1.4, 0.5)}><Chip color={AMBER} size={36}>valid because it works</Chip></At>
    </AbsoluteFill>
  );
};

const RelationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bell = c("A bell does not exist first"), sound = c("join in sounding"), tog = c("are designated together"), boat = c("saw this in a boat"),
    row = c("Rower, oars, water");
  const ring = Math.sin(t * 10) * 6 * ramp(t, sound, 0.4);
  const labels: [string, number, number, string][] = [["bell", 300, 600, GOLD], ["air", 540, 300, ICE], ["ear", 760, 600, ROSE], ["vibration", 540, 690, TEAL]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("every relationship", 0.3), 0.5)}><Glow color={CHALK} size={40}>no relata waiting to be related</Glow></At>
      <At x={300} y={430} s={pop(t, fps, Math.min(bell, c("every relationship") + 0.6))} r={ring}><Bell /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={330} y={430} p={((t - sound) * 0.6 + k / 3) % 1 * (t > sound ? 1 : 0)} r0={60} r1={330} color={ICE} />)}
      <At x={760} y={430} s={pop(t, fps, sound + 0.4)}><Ear /></At>
      {labels.map(([w, x, y, col], i) => <At key={i} x={x} y={y} s={pop(t, fps, tog + i * 0.2)}><Chip color={col} size={28}>{w}</Chip></At>)}
      <Flow x1={300} y1={600} x2={760} y2={600} color={GOLD} p={ramp(t, tog + 0.6, 0.5)} />
      <Flow x1={540} y1={330} x2={540} y2={660} color={TEAL} p={ramp(t, tog + 0.8, 0.5)} />
      <At x={540} y={770} o={ramp(t, tog + 0.9, 0.5)}><Glow color={GOLD} size={32}>designated together</Glow></At>
      <At x={1400} y={430} s={pop(t, fps, boat)}><Boat /></At>
      <At x={1400} y={160} o={ramp(t, boat + 0.3, 0.5)}><Glow color={AMBER} size={34} serif>Dōgen's boat</Glow></At>
      {[["rower", 1180, 250, CHALK], ["oars", 1620, 250, ROSE], ["water", 1170, 680, ICE], ["wind", 1650, 330, TEAL], ["voyage", 1640, 680, GOLD]].map(([w, x, y, col], i) =>
        <At key={i} x={x as number} y={y as number} s={pop(t, fps, row + i * 0.3)}><Chip color={col as string} size={26}>{w as string}</Chip></At>)}
      <At x={1400} y={790} o={ramp(t, c("Nothing comes first"), 0.5)}><Glow color={GOLD} size={42} serif>nothing comes first</Glow></At>
    </AbsoluteFill>
  );
};

const AnalysisScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rm = c("Ultimate analysis removes"), fn = c("does not remove functioning");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, rm, 0.5)}><Glow color={CHALK} size={42} serif>ultimate analysis</Glow></At>
      <StruckChip x={560} y={450} at={rm + 0.2} strikeAt={rm + 1.4} color={DIM} size={40}>inherent existence</StruckChip>
      <At x={560} y={560} o={ramp(t, rm + 1.6, 0.4)}><Glow color={WARM} size={34}>removed</Glow></At>
      <At x={1340} y={450} s={pop(t, fps, fn)} r={t * 50}>
        <svg width={300} height={300} viewBox="-120 -120 240 240" style={{ filter: `drop-shadow(0 0 18px ${GOLD})` }}><WheelG cx={0} cy={0} r={105} rot={0} color={GOLD} /></svg>
      </At>
      <At x={1340} y={680} o={ramp(t, fn + 0.4, 0.4)}><Glow color={GOLD} size={42} serif>functioning remains</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const end = c("a world that cannot be found");
  const roll = ramp(t, end, 6);
  const appear = c("the question turns around") + 0.6;
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("the question turns around", 0.3), 0.5)}><Glow color={DIM} size={36}>the question turns around</Glow></At>
      <StruckChip x={960} y={250} at={c("Not what really exists")} strikeAt={c("Not what really exists") + 1.0} color={DIM} size={34}>what really exists?</StruckChip>
      <Centre y={340}><div style={{ maxWidth: 1400, textAlign: "center" }}>
        <Reveal text="how does an unfindable world work so perfectly?" at={end} size={70} wrap /></div></Centre>
      <At x={500 + 900 * roll} y={680} s={pop(t, fps, appear)}><Chariot w={340} rot={t * 30 + roll * 600} dash /></At>
      {Array.from({ length: 12 }).map((_, i) => (
        <At key={i} x={400 + rand(i) * 1100} y={600 + rand(i + 5) * 200} o={ramp(t, end + 1 + i * 0.1, 0.6) * 0.6}><Orb size={16 + rand(i + 2) * 20} color={[GOLD, INDIGO, TEAL][i % 3]} /></At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["chariot", 0], ["dialogue", c("an ancient dialogue", 0.6)], ["taste", c("It helps to be exact", 0.6)], ["grammar", c("never just explaining a vehicle", 0.6)],
    ["search", c("He does not ask", 0.6)], ["chariot", c("the chariot is not denied", 0.6)], ["search", c("Then a second question", 0.6)],
    ["together", c("the name does not arrive", 0.6)], ["function", c("what makes a word valid", 0.6)], ["together", c("Ultimate analysis removes", 0.6)],
    ["grammar", c("the question turns around", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("an ancient dialogue", 0.9)], <ChariotScene />],
    [S("an ancient dialogue", "It helps to be exact"), <DialogueScene />],
    [S("It helps to be exact", "a way to understand"), <GaveScene />],
    [S("a way to understand", "never just explaining a vehicle"), <MismatchScene />],
    [S("never just explaining a vehicle", "assumes a simple order"), <EverythingScene />],
    [S("assumes a simple order", "He does not ask"), <ConceptualScene />],
    [S("He does not ask", "Centuries later"), <SearchScene />],
    [S("Centuries later", "the chariot is not denied"), <SevenScene />],
    [S("the chariot is not denied", "Then a second question"), <NotDeniedScene />],
    [S("Then a second question", "the name does not arrive"), <ExhaustiveScene />],
    [S("the name does not arrive", "what makes a word valid"), <TogetherScene />],
    [S("what makes a word valid", "every relationship"), <ValidScene />],
    [S("every relationship", "Ultimate analysis removes"), <RelationScene />],
    [S("Ultimate analysis removes", "the question turns around"), <AnalysisScene />],
    [S("the question turns around", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
