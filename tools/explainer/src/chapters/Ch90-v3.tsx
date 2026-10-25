// Bonus 90 (version 3: v2 plus the passage on continuity as designation): Death and Continuity. Explainer drawings timed to the narration.
// Stance (VIDEO-SPEC section 4): luminosity is drawn as the clarity OF appearances, never as a layer or ground behind them;
// a carrier or ground is shown only in order to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mist, Mood, Orb, PictureFrame,
  ROSE, Reveal, Ring, Scene, SERIF, Snowflake, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Firewood becomes ash", "cannot return to being firewood", "regard the ash as after", "Each abides fully in its own position",
  "as winter does not become spring",
  "Under general anaesthesia", "three hours pass on the clock", "none in experience", "No river of time flowed",
  "an unconscious passenger", "put together again", "nowhere to be found as a spectator",
  "What is the fear of death tracking", "Not only pain", "leaving people behind", "the light in this room",
  "lost to someone who was holding it", "Experience is a possession", "a possessor stands behind it",
  "does not simply deny the possessor", "never needed one", "designated on its conditions", "a body", "a sense field", "a memory",
  "attention, a world", "valid because it works", "clear in itself", "calls that clarity luminosity",
  "not a substance behind the display", "the knowing clarity of the display", "heard as sound",
  "Every candidate for a carrier", "a soul", "a stream of consciousness", "a neural core", "a conserved energy",
  "something seen and named", "a carrier of its own", "Nothing more is needed", "without being owned",
  "without being taken from anyone",
  "not reached once and kept", "seen again and again", "A bell is struck", "there is a ringing", "the striking", "an ear",
  "a memory of bells", "None of these is the sound", "not hidden in any of them", "vivid and complete while it lasts",
  "The cold of ice is felt", "look for the cold inside the ice", "it does not appear", "where ice meets a body",
  "burnt fingers are burnt", "never in the object as its own",
  "makes continuity feel carried", "When ice melts", "no one mourns the cold", "A melody known by heart", "new at every playing",
  "recognised across them all", "Habits, memories", "Nothing is held that could be taken",
  "not a fluid flowing", "the designation linking", "nothing running through it", "Understanding changes the same way",
  "the new view is clearer", "the old habit was seen through", "nothing is carried over",
  "does not remove the fear of pain", "losing someone painless", "continues as the person", "It removes one dread",
  "a holder taken away", "a holding left unfinished", "nothing is deferred", "The clarity of this moment", "available now",
  "the one who is dying",
  "The candle gives exactly as much light", "taken from it by going out", "the weight with which it is watched",
];

const M = {
  fire: { a: "rgba(160,90,40,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.32)" },
  sleep: { a: "rgba(40,50,120,0.55)", b: "rgba(70,50,130,0.4)", c: "rgba(30,90,120,0.3)" },
  fear: { a: "rgba(110,50,80,0.45)", b: "rgba(50,50,120,0.45)", c: "rgba(150,110,50,0.3)" },
  clear: { a: "rgba(40,120,140,0.5)", b: "rgba(160,130,60,0.4)", c: "rgba(80,60,150,0.32)" },
  carrier: { a: "rgba(70,50,130,0.5)", b: "rgba(140,70,60,0.38)", c: "rgba(40,100,130,0.3)" },
  bell: { a: "rgba(150,120,50,0.45)", b: "rgba(50,70,140,0.45)", c: "rgba(40,120,130,0.32)" },
  ice: { a: "rgba(40,110,150,0.55)", b: "rgba(60,60,140,0.42)", c: "rgba(150,90,60,0.3)" },
  flow: { a: "rgba(60,140,110,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.3)" },
  dying: { a: "rgba(90,60,130,0.5)", b: "rgba(170,130,60,0.4)", c: "rgba(40,100,130,0.32)" },
  candle: { a: "rgba(170,110,40,0.48)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Flame: React.FC<{ s?: number; lean?: number; out?: number }> = ({ s = 1, lean = 0, out = 0 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (6 + k) + k * 1.7) * 8;
  const top = -170 - n(1);
  const d = `M${lean * 60} ${top} C ${40 + n(2) + lean * 30} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5) + lean * 30} -90, ${lean * 60} ${top} Z`;
  return (
    <svg width={260 * s} height={340 * s} viewBox="-130 -200 260 340" style={{ overflow: "visible", opacity: 1 - out, filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl90" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl90)" />
      <ellipse cx={lean * 15} cy={50} rx={28} ry={45} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};

const Candle: React.FC<{ h?: number; lit?: number }> = ({ h = 240, lit = 1 }) => {
  const { t } = useT();
  return (
    <div style={{ position: "relative", width: 200, height: 560 }}>
      <div style={{ position: "absolute", left: 3, bottom: 40 + h - 20, width: 195, height: 255 }}><Flame s={0.75} lean={Math.sin(t * 0.8) * 0.25} out={1 - lit} /></div>
      <div style={{ position: "absolute", left: 98, bottom: 40 + h - 4, width: 4, height: 18, background: "#3a2a1a" }} />
      <div style={{ position: "absolute", left: 60, bottom: 40, width: 80, height: h, borderRadius: "10px 10px 4px 4px",
        background: "linear-gradient(90deg, #e9dcc0, #fff6e2 45%, #d8c7a4)", boxShadow: `0 0 40px ${GOLD}55` }} />
      <div style={{ position: "absolute", left: 30, bottom: 20, width: 140, height: 26, borderRadius: 13, background: "#8a6a3a", border: `2px solid ${GOLD}` }} />
    </div>
  );
};

const Log: React.FC<{ burn?: number }> = ({ burn = 0 }) => (
  <svg width={300} height={140} viewBox="0 0 300 140" style={{ filter: `drop-shadow(0 0 10px ${GOLD}88)` }}>
    <rect x={20} y={40} width={250} height={70} rx={35} fill={`rgba(160,110,60,${0.35 - 0.2 * burn})`} stroke={GOLD} strokeWidth={4} />
    <ellipse cx={255} cy={75} rx={22} ry={33} fill="rgba(200,160,100,0.3)" stroke={GOLD} strokeWidth={4} />
    <ellipse cx={255} cy={75} rx={10} ry={16} fill="none" stroke={GOLD} strokeWidth={2} />
    <path d="M60 60 Q120 70 180 58 M70 92 Q140 84 210 95" fill="none" stroke={GOLD} strokeWidth={2} opacity={0.6} />
  </svg>
);

const Ash: React.FC = () => (
  <svg width={300} height={140} viewBox="0 0 300 140" style={{ filter: `drop-shadow(0 0 8px ${DIM})` }}>
    <path d="M30 120 Q80 60 150 70 Q220 60 270 120 Z" fill="rgba(180,175,165,0.35)" stroke={DIM} strokeWidth={4} />
    {Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={70 + rand(i) * 160} cy={95 + rand(i + 5) * 20} r={3} fill={CHALK} opacity={0.5} />)}
  </svg>
);

const Flower: React.FC = () => (
  <svg width={150} height={170} viewBox="0 0 150 170" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M75 160 L75 80" stroke={GREEN} strokeWidth={5} /><path d="M75 120 Q50 100 40 115 Q55 128 75 120" fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} />
    {Array.from({ length: 6 }).map((_, i) => <ellipse key={i} cx={75} cy={45} rx={14} ry={30} fill={`${ROSE}55`} stroke={ROSE} strokeWidth={3} transform={`rotate(${i * 60} 75 70)`} />)}
    <circle cx={75} cy={70} r={12} fill={GOLD} />
  </svg>
);

const Clock: React.FC<{ hours: number }> = ({ hours }) => (
  <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <circle r={120} fill="rgba(120,170,220,0.12)" stroke={ICE} strokeWidth={5} />
    {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-104} x2={0} y2={-116} stroke={ICE} strokeWidth={4} transform={`rotate(${i * 30})`} />)}
    <line x1={0} y1={0} x2={0} y2={-60} stroke={CHALK} strokeWidth={8} strokeLinecap="round" transform={`rotate(${hours * 30})`} />
    <line x1={0} y1={0} x2={0} y2={-95} stroke={CHALK} strokeWidth={4} strokeLinecap="round" transform={`rotate(${hours * 360})`} />
    <circle r={8} fill={GOLD} />
  </svg>
);

/** A head in profile; `dash` draws it as unfindable. */
const Head: React.FC<{ o?: number; dash?: boolean; color?: string; s?: number }> = ({ o = 1, dash, color = CHALK, s = 1 }) => (
  <svg width={240 * s} height={272 * s} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
  </svg>
);

const Bell: React.FC<{ swing: number }> = ({ swing }) => (
  <svg width={240} height={260} viewBox="-120 -20 240 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${GOLD})` }}>
    <g transform={`rotate(${swing})`}>
      <path d="M-8 0 L8 0 L8 20 L-8 20 Z" fill={GOLD} />
      <path d="M0 20 C -60 25, -65 90, -70 150 L -95 180 L 95 180 L 70 150 C 65 90, 60 25, 0 20 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <circle cx={0} cy={196} r={14} fill={GOLD} />
    </g>
  </svg>
);

const Window: React.FC<{ glow?: number }> = ({ glow = 1 }) => (
  <svg width={220} height={240} viewBox="0 0 220 240" style={{ filter: `drop-shadow(0 0 ${10 + 20 * glow}px ${GOLD})` }}>
    <rect x={15} y={15} width={190} height={210} rx={6} fill={`rgba(240,200,120,${0.15 + 0.25 * glow})`} stroke={GOLD} strokeWidth={4} />
    <line x1={110} y1={15} x2={110} y2={225} stroke={GOLD} strokeWidth={4} /><line x1={15} y1={120} x2={205} y2={120} stroke={GOLD} strokeWidth={4} />
  </svg>
);

const Notes: React.FC<{ play: number; color?: string }> = ({ play, color = TEAL }) => (
  <svg width={300} height={130} viewBox="0 0 300 130">
    {[0, 1, 2, 3, 4].map((i) => {
      const on = ramp(play, i * 0.18, 0.1) * (1 - ramp(play, 0.95, 0.05));
      const y = 40 + [30, 10, 20, 0, 25][i];
      return <g key={i} opacity={0.25 + 0.75 * on}><ellipse cx={30 + i * 58} cy={y + 50} rx={16} ry={12} fill={color} /><line x1={46 + i * 58} y1={y + 50} x2={46 + i * 58} y2={y} stroke={color} strokeWidth={4} /></g>;
    })}
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

/** A small appearance held in a cupped hand: experience pictured as a possession. */
const Held: React.FC<{ o?: number }> = ({ o = 1 }) => (
  <div style={{ position: "relative", width: 260, height: 220, opacity: o }}>
    <div style={{ position: "absolute", left: 80, top: 20 }}><Orb size={100} color={GOLD} /></div>
    <svg width={260} height={220} viewBox="0 0 260 220" style={{ position: "absolute", left: 0, top: 0 }}>
      <path d="M20 110 Q30 200 130 205 Q230 200 240 110" fill="rgba(255,143,163,0.15)" stroke={ROSE} strokeWidth={4} />
    </svg>
  </div>
);

// ---------------------------------------------------------------- scenes
const FirewoodScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ret = c("cannot return to being firewood"), after = c("regard the ash as after"), each = c("Each abides fully in its own position");
  const winter = c("as winter does not become spring");
  const top = 1 - ramp(t, winter - 0.6, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={560} y={420} s={pop(t, fps, c("Firewood becomes ash", 0.4))}><Log /></At>
        <Mist x={560} y={380} start={c("Firewood becomes ash")} color={WARM} spread={200} n={14} />
        <At x={1360} y={440} s={pop(t, fps, c("Firewood becomes ash") + 0.8)}><Ash /></At>
        <Flow x1={760} y1={430} x2={1180} y2={430} color={GOLD} p={between(t, c("Firewood becomes ash") + 1, each - 0.2)} />
        <At x={960} y={360} o={between(t, ret, each - 0.2, 0.4)}><Glow color={DIM} size={30}>no way back</Glow></At>
        <At x={960} y={520} o={between(t, after, each, 0.4)}><Glow color={WARM} size={32}>firewood before · ash after?</Glow></At>
        <PictureFrame x={560} y={430} w={380} h={240} tag="its own position" o={ramp(t, each, 0.6)} />
        <PictureFrame x={1360} y={430} w={380} h={240} tag="its own position" o={ramp(t, each + 0.3, 0.6)} />
        <At x={960} y={170} o={ramp(t, each + 0.5, 0.5)}><Glow color={GOLD} size={42} serif>each abides fully in its own position</Glow></At>
      </AbsoluteFill>
      <Scene from={winter - 0.6} to={1e9}>
        <At x={620} y={430} s={pop(t, fps, winter)}><Snowflake size={180} rot={t * 8} /></At>
        <At x={1300} y={430} s={pop(t, fps, winter + 0.6)}><Flower /></At>
        <PictureFrame x={620} y={430} w={300} h={280} o={ramp(t, winter, 0.6)} />
        <PictureFrame x={1300} y={430} w={300} h={280} o={ramp(t, winter + 0.4, 0.6)} />
        <At x={960} y={700} o={ramp(t, winter + 0.8, 0.5)}><Glow color={CHALK} size={38} serif>life does not become death</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const SleepScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const clockAt = c("three hours pass on the clock"), none = c("none in experience"), river = c("No river of time flowed");
  const together = c("put together again");
  const hours = 3 * ramp(t, clockAt, 2.2);
  const part2 = together - 0.5;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={130} o={ramp(t, c("Under general anaesthesia", 0.3), 0.5)}><Glow color={ICE} size={40} serif>under general anaesthesia</Glow></At>
        <At x={560} y={420} s={pop(t, fps, clockAt - 0.3)}><Clock hours={hours} /></At>
        <At x={560} y={600} o={ramp(t, clockAt + 0.5, 0.5)}><Glow color={ICE} size={32}>on the clock: three hours</Glow></At>
        <At x={1360} y={420} o={ramp(t, none, 0.5)}><div style={{ width: 260, height: 260, borderRadius: "50%", border: `3px dashed ${DIM}` }} /></At>
        <At x={1360} y={600} o={ramp(t, none + 0.2, 0.5)}><Glow color={DIM} size={32}>in experience: none</Glow></At>
        <Svg style={{ opacity: between(t, river, together - 0.6, 0.5) }}>
          {[0, 1].map((k) => <path key={k} d={`M300 ${730 + k * 26} Q 700 ${700 + k * 26} 960 ${740 + k * 26} T 1620 ${730 + k * 26}`} fill="none" stroke={TEAL} strokeWidth={4} opacity={0.6} />)}
        </Svg>
        <Struck x={960} y={700} at={c("an unconscious passenger", 0.4)} strikeAt={c("an unconscious passenger") + 0.9} color={TEAL} size={30}>a river carrying a passenger</Struck>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        {Array.from({ length: 8 }).map((_, i) => {
          const p = ramp(t, together + i * 0.08, 1.2);
          const a = (i / 8) * Math.PI * 2;
          return <At key={i} x={960 + Math.cos(a) * 340 * (1 - p)} y={440 + Math.sin(a) * 220 * (1 - p)} o={0.8 * (1 - p)}><Orb size={30} color={[GOLD, TEAL, ROSE, VIOLET][i % 4]} /></At>;
        })}
        <At x={960} y={440} o={ramp(t, together + 0.8, 0.6)}><Head /></At>
        <At x={960} y={170} o={ramp(t, together + 0.3, 0.5)}><Glow color={GREEN} size={40} serif>put together again · fully working</Glow></At>
        <At x={960} y={720} o={ramp(t, c("nowhere to be found as a spectator"), 0.5)}><Chip color={ICE} size={34}>no spectator to be found</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const FearScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const light = c("the light in this room"), lost = c("lost to someone who was holding it");
  const poss = c("Experience is a possession"), possr = c("a possessor stands behind it");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("What is the fear of death tracking", 0.3), 0.5)}><Glow color={ROSE} size={44} serif>what is the fear tracking?</Glow></At>
      <At x={420} y={260} o={ramp(t, c("Not only pain"), 0.4)}><Chip color={DIM} size={28}>pain</Chip></At>
      <At x={420} y={340} o={ramp(t, c("leaving people behind"), 0.4)}><Chip color={DIM} size={28}>leaving people behind</Chip></At>
      <At x={420} y={410} o={ramp(t, c("leaving people behind") + 0.6, 0.4)}><Glow color={DIM} size={24}>real, and not only these</Glow></At>
      <At x={1460} y={420} s={pop(t, fps, light - 0.2)}><Window /></At>
      <Mist x={1460} y={420} start={light} color={GOLD} spread={180} n={10} />
      <At x={960} y={470} s={pop(t, fps, lost - 0.4)}><Held /></At>
      <At x={720} y={440} o={ramp(t, lost, 0.6)}><Head s={0.8} color={ROSE} /></At>
      <At x={960} y={690} o={ramp(t, poss, 0.4)}><Chip color={GOLD} size={32}>1 · experience as a possession</Chip></At>
      <At x={960} y={780} o={ramp(t, possr, 0.4)}><Chip color={ROSE} size={32}>2 · a possessor behind it</Chip></At>
    </AbsoluteFill>
  );
};

const ClarityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const conds = [
    { ph: "a body", label: "a body", col: ROSE, a: -2.6 }, { ph: "a sense field", label: "a sense field", col: TEAL, a: -1.7 },
    { ph: "a memory", label: "a memory", col: VIOLET, a: -0.8 }, { ph: "attention, a world", label: "attention", col: ICE, a: 0.1 },
    { ph: "attention, a world", label: "a world", col: GREEN, a: 1.0 },
  ];
  const lum = c("calls that clarity luminosity"), notSub = c("not a substance behind the display"), know = c("the knowing clarity of the display");
  const part2 = lum - 0.6;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <Struck x={960} y={110} at={c("does not simply deny the possessor", 0.3)} strikeAt={c("never needed one")} color={DIM} size={30}>the possessor is needed</Struck>
        <At x={960} y={470} s={pop(t, fps, c("designated on its conditions", 0.3))}><Orb size={150} color={GOLD} /></At>
        {conds.map((k, i) => {
          const at = c(k.ph) + (i === 4 ? 0.6 : 0), x = 960 + Math.cos(k.a) * 430, y = 470 + Math.sin(k.a) * 260;
          return (
            <React.Fragment key={i}>
              <Flow x1={x} y1={y} x2={960} y2={470} color={k.col} p={ramp(t, at + 0.2, 0.6)} />
              <At x={x} y={y} s={pop(t, fps, at)}><Chip color={k.col} size={30}>{k.label}</Chip></At>
            </React.Fragment>
          );
        })}
        <At x={760} y={790} o={ramp(t, c("valid because it works"), 0.4)}><Chip color={GREEN} size={32}>valid · it works</Chip></At>
        <At x={1180} y={790} o={ramp(t, c("clear in itself"), 0.4)}><Chip color={GOLD} size={32}>vivid · clear in itself</Chip></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <div style={{ position: "absolute", top: 120, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="luminosity" at={lum + 0.3} size={110} />
        </div>
        {/* a layer behind the display is shown only to be removed */}
        <At x={960} y={560} o={between(t, notSub - 0.2, notSub + 1.8, 0.4) * 0.8}>
          <div style={{ width: 900, height: 80, borderRadius: 8, background: `linear-gradient(180deg, ${WARM}55, #3a1d1d)`, border: `3px solid ${WARM}` }} />
        </At>
        <AbsoluteFill style={{ opacity: 1 - ramp(t, notSub + 1.8, 0.4) }}><Crossed x={960} y={560} at={notSub + 0.6} size={70} /></AbsoluteFill>
        <At x={960} y={680} o={between(t, notSub, know - 0.2, 0.4)}><Glow color={WARM} size={32}>not a substance behind the display</Glow></At>
        {Array.from({ length: 7 }).map((_, i) => (
          <At key={i} x={560 + i * 135} y={420 + (i % 2) * 40} s={pop(t, fps, know + i * 0.1)}>
            <Orb size={46 + (i % 3) * 14} color={[GOLD, TEAL, ROSE, VIOLET, ICE, GREEN, GOLD][i]} />
          </At>
        ))}
        <At x={960} y={680} o={ramp(t, know + 0.3, 0.5)}><Glow color={GOLD} size={36} serif>the knowing clarity OF the display</Glow></At>
        {[0, 1, 2].map((k) => <Ring key={k} x={960} y={800} p={((t - c("heard as sound")) * 0.6 + k / 3) % 1 * ramp(t, c("heard as sound"), 0.4)} r0={10} r1={120} color={TEAL} width={2} />)}
        <At x={960} y={800} o={ramp(t, c("heard as sound"), 0.4)}><Glow color={TEAL} size={28}>a sound, heard as sound</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const CarrierScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cands = [["a soul", ROSE], ["a stream of consciousness", TEAL], ["a neural core", VIOLET], ["a conserved energy", GOLD]] as const;
  const seen = c("something seen and named"), own = c("a carrier of its own"), more = c("Nothing more is needed");
  const dash = ramp(t, seen, 0.6);
  const part2 = more - 0.4;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={110} o={ramp(t, c("Every candidate for a carrier", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>every candidate for a carrier</Glow></At>
        {cands.map(([w, col], i) => (
          <At key={i} x={420 + i * 360} y={360} s={pop(t, fps, c(w))}>
            <div style={{ padding: "18px 26px", borderRadius: 14, border: `3px ${dash > 0.5 ? "dashed" : "solid"} ${col}`, background: `${col}22`,
              fontFamily: SERIF, fontSize: 34, color: CHALK, whiteSpace: "nowrap" }}>{w}</div>
          </At>
        ))}
        <At x={960} y={490} o={ramp(t, seen + 0.2, 0.5)}><Glow color={ICE} size={34}>each one: seen, named, designated</Glow></At>
        {cands.map((_, i) => <Flow key={i} x1={420 + i * 360} y1={420} x2={420 + i * 360} y2={640} color={DIM} p={ramp(t, own + i * 0.15, 0.5)} pulses={false} dash />)}
        {cands.map((_, i) => <At key={i} x={420 + i * 360} y={680} o={ramp(t, own + 0.3 + i * 0.15, 0.4)}><Chip color={DIM} size={26}>its carrier?</Chip></At>)}
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <div style={{ position: "absolute", top: 220, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="nothing more is needed" at={more} size={84} />
        </div>
        <At x={640} y={560} s={pop(t, fps, c("without being owned", 0.3))}><Orb size={120} color={GOLD} /></At>
        <At x={640} y={700} o={ramp(t, c("without being owned"), 0.5)}><Glow color={GOLD} size={32}>vivid and complete · not owned</Glow></At>
        <At x={1280} y={560} s={pop(t, fps, c("without being taken from anyone", 0.3))} o={1 - 0.7 * ramp(t, c("without being taken from anyone") + 0.6, 1.5)}><Orb size={120} color={TEAL} /></At>
        <At x={1280} y={700} o={ramp(t, c("without being taken from anyone"), 0.5)}><Glow color={TEAL} size={32}>it ends · taken from no one</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const struck = c("A bell is struck"), ring = c("there is a ringing");
  const swing = Math.sin((t - struck) * 3) * 14 * ramp(t, struck, 0.3) * Math.exp(-Math.max(0, t - struck) * 0.15);
  const conds = [["the striking", "the striking", ROSE], ["an ear", "an ear", TEAL], ["a memory of bells", "a memory of bells", VIOLET]] as const;
  const none = c("None of these is the sound"), hidden = c("not hidden in any of them");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("not reached once and kept", 0.3), 0.5)}><Glow color={CHALK} size={38} serif>not reached once and kept</Glow></At>
      <At x={960} y={180} o={ramp(t, c("seen again and again"), 0.5)}><Glow color={GOLD} size={32}>seen again, and again</Glow></At>
      <At x={960} y={430} s={pop(t, fps, struck - 0.3)}><Bell swing={swing} /></At>
      {[0, 1, 2, 3].map((k) => <Ring key={k} x={960} y={440} p={((t - ring) * 0.45 + k / 4) % 1 * ramp(t, ring, 0.4)} r0={130} r1={420} color={GOLD} width={2} />)}
      {conds.map(([ph, label, col], i) => (
        <At key={i} x={[460, 1460, 1460][i]} y={[330, 330, 560][i]} s={pop(t, fps, c(ph))}><Chip color={col} size={30}>{label}</Chip></At>
      ))}
      <At x={460} y={560} o={ramp(t, c("an ear") + 0.8, 0.4)}><Chip color={ICE} size={30}>attention</Chip></At>
      <At x={960} y={720} o={between(t, none, hidden + 1.6, 0.4)}><Chip color={DIM} size={32}>none of these is the sound · not hidden in them</Chip></At>
      <At x={960} y={720} o={ramp(t, c("vivid and complete while it lasts"), 0.5)}><Chip color={GOLD} size={34}>vivid and complete, while it lasts</Chip></At>
    </AbsoluteFill>
  );
};

const IceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const felt = c("The cold of ice is felt"), look = c("look for the cold inside the ice"), nope = c("it does not appear");
  const meets = c("where ice meets a body");
  const u = ramp(t, look, 2.0);
  return (
    <AbsoluteFill>
      <At x={760} y={430} s={pop(t, fps, felt - 0.3)}><IceCube size={200} spin={t * 12} flash={ramp(t, meets, 0.4) * (1 - ramp(t, meets + 1.2, 0.8))} /></At>
      <At x={1180} y={470} s={pop(t, fps, felt + 0.3)}><Hand size={200} /></At>
      <At x={700 + 80 * Math.cos(u * Math.PI * 4)} y={420 + 50 * Math.sin(u * Math.PI * 4)} o={between(t, look, nope + 1.2)}>
        <svg width={120} height={120} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
          <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} /><line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
        </svg>
      </At>
      <At x={760} y={680} o={between(t, nope, meets - 0.2, 0.4)}><Glow color={ICE} size={34}>cold inside the ice? not found</Glow></At>
      <Flow x1={880} y1={450} x2={1080} y2={450} color={ICE} p={ramp(t, meets, 0.6)} />
      <At x={980} y={380} s={pop(t, fps, meets + 0.3)}><Snowflake size={70} rot={t * 20} /></At>
      <At x={980} y={680} o={ramp(t, meets + 0.2, 0.5)}><Glow color={ICE} size={34}>the cold forms where ice meets a body</Glow></At>
      <At x={960} y={130} o={ramp(t, c("burnt fingers are burnt"), 0.5)}><Glow color={WARM} size={36}>the cold is cold · burnt fingers are burnt</Glow></At>
      <At x={960} y={780} o={ramp(t, c("never in the object as its own"), 0.5)}><Chip color={GOLD} size={32}>vividness: never the object's own</Chip></At>
    </AbsoluteFill>
  );
};

const ContinuityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const melt = c("When ice melts"), mourn = c("no one mourns the cold"), mel = c("A melody known by heart");
  const fluid = c("not a fluid flowing"), desig = c("the designation linking"), thru = c("nothing running through it");
  const und = c("Understanding changes the same way"), clearer = c("the new view is clearer");
  const seenThru = c("the old habit was seen through"), over = c("nothing is carried over");
  const m = ramp(t, melt, 2.0);
  const part2 = mel - 0.5;
  const top = 1 - ramp(t, part2, 0.5);
  const lower = 1 - ramp(t, fluid - 0.4, 0.5);        // the melody's captions give way to the link drawing
  const melody = 1 - ramp(t, und - 0.5, 0.5);          // the three playings stay up until understanding
  const panelX = [480, 960, 1440];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={130} o={ramp(t, c("makes continuity feel carried", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>the same habit: continuity feels carried</Glow></At>
        <At x={960} y={400 + 60 * m} s={1 - 0.6 * m}><IceCube size={200} spin={t * 10} /></At>
        <At x={960} y={560} o={m}><div style={{ width: 360 * m, height: 30, borderRadius: "50%", background: `${ICE}55`, boxShadow: `0 0 30px ${ICE}` }} /></At>
        <At x={960} y={700} o={ramp(t, mourn, 0.5)}><Glow color={ICE} size={36}>no one mourns the cold</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <AbsoluteFill style={{ opacity: melody }}>
          {/* a fluid through the playings is shown only in order to remove it */}
          <Svg style={{ opacity: between(t, fluid - 0.2, desig - 0.4, 0.5) * 0.85 }}>
            {[0, 1].map((k) => (
              <path key={k} d={`M220 ${350 + k * 22} Q 480 ${300 + k * 22} 720 ${360 + k * 22} T 1220 ${360 + k * 22} T 1700 ${350 + k * 22}`}
                fill="none" stroke={TEAL} strokeWidth={6} strokeDasharray="40 22" strokeDashoffset={-t * 90} opacity={0.7} />
            ))}
          </Svg>
          {[0, 1, 2].map((k) => {
            const at = mel + 0.4 + k * 1.3;
            return (
              <React.Fragment key={k}>
                <At x={panelX[k]} y={360} s={pop(t, fps, at - 0.2)}><Notes play={(t - at) / 1.2} color={[TEAL, GOLD, VIOLET][k]} /></At>
                <At x={panelX[k]} y={460} o={ramp(t, at, 0.4) * (1 - ramp(t, desig, 0.4))}><Glow color={DIM} size={26}>{`playing ${k + 1} · new`}</Glow></At>
                <At x={panelX[k]} y={460} o={ramp(t, desig + 0.2 + k * 0.25, 0.4)}><Glow color={CHALK} size={26}>{`appearance ${k + 1} · vivid`}</Glow></At>
                <PictureFrame x={panelX[k]} y={380} w={340} h={200} o={ramp(t, desig + 0.2 + k * 0.25, 0.5)} />
              </React.Fragment>
            );
          })}
          {/* designation: links between neighbours, drawn as arcs with nothing flowing along them */}
          <Svg>
            {[0, 1].map((k) => (
              <DrawPath key={k} d={`M${panelX[k] + 150} 270 Q ${panelX[k] + 240} 170 ${panelX[k + 1] - 150} 270`}
                p={ramp(t, desig + 0.6 + k * 0.4, 0.8)} color={GOLD} width={5} len={420} />
            ))}
          </Svg>
          {[0, 1].map((k) => (
            <At key={k} x={panelX[k] + 240} y={190} o={ramp(t, thru + 0.3 + k * 0.3, 0.4)}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", border: `3px dashed ${DIM}` }} />
            </At>
          ))}
          <AbsoluteFill style={{ opacity: lower }}>
            <At x={720} y={360} o={ramp(t, c("recognised across them all"), 0.4) * 0.8}><Glow color={DIM} size={30}>·</Glow></At>
            <At x={960} y={560} o={ramp(t, c("recognised across them all"), 0.5)}><Glow color={GOLD} size={36} serif>recognised across them all · stored in none</Glow></At>
            {["habits", "memories", "effects of actions"].map((w, i) => (
              <At key={i} x={620 + i * 340} y={680} o={ramp(t, c("Habits, memories") + i * 0.3, 0.4)}><Chip color={TEAL} size={30}>{w}</Chip></At>
            ))}
            <At x={960} y={790} o={ramp(t, c("Nothing is held that could be taken"), 0.5)}><Chip color={GREEN} size={32}>nothing held that could be taken</Chip></At>
          </AbsoluteFill>
          <AbsoluteFill style={{ opacity: 1 - ramp(t, desig - 0.3, 0.5) }}>
            <Struck x={960} y={600} at={fluid + 0.2} strikeAt={fluid + 1.6} color={TEAL} size={32}>a fluid flowing through its changes</Struck>
          </AbsoluteFill>
          <At x={960} y={600} o={ramp(t, desig + 0.4, 0.5)}><Glow color={GOLD} size={38} serif>designation links each to the next</Glow></At>
          <At x={960} y={720} o={ramp(t, thru, 0.5)}><Chip color={GREEN} size={32}>the link holds · nothing runs through it</Chip></At>
        </AbsoluteFill>
        <Scene from={und - 0.5} to={1e9}>
          <At x={960} y={130} o={ramp(t, und, 0.5)}><Glow color={CHALK} size={40} serif>understanding changes the same way</Glow></At>
          <At x={560} y={430} s={pop(t, fps, und + 0.3)} o={1 - 0.55 * ramp(t, seenThru + 0.6, 1.0)} blur={4}><Orb size={150} color={VIOLET} /></At>
          <At x={560} y={570} o={ramp(t, und + 0.5, 0.4)}><Glow color={DIM} size={30}>the old view</Glow></At>
          <Flow x1={700} y1={430} x2={1220} y2={430} color={DIM} p={ramp(t, clearer, 0.8)} pulses={false} dash />
          <At x={1360} y={430} s={pop(t, fps, clearer + 0.2)}><Orb size={170} color={GOLD} /></At>
          {[0, 1, 2].map((k) => <Ring key={k} x={1360} y={430} p={((t - clearer) * 0.4 + k / 3) % 1 * ramp(t, clearer + 0.4, 0.4)} r0={90} r1={230} color={GOLD} width={2} />)}
          <At x={1360} y={590} o={ramp(t, clearer + 0.4, 0.4)}><Glow color={GOLD} size={32}>the new view · clearer</Glow></At>
          <Struck x={560} y={660} at={seenThru - 0.1} strikeAt={seenThru + 0.8} color={VIOLET} size={30}>the old habit</Struck>
          <At x={560} y={740} o={ramp(t, seenThru + 1.0, 0.4)}><Glow color={ICE} size={30}>seen through</Glow></At>
          <At x={960} y={820} o={ramp(t, over + 0.3, 0.5)}><Chip color={GREEN} size={34}>clearer · and nothing carried over</Chip></At>
        </Scene>
      </Scene>
    </AbsoluteFill>
  );
};

const DyingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("It removes one dread"), holder = c("a holder taken away"), unf = c("a holding left unfinished");
  const defer = c("nothing is deferred"), now = c("available now");
  const part2 = defer - 0.5;
  const top = 1 - ramp(t, part2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        <At x={960} y={110} o={ramp(t, c("does not remove the fear of pain", 0.3), 0.5)}><Glow color={DIM} size={32}>what the view does not promise</Glow></At>
        <At x={480} y={210} o={ramp(t, c("does not remove the fear of pain"), 0.4)}><Chip color={DIM} size={28}>no fear of pain</Chip></At>
        <At x={960} y={210} o={ramp(t, c("losing someone painless"), 0.4)}><Chip color={DIM} size={28}>a painless loss</Chip></At>
        <At x={1440} y={210} o={ramp(t, c("continues as the person"), 0.4)}><Chip color={DIM} size={28}>the person continuing</Chip></At>
        <At x={960} y={330} o={ramp(t, one, 0.5)}><Glow color={GOLD} size={42} serif>it removes one dread</Glow></At>
        <At x={760} y={540} s={pop(t, fps, one + 0.3)}><Held /></At>
        <At x={560} y={520} o={ramp(t, holder - 0.3, 0.5) * (1 - ramp(t, holder + 0.3, 1.0) * 0.6)}><Head s={0.8} color={ROSE} /></At>
        <At x={1260} y={540} o={ramp(t, unf, 0.5)}>
          <svg width={180} height={180} viewBox="-90 -90 180 180"><circle r={70} fill="none" stroke={DIM} strokeWidth={6} strokeDasharray="300 140" /></svg>
        </At>
        <At x={1260} y={680} o={ramp(t, unf + 0.2, 0.4)}><Glow color={DIM} size={26}>unfinished</Glow></At>
        <Crossed x={900} y={540} at={unf + 1.0} size={150} />
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <div style={{ position: "absolute", top: 140, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="nothing is deferred" at={defer} size={84} />
        </div>
        <At x={760} y={520} s={pop(t, fps, c("The clarity of this moment", 0.3))}><Window glow={0.6 + 0.4 * Math.sin(t * 1.2) ** 2} /></At>
        {[0, 1, 2].map((k) => <Ring key={k} x={1200} y={520} p={((t - c("The clarity of this moment")) * 0.5 + k / 3) % 1 * ramp(t, c("The clarity of this moment") + 0.6, 0.4)} r0={20} r1={150} color={TEAL} width={2} />)}
        <At x={1200} y={680} o={ramp(t, c("The clarity of this moment") + 0.8, 0.4)}><Glow color={TEAL} size={26}>the sound in the next room</Glow></At>
        <At x={960} y={790} o={ramp(t, now, 0.5)}><Chip color={GOLD} size={34}>available now · even to the one who is dying</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

const CandleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const outAt = c("taken from it by going out");
  const lit = 1 - ramp(t, outAt + 0.4, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={0.6}><div style={{ width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}44, transparent 65%)` }} /></At>
      <At x={960} y={420} s={pop(t, fps, c("The candle gives exactly as much light", 0.4))}><Candle lit={lit} /></At>
      <At x={960} y={120} o={ramp(t, c("The candle gives exactly as much light"), 0.5)}><Glow color={GOLD} size={42} serif>exactly as much light as before</Glow></At>
      <At x={960} y={770} o={ramp(t, outAt + 0.6, 0.6)}><Glow color={CHALK} size={36}>nothing taken from it by going out</Glow></At>
      <Ring x={960} y={330} p={ramp(t, outAt + 0.6, 2.2)} r0={60} r1={420} color={GOLD} />
      <At x={960} y={200} o={ramp(t, c("the weight with which it is watched"), 0.8)}><Glow color={ICE} size={34}>only the weight of watching changes</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["fire", 0], ["sleep", c("Under general anaesthesia", 0.6)], ["fear", c("What is the fear of death tracking", 0.6)],
    ["clear", c("does not simply deny the possessor", 0.6)], ["carrier", c("Every candidate for a carrier", 0.6)],
    ["bell", c("not reached once and kept", 0.6)], ["ice", c("The cold of ice is felt", 0.6)],
    ["flow", c("makes continuity feel carried", 0.6)], ["dying", c("does not remove the fear of pain", 0.6)],
    ["candle", c("The candle gives exactly as much light", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Under general anaesthesia", 0.9)], <FirewoodScene />],
    [S("Under general anaesthesia", "What is the fear of death tracking"), <SleepScene />],
    [S("What is the fear of death tracking", "does not simply deny the possessor"), <FearScene />],
    [S("does not simply deny the possessor", "Every candidate for a carrier"), <ClarityScene />],
    [S("Every candidate for a carrier", "not reached once and kept"), <CarrierScene />],
    [S("not reached once and kept", "The cold of ice is felt"), <BellScene />],
    [S("The cold of ice is felt", "makes continuity feel carried"), <IceScene />],
    [S("makes continuity feel carried", "does not remove the fear of pain"), <ContinuityScene />],
    [S("does not remove the fear of pain", "The candle gives exactly as much light"), <DyingScene />],
    [S("The candle gives exactly as much light", null), <CandleScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
