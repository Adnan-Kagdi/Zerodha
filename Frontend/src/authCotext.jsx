import React, { createContext, useState, useEffect, useContext } from "react"
import Cookies from "js-cookie"

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    const [dashUsername, setDashUsername] = useState(null);

    useEffect(() => {
        const token = Cookies.get("authtoken");

        if (token) {
            setCurrUser({ token });
        }

    }, []);

    const value = {
        currUser, setCurrUser, dashUsername, setDashUsername
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
