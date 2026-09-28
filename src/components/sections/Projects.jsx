import { Layers, LayoutTemplate, Server } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectGroups from "../../data/projects";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";

const GROUP_ICONS = {
  fullstack: Layers,
  backend: Server,
  frontend: LayoutTemplate,
};

const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden px-6 py-20 sm:px-10 md:py-28"
    >
      <SideDecor variant="projects" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Things I've built
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20">
          {projectGroups.map((group) => {
            const GroupIcon = GROUP_ICONS[group.id];
            return (
              <div key={group.id}>
                {/* Group heading */}
                <Reveal className="flex items-center gap-4">
                  <span className="ink-outline flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-light text-ink">
                    <GroupIcon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-ink">{group.title}</h3>
                    <p className="font-body text-sm text-ink/70">{group.blurb}</p>
                  </div>
                  <div className="ml-2 hidden h-[3px] flex-1 rounded-full bg-ink/15 sm:block" />
                </Reveal>

                {/* flex-wrap + justify-center keeps a lone last card centered */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  {group.projects.map((project, i) => (
                    <Reveal
                      key={project.name}
                      delay={(i % 2) * 120}
                      className="ink-outline flex w-full flex-col overflow-hidden rounded-2xl bg-cloud
                        transition-transform duration-200 hover:-translate-y-1
                        md:w-[calc(50%-12px)]"
                    >
                      {/* Mini terminal-window title bar */}
                      <div className="flex items-center gap-2 border-b-[3px] border-ink bg-sky-light px-4 py-2.5">
                        <span className="h-3 w-3 rounded-full border-2 border-ink bg-cloud" />
                        <span className="h-3 w-3 rounded-full border-2 border-ink bg-sky" />
                        <span className="h-3 w-3 rounded-full border-2 border-ink bg-sky-deep" />
                        <span className="ml-2 truncate font-mono text-xs text-ink/70">
                          ~/{slug(project.name)}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h4 className="font-display text-xl font-extrabold leading-snug text-ink">
                          {project.name}
                        </h4>
                        {project.tagline && (
                          <p className="mt-1 font-body text-sm font-semibold text-sky-deep">
                            {project.tagline}
                          </p>
                        )}

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border-2 border-ink/15 bg-sky-pale px-2.5 py-0.5 font-body text-xs font-medium text-ink"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <ul className="mt-5 flex flex-col gap-3">
                          {project.bullets.map((point, j) => (
                            <li
                              key={j}
                              className="flex gap-3 font-body text-sm leading-relaxed text-ink/80"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-deep" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-6">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ink-outline inline-flex items-center gap-2 rounded-full bg-sky-light
                              px-4 py-2 font-body text-sm font-semibold text-ink transition-transform
                              duration-200 hover:-translate-y-1 hover:bg-sky-deep hover:text-cloud"
                          >
                            <FaGithub size={16} />
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}