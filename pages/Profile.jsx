import { useSelector, useDispatch } from "react-redux";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { setValueLogin,setUser } from "../src/actions";
import axios from "axios"
export default function Profile() {
    const loginState=useSelector(state=> state.IsLoggedIn);
    let navigate = useNavigate();
    const originalUser = useSelector(state => state.ChangeUser);
    const [user,setUsers]=useState({...originalUser});
    useEffect(function(){
        // setUsers({...originalUser});
        console.log("changed user",user);
    },[user]);
    const dispatch=useDispatch();
    const formChange=function(evt){
        setUsers({...user,[evt.target.name]:evt.target.value});
    }
    const [changes,setChanges]=useState(false);
    const makeChanges=function(){
        setChanges(true);
    }
    const [message,setMessage]=useState({});
    const saveChanges=function(){
        const arr=["age","gender","address"];
        let valid=true;
        for (let i of arr){
            if (!user[i]) {
                setMessage("Please fill all the fields");
                valid=false;
                break;   
            }
        }
        async function sendChanges(){
            console.log(JSON.stringify(user));
            const response=await axios.post("/api/updateData",JSON.stringify(user),{
                headers:{
                    'Content-Type': 'application/json'
                }});
            const data=JSON.parse(response.data);
            // console.log("data profile",data);
            if (data.message){
                setMessage(data.message);
                console.log("profile",data.message);
            } else {
                setUsers({...data});
                dispatch(setUser({...data}));
                setChanges(false);

            }
        }
        if (valid){
            sendChanges();
        }
    }
    const logOut=async function (){
        const response=await axios.get("/api/logout");
        
        if (response.data.success) {
            dispatch(setValueLogin(false));
            dispatch(setUser({username:" "}));
            navigate("/",{replace:true});
        }
    }
    return (
        <>  
            <div className="flex h-screen bg-[#f5f6fa] justify-center items-center p-8">
            <div className="flex flex-col bg-white items-center w-full max-w-[40rem] md:max-w-[46rem] border shadow-md rounded-lg gap-10 p-4">
                <div className="w-full flex flex-col items-center gap-6">
                    {user && <img src={`data:image/jpeg;base64,${user.profileImage}`} placeholder="user" className="w-36" />}
                    <div className="flex flex-col items-center w-full gap-2">
                        <label htmlFor="username" className="text-lg ">Username</label>
                        <input type="text" value={user.username} name="username" id="username" className="w-[90%] h-12 border rounded-md" disabled />
                    </div>
                    <div className="flex flex-col items-center w-full gap-2">
                        <label htmlFor="age" className="text-lg">Age</label>
                        <input type="text" value={user.age} name="age" id="age" className="w-[90%] h-12 border  rounded-md" onChange={formChange} disabled={!changes}/>
                    </div>
                    <div className="flex flex-col items-center w-full gap-2">
                        <label htmlFor="gender" className="text-lg">Gender</label>
                        <input type="text" value={user.gender} name="gender" id="gender" className="w-[90%] h-12 border  rounded-md" onChange={formChange} disabled={!changes}/>
                    </div>

                </div>
                <div className="w-full flex flex-col items-center gap-6 ">
                    <div className="flex flex-col items-center w-full gap-2">
                        <label htmlFor="address" className="text-lg">Address</label>
                        <textarea type="text" value={user.address} name="address" id="address" className="w-[90%] min-h-24 border rounded-md" onChange={formChange} disabled={!changes}/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center w-full">
                        {changes &&
                            <button className="bg-black text-white font text-xl h-12 rounded-md" onClick={saveChanges} >
                            Save Changes
                            </button>
                        }
                        {!changes &&
                            <button className="bg-black text-white font text-xl h-12 rounded-md" onClick={makeChanges} >
                            Make Changes
                            </button>
                        }
                        
                        <button className="bg-black text-white font text-xl  h-12 rounded-md" onClick={logOut}>
                            Logout
                        </button>
                        <button className="bg-black text-white font text-xl h-12 sm:col-span-2 md:col-span-1 rounded-md">
                            Your Cafes
                        </button>
                    </div>

                </div>
            </div>
            </div>
        </>
    );
}

// username:{
//     type:String,
//     required:true,
//     unique:true
// },
// password:{
//     type:String,
//     required:true,
//     minlength:7
// },
// age:{
//     type:Number,
// },
// address:{
//     type:String,
// },
// gender:{
//     type:String,
// },
// profileImage:{
//     type:String,
// },