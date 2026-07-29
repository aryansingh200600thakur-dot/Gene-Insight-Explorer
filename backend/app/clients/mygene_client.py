from typing import Any

import httpx

from app.core.config import settings


class MyGeneClient:
    """Client for communicating with the MyGene.info API."""

    def __init__(self) -> None:
        self.base_url = str(settings.mygene_base_url)
        self.timeout = settings.request_timeout

    async def search_gene(self, symbol: str) -> dict[str, Any]:
        """
        Search for a gene by its official symbol.
        """

        params = {
            "q": f"symbol:{symbol}",
            "species": "human",
            "size": 1,
        }

        async with httpx.AsyncClient(timeout=self.timeout) as client:
            response = await client.get(
                f"{self.base_url}/query",
                params=params,
            )

            response.raise_for_status()

            return response.json()


mygene_client = MyGeneClient()