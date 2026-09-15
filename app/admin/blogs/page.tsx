'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, Plus, ExternalLink } from 'lucide-react';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert('Failed to delete blog');
      }
    } catch (err) {
      alert('An error occurred');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: '#F5F2ED', marginBottom: '8px' }}>Blogs</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#8A8578' }}>Manage your real estate blogs</p>
        </div>
        <Link href="/admin/blogs/add" style={{
          display: 'flex', alignItems: 'center', gap: '8px', background: '#C9A96E', color: '#09090b', 
          padding: '10px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, textDecoration: 'none'
        }}>
          <Plus size={16} strokeWidth={2} /> Add Blog
        </Link>
      </div>

      {isLoading ? (
        <div style={{ color: '#8A8578' }}>Loading blogs...</div>
      ) : (
        <div style={{ background: '#1A1A1F', border: '1px solid #3D3832', borderRadius: '8px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #3D3832', background: 'rgba(255,255,255,0.02)' }}>
                <th style={{ padding: '16px', fontSize: '12px', color: '#8A8578', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Title</th>
                <th style={{ padding: '16px', fontSize: '12px', color: '#8A8578', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Author</th>
                <th style={{ padding: '16px', fontSize: '12px', color: '#8A8578', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ padding: '32px', textAlign: 'center', color: '#8A8578' }}>No blogs found.</td>
                </tr>
              ) : blogs.map((blog) => (
                <tr key={blog.id} style={{ borderBottom: '1px solid #3D3832' }}>
                  <td style={{ padding: '16px', color: '#F5F2ED', fontWeight: 500 }}>{blog.title}</td>
                  <td style={{ padding: '16px', color: '#8A8578' }}>{blog.author || 'Admin'}</td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                      <Link href={`/blogs/${blog.slug}`} target="_blank" style={{ color: '#8A8578', textDecoration: 'none' }} title="View on site">
                        <ExternalLink size={18} />
                      </Link>
                      <button onClick={() => handleDelete(blog.id)} style={{ background: 'none', border: 'none', color: '#C45B5B', cursor: 'pointer' }} title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
