// Chapter 4: Mutual Dependency and the Non-Hierarchy of Relation. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, SERIF, Snowflake, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "When people first see", "a new picture tempts them", "perhaps relations are", "a vast web", "only knots in it",
  "repeats the old mistake", "A web beneath the things", "working backstage", "The two-level picture",
  "how ordinary distinctions work", "A pencil is long", "short beside a broom", "no length of its own", "do not exist first", "the partner of the other",
  "Roles work the same way", "No one is a parent", "named at once", "Buyer and seller", "host and guest",
  "no third thing", "like glue", "Parenthood is named", "defined together", "Neither is the ground",
  "Someone may object", "this is circular", "something must come first", "fire and fuel", "which is established first", "And that is the point",
  "pass existence up", "how things are picked out", "fires are lit", "No one waits",
  "relation is primary", "as a correction", "loosens the habit", "done its work", "a deeper layer",
  "The same care applies to boundaries", "No edge is found", "the edge of the ice", "the skin of the hand", "Two wrong conclusions",
  "no boundaries at all", "only haze", "keeps the body warm", "keeps out the rain", "everything is one", "one great whole",
  "a single huge substance", "The whole is no more found",
  "Clap your hands", "Where is the sound", "Not in the left hand", "Not in the right", "some third thing", "the clap is sharp",
  "the hands remain two", "One can sting",
  "Nothing crossed a gap", "no gap was found", "Nothing fused", "no single substance",
  "the ordinary world", "A friend's hand", "A voice across the room", "The cold in the palm", "Intimate without merging", "Distinct without walls",
];

const M = {
  web: { a: "rgba(60,50,140,0.5)", b: "rgba(30,110,130,0.45)", c: "rgba(150,110,50,0.3)" },
  long: { a: "rgba(150,110,50,0.45)", b: "rgba(40,100,140,0.42)", c: "rgba(90,60,160,0.3)" },
  roles: { a: "rgba(150,70,100,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(40,90,120,0.3)" },
  circle: { a: "rgba(170,90,40,0.5)", b: "rgba(90,50,140,0.42)", c: "rgba(150,110,50,0.35)" },
  correct: { a: "rgba(30,120,140,0.5)", b: "rgba(90,60,160,0.42)", c: "rgba(150,110,50,0.3)" },
  bound: { a: "rgba(30,150,190,0.5)", b: "rgba(60,80,160,0.38)", c: "rgba(140,70,90,0.25)" },
  clap: { a: "rgba(140,60,100,0.45)", b: "rgba(150,110,50,0.42)", c: "rgba(40,90,140,0.3)" },
  close: { a: "rgba(30,110,130,0.5)", b: "rgba(110,60,170,0.45)", c: "rgba(170,130,60,0.4)" },
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
const Figure: React.FC<{ color: string; size?: number }> = ({ color, size = 120 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 100 120" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={50} cy={28} r={20} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <path d="M14 115 C 16 70, 84 70, 86 115 Z" fill={`${color}22`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);
const Flame: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (5 + k) + k * 1.7) * 9;
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  const inner = `M0 ${-60 - n(2) * 0.6} C 25 -20, 38 20, 30 55 C 22 85, -22 85, -30 55 C -38 20, -25 -20, 0 ${-60 - n(2) * 0.6} Z`;
  return (
    <svg width={260 * size} height={340 * size} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl4" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl4)" opacity={0.95} />
      <path d={inner} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};
const Logs: React.FC = () => (
  <svg width={300} height={90} viewBox="0 0 300 90" style={{ filter: `drop-shadow(0 0 8px ${GOLD}88)` }}>
    <rect x={20} y={30} width={260} height={30} rx={15} fill="#7a5a35" stroke={GOLD} strokeWidth={3} transform="rotate(12 150 45)" />
    <rect x={20} y={30} width={260} height={30} rx={15} fill="#6b4c2c" stroke={GOLD} strokeWidth={3} transform="rotate(-12 150 45)" />
  </svg>
);

// ---------------------------------------------------------------- 1. the web temptation
const WebScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("When people first see");
  const web = ramp(t, c("a vast web"), 1.2), knots = ramp(t, c("only knots in it"), 0.8);
  const sink = ramp(t, c("A web beneath the things"), 1.2);
  const back = ramp(t, c("working backstage"), 0.6);
  const two = c("The two-level picture");
  const N = 7, cols = [TEAL, GOLD, ROSE, VIOLET, ICE, GREEN, GOLD];
  const pts = Array.from({ length: N }, (_, i) => [360 + i * 200 + (rand(i) - 0.5) * 60, 330 + (rand(i + 9) - 0.5) * 160]);
  const grid: [number, number][] = [];
  for (let i = 0; i < 9; i++) for (let j = 0; j < 4; j++) grid.push([300 + i * 165, 600 + j * 55]);
  return (
    <AbsoluteFill>
      {pts.map(([x, y], i) => (
        <At key={i} x={x} y={lerp(y, 330, sink)} s={pop(t, fps, t0 + i * 0.1)} o={1 - 0.4 * web * (1 - sink)}>
          <Orb size={70} color={cols[i]} />
        </At>
      ))}
      <At x={960} y={170} o={between(t, t0 + 0.4, c("perhaps relations are") - 0.1, 0.4)}><Glow color={CHALK} size={42}>nothing stands alone</Glow></At>
      <At x={960} y={170} o={between(t, c("perhaps relations are"), c("A web beneath the things"), 0.4)}><Glow color={TEAL} size={46} serif>relations as the foundation?</Glow></At>
      {/* the web: first among the things, then sinking beneath them as a layer */}
      <Svg style={{ opacity: web * (1 - sink) }}>
        {pts.map(([x, y], i) => pts.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={TEAL} strokeOpacity={0.5} strokeWidth={2}
            strokeDasharray="2000" strokeDashoffset={2000 * (1 - web)} />
        )))}
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={50} fill="none" stroke={GOLD} strokeWidth={4} opacity={knots} />)}
      </Svg>
      <Svg style={{ opacity: sink }}>
        {grid.map(([x, y], i) => i % 4 < 3 ? <line key={`v${i}`} x1={x} y1={y} x2={x} y2={y + 55} stroke={TEAL} strokeWidth={2} opacity={0.6} /> : null)}
        {grid.map(([x, y], i) => i < grid.length - 4 ? <line key={`h${i}`} x1={x} y1={y} x2={x + 165} y2={y} stroke={TEAL} strokeWidth={2} opacity={0.6} /> : null)}
        {grid.map(([x, y], i) => <circle key={`n${i}`} cx={x} cy={y} r={5} fill={TEAL} />)}
        {pts.map(([x], i) => <line key={`u${i}`} x1={x} y1={600} x2={x} y2={375} stroke={TEAL} strokeWidth={3} strokeDasharray="8 8" opacity={back} />)}
      </Svg>
      <At x={1700} y={330} o={sink}><Chip color={GOLD} size={30}>things</Chip></At>
      <At x={1700} y={680} o={sink}><Chip color={TEAL} size={30}>relation, backstage</Chip></At>
      <At x={960} y={810} o={ramp(t, c("A web beneath the things") + 0.6, 0.5)}><Glow color={WARM} size={36}>a new substance underneath</Glow></At>
      <Cross x={960} y={500} size={520} at={two + 0.6} />
      <At x={960} y={170} o={ramp(t, two, 0.5)}><Glow color={WARM} size={46} serif>the two-level picture, again</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. long and short
const Pencil: React.FC<{ w: number }> = ({ w }) => (
  <svg width={w + 40} height={50} viewBox={`0 0 ${w + 40} 50`} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <rect x={20} y={10} width={w - 40} height={30} fill="#E4C27A" stroke={GOLD} strokeWidth={2} />
    <rect x={0} y={10} width={24} height={30} rx={4} fill={ROSE} />
    <path d={`M${w - 20} 10 L${w + 30} 25 L${w - 20} 40 Z`} fill="#f3d9b1" stroke={GOLD} strokeWidth={2} />
    <path d={`M${w + 14} 20 L${w + 30} 25 L${w + 14} 30 Z`} fill="#333" />
  </svg>
);
const LongScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A pencil is long"), broom = c("short beside a broom"), own = c("no length of its own"), pair = c("do not exist first");
  const match = between(t, t0, own, 0.5), br = between(t, broom, own, 0.5);
  const alone = between(t, own, pair, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={between(t, c("how ordinary distinctions work"), t0, 0.4)}><Glow color={CHALK} size={44} serif>ordinary distinctions</Glow></At>
      <At x={960} y={330} s={pop(t, fps, t0 - 0.2)} o={1 - ramp(t, pair, 0.5)}><Pencil w={340} /></At>
      <At x={790} y={450} o={match}>
        <svg width={120} height={30} viewBox="0 0 120 30"><rect x={10} y={10} width={100} height={10} rx={5} fill="#d8b47a" /><ellipse cx={10} cy={15} rx={9} ry={11} fill="#c0392b" /></svg>
      </At>
      <At x={790} y={500} o={match}><Glow color={DIM} size={28}>matchstick</Glow></At>
      <At x={960} y={240} o={between(t, t0 + 0.6, broom, 0.4)}><Chip color={GOLD} size={40}>long</Chip></At>
      <At x={960} y={590} o={br}>
        <svg width={760} height={90} viewBox="0 0 760 90" style={{ filter: `drop-shadow(0 0 8px ${GREEN})` }}>
          <rect x={0} y={38} width={600} height={14} rx={7} fill="#a97c50" />
          <path d="M600 30 L740 5 L760 45 L740 85 L600 60 Z" fill={`${GREEN}66`} stroke={GREEN} strokeWidth={3} />
        </svg>
      </At>
      <At x={960} y={660} o={br}><Glow color={DIM} size={28}>broom</Glow></At>
      <At x={960} y={240} o={between(t, broom + 0.6, own, 0.4)}><Chip color={TEAL} size={40}>short</Chip></At>
      <At x={960} y={240} o={alone}><Glow color={CHALK} size={70} serif>?</Glow></At>
      <At x={960} y={460} o={alone}><Glow color={DIM} size={36}>no length of its own</Glow></At>
      <At x={700} y={430} s={pop(t, fps, pair)} o={ramp(t, pair, 0.4)}><Chip color={GOLD} size={50}>long</Chip></At>
      <At x={1220} y={430} s={pop(t, fps, pair + 0.15)} o={ramp(t, pair, 0.4)}><Chip color={TEAL} size={50}>short</Chip></At>
      <Svg style={{ opacity: ramp(t, c("the partner of the other"), 0.6) }}>
        <DrawPath d="M800 390 Q 960 290 1120 390" p={ramp(t, c("the partner of the other"), 0.8)} color={GOLD} width={4} len={400} />
        <DrawPath d="M1120 470 Q 960 570 800 470" p={ramp(t, c("the partner of the other") + 0.3, 0.8)} color={TEAL} width={4} len={400} />
      </Svg>
      <At x={960} y={700} o={ramp(t, c("the partner of the other"), 0.6)}><Glow color={CHALK} size={38}>each picked out as the partner of the other</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3-4. roles, and no glue
const RolesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const parent = c("No one is a parent"), once = c("named at once");
  const pairsOn = ramp(t, c("Buyer and seller"), 0.5);
  const third = c("no third thing"), glue = c("like glue"), together = c("defined together"), ground = c("Neither is the ground");
  const flash = between(t, once, once + 0.6, 0.2);
  const shiftUp = ramp(t, third - 0.3, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Roles work the same way"), 0.5) * (1 - shiftUp)}><Glow color={CHALK} size={44} serif>roles</Glow></At>
      <At x={760} y={420} s={pop(t, fps, once, 10)} o={ramp(t, parent, 0.4)}><Figure color={ROSE} size={170} /></At>
      <At x={1160} y={460} s={pop(t, fps, once, 10) * 0.7} o={once < t ? 1 : 0}><Figure color={TEAL} size={170} /></At>
      <At x={760} y={600} o={ramp(t, once, 0.4)}><Glow color={ROSE} size={34}>parent</Glow></At>
      <At x={1160} y={600} o={ramp(t, once, 0.4)}><Glow color={TEAL} size={34}>child</Glow></At>
      <At x={760} y={250} o={between(t, parent, once, 0.3)}><Glow color={DIM} size={32}>a parent, before a child?</Glow></At>
      <Ring x={960} y={440} p={ramp(t, once, 1.2)} r0={60} r1={520} color={GOLD} />
      <At x={960} y={440} o={flash * 0.5}><div style={{ width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}aa, transparent 70%)` }} /></At>
      <At x={960} y={760} o={pairsOn * (1 - shiftUp)}>
        <div style={{ display: "flex", gap: 50 }}>
          <div style={{ transform: `scale(${pop(t, fps, c("Buyer and seller"))})` }}><Chip color={GOLD} size={34}>buyer · seller</Chip></div>
          <div style={{ transform: `scale(${pop(t, fps, c("host and guest"))})` }}><Chip color={VIOLET} size={34}>host · guest</Chip></div>
        </div>
      </At>
      {/* no glue between them */}
      <At x={960} y={440} o={between(t, glue, c("Parenthood is named") + 1.0, 0.4)} s={pop(t, fps, glue)}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 150, height: 100, borderRadius: "45% 55% 50% 50%", background: `radial-gradient(circle, ${GREEN}aa, ${GREEN}33)`, boxShadow: `0 0 30px ${GREEN}` }} />
          <Glow color={GREEN} size={30} style={{ marginTop: 8 }}>"the relation"</Glow>
        </div>
      </At>
      <Cross x={960} y={455} size={170} at={c("Parenthood is named")} />
      <At x={960} y={170} o={between(t, third, together, 0.4)}><Glow color={CHALK} size={42}>no third thing in between</Glow></At>
      <At x={960} y={440} o={ramp(t, together, 0.5)}>
        <div style={{ width: 760, height: 380, borderRadius: 190, border: `4px solid ${GOLD}`, boxShadow: `0 0 40px ${GOLD}88, inset 0 0 30px ${GOLD}44` }} />
      </At>
      <Flow x1={850} y1={430} x2={1070} y2={430} color={GOLD} p={ramp(t, together, 0.6)} dash />
      <Center top={110}><div style={{ opacity: ramp(t, together, 0.3) }}><Reveal text="defined together" at={together} size={76} /></div></Center>
      <At x={960} y={760} o={ramp(t, ground, 0.5)}><Glow color={GOLD} size={38}>neither is the ground of the other</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. is it circular? fire and fuel
const CircleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Someone may object");
  const first = c("something must come first");
  const ff = c("fire and fuel"), which = c("which is established first"), point = c("And that is the point");
  const chain = c("pass existence up");
  const picked = c("how things are picked out");
  const lit = c("fires are lit");
  const spin = (t - t0) * 60;
  const ffOn = ramp(t, ff, 0.6);
  const chainOn = between(t, chain, picked, 0.4);
  const campfire = ramp(t, lit, 0.6);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={ff - 0.5}>
        <At x={960} y={440} r={spin}>
          <svg width={460} height={460} viewBox="-230 -230 460 460" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
            <path d="M-170 -60 A 180 180 0 0 1 170 -60" fill="none" stroke={VIOLET} strokeWidth={6} />
            <path d="M170 60 A 180 180 0 0 1 -170 60" fill="none" stroke={VIOLET} strokeWidth={6} />
            <polygon points="170,-60 140,-90 182,-96" fill={VIOLET} /><polygon points="-170,60 -140,90 -182,96" fill={VIOLET} />
          </svg>
        </At>
        <At x={760} y={440} s={pop(t, fps, t0)}><Chip color={GOLD} size={50}>A</Chip></At>
        <At x={1160} y={440} s={pop(t, fps, t0 + 0.2)}><Chip color={TEAL} size={50}>B</Chip></At>
        <At x={960} y={150} o={ramp(t, t0, 0.4)}><Glow color={CHALK} size={44} serif>circular?</Glow></At>
        <At x={960} y={760} o={ramp(t, first, 0.5)}><Glow color={WARM} size={40}>surely something comes first</Glow></At>
      </Scene>
      <Scene from={ff - 0.3} to={chain - 0.4}>
        <At x={700} y={380} s={pop(t, fps, ff)}><Flame size={0.9} /></At>
        <At x={1220} y={470} s={pop(t, fps, ff + 0.3)}><Logs /></At>
        <At x={700} y={620} o={ffOn}><Glow color={WARM} size={36}>fire</Glow></At>
        <At x={1220} y={620} o={ffOn}><Glow color={GOLD} size={36}>fuel</Glow></At>
        <Svg style={{ opacity: ffOn }}>
          <DrawPath d="M820 330 Q 980 230 1140 400" p={ramp(t, ff + 0.6, 0.8)} color={GOLD} width={4} len={500} />
          <DrawPath d="M1140 540 Q 980 640 820 520" p={ramp(t, ff + 0.9, 0.8)} color={WARM} width={4} len={500} />
        </Svg>
        <At x={960} y={150} o={ramp(t, which, 0.5)}><Glow color={CHALK} size={48} serif>which is first?</Glow></At>
        <At x={960} y={430} s={pop(t, fps, point - 0.6)} o={ramp(t, point - 0.6, 0.4)}><Glow color={GOLD} size={64} serif>neither</Glow></At>
        <At x={960} y={760} o={ramp(t, point, 0.5)}><Glow color={GOLD} size={38}>so neither from its own side</Glow></At>
      </Scene>
      <Scene from={chain - 0.3} to={lit - 0.4}>
        <AbsoluteFill style={{ opacity: chainOn }}>
          {Array.from({ length: 5 }).map((_, i) => {
            const y = 720 - i * 130;
            const glow = ((t - chain) * 1.2 - i * 0.4) % 2.5;
            return (
              <React.Fragment key={i}>
                <At x={700} y={y}><div style={{ width: 90, height: 90, borderRadius: 14, border: `3px solid ${CHALK}`, background: glow > 0 && glow < 0.6 ? `${GOLD}88` : "#ffffff10" }} /></At>
                {i < 4 && <Flow x1={700} y1={y - 50} x2={700} y2={y - 80} color={GOLD} p={1} width={4} />}
              </React.Fragment>
            );
          })}
          <At x={700} y={800} o={1}><Glow color={DIM} size={28}>a starting point?</Glow></At>
        </AbsoluteFill>
        <Cross x={700} y={460} size={300} at={chain + 1.6} />
        <At x={1250} y={300} o={ramp(t, chain + 0.4, 0.5)}><Glow color={CHALK} size={36}>dependence passing existence up</Glow></At>
        <At x={1250} y={500} s={pop(t, fps, picked)} o={ramp(t, picked, 0.4)}>
          <div style={{ width: 360, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${CHALK}44, transparent 70%)`, display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
            <Orb size={50} color={WARM} /><Orb size={50} color={GOLD} />
          </div>
          <Glow color={GOLD} size={36}>how things are picked out</Glow>
        </At>
      </Scene>
      <Scene from={lit - 0.3} to={1e9}>
        <At x={960} y={380} s={pop(t, fps, lit)}><Flame size={0.9} /></At>
        <At x={960} y={540} s={pop(t, fps, lit + 0.2)}><Logs /></At>
        <Mist x={960} y={300} start={lit} color={GOLD} spread={120} n={14} seed={5} />
        <At x={lerp(1500, 1080, ramp(t, lit + 0.8, 1.2))} y={lerp(560, 520, ramp(t, lit + 0.8, 1.2))} o={campfire * (1 - ramp(t, lit + 1.9, 0.3))} r={20}>
          <svg width={200} height={40} viewBox="0 0 200 40"><rect x={0} y={5} width={200} height={28} rx={14} fill="#7a5a35" stroke={GOLD} strokeWidth={3} /></svg>
        </At>
        <At x={960} y={720} o={ramp(t, c("No one waits"), 0.5)}><Glow color={GREEN} size={40}>no one waits for the question to be settled</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. relation is primary: a correction
const CorrectScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("relation is primary");
  const loosen = ramp(t, c("loosens the habit"), 1.6);
  const done = ramp(t, c("done its work"), 1.0);
  const layer = c("a deeper layer");
  const boxes = [[560, 470], [860, 400], [1140, 500], [1400, 420]];
  return (
    <AbsoluteFill>
      <At x={960} y={160} s={pop(t, fps, t0)} o={1 - 0.75 * done}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={90} height={90} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 8px ${TEAL})`, transform: `rotate(${-20 + Math.sin(t * 3) * 10 * (1 - done)}deg)` }}>
            <path d="M20 80 L60 40 M55 25 A 22 22 0 1 0 75 45 L68 38 L62 44 L56 38 L62 32 Z" stroke={TEAL} strokeWidth={8} fill="none" strokeLinecap="round" />
          </svg>
          <Chip color={TEAL} size={44}>relation is primary</Chip>
        </div>
      </At>
      <At x={960} y={250} o={ramp(t, c("as a correction"), 0.5) * (1 - done)}><Glow color={TEAL} size={36}>a correction, a tool</Glow></At>
      {boxes.map(([x, y], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} s={pop(t, fps, t0 + 0.3 + i * 0.1)}><Orb size={80} color={[GOLD, ROSE, VIOLET, ICE][i]} /></At>
          <At x={x} y={y} o={1 - loosen}>
            <div style={{ width: 170, height: 170, borderRadius: 12, border: `${6 * (1 - loosen) + 1}px solid ${CHALK}`, boxShadow: `inset 0 0 20px #000`, transform: `scale(${1 + loosen * 0.5})` }} />
          </At>
        </React.Fragment>
      ))}
      {boxes.slice(0, 3).map(([x, y], i) => (
        <Flow key={i} x1={x + 40} y1={y} x2={boxes[i + 1][0] - 40} y2={boxes[i + 1][1]} color={GOLD} p={ramp(t, c("loosens the habit") + 0.8 + i * 0.2, 0.6)} dash />
      ))}
      <At x={960} y={640} o={ramp(t, c("loosens the habit") + 0.5, 0.5) * (1 - ramp(t, layer - 0.3, 0.4))}><Glow color={CHALK} size={36}>the habit of isolated things, loosened</Glow></At>
      <At x={960} y={780} s={pop(t, fps, layer)} o={ramp(t, layer, 0.4)}>
        <div style={{ position: "relative", width: 900, height: 50, borderRadius: 10, background: `linear-gradient(90deg, ${TEAL}22, ${TEAL}88, ${TEAL}22)`, display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 34, color: CHALK }}>a deeper relational layer?</div>
      </At>
      <Cross x={960} y={780} size={140} at={layer + 0.6} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. boundaries: neither haze nor one whole
const BoundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The same care applies to boundaries");
  const noEdge = c("No edge is found");
  const two = c("Two wrong conclusions");
  const hazeK = ramp(t, c("only haze"), 1.2);
  const warm = c("keeps the body warm"), rain = c("keeps out the rain");
  const one = c("everything is one"), whole = ramp(t, c("one great whole"), 1.2);
  const subst = c("a single huge substance"), wf = c("The whole is no more found");
  const [s1, s2, s3] = [two - 0.3, one - 0.3, wf - 0.3];
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={s1}>
        <At x={760} y={430} s={pop(t, fps, t0)}><IceCube size={220} spin={(t - t0) * 10} /></At>
        <At x={1180} y={430} s={pop(t, fps, t0 + 0.3)} r={-90}><Hand size={240} /></At>
        <At x={760} y={430} o={ramp(t, c("the edge of the ice"), 0.4)}>
          <div style={{ width: 330, height: 330, borderRadius: 20, border: `3px dashed ${ICE}`, transform: `scale(${1 + 0.04 * Math.sin(t * 3)})` }} />
        </At>
        <At x={1180} y={430} o={ramp(t, c("the skin of the hand"), 0.4)}>
          <div style={{ width: 300, height: 300, borderRadius: "50%", border: `3px dashed ${ROSE}`, transform: `scale(${1 + 0.04 * Math.sin(t * 3 + 1)})` }} />
        </At>
        <At x={960} y={150} o={ramp(t, noEdge, 0.4)}><Glow color={CHALK} size={46} serif>no edge found from its own side</Glow></At>
      </Scene>
      <Scene from={s1} to={s2}>
        <At x={960} y={110} o={ramp(t, two, 0.4)}><Glow color={WARM} size={42}>wrong conclusion one: no boundaries at all</Glow></At>
        <AbsoluteFill style={{ filter: `blur(${hazeK * 14}px)`, opacity: 1 - 0.4 * hazeK }}>
          <At x={560} y={430} s={pop(t, fps, two + 0.3)}><Figure color={ROSE} size={220} /></At>
          <At x={960} y={430} s={pop(t, fps, two + 0.45)}><House /></At>
          <At x={1360} y={430} s={pop(t, fps, two + 0.6)}><IceCube size={160} spin={t * 10} /></At>
        </AbsoluteFill>
        <At x={960} y={430} o={hazeK * (1 - ramp(t, warm - 0.3, 0.5))}><Glow color={CHALK} size={60} serif>only haze?</Glow></At>
        <AbsoluteFill style={{ opacity: ramp(t, warm - 0.2, 0.5) }}>
          <At x={560} y={430}><Figure color={ROSE} size={220} /></At>
          <At x={560} y={430} o={ramp(t, warm, 0.5)}><div style={{ width: 300, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${WARM}55, transparent 70%)` }} /></At>
          <At x={560} y={680} o={ramp(t, warm, 0.5)}><Glow color={WARM} size={32}>skin keeps the warmth in</Glow></At>
          <At x={1260} y={430}><House /></At>
          {Array.from({ length: 22 }).map((_, i) => {
            const x = 1080 + rand(i) * 360, y = 160 + ((rand(i + 3) * 200 + (t - rain) * 400) % 220);
            return <div key={i} style={{ position: "absolute", left: x, top: y, width: 3, height: 26, background: ICE, opacity: 0.7 * ramp(t, rain, 0.5) }} />;
          })}
          <At x={1260} y={680} o={ramp(t, rain, 0.5)}><Glow color={ICE} size={32}>the wall keeps out the rain</Glow></At>
        </AbsoluteFill>
      </Scene>
      <Scene from={s2} to={s3}>
        <At x={960} y={110} o={ramp(t, one, 0.4)}><Glow color={WARM} size={42}>wrong conclusion two: everything is one</Glow></At>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2, r = 330 * (1 - whole);
          return <At key={i} x={960 + r * Math.cos(a)} y={450 + r * 0.7 * Math.sin(a)} s={pop(t, fps, one + i * 0.08) * (1 - 0.6 * whole)} o={1 - whole}><Orb size={80} color={[GOLD, ROSE, TEAL, VIOLET, ICE, GREEN][i]} /></At>;
        })}
        <At x={960} y={450} s={0.2 + 0.8 * whole} o={whole}><Orb size={360} color={VIOLET} core={whole} /></At>
        <At x={960} y={700} o={ramp(t, subst, 0.5)}><Glow color={WARM} size={38}>one huge substance</Glow></At>
        <Cross x={960} y={450} size={300} at={subst + 0.8} />
      </Scene>
      <Scene from={s3} to={1e9}>
        <At x={960} y={360} s={pop(t, fps, wf)}>
          <div style={{ width: 520, height: 300, borderRadius: 150, border: `4px dashed ${GOLD}`, boxShadow: `0 0 24px ${GOLD}66` }} />
        </At>
        {Array.from({ length: 5 }).map((_, i) => <At key={i} x={780 + i * 90} y={360} s={pop(t, fps, wf + 0.3 + i * 0.1)}><Orb size={60} color={TEAL} /></At>)}
        <At x={960} y={170} o={ramp(t, wf, 0.4)}><Chip color={GOLD} size={34}>the whole</Chip></At>
        <At x={960} y={560} o={ramp(t, wf + 0.4, 0.4)}><Chip color={TEAL} size={34}>the parts</Chip></At>
        <Svg>
          <DrawPath d="M1260 230 Q 1400 360 1260 520" p={ramp(t, wf + 1.0, 0.8)} color={GOLD} width={4} len={400} />
          <DrawPath d="M660 520 Q 520 360 660 230" p={ramp(t, wf + 1.3, 0.8)} color={TEAL} width={4} len={400} />
        </Svg>
        <At x={960} y={720} o={ramp(t, wf + 1.2, 0.5)}><Glow color={CHALK} size={38}>neither found apart from the other</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};
const House: React.FC = () => (
  <svg width={260} height={250} viewBox="0 0 190 190" style={{ filter: `drop-shadow(0 0 10px ${GOLD}88)` }}>
    <path d="M20 90 L95 25 L170 90" fill="none" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <rect x={35} y={88} width={120} height={95} fill="#ffffff0d" stroke={CHALK} strokeWidth={4} />
    <rect x={80} y={128} width={30} height={55} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
    <rect x={50} y={105} width={22} height={22} fill={GOLD} opacity={0.7} /><rect x={118} y={105} width={22} height={22} fill={GOLD} opacity={0.7} />
  </svg>
);

// ---------------------------------------------------------------- 8. the clap
const ClapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Clap your hands");
  const hit = t0 + 0.9;
  const close = t < hit ? ramp(t, t0, 0.9) : 1 - ramp(t, hit + 0.15, 0.6);
  const gap = lerp(260, 70, close);
  const burst = ramp(t, hit, 0.9);
  const sharp = c("the clap is sharp");
  const burst2 = ramp(t, sharp, 0.9);
  const sting = ramp(t, c("One can sting"), 0.6);
  const places: [string, number, number, string][] = [["Not in the left hand", 960 - gap - 90, 230, "left?"], ["Not in the right", 960 + gap + 90, 230, "right?"], ["some third thing", 960, 200, "between?"]];
  return (
    <AbsoluteFill>
      <At x={960 - gap} y={460} s={pop(t, fps, t0 - 0.3)} r={70}><div style={{ transform: "scaleX(-1)" }}><Hand size={260} /></div></At>
      <At x={960 + gap} y={460} s={pop(t, fps, t0 - 0.3)} r={-70}><Hand size={260} /></At>
      <At x={960 - gap} y={460} o={sting}><div style={{ width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${WARM}88, transparent 70%)` }} /></At>
      {[burst, burst2].map((b, k) => [0, 1, 2].map((i) => <Ring key={`${k}${i}`} x={960} y={420} p={Math.max(0, b - i * 0.15)} r0={30} r1={420} color={GOLD} width={5} />))}
      <At x={960} y={130} o={ramp(t, c("Where is the sound"), 0.4) * (1 - ramp(t, sharp - 0.3, 0.4))}><Glow color={GOLD} size={52} serif>where is the sound?</Glow></At>
      {places.map(([ph, x, y, label], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y + 80} o={between(t, c(ph, 0.1), sharp - 0.3, 0.3)}><Glow color={CHALK} size={34}>{label}</Glow></At>
          <Cross x={x} y={y + 80} size={70} at={c(ph) + 0.7} />
        </React.Fragment>
      ))}
      <At x={960} y={130} o={ramp(t, sharp, 0.4)}><Glow color={GOLD} size={52} serif>sharp, and unmistakable</Glow></At>
      <At x={960 - 260} y={720} o={ramp(t, c("the hands remain two"), 0.5)}><Chip color={ROSE} size={32}>left</Chip></At>
      <At x={960 + 260} y={720} o={ramp(t, c("the hands remain two") + 0.2, 0.5)}><Chip color={ROSE} size={32}>right</Chip></At>
      <At x={960} y={790} o={ramp(t, c("the hands remain two"), 0.5)}><Glow color={CHALK} size={36}>still two</Glow></At>
      <At x={960 - 260} y={300} o={sting}><Glow color={WARM} size={34}>stings</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. no gap crossed, nothing fused
const MeetScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Nothing crossed a gap"), noGap = c("no gap was found"), fused = c("Nothing fused"), noSub = c("no single substance");
  const ball = ramp(t, t0 + 0.2, 1.2);
  const merge = ramp(t, fused, 1.0) * (1 - ramp(t, noSub + 0.6, 0.8));
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, t0, 0.4)}><Glow color={CHALK} size={46} serif>neither one nor two</Glow></At>
      {/* left: a gap crossed */}
      <At x={360} y={420} s={pop(t, fps, t0)}><Orb size={120} color={ROSE} /></At>
      <At x={760} y={420} s={pop(t, fps, t0 + 0.1)}><Orb size={120} color={TEAL} /></At>
      <Svg><rect x={500} y={330} width={120} height={180} fill="#00000066" stroke={DIM} strokeDasharray="8 8" strokeWidth={2} opacity={ramp(t, t0, 0.4)} /></Svg>
      <At x={lerp(420, 700, ball)} y={420 - Math.sin(ball * Math.PI) * 120} o={between(t, t0 + 0.2, noGap + 0.4, 0.3)}><Orb size={34} color={GOLD} /></At>
      <Cross x={560} y={420} size={200} at={noGap} />
      <At x={560} y={620} o={ramp(t, t0, 0.4)}><Glow color={DIM} size={32}>something crossing a gap?</Glow></At>
      {/* right: fused into one */}
      <At x={lerp(1160, 1360, merge)} y={420} s={pop(t, fps, fused)}><Orb size={120} color={ROSE} /></At>
      <At x={lerp(1560, 1360, merge)} y={420} s={pop(t, fps, fused + 0.1)}><Orb size={120} color={TEAL} /></At>
      <Cross x={1360} y={420} size={200} at={noSub} />
      <At x={1360} y={620} o={ramp(t, fused, 0.4)}><Glow color={DIM} size={32}>fused into one?</Glow></At>
      <At x={960} y={760} o={ramp(t, noSub + 0.8, 0.5)}><Glow color={GOLD} size={38}>two, meeting without a seam</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("the ordinary world");
  const friend = c("A friend's hand"), voice = c("A voice across the room"), cold = c("The cold in the palm");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>the ordinary world</Glow></At>
      <At x={480} y={400} s={pop(t, fps, friend)}>
        <div style={{ position: "relative", width: 300, height: 300 }}>
          <div style={{ position: "absolute", left: 10, top: 20 }}><Hand size={220} /></div>
          <div style={{ position: "absolute", left: 80, top: 50, transform: "scaleX(-1) rotate(-20deg)" }}><svg width={220} height={220} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
            <path d="M30 92 C18 80 14 66 16 54 L18 40 C19 34 27 34 28 40 L30 52 L30 20 C30 13 39 13 39 20 L40 48 L41 12 C41 5 51 5 51 12 L51 48 L53 16 C53 9 62 9 62 16 L61 50 L64 30 C65 23 74 24 73 31 L69 64 C67 78 60 88 52 92 Z"
              fill="rgba(228,194,122,0.15)" stroke={GOLD} strokeWidth={3.5} strokeLinejoin="round" /></svg></div>
        </div>
      </At>
      <At x={480} y={620} o={ramp(t, friend, 0.5)}><Glow color={GOLD} size={32}>a friend's hand</Glow></At>
      <At x={960} y={400} s={pop(t, fps, voice)}>
        <svg width={320} height={240} viewBox="0 0 320 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${TEAL})` }}>
          {[0, 1, 2, 3].map((k) => {
            const u = ((t * 0.6 + k / 4) % 1);
            return <path key={k} d={`M${40 + u * 240} ${60} Q ${60 + u * 240} 120 ${40 + u * 240} 180`} stroke={TEAL} strokeWidth={5} fill="none" opacity={Math.sin(u * Math.PI)} />;
          })}
        </svg>
      </At>
      <At x={960} y={620} o={ramp(t, voice, 0.5)}><Glow color={TEAL} size={32}>a voice across the room</Glow></At>
      <At x={1440} y={420} s={pop(t, fps, cold)}>
        <div style={{ position: "relative", width: 260, height: 260 }}>
          <div style={{ position: "absolute", left: 10, top: 20 }}><Hand size={230} /></div>
          <div style={{ position: "absolute", left: 85, top: 90 }}><Snowflake size={90} rot={t * 30} /></div>
        </div>
      </At>
      <Mist x={1440} y={420} start={cold} spread={120} n={10} seed={9} />
      <At x={1440} y={620} o={ramp(t, cold, 0.5)}><Glow color={ICE} size={32}>the cold in the palm</Glow></At>
      <Center top={700}><Reveal text="intimate without merging" at={c("Intimate without merging")} size={58} /></Center>
      <Center top={775}><Reveal text="distinct without walls" at={c("Distinct without walls")} size={58} color={ICE} top="#F0FBFF" /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["web", 0], ["long", c("how ordinary distinctions work", 1.2)], ["roles", c("Roles work the same way", 0.6)], ["circle", c("Someone may object", 0.6)],
    ["correct", c("relation is primary", 1.2)], ["bound", c("The same care applies to boundaries", 0.6)], ["clap", c("Clap your hands", 0.6)],
    ["close", c("the ordinary world", 1.2)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("how ordinary distinctions work", 1.4)], <WebScene />],
    [S("how ordinary distinctions work", "Roles work the same way", 1.2), <LongScene />],
    [S("Roles work the same way", "Someone may object", 0.5, 0.9), <RolesScene />],
    [S("Someone may object", "relation is primary", 0.5, 2.0), <CircleScene />],
    [S("relation is primary", "The same care applies to boundaries", 1.4), <CorrectScene />],
    [S("The same care applies to boundaries", "Clap your hands"), <BoundScene />],
    [S("Clap your hands", "Nothing crossed a gap"), <ClapScene />],
    [S("Nothing crossed a gap", "the ordinary world", 0.5, 1.6), <MeetScene />],
    [S("the ordinary world", null, 1.4), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
