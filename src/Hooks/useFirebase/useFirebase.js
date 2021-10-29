import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialization from "../../Firebase/FirebaseInit";

firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user=> {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        setError,
        isLoading,
        signInUsingGoogle,
        logOut
    }


}

export default useFirebase;