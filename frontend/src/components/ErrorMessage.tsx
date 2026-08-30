import { AlertTriangle, Search } from "lucide-react";

interface Props { message: string; }

export default function ErrorMessage({ message }: Props) {
  return <div className="error-panel">
    <div className="error-icon"><AlertTriangle size={24} /></div>
    <span className="section-kicker"><Search size={13} /> SEARCH RESULT</span>
    <h2>We couldn't load that gene.</h2>
    <p>{message}</p>
    <div className="error-examples"><span>Try</span><b>TP53</b><b>BRCA1</b><b>EGFR</b><b>MYC</b></div>
  </div>;
}
