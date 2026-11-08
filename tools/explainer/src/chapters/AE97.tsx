// Anatta to Emptiness, Bonus: Inner Winds, Energy Practices, and the Subtle Body. Explainer drawings timed to narration.
// Episode 97.
// Arc: Notice where breath is sitting -> settling into lower belly clay jar -> three ancient traditions ->
// seekers' questions -> core thesis (energy on winds, insight on reification) -> three maps compared (Taoist loop,
// Indian column, Tibetan heart knot) -> blueprints differ -> practice maps, not anatomy -> physiology (Benson warmth,
// locus coeruleus noradrenaline tuning) -> modern energy confusion -> Feynman's blocks invariant -> qi as vapour/breath ->
// Nagarjuna: the blowing is the wind -> holding an apple -> five root winds -> inward gathering -> 80 conceptions dissolve ->
// four empties and clear light -> illusory body -> where the views part -> four departures (no deeper floor, no carrier,
// no watchman, no substantial cause) -> primacy of wisdom in Buddhism & classical Taoism (Zhuangzi heart-mind fasting, Liezi) ->
// why the body matters (somatic knot of reification) -> crown warning (srog 'dzin rlung, qigong deviation, Hakuin's Zen sickness) ->
// balancing by settling into lower field -> luminous clarity needs no pump and no watchman -> uncontrived freedom in the bones.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from ep97-narration.txt, in strict narration order. No respelled words inside.
export const PHRASES = [
  // 1. Opening: where breath is sitting -> clay jar
  "Take a moment to notice where your breath is sitting", "Is your attention gathered in the head",
  "looking out from behind the eyes", "shallow in the upper chest",
  "Now let your jaw unclench", "Let your shoulders soften", "settling into the bottom of a round clay jar",
  "the moment the belly takes the weight",

  // 2. Traditions & maps
  "For thousands of years", "worked with what they called the subtle body", "inner alchemy spoke of the elixir fields",
  "the small heavenly orbit", "mapped the central channel", "seven wheels, and the coiled power",
  "channels, winds, and drops", "dissolve the winds at the heart",

  // 3. Core thesis
  "Modern seekers often look at these maps", "Are they literal anatomy", "mystical energy systems",
  "This video explores what energy practices actually do",
  "Energy practices work on the winds", "insight practices work on deconstructing",
  "What liberates is seeing through the inherent framework", "not where the winds go",

  // 4. Three maps compared
  "Let us begin with the maps themselves", "work with the same practical levers", "their blueprints do not match",
  "In Taoist inner alchemy, the map is a loop", "gathered in the lower elixir field",
  "up the back along the Governing Vessel", "through three narrow gates to the crown",
  "down the front along the Conception Vessel", "magpie bridge that closes the circuit",
  "governing logic of this orbit is reversal",
  "In Indian tantra, the map is a vertical column", "runs straight up the spine",
  "pierced by three knots", "awaken the coiled power at the base", "supreme consciousness is reunited",
  "governing logic is reunion",
  "the map converges on the heart", "wrap around it and form knots at the wheels",
  "tight six-fold knot at the heart", "melts the drop at the crown",
  "dissolve at the heart into clear light", "governing logic is dissolution",

  // 5. Practice maps, not anatomy
  "Even within a single tradition", "Lineages disagree on the colours and sides",
  "If these maps were physical anatomy", "only one of them could be correct",
  "A surgeon's scalpel would have settled", "No dissection has ever uncovered",
  "The maps are not physical anatomy", "working maps for contemplative practice",
  "coordinates where you place your attention", "how you shape the breath",
  "When modern physiology studies these practices", "warming their fingers and toes",
  "raising their core body temperature", "modulates the locus coeruleus in the brainstem",
  "tuning the release of noradrenaline", "strengthening vagal tone",
  "These scientific findings are real and useful", "measure autonomic tone and vascular response",
  "not an indestructible drop", "Turning contemplative maps into biological plumbing",

  // 6. Energy is not a substrate
  "clear away a modern confusion around the word energy", "everything is really just energy vibrating",
  "matter is consciousness and energy frozen", "mixed with modern physics",
  "This is a mistake from both sides",
  "energy is not an invisible ether", "Feynman famously pointed out",
  "energy is a numerical value that stays constant", "mathematical invariant, dependently designated",
  "not a cosmic dough",
  "were never intended as a metaphysical ground", "originally meant vapour, steam, and breath",
  "mean moving air and wind",
  "When a mind gives up gross matter", "looks for a subtler substance to take its place",
  "trading hard stuff for subtle stuff",
  "dismantled that split directly", "our grammar demands a noun before a verb",
  "we say the wind blows", "as if an entity called the wind existed first",
  "there is no wind behind the blowing", "The blowing is the wind",
  "Warmth, pressure, and the rise and fall of the ribs", "When you look for a hidden substance",
  "nothing is found",

  // 7. Five root winds
  "examine the body, they divide this internal movement", "five primary winds",
  "life-sustaining wind in the head and chest", "felt sense of an I",
  "ascending wind in the throat", "pervasive wind, centred at the heart",
  "fire-accompanying wind at the navel", "descending wind in the pelvis",
  "these five functional currents stop pulling against one another",
  "five breaths returning to the origin", "drawing the winds into the central channel",

  // 8. Dissolution & empties
  "this inward gathering is described with remarkable precision",
  "associated conceptions dissolve into the heart centre", "four outer signs and four inner empties",
  "white appearance, red increase, black near-attainment", "fundamental clear light",
  "each stage is called empty because it is emptied", "emerges from that clear light",
  "manifest as the illusory body",

  // 9. Views part: four departures
  "crucial question: how do the traditions understand this destination",
  "understood as a return", "supreme, eternal consciousness at the crown",
  "Both are foundational grounds",
  "reject any such foundational ground", "They hold firmly to emptiness",
  "employ pictures that I do not adopt",
  "consider the idea of a deeper floor", "lamp under a basket",
  "lamp does not dispel darkness within itself", "never any darkness in the lamp to begin with",
  "seeing of a tree or hearing of a bell was never dark", "already clear as sound, on its own conditions",
  "quiet, non-conceptual clarity appears", "vertical metaphysical hierarchy",
  "consider the very subtle wind-mind as a carrier", "carries the person across death",
  "bridge built for a manufactured gap", "Earlier conditions condition later fruit directly",
  "without needing an indestructible courier",
  "consider the requirement of a substantial cause", "form body must have a substantial cause",
  "same substantialist demand", "appears dependently for beings, out of wisdom and compassion",

  // 10. Primacy of wisdom & classical Taoism
  "consider the primacy of wisdom",
  "No school of Buddhism ever places energy practices above", "wisdom realizing emptiness is the principal path",
  "sole antidote to cyclic existence", "supporting vehicle", "resting in primordial purity",
  "winds to untie themselves without forceful manipulation",
  "Even in classical Taoism", "always what matters most",
  "fasting the heart-mind", "listening with the empty open breath",
  "looks down on those who merely puff and pant", "merely to prolong physical life",
  "mechanical mastery of the breath is a secondary craft", "wandering freely and being one with",

  // 11. Why the body matters & crown warning
  "If steering the winds is not what liberates", "does the body matter at all",
  "reification does not live only in philosophical concepts",
  "lives in our muscles, our diaphragm, and our nervous system",
  "subtle contraction in place", "brace ourselves against the world",
  "Insight and the body support each other", "tied up every day in defending the ego",
  "bound energy begins to release on its own", "without forceful effort",
  "sink all the way into our emotional reflexes",
  "essential practical caution: do not over-focus on the crown",
  "strain to hold attention high in the head", "sentinel on duty",
  "chi-gong deviation", "disorder of the life-sustaining wind", "Zen sickness",
  "lungs felt parched, and his legs were like ice",

  // 12. Balancing & uncontrived clarity
  "remedy across all traditions is settling, not forcing", "Drop the watcher in the head",
  "descend gently below the navel into the lower field", "round vase, while keeping an unforced upright posture",
  "Luminous clarity needs no pump and no watchman", "Look at your experience right now",
  "The room around you, the hum of background sound", "none of it is waiting for energy to be forced upward",
  "clear, vivid, and unfindable in its very appearing",
  "contrivance stops, the winds settle on their own", "knots that were tied by defending a self begin to uncoil",
  "The view frees: it cuts the belief", "Somatic balance keeps the ground rooted and supple",
  "chest softens, and through it all, there is still no keeper",
];

// Rich palette and moods
const M = {
  open: { a: "rgba(45,35,110,0.5)", b: "rgba(160,115,45,0.36)", c: "rgba(25,65,115,0.3)" },
  heat: { a: "rgba(180,60,40,0.45)", b: "rgba(210,140,50,0.38)", c: "rgba(40,30,90,0.3)" },
  settle: { a: "rgba(35,85,110,0.5)", b: "rgba(70,140,110,0.38)", c: "rgba(140,110,45,0.32)" },
  cool: { a: "rgba(30,75,130,0.5)", b: "rgba(90,65,160,0.4)", c: "rgba(45,135,125,0.35)" },
  wisdom: { a: "rgba(195,140,55,0.5)", b: "rgba(85,55,165,0.42)", c: "rgba(50,140,130,0.35)" },
  dark: { a: "rgba(20,20,40,0.6)", b: "rgba(40,30,70,0.5)", c: "rgba(15,15,30,0.5)" },
};

// ---------------------------------------------------------------- helpers
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, o = 1, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5) * o}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

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
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

// ---------------------------------------------------------------- SVG drawings
/** Round clay jar settling at the lower belly */
const ClayJar: React.FC<{ size?: number; fillLevel?: number; color?: string }> = ({ size = 260, fillLevel = 0.7, color = GOLD }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 240 264" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${color}66)` }}>
    <ellipse cx={120} cy={30} rx={45} ry={14} fill={`${color}22`} stroke={color} strokeWidth={4} />
    <path d="M78 32 C70 60 20 110 24 180 C28 235 60 252 120 252 C180 252 212 235 216 180 C220 110 170 60 162 32 Z"
      fill="#0009" stroke={color} strokeWidth={5} />
    {/* Settled water/liquid inside */}
    <path d="M30 185 C34 230 64 246 120 246 C176 246 206 230 210 185 C170 195 70 195 30 185 Z"
      fill={`${TEAL}55`} stroke={TEAL} strokeWidth={3} />
    <ellipse cx={120} cy={185} rx={90} ry={12} fill={`${TEAL}77`} />
  </svg>
);

/** Three subtle body maps: Loop, Column, Heart-knot */
const LoopMap: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 200 260" style={{ overflow: "visible" }}>
    <rect x={10} y={10} width={180} height={240} rx={12} fill="#0a0a16" stroke={DIM} strokeWidth={2} />
    <text x={100} y={40} textAnchor="middle" fill={GOLD} fontFamily={SERIF} fontSize={22}>Taoist Orbit</text>
    {/* Up the back (Governing), Down the front (Conception) */}
    <ellipse cx={100} cy={140} rx={50} ry={75} fill="none" stroke={TEAL} strokeWidth={4} strokeDasharray="8 4" />
    <path d="M150 140 L150 130 L158 135 Z" fill={TEAL} />
    <path d="M50 140 L50 150 L42 145 Z" fill={TEAL} />
    <circle cx={100} cy={65} r={7} fill={GOLD} />
    <circle cx={100} cy={195} r={9} fill={ROSE} />
    <text x={100} y={225} textAnchor="middle" fill={ICE} fontFamily={SANS} fontSize={16}>Lower Field (丹田)</text>
    <text x={100} y={245} textAnchor="middle" fill={DIM} fontFamily={SANS} fontSize={14}>Reversal (逆)</text>
  </svg>
);

const ColumnMap: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 200 260" style={{ overflow: "visible" }}>
    <rect x={10} y={10} width={180} height={240} rx={12} fill="#0a0a16" stroke={DIM} strokeWidth={2} />
    <text x={100} y={40} textAnchor="middle" fill={GOLD} fontFamily={SERIF} fontSize={22}>Indian Tantra</text>
    <line x1={100} y1={60} x2={100} y2={210} stroke={ICE} strokeWidth={5} />
    {[75, 100, 125, 150, 175, 200].map((cy, idx) => (
      <circle key={cy} cx={100} cy={cy} r={idx === 5 ? 10 : 7} fill={idx === 5 ? ROSE : GOLD} stroke="#fff" strokeWidth={2} />
    ))}
    {/* Coiled base */}
    <path d="M90 205 Q100 215 110 205 Q100 195 90 205" fill="none" stroke={WARM} strokeWidth={3} />
    <text x={100} y={240} textAnchor="middle" fill={DIM} fontFamily={SANS} fontSize={14}>Reunion</text>
  </svg>
);

const HeartMap: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 200 260" style={{ overflow: "visible" }}>
    <rect x={10} y={10} width={180} height={240} rx={12} fill="#0a0a16" stroke={DIM} strokeWidth={2} />
    <text x={100} y={40} textAnchor="middle" fill={GOLD} fontFamily={SERIF} fontSize={22}>Tibetan Tantra</text>
    <line x1={100} y1={60} x2={100} y2={210} stroke={ICE} strokeWidth={5} />
    {/* Left and right side channels wrapping */}
    <path d="M75 65 Q100 95 125 125 Q100 155 75 185" fill="none" stroke={ROSE} strokeWidth={3} />
    <path d="M125 65 Q100 95 75 125 Q100 155 125 185" fill="none" stroke={ICE} strokeWidth={3} />
    {/* Six-fold heart knot */}
    <circle cx={100} cy={125} r={14} fill="#000" stroke={GOLD} strokeWidth={4} />
    <circle cx={100} cy={125} r={5} fill={GOLD} />
    <text x={100} y={240} textAnchor="middle" fill={DIM} fontFamily={SANS} fontSize={14}>Dissolution at Heart</text>
  </svg>
);

/** Apple and five qualities */
const AppleQualities: React.FC = () => (
  <svg width={560} height={260} viewBox="0 0 560 260" style={{ overflow: "visible" }}>
    <g transform="translate(60, 40)">
      <path d="M80 45 C56 24 18 36 20 83 C24 128 56 152 80 137 C104 152 136 128 140 83 C142 36 104 24 80 45 Z"
        fill="#E8453Cee" stroke="#FF7A59" strokeWidth={4} />
      <path d="M80 45 Q78 27 86 14" stroke="#8a5a2b" strokeWidth={5} strokeLinecap="round" fill="none" />
      <path d="M85 24 Q105 6 122 17 Q106 35 85 24 Z" fill="#6ED17B" />
    </g>
    <g transform="translate(260, 40)">
      <text x={0} y={30} fill={CHALK} fontFamily={SANS} fontSize={22}>• Solidity (Earth) — firmness</text>
      <text x={0} y={65} fill={ICE} fontFamily={SANS} fontSize={22}>• Cohesion (Water) — holds together</text>
      <text x={0} y={100} fill={WARM} fontFamily={SANS} fontSize={22}>• Heat (Fire) — coolness to touch</text>
      <text x={0} y={135} fill={GREEN} fontFamily={SANS} fontSize={22}>• Motion (Wind) — weight and sway</text>
      <text x={0} y={170} fill={VIOLET} fontFamily={SANS} fontSize={22}>• Room (Space) — room in the palm</text>
    </g>
  </svg>
);

/** Five root winds diagram */
const FiveWindsBody: React.FC = () => (
  <svg width={640} height={340} viewBox="0 0 640 340" style={{ overflow: "visible" }}>
    {/* Stylized torso line */}
    <path d="M320 20 C290 20 280 50 280 70 C250 85 230 130 235 220 C240 280 270 320 320 320 C370 320 400 280 405 220 C410 130 390 85 360 70 C360 50 350 20 320 20 Z"
      fill="#0c0d1c" stroke={DIM} strokeWidth={3} />
    {/* Wind nodes */}
    <g transform="translate(320, 50)">
      <circle r={10} fill={ICE} />
      <text x={110} y={6} fill={ICE} fontFamily={SANS} fontSize={20} fontWeight={600}>1. Life-Sustaining (Head / "I")</text>
      <line x1={15} y1={0} x2={95} y2={0} stroke={ICE} strokeWidth={2} strokeDasharray="4 2" />
    </g>
    <g transform="translate(320, 95)">
      <circle r={10} fill={TEAL} />
      <text x={-110} y={6} textAnchor="end" fill={TEAL} fontFamily={SANS} fontSize={20} fontWeight={600}>2. Ascending (Throat / Speech)</text>
      <line x1={-15} y1={0} x2={-95} y2={0} stroke={TEAL} strokeWidth={2} strokeDasharray="4 2" />
    </g>
    <g transform="translate(320, 150)">
      <circle r={12} fill={ROSE} />
      <text x={110} y={6} fill={ROSE} fontFamily={SANS} fontSize={20} fontWeight={600}>3. Pervasive (Heart / Limbs)</text>
      <line x1={15} y1={0} x2={95} y2={0} stroke={ROSE} strokeWidth={2} strokeDasharray="4 2" />
    </g>
    <g transform="translate(320, 215)">
      <circle r={11} fill={WARM} />
      <text x={-110} y={6} textAnchor="end" fill={WARM} fontFamily={SANS} fontSize={20} fontWeight={600}>4. Fire-like (Navel / Digestion)</text>
      <line x1={-15} y1={0} x2={-95} y2={0} stroke={WARM} strokeWidth={2} strokeDasharray="4 2" />
    </g>
    <g transform="translate(320, 280)">
      <circle r={11} fill={GOLD} />
      <text x={110} y={6} fill={GOLD} fontFamily={SANS} fontSize={20} fontWeight={600}>5. Descending (Pelvis / Grounding)</text>
      <line x1={15} y1={0} x2={95} y2={0} stroke={GOLD} strokeWidth={2} strokeDasharray="4 2" />
    </g>
  </svg>
);

/** Four Empties Dissolution Sequence */
const FourEmptiesBoxes: React.FC = () => (
  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
    <div style={{ width: 220, padding: 16, background: "#1a1a2e", border: `2px solid ${CHALK}`, borderRadius: 8, textAlign: "center" }}>
      <div style={{ color: CHALK, fontSize: 18, fontFamily: SERIF, fontWeight: 700 }}>1. White Appearance</div>
      <div style={{ color: DIM, fontSize: 14, marginTop: 6 }}>Moonlight · 33 thoughts of aversion cease</div>
    </div>
    <div style={{ color: GOLD, fontSize: 24 }}>→</div>
    <div style={{ width: 220, padding: 16, background: "#2e1218", border: `2px solid ${WARM}`, borderRadius: 8, textAlign: "center" }}>
      <div style={{ color: WARM, fontSize: 18, fontFamily: SERIF, fontWeight: 700 }}>2. Red Increase</div>
      <div style={{ color: DIM, fontSize: 14, marginTop: 6 }}>Sunlight · 40 thoughts of craving cease</div>
    </div>
    <div style={{ color: GOLD, fontSize: 24 }}>→</div>
    <div style={{ width: 220, padding: 16, background: "#050508", border: `2px solid ${DIM}`, borderRadius: 8, textAlign: "center" }}>
      <div style={{ color: DIM, fontSize: 18, fontFamily: SERIF, fontWeight: 700 }}>3. Black Near-Attainment</div>
      <div style={{ color: DIM, fontSize: 14, marginTop: 6 }}>Pitch darkness · 7 thoughts of ignorance cease</div>
    </div>
    <div style={{ color: GOLD, fontSize: 24 }}>→</div>
    <div style={{ width: 220, padding: 16, background: "#1c2c3e", border: `2px solid ${TEAL}`, borderRadius: 8, textAlign: "center", boxShadow: `0 0 20px ${TEAL}55` }}>
      <div style={{ color: TEAL, fontSize: 18, fontFamily: SERIF, fontWeight: 700 }}>4. Clear Light</div>
      <div style={{ color: CHALK, fontSize: 14, marginTop: 6 }}>Dawn transparency · All 80 conceptions cease</div>
    </div>
  </div>
);

// ---------------------------------------------------------------- Main Body
export const Body: React.FC = () => {
  const { t } = useT();
  const c = useCue();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {/* Dynamic Backgrounds matching the arc */}
      <Background moods={[
        { t: 0, ...M.settle },
        { t: c("inner alchemy spoke of the elixir fields"), ...M.heat },
        { t: c("Energy practices work on the winds"), ...M.wisdom },
        { t: c("clear away a modern confusion around the word energy"), ...M.cool },
        { t: c("white appearance, red increase, black near-attainment"), ...M.dark },
        { t: c("consider the primacy of wisdom"), ...M.wisdom },
        { t: c("essential practical caution: do not over-focus on the crown"), ...M.heat },
        { t: c("Luminous clarity needs no pump and no watchman"), ...M.open },
      ]} />
      <Bokeh n={18} />

      {/* SCENE 1: Where is breath sitting? -> Settle into clay jar */}
      {between(t, c("Take a moment to notice where your breath is sitting"), c("For thousands of years")) > 0 && (
        <Scene>
          <Title at={c("Take a moment to notice where your breath is sitting")} color={ICE}>Where Is Your Breath Sitting Right Now?</Title>
          <Items items={[
            ["Is your attention gathered in the head", 960, 320, <W c={ROSE} s={32}>Attention held tightly behind the eyes?</W>, { until: "Now let your jaw unclench" }],
            ["shallow in the upper chest", 960, 390, <W c={DIM} s={28}>Shallow breath braced in the collarbones</W>, { until: "Now let your jaw unclench" }],
            ["Now let your jaw unclench", 960, 340, <W c={TEAL} s={36}>Unclench jaw · Drop shoulders</W>],
            ["settling into the bottom of a round clay jar", 960, 560, <ClayJar size={260} fillLevel={0.8} />],
            ["the moment the belly takes the weight", 960, 780, <K c={GOLD} s={32}>The head cools the moment the belly takes the weight</K>],
          ]} />
        </Scene>
      )}

      {/* SCENE 2: The Three Ancient Traditions */}
      {between(t, c("For thousands of years"), c("This video explores what energy practices actually do")) > 0 && (
        <Scene>
          <Title at={c("For thousands of years")} color={GOLD}>The Subtle Body Across Asia</Title>
          <Items items={[
            ["worked with what they called the subtle body", 960, 240, <W s={32}>Channels, Winds, Drops, and Heat</W>],
            ["inner alchemy spoke of the elixir fields", 440, 520, <K c={GOLD} s={28}>Taoist Inner Alchemy: Elixir Fields &amp; Heavenly Orbits</K>],
            ["mapped the central channel", 960, 520, <K c={ICE} s={28}>Indian Tantra: Suṣumnā, Cakras &amp; Kuṇḍalinī</K>],
            ["channels, winds, and drops", 1480, 520, <K c={TEAL} s={28}>Tibetan Vajrayana: Rtsa, Rlung, Thig Le &amp; Gtum Mo</K>],
            ["Modern seekers often look at these maps", 960, 680, <W c={DIM} s={30}>Are they literal physical anatomy, or something else?</W>],
          ]} />
        </Scene>
      )}

      {/* SCENE 3: Core Thesis Banner */}
      {between(t, c("This video explores what energy practices actually do"), c("Let us begin with the maps themselves")) > 0 && (
        <Scene>
          <Title at={c("This video explores what energy practices actually do")} color={GOLD}>The Core Hinge</Title>
          <div style={{ position: "absolute", top: 320, left: 260, width: 1400, padding: "36px 48px", background: "#0b0c1dee", border: `3px solid ${GOLD}`, borderRadius: 16, textAlign: "center", boxShadow: `0 0 35px ${GOLD}44` }}>
            <div style={{ color: ICE, fontSize: 38, fontFamily: SERIF, fontWeight: 700, lineHeight: 1.4 }}>
              "Energy practices work on the winds;<br />insight practices work on deconstructing the mind's reifications."
            </div>
            <div style={{ color: CHALK, fontSize: 30, fontFamily: SANS, marginTop: 28, lineHeight: 1.4 }}>
              What liberates is <span style={{ color: GOLD, fontWeight: 700 }}>seeing through the inherent framework</span>, not where the winds go.
            </div>
          </div>
        </Scene>
      )}

      {/* SCENE 4: Three Maps Side by Side */}
      {between(t, c("Let us begin with the maps themselves"), c("Even within a single tradition")) > 0 && (
        <Scene>
          <Title at={c("Let us begin with the maps themselves")} color={CHALK}>Three Subtle Body Maps Compared</Title>
          <div style={{ position: "absolute", top: 220, left: 300, display: "flex", gap: 70 }}>
            <div style={{ opacity: ramp(t, c("In Taoist inner alchemy, the map is a loop"), 0.5) }}><LoopMap size={240} /></div>
            <div style={{ opacity: ramp(t, c("In Indian tantra, the map is a vertical column"), 0.5) }}><ColumnMap size={240} /></div>
            <div style={{ opacity: ramp(t, c("the map converges on the heart"), 0.5) }}><HeartMap size={240} /></div>
          </div>
          <Items items={[
            ["work with the same practical levers", 960, 640, <W c={ICE} s={28}>Shared somatic craft: breath, pelvic floor, spine, attention</W>],
            ["their blueprints do not match", 960, 700, <W c={GOLD} s={32}>Loop (Reversal) · Column (Reunion) · Heart (Dissolution)</W>],
          ]} />
        </Scene>
      )}

      {/* SCENE 5: Practice Maps vs Anatomy & Brain Science */}
      {between(t, c("Even within a single tradition"), c("clear away a modern confusion around the word energy")) > 0 && (
        <Scene>
          <Title at={c("Even within a single tradition")} color={ICE}>Practice Maps, Not Physical Anatomy</Title>
          <Items items={[
            ["If these maps were physical anatomy", 960, 240, <SK c={DIM} s={32} strikeAt={c("A surgeon's scalpel would have settled")}>Literal vascular anatomy / surgery pipes</SK>],
            ["The maps are not physical anatomy", 960, 340, <K c={GOLD} s={34}>Contemplative working diagrams for guiding breath and attention</K>],
            ["warming their fingers and toes", 540, 520, <Chip color={WARM} size={28}>Benson: Gtum mo peripheral warming (+8.3°C)</Chip>],
            ["modulates the locus coeruleus in the brainstem", 1380, 520, <Chip color={TEAL} size={28}>Neuroscience: Locus Coeruleus noradrenaline tuning</Chip>],
            ["measure autonomic tone and vascular response", 960, 640, <W c={CHALK} s={30}>Measures autonomic calm and vagal tone, not an indestructible drop</W>],
            ["Turning contemplative maps into biological plumbing", 960, 720, <W c={ROSE} s={26}>Do not turn attention maps into physical plumbing</W>],
          ]} />
        </Scene>
      )}

      {/* SCENE 6: Energy Is Not a Substrate: The Blowing is the Wind */}
      {between(t, c("clear away a modern confusion around the word energy"), c("examine the body, they divide this internal movement")) > 0 && (
        <Scene>
          <Title at={c("clear away a modern confusion around the word energy")} color={GOLD}>"Energy" Is Not a Substrate</Title>
          <Items items={[
            ["everything is really just energy vibrating", 960, 240, <SK c={DIM} s={30} strikeAt={c("This is a mistake from both sides")}>"Matter is just energy frozen into patterns"</SK>],
            ["energy is a numerical value that stays constant", 960, 340, <K c={ICE} s={32}>Physics: Energy is an invariant calculation (Feynman's blocks)</K>],
            ["originally meant vapour, steam, and breath", 960, 420, <W c={CHALK} s={30}>Qi = Vapour &amp; Breath · Prāṇa / rLung = Moving Air &amp; Wind</W>],
            ["there is no wind behind the blowing", 960, 530, <Glow color={GOLD} size={42} serif>The Blowing Is the Wind</Glow>],
            ["The blowing is the wind", 960, 600, <W c={DIM} s={28}>No entity called "wind" stands apart from the blowing (MMK 2.8)</W>],
            ["Warmth, pressure, and the rise and fall of the ribs", 960, 700, <AppleQualities />],
          ]} />
        </Scene>
      )}

      {/* SCENE 7: The Five Primary Winds */}
      {between(t, c("examine the body, they divide this internal movement"), c("this inward gathering is described with remarkable precision")) > 0 && (
        <Scene>
          <Title at={c("examine the body, they divide this internal movement")} color={TEAL}>The Five Primary Winds</Title>
          <div style={{ position: "absolute", top: 220, left: 640 }}>
            <FiveWindsBody />
          </div>
          <Items items={[
            ["five breaths returning to the origin", 960, 680, <K c={GOLD} s={30}>Taoist: Five Breaths Returning to Origin (五气朝元)</K>],
            ["drawing the winds into the central channel", 960, 750, <K c={ICE} s={30}>Tantric: Drawing the winds into the central channel</K>],
          ]} />
        </Scene>
      )}

      {/* SCENE 8: Dissolution in the Central Channel & The Four Empties */}
      {between(t, c("this inward gathering is described with remarkable precision"), c("crucial question: how do the traditions understand this destination")) > 0 && (
        <Scene>
          <Title at={c("this inward gathering is described with remarkable precision")} color={GOLD}>Central Channel Dissolution &amp; The Four Empties</Title>
          <Items items={[
            ["associated conceptions dissolve into the heart centre", 960, 240, <W c={DIM} s={30}>80 indicative conceptions subside (33 aversion, 40 desire, 7 ignorance)</W>],
            ["four outer signs and four inner empties", 960, 420, <FourEmptiesBoxes />],
            ["each stage is called empty because it is emptied", 960, 600, <W c={CHALK} s={30}>"Empty" = emptied of the preceding coarser conceptual appearances</W>],
            ["manifest as the illusory body", 960, 680, <K c={GOLD} s={32}>Subtle wind and mind manifest as the Illusory Body (sgyu lus)</K>],
          ]} />
        </Scene>
      )}

      {/* SCENE 9: Where Views Part — Four Departures */}
      {between(t, c("crucial question: how do the traditions understand this destination"), c("consider the primacy of wisdom")) > 0 && (
        <Scene>
          <Title at={c("crucial question: how do the traditions understand this destination")} color={GOLD}>Where the View Parts: Four Departures</Title>
          <div style={{ position: "absolute", top: 200, left: 240, width: 1440, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div style={{ padding: 24, background: "#0e0f22ee", border: `2px solid ${GOLD}`, borderRadius: 12 }}>
              <div style={{ color: GOLD, fontSize: 24, fontFamily: SERIF, fontWeight: 700 }}>1. No Deeper Floor</div>
              <div style={{ color: CHALK, fontSize: 18, marginTop: 8 }}>Coarse minds were never darkness (MMK 7.9). What dissolves is the knot of reification, not a basket hiding a lamp.</div>
            </div>
            <div style={{ padding: 24, background: "#0e0f22ee", border: `2px solid ${ICE}`, borderRadius: 12 }}>
              <div style={{ color: ICE, fontSize: 24, fontFamily: SERIF, fontWeight: 700 }}>2. No Carrier Across Death</div>
              <div style={{ color: CHALK, fontSize: 18, marginTop: 8 }}>Continuity is neither carried nor cut. Conditions condition later fruit directly without needing an indestructible courier.</div>
            </div>
            <div style={{ padding: 24, background: "#0e0f22ee", border: `2px solid ${TEAL}`, borderRadius: 12 }}>
              <div style={{ color: TEAL, fontSize: 24, fontFamily: SERIF, fontWeight: 700 }}>3. No Night Watchman</div>
              <div style={{ color: CHALK, fontSize: 18, marginTop: 8 }}>Luminous clarity is uncontrived. Straining to maintain awareness 24/7 through deep sleep is the split.</div>
            </div>
            <div style={{ padding: 24, background: "#0e0f22ee", border: `2px solid ${ROSE}`, borderRadius: 12 }}>
              <div style={{ color: ROSE, fontSize: 24, fontFamily: SERIF, fontWeight: 700 }}>4. No Substantial Cause Needed</div>
              <div style={{ color: CHALK, fontSize: 18, marginTop: 8 }}>Form bodies arise through spontaneous presence for beings, without needing subtle wind as raw material.</div>
            </div>
          </div>
        </Scene>
      )}

      {/* SCENE 10: Primacy of Wisdom in Buddhism & Classical Taoism */}
      {between(t, c("consider the primacy of wisdom"), c("If steering the winds is not what liberates")) > 0 && (
        <Scene>
          <Title at={c("consider the primacy of wisdom")} color={GOLD}>The Primacy of Wisdom &amp; Being One with the Dao</Title>
          <Items items={[
            ["No school of Buddhism ever places energy practices above", 960, 240, <K c={GOLD} s={34}>Wisdom Realizing Emptiness Is the Sole Antidote</K>],
            ["sole antidote to cyclic existence", 960, 320, <W c={CHALK} s={30}>Tsongkhapa: Energy practice is only a vehicle; wisdom alone cuts the root</W>],
            ["winds to untie themselves without forceful manipulation", 960, 390, <W c={TEAL} s={28}>Dzogchen: Trekchö alone liberates; winds self-release (rang sar grol)</W>],
            ["Even in classical Taoism", 960, 500, <K c={ICE} s={32}>Zhuangzi &amp; Liezi: Being One with the Dao Is Supreme</K>],
            ["fasting the heart-mind", 960, 580, <W c={CHALK} s={28}>Fasting of the heart-mind (心斋) &amp; True Person breathing from the heels</W>],
            ["looks down on those who merely puff and pant", 960, 650, <SK c={DIM} s={28} strikeAt={c("mechanical mastery of the breath is a secondary craft")}>Mere breath-gymnastics for longevity (吐故纳新)</SK>],
            ["wandering freely and being one with", 960, 720, <Glow color={GOLD} size={32} serif>Free Wandering (逍遥游) · One with the Dao</Glow>],
          ]} />
        </Scene>
      )}

      {/* SCENE 11: Why the Body Matters & Crown Caution */}
      {between(t, c("If steering the winds is not what liberates"), c("remedy across all traditions is settling, not forcing")) > 0 && (
        <Scene>
          <Title at={c("If steering the winds is not what liberates")} color={ROSE}>Why the Body Matters &amp; Crown Warnings</Title>
          <Items items={[
            ["reification does not live only in philosophical concepts", 960, 240, <W c={CHALK} s={32}>Reification is held as bodily bracing and guarded breath</W>],
            ["bound energy begins to release on its own", 960, 320, <K c={GOLD} s={30}>Insight frees bound energy; pliancy lets the view sink into the bones</K>],
            ["essential practical caution: do not over-focus on the crown", 960, 440, <W c={WARM} s={34}>Caution: Do Not Over-Focus on the Crown or Brow</W>],
            ["strain to hold attention high in the head", 960, 520, <SK c={DIM} s={28} strikeAt={c("chi-gong deviation")}>Holding attention high like a sentinel on duty</SK>],
            ["chi-gong deviation", 480, 620, <Chip color={ROSE} size={28}>Qigong deviation (气功偏差)</Chip>],
            ["disorder of the life-sustaining wind", 960, 620, <Chip color={WARM} size={28}>Srog 'dzin rlung disorder</Chip>],
            ["Zen sickness", 1440, 620, <Chip color={VIOLET} size={28}>Hakuin's Zen sickness (禅病)</Chip>],
            ["lungs felt parched, and his legs were like ice", 960, 710, <W c={DIM} s={26}>Symptoms: burning head pressure, heart palpitations, insomnia, ice feet</W>],
          ]} />
        </Scene>
      )}

      {/* SCENE 12: Safe Balancing & Uncontrived Luminous Clarity */}
      {between(t, c("remedy across all traditions is settling, not forcing"), c("chest softens, and through it all, there is still no keeper") + 8) > 0 && (
        <Scene>
          <Title at={c("remedy across all traditions is settling, not forcing")} color={TEAL}>Settling into the Lower Field &amp; Uncontrived Clarity</Title>
          <Items items={[
            ["Drop the watcher in the head", 960, 240, <W c={TEAL} s={32}>Drop the watcher in the head · Settle into lower belly (丹田)</W>],
            ["round vase, while keeping an unforced upright posture", 960, 310, <K c={GOLD} s={28}>Gentle vase breathing: soft fullness without chest clamping</K>],
            ["Luminous clarity needs no pump and no watchman", 960, 420, <Glow color={ICE} size={40} serif>Luminous Clarity Needs No Pump and No Watchman</Glow>],
            ["none of it is waiting for energy to be forced upward", 960, 500, <W c={CHALK} s={30}>Every sound, colour, and sensation is already clear in its very appearing</W>],
            ["The view frees: it cuts the belief", 960, 610, <K c={GOLD} s={34}>The view frees; somatic balance roots</K>],
            ["chest softens, and through it all, there is still no keeper", 960, 720, <W c={CHALK} s={32} serif>The breath descends, the chest softens, and through it all, there is still no keeper.</W>],
          ]} />
        </Scene>
      )}
    </AbsoluteFill>
  );
};
