import { useEffect, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Wrap any element/list-item in <Reveal> to fade + slide it in once it
 * scrolls into view. Pass delay (ms) to stagger siblings one after another:
 *   {items.map((item, i) => <Reveal key={item.id} delay={i * 90}>...</Reveal>)}
 *
 * The entrance transition is only applied while it's actually animating —
 * once the fade-in finishes, those classes drop off so a hover transition
 * on the same element (from the passed className) isn't fighting a second,
 * slower transition-all left over from the reveal.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, isVisible] = useScrollReveal();
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setAnimating(false), 750);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const revealClasses = animating
    ? `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
    : "";

  return (
    <Tag
      ref={ref}
      className={`${revealClasses} ${className}`}
      style={animating ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}