import SandboxHero from "./components/SandboxHero";
import SandboxBelow from "./components/SandboxBelow";
import MapContact from "./components/MapContact";

/**
 * The homepage.
 *
 * Two components, in this order, and nothing else. The hero owns the fold; the
 * sections below own everything after it. Adding a third element here is almost
 * always a sign that a section wants to be inside `SandboxBelow` instead, where
 * it can join the shared `[data-h]` entrance rather than inventing its own.
 *
 * The header is not rendered here — `GlassNav` in the root layout draws its
 * cream variant on this route and floats over the plate.
 */
export default function Home() {
  return (
    <main className="sbx-page">
      <SandboxHero />
      <SandboxBelow />
      {/* The live site's contact section, carried over unchanged apart from its
          background, which is white here so it reads as the last of the page's
          white sections rather than as a block bolted onto the end. */}
      <MapContact />
    </main>
  );
}
