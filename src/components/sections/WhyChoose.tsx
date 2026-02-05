'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, Zap, Layers, Users2 } from 'lucide-react';
import { MotionCard, MotionSection } from '@/components/ui/Motion/MotionSection';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    title: 'Reliable engineering',
    description: 'Clean code, secure practices, and predictable delivery—built for real businesses.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast iteration cycles',
    description: 'Ship improvements quickly with clear milestones, agile planning, and pragmatic decisions.',
    icon: Zap,
  },
  {
    title: 'Scalable architecture',
    description: 'Modular, maintainable systems designed to grow with your product and your team.',
    icon: Layers,
  },
  {
    title: 'Partnership mindset',
    description: 'We communicate early, document well, and treat your goals like our own.',
    icon: Users2,
  },
];

export function WhyChoose({ darkBg = false }: { darkBg?: boolean }) {
  return (
    <MotionSection darkBg={darkBg} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Why Cactus"
          title="A calm partner for complex projects"
          description="We combine strong engineering practices with business-first thinking—so your digital investment delivers outcomes."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <MotionCard key={f.title}>
              <Card className={cn('h-full p-6 transition-colors', darkBg ? 'bg-slate-800 border-slate-700' : '')}>
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-2xl',
                    darkBg ? 'bg-white/10 ring-1 ring-slate-600' : 'bg-white ring-1 ring-slate-200'
                  )}>
                    <f.icon size={22} className={darkBg ? 'text-cactus-400' : 'text-cactus-700'} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm opacity-90">{f.description}</p>
                  </div>
                </div>
              </Card>
            </MotionCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}