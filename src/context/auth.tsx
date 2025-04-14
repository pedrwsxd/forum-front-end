"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correto para App Router
import { api } from "@/services/api";

import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
    
    const [user, setUser] = useState<IUser | null>(() => {
      if (typeof window === "undefined") return null;
      const token = localStorage.getItem("token");
      if (!token) return null;
      try {
        const decoded: any = jwtDecode(token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        return { id: decoded.sub, email: decoded.email, name: decoded.name }; 
      } catch {
        return null;
      }
    });
    const router = useRouter();

    const handleLogin = async (loginData: ILoginData) => {
      const { data } = await api.post('/auth/signin', loginData);

      if (!data?.access_token) {
        alert('Email ou senha incorretos');
        return;
      }
    
      localStorage.setItem('token', data.access_token);
      api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
    
      const decoded: any = jwtDecode(data.access_token);
      const user: IUser = { id: decoded.sub, name: decoded.sub, email: decoded.email };
    
      setUser(user);              // ✅ agora existe user
      router.push('/feed');
    
    }

    const handleSignOut = () => {
        localStorage.removeItem("token");
        delete api.defaults.headers.common.Authorization;
        setUser(null);
        router.push('/login');
    }

    useEffect(() => {
        const sync = () => {
          const stored = localStorage.getItem("user");
          setUser(stored ? JSON.parse(stored) : null);
        };
        window.addEventListener("storage", sync);
        return () => window.removeEventListener("storage", sync);
      }, []);

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}
