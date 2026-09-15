import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, UserRound } from 'lucide-react';
import { getBlogs } from '@/lib/json-db';

export const metadata: Metadata = {
  title: 'Blogs & News',
  description: 'Market updates, property insights, and investment guidance from Devoir Realty.',
};

type Blog = {
  id: string;
  slug: string;
  title: string;
  author?: string;
  image?: string;
  content?: string;
  createdAt?: string;
};

function excerpt(content = '') {
  return content.replace(/\s+/g, ' ').trim().slice(0, 160) || 'Read the latest insight from the Devoir Realty team.';
}

function formatDate(value?: string) {
  if (!value) return 'Latest update';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'Latest update' : new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export default function BlogsPage() {
  const blogs = [...getBlogs() as Blog[]].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <p className="label-text mb-4">Insights and Expertise</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1 }}>
            Blogs <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>&amp; News</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '580px', marginTop: '20px', lineHeight: 1.8 }}>
            Market updates, property buying guides, and investment perspectives from the Devoir Realty team.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0 140px' }}>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {blogs.length === 0 ? (
            <div style={{ padding: '72px 24px', border: '1px solid var(--border-gold)', background: 'var(--bg-secondary)', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '12px' }}>Fresh insights are on their way</h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-secondary)', fontWeight: 300 }}>Please check back soon for our next market update.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <article key={blog.id} className="group" style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(201,169,110,0.12)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bg-surface)', overflow: 'hidden' }}>
                    {blog.image ? <img src={blog.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.75)', transition: 'transform 0.6s ease' }} className="group-hover:scale-105" /> : null}
                    <span style={{ position: 'absolute', top: '16px', left: '16px', padding: '5px 12px', background: 'var(--gold)', fontFamily: 'var(--font-jakarta)', fontSize: '9px', fontWeight: 700, color: 'var(--bg-primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Market Insight</span>
                  </div>
                  <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--text-secondary)' }}><Calendar size={12} color="var(--gold)" />{formatDate(blog.createdAt)}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-inter)', fontSize: '11px', color: 'var(--text-secondary)' }}><UserRound size={12} color="var(--gold)" />{blog.author || 'Devoir Realty'}</span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '12px' }}>{blog.title}</h2>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px' }}>{excerpt(blog.content)}{blog.content && blog.content.length > 160 ? '…' : ''}</p>
                    <Link href={`/blogs/${blog.slug}`} className="text-link-gold" style={{ marginTop: 'auto' }}>Read Article <ArrowRight size={14} strokeWidth={1.5} /></Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
