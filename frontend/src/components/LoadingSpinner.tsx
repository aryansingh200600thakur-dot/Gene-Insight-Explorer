export default function LoadingSpinner() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-20 rounded-2xl bg-slate-200"></div>

      <div className="h-48 rounded-2xl bg-slate-200"></div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="h-32 rounded-2xl bg-slate-200"></div>

        <div className="h-32 rounded-2xl bg-slate-200"></div>

        <div className="h-32 rounded-2xl bg-slate-200"></div>

      </div>

      <div className="h-72 rounded-2xl bg-slate-200"></div>

    </div>
  );
}