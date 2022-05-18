import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem('username') || null);

    const login = ({ username, password }) => {
        if (username === "raj" && password === "admin") {
            localStorage.setItem("username", username);
            setUser(username);
            return true;
        }
        return false;
    }

    const logout = () => {
        localStorage.removeItem("username");
        setUser(null);
        window.location.href = "/";
    }

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}