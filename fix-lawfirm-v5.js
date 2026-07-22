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
                color: "#000",`;

const after = `            <p
              style={{
                width: "548px",
                maxWidth: "100%",
                marginLeft: "24px",
                color: "#000",`;

if (!values.includes(before)) {
  console.error("Expected paragraph block not found — file may have been edited since the last patch. Paste current OurValues.tsx content and I'll redo this by hand.");
  process.exit(1);
}

values = values.replace(before, after);
fs.writeFileSync(valuesPath, values, "utf8");
console.log("OurValues.tsx patched: paragraph nudged 24px right relative to the 01/02/03 row.");

console.log("\nNow:");
console.log("  Remove-Item -Recurse -Force .next");
console.log("  npm run dev");
console.log("Then hard refresh.");
