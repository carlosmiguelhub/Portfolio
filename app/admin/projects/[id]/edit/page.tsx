"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import ProjectForm from "@/components/ProjectForm";
import {
  getProjectById,
  type FirebaseProject,
} from "@/lib/firebase/firestore";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();

  const projectId = params.id as string;

  const [project, setProject] = useState<FirebaseProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjectById(projectId);

        if (!data) {
          router.push("/admin/projects");
          return;
        }

        setProject(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load project.");
        router.push("/admin/projects");
      } finally {
        setIsLoading(false);
      }
    }

    if (projectId) {
      loadProject();
    }
  }, [projectId, router]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] text-white">
        <AdminSidebar />

        <section className="flex min-h-screen items-center justify-center px-6 lg:ml-72">
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
      <AdminSidebar />

      <section className="px-6 py-8 lg:ml-72 lg:px-10">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-2xl shadow-black/30">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
            Admin / Projects / Edit
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Edit Project.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
            Update project details, tech stack, features, status, and publishing
            settings.
          </p>
        </div>

        <ProjectForm mode="edit" projectId={projectId} initialData={project} />
      </section>
    </main>
  );
}