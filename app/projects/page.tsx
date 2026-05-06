"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ProjectCard";
import {
  getPublishedProjects,
  type FirebaseProject,
} from "@/lib/firebase/firestore";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<FirebaseProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getPublishedProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load published projects.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
        {/* Animated background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 animate-grid-move bg-[linear-gradient(rgba(165,180,252,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(165,180,252,0.07)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

          <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 animate-float rounded-full bg-indigo-500/30 blur-[130px]" />
          <div className="absolute bottom-[-120px] right-[-100px] h-[480px] w-[480px] animate-float-delayed rounded-full bg-purple-500/25 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-120px] h-[430px] w-[430px] animate-pulse-slow rounded-full bg-cyan-400/15 blur-[120px]" />

          <div className="absolute left-[12%] top-[24%] h-2.5 w-2.5 animate-ping rounded-full bg-indigo-300/70" />
          <div className="absolute right-[18%] top-[28%] h-2.5 w-2.5 animate-ping rounded-full bg-purple-300/60 [animation-delay:1.4s]" />
          <div className="absolute bottom-[26%] left-[42%] h-2 w-2 animate-ping rounded-full bg-cyan-300/60 [animation-delay:2.8s]" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/30 via-[#0b0b0f]/60 to-[#0b0b0f]/95" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
                Projects
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Project{" "}
                <span className="text-indigo-300 drop-shadow-[0_0_18px_rgba(165,180,252,0.45)]">
                  Gallery.
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              A collection of projects I have built, including web systems,
              dashboards, portfolio builds, and database-connected applications.
            </p>
          </div>

          {isLoading ? (
            <div className="grid gap-7 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-[420px] animate-pulse rounded-[2rem] border border-white/10 bg-[#111723]/80 shadow-xl shadow-black/20 backdrop-blur"
                >
                  <div className="h-56 rounded-t-[2rem] border-b border-white/10 bg-white/[0.04]" />

                  <div className="space-y-4 p-7">
                    <div className="h-4 w-32 rounded-full bg-white/10" />
                    <div className="h-8 w-64 rounded-xl bg-white/10" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-3/4 rounded-full bg-white/10" />
                    <div className="h-12 w-full rounded-xl bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-[#111723]/85 p-10 text-center shadow-xl shadow-black/20 backdrop-blur">
              <h2 className="text-3xl font-black">
                No published projects yet.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                Add projects from the admin dashboard and set their status to
                published.
              </p>
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}