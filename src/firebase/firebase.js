// Import the functions you need from the SDKs you needimport firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCl5uO1FZk5dV65SdKQHCmae3O_mNOt6NM",
  authDomain: "patient-db-8abcf.firebaseapp.com",
  projectId: "patient-db-8abcf",
  storageBucket: "patient-db-8abcf.appspot.com",
  messagingSenderId: "211485543752",
  appId: "1:211485543752:web:678dcfdca9baa3277c777d",
  measurementId: "G-701VBQ2ZSY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;