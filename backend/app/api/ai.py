from fastapi import APIRouter

from app.schemas.ai import AIInsightsResponse
from app.services.ai_service import ai_service

router = APIRouter(
    prefix="/api/ai",
    tags=["AI"],
)


@router.get("/{symbol}", response_model=AIInsightsResponse)
async def get_ai_insights(symbol: str):
    return await ai_service.generate_insights(symbol)