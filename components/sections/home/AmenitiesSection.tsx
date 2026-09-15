'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Camera, Car, Dumbbell, Zap } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const amenities = [
  { Icon: Shield, title: 'Secure Entrance Gate', description: 'Controlled access with 24/7 security personnel at all entry and exit points.' },
  { Icon: Shield, title: 'Guard Security', description: 'Trained security guards stationed round-the-clock ensuring resident safety.' },
  { Icon: Camera, title: 'CCTV Surveillance', description: 'High-definition CCTV cameras covering all common areas and entry points.' },
  { Icon: Car, title: 'Ample Parking Space', description: 'Dedicated parking spaces with visitor parking and EV charging provisions.' },
  { Icon: Dumbbell, title: 'Gym and Fitness Center', description: 'Fully equipped modern gymnasium with the latest fitness equipment.' },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.amenity-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="amenities"
      style={{ background: 'var(--color-charcoal)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div className="max-w-[1600px] px-8 md:px-16 lg:px-24" style={{ margin: '0 auto' }}>
        <div className="text-center mb-16" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="label-text mb-4">World-Class Facilities</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: 'var(--color-cream)', lineHeight: 1.1, marginBottom: '16px' }}>
            Premium Amenities
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--color-warm-gray)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
            Every property we represent comes with world-class amenities designed to elevate your daily living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          {amenities.map((amenity, i) => (
            <div
              key={amenity.title}
              className="amenity-card"
              style={{
                padding: '40px 28px',
                borderRight: i < amenities.length - 1 ? '1px solid rgba(201,169,110,0.08)' : 'none',
                textAlign: 'center',
                transition: 'background 0.4s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,169,110,0.05)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <amenity.Icon size={36} strokeWidth={1} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 400, color: 'var(--color-cream)', marginBottom: '12px', lineHeight: 1.3 }}>
                {amenity.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
