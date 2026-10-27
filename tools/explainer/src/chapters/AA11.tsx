// After Anatta 11: Ethics and Compassion (Questions: "Why emptiness makes care matter more"). Explainer drawings
// timed to the narration.
// Arc: a harsh word and a kind one at breakfast -> the question page -> the worry: who is harmed, why not shrug ->
// the substance reading (real doer, victim, lasting deed on a floor) and its nihilist mirror (both need a solid core) ->
// the tradition: kindness as the seed (MMK 17.1), what is not empty could not be done (24.33), the work ends with
// compassion, and "taking up" is the word for designation in dependence (27.30) -> the four questions: doer and deed
// designated together, seed, sprout and fruit with nothing carried across; right, wrong, harm, kindness affirmed;
// karma and the mere I; what is never found struck -> Step 7: the fixed could not change, the person can ->
// "more" in a precise sense: emptiness produces nothing, it removes the excuses -> the car that still injures, ethics
// as arranging conditions -> what is not yet settled: compassion and awakening left open -> two traps -> in practice:
// the insult, the cruel person, the loss, a kindness today -> back to breakfast.
// Stance: emptiness is never drawn as a source, ground or cause; "emptiness causes compassion" is shown only to be
// struck, and the open question stays open (a question mark, never an answer). The fixed self, fixed victim, store of
// the deed, solid core and the excuses are shown only to be struck. Harm, kindness, karma, promises, grief and care stay
// vivid and affirmed. The fruit after death is labelled as the tradition's teaching, not drawn from emptiness.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // breakfast
  "A harsh word at breakfast can sour a whole day", "A kind one can carry someone through it",
  "when no self is found behind the words",
  // the question page
  "This is one of the question pages of After Anatta", "Its question is simple",
  "Why does emptiness make care matter more, and not less",
  // the worry
  "Here is the worry", "Step three found no self standing behind the person", "So who is harmed, and who is kind",
  "why not simply shrug", "a convention we might as well drop", "Step two called that negating too much",
  "This page shows why it does not follow",
  // the substance reading
  "First, the substance reading, stated fairly", "a real doer who means it", "a real victim who suffers it",
  "a real deed that stays until it bears fruit", "Take away the fixed selves, and morality loses its footing",
  // the mirror
  "Its mirror image sounds quite different", "nothing really happens, so nothing really matters",
  "But it rests on the same idea", "Both assume that mattering needs a solid core", "One keeps the core", "The other mourns it",
  // the tradition: 17.1
  "The tradition does not share that idea", "begins his chapter on action with kindness",
  "A mind that restrains itself, that helps others and that is kind", "the seed of fruit, both after death and here",
  "That fruit after death is the tradition's teaching", "The author does not draw it out of emptiness",
  // 24.33
  "Then Nagarjuna turns the worry around", "no one would ever do right or wrong", "What could be done by what is not empty",
  "An own-nature is not something that is made", "A fixed thing cannot be acted on, and cannot act",
  // 27.30
  "And his whole work ends with compassion", "Out of compassion he taught the true Dharma", "for the letting go of all views",
  "To him, to Gautama, I bow", "The word he uses there for that taking up", "is the same word he uses for designation in dependence",
  "So the teaching itself arose in dependence", "on compassion, for those who suffer",
  // the four questions: 1
  "Now run the four questions", "What would a substance view say", "A real doer, a real victim, and a deed that lasts until it ripens",
  "Without them, nothing matters",
  // 2
  "What does dependency say instead", "Doer and deed are designated together", "There is no doer without the doing",
  "and no deed without a doer", "A kind act arises from conditions", "as seed, sprout and fruit follow one another",
  "Nothing is carried across from one to the next", "could never be done, could never change, and could never end",
  // 3
  "What is affirmed conventionally", "Right and wrong", "Harm and kindness", "Responsibility, promises, and the fruits of action",
  "The person who acts, and who meets the results", "Love, sorrow and care, exactly where they were",
  // karma and the mere I
  "Karma here means intentional action", "It is real and reliable, with nothing carried across",
  "And the one who acts is the mere I", "designated on body and mind", "It acts, keeps its promises",
  // 4
  "What is never found", "A self behind the kindness that really means it", "A victim fixed as a victim",
  "A store that holds the deed until it ripens",
  // Step 7
  "This is Step seven at work", "Something that existed by itself could not change, combine or act",
  "A cruel person fixed in their nature could never learn", "A kindness fixed in its nature could never be given",
  "But the person is designated on what they do", "becomes, in a real sense, a different kind of person",
  "That is why change is possible at all",
  // more, in a precise sense
  "So the word more has a precise sense", "Emptiness does not produce care", "What it does is remove the excuses",
  "It isn't really happening", "They are only appearances", "There is no one there",
  "Each excuse needs something fixed to hide behind",
  // the car
  "A car with no essence still injures", "The grief of the family is not an illusion",
  "Nothing waits outside the chain of conditions to absorb what we do", "and the world answers",
  "So ethics becomes the plain work of arranging conditions", "a word, a pause, a kindness", "puts it that way",
  // what is not yet settled
  "Here the author is honest about a limit", "Compassion is the wish to relieve suffering",
  "His books say that emptiness takes nothing from compassion", "with no fixed self behind it",
  "But they do not say how compassion relates to awakening", "Does care arise by itself when emptiness is seen",
  "Or is it a practice of its own", "the awakened heart that joins wisdom and compassion",
  "as one aspect of the basis", "The author has named it, without yet taking it up", "And he leaves the question open",
  "claiming that emptiness causes compassion", "So the question stays open, and the page says so",
  // two traps
  "There are two traps, one on each side", "Too much is eternalism", "Kindness needs a real self that means it",
  "Then good and bad become verdicts on what someone is", "A cruel person is cruel for ever",
  "And my own goodness becomes something to defend",
  "Too little is nihilism", "It is all empty, so nothing matters", "Emptiness is used to excuse harm, or to skip care",
  "it has aimed past the target",
  // in practice
  "So, in practice", "When an insult lodges and repeats", "it seems to sit in the words themselves", "It still hurts",
  "Then look for what it landed on", "the moment, the voice and the hearing",
  "When someone is cruel, the harm is real", "And the person is not fixed as cruel", "Conditions can change",
  "The view does not make the loss of someone we love painless", "The pain is real", "It can be met by care",
  "And notice a kindness you receive today", "It is felt fully", "No fixed self is found behind it", "And it is no less kind",
  // back to breakfast
  "So back to breakfast", "The harsh word still sours the day", "The kind word still carries someone through it",
  "No self is found behind either one", "nothing fixed stands between us and what we do", "That is why care matters more",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  warm: { a: "rgba(190,110,90,0.44)", b: "rgba(80,55,150,0.44)", c: "rgba(170,130,60,0.34)" },
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

/** A chip that is struck through at `strikeAt` (only for what is never found, never for a conventional thing). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

/** A verse card: the words, and where they come from. */
const Verse: React.FC<{ text: string; src: string; at: number; color?: string; size?: number }> = ({ text, src, at, color = GOLD, size = 40 }) => {
  const { t } = useT();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, maxWidth: 1500 }}>
      <div style={{ textAlign: "center" }}><Reveal text={text} at={at} size={size} color={color} speed={0.02} wrap /></div>
      <div style={{ opacity: ramp(t, at + 1.2, 0.5) }}><Glow color={DIM} size={24}>{src}</Glow></div>
    </div>
  );
};

// ---------------------------------------------------------------- drawings
const Cup: React.FC<{ color?: string; size?: number; steam?: number }> = ({ color = ICE, size = 150, steam = 0 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      {[0, 1].map(i => (
        <path key={i} d={`M${50 + i * 26} 36 Q${40 + i * 26 + 8 * Math.sin(t * 2 + i)} 20 ${52 + i * 26} 4`} fill="none" stroke={CHALK}
          strokeWidth={3} strokeLinecap="round" opacity={0.5 * steam} />
      ))}
      <path d="M20 50 L110 50 L100 130 Q65 142 30 130 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
      <path d="M108 68 Q140 70 134 94 Q128 114 103 110" fill="none" stroke={color} strokeWidth={5} />
    </svg>
  );
};

/** A plain standing figure; slump bends it (a hurt day). */
const Person: React.FC<{ color?: string; size?: number; dashed?: boolean; slump?: number }> = ({ color = CHALK, size = 150, dashed, slump = 0 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)`,
    transform: `rotate(${slump * 8}deg)`, transformOrigin: "50% 100%" }}>
    <circle cx={30} cy={16 + slump * 6} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "5 4" : undefined} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round"
      strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

/** A speech bubble with a word inside. */
const Bubble: React.FC<{ color: string; children: React.ReactNode; size?: number }> = ({ color, children, size = 28 }) => (
  <div style={{ position: "relative", padding: "14px 26px", borderRadius: 26, border: `3px solid ${color}`, background: `${color}22`,
    boxShadow: `0 0 22px ${color}77`, fontFamily: SERIF, fontWeight: 600, fontSize: size, color: CHALK, whiteSpace: "nowrap" }}>
    {children}
    <div style={{ position: "absolute", left: 30, bottom: -18, width: 0, height: 0, borderLeft: "12px solid transparent",
      borderRight: "12px solid transparent", borderTop: `18px solid ${color}` }} />
  </div>
);

/** A dark cloud (a soured day). */
const Cloud: React.FC<{ color?: string; size?: number }> = ({ color = VIOLET, size = 220 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 200 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M40 100 Q10 100 14 74 Q18 50 46 54 Q54 22 90 26 Q120 6 146 34 Q186 34 184 70 Q188 100 156 100 Z" fill={`${color}44`} stroke={color} strokeWidth={4} />
    {[60, 100, 140].map((x, i) => <path key={i} d={`M${x} 108 L${x - 8} 124`} stroke={ICE} strokeWidth={4} strokeLinecap="round" opacity={0.7} />)}
  </svg>
);

/** A heart: care. */
const Heart: React.FC<{ color?: string; size?: number; beat?: number }> = ({ color = ROSE, size = 140, beat = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", transform: `scale(${1 + 0.06 * beat})`,
    filter: `drop-shadow(0 0 ${10 + 10 * beat}px ${color})` }}>
    <path d="M50 88 C20 66 6 48 8 30 C10 12 34 6 50 26 C66 6 90 12 92 30 C94 48 80 66 50 88 Z" fill={`${color}55`} stroke={color} strokeWidth={4} />
  </svg>
);

/** A small tree with fruit: actions bearing fruit. */
const Fruit: React.FC<{ size?: number }> = ({ size = 170 }) => (
  <svg width={size} height={size * 1.12} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M85 186 L85 110 M85 130 L60 110 M85 120 L112 98" stroke="#b07a45" strokeWidth={8} strokeLinecap="round" fill="none" />
    <ellipse cx={85} cy={72} rx={72} ry={58} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} />
    {[[55, 70], [100, 50], [115, 92], [70, 100]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={`${RED}cc`} stroke={RED} strokeWidth={3} />)}
  </svg>
);

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

/** A floor bar; it can crack (drawn only so that it can be taken away). */
const Floor: React.FC<{ w?: number; color?: string; crack?: number }> = ({ w = 900, color = WARM, crack = 0 }) => (
  <div style={{ display: "flex", gap: 30 * crack, transform: `translateY(${crack * 30}px)` }}>
    {[0, 1, 2].map(i => (
      <div key={i} style={{ width: w / 3, height: 24, borderRadius: 12, background: `${color}33`, border: `3px solid ${color}`,
        boxShadow: `0 0 16px ${color}55`, transform: `rotate(${(i - 1) * 6 * crack}deg)`, opacity: 1 - 0.5 * crack }} />
    ))}
  </div>
);

/** A solid glowing core (shown only to be questioned). */
const Core: React.FC<{ color?: string; dim?: number }> = ({ color = WARM, dim = 0 }) => (
  <div style={{ width: 110, height: 110, borderRadius: 55, background: `radial-gradient(circle, #fff8 0%, ${color}aa 45%, ${color}22 100%)`,
    border: `3px ${dim > 0.5 ? "dashed" : "solid"} ${color}`, boxShadow: `0 0 ${30 * (1 - dim) + 6}px ${color}`, opacity: 1 - 0.6 * dim }} />
);

/** A sealed, locked block: an own-nature that nothing can act on. */
const Locked: React.FC<{ color?: string }> = ({ color = WARM }) => (
  <svg width={170} height={170} viewBox="0 0 170 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <rect x={20} y={60} width={130} height={100} rx={12} fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M50 60 L50 40 Q50 10 85 10 Q120 10 120 40 L120 60" fill="none" stroke={color} strokeWidth={6} />
    <circle cx={85} cy={104} r={12} fill={color} /><rect x={80} y={108} width={10} height={26} fill={color} />
  </svg>
);

/** A car, seen side-on. */
const Car: React.FC<{ color?: string; size?: number; spin?: number }> = ({ color = ICE, size = 280, spin = 0 }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 280 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M20 100 L20 74 Q22 62 40 60 L80 56 L110 26 Q118 20 130 20 L190 20 Q204 20 212 30 L236 58 Q262 62 264 80 L264 100 Z"
      fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M118 32 L100 56 L160 56 L160 32 Z M172 32 L172 56 L222 56 L202 32 Z" fill={`${ICE}33`} stroke={color} strokeWidth={3} />
    {[70, 214].map(x => (
      <g key={x} transform={`translate(${x} 104) rotate(${spin})`}>
        <circle r={24} fill="#0008" stroke={CHALK} strokeWidth={5} />
        <line x1={-16} y1={0} x2={16} y2={0} stroke={CHALK} strokeWidth={3} /><line x1={0} y1={-16} x2={0} y2={16} stroke={CHALK} strokeWidth={3} />
      </g>
    ))}
  </svg>
);

/** A chain of links (conditions). */
const Chain: React.FC<{ n?: number; color?: string; p?: number }> = ({ n = 6, color = TEAL, p = 1 }) => (
  <svg width={n * 70 + 30} height={70} viewBox={`0 0 ${n * 70 + 30} 70`} style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    {Array.from({ length: n }).map((_, i) => (
      <rect key={i} x={10 + i * 70} y={i % 2 ? 22 : 12} width={80} height={i % 2 ? 26 : 46} rx={i % 2 ? 13 : 23} fill="none"
        stroke={color} strokeWidth={6} opacity={p * n > i ? 1 : 0.1} />
    ))}
  </svg>
);

/** A target with an arrow that misses it (aimed past the target). */
const Target: React.FC<{ p: number }> = ({ p }) => (
  <svg width={300} height={200} viewBox="0 0 300 200" style={{ overflow: "visible" }}>
    {[70, 48, 26].map((r, i) => <circle key={r} cx={110} cy={100} r={r} fill={i === 2 ? `${GOLD}66` : "none"} stroke={i === 2 ? GOLD : ROSE} strokeWidth={5} />)}
    <g transform={`translate(${-60 + 340 * p} ${30 - 10 * p})`}>
      <line x1={-60} y1={0} x2={0} y2={0} stroke={CHALK} strokeWidth={5} strokeLinecap="round" />
      <path d="M0 0 L-14 -9 L-14 9 Z" fill={CHALK} />
    </g>
  </svg>
);

/** A question mark that stays: the open question. */
const Open: React.FC<{ color?: string; size?: number }> = ({ color = GOLD, size = 160 }) => {
  const { t } = useT();
  return (
    <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: size, color, lineHeight: 1, textShadow: `0 0 26px ${color}`,
      transform: `translateY(${6 * Math.sin(t * 1.4)}px)` }}>?</div>
  );
};

const Num: React.FC<{ n: string; color: string; lit: number }> = ({ n, color, lit }) => (
  <div style={{ width: 54, height: 54, borderRadius: 27, border: `3px solid ${color}`, background: `${color}${lit > 0.5 ? "44" : "11"}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: CHALK,
    boxShadow: lit > 0.5 ? `0 0 20px ${color}` : undefined }}>{n}</div>
);

const Q4: [string, string][] = [
  ["what would a substance view say?", WARM],
  ["what does dependency say instead?", TEAL],
  ["what is affirmed conventionally?", GOLD],
  ["what is never found?", VIOLET],
];

/** The heading of each question's scene: its number and its words. */
const QHead: React.FC<{ i: number; at: number }> = ({ i, at }) => {
  const { t, fps } = useT();
  return (
    <At x={960} y={120} s={pop(t, fps, at)} o={ramp(t, at, 0.4)}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Num n={String(i + 1)} color={Q4[i][1]} lit={1} /><Glow color={Q4[i][1]} size={40} serif>{Q4[i][0]}</Glow>
      </div>
    </At>
  );
};

/** Sound-like rings of warmth around a point. */
const Warmth: React.FC<{ x: number; y: number; at: number; dur?: number; color?: string; r1?: number }> = ({ x, y, at, dur = 5, color = GOLD, r1 = 260 }) => {
  const { t } = useT();
  if (t < at || t > at + dur + 1.6) return null;
  return (
    <>
      {[0, 1, 2].map((k) => {
        const s = at + k * 0.6;
        const q = t < s ? 0 : ((t - s) / 1.8) % 1;
        return t - s < dur ? <Ring key={k} x={x} y={y} p={q} r0={40} r1={r1} color={color} /> : null;
      })}
    </>
  );
};

// ---------------------------------------------------------------- scenes
const BreakfastScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const harsh = c("A harsh word at breakfast can sour a whole day");
  const kind = c("A kind one can carry someone through it");
  const self = c("when no self is found behind the words");
  return (
    <AbsoluteFill>
      <Title at={harsh} color={DIM} size={34}>breakfast</Title>
      <At x={960} y={560} o={ramp(t, harsh, 0.5)}><div style={{ width: 1300, height: 8, borderRadius: 4, background: `${WARM}66`, boxShadow: `0 0 14px ${WARM}66` }} /></At>
      <At x={960} y={500} o={ramp(t, harsh, 0.5)}><Cup size={110} steam={1} /></At>
      {/* the harsh word */}
      <At x={480} y={440} s={pop(t, fps, harsh + 0.3)}><Person color={ICE} size={170} slump={ramp(t, harsh + 1.6, 1)} /></At>
      <At x={560} y={260} s={pop(t, fps, harsh + 0.6)}><Bubble color={RED}>a harsh word</Bubble></At>
      <At x={480} y={660} o={ramp(t, harsh + 1.8, 0.6)}><Cloud size={200} /></At>
      <At x={480} y={780} o={ramp(t, harsh + 2.2, 0.5)}><W c={VIOLET} s={26}>a soured day</W></At>
      {/* the kind one */}
      <At x={1440} y={440} s={pop(t, fps, kind)}><Person color={GOLD} size={170} /></At>
      <At x={1520} y={260} s={pop(t, fps, kind + 0.3)}><Bubble color={GOLD}>a kind word</Bubble></At>
      <At x={1440} y={660} o={ramp(t, kind + 1.2, 0.6)}><Sun size={130} rot={t * 12} /></At>
      <At x={1440} y={780} o={ramp(t, kind + 1.6, 0.5)}><W c={GOLD} s={26}>carried through the day</W></At>
      <At x={960} y={330} o={ramp(t, self, 0.5)}><SK c={DIM} s={26} strikeAt={self + 1.6}>a self behind the words</SK></At>
    </AbsoluteFill>
  );
};

const PageScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Why does emptiness make care matter more, and not less");
  return (
    <AbsoluteFill>
      <Title at={c("This is one of the question pages of After Anatta")}>After Anatta · Questions</Title>
      <Items items={[
        ["This is one of the question pages of After Anatta", 960, 190, <W c={DIM} s={28}>notes by John Tan (Thusness)</W>, { d: 1.4 }],
        ["Its question is simple", 960, 330, <W c={CHALK} s={30}>one question</W>],
      ]} />
      <At x={960} y={460} o={ramp(t, q - 0.3, 0.3)}>
        <Reveal text="Why does emptiness make care matter more?" at={q} size={60} speed={0.03} />
      </At>
      <At x={960} y={640} s={pop(t, fps, c("Its question is simple") + 0.6)}><Heart beat={Math.max(0, Math.sin(t * 4))} /></At>
      <At x={960} y={780} o={ramp(t, q + 2.4, 0.5)}><W c={ROSE} s={32} serif>more, and not less</W></At>
    </AbsoluteFill>
  );
};

const WorryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("Step three found no self standing behind the person");
  const drop = c("a convention we might as well drop");
  return (
    <AbsoluteFill>
      <Title at={c("Here is the worry")} color={WARM}>the worry</Title>
      <At x={420} y={360} s={pop(t, fps, st)}><Person color={CHALK} size={170} /></At>
      <At x={420} y={540} o={ramp(t, st + 0.6, 0.4)}><SK c={DIM} s={24} strikeAt={st + 2.0}>a self behind the person</SK></At>
      <At x={420} y={610} o={ramp(t, st + 0.3, 0.4)}><W c={DIM} s={22}>Step 3</W></At>
      <Items items={[
        ["So who is harmed, and who is kind", 960, 300, <K c={ROSE} s={30}>who is harmed?</K>, { pop: true }],
        ["So who is harmed, and who is kind", 960, 390, <K c={GOLD} s={30}>who is kind?</K>, { pop: true, d: 1.0 }],
        ["why not simply shrug", 1460, 340, <W c={ICE} s={34} serif>why not simply shrug?</W>],
        ["a convention we might as well drop", 1460, 450, <K c={DIM} s={26}>ethics: “just a convention”</K>],
        ["Step two called that negating too much", 1100, 600, <W c={WARM} s={32} serif>Step 2: negating too much</W>],
        ["Step two called that negating too much", 1100, 670, <W c={DIM} s={24}>the world taken away with the fixed self</W>, { d: 1.6 }],
        ["This page shows why it does not follow", 960, 780, <W c={GOLD} s={34} serif>it does not follow</W>],
      ]} />
      <At x={1460} y={540} o={ramp(t, drop + 0.4, 0.4)}>
        <div style={{ transform: `translateY(${80 * ramp(t, drop + 1.0, 1.0)}px)`, opacity: 1 - ramp(t, drop + 1.6, 0.6) }}><Heart size={60} color={DIM} /></div>
      </At>
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const take = c("Take away the fixed selves, and morality loses its footing");
  const crack = ramp(t, take + 1.4, 1.0);
  const P: [string, string, string, number][] = [
    ["a real doer who means it", "a real doer", WARM, 520],
    ["a real victim who suffers it", "a real victim", ROSE, 960],
    ["a real deed that stays until it bears fruit", "a lasting deed", GOLD, 1400],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("First, the substance reading, stated fairly")} color={WARM}>the substance reading</Title>
      <Items items={[
        ["First, the substance reading, stated fairly", 960, 190, <W c={DIM} s={28}>stated fairly</W>, { d: 1.6 }],
      ]} />
      {P.map(([cue, w, col, x]) => (
        <React.Fragment key={w}>
          <At x={x} y={400 + crack * 40} s={pop(t, fps, c(cue))} o={ramp(t, c(cue), 0.3) * (1 - 0.4 * crack)}>
            <div style={{ width: 300, height: 150, borderRadius: 16, background: `${col}33`, border: `4px solid ${col}`, boxShadow: `0 0 22px ${col}77`,
              display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={32}>{w}</W></div>
          </At>
        </React.Fragment>
      ))}
      <At x={960} y={520} o={ramp(t, c("First, the substance reading, stated fairly") + 1.0, 0.5)}><Floor w={1200} crack={crack} /></At>
      <At x={960} y={590} o={ramp(t, c("First, the substance reading, stated fairly") + 1.6, 0.5)}><W c={DIM} s={24}>fixed selves, as the floor</W></At>
      <Items items={[
        ["a real deed that stays until it bears fruit", 1400, 290, <W c={DIM} s={22}>stays until it bears fruit</W>, { d: 1.0 }],
        ["Take away the fixed selves, and morality loses its footing", 960, 720, <W c={WARM} s={34} serif>take the floor away, and morality falls?</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const MirrorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const core = c("Both assume that mattering needs a solid core");
  const mourn = c("The other mourns it");
  return (
    <AbsoluteFill>
      <Title at={c("Its mirror image sounds quite different")} color={VIOLET}>its mirror image</Title>
      <Items items={[
        ["Its mirror image sounds quite different", 500, 250, <K c={WARM} s={28}>substance</K>, { d: 0.6 }],
        ["nothing really happens, so nothing really matters", 1420, 250, <K c={VIOLET} s={28}>“nothing really matters”</K>],
        ["nothing really happens, so nothing really matters", 1420, 320, <W c={DIM} s={24}>if everything is empty, nothing happens</W>, { d: 0.8 }],
        ["But it rests on the same idea", 960, 430, <W c={CHALK} s={32} serif>the same idea underneath</W>],
      ]} />
      <At x={960} y={250} o={ramp(t, c("Its mirror image sounds quite different") + 0.8, 0.5)}>
        <div style={{ width: 4, height: 200, background: `linear-gradient(${CHALK}00, ${CHALK}cc, ${CHALK}00)` }} />
      </At>
      <At x={500} y={580} o={ramp(t, core, 0.5)}><Core /></At>
      <At x={1420} y={580} o={ramp(t, core + 0.3, 0.5)}><Core color={VIOLET} dim={ramp(t, mourn, 0.8)} /></At>
      <Items items={[
        ["Both assume that mattering needs a solid core", 960, 580, <W c={WARM} s={28}>mattering needs a solid core?</W>, { d: 0.6 }],
        ["One keeps the core", 500, 690, <W c={WARM} s={28}>keeps the core</W>],
        ["The other mourns it", 1420, 690, <W c={VIOLET} s={28}>mourns the core</W>],
      ]} />
      <At x={960} y={790} o={ramp(t, mourn + 1.2, 0.5)}><SK c={DIM} s={26} strikeAt={mourn + 2.2}>a solid core that mattering needs</SK></At>
    </AbsoluteFill>
  );
};

const SeedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("A mind that restrains itself, that helps others and that is kind");
  const seed = c("the seed of fruit, both after death and here");
  return (
    <AbsoluteFill>
      <Title at={c("The tradition does not share that idea")} color={GOLD}>what the tradition says</Title>
      <Items items={[
        ["begins his chapter on action with kindness", 960, 190, <W c={DIM} s={28}>Nagarjuna: the chapter on action begins with kindness</W>],
      ]} />
      <At x={960} y={330} o={ramp(t, v - 0.3, 0.3)}>
        <Verse text="A mind that restrains itself, that helps others and that is kind: that is the dharma, the seed of fruit both after death and here."
          src="Nāgārjuna, MMK 17.1" at={v} size={38} />
      </At>
      <At x={700} y={600} s={pop(t, fps, c("The tradition does not share that idea") + 0.8)}><SeedSprout grow={ramp(t, seed + 0.4, 1.6)} /></At>
      <At x={1000} y={590} s={pop(t, fps, seed + 1.4)}><Fruit size={140} /></At>
      <Items items={[
        ["That fruit after death is the tradition's teaching", 1420, 560, <K c={VIOLET} s={26}>after death: the tradition's teaching</K>],
        ["The author does not draw it out of emptiness", 1420, 640, <W c={GOLD} s={26}>not drawn out of emptiness</W>],
        ["the seed of fruit, both after death and here", 850, 750, <W c={GREEN} s={28}>kindness as the seed</W>, { d: 1.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const TurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("no one would ever do right or wrong");
  const fixed = c("A fixed thing cannot be acted on, and cannot act");
  return (
    <AbsoluteFill>
      <Title at={c("Then Nagarjuna turns the worry around")} color={TEAL}>the worry, turned around</Title>
      <At x={960} y={260} o={ramp(t, v - 0.3, 0.3)}>
        <Verse text="No one would ever do right or wrong. What could be done by what is not empty? An own-nature is not something that is made."
          src="Nāgārjuna, MMK 24.33" at={v} size={38} color={ICE} />
      </At>
      <At x={620} y={570} s={pop(t, fps, c("Then Nagarjuna turns the worry around") + 0.8)}><Locked /></At>
      <At x={620} y={710} o={ramp(t, c("An own-nature is not something that is made") + 1.6, 0.5)}><W c={WARM} s={26}>own-nature: nothing can be done to it</W></At>
      <At x={1300} y={540} s={pop(t, fps, fixed)}><Person color={DIM} size={150} /></At>
      <Svg>
        <DrawPath d="M1100 470 L1220 520" p={ramp(t, fixed + 0.6, 0.4)} color={DIM} width={5} len={160} />
        <DrawPath d="M1380 520 L1500 470" p={ramp(t, fixed + 1.2, 0.4)} color={DIM} width={5} len={160} />
      </Svg>
      <Items items={[
        ["A fixed thing cannot be acted on, and cannot act", 1300, 690, <W c={WARM} s={26}>cannot be acted on · cannot act</W>, { d: 0.6 }],
        ["A fixed thing cannot be acted on, and cannot act", 960, 790, <W c={GOLD} s={32} serif>only what is not fixed can do right or wrong</W>, { d: 2.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const EndsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("Out of compassion he taught the true Dharma");
  const word = c("The word he uses there for that taking up");
  const same = c("is the same word he uses for designation in dependence");
  const dep = c("So the teaching itself arose in dependence");
  const suffer = c("on compassion, for those who suffer");
  return (
    <AbsoluteFill>
      <Title at={c("And his whole work ends with compassion")} color={ROSE}>the work ends with compassion</Title>
      <At x={960} y={250} o={ramp(t, v - 0.3, 0.3)}>
        <Verse text="Out of compassion he taught the true Dharma for the letting go of all views. To him, to Gautama, I bow."
          src="Nāgārjuna, MMK 27.30" at={v} size={38} color={ROSE} />
      </At>
      <At x={560} y={480} s={pop(t, fps, word)}><K c={GOLD} s={30}>upādāya · “taking up”</K></At>
      <At x={1360} y={480} s={pop(t, fps, same)}><K c={TEAL} s={30}>designation in dependence · 24.18</K></At>
      <Flow x1={760} y1={480} x2={1110} y2={480} color={GOLD} p={ramp(t, same + 0.6, 0.6)} />
      <At x={960} y={420} o={ramp(t, same + 1.2, 0.4)}><W c={DIM} s={24}>the same word</W></At>
      <At x={760} y={650} s={pop(t, fps, suffer)}><Heart size={120} beat={Math.max(0, Math.sin(t * 4))} /></At>
      <At x={1160} y={650} s={pop(t, fps, dep)}><K c={VIOLET} s={28}>the teaching</K></At>
      <Flow x1={830} y1={650} x2={1040} y2={650} color={ROSE} p={ramp(t, suffer + 0.4, 0.6)} />
      <Items items={[
        ["on compassion, for those who suffer", 960, 780, <W c={GOLD} s={30} serif>arisen in dependence: on compassion, for those who suffer</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const Q1Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const run = c("Now run the four questions");
  const q = c("What would a substance view say");
  const a = c("A real doer, a real victim, and a deed that lasts until it ripens");
  return (
    <AbsoluteFill>
      <At x={960} y={230} o={ramp(t, run, 0.4) * (1 - ramp(t, q, 0.4))}>
        <div style={{ display: "flex", gap: 24 }}>{Q4.map(([, col], i) => <Num key={i} n={String(i + 1)} color={col} lit={ramp(t, run + 0.4 + i * 0.3, 0.3)} />)}</div>
      </At>
      <At x={960} y={320} o={ramp(t, run + 0.2, 0.4) * (1 - ramp(t, q, 0.4))}><W c={GOLD} s={36} serif>the four questions</W></At>
      <QHead i={0} at={q} />
      {["a real doer", "a real victim", "a lasting deed"].map((w, i) => (
        <At key={w} x={520 + i * 440} y={420} s={pop(t, fps, a + i * 0.8)}><K c={WARM} s={32}>{w}</K></At>
      ))}
      <At x={960} y={500} o={ramp(t, a + 2.4, 0.5)}><W c={DIM} s={26}>a deed that lasts until it ripens</W></At>
      <Items items={[
        ["Without them, nothing matters", 960, 640, <W c={WARM} s={36} serif>without them, nothing matters</W>],
      ]} />
    </AbsoluteFill>
  );
};

const Q2Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tog = c("Doer and deed are designated together");
  const act = c("A kind act arises from conditions");
  const seq = c("as seed, sprout and fruit follow one another");
  const nc = c("Nothing is carried across from one to the next");
  const never = c("could never be done, could never change, and could never end");
  return (
    <AbsoluteFill>
      <QHead i={1} at={c("What does dependency say instead")} />
      <At x={440} y={280} s={pop(t, fps, tog)}><K c={WARM} s={30}>doer</K></At>
      <At x={760} y={280} s={pop(t, fps, tog + 0.3)}><K c={GOLD} s={30}>deed</K></At>
      <Svg>
        <DrawPath d="M500 250 Q600 200 700 250" p={ramp(t, tog + 0.8, 0.5)} color={TEAL} width={4} len={260} />
        <DrawPath d="M700 310 Q600 360 500 310" p={ramp(t, tog + 1.1, 0.5)} color={TEAL} width={4} len={260} />
      </Svg>
      <Items items={[
        ["Doer and deed are designated together", 600, 390, <W c={TEAL} s={26}>designated together · MMK 8.12</W>, { d: 1.2 }],
        ["There is no doer without the doing", 600, 450, <W c={DIM} s={24}>no doer without the doing</W>],
        ["and no deed without a doer", 600, 500, <W c={DIM} s={24}>no deed without a doer</W>],
        ["A kind act arises from conditions", 1360, 250, <K c={ROSE} s={28}>a kind act</K>, { pop: true }],
      ]} />
      {["a need", "a moment", "a hand"].map((w, i) => (
        <At key={w} x={1180 + i * 180} y={330} o={ramp(t, act + 0.8 + i * 0.3, 0.4)}><W c={DIM} s={22}>{w}</W></At>
      ))}
      <At x={760} y={620} s={pop(t, fps, seq)}><SeedSprout grow={ramp(t, seq + 0.4, 1.2)} /></At>
      <At x={1060} y={610} s={pop(t, fps, seq + 1.4)}><Fruit size={120} /></At>
      <At x={910} y={720} o={ramp(t, seq + 0.6, 0.5)}><W c={GREEN} s={24}>seed · sprout · fruit · MMK 17.7–10</W></At>
      <At x={1480} y={560} o={ramp(t, nc, 0.4)}><SK c={DIM} s={24} strikeAt={nc + 1.6}>something carried across</SK></At>
      <At x={1480} y={640} o={ramp(t, never - 1.6, 0.5)}><SK c={WARM} s={24} strikeAt={never + 2.2}>a deed with its own nature</SK></At>
      <At x={1480} y={710} o={ramp(t, never + 0.6, 0.5)}><W c={DIM} s={22}>never done, never changing, never ending · 17.22–24</W></At>
    </AbsoluteFill>
  );
};

const Q3Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const love = c("Love, sorrow and care, exactly where they were");
  const A: [string, string, string, number, number][] = [
    ["Right and wrong", "right and wrong", CHALK, 480, 260],
    ["Harm and kindness", "harm and kindness", ROSE, 960, 260],
    ["Responsibility, promises, and the fruits of action", "responsibility · promises · fruits", GOLD, 1440, 260],
  ];
  return (
    <AbsoluteFill>
      <QHead i={2} at={c("What is affirmed conventionally")} />
      {A.map(([cue, w, col, x, y]) => <At key={w} x={x} y={y} s={pop(t, fps, c(cue))}><K c={col} s={30}>{w}</K></At>)}
      <Items items={[
        ["The person who acts, and who meets the results", 760, 470, <Person color={TEAL} size={170} />, { pop: true }],
        ["The person who acts, and who meets the results", 1160, 470, <Fruit size={130} />, { pop: true, d: 1.4 }],
        ["The person who acts, and who meets the results", 960, 610, <W c={TEAL} s={26}>the one who acts, and meets the results</W>, { d: 0.8 }],
      ]} />
      {[["love", ROSE], ["sorrow", ICE], ["care", GOLD]].map(([w, col], i) => (
        <At key={w} x={620 + i * 340} y={720} s={pop(t, fps, love + i * 0.5)}><W c={col} s={36} serif>{w}</W></At>
      ))}
      <At x={960} y={800} o={ramp(t, love + 2.0, 0.5)}><W c={DIM} s={24}>exactly where they were</W></At>
    </AbsoluteFill>
  );
};

const KarmaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("Karma here means intentional action");
  const mere = c("And the one who acts is the mere I");
  const des = c("designated on body and mind");
  const prom = c("It acts, keeps its promises");
  return (
    <AbsoluteFill>
      <Title at={k} color={GOLD}>karma</Title>
      <Items items={[
        ["Karma here means intentional action", 960, 200, <W c={CHALK} s={30}>intentional action, and the way it bears fruit</W>, { d: 0.6 }],
        ["It is real and reliable, with nothing carried across", 960, 270, <W c={GOLD} s={30} serif>real and reliable, with nothing carried across</W>],
      ]} />
      <At x={960} y={440} s={pop(t, fps, mere)}><Person color={TEAL} size={190} /></At>
      <At x={960} y={580} o={ramp(t, mere + 0.6, 0.4)}><K c={TEAL} s={30}>the mere I</K></At>
      <At x={640} y={440} o={ramp(t, des, 0.4)}><K c={ICE} s={26}>body</K></At>
      <At x={1280} y={440} o={ramp(t, des + 0.4, 0.4)}><K c={VIOLET} s={26}>mind</K></At>
      <Flow x1={700} y1={440} x2={880} y2={440} color={ICE} p={ramp(t, des + 0.4, 0.5)} pulses={false} />
      <Flow x1={1220} y1={440} x2={1040} y2={440} color={VIOLET} p={ramp(t, des + 0.8, 0.5)} pulses={false} />
      {["acts", "keeps promises", "meets results"].map((w, i) => (
        <At key={w} x={560 + i * 400} y={710} s={pop(t, fps, prom + i * 0.6)}><K c={GOLD} s={28}>{w}</K></At>
      ))}
    </AbsoluteFill>
  );
};

const Q4Scene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const N: [string, string, number][] = [
    ["A self behind the kindness that really means it", "a self behind the kindness that “really” means it", 300],
    ["A victim fixed as a victim", "a victim fixed as a victim", 440],
    ["A store that holds the deed until it ripens", "a store that holds the deed", 580],
  ];
  const last = c("A store that holds the deed until it ripens");
  return (
    <AbsoluteFill>
      <QHead i={3} at={c("What is never found")} />
      {N.map(([cue, w, y]) => (
        <At key={w} x={960} y={y} o={ramp(t, c(cue), 0.4)}><SK c={VIOLET} s={30} strikeAt={c(cue) + 1.8}>{w}</SK></At>
      ))}
      <At x={960} y={740} o={ramp(t, last + 3.0, 0.5)}><W c={GOLD} s={32} serif>not found, and nothing put in their place</W></At>
    </AbsoluteFill>
  );
};

const Step7Scene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cruel = c("A cruel person fixed in their nature could never learn");
  const kind = c("A kindness fixed in its nature could never be given");
  const des = c("But the person is designated on what they do");
  const diff = c("becomes, in a real sense, a different kind of person");
  const ch = ramp(t, diff, 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("This is Step seven at work")} color={TEAL}>Step 7 at work</Title>
      <Items items={[
        ["Something that existed by itself could not change, combine or act", 960, 200, <W c={DIM} s={28}>what exists by itself could not change, combine or act</W>],
      ]} />
      <At x={460} y={360} s={pop(t, fps, c("This is Step seven at work") + 0.8)}><Locked color={RED} /></At>
      <At x={460} y={490} o={ramp(t, cruel + 0.6, 0.4)}><SK c={DIM} s={24} strikeAt={cruel + 2.6}>cruel by nature: never learns</SK></At>
      <At x={1460} y={360} s={pop(t, fps, c("This is Step seven at work") + 1.1)}><Locked color={GOLD} /></At>
      <At x={1460} y={490} o={ramp(t, kind + 0.6, 0.4)}><SK c={DIM} s={24} strikeAt={kind + 2.6}>kind by nature: never given</SK></At>
      <At x={960} y={420} o={ramp(t, des, 0.4)}><Person color={ch > 0.5 ? GOLD : ICE} size={170} /></At>
      <At x={960} y={560} o={ramp(t, des + 0.6, 0.4)}><W c={TEAL} s={26}>designated on what they do</W></At>
      <At x={960} y={660} o={ramp(t, diff, 0.5)}><W c={GOLD} s={30} serif>acts differently → a different kind of person</W></At>
      <Items items={[
        ["That is why change is possible at all", 960, 770, <W c={CHALK} s={34} serif>so change is possible at all</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MoreScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const no = c("Emptiness does not produce care");
  const ex = c("Each excuse needs something fixed to hide behind");
  const E: [string, string][] = [
    ["It isn't really happening", "“it isn't really happening”"],
    ["They are only appearances", "“they are only appearances”"],
    ["There is no one there", "“there is no one there”"],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("So the word more has a precise sense")} color={GOLD}>“more”, in a precise sense</Title>
      <At x={960} y={330} o={ramp(t, c("So the word more has a precise sense") + 0.6, 0.5) * (1 - ramp(t, no - 0.2, 0.4))}><W c={GOLD} s={110} serif>more</W></At>
      <At x={960} y={240} o={ramp(t, no, 0.4)}><SK c={DIM} s={30} strikeAt={no + 1.4}>emptiness → produces care</SK></At>
      <At x={960} y={320} o={ramp(t, no + 1.6, 0.4)}><W c={CHALK} s={28}>it does not cause anything</W></At>
      <Items items={[
        ["What it does is remove the excuses", 960, 410, <W c={GOLD} s={36} serif>it removes the excuses</W>],
      ]} />
      {E.map(([cue, w], i) => (
        <At key={w} x={480 + i * 480} y={540} s={pop(t, fps, c(cue))}><SK c={WARM} s={26} strikeAt={ex + 1.0 + i * 0.4}>{w}</SK></At>
      ))}
      <Items items={[
        ["Each excuse needs something fixed to hide behind", 960, 660, <W c={DIM} s={28}>each needs something fixed to hide behind</W>],
        ["Each excuse needs something fixed to hide behind", 960, 740, <W c={TEAL} s={28}>and nothing fixed is found</W>, { d: 2.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const CarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const car = c("A car with no essence still injures");
  const grief = c("The grief of the family is not an illusion");
  const chain = c("Nothing waits outside the chain of conditions to absorb what we do");
  const drive = ramp(t, car, 1.6);
  return (
    <AbsoluteFill>
      <At x={300 + 260 * drive} y={260} s={pop(t, fps, car)}><Car spin={drive * 360} size={260} /></At>
      <At x={560} y={380} o={ramp(t, car + 1.2, 0.4)}><W c={ICE} s={26}>no essence · still injures</W></At>
      <At x={1380} y={260} s={pop(t, fps, grief)}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
          <Person color={ROSE} size={130} slump={0.4} /><Person color={ROSE} size={150} slump={0.3} /><Person color={ROSE} size={100} slump={0.5} />
        </div>
      </At>
      <At x={1380} y={380} o={ramp(t, grief + 0.8, 0.4)}><W c={ROSE} s={26}>the grief is not an illusion</W></At>
      <At x={960} y={510} o={ramp(t, chain, 0.5)}><Chain n={9} p={ramp(t, chain, 1.6)} /></At>
      <At x={960} y={590} o={ramp(t, chain + 1.4, 0.5)}><SK c={DIM} s={24} strikeAt={chain + 3.2}>something outside, to absorb what we do</SK></At>
      <Items items={[
        ["and the world answers", 960, 440, <W c={GOLD} s={26}>what we do goes into the world, and the world answers</W>, { until: "So ethics becomes the plain work of arranging conditions" }],
        ["So ethics becomes the plain work of arranging conditions", 960, 690, <W c={TEAL} s={32} serif>ethics: arranging conditions</W>],
      ]} />
      {["a word", "a pause", "a kindness"].map((w, i) => (
        <At key={w} x={620 + i * 340} y={780} s={pop(t, fps, c("a word, a pause, a kindness") + i * 0.4)}><K c={GOLD} s={26}>{w}</K></At>
      ))}
    </AbsoluteFill>
  );
};

const LimitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const not = c("But they do not say how compassion relates to awakening");
  return (
    <AbsoluteFill>
      <Title at={c("Here the author is honest about a limit")} color={ICE}>what is not yet settled</Title>
      <Items items={[
        ["Compassion is the wish to relieve suffering", 960, 200, <W c={ROSE} s={30} serif>compassion: the wish to relieve suffering</W>],
      ]} />
      <At x={480} y={360} s={pop(t, fps, c("Compassion is the wish to relieve suffering") + 0.4)}><Heart size={120} beat={Math.max(0, Math.sin(t * 4))} /></At>
      <Items items={[
        ["His books say that emptiness takes nothing from compassion", 480, 480, <W c={GOLD} s={26}>emptiness takes nothing from it</W>, { d: 0.6 }],
        ["with no fixed self behind it", 480, 540, <W c={DIM} s={24}>felt, with no fixed self behind it</W>],
        ["But they do not say how compassion relates to awakening", 1300, 300, <K c={ICE} s={28}>compassion and awakening?</K>, { pop: true }],
      ]} />
      <At x={1300} y={460} o={ramp(t, not + 0.8, 0.5)}><Open size={140} /></At>
      <Items items={[
        ["Does care arise by itself when emptiness is seen", 1300, 590, <K c={DIM} s={24}>does care arise by itself?</K>, { pop: true }],
        ["Or is it a practice of its own", 1300, 660, <K c={DIM} s={24}>or a practice of its own?</K>, { pop: true }],
        ["the awakened heart that joins wisdom and compassion", 1300, 750, <W c={VIOLET} s={26}>bodhicitta: wisdom and compassion joined</W>],
      ]} />
    </AbsoluteFill>
  );
};

const OpenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const basis = c("as one aspect of the basis");
  const claim = c("claiming that emptiness causes compassion");
  const stays = c("So the question stays open, and the page says so");
  return (
    <AbsoluteFill>
      <At x={960} y={180} o={ramp(t, basis - 1.6, 0.5)}><W c={VIOLET} s={34} serif>Dzogchen: compassion (thugs rje)</W></At>
      <At x={960} y={250} o={ramp(t, basis, 0.5)}><W c={DIM} s={26}>one aspect of the basis</W></At>
      <Items items={[
        ["The author has named it, without yet taking it up", 960, 340, <K c={ICE} s={28}>named · not yet taken up</K>, { pop: true }],
        ["And he leaves the question open", 560, 520, <Open size={150} />, { pop: true }],
        ["And he leaves the question open", 560, 660, <W c={GOLD} s={28}>left open</W>, { d: 0.6 }],
      ]} />
      <At x={1340} y={500} o={ramp(t, claim - 0.6, 0.4)}><SK c={WARM} s={28} strikeAt={claim + 1.4}>emptiness → causes compassion</SK></At>
      <At x={1340} y={580} o={ramp(t, claim + 1.8, 0.4)}><W c={CHALK} s={26}>it does not cause anything</W></At>
      <At x={960} y={770} s={pop(t, fps, stays, 14)} o={ramp(t, stays, 0.5)}><W c={GOLD} s={34} serif>the question stays open, and the page says so</W></At>
    </AbsoluteFill>
  );
};

const TrapsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const much = c("Too much is eternalism");
  const little = c("Too little is nihilism");
  const miss = c("it has aimed past the target");
  return (
    <AbsoluteFill>
      <Title at={c("There are two traps, one on each side")}>two traps</Title>
      <At x={500} y={220} s={pop(t, fps, much)}><K c={WARM} s={32}>too much: eternalism</K></At>
      <At x={1420} y={220} s={pop(t, fps, little)}><K c={VIOLET} s={32}>too little: nihilism</K></At>
      <At x={960} y={460} o={ramp(t, much, 0.5)}><div style={{ width: 4, height: 520, background: `linear-gradient(${CHALK}00, ${CHALK}88, ${CHALK}00)` }} /></At>
      <Items items={[
        ["Kindness needs a real self that means it", 500, 320, <W c={CHALK} s={26} serif>“kindness needs a real self”</W>],
        ["Then good and bad become verdicts on what someone is", 500, 400, <W c={DIM} s={24}>good and bad as verdicts on what someone is</W>],
        ["A cruel person is cruel for ever", 500, 500, <Locked color={RED} />, { pop: true }],
        ["A cruel person is cruel for ever", 500, 620, <W c={RED} s={24}>cruel for ever</W>, { d: 0.4 }],
        ["And my own goodness becomes something to defend", 500, 700, <W c={WARM} s={24}>my goodness, something to defend</W>],
        ["It is all empty, so nothing matters", 1420, 320, <W c={CHALK} s={26} serif>“all empty, so nothing matters”</W>],
        ["Emptiness is used to excuse harm, or to skip care", 1420, 400, <W c={DIM} s={24}>an excuse for harm · a way to skip care</W>],
      ]} />
      <At x={1420} y={560} o={ramp(t, miss - 2.0, 0.5)}><Target p={ramp(t, miss - 0.4, 1.0)} /></At>
      <At x={1420} y={700} o={ramp(t, miss + 0.4, 0.5)}><W c={ROSE} s={26}>cause and result matter less: aimed past</W></At>
    </AbsoluteFill>
  );
};

const InsultScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ins = c("When an insult lodges and repeats");
  const look = c("Then look for what it landed on");
  const parts = c("the moment, the voice and the hearing");
  const echo = (k: number) => ramp(t, ins + 0.8 + k * 0.7, 0.4) * (1 - 0.6 * ramp(t, look, 0.6));
  return (
    <AbsoluteFill>
      <Title at={c("So, in practice")} color={GOLD}>in practice</Title>
      {[0, 1, 2].map(k => (
        <At key={k} x={460 + k * 40} y={300 + k * 70} o={echo(k) * (1 - k * 0.25)}><Bubble color={RED} size={26}>the insult</Bubble></At>
      ))}
      <At x={500} y={560} o={ramp(t, ins + 2.0, 0.4)}><W c={DIM} s={24}>it lodges, and repeats</W></At>
      <Items items={[
        ["it seems to sit in the words themselves", 1340, 280, <W c={WARM} s={28}>it seems to sit in the words</W>],
        ["It still hurts", 1340, 360, <W c={ROSE} s={32} serif>it still hurts</W>],
        ["Then look for what it landed on", 1340, 450, <W c={ICE} s={28}>look for what it landed on</W>],
      ]} />
      {["the moment", "the voice", "the hearing"].map((w, i) => (
        <At key={w} x={1080 + i * 260} y={560} s={pop(t, fps, parts + i * 0.4)}><K c={TEAL} s={26}>{w}</K></At>
      ))}
      <At x={1340} y={660} o={ramp(t, parts + 1.8, 0.4)}><SK c={DIM} s={26} strikeAt={parts + 3.0}>a fixed one it landed on</SK></At>
    </AbsoluteFill>
  );
};

const CruelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cr = c("When someone is cruel, the harm is real");
  const nf = c("And the person is not fixed as cruel");
  const cc = c("Conditions can change");
  const loss = c("The view does not make the loss of someone we love painless");
  const met = c("It can be met by care");
  return (
    <AbsoluteFill>
      <At x={480} y={300} s={pop(t, fps, cr)}><Person color={RED} size={170} /></At>
      <At x={480} y={440} o={ramp(t, cr + 0.6, 0.4)}><W c={RED} s={28}>the harm is real: meet it</W></At>
      <At x={480} y={520} o={ramp(t, nf, 0.4)}><SK c={DIM} s={24} strikeAt={nf + 1.4}>fixed as cruel</SK></At>
      <At x={480} y={610} s={pop(t, fps, cc)}><K c={TEAL} s={28}>conditions can change</K></At>
      <At x={1400} y={300} s={pop(t, fps, loss)}><Person color={ICE} size={170} slump={0.5} /></At>
      <At x={1400} y={440} o={ramp(t, loss + 1.6, 0.4)}><W c={ICE} s={26}>a loss: not made painless</W></At>
      <Items items={[
        ["The pain is real", 1400, 520, <W c={ROSE} s={30} serif>the pain is real</W>],
      ]} />
      <At x={1400} y={640} s={pop(t, fps, met)}><Heart size={100} beat={Math.max(0, Math.sin(t * 3))} /></At>
      <At x={1400} y={740} o={ramp(t, met + 0.4, 0.4)}><W c={GOLD} s={28}>met by care</W></At>
      <Warmth x={1400} y={640} at={met + 0.3} dur={3} color={ROSE} r1={200} />
    </AbsoluteFill>
  );
};

const KindnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("And notice a kindness you receive today");
  const felt = c("It is felt fully");
  const nf = c("No fixed self is found behind it");
  const less = c("And it is no less kind");
  return (
    <AbsoluteFill>
      <Title at={k} color={GOLD}>a kindness, today</Title>
      <At x={760} y={420} s={pop(t, fps, k + 0.4)}><Person color={GOLD} size={180} /></At>
      <At x={1160} y={420} s={pop(t, fps, k + 0.8)}><Person color={TEAL} size={180} /></At>
      <At x={960} y={300} s={pop(t, fps, felt)}><Heart size={110} beat={Math.max(0, Math.sin(t * 4))} /></At>
      <Warmth x={960} y={300} at={felt + 0.3} dur={6} color={GOLD} r1={300} />
      <At x={960} y={580} o={ramp(t, felt + 0.4, 0.4)}><W c={ROSE} s={30} serif>felt fully</W></At>
      <At x={960} y={660} o={ramp(t, nf, 0.4)}><SK c={DIM} s={26} strikeAt={nf + 1.2}>a fixed self behind it</SK></At>
      <At x={960} y={760} o={ramp(t, less, 0.5)}><W c={GOLD} s={36} serif>and no less kind</W></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const back = c("So back to breakfast");
  const harsh = c("The harsh word still sours the day");
  const kind = c("The kind word still carries someone through it");
  const none = c("No self is found behind either one");
  const why = c("That is why care matters more");
  return (
    <AbsoluteFill>
      <Title at={back} color={DIM} size={34}>back to breakfast</Title>
      <At x={960} y={500} o={ramp(t, back, 0.5)}><div style={{ width: 1300, height: 8, borderRadius: 4, background: `${WARM}66`, boxShadow: `0 0 14px ${WARM}66` }} /></At>
      <At x={960} y={440} o={ramp(t, back, 0.5)}><Cup size={110} steam={1} /></At>
      <At x={480} y={300} s={pop(t, fps, harsh)}><Bubble color={RED}>the harsh word</Bubble></At>
      <At x={480} y={420} o={ramp(t, harsh + 0.8, 0.5)}><Cloud size={160} /></At>
      <At x={1440} y={300} s={pop(t, fps, kind)}><Bubble color={GOLD}>the kind word</Bubble></At>
      <At x={1440} y={420} o={ramp(t, kind + 0.8, 0.5)}><Sun size={110} rot={t * 12} /></At>
      <At x={960} y={590} o={ramp(t, none, 0.4)}><SK c={DIM} s={26} strikeAt={none + 1.4}>a self behind either one</SK></At>
      <Items items={[
        ["nothing fixed stands between us and what we do", 960, 670, <W c={TEAL} s={28}>nothing fixed between us and what we do</W>],
      ]} />
      <At x={960} y={780} s={pop(t, fps, why, 14)} o={ramp(t, why, 0.5)}><W c={GOLD} s={46} serif>why care matters more</W></At>
      <Warmth x={960} y={440} at={why + 0.4} dur={8} color={GOLD} r1={240} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [keyof typeof M, string, React.ReactNode][] = [
    ["warm", "A harsh word at breakfast can sour a whole day", <BreakfastScene />],
    ["open", "This is one of the question pages of After Anatta", <PageScene />],
    ["doubt", "Here is the worry", <WorryScene />],
    ["search", "First, the substance reading, stated fairly", <SubstanceScene />],
    ["doubt", "Its mirror image sounds quite different", <MirrorScene />],
    ["whole", "The tradition does not share that idea", <SeedScene />],
    ["web", "Then Nagarjuna turns the worry around", <TurnScene />],
    ["warm", "And his whole work ends with compassion", <EndsScene />],
    ["search", "Now run the four questions", <Q1Scene />],
    ["web", "What does dependency say instead", <Q2Scene />],
    ["vivid", "What is affirmed conventionally", <Q3Scene />],
    ["whole", "Karma here means intentional action", <KarmaScene />],
    ["doubt", "What is never found", <Q4Scene />],
    ["web", "This is Step seven at work", <Step7Scene />],
    ["vivid", "So the word more has a precise sense", <MoreScene />],
    ["search", "A car with no essence still injures", <CarScene />],
    ["open", "Here the author is honest about a limit", <LimitScene />],
    ["web", "as one aspect of the basis", <OpenScene />],
    ["doubt", "There are two traps, one on each side", <TrapsScene />],
    ["search", "So, in practice", <InsultScene />],
    ["warm", "When someone is cruel, the harm is real", <CruelScene />],
    ["vivid", "And notice a kindness you receive today", <KindnessScene />],
    ["whole", "So back to breakfast", <CloseScene />],
  ];
  // the Dzogchen scene starts a little before its first cue (the sentence opens with respelled words)
  const startOf = (cue: string) => cue === "as one aspect of the basis" ? c(cue, 0) - 3.2 : c(cue, 0);
  const moods: Mood[] = [];
  order.forEach(([k, cue], i) => {
    const s = i ? startOf(cue) - 0.6 : 0;
    const next = i + 1 < order.length ? startOf(order[i + 1][1]) - 0.6 : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([, cue, node], i) => {
        const from = i ? startOf(cue) - 0.5 : 0;
        const to = i + 1 < order.length ? startOf(order[i + 1][1]) - 0.9 : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
