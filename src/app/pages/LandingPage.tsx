import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { CertificationPaths } from "../components/CertificationPaths";
import { Features } from "../components/Features";

export function LandingPage() {
  return (
    <div
      className="min-h-screen bg-[#F8FCFF]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navigation variant="marketing" />
      <Hero />
      <CertificationPaths />
      <Features />
    </div>
  );
}
