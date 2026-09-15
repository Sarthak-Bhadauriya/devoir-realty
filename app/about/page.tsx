import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'About | Devoir Realty',
  description:
    'Learn the story of Devoir Realty — founded in 2010 with a singular commitment to excellence in luxury real estate across India.',
};

const milestones = [
  { year: '2015', title: 'Founded', description: 'Devoir Realty established in Lucknow with a vision to redefine luxury real estate advisory — connecting discerning buyers with the finest properties.' },
  { year: '2016', title: 'First Developer Partnership', description: 'Became authorized channel partners of Excella Infratech — our first major developer relationship, setting the standard for future partnerships.' },
  { year: '2018', title: 'Commercial Desk', description: 'Launched our dedicated commercial real estate practice, offering Grade-A office space and retail advisory across Lucknow\'s prime corridors.' },
  { year: '2020', title: 'OMAXE Partnership', description: 'Became official channel partners of OMAXE, gaining access to one of India\'s most reputed developer portfolios and expanding our residential offerings.' },
  { year: '2022', title: 'Investment Advisory', description: 'Formally launched our Investment Advisory practice, helping clients build high-return real estate portfolios with exclusive pre-launch access.' },
  { year: '2025', title: '300+ Properties & Beyond', description: 'Surpassed 300 property transactions. Our most transformative year, with landmark deals across all major Lucknow corridors.' },
];

const values = [
  {
    Icon: Award,
    title: 'Uncompromising Excellence',
    description:
      'We represent only the properties and clients that meet our exacting standards. We would rather do less, perfectly, than more, adequately.',
  },
  {
    Icon: Users,
    title: 'Absolute Discretion',
    description:
      'Every engagement is conducted with the utmost confidentiality. Our clients trust us with their most significant decisions — we honour that trust completely.',
  },
  {
    Icon: TrendingUp,
    title: 'Deep Market Intelligence',
    description:
      'Our decades of institutional market knowledge, proprietary deal flow, and expert network gives our clients a decisive information advantage.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          position: 'relative', height: '80vh', minHeight: '500px',
          display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1600&q=80"
          alt="Devoir Realty team"
          fill
          style={{ objectFit: 'cover', filter: 'saturate(0.6) brightness(0.5)' }}
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.4) 60%, transparent 100%)' }} />

        <div
          className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 w-full"
          style={{ position: 'relative', zIndex: 2, paddingBottom: '80px' }}
        >
          <p className="label-text mb-4">Our Story</p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, maxWidth: '700px',
            }}
          >
            A Decade of{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Trusted Excellence</em>
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-light)' }}>
        <div className="max-w-[900px] px-8 md:px-16 lg:px-24" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p className="label-text mb-6" style={{ color: 'var(--gold-hover)' }}>Our Philosophy</p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400, color: '#1A1A1F', lineHeight: 1.2, marginBottom: '32px',
          }}>
            About Our Company
          </h2>
          <span className="gold-rule" style={{ marginBottom: '32px' }} />

          <div style={{ columns: '1', gap: '40px' }}>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300, color: '#5A5650', lineHeight: 1.85, marginBottom: '24px' }}>
              Devoir Realty is a premier real estate consulting firm based in Lucknow, dedicated to providing top-tier advisory services for residential and commercial property investments. With a commitment to excellence, we help clients find the perfect property, whether it&apos;s a luxurious flat, duplex, independent house, or a prime commercial space.
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300, color: '#5A5650', lineHeight: 1.85, marginBottom: '24px' }}>
              As authorized channel partners of leading developers across Lucknow, we offer an extensive portfolio of properties tailored to our clients&apos; preferences. Our expertise and deep market knowledge enable us to provide strategic guidance, ensuring that every investment aligns with our clients&apos; financial goals and lifestyle aspirations.
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300, color: '#5A5650', lineHeight: 1.85, marginBottom: '24px' }}>
              At Devoir Realty, we prioritize customer satisfaction, offering seamless, transparent, and personalized real estate solutions. Our partnerships with renowned developers provide exclusive opportunities, diverse property options, and the best deals in the market.
            </p>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1A1A1F', marginBottom: '16px' }}>Vision</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: '#5A5650', lineHeight: 1.8 }}>
                At Devoir Realty, our vision is to be the leading real estate consulting firm in Lucknow, setting new benchmarks in customer service, trust, and innovation. We strive to create a seamless property-buying experience, helping individuals and businesses find their ideal spaces while fostering long-term relationships built on integrity and excellence.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', color: '#1A1A1F', marginBottom: '16px' }}>Mission</h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: '#5A5650', lineHeight: 1.8 }}>
                Our mission is to simplify real estate transactions by providing expert guidance, market insights, and personalized solutions. We are committed to delivering value-driven services, ensuring our clients make informed property decisions that align with their goals. Through strong developer partnerships, transparent dealings, and a client-first approach, we aim to redefine the real estate experience in Lucknow and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <p className="label-text mb-4">What Guides Us</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map(({ Icon, title, description }) => (
              <div key={title} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                  <Icon size={40} strokeWidth={1} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Team */}
      <section id="team" className="section-pad-lg" style={{ background: 'var(--bg-light)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-16">
            <p className="label-text mb-4" style={{ color: 'var(--gold-hover)' }}>The People</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#1A1A1F', lineHeight: 1.1, maxWidth: '600px' }}>
              Our Team of Advisors
            </h2>
            <span className="gold-rule" style={{ marginTop: '16px' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.id} className="group" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: '#1A1A1F', marginBottom: '20px' }}>
                  <Image
                    src={member.image} alt={member.name} fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', filter: 'saturate(0.7)', transition: 'transform 0.6s ease' }}
                    className="group-hover:scale-105"
                  />
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(9,9,11,0.85) 0%, transparent 60%)',
                      opacity: 0, transition: 'opacity 0.4s ease',
                    }}
                    className="group-hover:opacity-100"
                  />
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px',
                      opacity: 0, transform: 'translateY(10px)', transition: 'all 0.4s ease',
                    }}
                    className="group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    <a href={`tel:${member.phone}`} style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', marginBottom: '4px' }}>
                      {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} style={{ display: 'block', fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      {member.email}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 400, color: '#1A1A1F', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', fontWeight: 500, color: 'var(--gold-hover)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {member.designation}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: '#5A5650', lineHeight: 1.7 }}>
                    {member.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="max-w-[600px] px-8" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p className="label-text mb-6">Work With Us</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '20px', lineHeight: 1.2 }}>
            Ready to Begin Your Property Journey?
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.8 }}>
            Our advisors are available for private consultations at any of our offices, or at a location of your choosing.
          </p>
          <Link href="/contact" className="btn-gold" style={{ fontSize: '12px', display: 'inline-flex' }}>
            Schedule a Consultation <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
