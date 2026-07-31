# 🧬 Gene Insight Explorer

<p align="center">
  <img src="https://github.com/user-attachments/assets/e7f7c864-a1ce-4a2b-bed5-2246b2859305" alt="Gene Insight Explorer Banner" width="100%">
</p>

<h2 align="center">
AI-Powered Human Gene Exploration Platform
</h2>

<p align="center">
Building AI-powered solutions at the intersection of Bioinformatics and Software Engineering.
</p>

<p align="center">

<a href="https://gene-insight-explorer.vercel.app/">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-success?style=for-the-badge">
</a>

<a href="https://github.com/aryansingh200600thakur-dot/Gene-Insight-Explorer">
<img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github">
</a>

<a href="https://gene-insight-explorer.onrender.com/docs">
<img src="https://img.shields.io/badge/API-Documentation-009688?style=for-the-badge&logo=fastapi">
</a>

</p>

<p align="center">

<img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&style=flat-square">

<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&style=flat-square">

<img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&style=flat-square">

<img src="https://img.shields.io/badge/Python-3776AB?logo=python&style=flat-square">

<img src="https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&style=flat-square">

<img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&style=flat-square">

<img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&style=flat-square">

<img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=flat-square">

</p>

---

# 📖 Overview

Gene Insight Explorer is a modern full-stack bioinformatics platform that enables users to explore human genes through an intuitive web interface.

The application combines trusted biological databases with AI-assisted biological interpretation to simplify genomic exploration for students, researchers, educators, and biotechnology enthusiasts.

Instead of searching across multiple resources, users can retrieve gene information, identifiers, genomic coordinates, chromosome details, and AI-generated biological insights from a single platform.

---

# ✨ Key Features

### 🧬 Human Gene Search

Search thousands of human genes using official gene symbols.

Examples:

- TP53
- BRCA1
- EGFR
- MYC
- KRAS

---

### 🤖 AI Biological Insights

Generate AI-assisted biological interpretations to simplify complex genomic information.

---

### 🌍 Scientific Database Integration

Integrated with trusted biological resources including:

- MyGene.info
- NCBI Gene
- Ensembl
- UniProt

---

### 📍 Comprehensive Gene Information

Retrieve

- Gene Summary
- Gene Name
- Chromosome
- Entrez ID
- Ensembl ID
- UniProt ID
- Taxonomy ID
- Gene Type
- Genomic Coordinates

---

### 🎨 Modern User Experience

- Responsive Design
- Premium UI
- Glassmorphism
- Smooth Animations
- Interactive Components
- Fast Navigation

---

# 🏗️ System Architecture

```
                User

                  │

                  ▼

      React + TypeScript Frontend

                  │

          Axios REST Requests

                  │

                  ▼

         FastAPI Backend (Python)

                  │

        ┌─────────┼─────────┐

        ▼         ▼         ▼

   MyGene.info   AI API   External Resources

                  │

                  ▼

           Processed Gene Data

                  │

                  ▼

        Interactive Web Interface
```

---

# 🛠️ Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios

---

## Backend

- FastAPI
- Python
- HTTPX
- Pydantic

---

## Deployment

Frontend

- Vercel

Backend

- Render

---

# 🔬 Scientific Data Sources

| Database | Purpose |
|-----------|---------|
| MyGene.info | Gene Information |
| NCBI | Official Gene Resources |
| Ensembl | Genomic Coordinates |
| UniProt | Protein Information |

---

# 📂 Project Structure

```
Gene-Insight-Explorer

├── frontend
│
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── assets
│   └── App.tsx
│
├── backend
│
│   ├── api
│   ├── clients
│   ├── services
│   ├── schemas
│   └── main.py
│
└── README.md
```

---

# 🚀 Live Application

### 🌐 Frontend

https://gene-insight-explorer.vercel.app/

---

### ⚙️ Backend API

https://gene-insight-explorer.onrender.com

---

### 📚 API Documentation

https://gene-insight-explorer.onrender.com/docs

---

# ⚙️ Local Installation

## Clone Repository

```bash
git clone https://github.com/aryansingh200600thakur-dot/Gene-Insight-Explorer.git
```

Move into the project

```bash
cd Gene-Insight-Explorer
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# 🌍 Environment Variables

Frontend

```
VITE_API_URL=http://127.0.0.1:8000
```

Production

```
VITE_API_URL=https://gene-insight-explorer.onrender.com
```

---

# 📸 Screenshots

## 🏠 Homepage

> Add Homepage Screenshot

---

## 🔍 Gene Search

> Add TP53 Search Screenshot

---

## 🤖 AI Insights

> Add AI Insights Screenshot

---

## 📊 Gene Information

> Add Gene Details Screenshot

---

# 🚀 Future Roadmap

- Disease-Gene Association Explorer
- Gene Interaction Network
- Biological Pathway Visualization
- Mutation Explorer
- PDF Report Export
- Gene Comparison
- AI Chat Assistant
- Advanced Biological Analytics

---

# 👨‍💻 Developer

## Aryan Singh

**B.Tech – Genetic Engineering**

**Sharda University**

Building AI-powered solutions at the intersection of Bioinformatics and Software Engineering.

### Connect With Me

**LinkedIn**

https://linkedin.com/in/aryans18

**GitHub**

https://github.com/aryansingh200600thakur-dot

---

# 🤝 Contributing

Contributions, ideas, feature requests, and bug reports are welcome.

If you'd like to contribute:

1. Fork the repository

2. Create a new branch

3. Commit your changes

4. Open a Pull Request

---

# 📄 License

This project is released under the MIT License.

---

# ⭐ Support

If you found this project useful,

⭐ Star this repository

🍴 Fork the project

💬 Share your feedback

---

<p align="center">

🧬 Built with React • FastAPI • Python • TypeScript

AI × Bioinformatics × Software Engineering

</p>
