import React,{useState,useEffect,useContext} from "react";
import {useHistory} from 'react-router-dom'
import {firebaseConfig} from "../components/firebase";
import 'firebase/auth'

const AuthContext=  React.createContext();
export const useAuth=()=>useContext(AuthContext);

export const AuthProvider=({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const history=useHistory();

    useEffect(() => {
        firebaseConfig.onAuthStateChanged((user)=>{
           setUser(user)
           setIsLoading(false)
           if(user) history.push('/chats')




       })
    }, [user,history]);

    const value={user}
    return(
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )




}


