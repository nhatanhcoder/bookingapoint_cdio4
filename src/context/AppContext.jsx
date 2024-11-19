import React, { createContext } from "react";
import { doctors } from "../assets/assets"; // Adjust the import path as needed

export const AppContext = createContext();

const AppContextProvider = ({ children }) => { // Corrected `props.children` to `children` via destructuring
    const value = {
        doctors
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
