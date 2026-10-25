// The Observer and the Taste of Presence, Chapter 19: The Gap and Its Absence. Explainer drawings timed to the narration.
// Arc: a small distance built into knowing -> subject, object, and a ground behind -> one more act of knowing carries its own gap ->
// no bridge: the gap was never holding anything up; the witness and the ground go -> vivid and direct: not intensity added, the
// mediation gone -> dull and vivid equally empty, no more real, no longer held at a distance -> thoughts arise, are not followed,
// no wall -> achievement or stopping? -> the construction stops; a built-in gap would make the taste impossible -> two questions ->
// the caution: "no gap, no ground" sliding down into a new ground, something to possess -> described simply, not a state to be sure of.
// Stance: the ground is drawn only to be dissolved; nothing is drawn as a base or light behind appearances. Appearances stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SANS, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Every act of knowing seems to come with a small distance",
  "Here is a subject", "There is an object", "a ground that it all rests on", "already filtered through a gap",
  "Adding one more act of knowing will not close it", "That act would carry the gap with it",
  "is not to build a bridge across the gap", "the gap was never holding anything up", "When the standing behind is seen through",
  "no witness is placed apart from what appears", "No ground remains that appearances must be checked against",
  "the immediacy of appearing itself",
  "This is why experience can be vivid and direct", "not intensity added to ordinary perception", "the absence of the mediation",
  "the emptiness that applies to the dull", "Immediacy does not make appearances more real", "no longer held at a distance",
  "It describes the same thing from the side of thinking", "Thoughts arise, and are not followed", "they do not become a wall",
  "Then comes a question", "Is this an achievement, or a stopping",
  "If the gap is a construction", "wherever the construction is not running", "If the gap were built into things",
  "Practice would only show the gap again", "both take the first view",
  "Why does the construction return so readily", "what, in practice, loosens it",
  "One caution belongs here", "can quietly become a new ground", "something to possess",
  "So the immediacy is best described simply", "when the standing behind is not being kept up", "It is not a state anyone can now be sure of",
];

// Book 4 mood: plum and gold
const M = {
  gap: { a: "rgba(60,70,140,0.5)", b: "rgba(110,55,120,0.42)", c: "rgba(40,100,130,0.3)" },
  bridge: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  vivid: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
  thought: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  caution: { a: "rgba(170,95,70,0.4)", b: "rgba(100,55,125,0.44)", c: "rgba(40,80,120,0.3)" },
};

// ---------------------------------------------------------------- drawings
const HeadProfile: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = CHALK }) => (
  <svg width={340 * size} height={420 * size} viewBox="0 0 340 420" style={{ overflow: "visible" }}>
    <path d="M110 400 L120 330 Q60 300 62 210 Q66 70 190 60 Q300 58 300 170 L326 236 L298 244 L300 290 Q296 320 250 316 L242 400"
      fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${color}55)` }} />
    <circle cx={258} cy={170} r={7} fill={color} />
  </svg>
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

const Flower: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={220 * size} height={300 * size} viewBox="0 0 220 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${ROSE}aa)` }}>
      <path d="M110 300 Q104 220 110 140" stroke={GREEN} strokeWidth={8} fill="none" strokeLinecap="round" />
      <g transform={`translate(110 100) rotate(${t * 12})`}>
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse key={i} cx={0} cy={-52} rx={26} ry={48} fill={`${ROSE}aa`} stroke={ROSE} strokeWidth={3} transform={`rotate(${i * 360 / 7})`} />
        ))}
        <circle r={26} fill={GOLD} />
      </g>
    </svg>
  );
};

const Stone: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <svg width={240 * size} height={160 * size} viewBox="0 0 240 160" style={{ overflow: "visible" }}>
    <path d="M20 140 Q10 70 70 40 Q140 10 200 50 Q236 90 218 140 Z" fill="#6f6f78" stroke="#a0a0aa" strokeWidth={4} />
  </svg>
);

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

/** A dashed bracket marking a gap between two x positions. */
const GapMark: React.FC<{ x1: number; x2: number; y: number; o: number; label?: string }> = ({ x1, x2, y, o, label = "a gap" }) => {
  const { t } = useT();
  const w = Math.sin(t * 2) * 4;
  return (
    <>
      <Svg style={{ opacity: o }}>
        <line x1={x1} y1={y - 90} x2={x1} y2={y + 90} stroke={ROSE} strokeWidth={4} strokeDasharray="10 8" />
        <line x1={x2} y1={y - 90} x2={x2} y2={y + 90} stroke={ROSE} strokeWidth={4} strokeDasharray="10 8" />
        <path d={`M${x1 + 10} ${y + w} L${x2 - 10} ${y + w} M${x1 + 30} ${y - 16 + w} L${x1 + 10} ${y + w} L${x1 + 30} ${y + 16 + w} M${x2 - 30} ${y - 16 + w} L${x2 - 10} ${y + w} L${x2 - 30} ${y + 16 + w}`}
          fill="none" stroke={ROSE} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
      <At x={(x1 + x2) / 2} y={y - 130} o={o}><Glow color={ROSE} size={30}>{label}</Glow></At>
    </>
  );
};

/** A slab drawn under things, only so it can be dissolved (gone 0..1). */
const Slab: React.FC<{ w: number; label: string; gone: number }> = ({ w, label, gone }) => (
  <div style={{ width: w, height: 70, borderRadius: 10, opacity: 1 - gone, filter: gone > 0.02 ? `blur(${gone * 14}px)` : undefined,
    background: `linear-gradient(180deg, ${VIOLET}55, #2a1838)`, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK }}>{label}</div>
);

const Gear: React.FC<{ size?: number; rot: number; color?: string }> = ({ size = 1, rot, color = GOLD }) => (
  <svg width={160 * size} height={160 * size} viewBox="-80 -80 160 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${rot})`}>
      {Array.from({ length: 10 }).map((_, i) => <rect key={i} x={-10} y={-76} width={20} height={24} rx={4} fill={color} transform={`rotate(${i * 36})`} />)}
      <circle r={56} fill={`${color}33`} stroke={color} strokeWidth={6} /><circle r={16} fill="none" stroke={color} strokeWidth={6} />
    </g>
  </svg>
);

const Trophy: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <svg width={180 * size} height={200 * size} viewBox="0 0 180 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD})` }}>
    <path d="M40 20 L140 20 Q140 110 90 120 Q40 110 40 20 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
    <path d="M40 34 Q6 34 14 64 Q22 86 46 84 M140 34 Q174 34 166 64 Q158 86 134 84" fill="none" stroke={GOLD} strokeWidth={5} />
    <path d="M90 120 L90 160 M56 176 L124 176 L118 160 L62 160 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);

const Claws: React.FC<{ open: number; color?: string }> = ({ open, color = WARM }) => (
  <svg width={360} height={300} viewBox="-180 -150 360 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${-50 * open} -60 0) translate(${-60 * open} 0)`}><path d="M-40 -120 Q-150 0 -40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" /></g>
    <g transform={`rotate(${50 * open} 60 0) translate(${60 * open} 0)`}><path d="M40 -120 Q150 0 40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" /></g>
  </svg>
);

const Bubble: React.FC<{ size?: number; color?: string }> = ({ size = 70, color = VIOLET }) => (
  <div style={{ width: size, height: size * 0.78, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}26`, boxShadow: `0 0 18px ${color}66` }} />
);

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
const DistanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("Every act of knowing seems to come with a small distance");
  const open = ramp(t, d + 1.2, 1.4);
  return (
    <AbsoluteFill>
      <Head text="a small distance, built in" at={d + 0.3} y={120} size={70} />
      <At x={960 - 40 - 200 * open} y={480} s={pop(t, fps, d)}><Orb size={110} color={TEAL} /></At>
      <At x={960 + 40 + 200 * open} y={480} s={pop(t, fps, d + 0.3)}><Orb size={110} color={ROSE} /></At>
      <GapMark x1={840 - 200 * open + 120} x2={1080 + 200 * open - 120} y={480} o={ramp(t, d + 2.0, 0.6)} />
      <At x={960} y={700} o={ramp(t, d + 2.6, 0.5)}><Glow color={DIM} size={32}>knowing, and a little space</Glow></At>
    </AbsoluteFill>
  );
};

const StructureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Here is a subject"), obj = c("There is an object"), gr = c("a ground that it all rests on"), filt = c("already filtered through a gap");
  const add = c("Adding one more act of knowing will not close it"), carry = c("That act would carry the gap with it");
  return (
    <AbsoluteFill>
      <At x={480} y={400} s={pop(t, fps, sub)}><HeadProfile size={0.8} /></At>
      <At x={480} y={140} o={ramp(t, sub + 0.2, 0.5)}><Chip color={TEAL} size={32}>a subject</Chip></At>
      <At x={1440} y={420} s={pop(t, fps, obj)}><Tree size={0.75} /></At>
      <At x={1440} y={140} o={ramp(t, obj + 0.2, 0.5)}><Chip color={GREEN} size={32}>an object</Chip></At>
      <GapMark x1={680} x2={1240} y={400} o={ramp(t, obj + 0.8, 0.6)} />
      <At x={960} y={720} o={ramp(t, gr, 0.6)}><Slab w={1300} label="a ground it all rests on" gone={0} /></At>
      <At x={960} y={400} o={ramp(t, filt, 0.6)}>
        <div style={{ width: 140, height: 220, borderRadius: 12, background: "linear-gradient(90deg, #ffffff22, #ffffff11)", border: `2px solid ${ICE}88`,
          backdropFilter: "blur(4px)" }} />
      </At>
      <At x={960} y={560} o={ramp(t, filt + 0.4, 0.5)}><Glow color={ICE} size={28}>filtered</Glow></At>
      <At x={220} y={460} s={pop(t, fps, add)}><Orb size={70} color={VIOLET} /></At>
      <Flow x1={260} y1={460} x2={360} y2={420} color={VIOLET} p={ramp(t, add + 0.4, 0.6)} />
      <At x={220} y={580} o={ramp(t, add + 0.6, 0.5)}><Glow color={VIOLET} size={26}>one more knowing</Glow></At>
      <GapMark x1={260} x2={350} y={330} o={ramp(t, carry, 0.6)} label="its own gap" />
    </AbsoluteFill>
  );
};

const BridgeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const br = c("is not to build a bridge across the gap"), never = c("the gap was never holding anything up");
  const seen = c("When the standing behind is seen through"), wit = c("no witness is placed apart from what appears");
  const gr = c("No ground remains that appearances must be checked against"), imm = c("the immediacy of appearing itself");
  const gapGone = ramp(t, never + 0.8, 1.4), headGone = ramp(t, seen + 0.4, 1.2), slabGone = ramp(t, gr + 0.8, 1.6);
  return (
    <AbsoluteFill>
      <At x={480} y={400} o={1 - headGone}><HeadProfile size={0.8} /></At>
      <At x={480} y={420} o={ramp(t, seen + 0.6, 0.6)}><Ghost o={1} size={0.9} /></At>
      <Crossed x={480} y={420} at={wit + 0.3} size={100} />
      <At x={1440} y={420} s={1 + 0.06 * Math.sin(t * 2) * ramp(t, imm, 0.6)}><Tree size={0.75} vivid={ramp(t, imm, 1)} /></At>
      <Ring x={1440} y={420} p={ramp(t, imm + 0.3, 1.6)} r0={80} r1={260} color={GREEN} />
      <GapMark x1={680} x2={1240} y={400} o={1 - gapGone} />
      <Svg><DrawPath d="M680 470 Q960 330 1240 470" p={ramp(t, br - 0.2, 1)} color={GOLD} width={8} len={700} /></Svg>
      <Crossed x={960} y={410} at={br + 1.4} size={70} />
      <At x={960} y={130} o={ramp(t, br, 0.5)}><Glow color={GOLD} size={40} serif>no bridge needed</Glow></At>
      <At x={960} y={560} o={ramp(t, never + 0.3, 0.5)}><Glow color={ROSE} size={30}>it never held anything up</Glow></At>
      <At x={960} y={720} o={ramp(t, gr - 1.0, 0.6)}><Slab w={1300} label="a ground to check against" gone={slabGone} /></At>
      <At x={960} y={800} o={ramp(t, imm + 0.4, 0.5)}><Chip color={GREEN} size={34}>the immediacy of appearing</Chip></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const vd = c("This is why experience can be vivid and direct"), inten = c("not intensity added to ordinary perception");
  const abs = c("the absence of the mediation");
  const slide = ramp(t, abs + 0.4, 1.4);
  return (
    <AbsoluteFill>
      <Head text="vivid and direct" at={vd} y={90} size={74} />
      <At x={720} y={470} s={pop(t, fps, vd + 0.3)}><Tree size={0.8} vivid={slide} /></At>
      <At x={720 + 520 * slide} y={470} o={ramp(t, vd + 0.6, 0.5) * (1 - slide * 0.7)}>
        <div style={{ width: 380, height: 420, borderRadius: 14, background: "linear-gradient(135deg, #cfd6e888, #8a90a866)", border: `3px solid ${ICE}`,
          display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 14, boxSizing: "border-box", fontFamily: SANS, fontSize: 28, color: "#1b1b2a" }}>
          mediation
        </div>
      </At>
      <At x={1430} y={300} o={ramp(t, inten - 0.2, 0.5)}>
        <svg width={150} height={150} viewBox="-75 -75 150 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${WARM})` }}>
          <circle r={60} fill={`${WARM}22`} stroke={WARM} strokeWidth={5} />
          <line x1={0} y1={0} x2={44 * Math.cos(-2.4 + Math.sin(t * 2) * 0.6)} y2={44 * Math.sin(-2.4 + Math.sin(t * 2) * 0.6)} stroke={WARM} strokeWidth={7} strokeLinecap="round" />
        </svg>
      </At>
      <Struck x={1430} y={450} at={inten} strikeAt={inten + 1.6} color={WARM} size={30}>intensity turned up</Struck>
      <At x={1430} y={640} s={pop(t, fps, abs)}><Chip color={GREEN} size={32}>mediation absent</Chip></At>
    </AbsoluteFill>
  );
};

const DullScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dull = c("the emptiness that applies to the dull"), real = c("Immediacy does not make appearances more real"), dist = c("no longer held at a distance");
  const close = ramp(t, dist + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, dull)}><Stone size={1.1} /></At>
      <At x={560} y={570} o={ramp(t, dull + 0.4, 0.5)}><Glow color={DIM} size={32}>the dull</Glow></At>
      <At x={1360} y={400} s={pop(t, fps, dull + 1.4)}><Flower size={0.95} /></At>
      <At x={1360} y={590} o={ramp(t, dull + 1.8, 0.5)}><Glow color={ROSE} size={32}>the vivid</Glow></At>
      <At x={960} y={130} o={ramp(t, dull + 2.4, 0.5)}><Glow color={CHALK} size={40} serif>empty, equally</Glow></At>
      <Svg><DrawPath d="M640 240 Q960 170 1280 240" p={ramp(t, dull + 2.4, 0.8)} color={GOLD} width={4} len={700} /></Svg>
      <Struck x={960} y={680} at={real - 0.1} strikeAt={real + 1.4} color={VIOLET} size={32}>made more real</Struck>
      <At x={180} y={430} o={ramp(t, dist - 0.2, 0.5) * (1 - close)}><Ghost o={1} size={0.7} /></At>
      <Flow x1={260} y1={420} x2={430} y2={420} color={DIM} p={ramp(t, dist - 0.2, 0.5) * (1 - close)} dash pulses={false} />
      <At x={960} y={800} o={ramp(t, dist + 1.2, 0.5)}><Chip color={GREEN} size={30}>no longer held at a distance</Chip></At>
    </AbsoluteFill>
  );
};

const ThoughtScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const side = c("It describes the same thing from the side of thinking"), arise = c("Thoughts arise, and are not followed");
  const wall = c("they do not become a wall");
  const wallGone = ramp(t, wall + 0.8, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, side, 0.5)}><Glow color={CHALK} size={44} serif>from the side of thinking</Glow></At>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        if (t < arise - 0.3) return null;
        const life = ((t - arise + 0.3) * 0.3 + i / 6) % 1;
        return <At key={i} x={420 + i * 90 + Math.sin(t + i) * 18} y={760 - life * 480} o={Math.sin(life * Math.PI) * ramp(t, arise - 0.3, 0.6)}
          blur={life * 8} s={0.8 + life * 0.5}><Bubble size={80} color={[VIOLET, TEAL, ROSE][i % 3]} /></At>;
      })}
      <At x={640} y={820} o={ramp(t, arise + 0.4, 0.5)}><Glow color={TEAL} size={30}>arising, not followed</Glow></At>
      {Array.from({ length: 12 }).map((_, i) => {
        const row = Math.floor(i / 3), col = i % 3;
        const at = wall - 0.2 + i * 0.08;
        return (
          <At key={i} x={1220 + col * 130 + (row % 2) * 65} y={680 - row * 70} o={ramp(t, at, 0.3) * 0.7 * (1 - wallGone)} blur={wallGone * 8}>
            <div style={{ width: 120, height: 60, borderRadius: 6, border: `3px dashed ${WARM}`, background: `${WARM}18` }} />
          </At>
        );
      })}
      <At x={1350} y={300} o={ramp(t, wall + 1.6, 0.5)}><Chip color={GREEN} size={34}>no wall</Chip></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Then comes a question"), a = c("Is this an achievement, or a stopping");
  const slow = 1 - ramp(t, a + 2.0, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={130} s={pop(t, fps, q)}><Glow color={GOLD} size={56} serif>a question</Glow></At>
      <At x={580} y={440} s={pop(t, fps, a + 0.2)}><Trophy size={1.1} /></At>
      <At x={580} y={660} o={ramp(t, a + 0.4, 0.5)}><Chip color={GOLD} size={34}>an achievement?</Chip></At>
      <At x={960} y={440} o={ramp(t, a + 0.8, 0.5)}><Glow color={DIM} size={48} serif>or</Glow></At>
      <At x={1330} y={420} s={pop(t, fps, a + 1.0)}><Gear rot={t * 90 * slow} /></At>
      <At x={1440} y={500} s={pop(t, fps, a + 1.1)}><Gear size={0.7} rot={-t * 130 * slow} color={VIOLET} /></At>
      <At x={1360} y={660} o={ramp(t, a + 1.2, 0.5)}><Chip color={TEAL} size={34}>a stopping?</Chip></At>
    </AbsoluteFill>
  );
};

const StoppingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const con = c("If the gap is a construction"), run = c("wherever the construction is not running"), built = c("If the gap were built into things");
  const show = c("Practice would only show the gap again"), both = c("both take the first view");
  const spin = 1 - ramp(t, run + 0.2, 1.6);
  return (
    <AbsoluteFill>
      <At x={520} y={110} o={ramp(t, con, 0.5)}><Glow color={TEAL} size={36} serif>a construction</Glow></At>
      <At x={380} y={330} s={pop(t, fps, con + 0.2)}><Gear rot={t * 100 * spin} /></At>
      <At x={490} y={400} s={pop(t, fps, con + 0.3)}><Gear size={0.7} rot={-t * 140 * spin} color={VIOLET} /></At>
      <GapMark x1={420} x2={700} y={620} o={ramp(t, con + 0.8, 0.5) * spin} label="gap, being built" />
      <At x={640} y={380} o={ramp(t, run + 1.0, 0.6)}><Tree size={0.45} vivid={1} /></At>
      <At x={520} y={760} o={ramp(t, run, 0.5)}><Chip color={GREEN} size={28}>not running: the taste is there</Chip></At>
      <At x={1400} y={110} o={ramp(t, built, 0.5)}><Glow color={WARM} size={36} serif>built into things?</Glow></At>
      <At x={1400} y={380} s={pop(t, fps, built + 0.2)}>
        <div style={{ display: "flex", gap: 60 }}>
          {[0, 1].map((k) => <div key={k} style={{ width: 160, height: 220, borderRadius: 10, background: "linear-gradient(180deg, #8a8a8f, #4b4b52)", border: `3px solid ${DIM}` }} />)}
        </div>
      </At>
      <At x={1400} y={560} o={ramp(t, show, 0.5)}><Glow color={DIM} size={28}>practice: the gap again</Glow></At>
      <Crossed x={1400} y={380} at={both + 0.6} size={150} />
      <At x={520} y={680} o={ramp(t, both, 0.5)}><div style={{ display: "flex", gap: 14, alignItems: "center" }}><Tick at={both + 0.1} /><Glow color={GREEN} size={28}>both traditions</Glow></div></At>
    </AbsoluteFill>
  );
};

const TwoQuestionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const why = c("Why does the construction return so readily"), loos = c("what, in practice, loosens it");
  const wob = Math.sin(t * 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, why - 0.4, 0.5)}><Glow color={CHALK} size={42} serif>two things to understand</Glow></At>
      <At x={560} y={400} s={pop(t, fps, why)}><Gear rot={t * 60 * ramp(t, why + 0.4, 1)} /></At>
      <At x={560} y={600} o={ramp(t, why + 0.3, 0.5)}><Chip color={GOLD} size={30}>why does it return?</Chip></At>
      <At x={1360} y={400} s={pop(t, fps, loos)}>
        <svg width={260} height={200} viewBox="-130 -100 260 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${TEAL})` }}>
          <path d={`M-120 0 C-60 ${-60 - 20 * wob} 60 ${60 + 20 * wob} 120 0 M-120 0 C-60 ${60 + 20 * wob} 60 ${-60 - 20 * wob} 120 0`} fill="none" stroke={TEAL} strokeWidth={8} strokeLinecap="round" />
        </svg>
      </At>
      <At x={1360} y={600} o={ramp(t, loos + 0.3, 0.5)}><Chip color={TEAL} size={30}>what loosens it?</Chip></At>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cau = c("One caution belongs here"), become = c("can quietly become a new ground"), poss = c("something to possess");
  const sink = ramp(t, become + 0.2, 1.6), grip = ramp(t, poss, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={110} s={pop(t, fps, cau)}>
        <svg width={110} height={100} viewBox="0 0 110 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <path d="M55 6 L104 94 L6 94 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={6} strokeLinejoin="round" />
          <line x1={55} y1={36} x2={55} y2={64} stroke={GOLD} strokeWidth={8} strokeLinecap="round" /><circle cx={55} cy={80} r={5} fill={GOLD} />
        </svg>
      </At>
      <At x={960} y={420} o={ramp(t, cau + 0.8, 0.6)}><Tree size={0.6} vivid={1} /></At>
      <At x={960} y={260 + 420 * sink} s={pop(t, fps, cau + 0.8)}>
        <div style={{ width: 300 + 700 * sink, height: 60 + 10 * sink, borderRadius: 30 - 20 * sink, border: `3px solid ${VIOLET}`,
          background: `${VIOLET}${sink > 0.5 ? "55" : "22"}`, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 34, color: CHALK, boxShadow: `0 0 24px ${VIOLET}66` }}>“no gap, no ground”</div>
      </At>
      <At x={960} y={690} o={grip}><Claws open={0.05 + Math.sin(t * 1.4) * 0.04} /></At>
      <At x={1500} y={690} o={ramp(t, become + 1.0, 0.5)}><Glow color={WARM} size={30}>a new ground</Glow></At>
      <At x={420} y={690} o={ramp(t, poss + 0.3, 0.5)}><Glow color={WARM} size={30}>something to possess</Glow></At>
      <Crossed x={960} y={690} at={poss + 2.0} size={90} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const simp = c("So the immediacy is best described simply"), kept = c("when the standing behind is not being kept up");
  const sure = c("It is not a state anyone can now be sure of");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, simp, 0.5)}><Glow color={GOLD} size={46} serif>described simply</Glow></At>
      <At x={760} y={420} s={pop(t, fps, simp + 0.3)}><Tree size={0.75} vivid={1} /></At>
      <At x={1220} y={420} s={pop(t, fps, simp + 0.6)}><Orb size={90} color={ICE} /></At>
      <Waves x={1280} y={420} o={ramp(t, simp + 0.8, 0.6)} />
      <At x={420} y={430} o={ramp(t, kept - 0.2, 0.5) * (1 - ramp(t, kept + 1.4, 1.2))}><Ghost o={1} size={0.9} /></At>
      <At x={420} y={650} o={ramp(t, kept + 0.2, 0.5)}><Glow color={DIM} size={28}>standing behind: not kept up</Glow></At>
      <Struck x={960} y={780} at={sure - 0.1} strikeAt={sure + 1.6} color={VIOLET} size={34}>a state to be sure of</Struck>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["gap", 0], ["bridge", c("is not to build a bridge across the gap", 0.6)], ["vivid", c("This is why experience can be vivid and direct", 0.6)],
    ["thought", c("It describes the same thing from the side of thinking", 0.6)], ["gap", c("If the gap is a construction", 0.6)],
    ["caution", c("One caution belongs here", 0.6)], ["vivid", c("So the immediacy is best described simply", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Here is a subject", 0.9)], <DistanceScene />],
    [S("Here is a subject", "is not to build a bridge across the gap"), <StructureScene />],
    [S("is not to build a bridge across the gap", "This is why experience can be vivid and direct"), <BridgeScene />],
    [S("This is why experience can be vivid and direct", "the emptiness that applies to the dull"), <VividScene />],
    [S("the emptiness that applies to the dull", "It describes the same thing from the side of thinking"), <DullScene />],
    [S("It describes the same thing from the side of thinking", "Then comes a question"), <ThoughtScene />],
    [S("Then comes a question", "If the gap is a construction"), <QuestionScene />],
    [S("If the gap is a construction", "Why does the construction return so readily"), <StoppingScene />],
    [S("Why does the construction return so readily", "One caution belongs here"), <TwoQuestionsScene />],
    [S("One caution belongs here", "So the immediacy is best described simply"), <CautionScene />],
    [S("So the immediacy is best described simply", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
