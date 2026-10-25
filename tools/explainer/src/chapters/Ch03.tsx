// Chapter 3: Unfindability and Freedom from the Eight Extremes. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Look at a rainbow", "It is plainly there", "photograph it", "point to it", "predict where it will appear", "Walk on", "moves with you",
  "search for the rainbow itself", "the light, the rain", "nothing is found", "This is unfindability", "no self-existing core",
  "Unfindable does not mean", "The rainbow still appears", "isolated as an essence", "A table, a tree", "treating them as solid",
  "The Indian philosopher", "chose an object no one doubts", "A chariot", "by its own nature", "some relation to its parts", "He looked in seven ways",
  "not the same as its parts", "something other than them", "does not own them", "not inside them", "mere collection", "a heap of parts",
  "not their shape", "itself designated",
  "Sought in seven ways", "riding it", "carries passengers", "breaks down", "is repaired",
  "the founder of the Middle Way", "a verse of praise", "free of eight extremes", "An extreme is an edge", "a place where one could stand",
  "four pairs", "Arising and ceasing", "Permanence and annihilation", "Coming and going", "Sameness and difference",
  "Each one asks", "Where is it", "Where did it begin", "is it still there", "is it this or that", "something with whereabouts",
  "Take away that one assumption", "all eight fall together",
  "Strike a match", "There is a flame", "Surely it was produced", "look for the edge", "The match touches the strip", "The tip catches",
  "A glow appears", "At every frame", "At no frame",
  "The word produced still works", "She lit the fire", "What falls away", "a self-standing cause",
  "switch off a lamp", "Where did the light go", "Not back into the bulb", "the corners of the room", "Switch it on", "The wires carry no light",
  "The question has no answer", "never had whereabouts",
  "This is not nihilism", "share one mistake", "to exist is to exist", "Drop that", "neither follows",
  "The flame, the light", "a passing thought", "Vivid, working", "They come from nowhere", "they go nowhere",
];

const M = {
  rain: { a: "rgba(40,90,160,0.5)", b: "rgba(110,60,170,0.42)", c: "rgba(60,140,120,0.3)" },
  seek: { a: "rgba(30,120,140,0.5)", b: "rgba(90,60,160,0.42)", c: "rgba(150,110,50,0.3)" },
  chariot: { a: "rgba(160,100,50,0.45)", b: "rgba(140,60,90,0.4)", c: "rgba(150,110,50,0.35)" },
  extremes: { a: "rgba(90,60,160,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(30,90,120,0.32)" },
  match: { a: "rgba(170,90,40,0.5)", b: "rgba(60,40,120,0.45)", c: "rgba(150,110,50,0.35)" },
  lamp: { a: "rgba(40,40,110,0.5)", b: "rgba(150,120,50,0.38)", c: "rgba(30,60,110,0.3)" },
  nihil: { a: "rgba(140,70,90,0.42)", b: "rgba(90,60,160,0.45)", c: "rgba(40,90,120,0.3)" },
  close: { a: "rgba(30,110,130,0.5)", b: "rgba(170,100,50,0.42)", c: "rgba(110,60,170,0.35)" },
};

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const Center: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);
const Cross: React.FC<{ x: number; y: number; size: number; at: number }> = ({ x, y, size, at }) => {
  const { t } = useT();
  const h = size / 2;
  return (
    <Svg>
      <DrawPath d={`M${x - h} ${y - h} L${x + h} ${y + h}`} p={ramp(t, at, 0.4)} color={WARM} width={7} len={size * 1.5} />
      <DrawPath d={`M${x + h} ${y - h} L${x - h} ${y + h}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={7} len={size * 1.5} />
    </Svg>
  );
};
const Magnifier: React.FC<{ size?: number; color?: string }> = ({ size = 160, color = CHALK }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={40} cy={40} r={30} fill="#ffffff10" stroke={color} strokeWidth={5} />
    <path d="M62 62 L92 92" stroke={color} strokeWidth={9} strokeLinecap="round" />
  </svg>
);
const Person: React.FC<{ color: string; size?: number }> = ({ color, size = 100 }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 100 110" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={50} cy={28} r={18} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <path d="M18 105 C 20 66, 80 66, 82 105 Z" fill={`${color}22`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);
const Eye: React.FC = () => (
  <svg width={110} height={70} viewBox="0 0 110 70" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}>
    <path d="M5 35 Q55 -10 105 35 Q55 80 5 35 Z" fill={`${TEAL}22`} stroke={TEAL} strokeWidth={3} />
    <circle cx={55} cy={35} r={14} fill={TEAL} />
  </svg>
);
const Drops: React.FC = () => (
  <svg width={110} height={90} viewBox="0 0 110 90" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
    {[[25, 20], [60, 45], [90, 15]].map(([x, y], i) => <path key={i} d={`M${x} ${y} q 12 18 0 26 q -12 -8 0 -26 Z`} fill={`${ICE}55`} stroke={ICE} strokeWidth={3} />)}
  </svg>
);
const Pin: React.FC<{ color: string; size?: number }> = ({ color, size = 40 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 40 52" style={{ filter: `drop-shadow(0 0 6px ${color})` }}>
    <path d="M20 50 C 8 32, 2 24, 2 18 A 18 18 0 0 1 38 18 C 38 24, 32 32, 20 50 Z" fill={`${color}55`} stroke={color} strokeWidth={3} />
    <circle cx={20} cy={18} r={6} fill={color} />
  </svg>
);
const Flame: React.FC<{ size?: number; boost?: number }> = ({ size = 1, boost = 0 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (5 + k) + k * 1.7) * (8 + 6 * boost);
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  const inner = `M0 ${-60 - n(2) * 0.6} C 25 -20, 38 20, 30 55 C 22 85, -22 85, -30 55 C -38 20, -25 -20, 0 ${-60 - n(2) * 0.6} Z`;
  return (
    <svg width={260 * size} height={340 * size} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl3" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl3)" opacity={0.95} />
      <path d={inner} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};

// ---------------------------------------------------------------- 1-2. the rainbow
const BANDS = ["#FF5E5E", "#FF9F45", "#FFE066", "#7EE081", "#5FC8F0", "#6C7BFF", "#B07BFF"];
const RainbowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Look at a rainbow");
  const draw = ramp(t, t0 + 0.4, 1.8);
  const walk = ramp(t, c("Walk on"), 2.0);
  const seek = c("search for the rainbow itself");
  const fade = ramp(t, c("nothing is found"), 1.0) * (1 - ramp(t, c("The rainbow still appears"), 0.8));
  const shrink = ramp(t, c("A table, a tree"), 1.0);
  const cx = 960 + 220 * walk, cy = 760;
  const flash = between(t, c("photograph it"), c("photograph it") + 0.5, 0.2);
  const magT = (t - seek) * 0.5;
  const magOn = between(t, seek, c("Unfindable does not mean"), 0.5) + between(t, c("isolated as an essence"), c("A table, a tree"), 0.4);
  const ma = Math.PI * (0.15 + 0.7 * ((Math.sin(magT * 1.6) + 1) / 2));
  const mx = cx - 470 * Math.cos(ma), my = cy - 470 * Math.sin(ma);
  return (
    <AbsoluteFill>
      {/* rain */}
      {Array.from({ length: 40 }).map((_, i) => {
        const x = (rand(i) * 2000 + t * 30) % 1920, y = ((rand(i + 3) * 900 + t * (380 + rand(i + 5) * 200)) % 900) - 40;
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: 2, height: 30, background: ICE, opacity: 0.25 * ramp(t, t0, 1) * (1 - shrink), transform: "rotate(12deg)" }} />;
      })}
      <AbsoluteFill style={{ transformOrigin: "960px 600px", transform: `scale(${1 - 0.45 * shrink}) translateX(${-900 * shrink}px)` }}>
        <Svg style={{ opacity: 1 - 0.75 * fade, filter: `blur(${fade * 2}px)` }}>
          {BANDS.map((col, i) => {
            const r = 520 - i * 18;
            return <DrawPath key={i} d={`M${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} p={draw} color={col} width={16} len={1700} />;
          })}
        </Svg>
        <Svg style={{ opacity: fade }}>
          <path d={`M${cx - 520} ${cy} A 520 520 0 0 1 ${cx + 520} ${cy}`} fill="none" stroke={CHALK} strokeWidth={3} strokeDasharray="12 12" />
          <path d={`M${cx - 412} ${cy} A 412 412 0 0 1 ${cx + 412} ${cy}`} fill="none" stroke={CHALK} strokeWidth={3} strokeDasharray="12 12" />
        </Svg>
        <At x={210} y={200} o={ramp(t, t0, 0.8) * (1 - shrink)}><Sun size={130} rot={t * 15} /></At>
        <At x={cx} y={705} s={pop(t, fps, c("It is plainly there"))} o={1 - shrink}><Person color={CHALK} size={90} /></At>
        <Svg style={{ opacity: between(t, c("predict where it will appear"), c("Walk on") + 2, 0.4) }}>
          <line x1={210} y1={200} x2={cx} y2={700} stroke={GOLD} strokeWidth={3} strokeDasharray="10 10" />
          <line x1={cx} y1={700} x2={cx + 300} y2={350} stroke={GOLD} strokeWidth={3} strokeDasharray="10 10" />
        </Svg>
        <At x={cx + 400} y={380} o={between(t, c("predict where it will appear"), c("Walk on") + 2, 0.4)}><Glow color={GOLD} size={30}>predictable</Glow></At>
        <At x={1560} y={600} s={pop(t, fps, c("point to it"))} o={between(t, c("point to it"), c("predict where it will appear"), 0.4)} r={-40}><Hand size={140} /></At>
        <At x={cx} y={430} o={ramp(t, c("moves with you"), 0.5) * (1 - ramp(t, seek - 0.3, 0.4))}><Glow color={CHALK} size={36}>it moves with you</Glow></At>
      </AbsoluteFill>
      {/* camera flash frame */}
      <At x={960} y={450} o={flash}><div style={{ width: 1300, height: 640, border: `6px solid #fff`, borderRadius: 10, boxShadow: "0 0 80px #fff" }} /></At>
      <At x={960} y={450} o={flash * 0.35}><div style={{ width: 1920, height: 1080, background: "#fff" }} /></At>
      <At x={mx} y={my} o={magOn}><Magnifier /></At>
      {[{ ph: "the light, the rain", x: 420, node: <Sun size={90} rot={t * 20} />, label: "light", col: GOLD },
        { ph: "the light, the rain", x: 960, node: <Drops />, label: "rain", col: ICE },
        { ph: "nothing is found", x: 1500, node: <Eye />, label: "the eye", col: TEAL }].map((d, i) => (
        <At key={i} x={d.x} y={570} s={pop(t, fps, c(d.ph, 0.1) + i * 0.35)} o={1 - ramp(t, c("Unfindable does not mean"), 0.5)}>
          {d.node}<Glow color={d.col} size={30}>apart from {d.label}?</Glow>
        </At>
      ))}
      <Center top={60}><div style={{ opacity: 1 - ramp(t, c("Unfindable does not mean") - 0.2, 0.5) }}><Reveal text="unfindability" at={c("This is unfindability")} size={80} /></div></Center>
      <At x={1180} y={400} o={between(t, c("no self-existing core"), c("Unfindable does not mean"), 0.5)}>
        <div style={{ width: 160, height: 160, borderRadius: "50%", border: `3px dashed ${GOLD}` }} />
        <Glow color={GOLD} size={30} style={{ marginTop: 10 }}>no core</Glow>
      </At>
      <At x={960} y={110} o={between(t, c("Unfindable does not mean"), c("A table, a tree"), 0.5)}>
        <div style={{ position: "relative", display: "inline-block" }}><Glow color={CHALK} size={50} serif>unfindable = non-existent</Glow><Strike at={c("The rainbow still appears")} /></div>
      </At>
      {/* table, tree, mind */}
      {[{ x: 1000, label: "a table", node: <svg width={200} height={130} viewBox="0 0 200 130"><path d="M10 30 L190 30 L170 50 L30 50 Z" fill="#b98a5566" stroke={GOLD} strokeWidth={4} /><path d="M40 50 L40 125 M160 50 L160 125" stroke={GOLD} strokeWidth={8} /></svg>, col: GOLD },
        { x: 1330, label: "a tree", node: <svg width={150} height={170} viewBox="0 0 150 170"><path d="M75 165 L75 90" stroke={GREEN} strokeWidth={10} /><circle cx={75} cy={65} r={55} fill={`${GREEN}44`} stroke={GREEN} strokeWidth={4} /></svg>, col: GREEN },
        { x: 1660, label: "a mind", node: <svg width={170} height={140} viewBox="0 0 170 140"><path d="M30 90 C 0 90, 0 40, 40 40 C 45 5, 110 5, 115 35 C 160 30, 165 90, 130 92 Z" fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={4} /><circle cx={40} cy={115} r={9} fill="none" stroke={VIOLET} strokeWidth={3} /><circle cx={25} cy={133} r={5} fill="none" stroke={VIOLET} strokeWidth={3} /></svg>, col: VIOLET },
      ].map((d, i) => {
        const solid = ramp(t, c("treating them as solid"), 0.8);
        return (
          <At key={i} x={d.x} y={430} s={pop(t, fps, c("A table, a tree") + i * 0.3)}>
            <div style={{ padding: 20, borderRadius: 20, border: `${2 + 6 * solid}px solid ${d.col}`, background: `${d.col}${solid > 0.5 ? "33" : "00"}`, boxShadow: `0 0 ${30 * solid}px ${d.col}` }}>{d.node}</div>
            <Glow color={d.col} size={32} style={{ marginTop: 10 }}>{d.label}</Glow>
          </At>
        );
      })}
      <At x={1330} y={730} o={ramp(t, c("treating them as solid") + 0.3, 0.6)}><Glow color={CHALK} size={38}>only more used to them as solid</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the chariot
type P = { x: number; y: number; r: number };
const CHARIOT = {
  assembled: { wl: { x: -150, y: 80, r: 0 }, wr: { x: 150, y: 80, r: 0 }, axle: { x: 0, y: 80, r: 0 }, car: { x: 0, y: -10, r: 0 }, pole: { x: 270, y: 40, r: 0 } },
  spread: { wl: { x: -560, y: 60, r: 0 }, axle: { x: -280, y: 60, r: 0 }, car: { x: 40, y: 40, r: 0 }, pole: { x: 330, y: 60, r: 0 }, wr: { x: 600, y: 60, r: 0 } },
  cluster: { wl: { x: -80, y: 30, r: 0 }, wr: { x: 80, y: 30, r: 0 }, axle: { x: 0, y: 120, r: 0 }, car: { x: 0, y: -60, r: 0 }, pole: { x: 0, y: 40, r: 0 } },
  heap: { wl: { x: -60, y: 150, r: 70 }, wr: { x: 70, y: 130, r: -30 }, axle: { x: 10, y: 110, r: 35 }, car: { x: -10, y: 90, r: -25 }, pole: { x: 40, y: 160, r: 160 } },
};
type K = keyof typeof CHARIOT.assembled;
const mix = (a: P, b: P, k: number): P => ({ x: lerp(a.x, b.x, k), y: lerp(a.y, b.y, k), r: lerp(a.r, b.r, k) });
const Wheel: React.FC<{ spin: number; color: string }> = ({ spin, color }) => (
  <g transform={`rotate(${spin})`}>
    <circle r={70} fill="none" stroke={color} strokeWidth={8} />
    {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={70 * Math.cos((i * Math.PI) / 4)} y2={70 * Math.sin((i * Math.PI) / 4)} stroke={color} strokeWidth={4} />)}
    <circle r={12} fill={color} />
  </g>
);
const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A chariot");
  const k1 = ramp(t, c("not the same as its parts"), 1.0), k2 = ramp(t, c("not inside them"), 1.0), k3 = ramp(t, c("a heap of parts"), 1.0),
    k4 = ramp(t, c("not their shape"), 1.0);
  const ride = c("riding it"), brk = c("breaks down"), fix = c("is repaired");
  const drive = ramp(t, ride, 1.5) * (1 - ramp(t, brk, 0.6));
  const off = ramp(t, brk + 0.2, 0.8) * (1 - ramp(t, fix + 0.1, 1.0));
  const moveX = Math.sin(Math.max(0, t - ride) * 0.9) * 160 * ramp(t, ride, 1.0);
  const spin = (t - ride) * 220 * drive;
  const pos = (k: K): P => {
    let p = CHARIOT.assembled[k];
    p = mix(p, CHARIOT.spread[k], k1); p = mix(p, CHARIOT.cluster[k], k2); p = mix(p, CHARIOT.heap[k], k3); p = mix(p, CHARIOT.assembled[k], k4);
    if (k === "wr") p = { x: p.x + off * 160, y: p.y + off * 60, r: p.r + off * 200 };
    return p;
  };
  const ox = 960 + moveX, oy = 470;
  const g = (k: K, node: React.ReactNode) => { const p = pos(k); return <g key={k} transform={`translate(${p.x} ${p.y}) rotate(${p.r})`}>{node}</g>; };
  const enter = pop(t, fps, t0, 14);
  const ways: [string, string, number][] = [
    ["not the same as its parts", "the same", 0], ["something other than them", "other", 0], ["does not own them", "owner", 0],
    ["not inside them", "in the parts", 0], ["not inside them", "holding them", 1.6], ["mere collection", "collection", 0], ["not their shape", "shape", 0],
  ];
  const all = c("Sought in seven ways");
  const ghostO = between(t, c("something other than them"), c("not inside them") - 0.2, 0.5);
  return (
    <AbsoluteFill>
      {ways.map(([ph, label, d], i) => {
        const at = c(ph) + d;
        const on = ramp(t, at, 0.4);
        return (
          <At key={i} x={290 + i * 223} y={80} o={0.3 + 0.7 * ramp(t, c("He looked in seven ways") + i * 0.12, 0.4)} s={1 + 0.15 * between(t, at, at + 2, 0.3)}>
            <div style={{ position: "relative" }}>
              <Chip color={on > 0.5 ? GOLD : DIM} size={26}>{label}</Chip>
              <Svg style={{ left: 30, top: -8, width: 140, height: 70 }}>
                <DrawPath d="M10 10 L120 60" p={ramp(t, all + i * 0.12, 0.3)} color={WARM} width={5} len={130} />
              </Svg>
            </div>
          </At>
        );
      })}
      <Svg style={{ opacity: Math.min(1, enter) }}>
        <g transform={`translate(${ox} ${oy}) scale(${(0.6 + 0.4 * enter) * (1 - 0.35 * k2 * (1 - k3))})`}>
          {g("pole", <path d="M-60 0 L120 0 L150 -20" stroke={GOLD} strokeWidth={10} fill="none" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />)}
          {g("axle", <rect x={-170} y={-8} width={340} height={16} rx={8} fill={`${CHALK}55`} stroke={CHALK} strokeWidth={3} />)}
          {g("car", <path d="M-130 50 L-150 -60 Q 0 -90 150 -60 L130 50 Z" fill={`${WARM}33`} stroke={WARM} strokeWidth={5} strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }} />)}
          {g("wl", <Wheel spin={spin} color={GOLD} />)}
          {g("wr", <Wheel spin={spin} color={GOLD} />)}
        </g>
      </Svg>
      <At x={960} y={300} o={between(t, c("The Indian philosopher"), t0 + 0.3, 0.4)}><Glow color={CHALK} size={48} serif>an object no one doubts</Glow></At>
      <At x={960} y={760} o={between(t, c("by its own nature"), c("He looked in seven ways") + 1.0, 0.4)}><Glow color={GOLD} size={38}>by its own nature? then findable among its parts</Glow></At>
      {/* passengers */}
      <At x={ox - 40} y={oy - 150} o={ramp(t, c("carries passengers"), 0.5) * (1 - off * 0.4)}><Person color={ROSE} size={80} /></At>
      <At x={ox + 40} y={oy - 150} o={ramp(t, c("carries passengers") + 0.3, 0.5) * (1 - off * 0.4)}><Person color={TEAL} size={80} /></At>
      {/* overlays for the seven ways */}
      <At x={960} y={720} o={between(t, c("not the same as its parts") + 0.6, c("something other than them") - 0.2, 0.4)}>
        <Glow color={CHALK} size={40}>many parts ≠ one chariot</Glow>
      </At>
      <At x={960} y={250} o={ghostO}>
        <svg width={420} height={220} viewBox="-210 -110 420 220" style={{ overflow: "visible" }}>
          <path d="M-130 50 L-150 -60 Q 0 -90 150 -60 L130 50 Z" fill="none" stroke={CHALK} strokeWidth={3} strokeDasharray="10 8" />
          <circle cx={-150} cy={80} r={50} fill="none" stroke={CHALK} strokeWidth={3} strokeDasharray="8 8" />
          <circle cx={150} cy={80} r={50} fill="none" stroke={CHALK} strokeWidth={3} strokeDasharray="8 8" />
        </svg>
      </At>
      <At x={1420} y={230} o={between(t, c("something other than them"), c("does not own them") - 0.2, 0.4)}><Glow color={CHALK} size={34}>apart from the parts? none</Glow></At>
      <Svg style={{ opacity: between(t, c("does not own them"), c("not inside them") - 0.2, 0.4) }}>
        {[-560, -280, 40, 330, 600].map((x, i) => <line key={i} x1={960} y1={330} x2={960 + x} y2={500} stroke={VIOLET} strokeWidth={3} strokeDasharray="8 8" />)}
      </Svg>
      <At x={1450} y={250} o={between(t, c("does not own them"), c("not inside them") - 0.2, 0.4)}><Glow color={VIOLET} size={34}>an owner beside them?</Glow></At>
      <At x={960} y={490} o={between(t, c("not inside them"), c("mere collection") - 0.2, 0.4)}>
        <div style={{ width: 420, height: 420, borderRadius: "50%", border: `4px dashed ${TEAL}`, boxShadow: `0 0 24px ${TEAL}66` }} />
      </At>
      <At x={1450} y={490} o={between(t, c("not inside them"), c("mere collection") - 0.2, 0.4)}><Glow color={TEAL} size={34}>container or contents?</Glow></At>
      <At x={1400} y={620} o={between(t, c("a heap of parts"), c("not their shape") - 0.2, 0.4)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={42}>a heap</Glow><Strike at={c("a heap of parts") + 1.0} /></div>
      </At>
      <Svg style={{ opacity: between(t, c("not their shape") + 0.6, all, 0.5) }}>
        <DrawPath d="M720 560 L720 420 Q 960 380 1200 420 L1230 520 L1270 520 L1270 560 Z" p={ramp(t, c("not their shape") + 0.6, 1.2)} color={GOLD} width={4} len={1400} />
      </Svg>
      <At x={960} y={720} o={between(t, c("itself designated"), all, 0.4)}><Glow color={GOLD} size={40}>the arrangement, itself designated</Glow></At>
      <At x={960} y={720} o={between(t, all + 0.3, ride, 0.4)}><Glow color={WARM} size={44} serif>not found in seven ways</Glow></At>
      <Mist x={1110 + moveX} y={560} start={ride} color={DIM} spread={80} n={10} seed={3} />
      <At x={1180} y={640} o={between(t, brk + 0.4, fix, 0.4)}><Glow color={WARM} size={36}>breaks down</Glow></At>
      {[0, 1].map((k) => <Ring key={k} x={1110 + moveX} y={550} p={ramp(t, fix + 0.9 + k * 0.3, 1.0)} r0={60} r1={170} color={GOLD} />)}
      <At x={960} y={790} o={ramp(t, ride, 0.6)}><Glow color={GREEN} size={40}>named in dependence on its parts, it works</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. the eight extremes
const PAIRS: [string, string, string][] = [
  ["Arising and ceasing", "arising", "ceasing"], ["Permanence and annihilation", "permanence", "annihilation"],
  ["Coming and going", "coming", "going"], ["Sameness and difference", "sameness", "difference"],
];
const ExtremesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("the founder of the Middle Way");
  const verse = c("a verse of praise");
  const pairsAt = c("four pairs");
  const where = c("Where is it");
  const center = ramp(t, c("something with whereabouts"), 0.8);
  const take = ramp(t, c("Take away that one assumption"), 0.8);
  const fall = ramp(t, c("all eight fall together"), 1.6);
  const qs: [string, string][] = [["Where did it begin", "where did it begin?"], ["is it still there", "is it still there?"], ["is it this or that", "this or that?"]];
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={pairsAt - 0.4}>
        <At x={600} y={430} s={pop(t, fps, t0)}>
          <svg width={460} height={420} viewBox="0 0 460 420" style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }}>
            <rect x={60} y={40} width={340} height={340} rx={10} fill="#f1ece011" stroke={GOLD} strokeWidth={4} />
            <rect x={30} y={20} width={400} height={30} rx={15} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
            <rect x={30} y={370} width={400} height={30} rx={15} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={i} x1={100} y1={100 + i * 45} x2={100 + 260 * ramp(t, verse + 0.4 + i * 0.25, 0.5)} y2={100 + i * 45} stroke={CHALK} strokeWidth={5} strokeLinecap="round" opacity={0.75} />
            ))}
          </svg>
        </At>
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return <At key={i} x={600 + 290 * Math.cos(a + t * 0.2)} y={430 + 270 * Math.sin(a + t * 0.2)} s={pop(t, fps, c("free of eight extremes") + i * 0.1)}><Orb size={34} color={GOLD} /></At>;
        })}
        <At x={600} y={790} o={ramp(t, c("free of eight extremes"), 0.5)}><Glow color={GOLD} size={38}>free of eight extremes</Glow></At>
        <Svg style={{ opacity: ramp(t, c("An extreme is an edge"), 0.5) }}>
          <polygon points="1050,620 1750,620 1640,330 1160,330" fill={`${GREEN}22`} stroke={GREEN} strokeWidth={3} />
          <DrawPath d="M1640 330 L1750 620" p={ramp(t, c("An extreme is an edge") + 0.3, 0.8)} color={GOLD} width={9} len={320} />
        </Svg>
        <At x={1700} y={420} s={pop(t, fps, c("a place where one could stand"))}><Person color={ROSE} size={80} /></At>
        <At x={1400} y={720} o={ramp(t, c("An extreme is an edge"), 0.5)}><Glow color={GOLD} size={36}>an edge: a place to stand</Glow></At>
      </Scene>
      <Scene from={pairsAt - 0.3} to={1e9}>
        {PAIRS.map(([ph, a, b], i) => {
          const x = 390 + i * 380, at = c(ph, 0.1);
          const dy = fall * (420 + rand(i) * 120), rot = fall * (rand(i + 3) - 0.5) * 80;
          return (
            <React.Fragment key={i}>
              <At x={x} y={300 + dy} s={pop(t, fps, at)} r={rot} o={1 - fall}><Chip color={[GOLD, ROSE, TEAL, VIOLET][i]} size={36}>{a}</Chip></At>
              <At x={x} y={440 + dy} s={pop(t, fps, at + 0.4)} r={-rot} o={1 - fall}><Chip color={[GOLD, ROSE, TEAL, VIOLET][i]} size={36}>{b}</Chip></At>
              <At x={x + 120} y={225 + dy} o={ramp(t, where + i * 0.2, 0.4) * (1 - fall)}><Pin color={WARM} /></At>
              <Flow x1={x} y1={480} x2={960} y2={640} color={GOLD} p={center * (1 - take)} />
            </React.Fragment>
          );
        })}
        <At x={960} y={660} o={center * (1 - take)} s={1 - 0.6 * take}><Orb size={90} color={WARM} /></At>
        <At x={960} y={600} o={center * (1 - take)}><Pin color={WARM} size={50} /></At>
        <At x={960} y={760} o={center * (1 - take)}><Glow color={WARM} size={34}>something with whereabouts</Glow></At>
        <Center top={110}><div style={{ opacity: 1 - fall }}><Reveal text="Where is it?" at={where} size={86} color={WARM} top="#FFE3D6" /></div></Center>
        {qs.map(([ph, label], i) => (
          <At key={i} x={[480, 960, 1440][i]} y={580} o={between(t, c(ph, 0.1), c("something with whereabouts") - 0.2, 0.4)}><Glow color={CHALK} size={34}>{label}</Glow></At>
        ))}
        <Center top={700}><div style={{ opacity: ramp(t, c("all eight fall together") + 0.6, 0.5) }}><Glow color={GOLD} size={48} serif>all eight fall together</Glow></div></Center>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. the match
const MatchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Strike a match");
  const strike = ramp(t, t0, 0.8);
  const flame = ramp(t, c("There is a flame"), 0.6);
  const edge = c("look for the edge"), every = c("At every frame"), none = c("At no frame");
  const stripOn = ramp(t, edge, 0.6);
  const up = ramp(t, edge - 0.2, 0.8);
  const frames = 6;
  const stageAt = [c("The match touches the strip"), c("The tip catches"), c("A glow appears")];
  const scan = 330 + ((Math.max(0, t - none) * 260) % 1260);
  const hx = lerp(640, 960, strike), hy = lerp(530, 400, strike);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transformOrigin: "960px 300px", transform: `scale(${1 - 0.45 * up}) translateY(${-150 * up}px)` }}>
        <At x={760} y={560} s={pop(t, fps, t0)}>
          <div style={{ width: 420, height: 90, borderRadius: 10, background: "repeating-linear-gradient(90deg,#5a3a2a 0 6px,#3d271c 6px 12px)", border: `3px solid ${WARM}` }} />
        </At>
        <Svg>
          <line x1={hx} y1={hy} x2={hx + 50} y2={hy + 170} stroke="#d8b47a" strokeWidth={14} strokeLinecap="round" />
          <ellipse cx={hx} cy={hy} rx={16} ry={20} fill="#c0392b" style={{ filter: `drop-shadow(0 0 ${4 + 20 * flame}px ${WARM})` }} />
        </Svg>
        <At x={hx} y={hy - 95} s={flame * 0.7}><Flame /></At>
        <Mist x={hx} y={hy - 160} start={c("There is a flame")} color={GOLD} spread={80} n={10} seed={2} />
      </AbsoluteFill>
      <At x={1450} y={250} o={between(t, c("Surely it was produced"), edge, 0.4)}><Chip color={GOLD} size={40}>produced?</Chip></At>
      {/* film strip */}
      <AbsoluteFill style={{ opacity: stripOn }}>
        <At x={960} y={600}><div style={{ width: 1320, height: 260, background: "#0b0b12cc", border: `3px solid ${DIM}`, borderRadius: 8 }} /></At>
        {Array.from({ length: frames }).map((_, i) => {
          const x = 960 + (i - (frames - 1) / 2) * 215;
          const lit = ramp(t, every + i * 0.2, 0.4);
          const stage = i / (frames - 1);
          const shown = i < 2 ? ramp(t, stageAt[0], 0.4) : i < 4 ? ramp(t, stageAt[1], 0.4) : ramp(t, stageAt[2], 0.4);
          return (
            <At key={i} x={x} y={600} o={0.4 + 0.6 * shown}>
              <div style={{ width: 190, height: 200, borderRadius: 6, border: `2px solid ${lit > 0.5 ? GOLD : CHALK}`, background: "#1a1a28", position: "relative", overflow: "hidden",
                boxShadow: lit > 0.5 ? `0 0 20px ${GOLD}88` : undefined }}>
                <div style={{ position: "absolute", left: 30, top: 140, width: 120, height: 10, borderRadius: 5, background: "#d8b47a", transform: "rotate(-40deg)" }} />
                <div style={{ position: "absolute", left: 120 - 18 * stage, top: 60 - 10 * stage, width: 20 + 50 * stage, height: 20 + 70 * stage, borderRadius: "50% 50% 45% 45%",
                  background: `radial-gradient(circle at 50% 70%, #FFF2B0, #FFB347 50%, transparent 75%)`, opacity: stage, filter: `blur(${2 - stage * 1.5}px)` }} />
              </div>
            </At>
          );
        })}
        <Svg style={{ opacity: ramp(t, none, 0.4) }}>
          <line x1={scan} y1={460} x2={scan} y2={740} stroke={WARM} strokeWidth={5} strokeDasharray="12 8" style={{ filter: `drop-shadow(0 0 8px ${WARM})` }} />
        </Svg>
        <At x={960} y={810} o={between(t, edge + 0.5, every - 0.1, 0.4)}><Glow color={CHALK} size={38}>where is the edge from nothing to flame?</Glow></At>
        <At x={960} y={810} o={ramp(t, every, 0.5) * (1 - ramp(t, none, 0.3))}><Glow color={GOLD} size={38}>at every frame, something is happening</Glow></At>
        <At x={960} y={810} o={ramp(t, none + 0.2, 0.5)}><Glow color={WARM} size={38}>no frame where a flame crosses over</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. the word still works
const ProducedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The word produced still works");
  const lit = c("She lit the fire");
  const falls = c("What falls away");
  const hand = ramp(t, lit + 1.4, 0.6) * 360;
  return (
    <AbsoluteFill>
      <At x={960} y={130} s={pop(t, fps, t0)}><Chip color={GREEN} size={46}>"produced" still works</Chip></At>
      <At x={620} y={430} s={pop(t, fps, lit)} o={1 - ramp(t, falls, 0.5) * 0.7}>
        <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
          <circle r={110} fill="#ffffff0d" stroke={GOLD} strokeWidth={6} />
          {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-95} x2={0} y2={-80} transform={`rotate(${i * 30})`} stroke={CHALK} strokeWidth={4} />)}
          <line x1={0} y1={0} x2={0} y2={-75} stroke={CHALK} strokeWidth={6} strokeLinecap="round" transform={`rotate(${hand})`} />
          <line x1={0} y1={0} x2={0} y2={-50} stroke={GOLD} strokeWidth={8} strokeLinecap="round" transform="rotate(240)" />
        </svg>
      </At>
      <At x={1300} y={420} s={pop(t, fps, lit + 0.5)} o={1 - ramp(t, falls, 0.5) * 0.7}><Flame size={0.8} /></At>
      <Svg style={{ opacity: ramp(t, lit + 0.5, 0.4) * (1 - ramp(t, falls, 0.5) * 0.7) }}>
        {[[-60, 20], [60, -20]].map(([dx, r], i) => <rect key={i} x={1300 + dx - 80} y={540} width={160} height={24} rx={10} fill="#7a5a35" stroke={GOLD} strokeWidth={2} transform={`rotate(${r} ${1300 + dx} 552)`} />)}
      </Svg>
      <At x={960} y={700} o={between(t, lit + 0.6, falls, 0.4)}><Glow color={GREEN} size={40}>true, within before and after</Glow></At>
      <At x={960} y={650} o={ramp(t, falls, 0.5)}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 30 }}>
          <Chip color={WARM} size={36}>a self-standing cause</Chip>
          <Glow color={DIM} size={50}>→</Glow>
          <Chip color={WARM} size={36}>a self-standing flame</Chip>
          <Strike at={c("a self-standing cause") + 1.0} />
        </div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. the lamp
const LampScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("switch off a lamp");
  const on = 1 - ramp(t, t0 + 0.6, 0.4) + ramp(t, c("Switch it on"), 0.4);
  const light = Math.min(1, Math.max(0, on));
  const qs: [string, number, number, string][] = [["Not back into the bulb", 560, 230, "the bulb?"], ["the corners of the room", 1420, 250, "the corners?"]];
  const wires = c("The wires carry no light");
  const noAns = c("The question has no answer");
  return (
    <AbsoluteFill>
      <At x={960} y={450} s={pop(t, fps, t0 - 0.5, 14)}>
        <div style={{ width: 1400, height: 680, borderRadius: 16, border: `3px solid ${DIM}`, position: "relative", overflow: "hidden",
          background: `radial-gradient(60% 70% at 37% 30%, rgba(255,230,160,${0.45 * light}), rgba(20,20,40,0.6) 70%)` }}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 140, background: `rgba(120,90,60,${0.12 + 0.2 * light})`, borderTop: `2px solid ${DIM}` }} />
        </div>
      </At>
      <Svg>
        <line x1={760} y1={330} x2={760} y2={720} stroke={CHALK} strokeWidth={6} />
        <ellipse cx={760} cy={725} rx={70} ry={14} fill={DIM} />
        <path d="M680 330 L840 330 L800 230 L720 230 Z" fill={`${GOLD}${light > 0.5 ? "88" : "22"}`} stroke={GOLD} strokeWidth={4} />
        <circle cx={760} cy={340} r={22} fill={light > 0.5 ? "#FFF6D0" : "#555"} style={{ filter: light > 0.5 ? `drop-shadow(0 0 30px ${GOLD})` : undefined }} />
        <DrawPath d="M760 720 C 760 770, 1000 770, 1050 760 L1640 760" p={ramp(t, wires, 1.0)} color={TEAL} width={5} len={1000} />
        <polygon points={`760,340 400,790 1120,790`} fill={`rgba(255,240,180,${0.12 * light})`} />
      </Svg>
      {qs.map(([ph, x, y, label], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} o={ramp(t, c(ph, 0.1), 0.4)}><Glow color={CHALK} size={36}>{label}</Glow></At>
          <Cross x={x} y={y} size={70} at={c(ph) + 0.8} />
        </React.Fragment>
      ))}
      <At x={1300} y={690} o={ramp(t, wires, 0.5)}><Glow color={TEAL} size={34}>the wires? no light in them</Glow></At>
      <At x={1150} y={460} s={pop(t, fps, c("Where did the light go"))} o={1 - ramp(t, c("never had whereabouts"), 1.2)}>
        <Glow color={GOLD} size={80} serif>where?</Glow>
      </At>
      <Center top={60}><div style={{ opacity: ramp(t, noAns, 0.5) }}><Glow color={CHALK} size={46}>"where?" has no answer</Glow></div></Center>
      <At x={1150} y={560} o={ramp(t, c("never had whereabouts"), 0.6)}>
        <div style={{ position: "relative", display: "inline-block" }}><Pin color={WARM} size={60} /><Cross x={30} y={40} size={80} at={c("never had whereabouts") + 0.3} /></div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. not nihilism
const NihilScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("This is not nihilism");
  const share = c("share one mistake");
  const base = ramp(t, c("to exist is to exist"), 0.6);
  const drop = ramp(t, c("Drop that"), 1.4);
  const neither = ramp(t, c("neither follows"), 1.0);
  return (
    <AbsoluteFill>
      <At x={620} y={380 + drop * 40} s={pop(t, fps, t0 + 0.2)} o={1 - neither} r={-drop * 6}>
        <div style={{ padding: "26px 36px", borderRadius: 18, border: `3px solid ${GOLD}`, background: `${GOLD}22`, boxShadow: `0 0 30px ${GOLD}66` }}>
          <Glow color={GOLD} size={46} serif>substantialism</Glow><Glow color={CHALK} size={30}>so things have essences</Glow>
        </div>
      </At>
      <At x={1300} y={380 + drop * 40} s={pop(t, fps, t0)} o={1 - neither} r={drop * 6}>
        <div style={{ padding: "26px 36px", borderRadius: 18, border: `3px solid ${VIOLET}`, background: `${VIOLET}22`, boxShadow: `0 0 30px ${VIOLET}66` }}>
          <Glow color={VIOLET} size={46} serif>nihilism</Glow><Glow color={CHALK} size={30}>so nothing exists</Glow>
        </div>
      </At>
      <Flow x1={620} y1={470} x2={900} y2={600} color={WARM} p={ramp(t, share, 0.6) * (1 - drop)} />
      <Flow x1={1300} y1={470} x2={1020} y2={600} color={WARM} p={ramp(t, share, 0.6) * (1 - drop)} />
      <At x={960 - drop * 40} y={640 + drop * 220} o={base * (1 - drop)} r={-drop * 6}>
        <div style={{ width: 1000, height: 70, borderRadius: 12, background: `linear-gradient(90deg, ${WARM}44, ${WARM}cc, ${WARM}44)`, boxShadow: `0 0 30px ${WARM}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: CHALK }}>to exist is to exist from its own side</div>
      </At>
      <At x={960} y={170} o={ramp(t, share, 0.5) * (1 - ramp(t, c("Drop that"), 0.4))}><Glow color={WARM} size={40}>one shared mistake</Glow></At>
      <Center top={420}><div style={{ opacity: neither }}><Reveal text="neither follows" at={c("neither follows") + 0.3} size={86} /></div></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The flame, the light");
  const vivid = ramp(t, c("Vivid, working"), 1.0);
  const items = [
    { at: t0, x: 520, node: <Flame size={0.8} boost={vivid} />, col: WARM },
    { at: t0 + 0.6, x: 960, node: <div style={{ width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, #FFF6D0, ${GOLD}88 40%, transparent 70%)` }} />, col: GOLD },
    { at: c("a passing thought"), x: 1400, node: <svg width={220} height={170} viewBox="0 0 170 140" style={{ filter: `drop-shadow(0 0 12px ${VIOLET})` }}><path d="M30 90 C 0 90, 0 40, 40 40 C 45 5, 110 5, 115 35 C 160 30, 165 90, 130 92 Z" fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={4} /></svg>, col: VIOLET },
  ];
  const labels = ["a flame", "a light", "a passing thought"];
  return (
    <AbsoluteFill>
      {items.map((it, i) => {
        const breathe = 0.85 + 0.15 * Math.sin(t * 1.3 + i * 2);
        return (
          <React.Fragment key={i}>
            <At x={it.x} y={400} s={pop(t, fps, it.at, 14)} o={breathe}>{it.node}</At>
            <At x={it.x} y={600} o={ramp(t, it.at + 0.4, 0.5)}><Glow color={it.col} size={34}>{labels[i]}</Glow></At>
            <Mist x={it.x} y={480} start={c("They come from nowhere")} color={it.col} spread={160} n={10} seed={i * 11} />
          </React.Fragment>
        );
      })}
      <At x={960} y={130} o={vivid}><Glow color={GREEN} size={40}>vivid, working, reliably named</Glow></At>
      <Center top={710}><Reveal text="from nowhere, to nowhere" at={c("They come from nowhere")} size={76} /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["rain", 0], ["seek", c("search for the rainbow itself", 0.6)], ["chariot", c("The Indian philosopher", 0.6)],
    ["extremes", c("the founder of the Middle Way", 1.6)], ["match", c("Strike a match", 0.6)], ["lamp", c("switch off a lamp", 0.6)],
    ["nihil", c("This is not nihilism", 0.6)], ["close", c("The flame, the light", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The Indian philosopher", 0.9)], <RainbowScene />],
    [S("The Indian philosopher", "the founder of the Middle Way", 0.5, 2.0), <ChariotScene />],
    [S("the founder of the Middle Way", "Strike a match", 1.6), <ExtremesScene />],
    [S("Strike a match", "The word produced still works"), <MatchScene />],
    [S("The word produced still works", "switch off a lamp"), <ProducedScene />],
    [S("switch off a lamp", "This is not nihilism", 0.9), <LampScene />],
    [S("This is not nihilism", "The flame, the light"), <NihilScene />],
    [S("The flame, the light", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
