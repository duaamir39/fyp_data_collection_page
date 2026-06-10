import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase configuration using NEXT_PUBLIC prefixed environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if all configuration parameters are present (to avoid crashing if unset)
const isFirebaseConfigured = 
  firebaseConfig.apiKey && 
  firebaseConfig.authDomain && 
  firebaseConfig.projectId;

let db: any = null;

if (isFirebaseConfigured) {
  try {
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
} else {
  console.warn(
    "Firebase environment variables are missing. SOHO Shield AI is running in mock submission mode."
  );
}

export interface PilotRegistrationData {
  fullName: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  deviceCount: string;
  email: string;
  phone: string;
  biggestChallenge: string;
}

/**
 * Registers interest for the pilot program.
 * Saves to Firebase Firestore if configured, otherwise falls back to saving to localStorage.
 */
export async function registerPilotInterest(data: PilotRegistrationData): Promise<{ success: boolean; id?: string }> {
  const timestampedData = {
    ...data,
    submittedAt: new Date().toISOString(),
    // Firestore native timestamp will be added on the server, but for mock, ISO string is fine.
  };

  if (db) {
    const timeoutPromise = new Promise<{ success: boolean; id?: string }>((_, reject) =>
      setTimeout(() => {
        reject(
          new Error(
            "Firebase connection timed out. Please ensure that: 1. You restarted the dev server after adding variables. 2. Your Cloud Firestore Database is created in the Firebase console. 3. Firestore security rules allow public writes (e.g. 'allow read, write: if true;')."
          )
        );
      }, 6000)
    );

    try {
      const uploadPromise = (async () => {
        const docRef = await addDoc(collection(db, "registrations"), {
          ...timestampedData,
          submittedAt: serverTimestamp(),
        });
        return { success: true, id: docRef.id };
      })();

      return await Promise.race([uploadPromise, timeoutPromise]);
    } catch (error) {
      console.error("Firestore submission failed:", error);
      throw error;
    }
  } else {
    // Fallback: Save to LocalStorage to simulate db persistence during testing
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const currentRegistrations = JSON.parse(
            localStorage.getItem("soho_shield_registrations") || "[]"
          );
          currentRegistrations.push(timestampedData);
          localStorage.setItem(
            "soho_shield_registrations",
            JSON.stringify(currentRegistrations)
          );
          console.log("Registered (Mock Storage):", timestampedData);
          resolve({ success: true, id: `mock-${Math.random().toString(36).substr(2, 9)}` });
        } catch (error) {
          console.error("Mock submission failed:", error);
          resolve({ success: false });
        }
      }, 800); // simulate realistic network delay
    });
  }
}
