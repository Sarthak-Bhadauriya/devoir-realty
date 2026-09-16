"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
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
      {/* PAGE HEADER */}
      <section className="hero" style={{ padding: '120px 0 60px', minHeight: 'auto', textAlign: 'center' }}>
        <div className="theme-container reveal">
          <div className="eyebrow">Get In Touch</div>
          <h1>Contact <span>Us</span></h1>
          <p className="hero-text" style={{ margin: '0 auto' }}>
            Tell us what you're looking for and our real estate experts will help you with the right options.
          </p>
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
