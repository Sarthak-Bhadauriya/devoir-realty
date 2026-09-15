'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on background image
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -80,
        ease: 'none',
      });

      // Content fade-up
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta-banner"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '160px 24px',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-80px 0',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.6)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,10,0.72)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '760px',
        }}
      >
        <p className="label-text mb-6" style={{ letterSpacing: '0.45em' }}>
          Private Consultations
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 400,
            color: 'var(--color-white)',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          Begin Your Journey Home
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '17px',
            fontWeight: 300,
            color: 'var(--color-warm-gray)',
            marginBottom: '48px',
            lineHeight: 1.8,
          }}
        >
          Let us find the perfect property that matches your lifestyle,
          aspirations, and investment horizon.
        </p>

        <Link
          href="/contact"
          className="btn-primary"
          style={{ fontSize: '12px', padding: '18px 48px' }}
        >
          Schedule a Private Consultation
        </Link>
      </div>
    </section>
  );
}
