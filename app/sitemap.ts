import type { MetadataRoute } from 'next';
import { getBlogs, getProperties } from '@/lib/json-db';
import { properties as staticProperties, type Property } from '@/data/properties';

export const dynamic = 'force-dynamic';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://devoirrealty.com').replace(/\/$/, '');
type Blog = { slug: string; createdAt?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const properties = (getProperties().length ? getProperties() : staticProperties) as Property[];
  const blogs = getBlogs() as Blog[];
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = ['/', '/about', '/properties', '/services', '/developers', '/contact', '/blogs'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/properties' ? 0.9 : 0.7,
  }));

  return [
    ...staticRoutes,
    ...properties.map((property) => ({
      url: `${siteUrl}/properties/${property.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      images: property.images?.map((image) => image.startsWith('http') ? image : `${siteUrl}${image}`),
    })),
    ...blogs.map((blog) => ({
      url: `${siteUrl}/blogs/${blog.slug}`,
      lastModified: blog.createdAt ? new Date(blog.createdAt) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
