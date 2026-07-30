import api from "./api";

export interface GeneLinks {
  ncbi: string;
  ensembl: string;
  uniprot: string;
}

export interface GeneResponse {
  // Basic Information
  symbol: string | null;
  name: string | null;
  summary: string | null;

  // Identifiers
  entrez_id: string | null;
  ensembl_id: string | null;
  uniprot_id: string | null;

  // Biological Information
  chromosome: string | null;
  taxid: number | null;
  gene_type: string | null;
  aliases: string[];

  // Genomic Coordinates
  genomic_start: number | null;
  genomic_end: number | null;
  strand: number | null;

  // External Links
  links: GeneLinks;
}

export async function getGene(
  symbol: string
): Promise<GeneResponse> {
  try {
    const response = await api.get<GeneResponse>(
      `/api/genes/${symbol}`
    );

    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error(
        "Gene not found. Please check the symbol and try again."
      );
    }

    if (error.code === "ECONNABORTED") {
      throw new Error(
        "Request timed out. Please try again."
      );
    }

    if (!error.response) {
      throw new Error(
        "Unable to connect to the server."
      );
    }

    throw new Error(
      "Something went wrong. Please try again later."
    );
  }
}