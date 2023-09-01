import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5PUn9a2Ek4hT-fbFWC47Bi8jKMaVzolE",
  authDomain: "netflix-clone-28549.firebaseapp.com",
  projectId: "netflix-clone-28549",
  storageBucket: "netflix-clone-28549.appspot.com",
  messagingSenderId: "56800396719",
  appId: "1:56800396719:web:498d63fe6ac91c2bcedb5a",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
