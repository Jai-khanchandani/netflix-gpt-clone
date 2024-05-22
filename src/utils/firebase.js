// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvCVeQybBT16GkXhUDdF0TJ5RA1CQwgKw",
  authDomain: "netflix-gpt-clone-8a7bc.firebaseapp.com",
  projectId: "netflix-gpt-clone-8a7bc",
  storageBucket: "netflix-gpt-clone-8a7bc.appspot.com",
  messagingSenderId: "817034947295",
  appId: "1:817034947295:web:cf6c89a5834f2bd718976a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
