import type { Metadata } from 'next';
import PropertiesClient from './PropertiesClient';
import { getProperties } from '@/lib/json-db';
import { properties as staticProperties } from '@/data/properties';

export const metadata: Metadata = {
  title: 'Our Properties | Devoir Realty',
  description: 'Explore our portfolio of luxury residential and commercial properties in Dubai.',
};

export default async function PropertiesPage() {
  const allProperties = getProperties();
  
  // Sort by newest first (reverse since we append to the end)
  const sortedProperties = [...allProperties].reverse();

  const data = sortedProperties.length > 0 ? sortedProperties : staticProperties;

  return <PropertiesClient initialProperties={data as any} />;
}
