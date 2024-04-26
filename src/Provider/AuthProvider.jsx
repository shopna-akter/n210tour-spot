import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
export const AuthContext = createContext(null)
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading ,setLoading] = useState(true)
    const [user , setUser] = useState(null)
    const CreateUser = (email ,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth , email , password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        })
        return () => {
            unSubscribe
        }
    },[])
    const SignIn = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email ,password)
    }
    const AuthInfo = {
        user,
        CreateUser,
        SignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;