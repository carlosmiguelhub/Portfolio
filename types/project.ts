export type ProjectStatus = "draft" | "published";

export type Project = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  coverImage?: string;
  featured: boolean;
  status: ProjectStatus;
};