import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApt4lSS7MWYpZpdUicpi8PFb7h2xSilQc",
  authDomain: "pet-goodies-shop.firebaseapp.com",
  projectId: "pet-goodies-shop",
  storageBucket: "pet-goodies-shop.appspot.com",
  messagingSenderId: "431932578092",
  appId: "1:431932578092:web:48687a7962b20791f1b489"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);