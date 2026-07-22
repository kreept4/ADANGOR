const fs = require("fs");
const path = require("path");

const heroPath = path.join("app", "components", "Hero.tsx");
const valuesPath = path.join("app", "components", "OurValues.tsx");

if (!fs.existsSync(heroPath) || !fs.existsSync(valuesPath)) {
  console.error("Run this from the project root (lawfirm-site), not from inside app/components.");
  process.exit(1);
}

// ---------- Hero.tsx: fixed 720px box -> flex-1, fills whatever space remains ----------
let hero = fs.readFileSync(heroPath, "utf8");

hero = hero.replace(
  `<div
          className="relative flex-shrink-0"
          style={{
            width: "720px",
            height: "556px",
            overflow: "hidden",
            backgroundColor: "#0d0605",
          }}
        >`,
  `<div
          className="relative flex-1 min-w-0"
          style={{
            height: "556px",
            overflow: "hidden",
            backgroundColor: "#0d0605",
          }}
        >`
);

fs.writeFileSync(heroPath, hero, "utf8");
console.log("Hero.tsx patched: image box now flex-1, fills all remaining width instead of a fixed 720px — no more cream gap regardless of screen width.");

// ---------- OurValues.tsx: nudge left padding ----------
let values = fs.readFileSync(valuesPath, "utf8");

values = values.replace(
  `<section className="w-full bg-white font-[family-name:var(--font-roboto-slab)] px-[59px] pt-32 pb-32">`,
  `<section className="w-full bg-white font-[family-name:var(--font-roboto-slab)] px-[96px] pt-32 pb-32">`
);

fs.writeFileSync(valuesPath, values, "utf8");
console.log("OurValues.tsx patched: left/right padding increased from 59px to 96px (heading, values row, and paragraph all shift right together).");

console.log("\nNow:");
console.log("  Remove-Item -Recurse -Force .next");
console.log("  npm run dev");
console.log("Then hard refresh.");
