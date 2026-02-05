import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Cactus IT Solution for a consultation or a quote.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ intent?: string }>;
}) {
  const resolvedSearchParams = await searchParams
  const intent = resolvedSearchParams?.intent || 'contact';

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
          Tell us what you’re building. We’ll respond with next steps and a practical plan.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="p-6 lg:col-span-3">
            <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              We typically respond within 1–2 business days.
            </p>
            <div className="mt-6">
              <ContactForm defaultIntent={intent} />
            </div>
          </Card>

          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-slate-900">Consultation</h3>
              <p className="mt-2 text-sm text-slate-600">
                Book a short call to discuss goals, timeline, and budget options.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-semibold text-slate-900">Contact details</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-medium text-slate-700">Email:</span> {SITE.email}
                </li>
                <li>
                  <span className="font-medium text-slate-700">Phone:</span> {SITE.phone}
                </li>
                <li>
                  <span className="font-medium text-slate-700">Location:</span> {SITE.location}
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
