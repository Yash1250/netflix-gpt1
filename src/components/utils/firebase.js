// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNk8yPxA1Z17aO073mVIJ7RJcaQlfUX1c",
  authDomain: "netflixgpt-12.firebaseapp.com",
  projectId: "netflixgpt-12",
  storageBucket: "netflixgpt-12.appspot.com",
  messagingSenderId: "77516900408",
  appId: "1:77516900408:web:f9f26648bdee29c80abecd",
  measurementId: "G-E4XDQ83X2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();