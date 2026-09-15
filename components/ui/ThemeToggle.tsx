'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Theme = 'dark' | 'light';

const THEME_EVENT = 'devoir-theme-change';

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_EVENT, onStoreChange);
}

export default function ThemeToggle() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark');
  const isLight = theme === 'light';

  const toggleTheme = () => {
    const nextTheme: Theme = isLight ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('devoir-theme', nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  if (pathname.startsWith('/admin')) return null;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? <Moon size={16} strokeWidth={1.7} /> : <Sun size={16} strokeWidth={1.7} />}
    </button>
  );
}
