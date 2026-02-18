'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

const schema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  company: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Please write a message of at least 10 characters.' })
    .max(2000, { message: 'Message is too long (maximum 2000 characters).' }),
  // honeypot field — bots usually fill hidden fields
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
    getValues,
    trigger,
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

  const handleDirectEmail = async () => {
    // Trigger validation only for the required fields we care about
    const isValid = await trigger(['name', 'email', 'message']);

    if (!isValid) {
      // Errors are already shown by react-hook-form
      // Optional: you could add a toast / general message here if you want
      // Example: setServerMessage("Please fix the errors before using direct email.");
      return;
    }
    const values = getValues();
    const name = values.name?.trim() || 'Visitor';
    const subject = encodeURIComponent(`Website contact from ${name}`);

    let body = '';
    if (values.message?.trim()) {
      body += values.message.trim() + '\n\n';
    }
    if (values.company?.trim()) {
      body += `Company: ${values.company.trim()}\n`;
    }
    body += `Reply to: ${values.email || '(email not provided)'}`;

    const mailto = `mailto:hello@cactusitsolution.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputBase = cn(
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900',
    'shadow-sm outline-none transition placeholder:text-slate-400',
    'focus:border-cactus-400 focus:ring-2 focus:ring-cactus-200',
    'data-[invalid=true]:border-red-500 data-[invalid=true]:focus:border-red-500 data-[invalid=true]:focus:ring-red-200',
  );

  const label = 'text-sm font-semibold text-slate-900';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-label="Contact form">
      {/* Honeypot field — hidden from humans */}
      <div className="hidden">
        <label className={label} htmlFor="website">
          Website (do not fill)
        </label>
        <input id="website" type="text" autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className={label} htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            className={inputBase}
            placeholder="Your name"
            data-invalid={!!errors.name}
            {...register('name')}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className={label} htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            className={inputBase}
            placeholder="you@company.com"
            data-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className={label} htmlFor="company">
          Company (optional)
        </label>
        <input
          id="company"
          className={inputBase}
          placeholder="Company name"
          {...register('company')}
        />
      </div>

      <div className="space-y-2">
        <label className={label} htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          className={cn(inputBase, 'min-h-[140px] resize-y')}
          placeholder="Tell us about your project..."
          data-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button type="submit" disabled={status === 'loading'} style={{ display: 'none' }}>
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={handleDirectEmail}
          className="border-cactus-400 text-cactus-700 hover:bg-cactus-50 hover:text-cactus-800"
        >
          Email us directly
        </Button>

        <p
          className={cn(
            'order-last text-sm sm:order-none',
            status === 'success'
              ? 'text-cactus-700'
              : status === 'error'
                ? 'text-red-600'
                : 'text-slate-600',
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
