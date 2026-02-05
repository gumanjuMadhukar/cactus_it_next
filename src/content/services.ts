// @/content/services.ts

import { ServiceId } from '@/types/enums';
import type { Service } from '@/types/models';

export const SERVICES: Service[] = [
  {
    id: ServiceId.ApplicationDevelopment,
    title: 'Web Application Development',
    shortDescription: 'Modern, scalable web apps built for performance and growth.',
    description:
      'We design and build robust web applications with clean architecture, strong security practices, and a focus on long-term maintainability.',
    benefits: ['Clean architecture & scalable modules', 'Performance optimization', 'Secure auth & role management'],
    icon: 'Code2',
    image: 'https://miro.medium.com/v2/resize:fit:2000/1*eRfXpEtKqyqilcEdSQae8Q.png', // ← add your real path or URL
  },
  {
    id: ServiceId.WebsiteDevelopment,
    title: 'Website Design & Development',
    shortDescription: 'High-converting websites with fast load times and great UX.',
    description:
      'From landing pages to multi-page corporate websites, we combine modern design, accessibility, and SEO to help you win online.',
    benefits: ['Responsive UX/UI', 'SEO-friendly structure', 'Fast performance & best practices'],
    icon: 'Globe',
    image: 'https://miro.medium.com/v2/resize:fit:2000/1*eRfXpEtKqyqilcEdSQae8Q.png',
  },
  {
    id: ServiceId.DataAnalytics,
    title: 'Data Analysis & Business Intelligence',
    shortDescription: 'Turn data into insights, dashboards, and confident decisions.',
    description:
      'We help you connect data sources, define KPIs, and build analytics workflows that support leadership decisions.',
    benefits: ['Dashboards & KPI reporting', 'Data pipelines & automation', 'Actionable insights'],
    icon: 'BarChart3',
    image: 'https://cdn.dribbble.com/userupload/45969034/file/392b2a90c9e64a739e4966a45ff8ef4b.png?format=webp&resize=400x300&vertical=center',
  },
  {
    id: ServiceId.DigitalMarketing,
    title: 'Digital Marketing',
    shortDescription: 'SEO, social media, and paid campaigns that drive measurable results.',
    description:
      'We create a growth strategy aligned to your business goals—tracking outcomes and optimizing continuously.',
    benefits: ['SEO audits & on-page fixes', 'Campaign setup & optimization', 'Conversion tracking & reporting'],
    icon: 'Megaphone',
    image: 'https://portermetrics.com/wp-content/uploads/2025/05/Social-Media-dashboard.png',
  },
  {
    id: ServiceId.CustomItSolutions,
    title: 'Custom Software Solutions',
    shortDescription: 'Tailored tools that streamline operations and reduce manual work.',
    description:
      'We build custom systems that fit your workflows—integrations, internal tools, and product MVPs.',
    benefits: ['Workflow automation', 'Systems integration', 'Custom dashboards & portals'],
    icon: 'Settings',
    image: '/images/services/custom-software.jpg',
  },
  {
    id: ServiceId.ItConsultingAutomation,
    title: 'IT Consulting & Automation',
    shortDescription: 'Practical consulting that improves reliability, velocity, and cost-efficiency.',
    description:
      'We assess your stack, recommend improvements, and implement automation where it matters—CI/CD, deployments, monitoring, and processes.',
    benefits: ['Architecture reviews', 'Automation & DevOps enablement', 'Operational best practices'],
    icon: 'Workflow',
    image: '/images/services/it-consulting.jpg',
  },
];