// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkikVTVzP5_f8BYMSXvRlHWSHMM1JDpCQ",
  authDomain: "floransbelleza-2c9d6.firebaseapp.com",
  projectId: "floransbelleza-2c9d6",
  storageBucket: "floransbelleza-2c9d6.appspot.com",
  messagingSenderId: "265015141400",
  appId: "1:265015141400:web:d5f7860314c237a668cf6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
