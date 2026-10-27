// After Anatta · A koan: Does It Arise or Cease? (The Logic, the koan page). Explainer drawings timed to the narration.
// Arc: the koan -> not a riddle: it hands us an "it" -> the page: substance, dependency, the five core logics ->
// what the koan points at: a bell, a car, the sound passing as it sounds -> the three marks; the koan removes the
// abiding -> substance: the moment as a thing, grammar taken for the world -> four answers, each failing (arises,
// ceases, both, neither) -> the verse: not apart, not together -> five ways out, each keeping the "it", each struck ->
// dependency: moment, arising and ceasing designated together -> a plain description; the question falls away ->
// nothing lost: sound, clock, firewood, lightning -> the five core logics, five hiding places (source, identity,
// present, marks, standing on its own) -> two answers: conventionally it arises and ceases; looked for, nothing found ->
// each moment complete: firewood and ash, a drawing on water -> the three insights -> why it matters: keep or lose ->
// try it: a sound, a thought -> the koan once more.
// Stance: emptiness is drawn only as the not-finding, never as a ground, container, producer or backdrop; "a thing
// behind the moment" and "a present that holds it" appear only to be struck. Each invented "it" (a timeless Now, an
// awareness behind, a pure flow, point instants, nothing happens, a self-standing abiding) is shown only to be struck.
// The bell, car, clock, firewood, lightning, breath and thought stay vivid and affirmed.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SERIF, Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan
  "This moment ceases as it arises", "Does it arise, or does it cease",
  "A koan is not a riddle with a clever answer", "built to catch the habit in the act",
  "the question has given us an it", "that must either arise or cease",
  // the page
  "This is the koan page of The Logic", "notes by John Tan, known as Thusness", "with the logic of substance",
  "then with the logic of dependency", "then through Nagarjuna's five core logics",
  // what it points at
  "First, what the koan points at", "Listen to a bell, or a car going by", "At no point is there a sound that stays",
  "The sound is already passing as it sounds", "The arising is already the ceasing",
  // the three marks
  "The ordinary picture is different", "Things arise, stay for a while, and then cease", "arising, abiding and ceasing",
  "The picture needs the middle one", "Only something that abides can be the it", "The koan quietly removes the abiding",
  "And then asks its question about the it anyway",
  // substance
  "The logic of substance starts with things", "So it takes this moment as a thing",
  "That is the grammar of the sentence, subject then verb", "taken for the shape of the world",
  // the four answers
  "Given a thing, the question must be answered", "There are four answers, and each one fails",
  "It arises", "so it is never there to have arisen", "that instant splits again, into what is gone and what is not yet",
  "It ceases", "But what passes away, if it never stood",
  "Both", "like light and dark", "They cannot belong to one thing at one time",
  "Neither", "Then nothing happens at all", "Yet a sound is being heard right now",
  // the verse
  "Nagarjuna puts the whole trap in one verse", "There is no passing away, either apart from coming into being", "or together with it",
  // the ways out
  "So the logic of substance looks for a way out", "Each way out keeps the it, and moves it somewhere else",
  "A timeless Now, in which the moments pass", "An awareness behind the moments, which stays", "A pure flow",
  "Point instants", "Or nothing happens", "keeps the it and declares it absent",
  "All five are the same logic, one step further on",
  // dependency
  "The logic of dependency starts somewhere else", "It asks how this moment is picked out at all",
  "A moment is designated in dependence on its arising and its ceasing", "Arising is designated against ceasing",
  "None comes first", "None is found apart from the others", "And there is no one thing for them to belong to",
  // a plain description
  "Then ceases as it arises is not a paradox", "It is a plain description",
  "There is no it standing between the arising and the ceasing", "the question is not answered", "It falls away",
  // nothing lost
  "Nothing is lost", "Sounds are still heard", "Clocks still keep time", "The firewood still burns",
  "Just as the flashing is the lightning", "the arising and ceasing is the moment",
  "There is change, vivid and exact, and no changer behind it",
  // the five core logics
  "Now the five core logics", "Each searches a different hiding place of the it",
  "One, the four corners: its source", "from itself, from another, from both, or from no cause", "Each fails",
  "Seen with dependency, the moment needs no source", "the moment before among them", "Nothing passes over, and nothing is missing",
  "Two, same or different: its identity", "If arising and ceasing are the same, nothing ever comes to be",
  "If different, something must stand between them", "Like fire and fuel, they are not one and not two",
  "Three, the three times: its present", "What has arisen is not arising", "What has not arisen is not arising",
  "And no now arising is found between them", "The moment is met, vividly, without a present that holds it",
  "Four, infinite regress: its marks", "If arising is a real event, it needs its own arising", "and that needs another, for ever",
  "Seen as a designation, there is no regress", "what is arising is at peace, and so is arising itself",
  "Five, mutual dependence: its standing on its own", "All four failed for one reason",
  "Each needed something established on its own first", "Dependent arising is what we call emptiness",
  "Emptiness is not a thing behind the moment", "It is how the moment is: dependent, and not found on its own",
  "Each logic lands in the same place", "No it is found, and the moment is still here",
  // two answers
  "So, does it arise or cease", "Two answers can be given, and they do not conflict", "Conventionally, it arises and ceases",
  "The sound starts and ends", "when the bell was struck, and when the ringing stopped", "Nothing in the analysis touches this",
  "Looked for, nothing that arises and nothing that ceases is found", "Nagarjuna opens his whole work this way",
  "without ceasing, without arising", "That is not a denial that things appear", "It is said of dependent arising itself",
  "Not two worlds, but one moment, seen two ways",
  // complete where it is
  "So the koan is not answered by choosing a corner", "It is answered when the it is seen never to have been there",
  "Then each moment is complete where it is", "Nothing carried over, nothing left behind",
  "says it of firewood and ash", "each with a before and an after, yet cut off from them",
  "A thought, seen as unfixed, releases as it arises", "like a drawing on water",
  // three insights
  "Three insights meet here", "The moment is vivid, and not found",
  "It appears when bell, air, ear and attention come together", "from no hidden place",
  "And the it is the habit at work", "carried in by the question",
  // why it matters
  "Why does it matter", "every experience is something to keep or to lose", "A clear moment must be held on to",
  "A painful one must be got rid of", "Craving and fear follow from the it",
  "there is nothing to keep, and nothing to lose", "This is not indifference",
  "The moment is met fully, because it is not being held on to",
  // try it
  "So, try it", "Listen to a single sound until it ends", "When did it arise", "When did it cease",
  "Look for a sound between the two, apart from the sounding", "Watch a thought come and go", "Ask where it went",
  "Then notice the question assumes a thought that went somewhere",
  // the koan once more
  "And the koan, once more", "Ask what arises, and it is a paradox", "See that no it is found",
  "and the koan is simply this moment",
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

const Num: React.FC<{ n: string; color: string; lit: number }> = ({ n, color, lit }) => (
  <div style={{ width: 54, height: 54, borderRadius: 27, border: `3px solid ${color}`, background: `${color}${lit > 0.5 ? "44" : "11"}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: CHALK,
    boxShadow: lit > 0.5 ? `0 0 20px ${color}` : undefined }}>{n}</div>
);

/** The solid "it" box the substance reading starts from. */
const ItBox: React.FC<{ solid: number; color?: string; label?: string; dashed?: boolean }> = ({ solid, color = WARM, label = "moment", dashed }) => (
  <div style={{ width: 200, height: 110, borderRadius: 14, background: `${color}${solid > 0.5 ? "44" : "11"}`,
    border: `4px ${dashed ? "dashed" : "solid"} ${color}`, boxShadow: `0 0 ${16 + 26 * solid}px ${color}88`,
    display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Glow color={CHALK} size={30}>{label}</Glow>
  </div>
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

/** A small car, side-on, with turning wheels. */
const Car: React.FC<{ color?: string; spin?: number }> = ({ color = TEAL, spin = 0 }) => (
  <svg width={220} height={110} viewBox="0 0 220 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
    <path d="M14 76 L20 52 Q26 44 40 44 L66 44 L88 18 Q94 12 104 12 L150 12 Q160 12 166 20 L184 44 L200 48 Q210 52 210 64 L210 76 Z"
      fill={`${color}2a`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M94 40 L106 22 L130 22 L130 40 Z M140 40 L140 22 L156 22 L170 40 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={3} />
    {[56, 166].map(cx => (
      <g key={cx} transform={`translate(${cx} 80)`}>
        <circle r={18} fill="#0b0c1a" stroke={CHALK} strokeWidth={4} />
        <line x1={-14} y1={0} x2={14} y2={0} stroke={CHALK} strokeWidth={3} transform={`rotate(${spin})`} />
        <line x1={0} y1={-14} x2={0} y2={14} stroke={CHALK} strokeWidth={3} transform={`rotate(${spin})`} />
      </g>
    ))}
  </svg>
);

/** A sound wave that is already fading as it is drawn: amplitude falls from left to right. */
const FadingWave: React.FC<{ p: number; color?: string; w?: number }> = ({ p, color = GOLD, w = 700 }) => {
  const { t } = useT();
  const pts: string[] = [];
  const n = 140;
  for (let i = 0; i <= n * p; i++) {
    const x = (i / n) * w;
    const amp = 70 * Math.exp(-3 * (i / n));
    pts.push(`${x.toFixed(1)},${(80 + amp * Math.sin(i * 0.7 - t * 6)).toFixed(1)}`);
  }
  return (
    <svg width={w} height={160} viewBox={`0 0 ${w} 160`} style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
      <polyline points={pts.join(" ")} fill="none" stroke={color} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
};

/** Burning logs with a flickering flame (fire = 1) or only grey ash (fire = 0). */
const Fire: React.FC<{ fire?: number; size?: number }> = ({ fire = 1, size = 180 }) => {
  const { t } = useT();
  const f = 1 + 0.08 * Math.sin(t * 9) + 0.05 * Math.sin(t * 13);
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${8 + 18 * fire}px ${WARM})` }}>
      <g opacity={fire} transform={`translate(90 130) scale(1 ${f}) translate(-90 -130)`}>
        <path d="M90 20 Q130 70 118 110 Q112 132 90 136 Q68 132 62 110 Q52 74 90 20 Z" fill={`${WARM}aa`} stroke={WARM} strokeWidth={4} />
        <path d="M90 66 Q110 96 102 118 Q96 128 90 128 Q82 128 78 118 Q72 96 90 66 Z" fill={`${GOLD}dd`} />
      </g>
      <rect x={30} y={136} width={120} height={20} rx={10} fill={fire > 0.5 ? "#8a5a2b" : "#6d6a66"} stroke={fire > 0.5 ? "#c99060" : DIM} strokeWidth={4}
        transform="rotate(-10 90 146)" />
      <rect x={30} y={136} width={120} height={20} rx={10} fill={fire > 0.5 ? "#7a4f26" : "#5f5c58"} stroke={fire > 0.5 ? "#c99060" : DIM} strokeWidth={4}
        transform="rotate(10 90 146)" />
    </svg>
  );
};

/** A pile of grey ash. */
const Ash: React.FC<{ size?: number }> = ({ size = 170 }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 170 85" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${DIM}88)` }}>
    <path d="M10 78 Q40 30 85 26 Q130 30 160 78 Z" fill={`${DIM}55`} stroke={DIM} strokeWidth={4} />
    {[[50, 60], [80, 46], [112, 58], [96, 70], [64, 72]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={CHALK} opacity={0.4} />)}
  </svg>
);

const Bolt: React.FC<{ color?: string; size?: number; flash?: number }> = ({ color = ICE, size = 160, flash = 1 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 20 * flash}px ${color})` }}>
    <path d="M36 2 L8 56 L28 56 L18 98 L54 38 L32 38 L44 2 Z" fill={`${color}${flash > 0.5 ? "cc" : "44"}`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

const Clock: React.FC<{ size?: number; color?: string }> = ({ size = 160, color = ICE }) => {
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

const Thought: React.FC<{ color?: string; o?: number }> = ({ color = VIOLET, o = 1 }) => (
  <svg width={160} height={120} viewBox="0 0 160 120" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}88)` }}>
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

/** A walking figure seen side-on. */
const Walker: React.FC<{ color?: string; step?: number }> = ({ color = TEAL, step = 0 }) => {
  const a = Math.sin(step) * 16;
  return (
    <svg width={80} height={130} viewBox="0 0 80 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}aa)` }}>
      <circle cx={42} cy={16} r={11} fill={`${color}44`} stroke={color} strokeWidth={4} />
      <path d="M40 28 L36 74" stroke={color} strokeWidth={6} strokeLinecap="round" />
      <path d={`M38 40 L${44 + a * 0.6} 62 M38 40 L${30 - a * 0.6} 60`} stroke={color} strokeWidth={5} strokeLinecap="round" />
      <path d={`M36 74 L${44 + a} 126 M36 74 L${28 - a} 126`} stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

/** A hand, open or closed into a grip (closed: 0..1). */
const Grip: React.FC<{ closed: number; color?: string }> = ({ closed, color = WARM }) => (
  <svg width={130} height={130} viewBox="0 0 130 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={30} y={62} width={70} height={56} rx={18} fill={`${color}22`} stroke={color} strokeWidth={4} />
    {[0, 1, 2, 3].map(i => (
      <rect key={i} x={32 + i * 17} y={62 - 46 * (1 - closed)} width={14} height={14 + 46 * (1 - closed)} rx={7}
        fill={`${color}22`} stroke={color} strokeWidth={3.5} />
    ))}
    <rect x={6 + 18 * closed} y={70} width={30 - 6 * closed} height={14} rx={7} fill={`${color}22`} stroke={color} strokeWidth={3.5} />
  </svg>
);

/** Water with a line drawn on it that releases as it is drawn (each stretch fades soon after it appears). */
const WaterDrawing: React.FC<{ at: number }> = ({ at }) => {
  const { t } = useT();
  const segs = 24;
  return (
    <svg width={520} height={200} viewBox="0 0 520 200" style={{ overflow: "visible" }}>
      {[0, 1, 2, 3].map(i => (
        <path key={i} d={`M0 ${60 + i * 38} Q65 ${50 + i * 38 + 8 * Math.sin(t * 2 + i)} 130 ${60 + i * 38} T260 ${60 + i * 38} T390 ${60 + i * 38} T520 ${60 + i * 38}`}
          fill="none" stroke={ICE} strokeOpacity={0.35} strokeWidth={3} />
      ))}
      {Array.from({ length: segs }).map((_, i) => {
        const s = at + i * 0.12;
        const o = t < s ? 0 : Math.max(0, 1 - (t - s) / 1.0);
        const x1 = 40 + i * 18, x2 = x1 + 18;
        const y = (x: number) => 100 + 40 * Math.sin(x / 50);
        return <line key={i} x1={x1} y1={y(x1)} x2={x2} y2={y(x2)} stroke={GOLD} strokeWidth={6} strokeLinecap="round" opacity={o}
          style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />;
      })}
    </svg>
  );
};

// the five core logics: [name, hiding place, colour]
const L5: [string, string, string][] = [
  ["the four corners", "its source", WARM], ["same or different", "its identity", TEAL], ["the three times", "its present", ICE],
  ["infinite regress", "its marks", VIOLET], ["mutual dependence", "standing on its own", GOLD],
];

/** The heading of each logic's scene: its number, name and hiding place. */
const LHead: React.FC<{ i: number; at: number }> = ({ i, at }) => {
  const { t, fps } = useT();
  return (
    <At x={960} y={120} s={pop(t, fps, at)} o={ramp(t, at, 0.4)}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Num n={String(i + 1)} color={L5[i][2]} lit={1} /><Glow color={L5[i][2]} size={40} serif>{L5[i][0]}</Glow>
        <Glow color={DIM} size={30}>· {L5[i][1]}</Glow>
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
      <Title at={c("This moment ceases as it arises") - 0.6} color={DIM} size={34}>a koan</Title>
      <At x={960} y={360} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={66} speed={0.035} />
      </At>
      <At x={960} y={500} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={66} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
    </AbsoluteFill>
  );
};

const RiddleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const given = c("the question has given us an it");
  const must = c("that must either arise or cease");
  return (
    <AbsoluteFill>
      <Items items={[
        ["A koan is not a riddle with a clever answer", 600, 220, <SK c={DIM} s={30} strikeAt={c("A koan is not a riddle with a clever answer") + 1.6}>a riddle with a clever answer</SK>],
        ["built to catch the habit in the act", 1320, 220, <K c={TEAL} s={30}>a question that catches the habit</K>, { pop: true }],
        ["the question has given us an it", 960, 330, <W c={ICE} s={36} serif>does it arise, or does it cease?</W>, { d: -0.8 }],
      ]} />
      <At x={960} y={500} s={pop(t, fps, given + 0.5)}><ItBox solid={ramp(t, given + 0.5, 0.6)} label="“it”" /></At>
      <Svg>
        <DrawPath d="M840 500 Q720 500 640 560" p={ramp(t, must + 0.3, 0.5)} color={GREEN} width={4} len={260} />
        <DrawPath d="M1080 500 Q1200 500 1280 560" p={ramp(t, must + 0.5, 0.5)} color={ROSE} width={4} len={260} />
      </Svg>
      <Items items={[
        ["that must either arise or cease", 600, 600, <K c={GREEN} s={30}>arise?</K>, { d: 0.6, pop: true }],
        ["that must either arise or cease", 1320, 600, <K c={ROSE} s={30}>cease?</K>, { d: 0.8, pop: true }],
        ["that must either arise or cease", 960, 720, <W c={WARM} s={30}>handed to us before any answer</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const PageScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const five = c("then through Nagarjuna's five core logics");
  return (
    <AbsoluteFill>
      <Title at={c("This is the koan page of The Logic")}>The Logic · the koan</Title>
      <Items items={[
        ["notes by John Tan, known as Thusness", 960, 190, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>],
        ["with the logic of substance", 480, 400, <K c={WARM} s={32}>1 · the logic of substance</K>, { pop: true }],
        ["then with the logic of dependency", 960, 400, <K c={TEAL} s={32}>2 · the logic of dependency</K>, { pop: true }],
        ["then through Nagarjuna's five core logics", 1440, 400, <K c={GOLD} s={32}>3 · five core logics</K>, { pop: true }],
      ]} />
      {L5.map(([, , col], i) => (
        <At key={i} x={1240 + i * 100} y={520} s={pop(t, fps, five + 0.8 + i * 0.25)}><Num n={String(i + 1)} color={col} lit={1} /></At>
      ))}
      <At x={480} y={540} o={ramp(t, c("with the logic of substance") + 0.8, 0.5)}><ItBox solid={1} /></At>
      <At x={960} y={540} o={ramp(t, c("then with the logic of dependency") + 0.8, 0.5)}>
        <div style={{ display: "flex", gap: 12 }}><K c={GREEN} s={22}>arising</K><K c={GOLD} s={22}>moment</K><K c={ROSE} s={22}>ceasing</K></div>
      </At>
      <At x={960} y={700} o={ramp(t, five + 2.4, 0.5)}><W c={GOLD} s={32} serif>one question, worked three ways</W></At>
    </AbsoluteFill>
  );
};

const PointScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to a bell, or a car going by");
  const car = b + 1.2;
  const pass = c("The sound is already passing as it sounds");
  return (
    <AbsoluteFill>
      <Title at={c("First, what the koan points at")}>what the koan points at</Title>
      <At x={440} y={330} s={pop(t, fps, b)}><Bell size={150} swing={swingOf(t, b + 0.2)} /></At>
      <Sound x={440} y={340} at={b + 0.4} dur={9} r1={220} />
      <At x={900 + Math.min(1, Math.max(0, (t - car) / 7)) * 700} y={330} o={ramp(t, car, 0.4)}><Car spin={(t - car) * 400} /></At>
      <Items items={[
        ["At no point is there a sound that stays", 960, 470, <SK c={DIM} s={28} strikeAt={c("At no point is there a sound that stays") + 1.6}>a sound that stays</SK>],
      ]} />
      <At x={960} y={600} o={ramp(t, pass - 0.2, 0.4)}><FadingWave p={ramp(t, pass, 2.4)} /></At>
      <Items items={[
        ["The arising is already the ceasing", 680, 700, <K c={GREEN} s={28}>arising</K>, { pop: true }],
        ["The arising is already the ceasing", 960, 700, <W c={GOLD} s={32} serif>is already</W>, { d: 0.6 }],
        ["The arising is already the ceasing", 1240, 700, <K c={ROSE} s={28}>ceasing</K>, { d: 1.0, pop: true }],
        ["The arising is already the ceasing", 960, 800, <W c={CHALK} s={28}>what experience shows, looked at closely</W>, { d: 2.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const MarksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("arising, abiding and ceasing");
  const mid = c("The picture needs the middle one");
  const rem = c("The koan quietly removes the abiding");
  const gone = ramp(t, rem + 0.8, 1.0);
  const ask = c("And then asks its question about the it anyway");
  return (
    <AbsoluteFill>
      <Title at={c("The ordinary picture is different")} color={WARM}>the ordinary picture</Title>
      <Items items={[
        ["Things arise, stay for a while, and then cease", 960, 210, <W c={DIM} s={30}>arise · stay a while · cease</W>],
        ["arising, abiding and ceasing", 960, 270, <W c={DIM} s={24}>the early schools: three marks</W>, { d: 1.6 }],
      ]} />
      <Svg>
        <DrawPath d="M380 420 L1540 420" p={ramp(t, three, 1.2)} color={CHALK} width={3} len={1200} />
      </Svg>
      <At x={520} y={420} s={pop(t, fps, three)}><K c={GREEN} s={32}>arising</K></At>
      <At x={960} y={420} s={pop(t, fps, three + 0.5) * (1 - 0.3 * gone)} o={1 - 0.75 * gone}>
        <div style={{ position: "relative" }}><Chip color={GOLD} size={mid < t && t < rem ? 38 : 32}>abiding</Chip><Strike at={rem + 0.4} /></div>
      </At>
      <At x={1400} y={420} s={pop(t, fps, three + 1.0)}><K c={ROSE} s={32}>ceasing</K></At>
      <At x={960} y={540} o={ramp(t, c("Only something that abides can be the it"), 0.4) * (1 - gone)}>
        <ItBox solid={1} label="“it”" />
      </At>
      <Items items={[
        ["The picture needs the middle one", 960, 330, <W c={GOLD} s={26}>the middle one is needed</W>, { d: 0.4 }],
        ["Only something that abides can be the it", 960, 650, <W c={WARM} s={26}>only what abides can first arise, then cease</W>, { d: 0.8, until: "The koan quietly removes the abiding", ud: 1.0 }],
        ["The koan quietly removes the abiding", 960, 650, <W c={TEAL} s={30}>the koan removes the abiding</W>, { d: 1.2 }],
        ["And then asks its question about the it anyway", 960, 760, <W c={ICE} s={34} serif>…and still asks about the “it”</W>, { d: 0.2 }],
      ]} />
      <At x={960} y={540} s={pop(t, fps, ask + 0.6)} o={ramp(t, ask + 0.6, 0.4)}><W c={ICE} s={80} serif>?</W></At>
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const th = c("So it takes this moment as a thing");
  const gr = c("That is the grammar of the sentence, subject then verb");
  const world = c("taken for the shape of the world");
  return (
    <AbsoluteFill>
      <Title at={c("The logic of substance starts with things")} color={WARM}>the logic of substance</Title>
      <Items items={[
        ["The logic of substance starts with things", 960, 200, <W c={DIM} s={28}>first a thing, then what happens to it</W>, { d: 1.2 }],
      ]} />
      <At x={960} y={360} s={pop(t, fps, th)}><ItBox solid={ramp(t, th, 0.6)} label="this moment" /></At>
      <Flow x1={850} y1={360} x2={620} y2={360} color={GREEN} p={ramp(t, th + 1.2, 0.5)} />
      <Flow x1={1070} y1={360} x2={1300} y2={360} color={ROSE} p={ramp(t, th + 1.6, 0.5)} />
      <At x={520} y={360} o={ramp(t, th + 1.4, 0.4)}><K c={GREEN} s={26}>arising</K></At>
      <At x={1400} y={360} o={ramp(t, th + 1.8, 0.4)}><K c={ROSE} s={26}>ceasing</K></At>
      <At x={960} y={540} o={ramp(t, gr, 0.4)}>
        <div style={{ display: "flex", gap: 30, alignItems: "flex-end" }}>
          <div><K c={WARM} s={34}>the moment</K><div style={{ marginTop: 8 }}><Glow color={DIM} size={22}>subject</Glow></div></div>
          <div style={{ opacity: ramp(t, gr + 1.0, 0.4) }}><K c={CHALK} s={34}>arises</K><div style={{ marginTop: 8 }}><Glow color={DIM} size={22}>verb</Glow></div></div>
        </div>
      </At>
      <Svg>
        <DrawPath d="M960 610 L960 680" p={ramp(t, world, 0.4)} color={GOLD} width={4} len={80} />
      </Svg>
      <At x={960} y={740} o={ramp(t, world + 0.3, 0.5)}><W c={GOLD} s={34} serif>grammar taken for the shape of the world</W></At>
    </AbsoluteFill>
  );
};

/** One of the four answers: a heading chip, a reason line and the X when it fails. */
const Answer: React.FC<{ x: number; y: number; at: number; fail: number; label: string; color: string; children?: React.ReactNode }> =
  ({ x, y, at, fail, label, color, children }) => {
    const { t, fps } = useT();
    return (
      <>
        <At x={x} y={y} s={pop(t, fps, at)} o={ramp(t, at, 0.3)}><K c={color} s={34}>{label}</K></At>
        {children}
        <Crossed x={x + 150} y={y} at={fail} size={22} />
      </>
    );
  };

const AnswersAScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ar = c("It arises");
  const sp = c("that instant splits again, into what is gone and what is not yet");
  const ce = c("It ceases");
  const split = ramp(t, sp + 0.8, 1.0);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Given a thing, the question must be answered", 960, 130, <W c={CHALK} s={38} serif>given a thing, it must be answered</W>],
        ["There are four answers, and each one fails", 960, 200, <W c={DIM} s={28}>four answers, and each one fails</W>],
      ]} />
      <Answer x={500} y={320} at={ar} fail={sp + 2.2} label="it arises" color={GREEN}>
        <Items items={[
          ["so it is never there to have arisen", 500, 410, <W c={DIM} s={24}>it ceases as it arises: never there</W>],
        ]} />
        <At x={500 - 70 * split} y={540} o={ramp(t, sp, 0.4)}><K c={DIM} s={24}>{split > 0.5 ? "gone" : "an instant"}</K></At>
        <At x={500 + 70 * split} y={540} o={ramp(t, sp + 0.8, 0.4) * split}><K c={ICE} s={24}>not yet</K></At>
        <At x={500} y={620} o={ramp(t, sp + 1.6, 0.4)}><W c={DIM} s={22}>and it splits again</W></At>
      </Answer>
      <Answer x={1400} y={320} at={ce} fail={c("But what passes away, if it never stood") + 3.0} label="it ceases" color={ROSE}>
        <Items items={[
          ["But what passes away, if it never stood", 1400, 410, <W c={DIM} s={24}>what passes away, if it never stood?</W>],
          ["But what passes away, if it never stood", 1400, 500, <W c={DIM} s={22}>nothing there to cease</W>, { d: 1.6 }],
        ]} />
      </Answer>
      <At x={1400} y={680} s={pop(t, fps, ce + 0.6)}><Bell size={90} color={ROSE} /></At>
    </AbsoluteFill>
  );
};

const AnswersBScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Both");
  const ld = c("like light and dark");
  const n = c("Neither");
  const snd = c("Yet a sound is being heard right now");
  return (
    <AbsoluteFill>
      <Answer x={500} y={240} at={b} fail={c("They cannot belong to one thing at one time") + 1.2} label="both" color={GOLD}>
        <At x={500} y={420} o={ramp(t, ld, 0.4)}>
          <div style={{ display: "flex", borderRadius: 60, overflow: "hidden", border: `3px solid ${CHALK}`, boxShadow: `0 0 20px ${GOLD}66` }}>
            <div style={{ width: 120, height: 120, background: "#f5ecd0cc" }} /><div style={{ width: 120, height: 120, background: "#0b0c1a" }} />
          </div>
        </At>
        <Items items={[
          ["like light and dark", 500, 330, <W c={DIM} s={24}>opposites, like light and dark</W>],
          ["They cannot belong to one thing at one time", 500, 560, <W c={DIM} s={24}>not one thing at one time</W>],
        ]} />
      </Answer>
      <Answer x={1400} y={240} at={n} fail={c("Then nothing happens at all") + 1.4} label="neither" color={VIOLET}>
        <Items items={[
          ["Then nothing happens at all", 1400, 330, <W c={DIM} s={24}>then nothing happens at all</W>],
        ]} />
      </Answer>
      <At x={1400} y={470} s={pop(t, fps, snd)}><Bell size={130} swing={swingOf(t, snd)} /></At>
      <Sound x={1400} y={480} at={snd + 0.3} dur={4} r1={200} />
      <Items items={[
        ["Yet a sound is being heard right now", 1400, 640, <W c={GOLD} s={30} serif>yet a sound is heard right now</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ap = c("There is no passing away, either apart from coming into being");
  const tg = c("or together with it");
  const close = ramp(t, tg, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Nagarjuna puts the whole trap in one verse")} color={GOLD}>the whole trap, in one verse</Title>
      <Items items={[
        ["There is no passing away, either apart from coming into being", 960, 220,
          <W c={CHALK} s={32} serif>“no passing away, either apart from coming into being,</W>],
        ["or together with it", 960, 275, <W c={CHALK} s={32} serif>or together with it”</W>],
      ]} />
      {/* apart */}
      <At x={380} y={470} o={ramp(t, ap + 1.0, 0.4)}><K c={GREEN} s={26}>coming into being</K></At>
      <At x={760} y={470} o={ramp(t, ap + 1.4, 0.4)}><K c={ROSE} s={26}>passing away</K></At>
      <At x={570} y={580} o={ramp(t, ap + 1.8, 0.4)}><W c={DIM} s={24}>apart</W></At>
      <Crossed x={570} y={470} at={ap + 3.0} size={50} />
      {/* together */}
      <At x={1260 + 60 * (1 - close)} y={470} o={ramp(t, tg, 0.4)}><K c={GREEN} s={26}>coming into being</K></At>
      <At x={1560 - 60 * (1 - close)} y={470} o={ramp(t, tg + 0.2, 0.4)}><K c={ROSE} s={26}>passing away</K></At>
      <At x={1410} y={580} o={ramp(t, tg + 0.6, 0.4)}><W c={DIM} s={24}>together, in one thing</W></At>
      <Crossed x={1410} y={470} at={tg + 2.0} size={50} />
      <At x={960} y={720} o={ramp(t, tg + 2.8, 0.5)}><W c={GOLD} s={30} serif>Middle Way, chapter 21</W></At>
    </AbsoluteFill>
  );
};

const WaysOutScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const each = c("Each way out keeps the it, and moves it somewhere else");
  const all5 = c("All five are the same logic, one step further on");
  const P: [string, string, number, number][] = [
    ["A timeless Now, in which the moments pass", "a timeless Now", 480, 360],
    ["An awareness behind the moments, which stays", "an awareness behind", 960, 360],
    ["A pure flow", "a pure flow", 1440, 360],
    ["Point instants", "point instants", 700, 520],
    ["Or nothing happens", "nothing happens", 1220, 520],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("So the logic of substance looks for a way out")} color={VIOLET}>the ways out</Title>
      <Items items={[
        ["Each way out keeps the it, and moves it somewhere else", 960, 210, <W c={WARM} s={30}>each keeps the “it”, and moves it</W>, { d: 0.6 }],
      ]} />
      {P.map(([cue, w, x, y], i) => (
        <React.Fragment key={w}>
          <At x={x} y={y} o={ramp(t, c(cue), 0.4)}><SK c={DIM} s={30} strikeAt={all5 + 0.4 + i * 0.25}>{w}</SK></At>
          <At x={x} y={y + 70} o={ramp(t, c(cue) + 0.6, 0.4) * (1 - ramp(t, all5 + 0.4 + i * 0.25, 0.4))}><K c={WARM} s={22}>“it”</K></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["keeps the it and declares it absent", 1220, 660, <W c={DIM} s={22}>the “it” kept, and declared absent</W>],
        ["All five are the same logic, one step further on", 960, 760, <W c={GOLD} s={32} serif>all five: the same logic, one step further</W>],
      ]} />
    </AbsoluteFill>
  );
};

const DependScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const des = c("A moment is designated in dependence on its arising and its ceasing");
  const ag = c("Arising is designated against ceasing");
  const one = c("And there is no one thing for them to belong to");
  const P: [number, number, string, string][] = [[960, 330, "this moment", GOLD], [640, 560, "arising", GREEN], [1280, 560, "ceasing", ROSE]];
  return (
    <AbsoluteFill>
      <Title at={c("The logic of dependency starts somewhere else")} color={TEAL}>the logic of dependency</Title>
      <Items items={[
        ["It asks how this moment is picked out at all", 960, 200, <W c={TEAL} s={30}>how is “this moment” picked out at all?</W>],
      ]} />
      {P.map(([x, y, w, col], i) => (
        <At key={w} x={x} y={y} s={pop(t, fps, des + i * 0.5)}><K c={col} s={32}>{w}</K></At>
      ))}
      <Svg>
        <DrawPath d="M900 370 L700 520" p={ramp(t, des + 1.6, 0.5)} color={TEAL} width={3} len={300} />
        <DrawPath d="M1020 370 L1220 520" p={ramp(t, des + 1.9, 0.5)} color={TEAL} width={3} len={300} />
        <DrawPath d="M760 560 L1160 560" p={ramp(t, ag, 0.6)} color={TEAL} width={3} len={420} />
      </Svg>
      <Items items={[
        ["Arising is designated against ceasing", 960, 600, <W c={DIM} s={22}>each against the other</W>, { d: 0.6 }],
        ["None comes first", 960, 450, <W c={CHALK} s={26}>none comes first</W>],
        ["None is found apart from the others", 960, 680, <W c={CHALK} s={26}>none found apart</W>],
        ["And there is no one thing for them to belong to", 960, 770, <SK c={DIM} s={26} strikeAt={one + 1.8}>one thing they belong to</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const PlainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pl = c("It is a plain description");
  const st = c("There is no it standing between the arising and the ceasing");
  const fa = ramp(t, c("It falls away"), 1.4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Then ceases as it arises is not a paradox", 960, 150, <SK c={DIM} s={30} strikeAt={pl - 0.2}>a paradox</SK>],
        ["It is a plain description", 960, 240, <W c={GOLD} s={40} serif>“ceases as it arises”: a plain description</W>],
      ]} />
      <At x={560} y={420} o={ramp(t, st, 0.4)}><K c={GREEN} s={30}>arising</K></At>
      <At x={1360} y={420} o={ramp(t, st + 0.2, 0.4)}><K c={ROSE} s={30}>ceasing</K></At>
      <At x={960} y={420} o={ramp(t, st + 0.8, 0.4)}>
        <div style={{ position: "relative" }}><ItBox solid={0} dashed label="“it”?" color={DIM} /></div>
      </At>
      <Crossed x={960} y={420} at={st + 2.2} size={50} />
      <At x={960} y={600 + 160 * fa} o={ramp(t, c("the question is not answered") - 0.4, 0.4) * (1 - fa)} r={8 * fa}>
        <W c={ICE} s={40} serif>does it arise, or does it cease?</W>
      </At>
      <Items items={[
        ["the question is not answered", 960, 680, <W c={DIM} s={26}>not answered</W>, { d: 0.4, until: "It falls away", ud: 0.6 }],
        ["It falls away", 960, 760, <W c={TEAL} s={38} serif>it falls away</W>, { d: 0.8, pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const KeptScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const snd = c("Sounds are still heard");
  const fl = c("Just as the flashing is the lightning");
  const flash = t > fl ? (Math.sin((t - fl) * 7) > 0.2 ? 1 : 0.2) : 0;
  return (
    <AbsoluteFill>
      <Title at={c("Nothing is lost")} color={GOLD}>nothing is lost</Title>
      <At x={400} y={340} s={pop(t, fps, snd)}><Bell size={130} swing={swingOf(t, snd)} /></At>
      <Sound x={400} y={350} at={snd + 0.3} dur={10} r1={180} />
      <Items items={[
        ["Sounds are still heard", 400, 470, <W c={GOLD} s={26}>sounds are heard</W>, { d: 0.4 }],
        ["Clocks still keep time", 800, 340, <Clock size={140} />, { pop: true }],
        ["Clocks still keep time", 800, 470, <W c={ICE} s={26}>clocks keep time</W>, { d: 0.4 }],
        ["The firewood still burns", 1160, 330, <Fire size={150} />, { pop: true }],
        ["The firewood still burns", 1160, 470, <W c={WARM} s={26}>the firewood burns</W>, { d: 0.4 }],
      ]} />
      <At x={1560} y={340} s={pop(t, fps, fl)}><Bolt size={170} flash={flash} /></At>
      <Items items={[
        ["Just as the flashing is the lightning", 1560, 470, <W c={ICE} s={24}>the flashing is the lightning</W>, { d: 0.6 }],
        ["the arising and ceasing is the moment", 960, 600, <W c={CHALK} s={32} serif>the arising and ceasing is the moment</W>],
        ["There is change, vivid and exact, and no changer behind it", 960, 690, <W c={GOLD} s={30}>change, vivid and exact</W>],
        ["There is change, vivid and exact, and no changer behind it", 960, 770, <SK c={DIM} s={26} strikeAt={c("There is change, vivid and exact, and no changer behind it") + 3.0}>a changer behind it</SK>, { d: 1.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const FiveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hp = c("Each searches a different hiding place of the it");
  return (
    <AbsoluteFill>
      <Title at={c("Now the five core logics")} color={GOLD}>Nagarjuna's five core logics</Title>
      {L5.map(([name, place, col], i) => (
        <At key={name} x={360 + i * 300} y={400} s={pop(t, fps, c("Now the five core logics") + 0.8 + i * 0.3)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <Num n={String(i + 1)} color={col} lit={1} /><Glow color={col} size={26}>{name}</Glow>
            <div style={{ opacity: ramp(t, hp + 1.0 + i * 0.35, 0.4) }}><K c={col} s={22}>{place}</K></div>
          </div>
        </At>
      ))}
      <At x={960} y={640} o={ramp(t, hp + 0.4, 0.5)}><W c={WARM} s={32}>five hiding places of the “it”</W></At>
    </AbsoluteFill>
  );
};

const L1Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const corners = c("from itself, from another, from both, or from no cause");
  const fails = c("Each fails");
  const before = c("the moment before among them");
  const C4 = ["from itself", "from another", "from both", "from no cause"];
  return (
    <AbsoluteFill>
      <LHead i={0} at={c("One, the four corners: its source")} />
      <Items items={[
        ["from itself, from another, from both, or from no cause", 960, 220, <W c={CHALK} s={30}>does the moment arise…</W>, { d: -0.4 }],
      ]} />
      {C4.map((w, i) => (
        <At key={w} x={420 + i * 360} y={310} s={pop(t, fps, corners + i * 0.7)}><SK c={DIM} s={26} strikeAt={fails + 0.2 + i * 0.2}>{w}</SK></At>
      ))}
      <Items items={[
        ["Seen with dependency, the moment needs no source", 960, 420, <W c={TEAL} s={30}>with dependency: no source needed</W>],
      ]} />
      {[0, 1, 2, 3].map(i => (
        <At key={i} x={480 + i * 320} y={560} s={pop(t, fps, before + i * 0.4)}>
          <K c={i === 2 ? GOLD : ICE} s={24}>{i === 2 ? "this moment" : i === 1 ? "the moment before" : "a moment"}</K>
        </At>
      ))}
      {[0, 1, 2].map(i => <Flow key={i} x1={580 + i * 320} y1={560} x2={700 + i * 320} y2={560} color={TEAL} p={ramp(t, before + 0.4 + i * 0.4, 0.4)} dash pulses={false} />)}
      <Items items={[
        ["the moment before among them", 960, 640, <W c={DIM} s={24}>designated with its conditions, the moment before among them</W>, { d: 0.8 }],
        ["Nothing passes over, and nothing is missing", 960, 740, <W c={GOLD} s={32} serif>nothing passes over, and nothing is missing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const L2Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const same = c("If arising and ceasing are the same, nothing ever comes to be");
  const diff = c("If different, something must stand between them");
  const ff = c("Like fire and fuel, they are not one and not two");
  return (
    <AbsoluteFill>
      <LHead i={1} at={c("Two, same or different: its identity")} />
      {/* same */}
      <At x={480} y={300} s={pop(t, fps, same)}><K c={CHALK} s={28}>same?</K></At>
      <At x={480} y={400} o={ramp(t, same + 0.4, 0.4)}>
        <div style={{ position: "relative", width: 240, height: 60 }}>
          <div style={{ position: "absolute", left: 40 * (1 - ramp(t, same + 0.8, 0.8)), top: 0 }}><K c={GREEN} s={24}>arising</K></div>
          <div style={{ position: "absolute", right: 40 * (1 - ramp(t, same + 0.8, 0.8)), top: 0, opacity: 0.8 }}><K c={ROSE} s={24}>ceasing</K></div>
        </div>
      </At>
      <At x={480} y={500} o={ramp(t, same + 2.0, 0.4)}><W c={DIM} s={24}>nothing ever comes to be</W></At>
      <Crossed x={480} y={400} at={same + 3.4} size={40} />
      {/* different */}
      <At x={1440} y={300} s={pop(t, fps, diff)}><K c={CHALK} s={28}>different?</K></At>
      <At x={1280} y={400} o={ramp(t, diff + 0.4, 0.4)}><K c={GREEN} s={24}>arising</K></At>
      <At x={1600} y={400} o={ramp(t, diff + 0.4, 0.4)}><K c={ROSE} s={24}>ceasing</K></At>
      <At x={1440} y={400} o={ramp(t, diff + 1.2, 0.4)}><K c={WARM} s={22}>“it”</K></At>
      <At x={1440} y={500} o={ramp(t, diff + 1.6, 0.4)}><W c={DIM} s={24}>something standing between</W></At>
      <Crossed x={1440} y={400} at={diff + 2.8} size={40} />
      {/* fire and fuel */}
      <At x={960} y={560} s={pop(t, fps, ff)}><Fire size={150} /></At>
      <Items items={[
        ["Like fire and fuel, they are not one and not two", 760, 560, <W c={WARM} s={26}>fire</W>, { d: 0.6 }],
        ["Like fire and fuel, they are not one and not two", 1160, 560, <W c={WARM} s={26}>fuel</W>, { d: 0.8 }],
        ["Like fire and fuel, they are not one and not two", 960, 730, <W c={GOLD} s={34} serif>not one, and not two</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const L3Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("What has arisen is not arising");
  const b = c("What has not arisen is not arising");
  const n = c("And no now arising is found between them");
  const met = c("The moment is met, vividly, without a present that holds it");
  const walk = Math.max(0, t - a);
  return (
    <AbsoluteFill>
      <LHead i={2} at={c("Three, the three times: its present")} />
      <Svg>
        <DrawPath d="M300 420 L1620 420" p={ramp(t, a - 0.6, 1.0)} color={CHALK} width={5} len={1400} />
      </Svg>
      <At x={960} y={350} o={ramp(t, a - 0.4, 0.4)}><Walker step={walk * 4} /></At>
      <Items items={[
        ["What has arisen is not arising", 520, 490, <K c={DIM} s={26}>already arisen</K>],
        ["What has arisen is not arising", 520, 560, <W c={DIM} s={22}>done: not arising</W>, { d: 1.0 }],
        ["What has not arisen is not arising", 1400, 490, <K c={ICE} s={26}>not yet arisen</K>],
        ["What has not arisen is not arising", 1400, 560, <W c={DIM} s={22}>not here: not arising</W>, { d: 1.0 }],
        ["And no now arising is found between them", 960, 490, <SK c={WARM} s={26} strikeAt={n + 2.2}>a “now arising”</SK>],
        ["The moment is met, vividly, without a present that holds it", 960, 660, <W c={GOLD} s={32} serif>the moment is met, vividly</W>],
        ["The moment is met, vividly, without a present that holds it", 960, 750, <SK c={DIM} s={26} strikeAt={met + 3.4}>a present that holds it</SK>, { d: 1.8 }],
      ]} />
      <At x={960} y={200} o={ramp(t, a - 0.4, 0.4)} s={pop(t, fps, a - 0.4)}><W c={DIM} s={24}>like a road being walked</W></At>
    </AbsoluteFill>
  );
};

const L4Scene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ev = c("If arising is a real event, it needs its own arising");
  const ever = c("and that needs another, for ever");
  const des = c("Seen as a designation, there is no regress");
  const calm = ramp(t, des, 1.0);
  const L = ["arising", "the arising of arising", "the arising of that", "and of that…", "…"];
  return (
    <AbsoluteFill>
      <LHead i={3} at={c("Four, infinite regress: its marks")} />
      {L.map((w, i) => (
        <At key={i} x={960} y={250 + i * 80} s={1 - i * 0.12} o={ramp(t, (i < 2 ? ev + i * 1.4 : ever + (i - 2) * 0.6), 0.4) * (i ? 1 - calm : 1) * (1 - i * 0.12)}>
          <K c={i ? DIM : VIOLET} s={28}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["Seen as a designation, there is no regress", 960, 360, <W c={TEAL} s={30}>a designation: no regress</W>, { d: 0.8 }],
        ["what is arising is at peace, and so is arising itself", 960, 620,
          <W c={GOLD} s={34} serif>“what is arising is at peace, and so is arising itself”</W>],
        ["what is arising is at peace, and so is arising itself", 960, 700, <W c={DIM} s={24}>Nagarjuna, Middle Way 7</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const L5Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("All four failed for one reason");
  const est = c("Each needed something established on its own first");
  const da = c("Dependent arising is what we call emptiness");
  const not = c("Emptiness is not a thing behind the moment");
  const how = c("It is how the moment is: dependent, and not found on its own");
  return (
    <AbsoluteFill>
      <LHead i={4} at={c("Five, mutual dependence: its standing on its own")} />
      {[0, 1, 2, 3].map(i => (
        <At key={i} x={720 + i * 160} y={240} o={ramp(t, one + 0.3 + i * 0.2, 0.3)}><Num n={String(i + 1)} color={L5[i][2]} lit={0} /></At>
      ))}
      <Items items={[
        ["Each needed something established on its own first", 960, 330, <SK c={WARM} s={28} strikeAt={est + 2.6}>established on its own, first</SK>],
      ]} />
      <At x={720} y={460} s={pop(t, fps, da)}><K c={GREEN} s={28}>arising</K></At>
      <At x={1200} y={460} s={pop(t, fps, da + 0.3)}><K c={ROSE} s={28}>ceasing</K></At>
      <Flow x1={810} y1={445} x2={1110} y2={445} color={TEAL} p={ramp(t, da + 0.6, 0.5)} />
      <Flow x1={1110} y1={475} x2={810} y2={475} color={TEAL} p={ramp(t, da + 0.9, 0.5)} />
      <Items items={[
        ["Dependent arising is what we call emptiness", 960, 550, <W c={GOLD} s={32} serif>“dependent arising is what we call emptiness”</W>, { d: 0.8 }],
        ["Emptiness is not a thing behind the moment", 960, 650, <SK c={DIM} s={26} strikeAt={not + 1.8}>emptiness as a thing behind the moment</SK>],
        ["It is how the moment is: dependent, and not found on its own", 960, 750, <W c={TEAL} s={30}>how the moment is: dependent, not found on its own</W>],
      ]} />
      <At x={960} y={400} o={ramp(t, how + 1.0, 0.4)}><K c={GOLD} s={24}>moment</K></At>
    </AbsoluteFill>
  );
};

const LandScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const land = c("Each logic lands in the same place");
  const g = ramp(t, land + 0.4, 1.2);
  const nf = c("No it is found, and the moment is still here");
  return (
    <AbsoluteFill>
      {L5.map(([, , col], i) => {
        const x0 = 360 + i * 300;
        return <At key={i} x={x0 + (960 - x0) * g * 0.75} y={260} o={ramp(t, land - 0.4, 0.3)}><Num n={String(i + 1)} color={col} lit={1} /></At>;
      })}
      <At x={960} y={360} o={ramp(t, land + 1.0, 0.4)}><W c={CHALK} s={30}>the same place</W></At>
      <At x={760} y={480} o={ramp(t, nf, 0.4)}><SK c={DIM} s={28} strikeAt={nf + 0.8}>“it”</SK></At>
      <At x={1160} y={500} s={pop(t, fps, nf + 1.2)}><Bell size={120} swing={swingOf(t, nf + 1.2)} /></At>
      <Sound x={1160} y={510} at={nf + 1.4} dur={5} r1={200} />
      <At x={960} y={680} o={ramp(t, nf + 1.6, 0.5)}><W c={GOLD} s={36} serif>and the moment is still here</W></At>
    </AbsoluteFill>
  );
};

const ConvScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const conv = c("Conventionally, it arises and ceases");
  const st = c("when the bell was struck, and when the ringing stopped");
  const wave = ramp(t, c("The sound starts and ends"), 2.0);
  return (
    <AbsoluteFill>
      <Title at={c("So, does it arise or cease")} color={ICE}>so, does it arise or cease?</Title>
      <Items items={[
        ["Two answers can be given, and they do not conflict", 960, 190, <W c={DIM} s={28}>two answers, not in conflict</W>],
        ["Conventionally, it arises and ceases", 960, 290, <K c={GOLD} s={32}>conventionally: it arises and ceases</K>, { pop: true }],
      ]} />
      <At x={440} y={460} s={pop(t, fps, conv + 0.6)}><Bell size={140} swing={swingOf(t, st)} /></At>
      <Sound x={440} y={470} at={st} dur={3} r1={200} />
      <At x={1120} y={460} o={ramp(t, c("The sound starts and ends") - 0.2, 0.4)}><FadingWave p={wave} w={600} /></At>
      <Items items={[
        ["The sound starts and ends", 840, 580, <W c={GREEN} s={24}>starts</W>, { d: 0.2 }],
        ["The sound starts and ends", 1400, 580, <W c={ROSE} s={24}>ends</W>, { d: 1.6 }],
        ["when the bell was struck, and when the ringing stopped", 960, 660, <W c={GOLD} s={28}>said correctly: struck · stopped</W>, { d: 0.6 }],
        ["Nothing in the analysis touches this", 960, 760, <W c={CHALK} s={32} serif>nothing in the analysis touches this</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LookedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lf = c("Looked for, nothing that arises and nothing that ceases is found");
  const two = c("Not two worlds, but one moment, seen two ways");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Looked for, nothing that arises and nothing that ceases is found", 960, 140, <K c={VIOLET} s={30}>looked for: nothing that arises or ceases is found</K>, { pop: true }],
        ["Nagarjuna opens his whole work this way", 960, 230, <W c={DIM} s={26}>the opening homage of the Middle Way</W>],
        ["without ceasing, without arising", 960, 320, <W c={GOLD} s={40} serif>“without ceasing, without arising”</W>],
        ["That is not a denial that things appear", 960, 410, <SK c={DIM} s={26} strikeAt={c("That is not a denial that things appear") + 1.4}>a denial that things appear</SK>],
        ["It is said of dependent arising itself", 960, 490, <W c={TEAL} s={28}>said of dependent arising itself</W>],
      ]} />
      <At x={960} y={660} s={pop(t, fps, two)}><Bell size={120} /></At>
      <At x={620} y={640} o={ramp(t, two + 0.6, 0.4)}><Eye color={GOLD} size={130} /></At>
      <At x={1300} y={640} o={ramp(t, two + 0.9, 0.4)}><Eye color={VIOLET} size={130} /></At>
      <Flow x1={700} y1={640} x2={880} y2={650} color={GOLD} p={ramp(t, two + 1.0, 0.5)} pulses={false} />
      <Flow x1={1220} y1={640} x2={1040} y2={650} color={VIOLET} p={ramp(t, two + 1.2, 0.5)} pulses={false} />
      <At x={620} y={730} o={ramp(t, two + 1.4, 0.4)}><W c={GOLD} s={22}>conventionally</W></At>
      <At x={1300} y={730} o={ramp(t, two + 1.6, 0.4)}><W c={VIOLET} s={22}>looked for</W></At>
      <At x={960} y={800} o={ramp(t, two + 2.2, 0.5)}><W c={CHALK} s={28} serif>one moment, seen two ways</W></At>
    </AbsoluteFill>
  );
};

const CompleteScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const comp = c("Then each moment is complete where it is");
  const fw = c("says it of firewood and ash");
  const th = c("A thought, seen as unfixed, releases as it arises");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So the koan is not answered by choosing a corner", 960, 130, <W c={DIM} s={28}>not answered by choosing a corner</W>],
        ["It is answered when the it is seen never to have been there", 960, 195, <W c={GOLD} s={32} serif>answered when the “it” is seen never to have been there</W>],
      ]} />
      {[0, 1, 2, 3].map(i => (
        <At key={i} x={600 + i * 240} y={300} s={pop(t, fps, comp + i * 0.3)}>
          <div style={{ width: 120, height: 60, borderRadius: 30, border: `3px solid ${[GREEN, GOLD, ICE, ROSE][i]}`, background: `${[GREEN, GOLD, ICE, ROSE][i]}33`,
            boxShadow: `0 0 18px ${[GREEN, GOLD, ICE, ROSE][i]}88` }} />
        </At>
      ))}
      <Items items={[
        ["Nothing carried over, nothing left behind", 960, 370, <W c={CHALK} s={26}>each complete where it is · nothing carried over</W>],
        ["says it of firewood and ash", 420, 470, <Fire size={120} />, { pop: true }],
        ["says it of firewood and ash", 720, 500, <Ash size={130} />, { pop: true, d: 0.8 }],
        ["says it of firewood and ash", 570, 600, <W c={WARM} s={24}>Dogen: firewood, ash</W>, { d: 1.2 }],
        ["each with a before and an after, yet cut off from them", 570, 660, <W c={DIM} s={22}>a before and an after, yet cut off</W>],
        ["A thought, seen as unfixed, releases as it arises", 1360, 470, <W c={VIOLET} s={24}>self-release</W>, { d: -1.8 }],
        ["like a drawing on water", 1360, 690, <W c={GOLD} s={26} serif>like a drawing on water</W>, { d: 0.6 }],
      ]} />
      <At x={1360} y={570} o={ramp(t, th - 0.4, 0.4)}><WaterDrawing at={th + 0.2} /></At>
    </AbsoluteFill>
  );
};

const InsightsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ap = c("It appears when bell, air, ear and attention come together");
  const S = ["bell", "air", "ear", "attention"];
  return (
    <AbsoluteFill>
      <Title at={c("Three insights meet here")}>three insights in one koan</Title>
      <Items items={[
        ["The moment is vivid, and not found", 420, 260, <Num n="1" color={GOLD} lit={1} />, { pop: true }],
        ["The moment is vivid, and not found", 420, 340, <W c={GOLD} s={28}>vivid, and not found</W>, { d: 0.3 }],
        ["It appears when bell, air, ear and attention come together", 960, 260, <Num n="2" color={TEAL} lit={1} />, { pop: true }],
        ["It appears when bell, air, ear and attention come together", 960, 340, <W c={TEAL} s={28}>appears when conditions meet</W>, { d: 0.3 }],
        ["And the it is the habit at work", 1500, 260, <Num n="3" color={WARM} lit={1} />, { pop: true }],
        ["And the it is the habit at work", 1500, 340, <W c={WARM} s={28}>the “it” is the habit</W>, { d: 0.3 }],
      ]} />
      <At x={420} y={500} s={pop(t, fps, c("The moment is vivid, and not found") + 0.6)}><Bell size={120} /></At>
      <Sound x={420} y={510} at={c("The moment is vivid, and not found") + 0.8} dur={3} r1={160} />
      {S.map((w, i) => (
        <At key={w} x={960} y={430 + i * 62} o={ramp(t, ap + 0.4 + i * 0.4, 0.4)}><K c={ICE} s={22}>{w}</K></At>
      ))}
      <Items items={[
        ["from no hidden place", 960, 700, <SK c={DIM} s={22} strikeAt={c("from no hidden place") + 1.0}>a hidden place</SK>],
        ["carried in by the question", 1500, 470, <W c={ICE} s={26} serif>does “it” arise…?</W>],
        ["carried in by the question", 1500, 540, <W c={DIM} s={22}>carried in by the question</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const MattersScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hold = c("A clear moment must be held on to");
  const rid = c("A painful one must be got rid of");
  const open = c("there is nothing to keep, and nothing to lose");
  const o = ramp(t, open, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Why does it matter")} color={ROSE}>why it matters</Title>
      <Items items={[
        ["every experience is something to keep or to lose", 960, 200, <W c={DIM} s={28}>with an “it”: something to keep or to lose</W>],
      ]} />
      <At x={600} y={380} s={pop(t, fps, hold)} o={1 - 0.6 * o}><Grip closed={ramp(t, hold + 0.6, 0.6) * (1 - o)} color={GOLD} /></At>
      <At x={600} y={500} o={ramp(t, hold + 0.4, 0.4) * (1 - o)}><W c={GOLD} s={24}>held on to</W></At>
      <At x={1320 + 40 * ramp(t, rid + 0.8, 0.6) * (1 - o)} y={380} s={pop(t, fps, rid)} o={1 - 0.6 * o}><Grip closed={0} color={ROSE} /></At>
      <At x={1320} y={500} o={ramp(t, rid + 0.4, 0.4) * (1 - o)}><W c={ROSE} s={24}>got rid of</W></At>
      <Items items={[
        ["Craving and fear follow from the it", 960, 600, <W c={WARM} s={28}>craving and fear follow from the “it”</W>, { until: "there is nothing to keep, and nothing to lose" }],
        ["there is nothing to keep, and nothing to lose", 960, 600, <W c={GOLD} s={34} serif>nothing to keep, nothing to lose</W>, { d: 0.6 }],
        ["This is not indifference", 960, 690, <W c={CHALK} s={28}>not indifference</W>],
        ["The moment is met fully, because it is not being held on to", 960, 780, <W c={TEAL} s={30}>met fully, because not held on to</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ls = c("Listen to a single sound until it ends");
  const th = c("Watch a thought come and go");
  const drift = ramp(t, th + 0.6, 3.0);
  return (
    <AbsoluteFill>
      <Title at={c("So, try it")} color={GOLD}>try it</Title>
      <At x={480} y={320} s={pop(t, fps, ls)}><Bell size={130} swing={swingOf(t, ls + 0.3)} /></At>
      <Sound x={480} y={330} at={ls + 0.5} dur={4} r1={200} />
      <Items items={[
        ["When did it arise", 480, 470, <K c={GREEN} s={26}>when did it arise?</K>, { pop: true }],
        ["When did it cease", 480, 550, <K c={ROSE} s={26}>when did it cease?</K>, { pop: true }],
        ["Look for a sound between the two, apart from the sounding", 480, 650, <W c={CHALK} s={24}>a sound between, apart from the sounding?</W>],
      ]} />
      <At x={1400} y={340 - 80 * drift} o={ramp(t, th, 0.4) * (1 - 0.8 * drift)}><Thought /></At>
      <Items items={[
        ["Ask where it went", 1400, 470, <K c={VIOLET} s={26}>where did it go?</K>, { pop: true }],
        ["Then notice the question assumes a thought that went somewhere", 1400, 560, <W c={WARM} s={24}>the question assumes a thought that went</W>],
        ["Then notice the question assumes a thought that went somewhere", 1400, 640, <W c={DIM} s={24}>look for that thought</W>, { d: 2.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const LastScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("And the koan, once more");
  const see = c("See that no it is found");
  const sim = c("and the koan is simply this moment");
  return (
    <AbsoluteFill>
      <At x={960} y={230} o={ramp(t, k + 0.6, 0.3)}>
        <Reveal text="This moment ceases as it arises. Does it arise, or does it cease?" at={k + 0.8} size={46} speed={0.03} />
      </At>
      <Items items={[
        ["Ask what arises, and it is a paradox", 960, 360, <W c={DIM} s={30}>ask what arises: a paradox</W>, { until: "See that no it is found" }],
        ["See that no it is found", 960, 340, <SK c={DIM} s={28} strikeAt={see + 0.8}>“it”</SK>],
      ]} />
      <At x={960} y={560} s={pop(t, fps, see + 0.6)} o={ramp(t, see + 0.6, 0.3)}><Bell size={150} swing={swingOf(t, see + 0.8)} /></At>
      <Sound x={960} y={580} at={see + 1.0} dur={10} r1={300} />
      <At x={960} y={740} o={ramp(t, sim, 0.6)}><W c={GOLD} s={44} serif>simply this moment</W></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "This moment ceases as it arises"], ["doubt", "A koan is not a riddle with a clever answer"],
    ["web", "This is the koan page of The Logic"], ["vivid", "First, what the koan points at"],
    ["search", "The ordinary picture is different"], ["doubt", "The logic of substance starts with things"],
    ["doubt", "Given a thing, the question must be answered"], ["search", "Both"],
    ["web", "Nagarjuna puts the whole trap in one verse"], ["doubt", "So the logic of substance looks for a way out"],
    ["sea", "The logic of dependency starts somewhere else"], ["whole", "Then ceases as it arises is not a paradox"],
    ["vivid", "Nothing is lost"], ["web", "Now the five core logics"], ["search", "One, the four corners: its source"],
    ["sea", "Two, same or different: its identity"], ["search", "Three, the three times: its present"],
    ["web", "Four, infinite regress: its marks"], ["whole", "Five, mutual dependence: its standing on its own"],
    ["vivid", "Each logic lands in the same place"], ["open", "So, does it arise or cease"],
    ["web", "Looked for, nothing that arises and nothing that ceases is found"], ["sea", "So the koan is not answered by choosing a corner"],
    ["whole", "Three insights meet here"], ["doubt", "Why does it matter"], ["vivid", "So, try it"], ["open", "And the koan, once more"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["This moment ceases as it arises", <KoanScene />],
    ["A koan is not a riddle with a clever answer", <RiddleScene />],
    ["This is the koan page of The Logic", <PageScene />],
    ["First, what the koan points at", <PointScene />],
    ["The ordinary picture is different", <MarksScene />],
    ["The logic of substance starts with things", <SubstanceScene />],
    ["Given a thing, the question must be answered", <AnswersAScene />],
    ["Both", <AnswersBScene />],
    ["Nagarjuna puts the whole trap in one verse", <VerseScene />],
    ["So the logic of substance looks for a way out", <WaysOutScene />],
    ["The logic of dependency starts somewhere else", <DependScene />],
    ["Then ceases as it arises is not a paradox", <PlainScene />],
    ["Nothing is lost", <KeptScene />],
    ["Now the five core logics", <FiveScene />],
    ["One, the four corners: its source", <L1Scene />],
    ["Two, same or different: its identity", <L2Scene />],
    ["Three, the three times: its present", <L3Scene />],
    ["Four, infinite regress: its marks", <L4Scene />],
    ["Five, mutual dependence: its standing on its own", <L5Scene />],
    ["Each logic lands in the same place", <LandScene />],
    ["So, does it arise or cease", <ConvScene />],
    ["Looked for, nothing that arises and nothing that ceases is found", <LookedScene />],
    ["So the koan is not answered by choosing a corner", <CompleteScene />],
    ["Three insights meet here", <InsightsScene />],
    ["Why does it matter", <MattersScene />],
    ["So, try it", <TryScene />],
    ["And the koan, once more", <LastScene />],
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
