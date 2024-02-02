// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfn02JLsUz3Qb5FUJHeTLCg0Qd2746rcs",
    authDomain: "thriftytech-6cd3e.firebaseapp.com",
    databaseURL: "https://thriftytech-6cd3e-default-rtdb.firebaseio.com",
    projectId: "thriftytech-6cd3e",
    storageBucket: "thriftytech-6cd3e.appspot.com",
    messagingSenderId: "828266544534",
    appId: "1:828266544534:web:2b133e6dd85dbe515d71b7",
    measurementId: "G-LJS4CV7CM2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const firestore = getFirestore();
const storage = getStorage(app);


export { auth, db, storage , firestore};
