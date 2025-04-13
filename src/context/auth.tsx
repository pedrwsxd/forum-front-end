"use client";

import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { createContext, useState } from "react";
import router from "next/router";
import { api } from "@/services/api";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
            if (data.length === 1) {
                setUser(data[0]);
                router.push('/feed')
            } else {
                alert('Email ou senha incorretos')
            }

        } catch {
            alert('Houve um erro')
        }
    }

    const handleSignOut = () => {
        setUser({} as IUser);
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}
