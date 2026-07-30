import { motion } from "framer-motion";

function WorkflowSection() {

  const steps = [
    {
      number: "01",
      title: "Search Gene",
      icon: "🔎",
      description:
        "Enter a gene symbol such as TP53, BRCA1, or EGFR to begin exploration."
    },
    {
      number: "02",
      title: "Collect Data",
      icon: "🧬",
      description:
        "Retrieve genomic, protein, and annotation information from biological databases."
    },
    {
      number: "03",
      title: "Analyze Biology",
      icon: "🧪",
      description:
        "Understand functions, pathways, interactions, and disease relevance."
    },
    {
      number: "04",
      title: "AI Insights",
      icon: "🤖",
      description:
        "Generate simplified biological explanations using artificial intelligence."
    }
  ];


  return (

    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">


        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.6
          }}
          className="text-center"
        >

          <h2 className="
          text-4xl
          font-bold
          text-slate-900
          ">
            How Gene Insight Explorer Works
          </h2>


          <p className="
          mt-4
          text-slate-600
          ">
            From a gene name to meaningful biological understanding.
          </p>


        </motion.div>




        <div className="
        mt-16
        grid
        gap-8
        md:grid-cols-4
        ">


          {steps.map((step,index)=>(

            <motion.div

            key={step.number}

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:index*0.15
            }}

            className="
            relative
            rounded-3xl
            bg-white
            p-8
            shadow-md
            hover:-translate-y-2
            transition
            "

            >


              <div className="
              text-4xl
              ">
                {step.icon}
              </div>


              <div className="
              mt-5
              text-sm
              font-bold
              text-blue-600
              ">
                STEP {step.number}
              </div>


              <h3 className="
              mt-3
              text-xl
              font-bold
              text-slate-900
              ">
                {step.title}
              </h3>


              <p className="
              mt-3
              text-sm
              leading-6
              text-slate-600
              ">
                {step.description}
              </p>


              {index !== steps.length - 1 && (

                <div className="
                absolute
                hidden
                right-[-30px]
                top-1/2
                h-[2px]
                w-12
                bg-blue-300
                md:block
                "/>

              )}


            </motion.div>

          ))}


        </div>


      </div>

    </section>

  );
}


export default WorkflowSection;