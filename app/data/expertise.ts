// Single source of truth for the firm's practice areas. The homepage section
// renders `blurb` + the short `detail`; the dedicated /expertise page renders
// the longer `writeup`, so both stay in sync from here.
//
// `writeup` is capped at two paragraphs by type, and each paragraph is written
// to land at roughly four or five lines at the page's measure — ten lines total
// is the ceiling.

export type PracticeArea = {
  title: string;
  blurb: string;
  detail: string;
  writeup: [string, string];
};

export const practiceAreas: PracticeArea[] = [
  {
    title: "Election Petitions",
    blurb: "The clock starts the moment a result is declared.",
    detail:
      "Petitions are won on filing dates, pleadings and polling unit evidence, not on volume. We build the record from the ward upward and carry it through tribunal and appeal. Few chambers in Nigeria have run this course as often.",
    writeup: [
      "Election matters are governed by deadlines that no court can extend, and a petition is often lost on the day it is filed rather than the day it is heard. We treat the twenty-one day window, the pleadings and the polling unit record as one exercise, gathering forms, agents' statements and result sheets from the ward upward before a single paragraph is drafted.",
      "From tribunal through the Court of Appeal and, where the seat allows, the Supreme Court, the same team carries the file. Prof. Adangor has appeared in this jurisdiction across successive electoral cycles, and the chambers' familiarity with the Electoral Act and the practice directions that accompany each cycle is one of its most heavily relied upon assets.",
    ],
  },
  {
    title: "Constitutional Law",
    blurb: "Where the powers of the state meet the rights of one citizen.",
    detail:
      "We argue the questions that outlast the parties: separation of powers, fundamental rights, and the reach of federal against state authority. Prof. Adangor writes on this ground as well as litigating it. That scholarship shows up in the briefs.",
    writeup: [
      "Constitutional work asks what the state may lawfully do, and to whom. We act in fundamental rights enforcement, separation of powers disputes, questions of legislative competence, and the recurring contest between federal and state authority over resources and regulation. These are the cases whose reasoning outlives the parties who brought them.",
      "This is also the ground Prof. Adangor writes on. His published work on Nigeria's federalism and natural resource governance informs how the chambers frames a constitutional question, and briefs are built to give a court the doctrinal footing it needs rather than simply the outcome the client wants.",
    ],
  },
  {
    title: "Oil and Gas Law Practice",
    blurb: "Nigeria's energy rules move faster than the contracts do.",
    detail:
      "Upstream licensing, host community obligations, Petroleum Industry Act compliance and joint venture disputes. We advise operators and communities on what the framework actually demands this year. When the regulator shifts, you hear it from us early.",
    writeup: [
      "The Petroleum Industry Act reset the terms on which oil and gas is produced in Nigeria, and much of the sector still operates on agreements written for the framework it replaced. We advise on upstream licensing and conversion, host community development trusts, joint venture and production sharing disputes, and compliance with the obligations the NUPRC and NMDPRA now enforce.",
      "The chambers acts for operators, service companies and host communities alike, which means we understand what each side can realistically concede. Regulatory positions in this sector shift between cycles, and clients are told early where a change in the framework has moved the ground under an existing arrangement.",
    ],
  },
  {
    title: "Civil Law Practice",
    blurb: "Most disputes are ordinary. Nothing about losing one is.",
    detail:
      "Contract, tort, debt recovery and the long tail of claims that fill the civil lists. We assess honestly whether a matter is worth running or worth settling. Then we run it properly.",
    writeup: [
      "Contract claims, negligence, debt recovery, injunctions and the broad run of matters that fill the civil lists of the High Courts. Most are unremarkable in law and entirely consequential to the person bringing them, and they are handled with that in mind rather than as filler between larger files.",
      "Every instruction begins with an honest assessment of whether the claim is worth running, worth settling, or worth abandoning before costs accumulate. Where a matter should be fought, it is prepared properly: pleadings that close off the defence, documents in order, and witnesses ready before the first hearing date.",
    ],
  },
  {
    title: "Chieftaincy Cases",
    blurb: "Titles that turn on custom, lineage and long memory.",
    detail:
      "Chieftaincy matters need counsel who can read a declaration and a family tree with equal care. We take evidence from the community, not only from the file. Judgments here reshape a stool for a generation.",
    writeup: [
      "Chieftaincy disputes turn on registered declarations, customary law and lineage, and they are rarely resolved by documents alone. We read the declaration and the family tree with equal care, take instructions from the kingmakers and the community as well as the claimant, and test the tradition being asserted against what the record will actually support.",
      "These matters carry consequences well beyond the parties, since a judgment can settle the succession to a stool for a generation. We advise candidly on the strength of a claim before it is filed, and we conduct the case with the restraint that community relations after judgment require.",
    ],
  },
  {
    title: "Maritime Law Practice",
    blurb: "Cargo does not wait for a hearing date.",
    detail:
      "Admiralty claims, ship arrest, charterparty disputes and port commercial matters before the Federal High Court. We move quickly because vessels do. Delay is usually the most expensive part of a maritime claim.",
    writeup: [
      "Admiralty jurisdiction sits with the Federal High Court, and maritime claims reward counsel who can move at the pace of the vessel rather than the pace of the cause list. We act on ship arrest and release, charterparty and bill of lading disputes, cargo claims, collision, salvage, and the commercial matters that arise around the ports.",
      "Delay is usually the most expensive element of a maritime claim, and security is often the real question behind the pleadings. Instructions are taken and acted on the same day where an arrest or an application to set one aside is in prospect, with the substantive claim built out once the vessel's position is secured.",
    ],
  },
  {
    title: "Aviation Law",
    blurb: "A regulated industry where liability arrives with the incident.",
    detail:
      "Carrier liability, NCAA compliance, aircraft leases and passenger claims under the Montreal Convention and Nigerian law. We take the regulatory side and the courtroom side together. Each one informs the other.",
    writeup: [
      "Aviation is a heavily regulated industry in which liability tends to arrive with the incident and the regulator arrives shortly afterwards. We advise on carrier liability and passenger claims under the Montreal Convention and the Civil Aviation Act, aircraft leasing and financing, ground handling arrangements, and compliance with the NCAA's regulatory regime.",
      "The regulatory work and the litigation are handled together rather than in separate silos. What an operator has filed, disclosed or certified will shape the defence of a claim years later, and advice given at the compliance stage is framed with that eventual courtroom test in view.",
    ],
  },
  {
    title: "Land Law",
    blurb: "Under the Land Use Act, possession is only half the story.",
    detail:
      "Statutory and customary rights of occupancy, governor's consent, compensation and title perfection. We trace a root of title back until it either holds or it does not. That answer is worth having before you build.",
    writeup: [
      "The Land Use Act vests land in the Governor, which makes possession only half of any answer about ownership. We handle statutory and customary rights of occupancy, governor's consent, revocation and compensation, boundary and trespass disputes, and the perfection of title that a great many transactions are quietly missing.",
      "Our practice is to trace a root of title back until it either holds or it does not, and to say which. That answer is inexpensive before a purchase or a build and very expensive afterwards, and clients are given it plainly rather than being carried through a transaction that a search should have stopped.",
    ],
  },
  {
    title: "Commercial Law Practice",
    blurb: "Deals drafted to survive the day they go wrong.",
    detail:
      "Corporate transactions, shareholder disputes, distribution arrangements and company law compliance. We write the clause you will lean on later, not the one that reads well now. And we litigate it if it comes to that.",
    writeup: [
      "Corporate transactions, shareholder and directors' disputes, joint ventures, distribution and agency arrangements, and compliance under the Companies and Allied Matters Act. Documents are drafted for the day the relationship goes wrong, because that is the only day anyone reads them closely.",
      "Because the chambers litigates the agreements it drafts, the drafting is informed by how these clauses actually behave in court. Where a dispute does arise, the same team that structured the arrangement can run the claim without a stranger having to reconstruct the commercial history from the file.",
    ],
  },
  {
    title: "Criminal Litigation",
    blurb: "Liberty cases get the firm's most careful hands.",
    detail:
      "Defence and prosecution across magistrate, high court and appellate levels. Evidence law is this firm's specialist ground and it decides most criminal outcomes. We know what the record must show before a trial opens.",
    writeup: [
      "Defence and prosecution across the magistrates' courts, the High Courts and on appeal, including bail applications, economic and financial crime, and the trial of serious offences. Cases that put a person's liberty in issue are given the chambers' most careful hands and are not delegated down.",
      "Evidence is this firm's specialist ground. Prof. Adangor's published handbook on the law of evidence reflects a practice built on knowing precisely what the record must establish, and most criminal outcomes are decided by admissibility, burden and proof rather than by advocacy at the close.",
    ],
  },
  {
    title: "General Civil Law Practice",
    blurb: "The everyday matters that still keep clients awake.",
    detail:
      "Family, tenancy, estate and neighbour disputes handled without drama or padding. We tell you early what a case is likely to cost and likely to yield. Plenty of them are better resolved than fought.",
    writeup: [
      "Family and matrimonial causes, tenancy and recovery of premises, probate and estate administration, and the neighbour disputes that rarely reach a law report but reliably keep people awake. These are handled without drama and without padding the file.",
      "Clients are told early what a matter is likely to cost and likely to yield, and a good number of them are better resolved than fought. Where settlement is the sensible course we will say so, and where it is not, the case is prepared as thoroughly as any commercial instruction.",
    ],
  },
  {
    title: "Public Sector & Government Advisory",
    blurb: "Advice that has to survive an audit and a courtroom.",
    detail:
      "Ministries, agencies and councils on procurement, statutory powers, legislative drafting and governance. A public body acts lawfully or it does not act at all. We help draw that line before the decision is taken.",
    writeup: [
      "Ministries, agencies, commissions and local government councils on the exercise of statutory powers, public procurement, legislative and subsidiary drafting, and governance. Prof. Adangor's service as Attorney General and Commissioner for Justice of Rivers State gives the chambers an unusually direct understanding of how these decisions are actually taken.",
      "A public body either acts within its powers or it does not act at all, and advice here has to survive both an audit and a courtroom. We help draw that line before a decision is made rather than defending it after the fact, which is invariably the cheaper and more defensible sequence.",
    ],
  },
  {
    title: "Infrastructure & Project Finance",
    blurb: "Long projects, longer documents, no room for loose drafting.",
    detail:
      "Concessions, public private partnership structures, security packages and lender protections on capital projects. We map legal risk across the whole build, not only at signing. Financiers tend to notice the difference.",
    writeup: [
      "Concessions, public private partnership structures, engineering and construction contracts, security packages and lender protections on capital projects. These arrangements run for decades across documents that are read most carefully by whoever is trying to escape them, which leaves no room for loose drafting.",
      "We map legal and regulatory risk across the whole life of a build rather than only at financial close, taking in land assembly, consents, offtake, termination and step-in rights together. Financiers and their counsel tend to notice when a project has been structured that way from the outset.",
    ],
  },
  {
    title: "Real Estate & Property Law",
    blurb: "From the first search to the governor's consent.",
    detail:
      "Acquisitions, leases, mortgages, developer agreements and registration of title. We search properly, because the cheapest fix for a property problem is finding it early. Then we close cleanly.",
    writeup: [
      "Acquisitions and disposals, leases and subleases, mortgages and charges, joint venture and developer agreements, and registration of title through to the issue of the instrument. The work runs from the first search at the land registry to the governor's consent and the final deed.",
      "The cheapest fix for a property problem is finding it before money moves, so searches are conducted properly and reported honestly even where the answer is unwelcome. Once the title is sound, transactions are closed cleanly and the documents are registered rather than left in a drawer.",
    ],
  },
  {
    title: "Employment & Labour Law",
    blurb: "Workplaces run on rules that both sides tend to forget.",
    detail:
      "Contracts, terminations, redundancy, union questions and claims before the National Industrial Court. We show employers how to do it lawfully and employees what they are actually owed. Clear either way.",
    writeup: [
      "Contracts of employment and staff handbooks, disciplinary process, termination and redundancy, pensions and end of service entitlements, trade union and collective bargaining questions, and claims before the National Industrial Court. Both sides of a workplace tend to forget the rules until the relationship ends.",
      "We show employers how to carry out a difficult decision lawfully, and we tell employees plainly what they are in fact owed rather than what they hope to be owed. The National Industrial Court applies international best practice as well as statute, and advice is framed to that standard.",
    ],
  },
];
