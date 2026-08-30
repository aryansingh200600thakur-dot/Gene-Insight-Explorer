import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowUpRight, CheckCircle2, Copy, Dna,
  ExternalLink, FlaskConical, Globe2, Layers3, MapPin, Network,
  Printer, RefreshCw, Search, ShieldCheck
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import AIInsightsCard from "../components/AIInsightsCard";
import GeneOntologyCard from "../components/GeneOntologyCard";
import { getGene, type GeneResponse } from "../services/geneService";
import { getAIInsights } from "../services/aiService";
import { getOntology } from "../services/ontologyServices";
import type { AIInsightsResponse } from "../types/ai";
import type { OntologyResponse } from "../types/ontology";

export default function GeneDetailsPage() {
  const { symbol } = useParams<{ symbol: string }>();
  const navigate = useNavigate();
  const [gene, setGene] = useState<GeneResponse | null>(null);
  const [ai, setAi] = useState<AIInsightsResponse | null>(null);
  const [ontology, setOntology] = useState<OntologyResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [researchMode, setResearchMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const load = useCallback(async () => {
    if (!symbol) { setError("No gene symbol was provided."); setLoading(false); return; }
    setLoading(true); setError(""); setAi(null); setOntology(null);
    try {
      const geneData = await getGene(symbol);
      setGene(geneData);
      const [aiResult, goResult] = await Promise.allSettled([getAIInsights(symbol), getOntology(symbol)]);
      if (aiResult.status === "fulfilled") setAi(aiResult.value);
      if (goResult.status === "fulfilled") setOntology(goResult.value);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load this gene.");
      setGene(null);
    } finally { setLoading(false); }
  }, [symbol]);

  useEffect(() => { void load(); }, [load]);

  const totalGo = ontology ? ontology.biological_process.length + ontology.molecular_function.length + ontology.cellular_component.length : 0;
  const coordinate = useMemo(() => {
    if (!gene?.genomic_start || !gene.genomic_end) return null;
    return `${gene.genomic_start.toLocaleString()} â€” ${gene.genomic_end.toLocaleString()}`;
  }, [gene]);

  const copySymbol = async () => {
    if (!gene?.symbol) return;
    await navigator.clipboard?.writeText(gene.symbol);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return <div className="app-shell details-shell">
    <Navbar />
    <main className="details-main">
      {loading && <LoadingSpinner />}
      {!loading && error && <div className="shell details-error"><ErrorMessage message={error} /><button className="secondary-button" onClick={() => void load()}><RefreshCw size={16} /> Retry analysis</button></div>}

      {!loading && gene && <div className="shell">
        <div className="details-toolbar">
          <button className="back-button" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back</button>
          <div className="toolbar-actions">
            <button className="mode-toggle" onClick={() => setResearchMode((v) => !v)}><span className={researchMode ? "toggle-dot active" : "toggle-dot"} /> Research mode <b>{researchMode ? "ON" : "OFF"}</b></button>
            <button className="icon-button" title="Print research view" onClick={() => window.print()}><Printer size={16} /></button>
          </div>
        </div>

        <motion.section className="gene-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="gene-hero-main">
            <div className="gene-emblem"><Dna size={38} /></div>
            <div className="gene-title">
              <div className="gene-overline"><span className="live-dot" /> HUMAN GENE PROFILE <span>Â·</span> {researchMode ? "RESEARCH VIEW" : "OVERVIEW"}</div>
              <div className="gene-name-row"><h1>{gene.symbol || symbol}</h1><button className="copy-button" onClick={copySymbol}>{copied ? <CheckCircle2 size={15} /> : <Copy size={15} />}{copied ? "Copied" : "Copy"}</button></div>
              <p>{gene.name || "Gene name unavailable"}</p>
              <div className="gene-tags"><span><ShieldCheck size={13} /> Public data</span><span><Globe2 size={13} /> Homo sapiens</span><span><Layers3 size={13} /> {totalGo} GO terms</span></div>
            </div>
          </div>
          <div className="gene-summary"><span className="summary-label">REFERENCE SUMMARY</span><p>{gene.summary || "No reference summary was returned for this gene."}</p></div>
        </motion.section>

        <section className="metric-grid">
          <Metric icon={<MapPin size={17} />} label="Chromosome" value={gene.chromosome ? `Chr ${gene.chromosome}` : "Unavailable"} />
          <Metric icon={<Dna size={17} />} label="Entrez" value={gene.entrez_id || "Unavailable"} />
          <Metric icon={<Network size={17} />} label="Ensembl" value={gene.ensembl_id || "Unavailable"} />
          <Metric icon={<FlaskConical size={17} />} label="UniProt" value={gene.uniprot_id || "Unavailable"} />
        </section>

        <section className="relationship-panel">
          <div className="panel-heading-row"><div><span className="section-kicker"><Network size={14} /> BIOLOGICAL MAP</span><h2>From gene to context</h2></div><span className="panel-note">Conceptual relationship view</span></div>
          <div className="network-map">
            <NetworkNode label={gene.symbol || "GENE"} sub="Target" icon={<Dna size={19} />} active />
            <NetworkLine />
            <NetworkNode label="Function" sub="GO annotation" icon={<Layers3 size={19} />} />
            <NetworkLine />
            <NetworkNode label="Pathways" sub="Biological context" icon={<Network size={19} />} />
            <NetworkLine />
            <NetworkNode label="Research" sub="Explore further" icon={<Search size={19} />} />
          </div>
        </section>

        {ai && <AIInsightsCard insights={ai} researchMode={researchMode} />}

        {ontology && <GeneOntologyCard biologicalProcess={ontology.biological_process} molecularFunction={ontology.molecular_function} cellularComponent={ontology.cellular_component} />}

        <section className="research-grid">
          <div className="detail-panel">
            <div className="panel-heading-row"><div><span className="section-kicker"><Dna size={14} /> GENOMIC CONTEXT</span><h2>Identifiers & location</h2></div></div>
            <div className="detail-table">
              <Row label="Gene type" value={gene.gene_type || "Unavailable"} />
              <Row label="Taxonomy" value={gene.taxid ? String(gene.taxid) : "Unavailable"} />
              <Row label="Chromosome" value={gene.chromosome || "Unavailable"} />
              <Row label="Coordinates" value={coordinate || "Unavailable"} />
              <Row label="Strand" value={gene.strand ? String(gene.strand) : "Unavailable"} />
              <Row label="Aliases" value={gene.aliases?.length ? gene.aliases.slice(0, 8).join(", ") : "None returned"} />
            </div>
          </div>

          <div className="detail-panel">
            <div className="panel-heading-row"><div><span className="section-kicker"><ExternalLink size={14} /> SOURCE LAYER</span><h2>Open original records</h2></div></div>
            <div className="source-links">
              <SourceLink label="NCBI Gene" description="Gene record & reference data" url={gene.links.ncbi} />
              <SourceLink label="Ensembl" description="Genome browser & gene model" url={gene.links.ensembl} />
              <SourceLink label="UniProt" description="Protein knowledgebase" url={gene.links.uniprot} />
            </div>
          </div>
        </section>

        <div className="details-footer-note"><ShieldCheck size={15} /><span>Data comes from public biological resources. AI-generated interpretation is provided for research and educational exploration and should be verified against primary sources.</span><button onClick={() => navigate("/")}>Analyze another gene <ArrowUpRight size={15} /></button></div>
      </div>}
    </main>
    <Footer />
  </div>;
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="metric-card"><span className="metric-icon">{icon}</span><div><span>{label}</span><strong>{value}</strong></div></div>;
}
function NetworkNode({ label, sub, icon, active = false }: { label: string; sub: string; icon: ReactNode; active?: boolean }) {
  return <div className={`network-node ${active ? "active" : ""}`}><span>{icon}</span><strong>{label}</strong><small>{sub}</small></div>;
}
function NetworkLine() { return <div className="network-line"><span /></div>; }
function Row({ label, value }: { label: string; value: string }) { return <div className="detail-row"><span>{label}</span><strong>{value}</strong></div>; }
function SourceLink({ label, description, url }: { label: string; description: string; url: string }) {
  return <a className="source-link" href={url} target="_blank" rel="noreferrer"><span><strong>{label}</strong><small>{description}</small></span><ArrowUpRight size={17} /></a>;
}

