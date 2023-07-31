// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0a-iw-I1Xl9q2yEQ4Xrnq_AYUwMeXZM4",
    authDomain: "fir-auth-01-14cb8.firebaseapp.com",
    projectId: "fir-auth-01-14cb8",
    storageBucket: "fir-auth-01-14cb8.appspot.com",
    messagingSenderId: "751589027005",
    appId: "1:751589027005:web:58b9ccf5acc03102d01bd4",
    measurementId: "G-820N6XM2G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
