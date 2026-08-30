import api from "./api";
import type { OntologyResponse } from "../types/ontology";

export async function getOntology(symbol: string): Promise<OntologyResponse> {
  const response = await api.get<OntologyResponse>(`/api/ontology/${encodeURIComponent(symbol)}`);
  return response.data;
}
