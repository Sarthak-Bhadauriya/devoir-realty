'use client';

import { useState, useMemo } from 'react';
import { Grid, List, Map, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '@/components/ui/PropertyCard';
import LeadModal from '@/components/ui/LeadModal';
import PropertyMapSearch from '@/components/ui/PropertyMapSearch';
import { Property } from '@/data/properties';

const cities = ['All Cities', 'Lucknow'];
const types: string[] = ['All Types', 'Residential', 'Commercial', 'Villa', 'Plots', 'Resort'];
const statusOptions: string[] = ['All', 'FOR SALE', 'Under Construction', 'Exclusive Partner', 'Grade-A Commercial', 'Fast Selling', 'New Release', 'Limited Inventory'];

const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under ₹5 Cr', min: 0, max: 50000000 },
  { label: '₹5–10 Cr', min: 50000000, max: 100000000 },
  { label: '₹10–25 Cr', min: 100000000, max: 250000000 },
  { label: 'Above ₹25 Cr', min: 250000000, max: Infinity },
];

const ITEMS_PER_PAGE = 9;

export default function PropertiesClient({ initialProperties }: { initialProperties: Property[] }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [city, setCity] = useState('All Cities');
  const [type, setType] = useState<string>('All Types');
  const [status, setStatus] = useState<string>('All');
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<'viewing' | 'brochure'>('viewing');
  const [selectedProject, setSelectedProject] = useState('');

  const handleEnquire = (property: Property) => {
    setSelectedProject(property.title);
    setModalTrigger('viewing');
    setModalOpen(true);
  };

  const handleBrochure = (property: Property) => {
    setSelectedProject(property.title);
    setModalTrigger('brochure');
    setModalOpen(true);
  };

  const filtered = useMemo(() => {
    return initialProperties.filter((p) => {
      if (city !== 'All Cities' && p.city !== city) return false;
      if (type !== 'All Types') {
        const cat = (p.category || '').toLowerCase();
        const t = type.toLowerCase();
        if (t === 'residential' && !(cat.includes('apartment') || cat.includes('villa') || cat.includes('residence') || cat.includes('resort') || cat.includes('eco') || cat.includes('luxury'))) return false;
        if (t === 'commercial' && !cat.includes('commercial')) return false;
        if (t === 'villa' && !(cat.includes('villa') || cat.includes('duplex'))) return false;
        if (t === 'plots' && !cat.includes('plot')) return false;
        if (t === 'resort' && !cat.includes('resort')) return false;
      }
      if (status !== 'All' && p.status !== status) return false;
      if (priceRange.min > 0 && p.priceFrom < priceRange.min) return false;
      if (p.priceFrom > priceRange.max) return false;
      return true;
    });
  }, [initialProperties, city, type, status, priceRange]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const selectStyle: React.CSSProperties = {
    background: '#09090b',
    border: 'none',
    borderBottom: '1px solid var(--border-gold)',
    color: '#F5F2ED',
    fontFamily: 'var(--font-inter)',
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    padding: '10px 28px 10px 0',
    outline: 'none',
    appearance: 'none' as const,
    cursor: 'pointer',
    minWidth: '130px',
    transition: 'border-color 0.3s ease',
  };

  const optionStyle: React.CSSProperties = {
    background: '#1A1A1F',
    color: '#F5F2ED',
    fontFamily: 'var(--font-inter)',
    fontSize: '13px',
    padding: '8px',
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Page Hero */}
      <div style={{ padding: '80px 0 60px', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <p className="label-text mb-4">Our Portfolio</p>
          <h1 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1,
          }}>
            Exclusive Collection
          </h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{
        borderBottom: '1px solid var(--border-gold)', padding: '24px 0',
        position: 'sticky', top: '80px', background: 'rgba(9,9,11,0.92)',
        backdropFilter: 'blur(20px)', zIndex: 30,
      }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
              <SlidersHorizontal size={14} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Filter
              </span>
            </div>

            {/* City */}
            <div style={{ position: 'relative' }}>
              <select value={city} onChange={e => { setCity(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }} style={selectStyle} aria-label="Filter by city">
                {cities.map(c => <option key={c} value={c} style={optionStyle}>{c}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--gold)', fontSize: '10px' }}>▾</span>
            </div>

            {/* Type */}
            <div style={{ position: 'relative' }}>
              <select value={type} onChange={e => { setType(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }} style={selectStyle} aria-label="Filter by type">
                {types.map(t => <option key={t} value={t} style={optionStyle}>{t}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--gold)', fontSize: '10px' }}>▾</span>
            </div>

            {/* Price */}
            <div style={{ position: 'relative' }}>
              <select value={priceRange.label} onChange={e => { setPriceRange(priceRanges.find(p => p.label === e.target.value)!); setVisibleCount(ITEMS_PER_PAGE); }} style={selectStyle} aria-label="Filter by price range">
                {priceRanges.map(r => <option key={r.label} value={r.label} style={optionStyle}>{r.label}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--gold)', fontSize: '10px' }}>▾</span>
            </div>

            {/* Status */}
            <div style={{ position: 'relative' }}>
              <select value={status} onChange={e => { setStatus(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }} style={selectStyle} aria-label="Filter by status">
                {statusOptions.map(s => <option key={s} value={s} style={optionStyle}>{s === 'All' ? 'All Status' : s}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--gold)', fontSize: '10px' }}>▾</span>
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Results count */}
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
              Showing {Math.min(visible.length, filtered.length)} of {filtered.length} Properties
            </span>

            {/* View toggle */}
            <div style={{ display: 'flex', gap: '4px' }}>
              <button
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                style={{
                  background: viewMode === 'grid' ? 'var(--gold-subtle)' : 'transparent',
                  border: '1px solid',
                  borderColor: viewMode === 'grid' ? 'var(--gold)' : 'var(--border-gold)',
                  color: viewMode === 'grid' ? 'var(--gold)' : 'var(--text-secondary)',
                  cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', transition: 'all 0.3s ease',
                }}
              >
                <Grid size={14} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="List view"
                style={{
                  background: viewMode === 'list' ? 'var(--gold-subtle)' : 'transparent',
                  border: '1px solid',
                  borderColor: viewMode === 'list' ? 'var(--gold)' : 'var(--border-gold)',
                  color: viewMode === 'list' ? 'var(--gold)' : 'var(--text-secondary)',
                  cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', transition: 'all 0.3s ease',
                }}
              >
                <List size={14} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setViewMode('map')}
                aria-label="Map view"
                style={{
                  background: viewMode === 'map' ? 'var(--gold-subtle)' : 'transparent',
                  border: '1px solid',
                  borderColor: viewMode === 'map' ? 'var(--gold)' : 'var(--border-gold)',
                  color: viewMode === 'map' ? 'var(--gold)' : 'var(--text-secondary)',
                  cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', transition: 'all 0.3s ease',
                }}
              >
                <Map size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid / List / Map */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-16">
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              No properties found
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 300 }}>
              Try adjusting your filters to see more results.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid view */
          <div style={{ background: 'var(--bg-secondary)', padding: '48px', marginBottom: '48px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((property, i) => (
                <PropertyCard key={property.id} property={property} priority={i < 3} onEnquire={handleEnquire} onBrochure={handleBrochure} theme="dark" />
              ))}
            </div>
          </div>
        ) : viewMode === 'list' ? (
          /* List view */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-gold)' }}>
            {visible.map((property) => (
              <PropertyListItem key={property.id} property={property} />
            ))}
          </div>
        ) : (
          /* Map view */
          <PropertyMapSearch properties={filtered} />
        )}

        {/* Load More (only grid/list) */}
        {hasMore && viewMode !== 'map' && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
              className="btn-gold-outline"
            >
              Load More Properties
            </button>
          </div>
        )}
      </div>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trigger={modalTrigger}
        defaultProject={selectedProject}
      />
    </div>
  );
}

function PropertyListItem({ property }: { property: Property }) {
  return (
    <a
      href={`/properties/${property.slug}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '240px 1fr auto',
        gap: '0',
        background: 'var(--bg-secondary)',
        textDecoration: 'none',
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)'}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
        <img
          src={property.images[0]}
          alt={property.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.8)' }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--bg-primary)', padding: '3px 8px' }}>
            {property.status}
          </span>
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {property.developer}
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)' }}>
          {property.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300 }}>
          {property.location}
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {[property.bhk, property.area, property.category].map((s, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {i > 0 && <span className="spec-div" />}
              <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: 'var(--text-secondary)' }}>{s}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Price */}
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: '8px', borderLeft: '1px solid var(--border-gold)' }}>
        <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 600, color: 'var(--gold)' }}>
          {property.price}
        </span>
        <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '11px', color: 'var(--gold-hover)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '12px' }}>
          View Details →
        </span>
      </div>
    </a>
  );
}
