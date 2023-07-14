// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpyD9antdqHWAJDezUYtc1jXOzWvfIGis",
  authDomain: "realtor-clone-react-7bc8c.firebaseapp.com",
  projectId: "realtor-clone-react-7bc8c",
  storageBucket: "realtor-clone-react-7bc8c.appspot.com",
  messagingSenderId: "566118042630",
  appId: "1:566118042630:web:307bb7f811c5537809c787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()