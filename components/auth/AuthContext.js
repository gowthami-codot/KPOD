"use client";
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {

 const [currentUser, setCurrentUser] = useState(null);

 const value = {
    currentUser,
    setCurrentUser,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
