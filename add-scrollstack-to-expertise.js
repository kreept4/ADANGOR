const fs = require('fs');
const p = 'app/components/Expertise.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
  `"use client";`,
  `"use client";

import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";

const practiceAreas = [
  "Election Petitions",
  "Constitutional Law",
  "Oil and Gas Law Practice",
  "General Civil Law Practice",
  "Chieftaincy Cases",
  "Maritime Law Practice",
  "Aviation Law",
  "Public Sector & Government",
  "Employment & Labour Law",
  "Real Estate & Property Law",
  "Advisory Infrastructure & Project Finance",
];`
);

c = c.replace(
  `            EXPERTISE
          </h2>
        </div>`,
  `            EXPERTISE
          </h2>

          <div className="mt-8 w-full">
            <ScrollStack itemDistance={20} itemStackDistance={15} baseScale={0.85}>
              {practiceAreas.map((area, i) => (
                <ScrollStackItem key={area}>
                  <span className="scroll-stack-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="scroll-stack-card-title">{area}</span>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>`
);

fs.writeFileSync(p, c, 'utf8');
console.log('Expertise.tsx: ScrollStack added under heading');