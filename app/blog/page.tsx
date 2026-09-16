"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
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
          <div className="eyebrow">Latest Insights</div>
          <h1>Our <span>Blog</span></h1>
          <p className="hero-text" style={{ margin: '0 auto' }}>
            Property insights, market trends and useful buying guidance.
          </p>
        </div>
      </section>

      {/* BLOG */}
      <section className="theme-section" id="blog">
        <div className="theme-container">
          <div className="blog-grid">
            <article className="blog-card reveal">
              <div className="blog-img">
                <img src="https://devoirrealty.com/assets/images/tab3.png" alt="Current Real Estate Market" />
                <span className="blog-category">MARKET TRENDS</span>
              </div>
              <div className="blog-content">
                <h3>Understanding the Current Real Estate Market</h3>
                <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>The real estate market is constantly evolving. Discover the latest trends shaping the property landscape this year.</p>
              </div>
            </article>
            <article className="blog-card reveal">
              <div className="blog-img">
                <img src="https://devoirrealty.com/assets/images/tab1.png" alt="First Time Property Buyers" />
                <span className="blog-category">PROPERTY BUYING</span>
              </div>
              <div className="blog-content">
                <h3>Top Tips for First-Time Property Buyers</h3>
                <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>Buying your first home can be daunting. We break down the essential steps to make your journey smooth and successful.</p>
              </div>
            </article>
            <article className="blog-card reveal">
              <div className="blog-img">
                <img src="https://devoirrealty.com/assets/images/tab2.png" alt="Real Estate Investment Strategies" />
                <span className="blog-category">INVESTMENT</span>
              </div>
              <div className="blog-content">
                <h3>Real Estate Investment Strategies for 2024</h3>
                <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>Maximize your returns with data-driven property investment strategies tailored for the current market conditions.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
