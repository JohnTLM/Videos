// The Observer and the Taste of Presence, Chapter 1: The Witness Behind Experience. Explainer drawings timed to the narration.
// Arc: rain arriving "at someone" -> the point behind the eyes -> the witness picture (names, looking out) -> the question ->
// the chariot in the courtyard, taken apart -> no chariot over and above the parts -> nothing denied, only an expectation gone ->
// the same looking on the witness: tree and seeing, no viewer -> rain and hearing, no hearer -> not nihilism ->
// seeing, hearing, thinking found; the seer not found apart -> the jolt -> assumed, never confirmed.
// Stance: the witness and any "floor" are drawn only in order to be looked for and not found; appearances stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "It rains", "it seems to arrive at someone", "Behind the eyes", "the world is taken in",
  "Most of us never question this point", "Seeing is someone's seeing", "Thinking is someone's thinking",
  "the self, the I, the one who knows", "a quiet witness", "looking out through the senses",
  "When you look for the witness, what do you find",
  "Begin with a courtyard", "A horse stamps at the gravel", "they will say at once",
  "Now take it apart", "Set the axle aside", "Take away a wheel", "It is not the axle", "the word keeps working", "a heap of wood",
  "Then ask the last question", "over and above the arrangement", "like a seed inside a fruit",
  "Nothing has been denied", "What has gone is an expectation", "The chariot never needed it",
  "Now turn the same looking on the witness", "Look at a tree", "There is the seeing of it", "Now look for the one who sees",
  "You find a tree, and a seeing", "You do not find a viewer",
  "Try it with sound", "Look for the hearer", "The sense of someone listening", "It is not the hearer",
  "This does not mean that nobody sees", "The tree is seen", "You are listening now",
  "What the looking shows is narrower", "Seeing, hearing and thinking are found", "The one who sees is not found apart from the seeing",
  "Many people feel a jolt here", "nothing underneath",
  "For now, notice only this", "it had already been assumed", "nothing that appeared confirmed it",
];

// Book 4 mood: plum and gold, so this series is told apart from the other two
const M = {
  rain: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  witness: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  chariot: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  look: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  found: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
/** Falling rain over the whole frame (o 0..1). */
const Rain: React.FC<{ o: number; n?: number }> = ({ o, n = 70 }) => {
  const { t } = useT();
  return (
    <Svg style={{ opacity: o }}>
      {Array.from({ length: n }).map((_, i) => {
        const x = rand(i) * 1960 - 20, sp = 520 + rand(i + 3) * 380;
        const y = ((rand(i + 7) * 1100 + t * sp) % 1100) - 60;
        return <line key={i} x1={x} y1={y} x2={x - 10} y2={y + 34} stroke={ICE} strokeWidth={2} strokeOpacity={0.25 + rand(i + 1) * 0.35} strokeLinecap="round" />;
      })}
    </Svg>
  );
};

/** A head in profile (facing right) with a glowing point behind the eyes (dot 0..1). */
const HeadProfile: React.FC<{ dot: number; size?: number; color?: string; dotColor?: string }> = ({ dot, size = 1, color = CHALK, dotColor = GOLD }) => (
  <svg width={340 * size} height={420 * size} viewBox="0 0 340 420" style={{ overflow: "visible" }}>
    <path d="M110 400 L120 330 Q60 300 62 210 Q66 70 190 60 Q300 58 300 170 L326 236 L298 244 L300 290 Q296 320 250 316 L242 400"
      fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${color}55)` }} />
    <circle cx={258} cy={170} r={7} fill={color} />
    {dot > 0 && <circle cx={200} cy={168} r={22 * dot} fill={dotColor} style={{ filter: `drop-shadow(0 0 18px ${dotColor})` }} />}
  </svg>
);

/** A simple tree whose leaves sway. */
const Tree: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={360 * size} height={440 * size} viewBox="0 0 360 440" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${GREEN}66)` }}>
      <path d="M170 430 L176 260 Q150 220 120 206 M176 290 Q210 240 246 226 M176 330 L182 430" stroke="#C9A06A" strokeWidth={16} fill="none" strokeLinecap="round" />
      {[[180, 150, 120], [104, 200, 80], [262, 196, 84], [180, 76, 84], [128, 118, 70], [236, 112, 70]].map(([x, y, r], i) => (
        <circle key={i} cx={x + Math.sin(t * 1.3 + i) * 5} cy={y + Math.cos(t * 1.1 + i) * 3} r={r}
          fill={i % 2 ? `${GREEN}55` : `${TEAL}44`} stroke={GREEN} strokeWidth={3} strokeOpacity={0.7} />
      ))}
    </svg>
  );
};

/** A chariot in side view whose body, wheels and pole can be pulled apart (from the Anatta series). */
const Chariot: React.FC<{ apart?: number; color?: string }> = ({ apart = 0, color = GOLD }) => {
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={220} r={62} fill={`${color}18`} {...st} />
      {[0, 1, 2, 3].map((k) => <line key={k} x1={cx + 60 * Math.cos(k * Math.PI / 4)} y1={220 + 60 * Math.sin(k * Math.PI / 4)}
        x2={cx - 60 * Math.cos(k * Math.PI / 4)} y2={220 - 60 * Math.sin(k * Math.PI / 4)} {...st} strokeWidth={3} />)}
    </g>
  );
  return (
    <svg width={460} height={320} viewBox="0 0 460 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}66)` }}>
      <g transform={`translate(${-40 * apart} ${-90 * apart})`}><path d="M90 80 L330 80 L310 170 L110 170 Z" fill={`${color}22`} {...st} /></g>
      <g transform={`translate(${-90 * apart} ${50 * apart})`}>{wheel(140)}</g>
      <g transform={`translate(${90 * apart} ${50 * apart})`}>{wheel(290)}</g>
      <g transform={`translate(0 ${70 * apart})`}><line x1={130} y1={220} x2={300} y2={220} {...st} strokeWidth={8} /></g>
      <g transform={`translate(${120 * apart} ${-30 * apart})`}><path d="M330 140 L450 110" {...st} /></g>
    </svg>
  );
};

/** A small horse head, stamping (bob 0..1). */
const Horse: React.FC<{ color?: string }> = ({ color = CHALK }) => {
  const { t } = useT();
  const b = Math.max(0, Math.sin(t * 3.2)) * 8;
  return (
    <svg width={200} height={230} viewBox="0 0 200 230" style={{ overflow: "visible", transform: `translateY(${-b}px)` }}>
      <path d="M40 220 L60 120 Q60 60 110 40 L120 10 L135 38 Q180 60 186 110 Q190 132 168 134 L130 120 L120 220"
        fill={`${color}12`} stroke={color} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={140} cy={78} r={6} fill={color} />
    </svg>
  );
};

/** Sound waves spreading to the right of (x, y). */
const Waves: React.FC<{ x: number; y: number; o: number; color?: string }> = ({ x, y, o, color = ICE }) => {
  const { t } = useT();
  return (
    <Svg style={{ opacity: o }}>
      {[0, 1, 2, 3].map((i) => {
        const p = ((t * 0.7 + i / 4) % 1);
        const r = 40 + p * 200;
        return <path key={i} d={`M${x + r * Math.cos(-0.7)} ${y + r * Math.sin(-0.7)} A${r} ${r} 0 0 1 ${x + r * Math.cos(0.7)} ${y + r * Math.sin(0.7)}`}
          fill="none" stroke={color} strokeWidth={5} strokeOpacity={1 - p} strokeLinecap="round" />;
      })}
    </Svg>
  );
};

/** A dashed outline of a person: a looked-for viewer or hearer (o 0..1). */
const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Head: React.FC<{ text: string; at: number; y?: number; size?: number; color?: string }> = ({ text, at, y = 150, size = 76, color }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>
    <Reveal text={text} at={at} size={size} color={color} />
  </div>
);

const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      <DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.5)} color={color} width={7} len={70} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const RainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const arrive = c("it seems to arrive at someone"), eyes = c("Behind the eyes"), taken = c("the world is taken in");
  return (
    <AbsoluteFill>
      <Rain o={ramp(t, c("It rains", 0.6), 1.2)} />
      <At x={960} y={520} o={ramp(t, arrive - 0.2, 0.6)} s={0.9 + 0.1 * pop(t, fps, arrive)}><HeadProfile dot={ramp(t, eyes + 0.3, 0.8)} /></At>
      <At x={1320} y={300} o={ramp(t, arrive + 0.3, 0.5)}><Glow color={ICE} size={36}>…arriving at someone?</Glow></At>
      <Ring x={970} y={480} p={ramp(t, eyes + 0.6, 1.6)} r0={20} r1={160} color={GOLD} />
      <At x={600} y={300} o={ramp(t, eyes + 0.2, 0.5)}><Chip color={GOLD} size={34}>a point behind the eyes</Chip></At>
      {[0, 1, 2].map((i) => (
        <Flow key={i} x1={1500 - i * 40} y1={360 + i * 140} x2={1010} y2={480} color={TEAL} p={ramp(t, taken + i * 0.2, 0.8)} />
      ))}
      <At x={1600} y={700} o={ramp(t, taken + 0.4, 0.5)}><Glow color={TEAL} size={32}>the world, taken in</Glow></At>
    </AbsoluteFill>
  );
};

const WitnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seeing = c("Seeing is someone's seeing"), thinking = c("Thinking is someone's thinking");
  const names = c("the self, the I, the one who knows"), quiet = c("a quiet witness"), out = c("looking out through the senses");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Most of us never question this point"), 0.5)}><Glow color={DIM} size={34}>never questioned: it feels obvious</Glow></At>
      <At x={560} y={330} s={pop(t, fps, seeing)}><Chip color={TEAL} size={36}>seeing is someone's seeing</Chip></At>
      <At x={1360} y={330} s={pop(t, fps, thinking)}><Chip color={VIOLET} size={36}>thinking is someone's thinking</Chip></At>
      {["the self", "the I", "the one who knows"].map((n, i) => (
        <At key={n} x={620 + i * 340} y={460} s={pop(t, fps, names + i * 0.5)}><Glow color={GOLD} size={46} serif>{n}</Glow></At>
      ))}
      <At x={640} y={680} o={ramp(t, c("Most of us never question this point") + 0.4, 0.6)}><HeadProfile dot={1} size={0.6} /></At>
      <At x={1300} y={460} o={Math.min(ramp(t, c("Most of us never question this point") + 1.2, 0.5), 1 - ramp(t, seeing - 0.3, 0.4))}><Glow color={GOLD} size={44} serif>“obviously, someone is here”</Glow></At>
      <At x={640} y={820} o={ramp(t, quiet + 0.3, 0.5)}><Glow color={GOLD} size={30}>a quiet witness, behind</Glow></At>
      {[-1, 0, 1].map((k, i) => (
        <Flow key={i} x1={700} y1={670} x2={1250} y2={640 + k * 110} color={GOLD} p={ramp(t, out + i * 0.25, 0.9)} />
      ))}
      <At x={1400} y={650} o={ramp(t, out + 0.6, 0.6)}><Tree size={0.55} /></At>
      <At x={1400} y={820} o={ramp(t, out + 0.9, 0.5)}><Glow color={TEAL} size={30}>a world out there</Glow></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("When you look for the witness, what do you find");
  return (
    <AbsoluteFill>
      <Head text="look for the witness" at={q + 0.1} y={260} size={92} />
      <At x={960} y={560} s={pop(t, fps, q + 1.6)}><Glow color={GOLD} size={150} serif>?</Glow></At>
      <At x={960 + 220 * Math.cos(t * 1.2)} y={560 + 70 * Math.sin(t * 1.2)} o={ramp(t, q + 1.0, 0.6)}>
        <div style={{ width: 110, height: 110, borderRadius: "50%", border: `5px solid ${ICE}`, background: `${ICE}14` }} />
      </At>
    </AbsoluteFill>
  );
};

const CourtyardScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const yard = c("Begin with a courtyard"), horse = c("A horse stamps at the gravel"), say = c("they will say at once");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, yard, 0.5)}><Glow color={DIM} size={34}>a courtyard</Glow></At>
      <Svg><DrawPath d="M260 720 L1660 720" p={ramp(t, yard, 1.2)} color={DIM} width={3} len={1500} glow={false} /></Svg>
      {Array.from({ length: 40 }).map((_, i) => (
        <At key={i} x={280 + rand(i) * 1360} y={735 + rand(i + 4) * 30} o={ramp(t, yard + 0.4, 0.8) * 0.6}>
          <div style={{ width: 8, height: 6, borderRadius: 3, background: DIM }} />
        </At>
      ))}
      <At x={860} y={560} s={pop(t, fps, yard + 0.6)}><Chariot /></At>
      <At x={1330} y={600} o={ramp(t, horse - 0.1, 0.5)}><Horse /></At>
      <At x={860} y={300} s={pop(t, fps, say + 0.3)}><Glow color={GOLD} size={64} serif>“a chariot”</Glow></At>
    </AbsoluteFill>
  );
};

const ApartScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const take = c("Now take it apart"), axle = c("Set the axle aside"), wheel = c("Take away a wheel");
  const notAxle = c("It is not the axle"), works = c("the word keeps working"), heap = c("a heap of wood");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, take, 0.5)}><Glow color={CHALK} size={46} serif>take it apart</Glow></At>
      <At x={960} y={440} s={pop(t, fps, take)}><Chariot apart={0.4 * ramp(t, axle, 1) + 0.6 * ramp(t, wheel, 1.2)} /></At>
      <Struck x={460} y={700} at={notAxle - 0.2} strikeAt={notAxle + 0.6} color={GOLD}>the axle?</Struck>
      <Struck x={800} y={700} at={notAxle + 0.6} strikeAt={notAxle + 1.3} color={GOLD}>a wheel?</Struck>
      <At x={1380} y={680} s={pop(t, fps, works)}><Chip color={TEAL} size={36}>the word keeps working</Chip></At>
      <At x={1380} y={790} o={ramp(t, heap, 0.5)}><Glow color={DIM} size={32}>a chariot, or a heap of wood</Glow></At>
    </AbsoluteFill>
  );
};

const LastQuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const last = c("Then ask the last question"), over = c("over and above the arrangement"), seed = c("like a seed inside a fruit");
  const a = t * 1.3;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, last, 0.5)}><Glow color={CHALK} size={44} serif>a chariot over and above the parts?</Glow></At>
      <At x={700} y={450} s={pop(t, fps, last + 0.3)}><Chariot apart={0.15} /></At>
      <At x={700} y={450} o={ramp(t, over - 0.2, 0.5)}>
        <div style={{ width: 620, height: 420, borderRadius: 24, border: `3px dashed ${GOLD}`, background: `${GOLD}0a` }} />
      </At>
      <At x={700 + 190 * Math.cos(a)} y={450 + 110 * Math.sin(a)} o={ramp(t, over + 0.2, 0.5)}>
        <div style={{ width: 90, height: 90, borderRadius: "50%", border: `5px solid ${ICE}`, background: `${ICE}18` }} />
      </At>
      <At x={1430} y={440} s={pop(t, fps, seed)}>
        <svg width={260} height={260} viewBox="0 0 260 260" style={{ overflow: "visible" }}>
          <circle cx={130} cy={130} r={110} fill={`${ROSE}22`} stroke={ROSE} strokeWidth={5} />
          <ellipse cx={130} cy={135} rx={22} ry={34} fill={`${GOLD}88`} stroke={GOLD} strokeWidth={4} />
        </svg>
      </At>
      <Crossed x={1430} y={440} at={seed + 1.0} size={90} />
      <At x={1430} y={660} o={ramp(t, seed + 0.4, 0.5)}><Glow color={WARM} size={30}>no further thing inside</Glow></At>
    </AbsoluteFill>
  );
};

const NotDeniedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nd = c("Nothing has been denied"), exp = c("What has gone is an expectation"), never = c("The chariot never needed it");
  const gone = ramp(t, exp + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <Head text="nothing denied" at={nd} y={110} size={80} color={GREEN} />
      <At x={960} y={500} s={pop(t, fps, nd + 0.3)}><Chariot /></At>
      <At x={1060} y={430} o={ramp(t, exp, 0.5) * (1 - gone)} blur={6 * gone}>
        <div style={{ width: 520, height: 330, borderRadius: 30, border: `4px dashed ${VIOLET}`, background: `${VIOLET}14` }} />
      </At>
      <At x={1060} y={240} o={ramp(t, exp + 0.3, 0.5) * (1 - gone)}><Glow color={VIOLET} size={34}>a chariot-itself, behind the parts?</Glow></At>
      <At x={960} y={760} o={ramp(t, never, 0.5)}><Glow color={GOLD} size={42} serif>the chariot never needed it</Glow></At>
    </AbsoluteFill>
  );
};

const TreeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tree = c("Look at a tree"), seeing = c("There is the seeing of it"), seer = c("Now look for the one who sees");
  const found = c("You find a tree, and a seeing"), no = c("You do not find a viewer");
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, c("Now turn the same looking on the witness"), 0.5)}><Glow color={CHALK} size={44} serif>the same looking, turned on the witness</Glow></At>
      <At x={1380} y={470} s={pop(t, fps, tree)}><Tree /></At>
      <At x={1380} y={730} o={ramp(t, found, 0.5)}><Chip color={GREEN} size={32}>a tree</Chip></At>
      {[0, 1, 2, 3, 4].map((i) => (
        <Flow key={i} x1={1180} y1={300 + i * 80} x2={760} y2={470} color={GOLD} p={ramp(t, seeing + i * 0.12, 0.8)} pulses={false} />
      ))}
      <At x={900} y={600} o={ramp(t, found + 0.4, 0.5)}><Chip color={GOLD} size={32}>a seeing</Chip></At>
      <At x={560} y={470} o={ramp(t, seer, 0.6)}><Ghost o={1} size={1.1} /></At>
      <At x={560} y={240} o={ramp(t, seer + 0.3, 0.5)}><Glow color={DIM} size={30}>a viewer, apart from both?</Glow></At>
      <Crossed x={560} y={470} at={no + 0.3} size={110} />
    </AbsoluteFill>
  );
};

const SoundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sound = c("Try it with sound"), hearer = c("Look for the hearer"), sense = c("The sense of someone listening"), not = c("It is not the hearer");
  const bubble = Math.min(ramp(t, sense, 0.5), 1 - ramp(t, sense + 3.2, 0.8));
  return (
    <AbsoluteFill>
      <Rain o={ramp(t, sound, 1) * 0.7} n={50} />
      <At x={960} y={110} o={ramp(t, sound, 0.5)}><Glow color={ICE} size={44} serif>the rain is heard</Glow></At>
      <Waves x={560} y={460} o={ramp(t, sound + 0.4, 0.8)} />
      <At x={500} y={460} s={pop(t, fps, sound + 0.3)}><Orb size={70} color={ICE} /></At>
      <At x={980} y={720} o={ramp(t, hearer + 0.4, 0.5)}><Chip color={ICE} size={32}>the rain, and the hearing of it</Chip></At>
      <At x={1380} y={460} o={ramp(t, hearer, 0.6)}><Ghost o={1} /></At>
      <At x={1380} y={250} o={bubble} s={0.9 + 0.1 * bubble}>
        <div style={{ padding: "14px 26px", borderRadius: 40, border: `3px solid ${VIOLET}`, background: `${VIOLET}22`, fontFamily: SERIF, fontSize: 34, color: CHALK }}>
          “someone is listening”
        </div>
      </At>
      <At x={1380} y={150} o={ramp(t, sense + 1.4, 0.5) * bubble}><Glow color={DIM} size={26}>a thought, coming and going</Glow></At>
      <Crossed x={1380} y={460} at={not + 0.2} size={100} />
    </AbsoluteFill>
  );
};

const StillWorksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const not = c("This does not mean that nobody sees"), seen = c("The tree is seen"), now = c("You are listening now");
  return (
    <AbsoluteFill>
      <Struck x={960} y={150} at={not} strikeAt={not + 1.6} color={WARM} size={40}>nobody sees</Struck>
      <At x={560} y={450} s={pop(t, fps, seen)}><Tree size={0.75} /></At>
      <At x={700} y={640} o={ramp(t, seen + 0.3, 0.4)}><Tick at={seen + 0.4} /></At>
      <Rain o={0} />
      <At x={1360} y={450} s={pop(t, fps, seen + 1.2)}><Orb size={90} color={ICE} /></At>
      <Waves x={1420} y={450} o={ramp(t, seen + 1.3, 0.6)} />
      <At x={1360} y={640} o={ramp(t, seen + 1.5, 0.4)}><Tick at={seen + 1.6} /></At>
      <At x={960} y={780} o={ramp(t, now, 0.5)}><Glow color={GOLD} size={40} serif>it works well enough to act on</Glow></At>
    </AbsoluteFill>
  );
};

const NarrowerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nar = c("What the looking shows is narrower"), found = c("Seeing, hearing and thinking are found");
  const seer = c("The one who sees is not found apart from the seeing");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, nar, 0.5)}><Glow color={CHALK} size={44} serif>what the looking shows</Glow></At>
      <At x={960} y={440} o={Math.min(ramp(t, nar + 0.8, 0.5), 1 - ramp(t, found - 0.4, 0.5))}><Ghost o={1} size={1.1} /></At>
      <At x={960} y={250} o={Math.min(ramp(t, nar + 1.2, 0.5), 1 - ramp(t, found - 0.4, 0.5))}><Glow color={DIM} size={32}>the observer, as a separate thing?</Glow></At>
      {t < found - 0.2 && <Crossed x={960} y={440} at={nar + 3.4} size={110} />}
      {[["seeing", TEAL], ["hearing", ICE], ["thinking", VIOLET]].map(([w, col], i) => (
        <At key={w} x={560 + i * 400} y={380} s={pop(t, fps, found + i * 0.35)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <Orb size={90} color={col} /><Glow color={col} size={44} serif>{w}</Glow>
          </div>
        </At>
      ))}
      <At x={960} y={540} o={ramp(t, found + 1.4, 0.5)}><Chip color={GREEN} size={34}>found: vivid, and they work</Chip></At>
      <Struck x={960} y={700} at={seer} strikeAt={seer + 2.0} color={DIM} size={36}>a seer, apart from the seeing</Struck>
    </AbsoluteFill>
  );
};

const JoltScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const jolt = c("Many people feel a jolt here"), under = c("nothing underneath");
  const shake = t > jolt && t < jolt + 0.8 ? Math.sin((t - jolt) * 50) * 10 * (1 - (t - jolt) / 0.8) : 0;
  const gone = ramp(t, under + 0.8, 1.4);
  return (
    <AbsoluteFill style={{ transform: `translateX(${shake}px)` }}>
      <At x={960} y={130} s={pop(t, fps, jolt)}><Glow color={WARM} size={54} serif>a jolt</Glow></At>
      <At x={960} y={400} o={ramp(t, jolt + 0.4, 0.6)}>
        <div style={{ display: "flex", gap: 60 }}>{[TEAL, ICE, VIOLET, GREEN].map((col, i) => <Orb key={i} size={60} color={col} />)}</div>
      </At>
      <At x={960} y={520} o={ramp(t, jolt + 0.8, 0.5) * (1 - gone)} blur={8 * gone}>
        <div style={{ width: 760, height: 60, borderRadius: 8, background: `linear-gradient(180deg, ${WARM}66, #3a1d1d)`, border: `3px solid ${WARM}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK }}>the witness, as a floor</div>
      </At>
      <At x={960} y={680} o={ramp(t, under, 0.5)}><Glow color={DIM} size={36}>nothing underneath?</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const now = c("For now, notice only this"), assumed = c("it had already been assumed"), conf = c("nothing that appeared confirmed it");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, now, 0.5)}><Glow color={DIM} size={36}>notice only this</Glow></At>
      <At x={620} y={460} o={ramp(t, now + 0.5, 0.6)}><Ghost o={1} color={VIOLET} size={1.1} /></At>
      <At x={620 + 170 * Math.cos(t * 1.3)} y={440 + 90 * Math.sin(t * 1.3)} o={Math.min(ramp(t, now + 0.9, 0.5), 1 - ramp(t, assumed + 0.6, 0.6))}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", border: `5px solid ${ICE}`, background: `${ICE}18` }} />
      </At>
      <At x={620} y={700} s={pop(t, fps, assumed)}><Chip color={VIOLET} size={34}>assumed each time</Chip></At>
      <At x={1300} y={460} o={ramp(t, conf - 0.2, 0.6)}>
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}><Tree size={0.45} /><Orb size={70} color={ICE} /></div>
      </At>
      <At x={1300} y={700} s={pop(t, fps, conf + 0.4)}><Chip color={GOLD} size={34}>never confirmed by what appears</Chip></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["rain", 0], ["witness", c("Most of us never question this point", 0.6)], ["chariot", c("Begin with a courtyard", 0.6)],
    ["look", c("Now turn the same looking on the witness", 0.6)], ["found", c("This does not mean that nobody sees", 0.6)],
    ["witness", c("Many people feel a jolt here", 0.6)], ["found", c("For now, notice only this", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Most of us never question this point", 0.9)], <RainScene />],
    [S("Most of us never question this point", "When you look for the witness, what do you find"), <WitnessScene />],
    [S("When you look for the witness, what do you find", "Begin with a courtyard"), <QuestionScene />],
    [S("Begin with a courtyard", "Now take it apart"), <CourtyardScene />],
    [S("Now take it apart", "Then ask the last question"), <ApartScene />],
    [S("Then ask the last question", "Nothing has been denied"), <LastQuestionScene />],
    [S("Nothing has been denied", "Now turn the same looking on the witness"), <NotDeniedScene />],
    [S("Now turn the same looking on the witness", "Try it with sound"), <TreeScene />],
    [S("Try it with sound", "This does not mean that nobody sees"), <SoundScene />],
    [S("This does not mean that nobody sees", "What the looking shows is narrower"), <StillWorksScene />],
    [S("What the looking shows is narrower", "Many people feel a jolt here"), <NarrowerScene />],
    [S("Many people feel a jolt here", "For now, notice only this"), <JoltScene />],
    [S("For now, notice only this", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
