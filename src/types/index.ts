export interface Destination {
  city: string;
  image: string;
  description: string;
  highlights: string[];
  href: string;
}

export interface Country {
  name: string;
  image: string;
  description: string;
  destinations: Destination[];
}

export interface Region {
  name: string;
  description: string;
  image: string;
  countries: Country[];
}

export interface Experience {
  title: string;
  location: string;
  duration: string;
  difficulty?: string;
  image: string;
  description: string;
  highlights: string[];
  price: string;
}

export interface ExperienceCategory {
  title: string;
  description: string;
  image: string;
  experiences: Experience[];
}

export interface PlanningFeature {
  title: string;
  description: string;
  icon: string;
}

export interface PlanningOption {
  title: string;
  description: string;
  image: string;
  features: PlanningFeature[];
  process: string[];
}
