interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

      <div className="text-5xl">
        ❌
      </div>

      <h2 className="mt-4 text-3xl font-bold text-red-700">
        Gene Not Found
      </h2>

      <p className="mt-4 text-red-600">
        {message}
      </p>

      <div className="mt-8">
        <p className="font-semibold text-slate-700">
          Try searching:
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-white px-4 py-2 shadow">
            TP53
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow">
            BRCA1
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow">
            EGFR
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow">
            MYC
          </span>

        </div>
      </div>

    </div>
  );
}