// Bonus: Death and Continuity. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb, PictureFrame, ROSE, Reveal,
  Ring, Scene, SERIF, Snowflake, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A log burns", "only ash", "We tell this as one story", "wood-stuff was there first", "travelled forward in time",
  "something carried in between",
  "The Zen master", "does not return to being firewood", "ash as after",
  "rests completely in its own", "Ash rests completely", "before and after are cut off", "winter becomes spring",
  "Winter is wholly winter", "Spring is wholly spring",
  "nothing is carried across", "not ash waiting to happen", "not destroyed firewood", "lacking nothing",
  "not tiny solid atoms", "They too are designated", "Time is not a river", "being-time", "how each appearance is",
  "Life and death, he said", "Life does not become death", "Life is completely life", "Death is completely death", "No passenger rides",
  "We rarely see it", "a light that is on or off", "Sleep and anaesthesia", "switch thrown for good",
  "absence is never absolute", "in some frame", "In dreamless sleep", "the body goes on", "A quieter configuration",
  "Nothing has been destroyed",
  "who wakes up", "Think of a candle", "flame at midnight", "the same candle", "No flame-substance",
  "the great Tibetan teacher", "the mere I", "body and mind", "neither of them", "does not stand apart",
  "Derek Parfit", "a stream of events", "the events be what really exists", "That is a lower floor", "finds no lower floor",
  "The events, too",
  "None of this weakens", "A fixed essence", "promises can be kept", "lives can turn",
  "And what of death", "Medicine, law", "Each is valid there", "None finds a death", "no substance was there", "Neither an eternal soul",
  "final void",
  "Much of our dread", "falling into nothing", "loosens its grip",
  "Love, care and sorrow", "Like firewood, like ash", "each moment is complete",
];

const M = {
  fire: { a: "rgba(170,90,40,0.5)", b: "rgba(110,50,60,0.4)", c: "rgba(170,120,50,0.35)" },
  dogen: { a: "rgba(90,60,140,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(40,90,120,0.3)" },
  season: { a: "rgba(60,130,170,0.45)", b: "rgba(120,160,90,0.35)", c: "rgba(170,120,60,0.3)" },
  time: { a: "rgba(30,120,140,0.5)", b: "rgba(60,60,150,0.45)", c: "rgba(150,120,60,0.3)" },
  life: { a: "rgba(60,140,100,0.45)", b: "rgba(70,50,130,0.45)", c: "rgba(150,110,50,0.3)" },
  sleep: { a: "rgba(30,40,110,0.55)", b: "rgba(70,40,120,0.45)", c: "rgba(40,70,110,0.3)" },
  candle: { a: "rgba(160,100,40,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.35)" },
  person: { a: "rgba(110,60,150,0.45)", b: "rgba(160,80,110,0.35)", c: "rgba(30,110,130,0.3)" },
  floor: { a: "rgba(40,90,130,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(90,60,150,0.3)" },
  death: { a: "rgba(60,50,110,0.5)", b: "rgba(40,90,110,0.4)", c: "rgba(150,110,60,0.3)" },
  warm: { a: "rgba(170,100,70,0.45)", b: "rgba(160,80,110,0.4)", c: "rgba(170,130,60,0.4)" },
};

// ---------------------------------------------------------------- small drawings
const Logs: React.FC<{ s?: number; char?: number }> = ({ s = 1, char = 0 }) => {
  const wood = char > 0.5 ? "#3b2e28" : "#8a5a34";
  return (
    <svg width={260 * s} height={120 * s} viewBox="0 0 260 120" style={{ filter: `drop-shadow(0 0 10px ${GOLD}66)` }}>
      <rect x={20} y={40} width={220} height={40} rx={20} fill={wood} stroke="#c8935c" strokeWidth={3} transform="rotate(-12 130 60)" />
      <rect x={20} y={40} width={220} height={40} rx={20} fill={wood} stroke="#c8935c" strokeWidth={3} transform="rotate(12 130 60)" />
      {[60, 200].map((x) => <circle key={x} cx={x} cy={60} r={14} fill="#c8935c" opacity={0.6} transform={`rotate(${x < 100 ? -12 : 12} 130 60)`} />)}
    </svg>
  );
};

const Fire: React.FC<{ s?: number; boost?: number }> = ({ s = 1, boost = 0 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (5 + k) + k * 1.7) * (8 + 6 * boost);
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  const inner = `M0 ${-60 - n(2) * 0.6} C 25 -20, 38 20, 30 55 C 22 85, -22 85, -30 55 C -38 20, -25 -20, 0 ${-60 - n(2) * 0.6} Z`;
  return (
    <svg width={260 * s} height={340 * s} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fire90" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fire90)" /><path d={inner} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};

const Ash: React.FC<{ s?: number }> = ({ s = 1 }) => {
  const { t } = useT();
  return (
    <svg width={260 * s} height={120 * s} viewBox="0 0 260 120">
      <path d="M20 110 Q 70 40 130 45 Q 190 40 240 110 Z" fill="#6d6a72" stroke="#a5a1ab" strokeWidth={3} />
      {Array.from({ length: 9 }).map((_, i) => (
        <circle key={i} cx={60 + rand(i) * 140} cy={70 + rand(i + 3) * 30} r={3 + rand(i + 1) * 3} fill={WARM}
          opacity={0.35 + 0.4 * Math.sin(t * 2 + i)} style={{ filter: `drop-shadow(0 0 4px ${WARM})` }} />
      ))}
    </svg>
  );
};

const Blossom: React.FC = () => (
  <svg width={110} height={110} viewBox="-55 -55 110 110" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    {Array.from({ length: 5 }).map((_, i) => <ellipse key={i} cx={0} cy={-22} rx={14} ry={22} fill={`${ROSE}aa`} transform={`rotate(${i * 72})`} />)}
    <circle r={10} fill={GOLD} />
  </svg>
);
const Leaf: React.FC = () => (
  <svg width={110} height={110} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }}>
    <path d="M15 85 C 15 40, 45 15, 88 12 C 85 55, 60 85, 15 85 Z" fill={`${WARM}99`} stroke={WARM} strokeWidth={3} />
    <path d="M15 85 L 70 30" stroke={GOLD} strokeWidth={2.5} />
  </svg>
);

const Candle: React.FC<{ melt: number }> = ({ melt }) => {
  const h = 260 - 150 * melt;
  // the flame (Fire at scale 0.5 is 130x170, its base about 30px above its bottom edge) sits on the wick
  return (
    <div style={{ position: "relative", width: 160, height: 520 }}>
      <div style={{ position: "absolute", left: 80 - 65, bottom: 40 + h - 22, width: 130, height: 170 }}><Fire s={0.5} /></div>
      <div style={{ position: "absolute", left: 78, bottom: 40 + h - 4, width: 4, height: 18, background: "#3a2a1a" }} />
      <div style={{ position: "absolute", left: 45, bottom: 40, width: 70, height: h, borderRadius: "10px 10px 4px 4px",
        background: "linear-gradient(90deg, #e9dcc0, #fff6e2 45%, #d8c7a4)", boxShadow: `0 0 40px ${GOLD}55` }} />
      <div style={{ position: "absolute", left: 20, bottom: 20, width: 120, height: 24, borderRadius: 12, background: "#8a6a3a", border: `2px solid ${GOLD}` }} />
    </div>
  );
};

const Clock: React.FC<{ hours: number }> = ({ hours }) => (
  <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <circle r={105} fill="#ffffff0c" stroke={ICE} strokeWidth={4} />
    {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-92} x2={0} y2={-80} stroke={ICE} strokeWidth={3} transform={`rotate(${i * 30})`} />)}
    <line x1={0} y1={0} x2={0} y2={-55} stroke={CHALK} strokeWidth={7} strokeLinecap="round" transform={`rotate(${hours * 30})`} />
    <line x1={0} y1={0} x2={0} y2={-82} stroke={GOLD} strokeWidth={4} strokeLinecap="round" transform={`rotate(${hours * 360})`} />
    <circle r={7} fill={GOLD} />
  </svg>
);

const Bulb: React.FC<{ on: number }> = ({ on }) => (
  <svg width={220} height={300} viewBox="0 0 220 300" style={{ overflow: "visible", filter: on > 0.05 ? `drop-shadow(0 0 ${40 * on}px #FFE9A8)` : undefined }}>
    <circle cx={110} cy={110} r={85} fill={`rgba(255,233,168,${0.08 + 0.8 * on})`} stroke={CHALK} strokeWidth={4} />
    <path d="M80 190 L80 230 L140 230 L140 190" fill="#ffffff10" stroke={CHALK} strokeWidth={4} />
    {[240, 255, 270].map((y) => <line key={y} x1={84} x2={136} y1={y} y2={y} stroke={DIM} strokeWidth={6} strokeLinecap="round" />)}
    <path d="M90 150 Q110 100 130 150" fill="none" stroke={on > 0.5 ? "#fff" : DIM} strokeWidth={4} />
  </svg>
);

const Switch: React.FC<{ off: number }> = ({ off }) => (
  <div style={{ width: 120, height: 190, borderRadius: 20, border: `3px solid ${CHALK}`, background: "#ffffff0d", position: "relative" }}>
    <div style={{ position: "absolute", left: 35, top: 25 + 80 * off, width: 50, height: 60, borderRadius: 10,
      background: off < 0.5 ? GOLD : DIM, boxShadow: off < 0.5 ? `0 0 20px ${GOLD}` : undefined }} />
    <div style={{ position: "absolute", left: 0, right: 0, top: -40, textAlign: "center", fontFamily: "SourceSans", fontSize: 28, color: CHALK }}>
      {off < 0.5 ? "on" : "off"}
    </div>
  </div>
);

const Moon: React.FC = () => (
  <svg width={160} height={160} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 16px ${ICE})` }}>
    <path d="M65 10 A 42 42 0 1 0 90 72 A 34 34 0 1 1 65 10 Z" fill={`${ICE}cc`} />
  </svg>
);

const Sapling: React.FC<{ p: number }> = ({ p }) => (
  <svg width={220} height={260} viewBox="0 0 220 260" style={{ overflow: "visible" }}>
    <DrawPath d="M110 250 C 110 200, 116 150, 110 90" p={p} color={GREEN} width={8} len={180} />
    {[[110, 90, 40], [80, 130, 28], [140, 125, 30], [95, 70, 24], [128, 72, 22]].map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r * ramp(p, 0.5 + i * 0.08, 0.3)} fill={`${GREEN}66`} stroke={GREEN} strokeWidth={2} />
    ))}
  </svg>
);

// a gold frame with a drawing centred inside
const Panel: React.FC<{ x: number; y: number; w: number; h: number; s?: number; o?: number; glow?: number; tag?: string; children: React.ReactNode }> =
  ({ x, y, w, h, s = 1, o = 1, glow = 0, tag, children }) => (
    <At x={x} y={y} s={s} o={o}>
      <div style={{ position: "relative", width: w, height: h, borderRadius: 8, boxShadow: glow > 0 ? `0 0 ${60 * glow}px ${GOLD}` : undefined }}>
        <PictureFrame x={w / 2} y={h / 2} w={w} h={h} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{children}</div>
        {tag && <div style={{ position: "absolute", left: 0, right: 0, top: h + 14, textAlign: "center" }}><Glow color={GOLD} size={34}>{tag}</Glow></div>}
      </div>
    </At>
  );

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 70 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

// ---------------------------------------------------------------- scenes
const FireScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ash = ramp(t, c("only ash", 0.6), 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={340} o={1 - ash} s={pop(t, fps, c("A log burns", 0.4))}><Fire s={1.1} /></At>
      <At x={960} y={560} o={1 - ash} s={pop(t, fps, c("A log burns", 0.4))}><Logs s={1.4} char={ash} /></At>
      <At x={960} y={570} o={ash}><Ash s={1.5} /></At>
      <Mist x={960} y={500} start={c("only ash", 0.4)} color="#9a96a3" spread={160} n={16} />
    </AbsoluteFill>
  );
};

const StoryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("We tell this as one story");
  const go = c("travelled forward in time");
  const u = ramp(t, go, 3.2);
  const x = 470 + (1450 - 470) * u;
  return (
    <AbsoluteFill>
      <Flow x1={360} y1={640} x2={1560} y2={640} color={DIM} p={ramp(t, t0, 1.0)} width={4} />
      <Svg><polygon points="1560,640 1530,624 1530,656" fill={DIM} opacity={ramp(t, t0 + 0.6, 0.4)} /></Svg>
      <At x={420} y={700} o={ramp(t, t0 + 0.4, 0.5)}><Glow color={DIM} size={34}>before</Glow></At>
      <At x={1500} y={700} o={ramp(t, t0 + 0.4, 0.5)}><Glow color={DIM} size={34}>after</Glow></At>
      <At x={470} y={480} s={pop(t, fps, c("wood-stuff was there first"))}><Logs s={0.9} /></At>
      <At x={1450} y={490} s={pop(t, fps, go + 2.6)}><Ash s={0.9} /></At>
      <At x={x} y={600} s={pop(t, fps, c("wood-stuff was there first") + 0.4)}><Orb size={54} color={GOLD} /></At>
      <At x={x} y={545} o={ramp(t, c("wood-stuff was there first") + 0.6, 0.5)}><Glow color={GOLD} size={30}>wood-stuff</Glow></At>
      <Ring x={x} y={600} p={ramp(t, c("something carried in between"), 1.2)} r0={30} r1={110} color={GOLD} />
      <At x={960} y={300} o={ramp(t, c("something carried in between"), 0.5)}><Chip color={GOLD} size={38}>carried across?</Chip></At>
    </AbsoluteFill>
  );
};

const DogenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The Zen master");
  const noRet = c("does not return to being firewood");
  const after = c("ash as after");
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 90, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="Dōgen" at={t0} size={100} />
      </div>
      <At x={620} y={470} s={pop(t, fps, t0 + 1.2)}><Logs s={0.9} /></At>
      <At x={1300} y={470} s={pop(t, fps, t0 + 1.8)}><Ash s={0.9} /></At>
      <Flow x1={790} y1={450} x2={1130} y2={450} color={GOLD} p={ramp(t, t0 + 1.6, 0.6)} />
      <Svg><polygon points="1130,450 1104,436 1104,464" fill={GOLD} opacity={ramp(t, t0 + 2.1, 0.3)} /></Svg>
      <Svg style={{ opacity: ramp(t, noRet, 0.5) }}>
        <path d="M1130 520 Q 960 600 790 520" fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="10 10" />
      </Svg>
      <Crossed x={960} y={575} at={noRet + 0.8} size={40} />
      <At x={620} y={730} o={ramp(t, after - 0.6, 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={36}>before</Chip><Strike at={after + 0.6} /></div></At>
      <At x={1300} y={730} o={ramp(t, after - 0.6, 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={36}>after</Chip><Strike at={after + 0.9} /></div></At>
    </AbsoluteFill>
  );
};

const PositionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cut = ramp(t, c("before and after are cut off"), 0.8);
  return (
    <AbsoluteFill>
      <Panel x={620} y={440} w={460} h={340} s={pop(t, fps, c("rests completely in its own"))} glow={between(t, c("rests completely in its own") + 0.5, c("Ash rests completely"))} tag="firewood">
        <div style={{ position: "relative", height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ marginBottom: -40 }}><Fire s={0.45} /></div><Logs s={0.9} />
        </div>
      </Panel>
      <Panel x={1300} y={440} w={460} h={340} s={pop(t, fps, c("Ash rests completely"))} glow={between(t, c("Ash rests completely") + 0.5, c("before and after are cut off"))} tag="ash">
        <Ash s={1.1} />
      </Panel>
      <Svg style={{ opacity: cut }}>
        {[930, 990].map((x) => <line key={x} x1={x} y1={300 + (1 - cut) * 140} x2={x} y2={580 - (1 - cut) * 140} stroke={ICE} strokeWidth={5} style={{ filter: `drop-shadow(0 0 10px ${ICE})` }} />)}
      </Svg>
      <At x={960} y={760} o={cut}><Glow color={ICE} size={36}>before and after cut off</Glow></At>
    </AbsoluteFill>
  );
};

const SeasonScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("winter becomes spring", 0.4);
  const items = [
    { x: 420, tag: "winter", node: <Snowflake size={120} rot={t * 20} />, at: t0, glow: between(t, c("Winter is wholly winter"), c("Spring is wholly spring")) },
    { x: 780, tag: "spring", node: <Blossom />, at: t0 + 0.3, glow: between(t, c("Spring is wholly spring"), c("Spring is wholly spring") + 2) },
    { x: 1140, tag: "summer", node: <Sun size={120} rot={t * 15} />, at: c("Spring is wholly spring") + 1.2, glow: 0 },
    { x: 1500, tag: "autumn", node: <Leaf />, at: c("Spring is wholly spring") + 1.5, glow: 0 },
  ];
  return (
    <AbsoluteFill>
      {items.map((it, i) => (
        <Panel key={i} x={it.x} y={430} w={300} h={260} s={pop(t, fps, it.at)} glow={it.glow} tag={it.tag}>{it.node}</Panel>
      ))}
      <Flow x1={585} y1={430} x2={615} y2={430} color={DIM} p={ramp(t, t0 + 0.5, 0.4)} width={4} pulses={false} />
      <Crossed x={600} y={430} at={t0 + 1.3} size={34} />
    </AbsoluteFill>
  );
};

const CarryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("nothing is carried across", 0.4);
  const u = ramp(t, t0 + 0.3, 2.0);
  const whole = ramp(t, c("lacking nothing"), 0.8);
  return (
    <AbsoluteFill>
      <Panel x={620} y={420} w={460} h={340} s={pop(t, fps, t0 - 0.2)} glow={whole} tag="firewood">
        <div style={{ height: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ marginBottom: -40 }}><Fire s={0.45} /></div><Logs s={0.9} />
        </div>
      </Panel>
      <Panel x={1300} y={420} w={460} h={340} s={pop(t, fps, t0)} glow={whole} tag="ash"><Ash s={1.1} /></Panel>
      <At x={850 + 220 * u} y={420} o={Math.sin(Math.min(u, 1) * Math.PI) * 0.9}><Orb size={50} color={GOLD} /></At>
      <At x={620} y={770} o={ramp(t, c("not ash waiting to happen"), 0.4)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={30}>ash waiting to happen</Chip><Strike at={c("not ash waiting to happen") + 0.8} /></div>
      </At>
      <At x={1300} y={770} o={ramp(t, c("not destroyed firewood"), 0.4)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={30}>destroyed firewood</Chip><Strike at={c("not destroyed firewood") + 0.8} /></div>
      </At>
      <At x={960} y={170} o={whole}><Glow color={GOLD} size={46} serif>complete, lacking nothing</Glow></At>
    </AbsoluteFill>
  );
};

const BeingTimeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const atoms = c("not tiny solid atoms", 0.4);
  const des = ramp(t, c("They too are designated"), 0.8);
  const river = c("Time is not a river");
  const rOut = ramp(t, c("being-time") - 0.5, 0.6);
  const wave = (x: number, k: number) => 620 + k + 26 * Math.sin(x / 140 - t * 1.6);
  const xs = Array.from({ length: 50 }, (_, i) => 360 + (i * 1200) / 49);
  const top = xs.map((x, i) => `${i ? "L" : "M"}${x} ${wave(x, -45)}`).join(" ");
  const bot = xs.slice().reverse().map((x) => `L${x} ${wave(x, 45)}`).join(" ");
  return (
    <AbsoluteFill>
      {[0, 1, 2, 3, 4].map((i) => (
        <At key={i} x={560 + i * 200} y={250} s={pop(t, fps, atoms + i * 0.12)} o={1 - rOut * 0.6}>
          <div style={{ width: 110, height: 110, borderRadius: 12, border: `3px ${des > 0.5 ? "dashed" : "solid"} ${des > 0.5 ? GOLD : CHALK}`,
            background: `rgba(200,200,220,${0.35 * (1 - des)})`, boxShadow: des > 0.5 ? `0 0 20px ${GOLD}66` : undefined }} />
        </At>
      ))}
      <At x={960} y={360} o={des * (1 - rOut)}><Glow color={GOLD} size={40} serif>designated too</Glow></At>
      <Svg style={{ opacity: ramp(t, river, 0.6) * (1 - rOut) }}>
        <path d={`${top} ${bot} Z`} fill="rgba(42,167,201,0.35)" stroke={ICE} strokeWidth={3} />
      </Svg>
      <Crossed x={960} y={620} at={river + 1.2} size={60} />
      <div style={{ position: "absolute", top: 520, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="being-time" at={c("being-time")} size={110} color={ICE} top="#F0FBFF" />
      </div>
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2, x = 960 + 420 * Math.cos(a), y = 590 + 170 * Math.sin(a);
        return <At key={i} x={x} y={y} s={pop(t, fps, c("how each appearance is") + i * 0.06)}><Orb size={26 + (i % 3) * 8} color={[TEAL, GOLD, VIOLET, ROSE][i % 4]} /></At>;
      })}
    </AbsoluteFill>
  );
};

const LifeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Life and death, he said", 0.4);
  const pass = c("No passenger rides");
  const u = ramp(t, pass, 1.3), gone = ramp(t, pass + 1.3, 0.8);
  const ox = 620 + (1300 - 620) * u, oy = 260 - Math.sin(u * Math.PI) * 120;
  return (
    <AbsoluteFill>
      <Panel x={620} y={480} w={440} h={340} s={pop(t, fps, t0)} glow={between(t, c("Life is completely life"), c("Death is completely death"))} tag="life">
        <Sapling p={ramp(t, t0 + 0.3, 2.0)} />
      </Panel>
      <Panel x={1300} y={480} w={440} h={340} s={pop(t, fps, t0 + 0.3)} glow={between(t, c("Death is completely death"), pass)} tag="death">
        <Orb size={120} color={VIOLET} />
      </Panel>
      <Flow x1={850} y1={480} x2={1070} y2={480} color={DIM} p={ramp(t, c("Life does not become death"), 0.5)} width={4} pulses={false} />
      <Crossed x={960} y={480} at={c("Life does not become death") + 0.9} size={40} />
      <At x={ox} y={oy} s={pop(t, fps, pass - 0.2)} o={1 - gone}><Orb size={56} color={GOLD} /></At>
      <At x={ox} y={oy - 55} o={ramp(t, pass, 0.4) * (1 - gone)}><Glow color={GOLD} size={30}>passenger</Glow></At>
      <Crossed x={1300} y={150} at={pass + 1.0} size={50} />
    </AbsoluteFill>
  );
};

const SwitchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("We rarely see it", 0.4);
  const off = ramp(t, c("Sleep and anaesthesia") + 0.4, 0.3);
  const good = c("switch thrown for good");
  return (
    <AbsoluteFill>
      <At x={760} y={420} s={pop(t, fps, t0 + 0.4)}><Bulb on={1 - off} /></At>
      <At x={1180} y={440} s={pop(t, fps, t0 + 0.8)}><Switch off={off} /></At>
      <At x={760} y={740} o={ramp(t, c("Sleep and anaesthesia"), 0.5)}><Chip color={DIM} size={32}>sleep · anaesthesia</Chip></At>
      <At x={1180} y={740} o={ramp(t, good, 0.5)}><Chip color={WARM} size={32}>death?</Chip></At>
      <At x={960} y={170} o={ramp(t, t0, 0.6)}><Glow color={CHALK} size={42}>awareness as a light</Glow></At>
    </AbsoluteFill>
  );
};

const SleepScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("absence is never absolute", 0.4);
  const body = ramp(t, c("the body goes on"), 0.6);
  const xs = Array.from({ length: 120 }, (_, i) => i);
  const pulse = xs.map((i) => {
    const x = 480 + i * 8, ph = (i + t * 30) % 40;
    const y = 640 - (ph > 18 && ph < 22 ? (ph === 20 ? 60 : 25) : 0) - 6 * Math.sin(i / 6 + t);
    return `${i ? "L" : "M"}${x} ${y}`;
  }).join(" ");
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={44} serif>absence is never absolute</Glow></At>
      <At x={960} y={260} o={ramp(t, c("in some frame"), 0.5)}><Chip color={ICE} size={32}>absence of something, in some frame</Chip></At>
      <At x={960} y={430} s={pop(t, fps, c("In dreamless sleep"))}><Moon /></At>
      <Svg style={{ opacity: body }}><path d={pulse} fill="none" stroke={TEAL} strokeWidth={4} style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} /></Svg>
      <At x={1500} y={600} o={body}><Glow color={TEAL} size={32}>the body goes on</Glow></At>
      <At x={960} y={760} o={ramp(t, c("A quieter configuration"), 0.6)}><Glow color={ICE} size={46} serif>a quieter configuration</Glow></At>
      <Ring x={960} y={430} p={ramp(t, c("Nothing has been destroyed"), 1.6)} r0={90} r1={300} color={GOLD} />
    </AbsoluteFill>
  );
};

const CandleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Think of a candle", 0.3);
  const run = ramp(t, c("flame at midnight") - 0.5, 4.0, );
  const same = c("the same candle");
  const sub = c("No flame-substance");
  const u = ramp(t, sub, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("who wakes up", 0.5), 0.5)}><Chip color={GOLD} size={40}>who wakes up?</Chip></At>
      <At x={760} y={510} s={pop(t, fps, t0)}><Candle melt={run} /></At>
      <At x={1250} y={430} s={pop(t, fps, t0 + 0.4)}><Clock hours={7 + 5 * run} /></At>
      <At x={1250} y={600} o={ramp(t, c("flame at midnight") - 0.3, 0.5)}><Glow color={ICE} size={32}>dusk → midnight</Glow></At>
      <At x={960} y={790} o={ramp(t, same, 0.5)}><Glow color={GOLD} size={44} serif>“the same candle”</Glow></At>
      <At x={760 + 490 * u} y={300} o={Math.sin(Math.min(u, 1) * Math.PI) * 0.8}><div style={{ width: 40, height: 40, borderRadius: "50%", border: `3px dashed ${WARM}` }} /></At>
      <Crossed x={1005} y={300} at={sub + 1.0} size={34} />
    </AbsoluteFill>
  );
};

const MereIScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("the great Tibetan teacher", 0.4);
  const bm = c("body and mind");
  const apart = c("does not stand apart");
  const drift = ramp(t, apart, 1.5);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 100, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="the mere I" at={c("the mere I")} size={110} />
      </div>
      <At x={620} y={520} s={pop(t, fps, bm)}><Orb size={130} color={ROSE} /><Glow color={ROSE} size={34} style={{ marginTop: 10 }}>body</Glow></At>
      <At x={1300} y={520} s={pop(t, fps, bm + 0.25)}><Orb size={130} color={VIOLET} /><Glow color={VIOLET} size={34} style={{ marginTop: 10 }}>mind</Glow></At>
      <Flow x1={700} y1={480} x2={900} y2={480} color={GOLD} p={ramp(t, bm + 0.5, 0.6)} dash />
      <Flow x1={1220} y1={480} x2={1020} y2={480} color={GOLD} p={ramp(t, bm + 0.5, 0.6)} dash />
      <At x={960} y={480} s={pop(t, fps, bm + 0.4)}><Glow color={GOLD} size={80} serif>I</Glow></At>
      <At x={620} y={720} o={ramp(t, c("neither of them"), 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>I = body</Chip><Strike at={c("neither of them") + 0.4} /></div></At>
      <At x={1300} y={720} o={ramp(t, c("neither of them"), 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>I = mind</Chip><Strike at={c("neither of them") + 0.7} /></div></At>
      <At x={960} y={760 - 120 * drift} o={between(t, apart, apart + 2.5, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={WARM} size={30}>an I standing apart</Chip><Strike at={apart + 1.2} /></div>
      </At>
    </AbsoluteFill>
  );
};

const FloorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Derek Parfit", 0.3);
  const stream = ramp(t, c("a stream of events"), 1.2);
  const real = ramp(t, c("the events be what really exists"), 0.8);
  const lower = c("That is a lower floor");
  const fall = ramp(t, c("finds no lower floor") + 0.3, 1.4);
  const des = ramp(t, c("The events, too"), 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={44} serif>Derek Parfit</Glow></At>
      <At x={960} y={300} s={pop(t, fps, t0 + 0.3)} o={1 - stream}>
        <div style={{ width: 640, height: 90, borderRadius: 12, background: `linear-gradient(90deg, ${VIOLET}55, ${ROSE}55)`, border: `3px solid ${VIOLET}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 48, color: CHALK }}>the person</div>
      </At>
      {Array.from({ length: 26 }).map((_, i) => {
        const x0 = 680 + rand(i) * 560, y0 = 280 + rand(i + 2) * 50;
        const x1 = 620 + (i % 13) * 56, y1 = 520 + Math.floor(i / 13) * 50;
        const x = x0 + (x1 - x0) * stream, y = y0 + (y1 - y0) * stream + fall * (240 + rand(i + 4) * 120);
        return <div key={i} style={{ position: "absolute", left: x - 14, top: y - 14, width: 28, height: 28, borderRadius: "50%", opacity: stream * (1 - fall * 0.9),
          background: real > 0.5 && des < 0.5 ? GOLD : TEAL, boxShadow: `0 0 12px ${real > 0.5 && des < 0.5 ? GOLD : TEAL}`,
          border: des > 0.5 ? `3px dashed ${CHALK}` : undefined }} />;
      })}
      <At x={960} y={420} o={stream * (1 - real)}><Glow color={TEAL} size={36}>a stream of events</Glow></At>
      <At x={960} y={660 + fall * 200} o={real * (1 - fall)}>
        <div style={{ width: 860, height: 22, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}55, ${WARM})`, boxShadow: `0 0 24px ${WARM}` }} />
      </At>
      <At x={960} y={420} o={real * (1 - fall)}><Glow color={GOLD} size={38}>what really exists?</Glow></At>
      <At x={1520} y={660} o={ramp(t, lower, 0.5) * (1 - fall)}><Glow color={WARM} size={36}>a lower floor</Glow></At>
      <At x={960} y={760} o={ramp(t, c("finds no lower floor") + 0.4, 0.6)}><Glow color={GOLD} size={46} serif>no lower floor</Glow></At>
      <At x={960} y={420} o={des}><Glow color={CHALK} size={38}>events, designated too</Glow></At>
    </AbsoluteFill>
  );
};

const ChangeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fixed = c("A fixed essence");
  const bump = Math.abs(Math.sin((t - fixed) * 4)) * between(t, fixed + 0.5, fixed + 3.5) * 40;
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("None of this weakens", 0.4), 0.5)}><Glow color={CHALK} size={42} serif>responsibility stays</Glow></At>
      <At x={520} y={460} s={pop(t, fps, fixed)}>
        <div style={{ width: 200, height: 200, borderRadius: 16, background: "linear-gradient(135deg, #8a8a99, #4d4d5a)", border: "3px solid #c8c8d8",
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: CHALK }}>fixed</div>
      </At>
      <At x={760 - bump} y={460} o={between(t, fixed + 0.5, fixed + 3.8)}><Glow color={WARM} size={60}>←</Glow></At>
      <At x={520} y={630} o={ramp(t, fixed + 0.3, 0.5)}><Glow color={DIM} size={30}>cannot learn or change</Glow></At>
      <Crossed x={520} y={460} at={c("promises can be kept") - 0.2} size={90} />
      <At x={1100} y={460} s={pop(t, fps, c("promises can be kept"))}><Chip color={GOLD} size={40}>a promise kept</Chip></At>
      <At x={1460} y={470} o={ramp(t, c("lives can turn") - 0.3, 0.4)}><Sapling p={ramp(t, c("lives can turn") - 0.3, 2.0)} /></At>
      <At x={1460} y={660} o={ramp(t, c("lives can turn"), 0.5)}><Glow color={GREEN} size={32}>a life can turn</Glow></At>
    </AbsoluteFill>
  );
};

const DeathScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ml = c("Medicine, law");
  const valid = ramp(t, c("Each is valid there"), 0.5);
  const none = c("None finds a death");
  const soul = c("Neither an eternal soul"), voidAt = c("final void");
  const frames = [["medicine", ROSE], ["law", GOLD], ["contemplative", TEAL]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("And what of death", 0.5), 0.5)}><Glow color={CHALK} size={48} serif>And death?</Glow></At>
      {frames.map(([name, col], i) => (
        <At key={i} x={520 + i * 440} y={300} s={pop(t, fps, ml + i * 0.35)}>
          <Chip color={col} size={36}>{name}{valid > 0.5 ? "  ✓" : ""}</Chip>
        </At>
      ))}
      <At x={960} y={520} s={pop(t, fps, none)}>
        <div style={{ width: 300, height: 300, borderRadius: "50%", border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 34, lineHeight: 1.2, color: CHALK, textAlign: "center" }}>a death<br />from its<br />own side</div>
      </At>
      <Crossed x={960} y={520} at={none + 1.0} size={80} />
      <At x={440} y={560} s={pop(t, fps, soul)}><Orb size={110} color={GOLD} /><Glow color={GOLD} size={30} style={{ marginTop: 8 }}>eternal soul</Glow></At>
      <Crossed x={440} y={540} at={soul + 0.8} size={70} />
      <At x={1480} y={560} s={pop(t, fps, voidAt - 0.3)}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, #000 55%, #2a2440)", boxShadow: "0 0 40px #000" }} />
        <Glow color={DIM} size={30} style={{ marginTop: 8 }}>final void</Glow>
      </At>
      <Crossed x={1480} y={540} at={voidAt + 0.6} size={70} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dread = c("Much of our dread", 0.4);
  const fallP = ramp(t, c("falling into nothing"), 1.6);
  const loosen = ramp(t, c("loosens its grip"), 1.4);
  const love = c("Love, care and sorrow");
  const end = c("Like firewood, like ash");
  const later = ramp(t, love - 0.6, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - later }}>
        <At x={960} y={260 + 220 * fallP} s={pop(t, fps, dread)} o={1 - loosen}><Orb size={80} color={CHALK} /></At>
        <At x={960} y={160} o={ramp(t, dread + 0.3, 0.5) * (1 - loosen)}><Glow color={CHALK} size={34}>a self</Glow></At>
        <At x={960} y={660} s={pop(t, fps, dread + 0.4)} o={1 - loosen}>
          <div style={{ width: 420, height: 120, borderRadius: "50%", background: "radial-gradient(ellipse, #000 50%, #1d1830 80%, transparent)", boxShadow: "0 0 60px #000" }} />
        </At>
        <At x={1300} y={660} o={ramp(t, c("falling into nothing"), 0.5) * (1 - loosen)}><Glow color={DIM} size={32}>nothing</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, end - 0.5, 0.6) }}>
        {[["love", ROSE], ["care", GOLD], ["sorrow", ICE]].map(([w, col], i) => (
          <At key={i} x={560 + i * 400} y={440} s={pop(t, fps, love + i * 0.35)}>
            <div style={{ width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${col}77, ${col}22 60%, transparent 72%)`,
              display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={col as string} size={46} serif>{w}</Glow></div>
          </At>
        ))}
      </AbsoluteFill>
      <Panel x={700} y={400} w={360} h={280} s={pop(t, fps, end)} glow={0.6}>
        <div style={{ height: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ marginBottom: -32 }}><Fire s={0.36} /></div><Logs s={0.7} />
        </div>
      </Panel>
      <Panel x={1220} y={400} w={360} h={280} s={pop(t, fps, end + 0.6)} glow={0.6}><Ash s={0.9} /></Panel>
      <div style={{ position: "absolute", top: 650, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="each moment is complete" at={c("each moment is complete")} size={84} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["fire", 0], ["dogen", c("The Zen master", 0.6)], ["season", c("winter becomes spring", 0.6)], ["time", c("not tiny solid atoms", 0.6)],
    ["life", c("Life and death, he said", 0.6)], ["sleep", c("We rarely see it", 0.6)], ["candle", c("who wakes up", 0.6)],
    ["person", c("the great Tibetan teacher", 0.6)], ["floor", c("Derek Parfit", 0.6)], ["life", c("None of this weakens", 0.6)],
    ["death", c("And what of death", 0.6)], ["warm", c("Much of our dread", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("We tell this as one story", 0.9)], <FireScene />],
    [S("We tell this as one story", "The Zen master"), <StoryScene />],
    [S("The Zen master", "rests completely in its own"), <DogenScene />],
    [S("rests completely in its own", "winter becomes spring"), <PositionsScene />],
    [S("winter becomes spring", "nothing is carried across"), <SeasonScene />],
    [S("nothing is carried across", "not tiny solid atoms"), <CarryScene />],
    [S("not tiny solid atoms", "Life and death, he said"), <BeingTimeScene />],
    [S("Life and death, he said", "We rarely see it"), <LifeScene />],
    [S("We rarely see it", "absence is never absolute"), <SwitchScene />],
    [S("absence is never absolute", "who wakes up"), <SleepScene />],
    [S("who wakes up", "the great Tibetan teacher"), <CandleScene />],
    [S("the great Tibetan teacher", "Derek Parfit"), <MereIScene />],
    [S("Derek Parfit", "None of this weakens"), <FloorScene />],
    [S("None of this weakens", "And what of death"), <ChangeScene />],
    [S("And what of death", "Much of our dread"), <DeathScene />],
    [S("Much of our dread", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
