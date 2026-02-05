import { cn } from '@/lib/utils';

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-cactus-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
