// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJGYsuV7dGSjep-bM3dCigD9cppvJO-0",
  authDomain: "boat-store.firebaseapp.com",
  projectId: "boat-store",
  storageBucket: "boat-store.appspot.com",
  messagingSenderId: "448890544653",
  appId: "1:448890544653:web:0f68007ff3356743fb6b44",
  measurementId: "G-TCG1NR0V68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
