import { createContext } from "react";

interface AuthContextProvider {
    user: string,
    setUser?: (value: string) => void
}

export const AuthContext = createContext<AuthContextProvider>({ user: "" })