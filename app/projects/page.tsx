"use client";

import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('flat');

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
          <div className="eyebrow">Discover Excellence</div>
          <h1>Our <span>Projects</span></h1>
          <p className="hero-text" style={{ margin: '0 auto' }}>
            Explore selected residential, commercial and investment opportunities.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="theme-section">
        <div className="theme-container">

          <div className="properties-tabs reveal">
            <button className={`tab-btn ${activeTab === 'flat' ? 'active' : ''}`} onClick={() => setActiveTab('flat')}>
              2 BHK & 3 BHK Premium Flats
            </button>
            <button className={`tab-btn ${activeTab === 'office' ? 'active' : ''}`} onClick={() => setActiveTab('office')}>
              Commercial Office Space
            </button>
            <button className={`tab-btn ${activeTab === 'farm' ? 'active' : ''}`} onClick={() => setActiveTab('farm')}>
              Farm Land Plots
            </button>
          </div>

          {/* FLAT */}
          <div className={`property-panel reveal ${activeTab === 'flat' ? 'active' : ''}`} id="flat">
            <div className="property-image">
              <img src="https://devoirrealty.com/assets/images/tab1.png" alt="Premium Flats" />
            </div>
            <div className="property-content">
              <div className="property-label">Residential Property</div>
              <h3>2 BHK & 3 BHK Premium Flats <span>– Greenview Heights</span></h3>
              <p>Step into a life of ease and elegance with our 2 BHK & 3 BHK flats at Greenview Heights. Nestled in a well-connected neighborhood, these thoughtfully designed homes offer spacious interiors, abundant natural light, and access to modern amenities.</p>
              <div className="property-meta">
                <span className="meta">2 BHK</span>
                <span className="meta">3 BHK</span>
                <span className="meta">Modern Amenities</span>
                <span className="meta">Premium Living</span>
              </div>
              <a href="/contact" className="btn btn-primary">Contact Us →</a>
            </div>
          </div>

          {/* OFFICE */}
          <div className={`property-panel reveal ${activeTab === 'office' ? 'active' : ''}`} id="office">
            <div className="property-image">
              <img src="https://devoirrealty.com/assets/images/tab2.png" alt="Commercial Office Space" />
            </div>
            <div className="property-content">
              <div className="property-label">Commercial Property</div>
              <h3>Commercial Office Space <span>– Central Business District</span></h3>
              <p>Position your brand in the heart of the city’s commercial hub. This ready-to-move office space offers a professional environment with top-notch infrastructure, perfect for businesses seeking visibility and accessibility.</p>
              <div className="property-meta">
                <span className="meta">Ready To Move</span>
                <span className="meta">Office Space</span>
                <span className="meta">Commercial Hub</span>
                <span className="meta">High Visibility</span>
              </div>
              <a href="/contact" className="btn btn-primary">Contact Us →</a>
            </div>
          </div>

          {/* FARM */}
          <div className={`property-panel reveal ${activeTab === 'farm' ? 'active' : ''}`} id="farm">
            <div className="property-image">
              <img src="https://devoirrealty.com/assets/images/tab3.png" alt="Farm Land Plots" />
            </div>
            <div className="property-content">
              <div className="property-label">Investment Opportunity</div>
              <h3>Farm Land Plots <span>– Investment Opportunity</span></h3>
              <p>Unlock long-term value with our curated farm land plots located in peaceful, green surroundings with high appreciation prospects. Whether you're looking to build a farmhouse or diversify your investment portfolio, this is the perfect opportunity.</p>
              <div className="property-meta">
                <span className="meta">Green Surroundings</span>
                <span className="meta">Farm Land</span>
                <span className="meta">Investment</span>
                <span className="meta">Future Potential</span>
              </div>
              <a href="/contact" className="btn btn-primary">Contact Us →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
