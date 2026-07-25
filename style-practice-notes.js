const fs = require('fs');
const p = 'app/components/ScrollStack/ScrollStack.css';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
  `.scroll-stack-card-title {
  color: #fff;
  font-family: var(--font-roboto-slab), serif;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
}`,
  `.scroll-stack-card-title {
  color: #fff;
  font-family: var(--font-roboto-slab), serif;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
}

.scroll-stack-card-note {
  color: #A6A6A6;
  font-family: var(--font-roboto-slab), serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 150%;
  text-transform: none;
}`
);

fs.writeFileSync(p, c, 'utf8');
console.log('ScrollStack.css: note style added');