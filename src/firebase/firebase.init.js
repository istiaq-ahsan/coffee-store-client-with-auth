// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz-R9cXYiG9u99Y344Bf4lXYZ_iAfoHqk",
    authDomain: "coffee-store-59ea8.firebaseapp.com",
    projectId: "coffee-store-59ea8",
    storageBucket: "coffee-store-59ea8.firebasestorage.app",
    messagingSenderId: "892996828885",
    appId: "1:892996828885:web:3681a466feee5f1c28ec5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);