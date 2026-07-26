import Hero from "./components/Hero";
import OurWatchword from "./components/OurWatchword";
import Expertise from "./components/Expertise";
import MapContact from "./components/MapContact";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <OurWatchword />
      <Expertise />
      <MapContact />
    </main>
  );
}
