'use client';

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

/**
 * High-fidelity Math & LaTeX Renderer for Digital SAT
 * Automatically detects:
 * - Block math: $$ ... $$ or \[ ... \]
 * - Inline math: $ ... $ or \( ... \)
 * - Regular text interspersed with formulas
 */
export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  className = '',
  block = false,
}) => {
  if (!content) return null;

  // Split content by LaTeX delimiters ($$ ... $$, $ ... $, \( ... \), \[ ... \])
  const renderFormattedText = (text: string) => {
    // Regex matches $$...$$, $...$, \[...\], \(...\), and markdown images ![alt](src)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([^\n]+?\\\)|!\[.*?\]\(.*?\))/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;

      // Display Math ($$ or \[)
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const formula = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
          return (
            <span
              key={index}
              className="my-3 block text-center overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          return <span key={index} className="font-mono text-rose-500">{formula}</span>;
        }
      }

      if (part.startsWith('\\[') && part.endsWith('\\]')) {
        const formula = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
          return (
            <span
              key={index}
              className="my-3 block text-center overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          return <span key={index} className="font-mono text-rose-500">{formula}</span>;
        }
      }

      // Inline Math ($ or \()
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const formula = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
            strict: false,
          });
          return (
            <span
              key={index}
              className="inline-block px-0.5 align-middle"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          return <span key={index} className="font-mono text-rose-500">{formula}</span>;
        }
      }

      if (part.startsWith('\\(') && part.endsWith('\\)')) {
        const formula = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
            strict: false,
          });
          return (
            <span
              key={index}
              className="inline-block px-0.5 align-middle"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          return <span key={index} className="font-mono text-rose-500">{formula}</span>;
        }
      }

      // Markdown Image ![alt](src)
      const imgMatch = part.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={imgMatch[2]}
            alt={imgMatch[1]}
            className="inline-block max-h-32 object-contain align-middle"
          />
        );
      }

      // Plain text (handles linebreaks)
      return (
        <span key={index} className="whitespace-pre-wrap">
          {part}
        </span>
      );
    });
  };

  return <div className={`leading-relaxed ${className}`}>{renderFormattedText(content)}</div>;
};
