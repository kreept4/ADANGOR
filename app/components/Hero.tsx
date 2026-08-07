"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { heroCitations } from "../data/publications";

/**
 * The homepage hero, Figma node 139:212.
 *
 * A full-bleed holographic gold field with the glass masthead floating over it,
 * and a white panel dropped near the bottom carrying the headline, the primary
 * action, and one publication at a time.
 *
 * The comp is drawn at 1440 and its raw pixel sizes read as zoomed-in on a real
 * display, so everything here runs at roughly three quarters of the comp: the
 * proportions between headline, button and citation card are the comp's, the
 * absolute sizes are a step down from it. Each measure is a clamp so the whole
 * composition holds from a smartwatch to a boardroom panel.
 */

// How long each citation holds before the next one takes over. Long, because
// these are full citations rather than headlines — a reader has to get to the
// end of one before it is worth moving on.
const SLIDE_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = heroCitations[index];

  const go = (step: number) =>
    setIndex((i) => (i + step + heroCitations.length) % heroCitations.length);

  // `index` is a dependency so that clicking an arrow restarts the dwell rather
  // than leaving the reader with whatever was left of the previous tick. The
  // timer never starts for a reader who has asked for reduced motion, and it
  // stops while the card is hovered or focused so a citation can be read or the
  // arrows used without it moving underneath.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroCitations.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <section className="hero">
      <Image
        src="/images/hero-holographic.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg"
      />

      <div className="hero-panel">
        <div className="hero-panel-top">
          {/* Keyed on the same index as the citation, so the headline is a fresh
              element on every turn of the slideshow and replays its fade with
              it. The first mount is what plays it on load. */}
          <h1 className="hero-title" key={index}>
            <span className="hero-title-line hero-title-muted">Built on Justice.</span>
            <span className="hero-title-line hero-title-strong">Guided by Ethics.</span>
          </h1>

          <a href="/contact" className="hero-cta">
            <span className="hero-cta-label">
              <span className="hero-cta-text">Speak to a Lawyer</span>
            </span>
            <span className="hero-cta-arrow" aria-hidden="true">
              <ArrowTravel />
            </span>
          </a>
        </div>

        <div
          className="hero-insight-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <article className="hero-insight" aria-live="polite">
            <div className="hero-insight-head">
              <span className="hero-insight-kicker">Legal Insight</span>
              <span className="hero-insight-author">Prof Z. Adangor SAN</span>
            </div>
            <div className="hero-insight-rule" />
            {/* Keyed on the index so each citation is a fresh element and
                replays the fade, rather than the text swapping in place. */}
            <p className="hero-insight-text" key={index}>
              <span>{current.text}</span>
              <span className="hero-insight-pages">{current.pages}</span>
            </p>
          </article>

          {/* The comp leaves this strip of the panel empty. The controls go here
              rather than inside the card so the card matches the comp, and so a
              reader who wants the citation that just left can go back for it. */}
          <div className="hero-insight-nav">
            <button type="button" onClick={() => go(-1)} aria-label="Previous publication">
              <ArrowTravel flipped />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next publication">
              <ArrowTravel />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          min-height: clamp(480px, 56vw, 780px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          /* 30 / 1440 either side, with a strip of gradient left below. */
          padding: 0 2.08% 2.6%;
          overflow: hidden;
          background: #8b6800;
          font-family: var(--font-mona-sans), var(--font-instrument-sans), sans-serif;
        }
        /* next/image renders its own element, so scope it globally. */
        .hero :global(.hero-bg) {
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }

        .hero-panel {
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          width: 100%;
          min-height: clamp(230px, 23vw, 340px);
          background: #fff;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          padding: clamp(18px, 2.3vw, 34px) clamp(16px, 2.1vw, 32px)
            clamp(16px, 1.9vw, 28px);
          animation: hero-rise 0.8s ease 0.15s both;
        }

        .hero-panel-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: clamp(16px, 2.4vw, 40px);
        }

        .hero-title {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(1px, 0.28vw, 5px);
          min-width: 0;
        }
        .hero-title-line {
          /* Three quarters of the comp's 74px. A tight leading is what keeps the
             two lines reading as one lockup rather than as a stack. */
          font-size: clamp(22px, 3.85vw, 56px);
          line-height: 1.14;
          text-transform: uppercase;
          /* The second line comes in a beat behind the first, so the lockup
             reads top to bottom rather than arriving as one block. */
          animation: hero-title-in 0.75s ease both;
        }
        .hero-title-muted {
          font-weight: 300;
          color: #494949;
          letter-spacing: -0.05em;
          animation-delay: 0.12s;
        }
        .hero-title-strong {
          font-weight: 400;
          color: #261900;
          letter-spacing: -0.03em;
          animation-delay: 0.26s;
        }
        /* The comp holds the first line at 90%. It is the animation's end state
           rather than a property of its own, or the fade would land on full
           opacity and then step back down. */
        @keyframes hero-title-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .hero-title-muted {
          animation-name: hero-title-in-muted;
        }
        @keyframes hero-title-in-muted {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 0.9;
            transform: none;
          }
        }

        /* Cream-white label butted against a gold arrow cell inside an espresso
           hairline frame, per the comp's LinkComponent. */
        .hero-cta {
          position: relative;
          display: inline-flex;
          align-items: stretch;
          flex-shrink: 0;
          height: clamp(42px, 3.6vw, 56px);
          padding: 2px;
          background: #a77d02;
          border: 2px solid #563c02;
          border-radius: 2px;
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-cta:hover,
        .hero-cta:focus-visible {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(86, 60, 2, 0.3);
        }

        .hero-cta-label {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 clamp(14px, 1.55vw, 24px);
          background: #fff;
          overflow: hidden;
        }
        /* The gold wipes across the label from the left on hover; the arrow cell
           goes white at the same time, so the two halves trade places. */
        .hero-cta-label::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #a77d02;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .hero-cta:hover .hero-cta-label::before,
        .hero-cta:focus-visible .hero-cta-label::before {
          transform: scaleX(1);
        }
        .hero-cta-text {
          position: relative;
          font-size: clamp(13px, 1.25vw, 19px);
          font-weight: 500;
          line-height: 1.16;
          letter-spacing: -0.007em;
          white-space: nowrap;
          color: #1d1e24;
          transition: color 0.3s ease 0.08s;
        }
        .hero-cta:hover .hero-cta-text,
        .hero-cta:focus-visible .hero-cta-text {
          color: #fff8e5;
        }

        .hero-cta-arrow {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: clamp(44px, 4.3vw, 64px);
          border-left: 2px solid #000;
          color: #fff;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .hero-cta:hover .hero-cta-arrow,
        .hero-cta:focus-visible .hero-cta-arrow {
          background: #fff;
          color: #563c02;
        }
        /* The travel itself is driven from the button, not from the cell, so the
           whole control responds as one to a hover anywhere on it. */
        .hero-cta:hover .hero-cta-arrow :global(.arrow-track),
        .hero-cta:focus-visible .hero-cta-arrow :global(.arrow-track) {
          transform: translateX(var(--arrow-go));
        }
        .hero-cta-arrow :global(.arrow-glyph) {
          width: clamp(15px, 1.35vw, 21px);
        }

        .hero-insight-wrap {
          margin-top: auto;
          padding-top: clamp(16px, 1.8vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        /* 585 / 1380 of the panel, held to the panel's right edge. */
        .hero-insight {
          box-sizing: border-box;
          width: 42.4%;
          min-width: 280px;
          max-width: 100%;
          padding: clamp(10px, 0.9vw, 14px) clamp(12px, 1.25vw, 19px);
          background: rgba(255, 233, 161, 0.14);
          border: 1px solid #adadad;
          border-radius: 4px 26px 4px 26px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .hero-insight-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 14px;
          padding: 0 6px;
        }
        .hero-insight-kicker,
        .hero-insight-author {
          font-size: clamp(10px, 0.83vw, 13px);
          line-height: 1.5;
          color: #000;
          white-space: nowrap;
        }
        .hero-insight-kicker {
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .hero-insight-author {
          font-weight: 500;
          text-align: right;
        }
        .hero-insight-rule {
          height: 2px;
          width: 100%;
          background: #ffde85;
        }
        .hero-insight-text {
          margin: 0;
          font-size: clamp(12px, 1.04vw, 16px);
          font-weight: 500;
          line-height: 1.55;
          color: #000;
          /* Citations run to wildly different lengths. Reserving three lines
             stops the panel resizing under the reader on every tick. */
          min-height: calc(3 * 1.55em);
          animation: hero-quote-in 0.6s ease both;
        }
        .hero-insight-pages {
          color: #797979;
        }

        .hero-insight-nav {
          display: flex;
          gap: 8px;
        }
        .hero-insight-nav button {
          display: flex;
          align-items: center;
          width: clamp(32px, 2.4vw, 38px);
          height: clamp(26px, 2vw, 31px);
          padding: 0;
          border: 1px solid rgba(86, 60, 2, 0.3);
          border-radius: 2px;
          background: transparent;
          color: #563c02;
          cursor: pointer;
          transition: background-color 0.25s ease, color 0.25s ease,
            border-color 0.25s ease, transform 0.25s ease;
        }
        .hero-insight-nav button:hover,
        .hero-insight-nav button:focus-visible {
          background: #a77d02;
          border-color: #563c02;
          color: #fff8e5;
          transform: translateY(-1px);
        }
        /* Same travel as the primary button, so all three arrows on the panel
           behave alike — each one in the direction it points. */
        .hero-insight-nav button:hover :global(.arrow-track),
        .hero-insight-nav button:focus-visible :global(.arrow-track) {
          transform: translateX(var(--arrow-go));
        }
        .hero-insight-nav button :global(.arrow-glyph) {
          width: clamp(11px, 0.9vw, 14px);
        }

        @keyframes hero-rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes hero-quote-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        /* Laptops — the citation card needs more of the panel than its 42% or
           the measure drops under about forty characters a line. */
        @media (max-width: 1100px) {
          .hero-insight {
            width: 52%;
          }
        }

        /* Tablets — the button drops under the headline and the citation card
           takes the panel's full width. */
        @media (max-width: 860px) {
          .hero {
            min-height: clamp(460px, 88vw, 760px);
            padding: 0 3.2% 4%;
          }
          .hero-panel {
            min-height: 0;
          }
          .hero-panel-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .hero-title-line {
            font-size: clamp(22px, 6.4vw, 44px);
          }
          .hero-cta {
            height: clamp(42px, 6.6vw, 54px);
          }
          .hero-cta-text {
            font-size: clamp(13px, 2.2vw, 17px);
          }
          .hero-cta-arrow {
            width: clamp(44px, 7.4vw, 58px);
          }
          .hero-cta-arrow :global(.arrow-glyph),
          .hero-insight-nav button :global(.arrow-glyph) {
            width: 16px;
          }
          .hero-insight {
            width: 100%;
            min-width: 0;
          }
          .hero-insight-kicker,
          .hero-insight-author {
            font-size: var(--fs-small);
          }
          .hero-insight-text {
            font-size: var(--fs-body);
          }
          .hero-insight-nav button {
            width: 38px;
            height: 32px;
          }
        }

        /* Phones — the citation header stacks, and a fourth line is reserved
           because the measure is narrower here. */
        @media (max-width: 560px) {
          .hero {
            min-height: 0;
            padding: clamp(78px, 22vw, 120px) 3.6% 6%;
            justify-content: flex-start;
          }
          .hero-panel {
            border-radius: 10px;
          }
          .hero-insight {
            border-radius: 4px 20px 4px 20px;
          }
          .hero-insight-head {
            padding: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 1px;
          }
          .hero-insight-author {
            text-align: left;
          }
          .hero-insight-text {
            min-height: calc(4 * 1.55em);
          }
        }

        /* Smartwatch and ultra-narrow browsers. */
        @media (max-width: 380px) {
          .hero-cta {
            width: 100%;
          }
          .hero-cta-label {
            flex: 1;
          }
        }

        /* Past the top of the shared ladder the clamps have all capped out, so
           the panel is pinned to a comfortable reading column instead of being
           stretched across a boardroom display. */
        @media (min-width: 2100px) {
          .hero {
            min-height: 900px;
          }
          .hero-panel {
            min-height: 400px;
          }
          .hero-title-line {
            font-size: 68px;
          }
          .hero-cta {
            height: 66px;
          }
          .hero-cta-text {
            font-size: 22px;
          }
          .hero-insight-text {
            font-size: 19px;
          }
          .hero-insight-kicker,
          .hero-insight-author {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-panel,
          .hero-insight-text,
          .hero-title-line {
            animation: none;
          }
          .hero-title-muted {
            opacity: 0.9;
          }
          .hero-cta,
          .hero-cta-label::before,
          .hero-cta-text,
          .hero-insight-nav button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

/**
 * The comp's 28x28 Icon (node 139:233), doubled onto a track twice the cell's
 * width. At rest the track sits half a turn back so the second copy is the one
 * on show; sliding it to zero sends that copy out to the right while the first
 * arrives from the left, so the arrow reads as travelling rather than nudging.
 *
 * The hover is not declared here — each caller drives `.arrow-track` from its
 * own hover and focus state, so the whole control reacts as one.
 */
function ArrowTravel({ flipped = false }: { flipped?: boolean }) {
  // A left-pointing arrow has to travel left, so the two halves of the track
  // swap roles. Both ends are published as custom properties, which lets each
  // caller drive the hover with one rule regardless of which way it points.
  const vars = {
    "--arrow-rest": flipped ? "0%" : "-50%",
    "--arrow-go": flipped ? "-50%" : "0%",
  } as CSSProperties;

  return (
    <span className="arrow-window" style={vars} aria-hidden="true">
      <span className="arrow-track">
        <span className="arrow-cell">
          <Arrow flipped={flipped} />
        </span>
        <span className="arrow-cell">
          <Arrow flipped={flipped} />
        </span>
      </span>

      <style jsx>{`
        .arrow-window {
          display: block;
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .arrow-track {
          display: flex;
          width: 200%;
          transform: translateX(var(--arrow-rest));
          transition: transform 0.42s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .arrow-cell {
          flex: 0 0 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .arrow-track {
            transition: none;
          }
        }
      `}</style>
    </span>
  );
}

/** The exported icon's own path data and 28x28 box, inlined so it can take the
    colour of whichever half of the button it currently sits in. */
function Arrow({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      className="arrow-glyph"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "auto", transform: flipped ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M1.75 14H26.25"
        stroke="currentColor"
        strokeWidth="2.59837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2.13277L26.25 14L14 25.8672"
        stroke="currentColor"
        strokeWidth="2.59837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
