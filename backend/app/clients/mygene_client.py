from typing import Any

import httpx

from app.core.config import settings


class MyGeneClient:
    """Client for the MyGene.info gene API."""

    def __init__(self) -> None:
        self.base_url = str(settings.mygene_base_url).rstrip("/")
        self.timeout = settings.request_timeout

    async def search_gene(self, symbol: str) -> dict[str, Any]:
        params = {
            "q": f"symbol:{symbol}",
            "species": "human",
            "size": 1,
            "fields": ",".join([
                "symbol", "name", "summary", "entrezgene", "taxid",
                "type_of_gene", "alias", "genomic_pos", "ensembl", "uniprot",
            ]),
        }

        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.get(f"{self.base_url}/query", params=params)
                response.raise_for_status()
                return response.json()
        except httpx.TimeoutException as exc:
            raise RuntimeError("The gene database took too long to respond.") from exc
        except httpx.HTTPError as exc:
            raise RuntimeError("The gene database is temporarily unavailable.") from exc


mygene_client = MyGeneClient()
