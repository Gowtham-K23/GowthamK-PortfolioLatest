import { useState } from "react";
import {
  Code2,
  GraduationCap,
  LayoutTemplate,
  Server,
  Database,
  CloudCog,
  Wrench,
  Sparkles,
} from "lucide-react";
import skills from "../../data/skills";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";

const CATEGORY_ICONS = {
  "Programming Languages": Code2,
  "Core CS Subjects": GraduationCap,
  "Frontend Development": LayoutTemplate,
  "Backend Development": Server,
  Databases: Database,
  "Version Control & Cloud Integration": CloudCog,
  "Tools & IDE": Wrench,
  "Generative AI": Sparkles,
};

export default function TechnicalSkills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skills[activeIndex];

  return (
    <section id="skills" className="relative isolate overflow-hidden bg-sky-pale px-6 py-20 sm:px-10 md:py-28">
      <SideDecor variant="skills" />
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            What I work with
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Technical Skills
          </h2>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {skills.map((group, i) => {
              const Icon = CATEGORY_ICONS[group.category];
              const isActive = i === activeIndex;
              return (
                <button
                  key={group.category}
                  onClick={() => setActiveIndex(i)}
                  className={`ink-outline flex items-center gap-2 rounded-full px-4 py-2
                    font-body text-sm font-semibold transition-colors duration-200
                    ${isActive ? "bg-sky-deep text-cloud" : "bg-cloud text-ink hover:bg-sky-light"}`}
                >
                  <Icon size={16} />
                  {group.category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active category's skill grid — remounts (and re-pops in) on every tab switch */}
        <div
          key={active.category}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {active.items.map((skill, i) => (
            <div
              key={skill}
              className="ink-outline flex min-h-[76px] items-center justify-center rounded-xl
                bg-cloud px-3 py-4 text-center font-body text-sm font-semibold text-ink"
              style={{
                animation: "pop-in 0.4s var(--ease-bounce) both",
                animationDelay: `${i * 45}ms`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}