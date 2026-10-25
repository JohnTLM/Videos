// Anatta to Emptiness, Bonus: Dependent Designation and the Taste of Presence. Explainer drawings timed to the narration.
// Arc: the logic of dependency (the chariot, the red) -> freedom from reification (abstraction, then reification) ->
// the direct taste of presence (no witness apart, no gap). Stance: presence, the network and dependence are never drawn
// as a base layer; a ground is shown only in order to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Imagine a chariot standing", "a horse stamps", "without a pause",
  "show you the chariot", "Take away the axle", "Take away a wheel", "the seat", "the pole, the yoke", "is not found",
  "the word never stopped working",
  "Look at the whole assembly", "over and above the arrangement", "like a seed in a fruit",
  "Nothing has been denied", "the expectation of a", "standing behind the parts",
  "This is the logic of dependency", "This arises in dependence on that", "This ceases when that ceases",
  "a first term", "a fixed substance", "an agent standing apart", "dependently designated",
  "real in the sense that it works", "being a foundation",
  "something closer than a chariot", "The redness of a patch", "the light", "the eye", "the surroundings", "and attention",
  "None of these is the redness", "Yet the redness is not apart",
  "not yet freedom", "everything is related", "survey the whole network", "a new ground", "a surveyor standing behind",
  "Where does a ground come from", "It takes two steps", "First, a common feature is abstracted", "across many assemblies",
  "across many moments", "That is useful", "Second, the abstraction is reified", "exist in its own right", "holding them up",
  "Only the second step makes a ground", "existence from its own side", "is not found in what appears",
  "A red can be just as vivid", "how the red is held", "Held as a ground", "Simply appearing", "nothing posited beneath it",
  "When reification is seen through", "The chariot was never found", "The knower is never found",
  "one finding, seen from two sides",
  "no witness standing apart", "no gap to bridge", "never holding anything up", "the immediacy of appearing",
  "the taste of presence",
  "not intensity added", "the absence of the distance", "thoughts that arise", "never harden into a wall",
  "In the author's reading", "a stopping, not an achievement", "wherever the construction is not running",
  "must not become a new ground",
  "The chariot is still in the courtyard", "The horse still stamps", "the weight of something standing behind",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  court: { a: "rgba(70,55,140,0.5)", b: "rgba(180,135,60,0.38)", c: "rgba(30,90,120,0.3)" },
  search: { a: "rgba(50,50,120,0.5)", b: "rgba(150,100,50,0.35)", c: "rgba(40,80,120,0.3)" },
  logic: { a: "rgba(40,110,130,0.5)", b: "rgba(170,130,60,0.38)", c: "rgba(80,60,150,0.32)" },
  red: { a: "rgba(160,60,80,0.45)", b: "rgba(70,60,150,0.4)", c: "rgba(170,120,60,0.3)" },
  ground: { a: "rgba(110,50,60,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(150,90,50,0.3)" },
  free: { a: "rgba(190,145,60,0.48)", b: "rgba(70,60,155,0.42)", c: "rgba(50,140,140,0.32)" },
  presence: { a: "rgba(200,155,70,0.5)", b: "rgba(90,70,170,0.4)", c: "rgba(60,150,140,0.38)" },
};

// ---------------------------------------------------------------- drawings
type PartKey = "wheel" | "axle" | "car" | "pole" | "yoke";
type Parts = Partial<Record<PartKey, { dx?: number; dy?: number; r?: number; o?: number }>>;

/** A chariot in side view whose parts can be moved away one by one. */
const Chariot: React.FC<{ parts?: Parts; color?: string; dash?: boolean; o?: number; spin?: number }> = ({ parts = {}, color = GOLD, dash, o = 1, spin = 0 }) => {
  const g = (k: PartKey) => {
    const p = parts[k] || {};
    return { transform: `translate(${p.dx || 0} ${p.dy || 0}) rotate(${p.r || 0} 0 0)`, opacity: p.o ?? 1 };
  };
  const sd = dash ? "12 10" : undefined;
  const st = { stroke: color, strokeWidth: 5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeDasharray: sd };
  return (
    <svg width={560} height={320} viewBox="0 0 560 320" style={{ overflow: "visible", opacity: o, filter: dash ? undefined : `drop-shadow(0 0 10px ${color}88)` }}>
      <g {...g("pole")}><path d="M300 170 Q400 160 500 128" fill="none" {...st} /></g>
      <g {...g("yoke")}><path d="M478 108 Q505 96 532 112 M505 100 L505 140" fill="none" {...st} /></g>
      <g {...g("car")}>
        <path d="M100 175 L110 80 Q190 60 290 92 L310 175 Z" fill={`${color}22`} {...st} />
        <path d="M120 120 L295 125" fill="none" {...st} strokeWidth={3} />
      </g>
      <g {...g("wheel")}>
        <g transform={`translate(205 220) rotate(${spin})`}>
          <circle r={88} fill={`${color}11`} {...st} />
          {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-84} transform={`rotate(${i * 45})`} {...st} strokeWidth={3} />)}
        </g>
      </g>
      <g {...g("axle")}><circle cx={205} cy={220} r={16} fill={color} stroke={color} strokeWidth={3} strokeDasharray={sd} /><path d="M175 220 L235 220" {...st} strokeWidth={7} /></g>
    </svg>
  );
};

/** A stylised horse in profile, facing right; one foreleg stamps. */
const Horse: React.FC<{ color?: string; o?: number }> = ({ color = CHALK, o = 1 }) => {
  const { t } = useT();
  const lift = Math.max(0, Math.sin(t * 3.2)) * 18;
  const st = { stroke: color, strokeWidth: 5, strokeLinecap: "round" as const, fill: "none" };
  return (
    <svg width={300} height={300} viewBox="0 0 300 300" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}66)` }}>
      <ellipse cx={130} cy={150} rx={88} ry={42} fill={`${color}14`} stroke={color} strokeWidth={5} />
      <path d="M200 130 Q225 85 232 50" {...st} />
      <path d="M232 50 L272 74 Q280 84 268 88 L240 82 Z" fill={`${color}14`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
      <path d="M228 50 L236 32" {...st} />
      <path d="M50 140 Q20 165 30 210" {...st} />
      <path d="M70 185 L64 270 M100 190 L104 272 M165 188 L160 272" {...st} />
      <path d={`M195 182 L${206} ${270 - lift}`} {...st} />
    </svg>
  );
};

/** Courtyard ground line with a few flagstones. */
const Courtyard: React.FC<{ o?: number }> = ({ o = 1 }) => (
  <Svg style={{ opacity: o }}>
    <line x1={240} y1={700} x2={1680} y2={700} stroke={DIM} strokeWidth={3} opacity={0.6} />
    {Array.from({ length: 9 }).map((_, i) => <line key={i} x1={300 + i * 160} y1={712} x2={270 + i * 160} y2={760} stroke={DIM} strokeWidth={2} opacity={0.35} />)}
  </Svg>
);

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = TEAL, size = 140 }) => (
  <svg width={size} height={size * 0.57} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
);

const Lens: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={color} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={color} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

/** A head in profile, facing right; `dash` draws it as unfindable. */
const Head: React.FC<{ o?: number; dash?: boolean; color?: string }> = ({ o = 1, dash, color = CHALK }) => (
  <svg width={240} height={272} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
  </svg>
);

const Fruit: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M75 30 Q130 25 128 85 Q120 140 75 138 Q30 140 22 85 Q20 25 75 30 Z" fill={`${ROSE}22`} stroke={ROSE} strokeWidth={4} />
    <path d="M75 30 Q80 12 92 6" fill="none" stroke={GREEN} strokeWidth={4} strokeLinecap="round" />
    <ellipse cx={75} cy={88} rx={13} ry={20} fill={GOLD} />
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

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

/** A heavy slab drawn under something to show it being taken as a ground. */
const Slab: React.FC<{ w: number; p: number; label?: string }> = ({ w, p, label }) => (
  <div style={{ width: w * p, height: 70, borderRadius: 8, margin: "0 auto",
    background: `linear-gradient(180deg, ${WARM}66, #3a1d1d)`, border: `3px solid ${WARM}`, boxShadow: `0 0 30px ${WARM}66`,
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
    {label && p > 0.8 && <span style={{ fontFamily: SERIF, fontSize: 34, color: CHALK, whiteSpace: "nowrap" }}>{label}</span>}
  </div>
);

/** A soft red patch. */
const RedPatch: React.FC<{ size?: number; vivid?: number }> = ({ size = 200, vivid = 1 }) => (
  <div style={{ width: size, height: size, borderRadius: 26, background: `radial-gradient(circle at 40% 35%, #ff7d7d, #d0303f 60%, #8e1d2b)`,
    boxShadow: `0 0 ${30 + 50 * vivid}px rgba(240,70,80,${0.4 + 0.4 * vivid})`, border: "3px solid #ffb0b0" }} />
);

// ---------------------------------------------------------------- scenes
const CourtyardScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Courtyard o={ramp(t, 0.2, 1)} />
      <At x={800} y={540} s={pop(t, fps, c("Imagine a chariot standing", 0.1))}><Chariot /></At>
      <At x={1340} y={560} o={ramp(t, c("a horse stamps", 0.4), 0.6)}><Horse /></At>
      <div style={{ position: "absolute", top: 140, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a chariot" at={c("without a pause")} size={96} />
      </div>
    </AbsoluteFill>
  );
};

const DismantleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const axle = c("Take away the axle"), wheel = c("Take away a wheel"), seat = c("the seat"), pole = c("the pole, the yoke");
  const away = (at: number, dx: number, dy: number, r = 0) => {
    const p = ramp(t, at, 0.9);
    return { dx: dx * p, dy: dy * p, r: r * p, o: 1 - 0.55 * p };
  };
  const nf = c("is not found");
  const lensU = ramp(t, nf - 1.2, 2.2);
  return (
    <AbsoluteFill>
      <Courtyard o={0.6} />
      <At x={860} y={560} s={pop(t, fps, c("show you the chariot", 0.3))}>
        <Chariot parts={{ axle: away(axle, -40, 230), wheel: away(wheel, -330, 60, -40), car: away(seat, -60, -260),
          pole: away(pole, 240, -200, -10), yoke: away(pole + 0.3, 330, -120, 20) }} />
      </At>
      {[["axle", axle, 560, 830], ["wheel", wheel, 300, 720], ["seat", seat, 640, 230], ["pole · yoke", pole, 1300, 260]].map(([w, at, x, y], i) => (
        <At key={i} x={x as number} y={y as number} o={ramp(t, (at as number) + 0.5, 0.4)}><Glow color={DIM} size={30}>{w as string}</Glow></At>
      ))}
      <At x={760 + 240 * Math.cos(lensU * Math.PI * 2)} y={520 + 110 * Math.sin(lensU * Math.PI * 2)} o={between(t, nf - 1.2, nf + 1.4)}><Lens /></At>
      <At x={1450} y={560} o={ramp(t, nf + 0.2, 0.5)}><Glow color={ICE} size={52} serif>chariot? not found</Glow></At>
      <At x={960} y={130} o={ramp(t, c("the word never stopped working"), 0.5)}><Chip color={GREEN} size={40}>the word still works</Chip></At>
    </AbsoluteFill>
  );
};

const AssemblyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const back = ramp(t, c("Look at the whole assembly", 0.4), 1.2);
  const seed = c("like a seed in a fruit");
  const q = c("over and above the arrangement");
  return (
    <AbsoluteFill>
      <Courtyard o={0.6} />
      <At x={760} y={560} o={0.5 + 0.5 * back} s={0.9 + 0.1 * back}><Chariot /></At>
      <At x={760} y={540} o={between(t, q, seed + 2.5) * 0.8} s={1.05 + 0.02 * Math.sin(t * 3)}><Chariot dash color={ICE} /></At>
      <At x={760} y={200} o={ramp(t, q + 0.3, 0.5)}><Glow color={ICE} size={36}>a chariot over and above?</Glow></At>
      <At x={1420} y={460} s={pop(t, fps, seed - 0.1)}><Fruit /></At>
      <At x={1420} y={600} o={ramp(t, seed + 0.3, 0.5)}><Glow color={ROSE} size={30}>a seed inside?</Glow></At>
      <Crossed x={1420} y={460} at={seed + 1.2} size={80} />
    </AbsoluteFill>
  );
};

const DeniedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const exp = c("the expectation of a");
  const ghost = 1 - ramp(t, c("standing behind the parts") + 0.6, 1.6);
  return (
    <AbsoluteFill>
      <Courtyard o={0.7} />
      <At x={880} y={470} o={ramp(t, exp, 0.6) * ghost * 0.7} s={1.25} blur={4 * (1 - ghost)}><Chariot dash color={VIOLET} /></At>
      <At x={820} y={560} s={pop(t, fps, c("Nothing has been denied", 0.3))}><Chariot /></At>
      <At x={1360} y={570}><Horse /></At>
      <At x={960} y={140} o={ramp(t, c("Nothing has been denied"), 0.5)}><Glow color={GREEN} size={46} serif>nothing denied</Glow></At>
      <At x={960} y={230} o={ramp(t, exp + 0.4, 0.5)}><div style={{ position: "relative" }}><Chip color={VIOLET} size={34}>a chariot-itself, behind the parts</Chip>
        <Strike at={c("standing behind the parts") + 0.6} /></div></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const arise = c("This arises in dependence on that"), cease = c("This ceases when that ceases");
  const fade1 = ramp(t, c("a first term", 0.6), 0.5);
  const dd = c("dependently designated");
  const fade2 = ramp(t, dd - 0.4, 0.5);
  const dim = 1 - 0.75 * ramp(t, cease, 0.8);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 110, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="the logic of dependency" at={c("This is the logic of dependency")} size={84} />
      </div>
      <AbsoluteFill style={{ opacity: 1 - fade1 }}>
        <At x={680} y={480} s={pop(t, fps, arise)} o={dim}><Orb size={130} color={TEAL} /><Glow color={TEAL} size={36} style={{ marginTop: 10 }}>this</Glow></At>
        <At x={1240} y={480} s={pop(t, fps, arise + 0.4)} o={dim}><Orb size={130} color={GOLD} /><Glow color={GOLD} size={36} style={{ marginTop: 10 }}>that</Glow></At>
        <Flow x1={760} y1={460} x2={1160} y2={460} color={TEAL} p={ramp(t, arise + 0.6, 0.6) * dim} />
        <Flow x1={1160} y1={500} x2={760} y2={500} color={GOLD} p={ramp(t, arise + 1.0, 0.6) * dim} />
        <At x={960} y={700} o={ramp(t, cease, 0.5)}><Glow color={DIM} size={34}>this ceases when that ceases</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: fade1 * (1 - fade2) }}>
        <At x={960} y={290} o={ramp(t, c("a first term", 0.6), 0.5)}><Glow color={CHALK} size={34}>it needs no</Glow></At>
        <Struck x={520} y={430} at={c("a first term", 0.3)} strikeAt={c("a first term") + 0.8} color={DIM}>a first term</Struck>
        <Struck x={960} y={520} at={c("a fixed substance", 0.3)} strikeAt={c("a fixed substance") + 0.8} color={DIM}>a fixed substance</Struck>
        <Struck x={1400} y={430} at={c("an agent standing apart", 0.3)} strikeAt={c("an agent standing apart") + 1.0} color={DIM}>an agent apart</Struck>
      </AbsoluteFill>
      <Scene from={dd - 0.4} to={1e9}>
        <At x={960} y={330} s={0.8}><Chariot /></At>
        <div style={{ position: "absolute", top: 530, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="dependently designated" at={dd} size={72} color={ICE} top="#F0FBFF" />
        </div>
        <At x={680} y={720} o={ramp(t, c("real in the sense that it works"), 0.5)}><Chip color={GREEN} size={36}>real · it works</Chip></At>
        <Struck x={1240} y={720} at={c("being a foundation", 0.6)} strikeAt={c("being a foundation") + 0.6} color={WARM}>a foundation</Struck>
      </Scene>
    </AbsoluteFill>
  );
};

const RedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const conds = [
    { at: c("the light"), x: 560, y: 260, col: GOLD, label: "light", icon: <Sun size={130} rot={t * 10} /> },
    { at: c("the eye"), x: 1360, y: 260, col: TEAL, label: "eye", icon: <Eye /> },
    { at: c("the surroundings"), x: 560, y: 660, col: VIOLET, label: "surroundings",
      icon: <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 34px)", gap: 6 }}>{Array.from({ length: 9 }).map((_, i) =>
        <div key={i} style={{ width: 34, height: 34, borderRadius: 6, background: i === 4 ? "transparent" : [`${VIOLET}88`, `${ICE}66`, `${GOLD}66`][i % 3] }} />)}</div> },
    { at: c("and attention"), x: 1360, y: 660, col: ICE, label: "attention", icon: <Lens /> },
  ];
  const none = c("None of these is the redness"), apart = c("Yet the redness is not apart");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("something closer than a chariot", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>closer than a chariot</Glow></At>
      <At x={960} y={460} s={pop(t, fps, c("The redness of a patch", 0.3))}><RedPatch /></At>
      {conds.map((k, i) => (
        <React.Fragment key={i}>
          <Flow x1={k.x + (k.x < 960 ? 90 : -90)} y1={k.y} x2={960 + (k.x < 960 ? -110 : 110)} y2={460 + (k.y < 460 ? -60 : 60)} color={k.col} p={ramp(t, k.at + 0.2, 0.6)} />
          <At x={k.x} y={k.y} s={pop(t, fps, k.at)}>{k.icon}</At>
          <At x={k.x} y={k.y + 105} o={ramp(t, k.at + 0.2, 0.4)}><Glow color={k.col} size={28}>{k.label}</Glow></At>
        </React.Fragment>
      ))}
      <At x={960} y={720} o={between(t, none, apart - 0.2, 0.4)}><Chip color={DIM} size={34}>none of these is the redness</Chip></At>
      <At x={960} y={720} o={ramp(t, apart, 0.5)}><Chip color={ROSE} size={34}>yet not apart from them</Chip></At>
    </AbsoluteFill>
  );
};

const NODES = Array.from({ length: 14 }, (_, i) => ({ x: 520 + rand(i) * 880, y: 500 + rand(i + 7) * 230 }));
const EDGES = NODES.flatMap((a, i) => NODES.map((b, j) => [i, j, Math.hypot(a.x - b.x, a.y - b.y)] as const))
  .filter(([i, j, d]) => i < j && d < 270);

const NetworkScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rel = c("everything is related"), survey = c("survey the whole network"), ground = c("a new ground");
  const solid = ramp(t, ground, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("not yet freedom", 0.3), 0.5)}><Glow color={WARM} size={46} serif>understanding dependence · not yet freedom</Glow></At>
      <Svg style={{ opacity: ramp(t, rel, 0.8) }}>
        {EDGES.map(([i, j], k) => <line key={k} x1={NODES[i].x} y1={NODES[i].y} x2={NODES[j].x} y2={NODES[j].y}
          stroke={solid > 0.4 ? WARM : TEAL} strokeWidth={2.5} opacity={0.55} />)}
      </Svg>
      {NODES.map((n, i) => <At key={i} x={n.x} y={n.y} s={pop(t, fps, rel + i * 0.06)}><Orb size={30} color={[TEAL, GOLD, VIOLET, ICE][i % 4]} /></At>)}
      <At x={960} y={790} o={solid}><Slab w={1000} p={solid} label="the network, taken as a ground" /></At>
      <At x={960} y={300 - 30 * ramp(t, survey, 1)} s={pop(t, fps, survey + 0.2)}><Head color={GOLD} /></At>
      <At x={1330} y={300} o={ramp(t, c("a surveyor standing behind"), 0.5)}><Glow color={GOLD} size={34}>a surveyor, standing behind</Glow></At>
    </AbsoluteFill>
  );
};

const TwoStepsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const first = c("First, a common feature is abstracted"), second = c("Second, the abstraction is reified");
  const sink = ramp(t, c("exist in its own right"), 1.2);
  const hold = ramp(t, c("holding them up"), 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Where does a ground come from", 0.3), 0.5)}><Glow color={CHALK} size={44} serif>where does a ground come from?</Glow></At>
      <At x={960} y={190} o={ramp(t, c("It takes two steps"), 0.4)}><Glow color={DIM} size={32}>two steps</Glow></At>
      {/* step 1: abstraction */}
      <At x={520} y={260} o={ramp(t, first, 0.4)}><Chip color={TEAL} size={32}>1 · abstraction</Chip></At>
      {Array.from({ length: 4 }).map((_, i) => (
        <At key={i} x={340 + i * 120} y={400} s={0.22 * pop(t, fps, c("across many assemblies") + i * 0.12)}><Chariot /></At>
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <At key={i} x={330 + i * 75} y={520} s={pop(t, fps, c("across many moments") + i * 0.08)}><Orb size={26} color={GOLD} /></At>
      ))}
      <At x={520} y={650} o={ramp(t, c("across many assemblies") + 0.8, 0.5)}><Chip color={TEAL} size={34}>"chariot" · "presence"</Chip></At>
      <At x={520} y={760} o={ramp(t, c("That is useful"), 0.4)}><Glow color={GREEN} size={32}>useful: language depends on it</Glow></At>
      {/* step 2: reification */}
      <At x={1400} y={260} o={ramp(t, second, 0.4)}><Chip color={WARM} size={32}>2 · reification</Chip></At>
      {Array.from({ length: 4 }).map((_, i) => (
        <At key={i} x={1220 + i * 120} y={480 - 20 * hold} s={0.22 * pop(t, fps, second + i * 0.1)}><Chariot /></At>
      ))}
      <At x={1400} y={420 + 210 * sink} s={pop(t, fps, second + 0.3)} o={1 - sink}><Chip color={TEAL} size={34}>"chariot"</Chip></At>
      <At x={1400} y={630} o={sink}><Slab w={560} p={sink} label="exists in its own right" /></At>
      {[1250, 1550].map((x, i) => <Flow key={i} x1={x} y1={600} x2={x} y2={530} color={WARM} p={hold} pulses={false} width={6} />)}
      <At x={1400} y={760} o={hold}><Glow color={WARM} size={32}>beneath the particulars, holding them up</Glow></At>
    </AbsoluteFill>
  );
};

const SvabhavaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const vivid = c("A red can be just as vivid"), heldG = c("Held as a ground"), simply = c("Simply appearing");
  const part2 = vivid - 0.4;
  const top = 1 - ramp(t, part2, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={200} o={ramp(t, c("Only the second step makes a ground", 0.3), 0.5)}><Glow color={WARM} size={40} serif>only the second step makes a ground</Glow></At>
        <div style={{ position: "absolute", top: 320, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="svabhāva" at={c("existence from its own side", 1.6)} size={110} color={WARM} top="#FFE2D6" />
        </div>
        <At x={960} y={520} o={ramp(t, c("existence from its own side"), 0.5)}><Glow color={CHALK} size={40}>existence from its own side</Glow></At>
        <At x={960} y={640} o={ramp(t, c("is not found in what appears"), 0.5)}><Chip color={ICE} size={36}>not found in what appears</Chip></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={120} o={ramp(t, vivid, 0.5)}><Glow color={CHALK} size={40} serif>the same red, just as vivid</Glow></At>
        <At x={960} y={200} o={ramp(t, c("how the red is held"), 0.5)}><Glow color={GOLD} size={34}>the difference is how it is held</Glow></At>
        <At x={560} y={430} s={pop(t, fps, vivid + 0.2)}><RedPatch size={170} /></At>
        <At x={1360} y={430} s={pop(t, fps, vivid + 0.4)}><RedPatch size={170} /></At>
        <At x={560} y={590} o={ramp(t, heldG, 0.5)}><Slab w={360} p={ramp(t, heldG, 0.8)} label="really there" /></At>
        <At x={560} y={700} o={ramp(t, heldG + 0.3, 0.5)}><Glow color={WARM} size={32}>held as a ground</Glow></At>
        {[[1180, 300, GOLD], [1540, 300, TEAL], [1360, 600, ICE]].map(([x, y, col], i) => (
          <React.Fragment key={i}>
            <Flow x1={x as number} y1={y as number} x2={1360} y2={430} color={col as string} p={ramp(t, simply + 0.3 + i * 0.25, 0.6)} />
            <At x={x as number} y={y as number} s={pop(t, fps, simply + 0.3 + i * 0.25)}><Orb size={40} color={col as string} /></At>
          </React.Fragment>
        ))}
        <At x={1360} y={700} o={ramp(t, simply, 0.5)}><Glow color={TEAL} size={32}>simply appearing, relating</Glow></At>
        <At x={1360} y={780} o={ramp(t, c("nothing posited beneath it"), 0.5)}><Chip color={GREEN} size={30}>nothing beneath</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const OneFindingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ch = c("The chariot was never found"), kn = c("The knower is never found"), one = c("one finding, seen from two sides");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("When reification is seen through", 0.3), 0.5)}><Glow color={GOLD} size={44} serif>reification seen through</Glow></At>
      <At x={560} y={450} s={0.75 * pop(t, fps, ch - 0.2)}><Chariot parts={{ wheel: { dx: -40 }, car: { dy: -30 }, pole: { dx: 40 } }} /></At>
      <At x={560} y={420} o={ramp(t, ch + 0.4, 0.5) * 0.8} s={0.85}><Chariot dash color={ICE} o={0.6} /></At>
      <At x={560} y={660} o={ramp(t, ch + 0.4, 0.5)}><Glow color={ICE} size={32}>no chariot beyond the parts</Glow></At>
      <At x={1360} y={440} s={pop(t, fps, kn - 0.2)}><Head dash color={ICE} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={1400} y={420} p={((t - kn) * 0.5 + k / 3) % 1 * ramp(t, kn, 0.5)} r0={40} r1={220} color={TEAL} width={2} />)}
      <At x={1360} y={660} o={ramp(t, kn + 0.4, 0.5)}><Glow color={TEAL} size={32}>no knower beyond the knowing</Glow></At>
      <At x={960} y={780} o={ramp(t, one, 0.5)}><Chip color={GOLD} size={40}>one finding · two sides</Chip></At>
    </AbsoluteFill>
  );
};

const PresenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wit = c("no witness standing apart"), gap = c("no gap to bridge"), never = c("never holding anything up");
  const imm = c("the immediacy of appearing"), taste = c("the taste of presence");
  const close = ramp(t, gap + 0.4, 1.4);
  const crumble = ramp(t, never + 0.2, 1.2);
  const part2 = imm - 0.5;
  const top = 1 - ramp(t, part2, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={620 + 200 * close} y={420} s={pop(t, fps, wit - 0.2)} o={1 - close * 0.7}><Chip color={GOLD} size={38}>witness</Chip></At>
        <At x={1300 - 200 * close} y={420} s={pop(t, fps, wit)} o={1 - close * 0.7}><Chip color={TEAL} size={38}>what appears</Chip></At>
        {/* the "gap", drawn as a pillar that turns out to hold nothing up */}
        <At x={960} y={420 + 260 * crumble} o={ramp(t, gap, 0.4) * (1 - crumble)} r={crumble * 25}>
          <div style={{ width: 50, height: 230, borderRadius: 6, border: `3px solid ${WARM}`, background: `${WARM}33` }} />
        </At>
        <At x={960} y={250} o={ramp(t, gap, 0.4)}><Glow color={WARM} size={36}>no gap to bridge</Glow></At>
        <At x={960} y={720} o={ramp(t, never, 0.5)}><Glow color={CHALK} size={34}>the gap never held anything up</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        {Array.from({ length: 22 }).map((_, i) => {
          const a = (i / 22) * Math.PI * 2 + t * 0.12, r = 120 + 300 * ramp(t, imm + i * 0.03, 1.4);
          return <At key={i} x={960 + r * Math.cos(a)} y={430 + r * 0.55 * Math.sin(a)} s={pop(t, fps, imm + i * 0.03)}>
            <Orb size={22 + (i % 3) * 12} color={[GOLD, TEAL, ROSE, VIOLET, ICE, GREEN][i % 6]} /></At>;
        })}
        <At x={960} y={430} o={ramp(t, imm, 1.2) * 0.8}><div style={{ width: 700, height: 420, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}44, transparent 70%)` }} /></At>
        <At x={960} y={430} o={ramp(t, imm + 0.4, 0.6)}><Glow color="#FFFFFF" size={44} serif>appearing, immediate</Glow></At>
        <div style={{ position: "absolute", top: 690, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="the taste of presence" at={taste} size={92} />
        </div>
      </Scene>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const add = c("not intensity added"), dist = c("the absence of the distance"), th = c("thoughts that arise"), wall = c("never harden into a wall");
  const clear = ramp(t, dist + 0.5, 1.6);
  return (
    <AbsoluteFill>
      <Struck x={960} y={140} at={add - 0.2} strikeAt={add + 0.9} color={DIM}>intensity added</Struck>
      {/* frosted pane between eye and world: the distance that mediation made */}
      <At x={430} y={420} s={pop(t, fps, dist - 0.3)}><Eye size={170} /></At>
      <At x={760} y={420} o={ramp(t, dist - 0.2, 0.4) * (1 - clear)}>
        <div style={{ width: 40, height: 380, borderRadius: 8, background: "rgba(200,210,235,0.35)", border: `2px solid ${CHALK}88`, filter: "blur(1px)" }} />
      </At>
      <At x={760} y={650} o={between(t, dist, dist + 1.8)}><Glow color={DIM} size={28}>distance</Glow></At>
      <At x={1060} y={420} s={pop(t, fps, dist)}><RedPatch size={150} vivid={0.6 + 0.4 * clear} /></At>
      <At x={760} y={210} o={ramp(t, dist + 1.2, 0.5)}><Glow color={GOLD} size={34}>no mediation · no distance</Glow></At>
      {/* thoughts arise and pass instead of stacking into a wall */}
      {Array.from({ length: 7 }).map((_, i) => {
        const s0 = th + i * 0.45, life = (t - s0) / 2.6;
        if (life < 0 || life > 1) return null;
        return <At key={i} x={1480 + (i % 3 - 1) * 90} y={620 - life * 380} o={Math.sin(life * Math.PI)}>
          <div style={{ width: 90, height: 56, borderRadius: 30, border: `3px solid ${VIOLET}`, background: `${VIOLET}33` }} /></At>;
      })}
      <At x={1480} y={700} o={ramp(t, wall, 0.5)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>a wall of thought</Chip><Strike at={wall + 0.9} /></div></At>
      <At x={1480} y={780} o={ramp(t, th, 0.5)}><Glow color={VIOLET} size={28}>arising · not followed</Glow></At>
    </AbsoluteFill>
  );
};

const Gear: React.FC<{ rot: number; color?: string }> = ({ rot, color = DIM }) => (
  <svg width={160} height={160} viewBox="-80 -80 160 160">
    <g transform={`rotate(${rot})`} fill={`${color}33`} stroke={color} strokeWidth={4}>
      {Array.from({ length: 10 }).map((_, i) => <rect key={i} x={-9} y={-74} width={18} height={22} rx={3} transform={`rotate(${i * 36})`} />)}
      <circle r={54} /><circle r={16} fill="none" />
    </g>
  </svg>
);

const StoppingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const stop = c("a stopping, not an achievement"), run = c("wherever the construction is not running"), nb = c("must not become a new ground");
  // the gears slow to rest as the construction stops running
  const a = run + 0.2, u = Math.min(1, Math.max(0, (t - a) / 1.8));
  const rot = 80 * (Math.min(t, a) + 1.8 * (u - (u * u) / 2));   // turning, then easing to rest
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("In the author's reading"), 0.5)}><Glow color={DIM} size={30}>in the author's reading</Glow></At>
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a stopping, not an achievement" at={stop} size={74} />
      </div>
      <At x={760} y={480} s={pop(t, fps, run - 0.3)}><Gear rot={rot} /></At>
      <At x={885} y={545} s={pop(t, fps, run - 0.1)}><Gear rot={-rot * 1.1 + 18} /></At>
      <At x={820} y={680} o={ramp(t, run, 0.5)}><Glow color={DIM} size={30}>the construction, not running</Glow></At>
      <At x={1330} y={460} o={ramp(t, nb - 0.8, 0.5)}><Chip color={GOLD} size={36}>"no gap, no ground"</Chip></At>
      <At x={1330} y={560} o={ramp(t, nb, 0.5)}><Slab w={360} p={ramp(t, nb, 0.6)} /></At>
      <Crossed x={1330} y={560} at={nb + 0.9} size={70} />
      <At x={1330} y={680} o={ramp(t, nb + 1.0, 0.5)}><Glow color={WARM} size={30}>not a new ground to hold</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("the weight of something standing behind");
  const lift = ramp(t, w + 0.4, 2.2);
  return (
    <AbsoluteFill>
      <Courtyard />
      <At x={820 + 30 * lift} y={470 - 260 * lift} o={0.55 * (1 - lift)} s={1.3}>
        <div style={{ width: 560, height: 300, borderRadius: 40, background: "radial-gradient(ellipse, rgba(10,10,25,0.9), transparent 70%)" }} />
      </At>
      <At x={800} y={560} s={pop(t, fps, c("The chariot is still in the courtyard", 0.3))}><Chariot /></At>
      <At x={1340} y={570} o={ramp(t, c("The horse still stamps", 0.3), 0.6)}><Horse /></At>
      <Ring x={800} y={540} p={ramp(t, w + 0.8, 2.0)} r0={160} r1={420} color={GOLD} />
      <At x={960} y={150} o={ramp(t, w + 1.2, 0.8)}><Glow color={GOLD} size={44} serif>nothing taken away</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["court", 0], ["search", c("show you the chariot", 0.6)], ["court", c("Nothing has been denied", 0.6)],
    ["logic", c("This is the logic of dependency", 0.6)], ["red", c("something closer than a chariot", 0.6)],
    ["ground", c("not yet freedom", 0.6)], ["free", c("When reification is seen through", 0.6)],
    ["presence", c("no witness standing apart", 0.6)], ["free", c("In the author's reading", 0.6)],
    ["court", c("The chariot is still in the courtyard", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("show you the chariot", 0.9)], <CourtyardScene />],
    [S("show you the chariot", "Look at the whole assembly"), <DismantleScene />],
    [S("Look at the whole assembly", "Nothing has been denied"), <AssemblyScene />],
    [S("Nothing has been denied", "This is the logic of dependency"), <DeniedScene />],
    [S("This is the logic of dependency", "something closer than a chariot"), <LogicScene />],
    [S("something closer than a chariot", "not yet freedom"), <RedScene />],
    [S("not yet freedom", "Where does a ground come from"), <NetworkScene />],
    [S("Where does a ground come from", "Only the second step makes a ground"), <TwoStepsScene />],
    [S("Only the second step makes a ground", "When reification is seen through"), <SvabhavaScene />],
    [S("When reification is seen through", "no witness standing apart"), <OneFindingScene />],
    [S("no witness standing apart", "not intensity added"), <PresenceScene />],
    [S("not intensity added", "In the author's reading"), <VividScene />],
    [S("In the author's reading", "The chariot is still in the courtyard"), <StoppingScene />],
    [S("The chariot is still in the courtyard", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
