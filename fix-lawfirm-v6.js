const fs = require("fs");
const path = require("path");

const valuesPath = path.join("app", "components", "OurValues.tsx");

if (!fs.existsSync(valuesPath)) {
  console.error("Run this from the project root (lawfirm-site), not from inside app/components.");
  process.exit(1);
}

let values = fs.readFileSync(valuesPath, "utf8");

const before = `            <p
              style={{
                width: "548px",
                maxWidth: "100%",
                marginLeft: "24px",
                color: "#000",`;

const after = `            <p
              style={{
                width: "814px",
                flexShrink: 0,
                maxWidth: "100%",
                color: "#000",`;

if (!values.includes(before)) {
  console.error("Expected block not found — paste current OurValues.tsx and I'll fix it directly instead of guessing at the diff.");
  process.exit(1);
}

values = values.replace(before, after);
fs.writeFileSync(valuesPath, values, "utf8");
console.log("OurValues.tsx patched: paragraph reverted to width:814px / flex-shrink:0, matching Figma Dev Mode exactly. No more margin-left guess.");

console.log("\nNow:");
console.log("  Remove-Item -Recurse -Force .next");
console.log("  npm run dev");
console.log("Then hard refresh.");
