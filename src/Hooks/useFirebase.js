import { getAuth, signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google login function 
    const signInUsingGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .finally(() => setLoading(false))
    }



    // logout function
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false));


    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
    };

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setUser(result.user);
          })
          };




    return {
        user,
        loading,
        logOut,
        handleUserLogin,
        handleUserRegister,
        signInUsingGoogle
    }

}

export default useFirebase;