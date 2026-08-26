"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SiteMenu from "./SiteMenu";
import MenuTrigger from "./MenuTrigger";
import { firm } from "../data/firm";

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
  // `pinned` swaps the bar from absolute to fixed once it would have scrolled
  // away; `hidden` slides it off while the reader is going down. Both false at
  // the top of the page, where the bar simply sits in place.
  const [pinned, setPinned] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const BAR = 56;
    const read = () => {
      frame.current = null;
      const y = window.scrollY;
      const delta = y - lastY.current;
      setPinned(y > BAR);
      // A few pixels of slack, so a trackpad's jitter around zero does not
      // flicker the bar in and out.
      if (Math.abs(delta) > 4) {
        setHidden(delta > 0 && y > BAR * 2);
        lastY.current = y;
      }
      if (y <= BAR) setHidden(false);
    };
    const onScroll = () => {
      if (frame.current == null) frame.current = requestAnimationFrame(read);
    };
    lastY.current = window.scrollY;
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current != null) cancelAnimationFrame(frame.current);
    };
  }, []);

  // The homepage's hero is a full-viewport plate that the bar is composed over
  // and which already pads itself clear of it. Everywhere else the bar would
  // otherwise sit on top of the first line of the page.
  const overlaysHero = pathname === "/";

  return (
    <>
      <header
        className={`v2h-bar${pinned ? " v2h-bar--pinned" : ""}${
          // An open menu must not be left with its masthead slid away. Derived
          // rather than pushed into state by an effect, which would be a second
          // render just to undo the first.
          hidden && !menuOpen ? " v2h-bar--hidden" : ""
        }`}
      >
        {/* The chambers name sits under the wordmark, bracketed and a size
            down: it names the same practice, so it reads as a subtitle to the
            wordmark rather than as a second mark competing with it. */}
        <Link href="/" className="v2h-wordmark" aria-label={`${firmName} — home`}>
          <span className="v2h-wordmark-name">{wordmark}</span>
          <span className="v2h-wordmark-sub">({firm.chambers})</span>
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
