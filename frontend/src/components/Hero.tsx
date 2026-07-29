import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

      <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
        Production MVP • Version 1.0
      </span>


      <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
        Explore Human Genes With Reliable Biological Insights
      </h1>


      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Search gene symbols and access essential biological information,
        genomic references, and trusted scientific resources through a
        clean and responsive research platform.
      </p>


      <div className="mt-10 w-full max-w-2xl">
        <SearchBar />
      </div>


      <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-slate-500">

        <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
          🧬 Human Gene Data
        </span>


        <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
          🔬 Research Resources
        </span>


        <span className="rounded-lg bg-white px-4 py-2 shadow-sm">
          🌐 Responsive Platform
        </span>

      </div>

    </section>
  );
}

export default Hero;