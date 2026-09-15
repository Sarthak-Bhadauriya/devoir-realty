'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const devoirRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const realtyRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const letters = devoirRef.current?.querySelectorAll('.preloader-letter');
    const line = lineRef.current;
    const realty = realtyRef.current;
    const preloader = preloaderRef.current;

    if (!letters || !line || !realty || !preloader) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // After animation, remove preloader from DOM
        gsap.to(preloader, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.3,
          onComplete: () => {
            preloader.style.display = 'none';
            document.body.style.overflow = '';
          },
        });
      },
    });

    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    tl.set(letters, { opacity: 0, y: 30 })
      .set(line, { scaleX: 0 })
      .set(realty, { opacity: 0, y: 10 })
      .to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
      })
      .to(
        line,
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '-=0.2'
      )
      .to(
        realty,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={preloaderRef}
      className="preloader"
      style={{ zIndex: 99999 }}
    >
      {/* DEVOIR — letter by letter */}
      <div
        ref={devoirRef}
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(40px, 8vw, 80px)',
          fontWeight: 600,
          color: 'var(--color-gold)',
          letterSpacing: '0.4em',
          display: 'flex',
          gap: '0',
        }}
      >
        {'DEVOIR'.split('').map((letter, i) => (
          <span
            key={i}
            className="preloader-letter"
            style={{ display: 'inline-block' }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Expanding line */}
      <div
        ref={lineRef}
        style={{
          width: '100%',
          maxWidth: '320px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
          margin: '16px auto',
          transformOrigin: 'center',
        }}
      />

      {/* REALTY */}
      <div
        ref={realtyRef}
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 500,
          color: 'rgba(201,169,110,0.7)',
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
        }}
      >
        REALTY
      </div>
    </div>
  );
}
