import internships from "../../data/internships";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";

export default function Internships() {
  return (
    <section id="internships" className="relative isolate overflow-hidden px-6 py-20 sm:px-10 md:py-28">
      <SideDecor variant="internships" />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Where I've worked
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Internships
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8">
          {internships.map((job, i) => (
            <Reveal
              as="article"
              key={job.company}
              delay={i * 150}
              className="ink-outline rounded-2xl bg-cloud p-6 transition-transform duration-200
                hover:-translate-y-1 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 font-body text-sm font-semibold text-sky-deep sm:text-base">
                    {job.role}
                  </p>
                </div>

                <span className="ink-outline shrink-0 rounded-full bg-sky-light px-3 py-1 font-body text-xs font-semibold text-ink sm:text-sm">
                  {job.duration}
                </span>
              </div>

              <ul className="mt-5 flex flex-col gap-3">
                {job.bullets.map((point, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-deep" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}