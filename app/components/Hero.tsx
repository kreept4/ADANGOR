"use client";

import { useState } from "react";
import Image from "next/image";
import BlurText from "./BlurText";

type Citation = {
  text: string;
  pages: string;
};

const citations: Citation[] = [
  {
    text: "“The Role of the Court in the Regulation and Control of Take-overs and Mergers in Nigeria” (2000) 3 Journal of Commercial, Private & Property Law (JCPPL)",
    pages: " (pp. 97-111).",
  },
  {
    text: "“Delimiting the Jurisdiction of the Federal High Court in civil causes and matters connected with Mines and Minerals including oil fields, oil mining, geological surveys and natural gas” (2001) 4 Journal of Commercial, Private & Property Law (JCPPL)",
    pages: " (pp. 1-20).",
  },
  {
    text: "“Can the Election Tribunal or the Court of Appeal Order a bye-election under the Electoral Act, 2002?” (2004) 1 Ph.BJ",
    pages: " (pp. 109-124).",
  },
  {
    text: "“Rights, Duties, Obligations and Privileges of Members of the House of Assembly under the 1999 Constitution” (2002-2003) 7 PCLJ",
    pages: " (pp. 162-183).",
  },
  {
    text: "“Action for Declaration of Title to Right of Occupancy over Land Based on Traditional Evidence: Hurdles and Pitfalls” (2014) 4 JPPL",
    pages: " (pp. 91-100).",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const current = citations[index];

  const go = (step: number) =>
    setIndex((i) => (i + step + citations.length) % citations.length);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-top">
          <div className="hero-headline">
            <BlurText
              as="h1"
              text="Built on Justice."
              delay={120}
              animateBy="words"
              direction="top"
              className="hero-line"
              style={{ color: "#7A7A7A", margin: 0 }}
            />
            <BlurText
              as="h1"
              text="Guided by Ethics."
              delay={120}
              animateBy="words"
              direction="top"
              className="hero-line"
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
      </div>

      <div className="hero-card">
          <Image
            src="/images/hero-holographic.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-card-bg"
          />

          <div className="hero-quote">
            <div className="hero-quote-box">
              <p className="hero-quote-author">Prof Z. Adangor SAN</p>
              <div className="hero-quote-rule" />
              <p className="hero-quote-text">
                <span>{current.text}</span>
                <span className="hero-quote-pages">{current.pages}</span>
              </p>
            </div>

            <div className="hero-quote-nav">
              <button type="button" onClick={() => go(-1)} aria-label="Previous publication">
                <svg width="15" height="15" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.164 8.38509H1.0776" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.62082 15.6926L1.0776 8.38509L8.62082 1.0776" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next publication">
                <svg width="15" height="15" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.0776 8.38509H16.164" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.62082 1.0776L16.164 8.38509L8.62082 15.6926" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
      </div>

      <style jsx>{`
        .hero-section {
          width: 100%;
          background: #fff;
          font-family: var(--font-roboto-slab), serif;
          box-sizing: border-box;
        }
        /* No max-width cap: gutters scale with the viewport so wide monitors
           fill out instead of leaving the page stranded in the middle. */
        .hero-inner {
          width: 100%;
          padding: clamp(40px, 6vw, 96px) clamp(20px, 5.5vw, 140px)
            clamp(36px, 5vw, 72px);
          box-sizing: border-box;
        }
        .hero-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(20px, 3vw, 40px);
          margin-bottom: clamp(28px, 4vw, 56px);
        }
        .hero-headline {
          max-width: 585px;
          min-width: 0;
        }
        /* BlurText renders a motion component, which styled-jsx cannot scope. */
        .hero-headline :global(.hero-line) {
          font-size: clamp(28px, 3.8vw, 54px);
          font-weight: 400;
          line-height: 1.34;
          letter-spacing: 0.02em;
        }

        .hero-cta {
          display: inline-flex;
          align-items: stretch;
          height: clamp(52px, 4.6vw, 64px);
          background: #fff;
          border: 1px solid #000;
          border-radius: 2px;
          color: #000;
          text-decoration: none;
          flex-shrink: 0;
          overflow: hidden;
          transition: background-color 0.25s ease, color 0.25s ease;
          animation: hero-fade 0.6s ease 0.35s both;
        }
        .hero-cta-label {
          display: flex;
          align-items: center;
          padding: 0 clamp(16px, 1.5vw, 22px);
          font-size: clamp(14px, 1.15vw, 17px);
          white-space: nowrap;
        }
        .hero-cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(44px, 3.6vw, 52px);
          border-left: 1px solid currentColor;
        }
        .hero-cta:hover {
          background: #000;
          color: #fff;
        }

        /* Full-bleed: spans the viewport, ignoring the inner container gutter. */
        .hero-card {
          position: relative;
          width: 100%;
          height: clamp(340px, 34vw, 520px);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: clamp(20px, 3vw, 48px);
          box-sizing: border-box;
          animation: hero-fade 0.8s ease 0.15s both;
        }
        /* next/image renders its own element, so scope it globally. */
        .hero-card :global(.hero-card-bg) {
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }
        .hero-quote {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
          width: clamp(320px, 38vw, 500px);
          max-width: 100%;
        }
        .hero-quote-box {
          width: 100%;
          box-sizing: border-box;
          background: rgba(255, 251, 238, 0.56);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border-radius: 4px 32px 4px 32px;
          padding: 16px 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-quote-author {
          margin: 0;
          color: #2c2c2c;
          font-size: clamp(13px, 1.05vw, 15px);
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .hero-quote-rule {
          width: 100%;
          height: 1px;
          background: rgba(201, 189, 150, 0.83);
        }
        .hero-quote-text {
          margin: 0;
          font-size: clamp(12px, 1.02vw, 15px);
          font-weight: 500;
          line-height: 1.7;
          letter-spacing: 0.01em;
          color: #000;
        }
        .hero-quote-pages {
          color: #797979;
        }
        .hero-quote-nav {
          display: flex;
          gap: 16px;
        }
        .hero-quote-nav button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
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

        /* Tablets (iPad mini / Air portrait) — headline stacks above the button. */
        @media (max-width: 900px) {
          .hero-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-headline {
            max-width: 100%;
          }
          .hero-headline :global(.hero-line) {
            font-size: clamp(28px, 5.6vw, 44px);
          }
          .hero-card {
            height: clamp(340px, 46vw, 440px);
          }
        }

        /* Phones — quote fills the card, type drops to a readable floor. */
        @media (max-width: 600px) {
          .hero-card {
            height: auto;
            min-height: 300px;
            align-items: flex-end;
          }
          .hero-quote {
            width: 100%;
            gap: 12px;
          }
          .hero-quote-box {
            border-radius: 4px 24px 4px 24px;
            padding: 14px 14px 10px;
          }
          .hero-quote-text {
            font-size: 13px;
            line-height: 1.6;
          }
          .hero-quote-nav button {
            width: 32px;
            height: 32px;
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
