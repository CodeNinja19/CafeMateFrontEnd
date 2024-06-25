import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const navigate=useNavigate();
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
    const signUpUser=async function (evt){
        evt.preventDefault();
        setError("");
        const response =await fetch("/api/SignUp",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
        });
        const data= await response.json();
        if (data.message){
            setError(data.message);
        } else if (data.username==formData.username){
            navigate("/Login",{replace:true});
        }


    }
    const loginUser=function (evt){
        evt.preventDefault();
        navigate("/Login",{replace:true});
        
    }

    return (
        <>
            <div className="h-screen flex flex-col gap-4 justify-center items-center bg-[#E6E6E6]">
            <h1 className="font-sans text-3xl font-semibold">Sign Up</h1>
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
                            <button className="bg-black text-white font text-xl w-[40%] h-full rounded-md" onClick={signUpUser}>
                                Submit
                            </button>
                            <button className="bg-black text-white font text-xl w-[40%] h-full rounded-md" onClick={loginUser}>
                                Login
                            </button>
                        </div>
                    </form>
            </div>
        </>
    );
}