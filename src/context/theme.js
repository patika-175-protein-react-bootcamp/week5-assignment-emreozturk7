import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);


    const changeTheme = () => {
        setTheme(!theme);

        if (theme) {
            document.body.style = 'background: #FEFEFE;';
        } else {
            document.body.style = 'background: #2C2C2C;';
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    return useContext(ThemeContext);
}

export { ThemeProvider, ThemeContext, useTheme };