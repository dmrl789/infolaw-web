export const metadata = {
  title: "InfoLAW for AI Teams & Legaltech"
};

const useCases = [
  {
    title: "Fine-tune legal LLMs",
    detail: "Use curated FIRAC corpora with jurisdiction filters to align counsel agents with local doctrine."
  },
  {
    title: "Evaluate AI copilots",
    detail: "Benchmark hallucination rates and citation accuracy with jurist-authored regression suites."
  },
  {
    title: "Power legal copilots",
    detail: "Plug structured reasoning templates into your knowledge graph or retrieval layer."
  }
];

const benefits = [
  "Machine-readable datasets with schema docs and usage rights.",
  "Provenance proofs anchored on IPPAN for audit-ready delivery.",
  "Future APIs for bulk ingestion, search filters, and event streams.",
  "Transparent licensing with IPN settlements and receipts."
];

export default function ForAITeamsPage() {
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-brand">For AI teams / legaltech</p>
        <h1 className="mt-4 font-heading text-4xl text-slate-900">Fuel AI legal agents with curated legal corpora.</h1>
        <p className="mt-6 text-lg text-slate-700">
          InfoLAW delivers structured reasoning, labeled case breakdowns, and benchmarks sourced directly from jurists. Every item ships with provenance metadata and licensing priced in IPN so you can build trustworthy AI counsel faster.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-heading text-xl text-slate-900">{useCase.title}</h3>
              <p className="mt-3 text-slate-600">{useCase.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="font-heading text-2xl text-slate-900">Benefits for innovation teams</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded-full bg-brand" />
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            REST + GraphQL APIs, webhook subscriptions, and bulk export endpoints arrive later in Phase 2. Today, we support curated deliveries and manual onboarding for compliance-sensitive partners.
          </p>
        </div>
      </section>
    </div>
  );
}
