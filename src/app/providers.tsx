'use client';

import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import { PageViewTracker } from '../components/PageViewTracker';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PageViewTracker />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
