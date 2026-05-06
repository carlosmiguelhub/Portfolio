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
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
              Projects
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Project{" "}
              <span className="text-indigo-300 drop-shadow-[0_0_18px_rgba(165,180,252,0.45)]">
                Gallery.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              A collection of web systems, admin dashboards, portfolio builds,
              and client-ready digital products.
            </p>
          </div>

          {isLoading ? (
            <div className="rounded-[2rem] border border-white/10 bg-[#111723] p-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-300">
                Loading Projects...
              </p>
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-[#111723] p-10 text-center">
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