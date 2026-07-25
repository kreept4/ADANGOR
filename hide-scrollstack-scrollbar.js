const fs = require('fs');
const p = 'app/components/ScrollStack/ScrollStack.css';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
  `.scroll-stack-scroller {
  position: relative;
  width: 100%;
  height: 480px;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}`,
  `.scroll-stack-scroller {
  position: relative;
  width: 100%;
  height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-stack-scroller::-webkit-scrollbar {
  display: none;
}`
);

fs.writeFileSync(p, c, 'utf8');
console.log('ScrollStack.css: scrollbar hidden, both axes');