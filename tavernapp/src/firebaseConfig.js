// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaYrG4LrZWEJI2vOw1BccwrDJNMin_yK8",
  authDomain: "the-tavern-8aaf4.firebaseapp.com",
  projectId: "the-tavern-8aaf4",
  storageBucket: "the-tavern-8aaf4.appspot.com",
  messagingSenderId: "405232081907",
  appId: "1:405232081907:web:e9865b10cd4c439c3c1086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);