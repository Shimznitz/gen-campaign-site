import { CandidateConfig } from '../types';

export const cmsData: CandidateConfig = {
  name: "Hon. Candidate",
  position: "Federal House of Representatives",
  slogan: "A New Dawn for Collective Progress.",
  quote: "Leadership is service. Together, we build a smarter, inclusive, and self-sustaining future.",
  electionDate: "2027-02-15T00:00:00",
  biography: [
    { year: "2015", title: "Tech Innovation Lead", description: "Spearheaded tech infrastructure overhauls enabling rural connectivity paths." },
    { year: "2019", title: "Community Education Initiative", description: "Founded SpaceSTEM, launching interactive science platforms for 10,000+ youth." },
    { year: "2023", title: "Strategic Advisory Role", description: "Advised municipal bodies on deploying engineering and job creation systems." }
  ],
  manifestos: [
    { id: "edu", title: "Education & Tech", icon: "🎓", brief: "Digital hubs across all wards.", full: "We will establish subsidized modern code labs and high-speed tech infrastructure in every public secondary institution." },
    { id: "agric", title: "Smart Agriculture", icon: "🌾", brief: "Empowering local farmers with data.", full: "Deploying low-cost IoT soil monitors and establishing centralized direct-to-consumer digital marketplaces." },
    { id: "youth", title: "Youth Development", icon: "⚡", brief: "Incubation capital & job paths.", full: "Creating a local acceleration fund designed to scale homegrown solutions, craftsmanship, and engineering tools." }
  ],
  stats: [
    { label: "Supporters Registered", value: 42800, suffix: "+" },
    { label: "Communities Visited", value: 146, suffix: "" },
    { label: "Volunteers Mobilized", value: 3500, suffix: "+" }
  ],
  contact: {
    phone: "+234 800 CAMPAIGN",
    email: "info@danielalao.org",
    address: "12 Corporate Way, Capital City, Nigeria",
    socials: [
      { platform: "Twitter", url: "https://x.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" }
    ]
  }
};