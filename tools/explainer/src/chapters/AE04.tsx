// Anatta to Emptiness, Chapter 4: The Taste of Total Exertion. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Washing a cup", "the sound of the tap", "What is actually happening",
  "the hardest to describe", "not reached by reasoning", "a change in the texture", "The words used for it are poetic", "They point to a taste",
  "facets of one change",
  "the universe becomes a single event", "a person handling an object", "a mind taking in a noise", "There is only the activity",
  "intimacy beyond relationship", "two things coming close", "never two things", "Hearing is the sounding", "there was never a gap",
  "conditions stop being outside", "the weather affects us", "the conditions are the event", "The air takes part", "the coldness of ice",
  "named together as one event",
  "gave a famous image", "the boat carries the rower", "Without the boat", "Without the riding", "not parts assembled",
  "This is not holism", "Nothing has merged into one", "cannot be found before the activity", "spends itself entirely",
  "firewood stays in its own position", "Ash stays in its position", "does not turn into ash",
  "seamlessness without fusion", "differences grow more vivid", "Sound never becomes colour", "the invisible walls",
  "nouns become verbs", "There is only blowing", "A river is only flowing",
  "Here hides a trap", "a subtle medium flowing underneath", "replaced by a fluid substance", "still substantialist",
  "luminous clarity", "Sound shines as sound", "Colour glows as colour", "not a light behind appearances", "the vividness of the event itself",
  "lived with certainty", "How can the rower be the rowing", "collapse into oneness", "the grammar of thought has not",
  "asks for a new grammar", "an old story about a chariot", "living as that chariot",
];

const DEEP = "#D9A441", INDIGO = "#7A78F0";
const M = {
  cup: { a: "rgba(40,110,150,0.5)", b: "rgba(170,130,60,0.4)", c: "rgba(70,60,150,0.3)" },
  taste: { a: "rgba(190,140,60,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(60,140,130,0.3)" },
  event: { a: "rgba(60,50,150,0.5)", b: "rgba(190,140,60,0.4)", c: "rgba(40,110,140,0.3)" },
  cond: { a: "rgba(30,130,170,0.5)", b: "rgba(70,60,150,0.4)", c: "rgba(150,120,60,0.3)" },
  boat: { a: "rgba(30,90,150,0.55)", b: "rgba(170,130,60,0.35)", c: "rgba(40,130,140,0.35)" },
  fire: { a: "rgba(180,90,40,0.5)", b: "rgba(60,50,140,0.45)", c: "rgba(150,110,60,0.3)" },
  verbs: { a: "rgba(40,130,140,0.5)", b: "rgba(90,60,160,0.45)", c: "rgba(170,130,60,0.3)" },
  trap: { a: "rgba(110,50,110,0.5)", b: "rgba(60,50,140,0.45)", c: "rgba(170,110,50,0.3)" },
  clear: { a: "rgba(200,150,70,0.5)", b: "rgba(80,70,170,0.45)", c: "rgba(60,160,150,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Cup: React.FC = () => (
  <svg width={170} height={150} viewBox="0 0 170 150" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <path d="M20 30 L130 30 L118 130 Q75 145 32 130 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
    <path d="M128 52 Q165 55 158 85 Q152 108 122 106" fill="none" stroke={GOLD} strokeWidth={4} />
  </svg>
);
const Tap: React.FC<{ t: number; flow: number }> = ({ t, flow }) => (
  <svg width={260} height={340} viewBox="0 0 260 340" style={{ overflow: "visible" }}>
    <path d="M20 40 L150 40 Q190 40 190 80 L190 100" fill="none" stroke={CHALK} strokeWidth={14} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${ICE})` }} />
    <rect x={60} y={10} width={30} height={30} rx={6} fill={DIM} />
    {Array.from({ length: 8 }).map((_, i) => {
      const y = 110 + ((t * 260 + i * 30) % 220);
      return <circle key={i} cx={190 + Math.sin(i + t * 4) * 3} cy={y} r={6} fill={ICE} opacity={flow * 0.8} />;
    })}
  </svg>
);
const Note: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={80} height={90} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={color} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={color} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={color} />
  </svg>
);
const Ear: React.FC = () => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
    <path d="M80 110 Q60 140 40 128 Q30 120 34 100 Q20 80 22 55 Q28 15 65 15 Q100 18 98 58 Q96 80 80 90 Q70 96 72 110" fill={`${ROSE}22`} stroke={ROSE} strokeWidth={4} />
    <path d="M50 60 Q55 38 72 45 Q82 52 72 66" fill="none" stroke={ROSE} strokeWidth={3} />
  </svg>
);
const Cloud: React.FC = () => (
  <svg width={200} height={110} viewBox="0 0 200 110" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
    <path d="M40 90 Q10 88 18 62 Q22 36 52 42 Q62 12 98 18 Q132 10 142 42 Q178 40 180 68 Q184 94 152 92 Z" fill={`${INDIGO}44`} stroke={ICE} strokeWidth={4} />
  </svg>
);
const Person: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={100} height={180} viewBox="0 0 100 180">
    <circle cx={50} cy={28} r={20} fill="none" stroke={color} strokeWidth={5} />
    <path d="M50 50 L50 115 M50 70 L22 100 M50 70 L78 100 M50 115 L28 170 M50 115 L72 170" stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
  </svg>
);

/** Sailing boat with a rower; `row` animates the oar. */
const Boat: React.FC<{ t: number; o?: number; rower?: number }> = ({ t, o = 1, rower = 1 }) => {
  const oar = Math.sin(t * 2.4) * 18;
  return (
    <svg width={520} height={360} viewBox="0 0 520 360" style={{ overflow: "visible", opacity: o }}>
      <path d="M60 230 L460 230 Q420 300 320 300 L170 300 Q90 300 60 230 Z" fill={`${DEEP}44`} stroke={DEEP} strokeWidth={5} strokeLinejoin="round" />
      <line x1={250} y1={230} x2={250} y2={40} stroke={CHALK} strokeWidth={5} />
      <path d="M256 50 L380 210 L256 210 Z" fill={`${ICE}44`} stroke={ICE} strokeWidth={4} />
      <g opacity={rower}>
        <circle cx={160} cy={160} r={18} fill="none" stroke={CHALK} strokeWidth={4} />
        <path d="M160 178 L160 228 M160 192 L195 205" stroke={CHALK} strokeWidth={4} strokeLinecap="round" />
        <g transform={`rotate(${oar} 195 205)`}><line x1={195} y1={205} x2={110} y2={320} stroke={GOLD} strokeWidth={5} strokeLinecap="round" /></g>
      </g>
    </svg>
  );
};
const Waves: React.FC<{ t: number; y: number; o?: number }> = ({ t, y, o = 1 }) => {
  const xs = Array.from({ length: 70 }, (_, i) => 380 + i * 17);
  return (
    <Svg style={{ opacity: o }}>
      {[0, 1].map((k) => (
        <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${y + k * 30 + 10 * Math.sin(x / 40 - t * 2 + k)}`).join(" ")} fill="none" stroke={[TEAL, ICE][k]} strokeWidth={4} opacity={0.8} />
      ))}
    </Svg>
  );
};
const Log: React.FC = () => (
  <svg width={220} height={120} viewBox="0 0 220 120" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }}>
    <rect x={20} y={30} width={170} height={60} rx={30} fill="rgba(160,100,60,0.35)" stroke={WARM} strokeWidth={4} />
    <ellipse cx={190} cy={60} rx={20} ry={30} fill="rgba(200,140,80,0.4)" stroke={WARM} strokeWidth={4} />
    <ellipse cx={190} cy={60} rx={9} ry={14} fill="none" stroke={WARM} strokeWidth={2} />
  </svg>
);
const Ash: React.FC = () => (
  <svg width={220} height={120} viewBox="0 0 220 120" style={{ filter: `drop-shadow(0 0 8px ${DIM})` }}>
    <path d="M20 100 Q60 50 110 55 Q160 50 200 100 Z" fill="rgba(180,180,190,0.3)" stroke={DIM} strokeWidth={4} />
    {Array.from({ length: 8 }).map((_, i) => <circle key={i} cx={50 + i * 18} cy={88 - (i % 3) * 8} r={3} fill={CHALK} opacity={0.5} />)}
  </svg>
);
/** Supposed medium underneath, shown only to be removed. */
const Slab: React.FC<{ w: number; crumble: number; label?: string; color?: string }> = ({ w, crumble, label, color = DEEP }) => {
  const n = 14;
  return (
    <div style={{ position: "relative", width: w, height: 70 }}>
      {Array.from({ length: n }).map((_, i) => {
        const d = Math.max(0, crumble * 1.6 - rand(i) * 0.6);
        return <div key={i} style={{ position: "absolute", left: (i * w) / n, top: 0, width: w / n + 1, height: 70, background: `${color}55`,
          borderTop: `3px solid ${color}`, opacity: Math.max(0, 1 - d), transform: `translateY(${d * 80}px) rotate(${d * (rand(i + 3) - 0.5) * 80}deg)` }} />;
      })}
      {label && <div style={{ position: "absolute", width: "100%", top: 14, opacity: 1 - crumble }}><Glow color={color} size={30}>{label}</Glow></div>}
    </div>
  );
};
const Chariot: React.FC<{ spin: number; p?: number }> = ({ spin, p = 1 }) => (
  <svg width={520} height={300} viewBox="-60 -40 560 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${DEEP})` }}>
    <DrawPath d="M120 40 L330 40 L310 150 L140 150 Z" p={ramp(p, 0, 0.5)} color={DEEP} width={5} len={700} fill={`${DEEP}${p > 0.5 ? "33" : "00"}`} glow={false} />
    <DrawPath d="M320 130 L470 80" p={ramp(p, 0.3, 0.4)} color={GOLD} width={7} len={200} glow={false} />
    <g transform={`translate(220 180) rotate(${spin})`} opacity={ramp(p, 0.4, 0.4)}>
      <circle r={80} fill="none" stroke={ICE} strokeWidth={7} />
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={80 * Math.cos((i * Math.PI) / 4)} y2={80 * Math.sin((i * Math.PI) / 4)} stroke={ICE} strokeWidth={4} />)}
      <circle r={12} fill={ICE} />
    </g>
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
const StrikeChip: React.FC<{ color: string; size?: number; strikeAt: number; children: React.ReactNode }> = ({ color, size = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
);
const Centered: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("Washing a cup");
  return (
    <AbsoluteFill>
      <At x={860} y={360} s={pop(t, fps, w - 0.3)}><Tap t={t} flow={ramp(t, w, 0.6)} /></At>
      <At x={960} y={560} s={pop(t, fps, w)}><Cup /></At>
      <At x={760} y={600} s={pop(t, fps, w + 0.6)} r={-20}><Hand size={150} /></At>
      <At x={1180} y={600} s={pop(t, fps, w + 0.9)} r={20}><div style={{ transform: "scaleX(-1)" }}><Hand size={150} /></div></At>
      <At x={960} y={560} o={ramp(t, w + 1.2, 1)}><div style={{ width: 500, height: 300, borderRadius: "50%", background: `radial-gradient(ellipse, ${WARM}33, transparent 70%)` }} /></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={1300} y={340} p={((t - c("the sound of the tap")) * 0.6 + i / 3) % 1 * ramp(t, c("the sound of the tap"), 0.2)} r0={30} r1={140} color={TEAL} />)}
      <At x={1300} y={340} s={pop(t, fps, c("the sound of the tap"))}><Note color={TEAL} /></At>
      <At x={960} y={160} o={ramp(t, c("What is actually happening"), 0.5)}><Glow color={CHALK} size={46} serif>what is actually happening?</Glow></At>
    </AbsoluteFill>
  );
};

const TASTES: [string, string][] = [["a single event", DEEP], ["intimacy", ROSE], ["conditions", ICE], ["seamless", TEAL], ["verbs", GREEN], ["clarity", GOLD]];
const TasteScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const facets = c("facets of one change");
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("the hardest to describe", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>the hardest to describe</Glow></At>
      <At x={420} y={340} s={pop(t, fps, c("not reached by reasoning"))}><StrikeChip color={DIM} strikeAt={c("not reached by reasoning") + 0.8}>reasoning your way in</StrikeChip></At>
      <Svg style={{ opacity: ramp(t, c("a change in the texture"), 0.6) * (1 - ramp(t, facets - 0.3, 0.5)) }}>
        {Array.from({ length: 6 }).map((_, k) => (
          <path key={k} d={`M260 ${470 + k * 26} Q 420 ${450 + k * 26 + 30 * Math.sin(t * 1.5 + k)} 580 ${470 + k * 26}`} fill="none" stroke={k % 2 ? DEEP : INDIGO} strokeWidth={4} />
        ))}
      </Svg>
      <At x={420} y={660} o={ramp(t, c("a change in the texture"), 0.5)}><Glow color={DEEP} size={30}>a change in texture</Glow></At>
      <At x={1460} y={340} o={ramp(t, c("The words used for it are poetic"), 0.5)}><Chip color={VIOLET} size={32}>poetic words · not claims</Chip></At>
      <At x={1460} y={500} s={pop(t, fps, c("They point to a taste"))}><Orb size={110} color={GOLD} /></At>
      <At x={1460} y={620} o={ramp(t, c("They point to a taste") + 0.4, 0.5)}><Glow color={GOLD} size={38} serif>a taste</Glow></At>
      <At x={960} y={500} s={pop(t, fps, facets)}>
        <svg width={220} height={220} viewBox="-110 -110 220 220" style={{ filter: `drop-shadow(0 0 16px ${DEEP})`, transform: `rotate(${t * 10}deg)` }}>
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i * Math.PI) / 3, b = ((i + 1) * Math.PI) / 3;
            return <path key={i} d={`M0 0 L${90 * Math.cos(a)} ${90 * Math.sin(a)} L${90 * Math.cos(b)} ${90 * Math.sin(b)} Z`} fill={`${TASTES[i][1]}66`} stroke={CHALK} strokeWidth={2} />;
          })}
        </svg>
      </At>
      {TASTES.map(([w, col], i) => {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        return <At key={i} x={960 + 300 * Math.cos(a)} y={500 + 230 * Math.sin(a)} s={pop(t, fps, facets + 0.4 + i * 0.15)}><Chip color={col} size={28}>{w}</Chip></At>;
      })}
    </AbsoluteFill>
  );
};

const EventScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ev = c("the universe becomes a single event"), act = c("There is only the activity");
  const conv = ramp(t, act + 0.4, 2.0);
  return (
    <AbsoluteFill>
      <Centered top={100}><Reveal text="a single event" at={ev} size={84} /></Centered>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, act - 0.2, 0.5) }}>
        <At x={560} y={420} s={pop(t, fps, c("a person handling an object"))}><div style={{ display: "flex", alignItems: "center", gap: 20 }}><Person /><Cup /></div></At>
        <At x={560} y={600} o={ramp(t, c("a person handling an object"), 0.4)}><StrikeChip color={DIM} strikeAt={c("a person handling an object") + 1.0}>a person handling an object</StrikeChip></At>
        <At x={1360} y={420} s={pop(t, fps, c("a mind taking in a noise"))}><div style={{ display: "flex", alignItems: "center", gap: 20 }}><Ear /><Note /></div></At>
        <At x={1360} y={600} o={ramp(t, c("a mind taking in a noise"), 0.4)}><StrikeChip color={DIM} strikeAt={c("a mind taking in a noise") + 1.0}>a mind taking in a noise</StrikeChip></At>
      </AbsoluteFill>
      {Array.from({ length: 40 }).map((_, i) => {
        const a = rand(i) * Math.PI * 2, r0 = 700 + rand(i + 1) * 300, r = r0 * (1 - conv * 0.75);
        return <At key={i} x={960 + r * Math.cos(a)} y={470 + r * 0.55 * Math.sin(a)} o={ramp(t, act, 0.6) * 0.9}>
          <div style={{ width: 8 + rand(i + 2) * 10, height: 8 + rand(i + 2) * 10, borderRadius: "50%", background: [GOLD, ICE, VIOLET, TEAL][i % 4], boxShadow: `0 0 10px ${GOLD}` }} /></At>;
      })}
      <At x={960} y={470} s={pop(t, fps, act + 0.2)}><Glow color="#FFF3D1" size={80} serif>washing</Glow></At>
      <At x={960} y={760} o={ramp(t, act + 1.0, 0.5)}><Glow color={CHALK} size={34}>the whole universe, occupied with this one event</Glow></At>
    </AbsoluteFill>
  );
};

const IntimacyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const close = c("two things coming close"), never = c("never two things"), hs = c("Hearing is the sounding"), gap = c("there was never a gap");
  const approach = ramp(t, close, 1.6);
  const vanish = ramp(t, never, 0.8);
  return (
    <AbsoluteFill>
      <Centered top={100}><Reveal text="intimacy beyond relationship" at={c("intimacy beyond relationship")} size={74} color={ROSE} top="#FFE3EA" /></Centered>
      <At x={560 + 200 * approach} y={430} s={pop(t, fps, c("intimacy beyond relationship") + 1.0)} o={1 - vanish}><Orb size={130} color={ROSE} /></At>
      <At x={1360 - 200 * approach} y={430} s={pop(t, fps, c("intimacy beyond relationship") + 1.2)} o={1 - vanish}><Orb size={130} color={TEAL} /></At>
      <At x={960} y={600} o={between(t, close + 0.3, never)}><Glow color={DIM} size={32}>two things coming close?</Glow></At>
      <At x={960} y={600} o={ramp(t, never + 0.2, 0.5) * (1 - ramp(t, hs - 0.2, 0.4))}><Glow color={ROSE} size={40} serif>never two to begin with</Glow></At>
      <Svg style={{ opacity: ramp(t, hs - 0.2, 0.5) }}>
        {Array.from({ length: 5 }).map((_, k) => {
          const r = 60 + (((t - hs) * 90 + k * 60) % 300);
          return <circle key={k} cx={960} cy={430} r={r} fill="none" stroke={GOLD} strokeWidth={4} opacity={1 - r / 360} />;
        })}
      </Svg>
      <At x={960} y={430} s={pop(t, fps, hs)}><Note /></At>
      <At x={960} y={640} o={ramp(t, hs + 0.3, 0.5)}><Glow color={GOLD} size={44} serif>hearing is the sounding</Glow></At>
      <At x={960} y={770} o={ramp(t, gap, 0.4)}><StrikeChip color={WARM} size={32} strikeAt={gap + 0.7}>a gap to bridge</StrikeChip></At>
    </AbsoluteFill>
  );
};

const ConditionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const out = c("conditions stop being outside"), wx = c("the weather affects us"), ev = c("the conditions are the event"), air = c("The air takes part");
  const ice = c("the coldness of ice"), tog = c("named together as one event");
  const part2 = ice - 0.3;
  const join = ramp(t, tog, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, out, 0.5)}><Glow color={ICE} size={42} serif>conditions are not outside</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, part2, 0.5) }}>
        <At x={440} y={330} s={pop(t, fps, wx)}><Cloud /></At>
        <At x={440} y={560} s={pop(t, fps, wx + 0.3)}><Person /></At>
        <Flow x1={440} y1={390} x2={440} y2={470} color={ICE} p={ramp(t, wx + 0.5, 0.5)} />
        <At x={440} y={720} o={ramp(t, wx + 0.4, 0.4)}><StrikeChip color={DIM} strikeAt={ev}>forces from outside</StrikeChip></At>
        <At x={1260} y={440} s={pop(t, fps, ev)}><Note color={GOLD} /></At>
        {Array.from({ length: 24 }).map((_, i) => {
          const a = rand(i) * Math.PI * 2, r = 90 + (((t - air) * 60 + rand(i + 1) * 200) % 200);
          return <At key={i} x={1260 + r * Math.cos(a)} y={440 + r * Math.sin(a) * 0.7} o={ramp(t, air, 0.5) * 0.8}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: ICE }} /></At>;
        })}
        <At x={1260} y={680} o={ramp(t, air + 0.3, 0.5)}><Glow color={ICE} size={36}>the air takes part as the sounding</Glow></At>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={960} y={450} s={pop(t, fps, ice)}><IceCube size={150} spin={t * 20} flash={ramp(t, tog + 0.8, 0.8)} /></At>
        {[["body", ROSE], ["air", ICE], ["feeling", VIOLET], ["ice", TEAL]].map(([w, col], i) => {
          const a = (i / 4) * Math.PI * 2 + Math.PI / 4, r = 330 - 120 * join;
          return <At key={i} x={960 + r * Math.cos(a)} y={450 + r * 0.7 * Math.sin(a)} s={pop(t, fps, ice + 0.8 + i * 0.25)}><Chip color={col} size={34}>{w}</Chip></At>;
        })}
        <At x={960} y={810} o={ramp(t, tog, 0.5)}><Glow color={GOLD} size={38} serif>named together · none of them first</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const BoatScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const img = c("gave a famous image"), carry = c("the boat carries the rower"), nb = c("Without the boat"), nr = c("Without the riding"), parts = c("not parts assembled");
  const boatO = 1 - 0.75 * between(t, nb, nr - 0.2, 0.4);
  const rowerO = 1 - 0.75 * between(t, nr, parts - 0.2, 0.4);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, img, 0.5)}><Glow color={DEEP} size={40} serif>the boat</Glow></At>
      <Waves t={t} y={600} o={ramp(t, img, 0.6)} />
      <At x={960} y={440 + Math.sin(t * 1.5) * 8} s={pop(t, fps, img + 0.3)}><Boat t={t} o={boatO} rower={rowerO} /></At>
      <Svg style={{ opacity: ramp(t, carry, 0.5) * (1 - ramp(t, nb - 0.2, 0.4)) }}>
        <DrawPath d="M1250 300 Q1400 420 1250 560" p={ramp(t, carry, 0.8)} color={TEAL} width={6} len={400} />
        <DrawPath d="M670 560 Q520 420 670 300" p={ramp(t, carry + 0.5, 0.8)} color={GOLD} width={6} len={400} />
      </Svg>
      <At x={1460} y={430} o={ramp(t, carry + 0.3, 0.5) * (1 - ramp(t, nb - 0.2, 0.4))}><Glow color={TEAL} size={30}>the boat carries</Glow></At>
      <At x={460} y={430} o={ramp(t, carry + 0.6, 0.5) * (1 - ramp(t, nb - 0.2, 0.4))}><Glow color={GOLD} size={30}>the rower rows</Glow></At>
      <At x={1460} y={430} o={between(t, nb + 0.2, nr - 0.2, 0.4)}><Chip color={DIM} size={30}>no boat · no one rides</Chip></At>
      <At x={460} y={430} o={between(t, nr + 0.2, parts - 0.2, 0.4)}><Chip color={DIM} size={30}>no riding · no boat</Chip></At>
      {["oars", "water", "wind", "body"].map((w, i) => (
        <At key={i} x={420 + i * 360} y={790} o={ramp(t, parts + i * 0.2, 0.4)}><StrikeChip color={[GOLD, TEAL, ICE, ROSE][i]} size={28} strikeAt={parts + 1.4}>{`${w} as a part`}</StrikeChip></At>
      ))}
    </AbsoluteFill>
  );
};

const HolismScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hol = c("This is not holism"), merged = c("Nothing has merged into one"), before = c("cannot be found before the activity"), spend = c("spends itself entirely");
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, hol)}>
        <div style={{ width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${VIOLET}66, ${INDIGO}33 60%, transparent 75%)` }} />
      </At>
      <At x={560} y={620} o={ramp(t, hol + 0.2, 0.4)}><Glow color={DIM} size={32}>one great whole</Glow></At>
      <Crossed x={560} y={420} at={merged} size={110} />
      <At x={560} y={720} o={ramp(t, merged + 0.3, 0.5)}><Glow color={CHALK} size={32}>nothing merged</Glow></At>
      <At x={1340} y={300} o={ramp(t, before, 0.5)}><Chip color={DIM} size={30}>participants before the act?</Chip></At>
      <At x={1340} y={360} o={ramp(t, before + 0.8, 0.4)}><Glow color={WARM} size={30}>not found</Glow></At>
      <At x={1340} y={520} s={pop(t, fps, spend)}><Orb size={130} color={DEEP} /></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={1340} y={520} p={ramp(t, spend + 0.2 + i * 0.4, 1.4)} r0={70} r1={260} color={DEEP} />)}
      <At x={1340} y={720} o={ramp(t, spend + 0.4, 0.5)}><Glow color={GOLD} size={34} serif>wholly spent · nothing left behind</Glow></At>
    </AbsoluteFill>
  );
};

const FireScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fw = c("firewood stays in its own position"), ash = c("Ash stays in its position"), turn = c("does not turn into ash");
  return (
    <AbsoluteFill>
      <At x={560} y={440} s={pop(t, fps, fw)}>
        <div style={{ width: 380, height: 300, borderRadius: 16, border: `3px solid ${WARM}`, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 30px ${WARM}66`, background: `${WARM}11` }}><Log /></div>
      </At>
      <At x={560} y={640} o={ramp(t, fw + 0.4, 0.5)}><Glow color={WARM} size={34} serif>firewood, in its own position</Glow></At>
      <At x={1360} y={440} s={pop(t, fps, ash)}>
        <div style={{ width: 380, height: 300, borderRadius: 16, border: `3px solid ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 30px ${DIM}66`, background: `${DIM}11` }}><Ash /></div>
      </At>
      <At x={1360} y={640} o={ramp(t, ash + 0.4, 0.5)}><Glow color={DIM} size={34} serif>ash, in its own position</Glow></At>
      <Flow x1={160} y1={790} x2={1760} y2={790} color={CHALK} p={ramp(t, turn, 0.8)} pulses={false} />
      <At x={960} y={760} o={ramp(t, turn + 0.3, 0.4)}><StrikeChip color={DIM} size={30} strikeAt={turn + 1.0}>one thing travelling along a line of time</StrikeChip></At>
    </AbsoluteFill>
  );
};

const SeamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seam = c("seamlessness without fusion"), vivid = c("differences grow more vivid"), sc = c("Sound never becomes colour"), walls = c("the invisible walls");
  const wallsGone = ramp(t, walls + 0.4, 1.6);
  const cells: [React.ReactNode, string][] = [[<Note color={GOLD} />, GOLD], [<Orb size={70} color={ROSE} />, ROSE], [<Orb size={70} color={TEAL} />, TEAL], [<Orb size={70} color={VIOLET} />, VIOLET]];
  return (
    <AbsoluteFill>
      <Centered top={100}><Reveal text="seamless, without fusion" at={seam} size={76} color={TEAL} top="#E6FFFB" /></Centered>
      {cells.map(([node, col], i) => (
        <React.Fragment key={i}>
          <At x={510 + i * 300} y={480} s={pop(t, fps, seam + 0.5 + i * 0.2) * (1 + 0.15 * ramp(t, vivid, 0.6))}>
            <div style={{ filter: `drop-shadow(0 0 ${10 + 25 * ramp(t, vivid, 0.6)}px ${col})` }}>{node}</div>
          </At>
          <At x={660 + i * 300} y={480} o={i < 3 ? ramp(t, seam + 0.4, 0.5) * (1 - wallsGone) : 0}>
            <div style={{ width: 8, height: 280, background: `${CHALK}aa`, borderRadius: 4 }} />
          </At>
        </React.Fragment>
      ))}
      <At x={960} y={680} o={ramp(t, vivid, 0.5)}><Glow color={CHALK} size={34}>differences more vivid</Glow></At>
      <At x={960} y={760} o={ramp(t, sc, 0.5)}><Chip color={GOLD} size={30}>sound never becomes colour</Chip></At>
      <At x={960} y={250} o={ramp(t, walls, 0.5)}><Glow color={DIM} size={30}>walls between things · quietly gone</Glow></At>
    </AbsoluteFill>
  );
};

const VerbScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nv = c("nouns become verbs"), blow = c("There is only blowing"), flow = c("A river is only flowing");
  const xs = Array.from({ length: 50 }, (_, i) => 1080 + i * 14);
  return (
    <AbsoluteFill>
      <At x={760} y={150} o={ramp(t, nv, 0.5)}><StrikeChip color={DIM} size={36} strikeAt={nv + 0.9}>nouns</StrikeChip></At>
      <At x={1160} y={150} s={pop(t, fps, nv + 1.0)}><Chip color={GREEN} size={40}>verbs</Chip></At>
      <Svg style={{ opacity: ramp(t, blow - 0.6, 0.5) }}>
        {Array.from({ length: 5 }).map((_, k) => {
          const off = ((t * 300 + k * 120) % 700);
          return <path key={k} d={`M${200 + off} ${360 + k * 50} q 60 -30 120 0 t 120 0`} fill="none" stroke={ICE} strokeWidth={5} strokeLinecap="round" opacity={0.8 * Math.sin((off / 700) * Math.PI)} />;
        })}
      </Svg>
      <At x={560} y={680} o={ramp(t, blow, 0.5)}><Glow color={ICE} size={50} serif>blowing</Glow></At>
      <Svg style={{ opacity: ramp(t, flow - 0.2, 0.5) }}>
        {[0, 1, 2].map((k) => (
          <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${420 + k * 50 + 20 * Math.sin(x / 50 - t * 3 + k)}`).join(" ")} fill="none" stroke={[TEAL, INDIGO, ICE][k]} strokeWidth={6} />
        ))}
      </Svg>
      <At x={1430} y={680} o={ramp(t, flow + 0.3, 0.5)}><Glow color={TEAL} size={50} serif>flowing</Glow></At>
    </AbsoluteFill>
  );
};

const TrapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const trap = c("Here hides a trap"), med = c("a subtle medium flowing underneath"), fluid = c("replaced by a fluid substance"), sub = c("still substantialist");
  const crumble = ramp(t, sub + 0.6, 2.0);
  const xs = Array.from({ length: 70 }, (_, i) => 380 + i * 17);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, trap, 0.4)}><Glow color={WARM} size={46} serif>a hidden trap</Glow></At>
      <Svg style={{ opacity: ramp(t, trap, 0.5) }}>
        {[0, 1].map((k) => (
          <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${330 + k * 50 + 18 * Math.sin(x / 50 - t * 3 + k)}`).join(" ")} fill="none" stroke={[TEAL, ICE][k]} strokeWidth={5} />
        ))}
      </Svg>
      <At x={960} y={270} o={ramp(t, trap + 0.3, 0.4)}><Glow color={TEAL} size={30}>blowing · flowing · thinking</Glow></At>
      <At x={960} y={560} o={ramp(t, med, 0.8)}>
        <div style={{ width: 1300, height: 120, borderRadius: 60, opacity: 1 - crumble, background: `linear-gradient(90deg, ${VIOLET}44, ${DEEP}55, ${VIOLET}44)`,
          border: `3px solid ${VIOLET}`, boxShadow: `0 0 40px ${VIOLET}66`, filter: `blur(${crumble * 12}px)` }} />
      </At>
      <At x={960} y={560} o={ramp(t, med + 0.5, 0.5) * (1 - crumble)}><Glow color={CHALK} size={32}>energy? awareness? universal process?</Glow></At>
      <At x={560} y={720} o={ramp(t, fluid, 0.4)}><Chip color={DIM} size={30}>solid objects → fluid substance</Chip></At>
      <At x={1380} y={720} o={ramp(t, sub, 0.4)}><Chip color={WARM} size={30}>real experience · substantialist reading</Chip></At>
    </AbsoluteFill>
  );
};

const ClarityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lc = c("luminous clarity"), ss = c("Sound shines as sound"), cg = c("Colour glows as colour"), lamp = c("not a light behind appearances"), viv = c("the vividness of the event itself");
  return (
    <AbsoluteFill>
      <Centered top={90}><Reveal text="luminous clarity" at={lc} size={86} /></Centered>
      <At x={620} y={430} s={pop(t, fps, ss)}><div style={{ transform: "scale(1.6)" }}><Note color={GOLD} /></div></At>
      <Ring x={620} y={430} p={((t - ss) * 0.5) % 1 * ramp(t, ss, 0.2)} r0={60} r1={200} color={GOLD} />
      <At x={620} y={600} o={ramp(t, ss + 0.3, 0.5)}><Glow color={GOLD} size={34} serif>sound shines as sound</Glow></At>
      {[ROSE, TEAL, VIOLET, GREEN].map((col, i) => (
        <At key={i} x={1220 + (i % 2) * 140} y={370 + Math.floor(i / 2) * 130} s={pop(t, fps, cg + i * 0.15)}><Orb size={90} color={col} /></At>
      ))}
      <At x={1290} y={600} o={ramp(t, cg + 0.3, 0.5)}><Glow color={ROSE} size={34} serif>colour glows as colour</Glow></At>
      <At x={960} y={430} o={between(t, lamp, viv - 0.1, 0.4)}><Sun size={150} rot={t * 10} /></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, viv - 0.1, 0.6) }}><Crossed x={960} y={430} at={lamp + 0.8} size={80} /></AbsoluteFill>
      <At x={960} y={730} o={ramp(t, lamp, 0.4) * (1 - ramp(t, viv, 0.4))}><Chip color={DIM} size={30}>no light behind · no awareness apart</Chip></At>
      <At x={960} y={730} o={ramp(t, viv + 0.2, 0.5)}><Glow color="#FFF3D1" size={40} serif>the vividness of the event itself</Glow></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cert = c("lived with certainty"), q1 = c("How can the rower be the rowing"), q2 = c("collapse into oneness"), gram = c("the grammar of thought has not");
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, cert, 0.5)}><Glow color={CHALK} size={40} serif>certain · yet unexplained</Glow></At>
      <At x={620} y={330} s={pop(t, fps, q1)}><Chip color={GOLD} size={34}>how can the rower be the rowing?</Chip></At>
      <At x={1300} y={450} s={pop(t, fps, q2)}><Chip color={VIOLET} size={34}>why not just oneness?</Chip></At>
      <At x={620} y={640} o={ramp(t, gram - 1.2, 0.5)}><Chip color={TEAL} size={36}>experience · changed</Chip></At>
      <At x={1300} y={640} o={ramp(t, gram, 0.5)}><Chip color={WARM} size={36}>grammar of thought · not yet</Chip></At>
      {Array.from({ length: 4 }).map((_, i) => (
        <At key={i} x={1180 + i * 80} y={760} s={pop(t, fps, gram + 0.4 + i * 0.12)}>
          <div style={{ width: 60, height: 60, borderRadius: 6, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.25)" }} /></At>
      ))}
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const g = c("asks for a new grammar"), story = c("an old story about a chariot"), live = c("living as that chariot");
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, g, 0.5)}><Glow color={CHALK} size={42} serif>a new grammar</Glow></At>
      <At x={960} y={450} o={ramp(t, story - 0.2, 0.3)}><Chariot spin={t * 30} p={ramp(t, story, 2.0)} /></At>
      <At x={960} y={450} o={ramp(t, live, 1.2)}><div style={{ width: 900, height: 520, borderRadius: "50%", background: `radial-gradient(ellipse, ${DEEP}44, transparent 70%)` }} /></At>
      <Centered top={680}><Reveal text="living as the chariot" at={live + 0.3} size={78} /></Centered>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["cup", 0], ["taste", c("the hardest to describe", 0.6)], ["event", c("the universe becomes a single event", 0.6)],
    ["clear", c("intimacy beyond relationship", 0.6)], ["cond", c("conditions stop being outside", 0.6)], ["boat", c("gave a famous image", 0.6)],
    ["event", c("This is not holism", 0.6)], ["fire", c("firewood stays in its own position", 0.6)], ["verbs", c("seamlessness without fusion", 0.6)],
    ["trap", c("Here hides a trap", 0.6)], ["clear", c("luminous clarity", 0.6)], ["taste", c("lived with certainty", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("the hardest to describe", 0.9)], <CupScene />],
    [S("the hardest to describe", "the universe becomes a single event"), <TasteScene />],
    [S("the universe becomes a single event", "intimacy beyond relationship"), <EventScene />],
    [S("intimacy beyond relationship", "conditions stop being outside"), <IntimacyScene />],
    [S("conditions stop being outside", "gave a famous image"), <ConditionScene />],
    [S("gave a famous image", "This is not holism", 1.6), <BoatScene />],
    [S("This is not holism", "firewood stays in its own position"), <HolismScene />],
    [S("firewood stays in its own position", "seamlessness without fusion"), <FireScene />],
    [S("seamlessness without fusion", "nouns become verbs"), <SeamScene />],
    [S("nouns become verbs", "Here hides a trap"), <VerbScene />],
    [S("Here hides a trap", "luminous clarity"), <TrapScene />],
    [S("luminous clarity", "lived with certainty"), <ClarityScene />],
    [S("lived with certainty", "asks for a new grammar"), <QuestionScene />],
    [S("asks for a new grammar", null), <ChariotScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
