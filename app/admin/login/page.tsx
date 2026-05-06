"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { loginAdmin } from "@/lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    try {
      await loginAdmin(email, password);
      router.push("/admin");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid admin email or password.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-6 py-24 text-white">
      <section className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center justify-center overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[110px]" />

        <form
          onSubmit={handleLogin}
          className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-[#111723] p-7 shadow-2xl shadow-black/40 md:p-9"
        >
          <div className="mb-8">
            <div className="mb-6 flex size-16 items-center justify-center rounded-3xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
              <ShieldCheck size={30} />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
              Admin Access
            </p>

            <h1 className="text-4xl font-black tracking-tight">
              Login Control.
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/50">
              Sign in to manage projects, skills, content, and portfolio
              settings.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-white/70">
                Email
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 transition focus-within:border-indigo-300/60">
                <Mail size={18} className="text-white/35" />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@email.com"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-white/70">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 transition focus-within:border-indigo-300/60">
                <Lock size={18} className="text-white/35" />

                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"
                  required
                />
              </div>
            </div>

            {errorMessage && (
              <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-bold text-red-200">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Signing in..." : "Login to Admin"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}