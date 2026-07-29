function SearchBar() {
  return (
    <form className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
      <input
        type="text"
        placeholder="Search a gene (e.g. TP53, BRCA1, EGFR)"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;