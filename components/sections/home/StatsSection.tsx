'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, KeyRound, Scale, Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats: Array<{ value: number; suffix: string; prefix: string; label: string; isDecimal?: boolean }> = [
  { value: 300, suffix: '+', prefix: '', label: 'Properties Sold' },
  { value: 15, suffix: '+', prefix: '', label: 'Years of Experience' },
  { value: 50, suffix: '+', prefix: '', label: 'Expert Agents' },
  { value: 10, suffix: '+', prefix: '', label: 'Awards Won' },
];

const values = [
  { Icon: ShieldCheck, title: 'Legal & Verified', desc: '100% legal & verified properties ensuring complete peace of mind.' },
  { Icon: KeyRound, title: 'Transparent Pricing', desc: 'Transparent pricing with no hidden costs in any of our transactions.' },
  { Icon: Scale, title: 'Customer First', desc: 'A customer-first approach focusing on timely project delivery.' },
  { Icon: Globe, title: 'Comprehensive Services', desc: 'End-to-end services, from site selection to final possession.' },
];

export default function WhyDevoir() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      stats.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
          val: stat.value,
          duration: 2.4,
          ease: 'power2.out',
          snap: stat.isDecimal ? undefined : { val: 1 },
          onUpdate: () => {
            el.textContent = stat.prefix + (stat.isDecimal ? obj.val.toFixed(1) : Math.round(obj.val).toLocaleString('en-IN')) + stat.suffix;
          },
        });
      });

      gsap.from('.stat-col', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power2.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-devoir" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Stats block */}
      <div className="section-pad" style={{ borderBottom: '1px solid var(--border-gold)' }}>
        <div className="max-w-[1680px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="label-text" style={{ marginBottom: '12px' }}>The Devoir Difference</p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400, color: 'var(--text-primary)',
            }}>
              15 Years. One Commitment. <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Excellence.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-col"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', padding: '40px 20px', position: 'relative',
                }}
              >
                {i > 0 && (
                  <div style={{
                    position: 'absolute', left: 0, top: '20%', bottom: '20%',
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.25), transparent)',
                  }} aria-hidden="true" />
                )}

                <div style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '10px',
                }}>
                  <span ref={el => { countersRef.current[i] = el; }}>
                    {stat.prefix}0{stat.suffix}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-jakarta)', fontSize: '11px', fontWeight: 400,
                  color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase',
                  lineHeight: 1.5, maxWidth: '140px',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values grid */}
      <div className="section-padding-lg" style={{ background: 'var(--bg-secondary)', width: '100%' }}>
        <div className="max-w-[1680px] mx-auto px-6 md:px-10" style={{ margin: '0 auto' }}>
          <div className="text-center mb-14 max-w-[800px] mx-auto" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 400, color: 'var(--text-primary)',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              Why Choose <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Devoir Realty?</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              At Devoir Realty, we are committed to transforming dreams into reality. Our dedication to excellence, trust, and client satisfaction sets us apart in the real estate industry. Here&apos;s why you should choose us for your next real estate investment:
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="value-card"
                style={{
                  border: '1px solid var(--border-gold)',
                  padding: '36px 28px',
                  background: 'var(--bg-primary)',
                  transition: 'border-color 0.4s ease, background 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--gold)';
                  el.style.background = 'rgba(201,169,110,0.04)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border-gold)';
                  el.style.background = 'var(--bg-primary)';
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <Icon size={32} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 400,
                  color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.25,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300,
                  color: 'var(--text-secondary)', lineHeight: 1.75,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
