"use client";

import type { CSSProperties } from "react";
import { practiceAreas } from "../data/expertise";
import FlowingMenu from "./FlowingMenu/FlowingMenu";

const ROW_HEIGHT = "clamp(64px, 7.5vw, 80px)";

/** Visible fold ends at Maritime Law; remaining areas scroll inside the frame. */
const maritimeIndex = practiceAreas.findIndex((area) =>
  area.title.toLowerCase().includes("maritime law"),
);
const foldCount = maritimeIndex >= 0 ? maritimeIndex + 1 : 6;

const menuItems = practiceAreas.map((area) => ({
  text: area.title,
  link: "/expertise",
}));

export default function Expertise() {
  const frameStyle = {
    ["--xp-row-h"]: ROW_HEIGHT,
    ["--xp-fold-count"]: String(foldCount),
  } as CSSProperties;

  return (
    <section className="xp-section">
      <div className="xp-inner">
        <h2 className="xp-title">Our Expertise</h2>

        <p className="xp-intro">
          From election petitions and constitutional questions to maritime,
          energy and commercial disputes, the chambers acts across the full
          range of advocacy. Each matter is prepared with the same care: the
          record, the doctrine, and the hearing.
        </p>

        <div className="xp-frame" style={frameStyle}>
          <FlowingMenu
            items={menuItems}
            speed={16}
            textColor="#332524"
            bgColor="#fafafa"
            marqueeBgColor="#fff0d4"
            marqueeTextColor="#CD9610"
            borderColor="#DDD6CD"
            rowHeight={ROW_HEIGHT}
          />
        </div>
      </div>

      <style jsx>{`
        .xp-section {
          width: 100%;
          background: #ffffff;
          font-family: var(--font-ui);
          box-sizing: border-box;
        }
        .xp-inner {
          width: 100%;
          background: #ffffff;
          padding: clamp(48px, 5vw, 88px) var(--page-gutter)
            clamp(64px, 7vw, 110px);
          box-sizing: border-box;
        }
        .xp-title {
          margin: 0 0 clamp(20px, 2.5vw, 32px);
          color: var(--brown-ink);
          font-size: calc(var(--fs-h2) + 4px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.03em;
          text-align: right;
        }
        .xp-intro {
          margin: 0 0 clamp(44px, calc(3.5vw + 16px), 64px);
          max-width: 42em;
          margin-left: auto;
          color: var(--brown-ink);
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          line-height: 1.35;
          letter-spacing: -0.02em;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }
        .xp-frame {
          --xp-row-h: clamp(64px, 7.5vw, 80px);
          --xp-fold-count: 6;
          background-color: #fafafa;
          border-width: 8px;
          border-style: solid;
          border-color: #c5c6c8;
          box-sizing: border-box;
          height: auto;
          max-height: none;
          overflow: visible;
        }

        @media (max-width: 900px) {
          .xp-title {
            text-align: left;
          }
          .xp-intro {
            margin-left: 0;
            font-size: clamp(20px, 4.5vw, 28px);
          }
        }
      `}</style>
    </section>
  );
}
