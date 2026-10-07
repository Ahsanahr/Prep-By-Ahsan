import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db, auth } from './firebase';

export type AnalyticEvent = {
  id?: string;
  eventName: string;
  userId: string;
  metadata: Record<string, unknown>;
  timestamp: unknown;
};

/** Safely convert a Firestore Timestamp (or pending serverTimestamp) to a Date. */
export function eventDate(e: AnalyticEvent): Date {
  const ts = e.timestamp as { toDate?: () => Date } | null | undefined;
  // A just-written event has a null timestamp until the server confirms it: treat as "now".
  return ts && typeof ts.toDate === 'function' ? ts.toDate() : new Date();
}

/**
 * Core function to log an event to Firestore.
 */
export async function logEvent(eventName: string, metadata: Record<string, unknown> = {}) {
  try {
    const user = auth.currentUser;
    const event: AnalyticEvent = {
      eventName,
      userId: user ? user.uid : 'anonymous',
      metadata,
      timestamp: serverTimestamp(),
    };

    await addDoc(collection(db, 'analytics_events'), event);
  } catch (error) {
    // Fail silently so analytics don't break the app
    console.error('Error logging analytics event:', error);
  }
}

/**
 * Track user navigation/page views.
 */
export async function trackPageView(pageUrl: string) {
  await logEvent('page_view', { pageUrl });
}

/**
 * Track authentication success/failure.
 */
export async function trackAuthEvent(action: 'login' | 'signup' | 'logout', method: string = 'email') {
  await logEvent(`auth_${action}`, { method });
}

/**
 * Track specific feature usage (e.g., clicking a button, completing a test).
 */
export async function trackFeatureUsage(featureName: string, actionDetails: Record<string, unknown> = {}) {
  await logEvent('feature_usage', { featureName, ...actionDetails });
}

/**
 * Admin function: Fetch recent events for a dashboard.
 */
export async function fetchRecentEvents(maxCount = 100): Promise<AnalyticEvent[]> {
  try {
    const q = query(collection(db, 'analytics_events'), orderBy('timestamp', 'desc'), limit(maxCount));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as AnalyticEvent) }));
  } catch (error) {
    console.error('Error fetching analytics events:', error);
    return [];
  }
}

/**
 * Admin function: events since a date (newest first). Throws on failure so the UI can show the real error.
 */
export async function fetchEventsSince(since: Date | null, maxCount = 3000): Promise<AnalyticEvent[]> {
  const col = collection(db, 'analytics_events');
  const q = since
    ? query(col, where('timestamp', '>=', Timestamp.fromDate(since)), orderBy('timestamp', 'desc'), limit(maxCount))
    : query(col, orderBy('timestamp', 'desc'), limit(maxCount));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as AnalyticEvent) }));
}
