from typing import Any

from fastapi import HTTPException

from app.clients.mygene_client import mygene_client


class GeneService:
    """Business logic for gene operations."""

    async def get_gene(self, symbol: str) -> dict[str, Any]:
        symbol = symbol.strip().upper()

        if not symbol:
            raise HTTPException(
                status_code=400,
                detail="Gene symbol cannot be empty.",
            )

        data = await mygene_client.search_gene(symbol)

        hits = data.get("hits", [])

        if not hits:
            raise HTTPException(
                status_code=404,
                detail=f"Gene '{symbol}' not found.",
            )

        gene = hits[0]

        return {
            "symbol": gene.get("symbol"),
            "name": gene.get("name"),
            "summary": gene.get("summary"),
            "entrez_id": gene.get("_id"),
            "chromosome": gene.get("chrom"),
            "taxid": gene.get("taxid"),
        }


gene_service = GeneService()