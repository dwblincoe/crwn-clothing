import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC9HZls_HbnyWMFWJ6RKPrgStSBr7vDSbs",
    authDomain: "crwn-db-65212.firebaseapp.com",
    databaseURL: "https://crwn-db-65212.firebaseio.com",
    projectId: "crwn-db-65212",
    storageBucket: "crwn-db-65212.appspot.com",
    messagingSenderId: "16196198287",
    appId: "1:16196198287:web:3444f0f5c742f64451b5fa",
    measurementId: "G-BV9FNPBJJJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
