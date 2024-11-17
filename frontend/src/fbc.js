import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDLo6l-HQJhiN82BqyosJUrTTASEglD3U",
  authDomain: "sample-firebase-aascdvb-i-app.firebaseapp.com",
  projectId: "sample-firebase-aascdvb-i-app",
  storageBucket: "sample-firebase-aascdvb-i-app.firebasestorage.app",
  messagingSenderId: "126486160309",
  appId: "1:126486160309:web:a21b28b4c12fdeb2deaffc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export { auth, signInWithGoogle };
