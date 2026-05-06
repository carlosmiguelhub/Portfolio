import {
  Braces,
  Code2,
  Database,
  FileCode2,
  Flame,
  Layers3,
  Paintbrush,
  Server,
  Triangle,
} from "lucide-react";

const techStack = [
  {
    name: "HTML",
    category: "Structure",
    description:
      "I use HTML to build clean, semantic page structures for websites and web applications.",
    icon: FileCode2,
  },
  {
    name: "CSS",
    category: "Styling",
    description:
      "I use CSS to design layouts, spacing, colors, responsiveness, and visual presentation.",
    icon: Paintbrush,
  },
  {
    name: "JavaScript",
    category: "Interactivity",
    description:
      "I use JavaScript to add dynamic behavior, handle logic, and create interactive user experiences.",
    icon: Braces,
  },
  {
    name: "React",
    category: "Frontend",
    description:
      "I use React to build reusable components and organize frontend interfaces more efficiently.",
    icon: Layers3,
  },
  {
    name: "TypeScript",
    category: "Code Quality",
    description:
      "I use TypeScript to write more reliable code with better structure, typing, and maintainability.",
    icon: Code2,
  },
  {
    name: "Firebase",
    category: "Backend Services",
    description:
      "I use Firebase for authentication, Firestore database, storage, and connecting data to my projects.",
    icon: Flame,
  },
  {
    name: "MySQL",
    category: "Database",
    description:
      "I use MySQL to store, manage, and query structured data for systems and web applications.",
    icon: Database,
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    description:
      "I use Bootstrap for fast responsive layouts, ready-made components, and clean admin interfaces.",
    icon: Triangle,
  },
  {
    name: "Tailwind CSS",
    category: "Utility Styling",
    description:
      "I use Tailwind CSS to create modern, responsive, and custom interfaces directly through utility classes.",
    icon: Server,
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#101014] px-6 py-24 text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 animate-grid-move bg-[linear-gradient(rgba(165,180,252,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(165,180,252,0.07)_1px,transparent_1px)] bg-[size:58px_58px] opacity-45" />

        <div className="absolute left-[-120px] top-16 h-[460px] w-[460px] animate-float rounded-full bg-indigo-500/25 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-10 h-[500px] w-[500px] animate-float-delayed rounded-full bg-purple-500/25 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute left-[12%] top-[24%] h-2.5 w-2.5 animate-ping rounded-full bg-indigo-300/70" />
        <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 animate-ping rounded-full bg-purple-300/60 [animation-delay:1.3s]" />
        <div className="absolute bottom-[22%] left-[42%] h-2 w-2 animate-ping rounded-full bg-cyan-300/60 [animation-delay:2.7s]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#101014]/40 via-[#101014]/60 to-[#101014]/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
              Skills & Tools
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Technologies I{" "}
              <span className="text-indigo-300 drop-shadow-[0_0_18px_rgba(165,180,252,0.45)]">
                Work With
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
            These are the main tools and technologies I use to build responsive
            interfaces, web applications, and database-connected systems.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111723]/85 p-7 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-300/50 hover:bg-[#151b2a]/95 hover:shadow-indigo-500/10"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-indigo-400/0 blur-2xl transition group-hover:bg-indigo-400/15" />

                <div className="relative mb-6 flex items-center justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300 transition duration-300 group-hover:scale-105 group-hover:bg-indigo-300 group-hover:text-[#08080c]">
                    <Icon size={26} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {tool.category}
                  </span>
                </div>

                <h3 className="relative mb-3 text-xl font-black">
                  {tool.name}
                </h3>

                <p className="relative text-sm leading-7 text-white/55">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}