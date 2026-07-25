import AboutHero from "../components/AboutHero";
import LegacyHero from "../components/LegacyHero";

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">
      <AboutHero />
      <LegacyHero />
    </main>
  );
}
