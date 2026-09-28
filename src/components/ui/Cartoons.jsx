/**
 * Cartoon / anime-style SVG doodles used by SideDecor.
 * Every shape uses the same ink outline as the cards and only theme colors
 * (cloud / sky-light / sky-deep / sky-pale / ink). Each accepts an optional
 * `tint` (a theme color name, e.g. "sky-light") and, where it fits, `text`.
 */
const INK = "var(--color-ink)";
const fillOf = (tint) => `var(--color-${tint})`;
const LINE = {
  stroke: INK,
  strokeWidth: 4,
  strokeLinejoin: "round",
  strokeLinecap: "round",
};

function Svg({ viewBox, children }) {
  return (
    <svg viewBox={viewBox} fill="none" className="block h-auto w-full">
      {children}
    </svg>
  );
}

/* ---------- Cloud: puffs drawn twice so only the outer edge is outlined ---------- */
function Puffs() {
  return (
    <>
      <ellipse cx="58" cy="62" rx="40" ry="26" />
      <ellipse cx="108" cy="46" rx="36" ry="30" />
      <ellipse cx="148" cy="64" rx="34" ry="24" />
      <rect x="30" y="58" width="140" height="32" rx="16" />
    </>
  );
}

export function Cloud({ tint = "cloud" }) {
  return (
    <Svg viewBox="0 0 200 100">
      <g fill={INK} stroke={INK} strokeWidth="9" strokeLinejoin="round">
        <Puffs />
      </g>
      <g fill={fillOf(tint)}>
        <Puffs />
      </g>
    </Svg>
  );
}

/* ---------- Anime-style four-point sparkle ---------- */
export function Sparkle({ tint = "cloud" }) {
  return (
    <Svg viewBox="0 0 100 100">
      <path
        d="M50 4 C54 34 66 46 96 50 C66 54 54 66 50 96 C46 66 34 54 4 50 C34 46 46 34 50 4 Z"
        fill={fillOf(tint)}
        {...LINE}
      />
    </Svg>
  );
}

/* ---------- Manga impact starburst (optional text inside) ---------- */
const starPoints = (spikes, outer, inner) =>
  Array.from({ length: spikes * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const BURST = starPoints(12, 46, 33);

export function Burst({ text, tint = "sky-light" }) {
  return (
    <Svg viewBox="0 0 100 100">
      <polygon points={BURST} fill={fillOf(tint)} {...LINE} />
      {text && (
        <text
          x="50"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-display"
          fontSize="40"
          fontWeight="800"
          fill={INK}
        >
          {text}
        </text>
      )}
    </Svg>
  );
}

/* ---------- Speech bubble with text ---------- */
export function Bubble({ text = "", tint = "cloud" }) {
  const len = text.length;
  const fontSize = len <= 2 ? 34 : len <= 4 ? 26 : len <= 6 ? 20 : 16;
  return (
    <Svg viewBox="0 0 120 100">
      <path
        d="M30 6 H90 A24 24 0 0 1 114 30 V50 A24 24 0 0 1 90 74 H58 L28 96 L36 74 H30 A24 24 0 0 1 6 50 V30 A24 24 0 0 1 30 6 Z"
        fill={fillOf(tint)}
        {...LINE}
      />
      <text
        x="60"
        y="41"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-display"
        fontSize={fontSize}
        fontWeight="800"
        fill={INK}
      >
        {text}
      </text>
    </Svg>
  );
}

/* ---------- Gear ---------- */
const gearPoints = (teeth, outer, inner) => {
  const step = (Math.PI * 2) / teeth;
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    const base = i * step - Math.PI / 2;
    [
      [inner, -0.28],
      [outer, -0.16],
      [outer, 0.16],
      [inner, 0.28],
    ].forEach(([r, k]) => {
      const a = base + step * k;
      pts.push(`${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`);
    });
  }
  return pts.join(" ");
};

const GEAR = gearPoints(8, 46, 35);

export function Gear({ tint = "sky-light" }) {
  return (
    <Svg viewBox="0 0 100 100">
      <polygon points={GEAR} fill={fillOf(tint)} {...LINE} />
      <circle cx="50" cy="50" r="14" fill="var(--color-sky-pale)" {...LINE} />
    </Svg>
  );
}

/* ---------- Paper plane ---------- */
export function PaperPlane() {
  return (
    <Svg viewBox="0 0 100 100">
      <path d="M6 44 L94 8 L46 58 Z" fill="var(--color-cloud)" {...LINE} />
      <path d="M94 8 L46 58 L62 92 Z" fill="var(--color-sky-light)" {...LINE} />
    </Svg>
  );
}

/* ---------- Open book ---------- */
export function Book() {
  return (
    <Svg viewBox="0 0 120 90">
      <path
        d="M60 18 C46 8 22 8 6 14 L6 76 C22 70 46 70 60 80 Z"
        fill="var(--color-cloud)"
        {...LINE}
      />
      <path
        d="M60 18 C74 8 98 8 114 14 L114 76 C98 70 74 70 60 80 Z"
        fill="var(--color-sky-light)"
        {...LINE}
      />
      <path
        d="M16 28 C26 25 38 26 50 31 M16 42 C26 39 38 40 50 45 M16 56 C26 53 38 54 50 59"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
    </Svg>
  );
}

/* ---------- Light bulb (idea!) ---------- */
export function Bulb() {
  return (
    <Svg viewBox="0 0 100 110">
      <circle cx="50" cy="46" r="28" fill="var(--color-cloud)" {...LINE} />
      <path d="M38 68 L62 68 L60 84 L40 84 Z" fill="var(--color-sky-light)" {...LINE} />
      <rect x="40" y="86" width="20" height="10" rx="4" fill="var(--color-sky-deep)" {...LINE} />
      <path d="M40 50 L50 36 L60 50" {...LINE} strokeWidth="3" />
      <path
        d="M50 14 L50 6 M14 46 L4 46 M86 46 L96 46 M24 20 L17 13 M76 20 L83 13"
        {...LINE}
      />
    </Svg>
  );
}