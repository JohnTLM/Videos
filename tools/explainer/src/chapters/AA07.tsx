// After Anatta 7: Function Without Substance (The Logic, Step 7). Explainer drawings timed to the narration.
// Arc: the koan leaves a worry (how does anything happen?) -> function never needed an "it" -> two opposite conclusions
// share one premise -> drop it: the bell is heard, the clock keeps time -> the bell both ways, and the stairs ->
// where the power is not: the knife, the key and the lock, the door opens -> a moment with its own nature would be sealed ->
// the baker and the baking, actions bear fruit -> the critic's objection reversed, the anvil -> emptiness is not a power,
// a space or a store of potential -> empty is not flimsy: the red light and the truck -> lightning and flashing ->
// the author's lag: participants not found before the participation -> reality without a ground -> the painted rice cake ->
// self, object, cause, person -> try it.
// Stance: emptiness is drawn only as the not-finding, never as a ground, power, container or backdrop. The floor is drawn
// only to be taken away, and "dependent arising as a new ground" is struck too. Each invented "it", inner power, own-nature,
// store of potential and real thing underneath is shown only to be struck. The bell, clock, key, door, red light, seed,
// chair and the person stay vivid: conventional things really work.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the worry
  "The koan of Step 1 ends with no moment found", "how does anything happen",
  "How is a sound heard", "How does an action bear fruit",
  "This is the seventh step of The Logic", "Its answer is not that emptiness does the work", "function never needed an it",
  // one premise
  "Two opposite conclusions are drawn from the koan", "there must be a real moment of sound", "then nothing happens",
  "But they share one premise", "happening needs an it for the happening to happen to",
  "Drop that premise, and both conclusions go", "The bell is heard", "The clock keeps time",
  "And there is no it behind the working", "Each works as designated",
  // the bell both ways
  "Seen with the logic of substance, a moment of sound", "Its power to be heard sits inside it",
  "it looks as if the hearing has gone too",
  "Seen with the logic of dependency, it is the same bell", "Bell, air, ear and attention come together",
  "They part, and it ceased is said", "The hearing is complete", "It is like the stairs of Step 1", "yet really climbed",
  // where the power is not
  "We habitually treat function as a power inside the thing", "like a knife's power to cut",
  "as if it held the next one inside it",
  "Look for the power, and it is not found there", "A key opens this lock and no other", "In the wrong lock, it opens nothing",
  "is not an inner property", "Key, lock, hand and turning are named together", "and the door opens",
  "The sound came from no store, and went into none",
  // a moment with its own nature
  "Now turn the koan round", "Suppose this moment existed by itself", "Could it arise or cease",
  "an own-nature is exactly what does not become other", "Such a moment could not change, combine or act",
  "Conditions could not reach it", "It would be sealed",
  // the baker, and karma
  "Nagarjuna makes the point with a baker", "a baker who never bakes", "the agent proceeds in dependence on the action",
  "so it could never have been done", "Yet actions are done, and they bear fruit",
  // the reply to the critic
  "A critic objects", "Nagarjuna answers that the picture is backwards", "If things were not empty",
  "It is own-nature, not emptiness, that breaks the chain", "fixed like an anvil",
  "for whom emptiness fits, everything fits",
  "But this does not make emptiness a power", "or an open space they happen in", "Emptiness causes nothing",
  "what dependence comes to when it is examined", "The same goes for potential",
  "A rope can be seen as a snake in dim light", "A shadow cannot be walked across as a bridge",
  // empty is not flimsy
  "Empty is not flimsy", "A car with no essence can still hurt you", "A disc of red light stops a forty-tonne truck",
  "it is a coloured lamp", "Yet nothing is more effective", "Empty things act on empty things",
  // lightning
  "Come back to the koan's words", "sounds like a moment to which arising and ceasing happen",
  "But there is no lightning apart from the flashing", "the arising and ceasing is the moment",
  "The clock still ticks", "Only the passenger is let go",
  // the author's lag
  "this was where his own view lagged behind", "After 1997 the doer had gone",
  "he still imagined an ear here and a bell there", "as if things existed first and then met",
  "the participants are not found before the participation", "In his seven phases, this is phase six",
  // reality without a ground
  "no longer a secondary layer", "There is no real thing underneath", "Nothing in it comes first",
  "This is reality without a ground", "Nor is dependent arising a new ground",
  // the painted rice cake
  "Dogen turns over an old Zen saying", "a painted rice cake does not satisfy hunger",
  "no remedy for satisfying hunger other than a painted rice-cake", "There is no unpainted cake behind the painting",
  "And the painted cake feeds",
  // solidity and weight
  "Knock on a table", "nothing feels more solid", "at the scale of atoms it is almost all empty space",
  "A neutrino passes straight through it", "and through the whole earth", "The solidity is not a stuff packed in the wood",
  "It is the table and the hand together", "And still the cup stands on it", "Weight is the same",
  "a suitcase is a sixth as heavy on the Moon", "and floats in orbit", "Its heaviness is named with the earth that pulls it",
  "as the key is named with its lock",
  // beyond the moment
  "The same logic runs beyond the moment", "A self decides", "no decider is found before the decision", "A chair holds you",
  "no chair-power is found in the wood", "A seed sprouts with soil, water and warmth", "but not in a dry jar",
  "keeps a promise for forty years", "everything a person does still counts",
  // try it
  "So, try it", "Listen to a single sound until it ends", "Ask the koan", "the sound was heard in full",
  "Hold a key, and look for the opening in it", "Then use it", "it was never found in the metal alone",
  "if the thought comes that emptiness is what makes things possible", "Nothing is found doing the work",
  "And the sound is still heard",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  sea: { a: "rgba(30,90,130,0.48)", b: "rgba(60,50,140,0.42)", c: "rgba(150,120,50,0.3)" },
};

const RED = "#F2584C";
const WOOD = "#c99060";

// ---------------------------------------------------------------- helpers
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, o = 1, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5) * o}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

/** One drawing or word on the board: [cue, x, y, node, options]. It appears at its cue (+d) and leaves at `until`. */
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
const Items: React.FC<{ items: It[] }> = ({ items }) => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <>
      {items.map(([cue, x, y, node, opt = {} as Opt], i) => {
        const a = c(cue) + (opt.d ?? 0);
        const out = opt.until ? 1 - ramp(t, c(opt.until) + (opt.ud ?? 0), 0.4) : 1;
        return (
          <At key={i} x={x} y={y} o={ramp(t, a, 0.5) * out * (opt.o ?? 1)} s={opt.pop ? pop(t, fps, a) : undefined}>
            {node}
          </At>
        );
      })}
    </>
  );
};
const W: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;

/** A chip that is struck through at `strikeAt` (only for the invented "it", never for a conventional thing). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

// ---------------------------------------------------------------- drawings
/** A temple bell; swing (degrees) rocks it from the top. */
const Bell: React.FC<{ size?: number; swing?: number; color?: string }> = ({ size = 220, swing = 0, color = GOLD }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 200 220" style={{ overflow: "visible", transform: `rotate(${swing}deg)`, transformOrigin: "50% 5%",
    filter: `drop-shadow(0 0 12px ${color}99)` }}>
    <path d="M90 8 Q100 0 110 8 L110 22 L90 22 Z" fill={`${color}55`} stroke={color} strokeWidth={4} />
    <path d="M100 22 Q52 24 48 90 L42 160 Q30 172 22 180 L178 180 Q170 172 158 160 L152 90 Q148 24 100 22 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M52 140 L148 140" stroke={color} strokeWidth={3} opacity={0.7} />
    <circle cx={100} cy={196} r={14} fill={`${color}66`} stroke={color} strokeWidth={4} />
  </svg>
);

/** Repeating sound rings from (x, y), dying away after `dur` seconds. */
const Sound: React.FC<{ x: number; y: number; at: number; dur?: number; color?: string; r1?: number }> = ({ x, y, at, dur = 5, color = GOLD, r1 = 420 }) => {
  const { t } = useT();
  if (t < at || t > at + dur + 1.6) return null;
  return (
    <>
      {[0, 1, 2].map((k) => {
        const s = at + k * 0.55;
        const q = t < s ? 0 : ((t - s) / 1.6) % 1;
        const alive = t - s < dur ? 1 : 0;
        return alive ? <Ring key={k} x={x} y={y} p={q} r0={40} r1={r1} color={color} /> : null;
      })}
    </>
  );
};

const swingOf = (t: number, at: number) => 8 * Math.sin((t - at) * 5) * Math.exp(-Math.max(0, t - at) * 0.6) * (t > at ? 1 : 0);

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

/** A plain standing figure. */
const Person: React.FC<{ color?: string; size?: number; dashed?: boolean }> = ({ color = CHALK, size = 150, dashed }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "5 4" : undefined} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round"
      strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

const Bolt: React.FC<{ color?: string; size?: number; flash?: number }> = ({ color = ICE, size = 160, flash = 1 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 20 * flash}px ${color})` }}>
    <path d="M36 2 L8 56 L28 56 L18 98 L54 38 L32 38 L44 2 Z" fill={`${color}${flash > 0.5 ? "cc" : "44"}`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

const Clock: React.FC<{ size?: number; color?: string }> = ({ size = 170, color = ICE }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
      <circle cx={50} cy={50} r={44} fill={`${color}18`} stroke={color} strokeWidth={4} />
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={50} y1={10} x2={50} y2={16} stroke={color} strokeWidth={3} transform={`rotate(${i * 30} 50 50)`} />)}
      <line x1={50} y1={50} x2={50} y2={24} stroke={CHALK} strokeWidth={4} strokeLinecap="round" transform={`rotate(${t * 36} 50 50)`} />
      <line x1={50} y1={50} x2={50} y2={32} stroke={GOLD} strokeWidth={5} strokeLinecap="round" transform={`rotate(${t * 3} 50 50)`} />
    </svg>
  );
};

/** A small tree with fruit: actions bearing fruit. */
const Fruit: React.FC<{ size?: number }> = ({ size = 170 }) => (
  <svg width={size} height={size * 1.12} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M85 186 L85 110 M85 130 L60 110 M85 120 L112 98" stroke="#b07a45" strokeWidth={8} strokeLinecap="round" fill="none" />
    <ellipse cx={85} cy={72} rx={72} ry={58} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} />
    {[[55, 70], [100, 50], [115, 92], [70, 100]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={`${RED}cc`} stroke={RED} strokeWidth={3} />)}
  </svg>
);

/** A floor bar, drawn only so that it can be taken away. */
const Floor: React.FC<{ w?: number; color?: string; dashed?: boolean }> = ({ w = 900, color = WARM, dashed }) => (
  <div style={{ width: w, height: 24, borderRadius: 12, background: `${color}33`, border: `3px ${dashed ? "dashed" : "solid"} ${color}`, boxShadow: `0 0 16px ${color}55` }} />
);

const Num: React.FC<{ n: string; color: string; lit: number }> = ({ n, color, lit }) => (
  <div style={{ width: 54, height: 54, borderRadius: 27, border: `3px solid ${color}`, background: `${color}${lit > 0.5 ? "44" : "11"}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: CHALK,
    boxShadow: lit > 0.5 ? `0 0 20px ${color}` : undefined }}>{n}</div>
);

/** A small staircase outline. */
const Stairs: React.FC<{ p: number; color?: string }> = ({ p, color = CHALK }) => {
  let d = "M0 150 L30 150";
  for (let k = 0; k < 4; k++) d += ` L${30 + k * 40} ${120 - k * 30} L${70 + k * 40} ${120 - k * 30}`;
  return (
    <svg width={200} height={160} viewBox="0 0 200 160" style={{ overflow: "visible" }}>
      <DrawPath d={d} p={p} color={color} width={5} len={700} />
    </svg>
  );
};

/** A kitchen knife. */
const Knife: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={240} height={70} viewBox="0 0 240 70" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M90 22 L220 22 Q236 24 230 40 Q170 56 90 50 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <rect x={10} y={24} width={82} height={24} rx={10} fill={`${WOOD}66`} stroke={WOOD} strokeWidth={4} />
  </svg>
);

/** A key; turn (0..1) rotates it a quarter turn about its tip. */
const Key: React.FC<{ color?: string; turn?: number; size?: number }> = ({ color = GOLD, turn = 0, size = 220 }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 220 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}aa)`,
    transform: `rotateX(${turn * 80}deg)` }}>
    <circle cx={40} cy={44} r={30} fill={`${color}33`} stroke={color} strokeWidth={6} />
    <circle cx={40} cy={44} r={11} fill="#0008" stroke={color} strokeWidth={3} />
    <path d="M70 44 L212 44 M170 44 L170 66 M192 44 L192 60 M150 44 L150 62" stroke={color} strokeWidth={8} strokeLinecap="round" fill="none" />
  </svg>
);

/** A lock plate with a keyhole. */
const Lock: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={6} y={6} width={98} height={138} rx={16} fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={55} cy={60} r={14} fill="#000a" stroke={color} strokeWidth={3} />
    <path d="M48 70 L44 104 L66 104 L62 70 Z" fill="#000a" stroke={color} strokeWidth={3} />
  </svg>
);

/** A door seen from the front; open (0..1) swings it away. */
const Door: React.FC<{ open: number; color?: string }> = ({ open, color = WARM }) => (
  <div style={{ position: "relative", width: 200, height: 320, border: `4px solid ${color}88`, borderRadius: 6,
    background: `linear-gradient(180deg, ${GOLD}${open > 0.05 ? "55" : "00"}, ${GOLD}00)`, boxShadow: open > 0.05 ? `0 0 ${50 * open}px ${GOLD}` : undefined }}>
    <div style={{ position: "absolute", inset: 0, transformOrigin: "0% 50%", transform: `perspective(900px) rotateY(${-75 * open}deg)`,
      background: `${color}33`, border: `4px solid ${color}`, borderRadius: 6 }}>
      <div style={{ position: "absolute", right: 22, top: 150, width: 18, height: 18, borderRadius: 9, background: GOLD }} />
    </div>
  </div>
);

/** An anvil: what a world of own-natures would be like. */
const Anvil: React.FC<{ color?: string }> = ({ color = DIM }) => (
  <svg width={260} height={150} viewBox="0 0 260 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M10 20 L200 20 Q250 22 250 40 Q210 46 180 60 L170 90 L200 140 L60 140 L90 90 L80 60 Q40 56 10 50 Z"
      fill={`${color}44`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);

/** Chain links; `broken` lifts the middle link away. */
const Chain: React.FC<{ n?: number; broken?: number; color?: string }> = ({ n = 5, broken = 0, color = TEAL }) => (
  <svg width={n * 90 + 40} height={120} viewBox={`0 0 ${n * 90 + 40} 120`} style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    {Array.from({ length: n }).map((_, i) => {
      const mid = i === Math.floor(n / 2);
      return <ellipse key={i} cx={60 + i * 90} cy={60 + (mid ? -60 * broken : 0)} rx={56} ry={30} fill="none"
        stroke={mid && broken > 0.5 ? WARM : color} strokeWidth={8} opacity={mid ? 1 - 0.5 * broken : 1} />;
    })}
  </svg>
);

/** A rope that curls like a snake in dim light. */
const Rope: React.FC<{ dim: number }> = ({ dim }) => (
  <svg width={320} height={90} viewBox="0 0 320 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${WOOD}88)`, opacity: 1 - 0.4 * dim }}>
    <path d="M10 60 Q60 10 110 50 T210 50 T300 36" fill="none" stroke={WOOD} strokeWidth={12} strokeLinecap="round" />
    <path d="M10 60 Q60 10 110 50 T210 50 T300 36" fill="none" stroke="#0006" strokeWidth={3} strokeDasharray="6 10" />
  </svg>
);

/** A traffic light with its red disc lit. */
const RedLight: React.FC<{ lit: number }> = ({ lit }) => (
  <svg width={110} height={260} viewBox="0 0 110 260" style={{ overflow: "visible" }}>
    <rect x={10} y={10} width={90} height={240} rx={20} fill="#0009" stroke={DIM} strokeWidth={4} />
    <circle cx={55} cy={60} r={30} fill={lit > 0.5 ? RED : `${RED}33`} style={lit > 0.5 ? { filter: `drop-shadow(0 0 22px ${RED})` } : undefined} />
    <circle cx={55} cy={130} r={30} fill={`${GOLD}22`} />
    <circle cx={55} cy={200} r={30} fill={`${GREEN}22`} />
  </svg>
);

/** A side-on truck. */
const Truck: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={360} height={170} viewBox="0 0 360 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={10} y={20} width={230} height={110} rx={8} fill={`${color}22`} stroke={color} strokeWidth={4} />
    <path d="M240 50 L300 50 L340 90 L340 130 L240 130 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    {[60, 190, 300].map((x) => <circle key={x} cx={x} cy={136} r={22} fill="#000c" stroke={color} strokeWidth={4} />)}
  </svg>
);

/** A wooden chair. */
const Chair: React.FC = () => (
  <svg width={130} height={170} viewBox="0 0 130 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${WOOD}88)` }}>
    <path d="M24 10 L24 160 M24 90 L110 90 L110 160 M24 10 L40 10 L40 90 M24 40 L40 40" stroke={WOOD} strokeWidth={9} strokeLinecap="round" fill="none" />
    <rect x={20} y={84} width={96} height={14} rx={5} fill={`${WOOD}66`} stroke={WOOD} strokeWidth={4} />
  </svg>
);

/** A seed and its sprout, joined: cause and effect named together. */
const SeedSprout: React.FC<{ grow: number }> = ({ grow }) => (
  <svg width={200} height={130} viewBox="0 0 200 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <ellipse cx={40} cy={100} rx={22} ry={14} fill="#b07a4566" stroke={WOOD} strokeWidth={4} />
    <path d={`M150 118 L150 ${118 - 70 * grow}`} stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
    <path d={`M150 ${118 - 50 * grow} Q122 ${100 - 60 * grow} 132 ${110 - 70 * grow} Q146 ${108 - 52 * grow} 150 ${118 - 50 * grow} Z`}
      fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={grow} />
    <path d="M66 100 Q100 76 136 100" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="6 5" opacity={grow} />
  </svg>
);

/** A rice cake (mochi) painted in a frame. */
const RiceCake: React.FC<{ glow?: number }> = ({ glow = 0 }) => (
  <div style={{ width: 340, height: 260, border: `6px solid ${GOLD}`, borderRadius: 10, background: "#ffffff0d", boxShadow: `0 0 ${20 + 30 * glow}px ${GOLD}66`,
    display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg width={220} height={140} viewBox="0 0 220 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 16 * glow}px #fff8)` }}>
      <ellipse cx={110} cy={96} rx={100} ry={34} fill="#f3eadb44" stroke="#f3eadb" strokeWidth={4} />
      <ellipse cx={110} cy={70} rx={84} ry={40} fill="#f7f1e655" stroke="#f7f1e6" strokeWidth={4} />
      <path d="M70 60 Q100 44 140 56" stroke="#fff" strokeWidth={5} strokeLinecap="round" fill="none" opacity={0.5} />
    </svg>
  </div>
);

/** A table, side-on. */
const Table: React.FC<{ color?: string }> = ({ color = WOOD }) => (
  <svg width={380} height={190} viewBox="0 0 380 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={10} y={20} width={360} height={26} rx={6} fill={`${color}55`} stroke={color} strokeWidth={5} />
    <path d="M44 46 L44 184 M336 46 L336 184" stroke={color} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

/** A fist, knuckles down. */
const Fist: React.FC<{ color?: string }> = ({ color = WARM }) => (
  <svg width={90} height={70} viewBox="0 0 90 70" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M30 0 L30 18" stroke={color} strokeWidth={14} strokeLinecap="round" />
    <rect x={6} y={18} width={78} height={48} rx={16} fill={`${color}44`} stroke={color} strokeWidth={4} />
    <path d="M26 50 L26 66 M45 50 L45 66 M64 50 L64 66" stroke={color} strokeWidth={3} opacity={0.7} />
  </svg>
);

/** A small cup. */
const SmallCup: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={80} height={80} viewBox="0 0 80 80" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}99)` }}>
    <path d="M8 10 L62 10 L56 76 L14 76 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <path d="M60 24 Q80 28 74 46 Q70 56 58 54" fill="none" stroke={color} strokeWidth={4} />
  </svg>
);

/** A magnified view of the wood: a few tiny nuclei with faint orbits, almost all empty space. */
const Atoms: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 340 }) => {
  const { t } = useT();
  const N: [number, number][] = [[-70, -50], [60, -20], [-20, 70]];
  return (
    <svg width={size} height={size} viewBox="-170 -170 340 340" style={{ overflow: "visible" }}>
      <circle r={166} fill="#0005" stroke={color} strokeWidth={3} strokeDasharray="10 8" />
      {N.map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx={46} ry={22} fill="none" stroke={color} strokeOpacity={0.3} strokeWidth={1.5} transform={`rotate(${30 * i} ${x} ${y})`} />
          <circle cx={x} cy={y} r={3.5} fill={GOLD} style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }} />
          <circle cx={x + 46 * Math.cos(t * 3 + i)} cy={y + 22 * Math.sin(t * 3 + i)} r={2} fill={color} />
        </g>
      ))}
    </svg>
  );
};

/** A suitcase. */
const Suitcase: React.FC<{ color?: string; size?: number }> = ({ color = WARM, size = 150 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 150 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M55 26 L55 12 Q55 6 61 6 L89 6 Q95 6 95 12 L95 26" fill="none" stroke={color} strokeWidth={6} />
    <rect x={8} y={26} width={134} height={90} rx={12} fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M40 26 L40 116 M110 26 L110 116" stroke={color} strokeWidth={4} opacity={0.7} />
  </svg>
);

/** A curve of ground: the earth or the Moon. */
const Ground: React.FC<{ color: string }> = ({ color }) => (
  <svg width={320} height={60} viewBox="0 0 320 60" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M0 50 Q160 0 320 50 L320 60 L0 60 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// ---------------------------------------------------------------- scenes
const WorryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const start = c("The koan of Step 1 ends with no moment found");
  const q = c("how does anything happen");
  return (
    <AbsoluteFill>
      <Title at={start} color={DIM} size={32}>the koan of Step 1</Title>
      <At x={960} y={240} o={ramp(t, start - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={start} size={56} speed={0.03} />
      </At>
      <Items items={[
        ["The koan of Step 1 ends with no moment found", 700, 360, <SK c={DIM} s={26} strikeAt={start + 2.4}>a moment that arises</SK>, { d: 1.2 }],
        ["The koan of Step 1 ends with no moment found", 1220, 360, <SK c={DIM} s={26} strikeAt={start + 2.8}>a moment that ceases</SK>, { d: 1.5 }],
        ["how does anything happen", 960, 470, <W c={WARM} s={36} serif>a fair worry</W>, { d: -0.8 }],
        ["how does anything happen", 960, 540, <W c={CHALK} s={32}>then how does anything happen?</W>],
      ]} />
      <At x={620} y={700} s={pop(t, fps, c("How is a sound heard"))}><Bell size={140} swing={swingOf(t, c("How is a sound heard"))} /></At>
      <Sound x={620} y={700} at={c("How is a sound heard") + 0.3} dur={4} r1={220} />
      <At x={1300} y={700} s={pop(t, fps, c("How does an action bear fruit"))}><Fruit size={150} /></At>
      <At x={960} y={700} o={ramp(t, q + 0.8, 0.5)}><W c={DIM} s={60} serif>?</W></At>
    </AbsoluteFill>
  );
};

const StepScene: React.FC = () => {
  const c = useCue();
  const step = c("This is the seventh step of The Logic");
  return (
    <AbsoluteFill>
      <Title at={step}>The Logic · Step 7</Title>
      <Items items={[
        ["This is the seventh step of The Logic", 960, 190, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.0 }],
        ["This is the seventh step of The Logic", 960, 330, <W c={GOLD} s={60} serif>Function Without Substance</W>, { d: 1.8, pop: true }],
        ["Its answer is not that emptiness does the work", 960, 500, <SK c={DIM} s={30} strikeAt={c("Its answer is not that emptiness does the work") + 1.6}>emptiness does the work</SK>],
        ["function never needed an it", 960, 640, <W c={TEAL} s={42} serif>function never needed an “it”</W>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const PremiseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two opposite conclusions are drawn from the koan");
  const share = c("But they share one premise");
  const prem = c("happening needs an it for the happening to happen to");
  const drop = c("Drop that premise, and both conclusions go");
  const gone = 1 - ramp(t, drop + 0.8, 0.6);
  return (
    <AbsoluteFill>
      <Title at={two}>two opposite conclusions</Title>
      <At x={480} y={330} s={pop(t, fps, two + 0.6)} o={gone}><Person color={WARM} size={140} /></At>
      <At x={1440} y={330} s={pop(t, fps, two + 1.0)} o={gone}><Person color={VIOLET} size={140} /></At>
      <Items items={[
        ["there must be a real moment of sound", 480, 470, <K c={WARM} s={26}>a real moment, really arising</K>, { pop: true, until: "Drop that premise, and both conclusions go", ud: 0.8 }],
        ["then nothing happens", 1440, 470, <K c={VIOLET} s={26}>then nothing happens</K>, { pop: true, until: "Drop that premise, and both conclusions go", ud: 0.8 }],
        ["happening needs an it for the happening to happen to", 960, 330, <W c={DIM} s={28}>is the “it” there, or not?</W>, { d: 2.5, until: "Drop that premise, and both conclusions go", ud: 0.8 }],
      ]} />
      <Flow x1={540} y1={520} x2={860} y2={620} color={DIM} p={ramp(t, share, 0.6) * gone} pulses={false} />
      <Flow x1={1380} y1={520} x2={1060} y2={620} color={DIM} p={ramp(t, share, 0.6) * gone} pulses={false} />
      <At x={960} y={650} o={ramp(t, share + 0.3, 0.5)}>
        <SK c={WARM} s={28} strikeAt={drop + 0.3}>happening needs an “it” to happen to</SK>
      </At>
      <At x={960} y={730} o={ramp(t, prem, 0.5) * gone}><W c={CHALK} s={26}>one shared premise</W></At>
      <Items items={[
        ["Drop that premise, and both conclusions go", 960, 520, <W c={GOLD} s={32} serif>drop it, and both conclusions go</W>, { d: 1.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const WorksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bell = c("The bell is heard");
  return (
    <AbsoluteFill>
      <Title at={bell} color={TEAL}>it still works</Title>
      <At x={620} y={360} s={pop(t, fps, bell - 0.2)}><Bell size={170} swing={swingOf(t, bell)} /></At>
      <Sound x={620} y={370} at={bell + 0.3} dur={7} r1={300} />
      <At x={1300} y={360} s={pop(t, fps, c("The clock keeps time"))}><Clock size={190} /></At>
      <Items items={[
        ["The bell is heard", 620, 540, <W c={GOLD} s={30}>the bell is heard</W>, { d: 0.3 }],
        ["The clock keeps time", 1300, 540, <W c={ICE} s={30}>the clock keeps time</W>, { d: 0.3 }],
        ["And there is no it behind the working", 960, 360, <SK c={DIM} s={26} strikeAt={c("And there is no it behind the working") + 1.2}>an “it” behind</SK>],
        ["Each works as designated", 960, 660, <W c={TEAL} s={34} serif>works as designated, in dependence</W>],
        ["Each works as designated", 960, 750, <W c={CHALK} s={28}>reliably: all that working ever was</W>, { d: 2.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const BothWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Seen with the logic of substance, a moment of sound");
  const dep = c("Seen with the logic of dependency, it is the same bell");
  const come = c("Bell, air, ear and attention come together");
  const part = c("They part, and it ceased is said");
  const apart = ramp(t, part, 1.0);
  const C: [number, number, string][] = [[-1, -1, "bell"], [1, -1, "air"], [-1, 1, "ear"], [1, 1, "attention"]];
  return (
    <AbsoluteFill>
      <Title at={sub}>the same bell, seen both ways</Title>
      <At x={500} y={200} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>substance</K></At>
      <At x={500} y={400} s={pop(t, fps, sub + 0.8)}>
        <div style={{ width: 220, height: 140, borderRadius: 14, background: `${WARM}33`, border: `4px solid ${WARM}`, boxShadow: `0 0 30px ${WARM}88`,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <W c={CHALK} s={28}>moment of sound</W>
          <div style={{ opacity: ramp(t, c("Its power to be heard sits inside it"), 0.5) }}><W c={WARM} s={22}>power inside</W></div>
        </div>
      </At>
      <Items items={[
        ["it looks as if the hearing has gone too", 500, 560, <W c={DIM} s={26}>no moment, so no hearing?</W>],
      ]} />
      <At x={1380} y={200} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>dependency</K></At>
      {C.map(([dx, dy, w], i) => (
        <At key={w} x={1380 + dx * (90 + 90 * apart)} y={400 + dy * (60 + 50 * apart)} s={pop(t, fps, come + i * 0.35)}><K c={TEAL} s={24}>{w}</K></At>
      ))}
      <Items items={[
        ["Bell, air, ear and attention come together", 1380, 400, <W c={GREEN} s={26}>“it arose”</W>, { d: 1.8, until: "They part, and it ceased is said" }],
        ["They part, and it ceased is said", 1380, 400, <W c={ROSE} s={26}>“it ceased”</W>, { d: 0.4 }],
        ["The hearing is complete", 1380, 560, <W c={GOLD} s={30} serif>the hearing is complete</W>],
        ["It is like the stairs of Step 1", 960, 700, <Stairs p={ramp(t, c("It is like the stairs of Step 1"), 1.2)} />],
        ["It is like the stairs of Step 1", 760, 700, <W c={DIM} s={24}>not up or down in themselves</W>, { d: 0.8 }],
        ["yet really climbed", 1170, 700, <W c={CHALK} s={26}>yet really climbed</W>],
      ]} />
    </AbsoluteFill>
  );
};

const PowerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const habit = c("We habitually treat function as a power inside the thing");
  const look = c("Look for the power, and it is not found there");
  return (
    <AbsoluteFill>
      <Title at={habit}>a power inside the thing?</Title>
      <At x={620} y={340} s={pop(t, fps, c("like a knife's power to cut"))}><Knife /></At>
      <Items items={[
        ["like a knife's power to cut", 620, 450, <SK c={DIM} s={26} strikeAt={look + 0.6}>power to cut, inside</SK>, { d: 0.6 }],
        ["as if it held the next one inside it", 1300, 340, <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <K c={WARM} s={26}>moment</K><W c={DIM} s={24}>holding</W><K c={WARM} s={22}>next</K></div>],
        ["as if it held the next one inside it", 1300, 450, <SK c={DIM} s={26} strikeAt={look + 1.0}>next moment, stored</SK>, { d: 0.6 }],
        ["Look for the power, and it is not found there", 960, 620, <W c={GOLD} s={38} serif>look for the power: not found there</W>],
      ]} />
    </AbsoluteFill>
  );
};

const KeyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("A key opens this lock and no other");
  const named = c("Key, lock, hand and turning are named together");
  const opens = c("and the door opens");
  const slide = ramp(t, named + 0.2, 1.0);
  const turn = ramp(t, named + 1.4, 0.6);
  return (
    <AbsoluteFill>
      <Title at={k} color={GOLD}>where the power is not</Title>
      <At x={520 + 250 * slide} y={400} s={pop(t, fps, k)}><Key turn={turn} /></At>
      <At x={900} y={400} s={pop(t, fps, k + 0.5)}><Lock /></At>
      <At x={1340} y={420} o={ramp(t, k + 0.8, 0.5)}><Door open={ramp(t, opens, 1.2)} /></At>
      <Items items={[
        ["In the wrong lock, it opens nothing", 520, 560, <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ transform: "scale(0.6)" }}><Lock color={ROSE} /></div><W c={ROSE} s={24}>wrong lock: nothing opens</W></div>, { until: "Key, lock, hand and turning are named together" }],
        ["is not an inner property", 960, 680, <SK c={DIM} s={26} strikeAt={c("is not an inner property") + 0.8}>opening power, inside the key</SK>, { until: "Key, lock, hand and turning are named together" }],
        ["Key, lock, hand and turning are named together", 960, 680, <div style={{ display: "flex", gap: 14 }}>
          {["key", "lock", "hand", "turning"].map((w) => <K key={w} c={TEAL} s={24}>{w}</K>)}</div>, { pop: true }],
        ["Key, lock, hand and turning are named together", 960, 760, <W c={TEAL} s={26}>named together</W>, { d: 0.6 }],
        ["and the door opens", 1340, 640, <W c={GOLD} s={30} serif>the door opens</W>, { d: 0.6 }],
        ["The sound came from no store, and went into none", 960, 200, <W c={CHALK} s={28}>the sound: from no store, into none</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SealedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const round = c("Now turn the koan round");
  const sup = c("Suppose this moment existed by itself");
  const reach = c("Conditions could not reach it");
  const seal = c("It would be sealed");
  const conds: [number, number, string][] = [[420, 300, "air"], [420, 540, "ear"], [1500, 300, "before"], [1500, 540, "after"]];
  return (
    <AbsoluteFill>
      <Title at={round}>suppose it had its own nature</Title>
      <At x={960} y={420} s={pop(t, fps, sup)}>
        <div style={{ width: 300, height: 190, borderRadius: 18, border: `${4 + 6 * ramp(t, seal, 0.5)}px solid ${WARM}`, background: `${WARM}22`,
          boxShadow: `0 0 ${20 + 30 * ramp(t, seal, 0.5)}px ${WARM}88`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <W c={CHALK} s={28}>this moment</W><W c={WARM} s={22}>complete on its own</W>
        </div>
      </At>
      {conds.map(([x, y, w], i) => (
        <React.Fragment key={w}>
          <At x={x} y={y} o={ramp(t, reach - 0.4 + i * 0.2, 0.4)}><K c={TEAL} s={24}>{w}</K></At>
          <Flow x1={x + (x < 960 ? 70 : -70)} y1={y} x2={x < 960 ? 790 : 1130} y2={y < 420 ? 380 : 460} color={TEAL}
            p={ramp(t, reach + i * 0.2, 0.6)} pulses={false} dash />
        </React.Fragment>
      ))}
      <Items items={[
        ["Could it arise or cease", 960, 230, <W c={CHALK} s={32}>could it arise or cease?</W>],
        ["Could it arise or cease", 960, 290, <W c={WARM} s={30} serif>it could not</W>, { d: 1.2 }],
        ["an own-nature is exactly what does not become other", 960, 620, <W c={DIM} s={26}>arising, ceasing: a becoming other</W>],
        ["Such a moment could not change, combine or act", 960, 690, <W c={DIM} s={26}>no change · no combining · no acting</W>],
        ["Conditions could not reach it", 960, 760, <W c={TEAL} s={26}>conditions cannot reach it</W>, { d: 0.6 }],
        ["It would be sealed", 960, 420, <SK c={WARM} s={24} strikeAt={seal + 1.6}>own-nature</SK>, { d: 0.9 }],
      ]} />
    </AbsoluteFill>
  );
};

const BakerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Nagarjuna makes the point with a baker");
  const ag = c("the agent proceeds in dependence on the action");
  const ac = ag + 2.6;
  return (
    <AbsoluteFill>
      <Title at={b}>the baker and the baking</Title>
      <At x={620} y={360} s={pop(t, fps, b + 0.4)}><K c={GOLD} s={34}>baker</K></At>
      <At x={1300} y={360} s={pop(t, fps, b + 0.8)}><K c={WARM} s={34}>baking</K></At>
      <Svg>
        <DrawPath d="M700 320 Q960 220 1220 320" p={ramp(t, ag, 0.8)} color={TEAL} width={4} len={800} />
        <DrawPath d="M1220 400 Q960 500 700 400" p={ramp(t, ac, 0.8)} color={TEAL} width={4} len={800} />
      </Svg>
      <Items items={[
        ["a baker who never bakes", 620, 460, <SK c={DIM} s={24} strikeAt={c("a baker who never bakes") + 1.0}>a baker who never bakes</SK>, { until: "the agent proceeds in dependence on the action" }],
        ["the agent proceeds in dependence on the action", 960, 230, <W c={TEAL} s={24}>agent, through the action</W>, { d: 0.6 }],
        ["the agent proceeds in dependence on the action", 960, 500, <W c={TEAL} s={24}>action, through the agent</W>, { d: 3.2 }],
        ["so it could never have been done", 620, 660, <SK c={DIM} s={24} strikeAt={c("so it could never have been done") + 0.8}>an action with its own nature</SK>],
        ["Yet actions are done, and they bear fruit", 1300, 640, <Fruit size={150} />, { pop: true }],
        ["Yet actions are done, and they bear fruit", 1300, 790, <W c={GREEN} s={26}>actions bear fruit</W>, { d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const ReplyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const crit = c("A critic objects");
  const back = c("Nagarjuna answers that the picture is backwards");
  const breaks = c("It is own-nature, not emptiness, that breaks the chain");
  return (
    <AbsoluteFill>
      <Title at={crit}>the reply to a critic</Title>
      <Items items={[
        ["A critic objects", 960, 200, <W c={DIM} s={28}>“if all is empty: nothing arises, no noble truths, no fruits”</W>, { until: "Nagarjuna answers that the picture is backwards" }],
        ["Nagarjuna answers that the picture is backwards", 960, 200, <W c={GOLD} s={32} serif>the picture is backwards</W>],
        ["If things were not empty", 960, 270, <W c={CHALK} s={26}>if not empty: no arising, no passing away</W>],
      ]} />
      <At x={960} y={400} s={pop(t, fps, crit + 0.6)}><Chain broken={ramp(t, breaks + 0.4, 0.8)} /></At>
      <Items items={[
        ["It is own-nature, not emptiness, that breaks the chain", 960, 300, <SK c={WARM} s={24} strikeAt={breaks + 1.8}>own-nature</SK>, { d: 0.6, o: 0.95 }],
        ["fixed like an anvil", 620, 620, <Anvil />, { pop: true }],
        ["fixed like an anvil", 620, 740, <W c={DIM} s={26}>not solid: frozen</W>, { d: 1.4 }],
        ["for whom emptiness fits, everything fits", 1300, 640, <W c={GOLD} s={34} serif>for whom emptiness fits,</W>],
        ["for whom emptiness fits, everything fits", 1300, 700, <W c={GOLD} s={34} serif>everything fits</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const NotPowerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const not = c("But this does not make emptiness a power");
  const dim = ramp(t, c("A rope can be seen as a snake in dim light"), 0.8);
  return (
    <AbsoluteFill>
      <Title at={not} color={WARM}>emptiness does no work</Title>
      <Items items={[
        ["But this does not make emptiness a power", 520, 260, <SK c={DIM} s={26} strikeAt={c("Emptiness causes nothing")}>emptiness as a power</SK>],
        ["or an open space they happen in", 960, 260, <SK c={DIM} s={26} strikeAt={c("Emptiness causes nothing") + 0.3}>an open space</SK>],
        ["The same goes for potential", 1400, 260, <SK c={DIM} s={26} strikeAt={c("The same goes for potential") + 3.0}>a store of possibilities</SK>],
        ["Emptiness causes nothing", 960, 380, <W c={VIOLET} s={32} serif>emptiness causes nothing</W>],
        ["what dependence comes to when it is examined", 960, 450, <W c={CHALK} s={26}>only what dependence comes to, examined</W>],
        ["The same goes for potential", 1400, 330, <W c={WARM} s={24}>substance again</W>, { d: 1.8 }],
        ["A rope can be seen as a snake in dim light", 620, 620, <Rope dim={dim} />, { pop: true }],
        ["A rope can be seen as a snake in dim light", 620, 720, <W c={CHALK} s={26}>a rope, seen as a snake</W>, { d: 0.5 }],
        ["A shadow cannot be walked across as a bridge", 1300, 620, <div style={{ width: 300, height: 30, borderRadius: 15, background: "#0008", filter: "blur(4px)" }} />],
        ["A shadow cannot be walked across as a bridge", 1300, 720, <W c={DIM} s={26}>a shadow is no bridge</W>, { d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const FlimsyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const red = c("A disc of red light stops a forty-tonne truck");
  const lamp = c("it is a coloured lamp");
  const drive = 1 - ramp(t, red + 0.2, 1.6);
  return (
    <AbsoluteFill>
      <Title at={c("Empty is not flimsy")} color={GOLD}>empty is not flimsy</Title>
      <Items items={[
        ["A car with no essence can still hurt you", 960, 200, <W c={CHALK} s={28}>a car with no essence can still hurt you</W>],
      ]} />
      <At x={1380} y={430} s={pop(t, fps, red)}><RedLight lit={ramp(t, red + 0.2, 0.2) * (1 - 0.5 * between(t, lamp, lamp + 2.5, 0.4))} /></At>
      <At x={720 - 300 * drive} y={500} o={ramp(t, red, 0.5)}><Truck /></At>
      <Items items={[
        ["A disc of red light stops a forty-tonne truck", 760, 660, <W c={RED} s={28}>stops without touching</W>, { d: 1.8 }],
        ["it is a coloured lamp", 1380, 640, <W c={DIM} s={26}>no designation: a coloured lamp</W>],
        ["Yet nothing is more effective", 1380, 700, <W c={GOLD} s={28} serif>nothing more effective</W>],
        ["Empty things act on empty things", 960, 790, <W c={TEAL} s={32} serif>empty things act on empty things</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LightningScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const flashAt = c("But there is no lightning apart from the flashing");
  const flash = t > flashAt ? Math.max(0, Math.sin((t - flashAt) * 7)) : 0;
  return (
    <AbsoluteFill>
      <Title at={c("Come back to the koan's words")}>“ceases as it arises”</Title>
      <Items items={[
        ["sounds like a moment to which arising and ceasing happen", 960, 210, <SK c={DIM} s={26} strikeAt={c("the arising and ceasing is the moment") + 0.4}>a moment, to which they happen</SK>],
      ]} />
      <At x={620} y={420} s={pop(t, fps, flashAt)}><Bolt size={200} flash={flash} /></At>
      <Items items={[
        ["But there is no lightning apart from the flashing", 620, 590, <SK c={DIM} s={24} strikeAt={flashAt + 2.0}>lightning apart from the flashing</SK>, { d: 0.6 }],
        ["But there is no lightning apart from the flashing", 620, 670, <W c={ICE} s={30} serif>the flashing is the lightning</W>, { d: 2.8 }],
        ["the arising and ceasing is the moment", 1300, 330, <W c={GOLD} s={32} serif>arising-ceasing is the moment</W>],
        ["The clock still ticks", 1300, 480, <Clock size={150} />, { pop: true }],
        ["Only the passenger is let go", 1300, 640, <SK c={DIM} s={24} strikeAt={c("Only the passenger is let go") + 0.8}>the passenger</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const LagScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lag = c("this was where his own view lagged behind");
  const imag = c("he still imagined an ear here and a bell there");
  const seen = c("the participants are not found before the participation");
  const phase = c("In his seven phases, this is phase six");
  const join = ramp(t, seen + 0.4, 1.2);
  return (
    <AbsoluteFill>
      <Title at={lag}>where the author's view lagged</Title>
      <Items items={[
        ["After 1997 the doer had gone", 960, 200, <SK c={DIM} s={26} strikeAt={c("After 1997 the doer had gone") + 1.0}>the doer</SK>],
        ["After 1997 the doer had gone", 960, 270, <W c={ICE} s={28} serif>walking simply walked, hearing simply heard</W>, { d: 1.6 }],
      ]} />
      <At x={600 + 220 * join} y={430} s={pop(t, fps, imag)}><Eye size={150} /></At>
      <At x={1320 - 220 * join} y={420} s={pop(t, fps, imag + 0.5)}><Bell size={130} /></At>
      <Items items={[
        ["as if things existed first and then met", 960, 430, <SK c={DIM} s={24} strikeAt={seen + 0.2}>first things, then meeting</SK>, { until: "the participants are not found before the participation", ud: 1.0 }],
        ["the participants are not found before the participation", 960, 600, <W c={GOLD} s={30} serif>participants not found before the participation</W>],
      ]} />
      <Sound x={960} y={430} at={seen + 1.6} dur={5} r1={260} />
      {Array.from({ length: 7 }).map((_, i) => (
        <At key={i} x={720 + i * 80} y={740} o={ramp(t, phase, 0.5)}><Num n={String(i + 1)} color={i === 5 ? GOLD : DIM} lit={i === 5 ? ramp(t, phase + 0.8, 0.3) : 0} /></At>
      ))}
    </AbsoluteFill>
  );
};

const GroundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sec = c("no longer a secondary layer");
  const under = c("There is no real thing underneath");
  const N: [number, number, string][] = [[620, 330, "bell"], [860, 250, "ear"], [1100, 320, "air"], [1320, 260, "name"],
    [760, 470, "moment"], [1040, 460, "hearing"], [1280, 420, "before"]];
  const E = [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 2], [5, 6], [6, 3], [1, 5], [4, 1]];
  const web = ramp(t, sec, 1.2);
  return (
    <AbsoluteFill>
      <Title at={sec}>reality without a ground</Title>
      <Svg>
        {E.map(([a, b], i) => (
          <line key={i} x1={N[a][0]} y1={N[a][1]} x2={N[b][0]} y2={N[b][1]} stroke={TEAL} strokeOpacity={0.5 * ramp(t, sec + 0.4 + i * 0.08, 0.4)} strokeWidth={3} />
        ))}
      </Svg>
      {N.map(([x, y, w], i) => (
        <At key={w} x={x} y={y} o={web * ramp(t, sec + i * 0.12, 0.4)}><K c={i === 4 ? GOLD : TEAL} s={22}>{w}</K></At>
      ))}
      <At x={960} y={600} o={ramp(t, sec, 0.5) * (1 - ramp(t, under + 0.8, 0.8))}><Floor w={900} dashed /></At>
      <Items items={[
        ["no longer a secondary layer", 960, 660, <SK c={DIM} s={24} strikeAt={under + 0.4}>a real thing underneath</SK>, { d: 0.8 }],
        ["Nothing in it comes first", 960, 560, <W c={DIM} s={26}>nothing comes first</W>, { until: "This is reality without a ground" }],
        ["This is reality without a ground", 960, 560, <W c={GOLD} s={40} serif>vivid, working, not found on its own</W>, { d: 0.2 }],
        ["Nor is dependent arising a new ground", 960, 740, <SK c={DIM} s={24} strikeAt={c("Nor is dependent arising a new ground") + 1.0}>dependent arising as a new ground</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const RiceCakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("Dogen turns over an old Zen saying");
  const feeds = c("And the painted cake feeds");
  return (
    <AbsoluteFill>
      <Title at={d}>Dogen: the painted rice cake</Title>
      <At x={960} y={400} s={pop(t, fps, c("a painted rice cake does not satisfy hunger"))}><RiceCake glow={ramp(t, feeds, 0.8)} /></At>
      <Items items={[
        ["a painted rice cake does not satisfy hunger", 960, 200, <W c={DIM} s={26}>old saying: a painting does not feed</W>, { until: "no remedy for satisfying hunger other than a painted rice-cake" }],
        ["no remedy for satisfying hunger other than a painted rice-cake", 960, 200, <W c={GOLD} s={30} serif>“no remedy for hunger other than a painted rice-cake”</W>],
        ["There is no unpainted cake behind the painting", 960, 620, <SK c={DIM} s={24} strikeAt={c("There is no unpainted cake behind the painting") + 1.2}>an unpainted cake behind</SK>],
        ["And the painted cake feeds", 960, 720, <W c={GOLD} s={36} serif>and the painted cake feeds</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SolidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("Knock on a table");
  const atoms = c("at the scale of atoms it is almost all empty space");
  const nu = c("A neutrino passes straight through it");
  const earth = c("and through the whole earth");
  const cup = c("And still the cup stands on it");
  const wgt = c("Weight is the same");
  const moon = c("a suitcase is a sixth as heavy on the Moon");
  const orbit = c("and floats in orbit");
  const pull = c("Its heaviness is named with the earth that pulls it");
  const out1 = 1 - ramp(t, wgt, 0.5);
  const tap = (t0: number) => { const u = t - t0; return u > 0 && u < 0.3 ? Math.sin((u / 0.3) * Math.PI) : 0; };
  const hit = Math.max(tap(k + 0.5), tap(k + 1.0));
  const nx = 1110 + 690 * ramp(t, nu + 0.3, 2.4);
  const bob = Math.sin((t - orbit) * 1.6);
  return (
    <AbsoluteFill>
      <Title at={k} o={out1}>how solid is a table?</Title>
      <Title at={wgt} color={GOLD}>weight is the same</Title>
      {/* solidity */}
      <At x={560} y={470} o={ramp(t, k, 0.5) * out1}><Table /></At>
      <At x={660} y={330 + 30 * hit} o={ramp(t, k, 0.4) * (1 - ramp(t, cup - 0.6, 0.4))}><Fist /></At>
      <Sound x={660} y={400} at={k + 0.55} dur={0.9} color={WOOD} r1={150} />
      <At x={470} y={358} s={pop(t, fps, cup)} o={ramp(t, cup, 0.3) * out1}><SmallCup /></At>
      <At x={1320} y={380} s={pop(t, fps, atoms)} o={ramp(t, atoms, 0.4) * out1}><Atoms /></At>
      <Svg>
        <g opacity={out1}>
          <DrawPath d="M740 410 L1150 380" p={ramp(t, atoms, 0.6)} color={DIM} width={2} len={420} glow={false} />
          <DrawPath d="M1110 380 L1800 380" p={ramp(t, nu + 0.3, 2.4)} color={GREEN} width={2} len={700} />
          {t > nu + 0.3 && <circle cx={nx} cy={380} r={7} fill={GREEN} style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }} />}
        </g>
      </Svg>
      <At x={1690} y={380} s={pop(t, fps, earth)} o={ramp(t, earth, 0.4) * out1}>
        <div style={{ width: 110, height: 110, borderRadius: "50%", background: `radial-gradient(circle at 35% 35%, ${TEAL}88, ${ICE}33)`,
          border: `3px solid ${TEAL}`, boxShadow: `0 0 20px ${TEAL}88` }} />
      </At>
      <Items items={[
        ["nothing feels more solid", 560, 630, <W c={WOOD} s={30} serif>nothing feels more solid</W>, { until: "Weight is the same" }],
        ["at the scale of atoms it is almost all empty space", 1320, 600, <W c={DIM} s={26}>at the scale of atoms: almost all empty space</W>, { d: 0.6, until: "Weight is the same" }],
        ["A neutrino passes straight through it", 1320, 200, <W c={GREEN} s={28}>a neutrino passes straight through</W>, { d: 0.3, until: "Weight is the same" }],
        ["and through the whole earth", 1690, 480, <W c={TEAL} s={24}>and the whole earth</W>, { d: 0.3, until: "Weight is the same" }],
        ["The solidity is not a stuff packed in the wood", 560, 710, <SK c={DIM} s={26} strikeAt={c("The solidity is not a stuff packed in the wood") + 1.4}>solidity packed in the wood</SK>, { until: "Weight is the same" }],
        ["It is the table and the hand together", 1320, 700, <div style={{ display: "flex", gap: 14 }}><K c={WOOD} s={26}>table</K><K c={WARM} s={26}>hand</K></div>, { pop: true, until: "Weight is the same" }],
        ["It is the table and the hand together", 1320, 770, <W c={TEAL} s={26}>solid: the two together</W>, { d: 0.6, until: "Weight is the same" }],
        ["And still the cup stands on it", 960, 810, <W c={GOLD} s={34} serif>and still the cup stands</W>, { d: 0.4, until: "Weight is the same" }],
      ]} />
      {/* weight */}
      <Items items={[
        ["Weight is the same", 480, 240, <K c={TEAL} s={26}>on Earth</K>, { d: 0.4 }],
        ["Weight is the same", 480, 400, <Suitcase />, { d: 0.6, pop: true }],
        ["Weight is the same", 480, 490, <Ground color={TEAL} />, { d: 0.6 }],
        ["Weight is the same", 480, 560, <W c={WARM} s={28}>heavy</W>, { d: 1.0 }],
        ["a suitcase is a sixth as heavy on the Moon", 960, 240, <K c={ICE} s={26}>on the Moon</K>],
        ["a suitcase is a sixth as heavy on the Moon", 960, 400, <Suitcase />, { d: 0.2, pop: true }],
        ["a suitcase is a sixth as heavy on the Moon", 960, 490, <Ground color={DIM} />, { d: 0.2 }],
        ["a suitcase is a sixth as heavy on the Moon", 960, 560, <W c={ICE} s={28}>a sixth as heavy</W>, { d: 1.2 }],
        ["and floats in orbit", 1440, 240, <K c={VIOLET} s={26}>in orbit</K>],
        ["and floats in orbit", 1440, 560, <W c={VIOLET} s={28}>floats</W>, { d: 0.8 }],
      ]} />
      <At x={1440} y={390 + 14 * bob} r={12 * bob} s={pop(t, fps, orbit + 0.2)} o={ramp(t, orbit + 0.2, 0.4)}><Suitcase /></At>
      <Flow x1={590} y1={350} x2={590} y2={470} color={TEAL} p={ramp(t, pull, 0.6)} />
      <Items items={[
        ["Its heaviness is named with the earth that pulls it", 960, 640, <SK c={DIM} s={26} strikeAt={pull + 1.6}>heaviness in the suitcase, on its own</SK>],
        ["Its heaviness is named with the earth that pulls it", 960, 710, <W c={TEAL} s={28}>named with the earth that pulls it</W>, { d: 1.2 }],
        ["as the key is named with its lock", 960, 790, <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Key size={130} /><div style={{ width: 55, height: 75, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "scale(0.5)" }}><Lock /></div></div><W c={GOLD} s={26}>as the key, with its lock</W></div>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const head = c("The same logic runs beyond the moment");
  const grow = ramp(t, c("A seed sprouts with soil, water and warmth") + 0.4, 1.2) * (1 - ramp(t, c("but not in a dry jar"), 0.6));
  const col = (x: number, label: string, color: string, at: string) => (
    <At x={x} y={210} o={ramp(t, head + 0.3, 0.5) * (0.4 + 0.6 * ramp(t, c(at), 0.4))}><K c={color} s={26}>{label}</K></At>
  );
  return (
    <AbsoluteFill>
      <Title at={head}>beyond the moment</Title>
      {col(360, "the self", ICE, "A self decides")}
      {col(760, "an object", WARM, "A chair holds you")}
      {col(1160, "a cause", GREEN, "A seed sprouts with soil, water and warmth")}
      {col(1560, "the person", GOLD, "keeps a promise for forty years")}
      <Items items={[
        ["A self decides", 360, 380, <Person color={ICE} size={140} />, { pop: true }],
        ["A self decides", 360, 510, <W c={ICE} s={26}>the deciding is real</W>, { d: 0.4 }],
        ["no decider is found before the decision", 360, 590, <SK c={DIM} s={22} strikeAt={c("no decider is found before the decision") + 1.0}>a decider before</SK>],
        ["A chair holds you", 760, 380, <Chair />, { pop: true }],
        ["A chair holds you", 760, 510, <W c={WARM} s={26}>it holds you</W>, { d: 0.4 }],
        ["no chair-power is found in the wood", 760, 590, <SK c={DIM} s={22} strikeAt={c("no chair-power is found in the wood") + 1.0}>chair-power</SK>],
        ["A seed sprouts with soil, water and warmth", 1160, 390, <SeedSprout grow={grow} />, { pop: true }],
        ["A seed sprouts with soil, water and warmth", 1160, 510, <W c={GREEN} s={24}>soil · water · warmth</W>, { d: 0.4 }],
        ["but not in a dry jar", 1160, 590, <SK c={DIM} s={22} strikeAt={c("but not in a dry jar") + 1.4}>a sprout stored inside</SK>],
        ["keeps a promise for forty years", 1560, 380, <Person color={GOLD} size={140} />, { pop: true }],
        ["keeps a promise for forty years", 1560, 510, <W c={GOLD} s={24}>a promise kept</W>, { d: 0.4 }],
        ["everything a person does still counts", 960, 740, <W c={GOLD} s={34} serif>not anchored, and everything still counts</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const snd = c("Listen to a single sound until it ends");
  const key = c("Hold a key, and look for the opening in it");
  const use = c("Then use it");
  const bellO = 1 - ramp(t, key, 0.5) + ramp(t, c("And the sound is still heard"), 0.5);
  return (
    <AbsoluteFill>
      <Title at={c("So, try it")} color={GOLD}>try it</Title>
      <At x={960} y={400} s={pop(t, fps, snd - 0.3)} o={Math.min(1, bellO)}><Bell size={170} swing={swingOf(t, snd)} /></At>
      <Sound x={960} y={420} at={snd + 0.4} dur={6} r1={420} />
      <Sound x={960} y={420} at={c("And the sound is still heard") + 0.2} dur={6} r1={420} />
      <Items items={[
        ["Ask the koan", 960, 200, <W c={CHALK} s={30} serif>Does it arise, or does it cease?</W>, { until: "Hold a key, and look for the opening in it" }],
        ["the sound was heard in full", 960, 620, <W c={GOLD} s={32} serif>no “it” found; heard in full</W>, { until: "Hold a key, and look for the opening in it" }],
        ["Hold a key, and look for the opening in it", 700, 420, <Key />, { pop: true, until: "if the thought comes that emptiness is what makes things possible" }],
        ["Then use it", 1220, 420, <Door open={ramp(t, use + 0.4, 1.2)} />, { until: "if the thought comes that emptiness is what makes things possible" }],
        ["it was never found in the metal alone", 960, 680, <W c={CHALK} s={28}>the opening happens; not in the metal alone</W>, { until: "if the thought comes that emptiness is what makes things possible" }],
        ["if the thought comes that emptiness is what makes things possible", 960, 220, <SK c={DIM} s={26} strikeAt={c("Nothing is found doing the work") + 0.6}>emptiness doing the work</SK>],
        ["And the sound is still heard", 960, 680, <W c={GOLD} s={34} serif>and the sound is still heard</W>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["doubt", "The koan of Step 1 ends with no moment found"], ["web", "This is the seventh step of The Logic"],
    ["doubt", "Two opposite conclusions are drawn from the koan"], ["vivid", "The bell is heard"],
    ["sea", "Seen with the logic of substance, a moment of sound"], ["search", "We habitually treat function as a power inside the thing"],
    ["open", "A key opens this lock and no other"], ["doubt", "Now turn the koan round"], ["web", "Nagarjuna makes the point with a baker"],
    ["search", "A critic objects"], ["doubt", "But this does not make emptiness a power"], ["vivid", "Empty is not flimsy"],
    ["sea", "Come back to the koan's words"], ["web", "this was where his own view lagged behind"],
    ["whole", "no longer a secondary layer"], ["vivid", "Dogen turns over an old Zen saying"],
    ["search", "Knock on a table"], ["web", "The same logic runs beyond the moment"], ["whole", "So, try it"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["The koan of Step 1 ends with no moment found", <WorryScene />],
    ["This is the seventh step of The Logic", <StepScene />],
    ["Two opposite conclusions are drawn from the koan", <PremiseScene />],
    ["The bell is heard", <WorksScene />],
    ["Seen with the logic of substance, a moment of sound", <BothWaysScene />],
    ["We habitually treat function as a power inside the thing", <PowerScene />],
    ["A key opens this lock and no other", <KeyScene />],
    ["Now turn the koan round", <SealedScene />],
    ["Nagarjuna makes the point with a baker", <BakerScene />],
    ["A critic objects", <ReplyScene />],
    ["But this does not make emptiness a power", <NotPowerScene />],
    ["Empty is not flimsy", <FlimsyScene />],
    ["Come back to the koan's words", <LightningScene />],
    ["this was where his own view lagged behind", <LagScene />],
    ["no longer a secondary layer", <GroundScene />],
    ["Dogen turns over an old Zen saying", <RiceCakeScene />],
    ["Knock on a table", <SolidScene />],
    ["The same logic runs beyond the moment", <BeyondScene />],
    ["So, try it", <TryScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
