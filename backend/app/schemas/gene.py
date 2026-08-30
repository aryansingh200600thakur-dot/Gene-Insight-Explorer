from pydantic import BaseModel, HttpUrl, Field


class GeneLinks(BaseModel):
    ncbi: HttpUrl
    ensembl: HttpUrl
    uniprot: HttpUrl


class GeneResponse(BaseModel):
    symbol: str | None = None
    name: str | None = None
    summary: str | None = None
    entrez_id: str | None = None
    ensembl_id: str | None = None
    uniprot_id: str | None = None
    chromosome: str | None = None
    taxid: int | None = None
    gene_type: str | None = None
    aliases: list[str] = Field(default_factory=list)
    genomic_start: int | None = None
    genomic_end: int | None = None
    strand: int | None = None
    links: GeneLinks
