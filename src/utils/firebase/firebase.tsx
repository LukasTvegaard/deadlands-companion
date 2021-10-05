// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDscpD_1xemzpZRtUNksCu92DukUMQv-Ig",
  authDomain: "deadlands-companion.firebaseapp.com",
  projectId: "deadlands-companion",
  storageBucket: "deadlands-companion.appspot.com",
  messagingSenderId: "385116220845",
  appId: "1:385116220845:web:4a7441b2c66ffd886d0524",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getCollection = async (collectionName: string) => {
  const column = collection(db, collectionName);
  const columnSnapshot = await getDocs(column);
  const columnList = columnSnapshot.docs.map((doc) => doc.data());
  return columnList;
};
