const fs = require('fs');

// 1. Hero.tsx — year fix
let h = 'app/components/Hero.tsx';
let hc = fs.readFileSync(h, 'utf8');
hc = hc.replace('Established 1977', 'Established 1997');
fs.writeFileSync(h, hc, 'utf8');
console.log('Hero.tsx: year fixed');

// 2. Footer.tsx — tagline
let f = 'app/components/Footer.tsx';
let fc = fs.readFileSync(f, 'utf8');
fc = fc.replace(
  `Built on Justice,<br />Guided by Ethics`,
  `Upholding justice and the highest ethical standards`
);
fs.writeFileSync(f, fc, 'utf8');
console.log('Footer.tsx: tagline replaced');

// 3. Expertise.tsx — full deduped practice-areas list
let e = 'app/components/Expertise.tsx';
let ec = fs.readFileSync(e, 'utf8');
ec = ec.replace(
  `const practiceAreas = [
  "Election Petitions",
  "Constitutional Law",
  "Oil and Gas Law Practice",
  "Civil Law Practice",
  "Chieftaincy Cases",
  "Maritime Law Practice",
  "Aviation Law",
];`,
  `const practiceAreas = [
  "Election Petitions",
  "Constitutional Law",
  "Oil and Gas Law Practice",
  "Civil Law Practice",
  "Chieftaincy Cases",
  "Maritime Law Practice",
  "Aviation Law",
  "Land Law",
  "Commercial Law Practice",
  "Criminal Litigation",
  "General Civil Law Practice",
  "Public Sector & Government Advisory",
  "Infrastructure & Project Finance",
  "Real Estate & Property Law",
  "Employment & Labour Law",
];`
);
fs.writeFileSync(e, ec, 'utf8');
console.log('Expertise.tsx: practice areas updated (15 total, deduped)');

// 4. MapContact.tsx — real addresses + phone block
let m = 'app/components/MapContact.tsx';
let mc = fs.readFileSync(m, 'utf8');

mc = mc.replace(
  `      <div className="mc-info-strip">
        <div>
          <p style={infoLabelStyle}>Abuja Address</p>
          {/* NOTE: placeholder address - replace with the real Abuja office address */}
          <p style={infoValueStyle}>
            04053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053,
          </p>
        </div>
        <div>
          <p style={infoLabelStyle}>Port-Harcourt Address</p>
          {/* NOTE: placeholder address - replace with the real Port-Harcourt office address */}
          <p style={infoValueStyle}>
            04053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053,
          </p>
        </div>
      </div>`,
  `      <div className="mc-info-strip">
        <div>
          <p style={infoLabelStyle}>Abuja Address</p>
          <p style={infoValueStyle}>
            No 5, Kaltungo Street, off Ladoke Akintola Boulevard, Garki 2, Abuja, FCT
          </p>
        </div>
        <div>
          <p style={infoLabelStyle}>Port-Harcourt Address</p>
          <p style={infoValueStyle}>
            No 1D, Okomoko Street, off Wogu Street, D/line, Port Harcourt, Rivers State
          </p>
        </div>
        <div>
          <p style={infoLabelStyle}>Phone</p>
          <p style={infoValueStyle}>
            08033384056; 07059423385
          </p>
        </div>
      </div>`
);

mc = mc.replace(
  `.mc-info-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          width: 100%;
          padding: 40px 59px 80px 59px;
          box-sizing: border-box;
        }`,
  `.mc-info-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          width: 100%;
          padding: 40px 59px 80px 59px;
          box-sizing: border-box;
        }`
);

mc = mc.replace(
  `        @media (max-width: 640px) {
          .mc-contact {
            padding: 40px 24px;
          }
          .mc-map-col {
            padding: 40px 24px;
          }`,
  `        @media (max-width: 640px) {
          .mc-contact {
            padding: 40px 24px;
          }
          .mc-map-col {
            padding: 40px 24px;
          }
          .mc-info-strip {
            grid-template-columns: 1fr;
          }`
);

fs.writeFileSync(m, mc, 'utf8');
console.log('MapContact.tsx: real addresses + phone block added, grid now 3-col');