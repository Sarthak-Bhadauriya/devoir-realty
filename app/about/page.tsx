"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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
          <div className="eyebrow">Discover Our Story</div>
          <h1>About <span>Devoir Realty</span></h1>
          <p className="hero-text" style={{ margin: '0 auto' }}>
            A premier real estate consulting firm based in Lucknow.
          </p>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="theme-section">
        <div className="theme-container">
          <div className="welcome-grid">
            <div className="visual-box reveal">
              <div className="visual-main">
                <img src="https://devoirrealty.com/assets/images/team/team5.jpg" alt="Devoir Realty" />
              </div>
            </div>
            <div className="welcome-copy reveal">
              <div className="section-heading">
                <div className="kicker">Who We Are</div>
                <h2>About <span>Our Company</span></h2>
              </div>
              <p>Devoir Realty is a premier real estate consulting firm based in Lucknow, dedicated to providing top-tier advisory services for residential and commercial property investments. With a commitment to excellence, we help clients find the perfect property, whether it's a luxurious flat, duplex, independent house, or a prime commercial space.</p>
              <p>As authorized channel partners of leading developers across Lucknow, we offer an extensive portfolio of properties tailored to our clients' preferences. Our expertise and deep market knowledge enable us to provide strategic guidance, ensuring that every investment aligns with our clients' financial goals and lifestyle aspirations.</p>
              <p>At Devoir Realty, we prioritize customer satisfaction, offering seamless, transparent, and personalized real estate solutions. Our partnerships with renowned developers provide exclusive opportunities, diverse property options, and the best deals in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="theme-section mission" style={{ background: 'var(--bg-alt)' }}>
        <div className="theme-container">
          <div className="mission-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            
            {/* VISION */}
            <div className="mission-copy reveal" style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div className="section-heading">
                <h2>Our <span>Vision</span></h2>
              </div>
              <p>At Devoir Realty, our vision is to be the leading real estate consulting firm, setting new benchmarks in customer service, trust, and innovation. We strive to create a seamless property-buying experience, helping individuals and businesses find their ideal spaces while fostering long-term relationships built on integrity and excellence.</p>
            </div>

            {/* MISSION */}
            <div className="mission-copy reveal" style={{ padding: '40px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div className="section-heading">
                <h2>Our <span>Mission</span></h2>
              </div>
              <p>Our mission is to simplify real estate transactions by providing expert guidance, market insights, and personalized solutions. We are committed to delivering value-driven services, ensuring our clients make informed property decisions that align with their goals. Through strong developer partnerships, transparent dealings, and a client-first approach, we aim to redefine the real estate experience in Lucknow and beyond.</p>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <div className="theme-container">
          <div className="partners-title">Our Channel Partners</div>
          <div className="partner-row">
            <div className="partner">TRUSTED DEVELOPER</div>
            <div className="partner">REAL ESTATE PARTNER</div>
            <div className="partner">PROPERTY NETWORK</div>
            <div className="partner">INDUSTRY LEADER</div>
          </div>
        </div>
      </section>
    </>
  );
}
