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

        # -----------------------------
        # Ensembl ID
        # -----------------------------
        ensembl = gene.get("ensembl")
        ensembl_id = None

        if isinstance(ensembl, dict):
            ensembl_id = ensembl.get("gene")

        elif isinstance(ensembl, list) and len(ensembl) > 0:
            ensembl_id = ensembl[0].get("gene")

        # -----------------------------
        # UniProt ID
        # -----------------------------
        uniprot = gene.get("uniprot")
        uniprot_id = None

        if isinstance(uniprot, dict):
            swissprot = uniprot.get("Swiss-Prot")

            if isinstance(swissprot, list):
                uniprot_id = swissprot[0] if swissprot else None
            else:
                uniprot_id = swissprot

        # -----------------------------
        # Genomic Position
        # -----------------------------
        genomic = gene.get("genomic_pos")

        genomic_start = None
        genomic_end = None
        strand = None

        if isinstance(genomic, dict):
            genomic_start = genomic.get("start")
            genomic_end = genomic.get("end")
            strand = genomic.get("strand")

        elif isinstance(genomic, list) and len(genomic) > 0:
            genomic_start = genomic[0].get("start")
            genomic_end = genomic[0].get("end")
            strand = genomic[0].get("strand")

        return {
            # Basic Information
            "symbol": gene_symbol,
            "name": gene.get("name"),
            "summary": gene.get("summary"),

            # Identifiers
            "entrez_id": entrez_id,
            "ensembl_id": ensembl_id,
            "uniprot_id": uniprot_id,

            # Biological Information
            "chromosome": gene.get("chrom"),
            "taxid": gene.get("taxid"),
            "gene_type": gene.get("type_of_gene"),
            "aliases": gene.get("alias", []),

            # Genomic Coordinates
            "genomic_start": genomic_start,
            "genomic_end": genomic_end,
            "strand": strand,

            # External Links
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