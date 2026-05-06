import { TerminalSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090c] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <TerminalSquare className="text-indigo-300" size={26} />
            <span className="text-2xl font-black tracking-tight text-indigo-200">
              NEON_PORTFOLIO
            </span>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            © 2026 Digital Craft. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-bold text-white/60">
          <a href="#" className="transition hover:text-indigo-300">
            GitHub
          </a>
          <a href="#" className="transition hover:text-indigo-300">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-indigo-300">
            Twitter
          </a>
          <a href="#" className="transition hover:text-indigo-300">
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}