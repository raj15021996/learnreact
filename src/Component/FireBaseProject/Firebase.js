import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtFlp-U7zqMq3tPyxfp5q6yJw8qLTE2yc",
  authDomain: "authentication-app-cc131.firebaseapp.com",
  projectId: "authentication-app-cc131",
  storageBucket: "authentication-app-cc131.appspot.com",
  messagingSenderId: "702891901802",
  appId: "1:702891901802:web:a5f46a86deed4e05019b13",
  measurementId: "G-PQ7QG5HN43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
