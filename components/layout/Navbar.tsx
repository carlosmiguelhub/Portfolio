import Link from "next/link";
import { Code2 } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#09090c]/75 px-6 py-4 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300 transition group-hover:bg-indigo-300 group-hover:text-[#08080c]">
            <Code2 size={22} />
          </div>

          <div className="leading-none">
            <p className="text-base font-black tracking-tight text-indigo-100 md:text-lg">
              Carlos Miguel
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              Web Developer
            </p>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-bold text-white/60 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2 transition hover:bg-indigo-300/10 hover:text-indigo-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-indigo-300/30 bg-indigo-300/10 px-5 py-3 text-sm font-black text-indigo-200 transition hover:bg-indigo-300 hover:text-[#08080c] sm:inline-flex"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
}