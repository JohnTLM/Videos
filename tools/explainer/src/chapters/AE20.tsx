// Anatta to Emptiness, Chapter 20: Independent Paths: What Science Gave Up. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, PictureFrame, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Imagine a train gliding", "Every window is covered", "moving at all",
  "one picture of the world", "Independent things", "absolute space and absolute time", "Detached observers", "hardly seemed like a picture",
  "Nearly two thousand years ago", "examined every claim", "Self, object, cause", "an independent essence", "arises through conditions",
  "the last century and a half", "giving up the same picture", "has proven the Dharma", "The two resonate", "Neither proves the other",
  "Take space first", "an invisible container", "everything else vanished", "Ernst Mach asked", "no experiment reveals the motion", "relative to something else",
  "Einstein went further", "Two lightning bolts", "beside the track", "To a passenger", "Neither is mistaken", "no single cosmic clock",
  "an empty stage", "matter tells spacetime", "tells matter how to move", "Neither stands on its own",
  "fixed properties at all", "as a wave", "as a particle", "Carlo Rovelli goes further", "no position of its own", "only in an interaction",
  "found this way of thinking", "adds one step", "The web of relations", "no more found",
  "John Bell turned", "a measurable number", "distant particles stay correlated", "no local signal", "no hidden local property",
  "The connection is real", "What is missing is a carrier",
  "The observer changed", "a participatory universe", "Not a mind creating", "measurement as participation", "Knower and known",
  "the mind lost its container", "A single forest", "to a botanist", "to a bird", "shelter to a deer", "timber to an engineer", "bring each other forth",
  "None of this establishes emptiness", "Relativity is not Buddhist", "away from fixed foundations", "toward relation", "takes one step more",
  "no more a foundation",
  "Two very different paths", "the same support",
];

// this series' deeper golds and indigos
const AMBER = "#E0A93B", INDIGO = "#7B78FF";

const M = {
  train: { a: "rgba(50,50,140,0.5)", b: "rgba(170,120,50,0.38)", c: "rgba(30,80,120,0.3)" },
  picture: { a: "rgba(70,55,140,0.5)", b: "rgba(150,110,45,0.4)", c: "rgba(40,60,110,0.3)" },
  middle: { a: "rgba(170,125,50,0.45)", b: "rgba(60,50,150,0.45)", c: "rgba(40,110,120,0.3)" },
  space: { a: "rgba(40,60,150,0.55)", b: "rgba(160,120,50,0.38)", c: "rgba(30,100,130,0.3)" },
  quantum: { a: "rgba(90,50,160,0.55)", b: "rgba(40,110,150,0.4)", c: "rgba(170,120,50,0.3)" },
  bell: { a: "rgba(40,100,150,0.5)", b: "rgba(110,60,160,0.45)", c: "rgba(170,130,60,0.3)" },
  forest: { a: "rgba(40,120,90,0.5)", b: "rgba(160,120,50,0.4)", c: "rgba(60,60,150,0.35)" },
  close: { a: "rgba(180,130,50,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(40,120,130,0.3)" },
};

// ---------------------------------------------------------------- helpers
const XMark: React.FC<{ x: number; y: number; r: number; at: number; color?: string }> = ({ x, y, r, at, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

const Check: React.FC<{ x: number; y: number; at: number; color?: string; s?: number }> = ({ x, y, at, color = GREEN, s = 1 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - 40 * s} ${y} L${x - 10 * s} ${y + 30 * s} L${x + 45 * s} ${y - 35 * s}`} p={ramp(t, at, 0.5)} color={color} width={9} len={200 * s} />
    </Svg>
  );
};

/** A struck-through chip. */
const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

/** A train carriage; `cover` 0..1 pulls shades down over the windows. */
const Train: React.FC<{ cover?: number; color?: string; w?: number }> = ({ cover = 0, color = INDIGO, w = 720 }) => {
  const { t } = useT();
  const n = 6;
  return (
    <svg width={w} height={w * 0.32} viewBox="0 0 720 230" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
      <rect x={10} y={20} width={700} height={160} rx={30} fill={`${color}33`} stroke={color} strokeWidth={5} />
      <line x1={10} y1={150} x2={710} y2={150} stroke={AMBER} strokeWidth={4} />
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <rect x={45 + i * 110} y={45} width={80} height={70} rx={8} fill="rgba(169,221,242,0.25)" stroke={ICE} strokeWidth={3} />
          <rect x={45 + i * 110} y={45} width={80} height={70 * Math.min(1, Math.max(0, cover * 1.6 - i * 0.12))} rx={6} fill={AMBER} opacity={0.85} />
        </g>
      ))}
      {[110, 250, 470, 610].map((x, i) => (
        <g key={i} transform={`translate(${x} 195) rotate(${t * 220})`}>
          <circle r={28} fill="#14152a" stroke={CHALK} strokeWidth={4} />
          <line x1={-24} y1={0} x2={24} y2={0} stroke={CHALK} strokeWidth={3} /><line x1={0} y1={-24} x2={0} y2={24} stroke={CHALK} strokeWidth={3} />
        </g>
      ))}
    </svg>
  );
};

const Rails: React.FC<{ y: number; o?: number; speed?: number }> = ({ y, o = 1, speed = 260 }) => {
  const { t } = useT();
  return (
    <Svg style={{ opacity: o }}>
      <line x1={140} y1={y} x2={1780} y2={y} stroke={DIM} strokeWidth={4} />
      {Array.from({ length: 26 }).map((_, i) => {
        const x = 140 + ((i * 66 - t * speed) % 1716 + 1716) % 1716;
        return <line key={i} x1={x} y1={y + 4} x2={x - 18} y2={y + 22} stroke={DIM} strokeWidth={4} opacity={0.6} />;
      })}
    </Svg>
  );
};

const Bolt: React.FC<{ color?: string; flash: number }> = ({ color = AMBER, flash }) => (
  <svg width={120} height={240} viewBox="0 0 120 240" style={{ opacity: flash, filter: `drop-shadow(0 0 ${10 + 20 * flash}px ${color})` }}>
    <path d="M70 0 L20 120 L60 120 L35 240 L105 95 L65 95 L95 0 Z" fill={color} stroke="#FFF3D1" strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

const Person: React.FC<{ color: string; size?: number }> = ({ color, size = 1 }) => (
  <svg width={90 * size} height={170 * size} viewBox="0 0 90 170" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={5} strokeLinecap="round">
      <circle cx={45} cy={25} r={18} /><line x1={45} y1={43} x2={45} y2={108} /><line x1={45} y1={108} x2={25} y2={165} />
      <line x1={45} y1={108} x2={65} y2={165} /><line x1={45} y1={62} x2={15} y2={92} /><line x1={45} y1={62} x2={75} y2={92} />
    </g>
  </svg>
);

const Clock: React.FC<{ size: number; color?: string }> = ({ size, color = AMBER }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
      <circle r={52} fill={`${color}22`} stroke={color} strokeWidth={5} />
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-44} x2={0} y2={-38} stroke={color} strokeWidth={3} transform={`rotate(${i * 30})`} />)}
      <line x1={0} y1={0} x2={0} y2={-34} stroke={CHALK} strokeWidth={4} strokeLinecap="round" transform={`rotate(${t * 40})`} />
      <line x1={0} y1={0} x2={0} y2={-22} stroke={CHALK} strokeWidth={5} strokeLinecap="round" transform={`rotate(${t * 4})`} />
    </svg>
  );
};

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = TEAL, size = 1 }) => (
  <svg width={140 * size} height={80 * size} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
);

const Box: React.FC<{ color: string; size?: number }> = ({ color, size = 90 }) => (
  <div style={{ width: size, height: size, borderRadius: 12, border: `3px solid ${color}`, background: `${color}33`, boxShadow: `0 0 18px ${color}88` }} />
);

const Tree: React.FC<{ h?: number; color?: string }> = ({ h = 200, color = GREEN }) => (
  <svg width={h * 0.7} height={h} viewBox="0 0 140 200" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <rect x={62} y={130} width={16} height={68} fill="#8a6a3f" />
    <path d="M70 10 L130 100 L95 100 L125 145 L15 145 L45 100 L10 100 Z" fill={`${color}55`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// ---------------------------------------------------------------- 1. the covered train
const TrainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cov = ramp(t, c("Every window is covered"), 1.6);
  return (
    <AbsoluteFill>
      <Rails y={600} o={ramp(t, c("Imagine a train gliding"), 0.6)} />
      <At x={960} y={470} s={pop(t, fps, c("Imagine a train gliding", 0.4))}><Train cover={cov} /></At>
      <At x={960} y={170} o={ramp(t, c("Imagine a train gliding"), 0.6)}><Glow color={CHALK} size={46} serif>perfectly smooth</Glow></At>
      <At x={960} y={760} o={ramp(t, c("moving at all"), 0.5)}><Glow color={AMBER} size={60} serif>moving?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the old picture
const PictureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const things = c("Independent things"), abs = c("absolute space and absolute time"), obs = c("Detached observers");
  const frame = ramp(t, c("hardly seemed like a picture"), 0.8);
  const cols = [ROSE, TEAL, AMBER, VIOLET, ICE];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("one picture of the world", 0.4), 0.5)}><Glow color={CHALK} size={46} serif>one picture of the world</Glow></At>
      <Svg style={{ opacity: ramp(t, abs, 0.8) }}>
        {Array.from({ length: 9 }).map((_, i) => <line key={`v${i}`} x1={420 + i * 110} y1={230} x2={420 + i * 110} y2={770} stroke={INDIGO} strokeWidth={2} opacity={0.5} />)}
        {Array.from({ length: 6 }).map((_, i) => <line key={`h${i}`} x1={420} y1={230 + i * 108} x2={1300} y2={230 + i * 108} stroke={INDIGO} strokeWidth={2} opacity={0.5} />)}
      </Svg>
      {cols.map((col, i) => (
        <At key={i} x={520 + i * 170} y={380 + (i % 2) * 220} s={pop(t, fps, things + i * 0.15)}><Box color={col} /></At>
      ))}
      <At x={860} y={800} o={ramp(t, abs + 0.4, 0.5)}><Glow color={INDIGO} size={30}>absolute space</Glow></At>
      <At x={1180} y={180} s={pop(t, fps, abs + 0.8)}><Clock size={110} /></At>
      <At x={1560} y={470} s={pop(t, fps, obs)}><Eye color={TEAL} size={1.2} /></At>
      <At x={1560} y={560} o={ramp(t, obs + 0.3, 0.5)}><Glow color={TEAL} size={30}>looking on from outside</Glow></At>
      <PictureFrame x={960} y={490} w={1500} h={640} o={frame} />
      <At x={960} y={815} o={frame}><Glow color={GOLD} size={34}>only a picture</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the middle way
const MiddleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ex = c("examined every claim");
  const items = [["self", ROSE], ["object", TEAL], ["cause", AMBER], ["space", ICE], ["time", VIOLET], ["consciousness", GREEN]] as const;
  const sa = c("Self, object, cause");
  const ess = c("an independent essence");
  const cond = c("arises through conditions");
  const out = ramp(t, cond - 0.2, 0.5);
  const u = ramp(t, ex, 3.2);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 80, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="the middle way" at={c("Nearly two thousand years ago") + 0.6} size={88} />
      </div>
      <At x={960} y={200} o={ramp(t, c("Nearly two thousand years ago"), 0.5)}><Glow color={DIM} size={30}>two thousand years ago</Glow></At>
      <At x={960} y={480} s={pop(t, fps, c("Nearly two thousand years ago") + 0.3)} o={1 - ramp(t, sa - 0.3, 0.5)}>
        <svg width={420} height={300} viewBox="0 0 420 300" style={{ filter: `drop-shadow(0 0 12px ${AMBER})` }}>
          <rect x={60} y={40} width={300} height={220} fill={`${AMBER}22`} stroke={AMBER} strokeWidth={4} />
          <rect x={30} y={25} width={40} height={250} rx={20} fill={`${AMBER}55`} stroke={AMBER} strokeWidth={4} />
          <rect x={350} y={25} width={40} height={250} rx={20} fill={`${AMBER}55`} stroke={AMBER} strokeWidth={4} />
          {Array.from({ length: 6 }).map((_, i) => <line key={i} x1={95} y1={80 + i * 30} x2={325 - (i % 3) * 30} y2={80 + i * 30} stroke={CHALK} strokeWidth={4} opacity={ramp(t, c("Nearly two thousand years ago") + 0.8 + i * 0.25, 0.4) * 0.7} />)}
        </svg>
      </At>
      <At x={960} y={690} o={ramp(t, c("Nearly two thousand years ago") + 1.2, 0.5) * (1 - ramp(t, sa - 0.3, 0.5))}><Glow color={AMBER} size={36}>Nāgārjuna</Glow></At>
      <At x={960} y={790} o={between(t, ex, sa - 0.3, 0.4)}><Chip color={ICE} size={34}>does anything exist by itself?</Chip></At>
      <AbsoluteFill style={{ opacity: 1 - out }}>
        {items.map(([w, col], i) => (
          <React.Fragment key={i}>
            <At x={440 + (i % 3) * 520} y={360 + Math.floor(i / 3) * 190} o={ramp(t, sa + i * 0.35, 0.4)}>
              <div style={{ position: "relative" }}><Chip color={col} size={40}>{w}</Chip><Strike at={ess + 0.2 + i * 0.12} /></div>
            </At>
          </React.Fragment>
        ))}
        <At x={440 + 1040 * u} y={460 + 120 * Math.sin(u * 9)} o={between(t, ex, ess + 1.0, 0.4)}>
          <svg width={130} height={130} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
            <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
            <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
          </svg>
        </At>
        <At x={960} y={760} o={ramp(t, ess + 0.4, 0.5)}><Glow color={WARM} size={40}>no independent essence found</Glow></At>
      </AbsoluteFill>
      <Scene from={cond - 0.1} to={1e9}>
        <At x={560} y={380} s={pop(t, fps, cond)}><Glow color={AMBER} size={44}>sun</Glow></At>
        <At x={960} y={330} s={pop(t, fps, cond + 0.2)}><Glow color={ICE} size={44}>rain</Glow></At>
        <At x={1360} y={380} s={pop(t, fps, cond + 0.4)}><Glow color={ROSE} size={44}>soil</Glow></At>
        <At x={960} y={600} s={pop(t, fps, cond + 0.9)}>
          <svg width={160} height={180} viewBox="0 0 160 180" style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }}>
            <path d="M80 170 L80 70" stroke={GREEN} strokeWidth={6} />
            <path d="M80 100 Q30 90 25 45 Q70 50 80 100 Z M80 80 Q130 70 135 25 Q90 30 80 80 Z" fill={`${GREEN}66`} stroke={GREEN} strokeWidth={4} />
          </svg>
        </At>
        <At x={960} y={770} o={ramp(t, cond + 1.0, 0.5)}><Glow color={GREEN} size={40}>arising through conditions</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. two paths that resonate
const Fork: React.FC<{ color: string; buzz: number }> = ({ color, buzz }) => {
  const { t } = useT();
  const d = Math.sin(t * 40) * 4 * buzz;
  return (
    <svg width={120} height={280} viewBox="0 0 120 280" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
      <path d={`M${30 - d} 10 L30 150 Q60 190 90 150 L${90 + d} 10`} fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" />
      <line x1={60} y1={175} x2={60} y2={275} stroke={color} strokeWidth={12} strokeLinecap="round" />
    </svg>
  );
};

const ResonateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gu = c("giving up the same picture");
  const res = c("The two resonate");
  const partB = c("The two resonate", 0.5);
  const xs = Array.from({ length: 40 }, (_, i) => 700 + i * 13);
  return (
    <AbsoluteFill>
      <Scene from={c("the last century and a half") - 0.3} to={partB}>
        <At x={960} y={130} o={ramp(t, c("the last century and a half"), 0.5)}><Glow color={CHALK} size={42} serif>the last century and a half</Glow></At>
        <PictureFrame x={960} y={450} w={640} h={380} o={1 - ramp(t, gu + 0.6, 1.2)} dashed={t > gu + 0.6} />
        {[ROSE, TEAL, AMBER].map((col, i) => (
          <At key={i} x={800 + i * 160} y={450 + 200 * ramp(t, gu + 0.4 + i * 0.1, 1.4)} o={1 - ramp(t, gu + 0.8, 1.2)}><Box color={col} size={80} /></At>
        ))}
        <At x={960} y={720} o={ramp(t, gu, 0.5)}><Glow color={AMBER} size={38}>science lets go of the old picture</Glow></At>
        <StruckChip x={960} y={810} at={c("has proven the Dharma", 0.6)} strikeAt={c("has proven the Dharma") + 0.6} color={DIM} size={30}>science proves the Dharma</StruckChip>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={620} y={430} s={pop(t, fps, res)}><Fork color={INDIGO} buzz={ramp(t, res + 0.3, 0.5)} /></At>
        <At x={1300} y={430} s={pop(t, fps, res + 0.2)}><Fork color={AMBER} buzz={ramp(t, res + 0.7, 0.8)} /></At>
        <At x={620} y={630} o={ramp(t, res, 0.5)}><Glow color={INDIGO} size={36}>the Dharma</Glow></At>
        <At x={1300} y={630} o={ramp(t, res + 0.2, 0.5)}><Glow color={AMBER} size={36}>science</Glow></At>
        <Svg style={{ opacity: ramp(t, res + 0.5, 0.6) }}>
          {[0, 1, 2].map((k) => (
            <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${360 + k * 50 + 18 * Math.sin(x / 30 - t * 5 + k)}`).join(" ")}
              fill="none" stroke={[INDIGO, GOLD, TEAL][k]} strokeWidth={3} opacity={0.75} />
          ))}
        </Svg>
        <div style={{ position: "absolute", top: 720, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="resonance, not proof" at={c("Neither proves the other")} size={70} />
        </div>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. space without a container
const SpaceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cont = c("an invisible container");
  const van = ramp(t, c("everything else vanished"), 1.2);
  const mach = c("Ernst Mach asked");
  const partB = c("no experiment reveals the motion", 0.4);
  const rel = c("relative to something else");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Take space first", 0.3), 0.5)}><Glow color={CHALK} size={46} serif>space</Glow></At>
      <Scene from={c("Take space first") - 0.3} to={partB}>
        <At x={700} y={460} s={pop(t, fps, cont)}>
          <div style={{ width: 520, height: 420, border: `4px solid ${INDIGO}`, borderRadius: 10, background: `${INDIGO}18`, boxShadow: `0 0 40px ${INDIGO}66, inset 0 0 40px ${INDIGO}44` }} />
        </At>
        <At x={700} y={710} o={ramp(t, cont + 0.3, 0.5)}><Glow color={INDIGO} size={32}>a container: Newton</Glow></At>
        {[ROSE, TEAL, AMBER, GREEN].map((col, i) => (
          <At key={i} x={560 + (i % 2) * 260} y={380 + Math.floor(i / 2) * 170} s={pop(t, fps, cont + 0.4 + i * 0.12)} o={1 - van}><Orb size={70} color={col} /></At>
        ))}
        <At x={700} y={460} o={ramp(t, c("everything else vanished") + 0.8, 0.5)}><Glow color={DIM} size={30}>still there?</Glow></At>
        <At x={1380} y={430} s={pop(t, fps, mach)}><Glow color={AMBER} size={170} serif>?</Glow></At>
        <At x={1380} y={620} o={ramp(t, mach + 0.3, 0.5)}><Glow color={AMBER} size={34}>how could it be observed?</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={960} y={330} s={pop(t, fps, partB + 0.3)}><Train cover={1} w={560} /></At>
        <At x={960} y={490} o={ramp(t, partB + 0.6, 0.5) * (1 - ramp(t, rel, 0.4))}><Glow color={WARM} size={36}>no test inside can tell</Glow></At>
        <At x={620} y={620} s={pop(t, fps, rel)}><Orb size={90} color={ROSE} /></At>
        <At x={1300} y={620} s={pop(t, fps, rel + 0.2)}><Orb size={90} color={TEAL} /></At>
        <Flow x1={690} y1={620} x2={1230} y2={620} color={AMBER} p={ramp(t, rel + 0.4, 0.7)} />
        <At x={960} y={760} o={ramp(t, rel + 0.6, 0.5)}><Glow color={AMBER} size={40}>motion relative to something else</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. no cosmic clock
const LightningScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bolts = c("Two lightning bolts");
  const side = c("beside the track"), pas = c("To a passenger");
  const flashL = Math.max(between(t, bolts + 0.3, bolts + 1.2, 0.2), between(t, side + 0.3, side + 1.4, 0.2), between(t, pas + 0.4, pas + 1.4, 0.2));
  const flashR = Math.max(between(t, bolts + 0.3, bolts + 1.2, 0.2), between(t, side + 0.3, side + 1.4, 0.2), between(t, pas + 1.3, pas + 2.3, 0.2));
  const clock = c("no single cosmic clock");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Einstein went further", 0.3), 0.5)}><Glow color={CHALK} size={46} serif>Einstein: when is now?</Glow></At>
      <Rails y={560} o={ramp(t, c("Einstein went further"), 0.5)} speed={500} />
      <At x={960} y={450} s={pop(t, fps, c("Einstein went further") + 0.3)}><Train w={760} /></At>
      <At x={560} y={250} ><Bolt flash={flashL} /></At>
      <At x={1360} y={250}><Bolt flash={flashR} /></At>
      <At x={960} y={720} s={pop(t, fps, side)}><Person color={TEAL} size={0.8} /></At>
      <At x={760} y={800} o={ramp(t, side + 0.5, 0.4)}><Glow color={TEAL} size={30}>beside the track: together</Glow></At>
      <At x={1200} y={420} o={ramp(t, pas, 0.4)}><Person color={ROSE} size={0.55} /></At>
      <At x={1380} y={800} o={ramp(t, pas + 0.6, 0.4)}><Glow color={ROSE} size={30}>passenger: one comes first</Glow></At>
      <At x={1640} y={640} o={ramp(t, c("Neither is mistaken"), 0.4)}><Chip color={GREEN} size={30}>neither mistaken</Chip></At>
      <At x={290} y={660} s={pop(t, fps, clock)}><Clock size={150} /></At>
      <XMark x={290} y={660} r={70} at={clock + 0.6} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. spacetime is not a stage
const SpacetimeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("an empty stage");
  const curve = ramp(t, c("matter tells spacetime"), 1.6);
  const move = c("tells matter how to move");
  const cx = 960, cy = 470;
  const depth = (x: number, z: number) => -curve * 170 * Math.exp(-((x - cx) ** 2 + ((z - cy) * 2.2) ** 2) / 70000);
  const lines: string[] = [];
  for (let k = 0; k < 9; k++) {
    const z = 330 + k * 35;
    lines.push(Array.from({ length: 41 }, (_, i) => { const x = 460 + i * 25; return `${i ? "L" : "M"}${x} ${z - depth(x, z)}`; }).join(" "));
  }
  for (let k = 0; k < 21; k++) {
    const x = 460 + k * 50;
    lines.push(Array.from({ length: 21 }, (_, i) => { const z = 330 + i * 14; return `${i ? "L" : "M"}${x} ${z - depth(x, z)}`; }).join(" "));
  }
  const a = (t - move) * 1.6;
  const orbit = ramp(t, move, 0.5);
  return (
    <AbsoluteFill>
      <Scene from={st - 0.3} to={c("matter tells spacetime", 0.6)}>
        <At x={960} y={460} s={pop(t, fps, st)}>
          <div style={{ position: "relative" }}>
            <svg width={700} height={360} viewBox="0 0 700 360" style={{ filter: `drop-shadow(0 0 12px ${AMBER})` }}>
              <path d="M40 300 L660 300 L600 220 L100 220 Z" fill={`${AMBER}33`} stroke={AMBER} strokeWidth={4} />
              <path d="M40 30 Q120 120 60 220 M660 30 Q580 120 640 220" fill="none" stroke={ROSE} strokeWidth={6} />
              <line x1={20} y1={30} x2={680} y2={30} stroke={ROSE} strokeWidth={8} />
            </svg>
          </div>
        </At>
        <At x={960} y={720} o={ramp(t, st + 0.3, 0.4)}><Glow color={AMBER} size={40}>an empty stage?</Glow></At>
        <XMark x={960} y={460} r={130} at={st + 1.0} />
      </Scene>
      <Scene from={c("matter tells spacetime", 0.5)} to={1e9}>
        <Svg>
          {lines.map((d, i) => <path key={i} d={d} fill="none" stroke={INDIGO} strokeWidth={2} opacity={0.7} />)}
        </Svg>
        <At x={cx} y={cy + 170 * curve - 55} s={pop(t, fps, c("matter tells spacetime"))}><Orb size={120} color={AMBER} /></At>
        <At x={cx + 330 * Math.cos(a)} y={cy + 20 + 90 * Math.sin(a)} o={orbit}><Orb size={44} color={TEAL} /></At>
        <At x={960} y={130} o={ramp(t, c("matter tells spacetime"), 0.5)}><Glow color={AMBER} size={38}>matter tells spacetime how to curve</Glow></At>
        <At x={960} y={200} o={ramp(t, move, 0.5)}><Glow color={TEAL} size={38}>spacetime tells matter how to move</Glow></At>
        <At x={960} y={800} o={ramp(t, c("Neither stands on its own"), 0.5)}><Chip color={GOLD} size={34}>neither stands on its own</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. properties without intrinsic nature
const QuantumScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fix = c("fixed properties at all");
  const wave = c("as a wave"), part = c("as a particle");
  const rov = c("Carlo Rovelli goes further", 0.4);
  const inter = c("only in an interaction");
  const xs = Array.from({ length: 50 }, (_, i) => 260 + i * 10);
  const meet = ramp(t, inter, 1.0);
  return (
    <AbsoluteFill>
      <Scene from={fix - 0.3} to={rov}>
        <At x={960} y={120} o={ramp(t, fix, 0.5)}><Glow color={CHALK} size={44} serif>fixed properties?</Glow></At>
        <Svg style={{ opacity: ramp(t, wave, 0.5) }}>
          <path d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${450 + 70 * Math.sin(x / 40 - t * 4)}`).join(" ")} fill="none" stroke={TEAL} strokeWidth={6}
            style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }} />
        </Svg>
        <At x={510} y={620} o={ramp(t, wave, 0.4)}><Glow color={TEAL} size={40}>a wave</Glow></At>
        {Array.from({ length: 12 }).map((_, i) => (
          <At key={i} x={1250 + rand(i) * 420} y={330 + rand(i + 5) * 240} s={pop(t, fps, part + i * 0.06)}><Orb size={30} color={ROSE} /></At>
        ))}
        <At x={1450} y={620} o={ramp(t, part, 0.4)}><Glow color={ROSE} size={40}>a particle</Glow></At>
        <At x={960} y={780} o={ramp(t, part + 0.6, 0.5)}><Chip color={AMBER} size={32}>depends on the experiment that asks</Chip></At>
      </Scene>
      <Scene from={rov + 0.1} to={c("The web of relations", 0.4)}>
        <At x={960} y={120} o={ramp(t, rov + 0.2, 0.5)}><Glow color={CHALK} size={44} serif>Carlo Rovelli</Glow></At>
        <At x={560 + 300 * meet} y={430} s={pop(t, fps, rov + 0.5)}><Orb size={110} color={ICE} /></At>
        <At x={560 + 300 * meet} y={560} o={ramp(t, c("no position of its own"), 0.4) * (1 - meet)}><Glow color={DIM} size={34}>position: none of its own</Glow></At>
        <At x={1380 - 300 * meet} y={430} s={pop(t, fps, inter)}><Orb size={110} color={AMBER} /></At>
        <Ring x={960} y={430} p={ramp(t, inter + 0.9, 1.0)} r0={60} r1={300} color={GOLD} />
        <At x={960} y={590} o={ramp(t, inter + 1.0, 0.4)}><Chip color={GOLD} size={36}>a value, relative to what it meets</Chip></At>
        <At x={960} y={760} o={ramp(t, c("found this way of thinking"), 0.5)}><Glow color={INDIGO} size={36}>a thread back to the Middle Way</Glow></At>
      </Scene>
      <Scene from={c("The web of relations", 0.3)} to={1e9}>
        <At x={960} y={120} o={ramp(t, c("adds one step"), 0.4)}><Glow color={AMBER} size={42} serif>one step more</Glow></At>
        <WebDissolve at={c("The web of relations")} gone={c("no more found")} />
        <At x={960} y={780} o={ramp(t, c("no more found"), 0.5)}><Glow color={ICE} size={40}>the web too is designated, not found</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

/** A web of relations that draws itself, then thins away: shown only to be seen through. */
const WebDissolve: React.FC<{ at: number; gone: number }> = ({ at, gone }) => {
  const { t, fps } = useT();
  const nodes = Array.from({ length: 9 }, (_, i) => [600 + rand(i * 3) * 720, 260 + rand(i * 3 + 1) * 420] as const);
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [0, 4], [1, 6], [2, 7], [3, 8], [0, 8]];
  const fade = ramp(t, gone + 0.3, 1.6);
  return (
    <>
      <Svg style={{ opacity: 1 - fade * 0.85 }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={INDIGO} strokeWidth={3}
            strokeDasharray={fade > 0.05 ? "10 12" : undefined} opacity={ramp(t, at + i * 0.06, 0.4)} style={{ filter: `drop-shadow(0 0 6px ${INDIGO})` }} />
        ))}
      </Svg>
      {nodes.map(([x, y], i) => (
        <At key={i} x={x} y={y} s={pop(t, fps, at + i * 0.05)} o={1 - fade * 0.85}><Orb size={34} color={[AMBER, TEAL, ROSE][i % 3]} /></At>
      ))}
    </>
  );
};

// ---------------------------------------------------------------- 9. Bell: connection without a carrier
const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b0 = c("John Bell turned", 0.4);
  const num = c("a measurable number");
  const cor = c("distant particles stay correlated");
  const sig = c("no local signal"), prop = c("no hidden local property");
  const real = c("The connection is real");
  const carr = c("What is missing is a carrier");
  const phase = Math.floor((t - cor) * 1.5);
  const colA = t < cor ? DIM : (rand(phase + 7) > 0.5 ? AMBER : TEAL);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, b0, 0.5)}><Glow color={CHALK} size={46} serif>John Bell</Glow></At>
      <At x={960} y={260} o={between(t, b0 + 0.3, cor, 0.4)}><Chip color={DIM} size={32}>an old dispute</Chip></At>
      <At x={960} y={400} s={pop(t, fps, num)} o={1 - ramp(t, cor - 0.2, 0.4)}>
        <svg width={360} height={200} viewBox="-180 -160 360 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${AMBER})` }}>
          <path d="M-150 0 A150 150 0 0 1 150 0" fill="none" stroke={AMBER} strokeWidth={8} />
          <line x1={0} y1={0} x2={0} y2={-130} stroke={CHALK} strokeWidth={6} strokeLinecap="round" transform={`rotate(${-70 + 120 * ramp(t, num + 0.3, 1.2)})`} />
          <circle r={12} fill={CHALK} />
        </svg>
      </At>
      <At x={960} y={540} o={ramp(t, num + 0.4, 0.4) * (1 - ramp(t, cor - 0.2, 0.4))}><Glow color={AMBER} size={36}>measured in a laboratory</Glow></At>
      <Scene from={cor - 0.2} to={1e9}>
        <At x={400} y={420} s={pop(t, fps, cor)}><Orb size={130} color={colA} /></At>
        <At x={1520} y={420} s={pop(t, fps, cor + 0.1)}><Orb size={130} color={colA} /></At>
        <At x={400} y={570} o={ramp(t, cor + 0.4, 0.4)}><Glow color={CHALK} size={30}>here</Glow></At>
        <At x={1520} y={570} o={ramp(t, cor + 0.4, 0.4)}><Glow color={CHALK} size={30}>far away</Glow></At>
        <At x={960} y={250} o={ramp(t, cor + 0.6, 0.4)}><Glow color={GOLD} size={36}>always in step</Glow></At>
        <Flow x1={500} y1={420} x2={1420} y2={420} color={DIM} p={ramp(t, sig, 0.6)} dash pulses={false} />
        <At x={960} y={380} o={ramp(t, sig, 0.4)}><Glow color={DIM} size={28}>signal?</Glow></At>
        <XMark x={960} y={420} r={40} at={sig + 0.7} />
        <At x={400} y={700} o={ramp(t, prop, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={28}>hidden property</Chip><Strike at={prop + 0.8} /></div></At>
        <At x={1520} y={700} o={ramp(t, prop + 0.2, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={28}>hidden property</Chip><Strike at={prop + 1.0} /></div></At>
        <Check x={940} y={600} at={real + 0.2} />
        <At x={960} y={690} o={ramp(t, real, 0.4)}><Glow color={GREEN} size={38}>connection: real</Glow></At>
        <At x={960} y={790} o={ramp(t, carr, 0.4)}><Glow color={WARM} size={40} serif>carrier: none found</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. knower and known
const ObserverScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const o0 = c("The observer changed", 0.4);
  const pu = c("a participatory universe");
  const mind = c("Not a mind creating");
  const part = c("measurement as participation");
  const kk = c("Knower and known");
  const close = ramp(t, kk, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, o0, 0.5)}><Glow color={CHALK} size={46} serif>the observer</Glow></At>
      <At x={960} y={200} o={ramp(t, pu, 0.5)}><Glow color={AMBER} size={40}>a participatory universe</Glow></At>
      <At x={560} y={470} s={pop(t, fps, o0 + 0.3)} o={1 - ramp(t, kk, 0.6) * 0.3}>
        <svg width={260} height={220} viewBox="0 0 260 220" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
          <rect x={20} y={40} width={150} height={140} rx={14} fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} />
          <circle cx={95} cy={110} r={34} fill="none" stroke={TEAL} strokeWidth={4} />
          <path d="M170 90 L240 70 L240 150 L170 130 Z" fill={`${TEAL}55`} stroke={TEAL} strokeWidth={4} />
        </svg>
      </At>
      <At x={560} y={620} o={ramp(t, o0 + 0.5, 0.4)}><Glow color={TEAL} size={30}>detector</Glow></At>
      <At x={1360} y={470} s={pop(t, fps, o0 + 0.6)}><Orb size={130} color={ROSE} /></At>
      <At x={1360} y={620} o={ramp(t, o0 + 0.7, 0.4)}><Glow color={ROSE} size={30}>what is measured</Glow></At>
      <At x={960} y={360} o={between(t, mind, part, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={32}>a mind creating the world</Chip><Strike at={mind + 0.7} /></div></At>
      <Flow x1={720} y1={470} x2={1260} y2={470} color={AMBER} p={ramp(t, part, 0.6)} />
      <Flow x1={1260} y1={500} x2={720} y2={500} color={AMBER} p={ramp(t, part + 0.2, 0.6)} />
      <At x={960} y={560} o={ramp(t, part + 0.3, 0.4)}><Glow color={AMBER} size={34}>participation</Glow></At>
      <div style={{ position: "absolute", top: 700, width: "100%", display: "flex", justifyContent: "center", opacity: ramp(t, kk, 0.3) }}>
        <Reveal text="knower and known arise together" at={kk} size={66} />
      </div>
      <Ring x={960} y={480} p={close} r0={80} r1={480} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. one forest, many worlds
const Bird: React.FC = () => (
  <svg width={110} height={60} viewBox="0 0 110 60" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
    <path d="M5 30 Q30 5 55 30 Q80 5 105 30" fill="none" stroke={ICE} strokeWidth={6} strokeLinecap="round" />
  </svg>
);
const Deer: React.FC = () => (
  <svg width={130} height={130} viewBox="0 0 130 130" style={{ filter: `drop-shadow(0 0 8px ${AMBER})` }}>
    <g fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 50 L35 20 M35 20 L22 10 M35 20 L40 5 M80 50 L95 20 M95 20 L108 10 M95 20 L90 5" />
      <path d="M45 55 Q65 40 85 55 L78 95 Q65 112 52 95 Z" fill={`${AMBER}33`} />
      <circle cx={57} cy={68} r={4} fill={AMBER} /><circle cx={73} cy={68} r={4} fill={AMBER} />
    </g>
  </svg>
);
const Leaf: React.FC = () => (
  <svg width={110} height={110} viewBox="0 0 110 110" style={{ filter: `drop-shadow(0 0 8px ${GREEN})` }}>
    <path d="M15 95 Q10 20 95 15 Q95 95 15 95 Z" fill={`${GREEN}44`} stroke={GREEN} strokeWidth={4} />
    <path d="M15 95 L80 30" stroke={GREEN} strokeWidth={3} />
  </svg>
);
const Gear: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={110} height={110} viewBox="-55 -55 110 110" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
      <g transform={`rotate(${t * 30})`} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4}>
        {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={-8} y={-50} width={16} height={18} transform={`rotate(${i * 45})`} />)}
        <circle r={34} /><circle r={12} fill="none" />
      </g>
    </svg>
  );
};

const ForestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const f0 = c("the mind lost its container", 0.4);
  const forest = c("A single forest");
  const views = [
    { at: c("to a botanist"), x: 330, y: 300, icon: <Leaf />, label: "an ecosystem", col: GREEN },
    { at: c("to a bird"), x: 1590, y: 300, icon: <Bird />, label: "a nesting place", col: ICE },
    { at: c("shelter to a deer"), x: 330, y: 640, icon: <Deer />, label: "shelter", col: AMBER },
    { at: c("timber to an engineer"), x: 1590, y: 640, icon: <Gear />, label: "timber", col: ROSE },
  ];
  const forth = c("bring each other forth");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, f0, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={44} serif>the mind as a container</Glow><Strike at={f0 + 1.0} /></div>
      </At>
      {Array.from({ length: 7 }).map((_, i) => (
        <At key={i} x={720 + i * 80} y={470 - (i % 2) * 40} s={pop(t, fps, forest + i * 0.08)}><Tree h={170 + (i % 3) * 30} /></At>
      ))}
      {views.map((v, i) => (
        <React.Fragment key={i}>
          <Flow x1={v.x + (v.x < 960 ? 110 : -110)} y1={v.y} x2={v.x < 960 ? 700 : 1220} y2={470} color={v.col} p={ramp(t, v.at + 0.2, 0.6)} />
          <At x={v.x} y={v.y - 30} s={pop(t, fps, v.at)}>{v.icon}</At>
          <At x={v.x} y={v.y + 70} o={ramp(t, v.at + 0.3, 0.4)}><Glow color={v.col} size={32}>{v.label}</Glow></At>
        </React.Fragment>
      ))}
      <At x={960} y={790} o={ramp(t, forth, 0.5)}><Glow color={GOLD} size={42} serif>organism and world bring each other forth</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. resonance, and one step more
const ConclusionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n0 = c("None of this establishes emptiness", 0.4);
  const away = c("away from fixed foundations");
  const crumble = ramp(t, away + 0.4, 1.4);
  const toward = c("toward relation");
  const more = c("takes one step more");
  const nomore = c("no more a foundation");
  const thin = ramp(t, nomore + 0.2, 1.6);
  const nodes = [[1180, 340], [1440, 300], [1600, 460], [1420, 600], [1200, 560]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={between(t, n0, more, 0.5)}><Chip color={WARM} size={34}>this does not establish emptiness</Chip></At>
      <At x={960} y={200} o={between(t, c("Relativity is not Buddhist"), more, 0.5)}><Glow color={DIM} size={32}>relativity is not Buddhist philosophy</Glow></At>
      {/* a foundation, shown only to crumble */}
      {Array.from({ length: 10 }).map((_, i) => {
        const fall = crumble * (120 + rand(i) * 260);
        return (
          <At key={i} x={420 + (i % 5) * 110} y={520 + Math.floor(i / 5) * 70 + fall} r={crumble * (rand(i + 2) - 0.5) * 80}
            s={pop(t, fps, away - 0.2 + i * 0.04)} o={1 - crumble}>
            <div style={{ width: 100, height: 60, borderRadius: 4, border: `3px solid ${AMBER}`, background: `${AMBER}44` }} />
          </At>
        );
      })}
      <At x={640} y={420} o={ramp(t, away, 0.4) * (1 - crumble)}><Glow color={AMBER} size={34}>fixed foundations</Glow></At>
      <At x={640} y={700} o={ramp(t, away + 1.2, 0.5)}><Glow color={DIM} size={34}>away from foundations</Glow></At>
      <Svg style={{ opacity: ramp(t, toward, 0.6) * (1 - thin * 0.85) }}>
        {nodes.map(([x, y], i) => {
          const [x2, y2] = nodes[(i + 1) % nodes.length];
          return <line key={i} x1={x} y1={y} x2={x2} y2={y2} stroke={INDIGO} strokeWidth={3} strokeDasharray={thin > 0.05 ? "10 12" : undefined}
            style={{ filter: `drop-shadow(0 0 6px ${INDIGO})` }} />;
        })}
      </Svg>
      {nodes.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, toward + i * 0.08)} o={1 - thin * 0.6}><Orb size={40} color={[TEAL, ROSE, GOLD, VIOLET, ICE][i]} /></At>)}
      <At x={1400} y={700} o={ramp(t, toward, 0.5) * (1 - ramp(t, more, 0.4))}><Glow color={INDIGO} size={34}>toward relation</Glow></At>
      <At x={1400} y={700} o={ramp(t, more + 0.2, 0.5)}><Glow color={AMBER} size={34}>one step more</Glow></At>
      <At x={960} y={180} o={ramp(t, nomore, 0.5)}><Glow color={ICE} size={42} serif>relations too: no foundation</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 13. two paths
const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const p0 = c("Two very different paths", 0.4);
  const draw = ramp(t, p0, 2.4);
  const sup = c("the same support");
  const gone = ramp(t, sup + 0.4, 1.4);
  return (
    <AbsoluteFill>
      <Svg>
        <DrawPath d="M260 780 C420 620 560 520 860 470" p={draw} color={INDIGO} width={10} len={800} />
        <DrawPath d="M1660 780 C1500 620 1360 520 1060 470" p={draw} color={AMBER} width={10} len={800} />
      </Svg>
      <At x={330} y={680} o={ramp(t, p0 + 0.4, 0.5)}><Glow color={INDIGO} size={34}>analysis</Glow></At>
      <At x={1590} y={680} o={ramp(t, p0 + 0.6, 0.5)}><Glow color={AMBER} size={34}>measurement</Glow></At>
      <At x={960} y={360} o={ramp(t, p0 + 0.8, 0.5) * (1 - gone)}>
        <div style={{ width: 70, height: 230, borderRadius: 8, border: `3px solid ${AMBER}`, background: `${AMBER}33`, boxShadow: `0 0 26px ${AMBER}`,
          transform: `translateY(${gone * 60}px)` }} />
      </At>
      <At x={960} y={560} o={ramp(t, sup + 0.4, 0.6)}><Glow color={GOLD} size={44} serif>the same support, let go</Glow></At>
      <Ring x={960} y={470} p={ramp(t, sup + 1.0, 2.0)} r0={60} r1={420} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["train", 0], ["picture", c("one picture of the world", 0.6)], ["middle", c("Nearly two thousand years ago", 0.6)],
    ["picture", c("the last century and a half", 0.6)], ["space", c("Take space first", 0.6)], ["space", c("an empty stage", 0.6)],
    ["quantum", c("fixed properties at all", 0.6)], ["bell", c("John Bell turned", 0.6)], ["middle", c("The observer changed", 0.6)],
    ["forest", c("the mind lost its container", 0.6)], ["close", c("None of this establishes emptiness", 0.6)], ["close", c("Two very different paths", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("one picture of the world", 0.9)], <TrainScene />],
    [S("one picture of the world", "Nearly two thousand years ago"), <PictureScene />],
    [S("Nearly two thousand years ago", "the last century and a half"), <MiddleScene />],
    [S("the last century and a half", "Take space first"), <ResonateScene />],
    [S("Take space first", "Einstein went further"), <SpaceScene />],
    [S("Einstein went further", "an empty stage"), <LightningScene />],
    [S("an empty stage", "fixed properties at all"), <SpacetimeScene />],
    [S("fixed properties at all", "John Bell turned"), <QuantumScene />],
    [S("John Bell turned", "The observer changed"), <BellScene />],
    [S("The observer changed", "the mind lost its container"), <ObserverScene />],
    [S("the mind lost its container", "None of this establishes emptiness"), <ForestScene />],
    [S("None of this establishes emptiness", "Two very different paths"), <ConclusionScene />],
    [S("Two very different paths", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
