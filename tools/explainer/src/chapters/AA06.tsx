// After Anatta 6: The Two Traps (The Logic, Step 6). Explainer drawings timed to the narration.
// Arc: the koan's two easy answers, each a trap -> one root -> the snake held by the head or by the tail ->
// "it is" / "it is not" and the Buddha's middle -> eternalism moves the "it" to a Now, a Witness, a Source; the author's
// own position after I AM -> the test of Step 1 -> nihilism: nothing matters; the opponent who heard "empty" as nothing ->
// relentless negation, the flower and the bell still vivid -> the void is not coherent -> one root: a thing with own-nature,
// two branches -> substance in reverse; the bearer at death -> Tsongkhapa's crossed cure -> the sound heard both ways, the
// stairs -> emptiness held wrongly (the Unfound, the shrug) -> the medicine that leaves -> the middle is not a midpoint ->
// self, object, cause, person -> try it.
// Stance: emptiness is drawn only as the not-finding and as the emptiness OF what appears, never as a ground, container or
// backdrop. Eternalism and nihilism are drawn as two branches from ONE root (a thing with own-nature), not as two ends with
// a middle point between them; the middle is shown as the root not being found. The Now, Witness, Source, soul, Unfound and
// the void are shown only to be struck. The bell, flower, cup, words, fruit, sprout and person stay vivid and are never struck.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan and its two traps
  "This moment ceases as it arises", "Does it arise, or does it cease", "The koan has two easy answers",
  "Say it arises", "finds somewhere for the moment to last", "Say it ceases",
  "nothing really happens", "These are eternalism and nihilism",
  "This is the sixth step of The Logic", "the two wrong answers grow from one root",
  // the snake
  "A snake catcher picks up a snake", "it is safe in his hand", "A beginner grabs it by the tail", "it turns and bites",
  "What decides is the grip", "uses this image for emptiness itself",
    // two wrong ends
  "names the two ends", "It is is the grasping of permanence", "It is not is the view of annihilation",
  "the world mostly leans on these two ideas",
  "For one who sees the arising of the world", "For one who sees its ceasing", "teaches by the middle: dependent arising",
  "That is the koan's own shape",   // eternalism
  "Take the first trap", "But it cannot stay", "So the mind moves the it somewhere that lasts", "A timeless Now",
  "An awareness in which moments come and go", "Or a Source, a ground of being behind everything",
  "The plain form is the soul", "These three are subtler", "This was my own position for years",
  "The taste was genuine", "Turning it into a Self was the mistake",
  "The test is Step one's", "Look for it apart from what it depends on", "Awareness is always awareness of something",
  "A Source, looked for apart", "is not found either",
  // nihilism
  "Now the second trap", "so it was never really there", "Nothing matters, and actions have no results",
  "opponent hears empty in just this way",   "he has misunderstood emptiness itself",
  "Nihilism has a subtle form too", "the disease of relentless negation", "and appearance is a leftover",
  "negation removes only the idea that appearance needed an essence", "Nothing is taken away from the appearing",
  "The red of the flower and the ring of the bell",   "The void is not even coherent", "Try to think of absolute nothing", "a darkness, a silence, yourself looking on",
  // one root
  "Here is the root", "disagree about what befalls the moment", "They agree that there is a moment for it to befall",
  "puts it in one verse", "What exists by its own nature does not cease to exist",   "It existed before and does not exist now",   "Both start from a thing with a nature of its own",   "So the void is not the opposite of substance", "It is substance in reverse",
  "The fear of death shows it", "Survival needs a bearer who carries on",
  "No bearer was ever found, not at death and not now",
  "the remedy for one trap is never the other", "Tsongkhapa puts the cure in one line",
  "appearance dispels the extreme of existence", "emptiness dispels the extreme of non-existence",
  "It is only ever the emptiness of what appears",
  // seen two ways
  "Hear it both ways", "With the logic of substance, I must pick",   "With the logic of dependency, the same sound rings", "No sound stands behind the sounding",
  "Nothing is kept, and nothing is lost", "It is like the stairs of Step one",   // emptiness held wrongly
  "one more place for the snake to bite", "the moment is not found",   "Grasped as something, it becomes the Unfound", "eternalism wearing the name of its cure",
  "Grasped as nothing, it becomes a blank to rest in", "nihilism wearing the same name",
  "those for whom emptiness becomes a view are incurable",
  "Emptiness is a medicine", "compares it to a purgative", "clears the blockage, and then leaves the body too",
  "always the emptiness of something", "It does not lie behind the cup",
  "the cup's not being a cup from its own side",
  // the middle
  "So the middle is not a midpoint", "what is left when nothing is found to bear either label",
  "Nor is it a thinner world", "A harsh word still hurts", "Actions still bear fruit",
  "Not found never means does not happen",
  // beyond the moment
  "The two traps wait wherever an it is assumed", "The self one keeps a soul forever",   "An object one says the cup is really there", "Meanwhile the cup holds tea", "A cause one makes the seed already the sprout",
  "And a person held as fixed",   "No such bearer is found, and the person can really change",
  // try it
  "Listen to a sound and ask", "Notice where each answer wants to put the moment",
  "Then look for the it both answers share", "check whether cause and result now matter less to you",
  "the snake is held by the tail",
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

/** The swing of a bell struck at `at`. */
const swingAt = (t: number, at: number) => 8 * Math.sin((t - at) * 5) * Math.exp(-Math.max(0, t - at) * 0.6) * (t > at ? 1 : 0);

const Cup: React.FC<{ color?: string; size?: number; tea?: number }> = ({ color = ICE, size = 150, tea = 0 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 150 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    {tea > 0 && <path d="M27 44 L104 44 L100 100 Q65 112 30 100 Z" fill="#C98A3E" opacity={0.75 * tea} />}
    <path d="M20 20 L110 20 L100 100 Q65 112 30 100 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M108 38 Q140 40 134 64 Q128 84 103 80" fill="none" stroke={color} strokeWidth={5} />
  </svg>
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

/** A small tree with fruit: actions bearing fruit. */
const Fruit: React.FC = () => (
  <svg width={170} height={190} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M85 186 L85 110 M85 130 L60 110 M85 120 L112 98" stroke="#b07a45" strokeWidth={8} strokeLinecap="round" fill="none" />
    <ellipse cx={85} cy={72} rx={72} ry={58} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} />
    {[[55, 70], [100, 50], [115, 92], [70, 100]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={`${RED}cc`} stroke={RED} strokeWidth={3} />)}
  </svg>
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

/** A seed and the sprout that comes from it (grow 0..1), joined by a dashed line: neither the same, nor cut off. */
const SeedSprout: React.FC<{ grow: number }> = ({ grow }) => (
  <svg width={200} height={130} viewBox="0 0 200 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <ellipse cx={40} cy={100} rx={22} ry={14} fill="#b07a4566" stroke="#c99060" strokeWidth={4} />
    <path d={`M150 118 L150 ${118 - 70 * grow}`} stroke={GREEN} strokeWidth={5} strokeLinecap="round" />
    <path d={`M150 ${118 - 50 * grow} Q122 ${100 - 60 * grow} 132 ${110 - 70 * grow} Q146 ${108 - 52 * grow} 150 ${118 - 50 * grow} Z`}
      fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={grow} />
    <path d="M66 100 Q100 76 136 100" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="6 5" opacity={grow} />
  </svg>
);

/** A red flower on a stem. */
const Flower: React.FC<{ size?: number }> = ({ size = 170 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 120 156" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${RED})` }}>
      <path d="M60 70 Q56 110 62 154" stroke={GREEN} strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M60 118 Q84 100 96 112 Q80 126 60 118 Z" fill={`${GREEN}66`} stroke={GREEN} strokeWidth={3} />
      <g transform={`rotate(${Math.sin(t * 0.8) * 4} 60 56)`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse key={i} cx={60} cy={34} rx={14} ry={24} fill={`${RED}cc`} stroke={RED} strokeWidth={3} transform={`rotate(${i * 60} 60 56)`} />
        ))}
        <circle cx={60} cy={56} r={11} fill={GOLD} stroke="#FFF3D1" strokeWidth={2} />
      </g>
    </svg>
  );
};

/** A snake. held = "head": calm, held just behind the head. held = "tail": its head curls back towards the hand (bite 0..1). */
const Snake: React.FC<{ held: "head" | "tail"; draw: number; bite?: number; color?: string }> = ({ held, draw, bite = 0, color = GREEN }) => {
  const { t } = useT();
  const w = Math.sin(t * 2.4) * 8;
  if (held === "head") {
    const d = `M70 60 C 120 ${20 + w}, 170 ${100 - w}, 220 60 S 320 ${20 + w}, 370 60 S 440 ${96 - w}, 470 74`;
    return (
      <svg width={500} height={160} viewBox="0 0 500 160" style={{ overflow: "visible" }}>
        <DrawPath d={d} p={draw} color={color} width={18} len={600} />
        <g opacity={draw}>
          <ellipse cx={42} cy={60} rx={30} ry={20} fill={`${color}aa`} stroke={color} strokeWidth={4} />
          <circle cx={32} cy={52} r={4} fill="#000" />
          <path d="M12 62 L0 58 M12 62 L0 68" stroke={ROSE} strokeWidth={3} strokeLinecap="round" />
        </g>
      </svg>
    );
  }
  // held by the tail at the left; the body runs right, then curls back and the head comes round to the hand
  const hx = 300 - 220 * bite, hy = -60 + 70 * bite;
  const d = `M40 70 C 140 ${40 + w}, 240 ${110 - w}, 340 70 C 430 30, 420 -70, 340 -80 C ${hx + 80} -90, ${hx + 40} ${hy - 10}, ${hx + 24} ${hy}`;
  return (
    <svg width={500} height={160} viewBox="0 0 500 160" style={{ overflow: "visible" }}>
      <DrawPath d={d} p={draw} color={color} width={18} len={1100} />
      <g opacity={draw > 0.9 ? 1 : 0}>
        <ellipse cx={hx} cy={hy} rx={30} ry={20} fill={`${color}aa`} stroke={color} strokeWidth={4} transform={`rotate(${30 + 40 * bite} ${hx} ${hy})`} />
        <circle cx={hx - 6} cy={hy - 8} r={4} fill="#000" />
        {bite > 0.6 && <path d={`M${hx - 24} ${hy + 14} L${hx - 34} ${hy + 30} M${hx - 14} ${hy + 18} L${hx - 18} ${hy + 34}`} stroke="#FFF" strokeWidth={4} strokeLinecap="round" />}
      </g>
    </svg>
  );
};

/** A small capsule: the medicine. */
const Pill: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <div style={{ width: 150, height: 60, borderRadius: 30, display: "flex", overflow: "hidden", border: `3px solid ${color}`, boxShadow: `0 0 24px ${color}88` }}>
    <div style={{ flex: 1, background: `${color}88` }} /><div style={{ flex: 1, background: "#F1ECE033" }} />
  </div>
);

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("The koan has two easy answers");
  const trap = c("The koan has two easy answers") + 2.0;
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={58} speed={0.035} />
      </At>
      <At x={960} y={260} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={58} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      <Svg>
        <DrawPath d="M960 330 C 960 400, 640 400, 560 470" p={ramp(t, two, 0.9)} color={DIM} width={4} len={600} />
        <DrawPath d="M960 330 C 960 400, 1280 400, 1360 470" p={ramp(t, two + 0.4, 0.9)} color={DIM} width={4} len={600} />
      </Svg>
      <Items items={[
        ["Say it arises", 560, 510, <K c={GREEN} s={32}>“it arises”</K>, { pop: true }],
        ["finds somewhere for the moment to last", 560, 600, <W c={DIM} s={26}>somewhere for it to last</W>],
        ["Say it ceases", 1360, 510, <K c={ROSE} s={32}>“it ceases”</K>, { pop: true }],
        ["nothing really happens", 1360, 600, <W c={DIM} s={26}>nothing really happens</W>],
        ["These are eternalism and nihilism", 560, 690, <W c={WARM} s={38} serif>eternalism</W>],
        ["These are eternalism and nihilism", 1360, 690, <W c={WARM} s={38} serif>nihilism</W>, { d: 0.6 }],
      ]} />
      <At x={960} y={510} o={ramp(t, trap, 0.5)}><W c={WARM} s={30}>each one a trap</W></At>
    </AbsoluteFill>
  );
};

const RootIntroScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const r = c("the two wrong answers grow from one root");
  return (
    <AbsoluteFill>
      <Title at={c("This is the sixth step of The Logic")}>The Logic · Step 6</Title>
      <Items items={[
        ["This is the sixth step of The Logic", 960, 190, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.2 }],
      ]} />
      <Svg>
        <DrawPath d="M960 700 L960 520" p={ramp(t, r, 0.6)} color={WARM} width={8} len={200} />
        <DrawPath d="M960 520 C 960 430, 760 400, 640 330" p={ramp(t, r + 0.5, 0.8)} color={WARM} width={6} len={450} />
        <DrawPath d="M960 520 C 960 430, 1160 400, 1280 330" p={ramp(t, r + 0.7, 0.8)} color={WARM} width={6} len={450} />
      </Svg>
      <Items items={[
        ["the two wrong answers grow from one root", 640, 290, <K c={GREEN} s={28}>“it arises”</K>, { d: 1.2, pop: true }],
        ["the two wrong answers grow from one root", 1280, 290, <K c={ROSE} s={28}>“it ceases”</K>, { d: 1.4, pop: true }],
        ["the two wrong answers grow from one root", 960, 750, <W c={WARM} s={34} serif>one root</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const SnakeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("A snake catcher picks up a snake");
  const b = c("A beginner grabs it by the tail");
  const bite = ramp(t, c("it turns and bites"), 0.7);
  return (
    <AbsoluteFill>
      <Title at={a}>the snake</Title>
      <At x={560} y={300} o={ramp(t, a, 0.4)}><Snake held="head" draw={ramp(t, a + 0.2, 1.2)} /></At>
      <At x={400} y={310} o={ramp(t, a + 0.8, 0.4)}><Hand closed={1} color={CHALK} /></At>
      <At x={1380} y={330} o={ramp(t, b, 0.4)}><Snake held="tail" draw={ramp(t, b + 0.2, 1.4)} bite={bite} /></At>
      <At x={1170} y={330} o={ramp(t, b + 0.4, 0.4)}><Hand closed={1} color={CHALK} /></At>
      <Items items={[
        ["it is safe in his hand", 560, 470, <K c={GREEN} s={28}>held behind the head: safe</K>, { pop: true }],
        ["it turns and bites", 1380, 470, <K c={RED} s={28}>held by the tail: it bites</K>, { pop: true, d: 0.5 }],
        ["it turns and bites", 960, 580, <W c={CHALK} s={32}>same snake, same hand</W>, { d: 2.0 }],
        ["What decides is the grip", 960, 650, <W c={GOLD} s={42} serif>the grip decides</W>],
        ["uses this image for emptiness itself", 960, 740, <K c={VIOLET} s={28}>Nāgārjuna: emptiness itself</K>, { pop: true }],
        ["uses this image for emptiness itself", 960, 820, <W c={ROSE} s={28}>seen wrongly, it ruins the one who sees it</W>, { d: 2.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const EndsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mid = c("teaches by the middle: dependent arising");
  const arise = c("For one who sees the arising of the world");
  const cease = c("For one who sees its ceasing");
  return (
    <AbsoluteFill>
      <Title at={c("names the two ends")}>two wrong ends</Title>
      <At x={520} y={260} s={pop(t, fps, c("It is is the grasping of permanence"))}><SK c={WARM} s={34} strikeAt={cease + 1.4}>“it is”</SK></At>
      <At x={1400} y={260} s={pop(t, fps, c("It is not is the view of annihilation"))}><SK c={WARM} s={34} strikeAt={arise + 1.6}>“it is not”</SK></At>
      <Items items={[
        ["It is is the grasping of permanence", 520, 340, <W c={DIM} s={26}>grasping at permanence</W>, { d: 0.6 }],
        ["It is not is the view of annihilation", 1400, 340, <W c={DIM} s={26}>the view of annihilation</W>, { d: 0.6 }],
        ["It is not is the view of annihilation", 960, 300, <W c={CHALK} s={28}>stand on neither</W>, { d: 2.4 }],
        ["the world mostly leans on these two ideas", 960, 410, <K c={GOLD} s={26}>the Buddha: the world leans on these two</K>, { pop: true }],
        ["For one who sees the arising of the world", 1400, 470, <W c={GREEN} s={26}>seeing the arising undoes “it is not”</W>],
        ["For one who sees its ceasing", 520, 470, <W c={ROSE} s={26}>seeing the ceasing undoes “it is”</W>],
        ["teaches by the middle: dependent arising", 960, 590, <W c={TEAL} s={42} serif>dependent arising</W>, { d: 0.5 }],
        ["That is the koan's own shape", 960, 690, <W c={CHALK} s={28}>the koan holds both in one moment</W>],
        ["That is the koan's own shape", 960, 770, <W c={WARM} s={28}>trouble: one half, taken as a fact about an “it”</W>, { d: 2.4 }],
      ]} />
      <Svg>
        <DrawPath d="M1380 500 Q1200 560 1060 580" p={ramp(t, mid, 0.6)} color={TEAL} width={3} len={400} glow={false} />
        <DrawPath d="M540 500 Q720 560 860 580" p={ramp(t, mid, 0.6)} color={TEAL} width={3} len={400} glow={false} />
      </Svg>
    </AbsoluteFill>
  );
};

const EternalScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const take = c("Take the first trap");
  const move = c("So the mind moves the it somewhere that lasts");
  const fade = ramp(t, c("But it cannot stay"), 1.2);
  const slide = ramp(t, move, 1.2);
  const now = c("A timeless Now"), aw = c("An awareness in which moments come and go"), src = c("Or a Source, a ground of being behind everything");
  return (
    <AbsoluteFill>
      <Title at={take} color={WARM}>trap one: “it arises”</Title>
      <At x={560} y={380} o={ramp(t, take, 0.5) * (1 - 0.6 * fade)}>
        <div style={{ width: 200, height: 120, borderRadius: 14, border: `4px solid ${GOLD}`, background: `${GOLD}22`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={30}>moment</W></div>
      </At>
      <At x={560 + 520 * slide} y={380} o={ramp(t, move, 0.4)}><K c={WARM} s={36}>“it”</K></At>
      <Flow x1={690} y1={380} x2={1020} y2={380} color={WARM} p={ramp(t, move, 0.8)} />
      <Items items={[
        ["But it cannot stay", 560, 500, <W c={DIM} s={26}>it cannot stay</W>],
        ["So the mind moves the it somewhere that lasts", 1300, 300, <W c={WARM} s={28}>somewhere that lasts</W>, { d: 0.6 }],
      ]} />
      <At x={1300} y={460} o={ramp(t, now, 0.4)}><SK c={VIOLET} s={28} strikeAt={1e9}>a timeless Now</SK></At>
      <At x={1300} y={540} o={ramp(t, aw, 0.4)}><SK c={VIOLET} s={28} strikeAt={1e9}>an awareness: the Witness</SK></At>
      <At x={1300} y={620} o={ramp(t, src, 0.4)}><SK c={VIOLET} s={28} strikeAt={1e9}>a Source behind everything</SK></At>
    </AbsoluteFill>
  );
};

const AuthorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const soul = c("The plain form is the soul");
  const mine = c("This was my own position for years");
  const mis = c("Turning it into a Self was the mistake");
  return (
    <AbsoluteFill>
      <Title at={soul}>the plain form, and the subtle ones</Title>
      <At x={420} y={340} o={ramp(t, soul, 0.5)}><Person color={DIM} size={170} /></At>
      <Items items={[
        ["The plain form is the soul", 420, 470, <K c={DIM} s={26}>a soul that lasts</K>, { d: 0.5 }],
        ["These three are subtler", 420, 560, <W c={VIOLET} s={26}>subtler: Now · Witness · Source</W>],
        ["This was my own position for years", 1150, 230, <W c={DIM} s={26}>the author, after I AM</W>],
      ]} />
      <At x={1180} y={330} o={ramp(t, mine, 0.4)}>
        <div style={{ width: 1000, fontFamily: SERIF, fontWeight: 600, fontSize: 38, color: CHALK, whiteSpace: "normal", lineHeight: 1.3, textShadow: `0 0 18px ${GOLD}88` }}>
          “This was my own position for years after the realisation of I AM.”
        </div>
      </At>
      <Items items={[
        ["This was my own position for years", 1150, 440, <W c={GOLD} s={30} serif>presence: real, unmistakable</W>, { d: 4.2 }],
        ["The taste was genuine", 1150, 520, <K c={GOLD} s={30}>the taste was genuine</K>, { pop: true }],
      ]} />
      <At x={1150} y={620} o={ramp(t, mis, 0.4)}><SK c={WARM} s={32} strikeAt={mis + 1.2}>a Self, on its own side</SK></At>
      <Items items={[
        ["Turning it into a Self was the mistake", 1150, 710, <W c={WARM} s={30} serif>turning it into a Self: the mistake</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const TestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const test = c("Look for it apart from what it depends on");
  const knowing = c("Awareness is always awareness of something") + 3.2;
  const either = c("is not found either");
  const b = c("Awareness is always awareness of something");
  return (
    <AbsoluteFill>
      <Title at={c("The test is Step one's")} color={TEAL}>the test of Step 1</Title>
      <At x={960} y={210} s={pop(t, fps, test, 14)} o={ramp(t, test, 0.4)}><W c={GOLD} s={40} serif>look for it apart from what it depends on</W></At>
      <At x={560} y={420} s={pop(t, fps, b)}><Bell size={130} swing={swingAt(t, b + 0.3)} /></At>
      <Sound x={560} y={430} at={b + 0.4} dur={5} r1={220} />
      <Items items={[
        ["Awareness is always awareness of something", 560, 580, <W c={ICE} s={26}>awareness: of something, through something</W>, { d: 0.4 }],
      ]} />
      <At x={560} y={680} o={ramp(t, knowing, 0.4)}><SK c={DIM} s={26} strikeAt={knowing + 1.4}>a Witness behind the knowing</SK></At>
      <At x={1360} y={420} o={ramp(t, c("A Source, looked for apart"), 0.4)}><SK c={DIM} s={30} strikeAt={either + 0.4}>a Source</SK></At>
      <Items items={[
        ["A Source, looked for apart", 1360, 520, <W c={DIM} s={26}>apart from what it is said to produce</W>, { d: 0.6 }],
        ["is not found either", 1360, 610, <W c={TEAL} s={30}>not found either</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NihilScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sec = c("Now the second trap");
  const drop = ramp(t, c("so it was never really there"), 1.4);
  return (
    <AbsoluteFill>
      <Title at={sec} color={WARM}>trap two: “it ceases”</Title>
      <At x={560} y={330 + 260 * drop} o={ramp(t, sec, 0.5) * (1 - drop * 0.85)} s={1 - drop * 0.5}>
        <div style={{ width: 200, height: 120, borderRadius: 14, border: `4px solid ${GOLD}`, background: `${GOLD}22`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={30}>moment</W></div>
      </At>
      <At x={560} y={640} o={ramp(t, c("so it was never really there"), 0.5)}>
        <div style={{ width: 300, height: 60, borderRadius: "50%", background: "radial-gradient(#000, #00000000 70%)", boxShadow: `0 0 30px ${VIOLET}44` }} />
      </At>
      <Items items={[
        ["so it was never really there", 560, 740, <SK c={DIM} s={26} strikeAt={1e9}>never really there</SK>, { d: 0.8 }],
        ["Nothing matters, and actions have no results", 1340, 260, <SK c={DIM} s={28} strikeAt={1e9}>nothing matters</SK>],
        ["Nothing matters, and actions have no results", 1340, 340, <SK c={DIM} s={28} strikeAt={1e9}>actions have no results</SK>, { d: 0.9 }],
        ["opponent hears empty in just this way", 1340, 450, <W c={CHALK} s={28}>the opponent hears: empty = nothing</W>],
        ["opponent hears empty in just this way", 1340, 530, <K c={ROSE} s={26}>“emptiness destroys the path”</K>, { pop: true, d: 2.2 }],
        ["he has misunderstood emptiness itself", 1340, 640, <W c={GOLD} s={32} serif>he has misunderstood emptiness</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NegationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dis = c("the disease of relentless negation");
  const red = c("The red of the flower and the ring of the bell");
  const leftover = c("and appearance is a leftover");
  const vivid = ramp(t, c("Nothing is taken away from the appearing"), 0.8);
  return (
    <AbsoluteFill>
      <Title at={c("Nihilism has a subtle form too")}>a subtle nihilism</Title>
      <At x={960} y={200} s={pop(t, fps, dis)}><K c={WARM} s={30}>the disease of relentless negation</K></At>
      <At x={620} y={430} o={ramp(t, dis + 0.6, 0.5) * (0.35 + 0.65 * Math.max(vivid, 1 - ramp(t, leftover, 0.6)))}
        s={pop(t, fps, red)}><Flower size={150} /></At>
      <At x={1300} y={420} o={ramp(t, dis + 0.6, 0.5) * (0.35 + 0.65 * Math.max(vivid, 1 - ramp(t, leftover, 0.6)))}>
        <Bell size={150} swing={swingAt(t, red + 1.6)} />
      </At>
      <Sound x={1300} y={430} at={red + 1.8} dur={5} r1={260} />
      <Items items={[
        ["and appearance is a leftover", 960, 300, <SK c={DIM} s={26} strikeAt={c("negation removes only the idea that appearance needed an essence") + 1.6}>appearance: a leftover</SK>],
        ["negation removes only the idea that appearance needed an essence", 960, 620, <W c={CHALK} s={28}>negation removes only the idea of an essence</W>],
        ["Nothing is taken away from the appearing", 960, 690, <W c={GREEN} s={30}>nothing taken from the appearing</W>],
        ["The red of the flower and the ring of the bell", 960, 780, <W c={GOLD} s={40} serif>empty and vivid at once</W>, { d: 2.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const VoidScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tr = c("Try to think of absolute nothing");
  const sth = c("a darkness, a silence, yourself looking on");
  return (
    <AbsoluteFill>
      <Title at={c("The void is not even coherent")}>the void is not even coherent</Title>
      <At x={960} y={420} o={ramp(t, tr, 0.6)}>
        <div style={{ width: 520, height: 320, borderRadius: 24, border: `3px dashed ${DIM}`, background: "#00000055" }} />
      </At>
      <Items items={[
        ["Try to think of absolute nothing", 960, 230, <SK c={DIM} s={28} strikeAt={sth + 2.4}>absolute nothing</SK>, { d: 0.4 }],
        ["a darkness, a silence, yourself looking on", 820, 380, <W c={VIOLET} s={28}>a darkness</W>],
        ["a darkness, a silence, yourself looking on", 1100, 440, <W c={ICE} s={28}>a silence</W>, { d: 0.6 }],
      ]} />
      <At x={960} y={520} o={ramp(t, sth + 1.2, 0.5)}><Person color={TEAL} size={110} /></At>
      <Items items={[
        ["a darkness, a silence, yourself looking on", 960, 640, <W c={TEAL} s={26}>yourself looking on</W>, { d: 1.4 }],
        ["a darkness, a silence, yourself looking on", 960, 740, <W c={GOLD} s={32} serif>you think of something</W>, { d: 2.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const RootScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const root = c("Here is the root");
  const agree = c("They agree that there is a moment for it to befall");
  const v1 = c("What exists by its own nature does not cease to exist");
  const v2 = c("It existed before and does not exist now");
  const both = c("Both start from a thing with a nature of its own");
  return (
    <AbsoluteFill>
      <Title at={root} color={WARM}>one root</Title>
      <Items items={[
        ["disagree about what befalls the moment", 960, 200, <W c={DIM} s={28}>they disagree: what befalls it</W>, { until: "They agree that there is a moment for it to befall" }],
        ["They agree that there is a moment for it to befall", 960, 200, <W c={CHALK} s={30}>they agree: there is an “it”</W>],
      ]} />
      <At x={960} y={700} s={pop(t, fps, agree + 0.4)}><K c={WARM} s={30}>a thing with own-nature</K></At>
      <Svg>
        <DrawPath d="M960 660 L960 560" p={ramp(t, v1 - 0.2, 0.5)} color={WARM} width={6} len={120} />
        <DrawPath d="M960 560 C 960 480, 700 470, 560 410" p={ramp(t, v1, 0.8)} color={WARM} width={5} len={500} />
        <DrawPath d="M960 560 C 960 480, 1220 470, 1360 410" p={ramp(t, v2, 0.8)} color={WARM} width={5} len={500} />
      </Svg>
      <Items items={[
        ["puts it in one verse", 960, 270, <K c={GOLD} s={26}>Nāgārjuna, in one verse</K>, { pop: true }],
        ["What exists by its own nature does not cease to exist", 560, 330, <W c={CHALK} s={26}>“does not cease to exist”</W>, { d: 0.6 }],
        ["What exists by its own nature does not cease to exist", 560, 380, <K c={GREEN} s={28}>“it is”: eternalism</K>, { pop: true, d: 3.0 }],
        ["It existed before and does not exist now", 1360, 330, <W c={CHALK} s={26}>“existed before, not now”</W>, { d: 0.6 }],
        ["It existed before and does not exist now", 1360, 380, <K c={ROSE} s={28}>“it is not”: nihilism</K>, { pop: true, d: 2.8 }],
        ["Both start from a thing with a nature of its own", 960, 772, <W c={WARM} s={28}>both start here</W>],
        ["Both start from a thing with a nature of its own", 960, 828, <W c={DIM} s={26}>they differ only in what happens to it</W>, { d: 3.0 }],
      ]} />
      <At x={960} y={620} o={ramp(t, both, 0.5)}><Glow color={WARM} size={28}>↑</Glow></At>
    </AbsoluteFill>
  );
};

const ReverseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rev = c("It is substance in reverse");
  const death = c("The fear of death shows it");
  const none = c("No bearer was ever found, not at death and not now");
  return (
    <AbsoluteFill>
      <Title at={c("So the void is not the opposite of substance")}>substance in reverse</Title>
      <At x={760} y={270} s={pop(t, fps, rev)}><K c={WARM} s={30}>a thing</K></At>
      <At x={1160} y={270} s={pop(t, fps, rev + 0.6)}><SK c={DIM} s={30} strikeAt={1e9}>wiped out</SK></At>
      <Flow x1={850} y1={270} x2={1060} y2={270} color={WARM} p={ramp(t, rev + 0.4, 0.6)} />
      <Items items={[
        ["It is substance in reverse", 960, 360, <W c={DIM} s={26}>to be wiped out, it must first have stood on its own</W>, { d: 1.4 }],
        ["The fear of death shows it", 960, 450, <W c={CHALK} s={32} serif>the fear of death</W>],
      ]} />
      <At x={960} y={620} o={ramp(t, death + 0.4, 0.5)}><Person color={DIM} size={150} dashed /></At>
      <Items items={[
        ["Survival needs a bearer who carries on", 560, 620, <K c={GREEN} s={26}>survival: a bearer carries on</K>, { pop: true }],
        ["Survival needs a bearer who carries on", 1360, 620, <K c={ROSE} s={26}>destruction: a bearer wiped out</K>, { pop: true, d: 2.4 }],
        ["No bearer was ever found, not at death and not now", 960, 780, <W c={GOLD} s={32} serif>no bearer found, at death or now</W>, { d: 0.6 }],
      ]} />
      <Crossed x={960} y={620} at={none + 0.3} size={50} />
    </AbsoluteFill>
  );
};

const CureScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ap = c("appearance dispels the extreme of existence");
  const em = c("emptiness dispels the extreme of non-existence");
  return (
    <AbsoluteFill>
      <Title at={c("the remedy for one trap is never the other")}>the cure is never the other trap</Title>
      <Items items={[
        ["Tsongkhapa puts the cure in one line", 960, 200, <K c={GOLD} s={26}>Tsongkhapa</K>, { pop: true }],
        ["Tsongkhapa puts the cure in one line", 560, 330, <K c={TEAL} s={30}>appearance</K>, { d: 0.6 }],
        ["Tsongkhapa puts the cure in one line", 560, 560, <K c={VIOLET} s={30}>emptiness</K>, { d: 0.9 }],
      ]} />
      <At x={1360} y={330} o={ramp(t, ap - 0.2, 0.4)}><SK c={DIM} s={28} strikeAt={ap + 1.6}>“it is”</SK></At>
      <At x={1360} y={560} o={ramp(t, em - 0.2, 0.4)}><SK c={DIM} s={28} strikeAt={em + 1.8}>“it is not”</SK></At>
      <Flow x1={680} y1={340} x2={1240} y2={550} color={TEAL} p={ramp(t, ap + 0.4, 0.8)} />
      <Flow x1={680} y1={550} x2={1240} y2={340} color={VIOLET} p={ramp(t, em + 0.4, 0.8)} />
      <Items items={[
        ["appearance dispels the extreme of existence", 960, 270, <W c={DIM} s={24}>appearance dispels “it is”</W>, { d: 0.2 }],
        ["emptiness dispels the extreme of non-existence", 960, 630, <W c={DIM} s={24}>emptiness dispels “it is not”</W>, { d: 0.2 }],
        ["It is only ever the emptiness of what appears", 960, 760, <W c={GOLD} s={36} serif>no void: the emptiness of what appears</W>],
      ]} />
    </AbsoluteFill>
  );
};

const HearScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("With the logic of substance, I must pick");
  const dep = c("With the logic of dependency, the same sound rings");
  const st = c("It is like the stairs of Step one");
  let stairs = "M1480 820 L1520 820";
  for (let k = 0; k < 4; k++) stairs += ` L${1520 + k * 60} ${780 - k * 40} L${1580 + k * 60} ${780 - k * 40}`;
  const up = ramp(t, st + 0.6, 2.4);
  const i = Math.min(3, Math.floor(up * 4));
  return (
    <AbsoluteFill>
      <Title at={c("Hear it both ways")}>the sound, heard both ways</Title>
      <At x={560} y={200} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>substance</K></At>
      <At x={560} y={360} s={pop(t, fps, sub + 0.2)}><Bell size={130} swing={swingAt(t, sub + 0.4)} /></At>
      <Items items={[
        ["With the logic of substance, I must pick", 400, 520, <SK c={DIM} s={24} strikeAt={1e9}>kept somewhere</SK>, { d: 1.0 }],
        ["With the logic of substance, I must pick", 720, 520, <SK c={DIM} s={24} strikeAt={1e9}>dropped into nothing</SK>, { d: 3.2 }],
      ]} />
      <At x={1360} y={200} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>dependency</K></At>
      <At x={1360} y={360} s={pop(t, fps, dep + 0.2)}><Bell size={130} swing={swingAt(t, dep + 0.4)} /></At>
      <Sound x={1360} y={370} at={dep + 0.6} dur={9} r1={280} />
      <Items items={[
        ["No sound stands behind the sounding", 1360, 520, <SK c={DIM} s={24} strikeAt={c("No sound stands behind the sounding") + 1.6}>a sound behind the sounding</SK>],
        ["Nothing is kept, and nothing is lost", 960, 620, <W c={GOLD} s={36} serif>nothing kept, nothing lost</W>],
        ["It is like the stairs of Step one", 1100, 760, <W c={CHALK} s={26}>up or down: from where you stand</W>, { d: 0.4 }],
        ["It is like the stairs of Step one", 1100, 820, <W c={GREEN} s={26}>still really climbed</W>, { d: 3.8 }],
      ]} />
      <Svg><DrawPath d={stairs} p={ramp(t, st, 1.0)} color={CHALK} width={5} len={800} /></Svg>
      <At x={1550 + i * 60} y={741 - i * 40} o={ramp(t, st + 0.4, 0.4)} s={0.6}>
        <Walker step={up < 1 && t > st + 0.6 ? t * 9 : 0} />
      </At>
    </AbsoluteFill>
  );
};

const HeldWrongScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const more = c("one more place for the snake to bite");
  const un = c("Grasped as something, it becomes the Unfound");
  const blank = c("Grasped as nothing, it becomes a blank to rest in");
  return (
    <AbsoluteFill>
      <Title at={more} color={WARM}>emptiness, held wrongly</Title>
      <At x={960} y={260} o={ramp(t, more, 0.5) * 0.9} s={0.55}><Snake held="tail" draw={ramp(t, more + 0.2, 1.2)} bite={ramp(t, more + 1.6, 0.6)} color={GREEN} /></At>
      <Items items={[
        ["the moment is not found", 960, 380, <K c={TEAL} s={30}>“not found”</K>, { pop: true }],
        ["the moment is not found", 960, 450, <W c={DIM} s={26}>grasped by either end</W>, { d: 2.0 }],
      ]} />
      <At x={540} y={560} o={ramp(t, un, 0.4)}><SK c={VIOLET} s={28} strikeAt={c("eternalism wearing the name of its cure") + 1.6}>the Unfound: an openness behind</SK></At>
      <At x={1380} y={560} o={ramp(t, blank, 0.4)}><SK c={DIM} s={28} strikeAt={c("nihilism wearing the same name") + 1.4}>“it is all empty anyway”</SK></At>
      <Items items={[
        ["eternalism wearing the name of its cure", 540, 650, <W c={WARM} s={26}>eternalism, in the cure's name</W>],
        ["nihilism wearing the same name", 1380, 650, <W c={WARM} s={26}>nihilism, in the same name</W>],
        ["those for whom emptiness becomes a view are incurable", 960, 770, <W c={GOLD} s={32} serif>emptiness held as a view: incurable</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MedicineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const med = c("Emptiness is a medicine");
  const leave = ramp(t, c("clears the blockage, and then leaves the body too") + 0.8, 1.4);
  const cup = c("It does not lie behind the cup");
  return (
    <AbsoluteFill>
      <Title at={med} color={TEAL}>a medicine that leaves</Title>
      <At x={560 + 260 * leave} y={330 - 80 * leave} s={pop(t, fps, med)} o={1 - leave * 0.9}><Pill /></At>
      <Items items={[
        ["compares it to a purgative", 560, 230, <K c={GOLD} s={26}>Candrakīrti: a purgative</K>, { pop: true }],
        ["clears the blockage, and then leaves the body too", 560, 430, <W c={TEAL} s={28}>clears the blockage, then leaves</W>],
        ["clears the blockage, and then leaves the body too", 560, 520, <SK c={DIM} s={26} strikeAt={1e9}>held as “the truth”: a new illness</SK>, { d: 3.0 }],
      ]} />
      <At x={1360} y={360} s={pop(t, fps, c("always the emptiness of something"))}><Cup color={ICE} size={190} tea={1} /></At>
      <At x={1360} y={360} o={ramp(t, cup, 0.4) * (1 - ramp(t, cup + 2.2, 0.5))}>
        <div style={{ width: 360, height: 280, borderRadius: 30, border: `3px dashed ${DIM}`, background: `${VIOLET}11` }} />
      </At>
      <Crossed x={1520} y={250} at={cup + 1.4} size={36} />
      <Items items={[
        ["always the emptiness of something", 1360, 520, <W c={CHALK} s={28}>always the emptiness of something</W>, { d: 0.4 }],
        ["It does not lie behind the cup", 1360, 600, <SK c={DIM} s={24} strikeAt={cup + 1.4}>emptiness behind the cup</SK>],
        ["the cup's not being a cup from its own side", 1360, 690, <W c={GOLD} s={30} serif>the cup, not a cup from its own side</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MiddleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mp = c("So the middle is not a midpoint");
  return (
    <AbsoluteFill>
      <Title at={mp}>the middle is not a midpoint</Title>
      <Svg>
        <DrawPath d="M460 260 L1460 260" p={ramp(t, mp, 0.8)} color={DIM} width={3} len={1000} glow={false} />
      </Svg>
      <At x={460} y={220} o={ramp(t, mp, 0.5)}><W c={GREEN} s={26}>“is”</W></At>
      <At x={1460} y={220} o={ramp(t, mp, 0.5)}><W c={ROSE} s={26}>“is not”</W></At>
      <At x={960} y={260} o={ramp(t, mp + 0.6, 0.4)}><div style={{ width: 22, height: 22, borderRadius: 11, background: DIM }} /></At>
      <Crossed x={960} y={260} at={mp + 1.6} size={30} />
      <Items items={[
        ["what is left when nothing is found to bear either label", 960, 360, <W c={TEAL} s={32} serif>no “it” found to bear either label</W>, { d: 0.6 }],
        ["Nor is it a thinner world", 960, 450, <W c={CHALK} s={28}>not a thinner world</W>],
        ["A harsh word still hurts", 560, 560, <K c={RED} s={28}>a harsh word still hurts</K>, { pop: true }],
        ["A harsh word still hurts", 1360, 560, <K c={GREEN} s={28}>a kind one still helps</K>, { pop: true, d: 1.4 }],
        ["Not found never means does not happen", 960, 790, <W c={GOLD} s={36} serif>“not found” never means “does not happen”</W>],
      ]} />
      <At x={960} y={640} s={pop(t, fps, c("Actions still bear fruit"))}><Fruit /></At>
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const self = c("The self one keeps a soul forever");
  const obj = c("An object one says the cup is really there");
  const cause = c("A cause one makes the seed already the sprout");
  const per = c("And a person held as fixed");
  const fin = c("No such bearer is found, and the person can really change");
  const col = (x: number, at: number, label: string, ka: string, kb: string, node: React.ReactNode, ok: string, okAt: number) => (
    <React.Fragment key={label}>
      <At x={x} y={230} s={pop(t, fps, at)}><K c={TEAL} s={28}>{label}</K></At>
      <At x={x} y={380} o={ramp(t, at + 0.3, 0.5)}>{node}</At>
      <At x={x} y={530} o={ramp(t, at + 0.8, 0.4)}><SK c={DIM} s={22} strikeAt={fin + 0.6}>{ka}</SK></At>
      <At x={x} y={600} o={ramp(t, at + 1.6, 0.4)}><SK c={DIM} s={22} strikeAt={fin + 0.9}>{kb}</SK></At>
      <At x={x} y={700} o={ramp(t, okAt, 0.5)}><W c={GOLD} s={24}>{ok}</W></At>
    </React.Fragment>
  );
  return (
    <AbsoluteFill>
      <Title at={c("The two traps wait wherever an it is assumed")}>wherever an “it” is assumed</Title>
      {col(420, self, "the self", "a soul forever", "never anyone", <Person color={ICE} size={140} />, "neither kept nor lost", fin + 1.4)}
      {col(780, obj, "an object", "a cup in itself", "really nothing", <Cup color={ICE} size={150} tea={ramp(t, c("Meanwhile the cup holds tea"), 0.8)} />, "the cup holds tea", c("Meanwhile the cup holds tea"))}
      {col(1140, cause, "a cause", "the seed is the sprout", "cut apart", <SeedSprout grow={ramp(t, cause + 0.4, 1.4)} />, "neither the same nor cut off", fin + 1.6)}
      {col(1500, per, "a person", "fixed forever", "does not matter", <Person color={ROSE} size={140} />, "can really change", fin + 0.4)}
      <Items items={[
        ["A cause one makes the seed already the sprout", 1140, 470, <W c={DIM} s={20}>“a cruel word costs nothing”</W>, { d: 3.0, until: "And a person held as fixed" }],
        ["No such bearer is found, and the person can really change", 960, 800, <W c={TEAL} s={30} serif>no such bearer is found</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to a sound and ask");
  return (
    <AbsoluteFill>
      <Title at={b} color={GOLD}>try it</Title>
      <At x={960} y={330} s={pop(t, fps, b - 0.3)}><Bell swing={swingAt(t, b)} size={160} /></At>
      <Sound x={960} y={350} at={b + 0.4} dur={8} r1={460} />
      <Items items={[
        ["Listen to a sound and ask", 960, 200, <W c={CHALK} s={32} serif>does it arise, or does it cease?</W>, { d: 0.8 }],
        ["Notice where each answer wants to put the moment", 560, 520, <K c={GREEN} s={26}>“it arises”: kept where?</K>, { pop: true }],
        ["Notice where each answer wants to put the moment", 1360, 520, <K c={ROSE} s={26}>“it ceases”: so nothing happened?</K>, { pop: true, d: 0.6 }],
        ["Then look for the it both answers share", 960, 600, <K c={WARM} s={30}>the shared “it”</K>, { pop: true }],
        ["check whether cause and result now matter less to you", 960, 700, <W c={DIM} s={28}>“all empty anyway”? does cause and result matter less?</W>],
        ["the snake is held by the tail", 960, 790, <W c={GOLD} s={36} serif>then the snake is held by the tail</W>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "This moment ceases as it arises"], ["web", "This is the sixth step of The Logic"],
    ["doubt", "A snake catcher picks up a snake"], ["sea", "names the two ends"],
    ["doubt", "Take the first trap"], ["whole", "The plain form is the soul"], ["search", "The test is Step one's"],
    ["doubt", "Now the second trap"], ["vivid", "Nihilism has a subtle form too"], ["search", "The void is not even coherent"],
    ["web", "Here is the root"], ["doubt", "So the void is not the opposite of substance"],
    ["sea", "the remedy for one trap is never the other"], ["vivid", "Hear it both ways"],
    ["doubt", "one more place for the snake to bite"], ["sea", "Emptiness is a medicine"],
    ["vivid", "So the middle is not a midpoint"], ["web", "The two traps wait wherever an it is assumed"],
    ["whole", "Listen to a sound and ask"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["This moment ceases as it arises", <KoanScene />],
    ["This is the sixth step of The Logic", <RootIntroScene />],
    ["A snake catcher picks up a snake", <SnakeScene />],
    ["names the two ends", <EndsScene />],
    ["Take the first trap", <EternalScene />],
    ["The plain form is the soul", <AuthorScene />],
    ["The test is Step one's", <TestScene />],
    ["Now the second trap", <NihilScene />],
    ["Nihilism has a subtle form too", <NegationScene />],
    ["The void is not even coherent", <VoidScene />],
    ["Here is the root", <RootScene />],
    ["So the void is not the opposite of substance", <ReverseScene />],
    ["the remedy for one trap is never the other", <CureScene />],
    ["Hear it both ways", <HearScene />],
    ["one more place for the snake to bite", <HeldWrongScene />],
    ["Emptiness is a medicine", <MedicineScene />],
    ["So the middle is not a midpoint", <MiddleScene />],
    ["The two traps wait wherever an it is assumed", <BeyondScene />],
    ["Listen to a sound and ask", <TryScene />],
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
