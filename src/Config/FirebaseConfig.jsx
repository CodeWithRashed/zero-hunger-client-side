
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9vMHkZG0h2p7Ii8R0OYfsGel8YyO2c9k",
    authDomain: "zero-hunger-a4e14.firebaseapp.com",
    projectId: "zero-hunger-a4e14",
    storageBucket: "zero-hunger-a4e14.appspot.com",
    messagingSenderId: "449806050301",
    appId: "1:449806050301:web:2ca4db38fa91165057af94"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);