// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ccvitb-blog.firebaseapp.com",
  projectId: "ccvitb-blog",
  storageBucket: "ccvitb-blog.appspot.com",
  messagingSenderId: "718096967676",
  appId: "1:718096967676:web:a78897142e273e247af479"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);