'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Play } from 'lucide-react';
import LeadModal from '@/components/ui/LeadModal';

export default function HeroSection() {
  const labelRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.0 });
    gsap.set([labelRef.current, h1Ref.current, subRef.current, ctaRef.current, scrollRef.current], { opacity: 0, y: 36 });
    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .to(h1Ref.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, '-=0.5')
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    return () => { tl.kill(); };
  }, []);

  return (
    <>
      <section
        id="hero"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '640px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'var(--bg-primary)',
        }}
      >
        {/* Video background */}
        <video
          autoPlay muted loop playsInline preload="auto"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', filter: 'saturate(0.6) brightness(0.55)',
          }}
          aria-hidden="true"
        >
          <source src="https://videos.pexels.com/video-files/3048374/3048374-sd_640_360_25fps.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury property"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 overlay-full" aria-hidden="true" />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px 100px', maxWidth: '920px', width: '100%' }}>
          <div ref={labelRef}>
            <p
              className="hero-element"
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--gold)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <span style={{ width: '30px', height: '1px', background: 'var(--gold)' }} />
              FIND YOUR DREAM HOME
              <span style={{ width: '30px', height: '1px', background: 'var(--gold)' }} />
            </p>
          </div>

          <h1
            ref={h1Ref}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 600,
              color: '#F5F2ED',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '48px',
            }}
          >
            Your Trusted Partner In Finding The Best Property.
          </h1>

          <div
            ref={ctaRef}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}
          >
            <Link href="/properties" className="btn-gold" style={{ textTransform: 'uppercase' }}>
              Explore Properties
            </Link>
            <button
              className="btn-ghost"
              onClick={() => setModalOpen(true)}
              aria-label="Book private consultation"
            >
              Book Private Consultation
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="hero-scroll-indicator"
          style={{
            position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 2,
          }}
          aria-hidden="true"
        >
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '9px', fontWeight: 500, color: 'rgba(245,242,237,0.4)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <div style={{ position: 'relative', width: '1px', height: '56px', background: 'rgba(245,242,237,0.15)' }}>
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: '3px', height: '3px', borderRadius: '50%', background: 'var(--gold)',
              animation: 'dotScroll 1.6s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="viewing" />
    </>
  );
}
