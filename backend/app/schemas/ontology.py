from pydantic import BaseModel


class GOTerm(BaseModel):
    id: str
    name: str


class OntologyResponse(BaseModel):
    biological_process: list[GOTerm]
    molecular_function: list[GOTerm]
    cellular_component: list[GOTerm]