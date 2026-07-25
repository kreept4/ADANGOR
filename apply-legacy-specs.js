const fs = require('fs');

// 1. AboutHero.tsx: swap the placeholder image path for the real portrait file
const aboutHeroPath = 'app/components/AboutHero.tsx';
let aboutHero = fs.readFileSync(aboutHeroPath, 'utf8').replace(/\r\n/g, '\n');
const oldSrc = '            src="/images/judge-portrait.jpg"';
const newSrc = '            src="/images/prof-zach.jpg"';
if (aboutHero.includes(oldSrc)) {
  aboutHero = aboutHero.replace(oldSrc, newSrc);
  fs.writeFileSync(aboutHeroPath, aboutHero);
  console.log('OK: AboutHero.tsx image src updated to /images/prof-zach.jpg');
} else {
  console.log('MISS: image src line not found in AboutHero.tsx');
}

// 2. Full rewrite of LegacyHero.tsx with exact specs
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
'function ConferralMarker() {\n' +
'  return (\n' +
'    <svg width="40" height="66" viewBox="0 0 40 66" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
'      <line x1="19.5" y1="-1.09278e-07" x2="19.5" y2="33" stroke="#7D7A7A" strokeWidth="5" />\n' +
'      <ellipse cx="20" cy="45.5" rx="20" ry="20.5" fill="white" />\n' +
'    </svg>\n' +
'  );\n' +
'}\n' +
'\n' +
'function TrophyIcon() {\n' +
'  return (\n' +
'    <svg width="126.36" height="225.173" viewBox="0 0 127 226" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
'      <path d="M66.5226 95.3281C66.5226 95.3281 68.2199 158.925 83.4949 158.925H42.8633C58.1383 158.925 59.8357 95.3281 59.8357 95.3281H66.5226Z" fill="url(#paint0_linear_646_22327)" />\n' +
'      <path d="M32.2656 167.759C32.2656 162.88 36.2203 158.926 41.0986 158.926H85.2634C90.1418 158.926 94.0964 162.88 94.0964 167.759V173.058C94.0964 177.937 90.1418 181.891 85.2634 181.891H41.0986C36.2203 181.891 32.2656 177.937 32.2656 173.058V167.759Z" fill="url(#paint1_linear_646_22327)" />\n' +
'      <path d="M50.5069 16.7785C56.0273 5.59283 58.7876 0 63.1802 0C67.5729 0 70.3331 5.59283 75.8536 16.7785L81.9575 29.1463C83.5682 32.41 84.3736 34.0419 85.7848 35.0671C87.196 36.0924 88.9968 36.3541 92.5985 36.8775L106.247 38.8607C118.591 40.6544 124.764 41.5513 126.121 45.7289C127.478 49.9066 123.012 54.26 114.08 62.9668L104.204 72.5938C101.597 75.1342 100.294 76.4044 99.7552 78.0634C99.2161 79.7223 99.5238 81.5159 100.139 85.1031L102.47 98.6966C104.579 110.991 105.633 117.138 102.08 119.72C98.526 122.302 93.0055 119.4 81.9646 113.595L69.7568 107.177C66.5353 105.483 64.9245 104.637 63.1802 104.637C61.4359 104.637 59.8251 105.483 56.6037 107.177L44.3958 113.595C33.3549 119.4 27.8344 122.302 24.2807 119.72C20.727 117.138 21.7813 110.991 23.8899 98.6966L26.2214 85.1031C26.8367 81.5159 27.1443 79.7223 26.6053 78.0634C26.0662 76.4044 24.7631 75.1342 22.1569 72.5938L12.2806 62.9668C3.34824 54.26 -1.11791 49.9066 0.239489 45.7289C1.59689 41.5513 7.76897 40.6544 20.1131 38.8607L33.7619 36.8775C37.3636 36.3541 39.1645 36.0924 40.5757 35.0671C41.9868 34.0419 42.7922 32.41 44.403 29.1463L50.5069 16.7785Z" fill="url(#paint2_linear_646_22327)" />\n' +
'      <path d="M94.0974 170.406C98.9757 170.406 102.93 174.361 102.93 179.239V216.338C102.93 221.216 98.9757 225.17 94.0974 225.17H32.2666C27.3882 225.17 23.4336 221.216 23.4336 216.338V179.239C23.4336 174.361 27.3882 170.406 32.2666 170.406H94.0974ZM41.0995 183.656C38.6604 183.656 36.683 185.633 36.683 188.072V210.154C36.683 212.594 38.6604 214.571 41.0995 214.571H85.2644C87.7035 214.571 89.6809 212.594 89.6809 210.154V188.072C89.6809 185.633 87.7035 183.656 85.2644 183.656H41.0995Z" fill="url(#paint3_linear_646_22327)" />\n' +
'      <path d="M10.3945 217.223C10.3945 212.833 13.9537 209.273 18.3442 209.273H108.44C112.831 209.273 116.39 212.833 116.39 217.223C116.39 221.614 112.831 225.173 108.44 225.173H18.3442C13.9537 225.173 10.3945 221.614 10.3945 217.223Z" fill="url(#paint4_linear_646_22327)" />\n' +
'      <defs>\n' +
'        <linearGradient id="paint0_linear_646_22327" x1="64.2483" y1="95.3283" x2="64.2484" y2="163.311" gradientUnits="userSpaceOnUse">\n' +
'          <stop offset="0.55" stopColor="#FF8D28" />\n' +
'          <stop offset="1" stopColor="#F57E16" />\n' +
'        </linearGradient>\n' +
'        <linearGradient id="paint1_linear_646_22327" x1="63.1812" y1="158.926" x2="63.1812" y2="181.891" gradientUnits="userSpaceOnUse">\n' +
'          <stop stopColor="#FAAA31" />\n' +
'          <stop offset="1" stopColor="#F57E16" />\n' +
'        </linearGradient>\n' +
'        <linearGradient id="paint2_linear_646_22327" x1="67.1317" y1="-8.89993" x2="67.1317" y2="151.615" gradientUnits="userSpaceOnUse">\n' +
'          <stop offset="0.55" stopColor="#FACB31" />\n' +
'          <stop offset="1" stopColor="#F57E16" />\n' +
'        </linearGradient>\n' +
'        <linearGradient id="paint3_linear_646_22327" x1="63.1822" y1="170.406" x2="63.1822" y2="225.17" gradientUnits="userSpaceOnUse">\n' +
'          <stop stopColor="#FAAA31" />\n' +
'          <stop offset="1" stopColor="#F57E16" />\n' +
'        </linearGradient>\n' +
'        <linearGradient id="paint4_linear_646_22327" x1="63.3927" y1="209.273" x2="63.3927" y2="225.173" gradientUnits="userSpaceOnUse">\n' +
'          <stop stopColor="#FAAA31" />\n' +
'          <stop offset="1" stopColor="#F57E16" />\n' +
'        </linearGradient>\n' +
'      </defs>\n' +
'    </svg>\n' +
'  );\n' +
'}\n' +
'\n' +
'export default function LegacyHero() {\n' +
'  return (\n' +
'    <section className="w-full bg-white" style={{ padding: "0 96px 128px" }}>\n' +
'      <div\n' +
'        className="mx-auto flex flex-col gap-16"\n' +
'        style={{ maxWidth: "1400px", background: "#C89900", borderRadius: "32px", padding: "64px" }}\n' +
'      >\n' +
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
'            <div className="flex flex-col gap-4">\n' +
'              <div style={{ borderTop: "1px dashed rgba(255,255,255,0.35)" }} />\n' +
'              <div className="grid grid-cols-3">\n' +
'                {timelineItems.map((_, i) => (\n' +
'                  <div key={i} className="flex justify-center" style={{ marginTop: "-20px" }}>\n' +
'                    <ConferralMarker />\n' +
'                  </div>\n' +
'                ))}\n' +
'              </div>\n' +
'              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">\n' +
'                {timelineItems.map((item, i) => (\n' +
'                  <div key={i} className="flex flex-col items-center text-center gap-2">\n' +
'                    <span\n' +
'                      style={{\n' +
'                        fontFamily: "var(--font-roboto-slab), serif",\n' +
'                        color: "#fff",\n' +
'                        fontWeight: 700,\n' +
'                        fontSize: "18px",\n' +
'                      }}\n' +
'                    >\n' +
'                      {item.label}\n' +
'                    </span>\n' +
'                    <span\n' +
'                      style={{\n' +
'                        fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                        color: "#8A8A8A",\n' +
'                        fontSize: "13px",\n' +
'                        letterSpacing: "1px",\n' +
'                      }}\n' +
'                    >\n' +
'                      {item.date}\n' +
'                    </span>\n' +
'                  </div>\n' +
'                ))}\n' +
'              </div>\n' +
'              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">\n' +
'                {timelineItems.map((item, i) => (\n' +
'                  <p\n' +
'                    key={i}\n' +
'                    className="text-center"\n' +
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
'                ))}\n' +
'              </div>\n' +
'            </div>\n' +
'            <p\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-mono), monospace",\n' +
'                color: "#BDB496",\n' +
'                fontSize: "24px",\n' +
'                fontWeight: 400,\n' +
'                lineHeight: "146%",\n' +
'                letterSpacing: "-0.24px",\n' +
'                width: "645.011px",\n' +
'                maxWidth: "100%",\n' +
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
'                fontFamily: "var(--font-nunito), sans-serif",\n' +
'                color: "#000",\n' +
'                fontWeight: 400,\n' +
'                fontSize: "28px",\n' +
'                lineHeight: "144%",\n' +
'                alignSelf: "stretch",\n' +
'                width: "100%",\n' +
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
'                      fontFamily: "var(--font-roboto-slab), serif",\n' +
'                      color: "#533700",\n' +
'                      fontSize: "28px",\n' +
'                      fontWeight: 400,\n' +
'                      lineHeight: "120%",\n' +
'                      textAlign: "center",\n' +
'                    }}\n' +
'                  >\n' +
'                    {letter}\n' +
'                  </span>\n' +
'                ))}\n' +
'              </div>\n' +
'            ))}\n' +
'          </div>\n' +
'\n' +
'          <div className="flex flex-col gap-4" style={{ width: "100%", alignSelf: "stretch" }}>\n' +
'            <h3\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-slab), serif",\n' +
'                color: "#000",\n' +
'                fontWeight: 400,\n' +
'                fontSize: "48px",\n' +
'                lineHeight: "180%",\n' +
'                textAlign: "right",\n' +
'                width: "100%",\n' +
'                alignSelf: "stretch",\n' +
'                margin: 0,\n' +
'              }}\n' +
'            >\n' +
'              Awards and Recognition\n' +
'            </h3>\n' +
'            <p\n' +
'              style={{\n' +
'                fontFamily: "var(--font-roboto-slab), serif",\n' +
'                color: "#3F3F3F",\n' +
'                fontWeight: 400,\n' +
'                fontSize: "24px",\n' +
'                lineHeight: "170.66%",\n' +
'                textAlign: "right",\n' +
'                width: "100%",\n' +
'                alignSelf: "stretch",\n' +
'                margin: 0,\n' +
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
'              className="flex-1 flex flex-col items-center gap-6 bg-white rounded-[16px]"\n' +
'              style={{ padding: "40px 32px" }}\n' +
'            >\n' +
'              <TrophyIcon />\n' +
'              <h4\n' +
'                style={{\n' +
'                  fontFamily: "Roboto Slab, serif",\n' +
'                  color: "#000",\n' +
'                  fontWeight: 600,\n' +
'                  fontSize: "24px",\n' +
'                  lineHeight: "170.66%",\n' +
'                  textAlign: "center",\n' +
'                  height: "69px",\n' +
'                  alignSelf: "stretch",\n' +
'                  margin: 0,\n' +
'                }}\n' +
'              >\n' +
'                {award.title}\n' +
'              </h4>\n' +
'              <div style={{ width: "100%", height: "1px", background: "#E5E5E5" }} />\n' +
'              <p\n' +
'                style={{\n' +
'                  fontFamily: "Roboto Slab, serif",\n' +
'                  color: "#000",\n' +
'                  fontWeight: 500,\n' +
'                  fontSize: "20px",\n' +
'                  lineHeight: "130%",\n' +
'                  textAlign: "center",\n' +
'                  margin: 0,\n' +
'                }}\n' +
'              >\n' +
'                ORG: {award.org}\n' +
'              </p>\n' +
'            </div>\n' +
'          ))}\n' +
'        </div>\n' +
'      </div>\n' +
'    </section>\n' +
'  );\n' +
'}\n'
);
console.log('OK: rewrote app/components/LegacyHero.tsx with exact specs');
