"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  // GSAP Scroll Animations
  useGSAP(() => {
    const reveals = gsap.utils.toArray('.reveal');
    reveals.forEach((el: any) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="hero" style={{ padding: '120px 0 60px', minHeight: 'auto', textAlign: 'center' }}>
        <div className="theme-container reveal">
          <div className="eyebrow">Professional Real Estate Solutions</div>
          <h1>Our <span>Services</span></h1>
          <p className="hero-text" style={{ margin: '0 auto' }}>
            Designed around your property goals.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="theme-section services">
        <div className="theme-container">
          <div className="services-grid">
            <div className="service-card reveal">
              <span className="service-number">01</span>
              <div className="service-icon">⌂</div>
              <h3>Residential Advisory</h3>
              <p>Expert guidance in finding your perfect home—aligned with your lifestyle, preferences, and future goals.</p>
            </div>
            <div className="service-card reveal">
              <span className="service-number">02</span>
              <div className="service-icon">▦</div>
              <h3>Commercial Leasing</h3>
              <p>Strategic leasing solutions for retail, office, and warehouse spaces to drive business success.</p>
            </div>
            <div className="service-card reveal">
              <span className="service-number">03</span>
              <div className="service-icon">↗</div>
              <h3>Investment Consulting</h3>
              <p>Data-driven property investment strategies designed to maximize returns and minimize risks.</p>
            </div>
            <div className="service-card reveal">
              <span className="service-number">04</span>
              <div className="service-icon">◆</div>
              <h3>Project Marketing</h3>
              <p>End-to-end marketing and branding solutions that accelerate project visibility and sales velocity.</p>
            </div>
            <div className="service-card reveal">
              <span className="service-number">05</span>
              <div className="service-icon">✓</div>
              <h3>Legal & Compliance</h3>
              <p>Robust legal due diligence and compliance checks for transparent, dispute-free dealings.</p>
            </div>
            <div className="service-card reveal">
              <span className="service-number">06</span>
              <div className="service-icon">⚙</div>
              <h3>Property Management</h3>
              <p>Comprehensive property care—from tenant coordination to maintenance and rent collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="theme-section amenities">
        <div className="theme-container">
          <div className="section-heading center reveal">
            <div className="kicker">Amenities</div>
            <h2>Comfort, <span>Security & Convenience</span></h2>
            <p>Features designed to make modern property living easier and more comfortable.</p>
          </div>
          <div className="amenities-grid">
            <div className="amenity reveal"><div className="amenity-icon">⚡</div><strong>24 Hour Power Backup</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">⌂</div><strong>Secure Entrance Gate</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">♟</div><strong>Guard Security</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">◉</div><strong>CCTV Surveillance</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">▣</div><strong>Ample Parking Space</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">✦</div><strong>Gym & Fitness Center</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">♧</div><strong>Children’s Play Area</strong></div>
            <div className="amenity reveal"><div className="amenity-icon">🌿</div><strong>Landscaped Gardens</strong></div>
          </div>
        </div>
      </section>
    </>
  );
}
