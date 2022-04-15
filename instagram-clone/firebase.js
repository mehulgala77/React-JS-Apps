// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHmJPBxHQrej3Cv-nBd6_XlH6QKahse5o",
  authDomain: "insta-clone-96c48.firebaseapp.com",
  projectId: "insta-clone-96c48",
  storageBucket: "insta-clone-96c48.appspot.com",
  messagingSenderId: "584119517548",
  appId: "1:584119517548:web:66439ed536b49ce4427349"
};

// Initialize Firebase
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
