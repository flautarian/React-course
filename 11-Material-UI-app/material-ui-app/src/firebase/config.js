// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3VX7Ouf4miS0FNeBkYxdCFTFXuPP4RTE",
  authDomain: "react-curso-e10e7.firebaseapp.com",
  projectId: "react-curso-e10e7",
  storageBucket: "react-curso-e10e7.appspot.com",
  messagingSenderId: "47418528891",
  appId: "1:47418528891:web:eb42b427f6478122cb7ede"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);