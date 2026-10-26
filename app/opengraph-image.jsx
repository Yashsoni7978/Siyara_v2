import { ImageResponse } from 'next/og';

export const alt = 'Siyara Innovations · Digital Architecture Studio Jaipur';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#071E18',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
          border: '12px solid #0B110F',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {/* Subtle Gold Architectural Inner Border */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
            border: '1px solid rgba(217, 180, 95, 0.45)',
            borderRadius: '16px',
          }}
        />

        {/* Top Header / Studio Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(217, 180, 95, 0.12)',
              border: '1px solid rgba(217, 180, 95, 0.4)',
              padding: '10px 24px',
              borderRadius: '9999px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#D9B45F',
                marginRight: '12px',
              }}
            />
            <span
              style={{
                color: '#D9B45F',
                fontSize: 16,
                letterSpacing: '0.22em',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              SIYARA INNOVATIONS · JAIPUR
            </span>
          </div>

          <div
            style={{
              color: '#ECE7D8',
              fontSize: 15,
              letterSpacing: '0.16em',
              fontWeight: 500,
              textTransform: 'uppercase',
              opacity: 0.85,
            }}
          >
            DIGITAL ARCHITECTURE STUDIO
          </div>
        </div>

        {/* Center Main Stage / Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '1040px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#F3EFE3',
              lineHeight: 1.25,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            Digital Architecture Studio — Next.js Engineering, SEO &amp; AI Search (GEO)
          </div>
          <div
            style={{
              fontSize: 21,
              color: '#9D9B91',
              lineHeight: 1.5,
              fontWeight: 400,
              maxWidth: '880px',
              textAlign: 'center',
            }}
          >
            Bespoke web applications, verified Schema.org knowledge graphs, and high-conversion commercial funnels for enterprises in Jaipur &amp; across India.
          </div>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: 'rgba(7, 10, 9, 0.75)',
            border: '1px solid rgba(24, 169, 130, 0.3)',
            borderRadius: '12px',
            padding: '16px 32px',
            zIndex: 10,
          }}
        >
          <span
            style={{
              color: '#ECE7D8',
              fontSize: 18,
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}
          >
            LCP &lt; 1.8s &nbsp;&nbsp;|&nbsp;&nbsp; Next.js 15 &amp; React 19 &nbsp;&nbsp;|&nbsp;&nbsp; www.siyaradigitals.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
