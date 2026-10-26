// After Anatta 3: Designated, Not Found (The Logic, Step 3). Explainer drawings timed to the narration.
// Arc: the koan's "it" -> the test, own-nature removed, a name left -> Nagasena's chariot: pole, axle, wheels, each "no" ->
// Chandrakirti's seven places, not found, still carrying passengers -> the same places searched for this moment ->
// Nagarjuna's verse -> the koan both ways -> not found is not "no chariot" -> designated in dependence (name, basis, riding) ->
// one verse: dependent arising, emptiness, designation, the middle way -> a name is not a sticker (jar, cup, the basis named
// all the way down) -> not arbitrary: three checks, snake and rope -> the chariot everywhere (ear and bell, walking, hearing,
// remove the axle, named together, intimacy) -> self, car, seed, friend -> try it (a sound, a chair).
// Stance: emptiness is drawn only as the not-finding, never as a ground, container or backdrop. Only invented things are
// struck: own-nature, the "it" beside its verb, the timeless Now as container, the jar finished before any name, the snake,
// a rope from its own side, "no chariot at all". The chariot, the parts, the sound, the cup, the rope, the car, the seed and
// the friend stay vivid and working.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words (names) inside.
export const PHRASES = [
  // the koan and its "it"
  "Here is the koan", "This moment ceases as it arises", "Does it arise, or does it cease",
  "The question hands us an it", "This step goes looking for that it", "went looking for a chariot",
  "This is the third step of The Logic", "Step one gave the test", "look for the thing apart from what it depends on",
  "Step two said the test removes", "Here the test runs on this moment",
  "What is left is a name", "It is the way anything at all is there",
  // the chariot
  "how he came", "By chariot, says the king", "Is it the pole? The axle? The wheels",
  "All of them together", "Something apart from them", "Each time, the king says no",
  "made the search complete", "He checks seven places", "The chariot is not the parts", "It is not other than them",
  "It does not own them", "It is not in them, and they are not in it", "It is not their collection", "And it is not their shape",
  "Found in none of them", "it still carries passengers",
  // the moment, searched
  "Now search the same places for this moment", "Listen to whatever sound is here", "Where is its moment",
  "Is it the arising", "Is it the ceasing", "Both together? Arising and ceasing are two", "Other than them",
  "Their owner? This is the koan's it", "Their container? This is the timeless Now",
  "coming into being and passing away are not found without a thing", "And a thing is not found without coming into being",
  "With the logic of substance, the sound is a slice of time",
  "With the logic of dependency, the same sound is just as vivid",
  "is then a plain description", "with no it in the middle",
  // not found, still counted
  "Here is where most readers go wrong", "They hear the chariot is not found", "and take it to mean there is no chariot",
  "But the king came by chariot", "The search removes nothing the road relies on", "waiting to be found",
  "So what is the chariot", "It is designated in dependence on its parts", "Designated means picked out",
  "In dependence means on a basis", "The name, the parts and the riding come together",
  "The moment is the same", "A race is won by a hundredth of a second",
  "puts the whole Middle Way in one verse", "Whatever arises in dependence, that is emptiness", "That is designation in dependence",
  "That is the middle way", "one fact, seen from two sides", "The moment is named arising and ceasing",
  // a name is not a sticker
  "Now a second mistake", "it pictures a sticker", "But look at a cup",
  "It appears as a cup, already something to lift", "Peel the name off", "goes further: even the basis is named",
  "named in dependence on rim, spokes and hub", "all the way down", "We never see ourselves naming", "In the koan, that is the it",
  // not arbitrary
  "The opposite mistake", "can I call a shadow a bridge", "A name holds or fails as it is used",
  "It is known to ordinary seeing", "A second look does not overturn it", "And searching for how things ultimately are",
  "In dim light, you see a snake in the corner", "The lamp comes on", "The snake fails the second check",
  "A rope there from its own side fails the third", "passes all three", "but because it works",
  // the chariot everywhere
  "The author first met the chariot", "The taste was free of substance",
  "He still pictured an ear here, a bell there", "and something crossing between them",
  "Walking is the chariot", "Remove the axle", "There is no chariot",
  "Bell, striker, air, ear and sound are named together", "intimacy no longer meant closeness",
  "there was never any separation to close",
  // beyond the moment
  "The seven places work on anything", "The self is not body and mind", "Pull a car apart in your mind",
  "Put it back, bolt by bolt", "Nothing called car was added", "A seed is called a cause only of its sprout", "never from barley",
  "Look for a friend apart from the face", "Yet a promise to a friend is kept",
  // try it
  "Listen to one sound", "Is the moment its arising", "Both? Other than them? Their owner",
  "Then notice the sound is still here, heard in full", "Or pick a chair near you",
  "Then use it",
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

const Apple: React.FC<{ size?: number; glow?: number; o?: number }> = ({ size = 220, glow = 1, o = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 ${8 + 16 * glow}px ${RED})` }}>
    <path d="M100 56 C70 30 22 46 26 104 C30 160 70 190 100 172 C130 190 170 160 174 104 C178 46 130 30 100 56 Z" fill={`${RED}cc`} stroke={RED} strokeWidth={5} />
    <path d="M60 80 Q52 100 58 122" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.45} fill="none" />
    <path d="M100 56 Q98 34 108 18" stroke="#8a5a2b" strokeWidth={6} strokeLinecap="round" fill="none" />
    <path d="M106 30 Q130 8 152 22 Q132 44 106 30 Z" fill={`${GREEN}aa`} stroke={GREEN} strokeWidth={3} />
  </svg>
);

const Cup: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 150 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 150 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 20 L110 20 L100 100 Q65 112 30 100 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M108 38 Q140 40 134 64 Q128 84 103 80" fill="none" stroke={color} strokeWidth={5} />
  </svg>
);

const Thought: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={160} height={120} viewBox="0 0 160 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M40 70 Q15 70 18 50 Q20 28 45 32 Q55 10 82 16 Q105 4 120 26 Q148 28 142 54 Q146 78 118 78 Q100 92 78 80 Q58 90 40 70 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={34} cy={96} r={8} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <circle cx={18} cy={112} r={5} fill={`${color}33`} stroke={color} strokeWidth={3} />
  </svg>
);

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

const Magnifier: React.FC = () => (
  <svg width={120} height={120} viewBox="0 0 120 120"><circle cx={50} cy={50} r={36} fill={`${ICE}22`} stroke={ICE} strokeWidth={6} />
    <path d="M77 77 L110 110" stroke={ICE} strokeWidth={10} strokeLinecap="round" /></svg>
);

/** A plain standing figure. */
const Person: React.FC<{ color?: string; size?: number; dashed?: boolean }> = ({ color = CHALK, size = 150, dashed }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "5 4" : undefined} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round"
      strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

/** A walking figure seen side-on; face = 1 faces right, -1 faces left. */
const Walker: React.FC<{ color?: string; face?: number; step?: number }> = ({ color = TEAL, face = 1, step = 0 }) => {
  const a = Math.sin(step) * 16;
  return (
    <svg width={80} height={130} viewBox="0 0 80 130" style={{ overflow: "visible", transform: `scaleX(${face})`, filter: `drop-shadow(0 0 8px ${color}aa)` }}>
      <circle cx={42} cy={16} r={11} fill={`${color}44`} stroke={color} strokeWidth={4} />
      <path d="M40 28 L36 74" stroke={color} strokeWidth={6} strokeLinecap="round" />
      <path d={`M38 40 L${44 + a * 0.6} 62 M38 40 L${30 - a * 0.6} 60`} stroke={color} strokeWidth={5} strokeLinecap="round" />
      <path d={`M36 74 L${44 + a} 126 M36 74 L${28 - a} 126`} stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

const Bolt: React.FC<{ color?: string; size?: number; flash?: number }> = ({ color = ICE, size = 160, flash = 1 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 20 * flash}px ${color})` }}>
    <path d="M36 2 L8 56 L28 56 L18 98 L54 38 L32 38 L44 2 Z" fill={`${color}${flash > 0.5 ? "cc" : "44"}`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

/** A head in profile, drawn as an outline (the "mind" as a container, shown only to be removed). */
const Head: React.FC<{ color?: string; o?: number }> = ({ color = VIOLET, o = 1 }) => (
  <svg width={240} height={240} viewBox="0 0 240 240" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M70 220 L70 180 Q20 150 30 90 Q42 20 120 16 Q200 16 210 90 Q214 120 228 140 L206 148 Q210 180 180 184 L150 186 L150 220"
      fill="none" stroke={color} strokeWidth={5} strokeDasharray="12 9" strokeLinejoin="round" />
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
const Fruit: React.FC = () => (
  <svg width={170} height={190} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
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

/** A seed and its sprout, joined: cause and effect named together. */
const SeedSprout: React.FC<{ grow: number }> = ({ grow }) => (
  <svg width={200} height={130} viewBox="0 0 200 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <ellipse cx={40} cy={100} rx={22} ry={14} fill="#b07a4566" stroke="#c99060" strokeWidth={4} />
    <path d={`M150 118 L150 ${118 - 70 * grow}`} stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
    <path d={`M150 ${118 - 50 * grow} Q122 ${100 - 60 * grow} 132 ${110 - 70 * grow} Q146 ${108 - 52 * grow} 150 ${118 - 50 * grow} Z`}
      fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={grow} />
    <path d="M66 100 Q100 76 136 100" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="6 5" opacity={grow} />
  </svg>
);

// ---------------------------------------------------------------- drawings for this step

/** A two-wheeled chariot. Each part can fade (0..1); `hi` lights one part (or "all"); riders 0..1 shows passengers. */
type ChariotProps = { pole?: number; axle?: number; wheels?: number; frame?: number; hi?: string; riders?: number; color?: string; size?: number };
const Chariot: React.FC<ChariotProps> = ({ pole = 1, axle = 1, wheels = 1, frame = 1, hi = "", riders = 0, color = GOLD, size = 420 }) => {
  const on = (k: string) => hi === k || hi === "all";
  const st = (k: string) => ({ stroke: on(k) ? WARM : color, strokeWidth: on(k) ? 7 : 5 });
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 420 252" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
      <g opacity={riders}>
        {[200, 256].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy={22 + i * 4} r={13} fill={`${i ? TEAL : ROSE}44`} stroke={i ? TEAL : ROSE} strokeWidth={3.5} />
            <path d={`M${x - 14} 72 L${x - 10} ${44 + i * 4} Q${x} ${36 + i * 4} ${x + 10} ${44 + i * 4} L${x + 14} 72`} fill={`${i ? TEAL : ROSE}22`}
              stroke={i ? TEAL : ROSE} strokeWidth={3.5} />
          </g>
        ))}
      </g>
      <path opacity={frame} d="M130 70 L330 70 L320 140 L140 140 Z" fill={`${color}22`} {...st("frame")} strokeLinejoin="round" />
      <path opacity={pole} d="M140 122 L10 96" fill="none" {...st("pole")} strokeLinecap="round" />
      <line opacity={axle} x1={150} y1={190} x2={310} y2={190} {...st("axle")} strokeLinecap="round" />
      <g opacity={wheels}>
        {[150, 310].map(cx => (
          <g key={cx}>
            <circle cx={cx} cy={190} r={56} fill="none" {...st("wheels")} />
            {[0, 45, 90, 135].map(a => (
              <line key={a} x1={cx} y1={136} x2={cx} y2={244} transform={`rotate(${a} ${cx} 190)`} stroke={on("wheels") ? WARM : color} strokeWidth={3} />
            ))}
            <circle cx={cx} cy={190} r={9} fill={color} />
          </g>
        ))}
      </g>
    </svg>
  );
};

/** A jar with a "sugar" sticker; peel 0..1 lifts the sticker away. */
const Jar: React.FC<{ peel: number; color?: string }> = ({ peel, color = ICE }) => (
  <div style={{ position: "relative", width: 200, height: 240 }}>
    <svg width={200} height={240} viewBox="0 0 200 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      <rect x={60} y={10} width={80} height={30} rx={6} fill={`${color}33`} stroke={color} strokeWidth={4} />
      <path d="M50 40 L150 40 Q180 60 175 110 L170 210 Q168 232 140 232 L60 232 Q32 232 30 210 L25 110 Q20 60 50 40 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    </svg>
    <div style={{ position: "absolute", left: 45, top: 110, width: 110, height: 60, borderRadius: 8, background: `${GOLD}cc`, color: "#2a2418",
      fontFamily: SANS, fontSize: 28, display: "flex", alignItems: "center", justifyContent: "center", transformOrigin: "0% 0%",
      transform: `translate(${-peel * 60}px, ${-peel * 90}px) rotate(${-peel * 30}deg)`, opacity: 1 - peel * 0.5 }}>sugar</div>
  </div>
);

/** A coil in the corner: a snake in dim light, a rope once the lamp is on (lit 0..1). */
const SnakeRope: React.FC<{ lit: number }> = ({ lit }) => {
  const col = lit > 0.5 ? "#C9A06A" : GREEN;
  const d = "M20 120 Q60 60 100 110 T180 110 T260 80";
  return (
    <svg width={300} height={160} viewBox="0 0 300 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${col}88)` }}>
      <path d={d} fill="none" stroke={col} strokeWidth={14} strokeLinecap="round" />
      <g opacity={1 - lit}>
        <ellipse cx={268} cy={76} rx={18} ry={12} fill={GREEN} />
        <circle cx={274} cy={72} r={3} fill="#000" />
      </g>
      <path opacity={lit} d={d} fill="none" stroke="#7a5a30" strokeWidth={4} strokeDasharray="4 10" />
    </svg>
  );
};

const Chair: React.FC<{ color?: string }> = ({ color = WARM }) => (
  <svg width={160} height={200} viewBox="0 0 160 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M40 10 L40 110 M120 10 L120 110 M40 32 L120 32 M40 62 L120 62" stroke={color} strokeWidth={6} strokeLinecap="round" />
    <path d="M25 110 L135 110 L135 124 L25 124 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M35 124 L35 192 M125 124 L125 192" stroke={color} strokeWidth={6} strokeLinecap="round" />
  </svg>
);

const Ear: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M30 120 Q20 140 40 145 Q60 148 66 125 Q72 105 88 88 Q104 64 96 38 Q86 8 54 8 Q18 10 14 48" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
    <path d="M38 50 Q42 30 60 32 Q78 36 74 58 Q70 74 56 80" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

/** A car; apart 0..1 pulls body, engine and wheels away from each other. */
const Car: React.FC<{ apart: number; color?: string }> = ({ apart, color = TEAL }) => (
  <svg width={420} height={200} viewBox="0 0 420 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <g transform={`translate(${-apart * 50} ${-apart * 50})`}>
      <path d="M40 130 L60 90 L140 80 L180 40 L300 40 L340 85 L390 95 L390 130 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    </g>
    <g transform={`translate(${apart * 90} ${apart * 30})`}>
      <rect x={300} y={96} width={70} height={28} rx={6} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={4} />
    </g>
    {[110, 320].map((cx, i) => (
      <g key={cx} transform={`translate(${(i ? 1 : -1) * apart * 90} ${apart * 30})`}>
        <circle cx={cx} cy={140} r={32} fill={`${color}22`} stroke={color} strokeWidth={5} />
        <circle cx={cx} cy={140} r={9} fill={color} />
      </g>
    ))}
  </svg>
);

/** A numbered row: a lit number and a short line. */
const Row: React.FC<{ n: string; color: string; lit: number; children: React.ReactNode }> = ({ n, color, lit, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <Num n={n} color={color} lit={lit} /><Glow color={CHALK} size={26}>{children}</Glow>
  </div>
);

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("This step goes looking for that it");
  const found = c("went looking for a chariot");
  return (
    <AbsoluteFill>
      <Title at={c("Here is the koan")} color={DIM} size={34}>the koan</Title>
      <At x={960} y={270} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={62} speed={0.035} />
      </At>
      <At x={960} y={390} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={62} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      <Items items={[
        ["The question hands us an it", 960, 520, <K c={WARM} s={36}>“it”</K>, { pop: true }],
        ["went looking for a chariot", 960, 700, <Chariot size={300} />, { pop: true }],
      ]} />
      <At x={960 + 300 * Math.sin((t - look) * 1.4)} y={640} o={ramp(t, look, 0.5) * (1 - ramp(t, found, 0.5))}><Magnifier /></At>
    </AbsoluteFill>
  );
};

const IntroScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("This is the third step of The Logic")}>The Logic · Step 3</Title>
      <Items items={[
        ["This is the third step of The Logic", 960, 180, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.2 }],
        ["Step one gave the test", 520, 300, <K c={TEAL} s={26}>step 1: the test</K>, { pop: true }],
        ["look for the thing apart from what it depends on", 520, 375, <W c={CHALK} s={24}>look for it apart from what it depends on</W>],
        ["Step two said the test removes", 1400, 300, <K c={TEAL} s={26}>step 2: what it removes</K>, { pop: true }],
        ["Step two said the test removes", 1400, 375,
          <SK c={DIM} s={24} strikeAt={c("Here the test runs on this moment") - 0.4}>own-nature: there from its own side</SK>, { d: 1.6 }],
        ["Here the test runs on this moment", 960, 480, <K c={GOLD} s={30}>step 3: this moment</K>, { pop: true }],
        ["What is left is a name", 960, 590, <W c={GOLD} s={46} serif>what is left: a name</W>],
        ["What is left is a name", 600, 680, <W c={DIM} s={26}>not an empty name</W>, { d: 1.8 }],
        ["What is left is a name", 1300, 680, <W c={DIM} s={26}>not a sticker on something underneath</W>, { d: 2.8 }],
        ["It is the way anything at all is there", 960, 780, <W c={TEAL} s={34} serif>the way anything at all is there</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const came = c("how he came");
  const q0 = c("Is it the pole? The axle? The wheels");
  const qs = [q0, q0 + 0.9, q0 + 1.8, c("All of them together"), c("Something apart from them")];
  const hi = ["", "pole", "axle", "wheels", "all", "apart"][qs.filter(x => t >= x).length];
  const no = c("Each time, the king says no");
  const Q = ["the pole?", "the axle?", "the wheels?", "all together?", "apart from them?"];
  return (
    <AbsoluteFill>
      <Title at={came} color={DIM} size={34}>an old example</Title>
      <At x={330} y={420} s={pop(t, fps, came)}><Person color={GOLD} size={170} /></At>
      <At x={330} y={540} o={ramp(t, came, 0.5)}><W c={GOLD} s={24}>the king</W></At>
      <At x={1590} y={420} s={pop(t, fps, came + 0.5)}><Person color={TEAL} size={170} /></At>
      <At x={1590} y={540} o={ramp(t, came + 0.5, 0.5)}><W c={TEAL} s={24}>the monk</W></At>
      <At x={960} y={400} s={pop(t, fps, c("By chariot, says the king"))}><Chariot size={480} hi={hi} /></At>
      <At x={960} y={200} o={between(t, qs[4], no + 1.5, 0.4)}>
        <div style={{ width: 200, height: 90, borderRadius: 16, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontSize: 48, color: DIM }}>?</div>
      </At>
      {Q.map((w, i) => (
        <React.Fragment key={w}>
          <At x={480 + i * 240} y={660} o={ramp(t, qs[i], 0.4)}><W c={CHALK} s={26}>{w}</W></At>
          <At x={480 + i * 240} y={730} s={pop(t, fps, no + 0.3 + i * 0.25)}><K c={WARM} s={24}>no</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["By chariot, says the king", 330, 260, <W c={GOLD} s={28} serif>“by chariot”</W>],
        ["By chariot, says the king", 1590, 260, <W c={TEAL} s={28} serif>“show me the chariot”</W>, { d: 1.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const SevenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const R: [string, string, number][] = [
    ["The chariot is not the parts", "the parts", 0],
    ["It is not other than them", "other than them", 0],
    ["It does not own them", "their owner", 0],
    ["It is not in them, and they are not in it", "in them", 0],
    ["It is not in them, and they are not in it", "holding them", 1.4],
    ["It is not their collection", "their collection", 0],
    ["And it is not their shape", "their shape", 0],
  ];
  const ride = c("it still carries passengers");
  return (
    <AbsoluteFill>
      <Title at={c("made the search complete")}>the search made complete</Title>
      <At x={960} y={175} s={pop(t, fps, c("He checks seven places"))}><K c={GOLD} s={28}>seven places</K></At>
      {R.map(([cue, w, d], i) => (
        <React.Fragment key={w}>
          <At x={500} y={260 + i * 70} o={ramp(t, c(cue) + d, 0.4)}><W c={CHALK} s={28}>{w}</W></At>
          <At x={820} y={260 + i * 70} o={ramp(t, c(cue) + d + 1.0, 0.4)}><W c={DIM} s={24}>not found</W></At>
        </React.Fragment>
      ))}
      <At x={1450} y={420} s={pop(t, fps, c("He checks seven places") + 0.6)}><Chariot size={440} riders={ramp(t, ride, 0.6)} /></At>
      <Items items={[
        ["Found in none of them", 1450, 620, <W c={GOLD} s={30} serif>found in none of them</W>],
        ["Found in none of them", 1450, 690, <W c={TEAL} s={26}>yet named in dependence on its parts</W>, { d: 1.2 }],
        ["it still carries passengers", 1450, 760, <W c={GREEN} s={28}>it still carries passengers</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MomentSearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const snd = c("Listen to whatever sound is here");
  return (
    <AbsoluteFill>
      <Title at={c("Now search the same places for this moment")} color={TEAL}>the same places, for this moment</Title>
      <At x={960} y={300} s={pop(t, fps, snd)}><Bell size={140} /></At>
      <Sound x={960} y={310} at={snd + 0.4} dur={24} r1={220} />
      <Items items={[
        ["Where is its moment", 960, 470, <W c={ICE} s={32} serif>where is its moment?</W>],
        ["Is it the arising", 480, 300, <K c={GREEN} s={28}>its arising?</K>, { pop: true }],
        ["Is it the arising", 480, 365, <W c={DIM} s={22}>all coming, no going</W>, { d: 1.0 }],
        ["Is it the ceasing", 480, 460, <K c={ROSE} s={28}>its ceasing?</K>, { pop: true }],
        ["Is it the ceasing", 480, 525, <W c={DIM} s={22}>a passing that never came to be</W>, { d: 1.0 }],
        ["Both together? Arising and ceasing are two", 480, 620, <K c={ICE} s={28}>both together?</K>, { pop: true }],
        ["Both together? Arising and ceasing are two", 480, 685, <W c={DIM} s={22}>two, and the moment is one</W>, { d: 1.2 }],
        ["Other than them", 1440, 300, <K c={CHALK} s={28}>other than them?</K>, { pop: true }],
        ["Other than them", 1440, 365, <W c={DIM} s={22}>take them away: no moment left</W>, { d: 1.0 }],
        ["Their owner? This is the koan's it", 1440, 460,
          <SK c={WARM} s={26} strikeAt={c("Their owner? This is the koan's it") + 3.4}>an “it” beside its verb</SK>, { pop: true }],
        ["Their owner? This is the koan's it", 1440, 525, <W c={DIM} s={22}>grammar, not something found</W>, { d: 3.0 }],
        ["Their container? This is the timeless Now", 1440, 620,
          <SK c={VIOLET} s={26} strikeAt={c("Their container? This is the timeless Now") + 4.4}>a timeless Now, holding it</SK>, { pop: true }],
        ["Their container? This is the timeless Now", 1440, 685, <W c={DIM} s={22}>apart from what comes and goes: not there</W>, { d: 4.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("coming into being and passing away are not found without a thing");
  const b = c("And a thing is not found without coming into being");
  return (
    <AbsoluteFill>
      <Title at={a} color={GOLD}>Nagarjuna, Middle Way 21.8</Title>
      <At x={600} y={380} s={pop(t, fps, a + 0.3)}><K c={ICE} s={32}>coming · passing</K></At>
      <At x={1320} y={380} s={pop(t, fps, a + 2.4)}><K c={GOLD} s={32}>a thing</K></At>
      <Flow x1={790} y1={360} x2={1220} y2={360} color={TEAL} p={ramp(t, a + 2.8, 0.6)} />
      <Flow x1={1220} y1={404} x2={790} y2={404} color={TEAL} p={ramp(t, b + 0.6, 0.6)} />
      <Items items={[
        ["coming into being and passing away are not found without a thing", 960, 560, <W c={CHALK} s={30} serif>coming and passing: not found without a thing</W>, { d: 1.6 }],
        ["And a thing is not found without coming into being", 960, 640, <W c={CHALK} s={30} serif>a thing: not found without coming and passing</W>, { d: 0.8 }],
        ["And a thing is not found without coming into being", 960, 760, <W c={TEAL} s={30}>neither found apart from the other</W>, { d: 3.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const BothWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("With the logic of substance, the sound is a slice of time");
  const dep = c("With the logic of dependency, the same sound is just as vivid");
  return (
    <AbsoluteFill>
      <Title at={sub}>the koan, read both ways</Title>
      <At x={560} y={200} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>substance</K></At>
      <At x={560} y={400} s={pop(t, fps, sub + 0.8)}>
        <div style={{ width: 200, height: 120, borderRadius: 14, background: `${WARM}44`, border: `4px solid ${WARM}`, boxShadow: `0 0 34px ${WARM}88`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={26}>a slice of time</W></div>
      </At>
      <Items items={[
        ["With the logic of substance, the sound is a slice of time", 330, 400, <W c={GREEN} s={26}>arising →</W>, { d: 3.0 }],
        ["With the logic of substance, the sound is a slice of time", 800, 400, <W c={ROSE} s={26}>→ ceasing</W>, { d: 3.6 }],
      ]} />
      <At x={1360} y={200} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>dependency</K></At>
      <At x={1360} y={400} s={pop(t, fps, dep + 0.5)}><Bell size={130} /></At>
      <Sound x={1360} y={410} at={dep + 0.7} dur={10} r1={240} />
      <Items items={[
        ["With the logic of dependency, the same sound is just as vivid", 1360, 580, <W c={ICE} s={26}>just as vivid, nothing behind it</W>, { d: 3.0 }],
        ["is then a plain description", 960, 690, <W c={GOLD} s={34} serif>“ceases as it arises”: a plain description</W>, { d: -1.2 }],
        ["with no it in the middle", 960, 790, <SK c={DIM} s={26} strikeAt={c("with no it in the middle") + 0.8}>an “it” in the middle</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const NotFoundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const but = c("But the king came by chariot");
  const x = 420 + 1080 * ramp(t, but + 0.3, 7);
  return (
    <AbsoluteFill>
      <Title at={c("Here is where most readers go wrong")} color={WARM}>where most readers go wrong</Title>
      <Items items={[
        ["They hear the chariot is not found", 960, 200, <W c={CHALK} s={32} serif>“the chariot is not found”</W>],
        ["and take it to mean there is no chariot", 960, 275, <SK c={DIM} s={28} strikeAt={but + 0.2}>“so there is no chariot”</SK>],
      ]} />
      <Svg><DrawPath d="M180 600 L1740 600" p={ramp(t, but, 1)} color={DIM} width={4} len={1600} glow={false} /></Svg>
      <At x={x} y={472} o={ramp(t, but, 0.5)}><Chariot size={360} riders={1} /></At>
      <Items items={[
        ["But the king came by chariot", 960, 660, <W c={GOLD} s={30}>the king came by chariot</W>, { d: 0.4 }],
        ["The search removes nothing the road relies on", 960, 720, <W c={TEAL} s={28}>nothing the road relies on is removed</W>],
        ["waiting to be found", 960, 800, <SK c={DIM} s={26} strikeAt={c("waiting to be found") + 0.8}>a chariot there from its own side</SK>, { d: -1.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const DesignatedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tog = c("The name, the parts and the riding come together");
  return (
    <AbsoluteFill>
      <Title at={c("So what is the chariot")}>so what is the chariot?</Title>
      <Flow x1={700} y1={400} x2={860} y2={400} color={TEAL} p={ramp(t, tog + 0.3, 0.5)} />
      <Flow x1={1220} y1={400} x2={1060} y2={400} color={GREEN} p={ramp(t, tog + 0.5, 0.5)} />
      <Items items={[
        ["It is designated in dependence on its parts", 960, 185, <K c={GOLD} s={30}>designated in dependence on its parts</K>, { pop: true }],
        ["Designated means picked out", 960, 265, <W c={CHALK} s={26}>designated: picked out, this rather than that</W>],
        ["In dependence means on a basis", 540, 400, <K c={TEAL} s={28}>a basis: wheels, axle</K>, { pop: true }],
        ["In dependence means on a basis", 1380, 400, <K c={GREEN} s={28}>the riding</K>, { pop: true, d: 3.0 }],
        ["The name, the parts and the riding come together", 960, 400, <K c={GOLD} s={32}>“chariot”</K>, { pop: true }],
        ["The name, the parts and the riding come together", 960, 490, <W c={DIM} s={26}>come together; none first</W>, { d: 1.0 }],
        ["The moment is the same", 960, 590, <W c={TEAL} s={30}>the moment: named, counted, timed</W>],
        ["A race is won by a hundredth of a second", 820, 720, <Clock size={120} />, { pop: true }],
        ["A race is won by a hundredth of a second", 1100, 720, <K c={GOLD} s={28}>won by a hundredth</K>, { pop: true, d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const MiddleWayScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("puts the whole Middle Way in one verse")} color={GOLD}>the Middle Way in one verse</Title>
      <Items items={[
        ["Whatever arises in dependence, that is emptiness", 460, 330, <K c={TEAL} s={28}>arising in dependence</K>, { pop: true }],
        ["Whatever arises in dependence, that is emptiness", 700, 330, <W c={DIM} s={40}>=</W>, { d: 1.4 }],
        ["Whatever arises in dependence, that is emptiness", 960, 330, <K c={VIOLET} s={28}>emptiness</K>, { pop: true, d: 1.6 }],
        ["That is designation in dependence", 1220, 330, <W c={DIM} s={40}>=</W>],
        ["That is designation in dependence", 1460, 330, <K c={GOLD} s={28}>designation in dependence</K>, { pop: true, d: 0.3 }],
        ["That is the middle way", 960, 460, <W c={GOLD} s={50} serif>the middle way</W>],
        ["one fact, seen from two sides", 960, 580, <W c={TEAL} s={34} serif>not found, still counted: one fact</W>],
        ["The moment is named arising and ceasing", 960, 690, <W c={CHALK} s={30}>the moment: named arising and ceasing, upon conditions</W>],
        ["The moment is named arising and ceasing", 960, 780, <W c={GOLD} s={32} serif>all it ever needed to be</W>, { d: 3.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const StickerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const peel = ramp(t, c("Peel the name off"), 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Now a second mistake")}>a name is not a sticker</Title>
      <Items items={[
        ["it pictures a sticker", 600, 400, <Jar peel={peel} />, { pop: true }],
        ["it pictures a sticker", 600, 600,
          <SK c={DIM} s={24} strikeAt={c("But look at a cup") + 0.2}>a jar, finished before any name</SK>, { d: 1.6 }],
        ["But look at a cup", 1320, 390, <Cup color={TEAL} size={180} />, { pop: true }],
        ["It appears as a cup, already something to lift", 1320, 520, <W c={TEAL} s={28}>a cup: already something to lift</W>],
        ["Peel the name off", 1320, 600, <W c={DIM} s={24}>peel off the name: nothing bare beneath</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("goes further: even the basis is named");
  const r = c("named in dependence on rim, spokes and hub");
  return (
    <AbsoluteFill>
      <Title at={a}>even the basis is named</Title>
      <Flow x1={960} y1={255} x2={960} y2={312} color={TEAL} p={ramp(t, a + 1.2, 0.4)} pulses={false} />
      <Flow x1={960} y1={365} x2={960} y2={422} color={TEAL} p={ramp(t, r + 0.4, 0.4)} pulses={false} />
      <Items items={[
        ["goes further: even the basis is named", 960, 225, <K c={GOLD} s={28}>chariot</K>, { pop: true, d: 0.6 }],
        ["goes further: even the basis is named", 960, 340, <K c={TEAL} s={28}>wheels</K>, { pop: true, d: 1.4 }],
        ["named in dependence on rim, spokes and hub", 960, 450, <K c={ICE} s={28}>rim · spokes · hub</K>, { pop: true, d: 0.6 }],
        ["all the way down", 960, 540, <W c={DIM} s={28}>… and so on, all the way down</W>],
        ["We never see ourselves naming", 960, 650, <W c={CHALK} s={30}>the naming unseen, felt as the world itself</W>],
        ["In the koan, that is the it", 960, 760, <K c={WARM} s={34}>the “it”</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ChecksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lit = ramp(t, c("The lamp comes on"), 0.6);
  const pass = ramp(t, c("passes all three"), 0.4);
  return (
    <AbsoluteFill>
      <Title at={c("The opposite mistake")}>not arbitrary</Title>
      <Items items={[
        ["can I call a shadow a bridge", 960, 195, <SK c={DIM} s={26} strikeAt={c("A name holds or fails as it is used")}>call a shadow a bridge</SK>],
        ["A name holds or fails as it is used", 960, 265, <W c={GOLD} s={30}>a name holds or fails in use</W>],
        ["It is known to ordinary seeing", 500, 360, <W c={DIM} s={26}>three checks</W>, { d: -1.4 }],
        ["It is known to ordinary seeing", 500, 440, <Row n="1" color={TEAL} lit={pass}>known to ordinary seeing</Row>],
        ["A second look does not overturn it", 500, 530, <Row n="2" color={TEAL} lit={pass}>not overturned by a second look</Row>],
        ["And searching for how things ultimately are", 500, 620, <Row n="3" color={TEAL} lit={pass}>not overturned by analysis</Row>],
        ["In dim light, you see a snake in the corner", 1360, 450, <SnakeRope lit={lit} />, { pop: true }],
        ["The lamp comes on", 1360, 320, <Orb size={80} color={GOLD} core={1} />, { pop: true }],
        ["The snake fails the second check", 1360, 570, <SK c={GREEN} s={24} strikeAt={c("The snake fails the second check") + 0.6}>a snake</SK>],
        ["A rope there from its own side fails the third", 1360, 635,
          <SK c={DIM} s={24} strikeAt={c("A rope there from its own side fails the third") + 1.6}>a rope from its own side</SK>],
        ["passes all three", 1360, 700, <K c="#C9A06A" s={26}>the rope, as named: it works</K>, { pop: true }],
        ["but because it works", 960, 790, <W c={GOLD} s={32} serif>valid because it works</W>],
      ]} />
    </AbsoluteFill>
  );
};

const AuthorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cross = c("and something crossing between them");
  return (
    <AbsoluteFill>
      <Title at={c("The author first met the chariot")}>the chariot everywhere</Title>
      <Flow x1={700} y1={390} x2={1220} y2={390} color={DIM} p={ramp(t, cross, 0.6) * (1 - ramp(t, c("Walking is the chariot"), 0.6))} dash />
      <Items items={[
        ["The author first met the chariot", 960, 185, <W c={DIM} s={26}>first, a clever argument about a cart</W>, { d: 1.2, until: "The taste was free of substance" }],
        ["The author first met the chariot", 960, 245, <W c={TEAL} s={24}>the self already not found</W>, { d: 3.6, until: "The taste was free of substance" }],
        ["The taste was free of substance", 680, 205, <K c={GOLD} s={26}>the taste: free of substance</K>, { pop: true }],
        ["The taste was free of substance", 1240, 205, <K c={WARM} s={26}>the view: not yet</K>, { pop: true, d: 1.8 }],
        ["He still pictured an ear here, a bell there", 600, 400, <Ear />, { pop: true }],
        ["He still pictured an ear here, a bell there", 1320, 390, <Bell size={130} />, { pop: true, d: 0.8 }],
        ["and something crossing between them", 960, 320,
          <SK c={DIM} s={24} strikeAt={c("Walking is the chariot") + 0.3}>something crossing between</SK>],
        ["Walking is the chariot", 600, 590, <W c={GOLD} s={36} serif>“Walking is the chariot.”</W>],
        ["Walking is the chariot", 1320, 590, <W c={GOLD} s={36} serif>“Hearing is the chariot.”</W>, { d: 1.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const AxleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rm = ramp(t, c("Remove the axle") + 0.6, 0.6);
  const gone = ramp(t, c("There is no chariot"), 0.8);
  const N = ["bell", "striker", "air", "ear", "sound"];
  const tog = c("Bell, striker, air, ear and sound are named together");
  return (
    <AbsoluteFill>
      <Title at={c("Remove the axle")}>remove the axle</Title>
      <At x={960} y={330} o={1 - gone}><Chariot size={400} axle={1 - rm} /></At>
      <At x={960} y={330} o={gone}><W c={CHALK} s={32} serif>not a lesser chariot: no chariot</W></At>
      {N.map((w, i) => (
        <At key={w} x={560 + i * 200} y={540} o={ramp(t, tog + i * 0.35, 0.4)}><K c={i === 4 ? GOLD : TEAL} s={28}>{w}</K></At>
      ))}
      <At x={960} y={620} o={ramp(t, tog + 2.0, 0.5)}><W c={GOLD} s={30}>named together, one happening</W></At>
      <Items items={[
        ["intimacy no longer meant closeness", 960, 720, <W c={ROSE} s={32} serif>“intimacy no longer meant closeness …</W>],
        ["there was never any separation to close", 960, 795, <W c={GOLD} s={32} serif>… there was never any separation to close.”</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pull = c("Pull a car apart in your mind");
  const back = c("Put it back, bolt by bolt");
  const apart = ramp(t, pull + 0.6, 1.2) * (1 - ramp(t, back + 0.3, 1.6));
  const grow = ramp(t, c("A seed is called a cause only of its sprout") + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <Title at={c("The seven places work on anything")}>beyond the moment</Title>
      <Items items={[
        ["The self is not body and mind", 500, 220, <K c={ICE} s={30}>the self</K>, { pop: true }],
        ["The self is not body and mind", 500, 300, <SK c={DIM} s={24} strikeAt={c("The self is not body and mind") + 3.0}>an “I” found in the seven places</SK>, { d: 0.6 }],
        ["The self is not body and mind", 500, 375, <W c={GOLD} s={26}>yet promises are kept</W>, { d: 3.6 }],
        ["Pull a car apart in your mind", 1400, 200, <K c={TEAL} s={30}>an object</K>, { pop: true }],
        ["Pull a car apart in your mind", 1400, 340, <Car apart={apart} />, { d: 0.3 }],
        ["Nothing called car was added", 1400, 475, <W c={DIM} s={24}>nothing called “car” was added</W>],
        ["A seed is called a cause only of its sprout", 500, 540, <K c={GREEN} s={30}>a cause</K>, { pop: true }],
        ["A seed is called a cause only of its sprout", 500, 670, <SeedSprout grow={grow} />, { pop: true, d: 0.3 }],
        ["never from barley", 500, 790, <W c={GREEN} s={24}>rice from rice seed, never barley</W>],
        ["Look for a friend apart from the face", 1400, 560, <K c={ROSE} s={30}>the person</K>, { pop: true }],
        ["Look for a friend apart from the face", 1310, 680, <Person color={ROSE} size={110} />, { pop: true }],
        ["Look for a friend apart from the face", 1490, 680, <Person color={TEAL} size={110} />, { pop: true, d: 0.3 }],
        ["Yet a promise to a friend is kept", 1400, 790, <W c={GOLD} s={24}>a promise to a friend is kept</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to one sound");
  const chair = c("Or pick a chair near you");
  const swing = 8 * Math.sin((t - b) * 5) * Math.exp(-Math.max(0, t - b) * 0.6) * (t > b ? 1 : 0);
  return (
    <AbsoluteFill>
      <Title at={b} color={GOLD}>try it</Title>
      <At x={960} y={330} s={pop(t, fps, b)} o={1 - ramp(t, chair, 0.5)}><Bell swing={swing} size={160} /></At>
      <Sound x={960} y={350} at={b + 0.4} dur={Math.max(1, chair - b - 1.5)} r1={420} />
      <Items items={[
        ["Is the moment its arising", 960, 540, <W c={CHALK} s={30}>its arising? its ceasing?</W>, { until: "Both? Other than them? Their owner" }],
        ["Both? Other than them? Their owner", 960, 540, <W c={CHALK} s={30}>both? other? owner? container?</W>, { until: "Then notice the sound is still here, heard in full" }],
        ["Then notice the sound is still here, heard in full", 960, 540, <W c={GOLD} s={38} serif>the sound, still heard in full</W>, { until: "Or pick a chair near you" }],
        ["Or pick a chair near you", 960, 360, <Chair />, { pop: true, d: 0.3 }],
        ["Or pick a chair near you", 960, 560, <W c={DIM} s={28}>the seven places, slowly</W>, { d: 2.0 }],
        ["Then use it", 960, 660, <W c={GOLD} s={42} serif>then use it</W>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "Here is the koan"], ["web", "This is the third step of The Logic"], ["search", "how he came"],
    ["web", "made the search complete"], ["sea", "Now search the same places for this moment"],
    ["whole", "coming into being and passing away are not found without a thing"],
    ["search", "With the logic of substance, the sound is a slice of time"], ["doubt", "Here is where most readers go wrong"],
    ["web", "So what is the chariot"], ["whole", "puts the whole Middle Way in one verse"], ["doubt", "Now a second mistake"],
    ["sea", "goes further: even the basis is named"], ["search", "The opposite mistake"], ["vivid", "The author first met the chariot"],
    ["whole", "Remove the axle"], ["vivid", "The seven places work on anything"], ["whole", "Listen to one sound"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Here is the koan", <KoanScene />],
    ["This is the third step of The Logic", <IntroScene />],
    ["how he came", <ChariotScene />],
    ["made the search complete", <SevenScene />],
    ["Now search the same places for this moment", <MomentSearchScene />],
    ["coming into being and passing away are not found without a thing", <VerseScene />],
    ["With the logic of substance, the sound is a slice of time", <BothWaysScene />],
    ["Here is where most readers go wrong", <NotFoundScene />],
    ["So what is the chariot", <DesignatedScene />],
    ["puts the whole Middle Way in one verse", <MiddleWayScene />],
    ["Now a second mistake", <StickerScene />],
    ["goes further: even the basis is named", <BasisScene />],
    ["The opposite mistake", <ChecksScene />],
    ["The author first met the chariot", <AuthorScene />],
    ["Remove the axle", <AxleScene />],
    ["The seven places work on anything", <BeyondScene />],
    ["Listen to one sound", <TryScene />],
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
