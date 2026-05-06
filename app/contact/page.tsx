"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);

    const form = event.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-indigo-300">
              Contact
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Let&apos;s Build Something{" "}
              <span className="text-indigo-300 drop-shadow-[0_0_18px_rgba(165,180,252,0.45)]">
                Together.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Have a project, system, portfolio, admin dashboard, or web idea?
              Send a message and I&apos;ll get back to you.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Email</p>
                  <p className="text-sm text-white/50">
                    your-email@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Location</p>
                  <p className="text-sm text-white/50">Philippines / Remote</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-indigo-300/30 bg-indigo-300/10 text-indigo-300">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Response</p>
                  <p className="text-sm text-white/50">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-[#111723] p-6 shadow-2xl shadow-black/30 md:p-8"
          >
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                Start a Conversation
              </p>
              <h2 className="mt-3 text-3xl font-black">Send Message</h2>
            </div>

            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-indigo-300/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-indigo-300/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Project Type
                </label>
                <select
                  name="project_type"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition focus:border-indigo-300/60"
                >
                  <option>Portfolio Website</option>
                  <option>Admin Dashboard</option>
                  <option>Web Application</option>
                  <option>Landing Page</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-indigo-300/60"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-300 px-6 py-4 text-sm font-black text-[#08080c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}