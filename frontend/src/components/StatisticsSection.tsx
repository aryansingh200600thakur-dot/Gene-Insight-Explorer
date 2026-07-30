function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md">
      <h3 className="text-4xl font-bold text-blue-600">
        {number}
      </h3>

      <p className="mt-3 text-slate-600">
        {label}
      </p>
    </div>
  );
}

export default function StatisticsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-bold text-white">
          Why Gene Insight Explorer?
        </h2>

        <p className="mt-4 text-slate-600">
          Built to make biological information accessible,
          fast, and easier to understand.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-4">

        <StatCard
          number="25K+"
          label="Human Genes"
        />

        <StatCard
          number="3"
          label="Gene Ontology Categories"
        />

        <StatCard
          number="AI"
          label="Biological Interpretation"
        />

        <StatCard
          number="24/7"
          label="Accessible Anywhere"
        />

      </div>

    </section>
  );
}