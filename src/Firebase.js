import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
  authDomain: "gamer-data-5885f.firebaseapp.com",
  projectId: "gamer-data-5885f",
  storageBucket: "gamer-data-5885f.appspot.com",
  messagingSenderId: "1038953670203",
  appId: "1:1038953670203:web:db7a836100d70b87921e1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
