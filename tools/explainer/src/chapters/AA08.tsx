// After Anatta 8: The Four Questions (The Logic, Step 8). Explainer drawings timed to the narration.
// Arc: the koan once more -> Steps 1 to 7 gathered into four questions -> the koan's method made portable ->
// a test, not a conclusion: a checklist against a habit that retreats -> the four, numbered ->
// 1 substance: find the "it" (and ask it of the one asking: the Witness) -> 2 dependency: causes, parts, designation,
// then the bell and the moment picked out with arising and ceasing -> 3 convention: bell, clock, fruit kept; the caution
// and its three sources -> 4 never found: the own-nature named, the nihilist trap; what is put in its place struck,
// the eternalist trap; emptiness is no backdrop -> the four run on the koan: the bell still rings -> the wrong way:
// questions that swap one thing for another -> the Middle Way examines the frame -> self, cup, cause, home ->
// try it with a glass -> the koan, one last time.
// Stance: emptiness is drawn only as the not-finding, never as a ground, container or backdrop; "a backdrop" appears
// only to be struck. Each invented "it", the Witness, a timeless Now, an awareness behind, a pure flow and "nothing
// happens" are shown only to be struck. The bell, clock, fruit, cup, words, house and grief stay vivid and affirmed.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan, and the last step
  "Here is the koan once more", "This moment ceases as it arises", "Does it arise, or does it cease",
  "This is the eighth and last step of The Logic", "Each step came back to the koan from one side",
  "gathers Steps one to seven into four questions",
  // the method, made portable
  "The four questions are the koan's method, made portable", "The koan does not answer its question",
  "It looks at what the question takes for granted", "and the question falls away",
  "a self, a moment, a cause, a death, a world",
  // a test, not a conclusion
  "They are a test, not a conclusion", "the logic of substance is a habit, not a belief", "like a pilot's checklist",
  "the questions are done, not remembered", "Nothing has own-nature can be agreed with in a second",
  "that this thing is simply there on its own", "to a timeless Now, or to awareness", "So the questions are made to be run again",
  // the four
  "The four are these", "What would a substance view say", "What does dependency say instead",
  "What is affirmed conventionally", "What is never found",
  // 1 substance
  "The first question", "There is a moment, and arising and ceasing are what happen to it",
  "what is being taken as standing on its own", "what here feels simply there, by itself",
  "In the koan, it is the word it",
  "And it has to be asked of the one asking", "but something watches them",
  "I asked this question of everything except the Witness",
  // 2 dependency
  "The second question", "Look for the thing apart from what it depends on",
  "a sprout depends on a seed, water and warmth", "a chariot depends on its wheels and axle",
  "as long depends on short, and knower on known",
  "the sound of a bell depends on the striking", "the moment depends on designation",
  "is picked out together with its arising and its ceasing", "Look for the moment apart from them, and it is not found",
  "there is no one thing for them to belong to", "So the answer is not it is all connected",
  "is a plain description, not a paradox",
  // 3 convention
  "The third question", "This question protects the world", "In the koan, everything is kept",
  "when the bell was struck, and when the ringing ended", "Clocks keep time", "Actions bear fruit",
  "There is a caution here", "Removing a bad argument against something is not a good argument for it",
  "ordinary knowing, the tradition, and evidence", "is the tradition, and the author says so",
  "He does not derive rebirth from emptiness",
  // 4 never found
  "The fourth question", "a moment with a nature of its own", "Naming it keeps the result from blurring into nothing happens",
  "That is the nihilist trap", "A sound is being heard right now",
  "Then check what has been put in its place", "A timeless Now in which the moments pass", "An awareness behind them that stays",
  "A pure flow", "Each keeps the it, and moves it somewhere else", "That is the eternalist trap, and it goes back to question one",
  "It is not a backdrop the moments flash against",
  "the medicine would have become a new illness",
  // the four, run on the koan
  "Ask what arises, and the koan is a paradox", "Run the four questions, and no it is found", "nothing is put in its place",
  "and the bell still rings",
  // the wrong way, and the alternative
  "Yet we usually go about it the wrong way",
  "Does the self exist or not", "What happens to me when I die", "Each question already assumes a thing with its own nature",
  "the self for a Witness, the Witness for pure Awareness, a thing for nothing",
  "What feels like logic is a habit that has never been checked",
  "Nagarjuna's Middle Way gives an alternative", "Not a better answer in the same frame", "a way to examine the frame itself",
  "until it undoes itself", "The view lets us question the question",
  // beyond the moment
  "The same logic works beyond the moment", "I am the one who decides", "only the deciding is found",
  "Yet the one who decided is responsible", "A cup: look for it apart from clay, shape, maker and use", "Yet it holds tea",
  "Your words made me angry", "No power to anger sits inside the words", "Yet the words can be apologised for",
  "a family leaving the house of twenty years", "Home is named on a house", "The grief stays",
  "What loosens is the sense that something solid is being torn away",
  // try it, and the koan one last time
  "So, try it", "Tap a glass, and listen until the sound ends",
  "What does the substance view say about this sound", "How is it picked out", "What is still true of it", "What was not found",
  "Has a Now or an awareness slipped in",
  "Run them on your own weight", "the weight is in me", "it is picked out with the earth's pull", "the floor and the scale",
  "the number is true", "the knees still ache after the stairs", "never found is a heaviness sitting in the body on its own",
  "has not slipped in as a new floor",
  "Run them slowly, in what is in front of you", "Nothing needs to be held", "What appears goes on appearing",
  "And the koan, one last time", "The question has nothing to hold on to", "And the sound is no less clear",
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


/** A whirlpool: water turning, with a leaf carried round. */
const Whirlpool: React.FC<{ at: number; leaf?: number }> = ({ at, leaf = 0 }) => {
  const { t } = useT();
  const rot = (t - at) * 60;
  const a = ((t - at) * 1.6) % (Math.PI * 2);
  const r = 70 + 20 * Math.sin(t * 0.9);
  return (
    <div style={{ position: "relative", width: 360, height: 240 }}>
      <svg width={360} height={240} viewBox="-180 -120 360 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE}88)` }}>
        <g transform={`rotate(${rot})`}>
          {[0, 1, 2, 3].map(i => (
            <path key={i} d={`M ${30 + i * 30} 0 A ${30 + i * 30} ${(30 + i * 30) * 0.55} 0 1 1 ${-(20 + i * 30)} ${8 + i * 4}`}
              fill="none" stroke={ICE} strokeOpacity={0.9 - i * 0.18} strokeWidth={4} strokeLinecap="round" />
          ))}
        </g>
      </svg>
      <div style={{ position: "absolute", left: 180 + r * Math.cos(a) - 14, top: 120 + r * 0.55 * Math.sin(a) - 8, opacity: leaf,
        width: 28, height: 16, borderRadius: "50% 0", background: `${GREEN}aa`, border: `2px solid ${GREEN}`, transform: `rotate(${a * 57}deg)` }} />
    </div>
  );
};

// ---------------------------------------------------------------- new drawings for this step
/** A seed and its sprout, joined: a cause. */
const SeedSprout: React.FC<{ grow: number }> = ({ grow }) => (
  <svg width={200} height={130} viewBox="0 0 200 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <ellipse cx={40} cy={100} rx={22} ry={14} fill="#b07a4566" stroke="#c99060" strokeWidth={4} />
    <path d={`M150 118 L150 ${118 - 70 * grow}`} stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
    <path d={`M150 ${118 - 50 * grow} Q122 ${100 - 60 * grow} 132 ${110 - 70 * grow} Q146 ${108 - 52 * grow} 150 ${118 - 50 * grow} Z`}
      fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={grow} />
    <path d="M66 100 Q100 76 136 100" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="6 5" opacity={grow} />
  </svg>
);

/** A chariot wheel with spokes: parts. */
const Wheel: React.FC<{ color?: string; size?: number; spin?: number }> = ({ color = WARM, size = 150, spin = 0 }) => (
  <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle r={52} fill="none" stroke={color} strokeWidth={6} />
    <circle r={10} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <g transform={`rotate(${spin})`}>
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={10} x2={0} y2={50} stroke={color} strokeWidth={4} transform={`rotate(${i * 45})`} />)}
    </g>
    <line x1={-72} y1={0} x2={72} y2={0} stroke={CHALK} strokeWidth={5} strokeLinecap="round" opacity={0.7} />
  </svg>
);

/** A long bar and a short bar: each named only against the other. */
const LongShort: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
    <div style={{ width: 220, height: 18, borderRadius: 9, background: `${color}55`, border: `3px solid ${color}`, boxShadow: `0 0 12px ${color}77` }} />
    <div style={{ width: 90, height: 18, borderRadius: 9, background: `${color}55`, border: `3px solid ${color}`, boxShadow: `0 0 12px ${color}77` }} />
  </div>
);

/** A drinking glass, tapped. */
const Glass: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 70 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
    <path d="M10 6 L60 6 L54 92 Q35 98 16 92 Z" fill={`${color}1c`} stroke={color} strokeWidth={3.5} strokeLinejoin="round" />
    <path d="M14 40 L56 40" stroke={color} strokeWidth={2} opacity={0.6} />
    <path d="M20 16 L18 80" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity={0.35} />
  </svg>
);

/** A house with a lit window. */
const House: React.FC<{ color?: string; lit?: number }> = ({ color = ROSE, lit = 1 }) => (
  <svg width={170} height={150} viewBox="0 0 170 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M10 70 L85 10 L160 70" fill="none" stroke={color} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
    <rect x={28} y={62} width={114} height={82} fill={`${color}18`} stroke={color} strokeWidth={5} />
    <rect x={44} y={80} width={30} height={26} fill={`${GOLD}${lit > 0.5 ? "aa" : "22"}`} stroke={GOLD} strokeWidth={3} />
    <rect x={96} y={96} width={28} height={48} fill={`${color}33`} stroke={color} strokeWidth={4} />
  </svg>
);

/** A checklist with ticks drawn in one by one (p: 0..1). */
const Checklist: React.FC<{ p: number; color?: string }> = ({ p, color = TEAL }) => (
  <svg width={220} height={240} viewBox="0 0 220 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={10} y={10} width={200} height={220} rx={16} fill={`${color}12`} stroke={color} strokeWidth={4} />
    {[0, 1, 2, 3].map(i => (
      <g key={i}>
        <rect x={34} y={40 + i * 46} width={26} height={26} rx={5} fill="none" stroke={color} strokeWidth={3} />
        <path d={`M38 ${54 + i * 46} L46 ${62 + i * 46} L58 ${44 + i * 46}`} fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round"
          opacity={p * 4 > i ? 1 : 0} />
        <line x1={76} y1={53 + i * 46} x2={186} y2={53 + i * 46} stroke={CHALK} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
      </g>
    ))}
  </svg>
);

const swingOf = (t: number, at: number) => 8 * Math.sin((t - at) * 5) * Math.exp(-Math.max(0, t - at) * 0.6) * (t > at ? 1 : 0);

const Q4: [string, string, string][] = [
  ["What would a substance view say", "substance", WARM],
  ["What does dependency say instead", "dependency", TEAL],
  ["What is affirmed conventionally", "convention", GOLD],
  ["What is never found", "not found", VIOLET],
];

/** The heading of each question's scene: its number and its words. */
const QHead: React.FC<{ i: number; at: number; text: string }> = ({ i, at, text }) => {
  const { t, fps } = useT();
  return (
    <At x={960} y={120} s={pop(t, fps, at)} o={ramp(t, at, 0.4)}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Num n={String(i + 1)} color={Q4[i][2]} lit={1} /><Glow color={Q4[i][2]} size={40} serif>{text}</Glow>
      </div>
    </At>
  );
};

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Here is the koan once more")} color={DIM} size={34}>the koan, once more</Title>
      <At x={960} y={330} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={66} speed={0.035} />
      </At>
      <At x={960} y={470} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={66} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
    </AbsoluteFill>
  );
};

const GatherScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("This is the eighth and last step of The Logic");
  const each = c("Each step came back to the koan from one side");
  const g = c("gathers Steps one to seven into four questions");
  const gather = ramp(t, g + 0.6, 1.4);
  const ring = (i: number) => {
    const a = -Math.PI / 2 + (i / 7) * Math.PI * 2;
    return [960 + 330 * Math.cos(a), 470 + 230 * Math.sin(a)];
  };
  const target = (i: number) => [600 + (i % 4) * 240, 470];
  return (
    <AbsoluteFill>
      <Title at={st}>The Logic · Step 8, the last</Title>
      <Items items={[
        ["This is the eighth and last step of The Logic", 960, 190, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.2 }],
        ["Each step came back to the koan from one side", 960, 470, <K c={ICE} s={28}>the koan</K>, { pop: true, until: "gathers Steps one to seven into four questions", ud: 0.4 }],
      ]} />
      {Array.from({ length: 7 }).map((_, i) => {
        const [x0, y0] = ring(i);
        const [x1, y1] = target(i);
        const show = ramp(t, each + 0.3 + i * 0.2, 0.4);
        return (
          <At key={i} x={x0 + (x1 - x0) * gather} y={y0 + (y1 - y0) * gather} o={show * (i < 4 ? 1 : 1 - gather)}>
            <Num n={String(i + 1)} color={DIM} lit={0} />
          </At>
        );
      })}
      {Q4.map(([, w, col], i) => (
        <At key={w} x={600 + i * 240} y={470} o={ramp(t, g + 1.8 + i * 0.25, 0.4)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <Num n={String(i + 1)} color={col} lit={1} /><Glow color={col} size={26}>{w}</Glow>
          </div>
        </At>
      ))}
      <At x={960} y={680} o={ramp(t, g + 2.6, 0.5)}><W c={GOLD} s={34} serif>seven steps, four questions</W></At>
    </AbsoluteFill>
  );
};

const PortableScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const port = c("The four questions are the koan's method, made portable");
  const look = c("It looks at what the question takes for granted");
  const falls = ramp(t, c("and the question falls away"), 1.2);
  const any = c("a self, a moment, a cause, a death, a world");
  const T = ["a self", "a moment", "a cause", "a death", "a world"];
  return (
    <AbsoluteFill>
      <Title at={port}>the koan's method, made portable</Title>
      <Items items={[
        ["The koan does not answer its question", 960, 230, <W c={DIM} s={28}>it does not answer</W>],
      ]} />
      <At x={960} y={340 + 80 * falls} o={ramp(t, look - 0.6, 0.4) * (1 - falls)}><W c={ICE} s={40} serif>arise, or cease?</W></At>
      <At x={960} y={420} s={pop(t, fps, look + 0.6)} o={ramp(t, look + 0.6, 0.3)}><K c={WARM} s={30}>what it takes for granted: “it”</K></At>
      {T.map((w, i) => (
        <At key={w} x={400 + i * 280} y={620} s={pop(t, fps, any + i * 0.45)}><K c={TEAL} s={28}>{w}</K></At>
      ))}
      <At x={960} y={730} o={ramp(t, any + 2.6, 0.5)}><W c={GOLD} s={30} serif>the same four questions, for any question</W></At>
    </AbsoluteFill>
  );
};

const TestScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const chk = c("like a pilot's checklist");
  const retreat = c("to a timeless Now, or to awareness");
  return (
    <AbsoluteFill>
      <Title at={c("They are a test, not a conclusion")} color={TEAL}>a test, not a conclusion</Title>
      <Items items={[
        ["the logic of substance is a habit, not a belief", 960, 210, <W c={WARM} s={32} serif>a habit, not a belief</W>],
        ["like a pilot's checklist", 480, 450, <Checklist p={ramp(t, chk + 0.6, 2.4)} />, { pop: true }],
        ["the questions are done, not remembered", 480, 640, <W c={TEAL} s={30}>done, not remembered</W>],
        ["Nothing has own-nature can be agreed with in a second", 1380, 330, <K c={DIM} s={28}>“nothing has own-nature”</K>],
        ["Nothing has own-nature can be agreed with in a second", 1380, 410, <W c={DIM} s={26}>agreed in a second; nothing changes</W>, { d: 1.6 }],
        ["that this thing is simply there on its own", 1380, 500, <W c={WARM} s={28}>the felt sense: “simply there”</W>],
        ["to a timeless Now, or to awareness", 1250, 600, <SK c={DIM} s={24} strikeAt={retreat + 1.6}>a timeless Now</SK>],
        ["to a timeless Now, or to awareness", 1530, 600, <SK c={DIM} s={24} strikeAt={retreat + 1.8}>awareness as a thing</SK>, { d: 0.5 }],
        ["So the questions are made to be run again", 960, 760, <W c={GOLD} s={32} serif>run them again, wherever the habit works</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FourScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const Q: string[] = ["what would a substance view say?", "what does dependency say instead?", "what is affirmed conventionally?", "what is never found?"];
  return (
    <AbsoluteFill>
      <Title at={c("The four are these")}>the four questions</Title>
      {Q4.map(([cue, , col], i) => (
        <At key={i} x={960} y={270 + i * 130} s={pop(t, fps, c(cue))} o={ramp(t, c(cue), 0.3)}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}><Num n={String(i + 1)} color={col} lit={1} /><K c={col} s={32}>{Q[i]}</K></div>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const Q1Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const there = c("There is a moment, and arising and ceasing are what happen to it");
  const word = c("In the koan, it is the word it");
  const solid = ramp(t, there, 0.6);
  return (
    <AbsoluteFill>
      <QHead i={0} at={c("The first question")} text="what would a substance view say?" />
      <Items items={[
        ["The first question", 960, 210, <W c={DIM} s={28}>state it fairly, as the habit runs it</W>, { d: 1.6 }],
      ]} />
      <At x={960} y={380} s={pop(t, fps, there)}>
        <div style={{ width: 200, height: 120, borderRadius: 14, background: `${WARM}${solid > 0.5 ? "44" : "11"}`, border: `4px solid ${WARM}`,
          boxShadow: `0 0 ${16 + 26 * solid}px ${WARM}88`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <W c={CHALK} s={30}>moment</W>
        </div>
      </At>
      <Items items={[
        ["There is a moment, and arising and ceasing are what happen to it", 680, 380, <W c={GREEN} s={28}>arising →</W>, { d: 1.2 }],
        ["There is a moment, and arising and ceasing are what happen to it", 1240, 380, <W c={ROSE} s={28}>→ ceasing</W>, { d: 1.6 }],
        ["There is a moment, and arising and ceasing are what happen to it", 960, 500, <W c={WARM} s={28}>so it must do one or the other</W>, { d: 3.0 }],
        ["what is being taken as standing on its own", 960, 590, <W c={CHALK} s={28}>find what is taken as standing on its own</W>],
        ["what here feels simply there, by itself", 960, 660, <W c={GOLD} s={32} serif>what here feels simply there, by itself?</W>],
        ["In the koan, it is the word it", 960, 760, <K c={WARM} s={40}>“it”</K>, { pop: true }],
      ]} />
      <At x={960} y={760} o={ramp(t, word + 0.6, 0.6)} s={1 + 0.04 * Math.sin(t * 3)}>
        <div style={{ width: 150, height: 90, borderRadius: 45, border: `3px solid ${WARM}`, boxShadow: `0 0 26px ${WARM}` }} />
      </At>
    </AbsoluteFill>
  );
};

const WitnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ask = c("And it has to be asked of the one asking");
  const w = c("but something watches them");
  const q = c("I asked this question of everything except the Witness");
  const M3 = ["thoughts", "body", "world"];
  return (
    <AbsoluteFill>
      <Title at={ask}>asked of the one asking</Title>
      {M3.map((m, i) => (
        <At key={m} x={1180 + i * 200} y={360} o={ramp(t, ask + 0.6 + i * 0.3, 0.4)}>
          <div style={{ position: "relative" }}><K c={ICE} s={26}>{m}</K></div>
        </At>
      ))}
      <At x={1380} y={450} o={ramp(t, ask + 1.6, 0.4)}><W c={DIM} s={24}>set aside as seen</W></At>
      <At x={600} y={380} s={pop(t, fps, w)}><Eye color={VIOLET} size={190} /></At>
      <Flow x1={720} y1={380} x2={1070} y2={370} color={VIOLET} p={ramp(t, w + 0.5, 0.6)} pulses={false} />
      <At x={600} y={500} o={ramp(t, w + 0.4, 0.4)}><SK c={VIOLET} s={28} strikeAt={q + 3.6}>the Witness</SK></At>
      <Items items={[
        ["I asked this question of everything except the Witness", 960, 660,
          <W c={GOLD} s={32} serif>“I asked this question of everything except the Witness.”</W>],
        ["I asked this question of everything except the Witness", 600, 570, <W c={WARM} s={24}>never put through the test</W>, { d: 2.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const Q2Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sprout = c("a sprout depends on a seed, water and warmth");
  const chariot = c("a chariot depends on its wheels and axle");
  const des = c("as long depends on short, and knower on known");
  return (
    <AbsoluteFill>
      <QHead i={1} at={c("The second question")} text="what does dependency say instead?" />
      <Items items={[
        ["Look for the thing apart from what it depends on", 960, 220, <W c={GOLD} s={32} serif>look for the thing apart from what it depends on</W>],
        ["Look for the thing apart from what it depends on", 960, 290, <W c={DIM} s={26}>three kinds of dependence</W>, { d: 2.0 }],
      ]} />
      <At x={460} y={360} s={pop(t, fps, sprout)}><K c={GREEN} s={30}>causes</K></At>
      <At x={460} y={510} s={pop(t, fps, sprout + 0.3)}><SeedSprout grow={ramp(t, sprout + 0.8, 1.4)} /></At>
      <At x={460} y={640} o={ramp(t, sprout + 1.0, 0.4)}><W c={GREEN} s={24}>seed, water, warmth</W></At>
      <At x={960} y={360} s={pop(t, fps, chariot)}><K c={WARM} s={30}>parts</K></At>
      <At x={960} y={510} s={pop(t, fps, chariot + 0.3)}><Wheel spin={(t - chariot) * 40} /></At>
      <At x={960} y={640} o={ramp(t, chariot + 1.0, 0.4)}><W c={WARM} s={24}>wheels and axle</W></At>
      <At x={1460} y={360} s={pop(t, fps, des)}><K c={TEAL} s={30}>designation</K></At>
      <At x={1460} y={500} s={pop(t, fps, des + 0.3)}><LongShort /></At>
      <At x={1460} y={640} o={ramp(t, des + 1.0, 0.4)}><W c={TEAL} s={24}>long and short · knower and known</W></At>
    </AbsoluteFill>
  );
};

const Q2KoanScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("the sound of a bell depends on the striking");
  const des = c("the moment depends on designation");
  const tog = c("is picked out together with its arising and its ceasing");
  const nf = c("Look for the moment apart from them, and it is not found");
  const S = ["striking", "air", "ear", "attention"];
  return (
    <AbsoluteFill>
      <Title at={b} color={TEAL}>in the koan</Title>
      <At x={420} y={340} s={pop(t, fps, b - 0.3)}><Bell size={130} swing={swingOf(t, b)} /></At>
      <Sound x={420} y={350} at={b + 0.3} dur={4} r1={200} />
      {S.map((w, i) => (
        <At key={w} x={420} y={480 + i * 62} o={ramp(t, b + 0.5 + i * 0.4, 0.4)}><K c={ICE} s={22}>{w}</K></At>
      ))}
      <At x={1200} y={290} s={pop(t, fps, tog)}><K c={GREEN} s={30}>arising</K></At>
      <At x={1600} y={290} s={pop(t, fps, tog + 0.4)}><K c={ROSE} s={30}>ceasing</K></At>
      <At x={1400} y={400} s={pop(t, fps, des)}><K c={GOLD} s={32}>this moment</K></At>
      <Svg>
        <DrawPath d="M1270 320 Q1330 370 1350 380" p={ramp(t, tog + 0.8, 0.5)} color={TEAL} width={3} len={200} />
        <DrawPath d="M1530 320 Q1470 370 1450 380" p={ramp(t, tog + 1.0, 0.5)} color={TEAL} width={3} len={200} />
      </Svg>
      <Items items={[
        ["the moment depends on designation", 1400, 200, <W c={TEAL} s={28}>most of all: designation</W>],
        ["Look for the moment apart from them, and it is not found", 1400, 500, <SK c={DIM} s={24} strikeAt={nf + 1.4}>a moment apart from them</SK>],
        ["there is no one thing for them to belong to", 1400, 570, <SK c={DIM} s={24} strikeAt={c("there is no one thing for them to belong to") + 1.4}>one thing they belong to</SK>],
        ["So the answer is not it is all connected", 1400, 650, <SK c={DIM} s={24} strikeAt={c("So the answer is not it is all connected") + 2.6}>“it is all connected”</SK>],
        ["So the answer is not it is all connected", 1400, 710, <W c={DIM} s={22}>a new floor</W>, { d: 2.2 }],
        ["is a plain description, not a paradox", 960, 800, <W c={GOLD} s={34} serif>“ceases as it arises”: a plain description</W>],
      ]} />
    </AbsoluteFill>
  );
};

const Q3Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("when the bell was struck, and when the ringing ended");
  return (
    <AbsoluteFill>
      <QHead i={2} at={c("The third question")} text="what is affirmed conventionally?" />
      <Items items={[
        ["This question protects the world", 960, 210, <W c={GOLD} s={30} serif>this question protects the world</W>],
        ["In the koan, everything is kept", 960, 280, <W c={CHALK} s={28}>everything is kept</W>],
      ]} />
      <At x={520} y={450} s={pop(t, fps, st - 0.2)}><Bell size={150} swing={swingOf(t, st)} /></At>
      <Sound x={520} y={460} at={st + 0.2} dur={2.4} r1={220} />
      <Items items={[
        ["when the bell was struck, and when the ringing ended", 520, 620, <W c={GOLD} s={26}>struck · ended</W>, { d: 0.8 }],
        ["Clocks keep time", 960, 450, <Clock />, { pop: true }],
        ["Clocks keep time", 960, 620, <W c={ICE} s={26}>clocks keep time</W>, { d: 0.4 }],
        ["Actions bear fruit", 1400, 440, <Fruit />, { pop: true }],
        ["Actions bear fruit", 1400, 620, <W c={GREEN} s={26}>actions bear fruit</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const src = c("ordinary knowing, the tradition, and evidence");
  const S: [string, string, string][] = [["ordinary knowing", GOLD, "a clock keeps time"], ["the tradition", VIOLET, "fruit beyond this life"], ["evidence", TEAL, ""]];
  return (
    <AbsoluteFill>
      <Title at={c("There is a caution here")} color={WARM}>a caution</Title>
      <Items items={[
        ["Removing a bad argument against something is not a good argument for it", 960, 230,
          <W c={CHALK} s={30} serif>removing a bad argument against ≠ a good argument for</W>],
      ]} />
      {S.map(([w, col, ex], i) => (
        <React.Fragment key={w}>
          <At x={520 + i * 440} y={420} s={pop(t, fps, src + i * 0.6)}><K c={col} s={30}>{w}</K></At>
          {ex ? <At x={520 + i * 440} y={500} o={ramp(t, i ? c("is the tradition, and the author says so") : src + 2.4, 0.5)}><W c={DIM} s={24}>{ex}</W></At> : null}
        </React.Fragment>
      ))}
      <Items items={[
        ["He does not derive rebirth from emptiness", 960, 660, <W c={GOLD} s={32} serif>rebirth: from the tradition, not derived from emptiness</W>],
      ]} />
    </AbsoluteFill>
  );
};

const Q4Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const m = c("a moment with a nature of its own");
  const nh = c("Naming it keeps the result from blurring into nothing happens");
  const snd = c("A sound is being heard right now");
  return (
    <AbsoluteFill>
      <QHead i={3} at={c("The fourth question")} text="what is never found?" />
      <Items items={[
        ["a moment with a nature of its own", 620, 320, <K c={GREEN} s={26}>arising</K>],
        ["a moment with a nature of its own", 1300, 320, <K c={ROSE} s={26}>ceasing</K>],
        ["a moment with a nature of its own", 960, 320, <SK c={WARM} s={28} strikeAt={m + 2.6}>a moment with its own nature</SK>, { d: 0.5 }],
        ["a moment with a nature of its own", 960, 400, <W c={VIOLET} s={28}>named plainly: never found</W>, { d: 3.0 }],
        ["Naming it keeps the result from blurring into nothing happens", 600, 540, <SK c={DIM} s={26} strikeAt={nh + 2.6}>“nothing happens”</SK>],
        ["That is the nihilist trap", 600, 620, <W c={WARM} s={26}>the nihilist trap</W>],
        ["A sound is being heard right now", 1320, 540, <Bell size={110} swing={swingOf(t, snd)} />, { pop: true }],
        ["A sound is being heard right now", 1320, 660, <W c={GOLD} s={28}>a sound is heard right now</W>, { d: 0.4 }],
      ]} />
      <Sound x={1320} y={550} at={snd + 0.3} dur={4} r1={180} />
    </AbsoluteFill>
  );
};

const PlaceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const each = c("Each keeps the it, and moves it somewhere else");
  const bd = c("It is not a backdrop the moments flash against");
  const P: [string, string, number][] = [
    ["A timeless Now in which the moments pass", "a timeless Now", 460],
    ["An awareness behind them that stays", "an awareness behind", 960],
    ["A pure flow", "a pure flow", 1460],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("Then check what has been put in its place")} color={VIOLET}>what was put in its place?</Title>
      {P.map(([cue, w, x], i) => (
        <React.Fragment key={w}>
          <At x={x} y={300} o={ramp(t, c(cue), 0.4)}><SK c={DIM} s={28} strikeAt={each + 1.4 + i * 0.3}>{w}</SK></At>
          <At x={x} y={380} o={ramp(t, each + 0.4, 0.4) * (1 - ramp(t, each + 1.4, 0.4))}><K c={WARM} s={24}>“it”</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Each keeps the it, and moves it somewhere else", 960, 460, <W c={WARM} s={28}>the “it”, moved somewhere else</W>, { d: 0.6 }],
        ["That is the eternalist trap, and it goes back to question one", 960, 530, <W c={WARM} s={26}>the eternalist trap: back to question 1</W>],
        ["It is not a backdrop the moments flash against", 960, 620, <W c={VIOLET} s={28}>emptiness, too</W>, { d: -0.8 }],
        ["It is not a backdrop the moments flash against", 960, 700, <SK c={DIM} s={26} strikeAt={bd + 1.6}>emptiness as a backdrop</SK>],
        ["the medicine would have become a new illness", 960, 790, <W c={GOLD} s={30} serif>the medicine must not become a new illness</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RunScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const run = c("Run the four questions, and no it is found");
  const rings = c("and the bell still rings");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Ask what arises, and the koan is a paradox", 960, 170, <W c={DIM} s={32}>ask what arises: a paradox</W>, { until: "Run the four questions, and no it is found" }],
      ]} />
      {Q4.map(([, w, col], i) => (
        <At key={w} x={480 + i * 320} y={300} o={ramp(t, run + i * 0.35, 0.3)}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Num n={String(i + 1)} color={col} lit={ramp(t, run + i * 0.35, 0.3)} /><Glow color={col} size={24}>{w}</Glow></div>
        </At>
      ))}
      <Items items={[
        ["Run the four questions, and no it is found", 620, 430, <SK c={DIM} s={26} strikeAt={run + 1.8}>“it”</SK>, { d: 1.2 }],
        ["nothing is put in its place", 1300, 430, <W c={VIOLET} s={26}>nothing put in its place</W>],
      ]} />
      <At x={960} y={560} s={pop(t, fps, rings - 0.2)}><Bell size={150} swing={swingOf(t, rings)} /></At>
      <Sound x={960} y={570} at={rings + 0.3} dur={6} r1={360} />
      <At x={960} y={740} o={ramp(t, rings + 0.6, 0.5)}><W c={GOLD} s={36} serif>and the bell still rings</W></At>
    </AbsoluteFill>
  );
};

const WrongScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sw = c("the self for a Witness, the Witness for pure Awareness, a thing for nothing");
  const chain: [number, string][] = [[0, "a self of its own"], [1, "a Witness"], [2, "pure Awareness"]];
  return (
    <AbsoluteFill>
      <Title at={c("Yet we usually go about it the wrong way")} color={WARM}>the wrong way</Title>
      <Items items={[
        ["Yet we usually go about it the wrong way", 960, 190, <W c={DIM} s={26}>answering, under the habit</W>, { d: 1.6 }],
        ["Does the self exist or not", 620, 290, <K c={ICE} s={28}>does the self exist or not?</K>, { pop: true }],
        ["What happens to me when I die", 1300, 290, <K c={ROSE} s={28}>what happens when I die?</K>, { pop: true }],
        ["Each question already assumes a thing with its own nature", 960, 380, <W c={WARM} s={28}>each assumes a thing with its own nature</W>],
      ]} />
      {chain.map(([i, w]) => (
        <At key={w} x={560 + i * 400} y={500} o={ramp(t, sw + i * 0.8, 0.4)}>
          <SK c={i ? DIM : WARM} s={26} strikeAt={c("What feels like logic is a habit that has never been checked") + 0.6 + i * 0.2}>{w}</SK>
        </At>
      ))}
      {[0, 1].map(i => <Flow key={i} x1={660 + i * 400} y1={500} x2={860 + i * 400} y2={500} color={DIM} p={ramp(t, sw + 0.5 + i * 0.8, 0.4)} pulses={false} />)}
      <Items items={[
        ["the self for a Witness, the Witness for pure Awareness, a thing for nothing", 960, 580, <W c={DIM} s={24}>one thing swapped for another</W>, { d: 2.6 }],
        ["What feels like logic is a habit that has never been checked", 960, 700, <W c={GOLD} s={32} serif>a habit never checked</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MiddleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fr = c("a way to examine the frame itself");
  const und = ramp(t, c("until it undoes itself"), 1.2);
  const qq = c("The view lets us question the question");
  return (
    <AbsoluteFill>
      <Title at={c("Nagarjuna's Middle Way gives an alternative")} color={TEAL}>an alternative</Title>
      <Items items={[
        ["Not a better answer in the same frame", 960, 220, <W c={DIM} s={28}>not a better answer in the same frame</W>],
      ]} />
      <At x={960} y={430} o={ramp(t, fr - 0.4, 0.4) * (1 - 0.7 * und)}>
        <div style={{ width: 620, height: 220, borderRadius: 20, border: `4px ${und > 0.5 ? "dashed" : "solid"} ${WARM}`, boxShadow: `0 0 24px ${WARM}55`,
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <W c={CHALK} s={30}>the question's frame: a thing, then what happens to it</W>
        </div>
      </At>
      <At x={1380} y={330} s={pop(t, fps, fr)}><Magnifier /></At>
      <Items items={[
        ["until it undoes itself", 960, 580, <W c={TEAL} s={28}>each answer followed to the end, until it undoes itself</W>],
        ["until it undoes itself", 960, 640, <W c={CHALK} s={28}>not answered: it falls away</W>, { d: 2.4 }],
      ]} />
      <At x={960} y={760} s={pop(t, fps, qq, 14)} o={ramp(t, qq, 0.5)}><W c={GOLD} s={44} serif>question the question</W></At>
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const Q: [string, number, number, string, string][] = [
    ["I am the one who decides", 500, 170, "the self", ICE],
    ["A cup: look for it apart from clay, shape, maker and use", 1420, 170, "an object", TEAL],
    ["Your words made me angry", 500, 500, "a cause", WARM],
    ["a family leaving the house of twenty years", 1420, 500, "the person", ROSE],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("The same logic works beyond the moment")} y={90} size={36}>beyond the moment</Title>
      {Q.map(([cue, x, y, w, col]) => (
        <At key={w} x={x} y={y} o={ramp(t, c(cue), 0.4)}><K c={col} s={28}>{w}</K></At>
      ))}
      <Items items={[
        ["I am the one who decides", 500, 240, <W c={ICE} s={28} serif>“I am the one who decides”</W>, { d: 0.3 }],
        ["only the deciding is found", 500, 305, <SK c={DIM} s={22} strikeAt={c("only the deciding is found") + 1.2}>a decider behind the deciding</SK>],
        ["Yet the one who decided is responsible", 500, 370, <W c={GOLD} s={24}>still responsible</W>],
        ["A cup: look for it apart from clay, shape, maker and use", 1300, 270, <Cup color={TEAL} size={120} />, { pop: true }],
        ["A cup: look for it apart from clay, shape, maker and use", 1520, 260, <W c={DIM} s={22}>clay · shape · maker · use</W>, { d: 1.0 }],
        ["Yet it holds tea", 1420, 370, <W c={GOLD} s={24}>it holds tea</W>],
        ["Your words made me angry", 500, 570, <W c={WARM} s={28} serif>“Your words made me angry”</W>, { d: 0.3 }],
        ["No power to anger sits inside the words", 500, 640, <SK c={DIM} s={22} strikeAt={c("No power to anger sits inside the words") + 1.4}>anger inside the words</SK>],
        ["Yet the words can be apologised for", 500, 710, <W c={GOLD} s={24}>an apology still answers</W>],
        ["a family leaving the house of twenty years", 1310, 620, <House />, { pop: true }],
        ["Home is named on a house", 1540, 590, <W c={DIM} s={22}>house · people · years</W>],
        ["Home is named on a house", 1540, 640, <SK c={DIM} s={22} strikeAt={c("Home is named on a house") + 2.2}>home in the bricks</SK>, { d: 0.8 }],
        ["The grief stays", 1420, 720, <W c={ROSE} s={26} serif>the grief stays</W>],
        ["What loosens is the sense that something solid is being torn away", 1420, 780, <W c={GOLD} s={22}>what loosens: something solid torn away</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tap = c("Tap a glass, and listen until the sound ends");
  const L: [string, string, string][] = [
    ["What does the substance view say about this sound", "1 · what does substance say?", WARM],
    ["How is it picked out", "2 · how is it picked out?", TEAL],
    ["What is still true of it", "3 · what is still true of it?", GOLD],
    ["What was not found", "4 · what was not found?", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("So, try it")} color={GOLD}>try it</Title>
      <At x={460} y={420} s={pop(t, fps, tap)}><Glass /></At>
      <Sound x={460} y={420} at={tap + 0.8} dur={3} color={ICE} r1={260} />
      <Items items={[
        ["What does the substance view say about this sound", 1260, 220, <W c={DIM} s={26}>one line for each question</W>, { d: -0.6 }],
        ...L.map(([cue, w, col], i) => [cue, 1260, 310 + i * 90, <K c={col} s={28}>{w}</K>, { pop: true }] as It),
        ["Has a Now or an awareness slipped in", 1260, 700, <W c={CHALK} s={28}>check the last line: a Now? an awareness?</W>],
      ]} />
    </AbsoluteFill>
  );
};

/** A bathroom scale with its number. */
const Scale: React.FC<{ lit: number }> = ({ lit }) => (
  <div style={{ width: 220, height: 60, borderRadius: 12, border: `4px solid ${ICE}`, background: `${ICE}18`, boxShadow: `0 0 16px ${ICE}66`,
    display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ fontFamily: SANS, fontSize: 28, color: lit > 0.5 ? GOLD : CHALK, padding: "2px 14px", borderRadius: 6, background: "#0008",
      boxShadow: lit > 0.5 ? `0 0 18px ${GOLD}` : undefined }}>70 kg</div>
  </div>
);

const WeightScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const run = c("Run them on your own weight");
  const two = c("it is picked out with the earth's pull");
  const three = c("the number is true");
  const four = c("never found is a heaviness sitting in the body on its own");
  const floor = c("has not slipped in as a new floor");
  const line = (i: number, at: number, node: React.ReactNode) => (
    <At x={1240} y={250 + i * 110} o={ramp(t, at, 0.4)} s={pop(t, fps, at)}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}><Num n={String(i + 1)} color={Q4[i][2]} lit={1} />{node}</div>
    </At>
  );
  return (
    <AbsoluteFill>
      <Title at={run} color={GOLD}>the four questions, on your own weight</Title>
      <At x={420} y={380} s={pop(t, fps, run + 0.3)}><Person color={CHALK} size={200} /></At>
      <At x={420} y={510} o={ramp(t, run + 0.3, 0.4)}><Scale lit={ramp(t, three, 0.3)} /></At>
      <Flow x1={420} y1={560} x2={420} y2={660} color={TEAL} p={ramp(t, two + 0.3, 0.6)} />
      <Items items={[
        ["it is picked out with the earth's pull", 420, 700, <W c={TEAL} s={24}>the earth's pull</W>, { d: 0.6 }],
        ["the knees still ache after the stairs", 420, 770, <W c={GOLD} s={24}>the knees still ache after the stairs</W>, { d: 0.3 }],
      ]} />
      {line(0, c("the weight is in me"), <K c={WARM} s={24}>the weight is in me</K>)}
      {line(1, two, <K c={TEAL} s={24}>picked out with the earth's pull, the floor, the scale</K>)}
      {line(2, three, <K c={GOLD} s={24}>the number is true; the knees still ache</K>)}
      {line(3, four, <SK c={DIM} s={24} strikeAt={four + 2.0}>a heaviness in the body, on its own</SK>)}
      <Items items={[
        ["has not slipped in as a new floor", 1240, 730, <SK c={DIM} s={26} strikeAt={floor + 1.2}>“the whole universe” as a new floor</SK>, { d: -0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const LastScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("And the koan, one last time");
  const nh = c("The question has nothing to hold on to");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Run them slowly, in what is in front of you", 960, 200, <W c={DIM} s={30}>slowly, in what is in front of you</W>, { until: "And the koan, one last time" }],
        ["Nothing needs to be held", 960, 330, <W c={CHALK} s={36} serif>nothing needs to be held</W>, { until: "And the koan, one last time" }],
        ["What appears goes on appearing", 960, 430, <W c={GOLD} s={36} serif>what appears goes on appearing</W>, { until: "And the koan, one last time" }],
      ]} />
      <At x={960} y={220} o={ramp(t, k + 0.6, 0.3) * (1 - ramp(t, nh, 0.6) * 0.5)}>
        <Reveal text="This moment ceases as it arises. Does it arise, or does it cease?" at={k + 1.0} size={44} speed={0.03} />
      </At>
      <At x={960} y={460} s={pop(t, fps, nh - 0.2)} o={ramp(t, nh - 0.2, 0.3)}><Bell size={160} swing={swingOf(t, nh)} /></At>
      <Sound x={960} y={480} at={nh + 0.3} dur={9} r1={480} />
      <Items items={[
        ["The question has nothing to hold on to", 960, 660, <W c={DIM} s={30}>nothing for the question to hold</W>],
        ["And the sound is no less clear", 960, 750, <W c={GOLD} s={40} serif>and the sound is no less clear</W>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "Here is the koan once more"], ["web", "This is the eighth and last step of The Logic"],
    ["sea", "The four questions are the koan's method, made portable"], ["doubt", "They are a test, not a conclusion"],
    ["whole", "The four are these"], ["doubt", "The first question"], ["search", "And it has to be asked of the one asking"],
    ["web", "The second question"], ["sea", "the sound of a bell depends on the striking"], ["vivid", "The third question"],
    ["search", "There is a caution here"], ["doubt", "The fourth question"], ["search", "Then check what has been put in its place"],
    ["vivid", "Ask what arises, and the koan is a paradox"], ["doubt", "Yet we usually go about it the wrong way"],
    ["web", "Nagarjuna's Middle Way gives an alternative"], ["vivid", "The same logic works beyond the moment"],
    ["whole", "So, try it"], ["sea", "Run them on your own weight"], ["open", "And the koan, one last time"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Here is the koan once more", <KoanScene />],
    ["This is the eighth and last step of The Logic", <GatherScene />],
    ["The four questions are the koan's method, made portable", <PortableScene />],
    ["They are a test, not a conclusion", <TestScene />],
    ["The four are these", <FourScene />],
    ["The first question", <Q1Scene />],
    ["And it has to be asked of the one asking", <WitnessScene />],
    ["The second question", <Q2Scene />],
    ["the sound of a bell depends on the striking", <Q2KoanScene />],
    ["The third question", <Q3Scene />],
    ["There is a caution here", <CautionScene />],
    ["The fourth question", <Q4Scene />],
    ["Then check what has been put in its place", <PlaceScene />],
    ["Ask what arises, and the koan is a paradox", <RunScene />],
    ["Yet we usually go about it the wrong way", <WrongScene />],
    ["Nagarjuna's Middle Way gives an alternative", <MiddleScene />],
    ["The same logic works beyond the moment", <BeyondScene />],
    ["So, try it", <TryScene />],
    ["Run them on your own weight", <WeightScene />],
    ["Run them slowly, in what is in front of you", <LastScene />],
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
