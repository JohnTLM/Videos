// Anatta to Emptiness, Chapter 9: The Logic of the Single Stroke & The Eye as a Living Chariot.
// Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A chariot rolls by", "An axle carries the load", "First there are parts", "names them a chariot",
  "looked like separate insights", "The observer collapsed", "became total exertion", "Every foundation was taken apart", "They are one logic",
  "how a name meets the world", "waiting to be labelled", "a hidden floor", "solid stuff or flowing change", "Swapping substance for process",
  "Dependent designation removes that floor", "means naming", "arises together with",
  "never assembled first", "this book's reading", "a single stroke", "arise together, not in sequence",
  "no building block", "only through its relations", "So is every other part", "not an extra label", "whole working pattern",
  "Search for the chariot", "or identical to them", "or owning them", "Nothing is found", "Yet nothing is missing", "The chariot simply works",
  "The central claim", "not the labelling", "articulated all at once",
  "Ready-made means carved", "The mountain is conventionally there", "whose edges belong",
  "nothing comes first", "No subject before object", "No ground before", "are not stages", "one appearance", "the single stroke, too, is empty",
  "Now turn to the eye", "the organ of sight", "It sees, it closes", "one physical eye persists", "give up the self",
  "substantialism wearing biological clothing",
  "Anatta comes first", "No seer is found", "spends itself completely", "It is the event",
  "Search, as with the chariot", "the retina", "The optic nerve", "The lens", "The visual cortex", "All of them together",
  "Every option collapses", "Yet seeing goes on",
  "A quiet mistake", "only the concept changed", "nerves, muscles, blood flow", "In meditation", "shift together",
  "Even dependent arising", "It too is empty", "nothing loses its function",
  "The hand writing", "the hand grasping", "The mountain today", "fresh participation", "not made of anything",
];

// this series' deeper golds and indigos
const DEEP = "#D4A245", INDIGO = "#7C74F0";

const M = {
  chariot: { a: "rgba(170,120,40,0.5)", b: "rgba(60,50,150,0.5)", c: "rgba(40,90,130,0.3)" },
  journey: { a: "rgba(70,55,150,0.5)", b: "rgba(170,125,50,0.4)", c: "rgba(40,100,130,0.3)" },
  floor: { a: "rgba(50,45,120,0.55)", b: "rgba(140,95,40,0.4)", c: "rgba(90,50,120,0.35)" },
  stroke: { a: "rgba(185,135,45,0.5)", b: "rgba(70,55,160,0.45)", c: "rgba(50,120,130,0.3)" },
  search: { a: "rgba(40,95,140,0.5)", b: "rgba(160,120,50,0.4)", c: "rgba(80,60,150,0.35)" },
  mountain: { a: "rgba(60,70,150,0.5)", b: "rgba(170,130,60,0.35)", c: "rgba(40,110,120,0.3)" },
  eye: { a: "rgba(40,110,140,0.5)", b: "rgba(90,60,160,0.45)", c: "rgba(170,120,50,0.3)" },
  close: { a: "rgba(180,130,55,0.5)", b: "rgba(80,60,160,0.45)", c: "rgba(60,140,130,0.35)" },
};

// ---------------------------------------------------------------- drawings
/** Side view of a chariot; `apart` 0..1 pulls the parts away from each other. */
const Chariot: React.FC<{ spin: number; apart?: number; size?: number; dash?: boolean }> = ({ spin, apart = 0, size = 560, dash }) => {
  const da = dash ? "14 10" : undefined;
  return (
    <svg width={size} height={(size * 300) / 440} viewBox="-220 -150 440 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}88)` }}>
      <g transform={`translate(${apart * 100} ${apart * 60})`}>
        <line x1={-120} y1={22} x2={60} y2={22} stroke={ICE} strokeWidth={10} strokeLinecap="round" strokeDasharray={da} />
      </g>
      <g transform={`translate(${-apart * 60} ${-apart * 70})`}>
        <path d="M-150 -90 L60 -90 L80 10 L-150 10 Z" fill={`${DEEP}30`} stroke={DEEP} strokeWidth={5} strokeLinejoin="round" strokeDasharray={da} />
        <path d="M-150 -58 L66 -58" stroke={GOLD} strokeWidth={2} opacity={0.6} />
      </g>
      <g transform={`translate(${apart * 80} ${-apart * 40})`}>
        <path d="M78 -4 Q150 -10 210 -34" fill="none" stroke={ROSE} strokeWidth={7} strokeLinecap="round" strokeDasharray={da} />
      </g>
      <g transform={`translate(${-40 - apart * 90} ${40 + apart * 40}) rotate(${spin})`}>
        <circle r={85} fill="rgba(60,50,140,0.3)" stroke={TEAL} strokeWidth={7} strokeDasharray={da} />
        {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-80} stroke={TEAL} strokeWidth={4} transform={`rotate(${i * 45})`} />)}
        <circle r={14} fill={GOLD} />
      </g>
    </svg>
  );
};

const Wheel: React.FC<{ size: number; spin: number; color?: string }> = ({ size, spin, color = TEAL }) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200" style={{ filter: `drop-shadow(0 0 12px ${color})` }}>
    <g transform={`rotate(${spin})`}>
      <circle r={88} fill="rgba(60,50,140,0.3)" stroke={color} strokeWidth={8} />
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-84} stroke={color} strokeWidth={5} transform={`rotate(${i * 45})`} />)}
      <circle r={16} fill={GOLD} />
    </g>
  </svg>
);

const Globe: React.FC<{ size: number; color?: string }> = ({ size, color = ICE }) => (
  <svg width={size} height={size} viewBox="-110 -110 220 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <circle r={100} fill="rgba(80,110,200,0.22)" stroke={color} strokeWidth={4} />
    <ellipse rx={100} ry={34} fill="none" stroke={color} strokeWidth={2} opacity={0.6} />
    <ellipse rx={40} ry={100} fill="none" stroke={color} strokeWidth={2} opacity={0.6} />
    <path d="M-40 -40 Q-10 -60 20 -30 Q30 0 0 10 Q-30 10 -40 -40 Z" fill={`${GREEN}55`} />
  </svg>
);

const Mountain: React.FC<{ w?: number; cut?: number; cutColor?: string; dashed?: boolean; glow?: string }> = ({ w = 520, cut = 0, cutColor = WARM, dashed = true, glow = INDIGO }) => (
  <svg width={w} height={(w * 330) / 500} viewBox="0 0 500 330" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${glow})` }}>
    <defs>
      <linearGradient id="ae09mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8E86F5" /><stop offset="1" stopColor="#2A2466" /></linearGradient>
    </defs>
    <path d="M10 310 L170 90 L230 160 L310 40 L490 310 Z" fill="url(#ae09mt)" stroke={glow} strokeWidth={4} strokeLinejoin="round" />
    <path d="M310 40 L272 98 L292 92 L310 114 L330 90 L350 100 Z" fill={CHALK} opacity={0.9} />
    <path d="M170 90 L148 120 L170 114 L188 128 Z" fill={CHALK} opacity={0.75} />
    {cut > 0 && <path d="M0 318 L168 78 L230 148 L310 26 L500 318" fill="none" stroke={cutColor} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray={dashed ? "16 12" : undefined} opacity={cut} style={{ filter: `drop-shadow(0 0 8px ${cutColor})` }} />}
  </svg>
);

/** Eye seen from the front; `open` 0..1 closes the lids. */
const BigEye: React.FC<{ w?: number; open?: number; color?: string; solid?: number }> = ({ w = 380, open = 1, color = TEAL, solid = 0 }) => {
  const oy = Math.max(0.05, open);
  return (
    <svg width={w} height={w * 0.55} viewBox="-200 -110 400 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${12 + solid * 18}px ${color})` }}>
      <g transform={`scale(1 ${oy})`}>
        <path d="M-185 0 Q0 -150 185 0 Q0 150 -185 0 Z" fill={`${color}1c`} stroke={color} strokeWidth={6 + solid * 8} />
        <circle r={64} fill={color} opacity={0.85} />
        <circle r={64} fill="none" stroke={GOLD} strokeWidth={3} opacity={0.6} />
        <circle r={27} fill="#0b0c1a" />
        <circle cx={-20} cy={-22} r={10} fill="#ffffff" opacity={0.85} />
      </g>
    </svg>
  );
};

/** A head in profile; `dot` shows the imagined seer behind the eyes. */
const Head: React.FC<{ dot: number; o?: number; dash?: boolean }> = ({ dot, o = 1, dash }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
    <circle cx={160} cy={140} r={16 + 4 * Math.sin(dot * 6)} fill={GOLD} opacity={dot} style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />
  </svg>
);

const Lens: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
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

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color?: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color = DIM, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Cup: React.FC = () => (
  <svg width={150} height={130} viewBox="0 0 170 150" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <path d="M20 30 L130 30 L118 130 Q75 145 32 130 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
    <path d="M128 52 Q165 55 158 85 Q152 108 122 106" fill="none" stroke={GOLD} strokeWidth={4} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const roll = c("A chariot rolls by", 0.4);
  const parts = c("First there are parts");
  const apart = ramp(t, parts, 1.0);
  const name = c("names them a chariot");
  const x = 960 - (1 - ramp(t, roll, 2.4)) * 760, y = 440;
  const lab = (dx: number, dy: number, txt: string, col: string, k: number) => (
    <At x={x + dx} y={y + dy} o={ramp(t, parts + 0.4 + k * 0.2, 0.4)}><Chip color={col} size={28}>{txt}</Chip></At>
  );
  const drop = ramp(t, name, 0.8);
  return (
    <AbsoluteFill>
      <At x={x} y={y} o={ramp(t, roll, 0.4)}><Chariot spin={t * 140 * (1 - apart)} apart={apart} /></At>
      <At x={960} y={150} o={between(t, c("An axle carries the load"), parts)}><Glow color={GOLD} size={40} serif>wheels turn · an axle carries the load</Glow></At>
      {lab(-150, -270, "frame", DEEP, 0)}{lab(-170, 240, "wheel", TEAL, 1)}{lab(150, 190, "axle", ICE, 2)}{lab(300, -150, "pole", ROSE, 3)}
      <At x={x - 40} y={140 + drop * 120} o={ramp(t, name, 0.3)} s={1 + 0.15 * Math.sin(drop * Math.PI)}><Chip color={GOLD} size={44}>"chariot"</Chip></At>
      <At x={560} y={800} o={ramp(t, parts + 0.2, 0.5)}><Glow color={TEAL} size={34}>first, the parts</Glow></At>
      <At x={1360} y={800} o={ramp(t, name + 0.3, 0.5)}><Glow color={GOLD} size={34}>then, a name</Glow></At>
    </AbsoluteFill>
  );
};

const JourneyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("They are one logic");
  const merge = ramp(t, one, 1.2);
  const cards = [
    { at: c("The observer collapsed"), txt: "the observer collapses", col: ICE },
    { at: c("became total exertion"), txt: "total exertion", col: GOLD },
    { at: c("Every foundation was taken apart"), txt: "every foundation taken apart", col: VIOLET },
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, c("looked like separate insights", 0.4), 0.5) * (1 - merge)}><Glow color={CHALK} size={42} serif>separate insights?</Glow></At>
      {cards.map((cd, i) => {
        const x0 = 420 + i * 540;
        return (
          <React.Fragment key={i}>
            <At x={x0 + (960 - x0) * merge} y={420} s={pop(t, fps, cd.at)} o={1 - merge * 0.75}>
              <Orb size={120} color={cd.col} />
            </At>
            <At x={x0 + (960 - x0) * merge} y={560} o={ramp(t, cd.at + 0.2, 0.4) * (1 - merge)}><Chip color={cd.col} size={32}>{cd.txt}</Chip></At>
          </React.Fragment>
        );
      })}
      <Ring x={960} y={420} p={ramp(t, one + 0.6, 1.6)} r0={80} r1={380} color={DEEP} />
      <At x={960} y={420} o={merge}><Orb size={200} color={DEEP} core={merge} /></At>
      <div style={{ position: "absolute", top: 600, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="one logic" at={one + 0.4} size={100} color={DEEP} />
      </div>
    </AbsoluteFill>
  );
};

const FloorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const meet = c("how a name meets the world", 0.4);
  const wait = c("waiting to be labelled");
  const floor = c("a hidden floor");
  const solid = c("solid stuff or flowing change");
  const swap = c("Swapping substance for process");
  const gone = c("Dependent designation removes that floor");
  const fall = ramp(t, gone + 0.6, 1.4);
  const wave = ramp(t, swap + 0.3, 1.0);
  const tagX = 1320 - 420 * ramp(t, wait, 1.2), tagY = 260 + 60 * ramp(t, wait, 1.2);
  const bricks = Array.from({ length: 14 });
  return (
    <AbsoluteFill>
      <At x={900} y={400} s={pop(t, fps, meet)} o={1 - fall * 0.3}><Globe size={280} /></At>
      <At x={tagX} y={tagY} s={pop(t, fps, meet + 0.5)}><Chip color={GOLD} size={36}>a name</Chip></At>
      <At x={900} y={150} o={ramp(t, wait, 0.5) * (1 - fall)}><Glow color={CHALK} size={36}>a world already there, waiting for labels</Glow></At>
      {/* the hidden floor: shown only to be removed */}
      <div style={{ position: "absolute", left: 560, top: 600 + fall * 160, width: 680, height: 90, opacity: ramp(t, floor, 0.5) * (1 - fall),
        transform: `rotate(${fall * 8}deg)`, borderRadius: 8, border: `3px solid ${DEEP}`, background: `${DEEP}22`, boxShadow: `0 0 30px ${DEEP}88`, overflow: "hidden" }}>
        {bricks.map((_, i) => (
          <div key={i} style={{ position: "absolute", left: (i % 7) * 100 + (Math.floor(i / 7) % 2) * 50 - 20, top: Math.floor(i / 7) * 45 + 2, width: 92, height: 40,
            border: `2px solid ${DEEP}`, background: `${DEEP}33`, opacity: 1 - wave }} />
        ))}
        <svg width={680} height={90} style={{ position: "absolute", left: 0, top: 0, opacity: wave }}>
          {[0, 1, 2].map((k) => (
            <path key={k} d={Array.from({ length: 70 }, (_, i) => `${i ? "L" : "M"}${i * 10} ${20 + k * 25 + 8 * Math.sin(i / 4 - t * 3 + k)}`).join(" ")}
              fill="none" stroke={[TEAL, ICE, VIOLET][k]} strokeWidth={4} />
          ))}
        </svg>
      </div>
      <At x={1400} y={645} o={ramp(t, floor + 0.3, 0.4) * (1 - fall)}><Glow color={DEEP} size={34}>a hidden floor</Glow></At>
      <At x={380} y={600} o={between(t, solid, swap + 0.2)}><Glow color={DEEP} size={32}>solid stuff</Glow></At>
      <At x={380} y={690} o={ramp(t, solid + 1.0, 0.5) * (1 - fall)}><Glow color={TEAL} size={32}>or flowing change</Glow></At>
      <At x={900} y={790} o={ramp(t, swap + 0.6, 0.5) * (1 - fall)}><Chip color={DIM} size={30}>substance or process · still a world before its description</Chip></At>
      <div style={{ position: "absolute", top: 760, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="dependent designation" at={gone + 1.3} size={78} />
      </div>
    </AbsoluteFill>
  );
};

const DependentScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nm = c("means naming", 0.4), tog = c("arises together with");
  const link = ramp(t, tog + 0.3, 0.8);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 110, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="dependent designation" at={nm - 0.6} size={78} />
      </div>
      <At x={960} y={290} o={ramp(t, nm, 0.5)}><Glow color={CHALK} size={36}>designation · naming, picking something out</Glow></At>
      <At x={620} y={520} s={pop(t, fps, tog)}><Chip color={GOLD} size={52}>"wheel"</Chip></At>
      <At x={1300} y={520} s={pop(t, fps, tog)}><Wheel size={220} spin={t * 40} /></At>
      <Flow x1={770} y1={520} x2={1170} y2={520} color={DEEP} p={link} width={4} />
      <Ring x={620} y={520} p={ramp(t, tog, 1.4)} r0={60} r1={240} color={GOLD} />
      <Ring x={1300} y={520} p={ramp(t, tog, 1.4)} r0={100} r1={280} color={TEAL} />
      <At x={960} y={760} o={ramp(t, tog + 0.6, 0.5)}><Glow color={DEEP} size={40} serif>dependent · arising together with what it picks out</Glow></At>
    </AbsoluteFill>
  );
};

const StrokeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const asm = c("never assembled first", 0.4);
  const st = c("a single stroke");
  const tog = c("arise together, not in sequence");
  const out1 = ramp(t, st - 0.2, 0.5);
  const chips = [["parts", TEAL], ["relations", VIOLET], ["function", ROSE], ["name", GOLD]] as const;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - out1 }}>
        <At x={960} y={420} o={ramp(t, asm, 0.4)}>
          <div style={{ position: "relative", display: "flex", gap: 30, alignItems: "center" }}>
            <Chip color={TEAL} size={44}>parts first</Chip><Glow color={CHALK} size={60}>→</Glow><Chip color={GOLD} size={44}>name later</Chip>
            <Strike at={asm + 1.1} />
          </div>
        </At>
      </AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("this book's reading"), 0.5)}><Glow color={DIM} size={30}>in this book's reading</Glow></At>
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a single stroke" at={st} size={100} color={DEEP} />
      </div>
      <Svg>
        <DrawPath d="M480 470 C 640 360, 820 540, 980 450 S 1280 380, 1440 480" p={ramp(t, st + 0.1, 1.2)} color={DEEP} width={34} len={1300} />
        <DrawPath d="M500 486 C 650 390, 830 560, 990 470 S 1270 410, 1420 496" p={ramp(t, st + 0.3, 1.2)} color={GOLD} width={8} len={1300} />
      </Svg>
      {chips.map(([w, col], i) => (
        <At key={i} x={480 + i * 320} y={680} s={pop(t, fps, tog)}><Chip color={col} size={38}>{w}</Chip></At>
      ))}
      <Ring x={960} y={680} p={ramp(t, tog, 1.4)} r0={60} r1={700} color={GOLD} />
      <At x={960} y={800} o={ramp(t, tog + 0.6, 0.5)}><Glow color={CHALK} size={36}>together, not in sequence</Glow></At>
    </AbsoluteFill>
  );
};

const WheelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const blk = c("no building block", 0.4);
  const rel = c("only through its relations");
  const every = c("So is every other part");
  const lab = c("not an extra label");
  const whole = c("whole working pattern");
  const spokes = [
    { x: 600, y: 270, txt: "relations", col: VIOLET }, { x: 1320, y: 270, txt: "function", col: ROSE }, { x: 1360, y: 560, txt: "conditions", col: GREEN },
  ];
  const others = [["axle", ICE], ["frame", DEEP], ["pole", ROSE]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, blk)}><Wheel size={260} spin={t * 50} /></At>
      <At x={470} y={560} o={between(t, blk + 0.3, rel)}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 120, height: 120, border: `3px solid ${DIM}`, background: "rgba(200,200,220,0.2)", borderRadius: 8 }} />
          <Glow color={DIM} size={28} style={{ marginTop: 10 }}>building block?</Glow>
        </div>
      </At>
      <Crossed x={470} y={540} at={blk + 1.0} size={70} />
      {spokes.map((s, i) => (
        <React.Fragment key={i}>
          <Flow x1={960} y1={420} x2={s.x} y2={s.y} color={s.col} p={ramp(t, rel + i * 0.4, 0.6)} />
          <At x={s.x} y={s.y} s={pop(t, fps, rel + i * 0.4 + 0.2)}><Chip color={s.col} size={34}>{s.txt}</Chip></At>
        </React.Fragment>
      ))}
      {others.map(([w, col], i) => (
        <At key={i} x={560 + i * 220} y={700} s={pop(t, fps, every + i * 0.2)}><Chip color={col} size={30}>{w}</Chip></At>
      ))}
      <Svg style={{ opacity: ramp(t, every + 0.6, 0.5) }}>
        <path d="M620 700 L720 700 M840 700 L940 700" stroke={DIM} strokeWidth={3} strokeDasharray="8 8" />
      </Svg>
      <At x={1420} y={160 + 120 * ramp(t, lab, 0.8)} o={ramp(t, lab, 0.4) * (1 - ramp(t, whole, 0.6))}>
        <div style={{ position: "relative" }}><Chip color={GOLD} size={36}>"chariot" stuck on top</Chip><Strike at={lab + 1.0} /></div>
      </At>
      <Svg>
        <DrawPath d="M960 140 C 1500 140, 1560 760, 960 770 C 380 780, 330 140, 960 140 Z" p={ramp(t, whole, 1.4)} color={DEEP} width={4} len={2600} />
      </Svg>
      <At x={1520} y={790} o={ramp(t, whole + 0.6, 0.5)}><Glow color={DEEP} size={34} serif>"chariot" · the working whole, spoken of</Glow></At>
    </AbsoluteFill>
  );
};

const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s0 = c("Search for the chariot", 0.4);
  const found = c("Nothing is found"), miss = c("Yet nothing is missing"), works = c("The chariot simply works");
  const u = ramp(t, s0, 4.5);
  const lx = 960 + 340 * Math.cos(u * Math.PI * 3), ly = 440 + 150 * Math.sin(u * Math.PI * 3);
  const qs = [
    { at: s0 + 0.3, txt: "apart from its parts?" }, { at: c("or identical to them"), txt: "identical to them?" }, { at: c("or owning them"), txt: "owning them?" },
  ];
  return (
    <AbsoluteFill>
      <At x={960 + 80 * ramp(t, works, 2)} y={450} s={pop(t, fps, s0)}><Chariot spin={t * 120 * ramp(t, works, 0.5)} size={500} /></At>
      <At x={lx} y={ly} o={between(t, s0, found + 0.3)}><Lens /></At>
      {qs.map((q, i) => <StruckChip key={i} x={420 + i * 540} y={150} at={q.at} strikeAt={found + i * 0.15} size={32}>{q.txt}</StruckChip>)}
      <At x={560} y={700} o={ramp(t, found + 0.3, 0.5)}><Glow color={ICE} size={46} serif>nothing found</Glow></At>
      <At x={1360} y={700} o={ramp(t, miss, 0.5)}><Glow color={GOLD} size={46} serif>nothing missing</Glow></At>
      <At x={960} y={800} o={ramp(t, works + 0.3, 0.5)}><Chip color={DEEP} size={32}>it simply works · empty · understandable</Chip></At>
    </AbsoluteFill>
  );
};

const TheoremScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const claim = c("The central claim", 0.4), not = c("not the labelling"), once = c("articulated all at once");
  const burst = ramp(t, once, 1.0);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 110, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="the central claim" at={claim} size={86} />
      </div>
      <At x={620} y={420} s={pop(t, fps, not)} o={1 - burst * 0.6}><Globe size={200} color={DIM} /></At>
      <At x={760} y={320} s={pop(t, fps, not + 0.4)} o={1 - burst * 0.6}><Chip color={DIM} size={28}>label</Chip></At>
      <StruckChip x={620} y={600} at={not + 0.3} strikeAt={not + 1.6} size={30}>labelling a ready-made world</StruckChip>
      <At x={1320} y={420} s={pop(t, fps, once)}><Orb size={190} color={DEEP} core={burst} /></At>
      <Ring x={1320} y={420} p={ramp(t, once + 0.2, 1.6)} r0={90} r1={360} color={GOLD} />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2 + t * 0.4, r = 170 * burst;
        return <At key={i} x={1320 + r * Math.cos(a)} y={420 + r * Math.sin(a)} o={burst}><Orb size={22} color={[GOLD, TEAL, VIOLET, ROSE][i % 4]} /></At>;
      })}
      <At x={1320} y={660} o={ramp(t, once + 0.4, 0.5)}><Glow color={DEEP} size={38} serif>dependent arising,</Glow></At>
      <At x={1320} y={720} o={ramp(t, once + 0.6, 0.5)}><Glow color={DEEP} size={38} serif>articulated all at once</Glow></At>
    </AbsoluteFill>
  );
};

const MountainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const carve = c("Ready-made means carved", 0.4), conv = c("The mountain is conventionally there"), edges = c("whose edges belong");
  return (
    <AbsoluteFill>
      <At x={960} y={180} o={ramp(t, carve, 0.5)}><Glow color={CHALK} size={38}>ready-made · carved out from its own side?</Glow></At>
      <At x={960} y={470} s={pop(t, fps, carve)}>
        <Mountain cut={ramp(t, carve + 0.6, 1.4)} cutColor={ramp(t, edges, 0.3) > 0.5 ? WARM : GOLD} dashed={t < edges} glow={t > conv && t < edges ? GREEN : INDIGO} />
      </At>
      <At x={460} y={720} o={ramp(t, conv + 0.3, 0.5)}><Chip color={GREEN} size={34}>conventionally there</Chip></At>
      <StruckChip x={1440} y={720} at={edges} strikeAt={edges + 1.4} color={WARM} size={34}>edges of its own</StruckChip>
    </AbsoluteFill>
  );
};

const SingleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const first = c("nothing comes first", 0.4), subj = c("No subject before object"), gnd = c("No ground before");
  const gone = ramp(t, gnd + 1.2, 1.0);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 120, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="nothing comes first" at={first} size={92} color={DEEP} />
      </div>
      <At x={560} y={460} o={ramp(t, subj, 0.4)}>
        <div style={{ position: "relative", display: "flex", gap: 20, alignItems: "center" }}>
          <Chip color={ICE} size={40}>subject</Chip><Glow color={DIM} size={30}>before</Glow><Chip color={TEAL} size={40}>object</Chip>
          <Strike at={subj + 1.0} />
        </div>
      </At>
      {/* a ground under an appearance, shown only so it can be taken away */}
      <At x={1380} y={420} s={pop(t, fps, gnd)}><Orb size={130} color={ROSE} /></At>
      <div style={{ position: "absolute", left: 1180, top: 520 + gone * 120, width: 400, height: 60, borderRadius: 6, border: `3px solid ${DEEP}`,
        background: `${DEEP}33`, opacity: ramp(t, gnd + 0.2, 0.4) * (1 - gone), transform: `rotate(${gone * -6}deg)` }} />
      <At x={1380} y={630} o={ramp(t, gnd + 0.3, 0.4) * (1 - gone)}><Glow color={DEEP} size={30}>a ground beneath?</Glow></At>
      <At x={1380} y={700} o={ramp(t, gnd + 1.6, 0.5)}><Glow color={ROSE} size={34}>no ground first</Glow></At>
    </AbsoluteFill>
  );
};

const StagesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("are not stages", 0.4), one = c("one appearance"), emp = c("the single stroke, too, is empty");
  const flat = ramp(t, one, 1.0);
  const steps = [["emptiness", ICE], ["dependent arising", VIOLET], ["naming", GOLD]] as const;
  const fade = ramp(t, emp + 0.8, 1.6);
  return (
    <AbsoluteFill>
      {steps.map(([w, col], i) => {
        const x = 560 + i * 300 + (960 - (560 + i * 300)) * flat, y = 560 - i * 110 + (420 - (560 - i * 110)) * flat;
        return <At key={i} x={x} y={y} s={pop(t, fps, st + i * 0.25)} o={1 - flat * 0.85}><Chip color={col} size={34}>{w}</Chip></At>;
      })}
      <At x={960} y={160} o={ramp(t, st, 0.4) * (1 - flat)}><Glow color={DIM} size={36}>stages?</Glow></At>
      <At x={960} y={420} o={flat * (1 - fade * 0.5)}><Orb size={180} color={DEEP} /></At>
      {[0, 1, 2].map((k) => {
        const a = -Math.PI / 2 + (k * Math.PI * 2) / 3;
        return <At key={k} x={960 + 260 * Math.cos(a)} y={420 + 200 * Math.sin(a)} o={ramp(t, one + 0.6 + k * 0.2, 0.4)}>
          <BigEye w={110} color={[ICE, VIOLET, GOLD][k]} /></At>;
      })}
      <At x={960} y={160} o={ramp(t, one + 0.4, 0.5)}><Glow color={DEEP} size={40} serif>one appearance · seen from different sides</Glow></At>
      <Svg style={{ opacity: ramp(t, emp, 0.4) * (1 - fade) }}>
        <path d="M600 760 C 760 700, 900 800, 1060 740 S 1260 720, 1320 760" fill="none" stroke={DEEP} strokeWidth={22} strokeLinecap="round"
          strokeDasharray={t > emp + 0.6 ? "30 26" : undefined} style={{ filter: `drop-shadow(0 0 10px ${DEEP})` }} />
      </Svg>
      <At x={960} y={760} o={ramp(t, emp + 1.4, 0.6)}><Glow color={CHALK} size={38} serif>the stroke, too, is empty · nothing stands first</Glow></At>
    </AbsoluteFill>
  );
};

const EyeSolidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const eye = c("Now turn to the eye", 0.4), sees = c("It sees, it closes"), per = c("one physical eye persists");
  const self = c("give up the self"), sub = c("substantialism wearing biological clothing");
  const blink = between(t, sees + 0.7, sees + 1.4, 0.25);
  const acts = [["sees", TEAL], ["closes", ICE], ["sleeps", VIOLET], ["meditates", GOLD]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={160} o={ramp(t, c("the organ of sight"), 0.5)}><Glow color={CHALK} size={40} serif>the organ of sight</Glow></At>
      <At x={960} y={400} s={pop(t, fps, eye)}><BigEye w={420} open={1 - blink * 0.95} solid={ramp(t, per, 0.8)} /></At>
      {acts.map(([w, col], i) => (
        <At key={i} x={480 + i * 320} y={620} s={pop(t, fps, sees + i * 0.5)} o={1 - ramp(t, self, 0.5) * 0.6}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <At x={960} y={700} o={ramp(t, per, 0.5)}><Glow color={DEEP} size={34}>one physical eye underneath?</Glow></At>
      <At x={300} y={380} s={pop(t, fps, self)} o={1 - ramp(t, sub, 0.5) * 0.5}><div style={{ transform: "scale(0.6)" }}><Head dot={1 - ramp(t, self + 0.6, 0.6)} dash /></div></At>
      <Crossed x={300} y={380} at={self + 0.6} size={60} />
      <At x={300} y={540} o={ramp(t, self + 0.6, 0.4)}><Glow color={DIM} size={28}>self let go</Glow></At>
      <At x={1620} y={400} o={ramp(t, self + 1.0, 0.4)}><Glow color={TEAL} size={28}>the eye kept solid</Glow></At>
      <At x={960} y={800} o={ramp(t, sub, 0.5)}><Chip color={WARM} size={34}>substantialism in biological clothing</Chip></At>
    </AbsoluteFill>
  );
};

const EyeAnattaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const an = c("Anatta comes first", 0.4), seer = c("No seer is found"), spend = c("spends itself completely"), ev = c("It is the event");
  const sp = ramp(t, spend, 1.6);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 100, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="anatta" at={an} size={90} />
      </div>
      <At x={520} y={470} s={pop(t, fps, an + 0.3)}><Head dot={1 - ramp(t, seer + 0.4, 0.8)} dash={t > seer + 1} /></At>
      <Crossed x={530} y={410} at={seer + 0.6} size={50} />
      <At x={520} y={700} o={ramp(t, seer + 0.6, 0.5)}><Glow color={ICE} size={36}>no seer behind the seeing</Glow></At>
      <At x={1320} y={470} o={ramp(t, spend, 1.0) * 0.9}>
        <div style={{ width: 560 * sp + 10, height: 400 * sp + 10, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}66, ${DEEP}22 50%, transparent 72%)` }} />
      </At>
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2;
        return <Flow key={i} x1={1320} y1={470} x2={1320 + 280 * Math.cos(a)} y2={470 + 200 * Math.sin(a)} color={[GOLD, TEAL, DEEP][i % 3]} p={ramp(t, spend + 0.3 + i * 0.04, 0.8)} />;
      })}
      <At x={1320} y={470} s={pop(t, fps, spend - 0.4)} o={1 - sp * 0.6}><BigEye w={260} color={GOLD} /></At>
      <At x={1320} y={720} o={ramp(t, spend + 0.6, 0.5)}><Glow color={GOLD} size={34}>the eye, spent completely in seeing</Glow></At>
      <At x={960} y={800} o={ramp(t, ev - 0.6, 0.5)}><Glow color={CHALK} size={40} serif>not an instrument · the event</Glow></At>
    </AbsoluteFill>
  );
};

const EyeSearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s0 = c("Search, as with the chariot", 0.4);
  const ret = c("the retina"), nerve = c("The optic nerve"), lensT = c("The lens"), cortex = c("The visual cortex");
  const all = c("All of them together"), col = c("Every option collapses"), goes = c("Yet seeing goes on");
  const hi = (at: number) => (t > all && t < col + 0.6 ? 1 : between(t, at, at + 1.6, 0.3));
  const dash = t > col + 0.4 ? "12 10" : undefined;
  const draw = ramp(t, s0, 1.2);
  const lensPos = t < nerve ? [980, 450] : t < lensT ? [1140, 470] : t < cortex ? [660, 450] : [1580, 440];
  return (
    <AbsoluteFill>
      <Svg>
        <circle cx={800} cy={450} r={170} fill="rgba(240,240,255,0.06)" stroke={CHALK} strokeWidth={4} strokeDasharray={dash ?? "1070"} strokeDashoffset={dash ? 0 : 1070 * (1 - draw)} />
        <path d="M640 380 Q590 450 640 520" fill="none" stroke={ICE} strokeWidth={4} opacity={draw} strokeDasharray={dash} />
        <path d="M915 325 A170 170 0 0 1 915 575" fill="none" stroke={ROSE} strokeWidth={8 + 6 * hi(ret)} opacity={draw} strokeDasharray={dash}
          style={{ filter: `drop-shadow(0 0 ${6 + 16 * hi(ret)}px ${ROSE})` }} />
        <ellipse cx={670} cy={450} rx={22} ry={62} fill={`${TEAL}44`} stroke={TEAL} strokeWidth={4 + 5 * hi(lensT)} opacity={draw} strokeDasharray={dash}
          style={{ filter: `drop-shadow(0 0 ${6 + 16 * hi(lensT)}px ${TEAL})` }} />
        <path d="M968 455 C 1080 470, 1180 470, 1320 430" fill="none" stroke={GOLD} strokeWidth={14 + 8 * hi(nerve)} strokeLinecap="round" opacity={draw}
          strokeDasharray={dash} style={{ filter: `drop-shadow(0 0 ${6 + 16 * hi(nerve)}px ${GOLD})` }} />
        <path d="M1310 420 Q1300 300 1430 290 Q1560 270 1610 360 Q1660 440 1600 500 Q1540 560 1430 545 Q1320 540 1310 420 Z" fill={`${VIOLET}22`}
          stroke={VIOLET} strokeWidth={4} opacity={draw} strokeDasharray={dash} />
        <path d="M1360 380 Q1400 340 1450 380 M1420 450 Q1470 410 1520 450 M1380 490 Q1430 470 1480 500" fill="none" stroke={VIOLET} strokeWidth={3} opacity={draw * 0.6} />
        <path d="M1600 362 Q1658 440 1600 500 Q1572 430 1600 362 Z" fill={ROSE} opacity={draw * (0.3 + 0.6 * hi(cortex))} style={{ filter: `drop-shadow(0 0 ${16 * hi(cortex)}px ${ROSE})` }} />
      </Svg>
      <At x={lensPos[0] + 40} y={lensPos[1] + 40} o={between(t, ret - 0.3, all)}><Lens /></At>
      <At x={1000} y={270} o={ramp(t, ret, 0.4)}><Chip color={ROSE} size={28}>retina?</Chip></At>
      <At x={1150} y={580} o={ramp(t, nerve, 0.4)}><Chip color={GOLD} size={28}>optic nerve?</Chip></At>
      <At x={640} y={260} o={ramp(t, lensT, 0.4)}><Chip color={TEAL} size={28}>lens?</Chip></At>
      <At x={1560} y={620} o={ramp(t, cortex, 0.4)}><Chip color={VIOLET} size={28}>visual cortex?</Chip></At>
      <At x={960} y={140} o={ramp(t, all, 0.4)}><Glow color={CHALK} size={36}>all of them together?</Glow></At>
      <At x={960} y={720} o={ramp(t, col, 0.4)}><Chip color={WARM} size={34}>every option collapses</Chip></At>
      {Array.from({ length: 5 }).map((_, i) => (
        <Flow key={i} x1={600} y1={450} x2={240} y2={250 + i * 100} color={GOLD} p={ramp(t, goes + i * 0.1, 0.8)} />
      ))}
      <At x={330} y={800} o={ramp(t, goes + 0.3, 0.5)}><Glow color={GOLD} size={38} serif>seeing goes on</Glow></At>
    </AbsoluteFill>
  );
};

const ShiftScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mis = c("A quiet mistake", 0.4), con = c("only the concept changed"), conds = c("nerves, muscles, blood flow");
  const med = c("In meditation"), tog = c("shift together");
  const split = ramp(t, conds - 0.3, 0.8);
  const shiftR = ramp(t, med, 1.0);
  const names = ["nerves", "muscles", "blood flow", "light", "attention"];
  const cols = [GOLD, ROSE, WARM, ICE, VIOLET], cols2 = [TEAL, VIOLET, ICE, INDIGO, GREEN];
  const flip = Math.floor(Math.max(0, t - con) / 0.9) % 2 === 0;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, mis, 0.5)}><Glow color={WARM} size={40} serif>a quiet mistake</Glow></At>
      {/* the mistaken picture: one unchanged eye under a changing concept */}
      <AbsoluteFill style={{ opacity: 1 - split }}>
        <At x={960} y={460} s={pop(t, fps, mis + 0.3)}><BigEye w={360} color={DIM} solid={0.6} /></At>
        <At x={960} y={260} o={ramp(t, con, 0.4)}><Chip color={GOLD} size={34}>{flip ? "seeing eye" : "meditating eye"}</Chip></At>
        <At x={960} y={680} o={ramp(t, con + 0.3, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>the same physical eye underneath</Chip><Strike at={con + 2.0} /></div></At>
      </AbsoluteFill>
      {[0, 1].map((side) => {
        const cx = side ? 1400 : 520;
        const sh = side ? shiftR : 0;
        return (
          <React.Fragment key={side}>
            <At x={cx} y={430} s={pop(t, fps, conds + side * (med - conds))} o={split}><BigEye w={280} open={side ? 1 - 0.65 * shiftR : 1} color={side ? (sh > 0.5 ? VIOLET : TEAL) : TEAL} /></At>
            {names.map((n, i) => {
              const a = Math.PI * (0.95 + i * 0.275) + sh * 0.4;
              return <At key={i} x={cx + 270 * Math.cos(a) * (side ? -1 : 1)} y={430 + 230 * Math.sin(a)} s={pop(t, fps, (side ? med : conds) + i * 0.15)} o={split}>
                <Chip color={side && sh > 0.5 ? cols2[i] : cols[i]} size={24}>{n}</Chip></At>;
            })}
            <At x={cx} y={610} o={ramp(t, side ? med : conds, 0.4) * split}><Glow color={side ? VIOLET : TEAL} size={32} serif>{side ? "the eye in meditation" : "the seeing eye"}</Glow></At>
          </React.Fragment>
        );
      })}
      <Ring x={520} y={430} p={ramp(t, tog, 1.4)} r0={150} r1={330} color={GOLD} />
      <Ring x={1400} y={430} p={ramp(t, tog, 1.4)} r0={150} r1={330} color={GOLD} />
      <At x={960} y={780} o={ramp(t, tog, 0.5)}><Chip color={DEEP} size={34}>physical event and name shift together</Chip></At>
    </AbsoluteFill>
  );
};

const EmptyDAScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const da = c("Even dependent arising", 0.4), emp = c("It too is empty"), fn = c("nothing loses its function");
  const flat = ramp(t, da + 0.6, 1.2);
  const fade = ramp(t, emp + 0.3, 1.4);
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const x = 560 + rand(i) * 800, y0 = 260 + rand(i + 5) * 300;
    return { x, y: y0 + (640 - y0) * flat * 0.9 };
  });
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [0, 5], [2, 8], [3, 10], [1, 7]];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, fn - 0.2, 0.6) }}>
        <Svg style={{ opacity: ramp(t, da, 0.5) * (1 - fade * 0.85) }}>
          {edges.map(([a, b], i) => <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={VIOLET} strokeWidth={3}
            strokeDasharray={t > emp ? "10 10" : undefined} />)}
        </Svg>
        {nodes.map((n, i) => <At key={i} x={n.x} y={n.y} s={pop(t, fps, da + i * 0.05)} o={1 - fade * 0.8}><Orb size={30} color={[VIOLET, TEAL, GOLD][i % 3]} /></At>)}
        <At x={960} y={160} o={ramp(t, da, 0.5)}><Glow color={VIOLET} size={40} serif>dependent arising</Glow></At>
        <At x={960} y={760} o={ramp(t, da + 1.2, 0.5) * (1 - fade)}><Glow color={DEEP} size={34}>the final floor?</Glow></At>
        <At x={960} y={420} o={ramp(t, emp + 0.4, 0.5)}><Glow color={ICE} size={60} serif>empty, too</Glow></At>
      </AbsoluteFill>
      <At x={560} y={440} s={pop(t, fps, fn)}><Chariot spin={t * 130} size={420} /></At>
      <At x={1360} y={440} s={pop(t, fps, fn + 0.4)}><BigEye w={300} color={GOLD} /></At>
      {[0, 1, 2].map((i) => <Flow key={i} x1={1500} y1={440} x2={1760} y2={300 + i * 140} color={GOLD} p={ramp(t, fn + 0.8 + i * 0.1, 0.6)} />)}
      <At x={960} y={760} o={ramp(t, fn + 0.6, 0.5)}><Glow color={GOLD} size={42} serif>nothing loses its function</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wr = c("The hand writing", 0.4), gr = c("the hand grasping"), mt = c("The mountain today"), fr = c("fresh participation"), nm = c("not made of anything");
  return (
    <AbsoluteFill>
      <At x={380} y={300} s={pop(t, fps, wr)}><Hand size={170} /></At>
      <Svg>
        <line x1={420} y1={250} x2={470} y2={380} stroke={GOLD} strokeWidth={6} strokeLinecap="round" opacity={ramp(t, wr, 0.4)} />
        <DrawPath d="M300 420 q20 -30 40 0 t40 0 t40 0 t40 0" p={ramp(t, wr + 0.4, 1.4)} color={ICE} width={4} len={300} />
      </Svg>
      <At x={380} y={470} o={ramp(t, wr + 0.3, 0.4)}><Glow color={ROSE} size={28}>writing</Glow></At>
      <At x={620} y={320} o={ramp(t, gr, 0.4)}><Glow color={CHALK} size={70}>≠</Glow></At>
      <At x={860} y={330} s={pop(t, fps, gr)}><div style={{ position: "relative" }}><Cup /><div style={{ position: "absolute", left: -40, top: -10, transform: "rotate(-80deg)" }}><Hand size={130} /></div></div></At>
      <At x={860} y={470} o={ramp(t, gr + 0.3, 0.4)}><Glow color={ROSE} size={28}>grasping</Glow></At>
      <At x={380} y={660} s={pop(t, fps, mt)}><Mountain w={300} /></At>
      <At x={460} y={560} s={pop(t, fps, mt + 0.2)}><Sun size={80} rot={t * 10} /></At>
      <At x={620} y={660} o={ramp(t, mt + 0.6, 0.4)}><Glow color={CHALK} size={70}>≠</Glow></At>
      <At x={860} y={660} s={pop(t, fps, mt + 0.8)}><Mountain w={300} glow={VIOLET} /></At>
      <At x={950} y={560} s={pop(t, fps, mt + 1.0)}><div style={{ width: 54, height: 54, borderRadius: "50%", boxShadow: `inset -14px -6px 0 0 ${CHALK}`, transform: "rotate(-20deg)" }} /></At>
      <At x={620} y={800} o={ramp(t, mt + 0.6, 0.4)}><Glow color={DIM} size={28}>today · yesterday</Glow></At>
      {Array.from({ length: 22 }).map((_, i) => {
        const a = (i / 22) * Math.PI * 2 + t * 0.25, r = 200 + 70 * rand(i) + 16 * Math.sin(t * 1.4 + i);
        return <At key={i} x={1440 + r * Math.cos(a)} y={400 + r * 0.8 * Math.sin(a)} s={pop(t, fps, fr + i * 0.04)}><Orb size={18 + 16 * rand(i + 2)} color={[GOLD, TEAL, VIOLET, ROSE, DEEP][i % 5]} /></At>;
      })}
      <At x={1440} y={400} o={ramp(t, fr + 0.3, 0.5)}><Glow color={GOLD} size={40} serif>fresh participation</Glow></At>
      <At x={1440} y={720}><Reveal text="not made of anything" at={nm} size={64} color={DEEP} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["chariot", 0], ["journey", c("looked like separate insights", 0.6)], ["floor", c("how a name meets the world", 0.6)],
    ["stroke", c("never assembled first", 0.6)], ["chariot", c("no building block", 0.6)], ["search", c("Search for the chariot", 0.6)],
    ["stroke", c("The central claim", 0.6)], ["mountain", c("Ready-made means carved", 0.6)], ["journey", c("nothing comes first", 0.6)],
    ["eye", c("Now turn to the eye", 0.6)], ["search", c("Search, as with the chariot", 0.6)], ["floor", c("Even dependent arising", 0.6)],
    ["close", c("The hand writing", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("looked like separate insights", 0.9)], <ChariotScene />],
    [S("looked like separate insights", "how a name meets the world"), <JourneyScene />],
    [S("how a name meets the world", "means naming"), <FloorScene />],
    [S("means naming", "never assembled first"), <DependentScene />],
    [S("never assembled first", "no building block"), <StrokeScene />],
    [S("no building block", "Search for the chariot"), <WheelScene />],
    [S("Search for the chariot", "The central claim"), <SearchScene />],
    [S("The central claim", "Ready-made means carved"), <TheoremScene />],
    [S("Ready-made means carved", "nothing comes first"), <MountainScene />],
    [S("nothing comes first", "are not stages"), <SingleScene />],
    [S("are not stages", "Now turn to the eye"), <StagesScene />],
    [S("Now turn to the eye", "Anatta comes first"), <EyeSolidScene />],
    [S("Anatta comes first", "Search, as with the chariot"), <EyeAnattaScene />],
    [S("Search, as with the chariot", "A quiet mistake"), <EyeSearchScene />],
    [S("A quiet mistake", "Even dependent arising"), <ShiftScene />],
    [S("Even dependent arising", "The hand writing"), <EmptyDAScene />],
    [S("The hand writing", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
