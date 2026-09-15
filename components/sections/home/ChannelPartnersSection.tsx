'use client';

import { useRef } from 'react';

const partners = [
  { id: 'omaxe', name: 'OMAXE', tagline: 'Turning Dreams Into Reality' },
  { id: 'excella', name: 'excella(r)', tagline: 'Experience The Excellence' },
  { id: 'pintail', name: 'PINTAIL PARK CITY', tagline: 'Integrated Township Living' },
  { id: 'shalimar', name: 'SHALIMAR', tagline: 'Building Better Lifestyles' },
];
const allPartners = [...partners, ...partners];

export default function ChannelPartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      ref={sectionRef}
      id="channel-partners"
      style={{ background: 'var(--color-black)', padding: '100px 0', borderTop: '1px solid rgba(201,169,110,0.1)', overflow: 'hidden' }}
    >
      <div className="max-w-[1600px] px-8 md:px-16 lg:px-24 mb-16" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p className="label-text mb-4">Our Developer Partners</p>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: 'var(--color-cream)', lineHeight: 1.1, marginBottom: '16px' }}>
          Authorized Channel Partners
        </h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--color-warm-gray)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
          We are proud authorized channel partners of India&apos;s most reputed real estate developers, giving you access to exclusive projects and pre-launch opportunities.
        </p>
      </div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(201,169,110,0.08)', borderBottom: '1px solid rgba(201,169,110,0.08)', padding: '40px 0' }}>
        <div className="marquee-track">
          {allPartners.map((partner, i) => (
            <div
              key={partner.id + i}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '200px', padding: '0 48px', gap: '8px', borderRight: '1px solid rgba(201,169,110,0.1)' }}
            >
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 700, color: 'var(--color-cream)', letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
                {partner.name}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', color: 'rgba(201,169,110,0.6)', letterSpacing: '0.25em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' }}>
                {partner.tagline}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {partners.map((partner, i) => (
            <div
              key={partner.id}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '40px 24px',
                borderRight: i < partners.length - 1 ? '1px solid rgba(201,169,110,0.08)' : 'none',
                transition: 'background 0.4s ease',
              }}
            >
              <div style={{ width: '32px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 700, color: 'var(--color-cream)', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '8px' }}>
                {partner.name}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '10px', color: 'var(--color-warm-gray)', letterSpacing: '0.2em', textTransform: 'uppercase' as const, textAlign: 'center' }}>
                {partner.tagline}
              </div>
              <div style={{ marginTop: '16px', padding: '4px 10px', border: '1px solid rgba(201,169,110,0.25)', fontFamily: 'var(--font-inter)', fontSize: '9px', color: 'var(--color-gold)', letterSpacing: '0.2em', textTransform: 'uppercase' as const }}>
                Authorized Partner
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
