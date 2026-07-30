from pydantic import BaseModel


class AIInsightsResponse(BaseModel):
    overview: str
    biological_role: str
    disease_relevance: str
    therapeutic_potential: str
    research_highlights: str