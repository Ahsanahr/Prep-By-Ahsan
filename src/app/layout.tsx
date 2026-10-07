import type { Metadata } from 'next';
import { Inter, Source_Serif_4, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const serif = Source_Serif_4({ variable: '--font-serif-body', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PREP BY Ahsan — Digital SAT Prep',
  description: 'PREP BY Ahsan - Digital SAT practice, custom tests and full-length mock exams.',
};

// Applies the saved theme before first paint so there is no light/dark flash.
const themeScript = `
try {
  var t = localStorage.getItem('sat_theme');
  if (t === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${serif.variable} ${mono.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-bg text-ink">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
