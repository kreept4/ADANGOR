import type { Metadata } from "next";
import AboutHero from "../components/AboutHero";
import ManagingPartner from "../components/ManagingPartner";
import LegacyHero from "../components/LegacyHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Prof. Zacchaeus Adangor, SAN — the chambers, its managing partner, and the honours the practice has been recognised with.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">
      <AboutHero />
      <ManagingPartner />
      <LegacyHero />
    </main>
  );
}
