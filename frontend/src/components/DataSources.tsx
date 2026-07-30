import { motion } from "framer-motion";

function DataSources() {

  const sources = [
    {
      name: "NCBI",
      icon: "🧬",
      description:
        "Access genomic information, gene summaries, and biomedical literature resources.",
    },
    {
      name: "UniProt",
      icon: "🧪",
      description:
        "Explore protein functions, annotations, and biological characteristics.",
    },
    {
      name: "Ensembl",
      icon: "🌐",
      description:
        "Retrieve genome locations, transcripts, and comparative genomics data.",
    },
    {
      name: "Gene Ontology",
      icon: "📚",
      description:
        "Understand molecular functions, biological processes, and cellular components.",
    },
  ];


  return (

    <section className="mx-auto max-w-7xl px-6 py-20">


      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}

        className="mb-12 text-center"
      >

        <h2 className="
        text-4xl
        font-bold
        text-white
        ">
          Trusted Biological Data Sources
        </h2>


        <p className="
        mt-4
        text-slate-300
        ">
          Gene Insight Explorer integrates information from
          established scientific databases.
        </p>


      </motion.div>




      <div className="grid gap-6 md:grid-cols-4">


        {sources.map((source,index)=>(


          <motion.div

            key={source.name}

            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            transition={{
              delay:index*0.15,
            }}

            className="
            rounded-2xl
            border
            border-white/10
            bg-white/10
            p-6
            shadow-lg
            backdrop-blur-xl
            transition
            hover:-translate-y-2
            hover:bg-white/20
            ">

            
            <div className="text-4xl">
              {source.icon}
            </div>


            <h3 className="
            mt-5
            text-xl
            font-bold
            text-white
            ">
              {source.name}
            </h3>


            <p className="
            mt-3
            text-sm
            leading-6
            text-slate-300
            ">
              {source.description}
            </p>


          </motion.div>


        ))}


      </div>


    </section>

  );
}


export default DataSources;