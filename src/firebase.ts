
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC55D2H_E73A91zA038OVjiSAQhyKiEmtg",
    authDomain: "hiapply-9397f.firebaseapp.com",
    databaseURL: "https://hiapply-9397f-default-rtdb.firebaseio.com",
    projectId: "hiapply-9397f",
    storageBucket: "hiapply-9397f.appspot.com",
    messagingSenderId: "310854541058",
    appId: "1:310854541058:web:d5e44ff1a4475debf22c1b",
    measurementId: "G-5RQ670X4QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
