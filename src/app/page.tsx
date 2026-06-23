import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { CaseStudiesGrid } from '@/components/sections/CaseStudiesGrid';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid compact />
      <WhyChoose />
      <CaseStudiesGrid compact />
      <CTA />
    </>
  );
}
