import {  createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export default function AuthProvider({children}){
    const [user,setUser] = useState();
    const login=(user)=>{
       setUser(user);
    } 
    const logout=()=>{
        setUser(null);
    }
    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
}
export const useAuth = ()=>{
    return useContext(AuthContext);
}