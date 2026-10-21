// The Observer and the Taste of Presence, Chapter 13: Analysis and the Dividing Mind. Explainer drawings timed to the narration.
// Arc: a cup becomes handle, rim and body -> cognition divides and names; motion becomes before and after -> the verses turn analysis
// on motion, fire and fuel, agent and action -> the chariot not in wheels, axle or pole -> two faces: in thought, in perception ->
// a mode of knowing, not a neutral description -> the regress of parts, no indivisible basis -> objects not unreal; parts designated ->
// analysis exposes analysis: a formation, not a discovery -> the middle-way verse -> dependent arising, emptiness, designation held
// together -> eternalism and nihilism both blocked -> the logic in one direction -> emptiness not a reality behind; not one thing not empty.
// Stance: emptiness is never drawn as a layer or backdrop; a "reality behind" and an "indivisible basis" are drawn only to be removed.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SANS, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Look at a cup", "At once it becomes a handle, a rim and a body",
  "Cognition divides", "separates it into parts, and names them", "carries the identity of the whole", "Motion becomes a before and an after",
  "the mind that divides and names",
  "answer this habit with analysis", "They take motion, fire and fuel, agent and action", "none of the divisions yields what was claimed",
  "The chariot is not in the wheels, the axle or the pole", "Motion is not in the mover", "turns the dividing mind against itself",
  "Analysis has two faces", "In thought, it separates an object into pieces", "searches for the one that carries identity",
  "In perception, the division is already built in", "because we have learned to",
  "not a neutral description", "It is a mode of knowing", "treats the parts as the real basis", "the whole as a heap that needs explaining",
  "The regress makes this visible", "Each part can be divided again", "either never ends", "a part that cannot be found when it is examined",
  "does not conclude that ordinary objects are unreal", "cannot find the intrinsic nature it assumed", "The parts, too, are designated",
  "known through the naming",
  "So analysis is used to expose analysis", "a formation, not a discovery",
  "One verse names the middle way", "that is what we call emptiness", "being dependent designation, is the middle way",
  "The verse holds three things together", "Dependent arising is the fact", "Emptiness is the lack of intrinsic nature",
  "Designation is the way such things are named", "the naming is itself dependent", "not a compromise between existence and",
  "what the middle path looks like",
  "The verse blocks two errors at once", "Eternalism treats things as having a fixed nature", "Nihilism concludes", "that nothing exists",
  "Designation avoids both", "Things are not nothing", "They do not exist in themselves",
  "The logic runs in one direction", "Whatever arises dependently comes from causes and conditions",
  "Something with intrinsic nature would need nothing else", "So whatever arises dependently lacks intrinsic nature", "And that lack is what",
  "is not a separate reality behind phenomena", "what dependent arising amounts to", "There is not one thing that has not arisen dependently",
  "not one thing that is not empty",
];

const M = {
  cup: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  chariot: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  regress: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  verse: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  open: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
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

const Head: React.FC<{ text: string; at: number; y?: number; size?: number; color?: string }> = ({ text, at, y = 150, size = 76, color }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>
    <Reveal text={text} at={at} size={size} color={color} />
  </div>
);

const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      <DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.5)} color={color} width={7} len={70} />
    </svg>
  );
};

/** A cup whose handle, rim and body can be pulled apart (apart 0..1). */
const Cup: React.FC<{ apart?: number; color?: string; steam?: boolean }> = ({ apart = 0, color = TEAL, steam = true }) => {
  const { t } = useT();
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={340} height={320} viewBox="0 0 340 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}66)` }}>
      {steam && apart < 0.05 && [0, 1, 2].map((i) => (
        <path key={i} d={`M${110 + i * 40} 40 q${10 * Math.sin(t * 2 + i)} -20 0 -40`} fill="none" stroke={ICE} strokeWidth={4} opacity={0.5} />
      ))}
      <g transform={`translate(0 ${-80 * apart})`}><ellipse cx={150} cy={70} rx={110} ry={24} fill={`${color}22`} {...st} /></g>
      <g transform={`translate(0 ${20 * apart})`}><path d="M40 74 L60 270 Q150 300 240 270 L260 74" fill={`${color}33`} {...st} /></g>
      <g transform={`translate(${90 * apart} ${10 * apart})`}><path d="M256 110 Q330 110 320 170 Q312 220 246 220" fill="none" {...st} strokeWidth={14} /></g>
    </svg>
  );
};

/** A chariot in side view whose body, wheels and pole can be pulled apart. */
const Chariot: React.FC<{ apart?: number; color?: string }> = ({ apart = 0, color = GOLD }) => {
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={220} r={62} fill={`${color}18`} {...st} />
      {[0, 1, 2, 3].map((k) => <line key={k} x1={cx + 60 * Math.cos(k * Math.PI / 4)} y1={220 + 60 * Math.sin(k * Math.PI / 4)}
        x2={cx - 60 * Math.cos(k * Math.PI / 4)} y2={220 - 60 * Math.sin(k * Math.PI / 4)} {...st} strokeWidth={3} />)}
    </g>
  );
  return (
    <svg width={460} height={320} viewBox="0 0 460 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}66)` }}>
      <g transform={`translate(${-40 * apart} ${-90 * apart})`}><path d="M90 80 L330 80 L310 170 L110 170 Z" fill={`${color}22`} {...st} /></g>
      <g transform={`translate(${-90 * apart} ${50 * apart})`}>{wheel(140)}</g>
      <g transform={`translate(${90 * apart} ${50 * apart})`}>{wheel(290)}</g>
      <g transform={`translate(0 ${70 * apart})`}><line x1={130} y1={220} x2={300} y2={220} {...st} strokeWidth={8} /></g>
      <g transform={`translate(${120 * apart} ${-30 * apart})`}><path d="M330 140 L450 110" {...st} /></g>
    </svg>
  );
};

/** A small flame. */
const Flame: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  const w = Math.sin(t * 9) * 3 + Math.sin(t * 5.3) * 2;
  return (
    <svg width={90 * size} height={140 * size} viewBox="0 0 90 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${WARM})` }}>
      <path d={`M45 ${8 + w} C70 50 82 80 70 108 C60 132 30 132 20 108 C8 80 22 50 45 ${8 + w} Z`} fill={`${WARM}cc`} />
      <path d={`M45 ${50 - w} C58 76 62 96 54 112 C48 122 42 122 36 112 C28 96 34 76 45 ${50 - w} Z`} fill="#FFE7A0" />
    </svg>
  );
};

/** A name tag on a short string. */
const Tag: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <div style={{ fontFamily: SANS, fontSize: 28, color: CHALK, padding: "4px 14px", borderRadius: 8, border: `2px solid ${color}`, background: `${color}22`, whiteSpace: "nowrap" }}>{text}</div>
);

/** A magnifying glass. */
const Lens: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={120} height={120} viewBox="0 0 120 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={48} cy={48} r={36} fill={`${color}18`} stroke={color} strokeWidth={6} />
    <line x1={74} y1={74} x2={112} y2={112} stroke={color} strokeWidth={10} strokeLinecap="round" />
  </svg>
);

// ---------------------------------------------------------------- scenes
const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("Look at a cup"), once = c("At once it becomes a handle, a rim and a body");
  const apart = ramp(t, once + 0.6, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={450} s={pop(t, fps, look)}><Cup apart={apart} /></At>
      <At x={960} y={130} o={ramp(t, look, 0.5)}><Glow color={CHALK} size={46} serif>a cup</Glow></At>
      <At x={1260} y={460} s={pop(t, fps, once + 1.0)}><Chip color={GOLD} size={32}>handle</Chip></At>
      <At x={620} y={330} s={pop(t, fps, once + 1.6)}><Chip color={ROSE} size={32}>rim</Chip></At>
      <At x={640} y={560} s={pop(t, fps, once + 2.2)}><Chip color={VIOLET} size={32}>body</Chip></At>
      <At x={960} y={780} o={ramp(t, once + 2.8, 0.5)}><Glow color={DIM} size={30}>at once, without trying</Glow></At>
    </AbsoluteFill>
  );
};

const DividesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const div = c("Cognition divides"), names = c("separates it into parts, and names them"), carry = c("carries the identity of the whole");
  const mot = c("Motion becomes a before and an after"), mind = c("the mind that divides and names");
  const look = (t - carry) * 0.8;
  return (
    <AbsoluteFill>
      <Head text="cognition divides" at={div} y={90} size={70} />
      <At x={600} y={420} s={pop(t, fps, div + 0.2)}><Cup apart={0.8} steam={false} /></At>
      <At x={790} y={430} o={ramp(t, names, 0.4)}><Tag text="handle" color={GOLD} /></At>
      <At x={600} y={280} o={ramp(t, names + 0.4, 0.4)}><Tag text="rim" color={ROSE} /></At>
      <At x={460} y={500} o={ramp(t, names + 0.8, 0.4)}><Tag text="body" color={VIOLET} /></At>
      <At x={600 + 150 * Math.cos(look)} y={420 + 90 * Math.sin(look)} o={ramp(t, carry, 0.5)}><Lens /></At>
      <At x={600} y={680} o={ramp(t, carry + 0.3, 0.5)}><Glow color={ICE} size={30}>which part is the cup?</Glow></At>
      {/* motion, cut into before and after */}
      {[0, 1, 2].map((i) => (
        <At key={i} x={1220 + i * 170} y={420} o={ramp(t, mot + i * 0.3, 0.4) * (i === 1 ? 0.5 : 1)}><Orb size={70} color={i === 2 ? TEAL : ICE} /></At>
      ))}
      <Svg><DrawPath d="M1305 340 L1305 500" p={ramp(t, mot + 0.9, 0.4)} color={CHALK} width={4} len={170} /></Svg>
      <At x={1220} y={530} o={ramp(t, mot + 1.0, 0.4)}><Glow color={DIM} size={28}>before</Glow></At>
      <At x={1475} y={530} o={ramp(t, mot + 1.2, 0.4)}><Glow color={DIM} size={28}>after</Glow></At>
      <At x={960} y={800} s={pop(t, fps, mind)}><Chip color={GOLD} size={34}>conceptual construction: dividing, naming</Chip></At>
    </AbsoluteFill>
  );
};

const VersesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ans = c("answer this habit with analysis"), take = c("They take motion, fire and fuel, agent and action"), none = c("none of the divisions yields what was claimed");
  const items: [string, string, number][] = [["motion", ICE, 0], ["fire and fuel", WARM, 0.9], ["agent and action", VIOLET, 1.8], ["everything conditioned", TEAL, 2.8]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, ans, 0.5)}><Glow color={CHALK} size={44} serif>the verses answer with analysis</Glow></At>
      {items.map(([w, col, d], i) => (
        <At key={w} x={420 + i * 360} y={360} s={pop(t, fps, take + d)}><Chip color={col} size={34}>{w}</Chip></At>
      ))}
      <At x={780} y={470} o={ramp(t, take + 1.0, 0.4)}><Flame size={0.8} /></At>
      {items.map(([w, col], i) => (
        <Svg key={w}><DrawPath d={`M${420 + i * 360} 410 L${420 + i * 360} 520 M${370 + i * 360} 560 L${470 + i * 360} 560`}
          p={ramp(t, none + i * 0.2, 0.5)} color={col} width={4} len={300} /></Svg>
      ))}
      {items.map(([w], i) => <At key={w} x={420 + i * 360} y={620} o={ramp(t, none + 0.8 + i * 0.2, 0.4)}><Glow color={DIM} size={44} serif>?</Glow></At>)}
      <At x={960} y={760} o={ramp(t, none + 0.4, 0.5)}><Glow color={GOLD} size={32}>divided: none yields what was claimed</Glow></At>
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ch = c("The chariot is not in the wheels, the axle or the pole"), mover = c("Motion is not in the mover"), turns = c("turns the dividing mind against itself");
  const loop = ramp(t, turns + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <At x={760} y={380} s={pop(t, fps, ch - 0.3)}><Chariot apart={ramp(t, ch + 0.3, 1.2) * 0.8} /></At>
      <Struck x={1340} y={260} at={ch + 0.8} strikeAt={ch + 1.5} color={GOLD}>in the wheels?</Struck>
      <Struck x={1340} y={360} at={ch + 1.4} strikeAt={ch + 2.1} color={GOLD}>in the axle?</Struck>
      <Struck x={1340} y={460} at={ch + 2.0} strikeAt={ch + 2.7} color={GOLD}>in the pole?</Struck>
      <At x={560 + 40 * Math.sin(t * 2)} y={660} o={ramp(t, mover, 0.5)}><Orb size={60} color={ICE} /></At>
      <Struck x={900} y={660} at={mover + 0.2} strikeAt={mover + 1.2} color={ICE}>motion, in the mover</Struck>
      <Svg><DrawPath d="M1220 760 C1420 760 1460 600 1340 600 C1220 600 1240 740 1300 760" p={loop} color={VIOLET} width={5} len={700} /></Svg>
      <At x={1400} y={810} o={ramp(t, turns, 0.5)}><Glow color={VIOLET} size={30}>dividing, turned on itself</Glow></At>
    </AbsoluteFill>
  );
};

const FacesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Analysis has two faces"), th = c("In thought, it separates an object into pieces"), search = c("searches for the one that carries identity");
  const per = c("In perception, the division is already built in"), learned = c("because we have learned to");
  const look = (t - search) * 0.9;
  return (
    <AbsoluteFill>
      <Head text="two faces" at={two} y={90} size={72} />
      <At x={540} y={240} o={ramp(t, th, 0.5)}><Chip color={TEAL} size={34}>in thought</Chip></At>
      <At x={540} y={480} s={pop(t, fps, th + 0.2)}><Cup apart={ramp(t, th + 0.6, 1.0)} steam={false} /></At>
      <At x={540 + 160 * Math.cos(look)} y={480 + 100 * Math.sin(look)} o={ramp(t, search, 0.5)}><Lens /></At>
      <At x={540} y={740} o={ramp(t, search + 0.4, 0.5)}><Glow color={ICE} size={28}>which piece carries identity?</Glow></At>
      <At x={1380} y={240} o={ramp(t, per, 0.5)}><Chip color={ROSE} size={34}>in perception</Chip></At>
      <At x={1380} y={480} s={pop(t, fps, per + 0.2)}><Cup steam={false} color={ROSE} /></At>
      <Svg>
        <DrawPath d="M1230 400 L1530 400" p={ramp(t, per + 0.9, 0.5)} color={GOLD} width={3} len={320} />
        <DrawPath d="M1500 420 L1500 560" p={ramp(t, per + 1.2, 0.5)} color={GOLD} width={3} len={160} />
      </Svg>
      <At x={1380} y={740} o={ramp(t, learned, 0.5)}><Glow color={ROSE} size={28}>seen in parts: a learned habit</Glow></At>
    </AbsoluteFill>
  );
};

const ModeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neu = c("not a neutral description"), mode = c("It is a mode of knowing"), basis = c("treats the parts as the real basis"), heap = c("the whole as a heap that needs explaining");
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={neu - 0.2} strikeAt={neu + 0.8} color={DIM} size={34}>a neutral description</Struck>
      <At x={960} y={220} s={pop(t, fps, mode)}><Glow color={GOLD} size={56} serif>a mode of knowing</Glow></At>
      {["handle", "rim", "body"].map((w, i) => (
        <At key={w} x={660 + i * 300} y={600} s={pop(t, fps, basis + i * 0.3)}>
          <div style={{ width: 220, height: 90, borderRadius: 10, border: `3px solid ${[GOLD, ROSE, VIOLET][i]}`, background: `${[GOLD, ROSE, VIOLET][i]}33`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontSize: 30, color: CHALK }}>{w}</div>
        </At>
      ))}
      <At x={960} y={700} o={ramp(t, basis + 0.6, 0.5)}><Glow color={DIM} size={28}>parts, treated as “the real basis”</Glow></At>
      <At x={960} y={380} s={pop(t, fps, heap)} r={Math.sin(t * 1.4) * 3}><div style={{ opacity: 0.85 }}><Cup apart={0.35} steam={false} color={DIM} /></div></At>
      <At x={1380} y={380} o={ramp(t, heap + 0.4, 0.5)}><Chip color={DIM} size={30}>the whole: a heap to explain?</Chip></At>
    </AbsoluteFill>
  );
};

const RegressScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const reg = c("The regress makes this visible"), again = c("Each part can be divided again"), never = c("either never ends");
  const nf = c("a part that cannot be found when it is examined");
  const levels = 6;
  const shown = Math.min(levels, Math.floor(ramp(t, again, 4.0) * levels + 0.001) + 1);
  const cols = [TEAL, GOLD, ROSE, VIOLET, ICE, GREEN];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, reg, 0.5)}><Glow color={CHALK} size={44} serif>the regress</Glow></At>
      {Array.from({ length: shown }).map((_, lv) => {
        const n = 2 ** lv, w = 1200 / n;
        return Array.from({ length: n }).map((__, k) => (
          <div key={`${lv}-${k}`} style={{ position: "absolute", left: 360 + k * w + 2, top: 200 + lv * 70, width: Math.max(1, w - 4), height: 50,
            borderRadius: 6, border: `2px solid ${cols[lv]}`, background: `${cols[lv]}22` }} />
        ));
      })}
      <At x={960} y={660} o={ramp(t, never, 0.5)}><Glow color={DIM} size={32}>never ends…</Glow></At>
      <At x={960} y={760} o={ramp(t, nf - 0.2, 0.5) * (1 - ramp(t, nf + 1.8, 0.8))}>
        <div style={{ width: 90, height: 60, borderRadius: 8, border: `4px dashed ${CHALK}` }} />
      </At>
      <Crossed x={960} y={760} at={nf + 1.0} size={50} />
      <At x={1300} y={760} o={ramp(t, nf + 0.3, 0.5)}><Glow color={WARM} size={28}>an indivisible basis? not found</Glow></At>
    </AbsoluteFill>
  );
};

const ConcludeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const unreal = c("does not conclude that ordinary objects are unreal"), nature = c("cannot find the intrinsic nature it assumed");
  const des = c("The parts, too, are designated"), known = c("known through the naming");
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={unreal} strikeAt={unreal + 1.4} color={DIM} size={34}>ordinary objects are unreal</Struck>
      <At x={760} y={440} s={pop(t, fps, unreal + 0.6)}><Cup apart={ramp(t, des, 1.0) * 0.7} /></At>
      <At x={760} y={680} o={ramp(t, unreal + 1.4, 0.5)}><Chip color={GREEN} size={30}>the cup still holds tea</Chip></At>
      <Struck x={1360} y={300} at={nature} strikeAt={nature + 1.4} color={GOLD} size={32}>an intrinsic nature</Struck>
      <At x={1360} y={360} o={ramp(t, nature + 0.4, 0.4)}><Glow color={DIM} size={26}>assumed, not found</Glow></At>
      <At x={980} y={450} o={ramp(t, des + 0.6, 0.4)}><Tag text="“handle”" color={GOLD} /></At>
      <At x={760} y={260} o={ramp(t, des + 0.9, 0.4)}><Tag text="“rim”" color={ROSE} /></At>
      <At x={560} y={520} o={ramp(t, des + 1.2, 0.4)}><Tag text="“body”" color={VIOLET} /></At>
      <At x={1360} y={560} s={pop(t, fps, des)}><Chip color={TEAL} size={32}>the parts, too: designated</Chip></At>
      <At x={1360} y={660} o={ramp(t, known, 0.5)}><Glow color={TEAL} size={28}>named, and known by naming</Glow></At>
    </AbsoluteFill>
  );
};

const FormationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const exp = c("So analysis is used to expose analysis"), form = c("a formation, not a discovery");
  const a = t * 0.8;
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, exp, 0.5)}><Glow color={CHALK} size={46} serif>analysis exposes analysis</Glow></At>
      <Svg>
        <DrawPath d="M960 300 A160 160 0 1 1 959 300" p={ramp(t, exp + 0.4, 1.4)} color={VIOLET} width={5} len={1100} />
      </Svg>
      <At x={960 + 160 * Math.sin(a)} y={460 - 160 * Math.cos(a)} o={ramp(t, exp + 0.6, 0.5)}><Lens color={VIOLET} /></At>
      <At x={960} y={460} s={pop(t, fps, exp + 0.4)}><Chip color={VIOLET} size={30}>the dividing mind</Chip></At>
      <At x={700} y={750} s={pop(t, fps, form)}><Chip color={GOLD} size={36}>a formation</Chip></At>
      <At x={830} y={750} o={ramp(t, form + 0.4, 0.3)}><Tick at={form + 0.5} /></At>
      <Struck x={1240} y={750} at={form + 0.6} strikeAt={form + 1.2} color={DIM} size={36}>a discovery</Struck>
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const names = c("One verse names the middle way"), call = c("that is what we call emptiness"), mid = c("being dependent designation, is the middle way");
  const lines: [string, number][] = [["Whatever is dependent co-arising,", call - 1.8], ["that is what we call emptiness.", call], ["That, being dependent designation,", mid - 0.4], ["is the middle way.", mid + 1.6]];
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, names, 0.5)}><Glow color={DIM} size={34}>one verse</Glow></At>
      <At x={960} y={430} o={ramp(t, names + 0.3, 0.6)}>
        <div style={{ width: 1300, height: 440, borderRadius: 26, border: `2px solid ${GOLD}66`, background: `${GOLD}0d`, boxShadow: `0 0 40px ${GOLD}22` }} />
      </At>
      {lines.map(([l, at], i) => (
        <div key={i} style={{ position: "absolute", top: 260 + i * 92, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text={l} at={at} size={56} speed={0.025} color={i === 3 ? GOLD : CHALK} top="#FFF8E8" />
        </div>
      ))}
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("The verse holds three things together"), da = c("Dependent arising is the fact"), em = c("Emptiness is the lack of intrinsic nature");
  const des = c("Designation is the way such things are named"), dep = c("the naming is itself dependent");
  const comp = c("not a compromise between existence and"), path = c("what the middle path looks like");
  const nodes: [string, string, number, number, number][] = [
    ["dependent arising", TEAL, 960, 280, da], ["emptiness", VIOLET, 560, 580, em], ["designation", GOLD, 1360, 580, des],
  ];
  const rot = Math.sin(t * 0.5) * 6;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, three, 0.5)}><Glow color={CHALK} size={42} serif>three, held together</Glow></At>
      {nodes.map(([, col, x, y, at], i) => {
        const [, , x2, y2, at2] = nodes[(i + 1) % 3];
        return <Flow key={i} x1={x} y1={y} x2={x2} y2={y2} color={col} p={ramp(t, Math.max(at, at2) + 0.4, 0.8)} />;
      })}
      {nodes.map(([w, col, x, y, at]) => (
        <At key={w} x={x + rot} y={y} s={pop(t, fps, at)}><Chip color={col} size={40}>{w}</Chip></At>
      ))}
      <At x={960} y={360} o={ramp(t, da + 0.6, 0.4)}><Glow color={TEAL} size={26}>from causes and conditions</Glow></At>
      <At x={560} y={660} o={ramp(t, em + 0.6, 0.4)}><Glow color={VIOLET} size={26}>no intrinsic nature</Glow></At>
      <At x={1360} y={660} o={ramp(t, dep, 0.4)}><Glow color={GOLD} size={26}>named; the naming dependent too</Glow></At>
      <Struck x={960} y={760} at={comp} strikeAt={comp + 1.6} color={DIM} size={30}>a compromise between two</Struck>
      <At x={960} y={480} o={ramp(t, path, 0.6)}><Glow color={GOLD} size={40} serif>the middle path</Glow></At>
    </AbsoluteFill>
  );
};

const ErrorsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("The verse blocks two errors at once"), et = c("Eternalism treats things as having a fixed nature"), ni = c("Nihilism concludes");
  const nothing = c("that nothing exists"), avoid = c("Designation avoids both"), notn = c("Things are not nothing"), notin = c("They do not exist in themselves");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, two, 0.5)}><Glow color={CHALK} size={44} serif>two errors, blocked at once</Glow></At>
      {/* left: a frozen, fixed block */}
      <At x={420} y={420} s={pop(t, fps, et)}>
        <div style={{ width: 200, height: 200, borderRadius: 10, background: `linear-gradient(135deg, ${ICE}88, #3a5a7a)`, border: `4px solid ${ICE}`,
          boxShadow: `0 0 30px ${ICE}88` }} />
      </At>
      <At x={420} y={600} o={ramp(t, et + 0.4, 0.4)}><Chip color={ICE} size={30}>eternalism: a fixed nature</Chip></At>
      <Crossed x={420} y={420} at={avoid + 0.3} size={90} />
      {/* right: nothing at all */}
      <At x={1500} y={420} o={ramp(t, ni, 0.5)}>
        <div style={{ width: 220, height: 220, borderRadius: "50%", border: `4px dashed ${DIM}`, background: "radial-gradient(#000, transparent 70%)" }} />
      </At>
      <At x={1500} y={600} o={ramp(t, nothing, 0.4)}><Chip color={DIM} size={30}>nihilism: nothing exists</Chip></At>
      <Crossed x={1500} y={420} at={avoid + 0.7} size={100} />
      {/* middle: the cup, named and working */}
      <At x={960} y={420} s={pop(t, fps, avoid)}><Cup /></At>
      <At x={960} y={250} o={ramp(t, avoid, 0.4)}><Tag text="“cup”" color={GOLD} /></At>
      <At x={960} y={640} o={ramp(t, avoid + 0.3, 0.4)}><Chip color={GOLD} size={34}>designation: the middle</Chip></At>
      <At x={960} y={740} o={ramp(t, notn, 0.4)}><Glow color={GREEN} size={28}>not nothing: it works, it is named</Glow></At>
      <At x={960} y={810} o={ramp(t, notin, 0.4)}><Glow color={VIOLET} size={28}>not in itself: it depends</Glow></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dir = c("The logic runs in one direction");
  const steps: [string, string, string][] = [
    ["Whatever arises dependently comes from causes and conditions", "arises dependently: from conditions", TEAL],
    ["Something with intrinsic nature would need nothing else", "intrinsic nature: would need nothing", ROSE],
    ["So whatever arises dependently lacks intrinsic nature", "so: lacks intrinsic nature", VIOLET],
    ["And that lack is what", "that lack = “empty”", GOLD],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, dir, 0.5)}><Glow color={CHALK} size={44} serif>one direction</Glow></At>
      {steps.map(([ph, l, col], i) => (
        <React.Fragment key={ph}>
          <At x={960} y={250 + i * 160} s={pop(t, fps, c(ph))}><Chip color={col} size={38}>{l}</Chip></At>
          {i > 0 && <Flow x1={960} y1={250 + (i - 1) * 160 + 40} x2={960} y2={250 + i * 160 - 40} color={col} p={ramp(t, c(ph) - 0.2, 0.4)} />}
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const NotBehindScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sep = c("is not a separate reality behind phenomena"), amt = c("what dependent arising amounts to");
  const one = c("There is not one thing that has not arisen dependently"), empty = c("not one thing that is not empty");
  const gone = ramp(t, sep + 1.6, 1.2);
  const things: [React.ReactNode, number, number][] = [
    [<Cup steam={false} />, 480, 420], [<Chariot />, 960, 420], [<Flame />, 1440, 420],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, sep, 0.5) * (1 - gone)} blur={gone * 14}>
        <div style={{ width: 1500, height: 420, borderRadius: 30, border: `3px dashed ${VIOLET}`, background: `${VIOLET}18`, display: "flex",
          alignItems: "flex-start", justifyContent: "center", paddingTop: 14, boxSizing: "border-box", fontFamily: SERIF, fontSize: 32, color: CHALK }}>a separate reality behind?</div>
      </At>
      {things.map(([n, x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, sep + 0.3 + i * 0.3) * 0.7}>{n}</At>)}
      <Crossed x={960} y={250} at={sep + 1.1} size={40} />
      <At x={960} y={130} o={ramp(t, amt, 0.5)}><Glow color={GOLD} size={38} serif>what dependent arising amounts to</Glow></At>
      {things.map(([, x], i) => (
        <At key={i} x={x} y={640} o={ramp(t, one + i * 0.4, 0.4)}><Chip color={TEAL} size={28}>dependent</Chip></At>
      ))}
      {things.map(([, x], i) => (
        <At key={i} x={x} y={720} o={ramp(t, empty + i * 0.4, 0.4)}><Chip color={VIOLET} size={28}>empty</Chip></At>
      ))}
      <At x={960} y={820} o={ramp(t, empty + 1.4, 0.5)}><Glow color={CHALK} size={30}>not one thing left out</Glow></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["cup", 0], ["chariot", c("answer this habit with analysis", 0.6)], ["cup", c("Analysis has two faces", 0.6)],
    ["regress", c("The regress makes this visible", 0.6)], ["verse", c("One verse names the middle way", 0.6)],
    ["open", c("The verse blocks two errors at once", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Cognition divides", 0.9)], <CupScene />],
    [S("Cognition divides", "answer this habit with analysis"), <DividesScene />],
    [S("answer this habit with analysis", "The chariot is not in the wheels, the axle or the pole"), <VersesScene />],
    [S("The chariot is not in the wheels, the axle or the pole", "Analysis has two faces"), <ChariotScene />],
    [S("Analysis has two faces", "not a neutral description"), <FacesScene />],
    [S("not a neutral description", "The regress makes this visible"), <ModeScene />],
    [S("The regress makes this visible", "does not conclude that ordinary objects are unreal"), <RegressScene />],
    [S("does not conclude that ordinary objects are unreal", "So analysis is used to expose analysis"), <ConcludeScene />],
    [S("So analysis is used to expose analysis", "One verse names the middle way"), <FormationScene />],
    [S("One verse names the middle way", "The verse holds three things together"), <VerseScene />],
    [S("The verse holds three things together", "The verse blocks two errors at once"), <ThreeScene />],
    [S("The verse blocks two errors at once", "The logic runs in one direction"), <ErrorsScene />],
    [S("The logic runs in one direction", "is not a separate reality behind phenomena"), <LogicScene />],
    [S("is not a separate reality behind phenomena", null), <NotBehindScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
