const fs = require('fs');
const path = require('path');

// 1. Patch nav in layout.tsx: reorder + rename "Our Practice Areas" -> "About"
const layoutPath = 'app/layout.tsx';
let layout = fs.readFileSync(layoutPath, 'utf8').replace(/\r\n/g, '\n');

const oldLinks =
  '    links: [\n' +
  '      { label: "Our Expertise", href: "/expertise" },\n' +
  '      { label: "Our Practice Areas", href: "/practice" },\n' +
  '      { label: "Our Professionals", href: "/professionals" },\n' +
  '    ],';

const newLinks =
  '    links: [\n' +
  '      { label: "Our Expertise", href: "/expertise" },\n' +
  '      { label: "Our Professionals", href: "/professionals" },\n' +
  '      { label: "About", href: "/about" },\n' +
  '    ],';

if (layout.includes(oldLinks)) {
  layout = layout.replace(oldLinks, newLinks);
  fs.writeFileSync(layoutPath, layout);
  console.log('OK: nav links reordered + About added in app/layout.tsx');
} else {
  console.log('MISS: nav links block not found in app/layout.tsx (layout.tsx unchanged)');
}

// 2. Create app/about directory
fs.mkdirSync('app/about', { recursive: true });

// 3. AboutHero.tsx
fs.writeFileSync('app/components/AboutHero.tsx',
'"use client";\n' +
'\n' +
'export default function AboutHero() {\n' +
'  return (\n' +
'    <section className="w-full bg-white" style={{ padding: "128px 96px" }}>\n' +
'      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-20">\n' +
'        <div\n' +
'          className="relative shrink-0 rounded-[24px] overflow-hidden"\n' +
'          style={{ background: "#150E09", width: "480px", maxWidth: "100%", padding: "24px" }}\n' +
'        >\n' +
'          {/* TODO: swap in the actual portrait photo */}\n' +
'          <img\n' +
'            src="/images/judge-portrait.jpg"\n' +
'            alt="Professor Z. Adangor, SAN"\n' +
'            className="w-full h-auto rounded-[16px] relative z-10"\n' +
'          />\n' +
'        </div>\n' +
'\n' +
'        <div className="flex flex-col gap-6 max-w-[680px]">\n' +
'          <h1\n' +
'            style={{\n' +
'              fontFamily: "var(--font-roboto-slab), serif",\n' +
'              color: "#181100",\n' +
'              fontWeight: 700,\n' +
'              fontSize: "56px",\n' +
'              lineHeight: "120%",\n' +
'              textTransform: "uppercase",\n' +
'              margin: 0,\n' +
'            }}\n' +
'          >\n' +
'            Professor. Z Adangor,\n' +
'            <br />\n' +
'            SAN &amp; Co\n' +
'          </h1>\n' +
'          <p\n' +
'            style={{\n' +
'              fontFamily: "var(--font-roboto-slab), serif",\n' +
'              color: "#383131",\n' +
'              fontWeight: 400,\n' +
'              fontSize: "20px",\n' +
'              lineHeight: "170%",\n' +
'              margin: 0,\n' +
'            }}\n' +
'          >\n' +
'            The Managing Solicitor, Prof. Zacchaeus Adangor, SAN, DSSRS, MCIArb (UK), ksc, had extensive legal practice with E.C. Ukala, SAN &amp; CO, Efe Chambers, in Port Harcourt where he rose to become Deputy Head of Chambers. Upon leaving the Law Firm of E. C. Ukala SAN, &amp; Co, Prof. Zacchaeus Adangor, SAN, started his own law office, Z. Adangor &amp; Co, Enenwanra Chambers, Port Harcourt, with its first office situated at 72/73, Victoria Street, Port Harcourt Township, before finally relocating to 1D, Okomoko Street, D/Line, Port Harcourt.\n' +
'          </p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </section>\n' +
'  );\n' +
'}\n'
);
console.log('OK: created app/components/AboutHero.tsx');

// 4. LegacyHero.tsx
fs.writeFileSync('app/components/LegacyHero.tsx',
'"use client";\n' +
'\n' +
'const timelineItems = [\n' +
'  {\n' +
'    label: "SAN Conferment",\n' +
'    date: "AUG. 20\\\\2020",\n' +
'    summary:\n' +
'      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",\n' +
'  },\n' +
'  {\n' +
'    label: "SAN Conferment",\n' +
'    date: "AUG. 20\\\\2020",\n' +
'    summary:\n' +
'      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",\n' +
'  },\n' +
'  {\n' +
'    label: "SAN Conferment",\n' +
'    date: "AUG. 20\\\\2020",\n' +
'    summary:\n' +
'      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",\n' +
'  },\n' +
'];\n' +
'\n' +
'const valueTabs = ["JUSTICE", "INTEGRITY", "HONESTY", "DILIGENCE"];\n' +
'\n' +
'const awards = [\n' +
'  {\n' +
'    title:\n' +
'      "Special Recognition Award by the Nigerian Bar Association, Port Harcourt Branch.",\n' +
'    org: "IJAW NATIONAL CONGRESS",\n' +
'  },\n' +
'  {\n' +
'    title:\n' +
'      "Special Recognition Award by the Nigerian Bar Association, Port Harcourt Branch.",\n' +
'    org: "IJAW NATIONAL CONGRESS",\n' +
'  },\n' +
'];\n' +
'\n' +
'function StarIcon() {\n' +
'  return (\n' +
'    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
'      <path\n' +
'        d="M28 2L34.9 20.1L54 22L39 34.6L43.8 54L28 43.3L12.2 54L17 34.6L2 22L21.1 20.1L28 2Z"\n' +
'        fill="url(#starGradient)"\n' +
'      />\n' +
'      <defs>\n' +
'        <linearGradient id="starGradient" x1="2" y1="2" x2="54" y2="54" gradientUnits="userSpaceOnUse">\n' +
'          <stop stopColor="#FFD46C" />\n' +
'          <stop offset="1" stopColor="#E8830A" />\n' +
'        </linearGradient>\n' +
'      </defs>\n' +
'    </svg>\n' +
'  );\n' +
'}\n' +
'\n' +
'export default function LegacyHero() {\n' +
'  return (\n' +
'    <section className="w-full bg-white" style={{ padding: "0 96px 128px" }}>\n' +
'      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">\n' +
'        <h2\n' +
'          style={{\n' +
'            fontFamily: "var(--font-roboto-slab), serif",\n' +
'            color: "#CD9610",\n' +
'            fontWeight: 400,\n' +
'            fontSize: "48px",\n' +
'            lineHeight: "138%",\n' +
'            textTransform: "uppercase",\n' +
'            margin: 0,\n' +
'          }}\n' +
'        >\n' +
'          A Legacy of Diligence and Integrity\n' +
'        </h2>\n' +
'\n' +
'        <div className="flex flex-col lg:flex-row gap-6 items-stretch">\n' +
'          <div\n' +
'            className="flex-1 rounded-[24px] flex flex-col gap-10"\n' +
'            style={{ background: "#0D0904", padding: "56px 64px" }}\n' +
'          >\n' +
'            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">\n' +
'              {timelineItems.map((item, i) => (\n' +
'                <div key={i} className="flex flex-col gap-4">\n' +
'                  <span\n' +
'                    style={{\n' +
'                      fontFamily: "var(--font-roboto-slab), serif",\n' +
'                      color: "#fff",\n' +
'                      fontWeight: 700,\n' +
'                      fontSize: "18px",\n' +
'                    }}\n' +
'                  >\n' +
'                    {item.label}\n' +
'                  </span>\n' +
'                  <span\n' +
'                    style={{\n' +
'                      fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                      color: "#8A8A8A",\n' +
'                      fontSize: "13px",\n' +
'                      letterSpacing: "1px",\n' +
'                    }}\n' +
'                  >\n' +
'                    {item.date}\n' +
'                  </span>\n' +
'                  <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.25)" }} />\n' +
'                  <p\n' +
'                    style={{\n' +
'                      fontFamily: "var(--font-roboto-slab), serif",\n' +
'                      color: "#B5B5B5",\n' +
'                      fontSize: "15px",\n' +
'                      lineHeight: "160%",\n' +
'                      margin: 0,\n' +
'                    }}\n' +
'                  >\n' +
'                    {item.summary}\n' +
'                  </p>\n' +
'                </div>\n' +
'              ))}\n' +
'            </div>\n' +
'            <p\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                color: "#D8D8D8",\n' +
'                fontSize: "15px",\n' +
'                lineHeight: "170%",\n' +
'                margin: 0,\n' +
'              }}\n' +
'            >\n' +
'              Over three decades of practice, Prof. Adangor has been recognised by institutions across Nigeria for his extraordinary contributions to law, justice, and public service.\n' +
'            </p>\n' +
'          </div>\n' +
'\n' +
'          <div\n' +
'            className="flex flex-col justify-center shrink-0 rounded-[24px]"\n' +
'            style={{ background: "#CD9610", padding: "48px", width: "360px", maxWidth: "100%" }}\n' +
'          >\n' +
'            <p\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-slab), serif",\n' +
'                color: "#181100",\n' +
'                fontWeight: 500,\n' +
'                fontSize: "22px",\n' +
'                lineHeight: "150%",\n' +
'                margin: 0,\n' +
'              }}\n' +
'            >\n' +
'              &ldquo;The greatest glory in living lies not in never falling, but in rising every time we fall.&rdquo;\n' +
'            </p>\n' +
'          </div>\n' +
'        </div>\n' +
'\n' +
'        <div className="flex flex-col lg:flex-row gap-10 items-start">\n' +
'          <div className="flex gap-3 shrink-0">\n' +
'            {valueTabs.map((word, i) => (\n' +
'              <div\n' +
'                key={i}\n' +
'                className="flex flex-col items-center"\n' +
'                style={{\n' +
'                  background: "#FCEFC7",\n' +
'                  padding: "16px 8px",\n' +
'                  borderRadius: "6px",\n' +
'                }}\n' +
'              >\n' +
'                {word.split("").map((letter, j) => (\n' +
'                  <span\n' +
'                    key={j}\n' +
'                    style={{\n' +
'                      fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                      color: "#181100",\n' +
'                      fontSize: "14px",\n' +
'                      fontWeight: 600,\n' +
'                      lineHeight: "160%",\n' +
'                    }}\n' +
'                  >\n' +
'                    {letter}\n' +
'                  </span>\n' +
'                ))}\n' +
'              </div>\n' +
'            ))}\n' +
'          </div>\n' +
'\n' +
'          <div className="flex flex-col gap-4">\n' +
'            <h3\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-slab), serif",\n' +
'                color: "#181100",\n' +
'                fontWeight: 400,\n' +
'                fontSize: "36px",\n' +
'                margin: 0,\n' +
'              }}\n' +
'            >\n' +
'              Awards and Recognition\n' +
'            </h3>\n' +
'            <p\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-slab), serif",\n' +
'                color: "#383131",\n' +
'                fontSize: "18px",\n' +
'                lineHeight: "160%",\n' +
'                margin: 0,\n' +
'                maxWidth: "720px",\n' +
'              }}\n' +
'            >\n' +
'              A showcase of distinguished honours recognizing exceptional legal advocacy, constitutional leadership, public service, and enduring contributions to the administration of justice and national development.\n' +
'            </p>\n' +
'          </div>\n' +
'        </div>\n' +
'\n' +
'        <div\n' +
'          className="rounded-[24px] flex flex-col md:flex-row gap-6"\n' +
'          style={{ background: "#CD9610", padding: "48px" }}\n' +
'        >\n' +
'          {awards.map((award, i) => (\n' +
'            <div\n' +
'              key={i}\n' +
'              className="flex-1 flex flex-col items-center text-center gap-6 bg-white rounded-[16px]"\n' +
'              style={{ padding: "40px 32px" }}\n' +
'            >\n' +
'              <StarIcon />\n' +
'              <h4\n' +
'                style={{\n' +
'                  fontFamily: "var(--font-roboto-slab), serif",\n' +
'                  color: "#181100",\n' +
'                  fontWeight: 700,\n' +
'                  fontSize: "20px",\n' +
'                  lineHeight: "140%",\n' +
'                  margin: 0,\n' +
'                }}\n' +
'              >\n' +
'                {award.title}\n' +
'              </h4>\n' +
'              <div style={{ width: "100%", height: "1px", background: "#E5E5E5" }} />\n' +
'              <div className="flex gap-2 items-center">\n' +
'                <span\n' +
'                  style={{\n' +
'                    fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                    color: "#181100",\n' +
'                    fontSize: "13px",\n' +
'                    fontWeight: 700,\n' +
'                  }}\n' +
'                >\n' +
'                  ORG:\n' +
'                </span>\n' +
'                <span\n' +
'                  style={{\n' +
'                    fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                    color: "#8A8A8A",\n' +
'                    fontSize: "13px",\n' +
'                  }}\n' +
'                >\n' +
'                  {award.org}\n' +
'                </span>\n' +
'              </div>\n' +
'            </div>\n' +
'          ))}\n' +
'        </div>\n' +
'      </div>\n' +
'    </section>\n' +
'  );\n' +
'}\n'
);
console.log('OK: created app/components/LegacyHero.tsx');

// 5. app/about/page.tsx
fs.writeFileSync('app/about/page.tsx',
'import AboutHero from "../components/AboutHero";\n' +
'import LegacyHero from "../components/LegacyHero";\n' +
'\n' +
'export default function AboutPage() {\n' +
'  return (\n' +
'    <main className="flex flex-col flex-1">\n' +
'      <AboutHero />\n' +
'      <LegacyHero />\n' +
'    </main>\n' +
'  );\n' +
'}\n'
);
console.log('OK: created app/about/page.tsx');

console.log('Done. Drop a portrait image at public/images/judge-portrait.jpg before checking the page.');
