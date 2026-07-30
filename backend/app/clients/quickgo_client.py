from typing import Any

import httpx


class QuickGOClient:
    BASE_URL = "https://www.ebi.ac.uk/QuickGO/services"

    async def get_go_terms(self, gene_symbol: str) -> dict[str, Any]:
        """
        Fetch Gene Ontology annotations for a human gene.

        If QuickGO has no annotations for the gene,
        return an empty result instead of raising an exception.
        """

        url = (
            f"{self.BASE_URL}/annotation/search"
            f"?geneProductSymbol={gene_symbol}"
            f"&taxonId=9606"
            f"&limit=100"
        )

        headers = {
            "Accept": "application/json",
        }

        async with httpx.AsyncClient(timeout=20) as client:
            response = await client.get(url, headers=headers)

            # No annotations found
            if response.status_code == 404:
                return {"results": []}

            # Any other API error
            response.raise_for_status()

            return response.json()


quickgo_client = QuickGOClient()