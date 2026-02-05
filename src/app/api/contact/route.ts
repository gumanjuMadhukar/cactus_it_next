import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { SITE } from '@/content/site';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

type Payload = z.infer<typeof schema>;

function isHoneypotTriggered(payload: Payload) {
  return Boolean(payload.website && payload.website.trim().length > 0);
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = schema.parse(await request.json());
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid form submission.' }, { status: 400 });
  }

  if (isHoneypotTriggered(payload)) {
    // Treat as success to avoid helping bots.
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // If RESEND_API_KEY is not configured, we still respond OK (so your UI works in dev).
  if (!process.env.RESEND_API_KEY) {
    console.warn('[contact] Missing RESEND_API_KEY. Skipping email send.', payload);
    return NextResponse.json({ ok: true, message: 'Received (email not configured).' }, { status: 200 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const subject = `New inquiry from ${payload.name}${payload.company ? ` (${payload.company})` : ''}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : undefined,
    '',
    payload.message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    // NOTE: You must verify your sending domain inside Resend and use a verified "from".
    await resend.emails.send({
      from: `Cactus Website <onboarding@resend.dev>`,
      to: [SITE.email],
      replyTo: payload.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[contact] Email send failed', err);
    return NextResponse.json({ ok: false, message: 'Failed to send. Please try again later.' }, { status: 500 });
  }
}
