
import { ArrowUpRight, BrainCircuit, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatisticsSection from "../components/StatisticsSection";
import WorkflowSection from "../components/WorkflowSection";
import DataSources from "../components/DataSources";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function HomePage() {
  return <div className="app-shell">
    <Navbar />
    <main>
      <Hero />
      <StatisticsSection />

      <section className="features-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><span className="section-kicker"><Sparkles size={14} /> THE PLATFORM</span><h2>One interface.<br /><em>Multiple biological layers.</em></h2></div>
            <p>Designed for students, builders and researchers who need a faster way to move from a gene name to useful biological context.</p>
          </div>
          <div className="feature-grid">
            <FeatureCard icon="search" title="Gene intelligence" description="Search human genes and surface identifiers, genomic metadata and concise biological summaries." />
            <FeatureCard icon="ai" title="AI-assisted interpretation" description="Turn dense biological records into structured, readable research context while keeping the AI layer clearly labeled." />
            <FeatureCard icon="network" title="Connected evidence" description="Explore Gene Ontology annotations and jump directly to authoritative external records." />
          </div>
        </div>
      </section>

      <WorkflowSection />
      <DataSources />

      <section className="cta-section">
        <div className="shell cta-card">
          <div className="cta-glow" />
          <div><span className="section-kicker"><BrainCircuit size={14} /> START EXPLORING</span><h2>Ask a gene<br /><em>better questions.</em></h2></div>
          <div className="cta-copy"><p>Search a gene and inspect the biological layers behind it. Your next research question might start with three letters.</p><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Analyze a gene <ArrowUpRight size={17} /></a></div>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}

