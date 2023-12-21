import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_35cTw0zt1g1toTNu_BNq6fTrQWVfXys",
  authDomain: "auth-9369f.firebaseapp.com",
  projectId: "auth-9369f",
  storageBucket: "auth-9369f.appspot.com",
  messagingSenderId: "312700730475",
  appId: "1:312700730475:web:e787427b21d802ba7c452e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;