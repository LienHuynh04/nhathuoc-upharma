import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBhv3EANXzaCMWdNSgsSGVtcsY6nj6rQRY",
  authDomain: "angular-demo-1c0ea.firebaseapp.com",
  databaseURL: "https://angular-demo-1c0ea.firebaseio.com",
  projectId: "angular-demo-1c0ea",
  storageBucket: "angular-demo-1c0ea.firebasestorage.app",
  messagingSenderId: "1037695697379",
  appId: "1:1037695697379:web:1121ff86dfe88f16bfe0d6",
  measurementId: "G-XMDTWC7W4Q"
};

// Initialize Firebase
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics (safely check for browser environment support)
export let analytics: any = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((err) => {
    console.warn('Firebase Analytics not supported in this environment:', err);
  });
}
