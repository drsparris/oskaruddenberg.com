// All site content lives here. Edit this file to update the site.
// Keep private details (home address, phone number) out of this file: the repo is public.

export const profile = {
  name: "Oskar Uddenberg",
  title: "Head of IT & Business Development",
  org: "Hemfrid / KEYTO Group",
  location: "Stockholm, Sweden",
  email: "hi@oskaruddenberg.com",
  linkedin: "https://se.linkedin.com/in/oskaruddenberg",
  url: "https://oskaruddenberg.com/",
  lede:
    "I lead technology organisations where IT is not a support function but a driver of simplicity, efficiency and long-term value.",
  intro: [
    "My career runs from developer and consultant to leading technical organisations in e-commerce, music tech and home services.",
    "At Hemfrid, part of KEYTO Group, I lead IT Operations, IT Engineering and Business Development, and sit on the management team. I own the IT strategy, security and compliance, align the technology roadmap with group strategy, and work with M&A integration as the group grows.",
    "Much of my current work is about building AI capability inside the organisation, so that AI-driven work becomes a normal part of how we develop software and make decisions.",
  ],
};

export const highlights = [
  { value: "~20", label: "years in IT since 2007, from developer to management team" },
  { value: "7", label: "cross-functional teams led after the Mathem–Oda merger" },
  { value: "75", label: "countries in Soundtrack Your Brand's global rollout" },
  { value: "1 → 20", label: "people when I built Netlight's Berlin office" },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  place: string;
  summary: string;
  sub?: { period: string; title: string; org: string }[];
};

export const experience: Role[] = [
  {
    period: "2024 —",
    title: "Head of IT & Business Development",
    org: "Hemfrid · KEYTO Group",
    place: "Stockholm",
    summary:
      "Leads IT Operations (support, security, infrastructure, governance), IT Engineering (Salesforce, backend and frontend) and Change Management (business transformation and IT M&A). Member of the management team. Joined in October 2024 as IT Strategy & Development Manager; took over the department in September 2025.",
  },
  {
    period: "2021 —",
    title: "Partner & Co-Founder",
    org: "Coody",
    place: "Stockholm",
    summary:
      "Co-founded an IT consultancy and helped grow it from an idea to more than 40 people. Today an advisor and partner on sales, recruiting and long-term technical strategy.",
  },
  {
    period: "2023 — 2024",
    title: "Director of Development",
    org: "Mathem",
    place: "Stockholm",
    summary:
      "Owned the technical side of the online shopping experience across four development teams. After the merger with Oda, took on Oda's global product approach: seven cross-functional teams led together with Product, Data and Design.",
  },
  {
    period: "2019 — 2023",
    title: "VP of Engineering",
    org: "Soundtrack Your Brand",
    place: "Stockholm",
    summary:
      "Worked alongside the CTO on team structure, developer growth and collaboration between product development and the commercial, legal and finance functions. Set company goals weekly with the executive management team.",
  },
  {
    period: "2017 — 2019",
    title: "VP Music Rights Management",
    org: "Soundtrack Your Brand",
    place: "Stockholm",
    summary:
      "Led the worldwide rollout across three development teams, legal and third-party music hosting, covering content, playback and royalty reporting. The product went live in 75 countries.",
  },
  {
    period: "2011 — 2017",
    title: "Manager",
    org: "Netlight Consulting",
    place: "Stockholm / Berlin",
    summary:
      "Consultant, solution manager and mentor. Built the Berlin office from 2014 as its first employee; it had 20 people when I left.",
    sub: [
      { period: "2016–17", title: "Senior Software Developer (Azure)", org: "Akelius" },
      { period: "2014–16", title: "Developer → Technical PO → Product Owner", org: "airberlin" },
      { period: "2014", title: "Senior Software Developer", org: "Magic Internet" },
      { period: "2012–14", title: "Solution Manager, Scrum master & release manager", org: "Viaplay" },
      { period: "2011–12", title: "Frontend developer", org: "Klarna" },
    ],
  },
  {
    period: "2009 — 2011",
    title: "Software Developer",
    org: "HYVE Innovation Community",
    place: "Munich",
    summary: "Web development for an online crowdsourcing and innovation community product.",
  },
];

export const principles = [
  {
    title: "Technology drives the business",
    text: "IT earns its place by making the business simpler and faster, not by keeping the lights on. The roadmap starts from business goals and OKRs.",
  },
  {
    title: "Structure that enables speed",
    text: "Clear governance, security and an understood system landscape are what let teams deliver quickly without surprises.",
  },
  {
    title: "Autonomous teams, shared direction",
    text: "Cross-functional teams that own their outcomes, with leaders who spend their time on clarity, growth and removing blockers.",
  },
  {
    title: "AI as everyday practice",
    text: "Building AI skills across the organisation, so that AI tools become part of normal development and decision-making rather than side projects.",
  },
];

export const education = [
  { title: "MSc Computer Science", org: "KTH Royal Institute of Technology", period: "2002 — 2008" },
  {
    title: "MSc Computer Science",
    org: "Technical University of Munich",
    period: "2007 — 2008",
    note: "Thesis on patent analysis and the MPEG Open Access Application Format",
  },
];

export const certifications = [
  { title: "Certified SAFe® 6 Agilist", org: "Scaled Agile", year: "2025" },
  { title: "Board Certificate", org: "Board Company", year: "2024" },
];

export const languages = [
  { name: "Swedish", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "Fluent" },
  { name: "French", level: "A2" },
];

// Off duty section.
export const offDuty = {
  intro:
    "Most of my free time goes to my family, especially my daughter and our two dogs. The rest goes to being outdoors and to keeping up with AI, mostly by building things myself.",
  items: [
    {
      label: "Family",
      text: "A young daughter, a partner and two dogs, a Jack Russell and a Dalmatian, who prefer to nap side by side.",
    },
    {
      label: "Outdoors",
      text: "Long walks with the dogs in all weather, and skiing whenever winter allows.",
    },
    {
      label: "Home lab",
      text: "A workstation at home running open-weight language models locally, so I can see what current AI can do without the cloud.",
    },
    {
      label: "Keeping up",
      text: "Following AI development closely and trying new tools as they ship, from coding agents to personal assistants.",
    },
  ],
  photo: {
    src: "/img/dogs-wide-900.webp",
    srcset: "/img/dogs-wide-900.webp 900w, /img/dogs-wide-1600.webp 1600w",
    width: 1600, height: 800,
    alt: "A Jack Russell and a Dalmatian asleep side by side on a fluffy blanket",
  },
};

// "Where IT is heading": open questions I keep coming back to.
export const thinking = {
  intro:
    "AI is making technology cheaper and faster to build. What I keep coming back to is what that does to the IT organisation over the next few years.",
  questions: [
    {
      q: "Which roles stay in IT, and which move into the business?",
      a: "When building gets cheap, more of the work can sit close to the people who own the problem. The open question is where the line goes for platforms, security, data and integration.",
    },
    {
      q: "How many teams do you actually need?",
      a: "If a small team can deliver what a large one used to, team design has to start from ownership and flow, not headcount.",
    },
    {
      q: "Specialists or generalists?",
      a: "AI raises the floor for generalists, but someone still has to know where the sharp edges are. The mix, and who you hire first, is changing.",
    },
    {
      q: "What remains when tech is cheap?",
      a: "Understanding the problem, writing good requirements and helping people change how they work. These were always the hard parts, and they are becoming the main ones.",
    },
  ],
};
