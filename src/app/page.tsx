import Link from "next/link";

const howItWorks = {
  jurists: [
    "Create a verified profile with bar or academic credentials.",
    "Publish structured FIRAC content with jurisdictional metadata.",
    "Earn IPN for unlocks, subscriptions, and bounty deliveries."
  ],
  aiTeams: [
    "Browse collections filtered by jurisdiction, topic, or court level.",
    "Pay in IPN for articles, datasets, or premium feeds via IPPAN.",
    "Integrate upcoming APIs and webhooks for live updates."
  ]
};

const juristBenefits = [
  "Monetize deep analysis, case breakdowns, and benchmarks.",
  "HashTimer timestamps preserve authorship provenance on IPPAN.",
  "Peer review + reputation signals highlight trusted expertise.",
  "Build recurring income streams with subscriptions and bounties."
];

const aiBenefits = [
  "Structured datasets ready for fine-tuning and eval pipelines.",
  "Clear licensing with on-chain provenance per submission.",
  "Signals from verified jurists, peer reviewers, and download stats.",
  "Future API endpoints for discovery, retrieval, and automation."
];

const stats = [
  { label: "Structured submissions in pilot", value: "1.2K" },
  { label: "Jurist & scholar applicants", value: "350+" },
  { label: "AI teams on waitlist", value: "80" }
];

export default function HomePage() {
  return (
    <div className="bg-parchment">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 text-white md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-light">InfoLAW.net</p>
            <h1 className="mt-4 font-heading text-4xl leading-tight md:text-5xl">
              Legal reasoning for AI, authored by jurists, paid in IPN.
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              InfoLAW is the structured legal knowledge hub for AI teams and law firms. Publish FIRAC-native analyses and datasets, timestamp them via HashTimer, and settle access in IPN on the IPPAN network.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/for-jurists"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-brand hover:text-white"
              >
                I’m a Jurist / Scholar
              </Link>
              <Link
                href="/for-ai-teams"
                className="rounded-full border border-white/60 px-6 py-3 text-center font-semibold text-white transition hover:border-brand hover:bg-brand"
              >
                I Build AI Legal Tools
              </Link>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur">
                  <p className="text-3xl font-heading">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Structured legal graph</p>
            <h3 className="mt-4 text-2xl font-heading">Facts → Issues → Rules → Analysis → Conclusion</h3>
            <p className="mt-3 text-slate-100">
              Every InfoLAW submission follows an AI-readable schema. Jurists tag jurisdiction, doctrine, and temporal metadata so AI partners can trust provenance and context.
            </p>
            <div className="mt-8 space-y-4">
              {["Jurist authorship hash", "IPPAN settlement", "API-ready output"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand/20 text-brand flex items-center justify-center font-semibold">
                    ✓
                  </div>
                  <p className="text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl text-slate-900">How it works for jurists</h2>
            <ol className="mt-6 space-y-4 text-slate-700">
              {howItWorks.jurists.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-1 h-7 w-7 rounded-full bg-slate-900 text-center text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-slate-900">How it works for AI teams</h2>
            <ol className="mt-6 space-y-4 text-slate-700">
              {howItWorks.aiTeams.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-1 h-7 w-7 rounded-full bg-brand text-center text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="jurists" className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand">Jurists & Scholars</p>
            <h2 className="mt-4 font-heading text-3xl text-slate-900">Turn your legal reasoning into on-chain income.</h2>
            <p className="mt-4 text-slate-600">
              Publish structured essays, case breakdown datasets, and legal argument graphs that AI partners rely on. InfoLAW handles licensing, payments, and provenance while you focus on the craft.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {juristBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 rounded-full bg-brand" />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/for-jurists"
              className="mt-8 inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Explore Jurist Program →
            </Link>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 p-6">
            <p className="text-sm text-slate-500">Coming soon</p>
            <h3 className="mt-2 font-heading text-2xl text-slate-900">Submission workspace preview</h3>
            <p className="mt-4 text-slate-600">
              Draft your FIRAC entries, attach citations, and trigger HashTimer anchoring directly within the dashboard. Configure per-article pricing or subscription bundles and route payouts to your IPN wallet.
            </p>
          </div>
        </div>
      </section>

      <section id="ai-teams" className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-brand-dark p-6 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-light">Pilot partners</p>
            <p className="mt-4 text-lg text-slate-100">
              Research groups, law firm innovation teams, and frontier AI labs collaborate with InfoLAW to source transparent training corpora.
            </p>
            <div className="mt-8 grid gap-4 text-center text-xs uppercase tracking-[0.3em] text-slate-200 sm:grid-cols-3">
              {["CounselAI", "LexNode", "CivicLab"].map((logo) => (
                <div key={logo} className="rounded-xl border border-white/20 px-4 py-5">
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand">AI Legal Teams</p>
            <h2 className="mt-4 font-heading text-3xl text-slate-900">Fuel your AI counsel with curated legal corpora.</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {aiBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 h-4 w-4 rounded-full bg-slate-900" />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/for-ai-teams"
              className="mt-8 inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark"
            >
              See AI Partner Brief →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-slate-900 p-10 text-white">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-light">Powered by IPPAN & IPN</p>
              <h2 className="mt-4 font-heading text-3xl">
                Instant IPN settlements, immutable provenance.
              </h2>
              <p className="mt-4 text-slate-200">
                IPPAN is the high-throughput settlement layer underpinning InfoLAW. Each purchase, subscription, or bounty clears in IPN with negligible fees, while HashTimer anchors authorship hashes for verifiable audit trails.
              </p>
              <p className="mt-4 text-slate-200">
                Upcoming HashTimer integration links every revision to a timestamp, enabling courts or compliance teams to validate provenance in seconds.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 p-6">
              <p className="text-sm text-slate-200">Coming soon</p>
              <h3 className="mt-2 text-2xl font-heading">HashTimer anchoring workflow</h3>
              <p className="mt-4 text-slate-200">
                Authors trigger an on-chain hash after peer review. AI teams receive proofs alongside datasets, creating trusted audit packets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brand">Early access</p>
        <h2 className="mt-4 font-heading text-3xl text-slate-900">Join the waitlist for jurists and AI partners.</h2>
        <p className="mt-4 text-slate-600">
          We’re onboarding a small cohort to shape payout mechanics, schemas, and API priorities. Share your credentials or use case and we’ll follow up with next steps.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Apply as Jurist
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Apply as AI Partner
          </Link>
        </div>
      </section>
    </div>
  );
}
