'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '../../../context/AuthContext';
import { authErrorMessage } from '../../../lib/firebase';
import { Alert, Button, Card, Field } from '../../../components/ui';

export default function ResetPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      setError(authErrorMessage((err as FirebaseError).code));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="p-8">
      <h1 className="text-xl font-semibold text-ink">Reset password</h1>
      <p className="mt-1 text-sm text-ink-muted">We&apos;ll email you a link to choose a new password.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        {error && <Alert>{error}</Alert>}
        {sent && <Alert tone="success">If an account exists for {email}, a reset link is on its way.</Alert>}
        <Field label="Email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send reset link'}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-muted">
        <Link href="/login" className="font-medium text-accent hover:underline">
          Back to sign in
        </Link>
      </p>
    </Card>
  );
}
