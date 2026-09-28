import { memo, useEffect, useRef, useState } from "react";
import {
  Cloud,
  Sparkle,
  Burst,
  Bubble,
  Gear,
  PaperPlane,
  Book,
  Bulb,
} from "./Cartoons";

/**
 * Cartoon decorations for the empty left/right gutters of a section.
 *
 * Usage: give the section `relative isolate overflow-hidden`, then drop
 *   <SideDecor variant="skills" />
 * in as its first child. It sits behind the content (-z-10) and never
 * blocks clicks.
 *
 * Item fields
 *   d      which doodle (see REGISTRY)
 *   s      side: "l" | "r"
 *   x      distance from that side, % of section width
 *   y      distance from the top, % of section height
 *   size   width in vw (clamped so it never gets tiny or huge)
 *   rot    static tilt in degrees
 *   anim   keyframe name: bob | drift | spin-slow | twinkle
 *   dur    animation seconds        delay  animation delay seconds
 *   text   text inside bubble/burst tint  theme color name
 *   m      also show (faded) below the xl breakpoint, where gutters are tight
 */
const REGISTRY = {
  cloud: Cloud,
  sparkle: Sparkle,
  burst: Burst,
  bubble: Bubble,
  gear: Gear,
  plane: PaperPlane,
  book: Book,
  bulb: Bulb,
};

const CONFIG = {
  // Hero already has the tech-chip backdrop, so these sit in the gaps between chips.
  hero: [
    { d: "cloud", s: "l", x: 2, y: 29, size: 8, anim: "drift", dur: 9, m: true },
    { d: "bubble", text: "Hi!", s: "l", x: 3, y: 42, size: 6.5, rot: -8, anim: "bob", dur: 3.6 },
    { d: "burst", text: "!", s: "l", x: 10, y: 66, size: 4.5, anim: "spin-slow", dur: 26 },
    { d: "sparkle", s: "l", x: 3, y: 92, size: 2.4, anim: "twinkle", dur: 2.6, delay: 1 },
    { d: "bubble", text: "</>", s: "r", x: 3, y: 26, size: 6.5, rot: 7, anim: "bob", dur: 4 },
    { d: "cloud", s: "r", x: 2, y: 40, size: 8, tint: "sky-light", anim: "drift", dur: 11, m: true },
    { d: "gear", s: "r", x: 8, y: 66, size: 4.8, anim: "spin-slow", dur: 20 },
    { d: "sparkle", s: "r", x: 4, y: 93, size: 2.6, anim: "twinkle", dur: 2.2, delay: 0.6, m: true },
  ],
  academics: [
    { d: "book", s: "l", x: 5, y: 14, size: 7, rot: -6, anim: "bob", dur: 4 },
    { d: "sparkle", s: "l", x: 9, y: 44, size: 3, anim: "twinkle", dur: 2.4, m: true },
    { d: "cloud", s: "l", x: 3, y: 70, size: 8, anim: "drift", dur: 10, m: true },
    { d: "bulb", s: "r", x: 6, y: 20, size: 4.2, rot: 6, anim: "bob", dur: 3.4 },
    { d: "bubble", text: "Level up!", s: "r", x: 3, y: 50, size: 6.8, rot: -6, anim: "bob", dur: 4.2 },
    { d: "sparkle", s: "r", x: 8, y: 82, size: 2.8, anim: "twinkle", dur: 2.8, delay: 0.5, m: true },
  ],
  skills: [
    { d: "bubble", text: "{ }", s: "l", x: 4, y: 16, size: 6, rot: -7, anim: "bob", dur: 3.8 },
    { d: "gear", s: "l", x: 9, y: 48, size: 4.6, anim: "spin-slow", dur: 22 },
    { d: "sparkle", s: "l", x: 4, y: 80, size: 2.6, anim: "twinkle", dur: 2.5, m: true },
    { d: "bubble", text: "AI", s: "r", x: 4, y: 22, size: 6.2, rot: 8, anim: "bob", dur: 4.4 },
    { d: "sparkle", s: "r", x: 8, y: 52, size: 3.2, anim: "twinkle", dur: 2.3, delay: 0.4, m: true },
    { d: "cloud", s: "r", x: 3, y: 76, size: 8, tint: "sky-light", anim: "drift", dur: 12, m: true },
  ],
  internships: [
    { d: "gear", s: "l", x: 6, y: 9, size: 4.8, anim: "spin-slow", dur: 24 },
    { d: "bubble", text: "Ship it!", s: "l", x: 3, y: 30, size: 6.8, rot: -6, anim: "bob", dur: 4 },
    { d: "cloud", s: "l", x: 2, y: 55, size: 8, anim: "drift", dur: 10, m: true },
    { d: "sparkle", s: "l", x: 9, y: 74, size: 3, anim: "twinkle", dur: 2.4, m: true },
    { d: "burst", text: "!", s: "l", x: 5, y: 89, size: 4.2, anim: "spin-slow", dur: 28 },
    { d: "sparkle", s: "r", x: 6, y: 8, size: 3, anim: "twinkle", dur: 2.6, delay: 0.3, m: true },
    { d: "bubble", text: "Debug…", s: "r", x: 3, y: 28, size: 6.8, rot: 7, anim: "bob", dur: 4.6 },
    { d: "burst", text: "!", s: "r", x: 8, y: 54, size: 4.4, anim: "spin-slow", dur: 30 },
    { d: "cloud", s: "r", x: 2, y: 70, size: 8, tint: "sky-light", anim: "drift", dur: 12, m: true },
    { d: "sparkle", s: "r", x: 5, y: 90, size: 2.6, anim: "twinkle", dur: 2.2, delay: 0.8 },
  ],
  publications: [
    { d: "book", s: "l", x: 5, y: 13, size: 7, rot: -5, anim: "bob", dur: 4.2 },
    { d: "sparkle", s: "l", x: 9, y: 42, size: 3, anim: "twinkle", dur: 2.4, m: true },
    { d: "cloud", s: "l", x: 3, y: 64, size: 8, anim: "drift", dur: 10, m: true },
    { d: "sparkle", s: "l", x: 6, y: 88, size: 2.4, anim: "twinkle", dur: 2.8, delay: 0.7 },
    { d: "bulb", s: "r", x: 6, y: 17, size: 4.2, rot: 6, anim: "bob", dur: 3.6 },
    { d: "bubble", text: "IEEE", s: "r", x: 3, y: 42, size: 6.2, rot: 7, anim: "bob", dur: 4.4 },
    { d: "burst", text: "!", s: "r", x: 8, y: 68, size: 4.2, anim: "spin-slow", dur: 26 },
    { d: "sparkle", s: "r", x: 4, y: 90, size: 2.6, anim: "twinkle", dur: 2.3, m: true },
  ],
  certifications: [
    { d: "bulb", s: "l", x: 6, y: 15, size: 4.2, rot: -6, anim: "bob", dur: 3.6 },
    { d: "sparkle", s: "l", x: 9, y: 42, size: 3, anim: "twinkle", dur: 2.4, m: true },
    { d: "cloud", s: "l", x: 3, y: 63, size: 8, anim: "drift", dur: 10, m: true },
    { d: "sparkle", s: "l", x: 5, y: 88, size: 2.4, anim: "twinkle", dur: 2.8, delay: 0.6 },
    { d: "bubble", text: "Unlocked!", s: "r", x: 3, y: 18, size: 6.8, rot: 7, anim: "bob", dur: 4.4 },
    { d: "burst", text: "+1", s: "r", x: 8, y: 48, size: 4.4, anim: "spin-slow", dur: 28 },
    { d: "cloud", s: "r", x: 2, y: 70, size: 8, tint: "sky-light", anim: "drift", dur: 12, m: true },
    { d: "sparkle", s: "r", x: 5, y: 90, size: 2.6, anim: "twinkle", dur: 2.2, m: true },
  ],
  projects: [
    { d: "gear", s: "l", x: 6, y: 4, size: 4.8, anim: "spin-slow", dur: 24 },
    { d: "bubble", text: "git push", s: "l", x: 3, y: 11, size: 6.8, rot: -6, anim: "bob", dur: 4 },
    { d: "sparkle", s: "l", x: 9, y: 21, size: 3, anim: "twinkle", dur: 2.4, m: true },
    { d: "cloud", s: "l", x: 2, y: 31, size: 8, anim: "drift", dur: 10, m: true },
    { d: "burst", text: "!", s: "l", x: 7, y: 42, size: 4.4, anim: "spin-slow", dur: 28 },
    { d: "bulb", s: "l", x: 6, y: 53, size: 4.2, rot: -5, anim: "bob", dur: 3.6 },
    { d: "bubble", text: "Deploy!", s: "l", x: 3, y: 65, size: 6.8, rot: 6, anim: "bob", dur: 4.4 },
    { d: "sparkle", s: "l", x: 8, y: 77, size: 2.8, anim: "twinkle", dur: 2.7, delay: 0.5, m: true },
    { d: "gear", s: "l", x: 4, y: 88, size: 4.6, anim: "spin-slow", dur: 22 },
    { d: "sparkle", s: "r", x: 6, y: 6, size: 3.2, anim: "twinkle", dur: 2.5, m: true },
    { d: "bubble", text: "</>", s: "r", x: 3, y: 14, size: 6.5, rot: 7, anim: "bob", dur: 4.2 },
    { d: "cloud", s: "r", x: 2, y: 26, size: 8, tint: "sky-light", anim: "drift", dur: 12, m: true },
    { d: "gear", s: "r", x: 8, y: 37, size: 4.8, anim: "spin-slow", dur: 20 },
    { d: "bubble", text: "API", s: "r", x: 4, y: 49, size: 6.2, rot: -8, anim: "bob", dur: 4.6 },
    { d: "sparkle", s: "r", x: 7, y: 60, size: 3, anim: "twinkle", dur: 2.2, delay: 0.4, m: true },
    { d: "burst", text: "+1", s: "r", x: 5, y: 70, size: 4.4, anim: "spin-slow", dur: 30 },
    { d: "cloud", s: "r", x: 3, y: 82, size: 8, anim: "drift", dur: 11, m: true },
    { d: "sparkle", s: "r", x: 6, y: 93, size: 2.6, anim: "twinkle", dur: 2.8, m: true },
  ],
  // Ready for the Contact section: <SideDecor variant="contact" />
  contact: [
    { d: "plane", s: "l", x: 5, y: 16, size: 6.4, rot: -8, anim: "bob", dur: 4 },
    { d: "sparkle", s: "l", x: 9, y: 46, size: 3, anim: "twinkle", dur: 2.4, m: true },
    { d: "cloud", s: "l", x: 3, y: 70, size: 8, anim: "drift", dur: 10, m: true },
    { d: "bubble", text: "Hello!", s: "r", x: 4, y: 20, size: 6.8, rot: 7, anim: "bob", dur: 4.2 },
    { d: "sparkle", s: "r", x: 8, y: 52, size: 3.2, anim: "twinkle", dur: 2.6, delay: 0.5, m: true },
    { d: "burst", text: "!", s: "r", x: 5, y: 76, size: 4.4, anim: "spin-slow", dur: 28 },
  ],
};

/**
 * One doodle. It only animates while it is on (or just about to enter) the
 * screen, so with ~70 doodles on the page only the few in view are ever
 * running — this is what keeps scrolling smooth.
 */
function DecorItem({ item }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Doodle = REGISTRY[item.d];
  const timing = item.anim === "spin-slow" ? "linear" : "ease-in-out";

  return (
    <div
      ref={ref}
      className={item.m ? "absolute opacity-40 xl:opacity-100" : "absolute hidden xl:block"}
      style={{
        top: `${item.y}%`,
        [item.s === "l" ? "left" : "right"]: `${item.x}%`,
        width: `clamp(38px, ${item.size}vw, ${Math.round(item.size * 21)}px)`,
        transform: `rotate(${item.rot ?? 0}deg)`,
      }}
    >
      <div
        className="decor"
        style={{
          animation: `${item.anim} ${item.dur}s ${timing} ${item.delay ?? 0}s infinite`,
          animationPlayState: inView ? "running" : "paused",
        }}
      >
        <Doodle text={item.text} tint={item.tint} />
      </div>
    </div>
  );
}

function SideDecor({ variant }) {
  const items = CONFIG[variant] ?? [];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {items.map((item, i) => (
        <DecorItem key={i} item={item} />
      ))}
    </div>
  );
}

// memo: the Hero's role-text timer re-renders Hero every couple of seconds;
// this stops that from re-rendering all the doodles too.
export default memo(SideDecor);