import { ImageResponse } from 'next/og';
import { SITE } from '@/content/site';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'white',
          padding: 64,
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760 }}>
          <div style={{ fontSize: 44, fontWeight: 800, color: '#0f172a' }}>{SITE.name}</div>
          <div style={{ fontSize: 34, fontWeight: 700, color: '#16a34a' }}>{SITE.tagline}</div>
          <div style={{ fontSize: 22, color: '#475569', lineHeight: 1.4 }}>{SITE.description}</div>
        </div>

        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 48,
            background: 'rgba(22,163,74,0.12)',
            border: '1px solid rgba(22,163,74,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              background: '#16a34a',
              borderRadius: 18,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
