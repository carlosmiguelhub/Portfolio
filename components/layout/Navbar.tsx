import Link from "next/link";
import { TerminalSquare } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#09090c]/80 px-6 py-5 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <TerminalSquare className="text-indigo-300" size={26} />
          <span className="text-xl font-black tracking-tight text-indigo-200">
            NEON_PORTFOLIO
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-white/60 md:flex">
          <Link href="/" className="transition hover:text-indigo-300">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-indigo-300">
            About
          </Link>
          <Link href="/projects" className="transition hover:text-indigo-300">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-indigo-300">
            Contact
          </Link>
        </nav>

        <Link
          href="/admin/login"
          className="rounded-full border border-indigo-300/30 bg-indigo-300/10 px-5 py-2 text-sm font-black text-indigo-200 transition hover:bg-indigo-300 hover:text-[#08080c]"
        >
          Admin
        </Link>
      </div>
    </header>
  );
}