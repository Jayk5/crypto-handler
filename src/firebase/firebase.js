// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDO9lToy7RLuQnEb5c__7XG-6m-OssDuD0",
    authDomain: "dedprojek.firebaseapp.com",
    projectId: "dedprojek",
    storageBucket: "dedprojek.appspot.com",
    messagingSenderId: "549912871304",
    appId: "1:549912871304:web:4c87e2e5455f675bc4ba3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();