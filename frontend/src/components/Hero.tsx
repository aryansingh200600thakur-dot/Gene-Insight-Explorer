import DNAAnimation from "./DNAAnimation";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">


      {/* Background Effects */}

      <div className="absolute inset-0">

        <div className="
        absolute left-10 top-20
        h-96 w-96
        rounded-full
        bg-cyan-400/20
        blur-3xl
        animate-pulse
        "/>


        <div className="
        absolute right-10 bottom-20
        h-96 w-96
        rounded-full
        bg-purple-500/20
        blur-3xl
        animate-pulse
        "/>

      </div>



      <div className="
      relative mx-auto
      flex max-w-7xl
      flex-col
      gap-16
      px-6
      py-24
      lg:flex-row
      lg:items-center
      ">



        {/* LEFT CONTENT */}

        <motion.div
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="flex-1 text-center lg:text-left"
        >


          <span className="
          inline-block
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-400/10
          px-5
          py-2
          text-sm
          font-semibold
          text-cyan-300
          ">
            🚀 Gene Insight Explorer v2.0
          </span>



          <h1 className="
          mt-8
          text-5xl
          font-extrabold
          tracking-tight
          md:text-7xl
          ">

            Explore Human Genes

            <span className="
            block
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            ">
              With AI Biological Intelligence
            </span>

          </h1>



          <p className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-300
          ">

            Search human genes, analyze biological functions,
            explore Gene Ontology pathways, and generate
            understandable AI-powered scientific insights.

          </p>



          <div className="
          mt-10
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-3
          backdrop-blur-xl
          ">

            <SearchBar />

          </div>



          <div className="
          mt-8
          flex
          flex-wrap
          justify-center
          gap-3
          lg:justify-start
          ">


            {[
              "🧬 Human Genes",
              "🤖 AI Insights",
              "📚 Gene Ontology",
              "⚡ Fast Search"
            ].map((item)=>(
              <span
              key={item}
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-slate-200
              backdrop-blur
              "
              >
                {item}
              </span>
            ))}


          </div>


        </motion.div>





        {/* RIGHT VISUAL */}

        <motion.div
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}
          className="relative flex flex-1 justify-center"
        >


          <div className="
          relative
          flex
          h-80
          w-80
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/30
          bg-gradient-to-br
          from-cyan-400/20
          to-purple-500/20
          shadow-2xl
          ">


            <div className="
            absolute
            h-56
            w-56
            rounded-full
            border
            border-blue-300/30
            animate-spin
            "/>


          <DNAAnimation/>


          </div>



          {/* Floating Cards */}


          <div className="
          absolute
          left-0
          top-20
          rounded-xl
          border
          border-white/10
          bg-white/10
          px-5
          py-3
          backdrop-blur-xl
          ">
            🔬 Protein Function
          </div>


          <div className="
          absolute
          right-0
          bottom-20
          rounded-xl
          border
          border-white/10
          bg-white/10
          px-5
          py-3
          backdrop-blur-xl
          ">
            🧠 AI Analysis
          </div>


        </motion.div>



      </div>

    </section>
  );
}

export default Hero;