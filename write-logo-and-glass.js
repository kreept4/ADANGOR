const fs = require('fs');

// 1. Navy version of the firm logo icon
fs.writeFileSync('public/logo-icon.svg', `<svg width="54" height="41" viewBox="0 0 54 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5147 0V2.33749C32.9233 2.33749 32.3843 2.54892 31.9714 2.89904C31.7334 3.09862 31.5374 3.34387 31.3992 3.62295C31.3992 3.62464 31.3974 3.62802 31.3957 3.6314C31.3712 3.68045 31.3467 3.73289 31.3257 3.78532C31.3204 3.79885 31.3152 3.81238 31.3099 3.82591L16.263 37.6976H13.0013L28.4577 2.89904H5.14103C3.95813 2.89904 2.99922 3.82591 2.99922 4.96929C2.99922 6.11266 3.95813 7.03954 5.14103 7.03954V9.93858C2.30278 9.93858 0 7.71271 0 4.96929C0 4.23015 0.166234 3.52992 0.468957 2.89904C1.27913 1.18905 3.06746 0 5.14103 0H33.5147Z" fill="#0A1656"/>
<path d="M53.1532 35.6293C53.1532 36.3685 52.987 37.0687 52.6843 37.6996C51.8741 39.4096 50.0875 40.5986 48.0139 40.5986H0V37.6996C0.962413 37.6996 1.79008 37.1397 2.15055 36.3363C2.1558 36.3245 2.16105 36.3127 2.16805 36.2991L16.0373 5.07617H19.3008L4.80681 37.6996H48.0139C49.1968 37.6996 50.1557 36.7727 50.1557 35.6293C50.1557 34.486 49.1968 33.5591 48.0139 33.5591V30.6601C50.8522 30.6601 53.1532 32.8859 53.1532 35.6293Z" fill="#0A1656"/>
<path d="M28.457 2.90039L42.951 35.5238H46.2109L31.7205 2.90039H28.457Z" fill="#0A1656"/>
<path d="M25.3477 26.7372L39.2467 26.7879L40.538 23.894L26.639 23.8398L25.3477 26.7372Z" fill="#0A1656"/>
</svg>
`);

// 2. CardNav.tsx: show icon AND firm name together, not either/or
let cardNav = fs.readFileSync('app/components/CardNav/CardNav.tsx', 'utf8');
cardNav = cardNav.replace(
  `          <div className="logo-container">
            {logo ? (
              <img src={logo} alt={logoAlt} className="logo" />
            ) : (
              <span className="logo-text">{firmName}</span>
            )}
          </div>`,
  `          <div className="logo-container">
            {logo && <img src={logo} alt={logoAlt} className="logo-icon" />}
            <span className="logo-text">{firmName}</span>
          </div>`
);
fs.writeFileSync('app/components/CardNav/CardNav.tsx', cardNav, 'utf8');

// 3. CardNav.css: gap between icon and text, size the icon
let cardNavCss = fs.readFileSync('app/components/CardNav/CardNav.css', 'utf8');
cardNavCss = cardNavCss.replace(
  `.logo-container {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.logo {
  height: 28px;
}`,
  `.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.logo-icon {
  height: 26px;
  width: auto;
}`
);
fs.writeFileSync('app/components/CardNav/CardNav.css', cardNavCss, 'utf8');

// 4. layout.tsx: pass the new logo icon into CardNav
let layout = fs.readFileSync('app/layout.tsx', 'utf8');
layout = layout.replace(
  `        <CardNav
          firmName="PROF. Z. ADANGOR (SAN) & CO"
          items={navItems}
          contactEmail="Zacchaeusadangor@nigerianbar.ng"
        />`,
  `        <CardNav
          logo="/logo-icon.svg"
          logoAlt="Firm logo"
          firmName="PROF. Z. ADANGOR (SAN) & CO"
          items={navItems}
          contactEmail="Zacchaeusadangor@nigerianbar.ng"
        />`
);
fs.writeFileSync('app/layout.tsx', layout, 'utf8');

// 5. Hero.tsx: refractive glass shards over the hero background
let hero = fs.readFileSync('app/components/Hero.tsx', 'utf8');
hero = hero.replace(
  `        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-12 md:px-[59px] md:py-[100px] font-[family-name:var(--font-roboto-slab)]">`,
  `        <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
          <div
            className="absolute -top-[10%] -left-[5%] w-[70%] h-[140%] rotate-[-18deg]"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          />
          <div
            className="absolute top-[15%] right-[8%] w-[45%] h-[120%] rotate-[14deg]"
            style={{
              background:
                "linear-gradient(120deg, rgba(180,200,255,0.14) 0%, rgba(180,200,255,0.02) 50%, rgba(255,255,255,0.08) 100%)",
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-12 md:px-[59px] md:py-[100px] font-[family-name:var(--font-roboto-slab)]">`
);
fs.writeFileSync('app/components/Hero.tsx', hero, 'utf8');

console.log('logo-icon.svg created, CardNav wired, hero glass shards added');