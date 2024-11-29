// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCPhq6d7F11VwKYY5Tzq7_L79oK8loEos",
  authDomain: "advanceduthentucation.firebaseapp.com",
  projectId: "advanceduthentucation",
  storageBucket: "advanceduthentucation.firebasestorage.app",
  messagingSenderId: "804258118623",
  appId: "1:804258118623:web:6a97adba0537e0349c626a",
  measurementId: "G-EGM8H71W7B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);