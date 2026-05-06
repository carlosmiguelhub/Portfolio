import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CyberCompile",
    category: "Compiler Platform",
    year: "2026",
    description:
      "A modern online compiler platform built with Next.js, Firebase, and Judge0 CE API.",
    tech: ["Next.js", "TypeScript", "Firebase", "Judge0"],
  },
  {
    title: "Attendance Management System",
    category: "Admin System",
    year: "2025",
    description:
      "A full attendance system with time logs, filters, overtime, total hours, and admin controls.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    title: "Portfolio CMS",
    category: "Web Application",
    year: "2026",
    description:
      "A neon portfolio website with an admin controller for managing projects, skills, and content.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="border-t border-white/10 bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
              Selected Work
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Project{" "}
              <span className="text-indigo-300 drop-shadow-[0_0_18px_rgba(165,180,252,0.45)]">
                Gallery
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
            A curated collection of systems, interfaces, and digital products
            crafted with precision, performance, and strong visual direction.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111723] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-indigo-300/50 hover:shadow-indigo-500/10"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/10 bg-gradient-to-br from-indigo-500/20 via-black to-purple-500/20">
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-black/50 p-5">
                  <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/40">
                    <span>Preview</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-24 rounded-full bg-indigo-300/60" />
                    <div className="h-8 w-44 rounded-lg bg-white/15" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-3/4 rounded-full bg-white/10" />
                  </div>

                  <div className="absolute bottom-5 right-5 size-20 rounded-2xl border border-indigo-300/40 bg-indigo-400/10 blur-[1px]" />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mb-2 text-sm font-bold text-indigo-300">
                  {project.category} / {project.year}
                </p>

                <h3 className="mb-3 text-2xl font-black tracking-tight">
                  {project.title}
                </h3>

                <p className="mb-7 text-sm leading-7 text-white/55">
                  {project.description}
                </p>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-300 px-5 py-4 text-sm font-black text-[#08080c] transition hover:bg-white">
                  View Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}