'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Building, FileText, LogOut, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Don't show layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  const menu = [
    { name: 'Dashboard', path: '/admin', icon: Home },
    { name: 'Properties', path: '/admin/properties', icon: Building },
    { name: 'Blogs', path: '/admin/blogs', icon: FileText },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#09090b', color: '#F5F2ED' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', background: '#1A1A1F', borderRight: '1px solid #3D3832', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #3D3832' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', color: '#C9A96E' }}>Devoir Admin</h2>
        </div>
        
        <nav style={{ padding: '24px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menu.map((item) => {
            const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path));
            return (
              <Link key={item.path} href={item.path} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                borderRadius: '6px', textDecoration: 'none',
                background: isActive ? 'rgba(201,169,110,0.1)' : 'transparent',
                color: isActive ? '#C9A96E' : '#8A8578',
                transition: 'all 0.2s',
              }}>
                <item.icon size={18} strokeWidth={1.5} />
                <span style={{ fontSize: '14px', fontFamily: 'var(--font-inter)' }}>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '24px 12px', borderTop: '1px solid #3D3832' }}>
          <button onClick={handleLogout} style={{
            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            color: '#C45B5B', fontSize: '14px', fontFamily: 'var(--font-inter)',
          }}>
            <LogOut size={18} strokeWidth={1.5} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <header style={{ height: '70px', borderBottom: '1px solid #3D3832', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '12px', color: '#8A8578', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Admin User</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C9A96E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#09090b', fontWeight: 'bold' }}>A</div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
