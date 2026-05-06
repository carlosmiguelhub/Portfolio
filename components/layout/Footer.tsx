import { Mail, TerminalSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090c] px-6 py-14 text-white">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-[90px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
              <TerminalSquare size={25} />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-tight text-indigo-100 md:text-2xl">
                Carlos Miguel B. Bermejo
              </h2>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                Web Developer
              </p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            Building clean, responsive, and functional web projects with a focus
            on practical design and meaningful user experiences.
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/30">
            © {currentYear} Carlos Miguel B. Bermejo. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
            Connect
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/60 transition hover:border-indigo-300/40 hover:text-indigo-300"
            >
              <span className="text-base">GitHub</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/60 transition hover:border-indigo-300/40 hover:text-indigo-300"
            >
              <span className="text-base">LinkedIn</span>
            </a>

            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/60 transition hover:border-indigo-300/40 hover:text-indigo-300"
            >
              <Mail size={17} />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}