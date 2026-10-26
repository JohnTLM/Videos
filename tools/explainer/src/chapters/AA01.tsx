// After Anatta 1: Two Logics (The Logic, Step 1). Explainer drawings timed to the narration.
// Arc: the koan hands us an "it" -> two ways of reasoning -> the bell: something there, something happening to it ->
// substance (a thing first, then events) / dependency (how a thing is picked out: parts, causes, contrast, name) ->
// moment, arising and ceasing designated together -> different worlds -> the koan both ways -> the staircase ->
// grammar holds a subject still -> a habit, where it switches on -> the test, the sound and the whirlpool -> both halves ->
// three misreadings, each struck -> the seven phases read through the two logics -> the self and the fist -> try it.
// Stance: emptiness is drawn only as the not-finding, never as a ground, container or backdrop. Each invented "it",
// each misreading and the Witness/Mirror are shown only to be struck. The bell, stairs, whirlpool and hand stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan and its "it"
  "Here is a koan", "This moment ceases as it arises", "Does it arise, or does it cease",
  "Read it slowly", "the question has already handed us an it", "that must do one thing or the other",
  "This is the first step of The Logic", "The step names two ways of reasoning", "the difference his own practice turned on",
  // the bell, and the two starting points
  "Listen to a bell", "the sound is fading", "Something is there, and something is happening to it",
  "Call it the logic of substance", "It starts with things, and then asks what happens to them", "The thing comes first",
  "it demands an answer",
  "The logic of dependency starts one step earlier", "it asks how anything is picked out as a thing at all",
  "On its parts", "On its causes", "On what it is set against", "And on the name under which it is known",
  "No thing stands there first, waiting to be named",
  "Read this way, the koan asks something else", "Only by its arising and its ceasing", "And each of those only against the other",
  "Moment, arising and ceasing are designated together",
  "The two logics begin in different places", "lead them to different worlds",
  // the koan both ways, and the stairs
  "Seen with the logic of substance, a moment is there", "Arising happens to it", "Then ceasing happens to it",
  "the moment feels solid",
  "Seen with the logic of dependency, there is the sounding", "is said looking from before", "is said looking from after",
  "merely designated as such upon conditions", "And the sound is still heard",
  "It is like a staircase", "Are the stairs up, or down", "In themselves, neither", "They are up for someone climbing",
  "and down for someone coming down", "The moment is the same", "That does not make it nothing, or only in the mind",
  "Stairs are really climbed, and really descended",
  // the habit
  "Ask people whether moments are things", "Every sentence about change holds a subject still", "The moment passes",
  "The flame flickers", "I have changed", "Its grammar sets up the it before we have looked",
  "So the logic of substance is not mainly a belief", "It is a habit", "It switches on when we explain",
  "Agreeing with the logic of dependency in theory changes very little", "changes a great deal",
  // the test
  "comes down to one simple test", "Look for the thing apart from what it depends on",
  "Try it on the koan", "Listen to a sound until it ends", "and none is found", "A whirlpool is the same",
  "Yet leaves thrown into it still spin",
  "Both halves matter", "That is emptiness", "And the moment still works", "That is conventional truth",
  "Dependence and unfindability are one fact, seen from two sides",
  // three misreadings
  "Three misreadings keep the koan's it", "It is not nothing exists", "Not the sounding, and not the burning",
  "It is not a better substance", "a process, a flow, a timeless Now, or a pure awareness", "The test applies to them too",
  "And it is not beyond logic", "holding the logic of substance to its own rules",
  // the seven phases
  "reads his own seven phases of insight", "I AM, then I AM everything, then nothingness", "But each was held through the logic of substance",
  "A Witness behind experience", "A Mirror, untouched",
  "In 1997 the logic of dependency was turned on the subject", "the mirror was not found", "In seeing, only the seen",
  "This is anatta",
  "Then the same test had to be turned on everything that appears", "This is the emptiness of phenomena",
  "Anatta removes the one who watches the moment", "That is why the koan belongs here",
  "And in the last phase there is nothing left to turn the logic on", "Anatta is a seal, not a stage",
  "What changed was the logic through which it was read",
  // the self and the fist
  "The koan is only the sharpest case", "Say I have changed", "Close your hand", "None is found",
  "Yet a promise is still yours to keep", "a fist can still knock on a door",
  // try it
  "So, for a moment, wherever you are", "Say the koan once", "Notice the it the question hands you",
  "Then look for that moment",
  "Do not try to reach an answer", "more vividness, more detail, more change", "And no thing standing behind it",
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

const Apple: React.FC<{ size?: number; glow?: number; o?: number }> = ({ size = 220, glow = 1, o = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 ${8 + 16 * glow}px ${RED})` }}>
    <path d="M100 56 C70 30 22 46 26 104 C30 160 70 190 100 172 C130 190 170 160 174 104 C178 46 130 30 100 56 Z" fill={`${RED}cc`} stroke={RED} strokeWidth={5} />
    <path d="M60 80 Q52 100 58 122" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.45} fill="none" />
    <path d="M100 56 Q98 34 108 18" stroke="#8a5a2b" strokeWidth={6} strokeLinecap="round" fill="none" />
    <path d="M106 30 Q130 8 152 22 Q132 44 106 30 Z" fill={`${GREEN}aa`} stroke={GREEN} strokeWidth={3} />
  </svg>
);

const Cup: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 150 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 150 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 20 L110 20 L100 100 Q65 112 30 100 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M108 38 Q140 40 134 64 Q128 84 103 80" fill="none" stroke={color} strokeWidth={5} />
  </svg>
);

const Thought: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={160} height={120} viewBox="0 0 160 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
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

const Bolt: React.FC<{ color?: string; size?: number; flash?: number }> = ({ color = ICE, size = 160, flash = 1 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 20 * flash}px ${color})` }}>
    <path d="M36 2 L8 56 L28 56 L18 98 L54 38 L32 38 L44 2 Z" fill={`${color}${flash > 0.5 ? "cc" : "44"}`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

/** A head in profile, drawn as an outline (the "mind" as a container, shown only to be removed). */
const Head: React.FC<{ color?: string; o?: number }> = ({ color = VIOLET, o = 1 }) => (
  <svg width={240} height={240} viewBox="0 0 240 240" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M70 220 L70 180 Q20 150 30 90 Q42 20 120 16 Q200 16 210 90 Q214 120 228 140 L206 148 Q210 180 180 184 L150 186 L150 220"
      fill="none" stroke={color} strokeWidth={5} strokeDasharray="12 9" strokeLinejoin="round" />
  </svg>
);

const Clock: React.FC<{ size?: number; color?: string }> = ({ size = 170, color = ICE }) => {
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

/** A small tree with fruit: actions bearing fruit. */
const Fruit: React.FC = () => (
  <svg width={170} height={190} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M85 186 L85 110 M85 130 L60 110 M85 120 L112 98" stroke="#b07a45" strokeWidth={8} strokeLinecap="round" fill="none" />
    <ellipse cx={85} cy={72} rx={72} ry={58} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} />
    {[[55, 70], [100, 50], [115, 92], [70, 100]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={`${RED}cc`} stroke={RED} strokeWidth={3} />)}
  </svg>
);

/** A floor bar, drawn only so that it can be taken away. */
const Floor: React.FC<{ w?: number; color?: string; dashed?: boolean }> = ({ w = 900, color = WARM, dashed }) => (
  <div style={{ width: w, height: 24, borderRadius: 12, background: `${color}33`, border: `3px ${dashed ? "dashed" : "solid"} ${color}`, boxShadow: `0 0 16px ${color}55` }} />
);

const Num: React.FC<{ n: string; color: string; lit: number }> = ({ n, color, lit }) => (
  <div style={{ width: 54, height: 54, borderRadius: 27, border: `3px solid ${color}`, background: `${color}${lit > 0.5 ? "44" : "11"}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: CHALK,
    boxShadow: lit > 0.5 ? `0 0 20px ${color}` : undefined }}>{n}</div>
);

// ---------------------------------------------------------------- scenes

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


/** A whirlpool: water turning, with a leaf carried round. */
const Whirlpool: React.FC<{ at: number; leaf?: number }> = ({ at, leaf = 0 }) => {
  const { t } = useT();
  const rot = (t - at) * 60;
  const a = ((t - at) * 1.6) % (Math.PI * 2);
  const r = 70 + 20 * Math.sin(t * 0.9);
  return (
    <div style={{ position: "relative", width: 360, height: 240 }}>
      <svg width={360} height={240} viewBox="-180 -120 360 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE}88)` }}>
        <g transform={`rotate(${rot})`}>
          {[0, 1, 2, 3].map(i => (
            <path key={i} d={`M ${30 + i * 30} 0 A ${30 + i * 30} ${(30 + i * 30) * 0.55} 0 1 1 ${-(20 + i * 30)} ${8 + i * 4}`}
              fill="none" stroke={ICE} strokeOpacity={0.9 - i * 0.18} strokeWidth={4} strokeLinecap="round" />
          ))}
        </g>
      </svg>
      <div style={{ position: "absolute", left: 180 + r * Math.cos(a) - 14, top: 120 + r * 0.55 * Math.sin(a) - 8, opacity: leaf,
        width: 28, height: 16, borderRadius: "50% 0", background: `${GREEN}aa`, border: `2px solid ${GREEN}`, transform: `rotate(${a * 57}deg)` }} />
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const it = c("the question has already handed us an it");
  return (
    <AbsoluteFill>
      <Title at={c("Here is a koan")} color={DIM} size={34}>a koan</Title>
      <At x={960} y={300} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={66} speed={0.035} />
      </At>
      <At x={960} y={440} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={66} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      <Items items={[
        ["the question has already handed us an it", 960, 620, <K c={WARM} s={36}>“it”</K>, { pop: true, d: 0.6 }],
        ["that must do one thing or the other", 700, 620, <W c={GREEN} s={30}>arise?</W>],
        ["that must do one thing or the other", 1220, 620, <W c={ROSE} s={30}>cease?</W>, { d: 0.5 }],
      ]} />
      <Flow x1={900} y1={620} x2={770} y2={620} color={DIM} p={ramp(t, it + 2.2, 0.5)} pulses={false} />
      <Flow x1={1020} y1={620} x2={1150} y2={620} color={DIM} p={ramp(t, it + 2.6, 0.5)} pulses={false} />
    </AbsoluteFill>
  );
};

const TwoWaysScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("The step names two ways of reasoning");
  return (
    <AbsoluteFill>
      <Title at={c("This is the first step of The Logic")}>The Logic · Step 1</Title>
      <Svg>
        <DrawPath d="M960 600 C 960 460, 700 420, 560 340" p={ramp(t, two + 0.3, 1)} color={WARM} width={6} len={600} />
        <DrawPath d="M960 600 C 960 460, 1220 420, 1360 340" p={ramp(t, two + 0.6, 1)} color={TEAL} width={6} len={600} />
      </Svg>
      <Items items={[
        ["This is the first step of The Logic", 960, 190, <W c={DIM} s={28}>After Anatta · notes by John Tan (Thusness)</W>, { d: 1.2 }],
        ["The step names two ways of reasoning", 560, 290, <K c={WARM}>logic of substance</K>, { d: 1.2, pop: true }],
        ["The step names two ways of reasoning", 1360, 290, <K c={TEAL}>logic of dependency</K>, { d: 1.6, pop: true }],
        ["the difference his own practice turned on", 960, 700, <W c={GOLD} s={32} serif>the difference practice turned on</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const strike = c("Listen to a bell");
  const swing = 8 * Math.sin((t - strike) * 5) * Math.exp(-Math.max(0, t - strike) * 0.6) * (t > strike ? 1 : 0);
  return (
    <AbsoluteFill>
      <At x={960} y={380} s={pop(t, fps, strike - 0.3)}><Bell swing={swing} /></At>
      <Sound x={960} y={400} at={strike + 0.4} dur={6} />
      <Items items={[
        ["the sound is fading", 960, 620, <W c={ICE} s={34} serif>“the sound is fading”</W>],
        ["Something is there, and something is happening to it", 700, 720, <K c={WARM} s={28}>something there</K>, { pop: true }],
        ["Something is there, and something is happening to it", 1220, 720, <K c={WARM} s={28}>something happening to it</K>, { pop: true, d: 1.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const call = c("Call it the logic of substance");
  const asks = c("It starts with things, and then asks what happens to them");
  const ev = (w: string, i: number) => (
    <At key={w} x={1240} y={300 + i * 90} o={ramp(t, asks + 1.0 + i * 0.35, 0.4)}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 70, height: 3, background: WARM }} /><W c={CHALK} s={28}>{w}</W>
      </div>
    </At>
  );
  return (
    <AbsoluteFill>
      <Title at={call} color={WARM}>the logic of substance</Title>
      <At x={760} y={400} s={pop(t, fps, asks)}><Cup color={WARM} size={190} /></At>
      <At x={760} y={400} o={ramp(t, asks + 0.6, 0.5)}>
        <div style={{ width: 280, height: 230, borderRadius: 28, border: `4px solid ${WARM}88`, boxShadow: `0 0 30px ${WARM}55` }} />
      </At>
      {["it arises", "it lasts", "it changes", "it ends"].map(ev)}
      <Items items={[
        ["The thing comes first", 760, 600, <W c={WARM} s={32} serif>first, a thing</W>],
        ["The thing comes first", 1300, 680, <W c={DIM} s={26}>then, events that befall it</W>, { d: 0.8 }],
        ["it demands an answer", 960, 780, <W c={CHALK} s={30}>so the koan demands an answer</W>],
      ]} />
    </AbsoluteFill>
  );
};

const DependencyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("The logic of dependency starts one step earlier");
  const P: [string, string, number, number][] = [
    ["On its parts", "parts", 560, 300],
    ["On its causes", "causes", 1360, 300],
    ["On what it is set against", "contrast", 560, 600],
    ["And on the name under which it is known", "name", 1360, 600],
  ];
  const none = c("No thing stands there first, waiting to be named");
  return (
    <AbsoluteFill>
      <Title at={st} color={TEAL}>the logic of dependency: one step earlier</Title>
      <At x={960} y={450} s={pop(t, fps, c("it asks how anything is picked out as a thing at all"))}><Cup color={TEAL} size={170} /></At>
      <At x={960} y={450} o={ramp(t, c("it asks how anything is picked out as a thing at all") + 0.6, 0.5)}>
        <div style={{ width: 250, height: 210, borderRadius: 24, border: `3px dashed ${TEAL}` }} />
      </At>
      {P.map(([cue, w, x, y]) => (
        <React.Fragment key={w}>
          <At x={x} y={y} s={pop(t, fps, c(cue))}><K c={TEAL} s={30}>{w}</K></At>
          <Flow x1={x + (x < 960 ? 90 : -90)} y1={y + (y < 450 ? 20 : -20)} x2={x < 960 ? 820 : 1100} y2={y < 450 ? 400 : 500}
            color={TEAL} p={ramp(t, c(cue) + 0.3, 0.5)} pulses={false} />
        </React.Fragment>
      ))}
      <Items items={[
        ["it asks how anything is picked out as a thing at all", 960, 190, <W c={CHALK} s={30}>how is a “thing” picked out at all?</W>, { d: 0.8 }],
        ["No thing stands there first, waiting to be named", 960, 760, <W c={GOLD} s={34} serif>no thing waiting to be named</W>, { d: 0.6 }],
      ]} />
      <At x={960} y={450} o={ramp(t, none + 1.6, 0.5)}><W c={DIM} s={24}>picked out in dependence</W></At>
    </AbsoluteFill>
  );
};

const DesignateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const asks = c("Read this way, the koan asks something else");
  const only = c("Only by its arising and its ceasing");
  const each = c("And each of those only against the other");
  const tog = c("Moment, arising and ceasing are designated together");
  return (
    <AbsoluteFill>
      <Title at={asks} color={TEAL}>how is “this moment” picked out?</Title>
      <At x={560} y={420} s={pop(t, fps, only)}><K c={ICE} s={34}>arising</K></At>
      <At x={1360} y={420} s={pop(t, fps, only + 0.6)}><K c={ROSE} s={34}>ceasing</K></At>
      <Svg>
        <DrawPath d="M640 380 Q960 280 1280 380" p={ramp(t, each, 0.8)} color={TEAL} width={3} len={800} />
        <DrawPath d="M1280 460 Q960 560 640 460" p={ramp(t, each + 0.5, 0.8)} color={TEAL} width={3} len={800} />
      </Svg>
      <At x={960} y={420} s={pop(t, fps, tog)}><K c={GOLD} s={34}>this moment</K></At>
      <Items items={[
        ["And each of those only against the other", 960, 600, <W c={DIM} s={28}>each only against the other</W>, { d: 0.6 }],
        ["Moment, arising and ceasing are designated together", 960, 680, <W c={GOLD} s={36} serif>designated together</W>, { d: 0.8 }],
        ["The two logics begin in different places", 960, 780, <W c={CHALK} s={28}>change · cause · identity · the path</W>],
        ["lead them to different worlds", 960, 830, <W c={TEAL} s={26}>same words, different worlds</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BothWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Seen with the logic of substance, a moment is there");
  const dep = c("Seen with the logic of dependency, there is the sounding");
  const solid = ramp(t, c("the moment feels solid"), 0.6);
  return (
    <AbsoluteFill>
      <Title at={sub}>the koan, seen both ways</Title>
      <At x={560} y={200} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>substance</K></At>
      <At x={560} y={400} s={pop(t, fps, sub + 0.8)}>
        <div style={{ width: 180, height: 120, borderRadius: 14, background: `${WARM}${solid > 0.5 ? "55" : "22"}`, border: `4px solid ${WARM}`,
          boxShadow: `0 0 ${20 + 30 * solid}px ${WARM}88`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <W c={CHALK} s={30}>moment</W>
        </div>
      </At>
      <Items items={[
        ["Arising happens to it", 330, 400, <W c={GREEN} s={28}>arising →</W>],
        ["Then ceasing happens to it", 790, 400, <W c={ROSE} s={28}>→ ceasing</W>],
        ["the moment feels solid", 560, 560, <W c={WARM} s={28}>it feels solid</W>],
      ]} />
      <At x={1360} y={200} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>dependency</K></At>
      <At x={1360} y={400} s={pop(t, fps, dep + 0.6)}><Bell size={130} /></At>
      <Sound x={1360} y={410} at={dep + 0.8} dur={8} r1={260} />
      <Items items={[
        ["Seen with the logic of dependency, there is the sounding", 1360, 560, <SK c={DIM} s={24} strikeAt={dep + 3.2}>a moment inside it</SK>, { d: 1.6 }],
        ["is said looking from before", 1180, 640, <W c={GREEN} s={26}>“arising”: from before</W>],
        ["is said looking from after", 1540, 640, <W c={ROSE} s={26}>“ceasing”: from after</W>],
        ["merely designated as such upon conditions", 960, 760, <W c={GOLD} s={30} serif>“merely designated as such upon conditions”</W>],
        ["And the sound is still heard", 1360, 830, <W c={ICE} s={26}>the sound is still heard</W>],
      ]} />
    </AbsoluteFill>
  );
};

const StairsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("It is like a staircase");
  const upAt = c("They are up for someone climbing");
  const downAt = c("and down for someone coming down");
  const up = ramp(t, upAt + 0.3, 3.2);
  const down = ramp(t, downAt + 0.3, 3.2);
  const p = Math.max(0, up - down);
  const goingDown = t > downAt + 0.3;
  const moving = (t > upAt + 0.3 && up < 1) || (goingDown && down < 1);
  const i = Math.round(p * 5);
  const footY = 690 - (i + 1) * 60;
  const x = 660 + p * 500;
  let stairs = "M520 690 L610 690";
  for (let k = 0; k < 6; k++) stairs += ` L${610 + k * 100} ${630 - k * 60} L${710 + k * 100} ${630 - k * 60}`;
  stairs += " L1320 330";
  return (
    <AbsoluteFill>
      <Title at={st}>a staircase</Title>
      <Svg>
        <DrawPath d={stairs} p={ramp(t, st, 1.4)} color={CHALK} width={6} len={2000} />
        <DrawPath d="M1320 330 L1320 690 L520 690" p={ramp(t, st + 0.8, 1.0)} color={DIM} width={3} len={1300} glow={false} />
      </Svg>
      <At x={x} y={footY - 62} o={ramp(t, upAt, 0.4)}><Walker face={goingDown ? -1 : 1} step={moving ? t * 9 : 0} /></At>
      <At x={x} y={footY - 150} o={ramp(t, upAt + 0.3, 0.3) * (goingDown ? 0 : 1)}><K c={GREEN} s={30}>up</K></At>
      <At x={x} y={footY - 150} o={goingDown ? 1 : 0}><K c={ICE} s={30}>down</K></At>
      <Items items={[
        ["Are the stairs up, or down", 1600, 360, <W c={CHALK} s={34}>up, or down?</W>],
        ["In themselves, neither", 1600, 430, <W c={GOLD} s={30} serif>in themselves: neither</W>, { until: "The moment is the same" }],
        ["The moment is the same", 1600, 430, <W c={TEAL} s={28}>arising or ceasing: from which side</W>],
        ["That does not make it nothing, or only in the mind", 1600, 520, <W c={DIM} s={26}>not nothing; not only in the mind</W>],
        ["Stairs are really climbed, and really descended", 960, 780, <W c={CHALK} s={30}>really climbed, really descended</W>],
      ]} />
    </AbsoluteFill>
  );
};

const GrammarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hold = c("Every sentence about change holds a subject still");
  const S: [string, string, string][] = [
    ["The moment passes", "the moment", "passes"],
    ["The flame flickers", "the flame", "flickers"],
    ["I have changed", "I", "have changed"],
  ];
  const box = (label: string, col: string, at: number) => (
    <div style={{ width: 300, height: 100, borderRadius: 14, border: `3px solid ${col}`, background: `${col}14`, position: "relative", opacity: ramp(t, at, 0.4) }}>
      <div style={{ position: "absolute", top: -38, width: "100%", fontFamily: SANS, fontSize: 22, color: col, letterSpacing: 2 }}>{label}</div>
    </div>
  );
  return (
    <AbsoluteFill>
      <Title at={c("Ask people whether moments are things")}>watch what we do, not what we say</Title>
      <At x={760} y={300}>{box("HELD STILL", GOLD, hold)}</At>
      <At x={1160} y={300}>{box("HAPPENS TO IT", ICE, hold + 0.4)}</At>
      {S.map(([cue, s, v], i) => {
        const a = c(cue);
        const next = i + 1 < S.length ? c(S[i + 1][0]) : c("Its grammar sets up the it before we have looked");
        const o = between(t, a, next, 0.3);
        return (
          <React.Fragment key={cue}>
            <At x={760} y={300} o={o}><W c={GOLD} s={36} serif>{s}</W></At>
            <At x={1160} y={300} o={o}><W c={ICE} s={36} serif>{v}</W></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["Its grammar sets up the it before we have looked", 760, 300, <K c={WARM} s={34}>it</K>, { pop: true }],
        ["Its grammar sets up the it before we have looked", 1160, 300, <W c={ICE} s={34} serif>arises? ceases?</W>, { d: 0.6 }],
        ["Its grammar sets up the it before we have looked", 960, 460, <W c={DIM} s={28}>the “it” is set up before we look</W>, { d: 1.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const on = c("It switches on when we explain");
  const P = ["when we explain", "when we name", "when we feel threatened", "when we lose"];
  return (
    <AbsoluteFill>
      <Title at={c("So the logic of substance is not mainly a belief")}>not mainly a belief</Title>
      <At x={960} y={260} s={pop(t, fps, c("It is a habit"))}><W c={WARM} s={52} serif>a habit</W></At>
      {P.map((w, i) => (
        <At key={w} x={420 + i * 360} y={430} s={pop(t, fps, on + i * 0.7)}><K c={WARM} s={26}>{w}</K></At>
      ))}
      <Items items={[
        ["Agreeing with the logic of dependency in theory changes very little", 960, 590, <W c={DIM} s={30}>agreeing in theory: very little</W>],
        ["changes a great deal", 960, 680, <W c={GOLD} s={34} serif>seeing through it where it works: a great deal</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const test = c("Look for the thing apart from what it depends on");
  const snd = c("Listen to a sound until it ends");
  const wp = c("A whirlpool is the same");
  return (
    <AbsoluteFill>
      <Title at={c("comes down to one simple test")} color={TEAL}>one simple test</Title>
      <At x={960} y={220} s={pop(t, fps, test, 14)} o={ramp(t, test, 0.4)}><W c={GOLD} s={42} serif>look for the thing apart from what it depends on</W></At>
      <At x={560} y={460} s={pop(t, fps, snd - 0.2)} o={1 - ramp(t, wp + 0.4, 0.6) * 0.4}><Bell size={120} /></At>
      <Sound x={560} y={470} at={snd + 0.3} dur={4} r1={200} />
      <At x={560} y={620} o={ramp(t, c("and none is found"), 0.5)}><SK c={DIM} s={24} strikeAt={c("and none is found") + 1.0}>a moment apart from arising and ceasing</SK></At>
      <At x={1360} y={460} o={ramp(t, wp, 0.6)}><Whirlpool at={wp} leaf={ramp(t, c("Yet leaves thrown into it still spin"), 0.6)} /></At>
      <Items items={[
        ["A whirlpool is the same", 1360, 620, <SK c={DIM} s={24} strikeAt={wp + 2.6}>a whirlpool apart from the water</SK>, { d: 1.0 }],
        ["Yet leaves thrown into it still spin", 1360, 700, <W c={GREEN} s={28}>yet leaves still spin</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const HalvesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("Dependence and unfindability are one fact, seen from two sides");
  const join = ramp(t, one + 0.4, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Both halves matter")}>both halves</Title>
      <At x={620 + 200 * join} y={360} s={pop(t, fps, c("That is emptiness") - 0.6)}><K c={VIOLET} s={30}>nothing found on its own</K></At>
      <At x={620 + 200 * join} y={440} o={ramp(t, c("That is emptiness"), 0.5) * (1 - join)}><W c={VIOLET} s={28}>emptiness</W></At>
      <At x={1300 - 200 * join} y={360} s={pop(t, fps, c("And the moment still works"))}><K c={GOLD} s={30}>the bell is heard</K></At>
      <At x={1300 - 200 * join} y={440} o={ramp(t, c("That is conventional truth"), 0.5) * (1 - join)}><W c={GOLD} s={28}>conventional truth</W></At>
      <Items items={[
        ["Dependence and unfindability are one fact, seen from two sides", 960, 560, <W c={TEAL} s={40} serif>one fact, seen from two sides</W>, { d: 1.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const MisreadScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("It is not nothing exists");
  const b = c("It is not a better substance");
  const l = c("And it is not beyond logic");
  return (
    <AbsoluteFill>
      <Title at={c("Three misreadings keep the koan's it")} color={WARM}>three misreadings</Title>
      <At x={460} y={330} o={ramp(t, a, 0.4)}><SK c={DIM} s={28} strikeAt={a + 1.4}>“nothing exists”</SK></At>
      <At x={460} y={430} o={ramp(t, c("Not the sounding, and not the burning"), 0.5)}><W c={ICE} s={26}>the sound is still heard</W></At>
      {["a process", "a flow", "a timeless Now", "a pure awareness"].map((w, i) => (
        <At key={w} x={960} y={300 + i * 70} o={ramp(t, c("a process, a flow, a timeless Now, or a pure awareness") + i * 0.5, 0.4)}>
          <SK c={DIM} s={24} strikeAt={c("The test applies to them too") + i * 0.2}>{w}</SK>
        </At>
      ))}
      <At x={960} y={590} o={ramp(t, b, 0.4)}><W c={WARM} s={26}>not a better substance</W></At>
      <At x={1460} y={330} o={ramp(t, l, 0.4)}><SK c={DIM} s={28} strikeAt={l + 1.4}>“beyond logic”</SK></At>
      <At x={1460} y={430} o={ramp(t, c("holding the logic of substance to its own rules"), 0.5)}><W c={TEAL} s={26}>ordinary reasoning, held to its own rules</W></At>
    </AbsoluteFill>
  );
};

const PhasesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const head = c("reads his own seven phases of insight");
  const early = c("I AM, then I AM everything, then nothingness");
  const held = c("But each was held through the logic of substance");
  const p5 = c("In 1997 the logic of dependency was turned on the subject");
  const p6 = c("Then the same test had to be turned on everything that appears");
  const p7 = c("And in the last phase there is nothing left to turn the logic on");
  const N: [string, number][] = [["I AM", early], ["I AM all", early + 0.6], ["nothingness", early + 1.2], ["mirror", early + 2.0],
    ["no mirror", p5], ["empty", p6], ["perfected", p7]];
  const col = (i: number) => (i < 4 ? (t > held ? WARM : CHALK) : i === 6 ? GOLD : TEAL);
  return (
    <AbsoluteFill>
      <Title at={head}>seven phases, two logics</Title>
      {N.map(([w, at], i) => (
        <At key={w} x={300 + i * 220} y={300} o={ramp(t, head + 0.3, 0.5) * (0.3 + 0.7 * ramp(t, at, 0.4))}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Num n={String(i + 1)} color={col(i)} lit={ramp(t, at, 0.4)} />
            <Glow color={col(i)} size={24}>{w}</Glow>
          </div>
        </At>
      ))}
      <Items items={[
        ["But each was held through the logic of substance", 630, 440, <W c={WARM} s={26}>held through the logic of substance</W>, { until: "In 1997 the logic of dependency was turned on the subject" }],
        ["A Witness behind experience", 520, 520, <SK c={DIM} s={24} strikeAt={c("the mirror was not found")}>a Witness behind</SK>, { until: "Then the same test had to be turned on everything that appears" }],
        ["A Mirror, untouched", 800, 520, <SK c={DIM} s={24} strikeAt={c("the mirror was not found") + 0.3}>a Mirror, untouched</SK>, { until: "Then the same test had to be turned on everything that appears" }],
        ["In 1997 the logic of dependency was turned on the subject", 1180, 440, <W c={TEAL} s={26}>1997: turned on the subject</W>],
        ["In seeing, only the seen", 1180, 600, <W c={ICE} s={30} serif>in seeing, only the seen</W>, { until: "Then the same test had to be turned on everything that appears" }],
        ["This is anatta", 1180, 670, <K c={TEAL} s={28}>anatta</K>, { pop: true, until: "Then the same test had to be turned on everything that appears" }],
        ["Then the same test had to be turned on everything that appears", 1400, 520, <W c={TEAL} s={26}>then on everything that appears</W>],
        ["This is the emptiness of phenomena", 1400, 600, <K c={TEAL} s={26}>emptiness of phenomena</K>, { pop: true, until: "And in the last phase there is nothing left to turn the logic on" }],
        ["Anatta removes the one who watches the moment", 960, 700, <W c={DIM} s={26}>anatta removes the watcher, not the moment-as-thing</W>, { until: "And in the last phase there is nothing left to turn the logic on" }],
        ["That is why the koan belongs here", 960, 770, <W c={GOLD} s={28}>why the koan belongs here</W>, { until: "And in the last phase there is nothing left to turn the logic on" }],
        ["And in the last phase there is nothing left to turn the logic on", 1620, 600, <W c={GOLD} s={26}>nothing left to turn</W>],
        ["Anatta is a seal, not a stage", 960, 700, <W c={GOLD} s={40} serif>“Anatta is a seal, not a stage.”</W>],
        ["What changed was the logic through which it was read", 960, 790, <W c={CHALK} s={28}>presence vivid from the start; the logic changed</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const close = ramp(t, c("Close your hand"), 0.8);
  return (
    <AbsoluteFill>
      <Title at={c("The koan is only the sharpest case")}>beyond the moment</Title>
      <Items items={[
        ["Say I have changed", 600, 320, <K c={ICE} s={30}>the self</K>, { pop: true }],
        ["Say I have changed", 600, 420, <W c={ICE} s={32} serif>“I have changed”</W>, { d: 0.4 }],
        ["None is found", 600, 510, <SK c={DIM} s={24} strikeAt={c("None is found") + 0.8}>one who changed, apart</SK>],
        ["Yet a promise is still yours to keep", 600, 600, <W c={GOLD} s={26}>the promise is still kept</W>],
        ["Close your hand", 1320, 320, <K c={WARM} s={30}>an object</K>, { pop: true }],
        ["Close your hand", 1320, 440, <Hand closed={close} />, { pop: true }],
        ["None is found", 1320, 530, <SK c={DIM} s={24} strikeAt={c("None is found") + 1.0}>a fist apart from the closing</SK>],
        ["a fist can still knock on a door", 1320, 600, <W c={GOLD} s={26}>still knocks on a door</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Then look for that moment");
  const swing = 8 * Math.sin((t - b) * 5) * Math.exp(-Math.max(0, t - b) * 0.6) * (t > b ? 1 : 0);
  return (
    <AbsoluteFill>
      <Title at={c("So, for a moment, wherever you are")} color={GOLD}>try it</Title>
      <Items items={[
        ["Say the koan once", 960, 210, <W c={CHALK} s={32} serif>This moment ceases as it arises. Does it arise, or does it cease?</W>],
        ["Notice the it the question hands you", 960, 290, <K c={WARM} s={28}>notice the “it”</K>, { pop: true, until: "Do not try to reach an answer" }],
      ]} />
      <At x={960} y={430} s={pop(t, fps, b - 0.3)}><Bell swing={swing} size={170} /></At>
      <Sound x={960} y={450} at={b + 0.4} dur={8} r1={480} />
      <Items items={[
        ["Do not try to reach an answer", 960, 620, <W c={DIM} s={28}>no answer to reach</W>],
        ["more vividness, more detail, more change", 960, 690, <W c={GOLD} s={34} serif>more vivid, more detail, more change</W>],
        ["And no thing standing behind it", 960, 770, <W c={CHALK} s={36} serif>and no thing behind it</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "Here is a koan"], ["web", "This is the first step of The Logic"], ["open", "Listen to a bell"],
    ["doubt", "Call it the logic of substance"], ["web", "The logic of dependency starts one step earlier"],
    ["sea", "Read this way, the koan asks something else"], ["search", "Seen with the logic of substance, a moment is there"],
    ["vivid", "It is like a staircase"], ["doubt", "Ask people whether moments are things"],
    ["search", "comes down to one simple test"], ["whole", "Both halves matter"], ["doubt", "Three misreadings keep the koan's it"],
    ["web", "reads his own seven phases of insight"], ["vivid", "The koan is only the sharpest case"],
    ["whole", "So, for a moment, wherever you are"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Here is a koan", <KoanScene />],
    ["This is the first step of The Logic", <TwoWaysScene />],
    ["Listen to a bell", <BellScene />],
    ["Call it the logic of substance", <SubstanceScene />],
    ["The logic of dependency starts one step earlier", <DependencyScene />],
    ["Read this way, the koan asks something else", <DesignateScene />],
    ["Seen with the logic of substance, a moment is there", <BothWaysScene />],
    ["It is like a staircase", <StairsScene />],
    ["Ask people whether moments are things", <GrammarScene />],
    ["So the logic of substance is not mainly a belief", <HabitScene />],
    ["comes down to one simple test", <TestScene />],
    ["Both halves matter", <HalvesScene />],
    ["Three misreadings keep the koan's it", <MisreadScene />],
    ["reads his own seven phases of insight", <PhasesScene />],
    ["The koan is only the sharpest case", <BeyondScene />],
    ["So, for a moment, wherever you are", <TryScene />],
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
