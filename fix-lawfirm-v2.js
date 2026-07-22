const fs = require("fs");
const path = require("path");

const heroPath = path.join("app", "components", "Hero.tsx");
const valuesPath = path.join("app", "components", "OurValues.tsx");

if (!fs.existsSync(heroPath) || !fs.existsSync(valuesPath)) {
  console.error("Run this from the project root (lawfirm-site), not from inside app/components.");
  process.exit(1);
}

// ---------- Hero.tsx ----------
let hero = fs.readFileSync(heroPath, "utf8");

hero = hero.replace(
  /<div\s+className="relative flex-shrink-0"\s+style=\{\{ width: "720px", height: "556px", overflow: "hidden" \}\}\s*>[\s\S]*?<\/div>\s*<\/section>/,
  `<div
          className="relative flex-shrink-0"
          style={{
            width: "720px",
            height: "556px",
            overflow: "hidden",
            backgroundColor: "#0d0605",
          }}
        >
          <Image
            src="/images/hero-judge.jpg"
            alt="Judge"
            fill
            sizes="720px"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(91deg, rgba(0,0,0,0.66) 22.52%, rgba(51,51,51,0.33) 51.2%, rgba(102,102,102,0.00) 62.82%)",
            }}
          />
        </div>
      </section>`
);

fs.writeFileSync(heroPath, hero, "utf8");
console.log("Hero.tsx patched: now uses the pre-cropped image + matching dark backdrop, no more object-position guessing.");

// ---------- OurValues.tsx ----------
const newValues = `"use client";

const values = [
  { num: "01", label: "INTEGRITY" },
  { num: "02", label: "DILIGENCE" },
  { num: "03", label: "HONESTY" },
];

export default function OurValues() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-roboto-slab)] px-[59px] pt-32 pb-32">
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
`;

fs.writeFileSync(valuesPath, newValues, "utf8");
console.log("OurValues.tsx rewritten: 01/02/03 now sits directly above the paragraph in one column, divider placed between stats and that column.");

console.log("\nNow:");
console.log("1. Copy the new hero-judge.jpg (from this chat) into public/images/, overwriting the old one.");
console.log("2. Run:");
console.log("   Remove-Item -Recurse -Force .next");
console.log("   npm run dev");
console.log("3. Hard refresh (Ctrl+Shift+R).");
