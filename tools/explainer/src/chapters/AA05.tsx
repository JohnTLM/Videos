// After Anatta 5: The Four Corners (The Logic, Step 5). Explainer drawings timed to the narration.
// Arc: the koan's four answers, each struck -> the four corners (the undeclared questions, MMK 1.1) -> why each corner
// falls (permanence; annihilation and the empty jug; both; neither, built from the two) -> one assumption under all four:
// a findable "it", the extreme as an edge to stand on -> the fire that went nowhere, the king of France -> the fifth corner
// (the Absolute, Pure Awareness, a timeless Now) and the author's own pull -> Nagarjuna closes the door -> the koan seen
// two ways -> the corners as medicine -> the spinning stops; the thought with no whereabouts -> the siren: high? low? both?
// neither? no pitch in the siren on its own, yet heard -> self, lap, sprout, person -> try it.
// Stance: emptiness is drawn only as the not-finding, never as a ground, container, backdrop or fifth corner. "Beyond",
// the Absolute, Pure Awareness and a timeless Now appear only as a fifth corner to be struck; awareness is never drawn
// as a hidden substance. Only the invented "it" and the wrong views are struck; the sound, the bell, the thought, the lap,
// the sprout, the flame and the people stay vivid and are never struck.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan's four answers
  "This moment ceases as it arises", "Does it arise, or does it cease", "The question offers four answers",
  "It both arises and ceases", "It neither arises nor ceases", "Each one fails",
  "This is the fifth step of The Logic", "The step asks why each answer falls", "why all four fall together",
  "is not a secret fifth place to stand",
  // the four corners
  "These are called the four corners", "whether the awakened one exists after death", "he set the question aside, with all four answers",
  "Nagarjuna's most famous verse has the same shape", "Not from itself, not from another", "not from both, and not without a cause",
  "no thing is ever found to have arisen",
  // why each corner falls
  "Then the moment is there, from its own side", "This is the view of permanence", "Yet this moment ceases as it arises",
  "Then something real passes into nothing", "This is the view of annihilation", "An absence is always the absence of something",
  "No milk in the jug", "its ceasing has nothing to borrow from",
  "Then two failed answers are joined", "Light and darkness cannot sit in one spot",
  "The subtlest corner", "is built out of arising and ceasing", "who could know it, and by what",
  // one assumption
  "So the four corners fall together", "Each assumes there is something findable", "In the koan that bearer is the it",
  "The old word for an extreme means an edge",
  // the fire, and the king of France
  "a wanderer named Vacchagotta", "When a fire goes out, in which direction has it gone", "That does not apply",
  "Not because the fire went too far to see, or into nothing", "The question asks for a fire apart from its burning",
  "even while the Buddha is alive",
  "This is not a trick that breaks logic", "Is the present king of France bald", "Neither yes nor no",
  "The question has nothing to be about",
  // the fifth corner
  "Here the habit makes its most refined move", "so surely the truth lies beyond them", "The Absolute", "The Ineffable",
  "Pure Awareness, prior to every concept", "Or a timeless Now the moments pass through",
  "The author knows this pull from the inside", "In the years of I AM, I negated a great deal",
  "What was left seemed beyond every description", "the one thing I had never looked for",
  "Nagarjuna closes this door himself", "Rejecting all four answers is not a fifth theory", "It removes, and installs nothing",
  "One should not say empty, nor not empty", "Empty is a word that does a job",
  "Beyond words means there is nothing further to grasp", "the same substance with a quieter name", "The fifth corner gets no exemption",
  // seen two ways
  "With the logic of substance, a moment is here", "the koan feels like a trap",
  "With the logic of dependency, no moment is found standing there first", "A sound is sounding",
  "Seen from before, it is called arising", "Seen from after, ceasing", "This is not the fourth corner",
  "It gives the it no status of its own at all", "And the sound is fully heard",
  // the corners as medicine
  "None of this makes the four corners forbidden words", "Nagarjuna uses them as medicine",
  "Chandrakirti reads these as steps for different people", "The car went by at noon is still true",
  "What fails is an it found doing the starting",
  // the spinning stops
  "What is left when the four corners fall is not a blank", "Nagarjuna's word for what stops is elaboration",
  "it is, it is not, it came, it went", "the spinning stops by itself", "That stopping is called peace",
  "A thought appears", "Where did it come from", "Where did it go", "Yet the thought was thought, and you acted on it",
  "a quiet mind is not the same as this", "Stillness with the habit intact has only paused",
  // the siren
  "An ambulance passes", "Its siren is high as it comes", "and drops as it goes", "while for the driver it never changes",
  "So what is its pitch", "High? Low? Both? Neither", "Each answer looks for a pitch sitting in the siren on its own",
  "There is none", "Yet the siren is heard, and cars pull aside",
  // beyond the moment
  "The four corners can be asked of anything", "The self", "Then it could never learn or change",
  "Thinking, choosing and caring go on as before", "An object", "Sit down, and you have a lap", "where did your lap go",
  "There never was a lap apart from the sitting",
  "A cause", "Does a sprout come from itself", "Yet rice seed gives rice, never barley",
  "The person", "Where has someone gone who has died", "No person was found apart from the living", "As one flame lights another",
  "Love and grief stay exactly where they were",
  // try it
  "So, try it", "Listen to one sound until it ends", "Did it cease? Both? Neither", "look for the it, a sound apart from the sounding",
  "and the sound was heard in full", "And when you reach it is beyond all that",
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

/** A chip that is struck through at `strikeAt` (only for the invented "it" and wrong views, never for a conventional thing). */
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

/** The four corners' colours, in the order: it is, it is not, both, neither. */
const CC = [ICE, ROSE, VIOLET, GOLD];

/** A short struck row of the four corners (a reminder that all four have fallen). */
const FallenRow: React.FC<{ y: number; at: number; labels?: string[] }> = ({ y, at, labels = ["it is", "it is not", "both", "neither"] }) => {
  const { t } = useT();
  return (
    <>
      {labels.map((w, i) => (
        <At key={w} x={600 + i * 240} y={y} o={ramp(t, at + i * 0.15, 0.4) * 0.8}><SK c={CC[i]} s={24} strikeAt={at + 0.4 + i * 0.15}>{w}</SK></At>
      ))}
    </>
  );
};

// ---------------------------------------------------------------- drawings
/** A car going by: the sound source (it replaced the bell, owner 2026-10-29); swing nudges it along the road. */
const PassingCar: React.FC<{ size?: number; swing?: number; color?: string }> = ({ size = 220, swing = 0, color = GOLD }) => (
  <svg width={size} height={size * 0.45} viewBox="0 0 220 100" style={{ overflow: "visible", transform: `translateX(${swing * 4}px)`,
    filter: `drop-shadow(0 0 12px ${color}99)` }}>
    <path d="M12 70 L22 46 L66 40 L90 16 L150 16 L176 42 L206 48 L208 70 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M96 22 L146 22 L166 42 L84 42 Z" fill={`${color}18`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    {[56, 166].map(cx => (
      <g key={cx}>
        <circle cx={cx} cy={72} r={18} fill="#0008" stroke={color} strokeWidth={5} />
        <circle cx={cx} cy={72} r={5} fill={color} />
      </g>
    ))}
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

const Thought: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={160} height={120} viewBox="0 0 160 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M40 70 Q15 70 18 50 Q20 28 45 32 Q55 10 82 16 Q105 4 120 26 Q148 28 142 54 Q146 78 118 78 Q100 92 78 80 Q58 90 40 70 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={34} cy={96} r={8} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <circle cx={18} cy={112} r={5} fill={`${color}33`} stroke={color} strokeWidth={3} />
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

/** A figure on a chair, seated (sit = 1, with a lap) or standing up (sit = 0). */
const Sitter: React.FC<{ sit: number; color?: string }> = ({ sit, color = TEAL }) => {
  const hip = 120 - 34 * (1 - sit);
  const knee = 60 + 40 * (1 - sit);
  return (
    <svg width={220} height={230} viewBox="0 0 220 230" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      <path d="M40 130 L40 220 M40 130 L120 130 L120 220 M40 60 L40 130" stroke={DIM} strokeWidth={5} fill="none" strokeLinecap="round" />
      <circle cx={60 + 10 * (1 - sit)} cy={hip - 82} r={15} fill={`${color}33`} stroke={color} strokeWidth={4} />
      <path d={`M${60 + 10 * (1 - sit)} ${hip - 66} L${60 + 4 * (1 - sit)} ${hip}`} stroke={color} strokeWidth={7} strokeLinecap="round" />
      <path d={`M${60 + 4 * (1 - sit)} ${hip} L${60 + knee} ${hip + 4 * (1 - sit) + 0} L${60 + knee} 222`} stroke={color} strokeWidth={7}
        strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={`M${62 + 8 * (1 - sit)} ${hip - 50} L${100 + 10 * sit} ${hip - 20 * sit - 10 * (1 - sit)}`} stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

/** A jug, empty. */
const Jug: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={190} height={210} viewBox="0 0 190 210" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M50 20 L120 20 L112 50 Q150 90 140 150 Q132 196 85 198 Q38 196 30 150 Q20 90 58 50 Z" fill={`${color}14`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M50 20 L36 10" stroke={color} strokeWidth={5} strokeLinecap="round" />
    <path d="M138 80 Q186 84 178 124 Q172 152 140 150" fill="none" stroke={color} strokeWidth={5} />
  </svg>
);

/** A flame; size 0..1 lets it go out. */
const Flame: React.FC<{ size?: number; k?: number; color?: string }> = ({ size = 160, k = 1, color = WARM }) => {
  const { t } = useT();
  const w = 1 + 0.05 * Math.sin(t * 9);
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 100 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${18 * k}px ${color})` }}>
      <g transform={`translate(50 120) scale(${k * w} ${k}) translate(-50 -120)`}>
        <path d="M50 10 Q78 50 74 84 Q72 118 50 120 Q28 118 26 84 Q24 56 50 10 Z" fill={`${color}aa`} stroke={color} strokeWidth={3} />
        <path d="M50 58 Q62 80 60 98 Q58 114 50 114 Q42 114 40 98 Q40 82 50 58 Z" fill={`${GOLD}dd`} />
      </g>
      <path d="M36 122 L64 122" stroke={DIM} strokeWidth={5} strokeLinecap="round" />
    </svg>
  );
};

/** A crown drawn dashed: a king who is not there. */
const Crown: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={200} height={130} viewBox="0 0 200 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 110 L10 30 L60 70 L100 14 L140 70 L190 30 L180 110 Z" fill={`${color}14`} stroke={color} strokeWidth={5} strokeDasharray="12 8" strokeLinejoin="round" />
  </svg>
);

/** A seed in the soil putting up a sprout (grow 0..1). */
const Sprout: React.FC<{ grow: number }> = ({ grow }) => (
  <svg width={200} height={200} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M20 170 L180 170" stroke="#b07a45" strokeWidth={6} strokeLinecap="round" />
    <ellipse cx={100} cy={176} rx={16} ry={10} fill="#b07a4588" stroke="#b07a45" strokeWidth={3} />
    <path d={`M100 170 L100 ${170 - 110 * grow}`} stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
    <path d={`M100 ${170 - 80 * grow} Q${100 - 50 * grow} ${170 - 110 * grow} ${100 - 60 * grow} ${170 - 80 * grow} Q${100 - 30 * grow} ${170 - 70 * grow} 100 ${170 - 80 * grow} Z`}
      fill={`${GREEN}88`} stroke={GREEN} strokeWidth={3} />
    <path d={`M100 ${170 - 100 * grow} Q${100 + 50 * grow} ${170 - 130 * grow} ${100 + 60 * grow} ${170 - 100 * grow} Q${100 + 30 * grow} ${170 - 90 * grow} 100 ${170 - 100 * grow} Z`}
      fill={`${GREEN}88`} stroke={GREEN} strokeWidth={3} />
  </svg>
);

/** An ambulance seen side-on, facing right, with a flashing light bar. */
const Ambulance: React.FC<{ flash?: number }> = ({ flash = 0 }) => (
  <svg width={230} height={120} viewBox="0 0 230 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${CHALK}66)` }}>
    <rect x={8} y={18} width={150} height={78} rx={8} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} />
    <path d="M158 40 L196 40 L222 66 L222 96 L158 96 Z" fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <path d="M168 48 L192 48 L210 66 L168 66 Z" fill={`${ICE}44`} stroke={ICE} strokeWidth={2} />
    <path d="M70 38 L96 38 L96 50 L108 50 L108 76 L96 76 L96 88 L70 88 Z" transform="translate(-6 -6) scale(0.9)" fill={`${ROSE}cc`} />
    <rect x={60} y={6} width={22} height={12} rx={3} fill={flash > 0.5 ? ROSE : `${ROSE}44`} style={{ filter: flash > 0.5 ? `drop-shadow(0 0 14px ${ROSE})` : undefined }} />
    <rect x={86} y={6} width={22} height={12} rx={3} fill={flash <= 0.5 ? ICE : `${ICE}44`} style={{ filter: flash <= 0.5 ? `drop-shadow(0 0 14px ${ICE})` : undefined }} />
    <circle cx={50} cy={100} r={15} fill="#000a" stroke={CHALK} strokeWidth={4} />
    <circle cx={186} cy={100} r={15} fill="#000a" stroke={CHALK} strokeWidth={4} />
  </svg>
);

/** A small car seen side-on. */
const Car: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={130} height={64} viewBox="0 0 130 64" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M6 44 L14 26 L40 24 L54 8 L92 8 L108 26 L124 30 L124 46 Z" fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeLinejoin="round" />
    <circle cx={34} cy={48} r={11} fill="#000a" stroke={color} strokeWidth={3} />
    <circle cx={98} cy={48} r={11} fill="#000a" stroke={color} strokeWidth={3} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const offer = c("The question offers four answers");
  const fail = c("Each one fails");
  const A: [string, number][] = [["it arises", offer + 1.2], ["it ceases", offer + 1.9],
    ["both", c("It both arises and ceases")], ["neither", c("It neither arises nor ceases")]];
  return (
    <AbsoluteFill>
      <Title at={0} color={DIM} size={34}>the koan</Title>
      <At x={960} y={260} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={62} speed={0.035} />
      </At>
      <At x={960} y={380} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={62} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      {A.map(([w, at], i) => (
        <At key={w} x={420 + i * 360} y={570} o={ramp(t, at, 0.4)} s={pop(t, fps, at)}>
          <SK c={CC[i]} s={34} strikeAt={fail + 0.3 + i * 0.3}>{w}?</SK>
        </At>
      ))}
      <Items items={[
        ["The question offers four answers", 960, 480, <W c={DIM} s={28}>four answers</W>],
        ["Each one fails", 960, 700, <W c={WARM} s={36} serif>each one fails</W>, { d: 1.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const StepScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("This is the fifth step of The Logic")}>The Logic · Step 5</Title>
      <Items items={[
        ["This is the fifth step of The Logic", 960, 190, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.2 }],
        ["The step asks why each answer falls", 960, 340, <K c={TEAL} s={32}>why each answer falls</K>, { pop: true }],
        ["why all four fall together", 960, 460, <K c={TEAL} s={32}>why all four fall together</K>, { pop: true }],
        ["is not a secret fifth place to stand", 960, 580, <K c={TEAL} s={32}>why “neither” is no fifth place</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const CornersScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const call = c("These are called the four corners");
  const verse = c("Nagarjuna's most famous verse has the same shape");
  const P: [number, number, string][] = [[400, 290, "it is"], [880, 290, "it is not"], [400, 590, "both"], [880, 590, "neither"]];
  const V: [string, number][] = [["not from itself", c("Not from itself, not from another")], ["not from another", c("Not from itself, not from another") + 0.9],
    ["not from both", c("not from both, and not without a cause")], ["not without a cause", c("not from both, and not without a cause") + 1.0]];
  return (
    <AbsoluteFill>
      <Title at={call}>the four corners</Title>
      <Svg>
        <DrawPath d="M400 290 L880 290 L880 590 L400 590 Z" p={ramp(t, call, 1.2)} color={DIM} width={3} len={1600} glow={false} />
      </Svg>
      {P.map(([x, y, w], i) => (
        <At key={w} x={x} y={y} s={pop(t, fps, call + 0.4 + i * 0.35)}><K c={CC[i]} s={30}>{w}</K></At>
      ))}
      <Items items={[
        ["whether the awakened one exists after death", 640, 440, <W c={CHALK} s={26}>the awakened one, after death?</W>, { until: "Nagarjuna's most famous verse has the same shape" }],
        ["he set the question aside, with all four answers", 640, 710, <W c={GOLD} s={30} serif>set aside, all four</W>, { until: "Nagarjuna's most famous verse has the same shape" }],
        ["Nagarjuna's most famous verse has the same shape", 640, 440, <W c={GREEN} s={28}>a sprout? a moment?</W>, { d: 0.6 }],
        ["Nagarjuna's most famous verse has the same shape", 1440, 220, <K c={TEAL} s={26}>Nagarjuna's verse</K>, { pop: true }],
        ["no thing is ever found to have arisen", 1440, 640, <W c={GOLD} s={32} serif>no thing found to have arisen</W>, { d: 0.6 }],
      ]} />
      {V.map(([w, at], i) => (
        <At key={w} x={1440} y={320 + i * 70} o={ramp(t, at, 0.4)}><W c={CC[i]} s={30}>{w}</W></At>
      ))}
      <At x={640} y={710} o={ramp(t, verse + 0.4, 0.5)}><W c={DIM} s={24}>self · other · both · neither</W></At>
    </AbsoluteFill>
  );
};

const ArisesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const there = c("Then the moment is there, from its own side");
  const yet = c("Yet this moment ceases as it arises");
  const fade = ramp(t, yet + 0.8, 1.2);
  return (
    <AbsoluteFill>
      <Title at={there - 0.6} color={ICE}>1 · it arises</Title>
      <At x={760} y={400} s={pop(t, fps, there)} o={1 - 0.75 * fade}>
        <div style={{ width: 240, height: 150, borderRadius: 14, background: `${ICE}33`, border: `4px solid ${ICE}`, boxShadow: `0 0 34px ${ICE}88`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={32}>moment</W></div>
      </At>
      <Items items={[
        ["Then the moment is there, from its own side", 760, 540, <W c={ICE} s={28}>there, from its own side</W>, { d: 0.6 }],
        ["Then the moment is there, from its own side", 1280, 330, <W c={DIM} s={28}>needs nothing</W>, { d: 2.4 }],
        ["Then the moment is there, from its own side", 1280, 400, <W c={DIM} s={28}>nothing for arising to do</W>, { d: 3.6 }],
        ["This is the view of permanence", 1280, 490, <K c={ICE} s={30}>permanence</K>, { pop: true }],
        ["Yet this moment ceases as it arises", 960, 700, <W c={GOLD} s={34} serif>yet this moment ceases as it arises</W>],
        ["Yet this moment ceases as it arises", 960, 200, <SK c={ICE} s={30} strikeAt={yet + 1.4}>it arises</SK>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const CeasesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const real = c("Then something real passes into nothing");
  const abs = c("An absence is always the absence of something");
  const borrow = c("its ceasing has nothing to borrow from");
  return (
    <AbsoluteFill>
      <Title at={real - 0.6} color={ROSE}>2 · it ceases</Title>
      <Items items={[
        ["Then something real passes into nothing", 960, 210, <W c={CHALK} s={30}>something real → nothing</W>, { until: "An absence is always the absence of something" }],
        ["This is the view of annihilation", 960, 290, <K c={ROSE} s={30}>annihilation</K>, { pop: true, until: "An absence is always the absence of something" }],
        ["An absence is always the absence of something", 960, 220, <W c={CHALK} s={30}>an absence is always the absence of something</W>],
        ["No milk in the jug", 1180, 680, <W c={ICE} s={32} serif>“no milk in the jug”</W>],
        ["No milk in the jug", 640, 580, <K c={CHALK} s={28}>milk</K>, { d: 1.6 }],
        ["No milk in the jug", 640, 650, <W c={DIM} s={24}>it borrows its sense from milk</W>, { d: 2.2, until: "its ceasing has nothing to borrow from" }],
        ["its ceasing has nothing to borrow from", 640, 660, <SK c={DIM} s={26} strikeAt={borrow + 1.2}>an arisen moment, found</SK>],
        ["its ceasing has nothing to borrow from", 960, 790, <W c={GOLD} s={30} serif>its ceasing has nothing to borrow from</W>, { d: 0.6 }],
      ]} />
      <At x={1180} y={460} s={pop(t, fps, abs + 1.2)} o={ramp(t, abs + 1.2, 0.4)}><Jug /></At>
      <Flow x1={720} y1={580} x2={1060} y2={480} color={DIM} p={between(t, c("No milk in the jug") + 1.8, borrow, 0.5)} pulses={false} />
      <At x={960} y={300} o={ramp(t, borrow + 0.8, 0.4)}><SK c={ROSE} s={28} strikeAt={borrow + 1.6}>it ceases</SK></At>
    </AbsoluteFill>
  );
};

const BothNeitherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const joined = c("Then two failed answers are joined");
  const light = c("Light and darkness cannot sit in one spot");
  const sub = c("The subtlest corner");
  const built = c("is built out of arising and ceasing");
  return (
    <AbsoluteFill>
      <At x={520} y={140} o={ramp(t, joined - 0.6, 0.5)}><Glow color={VIOLET} size={40} serif>3 · both</Glow></At>
      <At x={1400} y={140} o={ramp(t, sub - 0.4, 0.5)}><Glow color={GOLD} size={40} serif>4 · neither</Glow></At>
      <Items items={[
        ["Then two failed answers are joined", 400, 270, <SK c={ICE} s={26} strikeAt={joined}>it is</SK>],
        ["Then two failed answers are joined", 520, 270, <W c={CHALK} s={30}>+</W>, { d: 0.3 }],
        ["Then two failed answers are joined", 660, 270, <SK c={ROSE} s={26} strikeAt={joined}>it is not</SK>, { d: 0.5 }],
        ["Then two failed answers are joined", 520, 350, <W c={DIM} s={26}>the faults of each</W>, { d: 1.2 }],
        ["Light and darkness cannot sit in one spot", 520, 680, <W c={CHALK} s={28}>light and dark in one spot?</W>, { d: 0.6 }],
        ["The subtlest corner", 1400, 270, <W c={CHALK} s={28}>“neither arising nor ceasing”</W>, { d: 0.4 }],
        ["is built out of arising and ceasing", 1400, 640, <W c={DIM} s={26}>built from the two it denies</W>, { d: 1.0 }],
        ["who could know it, and by what", 1400, 740, <W c={GOLD} s={30} serif>who could know it, and by what?</W>],
        ["who could know it, and by what", 1400, 200, <SK c={GOLD} s={26} strikeAt={c("who could know it, and by what") + 2.0}>neither</SK>, { d: 1.2 }],
      ]} />
      {/* light and darkness in one spot */}
      <At x={520} y={500} s={pop(t, fps, light)} o={ramp(t, light, 0.4)}>
        <svg width={220} height={220} viewBox="0 0 220 220" style={{ overflow: "visible" }}>
          <path d="M110 10 A100 100 0 0 1 110 210 Z" fill="#0b0b1a" stroke={DIM} strokeWidth={4} />
          <path d="M110 10 A100 100 0 0 0 110 210 Z" fill={`${GOLD}cc`} stroke={GOLD} strokeWidth={4} style={{ filter: `drop-shadow(0 0 16px ${GOLD})` }} />
        </svg>
      </At>
      <Crossed x={520} y={500} at={light + 1.4} size={90} />
      {/* "neither" built out of two bricks */}
      <At x={1310} y={450} s={pop(t, fps, built)}><K c={ICE} s={30}>arising</K></At>
      <At x={1500} y={450} s={pop(t, fps, built + 0.5)}><K c={ROSE} s={30}>ceasing</K></At>
      <At x={1400} y={450} o={ramp(t, built + 0.9, 0.5)}>
        <div style={{ width: 460, height: 130, borderRadius: 18, border: `3px dashed ${GOLD}` }} />
      </At>
      <At x={1400} y={360} o={ramp(t, built + 0.9, 0.5)}><W c={GOLD} s={26}>“neither … nor …”</W></At>
    </AbsoluteFill>
  );
};

const AssumptionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fall = c("So the four corners fall together");
  const find = c("Each assumes there is something findable");
  const edge = c("The old word for an extreme means an edge");
  const labels = ["it is", "it is not", "both", "neither"];
  return (
    <AbsoluteFill>
      <Title at={fall}>one assumption under all four</Title>
      {labels.map((w, i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 360} y={230} o={ramp(t, fall + i * 0.2, 0.4) * (1 - 0.6 * ramp(t, edge, 0.6))}><K c={CC[i]} s={28}>{w}</K></At>
          <Flow x1={420 + i * 360} y1={270} x2={960} y2={400} color={CC[i]} p={ramp(t, find + 0.3 + i * 0.2, 0.6) * (1 - ramp(t, edge, 0.6))} pulses={false} />
        </React.Fragment>
      ))}
      <At x={960} y={430} s={pop(t, fps, find + 0.6)} o={1 - ramp(t, edge, 0.6)}><K c={WARM} s={32}>something findable</K></At>
      <Items items={[
        ["Each assumes there is something findable", 960, 510, <W c={DIM} s={26}>a bearer with a status of its own</W>, { d: 1.4, until: "The old word for an extreme means an edge" }],
        ["In the koan that bearer is the it", 960, 600, <K c={WARM} s={38}>“it”</K>, { pop: true, until: "The old word for an extreme means an edge" }],
      ]} />
      {/* the extreme as an edge: places on a field where a thing could stand */}
      <At x={960} y={540} o={ramp(t, edge, 0.6)}>
        <div style={{ width: 900, height: 300, borderRadius: 10, border: `3px solid ${DIM}88` }} />
      </At>
      {labels.map((w, i) => {
        const pos: [number, number][] = [[510, 390], [1410, 390], [510, 690], [1410, 690]];
        return (
          <At key={w} x={pos[i][0]} y={pos[i][1]} s={pop(t, fps, edge + 0.8 + i * 0.3)}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: `${CC[i]}66`, border: `3px solid ${CC[i]}`, boxShadow: `0 0 16px ${CC[i]}` }} />
          </At>
        );
      })}
      <Items items={[
        ["The old word for an extreme means an edge", 960, 320, <W c={CHALK} s={30}>extreme = an edge</W>, { d: 0.4 }],
        ["The old word for an extreme means an edge", 960, 540, <W c={GOLD} s={30} serif>a place for a thing to stand</W>, { d: 2.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const FireScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const out = c("When a fire goes out, in which direction has it gone");
  const no = c("That does not apply");
  const apart = c("The question asks for a fire apart from its burning");
  const k = 1 - ramp(t, out + 0.8, 1.4);
  const D: [number, number, string][] = [[760, 210, "north?"], [1020, 400, "east?"], [760, 600, "south?"], [500, 400, "west?"]];
  return (
    <AbsoluteFill>
      <Title at={c("a wanderer named Vacchagotta")} color={WARM}>the fire that went nowhere</Title>
      <At x={760} y={390} o={ramp(t, c("a wanderer named Vacchagotta"), 0.5)}><Flame k={Math.max(0.02, k)} /></At>
      {D.map(([x, y, w], i) => (
        <At key={w} x={x} y={y} o={ramp(t, out + 1.8 + i * 0.3, 0.4) * (1 - 0.7 * ramp(t, no, 0.5))}><W c={DIM} s={30}>{w}</W></At>
      ))}
      <Items items={[
        ["That does not apply", 1420, 300, <W c={GOLD} s={42} serif>“That does not apply.”</W>],
        ["Not because the fire went too far to see, or into nothing", 1420, 390, <W c={DIM} s={26}>not too far to see · not into nothing</W>],
        ["The question asks for a fire apart from its burning", 1420, 480, <SK c={DIM} s={26} strikeAt={apart + 2.0}>a fire apart from its burning</SK>],
        ["even while the Buddha is alive", 1420, 600, <Person color={GOLD} size={110} />, { pop: true, d: -0.6 }],
        ["even while the Buddha is alive", 1420, 700, <W c={CHALK} s={26}>the four fail even while he lives</W>],
        ["even while the Buddha is alive", 960, 790, <W c={TEAL} s={30} serif>never about death</W>, { d: 2.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const KingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Is the present king of France bald");
  const nyn = c("Neither yes nor no");
  return (
    <AbsoluteFill>
      <Title at={c("This is not a trick that breaks logic")}>not a trick that breaks logic</Title>
      <At x={960} y={330} s={pop(t, fps, q)}><Crown /></At>
      <Items items={[
        ["Is the present king of France bald", 960, 470, <W c={CHALK} s={36} serif>is the present king of France bald?</W>, { d: 0.4 }],
        ["Is the present king of France bald", 700, 570, <K c={GREEN} s={28}>yes?</K>, { d: 1.6 }],
        ["Is the present king of France bald", 1220, 570, <K c={ROSE} s={28}>no?</K>, { d: 1.9 }],
        ["Neither yes nor no", 960, 570, <SK c={DIM} s={26} strikeAt={nyn + 2.6}>a present king of France</SK>, { d: 1.0 }],
        ["The question has nothing to be about", 960, 690, <W c={GOLD} s={34} serif>nothing for it to be about</W>],
        ["The question has nothing to be about", 960, 770, <W c={DIM} s={28}>the koan has this shape</W>, { d: 2.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const FifthScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const move = c("Here the habit makes its most refined move");
  const beyond = c("so surely the truth lies beyond them");
  const C: [string, string, number, number][] = [
    ["The Absolute", "the Absolute", 620, 470], ["The Ineffable", "the Ineffable", 1300, 470],
    ["Pure Awareness, prior to every concept", "Pure Awareness", 620, 600], ["Or a timeless Now the moments pass through", "a timeless Now", 1300, 600],
  ];
  return (
    <AbsoluteFill>
      <Title at={move} color={WARM}>the most refined move</Title>
      <FallenRow y={220} at={move + 0.6} />
      <At x={960} y={360} s={pop(t, fps, beyond)}><K c={WARM} s={34}>a fifth corner: “beyond”?</K></At>
      {C.map(([cue, w, x, y]) => (
        <React.Fragment key={w}>
          <At x={x} y={y} s={pop(t, fps, c(cue))} o={ramp(t, c(cue), 0.3)}><K c={DIM} s={28}>{w}</K></At>
          <Flow x1={960} y1={390} x2={x} y2={y - 30} color={WARM} p={ramp(t, c(cue) + 0.2, 0.5)} pulses={false} dash />
        </React.Fragment>
      ))}
      <Items items={[
        ["Or a timeless Now the moments pass through", 960, 730, <W c={DIM} s={26}>or an awareness watching them</W>, { d: 2.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const PullScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neg = c("In the years of I AM, I negated a great deal");
  const left = c("What was left seemed beyond every description");
  const look = c("the one thing I had never looked for");
  const N: [number, number, string][] = [[560, 300, "not thoughts"], [1360, 300, "not sensations"], [560, 520, "not the body"], [1360, 520, "not the world"]];
  return (
    <AbsoluteFill>
      <Title at={c("The author knows this pull from the inside")} color={GOLD}>the pull, from the inside</Title>
      <At x={960} y={420} s={pop(t, fps, neg - 0.4)}><Person color={CHALK} size={170} /></At>
      {N.map(([x, y, w], i) => (
        <At key={w} x={x} y={y} o={between(t, neg + 0.8 + i * 0.5, left, 0.4)}><W c={DIM} s={28}>{w}</W></At>
      ))}
      <At x={960} y={420} o={between(t, left + 0.4, look + 1.6, 0.6) * 0.8}>
        <div style={{ width: 520, height: 300, borderRadius: "50%", border: `3px dashed ${VIOLET}`, boxShadow: `0 0 50px ${VIOLET}55` }} />
      </At>
      <Items items={[
        ["In the years of I AM, I negated a great deal", 960, 200, <W c={CHALK} s={30} serif>“I negated a great deal”</W>, { until: "What was left seemed beyond every description" }],
        ["What was left seemed beyond every description", 960, 200, <W c={VIOLET} s={30} serif>“beyond every description”</W>],
        ["What was left seemed beyond every description", 1360, 420, <SK c={VIOLET} s={26} strikeAt={look + 1.4}>beyond every question</SK>, { d: 1.6 }],
        ["the one thing I had never looked for", 960, 680, <W c={GOLD} s={34} serif>“the one thing I had never looked for”</W>],
        ["the one thing I had never looked for", 560, 420, <Magnifier />, { d: 0.6, pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const DoorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const say = c("One should not say empty, nor not empty");
  const ex = c("The fifth corner gets no exemption");
  const F = ["empty", "not empty", "both", "neither"];
  const B = ["the Absolute", "the Ineffable", "Pure Awareness", "a timeless Now"];
  return (
    <AbsoluteFill>
      <Title at={c("Nagarjuna closes this door himself")} color={TEAL}>Nagarjuna closes the door</Title>
      <Items items={[
        ["Rejecting all four answers is not a fifth theory", 960, 200, <K c={TEAL} s={30}>not all four ≠ a fifth theory</K>, { pop: true, until: "Empty is a word that does a job" }],
        ["It removes, and installs nothing", 960, 280, <W c={CHALK} s={30}>removes, installs nothing</W>, { until: "Empty is a word that does a job" }],
        ["Empty is a word that does a job", 960, 230, <W c={TEAL} s={32} serif>“empty”: a word that undoes a grasp</W>],
        ["Beyond words means there is nothing further to grasp", 960, 520, <W c={GOLD} s={32} serif>“beyond words”: nothing further to grasp</W>],
        ["Beyond words means there is nothing further to grasp", 960, 580, <W c={DIM} s={26}>not something words fail to reach</W>, { d: 2.6 }],
        ["the same substance with a quieter name", 960, 670, <W c={WARM} s={28}>otherwise: the same substance, a quieter name</W>],
      ]} />
      {F.map((w, i) => (
        <At key={w} x={510 + i * 300} y={390} o={ramp(t, say + i * 0.6, 0.4) * (1 - ramp(t, c("Beyond words means there is nothing further to grasp") - 0.4, 0.5))}>
          <SK c={CC[i]} s={26} strikeAt={say + 2.8 + i * 0.15}>{w}</SK>
        </At>
      ))}
      {B.map((w, i) => (
        <At key={w} x={510 + i * 300} y={770} o={ramp(t, ex - 0.2 + i * 0.15, 0.4)}>
          <SK c={DIM} s={24} strikeAt={ex + 0.8 + i * 0.2}>{w}</SK>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const TwoWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("With the logic of substance, a moment is here");
  const dep = c("With the logic of dependency, no moment is found standing there first");
  const snd = c("A sound is sounding");
  const fourth = c("This is not the fourth corner");
  return (
    <AbsoluteFill>
      <Title at={sub}>the koan, seen two ways</Title>
      <At x={520} y={200} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>substance</K></At>
      <At x={520} y={420} s={pop(t, fps, sub + 0.6)}>
        <div style={{ width: 180, height: 110, borderRadius: 14, background: `${WARM}44`, border: `4px solid ${WARM}`, boxShadow: `0 0 30px ${WARM}88`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={28}>moment</W></div>
      </At>
      {["it is", "it is not", "both", "neither"].map((w, i) => {
        const pos: [number, number][] = [[340, 300], [700, 300], [340, 540], [700, 540]];
        return <At key={w} x={pos[i][0]} y={pos[i][1]} o={ramp(t, sub + 1.6 + i * 0.3, 0.4)}><K c={CC[i]} s={22}>{w}</K></At>;
      })}
      <Items items={[
        ["the koan feels like a trap", 520, 640, <W c={WARM} s={28}>one must be true: a trap</W>],
      ]} />
      <At x={1400} y={200} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>dependency</K></At>
      <At x={1400} y={400} s={pop(t, fps, snd - 0.2)}><PassingCar size={130} /></At>
      <Sound x={1400} y={410} at={snd + 0.2} dur={9} r1={240} />
      <Items items={[
        ["With the logic of dependency, no moment is found standing there first", 1400, 290, <SK c={DIM} s={22} strikeAt={dep + 2.6}>a moment there first</SK>, { d: 1.2, until: "A sound is sounding", ud: 0.6 }],
        ["Seen from before, it is called arising", 1220, 560, <W c={GREEN} s={26}>“arising”: from before</W>],
        ["Seen from after, ceasing", 1580, 560, <W c={ROSE} s={26}>“ceasing”: from after</W>],
        ["This is not the fourth corner", 1400, 650, <SK c={GOLD} s={24} strikeAt={fourth + 1.2}>“neither”: a strange status</SK>],
        ["It gives the it no status of its own at all", 960, 740, <W c={GOLD} s={32} serif>no status of its own at all</W>, { d: 0.6 }],
        ["And the sound is fully heard", 960, 810, <W c={ICE} s={28}>the sound is fully heard</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MedicineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const med = c("Nagarjuna uses them as medicine");
  const steps = c("Chandrakirti reads these as steps for different people");
  const noon = c("The car went by at noon is still true");
  const R = ["real", "not real", "both", "neither"];
  return (
    <AbsoluteFill>
      <Title at={c("None of this makes the four corners forbidden words")} color={GREEN}>not forbidden words</Title>
      {R.map((w, i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 360} y={300} s={pop(t, fps, med + 0.5 + i * 0.4)}>
            <svg width={90} height={110} viewBox="0 0 90 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${CC[i]}88)` }}>
              <rect x={30} y={4} width={30} height={16} rx={4} fill={`${CC[i]}66`} stroke={CC[i]} strokeWidth={3} />
              <rect x={14} y={22} width={62} height={84} rx={14} fill={`${CC[i]}22`} stroke={CC[i]} strokeWidth={4} />
            </svg>
          </At>
          <At x={420 + i * 360} y={400} o={ramp(t, med + 0.7 + i * 0.4, 0.4)}><W c={CHALK} s={28}>{w}</W></At>
          <At x={420 + i * 360} y={460} o={ramp(t, steps + 1.0 + i * 0.3, 0.4)}><W c={DIM} s={22}>for one grasping</W></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Chandrakirti reads these as steps for different people", 960, 190, <W c={TEAL} s={28}>steps for different people</W>, { d: 0.4 }],
        ["The car went by at noon is still true", 960, 640, <W c={GOLD} s={32} serif>“the car went by at noon”: true</W>, { d: 0.6 }],
        ["What fails is an it found doing the starting", 1400, 740, <SK c={DIM} s={24} strikeAt={c("What fails is an it found doing the starting") + 1.4}>an “it” doing the starting</SK>],
      ]} />
      <At x={600} y={620} s={pop(t, fps, noon)}><PassingCar size={110} /></At>
      <Sound x={600} y={630} at={noon + 0.3} dur={4} r1={200} />
    </AbsoluteFill>
  );
};

const SpinScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const el = c("Nagarjuna's word for what stops is elaboration");
  const stop = c("the spinning stops by itself");
  const spinT = Math.min(t, stop + 1.5);
  const S = ["it is", "it is not", "it came", "it went"];
  const fade = ramp(t, stop + 0.8, 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("What is left when the four corners fall is not a blank")}>not a blank</Title>
      <Items items={[
        ["Nagarjuna's word for what stops is elaboration", 960, 200, <K c={VIOLET} s={30}>elaboration</K>, { pop: true }],
        ["Nagarjuna's word for what stops is elaboration", 960, 270, <W c={DIM} s={24}>the mind spinning out</W>, { d: 0.8 }],
        ["the spinning stops by itself", 960, 450, <SK c={WARM} s={28} strikeAt={stop + 0.6}>“it”</SK>],
        ["That stopping is called peace", 960, 700, <W c={GOLD} s={44} serif>peace</W>],
      ]} />
      <At x={960} y={450} s={pop(t, fps, el + 1.0)} o={1 - ramp(t, stop - 0.2, 0.3)}><K c={WARM} s={28}>“it”</K></At>
      {S.map((w, i) => {
        const a = (spinT - el) * 1.2 + (i * Math.PI) / 2;
        return (
          <At key={w} x={960 + 300 * Math.cos(a)} y={450 + 150 * Math.sin(a)} o={ramp(t, c("it is, it is not, it came, it went") + i * 0.4, 0.4) * (1 - fade)}>
            <W c={CC[i]} s={30}>{w}</W>
          </At>
        );
      })}
    </AbsoluteFill>
  );
};

const ThoughtScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ap = c("A thought appears");
  const Q: [number, number, number, string][] = [[560, 300, c("Where did it come from"), "where from?"], [960, 210, c("Where did it come from") + 1.2, "where does it stay?"],
    [1360, 300, c("Where did it go"), "where to?"]];
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, ap)}><Thought /></At>
      {Q.map(([x, y, at, w]) => (
        <At key={w} x={x} y={y} o={ramp(t, at, 0.4) * (1 - 0.6 * ramp(t, c("Yet the thought was thought, and you acted on it"), 0.5))}><W c={DIM} s={30}>{w}</W></At>
      ))}
      <Items items={[
        ["Where did it go", 960, 540, <W c={CHALK} s={28}>no whereabouts</W>, { d: 1.2 }],
        ["Yet the thought was thought, and you acted on it", 960, 610, <W c={GOLD} s={32} serif>yet thought, and acted on</W>],
        ["a quiet mind is not the same as this", 960, 710, <W c={CHALK} s={28}>a quiet mind is not this</W>],
        ["Stillness with the habit intact has only paused", 960, 780, <W c={DIM} s={26}>the habit intact: only paused</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SirenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("An ambulance passes");
  const none = c("There is none");
  const aside = c("Yet the siren is heard, and cars pull aside");
  const LANE = 360, X0 = 160, SPAN = 1600, V = 190, SOUND = 520;
  const xAt = (u: number) => X0 + (((u - st) * V) % SPAN + SPAN) % SPAN;
  const ax = xAt(t);
  const edge = Math.min(1, (ax - X0) / 120, (X0 + SPAN - ax) / 120);
  // Doppler: rings sent out from where the ambulance was; crowded ahead (high), spread behind (low)
  const rings: React.ReactNode[] = [];
  if (t > st) {
    for (let k = 0; k < 14; k++) {
      const te = Math.floor((t - st) / 0.3) * 0.3 - k * 0.3 + st;
      if (te < st) break;
      const age = t - te, r = SOUND * age;
      const ex = xAt(te);
      if (Math.abs(ex - ax) > SPAN / 2) continue; // skip rings from before the wrap
      rings.push(<circle key={k} cx={ex} cy={LANE} r={r} fill="none" stroke={GOLD} strokeWidth={3}
        opacity={Math.max(0, 0.75 - age / 2.2) * ramp(t, st, 0.5)} />);
    }
  }
  const pull = ramp(t, aside + 0.4, 0.9);
  return (
    <AbsoluteFill>
      <Title at={st} color={ROSE}>an ambulance passes</Title>
      <Svg>
        <defs><clipPath id="aa05road"><rect x={0} y={170} width={1920} height={400} /></clipPath></defs>
        <g clipPath="url(#aa05road)">{rings}</g>
        <path d={`M120 ${LANE + 70} L1800 ${LANE + 70}`} stroke={DIM} strokeWidth={3} strokeDasharray="26 22" opacity={ramp(t, st, 0.5)} />
      </Svg>
      <At x={ax} y={LANE} o={ramp(t, st, 0.4) * Math.max(0, edge)}><Ambulance flash={Math.floor(t * 3) % 2} /></At>
      <At x={760} y={LANE + 120 + 36 * pull} o={ramp(t, st + 0.6, 0.5)}><Car color={TEAL} /></At>
      <At x={1240} y={LANE + 120 + 36 * pull} o={ramp(t, st + 0.9, 0.5)}><Car color={VIOLET} /></At>
      <Items items={[
        ["Its siren is high as it comes", 1560, 200, <K c={ICE} s={26}>coming: high</K>, { pop: true }],
        ["and drops as it goes", 360, 200, <K c={ROSE} s={26}>going: low</K>, { pop: true }],
        ["while for the driver it never changes", 960, 200, <K c={GOLD} s={26}>for the driver: never changes</K>, { pop: true }],
        ["So what is its pitch", 960, 600, <W c={CHALK} s={32} serif>so what is its pitch?</W>, { until: "High? Low? Both? Neither" }],
        ["Each answer looks for a pitch sitting in the siren on its own", 960, 720,
          <SK c={DIM} s={26} strikeAt={none}>a pitch in the siren, on its own</SK>, { d: 0.4 }],
        ["Yet the siren is heard, and cars pull aside", 960, 810, <W c={GOLD} s={34} serif>yet the siren is heard, and cars pull aside</W>],
      ]} />
      {["high?", "low?", "both?", "neither?"].map((w, i) => (
        <At key={w} x={600 + i * 240} y={630} o={ramp(t, c("High? Low? Both? Neither") + i * 0.45, 0.4)}>
          <SK c={CC[i]} s={26} strikeAt={none + 0.2 + i * 0.15}>{w}</SK>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const SelfLapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lapAt = c("Sit down, and you have a lap");
  const stand = c("where did your lap go");
  const sit = ramp(t, lapAt, 0.8) * (1 - ramp(t, stand - 1.6, 1.0));
  return (
    <AbsoluteFill>
      <Title at={c("The four corners can be asked of anything")}>asked of anything</Title>
      <Items items={[
        ["The self", 560, 220, <K c={ICE} s={30}>the self</K>, { pop: true }],
        ["The self", 560, 380, <Person color={ICE} size={150} />, { d: 0.3 }],
        ["Then it could never learn or change", 560, 510, <W c={DIM} s={24}>exists? then it could never change</W>],
        ["Then it could never learn or change", 560, 560, <W c={DIM} s={24}>does not? then who remembers?</W>, { d: 2.0 }],
        ["Then it could never learn or change", 560, 630, <SK c={DIM} s={24} strikeAt={c("Thinking, choosing and caring go on as before") - 0.3}>a self found on its own</SK>, { d: 3.4 }],
        ["Thinking, choosing and caring go on as before", 560, 710, <W c={GREEN} s={26}>thinking, choosing, caring go on</W>, { d: 0.6 }],
        ["An object", 1360, 220, <K c={TEAL} s={30}>an object</K>, { pop: true }],
        ["Sit down, and you have a lap", 1360, 410, <Sitter sit={sit} />],
        ["where did your lap go", 1360, 560, <W c={CHALK} s={28} serif>“where did your lap go?”</W>],
        ["There never was a lap apart from the sitting", 1360, 630, <SK c={DIM} s={24} strikeAt={c("There never was a lap apart from the sitting") + 1.4}>a lap apart from the sitting</SK>],
        ["There never was a lap apart from the sitting", 1360, 710, <W c={GOLD} s={26}>nothing was lost</W>, { d: 2.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const CausePersonScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sp = c("Does a sprout come from itself");
  const lit = c("As one flame lights another");
  const grow = ramp(t, sp, 2.5);
  const second = ramp(t, lit + 0.6, 1.0);
  const Q = ["itself?", "another?", "both?", "no cause?"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["A cause", 560, 160, <K c={GREEN} s={30}>a cause</K>, { pop: true }],
        ["Does a sprout come from itself", 560, 360, <Sprout grow={grow} />],
        ["Yet rice seed gives rice, never barley", 560, 610, <W c={GREEN} s={28}>rice seed gives rice, never barley</W>],
        ["Yet rice seed gives rice, never barley", 560, 680, <W c={DIM} s={24}>the farmer's work is not wasted</W>, { d: 2.0 }],
        ["The person", 1360, 160, <K c={ROSE} s={30}>the person</K>, { pop: true }],
        ["Where has someone gone who has died", 1360, 250, <W c={CHALK} s={26}>where has someone gone?</W>, { d: 0.4 }],
        ["No person was found apart from the living", 1360, 320, <SK c={DIM} s={24} strikeAt={c("No person was found apart from the living") + 1.6}>a person apart from the living</SK>],
        ["As one flame lights another", 1240, 480, <Flame size={90} />],
        ["Love and grief stay exactly where they were", 1360, 680, <W c={ROSE} s={30} serif>love and grief stay</W>],
      ]} />
      {Q.map((w, i) => (
        <At key={w} x={300 + (i % 2) * 520} y={300 + Math.floor(i / 2) * 140} o={between(t, sp + 0.6 + i * 0.5, c("Yet rice seed gives rice, never barley"), 0.4)}>
          <SK c={DIM} s={22} strikeAt={sp + 3.2 + i * 0.2}>{w}</SK>
        </At>
      ))}
      <At x={1480} y={480} o={second}><Flame size={90} k={0.2 + 0.8 * second} /></At>
      <Flow x1={1290} y1={470} x2={1430} y2={470} color={GOLD} p={ramp(t, lit + 0.3, 0.6)} />
      <At x={1360} y={580} o={ramp(t, lit + 1.4, 0.5)}><W c={DIM} s={24}>no traveller carried across</W></At>
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to one sound until it ends");
  const q = c("Did it cease? Both? Neither");
  const beyond = c("And when you reach it is beyond all that");
  const swing = 8 * Math.sin((t - b) * 5) * Math.exp(-Math.max(0, t - b) * 0.6) * (t > b ? 1 : 0);
  const A = ["arise?", "cease?", "both?", "neither?"];
  return (
    <AbsoluteFill>
      <Title at={c("So, try it")} color={GOLD}>try it</Title>
      <At x={960} y={340} s={pop(t, fps, b - 0.3)}><PassingCar swing={swing} size={160} /></At>
      <Sound x={960} y={360} at={b + 0.4} dur={7} r1={440} />
      {A.map((w, i) => (
        <At key={w} x={420 + i * 360} y={560} o={ramp(t, q - 1.2 + i * 0.6, 0.4) * (1 - ramp(t, beyond, 0.5))}><K c={CC[i]} s={28}>{w}</K></At>
      ))}
      <Items items={[
        ["look for the it, a sound apart from the sounding", 960, 650, <SK c={DIM} s={26} strikeAt={c("and the sound was heard in full") - 0.4}>a sound apart from the sounding</SK>, { until: "And when you reach it is beyond all that" }],
        ["and the sound was heard in full", 960, 740, <W c={ICE} s={34} serif>heard in full</W>, { until: "And when you reach it is beyond all that" }],
        ["And when you reach it is beyond all that", 960, 620, <SK c={WARM} s={30} strikeAt={beyond + 3.4}>“beyond all that”</SK>],
        ["And when you reach it is beyond all that", 1240, 620, <Magnifier />, { d: 1.6, pop: true }],
        ["And when you reach it is beyond all that", 960, 740, <W c={GOLD} s={32} serif>look for that too</W>, { d: 2.2 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "This moment ceases as it arises"], ["web", "This is the fifth step of The Logic"], ["sea", "These are called the four corners"],
    ["doubt", "Then the moment is there, from its own side"], ["search", "So the four corners fall together"],
    ["vivid", "a wanderer named Vacchagotta"], ["doubt", "Here the habit makes its most refined move"], ["web", "Nagarjuna closes this door himself"],
    ["search", "With the logic of substance, a moment is here"], ["whole", "None of this makes the four corners forbidden words"],
    ["sea", "What is left when the four corners fall is not a blank"], ["open", "An ambulance passes"],
    ["vivid", "The four corners can be asked of anything"],
    ["whole", "So, try it"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["This moment ceases as it arises", <KoanScene />],
    ["This is the fifth step of The Logic", <StepScene />],
    ["These are called the four corners", <CornersScene />],
    ["Then the moment is there, from its own side", <ArisesScene />],
    ["Then something real passes into nothing", <CeasesScene />],
    ["Then two failed answers are joined", <BothNeitherScene />],
    ["So the four corners fall together", <AssumptionScene />],
    ["a wanderer named Vacchagotta", <FireScene />],
    ["This is not a trick that breaks logic", <KingScene />],
    ["Here the habit makes its most refined move", <FifthScene />],
    ["The author knows this pull from the inside", <PullScene />],
    ["Nagarjuna closes this door himself", <DoorScene />],
    ["With the logic of substance, a moment is here", <TwoWaysScene />],
    ["None of this makes the four corners forbidden words", <MedicineScene />],
    ["What is left when the four corners fall is not a blank", <SpinScene />],
    ["A thought appears", <ThoughtScene />],
    ["An ambulance passes", <SirenScene />],
    ["The four corners can be asked of anything", <SelfLapScene />],
    ["A cause", <CausePersonScene />],
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
