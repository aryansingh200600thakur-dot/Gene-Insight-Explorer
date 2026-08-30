import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function useGeneSearch() {
  const [symbol, setSymbol] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedSymbol = symbol.trim().toUpperCase();
    if (!trimmedSymbol) {
      setError("Enter a gene symbol to begin.");
      return;
    }
    if (!/^[A-Z0-9-]+$/.test(trimmedSymbol)) {
      setError("Use an official-style gene symbol containing letters, numbers or hyphens.");
      return;
    }
    setError("");
    navigate(`/gene/${encodeURIComponent(trimmedSymbol)}`);
  };

  return { symbol, setSymbol, error, handleSubmit };
}
