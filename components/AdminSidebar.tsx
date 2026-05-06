"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FolderKanban,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Sparkles,
} from "lucide-react";
import { logoutAdmin } from "@/lib/auth";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Messages",
    href: "/admin/messages",
    icon: MessageSquare,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const router = useRouter();

  async function handleLogout() {
    await logoutAdmin();
    router.push("/admin/login");
  }

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 border-r border-white/10 bg-[#09090c] p-6 text-white lg:block">
      <Link href="/admin" className="mb-10 flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-300 text-[#08080c]">
          <Sparkles size={24} />
        </div>

        <div>
          <p className="text-lg font-black leading-none">Portfolio</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">
            Admin CMS
          </p>
        </div>
      </Link>

      <nav className="space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold text-white/60 transition hover:border-indigo-300/40 hover:bg-indigo-300/10 hover:text-indigo-200"
            >
              <Icon size={19} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-4 text-sm font-black text-red-200 transition hover:bg-red-400 hover:text-white"
      >
        <LogOut size={19} />
        Logout
      </button>
    </aside>
  );
}