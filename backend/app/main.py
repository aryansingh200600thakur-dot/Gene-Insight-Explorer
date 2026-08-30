import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.ai import router as ai_router
from app.api.gene import router as gene_router
from app.api.ontology import router as ontology_router

app = FastAPI(
    title="Gene Insight Explorer API",
    version="3.0.0",
    description="Research-oriented API for human gene exploration and biological interpretation.",
)

origins = {
    "http://localhost:5173",
    "http://localhost:4173",
    "https://gene-insight-explorer.vercel.app",
}
extra_origin = os.getenv("FRONTEND_ORIGIN")
if extra_origin:
    origins.add(extra_origin.rstrip("/"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(origins),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(gene_router)
app.include_router(ontology_router)
app.include_router(ai_router)


@app.get("/")
async def root():
    return {"message": "Gene Insight Explorer API", "status": "running", "version": "3.0.0"}


@app.get("/health")
async def health():
    return {"status": "healthy", "service": "gene-insight-explorer-api"}
