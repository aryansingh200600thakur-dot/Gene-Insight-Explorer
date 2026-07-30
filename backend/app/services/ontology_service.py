from collections import defaultdict
from typing import Any

from app.clients.quickgo_client import quickgo_client


class OntologyService:
    """Business logic for Gene Ontology."""

    async def get_gene_ontology(self, symbol: str) -> dict[str, list[dict[str, str]]]:
        data = await quickgo_client.get_go_terms(symbol)

        grouped: dict[str, dict[str, str]] = {
            "biological_process": {},
            "molecular_function": {},
            "cellular_component": {},
        }

        for annotation in data.get("results", []):
            go_id = annotation.get("goId")
            go_name = annotation.get("goName")
            aspect = annotation.get("goAspect")

            if not go_id or not go_name or not aspect:
                continue

            if aspect == "biological_process":
                grouped["biological_process"][go_id] = go_name

            elif aspect == "molecular_function":
                grouped["molecular_function"][go_id] = go_name

            elif aspect == "cellular_component":
                grouped["cellular_component"][go_id] = go_name

        return {
            key: [
                {"id": go_id, "name": name}
                for go_id, name in sorted(values.items())
            ]
            for key, values in grouped.items()
        }


ontology_service = OntologyService()