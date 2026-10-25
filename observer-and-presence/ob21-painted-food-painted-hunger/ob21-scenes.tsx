// The Observer and the Taste of Presence, Chapter 21: Painted Food, Painted Hunger. Explainer drawings timed to the narration.
// Arc: the painted rice cake that does not satisfy hunger -> the learned monk burns his notes -> years later, sweeping, a pebble
// strikes bamboo: he wakes -> the saying turned over: only painted cakes cure hunger -> refusing the picture of a real cake vs pale
// copies -> look for the unpainted one: it already appears as food, pulling at the hand -> remove the name, the hunger, the
// occasions, the farmer: what is left? -> a stone, an ant: the cake apart from every meeting is not found -> no blank canvas, no
// painter apart; the painting is how things are met -> the painted cake feeds; no unpainted cake underneath -> hunger is painted
// too, named with food as fuel with fire, and still gets you up -> the notes burned as a substitute; the cure was the pebble ->
// awakening did not escape the painting -> the one-meal exercise -> painted food, painted hunger, painted satisfaction, nothing missing.
// Stance: no blank canvas or ground is drawn under the painting except to be crossed out; the cake and the hunger stay vivid and
// work; waking is drawn as the sound of the pebble, not as a light or a climb.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, PictureFrame, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A painted rice cake does not satisfy hunger", "So says an old Zen warning", "Concepts are pictures of food", "Realisation is eating",
  "famous for his learning", "and burned his notes",
  "Years later, sweeping a path", "he heard a pebble strike a stalk of bamboo", "He woke",
  "turns the saying over", "there is no remedy for hunger other than painted rice cakes", "Without painted hunger, he says",
  "one never becomes a true person",
  "He is not praising study over practice", "He is refusing the picture behind the saying", "a real, unpainted cake on one side",
  "pale, useless paintings of it on the other",
  "Look for the unpainted one", "Take the next thing you are about to eat", "It appears, first of all, as food",
  "a white, roughly round object", "already pulling at the hand",
  "Now remove that", "Remove the name", "Remove the hunger that makes it look good", "Remove the occasions it belongs to",
  "Remove the farmer", "What is left that is the rice cake itself",
  "Each place you look yields more appearance", "To a stone, nothing on the plate is food at all", "To an ant, it is a mountain of sugar",
  "apart from every way of meeting it is not found",
  "is not saying there is nothing but the mind's painting", "There is no blank canvas under the painting", "no painter standing apart from it",
  "the painting is how anything is met at all",
  "And the painted cake feeds", "Eat it, and the hunger goes", "an unpainted cake must be doing the feeding underneath",
  "goes one step further", "The hunger is painted too", "Hunger is named together with the food", "just as fuel is fuel only as what fire burns",
  "Neither comes first", "Yet hunger is no less real", "It gets you up from the desk",
  "was not wrong to burn his notes", "He burned the use he had made of them", "The cure was not a better note", "It was the pebble on the bamboo",
  "But awakening does not lie beyond all painting", "The sound of the pebble was painted too", "heard as a click",
  "Realisation did not escape the painting", "It saw through the demand for something behind it",
  "Try this over one meal", "Before eating, notice how the food appears", "look, slowly, for the food apart from its name",
  "Look at the hunger the same way", "Where is it, apart from the food", "Then put the looking down, and eat",
  "The meal is exactly as satisfying as before", "Painted food, painted hunger, painted satisfaction", "and nothing missing",
];

// Book 4 mood: plum and gold
const M = {
  cake: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,110,130,0.3)" },
  monk: { a: "rgba(50,120,90,0.45)", b: "rgba(110,55,120,0.42)", c: "rgba(180,140,60,0.3)" },
  look: { a: "rgba(60,70,140,0.5)", b: "rgba(110,55,120,0.42)", c: "rgba(180,135,60,0.3)" },
  paint: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  hunger: { a: "rgba(170,95,70,0.42)", b: "rgba(100,55,125,0.44)", c: "rgba(180,140,60,0.3)" },
  meal: { a: "rgba(195,150,65,0.48)", b: "rgba(100,55,125,0.44)", c: "rgba(50,135,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
/** A round white rice cake; bite 0..1 takes bites out of it; pale makes it a faded copy; dashed makes it an outline only. */
const RiceCake: React.FC<{ size?: number; bite?: number; pale?: boolean; dashed?: boolean; id?: string }> = ({ size = 1, bite = 0, pale, dashed, id = "rc" }) => (
  <svg width={240 * size} height={170 * size} viewBox="0 0 240 170" style={{ overflow: "visible",
    filter: dashed ? undefined : `drop-shadow(0 0 ${pale ? 4 : 16}px ${pale ? "#ffffff33" : "#FFF3D1aa"})`, opacity: pale ? 0.4 : 1 }}>
    <defs>
      <mask id={id}>
        <rect x={-20} y={-20} width={280} height={210} fill="white" />
        {bite > 0.02 && <circle cx={236} cy={60} r={46 * Math.min(1, bite * 2)} fill="black" />}
        {bite > 0.5 && <circle cx={210} cy={120} r={44 * (bite - 0.5) * 2} fill="black" />}
      </mask>
    </defs>
    <g mask={`url(#${id})`}>
      {dashed
        ? <ellipse cx={120} cy={88} rx={110} ry={70} fill="none" stroke={DIM} strokeWidth={4} strokeDasharray="12 10" />
        : <>
          <ellipse cx={120} cy={100} rx={110} ry={62} fill="#d9d2c0" />
          <ellipse cx={120} cy={80} rx={110} ry={62} fill="url(#ricegrad)" stroke="#fffaf0" strokeWidth={3} />
          <ellipse cx={92} cy={62} rx={34} ry={14} fill="#ffffff" opacity={0.55} />
        </>}
    </g>
    <defs>
      <radialGradient id="ricegrad" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#e6dfcf" /></radialGradient>
    </defs>
  </svg>
);

const Plate: React.FC<{ w?: number }> = ({ w = 420 }) => (
  <div style={{ width: w, height: w * 0.3, borderRadius: "50%", border: `4px solid ${ICE}`, background: `radial-gradient(ellipse, ${ICE}22, ${ICE}08)`,
    boxShadow: `0 0 24px ${ICE}55` }} />
);

/** A stack of written notes. */
const Notes: React.FC<{ burn?: number }> = ({ burn = 0 }) => (
  <svg width={260} height={240} viewBox="0 0 260 240" style={{ overflow: "visible", opacity: 1 - burn * 0.85, filter: `drop-shadow(0 0 8px ${CHALK}55)` }}>
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${i * 8} ${60 - i * 18}) rotate(${(i - 1.5) * 3} 120 80)`}>
        <rect x={10} y={10} width={220} height={150} rx={6} fill={burn > 0.3 ? "#3a2a1d" : "#efe6cf"} stroke={GOLD} strokeWidth={3} />
        {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={30} y1={40 + k * 24} x2={200 - (k % 2) * 40} y2={40 + k * 24} stroke="#6b5a40" strokeWidth={3} />)}
      </g>
    ))}
  </svg>
);

/** Flickering flames (o 0..1). */
const Flames: React.FC<{ o: number; w?: number }> = ({ o, w = 260 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={220} viewBox={`0 0 ${w} 220`} style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 16px ${WARM})` }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const x = (i + 0.5) * (w / 5), h = 120 + 50 * Math.sin(t * 7 + i * 1.7) + 30 * rand(i);
        return <path key={i} d={`M${x - 28} 210 Q${x - 30} ${210 - h * 0.5} ${x + Math.sin(t * 5 + i) * 10} ${210 - h} Q${x + 30} ${210 - h * 0.5} ${x + 28} 210 Z`}
          fill={i % 2 ? `${GOLD}cc` : `${WARM}cc`} />;
      })}
    </svg>
  );
};

const Bamboo: React.FC<{ size?: number; shake?: number }> = ({ size = 1, shake = 0 }) => {
  const { t } = useT();
  const r = shake > 0 && shake < 1 ? Math.sin(shake * 40) * 4 * (1 - shake) : 0;
  return (
    <svg width={140 * size} height={520 * size} viewBox="0 0 140 520" style={{ overflow: "visible", transform: `rotate(${r + Math.sin(t * 0.8) * 1.2}deg)`,
      transformOrigin: "50% 100%", filter: `drop-shadow(0 0 10px ${GREEN}88)` }}>
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={50} y={20 + i * 100} width={40} height={96} rx={10} fill={`${GREEN}66`} stroke={GREEN} strokeWidth={4} />)}
      <path d="M90 130 Q130 100 138 60 M50 260 Q10 230 4 190" stroke={GREEN} strokeWidth={5} fill="none" />
      <ellipse cx={128} cy={70} rx={10} ry={30} fill={`${GREEN}88`} transform="rotate(30 128 70)" />
      <ellipse cx={12} cy={200} rx={10} ry={30} fill={`${GREEN}88`} transform="rotate(-30 12 200)" />
    </svg>
  );
};

const Broom: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={200 * size} height={360 * size} viewBox="0 0 200 360" style={{ overflow: "visible", transform: `rotate(${Math.sin(t * 2.6) * 16}deg)`,
      transformOrigin: "50% 10%", filter: `drop-shadow(0 0 8px ${GOLD}88)` }}>
      <line x1={100} y1={10} x2={100} y2={250} stroke="#C9A06A" strokeWidth={10} strokeLinecap="round" />
      <path d="M100 240 L40 350 M100 240 L70 352 M100 240 L100 354 M100 240 L130 352 M100 240 L160 350" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    </svg>
  );
};

const Stone: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <svg width={240 * size} height={160 * size} viewBox="0 0 240 160" style={{ overflow: "visible" }}>
    <path d="M20 140 Q10 70 70 40 Q140 10 200 50 Q236 90 218 140 Z" fill="#6f6f78" stroke="#a0a0aa" strokeWidth={4} />
  </svg>
);

const Ant: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  const w = Math.sin(t * 10) * 8;
  return (
    <svg width={160 * size} height={100 * size} viewBox="0 0 160 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 6px ${WARM})` }}>
      {[40, 70, 100].map((x, i) => <path key={i} d={`M${x} 50 L${x - 16 + (i % 2 ? w : -w)} 92 M${x} 50 L${x + 12 + (i % 2 ? -w : w)} 8`} stroke={CHALK} strokeWidth={3} fill="none" />)}
      <ellipse cx={30} cy={50} rx={26} ry={20} fill="#3a2a2a" stroke={CHALK} strokeWidth={3} />
      <ellipse cx={74} cy={50} rx={18} ry={14} fill="#3a2a2a" stroke={CHALK} strokeWidth={3} />
      <circle cx={112} cy={48} r={16} fill="#3a2a2a" stroke={CHALK} strokeWidth={3} />
      <path d="M124 38 Q140 14 152 18 M120 36 Q128 10 140 6" stroke={CHALK} strokeWidth={3} fill="none" />
    </svg>
  );
};

const Hand: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M30 92 C18 80 14 66 16 54 L18 40 C19 34 27 34 28 40 L30 52 L30 20 C30 13 39 13 39 20 L40 48 L41 12 C41 5 51 5 51 12 L51 48 L53 16 C53 9 62 9 62 16 L61 50 L64 30 C65 23 74 24 73 31 L69 64 C67 78 60 88 52 92 Z"
      fill="rgba(255,143,163,0.18)" stroke={ROSE} strokeWidth={3.5} strokeLinejoin="round" />
  </svg>
);

const Magnifier: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = GOLD }) => (
  <svg width={180 * size} height={180 * size} viewBox="0 0 180 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={70} cy={70} r={52} fill={`${ICE}18`} stroke={color} strokeWidth={8} />
    <line x1={108} y1={108} x2={166} y2={166} stroke={color} strokeWidth={14} strokeLinecap="round" />
  </svg>
);

/** A hunger meter (level 0..1). */
const Meter: React.FC<{ level: number; label?: string }> = ({ level, label = "hunger" }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    <div style={{ width: 70, height: 260, borderRadius: 35, border: `4px solid ${WARM}`, position: "relative", overflow: "hidden", background: "#1a1020" }}>
      <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${level * 100}%`, background: `linear-gradient(0deg, ${WARM}, ${GOLD})`,
        boxShadow: `0 0 20px ${WARM}` }} />
    </div>
    <div style={{ fontFamily: "SourceSans", fontSize: 28, color: WARM }}>{label}</div>
  </div>
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
const CakeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const p = c("A painted rice cake does not satisfy hunger"), zen = c("So says an old Zen warning"), con = c("Concepts are pictures of food");
  const eat = c("Realisation is eating");
  return (
    <AbsoluteFill>
      <Head text="a painted rice cake" at={p} y={90} size={70} />
      <PictureFrame x={600} y={460} w={440} h={320} o={ramp(t, p + 0.2, 0.6)} />
      <At x={600} y={460} s={pop(t, fps, p + 0.5)}><RiceCake id="rcA" /></At>
      <At x={1000} y={480} o={ramp(t, p + 1.6, 0.5)}><Meter level={0.85} /></At>
      <At x={600} y={700} o={ramp(t, zen, 0.5)}><Glow color={DIM} size={28}>an old Zen warning</Glow></At>
      <At x={600} y={790} s={pop(t, fps, con)}><Chip color={VIOLET} size={32}>concepts: pictures of food</Chip></At>
      <At x={1400} y={460} s={pop(t, fps, eat)}><RiceCake id="rcB" bite={ramp(t, eat + 0.6, 1.4)} /></At>
      <At x={1400} y={790} o={ramp(t, eat + 0.3, 0.5)}><Chip color={GOLD} size={32}>realisation: eating</Chip></At>
    </AbsoluteFill>
  );
};

const NotesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const learn = c("famous for his learning"), burn = c("and burned his notes");
  const b = ramp(t, burn + 0.4, 2.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, learn - 0.6, 0.5)}><Glow color={CHALK} size={44} serif>a learned monk</Glow></At>
      <At x={760} y={460} s={pop(t, fps, learn)}><Notes burn={b} /></At>
      <At x={760} y={680} o={ramp(t, learn + 0.4, 0.5) * (1 - b)}><Chip color={GOLD} size={30}>learning</Chip></At>
      <At x={1260} y={400} s={pop(t, fps, learn + 1.6)}><Glow color={ICE} size={120} serif>?</Glow></At>
      <At x={1260} y={560} o={ramp(t, learn + 2.0, 0.5)}><Glow color={ICE} size={28}>the teacher's question</Glow></At>
      <At x={760} y={420} o={ramp(t, burn, 0.5) * (1 - ramp(t, burn + 4.0, 1.4))}><Flames o={1} /></At>
      <At x={760} y={780} o={ramp(t, burn + 0.6, 0.5)}><Glow color={WARM} size={32}>the notes, burned</Glow></At>
    </AbsoluteFill>
  );
};

const BambooScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sweep = c("Years later, sweeping a path"), peb = c("he heard a pebble strike a stalk of bamboo"), woke = c("He woke");
  const hit = peb + 1.4;
  const fp = ramp(t, peb + 0.2, 1.2);
  const px = 620 + (1250 - 620) * fp, py = 700 - Math.sin(fp * Math.PI) * 260 - 80 * fp;
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, sweep, 0.5)}><Glow color={DIM} size={36}>years later, sweeping</Glow></At>
      <Svg><DrawPath d="M200 800 Q960 760 1700 800" p={ramp(t, sweep, 1.2)} color={DIM} width={4} len={1600} glow={false} /></Svg>
      <At x={560} y={600} s={pop(t, fps, sweep + 0.3)}><Broom /></At>
      {t > peb + 0.2 && t < hit && <At x={px} y={py}><div style={{ width: 26, height: 22, borderRadius: "50%", background: "#a0a0aa", boxShadow: "0 0 10px #ffffff88" }} /></At>}
      <At x={1300} y={500} s={pop(t, fps, peb - 0.2)}><Bamboo shake={ramp(t, hit, 1.0)} /></At>
      <Ring x={1290} y={540} p={ramp(t, hit, 0.9)} r0={10} r1={160} color={ICE} />
      <At x={1500} y={430} s={pop(t, fps, hit)}><Glow color={ICE} size={56} serif>click</Glow></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={1290} y={540} p={ramp(t, woke + i * 0.5, 1.6)} r0={40} r1={420} color={GOLD} />)}
      <At x={960} y={250} s={pop(t, fps, woke + 0.2)}><Glow color={GOLD} size={80} serif>he woke</Glow></At>
    </AbsoluteFill>
  );
};

const TurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const turn = c("turns the saying over"), rem = c("there is no remedy for hunger other than painted rice cakes"), ph = c("Without painted hunger, he says");
  const tp = c("one never becomes a true person");
  const flip = ramp(t, turn + 0.3, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, turn, 0.5)}><Glow color={CHALK} size={44} serif>the saying, turned over</Glow></At>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, perspective: 1600 }}>
        <div style={{ position: "absolute", inset: 0, transform: `rotateY(${360 * flip}deg)`, transformOrigin: "620px 440px" }}>
          <PictureFrame x={620} y={440} w={420} h={300} o={ramp(t, turn, 0.5)} />
          <At x={620} y={440} o={ramp(t, turn, 0.5)}><RiceCake id="rcT" /></At>
        </div>
      </div>
      <At x={620} y={680} s={pop(t, fps, rem)}><Chip color={GOLD} size={30}>the only remedy for hunger</Chip></At>
      <PictureFrame x={1320} y={440} w={420} h={300} o={ramp(t, ph, 0.5)} />
      <At x={1320} y={440} s={pop(t, fps, ph + 0.3)}><Glow color={WARM} size={64} serif>hunger</Glow></At>
      <At x={1320} y={680} o={ramp(t, ph + 0.6, 0.5)}><Chip color={WARM} size={30}>painted hunger</Chip></At>
      <At x={960} y={800} s={pop(t, fps, tp)}><Glow color={GOLD} size={38} serif>without it, no true person</Glow></At>
    </AbsoluteFill>
  );
};

const RefuseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const prs = c("He is not praising study over practice"), ref = c("He is refusing the picture behind the saying");
  const real = c("a real, unpainted cake on one side"), pale = c("pale, useless paintings of it on the other");
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={prs} strikeAt={prs + 1.4} color={VIOLET} size={36}>study over practice</Struck>
      <At x={960} y={220} o={ramp(t, ref, 0.5)}><Glow color={CHALK} size={40} serif>refusing the picture behind it</Glow></At>
      <At x={520} y={480} s={pop(t, fps, real)}><RiceCake id="rcR" size={1.3} /></At>
      <At x={520} y={680} o={ramp(t, real + 0.3, 0.5)}><Chip color={GOLD} size={30}>“the real cake”</Chip></At>
      {[0, 1, 2].map((i) => (
        <React.Fragment key={i}>
          <PictureFrame x={1240 + i * 120} y={440 + i * 40} w={260} h={190} o={ramp(t, pale + i * 0.25, 0.5) * 0.6} dashed />
          <At x={1240 + i * 120} y={440 + i * 40} o={ramp(t, pale + i * 0.25, 0.5)}><RiceCake id={`rcP${i}`} size={0.6} pale /></At>
        </React.Fragment>
      ))}
      <At x={1360} y={680} o={ramp(t, pale + 0.6, 0.5)}><Chip color={DIM} size={30}>“pale copies”</Chip></At>
      <At x={920} y={470} o={ramp(t, pale + 0.8, 0.5)}><Glow color={ROSE} size={56} serif>vs</Glow></At>
      <Crossed x={920} y={470} at={pale + 2.2} size={80} />
      <At x={960} y={800} o={ramp(t, pale + 2.6, 0.5)}><Glow color={WARM} size={32}>this split is refused</Glow></At>
    </AbsoluteFill>
  );
};

const LookScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("Look for the unpainted one"), next = c("Take the next thing you are about to eat"), food = c("It appears, first of all, as food");
  const obj = c("a white, roughly round object"), pull = c("already pulling at the hand");
  return (
    <AbsoluteFill>
      <Head text="look for the unpainted one" at={look} y={90} size={64} />
      <At x={760 + 200 * Math.sin(t * 0.9)} y={300} o={ramp(t, look + 0.6, 0.5) * (1 - ramp(t, next, 0.6))}><Magnifier /></At>
      <At x={760} y={560} o={ramp(t, next, 0.5)}><Plate w={460} /></At>
      <At x={700} y={510} s={pop(t, fps, next + 0.2)}><RiceCake id="rcL" /></At>
      <At x={870} y={520} s={pop(t, fps, next + 0.5)}>
        <div style={{ width: 120, height: 90, borderRadius: "40px 40px 10px 10px", background: "linear-gradient(180deg, #d79b55, #b5763a)", border: `3px solid ${GOLD}` }} />
      </At>
      <At x={760} y={340} s={pop(t, fps, food)}><Chip color={GREEN} size={40}>food</Chip></At>
      <Struck x={760} y={760} at={obj} strikeAt={obj + 1.8} color={DIM} size={30}>a white round object, later “edible”</Struck>
      <At x={1380 - 60 * ramp(t, pull + 0.3, 1) + Math.sin(t * 3) * 8 * ramp(t, pull, 0.5)} y={520} o={ramp(t, pull - 0.2, 0.5)} r={-90}><Hand size={180} /></At>
      {[0, 1, 2].map((i) => (
        <Flow key={i} x1={950} y1={480 + i * 40} x2={1280} y2={480 + i * 40} color={ROSE} p={ramp(t, pull + 0.2 + i * 0.15, 0.6)} />
      ))}
      <At x={1380} y={680} o={ramp(t, pull + 0.6, 0.5)}><Glow color={ROSE} size={30}>already pulling at the hand</Glow></At>
    </AbsoluteFill>
  );
};

const RemoveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const now = c("Now remove that"), name = c("Remove the name"), hun = c("Remove the hunger that makes it look good");
  const occ = c("Remove the occasions it belongs to"), farm = c("Remove the farmer"), left = c("What is left that is the rice cake itself");
  const items: [string, number, number, number, string][] = [
    ["“rice cake”", 420, 260, name, GOLD], ["made from rice", 420, 400, name + 1.2, GOLD], ["hunger", 1500, 260, hun, WARM],
    ["New Year table", 420, 560, occ, VIOLET], ["snack at your desk", 420, 700, occ + 1.6, VIOLET],
    ["farmer", 1500, 420, farm, TEAL], ["field", 1500, 560, farm + 0.8, TEAL], ["the pounding hand", 1500, 700, farm + 1.6, TEAL],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, now, 0.5)}><Glow color={CHALK} size={44} serif>now remove…</Glow></At>
      <At x={960} y={520} o={ramp(t, now, 0.5)}><Plate w={420} /></At>
      <At x={960} y={470} s={pop(t, fps, now + 0.1)}><RiceCake id="rcX" size={1.1} /></At>
      {items.map(([w, x, y, at, col], i) => {
        const off = ramp(t, at + 0.9, 1.0);
        return (
          <At key={w} x={x + (x < 960 ? -160 : 160) * off} y={y - 40 * off} o={ramp(t, now + 0.4 + i * 0.12, 0.4) * (1 - off)} blur={off * 6}>
            <div style={{ position: "relative" }}><Chip color={col} size={30}>{w}</Chip><Strike at={at} /></div>
          </At>
        );
      })}
      <At x={960} y={470} o={ramp(t, left, 0.5)} s={1.15}><RiceCake id="rcY" size={1.1} dashed /></At>
      <At x={960} y={330} s={pop(t, fps, left + 0.4)}><Glow color={GOLD} size={90} serif>?</Glow></At>
      <At x={960} y={720} o={ramp(t, left + 0.6, 0.5)}><Chip color={GOLD} size={32}>the rice cake itself?</Chip></At>
    </AbsoluteFill>
  );
};

const StoneAntScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const each = c("Each place you look yields more appearance"), stone = c("To a stone, nothing on the plate is food at all");
  const ant = c("To an ant, it is a mountain of sugar"), nf = c("apart from every way of meeting it is not found");
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, each)}><RiceCake id="rcS" /></At>
      <At x={960 + 120 * Math.cos(t * 1.2)} y={400 + 50 * Math.sin(t * 1.2)} o={ramp(t, each + 0.3, 0.5) * (1 - ramp(t, stone, 0.5))}><Magnifier size={0.8} /></At>
      {[0, 1, 2].map((i) => <At key={i} x={960 + (i - 1) * 200} y={200} s={pop(t, fps, each + 0.8 + i * 0.4)}><Chip color={[TEAL, ROSE, GOLD][i]} size={26}>{["soft", "sweet", "white"][i]}</Chip></At>)}
      <At x={360} y={470} s={pop(t, fps, stone)}><Stone size={0.9} /></At>
      <At x={360} y={620} o={ramp(t, stone + 0.4, 0.5)}><Chip color={DIM} size={28}>to a stone: not food</Chip></At>
      <At x={1560} y={360} s={pop(t, fps, ant)}>
        <svg width={300} height={220} viewBox="0 0 300 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px #FFF3D1aa)` }}>
          <path d="M10 210 Q80 30 150 20 Q220 30 290 210 Z" fill="#efe6cf" stroke="#fffaf0" strokeWidth={3} />
        </svg>
      </At>
      <At x={1560} y={520} o={ramp(t, ant + 0.2, 0.5)}><Ant size={0.8} /></At>
      <At x={1560} y={620} o={ramp(t, ant + 0.4, 0.5)}><Chip color={WARM} size={28}>to an ant: a mountain</Chip></At>
      <At x={960} y={700} o={ramp(t, nf - 0.2, 0.5)}><RiceCake id="rcN" size={0.7} dashed /></At>
      <Crossed x={960} y={700} at={nf + 0.8} size={70} />
      <At x={960} y={810} o={ramp(t, nf + 0.5, 0.5)}><Glow color={DIM} size={30}>apart from every meeting: not found</Glow></At>
    </AbsoluteFill>
  );
};

const CanvasScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nb = c("is not saying there is nothing but the mind's painting"), can = c("There is no blank canvas under the painting");
  const pain = c("no painter standing apart from it"), met = c("the painting is how anything is met at all");
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={nb} strikeAt={nb + 1.8} color={VIOLET} size={34}>nothing but the mind's painting</Struck>
      <At x={760} y={470} o={ramp(t, can - 0.2, 0.5)}>
        <div style={{ width: 400, height: 290, background: "#efe9dc", border: `3px dashed ${DIM}`, borderRadius: 6, transform: "translate(40px, 40px)", opacity: 0.6 }} />
      </At>
      <Crossed x={800} y={510} at={can + 1.2} size={110} />
      <PictureFrame x={720} y={430} w={420} h={300} o={ramp(t, can - 0.6, 0.5)} />
      <At x={720} y={430} o={ramp(t, can - 0.6, 0.5)}><RiceCake id="rcC" /></At>
      <At x={760} y={680} o={ramp(t, can + 0.4, 0.5)}><Glow color={DIM} size={28}>no blank canvas underneath</Glow></At>
      <At x={1380} y={430} o={ramp(t, pain - 0.2, 0.5)}><Ghost o={1} size={0.9} /></At>
      <Crossed x={1380} y={430} at={pain + 0.9} size={100} />
      <At x={1380} y={640} o={ramp(t, pain + 0.4, 0.5)}><Glow color={DIM} size={28}>no painter apart</Glow></At>
      <At x={960} y={790} s={pop(t, fps, met)}><Chip color={GOLD} size={34}>painting: how anything is met</Chip></At>
    </AbsoluteFill>
  );
};

const FeedsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const feeds = c("And the painted cake feeds"), eat = c("Eat it, and the hunger goes"), und = c("an unpainted cake must be doing the feeding underneath");
  const bite = ramp(t, eat, 2.0);
  return (
    <AbsoluteFill>
      <Head text="the painted cake feeds" at={feeds} y={90} size={68} />
      <PictureFrame x={760} y={430} w={440} h={300} o={ramp(t, feeds + 0.2, 0.5)} />
      <At x={760} y={430} s={pop(t, fps, feeds + 0.3)}><RiceCake id="rcF" bite={bite} /></At>
      <At x={1260} y={460} o={ramp(t, feeds + 0.6, 0.5)}><Meter level={0.85 - 0.8 * bite} /></At>
      <At x={1260} y={680} o={ramp(t, eat + 1.4, 0.5)}><Chip color={GREEN} size={30}>hunger gone</Chip></At>
      <At x={790} y={720} o={ramp(t, und - 0.2, 0.5)}><RiceCake id="rcU" size={0.8} dashed /></At>
      <Crossed x={790} y={720} at={und + 1.4} size={70} />
      <At x={1300} y={800} o={ramp(t, und + 0.3, 0.5)}><Glow color={DIM} size={28}>no unpainted cake beneath</Glow></At>
    </AbsoluteFill>
  );
};

const HungerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const step = c("goes one step further"), pt = c("The hunger is painted too"), named = c("Hunger is named together with the food");
  const fuel = c("just as fuel is fuel only as what fire burns"), nf = c("Neither comes first"), real = c("Yet hunger is no less real");
  const desk = c("It gets you up from the desk");
  const rise = ramp(t, desk + 0.3, 1.0);
  const spin = t * 60;
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, step, 0.5)}><Glow color={CHALK} size={40} serif>one step further</Glow></At>
      <PictureFrame x={420} y={300} w={300} h={180} o={ramp(t, pt, 0.5)} />
      <At x={420} y={300} s={pop(t, fps, pt + 0.2)}><Glow color={WARM} size={48} serif>hunger</Glow></At>
      <At x={760} y={520} s={pop(t, fps, named)}><Chip color={WARM} size={32}>hunger</Chip></At>
      <At x={1160} y={520} s={pop(t, fps, named + 0.4)}><Chip color={GOLD} size={32}>food</Chip></At>
      <Flow x1={860} y1={505} x2={1070} y2={505} color={WARM} p={ramp(t, named + 0.6, 0.6)} />
      <Flow x1={1070} y1={535} x2={860} y2={535} color={GOLD} p={ramp(t, named + 0.8, 0.6)} />
      <At x={1520} y={300} s={pop(t, fps, fuel)}>
        <div style={{ position: "relative", width: 260, height: 220 }}>
          <div style={{ position: "absolute", left: 0, top: -20 }}><Flames o={1} w={260} /></div>
          <svg width={260} height={220} viewBox="0 0 260 220" style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            <rect x={20} y={180} width={220} height={30} rx={14} fill="#6b4a2e" stroke={GOLD} strokeWidth={3} transform="rotate(-8 130 195)" />
            <rect x={20} y={180} width={220} height={30} rx={14} fill="#6b4a2e" stroke={GOLD} strokeWidth={3} transform="rotate(8 130 195)" />
          </svg>
        </div>
      </At>
      <At x={1520} y={480} o={ramp(t, fuel + 0.6, 0.5)}><Glow color={GOLD} size={28}>fuel, only as what fire burns</Glow></At>
      <At x={960} y={520} o={ramp(t, nf, 0.5)}>
        <svg width={520} height={260} viewBox="-260 -130 520 260" style={{ overflow: "visible" }}>
          <ellipse rx={240} ry={110} fill="none" stroke={VIOLET} strokeWidth={3} strokeDasharray="14 12" strokeDashoffset={-spin} />
        </svg>
      </At>
      <At x={960} y={640} o={ramp(t, nf + 0.3, 0.5)}><Glow color={VIOLET} size={30}>neither comes first</Glow></At>
      <At x={420} y={560} o={ramp(t, real, 0.5)}><Tick at={real + 0.2} /></At>
      <At x={420} y={630} o={ramp(t, real + 0.3, 0.5)}><Glow color={GREEN} size={28}>no less real</Glow></At>
      <At x={760} y={790} o={ramp(t, desk, 0.5)}>
        <div style={{ width: 260, height: 20, background: "#6b4a2e", border: `3px solid ${GOLD}`, borderRadius: 4 }} />
      </At>
      <At x={980} y={760 - 60 * rise} o={ramp(t, desk, 0.5)}>
        <svg width={90} height={150} viewBox="0 0 90 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ROSE})` }}>
          <circle cx={45} cy={24} r={20} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4} />
          <path d={`M45 46 L45 ${100 - 10 * (1 - rise)} M45 60 L15 ${80 + 10 * rise} M45 60 L75 ${80 + 10 * rise} M45 ${100 - 10 * (1 - rise)} L${25 + 15 * (1 - rise)} 145 M45 ${100 - 10 * (1 - rise)} L65 145`}
            stroke={ROSE} strokeWidth={5} fill="none" strokeLinecap="round" />
        </svg>
      </At>
      <At x={1300} y={790} o={ramp(t, desk + 0.6, 0.5)}><Glow color={ROSE} size={28}>it gets you up</Glow></At>
    </AbsoluteFill>
  );
};

const BurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wr = c("was not wrong to burn his notes"), use = c("He burned the use he had made of them"), better = c("The cure was not a better note");
  const peb = c("It was the pebble on the bamboo");
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, wr, 0.5)}><Glow color={CHALK} size={42} serif>not wrong to burn them</Glow></At>
      <At x={520} y={430} s={pop(t, fps, wr + 0.2)}><Notes burn={ramp(t, use + 0.8, 2.0)} /></At>
      <At x={520} y={400} o={ramp(t, use, 0.5) * (1 - ramp(t, better, 1))}><Flames o={1} /></At>
      <Struck x={520} y={660} at={use + 0.2} strikeAt={use + 2.0} color={GOLD} size={28}>notes as a substitute for seeing</Struck>
      <Struck x={520} y={780} at={better} strikeAt={better + 1.2} color={VIOLET} size={30}>a better note</Struck>
      <At x={1360} y={460} s={pop(t, fps, peb)}><Bamboo size={0.9} shake={ramp(t, peb + 0.5, 1.0)} /></At>
      <Ring x={1340} y={470} p={ramp(t, peb + 0.5, 1.0)} r0={10} r1={160} color={ICE} />
      <At x={1180} y={420} o={ramp(t, peb, 0.3) * (1 - ramp(t, peb + 0.5, 0.2))}><div style={{ width: 24, height: 20, borderRadius: "50%", background: "#a0a0aa" }} /></At>
      <At x={1360} y={790} o={ramp(t, peb + 0.6, 0.5)}><Chip color={GREEN} size={30}>the pebble on the bamboo</Chip></At>
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bey = c("But awakening does not lie beyond all painting"), snd = c("The sound of the pebble was painted too"), click = c("heard as a click");
  const esc = c("Realisation did not escape the painting"), dem = c("It saw through the demand for something behind it");
  const dGone = ramp(t, dem + 1.2, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, bey, 0.5)}><Glow color={CHALK} size={40} serif>not beyond all painting</Glow></At>
      <At x={1020} y={470} o={ramp(t, bey + 0.4, 0.5) * (1 - dGone)} blur={dGone * 10}>
        <div style={{ width: 480, height: 340, border: `3px dashed ${DIM}`, borderRadius: 8, background: "#efe9dc22", transform: "translate(60px, 40px)" }} />
      </At>
      <At x={1220} y={250} o={ramp(t, bey + 0.6, 0.5) * (1 - dGone)}><Glow color={DIM} size={26}>an unpainted ground?</Glow></At>
      <PictureFrame x={960} y={460} w={460} h={320} o={ramp(t, bey + 0.2, 0.5)} />
      <At x={900} y={470} s={pop(t, fps, snd)}><Bamboo size={0.5} shake={ramp(t, snd + 0.4, 1)} /></At>
      <Ring x={900} y={470} p={((t - snd) * 0.6) % 1} r0={10} r1={110} color={ICE} />
      <At x={1080} y={400} s={pop(t, fps, click)}><Glow color={ICE} size={40} serif>click</Glow></At>
      <At x={420} y={420} s={pop(t, fps, click + 0.6)}><Chip color={ICE} size={28}>a click</Chip></At>
      <At x={420} y={520} s={pop(t, fps, click + 1.2)}><Chip color={GOLD} size={28}>the end of a search</Chip></At>
      <Svg><DrawPath d="M1190 460 L1620 460" p={ramp(t, esc - 0.2, 0.6)} color={VIOLET} width={6} len={460} /></Svg>
      <At x={1640} y={400} o={ramp(t, esc, 0.5)}><Glow color={VIOLET} size={28}>escape?</Glow></At>
      <Crossed x={1500} y={460} at={esc + 1.0} size={60} />
      <At x={960} y={790} s={pop(t, fps, dem)}><Chip color={GREEN} size={32}>no demand for something behind</Chip></At>
    </AbsoluteFill>
  );
};

const MealScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const meal = c("Try this over one meal"), before = c("Before eating, notice how the food appears"), slow = c("look, slowly, for the food apart from its name");
  const hun = c("Look at the hunger the same way"), where = c("Where is it, apart from the food"), eat = c("Then put the looking down, and eat");
  const steps: [string, number, string][] = [["notice how it appears", before, GREEN], ["look for the food itself", slow, GOLD],
    ["look at the hunger", hun, WARM], ["put the looking down, eat", eat, TEAL]];
  const lookOn = Math.min(ramp(t, slow, 0.5), 1 - ramp(t, eat, 0.6));
  return (
    <AbsoluteFill>
      <At x={960} y={100} s={pop(t, fps, meal)}><Glow color={GOLD} size={48} serif>try it over one meal</Glow></At>
      <At x={560} y={520} o={ramp(t, meal + 0.3, 0.5)}>
        <svg width={420} height={260} viewBox="0 0 420 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${TEAL}88)` }}>
          <path d="M20 90 L400 90 Q380 240 210 250 Q40 240 20 90 Z" fill={`${TEAL}33`} stroke={TEAL} strokeWidth={5} strokeLinejoin="round" />
          <ellipse cx={210} cy={90} rx={190} ry={34} fill="#efe6cf" stroke="#fffaf0" strokeWidth={3} />
          {[0, 1, 2].map((i) => {
            const p = ((t * 0.4 + i / 3) % 1);
            return <path key={i} d={`M${150 + i * 60} ${60 - p * 60} q -14 -20 0 -40 q 14 -20 0 -40`} fill="none" stroke={ICE} strokeWidth={4} opacity={Math.sin(p * Math.PI) * 0.7} transform={`translate(0 ${-p * 30})`} />;
          })}
        </svg>
      </At>
      <At x={560 + 140 * Math.sin(t * 1.1)} y={420} o={lookOn}><Magnifier size={0.8} /></At>
      <At x={560} y={760} o={ramp(t, where, 0.5) * (1 - ramp(t, eat, 0.6))}><Glow color={WARM} size={28}>food? stomach? the hour?</Glow></At>
      <At x={560} y={760} o={ramp(t, eat + 0.6, 0.5)}><Glow color={GREEN} size={30}>and eat</Glow></At>
      {steps.map(([w, at, col], i) => (
        <At key={w} x={1360} y={270 + i * 140} s={pop(t, fps, at)}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 54, height: 54, borderRadius: "50%", border: `3px solid ${col}`, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: SERIF, fontSize: 34, color: col, boxShadow: `0 0 14px ${col}88` }}>{i + 1}</div>
            <Chip color={col} size={30}>{w}</Chip>
          </div>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sat = c("The meal is exactly as satisfying as before"), three = c("Painted food, painted hunger, painted satisfaction"), nm = c("and nothing missing");
  const items: [string, string][] = [["food", GOLD], ["hunger", WARM], ["satisfaction", GREEN]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sat, 0.5)}><Glow color={CHALK} size={42} serif>exactly as satisfying</Glow></At>
      {items.map(([w, col], i) => (
        <React.Fragment key={w}>
          <PictureFrame x={480 + i * 480} y={430} w={380} h={260} o={ramp(t, three + i * 0.8, 0.5)} />
          <At x={480 + i * 480} y={400} s={pop(t, fps, three + i * 0.8 + 0.2)}>
            {i === 0 ? <RiceCake id="rcZ" size={0.8} bite={ramp(t, sat + 0.5, 2)} /> : <Glow color={col} size={52} serif>{w}</Glow>}
          </At>
          <At x={480 + i * 480} y={520} o={ramp(t, three + i * 0.8 + 0.4, 0.5)}><Glow color={col} size={28}>painted {w}</Glow></At>
        </React.Fragment>
      ))}
      <At x={960} y={720} o={ramp(t, nm, 0.4)}><div style={{ display: "flex", gap: 16, alignItems: "center" }}><Tick at={nm + 0.1} /><Glow color={GREEN} size={46} serif>nothing missing</Glow></div></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["cake", 0], ["monk", c("famous for his learning", 0.6)], ["paint", c("turns the saying over", 0.6)],
    ["look", c("Look for the unpainted one", 0.6)], ["paint", c("is not saying there is nothing but the mind's painting", 0.6)],
    ["hunger", c("goes one step further", 0.6)], ["monk", c("was not wrong to burn his notes", 0.6)],
    ["paint", c("But awakening does not lie beyond all painting", 0.6)], ["meal", c("Try this over one meal", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("famous for his learning", 0.9)], <CakeScene />],
    [S("famous for his learning", "Years later, sweeping a path"), <NotesScene />],
    [S("Years later, sweeping a path", "turns the saying over"), <BambooScene />],
    [S("turns the saying over", "He is not praising study over practice"), <TurnScene />],
    [S("He is not praising study over practice", "Look for the unpainted one"), <RefuseScene />],
    [S("Look for the unpainted one", "Now remove that"), <LookScene />],
    [S("Now remove that", "Each place you look yields more appearance"), <RemoveScene />],
    [S("Each place you look yields more appearance", "is not saying there is nothing but the mind's painting"), <StoneAntScene />],
    [S("is not saying there is nothing but the mind's painting", "And the painted cake feeds"), <CanvasScene />],
    [S("And the painted cake feeds", "goes one step further"), <FeedsScene />],
    [S("goes one step further", "was not wrong to burn his notes"), <HungerScene />],
    [S("was not wrong to burn his notes", "But awakening does not lie beyond all painting"), <BurnScene />],
    [S("But awakening does not lie beyond all painting", "Try this over one meal"), <BeyondScene />],
    [S("Try this over one meal", "The meal is exactly as satisfying as before"), <MealScene />],
    [S("The meal is exactly as satisfying as before", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
