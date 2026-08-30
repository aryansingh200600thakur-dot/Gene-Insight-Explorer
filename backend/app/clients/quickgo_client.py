from typing import Any
import httpx


class QuickGOClient:
    BASE_URL = "https://www.ebi.ac.uk/QuickGO/services"

    async def get_go_terms(self, gene_symbol: str) -> dict[str, Any]:
        url = f"{self.BASE_URL}/annotation/search"
        params = {
            "geneProductSymbol": gene_symbol,
            "taxonId": 9606,
            "limit": 100,
        }

        try:
            async with httpx.AsyncClient(timeout=20) as client:
                response = await client.get(
                    url,
                    params=params,
                    headers={"Accept": "application/json"},
                )
                if response.status_code == 404:
                    return {"results": []}
                response.raise_for_status()
                return response.json()
        except httpx.TimeoutException:
            return {"results": []}
        except httpx.HTTPError:
            return {"results": []}


quickgo_client = QuickGOClient()
