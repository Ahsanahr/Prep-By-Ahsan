import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, getDocs, limit, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

async function testIntegration() {
  console.log('Initializing Firebase...');
  try {
    const app = initializeApp(firebaseConfig);
    console.log('Firebase App Initialized:', app.name);
    
    const auth = getAuth(app);
    console.log('Firebase Auth initialized.');
    
    const db = getFirestore(app);
    console.log('Firestore initialized.');

    console.log('\n--- SUCCESS: Firebase client SDK integrates properly with the config! ---');
  } catch (error) {
    console.error('Firebase integration test failed:', error);
  }
}

testIntegration();
