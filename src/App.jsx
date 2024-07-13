import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import {setValueLogin,setUser} from "../src/actions/index.js"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer.jsx";
import axios from "axios"
import Navbar from "../components/Navbar.jsx"
import AskMe from "../components/AskMe.jsx";
function App() {
  const loginState=useSelector((state)=> state.IsLoggedIn);
  const user=useSelector(state => state.ChangeUser);
  const dispatch=useDispatch();
  const [allowRender,setAllowRender]=useState(false);
  useEffect(()=>{
    async function initialize(){
      try{
          const response=await axios.get("/api/isLoggedIn");
          const data=response.data;
          dispatch(setValueLogin(data.status));
          console.log("App component",data.status);
          if (data.status){
            console.log("sending");
            const request=await axios.get("/api/getCurrentUser");
            if (request.data.message) console.log(request.data.message);
            else {
              dispatch(setUser({...JSON.parse(request.data)}));
              console.log(request.data);
            }
          }
          setAllowRender(true);
      } catch(err){
          console.log(err);
          console.log("server is down!!");
          setAllowRender(true);
      }
  };
  initialize();
  },[])
  return (
    <>
    <div className="relative w-full">
      <Navbar/>
      {allowRender && 
      <Outlet/>
      }
      <AskMe/>
      <Footer/>
    </div>
    </>
  )
}

export default App
