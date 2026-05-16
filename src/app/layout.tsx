import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import { SITE } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'IT services',
    'web application development',
    'website development',
    'mobile applications',
    'data analytics',
    'digital marketing',
    'IT consulting',
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.domain,
    siteName: SITE.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <OrganizationJsonLd />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJEZ72460J"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJEZ72460J');
          `}
        </Script>
      </body>
    </html>
  );
}
