export interface GeneLinks {
  ncbi: string;
  ensembl: string;
  uniprot: string;
}

export interface Gene {
  symbol: string | null;
  name: string | null;
  summary: string | null;
  entrez_id: string | null;
  chromosome: string | null;
  taxid: number | null;
  links: GeneLinks;
}