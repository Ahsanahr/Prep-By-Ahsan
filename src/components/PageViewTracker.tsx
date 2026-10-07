'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { trackPageView } from '@/lib/analytics';

/** Logs one `page_view` event per route change (once auth state is known). */
export function PageViewTracker() {
  const pathname = usePathname();
  const { loading } = useAuth();
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (loading || !pathname || last.current === pathname) return;
    last.current = pathname;
    trackPageView(pathname).catch(() => {});
  }, [pathname, loading]);

  return null;
}
