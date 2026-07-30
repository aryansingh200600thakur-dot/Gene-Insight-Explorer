import {
  Brain,
  Dna,
  Activity,
  Pill,
  Microscope,
} from "lucide-react";

import type { AIInsightsResponse } from "../types/ai";


interface Props {
  insights: AIInsightsResponse;
}



function AIInsightsCard({
  insights,
}: Props) {


  const sections = [
    {
      title: "AI Overview",
      icon: <Brain size={24}/>,
      value: insights.overview,
    },

    {
      title: "Biological Role",
      icon: <Dna size={24}/>,
      value: insights.biological_role,
    },

    {
      title: "Disease Relevance",
      icon: <Activity size={24}/>,
      value: insights.disease_relevance,
    },

    {
      title: "Therapeutic Potential",
      icon: <Pill size={24}/>,
      value: insights.therapeutic_potential,
    },

    {
      title: "Research Highlights",
      icon: <Microscope size={24}/>,
      value: insights.research_highlights,
    },
  ];



  return (

    <section
    className="
    rounded-3xl
    border
    border-cyan-400/20
    bg-gradient-to-br
    from-cyan-500/10
    via-blue-500/10
    to-purple-500/10
    p-8
    backdrop-blur-xl
    "
    >


      {/* Header */}

      <div className="
      flex
      items-center
      gap-4
      "
      >

        <div
        className="
        rounded-2xl
        bg-cyan-400/20
        p-4
        text-cyan-300
        "
        >

          <Brain size={32}/>

        </div>


        <div>

          <h2
          className="
          text-3xl
          font-bold
          text-white
          "
          >
            AI Biological Insights
          </h2>


          <p
          className="
          mt-2
          text-slate-300
          "
          >
            AI-assisted interpretation of genomic information
          </p>


        </div>


      </div>





      {/* Insight Cards */}


      <div
      className="
      mt-8
      grid
      gap-6
      md:grid-cols-2
      "
      >


      {sections.map((section)=>(

        <div

        key={section.title}

        className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        p-6
        transition
        hover:-translate-y-1
        "

        >

          <div
          className="
          flex
          items-center
          gap-3
          text-cyan-300
          "
          >

            {section.icon}


            <h3
            className="
            text-lg
            font-semibold
            text-white
            "
            >
              {section.title}
            </h3>


          </div>


          <p
          className="
          mt-4
          leading-7
          text-slate-300
          "
          >

            {section.value ??
            "No information available."}

          </p>


        </div>

      ))}


      </div>





      {/* Disclaimer */}

      <div
      className="
      mt-8
      rounded-xl
      border
      border-yellow-400/20
      bg-yellow-400/10
      p-4
      text-sm
      text-yellow-200
      "
      >

        ⚠️ AI-generated insights are for educational and research
        exploration purposes and should not replace professional
        medical interpretation.

      </div>



    </section>

  );
}


export default AIInsightsCard;