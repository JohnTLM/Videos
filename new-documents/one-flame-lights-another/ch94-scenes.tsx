// Bonus: One Flame Lights Another (karma and rebirth). Explainer drawings timed to the narration.
// Arc: the two lamps -> the puzzle -> the traveler picture, sleep, two extremes, the middle -> the search for a carrier,
// put nothing in its place, three kinds of claim -> the early teaching (awakening, Sati, fire and fuel, Kassapa, the
// wind, the fire gone out) -> the schools' bridges, empty karma, the joint, the mere I -> bardo and clear light, the
// very subtle mind, firewood and ash, the fox -> objections -> living, dying, grieving, the end -> close on the lamps.
// Stance: no soul, stream, store or awareness is drawn as a carrier or a ground; a floor, a passenger or a pipe is drawn
// only in order to be crossed out. The clear light is never a light behind things. Lamps are always two lamps.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the lamps and the puzzle
  "A lamp burns through the night", "its flame is not the flame of the first watch", "Now light a second lamp from the first",
  "Nothing passes over", "It was lit from it", "This is the oldest image the Buddhist tradition has for rebirth",
  "Every Buddhist tradition teaches that actions bear fruit", "Every Buddhist tradition also teaches that there is no self",
  "these can look like a contradiction", "who is reborn", "in what sense is the next life mine",
  "The contradiction is only apparent", "continuity needs a carrier", "no harder to make sense of than waking up in the morning",
  // the traveler picture and sleep
  "Most of us picture rebirth like this", "The body is its house", "moves into a new house", "The skeptic uses the same picture",
  "The believer and the skeptic agree that rebirth would need a traveler",
  "But look at an ordinary day", "No witness keeps watch through the gap", "The body of ten years ago has been replaced",
  "the person who wakes is, by every ordinary standard, the person who fell asleep",
  "If continuity within a life needs no traveler",
  // two extremes, the middle
  "From the start, the Buddha taught against two opposite views", "The first is eternalism", "The second is annihilationism",
  "the shadow of eternalism, not its cure", "The rice that grows from a seed has something to do with the seed",
  "Between these two, the Buddha taught dependent arising", "Life conditions life", "Deed conditions fruit",
  "Nothing carries the one into the other", "And nothing cuts them apart",
  // the search
  "tests every candidate for a carrier in the same way", "Then it looks", "The Sanskrit word for that nature is",
  "Not made", "Not depending on anything else", "Not changing",
  "A soul that never changes could not learn", "A stream of subtle consciousness", "A store of seeds",
  "turns out to be one more dependent appearance", "And so no carrier is found",
  "But notice what is not lost", "The person still wakes", "Still keeps promises", "Still meets the fruit of what they have done",
  "One rule matters here more than any other", "put nothing in its place", "Not a subtler soul", "Not a stream", "Not an energy",
  "Not even emptiness itself", "catches each replacement as it appears",
  "It also helps to keep three kinds of claim apart", "The logic shows that rebirth does not need a carrier",
  "The tradition affirms that rebirth happens", "is a question for evidence", "The first does not prove the second",
  "Emptiness does not prove rebirth", "the one objection that seemed to stand against it",
  // the early teaching
  "Rebirth is not a later addition", "he recollected his own past lives", "Then he saw beings dying and being reborn",
  "Then he knew the ending of the defilements", "In none of these does he see a self passing from life to life", "Not a passenger",
  "The clearest correction came to a monk named", "it is this very same consciousness that roams and transmigrates",
  "He was not crude", "He posited consciousness",
  "The Buddha rebuked him sharply", "Consciousness, he said, arises dependently", "A fire on logs is a log fire",
  "A fire on grass is a grass fire", "Eye consciousness", "Ear consciousness", "Mind consciousness",
  "Consciousness is not one thing moving from fuel to fuel", "imagined a fire apart from its fuel",
  "So a modern reader who rejects rebirth", "They agree with", "And they disagree with the Buddha",
  "A naked ascetic named Kassapa", "The Buddha declined both", "the one who acts is the one who experiences the result",
  "one acts and another experiences is annihilationism", "he taught by the middle", "This is not evasion", "on what does this depend",
  "Another wanderer asked what a being depends on", "When a flame is tossed by the wind", "it is fueled by the wind",
  "a being between lives is fueled by craving", "Even in the gap, there is dependence, not a carrier", "but the thirst for being",
  "why that ending destroys no one",
  "The Buddha also left some questions unanswered", "which direction did it go", "The question does not apply",
  "when the fuel ran out, it went out", "but the ending of the fuel",
  // the schools' bridges, empty karma, the joint, the mere I
  "The early teaching left a problem", "What connects them", "The schools gave many answers",
  "neither the same as body and mind", "the past deed still exists", "plants a seed in the mental stream",
  "a storehouse consciousness", "linking consciousness in the next", "like an echo",
  "Each bridge names something", "a soul by another name", "each is harmless", "The echo, especially, is exact",
  "asked a more radical question", "Is any bridge needed at all", "If an action had a nature of its own", "it would be permanent",
  "it would ripen again and again", "So the agent, the action and the fruit are all empty", "this is exactly why they work",
  "as the link between a rice seed and rice is real", "a gap only for things with a nature of their own",
  "compares karma to a magician's creation", "A mirage is seen", "A dream can make the dreamer weep",
  "Fully working, and nowhere found standing by itself",
  "He also looked at the very moment of rebirth", "nothing would connect it to the next", "two lives would run at once",
  "No link is found at the joint", "The continuity is not denied",
  "drew the conclusion", "No storehouse is needed", "never ceased by itself either",
  "added that the very ceasing of an action is itself a condition", "the person who is reborn is the mere I",
  "Not found when looked for", "And yet acting, remembering, keeping promises",
  // Tibet and Zen
  "describes the interval between death and rebirth", "It is called the bardo", "the elements dissolve one into another",
  "the clear light of death dawns",
  "This clear light can be read in two ways", "a luminous awareness beneath all experience", "That would be the traveler at last",
  "luminosity is the knowing clarity of appearing itself", "it is empty like everything else",
  "not a hidden ground, but appearing recognized as unfixed", "the best preparation for death is practice in life",
  "Every moment is in between",
  "Some teachers speak of a very subtle mind", "the danger returns in its most refined form", "Read as a thing with its own nature",
  "Read as one more empty, changing condition", "The step from one reading to the other is short",
  "In Japan, the Zen master", "like someone leaving a burning house", "is not the Buddha's teaching",
  "His best known image is firewood and ash", "Firewood becomes ash", "Each abides fully in its own position",
  "as winter does not become spring", "It denies that one thing passes from the firewood into the ash",
  "There is also the story of", "An old man told", "does not fall into cause and effect", "reborn as a fox for five hundred lives",
  "the same question", "does not obscure cause and effect", "the old man was freed",
  "Not falling into cause and effect treats freedom as an escape", "Not obscuring cause and effect is freedom as clarity",
  "Emptiness gives no exemption from karma", "karma works",
  // objections
  "A modern listener may still object", "The mind depends on the brain", "That is exactly the carrier the Buddha refused",
  "It takes matter as the one thing that is really real", "None of this proves rebirth",
  "What about memory", "But memory was never the carrier", "You remember almost nothing of your first three years",
  "Neither the same, nor another",
  "Is karma unfair", "Karma is not a court", "It describes how intention tends to shape what follows", "this is deserved",
  "It was given to free beings, not to judge them",
  "Is there evidence", "Researchers such as Ian Stevenson and Jim Tucker", "Critics have raised serious questions",
  "Even an accurate memory would not show that a soul traveled", "It would fit the lamp, not the passenger",
  // living, dying, grieving, the end, close
  "So what does this change for the living, the dying and the grieving", "For the living, the place where karma is made is now",
  "This act", "This word", "The mere I acts, and the mere I meets the result",
  "For the dying, the view removes one dread", "It does not remove the fear of pain", "continuity without a carrier",
  "For the grieving, grief is not a mistake", "The dead were not wiped out", "And they were not carried away",
  "Between the two is the lamp", "and that lit others",
  "And the end of rebirth", "the fire that went in no direction", "What ends is the fuel", "is not another place",
  "with the fixing ended",
  "The round turns on", "It ends with knowing", "That seeing does not wait for another life",
  "The whole chain can be seen in a single afternoon", "And it can be seen through in one",
  "This is all the continuity there is", "The child becomes the adult", "The one who sleeps becomes the one who wakes",
  "The deed becomes its fruit", "One life becomes the condition of the next", "It needs no traveler", "It leaves no one cut off",
  "One flame lights another, and the lamp is burning now",
];

// indigo and gold for the main book; warmer at the lamps, cooler at the search
const M = {
  lamp: { a: "rgba(190,140,55,0.46)", b: "rgba(60,50,140,0.45)", c: "rgba(140,70,40,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  sea: { a: "rgba(30,90,130,0.48)", b: "rgba(60,50,140,0.42)", c: "rgba(150,120,50,0.3)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  night: { a: "rgba(35,40,110,0.5)", b: "rgba(110,60,140,0.4)", c: "rgba(120,90,40,0.28)" },
};

// ---------------------------------------------------------------- helpers
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={size} serif>{children}</Glow></At>;
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
const Wd: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;

/** A cross that sweeps over whatever sits under it (cue time). */
const XOut: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 170 }) => {
  const { t } = useT();
  const p = ramp(t, at, 0.5);
  const L = 120;
  return (
    <At x={x} y={y}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${WARM})` }}>
        <path d="M15 15 L85 85" stroke={WARM} strokeWidth={9} strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - p)} />
        <path d="M85 15 L15 85" stroke={WARM} strokeWidth={9} strokeLinecap="round" strokeDasharray={L} strokeDashoffset={L * (1 - ramp(t, at + 0.25, 0.5))} />
      </svg>
    </At>
  );
};

// ---------------------------------------------------------------- drawings
/** An oil lamp with a breathing flame; lit 0..1. */
const Lamp: React.FC<{ size?: number; lit?: number; seed?: number; color?: string }> = ({ size = 170, lit = 1, seed = 0, color = GOLD }) => {
  const { t } = useT();
  const f = (1 + 0.08 * Math.sin(t * 7 + seed) + 0.05 * Math.sin(t * 11 + seed * 2)) * lit;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible" }}>
      {lit > 0.02 && <path d={`M50 ${60 - 36 * f} Q67 44 50 62 Q33 44 50 ${60 - 36 * f} Z`} fill={`${color}cc`}
        style={{ filter: `drop-shadow(0 0 ${8 + 10 * lit}px ${color})` }} />}
      <path d="M48 62 L52 62 L51 68 L49 68 Z" fill={DIM} />
      <path d="M12 66 Q50 98 88 66 Z" fill={`${WARM}55`} stroke={WARM} strokeWidth={3.5} />
      <path d="M86 70 Q98 66 96 58" fill="none" stroke={WARM} strokeWidth={3} />
    </svg>
  );
};

/** A plain standing figure. */
const Person: React.FC<{ color?: string; size?: number }> = ({ color = CHALK, size = 150 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round" />
  </svg>
);

/** A lying sleeper under a moon. */
const Sleeper: React.FC<{ color?: string; awake?: number }> = ({ color = ICE, awake = 0 }) => (
  <svg width={360} height={200} viewBox="0 0 360 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 150 L340 150 M30 150 L30 180 M330 150 L330 180" stroke={DIM} strokeWidth={5} strokeLinecap="round" />
    <circle cx={70} cy={128} r={18} fill={`${color}33`} stroke={color} strokeWidth={4} />
    <path d="M95 130 Q200 105 310 132 L310 148 L95 148 Z" fill={`${color}22`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <path d="M300 30 Q270 50 290 80 Q260 70 262 45 Q268 25 300 30 Z" fill={`${GOLD}${awake > 0.5 ? "22" : "77"}`} stroke={GOLD} strokeWidth={3} />
  </svg>
);

/** A small house: the body pictured as a home for a passenger. */
const House: React.FC<{ color?: string; fall?: number }> = ({ color = WARM, fall = 0 }) => (
  <svg width={220} height={200} viewBox="0 0 220 200" style={{ overflow: "visible", opacity: 1 - fall * 0.6,
    transform: `rotate(${fall * 12}deg) translateY(${fall * 30}px)`, filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 90 L110 20 L200 90 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <rect x={40} y={90} width={140} height={100} fill={`${color}18`} stroke={color} strokeWidth={5} />
    <rect x={95} y={130} width={30} height={60} fill="none" stroke={color} strokeWidth={4} />
  </svg>
);

/** A small glowing traveler dot (the pictured passenger). */
const Spark: React.FC<{ color?: string; size?: number }> = ({ color = VIOLET, size = 40 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: `radial-gradient(circle, #fff, ${color})`, boxShadow: `0 0 24px ${color}` }} />
);

/** A seed and the plant grown from it, p 0..1. */
const Sprout: React.FC<{ p: number }> = ({ p }) => (
  <svg width={220} height={240} viewBox="0 0 220 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <ellipse cx={110} cy={210} rx={28} ry={16} fill={`${GOLD}66`} stroke={GOLD} strokeWidth={4} />
    <path d={`M110 200 L110 ${200 - 150 * p}`} stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
    {p > 0.4 && <path d={`M110 ${200 - 90 * p} Q70 ${170 - 100 * p} 60 ${150 - 90 * p} Q95 ${150 - 80 * p} 110 ${190 - 100 * p}`} fill={`${GREEN}55`} stroke={GREEN} strokeWidth={4} />}
    {p > 0.6 && <path d={`M110 ${200 - 120 * p} Q150 ${170 - 130 * p} 162 ${150 - 120 * p} Q125 ${150 - 110 * p} 110 ${190 - 128 * p}`} fill={`${GREEN}55`} stroke={GREEN} strokeWidth={4} />}
    {p > 0.9 && [0, 1, 2].map((k) => <circle key={k} cx={100 + k * 10} cy={44 - k * 6} r={6} fill={GOLD} />)}
  </svg>
);

/** A fire on logs or grass. */
const Fire: React.FC<{ color?: string; fuel?: "logs" | "grass" | "none"; lit?: number }> = ({ color = WARM, fuel = "logs", lit = 1 }) => {
  const { t } = useT();
  const f = (1 + 0.08 * Math.sin(t * 8) + 0.05 * Math.sin(t * 13)) * lit;
  return (
    <svg width={180} height={200} viewBox="0 0 180 200" style={{ overflow: "visible" }}>
      {lit > 0.02 && <>
        <path d={`M90 ${150 - 110 * f} Q140 90 120 150 Q90 170 60 150 Q40 90 90 ${150 - 110 * f} Z`} fill={`${color}aa`} style={{ filter: `drop-shadow(0 0 16px ${color})` }} />
        <path d={`M90 ${150 - 60 * f} Q112 120 102 150 Q90 158 78 150 Q68 120 90 ${150 - 60 * f} Z`} fill={`${GOLD}dd`} />
      </>}
      {fuel === "logs" && <path d="M30 165 L150 185 M30 185 L150 165" stroke={GOLD} strokeWidth={14} strokeLinecap="round" opacity={0.8} />}
      {fuel === "grass" && <path d="M40 185 L50 150 M60 185 L64 145 M80 185 L78 150 M100 185 L104 145 M120 185 L118 150 M140 185 L132 150" stroke={GREEN} strokeWidth={5} strokeLinecap="round" />}
      {fuel === "none" && <path d="M40 182 Q90 172 140 182" stroke={DIM} strokeWidth={6} strokeLinecap="round" opacity={0.6} />}
    </svg>
  );
};

/** Wind lines. */
const Wind: React.FC<{ color?: string }> = ({ color = ICE }) => {
  const { t } = useT();
  return (
    <svg width={420} height={160} viewBox="0 0 420 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 6px ${color}88)` }}>
      {[0, 1, 2].map((k) => {
        const off = ((t * 120 + k * 90) % 420) - 60;
        return <path key={k} d={`M${off} ${40 + k * 40} q 60 -18 120 0 t 120 0`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" opacity={0.7} />;
      })}
    </svg>
  );
};

/** A pipe: the picture of a stream flowing through lives (drawn only to be crossed out). */
const Pipe: React.FC<{ color?: string }> = ({ color = VIOLET }) => {
  const { t } = useT();
  return (
    <svg width={900} height={80} viewBox="0 0 900 80" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      <rect x={0} y={20} width={900} height={40} rx={20} fill={`${color}22`} stroke={color} strokeWidth={4} />
      {[0, 1, 2, 3].map((k) => <circle key={k} cx={((t * 140 + k * 225) % 900)} cy={40} r={10} fill={color} />)}
    </svg>
  );
};

/** A bridge arc between two banks. */
const BridgeArc: React.FC<{ p: number; color?: string }> = ({ p, color = GOLD }) => (
  <svg width={700} height={220} viewBox="0 0 700 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}77)` }}>
    <path d="M0 190 L110 190 M590 190 L700 190" stroke={DIM} strokeWidth={8} strokeLinecap="round" />
    <path d="M110 190 Q350 -10 590 190" fill="none" stroke={color} strokeWidth={7} strokeDasharray={700} strokeDashoffset={700 * (1 - p)} strokeLinecap="round" />
  </svg>
);

/** Firewood and ash, each in its own position. */
const Firewood: React.FC = () => (
  <svg width={220} height={120} viewBox="0 0 220 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GOLD}77)` }}>
    {[0, 1, 2].map((k) => <rect key={k} x={20 + k * 10} y={30 + k * 28} width={170} height={24} rx={12} fill={`${WARM}44`} stroke={GOLD} strokeWidth={4} />)}
  </svg>
);
const Ash: React.FC = () => (
  <svg width={220} height={120} viewBox="0 0 220 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${DIM}88)` }}>
    <path d="M20 100 Q110 40 200 100 Z" fill={`${DIM}66`} stroke={DIM} strokeWidth={4} />
    {[60, 95, 130, 160].map((x, k) => <circle key={k} cx={x} cy={88 - (k % 2) * 10} r={4} fill={CHALK} opacity={0.5} />)}
  </svg>
);

/** A fox. */
const Fox: React.FC<{ color?: string; free?: number }> = ({ color = WARM, free = 0 }) => (
  <svg width={260} height={180} viewBox="0 0 260 180" style={{ overflow: "visible", opacity: 1 - free * 0.7, filter: `drop-shadow(0 0 10px ${color}99)` }}>
    <path d="M40 60 L60 20 L80 55 L110 55 L130 20 L150 60 Q160 100 95 120 Q30 100 40 60 Z" fill={`${color}44`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={75} cy={78} r={5} fill={CHALK} /><circle cx={115} cy={78} r={5} fill={CHALK} />
    <path d="M150 110 Q230 100 240 150 Q200 170 150 140" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);

/** A simple brain outline. */
const Brain: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={220} height={170} viewBox="0 0 220 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M60 140 Q10 130 20 85 Q10 40 60 30 Q80 5 115 20 Q150 0 175 30 Q215 45 200 90 Q215 135 160 140 Q130 165 100 145 Q80 160 60 140 Z"
      fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M110 25 Q100 80 115 140 M60 60 Q85 70 75 100 M160 60 Q140 75 150 105" fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" />
  </svg>
);

/** Scales without a judge: karma is not a court. */
const Gavel: React.FC<{ color?: string }> = ({ color = DIM }) => (
  <svg width={200} height={160} viewBox="0 0 200 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={60} y={30} width={90} height={40} rx={8} transform="rotate(-25 105 50)" fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M100 70 L50 140" stroke={color} strokeWidth={9} strokeLinecap="round" />
    <path d="M110 150 L190 150" stroke={color} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

/** A child and an adult. */
const ChildAdult: React.FC<{ p: number }> = ({ p }) => (
  <div style={{ display: "flex", gap: 60, alignItems: "flex-end" }}>
    <Person color={ICE} size={110} />
    <div style={{ opacity: p }}><Person color={GOLD} size={180} /></div>
  </div>
);

// ---------------------------------------------------------------- scenes
const LampsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const second = c("Now light a second lamp from the first");
  const lit2 = ramp(t, second + 1.2, 1.0);
  const spark = ramp(t, second + 0.4, 0.9);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 70, width: "100%", display: "flex", justifyContent: "center",
        opacity: ramp(t, c("This is the oldest image the Buddhist tradition has for rebirth"), 0.6) }}>
        <Reveal text="one flame lights another" at={c("This is the oldest image the Buddhist tradition has for rebirth")} size={76} />
      </div>
      <At x={760} y={470} s={pop(t, fps, 0.2)}><Lamp size={220} /></At>
      <Items items={[
        ["its flame is not the flame of the first watch", 760, 640, <Wd c={DIM} s={28}>dusk · midnight · the last watch</Wd>, { until: "Now light a second lamp from the first" }],
      ]} />
      <At x={1160} y={470} o={ramp(t, second, 0.5)}><Lamp size={220} lit={lit2} seed={3} /></At>
      <Flow x1={800} y1={420} x2={1130} y2={420} color={GOLD} p={spark} pulses={false} dash />
      <Items items={[
        ["Nothing passes over", 960, 660, <Wd c={WARM} s={36} serif>nothing passes over</Wd>],
        ["It was lit from it", 960, 730, <Wd c={GOLD} s={36} serif>and yet it was lit from it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PuzzleScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Every Buddhist tradition teaches that actions bear fruit")}>two teachings</Title>
      <Items items={[
        ["Every Buddhist tradition teaches that actions bear fruit", 560, 330, <K c={GOLD} s={36}>actions bear fruit, life after life</K>, { pop: true }],
        ["Every Buddhist tradition also teaches that there is no self", 1360, 330, <K c={ICE} s={36}>no self, no inner owner</K>, { pop: true }],
        ["these can look like a contradiction", 960, 450, <Wd c={WARM} s={40} serif>a contradiction?</Wd>],
        ["who is reborn", 960, 560, <Wd c={DIM} s={32}>if no one dies, who is reborn?</Wd>],
        ["in what sense is the next life mine", 960, 630, <Wd c={DIM} s={32}>in what sense is the next life mine?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const AssumptionScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("The contradiction is only apparent")}>only apparent</Title>
      <Items items={[
        ["continuity needs a carrier", 960, 330, <K c={WARM} s={40}>the hidden assumption: continuity needs a carrier</K>, { pop: true }],
        ["no harder to make sense of than waking up in the morning", 960, 560, <Sleeper awake={1} />],
        ["no harder to make sense of than waking up in the morning", 960, 720, <Wd c={GOLD} s={34} serif>no harder than waking up in the morning</Wd>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const HouseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const move = ramp(t, c("moves into a new house"), 2.2);
  const fall = ramp(t, c("moves into a new house") - 0.6, 0.8);
  return (
    <AbsoluteFill>
      <Title at={c("Most of us picture rebirth like this")}>the usual picture</Title>
      <At x={560} y={460} o={ramp(t, c("The body is its house"), 0.5)}><House fall={fall} /></At>
      <At x={1360} y={460} o={ramp(t, c("moves into a new house"), 0.5)}><House color={GOLD} /></At>
      <At x={560 + 800 * move} y={470 - Math.sin(move * Math.PI) * 180} o={ramp(t, c("Most of us picture rebirth like this") + 1.2, 0.5)}><Spark /></At>
      <Items items={[
        ["The body is its house", 560, 620, <Wd c={DIM} s={28}>the body: a house</Wd>],
        ["moves into a new house", 960, 280, <Wd c={VIOLET} s={30}>a someone moves out, travels, moves in</Wd>],
        ["The skeptic uses the same picture", 960, 700, <Wd c={ICE} s={32}>the skeptic: there is no someone to move</Wd>],
        ["The believer and the skeptic agree that rebirth would need a traveler", 960, 780, <Wd c={WARM} s={34} serif>both assume rebirth needs a traveler</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SleepScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("But look at an ordinary day")}>an ordinary night</Title>
      <At x={960} y={420} o={ramp(t, c("But look at an ordinary day"), 0.5)}><Sleeper awake={ramp(t, c("the person who wakes is, by every ordinary standard, the person who fell asleep"), 1)} /></At>
      <Items items={[
        ["No witness keeps watch through the gap", 960, 230, <Wd c={DIM} s={30}>deep sleep: no witness keeps watch</Wd>],
        ["The body of ten years ago has been replaced", 960, 600, <Wd c={ICE} s={30}>the body of ten years ago: replaced, cell by cell</Wd>],
        ["the person who wakes is, by every ordinary standard, the person who fell asleep", 960, 680, <Wd c={GOLD} s={34} serif>yet the one who wakes is the one who slept</Wd>],
        ["If continuity within a life needs no traveler", 960, 780, <K c={TEAL} s={30}>within a life, no traveler; between lives, none either</K>],
      ]} />
    </AbsoluteFill>
  );
};

const ExtremesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("From the start, the Buddha taught against two opposite views")}>two extremes</Title>
      <Items items={[
        ["The first is eternalism", 520, 300, <K c={VIOLET} s={36}>eternalism</K>, { pop: true }],
        ["The first is eternalism", 520, 380, <Wd c={DIM} s={26}>a self that goes on unchanged</Wd>, { d: 0.6 }],
        ["The second is annihilationism", 1400, 300, <K c={ICE} s={36}>annihilationism</K>, { pop: true }],
        ["The second is annihilationism", 1400, 380, <Wd c={DIM} s={26}>a self wiped out, or a stranger</Wd>, { d: 0.6 }],
        ["the shadow of eternalism, not its cure", 960, 490, <Wd c={WARM} s={32} serif>the shadow, not the cure: both assume a self</Wd>],
      ]} />
      <At x={960} y={690} o={ramp(t, c("The rice that grows from a seed has something to do with the seed"), 0.5)}>
        <Sprout p={ramp(t, c("The rice that grows from a seed has something to do with the seed"), 2.5)} />
      </At>
    </AbsoluteFill>
  );
};

const MiddleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nodes: [string, number, string, string][] = [
    ["Life conditions life", 560, "life", GOLD], ["Life conditions life", 960, "life", GOLD], ["Deed conditions fruit", 1360, "fruit", GREEN],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("Between these two, the Buddha taught dependent arising")} color={GOLD} size={48}>dependent arising</Title>
      {nodes.map(([cue, x, w, col], i) => (
        <At key={i} x={x} y={400} o={ramp(t, c(cue) + i * 0.4, 0.5)}><K c={col} s={34}>{w}</K></At>
      ))}
      <Flow x1={650} y1={400} x2={870} y2={400} color={GOLD} p={ramp(t, c("Life conditions life") + 0.6, 0.6)} />
      <Flow x1={1050} y1={400} x2={1270} y2={400} color={GOLD} p={ramp(t, c("Deed conditions fruit"), 0.6)} />
      <Items items={[
        ["Nothing carries the one into the other", 960, 560, <Wd c={WARM} s={34} serif>nothing carried</Wd>],
        ["And nothing cuts them apart", 960, 640, <Wd c={TEAL} s={34} serif>nothing cut off</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SearchScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("tests every candidate for a carrier in the same way")}>where would it be found?</Title>
      <Items items={[
        ["Then it looks", 960, 210, <Wd c={DIM} s={28}>it does not announce; it looks</Wd>],
        ["The Sanskrit word for that nature is", 960, 320, <Wd c={GOLD} s={52} serif>own nature · svabhāva</Wd>],
        ["Not made", 960, 450, <K c={ICE} s={34}>not made</K>, { pop: true }],
        ["Not depending on anything else", 960, 550, <K c={TEAL} s={34}>not depending on anything else</K>, { pop: true }],
        ["Not changing", 960, 650, <K c={VIOLET} s={34}>not changing</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const CandidatesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const none = c("And so no carrier is found");
  const cands: [string, string, string, number][] = [
    ["A soul that never changes could not learn", "a soul that never changes", ROSE, 420],
    ["A stream of subtle consciousness", "a subtle stream", VIOLET, 960],
    ["A store of seeds", "a store of seeds", TEAL, 1500],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("A soul that never changes could not learn")}>the candidates</Title>
      {cands.map(([cue, w, col, x]) => (
        <React.Fragment key={w}>
          <At x={x} y={380} o={ramp(t, c(cue), 0.5)}><K c={col} s={32}>{w}</K></At>
          <XOut x={x} y={380} at={none + 0.2} size={150} />
        </React.Fragment>
      ))}
      <Items items={[
        ["A soul that never changes could not learn", 420, 470, <Wd c={DIM} s={24}>could not learn or be freed</Wd>, { d: 1 }],
        ["A stream of subtle consciousness", 960, 470, <Wd c={DIM} s={24}>the same: no flow · different: no one thing</Wd>, { d: 1.5 }],
        ["A store of seeds", 1500, 470, <Wd c={DIM} s={24}>unchanged: no ripening</Wd>, { d: 1 }],
        ["turns out to be one more dependent appearance", 960, 620, <Wd c={GOLD} s={34} serif>each, one more dependent appearance</Wd>],
        ["And so no carrier is found", 960, 720, <Wd c={WARM} s={36} serif>no carrier is found</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const KeptScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("But notice what is not lost")} color={GOLD}>what is not lost</Title>
      <Items items={[
        ["The person still wakes", 960, 330, <K c={ICE} s={36}>the person still wakes</K>, { pop: true }],
        ["Still keeps promises", 960, 450, <K c={TEAL} s={36}>still keeps promises</K>, { pop: true }],
        ["Still meets the fruit of what they have done", 960, 570, <K c={GOLD} s={36}>still meets the fruit of what was done</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const NothingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const reps: [string, string, number][] = [
    ["Not a subtler soul", "a subtler soul", 360], ["Not a stream", "a stream", 760], ["Not an energy", "an energy", 1160],
    ["Not even emptiness itself", "emptiness itself", 1560],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("One rule matters here more than any other")} color={GOLD}>the one rule</Title>
      <Items items={[
        ["put nothing in its place", 960, 260, <Wd c={GOLD} s={48} serif>put nothing in its place</Wd>],
      ]} />
      {reps.map(([cue, w, x]) => (
        <React.Fragment key={w}>
          <At x={x} y={480} o={ramp(t, c(cue), 0.4)}><K c={VIOLET} s={30}>{w}</K></At>
          <XOut x={x} y={480} at={c(cue) + 0.5} size={130} />
        </React.Fragment>
      ))}
      <Items items={[
        ["catches each replacement as it appears", 960, 680, <Wd c={TEAL} s={32}>every replacement is caught as it appears</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ClaimsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("It also helps to keep three kinds of claim apart")}>three kinds of claim</Title>
      <Items items={[
        ["The logic shows that rebirth does not need a carrier", 420, 340, <K c={ICE} s={30}>the logic: no carrier needed</K>, { pop: true }],
        ["The tradition affirms that rebirth happens", 960, 340, <K c={GOLD} s={30}>the tradition: rebirth affirmed</K>, { pop: true }],
        ["is a question for evidence", 1500, 340, <K c={TEAL} s={30}>evidence: each particular case</K>, { pop: true }],
        ["The first does not prove the second", 960, 500, <Wd c={WARM} s={34} serif>the first does not prove the second</Wd>],
        ["Emptiness does not prove rebirth", 960, 600, <Wd c={CHALK} s={34} serif>emptiness does not prove rebirth</Wd>],
        ["the one objection that seemed to stand against it", 960, 690, <Wd c={GOLD} s={30}>it removes one objection</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const AwakeningScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Rebirth is not a later addition")}>the night of awakening</Title>
      <Items items={[
        ["he recollected his own past lives", 420, 360, <Lamp size={120} color={VIOLET} />],
        ["he recollected his own past lives", 420, 480, <K c={VIOLET} s={28}>first watch: past lives</K>, { d: 0.4 }],
        ["Then he saw beings dying and being reborn", 960, 360, <Lamp size={120} color={ICE} />],
        ["Then he saw beings dying and being reborn", 960, 480, <K c={ICE} s={28}>second: beings, by their deeds</K>, { d: 0.4 }],
        ["Then he knew the ending of the defilements", 1500, 360, <Lamp size={120} color={GOLD} />],
        ["Then he knew the ending of the defilements", 1500, 480, <K c={GOLD} s={28}>third: the ending</K>, { d: 0.4 }],
        ["In none of these does he see a self passing from life to life", 960, 620, <Wd c={CHALK} s={32} serif>lives, and their dependence on deeds</Wd>],
      ]} />
      <At x={960} y={720} o={ramp(t, c("Not a passenger"), 0.4)}><Wd c={WARM} s={34} serif>a pattern of conditioning · not a passenger</Wd></At>
    </AbsoluteFill>
  );
};

const SatiScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("The clearest correction came to a monk named")}>Sāti's view</Title>
      <Items items={[
        ["it is this very same consciousness that roams and transmigrates", 960, 260, <Wd c={VIOLET} s={36} serif>“this very same consciousness roams and transmigrates”</Wd>],
        ["He was not crude", 960, 360, <Wd c={DIM} s={28}>not a soul: consciousness, the traveler</Wd>],
      ]} />
      <At x={960} y={540} o={ramp(t, c("He posited consciousness"), 0.5)}><Pipe /></At>
      <Items items={[
        ["He posited consciousness", 330, 540, <House color={DIM} />, { d: 0.2, o: 0.6 }],
        ["He posited consciousness", 1590, 540, <House color={DIM} />, { d: 0.4, o: 0.6 }],
      ]} />
      <XOut x={960} y={540} at={c("The Buddha rebuked him sharply") - 0.6} size={200} />
    </AbsoluteFill>
  );
};

const FireScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("The Buddha rebuked him sharply")}>named after its fuel</Title>
      <Items items={[
        ["Consciousness, he said, arises dependently", 960, 200, <Wd c={DIM} s={28}>no condition, no consciousness</Wd>],
        ["A fire on logs is a log fire", 600, 400, <Fire fuel="logs" />],
        ["A fire on logs is a log fire", 600, 540, <K c={GOLD} s={28}>a log fire</K>, { d: 0.5 }],
        ["A fire on grass is a grass fire", 1320, 400, <Fire fuel="grass" color={ROSE} />],
        ["A fire on grass is a grass fire", 1320, 540, <K c={GREEN} s={28}>a grass fire</K>, { d: 0.5 }],
        ["Eye consciousness", 560, 650, <K c={ICE} s={28}>eye consciousness</K>, { pop: true }],
        ["Ear consciousness", 960, 650, <K c={TEAL} s={28}>ear consciousness</K>, { pop: true }],
        ["Mind consciousness", 1360, 650, <K c={VIOLET} s={28}>mind consciousness</K>, { pop: true }],
        ["Consciousness is not one thing moving from fuel to fuel", 960, 760, <Wd c={WARM} s={32} serif>not one thing moving from fuel to fuel</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OddScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("So a modern reader who rejects rebirth")}>an odd position</Title>
      <Items items={[
        ["So a modern reader who rejects rebirth", 960, 300, <Wd c={ICE} s={34}>“no soul, so no rebirth”</Wd>, { d: 0.8 }],
        ["They agree with", 620, 470, <K c={VIOLET} s={32}>agrees with Sāti</K>, { pop: true }],
        ["And they disagree with the Buddha", 1300, 470, <K c={GOLD} s={32}>disagrees with the Buddha</K>, { pop: true }],
        ["And they disagree with the Buddha", 960, 620, <Wd c={DIM} s={28}>about what rebirth would require</Wd>, { d: 1 }],
      ]} />
    </AbsoluteFill>
  );
};

const KassapaScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("A naked ascetic named Kassapa")}>neither the same nor another</Title>
      <Items items={[
        ["The Buddha declined both", 960, 210, <Wd c={DIM} s={28}>made by oneself? by another? both declined</Wd>],
        ["the one who acts is the one who experiences the result", 520, 380, <K c={VIOLET} s={28}>the same one: eternalism</K>, { pop: true }],
        ["one acts and another experiences is annihilationism", 1400, 380, <K c={ICE} s={28}>another one: annihilationism</K>, { pop: true }],
        ["he taught by the middle", 960, 520, <K c={GOLD} s={34}>by the middle: the chain of conditions</K>, { pop: true }],
        ["This is not evasion", 960, 650, <Wd c={DIM} s={30}>not “is it the same one?”</Wd>],
        ["on what does this depend", 960, 730, <Wd c={GOLD} s={36} serif>but “on what does this depend?”</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const WindScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const carry = ramp(t, c("When a flame is tossed by the wind"), 3);
  return (
    <AbsoluteFill>
      <Title at={c("Another wanderer asked what a being depends on")}>the flame carried by the wind</Title>
      <At x={520} y={430} o={ramp(t, c("Another wanderer asked what a being depends on") + 1, 0.5)}><Fire fuel="logs" /></At>
      <At x={760} y={380} o={ramp(t, c("When a flame is tossed by the wind"), 0.5)}><Wind /></At>
      <At x={620 + 640 * carry} y={360 - 60 * Math.sin(carry * Math.PI)} o={ramp(t, c("When a flame is tossed by the wind") + 0.4, 0.4)}><Fire fuel="none" /></At>
      <Items items={[
        ["it is fueled by the wind", 1260, 560, <K c={ICE} s={28}>fueled by the wind</K>],
        ["a being between lives is fueled by craving", 960, 620, <K c={ROSE} s={34}>between lives: fueled by craving</K>, { pop: true }],
        ["Even in the gap, there is dependence, not a carrier", 960, 720, <Wd c={GOLD} s={32} serif>dependence, not a carrier</Wd>],
        ["but the thirst for being", 960, 790, <Wd c={DIM} s={28}>not a self that wants to survive: the thirst for being</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FireOutScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const out = 1 - ramp(t, c("when the fuel ran out, it went out"), 1.5);
  const dirs: [string, number, number][] = [["east", 1300, 420], ["west", 620, 420], ["north", 960, 210], ["south", 960, 650]];
  return (
    <AbsoluteFill>
      <Title at={c("The Buddha also left some questions unanswered")}>where did the fire go?</Title>
      <At x={960} y={420}><Fire fuel="logs" lit={out} /></At>
      {dirs.map(([w, x, y]) => (
        <At key={w} x={x} y={y} o={ramp(t, c("which direction did it go"), 0.5) * (1 - ramp(t, c("The question does not apply"), 0.5)) * 0.9}>
          <Wd c={DIM} s={30}>{w}?</Wd>
        </At>
      ))}
      <Items items={[
        ["The question does not apply", 960, 640, <Wd c={WARM} s={36} serif>the question does not apply</Wd>],
        ["but the ending of the fuel", 960, 730, <Wd c={GOLD} s={34} serif>not annihilation: the ending of the fuel</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BridgesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, string, number][] = [
    ["neither the same as body and mind", "a person, neither same nor different", ROSE, 300],
    ["the past deed still exists", "the past deed still exists", ICE, 380],
    ["plants a seed in the mental stream", "seeds in the stream", GREEN, 460],
    ["a storehouse consciousness", "a storehouse", VIOLET, 540],
    ["linking consciousness in the next", "a linking moment, like an echo", TEAL, 620],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("The early teaching left a problem")}>deed now, fruit lives later</Title>
      <Items items={[
        ["What connects them", 960, 190, <Wd c={DIM} s={30}>what connects them?</Wd>],
      ]} />
      <At x={960} y={760} o={ramp(t, c("The schools gave many answers"), 0.5)}><BridgeArc p={ramp(t, c("The schools gave many answers"), 2)} /></At>
      {rows.map(([cue, w, col, y]) => (
        <At key={w} x={960} y={y} o={ramp(t, c(cue), 0.5)}><K c={col} s={28}>{w}</K></At>
      ))}
    </AbsoluteFill>
  );
};

const BridgeReadScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Each bridge names something")}>each bridge names something</Title>
      <Items items={[
        ["a soul by another name", 560, 380, <K c={WARM} s={32}>taken as a thing: a soul by another name</K>, { pop: true }],
        ["each is harmless", 1360, 380, <K c={TEAL} s={32}>taken as a way of speaking: harmless</K>, { pop: true }],
        ["The echo, especially, is exact", 960, 560, <Wd c={GOLD} s={36} serif>the echo: nothing comes over, yet it depends</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EmptyKarmaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("asked a more radical question")} color={GOLD}>is any bridge needed at all?</Title>
      <Items items={[
        ["If an action had a nature of its own", 960, 230, <Wd c={DIM} s={30}>an action with a nature of its own…</Wd>, { until: "So the agent, the action and the fruit are all empty" }],
        ["it would be permanent", 600, 330, <K c={WARM} s={28}>permanent: never done</K>, { until: "So the agent, the action and the fruit are all empty" }],
        ["it would ripen again and again", 1320, 330, <K c={WARM} s={28}>ripening without end</K>, { until: "So the agent, the action and the fruit are all empty" }],
      ]} />
      {[["agent", 560], ["action", 960], ["fruit", 1360]].map(([w, x]) => (
        <At key={w as string} x={x as number} y={420} o={ramp(t, c("So the agent, the action and the fruit are all empty"), 0.5)}><K c={GOLD} s={34}>{w}: empty</K></At>
      ))}
      <Items items={[
        ["this is exactly why they work", 960, 520, <Wd c={TEAL} s={36} serif>and this is why they work</Wd>],
        ["as the link between a rice seed and rice is real", 960, 690, <Sprout p={1} />],
        ["a gap only for things with a nature of their own", 960, 820, <Wd c={DIM} s={28}>the gap exists only for things with a nature of their own</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MagicScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("compares karma to a magician's creation")}>like a magician's creation</Title>
      <Items items={[
        ["compares karma to a magician's creation", 760, 400, <Person color={VIOLET} size={170} />, { d: 1 }],
        ["compares karma to a magician's creation", 1160, 420, <Person color={ROSE} size={130} />, { d: 2.5 }],
        ["A mirage is seen", 560, 620, <K c={ICE} s={28}>a mirage is seen</K>, { pop: true }],
        ["A dream can make the dreamer weep", 1360, 620, <K c={VIOLET} s={28}>a dream makes the dreamer weep</K>, { pop: true }],
        ["Fully working, and nowhere found standing by itself", 960, 740, <Wd c={GOLD} s={36} serif>fully working · nowhere found by itself</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const JointScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("He also looked at the very moment of rebirth")}>the joint between lives</Title>
      <At x={760} y={420} o={ramp(t, c("He also looked at the very moment of rebirth"), 0.5)}><Lamp size={150} lit={1 - ramp(t, c("nothing would connect it to the next"), 1) * 0.8} /></At>
      <At x={1160} y={420} o={ramp(t, c("He also looked at the very moment of rebirth") + 0.6, 0.5)}><Lamp size={150} seed={2} /></At>
      <Items items={[
        ["nothing would connect it to the next", 960, 600, <Wd c={DIM} s={28}>already ceased? nothing connects</Wd>, { until: "two lives would run at once" }],
        ["two lives would run at once", 960, 600, <Wd c={DIM} s={28}>not ceased? two lives at once</Wd>, { until: "No link is found at the joint" }],
        ["No link is found at the joint", 960, 600, <Wd c={WARM} s={36} serif>no link is found at the joint</Wd>],
        ["The continuity is not denied", 960, 690, <Wd c={GOLD} s={32}>the continuity is not denied; it is not found as a thing that flows</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MereIScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("drew the conclusion")}>no storehouse needed</Title>
      <Items items={[
        ["No storehouse is needed", 960, 230, <K c={VIOLET} s={32}>no storehouse</K>, { pop: true }],
        ["never ceased by itself either", 960, 320, <Wd c={DIM} s={28}>never arose by itself, never ceased by itself</Wd>],
        ["added that the very ceasing of an action is itself a condition", 960, 410, <Wd c={TEAL} s={30}>the ceasing itself is a condition</Wd>],
        ["the person who is reborn is the mere I", 960, 540, <Wd c={GOLD} s={52} serif>the mere I</Wd>],
        ["Not found when looked for", 620, 650, <K c={WARM} s={28}>not found when looked for</K>, { pop: true }],
        ["And yet acting, remembering, keeping promises", 1300, 650, <K c={GOLD} s={28}>acting, remembering, keeping promises</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const BardoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const els: [string, string][] = [["earth", WARM], ["water", ICE], ["fire", ROSE], ["wind", TEAL]];
  const d = ramp(t, c("the elements dissolve one into another"), 4);
  return (
    <AbsoluteFill>
      <Title at={c("describes the interval between death and rebirth")}>the bardo · the in-between</Title>
      {els.map(([w, col], i) => (
        <At key={w} x={510 + i * 300} y={380} o={ramp(t, c("the elements dissolve one into another"), 0.5) * (1 - Math.max(0, Math.min(1, d * 4 - i)) * 0.75)}>
          <K c={col} s={30}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["the clear light of death dawns", 960, 580, <Wd c={GOLD} s={40} serif>the clear light</Wd>],
      ]} />
      <Ring x={960} y={580} p={ramp(t, c("the clear light of death dawns"), 2.5)} r0={40} r1={300} color={GOLD} />
    </AbsoluteFill>
  );
};

const ClearLightScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("This clear light can be read in two ways")}>two readings of the clear light</Title>
      <Items items={[
        ["a luminous awareness beneath all experience", 520, 330, <K c={VIOLET} s={28}>a light beneath everything</K>],
        ["That would be the traveler at last", 520, 420, <Wd c={WARM} s={28}>the traveler at last</Wd>],
      ]} />
      <XOut x={520} y={370} at={c("luminosity is the knowing clarity of appearing itself") - 0.3} size={180} />
      <Items items={[
        ["luminosity is the knowing clarity of appearing itself", 1380, 330, <K c={GOLD} s={28}>the clarity of appearing itself</K>],
        ["it is empty like everything else", 1380, 420, <Wd c={TEAL} s={28}>empty, like everything else</Wd>],
        ["not a hidden ground, but appearing recognized as unfixed", 960, 560, <Wd c={GOLD} s={34} serif>appearing recognized as unfixed</Wd>],
        ["the best preparation for death is practice in life", 960, 660, <Wd c={CHALK} s={30}>the best preparation for death: practice in life</Wd>],
      ]} />
      <At x={960} y={750} o={ramp(t, c("Every moment is in between"), 0.5)}><Wd c={DIM} s={30} serif>every moment is in between</Wd></At>
    </AbsoluteFill>
  );
};

const SubtleScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Some teachers speak of a very subtle mind")}>a very subtle mind</Title>
      <Items items={[
        ["the danger returns in its most refined form", 960, 230, <Wd c={DIM} s={28}>the danger in its most refined form</Wd>],
        ["Read as a thing with its own nature", 560, 400, <K c={WARM} s={30}>a thing with its own nature: Sāti again</K>, { pop: true }],
        ["Read as one more empty, changing condition", 1360, 400, <K c={TEAL} s={30}>one more empty condition: no carrier</K>, { pop: true }],
        ["The step from one reading to the other is short", 960, 580, <Wd c={GOLD} s={34} serif>the step between them is short</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DogenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("In Japan, the Zen master")}>Dōgen</Title>
      <At x={960} y={420} o={ramp(t, c("like someone leaving a burning house"), 0.5) * (1 - ramp(t, c("His best known image is firewood and ash"), 0.4))}><House color={ROSE} /></At>
      <At x={1180} y={430} o={ramp(t, c("like someone leaving a burning house"), 0.5) * (1 - ramp(t, c("His best known image is firewood and ash"), 0.4))}><Spark /></At>
      <XOut x={1060} y={420} at={c("is not the Buddha's teaching")} size={220} />
      <Items items={[
        ["is not the Buddha's teaching", 960, 640, <Wd c={WARM} s={32} serif>no true self that moves out</Wd>, { until: "His best known image is firewood and ash" }],
      ]} />
    </AbsoluteFill>
  );
};

const FirewoodScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("His best known image is firewood and ash")}>firewood and ash</Title>
      <Items items={[
        ["Firewood becomes ash", 600, 380, <Firewood />],
        ["Firewood becomes ash", 1320, 380, <Ash />, { d: 0.8 }],
        ["Each abides fully in its own position", 600, 500, <K c={GOLD} s={28}>firewood, in its own position</K>],
        ["Each abides fully in its own position", 1320, 500, <K c={DIM} s={28}>ash, in its own position</K>, { d: 0.5 }],
        ["as winter does not become spring", 960, 620, <Wd c={ICE} s={32} serif>as winter does not become spring</Wd>],
        ["It denies that one thing passes from the firewood into the ash", 960, 720, <Wd c={WARM} s={30}>no one thing passing from firewood into ash</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FoxScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const free = ramp(t, c("the old man was freed"), 1.5);
  return (
    <AbsoluteFill>
      <Title at={c("There is also the story of")}>the fox</Title>
      <Items items={[
        ["An old man told", 520, 420, <Person color={DIM} size={170} />],
        ["does not fall into cause and effect", 960, 230, <Wd c={WARM} s={36} serif>“does not fall into cause and effect”</Wd>, { until: "the same question" }],
      ]} />
      <At x={1300} y={440} o={ramp(t, c("reborn as a fox for five hundred lives"), 0.5)}><Fox free={free} /></At>
      <Items items={[
        ["reborn as a fox for five hundred lives", 1300, 590, <Wd c={DIM} s={28}>five hundred lives as a fox</Wd>, { d: 0.6 }],
        ["does not obscure cause and effect", 960, 230, <Wd c={GOLD} s={36} serif>“does not obscure cause and effect”</Wd>],
        ["the old man was freed", 960, 720, <Wd c={TEAL} s={32}>and the old man was freed</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FoxMeaningScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Not falling into cause and effect treats freedom as an escape")}>falling and obscuring</Title>
      <Items items={[
        ["Not falling into cause and effect treats freedom as an escape", 560, 370, <K c={WARM} s={30}>not falling: freedom as escape</K>, { pop: true }],
        ["Not obscuring cause and effect is freedom as clarity", 1360, 370, <K c={GOLD} s={30}>not obscuring: freedom as clarity</K>, { pop: true }],
        ["Emptiness gives no exemption from karma", 960, 540, <Wd c={CHALK} s={36} serif>emptiness gives no exemption from karma</Wd>],
        ["karma works", 960, 640, <Wd c={TEAL} s={32}>nothing has a nature of its own, so karma works</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BrainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fly = ramp(t, c("That is exactly the carrier the Buddha refused") - 1.5, 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("A modern listener may still object")}>“the mind is what the brain does”</Title>
      <Items items={[
        ["The mind depends on the brain", 700, 420, <Brain />],
      ]} />
      <At x={760 + 500 * fly} y={340 - 80 * Math.sin(fly * Math.PI)} o={ramp(t, c("That is exactly the carrier the Buddha refused") - 1.5, 0.4)}><Spark /></At>
      <XOut x={1260} y={340} at={c("That is exactly the carrier the Buddha refused")} size={150} />
      <Items items={[
        ["That is exactly the carrier the Buddha refused", 1260, 470, <Wd c={WARM} s={28}>a mind floating free: the carrier refused</Wd>],
        ["It takes matter as the one thing that is really real", 960, 620, <K c={ICE} s={30}>matter as the floor: one more substance</K>, { pop: true }],
        ["None of this proves rebirth", 960, 730, <Wd c={DIM} s={30}>none of this proves rebirth</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MemoryScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("What about memory")}>“if I remember nothing, it was not me”</Title>
      <Items items={[
        ["But memory was never the carrier", 960, 280, <Wd c={WARM} s={34} serif>memory was never the carrier</Wd>],
        ["You remember almost nothing of your first three years", 700, 470, <Person color={ICE} size={110} />],
        ["You remember almost nothing of your first three years", 1220, 470, <Person color={GOLD} size={180} />, { d: 0.6 }],
        ["You remember almost nothing of your first three years", 960, 600, <Wd c={DIM} s={28}>the first three years: forgotten, yet still you</Wd>, { d: 1 }],
        ["Neither the same, nor another", 960, 720, <Wd c={GOLD} s={36} serif>neither the same, nor another</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FairScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Is karma unfair")}>is karma unfair?</Title>
      <At x={960} y={360} o={ramp(t, c("Karma is not a court"), 0.5)}><Gavel /></At>
      <XOut x={960} y={360} at={c("Karma is not a court") + 0.4} size={180} />
      <Items items={[
        ["It describes how intention tends to shape what follows", 960, 520, <Wd c={TEAL} s={32}>how intention tends to shape what follows</Wd>],
        ["this is deserved", 960, 620, <Wd c={WARM} s={32} serif>“this is deserved”: a misuse</Wd>],
        ["It was given to free beings, not to judge them", 960, 720, <Wd c={GOLD} s={34} serif>given to free beings, not to judge them</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EvidenceScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Is there evidence")}>is there evidence?</Title>
      <Items items={[
        ["Researchers such as Ian Stevenson and Jim Tucker", 960, 260, <K c={ICE} s={30}>children's memories of a previous life</K>, { pop: true }],
        ["Critics have raised serious questions", 960, 360, <Wd c={DIM} s={28}>and serious questions from critics</Wd>],
        ["Even an accurate memory would not show that a soul traveled", 760, 540, <Lamp size={130} />],
        ["Even an accurate memory would not show that a soul traveled", 1160, 540, <Lamp size={130} seed={2} />, { d: 0.5 }],
        ["It would fit the lamp, not the passenger", 960, 720, <Wd c={GOLD} s={36} serif>it would fit the lamp, not the passenger</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LivingScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("So what does this change for the living, the dying and the grieving")} color={GOLD}>the living</Title>
      <Items items={[
        ["For the living, the place where karma is made is now", 960, 260, <Wd c={GOLD} s={44} serif>karma is made now</Wd>],
        ["This act", 620, 400, <K c={TEAL} s={32}>this act</K>, { pop: true }],
        ["This word", 960, 400, <K c={ICE} s={32}>this word</K>, { pop: true }],
        ["This word", 1300, 400, <K c={VIOLET} s={32}>this turn of mind</K>, { pop: true, d: 1 }],
        ["The mere I acts, and the mere I meets the result", 960, 580, <Wd c={CHALK} s={34} serif>the mere I acts, and meets the result</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DyingScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("For the dying, the view removes one dread")}>the dying</Title>
      <Items items={[
        ["For the dying, the view removes one dread", 960, 280, <Wd c={WARM} s={30}>a holding, a holder taken away, a holding unfinished</Wd>, { d: 1 }],
        ["It does not remove the fear of pain", 960, 400, <Wd c={DIM} s={28}>pain is met with care</Wd>],
        ["continuity without a carrier", 960, 560, <Wd c={GOLD} s={40} serif>continuity without a carrier</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GriefScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("For the grieving, grief is not a mistake")}>the grieving</Title>
      <Items items={[
        ["For the grieving, grief is not a mistake", 960, 220, <Wd c={ROSE} s={32}>love is real, and its ending is a real loss</Wd>, { d: 1.4 }],
        ["The dead were not wiped out", 520, 360, <K c={ICE} s={28}>not wiped out</K>, { pop: true }],
        ["And they were not carried away", 1400, 360, <K c={VIOLET} s={28}>not carried away</K>, { pop: true }],
      ]} />
      <At x={800} y={540} o={ramp(t, c("Between the two is the lamp"), 0.5)}><Lamp size={150} lit={1 - ramp(t, c("and that lit others") - 1.5, 1.5) * 0.9} /></At>
      {[0, 1, 2].map((k) => (
        <At key={k} x={1060 + k * 140} y={540} o={ramp(t, c("and that lit others") + k * 0.3, 0.5)}><Lamp size={110} seed={k + 1} /></At>
      ))}
      <Items items={[
        ["and that lit others", 960, 720, <Wd c={GOLD} s={32} serif>a flame that was real, went out, and lit others</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("And the end of rebirth")}>the end of rebirth</Title>
      <At x={960} y={380}><Fire fuel="logs" lit={1 - ramp(t, c("What ends is the fuel"), 1.6)} /></At>
      <Items items={[
        ["the fire that went in no direction", 960, 560, <Wd c={DIM} s={30}>the fire that went in no direction</Wd>],
        ["What ends is the fuel", 960, 630, <Wd c={WARM} s={32}>what ends is the fuel: craving and grasping</Wd>],
        ["is not another place", 960, 730, <Wd c={GOLD} s={34} serif>nirvāṇa: this same appearing, with the fixing ended</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const KnowScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("The round turns on")}>the round</Title>
      <Items items={[
        ["The round turns on", 560, 360, <K c={VIOLET} s={30}>turns on not knowing</K>, { pop: true, d: 0.6 }],
        ["It ends with knowing", 1360, 360, <K c={GOLD} s={30}>ends with knowing</K>, { pop: true }],
        ["That seeing does not wait for another life", 960, 520, <Wd c={CHALK} s={32}>it does not wait for another life</Wd>],
        ["The whole chain can be seen in a single afternoon", 960, 620, <Wd c={TEAL} s={32} serif>the whole chain, seen in a single afternoon</Wd>],
        ["And it can be seen through in one", 960, 720, <Wd c={GOLD} s={36} serif>and seen through in one</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const last = c("One flame lights another, and the lamp is burning now");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The child becomes the adult", 960, 260, <ChildAdult p={1} />, { until: "The deed becomes its fruit" }],
        ["The one who sleeps becomes the one who wakes", 960, 450, <Wd c={ICE} s={32}>sleeping, waking</Wd>, { until: "The deed becomes its fruit" }],
        ["The deed becomes its fruit", 960, 330, <Sprout p={1} />, { until: "It needs no traveler" }],
        ["One life becomes the condition of the next", 960, 500, <Wd c={GOLD} s={32}>one life, the condition of the next</Wd>, { until: "It needs no traveler" }],
        ["It needs no traveler", 620, 300, <K c={WARM} s={30}>no traveler</K>, { until: "One flame lights another, and the lamp is burning now" }],
        ["It leaves no one cut off", 1300, 300, <K c={TEAL} s={30}>no one cut off</K>, { until: "One flame lights another, and the lamp is burning now" }],
      ]} />
      <At x={780} y={500} o={ramp(t, last - 0.5, 0.8)}><Lamp size={220} /></At>
      <At x={1140} y={500} o={ramp(t, last + 0.4, 0.8)}><Lamp size={220} seed={3} lit={ramp(t, last + 1.2, 1.2)} /></At>
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center", opacity: ramp(t, last, 0.6) }}>
        <Reveal text="one flame lights another" at={last + 0.4} size={72} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["lamp", "A lamp burns through the night"], ["doubt", "Every Buddhist tradition teaches that actions bear fruit"],
    ["night", "Most of us picture rebirth like this"], ["search", "From the start, the Buddha taught against two opposite views"],
    ["web", "One rule matters here more than any other"], ["vivid", "Rebirth is not a later addition"],
    ["lamp", "The Buddha rebuked him sharply"], ["sea", "Another wanderer asked what a being depends on"],
    ["web", "The early teaching left a problem"], ["search", "He also looked at the very moment of rebirth"],
    ["night", "describes the interval between death and rebirth"], ["vivid", "His best known image is firewood and ash"],
    ["doubt", "A modern listener may still object"], ["lamp", "So what does this change for the living, the dying and the grieving"],
    ["vivid", "The round turns on"], ["lamp", "This is all the continuity there is"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["A lamp burns through the night", <LampsScene />],
    ["Every Buddhist tradition teaches that actions bear fruit", <PuzzleScene />],
    ["The contradiction is only apparent", <AssumptionScene />],
    ["Most of us picture rebirth like this", <HouseScene />],
    ["But look at an ordinary day", <SleepScene />],
    ["From the start, the Buddha taught against two opposite views", <ExtremesScene />],
    ["Between these two, the Buddha taught dependent arising", <MiddleScene />],
    ["tests every candidate for a carrier in the same way", <SearchScene />],
    ["A soul that never changes could not learn", <CandidatesScene />],
    ["But notice what is not lost", <KeptScene />],
    ["One rule matters here more than any other", <NothingScene />],
    ["It also helps to keep three kinds of claim apart", <ClaimsScene />],
    ["Rebirth is not a later addition", <AwakeningScene />],
    ["The clearest correction came to a monk named", <SatiScene />],
    ["The Buddha rebuked him sharply", <FireScene />],
    ["So a modern reader who rejects rebirth", <OddScene />],
    ["A naked ascetic named Kassapa", <KassapaScene />],
    ["Another wanderer asked what a being depends on", <WindScene />],
    ["The Buddha also left some questions unanswered", <FireOutScene />],
    ["The early teaching left a problem", <BridgesScene />],
    ["Each bridge names something", <BridgeReadScene />],
    ["asked a more radical question", <EmptyKarmaScene />],
    ["compares karma to a magician's creation", <MagicScene />],
    ["He also looked at the very moment of rebirth", <JointScene />],
    ["drew the conclusion", <MereIScene />],
    ["describes the interval between death and rebirth", <BardoScene />],
    ["This clear light can be read in two ways", <ClearLightScene />],
    ["Some teachers speak of a very subtle mind", <SubtleScene />],
    ["In Japan, the Zen master", <DogenScene />],
    ["His best known image is firewood and ash", <FirewoodScene />],
    ["There is also the story of", <FoxScene />],
    ["Not falling into cause and effect treats freedom as an escape", <FoxMeaningScene />],
    ["A modern listener may still object", <BrainScene />],
    ["What about memory", <MemoryScene />],
    ["Is karma unfair", <FairScene />],
    ["Is there evidence", <EvidenceScene />],
    ["So what does this change for the living, the dying and the grieving", <LivingScene />],
    ["For the dying, the view removes one dread", <DyingScene />],
    ["For the grieving, grief is not a mistake", <GriefScene />],
    ["And the end of rebirth", <EndScene />],
    ["The round turns on", <KnowScene />],
    ["This is all the continuity there is", <CloseScene />],
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
