// After Anatta · Questions: The World Itself (question page q-world). Explainer drawings timed to the narration.
// Arc: the whirlpool (nothing found apart from the water; the leaves still spin) -> the question: if nothing is the
// ground floor, what is the world standing on? -> debates stall: each side assumes something fundamental -> the
// two-storey building and its candidates for the ground floor -> Nagarjuna on space and its mark (the container myth
// struck) -> Candrakirti: outer objects as much as mind, neither found ultimately -> Tsongkhapa: nothing established by
// its own characteristic -> three voices, one point; the world is not taken away -> the four questions run on the world
// (the ground floor named, searched, the working world kept, the floor and emptiness-as-floor never found) ->
// Dharmakirti's particulars (the Given) and Candrakirti's pot; the key, lock, hand and turning; the building loses its
// ground floor -> why the world is orderly: barley, fire, no hidden force -> "why is there anything at all?" falls away
// -> freedom from needing a final picture -> two traps: a new floor (the author's own Presence) and a void (ice, chariot)
// -> try it: the cup, the next floor, the window at dusk -> back to the river.
// Stance: emptiness is never drawn as a producer, ground, container, void beneath or fullness within; those appear only
// to be struck. The ground floor is drawn only to be taken away, and every candidate for it (matter, mind, energy, space,
// a field or web of relations, the Given, Presence, dependence itself) is struck in turn. The upstairs world (cups,
// people, rivers, a wall, the pot, the key, barley, fire, ice, the chariot, the window) stays vivid and affirmed.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, IceCube, Mood, ROSE, Reveal,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the whirlpool
  "Watch a whirlpool in a river", "It has a shape you could sketch", "Children throw leaves into it",
  "not one drop of its water stays for more than a moment",
  "Ask what the whirlpool is, apart from the water passing through it", "and nothing is found",
  "Ask whether it is therefore unreal", "and the leaves go on spinning",
  // the question
  "This is one of the question pages of After Anatta", "Its question is about the whole world, not one whirlpool",
  "If nothing is the ground floor, what is the world standing on",
  // debates stall
  "What is the world made of, finally", "Debates about mind, matter and physics often stall at the same place",
  "Each side assumes that something must be fundamental", "They argue only about which",
  "Every picture of the world seems to need a bottom layer", "This page puts each candidate for that layer through the test",
  // the two-storey building
  "Start with the substance reading", "It pictures a building with two storeys", "Upstairs is the world we live in",
  "Downstairs is what is simply there", "The candidates for the ground floor change with the century",
  "Atoms, or energy", "A universal mind", "An empty space that would exist with nothing in it", "a field or web of relations",
  // space
  "The tradition looked at these candidates one by one", "in the fifth chapter of his Middle Way verses, takes space",
  "Space cannot exist before its mark", "And the mark cannot exist without something it marks",
  "So space and what is located in it are designated together", "There is no empty box waiting first",
  "The books call that picture the container myth",
  // the mind
  "takes the mind", "outer objects exist as much as the mind that knows them", "Ultimately, neither is found",
  "To deny the objects and keep the mind would make mind the last substance",
  // own characteristic
  "names the mark of the whole view", "Nothing is established by its own characteristic, not even conventionally",
  "Three voices, one point", "each is looked for as the floor, and none is found", "And nothing they say takes the world away",
  // the four questions on the world
  "Now run the four questions of Step 8 on the world",
  "The first question", "Beneath the world of cups and people lies something that is simply there", "The world is built on it",
  "The second question", "Each candidate meets the same search", "Mind is known only with its objects",
  "Space is named only with what it holds", "A relation needs what it relates", "And dependence is not the new floor either",
  "Things and their links are designated together", "The world is seamless, but not fused into one stuff",
  "The third question", "The whole working world", "Cups and rivers", "Inside and outside, near and far",
  "The laws of physics", "A wall still stops a hand", "A friend's thoughts are still their own",
  "The fourth question", "A ground floor", "Not matter, mind, energy, space or a field", "And not emptiness either",
  "Emptiness is not a void beneath things, and not a fullness within them",
  // particulars and the pot
  "Even the subtlest floor fails", "kept one: momentary particulars, met by perception before any concept",
  "They count as real because they alone can do something", "The books call this the Given",
  "answers that what the world perceives is the pot, not a bare patch of colour", "The pot is met as a pot from the start",
  // the key
  "And doing something is no floor either",
  "A key's power to open is found only together with the lock, the hand and the turning",
  "Working is itself a mark of dependence", "the two-storey building has no ground floor",
  "Seeing is not a lower layer, and concept is not a top coat",
  // order
  "Then why is the world orderly", "Barley seeds grow barley, and fire burns", "The regularity is dependent arising itself",
  "It needs no hidden power to make it hold", "No hidden force sits inside the seed, pushing",
  "Seed, soil, water and season arise together", "The page on Cause and Effect takes this further",
  // why anything at all
  "And the last question people reach for", "But why is there anything at all", "That question expects one last ground",
  "When none is found, the question stops applying", "It is not answered", "It falls away",
  // what remains
  "What remains is not a final picture of reality", "but freedom from needing one",
  "There is no deeper level beneath appearances", "and no higher level above them",
  "The world as it appears and works is fully valid", "It is the only real there is",
  // the two traps
  "There are two traps", "The first is too much: eternalism", "Fine, not matter",
  "But energy, or pure awareness, or the web of interdependence", "The habit retreats to a new floor, and calls it progress",
  "The author knows this trap from the inside", "Presence was that floor for me", "the one reality behind everything",
  "The second is too little: nihilism", "No floor, so the world is unreal, a void",
  "But absolute nothingness cannot be posited", "The ice is cold", "The chariot carries passengers",
  // try it: the cup
  "So, try it", "Take a cup", "Notice its colour, its weight, its warmth", "Then look for the cup",
  "In the clay", "In the handle", "In the shape", "In the word", "Then drink from it", "The tea is still warm",
  "Nothing was lost in the looking", "watch for the next floor", "But energy is real", "But awareness is real",
  "Put that through the same test",
  // the window
  "And one more", "Stand at a window at dusk", "when the glass shows the room and the street at once",
  "Notice that inside and outside are drawn in the seeing", "And they are still useful",
  "The glass does not divide two worlds", "There is one world, without walls",
  // back to the river
  "Back to the river", "Look beneath the whirlpool for a floor of its own, and none is found",
  "Look beneath the world, and none is found there either", "Nothing is missing", "And the leaves go on spinning",
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
  dusk: { a: "rgba(170,90,70,0.44)", b: "rgba(70,50,140,0.46)", c: "rgba(190,140,60,0.32)" },
};

const RED = "#F2584C";

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

/** A chip that is struck through at `strikeAt` (only for an invented floor, never for a conventional thing). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

const Num: React.FC<{ n: string; color: string; lit: number }> = ({ n, color, lit }) => (
  <div style={{ width: 54, height: 54, borderRadius: 27, border: `3px solid ${color}`, background: `${color}${lit > 0.5 ? "44" : "11"}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: CHALK,
    boxShadow: lit > 0.5 ? `0 0 20px ${color}` : undefined }}>{n}</div>
);

const Q4: [string, string][] = [
  ["what would a substance view say?", WARM],
  ["what does dependency say instead?", TEAL],
  ["what is affirmed conventionally?", GOLD],
  ["what is never found?", VIOLET],
];

/** The heading of each question's scene: its number and its words. */
const QHead: React.FC<{ i: number; at: number }> = ({ i, at }) => {
  const { t, fps } = useT();
  return (
    <At x={960} y={120} s={pop(t, fps, at)} o={ramp(t, at, 0.4)}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Num n={String(i + 1)} color={Q4[i][1]} lit={1} /><Glow color={Q4[i][1]} size={40} serif>{Q4[i][0]}</Glow>
      </div>
    </At>
  );
};

// ---------------------------------------------------------------- drawings
/** A whirlpool: water turning, with leaves carried round (leaf: opacity of the leaves). */
const Whirlpool: React.FC<{ at: number; leaf?: number; scale?: number }> = ({ at, leaf = 0, scale = 1 }) => {
  const { t } = useT();
  const rot = (t - at) * 60;
  return (
    <div style={{ position: "relative", width: 360, height: 240, transform: `scale(${scale})` }}>
      <svg width={360} height={240} viewBox="-180 -120 360 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE}88)` }}>
        <g transform={`rotate(${rot})`}>
          {[0, 1, 2, 3].map(i => (
            <path key={i} d={`M ${30 + i * 30} 0 A ${30 + i * 30} ${(30 + i * 30) * 0.55} 0 1 1 ${-(20 + i * 30)} ${8 + i * 4}`}
              fill="none" stroke={ICE} strokeOpacity={0.9 - i * 0.18} strokeWidth={4} strokeLinecap="round" />
          ))}
        </g>
      </svg>
      {[0, 1, 2].map(k => {
        const a = ((t - at) * 1.6 + k * 2.1) % (Math.PI * 2);
        const r = 60 + k * 26 + 14 * Math.sin(t * 0.9 + k);
        return (
          <div key={k} style={{ position: "absolute", left: 180 + r * Math.cos(a) - 14, top: 120 + r * 0.55 * Math.sin(a) - 8, opacity: leaf,
            width: 28, height: 16, borderRadius: "50% 0", background: `${k === 1 ? GOLD : GREEN}aa`, border: `2px solid ${k === 1 ? GOLD : GREEN}`,
            transform: `rotate(${a * 57}deg)` }} />
        );
      })}
    </div>
  );
};

/** Water drops streaming through from left to right (the water passing through). */
const Drops: React.FC<{ at: number; y: number; x0?: number; x1?: number; o?: number }> = ({ at, y, x0 = 520, x1 = 1400, o = 1 }) => {
  const { t } = useT();
  if (t < at) return null;
  return (
    <>
      {Array.from({ length: 14 }).map((_, i) => {
        const q = (((t - at) * 0.35 + i / 14) % 1);
        const x = x0 + (x1 - x0) * q;
        const yy = y + 70 * Math.sin(q * Math.PI * 2 + i) * 0.6;
        return <div key={i} style={{ position: "absolute", left: x, top: yy, width: 12, height: 16, borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: `${ICE}aa`, boxShadow: `0 0 10px ${ICE}`, opacity: o * Math.sin(q * Math.PI) }} />;
      })}
    </>
  );
};

/** The two-storey building. Upstairs: the world we live in. Downstairs: the ground floor, drawn only to be removed.
 *  ground: 0..1 how solid the ground floor is drawn; gone: 0..1 it fades and its outline breaks. */
const Building: React.FC<{ up: number; ground: number; gone?: number; label?: string }> = ({ up, ground, gone = 0, label = "ground floor" }) => (
  <div style={{ width: 720, display: "flex", flexDirection: "column", alignItems: "center" }}>
    <svg width={760} height={70} viewBox="0 0 760 70" style={{ overflow: "visible", opacity: up }}>
      <path d="M20 68 L380 6 L740 68" fill="none" stroke={GOLD} strokeWidth={5} strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
    </svg>
    <div style={{ width: 720, height: 190, borderRadius: 10, border: `4px solid ${GOLD}`, background: `${GOLD}14`, opacity: up,
      boxShadow: `0 0 20px ${GOLD}55`, display: "flex", alignItems: "center", justifyContent: "center", gap: 26 }}>
      {["cups", "people", "colours", "names"].map((w) => <Chip key={w} color={TEAL} size={26}>{w}</Chip>)}
    </div>
    <div style={{ width: 720, height: 150, borderRadius: 10, marginTop: 6, opacity: ground * (1 - 0.85 * gone),
      border: `4px ${gone > 0.1 ? "dashed" : "solid"} ${WARM}`, background: `${WARM}${gone > 0.1 ? "08" : "22"}`,
      boxShadow: `0 0 ${20 * (1 - gone)}px ${WARM}66`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Glow color={WARM} size={30}>{label}</Glow>
    </div>
  </div>
);

/** An empty box: space pictured as a container (drawn only to be struck). */
const BoxOutline: React.FC<{ color?: string; dashed?: boolean }> = ({ color = ICE, dashed }) => (
  <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M30 60 L150 60 L150 180 L30 180 Z M30 60 L90 20 L210 20 L150 60 M210 20 L210 140 L150 180" fill={`${color}10`} stroke={color}
      strokeWidth={4} strokeLinejoin="round" strokeDasharray={dashed ? "10 8" : undefined} />
  </svg>
);

/** A ball resting where it is: something located, with its place drawn around it as it is drawn. */
const Ball: React.FC<{ color?: string; size?: number }> = ({ color = ROSE, size = 90 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: `radial-gradient(circle at 35% 30%, #fff8, ${color} 55%, ${color}88)`,
    boxShadow: `0 0 26px ${color}aa` }} />
);

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

const Tree: React.FC<{ color?: string; size?: number }> = ({ color = GREEN, size = 170 }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M85 186 L85 110 M85 130 L60 110 M85 120 L112 98" stroke="#b07a45" strokeWidth={8} strokeLinecap="round" fill="none" />
    <ellipse cx={85} cy={72} rx={72} ry={58} fill={`${color}33`} stroke={color} strokeWidth={4} />
  </svg>
);

const Cup: React.FC<{ color?: string; size?: number; steam?: number }> = ({ color = TEAL, size = 150, steam = 0 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 150 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      {[0, 1, 2].map(i => (
        <path key={i} d={`M${42 + i * 22} 12 Q${36 + i * 22 + 8 * Math.sin(t * 2 + i)} -6 ${44 + i * 22} -24`} fill="none" stroke={CHALK}
          strokeWidth={3} strokeLinecap="round" opacity={steam * (0.5 + 0.3 * Math.sin(t * 3 + i))} />
      ))}
      <path d="M20 20 L110 20 L100 100 Q65 112 30 100 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
      <path d="M108 38 Q140 40 134 64 Q128 84 103 80" fill="none" stroke={color} strokeWidth={5} />
    </svg>
  );
};

/** A clay pot. */
const Pot: React.FC<{ color?: string; size?: number }> = ({ color = WARM, size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
    <path d="M70 20 L130 20 L124 44 Q178 70 172 122 Q166 176 100 184 Q34 176 28 122 Q22 70 76 44 Z" fill={`${color}33`} stroke={color}
      strokeWidth={5} strokeLinejoin="round" />
    <path d="M44 100 Q100 120 156 100" fill="none" stroke={color} strokeWidth={3} opacity={0.7} />
    <path d="M66 20 L134 20" stroke={color} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

/** A bare patch of colour (the "particular", shown only to be struck). */
const Patch: React.FC<{ color?: string }> = ({ color = WARM }) => (
  <div style={{ width: 150, height: 110, borderRadius: "40% 55% 45% 60%", background: `${color}99`, filter: "blur(2px)", boxShadow: `0 0 30px ${color}88` }} />
);

const Key: React.FC<{ color?: string; turn?: number; size?: number }> = ({ color = GOLD, turn = 0, size = 220 }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 220 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}aa)`,
    transform: `rotateX(${turn * 80}deg)` }}>
    <circle cx={40} cy={44} r={30} fill={`${color}33`} stroke={color} strokeWidth={6} />
    <circle cx={40} cy={44} r={11} fill="#0008" stroke={color} strokeWidth={3} />
    <path d="M70 44 L212 44 M170 44 L170 66 M192 44 L192 60 M150 44 L150 62" stroke={color} strokeWidth={8} strokeLinecap="round" fill="none" />
  </svg>
);

const Lock: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={6} y={6} width={98} height={138} rx={16} fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={55} cy={60} r={14} fill="#000a" stroke={color} strokeWidth={3} />
    <path d="M48 70 L44 104 L66 104 L62 70 Z" fill="#000a" stroke={color} strokeWidth={3} />
  </svg>
);

/** A hand, open. */
const HandOpen: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={130} height={130} viewBox="0 0 130 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={30} y={62} width={70} height={56} rx={18} fill={`${color}22`} stroke={color} strokeWidth={4} />
    {[0, 1, 2, 3].map(i => <rect key={i} x={32 + i * 17} y={16} width={14} height={60} rx={7} fill={`${color}22`} stroke={color} strokeWidth={3.5} />)}
    <rect x={6} y={70} width={30} height={14} rx={7} fill={`${color}22`} stroke={color} strokeWidth={3.5} />
  </svg>
);

/** A stalk of barley. */
const Barley: React.FC<{ grow: number; color?: string }> = ({ grow, color = GOLD }) => (
  <svg width={120} height={220} viewBox="0 0 120 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d={`M60 216 L60 ${216 - 190 * grow}`} stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
    {Array.from({ length: 6 }).map((_, i) => {
      const y = 216 - 190 * grow + 14 + i * 18;
      return (
        <g key={i} opacity={ramp(grow, 0.5 + i * 0.07, 0.1)}>
          <ellipse cx={48} cy={y} rx={10} ry={6} fill={`${color}88`} stroke={color} strokeWidth={2} transform={`rotate(-30 48 ${y})`} />
          <ellipse cx={72} cy={y} rx={10} ry={6} fill={`${color}88`} stroke={color} strokeWidth={2} transform={`rotate(30 72 ${y})`} />
        </g>
      );
    })}
  </svg>
);

/** A flickering flame. */
const Flame: React.FC<{ size?: number }> = ({ size = 140 }) => {
  const { t } = useT();
  const k = 1 + 0.06 * Math.sin(t * 11) + 0.04 * Math.sin(t * 17);
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 100 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 18px ${WARM})` }}>
      <g transform={`translate(50 126) scale(1 ${k}) translate(-50 -126)`}>
        <path d="M50 4 Q86 50 80 86 Q76 122 50 126 Q24 122 20 86 Q16 56 38 34 Q40 60 52 64 Q44 34 50 4 Z" fill={`${WARM}bb`} stroke={WARM} strokeWidth={3} />
        <path d="M50 64 Q66 84 62 104 Q58 120 50 120 Q42 120 38 104 Q36 86 50 64 Z" fill={`${GOLD}dd`} />
      </g>
    </svg>
  );
};

/** A chariot wheel with spokes. */
const Wheel: React.FC<{ color?: string; size?: number; spin?: number }> = ({ color = WARM, size = 150, spin = 0 }) => (
  <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle r={52} fill="none" stroke={color} strokeWidth={6} />
    <circle r={10} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <g transform={`rotate(${spin})`}>
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={10} x2={0} y2={50} stroke={color} strokeWidth={4} transform={`rotate(${i * 45})`} />)}
    </g>
  </svg>
);

/** A window at dusk: the room's lamp reflected over the street outside, both seen at once (mix: 0..1). */
const DuskWindow: React.FC<{ mix: number }> = ({ mix }) => (
  <div style={{ position: "relative", width: 560, height: 400, borderRadius: 12, border: `8px solid ${DIM}`, overflow: "hidden",
    background: "linear-gradient(180deg, #4a3a7a 0%, #b0607a 55%, #e0a060 100%)", boxShadow: `0 0 30px ${GOLD}55` }}>
    {/* the street outside: houses and a street lamp */}
    <svg width={560} height={400} viewBox="0 0 560 400" style={{ position: "absolute", left: 0, top: 0 }}>
      <path d="M0 300 L60 300 L60 230 L120 230 L120 270 L200 270 L200 210 L260 210 L260 290 L340 290 L340 240 L420 240 L420 280 L560 280 L560 400 L0 400 Z"
        fill="#1a1530" />
      {[[80, 250], [220, 230], [360, 260], [450, 300]].map(([x, y], i) => <rect key={i} x={x} y={y} width={14} height={14} fill={GOLD} opacity={0.8} />)}
      <line x1={480} y1={400} x2={480} y2={300} stroke={DIM} strokeWidth={5} />
      <circle cx={480} cy={296} r={10} fill={GOLD} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
    </svg>
    {/* the room, reflected in the glass */}
    <svg width={560} height={400} viewBox="0 0 560 400" style={{ position: "absolute", left: 0, top: 0, opacity: 0.25 + 0.5 * mix }}>
      <path d="M150 120 L190 120 L210 170 L130 170 Z" fill={`${GOLD}88`} stroke={GOLD} strokeWidth={3} />
      <line x1={170} y1={170} x2={170} y2={300} stroke={GOLD} strokeWidth={5} />
      <circle cx={170} cy={150} r={60} fill={`${GOLD}22`} />
      <rect x={300} y={240} width={180} height={70} rx={14} fill={`${ROSE}44`} stroke={ROSE} strokeWidth={3} />
      <rect x={60} y={40} width={110} height={70} fill="none" stroke={CHALK} strokeWidth={3} opacity={0.7} />
    </svg>
    {/* window bars */}
    <div style={{ position: "absolute", left: 276, top: 0, width: 8, height: 400, background: DIM }} />
    <div style={{ position: "absolute", left: 0, top: 196, width: 560, height: 8, background: DIM }} />
  </div>
);

/** A drawn X over (x, y). */
const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

// ---------------------------------------------------------------- scenes
const WhirlScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const w = c("Watch a whirlpool in a river");
  const drop = c("not one drop of its water stays for more than a moment");
  const ask = c("Ask what the whirlpool is, apart from the water passing through it");
  const spin = c("and the leaves go on spinning");
  return (
    <AbsoluteFill>
      <Title at={w} color={ICE}>a whirlpool in a river</Title>
      <At x={960} y={430} o={ramp(t, w, 0.8)} s={1.5}><Whirlpool at={w} leaf={ramp(t, c("Children throw leaves into it"), 0.6)} /></At>
      <Drops at={drop} y={420} o={1 - ramp(t, ask + 2.5, 0.6) * 0.5} />
      <Items items={[
        ["It has a shape you could sketch", 520, 250, <W c={CHALK} s={28}>a shape you could sketch</W>],
        ["It has a shape you could sketch", 1400, 250, <W c={CHALK} s={28}>a place you could point to</W>, { d: 1.4 }],
        ["Children throw leaves into it", 1460, 560, <W c={GREEN} s={26}>leaves, spinning</W>, { d: 0.8 }],
        ["not one drop of its water stays for more than a moment", 960, 650, <W c={ICE} s={28}>not one drop stays more than a moment</W>],
        ["Ask what the whirlpool is, apart from the water passing through it", 960, 720,
          <SK c={DIM} s={26} strikeAt={c("and nothing is found") + 0.6}>a whirlpool apart from the water</SK>],
        ["Ask whether it is therefore unreal", 460, 560, <SK c={DIM} s={24} strikeAt={spin + 0.4}>so it is unreal?</SK>],
        ["and the leaves go on spinning", 960, 800, <W c={GOLD} s={34} serif>and the leaves go on spinning</W>],
      ]} />
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pg = c("This is one of the question pages of After Anatta");
  const wh = c("Its question is about the whole world, not one whirlpool");
  const q = c("If nothing is the ground floor, what is the world standing on");
  return (
    <AbsoluteFill>
      <Title at={pg}>After Anatta · Questions</Title>
      <Items items={[
        ["This is one of the question pages of After Anatta", 960, 190, <W c={DIM} s={28}>notes by John Tan (Thusness)</W>, { d: 1.2 }],
      ]} />
      <At x={600} y={420} o={ramp(t, wh, 0.5) * (1 - ramp(t, wh + 1.6, 0.6) * 0.6)}><Whirlpool at={wh} leaf={1} /></At>
      <At x={1300} y={420} s={pop(t, fps, wh + 1.2)}>
        <svg width={300} height={300} viewBox="0 0 300 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${TEAL}88)` }}>
          <circle cx={150} cy={150} r={130} fill={`${TEAL}18`} stroke={TEAL} strokeWidth={5} />
          <ellipse cx={150} cy={150} rx={60} ry={130} fill="none" stroke={TEAL} strokeWidth={3} opacity={0.6} />
          <line x1={20} y1={150} x2={280} y2={150} stroke={TEAL} strokeWidth={3} opacity={0.6} />
          <path d="M80 110 Q110 80 140 100 Q160 130 120 150 Q90 150 80 110 Z M170 170 Q210 150 230 190 Q200 230 170 210 Z" fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} />
        </svg>
      </At>
      <At x={1300} y={610} o={ramp(t, wh + 1.6, 0.4)}><W c={TEAL} s={26}>the whole world</W></At>
      <At x={960} y={740} o={ramp(t, q - 0.3, 0.3)}>
        <Reveal text="If nothing is the ground floor, what is the world standing on?" at={q} size={46} speed={0.03} />
      </At>
    </AbsoluteFill>
  );
};

const DebateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("Debates about mind, matter and physics often stall at the same place");
  const fund = c("Each side assumes that something must be fundamental");
  const S: [string, number, string][] = [["mind", 520, VIOLET], ["matter", 960, WARM], ["physics", 1400, ICE]];
  return (
    <AbsoluteFill>
      <Title at={c("What is the world made of, finally")}>what is the world made of, finally?</Title>
      {S.map(([w, x, col], i) => (
        <At key={w} x={x} y={300} s={pop(t, fps, d + 0.5 + i * 0.4)}><K c={col} s={32}>{w}</K></At>
      ))}
      <Items items={[
        ["Debates about mind, matter and physics often stall at the same place", 960, 390, <W c={DIM} s={26}>they stall at the same place</W>, { d: 2.4 }],
        ["Each side assumes that something must be fundamental", 960, 470, <W c={WARM} s={30} serif>“something must be fundamental”</W>],
        ["They argue only about which", 960, 540, <W c={DIM} s={26}>they argue only about which</W>],
        ["Every picture of the world seems to need a bottom layer", 960, 700, <W c={CHALK} s={28}>every picture seems to need a bottom layer</W>, { until: "This page puts each candidate for that layer through the test", ud: 0.2 }],
        ["This page puts each candidate for that layer through the test", 960, 700, <W c={GOLD} s={30} serif>each candidate, put through the test</W>, { d: 0.4 }],
      ]} />
      <At x={960} y={620} o={ramp(t, c("Every picture of the world seems to need a bottom layer") + 0.6, 0.5) * (1 - ramp(t, c("This page puts each candidate for that layer through the test") + 2.2, 0.6) * 0.6)}>
        <div style={{ width: 760, height: 22, borderRadius: 11, background: `${WARM}33`, border: `3px solid ${WARM}`, boxShadow: `0 0 16px ${WARM}55` }} />
      </At>
      <At x={960} y={560} o={ramp(t, fund + 0.8, 0.4) * (1 - ramp(t, c("Every picture of the world seems to need a bottom layer"), 0.4))}>
        <W c={DIM} s={22}>but which thing?</W>
      </At>
    </AbsoluteFill>
  );
};

const BuildingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("It pictures a building with two storeys");
  const up = c("Upstairs is the world we live in");
  const down = c("Downstairs is what is simply there");
  const cand = c("The candidates for the ground floor change with the century");
  const C: [string, string, string][] = [
    ["Atoms, or energy", "atoms · energy", WARM],
    ["A universal mind", "a universal mind", VIOLET],
    ["An empty space that would exist with nothing in it", "empty space", ICE],
    ["a field or web of relations", "a field · a web of relations", TEAL],
  ];
  const showCand = ramp(t, cand, 0.4);
  return (
    <AbsoluteFill>
      <Title at={c("Start with the substance reading")} color={WARM}>the substance reading</Title>
      <At x={700} y={420} s={pop(t, fps, b)} o={ramp(t, b, 0.4)}>
        <Building up={ramp(t, up - 0.2, 0.5)} ground={ramp(t, down, 0.5)} label="simply there, holding it up" />
      </At>
      <Items items={[
        ["It pictures a building with two storeys", 700, 190, <W c={DIM} s={26}>a building with two storeys</W>, { d: 0.6 }],
        ["Upstairs is the world we live in", 1420, 330, <W c={GOLD} s={28}>upstairs: the world we live in</W>],
        ["Downstairs is what is simply there", 1420, 560, <W c={WARM} s={28}>downstairs: standing on nothing else</W>, { d: 0.6 }],
      ]} />
      {C.map(([cue, w, col], i) => (
        <At key={w} x={[330, 720, 1110, 1560][i]} y={780} s={pop(t, fps, c(cue))} o={showCand * ramp(t, c(cue), 0.3)}><K c={col} s={26}>{w}</K></At>
      ))}
      <At x={1420} y={680} o={showCand}><W c={DIM} s={24}>candidates for the ground floor, by century:</W></At>
    </AbsoluteFill>
  );
};

const SpaceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tr = c("The tradition looked at these candidates one by one");
  const sp = c("in the fifth chapter of his Middle Way verses, takes space");
  const mark = c("Space cannot exist before its mark");
  const m2 = c("And the mark cannot exist without something it marks");
  const tog = c("So space and what is located in it are designated together");
  const box = c("There is no empty box waiting first");
  return (
    <AbsoluteFill>
      <Title at={tr}>the tradition looks, one by one</Title>
      <Items items={[
        ["in the fifth chapter of his Middle Way verses, takes space", 960, 190, <W c={ICE} s={30} serif>Nāgārjuna · Middle Way verses, chapter 5: space</W>],
      ]} />
      <At x={520} y={420} s={pop(t, fps, mark)} o={ramp(t, mark, 0.3)}><K c={ICE} s={28}>space</K></At>
      <Flow x1={600} y1={420} x2={820} y2={420} color={ICE} p={ramp(t, mark + 0.8, 0.5)} pulses={false} />
      <At x={1000} y={420} s={pop(t, fps, mark + 1.2)} o={ramp(t, mark + 1.2, 0.3)}><K c={GOLD} s={26}>its mark: no obstruction</K></At>
      <Flow x1={1180} y1={420} x2={1360} y2={420} color={GOLD} p={ramp(t, m2 + 0.6, 0.5)} pulses={false} />
      <At x={1460} y={420} s={pop(t, fps, m2 + 1.0)}><Ball /></At>
      <At x={1460} y={500} o={ramp(t, m2 + 1.2, 0.4)}><W c={ROSE} s={22}>something it marks</W></At>
      <Items items={[
        ["So space and what is located in it are designated together", 960, 560, <W c={TEAL} s={30} serif>space and what is in it: designated together</W>],
      ]} />
      <Svg>
        <DrawPath d="M520 460 Q960 520 1460 460" p={ramp(t, tog + 0.4, 0.8)} color={TEAL} width={3} len={1100} />
      </Svg>
      <At x={760} y={710} o={ramp(t, box, 0.4)}><BoxOutline dashed /></At>
      <Crossed x={760} y={710} at={box + 1.2} size={70} />
      <Items items={[
        ["There is no empty box waiting first", 1240, 680, <W c={CHALK} s={28}>no empty box waiting first</W>, { d: 0.4 }],
        ["The books call that picture the container myth", 1240, 750, <SK c={DIM} s={26} strikeAt={c("The books call that picture the container myth") + 1.8}>the container myth</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const MindScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const m = c("takes the mind");
  const oo = c("outer objects exist as much as the mind that knows them");
  const deny = c("To deny the objects and keep the mind would make mind the last substance");
  const fade = ramp(t, deny + 0.6, 0.8);
  return (
    <AbsoluteFill>
      <Title at={m} color={VIOLET}>Candrakīrti · the mind</Title>
      <At x={600} y={380} s={pop(t, fps, oo)}><Eye color={VIOLET} size={190} /></At>
      <At x={600} y={480} o={ramp(t, oo + 0.3, 0.4)}><W c={VIOLET} s={26}>the mind that knows</W></At>
      <At x={1320} y={370} s={pop(t, fps, oo + 1.4)} o={1 - 0.75 * fade}><Tree size={150} /></At>
      <At x={1320} y={480} o={ramp(t, oo + 1.6, 0.4) * (1 - 0.75 * fade)}><W c={GREEN} s={26}>outer objects</W></At>
      <Flow x1={720} y1={380} x2={1200} y2={380} color={GOLD} p={ramp(t, oo + 2.0, 0.6)} pulses={false} dash />
      <Items items={[
        ["outer objects exist as much as the mind that knows them", 960, 230, <W c={GOLD} s={28}>conventionally: both, equally</W>, { d: 2.6 }],
        ["Ultimately, neither is found", 960, 580, <W c={DIM} s={28}>ultimately: neither is found</W>],
      ]} />
      <At x={960} y={690} o={ramp(t, deny, 0.4)}><SK c={VIOLET} s={28} strikeAt={deny + 3.4}>mind kept as the last substance</SK></At>
      <At x={960} y={780} o={ramp(t, deny + 3.6, 0.5)}><W c={WARM} s={26}>deny objects, keep mind: a new floor</W></At>
    </AbsoluteFill>
  );
};

const VoicesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ts = c("names the mark of the whole view");
  const v = c("Three voices, one point");
  const each = c("each is looked for as the floor, and none is found");
  const keep = c("And nothing they say takes the world away");
  const V: [string, string, string][] = [["Nāgārjuna", "space", ICE], ["Candrakīrti", "the mind", VIOLET], ["Tsongkhapa", "a mark of its own", GOLD]];
  return (
    <AbsoluteFill>
      <Title at={ts} color={GOLD}>Tsongkhapa · the mark of the view</Title>
      <At x={960} y={240} o={ramp(t, c("Nothing is established by its own characteristic, not even conventionally") - 0.3, 0.3) * (1 - ramp(t, v, 0.5) * 0.5)}>
        <Reveal text="Nothing is established by its own characteristic, not even conventionally." at={c("Nothing is established by its own characteristic, not even conventionally")}
          size={40} speed={0.025} />
      </At>
      {V.map(([who, w, col], i) => (
        <React.Fragment key={who}>
          <At x={480 + i * 480} y={400} s={pop(t, fps, v + 0.4 + i * 0.4)}><W c={col} s={30} serif>{who}</W></At>
          <At x={480 + i * 480} y={480} o={ramp(t, each, 0.4)}><SK c={DIM} s={24} strikeAt={each + 1.4 + i * 0.3}>{`${w} as the floor`}</SK></At>
        </React.Fragment>
      ))}
      <At x={960} y={620} s={pop(t, fps, keep)} o={ramp(t, keep, 0.3)}>
        <div style={{ display: "flex", gap: 20 }}>{["cups", "rivers", "people", "names"].map(w => <K key={w} c={TEAL} s={26}>{w}</K>)}</div>
      </At>
      <At x={960} y={720} o={ramp(t, keep + 0.6, 0.4)}><W c={GOLD} s={32} serif>and the world is not taken away</W></At>
    </AbsoluteFill>
  );
};

const FourScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const r = c("Now run the four questions of Step 8 on the world");
  return (
    <AbsoluteFill>
      <Title at={r}>the four questions, run on the world</Title>
      {Q4.map(([q, col], i) => (
        <At key={q} x={960} y={280 + i * 120} s={pop(t, fps, r + 0.8 + i * 0.4)} o={ramp(t, r + 0.8 + i * 0.4, 0.3)}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}><Num n={String(i + 1)} color={col} lit={1} /><K c={col} s={30}>{q}</K></div>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const Q1Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Beneath the world of cups and people lies something that is simply there");
  const built = c("The world is built on it");
  const F = ["matter", "mind", "energy", "space", "a web of relations"];
  return (
    <AbsoluteFill>
      <QHead i={0} at={c("The first question")} />
      <At x={960} y={300} o={ramp(t, b, 0.4)}>
        <div style={{ display: "flex", gap: 22 }}>{["cups", "people"].map(w => <K key={w} c={TEAL} s={30}>{w}</K>)}</div>
      </At>
      <At x={960} y={390} o={ramp(t, b + 1.0, 0.4)}><W c={DIM} s={26}>beneath them, simply there:</W></At>
      {F.map((w, i) => (
        <At key={w} x={420 + i * 270} y={490} s={pop(t, fps, b + 1.8 + i * 0.35)}><K c={WARM} s={26}>{w}</K></At>
      ))}
      <At x={960} y={590} o={ramp(t, built, 0.5)}>
        <div style={{ width: 1300, height: 26, borderRadius: 13, background: `${WARM}33`, border: `3px solid ${WARM}`, boxShadow: `0 0 18px ${WARM}66` }} />
      </At>
      <Items items={[
        ["The world is built on it", 960, 690, <W c={WARM} s={32} serif>“the world is built on it”</W>, { d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const Q2Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s = c("Each candidate meets the same search");
  const dep = c("And dependence is not the new floor either");
  const tog = c("Things and their links are designated together");
  const P: [string, string, string, string][] = [
    ["Mind is known only with its objects", "mind", "its objects", VIOLET],
    ["Space is named only with what it holds", "space", "what it holds", ICE],
    ["A relation needs what it relates", "a relation", "what it relates", TEAL],
  ];
  return (
    <AbsoluteFill>
      <QHead i={1} at={c("The second question")} />
      <Items items={[
        ["Each candidate meets the same search", 960, 210, <W c={GOLD} s={30} serif>the same search: none found standing on its own</W>],
      ]} />
      {P.map(([cue, a, b, col], i) => (
        <React.Fragment key={a}>
          <At x={620} y={320 + i * 100} s={pop(t, fps, c(cue))}><K c={col} s={28}>{a}</K></At>
          <At x={960} y={320 + i * 100} o={ramp(t, c(cue) + 0.5, 0.4)}><W c={DIM} s={26}>only with</W></At>
          <At x={1300} y={320 + i * 100} s={pop(t, fps, c(cue) + 0.9)}><K c={col} s={28}>{b}</K></At>
        </React.Fragment>
      ))}
      <At x={960} y={640} o={ramp(t, dep, 0.4)}><SK c={DIM} s={26} strikeAt={dep + 1.8}>dependence as the new floor</SK></At>
      <Items items={[
        ["Things and their links are designated together", 960, 720, <W c={TEAL} s={28}>things and links: designated together, neither first</W>],
        ["The world is seamless, but not fused into one stuff", 960, 790, <W c={GOLD} s={30} serif>seamless, not fused into one stuff</W>],
      ]} />
      <At x={1560} y={640} o={ramp(t, tog + 0.4, 0.4)}><W c={DIM} s={22}>no floor here either</W></At>
    </AbsoluteFill>
  );
};

const Q3Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wall = c("A wall still stops a hand");
  const fr = c("A friend's thoughts are still their own");
  return (
    <AbsoluteFill>
      <QHead i={2} at={c("The third question")} />
      <Items items={[
        ["The whole working world", 960, 210, <W c={GOLD} s={32} serif>the whole working world</W>],
        ["Cups and rivers", 380, 360, <Cup size={130} />, { pop: true }],
        ["Cups and rivers", 620, 360, <W c={ICE} s={28}>≈ rivers ≈</W>, { d: 0.5 }],
        ["Inside and outside, near and far", 1000, 330, <K c={TEAL} s={26}>inside · outside</K>, { pop: true }],
        ["Inside and outside, near and far", 1000, 410, <K c={TEAL} s={26}>near · far</K>, { pop: true, d: 1.0 }],
        ["The laws of physics", 1480, 330, <W c={ICE} s={34} serif>F = ma</W>, { pop: true }],
        ["The laws of physics", 1480, 410, <W c={DIM} s={22}>among the most reliable designations</W>, { d: 1.2 }],
      ]} />
      <At x={620} y={600} o={ramp(t, wall, 0.4)}>
        <div style={{ width: 40, height: 220, borderRadius: 6, background: `repeating-linear-gradient(180deg, ${WARM}66 0 30px, ${WARM}22 30px 36px)`,
          border: `3px solid ${WARM}`, boxShadow: `0 0 16px ${WARM}66` }} />
      </At>
      <At x={520 - 0 + 40 * (1 - ramp(t, wall + 0.4, 0.6))} y={600} o={ramp(t, wall + 0.2, 0.3)}><HandOpen /></At>
      <Items items={[
        ["A wall still stops a hand", 620, 750, <W c={WARM} s={26}>a wall still stops a hand</W>, { d: 0.8 }],
        ["A friend's thoughts are still their own", 1300, 750, <W c={VIOLET} s={26}>their thoughts are their own</W>, { d: 0.8 }],
      ]} />
      <At x={1300} y={590} s={pop(t, fps, fr)} o={ramp(t, fr, 0.3)}>
        <svg width={200} height={150} viewBox="0 0 160 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${VIOLET}88)` }}>
          <path d="M40 70 Q15 70 18 50 Q20 28 45 32 Q55 10 82 16 Q105 4 120 26 Q148 28 142 54 Q146 78 118 78 Q100 92 78 80 Q58 90 40 70 Z" fill={`${VIOLET}22`} stroke={VIOLET} strokeWidth={4} />
          <circle cx={34} cy={96} r={8} fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={3} />
        </svg>
      </At>
    </AbsoluteFill>
  );
};

const Q4Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const g = c("A ground floor");
  const nm = c("Not matter, mind, energy, space or a field");
  const vf = c("Emptiness is not a void beneath things, and not a fullness within them");
  const F = ["matter", "mind", "energy", "space", "a field"];
  return (
    <AbsoluteFill>
      <QHead i={3} at={c("The fourth question")} />
      <At x={960} y={260} s={pop(t, fps, g)}><SK c={WARM} s={32} strikeAt={nm + 3.4}>a ground floor</SK></At>
      {F.map((w, i) => (
        <At key={w} x={440 + i * 260} y={380} o={ramp(t, nm + i * 0.4, 0.3)}><SK c={DIM} s={24} strikeAt={nm + 0.4 + i * 0.4}>{w}</SK></At>
      ))}
      <Items items={[
        ["And not emptiness either", 960, 490, <W c={VIOLET} s={30} serif>and not emptiness either</W>],
      ]} />
      <At x={640} y={600} o={ramp(t, vf, 0.4)}><SK c={DIM} s={26} strikeAt={vf + 2.0}>a void beneath things</SK></At>
      <At x={1280} y={600} o={ramp(t, vf + 1.6, 0.4)}><SK c={DIM} s={26} strikeAt={vf + 3.4}>a fullness within them</SK></At>
      <At x={960} y={730} o={ramp(t, vf + 4.2, 0.5)}><W c={GOLD} s={30} serif>emptiness: only the not-finding of a floor</W></At>
    </AbsoluteFill>
  );
};

const ParticularScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Even the subtlest floor fails");
  const k = c("kept one: momentary particulars, met by perception before any concept");
  const given = c("The books call this the Given");
  const pot = c("answers that what the world perceives is the pot, not a bare patch of colour");
  const start = c("The pot is met as a pot from the start");
  return (
    <AbsoluteFill>
      <Title at={sub} color={WARM}>even the subtlest floor</Title>
      <Items items={[
        ["kept one: momentary particulars, met by perception before any concept", 520, 200, <W c={ICE} s={28} serif>Dharmakīrti: momentary particulars</W>],
        ["kept one: momentary particulars, met by perception before any concept", 520, 270, <W c={DIM} s={24}>met before any concept</W>, { d: 2.2 }],
        ["They count as real because they alone can do something", 520, 340, <W c={DIM} s={24}>real, because they alone can do something</W>],
      ]} />
      <At x={520} y={490} s={pop(t, fps, k + 0.8)} o={1 - ramp(t, pot + 2.6, 0.6) * 0.6}><Patch /></At>
      <At x={520} y={640} o={ramp(t, given, 0.4)}><SK c={WARM} s={26} strikeAt={start + 1.0}>the Given: a floor beneath concepts</SK></At>
      <Items items={[
        ["answers that what the world perceives is the pot, not a bare patch of colour", 1380, 200, <W c={VIOLET} s={28} serif>Candrakīrti: the world sees the pot</W>],
      ]} />
      <At x={1380} y={440} s={pop(t, fps, pot + 1.4)}><Pot /></At>
      <Items items={[
        ["The pot is met as a pot from the start", 1380, 610, <W c={GOLD} s={28}>met as a pot from the start</W>],
      ]} />
    </AbsoluteFill>
  );
};

const KeyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nf = c("And doing something is no floor either");
  const key = c("A key's power to open is found only together with the lock, the hand and the turning");
  const work = c("Working is itself a mark of dependence");
  const bld = c("the two-storey building has no ground floor");
  const turn = 0.45 * ramp(t, key + 3.6, 0.8);
  const showBld = ramp(t, bld - 0.2, 0.4);
  return (
    <AbsoluteFill>
      <Title at={nf}>doing something is no floor either</Title>
      <At x={960} y={420} o={1 - showBld} s={1.25}>
        <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
          <div style={{ opacity: ramp(t, key, 0.4) }}><Key turn={turn} size={240} /></div>
          <div style={{ opacity: ramp(t, key + 1.4, 0.4) }}><Lock /></div>
          <div style={{ opacity: ramp(t, key + 2.0, 0.4) }}><HandOpen color={ROSE} /></div>
        </div>
      </At>
      <Items items={[
        ["A key's power to open is found only together with the lock, the hand and the turning", 960, 580,
          <W c={DIM} s={24}>key · lock · hand · turning</W>, { d: 2.6, until: "the two-storey building has no ground floor" }],
        ["A key's power to open is found only together with the lock, the hand and the turning", 960, 230,
          <SK c={DIM} s={24} strikeAt={work}>a power inside the key</SK>, { d: 1.0, until: "the two-storey building has no ground floor" }],
        ["Working is itself a mark of dependence", 960, 680, <W c={GOLD} s={30} serif>working is a mark of dependence (Step 7)</W>, { until: "the two-storey building has no ground floor" }],
      ]} />
      <At x={960} y={470} o={showBld} s={0.8}>
        <Building up={1} ground={1} gone={ramp(t, bld + 1.0, 1.2)} label="the particular" />
      </At>
      <Items items={[
        ["Seeing is not a lower layer, and concept is not a top coat", 960, 770, <W c={GOLD} s={30} serif>seeing: no lower layer · concept: no top coat</W>],
      ]} />
    </AbsoluteFill>
  );
};

const OrderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Barley seeds grow barley, and fire burns");
  const hid = c("It needs no hidden power to make it hold");
  const force = c("No hidden force sits inside the seed, pushing");
  const tog = c("Seed, soil, water and season arise together");
  const S = ["seed", "soil", "water", "season"];
  return (
    <AbsoluteFill>
      <Title at={c("Then why is the world orderly")}>then why is the world orderly?</Title>
      <At x={480} y={360} s={pop(t, fps, b)}><Barley grow={ramp(t, b + 0.3, 1.6)} /></At>
      <At x={480} y={500} o={ramp(t, b + 0.6, 0.4)}><W c={GOLD} s={24}>barley grows barley</W></At>
      <At x={820} y={370} s={pop(t, fps, b + 1.4)}><Flame size={110} /></At>
      <At x={820} y={500} o={ramp(t, b + 1.8, 0.4)}><W c={WARM} s={24}>fire burns</W></At>
      <Items items={[
        ["The regularity is dependent arising itself", 1380, 300, <W c={TEAL} s={30} serif>the regularity: dependent arising itself</W>],
      ]} />
      <At x={1380} y={400} o={ramp(t, hid, 0.4)}><SK c={DIM} s={26} strikeAt={hid + 1.8}>a hidden power holding it</SK></At>
      <At x={1380} y={480} o={ramp(t, force, 0.4)}><SK c={DIM} s={26} strikeAt={force + 1.8}>a force inside the seed</SK></At>
      {S.map((w, i) => (
        <At key={w} x={540 + i * 280} y={650} s={pop(t, fps, tog + i * 0.35)}><K c={GREEN} s={28}>{w}</K></At>
      ))}
      <Svg>
        {[0, 1, 2].map(i => <DrawPath key={i} d={`M${600 + i * 280} 650 L${760 + i * 280} 650`} p={ramp(t, tog + 1.4 + i * 0.2, 0.4)} color={GREEN} width={3} len={200} />)}
      </Svg>
      <Items items={[
        ["Seed, soil, water and season arise together", 960, 740, <W c={GOLD} s={28}>arising together: barley comes, reliably</W>, { d: 2.0 }],
        ["The page on Cause and Effect takes this further", 960, 810, <W c={DIM} s={24}>more on the Cause and Effect page</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const why = c("But why is there anything at all");
  const exp = c("That question expects one last ground");
  const stop = c("When none is found, the question stops applying");
  const falls = ramp(t, c("It falls away"), 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("And the last question people reach for")} color={DIM} size={34}>the last question people reach for</Title>
      <At x={960} y={340 + 120 * falls} o={ramp(t, why - 0.3, 0.3) * (1 - falls)}>
        <Reveal text="“But why is there anything at all?”" at={why} size={56} color={ICE} top="#EAF8FF" speed={0.03} />
      </At>
      <At x={960} y={500} o={ramp(t, exp + 0.4, 0.4) * (1 - ramp(t, stop + 1.6, 0.6))}>
        <div style={{ width: 640, height: 22, borderRadius: 11, background: `${WARM}33`, border: `3px dashed ${WARM}`, boxShadow: `0 0 16px ${WARM}55` }} />
      </At>
      <Items items={[
        ["That question expects one last ground", 960, 570, <W c={WARM} s={26}>it expects one last ground</W>, { until: "It is not answered" }],
        ["When none is found, the question stops applying", 960, 640, <W c={CHALK} s={28}>none found: the question stops applying</W>],
        ["It is not answered", 960, 720, <W c={DIM} s={28}>not answered</W>],
        ["It falls away", 960, 790, <W c={GOLD} s={34} serif>it falls away</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RemainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fp = c("What remains is not a final picture of reality");
  const free = c("but freedom from needing one");
  const deep = c("There is no deeper level beneath appearances");
  const high = c("and no higher level above them");
  return (
    <AbsoluteFill>
      <At x={960} y={160} o={ramp(t, fp, 0.4)}><SK c={DIM} s={30} strikeAt={free}>a final picture of reality</SK></At>
      <At x={960} y={250} s={pop(t, fps, free + 0.4)} o={ramp(t, free + 0.4, 0.4)}><W c={GOLD} s={42} serif>freedom from needing one</W></At>
      <At x={960} y={360} o={ramp(t, high, 0.4)}><SK c={DIM} s={24} strikeAt={high + 1.4}>a higher level above</SK></At>
      <At x={960} y={490} o={ramp(t, deep - 0.2, 0.4)}>
        <div style={{ display: "flex", gap: 22 }}>{["rivers", "cups", "people", "colours", "names"].map(w => <K key={w} c={TEAL} s={28}>{w}</K>)}</div>
      </At>
      <At x={960} y={610} o={ramp(t, deep + 0.4, 0.4)}><SK c={DIM} s={24} strikeAt={deep + 1.8}>a deeper level beneath</SK></At>
      <Items items={[
        ["The world as it appears and works is fully valid", 960, 720, <W c={CHALK} s={30}>as it appears and works: fully valid</W>],
        ["It is the only real there is", 960, 800, <W c={GOLD} s={34} serif>the only “real” there is</W>],
      ]} />
    </AbsoluteFill>
  );
};

const EternalScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tr = c("There are two traps");
  const fine = c("Fine, not matter");
  const be = c("But energy, or pure awareness, or the web of interdependence");
  const ret = c("The habit retreats to a new floor, and calls it progress");
  const pres = c("Presence was that floor for me");
  const N = ["energy", "pure awareness", "the web of interdependence"];
  return (
    <AbsoluteFill>
      <Title at={tr} color={WARM}>two traps · 1: too much</Title>
      <Items items={[
        ["The first is too much: eternalism", 960, 190, <W c={WARM} s={30} serif>eternalism</W>],
        ["Fine, not matter", 380, 300, <SK c={DIM} s={26} strikeAt={fine + 0.6}>matter</SK>, { pop: true }],
      ]} />
      {N.map((w, i) => (
        <At key={w} x={720 + i * 380} y={300} s={pop(t, fps, be + i * 0.9)}><SK c={WARM} s={26} strikeAt={ret + 2.4 + i * 0.3}>{w}</SK></At>
      ))}
      <At x={1100} y={390} o={ramp(t, ret, 0.4)}>
        <div style={{ width: 1000, height: 22, borderRadius: 11, background: `${WARM}33`, border: `3px solid ${WARM}`, opacity: 1 - ramp(t, ret + 2.4, 0.8) * 0.7 }} />
      </At>
      <Items items={[
        ["The habit retreats to a new floor, and calls it progress", 1100, 450, <W c={DIM} s={24}>a new floor, called progress</W>, { d: 1.0 }],
        ["The author knows this trap from the inside", 960, 560, <W c={DIM} s={26}>the author, from the inside:</W>],
      ]} />
      <At x={960} y={660} o={ramp(t, pres - 1.6, 0.4)}>
        <W c={GOLD} s={32} serif>“Before 1997, Presence was that floor for me:</W>
      </At>
      <At x={960} y={720} o={ramp(t, c("the one reality behind everything"), 0.4)}>
        <W c={GOLD} s={32} serif>the one reality behind everything.”</W>
      </At>
      <At x={960} y={800} o={ramp(t, c("the one reality behind everything") + 2.2, 0.4)}><W c={DIM} s={22}>John Tan (Thusness)</W></At>
    </AbsoluteFill>
  );
};

const NihilScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n = c("The second is too little: nihilism");
  const v = c("No floor, so the world is unreal, a void");
  const abs = c("But absolute nothingness cannot be posited");
  const ice = c("The ice is cold");
  const ch = c("The chariot carries passengers");
  return (
    <AbsoluteFill>
      <Title at={n} color={ICE}>two traps · 2: too little</Title>
      <Items items={[
        ["The second is too little: nihilism", 960, 190, <W c={ICE} s={30} serif>nihilism</W>],
      ]} />
      <At x={960} y={310} s={pop(t, fps, v)}><SK c={DIM} s={28} strikeAt={abs + 1.2}>“the world is unreal, a void”</SK></At>
      <Items items={[
        ["But absolute nothingness cannot be posited", 960, 400, <W c={CHALK} s={26}>nothingness can no more be posited than substance</W>],
      ]} />
      <At x={620} y={570} s={pop(t, fps, ice)}><IceCube size={120} spin={(t - ice) * 20} /></At>
      <At x={620} y={720} o={ramp(t, ice + 0.4, 0.4)}><W c={ICE} s={28}>the ice is cold</W></At>
      <At x={1300} y={570} s={pop(t, fps, ch)}><Wheel size={160} spin={(t - ch) * 90} /></At>
      <At x={1300} y={720} o={ramp(t, ch + 0.4, 0.4)}><W c={WARM} s={28}>the chariot carries passengers</W></At>
    </AbsoluteFill>
  );
};

const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const take = c("Take a cup");
  const warm = c("The tea is still warm");
  const L: [string, string][] = [["In the clay", "the clay"], ["In the handle", "the handle"], ["In the shape", "the shape"], ["In the word", "the word"]];
  return (
    <AbsoluteFill>
      <Title at={c("So, try it")} color={GOLD}>try it</Title>
      <At x={520} y={430} s={pop(t, fps, take) * (1 + 0.04 * Math.sin(t * 2))}><Cup size={240} steam={ramp(t, warm, 0.6)} /></At>
      <Items items={[
        ["Notice its colour, its weight, its warmth", 520, 610, <W c={TEAL} s={26}>colour · weight · warmth</W>],
        ["Then look for the cup", 1360, 230, <W c={CHALK} s={28}>look for the cup:</W>],
      ]} />
      {L.map(([cue, w], i) => (
        <At key={w} x={1360} y={310 + i * 75} o={ramp(t, c(cue), 0.3)}><SK c={DIM} s={24} strikeAt={c(cue) + 0.8}>{`a cup in ${w}`}</SK></At>
      ))}
      <Items items={[
        ["Then drink from it", 520, 680, <W c={GOLD} s={28}>drink from it</W>],
        ["Nothing was lost in the looking", 1360, 640, <W c={GOLD} s={30} serif>nothing was lost in the looking</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NextFloorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("watch for the next floor");
  const e = c("But energy is real");
  const a = c("But awareness is real");
  const test = c("Put that through the same test");
  return (
    <AbsoluteFill>
      <Title at={w} color={WARM}>watch for the next floor</Title>
      <At x={640} y={360} s={pop(t, fps, e)}><SK c={WARM} s={30} strikeAt={test + 1.2}>“but energy is real”</SK></At>
      <At x={1280} y={360} s={pop(t, fps, a)}><SK c={WARM} s={30} strikeAt={test + 1.5}>“but awareness is real”</SK></At>
      <At x={960} y={470} o={ramp(t, e + 0.3, 0.4) * (1 - ramp(t, test + 1.6, 0.6))}>
        <div style={{ width: 1000, height: 20, borderRadius: 10, background: `${WARM}33`, border: `3px dashed ${WARM}` }} />
      </At>
      <Items items={[
        ["Put that through the same test", 960, 600, <W c={GOLD} s={34} serif>the same test, again</W>],
      ]} />
      <At x={960} y={720} o={ramp(t, test + 1.0, 0.4)}>
        <div style={{ display: "flex", gap: 16 }}>{Q4.map(([, col], i) => <Num key={i} n={String(i + 1)} color={col} lit={ramp(t, test + 1.0 + i * 0.3, 0.3)} />)}</div>
      </At>
    </AbsoluteFill>
  );
};

const WindowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("Stand at a window at dusk");
  const gl = c("when the glass shows the room and the street at once");
  const div = c("The glass does not divide two worlds");
  return (
    <AbsoluteFill>
      <Title at={c("And one more")} color={GOLD}>and one more</Title>
      <At x={620} y={470} s={pop(t, fps, st)} o={ramp(t, st, 0.4)}><DuskWindow mix={ramp(t, gl + 0.6, 1.4)} /></At>
      <Items items={[
        ["Stand at a window at dusk", 620, 220, <W c={ROSE} s={28}>a window at dusk</W>, { d: 0.4 }],
        ["when the glass shows the room and the street at once", 1360, 300, <K c={GOLD} s={26}>the room</K>, { pop: true, d: 0.6 }],
        ["when the glass shows the room and the street at once", 1360, 380, <K c={ICE} s={26}>the street</K>, { pop: true, d: 1.4 }],
        ["when the glass shows the room and the street at once", 1360, 450, <W c={DIM} s={22}>at once</W>, { d: 2.2 }],
        ["Notice that inside and outside are drawn in the seeing", 1360, 530, <W c={TEAL} s={26}>inside and outside: drawn in the seeing</W>],
        ["And they are still useful", 1360, 590, <W c={GOLD} s={26}>and still useful</W>],
        ["The glass does not divide two worlds", 1360, 670, <SK c={DIM} s={24} strikeAt={div + 1.6}>two worlds</SK>],
        ["There is one world, without walls", 1360, 750, <W c={GOLD} s={30} serif>one world, without walls</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RiverScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const back = c("Back to the river");
  const lw = c("Look beneath the whirlpool for a floor of its own, and none is found");
  const lworld = c("Look beneath the world, and none is found there either");
  const spin = c("And the leaves go on spinning");
  return (
    <AbsoluteFill>
      <Title at={back} color={ICE}>back to the river</Title>
      <At x={960} y={400} o={ramp(t, back, 0.8)} s={1.4 + 0.1 * ramp(t, spin, 2)}><Whirlpool at={back} leaf={1} /></At>
      <Drops at={back} y={390} o={0.7} />
      <At x={960} y={600} o={ramp(t, lw + 1.0, 0.4)}><SK c={DIM} s={24} strikeAt={lw + 3.2}>a floor of its own</SK></At>
      <At x={960} y={670} o={ramp(t, lworld + 0.6, 0.4)}><SK c={DIM} s={24} strikeAt={lworld + 2.6}>a floor beneath the world</SK></At>
      <Items items={[
        ["Nothing is missing", 960, 200, <W c={CHALK} s={34} serif>nothing is missing</W>],
        ["And the leaves go on spinning", 960, 780, <W c={GOLD} s={40} serif>and the leaves go on spinning</W>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["sea", "Watch a whirlpool in a river"], ["open", "This is one of the question pages of After Anatta"],
    ["doubt", "What is the world made of, finally"], ["search", "Start with the substance reading"],
    ["web", "The tradition looked at these candidates one by one"], ["doubt", "takes the mind"],
    ["whole", "names the mark of the whole view"], ["open", "Now run the four questions of Step 8 on the world"],
    ["doubt", "The first question"], ["web", "The second question"], ["vivid", "The third question"], ["search", "The fourth question"],
    ["doubt", "Even the subtlest floor fails"], ["web", "And doing something is no floor either"],
    ["vivid", "Then why is the world orderly"], ["search", "And the last question people reach for"],
    ["whole", "What remains is not a final picture of reality"], ["doubt", "There are two traps"],
    ["sea", "The second is too little: nihilism"], ["vivid", "So, try it"], ["search", "watch for the next floor"],
    ["dusk", "And one more"], ["sea", "Back to the river"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Watch a whirlpool in a river", <WhirlScene />],
    ["This is one of the question pages of After Anatta", <QuestionScene />],
    ["What is the world made of, finally", <DebateScene />],
    ["Start with the substance reading", <BuildingScene />],
    ["The tradition looked at these candidates one by one", <SpaceScene />],
    ["takes the mind", <MindScene />],
    ["names the mark of the whole view", <VoicesScene />],
    ["Now run the four questions of Step 8 on the world", <FourScene />],
    ["The first question", <Q1Scene />],
    ["The second question", <Q2Scene />],
    ["The third question", <Q3Scene />],
    ["The fourth question", <Q4Scene />],
    ["Even the subtlest floor fails", <ParticularScene />],
    ["And doing something is no floor either", <KeyScene />],
    ["Then why is the world orderly", <OrderScene />],
    ["And the last question people reach for", <WhyScene />],
    ["What remains is not a final picture of reality", <RemainScene />],
    ["There are two traps", <EternalScene />],
    ["The second is too little: nihilism", <NihilScene />],
    ["So, try it", <CupScene />],
    ["watch for the next floor", <NextFloorScene />],
    ["And one more", <WindowScene />],
    ["Back to the river", <RiverScene />],
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
