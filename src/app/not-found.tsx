import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-center font-sans">
      <h2 className="text-3xl font-extrabold text-blue-600 mb-2">404 — Page Not Found</h2>
      <p className="text-sm text-slate-500 mb-6 max-w-sm">
        The requested exam module or section could not be found.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
      >
        Return to SAT Dashboard
      </Link>
    </div>
  );
}
