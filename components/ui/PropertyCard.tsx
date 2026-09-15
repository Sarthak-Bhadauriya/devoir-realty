'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import { Property } from '@/data/properties';

interface Props {
  property: Property;
  priority?: boolean;
  onEnquire?: (property: Property) => void;
  onBrochure?: (property: Property) => void;
  theme?: 'light' | 'dark';
}

export default function PropertyCard({
  property,
  priority = false,
  onEnquire,
  onBrochure,
  theme = 'light',
}: Props) {
  const isDark = theme === 'dark';

  return (
    <article className="prop-card group" aria-label={property.title}>
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: '#1A1A1F' }}>
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="prop-card-img"
          style={{ objectFit: 'cover', filter: 'saturate(0.8)' }}
          priority={priority}
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0 overlay-bottom pointer-events-none" />

        {/* Tag badge */}
        <div style={{ position: 'absolute', top: '18px', left: '18px' }}>
          <span className="card-tag">{property.tag}</span>
        </div>

        {/* Status badge */}
        <div style={{ position: 'absolute', top: '18px', right: '18px' }}>
          <span style={{
            fontFamily: 'var(--font-jakarta)',
            fontSize: '9px', fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'rgba(245,242,237,0.7)',
            background: 'rgba(9,9,11,0.6)',
            backdropFilter: 'blur(8px)',
            padding: '4px 10px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {property.status}
          </span>
        </div>

        {/* Hover reveal CTA */}
        <div className="prop-card-reveal">
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onEnquire?.(property)}
              className="btn-gold"
              style={{ flex: 1, justifyContent: 'center', fontSize: '10px', padding: '11px 16px' }}
            >
              Enquire Now <ArrowRight size={13} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => onBrochure?.(property)}
              aria-label="Download brochure"
              style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--text-primary)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '11px 14px', transition: 'all 0.3s ease', backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
            >
              <Download size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div
        className="prop-card-body"
        style={{
          paddingTop: '20px',
          paddingBottom: '4px',
          background: isDark ? 'transparent' : 'transparent',
        }}
      >
        {/* Developer */}
        <p style={{
          fontFamily: 'var(--font-jakarta)', fontSize: '10px', fontWeight: 500,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: isDark ? 'rgba(201,169,110,0.6)' : 'var(--gold-hover)',
          marginBottom: '6px',
        }}>
          {property.developer}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 400,
          color: isDark ? 'var(--text-primary)' : '#1A1A1F',
          lineHeight: 1.25, marginBottom: '8px',
        }}>
          {property.title}
        </h3>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
          <MapPin size={12} strokeWidth={1.5} style={{ color: isDark ? 'var(--text-secondary)' : '#9A958A', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', fontWeight: 400, color: isDark ? 'var(--text-secondary)' : '#9A958A', letterSpacing: '0.05em' }}>
            {property.location}
          </span>
        </div>

        {/* Price */}
        <div style={{
          fontFamily: 'var(--font-inter)', fontSize: '18px', fontWeight: 600,
          color: 'var(--gold-hover)', marginBottom: '12px',
        }}>
          {property.price}
        </div>

        {/* Specs */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '2px' }}>
          {[property.bhk, property.area, property.category].map((spec, i) => (
            <span key={spec} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {i > 0 && <span className="spec-div" style={{ color: isDark ? 'var(--text-secondary)' : '#9A958A' }} />}
              <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', fontWeight: 400, color: isDark ? 'var(--text-secondary)' : '#9A958A' }}>
                {spec}
              </span>
            </span>
          ))}
        </div>

        {/* View link */}
        <Link
          href={`/properties/${property.slug}`}
          className={`text-link-gold ${isDark ? '' : 'text-link-dark'}`}
          style={{ color: isDark ? 'var(--gold)' : 'var(--gold-hover)' }}
          aria-label={`View details for ${property.title}`}
        >
          View Details <ArrowRight size={13} strokeWidth={1.5} />
        </Link>

        {/* RERA */}
        {property.reraId && (
          <p className="rera-tag" style={{ marginTop: '10px' }}>
            RERA: {property.reraId}
          </p>
        )}
      </div>
    </article>
  );
}
