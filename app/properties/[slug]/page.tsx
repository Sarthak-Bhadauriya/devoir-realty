import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PropertyDetailClient from './PropertyDetailClient';
import { getProperties } from '@/lib/json-db';
import { properties as staticProperties, Property } from '@/data/properties';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  let allSlugs = staticProperties.map((p) => ({ slug: p.slug }));
  
  const props = getProperties();
  if (props.length > 0) {
    allSlugs = props.map((p: any) => ({ slug: p.slug }));
  }
  
  return allSlugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  let property = null;
  const props = getProperties();
  const dbProp = props.find((p: any) => p.slug === slug);
  if (dbProp) property = dbProp;
  
  if (!property) {
    property = staticProperties.find((p) => p.slug === slug) as Property;
  }
  
  if (!property) return { title: 'Property Not Found' };
  return {
    title: `${property.title} — ${property.location}`,
    description: property.description,
    alternates: { canonical: `/properties/${property.slug}` },
    openGraph: {
      title: `${property.title} | Devoir Realty`,
      description: property.description,
      type: 'website',
      images: property.images?.[0] ? [{ url: property.images[0], alt: property.title }] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  
  let property = null;
  let allProperties = getProperties();

  const dbProp = allProperties.find((p: any) => p.slug === slug);
  if (dbProp) property = dbProp;
  
  if (!property) {
    property = staticProperties.find((p) => p.slug === slug) as Property;
  }
  if (!allProperties || allProperties.length === 0) {
    allProperties = staticProperties;
  }
  
  if (!property) notFound();

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://devoirrealty.com').replace(/\/$/, '');
  const propertySchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: property.title,
    description: property.description,
    image: property.images?.map((image: string) => image.startsWith('http') ? image : `${siteUrl}${image}`),
    brand: { '@type': 'Organization', name: property.developer || 'Devoir Realty' },
    category: property.category,
    url: `${siteUrl}/properties/${property.slug}`,
    ...(property.priceFrom > 0 ? { offers: { '@type': 'Offer', priceCurrency: 'INR', price: property.priceFrom, availability: 'https://schema.org/InStock', url: `${siteUrl}/properties/${property.slug}` } } : {}),
  };

  const similar = allProperties
    .filter((p: any) => p.id !== property?.id && (p.city === property?.city || p.category === property?.category))
    .slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema).replace(/</g, '\\u003c') }} />
      <PropertyDetailClient property={property as any} similar={similar as any} />
    </>
  );
}
