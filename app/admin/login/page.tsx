'use client';

import { useState } from 'react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Full navigation ensures the browser sends the newly issued HttpOnly
        // cookie through the middleware on the very next request.
        window.location.assign('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#09090b', padding: '20px' }}>
      <div style={{ background: '#1A1A1F', padding: '40px', borderRadius: '8px', border: '1px solid #C9A96E', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '32px', color: '#F5F2ED', marginBottom: '8px', textAlign: 'center' }}>
          Admin Login
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#8A8578', marginBottom: '32px', textAlign: 'center' }}>
          Devoir Realty Management Portal
        </p>

        {error && (
          <div style={{ background: 'rgba(196,91,91,0.1)', border: '1px solid #C45B5B', color: '#C45B5B', padding: '12px', fontSize: '13px', marginBottom: '20px', borderRadius: '4px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', color: '#F5F2ED', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              style={{ width: '100%', background: '#09090b', border: '1px solid #3D3832', color: '#F5F2ED', padding: '12px', fontSize: '14px', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = '#C9A96E'}
              onBlur={(e) => e.target.style.borderColor = '#3D3832'}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#F5F2ED', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              style={{ width: '100%', background: '#09090b', border: '1px solid #3D3832', color: '#F5F2ED', padding: '12px', fontSize: '14px', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = '#C9A96E'}
              onBlur={(e) => e.target.style.borderColor = '#3D3832'}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: '#C9A96E', color: '#000', padding: '14px', fontSize: '14px', fontWeight: 600,
              border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', marginTop: '12px',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? 'Authenticating...' : 'Secure Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
