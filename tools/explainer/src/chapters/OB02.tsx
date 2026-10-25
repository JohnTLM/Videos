// The Observer and the Taste of Presence, Chapter 2: Vividness Without a Viewer. Explainer drawings timed to the narration.
// Arc: experience does not go blank -> the fear of a dim world, and the opposite -> not the vividness but the architecture ->
// pairs (viewer/view, hearer/sound, thinker/thought) with a distance -> remove the viewer, the distance goes -> the colour red:
// not the wavelength, cells, surface or attention, yet not apart from them -> the same grey on dark and bright -> dependence
// seen directly, vivid in itself -> luminosity misread as a lamp behind a window, seen as the clarity of the appearance ->
// no carrier needed -> unowned, ending without loss -> grey wall and sunset -> in the seen only the seen.
// Stance: luminosity is never drawn as a light source or layer behind appearances; a lamp behind a window is drawn only to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "experience does not go blank", "This is easy to miss", "a dim and unfelt world", "The looking shows the opposite",
  "The tree is more vivid", "The rain sounds closer",
  "What changes is not the vividness", "What changes is the architecture",
  "Ordinary experience is arranged in pairs", "A viewer and a view", "A hearer and a sound", "A thinker and a thought",
  "Take away the viewer", "the distance goes too", "It is simply heard", "Nothing stands at the window", "They are less mediated",
  "Think of the colour red", "It is not the wavelength", "It is not the cells in the eye", "It is not the surface", "It is not the attention",
  "the red is not apart from any of these", "Change the light", "Change the eye", "Change the attention",
  "The same grey looks lighter", "darker on a bright one", "It appears in a relation",
  "what dependence looks like", "it is vivid in itself", "It needs the light, the eye, the surround and the seeing", "When they meet, it is complete",
  "has a word for the clarity of an appearance", "luminosity", "a bright substance behind the display", "like a lamp through a window",
  "the clarity is not behind anything", "the knowing clarity of the appearance itself", "A sound is heard as sound", "Cold is felt as cold",
  "The knowing and the known are not two things",
  "it removes the need for a carrier", "A soul, a stream of consciousness, a store of potentials", "a carrier of its own",
  "It is not a ground beneath appearances",
  "Two things follow", "without being owned", "without being taken from anyone", "It passes because its conditions change",
  "A grey wall is as vivid as a sunset", "it is not found apart from its appearing",
  "In the seen, there is only the seen", "In the heard, only the heard", "no one stands behind it",
];

const M = {
  open: { a: "rgba(100,55,125,0.5)", b: "rgba(180,135,60,0.38)", c: "rgba(40,110,130,0.32)" },
  pairs: { a: "rgba(60,60,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  red: { a: "rgba(170,60,70,0.42)", b: "rgba(100,55,125,0.42)", c: "rgba(180,140,60,0.3)" },
  clear: { a: "rgba(50,130,140,0.45)", b: "rgba(190,145,60,0.4)", c: "rgba(100,60,140,0.34)" },
  free: { a: "rgba(195,150,65,0.48)", b: "rgba(100,55,125,0.44)", c: "rgba(50,135,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
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

const Waves: React.FC<{ x: number; y: number; o: number; color?: string; dir?: number }> = ({ x, y, o, color = ICE, dir = 1 }) => {
  const { t } = useT();
  const a0 = dir > 0 ? -0.7 : Math.PI - 0.7, a1 = dir > 0 ? 0.7 : Math.PI + 0.7;
  return (
    <Svg style={{ opacity: o }}>
      {[0, 1, 2, 3].map((i) => {
        const p = ((t * 0.7 + i / 4) % 1);
        const r = 40 + p * 200;
        return <path key={i} d={`M${x + r * Math.cos(a0)} ${y + r * Math.sin(a0)} A${r} ${r} 0 0 1 ${x + r * Math.cos(a1)} ${y + r * Math.sin(a1)}`}
          fill="none" stroke={color} strokeWidth={5} strokeOpacity={1 - p} strokeLinecap="round" />;
      })}
    </Svg>
  );
};

const Rain: React.FC<{ o: number; n?: number }> = ({ o, n = 60 }) => {
  const { t } = useT();
  return (
    <Svg style={{ opacity: o }}>
      {Array.from({ length: n }).map((_, i) => {
        const x = rand(i) * 1960 - 20, sp = 520 + rand(i + 3) * 380;
        const y = ((rand(i + 7) * 1100 + t * sp) % 1100) - 60;
        return <line key={i} x1={x} y1={y} x2={x - 10} y2={y + 34} stroke={ICE} strokeWidth={2} strokeOpacity={0.25 + rand(i + 1) * 0.35} strokeLinecap="round" />;
      })}
    </Svg>
  );
};

/** A dashed outline of a person. */
const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

/** An eye outline. */
const Eye: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = CHALK }) => (
  <svg width={180 * size} height={100 * size} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={90} cy={50} r={22} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} /><circle cx={90} cy={50} r={8} fill={CHALK} />
  </svg>
);

/** A window frame (o 0..1); a lamp may stand behind it. */
const WindowFrame: React.FC<{ lamp?: number; lampGone?: number }> = ({ lamp = 0, lampGone = 0 }) => (
  <div style={{ position: "relative", width: 360, height: 300 }}>
    {lamp > 0 && <div style={{ position: "absolute", left: 120, top: 90, width: 120, height: 120, borderRadius: "50%", opacity: lamp * (1 - lampGone),
      background: `radial-gradient(circle, #FFF6D8, ${GOLD} 45%, transparent 72%)`, filter: `blur(${4 + lampGone * 12}px)` }} />}
    <div style={{ position: "absolute", inset: 0, border: `5px solid ${CHALK}`, borderRadius: 8 }} />
    <div style={{ position: "absolute", left: 177, top: 0, width: 6, height: "100%", background: CHALK }} />
    <div style={{ position: "absolute", top: 147, left: 0, height: 6, width: "100%", background: CHALK }} />
  </div>
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

// ---------------------------------------------------------------- scenes
const BlankScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const blank = c("experience does not go blank"), dim = c("a dim and unfelt world"), opp = c("The looking shows the opposite");
  const tree = c("The tree is more vivid"), rain = c("The rain sounds closer");
  const fear = Math.min(ramp(t, dim - 0.2, 0.6), 1 - ramp(t, opp, 0.8));
  return (
    <AbsoluteFill>
      <Head text="not blank" at={blank} y={110} size={84} />
      <At x={960} y={250} o={ramp(t, c("This is easy to miss"), 0.5)}><Glow color={DIM} size={32}>easy to miss</Glow></At>
      {/* the feared world: grey, faded */}
      <At x={960} y={560} o={fear}>
        <div style={{ width: 900, height: 360, borderRadius: 30, background: "#2a2a30cc", border: `3px dashed ${DIM}`, display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: DIM }}>a dim, unfelt world?</div>
      </At>
      <At x={700} y={560} o={ramp(t, tree - 0.3, 0.6)} s={0.9 + 0.1 * pop(t, fps, tree)}><Tree size={0.9} vivid={ramp(t, tree, 1.2)} /></At>
      <Rain o={ramp(t, rain - 0.2, 0.8) * 0.8} />
      <Waves x={1180} y={560} o={ramp(t, rain, 0.6)} />
      <At x={1280} y={560} s={pop(t, fps, rain)}><Orb size={80} color={ICE} /></At>
      <At x={700} y={800} o={ramp(t, tree + 0.3, 0.5)}><Chip color={GREEN} size={32}>more vivid, not less</Chip></At>
      <At x={1280} y={800} o={ramp(t, rain + 0.3, 0.5)}><Chip color={ICE} size={32}>closer, not further away</Chip></At>
    </AbsoluteFill>
  );
};

const ArchitectureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const viv = c("What changes is not the vividness"), arch = c("What changes is the architecture");
  return (
    <AbsoluteFill>
      <Struck x={960} y={340} at={viv} strikeAt={viv + 1.6} color={GREEN} size={46}>the vividness changes</Struck>
      <At x={960} y={560} s={pop(t, fps, arch)}><Glow color={GOLD} size={84} serif>the architecture</Glow></At>
      <Svg>
        <DrawPath d="M560 700 L1360 700 M600 700 L600 640 M1320 700 L1320 640 M960 700 L960 620" p={ramp(t, arch + 0.4, 1.2)} color={GOLD} width={5} len={1400} />
      </Svg>
    </AbsoluteFill>
  );
};

const PairsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pairs = c("Ordinary experience is arranged in pairs");
  const rows: [string, string, string, number, string][] = [
    ["a viewer", "a view", "A viewer and a view", 330, TEAL], ["a hearer", "a sound", "A hearer and a sound", 470, ICE], ["a thinker", "a thought", "A thinker and a thought", 610, VIOLET],
  ];
  const take = c("Take away the viewer"), dist = c("the distance goes too");
  const gone = ramp(t, take + 0.2, 1.0), close = ramp(t, dist, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, pairs, 0.5)}><Glow color={CHALK} size={46} serif>arranged in pairs, at a distance</Glow></At>
      {rows.map(([a, b, ph, y, col], i) => {
        const at = c(ph);
        const lx = 560 + (i === 0 ? 260 * close : 0);
        return (
          <React.Fragment key={ph}>
            <At x={lx} y={y} s={pop(t, fps, at)} o={i === 0 ? 1 - gone : 1}><Chip color={DIM} size={36}>{a}</Chip></At>
            {i === 0 && <Crossed x={560} y={y} at={take + 0.1} size={70} />}
            <Flow x1={700} y1={y} x2={1200} y2={y} color={col} p={ramp(t, at + 0.3, 0.6) * (i === 0 ? 1 - close : 1)} dash />
            <At x={1360 - (i === 0 ? 260 * close : 0)} y={y} s={pop(t, fps, at + 0.6)}><Chip color={col} size={36}>{b}</Chip></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={790} o={ramp(t, dist + 0.3, 0.5)}><Glow color={GOLD} size={36}>take away the viewer: the distance goes too</Glow></At>
    </AbsoluteFill>
  );
};

const WindowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const heard = c("It is simply heard"), win = c("Nothing stands at the window"), less = c("They are less mediated");
  return (
    <AbsoluteFill>
      <Rain o={0.7} />
      <At x={620} y={430} s={pop(t, fps, heard - 0.2)}><Orb size={110} color={ICE} /></At>
      <Waves x={680} y={430} o={ramp(t, heard, 0.6)} />
      <At x={620} y={630} o={ramp(t, heard + 0.3, 0.5)}><Glow color={ICE} size={38} serif>simply heard, as it is</Glow></At>
      <At x={1340} y={430} o={ramp(t, win - 0.3, 0.6)}><WindowFrame /></At>
      <At x={1340} y={430} o={ramp(t, win, 0.5) * (1 - ramp(t, win + 1.4, 0.8))}><Ghost o={1} size={0.8} /></At>
      <Crossed x={1340} y={430} at={win + 0.9} size={90} />
      <At x={1340} y={650} o={ramp(t, win + 0.5, 0.5)}><Glow color={DIM} size={30}>no one standing at the window</Glow></At>
      <At x={960} y={790} s={pop(t, fps, less)}><Chip color={GOLD} size={36}>not less real: less mediated</Chip></At>
    </AbsoluteFill>
  );
};

const RedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const red = c("Think of the colour red");
  const nots: [string, string, number][] = [
    ["It is not the wavelength", "a wavelength: a number", 330], ["It is not the cells in the eye", "cells in the eye", 450],
    ["It is not the surface", "the surface, dark at night", 570], ["It is not the attention", "the attention", 690],
  ];
  return (
    <AbsoluteFill>
      <At x={620} y={130} o={ramp(t, red, 0.5)}><Glow color={ROSE} size={50} serif>the colour red</Glow></At>
      <At x={620} y={500} s={pop(t, fps, red + 0.2)}>
        <div style={{ width: 320, height: 320, borderRadius: 28, background: "radial-gradient(circle at 40% 35%, #ff6f6f, #c0202e)",
          boxShadow: "0 0 70px #ff3b4a88" }} />
      </At>
      {nots.map(([ph, label, y], i) => {
        const at = c(ph);
        return <Struck key={ph} x={1340} y={y} at={at} strikeAt={at + 1.1} color={[ICE, TEAL, GOLD, VIOLET][i]}>{label}</Struck>;
      })}
    </AbsoluteFill>
  );
};

const NotApartScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const apart = c("the red is not apart from any of these"), l = c("Change the light"), e = c("Change the eye"), a = c("Change the attention");
  const shift = ramp(t, l, 0.6) * 0.35 + ramp(t, e, 0.6) * 0.3 + ramp(t, a, 0.6) * 0.35;
  const hue = -20 * Math.sin(shift * Math.PI * 2);
  const cond: [string, string, number, number][] = [["light", GOLD, 560, 300], ["eye", TEAL, 1360, 300], ["surface", ROSE, 560, 720], ["attention", VIOLET, 1360, 720]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, apart, 0.5)}><Glow color={CHALK} size={42} serif>yet not apart from any of these</Glow></At>
      <At x={960} y={510} s={pop(t, fps, apart)}>
        <div style={{ width: 240, height: 240, borderRadius: 24, background: "radial-gradient(circle at 40% 35%, #ff6f6f, #c0202e)",
          filter: `hue-rotate(${hue}deg) brightness(${1 - 0.25 * Math.sin(shift * Math.PI)})`, boxShadow: "0 0 60px #ff3b4a77" }} />
      </At>
      {cond.map(([w, col, x, y], i) => (
        <React.Fragment key={w}>
          <Flow x1={x} y1={y} x2={960} y2={510} color={col} p={ramp(t, apart + 0.3 + i * 0.2, 0.7)} />
          <At x={x} y={y} s={pop(t, fps, apart + 0.3 + i * 0.2)}><Chip color={col} size={32}>{w}</Chip></At>
        </React.Fragment>
      ))}
      <At x={960} y={810} o={ramp(t, l, 0.4)}><Glow color={GOLD} size={32}>change one, and the red changes</Glow></At>
    </AbsoluteFill>
  );
};

const GreyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const g = c("The same grey looks lighter"), d = c("darker on a bright one"), rel = c("It appears in a relation");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, g, 0.5)}><Glow color={CHALK} size={44} serif>the same grey</Glow></At>
      <At x={620} y={470} s={pop(t, fps, g + 0.2)}>
        <div style={{ width: 380, height: 380, background: "#15151b", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 150, height: 150, background: "#808080" }} />
        </div>
      </At>
      <At x={1300} y={470} s={pop(t, fps, d)}>
        <div style={{ width: 380, height: 380, background: "#ededed", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 150, height: 150, background: "#808080" }} />
        </div>
      </At>
      <At x={620} y={710} o={ramp(t, g + 0.6, 0.5)}><Glow color={DIM} size={30}>lighter on dark</Glow></At>
      <At x={1300} y={710} o={ramp(t, d + 0.3, 0.5)}><Glow color={DIM} size={30}>darker on bright</Glow></At>
      <At x={960} y={810} s={pop(t, fps, rel)}><Chip color={GOLD} size={36}>the shade appears in a relation</Chip></At>
    </AbsoluteFill>
  );
};

const DependenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dep = c("what dependence looks like"), viv = c("it is vivid in itself"), needs = c("It needs the light, the eye, the surround and the seeing");
  const meet = c("When they meet, it is complete");
  const parts: [string, string][] = [["light", GOLD], ["eye", TEAL], ["surround", DIM], ["seeing", VIOLET]];
  const m = ramp(t, meet, 1.2);
  return (
    <AbsoluteFill>
      <Head text="dependence, seen directly" at={dep} y={100} size={68} />
      {parts.map(([w, col], i) => {
        const ang = (i / 4) * Math.PI * 2 - Math.PI / 4;
        const r = 330 - 150 * m;
        return <At key={w} x={960 + r * Math.cos(ang) * 1.3} y={500 + r * Math.sin(ang) * 0.75} s={pop(t, fps, needs + i * 0.35)}><Chip color={col} size={32}>{w}</Chip></At>;
      })}
      <At x={960} y={500} s={pop(t, fps, viv)}>
        <div style={{ width: 170, height: 170, borderRadius: 20, background: "radial-gradient(circle at 40% 35%, #ff7a7a, #c0202e)",
          boxShadow: `0 0 ${40 + 60 * m}px #ff3b4a${m > 0.5 ? "cc" : "77"}` }} />
      </At>
      <Ring x={960} y={500} p={ramp(t, meet + 0.2, 1.6)} r0={90} r1={320} color={GOLD} />
      <At x={960} y={790} o={ramp(t, viv + 0.3, 0.5)}><Glow color={ROSE} size={34}>no viewer behind it needed</Glow></At>
    </AbsoluteFill>
  );
};

const LuminosityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const word = c("has a word for the clarity of an appearance"), lum = c("luminosity"), sub = c("a bright substance behind the display");
  const lamp = c("like a lamp through a window"), notb = c("the clarity is not behind anything");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, word, 0.5)}><Glow color={DIM} size={32}>a word for the clarity of an appearance</Glow></At>
      <At x={960} y={230} s={pop(t, fps, lum)}><Glow color={GOLD} size={74} serif>luminosity</Glow></At>
      <At x={960} y={540} o={ramp(t, sub - 0.2, 0.6)}><WindowFrame lamp={ramp(t, lamp, 0.8)} lampGone={ramp(t, notb + 0.3, 1.2)} /></At>
      <Struck x={960} y={760} at={sub + 0.2} strikeAt={notb + 0.2} color={WARM} size={34}>a bright substance behind the display</Struck>
    </AbsoluteFill>
  );
};

const ClarityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const kc = c("the knowing clarity of the appearance itself"), snd = c("A sound is heard as sound"), cold = c("Cold is felt as cold");
  const two = c("The knowing and the known are not two things");
  const merge = ramp(t, two + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={120} s={pop(t, fps, kc)}><Glow color={GOLD} size={44} serif>the clarity of the appearance itself</Glow></At>
      <At x={620} y={440} s={pop(t, fps, snd)}><Orb size={110} color={ICE} /></At>
      <Waves x={680} y={440} o={ramp(t, snd, 0.5)} />
      <At x={620} y={620} o={ramp(t, snd + 0.3, 0.5)}><Glow color={ICE} size={34} serif>heard as sound</Glow></At>
      <At x={1300} y={440} s={pop(t, fps, cold)}>
        <div style={{ width: 130, height: 130, borderRadius: 18, border: `4px solid ${ICE}`, background: "linear-gradient(135deg, #e1f6ff66, #6eaad722)",
          boxShadow: `0 0 40px ${ICE}88` }} />
      </At>
      <At x={1300} y={620} o={ramp(t, cold + 0.3, 0.5)}><Glow color={ICE} size={34} serif>felt as cold</Glow></At>
      <At x={960 - 160 * (1 - merge)} y={760} o={ramp(t, two, 0.5)}><Chip color={TEAL} size={34}>knowing</Chip></At>
      <At x={960 + 160 * (1 - merge)} y={760} o={ramp(t, two, 0.5) * (1 - merge * 0.85)}><Chip color={VIOLET} size={34}>known</Chip></At>
      <At x={960} y={840} o={ramp(t, two + 1.4, 0.5)}><Glow color={DIM} size={28}>not two things</Glow></At>
    </AbsoluteFill>
  );
};

const CarrierScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const need = c("it removes the need for a carrier"), cands = c("A soul, a stream of consciousness, a store of potentials");
  const own = c("a carrier of its own"), ground = c("It is not a ground beneath appearances");
  const items: [string, string][] = [["a soul", VIOLET], ["a stream of consciousness", TEAL], ["a store of potentials", GOLD]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, need, 0.5)}><Glow color={CHALK} size={44} serif>no carrier needed</Glow></At>
      {items.map(([w, col], i) => (
        <React.Fragment key={w}>
          <At x={480 + i * 480} y={330} s={pop(t, fps, cands + i * 0.7)}><Chip color={col} size={32}>{w}</Chip></At>
          <At x={480 + i * 480} y={470} o={ramp(t, own + i * 0.2, 0.5)}><Ghost o={0.8} color={col} size={0.5} /></At>
        </React.Fragment>
      ))}
      <At x={960} y={590} o={ramp(t, own + 0.3, 0.5)}><Glow color={DIM} size={30}>each one appears, and would need a carrier of its own</Glow></At>
      <Struck x={960} y={740} at={ground - 0.2} strikeAt={ground + 0.9} color={WARM} size={38}>luminosity as a ground beneath</Struck>
    </AbsoluteFill>
  );
};

const FollowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two things follow"), owned = c("without being owned"), taken = c("without being taken from anyone"), cond = c("It passes because its conditions change");
  const fade = ramp(t, cond + 0.4, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, two, 0.5)}><Glow color={CHALK} size={44} serif>two things follow</Glow></At>
      <At x={560} y={420} s={pop(t, fps, owned - 0.3)}><Orb size={120} color={TEAL} /></At>
      <At x={560} y={600} o={ramp(t, owned, 0.5)}><Chip color={TEAL} size={32}>vivid, complete, unowned</Chip></At>
      <At x={1360} y={420} o={1 - fade} s={pop(t, fps, taken - 0.3)}><Orb size={120} color={ROSE} /></At>
      <At x={1360} y={600} o={ramp(t, taken, 0.5)}><Chip color={ROSE} size={32}>ending, taken from no one</Chip></At>
      <At x={960} y={780} o={ramp(t, cond, 0.5)}><Glow color={GOLD} size={34}>it passes because its conditions change</Glow></At>
    </AbsoluteFill>
  );
};

const WallScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wall = c("A grey wall is as vivid as a sunset"), app = c("it is not found apart from its appearing");
  return (
    <AbsoluteFill>
      <At x={600} y={430} s={pop(t, fps, wall)}>
        <div style={{ width: 420, height: 300, borderRadius: 10, background: "repeating-linear-gradient(0deg, #8a8a8f 0 46px, #6f6f75 46px 50px)",
          boxShadow: "0 0 30px #ffffff22" }} />
      </At>
      <At x={1320} y={430} s={pop(t, fps, wall + 0.8)}>
        <div style={{ width: 420, height: 300, borderRadius: 10, overflow: "hidden", position: "relative",
          background: "linear-gradient(180deg, #3b2a6b, #c45a4a 60%, #f2a94b 80%, #1d1b33 80%)" }}>
          <div style={{ position: "absolute", left: 160, top: 150, width: 100, height: 100, borderRadius: "50%", background: "#ffd27a", boxShadow: "0 0 60px #ffb84a" }} />
        </div>
      </At>
      <At x={960} y={430} o={ramp(t, wall + 1.2, 0.5)}><Glow color={GOLD} size={60} serif>=</Glow></At>
      <At x={960} y={720} o={ramp(t, app, 0.5)}><Chip color={GOLD} size={34}>appearing, clear, not found apart from its appearing</Chip></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seen = c("In the seen, there is only the seen"), heard = c("In the heard, only the heard"), no = c("no one stands behind it");
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, seen)}><Tree size={0.8} vivid={1} /></At>
      <At x={560} y={680} o={ramp(t, seen + 0.3, 0.5)}><Reveal text="only the seen" at={seen + 0.3} size={56} /></At>
      <Rain o={ramp(t, heard, 1) * 0.6} n={40} />
      <At x={1360} y={420} s={pop(t, fps, heard)}><Orb size={110} color={ICE} /></At>
      <Waves x={1420} y={420} o={ramp(t, heard + 0.2, 0.5)} />
      <At x={1360} y={680} o={ramp(t, heard + 0.3, 0.5)}><Reveal text="only the heard" at={heard + 0.3} size={56} color={ICE} /></At>
      <At x={960} y={420} o={ramp(t, no, 0.5) * (1 - ramp(t, no + 1.2, 1))}><Ghost o={1} size={0.8} /></At>
      <At x={960} y={820} o={ramp(t, no + 0.6, 0.6)}><Glow color={GOLD} size={34}>no one behind it, to receive it</Glow></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["pairs", c("What changes is not the vividness", 0.6)], ["red", c("Think of the colour red", 0.6)],
    ["clear", c("has a word for the clarity of an appearance", 0.6)], ["free", c("Two things follow", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("What changes is not the vividness", 0.9)], <BlankScene />],
    [S("What changes is not the vividness", "Ordinary experience is arranged in pairs"), <ArchitectureScene />],
    [S("Ordinary experience is arranged in pairs", "It is simply heard"), <PairsScene />],
    [S("It is simply heard", "Think of the colour red"), <WindowScene />],
    [S("Think of the colour red", "the red is not apart from any of these"), <RedScene />],
    [S("the red is not apart from any of these", "The same grey looks lighter"), <NotApartScene />],
    [S("The same grey looks lighter", "what dependence looks like"), <GreyScene />],
    [S("what dependence looks like", "has a word for the clarity of an appearance"), <DependenceScene />],
    [S("has a word for the clarity of an appearance", "the knowing clarity of the appearance itself"), <LuminosityScene />],
    [S("the knowing clarity of the appearance itself", "it removes the need for a carrier"), <ClarityScene />],
    [S("it removes the need for a carrier", "Two things follow"), <CarrierScene />],
    [S("Two things follow", "A grey wall is as vivid as a sunset"), <FollowScene />],
    [S("A grey wall is as vivid as a sunset", "In the seen, there is only the seen"), <WallScene />],
    [S("In the seen, there is only the seen", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
