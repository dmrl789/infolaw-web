export const metadata = {
  title: "Legal Reasoning, AI & the Origins of InfoLAW",
  description:
    "Exploring the UK tradition of legal reasoning, the birth of AI & Law, and how InfoLAW advances explainable, provenance-rich legal intelligence.",
};

const highlights = [
  {
    title: "Legal reasoning as a taught discipline",
    points: [
      "UK law degrees teach legal reasoning as core curriculum (Legal Method, Legal Analysis).",
      "Students learn to interpret statutes and decisions, separate ratio from obiter, and apply precedent.",
      "Professional routes such as the SQE assess reasoning ability alongside doctrinal knowledge.",
    ],
  },
  {
    title: "AI & Law roots in the UK",
    points: [
      "1980s research focused on symbolic AI: expert systems, logic programming, and case-based reasoning.",
      "UK universities led foundational work on argumentation, precedent comparison, and explainable systems.",
      "The first ICAIL conference in 1987 cemented AI & Law as a field with UK scholars at its center.",
    ],
  },
  {
    title: "Why provenance matters now",
    points: [
      "Modern AI raises questions about explainability, auditability, and reproducibility of legal outputs.",
      "Early AI & Law already targeted these concerns through structured reasoning and traceable sources.",
      "Transparent chains of authority remain essential for courts, regulators, and practitioners.",
    ],
  },
];

const infolawPrinciples = [
  {
    title: "Explainable legal reasoning",
    description:
      "Arguments, counter-arguments, authorities, and applications to fact are represented explicitly instead of implied through opaque outputs.",
  },
  {
    title: "Proof of provenance",
    description:
      "Every source, transformation, and reasoning step carries timestamps and verifiable traceability to enable auditability and trust.",
  },
  {
    title: "Structured for AI",
    description:
      "Issue spotting, rules, tests, and factual engagement are encoded so models can be trained and evaluated on transparent legal reasoning, not just text.",
  },
];

export default function LegalReasoningArticlePage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="section py-14 lg:py-16">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-700">
              Essay • Legal reasoning & AI
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Legal Reasoning, Artificial Intelligence, and the Origins of InfoLAW
            </h1>
            <p className="text-base text-slate-700">
              UK legal education treats reasoning as a discipline to be taught, examined, and applied. That tradition shaped
              the birth of AI & Law in the 1980s and directly informs how InfoLAW approaches explainable, provenance-first
              legal intelligence today.
            </p>
          </div>
        </div>
      </section>

      <section className="section space-y-12 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Legal reasoning as a discipline in the United Kingdom
            </h2>
            <p className="text-slate-700">
              Legal reasoning is a formal subject across UK law schools. Core modules—often titled Legal Reasoning, Legal
              Method, or Legal Analysis—train students to interpret statutes and judicial decisions, identify the ratio
              decidendi versus obiter dicta, apply precedent by analogy or distinction, and construct structured arguments
              such as IRAC or MIRAT. Professional routes like the Solicitors Qualifying Examination explicitly assess these
              skills, reflecting the common law tradition where reasoning is the law.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">UK legal reasoning curriculum</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <span>Interpret statutes and judicial decisions with doctrinal fidelity.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <span>Separate ratio decidendi from obiter dicta to map binding authority.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <span>Use analogy and distinction to apply or limit precedent.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <span>Balance rules, principles, policies, and facts in structured argumentation.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">AI & Law in the UK (1980s)</h3>
            <p className="mt-3 text-slate-700">
              The early AI & Law field focused on symbolic methods—rule-based expert systems, logic programming, case-based
              reasoning, and argumentation. UK universities such as Oxford, Edinburgh, Imperial College London, King&apos;s College
              London, and Liverpool became anchors for this research. Scholars like Richard Susskind and Trevor Bench-Capon
              demonstrated that legal intelligence depends on structured argumentation, case comparison, and explainable chains
              of reasoning. The first International Conference on Artificial Intelligence and Law in 1987 formalized the field
              with UK leadership.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Why early AI & Law matters today</h2>
            <p className="text-slate-700">
              Modern large language models rekindle questions the AI & Law community posed decades ago: how was a conclusion
              reached, can the reasoning be explained and audited, are sources verifiable, and are results reproducible? Early
              UK research tackled these exact challenges by modeling legal reasoning explicitly rather than predicting outcomes
              statistically.
            </p>
            <div className="grid gap-4 lg:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">InfoLAW: continuing the tradition</h2>
              <p className="text-slate-700">
                InfoLAW treats legal intelligence as reasoning, not prediction. It focuses on structured arguments tied to
                authoritative sources, explicit reasoning steps, and verifiable audit trails. Every output links issues to rules,
                tests, and facts, flags counter-arguments and gaps, and is anchored with provenance data such as cryptographic
                timestamps.
              </p>
              <p className="text-slate-700">
                This approach follows the core insight of early AI & Law: legal systems demand transparency, justification, and
                traceability. By designing for provenance and explainability from the start, InfoLAW serves jurists, AI teams,
                regulators, and researchers operating in high-accountability environments.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 text-slate-50">
              <h3 className="text-lg font-semibold">Explainable reasoning & provenance</h3>
              <p className="mt-3 text-sm text-slate-200">
                Two principles shape InfoLAW&apos;s architecture and align it with UK AI & Law heritage.
              </p>
              <div className="mt-5 space-y-4">
                {infolawPrinciples.map((principle) => (
                  <div key={principle.title} className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-4">
                    <h4 className="text-sm font-semibold text-white">{principle.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-700">Closing note</p>
              <h2 className="text-2xl font-semibold text-slate-900">Reintroducing structure and accountability</h2>
              <p className="text-slate-700">
                Legal reasoning has long merited rigorous study in the UK, and AI & Law has pursued explainable reasoning since
                the 1980s. InfoLAW extends this lineage by combining structured argumentation with cryptographic provenance so
                that legal AI remains accountable, verifiable, and useful to institutions that rely on the rule of law.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                InfoLAW outputs include
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                  <span>Linked sources and authorities for every issue.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                  <span>Explicit reasoning structure with counter-arguments and factual gaps.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                  <span>Verifiable audit trails with timestamps and provenance markers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
