import { Boxes, CircleDot, GitBranch, Layers3 } from "lucide-react";
import type { GOTerm } from "../types/ontology";

interface Props { biologicalProcess: GOTerm[]; molecularFunction: GOTerm[]; cellularComponent: GOTerm[]; }

const groups = [
  { key: "biologicalProcess", title: "Biological process", icon: GitBranch },
  { key: "molecularFunction", title: "Molecular function", icon: CircleDot },
  { key: "cellularComponent", title: "Cellular component", icon: Boxes },
] as const;

export default function GeneOntologyCard({ biologicalProcess, molecularFunction, cellularComponent }: Props) {
  const values = { biologicalProcess, molecularFunction, cellularComponent };
  return (
    <section className="ontology-panel">
      <div className="panel-heading-row">
        <div><span className="section-kicker"><Layers3 size={14} /> ANNOTATION LAYER</span><h2>Gene Ontology</h2></div>
        <span className="count-badge">{biologicalProcess.length + molecularFunction.length + cellularComponent.length} annotations</span>
      </div>
      <div className="ontology-grid">
        {groups.map(({ key, title, icon: Icon }) => {
          const terms = values[key];
          return <div className="ontology-column" key={key}>
            <div className="ontology-column-head"><Icon size={17} /><h3>{title}</h3><span>{terms.length}</span></div>
            {terms.length === 0 ? <div className="empty-state">No annotations returned.</div> : <div className="term-list">{terms.slice(0, 10).map((term) => <div className="term" key={term.id}><strong>{term.name}</strong><span>{term.id}</span></div>)}</div>}
          </div>;
        })}
      </div>
    </section>
  );
}
