// Anatta to Emptiness, Bonus: The Body's Own Knowing: Felt Sense, Inner Winds and the Rainbow Body. Episode 98.
// (EBooks Bonus Articles/the-bodys-own-knowing, own voice; companion to EP97 Inner Winds and AA40.)
// Arc: a dog barks, the body jumps first -> four strands for a balanced reading (energy practices, two fives, the
// reports, how the body knows), each with what tips without it -> the point -> survival circuits, the split memory
// study -> felt sense -> narrative and direct feeling come apart -> the brain predicts: direct, not always right ->
// fear unlearned in the body, clinging as a lean -> the somatic knot, untied when the view loosens -> openness and
// room -> the traditions: the mind rides the wind, the yogas, the Taoists, the Buddha -> maps, not anatomies -> what
// is not shown, what is supported -> felt knowing is insight -> two guards -> both ways -> the rainbow body: shown and
// reported -> cautions -> the dog barks again.
// Stance: the body, its energy or its light are never drawn as a ground; "a deeper floor" appears only to be struck.
// Cue phrases avoid respelled names (Dzogchen, Gelug, Kalacakra, Bon, anatta) and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  "A dog barks suddenly behind you", "your shoulders have jumped", "Your breath has stopped", "Your heart is already racing",
  "Something in you knew, before you did",
  "For many years the rainbow body has interested me", "Not dismissing it, and not inflating it",
  "this is not possible until four things are sorted out", "Each one has its own video", "the picture tips to one side",
  "The first is the energy practices of the different traditions", "Their method is shared", "Their view is not",
  "the rainbow body looks like an energy achievement", "And wind, or energy, quietly becomes a hidden stuff underneath everything",
  "But the winds are not a substrate", "Working with them can loosen what the body holds",
  "What frees is seeing through the habit of reification",
  "The second is the five elements", "Tibet keeps two different fives side by side", "One came from China",
  "used for the calendar and divination", "The other came from India", "read as qualities", "Hardness", "Cohesion", "Warmth",
  "Motion", "Room", "The rainbow body belongs to the Indian five", "the five lights get mixed with Chinese phases",
  "Or the elements are heard as energy frozen into matter", "Nothing freezes", "The elements name how appearing is felt and taken",
  "The third is the reports themselves", "how strong is the evidence", "each tell it differently",
  "The modern cases rest on the word of those who were there", "None has been checked by anyone independent",
  "swallowed whole as proof", "or thrown out as myth", "the rainbow body is not the measure of insight",
  "The fourth is how the body knows", "This is the one I have not yet set out", "read in one of two wrong ways",
  "Either everything is in the head", "becomes the ground of everything", "point between the two",
  "The body takes part in knowing and in release", "But it is not a deeper floor",
  "Put the four together", "Not dismissing", "Not inflating", "The method shared, the view not",
  "The elements as qualities, not a frozen stuff", "The reports as reports", "where the knot is held, and where it comes undone",
  "Its point is simple", "Knowing is not only analysis", "It is not only the taking apart of concepts",
  "the felt sense of presence in the body", "fear, clinging, openness and spaciousness are often understood more directly",
  "the old traditions of inner winds",
  "Let me start with the body that jumps", "Much of our knowing happens before we think", "circuits that detect threat",
  "the heart, the hormones and the muscles", "They work faster than conscious thought",
  "The body's learning can even be split off from the mind's memory", "a man with damage to his memory centre",
  "Yet his body still gave the learned response", "Another man, with damage to the brain's alarm centre",
  "remembered the task clearly", "Yet his body had learned nothing",
  "So a person can know perfectly well that they are safe", "and still find their body braced",
  "Much of it is done by the body, and thought arrives later",
  "There is a quieter side of this too", "called it the felt sense", "It is not a single sensation",
  "that can be noticed before it has words", "a word or an image often comes that fits", "And the body eases as it does",
  "found something striking", "were not those who talked best about their problems",
  "They were the ones who could sense this bodily feel, and stay with it", "this knowing is the deciding one",
  "Brain imaging shows the same split", "they thought about their traits and their story",
  "they simply felt what was present in the body", "The two used different networks in the brain", "the two were tightly bound",
  "Every sensation set off a judgment about me", "After eight weeks of mindfulness training, they came apart",
  "A sensation could be known directly",
  "Reading that, I was reminded", "In the seen, only the seen", "In the felt, only the felt",
  "But there is a catch", "the brain does not simply read the body", "It predicts it",
  "the gap between what was expected and what is found", "This explains why felt knowing is direct",
  "And it explains why felt knowing can be wrong", "an ordinary heartbeat is felt as a threat", "a danger that is not there",
  "Directness is no guarantee",
  "Now fear", "do not argue it away", "until it learns from experience that the threat does not come", "not a better argument",
  "In small, paced steps",
  "Clinging is the same", "It is a lean of the body toward it", "A tightening when it is threatened", "A held breath when it is lost",
  "You can feel it before you can say it",
  "I have written about this before", "It lives in the muscles, the diaphragm and the breath", "A slight tightening behind the eyes",
  "A held, high chest", "A guarded belly", "A subtle leaning forward into the next moment", "as if you had to hold the world together",
  "When the view loosens, that bracing loosens with it", "the knot in the body uncoiled on its own", "I was not forcing anything",
  "Openness and spaciousness are known the same way", "The chest unclenches", "The breath drops", "The edges soften", "There is room",
  "Here the science has little to say yet", "In one Tibetan teaching", "are not fought or argued with",
  "They are met in stillness, silence and spaciousness", "That is a report of their tradition", "It matches what I have found",
  "So the old traditions saw this too", "Tibetan medicine says the mind rides the wind", "Causality runs both ways",
  "Desire disturbs the wind", "it disturbs the mind", "Racing thoughts", "Frightening dreams",
  "since no argument calms a bolting horse", "Warm food", "Oil massage", "Warm compresses", "A calmer life",
  "The Tibetan yogas of breath and movement work the same way", "In one trial at a large cancer centre",
  "slept with fewer disturbances", "They were not, though, less tired overall",
  "The Taoists, too", "must be cultivated together", "stays stuck in empty stillness",
  "And the Buddha refused to trace every bodily feeling to past action", "He named bile, phlegm and wind",
  "And he taught mindfulness of the breath",
  "These are not anatomies", "not a stuff called energy", "are maps of how breath, feeling and attention move together",
  "drawn from the inside", "the traditions are accurate about what they map",
  "what the research does not show", "trauma is stored in muscle or connective tissue", "That is a popular story, not a finding",
  "is strongly disputed by the scientists who study it", "promising, but not yet proven",
  "What is well supported is the main point", "The body knows before thought", "The felt sense guides change",
  "Fear is unlearned through bodily experience", "run on different paths",
  "So where do I stand", "Felt knowing is a kind of insight, not only energy work", "that seeing is itself insight",
  "It does not wait for a concept",
  "Contemplative scientists draw the line in the same place", "They sort meditation into three families",
  "The family of insight practice aims at what they call reification", "its method is direct inquiry into experience, not argument",
  "is a seeing, not only a reasoning",
  "But two guards", "This felt knowing is more immediate", "It is not more fundamental",
  "But it is not a deeper floor beneath experience", "it is as empty as what it knows", "To make it a ground would bring the substrate back",
  "And direct does not mean right", "can be a habit, not a perception", "So felt knowing needs refining too",
  "The view tells the body what it need no longer brace against", "The body tells the view whether it has truly landed",
  "Analysis without the body stays in the head", "Felt knowing without the view can settle the body",
  "The street between insight and the body runs both ways",
  "And this is where it meets the rainbow body", "The body is not outside realization",
  "held in the body, felt there, and released there", "of the body itself being known without grasping",
  "What is genuinely shown", "What is not shown is that a corpse turns into light", "I hold the first with confidence",
  "The second, I hold as a report",
  "Two cautions before I close", "This is not treatment", "a help, not a cure", "And do not force",
  "Pleasant openness in the body is not awakening", "Insight is measured by the freedom of the mind",
  "So, the dog barks again", "The shoulders jump", "The breath stops", "This time, notice it", "Where it is held",
  "How it feels, before it has a name", "whether anyone is found, holding it", "The body knew first",
  "Let it also be where the knot comes undone",
];

const M = {
  night: { a: "rgba(14,14,46,0.75)", b: "rgba(40,30,90,0.5)", c: "rgba(12,22,48,0.5)" },
  indigo: { a: "rgba(40,36,120,0.55)", b: "rgba(170,125,50,0.36)", c: "rgba(30,60,120,0.32)" },
  gold: { a: "rgba(190,140,55,0.48)", b: "rgba(70,50,150,0.44)", c: "rgba(40,90,130,0.3)" },
  deep: { a: "rgba(28,30,100,0.58)", b: "rgba(100,60,150,0.42)", c: "rgba(30,80,110,0.3)" },
  ember: { a: "rgba(120,60,50,0.42)", b: "rgba(55,40,120,0.5)", c: "rgba(160,110,45,0.3)" },
  jade: { a: "rgba(40,105,95,0.44)", b: "rgba(160,120,50,0.36)", c: "rgba(45,50,125,0.36)" },
};

// ---------------------------------------------------------------- helpers (shared with AA40)
const LIGHTS = [GOLD, ICE, WARM, TEAL, VIOLET];

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
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
/** A chip struck through at `strikeAt`: only for what is never found or does not hold. */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; sub2?: string; dashed?: boolean; ts?: number }> =
  ({ c, w = 460, title, sub, sub2, dashed, ts = 36 }) => (
    <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px ${dashed ? "dashed" : "solid"} ${c}`, background: "rgba(10,12,30,0.72)",
      boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
      <Wd c={c} s={ts} serif>{title}</Wd>
      {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
      {sub2 ? <div style={{ marginTop: 4 }}><Wd c={CHALK} s={24}>{sub2}</Wd></div> : null}
    </div>
  );
/** A scene title at the top, held until `until`. */
const Title: React.FC<{ text: string; c?: string; until?: string; at?: number }> = ({ text, c = CHALK, until, at = 0.2 }) => {
  const { t } = useT();
  const cue = useCue();
  const out = until ? 1 - ramp(t, cue(until), 0.4) : 1;
  return <At x={960} y={100} o={ramp(t, at, 0.6) * out}><Wd c={c} s={44} serif>{text}</Wd></At>;
};
/** Rings spreading from a point: a sound, clear as it comes. */
const SoundRings: React.FC<{ at: number; color: string; n?: number }> = ({ at, color, n = 3 }) => {
  const { t } = useT();
  return (
    <svg width={360} height={360} viewBox="-180 -180 360 360" style={{ overflow: "visible" }}>
      {Array.from({ length: n }).map((_, i) => {
        const p = Math.max(0, Math.min(1, ((t - at - i * 0.35) % 2.4) / 2.4));
        const on = t > at + i * 0.35 ? 1 : 0;
        return <circle key={i} r={20 + p * 150} fill="none" stroke={color} strokeWidth={4} opacity={on * (1 - p)}
          style={{ filter: `drop-shadow(0 0 8px ${color})` }} />;
      })}
      <circle r={12} fill={color} opacity={t > at ? 1 : 0} style={{ filter: `drop-shadow(0 0 12px ${color})` }} />
    </svg>
  );
};
/** A lamp: a flame on a small dish. */
const Lamp: React.FC<{ c?: string; flame?: number; size?: number }> = ({ c = GOLD, flame = 1, size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" style={{ overflow: "visible" }}>
    <path d="M20 96 C40 124 100 124 120 96 Z" fill="rgba(228,194,122,0.25)" stroke={c} strokeWidth={4} />
    <path d="M70 92 C52 70 62 46 70 26 C78 46 88 70 70 92 Z" fill={c} opacity={0.75 * flame}
      style={{ filter: `drop-shadow(0 0 ${14 * flame}px ${c})` }} />
  </svg>
);
const Apple: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
    <path d="M100 58 C70 30 22 44 24 98 C26 150 62 186 100 172 C138 186 174 150 176 98 C178 44 130 30 100 58 Z"
      fill="rgba(226,70,70,0.55)" stroke="#FF6B6B" strokeWidth={5} style={{ filter: "drop-shadow(0 0 14px #FF6B6B)" }} />
    <path d="M100 58 C100 44 104 30 112 20" stroke="#B08850" strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M108 34 C124 18 146 20 154 28 C140 40 122 42 108 34 Z" fill="rgba(143,212,154,0.5)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
const Figure: React.FC<{ color?: string; p?: number }> = ({ color = CHALK, p = 1 }) => (
  <svg width={260} height={300} viewBox="0 0 260 300" style={{ overflow: "visible" }}>
    <DrawPath d="M130 30 a34 34 0 1 1 -0.1 0 Z" p={p} color={color} width={5} len={240} />
    <DrawPath d="M130 98 C88 104 76 150 82 200 M130 98 C172 104 184 150 178 200" p={p} color={color} width={5} len={400} />
    <DrawPath d="M40 250 C70 214 110 210 130 214 C150 210 190 214 220 250 C180 262 80 262 40 250 Z" p={p} color={color} width={5} len={700} />
  </svg>
);
const Arcs: React.FC<{ p: number; w?: number }> = ({ p, w = 520 }) => (
  <svg width={w} height={w / 2} viewBox="0 0 520 260" style={{ overflow: "visible" }}>
    {LIGHTS.map((col, i) => (
      <DrawPath key={i} d={`M${40 + i * 22} 250 A${220 - i * 22} ${220 - i * 22} 0 0 1 ${480 - i * 22} 250`} p={p} color={col} width={7} len={760} glow />
    ))}
  </svg>
);
const House: React.FC<{ p: number }> = ({ p }) => (
  <svg width={520} height={380} viewBox="0 0 520 380" style={{ overflow: "visible" }}>
    <DrawPath d="M40 160 L260 30 L480 160" p={p} color={CHALK} width={5} len={520} />
    <DrawPath d="M80 150 L80 360 L440 360 L440 150" p={p} color={CHALK} width={5} len={780} />
  </svg>
);
/** Five small lights in a row. */
const FiveLights: React.FC<{ o?: number; r?: number }> = ({ o = 1, r = 26 }) => (
  <svg width={560} height={120} viewBox="0 0 560 120" style={{ overflow: "visible" }}>
    {LIGHTS.map((col, i) => <circle key={i} cx={60 + i * 110} cy={60} r={r} fill={`${col}33`} stroke={col} strokeWidth={4} opacity={o}
      style={{ filter: `drop-shadow(0 0 10px ${col})` }} />)}
  </svg>
);
/** A knot of lines, tied (p=0) or untied (p=1). */
const Knot: React.FC<{ untie: number; c?: string }> = ({ untie, c = WARM }) => (
  <svg width={420} height={220} viewBox="0 0 420 220" style={{ overflow: "visible" }}>
    {[0, 1, 2, 3].map((i) => {
      const y0 = 40 + i * 46;
      const pull = 1 - untie;
      return <path key={i} d={`M20 ${y0} C140 ${y0 + (110 - y0) * pull} 280 ${y0 + (110 - y0) * pull} 400 ${y0}`} fill="none"
        stroke={LIGHTS[i]} strokeWidth={5} opacity={0.9} style={{ filter: `drop-shadow(0 0 6px ${LIGHTS[i]})` }} />;
    })}
    <circle cx={210} cy={110} r={34 * (1 - untie)} fill="none" stroke={c} strokeWidth={6} opacity={1 - untie} />
  </svg>
);


// ---------------------------------------------------------------- extra parts
const Arrow: React.FC<{ w?: number; c?: string; both?: boolean; p?: number }> = ({ w = 300, c = CHALK, both, p = 1 }) => (
  <svg width={w} height={40} viewBox={`0 0 ${w} 40`} style={{ overflow: "visible" }}>
    <DrawPath d={`M10 20 L${w - 10} 20`} p={p} color={c} width={4} len={w} />
    <path d={`M${w - 26} 8 L${w - 8} 20 L${w - 26} 32`} fill="none" stroke={c} strokeWidth={4} opacity={p} />
    {both ? <path d="M26 8 L8 20 L26 32" fill="none" stroke={c} strokeWidth={4} opacity={p} /> : null}
  </svg>
);
/** Two boxes joined by a line that breaks apart at `split` (0..1). */
const Coupled: React.FC<{ split: number }> = ({ split }) => (
  <svg width={360} height={40} viewBox="0 0 360 40" style={{ overflow: "visible" }}>
    <path d={`M0 20 L${170 - 60 * split} 20`} stroke={WARM} strokeWidth={5} />
    <path d={`M${190 + 60 * split} 20 L360 20`} stroke={WARM} strokeWidth={5} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const DogScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const k = "Something in you knew, before you did";
  return (
    <AbsoluteFill>
      <At x={1380} y={420}><SoundRings at={c("A dog barks suddenly behind you")} color={WARM} /></At>
      <At x={760} y={480} o={ramp(t, 0.3, 0.8)}><Figure p={ramp(t, 0.3, 1.4)} color={CHALK} /></At>
      <Items items={[
        ["A dog barks suddenly behind you", 1380, 640, <Wd c={WARM} s={32}>a sudden bark</Wd>],
        ["your shoulders have jumped", 420, 300, <K c={CHALK} s={26}>shoulders jump</K>],
        ["Your breath has stopped", 420, 400, <K c={CHALK} s={26}>breath stops</K>],
        ["Your heart is already racing", 420, 500, <K c={CHALK} s={26}>heart racing</K>],
        [k, 960, 780, <Wd c={GOLD} s={44} serif>something in you knew, before you did</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const StrandsScene: React.FC = () => {
  const c = useCue();
  const end = "The first is the energy practices of the different traditions";
  return (
    <AbsoluteFill>
      <Title text="a balanced reading" c={GOLD} until={end} />
      <Items items={[
        ["Not dismissing it, and not inflating it", 720, 230, <SK c={DIM} s={28} strikeAt={c("Not dismissing it, and not inflating it", 0.4)}>dismissing it</SK>, { until: end }],
        ["Not dismissing it, and not inflating it", 1200, 230, <SK c={DIM} s={28} strikeAt={c("Not dismissing it, and not inflating it", 1.4)}>inflating it</SK>, { d: 1, until: end }],
        ["this is not possible until four things are sorted out", 540, 400, <Box c={ICE} w={420} title="1 · energy practices" ts={30} />, { pop: true, until: end }],
        ["this is not possible until four things are sorted out", 1380, 400, <Box c={VIOLET} w={420} title="2 · the five elements" ts={30} />, { d: 0.5, pop: true, until: end }],
        ["this is not possible until four things are sorted out", 540, 600, <Box c={WARM} w={420} title="3 · the reports" ts={30} />, { d: 1, pop: true, until: end }],
        ["this is not possible until four things are sorted out", 1380, 600, <Box c={TEAL} w={420} title="4 · how the body knows" ts={30} />, { d: 1.5, pop: true, until: end }],
        ["Each one has its own video", 960, 500, <Wd c={CHALK} s={26}>▶ a video each</Wd>, { until: end }],
        ["the picture tips to one side", 960, 780, <Wd c={WARM} s={34} serif>leave one out, and the picture tips</Wd>, { until: end }],
      ]} />
    </AbsoluteFill>
  );
};

const EnergyScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="1 · energy practices" c={ICE} />
      <Items items={[
        ["The first is the energy practices of the different traditions", 960, 210, <Wd c={CHALK} s={28}>Taoist inner alchemy · Indian yoga · Tibetan yogas</Wd>],
        ["Their method is shared", 700, 320, <K c={TEAL} s={30}>the method: shared</K>],
        ["Their view is not", 1220, 320, <K c={WARM} s={30}>the view: not</K>],
        ["the rainbow body looks like an energy achievement", 960, 440, <SK c={DIM} s={28} strikeAt={c("the rainbow body looks like an energy achievement", 2.5)}>steering the winds turns a body into light</SK>],
        ["And wind, or energy, quietly becomes a hidden stuff underneath everything", 960, 550, <SK c={DIM} s={28} strikeAt={c("But the winds are not a substrate", 0.2)}>wind or energy as a hidden stuff underneath</SK>],
        ["Working with them can loosen what the body holds", 960, 660, <K c={CHALK} s={28}>the winds can loosen what the body holds</K>],
        ["What frees is seeing through the habit of reification", 960, 780, <Wd c={GOLD} s={36} serif>what frees: seeing through reification</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ElementsScene: React.FC = () => {
  const c = useCue();
  const q = ["Hardness", "Cohesion", "Warmth", "Motion", "Room"];
  const mix = "the five lights get mixed with Chinese phases";
  return (
    <AbsoluteFill>
      <Title text="2 · two fives in Tibet" c={VIOLET} />
      <Items items={[
        ["One came from China", 560, 250, <Box c={DIM} w={480} title="from China" sub="wood · fire · earth · metal · water" ts={30} />, { until: mix, o: 0.9 }],
        ["used for the calendar and divination", 560, 400, <Wd c={DIM} s={26}>the calendar · divination</Wd>, { until: mix }],
        ["The other came from India", 1360, 250, <Box c={VIOLET} w={480} title="from India" sub="earth · water · fire · wind · space" ts={30} />],
        ["read as qualities", 1360, 360, <Wd c={CHALK} s={26}>read as qualities</Wd>],
        ...q.map((w, i) => [w, 1360, 420 + i * 56, <K c={LIGHTS[i]} s={24}>{w.toLowerCase()}</K>] as It),
        ["The rainbow body belongs to the Indian five", 1360, 720, <Wd c={GOLD} s={30} serif>the rainbow body: the Indian five</Wd>],
        [mix, 560, 300, <SK c={DIM} s={26} strikeAt={c(mix, 1.5)}>mixed with Chinese phases or physics of light</SK>],
        ["Or the elements are heard as energy frozen into matter", 560, 420, <SK c={DIM} s={26} strikeAt={c("Nothing freezes", 0)}>energy frozen into matter</SK>],
        ["Nothing freezes", 560, 540, <Wd c={TEAL} s={40} serif>nothing freezes</Wd>],
        ["The elements name how appearing is felt and taken", 560, 650, <K c={CHALK} s={26}>how appearing is felt and taken</K>],
      ]} />
    </AbsoluteFill>
  );
};

const ReportsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="3 · the reports" c={WARM} />
      <At x={960} y={250} o={0.55}><Arcs p={1} w={420} /></At>
      <Items items={[
        ["how strong is the evidence", 960, 210, <Wd c={CHALK} s={30} serif>what is claimed? how strong is the evidence?</Wd>],
        ["each tell it differently", 960, 330, <Wd c={CHALK} s={26}>Dzogchen · Gelug · Kālacakra · Bön · Taoist: each tells it differently</Wd>],
        ["The modern cases rest on the word of those who were there", 960, 430, <K c={CHALK} s={26}>the modern cases: the word of those who were there</K>],
        ["None has been checked by anyone independent", 960, 520, <K c={WARM} s={28}>none checked by anyone independent</K>],
        ["swallowed whole as proof", 640, 620, <SK c={DIM} s={26} strikeAt={c("or thrown out as myth", 0.6)}>swallowed whole as proof</SK>],
        ["or thrown out as myth", 1280, 620, <SK c={DIM} s={26} strikeAt={c("or thrown out as myth", 1.2)}>thrown out as myth</SK>],
        ["the rainbow body is not the measure of insight", 960, 760, <Wd c={GOLD} s={34} serif>not the measure of insight</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FourthScene: React.FC = () => {
  const c = useCue();
  const tog = "Put the four together";
  return (
    <AbsoluteFill>
      <Title text="4 · how the body knows" c={TEAL} until={tog} />
      <Items items={[
        ["This is the one I have not yet set out", 960, 210, <Wd c={CHALK} s={28}>this video</Wd>, { until: tog }],
        ["read in one of two wrong ways", 960, 300, <Wd c={WARM} s={28}>two wrong readings</Wd>, { until: tog }],
        ["Either everything is in the head", 560, 400, <SK c={DIM} s={26} strikeAt={c("point between the two", 0)}>all in the head · the body plays no part</SK>, { until: tog }],
        ["becomes the ground of everything", 1360, 400, <SK c={DIM} s={26} strikeAt={c("point between the two", 0.4)}>the body, its energy or light as the ground</SK>, { until: tog }],
        ["point between the two", 960, 520, <Wd c={CHALK} s={28}>research and practice: between the two</Wd>, { until: tog }],
        ["The body takes part in knowing and in release", 960, 620, <K c={TEAL} s={30}>the body takes part in knowing and in release</K>, { until: tog }],
        ["But it is not a deeper floor", 960, 730, <SK c={DIM} s={28} strikeAt={c("But it is not a deeper floor", 0.6)}>a deeper floor</SK>, { until: tog }],
        [tog, 960, 160, <Wd c={GOLD} s={40} serif>the four together</Wd>],
        ["Not dismissing", 760, 260, <SK c={DIM} s={26} strikeAt={c("Not dismissing", 0.3)}>dismissing</SK>],
        ["Not inflating", 1160, 260, <SK c={DIM} s={26} strikeAt={c("Not inflating", 0.3)}>inflating</SK>],
        ["The method shared, the view not", 960, 380, <K c={ICE} s={28}>1 · the method shared, the view not</K>],
        ["The elements as qualities, not a frozen stuff", 960, 480, <K c={VIOLET} s={28}>2 · the elements as qualities</K>],
        ["The reports as reports", 960, 580, <K c={WARM} s={28}>3 · the reports as reports</K>],
        ["where the knot is held, and where it comes undone", 960, 690, <K c={TEAL} s={28}>4 · the body: where the knot is held, and comes undone</K>],
      ]} />
    </AbsoluteFill>
  );
};

const PointScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="the point" />
      <Items items={[
        ["Knowing is not only analysis", 960, 240, <SK c={DIM} s={28} strikeAt={c("It is not only the taking apart of concepts", 1.2)}>knowing = analysis only</SK>],
        ["the felt sense of presence in the body", 960, 370, <Wd c={TEAL} s={38} serif>a more immediate knowing: the felt sense</Wd>],
        ["fear, clinging, openness and spaciousness are often understood more directly", 960, 490, <K c={CHALK} s={26}>fear · clinging · openness · spaciousness</K>],
        ["fear, clinging, openness and spaciousness are often understood more directly", 960, 580, <Wd c={CHALK} s={26}>often understood more directly than through thought alone</Wd>, { d: 2 }],
        ["the old traditions of inner winds", 960, 720, <Wd c={GOLD} s={32} serif>the inner winds: long recognitions of this</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CircuitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const study = "The body's learning can even be split off from the mind's memory";
  const safe = "So a person can know perfectly well that they are safe";
  return (
    <AbsoluteFill>
      <Title text="before thought" c={WARM} until={study} />
      <Items items={[
        ["Much of our knowing happens before we think", 960, 240, <Wd c={CHALK} s={34} serif>much of our knowing happens before we think</Wd>, { until: study }],
        ["circuits that detect threat", 960, 380, <K c={WARM} s={28}>deep circuits detect threat</K>, { until: study }],
        ["the heart, the hormones and the muscles", 960, 480, <Wd c={CHALK} s={28}>→ heart · hormones · muscles</Wd>, { until: study }],
        ["They work faster than conscious thought", 960, 600, <K c={TEAL} s={28}>faster than thought, largely beneath it</K>, { until: study }],
        [study, 960, 130, <Wd c={CHALK} s={36} serif>the body's learning, split from memory</Wd>, { until: safe }],
        ["a man with damage to his memory centre", 560, 320, <Box c={ICE} w={460} title="memory centre damaged" ts={28} />, { until: safe }],
        ["a man with damage to his memory centre", 560, 450, <SK c={DIM} s={24} strikeAt={c("a man with damage to his memory centre", 2.5)}>remembers the task</SK>, { d: 1.5, until: safe }],
        ["Yet his body still gave the learned response", 560, 540, <K c={TEAL} s={24}>body: learned ✓</K>, { until: safe }],
        ["Another man, with damage to the brain's alarm centre", 1360, 320, <Box c={WARM} w={460} title="alarm centre damaged" ts={28} />, { until: safe }],
        ["remembered the task clearly", 1360, 450, <K c={TEAL} s={24}>remembers the task ✓</K>, { until: safe }],
        ["Yet his body had learned nothing", 1360, 540, <SK c={DIM} s={24} strikeAt={c("Yet his body had learned nothing", 0.6)}>body: learned</SK>, { until: safe }],
        [safe, 600, 300, <K c={TEAL} s={30}>knows: I am safe</K>],
        ["and still find their body braced", 1320, 300, <K c={WARM} s={30}>body: braced</K>],
        ["Much of it is done by the body, and thought arrives later", 960, 500, <Wd c={GOLD} s={36} serif>the body first · thought arrives later</Wd>],
      ]} />
      <At x={960} y={300} o={ramp(t, c("and still find their body braced"), 0.5)}><Wd c={DIM} s={40}>≠</Wd></At>
    </AbsoluteFill>
  );
};

const FeltScene: React.FC = () => {
  const c = useCue();
  const g = "found something striking";
  return (
    <AbsoluteFill>
      <Title text="the felt sense" c={TEAL} />
      <Items items={[
        ["called it the felt sense", 960, 200, <Wd c={CHALK} s={28}>Eugene Gendlin</Wd>, { until: g }],
        ["It is not a single sensation", 960, 300, <SK c={DIM} s={26} strikeAt={c("It is not a single sensation", 1)}>a single sensation: an itch, warmth</SK>, { until: g }],
        ["It is not a single sensation", 960, 410, <Wd c={TEAL} s={34} serif>a vague sense of the whole situation, all about this</Wd>, { d: 3, until: g }],
        ["that can be noticed before it has words", 960, 510, <K c={CHALK} s={26}>noticed before it has words</K>, { until: g }],
        ["a word or an image often comes that fits", 960, 610, <K c={GOLD} s={26}>attend · wait · a word that fits</K>, { until: g }],
        ["And the body eases as it does", 960, 710, <Wd c={TEAL} s={30}>and the body eases</Wd>, { until: g }],
        [g, 960, 220, <Wd c={CHALK} s={32} serif>who gained most from therapy?</Wd>],
        ["were not those who talked best about their problems", 960, 360, <SK c={DIM} s={28} strikeAt={c("were not those who talked best about their problems", 1.5)}>those who talked best</SK>],
        ["They were the ones who could sense this bodily feel, and stay with it", 960, 480, <K c={TEAL} s={30}>those who could sense the bodily feel, and stay with it</K>],
        ["this knowing is the deciding one", 960, 620, <Wd c={GOLD} s={34} serif>sometimes, the deciding knowing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SplitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const split = ramp(t, c("After eight weeks of mindfulness training, they came apart"), 1.5);
  const bound = ramp(t, c("the two were tightly bound"), 0.5);
  const seen = "Reading that, I was reminded";
  const o = 1 - ramp(t, c(seen), 0.4);
  return (
    <AbsoluteFill>
      <Title text="knowing and telling" c={GOLD} until={seen} />
      <At x={960} y={340} o={bound * o}><Coupled split={split} /></At>
      <Items items={[
        ["they thought about their traits and their story", 560, 340, <Box c={WARM} w={420} title="the story" sub="traits · me · over time" ts={30} />, { until: seen }],
        ["they simply felt what was present in the body", 1360, 340, <Box c={TEAL} w={420} title="direct feeling" sub="what is present, no story" ts={30} />, { until: seen }],
        ["The two used different networks in the brain", 960, 500, <Wd c={CHALK} s={28}>two different networks</Wd>, { until: seen }],
        ["Every sensation set off a judgment about me", 960, 580, <K c={WARM} s={26}>new to meditation: every sensation → a judgment about me</K>, { until: seen }],
        ["After eight weeks of mindfulness training, they came apart", 960, 670, <K c={TEAL} s={26}>after eight weeks: they come apart</K>, { until: seen }],
        ["A sensation could be known directly", 960, 770, <Wd c={GOLD} s={32} serif>a sensation, known directly, no story attached</Wd>, { until: seen }],
        ["In the seen, only the seen", 960, 380, <Wd c={CHALK} s={48} serif>in the seen, only the seen</Wd>],
        ["In the felt, only the felt", 960, 520, <Wd c={GOLD} s={48} serif>in the felt, only the felt</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PredictScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="a catch" c={WARM} />
      <Items items={[
        ["the brain does not simply read the body", 960, 210, <SK c={DIM} s={28} strikeAt={c("It predicts it", 0)}>the brain reads the body</SK>],
        ["It predicts it", 960, 300, <Wd c={CHALK} s={36} serif>it predicts it</Wd>],
        ["the gap between what was expected and what is found", 560, 420, <K c={ICE} s={26}>expected</K>],
        ["the gap between what was expected and what is found", 960, 420, <Wd c={GOLD} s={28}>↔ the gap ↔</Wd>, { d: 1 }],
        ["the gap between what was expected and what is found", 1360, 420, <K c={TEAL} s={26}>found</K>, { d: 2 }],
        ["This explains why felt knowing is direct", 620, 550, <K c={TEAL} s={28}>so: direct</K>],
        ["And it explains why felt knowing can be wrong", 1300, 550, <K c={WARM} s={28}>so: can be wrong</K>],
        ["an ordinary heartbeat is felt as a threat", 960, 650, <Wd c={CHALK} s={28}>set to danger: a heartbeat felt as a threat</Wd>],
        ["Directness is no guarantee", 960, 770, <Wd c={GOLD} s={40} serif>directness is no guarantee</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FearScene: React.FC = () => {
  const c = useCue();
  const cl = "Clinging is the same";
  return (
    <AbsoluteFill>
      <Title text="fear" c={WARM} until={cl} />
      <Items items={[
        ["do not argue it away", 960, 260, <SK c={DIM} s={28} strikeAt={c("do not argue it away", 0.6)}>argued away</SK>, { until: cl }],
        ["until it learns from experience that the threat does not come", 960, 380, <K c={TEAL} s={28}>the body meets it, in safety, and learns</K>, { until: cl }],
        ["not a better argument", 960, 490, <Wd c={CHALK} s={30} serif>new learning in the body</Wd>, { until: cl }],
        ["In small, paced steps", 960, 600, <K c={GOLD} s={26}>gently: small, paced steps</K>, { until: cl }],
        [cl, 960, 100, <Wd c={CHALK} s={44} serif>clinging</Wd>],
        ["It is a lean of the body toward it", 960, 260, <K c={WARM} s={28}>a lean of the body toward it</K>],
        ["A tightening when it is threatened", 960, 360, <K c={WARM} s={28}>a tightening when threatened</K>],
        ["A held breath when it is lost", 960, 460, <K c={WARM} s={28}>a held breath when lost</K>],
        ["You can feel it before you can say it", 960, 620, <Wd c={GOLD} s={36} serif>felt before it is said</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const KnotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const untie = ramp(t, c("When the view loosens, that bracing loosens with it"), 3);
  return (
    <AbsoluteFill>
      <Title text="the knot in the body" c={WARM} />
      <At x={560} y={480} o={ramp(t, 0.3, 0.8)}><Figure p={ramp(t, 0.3, 1.4)} color={CHALK} /></At>
      <At x={560} y={470} s={0.42}><Knot untie={untie} /></At>
      <Items items={[
        ["It lives in the muscles, the diaphragm and the breath", 1300, 220, <Wd c={CHALK} s={28}>not only in ideas: muscles · diaphragm · breath</Wd>],
        ["A slight tightening behind the eyes", 1300, 310, <K c={DIM} s={24}>tightening behind the eyes</K>],
        ["A held, high chest", 1300, 380, <K c={DIM} s={24}>a held, high chest</K>],
        ["A guarded belly", 1300, 450, <K c={DIM} s={24}>a guarded belly</K>],
        ["A subtle leaning forward into the next moment", 1300, 520, <K c={DIM} s={24}>leaning into the next moment</K>],
        ["as if you had to hold the world together", 1300, 600, <Wd c={WARM} s={28} serif>as if holding the world together</Wd>],
        ["When the view loosens, that bracing loosens with it", 960, 700, <Wd c={TEAL} s={32} serif>the view loosens · the bracing loosens</Wd>],
        ["I was not forcing anything", 960, 790, <SK c={DIM} s={26} strikeAt={c("I was not forcing anything", 0.3)}>forcing</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const RoomScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sci = "Here the science has little to say yet";
  const r = ramp(t, c("There is room"), 2);
  return (
    <AbsoluteFill>
      <Title text="openness, spaciousness" c={TEAL} />
      <At x={960} y={440} o={r * (1 - ramp(t, c(sci), 0.5))}>
        <svg width={600} height={400} viewBox="-300 -200 600 400" style={{ overflow: "visible" }}>
          {[0, 1, 2].map((i) => <circle key={i} r={60 + r * (60 + i * 60)} fill="none" stroke={TEAL} strokeWidth={3} opacity={0.5 - i * 0.12} />)}
        </svg>
      </At>
      <Items items={[
        ["The chest unclenches", 560, 260, <K c={CHALK} s={26}>the chest unclenches</K>, { until: sci }],
        ["The breath drops", 1360, 260, <K c={CHALK} s={26}>the breath drops</K>, { until: sci }],
        ["The edges soften", 960, 640, <K c={CHALK} s={26}>the edges soften</K>, { until: sci }],
        ["There is room", 960, 440, <Wd c={TEAL} s={48} serif>there is room</Wd>, { until: sci }],
        [sci, 960, 230, <Wd c={CHALK} s={30}>science: little to say yet · the traditions: mapped it fully</Wd>],
        ["In one Tibetan teaching", 960, 330, <Wd c={DIM} s={26}>a Bön teaching (Tenzin Wangyal, Anne Klein)</Wd>],
        ["are not fought or argued with", 960, 430, <SK c={DIM} s={26} strikeAt={c("are not fought or argued with", 0.6)}>fight it · argue with it</SK>],
        ["They are met in stillness, silence and spaciousness", 960, 540, <K c={TEAL} s={30}>met in stillness · silence · spaciousness</K>],
        ["That is a report of their tradition", 960, 650, <Wd c={CHALK} s={26}>their report</Wd>],
        ["It matches what I have found", 960, 740, <Wd c={GOLD} s={32} serif>it matches what I have found</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const WindScene: React.FC = () => {
  const c = useCue();
  const yog = "The Tibetan yogas of breath and movement work the same way";
  return (
    <AbsoluteFill>
      <Title text="the mind rides the wind" c={GOLD} until={yog} />
      <Items items={[
        ["Tibetan medicine says the mind rides the wind", 960, 200, <Wd c={CHALK} s={28}>Tibetan medicine: a rider on a horse</Wd>, { until: yog }],
        ["Causality runs both ways", 960, 290, <Arrow w={320} c={GOLD} both />, { until: yog }],
        ["Desire disturbs the wind", 600, 290, <K c={ICE} s={26}>mind → wind</K>, { until: yog }],
        ["it disturbs the mind", 1320, 290, <K c={WARM} s={26}>wind → mind</K>, { until: yog }],
        ["Racing thoughts", 960, 390, <Wd c={WARM} s={26}>racing thoughts · panic · poor sleep · frightening dreams</Wd>, { until: yog }],
        ["since no argument calms a bolting horse", 960, 490, <SK c={DIM} s={28} strikeAt={c("since no argument calms a bolting horse", 1.4)}>an argument calms the horse</SK>, { until: yog }],
        ["Warm food", 600, 600, <K c={GOLD} s={26}>warm food</K>, { until: yog }],
        ["Oil massage", 960, 600, <K c={GOLD} s={26}>oil massage</K>, { until: yog }],
        ["Warm compresses", 1320, 600, <K c={GOLD} s={26}>warm compresses</K>, { until: yog }],
        ["A calmer life", 960, 700, <Wd c={TEAL} s={30} serif>a calmer life</Wd>, { until: yog }],
        [yog, 960, 160, <Wd c={CHALK} s={34} serif>breath and movement settle the winds</Wd>],
        ["In one trial at a large cancer centre", 960, 260, <Wd c={DIM} s={26}>a trial: women having chemotherapy</Wd>],
        ["slept with fewer disturbances", 700, 350, <K c={TEAL} s={26}>fewer sleep disturbances</K>],
        ["They were not, though, less tired overall", 1260, 350, <K c={DIM} s={26}>not less tired overall</K>],
        ["The Taoists, too", 960, 460, <Wd c={CHALK} s={28}>the Taoists: body, breath, attention together</Wd>],
        ["must be cultivated together", 960, 540, <K c={GOLD} s={26}>mind nature and bodily life, cultivated together</K>],
        ["And the Buddha refused to trace every bodily feeling to past action", 960, 640, <SK c={DIM} s={24} strikeAt={c("He named bile, phlegm and wind", 0)}>every bodily feeling from past action</SK>],
        ["He named bile, phlegm and wind", 960, 710, <K c={CHALK} s={24}>bile · phlegm · wind · weather · habits · injury</K>],
        ["And he taught mindfulness of the breath", 960, 790, <Wd c={TEAL} s={28}>mindfulness of the breath, the posture, the body</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MapsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="maps, not anatomies" c={VIOLET} />
      <Items items={[
        ["not a stuff called energy", 960, 260, <SK c={DIM} s={28} strikeAt={c("not a stuff called energy", 0.4)}>a stuff called energy</SK>],
        ["not a stuff called energy", 960, 360, <Wd c={CHALK} s={28}>wind first meant wind and breath</Wd>, { d: 1 }],
        ["are maps of how breath, feeling and attention move together", 960, 470, <K c={GOLD} s={28}>maps of breath, feeling and attention moving together</K>],
        ["drawn from the inside", 960, 570, <Wd c={TEAL} s={30} serif>drawn from the inside</Wd>],
        ["the traditions are accurate about what they map", 960, 690, <Wd c={CHALK} s={28}>accurate about what they map: the felt movement of experience</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EvidenceScene: React.FC = () => {
  const c = useCue();
  const ok = "What is well supported is the main point";
  return (
    <AbsoluteFill>
      <Title text="not shown" c={WARM} until={ok} />
      <Items items={[
        ["trauma is stored in muscle or connective tissue", 960, 260, <SK c={DIM} s={28} strikeAt={c("That is a popular story, not a finding", 0.3)}>trauma stored in muscle, shaken out</SK>, { until: ok }],
        ["That is a popular story, not a finding", 960, 360, <Wd c={CHALK} s={26}>a popular story, not a finding</Wd>, { until: ok }],
        ["is strongly disputed by the scientists who study it", 960, 470, <K c={WARM} s={26}>a popular nervous system theory: strongly disputed</K>, { until: ok }],
        ["promising, but not yet proven", 960, 580, <K c={DIM} s={26}>body therapies for trauma: promising, not yet proven</K>, { until: ok }],
        [ok, 960, 100, <Wd c={TEAL} s={44} serif>well supported</Wd>],
        ["The body knows before thought", 960, 260, <K c={TEAL} s={28}>the body knows before thought</K>],
        ["The felt sense guides change", 960, 360, <K c={TEAL} s={28}>the felt sense guides change</K>],
        ["Fear is unlearned through bodily experience", 960, 460, <K c={TEAL} s={28}>fear is unlearned through the body</K>],
        ["run on different paths", 960, 560, <K c={TEAL} s={28}>story and direct feeling: different paths</K>],
      ]} />
    </AbsoluteFill>
  );
};

const StandScene: React.FC = () => {
  const c = useCue();
  const fam = "Contemplative scientists draw the line in the same place";
  return (
    <AbsoluteFill>
      <Title text="where I stand" c={GOLD} until={fam} />
      <Items items={[
        ["Felt knowing is a kind of insight, not only energy work", 960, 260, <Wd c={TEAL} s={38} serif>felt knowing is a kind of insight</Wd>, { until: fam }],
        ["that seeing is itself insight", 960, 380, <K c={CHALK} s={26}>this contraction · this held breath · this lean: seen as felt</K>, { until: fam }],
        ["It does not wait for a concept", 960, 490, <Wd c={CHALK} s={30}>it does not wait for a concept</Wd>, { until: fam }],
        [fam, 960, 130, <Wd c={CHALK} s={34} serif>three families of meditation</Wd>],
        ["They sort meditation into three families", 480, 300, <Box c={DIM} w={360} title="attentional" ts={28} />, { pop: true }],
        ["They sort meditation into three families", 960, 300, <Box c={DIM} w={360} title="constructive" ts={28} />, { d: 0.5, pop: true }],
        ["They sort meditation into three families", 1440, 300, <Box c={GOLD} w={360} title="deconstructive" sub="insight practice" ts={28} />, { d: 1, pop: true }],
        ["The family of insight practice aims at what they call reification", 1440, 450, <K c={WARM} s={24}>aims at reification</K>],
        ["its method is direct inquiry into experience, not argument", 960, 580, <K c={TEAL} s={28}>its method: direct inquiry, not argument</K>],
        ["is a seeing, not only a reasoning", 960, 710, <Wd c={GOLD} s={38} serif>a seeing, not only a reasoning</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GuardsScene: React.FC = () => {
  const c = useCue();
  const d = "And direct does not mean right";
  const an = "Analysis without the body stays in the head";
  return (
    <AbsoluteFill>
      <Title text="two guards" c={CHALK} />
      <Items items={[
        ["This felt knowing is more immediate", 640, 240, <K c={TEAL} s={30}>more immediate</K>, { until: d }],
        ["It is not more fundamental", 1280, 240, <SK c={DIM} s={30} strikeAt={c("It is not more fundamental", 0.4)}>more fundamental</SK>, { until: d }],
        ["But it is not a deeper floor beneath experience", 960, 370, <SK c={DIM} s={28} strikeAt={c("But it is not a deeper floor beneath experience", 0.9)}>a deeper floor beneath experience</SK>, { until: d }],
        ["it is as empty as what it knows", 960, 490, <Wd c={CHALK} s={30} serif>arising in dependence · as empty as what it knows</Wd>, { until: d }],
        ["To make it a ground would bring the substrate back", 960, 610, <K c={WARM} s={26}>made a ground: the substrate back, by the bodily door</K>, { until: d }],
        [d, 960, 220, <Wd c={CHALK} s={36} serif>direct does not mean right</Wd>, { until: an }],
        ["can be a habit, not a perception", 960, 320, <K c={WARM} s={26}>a sense of danger: a habit, not a perception</K>, { until: an }],
        ["So felt knowing needs refining too", 960, 420, <K c={GOLD} s={26}>refined by experience · attention · the view</K>, { until: an }],
        ["The view tells the body what it need no longer brace against", 960, 530, <Wd c={ICE} s={26}>the view → the body: no need to brace</Wd>, { until: an }],
        ["The body tells the view whether it has truly landed", 960, 620, <Wd c={TEAL} s={26}>the body → the view: has it landed?</Wd>, { until: an }],
        [an, 960, 260, <SK c={DIM} s={26} strikeAt={c("Felt knowing without the view can settle the body", 0)}>analysis without the body: stuck in the head</SK>],
        ["Felt knowing without the view can settle the body", 960, 370, <SK c={DIM} s={26} strikeAt={c("The street between insight and the body runs both ways", 0)}>felt knowing without the view: the framework untouched</SK>],
        ["The street between insight and the body runs both ways", 700, 530, <K c={GOLD} s={30}>insight</K>],
        ["The street between insight and the body runs both ways", 960, 530, <Arrow w={240} c={GOLD} both />],
        ["The street between insight and the body runs both ways", 1220, 530, <K c={TEAL} s={30}>the body</K>],
      ]} />
    </AbsoluteFill>
  );
};

const RainbowScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const arcs = ramp(t, c("And this is where it meets the rainbow body"), 2);
  const sh = "What is genuinely shown";
  return (
    <AbsoluteFill>
      <At x={960} y={230} o={0.7 * (1 - ramp(t, c(sh), 0.5))}><Arcs p={arcs} w={460} /></At>
      <Items items={[
        ["And this is where it meets the rainbow body", 960, 330, <Wd c={GOLD} s={38} serif>and the rainbow body</Wd>, { until: sh }],
        ["The body is not outside realization", 960, 450, <K c={TEAL} s={28}>the body is not outside realization</K>, { until: sh }],
        ["held in the body, felt there, and released there", 960, 550, <K c={CHALK} s={26}>the knot: held there · felt there · released there</K>, { until: sh }],
        ["of the body itself being known without grasping", 960, 660, <Wd c={CHALK} s={28}>the body itself known without grasping</Wd>, { until: sh }],
        [sh, 960, 260, <K c={TEAL} s={30}>shown: the body takes part in knowing and in release</K>],
        ["What is not shown is that a corpse turns into light", 960, 390, <K c={WARM} s={30}>not shown: a corpse turning into light</K>],
        ["I hold the first with confidence", 620, 530, <Wd c={TEAL} s={32} serif>the first: with confidence</Wd>],
        ["The second, I hold as a report", 1300, 530, <Wd c={WARM} s={32} serif>the second: as a report</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="two cautions" c={WARM} />
      <Items items={[
        ["This is not treatment", 960, 250, <K c={WARM} s={30}>not treatment</K>],
        ["a help, not a cure", 960, 350, <Wd c={CHALK} s={28}>trauma, panic, depression: a help, not a cure</Wd>],
        ["And do not force", 960, 470, <K c={WARM} s={30}>do not force · settle, do not strain</K>],
        ["Pleasant openness in the body is not awakening", 960, 590, <SK c={DIM} s={26} strikeAt={c("Pleasant openness in the body is not awakening", 1.6)}>pleasant openness = awakening</SK>],
        ["Insight is measured by the freedom of the mind", 960, 710, <Wd c={TEAL} s={36} serif>insight: the freedom of the mind</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const last = "The body knew first";
  const pre = 1 - ramp(t, c(last), 0.5);
  return (
    <AbsoluteFill>
      <At x={1380} y={400} o={pre}><SoundRings at={c("So, the dog barks again")} color={WARM} /></At>
      <At x={700} y={460} o={pre}><Figure p={1} color={CHALK} /></At>
      <Items items={[
        ["The shoulders jump", 1380, 620, <K c={CHALK} s={24}>the shoulders jump · the breath stops</K>, { until: last }],
        ["This time, notice it", 960, 160, <Wd c={GOLD} s={40} serif>this time, notice it</Wd>, { until: last }],
        ["Where it is held", 1380, 260, <K c={TEAL} s={24}>where it is held</K>, { until: last }],
        ["How it feels, before it has a name", 1380, 330, <K c={TEAL} s={24}>how it feels, before a name</K>, { until: last }],
        ["whether anyone is found, holding it", 960, 780, <SK c={DIM} s={26} strikeAt={c("whether anyone is found, holding it", 1.6)}>someone holding it</SK>, { until: last }],
      ]} />
      <At x={960} y={420}><Reveal text="The body knew first." at={c(last)} size={54} color={CHALK} speed={0.04} /></At>
      <At x={960} y={560}><Reveal text="Let it also be where the knot comes undone." at={c("Let it also be where the knot comes undone")} size={46} color={GOLD} speed={0.035} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A dog barks suddenly behind you", "night", <DogScene />],
    ["For many years the rainbow body has interested me", "gold", <StrandsScene />],
    ["The first is the energy practices of the different traditions", "indigo", <EnergyScene />],
    ["The second is the five elements", "deep", <ElementsScene />],
    ["The third is the reports themselves", "ember", <ReportsScene />],
    ["The fourth is how the body knows", "jade", <FourthScene />],
    ["Its point is simple", "gold", <PointScene />],
    ["Let me start with the body that jumps", "ember", <CircuitScene />],
    ["There is a quieter side of this too", "jade", <FeltScene />],
    ["Brain imaging shows the same split", "indigo", <SplitScene />],
    ["But there is a catch", "ember", <PredictScene />],
    ["Now fear", "deep", <FearScene />],
    ["I have written about this before", "indigo", <KnotScene />],
    ["Openness and spaciousness are known the same way", "jade", <RoomScene />],
    ["So the old traditions saw this too", "gold", <WindScene />],
    ["These are not anatomies", "deep", <MapsScene />],
    ["what the research does not show", "ember", <EvidenceScene />],
    ["So where do I stand", "gold", <StandScene />],
    ["But two guards", "indigo", <GuardsScene />],
    ["And this is where it meets the rainbow body", "jade", <RainbowScene />],
    ["Two cautions before I close", "ember", <CautionScene />],
    ["So, the dog barks again", "night", <EndScene />],
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
