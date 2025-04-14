"use client";

import { Children } from 'react';
import { AuthContext } from './auth';
import { IUser } from '../types/user';

export interface IAuthContext{
   user: IUser | null;
   handleLogin: (loginData: ILoginData) => Promise<void>;
   handleSignOut: () => void;
}

export interface IAuthContextProviderProps{
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface SignInResponse {
    user: IUser;           
}