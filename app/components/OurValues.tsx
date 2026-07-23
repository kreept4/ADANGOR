"use client";

const values = [
  { num: "01", label: "INTEGRITY" },
  { num: "02", label: "DILIGENCE" },
  { num: "03", label: "HONESTY" },
];

export default function OurValues() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FFF",
        fontFamily: "var(--font-roboto-slab), serif",
        padding: "128px 96px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            color: "#CD9610",
            fontSize: "48px",
            fontWeight: 400,
            lineHeight: "180%",
            margin: 0,
          }}
        >
          OUR VALUES
        </h2>

        {/* Full-width divider under heading */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "#E5E5E5", marginTop: "24px" }} />

        {/* Bottom row: stats left, vertical divider, [01/02/03 + paragraph] right column (fixed 873px per Figma) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "64px", marginTop: "64px", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", flexShrink: 0 }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-roboto-mono), monospace",
                  color: "#291D00",
                  fontSize: "48px",
                  fontWeight: 400,
                }}
              >
                40+
              </div>
              <div style={{ width: "40px", height: "1px", background: "#FFD46C", margin: "8px 0" }} />
              <div style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}>YEARS OF PRACTICE</div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-roboto-mono), monospace",
                  color: "#291D00",
                  fontSize: "48px",
                  fontWeight: 400,
                }}
              >
                12
              </div>
              <div style={{ width: "40px", height: "1px", background: "#FFD46C", margin: "8px 0" }} />
              <div style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}>PRACTICE AREAS</div>
            </div>
          </div>

          {/* Vertical gold divider between stats and the values/paragraph column */}
          <div style={{ width: "1px", height: "366px", background: "#FFD46C", flexShrink: 0 }} />

          {/* Fixed-width value column per Figma spec: display flex, width 873px, align-items flex-start, gap 40px */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "873px",
              maxWidth: "100%",
              alignItems: "flex-start",
              gap: "40px",
              flexShrink: 0,
            }}
          >
            {/* 01 / 02 / 03 row, left-aligned, directly above the paragraph */}
            <div style={{ display: "flex", gap: "64px" }}>
              {values.map((v) => (
                <div key={v.label + v.num} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "140px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-roboto-mono), monospace",
                      color: "#383131",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                  >
                    {v.num}
                  </span>
                  <div style={{ width: "46px", height: "1px", background: "#FFD46C" }} />
                  <span style={{ color: "#CD9610", fontSize: "24px", fontWeight: 500 }}>{v.label}</span>
                </div>
              ))}
            </div>

            <p
              style={{
                width: "100%",
                margin: 0,
                color: "#000",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "169%",
              }}
            >
              At Prof. Z. Adangor &amp; Co, the practice of law is guided by
              diligence, cognate experience, and an unwavering commitment to
              our clients. Every matter entrusted to us is approached with
              care, discretion, and strategic insight because we understand
              that legal decisions shape businesses, institutions, and lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
