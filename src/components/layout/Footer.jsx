import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-sky-light px-6 py-8 text-center">
      <a
        href="#hero"
        aria-label="Back to top"
        className="ink-outline mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full
          bg-cloud text-ink transition-transform duration-200 hover:-translate-y-1"
      >
        <ArrowUp size={18} />
      </a>
      <p className="font-body text-sm font-medium text-ink">
        Copyright © 2026 - All rights reserved by Gowtham
      </p>
    </footer>
  );
}