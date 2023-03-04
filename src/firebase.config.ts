import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApt4lSS7MWYpZpdUicpi8PFb7h2xSilQc",
  authDomain: "pet-goodies-shop.firebaseapp.com",
  projectId: "pet-goodies-shop",
  storageBucket: "pet-goodies-shop.appspot.com",
  messagingSenderId: "431932578092",
  appId: "1:431932578092:web:48687a7962b20791f1b489"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

try {
  const usersSnapshot = await getDocs(collection(firestore, "users"));

  usersSnapshot.forEach(user => {
    console.log(`User ID: ${user.id}\nUser data - ${user.data()}`);
  })
} catch (e) {
  console.error("Error adding document: ", e);
}