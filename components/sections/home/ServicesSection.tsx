'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Key, TrendingUp, Building2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 'residential-advisory',
    Icon: Home,
    title: 'Residential Advisory',
    description:
      'Expert guidance in finding your perfect home—aligned with your lifestyle, preferences, and future goals.',
  },
  {
    id: 'commercial-leasing',
    Icon: Building2,
    title: 'Commercial Leasing',
    description:
      'Strategic leasing solutions for retail, office, and warehouse spaces to drive business success.',
  },
  {
    id: 'investment-consulting',
    Icon: TrendingUp,
    title: 'Investment Consulting',
    description:
      'Data-driven property investment strategies designed to maximize returns and minimize risks.',
  },
  {
    id: 'project-marketing',
    Icon: Key,
    title: 'Project Marketing',
    description:
      'End-to-end marketing and branding solutions that accelerate project visibility and sales velocity.',
  },
  {
    id: 'legal-compliance',
    Icon: Home,
    title: 'Legal & Compliance',
    description:
      'Robust legal due diligence and compliance checks for transparent, dispute-free dealings.',
  },
  {
    id: 'property-management',
    Icon: Building2,
    title: 'Property Management',
    description:
      'Comprehensive property care—from tenant coordination to maintenance and rent collection.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card-animate', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power2.out',
      });

      gsap.from('.services-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding-lg"
      style={{ background: 'var(--color-cream)' }}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Section header */}
        <div className="services-heading text-center mb-16">
          <p className="label-text mb-4" style={{ color: 'var(--color-bronze)' }}>
            What We Offer
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              color: 'var(--color-black)',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Our Services
          </h2>
          <span className="gold-line gold-line-center" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="service-card service-card-animate"
            >
              {/* Icon */}
              <div
                className="service-icon-wrapper"
                style={{ marginBottom: '28px' }}
              >
                <service.Icon
                  size={36}
                  strokeWidth={1}
                  style={{
                    color: 'var(--color-taupe)',
                    transition: 'color 0.4s ease',
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'var(--color-black)',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'var(--color-warm-gray)',
                  lineHeight: 1.75,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
