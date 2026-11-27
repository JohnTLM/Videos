// Bonus video: Dependent Arising Section 4 Part 3: Continuity Without a Carrier (AA58), the close of Section 4.
// (Script: new-documents/after-anatta/aa58-continuity-without-a-carrier-script.md, from EBooks
// Bonus Articles/continuity-without-a-carrier, approved by the owner 2026-11-27; script approved the same day:
// "Approved aa58".)
// Arc: what makes a life one life? -> from Parts 1 and 2 -> two pictures, both wrong (carrier; disconnected flashes)
// -> the lamp through the night's watches -> the melody -> nothing lost, nothing fixed -> energy is not the carrier
// -> potentiality is not the carrier -> the path under each logic -> the last trap -> back to the candle -> close.
// Stance: the carrier, the stored energy and the store of possibilities are drawn only to be struck; openness is
// never drawn as a thing to hold.
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
  "If nothing is carried from moment to moment, what makes a life one life", "I am John Tan, known as Thusness",
  "Part 1 let the passenger go", "One worry is left, and it is the strongest",
  // two pictures
  "The logic of substance has one answer. Something persists", "Take that carrier away",
  "The logic of dependency rejects both pictures",
  // lamp
  "The tradition's image is a lamp", "Not the same, the king says. And not another either",
  "Nothing passes from one flame to the next", "Continuity is named on a succession",
  // melody
  "A melody known by heart shows how this works", "No tune is stored somewhere between playings",
  "Yet the tune is recognised across them all", "Habit, character, skill and karma are like this",
  "But the link is named across the moments",
  // lost, fixed
  "Two things follow", "Nothing is lost", "The person who made a promise forty years ago keeps it today",
  "And nothing is fixed", "A grievance can end", "Continuity without a carrier is more reliable than the nihilist expects",
  // energy
  "Someone trained in physics may feel a carrier has been found after all", "Physics itself does not treat it so",
  "Its amount depends on the frame", "And its conservation comes from a symmetry",
  "When a match burns, chemical energy becomes heat and light", "Conservation is a regularity. It is not a passenger",
  // potential
  "A subtler candidate remains", "Surely, then, there is a store of possibilities behind appearances",
  "That gives emptiness a home behind things", "Salt is soluble only in relation to water",
  "It is not a thing waiting backstage", "Nor is the plasticity infinite", "A shadow cannot be walked across as a bridge",
  "This is the same luminous plasticity of Section 3", "Nothing blocks the display",
  // path
  "The two logics also lay out different paths", "Under the logic of substance, the path is a journey made by a traveller",
  "And because the states are pictured as things", "Under the logic of dependency, three things are recognised instead",
  "Conditions are what work", "Openness is not a virtue added on top", "And there is nothing to hold",
  "One trap remains", "Openness, too, is empty",
  // candle
  "Return to the candle of Part 1", "The logic of dependency asks nothing of the kind",
  "Nothing is taken from the candle by this",
  // close
  "This is Section 4, Part 3 of the Dependent Arising series, and the close of Section 4",
  "What changes is only the weight with which it is watched",
];

const M = {
  open: { a: "rgba(60,90,130,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.32)" },
  two: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  lamp: { a: "rgba(170,110,40,0.46)", b: "rgba(40,40,100,0.5)", c: "rgba(40,40,80,0.4)" },
  tune: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  lost: { a: "rgba(60,110,70,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  energy: { a: "rgba(40,100,130,0.48)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
  plastic: { a: "rgba(190,150,70,0.44)", b: "rgba(60,90,170,0.44)", c: "rgba(50,140,140,0.34)" },
  path: { a: "rgba(150,60,80,0.44)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  candle: { a: "rgba(170,110,40,0.46)", b: "rgba(60,45,130,0.44)", c: "rgba(40,40,80,0.4)" },
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
const SBox: React.FC<{ c: string; w?: number; title: string; sub?: string; at: string; d?: number }> = ({ at, d = 0, ...b }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Box {...b} /><Strike at={cue(at) + d} /></div>;
};
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** An oil lamp with a small flame. */
const OilLamp: React.FC<{ w?: number }> = ({ w = 200 }) => {
  const { t } = useT();
  const h = 50 + 6 * Math.sin(t * 6);
  return (
    <svg width={w} height={w} viewBox="-100 -120 200 200" style={{ overflow: "visible" }}>
      <path d="M-70 20 Q0 70 70 20 L50 20 Q0 40 -50 20 Z" fill="rgba(180,120,60,0.45)" stroke={WARM} strokeWidth={4} />
      <path d="M-60 20 Q0 -10 60 20" fill="none" stroke={WARM} strokeWidth={4} />
      <path d={`M0 ${-h} C18 ${-h * 0.5} 14 0 0 2 C-14 0 -18 ${-h * 0.5} 0 ${-h} Z`} fill="rgba(240,170,70,0.8)" stroke={GOLD} strokeWidth={3} />
    </svg>
  );
};
/** Three watches of the night, each with its lamp flame. */
const Watches: React.FC = () => (
  <div style={{ display: "flex", gap: 60, alignItems: "flex-end" }}>
    {["first watch", "middle watch", "last watch"].map((l, i) => (
      <div key={i} style={{ textAlign: "center" }}>
        <OilLamp w={170} />
        <div><Wd c={DIM} s={22}>{l}</Wd></div>
      </div>
    ))}
  </div>
);
/** Notes on a staff, played again: a melody known by heart. */
const Staff: React.FC = () => {
  const { t } = useT();
  const k = (t * 1.2) % 6;
  return (
    <svg width={640} height={200} viewBox="0 0 640 200" style={{ overflow: "visible" }}>
      {[0, 1, 2, 3, 4].map((i) => <line key={i} x1={20} y1={50 + i * 22} x2={620} y2={50 + i * 22} stroke={CHALK} strokeWidth={2} opacity={0.5} />)}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = [128, 106, 84, 106, 72, 94][i];
        const lit = Math.floor(k) === i;
        return <g key={i}><ellipse cx={80 + i * 95} cy={y} rx={16} ry={12} fill={lit ? GOLD : CHALK} opacity={lit ? 1 : 0.6} /><line x1={96 + i * 95} y1={y} x2={96 + i * 95} y2={y - 60} stroke={lit ? GOLD : CHALK} strokeWidth={3} opacity={lit ? 1 : 0.6} /></g>;
      })}
    </svg>
  );
};
/** A candle whose flame leans. */
const Candle: React.FC = () => {
  const { t } = useT();
  const lean = 10 * Math.sin(t * 1.3) + 4 * Math.sin(t * 5.1);
  const h = 70 + 8 * Math.sin(t * 7);
  return (
    <svg width={320} height={420} viewBox="-160 -260 320 420" style={{ overflow: "visible" }}>
      <rect x={-40} y={20} width={80} height={120} rx={8} fill="rgba(240,230,210,0.25)" stroke={CHALK} strokeWidth={4} />
      <line x1={0} y1={20} x2={0} y2={8} stroke={CHALK} strokeWidth={3} />
      <g transform={`translate(0, 8) rotate(${lean})`}>
        <path d={`M0 ${-h} C26 ${-h * 0.5} 22 0 0 0 C-22 0 -26 ${-h * 0.5} 0 ${-h} Z`} fill="rgba(240,170,70,0.75)" stroke={GOLD} strokeWidth={3} />
      </g>
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["If nothing is carried from moment to moment, what makes a life one life", 960, 420, <Staff />],
        ["If nothing is carried from moment to moment, what makes a life one life", 960, 680, <Wd c={GOLD} s={40} serif>what makes a life one life?</Wd>, { d: 1.5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Part 1 let the passenger go">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Continuity Without a Carrier</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 4 · Part 3 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Part 1 let the passenger go">
      <Items items={[
        ["Part 1 let the passenger go", 960, 300, <Wd c={DIM} s={24}>Part 1: no changer · Part 2: questions that lose their object</Wd>],
        ["One worry is left, and it is the strongest", 960, 440, <Wd c={CHALK} s={32} serif>no carrier: what holds a life together?</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const TwoScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The logic of substance has one answer. Something persists", 960, 100, <Wd c={VIOLET} s={40} serif>Two pictures, both wrong</Wd>],
      ["The logic of substance has one answer. Something persists", 520, 330, <SBox c={WARM} w={640} title="a carrier persists" sub="a soul · a stream · a core self · conserved energy" at="The logic of dependency rejects both pictures" />, { pop: true, d: 1 }],
      ["Take that carrier away", 1400, 330, <SBox c={ICE} w={640} title="disconnected flashes" sub="each moment sealed off: no memory, no learning" at="The logic of dependency rejects both pictures" d={0.4} />, { pop: true }],
      ["The logic of dependency rejects both pictures", 960, 560, <K c={TEAL} s={28}>neither the carrier, nor the disconnection</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const LampScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The tradition's image is a lamp", 960, 100, <Wd c={GOLD} s={40} serif>A lamp through the night</Wd>],
      ["The tradition's image is a lamp", 960, 400, <Watches />, { d: 1 }],
      ["Not the same, the king says. And not another either", 960, 640, <Wd c={CHALK} s={28} serif>not the same flame · not another</Wd>],
      ["Nothing passes from one flame to the next", 960, 720, <Wd c={DIM} s={24}>nothing passes · yet not unconnected</Wd>],
      ["Continuity is named on a succession", 960, 810, <K c={GOLD} s={26}>continuity: named on a succession, neither same nor wholly different</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const TuneScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["A melody known by heart shows how this works", 960, 100, <Wd c={TEAL} s={40} serif>A melody known by heart</Wd>],
      ["A melody known by heart shows how this works", 960, 320, <Staff />, { d: 0.5 }],
      ["No tune is stored somewhere between playings", 960, 500, <SK at="Yet the tune is recognised across them all" s={24}>a tune stored between playings</SK>],
      ["Yet the tune is recognised across them all", 960, 580, <Wd c={CHALK} s={24}>recognised across every playing · played well or badly · changed by practice</Wd>],
      ["Habit, character, skill and karma are like this", 960, 680, <Wd c={CHALK} s={26}>habit · character · skill · karma</Wd>],
      ["But the link is named across the moments", 960, 770, <K c={GOLD} s={26}>the link: named across the moments, not carried through them</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const LostScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Two things follow", 960, 110, <Wd c={GREEN} s={40} serif>Nothing lost, nothing fixed</Wd>],
      ["Nothing is lost", 540, 330, <Box c={GREEN} w={680} title="nothing is lost" sub="memory · responsibility · learning · karma" />, { pop: true }],
      ["The person who made a promise forty years ago keeps it today", 540, 470, <Wd c={DIM} s={22}>a promise from forty years ago, kept today</Wd>],
      ["And nothing is fixed", 1380, 330, <Box c={TEAL} w={680} title="nothing is fixed" sub="a habit loosens · a character softens" />, { pop: true }],
      ["A grievance can end", 1380, 470, <Wd c={DIM} s={22}>a grievance can end</Wd>],
      ["Continuity without a carrier is more reliable than the nihilist expects", 960, 640, <Wd c={CHALK} s={28} serif>more reliable than the nihilist expects</Wd>],
      ["Continuity without a carrier is more reliable than the nihilist expects", 960, 710, <Wd c={CHALK} s={28} serif>more open than the substantialist allows</Wd>, { d: 2.5 }],
    ]} />
  </AbsoluteFill>
);

const EnergyScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Someone trained in physics may feel a carrier has been found after all", 960, 100, <Wd c={ICE} s={40} serif>Isn't energy the carrier?</Wd>],
      ["Someone trained in physics may feel a carrier has been found after all", 960, 190, <SK at="Physics itself does not treat it so" s={24}>energy: the modern substance</SK>, { d: 1 }],
      ["Physics itself does not treat it so", 400, 360, <Box c={ICE} w={520} title="a quantity" sub="a number, not a fluid" />, { pop: true }],
      ["Its amount depends on the frame", 960, 360, <Box c={VIOLET} w={520} title="frame-dependent" sub="the ball and the runner" />, { pop: true }],
      ["And its conservation comes from a symmetry", 1520, 360, <Box c={TEAL} w={520} title="a symmetry" sub="laws unchanged over time" />, { pop: true }],
      ["When a match burns, chemical energy becomes heat and light", 960, 540, <Wd c={CHALK} s={24}>a match burns: nothing found travelling into the flame</Wd>],
      ["Conservation is a regularity. It is not a passenger", 960, 640, <K c={GOLD} s={28}>a regularity, not a passenger</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const PlasticScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["A subtler candidate remains", 960, 100, <Wd c={GOLD} s={40} serif>Isn't potentiality the carrier?</Wd>],
      ["Surely, then, there is a store of possibilities behind appearances", 960, 200, <SK at="It is not a thing waiting backstage" s={24}>a store of possibilities, backstage</SK>],
      ["That gives emptiness a home behind things", 960, 270, <Wd c={DIM} s={22}>emptiness made into a new substance</Wd>],
      ["Salt is soluble only in relation to water", 960, 360, <Wd c={CHALK} s={24}>salt, only with water · a seed, only with the sprout</Wd>],
      ["It is not a thing waiting backstage", 960, 430, <K c={TEAL} s={24}>"could": said within conditions</K>, { pop: true }],
      ["Nor is the plasticity infinite", 960, 540, <Wd c={CHALK} s={24}>a rope may look like a snake · a shadow is no bridge</Wd>],
      ["This is the same luminous plasticity of Section 3", 960, 640, <Wd c={GOLD} s={28} serif>luminously plastic: exactly as conditions allow</Wd>],
      ["Nothing blocks the display", 960, 730, <Wd c={DIM} s={24}>unobstructed · no store behind it</Wd>],
    ]} />
  </AbsoluteFill>
);

const PathScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The two logics also lay out different paths", 960, 90, <Wd c={ROSE} s={40} serif>Two paths</Wd>],
      ["Under the logic of substance, the path is a journey made by a traveller", 960, 200, <SBox c={WARM} w={980} title="a traveller" sub="remove bad states like stones · hold calm like a coin" at="Under the logic of dependency, three things are recognised instead" />, { pop: true }],
      ["And because the states are pictured as things", 960, 300, <Wd c={DIM} s={22}>effort hardens into grasping</Wd>, { until: "Under the logic of dependency, three things are recognised instead" }],
      ["Conditions are what work", 400, 450, <Box c={TEAL} w={520} title="conditions work" sub="change them: the appearance reconfigures" />, { pop: true }],
      ["Openness is not a virtue added on top", 960, 450, <Box c={GREEN} w={520} title="openness" sub="what being dependent already means" />, { pop: true }],
      ["And there is nothing to hold", 1520, 450, <Box c={GOLD} w={520} title="nothing to hold" sub="no walker apart from the walking" />, { pop: true }],
      ["One trap remains", 960, 640, <SK at="Openness, too, is empty" d={0.5} s={24}>openness as a thing to hold</SK>],
      ["Openness, too, is empty", 960, 720, <Wd c={CHALK} s={26} serif>openness, too, is empty: the absence of what you were holding</Wd>],
    ]} />
  </AbsoluteFill>
);

const CandleScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Return to the candle of Part 1", 1360, 260, <Wd c={CHALK} s={26}>the wax shortening · the flame leaning</Wd>],
      ["The logic of dependency asks nothing of the kind", 1360, 360, <Wd c={CHALK} s={24}>never anything apart from the burning</Wd>],
      ["The logic of dependency asks nothing of the kind", 1360, 420, <Wd c={DIM} s={22}>the burning, never apart from wax, air, and the one who watches</Wd>, { d: 2 }],
      ["Nothing is taken from the candle by this", 1360, 520, <K c={GOLD} s={26}>exactly as much light as before</K>, { pop: true }],
    ]} />
    <Items items={[["Return to the candle of Part 1", 540, 520, <Candle />]]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("What changes is only the weight with which it is watched");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 4, Part 3 of the Dependent Arising series, and the close of Section 4", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 4 · the close</Wd>],
        ["What changes is only the weight with which it is watched", 960, 460, <Candle />],
        ["What changes is only the weight with which it is watched", 960, 800, <Wd c={CHALK} s={34} serif>only the weight with which it is watched</Wd>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["If nothing is carried from moment to moment, what makes a life one life", "open", <OpenScene />],
    ["The logic of substance has one answer. Something persists", "two", <TwoScene />],
    ["The tradition's image is a lamp", "lamp", <LampScene />],
    ["A melody known by heart shows how this works", "tune", <TuneScene />],
    ["Two things follow", "lost", <LostScene />],
    ["Someone trained in physics may feel a carrier has been found after all", "energy", <EnergyScene />],
    ["A subtler candidate remains", "plastic", <PlasticScene />],
    ["The two logics also lay out different paths", "path", <PathScene />],
    ["Return to the candle of Part 1", "candle", <CandleScene />],
    ["This is Section 4, Part 3 of the Dependent Arising series, and the close of Section 4", "night", <CloseScene />],
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
