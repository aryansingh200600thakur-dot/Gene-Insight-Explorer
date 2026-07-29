from pydantic import BaseModel, HttpUrl


class GeneLinks(BaseModel):
    ncbi: HttpUrl
    ensembl: HttpUrl
    uniprot: HttpUrl


class GeneResponse(BaseModel):
    symbol: str | None = None
    name: str | None = None
    summary: str | None = None
    entrez_id: str | None = None
    chromosome: str | None = None
    taxid: int | None = None
    links: GeneLinks