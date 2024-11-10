// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUfBtaCMekc4TsIjLyCJL5MRlq-mG2L0",
  authDomain: "react-learn-db6ee.firebaseapp.com",
  projectId: "react-learn-db6ee",
  storageBucket: "react-learn-db6ee.firebasestorage.app",
  messagingSenderId: "927471369255",
  appId: "1:927471369255:web:ds650f66f30363985e26202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db=getFirestore(app);