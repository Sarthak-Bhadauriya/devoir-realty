import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: '#F5F2ED', marginBottom: '8px' }}>
        Dashboard Overview
      </h1>
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#8A8578', marginBottom: '32px' }}>
        Welcome to the Devoir Realty admin portal.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {/* Properties Card */}
        <div style={{ background: '#1A1A1F', border: '1px solid #3D3832', borderRadius: '8px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', color: '#C9A96E', marginBottom: '16px' }}>Manage Properties</h2>
          <p style={{ fontSize: '14px', color: '#8A8578', marginBottom: '24px' }}>Add, update, or remove property listings from your website.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/admin/properties/add" style={{
              background: '#C9A96E', color: '#09090b', padding: '8px 16px', borderRadius: '4px',
              fontSize: '13px', fontWeight: 600, textDecoration: 'none'
            }}>
              Add New
            </Link>
            <Link href="/admin/properties" style={{
              background: 'transparent', border: '1px solid #3D3832', color: '#F5F2ED', padding: '8px 16px', borderRadius: '4px',
              fontSize: '13px', textDecoration: 'none'
            }}>
              View All
            </Link>
          </div>
        </div>

        {/* Blogs Card */}
        <div style={{ background: '#1A1A1F', border: '1px solid #3D3832', borderRadius: '8px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', color: '#C9A96E', marginBottom: '16px' }}>Manage Blogs</h2>
          <p style={{ fontSize: '14px', color: '#8A8578', marginBottom: '24px' }}>Publish market insights and articles for your clients.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/admin/blogs/add" style={{
              background: '#C9A96E', color: '#09090b', padding: '8px 16px', borderRadius: '4px',
              fontSize: '13px', fontWeight: 600, textDecoration: 'none'
            }}>
              Write Post
            </Link>
            <Link href="/admin/blogs" style={{
              background: 'transparent', border: '1px solid #3D3832', color: '#F5F2ED', padding: '8px 16px', borderRadius: '4px',
              fontSize: '13px', textDecoration: 'none'
            }}>
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
