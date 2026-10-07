'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '../../../context/AuthContext';
import { authErrorMessage } from '../../../lib/firebase';
import { Alert, Button, Card, Field } from '../../../components/ui';

export default function LoginPage() {
  const { signIn, loginAsGuest } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await signIn(email, password);
      // AuthLayout redirects once Firebase reports the signed-in user.
    } catch (err) {
      setError(authErrorMessage((err as FirebaseError).code));
      setSubmitting(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
  };

  return (
    <Card className="p-8">
      <h1 className="text-xl font-semibold text-ink">Sign in</h1>
      <p className="mt-1 text-sm text-ink-muted">Continue your Digital SAT preparation.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        {error && <Alert>{error}</Alert>}
        <Field label="Email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end">
          <Link href="/reset" className="text-xs font-medium text-accent hover:underline">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>

      <div className="mt-6 relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-line"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-surface px-2 text-sm text-ink-muted">or</span>
        </div>
      </div>

      <Button variant="secondary" className="w-full mt-6" onClick={handleGuestLogin}>
        Continue without login
      </Button>

      <p className="mt-6 text-center text-sm text-ink-muted">
        New here?{' '}
        <Link href="/signup" className="font-medium text-accent hover:underline">
          Create an account
        </Link>
      </p>
    </Card>
  );
}
