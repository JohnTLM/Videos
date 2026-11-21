// Bonus article: Negation and Formation: The Two Halves (AA31).
// (EBooks Bonus Articles/negation-and-formation, draft of 2026-11-20.)
// Revised 2026-11-21 (four-video set, option A): opening link to the last video (three hiding places, found empty),
// step four shortened (the "same habit as the self" paragraph removed; AA32 explains it), and a "Next" line held in
// the final scene.
// Earlier 2026-11-21: steps 1-5 of the turn (no "what", the "it" slips in, the "it" is formed) and the new
// section 7 (the "it" is never needed; no leap into silence; Buddha DN 9 and SN 1.25, Tsongkhapa, Dogen's painted
// rice cake).
// Arc: three hiding places, found empty -> four questions, one shape -> two halves (eraser and chalk) -> the "undeniable" is a framework -> "The wind
// blows" loses its bearer -> the flashing is the lightning; no unnamed floor -> physics points, logic decides -> three
// braided strands: experience (and its limit: a hidden ground, struck), tools (chariot; pure negation; subtler
// substrates struck), loosening -> negation is only half -> three features of every appearance -> empty is not weak
// (car, medicine, tea) -> the apple tossed -> mind and matter, two cuts -> cause (the match, three senses) -> continuity
// (the lamp) -> same words, two logics -> meeting (hand and ice) -> nothing subtracted, nothing added: the floor goes,
// the room stays -> light and complete.
// Stance: emptiness, awareness, process, web or "possibilities" are drawn only to be struck; the meeting is never drawn
// as a third thing; the apple is never drawn inside a mind. Cue phrases avoid respelled names (Nāgasena, Candrakīrti,
// Nāgārjuna, anatta) and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Flow, PictureFrame, Svg, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // link to the last video
  "In the last video, the habit's hiding places were found empty", "under the parts", "inside the mind",
  "in the world when no one looks", "Now the wider map",
  // opening
  "Over the past months my articles have taken up", "Cause without causal power", "Continuity without a carrier",
  "How identities form in the meeting", "What a phenomenon is", "I see one shape running through all of them",
  "I am John Tan, known as Thusness",
  // two halves
  "There are two halves to the work", "One half is negation", "seeing that nothing is found from its own side",
  "The other half is formation", "still appears", "Vivid", "Stable", "Working",
  // the undeniable
  "Start with negation, and with what it has to face", "The things, the substrates",
  "turn out to be frameworks", "I built them", "I never questioned them",
  // grammar
  "Substantialism is not mainly a theory", "It is an innate, default way of perceiving",
  "It assumes that separate nouns exist first", "Ordinary grammar supports this every time I speak", "The wind blows",
  "The person walks", "Each sentence slips in a fixed bearer", "A convention feels like a fact",
  // lightning
  "Direct experience is never like that", "The flashing is the lightning", "The blowing is the wind",
  "No seer stands behind the seeing", "Nor is there a raw, unnamed given", "Vividness and naming are mixed through and through",
  "and no unnamed floor at the bottom",
  // physics and logic
  "Modern physics points in a similar direction", "turns out to be defined by interaction and relation",
  "But this view does not rest on physics", "Physical theories are themselves valid frameworks", "Open to revision",
  "More basically, a fixed nature does not hold together", "To pick it out at all needs contrast, context and naming",
  "It could never change", "It could never interact",
  // three strands
  "Leaving this habit is not a", "The old picture comes back quietly", "three strands have to work together",
  // experience
  "The first strand", "Agreeing with dependency in theory changes very little", "looking for a seer behind the seeing", "and finding none",
  "Then it went on with ordinary objects", "A phone", "A cup", "A tree",
  "But experience alone has a limit", "A taste of clarity", "the framework that reads it can stay substantialist",
  "turns a genuine taste back into a hidden ground", "A universal Awareness", "A Presence with a capital P",
  // tools
  "The second strand", "Analytical tools bring thinking in line", "Look for the chariot in the wheels",
  "it is not found there", "Not in the parts, not apart from them", "Some tools are thorough and exacting",
  "The analysis has to work as a pure negation", "and puts nothing in its place",
  "Otherwise the habit simply moves to a subtler level", "A void", "A dynamic process", "A web of relations",
  "Or a store of possibilities",
  // loosening
  "The third strand", "is gripped with the tightness that solidity invites", "that grip loosens", "Gradually",
  "What is left is not a special state to be guarded", "Trying to keep it would bring the fixing back",
  "mind and matter lose their felt weight", "They become light, vivid, and workable",
  // the turn
  "And here is the turn", "Relentless negation alone is only half the story", "But there is a trap at exactly this point",
  "then what are they", "That question is the old view, still running",
  // steps one to three
  "Step one. There is no substrate", "No thing, no substance, no bearer", "Not as a ground of mind",
  "Step two. So the question, what is it, is invalid", "Take that something away", "The question was never valid",
  "Step three. So the eight extremes do not apply", "Does it arise, or cease", "Is it permanent, or annihilated",
  "Does it come, or go", "Is it the same, or different", "They belong to the inherent view",
  "And the middle way is not a middle answer between them",
  // steps four and five
  "Step four. Watch the it slip in", "as it did in, then what carries",
  "Even the question, how does it form, can carry the old view", "The it is supplied before any question is asked",
  "A grammatical ghost", "It arises", "It forms", "It lasts", "It ends", "Step five. The it is what is formed, not what forms",
  "Formation does not happen to a thing", "The cup formed on the potter's wheel is valid",
  // the test
  "Try it. Hold anything", "Notice the pull to ask, what is this, really", "Drop the it, not the cup",
  "And I still call it the cup", "That is the other half: formation",
  // three features
  "In this view, a phenomenon is a vivid appearing", "Every appearance has three features",
  "It is vivid and clear", "A sound is clear as sound", "No witness behind it is needed",
  "It is not found", "no core, no edge, no location", "Not out there in the world", "Not in here, in a private mind",
  "And not even nowhere", "And it is dependently arisen, and validly functioning", "And it works completely",
  // empty is not weak
  "This third point is the one I have had to come back to most", "Habit equates being there with being independent",
  "It hears naming as a thin sticker", "So empty sounds flimsy", "But empty does not mean weak",
  "A car with no essence can still injure you", "Medicine still heals", "A cup still holds hot tea",
  // the apple
  "Take an apple, tossed from hand to hand", "habit supplies the impression of a hard, heavy thing",
  "the apple is not found apart from the streams of consciousness", "And it is not made by them either",
  "Hardness, coolness and weight arise only as touch meets skin and fruit", "The red shifts to orange under candlelight",
  "and to grey at dusk", "When the habitual knot is untied, nothing is missing", "Still eaten", "It still nourishes me",
  // guardrail
  "One guardrail stays in place", "Consciousness is not a new floor in here", "Mind and matter are two cuts",
  "Neither is the substrate underneath the other", "Both are named together",
  // cause
  "The same two halves run through the rest of my recent work", "First, cause", "Strike a match",
  "At every frame, something is happening", "At no frame does a finished flame cross over from nowhere",
  "she lit the fire at eight is perfectly valid", "Causes work", "Rice grows from rice seed", "Bread without yeast stays flat",
  "What is never found is a causal power", "So I keep three senses of cause apart", "A producer with its own power",
  "Conditions coming together", "A link that attention singles out and names", "Conditions are not a basement under the appearing",
  "Conditions are the appearing", "What remains is called spontaneous presence", "Not uncaused", "Not a hidden source",
  // continuity
  "Second, continuity", "what carries me from this moment to the next", "The question rests on a gap that thought drew first",
  "Each moment is complete", "And a carrier would never solve it anyway", "needs bridges of its own", "Without end",
  "whatever arises in dependence on something", "Like a lamp burning through the night", "Nothing travels from one to the next",
  "Nothing is lost", "And nothing is fixed", "Habits can loosen",
  // words
  "Third, the words themselves", "Heard by the logic of substance", "Meant by the logic of dependency",
  "Relation and what is related are named together", "Emptiness, heard the first way, is a blank void",
  "Meant the second way, it is simply this", "And the word real is retired", "Working, conventionally",
  "Not found from its own side, ultimately",
  // meeting
  "If things existed with fixed natures, nothing could ever meet", "Two things with sealed edges could never touch",
  "And if they merged, they would collapse into one", "In dependent arising, meeting means something else",
  "The two sides define each other in one stroke", "A hand touches ice", "with no gap crossed, and no fusion",
  "And the meeting itself is not a third thing",
  // never needed
  "Looking back over all these articles", "The it is never needed", "Not in experience", "Not in formation",
  "Not in causes", "Not in functioning", "Not in continuity", "Not in the meeting",
  "And so there is no it to undergo the eight extremes", "They are invalid questions",
  // the gap and the leap
  "Many teachers, rightly, say the eight extremes do not apply", "But it is often said with a large gap",
  "It is not shown why they do not apply", "Nor is it shown how the world still works without it",
  "Then the gap is crossed by a leap", "Silence, as the final answer", "I do not take that route",
  "Silence keeps the it, only out of reach", "The habit only rests", "And conventions are left unexplained",
  "the final it, behind appearances", "at its best does not stop at silence",
  "spontaneous presence is dependent arising met without fixing", "Where I part is from a presentation of the leap",
  // freedom in conventions
  "Speech was never the problem", "The it heard in it was", "They are used freely, and they work",
  "The conventional is not a lower floor to leave behind", "The ultimate is not a silence to leap into",
  "They are one appearing",
  // the Buddha
  "The Buddha said it plainly", "Milk becomes curds", "While it is milk, it is not called curds",
  "Nothing is carried, yet each name is right in its time", "These are the world's common usages",
  "Even the first it, the I, is used this way", "One who is fully freed still says, I speak",
  "they use these terms as mere expressions",
  // Tsongkhapa
  "makes the same point as method", "As long as appearance and emptiness seem separate", "No leap beyond it",
  // the painted rice cake
  "And the one who sees it most clearly, for me, is", "The old saying runs", "a painted rice cake does not satisfy hunger",
  "turns it over", "There is no remedy for satisfying hunger other than painted rice cakes",
  "Without painted hunger, you never become a true person", "There is no unpainted cake behind the painting",
  "No it behind the convention", "It feeds",
  // end
  "So, with both halves in place, what has changed", "Nothing has been taken away from the world",
  "And no new ground has been added", "The apple is still red", "The car is still dangerous",
  "The cup still holds hot tea", "A friend's voice is still warm", "What has gone is only the floor that was never there",
  "What remains is not a final picture to defend", "Each appearance is met as it is", "Releasing itself as it arises",
  "Light and complete, with nothing to hold, and no one holding",
  "Next: The Taste and the Marketplace",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
};

// ---------------------------------------------------------------- helpers
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
const SK: React.FC<{ c?: string; s?: number; at: string; children: React.ReactNode }> = ({ c = DIM, s = 30, at, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at)} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "22px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={38} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
  </div>
);

// ---------------------------------------------------------------- drawings
const Apple: React.FC<{ size?: number; col?: string }> = ({ size = 200, col = "#FF6B6B" }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
    <path d="M100 58 C70 30 22 44 24 98 C26 150 62 186 100 172 C138 186 174 150 176 98 C178 44 130 30 100 58 Z"
      fill={`${col}88`} stroke={col} strokeWidth={5} style={{ filter: `drop-shadow(0 0 14px ${col})` }} />
    <path d="M100 58 C100 44 104 30 112 20" stroke="#B08850" strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M108 34 C124 18 146 20 154 28 C140 40 122 42 108 34 Z" fill="rgba(143,212,154,0.5)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
/** A lightning bolt. */
const Bolt: React.FC<{ p: number; flash: number }> = ({ p, flash }) => (
  <svg width={260} height={420} viewBox="0 0 260 420" style={{ overflow: "visible" }}>
    <DrawPath d="M150 10 L70 200 L140 200 L90 410 L220 160 L150 160 L200 10 Z" p={p} color={GOLD} width={6} len={1200}
      fill={`rgba(228,194,122,${0.15 + flash * 0.5})`} />
  </svg>
);
/** Three braided strands. */
const Braid: React.FC<{ p: number }> = ({ p }) => {
  const cols = [ICE, GOLD, GREEN];
  return (
    <svg width={1400} height={200} viewBox="0 0 1400 200" style={{ overflow: "visible" }}>
      {cols.map((col, k) => {
        let d = "M0 100";
        for (let x = 0; x <= 1400; x += 20) d += ` L${x} ${100 + Math.sin(x / 70 + (k * 2 * Math.PI) / 3) * 60}`;
        return <DrawPath key={k} d={d} p={p} color={col} width={8} len={3200} />;
      })}
    </svg>
  );
};
/** A chariot, simply drawn; `apart` 0..1 pulls its parts away. */
const Chariot: React.FC<{ p: number; apart: number }> = ({ p, apart }) => (
  <svg width={600} height={340} viewBox="0 0 600 340" style={{ overflow: "visible" }}>
    <g transform={`translate(${-apart * 90} ${apart * 40})`}><DrawPath d="M140 250 a70 70 0 1 1 -0.1 0 Z M140 180 L140 320 M70 250 L210 250" p={p} color={GOLD} width={5} len={700} /></g>
    <g transform={`translate(${apart * 90} ${apart * 40})`}><DrawPath d="M420 250 a70 70 0 1 1 -0.1 0 Z M420 180 L420 320 M350 250 L490 250" p={p} color={GOLD} width={5} len={700} /></g>
    <g transform={`translate(0 ${-apart * 60})`}><DrawPath d="M80 170 L500 170 L470 80 L120 80 Z" p={p} color={CHALK} width={5} len={1100} /></g>
    <g transform={`translate(0 ${apart * 70})`}><DrawPath d="M140 250 L420 250" p={p} color={DIM} width={6} len={300} /></g>
    <g transform={`translate(${apart * 120} ${-apart * 20})`}><DrawPath d="M500 150 L590 120" p={p} color={DIM} width={6} len={120} /></g>
  </svg>
);
/** A match with a flame that grows over `p`. */
const Match: React.FC<{ p: number; frames: number }> = ({ p, frames }) => (
  <svg width={700} height={300} viewBox="0 0 700 300" style={{ overflow: "visible" }}>
    {Array.from({ length: 6 }).map((_, i) => {
      const x = 20 + i * 115, f = i / 5;
      return <g key={i} opacity={ramp(frames, i / 7, 0.15)}>
        <rect x={x} y={30} width={100} height={240} rx={8} fill="rgba(10,12,30,0.6)" stroke={DIM} strokeWidth={3} />
        <line x1={x + 50} y1={250} x2={x + 50} y2={140} stroke="#D9B48A" strokeWidth={8} strokeLinecap="round" />
        <circle cx={x + 50} cy={134} r={10} fill="#C0504D" />
        <path d={`M${x + 50} ${134 - 50 * f} C${x + 50 + 18 * f} ${134 - 20 * f} ${x + 50 + 14 * f} ${128} ${x + 50} ${130} C${x + 50 - 14 * f} 128 ${x + 50 - 18 * f} ${134 - 20 * f} ${x + 50} ${134 - 50 * f} Z`}
          fill="rgba(255,170,80,0.85)" stroke={WARM} strokeWidth={2} opacity={f > 0 ? 1 : 0} style={{ filter: `drop-shadow(0 0 10px ${WARM})` }} />
      </g>;
    })}
    <text x={0} y={-10} fill={DIM} fontSize={26} fontFamily="SourceSans" opacity={p}>frame by frame</text>
  </svg>
);
/** An oil lamp burning. */
const Lamp: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  const fl = 1 + Math.sin(t * 8) * 0.06;
  return (
    <svg width={360} height={300} viewBox="0 0 360 300" style={{ overflow: "visible" }}>
      <circle cx={190} cy={90} r={110} fill={GOLD} opacity={0.12 * p} style={{ filter: "blur(30px)" }} />
      <DrawPath d="M60 200 C80 270 280 270 300 200 Z M300 200 L340 180" p={p} color={GOLD} width={5} len={900} fill="rgba(228,194,122,0.1)" />
      <g transform={`translate(190 190) scale(${fl * p}) translate(-190 -190)`}>
        <path d="M190 100 C215 140 218 175 190 192 C162 175 165 140 190 100 Z" fill="rgba(255,170,80,0.75)" stroke={WARM} strokeWidth={3}
          style={{ filter: `drop-shadow(0 0 14px ${WARM})` }} />
      </g>
    </svg>
  );
};
/** A simple room on a floor; `floor` 0..1 dissolves the floor. */
const Room: React.FC<{ p: number; floor: number }> = ({ p, floor }) => (
  <svg width={1100} height={560} viewBox="0 0 1100 560" style={{ overflow: "visible" }}>
    <DrawPath d="M100 470 L100 120 L550 20 L1000 120 L1000 470" p={p} color={CHALK} width={5} len={2000} />
    <DrawPath d="M200 470 L200 380 L360 380 L360 470 M180 380 L380 380" p={p} color={ICE} width={4} len={700} />
    <DrawPath d="M700 470 L700 300 L840 300 L840 470" p={p} color={DIM} width={4} len={500} />
    <circle cx={290} cy={360} r={16} fill="#FF6B6B" opacity={p} style={{ filter: "drop-shadow(0 0 8px #FF6B6B)" }} />
    <path d="M60 480 L1040 480 L1040 520 L60 520 Z" fill={`rgba(164,158,144,${0.35 * (1 - floor)})`} stroke={DIM} strokeWidth={3}
      strokeOpacity={1 - floor} strokeDasharray={floor > 0.05 ? "14 12" : undefined} />
    <text x={550} y={555} textAnchor="middle" fill={DIM} fontSize={26} fontFamily="SourceSans" opacity={(1 - floor) * p}>the floor that was never there</text>
  </svg>
);

// ---------------------------------------------------------------- scenes
/** Link to the last video: three hiding places, each looked into and found empty (nothing drawn inside). */
const HidingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const places: [string, string][] = [["under the parts", "under the parts"], ["inside the mind", "inside the mind"],
    ["in the world when no one looks", "in the world, unwatched"]];
  const map = c("Now the wider map");
  return (
    <AbsoluteFill>
      <Items items={[
        ["In the last video, the habit's hiding places were found empty", 960, 170, <Wd c={DIM} s={36} serif>Where the "it" could hide</Wd>],
      ]} />
      {places.map(([cue, label], i) => {
        const a = c(cue);
        return (
          <At key={cue} x={480 + i * 480} y={440} o={ramp(t, a, 0.5) * (1 - ramp(t, map, 0.6) * 0.6)} s={pop(t, fps, a)}>
            <div style={{ position: "relative", width: 360, height: 220, borderRadius: 18, border: `3px dashed ${DIM}`,
              background: "rgba(10,12,30,0.5)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 18 }}>
              <div style={{ position: "absolute", top: 70, left: 0, right: 0, textAlign: "center", opacity: ramp(t, a + 0.8, 0.5) }}>
                <Wd c={DIM} s={26}>found empty</Wd>
              </div>
              <Wd c={CHALK} s={28}>{label}</Wd>
            </div>
          </At>
        );
      })}
      <Items items={[
        ["Now the wider map", 960, 720, <Wd c={GOLD} s={52} serif>Now the wider map</Wd>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Cause without causal power", 560, 260, <K c={GOLD} s={34}>cause without causal power</K>, { pop: true }],
      ["Continuity without a carrier", 1360, 260, <K c={TEAL} s={34}>continuity without a carrier</K>, { pop: true }],
      ["How identities form in the meeting", 560, 400, <K c={VIOLET} s={34}>identities formed in the meeting</K>, { pop: true }],
      ["What a phenomenon is", 1360, 400, <K c={ROSE} s={34}>what a phenomenon is</K>, { pop: true }],
      ["I see one shape running through all of them", 960, 590, <Wd c={GOLD} s={56} serif>one shape</Wd>],
      ["I am John Tan, known as Thusness", 960, 760, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>],
    ]} />
  </AbsoluteFill>
);

const HalvesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const neg = c("One half is negation");
  const form = c("The other half is formation");
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, 0.1, 0.6)}><Wd c={CHALK} s={48} serif>Two halves to the work</Wd></At>
      <div style={{ position: "absolute", left: 958, top: 240, width: 4, height: 560 * ramp(t, 0.4, 1.2), background: `${DIM}88` }} />
      <At x={560} y={330} o={ramp(t, neg, 0.6)}><Wd c={WARM} s={64} serif>Negation</Wd></At>
      <At x={560} y={440} o={ramp(t, neg + 0.4, 0.6)}><SK c={DIM} s={30} at="seeing that nothing is found from its own side">a thing from its own side</SK></At>
      <At x={560} y={560} o={ramp(t, c("seeing that nothing is found from its own side"), 0.6)}><Wd c={CHALK} s={30}>nothing is found from its own side</Wd></At>
      <At x={1360} y={330} o={ramp(t, form, 0.6)}><Wd c={GREEN} s={64} serif>Formation</Wd></At>
      <At x={1360} y={440} o={ramp(t, c("still appears"), 0.6)}><Wd c={CHALK} s={30}>how a world without essence still appears</Wd></At>
      <Items items={[
        ["Vivid", 1200, 580, <K c={GOLD}>vivid</K>, { pop: true }],
        ["Stable", 1360, 580, <K c={TEAL}>stable</K>, { pop: true }],
        ["Working", 1520, 580, <K c={GREEN}>working</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const UndeniableScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fr = c("turn out to be frameworks");
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, 0.1, 0.6)}><Wd c={CHALK} s={46} serif>Exposing the "undeniable"</Wd></At>
      <At x={960} y={400} o={ramp(t, c("The things, the substrates"), 0.6)}>
        <div style={{ position: "relative", width: 560, height: 280, border: `3px ${t > fr ? "dashed" : "solid"} ${t > fr ? DIM : GOLD}`, borderRadius: 18,
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 14, background: "rgba(10,12,30,0.6)" }}>
          <Wd c={GOLD} s={40} serif>things · substrates</Wd>
          <Wd c={CHALK} s={30}>"given, undeniable, there from its own side"</Wd>
        </div>
      </At>
      <Items items={[
        ["turn out to be frameworks", 960, 620, <K c={TEAL} s={40}>frameworks</K>, { pop: true }],
        ["I built them", 760, 740, <Wd c={DIM} s={30}>I built them</Wd>],
        ["I never questioned them", 1180, 740, <Wd c={DIM} s={30}>and stopped questioning them</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GrammarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const bearer = c("Each sentence slips in a fixed bearer");
  const wind = c("The wind blows");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Substantialism is not mainly a theory", 960, 130, <SK c={DIM} s={32} at="It is an innate, default way of perceiving">a theory one chooses</SK>],
        ["It is an innate, default way of perceiving", 960, 220, <K c={GOLD} s={34}>an innate way of perceiving</K>],
        ["It assumes that separate nouns exist first", 960, 310, <Wd c={DIM} s={30}>nouns first, relations afterwards</Wd>],
      ]} />
      <At x={720} y={500} o={ramp(t, wind, 0.6)}><Wd c={CHALK} s={80} serif>The wind</Wd></At>
      <At x={1200} y={500} o={ramp(t, wind + 0.5, 0.6)}><Wd c={ICE} s={80} serif>blows.</Wd></At>
      <At x={720} y={410} o={ramp(t, bearer, 0.6) * (1 - ramp(t, c("A convention feels like a fact"), 0.8) * 0.7)}>
        <div style={{ width: 300, height: 8, background: WARM, borderRadius: 4, boxShadow: `0 0 12px ${WARM}` }} />
      </At>
      <Items items={[
        ["The person walks", 960, 640, <Wd c={CHALK} s={50} serif>The person walks.</Wd>],
        ["Each sentence slips in a fixed bearer", 720, 330, <K c={WARM} s={28}>a fixed bearer behind the action?</K>],
        ["A convention feels like a fact", 960, 780, <Wd c={DIM} s={30}>naming disappears into what is named</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LightningScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fl = c("The flashing is the lightning");
  const flash = Math.max(0, Math.sin((t - fl) * 6)) * ramp(t, fl, 0.2) * (1 - ramp(t, fl + 2, 1));
  return (
    <AbsoluteFill>
      <At x={480} y={430} o={ramp(t, fl - 0.2, 0.4)}><Bolt p={ramp(t, fl - 0.2, 0.5)} flash={flash} /></At>
      <Items items={[
        ["The flashing is the lightning", 1260, 240, <Wd c={GOLD} s={52} serif>The flashing is the lightning.</Wd>],
        ["The blowing is the wind", 1260, 340, <Wd c={ICE} s={44} serif>The blowing is the wind.</Wd>],
        ["No seer stands behind the seeing", 1260, 450, <SK c={DIM} s={32} at="No seer stands behind the seeing">a seer behind the seeing</SK>],
        ["Nor is there a raw, unnamed given", 1260, 560, <SK c={DIM} s={32} at="Nor is there a raw, unnamed given">a raw, unnamed "given" underneath</SK>],
        ["Vividness and naming are mixed through and through", 1260, 670, <K c={TEAL} s={32}>vividness and naming: no seam</K>],
        ["and no unnamed floor at the bottom", 1260, 780, <Wd c={DIM} s={30}>no unnamed floor at the bottom</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PhysicsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Modern physics points in a similar direction", 960, 150, <Wd c={CHALK} s={42} serif>Physics points in a similar direction</Wd>],
      ["turns out to be defined by interaction and relation", 960, 260, <K c={TEAL} s={32}>the "bottom layer": defined by interaction</K>],
      ["But this view does not rest on physics", 960, 370, <SK c={DIM} s={32} at="But this view does not rest on physics">physics as proof</SK>],
      ["Physical theories are themselves valid frameworks", 960, 460, <Wd c={DIM} s={30}>valid frameworks, reliable in their domains, open to revision</Wd>],
      ["More basically, a fixed nature does not hold together", 960, 580, <Wd c={GOLD} s={40} serif>A fixed nature does not hold together</Wd>],
      ["To pick it out at all needs contrast, context and naming", 960, 680, <K c={VIOLET} s={30}>picking it out needs contrast, context, naming</K>],
      ["It could never change", 760, 790, <K c={WARM} s={30}>could never change</K>],
      ["It could never interact", 1160, 790, <K c={WARM} s={30}>could never interact</K>],
    ]} />
  </AbsoluteFill>
);

const StrandsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("three strands have to work together");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Leaving this habit is not a", 960, 200, <Wd c={CHALK} s={42} serif>Not a one-time change of opinion</Wd>],
        ["The old picture comes back quietly", 960, 300, <Wd c={DIM} s={30}>the old picture comes back when attention is off duty</Wd>],
      ]} />
      <At x={960} y={540} o={ramp(t, s, 0.6)}><Braid p={ramp(t, s, 3)} /></At>
      <Items items={[
        ["three strands have to work together", 520, 700, <K c={ICE}>experience</K>, { d: 0.6, pop: true }],
        ["three strands have to work together", 960, 700, <K c={GOLD}>tools</K>, { d: 1.2, pop: true }],
        ["three strands have to work together", 1400, 700, <K c={GREEN}>loosening</K>, { d: 1.8, pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ExperienceScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The first strand", 960, 120, <Wd c={ICE} s={46} serif>1 · Confirm it in direct experience</Wd>],
      ["Agreeing with dependency in theory changes very little", 960, 220, <Wd c={DIM} s={30}>seen directly, many times</Wd>],
      ["looking for a seer behind the seeing", 540, 340, <K c={ICE} s={32}>anatta: no seer behind seeing, no hearer behind hearing</K>, { until: "But experience alone has a limit" }],
      ["A phone", 1220, 340, <K c={TEAL}>a phone</K>, { pop: true, until: "But experience alone has a limit" }],
      ["A cup", 1420, 340, <K c={TEAL}>a cup</K>, { pop: true, until: "But experience alone has a limit" }],
      ["A tree", 1600, 340, <K c={TEAL}>a tree</K>, { pop: true, until: "But experience alone has a limit" }],
      ["But experience alone has a limit", 960, 340, <Wd c={WARM} s={40} serif>But experience alone has a limit</Wd>, { d: 0.4 }],
      ["A taste of clarity", 960, 450, <K c={GOLD} s={32}>a genuine non-dual taste</K>],
      ["the framework that reads it can stay substantialist", 960, 550, <Wd c={DIM} s={30}>read through the old framework…</Wd>],
      ["A universal Awareness", 760, 680, <SK c={VIOLET} s={34} at="A Presence with a capital P">universal Awareness</SK>],
      ["A Presence with a capital P", 1180, 680, <SK c={VIOLET} s={34} at="A Presence with a capital P">Presence with a capital P</SK>],
      ["A Presence with a capital P", 960, 800, <Wd c={DIM} s={28}>a hidden ground, put back</Wd>, { d: 1 }],
    ]} />
  </AbsoluteFill>
);

const ToolsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ch = c("Look for the chariot in the wheels");
  const pure = c("The analysis has to work as a pure negation");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, 0.1, 0.6)}><Wd c={GOLD} s={46} serif>2 · Equip the view with tools</Wd></At>
      <At x={620} y={430} o={ramp(t, ch - 0.3, 0.6) * (1 - ramp(t, pure, 0.6))}><Chariot p={ramp(t, ch - 0.3, 1.6)} apart={ramp(t, c("it is not found there"), 2)} /></At>
      <Items items={[
        ["Look for the chariot in the wheels", 1360, 300, <K c={GOLD}>Nāgasena's chariot</K>, { until: "The analysis has to work as a pure negation" }],
        ["Not in the parts, not apart from them", 1360, 400, <Wd c={CHALK} s={30}>not in the parts, not apart from them</Wd>, { until: "The analysis has to work as a pure negation" }],
        ["Some tools are thorough and exacting", 1360, 520, <K c={VIOLET} s={28}>Candrakīrti's sevenfold analysis</K>, { until: "The analysis has to work as a pure negation" }],
        ["Some tools are thorough and exacting", 1360, 600, <K c={VIOLET} s={28}>Nāgārjuna's Middle Way verses</K>, { d: 0.8, until: "The analysis has to work as a pure negation" }],
        ["The analysis has to work as a pure negation", 960, 260, <Wd c={CHALK} s={40} serif>A pure negation</Wd>, { d: 0.4 }],
        ["and puts nothing in its place", 960, 350, <Wd c={DIM} s={30}>it removes a nature of its own, and puts nothing in its place</Wd>],
        ["A void", 480, 520, <SK c={DIM} at="A void">a void</SK>, { pop: true }],
        ["A dynamic process", 800, 520, <SK c={DIM} at="A dynamic process">a dynamic process</SK>, { pop: true }],
        ["A web of relations", 1140, 520, <SK c={DIM} at="A web of relations">a web of relations</SK>, { pop: true }],
        ["Or a store of possibilities", 1480, 520, <SK c={DIM} at="Or a store of possibilities">a store of possibilities</SK>, { pop: true }],
        ["Otherwise the habit simply moves to a subtler level", 960, 680, <Wd c={WARM} s={30}>otherwise the habit just moves to a subtler level</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LooseningScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const grip = ramp(t, c("is gripped with the tightness that solidity invites"), 1) * (1 - ramp(t, c("that grip loosens"), 3));
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, 0.1, 0.6)}><Wd c={GREEN} s={46} serif>3 · Taste the gradual loosening</Wd></At>
      <At x={620} y={430} o={ramp(t, c("is gripped with the tightness that solidity invites"), 0.6)} s={0.9 + grip * 0.15} r={-grip * 8}><Hand size={300} /></At>
      <Items items={[
        ["that grip loosens", 1320, 330, <K c={GREEN} s={36}>the grip loosens</K>],
        ["Gradually", 1320, 420, <Wd c={DIM} s={30}>gradually</Wd>],
        ["What is left is not a special state to be guarded", 1320, 530, <SK c={DIM} s={30} at="Trying to keep it would bring the fixing back">a special state to guard</SK>],
        ["mind and matter lose their felt weight", 1320, 650, <Wd c={CHALK} s={34} serif>mind and matter lose their felt weight</Wd>],
        ["They become light, vivid, and workable", 1320, 750, <Wd c={GOLD} s={38} serif>light · vivid · workable</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const IT: React.FC<{ s?: number; c?: string }> = ({ s = 34, c = WARM }) => <Wd c={c} s={s} serif>"it"</Wd>;
const EXTREMES = ["arising", "ceasing", "permanence", "annihilation", "coming", "going", "same", "different"];

const TurnScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Relentless negation alone is only half the story", 960, 220, <Wd c={WARM} s={62} serif>Negation is only half.</Wd>, { pop: true }],
      ["But there is a trap at exactly this point", 960, 340, <K c={ROSE} s={32}>a trap, right here</K>],
      ["then what are they", 960, 500, <SK c={CHALK} s={40} at="That question is the old view, still running">If not things, then what are they?</SK>],
      ["That question is the old view, still running", 960, 650, <Wd c={DIM} s={32}>the old view, still running: see through it, do not answer it</Wd>, { d: 0.8 }],
    ]} />
  </AbsoluteFill>
);

const StepsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const all = c("Step three. So the eight extremes do not apply") + 0.4;
  const struck = c("They belong to the inherent view");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Step one. There is no substrate", 330, 130, <K c={GOLD} s={30}>1 · no substrate</K>, { pop: true }],
        ["No thing, no substance, no bearer", 330, 230, <SK c={DIM} s={26} at="No thing, no substance, no bearer">thing · substance · bearer</SK>],
        ["Not as a ground of mind", 330, 310, <SK c={DIM} s={26} at="Not as a ground of mind">a ground of mind, energy, awareness</SK>],
        ["Step two. So the question, what is it, is invalid", 960, 130, <K c={GOLD} s={30}>2 · "what is it?" is invalid</K>, { pop: true }],
        ["Take that something away", 960, 240, <SK c={CHALK} s={40} at="Take that something away">What is it?</SK>],
        ["The question was never valid", 960, 330, <Wd c={DIM} s={26}>not hidden · not nothing · not beyond words</Wd>],
        ["Step three. So the eight extremes do not apply", 1590, 130, <K c={GOLD} s={30}>3 · the eight extremes do not apply</K>, { pop: true }],
      ]} />
      {EXTREMES.map((w, i) => (
        <At key={w} x={330 + (i % 4) * 420} y={490 + Math.floor(i / 4) * 110} o={ramp(t, all + i * 0.25, 0.4)}>
          <div style={{ position: "relative" }}><Chip color={ICE} size={30}>{w}?</Chip><Strike at={struck} /></div>
        </At>
      ))}
      <Items items={[
        ["They belong to the inherent view", 960, 740, <Wd c={WARM} s={30}>questions of the inherent view: all invalid at once</Wd>],
        ["And the middle way is not a middle answer between them", 960, 810, <Wd c={DIM} s={26}>the middle way is not a middle answer</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ItScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const five = c("Step five. The it is what is formed, not what forms");
  const verbs = ["It arises", "It forms", "It lasts", "It ends"];
  const conds = ["clay", "wheel", "fire", "hand", "use", "name"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Step four. Watch the it slip in", 960, 110, <K c={GOLD} s={30}>4 · watch the "it" slip in</K>, { pop: true, until: "Step five. The it is what is formed, not what forms" }],
        ["Even the question, how does it form, can carry the old view", 960, 220, <Wd c={CHALK} s={40} serif>How does <span style={{ color: WARM }}>it</span> form?</Wd>, { until: "Step five. The it is what is formed, not what forms" }],
        ["as it did in, then what carries", 960, 290, <Wd c={DIM} s={26}>as in "then what carries?"</Wd>, { until: "The it is supplied before any question is asked" }],
        ["The it is supplied before any question is asked", 560, 340, <K c={ROSE} s={28}>supplied before any question</K>, { until: "Step five. The it is what is formed, not what forms" }],
        ["A grammatical ghost", 1360, 340, <K c={VIOLET} s={28}>a grammatical ghost</K>, { until: "Step five. The it is what is formed, not what forms" }],
      ]} />
      {verbs.map((v, i) => (
        <At key={v} x={420 + i * 360} y={470} o={ramp(t, c(v), 0.4) * (1 - ramp(t, five, 0.4))}>
          <Wd c={CHALK} s={34}><span style={{ color: WARM }}>it</span> {v.slice(3)}</Wd>
        </At>
      ))}
      <Items items={[
        ["Step five. The it is what is formed, not what forms", 960, 110, <K c={GOLD} s={30}>5 · the "it" is what is formed, not what forms</K>, { pop: true }],
      ]} />
      {conds.map((w, i) => {
        const a = (i / conds.length) * Math.PI * 2 - Math.PI / 2;
        const x = 960 + Math.cos(a) * 330, y = 470 + Math.sin(a) * 220;
        const p = ramp(t, c("Formation does not happen to a thing") + i * 0.3, 0.6);
        return (
          <React.Fragment key={w}>
            <Flow x1={x} y1={y} x2={960 + (x - 960) * 0.35} y2={470 + (y - 470) * 0.35} color={GREEN} p={p} width={2} />
            <At x={x} y={y} o={p}><Chip color={GREEN} size={26}>{w}</Chip></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["Formation does not happen to a thing", 960, 470, <Wd c={GOLD} s={44} serif>"the cup"</Wd>, { d: 2 }],
        ["The cup formed on the potter's wheel is valid", 960, 790, <Wd c={DIM} s={28}>named in the forming, with its conditions; not found apart from them</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TestScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Try it. Hold anything", 960, 150, <Wd c={CHALK} s={44} serif>Try it</Wd>],
      ["Notice the pull to ask, what is this, really", 960, 300, <SK c={CHALK} s={36} at="Drop the it, not the cup">What is this, really?</SK>],
      ["Drop the it, not the cup", 960, 440, <Wd c={GOLD} s={52} serif>Drop the "it", not the cup.</Wd>, { pop: true }],
      ["And I still call it the cup", 960, 570, <Wd c={DIM} s={30}>still here, vivid and working, still called "the cup"</Wd>],
      ["That is the other half: formation", 960, 700, <Wd c={GREEN} s={56} serif>Formation</Wd>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const FeaturesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Every appearance has three features", 960, 120, <Wd c={CHALK} s={44} serif>Every appearance, at the same time</Wd>],
      ["It is vivid and clear", 400, 380, <Box c={GOLD} w={500} title="Vivid and clear" sub="its clarity belongs to the appearing" />, { pop: true }],
      ["No witness behind it is needed", 400, 560, <Wd c={DIM} s={26}>no witness behind it to light it up</Wd>],
      ["It is not found", 960, 380, <Box c={ICE} w={500} title="Not found" sub="no core, no edge, no location" />, { pop: true }],
      ["Not out there in the world", 960, 560, <K c={DIM} s={24}>not out there</K>],
      ["Not in here, in a private mind", 960, 630, <K c={DIM} s={24}>not in here</K>],
      ["And not even nowhere", 960, 700, <K c={DIM} s={24}>not even "nowhere"</K>],
      ["And it is dependently arisen, and validly functioning", 1520, 380, <Box c={GREEN} w={500} title="Validly functioning" sub="arises as its conditions meet" />, { pop: true }],
      ["And it works completely", 1520, 560, <Wd c={DIM} s={26}>and it works completely</Wd>],
    ]} />
  </AbsoluteFill>
);

const WeakScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Habit equates being there with being independent", 960, 160, <Wd c={DIM} s={30}>habit: being there = being independent</Wd>],
      ["It hears naming as a thin sticker", 960, 240, <Wd c={DIM} s={30}>naming = a thin sticker</Wd>],
      ["So empty sounds flimsy", 960, 330, <SK c={DIM} s={32} at="But empty does not mean weak">empty = flimsy, ghostly</SK>],
      ["But empty does not mean weak", 960, 450, <Wd c={GOLD} s={60} serif>Empty does not mean weak.</Wd>, { pop: true }],
      ["A car with no essence can still injure you", 480, 650, <Box c={WARM} w={460} title="A car" sub="can still injure you" />, { pop: true }],
      ["Medicine still heals", 960, 650, <Box c={GREEN} w={460} title="Medicine" sub="still heals" />, { pop: true }],
      ["A cup still holds hot tea", 1440, 650, <Box c={GOLD} w={460} title="A cup" sub="still holds hot tea" />, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Take an apple, tossed from hand to hand");
  const arc = (t - s) * 1.4;
  const x = 960 + Math.cos(arc) * 260, y = 420 - Math.abs(Math.sin(arc)) * 200;
  const red = c("The red shifts to orange under candlelight"), grey = c("and to grey at dusk");
  const col = t < red ? "#FF6B6B" : t < grey ? "#FF9A4D" : "#9A9A9A";
  return (
    <AbsoluteFill>
      <At x={700} y={600} o={ramp(t, s, 0.6)} r={10}><Hand size={180} /></At>
      <At x={1220} y={600} o={ramp(t, s, 0.6)} r={-10}><div style={{ transform: "scaleX(-1)" }}><Hand size={180} /></div></At>
      <At x={x} y={y} o={ramp(t, s, 0.6)} r={arc * 40}><Apple size={160} col={col} /></At>
      <Items items={[
        ["habit supplies the impression of a hard, heavy thing", 960, 110, <SK c={DIM} s={30} at="the apple is not found apart from the streams of consciousness">a hard, heavy thing on its own</SK>],
        ["the apple is not found apart from the streams of consciousness", 480, 230, <K c={ICE} s={28}>not found apart from consciousness</K>],
        ["And it is not made by them either", 1440, 230, <K c={ICE} s={28}>not made by consciousness</K>],
        ["Hardness, coolness and weight arise only as touch meets skin and fruit", 960, 790, <Wd c={CHALK} s={30}>hardness, coolness, weight: as touch meets skin and fruit</Wd>, { until: "When the habitual knot is untied, nothing is missing" }],
        ["When the habitual knot is untied, nothing is missing", 960, 790, <Wd c={GOLD} s={38} serif>Nothing is missing.</Wd>],
        ["Still eaten", 1560, 470, <K c={GREEN} s={28}>tossed · eaten · nourishing</K>],
      ]} />
    </AbsoluteFill>
  );
};

const GuardScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cut = c("Mind and matter are two cuts");
  return (
    <AbsoluteFill>
      <Items items={[
        ["One guardrail stays in place", 960, 130, <Wd c={CHALK} s={44} serif>One guardrail</Wd>],
        ["Consciousness is not a new floor in here", 960, 240, <SK c={VIOLET} s={32} at="Consciousness is not a new floor in here">consciousness: a new floor producing the apple</SK>],
      ]} />
      <At x={960} y={510} o={ramp(t, cut, 0.6)}>
        <div style={{ position: "relative", width: 700, height: 260, borderRadius: 130, border: `3px solid ${GOLD}`, boxShadow: `0 0 40px ${GOLD}55`,
          display: "flex", alignItems: "center", justifyContent: "space-around", background: "rgba(10,12,30,0.5)" }}>
          <Wd c={ICE} s={44} serif>mind</Wd>
          <div style={{ width: 4, height: 200 * ramp(t, cut + 0.6, 0.8), background: CHALK }} />
          <Wd c={ROSE} s={44} serif>matter</Wd>
        </div>
      </At>
      <Items items={[
        ["Mind and matter are two cuts", 960, 330, <Wd c={DIM} s={28}>two cuts in one vivid appearing</Wd>, { d: 0.6 }],
        ["Neither is the substrate underneath the other", 960, 720, <Wd c={CHALK} s={32}>neither is the floor under the other</Wd>],
        ["Both are named together", 960, 800, <Wd c={GOLD} s={32} serif>both are named together</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CauseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const m = c("Strike a match");
  const three = c("So I keep three senses of cause apart");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The same two halves run through the rest of my recent work", 960, 110, <Wd c={DIM} s={30}>briefly: cause · continuity · words · meeting</Wd>],
        ["First, cause", 960, 190, <Wd c={GOLD} s={46} serif>Cause, without causal power</Wd>],
      ]} />
      <At x={960} y={430} o={ramp(t, m, 0.6) * (1 - ramp(t, three, 0.6))}><Match p={ramp(t, m, 0.6)} frames={ramp(t, m, 4)} /></At>
      <Items items={[
        ["At no frame does a finished flame cross over from nowhere", 960, 640, <Wd c={CHALK} s={30}>no frame where a finished flame crosses over</Wd>, { until: "So I keep three senses of cause apart" }],
        ["Causes work", 560, 740, <K c={GREEN}>rice from rice seed</K>, { until: "So I keep three senses of cause apart" }],
        ["Bread without yeast stays flat", 1000, 740, <K c={GREEN}>bread without yeast stays flat</K>, { until: "So I keep three senses of cause apart" }],
        ["What is never found is a causal power", 1440, 740, <SK c={WARM} at="What is never found is a causal power">a causal power</SK>, { until: "So I keep three senses of cause apart" }],
        ["A producer with its own power", 960, 330, <SK c={DIM} s={34} at="Conditions coming together">a producer with its own power</SK>],
        ["Conditions coming together", 960, 440, <K c={GREEN} s={34}>✓ conditions coming together</K>],
        ["A link that attention singles out and names", 960, 540, <K c={GREEN} s={34}>✓ a link singled out and named</K>],
        ["Conditions are the appearing", 960, 660, <Wd c={GOLD} s={36} serif>conditions are the appearing</Wd>],
        ["What remains is called spontaneous presence", 960, 770, <Wd c={CHALK} s={32}>spontaneous presence (lhun grub): not uncaused, not a hidden source</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ContinuityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lamp = c("Like a lamp burning through the night");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Second, continuity", 960, 120, <Wd c={TEAL} s={46} serif>Continuity, without a carrier</Wd>],
        ["what carries me from this moment to the next", 960, 220, <Wd c={DIM} s={30}>what carries me to the next moment?</Wd>],
        ["The question rests on a gap that thought drew first", 960, 320, <K c={GOLD} s={30}>a gap that thought drew first</K>, { until: "Like a lamp burning through the night" }],
        ["Each moment is complete", 960, 410, <Wd c={CHALK} s={30}>each moment is complete</Wd>, { until: "Like a lamp burning through the night" }],
        ["needs bridges of its own", 960, 520, <SK c={DIM} s={30} at="Without end">a carrier: bridges without end</SK>, { until: "Like a lamp burning through the night" }],
        ["whatever arises in dependence on something", 960, 640, <Wd c={CHALK} s={30}>neither that very thing, nor wholly other (MMK 18.10)</Wd>, { until: "Like a lamp burning through the night" }],
      ]} />
      {[0, 1, 2].map((i) => (
        <At key={i} x={520 + i * 440} y={460} o={ramp(t, lamp + i * 0.7, 0.6)}><Lamp p={ramp(t, lamp + i * 0.7, 1)} /></At>
      ))}
      <Items items={[
        ["Nothing travels from one to the next", 960, 650, <Wd c={DIM} s={30}>nothing travels from one to the next</Wd>],
        ["Nothing is lost", 700, 760, <K c={GREEN}>nothing lost: memory, karma hold</K>],
        ["And nothing is fixed", 1240, 760, <K c={TEAL}>nothing fixed: habits can loosen</K>],
      ]} />
    </AbsoluteFill>
  );
};

const WordsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, 0.1, 0.6)}><Wd c={CHALK} s={44} serif>Same words, two logics</Wd></At>
      <At x={560} y={220} o={ramp(t, c("Heard by the logic of substance"), 0.6)}><Wd c={WARM} s={34} serif>logic of substance</Wd></At>
      <At x={1360} y={220} o={ramp(t, c("Meant by the logic of dependency"), 0.6)}><Wd c={GREEN} s={34} serif>logic of dependency</Wd></At>
      <Items items={[
        ["Heard by the logic of substance", 560, 340, <SK c={DIM} s={28} at="Meant by the logic of dependency">dependent arising: things linked in a web</SK>],
        ["Relation and what is related are named together", 1360, 340, <K c={GREEN} s={28}>named together, neither first</K>],
        ["Emptiness, heard the first way, is a blank void", 560, 480, <SK c={DIM} s={28} at="Meant the second way, it is simply this">emptiness: a void, a reservoir</SK>],
        ["Meant the second way, it is simply this", 1360, 480, <K c={GREEN} s={28}>no nature of its own is found</K>, { d: 1 }],
        ["And the word real is retired", 560, 620, <SK c={DIM} s={28} at="Working, conventionally">"real": from its own side</SK>],
        ["Working, conventionally", 1360, 600, <K c={GREEN} s={28}>validly functioning</K>],
        ["Not found from its own side, ultimately", 1360, 680, <K c={ICE} s={28}>not found from its own side</K>],
      ]} />
    </AbsoluteFill>
  );
};

const MeetingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sealed = c("Two things with sealed edges could never touch");
  const ice = c("A hand touches ice");
  return (
    <AbsoluteFill>
      <Items items={[
        ["If things existed with fixed natures, nothing could ever meet", 960, 120, <Wd c={CHALK} s={40} serif>If things had fixed natures, nothing could meet</Wd>],
      ]} />
      <At x={760} y={360} o={ramp(t, sealed, 0.6) * (1 - ramp(t, ice, 0.6))}><div style={{ width: 200, height: 200, borderRadius: 20, border: `6px solid ${WARM}`, background: `${WARM}22` }} /></At>
      <At x={1160} y={360} o={ramp(t, sealed, 0.6) * (1 - ramp(t, ice, 0.6))}><div style={{ width: 200, height: 200, borderRadius: 20, border: `6px solid ${VIOLET}`, background: `${VIOLET}22` }} /></At>
      <Items items={[
        ["Two things with sealed edges could never touch", 960, 560, <Wd c={DIM} s={30}>sealed edges never touch</Wd>, { until: "A hand touches ice" }],
        ["And if they merged, they would collapse into one", 960, 630, <Wd c={DIM} s={30}>merged, they collapse into one</Wd>, { until: "A hand touches ice" }],
        ["The two sides define each other in one stroke", 960, 200, <K c={GOLD} s={32}>the two sides define each other in one stroke</K>],
      ]} />
      <At x={820} y={460} o={ramp(t, ice, 0.6)} r={-20}><Hand size={240} /></At>
      <At x={1110} y={470} o={ramp(t, ice, 0.6)}><IceCube size={150} spin={t * 10} flash={ramp(t, ice + 1, 0.5) * (1 - ramp(t, ice + 2, 1))} /></At>
      <Items items={[
        ["with no gap crossed, and no fusion", 960, 690, <Wd c={ICE} s={32}>no gap crossed · no fusion</Wd>],
        ["And the meeting itself is not a third thing", 960, 780, <SK c={DIM} s={30} at="And the meeting itself is not a third thing">the meeting as a third thing</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const NeverScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows = ["Not in experience", "Not in formation", "Not in causes", "Not in functioning", "Not in continuity", "Not in the meeting"];
  const labels = ["experience", "formation", "causes", "functioning", "continuity", "the meeting"];
  const ex = c("And so there is no it to undergo the eight extremes");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The it is never needed", 960, 120, <Wd c={GOLD} s={56} serif>The "it" is never needed</Wd>, { pop: true }],
      ]} />
      {rows.map((r, i) => (
        <At key={r} x={420 + (i % 3) * 540} y={270 + Math.floor(i / 3) * 110} o={ramp(t, c(r), 0.4)}>
          <Chip color={GREEN} size={30}>not in {labels[i]}</Chip>
        </At>
      ))}
      {EXTREMES.map((w, i) => (
        <At key={w} x={330 + (i % 4) * 420} y={560 + Math.floor(i / 4) * 90} o={ramp(t, ex + 0.5 + i * 0.15, 0.4)}>
          <div style={{ position: "relative" }}><Chip color={DIM} size={26}>{w}?</Chip><Strike at={c("They are invalid questions")} /></div>
        </At>
      ))}
      <Items items={[
        ["They are invalid questions", 960, 800, <Wd c={WARM} s={32}>no "it" to undergo them: not false answers, invalid questions</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LeapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const leap = c("Then the gap is crossed by a leap");
  const p = ramp(t, leap, 1.5);
  const reasons = c("I do not take that route");
  return (
    <AbsoluteFill>
      <div style={{ opacity: 1 - ramp(t, reasons, 0.5) }}>
        <Items items={[
          ["Many teachers, rightly, say the eight extremes do not apply", 380, 220, <Box c={ICE} w={480} title="Extremes do not apply" sub="said rightly" />, { pop: true }],
          ["But it is often said with a large gap", 960, 420, <Wd c={DIM} s={30}>· · · a large gap · · ·</Wd>],
          ["It is not shown why they do not apply", 960, 520, <K c={ROSE} s={28}>why? the "it" was never there</K>],
          ["Nor is it shown how the world still works without it", 960, 600, <K c={ROSE} s={28}>how does the world still work?</K>],
          ["Silence, as the final answer", 1540, 220, <Box c={VIOLET} w={480} title="Spontaneous presence" sub="as the end of all speech" />, { pop: true }],
        ]} />
        <Svg><DrawPath d="M620 260 Q960 -40 1300 260" p={p} color={GOLD} width={4} len={900} /></Svg>
      </div>
      <Items items={[
        ["I do not take that route", 960, 140, <Wd c={CHALK} s={44} serif>Why I do not take the leap</Wd>],
        ["Silence keeps the it, only out of reach", 960, 280, <K c={WARM} s={30}>silence keeps the "it", only out of reach</K>],
        ["The habit only rests", 960, 380, <K c={WARM} s={30}>the habit only rests, and slips back</K>],
        ["And conventions are left unexplained", 960, 480, <K c={WARM} s={30}>conventions left unexplained</K>],
        ["the final it, behind appearances", 960, 560, <SK c={DIM} s={26} at="at its best does not stop at silence">presence as a ground: the final "it"</SK>],
        ["at its best does not stop at silence", 960, 680, <Wd c={GREEN} s={30}>Dzogchen at its best, read with Mipham: the two truths stay one</Wd>],
        ["Where I part is from a presentation of the leap", 960, 770, <Wd c={DIM} s={26}>I part only from the leap as the end of speech</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SpeechScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Speech was never the problem", 960, 170, <Wd c={CHALK} s={50} serif>Speech was never the problem.</Wd>, { pop: true }],
      ["The it heard in it was", 960, 280, <Wd c={WARM} s={40} serif>The "it" heard in it was.</Wd>],
      ["They are used freely, and they work", 960, 390, <K c={GREEN} s={30}>words and names, used freely, working</K>],
      ["The conventional is not a lower floor to leave behind", 560, 540, <SK c={DIM} s={28} at="They are one appearing">conventional: a lower floor</SK>],
      ["The ultimate is not a silence to leap into", 1360, 540, <SK c={DIM} s={28} at="They are one appearing">ultimate: a silence beyond</SK>],
      ["They are one appearing", 960, 690, <Wd c={GOLD} s={48} serif>one appearing: named, and not found</Wd>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const MilkScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stages = ["milk", "curds", "butter", "ghee"];
  const m = c("Milk becomes curds");
  return (
    <AbsoluteFill>
      <Items items={[["The Buddha said it plainly", 960, 110, <Wd c={CHALK} s={40} serif>The Buddha</Wd>]]} />
      {stages.map((w, i) => (
        <React.Fragment key={w}>
          {i ? <Flow x1={300 + (i - 1) * 440 + 110} y1={260} x2={300 + i * 440 - 110} y2={260} color={DIM} p={ramp(t, m + i * 0.7, 0.5)} pulses={false} /> : null}
          <At x={300 + i * 440} y={260} o={ramp(t, m + i * 0.7, 0.5)}><Chip color={i ? GOLD : ICE} size={34}>{w}</Chip></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["While it is milk, it is not called curds", 960, 370, <Wd c={DIM} s={28}>while it is milk, it is not called curds</Wd>],
        ["Nothing is carried, yet each name is right in its time", 960, 440, <K c={GREEN} s={28}>nothing carried · each name right in its time</K>],
        ["These are the world's common usages", 960, 560, <Wd c={CHALK} s={30} serif>"the world's common usages … used without getting stuck on them"</Wd>],
        ["These are the world's common usages", 960, 620, <Wd c={DIM} s={24}>Poṭṭhapāda Sutta, DN 9</Wd>, { d: 1 }],
        ["One who is fully freed still says, I speak", 960, 720, <K c={GOLD} s={32}>"I speak": the first "it", used as a label</K>],
        ["they use these terms as mere expressions", 960, 800, <Wd c={DIM} s={24}>"as mere expressions" (SN 1.25)</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const UnionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("As long as appearance and emptiness seem separate");
  const join = ramp(t, c("No leap beyond it") - 2, 2);
  return (
    <AbsoluteFill>
      <Items items={[["makes the same point as method", 960, 130, <Wd c={CHALK} s={40} serif>Tsongkhapa</Wd>]]} />
      <At x={960 - 170 * (1 - join)} y={430} o={ramp(t, a, 0.6)}><div style={{ width: 300, height: 300, borderRadius: "50%", border: `4px solid ${GOLD}`, background: `${GOLD}18` }} /></At>
      <At x={960 + 170 * (1 - join)} y={430} o={ramp(t, a, 0.6)}><div style={{ width: 300, height: 300, borderRadius: "50%", border: `4px solid ${ICE}`, background: `${ICE}18` }} /></At>
      <At x={960 - 170 * (1 - join) - 60 * (1 - join)} y={430} o={ramp(t, a, 0.6) * (1 - join)}><Wd c={GOLD} s={30}>appearance</Wd></At>
      <At x={960 + 170 * (1 - join) + 60 * (1 - join)} y={430} o={ramp(t, a, 0.6) * (1 - join)}><Wd c={ICE} s={30}>emptiness</Wd></At>
      <At x={960} y={430} o={join}><Wd c={CHALK} s={30}>one</Wd></At>
      <Items items={[
        ["As long as appearance and emptiness seem separate", 960, 680, <Wd c={DIM} s={28}>seen as separate: the meaning is not yet realized</Wd>],
        ["No leap beyond it", 960, 770, <K c={GREEN} s={30}>merely seeing dependent arising undoes the grasping: no leap</K>],
      ]} />
    </AbsoluteFill>
  );
};

const RiceCakeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cake = ramp(t, c("a painted rice cake does not satisfy hunger"), 1.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["And the one who sees it most clearly, for me, is", 960, 110, <Wd c={CHALK} s={44} serif>Dōgen · Gabyō</Wd>],
        ["a painted rice cake does not satisfy hunger", 960, 210, <SK c={DIM} s={28} at="turns it over">"a painted rice cake does not satisfy hunger"</SK>],
      ]} />
      <PictureFrame x={960} y={460} w={420} h={300} o={ramp(t, c("The old saying runs"), 0.6)} />
      <Svg><g opacity={cake}>
        <ellipse cx={960} cy={480} rx={120} ry={46} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} />
        <ellipse cx={960} cy={455} rx={120} ry={46} fill={`${WARM}33`} stroke={WARM} strokeWidth={4} />
      </g></Svg>
      <Items items={[
        ["There is no remedy for satisfying hunger other than painted rice cakes", 960, 670, <Wd c={GOLD} s={30} serif>"no remedy for hunger other than painted rice cakes"</Wd>],
        ["Without painted hunger, you never become a true person", 960, 730, <Wd c={DIM} s={26}>"without painted hunger, you never become a true person"</Wd>],
        ["There is no unpainted cake behind the painting", 1520, 460, <SK c={DIM} s={26} at="No it behind the convention">the "real" cake behind</SK>],
        ["No it behind the convention", 400, 460, <K c={WARM} s={28}>no "it" behind the convention</K>],
        ["It feeds", 960, 810, <Wd c={GREEN} s={44} serif>It feeds.</Wd>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const floor = ramp(t, c("What has gone is only the floor that was never there"), 3);
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, 0.2, 0.8)}><Room p={ramp(t, 0.2, 2.5)} floor={floor} /></At>
      <Items items={[
        ["Nothing has been taken away from the world", 600, 110, <K c={GREEN} s={32}>nothing taken away</K>],
        ["And no new ground has been added", 1320, 110, <K c={GOLD} s={32}>no new ground added</K>],
        ["The apple is still red", 300, 800, <Wd c={ROSE} s={28}>the apple, still red</Wd>],
        ["The car is still dangerous", 740, 800, <Wd c={WARM} s={28}>the car, still dangerous</Wd>],
        ["The cup still holds hot tea", 1180, 800, <Wd c={GOLD} s={28}>the tea, still hot</Wd>],
        ["A friend's voice is still warm", 1620, 800, <Wd c={ICE} s={28}>a friend's voice, still warm</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FinalScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nx = c("Next: The Taste and the Marketplace");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, nx + 5, 1.5) }}>
      <Items items={[
        ["What remains is not a final picture to defend", 960, 240, <Wd c={DIM} s={34}>not a final picture to defend</Wd>],
        ["Each appearance is met as it is", 960, 360, <Wd c={CHALK} s={40} serif>each appearance, met as it is</Wd>],
        ["Releasing itself as it arises", 960, 460, <Wd c={DIM} s={32}>vivid · exact · workable · releasing itself</Wd>],
        ["Light and complete, with nothing to hold, and no one holding", 960, 620, <Wd c={GOLD} s={56} serif>Light and complete,</Wd>],
        ["Light and complete, with nothing to hold, and no one holding", 960, 720, <Wd c={GOLD} s={44} serif>with nothing to hold, and no one holding.</Wd>, { d: 1.6 }],
        ["Next: The Taste and the Marketplace", 960, 820, <Wd c={DIM} s={30}>Next: The Taste and the Marketplace</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["In the last video, the habit's hiding places were found empty", "search", <HidingScene />],
    ["Over the past months my articles have taken up", "dusk", <OpenScene />],
    ["There are two halves to the work", "whole", <HalvesScene />],
    ["Start with negation, and with what it has to face", "search", <UndeniableScene />],
    ["Substantialism is not mainly a theory", "doubt", <GrammarScene />],
    ["Direct experience is never like that", "light", <LightningScene />],
    ["Modern physics points in a similar direction", "deep", <PhysicsScene />],
    ["Leaving this habit is not a", "dusk", <StrandsScene />],
    ["The first strand", "deep", <ExperienceScene />],
    ["The second strand", "search", <ToolsScene />],
    ["The third strand", "jade", <LooseningScene />],
    ["And here is the turn", "whole", <TurnScene />],
    ["Step one. There is no substrate", "search", <StepsScene />],
    ["Step four. Watch the it slip in", "doubt", <ItScene />],
    ["Try it. Hold anything", "light", <TestScene />],
    ["In this view, a phenomenon is a vivid appearing", "light", <FeaturesScene />],
    ["This third point is the one I have had to come back to most", "doubt", <WeakScene />],
    ["Take an apple, tossed from hand to hand", "light", <AppleScene />],
    ["One guardrail stays in place", "deep", <GuardScene />],
    ["The same two halves run through the rest of my recent work", "dusk", <CauseScene />],
    ["Second, continuity", "night", <ContinuityScene />],
    ["Third, the words themselves", "search", <WordsScene />],
    ["If things existed with fixed natures, nothing could ever meet", "jade", <MeetingScene />],
    ["Looking back over all these articles", "whole", <NeverScene />],
    ["Many teachers, rightly, say the eight extremes do not apply", "dusk", <LeapScene />],
    ["Speech was never the problem", "light", <SpeechScene />],
    ["The Buddha said it plainly", "jade", <MilkScene />],
    ["makes the same point as method", "deep", <UnionScene />],
    ["And the one who sees it most clearly, for me, is", "light", <RiceCakeScene />],
    ["So, with both halves in place, what has changed", "whole", <EndScene />],
    ["What remains is not a final picture to defend", "night", <FinalScene />],
  ];
  const moods: Mood[] = [];
  order.forEach(([cue, k], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < order.length ? c(order[i + 1][0], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, , node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
