// After Anatta 2: What Is Negated (The Logic, Step 2). Explainer drawings timed to the narration.
// Arc: the koan's "it" -> aim the denial: too short, too far, on target -> Tsongkhapa: find the target in your own mind ->
// the author negating everything but the Witness -> the bell, left alone; seen with substance and with dependency ->
// own-nature (svabhava): not made, not dependent, the whole target -> falling short: only theories / a ground behind the self,
// a timeless Now -> going too far: "nothing happens" -> a harsh word still hurts; empty, so things can work ->
// nothing put in its place; emptiness empty too -> presence never the target -> "something there" -> three tastes,
// three inventions -> dependency removes the inside -> your own weight (Earth, Moon, orbit; Mach; Dogen) -> the lightness
// spreads: mind and matter light, magical and plastic -> self, ice, seed, person -> try it.
// Stance: emptiness is drawn only as the not-finding, never as a ground, container or backdrop. Struck chips are only
// for invented things and wrong views (own-nature, the abiding moment, a ground, a timeless Now, "nothing happens",
// the Witness, "all in my mind"). The bell, the ice, the seed, the person and presence itself stay vivid and are never struck.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, IceCube, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan, and the aim
  "This moment ceases as it arises", "Does it arise, or does it cease",
  "The answer to the koan is that no it is found", "But what it denies is narrow", "A moment with a nature of its own",
  "This is the second step of The Logic", "This step is about aiming the denial exactly",
  "Aim it short, and the it survives somewhere else", "Aim it too far", "destroys the very moment it was meant to free",
  // finding the target
  "made this the first step of the whole analysis", "as it actually works in your own mind", "however sound the reasoning",
  "The author learned this the long way", "I was good at negating", "Thoughts, sensations, the body, the world",
  "not this, not that", "the one doing the setting aside", "the more solid the Witness became",
  // two ways of seeing the bell
  "Start with what the koan leaves alone", "The bell is struck, and the ringing fades", "This is fully valid",
  "What differs is how the same sound is seen",
  "With the logic of substance, there is a sound first", "for at least an instant, between the two",
  "With the logic of dependency, the sounding is heard", "nothing standing behind it is found",
  "against what came before and what comes after", "Nothing is missing from it",
  // own-nature
  "What is denied is one thing", "apart from everything else, including the mind that picks it out",
  "Own-nature is not made", "does not depend on anything else", "Anything made from causes and conditions cannot have it",
  "That is the whole target", "Nothing else is negated", "own-nature is the moment that abides", "That is what is not found",
  // too little
  "There are two ways to fall short", "The first is to refute only theories", "acquired grasping, shaped by philosophy",
  "from innate grasping", "leave that felt sense untouched", "The habit was",
  "The second is to negate the self", "A pure Awareness, a Source, a ground of being", "This is subtle",
  "The author held this position before 1997", "and a timeless Now takes its place",
  "or an awareness in which moments come and go", "Each is the it moved one level down",
  "Does the Now arise, or cease", "Does the awareness",
  // too much
  "The opposite mistake is quieter", "concludes that nothing happens at all", "Actions bring no results",
  "Emptiness becomes a void to rest in", "refuses both sides", "is the grasping of permanence",
  "is the view of annihilation", "should not take their stand on existence or on non-existence",
  "Yet a harsh word still hurts", "and a kind one still helps", "it has aimed past the target",
  "Only because things are empty can they arise, change and work at all", "A moment with own-nature could never pass",
  // what remains
  "When own-nature is negated, nothing is put in its place", "a non-implicative negation", "It removes, and implies nothing further",
  "No timeless Now steps in", "The sound is simply sounding", "And emptiness is not exempt", "It is empty too",
  "Presence was never the target", "presence did not fade", "It became more vivid", "What went was the standing, not the shining",
  // something there
  "the logic of substance is not about matter", "we take it that there must be something there",
  "the habit is quicker than any experience", "it rebuilds into a something",
  "We taste luminous clarity, and we invent a Witness", "We taste the vividness of appearances",
  "We taste unfindability, and we make it private", "Three genuine tastes, three inventions",
  "The experience was true, and the reading was false", "So better experience cannot cure it",
  "The author met all three on his own path", "It was the logic of dependency that got him out",
  "is not an inside looking out", "is not truly inside", "The taste was right", "The something we made of it was not",
  // your own weight
  "Stand on a scale", "Your weight seems to be yours", "like a stone in a pocket",
  "But weight is a pull between your body and the earth", "On the Moon you would weigh a sixth as much",
  "In orbit you would weigh nothing", "and not a gram of you would be gone", "Ernst Mach argued",
  "its relation to all the matter in the universe", "Dogen would say the whole universe is exerted in this one heaviness",
  "not as a floor holding it up", "The scale still reads seventy kilos", "Only a heaviness sitting in the body, on its own, is denied",
  // the lightness spreads
  "Once dependent arising is seen, this lightness spreads", "Mind or matter, subjective or objective",
  "each loses its weight and its fixed identity", "Not because anything is taken away",
  "because nothing was ever inside it to be heavy", "Things become light", "magical and plastic",
  "a display that works perfectly and holds nothing",
  // beyond the moment
  "The koan is only the sharpest case", "When you are falsely accused", "Yet the one who speaks, decides and answers is not denied",
  "Hold a cube of ice", "It is not found in any of them", "Yet the hand is still cold",
  "Plant a seed, with soil, water and warmth", "a shoot already packed inside the seed", "Because the seed is empty, it can grow",
  "The person you love is not negated", "a core that would stay the same", "The love is real",
  // try it
  "So try it", "Listen to a sound until it ends", "The sounding is not in doubt",
  "What is not found is a sound standing between its start and its end", "Let only that go",
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

// ---------------------------------------------------------------- scenes

/** A hand, open or closed into a fist (closed: 0..1). */
const Hand: React.FC<{ closed: number; color?: string }> = ({ closed, color = WARM }) => (
  <svg width={130} height={130} viewBox="0 0 130 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={30} y={62} width={70} height={56} rx={18} fill={`${color}22`} stroke={color} strokeWidth={4} />
    {[0, 1, 2, 3].map(i => (
      <rect key={i} x={32 + i * 17} y={62 - 46 * (1 - closed)} width={14} height={14 + 46 * (1 - closed)} rx={7}
        fill={`${color}22`} stroke={color} strokeWidth={3.5} />
    ))}
    <rect x={6 + 18 * closed} y={70} width={30 - 6 * closed} height={14} rx={7} fill={`${color}22`} stroke={color} strokeWidth={3.5} />
  </svg>
);


// ---------------------------------------------------------------- drawings for this step
/** An archery target: the one thing aimed at. */
const Target: React.FC<{ size?: number; color?: string }> = ({ size = 300, color = GOLD }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
    {[92, 66, 40].map((r, i) => <circle key={r} cx={100} cy={100} r={r} fill={`${color}${i === 2 ? "33" : "12"}`} stroke={color} strokeWidth={4} />)}
    <circle cx={100} cy={100} r={12} fill={color} />
  </svg>
);

/** A seed in the soil and its shoot (grow: 0..1). */
const Seed: React.FC<{ grow: number }> = ({ grow }) => (
  <svg width={200} height={130} viewBox="0 0 200 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M10 112 L190 112" stroke="#b07a45" strokeWidth={5} strokeLinecap="round" />
    <ellipse cx={100} cy={118} rx={18} ry={11} fill="#b07a4566" stroke="#c99060" strokeWidth={4} />
    <path d={`M100 110 L100 ${110 - 80 * grow}`} stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
    <path d={`M100 ${110 - 55 * grow} Q72 ${92 - 60 * grow} 82 ${102 - 70 * grow} Q96 ${100 - 52 * grow} 100 ${110 - 55 * grow} Z`}
      fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={grow} />
    <path d={`M100 ${110 - 70 * grow} Q128 ${90 - 70 * grow} 120 ${100 - 80 * grow} Q106 ${98 - 66 * grow} 100 ${110 - 70 * grow} Z`}
      fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={grow} />
  </svg>
);

/** A speech bubble with a word in it. */
const Bubble: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <div style={{ position: "relative", padding: "18px 34px", borderRadius: 40, border: `4px solid ${color}`, background: `${color}22`,
    boxShadow: `0 0 24px ${color}66`, fontFamily: SERIF, fontSize: 36, color: CHALK }}>
    {children}
    <div style={{ position: "absolute", left: 40, bottom: -22, width: 0, height: 0, borderLeft: "14px solid transparent",
      borderRight: "14px solid transparent", borderTop: `22px solid ${color}` }} />
  </div>
);

/** A dashed empty place, where the "it" would have to stand. */
const Slot: React.FC<{ w?: number; h?: number; color?: string }> = ({ w = 260, h = 120, color = DIM }) => (
  <div style={{ width: w, height: h, borderRadius: 18, border: `3px dashed ${color}` }} />
);

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ans = c("The answer to the koan is that no it is found");
  return (
    <AbsoluteFill>
      <Title at={0.2} color={DIM} size={34}>the koan</Title>
      <At x={960} y={260} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={62} speed={0.035} />
      </At>
      <At x={960} y={380} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={62} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      <At x={960} y={540} o={ramp(t, ans, 0.4)}><SK c={WARM} s={36} strikeAt={ans + 1.6}>“it”</SK></At>
      <Items items={[
        ["The answer to the koan is that no it is found", 960, 630, <W c={CHALK} s={30}>no “it” is found</W>, { d: 1.2 }],
        ["But what it denies is narrow", 960, 710, <W c={GOLD} s={34} serif>what it denies is narrow</W>],
        ["A moment with a nature of its own", 960, 790, <W c={DIM} s={28}>only a moment with a nature of its own</W>],
      ]} />
    </AbsoluteFill>
  );
};

const AimScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const aim = c("This step is about aiming the denial exactly");
  const sh = c("Aim it short, and the it survives somewhere else");
  const far = c("Aim it too far");
  return (
    <AbsoluteFill>
      <Title at={c("This is the second step of The Logic")}>The Logic · Step 2</Title>
      <Items items={[
        ["This is the second step of The Logic", 960, 180, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.2 }],
      ]} />
      <At x={1100} y={440} s={pop(t, fps, aim)}><Target size={320} /></At>
      <Flow x1={260} y1={440} x2={1100} y2={440} color={GOLD} p={ramp(t, aim + 0.8, 0.8)} pulses={false} width={5} />
      <Flow x1={260} y1={480} x2={760} y2={480} color={WARM} p={ramp(t, sh, 0.7)} pulses={false} width={5} />
      <Flow x1={260} y1={400} x2={1680} y2={400} color={ROSE} p={ramp(t, far, 0.9)} pulses={false} width={5} />
      <Items items={[
        ["This step is about aiming the denial exactly", 1100, 680, <K c={GOLD} s={30}>aim exactly</K>, { d: 1.6, pop: true }],
        ["Aim it short, and the it survives somewhere else", 560, 580, <W c={WARM} s={28}>too short: the “it” survives</W>, { d: 0.8 }],
        ["destroys the very moment it was meant to free", 1600, 580, <W c={ROSE} s={28}>too far: the moment destroyed</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FindScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ts = c("made this the first step of the whole analysis");
  return (
    <AbsoluteFill>
      <Title at={ts}>first, find the target</Title>
      <Items items={[
        ["made this the first step of the whole analysis", 960, 190, <W c={DIM} s={28}>Tsongkhapa</W>, { d: 0.8 }],
        ["however sound the reasoning", 960, 680, <W c={WARM} s={30}>otherwise the refutation misses</W>],
      ]} />
      <At x={820} y={420} o={ramp(t, c("as it actually works in your own mind"), 0.5)}><Head color={VIOLET} /></At>
      <At x={860} y={400} s={pop(t, fps, c("as it actually works in your own mind") + 0.6)}><Target size={110} /></At>
      <At x={1180} y={440} s={pop(t, fps, c("as it actually works in your own mind") + 1.0)}><Magnifier /></At>
      <Items items={[
        ["as it actually works in your own mind", 960, 600, <W c={GOLD} s={32} serif>as it works in your own mind</W>, { d: 1.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const NegatingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const list = c("Thoughts, sensations, the body, the world");
  const away = c("not this, not that");
  const solid = ramp(t, c("the more solid the Witness became"), 1.2);
  const P = ["thoughts", "sensations", "the body", "the world"];
  return (
    <AbsoluteFill>
      <Title at={c("The author learned this the long way")}>the long way</Title>
      <Items items={[
        ["I was good at negating", 960, 190, <W c={DIM} s={30} serif>“I was good at negating”</W>],
      ]} />
      {P.map((w, i) => (
        <At key={w} x={560 - 160 * ramp(t, away + i * 0.2, 0.8)} y={300 + i * 90} o={ramp(t, list + i * 0.45, 0.4) * (1 - 0.55 * ramp(t, away + i * 0.2, 0.8))}>
          <K c={ICE} s={28}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["not this, not that", 420, 700, <W c={ICE} s={28}>“not this, not that”: set aside</W>, { d: 0.6 }],
      ]} />
      <At x={1300} y={420} o={ramp(t, c("the one doing the setting aside"), 0.5)} s={1 + 0.15 * solid}>
        <div style={{ filter: `drop-shadow(0 0 ${10 + 40 * solid}px ${WARM})` }}><Person color={WARM} size={200} dashed={solid < 0.5} /></div>
      </At>
      <Items items={[
        ["the one doing the setting aside", 1300, 590, <K c={WARM} s={26}>the one setting aside: never tested</K>, { d: 0.6 }],
        ["the more solid the Witness became", 1300, 680, <W c={WARM} s={32} serif>the Witness grew solid</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const strike = c("The bell is struck, and the ringing fades");
  const swing = 8 * Math.sin((t - strike) * 5) * Math.exp(-Math.max(0, t - strike) * 0.6) * (t > strike ? 1 : 0);
  return (
    <AbsoluteFill>
      <Title at={c("Start with what the koan leaves alone")} color={GOLD}>what the koan leaves alone</Title>
      <At x={960} y={400} s={pop(t, fps, strike - 0.3)}><Bell swing={swing} /></At>
      <Sound x={960} y={420} at={strike + 0.4} dur={5} />
      <Items items={[
        ["This is fully valid", 960, 640, <W c={GOLD} s={34} serif>fully valid, no fainter</W>],
        ["What differs is how the same sound is seen", 960, 730, <W c={CHALK} s={30}>what differs: how it is seen</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BothWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("With the logic of substance, there is a sound first");
  const dep = c("With the logic of dependency, the sounding is heard");
  const still = c("for at least an instant, between the two");
  return (
    <AbsoluteFill>
      <Title at={sub}>the same sound, seen two ways</Title>
      <At x={560} y={210} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>substance</K></At>
      <At x={560} y={400} s={pop(t, fps, sub + 0.6)}>
        <div style={{ width: 190, height: 110, borderRadius: 14, background: `${WARM}${t > still ? "55" : "22"}`, border: `4px solid ${WARM}`,
          boxShadow: `0 0 ${t > still ? 44 : 18}px ${WARM}88`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <W c={CHALK} s={30}>a sound</W>
        </div>
      </At>
      <Items items={[
        ["With the logic of substance, there is a sound first", 300, 400, <W c={GREEN} s={26}>arising →</W>, { d: 1.6 }],
        ["With the logic of substance, there is a sound first", 820, 400, <W c={ROSE} s={26}>→ ceasing</W>, { d: 2.0 }],
        ["for at least an instant, between the two", 560, 560, <W c={WARM} s={28}>held still, between the two</W>],
      ]} />
      <At x={1360} y={210} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>dependency</K></At>
      <At x={1360} y={400} s={pop(t, fps, dep + 0.4)}><Bell size={130} /></At>
      <Sound x={1360} y={410} at={dep + 0.6} dur={9} r1={260} />
      <Items items={[
        ["nothing standing behind it is found", 1360, 560, <SK c={DIM} s={24} strikeAt={c("nothing standing behind it is found") + 1.0}>something behind the sounding</SK>],
        ["against what came before and what comes after", 1360, 640, <W c={TEAL} s={26}>“arising”, “ceasing”: how it is picked out</W>],
        ["Nothing is missing from it", 960, 770, <W c={GOLD} s={32} serif>nothing is missing from it</W>],
      ]} />
    </AbsoluteFill>
  );
};

const OwnNatureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const abide = c("own-nature is the moment that abides");
  return (
    <AbsoluteFill>
      <Title at={c("What is denied is one thing")} color={GOLD}>own-nature · svabhāva</Title>
      <Items items={[
        ["apart from everything else, including the mind that picks it out", 960, 200, <W c={CHALK} s={28}>what a thing would be apart from everything, even the mind</W>],
        ["Own-nature is not made", 700, 310, <K c={GOLD} s={30}>not made</K>, { pop: true }],
        ["does not depend on anything else", 1220, 310, <K c={GOLD} s={30}>not dependent</K>, { pop: true }],
        ["Anything made from causes and conditions cannot have it", 960, 410, <W c={DIM} s={28}>made from causes and conditions: none of it</W>],
      ]} />
      <At x={560} y={590} s={pop(t, fps, c("That is the whole target"))}><Target size={200} /></At>
      <Items items={[
        ["That is the whole target", 560, 730, <W c={GOLD} s={28}>the whole target</W>, { d: 0.4 }],
        ["Nothing else is negated", 560, 800, <W c={CHALK} s={28}>nothing else is negated</W>],
        ["own-nature is the moment that abides", 1340, 590, <SK c={WARM} s={28} strikeAt={c("That is what is not found") + 0.3}>a moment that abides, on its own</SK>, { pop: true }],
        ["own-nature is the moment that abides", 1340, 690, <W c={DIM} s={24}>so arising and ceasing could happen to it</W>, { d: 1.0 }],
        ["That is what is not found", 1340, 780, <W c={TEAL} s={28}>not found</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const TheoriesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("There are two ways to fall short")} color={WARM}>falling short</Title>
      <Items items={[
        ["The first is to refute only theories", 960, 200, <W c={CHALK} s={30}>1 · refuting only theories</W>],
        ["acquired grasping, shaped by philosophy", 960, 320, <SK c={VIOLET} s={28} strikeAt={c("acquired grasping, shaped by philosophy") + 1.4}>acquired grasping · theories</SK>],
        ["from innate grasping", 960, 470, <K c={WARM} s={34}>innate grasping · the felt sense, before words</K>, { pop: true }],
        ["leave that felt sense untouched", 960, 600, <W c={WARM} s={28}>untouched by the argument</W>],
        ["The habit was", 960, 760, <W c={GOLD} s={36} serif>the problem was the habit</W>],
      ]} />
      <At x={960} y={470} o={ramp(t, c("leave that felt sense untouched"), 0.5)}>
        <div style={{ width: 760, height: 90, borderRadius: 45, boxShadow: `0 0 60px ${WARM}88` }} />
      </At>
    </AbsoluteFill>
  );
};

const GroundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const self = c("The second is to negate the self");
  const now = c("and a timeless Now takes its place");
  const aw = c("Does the awareness");
  const G = ["a pure Awareness", "a Source", "a ground of being"];
  return (
    <AbsoluteFill>
      <Title at={self} color={WARM}>2 · a ground behind the self</Title>
      <At x={480} y={400} s={pop(t, fps, self)} o={1 - ramp(t, now, 0.5)}><Person color={CHALK} size={170} dashed /></At>
      <At x={480} y={540} o={ramp(t, self + 0.6, 0.4) * (1 - ramp(t, now, 0.5))}><SK c={DIM} s={26} strikeAt={self + 1.4}>a self</SK></At>
      {G.map((w, i) => (
        <At key={w} x={1180} y={300 + i * 90} o={ramp(t, c("A pure Awareness, a Source, a ground of being") + i * 0.5, 0.4) * (1 - ramp(t, now, 0.5))}>
          <K c={WARM} s={28}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["This is subtle", 1180, 580, <W c={DIM} s={26}>subtle: the negation feels complete</W>, { until: "and a timeless Now takes its place" }],
        ["The author held this position before 1997", 1180, 650, <W c={DIM} s={26}>the author, before 1997</W>, { until: "and a timeless Now takes its place" }],
        ["and a timeless Now takes its place", 700, 360, <SK c={WARM} s={30} strikeAt={aw + 0.6}>a timeless Now</SK>, { pop: true }],
        ["or an awareness in which moments come and go", 1220, 360, <SK c={WARM} s={30} strikeAt={aw + 0.9}>an awareness behind</SK>, { pop: true }],
        ["Each is the it moved one level down", 960, 470, <Floor w={900} dashed />, { d: 0.4 }],
        ["Each is the it moved one level down", 960, 550, <W c={WARM} s={30}>the “it”, one level down</W>, { d: 0.6 }],
        ["Does the Now arise, or cease", 960, 670, <W c={ICE} s={34} serif>does the Now arise, or cease?</W>],
        ["Does the awareness", 960, 750, <W c={ICE} s={30} serif>does the awareness?</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TooMuchScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const refuse = c("refuses both sides");
  return (
    <AbsoluteFill>
      <Title at={c("The opposite mistake is quieter")} color={ROSE}>negating too much</Title>
      <Items items={[
        ["concludes that nothing happens at all", 960, 230, <SK c={DIM} s={32} strikeAt={refuse}>“nothing happens at all”</SK>],
        ["Actions bring no results", 640, 340, <SK c={DIM} s={26} strikeAt={refuse + 0.3}>no results</SK>],
        ["Emptiness becomes a void to rest in", 1280, 340, <SK c={DIM} s={26} strikeAt={refuse + 0.6}>a void to rest in</SK>],
        ["refuses both sides", 960, 450, <W c={DIM} s={28}>Nāgārjuna</W>],
        ["is the grasping of permanence", 560, 550, <W c={WARM} s={30} serif>“It is”: permanence</W>],
        ["is the view of annihilation", 1360, 550, <W c={ROSE} s={30} serif>“It is not”: annihilation</W>],
        ["should not take their stand on existence or on non-existence", 960, 680, <W c={GOLD} s={34} serif>no stand on either</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WorksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Yet a harsh word still hurts")}>the working world stays</Title>
      <Items items={[
        ["Yet a harsh word still hurts", 600, 280, <Bubble color={ROSE}>a harsh word</Bubble>, { pop: true }],
        ["Yet a harsh word still hurts", 600, 380, <W c={ROSE} s={28}>still hurts</W>, { d: 0.6 }],
        ["and a kind one still helps", 1320, 280, <Bubble color={GREEN}>a kind word</Bubble>, { pop: true }],
        ["and a kind one still helps", 1320, 380, <W c={GREEN} s={28}>still helps</W>, { d: 0.6 }],
        ["it has aimed past the target", 960, 480, <W c={WARM} s={28}>cause and result matter less? aimed past the target</W>],
        ["Only because things are empty can they arise, change and work at all", 960, 610, <Fruit />, { pop: true }],
        ["Only because things are empty can they arise, change and work at all", 960, 740, <W c={GOLD} s={32} serif>empty, so they can arise, change and work</W>, { d: 0.6 }],
        ["A moment with own-nature could never pass", 960, 815, <W c={DIM} s={26}>own-nature could never pass</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RemainsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neg = c("When own-nature is negated, nothing is put in its place");
  const no = c("No timeless Now steps in");
  const snd = c("The sound is simply sounding");
  const ex = c("And emptiness is not exempt");
  const gone = 1 - ramp(t, snd, 0.6);
  const C = ["a timeless Now", "an awareness behind", "a void"];
  return (
    <AbsoluteFill>
      <Title at={neg}>nothing put in its place</Title>
      <At x={960} y={380} o={ramp(t, neg, 0.5) * gone}><Slot w={300} h={130} /></At>
      <At x={960} y={380} o={ramp(t, neg, 0.4) * gone}><SK c={WARM} s={34} strikeAt={neg + 1.2}>“it”</SK></At>
      <Items items={[
        ["a non-implicative negation", 960, 200, <K c={TEAL} s={28}>a non-implicative negation</K>, { pop: true, until: "And emptiness is not exempt" }],
        ["It removes, and implies nothing further", 960, 270, <W c={DIM} s={26}>removes, implies nothing further</W>, { until: "And emptiness is not exempt" }],
      ]} />
      {C.map((w, i) => (
        <At key={w} x={560 + i * 400} y={540} o={ramp(t, no + i * 0.6, 0.4) * gone}>
          <SK c={DIM} s={26} strikeAt={no + i * 0.6 + 0.5}>{w}</SK>
        </At>
      ))}
      <At x={960} y={380} s={pop(t, fps, snd)}><Bell size={150} /></At>
      <Sound x={960} y={395} at={snd + 0.3} dur={8} r1={320} />
      <Items items={[
        ["The sound is simply sounding", 960, 560, <W c={ICE} s={32} serif>simply sounding</W>, { d: 0.6 }],
        ["And emptiness is not exempt", 960, 680, <SK c={VIOLET} s={28} strikeAt={c("It is empty too")}>emptiness as a ground</SK>, { pop: true }],
        ["It is empty too", 960, 780, <W c={VIOLET} s={32} serif>empty too</W>, { d: 0.4 }],
      ]} />
      <At x={960} y={200} o={ramp(t, ex, 0.5)}><W c={DIM} s={26}>not a substance, a void, or a ground</W></At>
    </AbsoluteFill>
  );
};

const PresenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const viv = ramp(t, c("It became more vivid"), 1.2);
  const b = c("Presence was never the target");
  return (
    <AbsoluteFill>
      <Title at={b} color={GOLD}>presence was never the target</Title>
      <At x={960} y={400} s={pop(t, fps, b + 0.3)}>
        <div style={{ filter: `drop-shadow(0 0 ${10 + 40 * viv}px ${GOLD}) brightness(${1 + 0.4 * viv})` }}><Bell size={170} /></div>
      </At>
      <Sound x={960} y={420} at={b + 0.6} dur={12} r1={380 + 160 * viv} color={GOLD} />
      <Items items={[
        ["presence did not fade", 960, 600, <W c={CHALK} s={30}>after anatta: it did not fade</W>],
        ["It became more vivid", 960, 670, <W c={GOLD} s={34} serif>more vivid</W>],
        ["What went was the standing, not the shining", 700, 780, <SK c={DIM} s={28} strikeAt={c("What went was the standing, not the shining") + 1.2}>the standing</SK>],
        ["What went was the standing, not the shining", 1220, 780, <W c={GOLD} s={34} serif>the shining</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const SomethingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("the logic of substance is not about matter");
  const sm = c("we take it that there must be something there");
  const P = ["word", "thought", "sensation", "experience"];
  return (
    <AbsoluteFill>
      <Title at={st}>not matter, but “something there”</Title>
      {P.map((w, i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 360} y={320} o={ramp(t, st + 0.8 + i * 0.4, 0.4)}><W c={CHALK} s={32}>{w}</W></At>
          <At x={420 + i * 360} y={440} s={pop(t, fps, sm + 0.6 + i * 0.4)}><K c={WARM} s={24}>something there</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["the habit is quicker than any experience", 960, 600, <W c={WARM} s={30}>the habit is quicker than any experience</W>],
        ["it rebuilds into a something", 960, 690, <W c={GOLD} s={34} serif>whatever we taste becomes a “something”</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TastesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rd = c("The experience was true, and the reading was false");
  const T: [string, string, string, string][] = [
    ["We taste luminous clarity, and we invent a Witness", "luminous clarity", "a Witness behind the knowing", GOLD],
    ["We taste the vividness of appearances", "vividness", "a world out there", ICE],
    ["We taste unfindability, and we make it private", "unfindability", "“all in my mind”", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("We taste luminous clarity, and we invent a Witness")}>three tastes</Title>
      {T.map(([cue, taste, inv, col], i) => {
        const x = 480 + i * 480;
        const a = c(cue);
        return (
          <React.Fragment key={taste}>
            <At x={x} y={260} o={ramp(t, a, 0.4)}><W c={col} s={34} serif>{taste}</W></At>
            <Flow x1={x} y1={300} x2={x} y2={400} color={DIM} p={ramp(t, a + 1.0, 0.5)} pulses={false} />
            <At x={x} y={450} o={ramp(t, a + 1.4, 0.4)}><SK c={WARM} s={26} strikeAt={rd + 0.8 + i * 0.3}>{inv}</SK></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["Three genuine tastes, three inventions", 960, 590, <W c={CHALK} s={32}>three genuine tastes, three inventions</W>],
        ["The experience was true, and the reading was false", 960, 680, <W c={GOLD} s={32} serif>true taste, false reading</W>],
        ["So better experience cannot cure it", 960, 770, <W c={DIM} s={28}>better experience cannot cure it</W>],
      ]} />
    </AbsoluteFill>
  );
};

const InsideScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const out = c("is not an inside looking out");
  const ins = c("is not truly inside");
  const wall = 1 - ramp(t, ins + 0.4, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("The author met all three on his own path")}>met on his own path</Title>
      <At x={700} y={420} o={ramp(t, c("The author met all three on his own path") + 0.6, 0.5) * wall}><Head color={VIOLET} /></At>
      <At x={720} y={410} o={ramp(t, c("The author met all three on his own path") + 0.9, 0.5)}><Eye size={110} /></At>
      <At x={1260} y={410} o={ramp(t, c("The author met all three on his own path") + 1.2, 0.5)}><Bell size={120} /></At>
      <Flow x1={790} y1={410} x2={1190} y2={410} color={TEAL} p={ramp(t, out, 0.8)} pulses />
      <Items items={[
        ["It was the logic of dependency that got him out", 960, 200, <K c={TEAL} s={30}>the logic of dependency</K>, { pop: true }],
        ["is not an inside looking out", 960, 600, <W c={TEAL} s={28}>knower only with the known: no inside looking out</W>],
        ["is not truly inside", 960, 670, <W c={DIM} s={28}>an inside that needs an outside is not truly inside</W>, { until: "The taste was right" }],
        ["The taste was right", 960, 680, <W c={GOLD} s={36} serif>“The taste was right.</W>],
        ["The something we made of it was not", 960, 760, <W c={CHALK} s={34} serif>The something we made of it was not.”</W>],
      ]} />
    </AbsoluteFill>
  );
};

/** A bathroom scale with a lit read-out. */
const Scale: React.FC<{ reading: string; glow?: number; color?: string }> = ({ reading, glow = 0, color = GOLD }) => (
  <div style={{ width: 210, height: 54, borderRadius: 14, border: `4px solid ${CHALK}aa`, background: `${CHALK}14`,
    display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 ${10 + 30 * glow}px ${color}88` }}>
    <div style={{ padding: "2px 14px", borderRadius: 6, background: "#0009", border: `2px solid ${color}`, fontFamily: SANS,
      fontSize: 26, color, textShadow: `0 0 ${6 + 14 * glow}px ${color}` }}>{reading}</div>
  </div>
);

/** A small body (earth, moon) with its pull shown as an arrow down onto it; orbit = a ring with a floating dot. */
const Body3: React.FC<{ kind: "earth" | "moon" | "orbit"; at: number }> = ({ kind, at }) => {
  const { t } = useT();
  if (kind === "orbit") {
    const a = Math.max(0, t - at) * 1.2;
    return (
      <svg width={180} height={140} viewBox="-90 -70 180 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${TEAL}88)` }}>
        <circle r={30} fill={`${TEAL}22`} stroke={TEAL} strokeWidth={3} />
        <ellipse rx={80} ry={34} fill="none" stroke={ICE} strokeOpacity={0.6} strokeWidth={2} strokeDasharray="7 6" />
        <circle cx={80 * Math.cos(a)} cy={34 * Math.sin(a)} r={7} fill={CHALK} />
      </svg>
    );
  }
  const col = kind === "earth" ? TEAL : "#C9CED8";
  const r = kind === "earth" ? 46 : 28;
  return (
    <svg width={180} height={140} viewBox="-90 -70 180 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${col}88)` }}>
      <circle cy={20} r={r} fill={`${col}2a`} stroke={col} strokeWidth={3.5} />
      {kind === "moon" && [[-8, 12, 6], [10, 26, 4], [4, 6, 3]].map(([x, y, rr], i) => <circle key={i} cx={x} cy={y} r={rr} fill="none" stroke={col} strokeWidth={2} />)}
      <circle cy={20 - r - 22} r={8} fill={CHALK} />
      <path d={`M0 ${20 - r - 12} L0 ${20 - r - 2}`} stroke={GOLD} strokeWidth={3} />
    </svg>
  );
};

const WeightScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("Stand on a scale");
  const pull = c("But weight is a pull between your body and the earth");
  const reads = c("The scale still reads seventy kilos");
  const only = c("Only a heaviness sitting in the body, on its own, is denied");
  return (
    <AbsoluteFill>
      <Title at={st}>your own weight</Title>
      {/* the person on the scale, the earth curving beneath */}
      <At x={480} y={330} s={pop(t, fps, st + 0.2)}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Person color={CHALK} size={170} />
          <Scale reading="70 kg" glow={between(t, reads, reads + 3.5, 0.4)} />
        </div>
      </At>
      <Svg>
        <DrawPath d="M250 560 Q480 505 710 560" p={ramp(t, pull, 0.8)} color={TEAL} width={5} len={520} />
      </Svg>
      <Flow x1={480} y1={470} x2={480} y2={520} color={TEAL} p={ramp(t, pull + 0.5, 0.5)} width={4} />
      <Items items={[
        ["Your weight seems to be yours", 480, 200, <SK c={DIM} s={24} strikeAt={only + 0.4}>a heaviness sitting in the body</SK>, { d: 0.4 }],
        ["like a stone in a pocket", 480, 140, <W c={DIM} s={22}>like a stone in a pocket</W>, { until: "But weight is a pull between your body and the earth" }],
        ["But weight is a pull between your body and the earth", 480, 600, <W c={TEAL} s={26}>a pull, with the earth</W>, { d: 0.6 }],
        // Earth, Moon, orbit
        ["On the Moon you would weigh a sixth as much", 1110, 290, <Body3 kind="earth" at={0} />],
        ["On the Moon you would weigh a sixth as much", 1110, 390, <K c={TEAL} s={24}>Earth: 70 kg</K>, { d: 0.2 }],
        ["On the Moon you would weigh a sixth as much", 1390, 290, <Body3 kind="moon" at={0} />, { d: 0.6 }],
        ["On the Moon you would weigh a sixth as much", 1390, 390, <K c={CHALK} s={24}>Moon: a sixth</K>, { pop: true, d: 1.2 }],
        ["In orbit you would weigh nothing", 1670, 290, <Body3 kind="orbit" at={c("In orbit you would weigh nothing")} />],
        ["In orbit you would weigh nothing", 1670, 390, <K c={ICE} s={24}>orbit: nothing</K>, { pop: true, d: 0.6 }],
        ["and not a gram of you would be gone", 1390, 455, <W c={GOLD} s={26}>not a gram of you gone</W>],
        ["Ernst Mach argued", 1390, 525, <W c={VIOLET} s={24}>Mach: even inertia is a relation</W>],
        ["its relation to all the matter in the universe", 1390, 570, <W c={DIM} s={22}>with all the matter there is</W>],
        // Dogen
        ["Dogen would say the whole universe is exerted in this one heaviness", 960, 670,
          <W c={GOLD} s={30} serif>the whole universe exerted in this one heaviness</W>, { until: "The scale still reads seventy kilos" }],
        ["not as a floor holding it up", 960, 745,
          <SK c={DIM} s={24} strikeAt={c("not as a floor holding it up") + 0.8}>the universe as a floor beneath it</SK>, { until: "The scale still reads seventy kilos" }],
        ["The scale still reads seventy kilos", 960, 680, <W c={GOLD} s={38} serif>the scale still reads 70 kg</W>, { d: 0.3 }],
        ["Only a heaviness sitting in the body, on its own, is denied", 960, 760, <W c={CHALK} s={28}>denied: only a heaviness on its own</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const LightScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("Once dependent arising is seen, this lightness spreads");
  const mm = c("Mind or matter, subjective or objective");
  const none = c("because nothing was ever inside it to be heavy");
  const light = ramp(t, c("Things become light"), 1.4);
  const plastic = ramp(t, c("magical and plastic"), 0.8);
  const bob = (ph: number) => -40 * light + Math.sin(t * 1.3 + ph) * 10 * light;
  const morph = (ph: number) => 1 + 0.06 * plastic * Math.sin(t * 2.1 + ph);
  return (
    <AbsoluteFill>
      <Title at={st}>the lightness spreads</Title>
      <At x={640} y={330 + bob(0)} s={pop(t, fps, mm) * morph(0)} o={ramp(t, mm, 0.4)}>
        <div style={{ filter: `drop-shadow(0 0 ${18 * light}px ${GOLD})` }}><Thought color={VIOLET} /></div>
      </At>
      <At x={1280} y={330 + bob(1.7)} s={pop(t, fps, mm + 0.8) * morph(1.7)} o={ramp(t, mm + 0.8, 0.4)}>
        <div style={{ filter: `drop-shadow(0 0 ${18 * light}px ${GOLD})` }}><Cup color={ICE} size={170} /></div>
      </At>
      <Items items={[
        ["Mind or matter, subjective or objective", 640, 470, <K c={VIOLET} s={26}>mind · subjective</K>, { d: 0.3 }],
        ["Mind or matter, subjective or objective", 1280, 470, <K c={ICE} s={26}>matter · objective</K>, { d: 1.1 }],
        ["each loses its weight and its fixed identity", 640, 545, <SK c={DIM} s={24} strikeAt={none + 0.3}>its own weight</SK>],
        ["each loses its weight and its fixed identity", 1280, 545, <SK c={DIM} s={24} strikeAt={none + 0.6}>a fixed identity</SK>, { d: 0.8 }],
        ["Not because anything is taken away", 960, 620, <W c={DIM} s={28}>nothing taken away</W>, { until: "because nothing was ever inside it to be heavy" }],
        ["because nothing was ever inside it to be heavy", 960, 620, <W c={TEAL} s={30}>nothing was ever inside it to be heavy</W>],
        ["magical and plastic", 960, 700, <W c={GOLD} s={42} serif>light: magical and plastic</W>],
        ["a display that works perfectly and holds nothing", 960, 780, <W c={CHALK} s={30}>a display that works perfectly and holds nothing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const grow = ramp(t, c("Plant a seed, with soil, water and warmth") + 0.6, 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("The koan is only the sharpest case")} y={90}>beyond the moment</Title>
      <Items items={[
        // the self
        ["When you are falsely accused", 520, 190, <K c={ICE} s={26}>the self</K>, { pop: true }],
        ["When you are falsely accused", 520, 300, <Person color={ICE} size={130} />, { d: 0.3 }],
        ["When you are falsely accused", 520, 400, <SK c={DIM} s={24} strikeAt={c("Yet the one who speaks, decides and answers is not denied") - 0.6}>an “I” standing behind</SK>, { d: 0.8 }],
        ["Yet the one who speaks, decides and answers is not denied", 520, 470, <W c={ICE} s={26}>yet one still speaks and answers</W>],
        // an object
        ["Hold a cube of ice", 1400, 190, <K c={ICE} s={26}>an object</K>, { pop: true }],
        ["Hold a cube of ice", 1400, 300, <IceCube size={90} spin={t * 20} />, { d: 0.3 }],
        ["It is not found in any of them", 1400, 400, <SK c={DIM} s={24} strikeAt={c("It is not found in any of them") + 0.6}>cold sitting in the ice</SK>],
        ["Yet the hand is still cold", 1400, 470, <W c={ICE} s={26}>yet the hand is still cold</W>],
        // a cause
        ["Plant a seed, with soil, water and warmth", 520, 560, <K c={GREEN} s={26}>a cause</K>, { pop: true }],
        ["Plant a seed, with soil, water and warmth", 520, 660, <Seed grow={grow} />, { d: 0.3 }],
        ["a shoot already packed inside the seed", 520, 750, <SK c={DIM} s={24} strikeAt={c("Because the seed is empty, it can grow")}>a shoot packed inside the seed</SK>],
        ["Because the seed is empty, it can grow", 520, 815, <W c={GREEN} s={26}>empty, so it can grow</W>, { d: 0.4 }],
        // the person
        ["The person you love is not negated", 1400, 560, <K c={ROSE} s={26}>the person</K>, { pop: true }],
        ["The person you love is not negated", 1400, 660, <Person color={ROSE} size={120} />, { d: 0.3 }],
        ["a core that would stay the same", 1400, 750, <SK c={DIM} s={24} strikeAt={c("The love is real") - 0.4}>a core that never changes</SK>],
        ["The love is real", 1400, 815, <W c={ROSE} s={26}>the love is real</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to a sound until it ends");
  const swing = 8 * Math.sin((t - b) * 5) * Math.exp(-Math.max(0, t - b) * 0.6) * (t > b ? 1 : 0);
  return (
    <AbsoluteFill>
      <Title at={c("So try it")} color={GOLD}>try it</Title>
      <Items items={[
        ["Listen to a sound until it ends", 960, 200, <W c={CHALK} s={32} serif>Does it arise, or does it cease?</W>, { d: 1.0 }],
      ]} />
      <At x={960} y={400} s={pop(t, fps, b - 0.3)}><Bell swing={swing} size={170} /></At>
      <Sound x={960} y={420} at={b + 0.4} dur={6} r1={460} />
      <Items items={[
        ["The sounding is not in doubt", 960, 610, <W c={ICE} s={30}>the sounding: not in doubt</W>],
        ["What is not found is a sound standing between its start and its end", 960, 690,
          <SK c={DIM} s={26} strikeAt={c("Let only that go")}>a sound standing between start and end</SK>],
        ["Let only that go", 960, 790, <W c={GOLD} s={38} serif>let only that go</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "This moment ceases as it arises"], ["web", "This is the second step of The Logic"],
    ["search", "made this the first step of the whole analysis"], ["doubt", "The author learned this the long way"],
    ["open", "Start with what the koan leaves alone"], ["sea", "With the logic of substance, there is a sound first"],
    ["web", "What is denied is one thing"], ["doubt", "There are two ways to fall short"],
    ["doubt", "The opposite mistake is quieter"], ["vivid", "Yet a harsh word still hurts"],
    ["whole", "When own-nature is negated, nothing is put in its place"], ["vivid", "Presence was never the target"],
    ["search", "the logic of substance is not about matter"], ["web", "We taste luminous clarity, and we invent a Witness"],
    ["sea", "The author met all three on his own path"], ["vivid", "Stand on a scale"],
    ["whole", "Once dependent arising is seen, this lightness spreads"], ["vivid", "The koan is only the sharpest case"],
    ["whole", "So try it"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["This moment ceases as it arises", <KoanScene />],
    ["This is the second step of The Logic", <AimScene />],
    ["made this the first step of the whole analysis", <FindScene />],
    ["The author learned this the long way", <NegatingScene />],
    ["Start with what the koan leaves alone", <BellScene />],
    ["With the logic of substance, there is a sound first", <BothWaysScene />],
    ["What is denied is one thing", <OwnNatureScene />],
    ["There are two ways to fall short", <TheoriesScene />],
    ["The second is to negate the self", <GroundScene />],
    ["The opposite mistake is quieter", <TooMuchScene />],
    ["Yet a harsh word still hurts", <WorksScene />],
    ["When own-nature is negated, nothing is put in its place", <RemainsScene />],
    ["Presence was never the target", <PresenceScene />],
    ["the logic of substance is not about matter", <SomethingScene />],
    ["We taste luminous clarity, and we invent a Witness", <TastesScene />],
    ["The author met all three on his own path", <InsideScene />],
    ["Stand on a scale", <WeightScene />],
    ["Once dependent arising is seen, this lightness spreads", <LightScene />],
    ["The koan is only the sharpest case", <BeyondScene />],
    ["So try it", <TryScene />],
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
