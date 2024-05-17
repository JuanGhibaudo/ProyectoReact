// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaslT-_vONhqDMR2ZhgdAFRDkpySI21M",
  authDomain: "login-react-80b59.firebaseapp.com",
  projectId: "login-react-80b59",
  storageBucket: "login-react-80b59.appspot.com",
  messagingSenderId: "409393505987",
  appId: "1:409393505987:web:38ceb3b4da7d2a0fdfa476",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;