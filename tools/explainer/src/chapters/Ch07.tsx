// Chapter 7: Dissolving the Hard Problem of Consciousness. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb, PictureFrame,
  ROSE, Reveal, Ring, Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Take a sip of tea", "Warmth", "A faint bitterness", "A sweetness at the edge", "a scent rising",
  "Philosophers ask a famous question", "the hard problem of consciousness", "the firing of neurons", "any felt experience",
  "Why does the tea taste", "processed in the dark",
  "On this analysis", "not a feature of reality", "how the question is framed",
  "two assumptions made together", "The first takes the physical world", "a base layer of particles", "complete without any experience",
  "The second takes consciousness", "an inner room", "or a spectator", "must somehow produce the qualities",
  "Define the two this way", "no bridge between them", "The gap is not found in nature", "built by the premise", "two self-standing kinds",
  "Drop that premise", "the gap does not need bridging", "Take colour", "a wavelength of light alone", "Nor is it found in a mind alone",
  "light, eye, nerves, contrast and naming", "The one who sees", "the seeing, and the seen", "designated together", "None of them comes first",
  "Early Buddhist teaching", "Dependent on the eye and forms", "eye consciousness arises", "not a standing light", "pointed at objects",
  "consciousness of something, through something",
  "not a container", "not a hidden producer", "not found apart",
  "Return to the tea", "Where is the taste", "Not in the cup alone", "after a sweet meal", "again with a cold", "Not in the mouth alone",
  "no separate taster", "Look for the one who tastes", "only more tasting", "The warmth, the bitterness, the swallow",
  "Yet the taste is not vague", "name the garden and the season", "vivid, precise and reliable", "a separate light",
  "But surely, someone will say", "brain science shows", "A dose of anaesthetic", "The evidence shows dependence", "affirms dependence throughout",
  "a self-standing brain", "manufacturing a separate mind", "The brain, too, is an appearance", "the framework of physiology",
  "Dependence shows emptiness", "make the brain a ground",
  "The mystery came from imagining", "a tea without tasting", "a taster without tea", "how the two could meet",
  "Take another sip", "Nothing is missing", "nothing is hidden behind it",
];

const M = {
  tea: { a: "rgba(150,100,40,0.5)", b: "rgba(60,130,90,0.4)", c: "rgba(140,70,100,0.3)" },
  hard: { a: "rgba(70,50,150,0.5)", b: "rgba(30,90,140,0.45)", c: "rgba(140,60,90,0.3)" },
  frame: { a: "rgba(150,110,50,0.45)", b: "rgba(80,60,150,0.45)", c: "rgba(30,100,120,0.3)" },
  split: { a: "rgba(40,60,130,0.5)", b: "rgba(140,60,80,0.4)", c: "rgba(60,40,110,0.35)" },
  colour: { a: "rgba(170,50,60,0.45)", b: "rgba(40,110,150,0.45)", c: "rgba(150,120,50,0.3)" },
  eye: { a: "rgba(30,120,140,0.5)", b: "rgba(150,120,50,0.4)", c: "rgba(90,60,160,0.3)" },
  nots: { a: "rgba(90,60,160,0.45)", b: "rgba(150,90,50,0.4)", c: "rgba(30,110,130,0.3)" },
  taste: { a: "rgba(150,100,40,0.5)", b: "rgba(150,60,100,0.4)", c: "rgba(60,130,90,0.35)" },
  garden: { a: "rgba(50,140,80,0.5)", b: "rgba(160,120,50,0.4)", c: "rgba(30,110,140,0.3)" },
  brain: { a: "rgba(140,60,110,0.45)", b: "rgba(40,90,160,0.45)", c: "rgba(150,110,50,0.3)" },
  close: { a: "rgba(150,110,50,0.45)", b: "rgba(40,120,110,0.45)", c: "rgba(110,60,140,0.3)" },
};

// ---------------------------------------------------------------- parts for this chapter
const Teacup: React.FC<{ size?: number; steam?: number; color?: string; dashed?: boolean }> = ({ size = 260, steam = 1, color = GOLD, dashed }) => {
  const { t } = useT();
  const dash = dashed ? "10 8" : undefined;
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 250 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
      {[95, 125, 155].map((x, i) => (
        <path key={i} d={`M${x} 60 C ${x - 16} 44, ${x + 16} 28, ${x} ${6 - 6 * Math.sin(t * 2 + i)}`} fill="none" stroke={CHALK} strokeWidth={4}
          strokeLinecap="round" opacity={steam * (0.35 + 0.3 * Math.sin(t * 2.4 + i * 2))} />
      ))}
      <path d="M190 95 Q 232 95 228 125 Q 224 152 180 148" fill="none" stroke={color} strokeWidth={6} strokeDasharray={dash} />
      <path d="M40 75 L210 75 Q 205 160 150 172 L100 172 Q 45 160 40 75 Z" fill={dashed ? "none" : `${color}33`} stroke={color} strokeWidth={5} strokeDasharray={dash} strokeLinejoin="round" />
      {!dashed && <ellipse cx={125} cy={77} rx={84} ry={11} fill="#8a5a1e" stroke={color} strokeWidth={2} />}
      <ellipse cx={125} cy={185} rx={110} ry={12} fill="none" stroke={color} strokeWidth={4} strokeDasharray={dash} />
    </svg>
  );
};

const Brain: React.FC<{ size?: number; color?: string; dashed?: boolean; fire?: number }> = ({ size = 300, color = ROSE, dashed, fire = 0 }) => {
  const { t } = useT();
  const dash = dashed ? "9 7" : undefined;
  const nodes = [[60, 50], [95, 35], [130, 45], [70, 85], [110, 75], [145, 85], [100, 105]];
  const links = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [4, 6], [3, 6]];
  return (
    <svg width={size} height={size * 0.68} viewBox="0 0 190 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
      <path d="M30 60 Q 20 30 50 22 Q 60 5 90 12 Q 115 2 135 18 Q 165 20 168 50 Q 182 70 165 90 Q 160 115 130 112 Q 110 125 85 112 Q 55 120 45 100 Q 20 95 30 60 Z"
        fill={dashed ? "none" : `${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dash} strokeLinejoin="round" />
      <path d="M95 14 Q 88 60 98 112 M55 45 Q 70 55 62 72 M140 40 Q 125 55 140 70" fill="none" stroke={color} strokeWidth={2} strokeOpacity={0.5} strokeDasharray={dash} />
      {fire > 0 && links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={GOLD} strokeWidth={1.5}
          opacity={fire * (0.3 + 0.7 * Math.max(0, Math.sin(t * 7 + i * 1.3)))} />
      ))}
      {fire > 0 && nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} fill={GOLD} opacity={fire * (0.4 + 0.6 * Math.max(0, Math.sin(t * 6 + i * 2.1)))} />
      ))}
    </svg>
  );
};

const Eye: React.FC<{ size?: number; color?: string }> = ({ size = 200, color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 200 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
      <path d="M10 55 Q 100 -15 190 55 Q 100 125 10 55 Z" fill={`${color}18`} stroke={color} strokeWidth={4} />
      <circle cx={100 + 6 * Math.sin(t * 0.8)} cy={55} r={28} fill={`${color}55`} stroke={color} strokeWidth={3} />
      <circle cx={100 + 6 * Math.sin(t * 0.8)} cy={55} r={12} fill="#0b0c1a" />
    </svg>
  );
};

const Apple: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 170, color = "#FF4D5E", dashed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${color})` }}>
    <path d="M50 28 C 30 14, 8 26, 12 54 C 15 78, 32 94, 50 88 C 68 94, 85 78, 88 54 C 92 26, 70 14, 50 28 Z"
      fill={dashed ? "none" : `${color}aa`} stroke={color} strokeWidth={3} strokeDasharray={dashed ? "7 6" : undefined} />
    <path d="M50 28 Q 52 14 58 8" fill="none" stroke={GREEN} strokeWidth={4} strokeLinecap="round" />
    <path d="M56 16 Q 70 8 76 18 Q 66 24 56 16 Z" fill={`${GREEN}aa`} />
  </svg>
);

const Person: React.FC<{ size?: number; color?: string; dashed?: boolean }> = ({ size = 170, color = ROSE, dashed }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={50} cy={30} r={18} fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "6 5" : undefined} />
    <path d="M14 96 Q 16 56 50 54 Q 84 56 86 96" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

const Gear: React.FC<{ size: number; rot: number; color?: string }> = ({ size, rot, color = DIM }) => (
  <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${rot})`} fill={`${color}33`} stroke={color} strokeWidth={3}>
      {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={-7} y={-48} width={14} height={14} rx={2} transform={`rotate(${i * 45})`} />)}
      <circle r={36} /><circle r={11} fill="#0b0c1a" />
    </g>
  </svg>
);

const Lens: React.FC<{ size?: number; color?: string }> = ({ size = 170, color = GOLD }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={40} cy={40} r={28} fill="#ffffff12" stroke={color} strokeWidth={5} />
    <line x1={61} y1={61} x2={92} y2={92} stroke={color} strokeWidth={9} strokeLinecap="round" />
  </svg>
);

const Struck: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode }> = ({ at, color = CHALK, size = 44, children }) => (
  <div style={{ position: "relative" }}><Glow color={color} size={size}>{children}</Glow><Strike at={at} /></div>
);

const Centre: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

const Cross: React.FC<{ x: number; y: number; at: number; r?: number; color?: string }> = ({ x, y, at, r = 90, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.45)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.45)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

/** A coloured taste wave (colour = flavour). */
const TasteWave: React.FC<{ x: number; y: number; w: number; color: string; o: number; amp?: number }> = ({ x, y, w, color, o, amp = 22 }) => {
  const { t } = useT();
  const d = Array.from({ length: 40 }, (_, i) => `${i ? "L" : "M"}${x + (i / 39) * w} ${y + amp * Math.sin(i * 0.5 + t * 3)}`).join(" ");
  return <Svg style={{ opacity: o }}><path d={d} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${color})` }} /></Svg>;
};

// ---------------------------------------------------------------- 1. a sip of tea
const Sip: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Take a sip of tea");
  const items: [string, string, string, number, number][] = [
    ["Warmth", "warmth", WARM, 520, 300], ["A faint bitterness", "bitterness", GREEN, 1400, 300],
    ["A sweetness at the edge", "sweetness", ROSE, 520, 620], ["a scent rising", "scent", VIOLET, 1400, 620],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={480} s={pop(t, fps, t0, 13)}><Teacup size={340} /></At>
      <Mist x={960} y={360} start={c("a scent rising")} color={VIOLET} spread={200} n={16} />
      {items.map(([ph, lab, col, x, y], i) => (
        <React.Fragment key={i}>
          <Flow x1={960 + (x - 960) * 0.25} y1={460 + (y - 460) * 0.25} x2={x + (x < 960 ? 110 : -110)} y2={y} color={col} p={ramp(t, c(ph), 0.6)} />
          <At x={x} y={y} s={pop(t, fps, c(ph))}><Chip color={col} size={42}>{lab}</Chip></At>
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2-3. the hard problem, and its framing
const HardProblem: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Philosophers ask a famous question"), hp = c("the hard problem of consciousness"), fire = c("the firing of neurons");
  const felt = c("any felt experience"), why = c("Why does the tea taste"), dark = c("processed in the dark");
  const onThis = c("On this analysis"), notF = c("not a feature of reality"), framed = c("how the question is framed");
  const dim = between(t, dark, onThis, 0.8);
  const frame = ramp(t, framed, 0.8);
  return (
    <AbsoluteFill>
      <Centre top={60}><Reveal text="the hard problem" at={hp} size={84} /></Centre>
      <AbsoluteFill style={{ transform: `scale(${1 - 0.18 * frame})`, transformOrigin: "960px 470px" }}>
        <At x={600} y={460} s={pop(t, fps, hp + 0.3)} o={1 - 0.6 * dim}><Brain size={360} fire={ramp(t, fire + 0.3, 0.6)} /></At>
        <At x={600} y={660} o={ramp(t, fire + 0.4, 0.5)}><Glow color={ROSE} size={34}>neurons firing</Glow></At>
        <Flow x1={800} y1={460} x2={1150} y2={460} color={GOLD} p={ramp(t, felt, 0.8)} dash />
        <At x={980} y={410} o={ramp(t, felt + 0.3, 0.5)}><Glow color={GOLD} size={64} serif>?</Glow></At>
        <At x={1340} y={460} s={pop(t, fps, felt + 0.4)} o={1 - 0.7 * dim}>
          <div style={{ width: 260, height: 260, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}aa, ${ROSE}55 50%, transparent 72%)`,
            boxShadow: `0 0 60px ${GOLD}66` }} />
        </At>
        <At x={1340} y={460} o={ramp(t, why, 0.5) * (1 - dim)}><Teacup size={160} /></At>
        <At x={1340} y={660} o={ramp(t, felt + 0.6, 0.5)}><Glow color={GOLD} size={34}>felt experience</Glow></At>
        <div style={{ position: "absolute", inset: 0, background: "#000", opacity: dim * 0.55 }} />
        <At x={960} y={760} o={dim}><Glow color={DIM} size={40}>processing in the dark?</Glow></At>
      </AbsoluteFill>
      <At x={960} y={200} o={between(t, notF, framed)}><Struck at={notF + 1.0} size={40}>a feature of reality</Struck></At>
      <PictureFrame x={960} y={470} w={1480} h={560} o={frame} tag="a framing" />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4-5. the two assumptions and the built gap
const TwoAssumptions: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("two assumptions made together"), first = c("The first takes the physical world"), base = c("a base layer of particles");
  const without = c("complete without any experience"), second = c("The second takes consciousness"), room = c("an inner room");
  const spect = c("or a spectator"), produce = c("must somehow produce the qualities");
  const define = c("Define the two this way"), noBridge = c("no bridge between them"), nature = c("The gap is not found in nature");
  const built = c("built by the premise"), kinds = c("two self-standing kinds");
  const apart = ramp(t, define, 1.4);
  const lx = 560 - 120 * apart, rx = 1360 + 120 * apart;
  const bridge = ramp(t, noBridge, 1.0), broken = ramp(t, noBridge + 1.1, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={80} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={42}>two assumptions</Glow></At>
      {/* matter as a base layer */}
      <At x={lx} y={500} s={pop(t, fps, first)}>
        <div style={{ width: 520, height: 300, borderRadius: 14, border: `3px solid ${ICE}`, background: `${ICE}12`, boxShadow: `0 0 30px ${ICE}55`, position: "relative", overflow: "hidden" }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 20 + rand(i) * 470 + Math.sin(t * 3 + i) * 6, top: 20 + rand(i + 5) * 250 + Math.cos(t * 2.5 + i) * 6,
              width: 14, height: 14, borderRadius: "50%", background: i % 3 ? ICE : TEAL, opacity: ramp(t, base + rand(i) * 0.6, 0.3) }} />
          ))}
        </div>
      </At>
      <At x={lx} y={300} o={ramp(t, first + 0.3, 0.5)}><Chip color={ICE} size={32}>physical world</Chip></At>
      <At x={lx} y={700} o={ramp(t, without, 0.5)}><Glow color={DIM} size={32}>no experience at all</Glow></At>
      {/* mind as an inner room with a spectator */}
      <At x={rx} y={500} s={pop(t, fps, room)}>
        <svg width={420} height={300} viewBox="0 0 420 300" style={{ filter: `drop-shadow(0 0 12px ${ROSE})` }}>
          <g stroke={ROSE} strokeWidth={3} fill="none">
            <rect x={10} y={10} width={400} height={280} fill={`${ROSE}12`} /><rect x={120} y={80} width={180} height={130} />
            <path d="M10 10 L120 80 M410 10 L300 80 M10 290 L120 210 M410 290 L300 210" />
          </g>
        </svg>
      </At>
      <At x={rx} y={540} s={pop(t, fps, spect)}><Person size={90} color={ROSE} /></At>
      <At x={rx} y={300} o={ramp(t, second + 0.3, 0.5)}><Chip color={ROSE} size={32}>consciousness</Chip></At>
      {[GOLD, ROSE, VIOLET, GREEN].map((col, i) => (
        <At key={i} x={rx - 150 + i * 100} y={700 + 10 * Math.sin(t * 3 + i)} s={pop(t, fps, produce + 0.2 + i * 0.15)}><Orb size={40} color={col} /></At>
      ))}
      <At x={rx} y={770} o={ramp(t, produce + 0.4, 0.5)}><Glow color={GOLD} size={30}>must produce qualities</Glow></At>
      {/* the gap */}
      <Svg style={{ opacity: ramp(t, define, 0.6) }}>
        <DrawPath d={`M${lx + 270} 640 Q 960 ${640 - 120 * bridge} ${rx - 220} 640`} p={bridge * (1 - broken)} color={GOLD} width={6} len={800} />
      </Svg>
      <At x={960} y={440} o={ramp(t, noBridge + 1.2, 0.5) * (1 - ramp(t, nature, 0.4))}><Glow color={WARM} size={44} serif>no bridge</Glow></At>
      <At x={960} y={440} o={between(t, nature, built + 0.2)}><Struck at={nature + 1.0} size={36}>in nature?</Struck></At>
      <Svg style={{ opacity: ramp(t, built, 0.4) }}>
        <DrawPath d="M960 160 L960 800" p={ramp(t, built, 1.0)} color={WARM} width={6} len={700} />
      </Svg>
      <At x={960} y={130} o={ramp(t, built + 0.3, 0.5)}><Chip color={WARM} size={30}>the premise</Chip></At>
      <Ring x={lx} y={500} p={ramp(t, kinds, 1.2)} r0={200} r1={320} color={ICE} />
      <Ring x={rx} y={500} p={ramp(t, kinds + 0.2, 1.2)} r0={180} r1={300} color={ROSE} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. colour co-arises
const Colour: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const drop = c("Drop that premise"), noNeed = c("the gap does not need bridging"), col = c("Take colour");
  const wave = c("a wavelength of light alone"), mind = c("Nor is it found in a mind alone"), five = c("light, eye, nerves, contrast and naming");
  const seer = c("The one who sees"), seen = c("the seeing, and the seen"), tog = c("designated together"), first = c("None of them comes first");
  const fall = ramp(t, drop + 0.3, 1.4);
  const partB = five - 0.3;
  const conv = ramp(t, five, 2.2);
  const partC = seer - 0.3;
  const labels = ["light", "eye", "nerves", "contrast", "naming"];
  const cols = [GOLD, TEAL, ROSE, VIOLET, ICE];
  return (
    <AbsoluteFill>
      <Scene from={drop - 0.3} to={col - 0.2}>
        <At x={960 - fall * 40} y={460 + fall * 360} o={1 - fall} r={-fall * 10}><Chip color={WARM} size={44}>the premise</Chip></At>
        <At x={960} y={300} o={ramp(t, noNeed, 0.5)}><Glow color={CHALK} size={46} serif>no gap to bridge</Glow></At>
      </Scene>
      <Scene from={col - 0.1} to={partB}>
        <At x={960} y={420} s={pop(t, fps, col)}><Apple size={230} /></At>
        <Svg style={{ opacity: ramp(t, wave, 0.5) }}>
          <path d={Array.from({ length: 50 }, (_, i) => `${i ? "L" : "M"}${300 + i * 8} ${420 + 40 * Math.sin(i * 0.55 - t * 4)}`).join(" ")} fill="none" stroke="#FF4D5E" strokeWidth={4} />
        </Svg>
        <At x={500} y={560} o={ramp(t, wave + 0.2, 0.5)}><Struck at={wave + 1.4} size={34}>red in the light?</Struck></At>
        <At x={1440} y={420} s={pop(t, fps, mind)}><Person size={200} color={VIOLET} /></At>
        <At x={1440} y={580} o={ramp(t, mind + 0.2, 0.5)}><Struck at={mind + 1.4} size={34}>red in the mind?</Struck></At>
      </Scene>
      <Scene from={partB + 0.1} to={partC}>
        {labels.map((lab, i) => {
          const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
          const r = 340 - 160 * conv;
          const x = 960 + r * Math.cos(a), y = 440 + r * 0.8 * Math.sin(a);
          return (
            <React.Fragment key={i}>
              <At x={x} y={y} s={pop(t, fps, five + i * 0.35)}><Orb size={60} color={cols[i]} /></At>
              <At x={960 + (r + 110) * Math.cos(a)} y={440 + (r + 90) * 0.8 * Math.sin(a)} o={ramp(t, five + i * 0.35, 0.4)}><Glow color={cols[i]} size={32}>{lab}</Glow></At>
            </React.Fragment>
          );
        })}
        <At x={960} y={440} o={ramp(t, five + 2.0, 0.6)} s={0.7 + 0.3 * ramp(t, five + 2.0, 0.6)}><Apple size={130} /></At>
        <At x={960} y={800} o={ramp(t, five + 2.2, 0.5)}><Glow color="#FF7A85" size={36}>red appears where they meet</Glow></At>
      </Scene>
      <Scene from={partC + 0.2} to={1e9}>
        {[[960, 230, <Person size={150} color={VIOLET} />, "one who sees", VIOLET, seer], [600, 600, <Eye size={190} />, "seeing", TEAL, seen],
          [1320, 600, <Apple size={140} />, "seen", "#FF7A85", seen + 0.6]].map(([x, y, icon, lab, cl, at], i) => (
          <React.Fragment key={i}>
            <At x={x as number} y={y as number} s={pop(t, fps, at as number)}>{icon as React.ReactNode}</At>
            <At x={x as number} y={(y as number) + 120} o={ramp(t, (at as number) + 0.3, 0.5)}><Glow color={cl as string} size={32}>{lab as string}</Glow></At>
          </React.Fragment>
        ))}
        {[[960, 230, 600, 600], [600, 600, 1320, 600], [1320, 600, 960, 230]].map(([a, b, x2, y2], i) => (
          <Flow key={i} x1={a + (x2 - a) * 0.22} y1={b + (y2 - b) * 0.22} x2={a + (x2 - a) * 0.78} y2={b + (y2 - b) * 0.78} color={GOLD} p={ramp(t, tog, 0.8)} />
        ))}
        <At x={960} y={490} o={ramp(t, tog + 0.3, 0.5)}><Glow color={GOLD} size={40} serif>together</Glow></At>
        <At x={1560} y={200} o={ramp(t, first, 0.5)}><Glow color={CHALK} size={36}>none first</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. eye-consciousness arises
const EyeCons: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Early Buddhist teaching"), dep = c("Dependent on the eye and forms"), arises = c("eye consciousness arises");
  const notLight = c("not a standing light"), pointed = c("pointed at objects"), of = c("consciousness of something, through something");
  const partB = notLight - 0.3;
  const spark = ramp(t, arises, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={80} o={ramp(t, t0, 0.5)}><Chip color={GOLD} size={36}>early Buddhist teaching</Chip></At>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={520} y={430} s={pop(t, fps, dep)}><Eye size={260} /></At>
        <At x={520} y={570} o={ramp(t, dep + 0.3, 0.5)}><Glow color={TEAL} size={34}>eye</Glow></At>
        <At x={1400} y={430} s={pop(t, fps, dep + 0.6)}>
          <svg width={260} height={200} viewBox="0 0 260 200" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
            <circle cx={60} cy={120} r={50} fill={`${ROSE}55`} stroke={ROSE} strokeWidth={3} />
            <rect x={110} y={40} width={80} height={80} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} transform="rotate(12 150 80)" />
            <polygon points="200,180 240,100 255,180" fill={`${TEAL}55`} stroke={TEAL} strokeWidth={3} />
          </svg>
        </At>
        <At x={1400} y={570} o={ramp(t, dep + 0.9, 0.5)}><Glow color={GOLD} size={34}>forms</Glow></At>
        <Flow x1={680} y1={430} x2={900} y2={430} color={TEAL} p={ramp(t, arises - 0.3, 0.6)} />
        <Flow x1={1250} y1={430} x2={1020} y2={430} color={GOLD} p={ramp(t, arises - 0.3, 0.6)} />
        <At x={960} y={430} s={spark}><Orb size={110} color={VIOLET} /></At>
        <Ring x={960} y={430} p={ramp(t, arises + 0.2, 1.2)} r0={60} r1={200} color={VIOLET} />
        <At x={960} y={620} o={ramp(t, arises + 0.4, 0.5)}><Glow color={VIOLET} size={40}>eye-consciousness arises</Glow></At>
      </Scene>
      <Scene from={partB + 0.2} to={1e9}>
        <AbsoluteFill style={{ opacity: 1 - ramp(t, of - 0.2, 0.6) }}>
          <At x={480} y={420} s={pop(t, fps, notLight)}>
            <svg width={180} height={140} viewBox="0 0 180 140" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
              <rect x={10} y={45} width={90} height={50} rx={10} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={3} />
              <polygon points="100,40 140,20 140,120 100,100" fill={`${GOLD}66`} stroke={GOLD} strokeWidth={3} />
            </svg>
          </At>
          <Svg style={{ opacity: ramp(t, pointed, 0.6) }}>
            <polygon points="620,400 1300,260 1300,580 620,440" fill={`${GOLD}22`} />
          </Svg>
          {[0, 1, 2].map((i) => <At key={i} x={1380} y={300 + i * 120} s={pop(t, fps, pointed + i * 0.15)}><Orb size={50} color={DIM} /></At>)}
          <Cross x={900} y={420} at={pointed + 1.0} r={170} />
          <At x={900} y={680} o={ramp(t, notLight, 0.5)}><Glow color={DIM} size={36}>a standing light, pointed at things?</Glow></At>
        </AbsoluteFill>
        <At x={960} y={430} o={ramp(t, of, 0.6)}>
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <Orb size={80} color={VIOLET} />
            <Glow color={VIOLET} size={50} serif>of something, through something</Glow>
          </div>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. not a container, not a producer, not apart
const ThreeNots: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("not a container"), b = c("not a hidden producer"), d = c("not found apart");
  return (
    <AbsoluteFill>
      <At x={420} y={400} s={pop(t, fps, a)}>
        <div style={{ width: 260, height: 220, border: `4px solid ${TEAL}`, borderTop: "none", borderRadius: "0 0 20px 20px", background: `${TEAL}14`, position: "relative" }}>
          {[GOLD, ROSE, VIOLET].map((cl, i) => <div key={i} style={{ position: "absolute", left: 30 + i * 70, top: 120, width: 50, height: 50, borderRadius: "50%", background: cl, opacity: 0.7 }} />)}
        </div>
      </At>
      <At x={420} y={620} o={ramp(t, a, 0.5)}><Struck at={a + 1.1} size={38}>a container</Struck></At>
      <At x={960} y={400} s={pop(t, fps, b)}>
        <div style={{ position: "relative", width: 280, height: 260 }}>
          <div style={{ position: "absolute", left: 40, top: 40 }}><Gear size={130} rot={t * 50} /></div>
          <div style={{ position: "absolute", left: 140, top: 110 }}><Gear size={90} rot={-t * 70} /></div>
          <div style={{ position: "absolute", left: 0, top: 0, width: 280, height: 260, borderRadius: 12, background: `linear-gradient(90deg, ${VIOLET}88, ${VIOLET}33 50%, transparent)` }} />
        </div>
      </At>
      <At x={960} y={620} o={ramp(t, b, 0.5)}><Struck at={b + 1.1} size={38}>a hidden producer</Struck></At>
      <At x={1500} y={330} s={pop(t, fps, d)}><Orb size={120} color={GOLD} /></At>
      {[0, 1, 2].map((i) => <At key={i} x={1400 + i * 100} y={480} s={pop(t, fps, d + 0.2)}><Orb size={50} color={DIM} /></At>)}
      <At x={1500} y={620} o={ramp(t, d, 0.5)}><Struck at={d + 1.1} size={38}>apart from objects</Struck></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. where is the taste?
const WhereTaste: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Return to the tea"), where = c("Where is the taste"), cup = c("Not in the cup alone");
  const sweet = c("after a sweet meal"), cold = c("again with a cold"), mouth = c("Not in the mouth alone");
  const taster = c("no separate taster"), look = c("Look for the one who tastes"), more = c("only more tasting"), list = c("The warmth, the bitterness, the swallow");
  const partB = taster - 0.3;
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, where, 0.5)}><Glow color={CHALK} size={50} serif>where is the taste?</Glow></At>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={460} y={420} s={pop(t, fps, t0)}><Teacup size={280} /></At>
        <At x={460} y={600} o={ramp(t, cup, 0.5)}><Struck at={cup + 1.0} size={36}>in the cup?</Struck></At>
        <At x={1010} y={290} s={pop(t, fps, sweet)}><Chip color={ROSE} size={30}>after something sweet</Chip></At>
        <TasteWave x={880} y={370} w={260} color={GREEN} o={ramp(t, sweet + 0.4, 0.5)} amp={30} />
        <At x={1010} y={500} s={pop(t, fps, cold)}><Chip color={ICE} size={30}>with a cold</Chip></At>
        <TasteWave x={880} y={580} w={260} color={DIM} o={ramp(t, cold + 0.4, 0.5)} amp={6} />
        <At x={1500} y={420} s={pop(t, fps, mouth)}>
          <svg width={220} height={120} viewBox="0 0 220 120" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
            <path d="M10 50 Q 110 -10 210 50 Q 110 130 10 50 Z" fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4} />
            <path d="M30 52 Q 110 70 190 52" fill="none" stroke={ROSE} strokeWidth={3} />
          </svg>
        </At>
        <At x={1500} y={600} o={ramp(t, mouth, 0.5)}><Struck at={mouth + 1.0} size={36}>in the mouth?</Struck></At>
      </Scene>
      <Scene from={partB + 0.2} to={1e9}>
        <At x={760} y={440} s={pop(t, fps, taster)}><Teacup size={240} /></At>
        <At x={1180} y={420} o={ramp(t, taster + 0.2, 0.5) * (1 - ramp(t, more, 0.8))}><Person size={240} color={DIM} dashed /></At>
        <At x={1180} y={620} o={between(t, taster + 0.3, more)}><Glow color={DIM} size={34}>a taster behind?</Glow></At>
        <At x={1180 + 60 * Math.sin((t - look) * 2)} y={400} o={between(t, look, list + 1.5, 0.4)}><Lens size={180} /></At>
        {[["warmth", WARM, 520], ["bitterness", GREEN, 960], ["swallow", ROSE, 1400]].map(([lab, cl, x], i) => (
          <At key={i} x={x as number} y={760} s={pop(t, fps, list + i * 0.6)}><Chip color={cl as string} size={36}>{lab as string}</Chip></At>
        ))}
        <At x={1180} y={420} o={ramp(t, more + 0.2, 0.5)}><Glow color={GOLD} size={42} serif>only tasting</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. precise, not vague
const Garden: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Yet the taste is not vague"), garden = c("name the garden and the season"), viv = c("vivid, precise and reliable"), sep = c("a separate light");
  const hills = ramp(t, garden, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>not vague</Glow></At>
      <Svg style={{ opacity: hills }}>
        <path d="M300 520 Q 560 300 860 470 Q 1120 330 1620 500 L1620 620 L300 620 Z" fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }} />
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${340 + i * 20} ${560 + i * 10} Q 900 ${430 + i * 28} 1580 ${560 + i * 8}`} fill="none" stroke={GREEN} strokeWidth={3} strokeOpacity={0.5} />
        ))}
      </Svg>
      <At x={1450} y={250} s={pop(t, fps, garden + 0.6)}><Sun size={130} rot={t * 20} /></At>
      <At x={960} y={250} s={pop(t, fps, garden + 0.3)}><Chip color={GREEN} size={34}>this garden, this season</Chip></At>
      <At x={560} y={330} s={pop(t, fps, t0 + 0.3)}><Teacup size={200} /></At>
      {[["vivid", GOLD, 600], ["precise", TEAL, 960], ["reliable", ROSE, 1320]].map(([lab, cl, x], i) => (
        <At key={i} x={x as number} y={720} s={pop(t, fps, viv + i * 0.4)}><Chip color={cl as string} size={38}>{lab as string}</Chip></At>
      ))}
      <Svg style={{ opacity: between(t, sep, sep + 3, 0.4) }}>
        <polygon points="250,120 470,280 650,380 420,140" fill={`${CHALK}22`} />
      </Svg>
      <At x={300} y={150} o={between(t, sep, sep + 3, 0.4)}><Struck at={sep + 0.9} size={32}>a separate light?</Struck></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. brain science
const BrainScience: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("But surely, someone will say"), sci = c("brain science shows"), dose = c("A dose of anaesthetic");
  const ev = c("The evidence shows dependence"), aff = c("affirms dependence throughout"), self = c("a self-standing brain"), manu = c("manufacturing a separate mind");
  const app = c("The brain, too, is an appearance"), fw = c("the framework of physiology"), shows = c("Dependence shows emptiness"), ground = c("make the brain a ground");
  const dim = between(t, dose + 0.4, ev + 0.4, 0.8);
  const partB = self - 0.3, partC = app - 0.3;
  const fall = ramp(t, ground + 1.0, 1.4);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={40}>but surely...</Glow></At>
        <At x={560} y={430} s={pop(t, fps, t0 + 0.3)}><Brain size={360} fire={ramp(t, sci, 0.6) * (1 - dim)} /></At>
        <At x={1360} y={430} s={pop(t, fps, sci + 0.4)} o={1 - 0.8 * dim}>
          <div style={{ width: 260, height: 260, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}cc, ${GOLD}44 50%, transparent 72%)`, boxShadow: `0 0 60px ${GOLD}88` }} />
        </At>
        <At x={1360} y={640} o={ramp(t, sci + 0.6, 0.5)}><Glow color={GOLD} size={34}>awareness</Glow></At>
        <At x={960} y={260} s={pop(t, fps, dose)}>
          <svg width={200} height={70} viewBox="0 0 200 70" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
            <rect x={30} y={20} width={120} height={30} rx={6} fill={`${ICE}44`} stroke={ICE} strokeWidth={3} />
            <line x1={150} y1={35} x2={195} y2={35} stroke={ICE} strokeWidth={3} />
            <line x1={5} y1={35} x2={30} y2={35} stroke={ICE} strokeWidth={6} /><line x1={5} y1={18} x2={5} y2={52} stroke={ICE} strokeWidth={4} />
          </svg>
        </At>
        <At x={960} y={330} o={ramp(t, dose + 0.3, 0.5)}><Glow color={ICE} size={30}>anaesthetic</Glow></At>
        <Flow x1={760} y1={460} x2={1200} y2={460} color={TEAL} p={ramp(t, ev, 0.6)} />
        <Flow x1={1200} y1={500} x2={760} y2={500} color={TEAL} p={ramp(t, ev + 0.3, 0.6)} />
        <At x={960} y={580} o={ramp(t, ev + 0.4, 0.5)}><Chip color={TEAL} size={36}>dependence</Chip></At>
        <At x={960} y={760} o={ramp(t, aff, 0.5)}><Glow color={TEAL} size={36}>affirmed, throughout</Glow></At>
      </Scene>
      <Scene from={partB + 0.2} to={partC}>
        <At x={520} y={430} s={pop(t, fps, self)}><Brain size={320} /></At>
        <At x={520} y={640} o={ramp(t, self + 0.3, 0.5)}><Glow color={ROSE} size={32}>self-standing brain</Glow></At>
        <Svg style={{ opacity: ramp(t, manu, 0.5) }}>
          <rect x={720} y={520} width={480} height={26} rx={13} fill="#ffffff10" stroke={DIM} strokeWidth={3} />
          {[0, 1, 2, 3].map((i) => <circle key={i} cx={760 + ((t * 80 + i * 120) % 440)} cy={533} r={9} fill={GOLD} />)}
        </Svg>
        <At x={1400} y={430} s={pop(t, fps, manu + 0.3)}><Orb size={200} color={GOLD} /></At>
        <At x={1400} y={640} o={ramp(t, manu + 0.5, 0.5)}><Glow color={GOLD} size={32}>separate mind</Glow></At>
        <Cross x={960} y={460} at={manu + 1.6} r={260} />
      </Scene>
      <Scene from={partC + 0.2} to={1e9}>
        <At x={960} y={360 - 0 * fall} s={pop(t, fps, app)}><Orb size={150} color={GOLD} /></At>
        <At x={960 - fall * 50} y={560 + fall * 280} o={1 - fall} r={-fall * 8}>
          <div style={{ position: "relative" }}>
            <Brain size={300} dashed color={ROSE} />
          </div>
        </At>
        <At x={960} y={360} o={ramp(t, app + 0.5, 0.5) * (1 - ramp(t, ground, 0.4))}><Glow color={CHALK} size={28}>appearance</Glow></At>
        <PictureFrame x={960} y={470} w={760} h={560} o={ramp(t, fw, 0.6) * (1 - fall)} dashed tag="physiology" />
        <At x={1560} y={300} o={ramp(t, shows, 0.5)}><Glow color={TEAL} size={36}>dependence</Glow></At>
        <Flow x1={1560} y1={340} x2={1560} y2={440} color={TEAL} p={ramp(t, shows + 0.3, 0.5)} />
        <At x={1560} y={480} o={ramp(t, shows + 0.5, 0.5)}><Glow color={GOLD} size={36}>shows emptiness</Glow></At>
        <At x={960} y={830 - 30 * fall} o={between(t, ground, ground + 2.4, 0.4)}><Glow color={WARM} size={36}>a ground?</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. where the mystery came from
const Mystery: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The mystery came from imagining"), a = c("a tea without tasting"), b = c("a taster without tea"), meet = c("how the two could meet");
  const dissolve = ramp(t, meet + 1.4, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>where the mystery came from</Glow></At>
      {[[520, a, <Teacup size={220} />, "tea, no tasting"], [1400, b, <Person size={200} color={ROSE} />, "taster, no tea"]].map(([x, at, icon, lab], i) => (
        <React.Fragment key={i}>
          <At x={x as number} y={430} s={pop(t, fps, at as number)} o={1 - dissolve} blur={dissolve * 8}>
            <div style={{ width: 380, height: 340, border: `3px solid ${DIM}`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
              background: "#ffffff06" }}>{icon as React.ReactNode}</div>
          </At>
          <At x={x as number} y={650} o={ramp(t, (at as number) + 0.3, 0.5) * (1 - dissolve)}><Glow color={DIM} size={32}>{lab as string}</Glow></At>
        </React.Fragment>
      ))}
      <At x={960} y={430} o={ramp(t, meet, 0.5) * (1 - dissolve)}><Glow color={GOLD} size={110} serif>?</Glow></At>
      <At x={960} y={430} o={dissolve}><Teacup size={260} /></At>
      <At x={960} y={430} o={dissolve}>
        <div style={{ width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}33, transparent 65%)` }} />
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 13. close
const Close: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Take another sip"), miss = c("Nothing is missing"), hid = c("nothing is hidden behind it");
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, t0, 1.2)}>
        <div style={{ width: 800, height: 800, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}33, ${TEAL}11 50%, transparent 70%)` }} />
      </At>
      <At x={960} y={420} s={pop(t, fps, t0 - 0.3, 14)}><Teacup size={340} /></At>
      <Mist x={960} y={330} start={t0} color={GOLD} spread={260} n={18} />
      {[WARM, GREEN, ROSE, VIOLET].map((cl, i) => {
        const a = t * 0.4 + (i * Math.PI) / 2;
        return <At key={i} x={960 + 330 * Math.cos(a)} y={420 + 170 * Math.sin(a)} o={ramp(t, t0 + 0.4 + i * 0.2, 0.6)}><Orb size={40} color={cl} /></At>;
      })}
      <At x={960} y={680} o={ramp(t, miss, 0.6)}><Glow color={CHALK} size={46} serif>nothing missing</Glow></At>
      <Centre top={730}><Reveal text="nothing hidden behind it" at={hid} size={72} /></Centre>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["tea", 0], ["hard", c("Philosophers ask a famous question", 0.6)], ["frame", c("On this analysis", 0.6)], ["split", c("two assumptions made together", 0.6)],
    ["colour", c("Drop that premise", 0.6)], ["eye", c("Early Buddhist teaching", 0.6)], ["nots", c("not a container", 0.6)],
    ["taste", c("Return to the tea", 0.6)], ["garden", c("Yet the taste is not vague", 0.6)], ["brain", c("But surely, someone will say", 0.6)],
    ["frame", c("The mystery came from imagining", 0.6)], ["close", c("Take another sip", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Philosophers ask a famous question", 0.9)], <Sip />],
    [S("Philosophers ask a famous question", "two assumptions made together"), <HardProblem />],
    [S("two assumptions made together", "Drop that premise"), <TwoAssumptions />],
    [S("Drop that premise", "Early Buddhist teaching"), <Colour />],
    [S("Early Buddhist teaching", "not a container"), <EyeCons />],
    [S("not a container", "Return to the tea"), <ThreeNots />],
    [S("Return to the tea", "Yet the taste is not vague"), <WhereTaste />],
    [S("Yet the taste is not vague", "But surely, someone will say"), <Garden />],
    [S("But surely, someone will say", "The mystery came from imagining"), <BrainScience />],
    [S("The mystery came from imagining", "Take another sip"), <Mystery />],
    [S("Take another sip", null), <Close />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
