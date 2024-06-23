import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import {setValueLogin} from "../src/actions/index.js"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/Navbar.jsx"
function App() {
  const loginState=useSelector((state)=> state.IsLoggedIn);
  const dispatch=useDispatch();
  const [allowRender,setAllowRender]=useState(false);
  useEffect(()=>{
    async function initialize(){
      try{
          const response=await axios.get("/api/isLoggedIn");
          const data=response.data;
          dispatch(setValueLogin(data.status));
          setAllowRender(true);
      } catch(err){
          console.log("server is down!!");
          setAllowRender(true);
      }
  };
  initialize();
  },[])
  return (
    <>
    
      <Navbar/>
      {allowRender && <Outlet/>}
    </>
  )
}

export default App
