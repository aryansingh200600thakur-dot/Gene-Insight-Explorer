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

        entrez_id = str(gene.get("_id", ""))
        gene_symbol = gene.get("symbol", symbol)

        return {
            "symbol": gene_symbol,
            "name": gene.get("name"),
            "summary": gene.get("summary"),
            "entrez_id": entrez_id,
            "chromosome": gene.get("chrom"),
            "taxid": gene.get("taxid"),

            "links": {
                "ncbi": f"https://www.ncbi.nlm.nih.gov/gene/{entrez_id}",
                "ensembl": (
                    f"https://www.ensembl.org/Homo_sapiens/"
                    f"Gene/Summary?g={gene_symbol}"
                ),
                "uniprot": (
                    f"https://www.uniprot.org/uniprotkb"
                    f"?query={gene_symbol}"
                ),
            },
        }


gene_service = GeneService()