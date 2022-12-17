import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState(null);
    const handleAuth = (access_token)=>{
        if(!isAuth){
            setToken(access_token);
            setIsAuth(true);
        }
        else{
            setToken(null);
            setIsAuth(false)
        }
    } 
    return (<AuthContext.Provider value={{isAuth,token,handleAuth}}>{children}</AuthContext.Provider>);
}