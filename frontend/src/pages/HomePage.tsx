import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import StatisticsSection from "../components/StatisticsSection";
import DataSources from "../components/DataSources";
import WorkflowSection from "../components/WorkflowSection";

import { motion } from "framer-motion";


function HomePage() {


  return (

    <div className="
    min-h-screen
    bg-gradient-to-br
    from-slate-950
    via-blue-950
    to-indigo-950
    text-white
    ">


      <Navbar />


      <Hero />


      <StatisticsSection />


      <WorkflowSection />


      <DataSources />




      {/* Why Gene Insight Explorer */}

      <section className="
      mx-auto
      max-w-7xl
      px-6
      py-20
      ">


        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.6,
          }}

          className="text-center mb-12"

        >

          <h2 className="
          text-4xl
          font-bold
          text-white
          ">
            Why Gene Insight Explorer?
          </h2>


          <p className="
          mt-4
          text-slate-300
          ">
            A modern platform combining genomics,
            bioinformatics, and artificial intelligence
            to simplify biological discovery.
          </p>


        </motion.div>





        <div className="
        grid
        gap-6
        md:grid-cols-3
        ">


          <FeatureCard

            title="🧬 Fast Gene Search"

            description="
            Search human genes quickly using official
            symbols such as TP53, BRCA1, EGFR,
            and thousands of other targets.
            "

          />



          <FeatureCard

            title="🤖 AI Biological Insights"

            description="
            Convert complex genomic information
            into understandable biological explanations.
            "

          />



          <FeatureCard

            title="🌐 Scientific Integration"

            description="
            Connect genomic information from trusted
            biological databases through one platform.
            "

          />


        </div>


      </section>




      <Footer />


    </div>

  );

}


export default HomePage;