import Hero from "./components/Hero";
import OurWatchword from "./components/OurWatchword";
import Expertise from "./components/Expertise";
import MapContact from "./components/MapContact";
import LandingEditorialSections from "./components/LandingEditorialSections";
import StrategySection from "./components/StrategySection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <LandingEditorialSections />
      <Expertise />
      <OurWatchword />
      <StrategySection />
      <MapContact />
    </main>
  );
}
