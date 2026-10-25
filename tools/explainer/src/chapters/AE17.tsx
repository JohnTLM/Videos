// Anatta to Emptiness, Chapter 17: The Painted Rice Cake. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, PictureFrame, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

export const PHRASES = [
  "The mountain, the flower and space", "arise together with its name", "one thing slipped past", "The naming itself",
  "named and picked out", "a thin layer of words", "simply there underneath", "An old Zen saying",
  "famous for his learning", "His teacher asked him", "before his father and mother", "found nothing", "He burned them",
  "a painted rice cake does not satisfy", "sweeping a path", "a pebble strike a bamboo", "and woke up",
  "a standard warning", "Concepts are pictures of food", "Realization is eating",
  "turns it over", "There is no remedy for hunger", "He is refusing the picture", "A real, unpainted rice cake", "Useless paintings of it",
  "Take the next thing", "look for the unpainted one",
  "as food", "Remove that", "Remove the name", "made from rice", "Remove the hunger", "Remove the farmer", "the hand that pounded it",
  "What is left",
  "Each place you look", "To a stone", "To an ant",
  "only the mind's painting", "no blank canvas", "no painter standing apart", "not a copy", "a fiction laid over nothing", "how anything is met",
  "the painted cake feeds", "the hunger goes",
  "one step further", "The hunger is painted too", "A hollowness in the stomach", "A glance at the clock", "named together with the food",
  "Without food", "Without hunger", "Neither comes first", "gets you up from the desk",
  "not wrong to burn his notes", "the endless turning of ideas", "awakening does not lie beyond", "The sound of the pebble", "saw through the demand",
  "not to stop painting", "know a painting as a painting", "vivid and working", "a dreamer who knows the dream",
  "designation, too, is a formation", "arises together with what it names",
  "At the next meal", "Then eat", "exactly as satisfying",
  "Painted food, painted hunger", "nothing missing",
];

const DEEP_GOLD = "#D9A441", INDIGO = "#6C6CF0", RICE = "#F6F0DE";

const M = {
  open: { a: "rgba(60,50,150,0.5)", b: "rgba(180,130,50,0.4)", c: "rgba(40,70,130,0.3)" },
  story: { a: "rgba(150,100,40,0.45)", b: "rgba(60,45,130,0.5)", c: "rgba(40,100,90,0.3)" },
  wake: { a: "rgba(40,110,90,0.45)", b: "rgba(180,140,60,0.4)", c: "rgba(60,50,140,0.35)" },
  dogen: { a: "rgba(80,50,150,0.5)", b: "rgba(190,140,50,0.4)", c: "rgba(40,60,120,0.3)" },
  search: { a: "rgba(170,120,50,0.45)", b: "rgba(50,50,140,0.5)", c: "rgba(90,50,120,0.3)" },
  hunger: { a: "rgba(160,80,50,0.45)", b: "rgba(70,50,140,0.45)", c: "rgba(170,130,50,0.3)" },
  dream: { a: "rgba(50,40,130,0.55)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.35)" },
  meal: { a: "rgba(190,140,60,0.5)", b: "rgba(70,55,150,0.4)", c: "rgba(50,120,110,0.3)" },
};

// ---------------------------------------------------------------- drawings
/** A soft white rice cake. `painted` adds gold brush strokes; `dash` makes it a ghost outline. */
const RiceCake: React.FC<{ s?: number; painted?: number; dash?: boolean; bite?: number }> = ({ s = 1, painted = 0, dash, bite = 0 }) => (
  <svg width={220 * s} height={150 * s} viewBox="0 0 220 150" style={{ overflow: "visible", filter: dash ? undefined : `drop-shadow(0 0 14px ${GOLD}88)` }}>
    <defs>
      <radialGradient id="mochi17" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stopColor="#FFFFFF" /><stop offset="0.6" stopColor={RICE} /><stop offset="1" stopColor="#CFC3A2" /></radialGradient>
      <mask id="bite17"><rect x={0} y={0} width={220} height={150} fill="#fff" />
        {bite > 0 && [0, 1, 2].map((i) => <circle key={i} cx={200 - i * 12} cy={50 + i * 22} r={30 * bite} fill="#000" />)}</mask>
    </defs>
    {dash ? (
      <ellipse cx={110} cy={85} rx={95} ry={52} fill="none" stroke={CHALK} strokeWidth={3} strokeDasharray="10 10" opacity={0.6} />
    ) : (
      <g mask="url(#bite17)">
        <ellipse cx={110} cy={95} rx={95} ry={45} fill="#B9AC8A" />
        <ellipse cx={110} cy={80} rx={95} ry={52} fill="url(#mochi17)" />
        <ellipse cx={85} cy={62} rx={30} ry={10} fill="#fff" opacity={0.6} />
        {painted > 0 && [0, 1, 2].map((i) => (
          <path key={i} d={`M${40 + i * 15} ${70 + i * 18} Q 110 ${50 + i * 18} ${180 - i * 15} ${72 + i * 16}`} fill="none" stroke={DEEP_GOLD} strokeWidth={6}
            strokeLinecap="round" opacity={painted * 0.8} />
        ))}
      </g>
    )}
  </svg>
);

const Mountain: React.FC = () => (
  <svg width={200} height={150} viewBox="0 0 200 150" style={{ filter: `drop-shadow(0 0 10px ${INDIGO})` }}>
    <path d="M5 145 L75 30 L105 75 L130 45 L195 145 Z" fill={`${INDIGO}44`} stroke={INDIGO} strokeWidth={4} strokeLinejoin="round" />
    <path d="M60 55 L75 30 L90 55 L82 50 L75 58 L68 50 Z" fill={CHALK} opacity={0.8} />
  </svg>
);
const Bloom: React.FC = () => (
  <svg width={120} height={160} viewBox="-60 -60 120 160" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M0 10 Q -5 60 0 95" stroke={GREEN} strokeWidth={5} fill="none" />
    {Array.from({ length: 5 }).map((_, i) => <ellipse key={i} cx={0} cy={-22} rx={14} ry={22} fill={`${ROSE}bb`} transform={`rotate(${i * 72})`} />)}
    <circle r={10} fill={GOLD} />
  </svg>
);
const SpaceBox: React.FC = () => (
  <svg width={170} height={150} viewBox="0 0 170 150" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
    <path d="M10 50 L110 50 L110 140 L10 140 Z M50 10 L160 10 L160 100 L50 100 Z M10 50 L50 10 M110 50 L160 10 M110 140 L160 100 M10 140 L50 100"
      fill="none" stroke={ICE} strokeWidth={3} strokeDasharray="8 7" />
  </svg>
);

const Monk: React.FC<{ color?: string; sweep?: number }> = ({ color = DEEP_GOLD, sweep = 0 }) => (
  <svg width={160} height={260} viewBox="0 0 160 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={80} cy={40} r={26} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} />
    <path d="M80 70 L30 240 L130 240 Z" fill={`${color}55`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    {sweep > 0 && (
      <g transform={`rotate(${Math.sin(sweep * 8) * 14} 120 110)`}>
        <line x1={120} y1={110} x2={170} y2={245} stroke="#B98B52" strokeWidth={6} strokeLinecap="round" />
        <path d="M160 235 L190 262 L150 262 Z" fill="#C9A060" />
      </g>
    )}
  </svg>
);

const Notes: React.FC<{ n?: number }> = ({ n = 4 }) => (
  <svg width={200} height={170} viewBox="0 0 200 170" style={{ overflow: "visible" }}>
    {Array.from({ length: n }).map((_, i) => (
      <g key={i} transform={`translate(${i * 14} ${-i * 12}) rotate(${(i - 1.5) * 4} 80 100)`}>
        <rect x={10} y={40} width={150} height={110} rx={6} fill="#EDE3C6" stroke={DEEP_GOLD} strokeWidth={2} />
        {[0, 1, 2, 3].map((k) => <line key={k} x1={26} x2={140 - k * 12} y1={64 + k * 20} y2={64 + k * 20} stroke="#7a6a50" strokeWidth={3} />)}
      </g>
    ))}
  </svg>
);

const Fire: React.FC<{ s?: number }> = ({ s = 1 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (5 + k) + k * 1.7) * 9;
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  return (
    <svg width={260 * s} height={340 * s} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fire17" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fire17)" />
    </svg>
  );
};

const Bamboo: React.FC<{ shake?: number }> = ({ shake = 0 }) => (
  <svg width={90} height={480} viewBox="0 0 90 480" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GREEN})`, transform: `rotate(${shake}deg)`, transformOrigin: "50% 100%" }}>
    {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={28} y={20 + i * 92} width={34} height={86} rx={8} fill={`${GREEN}66`} stroke={GREEN} strokeWidth={3} />)}
    <path d="M62 120 Q 95 95 88 70 Q 75 100 62 110 Z M28 260 Q -5 240 2 210 Q 15 240 28 250 Z" fill={GREEN} opacity={0.8} />
  </svg>
);

const Bowl: React.FC = () => (
  <svg width={240} height={160} viewBox="0 0 240 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${TEAL})` }}>
    <line x1={150} y1={10} x2={225} y2={95} stroke="#C9A060" strokeWidth={6} strokeLinecap="round" />
    <line x1={170} y1={5} x2={232} y2={88} stroke="#C9A060" strokeWidth={6} strokeLinecap="round" />
    <path d="M20 70 Q 120 180 220 70 Z" fill={`${TEAL}55`} stroke={TEAL} strokeWidth={4} />
    <ellipse cx={120} cy={70} rx={100} ry={16} fill={`${RICE}`} stroke={TEAL} strokeWidth={3} />
  </svg>
);

const Stone: React.FC = () => (
  <svg width={180} height={120} viewBox="0 0 180 120" style={{ filter: "drop-shadow(0 0 8px #9a96a3)" }}>
    <path d="M15 100 Q 5 60 45 35 Q 90 10 140 30 Q 175 50 165 95 Q 120 115 70 112 Q 30 112 15 100 Z" fill="#6e6a77" stroke="#b5b0bd" strokeWidth={3} />
  </svg>
);
const Ant: React.FC = () => {
  const { t } = useT();
  const k = Math.sin(t * 10) * 6;
  return (
    <svg width={160} height={100} viewBox="0 0 160 100" style={{ filter: `drop-shadow(0 0 8px ${WARM})` }}>
      {[40, 80, 115].map((x, i) => (
        <g key={i}><line x1={x} y1={55} x2={x - 18 + (i % 2 ? k : -k)} y2={90} stroke={WARM} strokeWidth={3} /><line x1={x} y1={55} x2={x + 18 + (i % 2 ? -k : k)} y2={90} stroke={WARM} strokeWidth={3} /></g>
      ))}
      <ellipse cx={40} cy={55} rx={28} ry={20} fill={WARM} /><ellipse cx={82} cy={55} rx={16} ry={13} fill={WARM} /><circle cx={118} cy={50} r={15} fill={WARM} />
      <path d="M126 38 Q 140 15 150 18 M120 36 Q 128 12 138 10" stroke={WARM} strokeWidth={3} fill="none" />
    </svg>
  );
};

const Clock: React.FC<{ hours: number }> = ({ hours }) => (
  <svg width={190} height={190} viewBox="-100 -100 200 200" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <circle r={90} fill="#ffffff0c" stroke={ICE} strokeWidth={4} />
    {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-80} x2={0} y2={-68} stroke={ICE} strokeWidth={3} transform={`rotate(${i * 30})`} />)}
    <line x1={0} y1={0} x2={0} y2={-45} stroke={CHALK} strokeWidth={7} strokeLinecap="round" transform={`rotate(${hours * 30})`} />
    <line x1={0} y1={0} x2={0} y2={-70} stroke={GOLD} strokeWidth={4} strokeLinecap="round" transform={`rotate(${hours * 360})`} />
    <circle r={7} fill={GOLD} />
  </svg>
);

const Easel: React.FC<{ fill?: number }> = ({ fill = 0 }) => (
  <svg width={240} height={300} viewBox="0 0 240 300" style={{ overflow: "visible" }}>
    <line x1={60} y1={290} x2={100} y2={30} stroke="#B98B52" strokeWidth={6} /><line x1={180} y1={290} x2={140} y2={30} stroke="#B98B52" strokeWidth={6} />
    <rect x={30} y={40} width={180} height={150} rx={4} fill={`rgba(246,240,222,${0.15 + 0.1 * fill})`} stroke={CHALK} strokeWidth={4} />
  </svg>
);

const Painter: React.FC = () => (
  <svg width={140} height={240} viewBox="0 0 140 240" style={{ overflow: "visible" }}>
    <circle cx={60} cy={30} r={22} fill="none" stroke={CHALK} strokeWidth={5} />
    <path d="M60 55 L60 140 M60 80 L110 60 M60 80 L30 115 M60 140 L35 225 M60 140 L85 225" stroke={CHALK} strokeWidth={5} strokeLinecap="round" fill="none" />
    <line x1={110} y1={60} x2={135} y2={30} stroke={DEEP_GOLD} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

const Sleeper: React.FC<{ lucid: number }> = ({ lucid }) => (
  <svg width={420} height={300} viewBox="0 0 420 300" style={{ overflow: "visible" }}>
    <rect x={20} y={230} width={300} height={22} rx={8} fill={`${INDIGO}66`} stroke={INDIGO} strokeWidth={3} />
    <circle cx={60} cy={210} r={20} fill="none" stroke={CHALK} strokeWidth={4} />
    <path d="M82 214 Q 180 200 290 222" stroke={CHALK} strokeWidth={8} strokeLinecap="round" fill="none" />
    {[0, 1, 2].map((i) => <circle key={i} cx={95 + i * 26} cy={180 - i * 26} r={6 + i * 3} fill={`${VIOLET}aa`} />)}
    <ellipse cx={250} cy={90} rx={150} ry={80} fill={`${VIOLET}${lucid > 0.5 ? "44" : "22"}`} stroke={lucid > 0.5 ? DEEP_GOLD : VIOLET} strokeWidth={4}
      style={{ filter: lucid > 0.5 ? `drop-shadow(0 0 ${20 * lucid}px ${GOLD})` : undefined }} />
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

const Title: React.FC<{ at: number; color?: string; y?: number; size?: number; children: React.ReactNode }> = ({ at, color = CHALK, y = 130, size = 44, children }) => {
  const { t } = useT();
  return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={size} serif>{children}</Glow></At>;
};

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Center: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const SearchedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("The mountain, the flower and space", 0.1), nm = c("arise together with its name"), slip = c("one thing slipped past");
  const items = [[<Mountain />, "mountain"], [<Bloom />, "flower"], [<SpaceBox />, "space"]] as const;
  const fly = ramp(t, slip + 0.3, 1.6);
  return (
    <AbsoluteFill>
      {items.map(([icon, w], i) => (
        <React.Fragment key={i}>
          <At x={480 + i * 480} y={370} s={pop(t, fps, a + i * 0.5)}>{icon}</At>
          <At x={480 + i * 480} y={520} s={pop(t, fps, nm + i * 0.25)}><Chip color={DEEP_GOLD} size={32}>“{w}”</Chip></At>
        </React.Fragment>
      ))}
      <At x={1420 + 260 * fly} y={600 - 360 * fly} o={between(t, slip, slip + 2.4)} r={fly * 20}><Chip color={GOLD} size={34}>the naming</Chip></At>
      <At x={960} y={180} o={ramp(t, nm + 0.4, 0.5)}><Glow color={CHALK} size={36}>each arose together with its name</Glow></At>
      <Center top={650}><Reveal text="the naming itself?" at={c("The naming itself")} size={80} color={DEEP_GOLD} /></Center>
    </AbsoluteFill>
  );
};

const LayerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lay = c("a thin layer of words"), under = c("simply there underneath");
  const words = ["mountain", "big", "far", "blue", "old"];
  return (
    <AbsoluteFill>
      <Title at={c("named and picked out", 0.4)}>designated: named and picked out</Title>
      <At x={960} y={520} s={pop(t, fps, c("named and picked out"))}><div style={{ transform: "scale(1.8)" }}><Mountain /></div></At>
      <At x={960} y={360 - 30 * (1 - ramp(t, lay, 1))} o={ramp(t, lay, 0.8)}>
        <div style={{ width: 620, height: 70, borderRadius: 10, background: `${GOLD}22`, border: `2px dashed ${GOLD}`, display: "flex", gap: 22, alignItems: "center", justifyContent: "center" }}>
          {words.map((w, i) => <span key={i} style={{ fontFamily: SERIF, fontSize: 32, color: GOLD }}>{w}</span>)}
        </div>
      </At>
      <At x={1440} y={360} o={ramp(t, lay + 0.4, 0.5)}><Glow color={GOLD} size={32}>a thin layer of words…</Glow></At>
      <Flow x1={1380} y1={640} x2={1110} y2={600} color={INDIGO} p={ramp(t, under, 0.7)} />
      <At x={1500} y={660} o={ramp(t, under + 0.2, 0.5)}><Glow color={INDIGO} size={32}>…over something simply there?</Glow></At>
      <At x={960} y={800} o={ramp(t, c("An old Zen saying"), 0.5)}><Chip color={TEAL} size={32}>an old Zen saying seems to agree</Chip></At>
    </AbsoluteFill>
  );
};

const StoryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const learn = c("famous for his learning"), ask = c("His teacher asked him"), none = c("found nothing"), burn = c("He burned them");
  const burnP = ramp(t, burn + 0.3, 2.0);
  return (
    <AbsoluteFill>
      <At x={480} y={450} s={pop(t, fps, learn - 0.2)}><Monk /></At>
      <At x={480} y={640} o={ramp(t, learn, 0.5)}><Glow color={DEEP_GOLD} size={30}>a learned monk</Glow></At>
      <At x={860} y={520} s={pop(t, fps, learn + 0.4)} o={1 - burnP}><Notes /></At>
      <At x={1420} y={450} s={pop(t, fps, ask - 0.1)}><Monk color={INDIGO} /></At>
      <At x={1420} y={640} o={ramp(t, ask, 0.5)}><Glow color={INDIGO} size={30}>his teacher</Glow></At>
      <At x={1180} y={230} o={ramp(t, c("before his father and mother"), 0.5)}>
        <div style={{ padding: "16px 26px", borderRadius: 24, border: `3px solid ${INDIGO}`, background: `${INDIGO}22`, maxWidth: 520, whiteSpace: "normal" }}>
          <Glow color={CHALK} size={30} style={{ whiteSpace: "normal" }}>a phrase from before your father and mother were born</Glow></div>
      </At>
      <At x={860} y={360} o={between(t, none, burn + 0.4)}><Glow color={WARM} size={70} serif>?</Glow></At>
      <At x={860} y={470} o={between(t, burn + 0.1, burn + 6)}><Fire s={0.8 * (0.5 + 0.5 * ramp(t, burn, 0.6))} /></At>
      <Center top={720}><Reveal text="“a painted rice cake does not satisfy hunger”" at={c("a painted rice cake does not satisfy")} size={52} color={DEEP_GOLD} /></Center>
    </AbsoluteFill>
  );
};

const PebbleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sw = c("sweeping a path"), hit = c("a pebble strike a bamboo", 0) + 1.0, wake = c("and woke up");
  const fly = ramp(t, hit - 0.9, 0.9);
  const shake = t > hit ? Math.sin((t - hit) * 30) * 4 * Math.exp(-(t - hit) * 3) : 0;
  return (
    <AbsoluteFill>
      <At x={560} y={460} s={pop(t, fps, sw - 0.3)}><Monk sweep={t - sw} /></At>
      <At x={560} y={680} o={ramp(t, sw, 0.5)}><Glow color={DIM} size={30}>years later, sweeping</Glow></At>
      <At x={700 + 640 * fly} y={600 - 260 * Math.sin(fly * Math.PI)} o={between(t, hit - 1.0, hit + 0.6, 0.2)}>
        <div style={{ width: 26, height: 22, borderRadius: "50%", background: "#a8a2ad", boxShadow: "0 0 10px #fff" }} />
      </At>
      <At x={1380} y={430} s={pop(t, fps, c("a pebble strike a bamboo"))}><Bamboo shake={shake} /></At>
      <Ring x={1370} y={480} p={ramp(t, hit, 1.2)} r0={20} r1={260} color={TEAL} />
      <At x={1180} y={330} o={between(t, hit, hit + 1.6, 0.2)}><Glow color={TEAL} size={56} serif>tock!</Glow></At>
      <At x={560} y={420} o={ramp(t, wake, 0.8) * 0.9}><div style={{ width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}66, transparent 70%)` }} /></At>
      <At x={960} y={800} o={ramp(t, wake, 0.5)}><Glow color={GOLD} size={46} serif>and he woke up</Glow></At>
    </AbsoluteFill>
  );
};

const WarningScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pic = c("Concepts are pictures of food"), eat = c("Realization is eating");
  return (
    <AbsoluteFill>
      <Title at={c("a standard warning", 0.4)} color={WARM}>a standard warning</Title>
      <PictureFrame x={600} y={460} w={440} h={320} o={ramp(t, pic, 0.6)} />
      <At x={600} y={460} s={pop(t, fps, pic + 0.2)}><RiceCake painted={1} /></At>
      <At x={600} y={700} o={ramp(t, pic + 0.3, 0.5)}><Glow color={GOLD} size={34}>concepts · pictures of food</Glow></At>
      <At x={1320} y={460} s={pop(t, fps, eat)}><Bowl /></At>
      <At x={1320} y={700} o={ramp(t, eat + 0.3, 0.5)}><Glow color={TEAL} size={34}>realization · eating</Glow></At>
    </AbsoluteFill>
  );
};

const DogenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const over = c("turns it over"), ref = c("He is refusing the picture"), real = c("A real, unpainted rice cake"), pnt = c("Useless paintings of it");
  const flip = ramp(t, over, 1.0);
  const quoteOut = ramp(t, ref, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={250} o={1 - quoteOut}>
        <div style={{ perspective: 800 }}>
          <div style={{ transform: `rotateY(${flip < 0.5 ? 180 * flip : 180 * flip - 180}deg)` }}>
            {flip < 0.5 ? <Chip color={WARM} size={34}>painted cakes do not feed</Chip> : <Chip color={GOLD} size={34}>the saying, turned over</Chip>}
          </div>
        </div>
      </At>
      <Center top={340}>
        <div style={{ opacity: 1 - quoteOut, maxWidth: 1400, textAlign: "center" }}>
          <Reveal text="“no remedy for hunger other than painted rice cakes”" at={c("There is no remedy for hunger")} size={56} wrap />
        </div>
      </Center>
      <At x={960} y={150} o={ramp(t, ref, 0.5)}><Glow color={CHALK} size={38} serif>the picture being refused</Glow></At>
      <At x={560} y={460} s={pop(t, fps, real)}><RiceCake s={1.2} /></At>
      <At x={560} y={620} o={ramp(t, real + 0.3, 0.5)}><Glow color={CHALK} size={30}>a real, unpainted cake</Glow></At>
      {[0, 1, 2].map((i) => (
        <React.Fragment key={i}>
          <PictureFrame x={1180 + i * 200} y={460} w={170} h={140} o={ramp(t, pnt + i * 0.2, 0.4) * 0.7} />
          <At x={1180 + i * 200} y={460} o={ramp(t, pnt + i * 0.2, 0.4) * 0.5}><RiceCake s={0.55} painted={1} /></At>
        </React.Fragment>
      ))}
      <At x={1380} y={620} o={ramp(t, pnt + 0.5, 0.5)}><Glow color={DIM} size={30}>useless paintings of it</Glow></At>
      <Svg><DrawPath d="M960 330 L960 680" p={ramp(t, real + 0.6, 0.6)} color={DIM} width={4} len={360} /></Svg>
      <Crossed x={960} y={505} at={pnt + 1.6} size={70} />
    </AbsoluteFill>
  );
};

const SearchCakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const layers: [string, string, string][] = [
    ["as food", "food", GOLD], ["Remove the name", "the name", INDIGO], ["made from rice", "made from rice", CHALK],
    ["Remove the hunger", "hunger", WARM], ["Remove the farmer", "farmer · field · mill", GREEN], ["the hand that pounded it", "the hand", ROSE],
  ];
  const left = c("What is left");
  const fade = ramp(t, left + 0.4, 1.2);
  return (
    <AbsoluteFill>
      <Title at={c("Take the next thing", 0.4)}>look for the unpainted one</Title>
      <At x={960} y={470} s={pop(t, fps, c("Take the next thing"))} o={1 - fade * 0.85}><RiceCake s={1.5} painted={1 - ramp(t, c("Remove that"), 6)} /></At>
      <At x={960} y={470} o={fade}><RiceCake s={1.5} dash /></At>
      {layers.map(([ph, w, col], i) => {
        const a = (i / layers.length) * Math.PI * 2 - Math.PI / 2;
        const at = c(ph);
        const gone = Math.max(ramp(t, ph === "as food" ? c("Remove that") + 0.4 : at + 1.8, 1.6) * 0.75, ramp(t, left, 0.8));
        const r = 280 + 100 * gone;
        return <At key={i} x={960 + r * Math.cos(a) * 1.25} y={470 + r * 0.85 * Math.sin(a)} s={pop(t, fps, at)} o={1 - gone}><Chip color={col} size={30}>{w}</Chip></At>;
      })}
      <At x={960} y={470} o={ramp(t, left + 0.6, 0.5)}><Glow color={CHALK} size={110} serif>?</Glow></At>
      <At x={960} y={790} o={ramp(t, left, 0.5)}><Glow color={DEEP_GOLD} size={40} serif>what is left that is the rice cake itself?</Glow></At>
    </AbsoluteFill>
  );
};

const StoneAntScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const each = c("Each place you look"), st = c("To a stone"), ant = c("To an ant");
  return (
    <AbsoluteFill>
      <Title at={each} color={GOLD}>more painting · no unpainted cake behind it</Title>
      <At x={960} y={400} s={pop(t, fps, each)}><RiceCake s={1.1} painted={1} /></At>
      <At x={480} y={520} s={pop(t, fps, st)}><Stone /></At>
      <At x={480} y={680} o={ramp(t, st + 0.3, 0.5)}><Chip color={DIM} size={30}>to a stone: not food at all</Chip></At>
      <At x={1440} y={520} s={pop(t, fps, ant)}><Ant /></At>
      <At x={1440} y={680} o={ramp(t, ant + 0.3, 0.5)}><Chip color={WARM} size={30}>to an ant: a mountain of sugar</Chip></At>
      <Flow x1={600} y1={500} x2={830} y2={420} color={DIM} p={ramp(t, st + 0.2, 0.6)} />
      <Flow x1={1330} y1={500} x2={1090} y2={420} color={WARM} p={ramp(t, ant + 0.2, 0.6)} />
    </AbsoluteFill>
  );
};

const CanvasScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mp = c("only the mind's painting"), can = c("no blank canvas"), pt = c("no painter standing apart");
  const cp = c("not a copy"), fic = c("a fiction laid over nothing"), met = c("how anything is met");
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={mp - 0.1} strikeAt={mp + 1.4} color={VIOLET} size={34}>only the mind's painting</Struck>
      <At x={560} y={430} s={pop(t, fps, can)}><Easel /></At>
      <At x={560} y={630} o={ramp(t, can + 0.3, 0.5)}><Glow color={CHALK} size={28}>a blank canvas underneath</Glow></At>
      <Crossed x={560} y={400} at={can + 0.9} size={80} />
      <At x={1000} y={430} s={pop(t, fps, pt)}><Painter /></At>
      <At x={1000} y={630} o={ramp(t, pt + 0.3, 0.5)}><Glow color={CHALK} size={28}>a painter apart</Glow></At>
      <Crossed x={1000} y={420} at={pt + 0.9} size={80} />
      <Struck x={1460} y={360} at={cp - 0.1} strikeAt={cp + 0.9} color={DIM}>a copy of the unpainted</Struck>
      <Struck x={1460} y={480} at={fic - 0.1} strikeAt={fic + 1.2} color={DIM}>a fiction over nothing</Struck>
      <Center top={710}><Reveal text="how anything is met at all" at={met} size={74} color={DEEP_GOLD} /></Center>
    </AbsoluteFill>
  );
};

const FeedsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fd = c("the painted cake feeds"), go = c("the hunger goes");
  const bite = ramp(t, fd + 0.8, 2.2);
  const meter = 1 - ramp(t, go, 1.6);
  return (
    <AbsoluteFill>
      <At x={760} y={440} s={pop(t, fps, fd)}><RiceCake s={1.6} painted={1} bite={bite} /></At>
      <At x={760} y={650} o={ramp(t, fd + 0.3, 0.5)}><Glow color={GOLD} size={44} serif>the painted cake feeds</Glow></At>
      <At x={1340} y={440} s={pop(t, fps, go - 0.4)}>
        <div style={{ width: 70, height: 300, borderRadius: 35, border: `3px solid ${WARM}`, position: "relative", overflow: "hidden", background: "#ffffff0a" }}>
          <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${meter * 100}%`, background: `linear-gradient(0deg, ${WARM}, ${GOLD})`, boxShadow: `0 0 20px ${WARM}` }} />
        </div>
      </At>
      <At x={1340} y={650} o={ramp(t, go, 0.5)}><Glow color={WARM} size={36}>hunger goes</Glow></At>
    </AbsoluteFill>
  );
};

const HungerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hp = c("The hunger is painted too"), hol = c("A hollowness in the stomach"), clk = c("A glance at the clock");
  const tog = c("named together with the food"), wf = c("Without food"), wh = c("Without hunger"), up = c("gets you up from the desk");
  const lift = ramp(t, up + 0.3, 0.8);
  return (
    <AbsoluteFill>
      <Title at={c("one step further", 0.3)}>one step further</Title>
      <Center top={175}><Reveal text="the hunger is painted too" at={hp} size={62} color={WARM} /></Center>
      <At x={420} y={420} s={pop(t, fps, hol)}>
        <div style={{ width: 170, height: 170, borderRadius: "50%", border: `4px solid ${WARM}`, background: `radial-gradient(circle, #000a 30%, ${WARM}33)`, boxShadow: `0 0 30px ${WARM}66` }} />
      </At>
      <At x={420} y={560} o={ramp(t, hol + 0.3, 0.5)}><Glow color={WARM} size={28}>a hollowness</Glow></At>
      <At x={420} y={720} s={pop(t, fps, clk)}><div style={{ transform: "scale(0.7)" }}><Clock hours={11.8 + ramp(t, clk, 1.5) * 0.25} /></div></At>
      <At x={850} y={430} s={pop(t, fps, tog)}><Chip color={WARM} size={38}>hunger</Chip></At>
      <At x={1350} y={430} s={pop(t, fps, tog + 0.2)}><RiceCake s={0.8} painted={1} /></At>
      <Flow x1={950} y1={410} x2={1240} y2={410} color={GOLD} p={ramp(t, tog + 0.4, 0.7)} />
      <Flow x1={1240} y1={460} x2={950} y2={460} color={GOLD} p={ramp(t, tog + 0.7, 0.7)} />
      <At x={1100} y={560} o={ramp(t, wf, 0.4)}><Glow color={CHALK} size={28}>no food · no hunger for anything</Glow></At>
      <At x={1100} y={615} o={ramp(t, wh, 0.4)}><Glow color={CHALK} size={28}>no hunger · nothing is food</Glow></At>
      <At x={1100} y={690} o={ramp(t, c("Neither comes first"), 0.4)}><Chip color={DEEP_GOLD} size={32}>neither comes first</Chip></At>
      <At x={1640} y={640 - 50 * lift} s={pop(t, fps, up)}>
        <svg width={120} height={200} viewBox="0 0 120 200"><circle cx={60} cy={28} r={20} fill="none" stroke={CHALK} strokeWidth={5} />
          <path d={`M60 50 L60 ${120 + 10 * lift} M60 70 L30 100 M60 70 L90 100 M60 ${120 + 10 * lift} L${40 - 5 * lift} 190 M60 ${120 + 10 * lift} L${80 + 5 * lift} 190`} stroke={CHALK} strokeWidth={5} strokeLinecap="round" fill="none" /></svg>
      </At>
      <At x={1640} y={790} o={ramp(t, up + 0.4, 0.5)}><Glow color={GOLD} size={28}>still real enough to move you</Glow></At>
    </AbsoluteFill>
  );
};

const BurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nw = c("not wrong to burn his notes"), turn = c("the endless turning of ideas"), aw = c("awakening does not lie beyond");
  const peb = c("The sound of the pebble"), dem = c("saw through the demand");
  const part2 = ramp(t, aw - 0.2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={620} y={470} s={pop(t, fps, nw)}><Notes /></At>
        <At x={620} y={430} o={ramp(t, nw + 0.5, 0.5)}><Fire s={0.7} /></At>
        <At x={620} y={720} o={ramp(t, nw + 0.3, 0.5)}><Glow color={WARM} size={34}>not wrong to burn them</Glow></At>
        {[0, 1, 2].map((i) => {
          const a = t * 2.4 + (i * Math.PI * 2) / 3;
          return <At key={i} x={1320 + 120 * Math.cos(a)} y={440 + 120 * Math.sin(a)} s={pop(t, fps, turn + i * 0.15)}><Orb size={50} color={[VIOLET, INDIGO, TEAL][i]} /></At>;
        })}
        <At x={1320} y={660} o={ramp(t, turn + 0.3, 0.5)}><Chip color={VIOLET} size={30}>endless turning of ideas</Chip></At>
      </AbsoluteFill>
      <Scene from={aw - 0.2} to={1e9}>
        <At x={560} y={440} s={pop(t, fps, aw)}>
          <div style={{ width: 380, height: 420, position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, width: 380, height: 200, border: `3px dashed ${DIM}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Glow color={DIM} size={28}>unpainted ground</Glow></div>
            <div style={{ position: "absolute", left: 0, top: 220, width: 380, height: 200, border: `3px solid ${GOLD}`, borderRadius: 8, background: `${GOLD}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Glow color={GOLD} size={28}>painting</Glow></div>
          </div>
        </At>
        <Crossed x={560} y={330} at={aw + 1.4} size={80} />
        <At x={560} y={720} o={ramp(t, aw + 0.6, 0.5)}><Glow color={CHALK} size={28}>no upstairs beyond the painting</Glow></At>
        <At x={1340} y={420} s={pop(t, fps, peb)}><Bamboo /></At>
        <Ring x={1340} y={430} p={ramp(t, peb + 0.2, 1.4)} r0={20} r1={220} color={DEEP_GOLD} />
        <At x={1340} y={720} o={ramp(t, peb + 0.4, 0.5)}><Chip color={DEEP_GOLD} size={30}>the pebble's sound: painted too</Chip></At>
        <At x={960} y={810} o={ramp(t, dem, 0.5)}><Glow color={GOLD} size={36} serif>seeing through the demand for something unpainted</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const DreamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const stop = c("not to stop painting"), know = c("know a painting as a painting"), viv = c("vivid and working"), dr = c("a dreamer who knows the dream");
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={stop - 0.1} strikeAt={stop + 1.0} color={DIM} size={34}>stop painting</Struck>
      <PictureFrame x={560} y={460} w={460} h={340} o={ramp(t, stop + 0.4, 0.6)} />
      <At x={560} y={460} s={pop(t, fps, stop + 0.6)}>
        <div style={{ position: "relative" }}>
          <RiceCake s={1.2} painted={1} />
          {Array.from({ length: 8 }).map((_, i) => <At key={i} x={110 + 170 * Math.cos(i + t)} y={80 + 110 * Math.sin(i * 1.3 + t)} o={ramp(t, viv, 0.6)}>
            <Orb size={18 + (i % 3) * 8} color={[GOLD, ROSE, TEAL, VIOLET][i % 4]} /></At>)}
        </div>
      </At>
      <At x={560} y={700} o={ramp(t, know + 0.4, 0.5)}><Glow color={GOLD} size={32}>a painting, known as a painting</Glow></At>
      <At x={560} y={760} o={ramp(t, viv, 0.5)}><Glow color={TEAL} size={28}>vivid and working</Glow></At>
      <At x={1360} y={430} s={pop(t, fps, dr - 0.2)}><Sleeper lucid={ramp(t, dr + 0.8, 0.8)} /></At>
      <At x={1410} y={355} o={ramp(t, dr, 0.5)}><RiceCake s={0.6} painted={1} /></At>
      <At x={1360} y={680} o={ramp(t, dr + 0.6, 0.5)}><Glow color={DEEP_GOLD} size={30}>knowing the dream, not leaving it</Glow></At>
    </AbsoluteFill>
  );
};

const FormationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const des = c("designation, too, is a formation"), tog = c("arises together with what it names");
  return (
    <AbsoluteFill>
      <Center top={150}><Reveal text="designation, too, is a formation" at={des} size={78} color={DEEP_GOLD} /></Center>
      <At x={760} y={480} s={pop(t, fps, tog)}><Chip color={INDIGO} size={44}>“rice cake”</Chip></At>
      <At x={1180} y={480} s={pop(t, fps, tog)}><RiceCake s={1.1} painted={1} /></At>
      <Ring x={960} y={480} p={ramp(t, tog + 0.2, 1.6)} r0={120} r1={420} color={GOLD} />
      <At x={960} y={660} o={ramp(t, tog + 0.4, 0.5)}><Glow color={CHALK} size={34}>arising together · neither found from its own side</Glow></At>
    </AbsoluteFill>
  );
};

const MealScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const meal = c("At the next meal"), eat = c("Then eat"), sat = c("exactly as satisfying"), fin = c("Painted food, painted hunger");
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, meal)}><div style={{ transform: "scale(1.4)" }}><Bowl /></div></At>
      <At x={960} y={130} o={ramp(t, meal + 0.3, 0.5)}><Glow color={CHALK} size={36}>look for the unpainted food…</Glow></At>
      <At x={960} y={200} o={ramp(t, eat, 0.4)}><Glow color={TEAL} size={40} serif>…then eat</Glow></At>
      <At x={960} y={570} o={ramp(t, sat, 0.5)}><Chip color={GOLD} size={32}>exactly as satisfying as before</Chip></At>
      {["painted food", "painted hunger", "nothing missing"].map((w, i) => (
        <At key={i} x={520 + i * 440} y={740} s={pop(t, fps, i < 2 ? fin + i * 0.7 : c("nothing missing"))}>
          <Glow color={i < 2 ? DEEP_GOLD : "#FFF3D1"} size={i < 2 ? 46 : 56} serif>{w}</Glow>
        </At>
      ))}
      <Ring x={1400} y={740} p={ramp(t, c("nothing missing") + 0.3, 1.8)} r0={60} r1={300} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["story", c("famous for his learning", 0.6)], ["wake", c("sweeping a path", 0.6)], ["dogen", c("a standard warning", 0.6)],
    ["search", c("Take the next thing", 0.6)], ["dogen", c("only the mind's painting", 0.6)], ["hunger", c("the painted cake feeds", 0.6)],
    ["story", c("not wrong to burn his notes", 0.6)], ["dream", c("not to stop painting", 0.6)], ["meal", c("designation, too, is a formation", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("named and picked out", 0.9)], <SearchedScene />],
    [S("named and picked out", "famous for his learning"), <LayerScene />],
    [S("famous for his learning", "sweeping a path"), <StoryScene />],
    [S("sweeping a path", "a standard warning"), <PebbleScene />],
    [S("a standard warning", "turns it over"), <WarningScene />],
    [S("turns it over", "Take the next thing"), <DogenScene />],
    [S("Take the next thing", "Each place you look"), <SearchCakeScene />],
    [S("Each place you look", "only the mind's painting"), <StoneAntScene />],
    [S("only the mind's painting", "the painted cake feeds"), <CanvasScene />],
    [S("the painted cake feeds", "one step further"), <FeedsScene />],
    [S("one step further", "not wrong to burn his notes"), <HungerScene />],
    [S("not wrong to burn his notes", "not to stop painting"), <BurnScene />],
    [S("not to stop painting", "designation, too, is a formation"), <DreamScene />],
    [S("designation, too, is a formation", "At the next meal"), <FormationScene />],
    [S("At the next meal", null), <MealScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
