import { motion } from "framer-motion";
import { Dna, BrainCircuit, Database } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

        <div className="flex justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="rounded-full bg-cyan-500/10 p-6"
          >
            <Dna className="h-14 w-14 text-cyan-400" />
          </motion.div>
        </div>

        <h2 className="mt-8 text-center text-3xl font-bold text-white">
          Initializing Gene Insight Engine
        </h2>

        <p className="mt-3 text-center text-slate-300">
          Connecting to biological databases...
        </p>

        <div className="mt-8 space-y-5">

          <LoadingRow
            icon={<Database size={20} />}
            text="Loading gene information"
          />

          <LoadingRow
            icon={<BrainCircuit size={20} />}
            text="Preparing AI biological insights"
          />

          <LoadingRow
            icon={<Dna size={20} />}
            text="Fetching genomic annotations"
          />

        </div>

        <div className="mt-10 h-2 overflow-hidden rounded-full bg-slate-800">

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="h-full w-1/3 rounded-full bg-cyan-400"
          />

        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          The backend may take up to <span className="font-semibold text-cyan-300">30–60 seconds</span> to wake up after inactivity on the free hosting plan.
        </p>

      </div>
    </div>
  );
}

function LoadingRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="flex items-center gap-3 text-slate-300"
    >
      <span className="text-cyan-400">{icon}</span>
      <span>{text}...</span>
    </motion.div>
  );
}

export default LoadingSpinner;