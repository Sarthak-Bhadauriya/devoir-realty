"use client";

import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const property = formData.get("property") || "General";
    const budget = formData.get("budget") || "Not Specified";
    const message = formData.get("message") || "No message";

    const whatsappMessage = `Hello Devoir Realty,\n\nI am interested in a property.\n\nName: ${name}\nPhone: ${phone}\nProperty Type: ${property}\nBudget: ${budget}\n\nRequirement:\n${message}`;
    const whatsappURL = "https://wa.me/916283242916?text=" + encodeURIComponent(whatsappMessage);
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="theme-container">
          <div className="hero-content reveal">
            <div className="eyebrow">Premium Real Estate Advisory</div>
            <h1>Your Dream <span>Property</span> Awaits</h1>
            <p className="hero-text">
              At Devoir Realty, we make your property dreams a reality. Whether you're searching for a luxurious home, a smart investment, or a commercial space, we offer a diverse portfolio tailored to your needs.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">Explore Properties →</a>
              <a href="#contact" className="btn btn-outline">Book A Consultation</a>
            </div>
          </div>
        </div>
        <div className="hero-card reveal">
          <small>Trusted Real Estate Partner</small>
          <strong>15+ Years</strong>
          <p>Expertise, market knowledge and client-first approach.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="theme-container">
          <div className="stats-box reveal">
            <div className="stat">
              <strong>300+</strong>
              <span>Properties Sold</span>
            </div>
            <div className="stat">
              <strong>15+</strong>
              <span>Years Of Experience</span>
            </div>
            <div className="stat">
              <strong>50+</strong>
              <span>Expert Agents</span>
            </div>
            <div className="stat">
              <strong>10+</strong>
              <span>Awards Won</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="theme-section" id="about">
        <div className="theme-container">
          <div className="welcome-grid">
            <div className="visual-box reveal">
              <div className="visual-main">
                <img src="https://devoirrealty.com/assets/images/team/team5.jpg" alt="Devoir Realty Family Property" />
              </div>
              <div className="visual-floating">
                <strong>100%</strong>
                <span>Client-focused real estate assistance</span>
              </div>
            </div>
            <div className="welcome-copy reveal">
              <div className="section-heading">
                <div className="kicker">Welcome</div>
                <h2>Your Property Journey, <span>Handled With Confidence</span></h2>
              </div>
              <p>At Devoir Realty, we make your property dreams a reality. Whether you're searching for a luxurious home, a smart investment, or a commercial space, we offer a diverse portfolio tailored to your needs.</p>
              <p>Our expertise, market knowledge, and client-first approach ensure a seamless and rewarding real estate experience.</p>
              <div className="highlight">
                <div className="highlight-icon">✓</div>
                <div>
                  <strong>Let us guide you to your ideal property</strong>
                  <span>With confidence and ease.</span>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="theme-section mission">
        <div className="theme-container">
          <div className="mission-grid">
            <div className="mission-image reveal">
              <img src="https://devoirrealty.com/assets/images/about/about-five-image2a.jpg" alt="Modern Real Estate Building" />
            </div>
            <div className="mission-copy reveal">
              <div className="section-heading">
                <div className="kicker">Our Mission</div>
                <h2>Empowering Real Estate <span>With Trust & Transparency</span></h2>
              </div>
              <p>At Devoir Realty Services, our mission is to redefine the real estate experience by offering personalized, honest, and expert-driven solutions. We are committed to guiding clients through every step of their property journey with clarity, integrity, and professionalism.</p>
              <div className="mission-points">
                <div className="mission-point"><span>01</span> Transparent Transactions</div>
                <div className="mission-point"><span>02</span> Expert Guidance</div>
                <div className="mission-point"><span>03</span> Personalized Solutions</div>
                <div className="mission-point"><span>04</span> Professional Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="theme-section">
        <div className="theme-container">
          <div className="why-grid">
            <div className="why-visual reveal">
              <img src="https://devoirrealty.com/assets/images/why.jpg" alt="Why Choose Devoir Realty" />
            </div>
            <div className="reveal">
              <div className="section-heading">
                <div className="kicker">Why Choose Devoir Realty?</div>
                <h2>Built On <span>Trust & Excellence</span></h2>
                <p>At Devoir Realty, we are committed to transforming dreams into reality. Our dedication to excellence, trust, and client satisfaction sets us apart in the real estate industry.</p>
              </div>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-icon">★</div>
                  <div><strong>Decades of industry expertise</strong><span>Experienced guidance for better property decisions.</span></div>
                </div>
                <div className="why-item">
                  <div className="why-icon">✓</div>
                  <div><strong>100% legal & verified properties</strong><span>Greater confidence throughout your property journey.</span></div>
                </div>
                <div className="why-item">
                  <div className="why-icon">₹</div>
                  <div><strong>Transparent pricing with no hidden costs</strong><span>Clear and straightforward property dealings.</span></div>
                </div>
                <div className="why-item">
                  <div className="why-icon">♥</div>
                  <div><strong>Customer-first approach & timely project delivery</strong><span>Your requirements remain at the centre.</span></div>
                </div>
                <div className="why-item">
                  <div className="why-icon">⌂</div>
                  <div><strong>Comprehensive services, from site selection to final possession</strong><span>Complete support under one roof.</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="theme-section services" id="services">
        <div className="theme-container">
          <div className="section-heading center reveal">
            <div className="kicker">Our Services</div>
            <h2>Our Real Estate <span>Services</span></h2>
            <p>Professional real estate solutions designed around your property goals.</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <span className="service-number">01</span>
              <div className="service-icon">⌂</div>
              <h3>Residential Advisory</h3>
              <p>Expert guidance in finding your perfect home—aligned with your lifestyle, preferences, and future goals.</p>
              <a href="#contact" className="learn">Learn More →</a>
            </div>
            <div className="service-card reveal">
              <span className="service-number">02</span>
              <div className="service-icon">▦</div>
              <h3>Commercial Leasing</h3>
              <p>Strategic leasing solutions for retail, office, and warehouse spaces to drive business success.</p>
              <a href="#contact" className="learn">Learn More →</a>
            </div>
            <div className="service-card reveal">
              <span className="service-number">03</span>
              <div className="service-icon">↗</div>
              <h3>Investment Consulting</h3>
              <p>Data-driven property investment strategies designed to maximize returns and minimize risks.</p>
              <a href="#contact" className="learn">Learn More →</a>
            </div>
            <div className="service-card reveal">
              <span className="service-number">04</span>
              <div className="service-icon">◆</div>
              <h3>Project Marketing</h3>
              <p>End-to-end marketing and branding solutions that accelerate project visibility and sales velocity.</p>
              <a href="#contact" className="learn">Learn More →</a>
            </div>
            <div className="service-card reveal">
              <span className="service-number">05</span>
              <div className="service-icon">✓</div>
              <h3>Legal & Compliance</h3>
              <p>Robust legal due diligence and compliance checks for transparent, dispute-free dealings.</p>
              <a href="#contact" className="learn">Learn More →</a>
            </div>
            <div className="service-card reveal">
              <span className="service-number">06</span>
              <div className="service-icon">⚙</div>
              <h3>Property Management</h3>
              <p>Comprehensive property care—from tenant coordination to maintenance and rent collection.</p>
              <a href="#contact" className="learn">Learn More →</a>
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

      {/* FEATURED PROJECTS */}
      <section className="theme-section" id="projects">
        <div className="theme-container">
          <div className="section-heading center reveal">
            <div className="kicker">Featured Listings</div>
            <h2>Built On Trust, <span>Driven By Excellence</span></h2>
            <p>Explore selected residential, commercial and investment opportunities.</p>
          </div>

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
          <div className={`property-panel ${activeTab === 'flat' ? 'active' : ''}`} id="flat">
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
              <a href="#contact" className="btn btn-primary">Contact Us →</a>
            </div>
          </div>

          {/* OFFICE */}
          <div className={`property-panel ${activeTab === 'office' ? 'active' : ''}`} id="office">
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
              <a href="#contact" className="btn btn-primary">Contact Us →</a>
            </div>
          </div>

          {/* FARM */}
          <div className={`property-panel ${activeTab === 'farm' ? 'active' : ''}`} id="farm">
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
              <a href="#contact" className="btn btn-primary">Contact Us →</a>
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

      {/* TESTIMONIALS */}
      <section className="theme-section testimonials">
        <div className="theme-container">
          <div className="section-heading center reveal">
            <div className="kicker">Testimonials</div>
            <h2>What Our <span>Clients Say</span></h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial reveal">
              <div className="quote">“</div>
              <p>Buying our first home felt overwhelming until we found Devoir Realty. Their team patiently guided us through every step and found us the perfect house in the perfect neighborhood. Truly grateful!</p>
              <div className="client">
                <div className="avatar">S</div>
                <div><strong>Sneha</strong><span>Home Buyer</span></div>
              </div>
            </div>
            <div className="testimonial reveal">
              <div className="quote">“</div>
              <p>Devoir Realty made my relocation seamless. They listened to my needs and matched me with a property that checked all the boxes. Their professionalism and warmth made all the difference.</p>
              <div className="client">
                <div className="avatar">R</div>
                <div><strong>Rahul Mehta</strong><span>Property Client</span></div>
              </div>
            </div>
            <div className="testimonial reveal">
              <div className="quote">“</div>
              <p>I was impressed by Devoir Realty’s market knowledge and transparency. They negotiated a great deal on my new apartment and made sure everything moved quickly and smoothly.</p>
              <div className="client">
                <div className="avatar">P</div>
                <div><strong>Priya Sharma</strong><span>Apartment Buyer</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="theme-section" id="blog">
        <div className="theme-container">
          <div className="section-heading center reveal">
            <div className="kicker">Latest Insights</div>
            <h2>Check Latest <span>Blog Posts</span></h2>
            <p>Property insights, market trends and useful buying guidance.</p>
          </div>
          <div className="blog-grid">
            <article className="blog-card reveal">
              <div className="blog-img">
                <img src="https://devoirrealty.com/assets/images/tab3.png" alt="Current Real Estate Market" />
                <span className="blog-category">MARKET TRENDS</span>
              </div>
              <div className="blog-content">
                <h3>Understanding the Current Real Estate Market</h3>
              </div>
            </article>
            <article className="blog-card reveal">
              <div className="blog-img">
                <img src="https://devoirrealty.com/assets/images/tab1.png" alt="First Time Property Buyers" />
                <span className="blog-category">PROPERTY BUYING</span>
              </div>
              <div className="blog-content">
                <h3>Top Tips for First-Time Property Buyers</h3>
              </div>
            </article>
            <article className="blog-card reveal">
              <div className="blog-img">
                <img src="https://devoirrealty.com/assets/images/tab2.png" alt="Real Estate Investment Strategies" />
                <span className="blog-category">INVESTMENT</span>
              </div>
              <div className="blog-content">
                <h3>Real Estate Investment Strategies for 2024</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="theme-container">
          <div className="cta-box reveal">
            <div className="cta-content">
              <div className="kicker">Devoir Realty</div>
              <h2>Find A Property That Fits Your Future.</h2>
              <p>Whether you're searching for a luxurious home, a smart investment, or a commercial space, our experts are ready to help.</p>
              <a href="#contact" className="btn btn-primary">Talk To Our Expert →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="theme-section" id="contact">
        <div className="theme-container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <div className="kicker">Contact Us</div>
              <h3>Let's Find Your Ideal Property</h3>
              <p>Tell us what you're looking for and our real estate experts will help you with the right options.</p>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <strong>Office Address</strong>
                  <span>803, Eight Floor, Skyline Royal Plaza, Sushant Golf City, Lucknow</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">☎</div>
                <div><strong>Phone</strong><span>+91 6283242916</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">✉</div>
                <div><strong>Email</strong><span>info@devoirrealty.com</span></div>
              </div>
            </div>

            <div className="contact-form reveal">
              <h3>Get Property Assistance</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Your phone" required />
                  </div>
                  <div className="field">
                    <label>Property Type</label>
                    <select name="property">
                      <option value="">Select property</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Farm Land</option>
                      <option>Investment Property</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Budget</label>
                    <input type="text" name="budget" placeholder="Your budget" />
                  </div>
                  <div className="field full">
                    <label>Message</label>
                    <textarea name="message" placeholder="Tell us about your requirement"></textarea>
                  </div>
                  <div className="field full">
                    <button type="submit" className="btn btn-primary">Submit Enquiry →</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
