import { TechTag } from '@/types/enums';
import type { Project } from '@/types/models';

export const PROJECTS: Project[] = [
  {
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'A KPI-driven dashboard for real-time business visibility and reporting.',
    tech: [TechTag.NextJs, TechTag.TypeScript, TechTag.Tailwind, TechTag.PostgreSQL],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform Revamp',
    description: 'Performance-focused redesign and checkout optimization for higher conversion.',
    tech: [TechTag.React, TechTag.NodeJs, TechTag.AWS],
  },
  {
    slug: 'mobile-field-app',
    title: 'Mobile Field Operations App',
    description: 'Offline-first mobile app for task tracking, audits, and reporting.',
    tech: [TechTag.ReactNative, TechTag.Firebase],
  },
  {
    slug: 'marketing-growth',
    title: 'SEO + Paid Ads Growth Sprint',
    description: 'A 90-day growth sprint to improve rankings, traffic, and qualified leads.',
    tech: [TechTag.PowerBI, TechTag.Python],
  },
  {
    slug: 'automation-suite',
    title: 'IT Automation Suite',
    description: 'Automations to reduce repetitive tasks and improve operational reliability.',
    tech: [TechTag.NodeJs, TechTag.GCP],
  },
  {
    slug: 'custom-crm',
    title: 'Custom CRM for SMB',
    description: 'A lightweight CRM tailored to a sales team’s exact workflow.',
    tech: [TechTag.NextJs, TechTag.TypeScript, TechTag.PostgreSQL],
  },
];
