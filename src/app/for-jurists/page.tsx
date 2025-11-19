export const metadata = {
  title: "InfoLAW for Jurists & Scholars"
};

const publishingOptions = [
  {
    title: "Structured essays",
    description: "Deliver FIRAC-native analysis tagged by jurisdiction, doctrine, and citation graph."
  },
  {
    title: "Case breakdown datasets",
    description: "Decompose precedent into labeled issue trees and outcome rationales for AI training."
  },
  {
    title: "Benchmarks & challenges",
    description: "Design evaluation sets for compliance bots, litigation copilots, and research agents."
  }
];

const trustSignals = [
  "Verified bar memberships, academic affiliations, or judicial credentials.",
  "Peer review and staking for schema compliance and reasoning rigor.",
  "Reputation scores influenced by downloads, ratings, and timely bounty delivery."
];

const earningModels = [
  "Pay-per-access unlocks with transparent pricing and future utility token rewards.",
  "Recurring subscriptions to topical collections.",
  "Utility token-funded bounties for missing jurisdictions or doctrines.",
  "Revenue shares with peer reviewers and co-authors."
];

export default function ForJuristsPage() {
  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-brand">For jurists & scholars</p>
        <h1 className="mt-4 font-heading text-4xl text-slate-900">Publish explainable legal reasoning. Earn fairly.</h1>
        <p className="mt-6 text-lg text-slate-700">
          InfoLAW transforms your expertise into structured assets. Upload drafts or port existing work into our schema, receive peer feedback, and launch collections that AI teams rely on. Contributions are designed to be rewarded with utility tokens fairly as usage and impact grow.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {publishingOptions.map((option) => (
            <div key={option.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-heading text-xl text-slate-900">{option.title}</h3>
              <p className="mt-3 text-slate-600">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="font-heading text-2xl text-slate-900">How your work is rewarded</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {earningModels.map((model) => (
              <li key={model} className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded-full bg-brand" />
                <p>{model}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Smart-contract payouts and wallet integrations arrive in future phases. Today, we manage allowlist disbursements manually to ensure compliance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="font-heading text-2xl text-slate-900">Trust & quality controls</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded-full bg-slate-900" />
                <p>{signal}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            HashTimer anchoring preserves timestamps for each revision, while dispute resolution workflows safeguard originality and accuracy. Reviewers also share in the utility token rewards for validating schema compliance and citation fidelity.
          </p>
        </div>
      </section>
    </div>
  );
}
