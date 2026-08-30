import { motion } from "framer-motion";
import { BookOpen, Database, Dna, Globe2 } from "lucide-react";

const sources = [
  { name: "MyGene.info", role: "Gene identity & genomic metadata", icon: Dna, tag: "GENE" },
  { name: "NCBI", role: "Gene records & biomedical context", icon: BookOpen, tag: "REFERENCE" },
  { name: "Ensembl", role: "Genome location & identifiers", icon: Globe2, tag: "GENOME" },
  { name: "QuickGO", role: "Gene Ontology annotations", icon: Database, tag: "ONTOLOGY" },
];

export default function DataSources() {
  return (
    <section className="sources-section">
      <div className="shell">
        <div className="section-heading">
          <span className="section-kicker"><Database size={14} /> DATA LAYER</span>
          <h2>Built on biological<br /><em>reference sources.</em></h2>
          <p>Gene Insight Explorer connects the interface to established public resources. Source links remain available on every gene profile.</p>
        </div>

        <div className="sources-grid">
          {sources.map(({ name, role, icon: Icon, tag }, index) => (
            <motion.div
              key={name}
              className="source-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="source-icon"><Icon size={21} /></div>
              <span className="source-tag">{tag}</span>
              <h3>{name}</h3>
              <p>{role}</p>
              <span className="source-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
