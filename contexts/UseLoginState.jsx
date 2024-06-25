import { useEffect, useState } from "react";
import { LoginState } from "./LoginState";

export default function UseLoginState(props){
    const [loginState,setLoginState]=useState(false);
    const [allow,setAllow]=useState(false);
    useEffect( function (){
        async function initialize(){
            try{
                const response=await fetch("/api/isLoggedIn");
                const data=await response.json();
                setLoginState(data.status);
            } catch(err){
                console.log("server is down!!");
                setAllow(true);
            }
            setAllow(true);
        };
        initialize();
    },[])
    return (
        <>
        <LoginState.Provider value={[loginState,setLoginState]}>
            {allow && props.children}
        </LoginState.Provider>
        </>
    );
}