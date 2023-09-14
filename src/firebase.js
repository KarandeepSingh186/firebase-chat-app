// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6jCnqrm9xTVp9AYP_yZNF5VsSWtOSyFg",
  authDomain: "chat-app-334eb.firebaseapp.com",
  projectId: "chat-app-334eb",
  storageBucket: "chat-app-334eb.appspot.com",
  messagingSenderId: "359055046571",
  appId: "1:359055046571:web:dc4c1110551c6cc2d0c4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
