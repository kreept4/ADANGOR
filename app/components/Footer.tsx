"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Expertise", href: "/expertise" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

// The wave is 23 stacked rules, each a pixel taller than the one above it, so
// the band reads as a thin comb at the top and a solid mass at the bottom.
const BAR_COUNT = 23;

// Motion constants, kept together so the wave can be retuned in one place.
// AMPLITUDE and FREQUENCY shape the sine; SPEED is how far the phase advances
// per frame. The offset accumulates down the stack, which is what makes the
// rules bunch and fan out rather than sliding as one block.
const AMPLITUDE = 20;
const FREQUENCY = 0.3;
const SPEED = 0.1;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef<number | null>(null);
  // The phase outlives any single run of the animation. Resetting it to zero
  // each time the footer scrolls back into view would snap the wave to its
  // starting shape; carrying it in a ref lets the motion resume where it left.
  const phaseRef = useRef(0);

  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // The wave only runs while the footer is actually on screen. Without this the
  // page would hold a requestAnimationFrame loop open for its whole life just
  // to move something nobody is looking at.
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);

    // disconnect() rather than unobserve(ref.current): by cleanup time the ref
    // may already point somewhere else, which would leave the old observer live.
    return () => observer.disconnect();
  }, []);

  // Read on the client rather than from state seeded at render, so the server
  // and client agree on first paint, and follow the setting if it changes.
  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION);
    const sync = () => setReduceMotion(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const step = () => {
      let offset = 0;

      for (let i = 0; i < barsRef.current.length; i++) {
        const bar = barsRef.current[i];
        if (!bar) continue;

        offset += Math.max(
          0,
          AMPLITUDE * Math.sin((phaseRef.current + i) * FREQUENCY),
        );
        bar.style.transform = `translateY(${i + offset}px)`;
      }

      phaseRef.current += SPEED;
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [inView, reduceMotion]);

  const backToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      // Honour the same setting the wave does. A visitor who has asked for less
      // motion should not be given a long animated scroll instead.
      behavior: window.matchMedia(REDUCED_MOTION).matches ? "auto" : "smooth",
    });
  }, []);

  return (
    <footer className="ft-section" ref={footerRef}>
      <div className="ft-top">
        <div className="ft-identity">
          <svg
            className="ft-logo"
            viewBox="0 0 54 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Prof. Z. Adangor (SAN) & Co"
            role="img"
          >
            <path d="M33.5147 0V2.33749C32.9233 2.33749 32.3843 2.54892 31.9714 2.89904C31.7334 3.09862 31.5374 3.34387 31.3992 3.62295C31.3992 3.62464 31.3974 3.62802 31.3957 3.6314C31.3712 3.68045 31.3467 3.73289 31.3257 3.78532C31.3204 3.79885 31.3152 3.81238 31.3099 3.82591L16.263 37.6976H13.0013L28.4577 2.89904H5.14103C3.95813 2.89904 2.99922 3.82591 2.99922 4.96929C2.99922 6.11266 3.95813 7.03954 5.14103 7.03954V9.93858C2.30278 9.93858 0 7.71271 0 4.96929C0 4.23015 0.166234 3.52992 0.468957 2.89904C1.27913 1.18905 3.06746 0 5.14103 0H33.5147Z" fill="currentColor" />
            <path d="M53.1532 35.6293C53.1532 36.3685 52.987 37.0687 52.6843 37.6996C51.8741 39.4096 50.0875 40.5986 48.0139 40.5986H0V37.6996C0.962413 37.6996 1.79008 37.1397 2.15055 36.3363C2.1558 36.3245 2.16105 36.3127 2.16805 36.2991L16.0373 5.07617H19.3008L4.80681 37.6996H48.0139C49.1968 37.6996 50.1557 36.7727 50.1557 35.6293C50.1557 34.486 49.1968 33.5591 48.0139 33.5591V30.6601C50.8522 30.6601 53.1532 32.8859 53.1532 35.6293Z" fill="currentColor" />
            <path d="M28.457 2.90039L42.951 35.5238H46.2109L31.7205 2.90039H28.457Z" fill="currentColor" />
            <path d="M25.3477 26.7372L39.2467 26.7879L40.538 23.894L26.639 23.8398L25.3477 26.7372Z" fill="currentColor" />
          </svg>

          <p className="ft-partner">PROF. ZACCHAEUS ADANGOR (SAN)</p>

          <p className="ft-rights">
            {/* The year is read at render, so it moves with the calendar instead
                of going stale in the markup. The footer is a Client Component,
                which means the prerendered copy carries the build year and the
                client corrects it on hydration — a mismatch by design, hence
                the suppression on the one element that holds the value. */}
            <span suppressHydrationWarning>
              &copy; {new Date().getFullYear()}
            </span>{" "}
            All rights reserved.
          </p>
        </div>

        <div className="ft-links">
          <nav aria-label="Footer">
            <ul className="ft-nav">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ft-totop">
            <button type="button" onClick={backToTop}>
              Back to top
            </button>
          </div>
        </div>
      </div>

      <p className="ft-headline">
        Built on Justice,
        <br />
        Guided by Ethics.
      </p>

      {/* Decorative: the wave carries no information, so it is kept out of the
          accessibility tree entirely rather than described. */}
      <div className="ft-wave" aria-hidden="true">
        <div className="ft-wave-inner">
          {Array.from({ length: BAR_COUNT }, (_, i) => (
            <div
              key={i}
              ref={(el) => {
                barsRef.current[i] = el;
              }}
              className="ft-bar"
              style={{ height: `${i + 1}px` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ft-section {
          width: 100%;
          background: #cd9610;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: var(--font-roboto-slab), serif;
          /* No width cap: the footer fills the viewport in step with the
             sections above it, and the gutter is the same token every other
             section reads from. */
          padding: 32px 0 0;
          overflow: hidden;
        }
        /* The full-height footer is a desktop gesture. On a phone it would be a
           screen of empty gold, so there the height stays content-driven. */
        @media (min-width: 1024px) {
          .ft-section {
            min-height: 100vh;
          }
        }
        .ft-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 0 var(--page-gutter) 96px;
        }
        .ft-identity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        .ft-logo {
          color: #2f2100;
          width: clamp(44px, 3.4vw, 64px);
          height: auto;
          margin-bottom: 8px;
        }
        .ft-partner {
          margin: 0;
          color: #2f2100;
          font-size: var(--fs-small);
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }
        .ft-rights {
          margin: 0;
          color: #2f2100;
          font-size: var(--fs-small);
          font-weight: 300;
          line-height: 1.4;
          opacity: 0.85;
        }
        .ft-links {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }
        .ft-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 16px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        /* next/link renders its own anchor, which styled-jsx cannot scope, so
           the anchor is matched globally from inside the scoped .ft-nav. */
        .ft-nav :global(a),
        .ft-totop button {
          color: #2f2100;
          font-family: inherit;
          font-size: var(--fs-small);
          font-weight: 400;
          line-height: 1;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ft-nav :global(a:hover),
        .ft-totop button:hover {
          color: #fff;
        }
        .ft-nav :global(a:focus-visible),
        .ft-totop button:focus-visible {
          outline: 2px solid #2f2100;
          outline-offset: 4px;
          border-radius: 1px;
        }
        .ft-totop button {
          background: none;
          border: 0;
          padding: 0;
          cursor: pointer;
        }
        .ft-totop button:hover {
          text-decoration: underline;
        }
        .ft-headline {
          margin: 0;
          padding: 0 var(--page-gutter);
          color: #fff;
          font-size: clamp(24px, 2.6vw, 36px);
          font-weight: 500;
          line-height: 1.24;
          letter-spacing: -0.045em;
          text-transform: uppercase;
        }
        .ft-wave {
          overflow: hidden;
          height: 200px;
          margin-top: 96px;
          /* Scoped to the wave rather than the whole footer: the rules should
             not be selectable, but the firm's name and copyright should. */
          user-select: none;
        }
        .ft-bar {
          background: #fff;
          margin-top: -2px;
          transition: transform 0.1s ease;
          will-change: transform;
        }
        /* The effect above stops the loop; this settles the rules back into an
           even band, so the wave cannot freeze mid-crest at whatever shape it
           held when the setting changed. Overriding an inline transform is what
           the !important is for. */
        @media (prefers-reduced-motion: reduce) {
          .ft-bar {
            transform: none !important;
            transition: none;
          }
        }

        /* Phones — the two columns stack and the nav runs left with everything
           else instead of staying pinned right. */
        @media (max-width: 767px) {
          .ft-top {
            flex-direction: column;
            padding-bottom: 64px;
          }
          .ft-links {
            align-items: flex-start;
          }
          .ft-nav {
            justify-content: flex-start;
          }
          .ft-wave {
            height: 140px;
            margin-top: 64px;
          }
        }
      `}</style>
    </footer>
  );
}
