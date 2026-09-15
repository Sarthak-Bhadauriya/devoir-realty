'use client';

import { useMemo, useState } from 'react';
import { Calculator, Info } from 'lucide-react';

const formatCurrency = (amount: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

export default function EMICalculator({ startingPrice = 0 }: { startingPrice?: number }) {
  const [propertyPrice, setPropertyPrice] = useState(startingPrice || 0);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculation = useMemo(() => {
    const loanAmount = Math.max(0, propertyPrice * (1 - downPayment / 100));
    const months = Math.max(1, tenure * 12);
    const monthlyRate = Math.max(0, interestRate) / 1200;
    const emi = monthlyRate === 0 ? loanAmount / months : loanAmount * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1);
    return { loanAmount, emi, bookingAmount: propertyPrice * 0.1, agreementAmount: propertyPrice * 0.1, possessionAmount: propertyPrice * 0.8 };
  }, [downPayment, interestRate, propertyPrice, tenure]);

  const inputStyle: React.CSSProperties = { width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-gold)', color: 'var(--text-primary)', padding: '9px 0', outline: 'none', fontFamily: 'var(--font-inter)', fontSize: '14px' };

  return (
    <section style={{ marginBottom: '48px', padding: '32px', border: '1px solid var(--border-gold)', background: 'var(--bg-secondary)' }}>
      <p className="label-text" style={{ marginBottom: '12px' }}>Finance Planner</p>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '28px' }}>
        <Calculator size={22} strokeWidth={1.4} style={{ color: 'var(--gold)', marginTop: '3px', flexShrink: 0 }} />
        <div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '6px' }}>EMI & Payment Plan</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>Adjust the assumptions to estimate your monthly EMI. This is an illustrative calculation, not a loan offer.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5" style={{ marginBottom: '28px' }}>
        <label style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Property price (₹)<input type="number" min="0" step="100000" value={propertyPrice || ''} onChange={e => setPropertyPrice(Number(e.target.value))} placeholder="Enter property price" style={inputStyle} /></label>
        <label style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Down payment (%)<input type="number" min="0" max="100" value={downPayment} onChange={e => setDownPayment(Math.min(100, Math.max(0, Number(e.target.value))))} style={inputStyle} /></label>
        <label style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Interest rate (% p.a.)<input type="number" min="0" step="0.1" value={interestRate} onChange={e => setInterestRate(Math.max(0, Number(e.target.value)))} style={inputStyle} /></label>
        <label style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Loan tenure (years)<input type="number" min="1" max="40" value={tenure} onChange={e => setTenure(Math.max(1, Number(e.target.value)))} style={inputStyle} /></label>
      </div>

      {propertyPrice > 0 ? (
        <>
          <div style={{ padding: '22px', background: 'var(--gold-subtle)', border: '1px solid var(--border-gold)', marginBottom: '28px' }}>
            <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.18em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>Estimated monthly EMI</p>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', color: 'var(--gold)', fontWeight: 600, lineHeight: 1 }}>{formatCurrency(calculation.emi)}</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--text-secondary)', marginTop: '9px' }}>Estimated loan amount: {formatCurrency(calculation.loanAmount)}</p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '14px' }}>Illustrative 10:10:80 payment plan</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[['Booking', calculation.bookingAmount], ['On agreement', calculation.agreementAmount], ['On possession', calculation.possessionAmount]].map(([label, amount]) => <div key={String(label)} style={{ border: '1px solid var(--border-gold)', padding: '14px' }}><p style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '5px' }}>{label}</p><p style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text-primary)', fontSize: '18px' }}>{formatCurrency(Number(amount))}</p></div>)}
            </div>
          </div>
        </>
      ) : <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}><Info size={15} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />Price is available on request. Enter a working budget above to calculate an indicative EMI.</p>}
    </section>
  );
}
