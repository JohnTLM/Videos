// Chapter 11: Alignment with 4E Cognition. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Think of a good conversation", "A thought half-formed", "is finished by them", "You say things",
  "where is the thinking", "Not only in your head", "Without your friend", "Not only in theirs", "not in the air between", "a third thing",
  "An older picture of the mind", "inside an isolated brain", "It shuffles symbols", "mirrors a world outside",
  "A movement in cognitive science", "It is called", "the mind is embodied", "embedded", "enacted", "and extended",
  "Embodied means", "identified in dependence on the body", "the body is identified", "Neither is the base",
  "Embedded means", "not a backdrop", "designated together with the creature", "The burrow with the rabbit", "The kitchen with the cook",
  "Enacted means", "simply receive data", "What a creature does", "what it meets shapes",
  "Extended means", "past skull and skin", "into tools", "writing and language",
  "Here is a famous case", "Inga recalls", "is, and goes", "Otto has a failing memory", "the notebook he always carries", "carries, and goes",
  "If Inga's memory", "doing the same job", "is part of his",
  "But this can be read", "still a container", "only larger", "inside its walls", "does not move the wall", "It does not find a wall",
  "Otto, notebook, street and museum", "within a life", "the notebook is trusted", "Where the mind ends", "Outside it, there is no answer",
  "Nor is there a commander", "Watch a flock of starlings", "No bird is leading", "its nearest neighbours", "The coherence of a mind",
  "the interplay, too", "not a hidden engine",
  "Is agency then lost", "Choose to reach", "the glass of water", "rather than the coffee", "The choosing is yours", "and it works",
  "look for a chooser", "the reasons", "the thirst", "and the hand", "none is found", "The doer and the doing", "Neither is the ground",
  "So this view gives", "no new foundation", "removes the hidden foundations",
  "riding a bicycle", "knowledge of balance", "stored as instructions", "not in the bicycle", "nor in the road", "only in the riding",
  "weight, handlebar and speed", "the slope and the wind",
  "Yet the skill is entirely real", "learned, lost and regained", "safely through traffic", "found in none of these alone",
];

const M = {
  conv: { a: "rgba(150,60,90,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(60,50,130,0.3)" },
  old: { a: "rgba(50,60,95,0.5)", b: "rgba(45,55,85,0.4)", c: "rgba(80,80,100,0.3)" },
  fourE: { a: "rgba(30,120,130,0.5)", b: "rgba(100,60,170,0.45)", c: "rgba(150,110,50,0.3)" },
  otto: { a: "rgba(150,110,50,0.45)", b: "rgba(40,90,140,0.45)", c: "rgba(120,60,120,0.3)" },
  cont: { a: "rgba(90,60,160,0.5)", b: "rgba(30,110,130,0.4)", c: "rgba(150,110,50,0.3)" },
  birds: { a: "rgba(180,90,50,0.45)", b: "rgba(110,60,150,0.45)", c: "rgba(200,120,80,0.3)" },
  agency: { a: "rgba(30,120,150,0.5)", b: "rgba(120,80,50,0.4)", c: "rgba(60,60,140,0.3)" },
  found: { a: "rgba(90,60,160,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(30,110,130,0.35)" },
  bike: { a: "rgba(40,130,90,0.45)", b: "rgba(150,120,50,0.4)", c: "rgba(40,90,150,0.35)" },
};

// ---------------------------------------------------------------- small drawings
const HEAD_D = "M70 300 L70 232 C35 215 20 170 25 125 C32 55 85 15 140 20 C200 26 228 70 222 125 L240 168 L220 176 C223 200 218 220 196 222 L160 226 L160 300";
/** Profile head facing right (260 x 310). */
const Head: React.FC<{ color: string; flip?: boolean; glow?: number; dash?: boolean; s?: number }> = ({ color, flip, glow = 0, dash, s = 1 }) => (
  <svg width={260 * s} height={310 * s} viewBox="0 0 260 310" style={{ overflow: "visible", transform: flip ? "scaleX(-1)" : undefined,
    filter: `drop-shadow(0 0 ${10 + glow * 30}px ${color})` }}>
    <path d={HEAD_D} fill={`${color}${glow > 0.5 ? "44" : "22"}`} stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "14 10" : undefined} />
  </svg>
);

const Person: React.FC<{ color: string; size?: number }> = ({ color, size = 200 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 120 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={60} cy={34} r={24} fill={`${color}33`} stroke={color} strokeWidth={4} />
    <path d="M60 62 L60 130 M60 80 L28 112 M60 80 L92 112 M60 130 L36 190 M60 130 L84 190" stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
  </svg>
);

const Museum: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 200 160" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <path d="M10 50 L100 10 L190 50 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
    <rect x={18} y={50} width={164} height={10} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={3} />
    {[35, 75, 115, 155].map((x) => <rect key={x} x={x} y={64} width={12} height={72} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={3} />)}
    <rect x={10} y={136} width={180} height={14} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={3} />
  </svg>
);

const Notebook: React.FC<{ open: number; size?: number }> = ({ open, size = 170 }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 200 150" style={{ filter: `drop-shadow(0 0 10px ${TEAL})`, overflow: "visible" }}>
    <path d={`M100 20 L${100 - 90 * (0.3 + 0.7 * open)} ${20 + 10 * (1 - open)} L${100 - 90 * (0.3 + 0.7 * open)} 140 L100 135 Z`} fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} strokeLinejoin="round" />
    <path d="M100 20 L190 25 L190 140 L100 135 Z" fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} strokeLinejoin="round" />
    {[45, 65, 85, 105].map((y, i) => <line key={y} x1={115} y1={y} x2={115 + 60 * Math.min(1, Math.max(0, open * 4 - i))} y2={y + 1} stroke={CHALK} strokeWidth={3} strokeOpacity={0.7} />)}
  </svg>
);

const Rabbit: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${CHALK})` }}>
    <g fill="#ffffff18" stroke={CHALK} strokeWidth={4} strokeLinejoin="round">
      <ellipse cx={70} cy={105} rx={45} ry={32} />
      <circle cx={110} cy={70} r={22} />
      <ellipse cx={104} cy={30} rx={7} ry={24} transform="rotate(-12 104 30)" />
      <ellipse cx={120} cy={32} rx={7} ry={22} transform="rotate(14 120 32)" />
      <circle cx={26} cy={100} r={9} />
    </g>
    <circle cx={117} cy={68} r={3} fill={CHALK} />
  </svg>
);
const Burrow: React.FC = () => (
  <svg width={260} height={120} viewBox="0 0 260 120" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <path d="M5 115 C 40 20, 220 20, 255 115 Z" fill="#7a5a3555" stroke={GOLD} strokeWidth={4} />
    <ellipse cx={130} cy={98} rx={42} ry={22} fill="#0b0814" stroke={GOLD} strokeWidth={3} />
  </svg>
);
const Pot: React.FC = () => (
  <svg width={200} height={160} viewBox="0 0 200 160" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }}>
    <path d="M30 60 L170 60 L160 140 Q100 152 40 140 Z" fill={`${WARM}33`} stroke={WARM} strokeWidth={4} strokeLinejoin="round" />
    <path d="M10 64 L30 64 M170 64 L190 64" stroke={WARM} strokeWidth={6} strokeLinecap="round" />
    <rect x={25} y={50} width={150} height={12} rx={6} fill={`${WARM}55`} stroke={WARM} strokeWidth={3} />
  </svg>
);
const ChefHat: React.FC = () => (
  <svg width={120} height={110} viewBox="0 0 120 110" style={{ filter: `drop-shadow(0 0 10px ${CHALK})` }}>
    <path d="M30 70 C5 70 5 30 32 34 C34 8 70 2 78 26 C102 16 120 50 92 70 Z" fill="#ffffff22" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <rect x={30} y={70} width={62} height={30} fill="#ffffff22" stroke={CHALK} strokeWidth={4} />
  </svg>
);
const Hammer: React.FC = () => (
  <svg width={130} height={130} viewBox="0 0 130 130" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <rect x={56} y={40} width={16} height={84} rx={4} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={3} transform="rotate(-30 64 80)" />
    <path d="M20 30 L90 10 L100 34 L30 54 Z" fill={`${CHALK}33`} stroke={CHALK} strokeWidth={4} strokeLinejoin="round" transform="rotate(-30 64 80)" />
  </svg>
);
const Page: React.FC = () => (
  <svg width={120} height={150} viewBox="0 0 120 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <path d="M10 10 L85 10 L110 35 L110 140 L10 140 Z" fill={`${ICE}18`} stroke={ICE} strokeWidth={4} strokeLinejoin="round" />
    {[45, 65, 85, 105].map((y) => <path key={y} d={`M25 ${y} q 10 -8 20 0 t 20 0 t 20 0`} fill="none" stroke={ICE} strokeWidth={3} />)}
  </svg>
);
const Bubble: React.FC<{ color: string; w?: number; h?: number; children?: React.ReactNode }> = ({ color, w = 170, h = 110, children }) => (
  <div style={{ position: "relative", width: w, height: h, borderRadius: h / 2, border: `3px solid ${color}`, background: `${color}22`,
    boxShadow: `0 0 24px ${color}66`, display: "flex", alignItems: "center", justifyContent: "center" }}>
    {children}
    <div style={{ position: "absolute", left: 22, bottom: -26, width: 22, height: 22, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}22` }} />
    <div style={{ position: "absolute", left: 6, bottom: -46, width: 12, height: 12, borderRadius: "50%", border: `3px solid ${color}` }} />
  </div>
);
const Tree: React.FC<{ s?: number }> = ({ s = 1 }) => (
  <svg width={140 * s} height={180 * s} viewBox="0 0 140 180" style={{ filter: `drop-shadow(0 0 8px ${GREEN})` }}>
    <rect x={62} y={110} width={16} height={65} fill="#7a5a35" stroke={GOLD} strokeWidth={2} />
    {[[70, 70, 50], [40, 95, 32], [100, 95, 32]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} />)}
  </svg>
);
const Gear: React.FC<{ size: number; rot: number; color: string }> = ({ size, rot, color }) => (
  <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <g transform={`rotate(${rot})`} fill={`${color}33`} stroke={color} strokeWidth={4}>
      {Array.from({ length: 10 }).map((_, i) => <rect key={i} x={-7} y={-56} width={14} height={18} transform={`rotate(${i * 36})`} />)}
      <circle r={40} /><circle r={14} fill="#0b0c1a" />
    </g>
  </svg>
);
const Glass: React.FC<{ lift: number }> = ({ lift }) => {
  const { t } = useT();
  const w = 6 * Math.sin(t * 3) * lift;
  return (
    <svg width={140} height={200} viewBox="0 0 140 200" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
      <path d={`M24 70 Q70 ${70 + w} 116 70 L108 186 L32 186 Z`} fill={`${ICE}55`} />
      <path d="M18 14 L122 14 L108 188 L32 188 Z" fill="#ffffff10" stroke={ICE} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
};
const Cup: React.FC = () => (
  <svg width={180} height={170} viewBox="0 0 180 170" style={{ filter: `drop-shadow(0 0 10px ${WARM})` }}>
    <path d="M20 50 L130 50 L120 150 Q75 162 30 150 Z" fill="#5a3a2244" stroke={WARM} strokeWidth={4} strokeLinejoin="round" />
    <path d="M128 70 C175 70 175 125 122 125" fill="none" stroke={WARM} strokeWidth={5} />
    <ellipse cx={75} cy={52} rx={52} ry={8} fill="#6b4226" />
  </svg>
);
const Crowned: React.FC = () => (
  <svg width={110} height={150} viewBox="0 0 110 150" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <path d="M30 30 L38 10 L48 26 L55 6 L62 26 L72 10 L80 30 Z" fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} strokeLinejoin="round" />
    <circle cx={55} cy={48} r={16} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={3} />
    <path d="M55 64 L55 110 M55 78 L30 96 M55 78 L80 96 M55 110 L38 145 M55 110 L72 145" stroke={GOLD} strokeWidth={4} strokeLinecap="round" fill="none" />
  </svg>
);
const Bicycle: React.FC<{ spin: number }> = ({ spin }) => {
  const wheel = (cx: number) => (
    <g transform={`translate(${cx} 200)`}>
      <circle r={80} fill="none" stroke={GREEN} strokeWidth={6} />
      <g transform={`rotate(${spin})`}>{[0, 30, 60, 90, 120, 150].map((a) => <line key={a} x1={0} y1={-78} x2={0} y2={78} transform={`rotate(${a})`} stroke={GREEN} strokeOpacity={0.55} strokeWidth={2} />)}</g>
      <circle r={8} fill={GREEN} />
    </g>
  );
  return (
    <svg width={560} height={380} viewBox="0 -80 560 380" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GREEN})` }}>
      {wheel(110)}{wheel(430)}
      <path d="M110 200 L220 90 L380 90 L430 200 M220 90 L270 200 L110 200 M270 200 L380 90 M220 90 L220 66 M198 64 L244 64 M380 90 L372 48 L402 42"
        stroke={CHALK} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={322} cy={-46} r={24} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4} />
      <path d="M225 60 L305 -20 M305 -20 L398 44 M225 60 L295 135 L272 200" stroke={ROSE} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
const MiniCar: React.FC<{ color: string }> = ({ color }) => (
  <svg width={150} height={70} viewBox="0 0 220 100" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M10 70 L20 45 Q30 40 50 40 L70 18 Q80 12 100 12 L140 12 Q155 12 165 25 L180 42 Q205 45 210 60 L210 72 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <circle cx={55} cy={74} r={15} fill="#111" stroke={color} strokeWidth={4} /><circle cx={165} cy={74} r={15} fill="#111" stroke={color} strokeWidth={4} />
  </svg>
);
const Slab: React.FC<{ w: number; label: string; color?: string }> = ({ w, label, color = WARM }) => (
  <div style={{ position: "relative" }}>
    <div style={{ width: w, height: 30, borderRadius: 6, background: `linear-gradient(90deg, ${color}55, ${color})`, boxShadow: `0 0 26px ${color}` }} />
    <div style={{ position: "absolute", left: w + 24, top: -8 }}><Glow color={color} size={36}>{label}</Glow></div>
  </div>
);
const Crossed: React.FC<{ at: number; children: React.ReactNode }> = ({ at, children }) => (
  <div style={{ position: "relative" }}>{children}<Strike at={at} /></div>
);

// ---------------------------------------------------------------- 1-2. the conversation
const ConvScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Think of a good conversation");
  const half = ramp(t, c("A thought half-formed"), 1.6), fin = ramp(t, c("is finished by them"), 1.6);
  const say = c("You say things"), where = c("where is the thinking");
  const notYou = c("Not only in your head"), without = c("Without your friend"), notThem = c("Not only in theirs");
  const air = c("not in the air between"), third = c("a third thing");
  const friendDim = between(t, without, notThem - 0.2, 0.5);
  const youDim = between(t, notThem + 0.4, air - 0.2, 0.5);
  const flowO = ramp(t, say, 0.8) * (1 - 0.8 * Math.max(friendDim, youDim));
  return (
    <AbsoluteFill>
      <At x={500} y={470} s={pop(t, fps, t0, 13)} o={1 - 0.75 * youDim}><Head color={ROSE} glow={between(t, notYou, notYou + 1.6, 0.4)} /></At>
      <At x={1420} y={470} s={pop(t, fps, t0 + 0.3, 13)} o={1 - 0.75 * friendDim}><Head color={TEAL} flip glow={between(t, notThem, notThem + 1.6, 0.4)} /></At>
      <At x={500} y={700} o={ramp(t, t0 + 0.6, 0.6)}><Glow color={ROSE} size={34}>you</Glow></At>
      <At x={1420} y={700} o={ramp(t, t0 + 0.9, 0.6)}><Glow color={TEAL} size={34}>your friend</Glow></At>
      <Svg style={{ opacity: 1 - 0.6 * Math.max(friendDim, youDim) }}>
        <DrawPath d="M640 330 C 720 170, 870 170, 960 290" p={half} color={ROSE} width={6} len={420} />
        <DrawPath d="M1280 330 C 1200 170, 1050 170, 960 290" p={fin} color={TEAL} width={6} len={420} />
      </Svg>
      <At x={960} y={290} s={pop(t, fps, c("is finished by them") + 1.4, 9)}><Orb size={70} color={GOLD} /></At>
      {Array.from({ length: 12 }).map((_, i) => {
        const dir = i % 2 ? 1 : -1;
        const u = ((t - say) * 0.35 + rand(i)) % 1;
        const x = dir > 0 ? 650 + u * 620 : 1270 - u * 620;
        const y = 470 + Math.sin(u * Math.PI * 2 + i) * 40;
        return t > say ? <div key={i} style={{ position: "absolute", left: x, top: y, width: 12, height: 12, borderRadius: "50%",
          background: dir > 0 ? ROSE : TEAL, boxShadow: `0 0 12px ${dir > 0 ? ROSE : TEAL}`, opacity: flowO * Math.sin(u * Math.PI) }} /> : null;
      })}
      <At x={960} y={150} s={pop(t, fps, where)} o={1 - ramp(t, air, 0.5)}><Glow color={GOLD} size={110} serif>?</Glow></At>
      <At x={500} y={790} o={ramp(t, notYou, 0.5)}><Crossed at={notYou + 0.9}><Glow color={CHALK} size={32}>only here?</Glow></Crossed></At>
      <At x={1420} y={790} o={ramp(t, notThem, 0.5)}><Crossed at={notThem + 0.9}><Glow color={CHALK} size={32}>only here?</Glow></Crossed></At>
      <At x={960} y={560} s={pop(t, fps, air, 14)} o={(1 - ramp(t, third + 1.4, 0.8)) * 0.8} blur={ramp(t, third + 1.4, 0.8) * 12}>
        <Orb size={140} color={VIOLET} />
      </At>
      <At x={960} y={690} o={ramp(t, third, 0.5) * (1 - ramp(t, third + 1.4, 0.8))}>
        <Crossed at={third + 0.8}><Glow color={VIOLET} size={36}>a third thing?</Glow></Crossed>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the older picture
const OldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("An older picture of the mind");
  const box = ramp(t, c("inside an isolated brain"), 0.8);
  const sym = c("It shuffles symbols");
  const mir = c("mirrors a world outside");
  const glyphs = ["0", "1", "◇", "△", "1", "0", "□", "○", "0"];
  return (
    <AbsoluteFill>
      <At x={760} y={460} s={1.6 * pop(t, fps, t0, 14)}><Head color={DIM} /></At>
      <At x={790} y={410} s={box} o={box}>
        <div style={{ width: 230, height: 190, border: `6px solid ${CHALK}`, borderRadius: 10, background: "rgba(20,24,40,0.85)",
          boxShadow: `0 0 30px ${ICE}55, inset 0 0 20px #000`, position: "relative", overflow: "hidden" }}>
          {glyphs.map((g, i) => {
            const k = Math.floor((t - sym) * 3 + i * 1.7);
            const on = t > sym;
            return <div key={i} style={{ position: "absolute", left: 18 + (i % 3) * 68, top: 14 + Math.floor(i / 3) * 56, width: 50, textAlign: "center",
              fontFamily: "monospace", fontSize: 40, color: i % 2 ? ICE : GOLD, opacity: on ? 0.9 : 0,
              textShadow: `0 0 10px ${ICE}` }}>{on ? glyphs[(i + k) % glyphs.length] : ""}</div>;
          })}
          <div style={{ position: "absolute", right: 14, bottom: 10, opacity: ramp(t, mir + 0.8, 0.6), transform: "scale(0.45)", transformOrigin: "100% 100%" }}><Tree /></div>
        </div>
      </At>
      <At x={790} y={160} o={ramp(t, c("inside an isolated brain") + 0.4, 0.5)}><Chip color={DIM} size={30}>sealed inside</Chip></At>
      <At x={1500} y={430} s={pop(t, fps, mir)}><Tree s={1.4} /></At>
      <At x={1660} y={250} s={pop(t, fps, mir + 0.2)}><Sun size={110} rot={t * 20} /></At>
      <Flow x1={1400} y1={450} x2={930} y2={430} color={ICE} p={ramp(t, mir + 0.4, 0.8)} dash />
      <At x={1180} y={690} o={ramp(t, mir + 0.6, 0.6)}><Glow color={ICE} size={36}>a copy of the world</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4-8. the four Es
const E_COLS = [ROSE, GOLD, TEAL, VIOLET];
const E_NAMES = ["embodied", "embedded", "enacted", "extended"];

const ERow: React.FC<{ active: number }> = ({ active }) => (
  <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center", gap: 36 }}>
    {E_NAMES.map((n, i) => (
      <div key={i} style={{ opacity: i === active ? 1 : 0.35, transform: `scale(${i === active ? 1.12 : 0.9})` }}>
        <Chip color={E_COLS[i]} size={34}>{n}</Chip>
      </div>
    ))}
  </div>
);

const Cloud: React.FC = () => (
  <svg width={150} height={110} viewBox="0 0 150 110" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <path d="M35 80 C10 80 10 45 38 48 C40 20 85 12 95 38 C120 28 140 55 120 80 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={4} strokeLinejoin="round" />
    {[50, 75, 100].map((x) => <line key={x} x1={x} y1={88} x2={x - 6} y2={104} stroke={ICE} strokeWidth={3} strokeLinecap="round" />)}
  </svg>
);
const Bulb: React.FC = () => (
  <svg width={110} height={140} viewBox="0 0 110 140" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
    <path d="M55 10 C20 10 10 45 25 65 C35 78 38 85 38 98 L72 98 C72 85 75 78 85 65 C100 45 90 10 55 10 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
    <path d="M40 108 L70 108 M44 120 L66 120" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

const EmbodiedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Embodied means");
  const a1 = ramp(t, c("identified in dependence on the body"), 0.9), a2 = ramp(t, c("the body is identified"), 0.9);
  const base = c("Neither is the base");
  const g = ramp(t, base, 0.5), fall = ramp(t, base + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={480} s={pop(t, fps, t0 + 0.2)}><Person color={ROSE} size={300} /></At>
      <At x={480} y={340} s={pop(t, fps, t0 + 0.6)}><Cloud /><Glow color={ICE} size={32}>moods</Glow></At>
      <At x={1440} y={340} s={pop(t, fps, t0 + 0.9)}><Bulb /><Glow color={GOLD} size={32}>concepts</Glow></At>
      <Flow x1={880} y1={430} x2={590} y2={360} color={ROSE} p={a1} />
      <Flow x1={1040} y1={430} x2={1340} y2={360} color={ROSE} p={a1} />
      <Flow x1={590} y1={420} x2={880} y2={490} color={GOLD} p={a2} />
      <Flow x1={1340} y1={420} x2={1040} y2={490} color={GOLD} p={a2} />
      <At x={960 - fall * 40} y={700 + fall * 140} o={g * (1 - fall)} r={-fall * 6}><Slab w={760} label="the base?" /></At>
    </AbsoluteFill>
  );
};

const EmbeddedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bd = c("not a backdrop");
  const bdOut = ramp(t, bd + 1.6, 0.7);
  const rab = c("The burrow with the rabbit"), cook = c("The kitchen with the cook");
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, bd - 0.2, 0.5) * (1 - bdOut)} s={1 - 0.1 * bdOut}>
        <div style={{ position: "relative", width: 900, height: 460, border: `4px solid ${DIM}`, borderRadius: 8,
          background: "linear-gradient(180deg, #2b3a6a66, #3a5a4a66)" }}>
          <svg width={900} height={460} style={{ position: "absolute", left: 0, top: 0 }}>
            <path d="M0 360 L200 200 L340 300 L520 150 L700 290 L900 210 L900 460 L0 460 Z" fill="#5a7a6a55" stroke={DIM} strokeWidth={3} />
          </svg>
          <div style={{ position: "absolute", top: -60, left: 0 }}><Glow color={DIM} size={34}>a backdrop?</Glow></div>
          <Strike at={bd + 0.9} />
        </div>
      </At>
      <At x={640} y={470} s={pop(t, fps, rab)}><div style={{ position: "relative", width: 300, height: 250 }}>
        <div style={{ position: "absolute", left: 20, top: 130 }}><Burrow /></div>
        <div style={{ position: "absolute", left: 80, top: 20 }}><Rabbit /></div>
      </div></At>
      <Ring x={640} y={470} p={ramp(t, rab + 0.4, 1.4)} r0={150} r1={260} color={GOLD} />
      <At x={640} y={470} o={ramp(t, rab + 0.6, 0.6)}><div style={{ width: 340, height: 340, borderRadius: "50%", border: `3px dashed ${GOLD}`, boxShadow: `0 0 20px ${GOLD}55` }} /></At>
      <At x={640} y={720} o={ramp(t, rab + 0.6, 0.6)}><Glow color={GOLD} size={34}>designated together</Glow></At>
      <At x={1280} y={470} s={pop(t, fps, cook)}><div style={{ position: "relative", width: 300, height: 250 }}>
        <div style={{ position: "absolute", left: 50, top: 110 }}><Pot /></div>
        <div style={{ position: "absolute", left: 92, top: 0 }}><ChefHat /></div>
      </div></At>
      <Mist x={1290} y={560} start={cook + 0.4} color={CHALK} spread={100} n={10} seed={3} />
      <At x={1280} y={470} o={ramp(t, cook + 0.6, 0.6)}><div style={{ width: 340, height: 340, borderRadius: "50%", border: `3px dashed ${GOLD}`, boxShadow: `0 0 20px ${GOLD}55` }} /></At>
      <Ring x={1280} y={470} p={ramp(t, cook + 0.4, 1.4)} r0={150} r1={260} color={GOLD} />
    </AbsoluteFill>
  );
};

const EnactedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const data = c("simply receive data"), does = c("What a creature does"), meets = c("what it meets shapes");
  const loopIn = ramp(t, does - 0.3, 0.5);
  const top = ramp(t, does + 0.6, 1.0), bot = ramp(t, meets + 0.3, 1.0);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - loopIn }}>
        <At x={760} y={470} s={pop(t, fps, data - 0.6)}><Head color={TEAL} s={1.1} /></At>
        {Array.from({ length: 5 }).map((_, i) => {
          const u = ((t - data) * 0.5 + i / 5) % 1;
          return <div key={i} style={{ position: "absolute", left: 1500 - u * 560, top: 380 + i * 40, width: 40, height: 26, borderRadius: 5,
            background: `${ICE}55`, border: `2px solid ${ICE}`, opacity: t > data ? Math.sin(u * Math.PI) : 0 }} />;
        })}
        <At x={1260} y={260} o={ramp(t, data, 0.5)}><Crossed at={data + 1.0}><Glow color={ICE} size={38}>just receiving data</Glow></Crossed></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: loopIn }}>
        <Svg>
          <DrawPath d="M720 420 C 820 220, 1100 220, 1200 420" p={top} color={TEAL} width={6} len={700} />
          <DrawPath d="M1200 520 C 1100 720, 820 720, 720 520" p={bot} color={GOLD} width={6} len={700} />
          <polygon points="1200,420 1170,392 1214,388" fill={TEAL} opacity={ramp(t, does + 1.4, 0.3)} />
          <polygon points="720,520 750,548 706,552" fill={GOLD} opacity={ramp(t, meets + 1.1, 0.3)} />
          {[0, 1, 2].map((k) => {
            const u = ((t - does) * 0.35 + k / 3) % 1, a = u * Math.PI * 2;
            return <circle key={k} cx={960 - 250 * Math.cos(a)} cy={470 - 190 * Math.sin(a)} r={9} fill={CHALK} opacity={Math.min(top, bot) * 0.9}
              style={{ filter: `drop-shadow(0 0 8px ${CHALK})` }} />;
          })}
        </Svg>
        <At x={650} y={470} s={pop(t, fps, does)}><Orb size={110} color={TEAL} /></At>
        <At x={650} y={590} o={ramp(t, does + 0.2, 0.5)}><Glow color={TEAL} size={36}>what it does</Glow></At>
        <At x={1270} y={470} s={pop(t, fps, does + 0.5)}><Orb size={110} color={GOLD} /></At>
        <At x={1270} y={590} o={ramp(t, does + 0.6, 0.5)}><Glow color={GOLD} size={36}>what it meets</Glow></At>
        <At x={960} y={200} o={top}><Glow color={TEAL} size={32}>shapes</Glow></At>
        <At x={960} y={740} o={bot}><Glow color={GOLD} size={32}>shapes</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ExtendedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Extended means"), past = c("past skull and skin");
  const grow = ramp(t, past, 2.0);
  const tools = c("into tools"), lang = c("writing and language");
  return (
    <AbsoluteFill>
      <At x={620} y={470} s={pop(t, fps, t0)}><Head color={VIOLET} s={1.1} /></At>
      {[0, 1, 2].map((k) => (
        <At key={k} x={640} y={450} o={(1 - grow * 0.6) * ramp(t, t0 + 0.4, 0.5) * (k === 0 ? 1 : grow)}>
          <div style={{ width: 360 + grow * (250 + k * 230), height: 360 + grow * (150 + k * 130), borderRadius: "50%",
            border: `3px dashed ${VIOLET}`, boxShadow: `0 0 20px ${VIOLET}55` }} />
        </At>
      ))}
      <Mist x={640} y={470} start={past} color={VIOLET} spread={300} n={16} seed={8} />
      <At x={1180} y={260} s={pop(t, fps, tools)}><Hammer /><Glow color={GOLD} size={30}>tools</Glow></At>
      <At x={1460} y={470} s={pop(t, fps, lang)}><Page /><Glow color={ICE} size={30}>writing</Glow></At>
      <At x={1180} y={690} s={pop(t, fps, lang + 0.5)}><Bubble color={ROSE}><Glow color={CHALK} size={30}>words</Glow></Bubble>
        <Glow color={ROSE} size={30} style={{ marginTop: 50 }}>language</Glow></At>
      <Flow x1={800} y1={400} x2={1100} y2={290} color={GOLD} p={ramp(t, tools + 0.2, 0.7)} />
      <Flow x1={820} y1={470} x2={1370} y2={470} color={ICE} p={ramp(t, lang + 0.2, 0.7)} />
      <Flow x1={800} y1={540} x2={1080} y2={660} color={ROSE} p={ramp(t, lang + 0.7, 0.7)} />
    </AbsoluteFill>
  );
};

const FourEScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A movement in cognitive science");
  const e1 = c("Embodied means"), e2 = c("Embedded means"), e3 = c("Enacted means"), e4 = c("Extended means");
  const active = t < e2 - 0.3 ? 0 : t < e3 - 0.3 ? 1 : t < e4 - 0.3 ? 2 : 3;
  const words = ["the mind is embodied", "embedded", "enacted", "and extended"];
  return (
    <AbsoluteFill>
      <Scene from={t0} to={e1 - 0.7}>
        <Svg>
          {Array.from({ length: 4 }).map((_, i) => {
            const x = 420 + i * 360;
            return <DrawPath key={i} d={`M960 330 L${x} 560`} p={ramp(t, c(words[i], 0.1), 0.6)} color={E_COLS[i]} width={3} len={700} />;
          })}
        </Svg>
        <div style={{ position: "absolute", top: 210, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="4E cognition" at={c("It is called")} size={110} />
        </div>
        <At x={960} y={110} o={ramp(t, t0, 0.6)}><Glow color={DIM} size={34}>cognitive science</Glow></At>
        <At x={960} y={500} s={pop(t, fps, t0 + 0.2)} o={1 - ramp(t, c("It is called"), 0.5)}>
          <div style={{ position: "relative", width: 260, height: 200, border: `6px solid ${CHALK}`, borderRadius: 10, background: "rgba(20,24,40,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 30px ${ICE}55` }}>
            <Glow color={ICE} size={40}>0 1 ◇ △</Glow>
          </div>
          <Glow color={DIM} size={32} style={{ marginTop: 14 }}>the sealed-brain picture</Glow>
        </At>
        <Svg style={{ opacity: 1 - ramp(t, c("It is called"), 0.5) }}>
          <DrawPath d="M800 380 L1120 640" p={ramp(t, t0 + 1.6, 0.5)} color={WARM} width={8} len={420} />
          <DrawPath d="M1120 380 L800 640" p={ramp(t, t0 + 1.9, 0.5)} color={WARM} width={8} len={420} />
        </Svg>
        {E_NAMES.map((n, i) => (
          <At key={i} x={420 + i * 360} y={620} s={pop(t, fps, c(words[i], 0.1))}>
            <Orb size={70} color={E_COLS[i]} /><Glow color={E_COLS[i]} size={44} style={{ marginTop: 12 }}>{n}</Glow>
          </At>
        ))}
      </Scene>
      <Scene from={e1 - 0.4} to={1e9}>
        <ERow active={active} />
        <Scene from={e1 - 0.3} to={e2 - 0.8}><EmbodiedScene /></Scene>
        <Scene from={e2 - 0.3} to={e3 - 0.8}><EmbeddedScene /></Scene>
        <Scene from={e3 - 0.3} to={e4 - 0.8}><EnactedScene /></Scene>
        <Scene from={e4 - 0.3} to={1e9}><ExtendedScene /></Scene>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. Otto's notebook
const OttoScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Here is a famous case");
  const inga = c("Inga recalls"), g1 = c("is, and goes");
  const otto = c("Otto has a failing memory"), nb = c("the notebook he always carries"), g2 = c("carries, and goes");
  const same = c("doing the same job"), his = c("is part of his");
  const walk1 = ramp(t, g1 + 0.3, 1.6), walk2 = ramp(t, g2 + 0.5, 1.6);
  return (
    <AbsoluteFill>
      <At x={1540} y={470} s={pop(t, fps, t0 + 0.2)}><Museum size={260} /><Glow color={GOLD} size={32}>museum</Glow></At>
      <At x={340} y={280} s={pop(t, fps, inga)}><Person color={ROSE} size={190} /></At>
      <At x={340} y={395} o={ramp(t, inga + 0.2, 0.5)}><Glow color={ROSE} size={30}>Inga</Glow></At>
      <At x={560} y={180} s={pop(t, fps, inga + 0.4)}><Bubble color={ROSE} w={190} h={120}><Museum size={110} /></Bubble></At>
      <Flow x1={430} y1={290} x2={430 + (1340 - 430) * walk1} y2={290 + (420 - 290) * walk1} color={ROSE} p={walk1 > 0 ? 1 : 0} dash />
      <At x={430 + (1350 - 430) * walk1} y={290 + (420 - 290) * walk1} o={between(t, g1 + 0.3, g1 + 2.6, 0.3)}><Orb size={30} color={ROSE} /></At>
      <At x={340} y={660} s={pop(t, fps, otto)}><Person color={TEAL} size={190} /></At>
      <At x={340} y={775} o={ramp(t, otto + 0.2, 0.5)}><Glow color={TEAL} size={30}>Otto</Glow></At>
      <At x={580} y={650} s={pop(t, fps, nb)}><Notebook open={ramp(t, nb + 0.4, 1.2)} /></At>
      <At x={620} y={650} o={ramp(t, nb + 1.2, 0.5)} s={0.5}><Museum size={110} /></At>
      <Flow x1={430} y1={660} x2={430 + (1340 - 430) * walk2} y2={660 + (520 - 660) * walk2} color={TEAL} p={walk2 > 0 ? 1 : 0} dash />
      <At x={430 + (1350 - 430) * walk2} y={660 + (520 - 660) * walk2} o={between(t, g2 + 0.5, g2 + 2.8, 0.3)}><Orb size={30} color={TEAL} /></At>
      <At x={580} y={420} s={pop(t, fps, same)}><Glow color={GOLD} size={110} serif>=</Glow></At>
      <At x={830} y={420} o={ramp(t, same + 0.3, 0.5)}><Glow color={GOLD} size={34}>same job</Glow></At>
      <At x={450} y={650} o={ramp(t, his, 0.8)}>
        <div style={{ width: 460, height: 300, borderRadius: "50%", border: `3px dashed ${GOLD}`, boxShadow: `0 0 26px ${GOLD}66` }} />
      </At>
      <At x={450} y={830} o={ramp(t, his + 0.4, 0.6)}><Glow color={GOLD} size={30}>part of his mind</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. no wall
const Sign: React.FC = () => (
  <svg width={130} height={150} viewBox="0 0 130 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <rect x={60} y={40} width={10} height={105} fill={`${ICE}55`} stroke={ICE} strokeWidth={2} />
    <path d="M10 20 L105 20 L122 40 L105 60 L10 60 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

const WallScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("But this can be read");
  const cont = c("still a container"), larger = c("only larger"), walls = c("inside its walls");
  const move = c("does not move the wall"), find = c("It does not find a wall");
  const net = c("Otto, notebook, street and museum"), life = c("within a life"), trusted = c("the notebook is trusted");
  const ends = c("Where the mind ends"), outside = c("Outside it, there is no answer");
  const big = ramp(t, larger, 1.0);
  const pushOut = ramp(t, move, 1.2);
  const shatter = ramp(t, find, 1.4);
  const spread = ramp(t, net - 0.2, 1.2);
  const P = { otto: [760, 470], nb: [1000, 470] };
  const N = { otto: [560, 330], nb: [1360, 330], street: [560, 640], museum: [1360, 640] };
  const lerp = (a: number[], b: number[], k: number) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
  const o = lerp(P.otto, N.otto, spread), n = lerp(P.nb, N.nb, spread);
  const r = 190 + big * 170 + pushOut * 120;
  const wallO = ramp(t, cont, 0.6) * (1 - shatter);
  const links: [number[], number[]][] = [[N.otto, N.nb], [N.nb, N.museum], [N.museum, N.street], [N.street, N.otto]];
  const fw = ramp(t, life, 1.2);
  return (
    <AbsoluteFill>
      <At x={o[0]} y={o[1]} s={pop(t, fps, t0)}><Person color={TEAL} size={190} /></At>
      <At x={n[0]} y={n[1]} s={pop(t, fps, t0 + 0.3) * (1 + 0.25 * between(t, trusted, trusted + 1.5, 0.4))}><Notebook open={1} size={150} /></At>
      <At x={o[0]} y={o[1] + 120} o={ramp(t, net - 0.1, 0.5)}><Glow color={TEAL} size={30}>Otto</Glow></At>
      <At x={n[0]} y={n[1] + 90} o={ramp(t, net + 0.3, 0.5)}><Glow color={TEAL} size={30}>notebook</Glow></At>
      <At x={(P.otto[0] + P.nb[0]) / 2 + (1 - big) * -120} y={470} o={wallO}>
        <div style={{ width: r * 2, height: r * 1.5, borderRadius: "50%", border: `8px solid ${VIOLET}`, boxShadow: `0 0 40px ${VIOLET}, inset 0 0 40px ${VIOLET}66` }} />
      </At>
      <At x={880} y={150} o={ramp(t, cont, 0.5) * (1 - shatter)}><Glow color={VIOLET} size={44}>a bigger container?</Glow></At>
      <At x={880} y={800} o={between(t, walls, move, 0.5)}><Glow color={CHALK} size={34}>notebook inside the walls</Glow></At>
      {Array.from({ length: 40 }).map((_, i) => {
        const a = (i / 40) * Math.PI * 2, rr = r * (1 + shatter * (0.2 + rand(i) * 0.6));
        return shatter > 0 && shatter < 1 ? <div key={i} style={{ position: "absolute", left: 880 + rr * Math.cos(a), top: 470 + rr * 0.75 * Math.sin(a),
          width: 10, height: 10, borderRadius: "50%", background: VIOLET, opacity: 1 - shatter, boxShadow: `0 0 10px ${VIOLET}` }} /> : null;
      })}
      <At x={960} y={470} o={between(t, find + 0.3, net - 0.3, 0.4)}><Glow color={WARM} size={60} serif>no wall found</Glow></At>
      {links.map(([a, b], i) => (
        <Flow key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} color={GOLD} p={ramp(t, net + 1.2 + i * 0.15, 0.6)} dash width={2} pulses={false} />
      ))}
      <At x={N.street[0]} y={N.street[1]} s={pop(t, fps, net + 0.6)}><Sign /><Glow color={ICE} size={30}>street</Glow></At>
      <At x={N.museum[0]} y={N.museum[1]} s={pop(t, fps, net + 0.9)}><Museum size={170} /><Glow color={GOLD} size={30}>museum</Glow></At>
      <Svg>
        <rect x={380} y={150} width={1160} height={640} rx={30} fill="none" stroke={ICE} strokeWidth={3} strokeDasharray="14 12"
          style={{ clipPath: `inset(0 ${(1 - fw) * 100}% 0 0)`, filter: `drop-shadow(0 0 8px ${ICE})` }} />
      </Svg>
      <At x={520} y={150} o={fw}><Chip color={ICE} size={30}>a life</Chip></At>
      <At x={960} y={480} o={ramp(t, ends, 0.6)}><Glow color={CHALK} size={40}>where the mind ends:</Glow></At>
      <At x={960} y={530} o={ramp(t, ends + 0.8, 0.6)}><Glow color={GOLD} size={40}>answered here, for its purposes</Glow></At>
      <At x={1700} y={830} o={ramp(t, outside, 0.6) * (1 - ramp(t, outside + 1.6, 1.2))} blur={ramp(t, outside + 1.6, 1.2) * 12}>
        <Glow color={DIM} size={90} serif>?</Glow>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. starlings: no commander
const FlockScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cmd = c("Nor is there a commander"), t0 = c("Watch a flock of starlings");
  const lead = c("No bird is leading"), nn = c("its nearest neighbours"), coh = c("The coherence of a mind");
  const inter = c("the interplay, too"), eng = c("not a hidden engine");
  const birdsIn = ramp(t, t0, 1.2);
  const cx = 960 + 300 * Math.sin(t * 0.23), cy = 420 + 60 * Math.sin(t * 0.31 + 1);
  const vx = 69 * Math.cos(t * 0.23), vy = 18.6 * Math.cos(t * 0.31 + 1);
  const dirA = Math.atan2(vy, vx) * 180 / Math.PI;
  const rot = 0.25 * Math.sin(t * 0.3), stretch = 1 + 0.35 * Math.sin(t * 0.4);
  const N = 130;
  const pts = Array.from({ length: N }, (_, i) => {
    const u = rand(i) * Math.PI * 2, v = Math.sqrt(rand(i + 50));
    const uu = u + 0.35 * Math.sin(t * 0.6 + v * 3);
    const lx = 300 * v * Math.cos(uu) * stretch, ly = 130 * v * Math.sin(uu) / stretch;
    return [cx + lx * Math.cos(rot) - ly * Math.sin(rot), cy + lx * Math.sin(rot) + ly * Math.cos(rot)];
  });
  const hl = 7;
  const near = pts.map((p, i) => [i, Math.hypot(p[0] - pts[hl][0], p[1] - pts[hl][1])] as [number, number])
    .filter(([i]) => i !== hl).sort((a, b) => a[1] - b[1]).slice(0, 4).map(([i]) => i);
  const nnO = between(t, nn, coh - 0.2, 0.5);
  const seek = Math.floor(Math.max(0, t - lead) * 2.2) % 5;
  const seekBird = pts[[3, 41, 88, 17, 120][seek]];
  const seekO = between(t, lead, lead + 2.6, 0.3);
  const cohO = ramp(t, coh, 0.8);
  const gearIn = ramp(t, eng, 0.5), gearOut = ramp(t, eng + 1.6, 1.0);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, t0 - 0.4, 0.6) }}>
        <At x={960} y={440} s={1.5 * pop(t, fps, cmd - 0.2)}><Head color={DIM} dash /></At>
        <At x={990} y={400} s={pop(t, fps, cmd + 0.4)}><Crowned /></At>
        <Svg>
          <DrawPath d="M900 320 L1080 500" p={ramp(t, cmd + 1.2, 0.4)} color={WARM} width={8} len={300} />
          <DrawPath d="M1080 320 L900 500" p={ramp(t, cmd + 1.4, 0.4)} color={WARM} width={8} len={300} />
        </Svg>
      </AbsoluteFill>
      <At x={cx} y={cy} o={cohO * birdsIn}>
        <div style={{ width: 760 * stretch, height: 360 / stretch, borderRadius: "50%", transform: `rotate(${rot * 57.3}deg)`,
          background: `radial-gradient(closest-side, ${GOLD}33, transparent)`, boxShadow: `0 0 60px ${GOLD}22` }} />
      </At>
      <Svg style={{ opacity: birdsIn }}>
        {near.map((j, k) => (
          <line key={k} x1={pts[hl][0]} y1={pts[hl][1]} x2={pts[j][0]} y2={pts[j][1]} stroke={GOLD} strokeWidth={3} opacity={nnO}
            strokeDasharray={ramp(t, inter, 0.5) > 0.5 ? "6 6" : undefined} />
        ))}
        {pts.map(([x, y], i) => {
          const flap = 3 * Math.sin(t * 9 + i);
          const col = i === hl && nnO > 0 ? GOLD : near.includes(i) && nnO > 0 ? ICE : "#1d1a2a";
          return <path key={i} d={`M-9 ${-6 - flap} Q-3 -1 0 0 Q-3 1 -9 ${6 + flap}`} transform={`translate(${x} ${y}) rotate(${dirA + (rand(i + 7) - 0.5) * 20})`}
            fill="none" stroke={col === "#1d1a2a" ? CHALK : col} strokeOpacity={col === "#1d1a2a" ? 0.85 : 1} strokeWidth={i === hl ? 5 : 3} strokeLinecap="round" />;
        })}
      </Svg>
      <Ring x={seekBird[0]} y={seekBird[1]} p={((t - lead) * 2.2) % 1} r0={10} r1={60} color={WARM} />
      <At x={960} y={130} o={seekO}><Glow color={WARM} size={46} serif>no leader</Glow></At>
      <At x={960} y={130} o={nnO}><Glow color={GOLD} size={40}>each follows its neighbours</Glow></At>
      <At x={960} y={130} o={ramp(t, coh, 0.6) * (1 - ramp(t, inter - 0.3, 0.4))}><Glow color={GOLD} size={46} serif>coherence, no commander</Glow></At>
      <At x={960} y={130} o={ramp(t, inter, 0.6) * (1 - gearOut)}>
        <Glow color={CHALK} size={40}>the interplay is designated too</Glow>
      </At>
      <At x={960} y={760} s={gearIn} o={gearIn * (1 - gearOut)} blur={gearOut * 12}>
        <div style={{ position: "relative" }}><Gear size={130} rot={t * 40} color={WARM} /></div>
      </At>
      <At x={1180} y={760} o={gearIn * (1 - gearOut)}><Crossed at={eng + 0.7}><Glow color={WARM} size={36}>hidden engine</Glow></Crossed></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. agency
const AgencyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Is agency then lost"), reach = c("Choose to reach");
  const water = c("the glass of water"), coffee = c("rather than the coffee");
  const yours = c("The choosing is yours"), works = c("and it works");
  const look = c("look for a chooser"), none = c("none is found");
  const doer = c("The doer and the doing"), ground = c("Neither is the ground");
  const handX = 1500 - 560 * ramp(t, yours, 1.2), handY = 640 - 60 * ramp(t, yours, 1.2);
  const lift = ramp(t, works, 1.0);
  const part2 = ramp(t, doer - 0.4, 0.6);
  const mag = ramp(t, look, 2.4);
  const g = ramp(t, ground, 0.5), fall = ramp(t, ground + 1.3, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, t0, 0.5) * (1 - ramp(t, reach, 0.5))}><Glow color={CHALK} size={60} serif>agency lost?</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={820} y={500 - 40 * lift} s={pop(t, fps, water)}><Glass lift={lift} /></At>
        <At x={1180} y={510} s={pop(t, fps, coffee)} o={1 - 0.5 * ramp(t, yours, 0.8)}><Cup /></At>
        <Mist x={1170} y={430} start={coffee + 0.3} color={WARM} spread={60} n={8} seed={5} />
        <At x={handX} y={handY} o={ramp(t, reach, 0.6) * (1 - ramp(t, look - 0.3, 0.5))} r={-70}><Hand size={170} /></At>
        <Ring x={820} y={500} p={ramp(t, yours + 0.6, 1.2)} r0={110} r1={220} color={ICE} />
        <At x={820} y={250} o={ramp(t, yours + 0.3, 0.5) * (1 - ramp(t, look - 0.3, 0.5))}><Glow color={ICE} size={40}>yours, and it works</Glow></At>
        {[["the reasons", "reasons", 460, 300, GOLD], ["the thirst", "thirst", 1460, 300, ICE], ["and the hand", "hand", 1460, 700, ROSE]].map(([ph, lab, x, y, col], i) => (
          <At key={i} x={x as number} y={y as number} s={pop(t, fps, c(ph as string, 0.1))}><Chip color={col as string}>{lab as string}</Chip></At>
        ))}
        <At x={500 + 900 * mag} y={560 - 120 * Math.sin(mag * Math.PI)} o={ramp(t, look, 0.4) * (1 - ramp(t, none + 0.8, 0.5))}>
          <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
            <circle cx={60} cy={60} r={42} fill={`${GOLD}18`} stroke={GOLD} strokeWidth={6} />
            <line x1={92} y1={92} x2={138} y2={138} stroke={GOLD} strokeWidth={10} strokeLinecap="round" />
          </svg>
        </At>
        <At x={960} y={720} o={ramp(t, none, 0.5)}><Glow color={WARM} size={52} serif>no chooser apart from these</Glow></At>
      </AbsoluteFill>
      <Scene from={doer - 0.2} to={1e9}>
        <At x={700} y={430} s={pop(t, fps, doer)}><Orb size={140} color={TEAL} /></At>
        <At x={1220} y={430} s={pop(t, fps, doer + 0.5)}><Orb size={140} color={GOLD} /></At>
        <Flow x1={780} y1={430} x2={1140} y2={430} color={CHALK} p={ramp(t, doer + 0.8, 0.6)} width={5} />
        <At x={700} y={560} o={ramp(t, doer + 0.2, 0.5)}><Glow color={TEAL} size={40}>doer</Glow></At>
        <At x={1220} y={560} o={ramp(t, doer + 0.7, 0.5)}><Glow color={GOLD} size={40}>doing</Glow></At>
        <At x={960} y={300} o={ramp(t, doer + 1.0, 0.6)}><Glow color={CHALK} size={36}>designated together</Glow></At>
        <At x={960 - fall * 40} y={690 + fall * 150} o={g * (1 - fall)} r={-fall * 6}><Slab w={700} label="the ground?" /></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 13. no new foundation
const FoundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("So this view gives"), no = c("no new foundation"), rem = c("removes the hidden foundations");
  const crack = ramp(t, rem + 0.3, 0.5), fall = ramp(t, rem + 1.0, 1.4);
  const float = ramp(t, rem + 1.2, 1.0);
  return (
    <AbsoluteFill>
      {E_NAMES.map((n, i) => (
        <At key={i} x={480 + i * 320} y={390 - float * 30 + Math.sin(t * 1.2 + i) * 6 * float} s={pop(t, fps, t0 + i * 0.15)}>
          <Chip color={E_COLS[i]} size={40}>{n}</Chip>
        </At>
      ))}
      <Svg style={{ opacity: float }}>
        {[0, 1, 2].map((i) => <line key={i} x1={560 + i * 320} y1={360} x2={720 + i * 320} y2={360} stroke={GOLD} strokeWidth={2} strokeDasharray="6 8" />)}
      </Svg>
      <At x={960} y={180} o={ramp(t, no, 0.5)}><Crossed at={no + 1.0}><Glow color={CHALK} size={50} serif>a new foundation</Glow></Crossed></At>
      {[0, 1, 2].map((k) => (
        <At key={k} x={960 + (k - 1) * 440 * (1 + crack * 0.06)} y={520 + k * 0 + fall * (200 + k * 60)} o={ramp(t, t0 + 0.6, 0.6) * (1 - fall)}
          r={fall * (k - 1) * 14}>
          <div style={{ width: 430, height: 70, borderRadius: 8, background: `linear-gradient(180deg, ${WARM}88, #5a2a2088)`,
            border: `2px solid ${WARM}`, boxShadow: `0 0 24px ${WARM}66` }} />
        </At>
      ))}
      <At x={960} y={640} o={ramp(t, t0 + 0.8, 0.6) * (1 - fall)}><Glow color={WARM} size={36}>hidden foundations</Glow></At>
      <At x={960} y={620} o={ramp(t, rem + 2.2, 0.8)}><Glow color={GOLD} size={42} serif>nothing standing on its own</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 14-15. the bicycle
const BikeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("riding a bicycle"), bal = c("knowledge of balance");
  const instr = c("stored as instructions"), notBike = c("not in the bicycle"), notRoad = c("nor in the road");
  const riding = c("only in the riding"), parts = c("weight, handlebar and speed"), slopeAt = c("the slope and the wind");
  const real = c("Yet the skill is entirely real"), learned = c("learned, lost and regained"), traffic = c("safely through traffic");
  const fin = c("found in none of these alone");
  const go = ramp(t, riding, 1.0);
  const spin = (t - t0) * (40 + 260 * go);
  const slope = -6 * ramp(t, slopeAt, 1.2) * (1 - ramp(t, real, 1.0));
  const lean = Math.sin(t * 1.3) * 3 * go;
  const bikeX = 960;
  const aura = ramp(t, real, 1.2);
  const up = ramp(t, learned - 0.4, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={aura}><div style={{ width: 900, height: 700, borderRadius: "50%", background: `radial-gradient(closest-side, ${GOLD}44, transparent)` }} /></At>
      <AbsoluteFill style={{ transform: `translateY(${-80 * up}px) scale(${1 - 0.15 * up})`, transformOrigin: "960px 560px" }}>
        <AbsoluteFill style={{ transform: `rotate(${slope}deg)`, transformOrigin: "960px 640px" }}>
          <Svg>
            <line x1={260} y1={692} x2={1660} y2={692} stroke={DIM} strokeWidth={5} opacity={ramp(t, t0 - 1.4, 0.8)} />
            {Array.from({ length: 10 }).map((_, i) => {
              const x = 260 + ((i * 150 - (t - t0) * 260 * go) % 1400 + 1400) % 1400;
              return <line key={i} x1={x} y1={712} x2={x + 60} y2={712} stroke={DIM} strokeWidth={4} opacity={0.6 * go} />;
            })}
          </Svg>
          <At x={bikeX} y={520} s={pop(t, fps, t0 - 1.4, 14)} r={lean}><Bicycle spin={spin} /></At>
        </AbsoluteFill>
        {Array.from({ length: 8 }).map((_, i) => {
          const u = ((t - slopeAt) * 0.6 + rand(i)) % 1;
          return t > slopeAt ? <div key={i} style={{ position: "absolute", left: 1750 - u * 1500, top: 230 + rand(i + 4) * 360, width: 140, height: 3,
            borderRadius: 2, background: ICE, opacity: Math.sin(u * Math.PI) * 0.7 * (1 - ramp(t, real, 0.8)) }} /> : null;
        })}
      </AbsoluteFill>
      <At x={960} y={130} s={pop(t, fps, bal)} o={1 - ramp(t, riding - 0.3, 0.5)}><Glow color={GOLD} size={56} serif>where is the balance?</Glow></At>
      {[[instr, "in the head", 420], [notBike, "in the bicycle", 960], [notRoad, "in the road", 1500]].map(([at, lab, x], i) => (
        <At key={i} x={x as number} y={230} o={ramp(t, at as number, 0.5) * (1 - ramp(t, riding - 0.3, 0.5))}>
          <Crossed at={(at as number) + 0.8}><Glow color={CHALK} size={36}>{lab as string}</Glow></Crossed>
        </At>
      ))}
      <At x={960} y={150} o={ramp(t, riding, 0.6) * (1 - ramp(t, real - 0.3, 0.5))}><Reveal text="in the riding" at={riding} size={80} /></At>
      {["weight", "handlebar", "speed"].map((w, i) => (
        <At key={i} x={560 + i * 400} y={260} s={pop(t, fps, parts + i * 0.4)} o={1 - ramp(t, real - 0.3, 0.5)}><Chip color={[ROSE, CHALK, GREEN][i]} size={32}>{w}</Chip></At>
      ))}
      <At x={1640} y={360} o={ramp(t, slopeAt + 0.4, 0.5) * (1 - ramp(t, real - 0.3, 0.5))}><Chip color={ICE} size={32}>slope · wind</Chip></At>
      <At x={960} y={120} o={ramp(t, real, 0.6) * (1 - ramp(t, fin - 0.3, 0.5))}><Glow color={GOLD} size={56} serif>entirely real</Glow></At>
      {["learned", "lost", "regained"].map((w, i) => (
        <At key={i} x={560 + i * 400} y={220} s={pop(t, fps, learned + i * 0.45)} o={1 - ramp(t, traffic - 0.3, 0.5)}>
          <Chip color={[GREEN, DIM, GOLD][i]} size={32}>{w}</Chip>
        </At>
      ))}
      {[0, 1].map((k) => {
        const u = ((t - traffic) * 0.22 + k * 0.5) % 1;
        return t > traffic ? <At key={k} x={1800 - u * 1700} y={720 + k * 40} o={Math.sin(u * Math.PI) * (1 - ramp(t, fin + 1, 1))}><MiniCar color={k ? VIOLET : ICE} /></At> : null;
      })}
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="found in none of these alone" at={fin} size={78} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["conv", 0], ["old", c("An older picture of the mind", 0.6)], ["fourE", c("A movement in cognitive science", 0.6)],
    ["otto", c("Here is a famous case", 0.6)], ["cont", c("But this can be read", 0.6)], ["birds", c("Nor is there a commander", 0.6)],
    ["agency", c("Is agency then lost", 0.6)], ["found", c("So this view gives", 0.6)], ["bike", c("riding a bicycle", 2.0)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("An older picture of the mind", 0.9)], <ConvScene />],
    [S("An older picture of the mind", "A movement in cognitive science"), <OldScene />],
    [S("A movement in cognitive science", "Here is a famous case"), <FourEScene />],
    [S("Here is a famous case", "But this can be read"), <OttoScene />],
    [S("But this can be read", "Nor is there a commander"), <WallScene />],
    [S("Nor is there a commander", "Is agency then lost"), <FlockScene />],
    [S("Is agency then lost", "So this view gives"), <AgencyScene />],
    [S("So this view gives", "riding a bicycle", 0.5, 2.3), <FoundScene />],
    [S("riding a bicycle", null, 1.9), <BikeScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
