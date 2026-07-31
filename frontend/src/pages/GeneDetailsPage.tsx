import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import { getGene } from "../services/geneService";
import type { GeneResponse } from "../services/geneService";

import { getAIInsights } from "../services/aiService";
import type { AIInsightsResponse } from "../types/ai";

import AIInsightsCard from "../components/AIInsightsCard";


function GeneDetailsPage() {

  const { symbol } = useParams<{symbol:string}>();

  const [gene,setGene] =
    useState<GeneResponse|null>(null);

  const [aiInsights,setAIInsights] =
    useState<AIInsightsResponse|null>(null);


  const [loading,setLoading] =
    useState(true);

  const [error,setError] =
    useState("");



  useEffect(()=>{

    async function fetchGene(){

      if(!symbol){
        setError("No gene symbol provided.");
        setLoading(false);
        return;
      }


      try{

        setLoading(true);
        setError("");

        const [data, ai] =
          await Promise.all([
            getGene(symbol),
            getAIInsights(symbol),
          ]);

        setGene(data);
        setAIInsights(ai);


      }

      catch(err){

        console.error(err);

        if(err instanceof Error){
          setError(err.message);
        }
        else{
          setError("Unexpected error occurred.");
        }

      }

      finally{
        setLoading(false);
      }

    }


    fetchGene();


  },[symbol]);




  return (

    <div className="
    min-h-screen
    bg-slate-950
    ">


      <Navbar />



      <main className="
      mx-auto
      max-w-6xl
      px-6
      py-12
      ">



      {loading && <LoadingSpinner />}



      {!loading && error && (
        <ErrorMessage message={error}/>
      )}




      {!loading && gene && (

        <div className="space-y-10">



          {/* Gene Header */}

          <section
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/10
          p-10
          backdrop-blur-xl
          "
          >

            <div className="flex items-center gap-4">

              <div className="
              rounded-2xl
              bg-blue-500/20
              p-4
              text-4xl
              ">
                🧬
              </div>


              <div>

              <h1 className="
              text-5xl
              font-bold
              text-white
              ">
                {gene.symbol}
              </h1>


              <p className="
              mt-3
              text-xl
              text-slate-300
              ">
                {gene.name ?? "Gene name unavailable"}
              </p>

              </div>


            </div>


            <div className="
            mt-8
            inline-block
            rounded-full
            bg-cyan-500/20
            px-5
            py-2
            text-sm
            text-cyan-300
            ">
              AI Powered Biological Analysis
            </div>


          </section>





          {/* Metadata */}


          <section className="
          grid
          gap-6
          md:grid-cols-3
          ">


            <InfoCard
              title="Chromosome"
              value={gene.chromosome ?? "Unknown"}
            />


            <InfoCard
              title="Entrez ID"
              value={gene.entrez_id ?? "Unknown"}
            />


            <InfoCard
              title="Taxonomy ID"
              value={
                gene.taxid
                ? String(gene.taxid)
                : "Unknown"
              }
            />


          </section>





          {/* AI Insights */}


          {aiInsights && (

            <AIInsightsCard
              insights={aiInsights}
            />

          )}




          {/* Resources */}


          <section
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/10
          p-8
          backdrop-blur-xl
          ">


            <h2 className="
            text-3xl
            font-bold
            text-white
            ">
              Scientific Resources
            </h2>


            <div className="
            mt-6
            flex
            flex-wrap
            gap-4
            ">


              <ExternalLink
                label="NCBI"
                url={gene.links.ncbi}
              />


              <ExternalLink
                label="Ensembl"
                url={gene.links.ensembl}
              />


              <ExternalLink
                label="UniProt"
                url={gene.links.uniprot}
              />


            </div>


          </section>



        </div>

      )}



      </main>


      <Footer />


    </div>

  );

}




interface InfoCardProps{
  title:string;
  value:string;
}


function InfoCard({
  title,
  value
}:InfoCardProps){


return (

<div
className="
rounded-2xl
border
border-white/10
bg-white/10
p-6
backdrop-blur-xl
"
>

<p className="text-sm text-slate-400">
{title}
</p>


<p className="
mt-3
text-2xl
font-bold
text-white
">
{value}
</p>


</div>

);

}





interface ExternalLinkProps{
label:string;
url:string;
}


function ExternalLink({
label,
url
}:ExternalLinkProps){


return (

<a
href={url}
target="_blank"
rel="noopener noreferrer"

className="
rounded-xl
bg-blue-600
px-6
py-3
font-semibold
text-white
transition
hover:bg-blue-700
"
>

{label}

</a>

);

}



export default GeneDetailsPage;