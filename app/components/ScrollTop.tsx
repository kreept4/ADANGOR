"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The return-to-top control.
 *
 * Not a chevron in a circle. The face is a surveyor's dial: a 24-point tick
 * ring with the quarters cut longer, a progress arc that closes as the reader
 * descends the page, and a stepped ascent in the middle — three rules narrowing
 * upward under a chevron cap, which reads as climbing rather than as "up".
 *
 * The dial geometry was worked out numerically rather than eyeballed: ticks at
 * exact 15 degree intervals on a 15.4/13.2 radius pair, quarters extended 1.6
 * inward, and the arc's dash cycle set to its true circumference (116.239) so
 * the fill maps one-to-one onto scroll position with no fudge factor.
 *
 * It earns its place by carrying that progress. A button that only scrolls up
 * is generic; one that also tells the reader how far down a long page they are
 * is doing a second job for the same pixels.
 */

const CIRC = 116.239; // 2 * pi * 18.5, from the generator

const TICKS_MAJOR =
  "M22.0 6.6L22.0 10.4 M37.4 22.0L33.6 22.0 M22.0 37.4L22.0 33.6 M6.6 22.0L10.4 22.0";
const TICKS_MINOR =
  "M25.99 7.12L25.42 9.25 M29.7 8.66L28.6 10.57 M32.89 11.11L31.33 12.67 M35.34 14.3L33.43 15.4 M36.88 18.01L34.75 18.58 M36.88 25.99L34.75 25.42 M35.34 29.7L33.43 28.6 M32.89 32.89L31.33 31.33 M29.7 35.34L28.6 33.43 M25.99 36.88L25.42 34.75 M18.01 36.88L18.58 34.75 M14.3 35.34L15.4 33.43 M11.11 32.89L12.67 31.33 M8.66 29.7L10.57 28.6 M7.12 25.99L9.25 25.42 M7.12 18.01L9.25 18.58 M8.66 14.3L10.57 15.4 M11.11 11.11L12.67 12.67 M14.3 8.66L15.4 10.57 M18.01 7.12L18.58 9.25";
const ASCENT =
  "M17.50 26.60L26.50 26.60 M18.80 23.00L25.20 23.00 M20.10 19.40L23.90 19.40";
const CAP = "M17.70 19.60L22.00 15.60L26.30 19.60";

export default function ScrollTop() {
  const [shown, setShown] = useState(false);
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const read = () => {
      frame.current = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
      // Roughly two thirds of a screen down: far enough that the reader has
      // committed to the page, near enough that the way back is still wanted.
      setShown(y > window.innerHeight * 0.66);
    };
    const onScroll = () => {
      if (frame.current == null) frame.current = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current != null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      className={`st-btn${shown ? " st-btn--in" : ""}`}
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        {/* the dial */}
        <path d={TICKS_MINOR} stroke="currentColor" strokeWidth="1" opacity="0.28" strokeLinecap="round" />
        <path d={TICKS_MAJOR} stroke="currentColor" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />

        {/* the track, and the arc that closes as the page is descended */}
        <circle cx="22" cy="22" r="18.5" stroke="currentColor" strokeWidth="1" opacity="0.16" />
        <circle
          cx="22"
          cy="22"
          r="18.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - progress)}
          transform="rotate(-90 22 22)"
          className="st-arc"
        />

        {/* the stepped ascent */}
        <path d={ASCENT} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" className="st-steps" />
        <path d={CAP} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="st-cap" />
      </svg>

      <style jsx>{`
        .st-btn {
          position: fixed;
          /* Clear of the right gutter and of anything sitting on the bottom
             edge on iOS. Bottom-right because the map's own zoom controls take
             the top-left, and the two must never argue. */
          right: clamp(16px, 2.4vw, 32px);
          bottom: calc(clamp(16px, 2.4vw, 32px) + env(safe-area-inset-bottom, 0px));
          z-index: 40;
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          color: #291c14;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(41, 28, 20, 0.1);
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px) scale(0.94);
          pointer-events: none;
          transition: opacity 0.28s ease, transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.2s ease, color 0.2s ease;
        }
        .st-btn--in {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }
        .st-btn:hover,
        .st-btn:focus-visible {
          background: #291c14;
          color: #ffffff;
        }
        .st-btn:focus-visible {
          outline: 2px solid #291c14;
          outline-offset: 3px;
        }
        /* The arc is redrawn every frame from scroll position, so easing it
           would leave the fill trailing the page. */
        .st-arc {
          transition: none;
        }
        .st-btn:hover .st-cap,
        .st-btn:focus-visible .st-cap {
          transform: translateY(-1px);
        }
        .st-cap {
          transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .st-btn,
          .st-cap {
            transition: opacity 0.01s linear;
          }
        }
      `}</style>
    </button>
  );
}
