// Bonus 92: The Logic of Dependency. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb, PictureFrame, ROSE, Reveal,
  Ring, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Watch a candle burn", "shrinks when the door opens", "and recovers", "the answer comes before any thought", "The flame is changing",
  "Something is there",
  "That answer follows a logic", "the logic of substance", "It starts with things", "Do they arise, last, move, end",
  "This book starts one step earlier", "picked out as a thing at all", "identified only in dependence", "on parts, causes, contrasts",
  "the name under which", "the logic of dependency",
  "Do we really think in substances", "most people say no", "watch what we assume", "space as an empty room", "time as a river",
  "Every sentence holds a subject still", "Infants expect objects to persist", "falsely accused", "a solid I appears",
  "Logic here does not mean", "It means a consequence", "Whoever proposes something", "must say what it is", "by contrast and by name",
  "already dependent", "The proposal undermines itself",
  "Now look for the changer", "wax vapour, air and light", "Nothing in it is the flame", "a flickering with nothing flickering",
  "designated together", "like walker and walking",
  "The old eight extremes", "When did it begin", "Where did it go", "Is it the same, or different", "whereabouts of its own",
  "Switch off a lamp", "the light went nowhere", "Switch it on", "the light came from nowhere",
  "Identity, then", "reliably picked out", "by which criteria", "A ship with every plank replaced", "the same ship on the register",
  "That is not arbitrary", "A forged passport still fails",
  "So conventional does not mean", "where truth, in every usable sense", "no deeper world behind it", "the emptiness of this one",
  "Continuity needs no carrier", "A melody known by heart", "recognized across them all", "Nothing is stored between",
  "a habit can loosen", "a life can change",
  "The path changes too", "Anger is not a stone", "arises from conditions", "conditions can be arranged",
  "Practice works because nothing is fixed", "Even openness is not something to hold",
  "Return to the candle", "burns down through the night", "exactly as much light", "the weight with which it is watched",
];

const M = {
  candle: { a: "rgba(160,100,40,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.35)" },
  logic: { a: "rgba(80,60,150,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,110,130,0.3)" },
  assume: { a: "rgba(40,60,130,0.5)", b: "rgba(140,60,90,0.4)", c: "rgba(40,110,130,0.3)" },
  conseq: { a: "rgba(40,120,140,0.5)", b: "rgba(150,120,50,0.4)", c: "rgba(80,60,150,0.3)" },
  change: { a: "rgba(170,100,50,0.45)", b: "rgba(70,50,130,0.45)", c: "rgba(40,110,130,0.3)" },
  extremes: { a: "rgba(60,50,140,0.5)", b: "rgba(40,90,140,0.4)", c: "rgba(150,110,50,0.3)" },
  identity: { a: "rgba(40,110,150,0.5)", b: "rgba(150,110,60,0.4)", c: "rgba(70,60,140,0.3)" },
  flow: { a: "rgba(60,140,100,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.3)" },
};

// ---------------------------------------------------------------- drawings
const Flame: React.FC<{ s?: number; lean?: number; shrink?: number }> = ({ s = 1, lean = 0, shrink = 0 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (6 + k) + k * 1.7) * 8;
  const top = -170 * (1 - 0.45 * shrink) - n(1);
  const d = `M${lean * 60} ${top} C ${40 + n(2) + lean * 30} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5) + lean * 30} -90, ${lean * 60} ${top} Z`;
  return (
    <svg width={260 * s} height={340 * s} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl92" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl92)" />
      <ellipse cx={lean * 15} cy={50} rx={28} ry={45 * (1 - 0.3 * shrink)} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};

/** Candle: wax height h (px), flame on the wick. */
const Candle: React.FC<{ h?: number; lean?: number; shrink?: number; lit?: number }> = ({ h = 240, lean = 0, shrink = 0, lit = 1 }) => (
  <div style={{ position: "relative", width: 200, height: 560 }}>
    <div style={{ position: "absolute", left: 100 - 97, bottom: 40 + h - 20, width: 195, height: 255, opacity: lit }}><Flame s={0.75} lean={lean} shrink={shrink} /></div>
    <div style={{ position: "absolute", left: 98, bottom: 40 + h - 4, width: 4, height: 18, background: "#3a2a1a" }} />
    <div style={{ position: "absolute", left: 60, bottom: 40, width: 80, height: h, borderRadius: "10px 10px 4px 4px",
      background: "linear-gradient(90deg, #e9dcc0, #fff6e2 45%, #d8c7a4)", boxShadow: `0 0 40px ${GOLD}55` }} />
    <div style={{ position: "absolute", left: 30, bottom: 20, width: 140, height: 26, borderRadius: 13, background: "#8a6a3a", border: `2px solid ${GOLD}` }} />
  </div>
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

const Box: React.FC<{ label: string; color?: string; size?: number; dashed?: boolean }> = ({ label, color = CHALK, size = 150, dashed }) => (
  <div style={{ width: size, height: size, borderRadius: 16, border: `3px ${dashed ? "dashed" : "solid"} ${color}`, background: dashed ? "transparent" : `${color}22`,
    boxShadow: dashed ? undefined : `0 0 24px ${color}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 34, color: CHALK }}>{label}</div>
);

const Ship: React.FC<{ replaced: number }> = ({ replaced }) => (
  <svg width={520} height={300} viewBox="0 0 520 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <line x1={260} y1={20} x2={260} y2={170} stroke={CHALK} strokeWidth={6} />
    <path d="M265 30 L380 150 L265 150 Z" fill={`${CHALK}22`} stroke={CHALK} strokeWidth={3} />
    {Array.from({ length: 8 }).map((_, i) => {
      const x = 60 + i * 50, isNew = i < Math.round(replaced * 8);
      return <rect key={i} x={x} y={175} width={46} height={60} rx={4} fill={isNew ? "#d9b27a" : "#6e5236"} stroke={isNew ? GOLD : "#a57c52"} strokeWidth={2} />;
    })}
    <path d="M40 175 L480 175 L430 245 L90 245 Z" fill="none" stroke={ICE} strokeWidth={4} />
  </svg>
);

const Notes: React.FC<{ play: number; color?: string }> = ({ play, color = TEAL }) => (
  <svg width={300} height={130} viewBox="0 0 300 130">
    {[0, 1, 2, 3, 4].map((i) => {
      const on = ramp(play, i * 0.18, 0.1) * (1 - ramp(play, 0.95, 0.05));
      const y = 40 + [30, 10, 20, 0, 25][i];
      return <g key={i} opacity={0.25 + 0.75 * on}><ellipse cx={30 + i * 58} cy={y + 50} rx={16} ry={12} fill={color} /><line x1={46 + i * 58} y1={y + 50} x2={46 + i * 58} y2={y} stroke={color} strokeWidth={4} /></g>;
    })}
  </svg>
);

// ---------------------------------------------------------------- scenes
const CandleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const door = c("shrinks when the door opens");
  const lean = Math.sin(t * 0.8) * 0.3 + between(t, door, c("and recovers") + 0.5, 0.4) * 0.8;
  const shrink = between(t, door + 0.3, c("and recovers") + 0.3, 0.5);
  return (
    <AbsoluteFill>
      <At x={760} y={430} s={pop(t, fps, c("Watch a candle burn", 0.4))}><Candle lean={lean} shrink={shrink} /></At>
      <Svg style={{ opacity: between(t, door, c("and recovers") + 0.4, 0.4) }}>
        {[0, 1, 2].map((k) => <path key={k} d={`M1300 ${300 + k * 60} q -120 -20 -260 10`} fill="none" stroke={ICE} strokeWidth={3} strokeDasharray="12 10" />)}
      </Svg>
      <At x={1330} y={260} o={ramp(t, c("The flame is changing"), 0.5)}><Glow color={GOLD} size={46} serif>the flame is changing</Glow></At>
      <At x={1330} y={360} o={ramp(t, c("Something is there"), 0.5)}><Chip color={CHALK} size={30}>something + something happening to it</Chip></At>
    </AbsoluteFill>
  );
};

const LogicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  // the drawing starts as the narrator says "That answer follows a logic", so the board is never empty
  const sub = c("That answer follows a logic", 0.1), dep = c("the logic of dependency");
  const qs = ["arise?", "last?", "move?", "end?"];
  const links = [["parts", ROSE, -1, -1], ["causes", TEAL, 1, -1], ["contrasts", VIOLET, -1, 1], ["name", GOLD, 1, 1]] as const;
  const depAt = c("identified only in dependence");
  return (
    <AbsoluteFill>
      <At x={500} y={130} o={ramp(t, sub, 0.5)}><Glow color={DIM} size={40} serif>logic of substance</Glow></At>
      <At x={500} y={440} s={pop(t, fps, sub + 0.6)}><Box label="thing" /></At>
      {qs.map((q, i) => {
        const a = (i / 4) * Math.PI * 2 - Math.PI / 4, x = 500 + 230 * Math.cos(a), y = 440 + 200 * Math.sin(a);
        return <At key={i} x={x} y={y} s={pop(t, fps, c("Do they arise, last, move, end") + i * 0.25)}><Chip color={DIM} size={28}>{q}</Chip></At>;
      })}
      <At x={500} y={720} o={ramp(t, c("It starts with things"), 0.5)}><Glow color={DIM} size={28}>things first, then what happens to them</Glow></At>
      <At x={1420} y={130} o={ramp(t, c("This book starts one step earlier"), 0.5)}><Glow color={GOLD} size={40} serif>logic of dependency</Glow></At>
      <At x={1420} y={440} s={pop(t, fps, c("picked out as a thing at all"))}><Box label="?" color={GOLD} dashed={ramp(t, depAt, 0.5) > 0.5} /></At>
      {links.map(([w, col, dx, dy], i) => {
        const x = 1420 + dx * 250, y = 440 + dy * 190;
        const at = i < 3 ? c("on parts, causes, contrasts") + i * 0.4 : c("the name under which");
        return (
          <React.Fragment key={i}>
            <Flow x1={x} y1={y} x2={1420 + dx * 95} y2={440 + dy * 95} color={col} p={ramp(t, at, 0.6)} />
            <At x={x} y={y} s={pop(t, fps, at)}><Chip color={col} size={30}>{w}</Chip></At>
          </React.Fragment>
        );
      })}
      <At x={1420} y={760} o={ramp(t, dep, 0.5)}><Glow color={GOLD} size={30}>identified only in dependence</Glow></At>
    </AbsoluteFill>
  );
};

const AssumeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const no = c("most people say no");
  const items = [
    { at: c("space as an empty room"), x: 340, label: "space: a room", node: <svg width={220} height={150} viewBox="0 0 220 150"><g stroke={ICE} strokeWidth={3} fill="none"><rect x={10} y={10} width={200} height={130} /><rect x={75} y={50} width={70} height={50} /><path d="M10 10 L75 50 M210 10 L145 50 M10 140 L75 100 M210 140 L145 100" /></g></svg> },
    { at: c("time as a river"), x: 700, label: "time: a river", node: <svg width={220} height={150} viewBox="0 0 220 150"><g stroke={TEAL} strokeWidth={4} fill="none"><path d={`M5 ${55 + 10 * Math.sin(t * 2)} Q 60 30 110 55 T 215 55`} /><path d={`M5 ${95 + 10 * Math.sin(t * 2)} Q 60 70 110 95 T 215 95`} /></g></svg> },
    { at: c("Every sentence holds a subject still"), x: 1060, label: "grammar: subject held still", node: <div style={{ fontFamily: SERIF, fontSize: 44, color: CHALK }}><span style={{ padding: "4px 12px", border: `3px solid ${GOLD}`, borderRadius: 10 }}>the flame</span> flickers</div> },
    { at: c("Infants expect objects to persist"), x: 1420, label: "infancy: objects persist", node: <svg width={200} height={150} viewBox="0 0 200 150"><circle cx={70} cy={80} r={30} fill={ROSE} /><rect x={90} y={30} width={90} height={110} rx={8} fill="#2a2440" stroke={DIM} strokeWidth={3} /><text x={135} y={95} fill={CHALK} fontSize={40} textAnchor="middle">?</text></svg> },
  ];
  const accused = c("falsely accused");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Do we really think in substances", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>do we really think in substances?</Glow></At>
      <At x={960} y={200} o={between(t, no, c("watch what we assume") + 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>"no, everything changes"</Chip><Strike at={c("watch what we assume")} /></div></At>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <At x={it.x} y={420} s={pop(t, fps, it.at)}>{it.node}</At>
          <At x={it.x} y={540} o={ramp(t, it.at + 0.3, 0.4)}><Glow color={DIM} size={26}>{it.label}</Glow></At>
        </React.Fragment>
      ))}
      <At x={1720} y={420} s={pop(t, fps, c("a solid I appears"))}>
        <div style={{ width: 130, height: 130, borderRadius: 14, background: `${WARM}55`, border: `4px solid ${WARM}`, boxShadow: `0 0 40px ${WARM}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 80, color: "#fff" }}>I</div>
      </At>
      <At x={1720} y={540} o={ramp(t, accused, 0.4)}><Glow color={WARM} size={26}>falsely accused</Glow></At>
      <At x={960} y={720} o={ramp(t, c("watch what we assume") + 1.0, 0.6)}><Glow color={GOLD} size={38} serif>not what we say · what we assume</Glow></At>
    </AbsoluteFill>
  );
};

const ConseqScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const steps = [
    { at: c("Whoever proposes something"), label: "something from its own side", col: GOLD },
    { at: c("must say what it is"), label: "say what it is", col: CHALK },
    { at: c("by contrast and by name"), label: "picked out by contrast and name", col: TEAL },
    { at: c("already dependent"), label: "already dependent", col: VIOLET },
  ];
  const self = c("The proposal undermines itself");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Logic here does not mean", 0.3), 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>beyond reason</Chip><Strike at={c("It means a consequence")} /></div></At>
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a consequence" at={c("It means a consequence")} size={76} />
      </div>
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <At x={330 + i * 420} y={470} s={pop(t, fps, s.at)}><Chip color={s.col} size={32}>{s.label}</Chip></At>
          {i < 3 && <Flow x1={480 + i * 420} y1={470} x2={600 + i * 420} y2={470} color={s.col} p={ramp(t, steps[i + 1].at, 0.5)} />}
        </React.Fragment>
      ))}
      <Svg style={{ opacity: ramp(t, self, 0.5) }}>
        <DrawPath d="M1590 520 C 1590 720, 330 720, 330 520" p={ramp(t, self, 1.2)} color={WARM} width={5} len={1700} />
      </Svg>
      <Crossed x={330} y={470} at={self + 1.0} size={60} />
      <At x={960} y={760} o={ramp(t, self + 0.6, 0.5)}><Glow color={WARM} size={38} serif>the proposal undermines itself</Glow></At>
    </AbsoluteFill>
  );
};

const ChangerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Now look for the changer", 0.3);
  const stuff = c("wax vapour, air and light");
  const pair = c("designated together");
  return (
    <AbsoluteFill>
      <At x={620} y={430} s={pop(t, fps, t0)}><Candle /></At>
      {Array.from({ length: 18 }).map((_, i) => {
        const u = ((t - stuff) * 0.35 + rand(i)) % 1;
        const col = [GOLD, ICE, "#FFF2B0"][i % 3];
        return <At key={i} x={620 + (rand(i + 2) - 0.5) * 140 + (i % 2 ? 1 : -1) * u * 120} y={330 - u * 260} o={t > stuff ? Math.sin(u * Math.PI) * 0.8 : 0}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: col, boxShadow: `0 0 8px ${col}` }} /></At>;
      })}
      <At x={1300} y={230} o={ramp(t, stuff, 0.5)}><Glow color={GOLD} size={32}>vapour · air · light, never the same</Glow></At>
      <At x={1300} y={330} o={ramp(t, c("Nothing in it is the flame"), 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>the flame across the minute</Chip><Strike at={c("Nothing in it is the flame") + 0.8} /></div></At>
      <At x={1300} y={430} o={ramp(t, c("a flickering with nothing flickering"), 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>flickering with nothing flickering</Chip><Strike at={c("a flickering with nothing flickering") + 1.2} /></div></At>
      <At x={1180} y={600} s={pop(t, fps, pair)}><Chip color={TEAL} size={36}>changer</Chip></At>
      <At x={1440} y={600} s={pop(t, fps, pair)}><Chip color={TEAL} size={36}>change</Chip></At>
      <Ring x={1310} y={600} p={ramp(t, pair, 1.2)} r0={40} r1={300} color={TEAL} />
      <At x={1310} y={720} o={ramp(t, c("like walker and walking"), 0.5)}><Glow color={TEAL} size={32} serif>like walker and walking: together</Glow></At>
    </AbsoluteFill>
  );
};

const ExtremesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const qs = [["When did it begin", "began?"], ["Where did it go", "went where?"], ["Is it the same, or different", "same or different?"]] as const;
  const where = c("whereabouts of its own");
  const off = c("Switch off a lamp"), on = c("Switch it on");
  const lit = off ? (t < off + 0.3 ? 1 : t < on + 0.3 ? 0 : 1) : 1;
  const bulb = ramp(t, off - 0.6, 0.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, c("The old eight extremes", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>the eight extremes ask: where is it?</Glow></At>
      {qs.map(([ph, w], i) => <At key={i} x={420 + i * 540} y={220} s={pop(t, fps, c(ph, 0.2))}><Chip color={ICE} size={32}>{w}</Chip></At>)}
      <At x={960} y={320} o={ramp(t, where, 0.5)}><Glow color={WARM} size={32}>each assumes something with whereabouts of its own</Glow></At>
      <At x={960} y={560} o={bulb}>
        <div style={{ position: "relative", width: 900, height: 360, borderRadius: 16, border: `3px solid ${DIM}`, background: lit ? `radial-gradient(circle at 50% 20%, #FFE9A888, #2a243044 70%)` : "#05050a", overflow: "hidden" }}>
          <svg width={900} height={360} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={450} y1={0} x2={450} y2={50} stroke={DIM} strokeWidth={3} />
            <circle cx={450} cy={75} r={26} fill={lit ? "#FFE9A8" : "#333"} style={{ filter: lit ? "drop-shadow(0 0 30px #FFE9A8)" : undefined }} />
          </svg>
        </div>
      </At>
      <At x={760} y={790} o={ramp(t, c("the light went nowhere"), 0.4)}><Glow color={DIM} size={32}>went nowhere</Glow></At>
      <At x={1160} y={790} o={ramp(t, c("the light came from nowhere"), 0.4)}><Glow color={GOLD} size={32}>came from nowhere</Glow></At>
    </AbsoluteFill>
  );
};

const IdentityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ship = c("A ship with every plank replaced");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Identity, then", 0.3), 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={32}>an essence hidden inside</Chip><Strike at={c("reliably picked out") - 0.3} /></div></At>
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="reliably picked out" at={c("reliably picked out")} size={70} color={ICE} top="#F0FBFF" />
      </div>
      <At x={960} y={290} o={ramp(t, c("by which criteria"), 0.5)}><Glow color={CHALK} size={32}>which criteria · which purpose</Glow></At>
      <At x={760} y={530} s={pop(t, fps, ship)}><Ship replaced={ramp(t, ship + 0.3, 3.0)} /></At>
      <At x={1380} y={470} s={pop(t, fps, c("the same ship on the register"))}><Chip color={GREEN} size={32}>register: same ship ✓</Chip></At>
      <At x={1380} y={620} s={pop(t, fps, c("A forged passport still fails"))}><Chip color={WARM} size={32}>forged passport ✗</Chip></At>
      <At x={1380} y={720} o={ramp(t, c("That is not arbitrary"), 0.5)}><Glow color={GOLD} size={30}>not arbitrary</Glow></At>
    </AbsoluteFill>
  );
};

const ConventionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const deeper = c("no deeper world behind it");
  const fall = ramp(t, deeper + 0.8, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={200} o={ramp(t, c("So conventional does not mean", 0.3), 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={36}>"merely" conventional</Chip><Strike at={c("So conventional does not mean") + 1.4} /></div></At>
      <div style={{ position: "absolute", top: 300, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="where truth lives" at={c("where truth, in every usable sense")} size={88} />
      </div>
      <At x={960 + fall * 80} y={560 - fall * 200} o={ramp(t, deeper, 0.4) * (1 - fall)} r={fall * 10}>
        <PictureFrame x={0} y={0} w={500} h={180} tag="a deeper world behind?" dashed />
      </At>
      <At x={960} y={720} o={ramp(t, c("the emptiness of this one"), 0.5)}><Glow color={ICE} size={40} serif>ultimate truth: the emptiness of this one</Glow></At>
    </AbsoluteFill>
  );
};

const ContinuityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mel = c("A melody known by heart");
  const play = (k: number) => ramp(t, mel + 0.6 + k * 1.5, 1.4);
  const stored = c("Nothing is stored between");
  const loosen = ramp(t, c("a habit can loosen"), 1.5);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Continuity needs no carrier", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>continuity without a carrier</Glow></At>
      {[0, 1, 2].map((k) => (
        <At key={k} x={420 + k * 540} y={330} s={pop(t, fps, mel + k * 1.5)}><Notes play={play(k)} color={[TEAL, GOLD, ROSE][k]} /></At>
      ))}
      <At x={960} y={450} o={ramp(t, c("recognized across them all"), 0.5)}><Glow color={TEAL} size={32}>new each playing · the same tune recognized</Glow></At>
      {[0, 1].map((k) => (
        <React.Fragment key={k}>
          <At x={690 + k * 540} y={330} o={ramp(t, stored, 0.4) * (1 - ramp(t, stored + 1.4, 0.5))}><Box label="" size={80} color={DIM} dashed /></At>
          <Crossed x={690 + k * 540} y={330} at={stored + 0.6} size={36} />
        </React.Fragment>
      ))}
      <Svg style={{ opacity: ramp(t, c("a habit can loosen") - 0.3, 0.4) }}>
        <path d={`M600 680 C ${720 + 80 * (1 - loosen)} ${600 + 60 * (1 - loosen)}, ${800 - 60 * (1 - loosen)} ${760 - 50 * (1 - loosen)}, 960 680 S 1240 ${680 - 40 * (1 - loosen)} 1320 680`}
          fill="none" stroke={GOLD} strokeWidth={8} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
      </Svg>
      <At x={960} y={780} o={ramp(t, c("a life can change"), 0.5)}><Glow color={GOLD} size={34}>a habit loosens · a life changes</Glow></At>
    </AbsoluteFill>
  );
};

const PathScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const stone = c("Anger is not a stone");
  const cond = c("arises from conditions");
  const arr = ramp(t, c("conditions can be arranged"), 2.0);
  const dials = [["attention", TEAL], ["interpretation", VIOLET], ["posture", GREEN], ["circumstance", ICE]] as const;
  const hold = c("Even openness is not something to hold");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("The path changes too", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>the path changes too</Glow></At>
      <At x={560} y={380} s={pop(t, fps, stone)}>
        <div style={{ width: 200, height: 160, borderRadius: "40% 50% 45% 55%", background: `radial-gradient(circle at 40% 35%, ${WARM}, #6a1f14)`,
          boxShadow: `0 0 ${50 * (1 - arr)}px ${WARM}`, opacity: 1 - 0.6 * arr, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 38, color: "#fff" }}>anger</div>
      </At>
      <At x={560} y={540} o={ramp(t, stone + 0.4, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={28}>a stone to lift out</Chip><Strike at={stone + 1.2} /></div></At>
      {dials.map(([w, col], i) => {
        const x = 1080 + (i % 2) * 380, y = 300 + Math.floor(i / 2) * 200;
        return (
          <React.Fragment key={i}>
            <At x={x} y={y} s={pop(t, fps, cond + i * 0.2)} r={-120 + 200 * arr}>
              <div style={{ width: 90, height: 90, borderRadius: "50%", border: `4px solid ${col}`, boxShadow: `0 0 18px ${col}`, position: "relative" }}>
                <div style={{ position: "absolute", left: 41, top: 6, width: 6, height: 36, background: col, borderRadius: 3 }} />
              </div>
            </At>
            <At x={x} y={y + 75} o={ramp(t, cond + i * 0.2, 0.4)}><Glow color={col} size={24}>{w}</Glow></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={720} o={ramp(t, c("Practice works because nothing is fixed"), 0.5)}><Glow color={GOLD} size={38} serif>practice works because nothing is fixed</Glow></At>
      <At x={960} y={800} o={ramp(t, hold, 0.4)}><div style={{ position: "relative" }}><Chip color={ICE} size={28}>openness, to be held</Chip><Strike at={hold + 1.2} /></div></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Return to the candle", 0.3);
  const melt = ramp(t, c("burns down through the night"), 4.0);
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, t0)}><Candle h={240 - 110 * melt} /></At>
      <At x={960} y={300} o={ramp(t, c("exactly as much light"), 1.0) * 0.8}><div style={{ width: 760, height: 760, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}44, transparent 62%)` }} /></At>
      <div style={{ position: "absolute", top: 720, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="only the weight with which it is watched" at={c("the weight with which it is watched")} size={60} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["candle", 0], ["logic", c("That answer follows a logic", 0.6)], ["assume", c("Do we really think in substances", 0.6)],
    ["conseq", c("Logic here does not mean", 0.6)], ["change", c("Now look for the changer", 0.6)], ["extremes", c("The old eight extremes", 0.6)],
    ["identity", c("Identity, then", 0.6)], ["extremes", c("So conventional does not mean", 0.6)], ["flow", c("Continuity needs no carrier", 0.6)],
    ["conseq", c("The path changes too", 0.6)], ["candle", c("Return to the candle", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("That answer follows a logic", 0.9)], <CandleScene />],
    [S("That answer follows a logic", "Do we really think in substances"), <LogicsScene />],
    [S("Do we really think in substances", "Logic here does not mean"), <AssumeScene />],
    [S("Logic here does not mean", "Now look for the changer"), <ConseqScene />],
    [S("Now look for the changer", "The old eight extremes"), <ChangerScene />],
    [S("The old eight extremes", "Identity, then"), <ExtremesScene />],
    [S("Identity, then", "So conventional does not mean"), <IdentityScene />],
    [S("So conventional does not mean", "Continuity needs no carrier"), <ConventionScene />],
    [S("Continuity needs no carrier", "The path changes too"), <ContinuityScene />],
    [S("The path changes too", "Return to the candle"), <PathScene />],
    [S("Return to the candle", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
