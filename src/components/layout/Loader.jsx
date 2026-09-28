import { useEffect, useState } from "react";

const BOOT_LINES = [
  "$ initializing gowtham.dev",
  "> loading fullstack modules ... done",
  "> connecting cloud integrations ... done",
  "> spinning up generative-ai engine ... done",
  "> compiling portfolio ... done",
  "$ ready ✓",
];

/**
 * Full-screen loading gate styled as a booting terminal.
 * Types BOOT_LINES out one character at a time, then calls onFinish().
 */
export default function Loader({ onFinish }) {
  const [displayLines, setDisplayLines] = useState(Array(BOOT_LINES.length).fill(""));
  const [activeLine, setActiveLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function bootUp() {
      for (let i = 0; i < BOOT_LINES.length; i++) {
        if (cancelled) return;
        setActiveLine(i);
        const line = BOOT_LINES[i];

        for (let c = 0; c <= line.length; c++) {
          if (cancelled) return;
          setDisplayLines((prev) => {
            const next = [...prev];
            next[i] = line.slice(0, c);
            return next;
          });
          await sleep(14);
        }

        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        await sleep(230);
      }

      if (cancelled) return;
      setActiveLine(-1); // stop the cursor once boot text is done
      await sleep(450);
      setIsLeaving(true);
      await sleep(500);
      if (!cancelled) onFinish?.();
    }

    bootUp();
    return () => {
      cancelled = true;
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden
        bg-sky px-4 transition-opacity duration-500
        ${isLeaving ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Ambient drifting clouds — quiet background, not the focal motion */}
      <svg
        className="absolute top-[14%] left-0 w-[55%] max-w-sm opacity-70"
        style={{ animation: "drift 9s ease-in-out infinite" }}
        viewBox="0 0 200 90"
        fill="none"
      >
        <g stroke="var(--color-ink)" strokeWidth="3" strokeLinejoin="round">
          <ellipse cx="60" cy="55" rx="50" ry="28" fill="var(--color-cloud)" />
          <ellipse cx="105" cy="40" rx="35" ry="24" fill="var(--color-cloud)" />
        </g>
      </svg>
      <svg
        className="absolute bottom-[16%] right-0 w-[40%] max-w-xs opacity-60"
        style={{ animation: "drift 11s ease-in-out infinite reverse" }}
        viewBox="0 0 200 90"
        fill="none"
      >
        <g stroke="var(--color-ink)" strokeWidth="3" strokeLinejoin="round">
          <ellipse cx="70" cy="50" rx="45" ry="25" fill="var(--color-sky-light)" />
        </g>
      </svg>

      {/* Terminal window */}
      <div className="ink-outline z-10 w-full max-w-lg overflow-hidden rounded-xl bg-ink">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b-2 border-cloud/10 bg-ink px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-sky-light" />
          <span className="h-3 w-3 rounded-full bg-sky" />
          <span className="h-3 w-3 rounded-full bg-sky-deep" />
          <span className="ml-2 font-mono text-xs text-cloud/50">gowtham@portfolio: ~</span>
        </div>

        {/* Boot text */}
        <div className="min-h-[168px] px-5 py-5 font-mono text-[13px] leading-relaxed text-sky-light sm:text-sm">
          {BOOT_LINES.map((_, i) => (
            <div key={i} className="min-h-[1.4em]">
              {displayLines[i]}
              {activeLine === i && <span className="cursor-blink text-cloud">▌</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar, synced to the boot sequence */}
      <div className="z-10 mt-6 w-full max-w-lg">
        <div className="h-3 w-full overflow-hidden rounded-full bg-cloud ink-outline">
          <div
            className="h-full rounded-full bg-sky-deep transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}