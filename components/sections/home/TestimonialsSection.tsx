'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const animateTransition = useCallback((nextIndex: number) => {
    if (isAnimating || !contentRef.current) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(nextIndex);
        setIsAnimating(false);
      },
    });

    tl.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
    }).set(contentRef.current, { y: 20 }).to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, [isAnimating]);

  const goNext = useCallback(() => {
    const nextIndex = (current + 1) % testimonials.length;
    animateTransition(nextIndex);
  }, [current, animateTransition]);

  const goPrev = useCallback(() => {
    const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
    animateTransition(prevIndex);
  }, [current, animateTransition]);

  // Auto-rotate every 6s
  useEffect(() => {
    intervalRef.current = setInterval(goNext, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext]);

  // Reset interval on manual nav
  const handleNav = (direction: 'next' | 'prev') => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    direction === 'next' ? goNext() : goPrev();
    intervalRef.current = setInterval(goNext, 6000);
  };

  // Section entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-inner', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding"
      style={{
        background: 'var(--color-black)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative giant quote mark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(160px, 20vw, 240px)',
          fontWeight: 400,
          color: 'var(--color-gold)',
          opacity: 0.06,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </div>

      <div
        className="testimonials-inner max-w-[900px] px-8 md:px-16 lg:px-24"
        style={{ position: 'relative', zIndex: 1, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        {/* Label */}
        <p className="label-text mb-12" style={{ color: 'var(--color-gold)' }}>
          Client Stories
        </p>

        {/* Quote */}
        <div ref={contentRef}>
          <blockquote
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(20px, 3vw, 30px)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--color-cream)',
              lineHeight: 1.65,
              marginBottom: '40px',
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div>
            {t.property && (
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  color: 'var(--color-warm-gray)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {t.property}
              </p>
            )}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-gold)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              {t.author}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 300,
                color: 'var(--color-warm-gray)',
              }}
            >
              {t.designation}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '56px',
          }}
        >
          <button
            onClick={() => handleNav('prev')}
            aria-label="Previous testimonial"
            style={{
              background: 'none',
              border: '1px solid rgba(201,169,110,0.3)',
              color: 'var(--color-gold)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-gold)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-black)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'none';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-gold)';
            }}
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          {/* Dot indicators */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  animateTransition(i);
                  intervalRef.current = setInterval(goNext, 6000);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '2px',
                  background: i === current ? 'var(--color-gold)' : 'rgba(201,169,110,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.4s ease',
                  borderRadius: '0',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => handleNav('next')}
            aria-label="Next testimonial"
            style={{
              background: 'none',
              border: '1px solid rgba(201,169,110,0.3)',
              color: 'var(--color-gold)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-gold)';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-black)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'none';
              (e.currentTarget as HTMLElement).style.color = 'var(--color-gold)';
            }}
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
