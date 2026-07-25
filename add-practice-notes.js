const fs = require('fs');
const p = 'app/components/Expertise.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(
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
];`,
  `const practiceAreas = [
  { title: "Election Petitions", note: "Representing candidates and parties in electoral disputes before tribunals and appellate courts." },
  { title: "Constitutional Law", note: "Advising on constitutional rights, governmental powers, and matters of public law." },
  { title: "Oil and Gas Law Practice", note: "Guiding upstream and downstream operators through Nigeria's energy regulatory framework." },
  { title: "Civil Law Practice", note: "Handling contractual, tortious, and property disputes across the civil courts." },
  { title: "Chieftaincy Cases", note: "Resolving traditional leadership and chieftaincy title disputes." },
  { title: "Maritime Law Practice", note: "Advising on shipping, admiralty claims, and port-related commercial matters." },
  { title: "Aviation Law", note: "Handling regulatory and liability matters within the aviation sector." },
  { title: "Land Law", note: "Advising on land ownership, tenure, and title disputes." },
  { title: "Commercial Law Practice", note: "Structuring and defending commercial transactions and business disputes." },
  { title: "Criminal Litigation", note: "Defending and prosecuting matters across Nigeria's criminal justice system." },
  { title: "General Civil Law Practice", note: "Providing broad-based counsel across everyday civil legal matters." },
  { title: "Public Sector & Government Advisory", note: "Advising government bodies and agencies on regulatory and policy matters." },
  { title: "Infrastructure & Project Finance", note: "Structuring legal frameworks for large-scale infrastructure and financing deals." },
  { title: "Real Estate & Property Law", note: "Guiding property transactions, leases, and title perfection." },
  { title: "Employment & Labour Law", note: "Advising employers and employees on workplace rights and disputes." },
];`
);

c = c.replace(
  `              {practiceAreas.map((area, i) => (
                <ScrollStackItem key={area}>
                  <span className="scroll-stack-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="scroll-stack-card-title">{area}</span>
                </ScrollStackItem>
              ))}`,
  `              {practiceAreas.map((area, i) => (
                <ScrollStackItem key={area.title}>
                  <span className="scroll-stack-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="scroll-stack-card-title">{area.title}</span>
                  <span className="scroll-stack-card-note">{area.note}</span>
                </ScrollStackItem>
              ))}`
);

fs.writeFileSync(p, c, 'utf8');
console.log('Expertise.tsx: one-sentence notes added per practice area');