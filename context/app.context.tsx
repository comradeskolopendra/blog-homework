"use client";
import { createContext, FC, ReactNode } from "react";

export const AppContext = createContext<string>("");

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: FC<AppContextProviderProps> = ({children}) => {
    return (
        <AppContext.Provider value={"https://github.com/comradeskolopendra"}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider