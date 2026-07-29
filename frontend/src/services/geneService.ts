import api from "./api";

export interface GeneLinks {
  ncbi: string;
  ensembl: string;
  uniprot: string;
}

export interface GeneResponse {
  symbol: string | null;
  name: string | null;
  summary: string | null;
  entrez_id: string | null;
  chromosome: string | null;
  taxid: number | null;
  links: GeneLinks;
}

export async function getGene(
  symbol: string
): Promise<GeneResponse> {
  const response = await api.get<GeneResponse>(
    `/api/genes/${symbol}`
  );

  return response.data;
}