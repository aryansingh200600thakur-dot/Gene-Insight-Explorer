import { Activity, BrainCircuit, Dna, FlaskConical, Microscope, Sparkles } from "lucide-react";
import type { AIInsightsResponse } from "../types/ai";

interface Props { insights: AIInsightsResponse; researchMode?: boolean; }

export default function AIInsightsCard({ insights, researchMode = false }: Props) {
  const sections = [
    { title: "Overview", icon: BrainCircuit, value: insights.overview },
    { title: "Biological role", icon: Dna, value: insights.biological_role },
    { title: "Disease relevance", icon: Activity, value: insights.disease_relevance },
    { title: "Therapeutic research", icon: FlaskConical, value: insights.therapeutic_potential },
    { title: "Research highlights", icon: Microscope, value: insights.research_highlights },
  ];

  return (
    <section className="ai-panel">
      <div className="ai-header">
        <div className="ai-title-wrap">
          <div className="ai-icon"><Sparkles size={20} /></div>
          <div><span className="section-kicker">ASSISTED INTERPRETATION</span><h2>Biological intelligence</h2></div>
        </div>
        <span className="ai-badge">AI-ASSISTED · {researchMode ? "RESEARCH" : "SUMMARY"}</span>
      </div>
      <p className="ai-intro">A structured interpretation layer generated from the available gene record. Treat it as a research aid, not as a substitute for primary evidence.</p>
      <div className="ai-grid">
        {sections.map(({ title, icon: Icon, value }) => (
          <article className="ai-card" key={title}>
            <div className="ai-card-title"><Icon size={17} /><h3>{title}</h3></div>
            <p>{value || "No interpretation available."}</p>
          </article>
        ))}
      </div>
      <div className="ai-disclaimer">This interpretation layer is a research aid. Verify important claims against the linked scientific records and primary literature.</div>
    </section>
  );
}
