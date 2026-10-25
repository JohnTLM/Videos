// The Observer and the Taste of Presence, Chapter 10: Change Without a Changer. Explainer drawings timed to the narration.
// Arc: a flame flickers, water freezes, a person ages -> the picture: a noun with verbs happening to it, a carrier underneath ->
// look for it: wax vapour, oxygen, light, passing through; nothing is the flame across the minute -> no noun apart from verbs,
// no verbs apart from the noun -> walker and walking, changer and change, named together -> the habit is grammar, subject then
// predicate, laid over experience -> no better subject (not process, flow, energy); the frame of before and after does not stand
// alone -> the candle burns down from dusk to midnight; nothing lost -> only the passenger let go -> the test: look for the
// something (fading sound, passing thought, leaning flame) -> more change, vivid and exact, and no changer behind it.
// Stance: the carrier, the passenger and any substitute subject are drawn dashed only to be struck or dissolved; change stays vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, IceCube, Mist, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A flame flickers", "Water freezes", "A person ages",
  "This is how we picture change", "a noun, with verbs happening to it", "There is a flame, and the flame flickers",
  "The noun is the stable carrier", "The verbs are what befall it", "we look for the carrier underneath",
  "Look for it", "wax vapour, oxygen and light", "They were not there a moment ago", "Nothing in the flame is the flame",
  "Take away the burning", "The noun is never found apart from the verbs", "Yet the verbs are not found apart from the noun",
  "A flickering with nothing flickering", "a flame that does not flicker",
  "makes the point with walking", "The walker and the walking", "Neither is found first", "The same holds for changer and change",
  "Neither is a thing waiting behind the naming",
  "the habit is so hard to set down", "not a belief about flames", "the grammar of a sentence", "subject then predicate",
  "taken for the shape of the world",
  "does not replace the subject with a better one", "Not a process, not a flow, not an energy", "within a frame of before and after",
  "that frame does not stand on its own",
  "What remains is change, met without", "The candle still burns down", "shorter at midnight than at dusk",
  "when it was lit, and when it went out", "Nothing is lost from the burning",
  "Only the passenger is let go", "ride along underneath", "everything about it differed",
  "The test is available at once", "a picture of something changing arises", "look for the something", "Not in theory", "the sound that is fading", "the thought that is passing",
  "the flame that is leaning",
  "Look for what is changing, apart from the changing", "The picture insists it must be there", "The looking finds more change",
  "no changer behind it",
];

// Book 4 mood: plum and gold
const M = {
  change: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  noun: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  look: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  grammar: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  candle: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
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

/** A dashed outline of a person: a looked-for "something" (o 0..1). */
const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

/** A flickering flame (lean -1..1; still freezes it). */
const Flame: React.FC<{ size?: number; lean?: number; seed?: number; still?: boolean }> = ({ size = 1, lean = 0, seed = 0, still }) => {
  const { t } = useT();
  const f = still ? 0 : Math.sin(t * 9 + seed) * 5 + Math.sin(t * 13.7 + seed * 2) * 3;
  const tip = 60 + lean * 26 + f * 0.8, mid = 60 + (tip - 60) * 0.6;
  return (
    <svg width={120 * size} height={180 * size} viewBox="0 0 120 180" style={{ overflow: "visible", filter: still ? "grayscale(0.8)" : `drop-shadow(0 0 16px ${WARM}) drop-shadow(0 0 34px ${GOLD}88)` }}>
      <path d={`M60 176 C24 172 16 132 34 100 C46 78 ${tip - 6} 46 ${tip} ${6 + Math.abs(f) * 0.6} C${tip + 10} 50 104 84 100 124 C98 160 84 176 60 176 Z`} fill={`${WARM}cc`} />
      <path d={`M60 172 C40 168 36 140 46 120 C54 104 ${mid} 80 ${mid} ${60 + f * 0.4} C${mid + 6} 92 84 112 82 136 C80 160 72 172 60 172 Z`} fill={GOLD} />
      <ellipse cx={60} cy={150} rx={12} ry={18} fill="#FFF6D8" />
    </svg>
  );
};

/** A candle of height h (px) with a flame on top (on 0..1). */
const Candle: React.FC<{ h: number; on?: number }> = ({ h, on = 1 }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ opacity: on, marginBottom: -26 }}><Flame size={0.55} /></div>
    <div style={{ width: 4, height: 14, background: "#333" }} />
    <div style={{ width: 90, height: h, borderRadius: "10px 10px 4px 4px", background: "linear-gradient(90deg, #efe6cf, #fff8e6 40%, #d8ccb0)",
      boxShadow: `0 0 30px ${GOLD}55` }} />
    <div style={{ width: 160, height: 16, borderRadius: 8, background: "#C9A06A" }} />
  </div>
);

/** A magnifying glass. */
const Magnifier: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={180} height={180} viewBox="0 0 180 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <circle cx={70} cy={70} r={56} fill={`${ICE}14`} stroke={color} strokeWidth={8} />
    <path d="M112 112 L168 168" stroke={color} strokeWidth={14} strokeLinecap="round" />
  </svg>
);

/** A walking stick figure (pace in radians per second). */
const Walker: React.FC<{ color?: string; still?: boolean }> = ({ color = CHALK, still }) => {
  const { t } = useT();
  const s = still ? 0 : Math.sin(t * 6) * 26;
  return (
    <svg width={160} height={280} viewBox="0 0 160 280" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      <circle cx={80} cy={36} r={26} fill={`${color}22`} stroke={color} strokeWidth={6} />
      <path d={`M80 62 L80 160 M80 90 L${80 + s} 140 M80 90 L${80 - s} 140 M80 160 L${80 + s * 1.3} 260 M80 160 L${80 - s * 1.3} 260`}
        stroke={color} strokeWidth={7} strokeLinecap="round" fill="none" />
    </svg>
  );
};

/** A person who ages (a 0..1): the back bends, hair greys, a stick appears. */
const Ageing: React.FC<{ a: number }> = ({ a }) => {
  const bend = 30 * a;
  const hair = a < 0.5 ? "#6b4a2a" : "#d9d9d9";
  return (
    <svg width={200} height={300} viewBox="0 0 200 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ROSE}88)` }}>
      <circle cx={100 + bend} cy={40 + bend * 0.5} r={28} fill={`${ROSE}22`} stroke={ROSE} strokeWidth={6} />
      <path d={`M${88 + bend} ${16 + bend * 0.5} Q${100 + bend} ${4 + bend * 0.5} ${120 + bend} ${18 + bend * 0.5}`} stroke={hair} strokeWidth={8} fill="none" strokeLinecap="round" />
      <path d={`M${100 + bend * 0.8} ${68 + bend * 0.4} Q${100 + bend * 0.6} 120 100 170 M100 170 L80 280 M100 170 L120 280 M${100 + bend * 0.6} 100 L${130 + bend} 160`}
        stroke={ROSE} strokeWidth={7} strokeLinecap="round" fill="none" />
      <path d={`M${132 + bend} 160 L${136 + bend} 280`} stroke="#C9A06A" strokeWidth={6} strokeLinecap="round" opacity={ramp(a, 0.6, 0.3)} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpeningScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fl = c("A flame flickers"), wf = c("Water freezes"), pa = c("A person ages");
  const frz = ramp(t, wf + 0.4, 1.2);
  const age = 0.5 - 0.5 * Math.cos(Math.max(0, t - pa) * 1.2);
  return (
    <AbsoluteFill>
      <At x={420} y={420} s={pop(t, fps, fl)}><Flame size={1.3} /></At>
      <At x={420} y={640} o={ramp(t, fl + 0.3, 0.4)}><Chip color={WARM} size={32}>flickers</Chip></At>
      <At x={960} y={420} o={ramp(t, wf, 0.4) * (1 - frz)}>
        <svg width={200} height={200} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
          {[0, 1, 2].map((k) => <path key={k} d={`M10 ${80 + k * 30} Q55 ${60 + k * 30 + Math.sin(t * 3 + k) * 14} 100 ${80 + k * 30} T190 ${80 + k * 30}`}
            fill="none" stroke={ICE} strokeWidth={6} strokeLinecap="round" />)}
        </svg>
      </At>
      <At x={960} y={420} o={frz} s={0.7 + 0.3 * frz}><IceCube size={140} spin={t * 15} flash={between(t, wf + 0.8, wf + 1.6, 0.3)} /></At>
      <At x={960} y={640} o={ramp(t, wf + 0.3, 0.4)}><Chip color={ICE} size={32}>freezes</Chip></At>
      <At x={1500} y={420} o={ramp(t, pa - 0.2, 0.5)}><Ageing a={age} /></At>
      <At x={1500} y={640} o={ramp(t, pa + 0.3, 0.4)}><Chip color={ROSE} size={32}>ages</Chip></At>
    </AbsoluteFill>
  );
};

const PictureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pic = c("This is how we picture change"), nv = c("a noun, with verbs happening to it"), sent = c("There is a flame, and the flame flickers");
  const stable = c("The noun is the stable carrier"), bef = c("The verbs are what befall it"), under = c("we look for the carrier underneath");
  const verbs: [string, string][] = [["flickers", WARM], ["leans", GOLD], ["dims", VIOLET], ["flares", ROSE]];
  const hit = (i: number) => Math.max(0, Math.sin((t - bef) * 3 - i)) * ramp(t, bef, 0.3);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, pic, 0.5)}><Glow color={CHALK} size={42} serif>how we picture change</Glow></At>
      <At x={960} y={420} s={pop(t, fps, nv)}>
        <div style={{ width: 260, height: 130, borderRadius: 14, border: `5px solid ${TEAL}`, background: `${TEAL}22`, boxShadow: `0 0 30px ${TEAL}66`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 52, color: CHALK }}>flame</div>
      </At>
      <At x={960} y={520} o={ramp(t, nv + 0.4, 0.4)}><Glow color={TEAL} size={26}>noun</Glow></At>
      {verbs.map(([w, col], i) => {
        const a = (i / 4) * Math.PI * 2 + t * 0.4;
        const r = 330 - 40 * hit(i);
        return (
          <React.Fragment key={w}>
            <At x={960 + r * Math.cos(a)} y={420 + r * 0.6 * Math.sin(a)} s={pop(t, fps, nv + 0.6 + i * 0.25)}><Chip color={col} size={30}>{w}</Chip></At>
          </React.Fragment>
        );
      })}
      <At x={1600} y={240} o={ramp(t, nv + 1.4, 0.4)}><Glow color={WARM} size={26}>verbs</Glow></At>
      <At x={960} y={220} o={between(t, sent, under, 0.4)}><Glow color={GOLD} size={34} serif>“there is a flame, and it flickers”</Glow></At>
      <At x={960} y={640} o={ramp(t, stable, 0.5)}><Chip color={TEAL} size={30}>the stable carrier?</Chip></At>
      <At x={960} y={720} o={ramp(t, bef, 0.5)}><Glow color={WARM} size={28}>verbs befall it</Glow></At>
      <At x={760 + 400 * (0.5 + 0.5 * Math.sin((t - under) * 1.5))} y={790} o={ramp(t, under, 0.5)}><div style={{ transform: "scale(0.5)" }}><Magnifier /></div></At>
      <At x={960} y={220} o={ramp(t, under + 0.4, 0.5)}><Glow color={DIM} size={30}>a carrier underneath?</Glow></At>
    </AbsoluteFill>
  );
};

const LookFlameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("Look for it"), parts = c("wax vapour, oxygen and light"), notThere = c("They were not there a moment ago");
  const nothing = c("Nothing in the flame is the flame");
  const go = Math.max(0, t - parts);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, look, 0.4)}><Glow color={CHALK} size={46} serif>look for it</Glow></At>
      <At x={960} y={460} s={pop(t, fps, look)}><Flame size={1.8} /></At>
      <At x={960 + 160 * Math.cos(t * 1.2)} y={430 + 80 * Math.sin(t * 1.2)} o={ramp(t, look + 0.3, 0.5) * (1 - ramp(t, parts, 0.5))}><Magnifier /></At>
      {/* wax vapour rising */}
      {Array.from({ length: 10 }).map((_, i) => {
        const p = (go * 0.5 + i / 10) % 1;
        return <At key={`w${i}`} x={960 + (rand(i) - 0.5) * 40} y={620 - p * 420} o={ramp(t, parts, 0.4) * Math.sin(p * Math.PI)}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: CHALK, filter: "blur(2px)" }} /></At>;
      })}
      {/* oxygen flowing in from the sides */}
      {Array.from({ length: 12 }).map((_, i) => {
        const p = (go * 0.4 + i / 12) % 1, side = i % 2 ? 1 : -1;
        return <At key={`o${i}`} x={960 + side * (420 - p * 380)} y={460 + (rand(i + 3) - 0.5) * 160} o={ramp(t, parts + 0.6, 0.4) * Math.sin(p * Math.PI)}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: ICE, boxShadow: `0 0 10px ${ICE}` }} /></At>;
      })}
      <Ring x={960} y={430} p={(Math.max(0, t - parts - 1.2) * 0.7) % 1} r0={80} r1={360} color={GOLD} />
      <At x={960} y={700} s={pop(t, fps, parts)}><Chip color={CHALK} size={28}>wax vapour</Chip></At>
      <At x={480} y={460} s={pop(t, fps, parts + 0.6)}><Chip color={ICE} size={28}>oxygen</Chip></At>
      <At x={1440} y={330} s={pop(t, fps, parts + 1.2)}><Chip color={GOLD} size={28}>light</Chip></At>
      <At x={1440} y={560} o={ramp(t, notThere, 0.5)}><Glow color={TEAL} size={28}>arriving, and gone</Glow></At>
      <Struck x={960} y={800} at={nothing} strikeAt={nothing + 1.4} color={DIM} size={30}>the flame, across the minute</Struck>
    </AbsoluteFill>
  );
};

const NeitherApartScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const take = c("Take away the burning"), never = c("The noun is never found apart from the verbs");
  const yet = c("Yet the verbs are not found apart from the noun"), fl = c("A flickering with nothing flickering"), still = c("a flame that does not flicker");
  const out = ramp(t, take + 0.4, 1.0);
  const wig = Array.from({ length: 30 }).map((_, i) => `${i ? "L" : "M"}${1260 + i * 7} ${420 + Math.sin(i * 0.8 + t * 9) * 26}`).join(" ");
  return (
    <AbsoluteFill>
      <Svg><DrawPath d="M960 180 L960 760" p={ramp(t, yet - 0.4, 0.8)} color={DIM} width={2} len={600} glow={false} /></Svg>
      <At x={560} y={420} o={1 - out}><Flame size={1.3} /></At>
      <At x={560} y={420} o={out * (1 - ramp(t, never + 1.2, 0.6))}>
        <svg width={160} height={240} viewBox="0 0 120 180" style={{ overflow: "visible" }}>
          <path d="M60 176 C24 172 16 132 34 100 C46 78 54 46 60 6 C70 50 104 84 100 124 C98 160 84 176 60 176 Z" fill="none" stroke={DIM} strokeWidth={4} strokeDasharray="10 8" />
        </svg>
      </At>
      <At x={560} y={160} o={ramp(t, take, 0.4)}><Glow color={DIM} size={28}>take away the burning…</Glow></At>
      <At x={560} y={620} o={ramp(t, out, 0.4)}><Glow color={DIM} size={26}>a flame left over?</Glow></At>
      <Crossed x={560} y={420} at={take + 1.6} size={90} />
      <At x={560} y={730} s={pop(t, fps, never)}><Chip color={TEAL} size={28}>no noun apart from verbs</Chip></At>
      <Svg style={{ opacity: ramp(t, fl, 0.5) }}><path d={wig} fill="none" stroke={WARM} strokeWidth={5} strokeDasharray="8 8" strokeLinecap="round" /></Svg>
      <At x={1360} y={300} o={ramp(t, fl + 0.3, 0.4)}><Glow color={DIM} size={26}>flickering, with nothing?</Glow></At>
      <Crossed x={1360} y={420} at={fl + 1.4} size={70} />
      <At x={1560} y={460} o={ramp(t, still, 0.5)}><Flame size={0.8} still /></At>
      <At x={1560} y={300} o={ramp(t, still + 0.3, 0.4)}><Glow color={DIM} size={24}>a still flame?</Glow></At>
      <Crossed x={1560} y={460} at={still + 1.2} size={60} />
      <At x={1360} y={730} s={pop(t, fps, yet)}><Chip color={WARM} size={28}>no verbs apart from the noun</Chip></At>
    </AbsoluteFill>
  );
};

const WalkerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wk = c("makes the point with walking"), ww = c("The walker and the walking"), first = c("Neither is found first");
  const cc = c("The same holds for changer and change"), behind = c("Neither is a thing waiting behind the naming");
  const x = 300 + ((Math.max(0, t - wk) * 120) % 1320);
  return (
    <AbsoluteFill>
      <Svg><DrawPath d="M240 560 L1680 560" p={ramp(t, wk, 1)} color={DIM} width={3} len={1500} glow={false} /></Svg>
      <At x={x} y={420} o={ramp(t, wk, 0.5)}><Walker /></At>
      <At x={620} y={140} s={pop(t, fps, ww)}><Chip color={ROSE} size={36}>the walker</Chip></At>
      <At x={1300} y={140} s={pop(t, fps, ww)}><Chip color={TEAL} size={36}>the walking</Chip></At>
      <Flow x1={790} y1={128} x2={1120} y2={128} color={ROSE} p={ramp(t, ww + 0.5, 0.5)} />
      <Flow x1={1120} y1={152} x2={790} y2={152} color={TEAL} p={ramp(t, ww + 0.7, 0.5)} />
      <At x={960} y={230} o={ramp(t, ww + 1.0, 0.5)}><Glow color={GOLD} size={28}>named together</Glow></At>
      <Struck x={960} y={300} at={first} strikeAt={first + 1.0} color={DIM} size={28}>one of them first</Struck>
      <At x={620} y={660} s={pop(t, fps, cc)}><Chip color={VIOLET} size={36}>changer</Chip></At>
      <At x={1300} y={660} s={pop(t, fps, cc + 0.3)}><Chip color={GOLD} size={36}>change</Chip></At>
      <Flow x1={770} y1={648} x2={1150} y2={648} color={VIOLET} p={ramp(t, cc + 0.6, 0.5)} />
      <Flow x1={1150} y1={672} x2={770} y2={672} color={GOLD} p={ramp(t, cc + 0.8, 0.5)} />
      <At x={1700} y={420} o={ramp(t, behind, 0.5) * (1 - ramp(t, behind + 2.6, 0.8))}><Ghost o={1} size={0.8} /></At>
      <Crossed x={1700} y={420} at={behind + 1.4} size={90} />
      <At x={960} y={780} o={ramp(t, behind + 0.4, 0.5)}><Glow color={DIM} size={28}>nothing waiting behind the naming</Glow></At>
    </AbsoluteFill>
  );
};

const GrammarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hard = c("the habit is so hard to set down"), belief = c("not a belief about flames"), gram = c("the grammar of a sentence");
  const sp = c("subject then predicate"), shape = c("taken for the shape of the world");
  const lay = ramp(t, shape - 1.6, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, hard, 0.5)}><Glow color={CHALK} size={42} serif>a habit, hard to set down</Glow></At>
      <Struck x={960} y={190} at={belief} strikeAt={belief + 1.0} color={DIM} size={30}>a belief about flames</Struck>
      <At x={960} y={340 + 120 * lay} s={pop(t, fps, gram)}>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ padding: "14px 30px", border: `4px solid ${TEAL}`, borderRadius: 12, background: `${TEAL}22`, fontFamily: SERIF, fontSize: 48, color: CHALK }}>The flame</div>
          <div style={{ padding: "14px 30px", border: `4px solid ${WARM}`, borderRadius: 12, background: `${WARM}22`, fontFamily: SERIF, fontSize: 48, color: CHALK }}>flickers</div>
        </div>
      </At>
      <At x={850} y={430 + 120 * lay} o={ramp(t, sp, 0.4) * (1 - lay)}><Glow color={TEAL} size={28}>subject</Glow></At>
      <At x={1110} y={430 + 120 * lay} o={ramp(t, sp + 0.5, 0.4) * (1 - lay)}><Glow color={WARM} size={28}>predicate</Glow></At>
      {/* experience: vivid, unsorted */}
      <At x={960} y={560} o={ramp(t, shape - 2, 0.6)}>
        <div style={{ position: "relative", width: 900, height: 260 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 40 + rand(i) * 800, top: 30 + rand(i + 4) * 180 + Math.sin(t * 1.5 + i) * 8 }}>
              <Orb size={30 + rand(i + 2) * 40} color={[TEAL, ROSE, GOLD, ICE, GREEN, VIOLET][i % 6]} />
            </div>
          ))}
        </div>
      </At>
      <At x={960} y={560} o={lay * 0.8}>
        <div style={{ width: 900, height: 260, border: `4px solid ${GOLD}`, borderRadius: 10, display: "flex" }}>
          <div style={{ flex: 1, borderRight: `4px solid ${GOLD}`, background: `${TEAL}18` }} /><div style={{ flex: 1, background: `${WARM}18` }} />
        </div>
      </At>
      <At x={960} y={790} o={ramp(t, shape + 0.4, 0.5)}><Glow color={GOLD} size={32} serif>mistaken for the world's shape</Glow></At>
    </AbsoluteFill>
  );
};

const NotBetterScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rep = c("does not replace the subject with a better one"), npf = c("Not a process, not a flow, not an energy");
  const frame = c("within a frame of before and after"), own = c("that frame does not stand on its own");
  const cands: [string, string][] = [["a process", TEAL], ["a flow", ICE], ["an energy", GOLD]];
  const top = 1 - ramp(t, frame - 0.3, 0.6);
  const fgone = ramp(t, own + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <div style={{ opacity: top }}>
        <At x={960} y={110} o={ramp(t, rep, 0.5)}><Glow color={CHALK} size={40} serif>no better subject</Glow></At>
        <At x={960} y={300} s={pop(t, fps, rep + 0.4)}>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ width: 260, height: 90, border: `4px dashed ${DIM}`, borderRadius: 12 }} />
            <div style={{ padding: "12px 28px", border: `4px solid ${WARM}`, borderRadius: 12, background: `${WARM}22`, fontFamily: SERIF, fontSize: 44, color: CHALK }}>changes</div>
          </div>
        </At>
        {cands.map(([w, col], i) => (
          <Struck key={w} x={560 + i * 400} y={520} at={npf + i * 0.6} strikeAt={npf + i * 0.6 + 0.6} color={col} size={34}>{w}</Struck>
        ))}
        <At x={960} y={660} o={ramp(t, npf + 2.2, 0.5)}><Glow color={DIM} size={28}>no new carrier in the empty slot</Glow></At>
      </div>
      <At x={960} y={420} o={ramp(t, frame, 0.5) * (1 - fgone)} blur={fgone * 10}>
        <div style={{ width: 1300, height: 220, borderRadius: 16, border: `4px ${t > own ? "dashed" : "solid"} ${GOLD}`, background: `${GOLD}0c` }} />
      </At>
      <Svg style={{ opacity: ramp(t, frame + 0.3, 0.5) }}>
        <DrawPath d="M400 420 L1520 420 M1490 400 L1524 420 L1490 440" p={ramp(t, frame + 0.3, 1)} color={CHALK} width={5} len={1300} />
      </Svg>
      <At x={420} y={350} o={ramp(t, frame + 0.6, 0.4)}><Glow color={ICE} size={30}>before</Glow></At>
      <At x={1500} y={350} o={ramp(t, frame + 0.9, 0.4)}><Glow color={ROSE} size={30}>after</Glow></At>
      <At x={760} y={480} s={pop(t, fps, frame + 1.2)}><Chip color={VIOLET} size={30}>changer</Chip></At>
      <At x={1160} y={480} s={pop(t, fps, frame + 1.5)}><Chip color={GOLD} size={30}>change</Chip></At>
      <At x={960} y={700} o={ramp(t, own + 0.4, 0.5)}><Glow color={GOLD} size={32} serif>the frame does not stand alone</Glow></At>
    </AbsoluteFill>
  );
};

const CandleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rem = c("What remains is change, met without"), burns = c("The candle still burns down"), mid = c("shorter at midnight than at dusk");
  const lit = c("when it was lit, and when it went out"), lost = c("Nothing is lost from the burning");
  const p = ramp(t, burns, (mid + 2) - burns);
  const h = 320 - 200 * p;
  const sky = `linear-gradient(180deg, ${p < 0.5 ? "#c46a4a" : "#1d1b44"}, #2a1d3a)`;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, rem, 0.5)}><Glow color={CHALK} size={40} serif>change, without a thing that changes</Glow></At>
      <At x={600} y={430} o={ramp(t, burns - 0.3, 0.5)}>
        <div style={{ width: 300, height: 300, borderRadius: 20, background: sky, opacity: 0.85, boxShadow: `0 0 30px ${VIOLET}44`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 40 + 180 * p, top: 200 - 150 * Math.sin(p * Math.PI * 0.9), width: 60, height: 60, borderRadius: "50%",
            background: p < 0.4 ? "#ffb84a" : "#fffbe8", boxShadow: `0 0 30px ${p < 0.4 ? "#ffb84a" : "#fff6d8"}` }} />
        </div>
      </At>
      <At x={600} y={630} o={ramp(t, burns, 0.4)}><Chip color={p < 0.5 ? WARM : VIOLET} size={30}>{p < 0.5 ? "dusk" : "midnight"}</Chip></At>
      <At x={1100} y={540 - h / 2} o={ramp(t, rem + 0.8, 0.6)}><Candle h={h} /></At>
      <At x={1100} y={415} o={ramp(t, mid, 0.5) * 0.6}><div style={{ width: 100, height: 320, border: `3px dashed ${DIM}`, borderRadius: 10 }} /></At>
      <At x={1320} y={380} o={ramp(t, mid + 0.4, 0.4)}><Glow color={DIM} size={26}>at dusk</Glow></At>
      <At x={1320} y={500} o={ramp(t, mid + 0.8, 0.4)}><Glow color={GOLD} size={26}>at midnight</Glow></At>
      <At x={1560} y={300} s={pop(t, fps, lit)}><Chip color={GOLD} size={28}>lit at dusk</Chip></At>
      <At x={1560} y={390} o={ramp(t, lit + 0.3, 0.3)}><Tick at={lit + 0.4} /></At>
      <At x={1560} y={480} s={pop(t, fps, lit + 1.0)}><Chip color={VIOLET} size={28}>went out later</Chip></At>
      <At x={1560} y={570} o={ramp(t, lit + 1.3, 0.3)}><Tick at={lit + 1.4} /></At>
      <At x={960} y={760} o={ramp(t, lost, 0.5)}><Glow color={GOLD} size={36} serif>nothing lost from the burning</Glow></At>
    </AbsoluteFill>
  );
};

const PassengerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pass = c("Only the passenger is let go"), ride = c("ride along underneath"), diff = c("everything about it differed");
  const gone = ramp(t, diff + 0.8, 1.6);
  const x = 520 + 880 * ramp(t, pass - 0.4, (diff + 1) - (pass - 0.4));
  const prog = ramp(t, pass - 0.4, (diff + 1) - (pass - 0.4));
  return (
    <AbsoluteFill>
      <At x={x} y={420 - (240 - 150 * prog) / 2} s={pop(t, fps, pass - 0.4)}><Candle h={240 - 150 * prog} /></At>
      <At x={x - 20 * gone} y={660 + 40 * gone} o={ramp(t, pass, 0.5) * (1 - gone)} blur={gone * 12}><Ghost o={1} size={0.55} /></At>
      <At x={x} y={800} o={ramp(t, pass + 0.3, 0.5) * (1 - gone)}><Glow color={DIM} size={28}>the passenger</Glow></At>
      <At x={960} y={110} o={ramp(t, ride, 0.5)}><Glow color={DIM} size={34}>riding along underneath?</Glow></At>
      <At x={960} y={200} o={ramp(t, diff, 0.5)}><Glow color={DIM} size={30}>the same, while all else differs?</Glow></At>
      <At x={960} y={290} o={ramp(t, gone, 0.4)}><Glow color={GOLD} size={38} serif>let go</Glow></At>
    </AbsoluteFill>
  );
};

const TestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const test = c("The test is available at once"), pic = c("a picture of something changing arises"), look = c("look for the something"), theory = c("Not in theory");
  const snd = c("the sound that is fading"), th = c("the thought that is passing"), fl = c("the flame that is leaning");
  const fade = ramp(t, snd + 0.4, 3);
  const drift = ramp(t, th + 0.2, 3);
  return (
    <AbsoluteFill>
      <Head text="the test" at={test} y={60} size={70} />
      <At x={960} y={520} o={between(t, pic - 0.3, snd - 0.8, 0.5)}>
        <div style={{ position: "relative", width: 560, height: 300, borderRadius: 8, border: `3px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}55, inset 0 0 30px ${GOLD}22` }}>
          <div style={{ position: "absolute", left: 4, top: -46, fontFamily: SERIF, fontSize: 30, color: GOLD }}>a picture of change</div>
          <div style={{ position: "absolute", left: 110, top: 70 }}><Flame size={0.8} lean={Math.sin(t * 0.8) * 0.5} /></div>
          <div style={{ position: "absolute", left: 290, top: 95, width: 210, height: 110, borderRadius: 16, border: `3px dashed ${DIM}`, display: "flex",
            alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 32, color: DIM,
            opacity: 1 - ramp(t, look + 1.0, 1.4), filter: `blur(${ramp(t, look + 1.0, 1.4) * 10}px)` }}>something?</div>
        </div>
      </At>
      <At x={960 + 500 * Math.sin((t - look) * 0.9)} y={250} o={ramp(t, look, 0.5)}><div style={{ transform: "scale(0.6)" }}><Magnifier /></div></At>
      <At x={960} y={250} o={ramp(t, look + 0.4, 0.5) * (1 - ramp(t, theory, 0.4))}><Glow color={CHALK} size={30}>look for the something</Glow></At>
      <Struck x={960} y={250} at={theory} strikeAt={theory + 0.8} color={DIM} size={30}>in theory</Struck>
      <At x={440} y={500} s={pop(t, fps, snd)} o={1 - 0.7 * fade}><Orb size={90} color={ICE} /></At>
      <Svg style={{ opacity: ramp(t, snd, 0.4) * (1 - 0.8 * fade) }}>
        {[0, 1, 2, 3].map((i) => {
          const p = ((t * 0.7 + i / 4) % 1), r = 40 + p * (200 - 120 * fade);
          return <path key={i} d={`M${500 + r * Math.cos(-0.7)} ${500 + r * Math.sin(-0.7)} A${r} ${r} 0 0 1 ${500 + r * Math.cos(0.7)} ${500 + r * Math.sin(0.7)}`}
            fill="none" stroke={ICE} strokeWidth={5} strokeOpacity={1 - p} strokeLinecap="round" />;
        })}
      </Svg>
      <At x={440} y={680} o={ramp(t, snd + 0.3, 0.4)}><Chip color={ICE} size={28}>a sound, fading</Chip></At>
      <At x={960 + 160 * drift} y={500 - 60 * drift} s={pop(t, fps, th)} o={1 - 0.8 * drift}>
        <div style={{ width: 220, height: 130, borderRadius: 65, border: `4px solid ${VIOLET}`, background: `${VIOLET}22`, boxShadow: `0 0 24px ${VIOLET}66` }} />
      </At>
      <At x={960} y={680} o={ramp(t, th + 0.3, 0.4)}><Chip color={VIOLET} size={28}>a thought, passing</Chip></At>
      <At x={1480} y={490} s={pop(t, fps, fl)}><Flame size={1.1} lean={0.9 * ramp(t, fl + 0.3, 1)} /></At>
      <At x={1480} y={680} o={ramp(t, fl + 0.3, 0.4)}><Chip color={WARM} size={28}>a flame, leaning</Chip></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("Look for what is changing, apart from the changing"), ins = c("The picture insists it must be there");
  const finds = c("The looking finds more change"), no = c("no changer behind it");
  const gone = ramp(t, no + 0.6, 1.4);
  const pulse = 1 + 0.08 * Math.sin(t * 5) * between(t, ins, finds, 0.3);
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN, VIOLET];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, look, 0.5)}><Glow color={CHALK} size={40} serif>what changes, apart from changing?</Glow></At>
      <At x={960} y={450} o={ramp(t, look + 0.4, 0.5) * (1 - gone)} s={pulse} blur={gone * 12}><Ghost o={1} size={1.1} /></At>
      <At x={960 + 260 * Math.cos(t * 1.1)} y={430 + 140 * Math.sin(t * 1.1)} o={ramp(t, look + 0.6, 0.5) * (1 - ramp(t, finds, 0.5))}><Magnifier /></At>
      <At x={960} y={230} o={between(t, ins, finds, 0.4)}><Glow color={WARM} size={34} serif>“it must be there!”</Glow></At>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 + t * 0.3;
        const r = 330 + 30 * Math.sin(t * 1.4 + i);
        const hue = cols[(i + Math.floor(t * 1.5)) % 6];
        return (
          <At key={i} x={960 + r * 1.35 * Math.cos(a)} y={450 + r * 0.8 * Math.sin(a)} s={pop(t, fps, finds + i * 0.12) * (0.8 + 0.3 * Math.sin(t * 3 + i))}>
            {i % 4 === 0 ? <div style={{ transform: "scale(0.45)" }}><Flame seed={i} lean={Math.sin(t + i) * 0.6} /></div> : <Orb size={46} color={hue} />}
          </At>
        );
      })}
      <At x={960} y={230} o={ramp(t, finds + 0.4, 0.5)}><Glow color={GOLD} size={34}>more change, vivid and exact</Glow></At>
      {t < no + 2.2 && <Crossed x={960} y={450} at={no + 0.2} size={110} />}
      <At x={960} y={790} o={ramp(t, no + 1.2, 0.3)}><Reveal text="change, and no changer" at={no + 1.2} size={60} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["change", 0], ["noun", c("This is how we picture change", 0.6)], ["look", c("Look for it", 0.6)],
    ["grammar", c("the habit is so hard to set down", 0.6)], ["candle", c("What remains is change, met without", 0.6)],
    ["look", c("The test is available at once", 0.6)], ["candle", c("Look for what is changing, apart from the changing", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("This is how we picture change", 0.9)], <OpeningScene />],
    [S("This is how we picture change", "Look for it"), <PictureScene />],
    [S("Look for it", "Take away the burning"), <LookFlameScene />],
    [S("Take away the burning", "makes the point with walking"), <NeitherApartScene />],
    [S("makes the point with walking", "the habit is so hard to set down", 1.4), <WalkerScene />],
    [S("the habit is so hard to set down", "does not replace the subject with a better one", 1.4), <GrammarScene />],
    [S("does not replace the subject with a better one", "What remains is change, met without", 1.4), <NotBetterScene />],
    [S("What remains is change, met without", "Only the passenger is let go"), <CandleScene />],
    [S("Only the passenger is let go", "The test is available at once"), <PassengerScene />],
    [S("The test is available at once", "Look for what is changing, apart from the changing"), <TestScene />],
    [S("Look for what is changing, apart from the changing", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
