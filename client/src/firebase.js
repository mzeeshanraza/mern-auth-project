// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2e2d4.firebaseapp.com",
  projectId: "mern-auth-2e2d4",
  storageBucket: "mern-auth-2e2d4.firebasestorage.app",
  messagingSenderId: "588301203681",
  appId: "1:588301203681:web:295316ef0f45c85ced5fa0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
