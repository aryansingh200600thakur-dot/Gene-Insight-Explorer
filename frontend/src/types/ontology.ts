export interface GOTerm {
  id: string;
  name: string;
}

export interface OntologyResponse {
  biological_process: GOTerm[];
  molecular_function: GOTerm[];
  cellular_component: GOTerm[];
}