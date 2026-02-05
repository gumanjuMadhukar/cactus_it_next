import Link from 'next/link';
import { PROJECTS } from '@/content/projects';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function CaseStudiesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? PROJECTS.slice(0, 6) : PROJECTS;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionHeader
        eyebrow="Projects"
        title="Case studies that show impact"
        description="A snapshot of the kind of work we deliver—replace these examples with your real portfolio when ready."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.slug} className="group p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cactus-800">{p.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href ? (
              <Link href={p.href} className="mt-5 inline-block text-sm font-semibold text-cactus-700 hover:text-cactus-800">
                View details →
              </Link>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
