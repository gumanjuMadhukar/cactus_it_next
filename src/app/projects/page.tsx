import type { Metadata } from 'next';
import { CaseStudiesGrid } from '@/components/sections/CaseStudiesGrid';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Example projects and case studies from Cactus IT Solution.',
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Projects / Case Studies</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
          A grid of example work. Replace with real client case studies when available.
        </p>
      </div>
      <CaseStudiesGrid />
      <CTA />
    </>
  );
}
