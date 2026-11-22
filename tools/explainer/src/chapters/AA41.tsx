// After Anatta · Questions: Rainbow Body: What the Traditions Report (AA41).
// AA14 and AA29 merged and stripped of the owner's view (owner, 2026-11-22): strictly reporting. His view only in the
// closing line; no apple (owner's comments, 2026-11-22) ("not difficult to understand… I shall not comment here").
// Arc: the story -> reporting only -> Dzogchen: basis, five lights, two practices, four visions, lamps, three results,
// the teachers' warning -> Gelug: wind and mind, dissolution, illusory body, union, tukdam and the 2021 study ->
// Kālacakra: ten signs, empty form, the divining mirror -> Bön; the tables differ -> the reports and their lists ->
// Taoist yang spirit; Lü and Huanglong; others; the early discourses -> the butter bag -> the apple -> the closing line.
// Stance: everything drawn as "said", "reported", "in its account"; nothing struck as a correction of a tradition.
// Cue phrases avoid the respelled names and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // the story
  "In eastern Tibet, the story goes", "Over a week it grows smaller", "Rainbows are seen over the house",
  "only the hair and the nails are left",
  // reporting only
  "This is After Anatta", "In this video I only report", "how they say it is reached", "what the reports of it are",
  "and where other traditions tell something like it", "I keep my own view out of it",
  // the basis
  "the Great Perfection", "speaks of the basis in three aspects", "Its essence is empty", "Its nature is clear",
  "And its display never stops", "and the light as five lights", "Then the texts tell how", "it is taken as something other",
  "and they harden into the five elements", "From the elements come the body and the world",
  "the ordinary body is light not recognised", "The rainbow body is said to be the same process run the other way",
  "One caution before going further", "should not be read through our own culture", "or through modern knowledge of light",
  "the five lights only make sense against it", "I set out that background in a short video",
  // the practices
  "There are two practices", "the knowing that is empty and clear at once", "With particular postures and gazes", "Small drops of light",
  "Fine threads", "They grow into patterns", "These are the four visions", "The fourth is called the exhaustion of phenomena",
  "The texts also speak of lamps", "One lamp is the eyes", "Another is the open expanse", "Another is the circles of light themselves",
  "And the last is the wisdom",
  // results
  "names three results", "the body dissolving into tiny particles", "The rainbow body comes when direct crossing is completed at death",
  "Sweet scents are reported", "In the end only hair and nails are left", "And the rarest is the great transference",
  "The body becomes a body of light", "The tradition names Garab Dorje",
  // the warning
  "add a warning", "The rainbow body is first a realization", "The corpse is a sign of it", "Malcolm Smith",
  "a partial rainbow body", "is a worldly power",
  // Gelug
  "does not teach direct crossing", "Its view is that nothing exists from its own side", "The fast path is tantra",
  "tantra rests on one point", "Mind and wind are one thing seen from two sides", "Everyone meets this at death",
  "earth into water", "Then come three appearances, white, red and black", "Then the clear light of death",
  "The yogi rehearses this while alive", "The clear light dawns", "This is the illusory body", "and the two are joined",
  "Why does it work", "Because the body's material is wind", "The clear light must realise emptiness",
  "are set out in another of my videos",
  // tukdam
  "is known for is", "the body stays fresh", "It does not shrink", "measured thirteen such cases",
  "they tested the brain, not the claim about the body", "himself is said to have become a buddha",
  "No rainbow body is claimed for him",
  // Kālacakra
  "A third system is the", "In its night yoga", "ten signs appear in order", "Smoke", "A mirage", "A firefly", "A lamp",
  "A flame", "The moon", "The sun", "Darkness", "A flash of lightning", "And a great sphere of light",
  "Its texts call what appears empty form", "made of no atoms at all", "a young girl sees in a divining mirror",
  "goal is not called a rainbow body", "a union of empty form and unchanging bliss", "The scholar",
  "already set these ten signs beside the four visions",
  // Bön, tables
  "its own lamps and visions, and its own rainbow body", "is said to have attained it in nineteen",
  "such as offerings to the four guests", "Even the tables of colours differ", "these change from text to text",
  // the reports
  "Now the reports", "Sonam Namgyal", "the body shrank to the size of a bean", "A priest and scholar, Francis Tiso",
  "Some popular papers call such cases proof", "They are eyewitness reports", "None has been checked by anyone independent",
  "And the lists vary", "whose relics were kept", "seventeen years later in another", "The sixteenth Karmapa is listed too",
  // the yang spirit
  "Buddhism is not alone in telling of such a body", "the practitioner refines essence into energy", "The aim is the yang spirit",
  "is called the yin spirit", "Mind alone, they say, is not enough", "Two endings are told", "leaving only clothes or a staff",
  "the master rises in broad daylight",
  "tells a story about this", "visits the Chan master", "Even if you last eighty thousand aeons", "then wakes up",
  "Others tell of it too", "went into his room in eighteen", "When it was opened, he was not found",
  "the uncreated light of Mount Tabor", "Sufis speak of a man of light", "Each tradition reads the result in its own way",
  "the early Buddhist discourses", "Five of the six higher knowledges", "Only the sixth, the ending of the taints",
  // butter bag
  "There is a Tibetan image worth keeping", "Raw leather is stiff", "it grows soft", "slowly hardens like wood",
  "Knowledge never worked into practice",
  // the end
  "the rainbow body is not difficult to understand",
  "But as this is my personal view", "I shall not comment here",
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

// ---------------------------------------------------------------- scenes
/** A simple board: a title held for the scene, and items. */
const Board: React.FC<{ title: string; tc?: string; items: It[]; until?: string }> = ({ title, tc = CHALK, items, until }) => (
  <AbsoluteFill>
    <Title text={title} c={tc} until={until} />
    <Items items={items} />
  </AbsoluteFill>
);

const StoryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const shrink = ramp(t, c("Over a week it grows smaller"), 3.2);
  const arcs = ramp(t, c("Rainbows are seen over the house"), 2);
  const intro = c("This is After Anatta");
  const pre = 1 - ramp(t, intro, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={500} o={ramp(t, 0.2, 0.8) * pre}><House p={ramp(t, 0.2, 2)} /></At>
      <At x={960} y={560} s={1 - 0.62 * shrink} o={(1 - 0.75 * ramp(t, c("only the hair and the nails are left"), 1)) * ramp(t, 0.6, 0.8) * pre}><Figure p={ramp(t, 0.6, 1.6)} color={DIM} /></At>
      <At x={960} y={250} o={arcs * pre}><Arcs p={arcs} /></At>
      <Items items={[
        ["In eastern Tibet, the story goes", 960, 100, <Wd c={DIM} s={30}>a story told in eastern Tibet</Wd>, { until: "This is After Anatta" }],
        ["only the hair and the nails are left", 960, 800, <Wd c={CHALK} s={32} serif>only hair and nails, it is said</Wd>, { until: "This is After Anatta" }],
        ["This is After Anatta", 960, 200, <Wd c={DIM} s={30}>After Anatta</Wd>],
        ["In this video I only report", 960, 330, <Wd c={CHALK} s={60} serif>Rainbow Body</Wd>],
        ["In this video I only report", 960, 430, <Wd c={GOLD} s={40} serif>what the traditions report</Wd>, { d: 0.6 }],
        ["how they say it is reached", 520, 580, <K c={CHALK} s={26}>what it is · how it is reached</K>],
        ["what the reports of it are", 960, 580, <K c={CHALK} s={26}>the reports</K>],
        ["and where other traditions tell something like it", 1400, 580, <K c={CHALK} s={26}>other traditions</K>],
        ["I keep my own view out of it", 960, 720, <K c={DIM} s={28}>reporting only</K>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const harden = ramp(t, c("and they harden into the five elements"), 1.5);
  return (
    <AbsoluteFill>
      <Title text="Dzogchen, the Great Perfection" c={GOLD} />
      <Items items={[
        ["speaks of the basis in three aspects", 960, 200, <Wd c={CHALK} s={32} serif>the basis, in three aspects</Wd>],
        ["Its essence is empty", 480, 290, <K c={TEAL} s={28}>essence · empty</K>],
        ["Its nature is clear", 960, 290, <K c={GOLD} s={28}>nature · clear</K>],
        ["And its display never stops", 1440, 290, <K c={VIOLET} s={28}>display · unceasing</K>],
        ["and the light as five lights", 960, 420, <FiveLights />],
        ["it is taken as something other", 960, 520, <Wd c={DIM} s={28}>not recognised · taken as other, over there</Wd>],
        ["From the elements come the body and the world", 960, 700, <Wd c={CHALK} s={30}>→ the body and the world</Wd>],
        ["the ordinary body is light not recognised", 960, 790, <Wd c={GOLD} s={34} serif>the ordinary body: light not recognised</Wd>],
      ]} />
      <At x={960} y={610} o={harden}>
        <div style={{ display: "flex", gap: 22 }}>{["earth", "water", "fire", "air", "space"].map((e, i) => <K key={e} c={LIGHTS[i]} s={24}>{e}</K>)}</div>
      </At>
    </AbsoluteFill>
  );
};

const PracticeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lamps = "The texts also speak of lamps";
  const first = 1 - ramp(t, c(lamps), 0.4);
  const v = (ph: string) => ramp(t, c(ph), 0.8);
  const drops = v("Small drops of light"), threads = v("Fine threads"), pattern = v("They grow into patterns");
  return (
    <AbsoluteFill>
      <Title text="the practices, as taught" until={lamps} />
      <At x={500} y={250} o={v("the knowing that is empty and clear at once") * first}><Box c={TEAL} w={560} title="trekchö · cutting through" sub="recognise rigpa, empty and clear," sub2="and rest in it" ts={36} /></At>
      <At x={1420} y={250} o={v("With particular postures and gazes") * first}><Box c={GOLD} w={560} title="thögal · direct crossing" sub="lights appear in open space" ts={36} /></At>
      <At x={1420} y={560} o={v("Small drops of light") * first}>
        <svg width={620} height={300} viewBox="0 0 620 300" style={{ overflow: "visible" }}>
          {LIGHTS.map((col, i) => <circle key={i} cx={80 + i * 115} cy={150} r={10 + 6 * drops} fill="none" stroke={col} strokeWidth={4} opacity={drops}
            style={{ filter: `drop-shadow(0 0 8px ${col})` }} />)}
          <path d="M40 220 C160 180 260 260 380 210 C470 175 540 230 600 200" fill="none" stroke={CHALK} strokeWidth={2} opacity={threads * 0.8} />
          {LIGHTS.map((col, i) => <circle key={`p${i}`} cx={310} cy={150} r={30 + i * 22} fill="none" stroke={col} strokeWidth={3} opacity={pattern * 0.7} />)}
        </svg>
      </At>
      <At x={500} y={560} o={v("These are the four visions") * first}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <Wd c={GOLD} s={34} serif>four visions</Wd>
          <K c={CHALK} s={24}>1 · drops and threads</K><K c={CHALK} s={24}>2 · the visions grow</K>
          <K c={CHALK} s={24}>3 · whole mandalas</K>
          <div style={{ opacity: v("The fourth is called the exhaustion of phenomena") }}><K c={TEAL} s={24}>4 · the exhaustion of phenomena</K></div>
        </div>
      </At>
      <Items items={[
        [lamps, 960, 100, <Wd c={GOLD} s={44} serif>the lamps</Wd>],
        ["One lamp is the eyes", 330, 360, <Box c={ICE} w={340} title="the eyes" sub="the far-reaching water lamp" ts={34} />, { pop: true }],
        ["Another is the open expanse", 750, 360, <Box c={VIOLET} w={340} title="the expanse" sub="where the lights appear" ts={34} />, { pop: true }],
        ["Another is the circles of light themselves", 1170, 360, <Box c={GOLD} w={340} title="the circles" sub="the drops of light" ts={34} />, { pop: true }],
        ["And the last is the wisdom", 1590, 360, <Box c={TEAL} w={340} title="the wisdom" sub="knowing them as display" ts={34} />, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ResultsScene: React.FC = () => (
  <Board title="three results, as Dzogchen names them" tc={GOLD} until="add a warning" items={[
    ["the body dissolving into tiny particles", 330, 330, <Box c={DIM} w={480} title="tiny particles" sub="cutting through alone," sub2="some teachers say" ts={34} />, { until: "add a warning" }],
    ["The rainbow body comes when direct crossing is completed at death", 960, 330, <Box c={GOLD} w={520} title="rainbow body" sub="thögal completed at death" sub2="over a week, the body shrinks" ts={36} />, { until: "add a warning" }],
    ["And the rarest is the great transference", 1590, 330, <Box c={VIOLET} w={480} title="great transference" sub="no death: a body of light" ts={34} />, { until: "add a warning" }],
    ["Sweet scents are reported", 960, 560, <Wd c={CHALK} s={28}>reported: sweet scents · rainbows · beams of light · hair and nails left</Wd>, { until: "add a warning" }],
    ["The tradition names Garab Dorje", 1590, 560, <Wd c={DIM} s={24}>Garab Dorje · Padmasambhava · Vimalamitra</Wd>, { until: "add a warning" }],
    ["add a warning", 960, 100, <Wd c={WARM} s={44} serif>the teachers' own warning</Wd>],
    ["The rainbow body is first a realization", 960, 260, <K c={GOLD} s={32}>first a realization: everything seen as the display of the five lights</K>],
    ["The corpse is a sign of it", 960, 380, <K c={CHALK} s={28}>the corpse: a sign, and not always a sign at all</K>],
    ["a partial rainbow body", 960, 500, <K c={CHALK} s={28}>a shrinking body: a partial rainbow body (Malcolm Smith)</K>],
    ["is a worldly power", 960, 620, <K c={DIM} s={28}>control of the elements: a worldly power</K>],
  ]} />
);

const GelugScene: React.FC = () => {
  const c = useCue();
  const why = "Why does it work";
  return (
    <AbsoluteFill>
      <Title text="Gelug: the body made of wind" c={ICE} until={why} />
      <Items items={[
        ["does not teach direct crossing", 960, 190, <Wd c={DIM} s={28}>no direct crossing · no aim at a rainbow body</Wd>, { until: why }],
        ["Its view is that nothing exists from its own side", 960, 270, <K c={CHALK} s={26}>view: nothing from its own side · all a dependent designation</K>, { until: why }],
        ["The fast path is tantra", 960, 350, <K c={GOLD} s={26}>the fast path: tantra, the subtle body</K>, { until: why }],
        ["Mind and wind are one thing seen from two sides", 960, 440, <Wd c={ICE} s={32} serif>mind and wind: one thing, two sides</Wd>, { until: why }],
        ["earth into water", 960, 530, <Wd c={CHALK} s={26}>at death: earth → water → fire → wind → consciousness</Wd>, { until: why }],
        ["Then come three appearances, white, red and black", 960, 600, <div style={{ display: "flex", gap: 20 }}><K c={CHALK} s={24}>white</K><K c={ROSE} s={24}>red</K><K c={DIM} s={24}>black</K></div>, { until: why }],
        ["Then the clear light of death", 960, 680, <K c={GOLD} s={28}>the clear light of death</K>, { until: why }],
        ["This is the illusory body", 560, 790, <K c={ICE} s={26}>the illusory body · a body of pure wind</K>, { until: why }],
        ["and the two are joined", 1360, 790, <K c={GOLD} s={26}>union: the body of a buddha</K>, { until: why }],
        [why, 960, 100, <Wd c={CHALK} s={44} serif>in Gelug's account</Wd>],
        ["Because the body's material is wind", 960, 250, <K c={ICE} s={30}>the body's material is wind · wind is one with mind</K>],
        ["The clear light must realise emptiness", 960, 370, <K c={GOLD} s={30}>the clear light must realise emptiness</K>, { until: "is known for is" }],
        ["are set out in another of my videos", 960, 450, <K c={TEAL} s={28}>▶ video: Inner Winds and Subtle Body Practices</K>, { d: 0.6, until: "is known for is" }],
        ["is known for is", 960, 500, <Wd c={TEAL} s={36} serif>tukdam: the body stays fresh, it does not shrink</Wd>],
        ["measured thirteen such cases", 960, 610, <K c={CHALK} s={26}>2021 · 13 cases · no detectable brain activity</K>],
        ["they tested the brain, not the claim about the body", 960, 690, <Wd c={DIM} s={26}>the brain was tested, not the claim about the body</Wd>],
        ["himself is said to have become a buddha", 960, 780, <Wd c={CHALK} s={26}>Tsongkhapa: in the in-between state, it is said · no rainbow body claimed</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const KalacakraScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const signs: [string, string][] = [["Smoke", "smoke"], ["A mirage", "mirage"], ["A firefly", "firefly"], ["A lamp", "lamp"], ["A flame", "flame"],
    ["The moon", "moon"], ["The sun", "sun"], ["Darkness", "darkness"], ["A flash of lightning", "lightning"], ["And a great sphere of light", "a great sphere"]];
  const empty = "Its texts call what appears empty form";
  const pre = 1 - ramp(t, c(empty), 0.4);
  return (
    <AbsoluteFill>
      <Title text="Kālacakra: empty form" c={VIOLET} />
      <Items items={[["In its night yoga", 960, 200, <Wd c={DIM} s={28}>night yoga, in the dark · day yoga, at the sky</Wd>, { until: empty }]]} />
      {signs.map(([cue, label], i) => (
        <At key={cue} x={330 + (i % 5) * 315} y={330 + Math.floor(i / 5) * 110} o={ramp(t, c(cue), 0.4) * pre}><K c={LIGHTS[i % 5]} s={26}>{label}</K></At>
      ))}
      <Items items={[
        ["made of no atoms at all", 960, 200, <K c={VIOLET} s={30}>no atoms at all · beyond being and not being</K>],
        ["a young girl sees in a divining mirror", 960, 470, <Mirror p={1} img={1} />, { d: 0.3 }],
        ["goal is not called a rainbow body", 960, 715, <K c={CHALK} s={26}>its goal: a union of empty form and unchanging bliss</K>],
        ["already set these ten signs beside the four visions", 960, 800, <Wd c={DIM} s={26}>Longchenpa set the ten signs beside the four visions (Orofino 2022)</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BonScene: React.FC = () => (
  <Board title="Bön, and the tables" tc={TEAL} items={[
    ["its own lamps and visions, and its own rainbow body", 960, 240, <K c={TEAL} s={30}>its own Dzogchen, lamps, visions and rainbow body</K>],
    ["is said to have attained it in nineteen", 960, 360, <Wd c={CHALK} s={30}>Shardza Tashi Gyaltsen · 1934, it is said</Wd>],
    ["such as offerings to the four guests", 960, 470, <K c={CHALK} s={26}>its own practices: the four guests</K>],
    ["Even the tables of colours differ", 960, 600, <FiveLights r={22} />],
    ["these change from text to text", 960, 720, <Wd c={DIM} s={28}>element · buddha · wisdom · affliction: they change from text to text</Wd>],
  ]} />
);

const ReportsScene: React.FC = () => (
  <Board title="the reports" tc={WARM} items={[
    ["Sonam Namgyal", 600, 230, <K c={CHALK} s={28}>Sonam Namgyal · 1952</K>],
    ["the body shrank to the size of a bean", 1320, 230, <K c={CHALK} s={28}>Khenpo A Chö · 1998 · “the size of a bean”</K>],
    ["A priest and scholar, Francis Tiso", 1320, 320, <Wd c={DIM} s={24}>Francis Tiso: what people had seen and told</Wd>],
    ["Some popular papers call such cases proof", 960, 450, <Wd c={CHALK} s={30}>“proof” · “verified by hundreds”, some papers say</Wd>],
    ["They are eyewitness reports", 960, 550, <K c={WARM} s={30}>eyewitness reports · none checked independently</K>],
    ["And the lists vary", 960, 670, <Wd c={CHALK} s={28}>the lists vary: relics kept · dates seventeen years apart · tukdam listed</Wd>],
  ]} />
);

const YangScene: React.FC = () => {
  const c = useCue();
  const others = "Others tell of it too";
  return (
    <AbsoluteFill>
      <Title text="outside Buddhism" until={others} />
      <Items items={[
        ["the practitioner refines essence into energy", 960, 200, <Wd c={CHALK} s={28}>essence → energy → spirit → emptiness</Wd>, { until: others }],
        ["The aim is the yang spirit", 560, 320, <Box c={GOLD} w={520} title="yang spirit" sub="a body outside the body," sub2="seen by others" ts={34} />, { until: others }],
        ["is called the yin spirit", 1360, 320, <Box c={DIM} w={520} title="yin spirit" sub="from the mind alone," sub2="seen only by oneself" ts={34} />, { until: others }],
        ["Two endings are told", 560, 520, <K c={CHALK} s={26}>vanished from the coffin: clothes, a staff</K>, { until: others }],
        ["the master rises in broad daylight", 1360, 520, <K c={CHALK} s={26}>rising in broad daylight, without death</K>, { until: others }],
        ["visits the Chan master", 960, 650, <Wd c={TEAL} s={30} serif>Lü Dongbin and Huanglong: “you corpse-guarding ghost”</Wd>, { until: others }],
        ["Even if you last eighty thousand aeons", 960, 750, <Wd c={DIM} s={26}>“even eighty thousand aeons end in empty ruin” · in the story, Lü wakes up</Wd>, { until: others }],
        [others, 960, 100, <Wd c={CHALK} s={44} serif>others tell of it too</Wd>],
        ["went into his room in eighteen", 960, 240, <K c={CHALK} s={26}>Ramalinga Swamigal · 1874 · a locked room, not found</K>],
        ["the uncreated light of Mount Tabor", 560, 360, <K c={ICE} s={26}>the light of Tabor</K>],
        ["Sufis speak of a man of light", 1360, 360, <K c={GOLD} s={26}>the man of light</K>],
        ["Each tradition reads the result in its own way", 960, 480, <Wd c={DIM} s={26}>a soul that survives · a source · a self made perfect · a light shared</Wd>],
        ["Five of the six higher knowledges", 960, 620, <K c={CHALK} s={26}>early discourses: five of six higher knowledges shared</K>],
        ["Only the sixth, the ending of the taints", 960, 730, <K c={TEAL} s={28}>only the sixth, the ending of the taints, frees</K>],
      ]} />
    </AbsoluteFill>
  );
};

const ButterScene: React.FC = () => (
  <Board title="a Tibetan image" tc={GOLD} items={[
    ["Raw leather is stiff", 960, 250, <Wd c={CHALK} s={32} serif>the leather butter bag</Wd>],
    ["it grows soft", 600, 400, <K c={TEAL} s={28}>rubbed with butter: soft</K>],
    ["slowly hardens like wood", 1320, 400, <K c={WARM} s={28}>only storing butter: hard as wood</K>],
    ["Knowledge never worked into practice", 960, 560, <Wd c={CHALK} s={30}>knowledge never worked into practice hardens the same way</Wd>],
  ]} />
);

const EndScene: React.FC = () => {
  const c = useCue();
  const end = c("the rainbow body is not difficult to understand");
  return (
    <AbsoluteFill>
      <At x={960} y={380}><Reveal text="From a non-substantialist view," at={end - 1.4} size={46} color={CHALK} speed={0.035} /></At>
      <At x={960} y={470}><Reveal text="it is not difficult to understand." at={end} size={46} color={CHALK} speed={0.035} /></At>
      <At x={960} y={600}><Reveal text="As this is my personal view, I shall not comment here." at={c("But as this is my personal view")} size={40} color={GOLD} speed={0.03} /></At>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => (
  <Board title="one caution" tc={WARM} items={[
    ["should not be read through our own culture", 960, 260, <K c={CHALK} s={30}>not through our own culture</K>],
    ["or through modern knowledge of light", 960, 370, <K c={CHALK} s={30}>not through modern knowledge of light</K>],
    ["the five lights only make sense against it", 960, 500, <Wd c={GOLD} s={34} serif>the five elements in Indian and Tibetan thought</Wd>],
    ["I set out that background in a short video", 960, 640, <K c={TEAL} s={30}>▶ video: 5 Elements: Chinese vs Tibet</K>],
  ]} />
);

/** A mirror on a stand, with five small lights in it. */
const Mirror: React.FC<{ p: number; img: number }> = ({ p, img }) => (
  <svg width={300} height={360} viewBox="0 0 360 440" style={{ overflow: "visible" }}>
    <DrawPath d="M180 20 a150 170 0 1 1 -0.1 0 Z" p={p} color={GOLD} width={6} len={1020} glow />
    <DrawPath d="M180 360 L180 420 M120 420 L240 420" p={p} color={GOLD} width={6} len={200} />
    <g opacity={img}>
      {LIGHTS.map((col, i) => <circle key={i} cx={130 + i * 25} cy={160 + (i % 2) * 40} r={16} fill="none" stroke={col} strokeWidth={4}
        style={{ filter: `drop-shadow(0 0 8px ${col})` }} />)}
    </g>
  </svg>
);

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["In eastern Tibet, the story goes", "night", <StoryScene />],
    ["the Great Perfection", "light", <BasisScene />],
    ["One caution before going further", "doubt", <CautionScene />],
    ["There are two practices", "whole", <PracticeScene />],
    ["names three results", "dusk", <ResultsScene />],
    ["does not teach direct crossing", "deep", <GelugScene />],
    ["A third system is the", "jade", <KalacakraScene />],
    ["its own lamps and visions, and its own rainbow body", "search", <BonScene />],
    ["Now the reports", "doubt", <ReportsScene />],
    ["Buddhism is not alone in telling of such a body", "dusk", <YangScene />],
    ["There is a Tibetan image worth keeping", "light", <ButterScene />],
    ["the rainbow body is not difficult to understand", "night", <EndScene />],
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
