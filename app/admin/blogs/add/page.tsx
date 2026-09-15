'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddBlogPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    image: '',
    content: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setUploadError('');

    try {
      let image = formData.image.trim();
      if (imageFile) {
        const uploadData = new FormData();
        uploadData.append('files', imageFile);
        const uploadResponse = await fetch('/api/uploads', { method: 'POST', body: uploadData });
        const uploadResult = await uploadResponse.json();
        if (!uploadResponse.ok) throw new Error(uploadResult.error || 'Image upload failed.');
        image = uploadResult.urls[0];
      }

      if (!image) {
        throw new Error('Please upload a cover image or enter an image URL.');
      }

      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, image }),
      });

      if (res.ok) {
        router.push('/admin/blogs');
      } else {
        const result = await res.json();
        throw new Error(result.error || 'Failed to add blog.');
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: '#F5F2ED', marginBottom: '8px' }}>Add Blog</h1>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#8A8578', marginBottom: '32px' }}>Write a new blog post.</p>

      <form onSubmit={handleSubmit} style={{ background: '#1A1A1F', border: '1px solid #3D3832', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Title</label>
          <input name="title" value={formData.title} onChange={handleChange} required style={inputStyle} placeholder="Blog Title" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Author</label>
            <input name="author" value={formData.author} onChange={handleChange} required style={inputStyle} placeholder="e.g. John Doe" />
          </div>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Cover Image Upload</label>
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={e => setImageFile(e.target.files?.[0] || null)} style={inputStyle} />
            <p style={helpText}>JPG, PNG, WebP, or GIF â€” max 8 MB.</p>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Or Use Image URL</label>
          <input name="image" value={formData.image} onChange={handleChange} style={inputStyle} placeholder="https://image.jpg" />
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Content (Markdown / Text)</label>
          <textarea name="content" value={formData.content} onChange={handleChange} required style={{ ...inputStyle, height: '200px', resize: 'vertical' }} />
        </div>

        {uploadError && <p style={{ color: '#C45B5B', fontSize: '13px', margin: 0 }}>{uploadError}</p>}

        <button type="submit" disabled={isLoading} style={{
          background: '#C9A96E', color: '#09090b', padding: '12px', border: 'none', borderRadius: '4px',
          fontSize: '14px', fontWeight: 600, cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1, marginTop: '12px'
        }}>
          {isLoading ? 'Publishing...' : 'Publish Blog'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: '#09090b',
  border: '1px solid #3D3832',
  color: '#F5F2ED',
  padding: '12px',
  fontSize: '14px',
  outline: 'none',
  borderRadius: '4px'
};

const helpText = { color: '#8A8578', fontSize: '11px', margin: '6px 0 0' };
