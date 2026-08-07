import type { Metadata } from "next";
import AboutHero from "../components/AboutHero";
import ProfessionalJourney from "../components/ProfessionalJourney";
import AwardsRecognition from "../components/AwardsRecognition";

export const metadata: Metadata = {
  title: "About",
  description:
    "Prof. Zacchaeus Adangor, SAN — the chambers, its managing partner, and the honours the practice has been recognised with.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">
      <AboutHero />
      <ProfessionalJourney />
      <AwardsRecognition />
    </main>
  );
}
