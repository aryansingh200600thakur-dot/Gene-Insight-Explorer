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
        border-white/10
        bg-white/10
        p-8
        shadow-xl
        backdrop-blur-xl
        transition
        duration-300
        hover:-translate-y-2
        hover:bg-white/20
        hover:shadow-2xl
      "
    >

      <h3
        className="
        text-xl
        font-semibold
        text-white
        "
      >
        {title}
      </h3>


      <p
        className="
        mt-4
        leading-7
        text-slate-300
        "
      >
        {description}
      </p>


    </div>
  );
}

export default FeatureCard;