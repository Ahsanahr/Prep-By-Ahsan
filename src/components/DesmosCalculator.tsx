'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Minimize2, Maximize2, Move, BarChart3, Calculator, Hash, RefreshCw, PanelRightClose, PanelRightOpen } from 'lucide-react';
import { LocalCalculator } from './LocalCalculator';

interface DesmosCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'graphing' | 'scientific';
  isDocked?: boolean;
  onToggleDock?: () => void;
}

type CalcMode = 'graphing' | 'scientific' | 'fourfunction';

// Public demo key from the Desmos API docs (fine for development; use your own key in production).
const DESMOS_SRC = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

/* eslint-disable @typescript-eslint/no-explicit-any */
let desmosLoader: Promise<any> | null = null;
function loadDesmos(): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('ssr'));
  if ((window as any).Desmos) return Promise.resolve((window as any).Desmos);
  if (!desmosLoader) {
    desmosLoader = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = DESMOS_SRC;
      s.async = true;
      s.onload = () => ((window as any).Desmos ? resolve((window as any).Desmos) : reject(new Error('Desmos missing')));
      s.onerror = () => { desmosLoader = null; reject(new Error('network')); };
      document.head.appendChild(s);
    });
  }
  return desmosLoader;
}

/**
 * Pure Rectangular Calculator matching the app & Bluebook theme.
 * Supports:
 *   - Docked mode (1/3 of the screen alongside 2/3 for Math question)
 *   - Floating modal mode (pure rectangular, draggable)
 *   - Graphing (real Desmos API)
 *   - Scientific & Four-Function offline calculators
 */
export const DesmosCalculator: React.FC<DesmosCalculatorProps> = ({
  isOpen,
  onClose,
  mode = 'graphing',
  isDocked = false,
  onToggleDock,
}) => {
  const [activeMode, setActiveMode] = useState<CalcMode>(mode);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 40, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [attempt, setAttempt] = useState(0);

  const hostRef = useRef<HTMLDivElement>(null);
  const calcRef = useRef<any>(null);
  const dragStartRef = useRef({ startX: 0, startY: 0, initialX: 40, initialY: 80 });

  useEffect(() => {
    setActiveMode(mode);
  }, [mode]);

  // Create the Desmos graphing calculator once when opened
  useEffect(() => {
    if (!isOpen || calcRef.current || !hostRef.current) return;
    let cancelled = false;
    setStatus('loading');
    loadDesmos()
      .then((Desmos) => {
        if (cancelled || !hostRef.current || calcRef.current) return;
        calcRef.current = Desmos.GraphingCalculator(hostRef.current, {
          keypad: true,
          expressions: true,
          settingsMenu: true,
          zoomButtons: true,
          expressionsTopbar: true,
          pointsOfInterest: true,
          trace: true,
          border: false,
        });
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, attempt]);

  // Handle ResizeObserver so Desmos adapts immediately to layout changes
  useEffect(() => {
    if (!hostRef.current) return;
    const observer = new ResizeObserver(() => {
      if (calcRef.current && activeMode === 'graphing' && isOpen && !isMinimized) {
        calcRef.current.resize();
      }
    });
    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, [activeMode, isOpen, isMinimized]);

  // Re-trigger resize on activeMode / dock change
  useEffect(() => {
    if (activeMode === 'graphing' && isOpen && !isMinimized) {
      const t = setTimeout(() => calcRef.current?.resize(), 60);
      return () => clearTimeout(t);
    }
  }, [activeMode, isOpen, isMinimized, isDocked]);

  useEffect(() => () => {
    calcRef.current?.destroy?.();
    calcRef.current = null;
  }, []);

  // Dragging for floating mode
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDocked) return;
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: MouseEvent) => {
      const dx = e.clientX - dragStartRef.current.startX;
      const dy = e.clientY - dragStartRef.current.startY;
      setPosition({
        x: Math.max(10, Math.min(window.innerWidth - 380, dragStartRef.current.initialX + dx)),
        y: Math.max(10, Math.min(window.innerHeight - 200, dragStartRef.current.initialY + dy)),
      });
    };
    const up = () => setIsDragging(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
  }, [isDragging]);

  const tab = (m: CalcMode, label: string, icon: React.ReactNode) => (
    <button
      onClick={() => setActiveMode(m)}
      className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-none transition-colors border ${
        activeMode === m
          ? 'bg-accent text-white border-accent shadow-sm'
          : 'bg-surface text-ink-muted border-line hover:text-ink hover:bg-surface-muted'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  if (!isOpen) return null;

  // DOCKED CONTAINER (Pure rectangular, fits perfectly in dedicated 1/3 math panel)
  if (isDocked) {
    return (
      <div className="w-full h-full flex flex-col bg-surface border-line rounded-none overflow-hidden select-none">
        {/* Header matching theme */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-surface-muted text-ink border-b border-line rounded-none">
          <div className="flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-ink">
            <Calculator className="w-4 h-4 text-accent" />
            <span>DESMOS GRAPHING CALCULATOR</span>
          </div>
          <div className="flex items-center space-x-1">
            {onToggleDock && (
              <button
                onClick={onToggleDock}
                className="p-1 hover:bg-surface text-ink-muted hover:text-ink rounded-none border border-transparent hover:border-line"
                title="Pop out floating window"
              >
                <PanelRightClose className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 hover:bg-danger hover:text-white text-ink-muted rounded-none transition-colors"
              title="Close Calculator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Calculator Mode Tabs */}
        <div className="flex items-center border-b border-line bg-surface-muted px-3 py-2 space-x-2 rounded-none">
          {tab('graphing', 'Graphing', <BarChart3 className="w-3.5 h-3.5" />)}
          {tab('scientific', 'Scientific', <Calculator className="w-3.5 h-3.5" />)}
          {tab('fourfunction', 'Four-Function', <Hash className="w-3.5 h-3.5" />)}
        </div>

        {/* Workspace Canvas (pure rectangular) */}
        <div className="flex-1 min-h-0 relative bg-white overflow-hidden rounded-none">
          <div
            className="absolute inset-0"
            style={{ display: activeMode === 'graphing' ? 'block' : 'none' }}
          >
            <div ref={hostRef} className="w-full h-full" />
            {status === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-ink-muted bg-white">
                Loading Desmos Graphing Calculator…
              </div>
            )}
            {status === 'error' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-ink bg-white p-6 text-center">
                <p>Desmos could not load. Check your internet connection.</p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setAttempt((a) => a + 1);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-none"
                >
                  <RefreshCw className="w-4 h-4" /> Retry
                </button>
                <p className="text-xs text-ink-muted">The Scientific and Four-Function calculators work offline.</p>
              </div>
            )}
          </div>
          {activeMode !== 'graphing' && <LocalCalculator key={activeMode} mode={activeMode} />}
        </div>
      </div>
    );
  }

  // FLOATING CONTAINER (Pure rectangular, sharp edges, matching theme)
  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={`fixed z-50 rounded-none shadow-2xl border-2 border-line bg-surface flex flex-col ${
        isMinimized ? 'w-80 h-12' : 'w-[580px] max-w-[95vw] h-[600px]'
      }`}
    >
      <div
        onMouseDown={handleMouseDown}
        className="flex items-center justify-between px-4 py-2.5 bg-surface-muted text-ink border-b border-line cursor-move select-none rounded-none"
      >
        <div className="flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-ink">
          <Move className="w-3.5 h-3.5 text-accent" />
          <span>CALCULATOR</span>
        </div>
        <div className="flex items-center space-x-1" onMouseDown={(e) => e.stopPropagation()}>
          {onToggleDock && (
            <button
              onClick={onToggleDock}
              className="p-1 hover:bg-surface text-ink-muted hover:text-ink rounded-none border border-transparent hover:border-line"
              title="Dock to side workspace"
            >
              <PanelRightOpen className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-surface text-ink-muted hover:text-ink rounded-none"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-danger hover:text-white text-ink-muted rounded-none transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex items-center border-b border-line bg-surface-muted px-3 py-2 space-x-2 rounded-none">
            {tab('graphing', 'Graphing', <BarChart3 className="w-3.5 h-3.5" />)}
            {tab('scientific', 'Scientific', <Calculator className="w-3.5 h-3.5" />)}
            {tab('fourfunction', 'Four-Function', <Hash className="w-3.5 h-3.5" />)}
          </div>

          <div className="flex-1 min-h-0 relative bg-white overflow-hidden rounded-none">
            <div
              className="absolute inset-0"
              style={{ display: activeMode === 'graphing' ? 'block' : 'none' }}
            >
              <div ref={hostRef} className="w-full h-full" />
              {status === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-ink-muted bg-white">
                  Loading Desmos…
                </div>
              )}
              {status === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-ink bg-white p-6 text-center">
                  <p>Desmos could not load. Check your internet connection.</p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setAttempt((a) => a + 1);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-none"
                  >
                    <RefreshCw className="w-4 h-4" /> Retry
                  </button>
                  <p className="text-xs text-ink-muted">The Scientific and Four-Function calculators work offline.</p>
                </div>
              )}
            </div>
            {activeMode !== 'graphing' && <LocalCalculator key={activeMode} mode={activeMode} />}
          </div>
        </>
      )}
    </div>
  );
};
