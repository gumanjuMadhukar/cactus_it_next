import { SocialPlatform } from '@/types/enums';
import type { NavItem, SocialLink } from '@/types/models';

export const SITE = {
  name: 'Cactus IT Solution',
  tagline: 'Smart Digital Solutions That Help Businesses Grow',
  description:
    'Cactus IT Solution provides end-to-end digital services: web & mobile apps, data analytics, digital marketing, and IT consulting.',
  domain: 'https://cactusitsol.com.np', // TODO: replace after you deploy
  email: 'info@cactusitsolution.com',
  phone: '+977 9840786886',
  location: 'Kathmandu, Nepal',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: SocialPlatform.LinkedIn, href: 'https://www.linkedin.com/' },
  { platform: SocialPlatform.GitHub, href: 'https://github.com/' },
  { platform: SocialPlatform.X, href: 'https://x.com/' },
];
