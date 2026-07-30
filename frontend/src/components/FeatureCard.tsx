interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        flex
        min-h-[220px]
        flex-col
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>


      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>


    </div>
  );
}

export default FeatureCard;