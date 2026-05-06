import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0f] px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[110px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-200">
            <Sparkles size={15} />
            Portfolio CMS
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Building Digital{" "}
            <span className="text-indigo-300 drop-shadow-[0_0_24px_rgba(165,180,252,0.6)]">
              Experiences
            </span>{" "}
            That Feel Alive.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            A premium neon portfolio built with Next.js, TypeScript, Tailwind
            CSS, and Firebase — designed to showcase projects, skills, and
            client-ready case studies through a powerful admin dashboard.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-indigo-300 px-7 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition hover:border-indigo-300/50 hover:text-indigo-200"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-black text-indigo-200">10+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Projects
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-black text-indigo-200">5+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Systems
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-3xl font-black text-indigo-200">24/7</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Build Mode
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-indigo-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111723] p-5 shadow-2xl shadow-indigo-500/10">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs font-bold uppercase tracking-[0.25em] text-white/30">
                dashboard.preview
              </span>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                    Admin Control
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    Portfolio Manager
                  </h3>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-300 text-[#08080c]">
                  <Code2 size={24} />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Create featured project",
                  "Upload cover images",
                  "Publish case studies",
                  "Manage tech stack",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="text-sm font-bold text-white/70">
                      {item}
                    </span>

                    <span className="rounded-full bg-indigo-300/10 px-3 py-1 text-xs font-black text-indigo-200">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-indigo-300/20 bg-indigo-300/10 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
                    Build Progress
                  </span>
                  <span className="text-xs font-black text-indigo-200">
                    87%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[87%] rounded-full bg-indigo-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}