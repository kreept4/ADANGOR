"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const practiceAreas = [
  { title: "Election Petitions", note: "Representing candidates and parties in electoral disputes before tribunals and appellate courts." },
  { title: "Constitutional Law", note: "Advising on constitutional rights, governmental powers, and matters of public law." },
  { title: "Oil and Gas Law Practice", note: "Guiding upstream and downstream operators through Nigeria's energy regulatory framework." },
  { title: "Civil Law Practice", note: "Handling contractual, tortious, and property disputes across the civil courts." },
  { title: "Chieftaincy Cases", note: "Resolving traditional leadership and chieftaincy title disputes." },
  { title: "Maritime Law Practice", note: "Advising on shipping, admiralty claims, and port-related commercial matters." },
  { title: "Aviation Law", note: "Handling regulatory and liability matters within the aviation sector." },
  { title: "Land Law", note: "Advising on land ownership, tenure, and title disputes." },
  { title: "Commercial Law Practice", note: "Structuring and defending commercial transactions and business disputes." },
  { title: "Criminal Litigation", note: "Defending and prosecuting matters across Nigeria's criminal justice system." },
  { title: "General Civil Law Practice", note: "Providing broad-based counsel across everyday civil legal matters." },
  { title: "Public Sector & Government Advisory", note: "Advising government bodies and agencies on regulatory and policy matters." },
  { title: "Infrastructure & Project Finance", note: "Structuring legal frameworks for large-scale infrastructure and financing deals." },
  { title: "Real Estate & Property Law", note: "Guiding property transactions, leases, and title perfection." },
  { title: "Employment & Labour Law", note: "Advising employers and employees on workplace rights and disputes." },
];

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="xp-section">
      <div className="xp-inner">
        <div className="xp-head">
          <h2 className="xp-title">Our Expertise</h2>
          <p className="xp-intro">
            Four decades of principled practice across Nigeria&apos;s courts and
            regulators. From election petitions to energy and maritime matters,
            every brief is met with the same diligence and discretion.
          </p>
        </div>

        <ul className="xp-list">
          {practiceAreas.map((area, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={area.title} className="xp-item">
                <button
                  type="button"
                  className="xp-row"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="xp-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="xp-name">{area.title}</span>
                  <span className={`xp-arrow ${isOpen ? "open" : ""}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2.5V15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.5 10L9 15.5L14.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="note"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="xp-note">{area.note}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .xp-section {
          width: 100%;
          background: #f7faf9;
          font-family: var(--font-roboto-slab), serif;
          box-sizing: border-box;
        }
        .xp-inner {
          width: 100%;
          padding: clamp(56px, 7vw, 112px) clamp(20px, 5.5vw, 140px)
            clamp(48px, 6vw, 96px);
          box-sizing: border-box;
        }
        .xp-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 64px);
          margin-bottom: clamp(40px, 5.5vw, 88px);
        }
        .xp-title {
          margin: 0;
          color: #14231f;
          font-size: clamp(34px, 5.2vw, 68px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.015em;
        }
        .xp-intro {
          margin: 8px 0 0;
          max-width: 420px;
          color: #5c6a67;
          font-size: clamp(12px, 0.95vw, 13.5px);
          font-weight: 400;
          line-height: 1.65;
          flex-shrink: 0;
        }

        .xp-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid #dfe6e4;
        }
        .xp-item {
          border-bottom: 1px solid #dfe6e4;
        }
        .xp-row {
          width: 100%;
          display: grid;
          grid-template-columns: clamp(64px, 8vw, 110px) 1fr 32px;
          align-items: center;
          gap: clamp(12px, 1.6vw, 24px);
          padding: clamp(18px, 1.9vw, 26px) 0;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          color: inherit;
        }
        .xp-num {
          font-family: var(--font-roboto-mono), monospace;
          font-size: clamp(12px, 1.05vw, 15px);
          font-weight: 400;
          color: #cd9610;
        }
        .xp-name {
          font-size: clamp(17px, 1.75vw, 26px);
          font-weight: 400;
          color: #14231f;
          transition: color 0.2s ease;
        }
        .xp-row:hover .xp-name {
          color: #cd9610;
        }
        .xp-arrow {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: #14231f;
          transition: transform 0.3s ease, color 0.2s ease;
        }
        .xp-arrow.open {
          transform: rotate(180deg);
          color: #cd9610;
        }
        .xp-note {
          margin: 0;
          padding: 0 40px clamp(18px, 1.9vw, 26px)
            calc(clamp(64px, 8vw, 110px) + clamp(12px, 1.6vw, 24px));
          color: #5c6a67;
          font-size: clamp(13px, 1.1vw, 16px);
          font-weight: 400;
          line-height: 1.7;
          max-width: 820px;
        }

        /* Tablets — intro drops below the heading; sizing stays fluid. */
        @media (max-width: 1024px) {
          .xp-head {
            flex-direction: column;
            gap: 20px;
          }
          .xp-intro {
            max-width: 560px;
          }
        }

        /* Phones — tighten the number gutter so titles keep their line. */
        @media (max-width: 640px) {
          .xp-row {
            grid-template-columns: 40px 1fr 22px;
          }
          .xp-note {
            padding-left: 52px;
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
}
