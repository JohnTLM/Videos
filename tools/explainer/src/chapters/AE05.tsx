// Anatta to Emptiness, Chapter 5: The Great Desynchronization. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Life without an observer", "Activity without an actor", "seamless and spontaneous", "It feels like arrival", "one of the greatest obstacles",
  "no longer in experience", "It is in thought", "free of substance", "The way of understanding it has not", "the great desynchronization",
  "the author's own framing",
  "it feels finished", "The observer is gone", "Boundaries have softened", "What more could there be", "the world itself has not",
  "The self has dissolved", "The universe has not",
  "does not vanish with the self", "It moves", "everything else solid", "Space sits like an empty container", "Time runs like a conveyor belt",
  "Even awareness may quietly become", "Experience says there are no", "Thought keeps insisting",
  "scattered flashes", "Walking feels like the whole universe", "An old story about a chariot", "cannot join the pieces",
  "there must first be things", "then relationships, then experience", "Total exertion shows something else", "No independent things wait",
  "Nor does the relationship come first", "Relation and the things related",
  "Language keeps rebuilding", "The wind blows", "The mind thinks", "slips a noun behind", "no wind behind the blowing",
  "logic itself must be thrown away", "Logic stays exactly as it was", "the hidden premises it was fed", "a fixed subject",
  "a cause with its own power", "the great teacher of the Middle Way", "without mercy against those premises",
  "Two more traps", "the fluid substrate", "an ocean of awareness", "liquid substance replaces it",
  "spiritual bypass", "a reason to stop examining", "this is beyond concepts", "not the same as going beyond explanation",
  "The experience is genuine", "an ultimate ground",
  "Then comes a puzzle", "Anatta finds hearing with no hearer", "no sound without a hearer", "Has the old framework returned",
  "the opponent's assumption", "follows it to its collapse", "If sound exists on its own", "None can be found", "through direct looking",
  "removes it through reasoning", "The everyday hearer",
  "One last assumption", "relationships link independent participants", "When that falls", "It is the practitioner",
  "Experience and view, at last",
];

const DEEP = "#D9A441", INDIGO = "#7A78F0";
const M = {
  arrive: { a: "rgba(190,140,60,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(60,140,130,0.3)" },
  desync: { a: "rgba(110,50,120,0.45)", b: "rgba(40,100,140,0.45)", c: "rgba(170,120,60,0.3)" },
  world: { a: "rgba(50,60,140,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,90,120,0.3)" },
  pieces: { a: "rgba(40,120,140,0.5)", b: "rgba(170,140,70,0.35)", c: "rgba(80,60,150,0.3)" },
  logic: { a: "rgba(60,50,150,0.5)", b: "rgba(190,140,60,0.4)", c: "rgba(40,100,140,0.3)" },
  trap: { a: "rgba(110,50,110,0.5)", b: "rgba(60,50,140,0.45)", c: "rgba(170,110,50,0.3)" },
  puzzle: { a: "rgba(40,90,150,0.5)", b: "rgba(170,120,60,0.4)", c: "rgba(80,60,150,0.3)" },
  key: { a: "rgba(200,150,70,0.5)", b: "rgba(80,70,170,0.45)", c: "rgba(60,160,150,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Head: React.FC<{ dot: number; o?: number; dash?: boolean }> = ({ dot, o = 1, dash }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
    <circle cx={160} cy={140} r={18} fill={DEEP} opacity={dot} style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />
  </svg>
);
const Walker: React.FC<{ t: number; color?: string }> = ({ t, color = CHALK }) => (
  <svg width={120} height={220} viewBox="0 0 120 220">
    <circle cx={60} cy={30} r={22} fill="none" stroke={color} strokeWidth={5} />
    <path d={`M60 55 L60 130 M60 75 L${30 + 10 * Math.sin(t * 5)} 110 M60 75 L${90 - 10 * Math.sin(t * 5)} 110 M60 130 L${35 + 12 * Math.sin(t * 5)} 200 M60 130 L${85 - 12 * Math.sin(t * 5)} 200`}
      stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
  </svg>
);
const Ear: React.FC = () => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
    <path d="M80 110 Q60 140 40 128 Q30 120 34 100 Q20 80 22 55 Q28 15 65 15 Q100 18 98 58 Q96 80 80 90 Q70 96 72 110" fill={`${ROSE}22`} stroke={ROSE} strokeWidth={4} />
    <path d="M50 60 Q55 38 72 45 Q82 52 72 66" fill="none" stroke={ROSE} strokeWidth={3} />
  </svg>
);
const Note: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={80} height={90} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={color} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={color} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={color} />
  </svg>
);
const Boulder: React.FC = () => (
  <svg width={260} height={190} viewBox="0 0 260 190" style={{ filter: `drop-shadow(0 0 12px ${INDIGO})` }}>
    <path d="M20 180 Q10 120 50 80 Q80 30 140 26 Q210 30 236 90 Q256 140 240 180 Z" fill={`${INDIGO}44`} stroke={INDIGO} strokeWidth={5} />
    <path d="M80 90 Q110 70 140 84 M150 130 Q180 112 200 130" fill="none" stroke={CHALK} strokeWidth={2} opacity={0.4} />
  </svg>
);
const Chariot: React.FC<{ spin: number; scale?: number; color?: string }> = ({ spin, scale = 1, color = DEEP }) => (
  <svg width={520 * scale} height={300 * scale} viewBox="-60 -40 560 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M120 40 L330 40 L310 150 L140 150 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M320 130 L470 80" stroke={GOLD} strokeWidth={7} strokeLinecap="round" />
    <g transform={`translate(220 180) rotate(${spin})`}>
      <circle r={80} fill="none" stroke={ICE} strokeWidth={7} />
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={80 * Math.cos((i * Math.PI) / 4)} y2={80 * Math.sin((i * Math.PI) / 4)} stroke={ICE} strokeWidth={4} />)}
      <circle r={12} fill={ICE} />
    </g>
  </svg>
);
const Boat: React.FC = () => (
  <svg width={200} height={150} viewBox="0 0 200 150" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}>
    <path d="M20 95 L180 95 Q160 130 120 130 L70 130 Q35 130 20 95 Z" fill={`${TEAL}33`} stroke={TEAL} strokeWidth={4} />
    <line x1={100} y1={95} x2={100} y2={15} stroke={CHALK} strokeWidth={4} /><path d="M104 20 L150 85 L104 85 Z" fill={`${ICE}44`} stroke={ICE} strokeWidth={3} />
  </svg>
);
const Pendulum: React.FC<{ phase: number; color: string; label: string }> = ({ phase, color, label }) => {
  const { t } = useT();
  const a = Math.sin(t * 2.2 + phase) * 28;
  return (
    <div style={{ position: "relative", width: 260, height: 380, textAlign: "center" }}>
      <svg width={260} height={340} viewBox="0 0 260 340" style={{ overflow: "visible" }}>
        <line x1={40} y1={10} x2={220} y2={10} stroke={DIM} strokeWidth={6} strokeLinecap="round" />
        <g transform={`rotate(${a} 130 10)`}>
          <line x1={130} y1={10} x2={130} y2={260} stroke={color} strokeWidth={4} />
          <circle cx={130} cy={280} r={30} fill={color} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
        </g>
      </svg>
      <Glow color={color} size={34}>{label}</Glow>
    </div>
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
const Box: React.FC<{ size?: number; label?: string; color?: string }> = ({ size = 90, label, color = CHALK }) => (
  <div style={{ width: size, height: size, borderRadius: 8, border: `3px solid ${color}`, background: "rgba(200,200,220,0.22)", display: "flex",
    alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: size * 0.26, color: CHALK }}>{label}</div>
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
const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return <svg width={60} height={60} viewBox="0 0 60 60"><DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.4)} color={color} width={7} len={80} /></svg>;
};
const StrikeChip: React.FC<{ color: string; size?: number; strikeAt: number; children: React.ReactNode }> = ({ color, size = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
);
const Centered: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const ArriveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const obs = c("one of the greatest obstacles");
  return (
    <AbsoluteFill>
      <At x={480} y={420} s={pop(t, fps, c("Life without an observer"))}><Head dot={0} dash o={0.8} /></At>
      <At x={480} y={640} o={ramp(t, c("Life without an observer"), 0.5)}><Glow color={CHALK} size={30}>no observer</Glow></At>
      <At x={960} y={430} s={pop(t, fps, c("Activity without an actor"))}><Walker t={t} color={GOLD} /></At>
      <At x={960} y={640} o={ramp(t, c("Activity without an actor"), 0.5)}><Glow color={GOLD} size={30}>no actor</Glow></At>
      <At x={1440} y={430} o={ramp(t, c("seamless and spontaneous"), 0.6)}>
        <div style={{ width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${TEAL}55, transparent 70%)` }} />
      </At>
      <At x={1440} y={640} o={ramp(t, c("seamless and spontaneous"), 0.5)}><Glow color={TEAL} size={30}>seamless · spontaneous</Glow></At>
      <At x={960} y={150} o={ramp(t, c("It feels like arrival"), 0.5)}><Glow color={DEEP} size={46} serif>it feels like arrival</Glow></At>
      <At x={960} y={760} s={pop(t, fps, obs)}><Chip color={WARM} size={36}>and yet · an obstacle</Chip></At>
    </AbsoluteFill>
  );
};

const ObstacleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ds = c("the great desynchronization");
  const shift = ramp(t, ds, 2.5) * 2.4;
  const split = ds - 0.4;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, split, 0.5) }}>
        <At x={960} y={260} s={pop(t, fps, c("no longer in experience", 0.6))}><Boulder /></At>
        <At x={560} y={500} o={ramp(t, c("no longer in experience"), 0.4)}><StrikeChip color={TEAL} size={34} strikeAt={c("no longer in experience") + 0.8}>in experience</StrikeChip></At>
        <At x={1360} y={500} s={pop(t, fps, c("It is in thought"))}><Chip color={INDIGO} size={38}>in thought</Chip></At>
        <At x={560} y={680} o={ramp(t, c("free of substance"), 0.4)}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><Tick at={c("free of substance") + 0.2} /><Glow color={TEAL} size={34}>experience: free of substance</Glow></div></At>
        <At x={1360} y={680} o={ramp(t, c("The way of understanding it has not"), 0.4)}><Glow color={WARM} size={34}>understanding: not yet</Glow></At>
      </AbsoluteFill>
      <Scene from={split} to={1e9}>
        <At x={960} y={110} o={ramp(t, c("the author's own framing"), 0.5)}><Glow color={DIM} size={30}>the author's own framing</Glow></At>
        <Centered top={150}><Reveal text="the great desynchronization" at={ds} size={78} /></Centered>
        <At x={760} y={520} s={pop(t, fps, ds + 0.3)}><Pendulum phase={0} color={TEAL} label="experience" /></At>
        <At x={1160} y={520} s={pop(t, fps, ds + 0.5)}><Pendulum phase={shift} color={DEEP} label="understanding" /></At>
      </Scene>
    </AbsoluteFill>
  );
};

const FinishedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fin = c("it feels finished");
  const items: [string, number][] = [["observer gone", c("The observer is gone")], ["boundaries softened", c("Boundaries have softened")]];
  const world = c("the world itself has not"), self = c("The self has dissolved"), uni = c("The universe has not");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, fin, 0.5)}><Glow color={CHALK} size={42} serif>it feels finished</Glow></At>
      {items.map(([w, at], i) => (
        <At key={i} x={460} y={300 + i * 110} o={ramp(t, at, 0.4)}><div style={{ display: "flex", alignItems: "center", gap: 14 }}><Tick at={at + 0.2} color={DEEP} /><Glow color={GOLD} size={38} serif>{w}</Glow></div></At>
      ))}
      <At x={460} y={540} o={ramp(t, c("What more could there be"), 0.4)}><Glow color={CHALK} size={44}>what more?</Glow></At>
      <At x={1000} y={470} s={pop(t, fps, self - 0.3)} o={1 - ramp(t, self + 0.6, 0.8) * 0.7}><Head dot={1 - ramp(t, self + 0.2, 0.6)} dash={t > self + 0.6} /></At>
      <Crossed x={1000} y={470} at={self + 0.6} size={100} />
      <At x={1000} y={700} o={ramp(t, self, 0.4)}><Glow color={CHALK} size={32}>self · dissolved</Glow></At>
      <At x={1520} y={470} s={pop(t, fps, world)}>
        <svg width={320} height={320} viewBox="-160 -160 320 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${ICE})` }}>
          <circle r={140} fill="rgba(80,140,200,0.22)" stroke={ICE} strokeWidth={4} />
          <ellipse rx={140} ry={46} fill="none" stroke={ICE} strokeWidth={2} opacity={0.6} /><ellipse rx={56} ry={140} fill="none" stroke={ICE} strokeWidth={2} opacity={0.6} />
        </svg>
      </At>
      {Array.from({ length: 5 }).map((_, i) => (
        <At key={i} x={1430 + (i % 3) * 90} y={420 + Math.floor(i / 3) * 100} s={pop(t, fps, uni + i * 0.1)}><Box size={60} /></At>
      ))}
      <At x={1520} y={700} o={ramp(t, uni, 0.4)}><Glow color={ICE} size={32}>the universe · still solid</Glow></At>
    </AbsoluteFill>
  );
};

const MigrateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mv = c("It moves"), all = c("everything else solid"), sp = c("Space sits like an empty container"), tm = c("Time runs like a conveyor belt");
  const aw = c("Even awareness may quietly become"), es = c("Experience says there are no"), tk = c("Thought keeps insisting");
  const travel = ramp(t, mv, 1.4);
  const part2 = sp - 0.3;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, part2, 0.5) }}>
        <At x={960} y={130} o={ramp(t, c("does not vanish with the self", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>the habit of substance moves</Glow></At>
        <At x={460} y={460} s={pop(t, fps, c("does not vanish with the self"))}><Head dot={0} dash o={0.6} /></At>
        <At x={480 + 860 * travel} y={420 - 160 * Math.sin(travel * Math.PI)} o={ramp(t, c("does not vanish with the self") + 0.3, 0.4)}><Orb size={70} color={WARM} /></At>
        {Array.from({ length: 8 }).map((_, i) => (
          <At key={i} x={1180 + (i % 4) * 130} y={420 + Math.floor(i / 4) * 140} s={pop(t, fps, all + i * 0.1)}><Box size={100} label={["tree", "cup", "sky", "road", "body", "sound", "wall", "star"][i]} /></At>
        ))}
        <At x={1380} y={720} o={ramp(t, all, 0.5)}><Glow color={DIM} size={32}>everything else made solid</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={420} y={380} s={pop(t, fps, sp)}>
          <div style={{ width: 300, height: 220, border: `4px solid ${ICE}`, borderTop: "none", borderRadius: "0 0 14px 14px", background: `${ICE}18`, boxShadow: `0 0 24px ${ICE}55` }} />
        </At>
        <At x={420} y={540} o={ramp(t, sp + 0.3, 0.4)}><Glow color={ICE} size={30}>space · a container</Glow></At>
        <At x={1000} y={400} s={pop(t, fps, tm)}>
          <svg width={460} height={120} viewBox="0 0 460 120" style={{ overflow: "visible" }}>
            <rect x={10} y={70} width={440} height={30} rx={15} fill="none" stroke={GOLD} strokeWidth={4} />
            {Array.from({ length: 10 }).map((_, i) => <circle key={i} cx={30 + ((i * 44 + t * 60) % 400)} cy={85} r={6} fill={GOLD} />)}
            {[0, 1, 2].map((i) => <rect key={i} x={((i * 150 + t * 60) % 420)} y={20} width={44} height={44} rx={6} fill="rgba(200,200,220,0.25)" stroke={CHALK} strokeWidth={3} />)}
          </svg>
        </At>
        <At x={1000} y={540} o={ramp(t, tm + 0.3, 0.4)}><Glow color={GOLD} size={30}>time · a conveyor belt</Glow></At>
        <At x={1520} y={460} o={ramp(t, aw, 0.5)}><Slab w={360} crumble={ramp(t, es + 0.4, 1.6)} label="awareness · a ground?" color={VIOLET} /></At>
        <At x={560} y={760} o={ramp(t, es, 0.4)}><Chip color={TEAL} size={32}>experience: no independent things</Chip></At>
        <At x={1360} y={760} o={ramp(t, tk, 0.4)}><Chip color={WARM} size={32}>thought: there must be!</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const PiecesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fl = c("scattered flashes"), join = c("cannot join the pieces"), first = c("there must first be things"), seq = c("then relationships, then experience");
  const te = c("Total exertion shows something else"), wait = c("No independent things wait"), rel = c("Nor does the relationship come first"), tog = c("Relation and the things related");
  const part2 = first - 0.3;
  const pieces: [React.ReactNode, number, number, number][] = [
    [<Walker t={t} color={GOLD} />, 460, 420, c("Walking feels like the whole universe")], [<Chariot spin={t * 30} scale={0.45} />, 960, 360, c("An old story about a chariot")],
    [<Boat />, 1440, 440, fl + 0.6],
  ];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, part2, 0.5) }}>
        <At x={960} y={130} o={ramp(t, fl, 0.5)}><Glow color={CHALK} size={40} serif>scattered flashes</Glow></At>
        {pieces.map(([node, x, y, at], i) => (
          <At key={i} x={x + Math.sin(t + i) * 12} y={y + Math.cos(t * 0.8 + i) * 10} s={pop(t, fps, at)} r={Math.sin(t * 0.7 + i) * 6}>
            <div style={{ padding: 18, border: `2px dashed ${DIM}`, borderRadius: 16 }}>{node}</div>
          </At>
        ))}
        <At x={960} y={720} o={ramp(t, join, 0.5)}><Chip color={WARM} size={34}>the mind cannot join the pieces</Chip></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={200} o={ramp(t, first, 0.4) * (1 - ramp(t, te, 0.5) * 0.6)}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
            <Chip color={CHALK} size={34}>things</Chip><span style={{ color: CHALK, fontSize: 34, opacity: ramp(t, seq - 0.2, 0.3) }}>→</span>
            <Chip color={VIOLET} size={34} style={{ opacity: ramp(t, seq, 0.3) }}>relationships</Chip><span style={{ color: CHALK, fontSize: 34, opacity: ramp(t, seq + 0.6, 0.3) }}>→</span>
            <Chip color={TEAL} size={34} style={{ opacity: ramp(t, seq + 0.8, 0.3) }}>experience</Chip>
            <Strike at={te + 0.4} />
          </div>
        </At>
        <At x={560} y={460} o={ramp(t, wait, 0.4)}>
          <div style={{ display: "flex", gap: 20 }}><Box size={80} /><Box size={80} /></div>
          <div style={{ marginTop: 14 }}><StrikeChip color={DIM} size={26} strikeAt={wait + 1.0}>things waiting to relate</StrikeChip></div>
        </At>
        <At x={1360} y={460} o={ramp(t, rel, 0.4)}>
          <svg width={240} height={80} viewBox="0 0 240 80"><path d="M20 40 Q120 -10 220 40 Q120 90 20 40" fill="none" stroke={VIOLET} strokeWidth={5} /></svg>
          <div style={{ marginTop: 14 }}><StrikeChip color={DIM} size={26} strikeAt={rel + 1.0}>relation coming first</StrikeChip></div>
        </At>
        <At x={960} y={700} s={pop(t, fps, tog)}>
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <Orb size={70} color={GOLD} />
            <svg width={160} height={40} viewBox="0 0 160 40"><line x1={0} y1={20} x2={160} y2={20} stroke={VIOLET} strokeWidth={6} style={{ filter: `drop-shadow(0 0 6px ${VIOLET})` }} /></svg>
            <Orb size={70} color={TEAL} />
          </div>
        </At>
        <At x={960} y={800} o={ramp(t, tog + 0.4, 0.5)}><Glow color={GOLD} size={36} serif>named together, at once</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const LanguageScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lr = c("Language keeps rebuilding"), wb = c("The wind blows"), mt = c("The mind thinks"), noun = c("slips a noun behind"), nw = c("no wind behind the blowing");
  const pull = ramp(t, nw, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, lr, 0.5)}><Glow color={CHALK} size={42} serif>language rebuilds the old picture</Glow></At>
      {[["wind", "blows", wb, 360], ["mind", "thinks", mt, 600]].map(([n, v, at, y], i) => (
        <At key={i} x={960} y={y as number} s={pop(t, fps, at as number)}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ transform: `translateY(${pull * 120}px) rotate(${pull * 20}deg)`, opacity: 1 - pull }}>
              <div style={{ padding: "14px 30px", borderRadius: 10, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.25)", fontFamily: SERIF, fontSize: 56, color: CHALK,
                boxShadow: ramp(t, noun, 0.4) > 0.5 ? `0 0 30px ${WARM}` : undefined }}>{n as string}</div>
            </div>
            <Glow color={[ICE, VIOLET][i]} size={64} serif>{pull > 0.5 ? (v === "blows" ? "blowing" : "thinking") : v as string}</Glow>
          </div>
        </At>
      ))}
      <At x={960} y={790} o={ramp(t, noun, 0.4) * (1 - ramp(t, nw, 0.4))}><Chip color={WARM} size={32}>a noun slipped behind the activity</Chip></At>
      <At x={960} y={790} o={ramp(t, nw + 0.4, 0.5)}><Chip color={TEAL} size={32}>no wind behind the blowing · no thinker behind thinking</Chip></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const thrown = c("logic itself must be thrown away"), stays = c("Logic stays exactly as it was"), prem = c("the hidden premises it was fed");
  const fs = c("a fixed subject"), cp = c("a cause with its own power"), teacher = c("the great teacher of the Middle Way"), mercy = c("without mercy against those premises");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, thrown, 0.5)}><Glow color={CHALK} size={40} serif>throw logic away?</Glow></At>
      <At x={1180} y={440} s={pop(t, fps, thrown + 0.3)}>
        <svg width={300} height={300} viewBox="-150 -150 300 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${DEEP})` }}>
          <g transform={`rotate(${t * 30})`}>
            <circle r={90} fill={`${DEEP}22`} stroke={DEEP} strokeWidth={6} />
            {Array.from({ length: 10 }).map((_, i) => <rect key={i} x={-12} y={-118} width={24} height={30} rx={4} fill={DEEP} transform={`rotate(${i * 36})`} />)}
            <circle r={26} fill="none" stroke={DEEP} strokeWidth={6} />
          </g>
        </svg>
      </At>
      <At x={1180} y={640} o={ramp(t, stays, 0.5)}><div style={{ display: "flex", alignItems: "center", gap: 10 }}><Tick at={stays + 0.2} /><Glow color={GREEN} size={36}>logic stays the same</Glow></div></At>
      <At x={480} y={260} o={ramp(t, prem, 0.5)}><Glow color={WARM} size={34}>hidden premises fed in</Glow></At>
      <At x={480} y={380} s={pop(t, fps, fs)}><StrikeChip color={ROSE} size={32} strikeAt={mercy + 0.2}>a fixed subject</StrikeChip></At>
      <At x={480} y={500} s={pop(t, fps, cp)}><StrikeChip color={VIOLET} size={32} strikeAt={mercy + 0.6}>a cause with its own power</StrikeChip></At>
      <Flow x1={720} y1={440} x2={1020} y2={440} color={WARM} p={ramp(t, prem + 0.3, 0.6)} />
      <At x={720} y={720} o={ramp(t, teacher - 0.6, 0.5)}><Chip color={DEEP} size={32}>the Middle Way: ordinary logic, used without mercy</Chip></At>
    </AbsoluteFill>
  );
};

const TrapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two more traps"), fl = c("the fluid substrate"), ocean = c("an ocean of awareness"), liq = c("liquid substance replaces it");
  const by = c("spiritual bypass"), stop = c("a reason to stop examining"), bc = c("this is beyond concepts"), nb = c("not the same as going beyond explanation");
  const gen = c("The experience is genuine"), ug = c("an ultimate ground");
  const xs = Array.from({ length: 40 }, (_, i) => 220 + i * 14);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, two, 0.5)}><Glow color={WARM} size={44} serif>two more traps</Glow></At>
      <At x={500} y={210} o={ramp(t, fl, 0.4)}><Chip color={VIOLET} size={34}>the fluid substrate</Chip></At>
      <At x={500} y={340} s={pop(t, fps, fl + 0.3)}>{[0, 1, 2].map((i) => <div key={i} style={{ display: "inline-block", margin: 6 }}><Box size={60} /></div>)}</At>
      <Crossed x={500} y={340} at={fl + 1.2} size={70} />
      <Svg style={{ opacity: ramp(t, ocean, 0.5) }}>
        {[0, 1, 2].map((k) => (
          <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${500 + k * 34 + 14 * Math.sin(x / 40 - t * 2 + k)}`).join(" ")} fill="none" stroke={[VIOLET, INDIGO, TEAL][k]} strokeWidth={5} />
        ))}
      </Svg>
      <At x={500} y={640} o={ramp(t, ocean + 0.2, 0.4)}><Glow color={VIOLET} size={30}>an ocean of awareness?</Glow></At>
      <At x={500} y={730} o={ramp(t, liq, 0.4)}><Chip color={WARM} size={28}>solid substance → liquid substance</Chip></At>
      <At x={1400} y={210} o={ramp(t, by, 0.4)}><Chip color={ROSE} size={34}>spiritual bypass</Chip></At>
      <At x={1400} y={290} o={ramp(t, stop, 0.4)}><Glow color={DIM} size={28}>realization as a reason to stop looking</Glow></At>
      <At x={1400} y={400} s={pop(t, fps, bc)}>
        <div style={{ position: "relative", padding: "18px 30px", borderRadius: 24, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.15)", fontFamily: SERIF, fontSize: 40, color: CHALK }}>
          "this is beyond concepts"
        </div>
      </At>
      <At x={1400} y={510} o={ramp(t, nb, 0.4)}><Glow color={ICE} size={28}>unable to explain ≠ beyond explanation</Glow></At>
      <At x={1220} y={610} o={ramp(t, gen, 0.4)}><div style={{ display: "flex", alignItems: "center", gap: 10 }}><Tick at={gen + 0.2} /><Glow color={GREEN} size={30}>experience: genuine</Glow></div></At>
      <At x={1400} y={720} o={ramp(t, ug - 0.4, 0.4)}><Slab w={520} crumble={ramp(t, ug + 1.0, 1.6)} label="awareness · an ultimate ground?" color={VIOLET} /></At>
    </AbsoluteFill>
  );
};

const PuzzleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pz = c("Then comes a puzzle"), an = c("Anatta finds hearing with no hearer"), ns = c("no sound without a hearer"), ret = c("Has the old framework returned");
  const opp = c("the opponent's assumption"), col = c("follows it to its collapse"), ifs = c("If sound exists on its own"), none = c("None can be found");
  const look = c("through direct looking"), reason = c("removes it through reasoning"), every = c("The everyday hearer");
  const part2 = opp - 0.3;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, pz, 0.5)}><Glow color={CHALK} size={42} serif>a puzzle</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, part2, 0.5) }}>
        <At x={500} y={400} s={pop(t, fps, an)}><div style={{ display: "flex", alignItems: "center", gap: 20 }}><Note /><Ear /></div></At>
        <At x={500} y={560} o={ramp(t, an + 0.4, 0.4)}><Chip color={TEAL} size={32}>anatta: hearing, no hearer</Chip></At>
        <At x={1420} y={400} s={pop(t, fps, ns)}><Glow color={DEEP} size={48} serif>"no sound without a hearer"</Glow></At>
        <At x={1420} y={560} o={ramp(t, ns + 0.4, 0.4)}><Chip color={DEEP} size={32}>the Middle Way</Chip></At>
        <At x={960} y={700} s={pop(t, fps, ret)}><Glow color={WARM} size={44}>the old framework back?</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={220} o={ramp(t, opp, 0.4)}><Chip color={DIM} size={30}>take the opponent's assumption · follow it to its collapse</Chip></At>
        {[["sound on its own", ifs, ROSE], ["needs a hearer on its own", ifs + 1.2, GOLD], ["none found", none, WARM]].map(([w, at, cl], i) => (
          <React.Fragment key={i}>
            <At x={500 + i * 460} y={360} s={pop(t, fps, at as number)}><Chip color={cl as string} size={30}>{w as string}</Chip></At>
            {i < 2 && <Flow x1={650 + i * 460} y1={360} x2={760 + i * 460} y2={360} color={CHALK} p={ramp(t, (at as number) + 0.6, 0.4)} />}
          </React.Fragment>
        ))}
        <At x={960} y={540} o={ramp(t, look - 0.6, 0.4)}><StrikeChip color={WARM} size={32} strikeAt={reason + 0.6}>a hearer existing on its own</StrikeChip></At>
        <Flow x1={360} y1={540} x2={760} y2={540} color={TEAL} p={ramp(t, look, 0.6)} />
        <At x={360} y={620} o={ramp(t, look, 0.4)}><Glow color={TEAL} size={30}>anatta · direct looking</Glow></At>
        <Flow x1={1560} y1={540} x2={1160} y2={540} color={DEEP} p={ramp(t, reason, 0.6)} />
        <At x={1560} y={620} o={ramp(t, reason, 0.4)}><Glow color={DEEP} size={30}>the Middle Way · reasoning</Glow></At>
        <At x={960} y={760} s={pop(t, fps, every)}><Chip color={GREEN} size={36}>the everyday hearer, named with hearing, remains</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const KeyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const last = c("One last assumption"), links = c("relationships link independent participants"), falls = c("When that falls"), pr = c("It is the practitioner"), end = c("Experience and view, at last");
  const brk = ramp(t, falls, 0.8);
  const part2 = falls + 0.6;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, part2, 0.6) }}>
        <At x={960} y={130} o={ramp(t, last, 0.5)}><Glow color={CHALK} size={42} serif>one last assumption</Glow></At>
        {[0, 1, 2].map((i) => (
          <At key={i} x={560 + i * 400 + (i - 1) * 40 * brk} y={440} s={pop(t, fps, links + i * 0.2)}><Box size={110} /></At>
        ))}
        {[0, 1].map((i) => (
          <At key={i} x={760 + i * 400} y={440} o={ramp(t, links + 0.6, 0.4) * (1 - brk)}>
            <svg width={200} height={60} viewBox="0 0 200 60"><path d="M20 30 L80 30 M120 30 L180 30" stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
              <ellipse cx={100} cy={30} rx={30} ry={16} fill="none" stroke={VIOLET} strokeWidth={6} /></svg>
          </At>
        ))}
        <At x={960} y={640} o={ramp(t, links + 0.4, 0.4)}><StrikeChip color={VIOLET} size={32} strikeAt={falls}>relationships linking independent participants</StrikeChip></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={760} y={420} s={pop(t, fps, part2)}><Chariot spin={t * 40} scale={0.9} /></At>
        <At x={760} y={420} o={ramp(t, pr, 1)}><div style={{ width: 700, height: 460, borderRadius: "50%", background: `radial-gradient(ellipse, ${DEEP}44, transparent 70%)` }} /></At>
        <At x={1380} y={420} s={pop(t, fps, pr)}><Walker t={t} color={GOLD} /></At>
        <At x={1080} y={650} o={ramp(t, pr + 0.3, 0.5)}><Glow color="#FFF3D1" size={46} serif>the chariot is the practitioner</Glow></At>
        <At x={1080} y={790} o={ramp(t, end, 0.6)}><Chip color={TEAL} size={36}>experience and view · in step</Chip></At>
        <Ring x={1080} y={420} p={ramp(t, end + 0.4, 1.8)} r0={200} r1={520} color={DEEP} />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["arrive", 0], ["desync", c("no longer in experience", 0.6)], ["world", c("it feels finished", 0.6)], ["trap", c("does not vanish with the self", 0.6)],
    ["pieces", c("scattered flashes", 0.6)], ["logic", c("Language keeps rebuilding", 0.6)], ["trap", c("Two more traps", 0.6)],
    ["puzzle", c("Then comes a puzzle", 0.6)], ["key", c("One last assumption", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("no longer in experience", 0.9)], <ArriveScene />],
    [S("no longer in experience", "it feels finished"), <ObstacleScene />],
    [S("it feels finished", "does not vanish with the self"), <FinishedScene />],
    [S("does not vanish with the self", "scattered flashes"), <MigrateScene />],
    [S("scattered flashes", "Language keeps rebuilding", 1.4), <PiecesScene />],
    [S("Language keeps rebuilding", "logic itself must be thrown away"), <LanguageScene />],
    [S("logic itself must be thrown away", "Two more traps", 1.0), <LogicScene />],
    [S("Two more traps", "Then comes a puzzle"), <TrapScene />],
    [S("Then comes a puzzle", "One last assumption"), <PuzzleScene />],
    [S("One last assumption", null), <KeyScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
