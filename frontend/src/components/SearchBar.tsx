import { Search, Dna } from "lucide-react";
import useGeneSearch from "../hooks/useGeneSearch";


function SearchBar() {

  const {
    symbol,
    setSymbol,
    error,
    handleSubmit,
  } = useGeneSearch();


  const exampleGenes = [
    "TP53",
    "BRCA1",
    "EGFR"
  ];


  return (

    <div>

      <form
        onSubmit={handleSubmit}
        className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-white/20
        bg-white/10
        p-4
        shadow-xl
        backdrop-blur-xl
        sm:flex-row
        "
      >


        <div className="relative flex-1">


          <Dna
            size={22}
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-blue-500
            "
          />


          <input

            type="text"

            value={symbol}

            onChange={(event)=>
              setSymbol(event.target.value)
            }

            placeholder="Search gene e.g. TP53, BRCA1, EGFR"

            className="
            w-full
            rounded-xl
            bg-white
            py-3
            pl-12
            pr-4
            text-slate-900
            placeholder:text-slate-400
            outline-none
            focus:ring-2
            focus:ring-blue-500
            "

          />


        </div>



        <button

          type="submit"

          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-7
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          hover:scale-105
          "

        >

          <Search size={20}/>

          Analyze Gene

        </button>


      </form>




      <div className="
      mt-5
      flex
      flex-wrap
      justify-center
      gap-3
      ">


        <span className="text-sm text-slate-300">
          Try:
        </span>


        {exampleGenes.map((gene)=>(

          <button

          key={gene}

          onClick={()=>
            setSymbol(gene)
          }

          className="
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-1
          text-sm
          text-white
          transition
          hover:bg-white/20
          "

          >

            {gene}

          </button>

        ))}


      </div>



      {error && (

        <p className="
        mt-3
        text-center
        text-sm
        text-red-300
        ">
          {error}
        </p>

      )}



    </div>

  );
}


export default SearchBar;