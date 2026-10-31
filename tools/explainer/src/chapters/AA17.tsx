// After Anatta · The Logic: The Logic of Dependency (thusness-website after-anatta/logic.html, aa-logic).
// Arc: in seeing, just the seen -> the candle and "something changing" -> two logics, two starting points -> do we
// really think this way (space, time, the passenger, grammar, infants, emotion) -> what "logic" means (consequence;
// the king of France) -> change without a changer -> the eight extremes as eight ways of asking where -> the lamp ->
// identity by criteria -> conventional, not "merely" -> continuity without a carrier (lamp, melody) -> two objections
// (energy, potentiality) -> the path -> side by side -> back to the candle -> where the logic ends: spontaneous presence.
// Stance: a thing with its own nature, a carrier, a room or river by itself, a store of potentials are drawn only to be
// struck. Conditions, designation and what works stay drawn and vivid. Emptiness is never drawn as a ground.
// Ideas reused from Ch92 (the early book video): the candle with its leaning flame, the crossed box, the lamp.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "In seeing, there is just the seen", "No one stands behind the eyes", "That is anatta",
  "Now watch a candle burn for a minute", "shrinks when the door opens", "The flame is changing",
  "Something is there, and something is happening to it", "Here is the question",
  "why does that picture come back", "This is After Anatta",
  // two logics
  "is the seeing of anatta turned on everything", "On change, on identity, on continuity",
  "It is a way of reasoning", "Call it the logic of substance", "It starts with things, and then asks what happens to them",
  "The logic of dependency starts one step earlier", "It asks how anything is picked out as a thing in the first place",
  "On parts, on causes, on contrasts", "No thing is found standing there before that",
  "The two logics use the same words", "the same words lead them into different worlds",
  // do we think this way
  "First, an honest question", "Does anyone really think this way", "Everything changes, they say",
  "It is what they do when they are not asked",
  "In space", "Yet almost everyone pictures it as one", "if every star were taken away",
  "But space is never met apart from distance", "It is assumed",
  "In time", "Time is pictured as a river, flowing on its own", "The deadline approaches",
  "Yet under general anaesthetic", "No river is found that flowed by itself",
  "These two pictures carry all the rest", "set on a stage, carried along by a stream",
  "Take away the stage and the stream",
  "The habit is in grammar too", "The subject is held still", "It is there before language",
  "Infants of a few months already expect objects to persist when hidden", "And it is clearest in emotion",
  "appears, vivid and solid", "In grief, someone is felt to have vanished",
  "So yes, we think this way", "A cook judges the dough by how it responds",
  "But the habit switches on when we explain", "That is where the logic of dependency has to be tested",
  // logic
  "mean here", "Not a special logic of its own", "It means the force of a consequence",
  "Whoever proposes something existing from its own side must say what it is",
  "they must pick it out by contrast and by name, and so make it dependent", "The proposal undoes itself",
  "It relies on the ordinary rules of reasoning", "Fire cannot be both one with its fuel and other than it",
  "are not contradictions", "They refuse a presupposition", "Is the present king of France bald",
  "Neither yes nor no", "Does the self exist or not", "Each answer assumes a bearer with a status of its own",
  "both answers fall together", "Logic has not been suspended", "The question had nothing to be about",
  // change
  "Now to change", "There is a flame, and the flame flickers", "Look for the noun",
  "is wax vapour, oxygen and light", "and no flame is left over to have been burning",
  "But the verb is not found apart from the noun either", "A flickering with nothing flickering",
  "walker and walking are designated together", "So it is with changer and change",
  "does not swap the old subject for a better one", "Nothing is lost from the burning",
  "You can say correctly when it was lit", "Only the passenger is let go",
  "You can test this at once", "The sound that is fading", "The thought that is passing",
  "Look for what is changing, apart from the changing", "The picture insists it must be there",
  "The looking finds more change, vivid and exact, and no changer behind it",
  // eight extremes
  "homage names eight extremes, in four pairs", "Arising and ceasing", "Permanence and annihilation",
  "Coming and going", "Identity and difference", "these are just the questions one asks of anything",
  "Every one of them assumes a thing with whereabouts", "They are not eight separate errors",
  "They are eight ways of asking where a thing is",
  "does not answer them with a subtler thing", "and so the questions lose their object",
  "No thing crossing an edge from absent to present", "No carrier beneath the change",
  "No whereabouts before it appeared, and none after", "The sprout is not the seed", "for rice yields rice",
  "Here is the point that is easy to miss", "The eight negations describe dependent arising itself",
  "it would have an arising of its own", "That it depends is exactly why no arising is found",
  "Dependence and unfindability are one fact",
  "Switch off a lamp", "and the light went nowhere", "Switch it on", "and the light came from nowhere",
  // identity
  "Now identity", "has an answer hidden in the thing itself", "the same by which criteria, and for which purpose",
  "A ship whose every plank has been replaced", "and perhaps not for the museum that kept the old planks",
  "The child in the old photograph is you", "This does not make identity arbitrary", "A forged passport fails",
  "A mistaken face in a crowd is corrected when it turns",
  "beneath the criteria there is a sameness from the thing's own side",
  "Identity is the validity of a designation that works",
  // conventional
  "The same shift changes the word", "it sounds second rate", "Merely agreed, less than real",
  "conventional truth is the only kind of validity there is", "It has standards", "gives three checks",
  "Known to ordinary cognition", "Not overturned by further ordinary cognition",
  "Not contradicted by analysis of the ultimate", "The snake seen in a rope fails the second",
  "A rope existing from its own side fails the third", "The rope as designated passes all three",
  "And there is no deeper world for convention to fall short of", "Ultimate truth is the emptiness of this one",
  "One appearance, seen two ways", "Emptiness is not a ground beneath it", "It is only its being dependent",
  // continuity
  "Then continuity", "what makes a life one life", "Something persists", "only disconnected flashes are left",
  "rejects both pictures", "lamp is the classic image", "The flame of the last watch of the night",
  "nor a different flame", "Nothing passes from one to the next",
  "yet the second is not unconnected with the first",
  "A melody known by heart shows how", "Each playing is new, and no tune is stored between playings",
  "Yet the tune is recognised across them all", "Habit, character and karma are like this",
  "but it is designated across the moments", "So nothing is lost", "Memory and responsibility hold",
  "And nothing is fixed", "A habit can loosen", "A grievance can end",
  // energy
  "Two objections come from modern thought", "Isn't energy the substrate", "while the total stays the same",
  "Physics itself does not treat it so", "a number that keeps balancing",
  "not a stuff poured from one container into another", "Its amount depends on the frame of reference",
  "in an expanding universe, no total is conserved at all", "When a match burns",
  "nothing is found leaving the match head and travelling into the flame",
  "Conservation is a regularity of the highest reliability", "It is not a passenger",
  // potentiality
  "The second is subtler", "perhaps there is a store of potentials behind appearances",
  "That would make emptiness a new substance", "But a potential is known only through what it becomes",
  "Salt is soluble only in relation to water", "is a designation made within conditions",
  "not a thing waiting backstage", "fits better than", "Nothing blocks the display, and there is no store behind it",
  // path
  "The two logics also lay out different paths", "a traveller removes bad states, like lifting out a stone",
  "and holds good ones, like a coin", "And the effort hardens into grasping", "three things are seen",
  "Conditions are what work", "Anger is not a thing with its own nature",
  "Change the attention, the reading, the posture, and it changes",
  "Openness is what being dependent already means", "and practice would be pointless",
  "And there is nothing to hold, and no goer apart from the going",
  "One trap remains", "Openness and emptiness can quietly become the new things held",
  "warns against those who make emptiness into a view", "Openness, too, is empty",
  "It is the absence of what one was holding",
  // side by side
  "Side by side, then", "The logic of substance starts with things", "A carrier through change",
  "an essence behind identity", "a substrate of energy", "a traveller on the path",
  "starts with how anything is picked out at all", "Change and changer named together", "Identity by criteria",
  "Convention as the only validity there is", "And a path of arranging conditions, with nothing to hold",
  // the candle
  "Return to the candle", "and where it goes when it goes out",
  "notices that the flame was never anything apart from the burning",
  "And the burning never anything apart from the wax, the air, and the one who watches",
  "Nothing is taken from the candle", "It gives exactly as much light as before",
  // where the logic ends
  "And this logic is not meant to stay a set of arguments", "When it is seen, not only followed",
  "With no doer anywhere, and nothing put in its place", "nothing is left producing the appearing",
  "a sound, a thought", "Each appears whole, exactly as its conditions meet",
  "and owes its completeness to nothing hidden", "tradition calls this spontaneous presence",
  "It is not uncaused, and it is not a source behind things", "It is dependent arising itself, met without the fixing",
  "That is why I say that dependent arising is spontaneous presence",
  "And in the flame, just the burning",
];

const M = {
  candle: { a: "rgba(160,100,40,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(170,130,60,0.35)" },
  logic: { a: "rgba(80,60,150,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,110,130,0.3)" },
  assume: { a: "rgba(40,60,130,0.5)", b: "rgba(140,60,90,0.4)", c: "rgba(40,110,130,0.3)" },
  conseq: { a: "rgba(40,120,140,0.5)", b: "rgba(150,120,50,0.4)", c: "rgba(80,60,150,0.3)" },
  change: { a: "rgba(170,100,50,0.45)", b: "rgba(70,50,130,0.45)", c: "rgba(40,110,130,0.3)" },
  extremes: { a: "rgba(60,50,140,0.5)", b: "rgba(40,90,140,0.4)", c: "rgba(150,110,50,0.3)" },
  identity: { a: "rgba(40,110,150,0.5)", b: "rgba(150,110,60,0.4)", c: "rgba(70,60,140,0.3)" },
  flow: { a: "rgba(60,140,100,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
const Items: React.FC<{ items: It[] }> = ({ items }) => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <>
      {items.map(([cue, x, y, node, opt = {} as Opt], i) => {
        const a = c(cue) + (opt.d ?? 0);
        const out = opt.until ? 1 - ramp(t, c(opt.until) + (opt.ud ?? 0), 0.4) : 1;
        return (
          <At key={i} x={x} y={y} o={ramp(t, a, 0.5) * out * (opt.o ?? 1)} s={opt.pop ? pop(t, fps, a) : undefined}>
            {node}
          </At>
        );
      })}
    </>
  );
};
const Wd: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;
/** A chip struck through at `strikeAt`: only for what is never found (own nature, a carrier, a store, a room by itself). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

// ---------------------------------------------------------------- drawings
/** The candle flame from Ch92: leans and shrinks; `lit` fades it. */
const Flame: React.FC<{ s?: number; lean?: number; shrink?: number }> = ({ s = 1, lean = 0, shrink = 0 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (6 + k) + k * 1.7) * 8;
  const top = -170 * (1 - 0.45 * shrink) - n(1);
  const d = `M${lean * 60} ${top} C ${40 + n(2) + lean * 30} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5) + lean * 30} -90, ${lean * 60} ${top} Z`;
  return (
    <svg width={260 * s} height={340 * s} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl17" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl17)" />
      <ellipse cx={lean * 15} cy={50} rx={28} ry={45 * (1 - 0.3 * shrink)} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};
const Candle: React.FC<{ h?: number; lean?: number; shrink?: number; lit?: number }> = ({ h = 240, lean = 0, shrink = 0, lit = 1 }) => (
  <div style={{ position: "relative", width: 200, height: 560 }}>
    <div style={{ position: "absolute", left: 3, bottom: 40 + h - 20, width: 195, height: 255, opacity: lit }}><Flame s={0.75} lean={lean} shrink={shrink} /></div>
    <div style={{ position: "absolute", left: 98, bottom: 40 + h - 4, width: 4, height: 18, background: "#3a2a1a" }} />
    <div style={{ position: "absolute", left: 60, bottom: 40, width: 80, height: h, borderRadius: "10px 10px 4px 4px",
      background: "linear-gradient(90deg, #e9dcc0, #fff6e2 45%, #d8c7a4)", boxShadow: `0 0 40px ${GOLD}55` }} />
    <div style={{ position: "absolute", left: 30, bottom: 20, width: 140, height: 26, borderRadius: 13, background: "#8a6a3a", border: `2px solid ${GOLD}` }} />
  </div>
);

/** A dashed box: a room, a stage, a store, pictured but not found. */
const Dashed: React.FC<{ w?: number; h?: number; color?: string; children?: React.ReactNode }> = ({ w = 360, h = 240, color = DIM, children }) => (
  <div style={{ width: w, height: h, border: `5px dashed ${color}`, borderRadius: 14, boxShadow: `0 0 24px ${color}55`,
    display: "flex", alignItems: "center", justifyContent: "center" }}>{children}</div>
);

/** An eye, open. */
const Eye: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 220 132" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${ICE}aa)` }}>
    <path d="M10 66 C60 0 160 0 210 66 C160 132 60 132 10 66 Z" fill="rgba(169,221,242,0.12)" stroke={ICE} strokeWidth={5} />
    <circle cx={110} cy={66} r={32} fill="rgba(95,211,198,0.35)" stroke={TEAL} strokeWidth={5} />
    <circle cx={110} cy={66} r={12} fill={CHALK} />
  </svg>
);

/** A lamp bulb; `on` 0..1. */
const Lamp: React.FC<{ on: number }> = ({ on }) => (
  <svg width={180} height={260} viewBox="0 0 180 260" style={{ overflow: "visible" }}>
    <circle cx={90} cy={90} r={70} fill={`rgba(228,194,122,${0.08 + 0.55 * on})`} stroke={GOLD} strokeWidth={5}
      style={{ filter: `drop-shadow(0 0 ${8 + 50 * on}px ${GOLD})` }} />
    <rect x={60} y={160} width={60} height={50} rx={8} fill="rgba(241,236,224,0.15)" stroke={CHALK} strokeWidth={5} />
    <path d="M70 180 L110 180 M70 196 L110 196" stroke={CHALK} strokeWidth={4} />
  </svg>
);

/** A ship of planks; `swap` 0..1 recolours the planks one by one. */
const Ship: React.FC<{ swap: number }> = ({ swap }) => {
  const n = 7;
  return (
    <svg width={460} height={220} viewBox="0 0 460 220" style={{ overflow: "visible" }}>
      <path d="M230 20 L230 120 M230 30 L320 110 L230 110 Z" stroke={CHALK} strokeWidth={4} fill="rgba(241,236,224,0.12)" />
      {Array.from({ length: n }).map((_, i) => {
        const fresh = swap * n > i;
        return <rect key={i} x={40 + i * 54} y={130} width={50} height={40} rx={4}
          fill={fresh ? "rgba(143,212,154,0.35)" : "rgba(164,158,144,0.25)"} stroke={fresh ? GREEN : DIM} strokeWidth={4} />;
      })}
      <path d="M30 130 L430 130 L380 200 L80 200 Z" fill="none" stroke={ICE} strokeWidth={5} />
    </svg>
  );
};

/** A row of notes: one playing of a tune. */
const Notes: React.FC<{ color: string }> = ({ color }) => (
  <svg width={300} height={110} viewBox="0 0 300 110" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    {[20, 60, 35, 75, 50, 30].map((y, i) => (
      <g key={i}><circle cx={30 + i * 48} cy={y + 20} r={12} fill={color} /><path d={`M${42 + i * 48} ${y + 20} L${42 + i * 48} ${y - 20}`} stroke={color} strokeWidth={4} /></g>
    ))}
  </svg>
);

/** A balance beam that stays level. */
const Balance: React.FC = () => {
  const { t } = useT();
  const w = 6 * Math.sin(t * 1.5);
  return (
    <svg width={420} height={220} viewBox="0 0 420 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${TEAL}88)` }}>
      <path d="M210 60 L210 200 M150 200 L270 200" stroke={CHALK} strokeWidth={5} />
      <g transform={`rotate(${w * 0.2} 210 60)`}>
        <path d="M40 60 L380 60" stroke={TEAL} strokeWidth={6} />
        <path d="M40 60 L10 130 L70 130 Z M380 60 L350 130 L410 130 Z" fill="rgba(95,211,198,0.2)" stroke={TEAL} strokeWidth={4} />
      </g>
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cd = c("Now watch a candle burn for a minute");
  const sh = c("shrinks when the door opens");
  const lean = Math.sin(Math.max(0, t - cd) * 0.9) * 0.4 * ramp(t, cd + 1, 1);
  const shrink = ramp(t, sh, 0.5) * (1 - ramp(t, sh + 1.8, 1.2));
  const aa = c("This is After Anatta");
  const eyeOut = 1 - ramp(t, cd, 0.5);
  const cdOut = 1 - ramp(t, aa, 0.5);
  return (
    <AbsoluteFill>
      <At x={660} y={420} o={ramp(t, c("In seeing, there is just the seen"), 0.6) * eyeOut}><Eye /></At>
      <At x={1260} y={420} o={ramp(t, c("In seeing, there is just the seen") + 0.8, 0.6) * eyeOut}><K c={TEAL} s={34}>the seen</K></At>
      <At x={960} y={200} o={ramp(t, c("In seeing, there is just the seen"), 0.5) * eyeOut}><Wd c={CHALK} s={44} serif>in seeing, just the seen</Wd></At>
      <At x={660} y={600} o={ramp(t, c("No one stands behind the eyes"), 0.5) * eyeOut}>
        <SK strikeAt={c("No one stands behind the eyes") + 1.2} c={DIM} s={28}>a seer behind the eyes</SK></At>
      <At x={960} y={720} o={ramp(t, c("That is anatta"), 0.5) * eyeOut}><Wd c={GOLD} s={36} serif>anatta</Wd></At>
      <At x={760} y={460} o={ramp(t, cd, 0.6) * cdOut}><Candle lean={lean} shrink={shrink} /></At>
      <Items items={[
        ["The flame is changing", 1280, 300, <Wd c={WARM} s={44} serif>the flame is changing</Wd>, { until: "This is After Anatta" }],
        ["Something is there, and something is happening to it", 1280, 400, <Wd c={DIM} s={30}>something there · something happening to it</Wd>, { until: "This is After Anatta" }],
        ["why does that picture come back", 1280, 560, <Wd c={GOLD} s={36} serif>why does the picture come back?</Wd>, { until: "This is After Anatta" }],
      ]} />
      <At x={960} y={430} o={ramp(t, aa, 0.5)}><Glow color={CHALK} size={52} serif>After Anatta · The Logic</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5)}><Glow color={DIM} size={28}>notes by John Tan (Thusness)</Glow></At>
    </AbsoluteFill>
  );
};

const TwoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dep = c("The logic of dependency starts one step earlier");
  return (
    <AbsoluteFill>
      <Items items={[
        ["is the seeing of anatta turned on everything", 960, 120, <Wd c={CHALK} s={38} serif>the seeing of anatta, turned on everything</Wd>, { until: "It is a way of reasoning" }],
        ["On change, on identity, on continuity", 960, 230,
          <div style={{ display: "flex", gap: 24 }}><K c={WARM}>change</K><K c={ICE}>identity</K><K c={TEAL}>continuity</K><K c={GREEN}>the path</K></div>,
          { until: "It is a way of reasoning" }],
        ["Call it the logic of substance", 520, 160, <Wd c={ROSE} s={40} serif>the logic of substance</Wd>],
        ["It starts with things, and then asks what happens to them", 520, 300, <K c={ROSE}>things first</K>],
        ["It starts with things, and then asks what happens to them", 520, 400, <Wd c={DIM} s={28}>then: arise? last? move? end?</Wd>, { d: 1.2 }],
        ["The logic of dependency starts one step earlier", 1400, 160, <Wd c={TEAL} s={40} serif>the logic of dependency</Wd>],
        ["It asks how anything is picked out as a thing in the first place", 1400, 300, <K c={TEAL}>how is it picked out at all?</K>],
        ["On parts, on causes, on contrasts", 1400, 400, <Wd c={CHALK} s={28}>parts · causes · contrasts · a name</Wd>],
        ["No thing is found standing there before that", 1400, 490,
          <SK strikeAt={c("No thing is found standing there before that") + 1} c={DIM} s={26}>a thing there before that</SK>],
        ["The two logics use the same words", 960, 640, <Wd c={CHALK} s={32}>same words: change, cause, identity, the path</Wd>],
        ["the same words lead them into different worlds", 960, 720, <Wd c={GOLD} s={34} serif>different starting points, different worlds</Wd>],
      ]} />
      <Flow x1={520} y1={330} x2={520} y2={370} color={ROSE} p={ramp(t, c("It starts with things, and then asks what happens to them") + 0.8, 0.5)} />
      <Flow x1={1400} y1={330} x2={1400} y2={370} color={TEAL} p={ramp(t, dep + 2, 0.5)} />
    </AbsoluteFill>
  );
};

const AskScene: React.FC = () => {
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, an honest question", 960, 220, <Wd c={CHALK} s={44} serif>do we really think this way?</Wd>],
        ["Everything changes, they say", 960, 380, <K c={DIM}>"no, everything changes"</K>],
        ["It is what they do when they are not asked", 960, 520, <Wd c={GOLD} s={36} serif>not what we say: what we assume</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SpaceTimeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stars = c("if every star were taken away");
  const time = c("In time");
  const lsp = 1 - ramp(t, time, 0.5);
  const rv = c("Time is pictured as a river, flowing on its own");
  const off = Math.max(0, t - rv) * 60;
  return (
    <AbsoluteFill>
      <div style={{ opacity: lsp }}>
        <At x={960} y={130} o={ramp(t, c("In space"), 0.5)}><Wd c={ICE} s={42} serif>space</Wd></At>
        <At x={960} y={400} o={ramp(t, c("Yet almost everyone pictures it as one"), 0.6)}>
          <Dashed w={620} h={320} color={ICE}>
            <svg width={560} height={260} viewBox="0 0 560 260">
              {[[80, 60], [200, 160], [320, 50], [430, 190], [500, 80], [140, 220]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={10} fill={GOLD} opacity={1 - ramp(t, stars + i * 0.15, 0.4)} />
              ))}
            </svg>
          </Dashed>
        </At>
        <At x={960} y={620} o={ramp(t, stars + 0.8, 0.5)}>
          <SK strikeAt={c("It is assumed") - 0.2} c={ICE} s={28}>an empty room, left over</SK></At>
        <At x={960} y={720} o={ramp(t, c("But space is never met apart from distance"), 0.5)}>
          <Wd c={CHALK} s={30}>never met apart from distance, reach, room for something</Wd></At>
      </div>
      <At x={960} y={130} o={ramp(t, time, 0.5)}><Wd c={VIOLET} s={42} serif>time</Wd></At>
      <At x={960} y={360} o={ramp(t, rv, 0.6)}>
        <svg width={1200} height={160} viewBox="0 0 1200 160" style={{ overflow: "visible" }}>
          {[0, 1, 2].map((k) => (
            <path key={k} d={`M0 ${50 + k * 30} ${Array.from({ length: 13 }).map((_, i) => `Q ${i * 100 + 50 - (off % 100)} ${30 + k * 30 + (i % 2 ? 30 : 0)} ${i * 100 + 100 - (off % 100)} ${50 + k * 30}`).join(" ")}`}
              fill="none" stroke={VIOLET} strokeWidth={4} opacity={0.7} />
          ))}
        </svg>
      </At>
      <Items items={[
        ["The deadline approaches", 600, 520, <K c={VIOLET} s={26}>the deadline approaches</K>, { until: "These two pictures carry all the rest" }],
        ["The deadline approaches", 1320, 520, <K c={VIOLET} s={26}>we spend time, run out of it</K>, { d: 1.5, until: "These two pictures carry all the rest" }],
        ["Yet under general anaesthetic", 960, 630, <Wd c={CHALK} s={30}>anaesthesia: three hours on the clock, none in experience</Wd>, { until: "These two pictures carry all the rest" }],
        ["No river is found that flowed by itself", 960, 720,
          <SK strikeAt={c("No river is found that flowed by itself") + 0.9} c={VIOLET} s={28}>a river flowing by itself</SK>, { until: "These two pictures carry all the rest" }],
      ]} />
    </AbsoluteFill>
  );
};

const PassengerScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("set on a stage, carried along by a stream");
  const away = c("Take away the stage and the stream");
  const g = c("The habit is in grammar too");
  const out = 1 - ramp(t, g, 0.5);
  return (
    <AbsoluteFill>
      <div style={{ opacity: out }}>
        <At x={960} y={150} o={ramp(t, c("These two pictures carry all the rest"), 0.5)}><Wd c={CHALK} s={38} serif>the passenger</Wd></At>
        <At x={960} y={380} o={ramp(t, st, 0.5) * (1 - ramp(t, away + 0.6, 0.6))}><Dashed w={560} h={200} color={ICE} /></At>
        <At x={960} y={520} o={ramp(t, st + 0.8, 0.5) * (1 - ramp(t, away + 0.6, 0.6))}><Wd c={VIOLET} s={28}>~ ~ ~ a stream ~ ~ ~</Wd></At>
        <At x={960} y={380} o={ramp(t, st, 0.5)}>
          <SK strikeAt={away + 1.6} c={GOLD} s={30}>something that changes</SK></At>
        <At x={960} y={660} o={ramp(t, away + 1.2, 0.5)}><Wd c={DIM} s={30}>the passenger has nowhere to be</Wd></At>
      </div>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sw = c("But the habit switches on when we explain");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The habit is in grammar too", 420, 200, <K c={ICE}>grammar</K>],
        ["The subject is held still", 420, 300, <Wd c={CHALK} s={28}>the flame · flickers</Wd>],
        ["The subject is held still", 420, 360, <Wd c={DIM} s={24}>subject held still</Wd>, { d: 0.8 }],
        ["It is there before language", 960, 200, <K c={GREEN}>before language</K>],
        ["Infants of a few months already expect objects to persist when hidden", 960, 320, <Wd c={CHALK} s={26}>infants expect objects to persist</Wd>],
        ["And it is clearest in emotion", 1500, 200, <K c={ROSE}>emotion</K>],
        ["appears, vivid and solid", 1500, 310, <Wd c={ROSE} s={44} serif>"I"</Wd>, { pop: true }],
        ["In grief, someone is felt to have vanished", 1500, 400, <Wd c={DIM} s={24}>grief: someone fully there, vanished</Wd>],
        ["So yes, we think this way", 960, 520, <Wd c={GOLD} s={38} serif>so yes, we think this way</Wd>],
        ["A cook judges the dough by how it responds", 960, 600, <Wd c={DIM} s={26}>not all the time: a cook reads the dough</Wd>],
      ]} />
      <At x={960} y={700} o={ramp(t, sw, 0.5)}>
        <div style={{ display: "flex", gap: 22 }}>
          {["explain", "name", "feel threatened", "lose"].map((w, i) => (
            <div key={w} style={{ opacity: ramp(t, sw + 0.6 * i, 0.4) }}><K c={WARM} s={26}>{w}</K></div>
          ))}
        </div>
      </At>
      <At x={960} y={790} o={ramp(t, c("That is where the logic of dependency has to be tested"), 0.5)}><Wd c={CHALK} s={28}>where the test has to be made</Wd></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ref = c("are not contradictions");
  const out = 1 - ramp(t, ref, 0.5);
  const king = c("Is the present king of France bald");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("mean here"), 0.5)}><Wd c={CHALK} s={40} serif>what "logic" means here</Wd></At>
      <div style={{ opacity: out }}>
        <Items items={[
          ["Not a special logic of its own", 960, 220, <Wd c={DIM} s={28}>not a special logic · not beyond logic</Wd>],
          ["It means the force of a consequence", 960, 300, <K c={TEAL}>the force of a consequence</K>],
          ["Whoever proposes something existing from its own side must say what it is", 480, 440, <K c={GOLD} s={26}>from its own side</K>],
          ["Whoever proposes something existing from its own side must say what it is", 960, 440, <Wd c={CHALK} s={26}>→ say what it is →</Wd>, { d: 1.5 }],
          ["they must pick it out by contrast and by name, and so make it dependent", 1440, 440, <K c={TEAL} s={26}>by contrast, by name: dependent</K>],
          ["The proposal undoes itself", 960, 560, <Wd c={GOLD} s={36} serif>the proposal undoes itself</Wd>],
          ["It relies on the ordinary rules of reasoning", 960, 660, <Wd c={DIM} s={28}>it relies on the ordinary rules</Wd>],
          ["Fire cannot be both one with its fuel and other than it", 960, 730, <Wd c={WARM} s={28}>fire: not both one with its fuel and other than it</Wd>],
        ]} />
      </div>
      <Items items={[
        ["They refuse a presupposition", 960, 220, <Wd c={CHALK} s={32}>the refusals refuse a presupposition</Wd>],
        ["Is the present king of France bald", 960, 330, <K c={VIOLET}>is the present king of France bald?</K>],
        ["Neither yes nor no", 700, 440, <K c={DIM} s={26}>yes</K>],
        ["Neither yes nor no", 1220, 440, <K c={DIM} s={26}>no</K>, { d: 0.3 }],
        ["Does the self exist or not", 960, 540, <K c={ROSE}>does the self exist or not?</K>],
        ["Each answer assumes a bearer with a status of its own", 960, 640,
          <SK strikeAt={c("both answers fall together")} c={GOLD} s={28}>a bearer with a status of its own</SK>],
        ["The question had nothing to be about", 960, 750, <Wd c={GOLD} s={34} serif>the question had nothing to be about</Wd>],
      ]} />
      <Svg>
        <DrawPath d="M640 410 L760 470 M760 410 L640 470" p={ramp(t, king + 2.5, 0.4)} color={WARM} width={6} len={300} />
        <DrawPath d="M1160 410 L1280 470 M1280 410 L1160 470" p={ramp(t, king + 2.8, 0.4)} color={WARM} width={6} len={300} />
      </Svg>
    </AbsoluteFill>
  );
};

const ChangeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("Now to change");
  const lean = Math.sin(Math.max(0, t - st) * 1.1) * 0.35;
  const test = c("You can test this at once");
  const out = 1 - ramp(t, test, 0.5);
  return (
    <AbsoluteFill>
      <div style={{ opacity: out }}>
        <At x={420} y={470}><Candle lean={lean} h={200 - 40 * ramp(t, c("You can say correctly when it was lit"), 3)} /></At>
        <Items items={[
          ["There is a flame, and the flame flickers", 1200, 140, <Wd c={CHALK} s={36} serif>a noun, with verbs happening to it</Wd>],
          ["Look for the noun", 1000, 260, <K c={GOLD}>the flame (noun)</K>],
          ["is wax vapour, oxygen and light", 1200, 340, <Wd c={DIM} s={26}>wax vapour · oxygen · light, new each moment</Wd>],
          ["and no flame is left over to have been burning", 1000, 420,
            <SK strikeAt={c("and no flame is left over to have been burning") + 1} c={GOLD} s={26}>a flame apart from the burning</SK>],
          ["But the verb is not found apart from the noun either", 1450, 260, <K c={WARM}>flickers (verb)</K>],
          ["A flickering with nothing flickering", 1450, 420,
            <SK strikeAt={c("A flickering with nothing flickering") + 1.2} c={WARM} s={26}>flickering with nothing flickering</SK>],
          ["walker and walking are designated together", 1220, 530, <Wd c={TEAL} s={32} serif>walker and walking: designated together</Wd>],
          ["So it is with changer and change", 1220, 600, <Wd c={CHALK} s={28}>changer and change</Wd>],
          ["does not swap the old subject for a better one", 1220, 680,
            <SK strikeAt={c("Nothing is lost from the burning") - 0.3} c={DIM} s={24}>a process, a flow, an energy underneath</SK>],
          ["Nothing is lost from the burning", 1220, 760, <Wd c={GREEN} s={28}>nothing lost: it was lit, it went out</Wd>, { until: "Only the passenger is let go", ud: -0.3 }],
          ["Only the passenger is let go", 1220, 760, <Wd c={GOLD} s={30} serif>only the passenger is let go</Wd>, { d: 0.2 }],
        ]} />
      </div>
      <Items items={[
        ["You can test this at once", 960, 140, <Wd c={CHALK} s={40} serif>try it</Wd>],
        ["The sound that is fading", 600, 300, <K c={TEAL}>a sound, fading</K>],
        ["The thought that is passing", 1320, 300, <K c={VIOLET}>a thought, passing</K>],
        ["Look for what is changing, apart from the changing", 960, 420, <Wd c={GOLD} s={34} serif>look for what changes, apart from the changing</Wd>],
        ["The picture insists it must be there", 960, 520, <Wd c={DIM} s={28}>the picture insists</Wd>],
        ["The looking finds more change, vivid and exact, and no changer behind it", 960, 620,
          <Wd c={WARM} s={32}>more change, vivid and exact</Wd>],
        ["The looking finds more change, vivid and exact, and no changer behind it", 960, 710,
          <SK strikeAt={c("The looking finds more change, vivid and exact, and no changer behind it") + 3.5} c={DIM} s={26}>a changer behind it</SK>, { d: 2.2 }],
      ]} />
    </AbsoluteFill>
  );
};

const ExtremesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pairs: [string, string, string, string][] = [
    ["Arising and ceasing", "arising", "ceasing", ICE],
    ["Permanence and annihilation", "permanence", "annihilation", ROSE],
    ["Coming and going", "coming", "going", TEAL],
    ["Identity and difference", "identity", "difference", VIOLET],
  ];
  const lose = c("and so the questions lose their object");
  const pt = c("Here is the point that is easy to miss");
  const out = 1 - ramp(t, pt, 0.5);
  return (
    <AbsoluteFill>
      <div style={{ opacity: out }}>
        <At x={960} y={110} o={ramp(t, c("homage names eight extremes, in four pairs"), 0.5)}><Wd c={CHALK} s={38} serif>the eight extremes</Wd></At>
        {pairs.map(([cue, a, b, col], i) => (
          <React.Fragment key={cue}>
            <At x={560} y={210 + i * 90} o={ramp(t, c(cue), 0.4) * (1 - 0.6 * ramp(t, lose, 0.6))}><K c={col} s={28}>{a}</K></At>
            <At x={900} y={210 + i * 90} o={ramp(t, c(cue) + 0.4, 0.4) * (1 - 0.6 * ramp(t, lose, 0.6))}><K c={col} s={28}>{b}</K></At>
          </React.Fragment>
        ))}
        <Items items={[
          ["these are just the questions one asks of anything", 1420, 240, <Wd c={DIM} s={26}>when did it start? where did it go?</Wd>, { until: "does not answer them with a subtler thing" }],
          ["Every one of them assumes a thing with whereabouts", 1420, 340,
            <SK strikeAt={lose} c={GOLD} s={28}>a thing with whereabouts</SK>],
          ["They are not eight separate errors", 1420, 440, <Wd c={DIM} s={26}>not eight errors</Wd>],
          ["They are eight ways of asking where a thing is", 1420, 500, <Wd c={GOLD} s={32} serif>eight ways of asking "where?"</Wd>],
          ["No thing crossing an edge from absent to present", 960, 600, <Wd c={CHALK} s={26}>no thing crossing an edge · no carrier beneath</Wd>],
          ["No whereabouts before it appeared, and none after", 960, 660, <Wd c={CHALK} s={26}>no whereabouts before, none after</Wd>],
          ["The sprout is not the seed", 760, 740, <K c={GREEN} s={26}>the sprout is not the seed</K>],
          ["for rice yields rice", 1180, 740, <K c={GOLD} s={26}>rice yields rice</K>],
        ]} />
      </div>
      <Items items={[
        ["The eight negations describe dependent arising itself", 960, 160, <Wd c={TEAL} s={36} serif>the negations describe dependent arising itself</Wd>, { until: "Switch off a lamp" }],
        ["it would have an arising of its own", 960, 280, <SK strikeAt={c("That it depends is exactly why no arising is found")} c={DIM} s={28}>an arising of its own</SK>, { until: "Switch off a lamp" }],
        ["That it depends is exactly why no arising is found", 960, 380, <Wd c={CHALK} s={30}>it depends: so no arising is found</Wd>, { until: "Switch off a lamp" }],
        ["Dependence and unfindability are one fact", 960, 480, <Wd c={GOLD} s={40} serif>dependence = unfindability: one fact</Wd>, { until: "Switch off a lamp" }],
      ]} />
    </AbsoluteFill>
  );
};

const LampScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const off = c("Switch off a lamp");
  const on = c("Switch it on");
  const lv = (1 - ramp(t, off + 0.5, 0.3)) * (1 - ramp(t, on, 0.01)) + ramp(t, on + 0.5, 0.3);
  return (
    <AbsoluteFill>
      <At x={960} y={360}><Lamp on={lv} /></At>
      <Items items={[
        ["and the light went nowhere", 520, 360, <Wd c={DIM} s={32}>dark: the light went nowhere</Wd>],
        ["and the light came from nowhere", 1400, 360, <Wd c={GOLD} s={32}>light: it came from nowhere</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const IdentityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sh = c("A ship whose every plank has been replaced");
  const arb = c("This does not make identity arbitrary");
  const out = 1 - ramp(t, arb, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now identity", 960, 110, <Wd c={CHALK} s={40} serif>identity: from essence to criteria</Wd>],
        ["has an answer hidden in the thing itself", 520, 210, <SK strikeAt={c("the same by which criteria, and for which purpose")} c={DIM} s={26}>an answer hidden inside</SK>, { until: "This does not make identity arbitrary" }],
        ["the same by which criteria, and for which purpose", 1400, 210, <K c={TEAL} s={26}>by which criteria? for which purpose?</K>, { until: "This does not make identity arbitrary" }],
      ]} />
      <div style={{ opacity: out }}>
        <At x={760} y={420} o={ramp(t, sh, 0.5)}><Ship swap={ramp(t, sh + 0.5, 3)} /></At>
        <Items items={[
          ["A ship whose every plank has been replaced", 1350, 380, <K c={GREEN} s={26}>the same, on the register</K>, { d: 2.5 }],
          ["and perhaps not for the museum that kept the old planks", 1350, 460, <K c={DIM} s={26}>not, for the museum</K>],
          ["The child in the old photograph is you", 960, 640, <Wd c={GOLD} s={30}>the child in the photograph: you, for your family, your papers, your story</Wd>],
        ]} />
      </div>
      <Items items={[
        ["This does not make identity arbitrary", 960, 260, <Wd c={CHALK} s={36} serif>not arbitrary</Wd>],
        ["A forged passport fails", 640, 380, <K c={ROSE} s={28}>a forged passport fails</K>],
        ["A mistaken face in a crowd is corrected when it turns", 1280, 380, <K c={ICE} s={28}>a mistaken face is corrected</K>],
        ["beneath the criteria there is a sameness from the thing's own side", 960, 520,
          <SK strikeAt={c("Identity is the validity of a designation that works") - 0.3} c={GOLD} s={28}>a sameness from its own side</SK>],
        ["Identity is the validity of a designation that works", 960, 640, <Wd c={GREEN} s={34} serif>a designation that works</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ConventionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const deep = c("And there is no deeper world for convention to fall short of");
  const out = 1 - ramp(t, deep, 0.5);
  const checks: [string, string][] = [
    ["Known to ordinary cognition", "known to ordinary cognition"],
    ["Not overturned by further ordinary cognition", "not overturned by further cognition"],
    ["Not contradicted by analysis of the ultimate", "not contradicted by analysis of the ultimate"],
  ];
  return (
    <AbsoluteFill>
      <div style={{ opacity: out }}>
        <Items items={[
          ["The same shift changes the word", 960, 110, <Wd c={CHALK} s={38} serif>conventional, not "merely" conventional</Wd>],
          ["it sounds second rate", 560, 210, <SK strikeAt={c("conventional truth is the only kind of validity there is")} c={DIM} s={26}>second rate, merely agreed</SK>],
          ["conventional truth is the only kind of validity there is", 1360, 210, <K c={GREEN} s={26}>the only validity there is</K>],
          ["gives three checks", 960, 300, <Wd c={DIM} s={26}>three checks</Wd>],
        ]} />
        {checks.map(([cue, txt], i) => (
          <At key={cue} x={700} y={380 + i * 80} o={ramp(t, c(cue), 0.4)}><K c={TEAL} s={24}>{`${i + 1}. ${txt}`}</K></At>
        ))}
        <Items items={[
          ["The snake seen in a rope fails the second", 1450, 380, <K c={ROSE} s={24}>snake in the rope: fails 2</K>],
          ["A rope existing from its own side fails the third", 1450, 460, <K c={ROSE} s={24}>rope from its own side: fails 3</K>],
          ["The rope as designated passes all three", 1450, 540, <K c={GREEN} s={24}>rope as designated: passes all</K>],
        ]} />
      </div>
      <Items items={[
        ["And there is no deeper world for convention to fall short of", 960, 200, <SK strikeAt={deep + 2.2} c={DIM} s={28}>a deeper world behind</SK>],
        ["Ultimate truth is the emptiness of this one", 960, 320, <Wd c={CHALK} s={34} serif>the ultimate: the emptiness of this one</Wd>],
        ["One appearance, seen two ways", 960, 420, <Wd c={GOLD} s={40} serif>one appearance, seen two ways</Wd>],
        ["Emptiness is not a ground beneath it", 960, 540, <SK strikeAt={c("It is only its being dependent") - 0.2} c={VIOLET} s={28}>emptiness as a ground</SK>],
        ["It is only its being dependent", 960, 650, <Wd c={TEAL} s={32}>only its being dependent</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ContinuityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lampC = c("lamp is the classic image");
  const mel = c("A melody known by heart shows how");
  const out = 1 - ramp(t, mel, 0.5);
  const pass = c("Nothing passes from one to the next");
  return (
    <AbsoluteFill>
      <div style={{ opacity: out }}>
        <Items items={[
          ["Then continuity", 960, 110, <Wd c={CHALK} s={40} serif>continuity without a carrier</Wd>],
          ["Something persists", 560, 230, <SK strikeAt={c("rejects both pictures") + 0.3} c={GOLD} s={26}>a carrier that persists</SK>],
          ["only disconnected flashes are left", 1360, 230, <SK strikeAt={c("rejects both pictures") + 0.9} c={DIM} s={26}>disconnected flashes</SK>],
        ]} />
        <At x={660} y={520} o={ramp(t, lampC, 0.5)}><Candle h={160} lean={0.15} /></At>
        <At x={1260} y={520} o={ramp(t, c("The flame of the last watch of the night"), 0.5)}><Candle h={60} lean={-0.15} /></At>
        <At x={660} y={760} o={ramp(t, lampC, 0.5)}><Wd c={DIM} s={24}>first watch</Wd></At>
        <At x={1260} y={760} o={ramp(t, c("The flame of the last watch of the night"), 0.5)}><Wd c={DIM} s={24}>last watch</Wd></At>
        <At x={960} y={360} o={ramp(t, c("nor a different flame"), 0.5)}><Wd c={GOLD} s={30} serif>neither the same, nor different</Wd></At>
        <At x={960} y={430} o={ramp(t, pass, 0.5)}><SK strikeAt={pass + 1.6} c={WARM} s={24}>something passed across</SK></At>
        <Flow x1={760} y1={520} x2={1160} y2={520} color={TEAL} p={ramp(t, c("yet the second is not unconnected with the first"), 1)} />
      </div>
      <At x={560} y={240} o={ramp(t, mel, 0.5)}><Notes color={TEAL} /></At>
      <At x={960} y={240} o={ramp(t, mel + 0.7, 0.5)}><Notes color={GOLD} /></At>
      <At x={1360} y={240} o={ramp(t, mel + 1.4, 0.5)}><Notes color={VIOLET} /></At>
      <Items items={[
        ["A melody known by heart shows how", 960, 120, <Wd c={CHALK} s={36} serif>a melody known by heart</Wd>],
        ["Each playing is new, and no tune is stored between playings", 960, 360, <SK strikeAt={c("Yet the tune is recognised across them all") - 0.3} c={DIM} s={26}>a tune stored in between</SK>],
        ["Yet the tune is recognised across them all", 960, 440, <Wd c={GOLD} s={30}>recognised across them all</Wd>],
        ["Habit, character and karma are like this", 960, 530, <Wd c={CHALK} s={28}>habit · character · karma</Wd>],
        ["but it is designated across the moments", 960, 600, <Wd c={TEAL} s={28}>designated across the moments, not carried through them</Wd>],
        ["So nothing is lost", 640, 700, <K c={GREEN} s={26}>nothing lost: memory, responsibility</K>],
        ["And nothing is fixed", 1280, 700, <K c={WARM} s={26}>nothing fixed: a habit loosens, a grievance ends</K>],
      ]} />
    </AbsoluteFill>
  );
};

const EnergyScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Two objections come from modern thought", 960, 110, <Wd c={DIM} s={28}>objection one</Wd>],
        ["Isn't energy the substrate", 960, 180, <Wd c={CHALK} s={42} serif>isn't energy the substrate?</Wd>],
        ["while the total stays the same", 960, 260, <Wd c={DIM} s={26}>it changes form; the total stays the same</Wd>],
        ["a number that keeps balancing", 560, 440, <Balance />],
        ["a number that keeps balancing", 560, 580, <K c={TEAL} s={26}>a quantity that balances</K>, { d: 0.6 }],
        ["not a stuff poured from one container into another", 1360, 360,
          <SK strikeAt={c("Its amount depends on the frame of reference")} c={GOLD} s={26}>a stuff poured between containers</SK>],
        ["Its amount depends on the frame of reference", 1360, 440, <Wd c={CHALK} s={24}>its amount depends on the frame</Wd>],
        ["in an expanding universe, no total is conserved at all", 1360, 510, <Wd c={CHALK} s={24}>expanding universe: no conserved total</Wd>],
        ["nothing is found leaving the match head and travelling into the flame", 1360, 590,
          <SK strikeAt={c("Conservation is a regularity of the highest reliability")} c={WARM} s={24}>something travelling from match to flame</SK>],
        ["Conservation is a regularity of the highest reliability", 960, 700, <Wd c={GREEN} s={30}>a regularity, of the highest reliability</Wd>],
        ["It is not a passenger", 960, 770, <Wd c={GOLD} s={32} serif>not a passenger</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PotentialScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The second is subtler", 960, 110, <Wd c={DIM} s={28}>objection two</Wd>],
        ["perhaps there is a store of potentials behind appearances", 960, 280, <Dashed w={520} h={170} color={VIOLET}><Wd c={VIOLET} s={28}>a store of potentials</Wd></Dashed>, { until: "fits better than", ud: -0.5 }],
        ["That would make emptiness a new substance", 960, 420,
          <SK strikeAt={c("But a potential is known only through what it becomes") + 0.5} c={VIOLET} s={26}>emptiness as a new substance</SK>],
        ["But a potential is known only through what it becomes", 960, 510, <Wd c={CHALK} s={28}>known only through what it becomes, and its partner</Wd>],
        ["Salt is soluble only in relation to water", 960, 590, <K c={ICE} s={26}>salt is soluble · in relation to water</K>],
        ["is a designation made within conditions", 960, 670, <Wd c={TEAL} s={28}>"could": a designation within conditions</Wd>],
        ["fits better than", 960, 180, <Wd c={GOLD} s={42} serif>unobstructed</Wd>, { pop: true }],
        ["Nothing blocks the display, and there is no store behind it", 960, 760, <Wd c={GOLD} s={30}>nothing blocks the display; no store behind it</Wd>],
      ]} />
      <Items items={[
        ["not a thing waiting backstage", 960, 280, <div style={{ width: 520, height: 170, position: "relative" }}><Strike at={c("not a thing waiting backstage") + 0.4} /></div>, { until: "fits better than", ud: -0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const PathScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const seen = c("three things are seen");
  const out = 1 - ramp(t, seen, 0.5);
  const trap = c("One trap remains");
  const out2 = 1 - ramp(t, trap, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("The two logics also lay out different paths"), 0.5)}><Wd c={CHALK} s={38} serif>two paths</Wd></At>
      <div style={{ opacity: out }}>
        <Items items={[
          ["a traveller removes bad states, like lifting out a stone", 620, 320, <K c={ROSE}>remove the bad, like a stone</K>],
          ["and holds good ones, like a coin", 1300, 320, <K c={GOLD}>hold the good, like a coin</K>],
          ["And the effort hardens into grasping", 960, 480, <Wd c={WARM} s={34} serif>the effort hardens into grasping</Wd>],
        ]} />
      </div>
      <div style={{ opacity: out2 }}>
        <Items items={[
          ["Conditions are what work", 420, 260, <K c={TEAL}>conditions are what work</K>],
          ["Anger is not a thing with its own nature", 420, 360, <SK strikeAt={c("Change the attention, the reading, the posture, and it changes")} c={ROSE} s={24}>anger with its own nature</SK>],
          ["Change the attention, the reading, the posture, and it changes", 420, 440, <Wd c={CHALK} s={24}>attention · reading · posture</Wd>],
          ["Openness is what being dependent already means", 960, 260, <K c={GREEN}>openness = being dependent</K>],
          ["and practice would be pointless", 960, 360, <Wd c={DIM} s={24}>if fixed, practice would be pointless</Wd>],
          ["And there is nothing to hold, and no goer apart from the going", 1500, 260, <K c={GOLD}>nothing to hold</K>],
          ["And there is nothing to hold, and no goer apart from the going", 1500, 360, <Wd c={DIM} s={24}>no goer apart from the going</Wd>, { d: 1.5 }],
        ]} />
      </div>
      <Items items={[
        ["One trap remains", 960, 240, <Wd c={WARM} s={36} serif>one trap</Wd>],
        ["Openness and emptiness can quietly become the new things held", 960, 360,
          <SK strikeAt={c("Openness, too, is empty")} c={VIOLET} s={28}>emptiness held as a thing</SK>],
        ["warns against those who make emptiness into a view", 960, 460, <Wd c={DIM} s={26}>emptiness made into a view (MMK 13.8)</Wd>],
        ["Openness, too, is empty", 960, 560, <Wd c={CHALK} s={34} serif>openness, too, is empty</Wd>],
        ["It is the absence of what one was holding", 960, 660, <Wd c={GOLD} s={30}>the absence of what one was holding</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SideScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const left: [string, string][] = [
    ["A carrier through change", "a carrier through change"], ["an essence behind identity", "an essence behind identity"],
    ["a substrate of energy", "a substrate of energy"], ["a traveller on the path", "a traveller on the path"],
  ];
  const right: [string, string][] = [
    ["Change and changer named together", "change and changer named together"], ["Identity by criteria", "identity by criteria"],
    ["Convention as the only validity there is", "convention: the only validity"],
    ["And a path of arranging conditions, with nothing to hold", "arranging conditions, nothing to hold"],
  ];
  const strike = c("starts with how anything is picked out at all");
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, c("Side by side, then"), 0.5)}><Wd c={CHALK} s={36} serif>side by side</Wd></At>
      <At x={520} y={200} o={ramp(t, c("The logic of substance starts with things"), 0.5)}><Wd c={ROSE} s={34} serif>substance: things first</Wd></At>
      <At x={1400} y={200} o={ramp(t, strike, 0.5)}><Wd c={TEAL} s={34} serif>dependency: how picked out</Wd></At>
      {left.map(([cue, txt], i) => (
        <At key={cue} x={520} y={310 + i * 100} o={ramp(t, c(cue), 0.4) * (1 - 0.5 * ramp(t, strike, 0.6))}><K c={ROSE} s={26}>{txt}</K></At>
      ))}
      {right.map(([cue, txt], i) => (
        <At key={cue} x={1400} y={310 + i * 100} o={ramp(t, c(cue), 0.4)}><K c={TEAL} s={26}>{txt}</K></At>
      ))}
    </AbsoluteFill>
  );
};

const CandleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("Return to the candle");
  const lean = Math.sin(Math.max(0, t - st) * 0.8) * 0.3;
  const end = c("And this logic is not meant to stay a set of arguments");
  const out = 1 - ramp(t, end, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={470} o={ramp(t, st, 0.6)}><Candle lean={lean} h={170} /></At>
      <div style={{ opacity: out }}>
        <Items items={[
          ["and where it goes when it goes out", 480, 260, <SK strikeAt={c("notices that the flame was never anything apart from the burning")} c={ROSE} s={26}>what it really is · where it goes</SK>],
          ["notices that the flame was never anything apart from the burning", 1440, 260, <Wd c={WARM} s={30}>never apart from the burning</Wd>],
          ["And the burning never anything apart from the wax, the air, and the one who watches", 1440, 340, <Wd c={CHALK} s={26}>the wax · the air · the one who watches</Wd>],
          ["It gives exactly as much light as before", 960, 790, <Wd c={GOLD} s={32}>exactly as much light as before</Wd>],
        ]} />
      </div>
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And this logic is not meant to stay a set of arguments");
  const lean = Math.sin(t * 0.8) * 0.3;
  const spon = c("tradition calls this spontaneous presence");
  const last = c("And in the flame, just the burning");
  return (
    <AbsoluteFill>
      <At x={960} y={470} o={1 - ramp(t, end + 2, 1)}><Candle lean={lean} h={170} /></At>
      <Items items={[
        ["When it is seen, not only followed", 960, 120, <Wd c={CHALK} s={36} serif>seen, not only followed</Wd>, { until: "tradition calls this spontaneous presence" }],
        ["With no doer anywhere, and nothing put in its place", 520, 300,
          <SK strikeAt={c("nothing is left producing the appearing") + 0.8} c={DIM} s={26}>a doer, or something in its place</SK>, { until: "tradition calls this spontaneous presence" }],
        ["nothing is left producing the appearing", 520, 400, <Wd c={DIM} s={26}>nothing producing the appearing</Wd>, { until: "tradition calls this spontaneous presence" }],
        ["a sound, a thought", 1400, 300,
          <div style={{ display: "flex", gap: 18 }}><K c={WARM} s={26}>light</K><K c={TEAL} s={26}>a sound</K><K c={VIOLET} s={26}>a thought</K></div>, { until: "tradition calls this spontaneous presence" }],
        ["Each appears whole, exactly as its conditions meet", 1400, 400, <Wd c={CHALK} s={26}>each whole, as its conditions meet</Wd>, { until: "tradition calls this spontaneous presence" }],
        ["and owes its completeness to nothing hidden", 1400, 470, <Wd c={GOLD} s={26}>owing nothing to anything hidden</Wd>, { until: "tradition calls this spontaneous presence" }],
      ]} />
      <At x={960} y={260}><Reveal text="spontaneous presence" at={spon} size={64} color={GOLD} speed={0.04} /></At>
      <Ring x={960} y={260} p={ramp(t, spon + 0.5, 2.5)} r0={60} r1={420} color={GOLD} width={3} />
      <Items items={[
        ["It is not uncaused, and it is not a source behind things", 960, 400, <Wd c={DIM} s={28}>not uncaused · not a source behind things</Wd>, { until: "And in the flame, just the burning" }],
        ["It is dependent arising itself, met without the fixing", 960, 480, <Wd c={TEAL} s={32}>dependent arising itself, met without the fixing</Wd>, { until: "And in the flame, just the burning" }],
        ["That is why I say that dependent arising is spontaneous presence", 960, 600,
          <Wd c={CHALK} s={36} serif>dependent arising is spontaneous presence</Wd>],
      ]} />
      <At x={960} y={720} o={ramp(t, last - 2.5, 0.6)}><Wd c={DIM} s={30}>in seeing, just the seen</Wd></At>
      <At x={960} y={790} o={ramp(t, last, 0.6)}><Wd c={WARM} s={34} serif>in the flame, just the burning</Wd></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["In seeing, there is just the seen", "candle", <OpenScene />],
    ["is the seeing of anatta turned on everything", "logic", <TwoScene />],
    ["First, an honest question", "assume", <AskScene />],
    ["In space", "assume", <SpaceTimeScene />],
    ["These two pictures carry all the rest", "doubt", <PassengerScene />],
    ["The habit is in grammar too", "assume", <HabitScene />],
    ["mean here", "conseq", <LogicScene />],
    ["Now to change", "change", <ChangeScene />],
    ["homage names eight extremes, in four pairs", "extremes", <ExtremesScene />],
    ["Switch off a lamp", "candle", <LampScene />],
    ["Now identity", "identity", <IdentityScene />],
    ["The same shift changes the word", "conseq", <ConventionScene />],
    ["Then continuity", "flow", <ContinuityScene />],
    ["Two objections come from modern thought", "logic", <EnergyScene />],
    ["The second is subtler", "doubt", <PotentialScene />],
    ["The two logics also lay out different paths", "flow", <PathScene />],
    ["Side by side, then", "logic", <SideScene />],
    ["Return to the candle", "candle", <CandleScene />],
    ["And this logic is not meant to stay a set of arguments", "whole", <EndScene />],
  ];
  const moods: Mood[] = [];
  order.forEach(([cue, k], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < order.length ? c(order[i + 1][0], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, , node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
