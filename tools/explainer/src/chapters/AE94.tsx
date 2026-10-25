// Bonus: The Illusion of the Given. Explainer drawings timed to the narration.
// Arc: one bowl seen by five beings -> the hidden-substance picture taken apart (the liquid, the thing in itself,
// wetness) -> agreement without a floor (Candrakirti; jaundice; the working reference point; the river of pus;
// other minds; the circle; language) -> the side of experience (the basis, display, knowing, pure vision) ->
// echoes in physics -> channels of contact (tick, dark matter, neutrino, the offering) -> the container myth ->
// order -> many worlds (bat, bee, three sides, degrees) -> "not elsewhere" -> maps, touching, no master copy ->
// Everett compared -> the traditions -> what is not claimed -> humility, compassion, the closing verse.
// Stance: no ground, field, relation-web or awareness is ever drawn as a base layer; a floor or a box is shown only
// in order to remove it. The other worlds are never drawn stacked in one shared space.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the bowl
  "Picture a single bowl of liquid", "A human sees clear, refreshing water", "sees foul pus and blood",
  "A fish finds the air it breathes", "A god tastes heavenly nectar", "And an awakened being sees the pure wisdom of water",
  "It is one of the oldest examples", "What is really in the bowl",
  "Common sense has a ready answer", "some raw and neutral stuff", "Each creature looks at it through its own lens", "Two layers",
  "both take this picture apart", "Agreement does not need a hidden bedrock", "are identified together, each depending on the others",
  "just as impossible to pin down as the things themselves",
  // the hidden substance
  "Start with a word we slipped in without noticing", "already assumes an object waiting there", "a thing in itself, hidden behind the senses",
  "So ask what this hidden thing is like", "If it has definite qualities", "If it has no qualities at all", "Either way, it does no work",
  "Why not simply wetness", "wetness in general is an idea made by thought", "this drinkable water, this foul pus", "It is a useful label",
  "a nature a thing would have all by itself", "in a modest disguise",
  // agreement
  "why do humans agree so reliably that the liquid is water", "fall apart into private fantasies",
  "Agreement does not prove a hidden object", "Shared, reliable agreement is simply what everyday truth is",
  "He also refuses the opposite move", "making consciousness the real foundation", "a seeing cannot be identified without what is seen",
  "Neither mind nor matter comes first", "as mistaken as making matter the container",
  "A person with jaundice sees a white conch shell as yellow", "people with healthy eyes correct them", "It is made within one kind of being",
  "The hungry ghost is not a jaundiced human", "the liquid really does function as pus",
  "So what of the bowl itself", "What is denied is a shared base", "What is kept is a working reference point",
  "Its job is to coordinate, not to sit underneath",
  "The bowl example did not begin in the Middle Way", "all see a river of pus together", "No river outside the mind is needed",
  "That answers the question by making consciousness the floor", "turned the example around", "neither is the mind that sees it",
  "stand or fall together", "It shows that neither the world nor the mind is the floor",
  "Agreement also needs others to agree with", "my own experience is certain, and yours only inferred",
  "The Middle Way refuses that imbalance", "as long is identified together with short",
  "A critic can press further", "and the circle is not a flaw", "There is no such judge",
  "we agree, not in opinions, but in a shared form of life", "A second look corrects a misreading",
  "much of this agreement is carried by language", "Say it, and a glass arrives", "The noun, the bowl, seems to point at one solid thing",
  // the side of experience
  "describes the same freedom from the side of experience",
  "the basis is primordially pure", "so nothing ever needed cleaning", "a hidden block of stuff, a cosmic mind",
  "it is called a ground only from a relative point of view", "empty of being any ground at all",
  "Appearances are called display", "vivid and unobstructed", "Even the feeling of being a subject inside",
  "It arises together with the world it seems to look at",
  "is not a projector throwing out a world", "and it is not the basis", "It is the knowing of the basis",
  "The clarity belongs to the appearing itself",
  "Does awareness know itself", "a blade, he said, cannot cut itself", "the self-knowing of awareness is no second act",
  "recognised as belonging to no one",
  "separates ordinary vision from pure vision", "no kind of being has the last word over another", "In pure vision, the liquid appears as",
  "pure vision is not a window onto a bedrock", "the habit that splits it into a solid self and solid things",
  // physics
  "Modern physics offers echoes of all this", "Only echoes, not proofs",
  "things do not exist first and then interact", "what she calls intra-action", "So there is no liquid waiting before the meeting",
  "The human drinker and the water appear together", "The suffering ghost and the pus appear together",
  "physical quantities have values only relative to another system", "How, then, do two observers agree", "their results match",
  "Agreement comes from checking across perspectives",
  "relations are what is really there", "That would only build another floor", "and neither is the ground",
  // channels
  "Contact comes in degrees",
  "A tick responds mainly to three signals", "the smell of mammal sweat", "the warmth of a body, and hair",
  "A pool of clear spring water has none of these", "Yet the water is not nothing to the tick", "the current carries it away",
  "Dark matter passes through the Earth without collision", "yet gravity still bends its path",
  "A neutrino can cross vast thicknesses of lead", "It is a region of very weak contact",
  "depends on which channels are active in it",
  "The hardest test is contact between worlds", "water is blessed with a mantra and given", "Not by a substance that travels",
  "from the evening flame of a lamp into its midnight flame", "The giving belongs to the human world", "They are linked as condition and result",
  "That the offering helps is a claim of tradition", "This argument does not prove it", "physics gives it no support",
  // container and order
  "Because of the container myth", "We picture space as an empty box", "We place a solid object in the middle",
  "either see the real thing or be fooled", "spacetime is not an empty stage", "It is the gravitational field itself",
  "space cannot exist before its own defining mark", "When the box goes",
  "why is the world so orderly", "Barley seeds grow barley, not rice", "Fire burns and does not freeze", "does not make anything arbitrary",
  "emptiness is not what makes cause and effect work", "Emptiness enables nothing and explains nothing",
  "something with a fixed essence could never arise",
  "Ask why there is a web of causes at all", "the whole is a label too", "dependent arising has no first beginning", "It loses its object",
  // many worlds
  "So far, one bowl", "Now widen the view",
  "each lives in a whole world of its own", "Its own textures, distances, dangers and nourishment", "Buddhist texts call such a world",
  "The biologist",
  "Worlds are made by channels, not by walls", "The tick lives in a world of three signals", "The bat finds its way by echoes",
  "The honeybee sees ultraviolet light", "carry bright landing paths for it", "we live among colours, words and clocks",
  "This needs no belief in ghosts or gods", "The animals alone carry the argument",
  "Every world has three sides", "A being, with its senses and habits", "An environment, as that being meets it",
  "And the channels joining them", "None comes first", "It is not a box that would exist with no one inside",
  "Worlds also overlap by degrees", "A human and a dog share sight, hearing and touch", "A human and a tick meet briefly, at the skin",
  "share almost nothing",
  // not elsewhere
  "Then where are the other worlds", "right here, in the same space as ours", "it quietly brings back the box", "holding them side by side",
  "knows two kinds of negation", "One denies something and implies something else", "The other simply denies, and puts nothing in its place",
  "Emptiness is the second kind", "the other worlds are not elsewhere", "Not far away, not behind a wall", "And we stop there",
  "so they are in the same place", "Each world has its own here",
  "have drawn two kinds of map", "stacks the realms in a vast vertical cosmos", "gods above and hells below",
  "even the pure lands, are not far away at all", "Read without a container, both are maps",
  "Worlds touch where channels are shared", "A dog and its owner meet in a glance", "What never crosses is a view from nowhere",
  "compare them all from above", "but always as a human",
  "the human world is not the master copy", "no final authority over the bat, the bee or the ghost", "Science does not escape this",
  "It extends our senses", "every instrument is built and read by humans",
  "And this is not relativism", "there are still mistakes, like the jaundiced eye", "the difference is real",
  // Everett
  "Physics has its own many worlds", "a single universal quantum state evolves without ever collapsing",
  "it divides into branches that no longer affect each other", "The branches are not places side by side", "the theory is fully deterministic",
  "Both views reject the picture of one world seen one way", "as the one thing that really exists", "not even a mathematical one",
  "branches split over time", "The worlds of the bowl arise together with those who live in them",
  // traditions
  "have explored these many worlds, and they do not all agree",
  "the variety of the world is born of action", "though it makes consciousness the floor",
  "a net with a jewel at every knot", "each jewel reflecting all the others", "and none of them the original",
  "A thing with a core of its own would exclude others", "nothing crowds anything out", "from hell to buddhahood",
  "present in each single moment of mind",
  "looks so impure", "The Buddha touches the ground with his toe", "shines as a jewelled pure land", "It was always so",
  "The disciple had not seen it", "trains this as pure vision", "unimpeded and transparent",
  "These traditions share three things", "Worlds are shaped by those who live in them", "Worlds need not obstruct one another",
  "transformation is a change in seeing, not a journey", "What they do not share is the answer about a foundation",
  "The reading here chooses no foundation",
  // limits and close
  "what has not been shown", "None of this proves that other realms exist", "Physics does not confirm it",
  "It is not a theory that predicts anything", "It is not idealism", "it is one reading within a living tradition",
  "a single hidden original beneath all the worlds",
  "What difference does it make", "Humility, first", "from a bee to a stranger", "a world we cannot fully enter",
  "And compassion", "its suffering is not a mistake to be explained away", "or the loneliness of a person",
  "No point of view owns the real world", "Emptiness takes nothing away from their suffering",
  "answered his critics in one line", "For whom emptiness works, everything works", "A world of fixed natures could never change",
  "Only where nothing is fixed can anything move at all",
  "when appearing is recognised as display", "Vivid, unproduced, and found nowhere",
  "Many worlds, then, and no floor beneath them", "Everyday life never needed one",
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
const Bowl: React.FC<{ fill?: string; size?: number; ghost?: number }> = ({ fill = ICE, size = 300, ghost = 1 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 300 180" style={{ overflow: "visible", opacity: ghost,
      filter: `drop-shadow(0 0 ${10 + 4 * Math.sin(t * 1.4)}px ${fill}99)` }}>
      <ellipse cx={150} cy={50} rx={130} ry={28} fill={`${fill}66`} stroke={fill} strokeWidth={5} />
      <path d="M20 50 Q30 160 150 165 Q270 160 280 50" fill={`${CHALK}12`} stroke={CHALK} strokeWidth={5} strokeDasharray={ghost < 0.8 ? "8 8" : undefined} />
      <path d={`M60 50 q 22 ${-6 * Math.sin(t * 2)} 45 0 t 45 0 t 45 0 t 45 0`} fill="none" stroke="#fff" strokeWidth={3} opacity={0.5} />
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

/** A hungry ghost: a thin neck, a tiny mouth, a swollen belly. */
const Ghost: React.FC<{ color?: string; size?: number }> = ({ color = WARM, size = 150 }) => (
  <svg width={size * 0.7} height={size} viewBox="0 0 70 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
    <circle cx={35} cy={14} r={10} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <circle cx={35} cy={19} r={1.5} fill={color} />
    <path d="M33 24 L33 38 M37 24 L37 38" stroke={color} strokeWidth={2.5} />
    <ellipse cx={35} cy={62} rx={26} ry={24} fill={`${color}22`} stroke={color} strokeWidth={3} />
    <path d="M22 84 L20 98 M48 84 L50 98" stroke={color} strokeWidth={3} strokeLinecap="round" />
  </svg>
);

const Fish: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={160} height={90} viewBox="0 0 160 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 45 Q70 0 120 45 Q70 90 20 45 Z" fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M118 45 L150 20 L150 70 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={45} cy={40} r={5} fill={color} />
  </svg>
);

/** A lotus of light: the awakened way of seeing, not a thing behind the water. */
const Lotus: React.FC<{ color?: string; size?: number }> = ({ color = GOLD, size = 170 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 170 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${12 + 5 * Math.sin(t * 1.2)}px ${color})` }}>
      {[-60, -30, 0, 30, 60].map((r) => (
        <path key={r} d="M85 110 Q60 60 85 10 Q110 60 85 110 Z" fill={`${color}33`} stroke={color} strokeWidth={3} transform={`rotate(${r} 85 110)`} />
      ))}
    </svg>
  );
};

const Glass: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ overflow: "visible" }}>
    <path d="M15 10 L30 140 L80 140 L95 10 Z" fill={`${ICE}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M22 60 L88 60" stroke={ICE} strokeWidth={4} />
  </svg>
);

/** A conch shell. yellow (0..1) tints it as the jaundiced eye sees it. */
const Conch: React.FC<{ yellow?: number }> = ({ yellow = 0 }) => {
  const col = yellow > 0.5 ? "#E8D24A" : CHALK;
  return (
    <svg width={200} height={150} viewBox="0 0 200 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${col}88)` }}>
      <path d="M20 80 Q40 20 120 25 Q185 35 180 80 Q170 125 100 128 Q50 128 20 80 Z" fill={`${col}${yellow > 0.5 ? "55" : "22"}`} stroke={col} strokeWidth={5} />
      <path d="M120 40 Q160 60 140 90 Q120 110 95 95 Q80 80 100 70" fill="none" stroke={col} strokeWidth={4} />
    </svg>
  );
};

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

/** A tick: oval body, eight legs. */
const Tick: React.FC<{ color?: string; size?: number }> = ({ color = ROSE, size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}99)` }}>
    {[-1, 1].flatMap((sx) => [20, 35, 50, 65].map((y) => (
      <path key={`${sx}${y}`} d={`M50 ${y + 10} L${50 + sx * 38} ${y + (y < 45 ? -6 : 10)}`} stroke={color} strokeWidth={3} strokeLinecap="round" />
    )))}
    <ellipse cx={50} cy={55} rx={22} ry={30} fill={`${color}44`} stroke={color} strokeWidth={4} />
    <circle cx={50} cy={22} r={8} fill={`${color}66`} stroke={color} strokeWidth={3} />
  </svg>
);

const Bat: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={240} height={110} viewBox="0 0 240 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}aa)` }}>
    <path d="M120 40 Q95 10 60 25 Q30 20 5 50 Q35 50 45 70 Q65 55 80 75 Q95 60 120 75 Q145 60 160 75 Q175 55 195 70 Q205 50 235 50 Q210 20 180 25 Q145 10 120 40 Z"
      fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <path d="M112 36 L110 24 L118 32 M128 36 L130 24 L122 32" stroke={color} strokeWidth={3} />
  </svg>
);

/** A flower; uv (0..1) reveals the landing paths the bee sees. */
const Flower: React.FC<{ uv?: number }> = ({ uv = 0 }) => (
  <svg width={200} height={200} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${8 + 12 * uv}px ${uv > 0.3 ? VIOLET : GOLD}99)` }}>
    {[0, 60, 120, 180, 240, 300].map((r) => (
      <g key={r} transform={`rotate(${r} 100 100)`}>
        <ellipse cx={100} cy={50} rx={26} ry={44} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
        <path d="M100 92 L100 22 M92 80 L100 40 L108 80" stroke={VIOLET} strokeWidth={5} opacity={uv} strokeLinecap="round" />
      </g>
    ))}
    <circle cx={100} cy={100} r={18} fill={`${WARM}88`} stroke={WARM} strokeWidth={4} />
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

const Dog: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={190} height={130} viewBox="0 0 190 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M30 60 L140 60 Q150 60 150 70 L150 95 M40 60 L40 120 M70 60 L70 120 M120 60 L120 120 M145 70 L145 120" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
    <path d="M140 60 L150 30 Q160 15 175 25 L185 40 L160 45 L150 62" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M30 60 Q10 50 8 30" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

const Earth: React.FC<{ size?: number }> = ({ size = 260 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${TEAL}88)` }}>
    <circle cx={50} cy={50} r={46} fill={`${TEAL}33`} stroke={TEAL} strokeWidth={2.5} />
    <path d="M25 30 Q40 22 48 34 Q42 48 30 46 Z M58 55 Q72 50 78 62 Q70 78 58 72 Z M55 18 Q66 16 70 26 Q62 30 55 18 Z" fill={`${GREEN}66`} stroke={GREEN} strokeWidth={1.5} />
  </svg>
);

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

/** A wire-frame box: the container picture of space. */
const SpaceBox: React.FC<{ color?: string; o?: number }> = ({ color = ICE, o = 1 }) => (
  <svg width={460} height={360} viewBox="0 0 460 360" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 10px ${color}77)` }}>
    <path d="M60 110 L300 110 L300 330 L60 330 Z M160 30 L400 30 L400 250 L300 330 M60 110 L160 30 M300 110 L400 30" fill="none" stroke={color} strokeWidth={4} />
    <path d="M60 330 L160 250 L400 250 M160 250 L160 30" fill="none" stroke={color} strokeWidth={3} strokeDasharray="10 10" opacity={0.6} />
  </svg>
);

/** Branching lines (Everett): one trunk dividing as p goes 0..1. */
const Branches: React.FC<{ p: number; color?: string }> = ({ p, color = ICE }) => {
  const segs: [number, number, number, number, number][] = [
    [300, 380, 300, 260, 0], [300, 260, 180, 160, 0.25], [300, 260, 420, 160, 0.25],
    [180, 160, 110, 60, 0.55], [180, 160, 250, 60, 0.55], [420, 160, 350, 60, 0.55], [420, 160, 490, 60, 0.55],
  ];
  return (
    <svg width={600} height={420} viewBox="0 0 600 420" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
      {segs.map(([x1, y1, x2, y2, s], i) => {
        const q = Math.max(0, Math.min(1, (p - s) / 0.3));
        return <line key={i} x1={x1} y1={y1} x2={x1 + (x2 - x1) * q} y2={y1 + (y2 - y1) * q} stroke={color} strokeWidth={6} strokeLinecap="round" />;
      })}
    </svg>
  );
};

/** Indra's Net: jewels at the knots, each holding tiny reflections of the others; no central jewel. */
const Net: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  const pts: [number, number][] = [];
  for (let r = 0; r < 3; r++) for (let q = 0; q < 5; q++) pts.push([80 + q * 160, 60 + r * 140]);
  return (
    <svg width={800} height={400} viewBox="0 0 800 400" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((r) => <line key={`h${r}`} x1={80} y1={60 + r * 140} x2={80 + 640 * p} y2={60 + r * 140} stroke={DIM} strokeWidth={2} />)}
      {[0, 1, 2, 3, 4].map((q) => <line key={`v${q}`} x1={80 + q * 160} y1={60} x2={80 + q * 160} y2={60 + 280 * p} stroke={DIM} strokeWidth={2} />)}
      {pts.map(([x, y], i) => (
        <g key={i} opacity={Math.min(1, Math.max(0, p * 15 - i))} style={{ filter: `drop-shadow(0 0 ${8 + 4 * Math.sin(t * 2 + i)}px ${GOLD})` }}>
          <circle cx={x} cy={y} r={26} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={3} />
          {[0, 1, 2, 3, 4].map((k) => (
            <circle key={k} cx={x + 12 * Math.cos(k * 1.26 + t * 0.3)} cy={y + 12 * Math.sin(k * 1.26 + t * 0.3)} r={3}
              fill={[ICE, VIOLET, ROSE, TEAL, CHALK][k]} />
          ))}
        </g>
      ))}
    </svg>
  );
};

/** The vertical Abhidharma map: a mountain, gods above, hells below. */
const Cosmos: React.FC = () => (
  <svg width={360} height={480} viewBox="0 0 360 480" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}66)` }}>
    <path d="M180 60 L280 300 L80 300 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={4} />
    <path d="M100 40 Q180 0 260 40" fill="none" stroke={ICE} strokeWidth={4} />
    <path d="M20 300 L340 300" stroke={TEAL} strokeWidth={4} />
    <path d="M90 360 Q180 420 270 360 M110 410 Q180 460 250 410" fill="none" stroke={WARM} strokeWidth={4} />
  </svg>
);

const Magnifier: React.FC = () => (
  <svg width={120} height={120} viewBox="0 0 120 120"><circle cx={50} cy={50} r={36} fill={`${ICE}22`} stroke={ICE} strokeWidth={6} />
    <path d="M77 77 L110 110" stroke={ICE} strokeWidth={10} strokeLinecap="round" /></svg>
);

/** Two arrows chasing each other round a circle. */
const Circle2: React.FC<{ color?: string }> = ({ color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={300} height={300} viewBox="0 0 300 300" style={{ overflow: "visible", transform: `rotate(${t * 20}deg)`, filter: `drop-shadow(0 0 8px ${color}99)` }}>
      <path d="M150 30 A120 120 0 0 1 270 150" fill="none" stroke={color} strokeWidth={6} />
      <path d="M150 270 A120 120 0 0 1 30 150" fill="none" stroke={color} strokeWidth={6} />
      <path d="M270 150 L282 128 M270 150 L250 136 M30 150 L18 172 M30 150 L50 164" stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

/** A floor bar, drawn only so that it can be taken away. */
const Floor: React.FC<{ w?: number; color?: string }> = ({ w = 900, color = WARM }) => (
  <div style={{ width: w, height: 24, borderRadius: 12, background: `${color}55`, border: `3px solid ${color}`, boxShadow: `0 0 16px ${color}77` }} />
);
const Cross: React.FC<{ size?: number }> = ({ size = 160 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100"><path d="M15 15 L85 85 M85 15 L15 85" stroke={WARM} strokeWidth={9} strokeLinecap="round" /></svg>
);
const Sprout: React.FC = () => (
  <svg width={120} height={140} viewBox="0 0 120 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}99)` }}>
    <ellipse cx={60} cy={120} rx={22} ry={13} fill={`${GOLD}66`} stroke={GOLD} strokeWidth={4} />
    <path d="M60 110 L60 40 M60 70 Q30 60 25 35 Q50 40 60 62 M60 55 Q90 45 95 20 Q70 25 60 48" fill="none" stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

// ---------------------------------------------------------------- scenes
const BowlScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Picture a single bowl of liquid");
  const beings: [string, number, number, React.ReactNode, string, string][] = [
    ["A human sees clear, refreshing water", 380, 330, <Person color={ICE} />, "water", ICE],
    ["sees foul pus and blood", 1540, 330, <Ghost />, "pus", WARM],
    ["A fish finds the air it breathes", 330, 700, <Fish />, "home, air", TEAL],
    ["A god tastes heavenly nectar", 1590, 700, <Person color={GOLD} halo />, "nectar", GOLD],
    ["And an awakened being sees the pure wisdom of water", 960, 230, <Lotus />, "wisdom of water", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center", opacity: 1 - ramp(t, c(beings[4][0]) - 0.6, 0.4) }}>
        <Reveal text="the illusion of the given" at={0.2} size={72} />
      </div>
      <At x={960} y={560} s={pop(t, fps, b)}><Bowl /></At>
      {beings.map(([cue, x, y, node, word, col], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} s={pop(t, fps, c(cue))}>{node}</At>
          <At x={x} y={y + (i === 4 ? -130 : 120)} o={ramp(t, c(cue) + 0.5, 0.5)}><K c={col}>{word}</K></At>
          <Flow x1={x} y1={y} x2={960} y2={560} color={col} p={ramp(t, c(cue) + 0.3, 0.8)} pulses={false} />
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const real = c("What is really in the bowl");
  return (
    <AbsoluteFill>
      <Items items={[
        ["It is one of the oldest examples", 960, 200, <W c={DIM} s={32}>an old example from India and Tibet</W>],
      ]} />
      <At x={960} y={480} s={pop(t, fps, real - 0.6)}><Bowl size={340} /></At>
      <At x={960} y={720} s={pop(t, fps, real, 14)} o={ramp(t, real, 0.5)}><W c={GOLD} s={56} serif>what is really in the bowl?</W></At>
    </AbsoluteFill>
  );
};

const TwoLayerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const apart = c("both take this picture apart");
  const gone = ramp(t, apart + 0.4, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Common sense has a ready answer")}>common sense: two layers</Title>
      <At x={960} y={640 + 200 * gone} o={ramp(t, c("some raw and neutral stuff"), 0.5) * (1 - gone)}><Floor w={760} color={DIM} /></At>
      <At x={960} y={700} o={ramp(t, c("some raw and neutral stuff") + 0.3, 0.5) * (1 - gone)}><W c={DIM} s={30}>neutral stuff underneath</W></At>
      {[ICE, WARM, TEAL, GOLD].map((col, i) => (
        <At key={i} x={660 + i * 200} y={380} o={ramp(t, c("Each creature looks at it through its own lens") + i * 0.25, 0.4)}><Eye color={col} size={120} /></At>
      ))}
      <At x={960} y={500} o={ramp(t, c("Two layers"), 0.5) * (1 - gone)}><W c={CHALK} s={32}>views on top</W></At>
      <At x={960} y={640} o={ramp(t, apart + 0.6, 0.5)}><Cross size={140} /></At>
      <Items items={[
        ["Agreement does not need a hidden bedrock", 960, 780, <W c={GOLD} s={38} serif>agreement needs no hidden bedrock</W>, { until: "are identified together, each depending on the others" }],
        ["are identified together, each depending on the others", 960, 780, <W c={TEAL} s={34}>seen, seer and meeting: identified together</W>, { until: "just as impossible to pin down as the things themselves" }],
        ["just as impossible to pin down as the things themselves", 960, 780, <W c={VIOLET} s={34}>and the relations, too, are not found</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LiquidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const word = c("Start with a word we slipped in without noticing");
  return (
    <AbsoluteFill>
      <At x={960} y={300} s={pop(t, fps, word + 0.6, 14)}><W c={GOLD} s={70} serif>“the liquid”</W></At>
      <Items items={[
        ["already assumes an object waiting there", 960, 520, <Bowl ghost={0.5} />],
        ["already assumes an object waiting there", 960, 700, <W c={DIM} s={30}>a finished thing, waiting before anyone meets it?</W>, { d: 0.5 }],
        ["a thing in itself, hidden behind the senses", 960, 790, <W c={ICE} s={36} serif>Kant’s “thing in itself”</W>],
      ]} />
    </AbsoluteFill>
  );
};

const DilemmaScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("So ask what this hidden thing is like")}>what is the hidden thing like?</Title>
      <Items items={[
        ["If it has definite qualities", 560, 380, <Glass />, { pop: true }],
        ["If it has definite qualities", 560, 520, <W c={ICE} s={32}>really water?</W>, { d: 0.5 }],
        ["If it has definite qualities", 560, 600, <W c={WARM} s={28}>then why pus for the ghost?</W>, { d: 1.6 }],
        ["If it has no qualities at all", 1360, 400, <Orb size={110} color={DIM} />, { pop: true }],
        ["If it has no qualities at all", 1360, 540, <W c={DIM} s={32}>a featureless blank?</W>, { d: 0.5 }],
        ["If it has no qualities at all", 1360, 600, <W c={WARM} s={28}>it causes nothing</W>, { d: 1.6 }],
        ["Either way, it does no work", 960, 760, <W c={GOLD} s={42} serif>either way, it does no work</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WetScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Why not simply wetness")}>“just wetness”?</Title>
      <Items items={[
        ["wetness in general is an idea made by thought", 960, 280, <W c={DIM} s={32}>wetness in general: an idea</W>],
        ["this drinkable water, this foul pus", 560, 470, <Glass />, { pop: true }],
        ["this drinkable water, this foul pus", 960, 470, <Ghost size={130} />, { pop: true, d: 0.6 }],
        ["this drinkable water, this foul pus", 1360, 470, <Fish />, { pop: true, d: 1.2 }],
        ["this drinkable water, this foul pus", 960, 620, <W c={ICE} s={30}>always this water, this pus, this home</W>, { d: 1.6 }],
        ["It is a useful label", 960, 720, <K c={GOLD} s={34}>a useful label</K>, { pop: true }],
        ["a nature a thing would have all by itself", 960, 810, <W c={VIOLET} s={34} serif>own nature: depending on nothing</W>, { until: "in a modest disguise" }],
        ["in a modest disguise", 960, 810, <W c={WARM} s={34} serif>“neutral stuff” is own nature in disguise</W>],
      ]} />
    </AbsoluteFill>
  );
};

const AgreeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = c("why do humans agree so reliably that the liquid is water");
  return (
    <AbsoluteFill>
      <Title at={q}>then why do we agree?</Title>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={600 + i * 240} y={420} o={ramp(t, q + 0.3 + i * 0.2, 0.4)}><Person color={ICE} size={120} /></At>
      ))}
      <Items items={[
        ["why do humans agree so reliably that the liquid is water", 960, 570, <K c={ICE}>“water”</K>, { d: 1.2, pop: true }],
        ["fall apart into private fantasies", 960, 660, <W c={DIM} s={30}>why not private fantasies?</W>, { until: "Agreement does not prove a hidden object" }],
        ["Agreement does not prove a hidden object", 960, 690, <W c={CHALK} s={34}>agreement proves no hidden object</W>],
        ["Shared, reliable agreement is simply what everyday truth is", 960, 780, <W c={GOLD} s={40} serif>shared, reliable agreement is everyday truth</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MindOnlyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const opp = c("He also refuses the opposite move");
  const box = c("making consciousness the real foundation");
  return (
    <AbsoluteFill>
      <Title at={opp}>the opposite move: mind as the floor</Title>
      <At x={960} y={480} o={ramp(t, box, 0.5) * (1 - ramp(t, c("Neither mind nor matter comes first"), 0.5))}>
        <div style={{ width: 520, height: 300, borderRadius: 30, border: `5px solid ${VIOLET}`, background: `${VIOLET}18` }} />
      </At>
      <At x={960} y={360} o={ramp(t, box + 0.3, 0.5) * (1 - ramp(t, c("Neither mind nor matter comes first"), 0.5))}><W c={VIOLET} s={30}>consciousness as the container?</W></At>
      <Items items={[
        ["a seeing cannot be identified without what is seen", 760, 500, <Eye />, { pop: true }],
        ["a seeing cannot be identified without what is seen", 1160, 500, <Bowl size={200} />, { pop: true, d: 0.6 }],
        ["a seeing cannot be identified without what is seen", 960, 640, <W c={TEAL} s={30}>no seeing without the seen, no seen without a seeing</W>, { d: 1.2 }],
        ["Neither mind nor matter comes first", 960, 740, <W c={GOLD} s={40} serif>neither mind nor matter comes first</W>],
        ["as mistaken as making matter the container", 960, 820, <W c={DIM} s={30}>mind is no better a container than matter</W>],
      ]} />
    </AbsoluteFill>
  );
};

const JaundiceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const j = c("A person with jaundice sees a white conch shell as yellow");
  const fix = c("people with healthy eyes correct them");
  const yellow = between(t, j + 0.8, fix + 0.6);
  return (
    <AbsoluteFill>
      <At x={560} y={400} s={pop(t, fps, j)}><Conch yellow={yellow} /></At>
      <At x={560} y={560} o={ramp(t, j + 0.5, 0.5)}><W c={DIM} s={28}>white conch, seen yellow</W></At>
      {[0, 1, 2].map((i) => <At key={i} x={420 + i * 140} y={720} o={ramp(t, fix + i * 0.2, 0.4)}><Person color={ICE} size={110} /></At>)}
      <Items items={[
        ["It is made within one kind of being", 560, 220, <K c={ICE}>within humans</K>, { pop: true }],
        ["The hungry ghost is not a jaundiced human", 1360, 420, <Ghost size={170} />, { pop: true }],
        ["The hungry ghost is not a jaundiced human", 1360, 220, <K c={WARM}>within ghosts</K>, { d: 0.6 }],
        ["the liquid really does function as pus", 1360, 600, <W c={WARM} s={32}>for the ghost: really pus</W>],
        ["the liquid really does function as pus", 1360, 660, <W c={DIM} s={26}>not an illusion of water</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const RefPointScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const denied = c("What is denied is a shared base");
  const gone = ramp(t, c("What is kept is a working reference point") - 0.2, 0.6);
  const pts: [number, number, string][] = [[620, 380, ICE], [1300, 380, WARM], [620, 640, TEAL], [1300, 640, GOLD]];
  return (
    <AbsoluteFill>
      <Title at={c("So what of the bowl itself")}>so what of the bowl itself?</Title>
      <At x={960} y={720 + 120 * gone} o={ramp(t, denied, 0.5) * (1 - gone)}><Floor w={800} /></At>
      <At x={960} y={660} o={ramp(t, denied + 0.3, 0.5) * (1 - gone)}><W c={WARM} s={30}>a base existing by itself</W></At>
      <At x={960} y={720} o={ramp(t, denied + 0.8, 0.4) * (1 - gone)}><Cross size={110} /></At>
      {pts.map(([x, y, col], i) => (
        <Flow key={i} x1={x} y1={y} x2={960} y2={510} color={col} p={ramp(t, c("What is kept is a working reference point") + 0.4 + i * 0.2, 0.6)} pulses={false} />
      ))}
      <Items items={[
        ["What is kept is a working reference point", 960, 510, <K c={GOLD} s={32}>reference point</K>, { pop: true }],
        ["Its job is to coordinate, not to sit underneath", 960, 800, <W c={GOLD} s={38} serif>it coordinates; it does not sit underneath</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RiverScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const turn = c("turned the example around");
  const both = c("stand or fall together");
  return (
    <AbsoluteFill>
      <Title at={c("The bowl example did not begin in the Middle Way")}>where the bowl example came from</Title>
      <Items items={[
        ["all see a river of pus together", 560, 360, <Ghost size={120} />, { pop: true }],
        ["all see a river of pus together", 700, 380, <Ghost size={100} />, { pop: true, d: 0.3 }],
        ["all see a river of pus together", 420, 380, <Ghost size={100} />, { pop: true, d: 0.5 }],
        ["all see a river of pus together", 560, 540, <W c={WARM} s={30}>one river of pus, seen together</W>, { d: 0.8 }],
        ["No river outside the mind is needed", 560, 620, <W c={VIOLET} s={30}>so: only mind?</W>],
        ["That answers the question by making consciousness the floor", 560, 720, <Floor w={460} color={VIOLET} />, { until: "turned the example around", ud: 1.2 }],
        ["turned the example around", 1360, 300, <W c={GOLD} s={36} serif>turned around</W>],
        ["neither is the mind that sees it", 1240, 460, <K c={WARM}>river of pus</K>, { pop: true }],
        ["neither is the mind that sees it", 1500, 460, <K c={VIOLET}>the seeing</K>, { pop: true, d: 0.5 }],
        ["It shows that neither the world nor the mind is the floor", 960, 790, <W c={GOLD} s={38} serif>neither world nor mind is the floor</W>],
      ]} />
      <Flow x1={1300} y1={460} x2={1440} y2={460} color={GOLD} p={ramp(t, both, 0.6)} />
      <At x={1370} y={560} o={ramp(t, both + 0.3, 0.5)}><W c={CHALK} s={30}>stand or fall together</W></At>
      <At x={560} y={720} o={between(t, turn + 0.8, turn + 2.2)}><Cross size={90} /></At>
    </AbsoluteFill>
  );
};

const OthersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const imb = c("my own experience is certain, and yours only inferred");
  const fix = c("The Middle Way refuses that imbalance");
  const tilt = 14 * ramp(t, imb, 0.6) * (1 - ramp(t, fix, 0.8));
  return (
    <AbsoluteFill>
      <Title at={c("Agreement also needs others to agree with")}>other minds</Title>
      <At x={960} y={460} o={ramp(t, imb, 0.5)}>
        <div style={{ transform: `rotate(${-tilt}deg)`, display: "flex", gap: 300, alignItems: "flex-end" }}>
          <Person color={GOLD} size={150} /><Person color={DIM} size={150} />
        </div>
      </At>
      <At x={960} y={460} o={ramp(t, imb, 0.5)}><div style={{ width: 600, height: 10, borderRadius: 5, background: CHALK, transform: `translateY(90px) rotate(${-tilt}deg)` }} /></At>
      <Items items={[
        ["my own experience is certain, and yours only inferred", 760, 270, <K c={GOLD}>mine: certain?</K>, { until: "The Middle Way refuses that imbalance" }],
        ["my own experience is certain, and yours only inferred", 1160, 270, <K c={DIM}>yours: inferred?</K>, { d: 0.6, until: "The Middle Way refuses that imbalance" }],
        ["The Middle Way refuses that imbalance", 960, 270, <W c={TEAL} s={34}>neither is findable; both work</W>],
        ["as long is identified together with short", 960, 780, <W c={GOLD} s={36} serif>identified together, like long and short</W>],
      ]} />
    </AbsoluteFill>
  );
};

const CircleScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("A critic can press further")}>is agreement circular?</Title>
      <Items items={[
        ["A critic can press further", 960, 470, <Circle2 />, { d: 0.8 }],
        ["A critic can press further", 780, 330, <K c={TEAL} s={26}>healthy senses</K>, { d: 1.4 }],
        ["A critic can press further", 1140, 610, <K c={ICE} s={26}>a kind of being</K>, { d: 2.0 }],
        ["and the circle is not a flaw", 960, 720, <W c={GOLD} s={38} serif>yes, and that is no flaw</W>],
        ["There is no such judge", 1500, 300, <Person color={DIM} size={120} />, { until: "There is no such judge", ud: 1.6 }],
        ["There is no such judge", 1500, 420, <W c={WARM} s={28}>no judge outside every view</W>, { d: 0.6 }],
        ["we agree, not in opinions, but in a shared form of life", 960, 800, <W c={CHALK} s={30}>agreement in a form of life (Wittgenstein)</W>, { until: "A second look corrects a misreading" }],
        ["A second look corrects a misreading", 960, 800, <W c={TEAL} s={32}>correction still works inside the circle</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LanguageScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("much of this agreement is carried by language")}>language carries agreement</Title>
      <Items items={[
        ["Say it, and a glass arrives", 700, 420, <K c={ICE} s={40}>“water”</K>, { pop: true }],
        ["Say it, and a glass arrives", 1200, 440, <Glass />, { pop: true, d: 0.8 }],
        ["The noun, the bowl, seems to point at one solid thing", 960, 650, <W c={WARM} s={34}>“the bowl”: a word that suggests one solid thing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const gr = c("it is called a ground only from a relative point of view");
  return (
    <AbsoluteFill>
      <Title at={c("describes the same freedom from the side of experience")} color={GOLD}>the side of experience</Title>
      <Items items={[
        ["the basis is primordially pure", 960, 260, <W c={GOLD} s={40} serif>primordially pure</W>],
        ["so nothing ever needed cleaning", 960, 330, <W c={DIM} s={30}>never fixed, so nothing to clean</W>],
        ["a hidden block of stuff, a cosmic mind", 600, 480, <K c={DIM}>a block of stuff</K>, { pop: true }],
        ["a hidden block of stuff, a cosmic mind", 960, 480, <K c={DIM}>a cosmic mind</K>, { pop: true, d: 0.5 }],
        ["a hidden block of stuff, a cosmic mind", 1320, 480, <K c={DIM}>the start of the world</K>, { pop: true, d: 1.0 }],
        ["a hidden block of stuff, a cosmic mind", 960, 480, <div style={{ width: 1000, height: 6, background: WARM, borderRadius: 3 }} />, { d: 2.0 }],
        ["empty of being any ground at all", 960, 800, <W c={GOLD} s={38} serif>empty of being any ground at all</W>],
      ]} />
      <At x={960} y={690} o={ramp(t, gr, 0.5) * (1 - ramp(t, c("empty of being any ground at all"), 0.5))}><Floor w={600} color={GOLD} /></At>
      <At x={960} y={630} o={ramp(t, gr + 0.3, 0.5) * (1 - ramp(t, c("empty of being any ground at all"), 0.5))}><W c={GOLD} s={28}>“ground”: only a way of speaking</W></At>
    </AbsoluteFill>
  );
};

const DisplayScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const d = c("Appearances are called display");
  return (
    <AbsoluteFill>
      <Title at={d} color={GOLD}>display</Title>
      {[ICE, GOLD, ROSE, TEAL, VIOLET].map((col, i) => (
        <At key={i} x={560 + i * 200} y={380 + 30 * Math.sin(t * 1.2 + i)} o={ramp(t, c("vivid and unobstructed") + i * 0.15, 0.4)}><Orb size={70} color={col} /></At>
      ))}
      <Items items={[
        ["Appearances are called display", 960, 250, <W c={DIM} s={30}>not the display of something behind</W>, { d: 0.8 }],
        ["vivid and unobstructed", 960, 500, <W c={CHALK} s={34}>vivid, unobstructed, nothing behind</W>],
        ["Even the feeling of being a subject inside", 700, 680, <Eye color={VIOLET} size={130} />, { pop: true }],
        ["Even the feeling of being a subject inside", 700, 770, <W c={VIOLET} s={28}>“me, in here”</W>, { d: 0.5 }],
        ["It arises together with the world it seems to look at", 1220, 680, <K c={ICE}>“the world, out there”</K>, { pop: true }],
        ["It arises together with the world it seems to look at", 960, 830, <W c={GOLD} s={32}>both part of the display</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const KnowingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const proj = c("is not a projector throwing out a world");
  return (
    <AbsoluteFill>
      <Title at={proj - 0.5}>knowing awareness</Title>
      <At x={560} y={420} o={ramp(t, proj, 0.5) * (1 - ramp(t, c("It is the knowing of the basis"), 0.5))}>
        <svg width={420} height={240} viewBox="0 0 420 240"><rect x={10} y={80} width={120} height={80} rx={14} fill={`${DIM}33`} stroke={DIM} strokeWidth={5} />
          <path d="M130 100 L410 20 M130 140 L410 220" stroke={DIM} strokeWidth={4} strokeDasharray="10 10" /></svg>
      </At>
      <At x={560} y={420} o={between(t, proj + 1.0, c("It is the knowing of the basis"))}><Cross size={150} /></At>
      <Items items={[
        ["and it is not the basis", 560, 600, <W c={WARM} s={30}>not a projector, not a stuff, not the basis</W>, { until: "It is the knowing of the basis" }],
        ["It is the knowing of the basis", 960, 420, <Orb size={120} color={GOLD} />, { pop: true }],
        ["It is the knowing of the basis", 960, 580, <W c={GOLD} s={36} serif>the knowing of the basis</W>, { d: 0.4 }],
        ["It is the knowing of the basis", 960, 650, <W c={CHALK} s={28}>appearing known as unfixed, dependent, empty</W>, { d: 1.2 }],
        ["The clarity belongs to the appearing itself", 960, 760, <W c={ICE} s={32}>the clarity is the appearing’s own, and empty</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BladeScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Does awareness know itself")}>does awareness know itself?</Title>
      <Items items={[
        ["a blade, he said, cannot cut itself", 960, 400,
          <svg width={460} height={120} viewBox="0 0 460 120" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
            <path d="M20 60 L360 40 L440 60 L360 80 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={4} />
            <rect x={0} y={45} width={40} height={30} rx={6} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={4} />
          </svg>, { pop: true }],
        ["a blade, he said, cannot cut itself", 960, 520, <W c={DIM} s={30}>a blade cannot cut itself</W>, { d: 0.6 }],
        ["the self-knowing of awareness is no second act", 960, 640, <W c={CHALK} s={32}>no second act, no knower behind</W>],
        ["recognised as belonging to no one", 960, 740, <W c={GOLD} s={36} serif>clarity belonging to no one</W>],
      ]} />
    </AbsoluteFill>
  );
};

const PureVisionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sep = c("separates ordinary vision from pure vision");
  return (
    <AbsoluteFill>
      <Title at={sep}>ordinary vision and pure vision</Title>
      <At x={960} y={250} o={ramp(t, sep + 0.6, 0.5)}><div style={{ width: 4, height: 520, background: `${DIM}88`, transform: "translateY(260px)" }} /></At>
      <Items items={[
        ["no kind of being has the last word over another", 420, 420, <Person color={ICE} size={110} />, { pop: true }],
        ["no kind of being has the last word over another", 600, 420, <Ghost size={110} />, { pop: true, d: 0.3 }],
        ["no kind of being has the last word over another", 780, 420, <Person color={GOLD} size={110} halo />, { pop: true, d: 0.6 }],
        ["no kind of being has the last word over another", 600, 580, <W c={CHALK} s={28}>no last word among them</W>, { d: 1.0 }],
        ["In pure vision, the liquid appears as", 1360, 420, <Lotus />, { pop: true }],
        ["In pure vision, the liquid appears as", 1360, 580, <W c={GOLD} s={30}>the wisdom of water</W>, { d: 1.2 }],
        ["pure vision is not a window onto a bedrock", 1360, 680, <W c={WARM} s={28}>not a window onto a bedrock</W>],
        ["the habit that splits it into a solid self and solid things", 960, 800, <W c={GOLD} s={32} serif>clearer: without the habit that splits self and things</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BaradScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const meet = c("So there is no liquid waiting before the meeting");
  return (
    <AbsoluteFill>
      <Title at={c("Modern physics offers echoes of all this")} color={ICE}>echoes in physics</Title>
      <Items items={[
        ["Only echoes, not proofs", 960, 180, <W c={DIM} s={30}>echoes, not proofs</W>],
        ["things do not exist first and then interact", 960, 290, <W c={CHALK} s={32}>not things first, then interaction</W>],
        ["what she calls intra-action", 960, 360, <K c={TEAL} s={30}>intra-action (Barad)</K>, { pop: true }],
        ["The human drinker and the water appear together", 680, 560, <Person color={ICE} size={140} />, { pop: true }],
        ["The human drinker and the water appear together", 820, 590, <Glass />, { pop: true, d: 0.3 }],
        ["The suffering ghost and the pus appear together", 1200, 560, <Ghost size={140} />, { pop: true }],
        ["The suffering ghost and the pus appear together", 1330, 600, <Orb size={60} color={WARM} />, { pop: true, d: 0.3 }],
      ]} />
      <At x={960} y={780} o={ramp(t, meet, 0.5)}><W c={GOLD} s={34} serif>no liquid waiting before the meeting</W></At>
    </AbsoluteFill>
  );
};

const RovelliScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const m = c("their results match");
  return (
    <AbsoluteFill>
      <Title at={c("physical quantities have values only relative to another system")} color={ICE}>relational quantum mechanics</Title>
      <Items items={[
        ["physical quantities have values only relative to another system", 960, 220, <W c={DIM} s={28}>values only relative to another system</W>, { d: 0.6 }],
        ["How, then, do two observers agree", 620, 470, <Person color={TEAL} size={130} />, { pop: true }],
        ["How, then, do two observers agree", 1300, 470, <Person color={VIOLET} size={130} />, { pop: true, d: 0.3 }],
        ["How, then, do two observers agree", 960, 500, <Orb size={60} color={ICE} />, { pop: true, d: 0.6 }],
        ["Agreement comes from checking across perspectives", 960, 700, <W c={GOLD} s={34} serif>agreement by checking across perspectives</W>, { until: "relations are what is really there" }],
        ["relations are what is really there", 960, 760, <Floor w={700} color={VIOLET} />, { until: "and neither is the ground" }],
        ["relations are what is really there", 960, 700, <W c={VIOLET} s={30}>relations as the real stuff?</W>, { until: "and neither is the ground" }],
        ["That would only build another floor", 960, 760, <Cross size={110} />, { d: 0.3, until: "and neither is the ground" }],
        ["and neither is the ground", 960, 740, <W c={GOLD} s={36} serif>relations and relata: neither is the ground</W>],
      ]} />
      <Flow x1={680} y1={470} x2={930} y2={500} color={TEAL} p={ramp(t, m - 0.8, 0.6)} />
      <Flow x1={1240} y1={470} x2={990} y2={500} color={VIOLET} p={ramp(t, m - 0.4, 0.6)} />
      <Flow x1={700} y1={420} x2={1220} y2={420} color={GOLD} p={ramp(t, m, 0.8)} />
      <At x={960} y={360} o={ramp(t, m + 0.4, 0.5)}><K c={GOLD} s={26}>results match</K></At>
    </AbsoluteFill>
  );
};

const TickScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sig = c("A tick responds mainly to three signals");
  const water = c("A pool of clear spring water has none of these");
  const carry = c("the current carries it away");
  const drift = ramp(t, carry, 2.4);
  return (
    <AbsoluteFill>
      <Title at={c("Contact comes in degrees")}>contact comes in degrees</Title>
      <At x={560 + 260 * drift} y={420 + 180 * ramp(t, water + 2.5, 0.8)} s={pop(t, fps, sig)}><Tick /></At>
      <Items items={[
        ["the smell of mammal sweat", 560, 240, <K c={WARM} s={26}>smell of sweat</K>, { pop: true, until: "A pool of clear spring water has none of these" }],
        ["the warmth of a body, and hair", 360, 400, <K c={ROSE} s={26}>warmth</K>, { pop: true, until: "A pool of clear spring water has none of these" }],
        ["the warmth of a body, and hair", 760, 400, <K c={GOLD} s={26}>hair</K>, { pop: true, d: 0.6, until: "A pool of clear spring water has none of these" }],
        ["A pool of clear spring water has none of these", 1080, 640,
          <svg width={600} height={160} viewBox="0 0 600 160"><ellipse cx={300} cy={80} rx={290} ry={70} fill={`${ICE}22`} stroke={ICE} strokeWidth={4} /></svg>],
        ["A pool of clear spring water has none of these", 1080, 460, <W c={DIM} s={28}>not in the tick’s world</W>, { d: 0.8 }],
        ["Yet the water is not nothing to the tick", 1080, 800, <W c={ICE} s={32}>yet it holds the tick and carries it</W>],
      ]} />
    </AbsoluteFill>
  );
};

const DarkScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dm = c("Dark matter passes through the Earth without collision");
  const nu = c("A neutrino can cross vast thicknesses of lead");
  const pass = ramp(t, dm, 3.0);
  const bend = ramp(t, c("yet gravity still bends its path"), 1.2);
  return (
    <AbsoluteFill>
      <At x={560} y={420} o={ramp(t, dm - 0.4, 0.5)}><Earth /></At>
      <At x={180 + 760 * pass} y={420 + 60 * bend * Math.sin(pass * Math.PI)} o={ramp(t, dm, 0.4)}><Orb size={40} color={VIOLET} /></At>
      <At x={560} y={640} o={ramp(t, dm + 0.6, 0.5)}><W c={VIOLET} s={28}>dark matter: no collision</W></At>
      <At x={560} y={700} o={ramp(t, c("yet gravity still bends its path"), 0.5)}><W c={TEAL} s={28}>but gravity bends its path</W></At>
      <At x={1400} y={420} o={ramp(t, nu - 0.3, 0.5)}>
        <div style={{ width: 260, height: 300, borderRadius: 10, background: `${DIM}66`, border: `4px solid ${DIM}` }} />
      </At>
      <At x={1120 + 560 * ramp(t, nu, 2.0)} y={420} o={ramp(t, nu, 0.3)}><Orb size={24} color={ICE} /></At>
      <At x={1400} y={640} o={ramp(t, nu + 0.6, 0.5)}><W c={ICE} s={28}>lead: neither wall nor nothing</W></At>
      <Items items={[
        ["depends on which channels are active in it", 960, 800, <W c={GOLD} s={34} serif>what appears depends on the channels in play</W>],
      ]} />
    </AbsoluteFill>
  );
};

const OfferingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lamp = c("from the evening flame of a lamp into its midnight flame");
  const link = c("They are linked as condition and result");
  return (
    <AbsoluteFill>
      <Title at={c("The hardest test is contact between worlds")}>the hardest test: between worlds</Title>
      <Items items={[
        ["water is blessed with a mantra and given", 520, 430, <Bowl size={240} />, { pop: true }],
        ["water is blessed with a mantra and given", 520, 580, <W c={ICE} s={28}>water, blessing, generosity</W>, { d: 0.6 }],
        ["Not by a substance that travels", 960, 430, <Cross size={90} />, { until: "from the evening flame of a lamp into its midnight flame", ud: 0.2 }],
        ["The giving belongs to the human world", 1400, 430, <Ghost size={150} />, { pop: true, d: 1.5 }],
        ["The giving belongs to the human world", 1400, 580, <W c={GOLD} s={28}>relief: nectar, not pus</W>, { d: 2.0 }],
      ]} />
      <At x={820} y={300} o={ramp(t, lamp, 0.5) * (1 - ramp(t, link, 0.4))}><Lamp size={110} /></At>
      <At x={1100} y={300} o={ramp(t, lamp + 1.0, 0.5) * (1 - ramp(t, link, 0.4))}><Lamp size={110} color={WARM} /></At>
      <At x={960} y={400} o={ramp(t, lamp + 1.4, 0.5) * (1 - ramp(t, link, 0.4))}><W c={DIM} s={26}>dusk flame, midnight flame: nothing passes</W></At>
      <Flow x1={640} y1={430} x2={1300} y2={430} color={GOLD} p={ramp(t, link, 1.0)} pulses={false} />
      <At x={960} y={500} o={ramp(t, link + 0.6, 0.5)}><K c={GOLD} s={26}>condition and result</K></At>
      <Items items={[
        ["That the offering helps is a claim of tradition", 960, 700, <W c={CHALK} s={32}>that it helps: a claim of tradition</W>],
        ["This argument does not prove it", 960, 760, <W c={DIM} s={28}>not proved here</W>],
        ["physics gives it no support", 960, 820, <W c={WARM} s={28}>and physics gives it no support</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ContainerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const myth = c("Because of the container myth");
  const goes = c("When the box goes");
  const fade = 1 - ramp(t, goes, 1.2);
  return (
    <AbsoluteFill>
      <Title at={myth}>the container myth</Title>
      <At x={760} y={480} o={ramp(t, c("We picture space as an empty box"), 0.6)}><SpaceBox o={fade} /></At>
      <At x={740} y={530} s={pop(t, fps, c("We place a solid object in the middle"))} o={fade}><Orb size={80} color={GOLD} /></At>
      {[ICE, WARM, TEAL].map((col, i) => (
        <At key={i} x={420 + i * 300} y={800} o={ramp(t, c("either see the real thing or be fooled") + i * 0.2, 0.4) * fade}><Eye color={col} size={100} /></At>
      ))}
      <Items items={[
        ["spacetime is not an empty stage", 1480, 360, <W c={ICE} s={30}>spacetime: not an empty stage</W>],
        ["It is the gravitational field itself", 1480, 420, <W c={CHALK} s={28}>it is the gravitational field (Einstein)</W>],
        ["space cannot exist before its own defining mark", 1480, 520, <W c={GOLD} s={28}>space and what is in it: identified together</W>],
        ["When the box goes", 960, 640, <W c={GOLD} s={38} serif>no box, no puzzle</W>, { d: 1.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const OrderScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const web = c("Ask why there is a web of causes at all");
  return (
    <AbsoluteFill>
      <Title at={c("why is the world so orderly")}>why is there order?</Title>
      <Items items={[
        ["Barley seeds grow barley, not rice", 600, 360, <Sprout />, { pop: true }],
        ["Fire burns and does not freeze", 960, 360, <Lamp size={130} color={WARM} />, { pop: true }],
        ["does not make anything arbitrary", 1320, 360, <W c={CHALK} s={30}>empty, not arbitrary</W>],
        ["emptiness is not what makes cause and effect work", 960, 540, <W c={DIM} s={30}>emptiness is no engine</W>],
        ["Emptiness enables nothing and explains nothing", 960, 600, <W c={GOLD} s={36} serif>it enables nothing, explains nothing</W>, { until: "Ask why there is a web of causes at all" }],
        ["something with a fixed essence could never arise", 960, 680, <W c={ICE} s={30}>a fixed essence could never arise, change or end</W>, { until: "Ask why there is a web of causes at all" }],
        ["the whole is a label too", 960, 620, <W c={CHALK} s={30}>“the whole web” is a label too</W>],
        ["dependent arising has no first beginning", 960, 690, <W c={TEAL} s={30}>no first beginning</W>],
        ["It loses its object", 960, 780, <W c={GOLD} s={36} serif>the question loses its object</W>],
      ]} />
      <At x={960} y={560} o={between(t, web, c("the whole is a label too"))}><Circle2 color={DIM} /></At>
    </AbsoluteFill>
  );
};

const WidenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("Now widen the view");
  const z = 1 - 0.55 * ramp(t, w, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={460} s={pop(t, fps, c("So far, one bowl")) * z}><Bowl size={320} /></At>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Ring key={i} x={960} y={460} p={ramp(t, w + 0.3 + i * 0.3, 1.6)} r0={80} r1={500 + i * 60} color={[ICE, WARM, TEAL, GOLD, VIOLET, ROSE][i]} />
      ))}
      <Items items={[
        ["Now widen the view", 960, 160, <W c={GOLD} s={44} serif>many worlds</W>, { d: 0.8 }],
        ["each lives in a whole world of its own", 960, 720, <W c={CHALK} s={32}>each being lives in a whole world</W>],
        ["Its own textures, distances, dangers and nourishment", 960, 780, <W c={DIM} s={28}>textures, distances, dangers, nourishment</W>],
        ["Buddhist texts call such a world", 760, 840, <K c={GOLD} s={28}>loka</K>, { d: 1.0, pop: true }],
        ["The biologist", 1160, 840, <K c={TEAL} s={28}>Umwelt</K>, { d: 1.2, pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ChannelsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const uv = ramp(t, c("carry bright landing paths for it"), 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Worlds are made by channels, not by walls")}>made by channels, not by walls</Title>
      <Items items={[
        ["The tick lives in a world of three signals", 330, 420, <Tick size={110} />, { pop: true }],
        ["The tick lives in a world of three signals", 330, 560, <W c={ROSE} s={26}>three signals</W>, { d: 0.5 }],
        ["The bat finds its way by echoes", 760, 420, <Bat />, { pop: true }],
        ["The bat finds its way by echoes", 760, 560, <W c={VIOLET} s={26}>echoes in the dark</W>, { d: 0.5 }],
        ["The honeybee sees ultraviolet light", 1180, 420, <Flower uv={uv} />, { pop: true }],
        ["The honeybee sees ultraviolet light", 1250, 300, <Bee />, { pop: true, d: 0.4 }],
        ["carry bright landing paths for it", 1180, 580, <W c={VIOLET} s={26}>ultraviolet landing paths</W>, { d: 0.6 }],
        ["we live among colours, words and clocks", 1590, 420, <Person color={ICE} size={140} />, { pop: true }],
        ["we live among colours, words and clocks", 1590, 560, <W c={ICE} s={26}>colours, words, clocks</W>, { d: 0.5 }],
        ["This needs no belief in ghosts or gods", 960, 720, <W c={CHALK} s={30}>no belief in ghosts or gods needed</W>],
        ["The animals alone carry the argument", 960, 790, <W c={GOLD} s={32} serif>the animals alone carry the argument</W>],
      ]} />
      {[0, 1, 2].map((i) => (
        <Ring key={i} x={760} y={420} p={(ramp(t, c("The bat finds its way by echoes") + 0.6 + i * 0.4, 1.4) * 2) % 1} r0={40} r1={200} color={VIOLET} />
      ))}
    </AbsoluteFill>
  );
};

const ThreeSidesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ch = c("And the channels joining them");
  return (
    <AbsoluteFill>
      <Title at={c("Every world has three sides")}>three sides of a world</Title>
      <Items items={[
        ["A being, with its senses and habits", 620, 430, <Tick size={110} />, { pop: true }],
        ["A being, with its senses and habits", 620, 560, <K c={ROSE} s={26}>a being</K>, { d: 0.4 }],
        ["An environment, as that being meets it", 1300, 430, <Orb size={110} color={TEAL} />, { pop: true }],
        ["An environment, as that being meets it", 1300, 560, <K c={TEAL} s={26}>an environment, as met</K>, { d: 0.4 }],
        ["And the channels joining them", 960, 360, <K c={GOLD} s={26}>channels</K>, { d: 0.6 }],
        ["None comes first", 960, 680, <W c={GOLD} s={36} serif>none comes first</W>],
        ["It is not a box that would exist with no one inside", 960, 770, <W c={DIM} s={28}>the shared environment is not an empty box waiting</W>],
      ]} />
      <Flow x1={700} y1={430} x2={1220} y2={430} color={GOLD} p={ramp(t, ch, 0.8)} />
    </AbsoluteFill>
  );
};

const DegreesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dog = c("A human and a dog share sight, hearing and touch");
  const tick = c("A human and a tick meet briefly, at the skin");
  const none = c("share almost nothing");
  const circles = (x: number, y: number, col1: string, col2: string, gap: number, at: number) => (
    <>
      <At x={x - gap / 2} y={y} o={ramp(t, at, 0.5)}><div style={{ width: 220, height: 220, borderRadius: "50%", border: `5px solid ${col1}`, background: `${col1}18` }} /></At>
      <At x={x + gap / 2} y={y} o={ramp(t, at + 0.3, 0.5)}><div style={{ width: 220, height: 220, borderRadius: "50%", border: `5px solid ${col2}`, background: `${col2}18` }} /></At>
    </>
  );
  return (
    <AbsoluteFill>
      <Title at={c("Worlds also overlap by degrees")}>worlds overlap by degrees</Title>
      {circles(440, 460, ICE, GOLD, 90, dog)}
      {circles(960, 460, ICE, ROSE, 200, tick)}
      {circles(1480, 460, ICE, WARM, 240, none)}
      <Items items={[
        ["A human and a dog share sight, hearing and touch", 440, 660, <W c={GOLD} s={28}>human and dog: much shared</W>, { d: 0.6 }],
        ["A human and a tick meet briefly, at the skin", 960, 660, <W c={ROSE} s={28}>human and tick: the skin</W>, { d: 0.6 }],
        ["share almost nothing", 1480, 660, <W c={WARM} s={28}>human and ghost: almost nothing</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const WhereScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const same = c("right here, in the same space as ours");
  const back = c("it quietly brings back the box");
  return (
    <AbsoluteFill>
      <Title at={c("Then where are the other worlds")}>where are the other worlds?</Title>
      <Items items={[
        ["right here, in the same space as ours", 960, 260, <W c={DIM} s={32}>“right here, in the same space”?</W>],
      ]} />
      <At x={960} y={560} o={ramp(t, back, 0.6) * (1 - ramp(t, c("knows two kinds of negation"), 0.5))}><SpaceBox color={WARM} /></At>
      {[ICE, WARM, TEAL].map((col, i) => (
        <At key={i} x={840 + i * 90} y={600} o={ramp(t, c("holding them side by side") + i * 0.2, 0.4) * (1 - ramp(t, c("knows two kinds of negation"), 0.5))}><Orb size={70} color={col} /></At>
      ))}
      <At x={960} y={830} o={between(t, back + 0.6, c("knows two kinds of negation"))}><W c={WARM} s={30}>the box is back</W></At>
      <At x={960} y={420} o={between(t, same + 0.5, back)}><Orb size={60} color={ICE} /></At>
    </AbsoluteFill>
  );
};

const NegationScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("knows two kinds of negation")}>two kinds of negation</Title>
      <Items items={[
        ["One denies something and implies something else", 560, 330, <K c={DIM} s={28}>“not a monk” → a layperson</K>, { pop: true, until: "Emptiness is the second kind", ud: 1.5 }],
        ["The other simply denies, and puts nothing in its place", 1360, 330, <K c={GOLD} s={28}>simply “not”, nothing put in its place</K>, { pop: true, until: "Emptiness is the second kind", ud: 1.5 }],
        ["Emptiness is the second kind", 1360, 420, <W c={GOLD} s={30}>emptiness</W>, { until: "the other worlds are not elsewhere" }],
        ["the other worlds are not elsewhere", 960, 380, <W c={GOLD} s={48} serif>not elsewhere</W>, { pop: true }],
        ["Not far away, not behind a wall", 960, 470, <W c={CHALK} s={30}>not far away, not behind a wall</W>],
        ["And we stop there", 960, 560, <W c={TEAL} s={34} serif>and we stop there</W>],
        ["so they are in the same place", 960, 650, <W c={DIM} s={30}>not “so, in the same place”</W>],
        ["so they are in the same place", 960, 650, <div style={{ width: 460, height: 5, background: WARM, borderRadius: 3 }} />, { d: 0.8 }],
        ["Each world has its own here", 960, 770, <W c={GOLD} s={36} serif>each world has its own here, near and far</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MapsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("have drawn two kinds of map")}>two kinds of map</Title>
      <Items items={[
        ["stacks the realms in a vast vertical cosmos", 560, 470, <Cosmos />],
        ["gods above and hells below", 560, 760, <W c={GOLD} s={28}>a vertical map</W>],
        ["even the pure lands, are not far away at all", 1360, 470, <Lotus size={200} />, { pop: true }],
        ["even the pure lands, are not far away at all", 1360, 620, <W c={TEAL} s={28}>not far away: a way of seeing</W>, { d: 0.6 }],
        ["Read without a container, both are maps", 960, 830, <W c={GOLD} s={34} serif>both are maps, each for its purpose</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TouchScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const glance = c("A dog and its owner meet in a glance");
  return (
    <AbsoluteFill>
      <Title at={c("Worlds touch where channels are shared")}>worlds touch where channels are shared</Title>
      <Items items={[
        ["A dog and its owner meet in a glance", 700, 440, <Person color={ICE} size={150} />, { pop: true }],
        ["A dog and its owner meet in a glance", 1220, 470, <Dog />, { pop: true, d: 0.3 }],
        ["What never crosses is a view from nowhere", 960, 660, <W c={WARM} s={32}>no view from nowhere</W>],
        ["compare them all from above", 960, 720, <W c={DIM} s={28}>no one compares all worlds from above</W>],
        ["but always as a human", 960, 800, <W c={ICE} s={30}>we know the bat’s world, always as humans</W>],
      ]} />
      <Flow x1={760} y1={400} x2={1150} y2={430} color={GOLD} p={ramp(t, glance + 0.7, 0.6)} />
    </AbsoluteFill>
  );
};

const MasterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const m = c("the human world is not the master copy");
  return (
    <AbsoluteFill>
      <Title at={m}>no master copy</Title>
      <At x={960} y={330} o={ramp(t, m + 0.3, 0.5)}><Person color={ICE} size={130} /></At>
      <Items items={[
        ["no final authority over the bat, the bee or the ghost", 560, 360, <Bat />, { pop: true }],
        ["no final authority over the bat, the bee or the ghost", 1360, 330, <Bee />, { pop: true, d: 0.4 }],
        ["no final authority over the bat, the bee or the ghost", 1560, 360, <Ghost size={110} />, { pop: true, d: 0.8 }],
        ["no final authority over the bat, the bee or the ghost", 960, 480, <W c={CHALK} s={28}>practical priority, no final authority</W>, { d: 1.2 }],
        ["Science does not escape this", 960, 580, <K c={ICE} s={28}>science</K>, { pop: true }],
        ["It extends our senses", 760, 650, <Magnifier />, { pop: true }],
        ["It extends our senses", 1160, 650, <W c={TEAL} s={28}>extends the human world</W>, { d: 0.4 }],
        ["every instrument is built and read by humans", 960, 760, <W c={DIM} s={28}>built and read by humans</W>, { until: "And this is not relativism" }],
        ["And this is not relativism", 960, 760, <W c={GOLD} s={34} serif>and not relativism</W>],
        ["there are still mistakes, like the jaundiced eye", 700, 830, <W c={ICE} s={26}>mistakes within each world</W>],
        ["the difference is real", 1220, 830, <W c={GOLD} s={26}>confusion and clarity differ</W>],
      ]} />
    </AbsoluteFill>
  );
};

const EverettScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const div = c("it divides into branches that no longer affect each other");
  return (
    <AbsoluteFill>
      <Title at={c("Physics has its own many worlds")} color={ICE}>Everett’s many worlds</Title>
      <At x={620} y={520} o={ramp(t, c("a single universal quantum state evolves without ever collapsing"), 0.5)}><Branches p={ramp(t, div, 2.4)} /></At>
      <Items items={[
        ["a single universal quantum state evolves without ever collapsing", 620, 300, <W c={ICE} s={28}>one universal state, never collapsing</W>, { d: 0.6, until: "it divides into branches that no longer affect each other" }],
        ["The branches are not places side by side", 1340, 360, <W c={CHALK} s={30}>branches: not places side by side</W>],
        ["the theory is fully deterministic", 1340, 430, <W c={DIM} s={28}>fully deterministic</W>],
        ["Both views reject the picture of one world seen one way", 1340, 530, <W c={TEAL} s={28}>both: not one world seen one way</W>],
        ["as the one thing that really exists", 1340, 600, <W c={ICE} s={28}>Everett: the wavefunction is real</W>],
        ["not even a mathematical one", 1340, 660, <W c={GOLD} s={28}>Middle Way: no floor at all</W>],
        ["branches split over time", 1340, 730, <W c={DIM} s={26}>branches split over time</W>],
        ["The worlds of the bowl arise together with those who live in them", 1340, 790, <W c={GOLD} s={26}>worlds arise with their beings</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TraditionsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("have explored these many worlds, and they do not all agree")}>the traditions do not all agree</Title>
      <Items items={[
        ["the variety of the world is born of action", 560, 380, <K c={GOLD} s={28}>Abhidharma</K>, { pop: true }],
        ["the variety of the world is born of action", 560, 470, <W c={CHALK} s={28}>the world’s variety is born of action</W>, { d: 0.4 }],
        ["though it makes consciousness the floor", 1360, 380, <K c={VIOLET} s={28}>Yogācāra</K>, { pop: true, d: -1.6 }],
        ["though it makes consciousness the floor", 1360, 470, <W c={CHALK} s={28}>shared worlds as shared karma</W>, { d: -1.2 }],
        ["though it makes consciousness the floor", 1360, 560, <Floor w={380} color={VIOLET} />, { d: 0.2 }],
        ["though it makes consciousness the floor", 1360, 560, <Cross size={80} />, { d: 1.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const NetScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const net = c("a net with a jewel at every knot");
  return (
    <AbsoluteFill>
      <Title at={net - 0.8}>Huayan: Indra’s Net</Title>
      <At x={960} y={420} o={ramp(t, net, 0.5) * (1 - ramp(t, c("from hell to buddhahood") - 1.2, 0.5))}><Net p={ramp(t, net, 2.5)} /></At>
      <Items items={[
        ["each jewel reflecting all the others", 960, 680, <W c={GOLD} s={30}>each jewel reflects all the others</W>, { until: "A thing with a core of its own would exclude others" }],
        ["and none of them the original", 960, 740, <W c={TEAL} s={30}>and none is the original</W>, { until: "A thing with a core of its own would exclude others" }],
        ["A thing with a core of its own would exclude others", 960, 700, <W c={CHALK} s={30}>a core of its own would exclude others</W>],
        ["nothing crowds anything out", 960, 770, <W c={GOLD} s={34} serif>nothing has one: nothing crowds anything out</W>],
      ]} />
      <Items items={[
        ["from hell to buddhahood", 960, 200, <K c={TEAL} s={28}>Tiantai: ten realms</K>, { d: -1.0 }],
        ["present in each single moment of mind", 960, 460, <Orb size={140} color={GOLD} />, { pop: true }],
        ["present in each single moment of mind", 960, 640, <W c={GOLD} s={30}>all ten, in one moment of mind: not one place</W>, { d: 0.6 }],
      ]} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <At key={i} x={960 + 300 * Math.cos(i * 0.628)} y={460 + 170 * Math.sin(i * 0.628)}
          o={ramp(t, c("from hell to buddhahood") + i * 0.12, 0.3)}><Orb size={34} color={[WARM, WARM, ROSE, ROSE, ICE, GOLD, TEAL, TEAL, VIOLET, GOLD][i]} /></At>
      ))}
    </AbsoluteFill>
  );
};

const ToeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const toe = c("The Buddha touches the ground with his toe");
  const shine = ramp(t, c("shines as a jewelled pure land"), 1.4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["looks so impure", 960, 200, <W c={DIM} s={32}>why does the land look so impure?</W>, { until: "shines as a jewelled pure land" }],
        ["It was always so", 960, 200, <W c={GOLD} s={38} serif>it was always so</W>],
        ["The disciple had not seen it", 960, 260, <W c={CHALK} s={28}>it had not been seen</W>],
      ]} />
      <At x={960} y={560} o={ramp(t, c("looks so impure"), 0.5)}>
        <div style={{ width: 1200, height: 10, borderRadius: 5, background: shine > 0.5 ? GOLD : DIM, boxShadow: `0 0 ${30 * shine}px ${GOLD}` }} />
      </At>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <At key={i} x={460 + i * 170} y={520 - 30 * Math.sin(t * 1.5 + i) * shine} o={0.25 + 0.75 * shine}>
          <Orb size={30 + 20 * shine} color={shine > 0.4 ? [GOLD, ICE, ROSE, TEAL, VIOLET, GOLD, ICE][i] : DIM} />
        </At>
      ))}
      <Ring x={960} y={560} p={ramp(t, toe + 0.6, 2.2)} r0={20} r1={700} color={GOLD} />
      <Items items={[
        ["trains this as pure vision", 960, 700, <W c={GOLD} s={32} serif>pure vision: a change in seeing</W>],
        ["unimpeded and transparent", 960, 770, <W c={ICE} s={30}>openness: unimpeded, transparent</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ShareScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("These traditions share three things")}>what they share</Title>
      <Items items={[
        ["Worlds are shaped by those who live in them", 960, 300, <K c={GOLD} s={30}>worlds are shaped by those who live in them</K>, { pop: true }],
        ["Worlds need not obstruct one another", 960, 400, <K c={TEAL} s={30}>worlds need not obstruct one another</K>, { pop: true }],
        ["transformation is a change in seeing, not a journey", 960, 500, <K c={VIOLET} s={30}>change in seeing, not a journey</K>, { pop: true }],
        ["What they do not share is the answer about a foundation", 960, 640, <W c={DIM} s={30}>not shared: the answer about a foundation</W>],
        ["The reading here chooses no foundation", 960, 730, <W c={GOLD} s={34} serif>this reading: no foundation, for reasons given</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LimitsScene: React.FC = () => {
  const c = useCue();
  const L: [string, string][] = [
    ["None of this proves that other realms exist", "does not prove other realms"],
    ["Physics does not confirm it", "physics does not confirm it"],
    ["It is not a theory that predicts anything", "predicts nothing"],
    ["It is not idealism", "not idealism"],
    ["it is one reading within a living tradition", "one reading in a living tradition"],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("what has not been shown")}>what has not been shown</Title>
      <Items items={L.map(([cue, w], i) => [cue, 960, 240 + i * 90, <K c={[ICE, TEAL, VIOLET, ROSE, GOLD][i]} s={28}>{w}</K>, { pop: true }] as It)} />
      <Items items={[["a single hidden original beneath all the worlds", 960, 780, <W c={GOLD} s={34} serif>removed: one hidden original beneath all worlds</W>]]} />
    </AbsoluteFill>
  );
};

const HumilityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("from a bee to a stranger");
  return (
    <AbsoluteFill>
      <Title at={c("What difference does it make")}>what difference does it make?</Title>
      <Items items={[
        ["Humility, first", 960, 220, <W c={GOLD} s={44} serif>humility</W>, { pop: true }],
        ["from a bee to a stranger", 700, 450, <Bee />, { pop: true }],
        ["from a bee to a stranger", 1220, 450, <Person color={VIOLET} size={160} />, { pop: true, d: 0.6 }],
      ]} />
      {[700, 1220].map((x, i) => (
        <At key={x} x={x} y={450} o={ramp(t, st + 1.2 + i * 0.3, 0.6)}>
          <div style={{ width: 280, height: 280, borderRadius: "50%", border: `3px solid ${[GOLD, VIOLET][i]}`, background: `${[GOLD, VIOLET][i]}14` }} />
        </At>
      ))}
      <Items items={[["a world we cannot fully enter", 960, 740, <W c={CHALK} s={32}>a world we cannot fully enter</W>]]} />
    </AbsoluteFill>
  );
};

const CompassionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cp = c("And compassion");
  return (
    <AbsoluteFill>
      <Title at={cp} color={ROSE}>compassion</Title>
      <Items items={[
        ["its suffering is not a mistake to be explained away", 560, 440, <Ghost size={170} />, { pop: true }],
        ["its suffering is not a mistake to be explained away", 560, 610, <W c={WARM} s={28}>its pus is real for it</W>, { d: 0.6 }],
        ["or the loneliness of a person", 1360, 440, <Person color={VIOLET} size={170} />, { pop: true }],
        ["or the loneliness of a person", 1360, 610, <W c={VIOLET} s={28}>a world we do not share</W>, { d: 0.6 }],
        ["No point of view owns the real world", 960, 720, <W c={CHALK} s={32}>no point of view owns the real world</W>],
        ["Emptiness takes nothing away from their suffering", 960, 800, <W c={ROSE} s={34} serif>emptiness takes nothing from their suffering</W>],
      ]} />
      <Ring x={960} y={440} p={ramp(t, c("Emptiness takes nothing away from their suffering") + 0.4, 2.4)} r0={60} r1={620} color={ROSE} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("For whom emptiness works, everything works");
  return (
    <AbsoluteFill>
      <Items items={[["answered his critics in one line", 960, 200, <W c={DIM} s={30}>Nāgārjuna, to his critics</W>]]} />
      <At x={960} y={380} s={pop(t, fps, v, 14)} o={ramp(t, v, 0.6)}><W c={GOLD} s={56} serif>“For whom emptiness works, everything works.”</W></At>
      <Items items={[
        ["A world of fixed natures could never change", 960, 560, <W c={DIM} s={32}>fixed natures: nothing could change</W>],
        ["Only where nothing is fixed can anything move at all", 960, 640, <W c={TEAL} s={32}>nothing fixed: things move</W>],
        ["when appearing is recognised as display", 960, 760, <W c={CHALK} s={32}>appearing, recognised as display</W>],
      ]} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("Vivid, unproduced, and found nowhere");
  const many = c("Many worlds, then, and no floor beneath them");
  const end = c("Everyday life never needed one");
  const beings: [number, number, React.ReactNode][] = [[460, 380, <Person color={ICE} />], [1460, 380, <Ghost />], [460, 640, <Fish />],
    [1460, 640, <Bee />], [760, 260, <Bat />], [1160, 260, <Tick size={100} />]];
  return (
    <AbsoluteFill>
      {(["vivid", "unproduced", "found nowhere"] as const).map((w, i) => (
        <At key={w} x={620 + i * 340} y={180} s={pop(t, fps, v + 0.2 + i * 0.5)}><K c={[GOLD, TEAL, ICE][i]} s={32}>{w}</K></At>
      ))}
      <At x={960} y={500} s={pop(t, fps, many)}><Bowl size={300} /></At>
      {beings.map(([x, y, node], i) => <At key={i} x={x} y={y} s={pop(t, fps, many + 0.4 + i * 0.25)}>{node}</At>)}
      <Ring x={960} y={500} p={ramp(t, many + 1.0, 3.0)} r0={120} r1={800} color={GOLD} />
      <At x={960} y={790} s={pop(t, fps, end, 16)} o={ramp(t, end, 0.8)}><W c={GOLD} s={44} serif>everyday life never needed a floor</W></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "Picture a single bowl of liquid"], ["doubt", "Start with a word we slipped in without noticing"],
    ["search", "why do humans agree so reliably that the liquid is water"], ["web", "The bowl example did not begin in the Middle Way"],
    ["whole", "describes the same freedom from the side of experience"], ["search", "Modern physics offers echoes of all this"],
    ["sea", "Contact comes in degrees"], ["doubt", "Because of the container myth"], ["open", "So far, one bowl"],
    ["web", "Then where are the other worlds"], ["search", "Physics has its own many worlds"],
    ["whole", "have explored these many worlds, and they do not all agree"], ["doubt", "what has not been shown"],
    ["vivid", "What difference does it make"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Picture a single bowl of liquid", <BowlScene />],
    ["It is one of the oldest examples", <QuestionScene />],
    ["Common sense has a ready answer", <TwoLayerScene />],
    ["Start with a word we slipped in without noticing", <LiquidScene />],
    ["So ask what this hidden thing is like", <DilemmaScene />],
    ["Why not simply wetness", <WetScene />],
    ["why do humans agree so reliably that the liquid is water", <AgreeScene />],
    ["He also refuses the opposite move", <MindOnlyScene />],
    ["A person with jaundice sees a white conch shell as yellow", <JaundiceScene />],
    ["So what of the bowl itself", <RefPointScene />],
    ["The bowl example did not begin in the Middle Way", <RiverScene />],
    ["Agreement also needs others to agree with", <OthersScene />],
    ["A critic can press further", <CircleScene />],
    ["much of this agreement is carried by language", <LanguageScene />],
    ["describes the same freedom from the side of experience", <BasisScene />],
    ["Appearances are called display", <DisplayScene />],
    ["is not a projector throwing out a world", <KnowingScene />],
    ["Does awareness know itself", <BladeScene />],
    ["separates ordinary vision from pure vision", <PureVisionScene />],
    ["Modern physics offers echoes of all this", <BaradScene />],
    ["physical quantities have values only relative to another system", <RovelliScene />],
    ["Contact comes in degrees", <TickScene />],
    ["Dark matter passes through the Earth without collision", <DarkScene />],
    ["The hardest test is contact between worlds", <OfferingScene />],
    ["Because of the container myth", <ContainerScene />],
    ["why is the world so orderly", <OrderScene />],
    ["So far, one bowl", <WidenScene />],
    ["Worlds are made by channels, not by walls", <ChannelsScene />],
    ["Every world has three sides", <ThreeSidesScene />],
    ["Worlds also overlap by degrees", <DegreesScene />],
    ["Then where are the other worlds", <WhereScene />],
    ["knows two kinds of negation", <NegationScene />],
    ["have drawn two kinds of map", <MapsScene />],
    ["Worlds touch where channels are shared", <TouchScene />],
    ["the human world is not the master copy", <MasterScene />],
    ["Physics has its own many worlds", <EverettScene />],
    ["have explored these many worlds, and they do not all agree", <TraditionsScene />],
    ["a net with a jewel at every knot", <NetScene />],
    ["looks so impure", <ToeScene />],
    ["These traditions share three things", <ShareScene />],
    ["what has not been shown", <LimitsScene />],
    ["What difference does it make", <HumilityScene />],
    ["And compassion", <CompassionScene />],
    ["answered his critics in one line", <VerseScene />],
    ["Vivid, unproduced, and found nowhere", <CloseScene />],
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
