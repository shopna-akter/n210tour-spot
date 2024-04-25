// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1sJhkdAGTohExnRMvnHAmNzQgxfF8PbQ",
  authDomain: "assignment-p10.firebaseapp.com",
  projectId: "assignment-p10",
  storageBucket: "assignment-p10.appspot.com",
  messagingSenderId: "1012029560184",
  appId: "1:1012029560184:web:5bba443b71f31313a7648d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app