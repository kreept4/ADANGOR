const fs = require('fs');
const p = 'app/components/Expertise.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
  `<div className="flex-shrink-0 lg:w-[380px] text-left lg:text-right order-1 lg:order-2">`,
  `<div className="flex-shrink-0 lg:w-[380px] text-left order-1 lg:order-2">`
);

fs.writeFileSync(p, c, 'utf8');
console.log('Expertise.tsx: heading left-aligned to match card edges');