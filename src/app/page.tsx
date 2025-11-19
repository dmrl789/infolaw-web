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
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="section grid gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              InfoLAW.net
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Legal reasoning for AI, authored by jurists, paid in IPN.
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              InfoLAW is the structured legal knowledge hub for AI teams and law firms. Publish FIRAC-native analyses and datasets,
              timestamp them via HashTimer, and settle access in IPN on the IPPAN network.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/for-jurists"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                I’m a Jurist / Scholar
              </Link>
              <Link
                href="/for-ai-teams"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-900"
              >
                I Build AI Legal Tools
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card-surface p-4">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Structured legal graph
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              Facts → Issues → Rules → Analysis → Conclusion
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Every InfoLAW submission follows an AI-readable schema. Jurists tag jurisdiction, doctrine, and temporal metadata so
              AI partners can trust provenance and context.
            </p>
            <div className="mt-6 space-y-4">
              {["Jurist authorship hash", "IPPAN settlement", "API-ready output"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    ✓
                  </span>
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12 lg:py-16">
        <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How it works for jurists</h2>
            <ol className="mt-6 space-y-4 text-sm text-slate-700">
              {howItWorks.jurists.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How it works for AI teams</h2>
            <ol className="mt-6 space-y-4 text-sm text-slate-700">
              {howItWorks.aiTeams.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-900">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="card-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Jurists & Scholars</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Turn your legal reasoning into on-chain income.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Publish structured essays, case breakdown datasets, and legal argument graphs that AI partners rely on. InfoLAW handles
              licensing, payments, and provenance while you focus on the craft.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {juristBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 rounded-full bg-slate-900" />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/for-jurists"
              className="mt-8 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600"
            >
              Explore Jurist Program →
            </Link>
          </div>
          <div className="card-surface p-6 sm:p-8">
            <p className="text-sm text-slate-500">Coming soon</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Submission workspace preview</h3>
            <p className="mt-4 text-sm text-slate-600">
              Draft your FIRAC entries, attach citations, and trigger HashTimer anchoring directly within the dashboard. Configure per-article
              pricing or subscription bundles and route payouts to your IPN wallet.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="card-surface bg-slate-900 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Pilot partners</p>
            <p className="mt-4 text-sm text-slate-100">
              Research groups, law firm innovation teams, and frontier AI labs collaborate with InfoLAW to source transparent training corpora.
            </p>
            <div className="mt-8 grid gap-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:grid-cols-3">
              {["CounselAI", "LexNode", "CivicLab"].map((logo) => (
                <div key={logo} className="rounded-lg border border-white/20 px-4 py-5">
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">AI Legal Teams</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Fuel your AI counsel with curated legal corpora.
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {aiBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 rounded-full bg-slate-200" />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/for-ai-teams"
              className="mt-8 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600"
            >
              See AI Partner Brief →
            </Link>
          </div>
        </div>
      </section>

      <section className="section py-12 lg:py-16">
        <div className="grid gap-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Powered by IPPAN & IPN</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Instant IPN settlements, immutable provenance.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              IPPAN is the high-throughput settlement layer underpinning InfoLAW. Each purchase, subscription, or bounty clears in IPN with negligible fees,
              while HashTimer anchors authorship hashes for verifiable audit trails.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Upcoming HashTimer integration links every revision to a timestamp, enabling courts or compliance teams to validate provenance in seconds.
            </p>
          </div>
          <div className="card-surface bg-white p-6">
            <p className="text-sm text-slate-500">Coming soon</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">HashTimer anchoring workflow</h3>
            <p className="mt-4 text-sm text-slate-600">
              Authors trigger an on-chain hash after peer review. AI teams receive proofs alongside datasets, creating trusted audit packets.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-12 text-center lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Early access</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">
          Join the waitlist for jurists and AI partners.
        </h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          We’re onboarding a small cohort to shape payout mechanics, schemas, and API priorities. Share your credentials or use case and we’ll follow up with next steps.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Apply as Jurist
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-900"
          >
            Apply as AI Partner
          </Link>
        </div>
      </section>
    </div>
  );
}
