// After Anatta · Questions: The Lamp That Does Not Light Itself (thusness-website after-anatta/q-luminosity.html, aa-luminosity,
// from "The hardest question: Nāgārjuna's lamp"; EBooks Bonus Articles/the-lamp-that-does-not-light-itself).
// Arc: rain at the window, clear with nothing lighting it -> the hard question: does "clarity is the appearing" bring back
// the lamp Nāgārjuna refutes? -> MMK 7.8-12 -> the lamp returns as self-knowing (sword, fingertip, Śāntideva, MMK 3.2) ->
// 7.9 read again: no darkness in the lamp, so clarity is never missing -> four corners -> the dark room -> six lamps, not
// one -> AN 1.51 -> the lamp under the basket (subtle clear light) -> awareness 24/7: maintenance is the split -> in
// sleeping, fully sleep -> try it -> "Clear and empty. Never a hidden substance."
// Stance: a lamp shining on itself, a light behind appearances, a lamp kept on are drawn only to be struck. The sound,
// the colour, the dark seen as dark stay drawn and vivid. Nothing is drawn as a ground or a light behind.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "Sit by a window and listen to the rain", "Nothing has to light it up", "This is After Anatta",
  "The books say that luminosity is the knowing clarity of appearing itself", "A sound is clear as sound",
  "A colour is vivid as colour", "Nothing stands behind them to light them up",
  // the question
  "will stop here and ask a hard question", "takes apart a lamp that lights up both itself and other things",
  "Later teachers use the same move against a mind that knows itself", "are we not bringing back the very lamp",
  "The short answer is no", "the clearest proof we have that clarity is never missing",
  "And the clearest warning against making it a light of its own",
  // chapter seven
  "Start with the lamp", "Chapter seven looks at arising, staying and ceasing", "He reaches for an image",
  "Just as a lamp lights up both itself and other things", "looks at the lamp",
  "There is no darkness in the lamp, nor where the lamp stands", "Then what does the lamp light up",
  "For lighting up means dispelling darkness", "Then he looks at the darkness around it", "does not reach the darkness",
  "would dispel the darkness of the whole world", "And he turns the image round",
  "then darkness too would hide both itself and others", "None of this stops anyone reading by lamplight",
  "What fails is a lamp with a power of its own",
  // the lamp as mind
  "The same lamp came back later, in a debate about the mind", "every moment of knowing also knows itself",
  "Their favourite example was the lamp", "So a cognition needs no second cognition to be known",
  "A sword does not cut itself", "A fingertip does not touch itself", "it splits into a knower and a known",
  "took up the lamp and gave", "because it was never hidden by darkness", "Seeing does not see itself",
  "So the challenge is fair", "it falls to every one of these arguments",
  // read again
  "Now read that verse again, slowly", "does not say the lamp is dark", "there is no darkness in it at all",
  "There is nothing dark in it to be lit", "Put a sound in place of the lamp", "waiting for an awareness to light it up",
  "There is not", "The sound is clear as it sounds", "Clarity is never missing", "No appearing ever waited in the dark",
  "Not another light, and not itself", "As I once put it", "you cannot talk about phenomena without clarity",
  "Just whether clarity is abstracted out and reified", "A phenomenon is whatever can be known",
  // four corners
  "opens the Middle Way with four corners", "Not from itself, not from another, not from both",
  "Put the clarity of a sound through the same four corners", "Lit by itself", "Lit by another",
  "This is the witness, the background, the mirror", "Lit by both", "Without conditions",
  "Block the ear, and there is no sound to be clear", "So what is left", "The sound, clear as it sounds, on its conditions",
  "It is a denial: not lit by another", "never had a place to start",
  // the dark room
  "Here is a test anyone can do", "Sit in a room with the lights off", "The darkness", "It is seen, vividly, as dark",
  "It is a sight, as clear as any other", "If darkness could hide itself", "But we do", "does not mean bright",
  "A dull ache is clear as dull", "A faint sound is clear as faint", "Even confusion is known as confusion",
  // six lamps
  "Now take the six streams", "Each is clear on its own conditions",
  "There is no single lamp moving from the eye to the ear", "But the clarity feels the same in all of them",
  "The mind notices this sameness and lifts it out", "The one light in which all six appear",
  "Once lifted out, it is taken to stand on its own", "put back up on its stand",
  "Left as it is, the sameness is not lifted out", "Six lamps, not one", "And no lamp that lights itself",
  // the sutta
  "The early discourse says", "and it is defiled by incoming defilements",
  "The mind has no nature of its own for them to belong to", "Its clarity was never dark",
  // the basket
  "The tantras give the lamp its strongest form", "the coarse elements dissolve one into the next",
  "White, red and black appearances follow", "Then comes the clear light",
  "It is easy to picture this as a lamp under a basket", "Death lifts them off",
  "The teachers themselves say it is not a soul", "frees nothing", "Read with the logic, three things change",
  "Subtle means fewer conditions, not a deeper stuff", "Not a floor that was waiting underneath",
  "The coarse minds were never darkness", "What the coarse minds add is the knot, not a cover",
  "So nothing is uncovered at death", "is a stream, neither carried nor cut", "Nothing travels through it",
  // not maintenance
  "Some practice sets out to keep awareness unbroken", "through the day, into dream, through deep sleep",
  "In whatever case, there cannot be maintenance", "Maintenance is the split",
  "it must unbind the habitual tendencies of seeing in an inherent pattern", "Not an effort kept up during sleep",
  "The process is effortless", "A wisdom practice, rather than calm abiding", "To keep awareness going, there must be two",
  "An awareness, and someone keeping it up", "The very gap that anatta saw through",
  "What has to go is a habit, not a gap", "Effortless is the fruit, not the start", "And a caution, from experience",
  "enormous sleeplessness and energy imbalances", "They have to be guided by a qualified master", "they are not necessary",
  "If sleeplessness goes on, see a doctor as well",
  // fully sleep
  "If each instant is complete, sleep is complete as sleep", "It needs no witness standing guard", "When hungry, I eat",
  "When tired, I sleep", "Everyone does that, said the questioner", "Their minds keep running on",
  "The keeper is what stops sleep being sleep", "sleeping is fully sleeping, and nothing is lost",
  // try it
  "Try it now", "Close your eyes, and let a sound come", "but dark, before awareness reached it",
  "Is the hearing turning back to light itself up", "Is there a light behind the sound", "Look for where it stands",
  "Then open your eyes in a dim room, and see the dark", "It is clear as dark",
  "What is found is the sound, clear as it sounds", "No lamp", "And no darkness", "Clear and empty", "Never a hidden substance",
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
/** A chip struck through at `strikeAt`: only for what is never found (a self-lighting lamp, a light behind, a keeper). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

/** An oil lamp; `lit` (0..1) is the flame. */
const Lamp: React.FC<{ lit?: number; size?: number }> = ({ lit = 1, size = 1 }) => {
  const { t } = useT();
  const f = 1 + 0.06 * Math.sin(t * 8);
  return (
    <svg width={220 * size} height={260 * size} viewBox="0 0 220 260" style={{ overflow: "visible" }}>
      <g opacity={lit} transform={`translate(110 70) scale(${f * lit}) translate(-110 -70)`}>
        <path d="M110 10 C132 46 138 70 126 90 C118 102 102 102 94 90 C82 70 88 46 110 10 Z" fill="rgba(228,194,122,0.5)"
          stroke={GOLD} strokeWidth={5} style={{ filter: `drop-shadow(0 0 22px ${GOLD})` }} />
      </g>
      <path d="M110 98 L110 120" stroke={CHALK} strokeWidth={4} />
      <path d="M30 120 Q110 200 190 120 Z" fill="rgba(241,236,224,0.12)" stroke={CHALK} strokeWidth={5} />
      <path d="M90 168 L80 240 L140 240 L130 168" fill="none" stroke={CHALK} strokeWidth={5} />
    </svg>
  );
};

/** Raindrops on a window pane. */
const Rain: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={520} height={360} viewBox="0 0 520 360" style={{ overflow: "visible" }}>
      <rect x={6} y={6} width={508} height={348} rx={10} fill="none" stroke={ICE} strokeWidth={5} />
      <line x1={260} y1={6} x2={260} y2={354} stroke={ICE} strokeWidth={4} />
      {Array.from({ length: 22 }).map((_, i) => {
        const x = 20 + ((i * 97) % 480);
        const y = ((t * 160 + i * 53) % 340) + 10;
        return <line key={i} x1={x} y1={y} x2={x - 4} y2={y + 22} stroke={TEAL} strokeWidth={3} opacity={0.8} />;
      })}
    </svg>
  );
};

/** A dark room: a black square with only its frame. */
const DarkRoom: React.FC<{ w?: number; h?: number }> = ({ w = 520, h = 340 }) => (
  <div style={{ width: w, height: h, background: "rgba(0,0,0,0.85)", border: `4px solid ${DIM}`, borderRadius: 12,
    boxShadow: `0 0 30px rgba(0,0,0,0.9)` }} />
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  const out = 1 - ramp(t, aa, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, 0.3, 0.8) * out}><Rain /></At>
      {[0, 1, 2].map((k) => (
        <Ring key={k} x={960} y={400} p={out * ((t * 0.5 + k / 3) % 1)} r0={200} r1={420} color={TEAL} width={2} />
      ))}
      <Items items={[
        ["Nothing has to light it up", 960, 680, <Wd c={GOLD} s={38} serif>clear, and nothing lights it up</Wd>, { until: "This is After Anatta" }],
      ]} />
      <At x={960} y={430} o={ramp(t, aa, 0.5) * (1 - ramp(t, c("The books say that luminosity is the knowing clarity of appearing itself"), 0.4))}>
        <Glow color={CHALK} size={52} serif>After Anatta · Questions</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5) * (1 - ramp(t, c("The books say that luminosity is the knowing clarity of appearing itself"), 0.4))}>
        <Glow color={DIM} size={28}>notes by John Tan (Thusness)</Glow></At>
      <Items items={[
        ["The books say that luminosity is the knowing clarity of appearing itself", 960, 220,
          <Wd c={GOLD} s={42} serif>luminosity: the knowing clarity of appearing</Wd>],
        ["A sound is clear as sound", 640, 420, <K c={TEAL}>a sound, clear as sound</K>],
        ["A colour is vivid as colour", 1280, 420, <K c={ROSE}>a colour, vivid as colour</K>],
        ["Nothing stands behind them to light them up", 960, 600, <Wd c={DIM} s={32}>nothing behind them lights them up</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const no = c("The short answer is no");
  return (
    <AbsoluteFill>
      <At x={960} y={360} o={ramp(t, c("takes apart a lamp that lights up both itself and other things"), 0.6) * (1 - ramp(t, no, 0.5))}><Lamp /></At>
      <Items items={[
        ["will stop here and ask a hard question", 960, 140, <Wd c={CHALK} s={38} serif>a hard question</Wd>],
        ["takes apart a lamp that lights up both itself and other things", 960, 600, <Wd c={DIM} s={30}>Middle Way, chapter 7: a lamp that lights itself</Wd>, { until: "The short answer is no" }],
        ["Later teachers use the same move against a mind that knows itself", 960, 680, <Wd c={DIM} s={30}>…and a mind that knows itself</Wd>, { until: "The short answer is no" }],
        ["are we not bringing back the very lamp", 960, 240, <Wd c={GOLD} s={40} serif>is "clarity is the appearing" that lamp again?</Wd>, { until: "The short answer is no" }],
        ["The short answer is no", 960, 330, <Wd c={CHALK} s={60} serif>No.</Wd>],
        ["the clearest proof we have that clarity is never missing", 960, 470, <K c={TEAL}>the proof that clarity is never missing</K>],
        ["And the clearest warning against making it a light of its own", 960, 570, <K c={ROSE}>the warning against a light of its own</K>],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dark = c("Then he looks at the darkness around it");
  const out1 = 1 - ramp(t, dark, 0.5);
  const lamp = c("None of this stops anyone reading by lamplight");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Start with the lamp"), 0.5)}><Wd c={DIM} s={30}>MMK 7.8–12</Wd></At>
      <Items items={[
        ["Chapter seven looks at arising, staying and ceasing", 960, 190, <Wd c={DIM} s={30}>arising · staying · ceasing</Wd>, { until: "Just as a lamp lights up both itself and other things" }],
        ["Just as a lamp lights up both itself and other things", 960, 190, <Wd c={CHALK} s={36} serif>"a lamp lights up both itself and other things"</Wd>, { until: "looks at the lamp" }],
      ]} />
      <At x={960} y={420} o={ramp(t, c("He reaches for an image"), 0.6) * (1 - ramp(t, lamp, 0.5))}><Lamp /></At>
      <At x={960} y={190} o={out1}><Reveal text="no darkness in the lamp, nor where it stands" at={c("There is no darkness in the lamp, nor where the lamp stands")} size={42} color={GOLD} speed={0.03} /></At>
      <Items items={[
        ["Then what does the lamp light up", 960, 640, <Wd c={CHALK} s={34}>then what does it light up?</Wd>, { until: "Then he looks at the darkness around it" }],
        ["For lighting up means dispelling darkness", 960, 720, <Wd c={DIM} s={28}>lighting up = dispelling darkness</Wd>, { until: "Then he looks at the darkness around it" }],
        ["does not reach the darkness", 960, 190, <Wd c={CHALK} s={34}>the light never reaches the dark</Wd>, { until: "And he turns the image round" }],
        ["would dispel the darkness of the whole world", 960, 680, <Wd c={DIM} s={30}>or one lamp here would light the whole world</Wd>, { until: "And he turns the image round" }],
        ["then darkness too would hide both itself and others", 960, 190, <Wd c={ROSE} s={34}>then darkness would hide itself too</Wd>, { until: "None of this stops anyone reading by lamplight" }],
        ["None of this stops anyone reading by lamplight", 960, 300, <K c={TEAL}>"the lamp lit the room": it works</K>],
        ["What fails is a lamp with a power of its own", 960, 450, <SK strikeAt={c("What fails is a lamp with a power of its own") + 1.6} c={GOLD}>a lamp with a power of its own</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const MindScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The same lamp came back later, in a debate about the mind", 960, 120, <Wd c={CHALK} s={38} serif>the lamp comes back as mind</Wd>],
        ["every moment of knowing also knows itself", 960, 220, <Wd c={DIM} s={30}>"each knowing also knows itself"</Wd>],
        ["Their favourite example was the lamp", 960, 300, <K c={GOLD}>like a lamp: no second lamp needed</K>],
        ["A sword does not cut itself", 560, 440, <K c={ICE}>a sword does not cut itself</K>],
        ["A fingertip does not touch itself", 1360, 440, <K c={ICE}>a fingertip does not touch itself</K>],
        ["it splits into a knower and a known", 960, 540, <Wd c={DIM} s={30}>turning back splits knower and known</Wd>],
        ["took up the lamp and gave", 960, 620, <Wd c={CHALK} s={30}>Śāntideva: the lamp was never hidden by darkness</Wd>],
        ["Seeing does not see itself", 960, 700, <Wd c={TEAL} s={32}>"seeing does not see itself" · MMK 3.2</Wd>],
        ["it falls to every one of these arguments", 960, 790,
          <SK strikeAt={c("it falls to every one of these arguments") + 1} c={GOLD} s={28}>a clarity that shines on itself</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const AgainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const snd = c("Put a sound in place of the lamp");
  const never = c("Clarity is never missing");
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("Now read that verse again, slowly"), 0.5)}>
        <Reveal text="There is no darkness in the lamp." at={c("Now read that verse again, slowly") + 0.6} size={50} color={GOLD} speed={0.03} /></At>
      <At x={620} y={430} o={ramp(t, c("does not say the lamp is dark"), 0.5) * (1 - ramp(t, never, 0.5))}><Lamp size={0.9} /></At>
      {[0, 1, 2].map((k) => (
        <Ring key={k} x={1300} y={430} p={ramp(t, snd, 0.5) * ((t * 0.6 + k / 3) % 1) * (1 - ramp(t, never, 0.5))} r0={60} r1={230} color={TEAL} width={3} />
      ))}
      <Items items={[
        ["does not say the lamp is dark", 620, 640, <SK strikeAt={c("there is no darkness in it at all")} c={DIM} s={26}>the lamp is dark</SK>, { until: "Clarity is never missing" }],
        ["There is nothing dark in it to be lit", 620, 720, <Wd c={DIM} s={26}>nothing dark in it to be lit</Wd>, { until: "Clarity is never missing" }],
        ["Put a sound in place of the lamp", 1300, 430, <Wd c={TEAL} s={40} serif>sound</Wd>, { until: "Clarity is never missing" }],
        ["waiting for an awareness to light it up", 1300, 640, <SK strikeAt={c("There is not") + 0.3} c={DIM} s={26}>a sound waiting in the dark</SK>, { until: "Clarity is never missing" }],
        ["The sound is clear as it sounds", 1300, 720, <Wd c={TEAL} s={28}>clear as it sounds</Wd>, { until: "Clarity is never missing" }],
        ["Clarity is never missing", 960, 330, <Wd c={GOLD} s={60} serif>Clarity is never missing.</Wd>],
        ["No appearing ever waited in the dark", 960, 440, <Wd c={CHALK} s={32}>no appearing ever waited in the dark</Wd>],
        ["Not another light, and not itself", 960, 520, <Wd c={DIM} s={30}>nothing lights it: not another, not itself</Wd>],
        ["you cannot talk about phenomena without clarity", 960, 640, <K c={VIOLET} s={28}>"you cannot talk about phenomena without clarity"</K>],
        ["Just whether clarity is abstracted out and reified", 960, 720, <K c={VIOLET} s={28}>"just whether clarity is abstracted out and reified"</K>],
        ["A phenomenon is whatever can be known", 960, 800, <Wd c={DIM} s={26}>a phenomenon is whatever can be known</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CornersScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["opens the Middle Way with four corners", 960, 120, <Wd c={DIM} s={30}>not from itself, not from another, not from both, not without a cause</Wd>],
        ["Put the clarity of a sound through the same four corners", 960, 200, <Wd c={CHALK} s={36} serif>the clarity of a sound, through four corners</Wd>],
        ["Lit by itself", 480, 330, <SK strikeAt={c("Lit by another") - 0.4} c={GOLD} s={28}>lit by itself?</SK>],
        ["Lit by another", 1440, 330, <SK strikeAt={c("Lit by both") - 0.4} c={GOLD} s={28}>lit by another?</SK>],
        ["This is the witness, the background, the mirror", 1440, 410, <Wd c={DIM} s={24}>witness · background · mirror</Wd>],
        ["Lit by both", 480, 500, <SK strikeAt={c("Without conditions") - 0.4} c={GOLD} s={28}>lit by both?</SK>],
        ["Without conditions", 1440, 500, <SK strikeAt={c("Block the ear, and there is no sound to be clear")} c={GOLD} s={28}>without conditions?</SK>],
        ["So what is left", 960, 640, <Wd c={TEAL} s={40} serif>the sound, clear as it sounds, on its conditions</Wd>, { d: 1.2 }],
        ["It is a denial: not lit by another", 960, 730, <K c={GREEN}>"self-luminous" = not lit by another</K>],
        ["never had a place to start", 960, 810, <Wd c={DIM} s={26}>"what lights it?" never had a place to start</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DarkScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const seen = c("It is seen, vividly, as dark");
  const bright = c("does not mean bright");
  return (
    <AbsoluteFill>
      <At x={960} y={400} o={ramp(t, c("Sit in a room with the lights off"), 0.6) * (1 - ramp(t, bright, 0.5))}><DarkRoom /></At>
      <At x={960} y={400} o={ramp(t, seen, 0.6) * (1 - ramp(t, bright, 0.5))}>
        <div style={{ width: 528, height: 348, border: `4px solid ${ICE}`, borderRadius: 12, boxShadow: `0 0 26px ${ICE}88` }} /></At>
      <Items items={[
        ["Here is a test anyone can do", 960, 130, <Wd c={CHALK} s={36} serif>the dark room</Wd>],
        ["The darkness", 960, 400, <Wd c={ICE} s={40} serif>dark</Wd>, { until: "does not mean bright" }],
        ["It is a sight, as clear as any other", 960, 660, <Wd c={ICE} s={32}>seen as dark: a sight, clear as any other</Wd>, { until: "does not mean bright" }],
        ["If darkness could hide itself", 960, 740, <Wd c={DIM} s={28}>if darkness hid itself, we could not know it is dark</Wd>, { until: "does not mean bright" }],
        ["does not mean bright", 960, 260, <Wd c={GOLD} s={48} serif>luminous does not mean bright</Wd>],
        ["A dull ache is clear as dull", 960, 400, <K c={ROSE}>a dull ache, clear as dull</K>],
        ["A faint sound is clear as faint", 960, 490, <K c={TEAL}>a faint sound, clear as faint</K>],
        ["Even confusion is known as confusion", 960, 580, <K c={VIOLET}>confusion, known as confusion</K>],
      ]} />
    </AbsoluteFill>
  );
};

const SixScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const streams: [string, string][] = [["seeing", GOLD], ["hearing", TEAL], ["smelling", GREEN], ["tasting", WARM], ["touching", ICE], ["thinking", VIOLET]];
  const lift = c("The mind notices this sameness and lifts it out");
  const left = c("Left as it is, the sameness is not lifted out");
  const up = ramp(t, lift, 1.2) * (1 - ramp(t, left, 1));
  return (
    <AbsoluteFill>
      <Items items={[["Now take the six streams", 960, 120, <Wd c={CHALK} s={36} serif>six streams</Wd>]]} />
      {streams.map(([n, col], i) => (
        <At key={n} x={260 + i * 280} y={560} o={ramp(t, c("Now take the six streams") + 0.3 * i, 0.5)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <Lamp size={0.45} />
            <K c={col} s={24}>{n}</K>
          </div>
        </At>
      ))}
      {streams.map(([n], i) => (
        <Flow key={n} x1={260 + i * 280} y1={470} x2={960} y2={260} color={DIM} p={up} />
      ))}
      <Items items={[
        ["Each is clear on its own conditions", 960, 760, <Wd c={DIM} s={28}>each clear on its own conditions</Wd>, { until: "The mind notices this sameness and lifts it out" }],
        ["There is no single lamp moving from the eye to the ear", 960, 820, <Wd c={DIM} s={26}>no single lamp moving from eye to ear</Wd>, { until: "The mind notices this sameness and lifts it out" }],
        ["The one light in which all six appear", 960, 240, <SK strikeAt={c("put back up on its stand") + 0.8} c={GOLD} s={30}>Awareness · Presence · the one light</SK>, { until: "Left as it is, the sameness is not lifted out", ud: 1.5 }],
        ["Once lifted out, it is taken to stand on its own", 960, 330, <Wd c={DIM} s={26}>a background, a witness, a Mind behind</Wd>, { until: "Left as it is, the sameness is not lifted out" }],
        ["Six lamps, not one", 960, 260, <Wd c={TEAL} s={50} serif>six lamps, not one</Wd>],
        ["And no lamp that lights itself", 960, 340, <Wd c={DIM} s={30}>and no lamp that lights itself</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SuttaScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The early discourse says", 960, 200, <Wd c={DIM} s={28}>AN 1.51 · tr. Ṭhānissaro Bhikkhu</Wd>],
      ["The early discourse says", 960, 300, <Wd c={GOLD} s={44} serif>"Luminous, monks, is the mind."</Wd>, { d: 0.8 }],
      ["and it is defiled by incoming defilements", 960, 380, <Wd c={CHALK} s={34}>"…defiled by incoming defilements."</Wd>],
      ["The mind has no nature of its own for them to belong to", 960, 520, <Wd c={DIM} s={30}>incoming: no nature of its own for them to belong to</Wd>],
      ["Its clarity was never dark", 960, 620, <K c={TEAL}>its clarity was never dark</K>],
    ]} />
  </AbsoluteFill>
);

const BasketScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const basket = c("It is easy to picture this as a lamp under a basket");
  const lift = c("Death lifts them off");
  const logic = c("Read with the logic, three things change");
  const bOut = 1 - ramp(t, logic, 0.5);
  const off = ramp(t, lift, 1.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["The tantras give the lamp its strongest form", 960, 120, <Wd c={CHALK} s={36} serif>the subtle clear light</Wd>],
        ["the coarse elements dissolve one into the next", 960, 210, <Wd c={DIM} s={28}>earth · water · fire · wind dissolve</Wd>, { until: "It is easy to picture this as a lamp under a basket" }],
        ["White, red and black appearances follow", 600, 340, <K c={CHALK} s={26}>white</K>, { until: "It is easy to picture this as a lamp under a basket" }],
        ["White, red and black appearances follow", 860, 340, <K c={ROSE} s={26}>red</K>, { d: 0.4, until: "It is easy to picture this as a lamp under a basket" }],
        ["White, red and black appearances follow", 1100, 340, <K c={DIM} s={26}>black</K>, { d: 0.8, until: "It is easy to picture this as a lamp under a basket" }],
        ["Then comes the clear light", 1350, 340, <K c={GOLD} s={26}>clear light</K>, { until: "It is easy to picture this as a lamp under a basket" }],
      ]} />
      <At x={960} y={460} o={ramp(t, basket, 0.6) * bOut}><Lamp /></At>
      <At x={960} y={400 - 300 * off} o={ramp(t, basket + 0.6, 0.5) * bOut}>
        <div style={{ position: "relative" }}>
          <svg width={320} height={260} viewBox="0 0 320 260" style={{ overflow: "visible" }}>
            <path d="M40 250 L80 20 L240 20 L280 250 Z" fill="rgba(30,25,20,0.9)" stroke={DIM} strokeWidth={5} />
            {[60, 110, 160, 210].map((y) => <line key={y} x1={50 + (250 - y) * 0.17} y1={y} x2={270 - (250 - y) * 0.17} y2={y} stroke={DIM} strokeWidth={3} />)}
          </svg>
          <Strike at={c("The coarse minds were never darkness") + 0.4} />
        </div>
      </At>
      <Items items={[
        ["It is easy to picture this as a lamp under a basket", 960, 740, <Wd c={DIM} s={28}>a lamp under a basket of coarse minds?</Wd>, { until: "Read with the logic, three things change" }],
        ["The teachers themselves say it is not a soul", 960, 210, <Wd c={TEAL} s={30}>not a soul · empty · arising and passing</Wd>, { until: "Read with the logic, three things change" }],
        ["frees nothing", 960, 820, <Wd c={DIM} s={26}>a clear light that does not see emptiness frees nothing</Wd>, { until: "Read with the logic, three things change" }],
        ["Read with the logic, three things change", 960, 220, <Wd c={GOLD} s={40} serif>three things change</Wd>],
        ["Subtle means fewer conditions, not a deeper stuff", 960, 360, <K c={TEAL}>subtle = fewer conditions, not a deeper floor</K>],
        ["The coarse minds were never darkness", 960, 470, <K c={GOLD}>the coarse minds were never darkness</K>],
        ["What the coarse minds add is the knot, not a cover", 960, 550, <Wd c={DIM} s={26}>they add the knot, not a cover</Wd>],
        ["is a stream, neither carried nor cut", 960, 670, <K c={VIOLET}>"without beginning": neither carried nor cut</K>],
      ]} />
    </AbsoluteFill>
  );
};

const KeepScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const split = c("Maintenance is the split");
  const two = c("To keep awareness going, there must be two");
  const caution = c("And a caution, from experience");
  const out = 1 - ramp(t, caution, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Some practice sets out to keep awareness unbroken", 960, 120, <Wd c={CHALK} s={36} serif>awareness 24/7?</Wd>, { until: "And a caution, from experience" }],
        ["through the day, into dream, through deep sleep", 960, 200, <Wd c={DIM} s={28}>day · dream · deep sleep</Wd>, { until: "In whatever case, there cannot be maintenance" }],
        ["In whatever case, there cannot be maintenance", 960, 200, <Wd c={GOLD} s={40} serif>there cannot be maintenance</Wd>, { until: "And a caution, from experience" }],
        ["it must unbind the habitual tendencies of seeing in an inherent pattern", 960, 380, <K c={TEAL} s={26}>unbind the habit of seeing in an inherent pattern</K>, { until: "To keep awareness going, there must be two" }],
        ["Not an effort kept up during sleep", 960, 460, <SK strikeAt={c("The process is effortless")} c={DIM} s={26}>an effort kept up during sleep</SK>, { until: "To keep awareness going, there must be two" }],
        ["A wisdom practice, rather than calm abiding", 960, 560, <Wd c={GREEN} s={32}>wisdom, not calm abiding</Wd>, { until: "To keep awareness going, there must be two" }],
      ]} />
      <At x={960} y={300} o={ramp(t, split, 0.5) * (1 - ramp(t, two, 0.5))}><Wd c={ROSE} s={34}>maintenance is the split</Wd></At>
      <At x={760} y={420} o={ramp(t, two, 0.5) * out}><K c={GOLD}>an awareness</K></At>
      <At x={1160} y={420} o={ramp(t, c("An awareness, and someone keeping it up"), 0.5) * out}>
        <SK strikeAt={c("The very gap that anatta saw through") + 0.5} c={ROSE}>a keeper</SK></At>
      <Items items={[
        ["The very gap that anatta saw through", 960, 530, <Wd c={DIM} s={28}>the gap anatta saw through</Wd>, { until: "And a caution, from experience" }],
        ["What has to go is a habit, not a gap", 960, 640, <Wd c={CHALK} s={32}>a habit goes, not a gap</Wd>, { until: "And a caution, from experience" }],
        ["Effortless is the fruit, not the start", 960, 730, <Wd c={DIM} s={28}>effortless is the fruit, not the start</Wd>, { until: "And a caution, from experience" }],
        ["And a caution, from experience", 960, 200, <Wd c={WARM} s={38} serif>a caution</Wd>],
        ["enormous sleeplessness and energy imbalances", 960, 320, <K c={WARM}>sleeplessness · energy imbalances</K>],
        ["They have to be guided by a qualified master", 960, 420, <Wd c={CHALK} s={30}>only with a qualified master</Wd>],
        ["they are not necessary", 960, 510, <Wd c={DIM} s={28}>not needed for the anatta and emptiness insights</Wd>],
        ["If sleeplessness goes on, see a doctor as well", 960, 600, <Wd c={DIM} s={28}>sleeplessness goes on: see a doctor</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SleepScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["If each instant is complete, sleep is complete as sleep", 960, 160, <Wd c={CHALK} s={40} serif>in sleeping, fully sleep</Wd>],
        ["It needs no witness standing guard", 960, 260,
          <SK strikeAt={c("It needs no witness standing guard") + 1.2} c={DIM} s={28}>a witness standing guard</SK>],
        ["When hungry, I eat", 760, 400, <K c={GOLD}>hungry: eat</K>],
        ["When tired, I sleep", 1160, 400, <K c={VIOLET}>tired: sleep</K>],
        ["Everyone does that, said the questioner", 960, 500, <Wd c={DIM} s={28}>"everyone does that"</Wd>],
        ["Their minds keep running on", 960, 580, <Wd c={DIM} s={28}>…but minds keep running on</Wd>],
        ["The keeper is what stops sleep being sleep", 960, 690, <Wd c={ROSE} s={32}>the keeper stops sleep being sleep</Wd>],
        ["sleeping is fully sleeping, and nothing is lost", 960, 780, <Wd c={TEAL} s={34} serif>sleeping is fully sleeping</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("What is found is the sound, clear as it sounds");
  const out = 1 - ramp(t, end, 0.5);
  return (
    <AbsoluteFill>
      {[0, 1, 2].map((k) => (
        <Ring key={k} x={960} y={420} p={ramp(t, c("Close your eyes, and let a sound come"), 0.5) * ((t * 0.5 + k / 3) % 1) * out} r0={50} r1={260} color={TEAL} width={3} />
      ))}
      <Items items={[
        ["Try it now", 960, 120, <Wd c={CHALK} s={36} serif>try it</Wd>],
        ["Close your eyes, and let a sound come", 960, 200, <Wd c={DIM} s={28}>a fan, a car, rain</Wd>, { until: "What is found is the sound, clear as it sounds" }],
        ["but dark, before awareness reached it", 480, 620, <K c={DIM} s={24}>dark, before awareness?</K>, { until: "What is found is the sound, clear as it sounds" }],
        ["Is the hearing turning back to light itself up", 960, 680, <K c={DIM} s={24}>a second act on the hearing?</K>, { until: "What is found is the sound, clear as it sounds" }],
        ["Is there a light behind the sound", 1440, 620, <K c={DIM} s={24}>a light behind the sound?</K>, { until: "What is found is the sound, clear as it sounds" }],
        ["Then open your eyes in a dim room, and see the dark", 960, 420, <DarkRoom w={300} h={190} />, { until: "What is found is the sound, clear as it sounds" }],
        ["It is clear as dark", 960, 560, <Wd c={ICE} s={30}>clear as dark</Wd>, { until: "What is found is the sound, clear as it sounds" }],
        ["What is found is the sound, clear as it sounds", 960, 300, <Wd c={TEAL} s={38} serif>the sound, clear as it sounds · the dark, clear as dark</Wd>],
        ["No lamp", 760, 440, <SK strikeAt={c("No lamp") + 0.8} c={GOLD}>a lamp</SK>],
        ["And no darkness", 1160, 440, <SK strikeAt={c("And no darkness") + 0.8} c={DIM}>darkness to lift</SK>],
      ]} />
      <At x={960} y={600}><Reveal text="Clear and empty." at={c("Clear and empty")} size={56} color={GOLD} speed={0.04} /></At>
      <At x={960} y={690}><Reveal text="Never a hidden substance." at={c("Never a hidden substance")} size={44} color={CHALK} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Sit by a window and listen to the rain", "dusk", <OpenScene />],
    ["will stop here and ask a hard question", "doubt", <QuestionScene />],
    ["Start with the lamp", "light", <VerseScene />],
    ["The same lamp came back later, in a debate about the mind", "search", <MindScene />],
    ["Now read that verse again, slowly", "whole", <AgainScene />],
    ["opens the Middle Way with four corners", "deep", <CornersScene />],
    ["Here is a test anyone can do", "night", <DarkScene />],
    ["Now take the six streams", "whole", <SixScene />],
    ["The early discourse says", "light", <SuttaScene />],
    ["The tantras give the lamp its strongest form", "deep", <BasketScene />],
    ["Some practice sets out to keep awareness unbroken", "doubt", <KeepScene />],
    ["If each instant is complete, sleep is complete as sleep", "jade", <SleepScene />],
    ["Try it now", "whole", <TryScene />],
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
