"use client";

const values = [
  { num: "01", label: "INTEGRITY" },
  { num: "02", label: "DILIGENCE" },
  { num: "03", label: "HONESTY" },
];

export default function OurValues() {
  return (
    <section className="ov-section">
      <div className="ov-inner">
        <h2 className="ov-heading">OUR VALUES</h2>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#E5E5E5", marginTop: "24px" }} />

        <div className="ov-row">
          <div className="ov-stats">
            <div>
              <div className="ov-stat-num">40+</div>
              <div style={{ width: "40px", height: "1px", background: "#FFD46C", margin: "8px 0" }} />
              <div style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}>YEARS OF PRACTICE</div>
            </div>
            <div>
              <div className="ov-stat-num">12</div>
              <div style={{ width: "40px", height: "1px", background: "#FFD46C", margin: "8px 0" }} />
              <div style={{ color: "#383131", fontSize: "16px", fontWeight: 400 }}>PRACTICE AREAS</div>
            </div>
          </div>

          <div className="ov-divider" />

          <div className="ov-values-col">
            <div className="ov-values-row">
              {values.map((v) => (
                <div key={v.label + v.num} className="ov-value-item">
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
            <p className="ov-paragraph">
              At Prof. Z. Adangor &amp; Co, the practice of law is guided by
              diligence, cognate experience, and an unwavering commitment to
              our clients. Every matter entrusted to us is approached with
              care, discretion, and strategic insight because we understand
              that legal decisions shape businesses, institutions, and lives.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ov-section {
          width: 100%;
          background-color: #fff;
          font-family: var(--font-roboto-slab), serif;
          padding: 128px 96px;
          box-sizing: border-box;
        }
        .ov-inner {
          max-width: 1440px;
          margin: 0 auto;
        }
        .ov-heading {
          color: #cd9610;
          font-size: 48px;
          font-weight: 400;
          line-height: 180%;
          margin: 0;
        }
        .ov-row {
          display: flex;
          flex-wrap: wrap;
          gap: 64px;
          margin-top: 64px;
          align-items: flex-start;
        }
        .ov-stats {
          display: flex;
          flex-direction: column;
          gap: 40px;
          flex-shrink: 0;
        }
        .ov-stat-num {
          font-family: var(--font-roboto-mono), monospace;
          color: #291d00;
          font-size: 48px;
          font-weight: 400;
        }
        .ov-divider {
          width: 1px;
          height: 366px;
          background: #ffd46c;
          flex-shrink: 0;
        }
        .ov-values-col {
          display: flex;
          flex-direction: column;
          width: 873px;
          max-width: 100%;
          align-items: flex-start;
          gap: 40px;
          flex-shrink: 0;
        }
        .ov-values-row {
          display: flex;
          gap: 64px;
          flex-wrap: wrap;
        }
        .ov-value-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 140px;
        }
        .ov-paragraph {
          width: 100%;
          margin: 0;
          color: #000;
          font-size: 24px;
          font-weight: 400;
          line-height: 169%;
        }

        @media (max-width: 1024px) {
          .ov-section {
            padding: 80px 48px;
          }
          .ov-heading {
            font-size: 40px;
          }
          .ov-divider {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .ov-section {
            padding: 56px 24px;
          }
          .ov-heading {
            font-size: 32px;
          }
          .ov-row {
            gap: 40px;
            margin-top: 40px;
          }
          .ov-stats {
            flex-direction: row;
            gap: 32px;
            flex-wrap: wrap;
          }
          .ov-stat-num {
            font-size: 36px;
          }
          .ov-values-row {
            gap: 24px;
          }
          .ov-value-item {
            width: calc(50% - 12px);
          }
          .ov-paragraph {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
