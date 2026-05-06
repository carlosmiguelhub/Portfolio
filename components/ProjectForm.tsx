"use client";

import Image from "next/image";
import {  Upload } from "lucide-react";
import { uploadProjectImage } from "@/lib/firebase/storage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, X } from "lucide-react";
import {
  createProject,
  updateProject,
  type FirebaseProject,
} from "@/lib/firebase/firestore";

type ProjectFormProps = {
  mode: "create" | "edit";
  projectId?: string;
  initialData?: FirebaseProject;
};


const createEmptyForm = (): FirebaseProject => ({
  title: "",
  slug: "",
  category: "",
  year:"2026",
  description: "",
  overview: "",
  tech: [],
  features: [],
  liveUrl: "",
  githubUrl: "",
  coverImage: "",
  featured: false,
  status: "draft",
});

const emptyForm: FirebaseProject = {
  title: "",
  slug: "",
  category: "",
  year: "2026",
  description: "",
  overview: "",
  tech: [],
  features: [],
  liveUrl: "",
  githubUrl: "",
  coverImage: "",
  featured: false,
  status: "draft",
};

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ProjectForm({
  mode,
  projectId,
  initialData,
}: ProjectFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<FirebaseProject>(
    initialData ?? emptyForm
  );

  const [techInput, setTechInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [form, setForm] = useState<FirebaseProject>(() => createEmptyForm());

  function updateField<K extends keyof FirebaseProject>(
    field: K,
    value: FirebaseProject[K]
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleTitleChange(value: string) {
    setFormData((current) => ({
      ...current,
      title: value,
      slug: current.slug ? current.slug : createSlug(value),
    }));
  }

  function addTech() {
    const value = techInput.trim();

    if (!value) return;
    if (formData.tech.includes(value)) return;

    updateField("tech", [...formData.tech, value]);
    setTechInput("");
  }

  function removeTech(value: string) {
    updateField(
      "tech",
      formData.tech.filter((item) => item !== value)
    );
  }

  function addFeature() {
    const value = featureInput.trim();

    if (!value) return;
    if (formData.features.includes(value)) return;

    updateField("features", [...formData.features, value]);
    setFeatureInput("");
  }

  function removeFeature(value: string) {
    updateField(
      "features",
      formData.features.filter((item) => item !== value)
    );
  }


  async function handleCoverImageUpload(file?: File) {
  if (!file) return;

  try {
    setIsUploadingImage(true);

    const imageUrl = await uploadProjectImage(file);
    updateField("coverImage", imageUrl);
  } catch (error) {
    console.error(error);
    alert("Failed to upload image.");
  } finally {
    setIsUploadingImage(false);
  }
}

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsSaving(true);

      const cleanData: FirebaseProject = {
        ...formData,
        slug: createSlug(formData.slug || formData.title),
        tech: formData.tech.filter(Boolean),
        features: formData.features.filter(Boolean),
      };

      if (mode === "create") {
        await createProject(cleanData);
      } else {
        if (!projectId) {
          throw new Error("Missing project ID.");
        }

        await updateProject(projectId, cleanData);
      }

      router.push("/admin/projects");
    } catch (error) {
      console.error(error);
      alert("Failed to save project.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">

        <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20">
  <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
    Cover Image
  </p>

  <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
    <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-black to-purple-500/20">
      {formData.coverImage ? (
        <Image
          src={formData.coverImage}
          alt={formData.title || "Project cover image"}
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center p-6 text-center">
          <div>
            <Upload className="mx-auto mb-4 text-indigo-300" size={34} />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
              No Cover Image
            </p>
          </div>
        </div>
      )}
    </div>

    <div className="flex flex-col justify-center">
      <label className="mb-2 block text-sm font-bold text-white/70">
        Upload Project Cover
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(event) => handleCoverImageUpload(event.target.files?.[0])}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white file:mr-4 file:rounded-xl file:border-0 file:bg-indigo-300 file:px-4 file:py-2 file:text-sm file:font-black file:text-[#08080c] hover:file:bg-white"
      />

      <p className="mt-4 text-sm leading-7 text-white/45">
        Upload a screenshot or mockup for this project. This image will appear
        on the public projects page and the project details page.
      </p>

      {isUploadingImage && (
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-indigo-300">
          Uploading image...
        </p>
      )}

      {formData.coverImage && (
        <button
          type="button"
          onClick={() => updateField("coverImage", "")}
          className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-3 text-sm font-black text-red-200 transition hover:bg-red-400 hover:text-white"
        >
          Remove Image
        </button>
      )}
    </div>
  </div>
</section>

      <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
          Basic Details
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Project Title
            </label>
            <input
              value={formData.title}
              onChange={(event) => handleTitleChange(event.target.value)}
              placeholder="CyberCompile"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Slug
            </label>
            <input
              value={formData.slug}
              onChange={(event) =>
                updateField("slug", createSlug(event.target.value))
              }
              placeholder="cybercompile"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Category
            </label>
            <input
              value={formData.category}
              onChange={(event) => updateField("category", event.target.value)}
              placeholder="Compiler Platform"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Year
            </label>
            <input
              value={formData.year}
              onChange={(event) => updateField("year", event.target.value)}
              placeholder="2026"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Live URL
            </label>
            <input
              value={formData.liveUrl}
              onChange={(event) => updateField("liveUrl", event.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              GitHub URL
            </label>
            <input
              value={formData.githubUrl}
              onChange={(event) => updateField("githubUrl", event.target.value)}
              placeholder="https://github.com/username/project"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
            />
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
          Content
        </p>

        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Short Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(event) =>
                updateField("description", event.target.value)
              }
              placeholder="Short project summary..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Full Overview
            </label>
            <textarea
              rows={6}
              value={formData.overview}
              onChange={(event) => updateField("overview", event.target.value)}
              placeholder="Full case study overview..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
              required
            />
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
          Tech Stack
        </p>

        <div className="flex flex-col gap-3 md:flex-row">
          <input
            value={techInput}
            onChange={(event) => setTechInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addTech();
              }
            }}
            placeholder="Next.js"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
          />

          <button
            type="button"
            onClick={addTech}
            className="rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
          >
            Add
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {formData.tech.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => removeTech(item)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/55 transition hover:border-red-400/40 hover:text-red-200"
            >
              {item}
              <X size={14} />
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
          Features
        </p>

        <div className="flex flex-col gap-3 md:flex-row">
          <input
            value={featureInput}
            onChange={(event) => setFeatureInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addFeature();
              }
            }}
            placeholder="Modern code editor interface"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-indigo-300/60"
          />

          <button
            type="button"
            onClick={addFeature}
            className="rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white"
          >
            Add
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          {formData.features.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => removeFeature(item)}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm font-bold text-white/65 transition hover:border-red-400/40 hover:text-red-200"
            >
              <span>
                0{index + 1}. {item}
              </span>
              <X size={16} />
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-xl shadow-black/20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
          Publishing
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-white/70">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(event) =>
                updateField(
                  "status",
                  event.target.value as FirebaseProject["status"]
                )
              }
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none focus:border-indigo-300/60"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
            <span>
              <span className="block text-sm font-bold text-white/70">
                Featured Project
              </span>
              <span className="mt-1 block text-xs text-white/35">
                Show this project on highlighted sections.
              </span>
            </span>

            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(event) => updateField("featured", event.target.checked)}
              className="size-5 accent-indigo-300"
            />
          </label>
        </div>
      </section>

      <div className="flex flex-col gap-3 md:flex-row md:justify-end">
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-black text-white/60 transition hover:border-white/25 hover:text-white"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSaving}
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={18} />
          {isSaving ? "Saving..." : mode === "create" ? "Create Project" : "Save Changes"}
        </button>
      </div>
    </form>
  );
}