export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
