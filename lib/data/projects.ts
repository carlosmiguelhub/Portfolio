export type Project = {
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
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "CyberCompile",
    slug: "cybercompile",
    category: "Compiler Platform",
    year: "2026",
    description:
      "A modern online compiler platform with code execution, clean UI, and developer-focused features.",
    overview:
      "CyberCompile is designed as a clean developer platform where users can write, run, and test code through a modern web interface. The system focuses on fast interaction, readable layouts, and future-ready compiler features.",
    tech: ["Next.js", "TypeScript", "Firebase", "Judge0", "Tailwind CSS"],
    features: [
      "Modern code editor interface",
      "Code execution system",
      "Firebase-powered data layer",
      "Responsive dashboard layout",
      "Future-ready compiler expansion",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Attendance Management System",
    slug: "attendance-management-system",
    category: "Admin System",
    year: "2025",
    description:
      "A full attendance system with time logs, filters, overtime, total hours, TA, and admin controls.",
    overview:
      "This system helps manage employee attendance through time logs, date filtering, admin controls, and automatic calculations for total hours, overtime, and TA values.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Employee attendance logs",
      "Admin filtering by store",
      "Total hours calculation",
      "Overtime and TA tracking",
      "Reusable PHP helper functions",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Portfolio CMS",
    slug: "portfolio-cms",
    category: "Portfolio System",
    year: "2026",
    description:
      "A premium neon portfolio with an admin controller for projects, skills, content, and client messages.",
    overview:
      "Portfolio CMS is a full portfolio system with a public showcase and an admin controller. The goal is to let the owner manage projects, skills, case studies, and contact messages without editing code.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    features: [
      "Public portfolio website",
      "Admin project manager",
      "Firebase authentication",
      "Firestore project database",
      "Firebase Storage image uploads",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Client Dashboard",
    slug: "client-dashboard",
    category: "Dashboard UI",
    year: "2026",
    description:
      "A modern dashboard concept with cards, analytics, responsive layouts, and admin-ready components.",
    overview:
      "Client Dashboard is a polished interface concept for displaying analytics, user activity, project status, and management controls in a clean admin layout.",
    tech: ["React", "Tailwind CSS", "Firebase", "Charts"],
    features: [
      "Analytics card layout",
      "Responsive dashboard grid",
      "Modern sidebar navigation",
      "Reusable UI components",
      "Admin-friendly interface structure",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];