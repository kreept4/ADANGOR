"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SiteNav from "./SiteNav";
import { heroCitations } from "../data/hero-citations";

const SLIDE_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = heroCitations[index];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroCitations.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <section className="hero-shell">
      <div className="hero-frame">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/hero-holographic.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, calc(100vw - 120px)"
            className="hero-img"
          />
          <div className="hero-veil" />
          <div className="hero-grain" />
        </div>

        <SiteNav variant="hero" />

        <div className="hero-inner">
          <h1 className="hero-title">
            Legal Representation Guided
            <br />
            by Ethics and Justice
          </h1>

          <div className="hero-bottom">
            <div className="hero-bottom-left">
              <a href="/contact" className="hero-cta">
                <span className="hero-cta-label">Speak to a Lawyer</span>
                <span className="hero-cta-arrow" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0776 8.38509H16.164" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.62082 1.0776L16.164 8.38509L8.62082 15.6926" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <aside
              className="hero-insights"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
            >
              <div className="hero-insights-card">
                <div className="hero-insights-photo">
                  <Image
                    src="/images/hero-judge.jpg"
                    alt="Prof. Z. Adangor SAN"
                    fill
                    sizes="88px"
                    className="hero-insights-img"
                  />
                </div>
                <div className="hero-insights-copy">
                  <p className="hero-insights-kicker">
                    Legal Insights · Managing Partner: Prof. Z. Adangor SAN
                  </p>
                  <p className="hero-insights-text" key={index}>
                    <span>{current.text}</span>
                    <span className="hero-insights-pages">{current.pages}</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-shell {
          width: 100%;
          padding: 60px 60px 80px;
          background: var(--cream);
          box-sizing: border-box;
        }

        .hero-frame {
          position: relative;
          width: 100%;
          min-height: min(86vh, 860px);
          border-radius: 16px;
          overflow: clip;
          background: var(--black-rich);
          isolation: isolate;
        }

        .hero-media {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-media :global(.hero-img) {
          object-fit: cover;
          object-position: center;
        }

        .hero-veil {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(105deg, rgba(13, 14, 16, 0.52) 0%, rgba(13, 14, 16, 0.16) 52%, rgba(13, 14, 16, 0.4) 100%),
            linear-gradient(180deg, rgba(13, 14, 16, 0.28) 0%, transparent 32%, rgba(13, 14, 16, 0.5) 100%);
          pointer-events: none;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.26;
          pointer-events: none;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          min-height: min(86vh, 860px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(24px, 4vw, 40px);
          /* Extra top inset drops the title clear of the nav logo above it. */
          padding-top: calc(clamp(24px, 4vw, 40px) + 54px);
          box-sizing: border-box;
        }

        .hero-title {
          margin: 0;
          max-width: min(100%, 22ch);
          font-family: var(--font-display);
          font-size: 72px;
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: var(--white);
          animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 48px);
        }

        .hero-bottom-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          max-width: 42ch;
          animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }

        .hero-cta {
          display: inline-flex;
          align-items: stretch;
          height: auto;
          background: var(--white);
          border: 1px solid var(--black);
          color: var(--black);
          text-decoration: none;
          flex-shrink: 0;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .hero-cta-label {
          display: flex;
          align-items: center;
          padding: 30px;
          font-family: var(--font-ui);
          font-size: 28px;
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1;
          white-space: nowrap;
          background: transparent;
        }

        .hero-cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          box-sizing: border-box;
          background: transparent;
          border-left: 1px solid var(--black);
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        .hero-cta-arrow :global(svg) {
          display: block;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        .hero-cta:hover {
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
          transform: translateY(-1px);
        }

        .hero-cta:hover .hero-cta-arrow {
          background: var(--accent);
          color: var(--white);
        }

        .hero-insights {
          width: min(48%, 540px);
          min-width: min(100%, 280px);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          animation: hero-rise 1s cubic-bezier(0.22, 1, 0.36, 1) 0.16s both;
        }

        .hero-insights-card {
          width: 100%;
          display: grid;
          grid-template-columns: 88px minmax(0, 1fr);
          gap: 14px;
          align-items: stretch;
          padding: 12px;
          border-radius: 18px;
          background: rgba(13, 14, 16, 0.55);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(254, 247, 238, 0.14);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
        }

        .hero-insights-photo {
          position: relative;
          width: 88px;
          min-height: 88px;
          border-radius: 12px;
          overflow: hidden;
          background: #2a2a2a;
        }

        .hero-insights-photo :global(.hero-insights-img) {
          object-fit: cover;
          object-position: center top;
        }

        .hero-insights-copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
          padding: 4px 4px 4px 0;
        }

        .hero-insights-kicker {
          margin: 0;
          font-family: var(--font-ui);
          font-size: var(--fs-micro);
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: rgba(254, 247, 238, 0.78);
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hero-insights-text {
          margin: 0;
          font-family: var(--font-display);
          font-size: var(--fs-body);
          font-style: italic;
          font-weight: 500;
          line-height: 1.45;
          color: var(--white);
          animation: quote-in 0.55s ease both;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }

        .hero-insights-pages {
          color: rgba(254, 247, 238, 0.62);
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

        @keyframes quote-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 900px) {
          .hero-shell {
            padding: 20px 20px 48px;
          }

          .hero-frame,
          .hero-inner {
            min-height: min(88vh, 780px);
          }

          .hero-inner {
            padding: 24px;
            padding-top: 56px;
          }

          .hero-title {
            max-width: 100%;
          }

          .hero-bottom {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-insights {
            width: 100%;
            align-items: stretch;
          }
        }

        @media (max-width: 560px) {
          .hero-insights-card {
            grid-template-columns: 72px minmax(0, 1fr);
            gap: 10px;
          }

          .hero-insights-photo {
            width: 72px;
            min-height: 72px;
          }

          .hero-title {
            font-size: clamp(28px, 8.2vw, 40px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-title,
          .hero-bottom-left,
          .hero-insights,
          .hero-insights-text {
            animation: none;
          }

          .hero-cta:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
