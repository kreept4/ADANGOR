const fs = require('fs');
const path = './app/layout.tsx';
let src = fs.readFileSync(path, 'utf8');

const before = src;

// 1. Extend the next/font/google import
src = src.replace(
  `import { Roboto_Slab, Roboto_Mono, Inter } from "next/font/google";`,
  `import { Roboto_Slab, Roboto_Mono, Inter, Roboto, Merriweather, Nunito } from "next/font/google";`
);

// 2. Add const declarations after the existing inter block
src = src.replace(
  `const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});`,
  `const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});`
);

// 3. Add new variables to body className
src = src.replace(
  `className={\`\${robotoSlab.variable} \${robotoMono.variable} \${inter.variable}\`}`,
  `className={\`\${robotoSlab.variable} \${robotoMono.variable} \${inter.variable} \${roboto.variable} \${merriweather.variable} \${nunito.variable}\`}`
);

if (src === before) {
  console.error('NO CHANGES APPLIED — patterns did not match, check file manually.');
  process.exit(1);
}

fs.writeFileSync(path, src, 'utf8');
console.log('layout.tsx patched. New CSS vars available: --font-roboto, --font-merriweather, --font-nunito');
