'use client';

import React from 'react';
import { Logo } from './Logo';

interface LoadingScreenProps {
  label?: string;
  sublabel?: string;
  fullPage?: boolean;
}

export function LoadingScreen({
  label = 'Preparing Session & Questions...',
  sublabel = 'Connecting to official question bank and calibrating interface.',
  fullPage = true,
}: LoadingScreenProps) {
  const content = (
    <div className="flex flex-col items-center justify-center text-center p-8 max-w-sm mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Refined Center Insignia with Subtle Breathing Ring */}
      <div className="relative flex items-center justify-center">
        {/* Soft breathing pulse halo */}
        <div className="absolute w-14 h-14 rounded-xl bg-accent-soft/80 animate-ping opacity-25" />
        <div className="relative w-12 h-12 rounded-xl bg-surface border border-line flex items-center justify-center shadow-xs">
          <Logo size="sm" iconOnly={true} />
        </div>
      </div>

      {/* Clean Typographic Messaging */}
      <div className="space-y-1.5">
        <h3 className="text-sm font-semibold tracking-tight text-ink">{label}</h3>
        <p className="text-xs text-ink-muted leading-relaxed max-w-xs">{sublabel}</p>
      </div>

      {/* Ultra-Refined Hairline Gliding Loader */}
      <div className="w-44 h-[2px] bg-line/60 rounded-full overflow-hidden relative">
        <div className="absolute top-0 bottom-0 bg-navy dark:bg-accent rounded-full animate-indeterminate" />
      </div>

      {/* Quiet Brand Micro-label */}
      <div className="pt-2 flex items-center gap-2 text-[10px] uppercase font-medium tracking-[0.2em] text-ink-muted/60">
        <span>PREP BY Ahsan</span>
        <span>•</span>
        <span>System Active</span>
      </div>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg text-ink transition-colors duration-200">
        {content}
      </div>
    );
  }

  return <div className="w-full py-16 flex items-center justify-center">{content}</div>;
}
