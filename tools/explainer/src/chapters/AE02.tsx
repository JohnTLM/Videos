// Anatta to Emptiness, Chapter 2: Introduction: The Architecture of a Direct Realization. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Every building has a plan", "no one has drawn it",
  "not a history of Buddhist thought", "a commentary on one tradition", "the plan hidden inside",
  "the collapse of the observer", "No seer could be found", "No hearer behind hearing", "No thinker behind thinking",
  "solid selves and solid things", "only the beginning",
  "called total exertion", "subjects meeting objects", "a hidden ground giving rise", "Each event was wholly itself", "mostly lived",
  "Then came", "Its lesson reached far beyond", "the shape of all everyday reality", "receive their names later",
  "sharpened this with a sevenfold search", "not the same as its parts", "It is not other than them", "It does not own them",
  "It is not in them", "not their mere collection", "and not their shape", "No owner of the parts", "Yet everything still works",
  "the same logic applies everywhere", "Cause and effect", "Motion and rest", "Time and change", "Agent and action", "Arising and ceasing",
  "a final foundation dissolved",
  "a question became unavoidable", "what remains",
  "these teachings are not separate", "one coherent logic", "Logic of the Single Stroke", "his own synthesis",
  "Nothing in it is more basic", "Nothing comes first",
  "not a theory laid over experience", "what is directly lived", "slip back in through language",
  "not separate studies", "made clearer step by step", "in a single stroke",
];

const DEEP = "#D9A441", INDIGO = "#7A78F0";
const M = {
  plan: { a: "rgba(40,60,150,0.55)", b: "rgba(170,130,60,0.35)", c: "rgba(30,90,130,0.3)" },
  anatta: { a: "rgba(170,130,60,0.45)", b: "rgba(70,50,150,0.45)", c: "rgba(40,110,130,0.3)" },
  exertion: { a: "rgba(190,140,60,0.5)", b: "rgba(70,60,150,0.4)", c: "rgba(60,150,130,0.35)" },
  chariot: { a: "rgba(150,90,50,0.45)", b: "rgba(60,60,160,0.45)", c: "rgba(40,110,120,0.3)" },
  logic: { a: "rgba(60,50,150,0.5)", b: "rgba(190,140,60,0.4)", c: "rgba(40,100,140,0.3)" },
  close: { a: "rgba(190,140,60,0.45)", b: "rgba(50,50,140,0.5)", c: "rgba(60,140,140,0.3)" },
};

// ---------------------------------------------------------------- drawings
const Head: React.FC<{ dot: number; o?: number; dash?: boolean }> = ({ dot, o = 1, dash }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
    <circle cx={160} cy={140} r={18} fill={DEEP} opacity={dot} style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />
  </svg>
);
const Eye: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
);
const Note: React.FC = () => (
  <svg width={80} height={90} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={GOLD} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={GOLD} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={GOLD} />
  </svg>
);
const Thought: React.FC = () => (
  <svg width={130} height={100} viewBox="0 0 130 100" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }}>
    <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={3.5} />
    <circle cx={20} cy={84} r={6} fill={VIOLET} /><circle cx={8} cy={96} r={3.5} fill={VIOLET} />
  </svg>
);
const Book: React.FC<{ color?: string }> = ({ color = INDIGO }) => (
  <svg width={190} height={140} viewBox="0 0 190 140" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M95 30 Q55 10 12 22 L12 122 Q55 110 95 130 Q135 110 178 122 L178 22 Q135 10 95 30 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <line x1={95} y1={30} x2={95} y2={130} stroke={color} strokeWidth={3} />
  </svg>
);
const Scroll: React.FC = () => (
  <svg width={190} height={140} viewBox="0 0 190 140" style={{ filter: `drop-shadow(0 0 10px ${DEEP})` }}>
    <rect x={30} y={22} width={130} height={96} fill={`${DEEP}22`} stroke={DEEP} strokeWidth={4} />
    <rect x={14} y={14} width={22} height={112} rx={10} fill={`${DEEP}55`} stroke={DEEP} strokeWidth={3} />
    <rect x={154} y={14} width={22} height={112} rx={10} fill={`${DEEP}55`} stroke={DEEP} strokeWidth={3} />
    {[0, 1, 2, 3].map((i) => <line key={i} x1={50} y1={42 + i * 18} x2={140} y2={42 + i * 18} stroke={CHALK} strokeWidth={2} opacity={0.5} />)}
  </svg>
);

/** A blueprint house that draws itself (p 0..1). */
const Blueprint: React.FC<{ p: number }> = ({ p }) => (
  <svg width={640} height={460} viewBox="0 0 640 460" style={{ overflow: "visible" }}>
    {Array.from({ length: 9 }).map((_, i) => <line key={i} x1={i * 80} y1={0} x2={i * 80} y2={460} stroke={INDIGO} strokeWidth={1} opacity={0.35 * Math.min(1, p * 3)} />)}
    {Array.from({ length: 7 }).map((_, i) => <line key={i + 20} x1={0} y1={i * 76} x2={640} y2={i * 76} stroke={INDIGO} strokeWidth={1} opacity={0.35 * Math.min(1, p * 3)} />)}
    <DrawPath d="M120 420 L120 210 L320 70 L520 210 L520 420 Z" p={ramp(p, 0.1, 0.4)} color={ICE} width={5} len={1400} />
    <DrawPath d="M270 420 L270 300 L370 300 L370 420" p={ramp(p, 0.45, 0.25)} color={ICE} width={4} len={400} />
    <DrawPath d="M160 250 L230 250 L230 320 L160 320 Z M410 250 L480 250 L480 320 L410 320 Z" p={ramp(p, 0.6, 0.3)} color={DEEP} width={4} len={600} />
  </svg>
);

/** A chariot: wheel (spinning), body, pole. `apart` 0..1 pulls the parts away from each other. */
const Chariot: React.FC<{ spin: number; apart?: number; scale?: number }> = ({ spin, apart = 0, scale = 1 }) => {
  const dx = apart * 130;
  return (
    <svg width={520 * scale} height={300 * scale} viewBox="-60 -40 560 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${DEEP})` }}>
      <g transform={`translate(${-dx * 0.4} ${-apart * 70})`}>
        <path d="M120 40 L330 40 L310 150 L140 150 Z" fill={`${DEEP}33`} stroke={DEEP} strokeWidth={5} strokeLinejoin="round" />
      </g>
      <g transform={`translate(${dx * 1.4} ${-apart * 20})`}>
        <path d="M320 130 L470 80" stroke={GOLD} strokeWidth={7} strokeLinecap="round" />
      </g>
      <g transform={`translate(${220 - dx * 1.2} ${180 + apart * 30}) rotate(${spin})`}>
        <circle r={80} fill="none" stroke={ICE} strokeWidth={7} />
        {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={80 * Math.cos((i * Math.PI) / 4)} y2={80 * Math.sin((i * Math.PI) / 4)} stroke={ICE} strokeWidth={4} />)}
        <circle r={12} fill={ICE} />
      </g>
    </svg>
  );
};

/** Supposed ground, shown only so it can crumble away. */
const Slab: React.FC<{ w: number; crumble: number; label?: string; color?: string }> = ({ w, crumble, label, color = DEEP }) => {
  const n = 14;
  return (
    <div style={{ position: "relative", width: w, height: 70 }}>
      {Array.from({ length: n }).map((_, i) => {
        const d = Math.max(0, crumble * 1.6 - rand(i) * 0.6);
        return <div key={i} style={{ position: "absolute", left: (i * w) / n, top: 0, width: w / n + 1, height: 70, background: `${color}55`,
          borderTop: `3px solid ${color}`, opacity: Math.max(0, 1 - d), transform: `translateY(${d * 80}px) rotate(${d * (rand(i + 3) - 0.5) * 80}deg)` }} />;
      })}
      {label && <div style={{ position: "absolute", width: "100%", top: 14, opacity: 1 - crumble }}><Glow color={color} size={30}>{label}</Glow></div>}
    </div>
  );
};

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};
const Centered: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

/** The five gateways, as a small track that lights up to `upto` (0..4). */
const STEPS = ["anatta", "total exertion", "the chariot", "sevenfold search", "the Middle Way"];
const Track: React.FC<{ upto: number; o?: number }> = ({ upto, o = 1 }) => (
  <div style={{ position: "absolute", top: 40, width: "100%", display: "flex", justifyContent: "center", gap: 18, opacity: o }}>
    {STEPS.map((s, i) => (
      <div key={i} style={{ fontFamily: "SourceSans", fontSize: 24, padding: "6px 16px", borderRadius: 16, color: i === upto ? "#FFF3D1" : CHALK,
        border: `2px solid ${i <= upto ? DEEP : `${DIM}66`}`, background: i === upto ? `${DEEP}44` : "transparent", opacity: i <= upto ? 1 : 0.4,
        boxShadow: i === upto ? `0 0 18px ${DEEP}` : undefined }}>{s}</div>
    ))}
  </div>
);

// ---------------------------------------------------------------- scenes
const PlanScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const plan = c("Every building has a plan");
  const hide = c("the plan hidden inside");
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, plan, 0.6) * (1 - ramp(t, c("not a history of Buddhist thought", 0.4), 0.5) * 0.85) + ramp(t, hide, 0.6) * 0.85}>
        <Blueprint p={ramp(t, plan, 3.5)} />
      </At>
      <At x={960} y={720} o={between(t, c("no one has drawn it"), c("not a history of Buddhist thought", 0.6))}><Glow color={ICE} size={38} serif>a plan, even if never drawn</Glow></At>
      <At x={560} y={420} s={pop(t, fps, c("not a history of Buddhist thought"))} o={1 - ramp(t, hide, 0.5)}><Book /><Glow color={DIM} size={28}>a history</Glow></At>
      <Crossed x={560} y={420} at={c("not a history of Buddhist thought") + 0.8} size={80} />
      <At x={1360} y={420} s={pop(t, fps, c("a commentary on one tradition"))} o={1 - ramp(t, hide, 0.5)}><Scroll /><Glow color={DIM} size={28}>a commentary</Glow></At>
      <Crossed x={1360} y={420} at={c("a commentary on one tradition") + 0.8} size={80} />
      <At x={960} y={420} s={pop(t, fps, hide + 0.4)}><Orb size={120} color={DEEP} core={1} /></At>
      <At x={960} y={720} o={ramp(t, hide + 0.6, 0.5)}><Glow color={DEEP} size={40} serif>the plan inside a direct realization</Glow></At>
    </AbsoluteFill>
  );
};

const AnattaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const col = c("the collapse of the observer");
  const gone = ramp(t, col + 0.6, 1.2);
  const items: [React.ReactNode, string, number][] = [
    [<Eye />, "no seer", c("No seer could be found")], [<Note />, "no hearer", c("No hearer behind hearing")], [<Thought />, "no thinker", c("No thinker behind thinking")],
  ];
  const solid = c("solid selves and solid things");
  return (
    <AbsoluteFill>
      <Track upto={0} o={ramp(t, col, 0.5)} />
      <At x={460} y={460} s={pop(t, fps, col)}><Head dot={1 - gone} dash={gone > 0.5} o={1 - gone * 0.5} /></At>
      <At x={460} y={680} o={ramp(t, col + 0.4, 0.5)}><Glow color={CHALK} size={32}>the observer collapses</Glow></At>
      {items.map(([icon, label, at], i) => (
        <At key={i} x={900 + i * 330} y={330} s={pop(t, fps, at)}>
          <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
          <Glow color={GOLD} size={32}>{label}</Glow>
        </At>
      ))}
      {Array.from({ length: 6 }).map((_, i) => {
        const fall = ramp(t, solid + 0.6 + i * 0.12, 1.2);
        return <At key={i} x={940 + i * 130} y={560 + fall * 160} r={fall * (rand(i) - 0.5) * 90} o={ramp(t, solid, 0.4) * (1 - fall)}>
          <div style={{ width: 90, height: 90, borderRadius: 8, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.25)" }} /></At>;
      })}
      <At x={1260} y={700} o={ramp(t, solid + 0.3, 0.5)}><Glow color={DIM} size={30}>solid selves, solid things · falling away</Glow></At>
      <At x={960} y={820} o={ramp(t, c("only the beginning"), 0.5)}><Chip color={DEEP} size={34}>only the beginning</Chip></At>
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const so = c("subjects meeting objects", 1.3), gr = c("a hidden ground giving rise"), whole = c("Each event was wholly itself"), lived = c("mostly lived");
  const crumble = ramp(t, gr + 1.4, 1.8);
  return (
    <AbsoluteFill>
      <Track upto={1} />
      <Centered top={110}><Reveal text="total exertion" at={c("called total exertion")} size={84} /></Centered>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, whole - 0.2, 0.5) }}>
        <At x={440} y={420} s={pop(t, fps, so)}><Chip color={GOLD} size={34}>subject</Chip></At>
        <Flow x1={540} y1={420} x2={680} y2={420} color={CHALK} p={ramp(t, so + 0.3, 0.5)} />
        <At x={780} y={420} s={pop(t, fps, so + 0.4)}><Chip color={TEAL} size={34}>object</Chip></At>
        <Crossed x={610} y={420} at={so + 1.2} size={70} />
        {[0, 1, 2].map((i) => <At key={i} x={1180 + i * 170} y={430} s={pop(t, fps, gr + 0.3 + i * 0.2)}><Orb size={60} color={[TEAL, ROSE, VIOLET][i]} /></At>)}
        <At x={1350} y={560} o={ramp(t, gr, 0.5)}><Slab w={620} crumble={crumble} label="a hidden ground?" /></At>
      </AbsoluteFill>
      <Scene from={whole - 0.2} to={1e9}>
        {[0, 1, 2].map((i) => (
          <React.Fragment key={i}>
            <At x={560 + i * 400} y={440} s={pop(t, fps, whole + i * 0.3)}><Orb size={110} color={[DEEP, TEAL, INDIGO][i]} /></At>
            <Ring x={560 + i * 400} y={440} p={((t - whole) * 0.5 + i * 0.3) % 1} r0={60} r1={170} color={[DEEP, TEAL, INDIGO][i]} />
          </React.Fragment>
        ))}
        <At x={960} y={620} o={ramp(t, whole + 0.6, 0.5)}><Glow color={CHALK} size={36} serif>each event wholly itself · nothing behind it</Glow></At>
        <At x={760} y={770} o={ramp(t, lived, 0.5)}><Chip color={TEAL} size={32}>lived</Chip></At>
        <At x={1160} y={770} o={ramp(t, lived + 0.6, 0.5) * 0.6}><Chip color={DIM} size={32}>not yet thought through</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const les = c("Its lesson reached far beyond"), shape = c("the shape of all everyday reality"), names = c("receive their names later");
  const shrink = ramp(t, shape, 0.8);
  return (
    <AbsoluteFill>
      <Track upto={2} />
      <At x={960 - 520 * shrink} y={400 - 60 * shrink} s={pop(t, fps, c("Then came") + 0.3) * (1 - 0.45 * shrink)}><Chariot spin={t * 40} /></At>
      <At x={960} y={160} o={ramp(t, les, 0.5)}><Glow color={DEEP} size={40} serif>the chariot · far beyond the self</Glow></At>
      {[["a house", ICE], ["a tree", GREEN], ["a cup", ROSE], ["a person", GOLD]].map(([w, col], i) => (
        <At key={i} x={820 + i * 270} y={380} s={pop(t, fps, shape + 0.3 + i * 0.25)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <At x={1200} y={500} o={ramp(t, shape + 0.8, 0.5)}><Glow color={CHALK} size={32}>all everyday reality</Glow></At>
      <At x={960} y={700} o={ramp(t, names - 0.6, 0.5)}>
        <div style={{ position: "relative", display: "flex", gap: 20, alignItems: "center" }}>
          <Chip color={DIM} size={32}>a thing by itself</Chip><span style={{ fontSize: 34, color: CHALK }}>→</span><Chip color={DIM} size={32}>then a name</Chip>
          <Strike at={names + 0.6} />
        </div>
      </At>
    </AbsoluteFill>
  );
};

const SevenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seven = c("sharpened this with a sevenfold search");
  const items: [string, number][] = [
    ["the same as its parts", c("not the same as its parts")], ["other than its parts", c("It is not other than them")], ["owner of its parts", c("It does not own them")],
    ["in its parts", c("It is not in them")], ["containing its parts", c("It is not in them") + 0.9], ["their collection", c("not their mere collection")],
    ["their shape", c("and not their shape")],
  ];
  const owner = c("No owner of the parts"), works = c("Yet everything still works");
  const apart = ramp(t, seven + 0.6, 1.2) * (1 - ramp(t, works, 1.0));
  return (
    <AbsoluteFill>
      <Track upto={3} />
      <At x={960} y={160} o={ramp(t, seven, 0.5)}><Glow color={CHALK} size={40} serif>a sevenfold search for the chariot</Glow></At>
      <At x={960 + 300 * ramp(t, works + 0.4, 3)} y={470} s={pop(t, fps, seven) * 0.8}><Chariot spin={t * (40 + 160 * ramp(t, works, 0.5))} apart={apart} /></At>
      {items.map(([w, at], i) => {
        const left = i < 4;
        const x = left ? 300 : 1620, y = left ? 300 + i * 120 : 330 + (i - 4) * 140;
        return (
          <At key={i} x={x} y={y} o={ramp(t, at, 0.4) * (1 - ramp(t, works, 0.6))}>
            <div style={{ position: "relative" }}><Chip color={[TEAL, ROSE, VIOLET, ICE, GOLD, GREEN, INDIGO][i]} size={28}>{w}</Chip><Strike at={at + 0.6} /></div>
          </At>
        );
      })}
      <At x={960} y={720} o={between(t, owner, works - 0.2)}><Glow color={WARM} size={44} serif>no owner of the parts found</Glow></At>
      <At x={960} y={720} o={ramp(t, works + 0.2, 0.5)}><Glow color={GREEN} size={44} serif>yet it still works</Glow></At>
    </AbsoluteFill>
  );
};

const UniversalScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pairs: [string, number][] = [
    ["cause · effect", c("Cause and effect")], ["motion · rest", c("Motion and rest")], ["time · change", c("Time and change")],
    ["agent · action", c("Agent and action")], ["arising · ceasing", c("Arising and ceasing")],
  ];
  const f = c("a final foundation dissolved");
  return (
    <AbsoluteFill>
      <Track upto={4} />
      <At x={960} y={160} o={ramp(t, c("the same logic applies everywhere", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>the same logic, everywhere</Glow></At>
      {pairs.map(([w, at], i) => (
        <At key={i} x={360 + i * 300} y={380 + (i % 2) * 110} s={pop(t, fps, at)}><Chip color={[TEAL, ICE, DEEP, ROSE, VIOLET][i]} size={32}>{w}</Chip></At>
      ))}
      <At x={960} y={680} o={ramp(t, f - 1.2, 0.5)}><Slab w={1300} crumble={ramp(t, f + 0.4, 2.0)} label="a final foundation?" color={INDIGO} /></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("a question became unavoidable"), rem = c("what remains");
  return (
    <AbsoluteFill>
      <At x={960} y={380} s={pop(t, fps, q)}>
        <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 280, color: INDIGO, textShadow: `0 0 40px ${INDIGO}` }}>?</div>
      </At>
      <Centered top={620}><Reveal text="what remains?" at={rem} size={92} /></Centered>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sep = c("these teachings are not separate"), one = c("one coherent logic"), name = c("Logic of the Single Stroke");
  const syn = c("his own synthesis"), basic = c("Nothing in it is more basic"), first = c("Nothing comes first");
  const merge = ramp(t, one, 1.4);
  const ring = ramp(t, basic - 0.2, 1.0);
  const cols = [TEAL, DEEP, ICE, ROSE, VIOLET];
  return (
    <AbsoluteFill>
      {STEPS.map((s, i) => {
        const x0 = 360 + i * 300, y0 = 330;
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2 + t * 0.15;
        const xr = 960 + 230 * Math.cos(a), yr = 460 + 170 * Math.sin(a);
        const xm = x0 + (960 - x0) * merge, ym = y0 + (460 - y0) * merge;
        return <At key={i} x={xm + (xr - xm) * ring} y={ym + (yr - ym) * ring}
          s={pop(t, fps, sep + i * 0.15)} o={1 - 0.6 * merge * (1 - ring)}><Chip color={cols[i]} size={28}>{s}</Chip></At>;
      })}
      <At x={960} y={460} o={ramp(t, one + 0.4, 0.6) * (1 - ramp(t, basic - 0.3, 0.6))}><Orb size={160} color={DEEP} core={1} /></At>
      <Centered top={120}><Reveal text="the Logic of the Single Stroke" at={name} size={72} /></Centered>
      <At x={960} y={230} o={ramp(t, syn, 0.5)}><Glow color={DIM} size={30}>the author's own synthesis · not classical doctrine</Glow></At>
      <Svg style={{ opacity: ring }}>
        <ellipse cx={960} cy={460} rx={230} ry={170} fill="none" stroke={DEEP} strokeWidth={2} strokeDasharray="8 10" />
      </Svg>
      <At x={960} y={720} o={ramp(t, basic + 0.3, 0.5)}><Chip color={DEEP} size={34}>nothing more basic</Chip></At>
      <At x={960} y={810} o={ramp(t, first, 0.5)}><Chip color={INDIGO} size={34}>nothing comes first</Chip></At>
    </AbsoluteFill>
  );
};

const LivedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const th = c("not a theory laid over experience"), lived = c("what is directly lived"), slip = c("slip back in through language");
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, th - 0.2)}>
        <div style={{ position: "relative", width: 380, height: 260 }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: 16, background: `radial-gradient(circle, ${TEAL}55, transparent 75%)` }} />
          <div style={{ position: "absolute", left: 20, top: -40 - 80 * (1 - ramp(t, th + 0.3, 1)), width: 340, height: 220, border: `3px dashed ${DIM}`, borderRadius: 10,
            background: "rgba(200,200,220,0.12)", opacity: 1 - ramp(t, th + 1.6, 0.6) }} />
        </div>
      </At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, lived - 0.5, 0.4) }}><Crossed x={560} y={400} at={th + 1.0} size={90} /></AbsoluteFill>
      <At x={560} y={640} o={ramp(t, th, 0.5)}><Glow color={DIM} size={30}>not a theory laid over</Glow></At>
      <At x={560} y={420} s={pop(t, fps, lived)}><Orb size={130} color={TEAL} /></At>
      <At x={560} y={720} o={ramp(t, lived + 0.3, 0.5)}><Glow color={TEAL} size={34} serif>what is directly lived</Glow></At>
      <At x={1400} y={300} s={pop(t, fps, slip - 0.4)}><Chip color={VIOLET} size={36}>language</Chip></At>
      {Array.from({ length: 4 }).map((_, i) => {
        const p = ramp(t, slip + i * 0.25, 1.0);
        const back = ramp(t, slip + 1.2 + i * 0.1, 0.6);
        return <At key={i} x={1220 + i * 120} y={600 - p * 200 + back * 260} o={ramp(t, slip, 0.3) * (1 - back)}>
          <div style={{ width: 70, height: 70, borderRadius: 6, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.25)" }} /></At>;
      })}
      <At x={1400} y={720} o={ramp(t, slip + 0.6, 0.5)}><Glow color={CHALK} size={30}>old habits of substance, kept out</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("not separate studies"), step = c("made clearer step by step"), stroke = c("in a single stroke");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, st, 0.5)}><Glow color={CHALK} size={40} serif>one realization, made clearer</Glow></At>
      <At x={960} y={440} o={ramp(t, st, 0.6)}><Blueprint p={ramp(t, step - 0.3, 4)} /></At>
      <Svg>
        <DrawPath d="M640 820 C 760 700, 900 860, 1060 760 S 1300 700, 1300 790" p={ramp(t, stroke, 1.2)} color={DEEP} width={22} len={1000} />
      </Svg>
      <At x={960} y={440} o={ramp(t, stroke + 0.6, 1)}><div style={{ width: 760, height: 520, borderRadius: "50%", background: `radial-gradient(ellipse, ${DEEP}33, transparent 70%)` }} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["plan", 0], ["anatta", c("the collapse of the observer", 0.6)], ["exertion", c("called total exertion", 0.6)],
    ["chariot", c("Its lesson reached far beyond", 0.6)], ["logic", c("the same logic applies everywhere", 0.6)],
    ["plan", c("a question became unavoidable", 0.6)], ["logic", c("these teachings are not separate", 0.6)], ["close", c("not separate studies", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("the collapse of the observer", 0.9)], <PlanScene />],
    [S("the collapse of the observer", "called total exertion"), <AnattaScene />],
    [S("called total exertion", "Then came", 0.9), <ExertionScene />],
    [S("Then came", "sharpened this with a sevenfold search"), <ChariotScene />],
    [S("sharpened this with a sevenfold search", "the same logic applies everywhere", 0.9), <SevenScene />],
    [S("the same logic applies everywhere", "a question became unavoidable"), <UniversalScene />],
    [S("a question became unavoidable", "these teachings are not separate"), <QuestionScene />],
    [S("these teachings are not separate", "not a theory laid over experience"), <LogicScene />],
    [S("not a theory laid over experience", "not separate studies"), <LivedScene />],
    [S("not separate studies", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
