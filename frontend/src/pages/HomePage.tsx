import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import StatisticsSection from "../components/StatisticsSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />

      <StatisticsSection />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Fast Gene Search"
            description="Search human genes quickly using official symbols such as TP53, BRCA1, EGFR, and more."
          />

          <FeatureCard
            title="Trusted Data"
            description="Gene information is retrieved through our backend from the MyGene.info service for consistent and reliable results."
          />

          <FeatureCard
            title="Responsive Design"
            description="A clean interface that works smoothly on desktop, tablet, and mobile devices."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;