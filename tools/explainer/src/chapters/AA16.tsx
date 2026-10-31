// After Anatta · The Logic: Annihilation Is an Inherent View (thusness-website after-anatta/annihilation.html, aa-annihilation).
// Arc: something ended, and a blank where it stood -> annihilation holds the same thing eternalism holds -> one line: to be
// annihilated it must first be there from its own side -> the fork: stays / destroyed, one root -> MMK 15.10, 15.11
// ("before") -> "it is not" leans on "it is" (15.5) -> the fork opens only for an inherent thing (21.14) -> felt
// directly: a sound stops; where did it go? -> a candle flame -> an ending is conditions parting -> the Homage -> the sound
// did stop, conventionally -> where it hides: death, emptiness, practice -> try it -> in brief.
// Stance: the thing with its own nature and the solid nothing are drawn only to be struck. Conditions, the ending, and
// what works stay drawn and vivid. Nothing is drawn as a ground left behind.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "A sound has just stopped", "A day is over", "Someone you loved has died", "And with it comes a picture",
  "and now there is a blank where it stood", "Here is the question", "is everything wiped out in the end",
  "the one that gives up clinging", "This is After Anatta",
  // the same thing
  "Annihilation sounds like the opposite of holding on to things",
  "It holds on to the same thing eternalism holds on to", "The reason fits in one line",
  "Something can be annihilated only if it was there from its own side first",
  // the fork
  "you first need an", "A thing that stood on its own, and is now wiped out", "Eternalism says the thing stays",
  "Annihilation says the thing is destroyed", "Both start from a thing with a being of its own",
  "They differ only in what they say happens to it",
  // MMK 15.10, 15.11
  "puts the two side by side", "is the grasping of permanence", "is the view of annihilation",
  "So the wise should not take their stand on existence", "And he shows where annihilation comes from",
  "What exists by its own nature does not cease to exist", "It existed before, and does not exist now",
  "that brings annihilation", "The word that gives it away is",
  "A thing with its own nature falls into a nothing that is just as solid",
  // leans on
  "Look closely at", "is not a second fact, standing on its own", "It is borrowed from existence",
  "if an existing thing is not established", "only means something as the going of something",
  "has nothing to be the absence of",
  // 21.14
  "This is why the two extremes cannot be fought one at a time",
  "Refute eternalism while keeping the thing, and you land in annihilation",
  "falls into permanence, or into annihilation", "There is no third way for it",
  "The fork opens only for a thing that exists from its own side",
  // a sound stops
  "Now look with dependency, and start where it can be felt", "Listen to a sound nearby", "Wait for it to stop",
  "where did it go", "Not back into the fan", "Not into the air", "Not into your ear", "It did not go anywhere",
  "The sound was never found apart from the source, the air, the ear and the attention coming together",
  "When they part, there is no sound", "Nothing that stood on its own has been destroyed",
  "A candle flame is the same", "There never was a flame apart from the burning",
  // parting
  "So an ending is not the loss of something that stood by itself", "It is conditions parting",
  "just as the arising was conditions coming together",
  "That is why the homage of the Middle Way reads them together", "Without ceasing, without arising",
  "without annihilation, without permanence", "without coming and without going",
  "so the fully awakened one taught dependent arising",
  "Remove inherent existence, and both extremes fall at once",
  "Not because a middle object is found between them", "the object they were both about is never found",
  // conventional
  "None of this denies that the sound stopped", "said the way the world says it", "The room is quiet now",
  "That quiet is validly functioning", "What is denied is a sound with its own nature",
  // where it hides
  "Annihilation rarely announces itself", "It hides in three places",
  "First, at death", "assumes an I that was there from its own side", "The search never finds that I",
  "So nothing of that kind can be wiped out", "The flow of conditions goes on, neither carried nor cut",
  "Second, in emptiness itself", "Everything is empty, so nothing exists", "It is annihilation dressed as insight",
  "Emptiness never removes anything that was there", "It shows that nothing was ever there in that way",
  "like a snake grasped the wrong way",
  "The faults charged against emptiness are faults of the nothingness it was mistaken for",
  "Third, in practice", "causes and ethics no longer apply", "But conditions still work", "An unkind word still hurts",
  "Care still heals", "It is what lets it work",
  // try it
  "Try it now", "Think of something that has ended", "Notice the picture that comes with",
  "Now look for that thing at the time it was there",
  "Was the sound found apart from the source, the air and the hearing", "Was the day found apart from the light",
  "what is it that has been annihilated", "The ending is still an ending",
  // end
  "In brief", "Both assume a thing with its own nature", "Seen with dependency",
  "Annihilation is the inherent view looking backwards",
  "It needs something to have been there from its own side, in order to lose it",
  // three sides
  "This is one point, seen from three sides", "looks at it in your own six streams, from moment to moment",
  "looks at it from life to life", "Here it is seen from the side of the ending",
  "Each time the same thing falls away", "to be carried, or to be cut off",
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
/** A chip struck through at `strikeAt`: only for what is never found (a thing with its own nature, a solid nothing). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

/** The picture that comes with "it is gone": a dashed outline, a blank where something stood. */
const Blank: React.FC<{ w?: number; h?: number; color?: string }> = ({ w = 360, h = 240, color = DIM }) => (
  <div style={{ width: w, height: h, border: `5px dashed ${color}`, borderRadius: 14, boxShadow: `0 0 24px ${color}55` }} />
);

/** A fan: three blades turning while `on`. */
const Fan: React.FC<{ on: number; size?: number }> = ({ on, size = 200 }) => {
  const { t } = useT();
  const rot = (t * 420 * on) % 360;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ICE}88)` }}>
      <circle cx={100} cy={100} r={86} fill="none" stroke={ICE} strokeWidth={5} />
      <g transform={`rotate(${rot} 100 100)`}>
        {[0, 120, 240].map((a) => (
          <path key={a} d="M100 100 C110 60 140 40 120 26 C100 18 92 60 100 100 Z" fill="rgba(169,221,242,0.25)" stroke={ICE}
            strokeWidth={4} transform={`rotate(${a} 100 100)`} />
        ))}
      </g>
      <circle cx={100} cy={100} r={10} fill={ICE} />
    </svg>
  );
};

/** A candle; `lit` (0..1) is the flame. */
const Candle: React.FC<{ lit: number }> = ({ lit }) => {
  const { t } = useT();
  const f = 1 + 0.07 * Math.sin(t * 9);
  return (
    <svg width={160} height={300} viewBox="0 0 160 300" style={{ overflow: "visible" }}>
      <g opacity={lit} transform={`translate(80 90) scale(${f * lit}) translate(-80 -90)`}>
        <path d="M80 20 C104 60 110 84 98 104 C90 118 70 118 62 104 C50 84 56 60 80 20 Z" fill="rgba(255,122,89,0.45)"
          stroke={WARM} strokeWidth={5} style={{ filter: `drop-shadow(0 0 18px ${WARM})` }} />
      </g>
      <path d="M80 112 L80 136" stroke={CHALK} strokeWidth={4} />
      <rect x={40} y={136} width={80} height={150} rx={8} fill="rgba(241,236,224,0.12)" stroke={CHALK} strokeWidth={5} />
    </svg>
  );
};

/** Conditions coming together around a centre (`p` 1 = together, 0 = parted); the centre glows only while they meet. */
const Meeting: React.FC<{ names: [string, string][]; p: number; centre: React.ReactNode; r?: number }> = ({ names, p, centre, r = 300 }) => {
  const n = names.length;
  return (
    <>
      {names.map(([name, col], i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        const rr = r * (1.45 - 0.45 * p);
        return <At key={i} x={960 + rr * Math.cos(a)} y={420 + 0.62 * rr * Math.sin(a)}><K c={col} s={28}>{name}</K></At>;
      })}
      <At x={960} y={420} o={p}>{centre}</At>
    </>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  return (
    <AbsoluteFill>
      <Items items={[
        ["A sound has just stopped", 520, 260, <K c={TEAL}>a sound has stopped</K>, { until: "And with it comes a picture" }],
        ["A day is over", 960, 260, <K c={GOLD}>a day is over</K>, { until: "And with it comes a picture" }],
        ["Someone you loved has died", 1400, 260, <K c={ROSE}>someone has died</K>, { until: "And with it comes a picture" }],
        ["And with it comes a picture", 960, 420, <Blank />, { until: "This is After Anatta" }],
        ["and now there is a blank where it stood", 960, 600, <Wd c={DIM} s={32}>a blank where it stood</Wd>, { until: "Here is the question" }],
        ["is everything wiped out in the end", 960, 180, <Wd c={GOLD} s={46} serif>is everything wiped out in the end?</Wd>, { until: "This is After Anatta" }],
        ["the one that gives up clinging", 960, 650, <Wd c={DIM} s={32}>…the view that gives up clinging?</Wd>, { until: "This is After Anatta" }],
      ]} />
      <At x={960} y={430} o={ramp(t, aa, 0.5)}><Glow color={CHALK} size={52} serif>After Anatta · The Logic</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5)}><Glow color={DIM} size={28}>notes by John Tan (Thusness)</Glow></At>
    </AbsoluteFill>
  );
};

const SameScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Annihilation sounds like the opposite of holding on to things", 960, 200, <Wd c={DIM} s={34}>annihilation sounds like letting go…</Wd>],
      ["It holds on to the same thing eternalism holds on to", 960, 290, <Wd c={CHALK} s={40} serif>…it holds on to the same thing</Wd>],
      ["The reason fits in one line", 960, 450, <Wd c={DIM} s={28}>in one line</Wd>],
      ["Something can be annihilated only if it was there from its own side first", 960, 540,
        <Wd c={GOLD} s={44} serif>to be annihilated, it must first be there from its own side</Wd>],
    ]} />
  </AbsoluteFill>
);

const ForkScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("Eternalism says the thing stays");
  const de = c("Annihilation says the thing is destroyed");
  return (
    <AbsoluteFill>
      <Flow x1={960} y1={330} x2={560} y2={540} color={ICE} p={ramp(t, st, 0.8)} />
      <Flow x1={960} y1={330} x2={1360} y2={540} color={ROSE} p={ramp(t, de, 0.8)} />
      <Items items={[
        ["you first need an", 960, 140, <Wd c={WARM} s={36}>"it is gone" first needs an "it"</Wd>],
        ["A thing that stood on its own, and is now wiped out", 960, 290,
          <SK strikeAt={c("puts the two side by side") - 0.8} c={GOLD} s={32}>a thing with its own nature</SK>],
        ["Eternalism says the thing stays", 560, 580, <K c={ICE}>eternalism: it stays</K>],
        ["Annihilation says the thing is destroyed", 1360, 580, <K c={ROSE}>annihilation: it is destroyed</K>],
        ["Both start from a thing with a being of its own", 960, 700, <Wd c={CHALK} s={32}>both start from the same thing</Wd>],
        ["They differ only in what they say happens to it", 960, 770, <Wd c={DIM} s={28}>they differ only in its story</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const second = c("And he shows where annihilation comes from");
  const out = 1 - ramp(t, second, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("puts the two side by side"), 0.5)}><Wd c={DIM} s={30}>Nāgārjuna · MMK 15.10–11</Wd></At>
      <At x={960} y={300} o={out}><Reveal text={`"It is": permanence`} at={c("is the grasping of permanence")} size={56} color={ICE} speed={0.03} /></At>
      <At x={960} y={400} o={out}><Reveal text={`"It is not": annihilation`} at={c("is the view of annihilation")} size={56} color={ROSE} speed={0.03} /></At>
      <At x={960} y={540} o={out}><Reveal text="take no stand on either" at={c("So the wise should not take their stand on existence")} size={46} color={GOLD} speed={0.03} /></At>
      <Items items={[
        ["What exists by its own nature does not cease to exist", 960, 280, <K c={ICE}>its own nature does not cease: permanence</K>, { until: "Look closely at" }],
        ["It existed before, and does not exist now", 960, 400, <K c={ROSE}>it existed before, and does not now</K>, { until: "Look closely at" }],
        ["that brings annihilation", 960, 470, <Wd c={ROSE} s={30}>annihilation</Wd>, { until: "Look closely at" }],
        ["The word that gives it away is", 960, 580, <Wd c={GOLD} s={56} serif>"before"</Wd>, { until: "Look closely at" }],
        ["A thing with its own nature falls into a nothing that is just as solid", 960, 690,
          <Wd c={DIM} s={30}>a solid thing falls into a solid nothing</Wd>, { until: "Look closely at" }],
      ]} />
    </AbsoluteFill>
  );
};

const LeanScene: React.FC = () => {
  const c = useCue();
  const strike = c("has nothing to be the absence of") + 0.6;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Look closely at", 960, 140, <Wd c={CHALK} s={40} serif>"it is not" leans on "it is"</Wd>],
        ["is not a second fact, standing on its own", 960, 250, <Wd c={DIM} s={30}>not a second fact of its own</Wd>],
        ["It is borrowed from existence", 960, 320, <Wd c={GOLD} s={34}>borrowed from existence</Wd>],
        ["if an existing thing is not established", 960, 410, <Wd c={DIM} s={28}>MMK 15.5</Wd>],
        ["only means something as the going of something", 960, 480, <Wd c={CHALK} s={34}>"gone" is the going of something</Wd>],
        ["only means something as the going of something", 640, 620, <SK strikeAt={strike} c={GOLD}>a thing standing by itself</SK>, { d: 1 }],
        ["only means something as the going of something", 1280, 620, <SK strikeAt={strike + 0.5} c={ROSE}>a nothing standing by itself</SK>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const FallScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const opens = c("The fork opens only for a thing that exists from its own side");
  return (
    <AbsoluteFill>
      <Flow x1={960} y1={400} x2={600} y2={600} color={ICE} p={ramp(t, c("falls into permanence, or into annihilation"), 0.8)} />
      <Flow x1={960} y1={400} x2={1320} y2={600} color={ROSE} p={ramp(t, c("falls into permanence, or into annihilation") + 0.6, 0.8)} />
      <Items items={[
        ["This is why the two extremes cannot be fought one at a time", 960, 150, <Wd c={CHALK} s={38} serif>the two cannot be fought one at a time</Wd>],
        ["Refute eternalism while keeping the thing, and you land in annihilation", 960, 240, <Wd c={DIM} s={30}>keep the thing, and you land in the other</Wd>],
        ["falls into permanence, or into annihilation", 960, 360, <K c={GOLD}>a thing from its own side</K>],
        ["falls into permanence, or into annihilation", 600, 640, <K c={ICE}>for ever</K>, { d: 0.4 }],
        ["falls into permanence, or into annihilation", 1320, 640, <K c={ROSE}>cut off</K>, { d: 1 }],
        ["There is no third way for it", 960, 740, <Wd c={DIM} s={30}>no third way, for such a thing</Wd>, { until: "The fork opens only for a thing that exists from its own side" }],
      ]} />
      <At x={960} y={760} o={ramp(t, opens, 0.5)}><Wd c={GOLD} s={34} serif>the fork opens only for that</Wd></At>
    </AbsoluteFill>
  );
};

const SoundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stop = c("Wait for it to stop") + 1.2;
  const on = 1 - ramp(t, stop, 1.2);
  const cand = c("A candle flame is the same");
  const lit = 1 - ramp(t, cand + 2.2, 1.5);
  const out = 1 - ramp(t, cand, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("Now look with dependency, and start where it can be felt"), 0.5) * out}><Wd c={CHALK} s={36} serif>start where it can be felt</Wd></At>
      <At x={620} y={400} o={ramp(t, c("Listen to a sound nearby"), 0.6) * out}><Fan on={on} /></At>
      {[0, 1, 2].map((k) => (
        <Ring key={k} x={620} y={400} p={on * ((t * 0.7 + k / 3) % 1)} r0={110} r1={330} color={TEAL} width={3} />
      ))}
      <Items items={[
        ["where did it go", 1300, 240, <Wd c={GOLD} s={42} serif>where did it go?</Wd>, { until: "A candle flame is the same" }],
        ["Not back into the fan", 1300, 330, <SK strikeAt={c("Not back into the fan") + 0.9} c={ICE} s={26}>back into the fan</SK>, { until: "A candle flame is the same" }],
        ["Not into the air", 1300, 410, <SK strikeAt={c("Not into the air") + 0.7} c={ICE} s={26}>into the air</SK>, { until: "A candle flame is the same" }],
        ["Not into your ear", 1300, 490, <SK strikeAt={c("Not into your ear") + 0.7} c={ICE} s={26}>into your ear</SK>, { until: "A candle flame is the same" }],
        ["It did not go anywhere", 1300, 590, <Wd c={CHALK} s={32}>it did not go anywhere</Wd>, { until: "A candle flame is the same" }],
        ["The sound was never found apart from the source, the air, the ear and the attention coming together", 960, 700,
          <Wd c={TEAL} s={30}>source · air · ear · attention, coming together</Wd>, { until: "A candle flame is the same" }],
        ["When they part, there is no sound", 960, 770, <Wd c={DIM} s={28}>they part: no sound, and nothing destroyed</Wd>, { until: "A candle flame is the same" }],
        ["There never was a flame apart from the burning", 960, 780, <Wd c={WARM} s={32}>no flame apart from the burning</Wd>],
      ]} />
      <At x={960} y={430} o={ramp(t, cand, 0.6)}><Candle lit={lit} /></At>
      <At x={960} y={130} o={ramp(t, cand, 0.5)}><Wd c={DIM} s={30}>wick · wax · air</Wd></At>
    </AbsoluteFill>
  );
};

const PartScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const part = c("It is conditions parting");
  const come = c("just as the arising was conditions coming together");
  const p = ramp(t, come, 1.2) * 1 + (1 - ramp(t, part, 1.2)) * (1 - ramp(t, come, 0.1));
  const hom = c("That is why the homage of the Middle Way reads them together");
  const out = 1 - ramp(t, hom, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("So an ending is not the loss of something that stood by itself"), 0.5) * out}>
        <Wd c={CHALK} s={36} serif>an ending: conditions parting</Wd></At>
      <div style={{ opacity: out }}>
        <Meeting names={[["source", ICE], ["air", TEAL], ["ear", GREEN], ["attention", VIOLET]]} p={p}
          centre={<Wd c={TEAL} s={40} serif>sound</Wd>} />
      </div>
      <At x={960} y={160} o={ramp(t, hom, 0.5)}><Wd c={DIM} s={30}>the Homage of the Middle Way</Wd></At>
      <At x={960} y={290}><Reveal text="without ceasing, without arising" at={c("Without ceasing, without arising")} size={46} color={CHALK} speed={0.03} /></At>
      <At x={960} y={370}><Reveal text="without annihilation, without permanence" at={c("without annihilation, without permanence")} size={46} color={GOLD} speed={0.03} /></At>
      <At x={960} y={450}><Reveal text="without coming, without going" at={c("without coming and without going")} size={46} color={CHALK} speed={0.03} /></At>
      <Items items={[
        ["so the fully awakened one taught dependent arising", 960, 540, <K c={TEAL}>dependent arising</K>],
        ["Remove inherent existence, and both extremes fall at once", 960, 650, <Wd c={CHALK} s={32}>remove inherent existence: both fall at once</Wd>],
        ["the object they were both about is never found", 960, 730, <Wd c={DIM} s={28}>the thing they were both about is never found</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const QuietScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["None of this denies that the sound stopped", 960, 220, <Wd c={CHALK} s={40} serif>the sound did stop</Wd>],
      ["said the way the world says it", 960, 310, <Wd c={DIM} s={30}>said the way the world says it</Wd>],
      ["The room is quiet now", 960, 420, <K c={TEAL}>the room is quiet now</K>],
      ["That quiet is validly functioning", 960, 510, <Wd c={GREEN} s={32}>validly functioning: you hear the next thing</Wd>],
      ["What is denied is a sound with its own nature", 960, 650,
        <SK strikeAt={1e9} c={DIM}>a sound with its own nature → a nothing with its own nature</SK>],
    ]} />
  </AbsoluteFill>
);

const HidesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s2 = c("Second, in emptiness itself");
  const s3 = c("Third, in practice");
  const col = (a: number, b: number) => ramp(t, a, 0.5) * (1 - ramp(t, b, 0.5)) * 0.65 + ramp(t, a, 0.5) * 0.35;
  return (
    <AbsoluteFill>
      <Items items={[
        ["Annihilation rarely announces itself", 960, 120, <Wd c={CHALK} s={36} serif>where it hides</Wd>],
      ]} />
      <At x={420} y={230} o={col(c("First, at death"), s2)}><K c={ROSE}>at death</K></At>
      <At x={960} y={230} o={col(s2, s3)}><K c={VIOLET}>in emptiness</K></At>
      <At x={1500} y={230} o={col(s3, 1e9)}><K c={GREEN}>in practice</K></At>
      <Items items={[
        ["assumes an I that was there from its own side", 420, 360,
          <SK strikeAt={c("The search never finds that I") + 0.8} c={ROSE} s={26}>an I from its own side</SK>],
        ["So nothing of that kind can be wiped out", 420, 460, <Wd c={DIM} s={24}>nothing of that kind to wipe out</Wd>],
        ["The flow of conditions goes on, neither carried nor cut", 420, 540, <Wd c={GOLD} s={28} serif>neither carried nor cut</Wd>],
        ["Everything is empty, so nothing exists", 960, 360,
          <SK strikeAt={c("It is annihilation dressed as insight") + 0.6} c={VIOLET} s={26}>"empty, so nothing exists"</SK>],
        ["Emptiness never removes anything that was there", 960, 460, <Wd c={DIM} s={24}>removes nothing that was there</Wd>],
        ["It shows that nothing was ever there in that way", 960, 520, <Wd c={CHALK} s={24}>nothing was ever there that way</Wd>],
        ["like a snake grasped the wrong way", 960, 600, <Wd c={DIM} s={24}>a snake grasped the wrong way</Wd>],
        ["causes and ethics no longer apply", 1500, 360,
          <SK strikeAt={c("But conditions still work") + 0.6} c={GREEN} s={26}>"causes no longer apply"</SK>],
        ["An unkind word still hurts", 1500, 460, <Wd c={CHALK} s={26}>an unkind word still hurts</Wd>],
        ["Care still heals", 1500, 520, <Wd c={CHALK} s={26}>care still heals</Wd>],
        ["It is what lets it work", 1500, 620, <Wd c={GOLD} s={28} serif>seeing it lets it work</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Try it now", 960, 120, <Wd c={CHALK} s={36} serif>try it</Wd>],
        ["Think of something that has ended", 960, 220, <Wd c={DIM} s={30}>something that has ended</Wd>],
        ["Notice the picture that comes with", 960, 380, <Blank w={300} h={180} />, { until: "Now look for that thing at the time it was there" }],
        ["Now look for that thing at the time it was there", 960, 320, <Wd c={GOLD} s={36} serif>look for it while it was there</Wd>],
        ["Was the sound found apart from the source, the air and the hearing", 960, 420, <K c={TEAL}>the sound, apart from source, air, hearing?</K>],
        ["Was the day found apart from the light", 960, 500, <K c={GOLD}>the day, apart from light, turning, counting?</K>],
        ["what is it that has been annihilated", 960, 620,
          <SK strikeAt={c("The ending is still an ending") - 0.2} c={DIM}>what has been annihilated?</SK>],
        ["The ending is still an ending", 960, 720, <Wd c={CHALK} s={32}>the ending is still an ending</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["In brief", 600, 220, <K c={ICE}>stays</K>],
        ["In brief", 1320, 220, <K c={ROSE}>destroyed</K>, { d: 0.4 }],
        ["Both assume a thing with its own nature", 960, 330, <SK strikeAt={c("Seen with dependency") + 0.4} c={GOLD}>the same thing with its own nature</SK>],
        ["Seen with dependency", 960, 430, <Wd c={TEAL} s={32}>nothing comes from its own side · nothing goes</Wd>],
      ]} />
      <At x={960} y={570}><Reveal text="Annihilation is the inherent view looking backwards." at={c("Annihilation is the inherent view looking backwards")} size={50} color={GOLD} speed={0.03} /></At>
      <Items items={[
        ["It needs something to have been there from its own side, in order to lose it", 960, 680,
          <Wd c={DIM} s={30}>it needs something there from its own side, in order to lose it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const c = useCue();
  const fall = c("Each time the same thing falls away") + 1.2;
  return (
    <AbsoluteFill>
      <Items items={[
        ["This is one point, seen from three sides", 960, 150, <Wd c={CHALK} s={40} serif>one point, three sides</Wd>],
        ["looks at it in your own six streams, from moment to moment", 460, 360, <K c={TEAL}>Neither Carried Nor Cut</K>],
        ["looks at it in your own six streams, from moment to moment", 460, 440, <Wd c={DIM} s={26}>six streams, moment to moment</Wd>, { d: 0.5 }],
        ["looks at it from life to life", 960, 360, <K c={WARM}>One Flame Lights Another</K>],
        ["looks at it from life to life", 960, 440, <Wd c={DIM} s={26}>life to life</Wd>, { d: 0.5 }],
        ["Here it is seen from the side of the ending", 1460, 360, <K c={ROSE}>Annihilation Is an Inherent View</K>],
        ["Here it is seen from the side of the ending", 1460, 440, <Wd c={DIM} s={26}>the side of the ending</Wd>, { d: 0.5 }],
        ["Each time the same thing falls away", 960, 600, <SK strikeAt={fall + 2.5} c={GOLD}>something there from its own side</SK>],
        ["to be carried, or to be cut off", 960, 700, <Wd c={DIM} s={30}>to be carried, or to be cut off</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A sound has just stopped", "dusk", <OpenScene />],
    ["Annihilation sounds like the opposite of holding on to things", "doubt", <SameScene />],
    ["you first need an", "search", <ForkScene />],
    ["puts the two side by side", "light", <VerseScene />],
    ["Look closely at", "deep", <LeanScene />],
    ["This is why the two extremes cannot be fought one at a time", "doubt", <FallScene />],
    ["Now look with dependency, and start where it can be felt", "whole", <SoundScene />],
    ["So an ending is not the loss of something that stood by itself", "light", <PartScene />],
    ["None of this denies that the sound stopped", "jade", <QuietScene />],
    ["Annihilation rarely announces itself", "search", <HidesScene />],
    ["Try it now", "whole", <TryScene />],
    ["In brief", "light", <EndScene />],
    ["This is one point, seen from three sides", "whole", <ThreeScene />],
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
