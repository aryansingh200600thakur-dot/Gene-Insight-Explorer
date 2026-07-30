import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-indigo-300 blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">

        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          🚀 Version 2.0
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
          Explore Human Genes with
          <span className="block text-blue-600">
            AI-Powered Biological Insights
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Search thousands of human genes, understand their biological
          functions, explore Gene Ontology annotations, and discover
          AI-generated scientific insights—all in one modern platform.
        </p>

        <div className="mt-12 w-full max-w-2xl">
          <SearchBar />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <div className="rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            🧬 Human Genes
          </div>

          <div className="rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            🤖 AI Insights
          </div>

          <div className="rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            📚 Gene Ontology
          </div>

          <div className="rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            ⚡ Fast Search
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;