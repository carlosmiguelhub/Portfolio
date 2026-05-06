"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Edit,
  FolderKanban,
  Loader2,
  Plus,
  Trash2,
} from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import {
  deleteProject,
  getAllProjects,
  type FirebaseProject,
} from "@/lib/firebase/firestore";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<FirebaseProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteLoadingId, setDeleteLoadingId] = useState("");

  async function loadProjects() {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteProject(id?: string) {
    if (!id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      setDeleteLoadingId(id);
      await deleteProject(id);
      setProjects((currentProjects) =>
        currentProjects.filter((project) => project.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete project.");
    } finally {
      setDeleteLoadingId("");
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <AdminSidebar />

      <section className="px-6 py-8 lg:ml-72 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-5 rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-2xl shadow-black/30 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
              Admin / Projects
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Project Manager.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
              Add, edit, publish, draft, or delete portfolio projects from your
              Firebase database.
            </p>
          </div>

          <Link
            href="/admin/projects/new"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
          >
            <Plus size={18} />
            Add Project
          </Link>
        </div>

        {isLoading ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] border border-white/10 bg-[#111723]">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-indigo-300">
              <Loader2 className="animate-spin" size={20} />
              Loading Projects
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="rounded-[2rem] border border-white/10 bg-[#111723] p-10 text-center shadow-xl shadow-black/20">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-3xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
              <FolderKanban size={30} />
            </div>

            <h2 className="text-3xl font-black">No projects yet.</h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
              Start by creating your first portfolio project. Once saved, it
              will appear here and later on the public projects page.
            </p>

            <Link
              href="/admin/projects/new"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
            >
              <Plus size={18} />
              Create First Project
            </Link>
          </div>
        ) : (
          <div className="grid gap-5">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-[2rem] border border-white/10 bg-[#111723] p-6 shadow-xl shadow-black/20"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex gap-5">
                    <div className="hidden h-28 w-36 shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-black to-purple-500/20 md:block" />

                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">
                          {project.category}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                            project.status === "published"
                              ? "border border-green-400/20 bg-green-400/10 text-green-200"
                              : "border border-yellow-400/20 bg-yellow-400/10 text-yellow-200"
                          }`}
                        >
                          {project.status}
                        </span>

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                          {project.year}
                        </span>
                      </div>

                      <h2 className="text-2xl font-black tracking-tight">
                        {project.title}
                      </h2>

                      <p className="mt-2 max-w-3xl text-sm leading-7 text-white/50">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech?.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/45"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    {project.slug && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-black text-white/60 transition hover:border-indigo-300/40 hover:text-indigo-200"
                      >
                        View
                        <ArrowUpRight size={16} />
                      </Link>
                    )}

                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-300/20 bg-indigo-300/10 px-4 py-3 text-sm font-black text-indigo-200 transition hover:bg-indigo-300 hover:text-[#08080c]"
                    >
                      Edit
                      <Edit size={16} />
                    </Link>

                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      disabled={deleteLoadingId === project.id}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-black text-red-200 transition hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {deleteLoadingId === project.id ? "Deleting..." : "Delete"}
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}