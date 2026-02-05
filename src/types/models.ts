import type { ServiceId, TechTag, SocialPlatform } from './enums';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: ServiceId;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: 'Code2' | 'Globe' | 'Smartphone' | 'BarChart3' | 'Megaphone' | 'Settings' | 'Workflow';
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: TechTag[];
  href?: string;
};

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
};

export type ContactFormPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  // Honeypot field (bots)
  website?: string;
};
