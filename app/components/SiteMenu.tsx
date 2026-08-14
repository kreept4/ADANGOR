"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import MenuTrigger from "./MenuTrigger";

/**
 * Full-height staggered navigation panel — the whole site map behind one
 * trigger, replacing the three-card drawer that used to drop out of the bar.
 *
 * Ported from the StaggeredMenu already running on Esquirelyy, with the same
 * four departures from the React Bits original: it is controlled by
 * `open`/`onClose` rather than owning its own toggle (the trigger lives in the
 * hero's glass bar), it uses next/link so navigating does not reload the page,
 * and the item numbers are real elements so the timeline can address them.
 * The fifth change here is palette — espresso and gold rather than grey.
 */

interface MenuItem {
  label: string;
  href: string;
  ariaLabel: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "About", href: "/about", ariaLabel: "About the practice" },
  { label: "Expertise", href: "/expertise", ariaLabel: "Our areas of expertise" },
  { label: "Publications", href: "/publications", ariaLabel: "Published work" },
  { label: "Contact", href: "/contact", ariaLabel: "Contact the firm" },
];

/* The layers that sweep in ahead of the panel. Each is a step nearer the
   panel's own fill than the one behind it, so the open reads as depth rather
   than as a colour flash.

   Both tones step *toward* the panel colour rather than away from it, which is
   why the light set runs dark-to-light and the espresso set light-to-dark. */
const PRELAYERS = {
  espresso: ["#5A4103", "#3E2C01"],
  light: ["#cd9610", "#f0e3c8"],
} as const;

/* The two palettes. Everything the panel colours is named here so a tone is one
   object rather than a scatter of conditionals through the stylesheet. */
const TONES = {
  espresso: {
    panel: "#261900",
    scrim: "rgba(38, 25, 0, 0.45)",
    ink: "#fff8e5",
    inkDim: "rgba(255, 248, 229, 0.72)",
    eyebrow: "rgba(255, 248, 229, 0.45)",
    accent: "#cd9610",
  },
  light: {
    panel: "#ffffff",
    scrim: "rgba(29, 30, 36, 0.4)",
    ink: "#1d1e24",
    inkDim: "rgba(29, 30, 36, 0.78)",
    eyebrow: "rgba(29, 30, 36, 0.45)",
    accent: "#cd9610",
  },
} as const;

/**
 * The closed position is expressed in CSS, not set by GSAP on mount, so the
 * panel is offscreen in the very first paint instead of rendering on-screen and
 * jumping away once JS runs.
 *
 * Every tween below also passes `x: 0`: GSAP parses this inline
 * `translateX(100%)` into its own `x` as a pixel value, and `xPercent` then
 * stacks a second translation on top of it. Without pinning `x: 0` the panel
 * starts at 200% and animating `xPercent` to 0 leaves it a full width offscreen.
 */
const CLOSED_TRANSFORM = { transform: "translateX(100%)" } as const;

interface SiteMenuProps {
  open: boolean;
  onClose: () => void;
  /** `light` is the white panel the homepage's cream bar opens. */
  tone?: "espresso" | "light";
}

export default function SiteMenu({
  open,
  onClose,
  tone = "espresso",
}: SiteMenuProps) {
  const palette = TONES[tone];
  const prelayers = PRELAYERS[tone];
  const panelRef = useRef<HTMLElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasMountedRef = useRef(false);

  const playOpen = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayersRef.current
      ? Array.from(preLayersRef.current.querySelectorAll(".sm-prelayer"))
      : [];
    if (!panel) return;

    timelineRef.current?.kill();

    const labels = Array.from(panel.querySelectorAll(".sm-item-label"));

    gsap.set(labels, { yPercent: 140, rotate: 8 });

    const tl = gsap.timeline();
    layers.forEach((layer, i) => {
      tl.fromTo(
        layer,
        { xPercent: 100, x: 0 },
        { xPercent: 0, x: 0, duration: 0.5, ease: "power4.out" },
        i * 0.07
      );
    });

    const panelStart = layers.length ? (layers.length - 1) * 0.07 + 0.08 : 0;
    tl.fromTo(
      panel,
      { xPercent: 100, x: 0 },
      { xPercent: 0, x: 0, duration: 0.65, ease: "power4.out" },
      panelStart
    )
      .to(
        labels,
        { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out", stagger: 0.07 },
        panelStart + 0.1
      )
      // The entrance leaves an inline `transform` on every label, and an inline
      // transform beats the `:hover` rule in the stylesheet — so without this
      // the hover nudge silently stops working the first time the menu is
      // opened. Clearing the property hands the labels back to CSS.
      .set(labels, { clearProps: "transform" });

    timelineRef.current = tl;
  }, []);

  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayersRef.current
      ? Array.from(preLayersRef.current.querySelectorAll(".sm-prelayer"))
      : [];
    if (!panel) return;

    timelineRef.current?.kill();
    timelineRef.current = gsap.to([...layers, panel], {
      xPercent: 100,
      x: 0,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
    }) as unknown as gsap.core.Timeline;
  }, []);

  useEffect(() => {
    // Skip the close animation on first render — it is already parked offscreen.
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      if (!open) return;
    }
    if (open) playOpen();
    else playClose();
  }, [open, playOpen, playClose]);

  // Escape closes; body scroll locks while the panel is up.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className="sm-root"
      // The palette is published as custom properties rather than branched
      // through the stylesheet, so a tone is one object at the top of this file
      // instead of a conditional at every colour.
      data-tone={tone}
      // Position and clipping are inline, not in the stylesheet. The panel is
      // parked a full viewport to the right; until a stylesheet lands to clip
      // it, it widens the document and the page gains a horizontal scrollbar.
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        overflow: "hidden",
        pointerEvents: open ? "auto" : "none",
        ["--sm-panel" as string]: palette.panel,
        ["--sm-scrim" as string]: palette.scrim,
        ["--sm-ink" as string]: palette.ink,
        ["--sm-ink-dim" as string]: palette.inkDim,
        ["--sm-eyebrow" as string]: palette.eyebrow,
        ["--sm-accent" as string]: palette.accent,
      }}
      aria-hidden={!open}
    >
      {/* Click-away target */}
      <div className="sm-scrim" style={{ opacity: open ? 1 : 0 }} onClick={onClose} />

      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {prelayers.map((color) => (
          <div
            key={color}
            className="sm-prelayer"
            style={{ background: color, ...CLOSED_TRANSFORM }}
          />
        ))}
      </div>

      <aside id="site-menu-panel" ref={panelRef} style={CLOSED_TRANSFORM} className="sm-panel">
        {/* No eyebrow. A panel that fills the screen the instant the menu
            trigger is pressed does not also need the word "Menu" written at the
            top of it — the five destinations below say what this is. The close
            control keeps the row to itself and sits where the trigger was. */}
        <div className="sm-panel-head">
          {/* The same control that opened the panel, already turned into its
              cross, so shutting the menu is the gesture that opened it rather
              than a bordered pill that shared nothing with the bar. */}
          <MenuTrigger open onClick={onClose} ariaLabel="Close menu" label="Close" />
        </div>

        <ul className="sm-list" role="list">
          {MENU_ITEMS.map((item) => (
            <li key={item.href} className="sm-item">
              {/* No index. Five destinations do not need numbering, and the
                  numerals were the only thing on the panel competing with the
                  labels for the reader's first look. */}
              <Link href={item.href} aria-label={item.ariaLabel} onClick={onClose} className="sm-link">
                <span className="sm-item-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Nothing below the list.

            The mailto button went first — "Contact" is already the fifth item
            above it, so the panel offered the same destination twice. The strap
            line went with it: it is the hero's headline, and repeating it in
            small grey type at the foot of the menu made it furniture. */}
      </aside>

      <style jsx>{`
        /* Position and clipping are set inline; this adds only the type. */
        .sm-root {
          font-family: var(--font-mona-sans), var(--font-instrument-sans), sans-serif;
        }
        .sm-scrim {
          position: absolute;
          inset: 0;
          background: var(--sm-scrim);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          transition: opacity 0.3s ease;
        }
        .sm-prelayers,
        .sm-panel {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100%;
        }
        .sm-prelayers {
          pointer-events: none;
        }
        .sm-prelayer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        @media (min-width: 640px) {
          .sm-prelayers,
          .sm-panel {
            width: clamp(320px, 42vw, 520px);
          }
        }

        .sm-panel {
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          background: var(--sm-panel);
          padding: 24px 24px 32px;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .sm-panel {
            padding: 26px 40px 40px;
          }
        }

        /* One child now the eyebrow is gone, held to the right so the close
           control stays where the trigger that opened the panel was. */
        .sm-panel-head {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 32px;
          /* MenuTrigger's mark and label are currentColor, so the panel names
             the value here exactly as the bar does on its own cream. */
          color: var(--sm-ink);
        }
        .sm-panel-eyebrow {
          font-size: var(--fs-small);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--sm-eyebrow);
        }
        .sm-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        /* The label tweens in from below its own baseline, so each row has to
           clip or the whole stack shows through before its turn. */
        .sm-item {
          overflow: hidden;
          line-height: 1;
        }
        /* next/link renders its own <a>, which styled-jsx cannot scope — the
           class it emits never reaches the element. */
        :global(.sm-link) {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding: 8px 0;
          text-decoration: none;
        }
        @media (min-width: 640px) {
          :global(.sm-link) {
            padding: 12px 0;
          }
        }
        /* Emphasis, not an event. The item under the pointer comes up to full
           strength and steps a few pixels into the panel; everything else stays
           exactly where it was. No roll, no wipe, no second copy of the word —
           at this type size any of those is the loudest thing on the screen,
           and this is a menu, not a feature. */
        .sm-item-label {
          display: inline-block;
          font-size: clamp(1.75rem, 4.4vw, 2.5rem);
          font-weight: 600;
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--sm-ink-dim);
          transition: color 0.25s ease, transform 0.25s ease;
        }
        :global(.sm-link):hover .sm-item-label,
        :global(.sm-link):focus-visible .sm-item-label {
          color: var(--sm-ink);
          transform: translateX(8px);
        }

        /* Touch screens hold :hover after a tap, which would leave the last
           item tapped nudged across until something else was touched. */
        @media (hover: none) {
          :global(.sm-link):hover .sm-item-label {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sm-item-label {
            transition: color 0.25s ease;
          }
          :global(.sm-link):hover .sm-item-label,
          :global(.sm-link):focus-visible .sm-item-label {
            transform: none;
          }
        }

      `}</style>
    </div>
  );
}
