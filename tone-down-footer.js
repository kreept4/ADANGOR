const fs = require('fs');
const p = 'app/components/Footer.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
  `.ft-tagline {
          color: #949494;
          font-family: var(--font-roboto-slab), serif;
          font-size: 40px;
          font-weight: 500;
          line-height: 49px;
          letter-spacing: -1.793px;
          margin: 0;
        }`,
  `.ft-tagline {
          color: #7A7A7A;
          font-family: var(--font-roboto-slab), serif;
          font-size: 26px;
          font-weight: 400;
          line-height: 34px;
          letter-spacing: -0.4px;
          margin: 0;
        }`
);

fs.writeFileSync(p, c, 'utf8');
console.log('Footer.tsx: tagline toned down');