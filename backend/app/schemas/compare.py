from pydantic import BaseModel

from app.schemas.gene import GeneResponse
from app.schemas.ai import AIInsightsResponse


class GeneComparisonResponse(BaseModel):
    left: GeneResponse
    right: GeneResponse

    left_ai: AIInsightsResponse
    right_ai: AIInsightsResponse