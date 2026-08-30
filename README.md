# Gene Insight Explorer

**Gene Insight Explorer 3.0** is a research-oriented web workspace for exploring human genes, genomic metadata, Gene Ontology annotations and structured biological interpretation.

## What changed in 3.0

- Premium dark scientific interface with responsive layouts and micro-interactions.
- Faster, clearer gene search experience with example targets.
- Research/Overview mode on gene profiles.
- Structured gene profile with identifiers, genomic location and aliases.
- Conceptual gene-to-context relationship map.
- Gene Ontology panels for biological process, molecular function and cellular component.
- Source-layer cards linking to NCBI, Ensembl and UniProt records.
- Resilient loading and partial-failure handling: a missing AI or GO response no longer blocks the core gene profile.
- Improved backend error handling and CORS configuration through `FRONTEND_ORIGIN`.
- Updated metadata, title, theme and accessibility-oriented UI labels.

## Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- FastAPI
- Python
- HTTPX

### Biological data services
- MyGene.info
- NCBI
- Ensembl
- QuickGO / Gene Ontology
- UniProt links

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` when the API is not running at `http://localhost:8000`.

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Production notes

The AI interpretation endpoint in the current codebase is a deterministic interpretation layer with curated responses for selected genes; it should not be described as a general-purpose generative AI model until a real model provider is integrated.

All AI/interpretation content should be verified against the linked source records and primary literature before research or clinical use.
