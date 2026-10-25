// Shared parts for the chapter explainer videos (Remotion).
// Times are seconds. Inside a chapter body, t = seconds since the narration started.
import React from "react";
import { AbsoluteFill, Easing, interpolate, interpolateColors, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const TEAL = "#5FD3C6", VIOLET = "#9B7BFF", ROSE = "#FF8FA3", GOLD = "#E4C27A", ICE = "#A9DDF2",
  CHALK = "#F1ECE0", DIM = "#A49E90", WARM = "#FF7A59", GREEN = "#8FD49A";
export const SERIF = "Cormorant", SANS = "SourceSans";
export const W = 1920, H = 1080;
export const SAFE_BOTTOM = 860; // keep drawings above this line (subtitles below)

// ---------------------------------------------------------------- timing
export type Word = [string, number, number, number];
const norm = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

/** Find each phrase in order in the narration; returns phrase -> start time (s). */
export function makeCues(words: Word[], phrases: string[]): Record<string, number> {
  const toks = words.map((w) => norm(w[0]));
  const out: Record<string, number> = {};
  let pos = 0;
  for (const ph of phrases) {
    const want = ph.split(/\s+/).map(norm).filter(Boolean);
    let found = -1;
    for (let i = pos; i <= toks.length - want.length; i++) {
      if (want.every((w, k) => toks[i + k] === w)) { found = i; break; }
    }
    if (found < 0) throw new Error(`phrase not found in narration: "${ph}"`);
    out[ph] = words[found][1];
    pos = found + 1;
  }
  return out;
}

export const CueCtx = React.createContext<Record<string, number>>({});
/** Start time of a phrase (must be listed in the chapter's PHRASES). */
export const useCue = () => {
  const cues = React.useContext(CueCtx);
  return (ph: string, lead = 0.25) => {
    if (!(ph in cues)) throw new Error(`phrase not in PHRASES: "${ph}"`);
    return cues[ph] - lead;
  };
};

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const useT = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return { f, fps, t: f / fps };
};
export const ramp = (t: number, a: number, d = 0.6) =>
  interpolate(t, [a, a + d], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
export const between = (t: number, a: number, b: number, d = 0.6) => Math.min(ramp(t, a, d), 1 - ramp(t, b, d));
export const pop = (t: number, fps: number, at: number, damping = 12) =>
  spring({ frame: Math.round((t - at) * fps), fps, config: { damping, mass: 0.8 } });
export const rand = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

// ---------------------------------------------------------------- fonts
export const Fonts: React.FC = () => (
  <style>{`
    @font-face { font-family: ${SERIF}; src: url(${staticFile("fonts/CormorantGaramond-Var.ttf")}); font-weight: 300 700; }
    @font-face { font-family: ${SANS}; src: url(${staticFile("fonts/SourceSans3-Var.ttf")}); font-weight: 200 900; }
  `}</style>
);

// ---------------------------------------------------------------- scene wrapper
/** Shows children between from..to with a soft fade/blur in and out. */
export const Scene: React.FC<{ from: number; to: number; fade?: number; children: React.ReactNode }> = ({ from, to, fade = 0.6, children }) => {
  const { t } = useT();
  if (t < from || t > to + fade) return null;
  const o = Math.min(ramp(t, from, fade), 1 - ramp(t, to, fade));
  return <AbsoluteFill style={{ opacity: o, filter: o < 0.999 ? `blur(${(1 - o) * 10}px)` : undefined }}>{children}</AbsoluteFill>;
};

/** Absolutely placed box centred on (x, y). */
export const At: React.FC<{ x: number; y: number; s?: number; o?: number; r?: number; blur?: number; children: React.ReactNode; style?: React.CSSProperties }> =
  ({ x, y, s = 1, o = 1, r = 0, blur = 0, children, style }) => (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${s}) rotate(${r}deg)`, opacity: o,
      filter: blur > 0.05 ? `blur(${blur}px)` : undefined, textAlign: "center", ...style }}>{children}</div>
  );

// ---------------------------------------------------------------- background
export type Mood = { t: number; a: string; b: string; c: string };
/** Living background. Moods are colour sets keyed by time; colours blend between them. */
export const Background: React.FC<{ moods: Mood[] }> = ({ moods }) => {
  const { t } = useT();
  const ts = moods.map((m) => m.t);
  const col = (k: "a" | "b" | "c") => moods.length > 1 ? interpolateColors(t, ts, moods.map((m) => m[k])) : moods[0][k];
  const a = Math.sin(t * 0.21), b = Math.cos(t * 0.16);
  return (
    <AbsoluteFill style={{
      background: `
        radial-gradient(60% 70% at ${25 + a * 9}% ${30 + b * 7}%, ${col("a")}, transparent 70%),
        radial-gradient(55% 65% at ${78 - b * 9}% ${28 + a * 7}%, ${col("b")}, transparent 70%),
        radial-gradient(70% 60% at ${55 + a * 6}% ${102 - b * 5}%, ${col("c")}, transparent 70%),
        linear-gradient(160deg, #0b0c1a, #06060d)`,
    }} />
  );
};

export const Bokeh: React.FC<{ n?: number }> = ({ n = 34 }) => {
  const { t } = useT();
  const cols = [GOLD, TEAL, VIOLET, ICE, ROSE];
  return (
    <AbsoluteFill>
      {Array.from({ length: n }).map((_, i) => {
        const size = 6 + rand(i) * 46;
        const x = ((rand(i + 1) * 2100 + Math.sin(t * 0.3 + i) * 40) % 2000) - 40;
        const y = 1120 - ((rand(i + 2) * 1200 + t * (10 + rand(i + 3) * 26)) % 1240);
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: size, height: size, borderRadius: "50%",
          background: cols[i % cols.length], opacity: 0.07 + rand(i + 4) * 0.2, filter: `blur(${size > 30 ? 8 : 2}px)` }} />;
      })}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- text
export const Glow: React.FC<{ color: string; size?: number; serif?: boolean; style?: React.CSSProperties; children: React.ReactNode }> =
  ({ color, size = 40, serif, style, children }) => (
    <div style={{ fontFamily: serif ? SERIF : SANS, fontWeight: serif ? 600 : 400, fontSize: size, color, whiteSpace: "nowrap",
      textShadow: `0 0 18px ${color}, 0 0 42px ${color}88`, letterSpacing: 0.5, ...style }}>{children}</div>
  );

/** Words that appear letter by letter, from blur to sharp, with a gold-ish gradient. */
export const Reveal: React.FC<{ text: string; at: number; size: number; color?: string; top?: string; speed?: number; wrap?: boolean }> =
  ({ text, at, size, color = GOLD, top = "#FFF3D1", speed = 0.045, wrap = false }) => {
    const { t } = useT();
    const letter = (ch: string, i: number) => {
      const p = ramp(t, at + i * speed, 0.5);
      return <span key={i} style={{ display: "inline-block", opacity: p, filter: `blur(${(1 - p) * 10}px)`,
        transform: `translateY(${(1 - p) * 18}px)`, backgroundImage: `linear-gradient(180deg, ${top}, ${color})`,
        WebkitBackgroundClip: "text", color: "transparent" }}>{ch === " " ? " " : ch}</span>;
    };
    if (!wrap) {
      return <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: size, whiteSpace: "pre", lineHeight: 1.1 }}>{text.split("").map(letter)}</div>;
    }
    // wrap: lines may break between words (each word stays whole)
    let i = 0;
    return (
      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: size, lineHeight: 1.15 }}>
        {text.split(" ").map((word, w) => {
          const start = i;
          i += word.length + 1;
          return (
            <React.Fragment key={w}>
              {w > 0 && " "}
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>{word.split("").map((ch, k) => letter(ch, start + k))}</span>
            </React.Fragment>
          );
        })}
      </div>
    );
  };

/** Glassy rounded label. */
export const Chip: React.FC<{ color: string; size?: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ color, size = 34, children, style }) => (
  <div style={{ display: "inline-block", fontFamily: SANS, fontSize: size, color: CHALK, padding: `${size * 0.25}px ${size * 0.6}px`,
    borderRadius: size * 0.5, border: `2px solid ${color}`, background: `${color}22`, boxShadow: `0 0 24px ${color}66`,
    whiteSpace: "nowrap", ...style }}>{children}</div>
);

/** A strike-through line that sweeps across its parent (put inside a position:relative box). */
export const Strike: React.FC<{ at: number; color?: string }> = ({ at, color = WARM }) => {
  const { t } = useT();
  const p = ramp(t, at, 0.5);
  return <div style={{ position: "absolute", left: -10, top: "52%", height: 5, width: `calc(${p * 100}% + ${p * 20}px)`,
    background: color, borderRadius: 3, boxShadow: `0 0 12px ${color}` }} />;
};

// ---------------------------------------------------------------- svg helpers
export const Svg: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", ...style }}>{children}</svg>
);

/** A line that draws itself (p 0..1) with light pulses flowing along it. */
export const Flow: React.FC<{ x1: number; y1: number; x2: number; y2: number; color: string; p: number; width?: number; pulses?: boolean; dash?: boolean }> =
  ({ x1, y1, x2, y2, color, p, width = 3, pulses = true, dash }) => {
    const { t } = useT();
    const len = Math.hypot(x2 - x1, y2 - y1);
    return (
      <Svg>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeOpacity={0.45} strokeWidth={width}
          strokeDasharray={dash ? "12 10" : `${len}`} strokeDashoffset={dash ? 0 : len * (1 - p)} opacity={dash ? p : 1} />
        {pulses && <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width + 2.5} strokeLinecap="round"
          strokeDasharray="10 36" strokeDashoffset={-t * 90} opacity={p} style={{ filter: `drop-shadow(0 0 6px ${color})` }} />}
      </Svg>
    );
  };

/** A path that draws itself. */
export const DrawPath: React.FC<{ d: string; p: number; color: string; width?: number; len?: number; fill?: string; glow?: boolean }> =
  ({ d, p, color, width = 3, len = 3000, fill = "none", glow = true }) => (
    <path d={d} fill={fill} stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray={len} strokeDashoffset={len * (1 - p)} style={glow ? { filter: `drop-shadow(0 0 8px ${color})` } : undefined} />
  );

/** Glowing sphere. */
export const Orb: React.FC<{ size: number; color: string; core?: number; style?: React.CSSProperties }> = ({ size, color, core = 0, style }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", position: "relative",
    background: `radial-gradient(circle at 35% 30%, #ffffffcc, ${color} 45%, ${color}55 75%, transparent 100%)`,
    boxShadow: `0 0 ${size * 0.4}px ${color}88`, ...style }}>
    {core > 0 && <div style={{ position: "absolute", left: "50%", top: "50%", width: size * 0.28, height: size * 0.28, borderRadius: "50%",
      transform: `translate(-50%,-50%) scale(${core})`, background: `radial-gradient(circle, #FFF6D8, ${GOLD})`, boxShadow: `0 0 20px ${GOLD}` }} />}
  </div>
);

/** Expanding ring pulse, p 0..1. */
export const Ring: React.FC<{ x: number; y: number; p: number; r0: number; r1: number; color: string; width?: number }> = ({ x, y, p, r0, r1, color, width = 3 }) =>
  p <= 0 || p >= 1 ? null : (
    <div style={{ position: "absolute", left: x, top: y, width: 2 * (r0 + (r1 - r0) * p), height: 2 * (r0 + (r1 - r0) * p), borderRadius: "50%",
      transform: "translate(-50%,-50%)", border: `${width}px solid ${color}`, boxShadow: `0 0 20px ${color}`, opacity: 1 - p }} />
  );

/** Gold picture frame with a small tag above it. */
export const PictureFrame: React.FC<{ x: number; y: number; w: number; h: number; tag?: string; o?: number; dashed?: boolean }> = ({ x, y, w, h, tag, o = 1, dashed }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, opacity: o }}>
    <div style={{ position: "absolute", inset: 0, border: `3px ${dashed ? "dashed" : "solid"} ${GOLD}`, borderRadius: 6,
      boxShadow: dashed ? undefined : `0 0 30px ${GOLD}55, inset 0 0 30px ${GOLD}22` }} />
    <div style={{ position: "absolute", inset: 12, border: `1.5px solid ${GOLD}88`, borderRadius: 3 }} />
    {tag && <div style={{ position: "absolute", left: 4, top: -50, fontFamily: SANS, fontSize: 30, color: GOLD, letterSpacing: 2 }}>{tag}</div>}
  </div>
);

// ---------------------------------------------------------------- icons
export const Snowflake: React.FC<{ size: number; rot: number }> = ({ size, rot }) => (
  <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ transform: `rotate(${rot}deg)`, filter: `drop-shadow(0 0 8px ${ICE})` }}>
    {Array.from({ length: 6 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 60})`} stroke={ICE} strokeWidth={4} strokeLinecap="round">
        <line x1={0} y1={0} x2={0} y2={-44} /><line x1={0} y1={-26} x2={-12} y2={-38} /><line x1={0} y1={-26} x2={12} y2={-38} />
      </g>
    ))}
  </svg>
);

export const Sun: React.FC<{ size: number; rot: number }> = ({ size, rot }) => (
  <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ filter: `drop-shadow(0 0 14px ${GOLD})`, overflow: "visible" }}>
    <defs><radialGradient id="sung"><stop offset="0" stopColor="#FFF4C8" /><stop offset="1" stopColor="#F2A94B" /></radialGradient></defs>
    <g transform={`rotate(${rot})`} stroke={GOLD} strokeWidth={5} strokeLinecap="round">
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-36} x2={0} y2={-54} transform={`rotate(${i * 30})`} />)}
    </g>
    <circle r={26} fill="url(#sung)" />
  </svg>
);

export const Hand: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M30 92 C18 80 14 66 16 54 L18 40 C19 34 27 34 28 40 L30 52 L30 20 C30 13 39 13 39 20 L40 48 L41 12 C41 5 51 5 51 12 L51 48 L53 16 C53 9 62 9 62 16 L61 50 L64 30 C65 23 74 24 73 31 L69 64 C67 78 60 88 52 92 Z"
      fill="rgba(255,143,163,0.18)" stroke={ROSE} strokeWidth={3.5} strokeLinejoin="round" />
  </svg>
);

/** Phone with tilt, glowing screen (0..1) and colour of rim. */
export const Phone: React.FC<{ screen: number; rim?: string; tilt?: boolean; scale?: number; ring?: number }> = ({ screen, rim = TEAL, tilt = true, scale = 1, ring = 0 }) => {
  const { t } = useT();
  const ry = tilt ? Math.sin(t * 0.6) * 12 : 0, rx = tilt ? Math.cos(t * 0.45) * 5 : 0;
  const shake = ring > 0 && ring < 1 ? Math.sin(ring * 60) * 4 * (1 - ring) : 0;
  return (
    <div style={{ perspective: 1400, transform: `scale(${scale}) rotate(${shake}deg)` }}>
      <div style={{ width: 300, height: 600, borderRadius: 52, padding: 18, boxSizing: "border-box",
        background: "linear-gradient(150deg, #262a4d, #1a1730 60%, #2d2450)",
        boxShadow: `0 0 0 3px ${rim}cc, 0 0 50px ${rim}66, 0 0 90px ${VIOLET}44, inset 0 2px 10px #ffffff22`,
        transform: `rotateY(${ry}deg) rotateX(${rx}deg)` }}>
        <div style={{ width: 60, height: 8, borderRadius: 4, background: "#ffffff33", margin: "0 auto 14px" }} />
        <div style={{ height: 520, borderRadius: 30, opacity: 0.15 + 0.85 * screen, position: "relative", overflow: "hidden",
          background: `linear-gradient(${140 + t * 25}deg, #3fd0c9, #7b5cff 50%, #ff8fa3)`, boxShadow: `0 0 ${screen * 90}px ${TEAL}aa` }}>
          <div style={{ position: "absolute", top: -200, left: -300 + ((t * 160) % 900), width: 120, height: 900, transform: "rotate(25deg)",
            background: "linear-gradient(90deg, transparent, #ffffff55, transparent)" }} />
        </div>
      </div>
    </div>
  );
};

export const IceCube: React.FC<{ size: number; spin: number; flash?: number }> = ({ size, spin, flash = 0 }) => {
  const h = size / 2;
  const face = (transform: string, shade: number): React.CSSProperties => ({
    position: "absolute", width: size, height: size, transform, borderRadius: 14,
    background: `linear-gradient(${135 + shade * 40}deg, rgba(225,246,255,${0.42 - shade * 0.1}), rgba(110,170,215,${0.16 + shade * 0.06}))`,
    border: `2px solid rgba(210,245,255,${0.75 + flash * 0.25})`,
    boxShadow: `inset 0 0 40px rgba(200,240,255,0.35), 0 0 ${20 + flash * 40}px rgba(169,221,242,${0.25 + flash * 0.5})`,
  });
  return (
    <div style={{ perspective: 1200 }}>
      <div style={{ width: size, height: size, position: "relative", transformStyle: "preserve-3d", transform: `rotateX(-22deg) rotateY(${-30 + spin}deg)` }}>
        <div style={face(`translateZ(${h}px)`, 0)} /><div style={face(`rotateY(180deg) translateZ(${h}px)`, 1)} />
        <div style={face(`rotateY(90deg) translateZ(${h}px)`, 0.5)} /><div style={face(`rotateY(-90deg) translateZ(${h}px)`, 0.5)} />
        <div style={face(`rotateX(90deg) translateZ(${h}px)`, -0.3)} /><div style={face(`rotateX(-90deg) translateZ(${h}px)`, 1)} />
      </div>
    </div>
  );
};

/** Soft particles rising from (x, y). */
export const Mist: React.FC<{ x: number; y: number; start: number; color?: string; spread?: number; n?: number; seed?: number }> =
  ({ x, y, start, color = ICE, spread = 300, n = 22, seed = 0 }) => {
    const { t } = useT();
    if (t < start) return null;
    return (
      <>
        {Array.from({ length: n }).map((_, k) => {
          const i = k + seed;
          const life = ((t - start) * (0.25 + rand(i) * 0.25) + rand(i + 9)) % 1;
          const s = 10 + rand(i + 5) * 26;
          return <div key={k} style={{ position: "absolute", left: x + (rand(i + 2) - 0.5) * spread + Math.sin(t + i) * 20, top: y - life * 300,
            width: s, height: s, borderRadius: "50%", background: color, opacity: Math.sin(life * Math.PI) * 0.35 * ramp(t, start, 1), filter: "blur(6px)" }} />;
        })}
      </>
    );
  };

// ---------------------------------------------------------------- title card and subtitles
export const TitleCard: React.FC<{ chapter: string; title: string; dur: number; word?: string }> = ({ chapter, title, dur, word = "Chapter" }) => {
  const { t } = useT();
  const o = Math.min(ramp(t, 0, 1), 1 - ramp(t, dur - 1, 1));
  const label = (chapter ? `${word} ${chapter}` : word).toUpperCase();   // a bonus video has no number
  return (
    <AbsoluteFill style={{ opacity: o, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 40, color: "#cfc8b6", letterSpacing: "0.35em", opacity: ramp(t, 0.3, 1),
        transform: `translateY(${(1 - ramp(t, 0.3, 1)) * 12}px)`, fontVariantNumeric: "lining-nums" }}>{label}</div>
      <div style={{ width: 160 * ramp(t, 0.8, 1.2), height: 2, background: GOLD, margin: "26px 0 30px", boxShadow: `0 0 12px ${GOLD}` }} />
      <div style={{ maxWidth: 1500, textAlign: "center" }}><Reveal text={title} at={1.1} size={92} speed={0.03} wrap /></div>
    </AbsoluteFill>
  );
};

export type Cue = { s: number; e: number; lines: string[] };
export const Subtitles: React.FC<{ cues: Cue[] }> = ({ cues }) => {
  const { t } = useT();
  const cue = cues.find((c) => t >= c.s && t <= c.e);
  if (!cue) return null;
  const o = Math.min(ramp(t, cue.s, 0.15), 1 - ramp(t, cue.e - 0.15, 0.15));
  return (
    <div style={{ position: "absolute", bottom: 64, width: "100%", textAlign: "center", fontFamily: SANS, fontSize: 46, lineHeight: 1.3,
      color: "#F2F2F2", textShadow: "0 2px 8px #000, 0 0 3px #000", opacity: o }}>
      {cue.lines.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  );
};
