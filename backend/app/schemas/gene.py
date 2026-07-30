from pydantic import BaseModel, HttpUrl


class GeneLinks(BaseModel):
    ncbi: HttpUrl
    ensembl: HttpUrl
    uniprot: HttpUrl


class GeneResponse(BaseModel):
    # Basic Information
    symbol: str | None = None
    name: str | None = None
    summary: str | None = None

    # Identifiers
    entrez_id: str | None = None
    ensembl_id: str | None = None
    uniprot_id: str | None = None

    # Biological Information
    chromosome: str | None = None
    taxid: int | None = None
    gene_type: str | None = None
    aliases: list[str] = []

    # Genomic Coordinates
    genomic_start: int | None = None
    genomic_end: int | None = None
    strand: int | None = None

    # External Resources
    links: GeneLinks