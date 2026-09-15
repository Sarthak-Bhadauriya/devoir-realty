'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, Check, Loader2, MessageCircle } from 'lucide-react';
import { properties } from '@/data/properties';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  phone: z.string().min(10, 'Please enter a valid phone number').max(13, 'Enter a valid number'),
  project: z.string().min(1, 'Please select a property interest'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const officeLocations = [
  {
    city: 'Lucknow',
    address: '803, Eighth Floor, Skyline Royal Plaza',
    state: 'Sushant Golf City, Lucknow',
    phone: '+91 62832 42916',
    email: 'info@devoirrealty.com',
    hours: 'Mon–Sat: 10am – 7pm IST',
  }
];

const budgetRanges = [
  '₹3–5 Cr',
  '₹5–10 Cr',
  '₹10–20 Cr',
  '₹20 Cr+',
  'NRI / Overseas'
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        setWhatsappUrl(json.whatsappUrl || '');
      } else {
        setServerError(json.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Page header */}
      <div style={{ padding: '80px 0 60px', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <p className="label-text mb-4">Advisory Desk</p>
          <h1 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
          }}>
            Private Consultation
          </h1>
        </div>
      </div>

      {/* Main split layout */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Info */}
          <div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '48px', maxWidth: '520px' }}>
              Whether you are beginning your search, have found a property that interests you, or simply wish to explore your options, our advisors are here to assist. Every enquiry is treated with the same care and absolute discretion as our longest-standing client relationships.
            </p>

            {/* Direct contacts */}
            <div style={{ marginBottom: '48px' }}>
              <p className="label-text mb-6" style={{ color: 'var(--gold)' }}>Direct Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:+916283242916" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                >
                  <Phone size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300 }}>+91 62832 42916</span>
                </a>
                <a href="mailto:info@devoirrealty.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                >
                  <Mail size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300 }}>info@devoirrealty.com</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Clock size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300, color: 'var(--text-secondary)' }}>Monday–Saturday, 10am – 7pm IST</span>
                </div>
              </div>
            </div>

            {/* Office cards */}
            <div>
              <p className="label-text mb-6" style={{ color: 'var(--gold)' }}>Our Offices</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {officeLocations.map((office) => (
                  <div
                    key={office.city}
                    style={{
                      border: '1px solid var(--border-gold)',
                      padding: '24px 28px',
                      background: 'var(--bg-secondary)',
                      transition: 'border-color 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                      <MapPin size={14} strokeWidth={1.5} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          {office.city}
                        </p>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {office.address}<br />{office.state}
                        </p>
                      </div>
                    </div>
                    <div style={{ paddingLeft: '26px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                      <a href={`tel:${office.phone}`} style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--gold)', textDecoration: 'none' }}>
                        {office.phone}
                      </a>
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300 }}>
                        {office.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: '100%', minHeight: '400px', textAlign: 'center', padding: '60px 40px',
                border: '1px solid var(--border-gold)', background: 'var(--bg-secondary)',
              }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'var(--gold-subtle)', border: '1px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                }}>
                  <Check size={28} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Thank You
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '32px' }}>
                  Your enquiry has been received. A senior advisor will be in touch within 2 business hours.
                </p>
                {whatsappUrl && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <MessageCircle size={16} strokeWidth={1.5} />
                    Connect on WhatsApp
                  </a>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="label-text mb-8" style={{ color: 'var(--gold)' }}>
                  Schedule a Consultation
                </p>

                {/* Name */}
                <div className="float-field">
                  <input
                    type="text"
                    id="contact-name"
                    className="float-input"
                    placeholder="Full Name"
                    autoComplete="name"
                    {...register('name')}
                  />
                  <label htmlFor="contact-name" className="float-label">Full Name *</label>
                  {errors.name && (
                    <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="float-field">
                  <input
                    type="email"
                    id="contact-email"
                    className="float-input"
                    placeholder="Email Address"
                    autoComplete="email"
                    {...register('email')}
                  />
                  <label htmlFor="contact-email" className="float-label">Email Address (Optional)</label>
                  {errors.email && (
                    <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="float-field">
                  <input
                    type="tel"
                    id="contact-phone"
                    className="float-input"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    {...register('phone')}
                  />
                  <label htmlFor="contact-phone" className="float-label">Phone Number (+91) *</label>
                  {errors.phone && (
                    <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Project + Budget (2 cols) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                  <div className="float-field">
                    <select
                      id="contact-project"
                      className="float-input"
                      style={{ paddingTop: '20px' }}
                      {...register('project')}
                    >
                      <option value="">Select Property</option>
                      {properties.map(p => (
                        <option key={p.id} value={p.title} style={{ background: 'var(--bg-secondary)' }}>
                          {p.title}
                        </option>
                      ))}
                      <option value="General Inquiry" style={{ background: 'var(--bg-secondary)' }}>General Inquiry</option>
                    </select>
                    <label htmlFor="contact-project" className="float-label" style={{ top: 0, fontSize: '9px', color: 'var(--gold)', letterSpacing: '0.2em' }}>
                      Interested Project *
                    </label>
                    {errors.project && (
                      <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>
                        {errors.project.message}
                      </p>
                    )}
                  </div>

                  <div className="float-field">
                    <select
                      id="contact-budget"
                      className="float-input"
                      style={{ paddingTop: '20px' }}
                      {...register('budget')}
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map(b => <option key={b} value={b} style={{ background: 'var(--bg-secondary)' }}>{b}</option>)}
                    </select>
                    <label htmlFor="contact-budget" className="float-label" style={{ top: 0, fontSize: '9px', color: 'var(--gold)', letterSpacing: '0.2em' }}>
                      Budget Range *
                    </label>
                    {errors.budget && (
                      <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="float-field" style={{ marginTop: '12px' }}>
                  <textarea
                    id="contact-message"
                    className="float-input"
                    placeholder="Message"
                    rows={4}
                    style={{ resize: 'none' }}
                    {...register('message')}
                  />
                  <label htmlFor="contact-message" className="float-label">Your Message (Optional)</label>
                </div>

                {/* Server Error */}
                {serverError && (
                  <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '12px', color: '#C45B5B', marginBottom: '16px', padding: '12px', border: '1px solid rgba(196,91,91,0.3)', background: 'rgba(196,91,91,0.05)' }}>
                    {serverError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} strokeWidth={1.5} style={{ animation: 'spin 1s linear infinite' }} />
                      Processing...
                    </>
                  ) : (
                    'Submit VIP Inquiry'
                  )}
                </button>

                <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', fontWeight: 300, color: 'var(--text-secondary)', marginTop: '16px', textAlign: 'center', lineHeight: 1.6 }}>
                  Your information is held in the strictest confidence and will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
