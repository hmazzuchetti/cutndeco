// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5MAbj2XsHejtyQ15EPaMW3U7lozACn_U",
    authDomain: "cutndeco-94a6a.firebaseapp.com",
    projectId: "cutndeco-94a6a",
    storageBucket: "cutndeco-94a6a.appspot.com",
    messagingSenderId: "333187562161",
    appId: "1:333187562161:web:66ad9d4cef2e9317be8090",
    measurementId: "G-P24T7HQCWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
