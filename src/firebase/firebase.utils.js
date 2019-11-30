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

export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...data });
        } catch (err) {
            console.log("Error creating user", err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
