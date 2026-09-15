import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Developers',
  description:
    'Devoir Realty is the authorized channel partner for top real estate developers in Lucknow and across India.',
};

const partners = [
  { 
    id: 'omaxe', 
    name: 'OMAXE', 
    tagline: 'Turning Dreams Into Reality',
    description: 'One of India\'s leading real estate development companies, delivering landmark projects across residential, commercial, and retail segments.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  },
  { 
    id: 'excella', 
    name: 'excella®', 
    tagline: 'Experience The Excellence',
    description: 'Renowned for crafting ultra-luxury residential spaces that redefine modern living with world-class amenities and architectural brilliance.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  { 
    id: 'pintail', 
    name: 'PINTAIL PARK CITY', 
    tagline: 'Integrated Township Living',
    description: 'A meticulously planned township offering a perfect blend of natural surroundings, smart infrastructure, and comprehensive lifestyle facilities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
  },
  { 
    id: 'shalimar', 
    name: 'SHALIMAR', 
    tagline: 'Building Better Lifestyles',
    description: 'A trusted name in real estate, known for timely delivery, transparent dealings, and creating vibrant communities that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
  },
];

export default function DevelopersPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <div style={{ padding: '80px 0 60px', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="max-w-[1600px] px-8 md:px-16 lg:px-24" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p className="label-text mb-4">Our Network</p>
          <h1 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, maxWidth: '800px'
          }}>
            Authorized Developer Partners
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '18px', fontWeight: 300,
            color: 'var(--text-secondary)', marginTop: '24px', maxWidth: '600px', lineHeight: 1.8
          }}>
            We collaborate with the most prestigious real estate developers to bring you exclusive pre-launch opportunities and verified premium properties.
          </p>
        </div>
      </div>

      {/* Partners List */}
      <section className="section-padding-lg">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {partners.map((partner) => (
              <div key={partner.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', marginBottom: '32px' }}>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', filter: 'saturate(0.8)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,9,11,0.9) 0%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '32px' }}>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {partner.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      {partner.tagline}
                    </p>
                  </div>
                </div>
                
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                  {partner.description}
                </p>
                
                <div style={{ marginTop: 'auto' }}>
                  <Link href="/properties" className="text-link" style={{ display: 'inline-flex' }}>
                    View Associated Projects <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--color-charcoal)' }}>
        <div className="max-w-[600px] px-8" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p className="label-text mb-6">Partner With Us</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: 'var(--color-cream)', marginBottom: '20px', lineHeight: 1.2 }}>
            Are You A Developer?
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--color-warm-gray)', marginBottom: '40px', lineHeight: 1.8 }}>
            Join our exclusive network of premium real estate partners. Let us help you connect your extraordinary projects with the right buyers.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '12px' }}>
            Schedule a Meeting
          </Link>
        </div>
      </section>
    </div>
  );
}
