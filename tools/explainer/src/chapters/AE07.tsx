// Anatta to Emptiness, Chapter 7: The Chariot Comes Alive, Part Two. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "nothing needs to be found beneath", "ordinary seeing and hearing",
  "Sight, sound, taste and touch", "one shared stuff", "the way clay stays clay", "Hearing carries no trace of sight",
  "Taste carries nothing of sound", "Each is complete",
  "If a common substance", "call it awareness or presence", "A shared flavour", "The author went looking", "among its wheels",
  "Nothing was found", "Not a subtle glow", "Not a background hum",
  "the search succeeding", "no one stands behind", "nothing stands beneath them",
  "something strange", "Water growing warmer", "something persists through it", "from hearing to seeing", "Nothing persists",
  "no boundary to cross",
  "Now look at an apple", "Colour, texture, smell", "weight in the hand", "the word apple", "They arrive together",
  "Even here and now", "They arrive with the apple",
  "Search for what", "Not the colour alone", "Not a heap of qualities", "Nothing apart from them", "never a hidden bearer",
  "the apple does not hesitate", "fully vivid", "fully unfindable", "designated together", "Nothing behind it does the work",
  "the old images of a mirage", "the moon in still water", "secretly false", "nothing holding it up", "one fact, seen twice",
  "Ask why it appears here", "no answer comes", "assumes a gap", "With no gap", "the question is retired",
  "an older puzzle", "A bell is struck", "Air moves", "a hearing occurs", "two banks of a vast canyon", "What carries the sound across",
  "not two finished things", "They arise together", "Matter and feeling", "described in two languages", "No bridge is needed",
  "the two banks were never there", "This does not explain", "the demand for a connector",
  "One habit remains", "comes from nowhere", "only with a blank", "does not apply", "no first place",
  "a new foundation", "carries the analysis further", "Even dependent arising is empty",
  "Nothing behind, nothing beneath", "the apple is here",
];

const AMBER = "#D9A441", INDIGO = "#7C7CF2";

const M = {
  senses: { a: "rgba(40,110,140,0.48)", b: "rgba(180,130,45,0.4)", c: "rgba(70,55,160,0.4)" },
  search: { a: "rgba(35,40,130,0.6)", b: "rgba(200,140,40,0.36)", c: "rgba(30,90,130,0.3)" },
  apple: { a: "rgba(170,60,80,0.4)", b: "rgba(190,140,50,0.42)", c: "rgba(60,50,150,0.4)" },
  mirage: { a: "rgba(190,140,50,0.48)", b: "rgba(60,60,170,0.48)", c: "rgba(40,120,140,0.32)" },
  canyon: { a: "rgba(70,50,160,0.52)", b: "rgba(170,110,40,0.42)", c: "rgba(40,90,120,0.3)" },
  open: { a: "rgba(50,45,150,0.55)", b: "rgba(200,150,50,0.45)", c: "rgba(60,140,130,0.32)" },
};

// ---------------------------------------------------------------- drawings
const Eye: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={150} height={90} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
);
const Note: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={100} height={110} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={color} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={color} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={color} />
  </svg>
);
const Drop: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={90} height={120} viewBox="0 0 90 120" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M45 8 Q80 60 78 80 Q76 112 45 112 Q14 112 12 80 Q10 60 45 8 Z" fill={`${color}44`} stroke={color} strokeWidth={5} />
  </svg>
);
const Apple: React.FC<{ size?: number; dash?: boolean; glow?: number }> = ({ size = 300, dash, glow = 0.5 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${10 + 30 * glow}px ${ROSE})` }}>
    <defs><radialGradient id="ap7" cx="0.38" cy="0.35"><stop offset="0" stopColor="#FFC2B0" /><stop offset="0.45" stopColor="#E0504E" /><stop offset="1" stopColor="#7A1F2E" /></radialGradient></defs>
    <path d="M100 52 C70 30 22 40 24 100 C26 150 62 186 86 182 C94 180 98 176 100 176 C102 176 106 180 114 182 C138 186 174 150 176 100 C178 40 130 30 100 52 Z"
      fill={dash ? "none" : "url(#ap7)"} stroke={dash ? ROSE : "#FF9C8C"} strokeWidth={dash ? 4 : 3} strokeDasharray={dash ? "12 9" : undefined} />
    <path d="M100 54 Q98 30 108 14" stroke={AMBER} strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M106 30 Q130 8 152 22 Q132 42 106 30 Z" fill={dash ? "none" : `${GREEN}cc`} stroke={GREEN} strokeWidth={3} strokeDasharray={dash ? "8 6" : undefined} />
  </svg>
);
const Bell: React.FC = () => (
  <svg width={180} height={190} viewBox="0 0 200 210" style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }}>
    <path d="M100 18 Q50 22 48 100 Q46 140 22 160 L178 160 Q154 140 152 100 Q150 22 100 18 Z" fill={`${AMBER}55`} stroke={GOLD} strokeWidth={6} strokeLinejoin="round" />
    <circle cx={100} cy={176} r={16} fill={GOLD} /><circle cx={100} cy={12} r={9} fill="none" stroke={GOLD} strokeWidth={5} />
  </svg>
);
const Ear: React.FC = () => (
  <svg width={120} height={170} viewBox="0 0 130 180" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M40 150 Q20 130 30 110 Q40 92 30 70 Q22 20 72 14 Q118 14 112 66 Q108 96 84 110 Q70 120 72 140 Q72 168 46 166"
      fill={`${ROSE}22`} stroke={ROSE} strokeWidth={6} strokeLinecap="round" />
    <path d="M58 70 Q60 46 78 48 Q94 52 88 74 Q82 88 70 90" fill="none" stroke={ROSE} strokeWidth={5} strokeLinecap="round" />
  </svg>
);
const Lens: React.FC = () => (
  <svg width={160} height={160} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.14)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);
const Wheel: React.FC<{ size: number; color?: string; dash?: boolean }> = ({ size, color = GOLD, dash }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
      <circle r={52} fill={`${color}18`} stroke={color} strokeWidth={6} strokeDasharray={dash ? "10 8" : undefined} />
      <g transform={`rotate(${t * 40})`}>{Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-48} stroke={color} strokeWidth={4} transform={`rotate(${i * 45})`} />)}</g>
      <circle r={8} fill={color} />
    </svg>
  );
};
const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};
const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };
const Centre: React.FC<{ y: number; children: React.ReactNode }> = ({ y, children }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);
const SENSES: [string, string, React.ReactNode][] = [
  ["sight", TEAL, <Eye color={TEAL} />], ["sound", GOLD, <Note color={GOLD} />], ["taste", ROSE, <Drop color={ROSE} />], ["touch", VIOLET, <Hand size={120} />],
];

// ---------------------------------------------------------------- scenes
const SensesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s0 = c("Sight, sound, taste and touch"), clay = c("the way clay stays clay"), trace = c("Hearing carries no trace of sight"),
    taste = c("Taste carries nothing of sound"), comp = c("Each is complete");
  const intro = 1 - ramp(t, s0 - 0.3, 0.6);
  const morph = (Math.sin((t - clay) * 2) + 1) / 2;
  const apart = ramp(t, trace, 1.0);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: intro }}>
        <At x={760} y={420} s={pop(t, fps, c("nothing needs to be found beneath", 0.3))}><Wheel size={260} /></At>
        <At x={760} y={620} o={ramp(t, c("nothing needs to be found beneath"), 0.5)}><Glow color={GOLD} size={36}>nothing beneath its parts</Glow></At>
        <At x={1260} y={360} s={pop(t, fps, c("ordinary seeing and hearing"))}><Eye /></At>
        <At x={1260} y={520} s={pop(t, fps, c("ordinary seeing and hearing") + 0.3)}><Note /></At>
        <Flow x1={900} y1={420} x2={1160} y2={420} color={GOLD} p={ramp(t, c("ordinary seeing and hearing"), 0.5)} />
      </AbsoluteFill>
      {SENSES.map(([w, col, icon], i) => {
        const x = 420 + i * 360 + (i - 1.5) * 60 * apart;
        return <React.Fragment key={i}>
          <At x={x} y={300} s={pop(t, fps, s0 + i * 0.25)}>{icon}</At>
          <At x={x} y={410} o={ramp(t, s0 + i * 0.25 + 0.2, 0.4)}><Glow color={col} size={34} serif>{w}</Glow></At>
          <Ring x={x} y={330} p={ramp(t, comp + i * 0.15, 1.2)} r0={60} r1={160} color={col} />
        </React.Fragment>;
      })}
      <AbsoluteFill style={{ opacity: between(t, c("one shared stuff") - 0.2, trace, 0.5) }}>
        <At x={960} y={640}>
          <div style={{ width: 160, height: 160, background: `radial-gradient(circle at 35% 30%, #E7B98A, #A0663A)`, boxShadow: `0 0 30px ${AMBER}`,
            borderRadius: `${50 * (1 - morph) + 8 * morph}%`, transform: `rotate(${morph * 10}deg)` }} />
        </At>
        <At x={960} y={790}><Glow color={AMBER} size={32}>one clay · ball or cube</Glow></At>
        {SENSES.map(([, col], i) => <Flow key={i} x1={420 + i * 360} y1={450} x2={960} y2={570} color={col} p={ramp(t, clay + 0.3, 0.6)} dash pulses={false} />)}
        <Crossed x={960} y={640} at={clay + 1.6} size={90} />
      </AbsoluteFill>
      <At x={600} y={620} o={ramp(t, trace + 0.2, 0.4)}><Chip color={GOLD} size={30}>hearing · no trace of sight</Chip></At>
      <At x={1320} y={620} o={ramp(t, taste, 0.4)}><Chip color={ROSE} size={30}>taste · nothing of sound</Chip></At>
      <At x={960} y={780} o={ramp(t, comp, 0.5)}><Glow color={CHALK} size={42} serif>each complete, exactly itself</Glow></At>
    </AbsoluteFill>
  );
};

const SubstrateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("If a common substance"), look = c("The author went looking"), found = c("Nothing was found");
  const gone = ramp(t, found + 0.2, 1.2);
  const lx = 300 + 1320 * ramp(t, look, 3.0);
  const beh = c("no one stands behind"), ben = c("nothing stands beneath them");
  return (
    <AbsoluteFill>
      {SENSES.map(([w, col, icon], i) => (
        <React.Fragment key={i}>
          <At x={420 + i * 360} y={280}>{icon}</At>
          <At x={420 + i * 360} y={390}><Glow color={col} size={30} serif>{w}</Glow></At>
          <Flow x1={420 + i * 360} y1={420} x2={420 + i * 360} y2={570} color={AMBER} p={ramp(t, c("A shared flavour"), 0.6) * (1 - gone)} dash pulses={false} />
        </React.Fragment>
      ))}
      <At x={960} y={620} s={pop(t, fps, sub)} o={1 - gone}>
        <div style={{ width: 1500, height: 90, borderRadius: 14, background: `linear-gradient(90deg, ${AMBER}22, ${AMBER}66, ${INDIGO}55, ${AMBER}22)`,
          border: `3px solid ${AMBER}`, boxShadow: `0 0 40px ${AMBER}66`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={CHALK} size={34}>a common substance?</Glow></div>
      </At>
      <At x={960} y={720} o={ramp(t, c("call it awareness or presence"), 0.4) * (1 - gone)}><Glow color={DIM} size={30}>“awareness” · “presence”</Glow></At>
      <At x={lx} y={600} o={between(t, look, found + 0.4, 0.4)}><Lens /></At>
      <At x={960} y={620} o={ramp(t, found, 0.5) * (1 - ramp(t, c("the search succeeding") - 0.3, 0.4))}><Glow color={ICE} size={52} serif>nothing found</Glow></At>
      <StruckChip x={620} y={760} at={c("Not a subtle glow")} strikeAt={c("Not a subtle glow") + 0.7} color={DIM} size={30}>a subtle glow</StruckChip>
      <StruckChip x={1300} y={760} at={c("Not a background hum")} strikeAt={c("Not a background hum") + 0.7} color={DIM} size={30}>a background hum</StruckChip>
      <At x={960} y={140} o={ramp(t, c("the search succeeding"), 0.5)}><Glow color={GOLD} size={44} serif>the search, succeeding</Glow></At>
      <At x={960} y={620} o={ramp(t, beh, 0.4)}><Chip color={TEAL} size={32}>no one behind</Chip></At>
      <At x={960} y={700} o={ramp(t, ben, 0.4)}><Chip color={GOLD} size={32}>nothing beneath</Chip></At>
    </AbsoluteFill>
  );
};

const SeamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("Water growing warmer"), sw = c("from hearing to seeing");
  const heat = ((t - w) * 0.35) % 1;
  const which = Math.floor(Math.max(0, t - sw) / 1.1) % 2;
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("something strange", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>two kinds of seamless</Glow></At>
      <At x={560} y={440} s={pop(t, fps, w)}>
        <svg width={260} height={300} viewBox="0 0 260 300" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
          <path d="M40 30 L60 280 L200 280 L220 30" fill="none" stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
          <path d="M48 110 L60 280 L200 280 L212 110 Z" fill={`rgb(${80 + 170 * heat},${140 - 40 * heat},${230 - 170 * heat})`} opacity={0.7} />
          {Array.from({ length: 5 }).map((_, i) => <circle key={i} cx={80 + i * 25} cy={260 - ((t * 60 + i * 37) % 140)} r={4 + heat * 4} fill="#fff" opacity={0.5 * heat} />)}
        </svg>
      </At>
      <Svg style={{ opacity: ramp(t, c("something persists through it"), 0.5) }}>
        <path d="M360 640 C460 600 660 680 760 640" stroke={GOLD} strokeWidth={6} fill="none" strokeDasharray="1 0" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
      </Svg>
      <At x={560} y={720} o={ramp(t, c("something persists through it"), 0.5)}><Glow color={GOLD} size={32}>something persists</Glow></At>
      <At x={1360} y={440} s={pop(t, fps, sw)}>
        <div style={{ width: 240, height: 240, borderRadius: "50%", border: `3px solid ${which ? TEAL : GOLD}`, display: "flex", alignItems: "center",
          justifyContent: "center", boxShadow: `0 0 30px ${which ? TEAL : GOLD}` }}>{which ? <Eye /> : <Note />}</div>
      </At>
      <At x={1360} y={630} o={ramp(t, sw + 0.3, 0.4)}><Glow color={which ? TEAL : GOLD} size={34} serif>{which ? "seeing" : "hearing"}</Glow></At>
      <At x={1360} y={720} o={ramp(t, c("Nothing persists"), 0.5)}><Glow color={ICE} size={32}>nothing persists</Glow></At>
      <At x={1360} y={790} o={ramp(t, c("no boundary to cross"), 0.5)}><Chip color={ICE} size={28}>no boundary to cross</Chip></At>
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tog = c("They arrive together"), hn = c("Even here and now"), with_ = c("They arrive with the apple");
  const quals: [string, string, number, number, number][] = [
    ["colour", ROSE, 520, 300, c("Colour, texture, smell")], ["texture", AMBER, 480, 560, c("Colour, texture, smell") + 0.4],
    ["smell", GREEN, 1440, 300, c("Colour, texture, smell") + 0.8], ["weight", VIOLET, 1480, 560, c("weight in the hand")],
  ];
  const fly = ramp(t, tog, 0.9);
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, tog)}><Apple size={300} glow={0.6 + 0.4 * ramp(t, tog, 0.8)} /></At>
      <At x={960} y={430} o={ramp(t, c("Now look at an apple", 0.3), 0.5) * (1 - ramp(t, tog, 0.3))}><Apple size={300} dash /></At>
      {quals.map(([w, col, x, y, at], i) => (
        <At key={i} x={x + (960 - x) * fly * 0.45} y={y + (430 - y) * fly * 0.45} s={pop(t, fps, at)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <At x={960 + 380 * (1 - fly)} y={160 + 60 * fly} s={pop(t, fps, c("the word apple"))}><Glow color={GOLD} size={50} serif>“apple”</Glow></At>
      <Ring x={960} y={430} p={ramp(t, tog, 1.4)} r0={150} r1={420} color={GOLD} />
      <At x={960} y={790} o={ramp(t, tog + 0.3, 0.5) * (1 - ramp(t, hn - 0.2, 0.4))}><Glow color={GOLD} size={40} serif>all at once · no seam</Glow></At>
      <At x={960} y={700} o={between(t, hn - 0.1, with_ + 0.2, 0.4)}>
        <div style={{ position: "relative", width: 640, height: 60, borderRadius: 8, border: `2px solid ${INDIGO}`, background: `${INDIGO}33`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={CHALK} size={28}>a stage of here and now, set up first?</Glow></div>
      </At>
      <Crossed x={960} y={700} at={hn + 1.2} size={50} />
      <At x={720} y={720} s={pop(t, fps, with_)}><Chip color={INDIGO} size={32}>here</Chip></At>
      <At x={1200} y={720} s={pop(t, fps, with_ + 0.2)}><Chip color={INDIGO} size={32}>now</Chip></At>
      <At x={960} y={800} o={ramp(t, with_ + 0.4, 0.5)}><Glow color={CHALK} size={32}>arriving with the apple</Glow></At>
    </AbsoluteFill>
  );
};

const BearerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s = c("Search for what"), col = c("Not the colour alone"), heap = c("Not a heap of qualities"), apart = c("Nothing apart from them"),
    bear = c("never a hidden bearer");
  const lensA = ramp(t, s, 2.0) * Math.PI * 2;
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, s, 0.4)}><Glow color={CHALK} size={42} serif>what do the qualities belong to?</Glow></At>
      <At x={760} y={440} s={pop(t, fps, s - 0.3)}><Apple size={260} /></At>
      <At x={760 + 160 * Math.cos(lensA)} y={440 + 120 * Math.sin(lensA)} o={between(t, s, bear, 0.4)}><Lens /></At>
      <StruckChip x={1360} y={300} at={col} strikeAt={col + 1.0} color={ROSE} size={30}>the colour alone</StruckChip>
      <At x={1360} y={460} o={ramp(t, heap, 0.4)}>
        <div style={{ position: "relative", width: 300, height: 120 }}>
          {["colour", "taste", "smell", "texture"].map((w, i) => <div key={i} style={{ position: "absolute", left: 20 + (i % 2) * 120 + i * 8, top: 10 + Math.floor(i / 2) * 50,
            transform: `rotate(${(rand(i) - 0.5) * 20}deg)` }}><Chip color={[ROSE, GOLD, GREEN, AMBER][i]} size={22}>{w}</Chip></div>)}
          <Strike at={heap + 1.0} />
        </div>
      </At>
      <At x={1360} y={640} s={pop(t, fps, apart)}>
        <div style={{ width: 150, height: 150, borderRadius: "50%", border: `3px dashed ${ICE}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={ICE} size={60} serif>?</Glow></div>
      </At>
      <Crossed x={1360} y={640} at={apart + 1.2} size={60} />
      <At x={760} y={700} o={ramp(t, bear, 0.5)}><Glow color={GOLD} size={40} serif>no hidden bearer</Glow></At>
      <At x={760} y={770} o={ramp(t, bear + 0.4, 0.5)}><Glow color={DIM} size={28}>as with the chariot</Glow></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("fully vivid"), u = c("fully unfindable"), d = c("designated together"), nb = c("Nothing behind it does the work");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("the apple does not hesitate", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>the apple does not hesitate</Glow></At>
      <At x={960} y={450} s={pop(t, fps, c("the apple does not hesitate"))}><Apple size={320} glow={0.5 + 0.5 * ramp(t, v, 0.6)} /></At>
      <At x={960} y={450} o={ramp(t, u, 0.6) * (0.6 + 0.4 * Math.sin(t * 3))}><div style={{ transform: "scale(1.12)" }}><Apple size={320} dash /></div></At>
      <At x={560} y={450} o={ramp(t, v, 0.4)}><Glow color={ROSE} size={46} serif>fully vivid</Glow></At>
      <At x={1380} y={450} o={ramp(t, u, 0.4)}><Glow color={ICE} size={46} serif>fully unfindable</Glow></At>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2 + t * 0.3;
        return <At key={i} x={960 + 270 * Math.cos(a)} y={450 + 220 * Math.sin(a)} s={pop(t, fps, d + i * 0.06)}><Orb size={26} color={[GOLD, TEAL, INDIGO, GREEN][i % 4]} /></At>;
      })}
      <At x={960} y={720} o={ramp(t, d + 0.3, 0.5)}><Glow color={GOLD} size={34}>conditions and appearing, designated together</Glow></At>
      <StruckChip x={960} y={800} at={nb} strikeAt={nb + 1.0} color={DIM} size={30}>a hidden worker behind it</StruckChip>
    </AbsoluteFill>
  );
};

const MirageScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mir = c("the old images of a mirage"), moon = c("the moon in still water"), hold = c("nothing holding it up"), one = c("one fact, seen twice");
  const half = 1 - ramp(t, hold - 0.3, 0.5);
  const merge = ramp(t, one, 1.2);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: half }}>
        <At x={560} y={420} s={pop(t, fps, mir)}>
          <svg width={560} height={340} viewBox="0 0 560 340" style={{ overflow: "visible" }}>
            <circle cx={420} cy={70} r={42} fill={GOLD} style={{ filter: `drop-shadow(0 0 20px ${GOLD})` }} />
            <path d="M0 200 Q140 170 280 200 T560 200 L560 340 L0 340 Z" fill={`${AMBER}55`} stroke={AMBER} strokeWidth={4} />
            {[0, 1, 2, 3].map((k) => <path key={k} d={Array.from({ length: 29 }, (_, i) => `${i ? "L" : "M"}${80 + i * 14} ${232 + k * 14 + 4 * Math.sin(i * 0.9 + t * 4 + k)}`).join(" ")}
              stroke={ICE} strokeWidth={4} fill="none" opacity={0.75 - k * 0.15} />)}
          </svg>
        </At>
        <At x={560} y={650} o={ramp(t, mir + 0.3, 0.4)}><Glow color={AMBER} size={34} serif>a mirage</Glow></At>
        <At x={1360} y={420} s={pop(t, fps, moon)}>
          <svg width={460} height={360} viewBox="0 0 460 360" style={{ overflow: "visible" }}>
            <circle cx={230} cy={80} r={56} fill="#F4EFD8" style={{ filter: `drop-shadow(0 0 24px ${ICE})` }} />
            <rect x={0} y={180} width={460} height={180} rx={12} fill={`${INDIGO}44`} />
            <ellipse cx={230} cy={270} rx={56 + 4 * Math.sin(t * 2)} ry={50} fill="#F4EFD8" opacity={0.5} />
            {[0, 1, 2].map((k) => <ellipse key={k} cx={230} cy={270} rx={80 + k * 40} ry={14 + k * 6} fill="none" stroke={ICE} strokeWidth={2} opacity={0.4} />)}
          </svg>
        </At>
        <At x={1360} y={650} o={ramp(t, moon + 0.3, 0.4)}><Glow color={ICE} size={34} serif>the moon in water</Glow></At>
        <StruckChip x={960} y={790} at={c("secretly false")} strikeAt={c("secretly false") + 0.8} color={DIM} size={30}>secretly false</StruckChip>
      </AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, hold)} o={1 - half}><Apple size={260} glow={1} /></At>
      <At x={960} y={600} o={between(t, hold, hold + 1.6, 0.4)}>
        <div style={{ width: 300, height: 40, borderRadius: 6, background: `${AMBER}55`, border: `2px solid ${AMBER}` }} />
      </At>
      <At x={960} y={660} o={between(t, hold + 0.3, one - 0.2, 0.4)}><Glow color={DIM} size={28}>nothing holding it up</Glow></At>
      <At x={960 - 170 * (1 - merge)} y={400} o={ramp(t, one, 0.4)}>
        <div style={{ width: 380, height: 380, borderRadius: "50%", border: `4px solid ${ROSE}`, boxShadow: `0 0 30px ${ROSE}` }} /></At>
      <At x={960 + 170 * (1 - merge)} y={400} o={ramp(t, one, 0.4)}>
        <div style={{ width: 380, height: 380, borderRadius: "50%", border: `4px dashed ${ICE}`, boxShadow: `0 0 30px ${ICE}` }} /></At>
      <At x={960} y={700} o={ramp(t, one + 0.4, 0.5)}><Glow color={GOLD} size={44} serif>one fact, seen twice</Glow></At>
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gap = c("assumes a gap"), nogap = c("With no gap"), ret = c("the question is retired");
  const close = ramp(t, nogap, 1.0);
  const early = Math.min(gap, c("no answer comes") + 0.8);
  return (
    <AbsoluteFill>
      <Centre y={110}><Reveal text="why here? why now?" at={c("Ask why it appears here")} size={76} /></Centre>
      <At x={960} y={250} o={ramp(t, c("no answer comes"), 0.4)}><Glow color={DIM} size={30}>no answer comes</Glow></At>
      <At x={560 + 250 * close} y={480} s={pop(t, fps, early)}><Chip color={TEAL} size={40}>conditions</Chip></At>
      <At x={1360 - 250 * close} y={480} s={pop(t, fps, early + 0.2)}><Chip color={ROSE} size={40}>appearing</Chip></At>
      <At x={960} y={480} o={ramp(t, gap + 0.6, 0.4) * (1 - close)}>
        <div style={{ width: 260, height: 120, border: `3px dashed ${WARM}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={WARM} size={28}>explanation?</Glow></div>
      </At>
      <Ring x={960} y={480} p={ramp(t, nogap + 0.8, 1.2)} r0={120} r1={420} color={GOLD} />
      <At x={960} y={620} o={ramp(t, nogap + 0.6, 0.4)}><Glow color={GOLD} size={36}>no gap to fill</Glow></At>
      <At x={960} y={760} s={pop(t, fps, ret)} r={-6}>
        <div style={{ padding: "10px 40px", border: `5px solid ${AMBER}`, borderRadius: 10, fontFamily: "SourceSans", fontWeight: 800, fontSize: 52,
          letterSpacing: 8, color: AMBER, textShadow: `0 0 18px ${AMBER}` }}>RETIRED</div>
      </At>
    </AbsoluteFill>
  );
};

const CanyonScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const struck = c("A bell is struck"), canyon = c("two banks of a vast canyon"), carry = c("What carries the sound across"),
    nf = c("not two finished things"), mf = c("Matter and feeling"), never = c("the two banks were never there"), conn = c("the demand for a connector");
  const showCanyon = between(t, canyon - 0.2, never + 1.2, 0.6);
  const swing = Math.sin(t * 9) * 8 * between(t, struck, struck + 2.5, 0.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("an older puzzle", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>an older puzzle</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, canyon - 0.3, 0.5) }}>
        <At x={560} y={440} s={pop(t, fps, struck)} r={swing}><Bell /></At>
        {[0, 1, 2].map((k) => <Ring key={k} x={600} y={440} p={t > c("Air moves") ? ((t - c("Air moves")) * 0.6 + k / 3) % 1 : 0} r0={60} r1={420} color={ICE} />)}
        <At x={1360} y={440} s={pop(t, fps, c("a hearing occurs"))}><Ear /></At>
        <At x={1360} y={620} o={ramp(t, c("a hearing occurs") + 0.3, 0.4)}><Glow color={ROSE} size={34}>a hearing?</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: showCanyon }}>
        <Svg>
          <path d="M0 360 L560 360 L600 420 L580 520 L620 640 L590 820 L0 820 Z" fill={`${AMBER}44`} stroke={AMBER} strokeWidth={5} />
          <path d="M1920 360 L1360 360 L1320 430 L1350 540 L1300 660 L1330 820 L1920 820 Z" fill={`${INDIGO}44`} stroke={INDIGO} strokeWidth={5} />
          <DrawPath d="M560 360 Q960 420 1360 360" p={ramp(t, carry, 1.0)} color={WARM} width={5} len={900} />
        </Svg>
        <At x={300} y={300}><Glow color={AMBER} size={40} serif>the physical</Glow></At>
        <At x={1640} y={300}><Glow color={INDIGO} size={40} serif>the felt</Glow></At>
        <At x={960} y={460} o={ramp(t, carry + 0.5, 0.4)}><Glow color={WARM} size={64} serif>?</Glow></At>
      </AbsoluteFill>
      <At x={960} y={640} s={pop(t, fps, nf)} o={1 - ramp(t, mf, 0.5)}>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}><Wheel size={140} /><Glow color={GOLD} size={34}>wheel · chariot · arising together</Glow></div>
      </At>
      <At x={960} y={560} s={pop(t, fps, mf)} o={ramp(t, mf, 0.5)}>
        <div style={{ width: 300, height: 300, borderRadius: "50%", background: `conic-gradient(${AMBER}88, ${INDIGO}88, ${AMBER}88)`,
          boxShadow: `0 0 50px ${GOLD}66`, border: `3px dashed ${GOLD}`, transform: `rotate(${t * 20}deg)` }} />
      </At>
      <At x={960} y={560} o={ramp(t, mf + 0.3, 0.5)}><Glow color={CHALK} size={32}>one empty event</Glow></At>
      <At x={620} y={560} o={ramp(t, c("described in two languages"), 0.4)}><Chip color={AMBER} size={28}>language of matter</Chip></At>
      <At x={1300} y={560} o={ramp(t, c("described in two languages") + 0.3, 0.4)}><Chip color={INDIGO} size={28}>language of feeling</Chip></At>
      <At x={960} y={790} o={between(t, never, c("This does not explain") - 0.1, 0.4)}><Glow color={GOLD} size={38} serif>no banks, no bridge needed</Glow></At>
      <At x={960} y={250} o={ramp(t, c("This does not explain"), 0.4)}><Chip color={DIM} size={28}>why hearing feels like anything · left open</Chip></At>
      <StruckChip x={960} y={790} at={conn - 0.3} strikeAt={conn + 0.8} color={WARM} size={32}>a connector</StruckChip>
    </AbsoluteFill>
  );
};

const NowhereScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nw = c("comes from nowhere"), bl = c("only with a blank"), na = c("does not apply"), fp = c("no first place");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("One habit remains", 0.3), 0.5)}><Glow color={CHALK} size={40}>one habit remains</Glow></At>
      <At x={960} y={420} s={pop(t, fps, nw - 0.2)}>
        <div style={{ padding: "30px 50px", borderRadius: 16, border: `3px solid ${INDIGO}`, background: `${INDIGO}22`, boxShadow: `0 0 30px ${INDIGO}66`,
          textAlign: "left", fontFamily: "SourceSans", fontSize: 44, color: CHALK }}>
          <div>appearance comes from:</div>
          <div style={{ marginTop: 16, display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ opacity: ramp(t, nw, 0.4), color: ICE, textShadow: `0 0 14px ${ICE}` }}>nowhere</span>
            <span style={{ display: "inline-block", width: 260 * ramp(t, bl, 0.6), height: 4, background: GOLD, boxShadow: `0 0 10px ${GOLD}` }} />
          </div>
        </div>
      </At>
      <At x={1440} y={420} o={ramp(t, bl + 0.4, 0.4)}><Glow color={GOLD} size={32}>still answering “where?”</Glow></At>
      <Crossed x={960} y={420} at={na + 0.2} size={140} />
      <At x={960} y={640} o={ramp(t, na + 0.5, 0.4)}><Glow color={ICE} size={42} serif>the question does not apply</Glow></At>
      <At x={960} y={770} s={pop(t, fps, fp)}>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div style={{ width: 70, height: 70, borderRadius: "50%", border: `3px dashed ${DIM}`, opacity: 1 - 0.7 * ramp(t, fp + 0.6, 1.0) }} />
          <Glow color={DIM} size={30}>no first place, not even an empty one</Glow>
        </div>
      </At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nf = c("a new foundation"), em = c("Even dependent arising is empty"), nb = c("Nothing behind, nothing beneath"), here = c("the apple is here");
  const dissolve = ramp(t, em + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, nf + 0.4)} o={0.5 + 0.5 * ramp(t, nb, 0.6)}><Apple size={300} glow={0.5 + 0.5 * ramp(t, here, 0.8)} /></At>
      <At x={960} y={700} s={pop(t, fps, nf)} o={1 - dissolve}>
        <div style={{ width: 1100, height: 90, borderRadius: 12, background: `linear-gradient(90deg, ${INDIGO}55, ${AMBER}66, ${INDIGO}55)`,
          border: `3px ${dissolve > 0.2 ? "dashed" : "solid"} ${AMBER}`, display: "flex", alignItems: "center", justifyContent: "center",
          filter: `blur(${dissolve * 8}px)` }}><Glow color={CHALK} size={34}>dependent arising, as a foundation?</Glow></div>
      </At>
      <At x={960} y={130} o={ramp(t, c("carries the analysis further"), 0.5) * (1 - ramp(t, nb - 0.3, 0.4))}><Glow color={DIM} size={34}>Nāgārjuna carries the analysis further</Glow></At>
      <At x={960} y={210} o={ramp(t, em, 0.5) * (1 - ramp(t, nb - 0.3, 0.4))}><Glow color={ICE} size={44} serif>even dependent arising is empty</Glow></At>
      {[["behind", 560, 300], ["beneath", 960, 760], ["before", 1360, 300]].map(([w, x, y], i) => (
        <StruckChip key={i} x={x as number} y={y as number} at={nb + i * 0.35} strikeAt={nb + 0.6 + i * 0.35} color={DIM} size={30}>{`something ${w}`}</StruckChip>
      ))}
      <Ring x={960} y={430} p={ramp(t, here + 0.2, 1.8)} r0={160} r1={460} color={ROSE} />
      <At x={960} y={160} o={ramp(t, here, 0.6)}><Glow color={GOLD} size={50} serif>and still, here</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["senses", 0], ["search", c("If a common substance", 0.6)], ["senses", c("something strange", 0.6)], ["apple", c("Now look at an apple", 0.6)],
    ["search", c("Search for what", 0.6)], ["apple", c("the apple does not hesitate", 0.6)], ["mirage", c("the old images of a mirage", 0.6)],
    ["open", c("Ask why it appears here", 0.6)], ["canyon", c("an older puzzle", 0.6)], ["search", c("One habit remains", 0.6)],
    ["open", c("a new foundation", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("If a common substance", 0.9)], <SensesScene />],
    [S("If a common substance", "something strange"), <SubstrateScene />],
    [S("something strange", "Now look at an apple"), <SeamScene />],
    [S("Now look at an apple", "Search for what"), <AppleScene />],
    [S("Search for what", "the apple does not hesitate"), <BearerScene />],
    [S("the apple does not hesitate", "the old images of a mirage"), <VividScene />],
    [S("the old images of a mirage", "Ask why it appears here"), <MirageScene />],
    [S("Ask why it appears here", "an older puzzle"), <WhyScene />],
    [S("an older puzzle", "One habit remains"), <CanyonScene />],
    [S("One habit remains", "a new foundation"), <NowhereScene />],
    [S("a new foundation", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
