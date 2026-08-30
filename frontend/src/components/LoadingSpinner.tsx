import { motion } from "framer-motion";
import { BrainCircuit, Database, Dna, LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return <div className="loading-wrap"><div className="loading-card">
    <div className="loading-orbit"><motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}><Dna size={36} /></motion.div></div>
    <span className="section-kicker">ANALYSIS PIPELINE</span>
    <h2>Assembling your gene profile</h2>
    <p>Fetching public biological records and preparing the interpretation layer.</p>
    <div className="loading-steps"><span><Database size={15} /> Gene record</span><span><Dna size={15} /> Annotations</span><span><BrainCircuit size={15} /> AI layer</span></div>
    <div className="loading-bar"><motion.i animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.7, repeat: Infinity, ease: "linear" }} /></div>
    <small><LoaderCircle size={13} /> External APIs can take longer after inactivity.</small>
  </div></div>;
}
