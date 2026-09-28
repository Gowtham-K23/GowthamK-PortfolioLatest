import { Download, Mail, Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import SideDecor from "../ui/SideDecor";
import resume from "../../assets/Resume/Updated Resume.pdf";

const CONTACTS = [
  {
    label: "Phone",
    value: "+91 6380656652",
    href: "tel:+916380656652",
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Message me on WhatsApp",
    href: "https://wa.me/qr/Y2BCVUP4NP4JM1",
    Icon: FaWhatsapp,
    external: true,
  },
  {
    label: "Email",
    value: "gowthamk2394@gmail.com",
    href: "mailto:gowthamk2394@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "gowtham-k-b40480264",
    href: "https://www.linkedin.com/in/gowtham-k-b40480264",
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "Gowtham-K23",
    href: "https://github.com/Gowtham-K23",
    Icon: FaGithub,
    external: true,
  },
  {
    label: "Instagram",
    value: "@gowthamk_23",
    href: "https://www.instagram.com/gowtham007___?stkn=NmttM3V1MmttODF3",
    Icon: FaInstagram,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-sky-pale px-6 py-20 sm:px-10 md:py-28"
    >
      <SideDecor variant="contact" />

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-body text-sm font-semibold uppercase tracking-widest text-sky-deep">
            Say hello
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-body text-base leading-relaxed text-ink/80">
            Have an idea, an opportunity, or just want to say hi? Pick whichever way suits you
            best, I'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTS.map(({ label, value, href, Icon, external }, i) => (
            <Reveal key={label} delay={(i % 3) * 100}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="ink-outline group flex items-center gap-4 rounded-2xl bg-cloud p-4
                  transition-transform duration-200 hover:-translate-y-1 hover:bg-sky-light"
              >
                <span
                  className="flex h-14 w-15 shrink-0 items-center justify-center rounded-full
                    border-[3px] border-ink bg-sky-light text-ink transition-colors duration-200
                    group-hover:bg-cloud"
                >
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block font-body text-xs font-semibold uppercase tracking-widest text-sky-deep">
                    {label}
                  </span>
                  <span className="block break-words font-body text-sm font-semibold text-ink sm:text-[15px]">
                    {value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <a
            href={resume}
            download
            className="ink-outline inline-flex items-center gap-2 rounded-full bg-sky-deep px-7 py-3
              font-display text-base font-bold text-cloud transition-transform duration-200
              hover:-translate-y-1 active:translate-y-0"
          >
            <Download size={18} />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}