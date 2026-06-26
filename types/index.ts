export interface CandidateConfig {
  name: string;
  position: string;
  slogan: string;
  quote: string;
  biography: { year: string; title: string; description: string }[];
  manifestos: { id: string; title: string; icon: string; brief: string; full: string }[];
  electionDate: string;
  stats: { label: string; value: number; suffix: string }[];
  contact: { phone: string; email: string; address: string; socials: { platform: string; url: string }[] };
}