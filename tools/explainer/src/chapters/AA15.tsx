// After Anatta · The Logic: Neither Carried Nor Cut (thusness-website after-anatta/continuity.html, aa-continuity).
// Arc: six streams at once, felt as one someone -> the question: if nothing is carried, is all cut off? -> carried and
// cut share one root (a thing with its own being) -> MMK 18.10 -> closer than outside images: the six streams, each
// with its conditions -> their coordinated unity (the cup of tea) -> the mind abstracts one consciousness; Sati; fire
// named by its fuel -> the carrier comes from habit -> seeing gives way to hearing: not the same, not different -> in
// real time each instant is complete -> lined up in time, neither same nor different IS the continuity; the river banks
// and the bridge; blue meets red -> the same knot as the apple; clarity never missing -> one stroke and the sequence:
// Nagarjuna, Dzogchen, Dogen, each with its guard -> sleep -> death -> "no carrier" is not "nothing goes on" -> try it.
// Stance: no carrier, pure awareness, ground or gap is ever drawn as found; they appear only to be struck. The six
// streams stay vivid. "Timeless" is never drawn as a place or container.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // opening
  "You are seeing these words", "Somewhere a sound is going on", "Your body is resting on something", "A thought passes",
  "Six streams, all at once", "feels like one life, lived by one someone",
  "Here is the question", "If no self is carried from this moment to the next, is everything cut off",
  "do I simply end", "This is After Anatta",
  // one root
  "The fear of being cut off sounds like the opposite of clinging to a self", "It clings to the same self",
  "Something can be cut off only if it was there from its own side first", "still needs an",
  "share one root", "A thing with a being of its own", "which either goes on for ever", "or is destroyed",
  // 18.10
  "Nāgārjuna answers both with one reason",
  "Whatever comes to be in dependence on something is not that very thing",
  "and it is not other than it either", "So it is neither cut off nor permanent",
  // closer
  "Most explanations reach for outside images here", "A seed and its plant", "One flame lighting another",
  "they are watched from outside", "where this can be felt directly", "right now",
  // six streams
  "There is seeing", "There is hearing", "There is smelling and tasting", "There is touching", "And there is thinking",
  "The Buddha counted these as six kinds of consciousness", "each one arises with its own conditions",
  "Dependent on the eye and forms", "Seeing arises with eye and colour",
  "Hearing arises with ear and sound", "Thinking arises with mind and what is thought", "Each stream is fully itself",
  "Seeing does not hear", "Hearing does not see", "No smell has ever been heard",
  // unity
  "And yet these six do not feel like six strangers", "You see the cup", "You reach for it",
  "You feel its warmth, smell the tea, taste it", "You hear the small sound as you set it down", "that's better",
  "Seeing guides the hand", "It all hangs together so smoothly that it feels like one someone",
  "In refined practice it feels like something subtler still", "A pure awareness, the same in all six",
  // abstraction
  "Here, almost without fail, the substantialist mind makes one move", "pulls out of them a single consciousness",
  "runs from one sense to the next", "The thread that joins them",
  "The Buddha met this view in a monk named", "it is this very same consciousness that roams and transmigrates",
  "He posited consciousness itself as the carrier", "The Buddha corrected him", "Consciousness is dependently arisen",
  "Without its conditions, there is no consciousness", "the way a fire is named by its fuel",
  "A fire burning logs is a log fire", "A fire burning grass is a grass fire", "Seeing is",
  "Hearing is", "There is no consciousness as such, moving from fuel to fuel",
  // habit
  "And notice where the carrier comes from", "Not from looking", "Look, and no carrier is found",
  "It comes from habit", "The long tendencies of the inherent framework",
  "So the mind supplies something, a self or a pure awareness",
  // transition
  "Now look at the moment seeing gives way to hearing", "Attention turns to it",
  "Is the hearing the same as the seeing", "Nothing travelled across", "So it is not the same", "Nothing was carried",
  "Is the hearing cut off from the seeing, unrelated to it", "The streams are woven together",
  "So it is not different either", "Nothing was cut",
  "Neither same nor different", "Neither carried nor cut", "You can watch it happen, many times a minute",
  // real time
  "But first, look at what is actually happening", "In real time there has never been a carrier",
  "Each instant is complete", "The seeing is wholly seeing", "The sound is wholly sound",
  "Nothing is missing that a carrier would have to supply",
  "Complete does not mean sealed off", "So there is nothing to bridge",
  "The question, what carries me from this to the next, does not come up in the instant",
  "lines the instants up one after another in time",
  // the continuity
  "And when we do line them up", "this is how the line is rightly described",
  "And here is the key", "That is not a description of a gap that continuity has to cross", "It is the continuity",
  "is the whole of what we have always called going on",
  "The substantialist mind cannot picture this", "it pictures two banks of a river with a gap between them",
  "what crosses the gap", "It looks for a carrier to bridge the transition", "Finding none, it concludes",
  "But the two banks were never standing on their own", "So no bridge is needed, and no one has to cross",
  "what carries blue across to red",
  // the knot
  "The same knot is at work in holding an apple", "A habit of the mind ties them into one solid apple out there",
  "The self is tied the same way", "tied into one solid someone in here", "a subtler knot often remains",
  "A pure, featureless awareness, set behind the six as their ground",
  "The answer is not to throw clarity away", "Clarity is never missing", "The error is pulling it out of the streams",
  "Untie the knot, and nothing is lost", "owned by no one",
  // one stroke
  "Without the time framework, there is no sequence to describe", "What is here is one complete stroke",
  "Timeless, total, immediate and complete", "Line it up in time",
  "These are not two worlds", "They are one appearing, seen without the framework, and seen with it",
  // traditions
  "Three traditions say this, each in its own way", "says time is not found apart from what changes",
  "If not a single thing is found, how will there be time", "Dzogchen calls itself the Great Completeness",
  "Nothing lacking, nothing to add", "a fourth time beyond past, present and future",
  "says each moment is the whole of time", "Firewood abides in its own place", "yet cut off from both",
  "Ash does not turn back into firewood", "And still, he says, time passes",
  "Each needs one guard", "Timeless does not mean a timeless reality behind appearances",
  "That would be a new ground", "is not a pure awareness behind the six streams", "It is the six streams themselves",
  "means that nothing carries the moments", "It does not mean that something is destroyed between them",
  // sleep
  "So what of sleep", "In deep sleep the streams go quiet", "That is the cut, sneaking back in",
  "All night the heart beat and the breath went on", "learning settled", "In the morning you know your name",
  "None of it was carried through the night by a passenger", "None of it was cut off",
  "Naming does not make continuity, and the absence of naming does not break it",
  // death
  "And what of death", "Nothing is carried", "No soul, no subtle self, no pure consciousness",
  "And nothing is cut", "Actions bear their fruit", "The habits of a life give rise to what comes next",
  "Rebirth and karma are affirmed", "Emptiness does not explain them away",
  "it only shows that the carrier and the cut were never found",
  "So, will I continue after death", "the same I goes on", "I simply end",
  "What follows depends on what is now", "It is not the same, and it is not other",
  // no carrier
  "When the teaching says there is no carrier", "a carrier standing by itself",
  "and therefore nothing goes on", "The habit adds that", "So say both halves, every time",
  "Nothing is carried over, and nothing is cut off",
  // try it
  "Try it now", "Just this instant", "Nothing missing from it, nothing waiting to be carried",
  "Then let it go on", "At each change, ask", "Did anything travel across", "Is this one cut off from the last",
  "Then notice the question that wants to come", "Who goes from one to the next", "Do not answer it",
  "It is looking for a bridge", "and the streams are going on perfectly well without one",
  // end
  "Seeing. Hearing. A thought", "Each complete", "None carried", "None cut",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
};

// the six streams: name, colour, conditions
const SIX: [string, string, string][] = [
  ["seeing", ICE, "eye + colour"], ["hearing", TEAL, "ear + sound"], ["smelling", GREEN, "nose + scent"],
  ["tasting", ROSE, "tongue + flavour"], ["touching", WARM, "body + touch"], ["thinking", VIOLET, "mind + thought"],
];

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
/** A chip struck through at `strikeAt`: only for what is never found (a carrier, a pure awareness, a gap, a ground). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

/** A stream: a glowing dot of its own colour, gently pulsing (each instant complete). */
const Dot: React.FC<{ color: string; size?: number; phase?: number }> = ({ color, size = 70, phase = 0 }) => {
  const { t } = useT();
  const b = 1 + 0.05 * Math.sin(t * 2.2 + phase);
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", transform: `scale(${b})`,
      background: `radial-gradient(circle at 40% 35%, #FFFFFFee, ${color} 55%, ${color}33)`,
      boxShadow: `0 0 26px ${color}, 0 0 54px ${color}88` }} />
  );
};

/** Six streams in a ring around (cx, cy); `tie` (0..1) draws knot lines to the centre, `untie` lets go. */
const SixRing: React.FC<{ cx: number; cy: number; r: number; o: number; tie?: number; untie?: number; labels?: boolean }> =
  ({ cx, cy, r, o, tie = 0, untie = 0, labels = true }) => {
    const pts = SIX.map((_, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / 6;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number];
    });
    return (
      <>
        <Svg style={{ opacity: o }}>
          {pts.map(([x, y], i) => (
            <path key={i} d={`M${x} ${y} L${cx} ${cy}`} stroke={WARM} strokeWidth={4} fill="none"
              strokeDasharray="1000" strokeDashoffset={1000 * (1 - tie)} opacity={0.8 * (1 - untie)} />
          ))}
          <circle cx={cx} cy={cy} r={18 * tie * (1 - untie)} fill={WARM} opacity={0.9 * (1 - untie)} />
        </Svg>
        {pts.map(([x, y], i) => (
          <At key={i} x={x} y={y} o={o}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Dot color={SIX[i][1]} size={64} phase={i} />
              {labels && <Glow color={SIX[i][1]} size={26}>{SIX[i][0]}</Glow>}
            </div>
          </At>
        ))}
      </>
    );
  };

/** Two river banks with a gap; `bridge` draws a dashed bridge; `melt` (0..1) dissolves the banks' hard edges. */
const Banks: React.FC<{ bridge: number; melt: number; o: number }> = ({ bridge, melt, o }) => (
  <svg width={1100} height={300} viewBox="0 0 1100 300" style={{ overflow: "visible", opacity: o }}>
    <rect x={40} y={120} width={360} height={140} rx={10} fill={`${ICE}${melt > 0.5 ? "10" : "22"}`} stroke={ICE} strokeWidth={5}
      strokeDasharray={melt > 0 ? `${18 * (1 - melt) + 2} ${20 * melt}` : undefined} />
    <rect x={700} y={120} width={360} height={140} rx={10} fill={`${TEAL}${melt > 0.5 ? "10" : "22"}`} stroke={TEAL} strokeWidth={5}
      strokeDasharray={melt > 0 ? `${18 * (1 - melt) + 2} ${20 * melt}` : undefined} />
    <path d="M400 230 Q550 270 700 230" stroke={ICE} strokeWidth={3} fill="none" opacity={0.4 * (1 - melt)} />
    <DrawPath d="M400 150 Q550 60 700 150" p={bridge} color={WARM} width={6} len={420} />
  </svg>
);

/** A row of instants (dots) laid out in time; `p` reveals them left to right. */
const Row: React.FC<{ p: number; n?: number; w?: number }> = ({ p, n = 7, w = 1200 }) => (
  <div style={{ position: "relative", width: w, height: 120 }}>
    <div style={{ position: "absolute", left: 0, right: 0, top: 58, height: 3, background: `${DIM}`, opacity: 0.5 * p }} />
    {Array.from({ length: n }).map((_, i) => {
      const q = Math.min(1, Math.max(0, p * n - i));
      return (
        <div key={i} style={{ position: "absolute", left: (i * w) / (n - 1) - 30, top: 30, opacity: q }}>
          <Dot color={SIX[i % 6][1]} size={60} phase={i} />
        </div>
      );
    })}
  </div>
);

/** A cup of tea. */
const Cup: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${GOLD}88)` }}>
    <path d="M40 80 L160 80 L148 170 Q100 186 52 170 Z" fill="rgba(228,194,122,0.18)" stroke={GOLD} strokeWidth={6} strokeLinejoin="round" />
    <path d="M160 100 C192 100 192 146 152 146" fill="none" stroke={GOLD} strokeWidth={6} />
    <path d="M80 60 C70 46 92 36 82 20 M112 60 C102 46 124 36 114 20" fill="none" stroke={CHALK} strokeWidth={4} opacity={0.6} strokeLinecap="round" />
  </svg>
);

/** A fire on its fuel (logs or grass). */
const Fire: React.FC<{ grass?: boolean }> = ({ grass }) => {
  const { t } = useT();
  const f = 1 + 0.06 * Math.sin(t * 9 + (grass ? 1 : 0));
  return (
    <svg width={180} height={200} viewBox="0 0 180 200" style={{ overflow: "visible" }}>
      <g transform={`translate(90 110) scale(${f}) translate(-90 -110)`}>
        <path d="M90 20 C120 70 130 100 118 130 C108 150 72 150 62 130 C50 100 60 70 90 20 Z" fill="rgba(255,122,89,0.45)" stroke={WARM} strokeWidth={5} style={{ filter: `drop-shadow(0 0 16px ${WARM})` }} />
      </g>
      {grass
        ? <path d="M40 180 L55 140 M70 180 L75 135 M100 180 L105 138 M130 180 L140 142" stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
        : <><rect x={30} y={150} width={120} height={20} rx={8} fill="rgba(255,122,89,0.15)" stroke={WARM} strokeWidth={4} transform="rotate(-8 90 160)" />
            <rect x={30} y={160} width={120} height={20} rx={8} fill="rgba(255,122,89,0.15)" stroke={WARM} strokeWidth={4} transform="rotate(8 90 170)" /></>}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const six = c("Six streams, all at once");
  const q = c("Here is the question");
  const aa = c("This is After Anatta");
  const one = ramp(t, c("feels like one life, lived by one someone"), 1.2);
  return (
    <AbsoluteFill>
      <Items items={[
        ["You are seeing these words", 520, 220, <K c={ICE}>seeing</K>, { until: "Six streams, all at once" }],
        ["Somewhere a sound is going on", 1400, 220, <K c={TEAL}>hearing</K>, { until: "Six streams, all at once" }],
        ["Your body is resting on something", 520, 520, <K c={WARM}>touching</K>, { until: "Six streams, all at once" }],
        ["A thought passes", 1400, 520, <K c={VIOLET}>thinking</K>, { until: "Six streams, all at once" }],
        ["feels like one life, lived by one someone", 960, 120, <Wd c={CHALK} s={34} serif>…and it feels like one someone</Wd>, { until: "Here is the question" }],
        ["If no self is carried from this moment to the next, is everything cut off", 960, 300, <Wd c={GOLD} s={46} serif>if nothing is carried, is everything cut off?</Wd>, { until: "This is After Anatta" }],
        ["do I simply end", 960, 420, <Wd c={DIM} s={34}>at death, do I simply end?</Wd>, { until: "This is After Anatta" }],
      ]} />
      <SixRing cx={960} cy={440} r={230} o={ramp(t, six, 0.8) * (1 - ramp(t, q, 0.6))} tie={0.35 * one} />
      <At x={960} y={430} o={ramp(t, aa, 0.5)}><Glow color={CHALK} size={52} serif>After Anatta · The Logic</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5)}><Glow color={DIM} size={28}>notes by John Tan (Thusness)</Glow></At>
    </AbsoluteFill>
  );
};

const RootScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The fear of being cut off sounds like the opposite of clinging to a self", 960, 140, <Wd c={DIM} s={32}>the fear of being cut off…</Wd>],
        ["It clings to the same self", 960, 210, <Wd c={CHALK} s={36} serif>…clings to the same self</Wd>],
        ["Something can be cut off only if it was there from its own side first", 960, 320, <Wd c={CHALK} s={32}>to be cut off, it must first be there from its own side</Wd>],
        ["still needs an", 960, 390, <K c={WARM}>"it ends" still needs an "it"</K>],
        ["which either goes on for ever", 600, 520, <K c={ICE}>carried: goes on for ever</K>],
        ["or is destroyed", 1320, 520, <K c={ROSE}>cut: destroyed</K>],
        ["share one root", 960, 640, <SK strikeAt={c("Nāgārjuna answers both with one reason") - 0.6} c={DIM} s={32}>one root: a thing with its own being</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Nāgārjuna answers both with one reason", 960, 160, <Wd c={DIM} s={32}>Nāgārjuna · one reason for both</Wd>],
      ]} />
      <At x={960} y={330}><Reveal text="not that very thing," at={c("Whatever comes to be in dependence on something is not that very thing")} size={56} color={ICE} speed={0.03} /></At>
      <At x={960} y={430}><Reveal text="not other than it either:" at={c("and it is not other than it either")} size={56} color={TEAL} speed={0.03} /></At>
      <At x={960} y={560}><Reveal text="neither cut off nor permanent" at={c("So it is neither cut off nor permanent")} size={62} color={GOLD} speed={0.03} /></At>
    </AbsoluteFill>
  );
};

const CloserScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["A seed and its plant", 640, 300, <K c={GREEN}>a seed and its plant</K>, { until: "where this can be felt directly" }],
      ["One flame lighting another", 1280, 300, <K c={WARM}>one flame lights another</K>, { until: "where this can be felt directly" }],
      ["they are watched from outside", 960, 420, <Wd c={DIM} s={32}>watched from outside</Wd>, { until: "where this can be felt directly" }],
      ["where this can be felt directly", 960, 380, <Wd c={GOLD} s={48} serif>felt directly</Wd>],
      ["right now", 960, 470, <Wd c={CHALK} s={34}>your own seeing, hearing and thinking, now</Wd>],
    ]} />
  </AbsoluteFill>
);

const StreamsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cues = ["There is seeing", "There is hearing", "There is smelling and tasting", "There is smelling and tasting", "There is touching", "And there is thinking"];
  const cond = c("each one arises with its own conditions");
  return (
    <AbsoluteFill>
      {SIX.map(([name, col, cd], i) => (
        <React.Fragment key={i}>
          <At x={260 + i * 280} y={330} o={ramp(t, c(cues[i]) + (i === 3 ? 0.8 : 0), 0.5)}><Dot color={col} size={84} phase={i} /></At>
          <At x={260 + i * 280} y={430} o={ramp(t, c(cues[i]) + (i === 3 ? 0.8 : 0), 0.5)}><Glow color={col} size={30}>{name}</Glow></At>
          <At x={260 + i * 280} y={200} o={ramp(t, cond + i * 0.4, 0.5)}><Glow color={DIM} size={24}>{cd}</Glow></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["The Buddha counted these as six kinds of consciousness", 960, 100, <Wd c={CHALK} s={32} serif>six kinds of consciousness</Wd>],
        ["Dependent on the eye and forms", 960, 560, <Wd c={ICE} s={34} serif>eye and forms → eye-consciousness</Wd>, { until: "Each stream is fully itself" }],
        ["Each stream is fully itself", 960, 560, <K c={GOLD} s={32}>each stream is fully itself</K>],
        ["Seeing does not hear", 600, 680, <Wd c={DIM} s={28}>seeing does not hear</Wd>],
        ["Hearing does not see", 960, 680, <Wd c={DIM} s={28}>hearing does not see</Wd>],
        ["No smell has ever been heard", 1320, 680, <Wd c={DIM} s={28}>no smell is heard</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const UnityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cup = c("You see the cup");
  const pure = c("A pure awareness, the same in all six");
  return (
    <AbsoluteFill>
      <At x={960} y={330} o={ramp(t, cup, 0.6) * (1 - ramp(t, c("It all hangs together so smoothly that it feels like one someone"), 0.6))}><Cup size={240} /></At>
      <Items items={[
        ["And yet these six do not feel like six strangers", 960, 110, <Wd c={CHALK} s={34} serif>not six strangers</Wd>],
        ["You see the cup", 520, 560, <K c={ICE}>see</K>, { until: "It all hangs together so smoothly that it feels like one someone" }],
        ["You reach for it", 760, 560, <K c={WARM}>reach</K>, { until: "It all hangs together so smoothly that it feels like one someone" }],
        ["You feel its warmth, smell the tea, taste it", 1000, 560, <K c={GREEN}>warm · smell · taste</K>, { until: "It all hangs together so smoothly that it feels like one someone" }],
        ["You hear the small sound as you set it down", 1320, 560, <K c={TEAL}>hear</K>, { until: "It all hangs together so smoothly that it feels like one someone" }],
        ["that's better", 960, 660, <K c={VIOLET}>"that's better"</K>, { until: "It all hangs together so smoothly that it feels like one someone" }],
        ["It all hangs together so smoothly that it feels like one someone", 960, 340, <SK strikeAt={c("Here, almost without fail, the substantialist mind makes one move") + 30} c={CHALK} s={38}>one someone?</SK>],
        ["A pure awareness, the same in all six", 960, 480, <SK strikeAt={pure + 30} c={GOLD} s={34}>a pure awareness behind all six?</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const AbstractScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pull = ramp(t, c("pulls out of them a single consciousness"), 1.5);
  const sati = c("The Buddha met this view in a monk named");
  const fire = c("the way a fire is named by its fuel");
  const strike = c("There is no consciousness as such, moving from fuel to fuel");
  return (
    <AbsoluteFill>
      {SIX.map(([name, col], i) => (
        <At key={i} x={260 + i * 280} y={260} o={1 - ramp(t, fire, 0.6)}><Dot color={col} size={60} phase={i} /></At>
      ))}
      <At x={960} y={260} o={pull * (1 - ramp(t, fire, 0.6))}>
        <div style={{ width: 1500 * pull, height: 8, borderRadius: 4, background: GOLD, boxShadow: `0 0 18px ${GOLD}` }} />
      </At>
      <Items items={[
        ["Here, almost without fail, the substantialist mind makes one move", 960, 110, <Wd c={DIM} s={32}>the substantialist mind makes one move</Wd>, { until: "the way a fire is named by its fuel" }],
        ["pulls out of them a single consciousness", 960, 380, <K c={GOLD}>one consciousness running through all six</K>, { until: "the way a fire is named by its fuel" }],
        ["The thread that joins them", 960, 460, <Wd c={DIM} s={28}>the thread that joins them</Wd>, { until: "the way a fire is named by its fuel" }],
        ["it is this very same consciousness that roams and transmigrates", 960, 580, <Wd c={CHALK} s={32} serif>Sāti: "this very same consciousness roams on"</Wd>, { until: "the way a fire is named by its fuel" }],
        ["Consciousness is dependently arisen", 960, 680, <K c={TEAL}>consciousness: dependently arisen</K>, { until: "the way a fire is named by its fuel" }],
        ["A fire burning logs is a log fire", 640, 380, <Fire />],
        ["A fire burning logs is a log fire", 640, 530, <Wd c={WARM} s={28}>a log fire</Wd>],
        ["A fire burning grass is a grass fire", 1280, 380, <Fire grass />],
        ["A fire burning grass is a grass fire", 1280, 530, <Wd c={GREEN} s={28}>a grass fire</Wd>],
        ["Seeing is", 640, 620, <K c={ICE}>eye-consciousness</K>],
        ["Hearing is", 1280, 620, <K c={TEAL}>ear-consciousness</K>],
        ["There is no consciousness as such, moving from fuel to fuel", 960, 160, <SK strikeAt={strike + 1.4} c={GOLD} s={32}>consciousness as such, moving from fuel to fuel</SK>],
      ]} />
      <At x={960} y={60} o={ramp(t, sati, 0.5) * (1 - ramp(t, fire, 0.6))}><Glow color={DIM} size={24}>a monk named Sāti</Glow></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["And notice where the carrier comes from", 960, 150, <Wd c={CHALK} s={36} serif>where does the carrier come from?</Wd>],
      ["Look, and no carrier is found", 600, 320, <K c={DIM}>not from looking: none is found</K>],
      ["It comes from habit", 1320, 320, <K c={WARM}>from habit</K>],
      ["The long tendencies of the inherent framework", 960, 450, <Wd c={DIM} s={30}>the tendencies of the inherent framework</Wd>],
      ["So the mind supplies something, a self or a pure awareness", 960, 580, <Wd c={GOLD} s={36} serif>so the mind supplies one, without noticing</Wd>],
    ]} />
  </AbsoluteFill>
);

const TransitionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const weave = ramp(t, c("The streams are woven together"), 1.5);
  const trav = c("Nothing travelled across");
  return (
    <AbsoluteFill>
      <At x={620} y={320}><div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}><Dot color={ICE} size={110} /><Glow color={ICE} size={30}>seeing</Glow></div></At>
      <At x={1300} y={320} o={ramp(t, c("Attention turns to it"), 0.5)}><div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}><Dot color={TEAL} size={110} phase={1} /><Glow color={TEAL} size={30}>hearing</Glow></div></At>
      <Svg>
        <path d="M720 300 C900 200 1020 200 1200 300" stroke={DIM} strokeWidth={4} fill="none" strokeDasharray="10 12"
          opacity={ramp(t, trav, 0.4) * (1 - ramp(t, trav + 1.5, 0.4))} />
        <path d="M700 360 C860 430 1040 250 1220 340" stroke={GOLD} strokeWidth={5} fill="none" strokeDasharray="900" strokeDashoffset={900 * (1 - weave)} />
        <path d="M700 300 C860 230 1040 410 1220 300" stroke={TEAL} strokeWidth={5} fill="none" strokeDasharray="900" strokeDashoffset={900 * (1 - weave)} />
      </Svg>
      <Items items={[
        ["Now look at the moment seeing gives way to hearing", 960, 110, <Wd c={DIM} s={30}>the moment seeing gives way to hearing</Wd>],
        ["So it is not the same", 600, 520, <K c={ICE}>not the same</K>],
        ["Nothing was carried", 600, 600, <Wd c={ICE} s={30}>nothing was carried</Wd>],
        ["So it is not different either", 1320, 520, <K c={TEAL}>not different</K>],
        ["Nothing was cut", 1320, 600, <Wd c={TEAL} s={30}>nothing was cut</Wd>],
        ["Neither same nor different", 960, 720, <Wd c={GOLD} s={40} serif>neither same nor different · neither carried nor cut</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RealTimeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rt = c("In real time there has never been a carrier");
  const line = ramp(t, c("lines the instants up one after another in time"), 2);
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, rt, 0.6) * (1 - 0.7 * line)}><Dot color={GOLD} size={170} /></At>
      <Items items={[
        ["But first, look at what is actually happening", 960, 110, <Wd c={DIM} s={30}>before anything is lined up</Wd>],
        ["In real time there has never been a carrier", 960, 180, <Wd c={CHALK} s={36} serif>in real time: no carrier at all</Wd>],
        ["Each instant is complete", 960, 560, <K c={GOLD} s={34}>each instant is complete</K>, { until: "Complete does not mean sealed off" }],
        ["Nothing is missing that a carrier would have to supply", 960, 640, <Wd c={DIM} s={28}>nothing missing · nothing waiting to be handed on</Wd>, { until: "Complete does not mean sealed off" }],
        ["Complete does not mean sealed off", 960, 560, <K c={TEAL} s={32}>complete, not sealed off</K>],
        ["So there is nothing to bridge", 960, 640, <Wd c={CHALK} s={30}>so there is nothing to bridge</Wd>],
        ["lines the instants up one after another in time", 960, 740, <Wd c={WARM} s={30}>the question comes only when instants are lined up in time</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ContinuityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const row = ramp(t, c("And when we do line them up"), 2.5);
  const banks = c("it pictures two banks of a river with a gap between them");
  const bridge = ramp(t, c("It looks for a carrier to bridge the transition"), 1.2);
  const melt = ramp(t, c("But the two banks were never standing on their own"), 2);
  const blue = c("what carries blue across to red");
  return (
    <AbsoluteFill>
      <At x={960} y={260} o={1 - ramp(t, banks, 0.6)}><Row p={row} /></At>
      <At x={960} y={420} o={ramp(t, banks, 0.6) * (1 - ramp(t, blue, 0.6))}><Banks bridge={bridge * (1 - melt)} melt={melt} o={1} /></At>
      <Items items={[
        ["this is how the line is rightly described", 960, 110, <Wd c={DIM} s={30}>lined up in time, it is rightly described as</Wd>, { until: "The substantialist mind cannot picture this" }],
        ["this is how the line is rightly described", 960, 420, <Wd c={GOLD} s={42} serif>neither same nor different · neither carried nor cut</Wd>, { d: 1, until: "The substantialist mind cannot picture this" }],
        ["It is the continuity", 960, 530, <K c={GOLD} s={40}>this IS the continuity</K>, { until: "The substantialist mind cannot picture this" }],
        ["is the whole of what we have always called going on", 960, 620, <Wd c={CHALK} s={30}>the whole of "going on"</Wd>, { until: "The substantialist mind cannot picture this" }],
        ["what crosses the gap", 960, 130, <Wd c={WARM} s={38} serif>what crosses the gap?</Wd>, { until: "But the two banks were never standing on their own" }],
        ["Finding none, it concludes", 960, 690, <Wd c={DIM} s={28}>"then I am cut off every moment"</Wd>, { until: "But the two banks were never standing on their own" }],
        ["So no bridge is needed, and no one has to cross", 960, 690, <Wd c={CHALK} s={32}>no gap · no bridge · no one to cross</Wd>, { until: "what carries blue across to red" }],
      ]} />
      <At x={820} y={420} o={ramp(t, blue, 0.6)}><div style={{ width: 300, height: 220, background: `linear-gradient(90deg, ${ICE}, #4a6fd6)`, borderRadius: "12px 0 0 12px" }} /></At>
      <At x={1100} y={420} o={ramp(t, blue, 0.6)}><div style={{ width: 260, height: 220, background: `linear-gradient(90deg, #d6455f, ${ROSE})`, borderRadius: "0 12px 12px 0" }} /></At>
      <At x={960} y={620} o={ramp(t, blue + 0.6, 0.5)}><Glow color={DIM} size={28}>what carries blue across to red?</Glow></At>
    </AbsoluteFill>
  );
};

const KnotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tie = ramp(t, c("The self is tied the same way"), 1.5);
  const untie = ramp(t, c("Untie the knot, and nothing is lost"), 1.5);
  const sub = c("a subtler knot often remains");
  return (
    <AbsoluteFill>
      <SixRing cx={960} cy={420} r={250} o={ramp(t, c("The self is tied the same way"), 0.6)} tie={tie} untie={untie} />
      <Items items={[
        ["The same knot is at work in holding an apple", 960, 100, <Wd c={DIM} s={30}>the same knot as in holding an apple</Wd>],
        ["tied into one solid someone in here", 960, 420, <K c={WARM} s={30}>one solid someone in here</K>, { until: "a subtler knot often remains" }],
        ["A pure, featureless awareness, set behind the six as their ground", 960, 420, <SK strikeAt={c("The answer is not to throw clarity away") - 0.5} c={GOLD} s={28}>a pure awareness behind the six</SK>, { until: "Clarity is never missing" }],
        ["Clarity is never missing", 960, 760, <Wd c={GOLD} s={36} serif>clarity is never missing; the error is pulling it out</Wd>, { until: "Untie the knot, and nothing is lost" }],
        ["owned by no one", 960, 760, <Wd c={CHALK} s={36} serif>as vivid as before, owned by no one</Wd>],
      ]} />
      <At x={960} y={160} o={ramp(t, sub, 0.5) * (1 - ramp(t, c("Clarity is never missing"), 0.5))}><Glow color={DIM} size={26}>and a subtler knot</Glow></At>
    </AbsoluteFill>
  );
};

const StrokeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = c("What is here is one complete stroke");
  const row = ramp(t, c("Line it up in time"), 2);
  return (
    <AbsoluteFill>
      <At x={560} y={380} o={ramp(t, one, 0.6)}><Dot color={GOLD} size={200} /></At>
      <At x={1340} y={380} o={row}><div style={{ transform: "scale(0.55)" }}><Row p={row} /></div></At>
      <Items items={[
        ["Without the time framework, there is no sequence to describe", 960, 110, <Wd c={DIM} s={30}>without the time framework</Wd>],
        ["Timeless, total, immediate and complete", 560, 560, <Wd c={GOLD} s={32} serif>one complete stroke</Wd>],
        ["Timeless, total, immediate and complete", 560, 620, <Wd c={DIM} s={26}>timeless · total · immediate · complete</Wd>, { d: 0.8 }],
        ["Line it up in time", 1340, 560, <Wd c={TEAL} s={30} serif>lined up in time</Wd>],
        ["Line it up in time", 1340, 620, <Wd c={DIM} s={26}>neither same nor different</Wd>, { d: 0.8 }],
        ["These are not two worlds", 960, 740, <K c={CHALK} s={32}>not two worlds: one appearing, seen two ways</K>],
      ]} />
    </AbsoluteFill>
  );
};

const TraditionsScene: React.FC = () => {
  const c = useCue();
  const g = c("Each needs one guard");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Three traditions say this, each in its own way", 960, 100, <Wd c={DIM} s={30}>three traditions</Wd>],
        ["says time is not found apart from what changes", 400, 200, <K c={ICE} s={32}>Nāgārjuna</K>],
        ["says time is not found apart from what changes", 400, 290, <Wd c={CHALK} s={26}>time not found apart from things</Wd>, { d: 0.8 }],
        ["Dzogchen calls itself the Great Completeness", 960, 200, <K c={GOLD} s={32}>Dzogchen</K>],
        ["Dzogchen calls itself the Great Completeness", 960, 290, <Wd c={CHALK} s={26}>the Great Completeness</Wd>, { d: 0.8 }],
        ["a fourth time beyond past, present and future", 960, 350, <Wd c={DIM} s={24}>a fourth time</Wd>],
        ["says each moment is the whole of time", 1520, 200, <K c={TEAL} s={32}>Dōgen</K>],
        ["says each moment is the whole of time", 1520, 290, <Wd c={CHALK} s={26}>each moment, the whole of time</Wd>, { d: 0.8 }],
        ["Ash does not turn back into firewood", 1520, 350, <Wd c={DIM} s={24}>firewood · ash</Wd>],
        ["And still, he says, time passes", 1520, 410, <Wd c={DIM} s={24}>and time passes</Wd>],
        ["Timeless does not mean a timeless reality behind appearances", 400, 560, <SK strikeAt={c("That would be a new ground") + 0.4} c={DIM} s={26}>a timeless reality behind</SK>],
        ["is not a pure awareness behind the six streams", 960, 560, <SK strikeAt={c("It is the six streams themselves")} c={DIM} s={26}>awareness behind the six</SK>],
        ["It is the six streams themselves", 960, 640, <Wd c={GOLD} s={26}>the six streams themselves</Wd>],
        ["It does not mean that something is destroyed between them", 1520, 560, <SK strikeAt={c("It does not mean that something is destroyed between them") + 1.6} c={DIM} s={26}>destroyed between moments</SK>],
        ["means that nothing carries the moments", 1520, 640, <Wd c={TEAL} s={26}>nothing carries the moments</Wd>],
      ]} />
      <Items items={[["Each needs one guard", 960, 480, <Wd c={WARM} s={30}>each needs one guard</Wd>]]} />
      {g < 0 && null}
    </AbsoluteFill>
  );
};

const SleepScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["So what of sleep", 960, 110, <Wd c={CHALK} s={36} serif>sleep</Wd>],
        ["That is the cut, sneaking back in", 960, 220, <SK strikeAt={c("All night the heart beat and the breath went on")} c={DIM} s={30}>"for those hours nothing went on"</SK>],
        ["All night the heart beat and the breath went on", 960, 340, <K c={ROSE}>heart · breath · learning settling</K>],
        ["In the morning you know your name", 960, 430, <Wd c={CHALK} s={30}>morning: your name, the friend to call</Wd>],
        ["None of it was carried through the night by a passenger", 640, 560, <K c={ICE}>no passenger</K>],
        ["None of it was cut off", 1280, 560, <K c={TEAL}>no gap</K>],
        ["Naming does not make continuity, and the absence of naming does not break it", 960, 690, <Wd c={GOLD} s={32} serif>naming does not make it · its absence does not break it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DeathScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["And what of death", 960, 110, <Wd c={CHALK} s={36} serif>death</Wd>],
        ["No soul, no subtle self, no pure consciousness", 600, 240, <SK strikeAt={c("And nothing is cut") - 0.4} c={DIM} s={28}>a soul · a pure consciousness moves on</SK>],
        ["Nothing is carried", 600, 330, <K c={ICE}>nothing carried</K>],
        ["And nothing is cut", 1320, 330, <K c={TEAL}>nothing cut</K>],
        ["Actions bear their fruit", 1320, 240, <Wd c={CHALK} s={28}>actions bear their fruit</Wd>],
        ["Rebirth and karma are affirmed", 960, 450, <Wd c={DIM} s={28}>rebirth and karma, affirmed as the world speaks</Wd>],
        ["the same I goes on", 600, 580, <SK strikeAt={c("I simply end") + 0.6} c={DIM} s={28}>the same I goes on</SK>],
        ["I simply end", 1320, 580, <SK strikeAt={c("What follows depends on what is now") - 0.2} c={DIM} s={28}>I simply end</SK>],
        ["What follows depends on what is now", 960, 700, <Wd c={GOLD} s={36} serif>what follows depends on what is now</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const HalvesScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["When the teaching says there is no carrier", 960, 150, <K c={CHALK} s={32}>"there is no carrier"</K>],
        ["a carrier standing by itself", 960, 240, <Wd c={DIM} s={28}>denies only a carrier standing by itself</Wd>],
        ["and therefore nothing goes on", 960, 360, <SK strikeAt={c("The habit adds that") + 0.3} c={WARM} s={30}>"…so nothing goes on"</SK>],
        ["The habit adds that", 960, 440, <Wd c={DIM} s={26}>the habit adds that</Wd>],
        ["Nothing is carried over, and nothing is cut off", 960, 600, <Wd c={GOLD} s={42} serif>nothing carried over · nothing cut off</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const inst = c("Just this instant");
  const go = c("Then let it go on");
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, inst, 0.6) * (1 - ramp(t, go, 0.6))}><Dot color={GOLD} size={150} /></At>
      <At x={960} y={360} o={ramp(t, go, 0.8)}><Row p={ramp(t, go, 4)} n={6} w={1100} /></At>
      <Items items={[
        ["Try it now", 960, 110, <Wd c={CHALK} s={36} serif>try it</Wd>],
        ["Nothing missing from it, nothing waiting to be carried", 960, 520, <Wd c={DIM} s={28}>nothing missing · nothing waiting to be carried</Wd>, { until: "Then let it go on" }],
        ["Did anything travel across", 640, 520, <K c={ICE}>did anything travel across?</K>, { until: "Then notice the question that wants to come" }],
        ["Is this one cut off from the last", 1280, 520, <K c={TEAL}>is this one cut off?</K>, { until: "Then notice the question that wants to come" }],
        ["Who goes from one to the next", 960, 540, <Wd c={WARM} s={34} serif>who goes from one to the next?</Wd>],
        ["It is looking for a bridge", 960, 640, <Wd c={DIM} s={28}>it is looking for a bridge</Wd>],
        ["and the streams are going on perfectly well without one", 960, 710, <Wd c={CHALK} s={30}>the streams go on perfectly well without one</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const L: [string, string, string][] = [
    ["Seeing. Hearing. A thought", "Seeing. Hearing. A thought.", CHALK],
    ["Each complete", "Each complete.", GOLD],
    ["None carried", "None carried. None cut.", GOLD],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={280} o={ramp(t, c("Seeing. Hearing. A thought"), 0.8)}><SixRing cx={0} cy={0} r={0} o={0} /></At>
      {L.map(([cue, text, col], i) => (
        <At key={i} x={960} y={330 + i * 110} o={ramp(t, c(cue) - 0.2, 0.3)}><Reveal text={text} at={c(cue)} size={i ? 54 : 48} color={col} speed={0.035} /></At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["You are seeing these words", "dusk", <OpenScene />],
    ["The fear of being cut off sounds like the opposite of clinging to a self", "doubt", <RootScene />],
    ["Nāgārjuna answers both with one reason", "light", <VerseScene />],
    ["Most explanations reach for outside images here", "search", <CloserScene />],
    ["There is seeing", "whole", <StreamsScene />],
    ["And yet these six do not feel like six strangers", "light", <UnityScene />],
    ["Here, almost without fail, the substantialist mind makes one move", "deep", <AbstractScene />],
    ["And notice where the carrier comes from", "doubt", <HabitScene />],
    ["Now look at the moment seeing gives way to hearing", "search", <TransitionScene />],
    ["But first, look at what is actually happening", "light", <RealTimeScene />],
    ["And when we do line them up", "whole", <ContinuityScene />],
    ["The same knot is at work in holding an apple", "search", <KnotScene />],
    ["Without the time framework, there is no sequence to describe", "light", <StrokeScene />],
    ["Three traditions say this, each in its own way", "jade", <TraditionsScene />],
    ["So what of sleep", "deep", <SleepScene />],
    ["And what of death", "dusk", <DeathScene />],
    ["When the teaching says there is no carrier", "search", <HalvesScene />],
    ["Try it now", "whole", <TryScene />],
    ["Seeing. Hearing. A thought", "light", <EndScene />],
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
