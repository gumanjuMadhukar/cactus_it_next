import type { MetadataRoute } from 'next';
import { SITE } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ['', '/services', '/about', '/projects', '/contact'];

  return routes.map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
