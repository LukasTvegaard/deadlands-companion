// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDscpD_1xemzpZRtUNksCu92DukUMQv-Ig",
  authDomain: "deadlands-companion.firebaseapp.com",
  projectId: "deadlands-companion",
  storageBucket: "deadlands-companion.appspot.com",
  messagingSenderId: "385116220845",
  appId: "1:385116220845:web:4a7441b2c66ffd886d0524",
  databaseURL:
    "https://deadlands-companion-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = () => getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () =>
  signInWithRedirect(auth(), googleAuthProvider);

export const signOutWithGoogle = () => {
  signOut(auth());
};

export const database = () => getDatabase(app);
