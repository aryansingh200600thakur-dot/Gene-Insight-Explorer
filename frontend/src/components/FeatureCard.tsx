import { ArrowUpRight, BrainCircuit, Network, Search } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: "search" | "ai" | "network";
}

const icons = { search: Search, ai: BrainCircuit, network: Network };

export default function FeatureCard({ title, description, icon = "search" }: FeatureCardProps) {
  const Icon = icons[icon];
  return (
    <article className="feature-card">
      <div className="feature-icon"><Icon size={20} /></div>
      <span className="feature-index">0{Object.keys(icons).indexOf(icon) + 1}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ArrowUpRight className="feature-arrow" size={18} />
    </article>
  );
}
