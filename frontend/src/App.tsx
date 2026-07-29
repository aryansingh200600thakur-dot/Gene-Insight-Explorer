import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GeneDetailsPage from "./pages/GeneDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gene/:symbol" element={<GeneDetailsPage />} />
    </Routes>
  );
}

export default App;