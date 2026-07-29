import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import { getGene } from "../services/geneService";
import type { GeneResponse } from "../services/geneService";


function GeneDetailsPage() {
  const { symbol } = useParams<{ symbol: string }>();

  const [gene, setGene] = useState<GeneResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    async function fetchGene() {
      if (!symbol) {
        setError("No gene symbol provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await getGene(symbol);

        setGene(data);

      } catch (err) {
        console.error(err);

        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Unexpected error occurred");
        }

        
      }
    }

    fetchGene();

  }, [symbol]);


  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />


      <main className="mx-auto max-w-6xl px-6 py-12">


        {loading && (
          <LoadingSpinner />
        )}


        {error && (
          <ErrorMessage message={error} />
        )}



        {gene && (

          <div className="space-y-8">


            {/* Gene Header */}

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

              <h1 className="text-4xl font-bold text-slate-900">
                {gene.symbol}
              </h1>


              <p className="mt-3 text-xl text-slate-600">
                {gene.name ?? "Name unavailable"}
              </p>

            </section>



            {/* Summary */}

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-semibold text-slate-900">
                Biological Summary
              </h2>


              <p className="mt-4 leading-8 text-slate-600">
                {gene.summary ??
                  "No biological summary available."}
              </p>

            </section>




            {/* Metadata Cards */}

            <section className="grid gap-6 md:grid-cols-3">

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





            {/* External Links */}

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">


              <h2 className="text-2xl font-semibold text-slate-900">
                External Resources
              </h2>



              <div className="mt-6 flex flex-wrap gap-4">


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





interface InfoCardProps {
  title: string;
  value: string;
}


function InfoCard({
  title,
  value,
}: InfoCardProps) {

  return (

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>


      <p className="mt-2 text-xl font-semibold text-slate-900">
        {value}
      </p>

    </div>

  );
}






interface ExternalLinkProps {
  label: string;
  url: string;
}


function ExternalLink({
  label,
  url,
}: ExternalLinkProps) {

  return (

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
    >

      {label}

    </a>

  );
}



export default GeneDetailsPage;