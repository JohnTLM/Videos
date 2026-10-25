// Bonus 93: Insubstantial Appearances. Explainer drawings timed to the narration.
// Arc: two mirror-image mistakes (a solid block simply there / a ghostly shadow), both crossed -> four points:
// 1 mutual dependence: a stick long beside a pebble, short beside a tree; parent and child; "my car" as its relations, no car
//   underneath; physics puts relation first, but a relational ground is shown and then dissolved: only relations are found ->
// 2 empty appearances: a coin in the palm, hard and weighty; a car striking, the injury real; vivid, usable and empty ->
// 3 functioning: a bridge from steel, deck, supports and name; a truck crosses, a too heavy truck brings it down;
//   conditions are patterns too, no bottom layer, only the web ->
// 4 karma and habit: water seen three ways; a rope seen as a snake, the fear real; habit not a hidden cause ->
// the two errors loosen together: vivid, workable and empty.
// Stance (VIDEO-SPEC section 4): no ground, structure or condition is drawn as a base behind things except to be removed;
// appearances stay vivid; the ghostly picture appears only as the mistake, then is struck.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Orb, PictureFrame,
  ROSE, Reveal, Ring, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "We carry two mistakes about appearances", "they mirror each other",
  "The first is familiar", "a fixed nature of its own", "simply there, waiting to be found", "This is the habit of reification",
  "rarely shows up as a view", "the plain sense that things are real",
  "The second is less often noticed", "they must be faint and ghostly", "like shadows we could brush aside",
  "Both mistakes share one assumption", "solidity and emptiness exclude each other", "Four points loosen that assumption",
  "First, mutual dependence", "Nothing is long or short in itself", "A stick is long beside a pebble", "short beside a tree",
  "A person is a parent", "only because there is a child",
  "My car is its wheels", "its engine", "the road", "the driver's purpose", "the name we give it", "Gather those relations",
  "no car is found lying underneath",
  "Modern physics reaches a similar place", "In Carlo Rovelli's relational reading", "Karen Barad's account",
  "relation comes before the things related", "as a structure to be finally described",
  "The Middle Way asks whether that ground", "Relations are as empty as the things they relate",
  "not a hidden structure tying everything together", "look for an essence and find only relations",
  "Second, empty appearances", "A coin pressed into the palm", "feels hard and weighty", "It has no essence of its own",
  "it is not flimsy for that",
  "Emptiness is not harmlessness either", "A car is empty in exactly this sense", "when it strikes someone", "the injury is entirely real",
  "Emptiness does not dim appearance", "vivid, usable, and empty, all at once",
  "Third, functioning without inherent existence", "A bridge carries traffic", "no single part of it is the bridge",
  "Steel, deck, supports and the name", "and it holds", "A truck crosses it", "A truck too heavy brings it down",
  "Both outcomes are real", "to exist in its own right",
  "Nor are the conditions a hidden foundation", "They are patterns too", "There is no bottom layer", "only the web and its vivid patterns",
  "Fourth, karma and habit", "shaped by the tendencies it carries", "People see water as something to drink", "Fish see it as a home",
  "hungry ghosts see it as pus and blood", "Each version acts on the one who meets it",
  "A rope in dim light is seen as a snake", "the fear is real", "though no snake was ever there",
  "Habit is not a hidden cause behind appearances", "come to look solid and separate",
  "So two errors loosen together", "Nothing stands behind appearances holding them in place", "they are not unreal",
  "They are vivid, workable and empty", "with real consequences", "met without the grasping", "seem like things",
];

// The Substrateless World series moods (as in bonus 90)
const M = {
  mirror: { a: "rgba(70,50,130,0.5)", b: "rgba(150,110,50,0.38)", c: "rgba(40,100,130,0.3)" },
  solid: { a: "rgba(150,120,50,0.45)", b: "rgba(50,70,140,0.45)", c: "rgba(40,120,130,0.32)" },
  depend: { a: "rgba(60,140,110,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.3)" },
  physics: { a: "rgba(40,120,140,0.5)", b: "rgba(160,130,60,0.4)", c: "rgba(80,60,150,0.32)" },
  coin: { a: "rgba(170,110,40,0.48)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.35)" },
  bridge: { a: "rgba(40,110,150,0.55)", b: "rgba(60,60,140,0.42)", c: "rgba(150,90,60,0.3)" },
  karma: { a: "rgba(90,60,130,0.5)", b: "rgba(170,130,60,0.4)", c: "rgba(40,100,130,0.32)" },
  close: { a: "rgba(160,90,40,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.32)" },
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

const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      <DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.5)} color={color} width={7} len={70} />
    </svg>
  );
};

/** The four numbered points, the active one lit. */
const Points: React.FC<{ at: number; active: number; title: string }> = ({ at, active, title }) => {
  const { t } = useT();
  return (
    <>
      <At x={960} y={80} o={ramp(t, at, 0.5)}>
        <div style={{ display: "flex", gap: 20 }}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ width: 50, height: 50, borderRadius: "50%", border: `3px solid ${n === active ? GOLD : DIM}`, background: n === active ? `${GOLD}44` : "transparent",
              boxShadow: n === active ? `0 0 20px ${GOLD}` : undefined, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: SERIF, fontSize: 30, color: n === active ? CHALK : DIM }}>{n}</div>
          ))}
        </div>
      </At>
      <At x={960} y={160} o={ramp(t, at + 0.2, 0.5)}><Glow color={GOLD} size={44} serif>{title}</Glow></At>
    </>
  );
};

/** A solid stone block with a glowing "essence" inside: the first mistake. */
const SolidBlock: React.FC<{ size?: number; core?: number }> = ({ size = 1, core = 0 }) => (
  <div style={{ width: 260 * size, height: 260 * size, borderRadius: 18 * size, position: "relative",
    background: "linear-gradient(150deg, #8d8a99, #4d4a5a 60%, #2e2c38)", border: `4px solid ${CHALK}`,
    boxShadow: `0 20px 50px #00000088, 0 0 30px ${CHALK}33, inset 0 0 40px #00000066` }}>
    {core > 0 && <div style={{ position: "absolute", left: "50%", top: "50%", width: 90 * size, height: 90 * size, borderRadius: "50%",
      transform: `translate(-50%,-50%) scale(${core})`, background: `radial-gradient(circle, #FFF6D8, ${GOLD} 55%, transparent 75%)`, boxShadow: `0 0 30px ${GOLD}` }} />}
  </div>
);

/** The same block as a faint, wavering shadow: the second mistake. */
const GhostBlock: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <div style={{ width: 260 * size, height: 260 * size, borderRadius: 18 * size, border: `3px dashed ${DIM}`, background: "#9a96a818",
      transform: `skewX(${Math.sin(t * 1.4) * 4}deg) translateX(${Math.sin(t * 0.9) * 8}px)`, opacity: 0.55 + 0.15 * Math.sin(t * 2),
      filter: "blur(1.5px)" }} />
  );
};

const Tree: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={360 * size} height={440 * size} viewBox="0 0 360 440" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${GREEN}66)` }}>
      <path d="M170 430 L176 260 Q150 220 120 206 M176 290 Q210 240 246 226 M176 330 L182 430" stroke="#C9A06A" strokeWidth={16} fill="none" strokeLinecap="round" />
      {[[180, 150, 120], [104, 200, 80], [262, 196, 84], [180, 76, 84], [128, 118, 70], [236, 112, 70]].map(([x, y, r], i) => (
        <circle key={i} cx={x + Math.sin(t * 1.3 + i) * 5} cy={y + Math.cos(t * 1.1 + i) * 3} r={r}
          fill={i % 2 ? `${GREEN}55` : `${TEAL}44`} stroke={GREEN} strokeWidth={3} strokeOpacity={0.7} />
      ))}
    </svg>
  );
};

/** A simple person figure (solid). */
const Person: React.FC<{ color?: string; size?: number }> = ({ color = CHALK, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <circle cx={90} cy={70} r={48} fill={color} fillOpacity={0.25} stroke={color} strokeWidth={5} />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill={color} fillOpacity={0.2} stroke={color} strokeWidth={5} />
  </svg>
);

/** A car in side view, wheels turning. */
const Car: React.FC<{ color?: string; size?: number; spin?: number }> = ({ color = TEAL, size = 1, spin = 0 }) => {
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={140} r={32} fill="#1b1d2a" stroke={CHALK} strokeWidth={5} />
      {[0, 1].map((k) => <line key={k} x1={cx + 26 * Math.cos(spin + k * Math.PI / 2)} y1={140 + 26 * Math.sin(spin + k * Math.PI / 2)}
        x2={cx - 26 * Math.cos(spin + k * Math.PI / 2)} y2={140 - 26 * Math.sin(spin + k * Math.PI / 2)} stroke={CHALK} strokeWidth={3} />)}
    </g>
  );
  return (
    <svg width={380 * size} height={180 * size} viewBox="0 0 380 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${color}88)` }}>
      <path d="M20 140 L20 100 Q22 84 50 80 L110 74 L150 30 Q160 22 180 22 L270 22 Q290 22 300 34 L330 74 Q362 80 362 104 L362 140 Z"
        fill={`${color}55`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
      <path d="M160 36 L190 36 L190 74 L126 74 Z M204 36 L268 36 Q280 36 290 48 L308 74 L204 74 Z" fill={`${ICE}44`} stroke={ICE} strokeWidth={3} />
      <circle cx={350} cy={100} r={8} fill={GOLD} />
      {wheel(95)}{wheel(290)}
    </svg>
  );
};

/** A truck in side view, bottom at y = 0 of its own frame (drawn inside an svg <g>). */
const TruckG: React.FC<{ x: number; y: number; rot?: number; heavy?: boolean; o?: number }> = ({ x, y, rot = 0, heavy, o = 1 }) => {
  const s = heavy ? 1.5 : 1, col = heavy ? WARM : TEAL;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} opacity={o} style={{ filter: `drop-shadow(0 0 10px ${col})` }}>
      <rect x={-80} y={-70} width={110} height={58} rx={6} fill={`${col}55`} stroke={col} strokeWidth={4} />
      <path d="M34 -12 L34 -54 L62 -54 L78 -32 L78 -12 Z" fill={`${col}33`} stroke={col} strokeWidth={4} strokeLinejoin="round" />
      <circle cx={-52} cy={-8} r={11} fill="#1b1d2a" stroke={CHALK} strokeWidth={3} />
      <circle cx={52} cy={-8} r={11} fill="#1b1d2a" stroke={CHALK} strokeWidth={3} />
    </g>
  );
};

/** A small fish. */
const Fish: React.FC<{ color?: string }> = ({ color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={200} height={120} viewBox="0 0 200 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})`, transform: `translateY(${Math.sin(t * 2) * 6}px)` }}>
      <path d="M30 60 Q80 10 140 60 Q80 110 30 60 Z" fill={`${color}55`} stroke={color} strokeWidth={5} />
      <path d="M140 60 L185 30 L180 60 L185 90 Z" fill={`${color}55`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
      <circle cx={60} cy={55} r={6} fill={CHALK} />
    </svg>
  );
};

/** A hungry ghost of the old image: thin neck, large belly, drawn softly. */
const HungryGhost: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={160} height={260} viewBox="0 0 160 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={80} cy={40} r={26} fill={`${color}33`} stroke={color} strokeWidth={4} />
    <path d="M76 66 L76 100 M84 66 L84 100" stroke={color} strokeWidth={4} />
    <path d="M80 100 Q10 120 20 190 Q30 250 80 250 Q130 250 140 190 Q150 120 80 100 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
  </svg>
);

/** A small pool of water, tinted by how it is seen. */
const Pool: React.FC<{ tint: string; w?: number }> = ({ tint, w = 260 }) => {
  const { t } = useT();
  return (
    <div style={{ width: w, height: w * 0.42, borderRadius: "50%", background: `radial-gradient(ellipse at 50% 40%, ${tint}ee, ${tint}66 70%, transparent 100%)`,
      boxShadow: `0 0 30px ${tint}88`, position: "relative", overflow: "hidden" }}>
      {[0, 1].map((k) => (
        <div key={k} style={{ position: "absolute", left: "50%", top: "50%", width: (0.3 + ((t * 0.3 + k / 2) % 1) * 0.7) * w,
          height: (0.3 + ((t * 0.3 + k / 2) % 1) * 0.7) * w * 0.42, transform: "translate(-50%,-50%)", borderRadius: "50%",
          border: `2px solid #ffffff55`, opacity: 1 - ((t * 0.3 + k / 2) % 1) }} />
      ))}
    </div>
  );
};

/** A coiled rope that looks like a snake in the dark (lit 0..1). */
const RopeSnake: React.FC<{ lit: number; size?: number }> = ({ lit, size = 1 }) => {
  const { t } = useT();
  const d = "M40 160 C120 60 200 60 260 140 S400 230 470 140 S580 60 640 120";
  const wig = (1 - lit) * Math.sin(t * 3) * 6;
  return (
    <svg width={700 * size} height={260 * size} viewBox="0 0 700 260" style={{ overflow: "visible", filter: `brightness(${0.55 + 0.45 * lit})` }}>
      <g transform={`translate(0 ${wig})`} opacity={1 - lit}>
        <path d={d} fill="none" stroke="#4f8a5a" strokeWidth={26} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#9fd49a" strokeWidth={4} strokeDasharray="4 18" strokeLinecap="round" />
        <ellipse cx={652} cy={116} rx={32} ry={20} fill="#4f8a5a" />
        <circle cx={662} cy={108} r={5} fill={GOLD} />
        <path d="M684 118 L708 112 M684 118 L708 126" stroke={ROSE} strokeWidth={3} />
      </g>
      <g opacity={lit}>
        <path d={d} fill="none" stroke="#C9A06A" strokeWidth={22} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#7a5a32" strokeWidth={4} strokeDasharray="10 14" />
        <path d="M640 120 L668 104 M640 120 L670 122 M640 120 L662 138" stroke="#C9A06A" strokeWidth={4} strokeLinecap="round" />
      </g>
    </svg>
  );
};

const OilLamp: React.FC<{ on: number }> = ({ on }) => {
  const { t } = useT();
  const f = Math.sin(t * 9) * 4;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg width={80} height={100} viewBox="0 0 80 100" style={{ overflow: "visible", opacity: on, filter: `drop-shadow(0 0 16px ${WARM}) drop-shadow(0 0 30px ${GOLD})`, marginBottom: -10 }}>
        <path d={`M40 96 C16 92 14 64 28 46 C34 36 ${40 + f} 20 ${40 + f} 4 C${46 + f} 24 66 40 64 64 C62 88 56 96 40 96 Z`} fill={`${WARM}cc`} />
        <ellipse cx={40} cy={80} rx={9} ry={13} fill="#FFF6D8" />
      </svg>
      <svg width={180} height={80} viewBox="0 0 180 80" style={{ overflow: "visible" }}>
        <path d="M10 20 Q90 90 170 20 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
        <path d="M90 56 L90 76 M60 78 L120 78" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
      </svg>
    </div>
  );
};

/** A coin seen from the front. */
const Coin: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <div style={{ width: 150 * size, height: 150 * size, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #FFF4C8, #E4C27A 45%, #9a7430)",
    border: `5px solid #FFE7A3`, boxShadow: `0 0 40px ${GOLD}aa, inset 0 0 18px #6b4e1a`, display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: SERIF, fontWeight: 700, fontSize: 70 * size, color: "#7a5a1e" }}>1</div>
);

/** An open palm, seen from the side. */
const Palm: React.FC<{ press?: number }> = ({ press = 0 }) => (
  <svg width={360} height={160} viewBox="0 0 360 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d={`M20 ${60 + press * 8} Q90 ${110 + press * 10} 180 ${100 + press * 14} Q270 ${110 + press * 10} 340 ${50 + press * 6} L340 120 Q180 170 20 120 Z`}
      fill="rgba(255,143,163,0.18)" stroke={ROSE} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);

/** Nodes joined by links: things and their relations, all on one plane. */
const NODES: [number, number, string][] = [
  [520, 360, TEAL], [800, 280, GOLD], [1120, 300, ROSE], [1400, 380, VIOLET], [660, 560, ICE], [960, 480, GREEN], [1260, 580, GOLD], [1480, 600, TEAL], [420, 620, ROSE],
];
const LINKS: [number, number][] = [[0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [4, 5], [5, 6], [3, 6], [6, 7], [3, 7], [4, 8], [0, 8]];
const Web: React.FC<{ links: number; nodes: number; glow?: number }> = ({ links, nodes, glow = 0 }) => {
  const { t } = useT();
  return (
    <>
      {LINKS.map(([a, b], i) => (
        <Flow key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} color={NODES[a][2]} p={Math.min(1, Math.max(0, links * 1.3 - i * 0.03))} />
      ))}
      {NODES.map(([x, y, col], i) => (
        <At key={i} x={x} y={y} s={Math.min(1, Math.max(0, nodes * 1.6 - i * 0.07))}><Orb size={56 + 10 * glow * Math.sin(t * 2 + i) + rand(i) * 20} color={col} /></At>
      ))}
    </>
  );
};

/** A lattice drawn beneath the web: a "ground" for the relations, shown only to be removed. */
const Lattice: React.FC<{ o: number; blur?: number }> = ({ o, blur = 0 }) => (
  <Svg style={{ opacity: o, filter: blur > 0.05 ? `blur(${blur}px)` : undefined }}>
    {Array.from({ length: 13 }).map((_, i) => <line key={`v${i}`} x1={360 + i * 100} y1={690} x2={360 + i * 100 - 60} y2={800} stroke={WARM} strokeWidth={3} strokeOpacity={0.7} />)}
    {[690, 745, 800].map((y, k) => <line key={`h${k}`} x1={360 - k * 30} y1={y} x2={1560 - k * 30} y2={y} stroke={WARM} strokeWidth={3} strokeOpacity={0.7} />)}
  </Svg>
);

// ---------------------------------------------------------------- scenes
const MirrorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("We carry two mistakes about appearances"), mir = c("they mirror each other");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, two, 0.5)}><Glow color={CHALK} size={46} serif>two mistakes about appearances</Glow></At>
      <At x={600} y={460} s={pop(t, fps, two + 0.4)}><SolidBlock /></At>
      <At x={1320} y={460} s={pop(t, fps, two + 0.9)}><GhostBlock /></At>
      <At x={600} y={680} o={ramp(t, two + 0.6, 0.5)}><Glow color={CHALK} size={34} serif>1 · too solid</Glow></At>
      <At x={1320} y={680} o={ramp(t, two + 1.1, 0.5)}><Glow color={DIM} size={34} serif>2 · too faint</Glow></At>
      <Svg><DrawPath d="M960 260 L960 720" p={ramp(t, mir, 0.8)} color={ICE} width={5} len={500} /></Svg>
      <At x={960} y={790} o={ramp(t, mir + 0.5, 0.5)}><Glow color={ICE} size={32}>mirror images</Glow></At>
    </AbsoluteFill>
  );
};

const SolidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fam = c("The first is familiar"), fixed = c("a fixed nature of its own"), there = c("simply there, waiting to be found");
  const reif = c("This is the habit of reification"), view = c("rarely shows up as a view"), plain = c("the plain sense that things are real");
  const u = ramp(t, there, 2.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, fam, 0.5)}><Glow color={CHALK} size={42} serif>mistake 1: the familiar one</Glow></At>
      <At x={620} y={450} s={pop(t, fps, fam + 0.2)}><SolidBlock size={1.3} core={ramp(t, fixed + 0.3, 0.8)} /></At>
      <At x={560 + 120 * Math.cos(u * Math.PI * 3)} y={420 + 60 * Math.sin(u * Math.PI * 3)} o={between(t, there, reif, 0.4)}>
        <svg width={130} height={130} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
          <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} /><line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
        </svg>
      </At>
      <At x={1360} y={280} s={pop(t, fps, fixed)}><Chip color={GOLD} size={32}>a fixed nature of its own</Chip></At>
      <At x={1360} y={380} s={pop(t, fps, there)}><Chip color={ICE} size={32}>simply there, waiting</Chip></At>
      <At x={1360} y={500} s={pop(t, fps, reif)}><Chip color={VIOLET} size={34}>the habit of reification</Chip></At>
      <Struck x={1360} y={620} at={view} strikeAt={view + 1.0} color={DIM} size={30}>a view someone holds</Struck>
      <At x={960} y={790} o={ramp(t, plain, 0.5)}><Glow color={GOLD} size={36} serif>just the plain sense that things are real</Glow></At>
    </AbsoluteFill>
  );
};

const GhostScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("The second is less often noticed"), faint = c("they must be faint and ghostly"), brush = c("like shadows we could brush aside");
  const both = c("Both mistakes share one assumption"), excl = c("solidity and emptiness exclude each other"), four = c("Four points loosen that assumption");
  const part2 = both - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  const sweep = ramp(t, brush + 0.4, 1.2);
  const loosen = ramp(t, four + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={110} o={ramp(t, sec, 0.5)}><Glow color={CHALK} size={42} serif>mistake 2: less often noticed</Glow></At>
        <At x={960} y={450} s={pop(t, fps, sec + 0.3)}><GhostBlock size={1.3} /></At>
        <At x={960} y={700} o={ramp(t, faint, 0.5)}><Glow color={DIM} size={34}>faint and ghostly?</Glow></At>
        <At x={1300 - 500 * sweep} y={430} o={ramp(t, brush, 0.4) * (1 - ramp(t, brush + 1.8, 0.5))} r={-70}><Hand size={180} /></At>
        <At x={960} y={790} o={ramp(t, brush + 0.3, 0.5)}><Glow color={DIM} size={30}>a shadow, brushed aside</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={110} o={ramp(t, both, 0.5)}><Glow color={CHALK} size={42} serif>one shared assumption</Glow></At>
        <At x={480} y={420} s={pop(t, fps, both)}><SolidBlock size={0.9} /></At>
        <At x={1440} y={420} s={pop(t, fps, both + 0.3)}><GhostBlock size={0.9} /></At>
        <At x={760} y={420} o={ramp(t, excl, 0.4)}><Chip color={GOLD} size={32}>solidity</Chip></At>
        <At x={1160} y={420} o={ramp(t, excl + 0.4, 0.4)}><Chip color={VIOLET} size={32}>emptiness</Chip></At>
        <At x={960 - 30 * loosen} y={420} o={ramp(t, excl + 0.8, 0.4) * (1 - loosen)} r={-20 * loosen}><Glow color={WARM} size={44}>⟷</Glow></At>
        <At x={960} y={340} o={ramp(t, excl + 1.0, 0.4) * (1 - loosen)}><Glow color={WARM} size={28}>exclude each other?</Glow></At>
        <Crossed x={480} y={420} at={four} size={110} />
        <Crossed x={1440} y={420} at={four + 0.3} size={110} />
        {[1, 2, 3, 4].map((n, i) => (
          <At key={n} x={660 + i * 200} y={700} s={pop(t, fps, four + 0.4 + i * 0.25)}>
            <div style={{ width: 70, height: 70, borderRadius: "50%", border: `3px solid ${GOLD}`, background: `${GOLD}33`, boxShadow: `0 0 20px ${GOLD}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: CHALK }}>{n}</div>
          </At>
        ))}
        <At x={960} y={800} o={ramp(t, four + 1.2, 0.5)}><Glow color={GOLD} size={30}>four points loosen it</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const DependScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const first = c("First, mutual dependence"), none = c("Nothing is long or short in itself"), peb = c("A stick is long beside a pebble");
  const tree = c("short beside a tree"), par = c("A person is a parent"), child = c("only because there is a child");
  const toTree = ramp(t, tree, 0.6);
  return (
    <AbsoluteFill>
      <Points at={first} active={1} title="mutual dependence" />
      {/* the stick, long or short */}
      <At x={430} y={600} s={pop(t, fps, first + 0.5)}>
        <div style={{ width: 300, height: 22, borderRadius: 11, background: "linear-gradient(180deg, #d8b07a, #8a6232)", boxShadow: `0 0 18px ${GOLD}88` }} />
      </At>
      <At x={430} y={340} o={ramp(t, none, 0.5)}><Glow color={DIM} size={28}>long or short, in itself?</Glow></At>
      <At x={660} y={606} o={ramp(t, peb, 0.4) * (1 - toTree)}>
        <div style={{ width: 46, height: 30, borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #d6d2c8, #6f6a62)" }} />
      </At>
      <At x={760} y={440} o={toTree}><Tree size={0.8} /></At>
      <At x={430} y={540} o={ramp(t, peb + 0.5, 0.4) * (1 - toTree)}><Chip color={GOLD} size={30}>long</Chip></At>
      <At x={430} y={540} o={ramp(t, tree + 0.4, 0.4)}><Chip color={ICE} size={30}>short</Chip></At>
      {/* parent and child */}
      <At x={1280} y={470} s={pop(t, fps, par)}><Person color={ROSE} /></At>
      <At x={1520} y={540} s={pop(t, fps, child)}><Person color={TEAL} size={0.6} /></At>
      <Flow x1={1360} y1={500} x2={1470} y2={530} color={GOLD} p={ramp(t, child + 0.3, 0.5)} />
      <At x={1280} y={700} o={ramp(t, par + 0.3, 0.5)}><Chip color={ROSE} size={30}>a parent</Chip></At>
      <At x={1540} y={700} o={ramp(t, child + 0.4, 0.5)}><Chip color={TEAL} size={30}>because of a child</Chip></At>
    </AbsoluteFill>
  );
};

const CarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wh = c("My car is its wheels"), gather = c("Gather those relations"), under = c("no car is found lying underneath");
  const parts: [string, string, string, number, number][] = [
    ["My car is its wheels", "wheels", TEAL, 470, 300], ["its engine", "engine", ROSE, 1450, 300], ["the road", "the road", DIM, 470, 520],
    ["the driver's purpose", "the driver's purpose", GOLD, 1450, 520], ["the name we give it", "the name “car”", VIOLET, 960, 180],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={410} s={pop(t, fps, wh - 0.2)}><Car spin={t * 3} /></At>
      {parts.map(([ph, label, col, x, y], i) => {
        const at = c(ph) + (i === 0 ? 0.6 : 0);
        return (
          <React.Fragment key={i}>
            <Flow x1={x} y1={y} x2={960} y2={410} color={col} p={ramp(t, at + 0.2, 0.6)} />
            <At x={x} y={y} s={pop(t, fps, at)}><Chip color={col} size={32}>{label}</Chip></At>
          </React.Fragment>
        );
      })}
      <Ring x={960} y={410} p={ramp(t, gather, 1.4)} r0={120} r1={520} color={GOLD} />
      <At x={960} y={690} o={ramp(t, under - 0.2, 0.5)}>
        <div style={{ width: 380, height: 110, borderRadius: 14, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 32, color: DIM }}>a car underneath?</div>
      </At>
      <Crossed x={960} y={690} at={under + 0.9} size={70} />
      <At x={960} y={810} o={ramp(t, under + 1.2, 0.5)}><Glow color={GOLD} size={32}>only relations, gathered</Glow></At>
    </AbsoluteFill>
  );
};

const PhysicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const phys = c("Modern physics reaches a similar place"), rov = c("In Carlo Rovelli's relational reading"), bar = c("Karen Barad's account");
  const rel = c("relation comes before the things related"), struct = c("as a structure to be finally described");
  return (
    <AbsoluteFill>
      <At x={960} y={110} s={pop(t, fps, phys)}>
        <svg width={140} height={140} viewBox="-70 -70 140 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ICE})` }}>
          {[0, 60, 120].map((a) => <ellipse key={a} rx={62} ry={22} fill="none" stroke={ICE} strokeWidth={4} transform={`rotate(${a + t * 20})`} />)}
          <circle r={12} fill={GOLD} />
        </svg>
      </At>
      <At x={960} y={210} o={ramp(t, phys + 0.4, 0.5)}><Glow color={ICE} size={30}>modern physics</Glow></At>
      <At x={420} y={130} s={pop(t, fps, rov)}><Chip color={TEAL} size={30}>Carlo Rovelli</Chip></At>
      <At x={1500} y={130} s={pop(t, fps, bar)}><Chip color={ROSE} size={30}>Karen Barad</Chip></At>
      <AbsoluteFill style={{ opacity: ramp(t, phys + 0.6, 0.6) }}>
        <Web links={ramp(t, rel, 1.4) + ramp(t, phys + 0.6, 1.0) * 0.15} nodes={ramp(t, rel + 1.2, 1.2)} />
      </AbsoluteFill>
      <At x={960} y={650} o={ramp(t, rel + 0.3, 0.5) * (1 - ramp(t, struct - 0.2, 0.4))}><Chip color={GOLD} size={32}>relation first, then the related</Chip></At>
      <Lattice o={ramp(t, struct + 0.3, 0.8)} />
      <At x={960} y={650} o={ramp(t, struct + 0.6, 0.5)}><Chip color={WARM} size={32}>a relational ground?</Chip></At>
    </AbsoluteFill>
  );
};

const GroundGoneScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const asks = c("The Middle Way asks whether that ground"), empty = c("Relations are as empty as the things they relate");
  const hidden = c("not a hidden structure tying everything together"), only = c("look for an essence and find only relations");
  const gone = ramp(t, empty + 0.6, 1.2);
  const u = ramp(t, asks, 3);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, asks, 0.5)}><Glow color={GOLD} size={42} serif>the Middle Way: can that ground be found?</Glow></At>
      <Web links={1} nodes={1} glow={ramp(t, only, 1)} />
      <Lattice o={1 - gone} blur={10 * gone} />
      <At x={600 + 700 * u} y={740 + 20 * Math.sin(u * 12)} o={between(t, asks + 0.4, empty + 0.4, 0.4)}>
        <svg width={120} height={120} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
          <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} /><line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
        </svg>
      </At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, empty + 1.6, 0.5) }}><Crossed x={960} y={745} at={empty + 0.3} size={60} /></AbsoluteFill>
      <At x={960} y={200} o={ramp(t, empty, 0.5)}><Glow color={ICE} size={30}>relations: as empty as what they relate</Glow></At>
      <Struck x={960} y={700} at={hidden} strikeAt={hidden + 1.2} color={WARM} size={30}>a hidden structure tying it all</Struck>
      <At x={960} y={810} o={ramp(t, only, 0.5)}><Reveal text="looked for an essence: found relations" at={only + 0.1} size={46} /></At>
    </AbsoluteFill>
  );
};

const CoinScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("Second, empty appearances"), coin = c("A coin pressed into the palm"), hard = c("feels hard and weighty");
  const ess = c("It has no essence of its own"), flim = c("it is not flimsy for that");
  const press = ramp(t, coin + 0.4, 0.6);
  return (
    <AbsoluteFill>
      <Points at={sec} active={2} title="empty appearances" />
      <At x={760} y={600} o={ramp(t, sec + 0.3, 0.5)}><Palm press={press} /></At>
      <At x={760} y={300 + 230 * press} s={pop(t, fps, sec + 0.4)}><Coin /></At>
      <Svg style={{ opacity: ramp(t, hard, 0.4) }}>
        {[-60, 0, 60].map((dx, i) => <DrawPath key={i} d={`M${760 + dx} 300 L${760 + dx} 390 M${745 + dx} 375 L${760 + dx} 392 L${775 + dx} 375`} p={ramp(t, hard + i * 0.15, 0.4)} color={GOLD} width={5} len={160} />)}
      </Svg>
      <At x={1340} y={300} s={pop(t, fps, hard + 0.2)}><Chip color={GOLD} size={32}>hard and weighty</Chip></At>
      <At x={1340} y={430} o={ramp(t, ess, 0.5)}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", border: `4px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 26, color: DIM }}>essence?</div>
      </At>
      <Crossed x={1340} y={430} at={ess + 1.0} size={70} />
      <Struck x={1340} y={600} at={flim} strikeAt={flim + 0.9} color={DIM} size={32}>flimsy</Struck>
      {[0, 1].map((k) => <Ring key={k} x={760} y={530} p={((t - flim) * 0.5 + k / 2) % 1 * ramp(t, flim + 0.6, 0.4)} r0={80} r1={220} color={GOLD} width={2} />)}
      <At x={960} y={800} o={ramp(t, flim + 0.8, 0.5)}><Glow color={GOLD} size={34} serif>empty, and not flimsy</Glow></At>
    </AbsoluteFill>
  );
};

const StrikeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const harm = c("Emptiness is not harmlessness either"), empty = c("A car is empty in exactly this sense");
  const hit = c("when it strikes someone"), inj = c("the injury is entirely real");
  const hitAt = hit + 0.5;
  const drive = ramp(t, empty, Math.max(0.5, hitAt - empty));
  const x = 380 + (1010 - 380) * drive;
  const flash = between(t, hitAt, hitAt + 0.4, 0.15);
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={harm} strikeAt={harm + 1.2} color={DIM} size={34}>empty, so harmless</Struck>
      <Svg><line x1={160} y1={580} x2={1760} y2={580} stroke={DIM} strokeWidth={4} strokeOpacity={0.6} /></Svg>
      <At x={x} y={500} s={pop(t, fps, harm + 0.3)}><Car color={TEAL} spin={t < hitAt ? (t - empty) * 8 : (hitAt - empty) * 8} /></At>
      <At x={1300} y={440} s={pop(t, fps, harm + 0.6)} r={t > hitAt ? 12 * ramp(t, hitAt, 0.3) : 0}><Person color={ROSE} size={0.9} /></At>
      <At x={x} y={300} o={between(t, empty + 0.3, hit - 0.2, 0.4)}><Glow color={TEAL} size={28}>empty, in exactly this sense</Glow></At>
      {/* restrained: a flash at the moment of impact */}
      <At x={1200} y={460} o={flash} s={0.6 + 0.6 * ramp(t, hitAt, 0.3)}>
        <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 20px ${WARM})` }}>
          <path d="M0 -110 L22 -34 L96 -60 L42 -6 L110 30 L34 30 L40 106 L0 44 L-40 106 L-34 30 L-110 30 L-42 -6 L-96 -60 L-22 -34 Z" fill="#FFF0C8" stroke={WARM} strokeWidth={6} />
        </svg>
      </At>
      <Ring x={1200} y={460} p={ramp(t, hitAt, 1.2)} r0={40} r1={260} color={WARM} />
      <At x={1300} y={700} s={pop(t, fps, inj)}><Chip color={WARM} size={34}>the injury: entirely real</Chip></At>
      <At x={1300} y={790} o={ramp(t, inj + 0.6, 0.5)}><Glow color={GOLD} size={30}>real consequences</Glow></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dim = c("Emptiness does not dim appearance"), viv = c("vivid, usable, and empty, all at once");
  const bright = ramp(t, dim + 0.8, 1.2);
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={dim} strikeAt={dim + 1.0} color={DIM} size={36}>emptiness dims appearance</Struck>
      <AbsoluteFill style={{ filter: `saturate(${0.5 + 0.8 * bright}) brightness(${0.7 + 0.4 * bright})` }}>
        <At x={480} y={420} s={pop(t, fps, dim + 0.2)}><Coin size={1.1} /></At>
        <At x={960} y={420} s={pop(t, fps, dim + 0.4)}><Car color={TEAL} size={0.9} spin={t * 2} /></At>
        <At x={1440} y={400} s={pop(t, fps, dim + 0.6)}><Tree size={0.7} /></At>
      </AbsoluteFill>
      {[["vivid", GOLD], ["usable", TEAL], ["empty", VIOLET]].map(([w, col], i) => (
        <At key={w} x={620 + i * 340} y={680} s={pop(t, fps, viv + i * 0.45)}><Chip color={col} size={40}>{w}</Chip></At>
      ))}
      <At x={960} y={800} o={ramp(t, viv + 1.6, 0.5)}><Glow color={GOLD} size={36} serif>all at once</Glow></At>
    </AbsoluteFill>
  );
};

/** The bridge: deck from 460 to 1460 at y 500, a central pier, end banks. brk 0..1 brings it down. */
const DECK_Y = 500;
const deckY = (x: number, brk: number) => {
  const a = (18 * brk * Math.PI) / 180;
  return x < 960 ? DECK_Y + (x - 460) * Math.tan(a) : DECK_Y + (1460 - x) * Math.tan(a);
};
const Bridge: React.FC<{ brk: number; o?: number }> = ({ brk, o = 1 }) => {
  const a = 18 * brk;
  return (
    <Svg style={{ opacity: o }}>
      <path d="M200 500 L460 500 L460 760 L200 760 Z M1460 500 L1720 500 L1720 760 L1460 760 Z" fill="#6b5a4a55" stroke="#C9A06A" strokeWidth={4} />
      <path d="M460 720 Q960 690 1460 720 L1460 770 L460 770 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={3} strokeOpacity={0.6} />
      <g transform={`rotate(${-8 * brk} 960 720)`} opacity={1 - 0.6 * brk}>
        <rect x={940} y={DECK_Y + 12} width={40} height={208} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
      </g>
      <g transform={`rotate(${a} 460 ${DECK_Y})`}>
        <rect x={460} y={DECK_Y - 12} width={498} height={24} rx={4} fill={`${CHALK}44`} stroke={CHALK} strokeWidth={4} />
        <path d={`M470 ${DECK_Y - 12} L560 ${DECK_Y - 90} L650 ${DECK_Y - 12} L740 ${DECK_Y - 90} L830 ${DECK_Y - 12} L920 ${DECK_Y - 90} L956 ${DECK_Y - 50}`} fill="none" stroke={TEAL} strokeWidth={5} />
      </g>
      <g transform={`rotate(${-a} 1460 ${DECK_Y})`}>
        <rect x={962} y={DECK_Y - 12} width={498} height={24} rx={4} fill={`${CHALK}44`} stroke={CHALK} strokeWidth={4} />
        <path d={`M964 ${DECK_Y - 50} L1000 ${DECK_Y - 90} L1090 ${DECK_Y - 12} L1180 ${DECK_Y - 90} L1270 ${DECK_Y - 12} L1360 ${DECK_Y - 90} L1450 ${DECK_Y - 12}`} fill="none" stroke={TEAL} strokeWidth={5} />
      </g>
    </Svg>
  );
};

const BridgeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const third = c("Third, functioning without inherent existence"), carries = c("A bridge carries traffic"), part = c("no single part of it is the bridge");
  const steel = c("Steel, deck, supports and the name"), holds = c("and it holds"), cross = c("A truck crosses it"), heavy = c("A truck too heavy brings it down");
  const both = c("Both outcomes are real"), own = c("to exist in its own right");
  const lx = 300 + 1320 * ramp(t, cross, 2.6);
  const hx = 300 + 600 * ramp(t, heavy, 1.4);
  const brk = ramp(t, heavy + 1.4, 0.9);
  const hy = deckY(hx, brk) - 12 + 40 * brk;
  const labels: [string, string, number, number][] = [["steel", TEAL, 560, 330], ["deck", CHALK, 820, 560], ["supports", GOLD, 1080, 640], ["the name “bridge”", VIOLET, 1340, 330]];
  return (
    <AbsoluteFill>
      <Points at={third} active={3} title="functioning, without inherent existence" />
      <AbsoluteFill style={{ opacity: ramp(t, third + 0.4, 0.6) }}><Bridge brk={brk} /></AbsoluteFill>
      <At x={960} y={250} o={between(t, carries, part - 0.2, 0.4)}><Glow color={GREEN} size={30}>it carries traffic</Glow></At>
      <At x={960} y={250} o={between(t, part, steel - 0.2, 0.4)}><Glow color={DIM} size={30}>no single part is the bridge</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, cross - 0.3, 0.4) }}>
        {labels.map(([w, col, x, y], i) => <At key={w} x={x} y={y} s={pop(t, fps, steel + i * 0.35)}><Chip color={col} size={28}>{w}</Chip></At>)}
      </AbsoluteFill>
      <At x={960} y={250} o={between(t, holds, cross - 0.2, 0.3)}><Glow color={GREEN} size={34} serif>it holds</Glow></At>
      <Svg>
        <TruckG x={lx} y={DECK_Y - 12} o={between(t, cross, heavy - 0.4, 0.3)} />
        <TruckG x={hx} y={hy} rot={18 * brk} heavy o={ramp(t, heavy, 0.3)} />
      </Svg>
      <At x={560} y={810} o={ramp(t, both, 0.5)}><Chip color={GOLD} size={30}>both outcomes: real</Chip></At>
      <Struck x={1340} y={810} at={own - 0.2} strikeAt={own + 0.8} color={DIM} size={30}>a bridge in its own right</Struck>
    </AbsoluteFill>
  );
};

const ConditionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nor = c("Nor are the conditions a hidden foundation"), pat = c("They are patterns too"), bottom = c("There is no bottom layer");
  const web = c("only the web and its vivid patterns");
  const gone = ramp(t, pat, 1.0);
  const part2 = web - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  const conds: [string, string][] = [["steel", TEAL], ["deck", CHALK], ["supports", GOLD], ["name", VIOLET]];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={110} o={ramp(t, nor, 0.5)}><Glow color={CHALK} size={40} serif>the conditions: a hidden foundation?</Glow></At>
        {conds.map(([w, col], i) => (
          <At key={w} x={480 + i * 320} y={330} s={pop(t, fps, nor + 0.3 + i * 0.2)}><Chip color={col} size={34}>{w}</Chip></At>
        ))}
        {/* a foundation slab, shown only to be removed */}
        <At x={960} y={500} o={ramp(t, nor + 1.0, 0.5) * (1 - gone)} blur={10 * gone}>
          <div style={{ width: 1300, height: 80, borderRadius: 8, background: `linear-gradient(180deg, ${WARM}55, #3a1d1d)`, border: `3px solid ${WARM}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 32, color: CHALK }}>foundation</div>
        </At>
        {conds.map(([w, col], i) => (
          <PictureFrame key={w} x={480 + i * 320} y={330} w={260} h={120} o={ramp(t, pat + 0.3 + i * 0.15, 0.4)} dashed />
        ))}
        <At x={960} y={520} o={ramp(t, pat + 0.8, 0.5)}><Glow color={GOLD} size={34} serif>patterns too, named the same way</Glow></At>
        <Struck x={960} y={680} at={bottom} strikeAt={bottom + 0.9} color={WARM} size={36}>a bottom layer</Struck>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <Web links={ramp(t, web, 1.0)} nodes={ramp(t, web + 0.2, 1.0)} glow={1} />
        <At x={960} y={130} o={ramp(t, web + 0.4, 0.5)}><Glow color={GOLD} size={40} serif>only the web, and its vivid patterns</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const WaterScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fourth = c("Fourth, karma and habit"), shaped = c("shaped by the tendencies it carries"), drink = c("People see water as something to drink");
  const home = c("Fish see it as a home"), ghost = c("hungry ghosts see it as pus and blood"), acts = c("Each version acts on the one who meets it");
  const views: [number, string, string, string, number, number][] = [
    [drink, "to drink", "#4fa8e0", "a person", 420, 400], [home, "a home", "#2fbfa8", "a fish", 960, 400], [ghost, "pus and blood", "#6b1a26", "a hungry ghost", 1500, 400],
  ];
  return (
    <AbsoluteFill>
      <Points at={fourth} active={4} title="karma and habit" />
      <At x={960} y={240} s={pop(t, fps, fourth + 0.5)}><Chip color={ICE} size={34}>water</Chip></At>
      <At x={960} y={810} o={ramp(t, shaped, 0.5) * (1 - ramp(t, acts - 0.3, 0.4))}><Glow color={DIM} size={30}>shaped by the tendencies each mind carries</Glow></At>
      {views.map(([at, label, tint, who, x, y], i) => (
        <React.Fragment key={i}>
          <Flow x1={960} y1={270} x2={x} y2={y - 60} color={ICE} p={ramp(t, at - 0.2, 0.5)} pulses={false} dash />
          <At x={x} y={y} s={pop(t, fps, at)}><Pool tint={tint} w={300} /></At>
          <At x={x} y={y + 90} o={ramp(t, at + 0.3, 0.4)}><Glow color={i === 2 ? ROSE : CHALK} size={30} serif>{label}</Glow></At>
          <At x={x} y={y + 260} s={pop(t, fps, at + 0.4) * (i === 2 ? 0.7 : 1)}>
            {i === 0 ? <Person color={GOLD} size={0.55} /> : i === 1 ? <Fish /> : <HungryGhost />}
          </At>
          <At x={x + 170} y={y + 260} o={ramp(t, at + 0.6, 0.4)}><Glow color={DIM} size={24}>{who}</Glow></At>
          <Flow x1={x + 40} y1={y + 50} x2={x + 40} y2={y + 160} color={GOLD} p={ramp(t, acts + i * 0.3, 0.5)} />
        </React.Fragment>
      ))}
      <At x={960} y={810} o={ramp(t, acts + 0.3, 0.5)}><Glow color={GOLD} size={32}>each version acts on the one who meets it</Glow></At>
    </AbsoluteFill>
  );
};

const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rope = c("A rope in dim light is seen as a snake"), fear = c("the fear is real"), never = c("though no snake was ever there");
  const hab = c("Habit is not a hidden cause behind appearances"), solid = c("come to look solid and separate");
  const lit = ramp(t, never + 0.4, 1.2);
  const part2 = hab - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={110} o={ramp(t, rope, 0.5)}><Glow color={DIM} size={36}>a rope, in dim light</Glow></At>
        <At x={820} y={460} s={pop(t, fps, rope)}><RopeSnake lit={lit} size={0.9} /></At>
        <At x={1500} y={460} o={ramp(t, fear - 0.3, 0.5)}><Person color={ROSE} size={0.8} /></At>
        {[0, 1, 2].map((k) => <Ring key={k} x={1500} y={430} p={((t - fear) * 0.8 + k / 3) % 1 * ramp(t, fear, 0.3) * (1 - lit)} r0={60} r1={170} color={ROSE} width={3} />)}
        <At x={1500} y={680} s={pop(t, fps, fear + 0.2)}><Chip color={ROSE} size={32}>the fear: real</Chip></At>
        <At x={260} y={420} o={ramp(t, never - 0.2, 0.5)}><OilLamp on={ramp(t, never + 0.2, 0.6)} /></At>
        <Ring x={260} y={380} p={ramp(t, never + 0.4, 1.4)} r0={30} r1={500} color={GOLD} />
        <At x={820} y={700} o={ramp(t, never + 0.8, 0.5)}><Glow color="#C9A06A" size={32}>no snake was ever there</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <Struck x={960} y={150} at={hab} strikeAt={hab + 1.4} color={VIOLET} size={36}>habit: a hidden cause behind</Struck>
        {[[TEAL, 560], [GOLD, 960], [ROSE, 1360]].map(([col, x], i) => {
          const s = ramp(t, solid + i * 0.2, 0.8);
          return (
            <At key={i} x={x as number} y={460} s={pop(t, fps, hab + 0.3 + i * 0.2)}>
              <div style={{ width: 200, height: 200, borderRadius: 24 - 14 * s, border: `${3 + 4 * s}px solid ${col}`, background: `${col}${s > 0.5 ? "55" : "22"}`,
                boxShadow: `0 0 ${20 + 30 * s}px ${col}88` }} />
            </At>
          );
        })}
        {[0, 1].map((k) => <At key={k} x={760 + k * 400} y={460} o={ramp(t, solid + 0.6, 0.5)}><div style={{ width: 4, height: 240, background: DIM }} /></At>)}
        <At x={960} y={720} o={ramp(t, solid + 0.3, 0.5)}><Glow color={GOLD} size={34} serif>how they come to look solid and separate</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const LoosenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("So two errors loosen together"), behind = c("Nothing stands behind appearances holding them in place");
  const unreal = c("they are not unreal");
  const merge = ramp(t, two + 1.0, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, two, 0.5)}><Glow color={CHALK} size={42} serif>two errors loosen together</Glow></At>
      <At x={560 + 400 * merge} y={420} s={pop(t, fps, two + 0.2) * (1 - 0.4 * merge)} o={1 - merge}><SolidBlock size={0.8} /></At>
      <At x={1360 - 400 * merge} y={420} s={pop(t, fps, two + 0.4) * (1 - 0.4 * merge)} o={1 - merge}><GhostBlock size={0.8} /></At>
      <At x={960} y={420} o={merge} s={0.8 + 0.2 * merge}><Coin size={1.3} /></At>
      {[0, 1].map((k) => <Ring key={k} x={960} y={420} p={((t - two) * 0.5 + k / 2) % 1 * ramp(t, two + 2.4, 0.4)} r0={100} r1={260} color={GOLD} width={2} />)}
      <At x={960} y={420} o={ramp(t, behind, 0.5) * (1 - ramp(t, behind + 1.8, 0.8))}>
        <div style={{ width: 420, height: 320, borderRadius: 20, border: `3px dashed ${WARM}`, background: `${WARM}10`, transform: "translate(40px, -30px)" }} />
      </At>
      <Struck x={960} y={680} at={behind + 0.3} strikeAt={behind + 1.5} color={WARM} size={30}>something behind, holding it in place</Struck>
      <At x={960} y={800} s={pop(t, fps, unreal)}><Chip color={GREEN} size={36}>and not unreal</Chip></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const viv = c("They are vivid, workable and empty"), cons = c("with real consequences"), grasp = c("met without the grasping"), things = c("seem like things");
  const open = ramp(t, grasp + 0.3, 1.0);
  return (
    <AbsoluteFill>
      <At x={420} y={300} s={pop(t, fps, viv - 0.2)}><Coin size={0.8} /></At>
      <At x={760} y={290} s={pop(t, fps, viv)}><Car color={TEAL} size={0.6} spin={t * 2} /></At>
      <At x={1140} y={290} s={pop(t, fps, viv + 0.2)}><Pool tint="#4fa8e0" w={220} /></At>
      <At x={1500} y={260} s={pop(t, fps, viv + 0.4)}><Tree size={0.45} /></At>
      {[["vivid", GOLD], ["workable", TEAL], ["empty", VIOLET]].map(([w, col], i) => (
        <At key={w} x={620 + i * 340} y={500} s={pop(t, fps, viv + 0.4 + i * 0.4)}><Chip color={col} size={40}>{w}</Chip></At>
      ))}
      <At x={960} y={610} o={ramp(t, cons, 0.5)}><Glow color={WARM} size={32}>with real consequences</Glow></At>
      <At x={960} y={715} o={ramp(t, grasp, 0.5)} r={-90 + 30 * open}><Hand size={110} /></At>
      <At x={960} y={812} o={ramp(t, grasp + 0.3, 0.5)}><Glow color={GOLD} size={30}>met without grasping</Glow></At>
      <Ring x={960} y={420} p={ramp(t, things, 1.6)} r0={120} r1={700} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["mirror", 0], ["solid", c("The first is familiar", 0.6)], ["mirror", c("The second is less often noticed", 0.6)],
    ["depend", c("First, mutual dependence", 0.6)], ["physics", c("Modern physics reaches a similar place", 0.6)],
    ["coin", c("Second, empty appearances", 0.6)], ["bridge", c("Third, functioning without inherent existence", 0.6)],
    ["karma", c("Fourth, karma and habit", 0.6)], ["close", c("So two errors loosen together", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The first is familiar", 0.9)], <MirrorScene />],
    [S("The first is familiar", "The second is less often noticed"), <SolidScene />],
    [S("The second is less often noticed", "First, mutual dependence"), <GhostScene />],
    [S("First, mutual dependence", "My car is its wheels"), <DependScene />],
    [S("My car is its wheels", "Modern physics reaches a similar place"), <CarScene />],
    [S("Modern physics reaches a similar place", "The Middle Way asks whether that ground"), <PhysicsScene />],
    [S("The Middle Way asks whether that ground", "Second, empty appearances"), <GroundGoneScene />],
    [S("Second, empty appearances", "Emptiness is not harmlessness either"), <CoinScene />],
    [S("Emptiness is not harmlessness either", "Emptiness does not dim appearance"), <StrikeScene />],
    [S("Emptiness does not dim appearance", "Third, functioning without inherent existence"), <VividScene />],
    [S("Third, functioning without inherent existence", "Nor are the conditions a hidden foundation"), <BridgeScene />],
    [S("Nor are the conditions a hidden foundation", "Fourth, karma and habit"), <ConditionsScene />],
    [S("Fourth, karma and habit", "A rope in dim light is seen as a snake"), <WaterScene />],
    [S("A rope in dim light is seen as a snake", "So two errors loosen together"), <RopeScene />],
    [S("So two errors loosen together", "They are vivid, workable and empty"), <LoosenScene />],
    [S("They are vivid, workable and empty", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
