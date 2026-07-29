interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;