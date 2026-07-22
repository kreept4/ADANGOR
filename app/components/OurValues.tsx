"use client";

const values = [
  { num: "01", label: "INTEGRITY" },
  { num: "02", label: "DILIGENCE" },
  { num: "03", label: "HONESTY" },
];

export default function OurValues() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-roboto-slab)] px-[96px] pt-32 pb-32">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2
          style={{
            color: "#CD9610",
            fontSize: "48px",
            fontWeight: 400,
            lineHeight: "180%",
          }}
        >
          OUR VALUES
        </h2>

        {/* Full-width divider under heading */}
        <div className="w-full h-px bg-[#E5E5E5] mt-6" />

        {/* Bottom row: stats left, vertical divider, [01/02/03 + paragraph] right column */}
        <div className="flex flex-col md:flex-row gap-16 mt-16">
          <div className="flex flex-col gap-10 flex-shrink-0">
            <div>
              <div
                className="font-[family-name:var(--font-roboto-mono)]"
                style={{ color: "#291D00", fontSize: "48px", fontWeight: 400 }}
              >
                40+
              </div>
              <div style={{ width: "40px", height: "1px", background: "#FFD46C" }} className="my-2" />
              <div style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}>
                YEARS OF PRACTICE
              </div>
            </div>
            <div>
              <div
                className="font-[family-name:var(--font-roboto-mono)]"
                style={{ color: "#291D00", fontSize: "48px", fontWeight: 400 }}
              >
                12
              </div>
              <div style={{ width: "40px", height: "1px", background: "#FFD46C" }} className="my-2" />
              <div style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}>
                PRACTICE AREAS
              </div>
            </div>
          </div>

          {/* Vertical gold divider between stats and the values/paragraph column */}
          <div
            className="hidden md:block flex-shrink-0"
            style={{ width: "1px", height: "366px", background: "#FFD46C" }}
          />

          <div className="flex flex-col gap-16 flex-1">
            {/* 01 / 02 / 03 row, left-aligned, directly above the paragraph */}
            <div className="flex gap-16">
              {values.map((v) => (
                <div key={v.label + v.num} className="flex flex-col gap-3 w-[140px]">
                  <span
                    className="font-[family-name:var(--font-roboto-mono)]"
                    style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}
                  >
                    {v.num}
                  </span>
                  <div style={{ width: "46px", height: "1px", background: "#FFD46C" }} />
                  <span style={{ color: "#CD9610", fontSize: "24px", fontWeight: 500 }}>
                    {v.label}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                width: "814px",
                flexShrink: 0,
                maxWidth: "100%",
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
