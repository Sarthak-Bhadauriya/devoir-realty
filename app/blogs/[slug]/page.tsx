import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, UserRound } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getBlogs } from '@/lib/json-db';

type Blog = { slug: string; title: string; author?: string; image?: string; content?: string; createdAt?: string };

function findBlog(slug: string) {
  return (getBlogs() as Blog[]).find((blog) => blog.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const blog = findBlog((await params).slug);
  return blog ? { title: blog.title, description: blog.content?.replace(/\s+/g, ' ').slice(0, 160) } : {};
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const blog = findBlog((await params).slug);
  if (!blog) notFound();
  const formattedDate = blog.createdAt ? new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(blog.createdAt)) : 'Latest update';
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://devoirrealty.com').replace(/\/$/, '');
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.content?.replace(/\s+/g, ' ').slice(0, 160),
    image: blog.image ? (blog.image.startsWith('http') ? blog.image : `${siteUrl}${blog.image}`) : undefined,
    datePublished: blog.createdAt,
    dateModified: blog.createdAt,
    author: { '@type': 'Person', name: blog.author || 'Devoir Realty' },
    publisher: { '@type': 'Organization', name: 'Devoir Realty', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
    mainEntityOfPage: `${siteUrl}/blogs/${blog.slug}`,
  };

  return (
    <article style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: '140px 0 120px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <div className="max-w-[900px] mx-auto px-8">
        <Link href="/blogs" className="text-link-gold" style={{ marginBottom: '36px' }}><ArrowLeft size={14} strokeWidth={1.5} /> All Blogs</Link>
        <div style={{ display: 'flex', gap: '18px', color: 'var(--text-secondary)', fontFamily: 'var(--font-inter)', fontSize: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Calendar size={13} color="var(--gold)" />{formattedDate}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><UserRound size={13} color="var(--gold)" />{blog.author || 'Devoir Realty'}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.12, marginBottom: '36px' }}>{blog.title}</h1>
        {blog.image && <img src={blog.image} alt="" style={{ width: '100%', aspectRatio: '16/8', objectFit: 'cover', marginBottom: '48px', border: '1px solid var(--border-gold)' }} />}
        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9 }}>
          {(blog.content || '').split(/\n{2,}/).map((paragraph, index) => <p key={index} style={{ marginBottom: '24px' }}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  );
}
