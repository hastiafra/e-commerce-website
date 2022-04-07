import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";


import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY5wX_sgBpK_h6aRwdBi3NXipQOF00KLg",
  authDomain: "ecommerce-website-db-a0f6e.firebaseapp.com",
  projectId: "ecommerce-website-db-a0f6e",
  storageBucket: "ecommerce-website-db-a0f6e.appspot.com",
  messagingSenderId: "965632039487",
  appId: "1:965632039487:web:de76ace177d8ed7913b68a",
  measurementId: "G-EHCF43N4LM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {

    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo, });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }

  return userDocRef;
};

//sign up with email and password
export const createUserManually = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);


};
