import QuickLink from "./QuickLink";
import {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {setUser, setValueLogin} from "../src/actions/index.js"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginButton(){
    const loginState=useSelector((state)=> state.IsLoggedIn);
    const user=useSelector( state => state.ChangeUser);
    // console.log(user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // dispatch(setUser(user));
    const logOut=async function (){
        const response=await axios.get("/api/logout");
        
        if (response.data.success) {
            dispatch(setValueLogin(false));
            navigate("/",{replace:true});
        }
    }
    const profile=function(){
        navigate("/profile",{replace:true});
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
    {/* {loginState &&
    <button className="bg-black text-white font text-lg px-3 py-1 rounded-md" onClick={logOut}>
        Logout
    </button>
    } */}
    {loginState && 
        <div>
            {user && 
            <img src={`data:image/jpeg;base64,${user.profileImage}`} placeholder="user" className="w-8 aspect-square hover:opacity-60 duration-500 " onClick={profile}/>
            }
        </div>
    }
    </>
    );
}
