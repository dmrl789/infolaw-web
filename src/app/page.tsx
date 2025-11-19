import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO: coloured, high-contrast */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 text-slate-50">
        <div className="section py-16 lg:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-300">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Early access • Jurists & AI teams
              </span>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Legal reasoning for AI,
                <span className="block text-sky-300">
                  authored by jurists & settled in IPN.
                </span>
              </h1>

              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                InfoLAW.net is a curated library of doctrine, essays and case breakdowns, written by real jurists and structured for AI legal agents. Content is designed for continuous training and evaluation, so your models stay aligned with evolving law, regulation and practice.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/for-jurists"
                  className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-sky-400"
                >
                  I&apos;m a jurist / scholar
                </Link>
                <Link
                  href="/for-ai-teams"
                  className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-slate-900/40 px-4 py-2.5 text-sm font-semibold text-slate-50 hover:border-sky-300 hover:bg-slate-900/70"
                >
                  I build AI legal tools
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2.5 text-sm font-medium text-sky-200 hover:text-sky-100"
                >
                  Request early access →
                </Link>
              </div>

              <p className="max-w-md text-xs text-slate-300">
                <span className="font-semibold text-sky-200">IPPAN launch:</span>{" "}
                InfoLAW is built to settle access and rewards in IPN, the utility token of the IPPAN network. IPPAN is in advanced testing and will be launched soon; early partners will be the first to onboard.
              </p>
            </div>

            <div className="space-y-4">
              <div className="card-surface bg-slate-900/60 text-slate-100">
                <div className="border-b border-slate-700 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Continuous AI legal training
                </div>
                <div className="space-y-3 px-5 py-4 text-sm text-slate-100">
                  <p>
                    Law doesn&apos;t stand still—new statutes, cases and regulations appear every month. Static training corpora become stale quickly.
                  </p>
                  <p>
                    InfoLAW focuses on continuously updated doctrine and structured reasoning so AI systems can be re-trained and evaluated on fresh, jurisdiction-aware material. This helps reduce hallucinations, keep citations current, and surface the reasoning a human lawyer would expect to see.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="card-surface bg-slate-900/50 p-4 text-xs text-slate-100">
                  <p className="font-semibold text-sky-300">
                    Jurist-authored
                  </p>
                  <p className="mt-1 text-slate-200">
                    Doctrine, essays and case breakdowns written by qualified jurists and scholars.
                  </p>
                </div>
                <div className="card-surface bg-slate-900/50 p-4 text-xs text-slate-100">
                  <p className="font-semibold text-sky-300">
                    Structured for AI
                  </p>
                  <p className="mt-1 text-slate-200">
                    Facts, issues, rules, analysis and conclusion explicitly modeled for machine learning.
                  </p>
                </div>
                <div className="card-surface bg-slate-900/50 p-4 text-xs text-slate-100">
                  <p className="font-semibold text-sky-300">
                    IPN settlements
                  </p>
                  <p className="mt-1 text-slate-200">
                    Designed to settle access rights and rewards in IPN on the IPPAN network once live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Why continuous AI legal training matters */}
      <section className="section py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Why continuous AI legal training matters
            </h2>
            <p className="text-sm text-slate-600">
              Legal AI cannot be a one-off fine-tune. Precedents shift, statutes evolve, and regulators publish new guidance. Without a stream of updated doctrine and reasoning, even a strong model will drift away from reality.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                • <span className="font-medium">Reduce hallucinations:</span>{" "}
                link answers back to curated doctrine and case breakdowns.
              </li>
              <li>
                • <span className="font-medium">Stay current:</span> refresh training and evaluation sets as new legal materials are published.
              </li>
              <li>
                • <span className="font-medium">Explainable reasoning:</span>{" "}
                expose the structure a human lawyer expects—facts, issues, rules, analysis, conclusion.
              </li>
              <li>
                • <span className="font-medium">Jurisdiction-aware:</span> avoid mixing incompatible systems by tagging content by jurisdiction and court level.
              </li>
            </ul>
          </div>

          <div className="card-surface p-6 sm:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              InfoLAW&apos;s role in your AI stack
            </h3>
            <p className="mt-3 text-sm text-slate-700">
              InfoLAW sits between human jurists and your AI models. Jurists publish doctrine, essays and structured analyses. InfoLAW turns that into machine-readable corpora and evaluation sets that can be used to:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Fine-tune or adapt legal LLMs.</li>
              <li>• Evaluate agents on realistic tasks and jurisdictions.</li>
              <li>• Provide ground truth for explainable answers in production.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              As IPPAN launches, payments for access, curation and review are designed to be settled on-chain in IPN, closing the loop between legal work, AI systems and economic incentives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
