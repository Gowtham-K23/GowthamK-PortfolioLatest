import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import resume from "../../assets/Resume/Updated Resume.pdf";

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = resume; // drop your resume into /public as resume.pdf

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-40
        ${scrolled ? "shadow-[0_4px_0_var(--color-ink)]" : "shadow-none"}`}
    >
      <nav className="flex items-center justify-between bg-sky-light/95 px-5 py-6 backdrop-blur-sm sm:px-10">
        {/* Left: name */}
        <a
          href="#hero"
          className="ink-outline inline-flex items-center rounded-full bg-cloud px-4 py-1.5
            font-display text-lg font-extrabold text-ink transition-transform duration-200
            hover:-translate-y-0.5 hover:-rotate-1"
          style={{ animation: "pop-in 0.6s var(--ease-bounce)" }}
        >
          Gowtham
        </a>

        {/* Right: desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm font-semibold text-ink"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-sky-deep
                  transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          ))}

          <a
            href={RESUME_URL}
            download
            className="ink-outline rounded-full bg-sky-deep px-5 py-2 font-display text-sm
              font-bold text-cloud transition-transform duration-200 hover:-translate-y-0.5
              active:translate-y-0"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="ink-outline rounded-full bg-cloud p-2 text-ink md:hidden"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile slide-in panel */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 md:hidden
          ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 flex h-full w-72 flex-col gap-6 bg-sky-light
            px-6 py-6 transition-transform duration-300 ease-out
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-extrabold text-ink">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="ink-outline rounded-full bg-cloud p-2 text-ink"
            >
              <X size={20} />
            </button>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-base font-semibold text-ink"
            >
              {link.label}
            </a>
          ))}

          <a
            href={RESUME_URL}
            download
            onClick={() => setMobileOpen(false)}
            className="ink-outline mt-2 rounded-full bg-sky-deep px-5 py-2.5 text-center
              font-display text-sm font-bold text-cloud"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}