import httpx


ENSEMBL_URL = "https://rest.ensembl.org"


async def get_gene_location(symbol: str):

    async with httpx.AsyncClient(timeout=20) as client:

        response = await client.get(
            f"{ENSEMBL_URL}/lookup/symbol/homo_sapiens/{symbol}",
            headers={
                "Content-Type": "application/json"
            }
        )

        print("ENSEMBL STATUS:", response.status_code)

        data = response.json()

        print("ENSEMBL DATA:", data)


        return {
            "chromosome": data.get("seq_region_name"),
            "start": data.get("start"),
            "end": data.get("end"),
            "strand": data.get("strand"),
        }