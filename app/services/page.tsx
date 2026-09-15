import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Key, TrendingUp, Building2, Search, FileCheck, Handshake, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Devoir Realty offers property sales, luxury rentals, investment advisory, and property management services across India.',
};

const mainServices = [
  {
    Icon: Home,
    title: 'Residential Advisory',
    description: 'Helping you find the perfect home — whether a luxury flat, duplex, or independent house — with expert guidance tailored to your lifestyle and budget.',
    features: ['Property valuation', 'Site visits & shortlisting', 'Builder negotiations', 'Documentation support', 'RERA compliance checks'],
  },
  {
    Icon: Building2,
    title: 'Commercial Real Estate',
    description: 'Strategic solutions for buying, selling, or leasing office spaces, retail outlets, and commercial properties across Lucknow prime business corridors.',
    features: ['Tenant sourcing', 'Lease negotiations', 'Site selection', 'Portfolio strategy', 'Market analysis'],
  },
  {
    Icon: TrendingUp,
    title: 'Investment Consulting',
    description: 'Maximize your ROI with personalized real estate investment strategies informed by deep market intelligence and exclusive pre-launch project access.',
    features: ['Portfolio strategy', 'Pre-launch access', 'Commercial investments', 'NRI advisory', 'Returns analysis'],
  },
  {
    Icon: Key,
    title: 'Project Marketing',
    description: 'We partner with leading developers to market their projects, connecting them with the right buyers through our extensive client network across Lucknow.',
    features: ['Developer partnerships', 'Buyer network', 'Site activations', 'Digital campaigns', 'Sales management'],
  },
  {
    Icon: Search,
    title: 'Legal and Compliance',
    description: '100% legal and verified properties with end-to-end documentation support, RERA compliance checks, and transparent dealings — no hidden costs.',
    features: ['Title verification', 'RERA compliance', 'Sale deed review', 'Registration support', 'Builder credibility checks'],
  },
  {
    Icon: FileCheck,
    title: 'Property Management',
    description: 'Comprehensive management solutions to maintain and enhance property value — from maintenance oversight and tenant relations to financial reporting.',
    features: ['Maintenance oversight', 'Tenant relations', 'Rental collections', 'Financial reporting', 'Renovation management'],
  },
];



export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--color-black)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <div style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <p className="label-text mb-4">What We Do</p>
          <h1 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 400,
            color: 'var(--color-cream)',
            lineHeight: 1.1,
            maxWidth: '700px',
          }}>
            Our Real Estate{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>Services</em>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding" style={{ background: 'var(--color-cream)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', fontWeight: 300, color: 'var(--color-taupe)', lineHeight: 1.85 }}>
                At Devoir Realty, every service we offer is built around a single principle: our clients deserve the highest standard of professional excellence in real estate. That means expert advisors, not generalist salespeople. It means relationships built on trust and transparency, not just transactions. We are authorized channel partners of leading developers in Lucknow, giving you access to the best properties at the best prices.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'flex-end' }}>
              {[
                { num: '300+', label: 'Transactions' },
                { num: '15+', label: 'Years' },
                { num: '50+', label: 'Agents' },
              ].map(({ num, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: 'var(--color-bronze)', lineHeight: 1, marginBottom: '8px' }}>
                    {num}
                  </div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--color-warm-gray)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding-lg" style={{ background: 'var(--color-black)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="label-text mb-4">Core Services</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: 'var(--color-cream)', lineHeight: 1.1 }}>
              Our Primary Offerings
            </h2>
            <span className="gold-line gold-line-center" style={{ marginTop: '16px' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,169,110,0.1)' }}>
            {mainServices.map((service, i) => (
              <div
                key={service.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  background: i % 2 === 0 ? 'var(--color-charcoal)' : 'var(--color-black)',
                  gap: '0',
                }}
                className="flex-col md:grid"
              >
                <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ marginBottom: '24px' }}>
                    <service.Icon size={40} strokeWidth={1} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: 'var(--color-cream)', marginBottom: '20px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--color-warm-gray)', lineHeight: 1.85, marginBottom: '32px' }}>
                    {service.description}
                  </p>
                  <Link href="/contact" className="text-link" style={{ display: 'inline-flex' }}>
                    Enquire Now →
                  </Link>
                </div>

                <div style={{
                  padding: '60px 56px',
                  borderLeft: '1px solid rgba(201,169,110,0.1)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  order: i % 2 === 0 ? 1 : 0,
                }}>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--color-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '20px' }}>
                    Includes
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300, color: 'var(--color-warm-gray)' }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--color-charcoal)', textAlign: 'center' }}>
        <div className="max-w-[600px] px-8" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p className="label-text mb-6">Get Started</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: 'var(--color-cream)', marginBottom: '20px', lineHeight: 1.2 }}>
            Tell Us What You&apos;re Looking For
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--color-warm-gray)', marginBottom: '40px', lineHeight: 1.8 }}>
            Every engagement begins with a private conversation. We listen carefully before we advise.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '12px' }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
