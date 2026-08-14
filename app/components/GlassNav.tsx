"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SiteMenu from "./SiteMenu";
import MenuTrigger from "./MenuTrigger";

/**
 * The site masthead: a flush white bar across the top of the page carrying the
 * wordmark at the left and the menu trigger at the right. Every destination
 * lives behind the trigger, in SiteMenu.
 *
 * This replaced a floating cream-glass pane that only the homepage's redesign
 * had moved away from. Running two different mastheads meant the bar changed
 * shape as the reader moved between pages, which is the one thing a masthead
 * must not do. The glass pane, its backdrop-filter and its hide-on-scroll
 * behaviour are all gone with it.
 *
 * The bar is `position: absolute` rather than fixed — it belongs to the top of
 * the document and leaves with it, instead of following the reader down the
 * page and sitting over the reading column. On the homepage it floats over the
 * hero plate, which reserves its height itself; on every other route a spacer
 * of the same height sits under it.
 *
 * The name is now a misnomer — there is no glass left — but it is imported in
 * the root layout and by nothing else, so renaming it is a rename for its own
 * sake. Left as is.
 */

interface GlassNavProps {
  firmName?: string;
  /** The wordmark set in the bar. */
  wordmark?: string;
}

export default function GlassNav({
  firmName = "Prof. Z. Adangor (SAN) & Co",
  wordmark = "ADANGOR SAN, & CO.",
}: GlassNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // The homepage's hero is a full-viewport plate that the bar is composed over
  // and which already pads itself clear of it. Everywhere else the bar would
  // otherwise sit on top of the first line of the page.
  const overlaysHero = pathname === "/";

  return (
    <>
      <header className="v2h-bar">
        <Link href="/" className="v2h-wordmark" aria-label={`${firmName} — home`}>
          {wordmark}
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

      {!overlaysHero && <div className="v2h-bar-spacer" aria-hidden="true" />}

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
