import * as React from "react";
import type { GOTerm } from "../types/ontology";

interface GeneOntologyCardProps {
  biologicalProcess: GOTerm[];
  molecularFunction: GOTerm[];
  cellularComponent: GOTerm[];
}

interface SectionProps {
  title: string;
  icon: string;
  terms: GOTerm[];
}

function OntologySection({ title, icon, terms }: SectionProps) {
  if (terms.length === 0) {
    return React.createElement(
      "div",
      { className: "rounded-xl border border-slate-200 bg-slate-50 p-5" },
      React.createElement(
        "h3",
        { className: "mb-4 text-lg font-semibold text-slate-900" },
        icon + " " + title
      ),
      React.createElement(
        "p",
        { className: "text-sm text-slate-500" },
        "No annotations available."
      )
    );
  }

  return React.createElement(
    "div",
    { className: "rounded-xl border border-slate-200 bg-slate-50 p-5" },
    React.createElement(
      "h3",
      { className: "mb-4 text-lg font-semibold text-slate-900" },
      icon + " " + title
    ),
    React.createElement(
      "ul",
      { className: "space-y-3" },
      ...terms.map((term) =>
        React.createElement(
          "li",
          {
            key: term.id,
            className: "rounded-lg border border-slate-200 bg-white p-3",
          },
          React.createElement(
            "p",
            { className: "font-medium text-slate-900" },
            term.name
          ),
          React.createElement(
            "p",
            { className: "mt-1 text-xs text-slate-500" },
            term.id
          )
        )
      )
    )
  );
}

export default function GeneOntologyCard({
  biologicalProcess,
  molecularFunction,
  cellularComponent,
}: GeneOntologyCardProps) {
  return React.createElement(
    "section",
    { className: "rounded-2xl border border-slate-200 bg-white p-8 shadow-sm" },
    React.createElement(
      "h2",
      { className: "mb-8 text-3xl font-bold text-slate-900" },
      "🧬 Gene Ontology"
    ),
    React.createElement(
      "div",
      { className: "grid gap-6 lg:grid-cols-3" },
      React.createElement(OntologySection, {
        title: "Biological Process",
        icon: "⚙️",
        terms: biologicalProcess,
      }),
      React.createElement(OntologySection, {
        title: "Molecular Function",
        icon: "🧪",
        terms: molecularFunction,
      }),
      React.createElement(OntologySection, {
        title: "Cellular Component",
        icon: "🏠",
        terms: cellularComponent,
      })
    )
  );
}