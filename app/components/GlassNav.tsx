"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteMenu from "./SiteMenu";
import MenuTrigger from "./MenuTrigger";

/**
 * The floating glass masthead from Figma node 139:236.
 *
 * A pane held 1360 of the comp's 1440 wide, carrying only two things: the
 * firm's mark at the left and the menu trigger at the right. Every destination
 * lives behind the trigger, in SiteMenu.
 *
 * The pane is cream glass, not clear. A thin white wash was tried first and it
 * simply handed the pane over to whatever it was floating on: over the hero's
 * gold gradient it came out gold-brown, which is not a colour in this palette.
 * The fill is now cream at most of the way to opaque and the backdrop is
 * desaturated on its way through, so the artwork still moves behind the glass
 * but arrives as light and shade rather than as colour.
 *
 * That makes the pane the light surface, so the mark and the label are espresso
 * ink on it and the mark needs no plate of its own.
 *
 * The bar is fixed so it floats over the hero exactly as it does in the comp.
 * Only the homepage opens on that gradient, so every other route gets a spacer
 * of the bar's own height to sit under rather than behind it.
 *
 * Being fixed, it would otherwise sit over the reading column for the whole
 * page, so it gets out of the way: it leaves on a downward scroll and comes
 * back on an upward one, which keeps it a gesture away without it ever covering
 * what is being read.
 */

/* Ignore scrolls smaller than this. Trackpads and momentum emit a stream of
   one and two pixel deltas that would otherwise flap the bar in and out. */
const SCROLL_NOISE_PX = 6;

interface GlassNavProps {
  logo?: string;
  logoAlt?: string;
  firmName?: string;
  contactEmail?: string;
}

export default function GlassNav({
  logo = "/logo-icon.svg",
  logoAlt = "Firm logo",
  firmName = "Prof. Z. Adangor (SAN) & Co",
  contactEmail,
}: GlassNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const pathname = usePathname();
  const overlaysHero = pathname === "/";

  useEffect(() => {
    lastYRef.current = window.scrollY;

    // Deliberately not coalesced through requestAnimationFrame. The work is two
    // subtractions and at most one setState that React will batch anyway, and
    // rAF is throttled to nothing in a backgrounded or occluded tab — which
    // would leave the bar stuck in whichever state it was last in.
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastYRef.current;
      if (Math.abs(delta) < SCROLL_NOISE_PX) return;
      lastYRef.current = y;

      // Always present at the top of the document, where there is nothing to
      // cover and the bar is part of the hero's composition.
      setHidden(y >= 80 && delta > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar must not slide away underneath an open panel — the trigger is in it.
  const isHidden = hidden && !menuOpen;

  return (
    <>
      <header
        className={`gn ${overlaysHero ? "" : "on-white"} ${isHidden ? "hidden" : ""}`}
        // Nothing in a bar that has left the screen should be tabbable.
        inert={isHidden || undefined}
      >
        {/* The comp puts the mark on a plain white 69x52 plate. The plate was
            carrying a clear pane's problem — an espresso monogram had to survive
            both the bright and the near black bands of the gradient behind it.
            The pane is its own cream surface now, so the mark rests straight on
            the glass. */}
        <Link href="/" className="gn-logo" aria-label={`${firmName} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={logoAlt} className="gn-logo-mark" />
        </Link>

        <MenuTrigger
          open={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          ariaLabel={menuOpen ? "Close menu" : "Open menu"}
          label="Menu"
          ariaExpanded={menuOpen}
          ariaControls="site-menu-panel"
        />
      </header>

      {/* Only the homepage opens on artwork the bar is meant to float over. */}
      {!overlaysHero && <div className="gn-spacer" aria-hidden="true" />}

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} contactEmail={contactEmail} />

      <style jsx>{`
        .gn {
          position: fixed;
          top: clamp(10px, 1.9vw, 28px);
          left: 50%;
          z-index: 100;
          box-sizing: border-box;
          width: 94.44%;
          height: clamp(46px, 3.75vw, 60px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 clamp(12px, 1.6vw, 24px);
          border-radius: 8px;
          /* Cream glass. The wash carries the colour so the pane stays cream
             wherever it floats; the quarter that still comes through is put
             through a heavy blur and dropped most of the way to grey, which is
             what stops the hero's gold from tinting the pane while still letting
             the artwork's light and shade move behind it. */
          background: rgba(255, 248, 229, 0.9);
          border: 1px solid rgba(255, 253, 246, 0.75);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.7),
            0 8px 30px rgba(38, 25, 0, 0.18);
          /* Saturation is pulled down rather than out. Draining it entirely
             turned the gradient's dark bands grey, and a cold grey under a warm
             cream is the same muddiness in the other direction; leaving half of
             it keeps what comes through in the palette's own temperature. The
             brightness lift is what stops the dark bands reading as smudges. */
          backdrop-filter: blur(24px) saturate(0.5) brightness(1.12);
          -webkit-backdrop-filter: blur(24px) saturate(0.5) brightness(1.12);
          /* The mark and the label both inherit this. */
          color: #2f2100;
          font-family: var(--font-mona-sans), var(--font-instrument-sans), sans-serif;
          /* The centring translate has to be restated in the hidden state, so
             both live on the same property. */
          transform: translateX(-50%) translateY(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.3s ease;
        }
        .gn.hidden {
          /* Far enough to clear its own top offset as well as its height. */
          transform: translateX(-50%) translateY(-180%);
          opacity: 0;
        }
        /* Without a backdrop-filter there is no blur to desaturate the gradient
           on its way through, so the remaining quarter would arrive at full
           gold. Those browsers get the same cream, opaque. */
        @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
          .gn {
            background: #fff8e5;
          }
        }
        /* Off the homepage the bar floats over white, where cream on cream needs
           an edge to be a pane at all: nearly opaque, and an ink hairline in
           place of the highlight the gradient was providing. */
        .gn.on-white {
          background: rgba(255, 248, 229, 0.94);
          border-color: rgba(47, 33, 0, 0.16);
          box-shadow: 0 6px 24px rgba(38, 25, 0, 0.1);
        }

        /* next/link renders its own <a>, which styled-jsx cannot scope — the
           class it emits never reaches the element. Scope these globally, as
           the project already does for next/image. */
        :global(.gn-logo) {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          /* The 69 x 52 footprint the plate held, kept as the mark's own box so
             the bar's balance does not shift. */
          width: clamp(44px, 3.6vw, 58px);
          height: clamp(32px, 2.7vw, 44px);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        :global(.gn-logo:hover) {
          transform: translateY(-1px);
          opacity: 0.75;
        }
        :global(.gn-logo:focus-visible) {
          outline: 2px solid #2f2100;
          outline-offset: 4px;
          border-radius: 2px;
        }
        .gn-logo-mark {
          /* The mark is 54 x 41 and the box above is the same ratio, so contain
             is only insurance against the clamps rounding apart. */
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* The trigger itself is MenuTrigger, which the panel's close button also
           renders. Its type sizes and its turn live there; all this bar sets is
           the colour it inherits, above. */

        /* Phones — the bar runs closer to the edges. */
        @media (max-width: 480px) {
          .gn {
            width: 92%;
            top: 10px;
            padding: 0 12px;
          }
        }

        @media (min-width: 2100px) {
          .gn {
            height: 72px;
            top: 34px;
          }
          :global(.gn-logo) {
            width: 70px;
            height: 52px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gn,
          :global(.gn-logo) {
            transition: none;
          }
        }

        .gn-spacer {
          height: calc(clamp(46px, 3.75vw, 60px) + clamp(10px, 1.9vw, 28px) + 16px);
        }
      `}</style>
    </>
  );
}
