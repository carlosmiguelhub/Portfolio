"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import {
  getProjectBySlug,
  type FirebaseProject,
} from "@/lib/firebase/firestore";

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug as string;

  const [project, setProject] = useState<FirebaseProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjectBySlug(slug);

        if (!data || data.status !== "published") {
          router.push("/projects");
          return;
        }

        setProject(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load project.");
        router.push("/projects");
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) {
      loadProject();
    }
  }, [slug, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] text-white">
        <Navbar />

        <section className="flex min-h-screen items-center justify-center px-6">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-indigo-300">
            Loading Project...
          </p>
        </section>
      </main>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/50 transition hover:text-indigo-300"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
                {project.category} / {project.year}
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-indigo-300 px-7 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
                  >
                    Live Preview
                    <ExternalLink size={18} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition hover:border-indigo-300/50 hover:text-indigo-200"
                  >
                    GitHub Repo
                    <Code2 size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#111723] p-5 shadow-2xl shadow-black/30">
              <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-black to-purple-500/20">
                {project.coverImage ? (
                  <>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      priority
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-200">
                        Project Preview
                      </p>

                      <h2 className="text-2xl font-black text-white">
                        {project.title}
                      </h2>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-6 rounded-3xl border border-white/10 bg-black/50 p-6">
                    <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/40">
                      <span>Project Preview</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="space-y-4">
                      <div className="h-4 w-28 rounded-full bg-indigo-300/60" />
                      <div className="h-12 w-72 max-w-full rounded-xl bg-white/15" />
                      <div className="h-3 w-full rounded-full bg-white/10" />
                      <div className="h-3 w-4/5 rounded-full bg-white/10" />
                      <div className="h-3 w-2/3 rounded-full bg-white/10" />
                    </div>

                    <div className="absolute bottom-6 right-6 size-32 rounded-3xl border border-indigo-300/40 bg-indigo-400/10 blur-[1px]" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                Overview
              </p>

              <h2 className="mb-5 text-3xl font-black">Project Summary</h2>

              <p className="text-sm leading-8 text-white/60">
                {project.overview}
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                Features
              </p>

              <h2 className="mb-5 text-3xl font-black">Core Functions</h2>

              <div className="space-y-3">
                {project.features?.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="text-sm font-bold text-white/70">
                      {feature}
                    </span>

                    <span className="rounded-full bg-indigo-300/10 px-3 py-1 text-xs font-black text-indigo-200">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}