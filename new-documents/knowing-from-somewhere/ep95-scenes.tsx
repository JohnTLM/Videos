// Bonus: Knowing From Somewhere. Explainer drawings timed to the narration.
// Arc: the meditating monk and the six knowledges -> two reactions, one mistake -> own nature, substance, the chariot,
// nothing exempt, put nothing in its place, three questions -> the knower, the fire, worlds by channels, no view from
// nowhere, wider is not from nowhere, no container, no carrier -> the six knowledges one by one, each with its sutta
// image -> the monk who went to the gods -> the tradition's caution -> two mistakes, the middle -> practice, close.
// Stance: no ground, field or awareness is drawn as a base layer; a floor or a box is shown only in order to remove
// it. Every knowing is drawn with a knower in a place; the widest view is a wide cone from a point, never a view
// from above everything. The sixth knowledge is never drawn as a deeper look at a hidden object.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the monk and the six
  "A monk sits in deep meditation", "His mind becomes still, bright, and steady", "it can be turned toward remarkable things",
  "He knows what is in the mind of the person sitting across from him", "He hears sounds from far away",
  "He remembers lives before this one", "He sees beings dying and being reborn", "He passes through a wall as if it were open air",
  "Buddhist tradition calls these the higher knowledges", "There are six", "Five are powers that come with deep concentration",
  "The sixth is different", "It is awakening itself",
  // two reactions
  "Modern listeners tend to meet these claims in one of two ways", "Some dismiss them at once", "Others embrace them as proof",
  "These two reactions look like opposites", "But they share one mistake", "For one it is matter", "For the other it is mind, or soul",
  "refuses that assumption everywhere", "It exempts nothing from the search", "the higher knowledges turn out to be a perfect test",
  // own nature and substance
  "Start with the word that the Middle Way takes apart", "Not made", "Not dependent on anything else", "Not changing in its essence",
  "can be called a substance", "Matter can be taken as the one thing that is really real", "So can mind, or awareness",
  "So can a self that stays the same", "So can a space, an empty box", "So can a hidden ground",
  "they all play the same role", "while it stands on nothing",
  // the search
  "The Middle Way does not refute substance by announcing that there is none", "a careful search should find it",
  "The classic example is a chariot", "The pole", "None of them", "All the parts in a heap", "Something apart from the parts",
  "And yet the king came by chariot", "No chariot is found in addition to them",
  "exempt one favourite thing", "The materialist searches the self", "The idealist searches matter",
  "The spiritual seeker searches the ordinary self", "Each of these stops one step early", "none is found standing on its own",
  "That does not make things unreal", "The cup still holds tea", "Fire still burns", "could never respond, or combine, or change",
  // put nothing in its place
  "There is one rule that matters more than any other here", "When a substance is removed",
  "No material bedrock does not mean that mind is the bedrock", "No travelling soul", "no ordinary view from nowhere",
  "install a new one in the empty space", "Even emptiness cannot be the new ground", "Emptiness, too, is empty",
  "there are three questions", "Can it be understood without one", "does the logic prove that the claim is true",
  "The answer to the last question is always no", "removing a bad argument against something",
  // the knower, worlds, wider
  "Now consider knowing itself", "the most tempting candidate for the last substance",
  "the mind that knows it is not found standing by itself either", "Knower and known arise together",
  "the very same consciousness wanders from life to life", "The Buddha rebuked him sharply",
  "a fire burning logs is called a log fire", "a fire burning grass is called a grass fire",
  "Then consider worlds", "A tick lives in a world of three signals", "A bat lives in a world of returning echoes",
  "A bee lives among ultraviolet patterns", "A human lives among colours, words, and clocks",
  "different channels of contact", "none of these worlds is the master copy",
  "One thing never crosses between worlds", "Any comparison is made from somewhere", "but always as a human",
  "notice carefully what this does not rule out", "A telescope already does that", "Science widens the human world enormously",
  "A view can grow wider without limit", "Wider is not the same as from nowhere",
  "There are two more pieces", "Distance does not need a container", "continuity does not need a carrier",
  "A lamp lit from another lamp", "Nothing passes over",
  // the six, one by one
  "Now the six knowledges themselves", "The Fruits of the Ascetic Life", "The deep absorptions of meditation",
  "pliable, workable, steady", "it gives a simple image",
  "The first is psychic power", "Going through a wall as if through space", "On the usual reading, this is a violation",
  "somehow one is forced through the other",
  "solidity is not something a wall owns by itself", "Dark matter, as far as we can tell",
  "spirits with subtle bodies pass through mountains", "It would be a change in the meeting", "The wall stays a wall for everyone else",
  "a skilled potter with well-prepared clay", "The power is described as workability", "Not force against a nature that resists",
  "This is no mechanism, and physics confirms nothing here",
  "The second is the divine ear", "a traveller on a road, who hears drums and horns", "an extremely long ear",
  "A telephone already makes a voice", "The hearer is on a road", "still a hearing from somewhere",
  "The third is knowing the minds of others", "having encompassed them with their own mind",
  "each mind is a sealed private room", "There are no sealed rooms on either side", "Ordinary empathy is already a real channel",
  "a finer channel of the same kind", "A mind with greed, or without it", "Freed or not freed",
  "These are conditioned states, not a hidden essence", "The knower does not merge into the other", "Two lamps remain two lamps",
  "The fourth is remembering past lives", "One life, two, a hundred, a hundred thousand",
  "This one seems to demand a substance more than any other", "carrying the memories across",
  "the root of a wrong view", "steady as a mountain peak, standing firm like a pillar",
  "The tradition rejects that conclusion, while keeping the memory",
  "When I remember yesterday", "a melody you know by heart", "with no traveller passing between",
  "The experience can stand", "Turning it into proof of a self is the mistake",
  "The fifth is the divine eye", "This seems at first like the view from nowhere itself",
  "A person with clear eyes stands in a raised house at the central square", "That is a place",
  "It is of an eye that looks from a height",
  "a process of dependence", "It does not see a soul travelling from body to body", "conditions in one life followed by results in another",
  "The sixth knowledge is the ending of the defilements", "the mind is freed", "The image is a clear mountain lake",
  "the greatest power of all", "Nothing is added to the lake",
  "Freedom, on this view, is not produced by causes", "never there to be fixed",
  "the five worldly knowledges widen the field", "It ends the clinging, whatever the field",
  // the monk who went to the gods
  "There is a story that gathers all of this together", "where earth, water, fire, and air finally cease",
  "a path to the gods opens before him", "realm after realm, each sending him on",
  "who is called the all-seeing, the maker, the creator", "answers only by repeating his own titles",
  "he takes the monk aside", "But I do not know either", "Go and ask the Buddha",
  "a bird released from a ship at sea", "it comes back to the ship", "the question was asked the wrong way",
  "where do they find no footing", "all the pairs we lay down together",
  "It did not find a bedrock", "was a being in a world, seeing from somewhere", "the answer was not a location at all",
  // caution
  "With striking caution", "to have a monk perform a miracle", "The Buddha refused", "There is a spell that can do that",
  "he was repelled by displays", "The demonstration he offered instead was instruction", "Think like this, not like that",
  "is experienced only by the one who performs it", "Instruction, he said, was the finest of the three",
  "commits an offence, even when what he says is true", "It is the ordinary training", "Keep your precepts", "Develop wisdom",
  "This caution is exactly what the view would predict", "because there is nothing to display",
  // two mistakes, the middle, practice, close
  "So there are two opposite mistakes", "The first dismisses the higher knowledges", "quietly makes matter the bedrock",
  "Physics, as practised, makes no such claim", "Doubting a particular report is sound",
  "The second mistake takes the knowledges as proof of a substance", "The old texts warn against this one more often",
  "The middle way between these is not a compromise", "cannot be settled by a substance on either side",
  "Whether a particular report is true is a matter of evidence", "It proves nothing",
  "for practice, the lesson is simple", "can be real as experiences", "The mistake is to build a self on them",
  "vastness, clarity, or pure awareness",
  "Every knowing, ordinary or extraordinary, is a knowing from somewhere", "By someone", "Through a channel",
  "would widen that somewhere", "They would not abolish it",
  "What the tradition values most is not reaching further", "or the one who reaches it",
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

// ---------------------------------------------------------------- drawings
/** A seated meditator, legs crossed; glow breathes slowly. */
const Sitter: React.FC<{ color?: string; size?: number; glow?: number }> = ({ color = CHALK, size = 200, glow = 0 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible",
      filter: `drop-shadow(0 0 ${6 + glow * (10 + 4 * Math.sin(t * 1.3))}px ${glow > 0.2 ? GOLD : color}aa)` }}>
      <circle cx={50} cy={22} r={10} fill={`${color}33`} stroke={color} strokeWidth={3} />
      <path d="M50 33 Q36 36 34 58 L66 58 Q64 36 50 33 Z" fill={`${color}22`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
      <path d="M38 48 Q30 60 44 64 M62 48 Q70 60 56 64" fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" />
      <path d="M18 76 Q50 58 82 76 Q50 88 18 76 Z" fill={`${color}22`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    </svg>
  );
};

/** A plain standing figure. */
const Person: React.FC<{ color?: string; size?: number; halo?: boolean }> = ({ color = CHALK, size = 150, halo }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    {halo && <circle cx={30} cy={16} r={20} fill="none" stroke={GOLD} strokeWidth={2.5} opacity={0.8} />}
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round" />
  </svg>
);

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

const Ear: React.FC<{ color?: string; size?: number }> = ({ color = TEAL, size = 120 }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 70 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}99)` }}>
    <path d="M20 40 Q20 8 45 8 Q66 10 64 38 Q62 56 48 64 Q40 70 42 84 Q42 96 30 94" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
    <path d="M32 40 Q34 24 46 26 Q54 30 50 42" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

/** Sound arcs spreading from a source. */
const Waves: React.FC<{ color?: string; dir?: 1 | -1 }> = ({ color = TEAL, dir = 1 }) => {
  const { t } = useT();
  return (
    <svg width={160} height={160} viewBox="0 0 160 160" style={{ overflow: "visible", transform: `scaleX(${dir})` }}>
      {[0, 1, 2].map((k) => {
        const ph = (t * 0.8 + k / 3) % 1;
        return <path key={k} d={`M${30 + ph * 90} ${80 - 50 * (0.4 + ph)} Q${55 + ph * 110} 80 ${30 + ph * 90} ${80 + 50 * (0.4 + ph)}`}
          fill="none" stroke={color} strokeWidth={4} opacity={1 - ph} strokeLinecap="round" />;
      })}
    </svg>
  );
};

/** An oil lamp with a breathing flame. */
const Lamp: React.FC<{ color?: string; size?: number }> = ({ color = GOLD, size = 150 }) => {
  const { t } = useT();
  const f = 1 + 0.08 * Math.sin(t * 7) + 0.05 * Math.sin(t * 11);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible" }}>
      <path d={`M50 ${60 - 34 * f} Q66 44 50 62 Q34 44 50 ${60 - 34 * f} Z`} fill={`${color}cc`} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
      <path d="M15 66 Q50 96 85 66 Z" fill={`${WARM}55`} stroke={WARM} strokeWidth={3.5} />
    </svg>
  );
};

/** A brick wall. */
const Wall: React.FC<{ color?: string; h?: number; o?: number }> = ({ color = WARM, h = 300, o = 1 }) => (
  <svg width={90} height={h} viewBox={`0 0 90 ${h}`} style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}77)` }}>
    {Array.from({ length: Math.floor(h / 40) }).map((_, r) => (
      <g key={r}>
        <rect x={r % 2 ? -20 : 0} y={r * 40} width={50} height={36} rx={3} fill={`${color}33`} stroke={color} strokeWidth={3} />
        <rect x={r % 2 ? 34 : 54} y={r * 40} width={50} height={36} rx={3} fill={`${color}33`} stroke={color} strokeWidth={3} />
      </g>
    ))}
  </svg>
);

/** A wire-frame box: the container picture of space. */
const SpaceBox: React.FC<{ color?: string; o?: number }> = ({ color = ICE, o = 1 }) => (
  <svg width={420} height={330} viewBox="0 0 460 360" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 10px ${color}77)` }}>
    <path d="M60 110 L300 110 L300 330 L60 330 Z M160 30 L400 30 L400 250 L300 330 M60 110 L160 30 M300 110 L400 30" fill="none" stroke={color} strokeWidth={4} />
    <path d="M60 330 L160 250 L400 250 M160 250 L160 30" fill="none" stroke={color} strokeWidth={3} strokeDasharray="10 10" opacity={0.6} />
  </svg>
);

/** A floor bar, drawn only so that it can be taken away. */
const Floor: React.FC<{ w?: number; color?: string }> = ({ w = 900, color = WARM }) => (
  <div style={{ width: w, height: 24, borderRadius: 12, background: `${color}55`, border: `3px solid ${color}`, boxShadow: `0 0 16px ${color}77` }} />
);
const Cross: React.FC<{ size?: number }> = ({ size = 160 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100"><path d="M15 15 L85 85 M85 15 L15 85" stroke={WARM} strokeWidth={9} strokeLinecap="round" /></svg>
);

const Chariot: React.FC<{ apart?: number }> = ({ apart = 0 }) => {
  const a = apart * 120;
  return (
    <svg width={520} height={260} viewBox="0 0 520 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}77)` }}>
      <g transform={`translate(${-a * 0.6} ${-a * 0.5})`}><path d="M20 120 L170 120" stroke={GOLD} strokeWidth={8} strokeLinecap="round" /></g>
      <g transform={`translate(0 ${-a * 0.7})`}><path d="M170 80 L380 80 L360 150 L190 150 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" /></g>
      <g transform={`translate(${a * 0.3} ${a * 0.4})`}><path d="M200 190 L360 190" stroke={ICE} strokeWidth={7} strokeLinecap="round" /></g>
      {[200, 360].map((x, i) => (
        <g key={x} transform={`translate(${(i ? 1 : -1) * a} ${a * 0.6})`}>
          <circle cx={x} cy={190} r={52} fill="none" stroke={CHALK} strokeWidth={6} />
          {[0, 45, 90, 135].map((r) => <path key={r} d={`M${x - 52} 190 L${x + 52} 190`} stroke={CHALK} strokeWidth={3} transform={`rotate(${r} ${x} 190)`} />)}
        </g>
      ))}
    </svg>
  );
};

const Cup: React.FC = () => (
  <svg width={150} height={130} viewBox="0 0 150 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${CHALK}66)` }}>
    <path d="M20 20 L110 20 L100 115 L30 115 Z" fill={`${WARM}33`} stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
    <path d="M110 40 Q140 45 135 70 Q130 90 104 88" fill="none" stroke={CHALK} strokeWidth={5} />
    <path d="M45 10 Q50 -5 45 -18 M70 10 Q75 -5 70 -18" fill="none" stroke={DIM} strokeWidth={3} strokeLinecap="round" />
  </svg>
);

const Fire: React.FC<{ color?: string; fuel?: "logs" | "grass" }> = ({ color = WARM, fuel = "logs" }) => {
  const { t } = useT();
  const f = 1 + 0.08 * Math.sin(t * 8) + 0.05 * Math.sin(t * 13);
  return (
    <svg width={180} height={200} viewBox="0 0 180 200" style={{ overflow: "visible" }}>
      <path d={`M90 ${150 - 110 * f} Q140 90 120 150 Q90 170 60 150 Q40 90 90 ${150 - 110 * f} Z`} fill={`${color}aa`} style={{ filter: `drop-shadow(0 0 16px ${color})` }} />
      <path d={`M90 ${150 - 60 * f} Q112 120 102 150 Q90 158 78 150 Q68 120 90 ${150 - 60 * f} Z`} fill={`${GOLD}dd`} />
      {fuel === "logs"
        ? <path d="M30 165 L150 185 M30 185 L150 165" stroke={GOLD} strokeWidth={14} strokeLinecap="round" opacity={0.8} />
        : <path d="M40 185 L50 150 M60 185 L64 145 M80 185 L78 150 M100 185 L104 145 M120 185 L118 150 M140 185 L132 150" stroke={GREEN} strokeWidth={5} strokeLinecap="round" />}
    </svg>
  );
};

const Tick: React.FC<{ color?: string; size?: number }> = ({ color = ROSE, size = 110 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}99)` }}>
    {[-1, 1].flatMap((sx) => [20, 35, 50, 65].map((y) => (
      <path key={`${sx}${y}`} d={`M50 ${y + 10} L${50 + sx * 38} ${y + (y < 45 ? -6 : 10)}`} stroke={color} strokeWidth={3} strokeLinecap="round" />
    )))}
    <ellipse cx={50} cy={55} rx={22} ry={30} fill={`${color}44`} stroke={color} strokeWidth={4} />
    <circle cx={50} cy={22} r={8} fill={`${color}66`} stroke={color} strokeWidth={3} />
  </svg>
);

const Bat: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={220} height={100} viewBox="0 0 240 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}aa)` }}>
    <path d="M120 40 Q95 10 60 25 Q30 20 5 50 Q35 50 45 70 Q65 55 80 75 Q95 60 120 75 Q145 60 160 75 Q175 55 195 70 Q205 50 235 50 Q210 20 180 25 Q145 10 120 40 Z"
      fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

const Bee: React.FC = () => (
  <svg width={110} height={80} viewBox="0 0 110 80" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GOLD}99)` }}>
    <ellipse cx={40} cy={18} rx={18} ry={12} fill={`${ICE}44`} stroke={ICE} strokeWidth={3} />
    <ellipse cx={66} cy={18} rx={18} ry={12} fill={`${ICE}44`} stroke={ICE} strokeWidth={3} />
    <ellipse cx={55} cy={48} rx={36} ry={22} fill={`${GOLD}66`} stroke={GOLD} strokeWidth={4} />
    {[42, 56, 70].map((x) => <path key={x} d={`M${x} 28 L${x} 68`} stroke="#000a" strokeWidth={6} />)}
  </svg>
);

/** A cone of view opening from a point: p = how wide (0..1). Always drawn from a seer, never from above. */
const Cone: React.FC<{ p: number; color?: string; len?: number }> = ({ p, color = GOLD, len = 700 }) => {
  const half = 20 + 300 * p;
  return (
    <svg width={len + 40} height={700} viewBox={`0 -350 ${len + 40} 700`} style={{ overflow: "visible" }}>
      <path d={`M0 0 L${len} ${-half} L${len} ${half} Z`} fill={`${color}22`} stroke={color} strokeWidth={3} strokeDasharray="10 8" />
      <circle cx={0} cy={0} r={12} fill={color} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
    </svg>
  );
};

const Telescope: React.FC = () => (
  <svg width={220} height={140} viewBox="0 0 220 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ICE}88)` }}>
    <path d="M20 90 L180 30 L195 60 L35 120 Z" fill={`${ICE}22`} stroke={ICE} strokeWidth={5} strokeLinejoin="round" />
    <path d="M100 80 L80 135 M100 80 L125 135" stroke={CHALK} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

/** A potter's pot taking shape: p 0..1. */
const Pot: React.FC<{ p: number }> = ({ p }) => {
  const w = 40 + 50 * p;
  return (
    <svg width={240} height={220} viewBox="0 0 240 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${WARM}88)` }}>
      <ellipse cx={120} cy={200} rx={100} ry={14} fill={`${DIM}55`} stroke={DIM} strokeWidth={3} />
      <path d={`M${120 - 30} 40 Q${120 - w} ${110} ${120 - 45} 190 L${120 + 45} 190 Q${120 + w} 110 ${120 + 30} 40 Z`}
        fill={`${WARM}44`} stroke={WARM} strokeWidth={5} strokeLinejoin="round" />
      <ellipse cx={120} cy={40} rx={30} ry={7} fill="none" stroke={WARM} strokeWidth={4} />
    </svg>
  );
};

const Phone: React.FC = () => (
  <svg width={90} height={150} viewBox="0 0 90 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ICE}88)` }}>
    <rect x={8} y={5} width={74} height={140} rx={12} fill={`${ICE}22`} stroke={ICE} strokeWidth={5} />
    <circle cx={45} cy={128} r={6} fill={ICE} />
  </svg>
);

const Drum: React.FC = () => (
  <svg width={130} height={110} viewBox="0 0 130 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GOLD}88)` }}>
    <ellipse cx={65} cy={25} rx={55} ry={16} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
    <path d="M10 25 L18 90 Q65 108 112 90 L120 25" fill={`${WARM}33`} stroke={GOLD} strokeWidth={4} />
    <path d="M20 30 L50 95 M110 30 L80 95" stroke={GOLD} strokeWidth={2} opacity={0.7} />
  </svg>
);

/** A sealed room: a box with a lock. */
const Room: React.FC<{ color?: string; open?: number }> = ({ color = DIM, open = 0 }) => (
  <svg width={200} height={180} viewBox="0 0 200 180" style={{ overflow: "visible", opacity: 1 - open * 0.85 }}>
    <rect x={10} y={10} width={180} height={160} rx={8} fill={`${color}22`} stroke={color} strokeWidth={5} />
    <rect x={88} y={78} width={24} height={22} rx={3} fill={color} />
    <path d="M92 78 L92 66 Q100 54 108 66 L108 78" fill="none" stroke={color} strokeWidth={4} />
  </svg>
);

/** A mirror with a face in it. */
const Mirror: React.FC = () => (
  <svg width={150} height={190} viewBox="0 0 150 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE}88)` }}>
    <ellipse cx={75} cy={80} rx={60} ry={75} fill={`${ICE}22`} stroke={ICE} strokeWidth={5} />
    <circle cx={75} cy={72} r={24} fill="none" stroke={CHALK} strokeWidth={3} opacity={0.7} />
    <circle cx={86} cy={66} r={3} fill={WARM} />
    <path d="M75 155 L75 185 M50 185 L100 185" stroke={ICE} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

/** A mountain peak and a pillar: the "eternal self" conclusion. */
const Pillar: React.FC = () => (
  <svg width={360} height={260} viewBox="0 0 360 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${WARM}77)` }}>
    <path d="M10 250 L120 60 L230 250 Z" fill={`${DIM}33`} stroke={DIM} strokeWidth={5} strokeLinejoin="round" />
    <rect x={270} y={40} width={50} height={210} fill={`${WARM}33`} stroke={WARM} strokeWidth={5} />
    <path d="M255 40 L335 40 M255 250 L335 250" stroke={WARM} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

/** Music notes: a melody known by heart. */
const Notes: React.FC<{ color?: string }> = ({ color = VIOLET }) => {
  const { t } = useT();
  return (
    <svg width={260} height={140} viewBox="0 0 260 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}99)` }}>
      {[0, 1, 2, 3].map((k) => {
        const y = 80 + 14 * Math.sin(t * 2 + k);
        return (
          <g key={k}>
            <ellipse cx={30 + k * 60} cy={y} rx={14} ry={10} fill={color} />
            <path d={`M${43 + k * 60} ${y} L${43 + k * 60} ${y - 60}`} stroke={color} strokeWidth={4} />
          </g>
        );
      })}
    </svg>
  );
};

/** A stilt house at a square: the seer is in a place. */
const Longhouse: React.FC = () => (
  <svg width={260} height={240} viewBox="0 0 260 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}77)` }}>
    <path d="M20 90 L130 20 L240 90 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
    <rect x={40} y={90} width={180} height={70} fill={`${GOLD}18`} stroke={GOLD} strokeWidth={5} />
    <path d="M60 160 L60 235 M200 160 L200 235 M130 160 L130 235" stroke={GOLD} strokeWidth={6} />
    <circle cx={130} cy={118} r={11} fill={`${CHALK}55`} stroke={CHALK} strokeWidth={3} />
  </svg>
);

/** A clear lake with shells, pebbles and fish. */
const Lake: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={620} height={240} viewBox="0 0 620 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ICE}66)` }}>
      <path d="M20 40 Q310 0 600 40 Q600 200 310 230 Q20 200 20 40 Z" fill={`${ICE}22`} stroke={ICE} strokeWidth={4} />
      {[[120, 170], [200, 190], [420, 185], [500, 160]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={14} ry={8} fill={`${DIM}aa`} />)}
      {[[260, 180], [340, 195]].map(([x, y], i) => <path key={i} d={`M${x} ${y} q 12 -18 24 0 z`} fill={`${ROSE}88`} stroke={ROSE} strokeWidth={2} />)}
      {[0, 1].map((k) => {
        const x = 200 + 200 * k + 30 * Math.sin(t * 0.8 + k * 2);
        return <path key={k} d={`M${x} 110 q 25 -18 50 0 q -25 18 -50 0 z M${x + 50} 110 l 16 -10 l 0 20 z`} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={3} />;
      })}
    </svg>
  );
};

/** A small bird. */
const Bird: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={90} height={50} viewBox="0 0 90 50" style={{ overflow: "visible", filter: `drop-shadow(0 0 6px ${color}99)` }}>
    <path d="M5 30 Q25 5 45 28 Q65 5 85 30" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

const Ship: React.FC = () => (
  <svg width={240} height={160} viewBox="0 0 240 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}66)` }}>
    <path d="M20 100 L220 100 L190 140 L50 140 Z" fill={`${WARM}44`} stroke={WARM} strokeWidth={5} strokeLinejoin="round" />
    <path d="M120 100 L120 10 L190 85 Z" fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <path d="M0 150 Q60 135 120 150 T240 150" fill="none" stroke={ICE} strokeWidth={4} />
  </svg>
);

/** Stacked heavens: tiers that the monk climbs, each one "does not know". */
const Tiers: React.FC<{ n: number }> = ({ n }) => (
  <svg width={520} height={560} viewBox="0 0 520 560" style={{ overflow: "visible" }}>
    {[0, 1, 2, 3, 4, 5].map((k) => (
      <g key={k} opacity={Math.max(0, Math.min(1, n - k))}>
        <path d={`M${60 + k * 20} ${520 - k * 90} L${460 - k * 20} ${520 - k * 90}`} stroke={k === 5 ? GOLD : VIOLET} strokeWidth={5} strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 8px ${k === 5 ? GOLD : VIOLET})` }} />
      </g>
    ))}
  </svg>
);

const Scales: React.FC = () => (
  <svg width={320} height={220} viewBox="0 0 320 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GOLD}88)` }}>
    <path d="M160 20 L160 200 M100 200 L220 200 M40 50 L280 50" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    <path d="M40 50 L10 120 L70 120 Z M280 50 L250 120 L310 120 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

// ---------------------------------------------------------------- scenes
const MonkScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("A monk sits in deep meditation");
  const still = ramp(t, c("His mind becomes still, bright, and steady"), 2.0);
  const icons: [string, number, number, React.ReactNode, string][] = [
    ["He knows what is in the mind of the person sitting across from him", 420, 330, <Person color={ROSE} size={130} />, ROSE],
    ["He hears sounds from far away", 1500, 330, <Ear />, TEAL],
    ["He remembers lives before this one", 380, 700, <Lamp color={VIOLET} size={120} />, VIOLET],
    ["He sees beings dying and being reborn", 1540, 700, <Eye color={ICE} size={140} />, ICE],
    ["He passes through a wall as if it were open air", 960, 230, <Wall h={160} o={0.8} />, WARM],
  ];
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center", opacity: 1 - ramp(t, c(icons[0][0]) - 0.6, 0.4) }}>
        <Reveal text="knowing from somewhere" at={0.2} size={72} />
      </div>
      <At x={960} y={560} s={pop(t, fps, b)}><Sitter size={240} glow={still} /></At>
      <Ring x={960} y={560} p={ramp(t, c("it can be turned toward remarkable things"), 2.0)} r0={120} r1={360} color={GOLD} />
      {icons.map(([cue, x, y, node, col], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} s={pop(t, fps, c(cue))}>{node}</At>
          <Flow x1={960} y1={560} x2={x} y2={y} color={col} p={ramp(t, c(cue) + 0.3, 0.8)} pulses={false} />
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const SixScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const six = c("There are six");
  const names = ["psychic power", "divine ear", "other minds", "past lives", "divine eye"];
  const diff = c("The sixth is different");
  return (
    <AbsoluteFill>
      <Title at={c("Buddhist tradition calls these the higher knowledges")} color={GOLD}>the higher knowledges</Title>
      {names.map((n, i) => (
        <At key={n} x={360 + i * 300} y={400} s={pop(t, fps, six + 0.3 + i * 0.25)}><K c={[WARM, TEAL, ROSE, VIOLET, ICE][i]} s={28}>{n}</K></At>
      ))}
      <Items items={[
        ["Five are powers that come with deep concentration", 960, 500, <W c={DIM} s={30}>five come with deep concentration</W>],
      ]} />
      <At x={960} y={660} s={pop(t, fps, diff, 14)}><K c={GOLD} s={40}>the ending of the defilements</K></At>
      <Items items={[
        ["It is awakening itself", 960, 770, <W c={GOLD} s={40} serif>awakening itself</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ReactionsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const share = c("But they share one mistake");
  return (
    <AbsoluteFill>
      <Title at={c("Modern listeners tend to meet these claims in one of two ways")}>two reactions</Title>
      <Items items={[
        ["Some dismiss them at once", 560, 300, <W c={ICE} s={40} serif>“impossible”</W>],
        ["Others embrace them as proof", 1360, 300, <W c={VIOLET} s={40} serif>“proof!”</W>],
        ["These two reactions look like opposites", 960, 300, <W c={DIM} s={30}>opposites?</W>],
        ["For one it is matter", 560, 560, <Floor w={480} color={ICE} />],
        ["For one it is matter", 560, 610, <K c={ICE}>matter, the floor</K>, { d: 0.3 }],
        ["For the other it is mind, or soul", 1360, 560, <Floor w={480} color={VIOLET} />],
        ["For the other it is mind, or soul", 1360, 610, <K c={VIOLET}>mind or soul, the floor</K>, { d: 0.3 }],
      ]} />
      <At x={960} y={430} o={ramp(t, share, 0.5)}><W c={WARM} s={36} serif>one mistake: something that exists all by itself</W></At>
      <Items items={[
        ["refuses that assumption everywhere", 960, 760, <W c={GOLD} s={36} serif>the Middle Way exempts nothing</W>],
        ["the higher knowledges turn out to be a perfect test", 960, 840, <W c={TEAL} s={30}>the higher knowledges: a test case</W>],
      ]} />
    </AbsoluteFill>
  );
};

const OwnNatureScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Start with the word that the Middle Way takes apart")} color={GOLD} size={52}>own nature</Title>
      <Items items={[
        ["Start with the word that the Middle Way takes apart", 960, 200, <W c={DIM} s={28}>what a thing would be entirely from its own side</W>, { d: 1.5 }],
        ["Not made", 960, 360, <K c={ICE} s={34}>not made</K>, { pop: true }],
        ["Not dependent on anything else", 960, 460, <K c={TEAL} s={34}>not dependent on anything else</K>, { pop: true }],
        ["Not changing in its essence", 960, 560, <K c={VIOLET} s={34}>not changing in its essence</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const role = c("they all play the same role");
  const cands: [string, string, string][] = [
    ["Matter can be taken as the one thing that is really real", "matter", ICE],
    ["So can mind, or awareness", "mind, awareness", VIOLET],
    ["So can a self that stays the same", "a self", ROSE],
    ["So can a space, an empty box", "a space", TEAL],
    ["So can a hidden ground", "a hidden ground", WARM],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("can be called a substance")}>a substance: anything taken to have own nature</Title>
      {cands.map(([cue, w, col], i) => (
        <At key={w} x={360 + i * 300} y={360} s={pop(t, fps, c(cue))}><K c={col} s={30}>{w}</K></At>
      ))}
      <At x={960} y={600} o={ramp(t, role, 0.5)}><Floor w={1300} color={GOLD} /></At>
      <At x={960} y={680} o={ramp(t, role + 0.4, 0.5)}><W c={GOLD} s={34}>each a candidate for the floor</W></At>
      <Items items={[
        ["while it stands on nothing", 960, 780, <W c={DIM} s={32} serif>everything stands on it; it stands on nothing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const apart = ramp(t, c("All the parts in a heap"), 1.2) * (1 - ramp(t, c("And yet the king came by chariot"), 1.0));
  return (
    <AbsoluteFill>
      <Items items={[
        ["The Middle Way does not refute substance by announcing that there is none", 960, 120, <W c={CHALK} s={40} serif>it does not announce; it looks</W>, { until: "The classic example is a chariot" }],
        ["a careful search should find it", 960, 190, <W c={DIM} s={28}>if it is there by itself, a search should find it</W>, { until: "The classic example is a chariot" }],
      ]} />
      <Title at={c("The classic example is a chariot")} color={GOLD}>where is the chariot?</Title>
      <At x={960} y={460} o={ramp(t, c("The classic example is a chariot"), 0.5)}><Chariot apart={apart} /></At>
      <Items items={[
        ["The pole", 960, 680, <W c={DIM} s={30}>the pole? the axle? the wheels?</W>, { until: "All the parts in a heap" }],
        ["None of them", 960, 740, <W c={WARM} s={30}>none of them</W>, { until: "All the parts in a heap" }],
        ["All the parts in a heap", 960, 700, <W c={WARM} s={30}>the heap? not that either</W>, { until: "Something apart from the parts" }],
        ["Something apart from the parts", 960, 700, <W c={WARM} s={30}>something apart? nothing found</W>, { until: "And yet the king came by chariot" }],
        ["And yet the king came by chariot", 960, 700, <W c={GOLD} s={38} serif>and yet the king came by chariot</W>],
        ["No chariot is found in addition to them", 960, 790, <W c={TEAL} s={30}>a name that works, in dependence on the parts</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ExemptScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, string, string][] = [
    ["The materialist searches the self", "searches the self", "keeps matter", ICE],
    ["The idealist searches matter", "searches matter", "keeps mind", VIOLET],
    ["The spiritual seeker searches the ordinary self", "searches the ordinary self", "keeps a pure awareness", ROSE],
  ];
  const early = c("Each of these stops one step early");
  return (
    <AbsoluteFill>
      <Title at={c("exempt one favourite thing")}>the escape: exempt one favourite thing</Title>
      {rows.map(([cue, a, b, col], i) => (
        <React.Fragment key={i}>
          <At x={700} y={300 + i * 120} o={ramp(t, c(cue), 0.5)}><W c={CHALK} s={30}>{a}</W></At>
          <At x={1240} y={300 + i * 120} o={ramp(t, c(cue) + 1.0, 0.5)}><K c={col}>{b}</K></At>
          <At x={1480} y={300 + i * 120} o={ramp(t, early + 0.3 * i, 0.4)}><Cross size={60} /></At>
        </React.Fragment>
      ))}
      <At x={960} y={700} o={ramp(t, early, 0.5)}><W c={WARM} s={34} serif>each stops one step early</W></At>
      <Items items={[
        ["none is found standing on its own", 960, 790, <W c={GOLD} s={34}>matter, mind, self, space, awareness: none found standing alone</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NotUnrealScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("That does not make things unreal")} color={TEAL}>empty is not unreal</Title>
      <Items items={[
        ["The cup still holds tea", 620, 420, <Cup />, { pop: true }],
        ["Fire still burns", 1300, 410, <Fire />, { pop: true }],
        ["could never respond, or combine, or change", 960, 700, <W c={GOLD} s={36} serif>a fixed nature could never respond, combine or change</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NothingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rule = c("When a substance is removed");
  return (
    <AbsoluteFill>
      <Title at={c("There is one rule that matters more than any other here")}>one rule</Title>
      <At x={960} y={230} s={pop(t, fps, rule, 14)} o={ramp(t, rule, 0.4)}><W c={GOLD} s={48} serif>remove a substance; put nothing in its place</W></At>
      <Items items={[
        ["No material bedrock does not mean that mind is the bedrock", 960, 380, <W c={CHALK} s={30}>no material bedrock ≠ mind is the bedrock</W>],
        ["No travelling soul", 960, 450, <W c={CHALK} s={30}>no travelling soul ≠ a subtler traveller</W>],
        ["no ordinary view from nowhere", 960, 520, <W c={CHALK} s={30}>no ordinary view from nowhere ≠ a higher one</W>],
        ["install a new one in the empty space", 960, 640, <Floor w={600} color={WARM} />],
        ["install a new one in the empty space", 960, 640, <Cross size={110} />, { d: 1.2 }],
        ["Even emptiness cannot be the new ground", 960, 760, <W c={VIOLET} s={34}>not even emptiness is the new ground</W>],
        ["Emptiness, too, is empty", 960, 830, <W c={GOLD} s={36} serif>emptiness, too, is empty</W>],
      ]} />
    </AbsoluteFill>
  );
};

const QuestionsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("there are three questions")}>three questions for every claim</Title>
      <Items items={[
        ["there are three questions", 960, 300, <K c={ICE} s={32}>1. does it need a substance?</K>, { d: 1.2, pop: true }],
        ["Can it be understood without one", 960, 400, <K c={TEAL} s={32}>2. can it do without one?</K>, { pop: true }],
        ["does the logic prove that the claim is true", 960, 500, <K c={GOLD} s={32}>3. does the logic prove it?</K>, { pop: true }],
        ["The answer to the last question is always no", 1420, 500, <W c={WARM} s={40} serif>no</W>],
        ["removing a bad argument against something", 960, 700, <W c={CHALK} s={32} serif>removing a bad argument against something</W>],
        ["removing a bad argument against something", 960, 770, <W c={GOLD} s={32} serif>is not supplying a good argument for it</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const KnowerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tog = c("Knower and known arise together");
  return (
    <AbsoluteFill>
      <Title at={c("Now consider knowing itself")}>the knower</Title>
      <Items items={[
        ["the most tempting candidate for the last substance", 960, 230, <W c={DIM} s={30}>the last candidate for a floor</W>],
        ["the mind that knows it is not found standing by itself either", 960, 300, <W c={CHALK} s={30}>if the object is not found alone, neither is the mind</W>],
      ]} />
      <At x={700 + 60 * ramp(t, tog, 1.0)} y={500} o={ramp(t, tog - 0.5, 0.5)}><Eye color={ICE} size={170} /></At>
      <At x={1220 - 60 * ramp(t, tog, 1.0)} y={500} o={ramp(t, tog - 0.5, 0.5)}><Orb size={90} color={GOLD} /></At>
      <Flow x1={760} y1={500} x2={1160} y2={500} color={TEAL} p={ramp(t, tog + 0.5, 0.8)} />
      <At x={960} y={660} o={ramp(t, tog + 0.6, 0.5)}><W c={TEAL} s={34} serif>knower and known arise together</W></At>
    </AbsoluteFill>
  );
};

const FireScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["the very same consciousness wanders from life to life", 960, 200, <W c={WARM} s={34} serif>“the same consciousness wanders on”</W>],
        ["The Buddha rebuked him sharply", 960, 270, <W c={DIM} s={30}>rebuked: consciousness is dependently arisen</W>],
        ["a fire burning logs is called a log fire", 640, 520, <Fire fuel="logs" />, { pop: true }],
        ["a fire burning logs is called a log fire", 640, 700, <K c={GOLD}>a log fire</K>, { d: 0.6 }],
        ["a fire burning grass is called a grass fire", 1280, 520, <Fire fuel="grass" />, { pop: true }],
        ["a fire burning grass is called a grass fire", 1280, 700, <K c={GREEN}>a grass fire</K>, { d: 0.6 }],
        ["a fire burning grass is called a grass fire", 960, 820, <W c={CHALK} s={30}>named after its conditions</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const WorldsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const beings: [string, number, number, React.ReactNode][] = [
    ["A tick lives in a world of three signals", 420, 380, <Tick />],
    ["A bat lives in a world of returning echoes", 820, 380, <Bat />],
    ["A bee lives among ultraviolet patterns", 1180, 380, <Bee />],
    ["A human lives among colours, words, and clocks", 1520, 380, <Person color={ICE} size={140} />],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("Then consider worlds")}>many worlds</Title>
      {beings.map(([cue, x, y, node], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} o={ramp(t, c(cue), 0.5)}>{node}</At>
          <Ring x={x} y={y} p={ramp(t, c(cue) + 0.3, 1.5)} r0={60} r1={150} color={[ROSE, VIOLET, GOLD, ICE][i]} />
        </React.Fragment>
      ))}
      <Items items={[
        ["different channels of contact", 960, 640, <W c={TEAL} s={34} serif>made by channels, not by walls</W>],
        ["none of these worlds is the master copy", 960, 730, <W c={GOLD} s={32}>no master copy</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WiderScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const wide = ramp(t, c("A view can grow wider without limit"), 3.0);
  const tel = c("A telescope already does that");
  return (
    <AbsoluteFill>
      <Items items={[
        ["One thing never crosses between worlds", 960, 120, <W c={CHALK} s={40} serif>no view from nowhere</W>, { until: "notice carefully what this does not rule out" }],
        ["Any comparison is made from somewhere", 960, 190, <W c={DIM} s={30}>every comparison is made from somewhere</W>, { until: "notice carefully what this does not rule out" }],
        ["but always as a human", 960, 250, <W c={ICE} s={30}>the bat, known always as a human</W>, { until: "notice carefully what this does not rule out" }],
        ["notice carefully what this does not rule out", 960, 120, <W c={GOLD} s={40} serif>what this does not rule out</W>],
      ]} />
      <At x={620} y={560} o={ramp(t, c("One thing never crosses between worlds"), 0.6)}><Cone p={0.05 + 0.85 * wide + 0.08 * ramp(t, tel, 1)} /></At>
      <At x={250} y={560} o={ramp(t, c("One thing never crosses between worlds"), 0.6)}><Person color={GOLD} size={160} /></At>
      <Items items={[
        ["A telescope already does that", 380, 760, <Telescope />, { pop: true }],
        ["Science widens the human world enormously", 1300, 860, <W c={TEAL} s={30}>wider, without leaving the human world</W>],
        ["Wider is not the same as from nowhere", 1300, 260, <W c={GOLD} s={44} serif>wider is not from nowhere</W>],
      ]} />
    </AbsoluteFill>
  );
};

const PiecesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const box = c("Distance does not need a container");
  return (
    <AbsoluteFill>
      <Title at={c("There are two more pieces")}>two more pieces</Title>
      <At x={560} y={440} o={ramp(t, box, 0.5) * (1 - ramp(t, box + 2.2, 0.8))}><SpaceBox /></At>
      <At x={560} y={440} o={ramp(t, box + 1.2, 0.5)}><Cross size={150} /></At>
      <At x={560} y={680} o={ramp(t, box + 0.4, 0.5)}><W c={ICE} s={30}>near and far: within a world</W></At>
      <Items items={[
        ["continuity does not need a carrier", 1360, 260, <W c={VIOLET} s={30}>continuity without a carrier</W>],
        ["A lamp lit from another lamp", 1240, 450, <Lamp />, { pop: true }],
        ["A lamp lit from another lamp", 1480, 450, <Lamp />, { pop: true, d: 1.0 }],
        ["Nothing passes over", 1360, 650, <W c={GOLD} s={34} serif>nothing passes over</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FruitsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Now the six knowledges themselves")} color={GOLD}>the six, one by one</Title>
      <Items items={[
        ["The Fruits of the Ascetic Life", 960, 220, <W c={DIM} s={32} serif>“The Fruits of the Ascetic Life”</W>],
        ["The deep absorptions of meditation", 960, 330, <W c={CHALK} s={30}>ethics · restraint · deep absorption</W>],
      ]} />
      <At x={960} y={560} o={ramp(t, c("The deep absorptions of meditation"), 0.6)}><Sitter size={220} glow={ramp(t, c("pliable, workable, steady"), 1.5)} /></At>
      <Items items={[
        ["pliable, workable, steady", 960, 760, <W c={GOLD} s={32}>bright · flawless · pliable · workable · steady</W>],
        ["it gives a simple image", 960, 840, <W c={TEAL} s={30}>each knowledge comes with a simple image</W>],
      ]} />
    </AbsoluteFill>
  );
};

const PowerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const vio = c("On the usual reading, this is a violation");
  const push = ramp(t, c("somehow one is forced through the other"), 1.5);
  return (
    <AbsoluteFill>
      <Title at={c("The first is psychic power")} color={WARM}>1 · psychic power</Title>
      <Items items={[
        ["Going through a wall as if through space", 960, 210, <W c={DIM} s={30}>“through a wall, as if through space”</W>],
      ]} />
      <At x={1000} y={520} o={ramp(t, vio, 0.5)}><Wall h={320} /></At>
      <At x={1000} y={720} o={ramp(t, vio + 0.4, 0.5)}><K c={WARM}>solid by nature?</K></At>
      <At x={620 + 300 * push} y={520} o={ramp(t, vio + 0.6, 0.5)}><Person color={CHALK} size={170} /></At>
      <Items items={[
        ["somehow one is forced through the other", 960, 840, <W c={WARM} s={30}>a violation of a bedrock?</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SolidScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const meet = c("It would be a change in the meeting");
  return (
    <AbsoluteFill>
      <Items items={[
        ["solidity is not something a wall owns by itself", 960, 120, <W c={GOLD} s={38} serif>solidity: a meeting, not a possession</W>],
        ["Dark matter, as far as we can tell", 560, 400, <Orb size={200} color={TEAL} />],
        ["Dark matter, as far as we can tell", 560, 400, <W c={VIOLET} s={28}>· · · dark matter · · ·</W>, { d: 0.6 }],
        ["Dark matter, as far as we can tell", 560, 560, <W c={DIM} s={26}>passes through; gravity still bends its path</W>, { d: 1.2 }],
        ["spirits with subtle bodies pass through mountains", 1360, 400, <W c={ROSE} s={30}>in the old stories: spirits through mountains</W>],
      ]} />
      <At x={960} y={700} o={ramp(t, meet, 0.5)}><W c={TEAL} s={36} serif>a change in the meeting, not a broken bedrock</W></At>
      <Items items={[
        ["The wall stays a wall for everyone else", 960, 790, <W c={CHALK} s={30}>the wall stays a wall for everyone else</W>],
      ]} />
    </AbsoluteFill>
  );
};

const PotterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const p = ramp(t, c("a skilled potter with well-prepared clay"), 4.0);
  return (
    <AbsoluteFill>
      <Title at={c("a skilled potter with well-prepared clay")} color={WARM}>the potter and the clay</Title>
      <At x={960} y={420}><div style={{ opacity: ramp(t, c("a skilled potter with well-prepared clay"), 0.6) }}><Pot p={p} /></div></At>
      <Items items={[
        ["The power is described as workability", 960, 620, <W c={GOLD} s={36} serif>workability, not force</W>],
        ["Not force against a nature that resists", 960, 690, <W c={DIM} s={30}>a material that responds, not a nature that resists</W>],
        ["This is no mechanism, and physics confirms nothing here", 960, 800, <W c={WARM} s={28}>no mechanism; no confirmation from physics</W>],
      ]} />
    </AbsoluteFill>
  );
};

const EarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const road = c("a traveller on a road, who hears drums and horns");
  const here = c("The hearer is on a road");
  return (
    <AbsoluteFill>
      <Title at={c("The second is the divine ear")} color={TEAL}>2 · the divine ear</Title>
      <At x={960} y={620} o={ramp(t, road, 0.5)}><div style={{ width: 1400, height: 6, borderRadius: 3, background: `${DIM}88` }} /></At>
      <At x={560} y={520} o={ramp(t, road, 0.5)}><Person color={CHALK} size={150} /></At>
      <At x={1380} y={500} o={ramp(t, road + 0.6, 0.5)}><Drum /></At>
      <At x={1180} y={500} o={ramp(t, road + 1.0, 0.5)}><Waves dir={-1} /></At>
      <Items items={[
        ["an extremely long ear", 960, 250, <W c={DIM} s={30}>a very long ear across a box of space?</W>, { until: "A telephone already makes a voice" }],
        ["A telephone already makes a voice", 960, 300, <Phone />, { pop: true }],
        ["A telephone already makes a voice", 960, 410, <W c={ICE} s={28}>near in one way, far in another</W>, { d: 0.6 }],
      ]} />
      <Ring x={560} y={520} p={ramp(t, here, 1.2)} r0={60} r1={140} color={GOLD} />
      <Items items={[
        ["still a hearing from somewhere", 960, 780, <W c={GOLD} s={38} serif>still a hearing from somewhere</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MindsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sealed = c("each mind is a sealed private room");
  const none = c("There are no sealed rooms on either side");
  const open = ramp(t, none, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("The third is knowing the minds of others")} color={ROSE}>3 · knowing others’ minds</Title>
      <Items items={[
        ["having encompassed them with their own mind", 960, 200, <W c={DIM} s={30}>“with their own mind”</W>],
      ]} />
      <At x={600} y={480} o={ramp(t, sealed, 0.5)}><Room open={open} /></At>
      <At x={1320} y={480} o={ramp(t, sealed + 0.3, 0.5)}><Room open={open} /></At>
      <At x={600} y={480} o={ramp(t, sealed, 0.5)}><Person color={ICE} size={120} /></At>
      <At x={1320} y={480} o={ramp(t, sealed + 0.3, 0.5)}><Person color={ROSE} size={120} /></At>
      <At x={960} y={660} o={ramp(t, sealed + 0.5, 0.5) * (1 - open)}><W c={DIM} s={30}>sealed private rooms?</W></At>
      <At x={960} y={660} o={ramp(t, none + 0.4, 0.5)}><W c={CHALK} s={32}>no sealed rooms on either side</W></At>
      <Flow x1={680} y1={480} x2={1240} y2={480} color={TEAL} p={ramp(t, c("Ordinary empathy is already a real channel"), 1.0)} />
      <Items items={[
        ["Ordinary empathy is already a real channel", 960, 760, <W c={TEAL} s={34} serif>empathy is already a real channel</W>],
      ]} />
    </AbsoluteFill>
  );
};

const StatesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const greed = c("A mind with greed, or without it");
  const states = ["with greed · without", "with anger · without", "scattered · focused", "freed · not freed"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["a finer channel of the same kind", 960, 120, <W c={TEAL} s={36} serif>a finer channel of the same kind</W>],
        ["a finer channel of the same kind", 360, 420, <Mirror />, { d: 0.6 }],
      ]} />
      {states.map((s, i) => (
        <At key={s} x={1000} y={260 + i * 90} s={pop(t, fps, greed + i * 0.7)}><K c={[WARM, ROSE, ICE, GOLD][i]} s={28}>{s}</K></At>
      ))}
      <Items items={[
        ["These are conditioned states, not a hidden essence", 1000, 640, <W c={CHALK} s={30}>conditioned states, not a hidden essence</W>],
        ["The knower does not merge into the other", 1000, 720, <W c={DIM} s={30}>one mind knows another, from where it is</W>],
        ["Two lamps remain two lamps", 860, 860, <Lamp size={110} />, { pop: true }],
        ["Two lamps remain two lamps", 1140, 860, <Lamp size={110} />, { pop: true, d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const PastScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n = c("One life, two, a hundred, a hundred thousand");
  const carry = c("carrying the memories across");
  return (
    <AbsoluteFill>
      <Title at={c("The fourth is remembering past lives")} color={VIOLET}>4 · remembering past lives</Title>
      {[0, 1, 2, 3, 4, 5, 6].map((k) => (
        <At key={k} x={300 + k * 220} y={420} s={pop(t, fps, n + k * 0.25)}><Lamp color={k === 6 ? GOLD : VIOLET} size={110} /></At>
      ))}
      <Items items={[
        ["This one seems to demand a substance more than any other", 960, 620, <W c={DIM} s={30}>surely something was there then and is here now?</W>],
      ]} />
      <At x={300 + 1320 * ramp(t, carry, 2.0)} y={330} o={ramp(t, carry, 0.4)}><Orb size={50} color={WARM} /></At>
      <At x={960} y={720} o={ramp(t, carry + 0.5, 0.5)}><W c={WARM} s={30}>a carrier, travelling across?</W></At>
    </AbsoluteFill>
  );
};

const PillarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const keep = c("The tradition rejects that conclusion, while keeping the memory");
  return (
    <AbsoluteFill>
      <Title at={c("the root of a wrong view")} color={WARM}>the root of a wrong view</Title>
      <At x={960} y={420} o={ramp(t, c("steady as a mountain peak, standing firm like a pillar"), 0.6)}><Pillar /></At>
      <Items items={[
        ["steady as a mountain peak, standing firm like a pillar", 960, 620, <W c={WARM} s={32} serif>“the self is eternal, firm like a pillar”</W>],
      ]} />
      <At x={1130} y={420} o={ramp(t, keep, 0.5)}><Cross size={150} /></At>
      <At x={960} y={740} o={ramp(t, keep + 0.6, 0.5)}><W c={GOLD} s={34}>the memory kept; the conclusion rejected</W></At>
    </AbsoluteFill>
  );
};

const MelodyScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["When I remember yesterday", 960, 140, <W c={CHALK} s={36} serif>nothing carried yesterday across the night</W>],
        ["a melody you know by heart", 960, 400, <Notes />, { pop: true }],
        ["a melody you know by heart", 960, 530, <W c={VIOLET} s={30}>no place where it waits between performances</W>, { d: 0.6 }],
        ["with no traveller passing between", 960, 640, <W c={TEAL} s={32}>a link over a longer stretch; no traveller</W>],
        ["The experience can stand", 960, 750, <W c={GOLD} s={34}>the experience can stand</W>],
        ["Turning it into proof of a self is the mistake", 960, 830, <W c={WARM} s={32}>making it proof of a self is the mistake</W>],
      ]} />
    </AbsoluteFill>
  );
};

const EyeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const house = c("A person with clear eyes stands in a raised house at the central square");
  const place = c("That is a place");
  return (
    <AbsoluteFill>
      <Title at={c("The fifth is the divine eye")} color={ICE}>5 · the divine eye</Title>
      <Items items={[
        ["This seems at first like the view from nowhere itself", 960, 210, <W c={DIM} s={30}>a view from above everything?</W>, { until: "A person with clear eyes stands in a raised house at the central square" }],
      ]} />
      <At x={420} y={560} o={ramp(t, house, 0.6)}><Longhouse /></At>
      {[0, 1, 2, 3].map((k) => (
        <At key={k} x={1000 + k * 170} y={720 - (k % 2) * 40} o={ramp(t, house + 0.8 + k * 0.3, 0.4)}><Person color={CHALK} size={100} /></At>
      ))}
      <At x={990} y={540} o={ramp(t, house + 0.5, 0.6)}><Cone p={0.6} color={ICE} len={1100} /></At>
      <Ring x={420} y={540} p={ramp(t, place, 1.2)} r0={60} r1={170} color={GOLD} />
      <Items items={[
        ["That is a place", 420, 300, <K c={GOLD} s={32}>a place</K>, { pop: true }],
        ["It is of an eye that looks from a height", 1200, 260, <W c={GOLD} s={38} serif>from a height, not from nowhere</W>],
      ]} />
    </AbsoluteFill>
  );
};

const KarmaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cond = c("conditions in one life followed by results in another");
  return (
    <AbsoluteFill>
      <Title at={c("a process of dependence")}>what it sees: a process of dependence</Title>
      <Items items={[
        ["It does not see a soul travelling from body to body", 960, 260, <W c={DIM} s={30}>no soul travelling from body to body</W>],
      ]} />
      <At x={600} y={500} o={ramp(t, cond, 0.5)}><Person color={ICE} size={150} /></At>
      <At x={1320} y={500} o={ramp(t, cond + 0.8, 0.5)}><Person color={VIOLET} size={150} /></At>
      <Flow x1={680} y1={500} x2={1240} y2={500} color={GOLD} p={ramp(t, cond + 0.4, 1.0)} />
      <At x={600} y={660} o={ramp(t, cond + 0.3, 0.5)}><K c={ICE}>conditions</K></At>
      <At x={1320} y={660} o={ramp(t, cond + 1.1, 0.5)}><K c={VIOLET}>results</K></At>
    </AbsoluteFill>
  );
};

const LakeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const big = c("the greatest power of all");
  return (
    <AbsoluteFill>
      <Title at={c("The sixth knowledge is the ending of the defilements")} color={GOLD}>6 · the ending of the defilements</Title>
      <Items items={[
        ["the mind is freed", 960, 200, <W c={DIM} s={30}>the defilements, their origin, their ending, the way</W>],
      ]} />
      <At x={960} y={470} o={ramp(t, c("The image is a clear mountain lake"), 0.6)}><Lake /></At>
      <At x={960} y={700} o={ramp(t, big, 0.5) * (1 - ramp(t, c("Nothing is added to the lake"), 0.4))}><W c={WARM} s={30}>the final channel, down to the bedrock?</W></At>
      <Items items={[
        ["Nothing is added to the lake", 960, 700, <W c={GOLD} s={36} serif>nothing added; what was always there, seen</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FreedomScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const wid = c("the five worldly knowledges widen the field");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Freedom, on this view, is not produced by causes", 960, 140, <W c={CHALK} s={34} serif>freedom: not produced, not a hidden ground</W>],
        ["never there to be fixed", 960, 210, <W c={GOLD} s={30}>what the mind kept fixing on was never there to be fixed</W>],
      ]} />
      <At x={700} y={560} o={ramp(t, wid, 0.5)}><Cone p={0.2 + 0.6 * ramp(t, wid + 0.5, 2)} color={TEAL} len={600} /></At>
      <At x={380} y={560} o={ramp(t, wid, 0.5)}><Sitter size={140} /></At>
      <At x={1400} y={420} o={ramp(t, wid + 0.4, 0.5)}><W c={TEAL} s={30}>the five: a wider field</W></At>
      <At x={1400} y={680} o={ramp(t, c("It ends the clinging, whatever the field"), 0.5)}><W c={GOLD} s={34} serif>the sixth: the clinging ends</W></At>
    </AbsoluteFill>
  );
};

const GodsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const path = c("a path to the gods opens before him");
  const climb = ramp(t, path, 0.1) + 4.0 * ramp(t, c("realm after realm, each sending him on"), 4.0);
  return (
    <AbsoluteFill>
      <Items items={[
        ["There is a story that gathers all of this together", 960, 120, <W c={GOLD} s={40} serif>the monk who went to the gods</W>],
        ["where earth, water, fire, and air finally cease", 960, 190, <W c={DIM} s={30}>where do earth, water, fire and air finally cease?</W>],
      ]} />
      <At x={960} y={580} o={ramp(t, path, 0.5)}><Tiers n={1 + climb} /></At>
      <At x={960} y={840 - 90 * Math.min(4, climb)} o={ramp(t, path, 0.5)}><Orb size={36} color={CHALK} /></At>
      <Items items={[
        ["realm after realm, each sending him on", 1500, 500, <W c={VIOLET} s={30}>“we do not know”</W>, { d: 1.0 }],
        ["realm after realm, each sending him on", 1500, 420, <W c={VIOLET} s={30}>“we do not know”</W>, { d: 2.5 }],
        ["realm after realm, each sending him on", 1500, 340, <W c={VIOLET} s={30}>“we do not know”</W>, { d: 4.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const GreatGodScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const g = c("who is called the all-seeing, the maker, the creator");
  return (
    <AbsoluteFill>
      <At x={960} y={360} s={pop(t, fps, g)}><Person color={GOLD} size={220} halo /></At>
      <Items items={[
        ["who is called the all-seeing, the maker, the creator", 960, 130, <W c={GOLD} s={34} serif>the all-seeing · the maker · the creator</W>],
        ["answers only by repeating his own titles", 960, 580, <W c={DIM} s={30}>answers with his titles</W>, { until: "he takes the monk aside" }],
        ["he takes the monk aside", 960, 580, <W c={CHALK} s={30}>taken aside, out of the gods’ hearing</W>],
        ["But I do not know either", 960, 680, <W c={WARM} s={40} serif>“I do not know either”</W>],
        ["Go and ask the Buddha", 960, 780, <W c={TEAL} s={30}>go and ask the Buddha</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BirdScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fly = c("a bird released from a ship at sea");
  const back = c("it comes back to the ship");
  const out = ramp(t, fly, 2.5) * (1 - ramp(t, back, 1.2));
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, fly, 0.5)}><Ship /></At>
      <At x={960 + 520 * out * Math.cos(t * 0.6)} y={330 - 180 * out} o={ramp(t, fly + 0.3, 0.4)}><Bird /></At>
      <Items items={[
        ["it comes back to the ship", 960, 640, <W c={DIM} s={30}>no land on any side; back to the ship</W>],
        ["the question was asked the wrong way", 960, 120, <W c={WARM} s={36} serif>not “where do they cease?”, as if a place</W>],
        ["where do they find no footing", 960, 190, <W c={GOLD} s={36} serif>but “where do they find no footing?”</W>],
        ["all the pairs we lay down together", 960, 740, <W c={TEAL} s={30}>long and short · beautiful and ugly · name and form</W>],
      ]} />
    </AbsoluteFill>
  );
};

const StoryPointsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["It did not find a bedrock", 960, 300, <K c={WARM} s={32}>through every heaven: no bedrock</K>, { pop: true }],
        ["was a being in a world, seeing from somewhere", 960, 440, <K c={GOLD} s={32}>the all-seeing god: seeing from somewhere</K>, { pop: true }],
        ["the answer was not a location at all", 960, 580, <K c={TEAL} s={32}>the answer: not a place</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const inst = c("The demonstration he offered instead was instruction");
  return (
    <AbsoluteFill>
      <Title at={c("With striking caution")}>the tradition’s caution</Title>
      <Items items={[
        ["to have a monk perform a miracle", 560, 300, <W c={DIM} s={30}>“perform a miracle for the town”</W>],
        ["The Buddha refused", 560, 370, <W c={WARM} s={32}>refused</W>],
        ["There is a spell that can do that", 560, 460, <W c={DIM} s={28}>a sceptic: “a spell can do that”</W>],
        ["he was repelled by displays", 560, 550, <W c={WARM} s={28}>displays of power and mind reading: repelled</W>],
      ]} />
      <At x={1380} y={380} o={ramp(t, inst, 0.5)}><K c={GOLD} s={36}>instruction</K></At>
      <Items items={[
        ["Think like this, not like that", 1380, 480, <W c={CHALK} s={28}>think like this, not like that</W>],
        ["Think like this, not like that", 1380, 540, <W c={CHALK} s={28}>focus like this, not like that</W>, { d: 2.0 }],
        ["Think like this, not like that", 1380, 600, <W c={CHALK} s={28}>give up this; live having achieved that</W>, { d: 4.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const RulesScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["is experienced only by the one who performs it", 960, 140, <W c={DIM} s={32} serif>a display: experienced only by the one who performs it</W>],
        ["Instruction, he said, was the finest of the three", 960, 210, <W c={GOLD} s={32}>instruction: anyone can test it</W>],
        ["commits an offence, even when what he says is true", 960, 330, <W c={WARM} s={30}>telling of a superhuman quality: an offence, even if true</W>],
        ["It is the ordinary training", 960, 440, <W c={CHALK} s={32}>no secret technique: the ordinary training</W>],
        ["Keep your precepts", 960, 520, <W c={TEAL} s={30}>precepts · inner calm · meditation · wisdom</W>],
        ["This caution is exactly what the view would predict", 960, 660, <W c={GOLD} s={34} serif>a view from somewhere settles nothing for anyone else</W>],
        ["because there is nothing to display", 960, 740, <W c={VIOLET} s={30}>and the sixth has nothing to display</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MistakesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = c("The first dismisses the higher knowledges");
  const two = c("The second mistake takes the knowledges as proof of a substance");
  return (
    <AbsoluteFill>
      <Title at={c("So there are two opposite mistakes")}>two opposite mistakes</Title>
      <At x={560} y={280} o={ramp(t, one, 0.5)}><W c={ICE} s={34} serif>dismissal</W></At>
      <Items items={[
        ["quietly makes matter the bedrock", 560, 400, <Floor w={420} color={ICE} />],
        ["quietly makes matter the bedrock", 560, 450, <K c={ICE}>matter as the floor</K>, { d: 0.3 }],
        ["Physics, as practised, makes no such claim", 560, 560, <W c={DIM} s={26}>physics makes no such claim</W>],
        ["Doubting a particular report is sound", 560, 630, <W c={TEAL} s={26}>doubting a report: sound</W>],
      ]} />
      <At x={1360} y={280} o={ramp(t, two, 0.5)}><W c={VIOLET} s={34} serif>credulity</W></At>
      <Items items={[
        ["The second mistake takes the knowledges as proof of a substance", 1360, 400, <Floor w={420} color={VIOLET} />, { d: 0.5 }],
        ["The second mistake takes the knowledges as proof of a substance", 1360, 450, <K c={VIOLET}>soul or seer as the floor</K>, { d: 0.8 }],
        ["The old texts warn against this one more often", 1360, 560, <W c={DIM} s={26}>the pillar · the traveller · the all-seeing god</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MiddleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const m = c("The middle way between these is not a compromise");
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, m, 0.6)}><Scales /></At>
      <Items items={[
        ["The middle way between these is not a compromise", 960, 150, <W c={GOLD} s={38} serif>not a compromise</W>],
        ["cannot be settled by a substance on either side", 960, 600, <W c={CHALK} s={30}>no substance settles it, on either side</W>],
        ["Whether a particular report is true is a matter of evidence", 960, 680, <W c={TEAL} s={30}>a particular report: a matter of evidence</W>],
        ["It proves nothing", 960, 770, <W c={WARM} s={34} serif>the logic removes an objection; it proves nothing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const PracticeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const self = c("The mistake is to build a self on them");
  return (
    <AbsoluteFill>
      <Title at={c("for practice, the lesson is simple")}>for practice</Title>
      <At x={960} y={480} o={ramp(t, c("can be real as experiences"), 0.6)}><Sitter size={200} glow={0.7} /></At>
      <Items items={[
        ["can be real as experiences", 960, 260, <W c={TEAL} s={32}>real as experiences</W>],
        ["The mistake is to build a self on them", 960, 700, <W c={WARM} s={32}>building a self on them is the mistake</W>],
        ["vastness, clarity, or pure awareness", 960, 780, <W c={GOLD} s={30}>even vastness, clarity, pure awareness</W>],
      ]} />
      <At x={960} y={620} o={ramp(t, self + 0.4, 0.5) * (1 - ramp(t, self + 2.0, 0.6))}><Floor w={500} color={WARM} /></At>
      <At x={960} y={620} o={ramp(t, self + 1.4, 0.4) * (1 - ramp(t, self + 2.0, 0.6))}><Cross size={90} /></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("Every knowing, ordinary or extraordinary, is a knowing from somewhere");
  const widen = ramp(t, c("would widen that somewhere"), 3.0);
  const end = c("or the one who reaches it");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, k, 0.6)}><W c={GOLD} s={44} serif>a knowing from somewhere</W></At>
      {(["by someone", "of something", "through a channel"] as const).map((w, i) => (
        <At key={w} x={560 + i * 400} y={230} s={pop(t, fps, c("By someone") + i * 0.8)}><K c={[ICE, TEAL, VIOLET][i]} s={30}>{w}</K></At>
      ))}
      <At x={920} y={540} o={ramp(t, k + 0.5, 0.6)}><Cone p={0.1 + 0.8 * widen} color={GOLD} len={800} /></At>
      <At x={500} y={540} o={ramp(t, k + 0.5, 0.6)}><Sitter size={150} glow={0.5} /></At>
      <Items items={[
        ["They would not abolish it", 1180, 820, <W c={CHALK} s={30}>wider; never from nowhere</W>],
        ["What the tradition values most is not reaching further", 960, 900, <W c={DIM} s={28}>not reaching further</W>, { until: "or the one who reaches it" }],
      ]} />
      <At x={960} y={900} s={pop(t, fps, end, 16)} o={ramp(t, end, 0.8)}><W c={GOLD} s={40} serif>no longer grasping what is reached, or the one who reaches</W></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "A monk sits in deep meditation"], ["doubt", "Modern listeners tend to meet these claims in one of two ways"],
    ["search", "Start with the word that the Middle Way takes apart"], ["web", "There is one rule that matters more than any other here"],
    ["sea", "Now consider knowing itself"], ["whole", "Now the six knowledges themselves"],
    ["web", "The fourth is remembering past lives"], ["vivid", "The sixth knowledge is the ending of the defilements"],
    ["sea", "There is a story that gathers all of this together"], ["doubt", "With striking caution"],
    ["search", "So there are two opposite mistakes"], ["vivid", "for practice, the lesson is simple"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["A monk sits in deep meditation", <MonkScene />],
    ["Buddhist tradition calls these the higher knowledges", <SixScene />],
    ["Modern listeners tend to meet these claims in one of two ways", <ReactionsScene />],
    ["Start with the word that the Middle Way takes apart", <OwnNatureScene />],
    ["can be called a substance", <SubstanceScene />],
    ["The Middle Way does not refute substance by announcing that there is none", <ChariotScene />],
    ["exempt one favourite thing", <ExemptScene />],
    ["That does not make things unreal", <NotUnrealScene />],
    ["There is one rule that matters more than any other here", <NothingScene />],
    ["there are three questions", <QuestionsScene />],
    ["Now consider knowing itself", <KnowerScene />],
    ["the very same consciousness wanders from life to life", <FireScene />],
    ["Then consider worlds", <WorldsScene />],
    ["One thing never crosses between worlds", <WiderScene />],
    ["There are two more pieces", <PiecesScene />],
    ["Now the six knowledges themselves", <FruitsScene />],
    ["The first is psychic power", <PowerScene />],
    ["solidity is not something a wall owns by itself", <SolidScene />],
    ["a skilled potter with well-prepared clay", <PotterScene />],
    ["The second is the divine ear", <EarScene />],
    ["The third is knowing the minds of others", <MindsScene />],
    ["a finer channel of the same kind", <StatesScene />],
    ["The fourth is remembering past lives", <PastScene />],
    ["the root of a wrong view", <PillarScene />],
    ["When I remember yesterday", <MelodyScene />],
    ["The fifth is the divine eye", <EyeScene />],
    ["a process of dependence", <KarmaScene />],
    ["The sixth knowledge is the ending of the defilements", <LakeScene />],
    ["Freedom, on this view, is not produced by causes", <FreedomScene />],
    ["There is a story that gathers all of this together", <GodsScene />],
    ["who is called the all-seeing, the maker, the creator", <GreatGodScene />],
    ["a bird released from a ship at sea", <BirdScene />],
    ["It did not find a bedrock", <StoryPointsScene />],
    ["With striking caution", <CautionScene />],
    ["is experienced only by the one who performs it", <RulesScene />],
    ["So there are two opposite mistakes", <MistakesScene />],
    ["The middle way between these is not a compromise", <MiddleScene />],
    ["for practice, the lesson is simple", <PracticeScene />],
    ["Every knowing, ordinary or extraordinary, is a knowing from somewhere", <CloseScene />],
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
