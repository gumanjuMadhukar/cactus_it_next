import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Cactus IT Solution—our mission, vision, and values.',
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">About Us</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
          Cactus IT Solution exists to help teams ship reliable products, build strong digital presence, and make
          data-driven decisions.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900">Mission</h2>
            <p className="mt-2 text-sm text-slate-600">
              Deliver practical, high-quality digital solutions that create measurable business impact.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900">Vision</h2>
            <p className="mt-2 text-sm text-slate-600">
              Become the most trusted technology partner for growing companies worldwide.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900">Values</h2>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cactus-600" />
                Innovation with purpose
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cactus-600" />
                Reliability & transparency
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cactus-600" />
                Growth for clients & teams
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-xl font-semibold text-slate-900">Our expertise</h3>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            We work across frontend, backend, cloud, analytics, and marketing—bringing the right mix of skills to deliver
            end-to-end solutions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Innovation</p>
              <p className="mt-2 text-sm text-slate-600">
                Modern stacks and automation—without over-engineering.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Reliability</p>
              <p className="mt-2 text-sm text-slate-600">
                Strong engineering practices, testing discipline, and production readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
