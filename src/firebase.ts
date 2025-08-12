import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

// Firebase configuration
// Note: In client-side apps, this configuration is not a secret. For cleaner setup,
// you can move these values to Vite env vars (VITE_*) later.
const firebaseConfig = {
  apiKey: "AIzaSyBulslAgkya5SJBxFrJbv383AWXfCy-M8U",
  authDomain: "graduate-3088f.firebaseapp.com",
  projectId: "graduate-3088f",
  storageBucket: "graduate-3088f.firebasestorage.app",
  messagingSenderId: "801256212101",
  appId: "1:801256212101:web:59f8b82582d2bba4ab4bec",
  measurementId: "G-J06KCBC5CM",
  databaseURL:
    "https://graduate-3088f-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize (and reuse on HMR) the Firebase app
export const app: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Initialize Analytics only in supported browser environments
export const analyticsPromise: Promise<Analytics | null> =
  typeof window !== "undefined"
    ? isSupported().then(supported => (supported ? getAnalytics(app) : null))
    : Promise.resolve(null);

export default app;
