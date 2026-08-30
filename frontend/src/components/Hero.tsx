import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, Dna, Network, ShieldCheck } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="shell hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow"><span className="pulse-dot" /> COMPUTATIONAL BIOLOGY · v3.0</div>
          <h1>
            Explore the biology
            <span> behind a gene.</span>
          </h1>
          <p className="hero-lede">
            A research-focused workspace for exploring human genes, genomic identifiers,
            Gene Ontology annotations and AI-assisted biological interpretation.
          </p>

          <SearchBar />

          <div className="hero-trust">
            <span><ShieldCheck size={15} /> Evidence-aware</span>
            <span><Database size={15} /> Multi-source</span>
            <span><BrainCircuit size={15} /> AI-assisted</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="visual-ring ring-a" />
          <div className="visual-ring ring-b" />
          <div className="visual-core">
            <Dna size={92} strokeWidth={1.15} />
            <div className="core-label">GENE<br /><strong>→</strong><br />INSIGHT</div>
          </div>

          <div className="data-chip chip-gene"><Dna size={15} /> Gene data <b>01</b></div>
          <div className="data-chip chip-ai"><BrainCircuit size={15} /> AI interpretation <b>02</b></div>
          <div className="data-chip chip-path"><Network size={15} /> Pathways <b>03</b></div>
          <div className="data-chip chip-db"><Database size={15} /> Sources <b>04</b></div>

          <svg className="connection-lines" viewBox="0 0 600 520" aria-hidden="true">
            <path d="M120 150 C200 170 230 205 270 245" />
            <path d="M485 155 C405 180 370 210 330 245" />
            <path d="M130 390 C205 350 235 315 275 280" />
            <path d="M470 390 C400 350 365 315 325 280" />
          </svg>

          <div className="visual-caption">
            <span>ONE WORKSPACE</span>
            <strong>Biology → Data → Interpretation</strong>
          </div>
        </motion.div>
      </div>

      <div className="shell hero-bottom">
        <div><strong>20,000+</strong><span>human genes</span></div>
        <div><strong>4+</strong><span>scientific sources</span></div>
        <div><strong>3</strong><span>GO domains</span></div>
        <div><strong>1</strong><span>research workspace</span></div>
        <a href="#platform">Explore platform <ArrowRight size={15} /></a>
      </div>
    </section>
  );
}
