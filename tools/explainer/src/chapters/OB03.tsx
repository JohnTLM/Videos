// The Observer and the Taste of Presence, Chapter 3: Ignorance and Its Habit. Explainer drawings timed to the narration.
// Arc: the reader who agreed -> an unkind remark, and someone who was hurt forms -> ignorance as misrecognition, not missing
// information (a fact vs an overlooked seeing) -> a missing belief vs a habit of not seeing -> the moment: contact, seer/seeing/seen,
// a feeling towards or away, reasoning arriving late and defending the frame -> argument in one place, wound in another ->
// insight absorbed: "there is no self" held by a seer again; "who is looking?" presumes a looker -> why logic: something to rest on ->
// the body tightening, then softening -> four supports: grammar, memory, naming, the need for a ground (a floor shown only to dissolve) ->
// not fighting or replacing: a second seer built and crossed out -> a thought noticed as a thought, being wronged as tightness and heat ->
// the seer was never standing where the habit said it stood.
// Stance: the habit is drawn as a pattern that spins, never as a layer beneath things; the seer and any floor appear only to be
// looked for and removed; appearances stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb, PictureFrame, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A reader finishes the first part", "agrees with every line", "The witness was not found", "Vividness did not need a viewer",
  "The next morning someone says something unkind", "someone who was hurt", "someone planning a reply",
  "Nothing in the argument was false", "never reached the place where the habit works",
  "call the root of suffering ignorance", "easy to misread as missing information", "something a teacher could supply",
  "The ignorance meant here is different", "a misrecognition of what is already present", "The nature of appearing is right here",
  "The remedy is not a new fact", "It is a seeing that was overlooked",
  "If ignorance were a missing belief", "an argument could fill the gap", "If it is a habit of not seeing",
  "change a belief about the habit", "The habit carries on",
  "Watch an ordinary moment closely", "Something touches the senses", "arranged into a seer, a seeing and a seen",
  "A feeling follows", "a pull towards, or a pulling away", "Then reasoning begins", "takes that arrangement as the fact",
  "By the time a thought forms", "the thought defends it",
  "So reasoning is not the source", "It arrives late", "argue skilfully against a self", "still be wounded by a slight",
  "The argument happened in one place", "The wound happened in another",
  "Even real insight gets absorbed", "the one who hears is not found", "feels the relief of it",
  "becomes a view to hold and defend", "the one who holds it is the seer again",
  "Analysis works the same way", "The question who is looking", "already presumes a looker",
  "Why go on to logic at all", "most persuasive when nothing challenges it", "shows the frame is assumed, not found",
  "something to rest on", "when feelings run strong",
  "The habit is also felt in the body", "the chest may tighten", "the breath shortens", "attention narrows to a point",
  "When the frame loosens", "the body may soften", "This is something to test",
  "The habit rests on four supports", "Grammar puts a doer behind every act", "Memory treats remembering as proof",
  "Naming turns a useful label into a holder", "Deepest is the need for a ground", "uncertainty feels like falling",
  "a floor is looked for beneath experience",
  "The first step is not to fight the pattern", "replace it with a better picture", "a true self beneath it",
  "would only build a second seer", "to see the pattern as a pattern",
  "A thought of I arises", "it is noticed as a thought", "A feeling of being wronged arises", "noticed as tightness and heat",
  "Nothing is done to it",
  "The looking is enough", "the seer was never standing", "where the habit said it stood",
];

// Book 4 mood: plum and gold, so this series is told apart from the other two
const M = {
  open: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  hurt: { a: "rgba(150,60,80,0.44)", b: "rgba(100,55,125,0.42)", c: "rgba(40,90,120,0.3)" },
  ignorance: { a: "rgba(60,60,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(180,140,60,0.3)" },
  moment: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  insight: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  body: { a: "rgba(150,70,90,0.42)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
  supports: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  free: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
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

/** A person: dashed (looked for, not found) or solid (the felt someone); `solid` 0..1 blends from dashed to filled. */
const Person: React.FC<{ solid?: number; color?: string; size?: number; o?: number }> = ({ solid = 1, color = CHALK, size = 1, o = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o, filter: solid > 0.5 ? `drop-shadow(0 0 12px ${color}88)` : undefined }}>
    <circle cx={90} cy={70} r={48} fill={color} fillOpacity={0.28 * solid} stroke={color} strokeWidth={4 + 2 * solid} strokeDasharray={solid > 0.6 ? undefined : "12 10"} />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill={color} fillOpacity={0.22 * solid} stroke={color} strokeWidth={4 + 2 * solid}
      strokeDasharray={solid > 0.6 ? undefined : "12 10"} />
  </svg>
);

/** An open book. */
const Book: React.FC<{ color?: string; size?: number }> = ({ color = GOLD, size = 1 }) => (
  <svg width={300 * size} height={200 * size} viewBox="0 0 300 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
    <path d="M150 40 Q90 10 20 30 L20 180 Q90 160 150 190 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M150 40 Q210 10 280 30 L280 180 Q210 160 150 190 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    {[0, 1, 2, 3].map((k) => (
      <React.Fragment key={k}>
        <line x1={45} y1={64 + k * 26} x2={125} y2={70 + k * 26} stroke={CHALK} strokeWidth={3} strokeOpacity={0.5} />
        <line x1={175} y1={70 + k * 26} x2={255} y2={64 + k * 26} stroke={CHALK} strokeWidth={3} strokeOpacity={0.5} />
      </React.Fragment>
    ))}
  </svg>
);

/** The habit: a looping arrow that keeps turning. */
const Loop: React.FC<{ size?: number; color?: string; speed?: number }> = ({ size = 1, color = VIOLET, speed = 1 }) => {
  const { t } = useT();
  const a = t * 70 * speed;
  return (
    <svg width={200 * size} height={200 * size} viewBox="-100 -100 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
      <g transform={`rotate(${a})`}>
        <path d="M0 -70 A70 70 0 1 1 -66 -24" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" />
        <path d="M-66 -24 L-82 -54 M-66 -24 L-36 -34" stroke={color} strokeWidth={10} strokeLinecap="round" />
      </g>
    </svg>
  );
};

/** A rounded thought bubble with text. */
const Thought: React.FC<{ text: string; color?: string; size?: number }> = ({ text, color = VIOLET, size = 36 }) => (
  <div style={{ position: "relative" }}>
    <div style={{ padding: "16px 30px", borderRadius: 50, border: `3px solid ${color}`, background: `${color}22`, fontFamily: SERIF, fontSize: size,
      color: CHALK, whiteSpace: "nowrap", boxShadow: `0 0 24px ${color}55` }}>{text}</div>
    <div style={{ position: "absolute", left: 30, bottom: -26, width: 20, height: 20, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}22` }} />
    <div style={{ position: "absolute", left: 14, bottom: -46, width: 12, height: 12, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}22` }} />
  </div>
);

const Eye: React.FC<{ size?: number; color?: string; look?: number }> = ({ size = 1, color = CHALK, look = 0 }) => (
  <svg width={180 * size} height={100 * size} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={90 + look * 30} cy={50} r={22} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} /><circle cx={90 + look * 30} cy={50} r={8} fill={CHALK} />
  </svg>
);

const Ear: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = ICE }) => (
  <svg width={140 * size} height={200 * size} viewBox="0 0 140 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M40 150 Q20 120 22 80 Q26 20 80 16 Q128 16 124 70 Q122 100 96 116 Q80 128 82 150 Q84 184 56 186 Q36 186 34 168"
      fill={`${color}18`} stroke={color} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 80 Q62 52 84 52 Q104 54 100 78 Q96 94 80 98" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

/** A magnifying glass. */
const Lens: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = ICE }) => (
  <svg width={150 * size} height={150 * size} viewBox="0 0 150 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={color} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={color} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

/** Upper body in front view; `tight` 0..1 pulls rings into the chest, `open` 0..1 lets them out. */
const Torso: React.FC<{ tight: number; open: number }> = ({ tight, open }) => {
  const { t } = useT();
  const dir = open > 0.3 ? 1 : -1;
  return (
    <svg width={420} height={520} viewBox="0 0 420 520" style={{ overflow: "visible" }}>
      <circle cx={210} cy={100} r={70} fill={`${CHALK}12`} stroke={CHALK} strokeWidth={5} />
      <path d="M40 510 Q40 230 210 210 Q380 230 380 510" fill={`${CHALK}0d`} stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
      {[0, 1, 2].map((k) => {
        const p = ((t * 0.6 + k / 3) % 1);
        const q = dir > 0 ? p : 1 - p;
        const r = 30 + q * (70 + 90 * open - 40 * tight * (1 - open));
        const col = open > 0.3 ? TEAL : ROSE;
        return <circle key={k} cx={210} cy={330} r={r} fill="none" stroke={col} strokeWidth={4} strokeOpacity={(1 - q) * (0.3 + 0.7 * Math.max(tight, open))} />;
      })}
      <circle cx={210} cy={330} r={22 - 8 * tight * (1 - open) + 8 * open} fill={open > 0.3 ? `${TEAL}88` : `${ROSE}88`} />
    </svg>
  );
};

/** A coiled spark: the touch of contact. */
const Spark: React.FC<{ color?: string }> = ({ color = GOLD }) => {
  const { t } = useT();
  return (
    <svg width={160} height={160} viewBox="-80 -80 160 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${color})` }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={0} y1={-24} x2={0} y2={-56 - 8 * Math.sin(t * 6 + i)} stroke={color} strokeWidth={5} strokeLinecap="round" transform={`rotate(${i * 45})`} />
      ))}
      <circle r={18} fill="#FFF3D1" />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const ReaderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const read = c("A reader finishes the first part"), agree = c("agrees with every line");
  const wit = c("The witness was not found"), viv = c("Vividness did not need a viewer");
  return (
    <AbsoluteFill>
      <At x={760} y={440} s={pop(t, fps, read)}><Book size={1.3} /></At>
      <At x={420} y={470} o={ramp(t, read + 0.3, 0.6)}><Person solid={1} color={TEAL} size={0.9} /></At>
      <At x={760} y={250} o={ramp(t, read + 0.5, 0.5)}><Glow color={GOLD} size={34}>part one, finished</Glow></At>
      {[0, 1, 2].map((i) => (
        <At key={i} x={1000} y={360 + i * 70} o={ramp(t, agree + i * 0.3, 0.3)}><Tick at={agree + i * 0.3} /></At>
      ))}
      <At x={1440} y={380} s={pop(t, fps, wit)}><Chip color={VIOLET} size={34}>the witness: not found</Chip></At>
      <At x={1440} y={500} s={pop(t, fps, viv)}><Chip color={GOLD} size={34}>vividness: no viewer needed</Chip></At>
      <At x={760} y={680} o={ramp(t, agree + 0.4, 0.5)}><Glow color={GREEN} size={34} serif>agreed, line by line</Glow></At>
    </AbsoluteFill>
  );
};

const UnkindScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const unkind = c("The next morning someone says something unkind"), hurt = c("someone who was hurt"), reply = c("someone planning a reply");
  const nf = c("Nothing in the argument was false"), never = c("never reached the place where the habit works");
  const shake = t > unkind + 1.2 && t < unkind + 2 ? Math.sin((t - unkind) * 50) * 6 * (1 - (t - unkind - 1.2) / 0.8) : 0;
  return (
    <AbsoluteFill>
      <At x={320} y={500} s={pop(t, fps, unkind)}><Person solid={1} color={DIM} size={0.9} /></At>
      <At x={520} y={250} s={pop(t, fps, unkind + 0.8)}>
        <svg width={300} height={150} viewBox="0 0 300 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${WARM})` }}>
          <path d="M20 30 L70 10 L110 34 L160 6 L200 32 L270 18 L250 70 L285 110 L200 104 L150 136 L120 106 L40 124 L60 82 Z" fill={`${WARM}33`} stroke={WARM} strokeWidth={5} strokeLinejoin="round" />
          <text x={150} y={80} textAnchor="middle" fontFamily={SERIF} fontSize={40} fill={CHALK}>something unkind</text>
        </svg>
      </At>
      <Flow x1={660} y1={300} x2={880} y2={420} color={WARM} p={ramp(t, unkind + 1.0, 0.5)} />
      <At x={1000 + shake} y={500} o={ramp(t, unkind + 1.0, 0.4)}><Person solid={ramp(t, hurt, 0.9)} color={ROSE} /></At>
      <At x={1000} y={500} o={ramp(t, hurt + 0.6, 0.6) * 0.9}><Loop size={1.9} color={VIOLET} speed={0.6} /></At>
      <At x={1000} y={760} o={ramp(t, hurt + 0.2, 0.5)}><Chip color={ROSE} size={32}>someone who was hurt</Chip></At>
      <At x={1180} y={230} s={pop(t, fps, reply)}><Thought text="and I'll say…" color={VIOLET} size={32} /></At>
      <At x={1600} y={420} s={pop(t, fps, nf)}><Book size={0.8} /></At>
      <At x={1600} y={300} o={ramp(t, nf + 0.4, 0.4)}><Tick at={nf + 0.5} /></At>
      <At x={1600} y={540} o={ramp(t, nf + 0.3, 0.5)}><Glow color={GREEN} size={28}>nothing false</Glow></At>
      <Flow x1={1480} y1={440} x2={1300} y2={480} color={GOLD} p={ramp(t, never, 0.8)} pulses />
      <At x={1290} y={480} o={ramp(t, never + 0.8, 0.4)}><div style={{ width: 16, height: 70, borderRadius: 8, background: DIM }} /></At>
      <At x={1480} y={700} o={ramp(t, never + 0.6, 0.5)}><Glow color={DIM} size={28}>never reached where the habit works</Glow></At>
    </AbsoluteFill>
  );
};

const IgnoranceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const root = c("call the root of suffering ignorance"), mis = c("easy to misread as missing information"), sup = c("something a teacher could supply");
  const diff = c("The ignorance meant here is different"), pres = c("a misrecognition of what is already present");
  const nat = c("The nature of appearing is right here");
  const part2 = diff - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={150} s={pop(t, fps, root)}><Glow color={GOLD} size={80} serif>ignorance</Glow></At>
        <At x={960} y={240} o={ramp(t, root + 0.4, 0.5)}><Glow color={DIM} size={30}>the root of suffering</Glow></At>
        {/* missing information: a page with a blank, and a teacher's card to fill it */}
        <At x={760} y={520} s={pop(t, fps, Math.min(mis, root + 1.0))}>
          <div style={{ width: 380, height: 300, borderRadius: 16, border: `3px solid ${ICE}`, background: `${ICE}12`, padding: 30, boxSizing: "border-box" }}>
            {[0, 1, 2, 3].map((k) => (
              <div key={k} style={{ height: 14, margin: "20px 0", borderRadius: 7, width: k === 2 ? "40%" : "100%", background: `${CHALK}55` }} />
            ))}
            <div style={{ position: "absolute", left: 200, top: 150, width: 140, height: 40, borderRadius: 8, border: `3px dashed ${WARM}` }} />
          </div>
        </At>
        <At x={760} y={720} o={ramp(t, mis + 0.4, 0.5)}><Glow color={ICE} size={30}>missing information?</Glow></At>
        <At x={1340 - 160 * ramp(t, sup + 0.4, 1)} y={520} o={ramp(t, sup, 0.5)}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Chip color={GOLD} size={30}>a fact</Chip><Hand size={110} /></div>
        </At>
        <At x={1360} y={680} o={ramp(t, sup + 0.3, 0.5)}><Glow color={DIM} size={28}>a teacher could supply it</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={130} o={ramp(t, diff, 0.5)}><Glow color={CHALK} size={46} serif>the ignorance meant here</Glow></At>
        <At x={1180} y={460} s={pop(t, fps, diff + 0.3)}><Orb size={170} color={GOLD} core={1} /></At>
        {[0, 1, 2].map((k) => <Ring key={k} x={1180} y={460} p={((t - diff) * 0.4 + k / 3) % 1 * ramp(t, diff + 0.5, 0.4)} r0={90} r1={240} color={GOLD} width={2} />)}
        <At x={560} y={460} o={ramp(t, diff + 0.5, 0.5)} r={180}><Eye look={0.6} /></At>
        <Flow x1={480} y1={460} x2={260} y2={380} color={DIM} p={ramp(t, pres, 0.6)} pulses={false} dash />
        <At x={1180} y={650} o={ramp(t, pres + 0.4, 0.5)}><Chip color={GOLD} size={32}>already present</Chip></At>
        <At x={560} y={650} o={ramp(t, pres + 1.0, 0.5)}><Chip color={VIOLET} size={32}>misrecognised</Chip></At>
        <At x={960} y={790} o={ramp(t, nat, 0.5)}><Glow color={GOLD} size={36} serif>right here, and unrecognised</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const RemedyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fact = c("The remedy is not a new fact"), seen = c("It is a seeing that was overlooked");
  const turn = ramp(t, seen, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, fact, 0.5)}><Glow color={CHALK} size={46} serif>the remedy</Glow></At>
      <Struck x={480} y={460} at={fact + 0.2} strikeAt={fact + 1.3} color={ICE} size={40}>a new fact</Struck>
      <At x={1380} y={450} s={pop(t, fps, fact + 0.2)}><Orb size={170} color={GOLD} core={1} /></At>
      <At x={980} y={450} o={ramp(t, fact + 0.5, 0.5)} r={180 * (1 - turn)}><Eye look={0.6} /></At>
      <Flow x1={1080} y1={450} x2={1280} y2={450} color={GOLD} p={ramp(t, seen + 0.8, 0.6)} />
      <Ring x={1380} y={450} p={ramp(t, seen + 1.2, 1.4)} r0={90} r1={300} color={GOLD} />
      <At x={1180} y={680} o={ramp(t, seen + 0.6, 0.5)}><Chip color={GOLD} size={36}>a seeing that was overlooked</Chip></At>
    </AbsoluteFill>
  );
};

const GapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const miss = c("If ignorance were a missing belief"), fill = c("an argument could fill the gap");
  const habit = c("If it is a habit of not seeing"), change = c("change a belief about the habit"), on = c("The habit carries on");
  const part2 = habit - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  const slide = ramp(t, fill + 0.3, 1.0);
  const sw = ramp(t, change + 0.6, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={150} o={ramp(t, miss, 0.5)}><Glow color={CHALK} size={42} serif>if it were a missing belief…</Glow></At>
        <At x={960} y={430} s={pop(t, fps, miss + 0.2)}>
          <div style={{ display: "flex", gap: 18 }}>
            {[0, 1, 2, 3, 4].map((k) => (
              <div key={k} style={{ width: 150, height: 110, borderRadius: 12, border: `3px ${k === 2 ? "dashed" : "solid"} ${k === 2 ? WARM : TEAL}`,
                background: k === 2 ? "transparent" : `${TEAL}22` }} />
            ))}
          </div>
        </At>
        <At x={960} y={430 - 260 * (1 - slide)} o={ramp(t, fill, 0.4)}>
          <div style={{ width: 150, height: 110, borderRadius: 12, border: `3px solid ${GOLD}`, background: `${GOLD}44`, display: "flex", alignItems: "center",
            justifyContent: "center", fontFamily: SANS, fontSize: 26, color: CHALK }}>argument</div>
        </At>
        <At x={960} y={620} o={ramp(t, fill + 1.3, 0.4)}><Tick at={fill + 1.4} /></At>
        <At x={960} y={720} o={ramp(t, fill + 1.2, 0.5)}><Glow color={GOLD} size={32}>the gap, filled</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={130} o={ramp(t, habit, 0.5)}><Glow color={CHALK} size={42} serif>if it is a habit of not seeing…</Glow></At>
        <At x={760} y={480} s={pop(t, fps, habit + 0.2)}><Loop size={1.6} /></At>
        <At x={760} y={680} o={ramp(t, habit + 0.6, 0.5)}><Glow color={VIOLET} size={30}>the habit</Glow></At>
        <At x={1300} y={400} s={pop(t, fps, change)}>
          <div style={{ position: "relative", width: 380, height: 90 }}>
            <div style={{ position: "absolute", inset: 0, opacity: 1 - sw }}><Chip color={TEAL} size={30}>belief: there is a self</Chip></div>
            <div style={{ position: "absolute", inset: 0, opacity: sw }}><Chip color={GOLD} size={30}>belief: there is no self</Chip></div>
          </div>
        </At>
        <Flow x1={1180} y1={420} x2={880} y2={470} color={GOLD} p={ramp(t, change + 0.3, 0.6)} pulses={false} dash />
        <At x={1300} y={560} o={ramp(t, change + 0.8, 0.5)}><Glow color={DIM} size={28}>only the belief changes</Glow></At>
        <At x={960} y={790} s={pop(t, fps, on)}><Chip color={VIOLET} size={36}>the habit carries on</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const MomentScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const watch = c("Watch an ordinary moment closely"), touch = c("Something touches the senses"), arr = c("arranged into a seer, a seeing and a seen");
  const feel = c("A feeling follows"), pull = c("a pull towards, or a pulling away"), reason = c("Then reasoning begins");
  const fact = c("takes that arrangement as the fact"), forms = c("By the time a thought forms"), def = c("the thought defends it");
  const xs = [300, 720, 1180, 1610];
  const arrive = ramp(t, reason, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, watch, 0.5)}><Glow color={CHALK} size={44} serif>one ordinary moment, slowed down</Glow></At>
      <Svg><DrawPath d="M200 640 L1760 640" p={ramp(t, watch + 0.2, 1.4)} color={DIM} width={3} len={1600} glow={false} /></Svg>
      {["contact", "arranged", "feeling", "reasoning"].map((w, i) => (
        <At key={w} x={xs[i]} y={680} o={ramp(t, [touch, arr, feel, reason][i] + 0.2, 0.4)}><Glow color={DIM} size={26}>{`${i + 1} · ${w}`}</Glow></At>
      ))}
      {/* 1: contact */}
      <At x={xs[0]} y={420} s={pop(t, fps, touch)}><Spark /></At>
      <Ring x={xs[0]} y={420} p={ramp(t, touch + 0.2, 1.2)} r0={40} r1={160} color={GOLD} />
      {/* 2: seer, seeing, seen */}
      {[["seer", ROSE], ["seeing", GOLD], ["seen", TEAL]].map(([w, col], i) => (
        <At key={w} x={xs[1]} y={300 + i * 110} s={pop(t, fps, arr + 0.4 + i * 0.35)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <PictureFrame x={xs[1]} y={410} w={300} h={380} o={ramp(t, forms + 0.3, 0.6)} tag="the frame" />
      {/* 3: towards or away */}
      <At x={xs[2]} y={420} s={pop(t, fps, feel)}><Orb size={90} color={ROSE} /></At>
      <Flow x1={xs[2] - 170} y1={340} x2={xs[2] - 60} y2={390} color={GREEN} p={ramp(t, pull, 0.5)} />
      <Flow x1={xs[2] + 60} y1={450} x2={xs[2] + 170} y2={500} color={WARM} p={ramp(t, pull + 0.8, 0.5)} />
      <At x={xs[2] - 150} y={300} o={ramp(t, pull + 0.2, 0.4)}><Glow color={GREEN} size={26}>towards</Glow></At>
      <At x={xs[2] + 150} y={550} o={ramp(t, pull + 1.0, 0.4)}><Glow color={WARM} size={26}>away</Glow></At>
      {/* 4: reasoning, arriving late */}
      <At x={xs[3] + 300 * (1 - arrive)} y={400} o={ramp(t, reason, 0.4)}><Thought text="reasoning…" color={VIOLET} size={30} /></At>
      <Flow x1={xs[3] - 120} y1={420} x2={xs[1] + 170} y2={420} color={VIOLET} p={ramp(t, fact, 0.8)} dash pulses={false} />
      <At x={1400} y={260} o={ramp(t, fact + 0.4, 0.5)}><Chip color={VIOLET} size={28}>taken as the fact</Chip></At>
      <At x={xs[1] + 210} y={260} s={pop(t, fps, def)}>
        <svg width={90} height={110} viewBox="0 0 90 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${VIOLET})` }}>
          <path d="M45 6 L84 20 Q84 76 45 104 Q6 76 6 20 Z" fill={`${VIOLET}44`} stroke={VIOLET} strokeWidth={5} strokeLinejoin="round" />
        </svg>
      </At>
      <At x={960} y={790} o={ramp(t, def + 0.3, 0.5)}><Glow color={GOLD} size={34} serif>the frame is in place; the thought defends it</Glow></At>
    </AbsoluteFill>
  );
};

const LateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const src = c("So reasoning is not the source"), late = c("It arrives late"), argue = c("argue skilfully against a self");
  const wound = c("still be wounded by a slight"), one = c("The argument happened in one place"), another = c("The wound happened in another");
  const part2 = argue - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  const arrive = ramp(t, late, 1.4);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <Struck x={960} y={150} at={src} strikeAt={src + 1.0} color={VIOLET} size={38}>reasoning as the source</Struck>
        <Svg><DrawPath d="M260 460 L1660 460" p={ramp(t, src + 0.2, 1)} color={DIM} width={4} len={1500} glow={false} /></Svg>
        {[["contact", GOLD, 360], ["frame", ROSE, 720], ["feeling", WARM, 1080]].map(([w, col, x], i) => (
          <At key={w as string} x={x as number} y={460} s={pop(t, fps, src + 0.3 + i * 0.25)}><Chip color={col as string} size={30}>{w}</Chip></At>
        ))}
        <At x={1520 + 300 * (1 - arrive)} y={460} o={ramp(t, late, 0.4)}><Chip color={VIOLET} size={30}>reasoning</Chip></At>
        <At x={1520} y={580} o={ramp(t, late + 1.0, 0.5)}><Glow color={VIOLET} size={32}>it arrives late</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={480} y={420} s={pop(t, fps, argue)}><Book size={0.9} /></At>
        <At x={480} y={250} o={ramp(t, argue + 0.4, 0.5)}><Thought text="there is no self" color={GOLD} size={30} /></At>
        <At x={680} y={420} o={ramp(t, argue + 0.8, 0.3)}><Tick at={argue + 0.9} /></At>
        <At x={1440} y={430} s={pop(t, fps, wound)}>
          <svg width={220} height={200} viewBox="0 0 220 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${ROSE})` }}>
            <path d="M110 190 L20 96 Q-10 50 30 22 Q74 -6 110 44 Q146 -6 190 22 Q230 50 200 96 Z" fill={`${ROSE}44`} stroke={ROSE} strokeWidth={6} strokeLinejoin="round" />
            <DrawPath d="M112 50 L94 92 L124 112 L102 160" p={ramp(t, wound + 0.5, 0.5)} color={CHALK} width={5} len={200} />
          </svg>
        </At>
        <At x={1440} y={250} o={ramp(t, wound + 0.3, 0.5)}><Glow color={ROSE} size={30}>stung by a slight</Glow></At>
        <Svg><DrawPath d="M960 220 L960 700" p={ramp(t, one, 0.8)} color={DIM} width={6} len={500} /></Svg>
        <At x={480} y={640} o={ramp(t, one + 0.3, 0.5)}><Chip color={GOLD} size={32}>the argument: here</Chip></At>
        <At x={1440} y={640} o={ramp(t, another, 0.5)}><Chip color={ROSE} size={32}>the wound: elsewhere</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const InsightScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const abs = c("Even real insight gets absorbed"), hears = c("the one who hears is not found"), relief = c("feels the relief of it");
  const view = c("becomes a view to hold and defend"), again = c("the one who holds it is the seer again");
  const part2 = view - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, abs, 0.5)}><Glow color={CHALK} size={44} serif>even real insight gets absorbed</Glow></At>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={620} y={460} s={pop(t, fps, abs + 0.3)}><Ear size={1.2} /></At>
        {[0, 1, 2].map((k) => <Ring key={k} x={460} y={460} p={((t - abs) * 0.5 + k / 3) % 1 * ramp(t, abs + 0.5, 0.4)} r0={20} r1={130} color={ICE} width={2} />)}
        <At x={1200} y={470} o={ramp(t, hears, 0.5)}><Person solid={0} color={DIM} /></At>
        <Crossed x={1200} y={470} at={hears + 0.9} size={110} />
        <At x={1200} y={700} o={ramp(t, hears + 0.4, 0.5)}><Glow color={DIM} size={28}>the hearer: not found</Glow></At>
        <At x={900} y={470} o={ramp(t, relief, 0.8) * 0.8}>
          <div style={{ width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${GREEN}44, transparent 65%)` }} />
        </At>
        <At x={900} y={790} o={ramp(t, relief + 0.3, 0.5)}><Chip color={GREEN} size={32}>relief</Chip></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={330} s={pop(t, fps, view)}><Chip color={GOLD} size={44}>“there is no self”</Chip></At>
        <At x={980} y={470} o={ramp(t, view + 0.5, 0.5)} r={180}><Hand size={150} /></At>
        <At x={960} y={200} o={ramp(t, view + 0.8, 0.5)}><Glow color={DIM} size={30}>a view to hold and defend</Glow></At>
        <At x={1260} y={520} o={ramp(t, again, 0.5)}><Person solid={ramp(t, again + 0.3, 1.0)} color={ROSE} size={1.05} /></At>
        <At x={1260} y={760} o={ramp(t, again + 0.8, 0.5)}><Chip color={ROSE} size={32}>the holder: the seer again</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const LookerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const an = c("Analysis works the same way"), q = c("The question who is looking"), pre = c("already presumes a looker");
  const u = t * 1.4;
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, an, 0.5)}><Glow color={CHALK} size={44} serif>analysis, the same way</Glow></At>
      <At x={1000 + 120 * Math.cos(u)} y={460 + 60 * Math.sin(u)} s={pop(t, fps, an + 0.2)}><Lens size={1.2} /></At>
      <At x={960} y={260} s={pop(t, fps, q)}><Glow color={ICE} size={54} serif>“who is looking?”</Glow></At>
      <At x={640} y={500} o={ramp(t, pre, 0.6)}><Person solid={0} color={VIOLET} size={1.1} /></At>
      <Flow x1={720} y1={460} x2={900} y2={460} color={VIOLET} p={ramp(t, pre + 0.4, 0.5)} pulses={false} dash />
      <At x={960} y={760} o={ramp(t, pre + 0.5, 0.5)}><Chip color={VIOLET} size={34}>a looker, already presumed</Chip></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const why = c("Why go on to logic at all"), pers = c("most persuasive when nothing challenges it"), shows = c("shows the frame is assumed, not found");
  const rest = c("something to rest on"), strong = c("when feelings run strong");
  const storm = ramp(t, strong, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, why, 0.5)}><Glow color={CHALK} size={44} serif>why logic at all?</Glow></At>
      <At x={480} y={420} s={pop(t, fps, why + 0.3)}><Loop size={1.4 + 0.2 * ramp(t, pers, 1)} /></At>
      <At x={480} y={620} o={ramp(t, pers, 0.5)}><Glow color={VIOLET} size={28}>unchallenged, it persuades</Glow></At>
      <PictureFrame x={1340} y={380} w={420} h={260} o={ramp(t, shows, 0.6)} dashed tag="the frame" />
      <At x={1340} y={340} o={ramp(t, shows + 0.5, 0.4)}><Chip color={GOLD} size={30}>assumed</Chip></At>
      <Struck x={1340} y={430} at={shows + 0.9} strikeAt={shows + 1.6} color={DIM} size={30}>found</Struck>
      {/* when feelings run strong: waves rise, the seeing rests on the argument */}
      <Svg style={{ opacity: ramp(t, rest, 0.6) }}>
        {[0, 1].map((k) => {
          const amp = 10 + 26 * storm;
          let d = `M240 ${700 + k * 30}`;
          for (let x = 240; x <= 1680; x += 40) d += ` L${x} ${700 + k * 30 + Math.sin(x / 70 + t * (2 + 2 * storm) + k) * amp}`;
          return <path key={k} d={d} fill="none" stroke={k ? ROSE : WARM} strokeWidth={5} strokeOpacity={0.6} />;
        })}
      </Svg>
      <At x={960} y={620} o={ramp(t, rest, 0.5)}><div style={{ width: 360, height: 20, borderRadius: 10, background: GOLD, boxShadow: `0 0 18px ${GOLD}` }} /></At>
      <At x={960} y={560 - 30 * (1 - ramp(t, rest + 0.4, 0.8))} o={ramp(t, rest + 0.2, 0.5)}><Orb size={80} color={TEAL} /></At>
      <At x={960} y={480} o={ramp(t, rest + 0.6, 0.5)}><Glow color={TEAL} size={28}>something to rest on</Glow></At>
      <At x={960} y={810} o={ramp(t, strong + 0.3, 0.5)}><Glow color={ROSE} size={30}>when feelings run strong</Glow></At>
    </AbsoluteFill>
  );
};

const BodyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const felt = c("The habit is also felt in the body"), chest = c("the chest may tighten"), breath = c("the breath shortens");
  const att = c("attention narrows to a point"), loos = c("When the frame loosens"), soft = c("the body may soften"), test = c("This is something to test");
  const tight = ramp(t, chest, 0.8), open = ramp(t, soft, 1.2);
  const br = ramp(t, breath, 0.8) * (1 - open);
  const nar = ramp(t, att, 1.0) * (1 - ramp(t, soft + 0.4, 1.2));
  let wave = "M1000 230";
  const wl = 160 - 90 * br, amp = 50 - 26 * br;
  for (let x = 1000; x <= 1700; x += 10) wave += ` L${x} ${230 + Math.sin((x - 1000) / wl * Math.PI * 2 - t * 3) * amp}`;
  const half = 200 * (1 - 0.92 * nar);
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, felt, 0.5)}><Glow color={CHALK} size={42} serif>the habit, felt in the body</Glow></At>
      <At x={520} y={480} s={pop(t, fps, felt + 0.2)}><Torso tight={tight} open={open} /></At>
      <At x={250} y={560} o={ramp(t, chest + 0.2, 0.4)}><Glow color={open > 0.3 ? TEAL : ROSE} size={28}>{open > 0.3 ? "softening" : "chest tightens"}</Glow></At>
      <Svg style={{ opacity: ramp(t, breath - 0.2, 0.5) }}><path d={wave} fill="none" stroke={ICE} strokeWidth={5} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} /></Svg>
      <At x={1350} y={330} o={ramp(t, breath + 0.2, 0.4)}><Glow color={ICE} size={28}>{open > 0.3 ? "breath, easy" : "breath shortens"}</Glow></At>
      <Svg style={{ opacity: ramp(t, att - 0.2, 0.5) }}>
        <path d={`M600 330 L1660 ${560 - half} L1660 ${560 + half} Z`} fill={`${GOLD}22`} stroke={GOLD} strokeWidth={3} strokeOpacity={0.7} />
      </Svg>
      <At x={1350} y={720} o={ramp(t, att + 0.3, 0.4)}><Glow color={GOLD} size={28}>{open > 0.3 ? "attention opens" : "attention narrows"}</Glow></At>
      <At x={960} y={810} o={ramp(t, loos, 0.5) * (1 - ramp(t, test - 0.3, 0.4))}><Chip color={TEAL} size={32}>the frame loosens</Chip></At>
      <At x={860} y={810} o={ramp(t, test, 0.5)}><Chip color={GREEN} size={32}>something to test</Chip></At>
      <At x={1080} y={810} o={ramp(t, test + 0.3, 0.3)}><Tick at={test + 0.4} /></At>
    </AbsoluteFill>
  );
};

const SupportsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const four = c("The habit rests on four supports"), gram = c("Grammar puts a doer behind every act"), mem = c("Memory treats remembering as proof");
  const name = c("Naming turns a useful label into a holder"), deep = c("Deepest is the need for a ground");
  const fall = c("uncertainty feels like falling"), floor = c("a floor is looked for beneath experience");
  const xs = [270, 723, 1177, 1630];
  const ats = [gram, mem, name, deep];
  const active = ats.reduce((a, s, i) => (t >= s - 0.3 ? i : a), -1);
  const gone = ramp(t, floor + 1.3, 1.0);
  const drop = t > fall ? ((t - fall) * 0.9) % 1 : 0;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, four, 0.5)}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}><Loop size={0.45} /><Glow color={CHALK} size={42} serif>four supports of the habit</Glow></div>
      </At>
      {xs.map((x, i) => (
        <React.Fragment key={i}>
          <At x={x} y={460} o={ramp(t, four + 0.3 + i * 0.15, 0.5)}>
            <div style={{ width: 410, height: 470, borderRadius: 20, border: `3px solid ${i === active ? GOLD : `${DIM}66`}`,
              background: i === active ? `${GOLD}12` : "#ffffff05", boxShadow: i === active ? `0 0 30px ${GOLD}44` : undefined }} />
          </At>
          <At x={x} y={250} o={ramp(t, four + 0.3 + i * 0.15, 0.5)}><Glow color={i === active ? GOLD : DIM} size={40} serif>{`${i + 1}`}</Glow></At>
        </React.Fragment>
      ))}
      {/* 1 grammar: a doer slipped in front of every verb */}
      <At x={xs[0]} y={420} s={pop(t, fps, gram)}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", fontFamily: SERIF, fontSize: 36, color: CHALK }}>
          {["sees", "hears", "thinks"].map((v, k) => (
            <div key={v} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 70, height: 44, borderRadius: 8, border: `3px dashed ${ROSE}`, opacity: ramp(t, gram + 0.6 + k * 0.25, 0.3),
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, color: ROSE }}>I</div>{v}
            </div>
          ))}
        </div>
      </At>
      <At x={xs[0]} y={630} o={ramp(t, gram + 0.5, 0.4)}><Glow color={ROSE} size={26}>a doer behind every act</Glow></At>
      {/* 2 memory: remembering taken as proof of a rememberer */}
      <At x={xs[1] + 40} y={390} s={pop(t, fps, mem)}><Thought text="yesterday…" color={TEAL} size={30} /></At>
      <At x={xs[1] - 110} y={500} o={ramp(t, mem + 0.8, 0.5)}><Person solid={0} color={TEAL} size={0.5} /></At>
      <At x={xs[1]} y={630} o={ramp(t, mem + 0.5, 0.4)}><Glow color={TEAL} size={26}>taken as proof of a rememberer</Glow></At>
      {/* 3 naming: a label turned into a holder */}
      <At x={xs[2]} y={420} s={pop(t, fps, name)}>
        <div style={{ position: "relative", width: 240, height: 200 }}>
          <div style={{ position: "absolute", left: 30, top: 30, width: 180, height: 140, borderRadius: 12, border: `4px solid ${GOLD}`,
            opacity: ramp(t, name + 1.0, 0.6), transform: `scale(${0.6 + 0.4 * ramp(t, name + 1.0, 0.6)})`, background: `${GOLD}18` }} />
          <div style={{ position: "absolute", left: 70, top: 76 }}><Chip color={VIOLET} size={30}>“me”</Chip></div>
        </div>
      </At>
      <At x={xs[2]} y={630} o={ramp(t, name + 0.6, 0.4)}><Glow color={GOLD} size={26}>a label turned holder</Glow></At>
      {/* 4 the need for a ground: falling, a floor looked for, and the floor dissolves */}
      <At x={xs[3]} y={330 + 160 * drop * (1 - gone)} s={pop(t, fps, deep)}><Orb size={60} color={ICE} /></At>
      <Svg style={{ opacity: ramp(t, fall, 0.4) * (1 - gone) }}>
        {[-30, 0, 30].map((dx) => <line key={dx} x1={xs[3] + dx} y1={250} x2={xs[3] + dx} y2={300} stroke={ICE} strokeWidth={3} strokeOpacity={0.5} />)}
      </Svg>
      <At x={xs[3]} y={560} o={ramp(t, floor, 0.4) * (1 - gone)} blur={10 * gone}>
        <div style={{ width: 320, height: 26, borderRadius: 6, background: `linear-gradient(180deg, ${WARM}66, #3a1d1d)`, border: `3px dashed ${WARM}` }} />
      </At>
      <At x={xs[3]} y={630} o={ramp(t, deep + 0.4, 0.4) * (1 - gone)}><Glow color={ICE} size={26}>a floor looked for</Glow></At>
      <At x={xs[3]} y={630} o={gone}><Glow color={DIM} size={26}>no floor found</Glow></At>
    </AbsoluteFill>
  );
};

const NotFightScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fight = c("The first step is not to fight the pattern"), rep = c("replace it with a better picture");
  const self = c("a true self beneath it"), second = c("would only build a second seer"), see = c("to see the pattern as a pattern");
  const part2 = self - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  const build = ramp(t, self, 1.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={120} o={ramp(t, fight, 0.5)}><Glow color={CHALK} size={44} serif>the first step</Glow></At>
        <At x={960} y={380} s={pop(t, fps, fight + 0.2)}><Loop size={1.5} /></At>
        <Struck x={560} y={620} at={fight + 0.6} strikeAt={fight + 1.6} color={WARM} size={34}>fight the pattern</Struck>
        <PictureFrame x={1360} y={400} w={260} h={200} o={ramp(t, rep, 0.5)} />
        <At x={1360} y={400} o={ramp(t, rep + 0.2, 0.5)}><Orb size={80} color={GOLD} /></At>
        <Struck x={1360} y={620} at={rep + 0.3} strikeAt={rep + 1.3} color={GOLD} size={34}>a better picture</Struck>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={600} y={250} s={pop(t, fps, self)}><Loop size={0.8} /></At>
        <Svg>
          <DrawPath d="M600 380 m-48 0 a48 48 0 1 0 96 0 a48 48 0 1 0 -96 0" p={build} color={GOLD} width={6} len={320} />
          <DrawPath d="M530 640 Q530 470 600 460 Q670 470 670 640" p={ramp(t, self + 0.6, 1.2)} color={GOLD} width={6} len={460} />
        </Svg>
        <At x={600} y={720} o={ramp(t, self + 0.6, 0.5)}><Glow color={GOLD} size={28}>a true self, beneath?</Glow></At>
        <Crossed x={600} y={510} at={second + 0.4} size={130} />
        <At x={600} y={800} o={ramp(t, second + 0.6, 0.5)}><Chip color={WARM} size={30}>only a second seer</Chip></At>
        <PictureFrame x={1340} y={450} w={460} h={360} o={ramp(t, see, 0.6)} tag="seen as a pattern" />
        <At x={1340} y={450} s={pop(t, fps, see + 0.3)}><Loop size={1.3} /></At>
        <At x={1340} y={720} o={ramp(t, see + 0.8, 0.5)}><Glow color={GREEN} size={32} serif>a pattern, as a pattern</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const NoticeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const th = c("A thought of I arises"), asT = c("it is noticed as a thought"), feel = c("A feeling of being wronged arises");
  const heat = c("noticed as tightness and heat"), none = c("Nothing is done to it");
  const drift = ramp(t, none + 0.4, 2.0);
  return (
    <AbsoluteFill>
      <At x={560} y={330 - 40 * drift} s={pop(t, fps, th)} o={1 - 0.5 * drift}><Thought text="I" color={VIOLET} size={80} /></At>
      <At x={560} y={540} o={ramp(t, asT, 0.5)}><Chip color={VIOLET} size={32}>noticed: a thought</Chip></At>
      <At x={1360} y={420} s={pop(t, fps, feel)}>
        <div style={{ width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${WARM}cc, ${ROSE}55 60%, transparent 75%)`,
          transform: `scale(${1 + 0.06 * Math.sin(t * 5) * (1 - drift)})`, opacity: 1 - 0.5 * drift }} />
      </At>
      <Mist x={1360} y={360} start={feel + 0.3} color={WARM} spread={180} n={16} />
      <At x={1360} y={250} o={ramp(t, feel + 0.4, 0.5)}><Glow color={ROSE} size={30}>wronged</Glow></At>
      <At x={1360} y={620} o={ramp(t, heat, 0.5)}><Chip color={WARM} size={32}>tightness and heat</Chip></At>
      <At x={960} y={780} o={ramp(t, none, 0.5)}><Glow color={GOLD} size={40} serif>nothing is done to it</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const enough = c("The looking is enough"), never = c("the seer was never standing"), where = c("where the habit said it stood");
  const gone = ramp(t, where + 1.0, 1.6);
  const cols = [TEAL, ICE, ROSE, GREEN, GOLD];
  return (
    <AbsoluteFill>
      <At x={360} y={420} s={pop(t, fps, enough)}><Eye /></At>
      <At x={360} y={520} o={ramp(t, enough + 0.3, 0.5)}><Glow color={TEAL} size={30}>looking</Glow></At>
      {cols.map((col, i) => {
        const a = (i / cols.length) * Math.PI * 2 + t * 0.3;
        return <At key={i} x={1100 + 330 * Math.cos(a)} y={430 + 200 * Math.sin(a)} s={pop(t, fps, enough + 0.4 + i * 0.15)}><Orb size={60 + rand(i) * 30} color={col} /></At>;
      })}
      <At x={1100} y={430} o={ramp(t, never, 0.5) * (1 - gone)} blur={8 * gone}><Person solid={0} color={DIM} /></At>
      <Svg style={{ opacity: ramp(t, where, 0.5) }}>
        <DrawPath d="M1060 600 L1140 640 M1140 600 L1060 640" p={ramp(t, where, 0.4)} color={VIOLET} width={6} len={200} />
      </Svg>
      <At x={1100} y={700} o={ramp(t, where + 0.3, 0.5)}><Glow color={VIOLET} size={28}>where the habit said it stood</Glow></At>
      <At x={960} y={800} o={ramp(t, where + 1.4, 0.6)}><Reveal text="never standing there" at={where + 1.4} size={54} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["hurt", c("The next morning someone says something unkind", 0.6)], ["ignorance", c("call the root of suffering ignorance", 0.6)],
    ["moment", c("Watch an ordinary moment closely", 0.6)], ["insight", c("Even real insight gets absorbed", 0.6)],
    ["body", c("The habit is also felt in the body", 0.6)], ["supports", c("The habit rests on four supports", 0.6)],
    ["insight", c("The first step is not to fight the pattern", 0.6)], ["free", c("A thought of I arises", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The next morning someone says something unkind", 0.9)], <ReaderScene />],
    [S("The next morning someone says something unkind", "call the root of suffering ignorance"), <UnkindScene />],
    [S("call the root of suffering ignorance", "The remedy is not a new fact"), <IgnoranceScene />],
    [S("The remedy is not a new fact", "If ignorance were a missing belief"), <RemedyScene />],
    [S("If ignorance were a missing belief", "Watch an ordinary moment closely"), <GapScene />],
    [S("Watch an ordinary moment closely", "So reasoning is not the source"), <MomentScene />],
    [S("So reasoning is not the source", "Even real insight gets absorbed"), <LateScene />],
    [S("Even real insight gets absorbed", "Analysis works the same way"), <InsightScene />],
    [S("Analysis works the same way", "Why go on to logic at all"), <LookerScene />],
    [S("Why go on to logic at all", "The habit is also felt in the body"), <LogicScene />],
    [S("The habit is also felt in the body", "The habit rests on four supports"), <BodyScene />],
    [S("The habit rests on four supports", "The first step is not to fight the pattern"), <SupportsScene />],
    [S("The first step is not to fight the pattern", "A thought of I arises"), <NotFightScene />],
    [S("A thought of I arises", "The looking is enough"), <NoticeScene />],
    [S("The looking is enough", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
