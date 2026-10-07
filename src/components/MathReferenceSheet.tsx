'use client';

import React from 'react';
import { X, BookOpen } from 'lucide-react';

interface MathReferenceSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MathReferenceSheet: React.FC<MathReferenceSheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col text-slate-900 dark:text-zinc-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/80 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-base font-bold tracking-wide uppercase">Math Reference Sheet</h2>
            <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">(Digital SAT Official)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Top Formula Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Circle */}
            <div className="border border-slate-200 dark:border-zinc-800 rounded p-3 text-center bg-slate-50/50 dark:bg-zinc-800/40">
              <svg className="w-20 h-20 mx-auto my-1" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600 dark:text-blue-400" />
                <line x1="50" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-slate-700 dark:text-zinc-300" />
                <text x="65" y="45" fontSize="12" fill="currentColor">r</text>
              </svg>
              <div className="font-semibold text-xs mt-1">A = πr²</div>
              <div className="text-xs text-slate-600 dark:text-zinc-400">C = 2πr</div>
            </div>

            {/* Rectangle */}
            <div className="border border-slate-200 dark:border-zinc-800 rounded p-3 text-center bg-slate-50/50 dark:bg-zinc-800/40">
              <svg className="w-20 h-20 mx-auto my-1" viewBox="0 0 100 100">
                <rect x="20" y="30" width="60" height="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600 dark:text-blue-400" />
                <text x="47" y="24" fontSize="12" fill="currentColor">ℓ</text>
                <text x="84" y="54" fontSize="12" fill="currentColor">w</text>
              </svg>
              <div className="font-semibold text-xs mt-1">A = ℓw</div>
            </div>

            {/* Triangle */}
            <div className="border border-slate-200 dark:border-zinc-800 rounded p-3 text-center bg-slate-50/50 dark:bg-zinc-800/40">
              <svg className="w-20 h-20 mx-auto my-1" viewBox="0 0 100 100">
                <polygon points="20,70 80,70 50,25" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600 dark:text-blue-400" />
                <line x1="50" y1="25" x2="50" y2="70" stroke="currentColor" strokeDasharray="3,3" strokeWidth="1.5" className="text-slate-600" />
                <text x="54" y="50" fontSize="12" fill="currentColor">h</text>
                <text x="48" y="85" fontSize="12" fill="currentColor">b</text>
              </svg>
              <div className="font-semibold text-xs mt-1">A = ½bh</div>
            </div>

            {/* Pythagorean Theorem */}
            <div className="border border-slate-200 dark:border-zinc-800 rounded p-3 text-center bg-slate-50/50 dark:bg-zinc-800/40">
              <svg className="w-20 h-20 mx-auto my-1" viewBox="0 0 100 100">
                <polygon points="25,70 75,70 75,30" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600 dark:text-blue-400" />
                <rect x="67" y="62" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="none" />
                <text x="45" y="85" fontSize="12" fill="currentColor">a</text>
                <text x="80" y="52" fontSize="12" fill="currentColor">b</text>
                <text x="43" y="45" fontSize="12" fill="currentColor">c</text>
              </svg>
              <div className="font-semibold text-xs mt-1">c² = a² + b²</div>
            </div>
          </div>

          {/* Special Right Triangles */}
          <div>
            <h3 className="font-bold text-xs uppercase text-slate-500 dark:text-zinc-400 mb-2">Special Right Triangles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 dark:border-zinc-800 rounded p-4 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-800/40">
                <svg className="w-32 h-24" viewBox="0 0 140 100">
                  <polygon points="20,80 120,80 20,20" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600" />
                  <rect x="20" y="70" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
                  <text x="5" y="55" fontSize="12" fill="currentColor">x</text>
                  <text x="65" y="95" fontSize="12" fill="currentColor">x√3</text>
                  <text x="75" y="45" fontSize="12" fill="currentColor">2x</text>
                  <text x="32" y="32" fontSize="10" fill="currentColor">60°</text>
                  <text x="95" y="75" fontSize="10" fill="currentColor">30°</text>
                </svg>
                <div className="text-right text-xs space-y-1">
                  <div className="font-bold text-slate-800 dark:text-zinc-200">30° - 60° - 90°</div>
                  <div className="text-slate-500">Side opposite 30° = x</div>
                  <div className="text-slate-500">Side opposite 60° = x√3</div>
                  <div className="text-slate-500">Hypotenuse = 2x</div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-zinc-800 rounded p-4 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-800/40">
                <svg className="w-28 h-24" viewBox="0 0 120 100">
                  <polygon points="20,80 90,80 20,10" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600" />
                  <rect x="20" y="70" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
                  <text x="8" y="50" fontSize="12" fill="currentColor">s</text>
                  <text x="50" y="95" fontSize="12" fill="currentColor">s</text>
                  <text x="60" y="42" fontSize="12" fill="currentColor">s√2</text>
                  <text x="30" y="25" fontSize="10" fill="currentColor">45°</text>
                  <text x="70" y="75" fontSize="10" fill="currentColor">45°</text>
                </svg>
                <div className="text-right text-xs space-y-1">
                  <div className="font-bold text-slate-800 dark:text-zinc-200">45° - 45° - 90°</div>
                  <div className="text-slate-500">Legs = s</div>
                  <div className="text-slate-500">Hypotenuse = s√2</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Volumes */}
          <div>
            <h3 className="font-bold text-xs uppercase text-slate-500 dark:text-zinc-400 mb-2">Volume Formulas</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center text-xs">
              <div className="border border-slate-200 dark:border-zinc-800 rounded p-2 bg-slate-50/50 dark:bg-zinc-800/40">
                <div className="font-semibold text-slate-700 dark:text-zinc-300">Rectangular Prism</div>
                <div className="font-mono mt-1 text-blue-600 dark:text-blue-400 font-bold">V = ℓwh</div>
              </div>
              <div className="border border-slate-200 dark:border-zinc-800 rounded p-2 bg-slate-50/50 dark:bg-zinc-800/40">
                <div className="font-semibold text-slate-700 dark:text-zinc-300">Right Cylinder</div>
                <div className="font-mono mt-1 text-blue-600 dark:text-blue-400 font-bold">V = πr²h</div>
              </div>
              <div className="border border-slate-200 dark:border-zinc-800 rounded p-2 bg-slate-50/50 dark:bg-zinc-800/40">
                <div className="font-semibold text-slate-700 dark:text-zinc-300">Sphere</div>
                <div className="font-mono mt-1 text-blue-600 dark:text-blue-400 font-bold">V = ⁴⁄₃πr³</div>
              </div>
              <div className="border border-slate-200 dark:border-zinc-800 rounded p-2 bg-slate-50/50 dark:bg-zinc-800/40">
                <div className="font-semibold text-slate-700 dark:text-zinc-300">Right Cone</div>
                <div className="font-mono mt-1 text-blue-600 dark:text-blue-400 font-bold">V = ⅓πr²h</div>
              </div>
              <div className="border border-slate-200 dark:border-zinc-800 rounded p-2 bg-slate-50/50 dark:bg-zinc-800/40">
                <div className="font-semibold text-slate-700 dark:text-zinc-300">Pyramid</div>
                <div className="font-mono mt-1 text-blue-600 dark:text-blue-400 font-bold">V = ⅓ℓwh</div>
              </div>
            </div>
          </div>

          {/* Official Core Facts */}
          <div className="border-t border-slate-200 dark:border-zinc-800 pt-4 text-xs text-slate-600 dark:text-zinc-400 space-y-1">
            <p>• The number of degrees of arc in a circle is 360.</p>
            <p>• The number of radians of arc in a circle is 2π.</p>
            <p>• The sum of the measures in degrees of the angles of a triangle is 180.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/80 flex justify-end rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
};
