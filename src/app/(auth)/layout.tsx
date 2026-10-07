'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { Spinner } from '../../components/ui';

import { Logo } from '@/components/Logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Already signed in → go straight to the app.
  useEffect(() => {
    if (!loading && user) router.replace('/dashboard');
  }, [loading, user, router]);

  return (
    <div className="flex min-h-screen flex-col bg-surface-muted">
      <header className="h-16 border-b border-line bg-navy">
        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <Logo size="sm" variant="light" />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        {loading || user ? <Spinner /> : <div className="w-full max-w-sm">{children}</div>}
      </main>
    </div>
  );
}
