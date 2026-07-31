from app.services.gene_service import gene_service


class AIService:
    """
    Generates AI insights using gene information.

    This version does not depend on Gene Ontology.
    """

    async def generate_insights(self, symbol: str):

        gene = await gene_service.get_gene(symbol)

        gene_symbol = gene.get("symbol") or symbol.upper()
        gene_name = gene.get("name") or "Unknown gene"
        summary = gene.get("summary") or "No biological summary available."
        gene_type = gene.get("gene_type") or "gene"

        overview = (
            f"{gene_symbol} ({gene_name}) is a human {gene_type}. "
            f"{summary}"
        )

        # -------- Known genes --------

        if gene_symbol == "TP53":

            biological_role = (
                "TP53 encodes the tumor suppressor protein p53, a critical regulator "
                "of DNA repair, cell-cycle arrest, apoptosis, and genomic stability."
            )

            disease_relevance = (
                "TP53 is one of the most frequently altered genes in human cancers. "
                "Loss of normal TP53 activity contributes to tumor development and "
                "is associated with hereditary cancer syndromes such as Li-Fraumeni syndrome."
            )

            therapeutic_potential = (
                "TP53 is an important target in cancer research. Therapeutic strategies "
                "include restoring p53 activity and targeting pathways affected by TP53 dysfunction."
            )

            research_highlights = (
                "TP53 is among the most extensively studied genes in oncology and molecular biology, "
                "making it central to research on genome stability and cancer."
            )

        elif gene_symbol in ["BRCA1", "BRCA2"]:

            biological_role = (
                f"{gene_symbol} plays an essential role in repairing DNA double-strand breaks "
                "through homologous recombination, helping maintain genome integrity."
            )

            disease_relevance = (
                f"Pathogenic variants in {gene_symbol} increase susceptibility to hereditary "
                "breast, ovarian, and several other cancers."
            )

            therapeutic_potential = (
                "Knowledge of BRCA status supports precision oncology, including the use of "
                "PARP inhibitor therapies in eligible patients."
            )

            research_highlights = (
                f"{gene_symbol} remains a major focus of cancer genetics and precision medicine research."
            )

        elif gene_symbol == "EGFR":

            biological_role = (
                "EGFR encodes a receptor tyrosine kinase involved in regulating cell growth, "
                "proliferation, differentiation, and survival."
            )

            disease_relevance = (
                "Alterations in EGFR are associated with several cancers, particularly non-small "
                "cell lung cancer."
            )

            therapeutic_potential = (
                "EGFR is an established therapeutic target with multiple approved targeted therapies."
            )

            research_highlights = (
                "EGFR continues to be extensively studied in precision oncology and targeted drug development."
            )

        else:

            biological_role = (
                f"{gene_symbol} is classified as a {gene_type}. "
                "Based on currently available gene information, it contributes to normal biological processes "
                "described in the reference databases."
            )

            disease_relevance = (
                f"Changes affecting {gene_symbol} may influence normal biological function. "
                "The clinical significance depends on the specific genetic variant and biological context."
            )

            therapeutic_potential = (
                f"Continued investigation of {gene_symbol} may improve understanding of disease mechanisms "
                "and support future therapeutic research."
            )

            research_highlights = (
                f"{gene_symbol} remains an active subject of genetics and molecular biology research. "
                "Researchers continue investigating its biological functions and potential clinical relevance."
            )

        return {
            "overview": overview,
            "biological_role": biological_role,
            "disease_relevance": disease_relevance,
            "therapeutic_potential": therapeutic_potential,
            "research_highlights": research_highlights,
        }


ai_service = AIService()