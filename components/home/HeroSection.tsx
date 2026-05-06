import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0f] px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44">
{/* Animated background */}
<div className="pointer-events-none absolute inset-0">
  {/* Moving grid */}
  <div className="absolute inset-0 animate-grid-move bg-[linear-gradient(rgba(165,180,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(165,180,252,0.08)_1px,transparent_1px)] bg-[size:58px_58px] opacity-60" />

  {/* Bigger glow layers */}
  <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 animate-float rounded-full bg-indigo-500/35 blur-[120px]" />
  <div className="absolute right-[-80px] top-32 h-[480px] w-[480px] animate-float-delayed rounded-full bg-purple-500/30 blur-[110px]" />
  <div className="absolute bottom-[-90px] left-[-80px] h-[420px] w-[420px] animate-pulse-slow rounded-full bg-cyan-400/20 blur-[100px]" />

  {/* Soft center shine */}
  <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-[140px]" />

  {/* Visible small particles */}
  <div className="absolute left-[12%] top-[25%] h-2.5 w-2.5 animate-ping rounded-full bg-indigo-300/80" />
  <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 animate-ping rounded-full bg-purple-300/70 [animation-delay:1.5s]" />
  <div className="absolute bottom-[25%] left-[42%] h-2.5 w-2.5 animate-ping rounded-full bg-cyan-300/70 [animation-delay:3s]" />
  <div className="absolute bottom-[38%] right-[42%] h-2 w-2 animate-ping rounded-full bg-indigo-200/70 [animation-delay:2.2s]" />

  {/* Dark overlay so text still readable */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/20 via-[#0b0b0f]/40 to-[#0b0b0f]/80" />
</div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Building ideas into{" "}
            <span className="text-indigo-300 drop-shadow-[0_0_24px_rgba(165,180,252,0.6)]">
              real web projects.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            I create clean, functional, and user-focused web applications using
            modern technologies. This portfolio highlights my projects, skills,
            and the work I have built as I continue growing as a developer.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-indigo-300 px-7 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
            >
              View My Work
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <p className="text-3xl font-black text-indigo-200">2+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Projects
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <p className="text-3xl font-black text-indigo-200">5+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Skills
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <p className="text-3xl font-black text-indigo-200">2+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 animate-pulse-slow rounded-[2.5rem] bg-indigo-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111723] p-5 shadow-2xl shadow-indigo-500/10">
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 md:h-[620px]">
              <Image
                src="/images/formal-picture.jpg"
                alt="Formal portrait"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/70 to-transparent p-7">
                <h3 className="mt-2 text-3xl font-black">
                  Carlos Miguel B. Bermejo
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
                  Web developer focused on building practical, polished, and
                  meaningful digital projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}