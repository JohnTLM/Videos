// Anatta to Emptiness, Chapter 23: Nothing to Find, Nothing Missing, Part Two. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Search the mountain", "the cup and the chariot", "nothing is found standing", "So what follows",
  "Two conclusions are tempting", "both are wrong",
  "The first says that nothing exists", "none of it matters", "still holds coffee", "still holds up a road", "The sun still burns", "Cause and effect work",
  "The second says", "a hidden reality underneath", "This sounds humble", "a lost key in a large house", "the sound of a colour", "There is no key to find",
  "Here is the real turn", "do two jobs", "things function", "as a separate step", "functioning itself arises together", "already shows that it is empty",
  "No second argument",
  "the mistake is so easy", "Something works reliably", "backed by something solid", "not evidence of independent existence", "not even correlated",
  "two faults can remain",
  "relentless negation", "two kinds of denial", "someone is not tall", "fill in short", "carries a replacement", "leaves nothing standing",
  "must be the second kind", "reaches for a substitute", "It is all illusion", "It is all mind", "Nothing exists",
  "A mind that keeps negating", "It is not", "endless circling", "still assumed underneath", "not by pushing harder", "seeing clearly how things function",
  "Emptiness is what allows functioning",
  "The second fault is subtler", "a real taste of openness", "a hidden ground", "From the inside", "the same mistake, moved one level down",
  "awareness and luminosity", "vividly present",
  "the path runs in layers", "a question returns", "How does this still function", "the next, finer layer", "Mountain, process, particular",
  "The same habit each time", "something that came first",
  "It ends, if it ends", "no longer needed", "still holds up the road", "still holds the coffee", "Nothing was taken from the world", "Only the belief",
];

const AMBER = "#E0A93B", INDIGO = "#7B78FF";

const M = {
  recap: { a: "rgba(50,60,150,0.55)", b: "rgba(170,125,50,0.38)", c: "rgba(30,100,120,0.3)" },
  wrong: { a: "rgba(130,60,90,0.45)", b: "rgba(60,50,140,0.45)", c: "rgba(160,120,50,0.3)" },
  turn: { a: "rgba(180,130,50,0.5)", b: "rgba(60,60,160,0.45)", c: "rgba(40,120,120,0.3)" },
  fault: { a: "rgba(100,50,140,0.5)", b: "rgba(40,90,140,0.45)", c: "rgba(170,120,50,0.3)" },
  open: { a: "rgba(40,110,150,0.5)", b: "rgba(170,130,60,0.4)", c: "rgba(90,60,160,0.35)" },
  layers: { a: "rgba(70,55,150,0.5)", b: "rgba(170,125,45,0.42)", c: "rgba(40,110,120,0.3)" },
};

// ---------------------------------------------------------------- helpers
const XMark: React.FC<{ x: number; y: number; r: number; at: number; color?: string }> = ({ x, y, r, at, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

const Check: React.FC<{ x: number; y: number; at: number; color?: string; s?: number }> = ({ x, y, at, color = GREEN, s = 1 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - 40 * s} ${y} L${x - 10 * s} ${y + 30 * s} L${x + 45 * s} ${y - 35 * s}`} p={ramp(t, at, 0.5)} color={color} width={9} len={200 * s} />
    </Svg>
  );
};

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, o = 1, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4) * o}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Lens: React.FC<{ size?: number }> = ({ size = 110 }) => (
  <svg width={size} height={size} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

const MountainIcon: React.FC<{ w?: number; road?: number }> = ({ w = 300, road = 0 }) => (
  <svg width={w} height={w * 0.62} viewBox="0 0 300 186" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${INDIGO})` }}>
    <path d="M0 180 L120 20 L170 80 L195 65 L300 180 Z" fill={`${INDIGO}55`} stroke={INDIGO} strokeWidth={4} strokeLinejoin="round" />
    <path d="M98 50 L120 20 L144 52 L132 47 L120 58 L108 48 Z" fill={CHALK} opacity={0.85} />
    <path d="M40 178 Q120 150 90 120 Q70 100 140 90 Q190 80 160 60" fill="none" stroke={AMBER} strokeWidth={5} strokeDasharray="300" strokeDashoffset={300 * (1 - road)} />
  </svg>
);

const CupIcon: React.FC<{ size?: number; steam?: boolean }> = ({ size = 1, steam = true }) => {
  const { t } = useT();
  return (
    <svg width={170 * size} height={160 * size} viewBox="0 -10 170 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${AMBER})` }}>
      <path d="M20 30 L130 30 L118 130 Q75 145 32 130 Z" fill={`${AMBER}33`} stroke={AMBER} strokeWidth={4} strokeLinejoin="round" />
      <path d="M24 42 L126 42" stroke="#7a4a22" strokeWidth={10} />
      <path d="M128 52 Q165 55 158 85 Q152 108 122 106" fill="none" stroke={AMBER} strokeWidth={4} />
      {steam && [0, 1, 2].map((i) => <path key={i} d={`M${50 + i * 25} 22 q ${-8 + 4 * Math.sin(t * 2 + i)} -10 0 -18 q 8 -8 0 -16`} fill="none" stroke={CHALK} strokeWidth={2.5} opacity={0.55} />)}
    </svg>
  );
};

const ChariotIcon: React.FC<{ w?: number }> = ({ w = 280 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={w * 0.62} viewBox="0 0 420 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${AMBER})` }}>
      <path d="M90 70 L300 70 L330 160 L70 160 Z" fill={`${AMBER}33`} stroke={AMBER} strokeWidth={6} strokeLinejoin="round" />
      <line x1={330} y1={130} x2={415} y2={105} stroke={AMBER} strokeWidth={7} strokeLinecap="round" />
      {[120, 280].map((x, i) => (
        <g key={i} transform={`translate(${x} 195) rotate(${t * 30})`}>
          <circle r={55} fill="none" stroke={CHALK} strokeWidth={7} />
          {Array.from({ length: 8 }).map((_, k) => <line key={k} x1={0} y1={0} x2={0} y2={-52} stroke={CHALK} strokeWidth={4} transform={`rotate(${k * 45})`} />)}
        </g>
      ))}
    </svg>
  );
};

const Gears: React.FC<{ color?: string; speed?: number }> = ({ color = TEAL, speed = 1 }) => {
  const { t } = useT();
  const gear = (cx: number, cy: number, r: number, dir: number) => (
    <g transform={`translate(${cx} ${cy}) rotate(${t * 50 * dir * speed})`} fill={`${color}22`} stroke={color} strokeWidth={4}>
      {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={-7} y={-r - 14} width={14} height={16} transform={`rotate(${i * 45})`} />)}
      <circle r={r} /><circle r={r * 0.3} />
    </g>
  );
  return (
    <svg width={280} height={180} viewBox="0 0 260 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      {gear(80, 85, 50, 1)}{gear(185, 85, 40, -1.25)}
    </svg>
  );
};

const Figure: React.FC<{ color: string; size?: number; o?: number }> = ({ color, size = 1, o = 1 }) => (
  <svg width={90 * size} height={170 * size} viewBox="0 0 90 170" style={{ opacity: o, filter: `drop-shadow(0 0 8px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={5} strokeLinecap="round">
      <circle cx={45} cy={25} r={18} /><line x1={45} y1={43} x2={45} y2={108} /><line x1={45} y1={108} x2={25} y2={165} />
      <line x1={45} y1={108} x2={65} y2={165} /><line x1={45} y1={62} x2={15} y2={92} /><line x1={45} y1={62} x2={75} y2={92} />
    </g>
  </svg>
);

// ---------------------------------------------------------------- 1. the search, recalled
const RecapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s0 = c("Search the mountain", 0.4);
  const cc = c("the cup and the chariot");
  const nf = c("nothing is found standing");
  const wf = c("So what follows");
  const u = ramp(t, s0, 3.6);
  return (
    <AbsoluteFill>
      <At x={460} y={440} s={pop(t, fps, s0)}><MountainIcon w={360} /></At>
      <At x={960} y={450} s={pop(t, fps, cc)}><CupIcon size={1.3} /></At>
      <At x={1460} y={450} s={pop(t, fps, cc + 0.5)}><ChariotIcon w={320} /></At>
      <At x={380 + 1160 * u} y={300 + 70 * Math.sin(u * 10)} o={between(t, s0 + 0.2, nf + 1.4, 0.4)}><Lens /></At>
      <At x={960} y={700} o={ramp(t, nf, 0.5)}><Glow color={ICE} size={42} serif>nothing found standing on its own</Glow></At>
      <At x={960} y={150} o={ramp(t, wf, 0.4)}><Glow color={GOLD} size={56} serif>so what follows?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. wrong conclusion one
const NihilScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tc = c("Two conclusions are tempting", 0.4);
  const bw = c("both are wrong");
  const f1 = c("The first says that nothing exists");
  const cup = c("still holds coffee"), road = c("still holds up a road"), sun = c("The sun still burns"), ce = c("Cause and effect work");
  const partB = f1 - 0.4;
  return (
    <AbsoluteFill>
      <Scene from={tc - 0.2} to={partB}>
        <Svg>
          <DrawPath d="M960 820 L960 520 L620 300" p={ramp(t, tc, 0.9)} color={DIM} width={8} len={900} />
          <DrawPath d="M960 520 L1300 300" p={ramp(t, tc + 0.4, 0.7)} color={DIM} width={8} len={500} />
        </Svg>
        <At x={620} y={240} s={pop(t, fps, tc + 0.6)}><Chip color={ROSE} size={36}>conclusion one</Chip></At>
        <At x={1300} y={240} s={pop(t, fps, tc + 0.9)}><Chip color={VIOLET} size={36}>conclusion two</Chip></At>
        <XMark x={620} y={240} r={60} at={bw + 0.2} />
        <XMark x={1300} y={240} r={60} at={bw + 0.4} />
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <StruckChip x={960} y={130} at={f1} strikeAt={ce + 1.2} color={ROSE} size={38}>nothing exists, nothing matters</StruckChip>
        <At x={960} y={440} s={pop(t, fps, f1 + 0.3)} o={1 - ramp(t, cup - 0.3, 0.5)}>
          <div style={{ width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #000 55%, #1b1730)", boxShadow: "0 0 70px #000" }} />
        </At>
        <At x={960} y={660} o={ramp(t, f1 + 0.6, 0.4) * (1 - ramp(t, cup - 0.3, 0.5))}><Glow color={DIM} size={32}>a blank nothing?</Glow></At>
        <At x={420} y={440} s={pop(t, fps, cup)}><CupIcon size={1.1} /></At>
        <At x={420} y={590} o={ramp(t, cup + 0.3, 0.4)}><Glow color={AMBER} size={28}>still holds coffee</Glow></At>
        <At x={800} y={440} s={pop(t, fps, road)}><MountainIcon w={300} road={ramp(t, road + 0.2, 1.0)} /></At>
        <At x={800} y={590} o={ramp(t, road + 0.3, 0.4)}><Glow color={INDIGO} size={28}>still holds a road</Glow></At>
        <At x={1180} y={430} s={pop(t, fps, sun)}><Sun size={190} rot={t * 20} /></At>
        <At x={1180} y={590} o={ramp(t, sun + 0.3, 0.4)}><Glow color={GOLD} size={28}>still burns</Glow></At>
        <At x={1530} y={400} s={pop(t, fps, ce)}><Chip color={TEAL} size={30}>cause</Chip></At>
        <At x={1530} y={520} s={pop(t, fps, ce + 0.3)}><Chip color={GREEN} size={30}>effect</Chip></At>
        <Flow x1={1530} y1={430} x2={1530} y2={490} color={GREEN} p={ramp(t, ce + 0.2, 0.4)} />
        <At x={960} y={760} o={ramp(t, ce + 0.6, 0.5)}><Glow color={GREEN} size={40} serif>everything still works</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. wrong conclusion two
const HiddenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s2 = c("The second says", 0.4);
  const hr = c("a hidden reality underneath");
  const hum = c("This sounds humble");
  const key = c("a lost key in a large house");
  const snd = c("the sound of a colour");
  const nk = c("There is no key to find");
  const partB = key - 0.4;
  const u = ramp(t, key + 0.3, 2.0);
  return (
    <AbsoluteFill>
      <Scene from={s2} to={partB}>
        <At x={960} y={130} o={ramp(t, s2, 0.4)}><Glow color={VIOLET} size={42} serif>conclusion two</Glow></At>
        <Svg style={{ opacity: ramp(t, s2 + 0.2, 0.5) }}><line x1={360} y1={420} x2={1560} y2={420} stroke={CHALK} strokeWidth={4} /></Svg>
        {[TEAL, ROSE, AMBER, GREEN].map((col, i) => <At key={i} x={560 + i * 270} y={360} s={pop(t, fps, s2 + 0.3 + i * 0.1)}><Orb size={70} color={col} /></At>)}
        <At x={960} y={600} s={pop(t, fps, hr)}>
          <div style={{ width: 900, height: 200, borderRadius: 18, border: `3px dashed ${VIOLET}`, background: `${VIOLET}1c`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 36, color: CHALK }}>a hidden reality underneath?</div>
        </At>
        <At x={960} y={790} o={ramp(t, hum, 0.4)}><Glow color={DIM} size={34}>it sounds humble</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={560} y={420} s={pop(t, fps, key)}>
          <svg width={420} height={360} viewBox="0 0 420 360" style={{ filter: `drop-shadow(0 0 10px ${AMBER})` }}>
            <path d="M30 150 L210 20 L390 150" fill="none" stroke={AMBER} strokeWidth={6} strokeLinejoin="round" />
            <rect x={60} y={140} width={300} height={200} fill={`${AMBER}1c`} stroke={AMBER} strokeWidth={5} />
            {[0, 1, 2, 3].map((i) => <rect key={i} x={85 + (i % 2) * 160} y={165 + Math.floor(i / 2) * 90} width={90} height={65} fill="rgba(169,221,242,0.18)" stroke={ICE} strokeWidth={3} />)}
          </svg>
        </At>
        <At x={420 + 280 * u} y={400 + 60 * Math.sin(u * 9)} o={between(t, key + 0.3, snd, 0.3)}><Lens size={90} /></At>
        <At x={560} y={650} o={ramp(t, key + 0.3, 0.4)}><Glow color={AMBER} size={30}>a lost key in a large house?</Glow></At>
        <At x={1300} y={380} s={pop(t, fps, snd)}>
          <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
            {[ROSE, GOLD, TEAL].map((col, i) => <div key={i} style={{ width: 70, height: 70, borderRadius: "50%", background: col, boxShadow: `0 0 20px ${col}` }} />)}
            <Glow color={CHALK} size={80} serif>?</Glow>
          </div>
        </At>
        <At x={1300} y={500} o={ramp(t, snd + 0.3, 0.4)}><Glow color={ICE} size={32}>the sound of a colour</Glow></At>
        <StruckChip x={1300} y={680} at={nk - 0.2} strikeAt={nk + 0.7} color={DIM} size={32}>a key to find</StruckChip>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. the real turn
const TurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rt = c("Here is the real turn", 0.4);
  const two = c("do two jobs");
  const f = c("things function"), sep = c("as a separate step");
  const tog = c("functioning itself arises together");
  const em = c("already shows that it is empty");
  const nsa = c("No second argument");
  const merge = ramp(t, em, 1.2);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 80, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="the real turn" at={rt} size={86} />
      </div>
      <At x={960} y={230} o={between(t, two, tog, 0.4)}><Glow color={DIM} size={32}>two jobs?</Glow></At>
      <At x={620 + 340 * merge} y={430} s={pop(t, fps, f)}><Chip color={TEAL} size={40}>it functions</Chip></At>
      <At x={620 + 340 * merge} y={520} o={ramp(t, f + 0.3, 0.3) * (1 - merge)}><Glow color={TEAL} size={28}>step one</Glow></At>
      <Flow x1={820} y1={430} x2={1100} y2={430} color={DIM} p={ramp(t, sep, 0.5) * (1 - merge)} />
      <At x={1320 + 200 * merge} y={430} s={pop(t, fps, sep + 0.3)} o={1 - ramp(t, nsa + 1.2, 0.6)}>
        <div style={{ position: "relative" }}><Chip color={GOLD} size={40}>no essence: a second proof</Chip><Strike at={nsa + 0.3} /></div>
      </At>
      <At x={1320} y={520} o={ramp(t, sep + 0.6, 0.3) * (1 - merge)}><Glow color={GOLD} size={28}>step two</Glow></At>
      <Ring x={960} y={430} p={ramp(t, tog + 0.3, 1.4)} r0={120} r1={400} color={GOLD} />
      <At x={960} y={640} o={ramp(t, tog, 0.4)}><Glow color={CHALK} size={34}>functioning arises together with what it depends on</Glow></At>
      <At x={960} y={760} o={ramp(t, em + 0.3, 0.4)}><Glow color={GOLD} size={46} serif>to work is already to be empty</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. the easy mistake
const MistakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const me = c("the mistake is so easy", 0.4);
  const wr = c("Something works reliably");
  const sol = c("backed by something solid");
  const ev = c("not evidence of independent existence");
  const cor = c("not even correlated");
  const drop = ramp(t, ev + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, me, 0.4)}><Glow color={CHALK} size={44} serif>an easy mistake</Glow></At>
      <At x={760} y={340} s={pop(t, fps, wr)}><Gears color={TEAL} /></At>
      <Check x={1000} y={330} at={wr + 0.6} />
      <At x={760} y={480} o={ramp(t, wr + 0.3, 0.4)}><Glow color={TEAL} size={30}>works reliably</Glow></At>
      {/* a solid base, shown only so it can fall away */}
      <At x={760} y={600 + 240 * drop} s={pop(t, fps, sol)} o={1 - drop} r={drop * 12}>
        <div style={{ width: 460, height: 90, borderRadius: 10, border: `3px solid ${AMBER}`, background: `${AMBER}44`, boxShadow: `0 0 26px ${AMBER}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 30, color: CHALK }}>something solid underneath</div>
      </At>
      <XMark x={760} y={600} r={50} at={ev + 0.2} />
      <At x={1440} y={340} o={ramp(t, cor, 0.4)}><Chip color={TEAL} size={30}>reliable functioning</Chip></At>
      <At x={1440} y={560} o={ramp(t, cor + 0.2, 0.4)}><Chip color={AMBER} size={30}>independent existence</Chip></At>
      <Svg style={{ opacity: ramp(t, cor + 0.4, 0.4) }}>
        <line x1={1440} y1={380} x2={1440} y2={520} stroke={DIM} strokeWidth={4} strokeDasharray="10 10" />
      </Svg>
      <XMark x={1440} y={450} r={30} at={cor + 0.7} />
      <At x={1440} y={680} o={ramp(t, cor + 0.8, 0.4)}><Glow color={WARM} size={30}>not even correlated</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. two kinds of denial
const DenialScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tf = c("two faults can remain", 0.4);
  const rn = c("relentless negation");
  const tk = c("two kinds of denial");
  const nt = c("someone is not tall");
  const fs = c("fill in short");
  const lns = c("leaves nothing standing");
  const sk = c("must be the second kind");
  const sub = c("reaches for a substitute");
  const subs = [["illusion", c("It is all illusion")], ["mind", c("It is all mind")], ["nothing exists", c("Nothing exists")]] as const;
  const partB = tk - 0.3;
  return (
    <AbsoluteFill>
      <Scene from={tf - 0.2} to={partB}>
        <At x={960} y={200} o={ramp(t, tf, 0.4)}><Glow color={CHALK} size={46} serif>two faults, after understanding</Glow></At>
        <At x={620} y={460} s={pop(t, fps, rn)}><Chip color={WARM} size={40}>relentless negation</Chip></At>
        <At x={1300} y={460} o={ramp(t, rn + 0.6, 0.4) * 0.5}><Chip color={DIM} size={40}>a subtle ground</Chip></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={960} y={90} o={ramp(t, tk, 0.4)}><Glow color={CHALK} size={42} serif>two kinds of denial</Glow></At>
        {/* left: denial with a replacement */}
        <At x={520} y={360} s={pop(t, fps, nt)}><Figure color={TEAL} size={0.9} /></At>
        <At x={520} y={220} o={ramp(t, nt + 0.3, 0.4)}><div style={{ position: "relative" }}><Chip color={TEAL} size={30}>tall</Chip><Strike at={nt + 0.8} /></div></At>
        <At x={700} y={300} s={pop(t, fps, fs)} o={0.85}><Chip color={GOLD} size={30}>short</Chip></At>
        <At x={520} y={520} o={ramp(t, c("carries a replacement"), 0.4)}><Glow color={GOLD} size={28}>a replacement slips in</Glow></At>
        {/* right: denial that leaves nothing */}
        <At x={1400} y={260} o={ramp(t, lns, 0.4)}><div style={{ position: "relative" }}><Chip color={ROSE} size={30}>essence</Chip><Strike at={lns + 0.6} /></div></At>
        <At x={1400} y={380} o={ramp(t, lns + 0.6, 0.4)}>
          <div style={{ width: 220, height: 90, borderRadius: 14, border: `2px dashed ${DIM}` }} />
        </At>
        <At x={1400} y={520} o={ramp(t, lns + 0.8, 0.4)}><Glow color={ICE} size={28}>nothing put in its place</Glow></At>
        <Check x={1400} y={600} at={sk + 0.2} />
        <At x={960} y={630} o={ramp(t, sub, 0.4)}><Glow color={DIM} size={30}>otherwise, a substitute:</Glow></At>
        {subs.map(([w, at], i) => (
          <StruckChip key={i} x={500 + i * 460} y={740} at={at - 0.1} strikeAt={at + 0.8} color={VIOLET} size={30}>{w}</StruckChip>
        ))}
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. circling, and how it ends
const CircleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mk = c("A mind that keeps negating", 0.4);
  const isnot = c("It is not");
  const ec = c("endless circling");
  const sa = c("still assumed underneath");
  const ph = c("not by pushing harder");
  const sc = c("seeing clearly how things function");
  const ea = c("Emptiness is what allows functioning");
  const stop = ramp(t, sc, 1.0);
  const ang = (t - mk) * 4 * (1 - stop);
  const partB = sc - 0.3;
  return (
    <AbsoluteFill>
      <Scene from={mk - 0.2} to={partB}>
        <Svg>
          <circle cx={960} cy={440} r={220} fill="none" stroke={WARM} strokeWidth={3} opacity={0.35} />
        </Svg>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = ang - i * 0.35;
          return <At key={i} x={960 + 220 * Math.cos(a)} y={440 + 220 * Math.sin(a)} o={ramp(t, mk, 0.4) * (1 - i * 0.14)}><Glow color={WARM} size={34 - i * 3}>no</Glow></At>;
        })}
        <At x={960} y={110} o={ramp(t, mk, 0.4)}><Glow color={CHALK} size={42} serif>negating, over and over</Glow></At>
        <At x={1500} y={240} o={ramp(t, isnot, 0.4)}><Chip color={WARM} size={30}>not finished</Chip></At>
        <At x={1500} y={330} o={ramp(t, ec, 0.4)}><Glow color={DIM} size={28}>endless circling</Glow></At>
        <At x={960} y={440} s={pop(t, fps, sa)}><Orb size={60} color={AMBER} core={1} /></At>
        <At x={960} y={720} o={ramp(t, sa + 0.3, 0.4)}><Glow color={AMBER} size={32}>something still assumed underneath</Glow></At>
        <At x={960} y={800} o={ramp(t, ph, 0.4)}><Glow color={DIM} size={30}>not by pushing harder</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={960} y={360} s={pop(t, fps, sc)}><Gears color={GOLD} speed={1.5} /></At>
        <Ring x={960} y={360} p={ramp(t, sc + 0.4, 1.4)} r0={120} r1={420} color={GOLD} />
        <At x={960} y={510} o={ramp(t, sc + 0.3, 0.4)}><Glow color={GOLD} size={34}>seen clearly: functioning, no essence anywhere</Glow></At>
        <div style={{ position: "absolute", top: 620, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="emptiness allows functioning" at={ea} size={72} />
        </div>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. the subtle ground
const GroundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sf = c("The second fault is subtler", 0.4);
  const op = c("a real taste of openness");
  const hg = c("a hidden ground");
  const fi = c("From the inside");
  const sm = c("the same mistake, moved one level down");
  const al = c("awareness and luminosity");
  const vp = c("vividly present");
  const remove = ramp(t, sm + 0.8, 1.2);
  const items = [[560, 380, TEAL], [800, 330, ROSE], [1060, 360, GREEN], [1320, 320, ICE], [690, 470, VIOLET], [1190, 470, AMBER]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, sf, 0.4)}><Glow color={CHALK} size={44} serif>a subtler fault</Glow></At>
      <At x={960} y={400} o={ramp(t, op, 1.0) * 0.8}>
        <div style={{ width: 1200, height: 520, borderRadius: "50%", background: `radial-gradient(ellipse, ${ICE}33, ${ICE}10 50%, transparent 70%)` }} />
      </At>
      <At x={960} y={180} o={ramp(t, op + 0.3, 0.4)}><Glow color={ICE} size={32}>a taste of openness, beyond subject and object</Glow></At>
      {items.map(([x, y, col], i) => <At key={i} x={x} y={y} s={pop(t, fps, op + 0.4 + i * 0.1)}><Orb size={54} color={col} /></At>)}
      {/* the openness taken as a ground: drawn only to be removed */}
      <At x={960} y={640 + 160 * remove} s={pop(t, fps, hg)} o={1 - remove}>
        <div style={{ width: 1000, height: 90, borderRadius: 14, border: `3px solid ${GOLD}`, background: `${GOLD}44`, boxShadow: `0 0 40px ${GOLD}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 32, color: CHALK }}>openness as the hidden ground</div>
      </At>
      <At x={1560} y={560} o={between(t, fi, sm + 0.8, 0.4)}><Glow color={DIM} size={28}>feels like the real thing</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, Math.min(al - 0.4, sm + 2.4), 0.4) }}><XMark x={960} y={640} r={55} at={sm + 0.3} /></AbsoluteFill>
      <At x={960} y={790} o={ramp(t, sm + 0.5, 0.4) * (1 - ramp(t, al - 0.2, 0.4))}><Glow color={WARM} size={34}>the same mistake, one level down</Glow></At>
      {/* luminosity among appearances, not beneath them */}
      {items.map(([x, y], i) => <Ring key={i} x={x} y={y} p={((t - al) * 0.5 + i * 0.17) % 1 * (t > al ? 1 : 0)} r0={30} r1={110} color={GOLD} width={2} />)}
      <At x={960} y={640} o={ramp(t, al, 0.4)}><Chip color={GOLD} size={32}>awareness, luminosity: dependently designated</Chip></At>
      <At x={960} y={760} o={ramp(t, vp, 0.4)}><Glow color={ICE} size={38} serif>and vividly present</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. layers
const LayersScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pl = c("the path runs in layers", 0.4);
  const qr = c("a question returns");
  const hd = c("How does this still function");
  const nl = c("the next, finer layer");
  const mpp = c("Mountain, process, particular");
  const sh = c("The same habit each time");
  const cf = c("something that came first");
  const layers = [["mountain", INDIGO], ["process", TEAL], ["particular", AMBER], ["presence", ICE]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, pl, 0.4)}><Glow color={CHALK} size={46} serif>the path runs in layers</Glow></At>
      {layers.map(([w, col], i) => {
        const at = i === 0 ? pl + 0.4 : mpp + (i - 1) * 0.5;
        const peel = ramp(t, (i === 0 ? qr : mpp + i * 0.5) + 0.3, 0.8);
        return (
          <At key={i} x={760 + peel * 0} y={260 + i * 110} s={pop(t, fps, at)} o={1 - peel * 0.6}>
            <div style={{ width: 760 - i * 120, height: 80, borderRadius: 40, border: `3px solid ${col}`, background: `${col}${peel > 0.5 ? "11" : "33"}`,
              boxShadow: `0 0 22px ${col}66`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 32, color: CHALK,
              borderStyle: peel > 0.5 ? "dashed" : "solid" }}>{w}</div>
          </At>
        );
      })}
      <At x={1500} y={300} o={ramp(t, hd, 0.4)}><Glow color={GOLD} size={34} serif>how does this still</Glow></At>
      <At x={1500} y={350} o={ramp(t, hd, 0.4)}><Glow color={GOLD} size={34} serif>function so vividly?</Glow></At>
      <Flow x1={1500} y1={390} x2={1500} y2={520} color={GOLD} p={ramp(t, nl, 0.5)} />
      <At x={1500} y={560} o={ramp(t, nl + 0.3, 0.4)}><Glow color={ICE} size={30}>the next, finer layer</Glow></At>
      <At x={960} y={720} o={ramp(t, sh, 0.4)}><Glow color={CHALK} size={32}>the same habit each time:</Glow></At>
      <StruckChip x={960} y={800} at={cf - 0.3} strikeAt={cf + 0.8} color={WARM} size={32}>one side made to come first</StruckChip>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const e = c("It ends, if it ends", 0.4);
  const nn = c("no longer needed");
  const road = c("still holds up the road");
  const cof = c("still holds the coffee");
  const tk = c("Nothing was taken from the world");
  const ob = c("Only the belief");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={between(t, e, tk, 0.5)}><Glow color={DIM} size={36}>the questioning, no longer needed</Glow></At>
      {Array.from({ length: 8 }).map((_, i) => (
        <At key={i} x={500 + rand(i) * 920} y={160 + rand(i + 3) * 80} o={ramp(t, e, 0.4) * (1 - ramp(t, nn + 0.2 + i * 0.1, 0.8))}><Glow color={DIM} size={44} serif>?</Glow></At>
      ))}
      <At x={620} y={460} s={pop(t, fps, road)}><MountainIcon w={480} road={ramp(t, road + 0.2, 1.2)} /></At>
      <At x={1320} y={470} s={pop(t, fps, cof)}><CupIcon size={1.5} /></At>
      <At x={960} y={130} o={ramp(t, tk, 0.5)}><Glow color={GOLD} size={50} serif>nothing missing</Glow></At>
      <At x={960} y={760} o={ramp(t, ob, 0.4) * (1 - ramp(t, ob + 2.0, 1.4))}><div style={{ position: "relative" }}><Chip color={DIM} size={32}>something had to come first</Chip><Strike at={ob + 0.9} /></div></At>
      <Ring x={960} y={460} p={ramp(t, tk + 0.4, 2.2)} r0={100} r1={600} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["recap", 0], ["wrong", c("Two conclusions are tempting", 0.6)], ["wrong", c("The second says", 0.6)],
    ["turn", c("Here is the real turn", 0.6)], ["turn", c("the mistake is so easy", 0.6)], ["fault", c("two faults can remain", 0.6)],
    ["fault", c("A mind that keeps negating", 0.6)], ["open", c("The second fault is subtler", 0.6)], ["layers", c("the path runs in layers", 0.6)],
    ["recap", c("It ends, if it ends", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Two conclusions are tempting", 0.9)], <RecapScene />],
    [S("Two conclusions are tempting", "The second says"), <NihilScene />],
    [S("The second says", "Here is the real turn"), <HiddenScene />],
    [S("Here is the real turn", "the mistake is so easy"), <TurnScene />],
    [S("the mistake is so easy", "two faults can remain"), <MistakeScene />],
    [S("two faults can remain", "A mind that keeps negating"), <DenialScene />],
    [S("A mind that keeps negating", "The second fault is subtler"), <CircleScene />],
    [S("The second fault is subtler", "the path runs in layers"), <GroundScene />],
    [S("the path runs in layers", "It ends, if it ends"), <LayersScene />],
    [S("It ends, if it ends", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
