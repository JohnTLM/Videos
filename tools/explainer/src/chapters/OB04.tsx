// The Observer and the Taste of Presence, Chapter 4: The Given. Explainer drawings timed to the narration.
// Arc: with the observer gone, a second question: a raw layer beneath, which concepts describe (the Given) -> Locke's qualities,
// Sellars' myth -> the older, stricter scheme: two means of knowing, two kinds of object -> efficacy: real fire burns, thought
// fire does not -> the two-storey building -> a Given without a substrate -> three moves: hardness and earth, characteristic
// and characterised named together, singling out is contrast -> the pot, the cup seen as a cup -> long and short ->
// refused at every level -> the narrow refusal: the snake in the rope, the lamp -> the key, lock, hand and door ->
// the building has no ground floor; vividness and designation mingled all the way through.
// Stance: the raw layer, the bare substance and the ground floor are drawn only to be struck or dissolved; appearances stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Take away the observer", "a second question waits", "Does experience rest on something beneath it", "a raw layer",
  "which concepts then describe", "Philosophers call it the Given",
  "Locke gave it one shape", "Shape and motion", "Colour and warmth are only powers", "Wilfrid Sellars argued", "is a myth",
  "What we call a sensation is already conceptual",
  "Buddhist thought built its own version", "began with a symmetry", "two means of valid knowledge", "two kinds of object",
  "The particular, which characterises itself alone", "The universal, a character shared by many things",
  "sharpened the scheme", "it alone can do something", "causal efficacy", "Universals do nothing", "merely thought of burns no one",
  "So the building has two storeys", "Below are momentary particulars", "Above are concepts", "never touch particulars at all",
  "strictly they misrepresent",
  "This is no crude view", "no bare substance beneath qualities", "The real is what functions", "a Given without a substrate",
  "scheme with three moves", "The first concerns the word characteristic", "Hardness characterises earth",
  "If the hardness is different from the earth", "If it is the same",
  "Characteristic and characterised are designated together", "Neither is found first", "singled out as this, and only this",
  "the very work reserved for the upper floor",
  "The second concerns what perception meets", "keeps perception, as the world uses it", "what the world perceives is the pot",
  "not a momentary patch of colour", "A cup on a table is seen as a cup",
  "The third move comes from", "Means of knowing and objects known", "like long and short",
  "makes the conclusion explicit", "Nothing is established by its own characteristic", "Other schools kept the particular",
  "view refuses it at every level",
  "The refusal is narrow", "Valid knowing stays", "The snake seen in a rope", "still corrected by a lamp", "What goes is one claim", "as a floor",
  "deepest reason", "A key's power to open", "the lock, the hand and the door", "Efficacy is itself a relation", "the clearest mark of dependence",
  "So the building has no ground floor", "Perception is not a lower layer", "is not a top coat", "mingled all the way through",
];

// Book 4 mood: plum and gold
const M = {
  given: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  locke: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  scheme: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  moves: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  narrow: { a: "rgba(60,60,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(180,140,60,0.3)" },
  found: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
/** A dashed outline of a person: a looked-for observer (o 0..1). */
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

/** A flickering flame (lean -1..1). */
const Flame: React.FC<{ size?: number; lean?: number; seed?: number }> = ({ size = 1, lean = 0, seed = 0 }) => {
  const { t } = useT();
  const f = Math.sin(t * 9 + seed) * 5 + Math.sin(t * 13.7 + seed * 2) * 3;
  const tip = 60 + lean * 26 + f * 0.8, mid = 60 + (tip - 60) * 0.6;
  return (
    <svg width={120 * size} height={180 * size} viewBox="0 0 120 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${WARM}) drop-shadow(0 0 34px ${GOLD}88)` }}>
      <path d={`M60 176 C24 172 16 132 34 100 C46 78 ${tip - 6} 46 ${tip} ${6 + Math.abs(f) * 0.6} C${tip + 10} 50 104 84 100 124 C98 160 84 176 60 176 Z`} fill={`${WARM}cc`} />
      <path d={`M60 172 C40 168 36 140 46 120 C54 104 ${mid} 80 ${mid} ${60 + f * 0.4} C${mid + 6} 92 84 112 82 136 C80 160 72 172 60 172 Z`} fill={GOLD} />
      <ellipse cx={60} cy={150} rx={12} ry={18} fill="#FFF6D8" />
    </svg>
  );
};

/** An eye outline. */
const Eye: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = CHALK }) => (
  <svg width={180 * size} height={100 * size} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={90} cy={50} r={22} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} /><circle cx={90} cy={50} r={8} fill={CHALK} />
  </svg>
);

/** A clay pot. */
const Pot: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = ROSE }) => (
  <svg width={260 * size} height={260 * size} viewBox="0 0 260 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
    <path d="M78 44 L182 44 L172 74 Q236 110 224 170 Q210 236 130 240 Q50 236 36 170 Q24 110 88 74 Z" fill={`${color}30`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
    <path d="M64 44 L196 44" stroke={color} strokeWidth={9} strokeLinecap="round" />
    <path d="M60 150 Q130 176 200 150" stroke={color} strokeWidth={3} fill="none" strokeOpacity={0.6} />
  </svg>
);

/** A cup on a little table, with a wisp of steam. */
const CupOnTable: React.FC<{ color?: string }> = ({ color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={420} height={320} viewBox="0 0 420 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
      <path d={`M200 70 Q${185 + Math.sin(t * 2) * 10} 40 205 14`} stroke={CHALK} strokeOpacity={0.5} strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d="M140 90 L280 90 L266 226 Q262 244 240 244 L180 244 Q158 244 154 226 Z" fill={`${color}33`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
      <path d="M276 118 Q334 120 328 166 Q322 202 268 200" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
      <line x1={20} y1={256} x2={400} y2={256} stroke="#C9A06A" strokeWidth={12} strokeLinecap="round" />
      <line x1={70} y1={262} x2={70} y2={318} stroke="#C9A06A" strokeWidth={9} strokeLinecap="round" />
      <line x1={350} y1={262} x2={350} y2={318} stroke="#C9A06A" strokeWidth={9} strokeLinecap="round" />
    </svg>
  );
};

/** A coiled rope that looks like a snake in the dark (lit 0..1). */
const RopeSnake: React.FC<{ lit: number }> = ({ lit }) => {
  const { t } = useT();
  const d = "M40 160 C120 60 200 60 260 140 S400 230 470 140 S580 60 640 120";
  const wig = (1 - lit) * Math.sin(t * 3) * 6;
  return (
    <svg width={700} height={260} viewBox="0 0 700 260" style={{ overflow: "visible", filter: `brightness(${0.55 + 0.45 * lit})` }}>
      <g transform={`translate(0 ${wig})`} opacity={1 - lit}>
        <path d={d} fill="none" stroke="#4f8a5a" strokeWidth={26} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#9fd49a" strokeWidth={4} strokeDasharray="4 18" strokeLinecap="round" />
        <ellipse cx={652} cy={116} rx={32} ry={20} fill="#4f8a5a" />
        <circle cx={662} cy={108} r={5} fill={GOLD} />
        <path d="M684 118 L708 112 M684 118 L708 126" stroke={ROSE} strokeWidth={3} />
      </g>
      <g opacity={lit}>
        <path d={d} fill="none" stroke="#C9A06A" strokeWidth={22} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#7a5a32" strokeWidth={4} strokeDasharray="10 14" />
        <path d="M640 120 L668 104 M640 120 L670 122 M640 120 L662 138" stroke="#C9A06A" strokeWidth={4} strokeLinecap="round" />
      </g>
    </svg>
  );
};

/** An oil lamp with a flame. */
const OilLamp: React.FC<{ on: number }> = ({ on }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ opacity: on, transform: `scale(${0.4 + 0.6 * on})`, marginBottom: -20 }}><Flame size={0.5} /></div>
    <svg width={180} height={80} viewBox="0 0 180 80" style={{ overflow: "visible" }}>
      <path d="M10 20 Q90 90 170 20 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M90 56 L90 76 M60 78 L120 78" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    </svg>
  </div>
);

const Key: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={240} height={100} viewBox="0 0 240 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={44} cy={50} r={34} fill={`${color}22`} stroke={color} strokeWidth={7} />
    <circle cx={44} cy={50} r={11} fill="none" stroke={color} strokeWidth={5} />
    <path d="M78 50 L226 50 M196 50 L196 76 M172 50 L172 70 M214 50 L214 70" stroke={color} strokeWidth={9} strokeLinecap="round" />
  </svg>
);

/** A door that swings open (open 0..1) with a lock on it. */
const Door: React.FC<{ open: number }> = ({ open }) => (
  <div style={{ position: "relative", width: 280, height: 420, perspective: 1200 }}>
    <div style={{ position: "absolute", inset: -10, border: `6px solid ${CHALK}`, borderRadius: 8, background: `linear-gradient(180deg, ${GOLD}55, ${ROSE}33)`,
      boxShadow: `inset 0 0 ${60 * open}px ${GOLD}` }} />
    <div style={{ position: "absolute", inset: 0, transformOrigin: "left center", transform: `rotateY(${-72 * open}deg)`, borderRadius: 6,
      background: "linear-gradient(160deg, #5b3a6b, #36224a)", border: `4px solid ${VIOLET}`, boxShadow: `0 0 30px ${VIOLET}66` }}>
      <div style={{ position: "absolute", left: 30, top: 40, right: 30, height: 140, border: `3px solid ${VIOLET}aa`, borderRadius: 6 }} />
      <div style={{ position: "absolute", left: 30, bottom: 40, right: 30, height: 140, border: `3px solid ${VIOLET}aa`, borderRadius: 6 }} />
      <svg width={70} height={90} viewBox="0 0 70 90" style={{ position: "absolute", right: 18, top: 170, overflow: "visible" }}>
        <path d="M18 40 L18 26 Q18 6 35 6 Q52 6 52 26 L52 40" fill="none" stroke={ICE} strokeWidth={6} />
        <rect x={8} y={38} width={54} height={46} rx={8} fill={`${ICE}33`} stroke={ICE} strokeWidth={5} />
        <circle cx={35} cy={58} r={6} fill={ICE} /><line x1={35} y1={60} x2={35} y2={74} stroke={ICE} strokeWidth={5} />
      </svg>
    </div>
  </div>
);

/** The two-storey building: concepts above, momentary particulars below (ground may dissolve). */
const Building: React.FC<{ sparksAt: number; chipsAt: number; gapGlow?: number; groundGone?: number }> = ({ sparksAt, chipsAt, gapGlow = 0, groundGone = 0 }) => {
  const { t, fps } = useT();
  const chips: [string, number, number, string][] = [["pot", 150, 190, ROSE], ["red", 370, 150, GOLD], ["fire", 590, 200, WARM]];
  return (
    <div style={{ position: "relative", width: 760, height: 600 }}>
      <svg width={760} height={90} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
        <path d="M20 86 L380 8 L740 86 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
      </svg>
      <div style={{ position: "absolute", left: 40, top: 86, width: 680, height: 226, border: `4px solid ${VIOLET}`, background: `${VIOLET}16`, borderRadius: 6,
        boxShadow: `0 0 24px ${VIOLET}55` }} />
      {chips.map(([w, x, y, col], i) => (
        <div key={w} style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${pop(t, fps, chipsAt + i * 0.35)})` }}>
          <Chip color={col} size={30}>{w}</Chip>
        </div>
      ))}
      <div style={{ position: "absolute", left: 30, top: 316, width: 700, height: 14, borderRadius: 4, background: `${GOLD}66`,
        boxShadow: `0 0 ${10 + 30 * gapGlow}px ${GOLD}` }} />
      <div style={{ position: "absolute", left: 40, top: 334, width: 680, height: 240, border: `4px solid ${TEAL}`, background: `${TEAL}12`, borderRadius: 6,
        opacity: 1 - groundGone, filter: groundGone > 0.01 ? `blur(${groundGone * 10}px)` : undefined, overflow: "hidden" }}>
        {Array.from({ length: 26 }).map((_, i) => {
          const blink = Math.max(0, Math.sin(t * (2 + rand(i) * 3) + i * 1.7));
          return <div key={i} style={{ position: "absolute", left: 20 + rand(i + 3) * 630, top: 20 + rand(i + 8) * 190, width: 14, height: 14, borderRadius: "50%",
            background: [TEAL, ICE, GOLD, ROSE][i % 4], opacity: ramp(t, sparksAt + rand(i) * 0.8, 0.4) * blink, boxShadow: `0 0 14px ${[TEAL, ICE, GOLD, ROSE][i % 4]}` }} />;
        })}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const GivenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const obs = c("Take away the observer"), q = c("a second question waits"), beneath = c("Does experience rest on something beneath it");
  const raw = c("a raw layer"), desc = c("which concepts then describe"), given = c("Philosophers call it the Given");
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN];
  return (
    <AbsoluteFill>
      <At x={960} y={440} o={ramp(t, obs, 0.5) * (1 - ramp(t, q + 0.6, 0.6))}><Ghost o={1} size={1.1} /></At>
      {t < q + 1.3 && <Crossed x={960} y={440} at={obs + 0.9} size={110} />}
      <At x={960} y={120} o={ramp(t, q, 0.5)}><Glow color={CHALK} size={44} serif>a second question</Glow></At>
      {cols.map((col, i) => (
        <At key={i} x={560 + i * 200} y={380 + Math.sin(t * 1.4 + i) * 8} s={pop(t, fps, beneath + i * 0.2)}><Orb size={80} color={col} /></At>
      ))}
      <At x={960} y={250} o={ramp(t, beneath + 0.8, 0.5) * (1 - ramp(t, desc, 0.4))}><Glow color={DIM} size={32}>resting on something beneath?</Glow></At>
      <At x={960} y={560} o={ramp(t, raw - 0.1, 0.6)}>
        <div style={{ width: 1060, height: 80, borderRadius: 12, border: `3px dashed ${DIM}`, background: "#2a2a30aa", display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 34, color: DIM }}>a raw layer, before any naming?</div>
      </At>
      {["tree", "warm", "red", "sky", "leaf"].map((w, i) => (
        <React.Fragment key={w}>
          <At x={560 + i * 200} y={230} s={pop(t, fps, desc + i * 0.25)}><Chip color={VIOLET} size={28}>{w}</Chip></At>
          <Flow x1={560 + i * 200} y1={262} x2={560 + i * 200} y2={330} color={VIOLET} p={ramp(t, desc + 0.3 + i * 0.25, 0.4)} pulses={false} />
        </React.Fragment>
      ))}
      <At x={960} y={720} s={pop(t, fps, given)}><Glow color={GOLD} size={72} serif>“the Given”</Glow></At>
    </AbsoluteFill>
  );
};

const LockeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const locke = c("Locke gave it one shape"), shape = c("Shape and motion"), col = c("Colour and warmth are only powers");
  const sellars = c("Wilfrid Sellars argued"), myth = c("is a myth"), sens = c("What we call a sensation is already conceptual");
  const lo = 1 - ramp(t, sellars, 0.6);
  const roll = Math.sin(t * 1.2) * 40;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, locke, 0.5) * lo}><Glow color={CHALK} size={46} serif>Locke: two kinds of quality</Glow></At>
      <div style={{ opacity: lo }}>
        <At x={760 + roll} y={450} s={pop(t, fps, locke + 0.3)} r={roll * 2}>
          <div style={{ width: 220, height: 220, borderRadius: "50%", border: `5px solid ${CHALK}`, background: `radial-gradient(circle at 35% 30%, ${ROSE}aa, ${WARM}55 60%, transparent)`,
            boxShadow: `0 0 50px ${WARM}66` }} />
        </At>
        {[["shape", 300], ["motion", 600]].map(([w, y], i) => (
          <React.Fragment key={w as string}>
            <At x={340} y={y as number} s={pop(t, fps, shape + i * 0.4)}><Chip color={TEAL} size={34}>{w}</Chip></At>
            <Flow x1={430} y1={y as number} x2={660 + roll} y2={450} color={TEAL} p={ramp(t, shape + 0.3 + i * 0.4, 0.6)} pulses={false} />
          </React.Fragment>
        ))}
        <At x={340} y={720} o={ramp(t, shape + 1.2, 0.5)}><Glow color={TEAL} size={30}>in the body itself</Glow></At>
        {[["colour", 330], ["warmth", 560]].map(([w, y], i) => (
          <React.Fragment key={w as string}>
            <At x={1240} y={y as number} s={pop(t, fps, col + i * 0.4)}><Chip color={ROSE} size={34}>{w}</Chip></At>
            <Flow x1={1330} y1={y as number} x2={1560} y2={450} color={ROSE} p={ramp(t, col + 0.4 + i * 0.4, 0.6)} dash />
          </React.Fragment>
        ))}
        <At x={1640} y={450} o={ramp(t, col + 0.8, 0.5)}><Eye size={0.8} /></At>
        <At x={1400} y={720} o={ramp(t, col + 1.4, 0.5)}><Glow color={ROSE} size={30}>only powers, felt in us</Glow></At>
      </div>
      <At x={960} y={130} o={ramp(t, sellars, 0.5)}><Glow color={CHALK} size={46} serif>Wilfrid Sellars</Glow></At>
      <Struck x={960} y={350} at={sellars + 0.4} strikeAt={myth + 0.3} color={GOLD} size={46}>a pure given</Struck>
      <At x={960} y={460} s={pop(t, fps, myth + 0.2)}><Glow color={WARM} size={52} serif>a myth</Glow></At>
      <At x={780} y={660} s={pop(t, fps, sens)}><Chip color={TEAL} size={38}>a sensation</Chip></At>
      <Flow x1={920} y1={660} x2={1060} y2={660} color={VIOLET} p={ramp(t, sens + 0.6, 0.5)} />
      <At x={1220} y={660} s={pop(t, fps, sens + 1.0)}><Chip color={VIOLET} size={38}>already conceptual</Chip></At>
    </AbsoluteFill>
  );
};

const SymmetryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bud = c("Buddhist thought built its own version"), sym = c("began with a symmetry"), means = c("two means of valid knowledge");
  const kinds = c("two kinds of object"), part = c("The particular, which characterises itself alone"), uni = c("The universal, a character shared by many things");
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, bud, 0.5)}><Glow color={GOLD} size={42} serif>an older scheme, more rigorous</Glow></At>
      <Svg><DrawPath d="M960 200 L960 800" p={ramp(t, bud + 0.6, 1.2)} color={GOLD} width={3} len={620} /></Svg>
      {[560, 1360].map((x, i) => (
        <At key={x} x={x} y={510} o={ramp(t, bud + 1.0 + i * 0.4, 0.6) * (1 - 0.6 * ramp(t, means, 0.8))}>
          <div style={{ width: 600, height: 600, borderRadius: 24, border: `3px dashed ${i ? VIOLET : TEAL}`, background: `${i ? VIOLET : TEAL}0d` }} />
        </At>
      ))}
      <At x={960} y={180} o={ramp(t, sym + 0.3, 0.4)}><Glow color={DIM} size={26}>symmetry</Glow></At>
      <At x={560} y={260} s={pop(t, fps, means)}><Chip color={TEAL} size={38}>perception</Chip></At>
      <At x={1360} y={260} s={pop(t, fps, means + 0.6)}><Chip color={VIOLET} size={38}>inference, concept</Chip></At>
      <At x={560} y={340} o={ramp(t, kinds, 0.4)}><Glow color={DIM} size={26}>grasps</Glow></At>
      <At x={1360} y={340} o={ramp(t, kinds, 0.4)}><Glow color={DIM} size={26}>grasps</Glow></At>
      <At x={560} y={500} s={pop(t, fps, part)}><Orb size={110} color={GOLD} core={1} /></At>
      <Ring x={560} y={500} p={(Math.max(0, t - part) * 0.6) % 1} r0={60} r1={170} color={GOLD} />
      <At x={560} y={680} o={ramp(t, part + 0.4, 0.5)}><Chip color={GOLD} size={32}>a particular: itself alone</Chip></At>
      <At x={560} y={770} o={ramp(t, part + 1.4, 0.5)}><Glow color={TEAL} size={28}>free of concepts</Glow></At>
      {[0, 1, 2].map((i) => (
        <At key={i} x={1220 + i * 140} y={510} o={ramp(t, uni + i * 0.25, 0.4)}><Flame size={0.55 + 0.1 * (i % 2)} seed={i * 3} /></At>
      ))}
      <At x={1360} y={510} o={ramp(t, uni + 1.0, 0.5)}>
        <div style={{ width: 520, height: 200, borderRadius: 100, border: `3px dashed ${VIOLET}` }} />
      </At>
      <At x={1360} y={680} o={ramp(t, uni + 1.2, 0.5)}><Chip color={VIOLET} size={32}>“fire”: shared by many</Chip></At>
    </AbsoluteFill>
  );
};

const EfficacyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sharp = c("sharpened the scheme"), act = c("it alone can do something"), eff = c("causal efficacy");
  const nothing = c("Universals do nothing"), burns = c("merely thought of burns no one");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sharp, 0.5)}><Glow color={CHALK} size={44} serif>real, because it does something</Glow></At>
      <At x={520} y={520} s={pop(t, fps, sharp + 1.2)}><Flame size={1.3} /></At>
      <At x={760} y={360} o={ramp(t, act + 0.6, 0.5)}><Pot size={0.6} color={ICE} /></At>
      <Mist x={760} y={280} start={act + 1.2} color={CHALK} spread={120} n={14} />
      <Flow x1={580} y1={460} x2={700} y2={400} color={WARM} p={ramp(t, act + 0.9, 0.5)} />
      <At x={600} y={740} s={pop(t, fps, eff)}><Chip color={WARM} size={36}>causal efficacy</Chip></At>
      <At x={1360} y={430} o={ramp(t, nothing - 0.2, 0.5)}>
        <div style={{ width: 380, height: 260, borderRadius: 130, border: `4px solid ${VIOLET}`, background: `${VIOLET}18`, display: "flex",
          alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ opacity: 0.45, filter: "grayscale(0.6)" }}><Flame size={0.5} /></div>
          <span style={{ fontFamily: SERIF, fontSize: 52, color: CHALK }}>“fire”</span>
        </div>
      </At>
      {[0, 1].map((i) => (
        <At key={i} x={1180 + i * 40} y={600 + i * 40} o={ramp(t, nothing, 0.4)}>
          <div style={{ width: 30 - i * 10, height: 30 - i * 10, borderRadius: "50%", border: `3px solid ${VIOLET}` }} />
        </At>
      ))}
      <At x={1600} y={640} o={ramp(t, burns - 0.2, 0.5)}><Hand size={140} /></At>
      <At x={1360} y={760} s={pop(t, fps, burns + 0.4)}><Chip color={VIOLET} size={34}>a thought fire burns no one</Chip></At>
    </AbsoluteFill>
  );
};

const BuildingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("So the building has two storeys"), below = c("Below are momentary particulars"), above = c("Above are concepts");
  const touch = c("never touch particulars at all"), mis = c("strictly they misrepresent");
  return (
    <AbsoluteFill>
      <At x={960} y={480} s={pop(t, fps, two)}><Building sparksAt={below} chipsAt={above} gapGlow={between(t, touch, touch + 3)} /></At>
      <At x={400} y={620} o={ramp(t, below + 0.3, 0.5)}><Chip color={TEAL} size={30}>perception</Chip></At>
      <At x={400} y={690} o={ramp(t, below + 0.6, 0.5)}><Glow color={TEAL} size={26}>momentary particulars</Glow></At>
      <At x={400} y={360} o={ramp(t, above + 0.3, 0.5)}><Chip color={VIOLET} size={30}>concepts</Chip></At>
      <At x={1540} y={490} o={ramp(t, touch, 0.5)}><Glow color={GOLD} size={30}>they never touch</Glow></At>
      <Svg><DrawPath d="M1400 470 L1310 470" p={ramp(t, touch + 0.3, 0.4)} color={GOLD} width={4} len={100} /></Svg>
      <At x={1540} y={300} s={pop(t, fps, mis)}><Chip color={ROSE} size={30}>useful, but they misrepresent</Chip></At>
    </AbsoluteFill>
  );
};

const NoCrudeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const crude = c("This is no crude view"), bare = c("no bare substance beneath qualities"), real = c("The real is what functions");
  const wo = c("a Given without a substrate");
  const slabGone = ramp(t, bare + 2.2, 1.0);
  return (
    <AbsoluteFill>
      <Head text="no crude view" at={crude} y={90} size={72} color={GREEN} />
      {[["hard", ICE], ["warm", WARM], ["red", ROSE]].map(([w, col], i) => (
        <At key={w} x={720 + i * 240} y={290} s={pop(t, fps, bare - 0.2 + i * 0.2)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <At x={960} y={390} o={ramp(t, bare + 0.4, 0.5) * (1 - slabGone)} blur={slabGone * 8}>
        <div style={{ width: 760, height: 60, borderRadius: 10, border: `3px dashed ${DIM}`, background: "#2a2a30aa", fontFamily: SERIF, fontSize: 28,
          color: DIM, display: "flex", alignItems: "center", justifyContent: "center" }}>a bare substance beneath?</div>
      </At>
      {t < bare + 3 && <Crossed x={960} y={390} at={bare + 1.4} size={70} />}
      <At x={760} y={560} s={pop(t, fps, real)}><Chip color={GOLD} size={36}>the real</Chip></At>
      <At x={960} y={560} o={ramp(t, real + 0.4, 0.4)}><Glow color={GOLD} size={50} serif>=</Glow></At>
      <At x={1200} y={560} s={pop(t, fps, real + 0.8)}><Chip color={WARM} size={36}>what functions</Chip></At>
      <Ring x={1200} y={560} p={(Math.max(0, t - real - 1) * 0.7) % 1} r0={60} r1={200} color={WARM} />
      <At x={960} y={740} o={ramp(t, wo, 0.3)}><Reveal text="a Given without a substrate" at={wo} size={56} /></At>
      <At x={960} y={820} o={ramp(t, wo + 1.6, 0.5)}><Glow color={DIM} size={28}>its strongest form</Glow></At>
    </AbsoluteFill>
  );
};

const MoveDots: React.FC<{ at: number; active: number }> = ({ at, active }) => {
  const { t } = useT();
  return (
    <At x={960} y={100} o={ramp(t, at, 0.5)}>
      <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
        <span style={{ fontFamily: SERIF, fontSize: 38, color: CHALK, marginRight: 10 }}>three moves</span>
        {[1, 2, 3].map((n) => (
          <div key={n} style={{ width: 54, height: 54, borderRadius: "50%", border: `3px solid ${n === active ? GOLD : DIM}`, background: n === active ? `${GOLD}44` : "transparent",
            boxShadow: n === active ? `0 0 20px ${GOLD}` : undefined, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: SERIF, fontSize: 32, color: n === active ? CHALK : DIM }}>{n}</div>
        ))}
      </div>
    </At>
  );
};

const HardnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("scheme with three moves"), first = c("The first concerns the word characteristic"), hard = c("Hardness characterises earth");
  const diff = c("If the hardness is different from the earth"), same = c("If it is the same");
  const sep = ramp(t, diff + 0.3, 1) * (1 - ramp(t, same, 1)), merge = ramp(t, same + 0.6, 1);
  return (
    <AbsoluteFill>
      <MoveDots at={three} active={t > first ? 1 : 0} />
      <At x={960} y={200} o={ramp(t, first, 0.5)}><Glow color={DIM} size={30}>the word “characteristic”</Glow></At>
      {[1, 2, 3].map((n, i) => (
        <At key={n} x={720 + i * 240} y={500} s={pop(t, fps, three + 0.6 + i * 0.3)} o={1 - ramp(t, first + 0.2, 0.5)}>
          <div style={{ width: 150, height: 150, borderRadius: "50%", border: `4px solid ${GOLD}`, background: `${GOLD}22`, boxShadow: `0 0 30px ${GOLD}88`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 80, color: CHALK }}>{n}</div>
        </At>
      ))}
      <At x={960 - 480 * sep} y={520} s={pop(t, fps, first + 0.7)}>
        <svg width={320} height={220} viewBox="0 0 320 220" style={{ overflow: "visible" }}>
          <path d="M20 200 L50 80 L130 30 L230 50 L300 130 L280 200 Z" fill={`#8a5a34${sep > 0.5 ? "33" : "aa"}`} stroke="#C9A06A" strokeWidth={6}
            strokeDasharray={sep > 0.5 ? "14 10" : undefined} strokeLinejoin="round" />
        </svg>
      </At>
      <At x={960 - 480 * sep} y={680} o={ramp(t, first + 0.9, 0.4) * (1 - sep)}><Glow color="#C9A06A" size={30}>earth</Glow></At>
      <At x={960 + 490 * sep} y={340 + 160 * merge} s={pop(t, fps, hard + 0.6)} o={1 - 0.85 * merge}><Chip color={ICE} size={36}>hardness</Chip></At>
      <Flow x1={960} y1={370} x2={960} y2={430} color={ICE} p={ramp(t, hard + 1, 0.4) * (1 - ramp(t, diff, 0.3))} pulses={false} />
      <At x={480} y={760} o={between(t, diff + 1.0, same)}><Glow color={WARM} size={32}>earth with no mark?</Glow></At>
      <At x={1450} y={460} o={between(t, diff + 1.4, same)}><Glow color={DIM} size={28}>hardness of nothing?</Glow></At>
      <At x={960} y={780} o={ramp(t, same + 1.4, 0.5)}><Chip color={WARM} size={32}>one thing: nothing characterises</Chip></At>
    </AbsoluteFill>
  );
};

const TogetherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tog = c("Characteristic and characterised are designated together"), first = c("Neither is found first");
  const single = c("singled out as this, and only this"), work = c("the very work reserved for the upper floor");
  return (
    <AbsoluteFill>
      <At x={620} y={200} s={pop(t, fps, tog)}><Chip color={ICE} size={38}>characteristic</Chip></At>
      <At x={1300} y={200} s={pop(t, fps, tog)}><Chip color={GOLD} size={38}>characterised</Chip></At>
      <Flow x1={820} y1={185} x2={1110} y2={185} color={ICE} p={ramp(t, tog + 0.5, 0.6)} />
      <Flow x1={1110} y1={215} x2={820} y2={215} color={GOLD} p={ramp(t, tog + 0.7, 0.6)} />
      <At x={960} y={290} o={ramp(t, tog + 1.2, 0.5)}><Glow color={TEAL} size={30}>named together</Glow></At>
      <Struck x={960} y={390} at={first} strikeAt={first + 1.0} color={DIM} size={32}>one of them first</Struck>
      {Array.from({ length: 7 }).map((_, i) => {
        const me = i === 3;
        return (
          <At key={i} x={540 + i * 140} y={590} s={pop(t, fps, single - 0.4 + i * 0.08)}>
            <Orb size={me ? 90 : 56} color={me ? GOLD : [TEAL, ROSE, ICE, GOLD, GREEN, VIOLET, ICE][i]} />
          </At>
        );
      })}
      {Array.from({ length: 7 }).map((_, i) => i === 3 ? null : (
        <Flow key={i} x1={960} y1={590} x2={540 + i * 140} y2={590 + (i < 3 ? -1 : 1) * (40 + Math.abs(i - 3) * 14)} color={GOLD}
          p={ramp(t, single + 1.4 + Math.abs(i - 3) * 0.15, 0.5)} dash />
      ))}
      <At x={960} y={480} o={ramp(t, single + 0.4, 0.5)}><Glow color={GOLD} size={32}>“this, and only this”</Glow></At>
      <At x={960} y={720} o={ramp(t, single + 2.0, 0.5)}><Chip color={GOLD} size={32}>singled out by contrast</Chip></At>
      <At x={960} y={810} o={ramp(t, work, 0.5)}><Glow color={VIOLET} size={30}>the upper floor's work, already done</Glow></At>
    </AbsoluteFill>
  );
};

const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const second = c("The second concerns what perception meets"), keeps = c("keeps perception, as the world uses it");
  const pot = c("what the world perceives is the pot"), patch = c("not a momentary patch of colour"), cup = c("A cup on a table is seen as a cup");
  return (
    <AbsoluteFill>
      <MoveDots at={second - 0.4} active={2} />
      <At x={960} y={200} o={ramp(t, second, 0.5)}><Glow color={DIM} size={30}>what perception meets</Glow></At>
      <At x={360} y={420} s={pop(t, fps, second + 0.9)}><Eye /></At>
      <At x={360} y={540} o={ramp(t, keeps + 0.4, 0.4)}><Tick at={keeps + 0.5} /></At>
      <At x={360} y={630} o={ramp(t, keeps + 0.8, 0.5)}><Glow color={GREEN} size={28}>perception kept</Glow></At>
      <At x={860} y={440} s={pop(t, fps, pot)}><Pot /></At>
      <At x={860} y={620} o={ramp(t, pot + 0.4, 0.5)}><Chip color={ROSE} size={32}>the pot</Chip></At>
      <At x={860} y={760} o={ramp(t, patch, 0.4)}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 46, height: 46, borderRadius: 4, background: ROSE, opacity: 0.4 + 0.6 * Math.abs(Math.sin(t * 6)) }} />
          <div style={{ position: "relative" }}><Chip color={DIM} size={28}>a momentary patch of colour</Chip><Strike at={patch + 1.2} /></div>
        </div>
      </At>
      <At x={1450} y={440} s={pop(t, fps, cup)}><CupOnTable /></At>
      <At x={1450} y={660} o={ramp(t, cup + 0.8, 0.5)}><Chip color={TEAL} size={32}>a cup, from the start</Chip></At>
    </AbsoluteFill>
  );
};

const LongShortScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const third = c("The third move comes from"), means = c("Means of knowing and objects known"), ls = c("like long and short");
  const longer = ramp(t, ls + 2.4, 0.8);
  const bar = (y: number, w: number, col: string, o: number) => (
    <div style={{ position: "absolute", left: 520, top: y, width: w, height: 30, borderRadius: 15, background: col, boxShadow: `0 0 20px ${col}`, opacity: o }} />
  );
  return (
    <AbsoluteFill>
      <MoveDots at={third - 0.4} active={3} />
      <At x={600} y={270} s={pop(t, fps, means)}><Chip color={TEAL} size={36}>means of knowing</Chip></At>
      <At x={1320} y={270} s={pop(t, fps, means + 0.8)}><Chip color={VIOLET} size={36}>objects known</Chip></At>
      <Flow x1={800} y1={255} x2={1150} y2={255} color={TEAL} p={ramp(t, means + 1.2, 0.6)} />
      <Flow x1={1150} y1={285} x2={800} y2={285} color={VIOLET} p={ramp(t, means + 1.4, 0.6)} />
      <At x={960} y={360} o={ramp(t, means + 1.8, 0.5)}><Glow color={DIM} size={28}>each defines the other</Glow></At>
      {bar(470, 300 * ramp(t, ls, 0.5), ICE, 1)}
      {bar(550, 620 * ramp(t, ls + 0.4, 0.6), GOLD, 1)}
      {bar(630, 960 * longer, ROSE, longer)}
      <At x={440} y={485} o={ramp(t, ls + 0.3, 0.4)}><Glow color={ICE} size={30}>short</Glow></At>
      <At x={440} y={565} o={ramp(t, ls + 0.7, 0.4) * (1 - longer)}><Glow color={GOLD} size={30}>long</Glow></At>
      <At x={440} y={565} o={longer}><Glow color={GOLD} size={30}>short</Glow></At>
      <At x={440} y={645} o={longer}><Glow color={ROSE} size={30}>long</Glow></At>
      <At x={960} y={760} o={ramp(t, ls + 3.2, 0.5)}><Chip color={GOLD} size={32}>neither is long by itself</Chip></At>
    </AbsoluteFill>
  );
};

const RefusalScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const expl = c("makes the conclusion explicit"), own = c("Nothing is established by its own characteristic");
  const other = c("Other schools kept the particular"), every = c("view refuses it at every level");
  const cell = (x: number, y: number, at: number, ok: boolean) => (
    <At x={x} y={y} s={pop(t, fps, at)}>
      <div style={{ position: "relative", width: 120, height: 120 }}>
        <div style={{ position: "absolute", left: 30, top: 30 }}><Orb size={60} color={GOLD} /></div>
        {ok && <div style={{ position: "absolute", left: 70, top: 70 }}><Tick at={at + 0.3} /></div>}
      </div>
    </At>
  );
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, expl, 0.5)}><Glow color={DIM} size={32}>the conclusion, made explicit</Glow></At>
      <At x={960} y={190} s={pop(t, fps, own)}><Chip color={GOLD} size={38}>nothing stands by its own mark</Chip></At>
      <At x={400} y={440} o={ramp(t, other - 0.2, 0.5)}><Glow color={CHALK} size={32} serif>ultimately</Glow></At>
      <At x={400} y={620} o={ramp(t, other - 0.2, 0.5)}><Glow color={CHALK} size={32} serif>conventionally</Glow></At>
      <Svg><DrawPath d="M260 530 L1660 530" p={ramp(t, other - 0.2, 1)} color={DIM} width={2} len={1420} glow={false} /></Svg>
      <At x={900} y={320} o={ramp(t, other, 0.5)}><Chip color={TEAL} size={30}>other schools</Chip></At>
      {cell(900, 440, other + 0.3, false)}
      <Crossed x={900} y={440} at={other + 0.8} size={44} />
      {cell(900, 620, other + 1.2, true)}
      <At x={1420} y={320} o={ramp(t, every - 0.3, 0.5)}><Chip color={VIOLET} size={30}>this view</Chip></At>
      {cell(1420, 440, every, false)}
      {cell(1420, 620, every + 0.3, false)}
      <Crossed x={1420} y={440} at={every + 0.8} size={44} />
      <Crossed x={1420} y={620} at={every + 1.2} size={44} />
      <At x={1420} y={760} o={ramp(t, every + 1.6, 0.5)}><Glow color={WARM} size={30}>refused at every level</Glow></At>
    </AbsoluteFill>
  );
};

const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const narrow = c("The refusal is narrow"), stays = c("Valid knowing stays"), snake = c("The snake seen in a rope");
  const lamp = c("still corrected by a lamp"), claim = c("What goes is one claim"), floor = c("as a floor");
  const lit = ramp(t, lamp + 0.5, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, narrow, 0.5)}><Glow color={CHALK} size={44} serif>a narrow refusal</Glow></At>
      <At x={960} y={190} s={pop(t, fps, stays)}><Chip color={GREEN} size={34}>valid knowing stays</Chip></At>
      <At x={900} y={470} o={ramp(t, snake - 0.2, 0.6)}><RopeSnake lit={lit} /></At>
      <At x={900} y={330} o={ramp(t, snake + 0.4, 0.4) * (1 - lit)}><Glow color={GREEN} size={34}>a snake!</Glow></At>
      <At x={900} y={330} o={lit}><Glow color="#C9A06A" size={34}>a rope</Glow></At>
      <At x={1520} y={470} o={ramp(t, lamp - 0.2, 0.5)}><OilLamp on={ramp(t, lamp + 0.2, 0.6)} /></At>
      <Ring x={1520} y={420} p={ramp(t, lamp + 0.4, 1.4)} r0={30} r1={420} color={GOLD} />
      <Struck x={900} y={720} at={claim} strikeAt={floor + 0.4} color={WARM} size={32}>an object standing on its own, before naming</Struck>
      <At x={900} y={810} o={ramp(t, floor + 0.2, 0.5)}><Glow color={WARM} size={30}>as a floor</Glow></At>
    </AbsoluteFill>
  );
};

const KeyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const deep = c("deepest reason"), key = c("A key's power to open"), lhd = c("the lock, the hand and the door");
  const rel = c("Efficacy is itself a relation"), dep = c("the clearest mark of dependence");
  const go = ramp(t, lhd + 1.6, 1.2), open = ramp(t, lhd + 3.0, 1.2);
  const kx = 520 + 640 * go;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, deep, 0.5)}><Glow color={CHALK} size={42} serif>efficacy, the deepest reason?</Glow></At>
      <At x={kx} y={460} s={pop(t, fps, key)}><Key /></At>
      <At x={520} y={560} o={ramp(t, key + 0.5, 0.4) * (1 - go)}><Glow color={GOLD} size={30}>a power to open?</Glow></At>
      <At x={kx - 160} y={500} o={ramp(t, lhd + 0.6, 0.5)} r={-20}><Hand size={140} /></At>
      <At x={1420} y={450} s={pop(t, fps, lhd)}><Door open={open} /></At>
      <At x={1420} y={200} o={ramp(t, lhd + 0.3, 0.4)}><Chip color={ICE} size={26}>lock</Chip></At>
      <At x={1630} y={300} o={ramp(t, lhd + 0.9, 0.4)}><Chip color={VIOLET} size={26}>door</Chip></At>
      <At x={360} y={640} o={ramp(t, lhd + 0.6, 0.4)}><Chip color={ROSE} size={26}>hand</Chip></At>
      <At x={960} y={720} s={pop(t, fps, rel)}><Chip color={GOLD} size={36}>efficacy is a relation</Chip></At>
      <At x={960} y={810} o={ramp(t, dep, 0.5)}><Glow color={GOLD} size={32} serif>the clearest mark of dependence</Glow></At>
    </AbsoluteFill>
  );
};

const NoGroundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const no = c("So the building has no ground floor"), lower = c("Perception is not a lower layer"), coat = c("is not a top coat");
  const ming = c("mingled all the way through");
  const bo = 1 - ramp(t, lower + 0.2, 0.6);
  const braid = ramp(t, ming - 0.4, 1.4);
  const pts = (ph: number) => Array.from({ length: 41 }).map((_, i) => {
    const x = 260 + i * 35, y = 560 + Math.sin(i * 0.45 + t * 1.6 + ph) * 60;
    return `${i ? "L" : "M"}${x} ${y}`;
  }).join(" ");
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={bo} s={0.9}><Building sparksAt={no - 5} chipsAt={no - 5} groundGone={ramp(t, no + 0.8, 1.2)} /></At>
      {t < lower + 0.8 && <Crossed x={960} y={580} at={no + 0.5} size={110} />}
      <Struck x={600} y={200} at={lower} strikeAt={lower + 1.2} color={TEAL} size={34}>perception: a lower layer</Struck>
      <Struck x={1320} y={200} at={coat - 0.6} strikeAt={coat + 0.6} color={VIOLET} size={34}>concept: a top coat</Struck>
      <Svg style={{ opacity: braid }}>
        <path d={pts(0)} fill="none" stroke={GOLD} strokeWidth={8} strokeLinecap="round" strokeDasharray={1500} strokeDashoffset={1500 * (1 - braid)} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
        <path d={pts(Math.PI)} fill="none" stroke={VIOLET} strokeWidth={8} strokeLinecap="round" strokeDasharray={1500} strokeDashoffset={1500 * (1 - braid)} style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }} />
      </Svg>
      <At x={420} y={420} o={braid}><Glow color={GOLD} size={30}>vividness</Glow></At>
      <At x={1500} y={420} o={braid}><Glow color={VIOLET} size={30}>designation</Glow></At>
      <At x={960} y={760} o={ramp(t, ming + 0.4, 0.3)}><Reveal text="mingled all the way through" at={ming + 0.4} size={54} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["given", 0], ["locke", c("Locke gave it one shape", 0.6)], ["scheme", c("Buddhist thought built its own version", 0.6)],
    ["moves", c("scheme with three moves", 0.6)], ["narrow", c("The refusal is narrow", 0.6)], ["found", c("So the building has no ground floor", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Locke gave it one shape", 0.9)], <GivenScene />],
    [S("Locke gave it one shape", "Buddhist thought built its own version"), <LockeScene />],
    [S("Buddhist thought built its own version", "sharpened the scheme"), <SymmetryScene />],
    [S("sharpened the scheme", "So the building has two storeys"), <EfficacyScene />],
    [S("So the building has two storeys", "This is no crude view"), <BuildingScene />],
    [S("This is no crude view", "scheme with three moves"), <NoCrudeScene />],
    [S("scheme with three moves", "Characteristic and characterised are designated together"), <HardnessScene />],
    [S("Characteristic and characterised are designated together", "The second concerns what perception meets"), <TogetherScene />],
    [S("The second concerns what perception meets", "The third move comes from"), <CupScene />],
    [S("The third move comes from", "makes the conclusion explicit"), <LongShortScene />],
    [S("makes the conclusion explicit", "The refusal is narrow"), <RefusalScene />],
    [S("The refusal is narrow", "deepest reason"), <RopeScene />],
    [S("deepest reason", "So the building has no ground floor"), <KeyScene />],
    [S("So the building has no ground floor", null), <NoGroundScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
