"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase/config";

type Project = {
  id: string;
  title?: string;
  category?: string;
  year?: string | number;
  description?: string;
  tech?: string[];
  status?: "draft" | "published";

  imageUrl?: string;
  image?: string;
  imageURL?: string;
  image_url?: string;
  thumbnail?: string;
  coverImage?: string;
  projectImage?: string;

  projectUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  url?: string;
  link?: string;
  slug?: string;
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsQuery = query(
          collection(db, "projects"),
          where("status", "==", "published"),
          orderBy("year", "desc"),
          limit(3)
        );

        const snapshot = await getDocs(projectsQuery);

        const projectData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching featured projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0b0b0f] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 animate-grid-move bg-[linear-gradient(rgba(165,180,252,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(165,180,252,0.07)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

        <div className="absolute left-[-120px] top-16 h-[430px] w-[430px] animate-float rounded-full bg-indigo-500/25 blur-[110px]" />
        <div className="absolute right-[-120px] top-32 h-[480px] w-[480px] animate-float-delayed rounded-full bg-purple-500/25 blur-[120px]" />
        <div className="absolute bottom-[-140px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 animate-pulse-slow rounded-full bg-cyan-400/15 blur-[130px]" />

        <div className="absolute left-[14%] top-[28%] h-2.5 w-2.5 animate-ping rounded-full bg-indigo-300/70" />
        <div className="absolute right-[16%] top-[24%] h-2.5 w-2.5 animate-ping rounded-full bg-purple-300/60 [animation-delay:1.4s]" />
        <div className="absolute bottom-[22%] left-[38%] h-2 w-2 animate-ping rounded-full bg-cyan-300/60 [animation-delay:2.8s]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/35 via-[#0b0b0f]/55 to-[#0b0b0f]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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
            A collection of projects I have built, including web systems,
            dashboards, portfolio builds, and database-connected applications.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-7 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[520px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur">
            <p className="text-white/60">No published projects found.</p>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => {
              const projectImage =
                project.coverImage ||
                project.imageUrl ||
                project.image ||
                project.imageURL ||
                project.image_url ||
                project.thumbnail ||
                project.projectImage;

              const projectLink =
                project.slug
                  ? `/projects/${project.slug}`
                  : project.projectUrl ||
                    project.liveUrl ||
                    project.githubUrl ||
                    project.url ||
                    project.link;

              const isExternalLink = projectLink?.startsWith("http");

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111723]/90 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-indigo-300/50 hover:shadow-indigo-500/10"
                >
                  <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[#0b0b0f]">
                    {projectImage ? (
                      <Image
                        src={projectImage}
                        alt={project.title || "Project image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-500/20 via-black to-purple-500/20">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                          No Image
                        </p>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111723] via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur">
                      {project.year || "Project"}
                    </div>
                  </div>

                  <div className="flex min-h-[300px] flex-col p-7">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tech && project.tech.length > 0 ? (
                        project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50"
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/40">
                          No Tech Listed
                        </span>
                      )}
                    </div>

                    <p className="mb-2 text-sm font-bold text-indigo-300">
                      {project.category || "Project"} / {project.year || "Year"}
                    </p>

                    <h3 className="mb-3 text-2xl font-black tracking-tight">
                      {project.title || "Untitled Project"}
                    </h3>

                    <p className="mb-7 text-sm leading-7 text-white/55">
                      {project.description || "No description available yet."}
                    </p>

                    <div className="mt-auto">
                      {projectLink ? (
                        <Link
                          href={projectLink}
                          target={isExternalLink ? "_blank" : undefined}
                          rel={isExternalLink ? "noopener noreferrer" : undefined}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-300 px-5 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
                        >
                          View Project
                          <ArrowUpRight size={18} />
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-4 text-sm font-black text-white/35"
                        >
                          No Link Added
                          <ArrowUpRight size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}