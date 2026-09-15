'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Maximize, Phone, Mail, ArrowLeft, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Property } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import LeadModal from '@/components/ui/LeadModal';
import EMICalculator from '@/components/ui/EMICalculator';
import PropertyMapSearch from '@/components/ui/PropertyMapSearch';

interface Props {
  property: Property;
  similar: Property[];
}

export default function PropertyDetailClient({ property, similar }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<'viewing' | 'brochure'>('viewing');

  const displayedFeatures = showAllFeatures ? property.features : property.features.slice(0, 6);

  const handleEnquire = (trigger: 'viewing' | 'brochure') => {
    setModalTrigger(trigger);
    setModalOpen(true);
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '24px 0', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <Link
            href="/properties"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--text-secondary)',
              textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div style={{ background: 'var(--bg-secondary)' }}>
        {/* Main image */}
        <div style={{ position: 'relative', height: 'clamp(300px, 55vw, 680px)', overflow: 'hidden' }}>
          <Image
            src={property.images[activeImg]}
            alt={`${property.title} — image ${activeImg + 1}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
            priority
          />
          {/* Nav arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={() => setActiveImg(i => (i - 1 + property.images.length) % property.images.length)}
                aria-label="Previous image"
                style={{
                  position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(9,9,11,0.5)', border: '1px solid rgba(201,169,110,0.4)',
                  color: 'var(--gold)', cursor: 'pointer', padding: '12px',
                  display: 'flex', alignItems: 'center', backdropFilter: 'blur(8px)', transition: 'all 0.3s ease',
                }}
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setActiveImg(i => (i + 1) % property.images.length)}
                aria-label="Next image"
                style={{
                  position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(9,9,11,0.5)', border: '1px solid rgba(201,169,110,0.4)',
                  color: 'var(--gold)', cursor: 'pointer', padding: '12px',
                  display: 'flex', alignItems: 'center', backdropFilter: 'blur(8px)', transition: 'all 0.3s ease',
                }}
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </>
          )}
          {/* Image counter */}
          <div style={{
            position: 'absolute', bottom: '20px', right: '24px',
            background: 'rgba(9,9,11,0.6)', backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-gold)', padding: '6px 14px',
            fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.1em',
          }}>
            {activeImg + 1} / {property.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'flex', gap: '4px', padding: '4px', overflowX: 'auto' }} className="no-scrollbar">
          {property.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              aria-label={`View image ${i + 1}`}
              style={{
                flexShrink: 0, width: '100px', height: '64px', overflow: 'hidden',
                border: i === activeImg ? '2px solid var(--gold)' : '2px solid transparent',
                padding: 0, cursor: 'pointer', position: 'relative', transition: 'border-color 0.3s ease',
              }}
            >
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: i !== activeImg ? 'brightness(0.5)' : 'none', transition: 'filter 0.3s ease' }} />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Title & Status */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-jakarta)', fontSize: '9px', fontWeight: 600,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  background: 'var(--gold)', color: 'var(--bg-primary)', padding: '4px 10px'
                }}>
                  {property.status}
                </span>
                <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {property.developer}
                </span>
                <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {property.category}
                </span>
              </div>
              <h1 style={{
                fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '12px'
              }}>
                {property.title}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} strokeWidth={1.5} style={{ color: 'var(--text-secondary)' }} />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {property.location}
                </span>
              </div>
            </div>

            {/* Specs row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0',
              borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)',
              padding: '20px 0', marginBottom: '40px', flexWrap: 'wrap',
            }}>
              {[
                { label: property.bhk },
                { Icon: Maximize, label: property.area },
              ].map(({ Icon, label }, i) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 32px', borderRight: i < 1 ? '1px solid var(--border-gold)' : 'none' }}>
                  {Icon && <Icon size={16} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />}
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--text-primary)', fontWeight: 300 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '20px' }}>
                About This Property
              </h2>
              {property.longDescription.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300,
                  color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '16px'
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Features grid */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '24px' }}>
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {displayedFeatures.map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={14} strokeWidth={2} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              {property.features.length > 6 && (
                <button
                  onClick={() => setShowAllFeatures(v => !v)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 500,
                    color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase',
                    marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px'
                  }}
                >
                  {showAllFeatures ? 'Show Less' : `+${property.features.length - 6} More Features`}
                </button>
              )}
            </div>

            <EMICalculator startingPrice={property.priceFrom} />

            <div style={{ marginBottom: '48px' }}>
              <PropertyMapSearch
                properties={[property]}
                title="Location & nearby landmarks"
                description={`Explore ${property.location}, ${property.city} on the interactive map. Zoom or open Maps to check nearby landmarks, routes, schools, healthcare and daily conveniences.`}
              />
            </div>
            
            {/* RERA */}
            {property.reraId && (
              <div style={{ padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-gold)' }}>
                <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: 'var(--text-secondary)' }}>
                  HARERA Registration No: {property.reraId}
                </p>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div>
            <div style={{
              position: 'sticky', top: '100px',
              border: '1px solid var(--border-gold)',
              background: 'var(--bg-secondary)',
              padding: '40px 32px',
            }}>
              {/* Price */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Starting Price
                </p>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>
                  {property.price}
                </div>
              </div>

              {/* CTA */}
              <button
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '12px', display: 'flex' }}
                onClick={() => handleEnquire('viewing')}
              >
                Schedule a Viewing
              </button>
              <button
                className="btn-ghost"
                style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
                onClick={() => handleEnquire('brochure')}
              >
                Request Brochure
              </button>

              <div style={{ margin: '32px 0', height: '1px', background: 'var(--border-gold)' }} />

              {/* Agent info */}
              <div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Official Channel Partner
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      Devoir Realty Advisory
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300 }}>
                      Luxury Portfolio Desk
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href={`tel:+919811199990`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300 }}>+91 98111 99990</span>
                  </a>
                  <a href={`mailto:sales@devoirrealty.com`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
                  >
                    <Mail size={14} strokeWidth={1.5} />
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300 }}>sales@devoirrealty.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid var(--border-gold)' }}>
            <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
              <div>
                <p className="label-text mb-3">You May Also Like</p>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 400, color: 'var(--text-primary)' }}>
                  Similar Properties
                </h2>
              </div>
              <Link href="/properties" className="text-link-gold">
                View All
              </Link>
            </div>
            <div style={{ background: 'var(--bg-secondary)', padding: '40px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {similar.map(p => <PropertyCard key={p.id} property={p} theme="dark" />)}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trigger={modalTrigger}
        defaultProject={property.title}
      />
    </div>
  );
}
