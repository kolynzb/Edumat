// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYG3THAjc4J-1wB8l1tWlwfvJEIYcjsek",
  authDomain: "edumat-7efb4.firebaseapp.com",
  projectId: "edumat-7efb4",
  storageBucket: "edumat-7efb4.appspot.com",
  messagingSenderId: "634970576519",
  appId: "1:634970576519:web:e5ae1f8afd601a5c21ca22",
  measurementId: "G-6XF7FFKR00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
