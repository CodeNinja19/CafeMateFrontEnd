import {useContext, useEffect} from "react"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function ProtectRoute({children}){
    const loginState=useSelector((state)=> state.IsLoggedIn);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(function (){
        if (!loginState) navigate("/Login",{replace:true});
    },[])
    return (
        <>  {!loginState && <h1>Loading...</h1>}
            {loginState && children}
        </>
    );
}