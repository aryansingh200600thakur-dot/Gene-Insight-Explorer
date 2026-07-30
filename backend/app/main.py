from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.gene import router as gene_router

app = FastAPI(
    title="Gene Insight Explorer API",
    version="1.0.0",
)

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://gene-insight-explorer.vercel.app",  # Replace after Vercel deployment if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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