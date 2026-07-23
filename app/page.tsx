import Hero from "./components/Hero";
import OurValues from "./components/OurValues";
import Expertise from "./components/Expertise";
import Publications from "./components/Publications";
import MapContact from "./components/MapContact";
export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <OurValues />
      <Expertise />
      <Publications />
      <MapContact />
    </main>
  );
}
