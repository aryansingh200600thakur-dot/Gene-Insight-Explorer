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
  ensembl_id: string | null;
  uniprot_id: string | null;
  chromosome: string | null;
  taxid: number | null;
  gene_type: string | null;
  aliases: string[];
  genomic_start: number | null;
  genomic_end: number | null;
  strand: number | null;
  links: GeneLinks;
}

export async function getGene(symbol: string): Promise<GeneResponse> {
  try {
    const response = await api.get<GeneResponse>(`/api/genes/${encodeURIComponent(symbol)}`);
    return response.data;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "response" in error) {
      const status = (error as { response?: { status?: number } }).response?.status;
      if (status === 404) throw new Error("Gene not found. Please check the symbol and try again.");
      if (status === 503) throw new Error("The biological data service is temporarily unavailable. Please retry in a moment.");
    }
    if (typeof error === "object" && error !== null && "code" in error) {
      const code = (error as { code?: string }).code;
      if (code === "ECONNABORTED") throw new Error("The request timed out. Please try again.");
    }
    if (error instanceof TypeError) throw new Error("Unable to connect to the gene service.");
    throw new Error("Something went wrong while loading the gene profile.");
  }
}
