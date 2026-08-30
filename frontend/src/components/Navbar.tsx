import { Dna, ExternalLink, Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/#platform" },
    { label: "How it works", href: "/#workflow" },
  ];

  return (
    <header className="site-nav">
      <div className="shell nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Dna size={20} /></span>
          <span>
            <strong>Gene Insight</strong>
            <em>Explorer</em>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={location.pathname === "/" && link.label === "Home" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/aryansingh200600thakur-dot/Gene-Insight-Explorer"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <Code2 size={15} /> GitHub <ExternalLink size={13} />
          </a>
        </nav>

        <div className="nav-actions">
          <Link to="/" className="nav-cta" onClick={() => setOpen(false)}>
            Analyze a gene <span>â†’</span>
          </Link>
          <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

