"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("opening");

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") || "").toString();
    const email = (data.get("email") || "").toString();
    const role = (data.get("role") || "").toString();
    const message = (data.get("message") || "").toString();

    const subject = encodeURIComponent("InfoLAW – Early access request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${message}`
    );

    // Replace with the real address where you want to receive requests
    const to = "avv.ugogiuliani@gmail.com";

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <main className="bg-white">
      <section className="section py-12 lg:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Request early access
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We&apos;re onboarding a small cohort of jurists, law firms and AI teams to shape schemas, payouts and API access. Share a few details and we&apos;ll follow up by email.
          </p>
        </div>

        <div className="mt-8 max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="card-surface space-y-6 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-800"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-800"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="role"
                className="text-sm font-medium text-slate-800"
              >
                I am…
              </label>
              <select
                id="role"
                name="role"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
              >
                <option>Jurist / lawyer / scholar</option>
                <option>Law firm / in-house team</option>
                <option>AI / legaltech builder</option>
                <option>University / research group</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-800"
              >
                How do you want to use InfoLAW?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                placeholder="Briefly describe your jurisdiction(s), use cases, and how you’d like to contribute or integrate InfoLAW."
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "opening"}
                className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "opening"
                  ? "Opening your email app…"
                  : "Send via email"}
              </button>
              <p className="max-w-xs text-xs text-slate-500">
                This will open your default email application with a pre-filled message addressed to InfoLAW.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
