import { ExternalLink } from "lucide-react";
import publications from "../../data/publications";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";

export default function Publications() {
  return (
    <section id="publications" className="relative isolate overflow-hidden bg-sky-pale px-6 py-20 sm:px-10 md:py-28">
      <SideDecor variant="publications" />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Research
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Publications
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {publications.map((pub, i) => (
            <Reveal
              as="article"
              key={pub.title}
              delay={i * 150}
              className="ink-outline rounded-2xl bg-cloud p-6 transition-transform duration-200
                hover:-translate-y-1 sm:p-8"
            >
              <h3 className="font-display text-lg font-extrabold leading-snug text-ink sm:text-xl">
                {pub.title}
              </h3>
              <p className="mt-1 font-body text-sm text-sky-deep sm:text-[15px]">{pub.venue}</p>

              <ul className="mt-5 flex flex-col gap-3">
                {pub.points.map((point, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-deep" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-outline inline-flex items-center gap-2 rounded-full bg-sky-light
                      px-4 py-2 font-body text-sm font-semibold text-ink transition-transform
                      duration-200 hover:-translate-y-1 hover:bg-sky-deep hover:text-cloud"
                  >
                    <ExternalLink size={15} />
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}