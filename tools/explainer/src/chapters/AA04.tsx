// After Anatta 4: The Two Truths (The Logic, Step 4). Explainer drawings timed to the narration.
// Arc: the koan has two answers that do not conflict -> the two truths, one moment met two ways -> Nagarjuna's verse ->
// the three meanings of "conventional" (only the concealment is mistaken) -> the bell: said when, and not found ->
// both logics: rival reports, or nothing competes -> the rope in the garage: two kinds of correction ->
// the two-storey picture, physical and spiritual, and the author's Witness floor -> no floor behind, none above ->
// conventional truth fully valid, with Tsongkhapa's three checks -> ultimate truth not a hidden reality, and empty too ->
// each needs the other: the ladder with no top -> Mipham: discordant and concordant -> self, ship, fire, friend -> try it.
// Stance: the two truths are never drawn as two floors with the ultimate underneath; the floors are drawn only to be
// taken away. Emptiness is drawn only as the not-finding, never as a ground, source or backdrop. Awareness, the Witness,
// the Absolute and "the ultimate" as a level are shown only to be struck. The bell, rope, ship, fire and friend stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, IceCube, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan, two answers
  "This moment ceases as it arises", "Does it arise, or does it cease", "This is the fourth step of The Logic",
  "The koan has two answers, and they do not conflict", "Conventionally, the moment arises and ceases",
  "The bell is struck, the ringing stops, and we can say when", "nothing that arises and nothing that ceases is found",
  "The tradition calls these the two truths", "They are not two worlds, and not two levels", "There is one moment, met two ways",
  // the verse, and the three meanings
  "Nagarjuna introduces them at the turning point of his work", "the conventional truth of the world",
  "Miss the difference, he says, and the deep teaching is missed",
  "carries three meanings", "Concealment: ordinary seeing hides how things are",
  "Dependence: what is conventional exists only in dependence on other things",
  "And worldly convention: the names and agreements we live by", "Conventional truth is valid as dependence and as convention",
  "It is mistaken only in the concealment", "That habit is the real target",
  // the bell
  "Listen to a bell", "Now look for the ringing apart from its sounding", "Nothing is found",
  "Nagarjuna opens his whole work this way", "without ceasing, without arising, without coming and without going",
  "is not a denial that the bell rang", "Not found never means did not happen",
  // both logics
  "Seen with the logic of substance, the ringing is a thing", "So the two answers seem to compete",
  "Seen with the logic of dependency", "merely designated as arising or ceasing, upon conditions",
  "is picked out against the silence before", "ceasing against the silence after", "like the stairs of Step 1", "Nothing competes",
  // the rope
  "Walk into a garage at dusk", "for a moment it is a snake", "Someone switches on the lamp", "It is a rope",
  "tie down the load on the car", "you look for the rope apart from its strands", "The load stays tied",
  "Two corrections happened there", "The lamp corrected the snake into a rope", "The search corrected nothing about the rope",
  "removed the idea of a rope standing there",
  // two storeys
  "a picture of reality in two storeys", "particles do the real work backstage", "In the spiritual version, the passing world is a veil",
  "a pure Being, a Source, a cosmic Awareness",
  "The author lived in the second picture for years", "The realisation of I AM was real", "a pure, unchanging Witness on one side",
  "The Witness was the deeper floor", "The world was the show",
  "The two truths leave no room for either version", "No hidden substrate", "No deeper dimension underneath",
  "Appearance is not a cover over something more real", "There is nothing behind it for it to cover",
  "They are two ways of meeting one place",
  // conventional truth
  "Conventional sounds like a demotion", "Conventional truth is fully valid", "A table, a rainbow, a thought, a moment",
  "And convention has standards", "gives three checks", "Known to ordinary cognition",
  "Not overturned by another sound ordinary cognition", "Not overturned by analysis of how things ultimately are",
  "The snake fails the second", "A rope existing from its own side fails the third",
  "The everyday world can tell a rope from a snake",
  // ultimate truth
  "Ultimate truth is not a hidden particle", "not a pure Awareness behind the world", "no own-nature is found",
  "Ultimate truth is not a higher world", "It is the emptiness of this one", "And it gets no exemption",
  "There is no level that stays",
  // each needs the other
  "The two truths need each other", "Without relying on convention, the ultimate cannot be taught", "Convention is the ladder",
  "Taken apart, each truth turns into a fixed object", "Joined, they dissolve each other's solidity",
  // Mipham
  "Mipham draws the line another way", "a cold thing over there and a feeler over here",
  "Meet the same coldness without that fixing", "After anatta, presence did not fade into some deeper truth",
  "What changed was how it was held",
  // beyond the moment
  "Every thing has the koan's two answers", "I wrote this is correct, and it can be checked", "One self, met two ways",
  "A ship whose every plank has been replaced still sails", "Fire burns, and a hand put in it is hurt",
  "Yet no power to burn is found in the fire on its own", "And the friend you love keeps promises, and grieves",
  "Seeing that takes nothing from the love", "Love, sorrow and care stay where they were",
  // try it
  "Try it", "Clap once", "Say when the sound began and ended", "Then look for the sound apart from the sounding",
  "Notice that the second look takes nothing from the first", "Recall a coat on a chair, taken for a person",
  "Notice how cleanly the second look corrected the first", "Convention has standards", "One sound, met two ways",
  "And nothing extra behind it",
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

// ---------------------------------------------------------------- drawings for this step
const ROPE = "#C9A26B";

/** A drawn tick at (x, y). */
const Tick: React.FC<{ x: number; y: number; at: number; size?: number; color?: string }> = ({ x, y, at, size = 30, color = GREEN }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y} L${x - size * 0.3} ${y + size * 0.7} L${x + size} ${y - size * 0.8}`} p={ramp(t, at, 0.4)} color={color} width={7} len={size * 4} />
    </Svg>
  );
};

/** A coiled shape: a snake when snake = 1 (head and eye), a rope when snake = 0 (twisted strands, frayed end). */
const Coil: React.FC<{ snake: number; size?: number }> = ({ snake, size = 340 }) => {
  let d = "";
  for (let k = 0; k <= 60; k++) {
    const a = k / 60 * Math.PI * 4.2;
    const r = 14 + a * 8.5;
    d += `${k ? "L" : "M"}${(150 + r * Math.cos(a)).toFixed(1)} ${(100 + r * 0.45 * Math.sin(a)).toFixed(1)} `;
  }
  const end = 4.2 * Math.PI, re = 14 + end * 8.5;
  const ex = 150 + re * Math.cos(end), ey = 100 + re * 0.45 * Math.sin(end);
  d += `Q ${ex + 60} ${ey + 30} ${ex + 110} ${ey + 10}`;
  const hx = ex + 110, hy = ey + 10;
  const snk = "#7FB069";
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 340 210" style={{ overflow: "visible" }}>
      <g opacity={1 - snake} style={{ filter: `drop-shadow(0 0 8px ${ROPE}99)` }}>
        <path d={d} fill="none" stroke={ROPE} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
        <path d={d} fill="none" stroke="#7a5a32" strokeWidth={3} strokeDasharray="6 10" />
        <path d={`M${hx} ${hy} l14 -8 M${hx} ${hy} l16 2 M${hx} ${hy} l12 10`} stroke={ROPE} strokeWidth={4} strokeLinecap="round" />
      </g>
      <g opacity={snake} style={{ filter: `drop-shadow(0 0 10px ${snk})` }}>
        <path d={d} fill="none" stroke={snk} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx={hx + 8} cy={hy} rx={20} ry={13} fill={snk} />
        <circle cx={hx + 14} cy={hy - 4} r={3.5} fill="#111" />
        <path d={`M${hx + 27} ${hy} l14 -4 M${hx + 27} ${hy} l14 4`} stroke={ROSE} strokeWidth={3} strokeLinecap="round" />
      </g>
    </svg>
  );
};

/** A hanging lamp; on (0..1) lights it and its cone of light. */
const Lamp: React.FC<{ on: number }> = ({ on }) => (
  <svg width={520} height={520} viewBox="0 0 520 520" style={{ overflow: "visible" }}>
    <defs>
      <linearGradient id="aa04cone" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={GOLD} stopOpacity={0.45 * on} /><stop offset="1" stopColor={GOLD} stopOpacity={0} />
      </linearGradient>
    </defs>
    <path d="M260 0 L260 60" stroke={DIM} strokeWidth={3} />
    <path d="M220 60 L300 60 L320 100 L200 100 Z" fill={`${CHALK}22`} stroke={CHALK} strokeWidth={3} />
    <circle cx={260} cy={110} r={16} fill={on > 0.5 ? "#FFF3D1" : `${DIM}55`} style={{ filter: on > 0.5 ? `drop-shadow(0 0 20px ${GOLD})` : undefined }} />
    <path d="M205 100 L40 520 L480 520 L315 100 Z" fill="url(#aa04cone)" />
  </svg>
);

/** A box with a rope tied over it (the load). */
const Load: React.FC = () => (
  <svg width={240} height={150} viewBox="0 0 240 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ROPE}88)` }}>
    <rect x={20} y={30} width={200} height={100} rx={8} fill={`${WARM}22`} stroke={WARM} strokeWidth={4} />
    <path d="M90 26 L90 134 M150 26 L150 134 M16 70 L224 70" stroke={ROPE} strokeWidth={9} strokeLinecap="round" />
    <path d="M110 70 q10 -16 20 0 q-10 16 -20 0" fill="none" stroke={ROPE} strokeWidth={6} />
  </svg>
);

/** A sailing ship. */
const Ship: React.FC<{ rock?: number }> = ({ rock = 0 }) => (
  <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: "visible", transform: `rotate(${rock}deg)`, filter: `drop-shadow(0 0 8px ${ICE}88)` }}>
    <path d="M20 130 L220 130 L190 175 L50 175 Z" fill={`${ROPE}44`} stroke={ROPE} strokeWidth={4} strokeLinejoin="round" />
    {[60, 95, 130, 165].map(x => <line key={x} x1={x} y1={134} x2={x - 4} y2={172} stroke={ROPE} strokeWidth={2} opacity={0.7} />)}
    <path d="M120 130 L120 20" stroke={CHALK} strokeWidth={4} />
    <path d="M124 26 Q180 70 124 118 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={3} />
    <path d="M116 40 Q70 80 116 118 Z" fill={`${ICE}22`} stroke={ICE} strokeWidth={3} />
    <path d="M0 186 Q30 178 60 186 T120 186 T180 186 T240 186" fill="none" stroke={TEAL} strokeWidth={3} />
  </svg>
);

/** A flickering flame. */
const Flame: React.FC = () => {
  const { t } = useT();
  const f = 1 + 0.06 * Math.sin(t * 13) + 0.04 * Math.sin(t * 7.3);
  return (
    <svg width={140} height={190} viewBox="0 0 140 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${WARM})` }}>
      <g style={{ transform: `scaleY(${f})`, transformOrigin: "50% 92%" }}>
        <path d="M70 10 C100 60 125 90 115 130 C108 162 32 162 25 130 C18 98 45 80 52 50 C60 75 72 80 70 10 Z" fill={`${WARM}aa`} stroke={WARM} strokeWidth={3} />
        <path d="M70 80 C85 105 92 120 86 138 C80 152 60 152 55 138 C50 122 64 112 70 80 Z" fill="#FFE29Acc" />
      </g>
      <path d="M30 172 L110 172" stroke="#8a5a2b" strokeWidth={10} strokeLinecap="round" />
    </svg>
  );
};

const Heart: React.FC<{ color?: string; size?: number }> = ({ color = ROSE, size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <path d="M50 88 C20 66 6 50 10 32 C14 14 38 10 50 28 C62 10 86 14 90 32 C94 50 80 66 50 88 Z" fill={`${color}55`} stroke={color} strokeWidth={4} />
  </svg>
);

/** A ladder that fades out upward: no top rung. */
const Ladder: React.FC = () => (
  <svg width={200} height={560} viewBox="0 0 200 560" style={{ overflow: "visible" }}>
    <defs>
      <linearGradient id="aa04lad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor={GOLD} stopOpacity={1} /><stop offset="1" stopColor={GOLD} stopOpacity={0} />
      </linearGradient>
    </defs>
    <path d="M40 560 L40 0 M160 560 L160 0" stroke="url(#aa04lad)" strokeWidth={8} />
    {Array.from({ length: 9 }).map((_, i) => <line key={i} x1={40} y1={530 - i * 62} x2={160} y2={530 - i * 62} stroke={GOLD} strokeOpacity={1 - i * 0.11} strokeWidth={6} />)}
  </svg>
);

/** A chair with a coat over it. */
const CoatChair: React.FC = () => (
  <svg width={170} height={220} viewBox="0 0 170 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${VIOLET}88)` }}>
    <path d="M40 20 L40 210 M130 120 L130 210 M40 120 L140 120" stroke={ROPE} strokeWidth={8} strokeLinecap="round" />
    <path d="M28 30 Q40 10 60 26 L66 110 L44 150 L22 110 Z" fill={`${VIOLET}44`} stroke={VIOLET} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

/** Two clapping hands, meeting at `at`. */
const Clap: React.FC<{ at: number }> = ({ at }) => {
  const { t } = useT();
  const g = 60 * (1 - ramp(t, at - 0.25, 0.25)) + 60 * ramp(t, at + 0.15, 0.4);
  const hand = (s: number) => (
    <svg width={90} height={150} viewBox="0 0 90 150" style={{ overflow: "visible", transform: `scaleX(${s})`, filter: `drop-shadow(0 0 8px ${WARM}88)` }}>
      <path d="M70 145 L70 30 Q70 12 56 12 Q44 12 44 30 L44 70 Q30 60 22 70 Q16 80 30 96 L50 145 Z" fill={`${WARM}22`} stroke={WARM} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
  return <div style={{ display: "flex", gap: g }}>{hand(1)}{hand(-1)}</div>;
};

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("The koan has two answers, and they do not conflict");
  return (
    <AbsoluteFill>
      <At x={960} y={260} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={64} speed={0.035} />
      </At>
      <At x={960} y={380} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={64} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      <Items items={[
        ["This is the fourth step of The Logic", 960, 110, <W c={DIM} s={28}>The Logic · Step 4 · After Anatta · John Tan (Thusness)</W>],
        ["The koan has two answers, and they do not conflict", 620, 560, <K c={GOLD} s={32}>answer one</K>, { pop: true }],
        ["The koan has two answers, and they do not conflict", 1300, 560, <K c={VIOLET} s={32}>answer two</K>, { pop: true, d: 0.5 }],
        ["The koan has two answers, and they do not conflict", 960, 680, <W c={CHALK} s={34} serif>they do not conflict</W>, { d: 1.4 }],
      ]} />
      <Flow x1={760} y1={560} x2={1150} y2={560} color={DIM} p={ramp(t, two + 1.2, 0.6)} pulses={false} dash />
    </AbsoluteFill>
  );
};

const TwoTruthsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const conv = c("Conventionally, the moment arises and ceases");
  const strike = c("The bell is struck, the ringing stops, and we can say when");
  const swing = 8 * Math.sin((t - strike) * 5) * Math.exp(-Math.max(0, t - strike) * 0.6) * (t > strike ? 1 : 0);
  const one = c("There is one moment, met two ways");
  const merge = ramp(t, one, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("The tradition calls these the two truths")} color={GOLD}>the two truths</Title>
      <At x={560 + 400 * merge} y={380} s={pop(t, fps, conv)} o={1}><Bell size={170} swing={swing} /></At>
      <Sound x={560 + 400 * merge} y={400} at={strike + 0.3} dur={4} r1={260} />
      <At x={560} y={590} o={ramp(t, conv + 0.4, 0.5) * (1 - merge)}><K c={GOLD} s={28}>arises · ceases · we can say when</K></At>
      <At x={1360} y={380} o={ramp(t, c("nothing that arises and nothing that ceases is found"), 0.5) * (1 - merge)}><Magnifier /></At>
      <At x={1360} y={590} o={ramp(t, c("nothing that arises and nothing that ceases is found") + 0.4, 0.5) * (1 - merge)}><K c={VIOLET} s={28}>looked for: nothing found</K></At>
      <Items items={[
        ["They are not two worlds, and not two levels", 960, 220, <W c={DIM} s={30}>not two worlds · not two levels</W>],
        ["There is one moment, met two ways", 660, 560, <W c={GOLD} s={28}>as it works</W>, { d: 1.0 }],
        ["There is one moment, met two ways", 1260, 560, <W c={VIOLET} s={28}>as it is looked for</W>, { d: 1.3 }],
        ["There is one moment, met two ways", 960, 700, <W c={CHALK} s={40} serif>one moment, met two ways</W>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Nagarjuna introduces them at the turning point of his work")}>Nagarjuna, Middle Way 24</Title>
      <Items items={[
        ["Nagarjuna introduces them at the turning point of his work", 960, 260, <W c={DIM} s={28}>the Buddhas teach relying on two truths</W>, { d: 1.2 }],
        ["the conventional truth of the world", 620, 420, <K c={GOLD} s={34}>conventional truth</K>, { pop: true }],
        ["the conventional truth of the world", 1300, 420, <K c={VIOLET} s={34}>ultimate truth</K>, { pop: true, d: 1.4 }],
        ["Miss the difference, he says, and the deep teaching is missed", 960, 620, <W c={CHALK} s={34} serif>miss the difference, miss the teaching</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MeaningsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const valid = c("Conventional truth is valid as dependence and as convention");
  const mist = c("It is mistaken only in the concealment");
  const P: [string, string, string, number][] = [
    ["Concealment: ordinary seeing hides how things are", "concealment", WARM, 440],
    ["Dependence: what is conventional exists only in dependence on other things", "dependence", TEAL, 960],
    ["And worldly convention: the names and agreements we live by", "worldly convention", GOLD, 1480],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("carries three meanings")}>“conventional”: three meanings</Title>
      {P.map(([cue, w, col, x]) => (
        <At key={w} x={x} y={330} s={pop(t, fps, c(cue))}><K c={col} s={32}>{w}</K></At>
      ))}
      <Items items={[
        ["Concealment: ordinary seeing hides how things are", 440, 430, <W c={DIM} s={24}>things seem to stand on their own</W>, { d: 1.0 }],
        ["Dependence: what is conventional exists only in dependence on other things", 960, 430, <W c={DIM} s={24}>only in dependence</W>, { d: 1.0 }],
        ["And worldly convention: the names and agreements we live by", 1480, 430, <W c={DIM} s={24}>names, agreements</W>, { d: 1.0 }],
        ["Conventional truth is valid as dependence and as convention", 1220, 560, <W c={GREEN} s={30}>valid</W>, { d: 0.8 }],
        ["It is mistaken only in the concealment", 440, 560, <W c={WARM} s={30}>mistaken only here</W>],
        ["That habit is the real target", 440, 660, <K c={WARM} s={28}>the habit: the real target</K>, { pop: true }],
      ]} />
      <Tick x={960} y={500} at={valid + 0.3} />
      <Tick x={1480} y={500} at={valid + 0.6} />
      <At x={440} y={330} o={ramp(t, mist, 0.4)}>
        <div style={{ width: 300, height: 76, borderRadius: 38, border: `3px dashed ${WARM}`, boxShadow: `0 0 24px ${WARM}` }} />
      </At>
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const strike = c("Listen to a bell");
  const swing = 8 * Math.sin((t - strike) * 5) * Math.exp(-Math.max(0, t - strike) * 0.6) * (t > strike ? 1 : 0);
  const look = c("Now look for the ringing apart from its sounding");
  const homage = c("without ceasing, without arising, without coming and without going");
  return (
    <AbsoluteFill>
      <At x={620} y={340} s={pop(t, fps, strike - 0.3)}><Bell swing={swing} size={190} /></At>
      <Sound x={620} y={360} at={strike + 0.4} dur={5} r1={300} />
      <At x={620 + 180 * ramp(t, look, 1.2)} y={360} o={ramp(t, look, 0.4) * (1 - ramp(t, homage - 1, 0.5))}><Magnifier /></At>
      <Items items={[
        ["Listen to a bell", 620, 560, <K c={GOLD} s={28}>struck · stopped · we can say when</K>, { d: 1.0, until: "Nagarjuna opens his whole work this way" }],
        ["Now look for the ringing apart from its sounding", 1320, 300, <W c={ICE} s={28}>apart from sounding, conditions, name</W>, { d: 0.6, until: "Nagarjuna opens his whole work this way" }],
        ["Nothing is found", 1320, 380, <SK c={DIM} s={26} strikeAt={c("Nothing is found") + 0.6}>a ringing on its own</SK>, { until: "Nagarjuna opens his whole work this way" }],
        ["Nagarjuna opens his whole work this way", 1260, 240, <W c={DIM} s={26}>the homage of the Middle Way</W>],
        ["is not a denial that the bell rang", 960, 660, <W c={GOLD} s={30}>the bell rang</W>],
        ["Not found never means did not happen", 960, 750, <W c={CHALK} s={34} serif>not found never means did not happen</W>],
      ]} />
      <At x={1260} y={360} o={ramp(t, homage - 0.3, 0.3)}>
        <div style={{ width: 640, textAlign: "center" }}>
          <Reveal text="without ceasing, without arising, without coming, without going" at={homage} size={40} speed={0.03} wrap />
        </div>
      </At>
    </AbsoluteFill>
  );
};

const LogicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Seen with the logic of substance, the ringing is a thing");
  const comp = c("So the two answers seem to compete");
  const dep = c("Seen with the logic of dependency");
  const shake = t > comp && t < dep ? 6 * Math.sin(t * 18) : 0;
  const bx = 1360;
  return (
    <AbsoluteFill>
      <At x={560} y={170} o={ramp(t, sub, 0.5)}><K c={WARM} s={26}>logic of substance</K></At>
      <At x={560} y={340} s={pop(t, fps, sub + 0.6)} r={shake}>
        <div style={{ width: 200, height: 110, borderRadius: 14, background: `${WARM}44`, border: `4px solid ${WARM}`, boxShadow: `0 0 30px ${WARM}88`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><W c={CHALK} s={30}>ringing</W></div>
      </At>
      <Items items={[
        ["So the two answers seem to compete", 340, 500, <K c={GREEN} s={26}>really arises?</K>, { pop: true }],
        ["So the two answers seem to compete", 780, 500, <K c={ROSE} s={26}>really ceases?</K>, { pop: true, d: 0.4 }],
        ["So the two answers seem to compete", 560, 600, <W c={WARM} s={26}>rival reports</W>, { d: 1.2 }],
      ]} />
      <At x={bx} y={170} o={ramp(t, dep, 0.5)}><K c={TEAL} s={26}>logic of dependency</K></At>
      <Svg>
        <DrawPath d={`M${bx - 300} 340 L${bx + 300} 340`} p={ramp(t, dep + 0.3, 0.8)} color={DIM} width={3} len={620} glow={false} />
      </Svg>
      <At x={bx} y={340} o={ramp(t, dep + 0.6, 0.4)}>
        <div style={{ width: 240, height: 70, borderRadius: 35, background: `${GOLD}44`, border: `3px solid ${GOLD}`, boxShadow: `0 0 26px ${GOLD}` }} />
      </At>
      <Items items={[
        ["Seen with the logic of dependency", bx - 230, 300, <W c={DIM} s={22}>silence</W>, { d: 0.8 }],
        ["Seen with the logic of dependency", bx + 230, 300, <W c={DIM} s={22}>silence</W>, { d: 0.8 }],
        ["Seen with the logic of dependency", bx, 340, <W c={CHALK} s={26}>sounding</W>, { d: 0.8 }],
        ["merely designated as arising or ceasing, upon conditions", bx, 230, <W c={GOLD} s={26}>merely designated, upon conditions</W>],
        ["is picked out against the silence before", bx - 130, 430, <K c={GREEN} s={24}>“arising”</K>, { pop: true }],
        ["ceasing against the silence after", bx + 130, 430, <K c={ROSE} s={24}>“ceasing”</K>, { pop: true }],
        ["like the stairs of Step 1", bx, 540, <W c={TEAL} s={26}>up for one climbing, down for one coming down</W>],
        ["Nothing competes", 960, 720, <W c={CHALK} s={42} serif>nothing competes</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dusk = c("Walk into a garage at dusk");
  const lampAt = c("Someone switches on the lamp");
  const on = ramp(t, lampAt + 0.3, 0.3);
  const snake = ramp(t, c("for a moment it is a snake") - 0.2, 0.6) * (1 - ramp(t, c("It is a rope"), 0.6));
  const tie = c("tie down the load on the car");
  const look = c("you look for the rope apart from its strands");
  const coilO = 1 - ramp(t, tie, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, dusk, 0.6) * 0.4 * (1 - on)}><div style={{ width: 1500, height: 700, background: "radial-gradient(#0008, #0000 70%)" }} /></At>
      <At x={700} y={300} o={ramp(t, dusk, 0.6)}><Lamp on={on} /></At>
      <At x={700} y={500} o={ramp(t, dusk + 0.4, 0.8) * coilO}><Coil snake={snake} /></At>
      <Items items={[
        ["Walk into a garage at dusk", 960, 110, <W c={DIM} s={32}>a garage at dusk</W>],
        ["for a moment it is a snake", 1240, 440, <K c={GREEN} s={30}>a snake!</K>, { pop: true, until: "It is a rope" }],
        ["It is a rope", 1240, 440, <K c={ROPE} s={30}>a rope</K>, { pop: true, until: "tie down the load on the car" }],
        ["tie down the load on the car", 700, 520, <Load />, { pop: true }],
        ["you look for the rope apart from its strands", 1320, 330, <K c={TEAL} s={24}>strands</K>, { pop: true }],
        ["you look for the rope apart from its strands", 1320, 400, <K c={TEAL} s={24}>twist</K>, { pop: true, d: 0.4 }],
        ["you look for the rope apart from its strands", 1320, 470, <K c={TEAL} s={24}>use</K>, { pop: true, d: 0.8 }],
        ["you look for the rope apart from its strands", 1320, 540, <K c={TEAL} s={24}>name</K>, { pop: true, d: 1.2 }],
        ["you look for the rope apart from its strands", 1320, 640, <SK c={DIM} s={24} strikeAt={look + 3.4}>a rope apart from them</SK>, { d: 2.0 }],
        ["The load stays tied", 700, 700, <W c={GOLD} s={34} serif>the load stays tied</W>],
      ]} />
      <At x={1150} y={400} o={ramp(t, look + 0.2, 0.4)} s={pop(t, fps, look)}><Magnifier /></At>
    </AbsoluteFill>
  );
};

const CorrectionsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lamp = c("The lamp corrected the snake into a rope");
  const srch = c("The search corrected nothing about the rope");
  return (
    <AbsoluteFill>
      <Title at={c("Two corrections happened there")}>two kinds of correction</Title>
      <Items items={[
        ["The lamp corrected the snake into a rope", 560, 230, <K c={GOLD} s={28}>1 · the lamp</K>, { pop: true }],
        ["The lamp corrected the snake into a rope", 420, 380, <SK c={GREEN} s={28} strikeAt={lamp + 1.0}>snake</SK>, { d: 0.4 }],
        ["The lamp corrected the snake into a rope", 720, 380, <K c={ROPE} s={28}>rope</K>, { pop: true, d: 1.4 }],
        ["The lamp corrected the snake into a rope", 560, 480, <W c={DIM} s={24}>one thing for another</W>, { d: 2.0 }],
        ["The search corrected nothing about the rope", 1360, 230, <K c={VIOLET} s={28}>2 · the search</K>, { pop: true }],
        ["The search corrected nothing about the rope", 1360, 380, <K c={ROPE} s={28}>rope: still a rope</K>, { d: 0.6 }],
        ["removed the idea of a rope standing there", 1360, 480, <SK c={DIM} s={24} strikeAt={c("removed the idea of a rope standing there") + 1.2}>a rope from its own side</SK>],
        ["removed the idea of a rope standing there", 1360, 600, <W c={VIOLET} s={28} serif>“looked for, not found”</W>, { d: 2.0 }],
      ]} />
      <Flow x1={480} y1={380} x2={640} y2={380} color={GOLD} p={ramp(t, lamp + 1.0, 0.5)} pulses={false} />
      <At x={960} y={420} o={ramp(t, srch, 0.5)}><div style={{ width: 3, height: 360, background: `${DIM}66` }} /></At>
    </AbsoluteFill>
  );
};

const StoreysScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("a picture of reality in two storeys");
  const sp = c("In the spiritual version, the passing world is a veil");
  return (
    <AbsoluteFill>
      <Title at={st} color={WARM}>a picture in two storeys</Title>
      <At x={560} y={360} o={ramp(t, st + 0.4, 0.5)}><Floor w={560} color={WARM} dashed /></At>
      <At x={560} y={600} o={ramp(t, st + 0.8, 0.5)}><Floor w={560} color={WARM} dashed /></At>
      <At x={1360} y={360} o={ramp(t, sp, 0.5)}><Floor w={560} color={VIOLET} dashed /></At>
      <At x={1360} y={600} o={ramp(t, sp + 0.4, 0.5)}><Floor w={560} color={VIOLET} dashed /></At>
      <Items items={[
        ["a picture of reality in two storeys", 560, 300, <W c={CHALK} s={26}>sounds, tables: a surface</W>, { d: 1.0 }],
        ["particles do the real work backstage", 560, 540, <W c={WARM} s={26}>particles, backstage</W>],
        ["particles do the real work backstage", 560, 690, <W c={DIM} s={22}>the physical version</W>, { d: 0.8 }],
        ["In the spiritual version, the passing world is a veil", 1360, 300, <W c={CHALK} s={26}>the passing world: a veil</W>, { d: 0.6 }],
        ["a pure Being, a Source, a cosmic Awareness", 1360, 540, <W c={VIOLET} s={26}>Being · Source · Awareness</W>],
        ["a pure Being, a Source, a cosmic Awareness", 1360, 690, <W c={DIM} s={22}>the spiritual version</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const WitnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("a pure, unchanging Witness on one side");
  const drift = (t - w) * 40;
  return (
    <AbsoluteFill>
      <Title at={c("The author lived in the second picture for years")}>the author's second picture</Title>
      <Items items={[
        ["The realisation of I AM was real", 960, 210, <K c={GOLD} s={30}>I AM: a real realisation</K>, { pop: true }],
        ["The Witness was the deeper floor", 560, 700, <W c={VIOLET} s={28}>the deeper floor</W>],
        ["The world was the show", 1360, 700, <W c={CHALK} s={28}>the show</W>],
      ]} />
      <At x={560} y={460} s={pop(t, fps, w)}><Person color={VIOLET} size={190} /></At>
      <At x={560} y={590} o={ramp(t, w + 0.4, 0.5)}><Floor w={360} color={VIOLET} dashed /></At>
      <At x={560} y={330} o={ramp(t, w + 0.6, 0.5)}><W c={VIOLET} s={26}>a pure, unchanging Witness</W></At>
      {["sounds", "sights", "thoughts", "days"].map((x, i) => (
        <At key={x} x={1100 + ((i * 140 + drift) % 560)} y={360 + (i % 2) * 120} o={ramp(t, w + 1.2 + i * 0.3, 0.5)}>
          <K c={CHALK} s={24}>{x}</K>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const NoRoomScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const no = c("The two truths leave no room for either version");
  const drop = ramp(t, no + 0.4, 1.2);
  const one = c("They are two ways of meeting one place");
  return (
    <AbsoluteFill>
      <Title at={no} color={TEAL}>no room for either</Title>
      <At x={960} y={420 + 200 * drop} o={ramp(t, no, 0.3) * (1 - drop)}><Floor w={800} color={DIM} dashed /></At>
      <Items items={[
        ["No hidden substrate", 560, 260, <SK c={DIM} s={26} strikeAt={c("No hidden substrate") + 0.8}>a hidden substrate</SK>],
        ["No deeper dimension underneath", 960, 260, <SK c={DIM} s={26} strikeAt={c("No deeper dimension underneath") + 0.8}>a deeper level</SK>],
        ["No deeper dimension underneath", 1360, 260, <SK c={DIM} s={26} strikeAt={c("No deeper dimension underneath") + 2.2}>a higher one above</SK>, { d: 1.4 }],
        ["Appearance is not a cover over something more real", 960, 400, <W c={CHALK} s={32} serif>“Appearance is not a cover over something more real.</W>, { until: "They are two ways of meeting one place" }],
        ["There is nothing behind it for it to cover", 960, 460, <W c={CHALK} s={32} serif>There is nothing behind it for it to cover.”</W>, { until: "They are two ways of meeting one place" }],
      ]} />
      <At x={960} y={560} s={pop(t, fps, one)}>
        <div style={{ width: 150, height: 150, borderRadius: 75, border: `4px solid ${GOLD}`, background: `${GOLD}22`, boxShadow: `0 0 30px ${GOLD}` }} />
      </At>
      <At x={700} y={560} o={ramp(t, one + 0.5, 0.4)}><Eye color={GOLD} size={110} /></At>
      <At x={1220} y={560} o={ramp(t, one + 0.8, 0.4)}><Eye color={VIOLET} size={110} /></At>
      <At x={960} y={720} o={ramp(t, one + 1.2, 0.5)}><W c={GOLD} s={36} serif>one place, met two ways</W></At>
    </AbsoluteFill>
  );
};

const ValidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("A table, a rainbow, a thought, a moment");
  const items = ["a table", "a rainbow", "a thought", "a moment"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Conventional sounds like a demotion", 960, 220, <SK c={DIM} s={30} strikeAt={c("Conventional sounds like a demotion") + 2.0}>“merely conventional”</SK>],
        ["Conventional truth is fully valid", 960, 360, <W c={GOLD} s={48} serif>fully valid</W>],
      ]} />
      {items.map((w, i) => (
        <At key={w} x={420 + i * 360} y={540} s={pop(t, fps, v + i * 0.5)}><K c={GOLD} s={30}>{w}</K></At>
      ))}
      <At x={960} y={660} o={ramp(t, v + 2.4, 0.5)}><W c={CHALK} s={28}>thoroughly real, conventionally</W></At>
    </AbsoluteFill>
  );
};

const ChecksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const C: [string, string][] = [
    ["Known to ordinary cognition", "known to ordinary cognition"],
    ["Not overturned by another sound ordinary cognition", "not overturned by another sound one"],
    ["Not overturned by analysis of how things ultimately are", "not overturned by analysis"],
  ];
  const sn = c("The snake fails the second");
  const ro = c("A rope existing from its own side fails the third");
  const ev = c("The everyday world can tell a rope from a snake");
  return (
    <AbsoluteFill>
      <Title at={c("And convention has standards")} color={GOLD}>convention has standards</Title>
      <At x={960} y={170} o={ramp(t, c("gives three checks"), 0.5)}><W c={DIM} s={26}>Tsongkhapa's three checks</W></At>
      {C.map(([cue, w], i) => (
        <At key={cue} x={560} y={300 + i * 110} o={ramp(t, c(cue), 0.5)}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}><Num n={String(i + 1)} color={GOLD} lit={ramp(t, c(cue), 0.4)} /><W c={CHALK} s={28}>{w}</W></div>
        </At>
      ))}
      <Items items={[
        ["The snake fails the second", 1300, 410, <K c={GREEN} s={26}>the snake</K>, { pop: true }],
        ["A rope existing from its own side fails the third", 1300, 520, <K c={DIM} s={26}>a rope on its own side</K>, { pop: true }],
        ["The everyday world can tell a rope from a snake", 1300, 630, <K c={ROPE} s={26}>the rope, as named</K>, { pop: true }],
        ["The everyday world can tell a rope from a snake", 960, 760, <W c={GOLD} s={32} serif>a rope is not a snake</W>, { d: 1.4 }],
      ]} />
      <Crossed x={1520} y={410} at={sn + 0.6} size={22} />
      <Crossed x={1560} y={520} at={ro + 0.8} size={22} />
      <Tick x={1520} y={630} at={ev + 0.4} size={22} />
      <Tick x={1580} y={630} at={ev + 0.6} size={22} />
      <Tick x={1640} y={630} at={ev + 0.8} size={22} />
    </AbsoluteFill>
  );
};

const UltimateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nf = c("no own-nature is found");
  const ex = c("And it gets no exemption");
  return (
    <AbsoluteFill>
      <Title at={c("Ultimate truth is not a hidden particle")} color={VIOLET}>ultimate truth</Title>
      <Items items={[
        ["Ultimate truth is not a hidden particle", 460, 230, <SK c={DIM} s={26} strikeAt={c("Ultimate truth is not a hidden particle") + 1.0}>a hidden particle</SK>],
        ["not a pure Awareness behind the world", 960, 230, <SK c={DIM} s={26} strikeAt={c("not a pure Awareness behind the world") + 1.0}>an Awareness behind</SK>],
        ["not a pure Awareness behind the world", 1460, 230, <SK c={DIM} s={26} strikeAt={c("not a pure Awareness behind the world") + 2.4}>a timeless Now</SK>, { d: 1.4 }],
        ["no own-nature is found", 960, 520, <W c={VIOLET} s={30}>no own-nature found</W>, { d: 0.4 }],
        ["Ultimate truth is not a higher world", 960, 620, <W c={CHALK} s={32} serif>“Ultimate truth is not a higher world.</W>],
        ["It is the emptiness of this one", 960, 680, <W c={CHALK} s={32} serif>It is the emptiness of this one.”</W>],
      ]} />
      <At x={820} y={390} o={ramp(t, nf - 1.2, 0.5) * (1 - ramp(t, ex, 0.5))}><Coil snake={0} size={220} /></At>
      <At x={1080} y={390} o={ramp(t, nf - 0.8, 0.5) * (1 - ramp(t, ex, 0.5))} s={pop(t, fps, nf - 0.8)}><Magnifier /></At>
      <At x={960} y={400} o={ramp(t, ex, 0.5)}>
        <div style={{ position: "relative" }}><K c={VIOLET} s={32}>“the ultimate”</K></div>
      </At>
      <Items items={[
        ["And it gets no exemption", 960, 300, <W c={DIM} s={26}>no exemption: designated, and empty too</W>, { d: 0.8 }],
        ["There is no level that stays", 960, 770, <W c={GOLD} s={34} serif>no level that stays</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LadderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lad = c("Convention is the ladder");
  const apart = c("Taken apart, each truth turns into a fixed object");
  const join = c("Joined, they dissolve each other's solidity");
  const j = ramp(t, join, 1.2);
  return (
    <AbsoluteFill>
      <Title at={c("The two truths need each other")}>each needs the other</Title>
      <Items items={[
        ["Without relying on convention, the ultimate cannot be taught", 960, 190, <W c={DIM} s={28}>without convention, the ultimate cannot be taught</W>],
      ]} />
      <At x={560} y={540} o={ramp(t, lad, 0.6)}><Ladder /></At>
      <At x={560} y={300} o={ramp(t, lad + 1.2, 0.5)}><W c={GOLD} s={26}>no top</W></At>
      <At x={1220 - 120 * j} y={420} s={pop(t, fps, apart)} o={1 - 0.6 * j}>
        <div style={{ width: 150, height: 90, borderRadius: 12, background: `${GOLD}55`, border: `4px solid ${GOLD}`, opacity: 1 - j * 0.7 }} />
      </At>
      <At x={1500 + 120 * j} y={420} s={pop(t, fps, apart + 0.4)} o={1 - 0.6 * j}>
        <div style={{ width: 150, height: 90, borderRadius: 12, background: `${VIOLET}55`, border: `4px solid ${VIOLET}`, opacity: 1 - j * 0.7 }} />
      </At>
      <Items items={[
        ["Taken apart, each truth turns into a fixed object", 1360, 540, <W c={WARM} s={26}>apart: two fixed objects</W>, { d: 0.8, until: "Joined, they dissolve each other's solidity" }],
        ["Joined, they dissolve each other's solidity", 1360, 540, <W c={TEAL} s={30} serif>joined: no solidity left</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const MiphamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dis = c("a cold thing over there and a feeler over here");
  const con = c("Meet the same coldness without that fixing");
  const split = ramp(t, dis, 0.8) * (1 - ramp(t, con, 0.8));
  const after = c("After anatta, presence did not fade into some deeper truth");
  return (
    <AbsoluteFill>
      <Title at={c("Mipham draws the line another way")}>Mipham: discordant, concordant</Title>
      <At x={1060 + 180 * split} y={400} s={pop(t, fps, dis - 1.0)}><IceCube size={150} spin={t * 12} flash={ramp(t, after, 0.6)} /></At>
      <At x={760 - 120 * split} y={400} o={split}><Person color={WARM} size={170} /></At>
      <At x={910} y={290} o={split}><W c={WARM} s={24}>feeler here · cold thing there</W></At>
      <Items items={[
        ["a cold thing over there and a feeler over here", 960, 600, <W c={WARM} s={30}>discordant: misread</W>, { d: 0.8, until: "Meet the same coldness without that fixing" }],
        ["Meet the same coldness without that fixing", 960, 600, <W c={TEAL} s={30}>concordant: the same coldness, not fixed</W>, { d: 0.6 }],
        ["Meet the same coldness without that fixing", 960, 670, <W c={DIM} s={26}>nothing different appears</W>, { d: 1.8 }],
        ["After anatta, presence did not fade into some deeper truth", 960, 220, <W c={GOLD} s={30}>presence: more vivid, not deeper</W>],
        ["What changed was how it was held", 960, 770, <W c={CHALK} s={34} serif>what changed was how it was held</W>],
      ]} />
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const col = (x: number, label: string, at: number, pic: React.ReactNode, works: string, nf: string, nfAt: number) => (
    <React.Fragment key={label}>
      <At x={x} y={210} o={ramp(t, at, 0.5)}><K c={GOLD} s={26}>{label}</K></At>
      <At x={x} y={380} o={ramp(t, at + 0.2, 0.5)}>{pic}</At>
      <At x={x} y={540} o={ramp(t, at + 0.8, 0.5)}><W c={GOLD} s={24}>{works}</W></At>
      <At x={x} y={620} o={ramp(t, nfAt, 0.5)}><W c={VIOLET} s={22}>{nf}</W></At>
    </React.Fragment>
  );
  const self = c("I wrote this is correct, and it can be checked");
  const ship = c("A ship whose every plank has been replaced still sails");
  const fire = c("Fire burns, and a hand put in it is hurt");
  const fr = c("And the friend you love keeps promises, and grieves");
  return (
    <AbsoluteFill>
      <Title at={c("Every thing has the koan's two answers")}>beyond the moment</Title>
      {col(360, "the self", self, <W c={CHALK} s={36} serif>“I wrote this”</W>, "correct, checkable", "no I apart from body, mind, history", self + 4.0)}
      {col(760, "an object", ship, <Ship rock={3 * Math.sin(t * 1.5)} />, "still sails", "no ship apart from planks, use, name", ship + 3.2)}
      {col(1160, "a cause", fire, <Flame />, "it burns", "no power to burn on its own", c("Yet no power to burn is found in the fire on its own"))}
      {col(1560, "the person", fr, <Heart />, "keeps promises, grieves", "not found on their own", fr + 3.0)}
      <Items items={[
        ["One self, met two ways", 960, 730, <W c={CHALK} s={30} serif>one thing, met two ways</W>, { until: "Seeing that takes nothing from the love" }],
        ["Seeing that takes nothing from the love", 960, 730, <W c={ROSE} s={30} serif>it takes nothing from the love</W>],
        ["Love, sorrow and care stay where they were", 960, 800, <W c={GOLD} s={26}>love, sorrow and care stay</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const clap = c("Clap once") + 0.4;
  const coat = c("Recall a coat on a chair, taken for a person");
  const fade = 1 - ramp(t, coat - 0.3, 0.5);
  return (
    <AbsoluteFill>
      <Title at={c("Try it")} color={GOLD}>try it</Title>
      <At x={960} y={340} o={ramp(t, c("Clap once") - 0.3, 0.3) * fade}><Clap at={clap} /></At>
      {t < coat ? <Sound x={960} y={340} at={clap} dur={1.2} r1={340} /> : null}
      <Items items={[
        ["Say when the sound began and ended", 960, 540, <K c={GOLD} s={28}>began · ended: correct</K>, { pop: true, until: "Recall a coat on a chair, taken for a person" }],
        ["Then look for the sound apart from the sounding", 960, 620, <W c={VIOLET} s={28}>apart from the sounding: not found</W>, { until: "Recall a coat on a chair, taken for a person" }],
        ["Notice that the second look takes nothing from the first", 960, 700, <W c={CHALK} s={30} serif>the second look takes nothing from the first</W>, { until: "Recall a coat on a chair, taken for a person" }],
        ["Recall a coat on a chair, taken for a person", 760, 360, <CoatChair />, { pop: true }],
        ["Recall a coat on a chair, taken for a person", 1160, 360, <Person color={DIM} size={180} dashed />, { d: 0.6, until: "Notice how cleanly the second look corrected the first", ud: 1.0 }],
        ["Notice how cleanly the second look corrected the first", 960, 560, <W c={CHALK} s={28}>corrected, cleanly</W>],
        ["Convention has standards", 960, 640, <K c={GOLD} s={28}>convention has standards</K>, { pop: true }],
        ["One sound, met two ways", 960, 740, <W c={GOLD} s={40} serif>one sound, met two ways</W>],
        ["And nothing extra behind it", 960, 810, <W c={CHALK} s={28}>and nothing extra behind it</W>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "This moment ceases as it arises"], ["whole", "Conventionally, the moment arises and ceases"],
    ["web", "Nagarjuna introduces them at the turning point of his work"], ["sea", "carries three meanings"],
    ["open", "Listen to a bell"], ["search", "Seen with the logic of substance, the ringing is a thing"],
    ["doubt", "Walk into a garage at dusk"], ["search", "Two corrections happened there"],
    ["doubt", "a picture of reality in two storeys"], ["web", "The author lived in the second picture for years"],
    ["whole", "The two truths leave no room for either version"], ["vivid", "Conventional sounds like a demotion"],
    ["sea", "Ultimate truth is not a hidden particle"], ["web", "The two truths need each other"],
    ["sea", "Mipham draws the line another way"], ["vivid", "Every thing has the koan's two answers"],
    ["whole", "Try it"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["This moment ceases as it arises", <KoanScene />],
    ["Conventionally, the moment arises and ceases", <TwoTruthsScene />],
    ["Nagarjuna introduces them at the turning point of his work", <VerseScene />],
    ["carries three meanings", <MeaningsScene />],
    ["Listen to a bell", <BellScene />],
    ["Seen with the logic of substance, the ringing is a thing", <LogicsScene />],
    ["Walk into a garage at dusk", <RopeScene />],
    ["Two corrections happened there", <CorrectionsScene />],
    ["a picture of reality in two storeys", <StoreysScene />],
    ["The author lived in the second picture for years", <WitnessScene />],
    ["The two truths leave no room for either version", <NoRoomScene />],
    ["Conventional sounds like a demotion", <ValidScene />],
    ["And convention has standards", <ChecksScene />],
    ["Ultimate truth is not a hidden particle", <UltimateScene />],
    ["The two truths need each other", <LadderScene />],
    ["Mipham draws the line another way", <MiphamScene />],
    ["Every thing has the koan's two answers", <BeyondScene />],
    ["Try it", <TryScene />],
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
