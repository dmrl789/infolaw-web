import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO – LIGHT, CLEAR, HIGH CONTRAST */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="section py-14 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Early access • Jurists & AI teams
              </span>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Legal reasoning for AI,
                <span className="block text-sky-700">
                  authored by jurists & settled in IPN.
                </span>
              </h1>

              <p className="max-w-xl text-sm text-slate-700 sm:text-base">
                InfoLAW.net is a curated library of doctrine, essays and case
                breakdowns, written by qualified jurists and structured for AI
                legal agents. Content is designed for continuous training and
                evaluation, so models stay aligned with evolving law,
                regulation and practice.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/for-jurists"
                  className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500"
                >
                  I&apos;m a jurist / scholar
                </Link>
                <Link
                  href="/for-ai-teams"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-sky-400"
                >
                  I build AI legal tools
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-sky-700 hover:text-sky-900"
                >
                  Request early access →
                </Link>
              </div>

              <p className="max-w-md text-xs text-slate-600">
                <span className="font-semibold text-sky-700">IPPAN launch:</span>{" "}
                InfoLAW is designed to settle access and rewards in IPN, the
                utility token of the IPPAN network. IPPAN is in advanced testing
                and will be launched soon; early partners will be the first to
                onboard.
              </p>
            </div>

            {/* Simple visual “card” column */}
            <div className="space-y-4">
              <div className="card-surface p-5 sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Continuous AI legal training
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  Law doesn&apos;t stand still. New statutes, cases and
                  regulatory guidance appear continuously. Static training sets
                  become stale and increase the risk of hallucinations and
                  outdated answers.
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  InfoLAW focuses on continuously updated doctrine and
                  structured reasoning so AI systems can be re-trained and
                  evaluated on fresh, jurisdiction-aware material—keeping
                  answers explainable and anchored in real legal analysis.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="card-surface p-4 text-xs text-slate-700">
                  <p className="font-semibold text-sky-700">Jurist-authored</p>
                  <p className="mt-1">
                    Doctrine, essays and case breakdowns written by qualified
                    jurists and scholars.
                  </p>
                </div>
                <div className="card-surface p-4 text-xs text-slate-700">
                  <p className="font-semibold text-sky-700">
                    Structured for AI
                  </p>
                  <p className="mt-1">
                    Facts, issues, rules, analysis and conclusion explicitly
                    modeled for machine learning.
                  </p>
                </div>
                <div className="card-surface p-4 text-xs text-slate-700">
                  <p className="font-semibold text-sky-700">IPN settlements</p>
                  <p className="mt-1">
                    Designed to settle access rights and rewards in IPN on the
                    IPPAN network once live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW OF LEGAL REASONING */}
      <section className="section py-12 lg:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Workflow of legal reasoning in InfoLAW
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            InfoLAW describes a full workflow from human doctrine to AI-ready
            supervision. Jurists stay in control of the legal analysis, while
            AI systems consume a structured, verifiable version of their work.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="card-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Step 1
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-900">
              Jurist drafts doctrine
            </h3>
            <p className="mt-2 text-xs text-slate-700">
              A jurist, lawyer or scholar writes a doctrine article, essay or
              case breakdown in clear legal language.
            </p>
          </div>

          <div className="card-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Step 2
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-900">
              Structured for AI
            </h3>
            <p className="mt-2 text-xs text-slate-700">
              InfoLAW maps the content into a structured schema: facts, issues,
              rules, analysis, conclusion, with metadata for jurisdiction and
              court level.
            </p>
          </div>

          <div className="card-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Step 3
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-900">
              Anchored & priced
            </h3>
            <p className="mt-2 text-xs text-slate-700">
              The work is prepared to be anchored on IPPAN (HashTimer) and
              assigned an IPN-based access price or included in a collection for
              continuous training and evaluation.
            </p>
          </div>

          <div className="card-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Step 4
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-900">
              AI teams consume
            </h3>
            <p className="mt-2 text-xs text-slate-700">
              AI and legaltech teams use the structured doctrine as training
              data, evaluation sets and ground truth, paying in IPN once IPPAN
              goes live.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
