import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1b14gGHUCs_S5JmIzYwcternG7-tdW50",
  authDomain: "netflixgpt-9194c.firebaseapp.com",
  projectId: "netflixgpt-9194c",
  storageBucket: "netflixgpt-9194c.firebasestorage.app",
  messagingSenderId: "570350953250",
  appId: "1:570350953250:web:03f831a8b6bae728ce7b7b",
  measurementId: "G-710N43G8P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();