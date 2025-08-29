import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCln-wUziMVHXD3LYshuPKJCKN8TWyCjWM",
  authDomain: "goalproject-lgum.firebaseapp.com",
  projectId: "goalproject-lgum",
  storageBucket: "goalproject-lgum.firebasestorage.app",
  messagingSenderId: "1018587765550",
  appId: "1:1018587765550:web:63feed986795d209d278bf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)