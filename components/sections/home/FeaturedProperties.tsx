'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import PropertyCard from '@/components/ui/PropertyCard';
import LeadModal from '@/components/ui/LeadModal';
import { Property } from '@/data/properties';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProperties({ properties }: { properties: Property[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<'viewing' | 'brochure'>('viewing');
  const [selectedProject, setSelectedProject] = useState('');

  const handleEnquire = (property: Property) => {
    setSelectedProject(property.title);
    setModalTrigger('viewing');
    setModalOpen(true);
  };

  const handleBrochure = (property: Property) => {
    setSelectedProject(property.title);
    setModalTrigger('brochure');
    setModalOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        y: 40, opacity: 0, duration: 1, ease: 'power2.out',
      });
      gsap.from('.feat-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60, opacity: 0, stagger: 0.15, duration: 1, ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="featured-properties"
        className="section-pad-lg"
        style={{ background: 'var(--bg-light)' }}
      >
        <div className="max-w-[1680px] mx-auto px-6 md:px-10">
          {/* Header */}
          <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <p className="label-text" style={{ color: 'var(--gold-hover)', marginBottom: '16px' }}>The Portfolio</p>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 400, color: '#1A1A1F',
                lineHeight: 1.1, marginBottom: '14px',
              }}>
                Handpicked Residences for
                <br />
                <em style={{ fontStyle: 'italic', color: '#5A5650' }}>Discerning Investors</em>
              </h2>
              <span className="gold-rule" />
            </div>
            <Link href="/properties" className="text-link-gold text-link-dark mt-8 md:mt-0" style={{ color: 'var(--gold-hover)' }}>
              View Full Portfolio <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {properties.map((p, i) => (
              <div key={p.id} className="feat-card">
                <PropertyCard
                  property={p}
                  priority={i === 0}
                  onEnquire={handleEnquire}
                  onBrochure={handleBrochure}
                  theme="light"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trigger={modalTrigger}
        defaultProject={selectedProject}
      />
    </>
  );
}
