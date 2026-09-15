'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image clip-path wipe from left
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
        },
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.5,
        ease: 'power4.inOut',
      });

      // Badge pop-in
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
        },
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });

      // Text reveal
      const textChildren = textRef.current?.children;
      if (textChildren) {
        gsap.from(Array.from(textChildren), {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding-lg"
      style={{ background: 'var(--color-black)' }}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div style={{ position: 'relative' }}>
            <div
              ref={imageRef}
              style={{
                position: 'relative',
                aspectRatio: '4/5',
                overflow: 'hidden',
                maxHeight: '680px',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Devoir Realty — architectural excellence"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover', filter: 'saturate(0.8)' }}
              />
              {/* Inner dark overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(135deg, rgba(10,10,10,0.3) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              ref={badgeRef}
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                background: 'var(--color-charcoal)',
                border: '1px solid var(--color-gold)',
                padding: '28px 32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                2021
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px',
                  fontWeight: 400,
                  color: 'var(--color-warm-gray)',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                Since
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div ref={textRef}>
            <p className="label-text" style={{ marginBottom: '20px' }}>
              WELCOME
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 400,
                color: 'var(--color-cream)',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              Your Dream Property
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
                Awaits
              </em>
            </h2>

            <span className="gold-line" style={{ marginBottom: '28px' }} />

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '17px',
                fontWeight: 300,
                color: 'var(--color-warm-gray)',
                lineHeight: 1.85,
                marginBottom: '20px',
              }}
            >
              At Devoir Realty, we make your property dreams a reality. Whether you&apos;re searching for a luxurious home, a smart investment, or a commercial space, we offer a diverse portfolio tailored to your needs. Our expertise, market knowledge, and client-first approach ensure a seamless and rewarding real estate experience.
            </p>

            {/* Signature */}
            <div
              style={{
                borderLeft: '2px solid var(--color-gold)',
                paddingLeft: '20px',
                marginBottom: '40px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '22px',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: 'var(--color-cream)',
                  lineHeight: 1.4,
                }}
              >
                &ldquo;Let us guide you to your ideal property with confidence and ease.&rdquo;
              </p>
            </div>

            <Link href="/about" className="text-link">
              Our Full Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
