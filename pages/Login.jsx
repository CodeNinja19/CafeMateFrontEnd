import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import {setValueLogin,setUser} from "../src/actions/index.js"
import axios from "axios";
export default function Login(){

    let navigate = useNavigate();
    const loginState=useSelector((state)=> state.IsLoggedIn);
    const user=useSelector(state => state.ChangeUser);
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({username:"",password:""});
    const [error,setError]=useState("");
    const handleChange=function (evt){
        setError("");
        setFormData( curr =>{
            return {
                ...curr,
                [evt.target.name]:evt.target.value
            }
        })
    }
    const loginUser=async function (evt){
        evt.preventDefault();
        setError("");
        const response =await axios.post("/api/login",JSON.stringify(formData),{
            headers: {
              'Content-Type': 'application/json'
            }});
        console.log(response);
        if (response.data.message){
            setError(response.data.message);
        } else {
            dispatch(setValueLogin(true));
            const request=await axios.get("/api/getCurrentUser");
            if (request.data.message) setError(request.data.message);
            else {
              dispatch(setUser({...JSON.parse(request.data)}));
              console.log(request.data);
              navigate("/",{replace:true});
            }
        }

    }
    const signUp=async function (evt){
        evt.preventDefault();
        navigate('/SignUp', { replace: true });
    }
    return (
        <>
            
            <div className="h-screen flex flex-col justify-center items-center bg-[#E6E6E6] gap-4">
                    <h1 className="text-4xl font-sans font-semibold">Login</h1>
                    {error.length!=0 && <h1 className="text-red-500 text-lg">{error}</h1>}
                    <form className="border bg-white border-gray-300 shadow-md flex flex-col justify-center items-center rounded-md w-[16rem] sm:w-[18rem] md:w-[22rem] lg:w-[40%] aspect-[3/4] lg:aspect-[4/3] gap-7">
                        <div className="flex flex-col justify-center items-center w-full gap-2">
                        <label htmlFor="username" className="text-lg">Username</label>
                        <input value={formData.username} placeholder="username" name="username" id="username" className="w-[90%] h-12 border pl-2 rounded-md" onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full gap-2">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input value={formData.password} placeholder="Password" type="text" name="password" id="password" className="w-[90%] h-12 border pl-2 rounded-md" onChange={handleChange}/>
                        </div>
                        <div className="flex h-10 sm:h-12 lg:h-14 xl:h-16 w-[90%] justify-between">
                            <button className="bg-black text-white font text-xl w-[40%] h-full rounded-md" onClick={loginUser}>
                                Submit
                            </button>
                            <button className="bg-black text-white font text-xl w-[40%] h-full rounded-md" onClick={signUp}>
                                Sign Up
                            </button>
                        </div>
                    </form>
            </div>

        </>
    );
}