from fastapi import APIRouter

from app.schemas.gene import GeneResponse
from app.services.gene_service import gene_service

router = APIRouter(
    prefix="/api/genes",
    tags=["Genes"],
)


@router.get("/{symbol}", response_model=GeneResponse)
async def get_gene(symbol: str):
    return await gene_service.get_gene(symbol)