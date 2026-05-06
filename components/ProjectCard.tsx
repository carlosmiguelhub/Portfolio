import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FirebaseProject } from "@/lib/firebase/firestore";

type ProjectCardProps = {
  project: FirebaseProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111723] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-indigo-300/50 hover:shadow-indigo-500/10">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-72 overflow-hidden border-b border-white/10 bg-gradient-to-br from-indigo-500/20 via-black to-purple-500/20">
          {project.coverImage ? (
            <>
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-6 rounded-3xl border border-white/10 bg-black/50 p-6">
              <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/40">
                <span>Case Study</span>
                <span>{project.year}</span>
              </div>

              <div className="space-y-4">
                <div className="h-4 w-28 rounded-full bg-indigo-300/60" />
                <div className="h-10 w-64 max-w-full rounded-xl bg-white/15" />
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-4/5 rounded-full bg-white/10" />
                <div className="h-3 w-2/3 rounded-full bg-white/10" />
              </div>

              <div className="absolute bottom-6 right-6 size-24 rounded-3xl border border-indigo-300/40 bg-indigo-400/10 blur-[1px]" />
            </div>
          )}
        </div>

        <div className="p-7">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech?.map((item) => (
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

          <h2 className="mb-3 text-3xl font-black tracking-tight">
            {project.title}
          </h2>

          <p className="mb-7 text-sm leading-7 text-white/55">
            {project.description}
          </p>

          <div className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-300 px-5 py-4 text-sm font-black text-[#08080c] transition group-hover:bg-white">
            View Project
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Link>
    </article>
  );
}