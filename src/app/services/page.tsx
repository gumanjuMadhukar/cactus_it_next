import type { Metadata } from 'next';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Cactus IT Solution services: web & mobile applications, data analysis, digital marketing, custom software, and IT consulting.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          End-to-end digital solutions to help you build, optimize, and grow.
        </p>
      </div>
      <ServicesGrid />
      <CTA />
    </>
  );
}
