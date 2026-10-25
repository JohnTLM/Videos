// Chapter 6: The Impossibility of Absolute Nothingness. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A bell sounds", "Then it stops", "What is there now",
  "It is tempting to say nothing", "The sound has gone", "there is a gap", "On a larger scale", "or the end of the universe",
  "a fall into that same gap", "An absolute nothing", "waiting beneath everything",
  "This looks like the opposite", "exist solidly from their own side", "substantialism in reverse", "For something to drop into nothing",
  "a self-standing something", "could be wiped out", "But nothing exists that way", "nothing of that kind to annihilate",
  "There is a second difficulty", "cannot even be thought", "To think of nothing", "the absence of this", "or the end of that",
  "only by contrast with something", "The moment it is proposed", "a relative absence",
  "Henri Bergson", "Try to imagine the end", "imagining something", "A darkness", "A silence", "Yourself, watching the void",
  "So absence is always relative", "The absence of rain", "a rain-shaped hole", "It is clear air", "sunlight on dry pavement",
  "who expected rain", "When a flame goes out", "The fuel is spent", "the heat disperses", "the smoke drifts",
  "Listen again to the bell", "not a hole in experience", "the quiet of the room", "The faint hum of a fridge", "Your own breathing",
  "A sense of space", "Silence is not experienced as nothing", "its own vivid quality", "a forest", "a library", "a concert hall",
  "only by contrast with the bell",
  "Absence can be as vivid", "A family sits down to dinner", "after a death", "One chair is empty", "No one needs to point it out",
  "not a patch of nothing", "the most present thing", "years of shared meals", "the people who notice it", "A stranger would see",
  "how the family speaks",
  "If even absence", "no place left",
  "Being and non-being", "twin extremes of one habit", "The first posits a thing", "The second posits a thing", "Appearances arise",
  "subside when they part", "no threat of falling", "never a self-standing something",
  "Is emptiness, then, just nothing", "Nothingness would be the absence", "Emptiness is the absence", "things that still appear",
  "The chair is empty", "it holds a person",
  "The bell sounds, and then", "No void has opened",
];

const M = {
  bell: { a: "rgba(150,110,50,0.45)", b: "rgba(60,60,150,0.45)", c: "rgba(30,110,130,0.3)" },
  void: { a: "rgba(40,30,90,0.5)", b: "rgba(90,40,110,0.4)", c: "rgba(20,30,60,0.35)" },
  rev: { a: "rgba(90,60,160,0.5)", b: "rgba(160,80,60,0.35)", c: "rgba(40,80,120,0.3)" },
  thought: { a: "rgba(30,120,140,0.5)", b: "rgba(100,60,160,0.45)", c: "rgba(150,110,50,0.3)" },
  berg: { a: "rgba(30,30,80,0.55)", b: "rgba(80,50,130,0.4)", c: "rgba(120,100,60,0.25)" },
  rain: { a: "rgba(40,120,170,0.5)", b: "rgba(170,110,40,0.45)", c: "rgba(60,140,100,0.3)" },
  quiet: { a: "rgba(40,110,120,0.5)", b: "rgba(70,60,150,0.4)", c: "rgba(140,110,60,0.3)" },
  chair: { a: "rgba(160,100,50,0.45)", b: "rgba(130,60,90,0.4)", c: "rgba(90,60,150,0.3)" },
  ext: { a: "rgba(90,60,160,0.5)", b: "rgba(150,120,50,0.4)", c: "rgba(30,120,130,0.35)" },
  emp: { a: "rgba(30,130,130,0.5)", b: "rgba(150,110,50,0.45)", c: "rgba(90,60,160,0.3)" },
  close: { a: "rgba(150,110,50,0.45)", b: "rgba(40,90,150,0.45)", c: "rgba(30,110,130,0.3)" },
};

// ---------------------------------------------------------------- parts for this chapter
const Bell: React.FC<{ size?: number; swing?: number; color?: string; dashed?: boolean }> = ({ size = 240, swing = 0, color = GOLD, dashed }) => (
  <svg width={size} height={size} viewBox="-60 -10 120 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${color})` }}>
    <g transform={`rotate(${swing} 0 0)`}>
      <line x1={0} y1={-10} x2={0} y2={6} stroke={color} strokeWidth={4} />
      <path d="M-8 8 Q 0 0 8 8 Q 34 14 36 60 Q 38 84 52 96 L-52 96 Q -38 84 -36 60 Q -34 14 -8 8 Z"
        fill={dashed ? "none" : `${color}44`} stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dashed ? "8 6" : undefined} />
      <circle cx={0} cy={104} r={9} fill={dashed ? "none" : color} stroke={color} strokeWidth={3} />
    </g>
  </svg>
);

/** Sound rings around a point while active (k 0..1). */
const SoundRings: React.FC<{ x: number; y: number; from: number; to: number; color?: string }> = ({ x, y, from, to, color = GOLD }) => {
  const { t } = useT();
  if (t < from) return null;
  return (
    <>
      {[0, 1, 2].map((k) => {
        const start = from + k * 0.5;
        const u = ((t - start) % 1.5) / 1.5;
        const alive = t > start && t - u * 1.5 < to;
        return alive ? <Ring key={k} x={x} y={y} p={u} r0={140} r1={430} color={color} width={4} /> : null;
      })}
    </>
  );
};

/** A dark pit: the imagined absolute nothing. */
const Pit: React.FC<{ x: number; y: number; w: number; o: number; label?: string }> = ({ x, y, w, o }) => (
  <At x={x} y={y} o={o}>
    <div style={{ width: w, height: w * 0.32, borderRadius: "50%", background: "radial-gradient(ellipse, #000 45%, #05040cdd 65%, transparent 72%)",
      boxShadow: `0 0 60px ${VIOLET}55, inset 0 0 40px #000` }} />
  </At>
);

const Cube: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 160, color = GOLD, dashed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <g stroke={color} strokeWidth={3} strokeLinejoin="round" strokeDasharray={dashed ? "6 5" : undefined}>
      <polygon points="50,10 88,30 50,50 12,30" fill={dashed ? "none" : `${color}66`} />
      <polygon points="12,30 50,50 50,92 12,72" fill={dashed ? "none" : `${color}44`} />
      <polygon points="88,30 50,50 50,92 88,72" fill={dashed ? "none" : `${color}22`} />
    </g>
  </svg>
);

const Person: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 170, color = ROSE, dashed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={50} cy={30} r={18} fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "6 5" : undefined} />
    <path d="M14 96 Q 16 56 50 54 Q 84 56 86 96" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

const Bubble: React.FC<{ w?: number; color?: string; children?: React.ReactNode }> = ({ w = 420, color = VIOLET, children }) => (
  <div style={{ position: "relative", width: w, height: w * 0.62, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}18`,
    boxShadow: `0 0 30px ${color}66`, display: "flex", alignItems: "center", justifyContent: "center" }}>{children}</div>
);

const Cloud: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 300, color = ICE, dashed }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 200 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M40 95 Q 8 95 12 70 Q 10 45 42 45 Q 50 12 92 15 Q 128 8 140 38 Q 185 36 188 66 Q 192 95 160 95 Z"
      fill={dashed ? "none" : `${color}33`} stroke={color} strokeWidth={4} strokeDasharray={dashed ? "9 7" : undefined} strokeLinejoin="round" />
  </svg>
);

const Flame: React.FC<{ k: number }> = ({ k }) => {
  const { t } = useT();
  const n = (j: number) => Math.sin(t * (5 + j) + j * 1.7) * 8;
  const h = 150 * k;
  const d = `M0 ${-h - n(1)} C ${30 + n(2)} ${-h * 0.5}, ${55} -10, 45 15 C 38 40, 15 50, 0 50 C -15 50, -38 40, -45 15 C -55 -10, ${-30 + n(3)} ${-h * 0.5}, 0 ${-h - n(1)} Z`;
  return (
    <svg width={200} height={260} viewBox="-100 -200 200 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${30 * k}px ${WARM})`, opacity: Math.min(1, k * 1.5) }}>
      <defs><radialGradient id="ch06fl" cx="0.5" cy="0.75" r="0.75"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#ch06fl)" />
    </svg>
  );
};

const Log: React.FC<{ burnt: number }> = ({ burnt }) => {
  const col = burnt > 0.5 ? "#555" : "#8a5a32";
  return (
    <svg width={260} height={70} viewBox="0 0 260 70" style={{ filter: `drop-shadow(0 0 8px ${burnt > 0.5 ? DIM : WARM})` }}>
      <rect x={10} y={22} width={240} height={36} rx={18} fill={col} stroke={burnt > 0.5 ? DIM : GOLD} strokeWidth={3} transform="rotate(-6 130 40)" />
      <rect x={10} y={22} width={240} height={36} rx={18} fill={col} stroke={burnt > 0.5 ? DIM : GOLD} strokeWidth={3} transform="rotate(6 130 40)" />
    </svg>
  );
};

const Fridge: React.FC = () => (
  <svg width={130} height={210} viewBox="0 0 130 210" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <rect x={10} y={10} width={110} height={190} rx={12} fill={`${ICE}18`} stroke={ICE} strokeWidth={4} />
    <line x1={10} y1={80} x2={120} y2={80} stroke={ICE} strokeWidth={3} />
    <line x1={100} y1={30} x2={100} y2={60} stroke={ICE} strokeWidth={5} strokeLinecap="round" />
    <line x1={100} y1={100} x2={100} y2={150} stroke={ICE} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

const Trees: React.FC = () => (
  <svg width={240} height={190} viewBox="0 0 240 190" style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }}>
    {[[50, 1], [120, 1.25], [190, 0.95]].map(([x, s], i) => (
      <g key={i} transform={`translate(${x} 180) scale(${s})`}>
        <rect x={-6} y={-30} width={12} height={30} fill="#7a5a35" />
        <polygon points="0,-140 -40,-30 40,-30" fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} strokeLinejoin="round" />
      </g>
    ))}
  </svg>
);

const Shelf: React.FC = () => (
  <svg width={240} height={190} viewBox="0 0 240 190" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <rect x={10} y={10} width={220} height={170} fill="#ffffff08" stroke={GOLD} strokeWidth={3} />
    {[65, 120].map((y) => <line key={y} x1={10} x2={230} y1={y} y2={y} stroke={GOLD} strokeWidth={3} />)}
    {Array.from({ length: 24 }).map((_, i) => {
      const row = Math.floor(i / 8), k = i % 8;
      return <rect key={i} x={20 + k * 26} y={22 + row * 55 + (k % 3) * 4} width={18} height={40 - (k % 3) * 4} fill={[ROSE, TEAL, VIOLET, GOLD][(i * 7) % 4]} opacity={0.7} />;
    })}
  </svg>
);

const Hall: React.FC = () => (
  <svg width={240} height={190} viewBox="0 0 240 190" style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
    <path d="M10 180 L10 70 Q 120 -10 230 70 L230 180" fill={`${VIOLET}18`} stroke={VIOLET} strokeWidth={3} />
    <rect x={50} y={120} width={140} height={20} fill={`${VIOLET}66`} stroke={VIOLET} strokeWidth={2} />
    {Array.from({ length: 9 }).map((_, i) => <circle key={i} cx={30 + i * 22.5} cy={165} r={7} fill={DIM} />)}
  </svg>
);

const Chair: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 200, color = CHALK, dashed }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 100 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <g stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" fill={`${color}22`} strokeDasharray={dashed ? "7 6" : undefined}>
      <rect x={22} y={6} width={56} height={62} rx={6} />
      <line x1={40} y1={18} x2={40} y2={56} /><line x1={60} y1={18} x2={60} y2={56} />
      <rect x={16} y={68} width={68} height={12} rx={3} />
      <line x1={22} y1={80} x2={20} y2={126} /><line x1={78} y1={80} x2={80} y2={126} />
    </g>
  </svg>
);

const Plate: React.FC<{ o?: number }> = ({ o = 1 }) => (
  <div style={{ width: 120, height: 32, borderRadius: "50%", border: `3px solid ${CHALK}`, background: "#ffffff14", opacity: o, boxShadow: `0 0 12px ${CHALK}55` }} />
);

const Struck: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode }> = ({ at, color = CHALK, size = 44, children }) => (
  <div style={{ position: "relative" }}><Glow color={color} size={size}>{children}</Glow><Strike at={at} /></div>
);

const Centre: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

const Cross: React.FC<{ x: number; y: number; at: number; r?: number; color?: string }> = ({ x, y, at, r = 90, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.45)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.45)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

// ---------------------------------------------------------------- 1-2. the bell, and the imagined gap
const BellGap: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A bell sounds"), stop = c("Then it stops"), now = c("What is there now");
  const tempt = c("It is tempting to say nothing"), gone = c("The sound has gone"), gap = c("there is a gap");
  const larger = c("On a larger scale"), universe = c("or the end of the universe"), fall = c("a fall into that same gap");
  const abs = c("An absolute nothing"), beneath = c("waiting beneath everything");
  const swing = t < stop ? Math.sin((t - t0) * 6) * 18 : Math.sin((t - t0) * 6) * 18 * Math.max(0, 1 - (t - stop) * 1.2);
  const bellOut = ramp(t, larger - 0.3, 0.6);
  const hole = ramp(t, gap, 0.8) * (1 - bellOut);
  const fallU = ramp(t, fall, 2.2);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - bellOut }}>
        <At x={960} y={400} s={pop(t, fps, t0, 13)} o={1 - 0.75 * ramp(t, gone, 0.8)}><Bell swing={swing} /></At>
        <SoundRings x={960} y={420} from={t0 + 0.2} to={stop + 0.4} />
        <At x={960} y={700} o={ramp(t, now, 0.5)}><Glow color={CHALK} size={50} serif>what is there now?</Glow></At>
        <At x={1480} y={300} o={ramp(t, tempt, 0.5)}><Glow color={DIM} size={46}>nothing?</Glow></At>
        <At x={1240} y={420} o={hole} s={0.6 + 0.4 * hole}>
          <div style={{ width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #000 50%, transparent 70%)", boxShadow: `0 0 40px ${VIOLET}66` }} />
        </At>
        <At x={1240} y={560} o={hole}><Glow color={VIOLET} size={36}>a gap?</Glow></At>
      </AbsoluteFill>
      <Scene from={larger - 0.2} to={1e9}>
        <Pit x={960} y={720} w={1100} o={ramp(t, fall - 0.4, 0.8)} />
        {/* a life: a candle-like person, and a galaxy */}
        <At x={640} y={330 + fallU * 320} s={pop(t, fps, larger)} o={1 - ramp(t, fall + 1.4, 0.8)}><Person size={170} color={ROSE} /></At>
        <At x={640} y={170} o={ramp(t, larger + 0.3, 0.5) * (1 - fallU)}><Glow color={ROSE} size={36}>death</Glow></At>
        <At x={1280} y={330 + fallU * 320} s={pop(t, fps, universe)} r={t * 30} o={1 - ramp(t, fall + 1.4, 0.8)}>
          <svg width={240} height={240} viewBox="-100 -100 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${VIOLET})` }}>
            {Array.from({ length: 90 }).map((_, i) => {
              const arm = i % 2, a = (i / 90) * Math.PI * 3 + arm * Math.PI, r = 8 + (i / 90) * 88;
              return <circle key={i} cx={r * Math.cos(a)} cy={r * Math.sin(a) * 0.7} r={2 + rand(i) * 3} fill={i % 4 ? CHALK : VIOLET} opacity={0.9 - (i / 90) * 0.5} />;
            })}
          </svg>
        </At>
        <At x={1280} y={170} o={ramp(t, universe + 0.3, 0.5) * (1 - fallU)}><Glow color={VIOLET} size={36}>the universe</Glow></At>
        <At x={960} y={560} o={ramp(t, abs, 0.6)}><Glow color={VIOLET} size={54} serif>an absolute nothing?</Glow></At>
        <At x={960} y={830} o={ramp(t, beneath, 0.6)}><Glow color={DIM} size={34}>beneath everything</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. substantialism in reverse
const Reverse: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("This looks like the opposite"), solid = c("exist solidly from their own side"), rev = c("substantialism in reverse");
  const drop = c("For something to drop into nothing"), self = c("a self-standing something"), wiped = c("could be wiped out");
  const butNot = c("But nothing exists that way"), noKind = c("nothing of that kind to annihilate");
  const fallU = ramp(t, wiped, 1.4) * (1 - ramp(t, butNot - 0.2, 0.3));
  const soft = ramp(t, butNot, 1.0);
  const pitO = ramp(t, drop, 0.6) * (1 - ramp(t, noKind, 1.0));
  const mirror = ramp(t, rev, 1.0);
  return (
    <AbsoluteFill>
      <At x={560} y={110} o={ramp(t, t0, 0.5)}><Chip color={GOLD} size={38}>substantialism</Chip></At>
      <At x={1360} y={110} o={ramp(t, t0 + 0.6, 0.5)}><Chip color={VIOLET} size={38}>absolute nothing</Chip></At>
      <Svg style={{ opacity: ramp(t, t0 + 0.6, 0.5) * (1 - mirror) }}>
        <DrawPath d="M760 110 L1150 110" p={ramp(t, t0 + 0.8, 0.6)} color={DIM} width={3} len={400} />
      </Svg>
      <At x={960} y={110} o={ramp(t, t0 + 1.0, 0.5) * (1 - mirror)}><Glow color={DIM} size={30}>opposites?</Glow></At>
      {[0, 1, 2].map((i) => (
        <At key={i} x={440 + i * 120} y={330 + (i % 2) * 60} s={pop(t, fps, solid + i * 0.15)}><Cube size={110} /></At>
      ))}
      <At x={960} y={250} o={mirror}><Reveal text="in reverse" at={rev + 0.2} size={64} color={WARM} top="#FFE0D0" /></At>
      <Svg style={{ opacity: mirror }}>
        <DrawPath d="M820 300 C 900 380, 1020 380, 1100 300" p={mirror} color={WARM} width={4} len={360} />
      </Svg>
      <Pit x={1360} y={700} w={560} o={pitO} />
      <At x={1360} y={330 + fallU * 340} s={pop(t, fps, drop)} o={1 - 0.4 * soft}>
        <div style={{ position: "relative" }}>
          <div style={{ opacity: 1 - soft }}><Cube size={170} /></div>
          <div style={{ position: "absolute", inset: 0, opacity: soft }}><Cube size={170} color={TEAL} dashed /></div>
        </div>
      </At>
      <At x={1640} y={300} o={between(t, self, butNot)}><Glow color={GOLD} size={34}>self-standing</Glow></At>
      <At x={1360} y={820} o={between(t, wiped + 0.3, butNot)}><Glow color={WARM} size={36}>wiped out?</Glow></At>
      <At x={1360} y={560} o={ramp(t, butNot + 0.4, 0.5)}><Glow color={TEAL} size={38}>never self-standing</Glow></At>
      <At x={960} y={700} o={ramp(t, noKind, 0.6)}><Glow color={CHALK} size={44} serif>nothing to annihilate</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. nothing cannot be thought
const ThinkNothing: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("There is a second difficulty"), cannot = c("cannot even be thought"), think = c("To think of nothing");
  const thisA = c("the absence of this"), thatA = c("or the end of that"), contrast = c("only by contrast with something");
  const moment = c("The moment it is proposed"), rel = c("a relative absence");
  const firstOut = ramp(t, contrast - 0.3, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - firstOut }}>
        <At x={960} y={100} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={42}>a second difficulty</Glow></At>
        <At x={480} y={560} s={pop(t, fps, t0 + 0.3)}><Person size={230} color={TEAL} /></At>
        <At x={1040} y={400} s={pop(t, fps, cannot)} o={1 - ramp(t, think - 0.2, 0.3)}>
          <div style={{ position: "relative" }}><Glow color={VIOLET} size={60} serif>absolute nothing</Glow><Strike at={cannot + 1.2} /></div>
        </At>
        <Svg style={{ opacity: ramp(t, think, 0.5) }}>
          <circle cx={600} cy={420} r={10} fill={VIOLET} /><circle cx={640} cy={385} r={15} fill={VIOLET} />
        </Svg>
        <At x={1040} y={400} s={pop(t, fps, think)}>
          <Bubble w={720}>
            <div style={{ display: "flex", gap: 70, alignItems: "center" }}>
              <div style={{ opacity: ramp(t, thisA, 0.5), textAlign: "center" }}>
                <div style={{ width: 130, height: 130, border: `3px dashed ${GOLD}`, borderRadius: 16, margin: "0 auto" }} />
                <Glow color={GOLD} size={30} style={{ marginTop: 10 }}>absence of this</Glow>
              </div>
              <div style={{ opacity: ramp(t, thatA, 0.5), textAlign: "center" }}>
                <Svg style={{ position: "relative", width: 160, height: 130 }}>
                  <line x1={10} y1={65} x2={110} y2={65} stroke={ROSE} strokeWidth={6} strokeLinecap="round" />
                  <line x1={120} y1={30} x2={120} y2={100} stroke={ROSE} strokeWidth={6} strokeLinecap="round" />
                </Svg>
                <Glow color={ROSE} size={30} style={{ marginTop: 10 }}>end of that</Glow>
              </div>
            </div>
          </Bubble>
        </At>
        <At x={1040} y={700} o={ramp(t, think + 0.5, 0.5)}><Glow color={VIOLET} size={36}>picking out nothing</Glow></At>
      </AbsoluteFill>
      <Scene from={contrast - 0.2} to={1e9}>
        <At x={960} y={420} s={pop(t, fps, contrast)}>
          <div style={{ width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}cc 0%, ${GOLD}66 55%, ${GOLD}11 72%, transparent 74%)`,
            display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 60px ${GOLD}66` }}>
            <div style={{ width: 220 * ramp(t, contrast + 0.6, 0.8), height: 220 * ramp(t, contrast + 0.6, 0.8), borderRadius: "50%", background: "#07070f",
              boxShadow: `inset 0 0 30px #000, 0 0 20px ${GOLD}` }} />
          </div>
        </At>
        <At x={400} y={420} o={ramp(t, contrast + 0.2, 0.5)}><Glow color={GOLD} size={42}>something</Glow></At>
        <Flow x1={560} y1={420} x2={880} y2={420} color={GOLD} p={ramp(t, contrast + 1.0, 0.6)} />
        <At x={1480} y={420} o={ramp(t, contrast + 1.2, 0.5)}><Glow color={CHALK} size={42}>nothing, by contrast</Glow></At>
        <At x={960} y={780} o={ramp(t, moment, 0.5)}>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <Struck at={rel} color={VIOLET} size={40}>absolute</Struck>
            <Chip color={TEAL} size={40}>relative absence</Chip>
          </div>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. Bergson
const Bergson: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Henri Bergson"), end = c("Try to imagine the end"), some = c("imagining something");
  const dark = c("A darkness"), sil = c("A silence"), you = c("Yourself, watching the void");
  const fade = ramp(t, end + 0.5, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={90} s={pop(t, fps, t0)}><Chip color={GOLD} size={38}>Henri Bergson</Chip></At>
      <div style={{ position: "absolute", left: 460, top: 180, width: 1000, height: 540, borderRadius: 12, border: `3px solid ${GOLD}`,
        boxShadow: `0 0 30px ${GOLD}55`, overflow: "hidden", opacity: ramp(t, end - 0.4, 0.5),
        background: `rgba(5,5,12,${0.2 + 0.75 * ramp(t, dark, 1.0)})` }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", left: rand(i) * 980, top: rand(i + 9) * 520, width: 5 + rand(i + 3) * 6, height: 5 + rand(i + 3) * 6,
            borderRadius: "50%", background: i % 4 ? CHALK : GOLD, opacity: (1 - fade) * (0.5 + 0.5 * Math.sin(t * 3 + i)) }} />
        ))}
      </div>
      <At x={960} y={250} o={between(t, end, some + 0.4)}><Glow color={CHALK} size={38}>the end of everything</Glow></At>
      <At x={960} y={250} o={ramp(t, some, 0.5)}><Glow color={GOLD} size={44} serif>still, something</Glow></At>
      <At x={680} y={470} o={ramp(t, dark, 0.5)}><Glow color={DIM} size={40}>a darkness</Glow></At>
      <At x={960} y={470} o={ramp(t, sil, 0.5)}>
        <svg width={120} height={90} viewBox="0 0 120 90" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
          <path d="M10 35 L35 35 L60 12 L60 78 L35 55 L10 55 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={3} strokeLinejoin="round" />
          <line x1={78} y1={28} x2={110} y2={62} stroke={WARM} strokeWidth={5} strokeLinecap="round" />
          <line x1={110} y1={28} x2={78} y2={62} stroke={WARM} strokeWidth={5} strokeLinecap="round" />
        </svg>
        <Glow color={ICE} size={36}>a silence</Glow>
      </At>
      <At x={1260} y={560} s={pop(t, fps, you)}><Person size={150} color={ROSE} /></At>
      <At x={1260} y={680} o={ramp(t, you + 0.4, 0.5)}><Glow color={ROSE} size={34}>you, watching</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. rain and flame
const RainFlame: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("So absence is always relative"), rain = c("The absence of rain"), hole = c("a rain-shaped hole");
  const clear = c("It is clear air"), sun = c("sunlight on dry pavement"), expected = c("who expected rain");
  const flame = c("When a flame goes out"), fuel = c("The fuel is spent"), heat = c("the heat disperses"), smoke = c("the smoke drifts");
  const flameOn = 1 - ramp(t, flame + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <Centre top={50}><Reveal text="absence is always relative" at={t0 + 0.2} size={64} /></Centre>
      {/* rain */}
      <At x={520} y={290} s={pop(t, fps, rain)} o={1 - ramp(t, clear, 0.6)}><Cloud dashed /></At>
      <At x={520} y={430} o={between(t, hole, clear)}><Struck at={hole + 1.0} color={ICE} size={34}>a rain-shaped hole?</Struck></At>
      <Svg style={{ opacity: between(t, rain + 0.2, hole) }}>
        {Array.from({ length: 16 }).map((_, i) => {
          const x = 400 + rand(i) * 240, y = 360 + (((t * 300) + rand(i + 4) * 300) % 300);
          return <line key={i} x1={x} y1={y} x2={x - 6} y2={y + 26} stroke={ICE} strokeWidth={3} strokeLinecap="round" strokeDasharray="4 6" opacity={0.6} />;
        })}
      </Svg>
      <At x={420} y={290} s={pop(t, fps, clear)}><Sun size={150} rot={t * 20} /></At>
      <Svg style={{ opacity: ramp(t, sun, 0.6) }}>
        <rect x={290} y={640} width={460} height={30} rx={4} fill="#c9b98a55" stroke={GOLD} strokeWidth={2} />
        {[0, 1, 2, 3].map((i) => <line key={i} x1={420 + i * 30} y1={340} x2={360 + i * 90} y2={630} stroke={GOLD} strokeWidth={2} strokeOpacity={0.35} />)}
      </Svg>
      <At x={520} y={720} o={ramp(t, sun + 0.3, 0.5)}><Glow color={GOLD} size={32}>clear air, dry pavement</Glow></At>
      <At x={700} y={530} s={pop(t, fps, expected)}><Person size={120} color={TEAL} /></At>
      <At x={760} y={400} o={ramp(t, expected + 0.3, 0.5)}><Chip color={TEAL} size={26}>expected rain</Chip></At>
      {/* flame */}
      <At x={1400} y={430} s={pop(t, fps, flame - 0.3)}><Flame k={flameOn} /></At>
      <At x={1400} y={540} s={pop(t, fps, flame - 0.2)}><Log burnt={ramp(t, fuel, 0.6)} /></At>
      <At x={1400} y={620} o={ramp(t, fuel, 0.5)}><Glow color={DIM} size={30}>fuel spent</Glow></At>
      <Svg style={{ opacity: between(t, heat, heat + 3, 0.5) }}>
        {[0, 1, 2].map((k) => {
          const x = 1300 + k * 100;
          const d = Array.from({ length: 12 }, (_, i) => `${i ? "L" : "M"}${x + 14 * Math.sin(i * 0.9 + t * 4 + k)} ${470 - i * 20 - ((t - heat) * 40) % 40}`).join(" ");
          return <path key={k} d={d} fill="none" stroke={WARM} strokeWidth={3} strokeOpacity={0.6} />;
        })}
      </Svg>
      <At x={1640} y={300} o={ramp(t, heat, 0.5)}><Glow color={WARM} size={30}>heat disperses</Glow></At>
      <Mist x={1400} y={430} start={smoke} color={DIM} spread={160} n={18} />
      <At x={1640} y={200} o={ramp(t, smoke + 0.2, 0.5)}><Glow color={DIM} size={30}>smoke drifts</Glow></At>
      <At x={1400} y={760} o={ramp(t, smoke + 0.8, 0.5)}><Glow color={CHALK} size={36}>no substance annihilated</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. silence after the bell
const Silence: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Listen again to the bell"), notHole = c("not a hole in experience"), room = c("the quiet of the room");
  const hum = c("The faint hum of a fridge"), breath = c("Your own breathing"), space = c("A sense of space");
  const notNothing = c("Silence is not experienced as nothing"), quality = c("its own vivid quality");
  const forest = c("a forest"), library = c("a library"), hall = c("a concert hall"), contrast = c("only by contrast with the bell");
  const part2 = quality - 0.3;
  const swing = Math.sin((t - t0) * 6) * 14 * Math.max(0, 1 - (t - t0) * 0.5);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={part2}>
        <Svg style={{ opacity: ramp(t, room, 1.0) }}>
          <g stroke={CHALK} strokeOpacity={0.5} strokeWidth={3} fill="none">
            <rect x={360} y={140} width={1200} height={640} />
            <rect x={660} y={300} width={600} height={330} />
            <path d="M360 140 L660 300 M1560 140 L1260 300 M360 780 L660 630 M1560 780 L1260 630" />
          </g>
        </Svg>
        <At x={960} y={400} s={pop(t, fps, t0)} o={1 - 0.8 * ramp(t, t0 + 1.4, 1.0)}><Bell size={200} swing={swing} /></At>
        <SoundRings x={960} y={420} from={t0} to={t0 + 1.4} />
        <At x={960} y={400} o={ramp(t, space, 1.0)}>
          <div style={{ width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL}44, ${TEAL}11 55%, transparent 70%)` }} />
        </At>
        <At x={960} y={400} o={between(t, notHole, room)}><Struck at={notHole + 0.9} size={40}>a hole?</Struck></At>
        <At x={960} y={590} o={ramp(t, space + 0.4, 0.5)}><Glow color={TEAL} size={32}>space where the bell was</Glow></At>
        <At x={520} y={560} s={pop(t, fps, hum)}><Fridge /></At>
        <Svg style={{ opacity: ramp(t, hum + 0.3, 0.5) }}>
          {[0, 1, 2].map((k) => {
            const d = Array.from({ length: 16 }, (_, i) => `${i ? "L" : "M"}${600 + i * 8} ${470 + k * 16 + 4 * Math.sin(i * 1.4 + t * 8 + k)}`).join(" ");
            return <path key={k} d={d} fill="none" stroke={ICE} strokeWidth={2.5} strokeOpacity={0.7} />;
          })}
        </Svg>
        <At x={520} y={700} o={ramp(t, hum + 0.4, 0.5)}><Glow color={ICE} size={30}>hum</Glow></At>
        <At x={1400} y={560} s={pop(t, fps, breath) * (1 + 0.05 * Math.sin(t * 2.2))}><Person size={170} color={ROSE} /></At>
        <At x={1400} y={700} o={ramp(t, breath + 0.4, 0.5)}><Glow color={ROSE} size={30}>breathing</Glow></At>
        <At x={960} y={760} o={ramp(t, notNothing, 0.5)}><Glow color={GOLD} size={44} serif>silence is not nothing</Glow></At>
      </Scene>
      <Scene from={part2 + 0.2} to={1e9}>
        <Centre top={90}><Reveal text="a vivid quality" at={quality} size={70} /></Centre>
        {[[forest, <Trees />, "forest", GREEN, 480], [library, <Shelf />, "library", GOLD, 960], [hall, <Hall />, "concert hall", VIOLET, 1440]].map(([at, icon, lab, col, x], i) => (
          <React.Fragment key={i}>
            <At x={x as number} y={380} s={pop(t, fps, at as number)}>{icon as React.ReactNode}</At>
            <At x={x as number} y={380} o={ramp(t, at as number, 0.5)}>
              <div style={{ width: 340, height: 340, borderRadius: "50%", background: `radial-gradient(circle, ${col}33, transparent 65%)` }} />
            </At>
            <At x={x as number} y={540} o={ramp(t, (at as number) + 0.3, 0.5)}><Glow color={col as string} size={34}>{lab as string}</Glow></At>
          </React.Fragment>
        ))}
        <At x={760} y={720} o={ramp(t, contrast, 0.5)}><Bell size={120} dashed color={DIM} /></At>
        <Flow x1={860} y1={720} x2={1080} y2={720} color={TEAL} p={ramp(t, contrast + 0.4, 0.6)} />
        <At x={1230} y={720} o={ramp(t, contrast + 0.7, 0.5)}><Glow color={TEAL} size={42}>silence</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. the empty chair
const EmptyChair: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Absence can be as vivid"), family = c("A family sits down to dinner"), death = c("after a death"), empty = c("One chair is empty");
  const noOne = c("No one needs to point it out"), patch = c("not a patch of nothing"), present = c("the most present thing");
  const years = c("years of shared meals"), people = c("the people who notice it"), stranger = c("A stranger would see"), speaks = c("how the family speaks");
  const glow = ramp(t, present, 1.0);
  const seats = [560, 800, 1120, 1360];
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={42}>absence, as vivid as presence</Glow></At>
      {seats.map((x, i) => (
        i === 3
          ? <At key={i} x={x} y={430} s={pop(t, fps, empty)}><Chair size={150} color={glow > 0.1 ? GOLD : CHALK} /></At>
          : <At key={i} x={x} y={410} s={pop(t, fps, family + i * 0.2)}><Person size={170} color={[ROSE, TEAL, VIOLET][i]} /></At>
      ))}
      <At x={1360} y={420} o={glow}>
        <div style={{ width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}55, ${GOLD}11 55%, transparent 70%)` }} />
      </At>
      <Svg>
        <rect x={430} y={520} width={1060} height={40} rx={8} fill="#7a5a3599" stroke={GOLD} strokeWidth={3} opacity={ramp(t, family, 0.6)} />
        <line x1={480} y1={560} x2={480} y2={700} stroke={GOLD} strokeWidth={6} opacity={ramp(t, family, 0.6)} />
        <line x1={1440} y1={560} x2={1440} y2={700} stroke={GOLD} strokeWidth={6} opacity={ramp(t, family, 0.6)} />
      </Svg>
      {seats.map((x, i) => (
        <At key={i} x={x} y={520} o={i === 3 ? 0.35 * ramp(t, empty, 0.5) : ramp(t, family + 0.4, 0.5)}><Plate o={i === 3 ? 0.4 : 1} /></At>
      ))}
      <At x={1360} y={230} o={between(t, death, empty + 0.6)}><Glow color={DIM} size={30}>after a death</Glow></At>
      <At x={1360} y={230} o={between(t, patch, present + 0.4)}><Struck at={patch + 0.9} color={DIM} size={34}>a patch of nothing?</Struck></At>
      <At x={1360} y={230} o={ramp(t, present + 0.4, 0.5) * (1 - ramp(t, stranger, 0.4))}><Glow color={GOLD} size={38} serif>the most present thing</Glow></At>
      <At x={960} y={250} o={between(t, noOne, patch)}><Glow color={CHALK} size={34}>everyone feels it</Glow></At>
      {/* years of meals: ghost plates */}
      {Array.from({ length: 10 }).map((_, i) => (
        <At key={i} x={520 + i * 92} y={620 + (i % 2) * 30} o={between(t, years + i * 0.1, people + 0.3) * 0.6}><Plate /></At>
      ))}
      <At x={960} y={760} o={between(t, years + 0.5, people + 0.3)}><Glow color={DIM} size={32}>years of shared meals</Glow></At>
      {seats.slice(0, 3).map((x, i) => (
        <Flow key={i} x1={x + 60} y1={380} x2={1290} y2={400} color={GOLD} p={between(t, people, stranger, 0.6)} width={2} />
      ))}
      <At x={190} y={470} s={pop(t, fps, stranger)}><Person size={130} color={DIM} dashed /></At>
      <At x={190} y={610} o={ramp(t, stranger + 0.4, 0.5)}><Glow color={DIM} size={30}>just a chair</Glow></At>
      {[[620, 260], [860, 240]].map(([x, y], i) => (
        <At key={i} x={x} y={y} o={between(t, speaks + i * 0.4, speaks + 3, 0.5)}>
          <div style={{ padding: "8px 22px", borderRadius: 22, border: `2px dashed ${CHALK}`, color: CHALK, fontSize: 30, opacity: 0.6 }}>…</div>
        </At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9-10. being and non-being
const Extremes: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ifEven = c("If even absence"), noPlace = c("no place left");
  const t0 = c("Being and non-being"), habit = c("twin extremes of one habit"), first = c("The first posits a thing"), second = c("The second posits a thing");
  const arise = c("Appearances arise"), part = c("subside when they part"), threat = c("no threat of falling"), never = c("never a self-standing something");
  const pitClose = ramp(t, noPlace, 1.4);
  const pre = 1 - ramp(t, t0 - 0.3, 0.5);
  const conv = ramp(t, arise, 1.4), apart = ramp(t, part, 1.6);
  const bloom = conv * (1 - apart);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: pre }}>
        <At x={960} y={460} o={ramp(t, ifEven - 0.2, 0.5)} s={1 - 0.9 * pitClose}>
          <div style={{ width: 700, height: 220, borderRadius: "50%", background: "radial-gradient(ellipse, #000 45%, transparent 70%)", boxShadow: `0 0 50px ${VIOLET}66` }} />
        </At>
        <At x={960} y={250} o={ramp(t, ifEven, 0.5)}><Glow color={VIOLET} size={40}>absolute nothing</Glow></At>
        <At x={960} y={680} o={ramp(t, noPlace + 0.3, 0.5)}><Glow color={CHALK} size={44} serif>no place left</Glow></At>
      </AbsoluteFill>
      <Scene from={t0 - 0.2} to={arise - 0.4}>
        <At x={560} y={420} s={pop(t, fps, first)}><Cube size={190} /></At>
        <At x={560} y={620} o={ramp(t, first + 0.3, 0.5)}><Chip color={GOLD} size={34}>a thing is there</Chip></At>
        <At x={1360} y={420} s={pop(t, fps, second)}>
          <div style={{ position: "relative", width: 190, height: 190 }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}><Cube size={190} dashed color={DIM} /></div>
            <div style={{ position: "absolute", left: 20, top: 120, width: 150, height: 60, borderRadius: "50%", background: "radial-gradient(ellipse, #000 50%, transparent 72%)" }} />
          </div>
        </At>
        <At x={1360} y={620} o={ramp(t, second + 0.3, 0.5)}><Chip color={VIOLET} size={34}>a thing has gone</Chip></At>
        <At x={560} y={170} o={ramp(t, t0, 0.5)}><Glow color={GOLD} size={46} serif>being</Glow></At>
        <At x={1360} y={170} o={ramp(t, t0 + 0.4, 0.5)}><Glow color={VIOLET} size={46} serif>non-being</Glow></At>
        <Svg style={{ opacity: ramp(t, habit, 0.6) }}>
          <DrawPath d="M560 740 Q 960 860 1360 740" p={ramp(t, habit, 1.0)} color={WARM} width={4} len={900} />
        </Svg>
        <At x={960} y={760} o={ramp(t, habit + 0.5, 0.5)}><Glow color={WARM} size={38}>one habit</Glow></At>
      </Scene>
      <Scene from={arise - 0.3} to={1e9}>
        {Array.from({ length: 7 }).map((_, i) => {
          const a = (i / 7) * Math.PI * 2;
          const r = 420 - 330 * conv + 420 * apart;
          return <At key={i} x={960 + r * Math.cos(a)} y={400 + r * 0.6 * Math.sin(a)} o={1 - apart * 0.8}><Orb size={86} color={[TEAL, GOLD, ROSE, VIOLET, ICE, GREEN, WARM][i]} /></At>;
        })}
        <At x={960} y={400} s={bloom} o={bloom}>
          <svg width={260} height={260} viewBox="-100 -100 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 20px ${GOLD})` }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse key={i} cx={0} cy={-45} rx={22} ry={48} fill={`${ROSE}66`} stroke={ROSE} strokeWidth={2} transform={`rotate(${i * 45 + t * 10})`} />
            ))}
            <circle r={24} fill={GOLD} />
          </svg>
        </At>
        <At x={960} y={130} o={ramp(t, arise, 0.5)}><Glow color={TEAL} size={38}>conditions come together</Glow></At>
        <At x={960} y={680} o={ramp(t, part, 0.5)}><Glow color={DIM} size={38}>and part</Glow></At>
        <At x={960} y={790} o={ramp(t, threat, 0.5)}>
          <div style={{ width: 600, height: 60, borderRadius: "50%", background: "radial-gradient(ellipse, #000 45%, transparent 72%)", opacity: 1 - ramp(t, never, 1.0) }} />
        </At>
        <Cross x={960} y={790} at={threat + 1.2} r={70} />
        <At x={1500} y={790} o={ramp(t, never, 0.5)}><Glow color={CHALK} size={34}>nothing that could fall</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. emptiness is not nothingness
const NotNothing: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Is emptiness, then, just nothing"), nth = c("Nothingness would be the absence"), emp = c("Emptiness is the absence");
  const still = c("things that still appear"), chair = c("The chair is empty"), holds = c("it holds a person");
  const sit = ramp(t, holds, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>emptiness = nothing?</Glow></At>
      <At x={520} y={430} s={pop(t, fps, nth)}>
        <div style={{ width: 300, height: 300, border: `3px dashed ${VIOLET}`, borderRadius: 16, background: "#00000055", boxShadow: `inset 0 0 40px #000` }} />
      </At>
      <At x={520} y={640} o={ramp(t, nth + 0.3, 0.5)}><Chip color={VIOLET} size={32}>nothingness: no things</Chip></At>
      <At x={1360} y={420} s={pop(t, fps, emp)}><Chair size={190} color={GOLD} /></At>
      <At x={1360} y={420} o={between(t, emp + 0.3, chair + 0.6)}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 330, height: 360, borderRadius: 20, border: `3px dashed ${WARM}`, boxShadow: `0 0 20px ${WARM}55` }} />
        </div>
      </At>
      <At x={1360} y={190} o={between(t, emp + 0.3, chair + 0.6)}><Struck at={emp + 1.6} color={WARM} size={32}>a self-standing nature</Struck></At>
      <At x={1360} y={640} o={ramp(t, still, 0.5)}><Chip color={GOLD} size={32}>emptiness: things still work</Chip></At>
      <At x={1360} y={330 - 40 * sit} s={pop(t, fps, holds)} o={ramp(t, holds, 0.4)}><Person size={170} color={TEAL} /></At>
      <At x={1360} y={760} o={ramp(t, chair, 0.5)}><Glow color={CHALK} size={38}>empty, and it holds a person</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. close
const Close: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The bell sounds, and then"), nv = c("No void has opened");
  const swing = Math.sin((t - t0) * 6) * 16 * Math.max(0, 1 - (t - t0) * 0.45);
  const quiet = ramp(t, t0 + 2.0, 1.5);
  return (
    <AbsoluteFill>
      <At x={960} y={380} o={quiet}>
        <div style={{ width: 760, height: 760, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL}33, ${GOLD}11 50%, transparent 70%)` }} />
      </At>
      <At x={960} y={360} s={pop(t, fps, t0 - 0.3, 13)}><Bell size={230} swing={swing} /></At>
      <SoundRings x={960} y={380} from={t0} to={t0 + 2.0} />
      <Mist x={960} y={600} start={t0 + 2.0} color={GOLD} spread={500} n={16} />
      <Centre top={660}><Reveal text="no void has opened" at={nv} size={80} /></Centre>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["bell", 0], ["void", c("On a larger scale", 0.6)], ["rev", c("This looks like the opposite", 0.6)], ["thought", c("There is a second difficulty", 0.6)],
    ["berg", c("Henri Bergson", 0.6)], ["rain", c("So absence is always relative", 0.6)], ["quiet", c("Listen again to the bell", 0.6)],
    ["chair", c("Absence can be as vivid", 0.6)], ["ext", c("If even absence", 0.6)], ["emp", c("Is emptiness, then, just nothing", 0.6)],
    ["close", c("The bell sounds, and then", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("This looks like the opposite", 0.9)], <BellGap />],
    [S("This looks like the opposite", "There is a second difficulty"), <Reverse />],
    [S("There is a second difficulty", "Henri Bergson"), <ThinkNothing />],
    [S("Henri Bergson", "So absence is always relative"), <Bergson />],
    [S("So absence is always relative", "Listen again to the bell"), <RainFlame />],
    [S("Listen again to the bell", "Absence can be as vivid"), <Silence />],
    [S("Absence can be as vivid", "If even absence"), <EmptyChair />],
    [S("If even absence", "Is emptiness, then, just nothing"), <Extremes />],
    [S("Is emptiness, then, just nothing", "The bell sounds, and then"), <NotNothing />],
    [S("The bell sounds, and then", null), <Close />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
