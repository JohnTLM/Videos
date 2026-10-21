// Anatta to Emptiness, Bonus: Insubstantial Appearances. Explainer drawings timed to the narration.
// Arc: a coin in the palm -> two mirrored mistakes (fixed from its own side; empty means faint) -> the one shared
// assumption, loosened by four points -> mutual dependence (long and short, parent and child, the car of relations)
// -> not flimsy, not harmless (the car in the crowd, the dream stone) -> working without a hidden substance (the
// bridge; conditions are patterns too) -> habit (water for people and fish, the rope and the snake) -> both errors
// fall away -> the coin again, held without grasping.
// Stance: relation, pattern, habit and any "ground" are never drawn as a base layer; a ground is shown only in
// order to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  "Hold a coin in your palm", "It is cool, and it has weight", "it is simply there",
  "We carry two mistakes about appearances", "The first is the familiar one", "a fixed nature of its own",
  "This habit is called reification", "the plain fact that things are there",
  "The second mistake is quieter", "we picture them as faint and ghostly", "But the coin is not faint",
  "It is vivid and solid in its working",
  "Both mistakes share one assumption", "being solid and being empty cannot go together", "Four points loosen it",
  "The first is mutual dependence", "Nothing is long or short by itself", "A stick is long beside a pebble",
  "and short beside a tree", "A person is a parent only because there is a child",
  "Your car is its wheels", "Gather those relations", "no car is found lying underneath them",
  "this is not a new ground made of relations", "The relations are as empty as the things they relate",
  "The second point is that empty appearances are not flimsy", "Nor are they harmless",
  "A car has no essence", "Yet when it swerves into a crowd, the injuries are real",
  "Its emptiness does not reduce the consequences", "It is part of why they follow",
  "In a dream, a falling stone is as heavy as any stone", "Emptiness is not a dimming of appearance",
  "It is the way appearance is",
  "The third point is that things work without a hidden substance", "A bridge carries traffic",
  "no single part of it is the bridge", "and a truck can cross", "The conditions that hold it up are patterns too",
  "Search the conditions for a fixed ground", "yet the bridge still holds",
  "The fourth point is habit", "shaped by the tendencies it has gathered", "People see water as something to drink",
  "Fish see it as home", "a coiled rope becomes a snake", "your heart pounds", "Look again",
  "the snake leaves nothing behind", "yet it was real in its effects", "It belongs to the same web",
  "So two errors fall away together", "Nothing stands behind appearances", "not unreal or disposable",
  "The coin is still cool and heavy in the hand", "It is vivid, workable and empty", "held without grasping",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
};

// ---------------------------------------------------------------- drawings
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, o = 1, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5) * o}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

/** An open palm, seen from above, drawn in outline. */
const Palm: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={420} height={420} viewBox="0 0 420 420" style={{ overflow: "visible" }}>
    <path d="M110 300 Q90 200 120 150 L130 120 Q140 95 155 120 L160 190 L170 80 Q180 55 195 80 L195 185 L210 70 Q222 45 236 70
             L232 185 L255 95 Q268 72 280 98 L268 210 L310 170 Q335 150 345 175 L290 285 Q260 360 190 365 Q130 360 110 300 Z"
      fill={`${color}10`} stroke={color} strokeWidth={4} strokeLinejoin="round" opacity={0.75} />
  </svg>
);

/** A coin: gold disc with a rim and a soft shine. ghost < 1 makes it faint (the second mistake). */
const Coin: React.FC<{ size?: number; ghost?: number; color?: string }> = ({ size = 150, ghost = 1, color = GOLD }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", opacity: ghost,
      filter: `drop-shadow(0 0 ${8 + 4 * Math.sin(t * 1.5)}px ${color}aa)` }}>
      <circle cx={50} cy={50} r={46} fill={`${color}55`} stroke={color} strokeWidth={4} strokeDasharray={ghost < 0.8 ? "6 6" : undefined} />
      <circle cx={50} cy={50} r={34} fill="none" stroke={color} strokeWidth={2} opacity={0.7} />
      <path d="M32 34 Q42 24 56 26" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity={0.5 * ghost} />
    </svg>
  );
};

/** A heavy box around a thing: "fixed from its own side". */
const Box: React.FC<{ w: number; h: number; color?: string; o?: number }> = ({ w, h, color = WARM, o = 1 }) => (
  <div style={{ width: w, height: h, borderRadius: 18, border: `6px solid ${color}`, background: `${color}14`, opacity: o,
    boxShadow: `0 0 22px ${color}66` }} />
);

/** A horizontal bar standing for a stick, pebble or tree trunk. */
const Bar: React.FC<{ w: number; h?: number; color: string }> = ({ w, h = 26, color }) => (
  <div style={{ width: w, height: h, borderRadius: h / 2, background: `${color}aa`, border: `3px solid ${color}`, boxShadow: `0 0 14px ${color}88` }} />
);

/** A simple car in side view. */
const Car: React.FC<{ color?: string; o?: number }> = ({ color = TEAL, o = 1 }) => (
  <svg width={360} height={180} viewBox="0 0 360 180" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M30 120 L50 80 L120 70 L160 30 L250 30 L290 75 L335 85 L340 120 Z" fill={`${color}22`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
    <circle cx={95} cy={125} r={28} fill="#0008" stroke={color} strokeWidth={6} />
    <circle cx={270} cy={125} r={28} fill="#0008" stroke={color} strokeWidth={6} />
  </svg>
);

/** A bridge: deck, two supports, an arch. */
const Bridge: React.FC<{ p?: number; color?: string }> = ({ p = 1, color = GOLD }) => (
  <svg width={900} height={300} viewBox="0 0 900 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}77)` }}>
    <path d="M60 120 Q450 -40 840 120" fill="none" stroke={ICE} strokeWidth={6} strokeDasharray="1200" strokeDashoffset={1200 * (1 - p)} />
    <rect x={40} y={120} width={820} height={24} rx={8} fill={`${color}44`} stroke={color} strokeWidth={5} opacity={Math.min(1, p * 2)} />
    {[180, 720].map((x) => <rect key={x} x={x - 20} y={144} width={40} height={140} rx={6} fill={`${color}33`} stroke={color} strokeWidth={5} opacity={Math.min(1, p * 2)} />)}
  </svg>
);

/** A small truck in side view. */
const Truck: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={190} height={110} viewBox="0 0 190 110" style={{ overflow: "visible" }}>
    <rect x={10} y={20} width={110} height={60} rx={6} fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M120 40 L160 40 L178 62 L178 80 L120 80 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    {[45, 150].map((x) => <circle key={x} cx={x} cy={88} r={14} fill="#0008" stroke={color} strokeWidth={5} />)}
  </svg>
);

/** Water: three wavy lines in a pool. */
const Water: React.FC<{ color?: string }> = ({ color = ICE }) => {
  const { t } = useT();
  return (
    <svg width={340} height={200} viewBox="0 0 340 200" style={{ overflow: "visible" }}>
      <ellipse cx={170} cy={110} rx={160} ry={80} fill={`${color}18`} stroke={color} strokeWidth={4} />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M60 ${80 + i * 30} q 27 ${-12 * Math.sin(t * 2 + i)} 55 0 t 55 0 t 55 0 t 55 0`} fill="none" stroke={color}
          strokeWidth={4} strokeLinecap="round" opacity={0.8} />
      ))}
    </svg>
  );
};

/** A fish. */
const Fish: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={160} height={90} viewBox="0 0 160 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 45 Q70 0 120 45 Q70 90 20 45 Z" fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M118 45 L150 20 L150 70 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={45} cy={40} r={5} fill={color} />
  </svg>
);

/** A cup to drink from. */
const Glass: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ overflow: "visible" }}>
    <path d="M15 10 L30 140 L80 140 L95 10 Z" fill={`${ICE}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M22 60 L88 60" stroke={ICE} strokeWidth={4} />
  </svg>
);

/** A coiled rope that can be read as a snake: snake (0..1) adds the head and the menace. */
const RopeSnake: React.FC<{ snake: number }> = ({ snake }) => {
  const col = snake > 0.5 ? WARM : GOLD;
  return (
    <svg width={420} height={260} viewBox="0 0 420 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 10 * snake}px ${col}aa)` }}>
      <path d="M60 200 Q20 140 90 120 Q200 90 300 130 Q380 165 320 205 Q250 245 160 215 Q110 198 150 170 Q200 140 260 165"
        fill="none" stroke={col} strokeWidth={18} strokeLinecap="round" />
      <path d="M60 200 Q20 140 90 120 Q200 90 300 130 Q380 165 320 205 Q250 245 160 215 Q110 198 150 170 Q200 140 260 165"
        fill="none" stroke="#0006" strokeWidth={4} strokeDasharray="10 12" opacity={1 - snake} />
      <g opacity={snake}>
        <ellipse cx={272} cy={160} rx={26} ry={18} fill={`${WARM}66`} stroke={WARM} strokeWidth={5} />
        <circle cx={280} cy={154} r={4} fill="#fff" />
        <path d="M296 164 L318 160 M318 160 L330 152 M318 160 L330 168" stroke={ROSE} strokeWidth={4} strokeLinecap="round" />
      </g>
    </svg>
  );
};

/** A heart that beats faster with beat (0..1). */
const Heart: React.FC<{ beat: number }> = ({ beat }) => {
  const { t } = useT();
  const s = 1 + 0.12 * beat * Math.max(0, Math.sin(t * 9));
  return (
    <svg width={130} height={120} viewBox="0 0 130 120" style={{ overflow: "visible", transform: `scale(${s})`, filter: `drop-shadow(0 0 12px ${ROSE}aa)` }}>
      <path d="M65 110 L15 60 Q-5 30 25 15 Q50 5 65 30 Q80 5 105 15 Q135 30 115 60 Z" fill={`${ROSE}55`} stroke={ROSE} strokeWidth={5} strokeLinejoin="round" />
    </svg>
  );
};

/** A web of thin lines between points, drawn as p goes 0..1. The web is never drawn under things as a floor. */
const Web: React.FC<{ pts: [number, number][]; p: number; color?: string; o?: number }> = ({ pts, p, color = VIOLET, o = 1 }) => (
  <>
    {pts.flatMap(([x1, y1], i) => pts.slice(i + 1).map(([x2, y2], j) => (
      <Flow key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} color={color} p={p * o} pulses={false} />
    )))}
  </>
);

// ---------------------------------------------------------------- scenes
const CoinScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hold = c("Hold a coin in your palm"), cool = c("It is cool, and it has weight"), there = c("it is simply there");
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 70, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="insubstantial appearances" at={0.2} size={76} />
      </div>
      <At x={960} y={520} o={ramp(t, hold, 0.6)}><Palm /></At>
      <At x={970} y={500} s={pop(t, fps, hold + 0.5)}><Coin size={150} /></At>
      <At x={620} y={420} o={ramp(t, cool, 0.5)}><Chip color={ICE} size={32}>cool</Chip></At>
      <At x={1320} y={420} o={ramp(t, cool + 0.8, 0.5)}><Chip color={GOLD} size={32}>weight</Chip></At>
      <At x={960} y={790} o={ramp(t, there, 0.5)}><Glow color={DIM} size={34}>simply there?</Glow></At>
    </AbsoluteFill>
  );
};

const FirstMistakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("We carry two mistakes about appearances"), first = c("The first is the familiar one");
  const fixed = c("a fixed nature of its own"), reif = c("This habit is called reification"), plain = c("the plain fact that things are there");
  return (
    <AbsoluteFill>
      <Title at={two}>two mistakes, mirroring each other</Title>
      <At x={560} y={300} s={pop(t, fps, two + 0.4)}><Chip color={WARM} size={30}>1</Chip></At>
      <At x={1360} y={300} s={pop(t, fps, two + 0.7)} o={0.45}><Chip color={VIOLET} size={30}>2</Chip></At>
      <At x={560} y={500} s={pop(t, fps, first)}><Coin size={140} /></At>
      <At x={560} y={500} s={pop(t, fps, fixed, 14)} o={ramp(t, fixed, 0.4)}><Box w={260} h={260} /></At>
      <At x={560} y={700} o={ramp(t, fixed + 0.3, 0.5)}><Glow color={WARM} size={34} serif>a fixed nature, from its own side</Glow></At>
      <At x={1360} y={500} o={ramp(t, reif, 0.5)}><Glow color={GOLD} size={56} serif>reification</Glow></At>
      <At x={1360} y={590} o={ramp(t, reif + 0.6, 0.5)}><Glow color={DIM} size={30}>a habit, not a view</Glow></At>
      <At x={1360} y={700} o={ramp(t, plain, 0.5)}><Glow color={CHALK} size={32}>it just feels like “they are there”</Glow></At>
    </AbsoluteFill>
  );
};

const SecondMistakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("The second mistake is quieter"), faint = c("we picture them as faint and ghostly");
  const not = c("But the coin is not faint"), vivid = c("It is vivid and solid in its working");
  const ghost = 1 - 0.7 * ramp(t, faint, 1.2) + 0.7 * ramp(t, not, 0.8);
  return (
    <AbsoluteFill>
      <Title at={q}>the second mistake</Title>
      <At x={1360} y={300} s={pop(t, fps, q + 0.3)}><Chip color={VIOLET} size={30}>2</Chip></At>
      <At x={960} y={480 - 12 * Math.sin(t * 1.3) * (1 - ramp(t, not, 0.8))} s={pop(t, fps, q + 0.2)}><Coin size={190} ghost={ghost} /></At>
      <At x={960} y={690} o={between(t, faint, not)}><Glow color={DIM} size={36} serif>empty = faint, ghostly, a shadow?</Glow></At>
      <At x={960} y={690} o={ramp(t, not, 0.5)}><Glow color={GOLD} size={40} serif>not faint</Glow></At>
      <At x={960} y={770} o={ramp(t, vivid, 0.5)}><Glow color={CHALK} size={34}>vivid and solid in its working</Glow></At>
    </AbsoluteFill>
  );
};

const AssumptionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const both = c("Both mistakes share one assumption"), cannot = c("being solid and being empty cannot go together");
  const four = c("Four points loosen it");
  const wall = 1 - ramp(t, four + 1.0, 1.4);
  const close = ramp(t, four + 1.0, 1.4);
  return (
    <AbsoluteFill>
      <Title at={both}>one shared assumption</Title>
      <At x={760 + 120 * close} y={420} s={pop(t, fps, cannot)}><Chip color={GOLD} size={40}>solid</Chip></At>
      <At x={1160 - 120 * close} y={420} s={pop(t, fps, cannot + 0.4)}><Chip color={ICE} size={40}>empty</Chip></At>
      <At x={960} y={420} o={ramp(t, cannot + 0.8, 0.4) * wall}>
        <div style={{ width: 14, height: 200, borderRadius: 7, background: WARM, boxShadow: `0 0 18px ${WARM}` }} />
      </At>
      <At x={960} y={560} o={ramp(t, cannot + 1.0, 0.5) * wall}><Glow color={WARM} size={32}>“cannot go together”</Glow></At>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={660 + i * 200} y={700} s={pop(t, fps, four + 0.2 + i * 0.25)}>
          <Chip color={[TEAL, ROSE, GOLD, VIOLET][i]} size={30}>{`${i + 1}`}</Chip>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const LongShortScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const md = c("The first is mutual dependence"), none = c("Nothing is long or short by itself");
  const peb = c("A stick is long beside a pebble"), tree = c("and short beside a tree"), par = c("A person is a parent only because there is a child");
  const showStick = 1 - ramp(t, par - 0.2, 0.5);
  return (
    <AbsoluteFill>
      <Title at={md} color={TEAL}>1 · mutual dependence</Title>
      <AbsoluteFill style={{ opacity: showStick }}>
        <At x={960} y={300} o={ramp(t, none, 0.5)}><Glow color={DIM} size={32}>long or short, by itself?</Glow></At>
        <At x={760} y={460} s={pop(t, fps, none + 0.4)}><Bar w={260} color={GOLD} /></At>
        <At x={760} y={540} o={ramp(t, none + 0.4, 0.5)}><Glow color={GOLD} size={28}>stick</Glow></At>
        <At x={1020} y={462} s={pop(t, fps, peb)} o={1 - ramp(t, tree, 0.4)}><Orb size={40} color={DIM} /></At>
        <At x={760} y={380} o={between(t, peb + 0.4, tree)}><Glow color={TEAL} size={38} serif>long</Glow></At>
        <At x={1150} y={330} s={pop(t, fps, tree)}><div style={{ transform: "rotate(-90deg)" }}><Bar w={520} h={60} color={GREEN} /></div></At>
        <At x={760} y={380} o={ramp(t, tree + 0.4, 0.4)}><Glow color={ROSE} size={38} serif>short</Glow></At>
      </AbsoluteFill>
      <At x={760} y={500} s={pop(t, fps, par)}><Orb size={110} color={VIOLET} /></At>
      <At x={1160} y={530} s={pop(t, fps, par + 0.3)}><Orb size={70} color={ROSE} /></At>
      <Flow x1={830} y1={510} x2={1110} y2={525} color={GOLD} p={ramp(t, par + 0.6, 0.6)} />
      <At x={760} y={640} o={ramp(t, par + 0.4, 0.5)}><Glow color={VIOLET} size={36} serif>“parent”</Glow></At>
      <At x={1160} y={640} o={ramp(t, par + 0.7, 0.5)}><Glow color={ROSE} size={36} serif>“child”</Glow></At>
      <At x={960} y={760} o={ramp(t, par + 1.4, 0.5)}><Glow color={DIM} size={30}>named together, neither first</Glow></At>
    </AbsoluteFill>
  );
};

const CarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const car = c("Your car is its wheels"), gather = c("Gather those relations"), found = c("no car is found lying underneath them");
  const ground = c("this is not a new ground made of relations"), emptyRel = c("The relations are as empty as the things they relate");
  const pts: [number, number][] = [[560, 360], [960, 260], [1360, 360], [1260, 620], [660, 620]];
  const labels = ["wheels", "engine", "road", "purpose", "name"];
  const carO = 1 - ramp(t, gather + 0.6, 0.8);
  const floorO = ramp(t, ground, 0.5) * (1 - ramp(t, ground + 2.0, 0.6));
  return (
    <AbsoluteFill>
      <Title at={car}>“my car”</Title>
      <At x={960} y={470} s={pop(t, fps, car)} o={carO}><Car /></At>
      {pts.map(([x, y], i) => (
        <At key={i} x={x} y={y} s={pop(t, fps, car + 0.4 + i * 0.3)}><Chip color={[TEAL, ROSE, GOLD, VIOLET, ICE][i]} size={28}>{labels[i]}</Chip></At>
      ))}
      <Web pts={pts} p={ramp(t, gather, 1.0)} color={VIOLET} o={1 - 0.6 * ramp(t, emptyRel, 1.0)} />
      <At x={960} y={470} o={ramp(t, found, 0.5)}><Glow color={DIM} size={36} serif>no car underneath</Glow></At>
      {/* a "ground of relations" is shown only in order to remove it */}
      <At x={960} y={760} o={floorO}><div style={{ width: 1000, height: 26, borderRadius: 13, background: `${VIOLET}66`, border: `3px solid ${VIOLET}` }} /></At>
      <At x={960} y={760} o={floorO}><Glow color={CHALK} size={28}>a ground made of relations?</Glow></At>
      <At x={960} y={820} o={ramp(t, ground + 1.2, 0.5) * (1 - ramp(t, emptyRel, 0.4))}><Glow color={WARM} size={32}>no</Glow></At>
      <At x={960} y={790} o={ramp(t, emptyRel + 0.4, 0.5)}><Glow color={GOLD} size={34} serif>the relations are empty too</Glow></At>
    </AbsoluteFill>
  );
};

const HarmScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const flimsy = c("The second point is that empty appearances are not flimsy"), harm = c("Nor are they harmless");
  const ess = c("A car has no essence"), crowd = c("Yet when it swerves into a crowd, the injuries are real");
  const cons = c("Its emptiness does not reduce the consequences"), why = c("It is part of why they follow");
  const drive = ramp(t, crowd, 1.2);
  return (
    <AbsoluteFill>
      <Title at={flimsy} color={ROSE}>2 · empty, not flimsy</Title>
      <At x={960} y={250} o={ramp(t, harm, 0.5)}><Glow color={DIM} size={32}>and not harmless</Glow></At>
      {/* not flimsy: the coin stays solid while the point is stated */}
      <At x={960} y={470} s={pop(t, fps, flimsy + 0.6)} o={1 - ramp(t, ess - 0.2, 0.4)}><Coin size={170} /></At>
      <At x={960} y={640} o={ramp(t, flimsy + 1.2, 0.5) * (1 - ramp(t, ess - 0.2, 0.4))}><Glow color={GOLD} size={34} serif>empty, and still solid in its working</Glow></At>
      <At x={560 + 520 * drive} y={470 + 30 * Math.sin(drive * Math.PI)} s={pop(t, fps, ess)}><Car color={TEAL} /></At>
      <At x={560} y={620} o={ramp(t, ess + 0.4, 0.5) * (1 - ramp(t, crowd, 0.4))}><Glow color={ICE} size={30}>no essence of “car”</Glow></At>
      {[0, 1, 2].map((i) => (
        <At key={i} x={1320 + i * 90} y={470 + (i % 2) * 40} s={pop(t, fps, crowd + 0.2 + i * 0.15)}><Orb size={54} color={[ROSE, GOLD, VIOLET][i]} /></At>
      ))}
      <Ring x={1400} y={490} p={ramp(t, crowd + 1.2, 1.2)} r0={60} r1={260} color={WARM} />
      <At x={1400} y={640} o={ramp(t, crowd + 1.4, 0.5)}><Glow color={WARM} size={36} serif>the injuries are real</Glow></At>
      <At x={960} y={760} o={ramp(t, cons, 0.5) * (1 - ramp(t, why, 0.4))}><Glow color={CHALK} size={32}>emptiness does not reduce the consequences</Glow></At>
      <At x={960} y={760} o={ramp(t, why + 0.2, 0.5)}><Glow color={GOLD} size={34} serif>it is part of why they follow</Glow></At>
    </AbsoluteFill>
  );
};

const DreamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dream = c("In a dream, a falling stone is as heavy as any stone"), dim = c("Emptiness is not a dimming of appearance");
  const way = c("It is the way appearance is");
  const fall = ramp(t, dream + 0.6, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, dream, 0.6)}>
        <div style={{ width: 760, height: 460, borderRadius: "50%", border: `4px dashed ${VIOLET}`, background: `${VIOLET}10` }} />
      </At>
      <At x={960} y={250} o={ramp(t, dream, 0.5)}><Glow color={VIOLET} size={32}>a dream</Glow></At>
      <At x={960} y={320 + 260 * fall * fall} s={pop(t, fps, dream + 0.3)}><Orb size={90} color={DIM} /></At>
      <At x={1260} y={480} o={ramp(t, dream + 1.6, 0.5)}><Glow color={CHALK} size={30}>heavy</Glow></At>
      <At x={960} y={760} o={ramp(t, dim, 0.5) * (1 - ramp(t, way, 0.4))}><Glow color={DIM} size={34} serif>not a dimming of appearance</Glow></At>
      <At x={960} y={760} s={pop(t, fps, way, 14)} o={ramp(t, way, 0.5)}><Glow color={GOLD} size={42} serif>the way appearance is</Glow></At>
    </AbsoluteFill>
  );
};

const BridgeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const third = c("The third point is that things work without a hidden substance"), traffic = c("A bridge carries traffic");
  const part = c("no single part of it is the bridge"), truck = c("and a truck can cross");
  const pat = c("The conditions that hold it up are patterns too"), search = c("Search the conditions for a fixed ground");
  const holds = c("yet the bridge still holds");
  const cross = ramp(t, truck, 3.0);
  const labels: [string, number, number, string][] = [["steel", 560, 330, ICE], ["deck", 960, 330, GOLD], ["supports", 1360, 330, TEAL], ["name", 960, 250, VIOLET]];
  const lens = ramp(t, search, 2.4);
  return (
    <AbsoluteFill>
      <Title at={third} color={GOLD}>3 · working without a hidden substance</Title>
      <At x={960} y={520} o={ramp(t, traffic, 0.5)}><Bridge p={ramp(t, traffic, 1.4)} /></At>
      {labels.map(([w, x, y, col], i) => (
        <At key={i} x={x} y={y} o={ramp(t, part + i * 0.3, 0.4) * (1 - ramp(t, pat, 0.4))}><Chip color={col} size={26}>{`${w}: not “the bridge”`}</Chip></At>
      ))}
      <At x={560 + 800 * cross} y={430} o={ramp(t, truck, 0.3) * (1 - ramp(t, truck + 3.2, 0.4))}><Truck /></At>
      <At x={960} y={330} o={ramp(t, pat, 0.5)}><Glow color={VIOLET} size={32}>the conditions: patterns too</Glow></At>
      <At x={760 + 440 * lens} y={720 + 30 * Math.sin(lens * 8)} o={between(t, search, holds)}>
        <svg width={120} height={120} viewBox="0 0 120 120"><circle cx={50} cy={50} r={36} fill={`${ICE}22`} stroke={ICE} strokeWidth={6} />
          <path d="M77 77 L110 110" stroke={ICE} strokeWidth={10} strokeLinecap="round" /></svg>
      </At>
      <At x={960} y={830} o={ramp(t, search + 1.0, 0.5) * (1 - ramp(t, holds, 0.4))}><Glow color={DIM} size={30}>no fixed ground found</Glow></At>
      <At x={960} y={800} s={pop(t, fps, holds, 14)} o={ramp(t, holds, 0.5)}><Glow color={GOLD} size={40} serif>yet the bridge still holds</Glow></At>
    </AbsoluteFill>
  );
};

const WaterScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const habit = c("The fourth point is habit"), tend = c("shaped by the tendencies it has gathered");
  const drink = c("People see water as something to drink"), home = c("Fish see it as home");
  return (
    <AbsoluteFill>
      <Title at={habit} color={VIOLET}>4 · habit</Title>
      <At x={960} y={240} o={ramp(t, tend, 0.5)}><Glow color={DIM} size={32}>what appears is shaped by gathered tendencies</Glow></At>
      <At x={960} y={520} s={pop(t, fps, drink - 0.3)}><Water /></At>
      <At x={560} y={480} s={pop(t, fps, drink + 0.3)}><Glass /></At>
      <At x={560} y={640} o={ramp(t, drink + 0.6, 0.5)}><Glow color={ICE} size={32} serif>to drink</Glow></At>
      <At x={1380} y={500} s={pop(t, fps, home)}><Fish /></At>
      <At x={1380} y={640} o={ramp(t, home + 0.4, 0.5)}><Glow color={TEAL} size={32} serif>home</Glow></At>
    </AbsoluteFill>
  );
};

const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const snake = c("a coiled rope becomes a snake"), heart = c("your heart pounds"), again = c("Look again");
  const nothing = c("the snake leaves nothing behind"), real = c("yet it was real in its effects"), web = c("It belongs to the same web");
  const s = ramp(t, snake + 0.4, 0.8) * (1 - ramp(t, again + 0.3, 0.8));
  return (
    <AbsoluteFill>
      <At x={760} y={470} s={pop(t, fps, snake - 0.4)}><RopeSnake snake={s} /></At>
      <At x={760} y={300} o={between(t, snake + 0.5, again + 0.3)}><Glow color={WARM} size={40} serif>snake!</Glow></At>
      <At x={760} y={300} o={ramp(t, again + 0.6, 0.5)}><Glow color={GOLD} size={40} serif>rope</Glow></At>
      <At x={1340} y={450} s={pop(t, fps, heart)}><Heart beat={1 - ramp(t, again + 0.5, 1.0)} /></At>
      <At x={760} y={680} o={ramp(t, nothing, 0.5)}><Glow color={DIM} size={30}>no snake left behind</Glow></At>
      <At x={1340} y={600} o={ramp(t, real, 0.5)}><Glow color={ROSE} size={32}>the fear: real in its effects</Glow></At>
      <At x={960} y={790} o={ramp(t, web, 0.5)}><Glow color={VIOLET} size={34} serif>habit belongs to the same web</Glow></At>
    </AbsoluteFill>
  );
};

const ErrorsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("So two errors fall away together"), behind = c("Nothing stands behind appearances"), unreal = c("not unreal or disposable");
  const fall = ramp(t, two + 0.8, 1.2);
  return (
    <AbsoluteFill>
      <Title at={two}>two errors fall away together</Title>
      <At x={600} y={430 + 280 * fall} o={1 - fall}><Box w={220} h={220} /></At>
      <At x={600} y={590} o={ramp(t, two, 0.4) * (1 - fall)}><Glow color={WARM} size={28}>fixed from its own side</Glow></At>
      <At x={1320} y={430 + 280 * fall} o={1 - fall}><Coin size={150} ghost={0.35} color={VIOLET} /></At>
      <At x={1320} y={560} o={ramp(t, two, 0.4) * (1 - fall)}><Glow color={VIOLET} size={28}>empty = faint</Glow></At>
      <At x={960} y={470} s={pop(t, fps, behind)}><Coin size={180} /></At>
      <At x={960} y={670} o={ramp(t, behind + 0.3, 0.5)}><Glow color={CHALK} size={32}>nothing behind it, holding it in place</Glow></At>
      <At x={960} y={750} o={ramp(t, unreal, 0.5)}><Glow color={GOLD} size={32}>and not unreal or disposable</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const still = c("The coin is still cool and heavy in the hand"), vivid = c("It is vivid, workable and empty"), held = c("held without grasping");
  const open = ramp(t, held, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={500} o={ramp(t, still - 0.3, 0.8)}><Palm color={GOLD} /></At>
      <At x={970} y={480 - 10 * open} s={pop(t, fps, still)}><Coin size={160} /></At>
      {(["vivid", "workable", "empty"] as const).map((w, i) => (
        <At key={w} x={620 + i * 340} y={250} s={pop(t, fps, vivid + 0.3 + i * 0.45)}><Chip color={[GOLD, TEAL, ICE][i]} size={32}>{w}</Chip></At>
      ))}
      <Ring x={970} y={480} p={ramp(t, held + 0.2, 2.6)} r0={100} r1={560} color={GOLD} />
      <At x={960} y={790} s={pop(t, fps, held, 16)} o={ramp(t, held, 0.8)}><Glow color={GOLD} size={44} serif>held without grasping</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["doubt", c("We carry two mistakes about appearances", 0.6)], ["search", c("Both mistakes share one assumption", 0.6)],
    ["web", c("The first is mutual dependence", 0.6)], ["doubt", c("The second point is that empty appearances are not flimsy", 0.6)],
    ["whole", c("In a dream, a falling stone is as heavy as any stone", 0.6)],
    ["search", c("The third point is that things work without a hidden substance", 0.6)],
    ["web", c("The fourth point is habit", 0.6)], ["whole", c("So two errors fall away together", 0.6)],
    ["vivid", c("The coin is still cool and heavy in the hand", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("We carry two mistakes about appearances", 0.9)], <CoinScene />],
    [S("We carry two mistakes about appearances", "The second mistake is quieter"), <FirstMistakeScene />],
    [S("The second mistake is quieter", "Both mistakes share one assumption"), <SecondMistakeScene />],
    [S("Both mistakes share one assumption", "The first is mutual dependence"), <AssumptionScene />],
    [S("The first is mutual dependence", "Your car is its wheels"), <LongShortScene />],
    [S("Your car is its wheels", "The second point is that empty appearances are not flimsy"), <CarScene />],
    [S("The second point is that empty appearances are not flimsy", "In a dream, a falling stone is as heavy as any stone"), <HarmScene />],
    [S("In a dream, a falling stone is as heavy as any stone", "The third point is that things work without a hidden substance"), <DreamScene />],
    [S("The third point is that things work without a hidden substance", "The fourth point is habit"), <BridgeScene />],
    [S("The fourth point is habit", "a coiled rope becomes a snake"), <WaterScene />],
    [S("a coiled rope becomes a snake", "So two errors fall away together"), <RopeScene />],
    [S("So two errors fall away together", "The coin is still cool and heavy in the hand"), <ErrorsScene />],
    [S("The coin is still cool and heavy in the hand", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
