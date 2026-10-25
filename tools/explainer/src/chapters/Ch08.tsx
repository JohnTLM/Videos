// Chapter 8: States of Awareness, Deep Sleep, and Death. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb,
  PictureFrame, ROSE, Reveal, Ring, SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "count backwards from ten", "You reach seven", "a nurse is saying", "in a different room",
  "Three hours have passed", "In experience, none have", "no darkness to sit through", "the after simply touch",
  "picture awareness as a light", "either on or off", "Deep sleep, anaesthesia, coma", "the switch being thrown",
  "every night is a small", "rehearsal of annihilation", "needs awareness to be", "could be switched off",
  "A substrateless view reads", "a quieter configuration", "not the destruction", "The body's processes go on",
  "not a deeper layer", "other aspects of the same",
  "those missing hours", "real for the operating theatre", "recorded, charted and billed", "absent from the framework",
  "Each account is correct", "Neither finds a time",
  "Notice the next time you wake", "a brief moment before", "Light through the curtain", "The weight of the blanket",
  "A sound from the street", "No one yet in particular", "Then it all returns", "This room", "This day", "My name",
  "was not waiting somewhere", "put together again", "memory, habit and circumstance", "works perfectly well", "nowhere to be found",
  "Dreams show the same thing", "A whole world appears", "Streets, faces", "a body that runs", "The dreamed door opens",
  "On waking, none of it", "Vivid and coherent",
  "What, then, is death", "It too is designated", "the paradigm doing", "A paradigm is a whole framework", "Medicine names death",
  "Law names it", "Contemplative traditions speak", "a stream of mind", "Each is valid", "None finds a death",
  "A king asked the monk", "whether anything passes over", "pointed to a lamp", "lit from another lamp", "Nothing passes over",
  "the second flame",
  "Ending and continuing", "Neither is found under analysis", "neither is simply nothing", "Death is not denied",
  "relieved of the substance", "a final annihilation", "the passage of a soul", "a wall at the end", "a doorway into another room",
  "This does not end grief", "The empty chair", "the shape of the dread", "a self falling into nothing",
  "neither the self nor the nothing", "the fear loses its object", "Love, sorrow and care", "exactly where they were",
];

const M = {
  under: { a: "rgba(40,90,150,0.5)", b: "rgba(60,60,140,0.45)", c: "rgba(30,110,130,0.3)" },
  clock: { a: "rgba(30,120,140,0.5)", b: "rgba(150,120,50,0.4)", c: "rgba(60,60,150,0.3)" },
  light: { a: "rgba(110,60,170,0.5)", b: "rgba(170,130,60,0.4)", c: "rgba(60,40,120,0.3)" },
  sleep: { a: "rgba(30,50,130,0.55)", b: "rgba(40,110,140,0.4)", c: "rgba(90,60,150,0.3)" },
  hours: { a: "rgba(30,120,130,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.3)" },
  wake: { a: "rgba(190,120,60,0.45)", b: "rgba(170,90,110,0.4)", c: "rgba(60,90,150,0.3)" },
  self: { a: "rgba(160,70,110,0.45)", b: "rgba(110,60,170,0.4)", c: "rgba(170,130,60,0.3)" },
  dream: { a: "rgba(120,60,180,0.5)", b: "rgba(190,90,150,0.4)", c: "rgba(40,90,160,0.3)" },
  death: { a: "rgba(30,100,120,0.5)", b: "rgba(120,100,60,0.4)", c: "rgba(60,60,120,0.3)" },
  lamp: { a: "rgba(180,100,40,0.5)", b: "rgba(150,70,60,0.4)", c: "rgba(170,130,60,0.35)" },
  end: { a: "rgba(90,60,160,0.45)", b: "rgba(30,110,130,0.4)", c: "rgba(150,110,50,0.35)" },
  grief: { a: "rgba(150,70,90,0.45)", b: "rgba(170,120,60,0.4)", c: "rgba(80,60,150,0.3)" },
};

// ---------------------------------------------------------------- small parts
const Tick: React.FC<{ p: number; color?: string; size?: number }> = ({ p, color = GREEN, size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
    <DrawPath d="M8 32 L24 48 L54 12" p={p} color={color} width={7} len={80} />
  </svg>
);

const Cross: React.FC<{ x: number; y: number; r: number; at: number }> = ({ x, y, r, at }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={3 * r} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={3 * r} />
    </Svg>
  );
};

const Clock: React.FC<{ size: number; hour: number; minute: number; color: string; dashed?: boolean }> = ({ size, hour, minute, color, dashed }) => (
  <svg width={size} height={size} viewBox="-110 -110 220 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <circle r={100} fill={`${color}18`} stroke={color} strokeWidth={5} strokeDasharray={dashed ? "14 10" : undefined} />
    {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-86} x2={0} y2={i % 3 ? -78 : -70} stroke={color} strokeWidth={i % 3 ? 3 : 5} transform={`rotate(${i * 30})`} />)}
    <line x1={0} y1={8} x2={0} y2={-50} stroke={CHALK} strokeWidth={8} strokeLinecap="round" transform={`rotate(${hour})`} />
    <line x1={0} y1={10} x2={0} y2={-76} stroke={CHALK} strokeWidth={5} strokeLinecap="round" transform={`rotate(${minute})`} />
    <circle r={8} fill={GOLD} />
  </svg>
);

const Bulb: React.FC<{ on: number; size?: number }> = ({ on, size = 260 }) => (
  <svg width={size} height={size * 1.35} viewBox="-100 -120 200 270" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${10 + on * 50}px ${GOLD})` }}>
    <defs><radialGradient id="c8bulb" cx="0.45" cy="0.4" r="0.6"><stop offset="0" stopColor="#FFF7D6" /><stop offset="1" stopColor="#F2B24B" /></radialGradient></defs>
    <path d="M-45 60 C -45 25, -85 0, -85 -35 C -85 -85, -45 -115, 0 -115 C 45 -115, 85 -85, 85 -35 C 85 0, 45 25, 45 60 Z"
      fill="url(#c8bulb)" fillOpacity={0.08 + on * 0.85} stroke={on > 0.5 ? GOLD : DIM} strokeWidth={5} />
    <path d="M-20 55 L-20 0 L0 -25 L20 0 L20 55" fill="none" stroke={on > 0.5 ? "#fff" : DIM} strokeWidth={4} opacity={0.8} />
    {[70, 88, 106].map((y) => <rect key={y} x={-42} y={y} width={84} height={12} rx={5} fill="#5c5a70" stroke={DIM} strokeWidth={2} />)}
    <path d="M-20 122 L20 122 L8 140 L-8 140 Z" fill="#3c3a4a" />
  </svg>
);

const Switch: React.FC<{ on: number }> = ({ on }) => (
  <div style={{ width: 110, height: 200, borderRadius: 22, border: `3px solid ${CHALK}`, background: "rgba(255,255,255,0.06)", position: "relative",
    boxShadow: `0 0 26px ${on > 0.5 ? GOLD : VIOLET}66` }}>
    <div style={{ position: "absolute", left: 20, top: 20 + (1 - on) * 80, width: 70, height: 80, borderRadius: 14,
      background: on > 0.5 ? `linear-gradient(${GOLD}, #b88a3c)` : "linear-gradient(#55536a, #33324a)", boxShadow: `0 0 18px ${on > 0.5 ? GOLD : "#000"}` }} />
  </div>
);

const Moon: React.FC<{ size: number; color?: string }> = ({ size, color = ICE }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 12px ${color})` }}>
    <path d="M62 10 A 42 42 0 1 0 90 66 A 34 34 0 1 1 62 10 Z" fill={`${color}55`} stroke={color} strokeWidth={4} />
  </svg>
);
const Mask: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
    <path d="M30 35 Q50 18 70 35 L76 62 Q50 82 24 62 Z" fill={`${TEAL}33`} stroke={TEAL} strokeWidth={4} strokeLinejoin="round" />
    <path d="M50 78 L50 96" stroke={TEAL} strokeWidth={5} /><path d="M10 40 L30 42 M90 40 L70 42" stroke={TEAL} strokeWidth={3} />
  </svg>
);
const Monitor: React.FC<{ size: number; color?: string }> = ({ size, color = GREEN }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <rect x={8} y={14} width={84} height={60} rx={8} fill={`${color}18`} stroke={color} strokeWidth={4} />
    <path d="M14 46 L34 46 L40 30 L48 60 L54 46 L86 46" fill="none" stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <path d="M40 74 L36 90 M60 74 L64 90 M30 90 L70 90" stroke={color} strokeWidth={4} />
  </svg>
);
const Stone: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${DIM})` }}>
    <path d="M24 92 L24 40 Q24 10 50 10 Q76 10 76 40 L76 92 Z" fill="#ffffff12" stroke={CHALK} strokeWidth={4} />
    <path d="M14 92 L86 92" stroke={DIM} strokeWidth={5} /><path d="M50 30 L50 62 M38 42 L62 42" stroke={DIM} strokeWidth={4} />
  </svg>
);

const Person: React.FC<{ size: number; color: string; fill?: number; dashed?: boolean }> = ({ size, color, fill = 0, dashed }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 100 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + fill * 18}px ${color})` }}>
    <circle cx={50} cy={30} r={22} fill={color} fillOpacity={0.08 + fill * 0.55} stroke={color} strokeWidth={4} strokeDasharray={dashed ? "8 7" : undefined} />
    <path d="M10 118 C 10 78, 28 62, 50 62 C 72 62, 90 78, 90 118 Z" fill={color} fillOpacity={0.08 + fill * 0.55} stroke={color} strokeWidth={4}
      strokeDasharray={dashed ? "8 7" : undefined} strokeLinejoin="round" />
  </svg>
);

const SmallFlame: React.FC<{ lit: number; seed?: number; size?: number }> = ({ lit, seed = 0, size = 1 }) => {
  const { t } = useT();
  if (lit <= 0.01) return null;
  const n = (k: number) => Math.sin(t * (6 + k) + k * 1.7 + seed) * 5;
  const h = 90 * lit;
  const d = `M0 ${-h - n(1)} C ${22 + n(2)} ${-h * 0.5}, 34 -10, 26 12 C 18 30, -18 30, -26 12 C -34 -10, ${-22 + n(3)} ${-h * 0.5}, 0 ${-h - n(1)} Z`;
  return (
    <svg width={120 * size} height={160 * size} viewBox="-60 -125 120 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 24px ${WARM}) drop-shadow(0 0 40px ${GOLD})` }}>
      <defs><radialGradient id={`c8fl${seed}`} cx="0.5" cy="0.75" r="0.7"><stop offset="0" stopColor="#FFF4B8" /><stop offset="0.55" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill={`url(#c8fl${seed})`} />
      <ellipse cx={0} cy={2} rx={9} ry={18 * lit} fill="#FFF8DA" opacity={0.9} />
    </svg>
  );
};

const OilLamp: React.FC<{ lit: number; seed: number }> = ({ lit, seed }) => (
  <div style={{ position: "relative", width: 260, height: 260 }}>
    <div style={{ position: "absolute", left: 70, top: -20 }}><SmallFlame lit={lit} seed={seed} /></div>
    <svg width={260} height={260} viewBox="0 0 260 260" style={{ position: "absolute", left: 0, top: 0, overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD}88)` }}>
      <path d="M30 150 Q130 250 230 150 L200 150 Q240 130 230 120 L150 135 Z" fill="#8a5a2c" stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
      <path d="M30 150 L150 135" stroke={GOLD} strokeWidth={3} />
      <rect x={124} y={118} width={12} height={22} rx={3} fill="#3a2a1a" />
      <path d="M90 225 L170 225 L160 245 L100 245 Z" fill="#6b4422" stroke={GOLD} strokeWidth={3} />
    </svg>
  </div>
);

// ---------------------------------------------------------------- 1. going under
const UnderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("count backwards from ten"), seven = c("You reach seven");
  const nurse = c("a nurse is saying"), room = c("in a different room");
  const step = Math.max(0.45, (seven - t0 - 0.6) / 3);
  const nums = ["10", "9", "8", "7"].map((s, i) => ({ s, at: i < 3 ? t0 + 0.6 + i * step : seven + 0.1 }));
  const dim = ramp(t, seven + 0.6, 1.2) * (1 - ramp(t, nurse - 0.2, 0.8));
  const wake = ramp(t, nurse, 0.8);
  const ecg = (x: number) => {
    const u = ((x - 300 + t * 260) % 420) / 420;
    const k = 1 - 0.6 * dim;
    return 690 - (u > 0.42 && u < 0.46 ? -40 * k : u > 0.46 && u < 0.5 ? 90 * k : u > 0.5 && u < 0.54 ? -30 * k : 0);
  };
  const xs = Array.from({ length: 140 }, (_, i) => 300 + i * 10);
  const ecgD = xs.map((x, i) => `${i ? "L" : "M"}${x} ${ecg(x).toFixed(1)}`).join(" ");
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, t0, 0.8) * (1 - wake) }}>
        <path d={ecgD} fill="none" stroke={GREEN} strokeWidth={4} style={{ filter: `drop-shadow(0 0 8px ${GREEN})` }} />
      </Svg>
      {nums.map((n, i) => {
        const on = ramp(t, n.at, 0.3), off = i < 3 ? ramp(t, (nums[i + 1]?.at ?? n.at) - 0.05, 0.3) : ramp(t, seven + 0.9, 1.4);
        return <At key={i} x={960} y={380} s={0.8 + 0.2 * on + (i === 3 ? 0.3 * off : 0)} o={on * (1 - off)} blur={i === 3 ? off * 26 : off * 8}>
          <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 260, color: CHALK, textShadow: `0 0 30px ${ICE}` }}>{n.s}</div>
        </At>;
      })}
      <AbsoluteFill style={{ background: "#03030a", opacity: dim * 0.75 }} />
      {/* the new room */}
      <Svg style={{ opacity: wake }}>
        <DrawPath d="M360 760 L360 260 L620 260 L620 760" p={ramp(t, room, 1.0)} color={CHALK} width={5} len={1300} />
        <DrawPath d="M1250 300 L1600 300 L1600 560 L1250 560 Z" p={ramp(t, room + 0.3, 1.0)} color={ICE} width={4} len={1300} />
        <DrawPath d="M1425 300 L1425 560 M1250 430 L1600 430" p={ramp(t, room + 0.7, 0.8)} color={ICE} width={3} len={700} />
        <circle cx={590} cy={520} r={10} fill={GOLD} opacity={ramp(t, room + 0.8, 0.4)} />
      </Svg>
      <At x={1430} y={430} o={ramp(t, room + 0.6, 1)}><div style={{ width: 300, height: 220, background: `radial-gradient(${GOLD}66, transparent 70%)` }} /></At>
      <At x={930} y={500} s={pop(t, fps, nurse + 0.2)}><Person size={150} color={TEAL} fill={0.4} /></At>
      <At x={1100} y={300} s={pop(t, fps, nurse + 0.6, 10)}>
        <div style={{ position: "relative", padding: "16px 34px", borderRadius: 26, border: `2px solid ${CHALK}`, background: "rgba(255,255,255,0.08)",
          boxShadow: `0 0 30px ${TEAL}55`, fontFamily: SERIF, fontSize: 56, color: CHALK }}>
          … your name?
          <div style={{ position: "absolute", left: 40, bottom: -22, width: 0, height: 0, borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderTop: `22px solid ${CHALK}` }} />
        </div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the two clocks
const ClockScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Three hours have passed");
  const spin = ramp(t, t0 + 0.2, 2.6);
  const exp = c("In experience, none have");
  const dark = ramp(t, c("no darkness to sit through"), 0.4);
  const touch = ramp(t, c("the after simply touch"), 1.0);
  const gapW = 360 * (1 - touch);
  return (
    <AbsoluteFill>
      <At x={620} y={360} s={pop(t, fps, t0)}><Clock size={330} hour={300 + spin * 90} minute={spin * 1080} color={GOLD} /></At>
      <At x={620} y={570} o={ramp(t, t0 + 0.3, 0.5)}><Glow color={GOLD} size={40}>the clock</Glow></At>
      <At x={1300} y={360} s={pop(t, fps, exp)}><Clock size={330} hour={300} minute={0} color={ICE} /></At>
      <At x={1300} y={570} o={ramp(t, exp + 0.3, 0.5)}><Glow color={ICE} size={40}>experience</Glow></At>
      <Ring x={1300} y={360} p={ramp(t, exp + 0.6, 1.4)} r0={170} r1={260} color={ICE} />
      {/* before | gap | after */}
      <div style={{ position: "absolute", top: 680, left: 0, width: "100%", height: 80, display: "flex", justifyContent: "center", alignItems: "center",
        opacity: ramp(t, exp + 0.8, 0.6) }}>
        <div style={{ width: 380, height: 54, borderRadius: 27, background: `linear-gradient(90deg, ${TEAL}22, ${TEAL})`, boxShadow: `0 0 24px ${TEAL}`,
          fontFamily: SERIF, fontSize: 36, color: "#fff", textAlign: "center", lineHeight: "54px" }}>before</div>
        <div style={{ width: gapW, height: 54, position: "relative" }}>
          <div style={{ position: "absolute", inset: "0 10px", borderRadius: 12, background: "#020208", border: `2px dashed ${DIM}`, opacity: (1 - dark) * (gapW > 20 ? 1 : 0) }} />
        </div>
        <div style={{ width: 380, height: 54, borderRadius: 27, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}22)`, boxShadow: `0 0 24px ${GOLD}`,
          fontFamily: SERIF, fontSize: 36, color: "#fff", textAlign: "center", lineHeight: "54px" }}>after</div>
      </div>
      <Ring x={960} y={720} p={ramp(t, c("the after simply touch") + 0.9, 1.0)} r0={20} r1={200} color={CHALK} />
      <At x={960} y={640} o={between(t, c("no darkness to sit through") + 0.2, c("the after simply touch"))}><Glow color={DIM} size={30}>no darkness, no waiting</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the light switch picture
const SwitchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("picture awareness as a light");
  const flick = c("either on or off");
  const thrown = c("the switch being thrown");
  const cycle = t > flick && t < flick + 2.2 ? (Math.floor((t - flick) * 2.2) % 2 === 0 ? 0 : 1) : 1;
  const on = t < thrown ? cycle * ramp(t, t0, 0.8) : 1 - ramp(t, thrown + 0.3, 0.3);
  const icons = [[<Moon size={110} />, "deep sleep"], [<Mask size={110} />, "anaesthesia"], [<Monitor size={110} />, "coma"], [<Stone size={110} />, "death"]] as const;
  const ia = c("Deep sleep, anaesthesia, coma");
  const night = c("every night is a small");
  const box = c("needs awareness to be");
  const boxP = ramp(t, box, 0.9);
  const off2 = c("could be switched off");
  const out = ramp(t, off2 + 1.4, 0.8);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transform: `translateX(${-boxP * 120}px)` }}>
        <At x={800} y={360} s={pop(t, fps, t0)}><Bulb on={on} /></At>
        <At x={1120} y={380} s={pop(t, fps, flick)} o={1 - boxP}><Switch on={t < thrown + 0.3 ? cycle : 0} /></At>
      </AbsoluteFill>
      <Svg style={{ opacity: boxP * (1 - out) }}>
        <rect x={500} y={150} width={360} height={440} rx={18} fill="none" stroke={VIOLET} strokeWidth={5}
          style={{ filter: `drop-shadow(0 0 12px ${VIOLET})`, clipPath: `inset(0 ${(1 - boxP) * 100}% 0 0)` }} />
      </Svg>
      <At x={1280} y={330} o={boxP}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={48}>a self-contained thing?</Glow><Strike at={off2 + 0.6} /></div>
      </At>
      <At x={1280} y={420} o={ramp(t, off2, 0.5)}><Glow color={VIOLET} size={36}>only a thing could be switched off</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, box - 0.3, 0.5) }}>
        {icons.map(([ic, lab], i) => (
          <At key={i} x={480 + i * 320} y={720} s={pop(t, fps, ia + i * 0.45)}>
            <div style={{ opacity: i === 0 ? 0.6 + 0.4 * ramp(t, night, 0.5) : 0.8 }}>{ic}</div>
            <Glow color={DIM} size={30}>{lab}</Glow>
          </At>
        ))}
        <At x={1450} y={330} o={ramp(t, c("rehearsal of annihilation"), 0.6)}><Reveal text="annihilation?" at={c("rehearsal of annihilation")} size={70} color={WARM} top="#FFD9C8" /></At>
        <Ring x={480} y={710} p={ramp(t, night, 1.2)} r0={60} r1={160} color={ICE} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. a quieter configuration
const Sleeper: React.FC = () => {
  const { t } = useT();
  const br = Math.sin(t * 1.3) * 8;
  return (
    <svg width={700} height={300} viewBox="0 0 700 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${ICE}66)` }}>
      <rect x={20} y={190} width={660} height={36} rx={10} fill="#2a2c55" stroke={ICE} strokeWidth={3} />
      <rect x={20} y={110} width={26} height={150} rx={6} fill="#2a2c55" stroke={ICE} strokeWidth={3} />
      <rect x={654} y={150} width={26} height={110} rx={6} fill="#2a2c55" stroke={ICE} strokeWidth={3} />
      <ellipse cx={120} cy={170} rx={70} ry={26} fill="#e8e4ff22" stroke={CHALK} strokeWidth={3} />
      <circle cx={130} cy={140} r={36} fill={`${ROSE}44`} stroke={ROSE} strokeWidth={3} />
      <path d={`M170 190 C 220 ${150 - br}, 330 ${140 - br}, 420 ${150 - br * 0.6} C 520 160, 600 165, 650 190 Z`} fill={`${VIOLET}55`} stroke={VIOLET} strokeWidth={4} />
    </svg>
  );
};

const QuietScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A substrateless view reads");
  const quiet = c("a quieter configuration");
  const proc = c("The body's processes go on");
  const layer = c("not a deeper layer", 0.4);
  const g = ramp(t, layer, 0.5), fall = ramp(t, layer + 1.1, 1.3);
  const asp = c("other aspects of the same");
  const waves = [{ col: TEAL, lab: "breath", k: 1.1, a: 16 }, { col: ROSE, lab: "heartbeat", k: 3.2, a: 12 }, { col: GOLD, lab: "cells", k: 6, a: 6 }];
  return (
    <AbsoluteFill>
      <At x={960} y={540} s={pop(t, fps, t0, 14)}><Sleeper /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={1050} y={480} p={((t - quiet) * 0.35 + k / 3) % 1 * (t > quiet ? 1 : 0)} r0={80} r1={420} color={ICE} width={2} />)}
      <At x={960} y={130} o={ramp(t, quiet, 0.6)}><Reveal text="a quieter configuration" at={quiet} size={70} color={ICE} top="#F0FBFF" /></At>
      <At x={1550} y={300} o={ramp(t, c("not the destruction"), 0.5) * (1 - ramp(t, proc, 0.5))}>
        <div style={{ position: "relative" }}><Chip color={WARM} size={40}>destruction</Chip><Strike at={c("not the destruction") + 0.5} /></div>
      </At>
      <Svg>
        {waves.map((w, i) => {
          const y = 250 + i * 70;
          const p = ramp(t, proc + i * 0.3, 0.9);
          const d = Array.from({ length: 50 }, (_, j) => `${j ? "L" : "M"}${260 + j * 8} ${(y + Math.sin(j * 0.35 * w.k / 2 - t * w.k) * w.a).toFixed(1)}`).join(" ");
          return <path key={i} d={d} fill="none" stroke={w.col} strokeWidth={4} opacity={p} style={{ filter: `drop-shadow(0 0 6px ${w.col})`, clipPath: `inset(0 ${(1 - p) * 100}% 0 0)` }} />;
        })}
      </Svg>
      {waves.map((w, i) => <At key={i} x={200} y={250 + i * 70} o={ramp(t, proc + i * 0.3 + 0.3, 0.5)}><Glow color={w.col} size={28}>{w.lab}</Glow></At>)}
      {/* a deeper layer, shown only to be removed */}
      <At x={960 + fall * 40} y={790 + fall * 200} o={g * (1 - fall)} r={fall * 6}>
        <div style={{ width: 760, height: 30, borderRadius: 8, background: `linear-gradient(90deg, ${WARM}44, ${WARM})`, boxShadow: `0 0 26px ${WARM}` }} />
      </At>
      <At x={1450} y={745} o={g * (1 - fall)}><Glow color={WARM} size={36}>a deeper layer?</Glow></At>
      <At x={960} y={790} o={ramp(t, asp, 0.8)}><Glow color={CHALK} size={42} serif>aspects of one dependent appearance</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. the missing hours
const HoursScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const real = Math.min(c("real for the operating theatre"), c("those missing hours") + 0.9);
  const rec = c("recorded, charted and billed");
  const abs = c("absent from the framework");
  const ok = c("Each account is correct");
  const nf = c("Neither finds a time");
  const chart = ramp(t, rec + 0.4, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("those missing hours"), 0.5)}><Glow color={GOLD} size={46} serif>three missing hours</Glow></At>
      <PictureFrame x={560} y={470} w={620} h={460} tag="the operating theatre" o={ramp(t, real, 0.6)} />
      <PictureFrame x={1360} y={470} w={620} h={460} tag="your experience" o={ramp(t, abs, 0.6)} />
      <At x={430} y={420} s={pop(t, fps, real + 0.3)}><Clock size={170} hour={30} minute={0} color={GOLD} /></At>
      <At x={430} y={540} o={ramp(t, real + 0.5, 0.5)}><Glow color={GOLD} size={30}>3 hours</Glow></At>
      <At x={690} y={420} s={pop(t, fps, rec)}>
        <svg width={200} height={240} viewBox="0 0 200 240" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
          <rect x={10} y={20} width={180} height={210} rx={10} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
          <rect x={70} y={8} width={60} height={24} rx={6} fill={DIM} />
          <DrawPath d="M30 170 L60 140 L90 150 L120 100 L150 110 L175 70" p={chart} color={TEAL} width={4} len={300} />
          {[60, 80].map((y) => <line key={y} x1={30} x2={170} y1={y} y2={y} stroke={DIM} strokeWidth={3} opacity={chart} />)}
        </svg>
      </At>
      <At x={690} y={600} s={pop(t, fps, rec + 1.0)}><Chip color={GOLD} size={28}>bill</Chip></At>
      <At x={1360} y={460} o={ramp(t, abs + 0.4, 0.8)}>
        <div style={{ width: 380, height: 4, background: `linear-gradient(90deg, transparent, ${ICE}, transparent)`, boxShadow: `0 0 16px ${ICE}` }} />
        <Glow color={ICE} size={34} style={{ marginTop: 24 }}>no hours here</Glow>
      </At>
      {[560, 1360].map((x, i) => <At key={i} x={x + 230} y={640} o={ramp(t, ok + i * 0.3, 0.3)}><Tick p={ramp(t, ok + i * 0.3, 0.5)} /></At>)}
      <At x={960} y={790} o={ramp(t, nf, 0.6)}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ opacity: 1 - 0.6 * ramp(t, nf + 1.2, 0.8) }}><Clock size={90} hour={t * 30} minute={t * 160} color={DIM} dashed /></div>
          <div style={{ position: "relative" }}><Glow color={CHALK} size={38}>time passing by itself?</Glow><Strike at={nf + 1.2} /></div>
        </div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. waking
const WakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Notice the next time you wake");
  const curtain = c("Light through the curtain");
  const blanket = c("The weight of the blanket");
  const sound = c("A sound from the street");
  const noOne = c("No one yet in particular");
  const ret = c("Then it all returns");
  const open = ramp(t, curtain, 1.4);
  const fill = ramp(t, ret, 2.5);
  const chips = [["This room", "this room", 640, 340, TEAL], ["This day", "this day", 1280, 330, GOLD], ["My name", "my name", 960, 210, ROSE]] as const;
  return (
    <AbsoluteFill>
      {/* window */}
      <Svg style={{ opacity: ramp(t, t0, 0.8) }}>
        <defs><linearGradient id="c8win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFE9B0" /><stop offset="1" stopColor="#F2A94B" /></linearGradient></defs>
        <rect x={250} y={180} width={300} height={380} rx={6} fill="#0d1030" stroke={CHALK} strokeWidth={4} />
        <rect x={254} y={184} width={292} height={372} fill="url(#c8win)" opacity={0.85 * open} style={{ filter: `drop-shadow(0 0 30px ${GOLD})` }} />
        <path d="M400 180 L400 560 M250 370 L550 370" stroke={CHALK} strokeWidth={4} opacity={0.7} />
        <polygon points={`550,560 ${760 + open * 260},830 ${480 + open * 160},830 400,560`} fill={GOLD} opacity={0.16 * open} />
        <path d={`M250 180 L${400 - open * 130} 180 Q ${390 - open * 120} 370, ${400 - open * 110} 560 L250 560 Z`} fill={ROSE} fillOpacity={0.75} stroke={ROSE} strokeWidth={3} />
        <path d={`M550 180 L${400 + open * 130} 180 Q ${410 + open * 120} 370, ${400 + open * 110} 560 L550 560 Z`} fill={ROSE} fillOpacity={0.75} stroke={ROSE} strokeWidth={3} />
      </Svg>
      <At x={400} y={140} o={ramp(t, curtain, 0.6)}><Glow color={GOLD} size={30}>light</Glow></At>
      {/* blanket */}
      <At x={960} y={780} s={pop(t, fps, blanket, 14)}>
        <svg width={760} height={120} viewBox="0 0 760 120" style={{ filter: `drop-shadow(0 0 12px ${VIOLET})` }}>
          <path d={`M10 110 C 120 ${30 + Math.sin(t) * 6}, 300 ${40 + Math.sin(t * 1.2) * 6}, 400 50 C 520 ${58 + Math.sin(t * 0.9) * 6}, 650 40, 750 110 Z`} fill={`${VIOLET}55`} stroke={VIOLET} strokeWidth={4} />
          {[150, 300, 450, 600].map((x) => <path key={x} d={`M${x} 70 q 20 -10 40 0`} stroke={CHALK} strokeOpacity={0.4} strokeWidth={3} fill="none" />)}
        </svg>
      </At>
      <At x={1180} y={730} o={ramp(t, blanket + 0.3, 0.5)}><Glow color={VIOLET} size={30}>weight</Glow></At>
      {/* sound */}
      {[0, 1, 2].map((k) => <Ring key={k} x={1650} y={420} p={t > sound ? ((t - sound) * 0.7 + k / 3) % 1 : 0} r0={30} r1={220} color={TEAL} width={4} />)}
      <At x={1650} y={420} s={pop(t, fps, sound)}><Orb size={50} color={TEAL} /></At>
      <At x={1650} y={570} o={ramp(t, sound + 0.3, 0.5)}><Glow color={TEAL} size={30}>a sound</Glow></At>
      {/* no one yet, then the self assembles */}
      <At x={960} y={460} s={pop(t, fps, noOne, 14)}><Person size={220} color={fill > 0.1 ? GOLD : DIM} fill={fill} dashed={fill < 0.5} /></At>
      <At x={960} y={460} o={ramp(t, noOne + 0.4, 0.5) * (1 - ramp(t, ret, 0.4))}><Glow color={CHALK} size={70} serif>?</Glow></At>
      <At x={960} y={640} o={between(t, noOne + 0.6, ret)}><Glow color={DIM} size={32}>no one yet</Glow></At>
      {chips.map(([ph, lab, x, y, col], i) => {
        const p = ramp(t, c(ph), 0.7);
        return <At key={i} x={960 + (x - 960) * (0.5 + 0.5 * p)} y={460 + (y - 460) * (0.5 + 0.5 * p)} o={p}><Chip color={col} size={36}>{lab}</Chip></At>;
      })}
      <Ring x={960} y={460} p={ramp(t, ret, 1.2)} r0={80} r1={300} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. put together each morning
const AssembleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("was not waiting somewhere");
  const put = c("put together again");
  const parts = c("memory, habit and circumstance");
  const works = c("works perfectly well");
  const nowhere = c("nowhere to be found");
  const gather = ramp(t, parts + 0.4, 1.6);
  const apart = ramp(t, nowhere + 0.3, 1.4);
  const pieces = [
    { lab: "memory", col: VIOLET, from: [420, 300], to: [-70, 0] },
    { lab: "habit", col: TEAL, from: [1500, 300], to: [70, 0] },
    { lab: "circumstance", col: GOLD, from: [960, 760], to: [0, 90] },
  ];
  const cx = 960, cy = 420;
  return (
    <AbsoluteFill>
      <At x={360} y={190} o={between(t, t0, put)}><Moon size={120} /></At>
      <At x={960} y={420} o={between(t, t0, put - 0.2)}>
        <div style={{ position: "relative" }}><Person size={160} color={DIM} dashed /></div>
      </At>
      <At x={960} y={640} o={between(t, t0 + 0.3, put - 0.2)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={40}>waiting through the night?</Glow><Strike at={t0 + 1.5} /></div>
      </At>
      <At x={960} y={110} o={ramp(t, put, 0.5)}><Reveal text="put together again" at={put} size={70} color={ROSE} top="#FFE3EA" /></At>
      {pieces.map((p, i) => {
        const on = pop(t, fps, parts + i * 0.4);
        const k = gather * (1 - apart * 0.8);
        const x = p.from[0] + (cx + p.to[0] - p.from[0]) * k + apart * p.to[0] * 2.4, y = p.from[1] + (cy + p.to[1] - p.from[1]) * k + apart * p.to[1] * 1.6;
        return (
          <React.Fragment key={i}>
            <At x={x} y={y} s={on}><Orb size={150} color={p.col} /></At>
            <At x={x} y={y + 110} o={on}><Glow color={p.col} size={34}>{p.lab}</Glow></At>
          </React.Fragment>
        );
      })}
      <Ring x={cx} y={cy + 30} p={ramp(t, works, 1.2)} r0={120} r1={300} color={GREEN} />
      <At x={1380} y={650} o={ramp(t, works, 0.5) * (1 - apart)}><div style={{ display: "flex", alignItems: "center", gap: 10 }}><Tick p={ramp(t, works, 0.6)} size={50} /><Glow color={GREEN} size={36}>works</Glow></div></At>
      <At x={cx} y={cy + 30} o={ramp(t, nowhere + 1.0, 0.8)}>
        <div style={{ width: 130, height: 130, borderRadius: "50%", border: `3px dashed ${CHALK}88` }} />
      </At>
      <At x={cx} y={cy + 30} o={ramp(t, nowhere + 1.2, 0.8)}><Glow color={DIM} size={30}>no one apart</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. the dream
const Runner: React.FC<{ color: string }> = ({ color }) => {
  const { t } = useT();
  const s = Math.sin(t * 9) * 30;
  return (
    <svg width={90} height={130} viewBox="-45 -20 90 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      <circle cx={0} cy={0} r={13} fill={`${color}55`} stroke={color} strokeWidth={4} />
      <g stroke={color} strokeWidth={5} strokeLinecap="round" fill="none">
        <path d="M0 14 L0 58" />
        <path d={`M0 26 L${-20 * Math.cos(s / 50)} ${46}`} /><path d={`M0 26 L${20 * Math.cos(s / 50)} ${44}`} />
        <path d={`M0 58 L${Math.sin(s / 30) * 24} 100`} /><path d={`M0 58 L${-Math.sin(s / 30) * 24} 100`} />
      </g>
    </svg>
  );
};

const DreamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Dreams show the same thing");
  const world = c("A whole world appears");
  const sf = c("Streets, faces");
  const runs = c("a body that runs");
  const door = c("The dreamed door opens");
  const wakeAt = c("On waking, none of it");
  const pf = ramp(t, wakeAt + 0.2, 1.2);
  const cloud = "M420 620 C 300 620, 270 480, 380 450 C 350 330, 520 260, 620 320 C 680 190, 900 180, 960 290 C 1040 190, 1280 210, 1300 330 C 1440 300, 1560 420, 1480 520 C 1580 600, 1460 690, 1360 650 C 1300 720, 1100 720, 1020 660 C 920 720, 720 720, 660 650 C 580 700, 450 690, 420 620 Z";
  const bob = Math.sin(t * 0.8) * 6;
  const runX = 760 + ((t - runs) * 120) % 260;
  const doorOpen = ramp(t, door, 1.2);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - pf, filter: pf > 0 ? `blur(${pf * 20}px)` : undefined, transform: `scale(${1 + pf * 0.15}) translateY(${bob}px)` }}>
        <Svg>
          <defs><linearGradient id="c8dream" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={VIOLET} stopOpacity={0.35} /><stop offset="1" stopColor={ROSE} stopOpacity={0.25} /></linearGradient></defs>
          <DrawPath d={cloud} p={ramp(t, t0, 1.4)} color={CHALK} width={4} len={4200} fill={t > t0 + 0.8 ? "url(#c8dream)" : "none"} />
          {/* streets */}
          {[[520, 600, 70, 150], [600, 600, 60, 210], [670, 600, 80, 120], [1180, 600, 70, 180], [1260, 600, 90, 130]].map(([x, y, w, h], i) => {
            const p = ramp(t, world + i * 0.15, 0.6);
            return <rect key={i} x={x} y={y - h * p} width={w} height={h * p} fill={`${i % 2 ? TEAL : VIOLET}55`} stroke={i % 2 ? TEAL : VIOLET} strokeWidth={3} />;
          })}
          <line x1={500} x2={1380} y1={600} y2={600} stroke={CHALK} strokeWidth={3} opacity={ramp(t, world, 0.6)} />
        </Svg>
        {[[620, 400, GOLD], [760, 340, ROSE], [1120, 360, ICE]].map(([x, y, col], i) => (
          <At key={i} x={x as number} y={y as number} s={pop(t, fps, sf + i * 0.25)}>
            <svg width={80} height={80} viewBox="0 0 80 80" style={{ filter: `drop-shadow(0 0 8px ${col})` }}>
              <circle cx={40} cy={40} r={32} fill={`${col}33`} stroke={col as string} strokeWidth={3} />
              <circle cx={29} cy={36} r={4} fill={col as string} /><circle cx={51} cy={36} r={4} fill={col as string} />
              <path d="M28 52 Q40 60 52 52" stroke={col as string} strokeWidth={3} fill="none" />
            </svg>
          </At>
        ))}
        <At x={runX} y={540} s={pop(t, fps, runs)}><Runner color={GOLD} /></At>
        <At x={1090} y={510} s={pop(t, fps, door - 0.3)}>
          <div style={{ position: "relative", width: 90, height: 160, perspective: 600 }}>
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(${GOLD}, ${WARM}88)`, boxShadow: `0 0 ${40 * doorOpen}px ${GOLD}`, opacity: doorOpen }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(#6b4a8a, #3a2a5a)", border: `3px solid ${CHALK}`,
              transformOrigin: "left center", transform: `rotateY(${-75 * doorOpen}deg)` }} />
          </div>
        </At>
      </AbsoluteFill>
      {Array.from({ length: 30 }).map((_, i) => {
        const a = rand(i) * Math.PI * 2, d = pf * (150 + rand(i + 1) * 380);
        return pf > 0 && pf < 1 ? <div key={i} style={{ position: "absolute", left: 960 + Math.cos(a) * d, top: 460 + Math.sin(a) * d * 0.6, width: 10, height: 10,
          borderRadius: "50%", background: i % 2 ? VIOLET : ROSE, opacity: 1 - pf, boxShadow: `0 0 10px ${ROSE}` }} /> : null;
      })}
      <Svg style={{ opacity: 0.35 * ramp(t, wakeAt + 0.8, 0.8) }}><path d={cloud} fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="14 12" /></Svg>
      <At x={960} y={330} o={ramp(t, wakeAt + 1.0, 0.6)}><Glow color={DIM} size={44}>found nowhere</Glow></At>
      <At x={960} y={470}><Reveal text="vivid and coherent" at={c("Vivid and coherent")} size={84} color={ROSE} top="#FFE3EA" /></At>
      <At x={960} y={600} o={ramp(t, c("Vivid and coherent") + 1.2, 0.8)}><Glow color={GOLD} size={42} serif>nothing from its own side</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. death is designated
const DeathScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("What, then, is death");
  const des = c("It too is designated");
  const par = c("the paradigm doing");
  const fw = c("A paradigm is a whole framework");
  const med = c("Medicine names death"), law = c("Law names it"), con = c("Contemplative traditions speak"), stream = c("a stream of mind");
  const valid = c("Each is valid"), none = c("None finds a death");
  const flat = ramp(t, med + 0.8, 0.8);
  const ecg = Array.from({ length: 60 }, (_, i) => {
    const x = -150 + i * 5;
    const u = ((i * 5 + t * 200) % 100) / 100;
    const amp = (1 - flat) * (u > 0.4 && u < 0.45 ? -50 : u > 0.45 && u < 0.5 ? 40 : 0);
    return `${i ? "L" : "M"}${x} ${amp}`;
  }).join(" ");
  const frames = [{ x: 470, tag: "medicine", at: med }, { x: 960, tag: "law", at: law }, { x: 1450, tag: "contemplative", at: con }];
  const glowF = ramp(t, fw, 0.6);
  const conT = Math.max(con, par + 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110}>
        <div style={{ display: "flex", gap: 40, alignItems: "baseline" }}>
          <Reveal text="death" at={t0} size={84} color={CHALK} top="#FFFFFF" />
          <div style={{ opacity: ramp(t, des, 0.5) }}><Reveal text="designated" at={des} size={84} /></div>
        </div>
      </At>
      {frames.map((f, i) => (
        <div key={i} style={{ position: "absolute", inset: 0, opacity: ramp(t, par + i * 0.3, 0.6) }}>
          <PictureFrame x={f.x} y={470} w={420} h={340} tag={f.tag} dashed={glowF < 0.5} />
        </div>
      ))}
      <At x={480} y={480} o={Math.max(0.3 * ramp(t, par + 0.4, 0.6), ramp(t, med, 0.5))}>
        <svg width={320} height={160} viewBox="-160 -80 320 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN})` }}>
          <path d={ecg} fill="none" stroke={GREEN} strokeWidth={4} />
        </svg>
        <Glow color={GREEN} size={26}>heart and brain</Glow>
      </At>
      <At x={960} y={470} s={0.85 + 0.15 * pop(t, fps, law)} o={Math.max(0.3 * ramp(t, par + 0.7, 0.6), ramp(t, law, 0.4))}>
        <svg width={220} height={260} viewBox="0 0 220 260" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <rect x={20} y={10} width={180} height={240} rx={8} fill="#f5ecd622" stroke={CHALK} strokeWidth={3} />
          {[50, 80, 110, 140].map((y) => <line key={y} x1={45} x2={175} y1={y} y2={y} stroke={DIM} strokeWidth={4} />)}
          <circle cx={150} cy={200} r={26} fill={`${WARM}88`} stroke={WARM} strokeWidth={3} />
        </svg>
      </At>
      <At x={1450} y={450} o={Math.max(0.3 * ramp(t, par + 1.0, 0.6), ramp(t, con, 0.6))}>
        <div style={{ position: "relative", width: 300, height: 260 }}>
          {Array.from({ length: 18 }).map((_, i) => {
            const u = (((t - par) * 0.25 + rand(i)) % 1 + 1) % 1;
            return <div key={i} style={{ position: "absolute", left: 120 + (rand(i + 1) - 0.5) * 160 * (0.4 + u), top: 160 - u * 140, width: 12, height: 12, borderRadius: "50%",
              background: [GOLD, ICE, ROSE][i % 3], opacity: Math.sin(u * Math.PI) * 0.8, filter: "blur(1px)" }} />;
          })}
          <svg width={300} height={260} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            <DrawPath d={`M20 220 C 90 ${200 + Math.sin(t) * 10}, 160 ${240 - Math.sin(t) * 10}, 290 210`} p={ramp(t, stream, 1.0)} color={VIOLET} width={6} len={400} />
          </svg>
        </div>
      </At>
      <At x={1520} y={640} o={ramp(t, stream + 0.3, 0.5)}><Glow color={VIOLET} size={26}>a stream of mind</Glow></At>
      {frames.map((f, i) => <At key={i} x={f.x + 170} y={600} o={ramp(t, valid + i * 0.25, 0.3)}><Tick p={ramp(t, valid + i * 0.25, 0.5)} size={56} /></At>)}
      <At x={960} y={760} o={ramp(t, none, 0.6)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={42}>a death from its own side?</Glow><Strike at={none + 1.4} /></div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. the lamp lit from another lamp
const LampScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A king asked the monk");
  const q = c("whether anything passes over");
  const pt = c("pointed to a lamp");
  const lit = c("lit from another lamp");
  const nothing = c("Nothing passes over");
  const second = c("the second flame");
  const close = ramp(t, lit, 0.9) * (1 - ramp(t, lit + 1.8, 0.9));
  const x1 = 640 + 170 * close, x2 = 1280 - 170 * close;
  const lit2 = ramp(t, lit + 1.0, 0.8);
  const arc = ramp(t, q + 0.3, 1.0);
  const arcGone = ramp(t, pt, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.6)}><Glow color={GOLD} size={42} serif>does anything pass over?</Glow></At>
      <At x={x1} y={520} s={pop(t, fps, t0 + 0.3)}><OilLamp lit={1} seed={1} /></At>
      <At x={x2} y={520} s={pop(t, fps, t0 + 0.6)}><OilLamp lit={lit2} seed={2} /></At>
      <Ring x={x1} y={420} p={ramp(t, pt, 1.2)} r0={60} r1={200} color={GOLD} />
      <Svg style={{ opacity: 1 - arcGone }}>
        <DrawPath d="M640 380 Q 960 120 1280 380" p={arc} color={VIOLET} width={4} len={900} />
      </Svg>
      <At x={640 + 640 * arc} y={380 - Math.sin(arc * Math.PI) * 130} o={arc * (1 - arcGone)}><Orb size={50} color={VIOLET} /></At>
      <At x={960} y={250} o={arc * (1 - arcGone)}><Glow color={VIOLET} size={60} serif>?</Glow></At>
      <Ring x={960} y={420} p={ramp(t, lit + 0.9, 1.0)} r0={20} r1={180} color={WARM} />
      {/* nothing passes over: the first flame keeps burning, nothing travelled */}
      <At x={960} y={300} o={ramp(t, nothing, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={44}>something carried across</Glow><Strike at={nothing + 0.6} /></div>
      </At>
      <Svg style={{ opacity: ramp(t, second, 0.8) }}>
        <path d="M680 420 Q 960 330 1240 420" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="6 12" strokeDashoffset={-t * 40} />
      </Svg>
      <At x={960} y={780} o={ramp(t, second + 0.4, 0.6)}><Glow color={GOLD} size={42} serif>not the same, not unconnected</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. ending and continuing
const EndScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Ending and continuing");
  const ana = c("Neither is found under analysis");
  const notN = c("neither is simply nothing");
  const partB = c("Death is not denied");
  const lens = ramp(t, ana, 2.0);
  const dash = ana + 1.0 < t;
  const fin = c("a final annihilation"), soul = c("the passage of a soul");
  const wall = c("a wall at the end"), door = c("a doorway into another room");
  const relieve = ramp(t, c("relieved of the substance"), 1.2);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={partB - 0.6}>
        {[["ending", 660, WARM], ["continuing", 1260, TEAL]].map(([lab, x, col], i) => (
          <At key={i} x={x as number} y={400} s={pop(t, fps, t0 + i * 0.4)}>
            <div style={{ fontFamily: SERIF, fontSize: 80, color: CHALK, padding: "20px 50px", borderRadius: 30, border: `3px ${dash ? "dashed" : "solid"} ${col}`,
              background: `${col}22`, boxShadow: `0 0 30px ${col}66`, opacity: dash ? 0.75 : 1 }}>{lab as string}</div>
          </At>
        ))}
        <At x={960} y={560} o={ramp(t, t0 + 0.6, 0.5)}><Glow color={GOLD} size={38}>conventional designations</Glow></At>
        <At x={500 + lens * 920} y={400 - Math.sin(lens * Math.PI) * 60} o={between(t, ana, ana + 2.2, 0.3)}>
          <svg width={180} height={180} viewBox="0 0 180 180" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
            <circle cx={75} cy={75} r={55} fill={`${ICE}22`} stroke={ICE} strokeWidth={6} /><path d="M115 115 L165 165" stroke={ICE} strokeWidth={12} strokeLinecap="round" />
          </svg>
        </At>
        <At x={960} y={250} o={ramp(t, ana + 0.6, 0.5)}><Glow color={ICE} size={36}>not found when sought</Glow></At>
        <At x={960} y={700} o={ramp(t, notN, 0.6)}><Glow color={CHALK} size={44} serif>and not simply nothing</Glow></At>
      </Scene>
      <Scene from={partB - 0.3} to={1e9}>
        <At x={960} y={110} o={ramp(t, partB, 0.6)}><Glow color={CHALK} size={44} serif>death is not denied</Glow></At>
        <At x={960} y={250 - relieve * 60} o={ramp(t, partB + 1.0, 0.5) * (1 - relieve)}>
          <div style={{ width: 300, height: 70, borderRadius: 10, background: "linear-gradient(#5a5470, #2a2638)", border: `2px solid ${DIM}`, fontFamily: SANS, fontSize: 32,
            color: CHALK, lineHeight: "70px" }}>substance</div>
        </At>
        <Svg style={{ opacity: ramp(t, partB + 0.4, 0.8) }}>
          <polygon points="840,330 1080,330 1700,840 220,840" fill={`${GOLD}14`} stroke={GOLD} strokeWidth={3} strokeOpacity={0.6} />
          <line x1={960} y1={340} x2={960} y2={840} stroke={GOLD} strokeWidth={4} strokeDasharray="30 30" strokeOpacity={0.5} />
        </Svg>
        {/* the wall: a final annihilation */}
        <At x={620} y={430} s={pop(t, fps, fin)}>
          <svg width={260} height={170} viewBox="0 0 260 170" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }}>
            {Array.from({ length: 4 }).map((_, r) => Array.from({ length: 5 }).map((__, k) => (
              <rect key={`${r}-${k}`} x={(r % 2 ? -26 : 0) + k * 52 + 4} y={r * 42 + 2} width={48} height={38} fill="#7a3e30" stroke={WARM} strokeWidth={2} />
            )))}
          </svg>
          <Glow color={WARM} size={30}>annihilation</Glow>
        </At>
        {/* the doorway: the passage of a soul */}
        <At x={1300} y={430} s={pop(t, fps, soul)}>
          <div style={{ position: "relative", width: 150, height: 220, border: `5px solid ${CHALK}`, borderBottom: "none", borderRadius: "70px 70px 0 0",
            background: `radial-gradient(${GOLD}aa, ${GOLD}22)`, boxShadow: `0 0 40px ${GOLD}88` }}>
            <div style={{ position: "absolute", left: 50 + Math.sin((t - soul) * 1.5) * 30, top: 80 }}><Orb size={46} color={ICE} /></div>
          </div>
          <Glow color={GOLD} size={30}>a soul passing</Glow>
        </At>
        <Cross x={620} y={460} r={110} at={wall} />
        <Cross x={1300} y={460} r={110} at={door + 0.3} />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. grief, dread, care
const TableChair: React.FC = () => (
  <svg width={760} height={360} viewBox="0 0 760 360" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${GOLD}66)` }}>
    <polygon points="140,140 620,140 700,190 60,190" fill="#a07444" stroke={GOLD} strokeWidth={3} />
    <rect x={60} y={190} width={640} height={20} fill="#7a5a35" stroke={GOLD} strokeWidth={2} />
    {[90, 650].map((x) => <rect key={x} x={x} y={210} width={20} height={140} fill="#7a5a35" stroke={GOLD} strokeWidth={2} />)}
    {/* empty chair */}
    <g stroke={ROSE} strokeWidth={5} fill={`${ROSE}22`} strokeLinejoin="round">
      <rect x={300} y={30} width={160} height={150} rx={10} />
      <rect x={290} y={180} width={180} height={26} rx={6} />
      <line x1={300} y1={206} x2={300} y2={350} /><line x1={460} y1={206} x2={460} y2={350} />
    </g>
  </svg>
);

const GriefScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("This does not end grief");
  const chair = c("The empty chair");
  const dread = c("the shape of the dread");
  const falling = c("a self falling into nothing");
  const neither = c("neither the self nor the nothing");
  const loses = c("the fear loses its object");
  const love = c("Love, sorrow and care");
  const k = ramp(t, dread, 0.9) * (1 - ramp(t, love - 0.3, 1.2));
  const fall = ramp(t, falling + 0.3, 2.2) * 120;
  const dissolve = ramp(t, neither + 0.3, 1.6);
  const tableO = 1 - 0.75 * k;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.6) * (1 - ramp(t, dread - 0.3, 0.5))}><Glow color={ROSE} size={44} serif>grief remains</Glow></At>
      <At x={960 - 520 * k} y={520 + 80 * k} s={(0.9 - 0.35 * k) * pop(t, fps, chair - 0.4, 14)} o={tableO}><TableChair /></At>
      <Ring x={960} y={430} p={ramp(t, chair + 0.6, 1.4)} r0={60} r1={220} color={ROSE} />
      {/* dread: a self above a void */}
      <AbsoluteFill style={{ opacity: k }}>
        <At x={1150} y={560} s={1 - 0.6 * dissolve} o={1 - dissolve}>
          <div style={{ position: "relative", width: 440, height: 170 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(#000 35%, #1a0f2a 62%, transparent 72%)", boxShadow: `0 0 50px ${VIOLET}55` }} />
            <svg width={440} height={170} viewBox="-220 -85 440 170" style={{ position: "absolute", left: 0, top: 0 }}>
              <g transform="scale(1 0.38)"><circle r={170} fill="none" stroke={VIOLET} strokeWidth={5} strokeDasharray="30 22" transform={`rotate(${t * 40})`} opacity={0.7} /></g>
            </svg>
          </div>
        </At>
        <At x={1150} y={280 + fall + (dissolve > 0 ? 0 : 0)} o={ramp(t, falling, 0.5) * (1 - dissolve)} blur={dissolve * 12}>
          <Person size={110} color={CHALK} fill={0.3} />
        </At>
        <At x={1150} y={140} o={ramp(t, dread, 0.6)}><Glow color={VIOLET} size={40}>the dread</Glow></At>
        <At x={1150} y={780} o={ramp(t, loses, 0.6)}><Glow color={GOLD} size={38}>the fear loses its object</Glow></At>
      </AbsoluteFill>
      <Mist x={960} y={500} start={love} color={GOLD} spread={600} n={20} seed={8} />
      {[["love", ROSE, 560], ["sorrow", ICE, 960], ["care", GOLD, 1360]].map(([w, col, x], i) => (
        <At key={i} x={x as number} y={170} s={pop(t, fps, love + i * 0.35)}><Glow color={col as string} size={60} serif>{w as string}</Glow></At>
      ))}
      <At x={960} y={790} o={ramp(t, c("exactly where they were"), 1.2)}><Glow color={CHALK} size={38}>exactly where they were</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["under", 0], ["clock", c("Three hours have passed", 0.6)], ["light", c("picture awareness as a light", 0.6)],
    ["sleep", c("A substrateless view reads", 0.6)], ["hours", c("those missing hours", 0.6)], ["wake", c("Notice the next time you wake", 0.6)],
    ["self", c("was not waiting somewhere", 0.6)], ["dream", c("Dreams show the same thing", 0.6)], ["death", c("What, then, is death", 0.6)],
    ["lamp", c("A king asked the monk", 0.6)], ["end", c("Ending and continuing", 0.6)], ["grief", c("This does not end grief", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Three hours have passed", 0.9)], <UnderScene />],
    [S("Three hours have passed", "picture awareness as a light"), <ClockScene />],
    [S("picture awareness as a light", "A substrateless view reads"), <SwitchScene />],
    [S("A substrateless view reads", "those missing hours"), <QuietScene />],
    [S("those missing hours", "Notice the next time you wake"), <HoursScene />],
    [S("Notice the next time you wake", "was not waiting somewhere"), <WakeScene />],
    [S("was not waiting somewhere", "Dreams show the same thing"), <AssembleScene />],
    [S("Dreams show the same thing", "What, then, is death"), <DreamScene />],
    [S("What, then, is death", "A king asked the monk"), <DeathScene />],
    [S("A king asked the monk", "Ending and continuing"), <LampScene />],
    [S("Ending and continuing", "This does not end grief"), <EndScene />],
    [S("This does not end grief", null), <GriefScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
