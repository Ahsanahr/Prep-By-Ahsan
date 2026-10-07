'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

interface LineReaderProps {
  isActive: boolean;
  onClose: () => void;
}

export const LineReader: React.FC<LineReaderProps> = ({ isActive, onClose }) => {
  const [topPos, setTopPos] = useState<number>(200);
  const [height, setHeight] = useState<number>(44);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isActive) return;
      if (e.key === 'ArrowUp' && e.altKey) {
        setTopPos((prev) => Math.max(80, prev - 20));
      } else if (e.key === 'ArrowDown' && e.altKey) {
        setTopPos((prev) => Math.min(window.innerHeight - 100, prev + 20));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      style={{ top: `${topPos}px`, height: `${height}px` }}
      className="fixed left-0 right-0 z-40 pointer-events-none flex items-center justify-between border-y-2 border-blue-500/80 bg-blue-100/15 dark:bg-blue-900/20 backdrop-saturate-150 transition-all duration-75 shadow-sm"
    >
      <div className="pointer-events-auto ml-4 flex items-center space-x-1 bg-slate-900/80 text-white rounded px-2 py-0.5 text-[11px] shadow">
        <span>Line Reader</span>
        <button
          onClick={() => setTopPos((prev) => Math.max(80, prev - 25))}
          className="p-0.5 hover:bg-slate-700 rounded"
          title="Move Up (Alt + Up)"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setTopPos((prev) => Math.min(window.innerHeight - 100, prev + 25))}
          className="p-0.5 hover:bg-slate-700 rounded"
          title="Move Down (Alt + Down)"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="pointer-events-auto mr-4 flex items-center space-x-1 bg-slate-900/80 text-white rounded px-2 py-0.5 text-[11px]">
        <button
          onClick={() => setHeight((h) => (h === 44 ? 72 : 44))}
          className="hover:underline text-[10px]"
        >
          {height === 44 ? 'Expand Height' : 'Normal Height'}
        </button>
        <button onClick={onClose} className="p-0.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
