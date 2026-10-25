// Anatta to Emptiness, Chapter 14: The Formation of a Flower, Part One. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill, interpolateColors } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A single red flower", "the most obvious thing",
  "walks all the way down", "anything solid is needed",
  "One caution first", "a reduction to matter", "not a reduction to mind", "Grounding the flower in atoms", "or in consciousness", "move the hidden base",
  "set that base aside on both sides",
  "The first level is the vivid", "The texture of the petals", "A scent, sweet and specific", "Perhaps a faint sound", "Each arrives complete",
  "carries no trace of the texture", "The scent carries nothing",
  "Attend only to the red", "The honest answer is contrast", "the green of the stem", "felt against a fingertip",
  "should not be pushed too far", "not simply reduced to contrast", "cannot be established apart", "Its radiance is left untouched", "something on its own",
  "a coat of paint",
  "look at the red again", "exactly as radiant", "never added on top", "the whole of what is there",
  "Then a question arises", "inside, or outside",
  "It cannot simply be outside", "Without an eye", "Nor is it simply inside", "Change the light striking", "Light, eye and nerve", "the same formation",
  "not a more solid layer",
  "finds no boundary to cross", "two banks, mind on one side",
  "The second level is the binding", "where is the flowerness", "Is it the red", "A white flower", "The texture? Flowers range", "The scent? Many have",
  "The shape varies", "A heap of qualities", "nothing has ever been found",
  "not hiding somewhere clever", "The word names the way", "In this book's terms", "Pattern and label are not two",
  "No manager is needed", "unseen processing surely happens", "an owner be found", "the absence of self",
  "Red, fragrance, softness", "Nothing beneath them",
];

// deeper golds and indigos for this series, plus the flower's own red
const DGOLD = "#D9A441", AMBER = "#F0B85A", INDIGO = "#6F63E8", RED = "#E8384F", LEAF = "#5BBF6A";

const M = {
  bloom: { a: "rgba(150,40,70,0.45)", b: "rgba(70,55,160,0.45)", c: "rgba(180,130,50,0.3)" },
  caution: { a: "rgba(60,50,150,0.5)", b: "rgba(170,120,50,0.35)", c: "rgba(40,80,120,0.3)" },
  qualia: { a: "rgba(170,50,80,0.45)", b: "rgba(60,120,90,0.35)", c: "rgba(80,60,160,0.35)" },
  radiant: { a: "rgba(200,60,80,0.5)", b: "rgba(190,140,60,0.4)", c: "rgba(70,50,150,0.3)" },
  inout: { a: "rgba(70,50,150,0.5)", b: "rgba(160,50,80,0.4)", c: "rgba(40,110,130,0.3)" },
  binding: { a: "rgba(60,55,160,0.5)", b: "rgba(190,140,60,0.35)", c: "rgba(150,50,80,0.3)" },
  close: { a: "rgba(180,50,75,0.45)", b: "rgba(80,60,170,0.45)", c: "rgba(190,140,60,0.35)" },
};

// ---------------------------------------------------------------- drawings
/** A flower in a 400x600 box: grow draws the stem and leaves, bloom opens the petals. */
const Flower: React.FC<{ id: string; w?: number; grow?: number; bloom?: number; petal?: string; glow?: number; o?: number; shape?: number }> =
  ({ id, w = 300, grow = 1, bloom = 1, petal = RED, glow = 0.5, o = 1, shape = 0 }) => {
    const { t } = useT();
    const sway = Math.sin(t * 0.9) * 2;
    const n = shape === 1 ? 5 : shape === 2 ? 12 : 7;
    const rx = shape === 2 ? 22 : 46, ry = shape === 1 ? 70 : 95;
    return (
      <svg width={w} height={w * 1.5} viewBox="0 0 400 600" style={{ overflow: "visible", opacity: o }}>
        <defs>
          <radialGradient id={`${id}p`} cx="0.5" cy="0.9" r="0.9">
            <stop offset="0" stopColor="#FFE0E4" /><stop offset="0.35" stopColor={petal} /><stop offset="1" stopColor={petal} stopOpacity={0.85} />
          </radialGradient>
          <radialGradient id={`${id}c`}><stop offset="0" stopColor="#FFF4C8" /><stop offset="1" stopColor={DGOLD} /></radialGradient>
        </defs>
        <g transform={`rotate(${sway} 200 600)`}>
          <path d="M200 600 C190 500 215 420 200 220" fill="none" stroke={LEAF} strokeWidth={9} strokeLinecap="round"
            strokeDasharray={420} strokeDashoffset={420 * (1 - grow)} />
          <path d="M198 470 C150 430 110 440 90 470 C130 490 170 490 198 470 Z" fill={`${LEAF}cc`} stroke={LEAF} strokeWidth={3} opacity={ramp(grow, 0.5, 0.3)} />
          <path d="M203 380 C250 340 290 350 312 378 C270 398 230 398 203 380 Z" fill={`${LEAF}cc`} stroke={LEAF} strokeWidth={3} opacity={ramp(grow, 0.7, 0.3)} />
          <g transform={`translate(200 200) scale(${bloom})`} style={{ filter: `drop-shadow(0 0 ${10 + 30 * glow}px ${petal})` }}>
            {Array.from({ length: n }).map((_, i) => (
              <ellipse key={i} cx={0} cy={-ry * 0.8} rx={rx} ry={ry} fill={`url(#${id}p)`} stroke="#ffffff55" strokeWidth={1.5}
                transform={`rotate(${(i / n) * 360 + t * 3})`} />
            ))}
            <circle r={34} fill={`url(#${id}c)`} />
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx={20 * Math.cos(i * 0.63)} cy={20 * Math.sin(i * 0.63)} r={3.5} fill="#7a4a10" />
            ))}
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

const Atom: React.FC<{ size?: number }> = ({ size = 180 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="-100 -100 200 200" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
      {[0, 60, 120].map((r, i) => <ellipse key={i} rx={90} ry={32} fill="none" stroke={ICE} strokeWidth={4} transform={`rotate(${r})`} />)}
      {[0, 60, 120].map((r, i) => {
        const a = t * 2 + i * 2;
        return <circle key={i} cx={90 * Math.cos(a)} cy={32 * Math.sin(a)} r={8} fill={TEAL} transform={`rotate(${r})`} />;
      })}
      <circle r={18} fill={AMBER} />
    </svg>
  );
};

const Head: React.FC<{ o?: number; dash?: boolean; color?: string }> = ({ o = 1, dash, color = CHALK }) => (
  <svg width={260} height={300} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
  </svg>
);

const Eye: React.FC<{ open: number; color?: string }> = ({ open, color = TEAL }) => (
  <svg width={150} height={86} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d={`M5 40 Q70 ${40 - 50 * open} 135 40 Q70 ${40 + 50 * open} 5 40 Z`} fill={`${color}22`} stroke={color} strokeWidth={4} />
    {open > 0.3 && <circle cx={70} cy={40} r={17 * open} fill={color} />}
  </svg>
);

const Note: React.FC = () => (
  <svg width={80} height={90} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={TEAL} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={TEAL} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={TEAL} />
  </svg>
);

const Scent: React.FC<{ color?: string }> = ({ color = VIOLET }) => {
  const { t } = useT();
  return (
    <svg width={120} height={120} viewBox="0 0 120 120" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      {[0, 1, 2].map((k) => (
        <path key={k} d={Array.from({ length: 20 }, (_, i) => `${i ? "L" : "M"}${25 + k * 35 + 10 * Math.sin(i / 3 - t * 3 + k)} ${110 - i * 5}`).join(" ")}
          fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" opacity={0.85} />
      ))}
    </svg>
  );
};

const Petal: React.FC<{ color?: string }> = ({ color = RED }) => (
  <svg width={130} height={110} viewBox="0 0 130 110" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M10 90 C20 20 90 0 120 20 C110 70 60 105 10 90 Z" fill={`${color}aa`} stroke={color} strokeWidth={3} />
    {[0, 1, 2, 3].map((i) => <path key={i} d={`M20 ${86 - i * 4} C50 ${60 - i * 10} 80 ${40 - i * 6} ${110 - i * 6} ${24 + i * 4}`} fill="none" stroke="#ffffff55" strokeWidth={1.5} />)}
  </svg>
);

// ---------------------------------------------------------------- scenes
const BloomScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("A single red flower", 0.6);
  const down = c("walks all the way down");
  const levels = ["level one · the qualities", "level two · the binding", "level three · the shared world"];
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 650, top: 600, width: 620, height: 60, borderRadius: "50%", background: `radial-gradient(ellipse, ${DGOLD}55, transparent 70%)`,
        opacity: ramp(t, a, 1) }} />
      <At x={960} y={420} o={1 - ramp(t, down - 0.2, 0.8) * 0.0}>
        <div style={{ transform: `translateX(${-420 * ramp(t, down - 0.2, 1.0)}px)` }}>
          <Flower id="f1" w={320} grow={ramp(t, a, 1.8)} bloom={ramp(t, a + 1.2, 1.6)} glow={0.4 + 0.3 * Math.sin(t * 1.5)} />
        </div>
      </At>
      <Mist x={960 - 420 * ramp(t, down - 0.2, 1.0)} y={300} start={a + 2} color={ROSE} spread={260} n={14} />
      <At x={960} y={130} o={ramp(t, c("the most obvious thing"), 0.5) * (1 - ramp(t, down - 0.2, 0.5))}><Glow color={CHALK} size={44} serif>the most obvious thing in the world</Glow></At>
      {levels.map((l, i) => (
        <React.Fragment key={i}>
          <At x={1240} y={260 + i * 170} s={pop(t, fps, down + 0.4 + i * 0.5)}><Chip color={[RED, DGOLD, INDIGO][i]} size={36}>{l}</Chip></At>
          {i < 2 && <Flow x1={1240} y1={295 + i * 170} x2={1240} y2={395 + i * 170} color={CHALK} p={ramp(t, down + 0.7 + i * 0.5, 0.4)} pulses={false} />}
        </React.Fragment>
      ))}
      <At x={1240} y={790} o={ramp(t, c("anything solid is needed"), 0.5)}><Glow color={AMBER} size={42} serif>anything solid needed?</Glow></At>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mat = c("a reduction to matter"), mind = c("not a reduction to mind"), atoms = c("Grounding the flower in atoms"), cons = c("or in consciousness");
  const move = c("move the hidden base"), both = c("set that base aside on both sides");
  const shift = ramp(t, move, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("One caution first", 0.3), 0.5)}><Glow color={AMBER} size={42} serif>one caution first</Glow></At>
      <At x={520} y={330} s={pop(t, fps, c("One caution first") + 0.3)}><Flower id="c1" w={150} /></At>
      <At x={520} y={570} s={pop(t, fps, atoms)}><Atom size={190} /></At>
      <At x={520} y={700} o={ramp(t, mat, 0.5)}><Glow color={ICE} size={32}>matter beneath?</Glow></At>
      <At x={1400} y={330} s={pop(t, fps, c("One caution first") + 0.6)}><Flower id="c2" w={150} /></At>
      <At x={1400} y={570} s={pop(t, fps, cons)}><Orb size={180} color={VIOLET} core={1} /></At>
      <At x={1400} y={700} o={ramp(t, mind, 0.5)}><Glow color={VIOLET} size={32}>mind beneath?</Glow></At>
      <Svg>
        <DrawPath d={`M640 590 Q960 ${470 - 60 * shift} 1280 590`} p={ramp(t, move, 1.0)} color={DGOLD} width={4} len={900} />
      </Svg>
      <At x={960} y={460} o={ramp(t, move + 0.3, 0.5)}><Glow color={DGOLD} size={30}>the base only moves</Glow></At>
      <Crossed x={520} y={570} at={both + 0.2} size={90} />
      <Crossed x={1400} y={570} at={both + 0.6} size={90} />
      <At x={960} y={800} o={ramp(t, both + 0.4, 0.5)}><Chip color={AMBER} size={36}>no base, on either side</Chip></At>
    </AbsoluteFill>
  );
};

const QualiaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const red = c("The first level is the vivid", -1.2);
  const items = [
    { at: red, el: <Orb size={150} color={RED} />, label: "red", col: RED },
    { at: c("The texture of the petals"), el: <div style={{ position: "relative" }}><Petal /><div style={{ position: "absolute", left: 70, top: 40 }}><Hand size={80} /></div></div>, label: "texture", col: ROSE },
    { at: c("A scent, sweet and specific"), el: <Scent />, label: "scent", col: VIOLET },
    { at: c("Perhaps a faint sound"), el: <Note />, label: "a faint sound", col: TEAL },
  ];
  const each = c("Each arrives complete");
  const wall = c("carries no trace of the texture");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("The first level is the vivid", 0.3), 0.5)}><Glow color={RED} size={44} serif>level one · the vivid qualities</Glow></At>
      {items.map((k, i) => (
        <React.Fragment key={i}>
          <At x={330 + i * 420} y={420} s={pop(t, fps, k.at)}>{k.el}</At>
          <At x={330 + i * 420} y={580} o={ramp(t, k.at + 0.2, 0.4)}><Glow color={k.col} size={36}>{k.label}</Glow></At>
          <Ring x={330 + i * 420} y={420} p={ramp(t, each + i * 0.3, 1.2)} r0={60} r1={200} color={k.col} />
        </React.Fragment>
      ))}
      {[0, 1, 2].map((i) => (
        <At key={i} x={540 + i * 420} y={460} o={ramp(t, wall + i * 0.3, 0.5)}>
          <div style={{ width: 0, height: 300, borderLeft: `3px dashed ${CHALK}88` }} />
        </At>
      ))}
      <At x={960} y={710} o={ramp(t, each, 0.5)}><Glow color={CHALK} size={38}>each complete · sharing nothing</Glow></At>
      <At x={960} y={800} o={ramp(t, c("The scent carries nothing"), 0.5)}><Glow color={DIM} size={30}>no trace of one in another</Glow></At>
    </AbsoluteFill>
  );
};

const ContrastScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const att = c("Attend only to the red", 0.4), con = c("The honest answer is contrast"), stem = c("the green of the stem"), tip = c("felt against a fingertip");
  return (
    <AbsoluteFill>
      <At x={620} y={430} s={pop(t, fps, stem - 0.1)}><div style={{ width: 520, height: 520, borderRadius: 30, background: `linear-gradient(135deg, ${LEAF}88, #1f5a3a)`, boxShadow: `0 0 40px ${LEAF}66` }} /></At>
      <At x={620} y={430} s={pop(t, fps, att)}><Orb size={260} color={RED} /></At>
      <At x={620} y={130} o={ramp(t, att + 0.2, 0.5)}><Glow color={RED} size={42} serif>what makes it this red?</Glow></At>
      <div style={{ position: "absolute", top: 730, left: 320, width: 600, display: "flex", justifyContent: "center" }}>
        <Reveal text="contrast" at={con + 0.2} size={84} color={AMBER} />
      </div>
      <At x={620} y={250} o={ramp(t, stem + 0.3, 0.5)}><Glow color={LEAF} size={30}>against the green</Glow></At>
      <At x={1380} y={420} s={pop(t, fps, tip)}><div style={{ position: "relative", width: 300, height: 220 }}>
        <div style={{ position: "absolute", left: 0, top: 40 }}><Petal /></div>
        <div style={{ position: "absolute", left: 110 - 20 * Math.sin(t * 2), top: 0 }}><Hand size={140} /></div>
      </div></At>
      <At x={1380} y={620} o={ramp(t, tip + 0.4, 0.5)}><Glow color={ROSE} size={32}>soft · against a fingertip</Glow></At>
    </AbsoluteFill>
  );
};

const NotReduceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const far = c("should not be pushed too far"), red = c("not simply reduced to contrast"), apart = c("cannot be established apart");
  const rad = c("Its radiance is left untouched"), own = c("something on its own"), paint = c("a coat of paint");
  const conds = [["light", AMBER], ["eye", TEAL], ["green stem", LEAF], ["background", INDIGO], ["attention", VIOLET]] as const;
  const pp = ramp(t, paint, 1.2);
  const sw = ramp(t, paint - 0.4, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - sw }}>
        <Struck x={960} y={130} at={far} strikeAt={red + 0.6} color={DIM}>red is nothing but contrast</Struck>
        <At x={960} y={450} s={pop(t, fps, far + 0.3)}><Orb size={200} color={RED} /></At>
        {conds.map(([w, col], i) => {
          const a = (i / conds.length) * Math.PI * 2 - Math.PI / 2;
          const x = 960 + 400 * Math.cos(a), y = 450 + 240 * Math.sin(a);
          return (
            <React.Fragment key={i}>
              <Flow x1={x} y1={y} x2={960 + 110 * Math.cos(a)} y2={450 + 110 * Math.sin(a)} color={col} p={ramp(t, apart + 0.3 + i * 0.2, 0.5)} />
              <At x={x} y={y} s={pop(t, fps, apart + 0.2 + i * 0.2)}><Chip color={col} size={30}>{w}</Chip></At>
            </React.Fragment>
          );
        })}
        <Ring x={960} y={450} p={ramp(t, rad, 1.6)} r0={100} r1={360} color={RED} />
        <At x={960} y={450} o={ramp(t, rad, 0.8) * 0.8}><div style={{ width: 440, height: 440, borderRadius: "50%", background: `radial-gradient(circle, ${RED}55, transparent 65%)` }} /></At>
        <Struck x={960} y={790} at={own - 0.3} strikeAt={own + 0.5} color={WARM}>first something on its own</Struck>
      </AbsoluteFill>
      <At x={1140} y={430} s={pop(t, fps, paint - 0.2)}><Flower id="n1" w={240} petal="#7c7c88" glow={0} /></At>
      <At x={1140} y={430} o={pp}><div style={{ clipPath: `inset(0 ${100 - 100 * pp}% 0 0)` }}><Flower id="n2" w={240} glow={0.3} /></div></At>
      <At x={760 + 320 * pp} y={300} s={pop(t, fps, paint)} r={-30}>
        <svg width={140} height={180} viewBox="0 0 140 180"><rect x={10} y={10} width={120} height={46} rx={14} fill={RED} stroke={CHALK} strokeWidth={4} />
          <path d="M70 56 L70 90 L30 90 L30 170" fill="none" stroke={CHALK} strokeWidth={8} strokeLinecap="round" /></svg>
      </At>
      <Crossed x={1140} y={430} at={paint + 1.4} size={150} />
      <At x={600} y={620} o={ramp(t, paint + 0.2, 0.5)}><Glow color={CHALK} size={36}>a coat of paint on a flower?</Glow></At>
    </AbsoluteFill>
  );
};

const RadiantScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("look at the red again", 0.4), rad = c("exactly as radiant"), top = c("never added on top"), whole = c("the whole of what is there");
  const g = ramp(t, rad, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={g * 0.9}><div style={{ width: 900, height: 900, borderRadius: "50%", background: `radial-gradient(circle, ${RED}66, ${DGOLD}22 40%, transparent 65%)` }} /></At>
      <At x={960} y={420} s={pop(t, fps, look)}><Flower id="r1" w={300 + 40 * g} glow={0.4 + 0.8 * g} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={960} y={300} p={((t - rad) * 0.35 + k / 3) % 1 * ramp(t, rad, 0.3)} r0={120} r1={420} color={RED} width={2} />)}
      <At x={960} y={110} o={ramp(t, rad, 0.5)}><Glow color={ROSE} size={42} serif>let it be as radiant as it is</Glow></At>
      <At x={1520} y={360} o={between(t, top, whole + 1.5)}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative" }}>
          <Chip color={AMBER} size={30}>a glow on top</Chip><Chip color={DIM} size={30}>a duller fact beneath</Chip>
        </div>
      </At>
      <Crossed x={1520} y={360} at={top + 1.0} size={120} />
      <At x={960} y={800} o={ramp(t, whole, 0.6)}><Glow color={CHALK} size={46} serif>the whole of what is there</Glow></At>
    </AbsoluteFill>
  );
};

const InOutScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q0 = c("Then a question arises", 0.3), q = c("inside, or outside", 0.6), outA = c("It cannot simply be outside"), eye = c("Without an eye"), inA = c("Nor is it simply inside");
  const light = c("Change the light striking"), len = c("Light, eye and nerve"), same = c("the same formation"), solid = c("not a more solid layer");
  const sw = ramp(t, len - 0.3, 0.6);
  const closed = between(t, eye + 0.2, inA - 0.2, 0.5);
  const hue = between(t, light + 0.4, len - 0.4, 0.8);
  const petal = interpolateColors(closed, [0, 1], [RED, "#55505e"]);
  const petal2 = interpolateColors(hue, [0, 1], [petal, "#C23CA8"]);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, q, 0.5)}><Glow color={AMBER} size={46} serif>inside · or outside?</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - sw }}>
        <Flow x1={1260} y1={380} x2={640} y2={420} color={RED} p={ramp(t, q0 + 0.6, 0.8)} />
        <At x={480} y={470} s={pop(t, fps, q0)}><Head /></At>
        <At x={530} y={430} s={pop(t, fps, eye)}><Eye open={1 - closed} /></At>
        <At x={1380} y={450} s={pop(t, fps, q0 + 0.3)}><Flower id="io" w={240} petal={petal2} /></At>
        <At x={1380} y={760} o={ramp(t, outA, 0.5) * (1 - ramp(t, inA, 0.4))}><Glow color={DIM} size={30}>no eye · no such red</Glow></At>
        <At x={480} y={760} o={between(t, inA, light, 0.4)}>
          <div style={{ position: "relative" }}><Chip color={VIOLET} size={30}>a private inner theatre</Chip><Strike at={inA + 1.0} /></div>
        </At>
        <At x={1680} y={200} s={pop(t, fps, light)}>
          <div style={{ width: 90, height: 90, borderRadius: "50%", background: interpolateColors(hue, [0, 1], ["#FFF6D8", "#8FB8FF"]), boxShadow: `0 0 50px ${interpolateColors(hue, [0, 1], ["#FFF6D8", "#8FB8FF"])}` }} />
        </At>
        <Flow x1={1640} y1={240} x2={1440} y2={330} color={interpolateColors(hue, [0, 1], [AMBER, "#8FB8FF"])} p={ramp(t, light, 0.5)} />
        <At x={1500} y={760} o={ramp(t, light + 0.4, 0.5)}><Glow color={ICE} size={30}>change the light · the red changes</Glow></At>
      </AbsoluteFill>
      {[["light", AMBER], ["eye", TEAL], ["nerve", VIOLET], ["red", RED]].map(([w, col], i) => {
        const a = (i / 4) * Math.PI * 2 - Math.PI / 2 + ramp(t, same, 2) * 0.6;
        const r = 260 - 60 * ramp(t, same, 1.2);
        return <At key={i} x={960 + r * 1.3 * Math.cos(a)} y={450 + r * Math.sin(a)} s={pop(t, fps, len + i * 0.25)}><Chip color={col} size={38}>{w}</Chip></At>;
      })}
      <Ring x={960} y={450} p={ramp(t, same + 0.2, 1.6)} r0={150} r1={380} color={DGOLD} />
      <At x={960} y={450} o={ramp(t, same, 0.5)}><Glow color={DGOLD} size={40} serif>one formation</Glow></At>
      <Struck x={960} y={790} at={solid - 0.2} strikeAt={solid + 0.7} color={DIM}>a more solid layer behind</Struck>
    </AbsoluteFill>
  );
};

const BanksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nb = c("finds no boundary to cross", 0.6), banks = c("two banks, mind on one side");
  const fade = ramp(t, banks + 1.4, 1.4);
  const ys = Array.from({ length: 40 }, (_, i) => 160 + i * 16);
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, nb, 0.6) }}>
        {[0, 1, 2].map((k) => (
          <path key={k} d={ys.map((y, i) => `${i ? "L" : "M"}${900 + k * 60 + 18 * Math.sin(y / 40 - t * 2 + k)} ${y}`).join(" ")}
            fill="none" stroke={[ICE, TEAL, INDIGO][k]} strokeWidth={5} opacity={0.6} />
        ))}
      </Svg>
      <At x={430} y={470} s={pop(t, fps, banks)} o={1 - fade}>
        <div style={{ width: 520, height: 520, borderRadius: 30, border: `3px solid ${VIOLET}`, background: `${VIOLET}22` }} />
      </At>
      <At x={430} y={470} o={ramp(t, banks, 0.5) * (1 - fade)}><Glow color={VIOLET} size={44} serif>mind</Glow></At>
      <At x={1490} y={470} s={pop(t, fps, banks + 0.4)} o={1 - fade}>
        <div style={{ width: 520, height: 520, borderRadius: 30, border: `3px solid ${ICE}`, background: `${ICE}22` }} />
      </At>
      <At x={1490} y={470} o={ramp(t, banks + 0.4, 0.5) * (1 - fade)}><Glow color={ICE} size={44} serif>matter</Glow></At>
      <At x={960} y={470} s={pop(t, fps, nb + 0.2)}><Orb size={190} color={RED} /></At>
      <At x={960} y={160} o={ramp(t, nb + 0.4, 0.5)}><Glow color={AMBER} size={40} serif>no boundary to cross</Glow></At>
      <At x={960} y={790} o={ramp(t, banks + 1.6, 0.6)}><Glow color={CHALK} size={38}>never two banks to bridge</Glow></At>
    </AbsoluteFill>
  );
};

const FlowernessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lvl = c("The second level is the binding", 0.4), wh = c("where is the flowerness");
  const tries = [
    { at: c("Is it the red"), label: "the red?", el: <Flower id="w1" w={110} petal="#F4F1FF" />, note: "a white flower" , noteAt: c("A white flower") },
    { at: c("The texture? Flowers range"), label: "the texture?", el: <Petal color={ROSE} />, note: "silky · coarse", noteAt: c("The texture? Flowers range") + 0.8 },
    { at: c("The scent? Many have"), label: "the scent?", el: <Scent />, note: "often none", noteAt: c("The scent? Many have") + 0.8 },
    { at: c("The shape varies"), label: "the shape?", el: <div style={{ display: "flex", gap: 4 }}><Flower id="s1" w={60} shape={1} petal={AMBER} /><Flower id="s2" w={60} shape={2} petal={VIOLET} /></div>, note: "endless shapes", noteAt: c("The shape varies") + 0.6 },
  ];
  const heap = c("A heap of qualities"), nf = c("nothing has ever been found");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, lvl, 0.5)}><Glow color={DGOLD} size={44} serif>level two · the binding</Glow></At>
      <At x={960} y={190} o={ramp(t, wh, 0.5)}><Glow color={CHALK} size={36}>where is the flowerness?</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, tries[0].at - 0.4, 0.5) }}>
        <At x={960} y={480} s={pop(t, fps, lvl + 0.2)}><Flower id="fb" w={220} /></At>
        {[[RED, "red"], [ROSE, "texture"], [VIOLET, "scent"], [DGOLD, "shape"]].map(([col, w], i) => {
          const a = (i / 4) * Math.PI * 2 + t * 0.5;
          return <At key={i} x={960 + 330 * Math.cos(a)} y={480 + 200 * Math.sin(a)} s={pop(t, fps, lvl + 0.5 + i * 0.2)}><Orb size={60} color={col} /><Glow color={col} size={26}>{w}</Glow></At>;
        })}
        <At x={960 + 120 * Math.cos(t * 2)} y={400 + 60 * Math.sin(t * 2)} o={ramp(t, wh, 0.5)}>
          <svg width={110} height={110} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
            <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={7} /><line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={13} strokeLinecap="round" />
          </svg>
        </At>
      </AbsoluteFill>
      {tries.map((k, i) => (
        <React.Fragment key={i}>
          <At x={330 + i * 420} y={380} s={pop(t, fps, k.at)}>{k.el}</At>
          <Struck x={330 + i * 420} y={530} at={k.at + 0.1} strikeAt={k.noteAt + 0.5} color={DIM}>{k.label}</Struck>
          <At x={330 + i * 420} y={600} o={ramp(t, k.noteAt, 0.4)}><Glow color={AMBER} size={28}>{k.note}</Glow></At>
        </React.Fragment>
      ))}
      <At x={620} y={740} o={ramp(t, heap, 0.5)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={32}>a heap of qualities</Chip><Strike at={heap + 1.2} /></div>
      </At>
      <At x={1300} y={740} o={ramp(t, nf, 0.5)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={32}>something apart from them</Chip><Strike at={nf + 0.8} /></div>
      </At>
    </AbsoluteFill>
  );
};

const PatternScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hide = c("not hiding somewhere clever", 0.4), names = c("The word names the way"), terms = c("In this book's terms"), two = c("Pattern and label are not two");
  const gather = ramp(t, names, 2.0);
  const qs = [[RED, "red"], [ROSE, "soft"], [VIOLET, "sweet"], [LEAF, "green"], [DGOLD, "shape"]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, hide, 0.5)}><Glow color={CHALK} size={40} serif>not a hidden ingredient</Glow></At>
      {qs.map(([col, w], i) => {
        const a = (i / qs.length) * Math.PI * 2 + t * 0.4;
        const r = 330 - 220 * gather;
        return (
          <At key={i} x={760 + r * Math.cos(a)} y={450 + r * 0.7 * Math.sin(a)} s={pop(t, fps, hide + i * 0.15)} o={1 - 0.6 * ramp(t, names + 1.6, 0.8)}>
            <Orb size={70} color={col} /><Glow color={col} size={26}>{w}</Glow>
          </At>
        );
      })}
      <At x={760} y={450} o={ramp(t, names + 1.4, 0.8)} s={0.6 + 0.4 * ramp(t, names + 1.4, 0.8)}><Flower id="pt" w={210} /></At>
      <At x={1380} y={450} o={ramp(t, names + 1.4, 0.8)}><Glow color={AMBER} size={80} serif>"flower"</Glow></At>
      <Flow x1={930} y1={450} x2={1200} y2={450} color={AMBER} p={ramp(t, names + 1.6, 0.6)} />
      <At x={1380} y={560} o={ramp(t, names + 1.8, 0.5)}><Glow color={CHALK} size={30}>arising together</Glow></At>
      <At x={960} y={650} o={ramp(t, terms, 0.5)}><Glow color={DIM} size={28}>in this book's terms</Glow></At>
      <div style={{ position: "absolute", top: 680, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="dependent designation" at={terms + 0.6} size={64} />
      </div>
      <At x={960} y={815} o={ramp(t, two, 0.5)}><Chip color={AMBER} size={32}>pattern and label · not two</Chip></At>
    </AbsoluteFill>
  );
};

const ManagerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mg = c("No manager is needed", 0.4), proc = c("unseen processing surely happens"), own = c("an owner be found"), self = c("the absence of self");
  const nodes = Array.from({ length: 18 }, (_, i) => [420 + (i % 6) * 120 + rand(i) * 40, 280 + Math.floor(i / 6) * 150 + rand(i + 7) * 40]);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, mg, 0.5)}><Glow color={CHALK} size={42} serif>no manager doing the binding</Glow></At>
      <Svg>
        {nodes.map(([x, y], i) => {
          const j = (i * 7 + 3) % nodes.length;
          return <line key={i} x1={x} y1={y} x2={nodes[j][0]} y2={nodes[j][1]} stroke={[TEAL, INDIGO, DGOLD][i % 3]} strokeWidth={2} opacity={ramp(t, proc + i * 0.05, 0.4) * 0.6} />;
        })}
      </Svg>
      {nodes.map(([x, y], i) => (
        <At key={i} x={x} y={y} s={pop(t, fps, proc + i * 0.05)}><div style={{ width: 18, height: 18, borderRadius: "50%", background: [TEAL, INDIGO, DGOLD][i % 3],
          boxShadow: `0 0 ${10 + 8 * Math.sin(t * 4 + i)}px ${[TEAL, INDIGO, DGOLD][i % 3]}` }} /></At>
      ))}
      <At x={720} y={720} o={ramp(t, proc + 0.4, 0.5)}><Glow color={TEAL} size={30}>much unseen processing</Glow></At>
      {Array.from({ length: 4 }).map((_, i) => (
        <Flow key={i} x1={1100} y1={300 + i * 110} x2={1380} y2={450} color={[RED, ROSE, VIOLET, LEAF][i]} p={ramp(t, proc + 0.6 + i * 0.15, 0.5)} />
      ))}
      <At x={1500} y={430} s={pop(t, fps, mg)}><Flower id="mg" w={180} /></At>
      <At x={1500} y={470} o={between(t, mg + 0.4, self + 1.6)}><Head dash o={0.6} color={DIM} /></At>
      <At x={1500} y={240} o={between(t, mg + 0.6, proc, 0.4)}><Glow color={DIM} size={30}>a manager behind?</Glow></At>
      <Crossed x={1500} y={470} at={own + 0.9} size={110} />
      <At x={1500} y={740} o={ramp(t, own + 0.2, 0.5)}><Glow color={DIM} size={30}>no owner behind it</Glow></At>
      <At x={960} y={815} o={ramp(t, self, 0.5)}><Chip color={DGOLD} size={34}>no self · on the side of perceiving too</Chip></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const r = c("Red, fragrance, softness", 0.4), nb = c("Nothing beneath them");
  const qs = [[RED, "red"], [VIOLET, "fragrance"], [ROSE, "softness"]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, r, 1.5) * 0.7}><div style={{ width: 900, height: 700, borderRadius: "50%", background: `radial-gradient(ellipse, ${RED}44, ${DGOLD}18 45%, transparent 70%)` }} /></At>
      <At x={960} y={400} s={pop(t, fps, r)}><Flower id="cl" w={300} glow={0.8} /></At>
      {qs.map(([col, w], i) => {
        const a = (i / 3) * Math.PI * 2 - Math.PI / 2 + t * 0.25;
        return <At key={i} x={960 + 380 * Math.cos(a)} y={400 + 230 * Math.sin(a)} s={pop(t, fps, r + i * 0.4)}><Glow color={col} size={44} serif>{w}</Glow></At>;
      })}
      <At x={960} y={800} o={ramp(t, nb, 0.6)}><Glow color={CHALK} size={42} serif>nothing beneath · nothing missing</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["bloom", 0], ["caution", c("One caution first", 0.6)], ["qualia", c("The first level is the vivid", 0.6)], ["radiant", c("look at the red again", 0.6)],
    ["inout", c("Then a question arises", 0.6)], ["binding", c("The second level is the binding", 0.6)], ["close", c("Red, fragrance, softness", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("One caution first", 0.9)], <BloomScene />],
    [S("One caution first", "The first level is the vivid"), <CautionScene />],
    [S("The first level is the vivid", "Attend only to the red"), <QualiaScene />],
    [S("Attend only to the red", "should not be pushed too far"), <ContrastScene />],
    [S("should not be pushed too far", "look at the red again"), <NotReduceScene />],
    [S("look at the red again", "Then a question arises"), <RadiantScene />],
    [S("Then a question arises", "finds no boundary to cross"), <InOutScene />],
    [S("finds no boundary to cross", "The second level is the binding"), <BanksScene />],
    [S("The second level is the binding", "not hiding somewhere clever"), <FlowernessScene />],
    [S("not hiding somewhere clever", "No manager is needed"), <PatternScene />],
    [S("No manager is needed", "Red, fragrance, softness"), <ManagerScene />],
    [S("Red, fragrance, softness", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
