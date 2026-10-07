'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
  showSubtitle?: boolean;
  className?: string;
  iconOnly?: boolean;
}

export function Logo({
  size = 'md',
  variant = 'default',
  showSubtitle = true,
  className = '',
  iconOnly = false,
}: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-[15px]',
    lg: 'text-lg',
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* High-Precision Academic & Progress Insignia */}
      <div
        className={`${iconSizes[size]} shrink-0 rounded-lg flex items-center justify-center relative overflow-hidden transition-all border ${
          isLight
            ? 'bg-white/10 border-white/20 text-white shadow-sm'
            : 'bg-navy border-navy/20 dark:bg-navy-soft dark:border-line text-white shadow-sm'
        }`}
      >
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[68%] h-[68%]"
        >
          {/* Left Academic Folio */}
          <path
            d="M5 9C8.2 8.4 11.8 9.5 14 11.8V23C11.8 20.8 8.2 19.7 5 20.3V9Z"
            fill="currentColor"
            fillOpacity="0.9"
          />
          {/* Right Academic Folio */}
          <path
            d="M23 9C19.8 8.4 16.2 9.5 14 11.8V23C16.2 20.8 19.8 19.7 23 20.3V9Z"
            fill="currentColor"
            fillOpacity="0.75"
          />
          {/* Central Upward Apex Spearhead (Score Elevation) */}
          <path
            d="M14 4.5L16.2 10.5H11.8L14 4.5Z"
            fill={isLight ? '#93C5FD' : '#3B82F6'}
          />
          {/* Center Spine Hairline */}
          <line
            x1="14"
            y1="11.5"
            x2="14"
            y2="23"
            stroke={isLight ? '#93C5FD' : '#60A5FA'}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col leading-tight select-none">
          <div className={`font-semibold tracking-tight ${titleSizes[size]} ${isLight ? 'text-white' : 'text-ink'}`}>
            <span className="font-bold tracking-tight">PREP</span>
            <span className={`font-normal text-[11px] mx-1 tracking-wider uppercase ${isLight ? 'text-white/70' : 'text-ink-muted'}`}>
              by
            </span>
            <span className="font-bold tracking-tight">Ahsan</span>
          </div>
          {showSubtitle && (
            <span
              className={`text-[9.5px] tracking-[0.18em] uppercase font-medium mt-0.5 ${
                isLight ? 'text-white/60' : 'text-ink-muted'
              }`}
            >
              Digital SAT Prep
            </span>
          )}
        </div>
      )}
    </div>
  );
}
