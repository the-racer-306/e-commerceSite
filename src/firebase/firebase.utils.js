import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDSM8PMSmsmkqSnC0Zr4JtquF0P-FsKdmE",
	authDomain: "e-commerce-reactjs-306.firebaseapp.com",
	projectId: "e-commerce-reactjs-306",
	storageBucket: "e-commerce-reactjs-306.appspot.com",
	messagingSenderId: "137772638439",
	appId: "1:137772638439:web:0af77f1cc301a4cf200242",
	measurementId: "G-HFTQH0NWHQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
