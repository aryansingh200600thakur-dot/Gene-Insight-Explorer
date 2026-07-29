from fastapi import FastAPI

from app.api.gene import router as gene_router

app = FastAPI(
    title="Gene Insight Explorer API",
    version="1.0.0",
)

app.include_router(gene_router)


@app.get("/")
async def root():
    return {
        "message": "Gene Insight Explorer API",
        "status": "running",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
    }