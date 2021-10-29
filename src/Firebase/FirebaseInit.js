import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;