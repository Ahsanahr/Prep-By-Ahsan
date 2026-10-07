'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, BookOpen, PenTool, LayoutGrid, User, LogOut, Sliders } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Spinner } from '@/components/ui';

import { Logo } from '@/components/Logo';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg">
        <Spinner label="Loading application" />
      </div>
    );
  }

  const navItems = [
    { name: 'Analytics', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Practice', href: '/practice', icon: PenTool },
    { name: 'Mock Tests', href: '/mocks', icon: BookOpen },
    { name: 'Custom Tests', href: '/tests/new', icon: Sliders },
    { name: 'Vocabulary', href: '/vocab', icon: LayoutGrid },
  ];

  return (
    <div className="min-h-screen bg-bg flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-line bg-surface shrink-0 flex flex-col justify-between">
        <div>
          {/* Brand Logo Header */}
          <div className="p-5 border-b border-line">
            <Logo size="md" />
          </div>

          <nav className="p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-accent-soft text-accent'
                      : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-line space-y-3">
          {/* Subtle math disclaimer notice */}
          <div className="px-2 py-2 text-[11px] leading-snug text-ink-muted/80 font-normal border-b border-line/50 mb-2">
            <span className="font-semibold text-ink-muted">System Note:</span> Mathematical questions involve high data variance with dynamic LaTeX formatting, figures, and graphs. Occasional visual or rendering variations may occur on complex items.
          </div>

          <div className="flex items-center space-x-3 px-3">
            <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm shrink-0">
              {user.email?.[0].toUpperCase() || 'U'}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-ink truncate">{user.email}</p>
              <p className="text-xs text-ink-muted truncate">Student</p>
            </div>
          </div>
          
          <button
            onClick={() => logout()}
            className="w-full flex items-center space-x-2 px-3 py-2 text-sm font-semibold text-danger hover:bg-danger/5 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-surface-muted">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
