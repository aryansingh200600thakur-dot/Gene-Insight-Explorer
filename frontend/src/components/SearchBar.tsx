import useGeneSearch from "../hooks/useGeneSearch";


function SearchBar() {

  const {
    symbol,
    setSymbol,
    error,
    handleSubmit,
  } = useGeneSearch();


  return (

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row"
    >

      <div className="flex-1">

        <input
          type="text"
          value={symbol}
          onChange={(event) =>
            setSymbol(event.target.value)
          }
          placeholder="Search a gene (e.g. TP53, BRCA1)"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />


        {error && (

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>

        )}

      </div>


      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Search
      </button>


    </form>

  );
}


export default SearchBar;