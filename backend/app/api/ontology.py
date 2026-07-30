from fastapi import APIRouter

from app.schemas.ontology import OntologyResponse
from app.services.ontology_service import ontology_service

router = APIRouter(
    prefix="/api/ontology",
    tags=["Gene Ontology"],
)


@router.get("/{symbol}", response_model=OntologyResponse)
async def get_gene_ontology(symbol: str):
    return await ontology_service.get_gene_ontology(symbol)