const fs = require('fs');

// 1. Shrink logo icon
let cardNavCss = fs.readFileSync('app/components/CardNav/CardNav.css', 'utf8');
cardNavCss = cardNavCss.replace(
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
}`,
  `.logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.logo-icon {
  height: 18px;
  width: auto;
}`
);
fs.writeFileSync('app/components/CardNav/CardNav.css', cardNavCss, 'utf8');

// 2. Replace moire-prone glass shards with clean gradient-only panes
let hero = fs.readFileSync('app/components/Hero.tsx', 'utf8');
hero = hero.replace(
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
        </div>`,
  `        <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
          <div
            className="absolute -top-[15%] left-[10%] w-[55%] h-[150%] rotate-[-20deg]"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.03) 60%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="absolute top-[10%] right-[12%] w-[35%] h-[130%] rotate-[16deg]"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>`
);
fs.writeFileSync('app/components/Hero.tsx', hero, 'utf8');

console.log('logo shrunk, glass panes rebuilt as clean gradients');