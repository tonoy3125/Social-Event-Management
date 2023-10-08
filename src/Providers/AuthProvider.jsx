import { createContext, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)


    // Email-Password 1st step User Create
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { user, createUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;