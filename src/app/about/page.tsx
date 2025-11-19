export const metadata = {
  title: "About InfoLAW – Legal Reasoning Marketplace"
};

const pillars = [
  {
    title: "Structured legal intelligence",
    description:
      "Every submission follows the FIRAC schema plus provenance metadata so AI systems can ingest doctrine-aware reasoning without manual cleanup."
  },
  {
    title: "Fair utility incentives",
    description:
      "Jurists earn transparent rewards for unlocks, subscriptions, and bounty work. Reviewers and curators share in utility token distributions, aligning quality with network growth."
  },
  {
    title: "Verifiable provenance",
    description:
      "HashTimer anchoring timestamps each iteration, giving courts and enterprises audit trails for every paragraph."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-brand">Our mission</p>
        <h1 className="mt-4 font-heading text-4xl text-slate-900">Legal reasoning for AI, aligned with jurists.</h1>
        <p className="mt-6 text-lg text-slate-700">
          InfoLAW exists because legal AI demands curated, explainable, jurisdiction-aware reasoning. Unstructured PDFs, hallucinated citations, and opaque training data are unacceptable for courts or compliance teams. We pair subject-matter experts with fair utility token incentives so that every dataset, article, or benchmark arrives machine-ready.
        </p>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="font-heading text-2xl text-slate-900">Why InfoLAW now?</h2>
          <p className="mt-4 text-slate-600">
            Generative AI has entered every practice area, yet most systems still rely on unverified corpora and static knowledge bases. Regulators and clients demand provenance. Jurists demand ownership. InfoLAW merges both by creating a structured marketplace where incentives, quality, and compliance are aligned through fair utility token rewards.
          </p>
          <p className="mt-4 text-slate-600">
            Our roadmap progresses from curated collections to programmable APIs that feed autonomous legal agents. Throughout, utility token mechanics ensure transparent recognition and revenue sharing across contributors, reviewers, and the platform treasury.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-heading text-xl text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
