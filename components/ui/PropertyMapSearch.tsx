'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, MapPin } from 'lucide-react';
import type mapboxgl from 'mapbox-gl';
import { Property } from '@/data/properties';

type MappableProperty = Pick<Property, 'id' | 'slug' | 'title' | 'location' | 'city' | 'price' | 'images'> & {
  coordinates?: [number, number];
};

function hasCoordinates(property: MappableProperty): property is MappableProperty & { coordinates: [number, number] } {
  return Array.isArray(property.coordinates) && property.coordinates.length === 2 && property.coordinates.every(Number.isFinite);
}

function directionsUrl([lng, lat]: [number, number]) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

function openStreetMapUrl([lng, lat]: [number, number]) {
  const offset = 0.045;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - offset}%2C${lat - offset}%2C${lng + offset}%2C${lat + offset}&layer=mapnik&marker=${lat}%2C${lng}`;
}

interface Props {
  properties: MappableProperty[];
  title?: string;
  description?: string;
}

export default function PropertyMapSearch({
  properties,
  title = 'Explore properties by location',
  description = 'Select a pin to explore the project and its surrounding locality.',
}: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerRefs = useRef<mapboxgl.Marker[]>([]);
  const mappableProperties = useMemo(() => properties.filter(hasCoordinates), [properties]);
  const [selectedId, setSelectedId] = useState(mappableProperties[0]?.id || '');
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const hasMapboxToken = Boolean(token && !token.includes('your_mapbox_token'));

  const selected = mappableProperties.find((property) => property.id === selectedId) || mappableProperties[0];

  useEffect(() => {
    if (!hasMapboxToken || !mapContainer.current || mappableProperties.length === 0) return;

    let cancelled = false;
    const centre = selected?.coordinates || mappableProperties[0].coordinates;

    void import('mapbox-gl').then(({ default: mapbox }) => {
      if (cancelled || !mapContainer.current) return;
      mapbox.accessToken = token as string;
      const map = new mapbox.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: centre,
        zoom: mappableProperties.length === 1 ? 13 : 10.5,
        attributionControl: false,
      });

      map.addControl(new mapbox.NavigationControl({ showCompass: false }), 'top-right');
      mapRef.current = map;
      markerRefs.current = mappableProperties.map((property) => {
        const markerElement = document.createElement('button');
        markerElement.type = 'button';
        markerElement.title = property.title;
        markerElement.setAttribute('aria-label', `View ${property.title} on the map`);
        markerElement.style.cssText = 'width:18px;height:18px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;background:#C9A96E;box-shadow:0 2px 8px rgba(0,0,0,.35);cursor:pointer;';
        markerElement.addEventListener('click', () => setSelectedId(property.id));
        return new mapbox.Marker({ element: markerElement }).setLngLat(property.coordinates).addTo(map);
      });
    });

    return () => {
      cancelled = true;
      markerRefs.current.forEach((marker) => marker.remove());
      markerRefs.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [hasMapboxToken, mappableProperties, selected?.coordinates, token]);

  useEffect(() => {
    if (!selected || !mapRef.current) return;
    mapRef.current.flyTo({ center: selected.coordinates, zoom: Math.max(mapRef.current.getZoom(), 12), essential: true });
  }, [selected]);

  if (mappableProperties.length === 0) return null;

  return (
    <section style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-secondary)' }}>
      <div style={{ padding: '32px 32px 0' }}>
        <p className="label-text" style={{ marginBottom: '12px' }}>Location Intelligence</p>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>{title}</h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr]" style={{ minHeight: '360px', borderTop: '1px solid var(--border-gold)' }}>
        {hasMapboxToken ? (
          <div ref={mapContainer} style={{ minHeight: '360px', width: '100%' }} aria-label="Interactive property map" />
        ) : (
          <iframe src={openStreetMapUrl(selected!.coordinates)} title={`${selected!.title} location map`} loading="lazy" style={{ minHeight: '360px', width: '100%', border: 0 }} />
        )}

        <div style={{ borderLeft: '1px solid var(--border-gold)', overflowY: 'auto', maxHeight: '420px' }}>
          {mappableProperties.map((property) => {
            const active = property.id === selected?.id;
            return (
              <button key={property.id} type="button" onClick={() => setSelectedId(property.id)} style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: active ? 'var(--gold-subtle)' : 'transparent', border: 'none', borderBottom: '1px solid var(--border-gold)', cursor: 'pointer', color: 'inherit' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '19px', color: 'var(--text-primary)', marginBottom: '5px' }}>{property.title}</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}><MapPin size={12} />{property.location}, {property.city}</p>
                <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--gold)' }}>{property.price}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <div style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid var(--border-gold)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--text-secondary)' }}>Explore nearby landmarks and route options around <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{selected.title}</strong>.</span>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href={directionsUrl(selected.coordinates)} target="_blank" rel="noopener noreferrer" className="text-link-gold">Open Maps <ExternalLink size={13} /></a>
            <Link href={`/properties/${selected.slug}`} className="text-link-gold">View Project</Link>
          </div>
        </div>
      )}
    </section>
  );
}
