"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correto para App Router
import { api } from "@/services/api";

import { IAuthContext, IAuthContextProviderProps, ILoginData, SignInResponse } from "./types";
import { IUser } from "../types/user";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  /** ---------- estado inicial ---------- */
  const [user, setUser] = useState<IUser | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("user");
    return stored ? (JSON.parse(stored) as IUser) : null;
  });

  const router = useRouter();

  /** ---------- login ---------- */
  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.post<SignInResponse>(
        "/auth/signin",
        loginData,
      );

      // salva usuário
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/feed");
    } catch (err) {
      console.error("erro no login", err);
      alert("Email ou senha inválidos");
    }
  };

  /** ---------- logout ---------- */
  const handleSignOut = async () => {
    try {
      await api.post("/auth/signout"); // backend limpa cookie
    } catch {
      /* ok se der 401 */
    } finally {
      localStorage.removeItem("user");
      setUser(null);
      router.push("/login");
    }
  };

  /** ---------- mantém abas sincronizadas ---------- */
  useEffect(() => {
    const sync = () => {
      const stored = localStorage.getItem("user");
      setUser(stored ? (JSON.parse(stored) as IUser) : null);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}