import {useState,useEffect} from "react"
import logo from "../assets/cafeMateLogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import useScreenSize from "../hooks/useScreenSize.js"
import IconButton from '@mui/material/IconButton';
import { motion as m, AnimatePresence } from "framer-motion"
import ClearIcon from '@mui/icons-material/Clear';
import QuickLink from "./QuickLink.jsx";
import LoginButton from "./LoginButton.jsx";

export default function Navbar(){
    const [navCollapse,setNavCollapse]=useState(false);
    const [menu,setMenu]=useState(false);
    const toggleMenu=()=> setMenu(!menu);
    const screenSize=useScreenSize();
    useEffect(()=>{
        if (screenSize.width<=640) setNavCollapse(true);
        else setNavCollapse(false);
    },[screenSize])
    return (
        <>
            {/*outer navbar */}
            <div className="w-full h-20  px-6 md:px-8 flex justify-center items-center">
                {/* inner parent to give to allow for paddings */}
                <div className=" w-full flex justify-between items-center h-16 my-auto">
                {/* for logo */}
                <div><QuickLink to="/"><img src={logo} className="w-16 md:w-20 hover:opacity-75 duration-500" alt="logo"/></QuickLink></div>
                {
                !navCollapse &&
                <ul className="flex justify-between items-center space-x-4 lg:space-x-10">
                    <QuickLink to="/"><li>Home</li></QuickLink>
                    <QuickLink to="/Search"><li>Search</li></QuickLink>
                    <QuickLink to="/About"><li>About</li></QuickLink>
                    <QuickLink to="/Contact"><li>Contact</li></QuickLink>
                    {/* <QuickLink to="/Compare"><li>Compare</li></QuickLink> */}
                    <li><LoginButton/></li>
                </ul>
                }
                {navCollapse &&
                    <IconButton
                    size="large"
                    edge="start"
                    color="black"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon sx={{color:"black"}} onClick={toggleMenu}/>
                  </IconButton>
                }
                </div>
            </div>
            {/* Menu for smaller viewports */}
            <AnimatePresence>
            {menu &&
            
            <m.div className="fixed w-3/5 h-full top-0 right-0 z-40 shadow-2xl bg-white"
                initial={{ opacity: 0 ,x:"150%"}}
                animate={{ opacity: 1,x:"0%" }}
                exit={{ opacity: 0, x:"150%" }}
                transition={{duration:1}}
            >
            <div className="flex justify-end pr-2 pt-2">
                <button onClick={toggleMenu} className="w-8">
                    
                    <ClearIcon/>
                </button>
            </div>
            <div id="profile" className="h-20 flex flex-col justify-between items-center">
                <LoginButton/>
            </div>
            <ul className="flex flex-col justify-between space-y-4">
                <QuickLink to="/"><li>Home</li></QuickLink>
                <QuickLink to="/Search"><li>Search</li></QuickLink>
                <QuickLink to="/About"><li>About</li></QuickLink>
                <QuickLink to="/Contact"><li>Contact</li></QuickLink>
                {/* <QuickLink to="/Compare"><li>Compare</li></QuickLink> */}
            </ul>
            </m.div>
            }
            </AnimatePresence>
        </>
    );
}