'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Please include a brief message (at least 10 characters).'),
  // honeypot - bots tend to fill this
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({ defaultIntent }: { defaultIntent?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const defaultMessage = useMemo(() => {
    if (defaultIntent === 'quote') return 'Hi Cactus IT Solution, I’d like a quote for...';
    return '';
  }, [defaultIntent]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { message: defaultMessage },
  });

  async function onSubmit(values: FormValues) {
    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setStatus('error');
        setServerMessage(data.message ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setServerMessage('Thanks! We’ll get back to you shortly.');
      reset();
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please try again.');
    }
  }

  const input =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 ' +
    'shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cactus-400 focus:ring-2 focus:ring-cactus-200';

  const label = 'text-sm font-semibold text-slate-900';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-label="Contact form">
      {/* Honeypot */}
      <div className="hidden">
        <label className={label} htmlFor="website">
          Website
        </label>
        <input id="website" type="text" autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" className={input} placeholder="Your name" {...register('name')} />
          {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
        </div>

        <div className="space-y-2">
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" className={input} placeholder="you@company.com" {...register('email')} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <label className={label} htmlFor="company">
          Company (optional)
        </label>
        <input id="company" className={input} placeholder="Company name" {...register('company')} />
      </div>

      <div className="space-y-2">
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className={cn(input, 'min-h-[140px] resize-y')}
          placeholder="Tell us about your project..."
          {...register('message')}
        />
        {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </Button>

        <p
          className={cn(
            'text-sm',
            status === 'success' ? 'text-cactus-700' : status === 'error' ? 'text-red-600' : 'text-slate-600',
          )}
          role="status"
          aria-live="polite"
        >
          {serverMessage}
        </p>
      </div>
    </form>
  );
}
