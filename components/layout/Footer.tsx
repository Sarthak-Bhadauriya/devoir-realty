'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/916283242916?text=Hello%20Devoir%20Realty,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20properties.';

const projects = [
  { title: 'The Oasis', href: '/properties/the-oasis' },
  { title: 'Vidhi Estate', href: '/properties/vidhi-estate' },
  { title: 'Amrawati IT City', href: '/properties/amrawati-it-city' },
  { title: 'Sahu City Pearl', href: '/properties/sahu-city-pearl' },
  { title: 'Eldeco Trinity', href: '/properties/eldeco-trinity' },
];

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/DevoirRealty/' },
  { label: 'Instagram', href: 'https://www.instagram.com/devoir_realty/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devoir-reality/' },
  { label: 'YouTube', href: '#' },
];

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} strokeWidth={1.5} color="#fff" />
      </a>

      <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-gold)' }}>
        {/* Watermark */}
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderBottom: '1px solid var(--border-gold)',
        }}>
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(60px, 12vw, 130px)',
            fontWeight: 700, color: 'rgba(201,169,110,0.04)',
            letterSpacing: '0.5em', userSelect: 'none', pointerEvents: 'none',
            whiteSpace: 'nowrap', overflow: 'hidden',
          }}>
            D E V O I R
          </div>

          <div className="max-w-[1680px] mx-auto px-6 md:px-10 py-20 md:py-24 relative" style={{ zIndex: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16">
              {/* Col 1: About */}
              <div>
                <Link href="/" className="flex flex-col leading-none mb-6" aria-label="Devoir Realty">
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.18em' }}>
                    DEVOIR
                  </span>
                  <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '8px', fontWeight: 500, color: 'rgba(201,169,110,0.5)', letterSpacing: '0.55em', textTransform: 'uppercase', marginTop: '3px' }}>
                    REALTY
                  </span>
                </Link>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', maxWidth: '260px' }}>
                  At Devoir Realty, we make your property dreams a reality. Whether you're searching for a luxurious home, a smart investment, or a commercial space, we offer a diverse portfolio tailored to your needs.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  <a href="tel:+916283242916" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'var(--font-inter)', fontWeight: 300, transition: 'color 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}>
                    <Phone size={13} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    +91 62832 42916
                  </a>
                  <a href="mailto:info@devoirrealty.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'var(--font-inter)', fontWeight: 300, transition: 'color 0.3s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}>
                    <Mail size={13} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    info@devoirrealty.com
                  </a>
                </div>

                <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', color: 'var(--text-secondary)', lineHeight: 1.6, opacity: 0.6, maxWidth: '240px' }}>
                  RERA Registered. All properties marketed comply with applicable UPRERA / RERA regulations.
                </p>
              </div>

              {/* Col 2: Quick Links */}
              <div>
                <p className="label-text" style={{ marginBottom: '20px', color: 'rgba(201,169,110,0.6)' }}>Quick Links</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'About Us', href: '/about' },
                    { label: 'Projects', href: '/properties' },
                    { label: 'Services', href: '/services' },
                    { label: 'Blogs & News', href: '/blogs' },
                    { label: 'Contact', href: '/contact' },
                  ].map(link => (
                    <li key={link.label}>
                      <Link href={link.href} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        textDecoration: 'none', color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300,
                        transition: 'color 0.3s ease',
                      }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
                      >
                        <span style={{ width: '4px', height: '1px', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Signature Projects */}
              <div>
                <p className="label-text" style={{ marginBottom: '20px', color: 'rgba(201,169,110,0.6)' }}>Signature Projects</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {projects.map(p => (
                    <li key={p.href}>
                      <Link href={p.href} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        textDecoration: 'none', color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300,
                        transition: 'color 0.3s ease',
                      }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
                      >
                        <span style={{ width: '4px', height: '1px', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4: VIP Advisory Desk */}
              <div>
                <p className="label-text" style={{ marginBottom: '20px', color: 'rgba(201,169,110,0.6)' }}>Contact Info</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '20px' }}>
                  <MapPin size={14} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                  <address style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'normal' }}>
                    803, Eighth Floor, Skyline Royal Plaza,<br />
                    Sushant Golf City,<br />
                    Lucknow, Uttar Pradesh
                  </address>
                </div>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', textDecoration: 'none', color: '#25D366', fontFamily: 'var(--font-jakarta)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em' }}>
                  <MessageCircle size={14} strokeWidth={1.5} />
                  Message on WhatsApp
                </a>

                {/* Newsletter */}
                <p className="label-text" style={{ marginBottom: '12px', color: 'rgba(201,169,110,0.6)' }}>Market Intelligence</p>
                {subscribed ? (
                  <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.05em' }}>
                    You&apos;re on the list. We&apos;ll be in touch.
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      aria-label="Newsletter email"
                      style={{
                        flex: 1, background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-gold)', borderRight: 'none',
                        color: 'var(--text-primary)', padding: '10px 14px',
                        fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300,
                        outline: 'none',
                      }}
                    />
                    <button type="submit" aria-label="Subscribe"
                      style={{
                        background: 'var(--gold)', border: '1px solid var(--gold)',
                        color: 'var(--bg-primary)', padding: '10px 14px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = 'var(--gold-hover)';
                        el.style.borderColor = 'var(--gold-hover)';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = 'var(--gold)';
                        el.style.borderColor = 'var(--gold)';
                      }}
                    >
                      <ArrowRight size={15} strokeWidth={1.5} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1680px] mx-auto px-6 md:px-10" style={{ padding: '20px 0' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: 'rgba(154,149,138,0.5)', letterSpacing: '0.05em', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span>© 2025 Designed by ORANGE IT SOLUTIONS. Crafted for Ultra-Luxury Real Estate.</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <Link href="/admin" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'inherit'}>Admin Portal</Link>
            </p>
            <div className="flex items-center gap-6">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', fontWeight: 500, color: 'rgba(154,149,138,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(154,149,138,0.5)'}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
