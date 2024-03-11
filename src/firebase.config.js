// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsB22VHkINY6GbgMikeOI0MlJMW9Jn_A",
  authDomain: "otp-project-98a64.firebaseapp.com",
  projectId: "otp-project-98a64",
  storageBucket: "otp-project-98a64.appspot.com",
  messagingSenderId: "628400361589",
  appId: "1:628400361589:web:e6985efca7012d2916e83c",
  measurementId: "G-VZKMP6ECTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
