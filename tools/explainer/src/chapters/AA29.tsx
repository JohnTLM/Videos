// After Anatta · Questions: Rainbow Body: Four Papers, Read with Emptiness (AA29).
// (EBooks Bonus Articles/rainbow-body-and-emptiness/drive/rainbow-body-four-papers-canon.md; research/2026-11-14-uploads.)
// Arc: the room and the shrinking body (a report) -> four papers -> what they report well (signs, great transference,
// two practices, four visions, four lamps) -> slip 1: light made a stuff (struck), the ground's three aspects, nothing
// frozen, the apple and the knot, the fourth vision, the vase as a simile -> slip 2: reports made facts (struck claims,
// flagged cases, tukdam apart, the study), first a realization -> slip 3: three traditions made one (three columns, the
// divining mirror, union is not a body of light, Bön's own, tables are maps) -> health caution -> the butter bag -> end.
// Stance: light is never drawn as a substance or a layer underneath; "building block", "container", "source", "proof"
// and "one system" are drawn only to be struck. The rainbow body is drawn as a realization; the shrinking body only as
// a report. Cue phrases avoid the respelled names (Dzogchen, Bön, Kālacakra, Nyingma, tukdam, Padmasambhava, ...).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // the room
  "A body is left in a small room", "Over a week it grows smaller", "Rainbows are seen above the roof",
  "only hair and nails remain",
  // four papers
  "Four papers tell this story", "This is After Anatta", "We keep what holds", "three places where each of them slips",
  "The four papers come from different angles", "One is an essay on light and mind",
  "One is a scholarly comparison of light across three systems", "One is a report on",
  "And one is a beginner's guide to the rainbow body",
  // what they report
  "First, what they report", "the rainbow body is said to come at death", "Over several days the body shrinks",
  "Sweet scents replace decay", "Rainbows and beams of light appear", "In the end only hair and nails are left",
  "A rarer kind, the great transference", "The body itself becomes a body of light", "The tradition names",
  // the path
  "The papers also give the path", "Cutting through means recognising the knowing",
  "Direct crossing works with the display itself", "lights appear in open space", "Small drops of light", "Fine threads",
  "They grow into patterns", "The texts call these the four visions", "The fourth is called the exhaustion of phenomena",
  "The texts also speak of lamps", "One lamp is the eyes", "Another is the open sky the lights appear in",
  "Another is the circles of light themselves", "And the last is the wisdom",
  "The lights do not appear apart from seeing", "They are seeing, recognised",
  // slip one
  "So far, good reporting", "Now the three slips", "The first slip is the biggest", "Light becomes a stuff",
  "light is the building block of the cosmos", "That matter is light condensed", "cooling and hardening like ice",
  "awareness is the space in which the light plays", "It sounds deep", "then light is one more ground",
  "A finer substance", "then awareness is a container",
  // the ground
  "itself does not need this", "Its ground has three aspects", "Its essence is empty, pure from the beginning",
  "Its nature is clear, spontaneously present", "And its display never stops",
  "The five lights are display with nothing behind them", "They do not condense out of a shining stuff",
  "Then what do the texts mean", "it names how appearing is taken", "it is grasped as something other",
  "Nothing turned solid", "Nothing was ever frozen", "There was only a deep habit",
  // the apple
  "Try it now with something in your hand", "There is hardness", "There is coolness", "There is colour",
  "Each appears as its conditions meet", "Then habit ties them into one solid thing",
  "as if they all belonged to a core underneath", "That knot is the hardening", "Untie it, and nothing is lost",
  "Only the extra solidity drops",
  // fourth vision and the vase
  "This is also how to read the fourth vision", "everything dissolves back into primordial emptiness",
  "But emptiness is not a place, and not a source", "the holding of appearances as things with a nature of their own",
  "Appearing itself is not wiped out", "The same care is needed with light inside the body", "the heart is a vessel",
  "a youthful body in a vase", "But it is a simile", "it is a light stored inside a container",
  "clarity is never stored anywhere", "It is the knowing clarity of appearing itself",
  "So the first correction is simple", "Light names how appearing shines", "It is not what the world is made of",
  // slip two
  "The second slip is quieter", "Reports become facts", "the rainbow body is proven", "hundreds of witnesses verified it",
  "empirical proof of liberation", "Here we have to be honest", "These are reports",
  "But none has been checked by anyone independent", "they do not all hold", "One famous master is listed",
  "his relics were kept", "Another master's death is dated", "seventeen years later in another",
  "The sixteenth Karmapa is listed too", "is a state in which a practitioner", "The body stays fresh",
  "It does not shrink", "a team from the University of Wisconsin", "They found no brain activity",
  "so the question stays open",
  // first a realization
  "And the most often told modern case", "rests on eyewitness accounts gathered afterwards",
  "the body shrank to the size of a bean", "A priest and scholar", "What he could gather was what people told him",
  "None of this says the reports are false", "It says what kind of thing they are", "And it matters less than it seems",
  "teachers warn against taking the shrinking body", "The rainbow body is first a realization",
  "is seen as the display of the five lights", "That seeing is the rainbow body",
  "What happens to the corpse is at most a sign", "a partial rainbow body", "So the second correction",
  "keep the reports as reports", "The realization does not wait on them",
  // slip three
  "The third slip is about traditions", "Three become one", "as if they were one system with three names",
  "They share words", "But they are not the same path", "speaks of empty form", "vivid images appear",
  "a great drop of light", "made of no atoms at all", "They go beyond existence", "a young girl sees in a divining mirror",
  "And nothing behind the glass", "This is the most beautiful line in all four papers",
  "traces it in her study of light in the tantras", "What appears is vivid, and it is not found",
  "goal is not the rainbow body", "a union of empty form and unchanging bliss",
  "The word for that is union, not body of light", "Joining the two makes a neat table, and loses both",
  // Bön and the tables
  "in turn, has its own", "One of its great masters", "also has rituals that Buddhism does not frame the same way",
  "The four guests, who receive offerings", "A dough shaped in the hand", "Even the tables of colours shift",
  "Which element goes with which Buddha", "these differ from text to text", "Any single table is one lineage's pairing",
  "It is a map for practice", "It is not a chart of what the world is made of", "So the third correction",
  "let each tradition speak in its own voice",
  // caution and the butter bag
  "One more caution belongs here", "a plan for health and even for mental health", "Nothing like this has been tested",
  "These are spiritual practices", "They do not replace a doctor", "has left some practitioners sleepless and unsettled",
  "Such practices need a qualified teacher", "There is one more thing the papers carry", "Raw leather is stiff",
  "Rub butter into it under the sun", "But a leather bag used only to store butter", "slowly hardens like wood",
  "Knowledge never rubbed in by practice does the same", "That may be the best way to read these four papers",
  "but as an invitation to look",
  // the end
  "So, what turns into light", "Nothing found turns into light", "The body appeared solid because it was held",
  "When the holding ends", "Nothing is produced", "The same hardness, the same warmth, the same colour",
  "That is why the rainbow body is not the measure of insight", "And it is not a goal to aim at",
  "To practise for a body of light", "The lights were never a stuff behind the world",
  "They were the world, seen without grasping",
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
/** A box on the board. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; sub2?: string; dashed?: boolean; ts?: number }> =
  ({ c, w = 460, title, sub, sub2, dashed, ts = 36 }) => (
    <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px ${dashed ? "dashed" : "solid"} ${c}`, background: "rgba(10,12,30,0.72)",
      boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
      <Wd c={c} s={ts} serif>{title}</Wd>
      {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
      {sub2 ? <div style={{ marginTop: 4 }}><Wd c={CHALK} s={24}>{sub2}</Wd></div> : null}
    </div>
  );
/** A sheet of paper with a title. */
const Paper: React.FC<{ c: string; n: string; title: string; sub: string }> = ({ c, n, title, sub }) => (
  <div style={{ width: 330, height: 400, borderRadius: 10, border: `3px solid ${c}`, background: "rgba(241,236,224,0.08)",
    boxShadow: `0 0 26px ${c}44`, padding: "26px 20px", textAlign: "center", display: "flex", flexDirection: "column", gap: 14 }}>
    <Wd c={c} s={46} serif>{n}</Wd>
    <Wd c={CHALK} s={30} serif>{title}</Wd>
    <Wd c={DIM} s={22}>{sub}</Wd>
    {[0, 1, 2, 3].map((i) => <div key={i} style={{ height: 3, margin: "0 18px", background: `${DIM}55`, borderRadius: 2 }} />)}
  </div>
);
/** An apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
    <path d="M100 58 C70 30 22 44 24 98 C26 150 62 186 100 172 C138 186 174 150 176 98 C178 44 130 30 100 58 Z"
      fill="rgba(226,70,70,0.55)" stroke="#FF6B6B" strokeWidth={5} style={{ filter: "drop-shadow(0 0 14px #FF6B6B)" }} />
    <path d="M100 58 C100 44 104 30 112 20" stroke="#B08850" strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M108 34 C124 18 146 20 154 28 C140 40 122 42 108 34 Z" fill="rgba(143,212,154,0.5)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
/** A simple seated figure, outlined. */
const Figure: React.FC<{ color?: string; p?: number }> = ({ color = CHALK, p = 1 }) => (
  <svg width={260} height={300} viewBox="0 0 260 300" style={{ overflow: "visible" }}>
    <DrawPath d="M130 30 a34 34 0 1 1 -0.1 0 Z" p={p} color={color} width={5} len={240} />
    <DrawPath d="M130 98 C88 104 76 150 82 200 M130 98 C172 104 184 150 178 200" p={p} color={color} width={5} len={400} />
    <DrawPath d="M40 250 C70 214 110 210 130 214 C150 210 190 214 220 250 C180 262 80 262 40 250 Z" p={p} color={color} width={5} len={700} />
    <DrawPath d="M82 200 C96 214 116 218 130 214 C144 218 164 214 178 200" p={p} color={color} width={5} len={300} />
  </svg>
);
/** Rainbow arcs, drawn in. */
const Arcs: React.FC<{ p: number; w?: number }> = ({ p, w = 520 }) => (
  <svg width={w} height={w / 2} viewBox="0 0 520 260" style={{ overflow: "visible" }}>
    {LIGHTS.map((col, i) => (
      <DrawPath key={i} d={`M${40 + i * 22} 250 A${220 - i * 22} ${220 - i * 22} 0 0 1 ${480 - i * 22} 250`} p={p} color={col} width={7} len={760} glow />
    ))}
  </svg>
);
/** A small house outline. */
const House: React.FC<{ p: number }> = ({ p }) => (
  <svg width={520} height={380} viewBox="0 0 520 380" style={{ overflow: "visible" }}>
    <DrawPath d="M40 160 L260 30 L480 160" p={p} color={CHALK} width={5} len={520} />
    <DrawPath d="M80 150 L80 360 L440 360 L440 150" p={p} color={CHALK} width={5} len={780} />
    <DrawPath d="M300 360 L300 250 L370 250 L370 360" p={p} color={DIM} width={4} len={320} />
  </svg>
);
/** A mirror on a stand. */
const Mirror: React.FC<{ p: number; img: number }> = ({ p, img }) => (
  <svg width={360} height={440} viewBox="0 0 360 440" style={{ overflow: "visible" }}>
    <DrawPath d="M180 20 a150 170 0 1 1 -0.1 0 Z" p={p} color={GOLD} width={6} len={1020} glow />
    <DrawPath d="M180 360 L180 420 M120 420 L240 420" p={p} color={GOLD} width={6} len={200} />
    <g opacity={img}>
      {LIGHTS.map((col, i) => <circle key={i} cx={130 + i * 25} cy={160 + (i % 2) * 40} r={16} fill="none" stroke={col} strokeWidth={4}
        style={{ filter: `drop-shadow(0 0 8px ${col})` }} />)}
    </g>
  </svg>
);
/** A vase outline. */
const Vase: React.FC<{ p: number }> = ({ p }) => (
  <svg width={240} height={300} viewBox="0 0 240 300" style={{ overflow: "visible" }}>
    <DrawPath d="M90 20 L150 20 L140 70 C220 110 220 250 120 280 C20 250 20 110 100 70 Z" p={p} color={ICE} width={5} len={900} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const RoomScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const shrink = ramp(t, c("Over a week it grows smaller"), 3.2);
  const arcs = ramp(t, c("Rainbows are seen above the roof"), 2);
  return (
    <AbsoluteFill>
      <At x={960} y={500} o={ramp(t, 0.2, 0.8)}><House p={ramp(t, 0.2, 2)} /></At>
      <At x={960} y={560} s={1 - 0.62 * shrink} o={(1 - 0.75 * ramp(t, c("only hair and nails remain"), 1)) * ramp(t, 0.6, 0.8)}><Figure p={ramp(t, 0.6, 1.6)} color={DIM} /></At>
      <At x={960} y={250} o={arcs}><Arcs p={arcs} /></At>
      <Items items={[
        ["A body is left in a small room", 960, 110, <Wd c={DIM} s={30}>a story told in eastern Tibet · a report</Wd>],
        ["only hair and nails remain", 960, 800, <Wd c={CHALK} s={32} serif>only hair and nails, it is said</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PapersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const grid = c("The four papers come from different angles");
  const early = 1 - ramp(t, grid, 0.4);
  return (
    <AbsoluteFill>
      <At x={960} y={300} o={ramp(t, 0.2, 0.8) * early}><Wd c={CHALK} s={66} serif>Rainbow Body: Four Papers</Wd></At>
      <At x={960} y={400} o={ramp(t, 0.6, 0.8) * early}><Wd c={GOLD} s={40} serif>read with emptiness</Wd></At>
      <At x={960} y={520} o={ramp(t, c("This is After Anatta"), 0.8) * early}><Wd c={DIM} s={30}>After Anatta: notes by John Tan, known as Thusness</Wd></At>
      <At x={700} y={660} o={ramp(t, c("We keep what holds"), 0.5) * early}><K c={TEAL}>keep what holds</K></At>
      <At x={1220} y={660} o={ramp(t, c("three places where each of them slips"), 0.5) * early}><K c={WARM}>three places they slip</K></At>
      <Items items={[
        ["The four papers come from different angles", 960, 110, <Wd c={CHALK} s={38} serif>four outside papers</Wd>],
        ["One is an essay on light and mind", 330, 480, <Paper c={GOLD} n="1" title="Light and Mind" sub="an essay · Bön and Dzogchen" />, { pop: true }],
        ["One is a scholarly comparison of light across three systems", 750, 480, <Paper c={VIOLET} n="2" title="Matter into Radiance" sub="a comparison · three systems" />, { pop: true }],
        ["One is a report on", 1170, 480, <Paper c={TEAL} n="3" title="Bön Element Practices" sub="a report" />, { pop: true }],
        ["And one is a beginner's guide to the rainbow body", 1590, 480, <Paper c={ROSE} n="4" title="Woven of Pure Light" sub="a beginner's guide" />, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ReportScene: React.FC = () => {
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, what they report", 960, 110, <Wd c={TEAL} s={42} serif>what they report, and report well</Wd>],
        ["the rainbow body is said to come at death", 520, 230, <Wd c={GOLD} s={34} serif>the rainbow body · at death</Wd>],
        ["Over several days the body shrinks", 520, 330, <K c={CHALK} s={28}>over days, the body shrinks</K>],
        ["Sweet scents replace decay", 520, 420, <K c={CHALK} s={28}>sweet scents, no decay</K>],
        ["Rainbows and beams of light appear", 520, 510, <K c={CHALK} s={28}>rainbows and beams of light</K>],
        ["In the end only hair and nails are left", 520, 600, <K c={CHALK} s={28}>hair and nails left</K>],
        ["A rarer kind, the great transference", 1400, 230, <Wd c={VIOLET} s={34} serif>the great transference</Wd>],
        ["The body itself becomes a body of light", 1400, 360, <K c={VIOLET} s={28}>no death: a body of light</K>],
        ["The tradition names", 1400, 460, <Wd c={CHALK} s={28}>Padmasambhava, Vimalamitra</Wd>],
        ["the rainbow body is said to come at death", 960, 760, <Wd c={DIM} s={28}>all as the traditions tell it</Wd>, { d: 1.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const PathScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lamps = c("The texts also speak of lamps");
  const first = 1 - ramp(t, lamps, 0.4);
  const v = (ph: string) => ramp(t, c(ph), 0.8);
  // four visions: drops, threads, patterns, a whole mandala
  const drops = v("Small drops of light"), threads = v("Fine threads"), pattern = v("They grow into patterns");
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, 0.2, 0.6) * first}><Wd c={CHALK} s={40} serif>the path, as reported</Wd></At>
      <At x={500} y={250} o={v("Cutting through means recognising the knowing") * first}><Box c={TEAL} w={560} title="cutting through" sub="recognise the knowing, empty and clear," sub2="and rest in it" ts={38} /></At>
      <At x={1420} y={250} o={v("Direct crossing works with the display itself") * first}><Box c={GOLD} w={560} title="direct crossing" sub="works with the display itself:" sub2="lights in open space" ts={38} /></At>
      <At x={1420} y={560} o={v("lights appear in open space") * first}>
        <svg width={620} height={300} viewBox="0 0 620 300" style={{ overflow: "visible" }}>
          {LIGHTS.map((col, i) => <circle key={i} cx={80 + i * 115} cy={150} r={10 + 6 * drops} fill="none" stroke={col} strokeWidth={4} opacity={drops}
            style={{ filter: `drop-shadow(0 0 8px ${col})` }} />)}
          <path d="M40 220 C160 180 260 260 380 210 C470 175 540 230 600 200" fill="none" stroke={CHALK} strokeWidth={2} opacity={threads * 0.8} />
          {LIGHTS.map((col, i) => <circle key={`p${i}`} cx={310} cy={150} r={30 + i * 22} fill="none" stroke={col} strokeWidth={3} opacity={pattern * 0.7} />)}
        </svg>
      </At>
      <At x={500} y={560} o={v("The texts call these the four visions") * first}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <Wd c={GOLD} s={34} serif>four visions</Wd>
          <K c={CHALK} s={24}>1 · drops and threads</K><K c={CHALK} s={24}>2 · the visions grow</K>
          <K c={CHALK} s={24}>3 · whole mandalas</K>
          <div style={{ opacity: v("The fourth is called the exhaustion of phenomena") }}><K c={TEAL} s={24}>4 · the exhaustion of phenomena</K></div>
        </div>
      </At>
      <Items items={[
        ["The texts also speak of lamps", 960, 110, <Wd c={GOLD} s={42} serif>the lamps</Wd>],
        ["One lamp is the eyes", 330, 360, <Box c={ICE} w={340} title="the eyes" sub="the far-reaching water lamp" ts={34} />, { pop: true }],
        ["Another is the open sky the lights appear in", 750, 360, <Box c={VIOLET} w={340} title="the open sky" sub="the expanse" ts={34} />, { pop: true }],
        ["Another is the circles of light themselves", 1170, 360, <Box c={GOLD} w={340} title="the circles" sub="the drops of light" ts={34} />, { pop: true }],
        ["And the last is the wisdom", 1590, 360, <Box c={TEAL} w={340} title="the wisdom" sub="knowing them as display" ts={34} />, { pop: true }],
        ["The lights do not appear apart from seeing", 960, 620, <Wd c={CHALK} s={36} serif>not apart from seeing</Wd>],
        ["They are seeing, recognised", 960, 720, <Wd c={TEAL} s={40} serif>seeing, recognised</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const Slip1Scene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const claims = c("light is the building block of the cosmos");
  const top = 1 - ramp(t, claims, 0.4);
  const sk = c("then light is one more ground");
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, c("Now the three slips"), 0.5) * top}>
        <div style={{ display: "flex", gap: 40 }}>
          <K c={WARM} s={34}>1 · light becomes a stuff</K><K c={DIM} s={34}>2 · reports become facts</K><K c={DIM} s={34}>3 · three become one</K>
        </div>
      </At>
      <At x={960} y={200} o={ramp(t, c("So far, good reporting"), 0.5) * top}><Wd c={CHALK} s={40} serif>three slips</Wd></At>
      <Items items={[
        ["The first slip is the biggest", 960, 100, <Wd c={WARM} s={42} serif>slip one: light becomes a stuff</Wd>, { d: 0 }],
        ["light is the building block of the cosmos", 560, 260, <SK c={DIM} strikeAt={sk}>light, the building block of the cosmos</SK>],
        ["That matter is light condensed", 560, 360, <SK c={DIM} strikeAt={sk + 0.4}>matter is light condensed</SK>],
        ["cooling and hardening like ice", 560, 460, <SK c={DIM} strikeAt={sk + 0.8}>space cooling, hardening like ice</SK>],
        ["awareness is the space in which the light plays", 560, 560, <SK c={DIM} strikeAt={c("then awareness is a container")}>awareness, the space light plays in</SK>],
        ["then light is one more ground", 1440, 330, <Box c={WARM} w={480} title="one more ground" sub="a finer substance," sub2="shining, but a substance" ts={38} />],
        ["then awareness is a container", 1440, 580, <Box c={WARM} w={480} title="a container" dashed ts={38} />],
      ]} />
    </AbsoluteFill>
  );
};

const GroundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const second = c("Then what do the texts mean");
  const first = 1 - ramp(t, second, 0.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6) * first}><Wd c={CHALK} s={40} serif>the ground, in three aspects</Wd></At>
      <At x={420} y={340} o={ramp(t, c("Its essence is empty, pure from the beginning"), 0.5) * first}><Box c={TEAL} w={460} title="essence: empty" sub="pure from the beginning" ts={38} /></At>
      <At x={960} y={340} o={ramp(t, c("Its nature is clear, spontaneously present"), 0.5) * first}><Box c={GOLD} w={460} title="nature: clear" sub="spontaneously present" ts={38} /></At>
      <At x={1500} y={340} o={ramp(t, c("And its display never stops"), 0.5) * first}><Box c={VIOLET} w={460} title="display: unceasing" sub="the five lights" ts={38} /></At>
      <At x={960} y={580} o={ramp(t, c("The five lights are display with nothing behind them"), 0.5) * first}><Wd c={CHALK} s={38} serif>display, with nothing behind it</Wd></At>
      <At x={960} y={690} o={ramp(t, c("They do not condense out of a shining stuff"), 0.5) * first}><SK c={DIM} strikeAt={c("They do not condense out of a shining stuff") + 1}>condensed out of a shining stuff</SK></At>
      <Items items={[
        ["Then what do the texts mean", 960, 100, <Wd c={CHALK} s={40} serif>"the lights harden into the elements"</Wd>],
        ["it names how appearing is taken", 960, 230, <Wd c={TEAL} s={36} serif>it names how appearing is taken</Wd>],
        ["it is grasped as something other", 960, 340, <K c={WARM} s={30}>not recognised · grasped as other, over there</K>],
        ["Nothing turned solid", 640, 500, <SK c={DIM} strikeAt={c("Nothing turned solid") + 0.6}>something turned solid</SK>],
        ["Nothing was ever frozen", 1280, 500, <SK c={DIM} strikeAt={c("Nothing was ever frozen") + 0.6}>something frozen</SK>],
        ["There was only a deep habit", 960, 680, <Wd c={GOLD} s={40} serif>only a deep habit of seeing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const QUAL: [string, string, number, number, string][] = [
  ["There is hardness", "hardness", 560, 300, GOLD], ["There is coolness", "coolness", 1360, 300, ICE], ["There is colour", "colour", 960, 200, ROSE],
];
const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const knot = c("Then habit ties them into one solid thing");
  const untie = c("Untie it, and nothing is lost");
  const tied = ramp(t, knot, 0.8) * (1 - ramp(t, untie, 0.8));
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, c("Try it now with something in your hand"), 0.6)}><Apple size={220} /></At>
      {QUAL.map(([ph, w, x, y, col], i) => (
        <At key={i} x={x + (960 - x) * tied * 0.55} y={y + (460 - y) * tied * 0.55} o={ramp(t, c(ph), 0.5)}><K c={col} s={30}>{w}</K></At>
      ))}
      <At x={960} y={460} o={tied}>
        <svg width={520} height={420} viewBox="0 0 520 420" style={{ overflow: "visible" }}>
          <ellipse cx={260} cy={210} rx={230} ry={180} fill="none" stroke={WARM} strokeWidth={5} strokeDasharray="14 10" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }} />
        </svg>
      </At>
      <Items items={[
        ["Try it now with something in your hand", 960, 90, <Wd c={CHALK} s={38} serif>something in your hand</Wd>],
        ["Each appears as its conditions meet", 960, 700, <Wd c={TEAL} s={32}>each appears as its conditions meet</Wd>, { until: "Then habit ties them into one solid thing" }],
        ["as if they all belonged to a core underneath", 960, 720, <SK c={DIM} strikeAt={c("That knot is the hardening") + 0.5}>a core underneath</SK>, { until: "Untie it, and nothing is lost" }],
        ["That knot is the hardening", 960, 800, <Wd c={WARM} s={32}>the knot is the hardening</Wd>, { until: "Untie it, and nothing is lost" }],
        ["Untie it, and nothing is lost", 960, 720, <Wd c={TEAL} s={38} serif>untied: nothing is lost</Wd>],
        ["Only the extra solidity drops", 960, 800, <Wd c={CHALK} s={30}>only the extra solidity drops</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const VisionVaseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const vase = c("The same care is needed with light inside the body");
  const first = 1 - ramp(t, vase, 0.4);
  const corr = c("So the first correction is simple");
  const second = ramp(t, vase, 0.5) * (1 - ramp(t, corr, 0.4));
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6) * first}><Wd c={CHALK} s={40} serif>the fourth vision</Wd></At>
      <At x={960} y={260} o={ramp(t, c("everything dissolves back into primordial emptiness"), 0.5) * first}>
        <SK c={DIM} s={32} strikeAt={c("But emptiness is not a place, and not a source")}>everything dissolves back into emptiness</SK></At>
      <At x={960} y={380} o={ramp(t, c("But emptiness is not a place, and not a source"), 0.5) * first}><Wd c={TEAL} s={36} serif>emptiness: not a place, not a source</Wd></At>
      <At x={960} y={510} o={ramp(t, c("the holding of appearances as things with a nature of their own"), 0.5) * first}><K c={GOLD} s={30}>used up: holding appearances as things with a nature of their own</K></At>
      <At x={960} y={640} o={ramp(t, c("Appearing itself is not wiped out"), 0.5) * first}><Wd c={CHALK} s={38} serif>appearing is not wiped out</Wd></At>
      <At x={960} y={360} o={ramp(t, c("the heart is a vessel"), 0.5) * (1 - ramp(t, c("a youthful body in a vase"), 0.4)) * second}>
        <SK c={DIM} s={30} strikeAt={c("a youthful body in a vase") - 0.3}>the heart, a vessel holding a radiant mandala</SK></At>
      <At x={540} y={440} o={ramp(t, c("a youthful body in a vase"), 0.6) * second}><Vase p={ramp(t, c("a youthful body in a vase"), 1.4)} /></At>
      <At x={540} y={660} o={ramp(t, c("But it is a simile"), 0.5) * second}><K c={ICE} s={30}>a simile</K></At>
      <At x={1340} y={340} o={ramp(t, c("it is a light stored inside a container"), 0.5) * second}><SK c={DIM} s={30} strikeAt={c("clarity is never stored anywhere")}>a light stored in a container</SK></At>
      <At x={1340} y={470} o={ramp(t, c("clarity is never stored anywhere"), 0.5) * second}><Wd c={TEAL} s={34} serif>clarity is never stored</Wd></At>
      <At x={1340} y={570} o={ramp(t, c("It is the knowing clarity of appearing itself"), 0.5) * second}><Wd c={CHALK} s={30}>the knowing clarity of appearing,</Wd></At>
      <At x={1340} y={630} o={ramp(t, c("It is the knowing clarity of appearing itself"), 0.5, ) * second}><Wd c={CHALK} s={30}>as empty as what appears</Wd></At>
      <At x={960} y={110} o={second}><Wd c={CHALK} s={38} serif>light inside the body</Wd></At>
      <Items items={[
        ["So the first correction is simple", 960, 300, <Wd c={WARM} s={38} serif>correction one</Wd>],
        ["Light names how appearing shines", 960, 440, <Wd c={GOLD} s={42} serif>light names how appearing shines, unheld</Wd>],
        ["It is not what the world is made of", 960, 580, <SK c={DIM} s={32} strikeAt={c("It is not what the world is made of") + 0.8}>what the world is made of</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const Slip2Scene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cases = c("One famous master is listed");
  const first = 1 - ramp(t, cases, 0.4);
  const tk = c("is a state in which a practitioner");
  const caseOut = 1 - ramp(t, tk, 0.4);
  const rep = c("These are reports");
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6) * first}><Wd c={WARM} s={42} serif>slip two: reports become facts</Wd></At>
      <At x={960} y={260} o={ramp(t, c("the rainbow body is proven"), 0.5) * first}><SK c={DIM} strikeAt={rep}>"proven"</SK></At>
      <At x={960} y={360} o={ramp(t, c("hundreds of witnesses verified it"), 0.5) * first}><SK c={DIM} strikeAt={rep + 0.3}>"verified by hundreds"</SK></At>
      <At x={960} y={460} o={ramp(t, c("empirical proof of liberation"), 0.5) * first}><SK c={DIM} strikeAt={rep + 0.6}>"empirical proof"</SK></At>
      <At x={960} y={590} o={ramp(t, rep, 0.5) * first}><Wd c={GOLD} s={44} serif>reports</Wd></At>
      <At x={960} y={700} o={ramp(t, c("But none has been checked by anyone independent"), 0.5) * first}><Wd c={CHALK} s={30}>none checked by anyone independent</Wd></At>
      <At x={960} y={100} o={ramp(t, cases, 0.5) * caseOut}><Wd c={CHALK} s={38} serif>the case lists, looked at closely</Wd></At>
      <At x={960} y={260} o={ramp(t, cases, 0.5) * caseOut}><K c={DIM} s={28}>a master listed · body ordinary, relics kept</K></At>
      <At x={960} y={380} o={ramp(t, c("Another master's death is dated"), 0.5) * caseOut}><K c={DIM} s={28}>a death dated two ways · 17 years apart</K></At>
      <At x={960} y={500} o={ramp(t, c("The sixteenth Karmapa is listed too"), 0.5) * caseOut}><K c={DIM} s={28}>the 16th Karmapa · tukdam, not a rainbow body</K></At>
      <Items items={[
        ["is a state in which a practitioner", 960, 110, <Wd c={ICE} s={42} serif>tukdam</Wd>],
        ["is a state in which a practitioner", 960, 220, <Wd c={CHALK} s={30}>resting in meditation after death, it is said</Wd>],
        ["The body stays fresh", 960, 330, <K c={ICE} s={28}>fresh, warm at the heart, for days</K>],
        ["It does not shrink", 960, 430, <K c={DIM} s={28}>it does not shrink or vanish</K>],
        ["a team from the University of Wisconsin", 960, 560, <Box c={TEAL} w={760} title="a 2021 study · 13 cases" sub="no brain activity found" sub2="recording began a day or more after death" ts={34} />],
        ["so the question stays open", 960, 760, <Wd c={GOLD} s={32} serif>the question stays open</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RealizationScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const turn = c("And it matters less than it seems");
  const first = 1 - ramp(t, turn, 0.4);
  const corr = c("So the second correction");
  const mid = ramp(t, turn, 0.5) * (1 - ramp(t, corr, 0.4));
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, 0.2, 0.6) * first}><Wd c={CHALK} s={38} serif>the case most often told · 1998</Wd></At>
      <At x={960} y={260} o={ramp(t, c("rests on eyewitness accounts gathered afterwards"), 0.5) * first}><K c={CHALK} s={28}>eyewitness accounts, gathered afterwards</K></At>
      <At x={960} y={360} o={ramp(t, c("the body shrank to the size of a bean"), 0.5) * first}><K c={CHALK} s={28}>a local press report: "the size of a bean"</K></At>
      <At x={960} y={460} o={ramp(t, c("A priest and scholar"), 0.5) * first}><K c={CHALK} s={28}>looked into by Francis Tiso: what people told him</K></At>
      <At x={960} y={620} o={ramp(t, c("None of this says the reports are false"), 0.5) * first}><Wd c={GOLD} s={36} serif>not false · reports</Wd></At>
      <At x={960} y={110} o={mid}><Wd c={CHALK} s={38} serif>inside the tradition itself</Wd></At>
      <At x={560} y={330} o={ramp(t, c("teachers warn against taking the shrinking body"), 0.5) * mid}><SK c={DIM} s={30} strikeAt={c("The rainbow body is first a realization")}>the shrinking body = the rainbow body</SK></At>
      <At x={1380} y={330} o={ramp(t, c("The rainbow body is first a realization"), 0.5) * mid}><Box c={GOLD} w={520} title="first a realization" sub="everything, the body included," sub2="seen as the display of the five lights" ts={38} /></At>
      <At x={1380} y={560} o={ramp(t, c("What happens to the corpse is at most a sign"), 0.5) * mid}><K c={CHALK} s={28}>the corpse: at most a sign</K></At>
      <At x={560} y={560} o={ramp(t, c("a partial rainbow body"), 0.5) * mid}><K c={DIM} s={28}>a body that vanishes: "partial"</K></At>
      <Items items={[
        ["So the second correction", 960, 340, <Wd c={WARM} s={38} serif>correction two</Wd>],
        ["keep the reports as reports", 960, 460, <Wd c={GOLD} s={44} serif>keep the reports as reports</Wd>],
        ["The realization does not wait on them", 960, 580, <Wd c={TEAL} s={34}>the realization does not wait on them</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const Slip3Scene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ef = c("speaks of empty form");
  const first = 1 - ramp(t, ef, 0.4);
  const goal = c("goal is not the rainbow body");
  const mirror = ramp(t, ef, 0.5) * (1 - ramp(t, goal, 0.4));
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6) * first}><Wd c={WARM} s={42} serif>slip three: three become one</Wd></At>
      <At x={960} y={250} o={ramp(t, c("as if they were one system with three names"), 0.5) * first}><SK c={DIM} s={32} strikeAt={c("But they are not the same path")}>one system, three names</SK></At>
      <At x={960} y={370} o={ramp(t, c("They share words"), 0.5) * first}><Wd c={CHALK} s={32}>shared words: light, drops, channels, winds</Wd></At>
      {[["Kālacakra", VIOLET, 420], ["Nyingma Dzogchen", GOLD, 960], ["Bön", TEAL, 1500]].map(([n, col, x], i) => (
        <At key={i} x={x as number} y={560} o={ramp(t, c("But they are not the same path") + i * 0.3, 0.5) * first}><Box c={col as string} w={440} title={n as string} sub="its own path" ts={38} /></At>
      ))}
      <At x={560} y={480} o={mirror}><Mirror p={ramp(t, ef, 1.6)} img={ramp(t, c("vivid images appear"), 1)} /></At>
      <At x={560} y={100} o={mirror}><Wd c={VIOLET} s={38} serif>empty form</Wd></At>
      <At x={1360} y={230} o={ramp(t, c("vivid images appear"), 0.5) * mirror}><K c={CHALK} s={24}>smoke · mirage · fireflies · lamp · flame</K></At>
      <At x={1360} y={300} o={ramp(t, c("a great drop of light"), 0.5) * mirror}><K c={CHALK} s={24}>moon · sun · darkness · lightning · a great drop</K></At>
      <At x={1360} y={400} o={ramp(t, c("made of no atoms at all"), 0.5) * mirror}><Wd c={GOLD} s={32} serif>made of no atoms</Wd></At>
      <At x={1360} y={470} o={ramp(t, c("They go beyond existence"), 0.5) * mirror}><Wd c={CHALK} s={28}>beyond existence and non-existence</Wd></At>
      <At x={1360} y={560} o={ramp(t, c("a young girl sees in a divining mirror"), 0.5) * mirror}><Wd c={CHALK} s={28}>an image in a divining mirror</Wd></At>
      <At x={1360} y={640} o={ramp(t, c("And nothing behind the glass"), 0.5) * mirror}><Wd c={TEAL} s={34} serif>nothing behind the glass</Wd></At>
      <At x={1360} y={740} o={ramp(t, c("traces it in her study of light in the tantras"), 0.5) * mirror}><K c={DIM} s={22}>Giacomella Orofino, a study of light in the tantras (2022)</K></At>
      <At x={560} y={800} o={ramp(t, c("What appears is vivid, and it is not found"), 0.5) * mirror}><Wd c={GOLD} s={34} serif>vivid, and not found</Wd></At>
      <Items items={[
        ["goal is not the rainbow body", 960, 120, <Wd c={VIOLET} s={38} serif>its goal: not the rainbow body</Wd>],
        ["a union of empty form and unchanging bliss", 960, 300, <Box c={VIOLET} w={720} title="union" sub="of empty form and unchanging bliss" ts={42} />],
        ["The word for that is union, not body of light", 960, 480, <SK c={DIM} s={30} strikeAt={c("The word for that is union, not body of light") + 1.2}>union = a body of light</SK>],
        ["Joining the two makes a neat table, and loses both", 960, 620, <Wd c={CHALK} s={32}>a neat table loses both</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BonScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tab = c("Even the tables of colours shift");
  const first = 1 - ramp(t, tab, 0.4);
  const corr = c("So the third correction");
  const second = ramp(t, tab, 0.5) * (1 - ramp(t, corr, 0.4));
  const swap = ramp(t, c("these differ from text to text"), 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6) * first}><Wd c={TEAL} s={42} serif>Bön, in its own voice</Wd></At>
      <At x={560} y={320} o={ramp(t, 0.4, 0.5) * first}><Box c={TEAL} w={560} title="its own Dzogchen" sub="its own lamps and visions," sub2="its own rainbow body" ts={38} /></At>
      <At x={560} y={560} o={ramp(t, c("One of its great masters"), 0.5) * first}><K c={CHALK} s={26}>Shardza Tashi Gyaltsen · 1934, it is said</K></At>
      <At x={1360} y={320} o={ramp(t, c("also has rituals that Buddhism does not frame the same way"), 0.5) * first}><Box c={GOLD} w={560} title="its own rituals" ts={38} /></At>
      <At x={1360} y={480} o={ramp(t, c("The four guests, who receive offerings"), 0.5) * first}><K c={CHALK} s={26}>the four guests, who receive offerings</K></At>
      <At x={1360} y={570} o={ramp(t, c("A dough shaped in the hand"), 0.5) * first}><K c={CHALK} s={26}>a dough shaped in the hand, offered</K></At>
      <At x={960} y={100} o={second}><Wd c={CHALK} s={40} serif>the tables shift</Wd></At>
      <At x={960} y={360} o={ramp(t, c("Which element goes with which Buddha"), 0.5) * second}>
        <div style={{ display: "flex", gap: 60 }}>
          {[0, 1].map((k) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 10, padding: 18, border: `2px solid ${DIM}`, borderRadius: 14 }}>
              <Wd c={DIM} s={24}>{k ? "another text" : "one text"}</Wd>
              {(k && swap > 0.5 ? [["space", "white"], ["water", "blue"]] : [["space", "blue"], ["water", "white"]]).map(([e, col], i) => (
                <Wd key={i} c={col === "blue" ? VIOLET : ICE} s={28}>{e} · {col}</Wd>
              ))}
            </div>
          ))}
        </div>
      </At>
      <At x={960} y={580} o={ramp(t, c("Any single table is one lineage's pairing"), 0.5) * second}><Wd c={GOLD} s={36} serif>one lineage's pairing</Wd></At>
      <At x={960} y={670} o={ramp(t, c("It is a map for practice"), 0.5) * second}><K c={TEAL} s={30}>a map for practice</K></At>
      <At x={960} y={760} o={ramp(t, c("It is not a chart of what the world is made of"), 0.5) * second}><SK c={DIM} s={28} strikeAt={c("It is not a chart of what the world is made of") + 1}>a chart of what the world is made of</SK></At>
      <Items items={[
        ["So the third correction", 960, 360, <Wd c={WARM} s={38} serif>correction three</Wd>],
        ["let each tradition speak in its own voice", 960, 480, <Wd c={GOLD} s={42} serif>let each tradition speak in its own voice</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const bag = c("There is one more thing the papers carry");
  const first = 1 - ramp(t, bag, 0.4);
  const soft = ramp(t, c("Rub butter into it under the sun"), 1.2);
  const hard = ramp(t, c("slowly hardens like wood"), 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6) * first}><Wd c={ROSE} s={42} serif>a caution</Wd></At>
      <At x={960} y={250} o={ramp(t, c("a plan for health and even for mental health"), 0.5) * first}><SK c={DIM} s={30} strikeAt={c("Nothing like this has been tested")}>a plan for health and mental health</SK></At>
      <At x={960} y={360} o={ramp(t, c("Nothing like this has been tested"), 0.5) * first}><Wd c={CHALK} s={34} serif>not tested</Wd></At>
      <At x={960} y={460} o={ramp(t, c("These are spiritual practices"), 0.5) * first}><K c={TEAL} s={30}>spiritual practices, not treatments</K></At>
      <At x={960} y={560} o={ramp(t, c("They do not replace a doctor"), 0.5) * first}><K c={CHALK} s={28}>they do not replace a doctor, or care for the mind</K></At>
      <At x={960} y={660} o={ramp(t, c("has left some practitioners sleepless and unsettled"), 0.5) * first}><K c={DIM} s={26}>forced breath, staying awake through sleep: sleeplessness</K></At>
      <At x={960} y={760} o={ramp(t, c("Such practices need a qualified teacher"), 0.5) * first}><Wd c={GOLD} s={30}>only with a qualified teacher</Wd></At>
      <Items items={[
        ["There is one more thing the papers carry", 960, 100, <Wd c={GOLD} s={40} serif>a Tibetan image worth keeping</Wd>],
        ["Raw leather is stiff", 560, 400, <div style={{ width: 360, height: 220, borderRadius: 30, border: `5px solid #B08850`, background: `rgba(176,136,80,${0.25 + 0.25 * soft})`, transform: `rotate(${-6 + 10 * soft}deg)` }} />],
        ["Raw leather is stiff", 560, 600, <Wd c={CHALK} s={28}>raw leather · butter · sun: it softens</Wd>, { d: 0.6 }],
        ["But a leather bag used only to store butter", 1360, 400, <div style={{ width: 220, height: 280, borderRadius: "40% 40% 30% 30%", border: `5px solid ${hard > 0.5 ? DIM : "#B08850"}`, background: `rgba(120,100,70,${0.2 + 0.4 * hard})` }} />],
        ["slowly hardens like wood", 1360, 600, <Wd c={DIM} s={28}>a bag that only stores butter: hard as wood</Wd>],
        ["Knowledge never rubbed in by practice does the same", 960, 720, <Wd c={WARM} s={32} serif>knowledge never rubbed in hardens</Wd>],
        ["but as an invitation to look", 960, 800, <Wd c={TEAL} s={32}>not facts to store: an invitation to look</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The lights were never a stuff behind the world");
  const pre = 1 - ramp(t, end, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, 0.2, 0.6) * pre}><Wd c={CHALK} s={44} serif>so, what turns into light?</Wd></At>
      <Items items={[
        ["Nothing found turns into light", 960, 260, <Wd c={GOLD} s={42} serif>nothing found turns into light</Wd>, { until: "The lights were never a stuff behind the world" }],
        ["The body appeared solid because it was held", 960, 370, <K c={CHALK} s={28}>solid, because it was held</K>, { until: "The lights were never a stuff behind the world" }],
        ["When the holding ends", 960, 460, <K c={TEAL} s={28}>the holding ends: it no longer appears so</K>, { until: "The lights were never a stuff behind the world" }],
        ["Nothing is produced", 960, 550, <Wd c={CHALK} s={30}>nothing produced · nothing lost</Wd>, { until: "The lights were never a stuff behind the world" }],
        ["The same hardness, the same warmth, the same colour", 960, 640, <Wd c={GOLD} s={30}>hardness, warmth, colour: vivid, appearing</Wd>, { until: "The lights were never a stuff behind the world" }],
        ["That is why the rainbow body is not the measure of insight", 640, 760, <SK c={DIM} s={26} strikeAt={c("And it is not a goal to aim at")}>the measure of insight</SK>, { until: "The lights were never a stuff behind the world" }],
        ["And it is not a goal to aim at", 1280, 760, <SK c={DIM} s={26} strikeAt={c("To practise for a body of light")}>a goal to aim at</SK>, { until: "The lights were never a stuff behind the world" }],
      ]} />
      <At x={960} y={420}><Reveal text="The lights were never a stuff behind the world." at={end} size={50} color={CHALK} speed={0.04} /></At>
      <At x={960} y={540}><Reveal text="They were the world, seen without grasping." at={c("They were the world, seen without grasping")} size={50} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A body is left in a small room", "night", <RoomScene />],
    ["Four papers tell this story", "dusk", <PapersScene />],
    ["First, what they report", "light", <ReportScene />],
    ["The papers also give the path", "whole", <PathScene />],
    ["So far, good reporting", "doubt", <Slip1Scene />],
    ["itself does not need this", "jade", <GroundScene />],
    ["Try it now with something in your hand", "search", <AppleScene />],
    ["This is also how to read the fourth vision", "deep", <VisionVaseScene />],
    ["The second slip is quieter", "doubt", <Slip2Scene />],
    ["And the most often told modern case", "dusk", <RealizationScene />],
    ["The third slip is about traditions", "deep", <Slip3Scene />],
    ["in turn, has its own", "jade", <BonScene />],
    ["One more caution belongs here", "doubt", <CautionScene />],
    ["So, what turns into light", "night", <EndScene />],
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
