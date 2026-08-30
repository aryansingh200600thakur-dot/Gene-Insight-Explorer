import { motion } from "framer-motion";
import { Activity, Database, Dna, Layers3 } from "lucide-react";

const stats = [
  { icon: Dna, value: "20K+", label: "Human genes" },
  { icon: Database, value: "4+", label: "Integrated sources" },
  { icon: Layers3, value: "3", label: "GO domains" },
  { icon: Activity, value: "Live", label: "API-powered data" },
];

export default function StatisticsSection() {
  return (
    <section className="stats-section" id="platform">
      <div className="shell stats-grid">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <motion.div
            key={label}
            className="stat-item"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="stat-icon"><Icon size={18} /></span>
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
