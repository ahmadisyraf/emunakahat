// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIx40Dx9aDwYunfnAaeHcqouGxGtKHCcA",
    authDomain: "e-munakahat.firebaseapp.com",
    projectId: "e-munakahat",
    storageBucket: "e-munakahat.appspot.com",
    messagingSenderId: "1089318895911",
    appId: "1:1089318895911:web:af5d16c0776d6089bba902",
    measurementId: "G-QREBTNR0H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);