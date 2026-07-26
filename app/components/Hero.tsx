"use client";

import { useState } from "react";
import Image from "next/image";
import BlurText from "./BlurText";
import { heroCitations } from "../data/publications";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const current = heroCitations[index];

  const go = (step: number) =>
    setIndex((i) => (i + step + heroCitations.length) % heroCitations.length);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-top">
          <div className="hero-headline">
            <BlurText
              as="h1"
              text="Built on Justice,"
              delay={120}
              animateBy="words"
              direction="top"
              className="hero-line hero-line-muted"
              style={{ color: "#7A7A7A", margin: 0 }}
            />
            <BlurText
              as="h1"
              text="Guided by Ethics."
              delay={120}
              animateBy="words"
              direction="top"
              className="hero-line hero-line-strong"
              style={{ color: "#000", margin: 0 }}
            />
          </div>

          <a href="/contact" className="hero-cta">
            <span className="hero-cta-label">Speak to a Lawyer</span>
            <span className="hero-cta-arrow" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.0776 8.38509H16.164" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.62082 1.0776L16.164 8.38509L8.62082 15.6926" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        <div className="hero-card">
          <Image
            src="/images/hero-holographic.jpg"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="hero-card-bg"
          />

          <div className="hero-quote">
            <div className="hero-quote-box">
              <div className="hero-quote-head">
                <p className="hero-quote-author">PROFESSOR, ADANGOR, SAN</p>
                <div className="hero-quote-rule" />
              </div>
              <p className="hero-quote-text">
                <span>{current.text}</span>
                <span className="hero-quote-pages">{current.pages}</span>
              </p>
            </div>

            <div className="hero-quote-nav">
              <button type="button" onClick={() => go(-1)} aria-label="Previous publication">
                <svg width="16" height="16" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.164 8.38509H1.0776" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.62082 15.6926L1.0776 8.38509L8.62082 1.0776" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next publication">
                <svg width="16" height="16" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.0776 8.38509H16.164" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.62082 1.0776L16.164 8.38509L8.62082 15.6926" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          width: 100%;
          background: #fff;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .hero-inner {
          width: 100%;
          padding: clamp(36px, 4.5vw, 64px) var(--page-gutter)
            clamp(40px, 5vw, 74px);
          box-sizing: border-box;
        }
        .hero-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(20px, 3vw, 40px);
          margin-bottom: clamp(32px, 5.6vw, 74px);
        }
        .hero-headline {
          min-width: 0;
        }
        /* BlurText renders a motion component, which styled-jsx cannot scope.
           Each line is one phrase in the design, so the word spans must not
           wrap: a fixed px cap would break them apart once the type scales up
           on large displays. */
        .hero-headline :global(.hero-line) {
          font-size: var(--fs-hero);
          line-height: 1.1;
          letter-spacing: -0.05em;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
        .hero-headline :global(.hero-line-muted) {
          font-weight: 400;
        }
        .hero-headline :global(.hero-line-strong) {
          font-weight: 500;
          margin-top: 0.12em !important;
        }

        /* Cream label panel butted against a white arrow panel, hairline black
           frame around both, per the Figma button spec. */
        .hero-cta {
          display: inline-flex;
          align-items: stretch;
          height: clamp(52px, 4.6vw, 64px);
          background: #fff8e5;
          border: 1px solid #000;
          border-radius: 2px;
          color: #000;
          text-decoration: none;
          flex-shrink: 0;
          overflow: hidden;
          transition: box-shadow 0.25s ease;
          animation: hero-fade 0.6s ease 0.35s both;
        }
        .hero-cta-label {
          display: flex;
          align-items: center;
          padding: 0 clamp(14px, 1.2vw, 16px) 0 clamp(18px, 1.7vw, 24px);
          font-size: var(--fs-lead);
          white-space: nowrap;
        }
        .hero-cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(46px, 4.3vw, 61px);
          background: #fff;
          border-left: 1px solid #000;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .hero-cta:hover {
          box-shadow: 0 4px 16px rgba(41, 29, 0, 0.18);
        }
        .hero-cta:hover .hero-cta-arrow {
          background: #cd9610;
          color: #fff8e5;
        }

        .hero-card {
          position: relative;
          width: 100%;
          /* 1320 x 429 in the Figma frame. */
          aspect-ratio: 1320 / 429;
          min-height: 300px;
          overflow: hidden;
          animation: hero-fade 0.8s ease 0.15s both;
        }
        /* next/image renders its own element, so scope it globally. */
        .hero-card :global(.hero-card-bg) {
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }
        /* The tooltip + arrows group is centred on the card's vertical axis and
           held 48px off its right edge, matching the ARTICLE frame. */
        .hero-quote {
          position: absolute;
          top: 50%;
          right: 3.64%;
          transform: translateY(-50%);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 19px;
          /* 556 of the card's 1320 in the comp. Kept as a ratio rather than a
             px cap so the box grows with the type on large displays instead of
             squeezing the citation into a narrow column. */
          width: 42.12%;
          min-width: 300px;
        }
        .hero-quote-box {
          width: 100%;
          box-sizing: border-box;
          background: #fffbee;
          border-radius: 4px 32px 4px 32px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
          padding: 16px 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-quote-head {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-quote-author {
          margin: 0;
          color: #2c2c2c;
          font-size: var(--fs-body);
          font-weight: 400;
          /* 38.5px on an 18px face in the Figma header block. */
          line-height: 2.14;
        }
        .hero-quote-rule {
          width: 100%;
          height: 1px;
          background: rgba(201, 189, 150, 0.83);
        }
        .hero-quote-text {
          margin: 0;
          font-size: var(--fs-body);
          font-weight: 500;
          line-height: 1.78;
          letter-spacing: 0.04em;
          color: #000;
        }
        .hero-quote-pages {
          color: #797979;
        }
        .hero-quote-nav {
          display: flex;
          gap: 13px;
        }
        .hero-quote-nav button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 48px;
          padding: 0;
          border: none;
          background: transparent;
          color: #fff;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .hero-quote-nav button:hover {
          opacity: 0.65;
        }

        @keyframes hero-fade {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        /* Tablets — headline stacks above the button, card grows taller so the
           tooltip keeps a sane measure. */
        @media (max-width: 900px) {
          .hero-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-headline {
            max-width: 100%;
          }
          .hero-headline :global(.hero-line) {
            font-size: var(--fs-hero);
          }
          .hero-card {
            aspect-ratio: 3 / 2;
          }
          .hero-quote {
            width: 64%;
            max-width: none;
          }
          .hero-quote-author,
          .hero-quote-text {
            font-size: var(--fs-body);
          }
        }

        /* Phones — the card stops trying to hold the tooltip inside a fixed
           ratio and simply wraps around it. */
        @media (max-width: 640px) {
          .hero-card {
            aspect-ratio: auto;
            min-height: 0;
            display: flex;
            align-items: flex-end;
            padding: 20px;
            box-sizing: border-box;
          }
          .hero-quote {
            position: static;
            transform: none;
            width: 100%;
            min-width: 0;
            gap: 12px;
            padding: 120px 0 0;
          }
          .hero-quote-box {
            border-radius: 4px 24px 4px 24px;
            padding: 14px 14px 10px;
          }
          .hero-quote-author,
          .hero-quote-text {
            font-size: var(--fs-body);
          }
          .hero-quote-text {
            line-height: 1.6;
          }
          .hero-quote-nav button {
            width: 40px;
            height: 38px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-cta,
          .hero-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
