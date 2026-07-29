import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useGeneSearch() {
  const [symbol, setSymbol] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedSymbol = symbol.trim().toUpperCase();

    if (!trimmedSymbol) {
      return;
    }

    navigate(`/gene/${trimmedSymbol}`);
  };

  return {
    symbol,
    setSymbol,
    handleSubmit,
  };
}

export default useGeneSearch;