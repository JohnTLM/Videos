// Anatta to Emptiness, Chapter 15: The Formation of a Flower, Part Two. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, Glow, Hand, ICE, Mist, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Two levels down", "the red flower still blazes", "why does everyone see the same",
  "The agreement is real", "not evidence of what it seems", "closely similar eyes", "another person's private redness", "pick out the same edge",
  "use the same word", "handle the flower in matching",
  "a stable regularity", "Similar bodies, meeting similar", "a flower existing by itself", "A bee, seeing patterns", "or a dog, led by scent", "a poorer copy",
  "enacting a different flower",
  "On top of this sits language", "the line it draws", "A wilted petal", "two layers of convention", "Neither needs an essence",
  "That is three levels down", "Vivid qualities", "A pattern named together", "feel found rather than formed", "Nothing solid was needed",
  "a serious mistake", "atoms were the real flower", "colour painted on by the mind", "move the hidden base into physics",
  "turns to the one perceiving", "a mind behind the eye", "Not in the eye", "Not in the nerve", "Not in the brain", "some subtler faculty",
  "There is seeing, arising", "no seer underneath",
  "takes neither side", "grounds the flower in matter", "grounds it in mind", "Each keeps one base standing", "Here neither is kept", "Sense, object and attention",
  "Science describes these conditions", "really a wavelength", "really neural firing", "the hidden base had at last", "how the red reliably appears",
  "what the red ultimately is",
  "Nor are the levels", "An infant sees colour", "none is the floor", "The chain from object", "a row of solid dominoes",
  "the flower goes back on the table", "It can be watered", "given as a gift", "named by a botanist", "handed to a child", "Nothing has grown thin", "What has gone",
  "Emptiness is always the emptiness", "not a blank waiting", "seeing the flower rightly",
  "not absence, but display", "vivid and complete", "nothing lacking",
];

const DGOLD = "#D9A441", AMBER = "#F0B85A", INDIGO = "#6F63E8", RED = "#E8384F", LEAF = "#5BBF6A";

const M = {
  thread: { a: "rgba(150,40,70,0.45)", b: "rgba(70,55,160,0.45)", c: "rgba(180,130,50,0.3)" },
  shared: { a: "rgba(60,50,150,0.5)", b: "rgba(170,120,50,0.38)", c: "rgba(40,100,120,0.3)" },
  lang: { a: "rgba(180,130,50,0.42)", b: "rgba(70,55,160,0.45)", c: "rgba(150,50,80,0.3)" },
  mind: { a: "rgba(80,50,150,0.5)", b: "rgba(40,110,140,0.4)", c: "rgba(170,120,60,0.3)" },
  science: { a: "rgba(40,90,140,0.45)", b: "rgba(90,60,170,0.45)", c: "rgba(180,130,50,0.3)" },
  table: { a: "rgba(190,140,60,0.45)", b: "rgba(70,55,160,0.45)", c: "rgba(60,140,90,0.3)" },
  display: { a: "rgba(200,60,80,0.5)", b: "rgba(190,140,60,0.42)", c: "rgba(80,60,170,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Flower: React.FC<{ id: string; w?: number; grow?: number; bloom?: number; petal?: string; glow?: number; o?: number; wilt?: number }> =
  ({ id, w = 300, grow = 1, bloom = 1, petal = RED, glow = 0.5, o = 1, wilt = 0 }) => {
    const { t } = useT();
    const sway = Math.sin(t * 0.9) * 2;
    return (
      <svg width={w} height={w * 1.5} viewBox="0 0 400 600" style={{ overflow: "visible", opacity: o }}>
        <defs>
          <radialGradient id={`${id}p`} cx="0.5" cy="0.9" r="0.9">
            <stop offset="0" stopColor="#FFE0E4" /><stop offset="0.35" stopColor={petal} /><stop offset="1" stopColor={petal} stopOpacity={0.85} />
          </radialGradient>
          <radialGradient id={`${id}c`}><stop offset="0" stopColor="#FFF4C8" /><stop offset="1" stopColor={DGOLD} /></radialGradient>
        </defs>
        <g transform={`rotate(${sway + wilt * 25} 200 600)`}>
          <path d="M200 600 C190 500 215 420 200 220" fill="none" stroke={LEAF} strokeWidth={9} strokeLinecap="round"
            strokeDasharray={420} strokeDashoffset={420 * (1 - grow)} />
          <path d="M198 470 C150 430 110 440 90 470 C130 490 170 490 198 470 Z" fill={`${LEAF}cc`} stroke={LEAF} strokeWidth={3} opacity={ramp(grow, 0.5, 0.3)} />
          <path d="M203 380 C250 340 290 350 312 378 C270 398 230 398 203 380 Z" fill={`${LEAF}cc`} stroke={LEAF} strokeWidth={3} opacity={ramp(grow, 0.7, 0.3)} />
          <g transform={`translate(200 200) scale(${bloom})`} style={{ filter: `drop-shadow(0 0 ${10 + 30 * glow}px ${petal})` }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <ellipse key={i} cx={0} cy={-76} rx={46} ry={95} fill={`url(#${id}p)`} stroke="#ffffff55" strokeWidth={1.5}
                transform={`rotate(${(i / 7) * 360 + t * 3})`} />
            ))}
            <circle r={34} fill={`url(#${id}c)`} />
            {Array.from({ length: 10 }).map((_, i) => <circle key={i} cx={20 * Math.cos(i * 0.63)} cy={20 * Math.sin(i * 0.63)} r={3.5} fill="#7a4a10" />)}
          </g>
        </g>
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

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Head: React.FC<{ o?: number; dash?: boolean; color?: string; w?: number }> = ({ o = 1, dash, color = CHALK, w = 260 }) => (
  <svg width={w} height={w * 1.15} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
  </svg>
);

const Eye: React.FC<{ color?: string; w?: number }> = ({ color = TEAL, w = 120 }) => (
  <svg width={w} height={w * 0.57} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={17} fill={color} />
  </svg>
);

const Person: React.FC<{ color: string }> = ({ color }) => (
  <svg width={90} height={160} viewBox="0 0 120 220" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={60} cy={30} r={20} fill="none" stroke={color} strokeWidth={6} />
    <path d="M60 52 L60 128 M60 72 L30 110 M60 72 L95 60 M60 128 L38 200 M60 128 L82 200" stroke={color} strokeWidth={6} strokeLinecap="round" fill="none" />
  </svg>
);

const Bee: React.FC = () => {
  const { t } = useT();
  const f = Math.sin(t * 30) * 6;
  return (
    <svg width={110} height={80} viewBox="0 0 110 80" style={{ filter: `drop-shadow(0 0 8px ${AMBER})` }}>
      <ellipse cx={42} cy={22 + f * 0.3} rx={18} ry={12} fill={`${ICE}66`} stroke={ICE} strokeWidth={2} />
      <ellipse cx={62} cy={20 - f * 0.3} rx={18} ry={12} fill={`${ICE}66`} stroke={ICE} strokeWidth={2} />
      <ellipse cx={55} cy={48} rx={34} ry={20} fill={AMBER} />
      {[0, 1, 2].map((i) => <rect key={i} x={36 + i * 16} y={29} width={7} height={38} fill="#2a1d0a" />)}
      <circle cx={92} cy={46} r={9} fill="#2a1d0a" />
    </svg>
  );
};

const Dog: React.FC = () => (
  <svg width={170} height={120} viewBox="0 0 170 120" style={{ filter: `drop-shadow(0 0 8px ${DGOLD})` }}>
    <path d="M20 60 Q25 40 50 42 L110 42 Q120 20 135 22 L150 30 L160 40 L150 50 L140 52 L135 70 L130 105 M120 70 L118 105 M50 70 L48 105 M62 70 L64 105 M20 60 L5 45"
      fill="none" stroke={DGOLD} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 70 Q80 78 130 68" fill="none" stroke={DGOLD} strokeWidth={6} />
    <path d="M132 22 L126 8 L140 18" fill={DGOLD} stroke={DGOLD} strokeWidth={3} />
  </svg>
);

const Wave: React.FC<{ color: string; at: number; spikes?: boolean }> = ({ color, at, spikes }) => {
  const { t } = useT();
  const xs = Array.from({ length: 80 }, (_, i) => i * 6);
  const d = xs.map((x, i) => {
    const y = spikes ? 60 - (((x + t * 120) % 90) < 8 ? 50 : 0) + 4 * Math.sin(x / 7) : 60 + 36 * Math.sin(x / 22 - t * 3);
    return `${i ? "L" : "M"}${x} ${y}`;
  }).join(" ");
  return (
    <svg width={480} height={120} viewBox="0 0 480 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      <path d={d} fill="none" stroke={color} strokeWidth={4} strokeDasharray={1600} strokeDashoffset={1600 * (1 - ramp(t, at, 1.2))} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const ThreadScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("Two levels down", 0.6), why = c("why does everyone see the same");
  return (
    <AbsoluteFill>
      <At x={620} y={430} s={pop(t, fps, a)}><Flower id="t1" w={300} glow={0.5 + 0.3 * Math.sin(t * 1.4)} /></At>
      <At x={620} y={430} o={ramp(t, c("the red flower still blazes"), 1.0) * 0.7}><div style={{ width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${RED}44, transparent 65%)` }} /></At>
      <At x={1300} y={250} s={pop(t, fps, a + 0.4)}><Chip color={RED} size={36}>level one · the qualities</Chip></At>
      <At x={1300} y={370} s={pop(t, fps, a + 0.9)}><Chip color={DGOLD} size={36}>level two · the binding</Chip></At>
      <At x={1300} y={490} s={pop(t, fps, why - 0.6)}><Chip color={INDIGO} size={36}>level three · ?</Chip></At>
      {Array.from({ length: 6 }).map((_, i) => {
        const ang = (i / 6) * Math.PI * 2 + t * 0.3;
        return <At key={i} x={620 + 360 * Math.cos(ang)} y={420 + 250 * Math.sin(ang)} s={pop(t, fps, why + 0.3 + i * 0.12)}><Eye w={90} color={[TEAL, AMBER, ROSE, ICE, VIOLET, LEAF][i]} /></At>;
      })}
      <At x={1300} y={700} o={ramp(t, why, 0.5)}><Glow color={AMBER} size={40} serif>why does everyone see the same?</Glow></At>
    </AbsoluteFill>
  );
};

const SharedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const real = c("The agreement is real", 0.4), ev = c("not evidence of what it seems"), eyes = c("closely similar eyes"), priv = c("another person's private redness");
  const edge = c("pick out the same edge"), word = c("use the same word"), hand = c("handle the flower in matching");
  const cols = [TEAL, AMBER, ROSE, VIOLET];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, real, 0.5)}><Glow color={CHALK} size={40} serif>the agreement is real</Glow></At>
      <At x={960} y={170} o={ramp(t, ev, 0.5)}><Glow color={DIM} size={30}>but evidence of what?</Glow></At>
      <At x={1460} y={430} s={pop(t, fps, real + 0.3)}><Flower id="s1" w={220} /></At>
      <Svg><DrawPath d="M1340 300 C1340 180 1580 180 1580 300 C1580 420 1340 420 1340 300 Z" p={ramp(t, edge, 1.0)} color={AMBER} width={4} len={900} /></Svg>
      {cols.map((col, i) => (
        <React.Fragment key={i}>
          <At x={300 + i * 210} y={480} s={pop(t, fps, real + 0.2 + i * 0.15)}><Person color={col} /></At>
          <At x={300 + i * 210} y={340} s={pop(t, fps, eyes + i * 0.15)}><Eye w={80} color={col} /></At>
          <At x={300 + i * 210} y={410} o={between(t, priv, edge, 0.4)}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: RED, boxShadow: `0 0 16px ${RED}`, outline: `3px dashed ${CHALK}`, outlineOffset: 8 }} />
          </At>
          <At x={300 + i * 210} y={260} s={pop(t, fps, word + i * 0.12)}><Chip color={col} size={24}>"flower"</Chip></At>
          <Flow x1={330 + i * 210} y1={450} x2={1380} y2={420} color={col} p={ramp(t, hand + i * 0.12, 0.6)} pulses={false} />
        </React.Fragment>
      ))}
      <At x={620} y={640} o={ramp(t, eyes, 0.5)}><Glow color={TEAL} size={30}>closely similar bodies</Glow></At>
      <At x={620} y={720} o={between(t, priv, edge, 0.4)}><Glow color={DIM} size={30}>private redness · out of reach</Glow></At>
      <At x={960} y={800} o={ramp(t, hand, 0.5)}><Chip color={AMBER} size={32}>same edge · same word · same handling</Chip></At>
    </AbsoluteFill>
  );
};

const CreatureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const reg = c("a stable regularity", 0.4), by = c("a flower existing by itself"), bee = c("A bee, seeing patterns"), dog = c("or a dog, led by scent");
  const poor = c("a poorer copy"), diff = c("enacting a different flower");
  const sw = ramp(t, bee - 0.3, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - sw }}>
        {[0, 1, 2].map((i) => <At key={i} x={960} y={280 + i * 110} o={ramp(t, reg + i * 0.3, 0.4)}><Wave color={[TEAL, AMBER, ROSE][i]} at={reg + i * 0.3} /></At>)}
        <At x={960} y={130} o={ramp(t, reg, 0.5)}><Glow color={CHALK} size={40} serif>a stable regularity</Glow></At>
        <At x={960} y={650} o={ramp(t, c("Similar bodies, meeting similar"), 0.5)}><Glow color={TEAL} size={32}>similar bodies · similar conditions · alike</Glow></At>
        <Struck x={960} y={760} at={by - 0.2} strikeAt={by + 0.8} color={DIM}>a flower existing by itself behind it</Struck>
      </AbsoluteFill>
      <At x={520} y={400} s={pop(t, fps, bee)}>
        <div style={{ position: "relative", width: 460, height: 420, borderRadius: 24, border: `3px solid ${VIOLET}`, background: `${VIOLET}14`, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 100, top: 60 }}>
            <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ filter: `drop-shadow(0 0 16px ${VIOLET})` }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <g key={i} transform={`rotate(${(i / 7) * 360})`}>
                  <ellipse cx={0} cy={-62} rx={36} ry={62} fill="#7A5CFF66" stroke={VIOLET} strokeWidth={2} />
                  <line x1={0} y1={-20} x2={0} y2={-100} stroke="#F2E6FF" strokeWidth={4} opacity={0.8} />
                </g>
              ))}
              <circle r={30} fill="#3B1E8F" stroke="#F2E6FF" strokeWidth={3} />
            </svg>
          </div>
          <div style={{ position: "absolute", left: 300 + 30 * Math.sin(t * 1.4), top: 30 + 10 * Math.cos(t * 2) }}><Bee /></div>
        </div>
      </At>
      <At x={520} y={660} o={ramp(t, bee + 0.4, 0.5)}><Glow color={VIOLET} size={30}>ultraviolet patterns</Glow></At>
      <At x={1400} y={400} s={pop(t, fps, dog)}>
        <div style={{ position: "relative", width: 460, height: 420, borderRadius: 24, border: `3px solid ${DGOLD}`, background: `${DGOLD}14`, overflow: "hidden" }}>
          {Array.from({ length: 9 }).map((_, i) => {
            const life = ((t - dog) * 0.3 + rand(i)) % 1;
            return <div key={i} style={{ position: "absolute", left: 280 - life * 200 + rand(i + 3) * 60, top: 120 + rand(i + 5) * 160, width: 70, height: 70, borderRadius: "50%",
              background: `radial-gradient(circle, ${ROSE}aa, transparent 70%)`, opacity: Math.sin(life * Math.PI) * 0.9 }} />;
          })}
          <div style={{ position: "absolute", left: 300, top: 150, width: 60, height: 60, borderRadius: "50%", background: `radial-gradient(circle, ${RED}, transparent 70%)` }} />
          <div style={{ position: "absolute", left: 30, top: 240 }}><Dog /></div>
        </div>
      </At>
      <At x={1400} y={660} o={ramp(t, dog + 0.4, 0.5)}><Glow color={DGOLD} size={30}>a world of scent</Glow></At>
      <Struck x={560} y={790} at={poor - 0.2} strikeAt={poor + 0.6} color={DIM}>a poorer copy</Struck>
      <At x={1360} y={790} o={ramp(t, diff, 0.5)}><Chip color={AMBER} size={36}>a different flower, enacted</Chip></At>
    </AbsoluteFill>
  );
};

const LanguageScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lang = c("On top of this sits language", 0.4), line = c("the line it draws"), wilt = c("A wilted petal"), two = c("two layers of convention"), ess = c("Neither needs an essence");
  const sw = ramp(t, two - 0.3, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - sw }}>
        <div style={{ position: "absolute", top: 110, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="flower" at={lang + 0.3} size={96} />
        </div>
        <At x={860} y={480} s={pop(t, fps, lang)}><Flower id="l1" w={200} /></At>
        <Svg><DrawPath d="M660 480 C660 250 1060 250 1060 480 C1060 710 660 710 660 480 Z" p={ramp(t, line, 1.2)} color={AMBER} width={5} len={1500} /></Svg>
        <At x={1150} y={300} o={ramp(t, line + 0.6, 0.5)}><Glow color={AMBER} size={30}>this counts</Glow></At>
        <At x={1340} y={720} s={pop(t, fps, wilt)} r={70}>
          <svg width={110} height={90} viewBox="0 0 130 110"><path d="M10 90 C20 20 90 0 120 20 C110 70 60 105 10 90 Z" fill="#8a4a5aaa" stroke="#a0606e" strokeWidth={3} /></svg>
        </At>
        <At x={1500} y={620} o={ramp(t, wilt + 0.4, 0.5)}><Glow color={DIM} size={30}>no longer quite counts?</Glow></At>
        <Svg><DrawPath d="M200 780 L1720 780" p={ramp(t, wilt - 0.3, 0.8)} color={LEAF} width={3} len={1600} /></Svg>
      </AbsoluteFill>
      <At x={960} y={260} s={pop(t, fps, two + 0.2)} o={sw}><div style={{ width: 900, padding: "22px 0", borderRadius: 18, border: `3px solid ${AMBER}`, background: `${AMBER}22`, boxShadow: `0 0 30px ${AMBER}55` }}><Glow color={AMBER} size={42} serif>shared words</Glow></div></At>
      <At x={960} y={420} s={pop(t, fps, two + 0.6)} o={sw}><div style={{ width: 900, padding: "22px 0", borderRadius: 18, border: `3px solid ${TEAL}`, background: `${TEAL}22`, boxShadow: `0 0 30px ${TEAL}55` }}><Glow color={TEAL} size={42} serif>shared bodies</Glow></div></At>
      <At x={960} y={590} o={between(t, ess - 0.2, 1e9) * sw}><div style={{ width: 900, padding: "22px 0", borderRadius: 18, border: `3px dashed ${DIM}` }}><Glow color={DIM} size={38}>an essence underneath?</Glow></div></At>
      <Crossed x={960} y={590} at={ess + 0.8} size={70} />
      <At x={960} y={760} o={ramp(t, ess + 1.0, 0.5)}><Glow color={CHALK} size={36}>neither layer needs one</Glow></At>
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("That is three levels down", 0.4), q = c("Vivid qualities"), p = c("A pattern named together"), f = c("feel found rather than formed"), ns = c("Nothing solid was needed");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, three, 0.5)}><Glow color={CHALK} size={44} serif>three levels down</Glow></At>
      <At x={960} y={240} s={pop(t, fps, q)}>
        <div style={{ display: "flex", gap: 30, alignItems: "center", padding: "14px 40px", borderRadius: 20, border: `3px solid ${RED}`, background: `${RED}1c` }}>
          {[RED, ROSE, VIOLET, LEAF].map((col, i) => <Orb key={i} size={56} color={col} />)}<Glow color={RED} size={34}>vivid qualities</Glow>
        </div>
      </At>
      <At x={960} y={380} s={pop(t, fps, p)}>
        <div style={{ display: "flex", gap: 24, alignItems: "center", padding: "14px 40px", borderRadius: 20, border: `3px solid ${DGOLD}`, background: `${DGOLD}1c` }}>
          <Glow color={AMBER} size={40} serif>"flower"</Glow><Glow color={DGOLD} size={34}>a pattern, named together</Glow>
        </div>
      </At>
      <At x={960} y={520} s={pop(t, fps, f - 0.6)}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", padding: "10px 40px", borderRadius: 20, border: `3px solid ${INDIGO}`, background: `${INDIGO}1c` }}>
          {[TEAL, AMBER, ROSE].map((col, i) => <div key={i} style={{ transform: "scale(0.55)", margin: "-30px -12px" }}><Person color={col} /></div>)}
          <Glow color={INDIGO} size={34}>shared agreement · feels found</Glow>
        </div>
      </At>
      <At x={960} y={670} o={between(t, ns - 0.3, 1e9)}><div style={{ width: 760, height: 90, borderRadius: 18, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Glow color={DIM} size={32}>something solid beneath?</Glow></div></At>
      <Crossed x={960} y={670} at={ns + 0.7} size={60} />
      <At x={960} y={800} o={ramp(t, ns + 1.0, 0.5)}><Glow color={AMBER} size={38} serif>nothing solid needed anywhere</Glow></At>
    </AbsoluteFill>
  );
};

const AtomBase: React.FC<{ n?: number }> = ({ n = 9 }) => {
  const { t } = useT();
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ width: 50, height: 50, borderRadius: "50%", border: `3px solid ${ICE}`, position: "relative", boxShadow: `0 0 12px ${ICE}` }}>
          <div style={{ position: "absolute", left: 19 + 16 * Math.cos(t * 3 + i), top: 19 + 16 * Math.sin(t * 3 + i), width: 8, height: 8, borderRadius: "50%", background: TEAL }} />
        </div>
      ))}
    </div>
  );
};

const PhysicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mis = c("a serious mistake", 0.4), at = c("atoms were the real flower"), paint = c("colour painted on by the mind"), mv = c("move the hidden base into physics");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, mis, 0.5)}><Glow color={WARM} size={44} serif>a serious mistake</Glow></At>
      <At x={960} y={400} s={pop(t, fps, mis + 0.4)}><Flower id="p1" w={200} petal="#6d6a78" glow={0} /></At>
      <At x={960} y={400} o={ramp(t, paint + 0.3, 1.0)}><Flower id="p2" w={200} glow={0.3} /></At>
      <At x={960} y={660} s={pop(t, fps, at)}><AtomBase /></At>
      <At x={960} y={740} o={ramp(t, at + 0.3, 0.5)}><Glow color={ICE} size={30}>atoms · the real flower?</Glow></At>
      <At x={1420} y={330} o={ramp(t, paint, 0.5)}><Chip color={ROSE} size={30}>colour painted on by mind?</Chip></At>
      <Flow x1={1300} y1={350} x2={1060} y2={330} color={ROSE} p={ramp(t, paint + 0.2, 0.6)} />
      <At x={480} y={660} o={ramp(t, mv, 0.5)}><Glow color={WARM} size={32}>the base, moved to physics</Glow></At>
      <Crossed x={960} y={660} at={mv + 1.0} size={90} />
    </AbsoluteFill>
  );
};

const PerceiverScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const turn = c("turns to the one perceiving", 0.4), mb = c("a mind behind the eye");
  const spots = [
    { at: c("Not in the eye"), x: 860, y: 400, label: "eye" },
    { at: c("Not in the nerve"), x: 760, y: 440, label: "nerve" },
    { at: c("Not in the brain"), x: 640, y: 360, label: "brain" },
    { at: c("some subtler faculty"), x: 520, y: 420, label: "a subtler faculty" },
  ];
  const see = c("There is seeing, arising"), ns = c("no seer underneath");
  const cur = spots.reduce((acc, s) => (t > s.at ? s : acc), spots[0]);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, turn, 0.5)}><Glow color={CHALK} size={42} serif>the same search, on the perceiving side</Glow></At>
      <At x={700} y={450} s={pop(t, fps, turn)}><Head w={380} /></At>
      <Svg>
        <DrawPath d="M860 400 C820 420 790 440 740 430 C700 420 680 380 640 360" p={ramp(t, mb, 1.0)} color={VIOLET} width={4} len={400} />
        <circle cx={640} cy={360} r={44} fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={3} opacity={ramp(t, mb + 0.6, 0.5)} />
      </Svg>
      <At x={870} y={398} s={pop(t, fps, mb)}><Eye w={70} /></At>
      <At x={1400} y={430} s={pop(t, fps, turn + 0.3)}><Flower id="pc" w={200} /></At>
      <Flow x1={1300} y1={330} x2={900} y2={400} color={RED} p={ramp(t, turn + 0.6, 0.6)} />
      <At x={cur.x + 30} y={cur.y + 30} o={between(t, spots[0].at - 0.3, see)}>
        <svg width={110} height={110} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
          <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={7} /><line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={13} strokeLinecap="round" />
        </svg>
      </At>
      {spots.map((s, i) => <Struck key={i} x={360 + i * 400} y={700} at={s.at} strikeAt={s.at + 0.6} color={DIM} size={30}>{s.label}</Struck>)}
      <At x={1400} y={210} o={ramp(t, see, 0.5)}><Glow color={TEAL} size={48} serif>seeing, from conditions</Glow></At>
      <At x={960} y={800} o={ramp(t, ns, 0.5)}><Chip color={AMBER} size={34}>no seer underneath</Chip></At>
    </AbsoluteFill>
  );
};

const NeitherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const side = c("takes neither side", 0.4), mat = c("grounds the flower in matter"), mind = c("grounds it in mind"), each = c("Each keeps one base standing");
  const nk = c("Here neither is kept"), sense = c("Sense, object and attention");
  const fall = ramp(t, nk + 0.3, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, side, 0.5)}><Glow color={CHALK} size={42} serif>neither side</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, sense - 0.3, 0.6) }}>
        <At x={480} y={330} s={pop(t, fps, side + 0.5)}><Flower id="n1" w={140} /></At>
        <At x={480} y={560 + 80 * fall} s={pop(t, fps, mat + 0.2)} o={1 - fall}><div style={{ width: 220, height: 200, borderRadius: 14, border: `3px solid ${ICE}`, background: `${ICE}2a`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={ICE} size={36}>matter</Glow></div></At>
        <At x={1440} y={330} s={pop(t, fps, side + 0.8)}><Flower id="n2" w={140} /></At>
        <At x={1440} y={560 + 80 * fall} s={pop(t, fps, mind + 0.2)} o={1 - fall}><div style={{ width: 220, height: 200, borderRadius: 14, border: `3px solid ${VIOLET}`, background: `${VIOLET}2a`,
          display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={VIOLET} size={36}>mind</Glow></div></At>
        <At x={960} y={460} o={ramp(t, each, 0.5)}><Glow color={DIM} size={32}>each keeps one base</Glow></At>
        <At x={960} y={330} o={between(t, side + 0.6, mat, 0.4)}><Glow color={AMBER} size={44} serif>matter? · mind?</Glow></At>
        <At x={960} y={760} o={ramp(t, nk, 0.5)}><Chip color={AMBER} size={36}>here, neither is kept</Chip></At>
      </AbsoluteFill>
      {[["sense", TEAL], ["object", RED], ["attention", VIOLET]].map(([w, col], i) => {
        const a = (i / 3) * Math.PI * 2 - Math.PI / 2 + t * 0.4;
        return <At key={i} x={960 + 300 * Math.cos(a)} y={460 + 200 * Math.sin(a)} s={pop(t, fps, sense + i * 0.3)}><Chip color={col} size={40}>{w}</Chip></At>;
      })}
      <At x={960} y={460} s={pop(t, fps, sense + 0.2)}><Flower id="n3" w={130} /></At>
      <At x={960} y={790} o={ramp(t, sense + 1.0, 0.5)}><Glow color={CHALK} size={34}>arising together · none more basic</Glow></At>
    </AbsoluteFill>
  );
};

const ScienceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sci = c("Science describes these conditions", 0.4), wl = c("really a wavelength"), nf = c("really neural firing"), hb = c("the hidden base had at last");
  const how = c("how the red reliably appears"), what = c("what the red ultimately is");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sci, 0.5)}><Glow color={ICE} size={40} serif>precise descriptions of conditions</Glow></At>
      <At x={420} y={420} s={pop(t, fps, sci + 0.2)}><Flower id="sc" w={180} /></At>
      <At x={1180} y={290} o={ramp(t, sci + 0.3, 0.4)}><Wave color={RED} at={sci + 0.3} /></At>
      <At x={1180} y={460} o={ramp(t, sci + 0.6, 0.4)}><Wave color={VIOLET} at={sci + 0.6} spikes /></At>
      <Struck x={1180} y={370} at={wl} strikeAt={hb + 0.4} color={DIM} size={28}>the red is really a wavelength</Struck>
      <Struck x={1180} y={545} at={nf} strikeAt={hb + 0.7} color={DIM} size={28}>the red is really neural firing</Struck>
      <At x={420} y={680} o={ramp(t, how, 0.5)}><Chip color={LEAF} size={32}>how it reliably appears · answered</Chip></At>
      <At x={1300} y={680} o={ramp(t, what, 0.5)}><Chip color={DIM} size={32}>what it ultimately is · not answered</Chip></At>
    </AbsoluteFill>
  );
};

const SequenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lv = c("Nor are the levels", 0.4), inf = c("An infant sees colour"), floor = c("none is the floor"), chain = c("The chain from object"), dom = c("a row of solid dominoes");
  const sw = ramp(t, chain - 0.3, 0.6);
  const links = ["object", "eye", "brain", "concept"];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - sw }}>
        <At x={960} y={110} o={ramp(t, lv, 0.5)}><Glow color={CHALK} size={42} serif>not a strict sequence</Glow></At>
        <At x={520} y={420} s={pop(t, fps, inf)}><Head w={200} color={ROSE} /></At>
        {[RED, AMBER, TEAL, VIOLET].map((col, i) => (
          <At key={i} x={700 + 70 * Math.cos(t + i * 1.6)} y={360 + 50 * Math.sin(t + i * 1.6)} s={pop(t, fps, inf + 0.3 + i * 0.1)}><Orb size={50} color={col} /></At>
        ))}
        <At x={560} y={640} o={ramp(t, inf + 0.4, 0.5)}>
          <div style={{ position: "relative" }}><Chip color={DIM} size={30}>the word "flower"</Chip><Strike at={inf + 1.2} /></div>
        </At>
        {[["qualities", RED], ["recognition", DGOLD], ["shared words", INDIGO]].map(([w, col], i) => (
          <At key={i} x={1360} y={560 - i * 120} s={pop(t, fps, floor - 1.2 + i * 0.3)}><div style={{ width: 380, padding: "16px 0", borderRadius: 14, border: `3px solid ${col}`, background: `${col}22` }}><Glow color={col} size={32}>{w}</Glow></div></At>
        ))}
        <At x={1360} y={700} o={ramp(t, floor, 0.5)}><Glow color={AMBER} size={34} serif>layers · none is the floor</Glow></At>
      </AbsoluteFill>
      {links.map((w, i) => {
        const tip = ramp(t, dom + 0.3 + i * 0.25, 0.4) * 60;
        return (
          <React.Fragment key={i}>
            <At x={420 + i * 360} y={440} s={pop(t, fps, chain + i * 0.25)} o={sw}>
              <div style={{ transform: `rotate(${tip}deg)`, transformOrigin: "bottom right", width: 150, height: 240, borderRadius: 14, border: `4px solid ${[RED, TEAL, VIOLET, AMBER][i]}`,
                background: `${[RED, TEAL, VIOLET, AMBER][i]}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Glow color={CHALK} size={30}>{w}</Glow></div>
            </At>
            {i < 3 && <Flow x1={510 + i * 360} y1={440} x2={690 + i * 360} y2={440} color={CHALK} p={ramp(t, chain + 0.3 + i * 0.25, 0.4) * sw} pulses={false} />}
          </React.Fragment>
        );
      })}
      <At x={960} y={160} o={ramp(t, chain, 0.5)}><Glow color={TEAL} size={38}>a useful description</Glow></At>
      <Struck x={960} y={720} at={dom} strikeAt={dom + 1.4} color={WARM}>solid dominoes passing a hidden power</Struck>
    </AbsoluteFill>
  );
};

const TableScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const back = c("the flower goes back on the table", 0.4), wat = c("It can be watered"), gift = c("given as a gift"), bot = c("named by a botanist"), child = c("handed to a child");
  const thin = c("Nothing has grown thin"), gone = c("What has gone");
  return (
    <AbsoluteFill>
      <Svg><DrawPath d="M560 660 L1360 660" p={ramp(t, back, 0.8)} color={DGOLD} width={6} len={800} />
        <DrawPath d="M620 660 L600 790 M1300 660 L1320 790" p={ramp(t, back + 0.4, 0.6)} color={DGOLD} width={6} len={200} /></Svg>
      <At x={960} y={460} s={pop(t, fps, back + 0.3)}><Flower id="tb" w={200} glow={0.4 + 0.5 * ramp(t, thin, 1)} /></At>
      <At x={560} y={330} s={pop(t, fps, wat)}>
        <svg width={170} height={130} viewBox="0 0 170 130" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
          <path d="M40 50 L110 50 L104 120 L46 120 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={4} /><path d="M108 70 L160 30" stroke={ICE} strokeWidth={6} strokeLinecap="round" />
          {[0, 1, 2].map((i) => <circle key={i} cx={162 - i * 6} cy={40 + ((t * 80 + i * 20) % 60)} r={4} fill={ICE} />)}
        </svg>
      </At>
      <At x={1360} y={330} s={pop(t, fps, gift)}>
        <svg width={130} height={130} viewBox="0 0 130 130" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
          <rect x={15} y={50} width={100} height={70} rx={6} fill={`${ROSE}44`} stroke={ROSE} strokeWidth={4} /><path d="M65 50 L65 120 M15 80 L115 80" stroke={AMBER} strokeWidth={6} />
          <path d="M65 50 Q40 20 35 45 Q50 55 65 50 Q90 20 95 45 Q80 55 65 50" fill={AMBER} />
        </svg>
      </At>
      <At x={1180} y={220} s={pop(t, fps, bot)} r={-6}><div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, color: "#1b1440", background: "#F1ECE0", padding: "6px 22px", borderRadius: 6 }}>genus · species</div></At>
      <At x={700} y={540} s={pop(t, fps, child)} r={20}><Hand size={130} /></At>
      <At x={960} y={130} o={ramp(t, thin, 0.5)}><Glow color={AMBER} size={44} serif>nothing has grown thin</Glow></At>
      <Struck x={960} y={800} at={gone} strikeAt={gone + 1.4} color={WARM} size={30}>something standing behind it</Struck>
    </AbsoluteFill>
  );
};

const EmptinessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const em = c("Emptiness is always the emptiness", 0.4), blank = c("not a blank waiting"), right = c("seeing the flower rightly");
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 100, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="always the emptiness of something" at={em + 0.2} size={66} color={ICE} top="#F0FBFF" />
      </div>
      <At x={760} y={480} o={between(t, blank - 0.2, 1e9) * (1 - ramp(t, blank + 1.8, 0.8))}>
        <div style={{ width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, #000 55%, #1b1730)", boxShadow: "0 0 60px #000" }} />
      </At>
      <At x={760} y={480} s={pop(t, fps, em + 0.4)}><Flower id="em" w={190} /></At>
      <Crossed x={760} y={480} at={blank + 1.0} size={150} />
      <At x={760} y={740} o={between(t, blank, right)}><Glow color={DIM} size={30}>a blank behind the flower?</Glow></At>
      <At x={1340} y={430} s={pop(t, fps, right)}><Eye w={180} color={TEAL} /></At>
      <Flow x1={1240} y1={440} x2={900} y2={440} color={TEAL} p={ramp(t, right + 0.3, 0.6)} />
      <At x={1340} y={600} o={ramp(t, right + 0.3, 0.5)}><Glow color={TEAL} size={36} serif>a way of seeing it rightly</Glow></At>
    </AbsoluteFill>
  );
};

const DisplayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("not absence, but display", 0.4), vc = c("vivid and complete"), nl = c("nothing lacking");
  const g = ramp(t, d, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={g * 0.85}><div style={{ width: 1100, height: 900, borderRadius: "50%", background: `radial-gradient(ellipse, ${RED}55, ${DGOLD}22 40%, transparent 68%)` }} /></At>
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2 + t * 0.15, r = 160 + 260 * ramp(t, d + 0.3 + i * 0.03, 1.4);
        return <At key={i} x={960 + r * Math.cos(a)} y={420 + r * 0.65 * Math.sin(a)} s={pop(t, fps, d + 0.3 + i * 0.03)}>
          <Orb size={22 + (i % 4) * 10} color={[RED, AMBER, ROSE, VIOLET, LEAF, ICE][i % 6]} /></At>;
      })}
      <At x={960} y={420} s={pop(t, fps, d)}><Flower id="dp" w={280} glow={0.6 + 0.6 * g} /></At>
      <Mist x={960} y={420} start={d + 0.5} color={ROSE} spread={500} n={20} />
      {[0, 1].map((k) => <Ring key={k} x={960} y={300} p={((t - d) * 0.3 + k / 2) % 1 * ramp(t, d, 0.3)} r0={140} r1={480} color={AMBER} width={2} />)}
      <At x={960} y={110} o={ramp(t, d, 0.5)}><Glow color={AMBER} size={50} serif>not absence · display</Glow></At>
      <At x={960} y={762} o={ramp(t, vc, 0.5)}><Glow color={CHALK} size={40} serif>vivid and complete</Glow></At>
      <At x={960} y={822} o={ramp(t, nl, 0.6)}><Glow color={DIM} size={30}>nothing behind · nothing lacking</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["thread", 0], ["shared", c("The agreement is real", 0.6)], ["lang", c("On top of this sits language", 0.6)], ["mind", c("a serious mistake", 0.6)],
    ["science", c("Science describes these conditions", 0.6)], ["table", c("the flower goes back on the table", 0.6)], ["display", c("Emptiness is always the emptiness", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The agreement is real", 0.9)], <ThreadScene />],
    [S("The agreement is real", "a stable regularity"), <SharedScene />],
    [S("a stable regularity", "On top of this sits language"), <CreatureScene />],
    [S("On top of this sits language", "That is three levels down"), <LanguageScene />],
    [S("That is three levels down", "a serious mistake"), <ThreeScene />],
    [S("a serious mistake", "turns to the one perceiving"), <PhysicsScene />],
    [S("turns to the one perceiving", "takes neither side"), <PerceiverScene />],
    [S("takes neither side", "Science describes these conditions"), <NeitherScene />],
    [S("Science describes these conditions", "Nor are the levels"), <ScienceScene />],
    [S("Nor are the levels", "the flower goes back on the table"), <SequenceScene />],
    [S("the flower goes back on the table", "Emptiness is always the emptiness"), <TableScene />],
    [S("Emptiness is always the emptiness", "not absence, but display"), <EmptinessScene />],
    [S("not absence, but display", null), <DisplayScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
