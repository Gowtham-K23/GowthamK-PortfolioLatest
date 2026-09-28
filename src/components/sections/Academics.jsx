import academics from "../../data/academics";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";

export default function Academics() {
  return (
    <section id="academics" className="relative isolate overflow-hidden px-6 py-20 sm:px-10 md:py-28">
      <SideDecor variant="academics" />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Where I learned about life
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Academic Details
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-10 sm:pl-12">
          {/* Vertical timeline spine */}
          <div className="absolute top-2 bottom-2 left-[15px] w-[3px] rounded-full bg-ink sm:left-[19px]" />

          <ol className="flex flex-col gap-12">
            {academics.map((item, i) => (
              <Reveal key={item.level} as="li" delay={i * 130} className="relative">
                {/* Timeline node */}
                <span
                  className="ink-outline absolute top-1 -left-10 flex h-8 w-8 items-center
                    justify-center rounded-full bg-sky-light sm:-left-12 sm:h-9 sm:w-9"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-deep" />
                </span>

                {/* Card */}
                <div
                  className="ink-outline rounded-2xl bg-cloud p-5 transition-transform duration-200
                    hover:-translate-y-1 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-base font-extrabold text-sky-deep sm:text-lg">
                      {item.level}
                    </span>
                    <span className="rounded-full bg-sky-pale px-3 py-1 font-body text-xs font-semibold text-ink">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold text-ink sm:text-xl">
                    {item.institution}
                  </h3>

                  {item.detail && (
                    <p className="mt-1 font-body text-sm text-ink/80 sm:text-[15px]">
                      {item.detail}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-body text-sm">
                    <span className="text-ink/60">{item.location}</span>
                    <span className="font-semibold text-ink">{item.score}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}