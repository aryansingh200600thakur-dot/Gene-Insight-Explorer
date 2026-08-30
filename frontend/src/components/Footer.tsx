import { Dna, Code2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark"><Dna size={19} /></span>
            <span><strong>Gene Insight</strong><em>Explorer</em></span>
          </div>
          <p>Explore. Understand. Discover.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/aryansingh200600thakur-dot/Gene-Insight-Explorer" target="_blank" rel="noreferrer"><Code2 size={15} /> Source code <ExternalLink size={12} /></a>
          <span>React Â· TypeScript Â· FastAPI Â· Python</span>
        </div>
      </div>
      <div className="shell footer-bottom"><span>Â© 2026 Gene Insight Explorer</span><span>For research & educational exploration.</span></div>
    </footer>
  );
}

