import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
      <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
        Version 1.0
      </span>

      <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
        Gene Insight Explorer
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Search human genes and explore curated biological information powered by
        MyGene.info through a fast, modern, and responsive interface.
      </p>

      <div className="mt-10 w-full max-w-2xl">
        <SearchBar />
      </div>
    </section>
  );
}

export default Hero;