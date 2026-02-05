import Link from 'next/link';
import { Github, Linkedin, X } from 'lucide-react';
import { SOCIAL_LINKS, SITE } from '@/content/site';
import { SocialPlatform } from '@/types/enums';

const ICONS: Record<SocialPlatform, React.ReactNode> = {
  [SocialPlatform.LinkedIn]: <Linkedin size={18} />,
  [SocialPlatform.GitHub]: <Github size={18} />,
  [SocialPlatform.X]: <X size={18} />,
  [SocialPlatform.Facebook]: <span className="text-sm font-semibold">f</span>,
  [SocialPlatform.Instagram]: <span className="text-sm font-semibold">ig</span>,
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-base font-semibold text-slate-900">{SITE.name}</p>
          <p className="mt-2 text-sm text-slate-600">{SITE.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
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
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Social</p>
          <div className="mt-3 flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <Link
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                aria-label={s.platform}
              >
                {ICONS[s.platform] ?? <span className="text-xs">{s.platform}</span>}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Built with Next.js + Tailwind. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
