// The Observer and the Taste of Presence, Chapter 14: Reification and Svabhava as Stance. Explainer drawings timed to the narration.
// Arc: where does a ground come from? not from appearances -> two steps -> abstraction: "chariot" drawn out across assemblies,
// "presence" across experiences -> reification: the idea taken as a thing, slid beneath the particulars -> examined, not found:
// the ground was never there -> exclusion: a general idea by what it is not; a commonality taken as ground = own nature ->
// not in the content but in the stance -> the same red held two ways: as a ground, or simply appearing -> presence no foundation,
// relating through and through -> the habit: naming vanishes into the named -> looking loosens it -> a way of relating that works.
// Stance: a ground is drawn only as the product of reification, and then dissolved; the red stays vivid either way.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SANS, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Where does a ground come from", "Not from the appearances themselves", "many, particular, and bound up in relation", "It comes from two steps",
  "The first step is abstraction", "A common feature is drawn out from the particulars", "the same across many assemblies of parts",
  "across many experiences", "Language, memory and ordinary life depend on it",
  "The second step is reification", "treating an idea as a thing", "taken to exist in its own right", "stand beneath the particulars, grounding them",
  "Only this second step creates the sense",
  "that unity is not found apart from the faces", "The ground was never there", "produced by reifying a useful abstraction",
  "exclusion, is a helpful companion here", "a general idea is understood by excluding what it is not", "It does not point to a real common essence",
  "the Middle Way school, presses further", "A commonality taken as a ground has become", "own nature, a being that stands on its own",
  "is not found in the content of an experience", "can be exactly as vivid either way", "is a matter of stance", "how the appearing is held",
  "existing from its own side, independent of conditions", "the foundation from which other things get their being",
  "The same red can be held in two ways", "In one, it is taken as a ground", "Everything else is measured against it",
  "In the other, it simply appears", "It relates to light, to the eye, to attention", "nothing is placed beneath it",
  "The second is dependent origination", "The red is the same", "The difference lies entirely in the stance",
  "the taste of presence cannot be a foundation", "Seen without anything standing behind it", "dependent through and through",
  "Its immediacy is that of something relating",
  "why the habit is hard to see", "Through language, perception and emotion", "a thing with a fixed character",
  "the naming disappears into what is named", "It is assumed, each time an appearance is met",
  "Repeated looking loosens the assumption", "Each time the forming is watched", "the framework is seen to be added, not found",
  "What was taken as a fact about the world", "a way of relating to it", "A way that works", "without needing to be true from its own side",
];

const M = {
  steps: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  reify: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  stance: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  red: { a: "rgba(170,60,70,0.42)", b: "rgba(100,55,125,0.42)", c: "rgba(180,140,60,0.3)" },
  open: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
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

/** A chariot in side view whose body, wheels and pole can be pulled apart. */
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

const Eye: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = CHALK }) => (
  <svg width={180 * size} height={100 * size} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={90} cy={50} r={22} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} /><circle cx={90} cy={50} r={8} fill={CHALK} />
  </svg>
);

const RedSquare: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <div style={{ width: size, height: size, borderRadius: size * 0.1, background: "radial-gradient(circle at 40% 35%, #ff6f6f, #c0202e)", boxShadow: "0 0 60px #ff3b4a88" }} />
);

/** A word tag on a short string. */
const Tag: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <div style={{ fontFamily: SANS, fontSize: 28, color: CHALK, padding: "4px 14px", borderRadius: 8, border: `2px solid ${color}`, background: `${color}22`, whiteSpace: "nowrap" }}>{text}</div>
);

/** A ground slab (o 0..1, dissolving with gone 0..1). */
const Slab: React.FC<{ w: number; label: string; color?: string; gone?: number; solid?: boolean }> = ({ w, label, color = WARM, gone = 0, solid }) => (
  <div style={{ width: w, height: 64, borderRadius: 8, opacity: 1 - gone, filter: gone > 0.02 ? `blur(${gone * 12}px)` : undefined,
    background: solid ? `linear-gradient(180deg, ${color}77, #3a1d1d)` : `${color}18`, border: `3px ${solid ? "solid" : "dashed"} ${color}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 32, color: CHALK }}>{label}</div>
);

// ---------------------------------------------------------------- scenes
const WhereScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Where does a ground come from"), notf = c("Not from the appearances themselves"), many = c("many, particular, and bound up in relation");
  const two = c("It comes from two steps");
  const pts = Array.from({ length: 9 }).map((_, i) => [420 + (i % 5) * 270 + (i > 4 ? 135 : 0) + Math.sin(t * 0.8 + i) * 10, 330 + (i > 4 ? 170 : 0) + Math.cos(t * 0.7 + i) * 8] as const);
  const cols = [TEAL, ROSE, GOLD, VIOLET, ICE, GREEN, ROSE, TEAL, GOLD];
  return (
    <AbsoluteFill>
      <Head text="where does a ground come from?" at={q} y={90} size={64} />
      <At x={960} y={690} o={ramp(t, q + 0.8, 0.5) * (1 - ramp(t, notf + 0.8, 0.6))}><Slab w={1100} label="a ground?" /></At>
      {pts.map(([x, y], i) => i < 8 && <Flow key={`f${i}`} x1={x} y1={y} x2={pts[i + 1][0]} y2={pts[i + 1][1]} color={DIM} p={ramp(t, many + 0.6, 0.8)} pulses={i % 2 === 0} />)}
      {pts.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, notf + i * 0.12)}><Orb size={50 + rand(i) * 40} color={cols[i]} /></At>)}
      <At x={960} y={620} o={ramp(t, many, 0.5)}><Glow color={CHALK} size={32}>many, particular, related</Glow></At>
      <At x={760} y={780} s={pop(t, fps, two + 0.2)}><Chip color={GOLD} size={34}>step 1</Chip></At>
      <At x={1160} y={780} s={pop(t, fps, two + 0.6)}><Chip color={WARM} size={34}>step 2</Chip></At>
    </AbsoluteFill>
  );
};

const AbstractionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ab = c("The first step is abstraction"), drawn = c("A common feature is drawn out from the particulars"), ch = c("the same across many assemblies of parts");
  const pres = c("across many experiences"), lang = c("Language, memory and ordinary life depend on it");
  const cols = [GOLD, TEAL, ROSE];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, ab, 0.5)}><Glow color={GOLD} size={46} serif>step 1: abstraction</Glow></At>
      {cols.map((col, i) => (
        <At key={i} x={360 + i * 300} y={560} s={pop(t, fps, drawn + i * 0.3) * (0.5 + i * 0.04)} r={(i - 1) * 4}><Chariot color={col} apart={i * 0.08} /></At>
      ))}
      {cols.map((col, i) => <Flow key={i} x1={360 + i * 300} y1={470} x2={660} y2={300} color={col} p={ramp(t, ch + i * 0.2, 0.6)} />)}
      <At x={660} y={270} s={pop(t, fps, ch + 0.6)}><Glow color={GOLD} size={56} serif>“chariot”</Glow></At>
      {[ICE, VIOLET, GREEN].map((col, i) => (
        <At key={i} x={1340 + i * 160} y={560 + Math.sin(t + i) * 8} s={pop(t, fps, pres + i * 0.3)}><Orb size={80} color={col} /></At>
      ))}
      {[ICE, VIOLET, GREEN].map((col, i) => <Flow key={i} x1={1340 + i * 160} y1={510} x2={1500} y2={300} color={col} p={ramp(t, pres + 0.3 + i * 0.2, 0.6)} />)}
      <At x={1500} y={270} s={pop(t, fps, pres + 0.9)}><Glow color={VIOLET} size={56} serif>“presence”</Glow></At>
      <At x={960} y={790} s={pop(t, fps, lang)}><Chip color={GREEN} size={32}>useful: language, memory, daily life</Chip></At>
    </AbsoluteFill>
  );
};

const ReifyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const re = c("The second step is reification"), idea = c("treating an idea as a thing"), own = c("taken to exist in its own right");
  const beneath = c("stand beneath the particulars, grounding them"), only = c("Only this second step creates the sense");
  const sink = ramp(t, beneath, 1.4);
  const solid = ramp(t, own, 0.8);
  const cols = [GOLD, TEAL, ROSE];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, re, 0.5)}><Glow color={WARM} size={46} serif>step 2: reification</Glow></At>
      {cols.map((col, i) => (
        <At key={i} x={560 + i * 400} y={480} s={0.5 + 0.02 * i} r={(i - 1) * 4}><Chariot color={col} apart={i * 0.08} /></At>
      ))}
      <At x={960} y={260 + 420 * sink} s={pop(t, fps, re + 0.3)}>
        {solid < 0.05
          ? <Glow color={GOLD} size={56} serif>“chariot”</Glow>
          : <div style={{ width: 300 + 900 * sink, height: 70, borderRadius: 10, background: `linear-gradient(180deg, ${WARM}${solid > 0.5 ? "99" : "44"}, #3a1d1d)`,
              border: `3px solid ${WARM}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: CHALK,
              boxShadow: `0 0 30px ${WARM}66` }}>“chariot”, a thing</div>}
      </At>
      <At x={1500} y={220} o={ramp(t, idea, 0.5)}><Chip color={WARM} size={30}>an idea, as a thing</Chip></At>
      <At x={420} y={220} o={ramp(t, own, 0.5)}><Chip color={WARM} size={30}>existing in its own right</Chip></At>
      <At x={960} y={790} o={ramp(t, only, 0.5)}><Glow color={WARM} size={32}>only this step makes “something behind”</Glow></At>
    </AbsoluteFill>
  );
};

const NeverScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const unity = c("that unity is not found apart from the faces"), never = c("The ground was never there"), prod = c("produced by reifying a useful abstraction");
  const gone = ramp(t, never, 1.4);
  const cols = [GOLD, TEAL, ROSE];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, unity, 0.5)}><Glow color={CHALK} size={42} serif>examined: not found apart from its faces</Glow></At>
      {cols.map((col, i) => (
        <At key={i} x={560 + i * 400} y={440 + Math.sin(t * 1.2 + i) * 6} s={0.5 + 0.02 * i} r={(i - 1) * 4}><Chariot color={col} apart={i * 0.08} /></At>
      ))}
      <At x={960} y={680}><Slab w={1200} label="“chariot”, a thing beneath" solid gone={gone} /></At>
      <Ring x={960} y={680} p={ramp(t, never + 0.2, 1.4)} r0={60} r1={500} color={GOLD} />
      <At x={960} y={680} o={ramp(t, never + 1.2, 0.5)}><Glow color={GOLD} size={40} serif>never there</Glow></At>
      <At x={960} y={800} o={ramp(t, prod, 0.5)}><Glow color={DIM} size={30}>produced, by reifying a useful idea</Glow></At>
    </AbsoluteFill>
  );
};

const ExclusionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const comp = c("exclusion, is a helpful companion here"), excl = c("a general idea is understood by excluding what it is not");
  const ess = c("It does not point to a real common essence"), mid = c("the Middle Way school, presses further");
  const cg = c("A commonality taken as a ground has become"), own = c("own nature, a being that stands on its own");
  const push = ramp(t, excl + 0.4, 1.4);
  const outs: [string, number][] = [["not a cart", -0.4], ["not a horse", 0.9], ["not a house", 2.2], ["not a boat", 3.5]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, comp, 0.5)}><Glow color={CHALK} size={42} serif>exclusion: by what it is not</Glow></At>
      <At x={600} y={420} s={pop(t, fps, comp + 0.8)}><div style={{ width: 260, height: 260, borderRadius: "50%", border: `4px solid ${GOLD}`, background: `${GOLD}14`,
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 44, color: GOLD }}>“chariot”</div></At>
      {outs.map(([w, a], i) => {
        const r = 170 + 120 * push;
        return <At key={w} x={600 + r * Math.cos(a)} y={420 + r * Math.sin(a) * 0.8} o={ramp(t, excl + i * 0.2, 0.4)}><Chip color={DIM} size={26}>{w}</Chip></At>;
      })}
      <Struck x={600} y={760} at={ess - 0.1} strikeAt={ess + 1.2} color={GOLD} size={30}>a real common essence</Struck>
      <At x={1380} y={260} o={ramp(t, mid, 0.5)}><Glow color={TEAL} size={34} serif>the Middle Way presses further</Glow></At>
      <At x={1380} y={400} s={pop(t, fps, cg)}><Chip color={GOLD} size={32}>a commonality</Chip></At>
      <Flow x1={1380} y1={440} x2={1380} y2={520} color={WARM} p={ramp(t, cg + 0.6, 0.4)} />
      <At x={1380} y={560} s={pop(t, fps, cg + 1.0)}><Chip color={WARM} size={32}>taken as a ground</Chip></At>
      <Flow x1={1380} y1={600} x2={1380} y2={680} color={WARM} p={ramp(t, own - 0.3, 0.4)} />
      <At x={1380} y={720} s={pop(t, fps, own)}><Chip color={ROSE} size={34}>own nature: standing alone</Chip></At>
    </AbsoluteFill>
  );
};

const StanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const content = c("is not found in the content of an experience"), viv = c("can be exactly as vivid either way"), st = c("is a matter of stance");
  const held = c("how the appearing is held"), q1 = c("existing from its own side, independent of conditions"), q2 = c("the foundation from which other things get their being");
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={content - 0.2} strikeAt={content + 1.2} color={DIM} size={32}>found in the content</Struck>
      <At x={480} y={340} s={pop(t, fps, content + 1.2)}><RedSquare size={130} /></At>
      <At x={960} y={340} s={pop(t, fps, content + 1.6)}><Orb size={120} color={ICE} /></At>
      <At x={1440} y={340} s={pop(t, fps, content + 2.0)}><Orb size={120} color={GOLD} core={0.6} /></At>
      {["redness", "sound", "presence"].map((w, i) => <At key={w} x={480 + i * 480} y={460} o={ramp(t, content + 1.4 + i * 0.4, 0.4)}><Glow color={CHALK} size={28}>{w}</Glow></At>)}
      <At x={960} y={530} o={ramp(t, viv, 0.5)}><Glow color={GREEN} size={30}>just as vivid, either way</Glow></At>
      <At x={960} y={620} s={pop(t, fps, st)}><Chip color={GOLD} size={40}>a matter of stance</Chip></At>
      <At x={960} y={700} o={ramp(t, held, 0.5)}><Glow color={GOLD} size={30}>how the appearing is held</Glow></At>
      <At x={560} y={800} s={pop(t, fps, q1)}><Chip color={WARM} size={28}>from its own side?</Chip></At>
      <At x={1360} y={800} s={pop(t, fps, q2)}><Chip color={WARM} size={28}>a foundation for the rest?</Chip></At>
    </AbsoluteFill>
  );
};

const TwoWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("The same red can be held in two ways"), one = c("In one, it is taken as a ground"), meas = c("Everything else is measured against it");
  const other = c("In the other, it simply appears"), rel = c("It relates to light, to the eye, to attention"), nb = c("nothing is placed beneath it");
  const sec = c("The second is dependent origination"), same = c("The red is the same"), diff = c("The difference lies entirely in the stance");
  const baseGone = ramp(t, other + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, two, 0.5)}><Glow color={CHALK} size={44} serif>the same red, held two ways</Glow></At>
      {/* left: held as a ground */}
      <At x={520} y={370} s={pop(t, fps, two + 0.4)}><RedSquare size={160} /></At>
      <At x={520} y={500} o={ramp(t, one, 0.5)}><Slab w={360} label="held as a ground" gone={baseGone * 0.6} solid /></At>
      {([[240, TEAL], [800, VIOLET]] as [number, string][]).map(([x, col], i) => (
        <At key={x} x={x} y={640} o={ramp(t, meas + i * 0.3, 0.4)}><Orb size={60} color={col} /></At>
      ))}
      <Svg>
        <DrawPath d="M260 610 L470 470" p={ramp(t, meas + 0.4, 0.5) * (1 - baseGone * 0.5)} color={DIM} width={3} len={300} glow={false} />
        <DrawPath d="M780 610 L570 470" p={ramp(t, meas + 0.7, 0.5) * (1 - baseGone * 0.5)} color={DIM} width={3} len={300} glow={false} />
      </Svg>
      <At x={520} y={740} o={ramp(t, meas + 0.4, 0.5)}><Glow color={DIM} size={26}>everything measured against it</Glow></At>
      <At x={520} y={810} o={ramp(t, sec - 1.6, 0.4)}><Chip color={WARM} size={28}>own nature</Chip></At>
      {/* right: simply appearing, in relation */}
      <At x={1400} y={420} s={pop(t, fps, other)}><RedSquare size={160} /></At>
      {([["light", GOLD, 1150, 260], ["eye", TEAL, 1650, 260], ["attention", VIOLET, 1650, 600]] as [string, string, number, number][]).map(([w, col, x, y], i) => (
        <React.Fragment key={w}>
          <Flow x1={x} y1={y} x2={1400} y2={420} color={col} p={ramp(t, rel + i * 0.4, 0.6)} />
          <At x={x} y={y} s={pop(t, fps, rel + i * 0.4)}>{w === "eye" ? <Eye size={0.6} /> : <Chip color={col} size={28}>{w}</Chip>}</At>
        </React.Fragment>
      ))}
      <At x={1400} y={620} o={ramp(t, nb, 0.5)}><Glow color={GREEN} size={26}>nothing placed beneath</Glow></At>
      <At x={1400} y={810} o={ramp(t, sec, 0.4)}><Chip color={TEAL} size={28}>dependent origination</Chip></At>
      <At x={960} y={420} o={ramp(t, same, 0.5)}><Glow color={ROSE} size={56} serif>=</Glow></At>
      <At x={960} y={520} o={ramp(t, diff, 0.5)}><Chip color={GOLD} size={30}>only the stance differs</Chip></At>
    </AbsoluteFill>
  );
};

const NoFoundationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const found = c("the taste of presence cannot be a foundation"), behind = c("Seen without anything standing behind it");
  const through = c("dependent through and through"), rel = c("Its immediacy is that of something relating");
  const gone = ramp(t, behind, 1.4);
  const n = 6;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, found, 0.5)}><Glow color={CHALK} size={42} serif>the taste of presence: no foundation</Glow></At>
      <At x={960} y={720}><div style={{ opacity: ramp(t, found + 0.4, 0.5) }}><Slab w={1000} label="presence, as the foundation reached at last?" gone={gone} /></div></At>
      <Crossed x={960} y={720} at={behind - 0.4} size={40} />
      <At x={960} y={420} s={pop(t, fps, found + 0.2)}><Orb size={130} color={GOLD} core={0.7} /></At>
      {Array.from({ length: n }).map((_, i) => {
        const a = (i / n) * Math.PI * 2 + t * 0.15;
        const x = 960 + 360 * Math.cos(a), y = 420 + 200 * Math.sin(a);
        return (
          <React.Fragment key={i}>
            <Flow x1={x} y1={y} x2={960} y2={420} color={[TEAL, ROSE, VIOLET, ICE, GREEN, GOLD][i]} p={ramp(t, through + i * 0.15, 0.5)} />
            <At x={x} y={y} s={pop(t, fps, through + i * 0.15)}><Orb size={50} color={[TEAL, ROSE, VIOLET, ICE, GREEN, GOLD][i]} /></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={820} o={ramp(t, rel, 0.5)}><Glow color={GOLD} size={32}>immediate, because relating</Glow></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hard = c("why the habit is hard to see"), lpe = c("Through language, perception and emotion"), fixed = c("a thing with a fixed character");
  const dis = c("the naming disappears into what is named"), ass = c("It is assumed, each time an appearance is met");
  const sink = ramp(t, dis + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, hard, 0.5)}><Glow color={CHALK} size={44} serif>why the habit is hard to see</Glow></At>
      {["language", "perception", "emotion"].map((w, i) => <At key={w} x={560 + i * 400} y={220} s={pop(t, fps, lpe + i * 0.4)}><Chip color={[TEAL, GOLD, ROSE][i]} size={32}>{w}</Chip></At>)}
      <At x={960} y={500} s={pop(t, fps, fixed - 0.3) * 0.75}><Chariot /></At>
      <At x={1300 - 340 * sink} y={360 + 140 * sink} o={ramp(t, fixed, 0.5) * (1 - sink)}><Tag text="“chariot”: fixed character" color={WARM} /></At>
      <At x={960} y={700} o={ramp(t, dis + 1.2, 0.5)}><Glow color={DIM} size={30}>the naming vanishes into the named</Glow></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={960} y={500} p={((t - ass - i * 0.9) / 2.7) % 1 * (t > ass + i * 0.9 ? 1 : 0)} r0={80} r1={300} color={WARM} width={2} />)}
      <At x={960} y={800} o={ramp(t, ass, 0.5)}><Chip color={WARM} size={30}>assumed, each time, not argued</Chip></At>
    </AbsoluteFill>
  );
};

const LoosenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const loose = c("Repeated looking loosens the assumption"), watch = c("Each time the forming is watched"), added = c("the framework is seen to be added, not found");
  const passes = Math.max(0, (t - loose) / 2.2);
  const k = Math.min(1, ramp(t, loose, 6) );
  const look = passes * Math.PI;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, loose, 0.5)}><Glow color={CHALK} size={44} serif>looking loosens it</Glow></At>
      <At x={960} y={430} s={pop(t, fps, loose)}><Orb size={150} color={GOLD} core={0.6} /></At>
      {/* a tight band around the appearance, loosening */}
      <At x={960} y={430} o={1 - 0.85 * k}>
        <div style={{ width: 180 + 260 * k, height: 180 + 260 * k, borderRadius: "50%", border: `${8 - 6 * k}px solid ${WARM}`, boxShadow: `0 0 20px ${WARM}88` }} />
      </At>
      <At x={960 + 300 * Math.cos(look)} y={430 + 120 * Math.sin(look)} o={ramp(t, watch, 0.5)}>
        <svg width={120} height={120} viewBox="0 0 120 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ICE})` }}>
          <circle cx={48} cy={48} r={36} fill={`${ICE}18`} stroke={ICE} strokeWidth={6} /><line x1={74} y1={74} x2={112} y2={112} stroke={ICE} strokeWidth={10} strokeLinecap="round" />
        </svg>
      </At>
      <At x={960} y={660} o={ramp(t, watch + 0.4, 0.5)}><Glow color={ICE} size={30}>the forming, watched</Glow></At>
      <At x={760} y={780} s={pop(t, fps, added)}><Chip color={GOLD} size={34}>added</Chip></At>
      <At x={860} y={780} o={ramp(t, added + 0.4, 0.3)}><Tick at={added + 0.5} /></At>
      <Struck x={1160} y={780} at={added + 0.8} strikeAt={added + 1.4} color={DIM} size={34}>found</Struck>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fact = c("What was taken as a fact about the world"), rel = c("a way of relating to it"), works = c("A way that works");
  const own = c("without needing to be true from its own side");
  const swap = ramp(t, rel, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={300} s={pop(t, fps, fact)} o={1 - swap}><Chip color={WARM} size={44}>a fact about the world</Chip></At>
      <At x={960} y={300} o={swap} s={0.9 + 0.1 * swap}><Chip color={GOLD} size={44}>a way of relating to it</Chip></At>
      <At x={960} y={510} s={pop(t, fps, works - 0.2) * 0.8}><RedSquare size={150} /></At>
      {[GOLD, TEAL, VIOLET].map((col, i) => {
        const a = (i / 3) * Math.PI * 2 + t * 0.3;
        return <Flow key={i} x1={960 + 230 * Math.cos(a)} y1={510 + 110 * Math.sin(a)} x2={960} y2={510} color={col} p={ramp(t, works, 0.6)} />;
      })}
      <At x={800} y={720} s={pop(t, fps, works)}><Chip color={GREEN} size={32}>it works</Chip></At>
      <At x={900} y={720} o={ramp(t, works + 0.4, 0.3)}><Tick at={works + 0.5} /></At>
      <At x={960} y={810} o={ramp(t, own, 0.5)}><Glow color={DIM} size={30}>not needing to be true from its own side</Glow></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["steps", 0], ["reify", c("The second step is reification", 0.6)], ["stance", c("exclusion, is a helpful companion here", 0.6)],
    ["red", c("The same red can be held in two ways", 0.6)], ["stance", c("why the habit is hard to see", 0.6)],
    ["open", c("Repeated looking loosens the assumption", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The first step is abstraction", 0.9)], <WhereScene />],
    [S("The first step is abstraction", "The second step is reification"), <AbstractionScene />],
    [S("The second step is reification", "that unity is not found apart from the faces"), <ReifyScene />],
    [S("that unity is not found apart from the faces", "exclusion, is a helpful companion here"), <NeverScene />],
    [S("exclusion, is a helpful companion here", "is not found in the content of an experience"), <ExclusionScene />],
    [S("is not found in the content of an experience", "The same red can be held in two ways"), <StanceScene />],
    [S("The same red can be held in two ways", "the taste of presence cannot be a foundation"), <TwoWaysScene />],
    [S("the taste of presence cannot be a foundation", "why the habit is hard to see"), <NoFoundationScene />],
    [S("why the habit is hard to see", "Repeated looking loosens the assumption"), <HabitScene />],
    [S("Repeated looking loosens the assumption", "What was taken as a fact about the world"), <LoosenScene />],
    [S("What was taken as a fact about the world", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
