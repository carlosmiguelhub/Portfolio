import AdminSidebar from "@/components/AdminSidebar";
import ProjectForm from "@/components/ProjectForm";

export default function NewProjectPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <AdminSidebar />

      <section className="px-6 py-8 lg:ml-72 lg:px-10">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-2xl shadow-black/30">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
            Admin / Projects / New
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Add New Project.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
            Create a new portfolio project and save it directly to Firebase
            Firestore.
          </p>
        </div>

        <ProjectForm mode="create" />
      </section>
    </main>
  );
}