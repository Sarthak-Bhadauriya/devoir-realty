"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Lenis from 'lenis';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Trigger Popup on Load (3 seconds delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Theme Toggle Logic
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message") || "No message";

    const whatsappMessage = `Hello Devoir Realty,\n\nI am interested in a property.\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const whatsappURL = "https://wa.me/916283242916?text=" + encodeURIComponent(whatsappMessage);
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* ENTRY POPUP */}
      <div className={`popup-overlay ${showPopup ? 'active' : ''}`}>
        <div className="popup-content">
          <div className="popup-header">
            <h3>DEVOIR REALTY</h3>
            <button className="popup-close" onClick={() => setShowPopup(false)}>✕</button>
          </div>
          
          <div className="popup-quick-links">
            <a href="tel:+916283242916">☎ Call Us</a>
            <a href="https://wa.me/916283242916" target="_blank">💬 Message Us</a>
          </div>

          <div className="popup-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-grid popup-form">
                <div className="field full">
                  <input type="text" name="name" placeholder="Name *" required />
                </div>
                <div className="field full">
                  <input type="email" name="email" placeholder="Email *" required />
                </div>
                <div className="field full">
                  <input type="tel" name="phone" placeholder="Mobile No *" required />
                </div>
                <div className="field full">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div className="field full">
                  <button type="submit" className="btn btn-primary popup-submit">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="theme-container topbar-inner">
          <div className="top-left">
            <span>📍 803, Eight Floor, Skyline Royal Plaza, Sushant Golf City, Lucknow</span>
          </div>
          <div className="top-right">
            <a href="tel:+916283242916">☎ +91 6283242916</a>
            <a href="mailto:info@devoirrealty.com">✉ info@devoirrealty.com</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="theme-container nav">
          <Link href="/" className="logo">
            <img src="https://devoirrealty.com/assets/images/logo/Devior%20(Oreeznal).png" alt="Devoir Realty" />
          </Link>
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            <a className="nav-call" href="tel:+916283242916">☎</a>
            <Link className="nav-btn" href="/contact">Enquire Now</Link>
            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main>
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="theme-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="https://devoirrealty.com/assets/images/logo/Devior%20(Oreeznal).png" alt="Devoir Realty" />
              </div>
              <p>At Devoir Realty, we make your property dreams a reality. Whether you're searching for a luxurious home, a smart investment, or a commercial space, we offer a diverse portfolio tailored to your needs.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <div className="footer-links">
                <Link href="/services">Residential Advisory</Link>
                <Link href="/services">Commercial Leasing</Link>
                <Link href="/services">Investment Consulting</Link>
                <Link href="/services">Project Marketing</Link>
                <Link href="/services">Legal & Compliance</Link>
                <Link href="/services">Property Management</Link>
              </div>
            </div>
            <div>
              <h4>Contact Info</h4>
              <div className="footer-links">
                <a href="tel:+916283242916">+91 6283242916</a>
                <a href="mailto:info@devoirrealty.com">info@devoirrealty.com</a>
                <a href="#">803, Eight Floor, Skyline Royal Plaza, Sushant Golf City, Lucknow</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Devoir Realty. All Rights Reserved.</span>
            <span>Premium Real Estate Solutions</span>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="float-actions">
        <a className="float-btn whatsapp" href="https://wa.me/916283242916?text=Hello%20Devoir%20Realty,%20I%20am%20interested%20in%20a%20property." target="_blank" aria-label="WhatsApp">☘</a>
        <a className="float-btn phone" href="tel:+916283242916" aria-label="Call">☎</a>
      </div>
    </>
  );
}
