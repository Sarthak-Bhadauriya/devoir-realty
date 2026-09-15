'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Check, Loader2, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { properties } from '@/data/properties';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Enter a valid 10-digit number').max(13, 'Enter a valid number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  project: z.string().min(1, 'Please select a property'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const budgetOptions = ['₹3–5 Cr', '₹5–10 Cr', '₹10–20 Cr', '₹20 Cr+', 'NRI / Overseas'];

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
  trigger?: 'viewing' | 'brochure' | 'general';
}

export default function LeadModal({ isOpen, onClose, defaultProject = '', trigger = 'general' }: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { project: defaultProject, budget: '' },
  });

  // Pre-fill project when prop changes
  useEffect(() => {
    if (defaultProject) setValue('project', defaultProject);
  }, [defaultProject, setValue]);

  // Set budget in form when pill clicked
  const handleBudgetSelect = (b: string) => {
    setSelectedBudget(b);
    setValue('budget', b);
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setSelectedBudget('');
      setServerError('');
      reset();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, reset]);

  const onSubmit = async (data: FormData) => {
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

  if (!isOpen) return null;

  const headings: Record<string, string> = {
    viewing: 'Schedule a VIP Viewing',
    brochure: 'Download Project Brochure',
    general: 'Book a Private Consultation',
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={headings[trigger]}
    >
      <div className="modal-panel" style={{ position: 'relative' }}>
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-secondary)', transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {submitted ? (
          /* ─── Success State ─── */
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div className="success-tick" style={{ margin: '0 auto 24px' }}>
              <Check size={28} strokeWidth={1.5} color="var(--gold)" />
            </div>
            <h3 style={{
              fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 400,
              color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Inquiry Received
            </h3>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 300,
              color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '36px',
            }}>
              Thank you. A senior Devoir Realty advisor will personally reach you
              within 2 business hours. For immediate assistance, connect on WhatsApp.
            </p>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Connect on WhatsApp
              </a>
            )}
            <div style={{ marginTop: '8px' }}>
              <button
                onClick={onClose}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-jakarta)', fontSize: '11px',
                  color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase',
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* ─── Form State ─── */
          <>
            {/* Header */}
            <div style={{ marginBottom: '36px' }}>
              <p className="label-text" style={{ marginBottom: '12px' }}>
                Devoir Realty Advisory
              </p>
              <h2 style={{
                fontFamily: 'var(--font-playfair)', fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2,
              }}>
                {headings[trigger]}
              </h2>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)', marginTop: '14px' }} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Name */}
              <div className="float-field">
                <input
                  type="text" id="modal-name"
                  className="float-input" placeholder="Full Name"
                  autoComplete="name" {...register('name')}
                />
                <label htmlFor="modal-name" className="float-label">Full Name *</label>
                {errors.name && <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>{errors.name.message}</p>}
              </div>

              {/* Phone */}
              <div className="float-field">
                <input
                  type="tel" id="modal-phone"
                  className="float-input" placeholder="Phone Number"
                  autoComplete="tel" {...register('phone')}
                />
                <label htmlFor="modal-phone" className="float-label">Phone Number (+91) *</label>
                {errors.phone && <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div className="float-field">
                <input
                  type="email" id="modal-email"
                  className="float-input" placeholder="Email Address"
                  autoComplete="email" {...register('email')}
                />
                <label htmlFor="modal-email" className="float-label">Email Address (Optional)</label>
              </div>

              {/* Project dropdown */}
              <div className="float-field">
                <select id="modal-project" className="float-input" style={{ paddingTop: '20px' }} {...register('project')}>
                  <option value="">Select Property</option>
                  {properties.map(p => (
                    <option key={p.id} value={p.title} style={{ background: 'var(--bg-secondary)' }}>
                      {p.title}
                    </option>
                  ))}
                  <option value="General Inquiry" style={{ background: 'var(--bg-secondary)' }}>General Inquiry</option>
                </select>
                <label htmlFor="modal-project" className="float-label" style={{ top: 0, fontSize: '9px', color: 'var(--gold)', letterSpacing: '0.2em' }}>
                  Interested Project *
                </label>
                {errors.project && <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '4px' }}>{errors.project.message}</p>}
              </div>

              {/* Budget Pills */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{
                  fontFamily: 'var(--font-jakarta)', fontSize: '9px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: '12px',
                }}>
                  Investment Budget *
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {budgetOptions.map(b => (
                    <button
                      key={b}
                      type="button"
                      className={`budget-pill ${selectedBudget === b ? 'selected' : ''}`}
                      onClick={() => handleBudgetSelect(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {errors.budget && <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: '#C45B5B', marginTop: '8px' }}>{errors.budget.message}</p>}
              </div>

              {/* Server error */}
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
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? (
                  <><Loader2 size={16} strokeWidth={1.5} style={{ animation: 'spin 1s linear infinite' }} /> Processing...</>
                ) : (
                  trigger === 'brochure' ? 'Request Brochure & Pricing' : 'Submit VIP Inquiry'
                )}
              </button>

              <p style={{
                fontFamily: 'var(--font-jakarta)', fontSize: '10px', fontWeight: 300,
                color: 'var(--text-secondary)', marginTop: '14px', textAlign: 'center',
                lineHeight: 1.6, letterSpacing: '0.05em',
              }}>
                Your information is handled with absolute discretion. We never share your data with third parties.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
