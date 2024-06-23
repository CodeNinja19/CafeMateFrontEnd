import QuickLink from "./QuickLink";
import { useSelector,useDispatch } from "react-redux";
import {setValueLogin} from "../src/actions/index.js"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginButton(){
    const loginState=useSelector((state)=> state.IsLoggedIn);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logOut=async function (){
        const response=await axios.get("/api/logout");
        
        if (response.data.success) {
            dispatch(setValueLogin(false));
            navigate("/",{replace:true});
        }
    }
    return (
    <>
    {!loginState &&
    <QuickLink to="/Login">
        <button className="bg-black text-white font text-lg px-3 py-1 rounded-md">
            Login
        </button>
    </QuickLink>
    }
    {loginState &&
    <button className="bg-black text-white font text-lg px-3 py-1 rounded-md" onClick={logOut}>
        Logout
    </button>
    }
    </>
    );
}
