from pydantic import BaseModel


class GeneResponse(BaseModel):
    symbol: str | None = None
    name: str | None = None
    summary: str | None = None
    entrez_id: str | None = None
    chromosome: str | None = None
    taxid: int | None = None