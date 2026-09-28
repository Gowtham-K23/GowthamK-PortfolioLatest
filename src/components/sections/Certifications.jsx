import { Award, Brain, Cloud, Coffee, Database, ExternalLink, Leaf, Terminal, TrendingUp } from "lucide-react";
import certifications from "../../data/certifications";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";
import { Burst } from "../ui/Cartoons";

const ICONS = {
  aws: Cloud,
  sql: Database,
  pcap: Terminal,
  java: Coffee,
  ml: Brain,
  pythonDs: TrendingUp,
  mongo: Leaf,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden px-6 py-20 sm:px-10 md:py-28"
    >
      <SideDecor variant="certifications" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Always learning
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Certifications
          </h2>
        </Reveal>

        {/* flex-wrap + justify-center keeps the lone last card centered */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => {
            const Icon = ICONS[cert.id] ?? Award;
            return (
              <Reveal
                key={cert.id}
                delay={(i % 3) * 110}
                className="ink-outline flex w-full flex-col rounded-2xl bg-cloud p-6
                  transition-transform duration-200 hover:-translate-y-1
                  sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Starburst medallion with the topic icon on top */}
                <div className="relative flex h-16 w-16 items-center justify-center text-ink">
                  <div className="absolute inset-0">
                    <Burst />
                  </div>
                  <Icon size={26} className="relative" />
                </div>

                <h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-ink">
                  {cert.title}
                </h3>
                {cert.subtitle && (
                  <p className="mt-1 font-body text-sm font-semibold text-sky-deep">
                    {cert.subtitle}
                  </p>
                )}

                <span className="mt-3 inline-block self-start rounded-full bg-sky-pale px-3 py-1 font-body text-xs font-semibold text-ink">
                  Issued {cert.issued}
                </span>

                <div className="mt-auto pt-5">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-outline inline-flex items-center gap-2 rounded-full bg-sky-light
                      px-4 py-2 font-body text-sm font-semibold text-ink transition-transform
                      duration-200 hover:-translate-y-1 hover:bg-sky-deep hover:text-cloud"
                  >
                    <ExternalLink size={15} />
                    View Certificate
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}