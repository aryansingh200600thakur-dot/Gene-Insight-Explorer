from typing import Any

from fastapi import HTTPException

from app.clients.mygene_client import mygene_client


class GeneService:
    """Normalize public gene data into the application's stable schema."""

    async def get_gene(self, symbol: str) -> dict[str, Any]:
        symbol = symbol.strip().upper()
        if not symbol:
            raise HTTPException(status_code=400, detail="Gene symbol cannot be empty.")

        try:
            data = await mygene_client.search_gene(symbol)
        except RuntimeError as exc:
            raise HTTPException(status_code=503, detail=str(exc)) from exc

        hits = data.get("hits", [])
        if not hits:
            raise HTTPException(status_code=404, detail=f"Gene '{symbol}' not found.")

        gene = hits[0]
        entrez_id = str(gene.get("_id", "")) or None
        gene_symbol = gene.get("symbol") or symbol

        ensembl = gene.get("ensembl")
        if isinstance(ensembl, dict):
            ensembl_id = ensembl.get("gene")
        elif isinstance(ensembl, list) and ensembl:
            ensembl_id = ensembl[0].get("gene")
        else:
            ensembl_id = None

        uniprot = gene.get("uniprot")
        uniprot_id = None
        if isinstance(uniprot, dict):
            swissprot = uniprot.get("Swiss-Prot")
            uniprot_id = swissprot[0] if isinstance(swissprot, list) and swissprot else swissprot

        genomic = gene.get("genomic_pos")
        location = genomic[0] if isinstance(genomic, list) and genomic else genomic if isinstance(genomic, dict) else {}
        chromosome = location.get("chr") or gene.get("chrom")

        aliases = gene.get("alias", [])
        if isinstance(aliases, str):
            aliases = [aliases]
        elif not isinstance(aliases, list):
            aliases = []

        return {
            "symbol": gene_symbol,
            "name": gene.get("name"),
            "summary": gene.get("summary"),
            "entrez_id": entrez_id,
            "ensembl_id": ensembl_id,
            "uniprot_id": uniprot_id,
            "chromosome": chromosome,
            "taxid": gene.get("taxid"),
            "gene_type": gene.get("type_of_gene"),
            "aliases": aliases,
            "genomic_start": location.get("start"),
            "genomic_end": location.get("end"),
            "strand": location.get("strand"),
            "links": {
                "ncbi": f"https://www.ncbi.nlm.nih.gov/gene/{entrez_id}" if entrez_id else f"https://www.ncbi.nlm.nih.gov/gene/?term={gene_symbol}",
                "ensembl": f"https://www.ensembl.org/Homo_sapiens/Gene/Summary?g={gene_symbol}",
                "uniprot": f"https://www.uniprot.org/uniprotkb?query={gene_symbol}",
            },
        }


gene_service = GeneService()
