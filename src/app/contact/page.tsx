export const metadata = {
  title: "Contact InfoLAW – Early Access"
};

const roles = [
  { value: "jurist", label: "Jurist / Scholar" },
  { value: "ai-team", label: "AI Team / Legaltech" },
  { value: "institution", label: "Institution / Law Firm" }
];

export default function ContactPage() {
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brand">Early access</p>
        <h1 className="mt-4 font-heading text-4xl text-slate-900">Apply to the InfoLAW pilot.</h1>
        <p className="mt-6 text-lg text-slate-700">
          We’re onboarding a small group of jurists, scholars, and AI partners. Share your background and goals—our team will follow up with onboarding materials and wallet requirements.
        </p>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <form className="space-y-6" action="#" method="post">
            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Jurist"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@firm.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-800" htmlFor="message">
                Tell us about your work
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Preferred jurisdictions, content focus, or AI use cases..."
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-brand focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
