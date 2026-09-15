'use client';

import { useEffect, useRef } from 'react';

const developers = [
  'Emaar India', 'Vidhi Group', 'Amrawati', 'Sahu Group',
  'Eldeco Group', 'Excella', 'Kalpana', 'Omaxe', 'Shalimar',
];

export default function DeveloperMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  // Duplicate for seamless scroll
  const items = [...developers, ...developers];

  return (
    <section
      ref={sectionRef}
      id="developer-alliances"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)',
        padding: '40px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fade masks */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--bg-secondary), transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--bg-secondary), transparent)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{
          display: 'inline-block',
          fontFamily: 'var(--font-jakarta)',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}>
          Tier-1 Developer Alliances
        </span>
      </div>

      <div className="marquee-track">
        {items.map((dev, i) => (
          <div
            key={`${dev}-${i}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '64px',
              flexShrink: 0,
            }}
          >
            <span style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 400,
              color: 'rgba(201,169,110,0.45)',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              transition: 'color 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(201,169,110,0.45)'}
            >
              {dev}
            </span>

            {/* Decorative dot separator */}
            <span style={{
              width: '4px', height: '4px', borderRadius: '50%',
              background: 'rgba(201,169,110,0.25)', flexShrink: 0,
            }} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
