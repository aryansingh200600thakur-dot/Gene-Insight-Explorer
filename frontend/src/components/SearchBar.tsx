import { ArrowRight, Dna, Search } from "lucide-react";
import useGeneSearch from "../hooks/useGeneSearch";

const examples = ["TP53", "BRCA1", "EGFR", "MYC", "CFTR"];

export default function SearchBar() {
  const { symbol, setSymbol, error, handleSubmit } = useGeneSearch();

  return (
    <div className="search-module">
      <form onSubmit={handleSubmit} className="search-box">
        <div className="search-input-wrap">
          <Dna size={21} />
          <input
            aria-label="Gene symbol"
            value={symbol}
            onChange={(event) => setSymbol(event.target.value)}
            placeholder="Enter a gene symbol — e.g. TP53"
            autoComplete="off"
          />
          {symbol && <span className="search-status">READY</span>}
        </div>
        <button type="submit" className="primary-button">
          Analyze <ArrowRight size={17} />
        </button>
      </form>
      <div className="search-examples">
        <span>Try a gene</span>
        {examples.map((gene) => (
          <button key={gene} type="button" onClick={() => setSymbol(gene)}>
            <Search size={12} /> {gene}
          </button>
        ))}
      </div>
      {error && <p className="search-error">{error}</p>}
    </div>
  );
}
