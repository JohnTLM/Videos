// Chapter 14: The Role of Function in Conventional Reality. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Hold a key", "Its power to open", "cut into its teeth",
  "only this lock", "while the metal holds", "when a hand turns it", "the door is not jammed", "Drifting in deep space",
  "the wrong lock", "it opens nothing",
  "not stored in the key", "Key, lock, hand and opening", "designated together", "The power to open is not found",
  "Nor is there a hidden process", "doing the work",
  "Two opposite conclusions", "The substantialist says", "solid essence", "The sceptic finds", "powerless illusions",
  "Both share one premise", "function needs an essence", "whether the essence is there",
  "Drop the premise", "A bridge carries", "A medicine eases", "Neither does so", "Each works as designated", "works reliably",
  "a doubt lingers", "merely conventional", "not quite real", "as a label", "changing nothing",
  "look at what convention does", "printed paper", "designated as money", "a house changes hands", "A disc of red light",
  "a heavy truck", "a bus", "a child on a bicycle", "without touching any", "Two words spoken", "reorder two lives",
  "None of these powers", "Take the designation away", "the paper is scrap", "a coloured lamp", "the words a noise",
  "nothing in the world is more effective",
  "not a special class", "The fire that boils the kettle", "nothing found from its own side", "The social cases simply",
  "Convention does not work", "lacking an anchor", "An anchor would stop", "A coin whose value", "could buy nothing",
  "A red that was red", "signal nothing to a driver", "cannot respond, combine or change", "So it cannot do anything",
  "founder of the Middle Way", "gathered this into", "For whom emptiness is possible", "everything is possible",
  "Emptiness here means", "absence of a fixed essence", "It is not a void", "a hidden openness beneath",
  "Their working and their emptiness", "seen from two sides",
  "Think of a chair", "something to sink into", "To a child", "To a cat", "None of these is its true function",
  "hidden in the wood", "Each is real",
  "The chair still holds", "What drops away", "waiting inside it",
];

const M = {
  key: { a: "rgba(30,110,130,0.55)", b: "rgba(150,110,50,0.45)", c: "rgba(80,60,150,0.3)" },
  space: { a: "rgba(30,30,90,0.55)", b: "rgba(70,40,130,0.45)", c: "rgba(20,60,100,0.3)" },
  together: { a: "rgba(150,110,50,0.45)", b: "rgba(30,120,130,0.5)", c: "rgba(110,60,150,0.3)" },
  concl: { a: "rgba(100,60,170,0.5)", b: "rgba(140,70,90,0.4)", c: "rgba(60,60,120,0.3)" },
  works: { a: "rgba(40,130,90,0.5)", b: "rgba(30,110,140,0.45)", c: "rgba(150,120,50,0.3)" },
  doubt: { a: "rgba(80,80,110,0.45)", b: "rgba(100,70,130,0.35)", c: "rgba(60,60,80,0.3)" },
  conv: { a: "rgba(160,60,80,0.45)", b: "rgba(150,110,50,0.45)", c: "rgba(40,110,120,0.35)" },
  kettle: { a: "rgba(170,90,40,0.5)", b: "rgba(150,60,60,0.4)", c: "rgba(150,110,50,0.35)" },
  anchor: { a: "rgba(30,60,140,0.55)", b: "rgba(40,110,150,0.4)", c: "rgba(90,60,150,0.3)" },
  verse: { a: "rgba(150,110,50,0.5)", b: "rgba(110,60,170,0.45)", c: "rgba(30,110,130,0.35)" },
  chair: { a: "rgba(170,110,50,0.5)", b: "rgba(150,70,90,0.4)", c: "rgba(60,110,90,0.3)" },
};

// ---------------------------------------------------------------- small drawings
const KeyShape: React.FC<{ w?: number; teeth?: number; color?: string }> = ({ w = 360, teeth = 0, color = GOLD }) => (
  <svg width={w} height={w * 140 / 360} viewBox="0 0 360 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
    <defs><linearGradient id="keyg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFF0C0" /><stop offset="1" stopColor="#B88A3A" /></linearGradient></defs>
    <path d="M108 58 L330 58 L330 82 L320 82 L320 102 L300 102 L300 82 L285 82 L285 110 L265 110 L265 82 L250 82 L250 98 L232 98 L232 82 L108 82 Z"
      fill="url(#keyg)" stroke={color} strokeWidth={3} strokeLinejoin="round" />
    <circle cx={60} cy={70} r={50} fill="url(#keyg)" stroke={color} strokeWidth={3} />
    <circle cx={60} cy={70} r={18} fill="#1a1630" stroke={color} strokeWidth={3} />
    {teeth > 0 && <path d="M232 98 L250 98 L250 82 L265 82 L265 110 L285 110 L285 82 L300 82 L300 102 L320 102" fill="none" stroke="#FFF6D8"
      strokeWidth={5} strokeLinejoin="round" opacity={teeth} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />}
  </svg>
);

const LockPlate: React.FC<{ color?: string; odd?: boolean }> = ({ color = CHALK, odd }) => (
  <svg width={130} height={210} viewBox="0 0 130 210" style={{ filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <rect x={5} y={5} width={120} height={200} rx={24} fill="#ffffff14" stroke={color} strokeWidth={4} />
    {odd ? <path d="M50 80 L80 80 L80 130 L50 130 Z M58 90 L72 120" fill="#0b0b18" stroke={color} strokeWidth={3} />
      : <path d="M65 70 a18 18 0 1 1 0.1 0 Z M57 100 L73 100 L80 145 L50 145 Z" fill="#0b0b18" stroke={color} strokeWidth={3} />}
  </svg>
);

const Door: React.FC<{ open: number; children?: React.ReactNode }> = ({ open, children }) => (
  <div style={{ perspective: 1600 }}>
    <div style={{ width: 300, height: 520, position: "relative", transformOrigin: "left center", transform: `rotateY(${-open * 38}deg)`,
      borderRadius: 10, border: `4px solid ${CHALK}`, background: "linear-gradient(160deg, #3a2a5a, #241b3a)", boxShadow: `0 0 30px ${VIOLET}55` }}>
      {[30, 280].map((y) => <div key={y} style={{ position: "absolute", left: 30, top: y, width: 232, height: 200, border: `2px solid ${CHALK}55`, borderRadius: 6 }} />)}
      {children}
    </div>
  </div>
);

const Gear: React.FC<{ size: number; rot: number; color: string; teeth?: number }> = ({ size, rot, color, teeth = 12 }) => {
  const pts: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const a0 = (i / (teeth * 2)) * Math.PI * 2, a1 = ((i + 1) / (teeth * 2)) * Math.PI * 2, r = i % 2 ? 40 : 48;
    pts.push(`${r * Math.cos(a0)},${r * Math.sin(a0)}`, `${r * Math.cos(a1)},${r * Math.sin(a1)}`);
  }
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      <g transform={`rotate(${rot})`}>
        <polygon points={pts.join(" ")} fill={`${color}33`} stroke={color} strokeWidth={2.5} strokeLinejoin="round" />
        <circle r={14} fill="none" stroke={color} strokeWidth={2.5} />
        {[0, 60, 120].map((a) => <line key={a} x1={-30} y1={0} x2={30} y2={0} stroke={color} strokeWidth={2} transform={`rotate(${a})`} opacity={0.6} />)}
      </g>
    </svg>
  );
};

/** An isometric block; ghost = dashed and see-through. */
const Block: React.FC<{ size: number; color: string; ghost?: number; core?: number }> = ({ size, color, ghost = 0, core = 0 }) => {
  const s = 60;
  return (
    <svg width={size} height={size} viewBox="-75 -80 150 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
      <g stroke={color} strokeWidth={3} strokeLinejoin="round" strokeDasharray={ghost > 0.5 ? "8 7" : undefined}>
        <polygon points={`0,${-s} ${s},${-s / 2} 0,0 ${-s},${-s / 2}`} fill={color} fillOpacity={0.35 * (1 - ghost * 0.85)} />
        <polygon points={`${-s},${-s / 2} 0,0 0,${s} ${-s},${s / 2}`} fill={color} fillOpacity={0.2 * (1 - ghost * 0.85)} />
        <polygon points={`${s},${-s / 2} 0,0 0,${s} ${s},${s / 2}`} fill={color} fillOpacity={0.12 * (1 - ghost * 0.85)} />
      </g>
      {core > 0 && <circle cx={0} cy={0} r={18 * core} fill="#FFF3C8" style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />}
    </svg>
  );
};

const XMark: React.FC<{ x: number; y: number; r: number; at: number; color?: string }> = ({ x, y, r, at, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

const House: React.FC<{ glow: number }> = ({ glow }) => (
  <svg width={170} height={170} viewBox="0 0 190 190" style={{ filter: `drop-shadow(0 0 10px ${GOLD}88)` }}>
    <path d="M20 90 L95 25 L170 90" fill="none" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <rect x={35} y={88} width={120} height={95} fill="#ffffff0d" stroke={CHALK} strokeWidth={4} />
    <rect x={80} y={128} width={30} height={55} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
    <rect x={50} y={105} width={22} height={22} fill={GOLD} opacity={0.35 + 0.5 * glow} />
    <rect x={118} y={105} width={22} height={22} fill={GOLD} opacity={0.35 + 0.5 * glow} />
  </svg>
);

const Banknote: React.FC<{ scrap: number; sheen: number }> = ({ scrap, sheen }) => {
  const { t } = useT();
  const col = scrap > 0.5 ? "#8a8a80" : GREEN;
  return (
    <svg width={300} height={160} viewBox="0 0 300 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${12 * (1 - scrap)}px ${GREEN})` }}>
      <g transform={`rotate(${scrap * 14} 150 80) scale(${1 - scrap * 0.25})`} style={{ transformOrigin: "150px 80px" }}>
        <path d={`M10 ${10 + scrap * 18} L290 ${10 - scrap * 10} L${290 - scrap * 30} 150 L${10 + scrap * 20} ${150 - scrap * 14} Z`}
          fill={`${col}33`} stroke={col} strokeWidth={3} strokeLinejoin="round" />
        <ellipse cx={150} cy={80} rx={42} ry={48} fill="none" stroke={col} strokeWidth={3} opacity={1 - scrap * 0.6} />
        <rect x={30} y={30} width={40} height={20} rx={4} fill={`${col}55`} opacity={1 - scrap} />
        <rect x={230} y={110} width={40} height={20} rx={4} fill={`${col}55`} opacity={1 - scrap} />
        {scrap > 0.05 && [[60, 40, 130, 120], [190, 20, 230, 140], [20, 90, 280, 70]].map(([a, b, c2, d], i) =>
          <line key={i} x1={a} y1={b} x2={c2} y2={d} stroke="#555" strokeWidth={2} opacity={scrap} />)}
      </g>
      <clipPath id="bn14"><rect x={10} y={10} width={280} height={140} /></clipPath>
      <g clipPath="url(#bn14)"><rect x={-200 + ((t * 220) % 700)} y={0} width={40} height={160} fill="#ffffff" opacity={0.25 * sheen * (1 - scrap)} transform="skewX(-20)" /></g>
    </svg>
  );
};

const TrafficLight: React.FC<{ red: number; dull: number }> = ({ red, dull }) => {
  const r = dull > 0.5 ? "#7a4040" : "#FF3B3B";
  return (
    <svg width={110} height={260} viewBox="0 0 110 260" style={{ overflow: "visible" }}>
      <rect x={10} y={10} width={90} height={240} rx={22} fill="#141420" stroke={CHALK} strokeWidth={3} />
      <circle cx={55} cy={60} r={30} fill={r} opacity={0.25 + 0.75 * red} style={{ filter: red > 0.2 && dull < 0.5 ? `drop-shadow(0 0 ${24 * red}px #FF3B3B)` : undefined }} />
      <circle cx={55} cy={130} r={30} fill="#5a4a1a" opacity={0.5} />
      <circle cx={55} cy={200} r={30} fill="#1a4a2a" opacity={0.5} />
    </svg>
  );
};

const Truck: React.FC<{ color: string }> = ({ color }) => (
  <svg width={150} height={80} viewBox="0 0 150 80" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <rect x={40} y={8} width={105} height={50} rx={4} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <path d="M5 58 L5 30 L15 18 L38 18 L38 58 Z" fill={`${color}33`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    {[22, 80, 125].map((x) => <circle key={x} cx={x} cy={64} r={11} fill="#111" stroke={color} strokeWidth={3} />)}
  </svg>
);
const Bus: React.FC<{ color: string }> = ({ color }) => (
  <svg width={150} height={80} viewBox="0 0 150 80" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <rect x={5} y={8} width={140} height={52} rx={10} fill={`${color}33`} stroke={color} strokeWidth={3} />
    {[18, 46, 74, 102].map((x) => <rect key={x} x={x} y={18} width={20} height={16} rx={3} fill={`${color}66`} />)}
    {[30, 118].map((x) => <circle key={x} cx={x} cy={64} r={11} fill="#111" stroke={color} strokeWidth={3} />)}
  </svg>
);
const Bike: React.FC<{ color: string }> = ({ color }) => (
  <svg width={110} height={90} viewBox="0 0 110 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={22} cy={66} r={18} /><circle cx={88} cy={66} r={18} />
      <path d="M22 66 L45 66 L70 40 L40 40 L45 66 M70 40 L88 66 M40 40 L36 30 M66 30 L74 30 L70 40" />
      <circle cx={52} cy={12} r={8} /><path d="M52 20 L50 40 M50 26 L66 32" />
    </g>
  </svg>
);

const Rings: React.FC<{ p: number }> = ({ p }) => (
  <svg width={220} height={140} viewBox="0 0 220 140" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
    <circle cx={85} cy={70} r={50} fill="none" stroke={GOLD} strokeWidth={10} />
    <circle cx={85 + 50 * p} cy={70} r={50} fill="none" stroke="#FFE6A8" strokeWidth={10} opacity={p} />
  </svg>
);

const Kettle: React.FC = () => (
  <svg width={300} height={260} viewBox="0 0 300 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ICE}88)` }}>
    <path d="M70 230 C 40 230, 40 120, 90 90 L210 90 C 260 120, 260 230, 230 230 Z" fill="#ffffff14" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <path d="M230 120 C 270 110, 285 80, 295 60" fill="none" stroke={CHALK} strokeWidth={8} strokeLinecap="round" />
    <path d="M100 90 C 100 40, 200 40, 200 90" fill="none" stroke={CHALK} strokeWidth={6} />
    <rect x={130} y={72} width={40} height={18} rx={6} fill={CHALK} />
  </svg>
);

const Flame: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (5 + k) + k * 1.7) * 9;
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  return (
    <svg width={260 * size} height={340 * size} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 24px ${WARM})` }}>
      <defs><radialGradient id="fl14" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl14)" />
    </svg>
  );
};

const Anchor: React.FC<{ color: string }> = ({ color }) => (
  <svg width={180} height={220} viewBox="0 0 180 220" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={9} strokeLinecap="round">
      <circle cx={90} cy={28} r={18} /><line x1={90} y1={46} x2={90} y2={200} /><line x1={50} y1={80} x2={130} y2={80} />
      <path d="M18 140 C 30 190, 70 205, 90 205 C 110 205, 150 190, 162 140" />
    </g>
  </svg>
);

const Coin: React.FC<{ spin: number }> = ({ spin }) => (
  <div style={{ width: 160, height: 160, borderRadius: "50%", transform: `rotateY(${spin}deg)`,
    background: "radial-gradient(circle at 35% 30%, #FFF4C8, #E4C27A 50%, #9a7a30)", border: `4px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}88`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 70, color: "#6a4f1a" }}>¤</div>
);

const Eye: React.FC<{ color: string }> = ({ color }) => (
  <svg width={150} height={90} viewBox="0 0 150 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M5 45 Q75 -15 145 45 Q75 105 5 45 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={75} cy={45} r={18} fill={color} />
  </svg>
);

const Car: React.FC<{ color: string }> = ({ color }) => (
  <svg width={170} height={78} viewBox="0 0 220 100" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M10 70 L20 45 Q30 40 50 40 L70 18 Q80 12 100 12 L140 12 Q155 12 165 25 L180 42 Q205 45 210 60 L210 72 Z" fill={`${color}33`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    <circle cx={55} cy={74} r={15} fill="#111" stroke={color} strokeWidth={3} /><circle cx={165} cy={74} r={15} fill="#111" stroke={color} strokeWidth={3} />
  </svg>
);

const Chair: React.FC<{ sink: number; glow: number }> = ({ sink, glow }) => (
  <svg width={420} height={460} viewBox="0 0 420 460" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${12 + glow * 26}px ${GOLD}${glow > 0.3 ? "cc" : "66"})` }}>
    <defs><linearGradient id="wood14" x1="0" x2="1"><stop offset="0" stopColor="#7a5a35" /><stop offset="0.5" stopColor="#c8955a" /><stop offset="1" stopColor="#7a5a35" /></linearGradient></defs>
    <rect x={90} y={20} width={24} height={420} rx={8} fill="url(#wood14)" stroke={GOLD} strokeWidth={2} />
    <rect x={306} y={20} width={24} height={420} rx={8} fill="url(#wood14)" stroke={GOLD} strokeWidth={2} />
    {[50, 110, 170].map((y) => <rect key={y} x={114} y={y} width={192} height={18} rx={6} fill="url(#wood14)" stroke={GOLD} strokeWidth={2} />)}
    <path d={`M70 250 L350 250 L350 ${290} Q210 ${290 + sink * 26} 70 290 Z`} fill="#c8607a" stroke={ROSE} strokeWidth={3} />
    <rect x={70} y={290} width={280} height={24} rx={6} fill="url(#wood14)" stroke={GOLD} strokeWidth={2} />
  </svg>
);

const Cat: React.FC = () => (
  <svg width={170} height={120} viewBox="0 0 170 120" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <path d="M20 110 C 20 70, 60 55, 100 60 L110 35 L120 55 L132 35 L138 62 C 158 72, 158 108, 140 110 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={3.5} strokeLinejoin="round" />
    <path d="M20 108 C 0 100, 0 80, 14 74" fill="none" stroke={GOLD} strokeWidth={3.5} strokeLinecap="round" />
    <path d="M118 80 q 5 -4 10 0 M134 80 q 4 -4 8 0" fill="none" stroke={GOLD} strokeWidth={2.5} />
  </svg>
);

const Flag: React.FC = () => {
  const { t } = useT();
  const w = Math.sin(t * 4) * 6;
  return (
    <svg width={120} height={130} viewBox="0 0 120 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ROSE})` }}>
      <line x1={10} y1={5} x2={10} y2={125} stroke={CHALK} strokeWidth={5} strokeLinecap="round" />
      <path d={`M12 8 Q 55 ${8 + w} 105 22 Q 55 ${36 - w} 12 48 Z`} fill={ROSE} />
    </svg>
  );
};

// ---------------------------------------------------------------- 1-3. the key
const KeyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Hold a key");
  const lockAt = c("only this lock");
  const space = c("Drifting in deep space");
  const partC = c("not stored in the key", 1.1);
  const handAt = c("when a hand turns it");
  // part A: key goes to the lock on a door
  const slide = ramp(t, lockAt + 0.3, 1.2);
  const turn = ramp(t, handAt + 0.6, 0.6);
  const open = ramp(t, c("the door is not jammed") + 0.4, 1.2);
  const kx = 960 + 370 * slide, ky = 440;
  const conds = [["only this lock", "this lock", TEAL], ["while the metal holds", "metal holds", ICE], ["when a hand turns it", "a hand turns", ROSE],
    ["the door is not jammed", "door not jammed", VIOLET]] as const;
  // part B: deep space
  const wrongAt = c("the wrong lock");
  const toWrong = ramp(t, wrongAt + 0.3, 1.0), bounce = ramp(t, wrongAt + 1.3, 0.6);
  // part C: designated together
  const togAt = c("Key, lock, hand and opening");
  const move = ramp(t, togAt, 0.9);
  const nodes = [[560, 300], [1360, 300], [1360, 640], [560, 640]];
  const desAt = c("designated together");
  const procAt = c("Nor is there a hidden process");
  const procOut = ramp(t, c("doing the work") + 1.2, 0.8);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={space - 0.6}>
        <At x={1380} y={430} s={pop(t, fps, lockAt, 13)}>
          <Door open={open}><div style={{ position: "absolute", left: 160, top: 150 }}><LockPlate color={TEAL} /></div></Door>
        </At>
        <At x={kx} y={ky}
          style={{ transform: `translate(-50%,-50%) scale(${pop(t, fps, t0, 14) * (1 - 0.3 * slide)}) scaleY(${1 - 0.7 * turn})` }}>
          <KeyShape teeth={between(t, c("cut into its teeth"), lockAt)} />
        </At>
        <At x={960} y={230} o={between(t, c("Its power to open"), lockAt - 0.3)}><Glow color={GOLD} size={48} serif>power to open?</Glow></At>
        <Ring x={1080} y={470} p={ramp(t, c("cut into its teeth"), 1.2)} r0={30} r1={140} color={GOLD} />
        <At x={kx - 84} y={300} s={pop(t, fps, handAt)} o={ramp(t, handAt, 0.3)} r={-20 + turn * 60}><Hand size={130} /></At>
        <Ring x={1340} y={430} p={ramp(t, c("while the metal holds"), 1.0)} r0={40} r1={200} color={ICE} />
        {conds.map(([ph, lab, col], i) => (
          <At key={i} x={330 + i * 420} y={800} s={pop(t, fps, c(ph, 0.1))}><Chip color={col} size={32}>{lab}</Chip></At>
        ))}
      </Scene>
      <Scene from={space - 0.4} to={partC}>
        {Array.from({ length: 70 }).map((_, i) => {
          const s = 2 + rand(i + 3) * 5;
          return <div key={i} style={{ position: "absolute", left: rand(i) * 1920, top: rand(i + 50) * 840, width: s, height: s, borderRadius: "50%", background: CHALK,
            opacity: (0.3 + 0.6 * Math.abs(Math.sin(t * (1 + rand(i + 9) * 2) + i))) * ramp(t, space + rand(i + 4) * 1.2, 0.5) }} />;
        })}
        <At x={600 + 450 * toWrong - 120 * bounce} y={430 + Math.sin(t * 0.8) * 30 * (1 - toWrong)} s={pop(t, fps, space)} r={(t - space) * 16 * (1 - toWrong)}>
          <KeyShape w={300} />
        </At>
        <At x={1380} y={430} s={pop(t, fps, wrongAt, 12)}><LockPlate color={WARM} odd /></At>
        <XMark x={1380} y={430} r={70} at={wrongAt + 1.3} />
        <At x={960} y={760} o={ramp(t, c("it opens nothing"), 0.5)}><Glow color={WARM} size={56} serif>opens nothing</Glow></At>
      </Scene>
      <Scene from={partC - 0.3} to={1e9}>
        {/* the opening is not stored in the key */}
        <At x={960 + (nodes[0][0] - 960) * move} y={440 + (nodes[0][1] - 440) * move} s={1 - 0.5 * move}><KeyShape w={360} /></At>
        <At x={1050} y={460} o={between(t, partC + 0.3, togAt - 0.2, 0.4)}><Orb size={80} color={GOLD} core={1} /></At>
        <At x={1050} y={330} o={between(t, partC + 0.3, togAt - 0.2, 0.4)}><Glow color={GOLD} size={38}>opening stored?</Glow></At>
        <AbsoluteFill style={{ opacity: 1 - move }}><XMark x={1050} y={460} r={60} at={c("not stored in the key") + 0.6} /></AbsoluteFill>
        {/* the other three */}
        <At x={nodes[1][0]} y={nodes[1][1]} s={pop(t, fps, togAt + 0.3) * 0.7}><LockPlate color={TEAL} /></At>
        <At x={nodes[2][0]} y={nodes[2][1]} s={pop(t, fps, togAt + 0.6) * 0.55}><Door open={0.7} /></At>
        <At x={nodes[3][0]} y={nodes[3][1]} s={pop(t, fps, togAt + 0.45)}><Hand size={140} /></At>
        {[["key", 0], ["lock", 1], ["opening", 2], ["hand", 3]].map(([lab, i]) => (
          <At key={lab as string} x={nodes[i as number][0] + (i === 0 || i === 3 ? -230 : 230)} y={nodes[i as number][1]} o={ramp(t, togAt + 0.3 + (i as number) * 0.15, 0.5)}>
            <Glow color={CHALK} size={34}>{lab as string}</Glow>
          </At>
        ))}
        {[[0, 1], [1, 2], [2, 3], [3, 0]].map(([a, b], k) => {
          const [x1, y1] = nodes[a], [x2, y2] = nodes[b];
          const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), m = 120;
          return <Flow key={k} x1={x1 + dx * m / L} y1={y1 + dy * m / L} x2={x2 - dx * m / L} y2={y2 - dy * m / L} color={GOLD} p={ramp(t, desAt, 0.8)} />;
        })}
        {nodes.map(([x, y], i) => <Ring key={i} x={x} y={y} p={ramp(t, desAt + 0.2, 1.2)} r0={90} r1={200} color={GOLD} />)}
        <At x={960} y={80} o={ramp(t, desAt, 0.4)}><Reveal text="designated together" at={desAt} size={70} /></At>
        <At x={960} y={470} o={between(t, c("The power to open is not found"), procAt - 0.3, 0.5)}>
          <div style={{ width: 170, height: 170, borderRadius: "50%", border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Glow color={DIM} size={30}>power?</Glow>
          </div>
        </At>
        <At x={960} y={470} o={ramp(t, procAt, 0.6) * (1 - procOut)} blur={procOut * 10}>
          <Gear size={180} rot={(t - procAt) * 40} color={VIOLET} />
        </At>
        <At x={960} y={590} o={ramp(t, procAt + 0.3, 0.5) * (1 - procOut)}><Glow color={VIOLET} size={30}>hidden process?</Glow></At>
        <AbsoluteFill style={{ opacity: 1 - procOut }}><XMark x={960} y={470} r={80} at={c("doing the work") + 0.3} /></AbsoluteFill>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4-5. two conclusions, then dropping the premise
const ConclScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("The substantialist says"), sce = c("The sceptic finds");
  const prem = c("Both share one premise");
  const drop = c("Drop the premise");
  const fall = ramp(t, drop + 0.2, 1.3);
  const q = c("whether the essence is there");
  const flick = 0.6 + 0.4 * Math.sin(t * 9);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - fall, transform: `translateY(${fall * 90}px)`, filter: fall > 0 ? `blur(${fall * 8}px)` : undefined }}>
        <At x={620} y={210} s={pop(t, fps, sub)}><Chip color={GOLD}>substantialist</Chip></At>
        <At x={620} y={460} s={pop(t, fps, sub + 0.3)}><Block size={300} color={GOLD} core={ramp(t, c("solid essence"), 0.6)} /></At>
        <At x={620} y={640} o={ramp(t, c("solid essence"), 0.5)}><Glow color={GOLD} size={38}>solid essence</Glow></At>
        <At x={1300} y={210} s={pop(t, fps, sce)}><Chip color={VIOLET}>sceptic</Chip></At>
        <At x={1300} y={460} s={pop(t, fps, sce + 0.3)} o={ramp(t, c("powerless illusions"), 0.3) > 0 ? flick : 1}>
          <Block size={300} color={VIOLET} ghost={ramp(t, c("powerless illusions"), 0.6)} />
        </At>
        <At x={1300} y={640} o={ramp(t, c("powerless illusions"), 0.5)}><Glow color={VIOLET} size={38}>powerless illusion</Glow></At>
        <At x={960} y={710} o={ramp(t, prem, 0.6)}>
          <div style={{ width: 1100, height: 22, borderRadius: 8, background: `linear-gradient(90deg, ${WARM}66, ${WARM}, ${WARM}66)`, boxShadow: `0 0 26px ${WARM}` }} />
        </At>
        <At x={960} y={780} o={ramp(t, c("function needs an essence"), 0.6)}><Glow color={WARM} size={42} serif>function needs an essence</Glow></At>
        <At x={960} y={450} s={pop(t, fps, q)} o={ramp(t, q, 0.3)}><Glow color={CHALK} size={110} serif>?</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const WorksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const br = c("A bridge carries"), med = c("A medicine eases");
  const nei = c("Neither does so"), des = c("Each works as designated");
  const cool = ramp(t, med + 0.8, 2.5);
  const deck = 420;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Drop the premise") + 1.2, 0.6) * (1 - ramp(t, br - 0.3, 0.4))}><Glow color={CHALK} size={46} serif>both conclusions go</Glow></At>
      <AbsoluteFill style={{ opacity: ramp(t, br, 0.6) }}>
        <Svg>
          <DrawPath d="M240 600 Q 560 260 880 600" p={ramp(t, br, 1.0)} color={GREEN} width={7} len={900} />
          <DrawPath d={`M200 ${deck} L920 ${deck}`} p={ramp(t, br + 0.2, 0.8)} color={CHALK} width={8} len={760} />
          {[320, 440, 560, 680, 800].map((x, i) => {
            const yArc = 600 - (1 - Math.pow((x - 560) / 320, 2)) * 170;
            return <line key={i} x1={x} y1={deck} x2={x} y2={Math.min(600, yArc)} stroke={GREEN} strokeWidth={3} opacity={ramp(t, br + 0.6 + i * 0.1, 0.4)} />;
          })}
          <path d="M140 640 Q 560 690 980 640" fill="none" stroke={ICE} strokeWidth={3} strokeDasharray="14 12" opacity={0.6} strokeDashoffset={-t * 30} />
        </Svg>
        {[0, 1, 2].map((k) => {
          const u = ((t - br) * 0.18 + k / 3) % 1;
          return t > br + 0.8 ? <At key={k} x={200 + 720 * u} y={deck - 30} o={Math.sin(u * Math.PI)}><Car color={[TEAL, GOLD, ROSE][k]} /></At> : null;
        })}
      </AbsoluteFill>
      <At x={1260} y={430} s={pop(t, fps, med)}>
        <div style={{ width: 200, height: 80, borderRadius: 40, overflow: "hidden", display: "flex", transform: "rotate(-30deg)", boxShadow: `0 0 30px ${ROSE}88` }}>
          <div style={{ flex: 1, background: ROSE }} /><div style={{ flex: 1, background: CHALK }} />
        </div>
      </At>
      <At x={1560} y={430} s={pop(t, fps, med + 0.3)}>
        <svg width={80} height={360} viewBox="0 0 80 360" style={{ filter: `drop-shadow(0 0 8px ${WARM})` }}>
          <rect x={25} y={10} width={30} height={290} rx={15} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
          <circle cx={40} cy={315} r={34} fill={cool > 0.6 ? TEAL : WARM} />
          <rect x={33} y={40 + cool * 170} width={14} height={260 - cool * 170} fill={cool > 0.6 ? TEAL : WARM} />
        </svg>
      </At>
      <At x={1560} y={160} o={ramp(t, med + 0.3, 0.5)}><Glow color={cool > 0.6 ? TEAL : WARM} size={34}>{cool > 0.6 ? "eased" : "fever"}</Glow></At>
      {[[560, 230], [1400, 230]].map(([x, y], i) => (
        <At key={i} x={x} y={y} o={between(t, nei + i * 0.2, des, 0.4)}>
          <div style={{ position: "relative" }}><Chip color={GOLD} size={30}>essence?</Chip><Strike at={nei + 0.9} /></div>
        </At>
      ))}
      {[[560, 480, 900, 470], [1400, 450, 640, 470]].map(([x, y, w, h], i) => (
        <At key={i} x={x} y={y} o={ramp(t, des + i * 0.2, 0.6)}>
          <div style={{ width: w, height: h, borderRadius: 30, border: `3px dashed ${GOLD}`, boxShadow: `0 0 24px ${GOLD}44` }} />
        </At>
      ))}
      <At x={960} y={150} o={ramp(t, des, 0.6)}><Glow color={GOLD} size={40} serif>designated</Glow></At>
      <div style={{ position: "absolute", top: 750, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="works reliably" at={c("works reliably")} size={74} color={GREEN} top="#F0FFF2" />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. the doubt
const DoubtScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("a doubt lingers");
  const weak = ramp(t, c("not quite real"), 1.0);
  const lab = c("as a label");
  const stick = pop(t, fps, lab + 0.2, 9);
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, t0)} o={1 - 0.6 * weak + 0.15 * weak * Math.sin(t * 5)} blur={weak * 3}><Block size={340} color={TEAL} ghost={weak * 0.4} /></At>
      <At x={960} y={170} s={pop(t, fps, c("merely conventional"))}><Chip color={DIM} size={40}>merely conventional</Chip></At>
      <At x={960} y={660} o={ramp(t, c("not quite real"), 0.5)}><Glow color={DIM} size={46} serif>not quite real?</Glow></At>
      <At x={1010 + (1 - stick) * 500} y={470 - (1 - stick) * 200} r={-12 + (1 - stick) * 40} o={ramp(t, lab, 0.3)}>
        <div style={{ padding: "14px 28px", background: "#F4E08A", color: "#3a3010", fontFamily: SERIF, fontSize: 40, fontWeight: 600,
          borderRadius: 4, boxShadow: "0 6px 18px #0008" }}>label</div>
      </At>
      <At x={960} y={770} o={ramp(t, c("changing nothing"), 0.5)}><Glow color={WARM} size={40}>stuck on afterwards?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7-8. what convention does
const ConvScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const paper = c("printed paper"), money = c("designated as money"), house = c("a house changes hands");
  const red = c("A disc of red light"), words = c("Two words spoken"), lives = c("reorder two lives");
  const none = c("None of these powers");
  const scrap = ramp(t, c("the paper is scrap"), 0.8), dull = ramp(t, c("a coloured lamp"), 0.6), noise = ramp(t, c("the words a noise"), 0.6);
  const back = ramp(t, c("nothing in the world is more effective") + 0.3, 1.0);
  const sc = scrap * (1 - back), du = dull * (1 - back), no = noise * (1 - back);
  const veh = [["a heavy truck", <Truck color={ICE} />, 1140], ["a bus", <Bus color={TEAL} />, 960], ["a child on a bicycle", <Bike color={ROSE} />, 800]] as const;
  const bend = ramp(t, lives, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={70} o={ramp(t, c("look at what convention does"), 0.6) * (1 - ramp(t, none - 0.3, 0.4))}>
        <Glow color={CHALK} size={44} serif>what convention does</Glow>
      </At>
      {/* money */}
      <At x={380} y={300} s={pop(t, fps, paper)}><Banknote scrap={sc} sheen={ramp(t, money, 0.5)} /></At>
      <At x={380} y={420} o={ramp(t, money, 0.5) * (1 - sc)}><Chip color={GREEN} size={30}>money</Chip></At>
      <Flow x1={380} y1={460} x2={380} y2={540} color={GOLD} p={ramp(t, house, 0.5) * (1 - sc)} />
      <At x={380} y={640} s={pop(t, fps, house + 0.2)} o={1 - sc}><House glow={0.5 + 0.5 * Math.sin(t * 2)} /></At>
      {/* red light */}
      <At x={960} y={290} s={pop(t, fps, red)}><TrafficLight red={ramp(t, red + 0.3, 0.4)} dull={du} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={960} y={222} p={du > 0.5 ? 0 : ((t - red - 0.5 - k * 0.6) / 1.8) % 1} r0={40} r1={300} color="#FF5050" width={2} />)}
      <Svg style={{ opacity: ramp(t, c("a heavy truck"), 0.5) }}>
        <line x1={680} y1={680} x2={1240} y2={680} stroke={DIM} strokeWidth={3} />
        <line x1={720} y1={600} x2={720} y2={680} stroke={CHALK} strokeWidth={6} />
      </Svg>
      {veh.map(([ph, icon, x], i) => {
        const a = c(ph, 0.1);
        const arrive = ramp(t, a, 1.0);
        return <At key={i} x={x + (1 - arrive) * 220} y={640} o={ramp(t, a, 0.3) * (1 - du)}>{icon}</At>;
      })}
      <At x={960} y={760} o={ramp(t, c("without touching any"), 0.5) * (1 - dull)}><Glow color={ROSE} size={34}>no touch</Glow></At>
      {/* two words */}
      <At x={1550} y={260} s={pop(t, fps, words)}>
        <div style={{ position: "relative", padding: "14px 34px", borderRadius: 26, border: `2px solid ${CHALK}`, background: "rgba(255,255,255,0.08)",
          fontFamily: SERIF, fontSize: 56, color: CHALK, minWidth: 120 }}>
          <span style={{ opacity: 1 - no }}>I do</span>
          {no > 0 && <svg width={140} height={50} viewBox="0 0 140 50" style={{ position: "absolute", left: 30, top: 20, opacity: no }}>
            <path d={Array.from({ length: 28 }, (_, i) => `${i ? "L" : "M"}${i * 5} ${25 + Math.sin(i * 1.7 + t * 9) * 18 * rand(i)}`).join(" ")} fill="none" stroke={DIM} strokeWidth={3} />
          </svg>}
        </div>
      </At>
      <At x={1550} y={430} s={pop(t, fps, words + 0.4)} o={1 - no}><Rings p={ramp(t, words + 0.6, 0.8)} /></At>
      <Svg style={{ opacity: ramp(t, lives, 0.4) * (1 - no) }}>
        <DrawPath d={`M${1400} 800 C ${1400} ${720}, ${1400 + 130 * bend} 640, ${1400 + 140 * bend} 540`} p={ramp(t, lives, 1.0)} color={TEAL} width={5} len={400} />
        <DrawPath d={`M${1700} 800 C ${1700} ${720}, ${1700 - 130 * bend} 640, ${1700 - 140 * bend} 540`} p={ramp(t, lives, 1.0)} color={ROSE} width={5} len={400} />
      </Svg>
      {/* where is the power? */}
      {[[380, 300], [960, 290], [1550, 260]].map(([x, y], i) => (
        <At key={i} x={x} y={y - 150} o={between(t, none + i * 0.2, c("Take the designation away"), 0.4)}><Glow color={GOLD} size={32}>power inside?</Glow></At>
      ))}
      <At x={380} y={470} o={sc}><Glow color={DIM} size={36}>scrap</Glow></At>
      <At x={960} y={470} o={du}><Glow color={DIM} size={36}>a coloured lamp</Glow></At>
      <At x={1550} y={470} o={no}><Glow color={DIM} size={36}>noise</Glow></At>
      <div style={{ position: "absolute", top: 760, width: "100%", display: "flex", justifyContent: "center", opacity: ramp(t, c("nothing in the world is more effective"), 0.3) }}>
        <div style={{ background: "rgba(10,8,20,0.55)", borderRadius: 20, padding: "0 30px" }}>
          <Reveal text="nothing more effective" at={c("nothing in the world is more effective")} size={66} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. not a special class: the kettle
const KettleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("not a special class");
  const fire = c("The fire that boils the kettle");
  const soc = c("The social cases simply");
  const k = ramp(t, soc, 0.9);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={46} serif>a special class?</Glow><Strike at={t0 + 1.2} /></div>
      </At>
      <AbsoluteFill style={{ transformOrigin: "960px 460px", transform: `translateX(${k * 420}px) scale(${1 - 0.3 * k})` }}>
        <At x={960} y={640} s={pop(t, fps, fire)}><Flame size={0.55} /></At>
        <At x={960} y={430} s={pop(t, fps, fire + 0.3)}><Kettle /></At>
        <Mist x={1100} y={330} start={fire + 1.0} color={CHALK} spread={80} n={18} seed={7} />
      </AbsoluteFill>
      <At x={960} y={770} o={ramp(t, c("nothing found from its own side"), 0.6) * (1 - k)}><Glow color={GOLD} size={40}>nothing found from its own side</Glow></At>
      <At x={420} y={420} s={pop(t, fps, soc + 0.2) * 0.75}><Banknote scrap={0} sheen={1} /></At>
      <At x={780} y={420} s={pop(t, fps, soc + 0.4) * 0.75}><TrafficLight red={1} dull={0} /></At>
      <At x={420} y={420} o={ramp(t, soc + 1.0, 0.5)}>
        <div style={{ width: 280, height: 280, borderRadius: "50%", border: `6px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}, inset 0 0 40px ${GOLD}44` }} />
      </At>
      <At x={960} y={770} o={ramp(t, soc + 0.8, 0.6)}><Glow color={GOLD} size={40}>the same way, easier to see</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. an anchor would stop it working
const AnchorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Convention does not work");
  const stopAt = c("An anchor would stop") + 0.8;
  const coinAt = c("A coin whose value");
  const frozenAt = c("cannot respond, combine or change", 0.5);
  const tt = Math.min(t, stopAt);
  const drop = ramp(t, c("An anchor would stop"), 0.8);
  const stopped = ramp(t, stopAt, 0.4);
  const gcol = stopped > 0.5 ? DIM : TEAL;
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={coinAt - 0.5}>
        <At x={880} y={500} s={pop(t, fps, t0)}><Gear size={260} rot={tt * 50} color={gcol} /></At>
        <At x={1080} y={420} s={pop(t, fps, t0 + 0.2)}><Gear size={180} rot={-tt * 72 + 15} color={gcol} teeth={9} /></At>
        <At x={880} y={720} o={ramp(t, t0 + 0.4, 0.5)}><Glow color={gcol} size={36}>convention, working</Glow></At>
        <At x={880 + Math.sin(t * 1.5) * 20 * (1 - drop)} y={180 + drop * 200} s={pop(t, fps, c("lacking an anchor"))} r={Math.sin(t * 1.5) * 10 * (1 - drop)}>
          <Anchor color={WARM} />
        </At>
        <At x={1300} y={200} o={between(t, c("lacking an anchor"), stopAt, 0.4)}><Glow color={WARM} size={40}>an anchor?</Glow></At>
        <At x={1360} y={700} o={stopped}><Glow color={WARM} size={46} serif>stops working</Glow></At>
      </Scene>
      <Scene from={coinAt - 0.3} to={frozenAt}>
        <At x={560} y={400} s={pop(t, fps, coinAt)}><div style={{ perspective: 800 }}><Coin spin={0} /></div></At>
        <At x={560} y={400} o={ramp(t, coinAt + 0.5, 0.5)}>
          <div style={{ width: 280, height: 280, borderRadius: "50%", border: `3px solid ${ICE}`, background: `radial-gradient(circle at 30% 25%, #ffffff22, transparent 60%)`, boxShadow: `0 0 30px ${ICE}66` }} />
        </At>
        <At x={560} y={600} o={ramp(t, coinAt + 0.6, 0.5)}><Glow color={ICE} size={32}>owing nothing to anyone</Glow></At>
        <At x={560} y={740} o={ramp(t, c("could buy nothing"), 0.5)}><Glow color={WARM} size={40}>buys nothing</Glow></At>
        <At x={1340} y={360} s={pop(t, fps, c("A red that was red"))}><TrafficLight red={1} dull={0} /></At>
        <At x={1340} y={570} o={ramp(t, c("A red that was red") + 0.5, 0.5)}><Glow color="#FF6060" size={32}>red from its own side</Glow></At>
        <At x={1340} y={700} s={pop(t, fps, c("signal nothing to a driver"))}><Car color={TEAL} /></At>
        <XMark x={1340} y={700} r={50} at={c("signal nothing to a driver") + 0.7} />
      </Scene>
      <Scene from={frozenAt + 0.2} to={1e9}>
        <At x={960} y={430} s={pop(t, fps, frozenAt + 0.3)} o={1 - 0.5 * ramp(t, c("So it cannot do anything"), 1.0)}><Block size={320} color={ICE} core={1} /></At>
        {["respond", "combine", "change"].map((w, i) => (
          <At key={w} x={[520, 960, 1400][i]} y={[300, 720, 300][i]} s={pop(t, fps, frozenAt + 0.6 + i * 0.4)}>
            <div style={{ position: "relative" }}><Chip color={TEAL} size={36}>{w}</Chip><Strike at={frozenAt + 1.0 + i * 0.4} /></div>
          </At>
        ))}
        <At x={960} y={130} o={ramp(t, frozenAt + 0.3, 0.5)}><Glow color={ICE} size={40} serif>its nature from its own side</Glow></At>
        <At x={960} y={810} o={ramp(t, c("So it cannot do anything"), 0.5)}><Glow color={WARM} size={44}>cannot do anything</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. emptiness and function
const VerseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("founder of the Middle Way", 1.6);
  const every = c("everything is possible");
  const partB = c("Emptiness here means", 0.4);
  const partC = c("Their working and their emptiness", 0.4);
  const voidAt = c("It is not a void"), openAt = c("a hidden openness beneath");
  const card = (t - partC) * 70;
  const icons = [GOLD, TEAL, ROSE, GREEN, VIOLET, ICE, WARM, GOLD, TEAL, ROSE, GREEN, VIOLET];
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={partB - 0.3}>
        <At x={960} y={150} o={ramp(t, t0, 0.6)}><Glow color={GOLD} size={64} serif>Nāgārjuna</Glow></At>
        <At x={960} y={240} s={pop(t, fps, c("founder of the Middle Way"))}><Chip color={VIOLET} size={32}>the Middle Way</Chip></At>
        <div style={{ position: "absolute", top: 340, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="For whom emptiness is possible," at={c("For whom emptiness is possible")} size={70} color={ICE} top="#F0FBFF" />
        </div>
        <div style={{ position: "absolute", top: 440, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="everything is possible" at={every} size={86} />
        </div>
        {icons.map((col, i) => {
          const a = (i / icons.length) * Math.PI * 2 + t * 0.15;
          const p = pop(t, fps, every + 0.6 + i * 0.08);
          return <At key={i} x={960 + Math.cos(a) * 620 * p} y={680 + Math.sin(a) * 120 * p} s={p} o={Math.min(1, p)}><Orb size={30 + rand(i) * 30} color={col} /></At>;
        })}
        <Ring x={960} y={480} p={ramp(t, every + 0.5, 1.6)} r0={40} r1={300} color={GOLD} />
      </Scene>
      <Scene from={partB} to={partC - 0.3}>
        <At x={960} y={130} o={ramp(t, partB + 0.3, 0.5)}><Glow color={ICE} size={46} serif>emptiness: no fixed essence</Glow></At>
        <At x={960} y={380} s={pop(t, fps, partB + 0.3)}><Block size={240} color={ICE} core={1 - ramp(t, c("absence of a fixed essence") + 0.6, 0.8)} /></At>
        <At x={480} y={620} s={pop(t, fps, voidAt)}>
          <div style={{ width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #000 55%, #2a1d50 80%, transparent)", boxShadow: `0 0 40px ${VIOLET}88` }} />
        </At>
        <At x={480} y={760} o={ramp(t, voidAt, 0.5)}><Glow color={DIM} size={34}>a void</Glow></At>
        <XMark x={480} y={620} r={80} at={voidAt + 0.8} />
        <At x={1440} y={640} s={pop(t, fps, openAt)}>
          <div style={{ width: 420, height: 30, borderRadius: 8, border: `3px dashed ${VIOLET}`, background: `${VIOLET}33`, boxShadow: `0 0 30px ${VIOLET}` }} />
        </At>
        {[1340, 1440, 1540].map((x, i) => <At key={x} x={x} y={590} s={pop(t, fps, openAt + 0.2 + i * 0.1)}><Orb size={50} color={TEAL} /></At>)}
        <At x={1440} y={720} o={ramp(t, openAt, 0.5)}><Glow color={DIM} size={34}>an openness beneath</Glow></At>
        <XMark x={1440} y={640} r={70} at={openAt + 1.0} />
      </Scene>
      <Scene from={partC} to={1e9}>
        <At x={960} y={430} s={pop(t, fps, partC + 0.2)}>
          <div style={{ perspective: 1400 }}>
            <div style={{ width: 460, height: 300, position: "relative", transformStyle: "preserve-3d", transform: `rotateY(${card}deg)` }}>
              <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", borderRadius: 24, border: `3px solid ${GOLD}`, background: `${GOLD}22`,
                boxShadow: `0 0 40px ${GOLD}66`, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Gear size={120} rot={t * 60} color={GOLD} /><Glow color={GOLD} size={44} serif>working</Glow>
              </div>
              <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: 24, border: `3px solid ${ICE}`,
                background: `${ICE}18`, boxShadow: `0 0 40px ${ICE}66`, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ width: 110, height: 110, borderRadius: "50%", border: `3px dashed ${ICE}` }} /><Glow color={ICE} size={44} serif>empty</Glow>
              </div>
            </div>
          </div>
        </At>
        <div style={{ position: "absolute", top: 700, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="one appearance, two sides" at={c("seen from two sides") - 0.8} size={66} />
        </div>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12-13. the chair
const ChairScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Think of a chair");
  const sink = ramp(t, c("something to sink into"), 1.0);
  const child = c("To a child"), cat = c("To a cat");
  const none = c("None of these is its true function");
  const real = c("Each is real");
  const close = c("The chair still holds");
  const drops = c("What drops away");
  const lab = [["something to sink into", "rest", ROSE, 300], ["To a child", "a fort", VIOLET, 470], ["To a cat", "a perch", GOLD, 640]] as const;
  return (
    <AbsoluteFill>
      <At x={1040} y={470} s={pop(t, fps, t0, 14)}><Chair sink={sink} glow={ramp(t, close, 1.4)} /></At>
      <At x={1040} y={350} o={between(t, c("something to sink into"), child, 0.5)}>
        <div style={{ width: 300, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${ROSE}55, transparent 70%)` }} />
      </At>
      <At x={985} y={205} s={pop(t, fps, child + 0.2)} o={1 - ramp(t, close, 0.6)}><Flag /></At>
      <At x={1100} y={450} s={pop(t, fps, cat + 0.2)}><Cat /></At>
      <At x={1550} y={180} s={pop(t, fps, cat)}><Sun size={130} rot={t * 20} /></At>
      {lab.map(([ph, txt, col, y], i) => (
        <At key={i} x={420} y={y} s={pop(t, fps, c(ph, 0.1))}>
          <div style={{ boxShadow: ramp(t, real, 0.5) > 0 ? `0 0 ${30 * ramp(t, real, 0.5)}px ${col}` : undefined, borderRadius: 30 }}><Chip color={col} size={40}>{txt}</Chip></div>
        </At>
      ))}
      <At x={1040} y={630} o={between(t, none, real, 0.4)}>
        <div style={{ position: "relative", padding: "10px 24px", border: `3px dashed ${DIM}`, borderRadius: 14, background: "rgba(10,8,20,0.6)" }}>
          <Glow color={CHALK} size={36}>true function?</Glow><Strike at={c("hidden in the wood") + 0.6} />
        </div>
      </At>
      <At x={420} y={790} o={ramp(t, real + 0.3, 0.5) * (1 - ramp(t, close, 0.5))}><Glow color={GREEN} size={40}>each real, each works</Glow></At>
      {Array.from({ length: 14 }).map((_, i) => {
        const u = ramp(t, drops + 0.3 + rand(i) * 1.2, 2.5);
        return <div key={i} style={{ position: "absolute", left: 930 + rand(i + 3) * 220, top: 520 - u * 380, width: 12, height: 12, borderRadius: "50%",
          background: GOLD, boxShadow: `0 0 12px ${GOLD}`, opacity: t > drops ? Math.sin(Math.min(1, u * 1.3) * Math.PI) * 0.9 : 0 }} />;
      })}
      <div style={{ position: "absolute", top: 770, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="nothing waiting inside" at={c("waiting inside it") - 0.4} size={70} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["key", 0], ["space", c("Drifting in deep space", 0.6)], ["together", c("not stored in the key", 1.2)],
    ["concl", c("Two opposite conclusions", 0.6)], ["works", c("Drop the premise", 0.6)], ["doubt", c("a doubt lingers", 0.9)],
    ["conv", c("look at what convention does", 0.9)], ["kettle", c("not a special class", 0.6)], ["anchor", c("Convention does not work", 0.6)],
    ["verse", c("founder of the Middle Way", 2.0)], ["chair", c("Think of a chair", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: number, b: number) => [a, b] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [S(0, c("Two opposite conclusions", 0.9)), <KeyScene />],
    [S(c("Two opposite conclusions", 0.5), c("Drop the premise", -1.4)), <ConclScene />],
    [S(c("Drop the premise", -1.0), c("a doubt lingers", 1.2)), <WorksScene />],
    [S(c("a doubt lingers", 0.8), c("look at what convention does", 1.2)), <DoubtScene />],
    [S(c("look at what convention does", 0.8), c("not a special class", 0.9)), <ConvScene />],
    [S(c("not a special class", 0.5), c("Convention does not work", 0.9)), <KettleScene />],
    [S(c("Convention does not work", 0.5), c("founder of the Middle Way", 2.2)), <AnchorScene />],
    [S(c("founder of the Middle Way", 1.9), c("Think of a chair", 0.9)), <VerseScene />],
    [S(c("Think of a chair", 0.5), 1e9), <ChairScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
