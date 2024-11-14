import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBYFBbbzoZCTRRWq0ILr0C1qI1azXFxyZM",
	authDomain: "sitepickems.firebaseapp.com",
	projectId: "sitepickems",
	storageBucket: "sitepickems.appspot.com",
	messagingSenderId: "29408031423",
	appId: "1:29408031423:web:d461b2c7d7be301a398c0a",
	measurementId: "G-GKCRCSRFME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
