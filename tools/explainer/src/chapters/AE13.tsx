// Anatta to Emptiness, Chapter 13: The Formation of a Mountain. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Nothing seems more solid", "Massive, ancient", "indifferent to whether anyone", "If anything exists",
  "Try to point to the mountain", "not the word",
  "Is it the rock", "Which rock", "the next hill begin", "the soil, the trees", "the winter snow", "The stream belongs", "it belongs to the valley",
  "Walk up from the valley floor", "ask at each step", "There is no step",
  "the old search for a chariot", "not any one of its parts", "It is not their sum", "hidden beneath the slopes", "it is not the shape", "the mountain is not found",
  "A quieter story tempts", "a raw expanse of earth", "draws a line around", "a first and a second", "becomes a hidden base", "stuck on like a label",
  "no raw field is found", "picked out by contrast",
  "arise together with the picking", "One event, not two", "A rope is long", "neither discovered nor invented", "waiting for a surveyor", "conjured by a name",
  "None of this takes anything", "mapped and climbed", "A road cut into", "What is removed",
  "why does it feel so objective", "Ask a human, a bat", "A human sees a bounded", "A bat may meet", "A bee may barely", "Not three views", "Three worlds, arising together",
  "Humans agree on it", "Like instruments with the same", "the instruments are alike", "not a separate thing",
  "a blank void underneath", "Appearing and depending", "leaves no hole", "never doing any work",
  "One fine line", "still there when you look away", "a working conventional fact", "a second claim slips in", "exists on its own", "never earned", "It is smuggled in",
  "The mountain holds the road", "Dependable, completely", "dependable was never independent",
];

// deeper golds and indigos for this series
const DGOLD = "#D9A441", AMBER = "#F0B85A", INDIGO = "#6F63E8", DEEP = "#2C2775", EARTH = "#B07A45";

const M = {
  rise: { a: "rgba(60,50,150,0.55)", b: "rgba(190,140,50,0.35)", c: "rgba(40,40,110,0.35)" },
  search: { a: "rgba(70,55,160,0.5)", b: "rgba(170,120,50,0.35)", c: "rgba(30,90,120,0.3)" },
  field: { a: "rgba(150,100,45,0.45)", b: "rgba(70,50,140,0.45)", c: "rgba(60,40,100,0.3)" },
  together: { a: "rgba(190,140,60,0.45)", b: "rgba(70,55,160,0.5)", c: "rgba(40,110,130,0.3)" },
  road: { a: "rgba(60,60,150,0.5)", b: "rgba(200,150,60,0.4)", c: "rgba(40,90,120,0.3)" },
  bodies: { a: "rgba(90,50,150,0.5)", b: "rgba(40,110,140,0.4)", c: "rgba(170,120,60,0.3)" },
  line: { a: "rgba(50,45,130,0.55)", b: "rgba(190,140,55,0.4)", c: "rgba(60,40,110,0.3)" },
};

// ---------------------------------------------------------------- drawings
const PEAK = "M0 400 L110 280 L170 305 L300 60 L350 135 L395 105 L500 250 L540 235 L600 400 Z";
const SNOW = "M262 130 L300 60 L350 135 L333 128 L318 146 L300 122 L283 150 Z";
const BACK = "M-40 400 L60 250 L130 290 L210 190 L290 330 L420 170 L520 300 L640 230 L640 400 Z";

/** A mountain in a 600x400 box. rise lifts it out of the ground; draw traces the outline; fill colours it in. */
const Mountain: React.FC<{ id: string; w?: number; rise?: number; draw?: number; fill?: number; snow?: number; back?: number;
  dashed?: boolean; o?: number; strata?: number; edge?: string }> =
  ({ id, w = 600, rise = 1, draw = 1, fill = 1, snow = 1, back = 1, dashed, o = 1, strata = 1, edge = AMBER }) => (
    <svg width={w} height={(w * 2) / 3} viewBox="0 0 600 400" style={{ overflow: "visible", opacity: o }}>
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9A86F5" /><stop offset="0.5" stopColor="#4A3FA8" /><stop offset="1" stopColor="#1C1850" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5F52B8" /><stop offset="1" stopColor="#15123A" />
        </linearGradient>
        <clipPath id={`${id}c`}><rect x={-100} y={-200} width={840} height={600} /></clipPath>
        <clipPath id={`${id}m`}><path d={PEAK} /></clipPath>
      </defs>
      <g clipPath={`url(#${id}c)`}>
        <g transform={`translate(0 ${(1 - rise) * 420})`}>
          <path d={BACK} fill={`url(#${id}b)`} opacity={0.6 * fill * back} />
          <path d={PEAK} fill={`url(#${id}g)`} opacity={fill} />
          <g clipPath={`url(#${id}m)`} opacity={0.55 * fill * strata}>
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <path key={k} d={`M-20 ${160 + k * 42} Q150 ${140 + k * 42 + 18 * Math.sin(k * 1.7)} 300 ${160 + k * 42} T620 ${160 + k * 42}`}
                stroke={k % 2 ? DGOLD : "#8C7BE8"} strokeWidth={2.5} fill="none" />
            ))}
          </g>
          <path d={PEAK} fill="none" stroke={edge} strokeWidth={4} strokeLinejoin="round"
            strokeDasharray={dashed ? "14 12" : 2000} strokeDashoffset={dashed ? 0 : 2000 * (1 - draw)} style={{ filter: `drop-shadow(0 0 10px ${edge})` }} />
          <path d={SNOW} fill="#F6F3FF" opacity={snow * fill * 0.95} style={{ filter: "drop-shadow(0 0 8px #ffffff)" }} />
        </g>
      </g>
    </svg>
  );

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Walker: React.FC<{ color?: string; size?: number }> = ({ color = CHALK, size = 1 }) => {
  const { t } = useT();
  const s = Math.sin(t * 5);
  return (
    <svg width={120 * size} height={220 * size} viewBox="0 0 120 220" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      <circle cx={60} cy={30} r={20} fill="none" stroke={color} strokeWidth={6} />
      <path d={`M60 52 L60 128 M60 72 L${32 + 10 * s} 108 M60 72 L${88 - 10 * s} 108 M60 128 L${36 + 12 * s} 200 M60 128 L${84 - 12 * s} 200`}
        stroke={color} strokeWidth={6} strokeLinecap="round" fill="none" />
    </svg>
  );
};

const Wheel: React.FC<{ rot: number }> = ({ rot }) => (
  <svg width={130} height={130} viewBox="-65 -65 130 130" style={{ filter: `drop-shadow(0 0 10px ${DGOLD})` }}>
    <circle r={56} fill="none" stroke={DGOLD} strokeWidth={7} />
    <circle r={10} fill={DGOLD} />
    <g transform={`rotate(${rot})`}>{Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-54} stroke={DGOLD} strokeWidth={4} transform={`rotate(${i * 45})`} />)}</g>
  </svg>
);

const Rock: React.FC<{ size?: number; color?: string }> = ({ size = 110, color = EARTH }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M10 80 L22 40 L50 18 L86 22 L110 52 L104 82 Z" fill={`${color}55`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <path d="M50 18 L58 50 L104 82 M58 50 L22 40" fill="none" stroke={color} strokeWidth={2.5} opacity={0.7} />
  </svg>
);

const Heap: React.FC = () => (
  <svg width={190} height={130} viewBox="0 0 190 130">
    {Array.from({ length: 16 }).map((_, i) => {
      const row = i < 6 ? 0 : i < 11 ? 1 : i < 14 ? 2 : 3;
      const n = [6, 5, 3, 2][row], k = i - [0, 6, 11, 14][row];
      const x = 95 + (k - (n - 1) / 2) * 28, y = 110 - row * 26;
      const col = [EARTH, GREEN, DGOLD, "#8C7BE8"][i % 4];
      return <circle key={i} cx={x} cy={y} r={13} fill={`${col}88`} stroke={col} strokeWidth={2.5} />;
    })}
  </svg>
);

const Lens: React.FC = () => (
  <svg width={120} height={120} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={7} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={13} strokeLinecap="round" />
  </svg>
);

const Tree: React.FC<{ h?: number }> = ({ h = 60 }) => (
  <svg width={h * 0.7} height={h} viewBox="0 0 42 60" style={{ overflow: "visible" }}>
    <path d="M21 0 L40 44 L2 44 Z" fill={`${GREEN}aa`} stroke={GREEN} strokeWidth={2} />
    <rect x={18} y={44} width={6} height={14} fill={EARTH} />
  </svg>
);

const Telescope: React.FC = () => (
  <svg width={150} height={120} viewBox="0 0 150 120" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
    <path d="M20 60 L120 20 L130 44 L30 84 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={4} strokeLinejoin="round" />
    <path d="M70 66 L50 116 M70 66 L90 116 M70 66 L70 116" stroke={ICE} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

const Eye: React.FC<{ open: number; color?: string }> = ({ open, color = TEAL }) => (
  <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d={`M5 40 Q70 ${40 - 50 * open} 135 40 Q70 ${40 + 50 * open} 5 40 Z`} fill={`${color}22`} stroke={color} strokeWidth={4} />
    {open > 0.3 && <circle cx={70} cy={40} r={17 * open} fill={color} />}
  </svg>
);

const Bat: React.FC = () => {
  const { t } = useT();
  const f = Math.sin(t * 8) * 8;
  return (
    <svg width={130} height={70} viewBox="0 0 130 70" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }}>
      <path d={`M65 30 Q45 ${10 + f} 5 ${15 + f} Q20 30 15 45 Q35 38 45 50 Q55 40 65 45 Q75 40 85 50 Q95 38 115 45 Q110 30 125 ${15 + f} Q85 ${10 + f} 65 30 Z`}
        fill={`${VIOLET}66`} stroke={VIOLET} strokeWidth={3} strokeLinejoin="round" />
    </svg>
  );
};

const Bee: React.FC = () => {
  const { t } = useT();
  const f = Math.sin(t * 30) * 6;
  return (
    <svg width={110} height={80} viewBox="0 0 110 80" style={{ filter: `drop-shadow(0 0 8px ${AMBER})` }}>
      <ellipse cx={42} cy={22 + f * 0.3} rx={18} ry={12} fill={`${ICE}66`} stroke={ICE} strokeWidth={2} />
      <ellipse cx={62} cy={20 - f * 0.3} rx={18} ry={12} fill={`${ICE}66`} stroke={ICE} strokeWidth={2} />
      <ellipse cx={55} cy={48} rx={34} ry={20} fill={AMBER} />
      {[0, 1, 2].map((i) => <rect key={i} x={36 + i * 16} y={29} width={7} height={38} fill="#2a1d0a" />)}
      <circle cx={92} cy={46} r={9} fill="#2a1d0a" />
    </svg>
  );
};

const Gauge: React.FC<{ a: number; color: string }> = ({ a, color }) => (
  <svg width={240} height={150} viewBox="-120 -115 240 150" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M-95 0 A95 95 0 0 1 95 0" fill={`${color}18`} stroke={color} strokeWidth={6} />
    {Array.from({ length: 9 }).map((_, i) => {
      const q = Math.PI - (i / 8) * Math.PI;
      return <line key={i} x1={80 * Math.cos(q)} y1={-80 * Math.sin(q)} x2={93 * Math.cos(q)} y2={-93 * Math.sin(q)} stroke={color} strokeWidth={3} />;
    })}
    <line x1={0} y1={0} x2={78 * Math.cos(Math.PI - a)} y2={-78 * Math.sin(Math.PI - a)} stroke={CHALK} strokeWidth={6} strokeLinecap="round" />
    <circle r={10} fill={color} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const SolidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const start = c("Nothing seems more solid", 0.6);
  const rise = ramp(t, start, 3.2);
  const own = c("If anything exists");
  return (
    <AbsoluteFill>
      <Svg><DrawPath d="M300 728 L1620 728" p={ramp(t, start - 0.3, 1.0)} color={EARTH} width={4} /></Svg>
      <At x={960} y={470}><Mountain id="s1" w={780} rise={rise} draw={rise} fill={ramp(t, start + 0.8, 2.0)} snow={ramp(t, start + 2.6, 1.0)} /></At>
      <Mist x={960} y={720} start={start} color={DGOLD} spread={700} n={26} />
      <At x={330} y={330} s={pop(t, fps, c("Massive, ancient"))}><Chip color={DGOLD} size={40}>massive</Chip></At>
      <At x={330} y={450} s={pop(t, fps, c("Massive, ancient") + 0.5)}><Chip color={INDIGO} size={40}>ancient</Chip></At>
      <At x={1600} y={330} s={pop(t, fps, c("indifferent to whether anyone"))}><Chip color={ICE} size={36}>indifferent to any looking</Chip></At>
      <Ring x={960} y={300} p={ramp(t, own + 0.2, 1.6)} r0={60} r1={320} color={AMBER} />
      <At x={960} y={800} o={ramp(t, own, 0.6)}><Glow color={AMBER} size={46} serif>existing from its own side?</Glow></At>
    </AbsoluteFill>
  );
};

const PointScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pt = c("Try to point to the mountain");
  return (
    <AbsoluteFill>
      <At x={1200} y={470} s={pop(t, fps, pt - 0.3)}><Mountain id="p1" w={660} /></At>
      <At x={760} y={560} r={70} s={pop(t, fps, pt + 0.2)}><Hand size={170} /></At>
      <Flow x1={830} y1={520} x2={1120} y2={380} color={AMBER} p={ramp(t, pt + 0.5, 0.8)} />
      <At x={420} y={400} s={pop(t, fps, pt + 0.3)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={46}>"mountain"</Chip><Strike at={c("not the word") + 0.3} /></div>
      </At>
      <At x={420} y={500} o={ramp(t, c("not the word") + 0.4, 0.5)}><Glow color={DIM} size={30}>not the word</Glow></At>
      <At x={1200} y={790} o={ramp(t, pt + 0.8, 0.6)}><Glow color={AMBER} size={42} serif>the mountain itself</Glow></At>
    </AbsoluteFill>
  );
};

const MAIN = "M260 770 L580 450 L720 500 L930 210 L1070 380 L1170 350 L1400 620 L1520 770 Z";
const HILL = "M1340 770 Q1520 520 1720 580 Q1820 620 1880 770 Z";
const PartsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const draw = ramp(t, c("Is it the rock", 0.8), 1.2);
  const which = c("Which rock"), hill = c("the next hill begin"), trees = c("the soil, the trees"), snow = c("the winter snow");
  const stream = c("The stream belongs"), valley = c("it belongs to the valley");
  const rocks = [[700, 610], [880, 520], [1020, 600], [1180, 650], [820, 700]];
  const tr = [[640, 560], [690, 600], [1240, 520], [1290, 560], [1330, 610], [560, 660], [1600, 640], [1660, 610], [1750, 650]];
  const sx = 1380 + 90 * Math.sin(t * 2.2);
  return (
    <AbsoluteFill>
      <Svg>
        <defs>
          <linearGradient id="pm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8F7CF0" /><stop offset="1" stopColor="#1E1A55" /></linearGradient>
          <linearGradient id="ph" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6A5CC6" /><stop offset="1" stopColor="#1E1A55" /></linearGradient>
          <linearGradient id="ps" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={ICE} /><stop offset="1" stopColor={TEAL} /></linearGradient>
        </defs>
        <path d={HILL} fill="url(#ph)" opacity={ramp(t, hill - 0.4, 0.8) * 0.9} />
        <path d={MAIN} fill="url(#pm)" opacity={draw * 0.95} />
        <DrawPath d={MAIN} p={draw} color={AMBER} width={4} len={2600} />
        <DrawPath d="M120 772 L1900 772" p={draw} color={EARTH} width={4} len={1800} />
        <path d="M880 280 L930 210 L1000 300 L975 295 L955 320 L930 290 L905 315 Z" fill="#F6F3FF" opacity={ramp(t, snow, 0.8)} style={{ filter: "drop-shadow(0 0 10px #fff)" }} />
        <DrawPath d="M1010 330 Q1060 430 1030 520 Q1000 620 1120 700 Q1200 760 1400 765 L1900 765" p={ramp(t, stream, 2.4)} color="url(#ps)" width={9} len={1700} glow={false} />
      </Svg>
      {rocks.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, c("Is it the rock") + 0.3 + i * 0.12)}><Rock size={70} /></At>)}
      <At x={sx} y={600} o={ramp(t, which + 0.2, 0.5)}><div style={{ width: 0, height: 260, borderLeft: `4px dashed ${WARM}`, boxShadow: `0 0 12px ${WARM}` }} /></At>
      <At x={1440} y={420} o={ramp(t, which + 0.4, 0.5)}><Glow color={WARM} size={34}>where does it stop?</Glow></At>
      {tr.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, trees + i * 0.1)}><Tree h={64} /></At>)}
      <At x={930} y={150} o={ramp(t, snow + 0.3, 0.5)}><Glow color={CHALK} size={34}>winter snow?</Glow></At>
      <At x={1620} y={820} o={ramp(t, valley, 0.6)}><Glow color={TEAL} size={32}>mountain · or valley?</Glow></At>
      <At x={360} y={170} o={ramp(t, c("Is it the rock"), 0.5)}><Glow color={AMBER} size={44} serif>which part is the mountain?</Glow></At>
    </AbsoluteFill>
  );
};

const WalkScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w0 = c("Walk up from the valley floor");
  const p = ramp(t, w0, 7.5);
  const x0 = 300, y0 = 770, x1 = 1500, y1 = 300;
  const steps = c("ask at each step"), none = c("There is no step");
  return (
    <AbsoluteFill>
      <Svg>
        <defs><linearGradient id="wg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor={GREEN} stopOpacity={0.5} /><stop offset="1" stopColor={INDIGO} /></linearGradient></defs>
        <path d={`M${x0 - 200} 790 L${x0} ${y0} L${x1} ${y1} L${x1 + 300} 790 Z`} fill="url(#wg)" opacity={ramp(t, w0 - 0.4, 0.8) * 0.8} />
        <DrawPath d={`M${x0 - 200} 790 L${x0} ${y0} L${x1} ${y1} L${x1 + 300} 790`} p={ramp(t, w0 - 0.4, 1.0)} color={AMBER} width={4} />
      </Svg>
      {Array.from({ length: 6 }).map((_, i) => {
        const q = (i + 0.5) / 6;
        return <At key={i} x={x0 + (x1 - x0) * q} y={y0 + (y1 - y0) * q - 120} o={ramp(t, steps + i * 0.45, 0.4)}><Glow color={ICE} size={44} serif>?</Glow></At>;
      })}
      <At x={x0 + (x1 - x0) * p} y={y0 + (y1 - y0) * p - 70} s={pop(t, fps, w0)}><Walker size={0.65} /></At>
      <At x={560} y={240} o={ramp(t, steps, 0.5)}><Glow color={CHALK} size={36}>on the mountain yet?</Glow></At>
      <At x={1300} y={680} o={ramp(t, none, 0.6)}><Chip color={DGOLD} size={34}>no step changes the answer by itself</Chip></At>
    </AbsoluteFill>
  );
};

const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ch = c("the old search for a chariot");
  const cards = [
    { at: c("not any one of its parts"), icon: <Rock size={110} />, label: "one part" },
    { at: c("It is not their sum"), icon: <Heap />, label: "the sum" },
    { at: c("hidden beneath the slopes"), icon: <div style={{ position: "relative" }}><Mountain id="sr" w={170} snow={0} back={0} /><div style={{ position: "absolute", left: 50, top: 80 }}><Lens /></div></div>, label: "hidden beneath" },
    { at: c("it is not the shape"), icon: <Mountain id="sh" w={190} fill={0} snow={0} dashed />, label: "the shape" },
  ];
  const nf = c("the mountain is not found");
  return (
    <AbsoluteFill>
      <At x={700} y={160} s={pop(t, fps, ch)}><Wheel rot={t * 40} /></At>
      <At x={1060} y={160} o={ramp(t, ch + 0.3, 0.5)}><Glow color={DGOLD} size={38}>the chariot's search</Glow></At>
      {cards.map((k, i) => (
        <React.Fragment key={i}>
          <At x={330 + i * 420} y={400} s={pop(t, fps, k.at)}>{k.icon}</At>
          <Struck x={330 + i * 420} y={560} at={k.at + 0.2} strikeAt={k.at + 1.1} color={DIM}>{k.label}</Struck>
        </React.Fragment>
      ))}
      <div style={{ position: "absolute", top: 650, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="not found" at={nf + 0.4} size={96} color={ICE} top="#F0FBFF" />
      </div>
    </AbsoluteFill>
  );
};

const FieldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const raw = c("a raw expanse of earth"), line = c("draws a line around"), base = c("becomes a hidden base");
  const label = c("stuck on like a label"), gone = c("no raw field is found"), con = c("picked out by contrast");
  const out = ramp(t, gone + 0.4, 1.4);
  const drop = pop(t, fps, label, 9);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("A quieter story tempts", 0.3), 0.5) * (1 - ramp(t, con - 0.3, 0.5))}><Glow color={CHALK} size={40} serif>a quieter story</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - out * 0.85 }}>
        <At x={960} y={560} s={pop(t, fps, raw)}>
          <div style={{ width: 1300, height: 200, borderRadius: "50%", background: `radial-gradient(ellipse, ${EARTH}cc, ${EARTH}55 60%, transparent 75%)`,
            boxShadow: `0 0 60px ${EARTH}55` }} />
        </At>
        <At x={960} y={700} o={ramp(t, raw + 0.4, 0.5)}><Glow color={EARTH} size={32}>raw field, first</Glow></At>
        <Svg><DrawPath d="M700 560 C700 470 1220 470 1220 560 C1220 650 700 650 700 560 Z" p={ramp(t, line, 1.2)} color={AMBER} width={6} len={1400} /></Svg>
        <At x={1380} y={440} o={ramp(t, line + 0.6, 0.5)}><Glow color={AMBER} size={32}>then a boundary</Glow></At>
        <At x={560} y={330} s={pop(t, fps, c("a first and a second"))}><Chip color={EARTH} size={34}>first</Chip></At>
        <At x={740} y={330} s={pop(t, fps, c("a first and a second") + 0.5)}><Chip color={AMBER} size={34}>second</Chip></At>
        <At x={960} y={790} o={ramp(t, base, 0.5)}><Chip color={WARM} size={34}>a hidden base</Chip></At>
        <At x={960} y={560 - 260 * (1 - drop)} o={ramp(t, label - 0.1, 0.3)} r={-6}>
          <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 52, color: "#1b1440", background: AMBER, padding: "6px 34px", borderRadius: 10,
            boxShadow: `0 0 30px ${AMBER}` }}>mountain</div>
        </At>
      </AbsoluteFill>
      <Crossed x={960} y={560} at={gone + 0.3} size={110} />
      <At x={960} y={360} o={between(t, gone + 0.6, con - 0.2, 0.4)}><Glow color={ICE} size={50} serif>no raw field is found</Glow></At>
      {[["summit", "slope"], ["slope", "valley"], ["rock", "soil"]].map(([a, b], i) => (
        <At key={i} x={420 + i * 540} y={250} s={pop(t, fps, con + 0.3 + i * 0.4)}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Chip color={DGOLD} size={34}>{a}</Chip><Glow color={CHALK} size={34}>vs</Glow><Chip color={INDIGO} size={34}>{b}</Chip>
          </div>
        </At>
      ))}
      <At x={960} y={160} o={ramp(t, con, 0.5)}><Glow color={DGOLD} size={40} serif>each picked out by contrast</Glow></At>
    </AbsoluteFill>
  );
};

const TogetherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const at = c("arise together with the picking", 0.4);
  const p = ramp(t, at, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={430}><Mountain id="t1" w={640} draw={p} fill={p} snow={p} /></At>
      <Svg><DrawPath d="M600 430 C600 160 1320 160 1320 430 C1320 700 600 700 600 430 Z" p={p} color={DGOLD} width={5} len={2400} /></Svg>
      <At x={420} y={300} o={ramp(t, at + 0.2, 0.5)}><Chip color={INDIGO} size={32}>mountain</Chip></At>
      <At x={1500} y={300} o={ramp(t, at + 0.2, 0.5)}><Chip color={DGOLD} size={32}>boundary</Chip></At>
      <At x={1500} y={560} o={ramp(t, at + 0.2, 0.5)}><Chip color={TEAL} size={32}>picking out</Chip></At>
      <Ring x={960} y={430} p={ramp(t, c("One event, not two"), 1.4)} r0={200} r1={460} color={AMBER} />
      <At x={960} y={790} o={ramp(t, c("One event, not two"), 0.5)}><Glow color={AMBER} size={50} serif>one event, not two</Glow></At>
    </AbsoluteFill>
  );
};

const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const r = c("A rope is long");
  const nd = c("neither discovered nor invented");
  const Rope = ({ len, col, p }: { len: number; col: string; p: number }) => (
    <svg width={len + 20} height={40} style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${col})` }}>
      <line x1={10} y1={20} x2={10 + len * p} y2={20} stroke={col} strokeWidth={26} strokeLinecap="round" />
      {Array.from({ length: Math.floor((len * p) / 22) }).map((_, i) => (
        <line key={i} x1={14 + i * 22} y1={9} x2={26 + i * 22} y2={31} stroke="#1b1440" strokeWidth={4} opacity={0.5} />
      ))}
    </svg>
  );
  const cmp = ramp(t, r + 1.0, 0.8);
  return (
    <AbsoluteFill>
      <At x={760} y={230} o={ramp(t, r, 0.3)}><Rope len={640} col={AMBER} p={ramp(t, r, 0.8)} /></At>
      <At x={560} y={330} o={cmp}><Rope len={240} col={DIM} p={cmp} /></At>
      <At x={1260} y={230} o={cmp}><Glow color={AMBER} size={40} serif>long</Glow></At>
      <At x={1260} y={330} o={cmp}><Glow color={DIM} size={30}>only with the comparison</Glow></At>
      <div style={{ position: "absolute", top: 410, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="neither discovered nor invented" at={nd} size={72} />
      </div>
      <At x={560} y={600} s={pop(t, fps, c("waiting for a surveyor"))}><Telescope /></At>
      <Struck x={560} y={730} at={c("waiting for a surveyor") + 0.2} strikeAt={c("waiting for a surveyor") + 1.2} color={ICE}>lying there complete</Struck>
      <At x={1360} y={600} s={pop(t, fps, c("conjured by a name"))}><Glow color={VIOLET} size={60} serif>"mountain!"</Glow></At>
      <Struck x={1360} y={730} at={c("conjured by a name") + 0.2} strikeAt={c("conjured by a name") + 1.0} color={VIOLET}>conjured by a name</Struck>
    </AbsoluteFill>
  );
};

const RoadScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const map = c("mapped and climbed"), road = c("A road cut into"), rem = c("What is removed");
  return (
    <AbsoluteFill>
      <At x={960} y={160} o={ramp(t, c("None of this takes anything", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>nothing taken from the mountain</Glow></At>
      <At x={960} y={470} s={pop(t, fps, c("None of this takes anything") + 0.2)}><Mountain id="r1" w={720} /></At>
      <Svg>
        {[0, 1, 2, 3].map((k) => (
          <ellipse key={k} cx={960} cy={340 + k * 70} rx={60 + k * 80} ry={22 + k * 16} fill="none" stroke={ICE} strokeWidth={2}
            strokeDasharray="10 8" opacity={ramp(t, map + k * 0.2, 0.5) * 0.8} />
        ))}
        <DrawPath d="M760 700 L900 660 L800 600 L960 560 L870 500 L1010 450 L940 400" p={ramp(t, road, 2.0)} color={AMBER} width={9} len={1300} />
        <DrawPath d="M1060 430 L1000 360 L960 300 L960 230" p={ramp(t, map + 0.6, 1.4)} color={ROSE} width={3} len={600} />
      </Svg>
      <At x={985} y={205} s={pop(t, fps, map + 1.8)}>
        <svg width={60} height={70} viewBox="0 0 60 70"><line x1={10} y1={5} x2={10} y2={68} stroke={CHALK} strokeWidth={4} /><path d="M10 6 L55 18 L10 32 Z" fill={ROSE} /></svg>
      </At>
      <At x={420} y={420} o={ramp(t, map, 0.5)}><Glow color={ICE} size={34}>mapped · climbed</Glow></At>
      <At x={1500} y={560} o={ramp(t, road + 0.6, 0.5)}><Glow color={AMBER} size={34}>a road that holds</Glow></At>
      <Struck x={960} y={800} at={rem} strikeAt={rem + 1.6} color={WARM}>backed by a mountain from its own side</Struck>
    </AbsoluteFill>
  );
};

const BodiesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hu = c("A human sees a bounded"), bat = c("A bat may meet"), bee = c("A bee may barely");
  const panel = (x: number, at: number, col: string, children: React.ReactNode, label: string) => (
    <>
      <At x={x} y={440} s={pop(t, fps, at)}>
        <div style={{ width: 500, height: 400, borderRadius: 24, border: `3px solid ${col}`, background: `${col}14`, boxShadow: `0 0 30px ${col}44`,
          position: "relative", overflow: "hidden" }}>{children}</div>
      </At>
      <At x={x} y={690} o={ramp(t, at + 0.3, 0.5)}><Glow color={col} size={32}>{label}</Glow></At>
    </>
  );
  const echo = (i: number) => ((t - bat) * 0.5 + i / 4) % 1;
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("why does it feel so objective", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>why does it feel so objective?</Glow></At>
      <At x={960} y={200} o={ramp(t, c("Ask a human, a bat"), 0.5)}><Glow color={DIM} size={30}>is there a mountain there?</Glow></At>
      {panel(380, hu, DGOLD, (
        <>
          <div style={{ position: "absolute", left: 50, top: 90 }}><Mountain id="b1" w={400} edge={AMBER} /></div>
          <div style={{ position: "absolute", left: 30, top: 20 }}><Eye open={1} color={DGOLD} /></div>
        </>
      ), "a bounded shape")}
      {panel(960, bat, VIOLET, (
        <>
          <div style={{ position: "absolute", left: 50, top: 100, width: 420, height: 280, borderRadius: "50%",
            background: `radial-gradient(ellipse at 60% 70%, ${VIOLET}88, ${VIOLET}22 55%, transparent 80%)`, filter: "blur(8px)" }} />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ position: "absolute", left: 80 - 200 * echo(i), top: 200 - 200 * echo(i), width: 400 * echo(i), height: 400 * echo(i),
              borderRadius: "50%", border: `3px solid ${VIOLET}`, opacity: (1 - echo(i)) * ramp(t, bat, 0.5) }} />
          ))}
          <div style={{ position: "absolute", left: 30, top: 170 }}><Bat /></div>
        </>
      ), "returning echoes, no edge")}
      {panel(1540, bee, AMBER, (
        <>
          <div style={{ position: "absolute", left: 50, top: 90 }}><Mountain id="b3" w={400} o={0.08} /></div>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 60 + rand(i + 20) * 360, top: 230 + rand(i + 30) * 130 }}><Orb size={30 + (i % 3) * 10} color={[VIOLET, ROSE, AMBER][i % 3]} /></div>
          ))}
          <div style={{ position: "absolute", left: 200 + 60 * Math.sin(t * 1.3), top: 60 + 20 * Math.cos(t * 2) }}><Bee /></div>
        </>
      ), "barely a mountain at all")}
      <Struck x={700} y={800} at={c("Not three views")} strikeAt={c("Not three views") + 0.9} color={DIM}>three views of one mountain</Struck>
      <At x={1300} y={800} o={ramp(t, c("Three worlds, arising together"), 0.5)}><Chip color={DGOLD} size={36}>three worlds · three bodies</Chip></At>
    </AbsoluteFill>
  );
};

const AgreeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ag = c("Humans agree on it", 0.4), ins = c("Like instruments with the same");
  const sw = ramp(t, ins - 0.2, 0.6);
  const needle = 1.1 + 0.08 * Math.sin(t * 1.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - sw }}>
        <At x={1300} y={420} s={pop(t, fps, ag)}><Mountain id="a1" w={520} /></At>
        {Array.from({ length: 5 }).map((_, i) => {
          const x = 260 + i * 130, y = 420 + (i % 2) * 140;
          return (
            <React.Fragment key={i}>
              <At x={x} y={y} s={pop(t, fps, ag + i * 0.15)}><Walker size={0.5} color={[DGOLD, TEAL, ROSE, ICE, VIOLET][i]} /></At>
              <Flow x1={x + 30} y1={y - 40} x2={1250} y2={330} color={[DGOLD, TEAL, ROSE, ICE, VIOLET][i]} p={ramp(t, ag + 0.5 + i * 0.15, 0.6)} pulses={false} />
            </React.Fragment>
          );
        })}
        <At x={960} y={760} o={ramp(t, ag + 0.6, 0.5)}><Glow color={CHALK} size={38}>similar bodies · matching answers</Glow></At>
      </AbsoluteFill>
      {[0, 1, 2].map((i) => (
        <At key={i} x={520 + i * 440} y={380} s={pop(t, fps, ins + i * 0.3)} o={sw}><Gauge a={needle + 0.02 * i} color={[DGOLD, INDIGO, TEAL][i]} /></At>
      ))}
      <At x={960} y={180} o={ramp(t, ins + 0.4, 0.5)}><Glow color={DGOLD} size={40} serif>same calibration · matching readings</Glow></At>
      <At x={960} y={590} o={ramp(t, c("the instruments are alike"), 0.5)}><Chip color={TEAL} size={36}>the instruments are alike</Chip></At>
      <Struck x={960} y={720} at={c("not a separate thing")} strikeAt={c("not a separate thing") + 0.9} color={DIM}>a separate thing behind the readings</Struck>
    </AbsoluteFill>
  );
};

const VoidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("a blank void underneath"), ad = c("Appearing and depending"), hole = c("leaves no hole");
  const merge = ramp(t, ad + 1.0, 1.0);
  return (
    <AbsoluteFill>
      <At x={560} y={330} s={pop(t, fps, v - 0.3)}><Mountain id="v1" w={480} /></At>
      <At x={560} y={660} s={pop(t, fps, v + 0.2)} o={1 - ramp(t, hole + 0.8, 1.0)}>
        <div style={{ width: 300, height: 150, borderRadius: "50%", background: "radial-gradient(ellipse, #000 55%, #1b1730)", boxShadow: "0 0 50px #000" }} />
      </At>
      <At x={560} y={790} o={between(t, v + 0.4, hole + 0.8)}><Glow color={DIM} size={30}>a blank void beneath?</Glow></At>
      <Crossed x={560} y={660} at={v + 1.6} size={80} />
      <At x={1380 - 140 * merge} y={330} s={pop(t, fps, ad)} o={1 - merge}><Chip color={DGOLD} size={36}>appearing</Chip></At>
      <At x={1380 + 140 * merge} y={460} s={pop(t, fps, ad + 0.4)} o={1 - merge}><Chip color={INDIGO} size={36}>depending on conditions</Chip></At>
      <At x={1380} y={400} o={merge}><Chip color={AMBER} size={44}>one event</Chip></At>
      <At x={1380} y={620} o={ramp(t, hole, 0.5)}><Glow color={ICE} size={44} serif>no hole left behind</Glow></At>
      <At x={1380} y={740} o={ramp(t, c("never doing any work"), 0.5)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={30}>a hidden substance</Chip><Strike at={c("never doing any work") + 0.8} /></div>
      </At>
    </AbsoluteFill>
  );
};

const LineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fl = c("One fine line", 0.3), st = c("still there when you look away"), conv = c("a working conventional fact");
  const sec = c("a second claim slips in"), own = c("exists on its own"), earn = c("never earned"), sm = c("It is smuggled in");
  const blink = 1 - between(t, st + 0.6, st + 1.6, 0.3);
  const slide = ramp(t, sec + 0.2, 1.4);
  return (
    <AbsoluteFill>
      <Svg><DrawPath d="M960 120 L960 820" p={ramp(t, fl, 1.2)} color={AMBER} width={3} len={720} /></Svg>
      <At x={960} y={90} o={ramp(t, fl, 0.5)}><Glow color={AMBER} size={34}>one fine line</Glow></At>
      <At x={500} y={360} s={pop(t, fps, st - 0.3)}><Mountain id="l1" w={440} o={0.35 + 0.65 * blink} /></At>
      <At x={500} y={560} s={pop(t, fps, st)}><Eye open={blink} color={TEAL} /></At>
      <At x={500} y={660} o={ramp(t, st + 0.4, 0.5)}><Glow color={CHALK} size={30}>look away · look back · still there</Glow></At>
      <At x={500} y={770} s={pop(t, fps, conv)}><Chip color={GREEN} size={36}>true · conventional</Chip></At>
      <At x={960 + 470 * slide} y={380} o={ramp(t, sec, 0.5)}>
        <div style={{ position: "relative" }}><Chip color={WARM} size={38}>exists on its own</Chip><Strike at={sm + 0.9} /></div>
      </At>
      <At x={1430} y={470} o={ramp(t, own + 0.3, 0.5)}><Glow color={DIM} size={28}>whether or not anything meets it</Glow></At>
      <At x={1430} y={600} o={ramp(t, earn, 0.5)}><Glow color={WARM} size={40} serif>never earned</Glow></At>
      <At x={1430} y={720} o={ramp(t, sm, 0.5)}><Glow color={DIM} size={32}>smuggled in</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const h = c("The mountain holds the road", 0.4);
  const dep = c("dependable was never independent");
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, h)}>
        <div style={{ position: "relative" }}>
          <Mountain id="c1" w={760} />
        </div>
      </At>
      <Svg><DrawPath d="M770 660 L910 620 L810 560 L970 520 L880 460 L1020 410" p={ramp(t, h + 0.4, 1.6)} color={AMBER} width={9} len={1100} /></Svg>
      <At x={960} y={420} o={ramp(t, h + 1.0, 2.0) * 0.6}><div style={{ width: 1000, height: 600, borderRadius: "50%", background: `radial-gradient(ellipse, ${DGOLD}33, transparent 65%)` }} /></At>
      <At x={560} y={760} o={ramp(t, c("Dependable, completely"), 0.5)}><Chip color={GREEN} size={40}>dependable</Chip></At>
      <At x={1360} y={760} o={ramp(t, dep + 0.4, 0.5)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={40}>independent</Chip><Strike at={dep + 1.3} /></div>
      </At>
      <At x={960} y={760} o={ramp(t, dep + 0.8, 0.5)}><Glow color={CHALK} size={46} serif>never the same</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["rise", 0], ["search", c("Is it the rock", 0.6)], ["field", c("A quieter story tempts", 0.6)], ["together", c("arise together with the picking", 0.6)],
    ["road", c("None of this takes anything", 0.6)], ["bodies", c("why does it feel so objective", 0.6)], ["search", c("a blank void underneath", 0.6)],
    ["line", c("One fine line", 0.6)], ["rise", c("The mountain holds the road", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Try to point to the mountain", 0.9)], <SolidScene />],
    [S("Try to point to the mountain", "Is it the rock"), <PointScene />],
    [S("Is it the rock", "Walk up from the valley floor"), <PartsScene />],
    [S("Walk up from the valley floor", "the old search for a chariot"), <WalkScene />],
    [S("the old search for a chariot", "A quieter story tempts"), <SearchScene />],
    [S("A quieter story tempts", "arise together with the picking"), <FieldScene />],
    [S("arise together with the picking", "A rope is long"), <TogetherScene />],
    [S("A rope is long", "None of this takes anything"), <RopeScene />],
    [S("None of this takes anything", "why does it feel so objective"), <RoadScene />],
    [S("why does it feel so objective", "Humans agree on it"), <BodiesScene />],
    [S("Humans agree on it", "a blank void underneath"), <AgreeScene />],
    [S("a blank void underneath", "One fine line"), <VoidScene />],
    [S("One fine line", "The mountain holds the road"), <LineScene />],
    [S("The mountain holds the road", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
