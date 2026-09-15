'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPropertyPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    category: 'residential',
    location: '',
    city: '',
    price: '',
    priceFrom: 0,
    status: 'under construction',
    tag: '',
    developer: '',
    description: '',
    images: '' // we will split by comma
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setUploadError('');

    try {
      let uploadedImages: string[] = [];
      if (imageFiles.length > 0) {
        const uploadData = new FormData();
        imageFiles.forEach(file => uploadData.append('files', file));
        const uploadResponse = await fetch('/api/uploads', { method: 'POST', body: uploadData });
        const uploadResult = await uploadResponse.json();
        if (!uploadResponse.ok) throw new Error(uploadResult.error || 'Image upload failed.');
        uploadedImages = uploadResult.urls;
      }

      const urlImages = formData.images.split(',').map(i => i.trim()).filter(Boolean);
      const images = [...uploadedImages, ...urlImages];
      if (images.length === 0) throw new Error('Please upload at least one property image or enter an image URL.');

      const dataToSubmit = { ...formData, images };
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      if (res.ok) {
        router.push('/admin/properties');
      } else {
        const result = await res.json();
        throw new Error(result.error || 'Failed to add property.');
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: '#F5F2ED', marginBottom: '8px' }}>Add Property</h1>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#8A8578', marginBottom: '32px' }}>Fill in the details to create a new property listing.</p>

      <form onSubmit={handleSubmit} style={{ background: '#1A1A1F', border: '1px solid #3D3832', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Title</label>
            <input name="title" value={formData.title} onChange={handleChange} required style={inputStyle} placeholder="e.g. Luxury Villa" />
          </div>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} style={inputStyle}>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Location</label>
            <input name="location" value={formData.location} onChange={handleChange} required style={inputStyle} placeholder="e.g. Downtown" />
          </div>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>City</label>
            <input name="city" value={formData.city} onChange={handleChange} required style={inputStyle} placeholder="e.g. Dubai" />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Price (String)</label>
            <input name="price" value={formData.price} onChange={handleChange} style={inputStyle} placeholder="e.g. AED 2.5M" />
          </div>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Status</label>
            <input name="status" value={formData.status} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Tag (Optional)</label>
            <input name="tag" value={formData.tag} onChange={handleChange} style={inputStyle} placeholder="e.g. Hot" />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Developer</label>
          <input name="developer" value={formData.developer} onChange={handleChange} style={inputStyle} />
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Upload Property Images</label>
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={e => setImageFiles(Array.from(e.target.files || []))} style={inputStyle} />
          <p style={helpText}>{imageFiles.length ? `${imageFiles.length} image(s) selected.` : 'Select up to 10 JPG, PNG, WebP, or GIF images (max 8 MB each).'}</p>
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Or Use Image URLs</label>
          <input name="images" value={formData.images} onChange={handleChange} style={inputStyle} placeholder="https://image1.jpg, https://image2.jpg" />
        </div>

        <div>
          <label style={{ display: 'block', color: '#8A8578', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} style={{ ...inputStyle, height: '100px', resize: 'vertical' }} />
        </div>

        {uploadError && <p style={{ color: '#C45B5B', fontSize: '13px', margin: 0 }}>{uploadError}</p>}

        <button type="submit" disabled={isLoading} style={{
          background: '#C9A96E', color: '#09090b', padding: '12px', border: 'none', borderRadius: '4px',
          fontSize: '14px', fontWeight: 600, cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1, marginTop: '12px'
        }}>
          {isLoading ? 'Saving...' : 'Save Property'}
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
