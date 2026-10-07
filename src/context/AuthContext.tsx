'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth, upsertUserProfile } from '../lib/firebase';
import { trackAuthEvent } from '../lib/analytics';

export interface AuthUser {
  uid: string;
  email: string;
  displayName: string;
  isGuest?: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  /** true until Firebase has reported the initial auth state */
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function toAuthUser(u: { uid: string; email: string | null; displayName: string | null }): AuthUser {
  return {
    uid: u.uid,
    email: u.email ?? '',
    displayName: u.displayName || (u.email ? u.email.split('@')[0] : 'Student'),
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGuestSession, setIsGuestSession] = useState(false);

  useEffect(() => {
    // Firebase is the single source of truth for the session. No local fallbacks.
    return onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        setIsGuestSession(false);
        setUser(toAuthUser(fbUser));
      } else if (!isGuestSession) {
        setUser(null);
      }
      setLoading(false);
    });
  }, [isGuestSession]);

  // Errors are intentionally NOT caught here — callers show them to the user.
  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email.trim(), password);
    await trackAuthEvent('login', 'email');
  };

  const signUp = async (name: string, email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
    const displayName = name.trim() || email.split('@')[0];
    await updateProfile(cred.user, { displayName });
    setUser(toAuthUser({ ...cred.user, displayName }));
    await upsertUserProfile(cred.user.uid, { email: cred.user.email ?? email, displayName });
    await trackAuthEvent('signup', 'email');
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email.trim());
  };

  const loginAsGuest = () => {
    setIsGuestSession(true);
    setUser({ uid: 'guest', email: 'Guest User', displayName: 'Guest', isGuest: true });
    trackAuthEvent('login', 'guest').catch(console.error);
  };

  const logout = async () => {
    setIsGuestSession(false);
    await signOut(auth);
    setUser(null);
    await trackAuthEvent('logout');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, resetPassword, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
