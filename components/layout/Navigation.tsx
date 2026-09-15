'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { X, MessageCircle } from 'lucide-react';
import LeadModal from '@/components/ui/LeadModal';

const navLinks = [
  { href: '/properties', label: 'Collection' },
  { href: '/about', label: 'Legacy' },
  { href: '/developers', label: 'Developers' },
  { href: '/services', label: 'Services' },
  { href: '/blogs', label: 'Insights' },
  { href: '/contact', label: 'Advisory' },
];

const WA_LINK = 'https://wa.me/916283242916?text=Hello%20Devoir%20Realty,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20properties.';

export default function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const menu = menuRef.current;
    const items = menuItemsRef.current;
    if (!menu) return;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.set(menu, { display: 'flex', opacity: 0 });
      gsap.set(items, { opacity: 0, y: 50 });
      gsap.to(menu, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.to(items, { opacity: 1, y: 0, stagger: 0.07, delay: 0.15, duration: 0.7, ease: 'power3.out' });
    } else {
      document.body.style.overflow = '';
      gsap.to(menu, { opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: () => { if (menu) menu.style.display = 'none'; } });
    }
  }, [menuOpen]);

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b'
            : ''
        }`}
        style={{
          background: scrolled ? 'var(--nav-background)' : 'transparent',
          borderBottomColor: scrolled ? 'var(--nav-border)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div
          className="max-w-[1680px] mx-auto px-6 md:px-10"
          style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '78px' }}
        >
          {/* Left: Logo */}
          <Link href="/" className="flex flex-col leading-none" aria-label="Devoir Realty Home">
            <span
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--gold)',
                letterSpacing: '0.18em',
                lineHeight: 1,
              }}
            >
              DEVOIR
            </span>
            <span
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: '8px',
                fontWeight: 500,
                color: 'rgba(201,169,110,0.55)',
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                marginTop: '3px',
              }}
            >
              REALTY
            </span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <ul className="hidden xl:flex items-center gap-9" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname.startsWith(link.href.split('#')[0]) && link.href !== '/' ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTAs */}
          <div className="flex items-center justify-end gap-4">
            {/* WhatsApp icon */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden xl:flex items-center justify-center"
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid rgba(201,169,110,0.3)',
                color: 'var(--gold)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#25D366';
                (e.currentTarget as HTMLElement).style.borderColor = '#25D366';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.3)';
                (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
              }}
            >
              <MessageCircle size={15} strokeWidth={1.5} />
            </a>

            <button
              className="btn-gold-outline hidden xl:inline-flex"
              style={{ fontSize: '10px', padding: '11px 20px' }}
              onClick={() => setModalOpen(true)}
            >
              Schedule VIP Viewing
            </button>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <X size={22} color="var(--gold)" strokeWidth={1.5} />
                : <>
                    <span className="block w-6 h-px bg-current" style={{ color: 'var(--text-primary)' }} />
                    <span className="block w-4 h-px bg-current ml-auto" style={{ color: 'var(--text-primary)' }} />
                    <span className="block w-6 h-px bg-current" style={{ color: 'var(--text-primary)' }} />
                  </>
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        ref={menuRef}
        className="mobile-menu-overlay"
        aria-hidden={!menuOpen}
        style={{ display: 'none' }}
      >
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '256px 256px', pointerEvents: 'none' }} />

        <ul className="flex flex-col items-center gap-6 text-center" role="list" style={{ listStyle: 'none' }}>
          {navLinks.map((link, i) => (
            <li key={link.href} ref={el => { if (el) menuItemsRef.current[i] = el; }}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(30px, 5.5vw, 44px)',
                  fontWeight: 400,
                  color: pathname.startsWith(link.href.split('#')[0]) ? 'var(--gold)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  display: 'block',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p className="label-text" style={{ marginBottom: '12px' }}>Talk to an Advisor</p>
          <a href="tel:+916283242916" style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', color: 'var(--gold)', textDecoration: 'none' }}>
            +91 62832 42916
          </a>
        </div>
      </div>

      {/* Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trigger="viewing"
      />
    </>
  );
}
