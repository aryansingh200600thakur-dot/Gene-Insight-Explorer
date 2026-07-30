from app.services.gene_service import gene_service
from app.services.ontology_service import ontology_service


class AIService:
    """
    Generates structured AI insights from gene information
    and Gene Ontology annotations.

    The response format remains stable so that the frontend
    does not need to change if this service is later replaced
    by an LLM.
    """

    async def generate_insights(self, symbol: str):

        gene = await gene_service.get_gene(symbol)
        ontology = await ontology_service.get_gene_ontology(symbol)

        gene_symbol = gene.get("symbol") or symbol.upper()
        gene_name = gene.get("name") or "Unknown gene"
        summary = gene.get("summary") or "No biological summary available."

        biological_process = ontology.get("biological_process", [])
        molecular_function = ontology.get("molecular_function", [])
        cellular_component = ontology.get("cellular_component", [])

        def first_terms(items: list[dict], limit: int = 3) -> str:
            names = [item["name"] for item in items[:limit]]

            if not names:
                return "No curated annotations available."

            return ", ".join(names)

        overview = (
            f"{gene_symbol} ({gene_name}) is a human gene. "
            f"{summary}"
        )

        biological_role = (
            f"Gene Ontology annotations indicate involvement in "
            f"{first_terms(biological_process)}. "
            f"Molecular functions include "
            f"{first_terms(molecular_function)}."
        )

        disease_relevance = (
            f"Although disease associations depend on biological context, "
            f"changes affecting {gene_symbol} may influence normal cellular "
            f"processes through its annotated biological functions."
        )

        therapeutic_potential = (
            f"Understanding the biological role and molecular functions of "
            f"{gene_symbol} can support future biomarker discovery and "
            f"therapeutic research."
        )

        research_highlights = (
            f"Current Gene Ontology annotations place "
            f"{gene_symbol} within "
            f"{first_terms(cellular_component)}. "
            f"These curated annotations provide useful context for ongoing "
            f"genetics and molecular biology research."
        )

        return {
            "overview": overview,
            "biological_role": biological_role,
            "disease_relevance": disease_relevance,
            "therapeutic_potential": therapeutic_potential,
            "research_highlights": research_highlights,
        }


ai_service = AIService()