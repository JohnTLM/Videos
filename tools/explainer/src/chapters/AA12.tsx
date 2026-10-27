// After Anatta · Before the steps: What the Logic Is Looking At (thusness-website after-anatta/looking.html).
// Arc: a sound, vivid and known -> five topics (self, object, cause, matter, person) gather into one: a phenomenon, a
// dharma -> what a phenomenon is: whatever can be known, the knowing included -> conditioned and unconditioned, all
// dharmas -> the Abhidharma's dharma that holds its own mark (solid bricks) -> Nagarjuna turns the search on the bricks;
// the unconditioned gets no exemption (MMK 7.33) -> after anatta: the same seeing turned on every phenomenon -> self and
// object are dharmas, one vivid appearing -> two layers (a label over a bare appearance) taken apart: the appearing
// itself is the designation -> designation is singling out, no words needed -> a figure stands out only against its
// ground and with its conditions -> singling out is dependence, dependence is emptiness: by appearing, already empty ->
// the mirror: singling out is not the mistake -> the clarity mistaken as me and as Self, both struck -> taste and logic
// meet in one appearing -> what a phenomenon is -> try it -> close.
// Stance: emptiness and awareness are never drawn as a ground, field, container or background; the bare given, "Self",
// a pure witness and a vast awareness appear only to be struck. The appearing (sound, colour, hand) stays vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // a sound
  "Listen to a sound nearby", "A car, a bird, the hum of a fridge", "It is vivid and clear",
  "and it needs no help to be known",
  // many topics, one
  "Every step of the logic looks at something", "A self", "An object", "A cause", "Matter", "A person",
  "It is easy to hear these as many topics", "They are not many topics",
  "Each time, the logic is looking at a phenomenon", "What Buddhism calls a dharma",
  "This is After Anatta",
  // what a phenomenon is
  "So first, what is a phenomenon", "A phenomenon is whatever can be known",
  "A sound, a colour, a hardness, a feeling, a thought", "Things only thought of, like a number or a plan",
  "And the knowing too", "a moment of seeing is itself a dharma", "Nothing knows from outside the list",
  "Everything is dharma",
  // two kinds
  "The tradition sorts them in two", "Conditioned dharmas arise from conditions and pass",
  "Unconditioned dharmas are not made by conditions", "space, and nirvana, the ending of suffering",
  "Conditioned or unconditioned, they are all dharmas",
  // what holds its own mark
  "The word comes from a root meaning to hold", "a dharma is what holds its own mark", "Hardness for earth",
  "Heat for fire", "Knowing for consciousness", "They had seen through the self, the person, the chariot",
  "But they kept the dharmas as real building blocks", "No self in the person, but the pieces still solid",
  // Nagarjuna
  "Nagarjuna turned the search on the dharmas themselves", "Not even a dharma holds its own mark",
  "Looked for, it is not found", "It arises only in dependence", "And the unconditioned gets no exemption",
  "If the conditioned is not established, he asks, how could the unconditioned be",
  "Space, nirvana, even emptiness: empty too",
  // after anatta
  "This is what after anatta means", "The seeing that found no self is turned on every phenomenon",
  // one appearing
  "So the self is dharmas", "mistaken for someone standing behind them", "An object is dharmas again",
  "mistaken for a thing out there on its own", "Cause, matter and person are the same",
  "They look at this one vivid appearing, from different sides",
  // two layers
  "Now the second point, and it is easy to miss", "We usually picture two layers", "First a bare appearance",
  "Then a name stuck on it", "That picture is still dual", "It keeps a raw given under the label, one more floor",
  "There is no bare appearance underneath, waiting to be named",
  "Designation is not a label put on the appearing", "The appearing itself is the designation",
  // singling out
  "How can that be", "Because designation needs no words", "It needs only singling out", "This sound",
  "This colour", "This ache", "A baby does it", "A bird does it", "We do it long before any word",
  "Whatever appears is already a this", "So nothing appears undesignated",
  // figure and ground
  "And singling out is already dependence", "A this stands out only against what it is not",
  "Only with this seeing, this light, this attention", "Take away the background, and nothing stands out",
  "Take away the conditions, and nothing is singled out",
  // the chain
  "So singling out is not something done to an appearance that was there first", "It is already dependence",
  "And dependence is already emptiness", "Look for the this apart from its conditions, and it is not found",
  "Singling out is dependence", "Dependence is emptiness", "So by appearing, a thing is already empty",
  "Nothing appears first and turns out empty later",
  "dependent arising, emptiness and dependent designation are one", "The logic does not make things empty",
  "It shows what appearing already is",
  // the mirror
  "None of this makes the world thin", "Singling out is not the mistake",
  "A mirror shows every reflection, clear and distinct, and holds none of them",
  "taking what is singled out as standing on its own", "The singling out goes on, vivid and exact",
  // the clarity
  "Then the clarity", "Every appearing is clear: seen, heard, known", "what the tradition calls the nature of mind",
  "it becomes me, the one who sees", "it is easily mistaken again, as a capital S Self",
  "a pure witness, a vast awareness, the background the world appears in",
  "But the clarity is the appearing's own", "It is not a light shining from behind",
  "looked for, it is not found apart from what appears",
  "Clear, knowing and empty, with no one knowing it, and no ground beneath it",
  // taste and logic
  "So the taste and the logic meet here", "Direct taste meets the appearing as vivid, clear and knowing",
  "In seeing, just the seen", "The logic meets the same appearing and finds nothing standing on its own",
  "The logic says it is empty", "The taste says it is luminous", "These are not two things",
  "and neither is a ground beneath the other",
  // what it is
  "When you look at any phenomenon, what it actually is, is just this", "Its being not found",
  "and its arising in dependence", "Not a property it has", "What it is",
  // try it
  "Try it now", "Hear a sound", "Notice it is already this sound, picked out, before any word",
  "Notice what it stands out against, and what it comes with", "Is there a sound left over, apart from those",
  "Then notice the clarity", "Everything is already known, without effort", "Is the knowing behind the scene",
  "Or is it just the scene, bright and clear",
  // close
  "Vivid, singled out, dependent", "And by appearing, already empty",
];

const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  sea: { a: "rgba(30,90,130,0.48)", b: "rgba(60,50,140,0.42)", c: "rgba(150,120,50,0.3)" },
};

// ---------------------------------------------------------------- helpers
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

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
/** A chip struck through at `strikeAt`: only for what is never found (own mark, a bare given, a Self), never for an appearing. */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

// ---------------------------------------------------------------- drawings
/** Sound: rings going out from a small source, vivid. */
const SoundRings: React.FC<{ at: number; color?: string; size?: number }> = ({ at, color = GOLD, size = 300 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="-150 -150 300 300" style={{ overflow: "visible" }}>
      <circle r={14} fill={color} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
      {[0, 1, 2, 3].map(i => {
        const q = (((t - at) * 0.5 + i / 4) % 1 + 1) % 1;
        return <circle key={i} r={20 + q * 120} fill="none" stroke={color} strokeWidth={4} opacity={(1 - q) * ramp(t, at, 0.6)} />;
      })}
    </svg>
  );
};

/** The one vivid appearing: a bright, clear disc, glowing from itself (not a container, nothing inside it). */
const Appearing: React.FC<{ size?: number; o?: number }> = ({ size = 220, o = 1 }) => {
  const { t } = useT();
  const b = 1 + 0.03 * Math.sin(t * 2);
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", opacity: o, transform: `scale(${b})`,
      background: `radial-gradient(circle at 40% 35%, #FFF6DD, ${GOLD} 45%, ${ROSE}aa 75%, ${TEAL}55)`,
      boxShadow: `0 0 50px ${GOLD}, 0 0 90px ${ROSE}66` }} />
  );
};

/** A solid brick: a dharma as the Abhidharma pictured it, holding its own mark. dash: 0..1 its outline breaks. */
const Brick: React.FC<{ label: string; mark: string; color: string; dash?: number }> = ({ label, mark, color, dash = 0 }) => (
  <div style={{ width: 250, height: 130, borderRadius: 10, border: `4px ${dash > 0.1 ? "dashed" : "solid"} ${color}`,
    background: `${color}${dash > 0.1 ? "0c" : "2a"}`, boxShadow: `0 0 ${22 * (1 - dash)}px ${color}77`,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
    <Glow color={CHALK} size={30} serif>{label}</Glow><Glow color={color} size={24}>{mark}</Glow>
  </div>
);

/** An eye (the seeing). */
const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

/** A spotlight ring picking out one "this". */
const Pick: React.FC<{ at: number; label: string; color: string }> = ({ at, label, color }) => {
  const { t, fps } = useT();
  return (
    <div style={{ position: "relative", width: 230, height: 230, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={230} height={230} viewBox="0 0 230 230" style={{ position: "absolute", overflow: "visible" }}>
        <DrawPath d="M115 10 A105 105 0 1 1 114.9 10" p={ramp(t, at, 0.7)} color={color} width={5} len={680} />
      </svg>
      <div style={{ transform: `scale(${pop(t, fps, at + 0.2)})` }}><Glow color={color} size={34} serif>{label}</Glow></div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const SoundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Listen to a sound nearby");
  return (
    <AbsoluteFill>
      <Title at={s} color={GOLD}>a sound nearby</Title>
      <At x={960} y={430} o={ramp(t, s, 0.6)} s={1.3}><SoundRings at={s} /></At>
      <Items items={[
        ["A car, a bird, the hum of a fridge", 520, 430, <Wd c={TEAL} s={30}>a car</Wd>],
        ["A car, a bird, the hum of a fridge", 960, 680, <Wd c={GREEN} s={30}>a bird</Wd>, { d: 0.7 }],
        ["A car, a bird, the hum of a fridge", 1400, 430, <Wd c={ICE} s={30}>the hum of a fridge</Wd>, { d: 1.4 }],
        ["It is vivid and clear", 960, 220, <Wd c={CHALK} s={32} serif>vivid and clear</Wd>],
        ["and it needs no help to be known", 960, 780, <Wd c={GOLD} s={30}>known, with no help</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TopicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gather = c("They are not many topics");
  const ph = c("Each time, the logic is looking at a phenomenon");
  const aa = c("This is After Anatta");
  const T: [string, string, number, number][] = [
    ["A self", "a self", 360, 300], ["An object", "an object", 760, 240], ["A cause", "a cause", 1160, 240],
    ["Matter", "matter", 1560, 300], ["A person", "a person", 960, 400],
  ];
  const g = ramp(t, gather, 1.2);
  return (
    <AbsoluteFill>
      <Title at={c("Every step of the logic looks at something")}>every step looks at something</Title>
      {T.map(([cue, w, x, y], i) => {
        const a = c(cue);
        return (
          <At key={w} x={x + (960 - x) * g} y={y + (520 - y) * g} s={pop(t, fps, a) * (1 - 0.6 * g)} o={1 - ramp(t, ph, 0.6)}>
            <K c={[WARM, TEAL, VIOLET, ICE, ROSE][i]} s={30}>{w}</K>
          </At>
        );
      })}
      <At x={960} y={760} o={ramp(t, c("It is easy to hear these as many topics"), 0.4) * (1 - ramp(t, gather, 0.4))}>
        <Wd c={DIM} s={28}>many topics?</Wd>
      </At>
      <At x={960} y={520} o={ramp(t, ph, 0.7) * (1 - ramp(t, aa, 0.5) * 0.6)}><Appearing size={200} /></At>
      <Items items={[
        ["Each time, the logic is looking at a phenomenon", 960, 700, <Wd c={GOLD} s={36} serif>a phenomenon</Wd>, { d: 0.5, until: "This is After Anatta" }],
        ["What Buddhism calls a dharma", 960, 770, <Wd c={TEAL} s={32}>a dharma</Wd>, { until: "This is After Anatta" }],
      ]} />
      <At x={960} y={260} o={ramp(t, aa, 0.5)}><Glow color={CHALK} size={46} serif>After Anatta · Before the steps</Glow></At>
      <At x={960} y={330} o={ramp(t, aa + 0.8, 0.5)}><Wd c={DIM} s={28}>notes by John Tan (Thusness)</Wd></At>
    </AbsoluteFill>
  );
};

const DefineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const def = c("A phenomenon is whatever can be known");
  const list = c("A sound, a colour, a hardness, a feeling, a thought");
  const L: [string, string, number, number][] = [
    ["a sound", GOLD, 330, 400], ["a colour", ROSE, 640, 400], ["a hardness", WARM, 960, 400], ["a feeling", VIOLET, 1280, 400],
    ["a thought", TEAL, 1590, 400],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("So first, what is a phenomenon")}>what is a phenomenon?</Title>
      <At x={960} y={240} o={ramp(t, def - 0.3, 0.3)}><Reveal text="whatever can be known" at={def} size={58} speed={0.04} /></At>
      {L.map(([w, col, x, y], i) => (
        <At key={w} x={x} y={y} s={pop(t, fps, list + i * 0.45)}><K c={col} s={28}>{w}</K></At>
      ))}
      <Items items={[
        ["Things only thought of, like a number or a plan", 640, 520, <K c={DIM} s={26}>a number</K>, { pop: true }],
        ["Things only thought of, like a number or a plan", 960, 520, <K c={DIM} s={26}>a plan</K>, { d: 0.6, pop: true }],
        ["And the knowing too", 1290, 520, <Eye size={130} />, { pop: true }],
        ["a moment of seeing is itself a dharma", 1290, 600, <Wd c={ICE} s={26}>the seeing, a dharma too</Wd>],
        ["Nothing knows from outside the list", 960, 680, <Wd c={CHALK} s={30}>nothing knows from outside the list</Wd>],
        ["Everything is dharma", 960, 780, <Wd c={GOLD} s={44} serif>everything is dharma</Wd>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const KindsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const all = c("Conditioned or unconditioned, they are all dharmas");
  return (
    <AbsoluteFill>
      <Title at={c("The tradition sorts them in two")}>two kinds</Title>
      <Items items={[
        ["Conditioned dharmas arise from conditions and pass", 560, 250, <Wd c={TEAL} s={38} serif>conditioned</Wd>],
        ["Conditioned dharmas arise from conditions and pass", 560, 330, <Wd c={DIM} s={26}>arise from conditions, and pass</Wd>, { d: 0.6 }],
        ["Conditioned dharmas arise from conditions and pass", 560, 430, <K c={GOLD} s={26}>every sight</K>, { d: 1.2, pop: true }],
        ["Conditioned dharmas arise from conditions and pass", 560, 510, <K c={GOLD} s={26}>every sound</K>, { d: 1.6, pop: true }],
        ["Conditioned dharmas arise from conditions and pass", 560, 590, <K c={GOLD} s={26}>every thought</K>, { d: 2.0, pop: true }],
        ["Unconditioned dharmas are not made by conditions", 1360, 250, <Wd c={VIOLET} s={38} serif>unconditioned</Wd>],
        ["Unconditioned dharmas are not made by conditions", 1360, 330, <Wd c={DIM} s={26}>not made by conditions</Wd>, { d: 0.6 }],
        ["space, and nirvana, the ending of suffering", 1360, 430, <K c={ICE} s={26}>space</K>, { pop: true }],
        ["space, and nirvana, the ending of suffering", 1360, 510, <K c={ICE} s={26}>nirvana</K>, { d: 0.6, pop: true }],
      ]} />
      <At x={960} y={720} o={ramp(t, all, 0.5)}>
        <svg width={1100} height={60} viewBox="0 0 1100 60" style={{ overflow: "visible" }}>
          <DrawPath d="M20 10 Q20 40 550 40 Q1080 40 1080 10" p={ramp(t, all, 0.9)} color={GOLD} width={4} len={1300} />
        </svg>
      </At>
      <At x={960} y={790} o={ramp(t, all + 0.5, 0.5)}><Wd c={GOLD} s={36} serif>all of them dharmas</Wd></At>
    </AbsoluteFill>
  );
};

const HoldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seen = c("They had seen through the self, the person, the chariot");
  const kept = c("But they kept the dharmas as real building blocks");
  const B: [string, string, string, string][] = [
    ["Hardness for earth", "earth", "hardness", WARM], ["Heat for fire", "fire", "heat", ROSE],
    ["Knowing for consciousness", "consciousness", "knowing", ICE],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("The word comes from a root meaning to hold")}>dharma: from “to hold”</Title>
      <Items items={[
        ["a dharma is what holds its own mark", 960, 200, <Wd c={GOLD} s={32}>the Abhidharma: what holds its own mark</Wd>],
      ]} />
      {B.map(([cue, l, m, col], i) => (
        <At key={l} x={520 + i * 440} y={360} s={pop(t, fps, c(cue))} o={ramp(t, c(cue), 0.3)}>
          <Brick label={l} mark={m} color={col} />
        </At>
      ))}
      {["the self", "the person", "the chariot"].map((w, i) => (
        <At key={w} x={560 + i * 400} y={560} o={ramp(t, seen + i * 0.5, 0.4)}>
          <SK c={DIM} s={26} strikeAt={seen + 1.6 + i * 0.3}>{w}</SK>
        </At>
      ))}
      <At x={960} y={660} o={ramp(t, seen + 2.4, 0.4)}><Wd c={DIM} s={26}>seen through</Wd></At>
      <Items items={[
        ["But they kept the dharmas as real building blocks", 960, 740, <Wd c={WARM} s={30}>the bricks kept: real, each on its own</Wd>],
        ["No self in the person, but the pieces still solid", 960, 800, <Wd c={CHALK} s={28} serif>no self, but the pieces still solid</Wd>],
      ]} />
      {t > kept && <At x={960} y={360} o={0.25 * ramp(t, kept, 0.5)}><div style={{ width: 1400, height: 170, borderRadius: 14, boxShadow: `0 0 60px ${WARM}` }} /></At>}
    </AbsoluteFill>
  );
};

const NagaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const turn = c("Nagarjuna turned the search on the dharmas themselves");
  const notEven = c("Not even a dharma holds its own mark");
  const nf = c("Looked for, it is not found");
  const ex = c("And the unconditioned gets no exemption");
  const q = c("If the conditioned is not established, he asks, how could the unconditioned be");
  const last = c("Space, nirvana, even emptiness: empty too");
  const B: [string, string, string][] = [["earth", "hardness", WARM], ["fire", "heat", ROSE], ["consciousness", "knowing", ICE]];
  const dash = ramp(t, nf, 0.8);
  return (
    <AbsoluteFill>
      <Title at={turn} color={TEAL}>Nagarjuna: the search turned on the dharmas</Title>
      {B.map(([l, m, col], i) => (
        <At key={l} x={520 + i * 440} y={290} o={1 - ramp(t, ex, 0.6) * 0.75} s={0.85}><Brick label={l} mark={m} color={col} dash={dash} /></At>
      ))}
      <At x={960} y={430} o={ramp(t, notEven, 0.4) * (1 - ramp(t, ex, 0.6))}><SK c={WARM} s={28} strikeAt={notEven + 1.2}>holds its own mark</SK></At>
      <Items items={[
        ["Looked for, it is not found", 640, 520, <Wd c={CHALK} s={30}>looked for, not found</Wd>, { until: "And the unconditioned gets no exemption" }],
        ["It arises only in dependence", 1280, 520, <Wd c={TEAL} s={30}>arising only in dependence</Wd>, { until: "And the unconditioned gets no exemption" }],
      ]} />
      <At x={960} y={600} o={ramp(t, ex, 0.5)}><Wd c={VIOLET} s={32} serif>no exemption for the unconditioned</Wd></At>
      <At x={960} y={680} o={ramp(t, q, 0.5)}><Wd c={DIM} s={26}>“if the conditioned is not established, how could the unconditioned be?” (MMK 7.33)</Wd></At>
      {["space", "nirvana", "emptiness"].map((w, i) => (
        <At key={w} x={620 + i * 340} y={780} s={pop(t, fps, last + i * 0.5)}><K c={ICE} s={26}>{w}: empty too</K></At>
      ))}
    </AbsoluteFill>
  );
};

const AfterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("This is what after anatta means");
  const every = c("The seeing that found no self is turned on every phenomenon");
  return (
    <AbsoluteFill>
      <Title at={a} color={GOLD}>after anatta</Title>
      <At x={560} y={420} o={ramp(t, a + 0.6, 0.5)}><K c={TEAL} s={32}>no self found</K></At>
      <Svg><DrawPath d="M760 420 L1120 420" p={ramp(t, every, 0.8)} color={GOLD} width={5} len={400} /></Svg>
      <At x={1380} y={420} o={ramp(t, every + 0.7, 0.5)}><K c={GOLD} s={32}>every phenomenon</K></At>
      <At x={960} y={600} o={ramp(t, every + 1.2, 0.5)}><Wd c={CHALK} s={32} serif>the same seeing, turned on every dharma</Wd></At>
    </AbsoluteFill>
  );
};

const OneScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const self = c("So the self is dharmas");
  const obj = c("An object is dharmas again");
  const one = c("They look at this one vivid appearing, from different sides");
  const D = ["sights", "sounds", "sensations", "thoughts"];
  return (
    <AbsoluteFill>
      <Title at={self}>one vivid appearing</Title>
      {D.map((w, i) => (
        <At key={w} x={300 + i * 180} y={300} s={pop(t, fps, self + 0.4 + i * 0.3)} o={1 - ramp(t, one, 0.6)}><K c={TEAL} s={24}>{w}</K></At>
      ))}
      <At x={570} y={420} o={ramp(t, c("mistaken for someone standing behind them"), 0.4) * (1 - ramp(t, one, 0.6))}>
        <SK c={DIM} s={26} strikeAt={c("mistaken for someone standing behind them") + 1.4}>someone behind them</SK>
      </At>
      <At x={1380} y={300} s={pop(t, fps, obj)} o={1 - ramp(t, one, 0.6)}><K c={ROSE} s={26}>dharmas again</K></At>
      <At x={1380} y={420} o={ramp(t, c("mistaken for a thing out there on its own"), 0.4) * (1 - ramp(t, one, 0.6))}>
        <SK c={DIM} s={26} strikeAt={c("mistaken for a thing out there on its own") + 1.4}>a thing out there, on its own</SK>
      </At>
      <Items items={[
        ["Cause, matter and person are the same", 960, 560, <Wd c={CHALK} s={28}>cause · matter · person: the same</Wd>, { until: "They look at this one vivid appearing, from different sides" }],
      ]} />
      <At x={960} y={470} o={ramp(t, one, 0.8)}><Appearing size={240} /></At>
      <At x={960} y={700} o={ramp(t, one + 0.8, 0.5)}><Wd c={GOLD} s={34} serif>one appearing, seen from different sides</Wd></At>
    </AbsoluteFill>
  );
};

const LayersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("We usually picture two layers");
  const bare = c("First a bare appearance");
  const name = c("Then a name stuck on it");
  const dual = c("That picture is still dual");
  const none = c("There is no bare appearance underneath, waiting to be named");
  const itself = c("The appearing itself is the designation");
  const gone = ramp(t, none + 0.8, 0.8);
  return (
    <AbsoluteFill>
      <Title at={c("Now the second point, and it is easy to miss")}>the second point</Title>
      <At x={960} y={190} o={ramp(t, two, 0.4) * (1 - ramp(t, itself, 0.5))}><Wd c={DIM} s={28}>the usual picture: two layers</Wd></At>
      <At x={960} y={330} o={ramp(t, name, 0.5) * (1 - ramp(t, itself, 0.6))}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 520, height: 90, borderRadius: 10, border: `4px solid ${VIOLET}`, background: `${VIOLET}22`,
            display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={CHALK} size={30}>a name, stuck on</Glow></div>
          <Strike at={c("Designation is not a label put on the appearing") + 0.6} />
        </div>
      </At>
      <At x={960} y={470} o={ramp(t, bare, 0.5) * (1 - 0.85 * gone)}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 640, height: 110, borderRadius: 10, border: `4px ${gone > 0.1 ? "dashed" : "solid"} ${WARM}`, background: `${WARM}${gone > 0.1 ? "08" : "22"}`,
            display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Glow color={CHALK} size={30}>{t > dual ? "a raw given: one more floor" : "a bare appearance"}</Glow>
          </div>
          <Strike at={none + 0.4} />
        </div>
      </At>
      <At x={960} y={620} o={ramp(t, dual, 0.4) * (1 - ramp(t, none, 0.4))}><Wd c={WARM} s={30}>still dual</Wd></At>
      <At x={960} y={420} o={ramp(t, itself, 0.8)}><Appearing size={220} /></At>
      <At x={960} y={640} o={ramp(t, itself + 0.6, 0.5)}><Wd c={GOLD} s={38} serif>the appearing itself is the designation</Wd></At>
    </AbsoluteFill>
  );
};

const SingleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const words = c("Because designation needs no words");
  const so = c("It needs only singling out");
  return (
    <AbsoluteFill>
      <Title at={c("How can that be")}>how can that be?</Title>
      <At x={960} y={200} o={ramp(t, words, 0.4)}><Wd c={CHALK} s={32}>designation needs no words</Wd></At>
      <At x={960} y={260} o={ramp(t, so, 0.4)}><Wd c={GOLD} s={36} serif>only singling out</Wd></At>
      <At x={520} y={460} o={ramp(t, c("This sound"), 0.3)}><Pick at={c("This sound")} label="this sound" color={GOLD} /></At>
      <At x={960} y={460} o={ramp(t, c("This colour"), 0.3)}><Pick at={c("This colour")} label="this colour" color={ROSE} /></At>
      <At x={1400} y={460} o={ramp(t, c("This ache"), 0.3)}><Pick at={c("This ache")} label="this ache" color={WARM} /></At>
      <Items items={[
        ["A baby does it", 640, 650, <K c={TEAL} s={26}>a baby</K>, { pop: true }],
        ["A bird does it", 960, 650, <K c={GREEN} s={26}>a bird</K>, { pop: true }],
        ["We do it long before any word", 1280, 650, <K c={VIOLET} s={26}>before any word</K>, { pop: true }],
        ["Whatever appears is already a this", 960, 740, <Wd c={CHALK} s={30}>whatever appears is already a “this”</Wd>],
        ["So nothing appears undesignated", 960, 800, <Wd c={GOLD} s={32} serif>nothing appears undesignated</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GroundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dep = c("And singling out is already dependence");
  const against = c("A this stands out only against what it is not");
  const withC = c("Only with this seeing, this light, this attention");
  const bg = c("Take away the background, and nothing stands out");
  const cond = c("Take away the conditions, and nothing is singled out");
  const bgOff = ramp(t, bg + 0.6, 0.8);
  const condOff = ramp(t, cond + 0.6, 0.8);
  const fig = Math.max(0, 1 - Math.max(bgOff, condOff) * 0.9);
  const reset = ramp(t, bg + 2.6, 0.6);
  const bgO = Math.max(1 - bgOff, reset);
  return (
    <AbsoluteFill>
      <Title at={dep} color={TEAL}>singling out is already dependence</Title>
      <At x={960} y={430} o={ramp(t, against, 0.6) * bgO}>
        <div style={{ width: 900, height: 360, borderRadius: 18, background: `repeating-linear-gradient(45deg, ${VIOLET}22 0 18px, ${TEAL}14 18px 36px)`,
          border: `2px solid ${VIOLET}66` }} />
      </At>
      <At x={960} y={430} o={ramp(t, against, 0.6) * (t > bg && t < bg + 2.6 ? fig : (t > cond ? fig : 1))}>
        <div style={{ width: 170, height: 170, borderRadius: "50%", background: `radial-gradient(circle at 40% 35%, #FFF6DD, ${GOLD})`, boxShadow: `0 0 40px ${GOLD}` }} />
      </At>
      <At x={960} y={200} o={ramp(t, against + 0.6, 0.4) * (1 - ramp(t, withC, 0.4))}><Wd c={CHALK} s={28}>a “this”, only against what it is not</Wd></At>
      {["this seeing", "this light", "this attention"].map((w, i) => (
        <At key={w} x={560 + i * 400} y={700} o={ramp(t, withC + i * 0.6, 0.4) * (1 - condOff * 0.85)}><K c={ICE} s={26}>{w}</K></At>
      ))}
      <At x={960} y={790} o={ramp(t, bg, 0.4) * (1 - ramp(t, cond, 0.3))}><Wd c={DIM} s={28}>no background: nothing stands out</Wd></At>
      <At x={960} y={790} o={ramp(t, cond, 0.4)}><Wd c={DIM} s={28}>no conditions: nothing singled out</Wd></At>
    </AbsoluteFill>
  );
};

const ChainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s1 = c("Singling out is dependence");
  const s2 = c("Dependence is emptiness");
  const s3 = c("So by appearing, a thing is already empty");
  const later = c("Nothing appears first and turns out empty later");
  const one = c("dependent arising, emptiness and dependent designation are one");
  const shows = c("It shows what appearing already is");
  const early = c("So singling out is not something done to an appearance that was there first");
  return (
    <AbsoluteFill>
      <Title at={early}>nothing there first</Title>
      <Items items={[
        ["It is already dependence", 960, 210, <Wd c={TEAL} s={30}>already dependence</Wd>, { until: "Singling out is dependence" }],
        ["And dependence is already emptiness", 960, 270, <Wd c={VIOLET} s={30}>already emptiness</Wd>, { until: "Singling out is dependence" }],
        ["Look for the this apart from its conditions, and it is not found", 960, 340, <Wd c={CHALK} s={28}>apart from its conditions: not found</Wd>, { until: "Singling out is dependence" }],
      ]} />
      <At x={960} y={250} o={ramp(t, s1 - 0.2, 0.3)}><Reveal text="Singling out is dependence." at={s1} size={50} color={TEAL} speed={0.035} /></At>
      <At x={960} y={340} o={ramp(t, s2 - 0.2, 0.3)}><Reveal text="Dependence is emptiness." at={s2} size={50} color={VIOLET} speed={0.035} /></At>
      <At x={960} y={440} o={ramp(t, s3 - 0.2, 0.3)}><Reveal text="So by appearing, a thing is already empty." at={s3} size={54} speed={0.035} /></At>
      <At x={960} y={560} o={ramp(t, later, 0.4)}>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <SK c={DIM} s={26} strikeAt={later + 1.6}>first it appears</SK><Wd c={DIM} s={30}>→</Wd><SK c={DIM} s={26} strikeAt={later + 1.9}>later, empty</SK>
        </div>
      </At>
      {["dependent arising", "emptiness", "dependent designation"].map((w, i) => (
        <At key={w} x={520 + i * 440} y={680} s={pop(t, fps, one + i * 0.5)}><K c={[TEAL, VIOLET, GOLD][i]} s={26}>{w}</K></At>
      ))}
      <At x={960} y={750} o={ramp(t, one + 1.8, 0.5)}><Wd c={CHALK} s={28}>one (MMK 24.18)</Wd></At>
      <At x={960} y={810} o={ramp(t, shows, 0.5)}><Wd c={GOLD} s={30} serif>the logic shows what appearing already is</Wd></At>
    </AbsoluteFill>
  );
};

const MirrorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const thin = c("None of this makes the world thin");
  const m = c("A mirror shows every reflection, clear and distinct, and holds none of them");
  const own = c("taking what is singled out as standing on its own");
  const R: [string, number][] = [[GOLD, -90], [ROSE, 0], [TEAL, 90]];
  return (
    <AbsoluteFill>
      <Title at={thin}>not the mistake</Title>
      <At x={960} y={200} o={ramp(t, c("Singling out is not the mistake"), 0.4)}><Wd c={CHALK} s={32}>singling out is not the mistake</Wd></At>
      <At x={760} y={460} o={ramp(t, m, 0.6)}>
        <div style={{ position: "relative", width: 380, height: 300, borderRadius: 16, border: `5px solid ${ICE}`, background: `linear-gradient(135deg, ${ICE}22, ${VIOLET}18)`,
          boxShadow: `0 0 30px ${ICE}77` }}>
          {R.map(([col, dx], i) => (
            <div key={col} style={{ position: "absolute", left: 190 + dx - 32, top: 118, width: 64, height: 64, borderRadius: i === 1 ? 10 : "50%",
              background: col, opacity: ramp(t, m + 0.8 + i * 0.4, 0.4), boxShadow: `0 0 18px ${col}` }} />
          ))}
        </div>
      </At>
      <At x={760} y={660} o={ramp(t, m + 2, 0.5)}><Wd c={ICE} s={26}>clear, distinct, holding none</Wd></At>
      <At x={1380} y={430} s={pop(t, fps, own)}><SK c={WARM} s={28} strikeAt={own + 1.6}>standing on its own</SK></At>
      <At x={1380} y={510} o={ramp(t, own + 0.5, 0.4)}><Wd c={DIM} s={24}>the mistake: one step further</Wd></At>
      <At x={960} y={790} o={ramp(t, c("The singling out goes on, vivid and exact"), 0.5)}><Wd c={GOLD} s={32} serif>the singling out goes on, vivid and exact</Wd></At>
    </AbsoluteFill>
  );
};

const ClarityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cl = c("Then the clarity");
  const me = c("it becomes me, the one who sees");
  const self = c("it is easily mistaken again, as a capital S Self");
  const bg = c("a pure witness, a vast awareness, the background the world appears in");
  const own = c("But the clarity is the appearing's own");
  const end = c("Clear, knowing and empty, with no one knowing it, and no ground beneath it");
  return (
    <AbsoluteFill>
      <Title at={cl} color={GOLD}>the clarity</Title>
      <Items items={[
        ["Every appearing is clear: seen, heard, known", 960, 200, <Wd c={CHALK} s={30}>seen · heard · known</Wd>],
        ["what the tradition calls the nature of mind", 960, 260, <Wd c={DIM} s={26}>the nature of mind: its luminous clarity</Wd>],
      ]} />
      <At x={960} y={460} o={ramp(t, cl + 0.4, 0.7)}><Appearing size={200} /></At>
      <At x={480} y={420} s={pop(t, fps, me)}><SK c={ROSE} s={30} strikeAt={self - 0.4}>me, the one who sees</SK></At>
      <At x={1440} y={420} s={pop(t, fps, self)}><SK c={VIOLET} s={36} strikeAt={own + 0.4}>Self</SK></At>
      {["a pure witness", "a vast awareness", "the background"].map((w, i) => (
        <At key={w} x={1440} y={510 + i * 70} o={ramp(t, bg + i * 0.7, 0.4)}><SK c={DIM} s={24} strikeAt={own + 0.8 + i * 0.3}>{w}</SK></At>
      ))}
      <Items items={[
        ["It is not a light shining from behind", 960, 640, <Wd c={CHALK} s={28}>the appearing's own: no light from behind</Wd>],
        ["looked for, it is not found apart from what appears", 960, 700, <Wd c={DIM} s={26}>not found apart from what appears</Wd>],
      ]} />
      <At x={960} y={790} o={ramp(t, end, 0.5)}><Wd c={GOLD} s={32} serif>clear, knowing, empty: no one knowing it, no ground</Wd></At>
    </AbsoluteFill>
  );
};

const MeetScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const meet = c("So the taste and the logic meet here");
  const taste = c("Direct taste meets the appearing as vivid, clear and knowing");
  const logic = c("The logic meets the same appearing and finds nothing standing on its own");
  const notTwo = c("These are not two things");
  const merge = ramp(t, notTwo, 1);
  return (
    <AbsoluteFill>
      <Title at={meet}>the taste and the logic meet</Title>
      <At x={960} y={460} o={ramp(t, meet + 0.4, 0.6)}><Appearing size={200} /></At>
      <At x={460 + 260 * merge} y={460} o={ramp(t, taste, 0.5) * (1 - merge * 0.7)}><K c={GOLD} s={30}>the taste</K></At>
      <At x={1460 - 260 * merge} y={460} o={ramp(t, logic, 0.5) * (1 - merge * 0.7)}><K c={TEAL} s={30}>the logic</K></At>
      <Items items={[
        ["Direct taste meets the appearing as vivid, clear and knowing", 460, 540, <Wd c={GOLD} s={24}>vivid · clear · knowing</Wd>, { until: "These are not two things" }],
        ["In seeing, just the seen", 460, 600, <Wd c={CHALK} s={26} serif>in seeing, just the seen</Wd>, { until: "These are not two things" }],
        ["The logic meets the same appearing and finds nothing standing on its own", 1460, 540, <Wd c={TEAL} s={24}>nothing on its own</Wd>, { d: 1, until: "These are not two things" }],
        ["The logic says it is empty", 1460, 600, <Wd c={TEAL} s={30} serif>empty</Wd>, { until: "These are not two things" }],
        ["The taste says it is luminous", 460, 660, <Wd c={GOLD} s={30} serif>luminous</Wd>, { until: "These are not two things" }],
        ["These are not two things", 960, 690, <Wd c={CHALK} s={36} serif>not two</Wd>],
        ["and neither is a ground beneath the other", 960, 770, <Wd c={DIM} s={28}>neither a ground beneath the other</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const WhatScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("When you look at any phenomenon, what it actually is, is just this");
  const prop = c("Not a property it has");
  return (
    <AbsoluteFill>
      <Title at={w}>what a phenomenon is</Title>
      <At x={960} y={400} o={ramp(t, w + 0.4, 0.6)}><Appearing size={180} /></At>
      <At x={560} y={400} s={pop(t, fps, c("Its being not found"))}><K c={VIOLET} s={30}>not found</K></At>
      <At x={1360} y={400} s={pop(t, fps, c("and its arising in dependence"))}><K c={TEAL} s={30}>arising in dependence</K></At>
      <At x={960} y={600} o={ramp(t, prop, 0.4)}><SK c={DIM} s={28} strikeAt={prop + 1}>a property it has</SK></At>
      <At x={960} y={720} o={ramp(t, c("What it is"), 0.5)}><Wd c={GOLD} s={44} serif>what it is</Wd></At>
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hear = c("Hear a sound");
  const left = c("Is there a sound left over, apart from those");
  const cl = c("Then notice the clarity");
  const behind = c("Is the knowing behind the scene");
  const scene = c("Or is it just the scene, bright and clear");
  return (
    <AbsoluteFill>
      <Title at={c("Try it now")} color={GOLD}>try it</Title>
      <At x={560} y={400} o={ramp(t, hear, 0.5) * (1 - ramp(t, cl, 0.5) * 0.5)}><SoundRings at={hear} size={240} /></At>
      <Items items={[
        ["Notice it is already this sound, picked out, before any word", 560, 590, <Wd c={GOLD} s={28}>already “this sound”, before any word</Wd>],
        ["Notice what it stands out against, and what it comes with", 560, 650, <Wd c={TEAL} s={24}>what it stands out against, what it comes with</Wd>],
      ]} />
      <At x={560} y={730} o={ramp(t, left, 0.4)}><SK c={DIM} s={24} strikeAt={left + 1.8}>a sound left over</SK></At>
      <At x={1380} y={400} o={ramp(t, cl, 0.6)}><Appearing size={170} /></At>
      <Items items={[
        ["Everything is already known, without effort", 1380, 560, <Wd c={CHALK} s={26}>already known, without effort</Wd>],
      ]} />
      <At x={1380} y={640} o={ramp(t, behind, 0.4)}><SK c={DIM} s={24} strikeAt={scene + 0.4}>a knowing behind the scene</SK></At>
      <At x={1380} y={730} o={ramp(t, scene, 0.5)}><Wd c={GOLD} s={30} serif>just the scene, bright and clear</Wd></At>
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const v = c("Vivid, singled out, dependent");
  const e = c("And by appearing, already empty");
  return (
    <AbsoluteFill>
      <At x={960} y={380} o={ramp(t, v - 0.3, 0.6)}><Appearing size={230} /></At>
      <At x={960} y={620} o={ramp(t, v - 0.2, 0.3)}><Reveal text="Vivid, singled out, dependent." at={v} size={52} color={GOLD} speed={0.04} /></At>
      <At x={960} y={720} o={ramp(t, e - 0.2, 0.3)}><Reveal text="And by appearing, already empty." at={e} size={52} color={TEAL} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Listen to a sound nearby", "vivid", <SoundScene />],
    ["Every step of the logic looks at something", "open", <TopicsScene />],
    ["So first, what is a phenomenon", "search", <DefineScene />],
    ["The tradition sorts them in two", "web", <KindsScene />],
    ["The word comes from a root meaning to hold", "doubt", <HoldScene />],
    ["Nagarjuna turned the search on the dharmas themselves", "search", <NagaScene />],
    ["This is what after anatta means", "whole", <AfterScene />],
    ["So the self is dharmas", "vivid", <OneScene />],
    ["Now the second point, and it is easy to miss", "doubt", <LayersScene />],
    ["How can that be", "open", <SingleScene />],
    ["And singling out is already dependence", "web", <GroundScene />],
    ["So singling out is not something done to an appearance that was there first", "search", <ChainScene />],
    ["None of this makes the world thin", "sea", <MirrorScene />],
    ["Then the clarity", "vivid", <ClarityScene />],
    ["So the taste and the logic meet here", "whole", <MeetScene />],
    ["When you look at any phenomenon, what it actually is, is just this", "open", <WhatScene />],
    ["Try it now", "vivid", <TryScene />],
    ["Vivid, singled out, dependent", "whole", <EndScene />],
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

