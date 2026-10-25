// The Observer and the Taste of Presence, Chapter 22: Recognition, Not Achievement. Explainer drawings timed to the narration.
// Arc: effort pushing at a circle that is already complete -> not by stopping thought or pushing appearances away; the pin of
// fixing falls out -> recognition is the key: no more by trying harder -> effortlessness made a prize hardens into a thing ->
// negation that erases appearances is still a fixer, on a new object -> recognition does not negate: already not fixed -> two kinds
// of negation: deny and put nothing in place, or deny and install a ground (struck) -> three recognitions: anger reshaped by
// conditions; openness is dependence itself; nothing to hold, the practitioner named on the practising -> the trap: openness held
// as a state, an attitude, a view; the grip opens -> words can only point, then get out of the way -> the book ends where it began:
// the observer not found, vividness without a viewer, every substrate a designation that works -> nothing needs to be produced.
// Stance: openness and emptiness are never drawn as a base or light behind things; the installed ground is drawn only to be struck.
// Appearances stay vivid; the eraser that would deny them is itself crossed out. Recognition is not drawn as climbing.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "There is one thing effort cannot do", "It cannot produce what is already complete",
  "is not produced by stopping thought", "It is not achieved by pushing appearances away", "Thought is recognised as already empty",
  "in that recognition, it stops fixing",
  "Recognition is the key word", "means already complete", "not a state one gets more of by trying harder",
  "treated as an accomplishment, it has become one more fixed object", "needs watching. It is recognised",
  "held as something to maintain, it has been left",
  "The same caution applies to negation", "take emptiness as a view are incurable", "negates appearances until nothing is left",
  "It is only working on a different object",
  "Recognition is different in kind", "It does not negate", "It sees that appearances are already not fixed", "nothing further to do to them",
  "draws a distinction that helps here", "One kind of negation denies, and puts nothing in its place",
  "Another kind denies, and installs a positive ground instead", "Recognition must stay with the first kind",
  "the disease of reification has returned in a new form",
  "Practice, then, turns around three recognitions", "One is that conditions are what work", "Anger is not a thing with its own nature",
  "It reshapes itself when the attention", "the interpretation and the circumstances change",
  "Another is that openness is simply what dependence means", "Practice works because nothing is fixed",
  "And the last is that there is nothing to hold", "The practitioner is named on the practising",
  "The trap remains", "Openness", "can quietly become the new things held", "A state to reach", "An attitude to keep up", "A view to defend",
  "But openness, too, is empty", "It is not something one has", "the absence of what one was holding",
  "Even writing about this is part of the practice", "Words composed from unresolved grasping", "The most a text can do is point",
  "and then get out of the way",
  "So the book ends where it began", "The observer that seemed to stand behind experience has not been found",
  "Vividness has been seen without a viewer", "The substrates, the logics and the ways of seeing", "Each was found to be a designation that works",
  "cannot stand on its own",
  "And nothing needs to be produced",
];

// Book 4 mood: plum and gold
const M = {
  effort: { a: "rgba(170,95,70,0.4)", b: "rgba(100,55,125,0.44)", c: "rgba(40,80,120,0.3)" },
  recog: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,110,130,0.3)" },
  neg: { a: "rgba(60,70,140,0.5)", b: "rgba(110,55,120,0.42)", c: "rgba(40,100,130,0.3)" },
  practice: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  trap: { a: "rgba(110,55,120,0.5)", b: "rgba(170,95,70,0.36)", c: "rgba(40,80,120,0.3)" },
  end: { a: "rgba(195,150,65,0.48)", b: "rgba(100,55,125,0.44)", c: "rgba(50,135,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
const Hand: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M30 92 C18 80 14 66 16 54 L18 40 C19 34 27 34 28 40 L30 52 L30 20 C30 13 39 13 39 20 L40 48 L41 12 C41 5 51 5 51 12 L51 48 L53 16 C53 9 62 9 62 16 L61 50 L64 30 C65 23 74 24 73 31 L69 64 C67 78 60 88 52 92 Z"
      fill="rgba(255,143,163,0.18)" stroke={ROSE} strokeWidth={3.5} strokeLinejoin="round" />
  </svg>
);

const Bubble: React.FC<{ size?: number; color?: string }> = ({ size = 70, color = VIOLET }) => (
  <div style={{ width: size, height: size * 0.78, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}26`, boxShadow: `0 0 18px ${color}66` }} />
);

const Pin: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <svg width={60 * size} height={110 * size} viewBox="0 0 60 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 6px ${WARM})` }}>
    <path d="M14 10 L46 10 L40 46 L52 58 L8 58 L20 46 Z" fill={`${WARM}88`} stroke={WARM} strokeWidth={4} strokeLinejoin="round" />
    <line x1={30} y1={58} x2={30} y2={106} stroke={CHALK} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

const Key: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={260 * size} height={120 * size} viewBox="0 0 260 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD})`, transform: `rotate(${Math.sin(t) * 4}deg)` }}>
      <circle cx={60} cy={60} r={44} fill={`${GOLD}22`} stroke={GOLD} strokeWidth={8} /><circle cx={60} cy={60} r={16} fill="none" stroke={GOLD} strokeWidth={6} />
      <path d="M104 60 L250 60 M210 60 L210 92 M236 60 L236 84" stroke={GOLD} strokeWidth={10} strokeLinecap="round" />
    </svg>
  );
};

const Eraser: React.FC = () => (
  <div style={{ width: 160, height: 80, borderRadius: 12, background: `linear-gradient(90deg, ${ROSE} 0 60%, ${ICE} 60%)`, border: `3px solid ${CHALK}`,
    boxShadow: `0 0 20px ${ROSE}88`, transform: "rotate(-14deg)" }} />
);

const Claws: React.FC<{ open: number; color?: string }> = ({ open, color = WARM }) => (
  <svg width={360} height={300} viewBox="-180 -150 360 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${-50 * open} -60 0) translate(${-60 * open} 0)`}><path d="M-40 -120 Q-150 0 -40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" /></g>
    <g transform={`rotate(${50 * open} 60 0) translate(${60 * open} 0)`}><path d="M40 -120 Q150 0 40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" /></g>
  </svg>
);

const Block: React.FC<{ w?: number; h?: number; label?: string }> = ({ w = 220, h = 110, label }) => (
  <div style={{ width: w, height: h, borderRadius: 10, background: "linear-gradient(180deg, #8a8a8f, #4b4b52)", border: `3px solid ${DIM}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK }}>{label}</div>
);

/** A slab drawn only so it can be struck or dissolved (gone 0..1). */
const Slab: React.FC<{ w: number; label: string; gone: number }> = ({ w, label, gone }) => (
  <div style={{ width: w, height: 64, borderRadius: 10, opacity: 1 - gone, filter: gone > 0.02 ? `blur(${gone * 14}px)` : undefined,
    background: `linear-gradient(180deg, ${VIOLET}55, #2a1838)`, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: SERIF, fontSize: 28, color: CHALK }}>{label}</div>
);

const Tree: React.FC<{ size?: number; vivid?: number }> = ({ size = 1, vivid = 0 }) => {
  const { t } = useT();
  return (
    <svg width={360 * size} height={440 * size} viewBox="0 0 360 440"
      style={{ overflow: "visible", filter: `drop-shadow(0 0 ${14 + vivid * 26}px ${GREEN}${vivid > 0.5 ? "aa" : "66"}) saturate(${1 + vivid * 0.6})` }}>
      <path d="M170 430 L176 260 Q150 220 120 206 M176 290 Q210 240 246 226 M176 330 L182 430" stroke="#C9A06A" strokeWidth={16} fill="none" strokeLinecap="round" />
      {[[180, 150, 120], [104, 200, 80], [262, 196, 84], [180, 76, 84], [128, 118, 70], [236, 112, 70]].map(([x, y, r], i) => (
        <circle key={i} cx={x + Math.sin(t * 1.3 + i) * 5} cy={y + Math.cos(t * 1.1 + i) * 3} r={r}
          fill={i % 2 ? `${GREEN}55` : `${TEAL}44`} stroke={GREEN} strokeWidth={3} strokeOpacity={0.7} />
      ))}
    </svg>
  );
};

/** A row of vivid appearances drifting to the right. */
const FlowRow: React.FC<{ y: number; o: number; x0?: number; x1?: number; n?: number; dim?: number }> = ({ y, o, x0 = 260, x1 = 1660, n = 7, dim = 0 }) => {
  const { t } = useT();
  const cols = [TEAL, ROSE, GOLD, ICE, VIOLET, GREEN];
  const span = x1 - x0;
  return (
    <>
      {Array.from({ length: n }).map((_, i) => {
        const x = x0 + ((i / n) * span + t * 50) % span;
        const edge = Math.min(1, (x - x0) / 80, (x1 - x) / 80);
        return <At key={i} x={x} y={y + Math.sin(t * 1.5 + i) * 14} o={o * Math.max(0, edge) * (1 - 0.8 * dim)}><Orb size={70} color={cols[i % cols.length]} /></At>;
      })}
    </>
  );
};

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

/** Three numbered dots; the active one glows. */
const Three: React.FC<{ active: number; o: number }> = ({ active, o }) => (
  <div style={{ display: "flex", gap: 26, opacity: o }}>
    {[1, 2, 3].map((n) => (
      <div key={n} style={{ width: 54, height: 54, borderRadius: "50%", border: `3px solid ${n === active ? GOLD : DIM}`, display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: SERIF, fontSize: 32, color: n === active ? GOLD : DIM, boxShadow: n === active ? `0 0 18px ${GOLD}` : undefined }}>{n}</div>
    ))}
  </div>
);

// ---------------------------------------------------------------- scenes
const EffortScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const eff = c("There is one thing effort cannot do"), comp = c("It cannot produce what is already complete");
  const push = Math.max(0, Math.sin(t * 3)) * 30 * ramp(t, eff + 0.6, 0.5);
  return (
    <AbsoluteFill>
      <Head text="what effort cannot do" at={eff} y={100} size={70} />
      <Svg>
        <circle cx={1100} cy={480} r={170} fill="none" stroke={GOLD} strokeWidth={8} opacity={ramp(t, eff + 0.3, 0.6)} style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }} />
      </Svg>
      <At x={620 + push} y={480} o={ramp(t, eff + 0.5, 0.5)} r={90}><Hand size={200} /></At>
      {[0, 1, 2].map((i) => <Flow key={i} x1={720 + push} y1={420 + i * 60} x2={900} y2={420 + i * 60} color={WARM} p={ramp(t, eff + 0.8, 0.5)} />)}
      <At x={620} y={680} o={ramp(t, eff + 1.0, 0.5)}><Chip color={WARM} size={32}>effort</Chip></At>
      <At x={1100} y={480} o={ramp(t, comp + 0.6, 0.4)}><Tick at={comp + 0.7} /></At>
      <At x={1100} y={720} s={pop(t, fps, comp + 0.4)}><Chip color={GOLD} size={34}>already complete</Chip></At>
    </AbsoluteFill>
  );
};

const NaturalScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const stop = c("is not produced by stopping thought"), push = c("It is not achieved by pushing appearances away");
  const rec = c("Thought is recognised as already empty"), fix = c("in that recognition, it stops fixing");
  const fall = ramp(t, fix + 0.4, 1.2);
  return (
    <AbsoluteFill>
      <Struck x={560} y={140} at={stop} strikeAt={stop + 1.4} color={VIOLET} size={32}>stopping thought</Struck>
      <Struck x={1360} y={140} at={push} strikeAt={push + 1.6} color={TEAL} size={32}>pushing appearances away</Struck>
      {[0, 1, 2].map((i) => (
        <At key={i} x={360 + i * 150} y={330 + Math.sin(t * 1.4 + i) * 16} o={ramp(t, stop + 0.2 + i * 0.2, 0.5)}><Bubble size={90} color={[VIOLET, ROSE, TEAL][i]} /></At>
      ))}
      <FlowRow y={330} o={ramp(t, push + 0.2, 0.6)} x0={1080} x1={1680} n={4} />
      <At x={960} y={560 + Math.sin(t * 1.3) * 10} s={pop(t, fps, rec)}><Bubble size={220} color={VIOLET} /></At>
      <At x={960} y={460 + 400 * fall} o={ramp(t, rec + 0.2, 0.5) * (1 - fall)} r={180 * fall}><Pin size={1.1} /></At>
      <At x={960} y={700} o={ramp(t, rec + 0.6, 0.5)}><Glow color={GOLD} size={30}>already empty, already not fixed</Glow></At>
      <At x={960} y={790} s={pop(t, fps, fix + 0.6)}><Chip color={GREEN} size={32}>recognised: it stops fixing</Chip></At>
    </AbsoluteFill>
  );
};

const KeyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const key = c("Recognition is the key word"), comp = c("means already complete"), hard = c("not a state one gets more of by trying harder");
  return (
    <AbsoluteFill>
      <At x={960} y={120} s={pop(t, fps, key)}><Glow color={GOLD} size={60} serif>recognition</Glow></At>
      <At x={960} y={290} s={pop(t, fps, key + 0.4)}><Key /></At>
      <Svg><circle cx={560} cy={540} r={110} fill="none" stroke={GOLD} strokeWidth={7} opacity={ramp(t, comp, 0.5)} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} /></Svg>
      <At x={560} y={720} o={ramp(t, comp + 0.3, 0.5)}><Chip color={GOLD} size={30}>already complete</Chip></At>
      <At x={1360} y={540} o={ramp(t, hard - 0.2, 0.5)}>
        <div style={{ width: 70, height: 220, borderRadius: 35, border: `4px solid ${WARM}`, position: "relative", overflow: "hidden", background: "#1a1020" }}>
          <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${30 + 50 * Math.abs(Math.sin(t * 2))}%`, background: `linear-gradient(0deg, ${WARM}, ${GOLD})` }} />
        </div>
      </At>
      <Struck x={1360} y={720} at={hard} strikeAt={hard + 1.6} color={WARM} size={30}>more, by trying harder</Struck>
    </AbsoluteFill>
  );
};

const AccomplishScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const acc = c("treated as an accomplishment, it has become one more fixed object"), watch = c("needs watching. It is recognised");
  const held = c("held as something to maintain, it has been left");
  const solid = ramp(t, acc + 1.0, 1.2), grip = ramp(t, held, 0.8), left = ramp(t, held + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <At x={520} y={140} o={ramp(t, acc - 0.4, 0.5)}><Glow color={CHALK} size={36} serif>made an accomplishment</Glow></At>
      <At x={520} y={420} o={ramp(t, acc - 0.4, 0.5) * (1 - solid)}><Chip color={GOLD} size={36}>effortlessness</Chip></At>
      <At x={520} y={420} o={solid}><Block w={300} label="effortlessness" /></At>
      <At x={520} y={600} o={ramp(t, acc + 1.6, 0.5)}><Glow color={WARM} size={28}>one more fixed object</Glow></At>
      <At x={1360} y={280} s={pop(t, fps, watch - 1.2)}><Glow color={ROSE} size={56} serif>“effortless”</Glow></At>
      <At x={1360} y={400} o={ramp(t, watch, 0.5)}>
        <svg width={180} height={100} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${TEAL})` }}>
          <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${TEAL}10`} stroke={TEAL} strokeWidth={5} strokeLinejoin="round" />
          <circle cx={90 + Math.sin(t * 1.5) * 20} cy={50} r={20} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} />
        </svg>
      </At>
      <At x={1360} y={510} o={ramp(t, watch + 0.4, 0.5)}><Glow color={TEAL} size={28}>even the word needs watching</Glow></At>
      <At x={1360} y={680} o={ramp(t, held - 0.6, 0.5) * (1 - left)} blur={left * 8}><Chip color={GREEN} size={30}>recognised</Chip></At>
      <At x={1360} y={680} o={grip}><Claws open={0.05} /></At>
      <At x={1360} y={820} o={ramp(t, held + 1.2, 0.5)}><Glow color={WARM} size={28}>held to maintain: left</Glow></At>
    </AbsoluteFill>
  );
};

const NegationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neg = c("The same caution applies to negation"), view = c("take emptiness as a view are incurable"), noth = c("negates appearances until nothing is left");
  const obj = c("It is only working on a different object");
  const ex = 300 + 1300 * ramp(t, noth + 0.2, 2.2);
  const erased = (x: number) => (ex > x ? 1 : 0);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, neg, 0.5)}><Glow color={CHALK} size={42} serif>the same caution: negation</Glow></At>
      <At x={960} y={210} s={pop(t, fps, view)}><Chip color={VIOLET} size={32}>emptiness taken as a view</Chip></At>
      <At x={960} y={290} o={ramp(t, view + 0.8, 0.5)}><Glow color={WARM} size={28}>“incurable”</Glow></At>
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 420 + i * 270;
        return <At key={i} x={x} y={480 + Math.sin(t * 1.4 + i) * 10} o={ramp(t, neg + 0.4 + i * 0.1, 0.5) * (1 - 0.85 * erased(x))}>
          <Orb size={90} color={[TEAL, ROSE, GOLD, ICE, GREEN][i]} /></At>;
      })}
      <At x={ex} y={430} o={ramp(t, noth, 0.4) * (1 - ramp(t, obj, 0.5))}><Eraser /></At>
      <At x={960} y={600} o={ramp(t, noth + 2.4, 0.5)}><Glow color={DIM} size={28}>nothing left</Glow></At>
      <At x={960} y={480} o={ramp(t, obj, 0.6)}><Claws open={0.05} /></At>
      <At x={960} y={790} s={pop(t, fps, obj + 0.4)}><Chip color={WARM} size={32}>still a fixer: a new object</Chip></At>
    </AbsoluteFill>
  );
};

const DifferentScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const kind = c("Recognition is different in kind"), nn = c("It does not negate"), already = c("It sees that appearances are already not fixed");
  const nothing = c("nothing further to do to them");
  return (
    <AbsoluteFill>
      <Head text="different in kind" at={kind} y={90} size={70} />
      <FlowRow y={400} o={ramp(t, kind + 0.3, 0.6)} />
      <At x={360} y={620} o={ramp(t, nn - 0.2, 0.4)}><Eraser /></At>
      <Crossed x={360} y={620} at={nn + 0.4} size={80} />
      <At x={960} y={640} s={pop(t, fps, already + 0.6)}><Chip color={GREEN} size={34}>already not fixed</Chip></At>
      <At x={1500} y={640} o={ramp(t, nothing, 0.4)}><Tick at={nothing + 0.1} /></At>
      <At x={960} y={780} o={ramp(t, nothing + 0.3, 0.5)}><Glow color={GOLD} size={32}>nothing further to do to them</Glow></At>
    </AbsoluteFill>
  );
};

const TwoKindsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dist = c("draws a distinction that helps here"), one = c("One kind of negation denies, and puts nothing in its place");
  const two = c("Another kind denies, and installs a positive ground instead"), stay = c("Recognition must stay with the first kind");
  const dis = c("the disease of reification has returned in a new form");
  const g1 = ramp(t, one + 1.8, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, dist, 0.5)}><Glow color={CHALK} size={42} serif>two kinds of negation</Glow></At>
      <div style={{ position: "absolute", left: 230, top: 200, width: 640, height: 480, borderRadius: 24, border: `2px solid ${TEAL}66`, background: `${TEAL}0c`, opacity: ramp(t, one - 0.3, 0.5) }} />
      <div style={{ position: "absolute", left: 1050, top: 200, width: 640, height: 480, borderRadius: 24, border: `2px solid ${WARM}66`, background: `${WARM}0c`, opacity: ramp(t, two - 0.3, 0.5) }} />
      <At x={550} y={380} o={ramp(t, one, 0.4) * (1 - g1)} blur={g1 * 8}><Block w={200} label="a fixed thing" /></At>
      <Crossed x={550} y={380} at={one + 0.9} size={90} />
      <At x={550} y={580} o={ramp(t, one + 1.6, 0.5)}><Glow color={TEAL} size={28}>denies; installs nothing</Glow></At>
      <At x={1370} y={380} o={ramp(t, two, 0.4) * (1 - ramp(t, two + 1.8, 1.0))}><Block w={200} label="a fixed thing" /></At>
      <Crossed x={1370} y={380} at={two + 0.9} size={90} />
      <At x={1370} y={560} o={ramp(t, two + 2.0, 0.6)}><Slab w={520} label="a positive ground" gone={0} /></At>
      <Svg><DrawPath d="M1110 560 L1630 560" p={ramp(t, dis + 0.6, 0.6)} color={WARM} width={7} len={540} /></Svg>
      <At x={1370} y={640} o={ramp(t, dis, 0.5)}><Glow color={WARM} size={26}>reification, in a new form</Glow></At>
      <At x={550} y={650} o={ramp(t, stay, 0.4)}><Tick at={stay + 0.1} /></At>
      <At x={960} y={790} s={pop(t, fps, stay + 0.3)}><Chip color={TEAL} size={32}>recognition stays with the first</Chip></At>
    </AbsoluteFill>
  );
};

const AngerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("Practice, then, turns around three recognitions"), cond = c("One is that conditions are what work");
  const ang = c("Anger is not a thing with its own nature"), att = c("It reshapes itself when the attention");
  const ic = c("the interpretation and the circumstances change");
  const k1 = ramp(t, att + 0.3, 1), k2 = ramp(t, ic, 1), k3 = ramp(t, ic + 1.2, 1);
  const calm = (k1 + k2 + k3) / 3;
  const wob = (i: number) => 1 + (0.25 - 0.18 * calm) * Math.sin(t * (4 - 2.5 * calm) + i * 1.3);
  const pts = Array.from({ length: 10 }).map((_, i) => {
    const a = (i / 10) * Math.PI * 2;
    const r = (120 - 30 * calm) * wob(i);
    return `${Math.cos(a) * r},${Math.sin(a) * r}`;
  }).join(" ");
  const col = calm < 0.5 ? WARM : calm < 0.85 ? ROSE : VIOLET;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, three, 0.5)}><Three active={1} o={1} /></At>
      <At x={960} y={180} o={ramp(t, three + 0.6, 0.5)}><Glow color={CHALK} size={36} serif>three recognitions</Glow></At>
      <At x={960} y={260} s={pop(t, fps, cond)}><Chip color={GOLD} size={32}>conditions are what work</Chip></At>
      {[1, 2, 3].map((n, i) => (
        <At key={n} x={720 + i * 240} y={500} s={pop(t, fps, three + 1.2 + i * 0.35)} o={1 - ramp(t, ang - 0.9, 0.5)}>
          <div style={{ width: 150, height: 150, borderRadius: "50%", border: `4px solid ${n === 1 && t > cond ? GOLD : CHALK}`, background: `${GOLD}1c`,
            boxShadow: `0 0 26px ${GOLD}66`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 80, color: CHALK }}>{n}</div>
        </At>
      ))}
      <At x={960} y={510} o={ramp(t, ang - 0.3, 0.5)}>
        <svg width={320} height={320} viewBox="-160 -160 320 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 20px ${col})` }}>
          <polygon points={pts} fill={`${col}66`} stroke={col} strokeWidth={5} strokeLinejoin="round" />
        </svg>
      </At>
      <At x={960} y={510} o={ramp(t, ang, 0.5)}><Glow color={CHALK} size={36} serif>anger</Glow></At>
      <Struck x={960} y={720} at={ang + 0.3} strikeAt={ang + 1.6} color={WARM} size={30}>a thing with its own nature</Struck>
      <At x={480} y={420} s={pop(t, fps, att + 0.3)}><Chip color={TEAL} size={30}>attention</Chip></At>
      <At x={1440} y={420} s={pop(t, fps, ic)}><Chip color={ICE} size={30}>interpretation</Chip></At>
      <At x={1440} y={600} s={pop(t, fps, ic + 1.2)}><Chip color={GREEN} size={30}>circumstances</Chip></At>
      <Flow x1={600} y1={430} x2={820} y2={490} color={TEAL} p={k1} />
      <Flow x1={1300} y1={430} x2={1100} y2={490} color={ICE} p={k2} />
      <Flow x1={1290} y1={590} x2={1100} y2={540} color={GREEN} p={k3} />
      <At x={480} y={600} o={ramp(t, ic + 2.0, 0.5)}><Glow color={ROSE} size={28}>reshaped by conditions</Glow></At>
    </AbsoluteFill>
  );
};

const OpenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const open = c("Another is that openness is simply what dependence means"), works = c("Practice works because nothing is fixed");
  const nodes: [number, number, string][] = [[620, 380, TEAL], [960, 300, GOLD], [1300, 380, ROSE], [760, 620, VIOLET], [1160, 620, ICE], [960, 470, GREEN]];
  const shift = ramp(t, works + 0.3, 1.2);
  const pos = nodes.map(([x, y], i) => [x + Math.sin(t * 0.8 + i) * 14 + (i === 5 ? 120 * shift : 0), y + Math.cos(t * 0.7 + i) * 10 - (i === 5 ? 60 * shift : 0)]);
  const edges = [[0, 1], [1, 2], [0, 3], [2, 4], [3, 4], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, open, 0.5)}><Three active={2} o={1} /></At>
      {edges.map(([a, b], i) => (
        <Flow key={i} x1={pos[a][0]} y1={pos[a][1]} x2={pos[b][0]} y2={pos[b][1]} color={nodes[a][2]} p={ramp(t, open + 0.4 + i * 0.08, 0.6)} pulses={i % 2 === 0} />
      ))}
      {nodes.map(([, , col], i) => <At key={i} x={pos[i][0]} y={pos[i][1]} s={pop(t, fps, open + 0.2 + i * 0.1)}><Orb size={64} color={col} /></At>)}
      <At x={960} y={720} s={pop(t, fps, open + 1.6)}><Chip color={GOLD} size={32}>openness: what dependence means</Chip></At>
      <At x={960} y={810} o={ramp(t, works, 0.5)}><Glow color={GREEN} size={30}>nothing fixed, so practice works</Glow></At>
    </AbsoluteFill>
  );
};

const HoldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const last = c("And the last is that there is nothing to hold"), named = c("The practitioner is named on the practising");
  const p = (t * 0.25) % 1;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, last, 0.5)}><Three active={3} o={1} /></At>
      <At x={520} y={420} s={pop(t, fps, last + 0.3)}><Hand size={240} /></At>
      <At x={520} y={630} o={ramp(t, last + 0.8, 0.5)}><Chip color={ROSE} size={30}>nothing to hold</Chip></At>
      <Svg>
        <DrawPath d="M1060 520 C1160 360 1300 680 1420 500 S1640 420 1700 520" p={ramp(t, named, 1.2)} color={TEAL} width={6} len={900} />
      </Svg>
      {ramp(t, named + 1, 0.4) > 0 && <At x={1060 + 640 * p} y={520 + Math.sin(p * Math.PI * 3) * 70} o={ramp(t, named + 1, 0.5)}><Orb size={50} color={TEAL} /></At>}
      <At x={1380} y={330} s={pop(t, fps, named + 0.8)}>
        <div style={{ padding: "10px 24px", borderRadius: 10, border: `3px solid ${GOLD}`, background: "#3a2a1dcc", fontFamily: SERIF, fontSize: 34, color: CHALK }}>practitioner</div>
      </At>
      <Svg><line x1={1380} y1={356} x2={1380} y2={470} stroke={GOLD} strokeWidth={3} opacity={ramp(t, named + 1.0, 0.4)} /></Svg>
      <At x={1380} y={680} o={ramp(t, named + 1.6, 0.5)}><Glow color={TEAL} size={28}>named on the practising</Glow></At>
      <At x={960} y={430} o={ramp(t, named + 2.2, 0.5) * (1 - ramp(t, named + 4.2, 1))}><Ghost o={1} size={0.7} /></At>
      <Crossed x={960} y={430} at={named + 3.0} size={70} />
    </AbsoluteFill>
  );
};

const TrapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const trap = c("The trap remains"), op = c("Openness"), held = c("can quietly become the new things held");
  const s1 = c("A state to reach"), s2 = c("An attitude to keep up"), s3 = c("A view to defend");
  const empty = c("But openness, too, is empty"), has = c("It is not something one has"), abs = c("the absence of what one was holding");
  const open = ramp(t, empty + 0.4, 1.2), gone = ramp(t, abs, 1.4);
  const words: [string, string][] = [["openness", GOLD], ["non-holding", TEAL], ["emptiness", VIOLET]];
  const roles: [string, number][] = [["a state to reach", s1], ["an attitude to keep up", s2], ["a view to defend", s3]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} s={pop(t, fps, trap)}><Glow color={WARM} size={52} serif>the trap</Glow></At>
      {words.map(([w, col], i) => {
        const pull = ramp(t, held + 0.4 + i * 0.3, 1.0);
        return (
          <At key={w} x={(560 + i * 400) * (1 - pull) + 960 * pull} y={260 * (1 - pull) + (400 + (i - 1) * 70) * pull} o={ramp(t, op + i * 0.9, 0.5) * (1 - gone)} blur={gone * 8}>
            <Chip color={col} size={30}>{w}</Chip>
          </At>
        );
      })}
      <At x={960} y={400} o={ramp(t, held + 0.6, 0.5)}><Claws open={0.05 + 0.95 * open} /></At>
      {roles.map(([w, at], i) => <At key={w} x={420 + i * 540} y={640} s={pop(t, fps, at)} o={1 - open * 0.6}><Chip color={WARM} size={28}>{w}</Chip></At>)}
      <At x={960} y={250} o={ramp(t, empty, 0.5)}><Glow color={GOLD} size={34} serif>openness, too, is empty</Glow></At>
      <Struck x={960} y={740} at={has - 0.1} strikeAt={has + 1.2} color={GOLD} size={30}>something one has</Struck>
      <At x={960} y={820} o={ramp(t, abs + 0.4, 0.5)}><Glow color={GREEN} size={28}>only the holding, gone</Glow></At>
    </AbsoluteFill>
  );
};

const WritingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wr = c("Even writing about this is part of the practice"), gr = c("Words composed from unresolved grasping");
  const pt = c("The most a text can do is point"), out = c("and then get out of the way");
  const away = ramp(t, out + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, wr, 0.5)}><Glow color={CHALK} size={40} serif>writing, too, is practice</Glow></At>
      <At x={620 - 300 * away} y={460} o={ramp(t, wr + 0.3, 0.5) * (1 - away)} blur={away * 8}>
        <svg width={320} height={400} viewBox="0 0 320 400" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${CHALK}55)` }}>
          <rect x={10} y={10} width={300} height={380} rx={10} fill="#efe6cf" stroke={GOLD} strokeWidth={4} />
          {Array.from({ length: 10 }).map((_, k) => <line key={k} x1={40} y1={50 + k * 32} x2={280 - (k % 3) * 40} y2={50 + k * 32} stroke="#6b5a40" strokeWidth={4} />)}
        </svg>
      </At>
      <At x={620} y={460} o={ramp(t, gr, 0.5) * (1 - ramp(t, pt, 0.6))}><Claws open={0.05} /></At>
      <At x={1000} y={460} o={ramp(t, gr + 1.2, 0.5) * (1 - ramp(t, pt, 0.6))}><Ghost o={1} size={0.7} /></At>
      <At x={1000} y={300} o={ramp(t, gr + 1.6, 0.5) * (1 - ramp(t, pt, 0.6))}><Glow color={WARM} size={26}>a reader who grasps</Glow></At>
      <Svg><DrawPath d="M800 460 L1240 460 M1205 430 L1240 460 L1205 490" p={ramp(t, pt + 0.3, 0.8) * (1 - away)} color={GOLD} width={8} len={560} /></Svg>
      <At x={1440} y={430} s={pop(t, fps, pt + 0.6)}><Tree size={0.8} vivid={away} /></At>
      <At x={1440} y={720} o={ramp(t, pt + 0.4, 0.5)}><Chip color={GOLD} size={30}>point</Chip></At>
      <At x={960} y={800} o={ramp(t, out + 0.4, 0.5)}><Glow color={GREEN} size={30}>then out of the way</Glow></At>
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const began = c("So the book ends where it began"), obs = c("The observer that seemed to stand behind experience has not been found");
  const viv = c("Vividness has been seen without a viewer"), subs = c("The substrates, the logics and the ways of seeing");
  const des = c("Each was found to be a designation that works"), alone = c("cannot stand on its own");
  const items: [string, string][] = [["substrates", VIOLET], ["logics", TEAL], ["ways of seeing", ROSE]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, began, 0.5)}><Glow color={GOLD} size={44} serif>where it began</Glow></At>
      <Svg><DrawPath d="M1180 90 A 60 40 0 1 1 1180 112" p={ramp(t, began + 0.3, 1)} color={GOLD} width={4} len={420} /></Svg>
      <At x={420} y={380} o={ramp(t, began + 1.0, 0.6)}><Ghost o={1} size={0.8} color={CHALK} /></At>
      <Crossed x={420} y={380} at={obs + 2.4} size={90} />
      <At x={420} y={570} o={ramp(t, obs + 2.0, 0.5)}><Glow color={DIM} size={26}>the observer: not found</Glow></At>
      <At x={820} y={380} s={pop(t, fps, obs + 1.6)}><Tree size={0.6} vivid={1} /></At>
      <At x={820} y={570} o={ramp(t, viv + 0.4, 0.5)}><Glow color={GREEN} size={26}>vivid, without a viewer</Glow></At>
      {items.map(([w, col], i) => (
        <React.Fragment key={w}>
          <At x={1400} y={260 + i * 130} s={pop(t, fps, subs + i * 0.6)}><Chip color={col} size={30}>{w}</Chip></At>
          <At x={1640} y={260 + i * 130} o={ramp(t, des + 0.4 + i * 0.3, 0.4)}><Tick at={des + 0.5 + i * 0.3} /></At>
        </React.Fragment>
      ))}
      <At x={1400} y={650} o={ramp(t, des + 0.6, 0.5)}><Chip color={GREEN} size={28}>designations that work</Chip></At>
      <Struck x={960} y={780} at={alone - 0.2} strikeAt={alone + 0.9} color={DIM} size={32}>standing on its own</Struck>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nn = c("And nothing needs to be produced");
  const gone = ramp(t, nn + 0.8, 1.6);
  return (
    <AbsoluteFill>
      <FlowRow y={380} o={ramp(t, nn - 0.4, 0.8)} />
      <At x={960} y={600} o={ramp(t, nn, 0.5) * (1 - gone)} blur={gone * 10}><Block w={260} h={90} label="the habit" /></At>
      <At x={960} y={600} o={ramp(t, nn + 1.6, 0.6)}>
        <div style={{ width: 260, height: 90, borderRadius: 10, border: `3px dashed ${DIM}55` }} />
      </At>
      <At x={960} y={770} o={ramp(t, nn + 2.2, 0.6)}><Reveal text="nothing to put in its place" at={nn + 2.2} size={52} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["effort", 0], ["recog", c("Recognition is the key word", 0.6)], ["neg", c("The same caution applies to negation", 0.6)],
    ["practice", c("Practice, then, turns around three recognitions", 0.6)], ["trap", c("The trap remains", 0.6)],
    ["recog", c("Even writing about this is part of the practice", 0.6)], ["end", c("So the book ends where it began", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("is not produced by stopping thought", 0.9)], <EffortScene />],
    [S("is not produced by stopping thought", "Recognition is the key word"), <NaturalScene />],
    [S("Recognition is the key word", "treated as an accomplishment, it has become one more fixed object", 0.5, 2.6), <KeyScene />],
    [S("treated as an accomplishment, it has become one more fixed object", "The same caution applies to negation", 2.4), <AccomplishScene />],
    [S("The same caution applies to negation", "Recognition is different in kind"), <NegationScene />],
    [S("Recognition is different in kind", "draws a distinction that helps here"), <DifferentScene />],
    [S("draws a distinction that helps here", "Practice, then, turns around three recognitions"), <TwoKindsScene />],
    [S("Practice, then, turns around three recognitions", "Another is that openness is simply what dependence means"), <AngerScene />],
    [S("Another is that openness is simply what dependence means", "And the last is that there is nothing to hold"), <OpenScene />],
    [S("And the last is that there is nothing to hold", "The trap remains"), <HoldScene />],
    [S("The trap remains", "Even writing about this is part of the practice"), <TrapScene />],
    [S("Even writing about this is part of the practice", "So the book ends where it began"), <WritingScene />],
    [S("So the book ends where it began", "And nothing needs to be produced"), <EndScene />],
    [S("And nothing needs to be produced", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
