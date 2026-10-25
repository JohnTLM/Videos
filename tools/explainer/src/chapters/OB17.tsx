// The Observer and the Taste of Presence, Chapter 17: Spontaneous Presence. Explainer drawings timed to the narration.
// Arc: the flame whose light is the burning -> the term and its risk: sliding into causelessness, an uncaused source ->
// two questions kept apart: how it comes about (causes and conditions) / its nature (empty, and not only mind) ->
// not an extra layer; the demands for producer, substrate, ultimate why run out -> one appearing, two descriptions ->
// "no why or because": causes work, no uncaused ground beneath -> two safeguards: no reality behind, emptiness itself empty ->
// no hierarchy: the tiers fall flat -> one flat web: chariot parts and chariot, flame and fuel, seeing and object ->
// no owner: the someone behind not found, the appearing goes on -> "of itself" names no self; conditions are not little agents ->
// no self apart from the bundles -> it appears, and belongs to no one.
// Stance: spontaneous presence is never drawn as a source emitting things; an uncaused source, a layer on top and a ground beneath are
// drawn only to be struck. The flame's light is drawn as its burning, not as something sent out.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SANS, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A flame gives light", "the light is not a second thing sent out", "It is the burning",
  "has a term for this kind of appearing", "spontaneous presence", "The word carries a risk", "It can slide into causelessness",
  "an uncaused source is exactly the", "a nature that stands on its own", "The risk is best named openly",
  "keep the two traditions aligned", "separate two questions", "The first asks how an appearance comes about", "Every appearance has an answer",
  "It arises from causes and conditions", "the Middle Way analysis works at that level",
  "The second asks about the nature of what appears", "That nature is emptiness", "the absence of any existence from its own side",
  "emptiness is not confined to mind", "There is not one thing that has not arisen dependently", "not one thing that is not empty",
  "is not an extra ingredient sitting on top of emptiness", "what dependent origination looks like from the inside",
  "every demand for a producer, substrate or ultimate why has run out",
  "Dependent arising is the analytic description", "Spontaneous presence is the experiential description", "What presents is already complete",
  "Both deny production by an essence", "Both leave appearance intact",
  "no why or because", "It does not deny that causes work", "is a perfectly usable question", "What the phrase denies is a ground beneath the regularity",
  "which is itself uncaused", "There the question stops applying", "there was never a ground to ask about",
  "Two safeguards keep this from becoming a new ground", "not a separate reality standing behind things", "must not become a hidden substrate either",
  "because emptiness is itself empty",
  "do not stand in a hierarchy", "The conditions are not a ground beneath it", "not a surface expressing something deeper",
  "Neither rules the other", "The arrangement is flat", "The chariot's parts and the chariot", "A flame and its fuel", "A seeing and its object",
  "Each occurs within the same web",
  "this flatness has no owner", "whose appearance is this", "assumes someone standing behind the appearing", "That someone is not found",
  "the appearing does not stop for want of one", "It appears of itself, but only in a thin sense", "The coming together of conditions is the appearing",
  "as the flame's light is the burning",
  "means only that the appearance is not borrowed", "It names no self that owns it", "Conditions are not little agents",
  "where a self most easily slips back in",
  "look for a self apart from the aggregates", "the bundles of body and mind", "find none", "What is left is only to see what appearing is",
  "It appears", "And it belongs to no one",
];

const M = {
  flame: { a: "rgba(190,110,50,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(180,140,60,0.32)" },
  risk: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  two: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  flat: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
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

/** A dashed outline of a person (o 0..1). */
const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

/** A candle-like flame: its glow is drawn as part of the burning, not as rays sent out. */
const Flame: React.FC<{ size?: number; wick?: boolean }> = ({ size = 1, wick = true }) => {
  const { t } = useT();
  const w = Math.sin(t * 9) * 3 + Math.sin(t * 5.3) * 2;
  return (
    <svg width={160 * size} height={240 * size} viewBox="0 0 160 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${22 * size}px ${WARM})` }}>
      <ellipse cx={80} cy={110} rx={70 + w} ry={90 + w} fill="url(#flglow)" opacity={0.55} />
      <defs><radialGradient id="flglow"><stop offset="0" stopColor="#FFE7A0" stopOpacity={0.8} /><stop offset="1" stopColor={WARM} stopOpacity={0} /></radialGradient></defs>
      <path d={`M80 ${30 + w} C118 92 136 136 116 176 C100 206 60 206 44 176 C24 136 42 92 80 ${30 + w} Z`} fill={`${WARM}dd`} />
      <path d={`M80 ${96 - w} C98 130 104 156 92 176 C86 188 74 188 68 176 C56 156 62 130 80 ${96 - w} Z`} fill="#FFE7A0" />
      {wick && <line x1={80} y1={190} x2={80} y2={214} stroke="#2a2420" strokeWidth={6} strokeLinecap="round" />}
      {wick && <rect x={50} y={212} width={60} height={26} rx={4} fill={`${CHALK}33`} stroke={CHALK} strokeWidth={3} />}
    </svg>
  );
};

/** A small heap of firewood (fuel). */
const Fuel: React.FC = () => (
  <svg width={200} height={90} viewBox="0 0 200 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GOLD}66)` }}>
    {[[20, 60, 180, 70], [30, 40, 170, 60], [50, 75, 160, 50]].map(([x1, y1, x2, y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A06A" strokeWidth={18} strokeLinecap="round" />
    ))}
  </svg>
);

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

/** A dashed slab: a supposed ground or layer, fading with gone 0..1. */
const Slab: React.FC<{ w: number; h?: number; label: string; color?: string; gone?: number }> = ({ w, h = 64, label, color = WARM, gone = 0 }) => (
  <div style={{ width: w, height: h, borderRadius: 10, opacity: 1 - gone, filter: gone > 0.02 ? `blur(${gone * 12}px)` : undefined,
    background: `${color}18`, border: `3px dashed ${color}`, display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: SERIF, fontSize: 32, color: CHALK }}>{label}</div>
);

// ---------------------------------------------------------------- scenes
const FlameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const light = c("A flame gives light"), second = c("the light is not a second thing sent out"), burn = c("It is the burning");
  const sent = ramp(t, second, 0.8) * (1 - ramp(t, burn - 0.2, 0.6));
  return (
    <AbsoluteFill>
      <At x={760} y={450} s={pop(t, fps, light - 0.3) * 1.3}><Flame /></At>
      <At x={760} y={720} o={ramp(t, light + 0.4, 0.5)}><Glow color={GOLD} size={36} serif>a flame gives light</Glow></At>
      {[-1, 0, 1].map((k) => (
        <Flow key={k} x1={880} y1={420 + k * 40} x2={1180} y2={340 + k * 90} color={GOLD} p={sent} dash pulses={false} />
      ))}
      <At x={1330} y={340} o={sent}><Chip color={DIM} size={30}>a second thing, sent out?</Chip></At>
      <Crossed x={1100} y={380} at={second + 1.0} size={60} />
      <At x={1330} y={520} s={pop(t, fps, burn)}><Chip color={WARM} size={40}>light = the burning</Chip></At>
    </AbsoluteFill>
  );
};

const RiskScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const term = c("has a term for this kind of appearing"), sp = c("spontaneous presence"), risk = c("The word carries a risk");
  const slide = c("It can slide into causelessness"), src = c("an uncaused source is exactly the"), own = c("a nature that stands on its own");
  const open = c("The risk is best named openly");
  const roll = ramp(t, slide, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, term, 0.5)}><Glow color={DIM} size={32}>a term for this kind of appearing</Glow></At>
      <At x={960} y={210} s={pop(t, fps, sp)}><Glow color={GOLD} size={66} serif>spontaneous presence</Glow></At>
      <Svg><DrawPath d="M300 430 L900 640" p={ramp(t, risk, 0.8)} color={DIM} width={4} len={700} /></Svg>
      <At x={330 + 520 * roll} y={400 + 182 * roll} o={ramp(t, risk + 0.3, 0.4)} r={roll * 360}><Orb size={60} color={GOLD} /></At>
      <At x={420} y={340} o={ramp(t, risk + 0.3, 0.5)}><Chip color={ROSE} size={30}>a risk</Chip></At>
      <At x={900} y={720} o={ramp(t, slide + 0.6, 0.5)}><Chip color={WARM} size={30}>causelessness</Chip></At>
      {/* the uncaused source: drawn dashed, and struck */}
      <At x={1420} y={480} o={ramp(t, src, 0.6) * (1 - ramp(t, own + 2.0, 0.8))}>
        <div style={{ width: 220, height: 220, borderRadius: "50%", border: `4px dashed ${VIOLET}`, display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK, textAlign: "center" }}>an uncaused<br />source?</div>
      </At>
      <Crossed x={1420} y={480} at={own + 0.8} size={100} />
      <At x={1420} y={660} o={ramp(t, own, 0.5)}><Glow color={VIOLET} size={28}>= own nature, rejected</Glow></At>
      <At x={1420} y={760} s={pop(t, fps, open)}><Chip color={GOLD} size={30}>named openly</Chip></At>
    </AbsoluteFill>
  );
};

const HowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const al = c("keep the two traditions aligned"), sep = c("separate two questions"), first = c("The first asks how an appearance comes about");
  const ans = c("Every appearance has an answer"), cc = c("It arises from causes and conditions"), mw = c("the Middle Way analysis works at that level");
  const conds: [string, string, number, number][] = [["fuel", GOLD, 420, 640], ["air", ICE, 760, 300], ["a spark", ROSE, 420, 300], ["a wick", CHALK, 760, 640]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, al, 0.5)}><Glow color={DIM} size={32}>two traditions, kept aligned</Glow></At>
      <At x={760} y={190} s={pop(t, fps, sep)}><Chip color={TEAL} size={34}>question 1</Chip></At>
      <At x={1160} y={190} s={pop(t, fps, sep + 0.4)} o={0.5}><Chip color={VIOLET} size={34}>question 2</Chip></At>
      <At x={590} y={470} s={pop(t, fps, first)}><Flame size={0.8} /></At>
      <At x={1360} y={340} o={ramp(t, first + 0.3, 0.5)}><Glow color={TEAL} size={40} serif>how does it come about?</Glow></At>
      <At x={1360} y={440} o={ramp(t, ans, 0.5)}><Glow color={CHALK} size={30}>every appearance has an answer</Glow></At>
      {conds.map(([w, col, x, y], i) => (
        <React.Fragment key={w}>
          <Flow x1={x} y1={y} x2={590} y2={470} color={col} p={ramp(t, cc + i * 0.3, 0.6)} />
          <At x={x} y={y} s={pop(t, fps, cc + i * 0.3)}><Chip color={col} size={28}>{w}</Chip></At>
        </React.Fragment>
      ))}
      <At x={1360} y={560} s={pop(t, fps, cc + 0.2)}><Chip color={TEAL} size={32}>causes and conditions</Chip></At>
      <At x={1360} y={680} o={ramp(t, mw, 0.5)}><Glow color={TEAL} size={28}>where Middle Way analysis works</Glow></At>
    </AbsoluteFill>
  );
};

const NatureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("The second asks about the nature of what appears"), emp = c("That nature is emptiness"), abs = c("the absence of any existence from its own side");
  const mind = c("emptiness is not confined to mind"), one = c("There is not one thing that has not arisen dependently"), all = c("not one thing that is not empty");
  const things: [React.ReactNode, number][] = [[<Flame size={0.6} />, 420], [<div style={{ transform: "scale(0.45)" }}><Chariot /></div>, 780],
    [<Tree size={0.4} />, 1140], [<Eye size={0.8} />, 1500]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} s={pop(t, fps, sec)}><Chip color={VIOLET} size={34}>question 2: what is its nature?</Chip></At>
      <At x={960} y={200} o={ramp(t, emp, 0.5)}><Glow color={VIOLET} size={44} serif>empty</Glow></At>
      <At x={960} y={270} o={ramp(t, abs, 0.5)}><Glow color={DIM} size={28}>no existence from its own side</Glow></At>
      <Struck x={960} y={350} at={mind} strikeAt={mind + 1.0} color={DIM} size={30}>only mind is empty</Struck>
      {things.map(([n, x], i) => <At key={i} x={x} y={530} s={pop(t, fps, mind + 0.8 + i * 0.3)}>{n}</At>)}
      {things.map(([, x], i) => <At key={i} x={x} y={700} o={ramp(t, one + i * 0.3, 0.4)}><Chip color={TEAL} size={26}>dependent</Chip></At>)}
      {things.map(([, x], i) => <At key={i} x={x} y={780} o={ramp(t, all + i * 0.3, 0.4)}><Chip color={VIOLET} size={26}>empty</Chip></At>)}
    </AbsoluteFill>
  );
};

const NoLayerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const extra = c("is not an extra ingredient sitting on top of emptiness"), inside = c("what dependent origination looks like from the inside");
  const dem = c("every demand for a producer, substrate or ultimate why has run out");
  const gone = ramp(t, extra + 2.0, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={260} o={ramp(t, extra, 0.5)}><Slab w={700} label="spontaneous presence, on top?" color={GOLD} gone={gone} /></At>
      <At x={960} y={340} o={ramp(t, extra + 0.3, 0.5)}><Slab w={700} label="emptiness, underneath?" color={VIOLET} gone={gone} /></At>
      <Crossed x={960} y={300} at={extra + 1.4} size={60} />
      <At x={960} y={470} s={pop(t, fps, inside - 0.3)}><Flame size={0.7} /></At>
      <At x={960} y={130} o={ramp(t, inside, 0.5)}><Glow color={GOLD} size={38} serif>dependent origination, from the inside</Glow></At>
      {["a producer?", "a substrate?", "an ultimate why?"].map((w, i) => {
        const fade = ramp(t, dem + 2.4 + i * 0.4, 1.0);
        return <At key={w} x={520 + i * 440} y={720 + fade * 30} o={ramp(t, dem + i * 0.5, 0.4) * (1 - fade)} blur={fade * 8}><Chip color={DIM} size={30}>{w}</Chip></At>;
      })}
      <At x={960} y={810} o={ramp(t, dem + 3.6, 0.5)}><Glow color={DIM} size={28}>every demand, run out</Glow></At>
    </AbsoluteFill>
  );
};

const DescriptionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const an = c("Dependent arising is the analytic description"), ex = c("Spontaneous presence is the experiential description");
  const comp = c("What presents is already complete"), deny = c("Both deny production by an essence"), intact = c("Both leave appearance intact");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, an - 0.2, 0.5)}><Glow color={CHALK} size={40} serif>one appearing, two descriptions</Glow></At>
      <At x={960} y={420} s={pop(t, fps, an - 0.3)}><Flame size={0.9} /></At>
      <Flow x1={540} y1={420} x2={860} y2={420} color={TEAL} p={ramp(t, an + 0.3, 0.6)} />
      <At x={400} y={420} s={pop(t, fps, an + 0.2)}><Chip color={TEAL} size={32}>dependent arising</Chip></At>
      <At x={400} y={500} o={ramp(t, an + 0.8, 0.4)}><Glow color={TEAL} size={26}>the analytic description</Glow></At>
      <Flow x1={1380} y1={420} x2={1060} y2={420} color={GOLD} p={ramp(t, ex + 0.3, 0.6)} />
      <At x={1520} y={420} s={pop(t, fps, ex + 0.2)}><Chip color={GOLD} size={32}>spontaneous presence</Chip></At>
      <At x={1520} y={500} o={ramp(t, ex + 0.8, 0.4)}><Glow color={GOLD} size={26}>the lived description</Glow></At>
      <Ring x={960} y={420} p={ramp(t, comp, 1.4)} r0={80} r1={260} color={GOLD} />
      <At x={960} y={620} o={ramp(t, comp + 0.3, 0.5)}><Chip color={GREEN} size={32}>already complete</Chip></At>
      <Struck x={700} y={740} at={deny} strikeAt={deny + 1.2} color={DIM} size={28}>produced by an essence</Struck>
      <At x={1240} y={740} s={pop(t, fps, intact)}><Chip color={GREEN} size={28}>appearance intact</Chip></At>
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nw = c("no why or because"), causes = c("It does not deny that causes work"), usable = c("is a perfectly usable question");
  const ground = c("What the phrase denies is a ground beneath the regularity"), unc = c("which is itself uncaused");
  const stops = c("There the question stops applying"), never = c("there was never a ground to ask about");
  const gone = ramp(t, never + 0.4, 1.2);
  const chain: [string, string, number][] = [["a spark", ROSE, 460], ["fuel", GOLD, 760], ["a flame", WARM, 1060], ["light, warmth", GREEN, 1400]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} s={pop(t, fps, nw)}><Glow color={GOLD} size={56} serif>“no why or because”</Glow></At>
      {chain.map(([w, col, x], i) => (
        <React.Fragment key={w}>
          {i > 0 && <Flow x1={chain[i - 1][2] + 90} y1={320} x2={x - 90} y2={320} color={col} p={ramp(t, nw + 1.2 + i * 0.4, 0.5)} />}
          <At x={x} y={320} s={pop(t, fps, nw + 1.2 + i * 0.4)}><Chip color={col} size={30}>{w}</Chip></At>
        </React.Fragment>
      ))}
      <At x={960} y={420} o={ramp(t, causes + 1.4, 0.5)}><Glow color={GREEN} size={28}>causes work</Glow></At>
      <At x={1600} y={200} s={pop(t, fps, usable)}><Chip color={TEAL} size={30}>“why?” works</Chip></At>
      <At x={960} y={560} o={ramp(t, ground, 0.5)}><Slab w={1100} label="a reason beneath it all, itself uncaused?" gone={gone} /></At>
      <At x={1440} y={660} o={ramp(t, unc, 0.5) * (1 - gone)}><Glow color={WARM} size={26}>uncaused</Glow></At>
      <Crossed x={960} y={560} at={stops + 0.4} size={45} />
      <At x={960} y={700} o={ramp(t, stops, 0.5)}><Glow color={DIM} size={30}>there, the question stops applying</Glow></At>
      <At x={960} y={800} o={ramp(t, never, 0.5)}><Chip color={GOLD} size={30}>never a ground to ask about</Chip></At>
    </AbsoluteFill>
  );
};

const SafeguardScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two safeguards keep this from becoming a new ground"), behind = c("not a separate reality standing behind things");
  const sub = c("must not become a hidden substrate either"), self = c("because emptiness is itself empty");
  const g1 = ramp(t, behind + 1.6, 1.0), g2 = ramp(t, sub + 1.6, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, two, 0.5)}><Glow color={CHALK} size={44} serif>two safeguards</Glow></At>
      <At x={560} y={200} s={pop(t, fps, two + 0.8)}><Chip color={TEAL} size={30}>1</Chip></At>
      <At x={560} y={420} o={ramp(t, behind, 0.5)}><Slab w={480} h={260} label="a reality behind?" color={VIOLET} gone={g1} /></At>
      <At x={560} y={440} s={pop(t, fps, two + 1.0)}><Flame size={0.6} /></At>
      <Crossed x={560} y={330} at={behind + 1.0} size={40} />
      <At x={1360} y={200} s={pop(t, fps, two + 1.1)}><Chip color={TEAL} size={30}>2</Chip></At>
      <At x={1360} y={420} s={pop(t, fps, two + 1.3)}><Flame size={0.6} /></At>
      <At x={1360} y={620} o={ramp(t, sub, 0.5)}><Slab w={480} label="a hidden substrate?" color={VIOLET} gone={g2} /></At>
      <Crossed x={1360} y={620} at={sub + 1.0} size={40} />
      <Svg><DrawPath d="M880 760 C960 680 1040 700 1040 760 C1040 820 900 830 880 760" p={ramp(t, self + 0.3, 1.2)} color={VIOLET} width={5} len={500} /></Svg>
      <At x={960} y={760} s={pop(t, fps, self)}><Chip color={VIOLET} size={32}>emptiness, itself empty</Chip></At>
    </AbsoluteFill>
  );
};

const HierarchyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hier = c("do not stand in a hierarchy"), cond = c("The conditions are not a ground beneath it"), surf = c("not a surface expressing something deeper");
  const rule = c("Neither rules the other"), flat = c("The arrangement is flat");
  const f = ramp(t, flat, 1.4);
  // tier positions: stacked (hierarchy) -> one row (flat)
  const tiers: [string, string, number, number][] = [["appearance", GOLD, 280, 960], ["conditions", TEAL, 420, 1260], ["something deeper?", VIOLET, 560, 660]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, hier, 0.5)}><Glow color={CHALK} size={44} serif>no hierarchy</Glow></At>
      {tiers.map(([w, col, y, fx], i) => {
        const x = 960 + (fx - 960) * f, yy = y + (440 - y) * f;
        const deeper = i === 2;
        const o = deeper ? ramp(t, surf - 0.3, 0.5) * (1 - ramp(t, flat - 0.6, 0.6)) : ramp(t, hier + i * 0.4, 0.5);
        return <At key={w} x={x} y={yy} o={o}>
          <div style={{ width: 360 - (deeper ? 0 : 0), height: 96, borderRadius: 14, border: `3px ${deeper ? "dashed" : "solid"} ${col}`, background: `${col}22`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SANS, fontSize: 32, color: CHALK }}>{w}</div>
        </At>;
      })}
      <AbsoluteFill style={{ opacity: 1 - f }}>
        <Struck x={1500} y={420} at={cond} strikeAt={cond + 1.2} color={TEAL} size={28}>conditions as a ground</Struck>
        <Struck x={1500} y={540} at={surf} strikeAt={surf + 1.6} color={GOLD} size={28}>appearance as a surface</Struck>
        <At x={1500} y={300} o={ramp(t, rule, 0.4)}><Glow color={DIM} size={28}>neither rules the other</Glow></At>
      </AbsoluteFill>
      <Svg><DrawPath d="M560 540 L1460 540" p={ramp(t, flat + 0.8, 1.0)} color={GOLD} width={4} len={920} /></Svg>
      <At x={960} y={680} o={ramp(t, flat + 0.6, 0.5)}><Reveal text="flat" at={flat + 0.6} size={80} /></At>
    </AbsoluteFill>
  );
};

const WebScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ch = c("The chariot's parts and the chariot"), fl = c("A flame and its fuel"), se = c("A seeing and its object"), web = c("Each occurs within the same web");
  const nodes: [number, number][] = [[360, 330], [640, 330], [960, 520], [1280, 330], [1560, 330], [640, 640], [1280, 640]];
  const links: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [3, 6], [5, 2], [6, 2], [0, 5], [4, 6]];
  const wp = ramp(t, web, 1.2);
  return (
    <AbsoluteFill>
      {links.map(([a, b], i) => <Flow key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} color={[TEAL, GOLD, VIOLET][i % 3]} p={wp} />)}
      {/* chariot parts and chariot */}
      <At x={360} y={330} s={pop(t, fps, ch)}><div style={{ transform: "scale(0.4)" }}><Chariot apart={0.6} color={GOLD} /></div></At>
      <At x={640} y={330} s={pop(t, fps, ch + 0.6)}><div style={{ transform: "scale(0.4)" }}><Chariot color={GOLD} /></div></At>
      <At x={500} y={200} o={ramp(t, ch + 0.4, 0.4)}><Glow color={GOLD} size={26}>parts · chariot</Glow></At>
      {/* flame and fuel */}
      <At x={1280} y={330} s={pop(t, fps, fl)}><Flame size={0.5} wick={false} /></At>
      <At x={1560} y={330} s={pop(t, fps, fl + 0.5)}><Fuel /></At>
      <At x={1420} y={200} o={ramp(t, fl + 0.4, 0.4)}><Glow color={WARM} size={26}>flame · fuel</Glow></At>
      {/* seeing and object */}
      <At x={640} y={640} s={pop(t, fps, se)}><Eye size={0.7} /></At>
      <At x={1280} y={640} s={pop(t, fps, se + 0.5)}><Tree size={0.3} /></At>
      <At x={960} y={760} o={ramp(t, se + 0.4, 0.4)}><Glow color={TEAL} size={26}>seeing · seen</Glow></At>
      <At x={960} y={520} s={pop(t, fps, web)}><Orb size={60} color={ICE} /></At>
      <At x={960} y={830} o={ramp(t, web + 0.4, 0.5)}><Glow color={CHALK} size={30}>one web, none presiding</Glow></At>
    </AbsoluteFill>
  );
};

const NoOwnerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const own = c("this flatness has no owner"), whose = c("whose appearance is this"), assumes = c("assumes someone standing behind the appearing");
  const nf = c("That someone is not found"), stop = c("the appearing does not stop for want of one"), thin = c("It appears of itself, but only in a thin sense");
  const ct = c("The coming together of conditions is the appearing"), burn = c("as the flame's light is the burning");
  const conv = ramp(t, ct, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, own, 0.5)}><Glow color={CHALK} size={44} serif>no owner</Glow></At>
      <At x={1200} y={200} s={pop(t, fps, whose)}><Chip color={ROSE} size={32}>whose appearance is this?</Chip></At>
      <At x={760} y={450} s={pop(t, fps, own + 0.3)}><Flame size={0.9} /></At>
      <At x={1220} y={460} o={ramp(t, assumes, 0.6) * (1 - ramp(t, nf + 1.4, 0.8))}><Ghost o={1} /></At>
      <Crossed x={1220} y={460} at={nf + 0.4} size={100} />
      <At x={1220} y={680} o={ramp(t, stop, 0.5)}><Glow color={GREEN} size={28}>the appearing goes on</Glow></At>
      {[[TEAL, -1], [GOLD, 0], [ICE, 1]].map(([col, k], i) => {
        const a = (Number(k) * 0.8) + Math.PI;
        const r = 330 - 220 * conv;
        return <At key={i} x={760 + r * Math.cos(a)} y={450 + r * Math.sin(a)} o={ramp(t, ct, 0.4) * (1 - ramp(t, ct + 1.4, 0.6))}><Orb size={50} color={col as string} /></At>;
      })}
      <At x={760} y={700} o={ramp(t, thin, 0.5)}><Chip color={GOLD} size={28}>“of itself”: in a thin sense</Chip></At>
      <At x={760} y={790} o={ramp(t, burn, 0.5)}><Glow color={WARM} size={30}>conditions meeting = appearing</Glow></At>
    </AbsoluteFill>
  );
};

const OfItselfScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bor = c("means only that the appearance is not borrowed"), self = c("It names no self that owns it");
  const ag = c("Conditions are not little agents"), slip = c("where a self most easily slips back in");
  const sneak = ramp(t, slip + 0.2, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} s={pop(t, fps, bor - 0.4)}><Glow color={GOLD} size={56} serif>“of itself”</Glow></At>
      <Struck x={560} y={250} at={bor + 0.4} strikeAt={bor + 1.4} color={DIM} size={30}>borrowed from elsewhere</Struck>
      <Struck x={1360} y={250} at={self} strikeAt={self + 1.0} color={ROSE} size={30}>a self that owns it</Struck>
      {[TEAL, GOLD, ICE, VIOLET].map((col, i) => (
        <At key={i} x={480 + i * 320} y={470 + Math.sin(t * 1.2 + i) * 8} s={pop(t, fps, ag + i * 0.2)}>
          <div style={{ position: "relative" }}>
            <Orb size={90} color={col} />
            <div style={{ position: "absolute", left: 22, top: 30, opacity: 1 - ramp(t, ag + 1.8, 0.6), fontFamily: SANS, fontSize: 26, color: "#111" }}>• •</div>
          </div>
        </At>
      ))}
      <At x={960} y={600} o={ramp(t, ag + 0.6, 0.5)}><Glow color={DIM} size={28}>no little agents, no points of view</Glow></At>
      <At x={960} y={730} o={ramp(t, slip - 0.6, 0.5)}><Glow color={WARM} size={48} serif>“own”</Glow></At>
      <At x={1300 - 200 * sneak} y={730} o={ramp(t, slip, 0.5) * (1 - ramp(t, slip + 2.4, 0.6))}><Ghost o={0.9} size={0.45} /></At>
      <Crossed x={1100} y={730} at={slip + 1.6} size={45} />
    </AbsoluteFill>
  );
};

const BundlesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("look for a self apart from the aggregates"), bund = c("the bundles of body and mind"), none = c("find none");
  const left = c("What is left is only to see what appearing is");
  const b: [string, string][] = [["body", GOLD], ["feeling", ROSE], ["perception", TEAL], ["formations", VIOLET], ["consciousness", ICE]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, look, 0.5)}><Glow color={CHALK} size={42} serif>a self, apart from the bundles?</Glow></At>
      {b.map(([w, col], i) => (
        <At key={w} x={360 + i * 300} y={320 + Math.sin(t + i) * 6} s={pop(t, fps, bund + i * 0.3)}><Chip color={col} size={30}>{w}</Chip></At>
      ))}
      <At x={960} y={540} o={ramp(t, look + 0.6, 0.5) * (1 - ramp(t, none + 1.2, 0.8))}><Ghost o={1} size={0.8} /></At>
      <Crossed x={960} y={540} at={none + 0.2} size={90} />
      <At x={960} y={780} o={ramp(t, left, 0.5)}><Glow color={GOLD} size={34}>what is left: see what appearing is</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const app = c("It appears"), noone = c("And it belongs to no one");
  return (
    <AbsoluteFill>
      <At x={960} y={380} s={pop(t, fps, app - 0.3) * 1.2}><Flame /></At>
      <Ring x={960} y={380} p={((t - app) * 0.4) % 1 * (t > app ? 1 : 0)} r0={80} r1={300} color={GOLD} />
      <At x={960} y={640}><Reveal text="it appears" at={app + 0.1} size={72} /></At>
      <At x={960} y={760}><Reveal text="and belongs to no one" at={noone + 0.1} size={56} color={ROSE} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["flame", 0], ["risk", c("has a term for this kind of appearing", 0.6)], ["two", c("keep the two traditions aligned", 0.6)],
    ["risk", c("no why or because", 0.6)], ["flat", c("do not stand in a hierarchy", 0.6)], ["open", c("this flatness has no owner", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("has a term for this kind of appearing", 0.9)], <FlameScene />],
    [S("has a term for this kind of appearing", "keep the two traditions aligned"), <RiskScene />],
    [S("keep the two traditions aligned", "The second asks about the nature of what appears"), <HowScene />],
    [S("The second asks about the nature of what appears", "is not an extra ingredient sitting on top of emptiness"), <NatureScene />],
    [S("is not an extra ingredient sitting on top of emptiness", "Dependent arising is the analytic description"), <NoLayerScene />],
    [S("Dependent arising is the analytic description", "no why or because"), <DescriptionsScene />],
    [S("no why or because", "Two safeguards keep this from becoming a new ground"), <WhyScene />],
    [S("Two safeguards keep this from becoming a new ground", "do not stand in a hierarchy"), <SafeguardScene />],
    [S("do not stand in a hierarchy", "The chariot's parts and the chariot"), <HierarchyScene />],
    [S("The chariot's parts and the chariot", "this flatness has no owner"), <WebScene />],
    [S("this flatness has no owner", "means only that the appearance is not borrowed"), <NoOwnerScene />],
    [S("means only that the appearance is not borrowed", "look for a self apart from the aggregates"), <OfItselfScene />],
    [S("look for a self apart from the aggregates", "It appears"), <BundlesScene />],
    [S("It appears", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
