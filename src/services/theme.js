import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext("light");

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.querySelector("body").style["background-color"] = theme === "light" ? "white" : "black";
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light",);
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    return useContext(ThemeContext);
}