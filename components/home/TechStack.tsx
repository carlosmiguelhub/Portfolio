import {
  Code2,
  Database,
  Flame,
  Layers3,
  Server,
  ShieldCheck,
} from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    description: "Modern React framework for fast, scalable web apps.",
    icon: Layers3,
  },
  {
    name: "TypeScript",
    description: "Strong typing for cleaner and safer application code.",
    icon: Code2,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling for sharp and responsive interfaces.",
    icon: Flame,
  },
  {
    name: "Firebase",
    description: "Authentication, database, storage, and backend services.",
    icon: Database,
  },
  {
    name: "Node.js",
    description: "Backend logic, APIs, and server-side functionality.",
    icon: Server,
  },
  {
    name: "Auth Systems",
    description: "Secure admin access and protected dashboard routes.",
    icon: ShieldCheck,
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#101014] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
            Tech Stack & Tools
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Built With{" "}
            <span className="text-indigo-300 drop-shadow-[0_0_18px_rgba(165,180,252,0.45)]">
              Modern Power
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="rounded-3xl border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20 transition hover:border-indigo-300/40 hover:bg-[#151b2a]"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-black">{tool.name}</h3>

                <p className="text-sm leading-7 text-white/55">
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