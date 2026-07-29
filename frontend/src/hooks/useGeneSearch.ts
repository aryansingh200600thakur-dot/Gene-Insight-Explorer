import { useState } from "react";
import { useNavigate } from "react-router-dom";


function useGeneSearch() {

  const [symbol, setSymbol] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    const trimmedSymbol = symbol.trim().toUpperCase();


    if (!trimmedSymbol) {

      setError(
        "Please enter a gene symbol."
      );

      return;
    }


    const genePattern = /^[A-Z0-9-]+$/;


    if (!genePattern.test(trimmedSymbol)) {

      setError(
        "Invalid gene symbol format."
      );

      return;
    }


    setError("");

    navigate(`/gene/${trimmedSymbol}`);
  };


  return {
    symbol,
    setSymbol,
    error,
    handleSubmit,
  };
}


export default useGeneSearch;