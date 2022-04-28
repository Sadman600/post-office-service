// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDETKMh-l68csnCW-KbTDtIJ3WI_OhEwuA",
    authDomain: "post-office-service-15280.firebaseapp.com",
    projectId: "post-office-service-15280",
    storageBucket: "post-office-service-15280.appspot.com",
    messagingSenderId: "426481740649",
    appId: "1:426481740649:web:d27dfb81cd2eba54d7abf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;