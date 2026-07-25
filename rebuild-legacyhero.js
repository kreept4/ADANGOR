const fs = require("fs");
const path = "./app/components/LegacyHero.tsx";

const newFile = `"use client";

const timelineItems = [
  {
    label: "SAN Conferment",
    date: "AUG. 20\\\\2020",
    summary:
      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",
  },
  {
    label: "SAN Conferment",
    date: "AUG. 20\\\\2020",
    summary:
      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",
  },
  {
    label: "SAN Conferment",
    date: "AUG. 20\\\\2020",
    summary:
      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",
  },
];

const valueTabs = ["HONESTY", "JUSTICE", "INTEGRITY"];

const awards = [
  {
    title:
      "Special Recognition Award by the Nigerian Bar Association, Port Harcourt Branch.",
    org: "IJAW NATIONAL CONGRESS",
  },
  {
    title:
      "Special Recognition Award by the Nigerian Bar Association, Port Harcourt Branch.",
    org: "IJAW NATIONAL CONGRESS",
  },
];

function ConferralMarker() {
  return (
    <svg width="40" height="66" viewBox="0 0 40 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="19.5" y1="-1.09278e-07" x2="19.5" y2="33" stroke="#7D7A7A" strokeWidth="5" />
      <ellipse cx="20" cy="45.5" rx="20" ry="20.5" fill="white" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="126.36" height="225.173" viewBox="0 0 127 226" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.5226 95.3281C66.5226 95.3281 68.2199 158.925 83.4949 158.925H42.8633C58.1383 158.925 59.8357 95.3281 59.8357 95.3281H66.5226Z" fill="url(#paint0_linear_646_22327)" />
      <path d="M32.2656 167.759C32.2656 162.88 36.2203 158.926 41.0986 158.926H85.2634C90.1418 158.926 94.0964 162.88 94.0964 167.759V173.058C94.0964 177.937 90.1418 181.891 85.2634 181.891H41.0986C36.2203 181.891 32.2656 177.937 32.2656 173.058V167.759Z" fill="url(#paint1_linear_646_22327)" />
      <path d="M50.5069 16.7785C56.0273 5.59283 58.7876 0 63.1802 0C67.5729 0 70.3331 5.59283 75.8536 16.7785L81.9575 29.1463C83.5682 32.41 84.3736 34.0419 85.7848 35.0671C87.196 36.0924 88.9968 36.3541 92.5985 36.8775L106.247 38.8607C118.591 40.6544 124.764 41.5513 126.121 45.7289C127.478 49.9066 123.012 54.26 114.08 62.9668L104.204 72.5938C101.597 75.1342 100.294 76.4044 99.7552 78.0634C99.2161 79.7223 99.5238 81.5159 100.139 85.1031L102.47 98.6966C104.579 110.991 105.633 117.138 102.08 119.72C98.526 122.302 93.0055 119.4 81.9646 113.595L69.7568 107.177C66.5353 105.483 64.9245 104.637 63.1802 104.637C61.4359 104.637 59.8251 105.483 56.6037 107.177L44.3958 113.595C33.3549 119.4 27.8344 122.302 24.2807 119.72C20.727 117.138 21.7813 110.991 23.8899 98.6966L26.2214 85.1031C26.8367 81.5159 27.1443 79.7223 26.6053 78.0634C26.0662 76.4044 24.7631 75.1342 22.1569 72.5938L12.2806 62.9668C3.34824 54.26 -1.11791 49.9066 0.239489 45.7289C1.59689 41.5513 7.76897 40.6544 20.1131 38.8607L33.7619 36.8775C37.3636 36.3541 39.1645 36.0924 40.5757 35.0671C41.9868 34.0419 42.7922 32.41 44.403 29.1463L50.5069 16.7785Z" fill="url(#paint2_linear_646_22327)" />
      <path d="M94.0974 170.406C98.9757 170.406 102.93 174.361 102.93 179.239V216.338C102.93 221.216 98.9757 225.17 94.0974 225.17H32.2666C27.3882 225.17 23.4336 221.216 23.4336 216.338V179.239C23.4336 174.361 27.3882 170.406 32.2666 170.406H94.0974ZM41.0995 183.656C38.6604 183.656 36.683 185.633 36.683 188.072V210.154C36.683 212.594 38.6604 214.571 41.0995 214.571H85.2644C87.7035 214.571 89.6809 212.594 89.6809 210.154V188.072C89.6809 185.633 87.7035 183.656 85.2644 183.656H41.0995Z" fill="url(#paint3_linear_646_22327)" />
      <path d="M10.3945 217.223C10.3945 212.833 13.9537 209.273 18.3442 209.273H108.44C112.831 209.273 116.39 212.833 116.39 217.223C116.39 221.614 112.831 225.173 108.44 225.173H18.3442C13.9537 225.173 10.3945 221.614 10.3945 217.223Z" fill="url(#paint4_linear_646_22327)" />
      <defs>
        <linearGradient id="paint0_linear_646_22327" x1="64.2483" y1="95.3283" x2="64.2484" y2="163.311" gradientUnits="userSpaceOnUse">
          <stop offset="0.55" stopColor="#FF8D28" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint1_linear_646_22327" x1="63.1812" y1="158.926" x2="63.1812" y2="181.891" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint2_linear_646_22327" x1="67.1317" y1="-8.89993" x2="67.1317" y2="151.615" gradientUnits="userSpaceOnUse">
          <stop offset="0.55" stopColor="#FACB31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint3_linear_646_22327" x1="63.1822" y1="170.406" x2="63.1822" y2="225.17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint4_linear_646_22327" x1="63.3927" y1="209.273" x2="63.3927" y2="225.173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function LegacyHero() {
  return (
    <section className="w-full bg-white" style={{ padding: "0 clamp(24px, 6vw, 96px) clamp(48px, 10vw, 128px)" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: "1400px", background: "#0D0904", borderRadius: "32px", padding: "clamp(8px, 1.5vw, 16px)" }}
      >
        <div
          className="flex flex-col gap-16"
          style={{ background: "#FFFFFF", borderRadius: "24px", padding: "clamp(24px, 5vw, 64px)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-roboto-slab), serif",
              color: "#CD9610",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.48px",
              lineHeight: "138%",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            A Legacy of Diligence and Integrity
          </h2>

          <div className="relative">
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "-24px",
                left: "-24px",
                width: "615.287px",
                maxWidth: "60%",
                height: "297px",
                maxHeight: "50%",
                borderRadius: "0 0 17.392px 0",
                background: "#6474B2",
                zIndex: 0,
              }}
            />

            <div className="relative flex flex-col lg:flex-row gap-6 items-stretch" style={{ zIndex: 1 }}>
              <div
                className="flex-1 rounded-[24px] flex flex-col gap-10"
                style={{ background: "#0D0904", padding: "clamp(24px, 4vw, 56px) clamp(20px, 4vw, 64px)" }}
              >
                <div className="flex flex-col gap-4">
                  <div style={{ borderTop: "1px dashed rgba(255,255,255,0.35)" }} />
                  <div className="grid grid-cols-3">
                    {timelineItems.map((_, i) => (
                      <div key={i} className="flex justify-center" style={{ marginTop: "-20px" }}>
                        <ConferralMarker />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {timelineItems.map((item, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-2">
                        <span
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "24px",
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-roboto-mono), monospace",
                            color: "#949494",
                            fontWeight: 600,
                            fontSize: "clamp(14px, 1.6vw, 20px)",
                            lineHeight: "116%",
                            textTransform: "uppercase",
                            width: "100%",
                            maxWidth: "262px",
                          }}
                        >
                          {item.date}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {timelineItems.map((item, i) => (
                      <p
                        key={i}
                        className="text-center"
                        style={{
                          fontFamily: "var(--font-nunito), sans-serif",
                          color: "#fff",
                          fontSize: "clamp(13px, 1.4vw, 16px)",
                          lineHeight: "180%",
                          width: "100%",
                          maxWidth: "262px",
                          margin: "0 auto",
                        }}
                      >
                        {item.summary}
                      </p>
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-roboto-mono), monospace",
                    color: "#AEA380",
                    fontSize: "clamp(16px, 2vw, 24px)",
                    fontWeight: 400,
                    lineHeight: "146%",
                    letterSpacing: "-0.24px",
                    width: "100%",
                    maxWidth: "645.011px",
                    margin: 0,
                  }}
                >
                  Over three decades of practice, Prof. Adangor has been recognised by institutions across Nigeria for his extraordinary contributions to law, justice, and public service.
                </p>
              </div>

              <div
                className="flex flex-col justify-center shrink-0 relative"
                style={{
                  background: "#CD9610",
                  border: "1px solid #000",
                  borderRadius: "26.089px",
                  padding: "clamp(32px, 5vw, 77px) clamp(20px, 3vw, 37px) clamp(32px, 5vw, 76px) clamp(20px, 3vw, 37.57px)",
                  width: "100%",
                  maxWidth: "584.572px",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: "clamp(48px, 6vw, 96px)",
                    lineHeight: "100%",
                    textDecoration: "line-through",
                    position: "absolute",
                    top: "12px",
                    left: "24px",
                    color: "#000",
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    lineHeight: "144%",
                    width: "100%",
                    margin: 0,
                  }}
                >
                  The greatest glory in living lies not in never falling, but in rising every time we fall.
                </p>
                <span
                  aria-hidden
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: "clamp(48px, 6vw, 96px)",
                    lineHeight: "100%",
                    textDecoration: "line-through",
                    position: "absolute",
                    bottom: "12px",
                    right: "24px",
                    color: "#000",
                  }}
                >
                  &rdquo;
                </span>
              </div>
            </div>
          </div>

          <div style={{ width: "100%", maxWidth: "1271.196px", height: "4px", background: "#524D37", margin: "0 auto" }} />

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex gap-3 shrink-0">
              {valueTabs.map((word, i) => {
                const isHonesty = word === "HONESTY";
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                    style={{
                      background: "rgba(255,242,178,0.66)",
                      padding: isHonesty ? "12px 24px 24px 24px" : "12px 24px",
                      gap: isHonesty ? "8px" : undefined,
                      borderRadius: "6px",
                    }}
                  >
                    {word.split("").map((letter, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: "var(--font-roboto-slab), serif",
                          color: "#533700",
                          fontSize: "clamp(18px, 2vw, 28px)",
                          fontWeight: 400,
                          lineHeight: "120%",
                          textAlign: "center",
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4" style={{ width: "100%", alignSelf: "stretch" }}>
              <h3
                style={{
                  fontFamily: "var(--font-roboto-slab), serif",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: "180%",
                  textAlign: "right",
                  textTransform: "uppercase",
                  width: "100%",
                  margin: 0,
                }}
              >
                Awards and Recognition
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-roboto-slab), serif",
                  color: "#3F3F3F",
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.8vw, 24px)",
                  lineHeight: "170.66%",
                  textAlign: "right",
                  width: "100%",
                  margin: 0,
                }}
              >
                A showcase of distinguished honours recognizing exceptional legal advocacy, constitutional leadership, public service, and enduring contributions to the administration of justice and national development.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row gap-8 overflow-x-auto"
            style={{ background: "#E0B117", borderRadius: "8px", padding: "32px" }}
          >
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center justify-center gap-8 bg-white rounded-[24px]"
                style={{ padding: "32px 0", minWidth: "260px" }}
              >
                <TrophyIcon />
                <h4
                  style={{
                    fontFamily: "var(--font-roboto-slab), serif",
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "170.66%",
                    textAlign: "center",
                    padding: "0 24px",
                    margin: 0,
                  }}
                >
                  {award.title}
                </h4>
                <span
                  style={{
                    fontFamily: "var(--font-roboto-slab), serif",
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "130%",
                    textAlign: "center",
                  }}
                >
                  {award.org}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path, newFile);
console.log("LegacyHero.tsx rebuilt to spec, fully responsive.");
