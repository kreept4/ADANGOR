const fs = require("fs");
const path = require("path");

const heroPath = path.join("app", "components", "Hero.tsx");
const valuesPath = path.join("app", "components", "OurValues.tsx");

if (!fs.existsSync(heroPath) || !fs.existsSync(valuesPath)) {
  console.error("Run this from the project root (lawfirm-site), not from inside app/components.");
  process.exit(1);
}

// ---------- Hero.tsx: switch cover -> contain, point at the wider crop ----------
let hero = fs.readFileSync(heroPath, "utf8");

hero = hero.replace(
  `<Image
            src="/images/hero-judge.jpg"
            alt="Judge"
            fill
            sizes="720px"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />`,
  `<Image
            src="/images/hero-judge-full.jpg"
            alt="Judge"
            fill
            sizes="720px"
            style={{ objectFit: "contain", objectPosition: "50% 50%" }}
          />`
);

fs.writeFileSync(heroPath, hero, "utf8");
console.log("Hero.tsx patched: contain fit, pointed at hero-judge-full.jpg (full head + shoulders, dark backdrop fills the rest).");

// ---------- OurValues.tsx: cap paragraph width to match the values row ----------
let values = fs.readFileSync(valuesPath, "utf8");

values = values.replace(
  `            <p
              style={{
                width: "814px",
                maxWidth: "100%",
                color: "#000",`,
  `            <p
              style={{
                width: "548px",
                maxWidth: "100%",
                color: "#000",`
);

fs.writeFileSync(valuesPath, values, "utf8");
console.log("OurValues.tsx patched: paragraph now capped to 548px, matching the 01/02/03 row width above it.");

console.log("\nNow:");
console.log("1. Copy hero-judge-full.jpg (from this chat) into public/images/.");
console.log("2. Remove-Item -Recurse -Force .next");
console.log("3. npm run dev, then hard refresh.");
