// Bonus video: Dependent Arising Section 2 Part 5: Clarity Without a Knower (AA46).
// (Script: new-documents/after-anatta/aa46-clarity-without-a-knower-script.md, from EBooks
// Bonus Articles/clarity-without-a-knower, draft of 2026-11-23; approved by the owner 2026-11-23: "Approved".)
// Arc: everything else not found, surely not the one who finds -> the last candidate: a knower behind the clarity ->
// look for it (a tree and seeing, no viewer; the ringing, no listener); new floors named and struck -> when no layer is
// left: me | screen | world, the middleman goes; in the seen, just the seen; the clarity is exactly the appearances,
// each clear in its own way -> the taste (vivid, intimate, no centre or edge, effortless, self-releasing: a drawing on
// water) -> the caution: non-duality held as a new floor; the clarity is empty too -> the Dzogchen words read without
// a ground, with the Nyingma note -> which holds -> next: complete, and dependent.
// Stance: no knower, witness or light is drawn behind anything; the viewer is drawn only dashed and struck.
// Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "Everything else has been looked for, and not found", "I am John Tan, known as Thusness",
  "In Parts 1 to 4, what appears was looked for, and not found", "One candidate is left",
  "because it seems to be the one doing all the looking",
  // the knower
  "Every appearance is clear", "The colour is seen as colour", "It runs through all appearing",
  "Surely, then, there is a light behind it all", "A knower. A witness", "The one constant behind the changing show",
  "Or look for it", "Look at a tree. There is the tree, and there is seeing",
  "Now look for a viewer, standing apart from both. It is not found",
  "Listen to the bell. There is the ringing, clear and complete", "The ringing does not need one to be clear",
  "The clarity is the appearing's own", "This is the observer returning, in a quieter form",
  "Pure awareness. The witness. The ground of being",
  "Each makes the clarity into a thing, standing behind the appearing", "It is about something tasted",
  // no layer
  "When no layer is left", "The habit expects it to grow thin", "Nothing is lost, except the distance",
  "As long as a layer is assumed, experience is always one step removed", "There is me, in here",
  "A screen, or a mind, in between", "And the world, out there", "Every experience comes with a middleman",
  "When the layer is seen through, the middleman goes", "The Buddha put it to",
  "In the seen, just the seen. In the heard, just the heard", "Not a seer who sees the seen",
  "And the clarity is exactly the appearances", "The ringing is the clarity. The red is the clarity",
  "Knowing and known are not two", "Not because they have melted into one thing",
  "But because they were never found as two things in the first place",
  "And the clarity is not one even light, poured over everything", "The clarity of the bell is the ringing",
  "The clarity of an ache is aching", "Intimate without merging. Distinct without walls",
  // taste
  "What is this like, in taste? I can only point", "Vivid. Without a layer to soften it",
  "Intimate. There is no gap between here and there to cross", "The scenery is the seeing",
  "Without centre, and without edge", "Effortless. Nobody is doing the hearing",
  "Each appearance is complete, and gone", "Like a drawing on water, which needs no eraser",
  // caution
  "And one caution", "can still be held in a substantialist way", "quietly becomes the new floor",
  "Luminosity takes the seat that substance used to occupy", "But the clarity is empty too",
  "And it is just as vivid for that", "a layer has come back",
  // the words
  "has its own words for this clarity", "Luminosity is not a bright substance behind the display",
  "Display is not the display of something hidden", "Spontaneous presence is the completeness of each appearance",
  "I should say plainly that this is a reading", "They will find more in those words than I take from them here",
  "I take them in the sense that rules out a ground", "Only the one standing behind them is not found",
  // which holds
  "So, which holds", "By experience. Look at a tree", "At no point is a viewer met",
  "By logic. A knower standing behind experience would have to be picked out", "And the regress never ends",
  "Either way, no witness is established", "By working. Seeing sees. Hearing hears. Thinking thinks",
  "The witness explains nothing that the clarity of appearing does not already do",
  "So the knower behind the knowing is not the truer view", "The I in I see",
  "None of this makes my everyday words false", "What fails is only the one standing behind the seeing, holding it",
  // close
  "This is Section 2, Part 5 of the Dependent Arising series", "In Part 6, I take up the other side of the same taste",
  "how can the seen be complete", "That opens onto total exertion",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  grove: { a: "rgba(40,110,90,0.46)", b: "rgba(60,50,130,0.42)", c: "rgba(150,120,60,0.3)" },
  clear: { a: "rgba(70,130,170,0.44)", b: "rgba(150,120,60,0.34)", c: "rgba(60,60,150,0.34)" },
  water: { a: "rgba(40,90,140,0.5)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  temple: { a: "rgba(150,105,45,0.46)", b: "rgba(60,50,130,0.44)", c: "rgba(40,90,110,0.32)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
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
const SK: React.FC<{ c?: string; s?: number; at: string; d?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + d} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "18px 16px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={32} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 8 }}><Wd c={CHALK} s={22}>{sub}</Wd></div> : null}
  </div>
);
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A tree; `viewer` 0..1 shows a dashed figure behind it (the assumed viewer), `gone` 0..1 fades it out. */
const Tree: React.FC<{ viewer: number; gone: number }> = ({ viewer, gone }) => (
  <svg width={600} height={420} viewBox="-300 -220 600 420" style={{ overflow: "visible" }}>
    <path d="M-10 180 L-10 40 M10 180 L10 40" stroke={WARM} strokeWidth={10} />
    <circle cx={0} cy={-40} r={110} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={5} />
    <circle cx={-70} cy={10} r={60} fill={`${GREEN}22`} stroke={GREEN} strokeWidth={4} />
    <circle cx={75} cy={5} r={62} fill={`${GREEN}22`} stroke={GREEN} strokeWidth={4} />
    <g opacity={viewer * (1 - gone)}>
      <circle cx={230} cy={-30} r={26} fill="none" stroke={DIM} strokeWidth={4} strokeDasharray="6 6" />
      <path d="M230 -4 L230 80 M200 30 L260 30 M230 80 L205 140 M230 80 L255 140" stroke={DIM} strokeWidth={4} strokeDasharray="6 6" />
      <path d="M200 -30 L120 -40" stroke={DIM} strokeWidth={3} strokeDasharray="4 8" />
      <text x={230} y={180} fill={DIM} fontSize={24} textAnchor="middle" fontFamily="SourceSans">a viewer?</text>
    </g>
  </svg>
);
/** A temple bell sending out rings. */
const Bell: React.FC<{ size?: number; ring: number }> = ({ size = 160, ring }) => {
  const { t } = useT();
  return (
    <svg width={size * 2} height={size * 1.3} viewBox="-200 -20 400 260" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <circle key={i} cx={0} cy={120} r={90 + k * 110} fill="none" stroke={GOLD} strokeWidth={3} opacity={ring * (1 - k) * 0.7} />;
      })}
      <path d="M0 0 L0 20 M-60 40 C-60 10 60 10 60 40 L80 170 L-80 170 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M-95 170 L95 170" stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
      <circle cx={0} cy={192} r={12} fill={GOLD} />
    </svg>
  );
};
/** A wavy line drawn on water that fades as it is drawn: self-release. */
const WaterDrawing: React.FC<{ start: number }> = ({ start }) => {
  const { t } = useT();
  const k = Math.max(0, t - start);
  const draw = Math.min(1, k / 1.5);
  const fade = Math.max(0, 1 - Math.max(0, k - 1.8) / 2);
  return (
    <svg width={700} height={200} viewBox="0 0 700 200" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((i) => <path key={i} d={`M0 ${130 + i * 22} Q175 ${115 + i * 22} 350 ${130 + i * 22} T700 ${130 + i * 22}`} stroke={ICE} strokeWidth={2} fill="none" opacity={0.35} />)}
      <path d="M60 100 C160 20 240 160 340 80 S520 20 640 90" stroke={TEAL} strokeWidth={6} fill="none"
        strokeDasharray={900} strokeDashoffset={900 * (1 - draw)} opacity={fade} strokeLinecap="round" />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Everything else has been looked for, and not found", 960, 380, <Wd c={DIM} s={40} serif>Everything else: not found.</Wd>, { until: "I am John Tan, known as Thusness" }],
      ["Everything else has been looked for, and not found", 960, 480, <Wd c={GOLD} s={48} serif>But surely not the one who finds?</Wd>, { d: 2.2, until: "I am John Tan, known as Thusness" }],
      ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Clarity Without a Knower</Wd>, { d: 0.2 }],
      ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 5</Wd>, { d: 0.8 }],
      ["In Parts 1 to 4, what appears was looked for, and not found", 960, 160, <Wd c={DIM} s={26}>Parts 1–4: no thing, no floor, no ranking, no web</Wd>, { d: 0.3 }],
      ["One candidate is left", 960, 870, <K c={VIOLET} s={26}>one candidate left: the one doing the looking</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const KnowerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const viewer = ramp(t, c("Now look for a viewer, standing apart from both. It is not found"), 0.6);
  const gone = ramp(t, c("Now look for a viewer, standing apart from both. It is not found") + 2.5, 1);
  return (
    <AbsoluteFill>
      <Items items={[["Every appearance is clear", 960, 90, <Wd c={ICE} s={44} serif>A knower behind the clarity?</Wd>]]} />
      <Phase to="Or look for it">
        <Items items={[
          ["The colour is seen as colour", 960, 230, <Wd c={CHALK} s={28}>colour seen as colour · sound heard as sound · thought known as thought</Wd>],
          ["It runs through all appearing", 960, 300, <Wd c={DIM} s={24}>clarity runs through all appearing</Wd>],
          ["Surely, then, there is a light behind it all", 960, 430, <Wd c={DIM} s={28}>surely there is a light behind it all…</Wd>],
          ["A knower. A witness", 960, 510, <Wd c={DIM} s={26}>a knower · a witness · a background awareness</Wd>],
          ["The one constant behind the changing show", 960, 580, <Wd c={DIM} s={24}>the one constant behind the show</Wd>],
        ]} />
      </Phase>
      <Phase from="Or look for it" to="This is the observer returning, in a quieter form">
        <Items items={[["Or look for it", 960, 180, <Wd c={GOLD} s={36} serif>Or look for it.</Wd>]]} />
        <At x={560} y={540} o={ramp(t, c("Look at a tree. There is the tree, and there is seeing"), 0.6)}><Tree viewer={viewer} gone={gone} /></At>
        <At x={1400} y={520} o={ramp(t, c("Listen to the bell. There is the ringing, clear and complete"), 0.6)}><Bell ring={1} /></At>
        <Items items={[
          ["Now look for a viewer, standing apart from both. It is not found", 560, 820, <K c={WARM} s={24}>a viewer apart: not found</K>, { d: 2.5, pop: true }],
          ["The ringing does not need one to be clear", 1400, 820, <K c={WARM} s={24}>no listener needed to be clear</K>, { pop: true }],
          ["The clarity is the appearing's own", 960, 260, <Wd c={TEAL} s={30} serif>the clarity is the appearing's own</Wd>],
        ]} />
      </Phase>
      <Phase from="This is the observer returning, in a quieter form" to="When no layer is left">
        <Items items={[
          ["This is the observer returning, in a quieter form", 960, 220, <Wd c={CHALK} s={30}>the observer, returning quietly after anatta</Wd>],
          ["Pure awareness. The witness. The ground of being", 960, 360, <SK at="Each makes the clarity into a thing, standing behind the appearing" d={1} s={28}>pure awareness · the witness · the ground of being</SK>],
          ["Each makes the clarity into a thing, standing behind the appearing", 960, 470, <Wd c={WARM} s={26}>each makes clarity a thing behind the appearing</Wd>],
          ["It is about something tasted", 960, 620, <Wd c={GOLD} s={32} serif>not only an argument: something tasted</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const LayerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const go = ramp(t, c("When the layer is seen through, the middleman goes"), 1);
  return (
    <AbsoluteFill>
      <Items items={[["When no layer is left", 960, 90, <Wd c={TEAL} s={44} serif>When no layer is left</Wd>]]} />
      <Phase to="The Buddha put it to">
        <Items items={[
          ["The habit expects it to grow thin", 960, 190, <Wd c={DIM} s={26}>thin? vanished? the other way round</Wd>],
          ["Nothing is lost, except the distance", 960, 260, <K c={GOLD} s={28}>nothing lost, except the distance</K>, { pop: true }],
          ["There is me, in here", 480, 450, <Box c={ROSE} w={360} title="me, in here" />, { pop: true, o: 1 - go * 0.85 }],
          ["A screen, or a mind, in between", 960, 450, <Box c={DIM} w={360} title="a screen between" sub="a picture of sound" />, { pop: true, o: 1 - go }],
          ["And the world, out there", 1440, 450, <Box c={ICE} w={360} title="the world, out there" />, { pop: true, o: 1 - go * 0.85 }],
          ["Every experience comes with a middleman", 960, 620, <SK at="When the layer is seen through, the middleman goes" d={0.6} s={26}>every experience, a middleman</SK>],
          ["When the layer is seen through, the middleman goes", 960, 720, <Wd c={GOLD} s={30} serif>no "between" left for anything to stand in</Wd>, { d: 0.8 }],
        ]} />
      </Phase>
      <Phase from="The Buddha put it to" to="What is this like, in taste? I can only point">
        <Items items={[
          ["In the seen, just the seen. In the heard, just the heard", 960, 200, <Wd c={GOLD} s={36} serif>in the seen, just the seen</Wd>],
          ["In the seen, just the seen. In the heard, just the heard", 960, 260, <Wd c={DIM} s={22}>to Bāhiya (Udāna 1.10)</Wd>, { d: 1 }],
          ["Not a seer who sees the seen", 960, 320, <SK at="And the clarity is exactly the appearances" s={24}>a seer who sees the seen</SK>],
          ["And the clarity is exactly the appearances", 960, 420, <Wd c={TEAL} s={32} serif>the clarity is exactly the appearances</Wd>],
          ["The ringing is the clarity. The red is the clarity", 960, 490, <Wd c={CHALK} s={24}>the ringing · the red · the thought: the clarity</Wd>],
          ["Knowing and known are not two", 960, 580, <K c={GOLD} s={26}>knowing and known: not two</K>, { pop: true }],
          ["Not because they have melted into one thing", 760, 650, <SK at="But because they were never found as two things in the first place" s={22}>melted into one</SK>],
          ["But because they were never found as two things in the first place", 1180, 650, <Wd c={CHALK} s={22}>never found as two</Wd>],
          ["The clarity of the bell is the ringing", 480, 770, <K c={GOLD} s={22}>the bell: ringing</K>, { pop: true }],
          ["The clarity of the bell is the ringing", 960, 770, <K c={ROSE} s={22}>the red: redness</K>, { pop: true, d: 1.2 }],
          ["The clarity of an ache is aching", 1440, 770, <K c={WARM} s={22}>an ache: aching</K>, { pop: true }],
          ["Intimate without merging. Distinct without walls", 960, 860, <Wd c={TEAL} s={26} serif>intimate without merging · distinct without walls</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const TasteScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["What is this like, in taste? I can only point", 960, 100, <Wd c={TEAL} s={44} serif>The taste</Wd>],
        ["Vivid. Without a layer to soften it", 960, 220, <Box c={GOLD} w={900} title="vivid" sub="nothing to soften it: each appearance fully itself" />, { pop: true }],
        ["Intimate. There is no gap between here and there to cross", 960, 340, <Box c={ROSE} w={900} title="intimate" sub="no gap to cross: the scenery is the seeing" />, { pop: true }],
        ["Without centre, and without edge", 960, 460, <Box c={ICE} w={900} title="without centre, without edge" sub="no point of view at the middle, no border" />, { pop: true }],
        ["Effortless. Nobody is doing the hearing", 960, 580, <Box c={GREEN} w={900} title="effortless" sub="hearing happens when conditions meet" />, { pop: true }],
        ["Each appearance is complete, and gone", 960, 700, <Box c={TEAL} w={900} title="self-releasing" sub="complete, and gone: nothing kept" />, { pop: true }],
      ]} />
      <At x={960} y={860} o={1}><WaterDrawing start={c("Like a drawing on water, which needs no eraser")} /></At>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["And one caution", 960, 100, <Wd c={WARM} s={44} serif>One caution</Wd>],
      ["can still be held in a substantialist way", 960, 230, <Wd c={CHALK} s={28}>the split collapses, and then…</Wd>],
      ["quietly becomes the new floor", 960, 340, <SK at="But the clarity is empty too" s={28}>pure presence · luminous awareness as the new floor</SK>],
      ["Luminosity takes the seat that substance used to occupy", 960, 430, <Wd c={DIM} s={24}>luminosity in substance's old seat</Wd>],
      ["But the clarity is empty too", 960, 560, <Wd c={GOLD} s={36} serif>the clarity is empty too</Wd>],
      ["And it is just as vivid for that", 960, 630, <Wd c={CHALK} s={26}>not found, and just as vivid</Wd>],
      ["a layer has come back", 960, 740, <K c={WARM} s={24}>held as a possession: a layer is back</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const WordsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["has its own words for this clarity", 960, 100, <Wd c={GOLD} s={40} serif>Dzogchen words, read without a ground</Wd>],
      ["Luminosity is not a bright substance behind the display", 480, 280, <Box c={GOLD} w={420} title="luminosity" sub="the knowing clarity of the display itself" />, { pop: true }],
      ["Display is not the display of something hidden", 960, 280, <Box c={ICE} w={420} title="display" sub="appearing, nothing behind it" />, { pop: true }],
      ["Spontaneous presence is the completeness of each appearance", 1440, 280, <Box c={TEAL} w={420} title="spontaneous presence" sub="each complete, owing nothing to a source" />, { pop: true }],
      ["Spontaneous presence is the completeness of each appearance", 960, 430, <K c={TEAL} s={24}>self-release: the drawing on water</K>, { pop: true, d: 3 }],
      ["I should say plainly that this is a reading", 960, 560, <Wd c={CHALK} s={28} serif>this is a reading</Wd>],
      ["They will find more in those words than I take from them here", 960, 630, <Wd c={DIM} s={22}>some Nyingma teachers: the clear nature of mind as the basis; rigpa set apart from ordinary mind</Wd>],
      ["I take them in the sense that rules out a ground", 960, 700, <K c={GOLD} s={24}>read here: no ground</K>, { pop: true }],
      ["Only the one standing behind them is not found", 960, 800, <Wd c={CHALK} s={26}>still seen, heard, known · only the one behind: not found, never needed</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. Look at a tree", 400, 270, <Box c={ICE} w={500} title="Experience" sub="tree and seeing · no viewer met" />, { pop: true }],
      ["By logic. A knower standing behind experience would have to be picked out", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="picked out: one more appearance" />, { pop: true }],
      ["And the regress never ends", 960, 410, <Wd c={CHALK} s={22}>regress, or nothing found: no witness</Wd>],
      ["By working. Seeing sees. Hearing hears. Thinking thinks", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="all of it works with no viewer" />, { pop: true }],
      ["The witness explains nothing that the clarity of appearing does not already do", 1520, 410, <Wd c={CHALK} s={22}>the witness explains nothing more</Wd>],
      ["So the knower behind the knowing is not the truer view", 960, 540, <Wd c={CHALK} s={28} serif>the knower behind: the default, not the truer view</Wd>],
      ["The I in I see", 960, 610, <Wd c={GOLD} s={28} serif>carried by the "I" in "I see"</Wd>],
      ["None of this makes my everyday words false", 960, 710, <K c={GREEN} s={24}>I see the tree · I hear the bell</K>, { pop: true }],
      ["What fails is only the one standing behind the seeing, holding it", 960, 790, <Wd c={DIM} s={24}>what fails: only the one standing behind, holding it</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("That opens onto total exertion");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 5 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 5</Wd>],
        ["In Part 6, I take up the other side of the same taste", 960, 300, <Wd c={DIM} s={26}>next, Part 6: Complete, and Dependent</Wd>],
        ["how can the seen be complete", 960, 460, <Wd c={CHALK} s={34} serif>no layer, yet everything depends:</Wd>],
        ["how can the seen be complete", 960, 530, <Wd c={CHALK} s={34} serif>how can the seen be complete?</Wd>, { d: 0.6 }],
        ["That opens onto total exertion", 960, 660, <K c={GOLD} s={28}>total exertion · four images</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Everything else has been looked for, and not found", "dusk", <OpenScene />],
    ["Every appearance is clear", "grove", <KnowerScene />],
    ["When no layer is left", "clear", <LayerScene />],
    ["What is this like, in taste? I can only point", "water", <TasteScene />],
    ["And one caution", "ghost", <CautionScene />],
    ["has its own words for this clarity", "temple", <WordsScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 5 of the Dependent Arising series", "night", <CloseScene />],
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
