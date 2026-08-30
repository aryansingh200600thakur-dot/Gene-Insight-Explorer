import { motion } from "framer-motion";
import { BrainCircuit, Database, Dna, Search, Sparkles } from "lucide-react";

const steps = [
  { n: "01", title: "Search", text: "Start with an official human gene symbol or a familiar target such as TP53.", icon: Search },
  { n: "02", title: "Aggregate", text: "Bring together genomic identifiers, location and biological annotations from multiple sources.", icon: Database },
  { n: "03", title: "Understand", text: "Inspect functions, Gene Ontology terms and biological context in one workspace.", icon: Dna },
  { n: "04", title: "Interpret", text: "Use AI-assisted summaries to turn dense biological information into readable research context.", icon: BrainCircuit },
];

export default function WorkflowSection() {
  return (
    <section className="workflow-section" id="workflow">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker"><Sparkles size={14} /> WORKFLOW</span>
            <h2>From a gene symbol<br /><em>to a research starting point.</em></h2>
          </div>
          <p>A deliberately simple workflow hides the complexity of multiple biological data services without hiding where the information comes from.</p>
        </div>

        <div className="workflow-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                className="workflow-card"
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="workflow-top"><span>{step.n}</span><Icon size={20} /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <span className="workflow-arrow">→</span>}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
