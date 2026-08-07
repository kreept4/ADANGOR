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

/* The layers that sweep in ahead of the panel. Each is a step lighter than the
   one behind it, so the open reads as depth rather than as a colour flash. */
const PRELAYER_COLORS = ["#5A4103", "#3E2C01"];

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
  contactEmail?: string;
}

export default function SiteMenu({ open, onClose, contactEmail }: SiteMenuProps) {
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
    const numbers = Array.from(panel.querySelectorAll(".sm-item-number"));
    const meta = Array.from(panel.querySelectorAll(".sm-meta"));

    gsap.set(labels, { yPercent: 140, rotate: 8 });
    gsap.set(numbers, { opacity: 0 });
    gsap.set(meta, { y: 24, opacity: 0 });

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
      .to(
        numbers,
        { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.06 },
        panelStart + 0.2
      )
      .to(
        meta,
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.08 },
        panelStart + 0.3
      );

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
      // Position and clipping are inline, not in the stylesheet. The panel is
      // parked a full viewport to the right; until a stylesheet lands to clip
      // it, it widens the document and the page gains a horizontal scrollbar.
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        overflow: "hidden",
        pointerEvents: open ? "auto" : "none",
      }}
      aria-hidden={!open}
    >
      {/* Click-away target */}
      <div className="sm-scrim" style={{ opacity: open ? 1 : 0 }} onClick={onClose} />

      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {PRELAYER_COLORS.map((color) => (
          <div
            key={color}
            className="sm-prelayer"
            style={{ background: color, ...CLOSED_TRANSFORM }}
          />
        ))}
      </div>

      <aside id="site-menu-panel" ref={panelRef} style={CLOSED_TRANSFORM} className="sm-panel">
        <div className="sm-panel-head">
          <span className="sm-panel-eyebrow">Menu</span>
          {/* The same control that opened the panel, already turned into its
              cross, so shutting the menu is the gesture that opened it rather
              than a bordered pill that shared nothing with the bar. */}
          <MenuTrigger open onClick={onClose} ariaLabel="Close menu" label="Close" />
        </div>

        <ul className="sm-list" role="list">
          {MENU_ITEMS.map((item, index) => (
            <li key={item.href} className="sm-item">
              <Link href={item.href} aria-label={item.ariaLabel} onClick={onClose} className="sm-link">
                <span className="sm-item-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="sm-item-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm-meta">
          <p className="sm-meta-line">Built on Justice, Guided by Ethics.</p>
          {contactEmail && (
            <a href={`mailto:${contactEmail}`} className="sm-meta-cta">
              Speak to a Lawyer
            </a>
          )}
        </div>
      </aside>

      <style jsx>{`
        /* Position and clipping are set inline; this adds only the type. */
        .sm-root {
          font-family: var(--font-mona-sans), var(--font-instrument-sans), sans-serif;
        }
        .sm-scrim {
          position: absolute;
          inset: 0;
          background: rgba(38, 25, 0, 0.45);
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
          background: #261900;
          padding: 24px 24px 32px;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .sm-panel {
            padding: 26px 40px 40px;
          }
        }

        .sm-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          /* MenuTrigger's mark and label are currentColor, so the panel names
             the value here exactly as the bar does on its own cream. */
          color: #fff8e5;
        }
        .sm-panel-eyebrow {
          font-size: var(--fs-small);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 248, 229, 0.45);
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
        .sm-item-number {
          font-size: var(--fs-small);
          font-variant-numeric: tabular-nums;
          color: #cd9610;
          transition: color 0.2s ease;
        }
        .sm-item-label {
          display: inline-block;
          transform-origin: bottom;
          font-size: clamp(1.75rem, 4.4vw, 2.5rem);
          font-weight: 600;
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: rgba(255, 248, 229, 0.72);
          transition: color 0.2s ease;
        }
        :global(.sm-link):hover .sm-item-label,
        :global(.sm-link):hover .sm-item-number,
        :global(.sm-link):focus-visible .sm-item-label {
          color: #fff8e5;
        }

        .sm-meta {
          margin-top: auto;
          padding-top: 40px;
        }
        .sm-meta-line {
          margin: 0;
          font-size: var(--fs-small);
          color: rgba(255, 248, 229, 0.5);
        }
        .sm-meta-cta {
          display: inline-block;
          margin-top: 16px;
          padding: 12px 24px;
          border-radius: 4px;
          background: #cd9610;
          color: #261900;
          font-size: var(--fs-small);
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .sm-meta-cta:hover {
          background: #ffde85;
        }
      `}</style>
    </div>
  );
}
