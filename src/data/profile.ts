// All site content lives here. Edit this file to update the site.
// Keep private details (home address, phone number) out of this file: the repo is public.

export const profile = {
  name: "Oskar Uddenberg",
  title: "Head of IT & Business Development",
  org: "Hemfrid / KEYTO Group",
  location: "Stockholm, Sweden",
  email: "oskar.uddenberg@gmail.com",
  linkedin: "https://www.linkedin.com/in/oskaruddenberg/",
  url: "https://oskaruddenberg.com/",
  lede:
    "I lead technology organisations where IT is not a support function but a driver of simplicity, efficiency and long-term value.",
  intro: [
    "My career runs from developer and consultant to leading technical organisations in e-commerce, music tech and home services.",
    "At Hemfrid, part of KEYTO Group, I lead IT Operations, IT Engineering and Change Management, and sit on the management team. I own the IT strategy, security and compliance, align the technology roadmap with group strategy, and work with M&A integration as the group grows.",
    "Much of my current work is about building AI capability inside the organisation, so that AI-driven work becomes a normal part of how we develop software and make decisions.",
  ],
};

export const highlights = [
  { value: "18+", label: "years in IT, from developer to management team" },
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

// Off duty section. Set `photo` to an object like
// { src: "/img/offduty-900.webp", srcset: "...", alt: "..." } to show an image beside the text.
export const offDuty: {
  paragraphs: string[];
  photo: null | { src: string; srcset?: string; width: number; height: number; alt: string };
} = {
  paragraphs: [
    "Most of my free time goes to my partner and our young daughter, and these days that is exactly how I want it.",
    "In winter I ski whenever we can get to the mountains. The rest of the time I experiment with AI on my own hardware: local models, a small home lab and tools that make everyday life a little simpler.",
  ],
  photo: null,
};
