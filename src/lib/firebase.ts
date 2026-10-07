import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import {
  initializeFirestore,
  getFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  Firestore,
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore';
import { TestResultSummary } from '../types/sat';

// Firebase web config is public by design; access is controlled by Auth + Firestore security rules.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyAjJYRtbfa7zrdL-QX0b1TcfT8MYvA7ex8',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? 'sat-prep-by-ahsan.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'sat-prep-by-ahsan',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? 'sat-prep-by-ahsan.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '158507420044',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '1:158507420044:web:853ab676cc75bb68726ea9',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? 'G-BZ2X2W21WB',
};

const isNew = getApps().length === 0;
export const app: FirebaseApp = isNew ? initializeApp(firebaseConfig) : getApp();
export const auth: Auth = getAuth(app);

// Firestore: offline cache in the browser so answers survive a dropped connection.
// ignoreUndefinedProperties avoids rejected writes when optional fields are absent.
function createDb(): Firestore {
  if (!isNew) return getFirestore(app);
  if (typeof window === 'undefined') {
    return initializeFirestore(app, { ignoreUndefinedProperties: true });
  }
  return initializeFirestore(app, {
    ignoreUndefinedProperties: true,
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
  });
}
export const db: Firestore = createDb();

// Analytics is optional and browser-only.
if (typeof window !== 'undefined') {
  import('firebase/analytics')
    .then(({ isSupported, getAnalytics }) => isSupported().then((ok) => ok && getAnalytics(app)))
    .catch(() => {
      /* analytics blocked (e.g. ad blocker) — app works without it */
    });
}

// ---------- User profile ----------

export async function upsertUserProfile(uid: string, data: { email: string; displayName: string }) {
  if (uid === 'guest') return;
  await setDoc(
    doc(db, 'users', uid),
    { ...data, updatedAt: serverTimestamp() },
    { merge: true }
  );
}

// ---------- Attempts ----------

export async function saveAttempt(uid: string, result: TestResultSummary): Promise<void> {
  if (uid === 'guest') {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('guest_attempts') || '{}');
      saved[result.testId] = result;
      localStorage.setItem('guest_attempts', JSON.stringify(saved));
    }
    return;
  }
  await setDoc(doc(db, 'users', uid, 'attempts', result.testId), {
    ...result,
    createdAt: serverTimestamp(),
  });
}

export async function loadAttempts(uid: string, max = 100): Promise<TestResultSummary[]> {
  if (uid === 'guest') {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('guest_attempts') || '{}');
      return Object.values(saved);
    }
    return [];
  }
  const q = query(collection(db, 'users', uid, 'attempts'), orderBy('createdAt', 'desc'), limit(max));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data() as TestResultSummary & { createdAt?: { toMillis?: () => number } | null };
    const { createdAt, ...rest } = data;
    return { ...rest, createdAtMs: createdAt?.toMillis?.() } as TestResultSummary;
  });
}

// ---------- Auth error messages ----------

export function authErrorMessage(code: string | undefined): string {
  switch (code) {
    case 'auth/invalid-email':
      return 'That email address is not valid.';
    case 'auth/missing-password':
      return 'Please enter your password.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Incorrect email or password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Try signing in.';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait a moment and try again.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is not enabled for this Firebase project.';
    default:
      return 'Something went wrong. Please try again.';
  }
}


export interface InProgressAttempt {
  testId: string;
  title?: string;
  mode?: string;
  moduleIndex: number;
  currentIndex: number;
  answers: Record<string, any>;
  elapsedSeconds: number;
  accumulatedResults: any[];
  updatedAt?: any;
  questions?: any[];
  config?: any;
}

export async function saveInProgressAttempt(uid: string, attempt: InProgressAttempt): Promise<void> {
  if (uid === 'guest') {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('guest_in_progress') || '{}');
      saved[attempt.testId] = attempt;
      localStorage.setItem('guest_in_progress', JSON.stringify(saved));
    }
    return;
  }
  await setDoc(doc(db, 'users', uid, 'in_progress', attempt.testId), {
    ...attempt,
    updatedAt: serverTimestamp(),
  });
}

export async function loadInProgressAttempts(uid: string): Promise<Record<string, InProgressAttempt>> {
  if (uid === 'guest') {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('guest_in_progress') || '{}');
    }
    return {};
  }
  const snap = await getDocs(collection(db, 'users', uid, 'in_progress'));
  const res: Record<string, InProgressAttempt> = {};
  snap.docs.forEach(d => { res[d.id] = d.data() as InProgressAttempt; });
  return res;
}

export async function deleteInProgressAttempt(uid: string, testId: string): Promise<void> {
  if (uid === 'guest') {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('guest_in_progress') || '{}');
      delete saved[testId];
      localStorage.setItem('guest_in_progress', JSON.stringify(saved));
    }
    return;
  }
  await deleteDoc(doc(db, 'users', uid, 'in_progress', testId));
}
