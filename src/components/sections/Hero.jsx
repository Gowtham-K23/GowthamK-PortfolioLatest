import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";
import resume from "../../assets/Resume/Updated Resume.pdf";
import profile from "../../assets/Hero Image/heroImg.png";

const ROLES = ["Full Stack Developer", "Cloud Integration", "Generative AI"];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gowtham-k-b40480264/",
    src: "https://img.icons8.com/ios-filled/100/linkedin.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/Gowtham-K23",
    src: "https://img.icons8.com/material-sharp/96/github.png",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/K_Gowtham/",
    src: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png",
  },
];

const RESUME_URL = resume;

const INTRO =
  "I'm a Full Stack Developer passionate about building scalable web applications and AI-powered solutions, with experience in React, TypeScript, Java, Spring Boot, and MySQL. I enjoy turning ideas into practical, well-engineered products while exploring modern AI technologies such as LLMs, RAG, and agentic systems. I'm focused on creating impactful software that combines strong engineering fundamentals with the possibilities of AI.";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setFade(true);
      }, 250);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen flex-col-reverse items-center justify-center gap-12
        overflow-hidden px-6 pt-28 pb-16 sm:px-10 md:flex-row md:gap-16 md:pt-24"
    >
      <SideDecor variant="hero" />

      {/* Text column */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <Reveal delay={0}>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Hey, I'm
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            Gowtham K
          </h1>
        </Reveal>

        {/* Cycling role */}
        <Reveal delay={180}>
          <div className="mt-3 h-9">
            <span
              className={`ink-outline inline-block rounded-full bg-sky-light px-4 py-1
                font-display text-base font-bold text-ink transition-all duration-250
                sm:text-lg ${
                  fade
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
            >
              {ROLES[roleIndex]}
            </span>
          </div>
        </Reveal>

        <Reveal delay={270}>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/80 sm:text-[17px]">
            {INTRO}
          </p>
        </Reveal>

        {/* Socials + resume */}
        <Reveal delay={360}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {SOCIALS.map(({ label, href, src }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="ink-outline flex h-11 w-11 items-center justify-center rounded-full
                  bg-cloud text-ink transition-transform duration-200
                  hover:-translate-y-1 hover:bg-sky-light"
              >
                <img
                  src={src}
                  alt={label}
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}

            <a
              href={RESUME_URL}
              download
              className="ink-outline rounded-full bg-sky-deep px-6 py-2.5 font-display text-sm
                font-bold text-cloud transition-transform duration-200
                hover:-translate-y-1 active:translate-y-0"
            >
              Resume
            </a>
          </div>
        </Reveal>
      </div>

      {/* Photo column */}
      <Reveal delay={150} className="relative z-10 shrink-0">
        <div
          className="ink-outline h-56 w-56 overflow-hidden bg-sky-light sm:h-64 sm:w-64 md:h-72 md:w-72"
          style={{
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            animation: "bob 4s ease-in-out infinite",
          }}
        >
          <img
            src={profile}
            alt="Gowtham K"
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
