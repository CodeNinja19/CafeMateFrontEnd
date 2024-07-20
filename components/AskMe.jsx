import {useState,useEffect} from "react"
import ClearIcon from '@mui/icons-material/Clear';
import ai_assistant from "../assets/AskmeLogo.gif"
import { motion as m, AnimatePresence } from "framer-motion"
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../src/actions";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import Flash from "./Flash";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AskMe(){

    const [open,setOpen]=useState(false);
    const user=useSelector( state => state.ChangeUser);
    const [message,setMessage]=useState("");
    const dispatch=useDispatch();
    const [stopSend,setStopSend]=useState(false);
    const [currMessage,setCurrMessage]=useState("");
    const handleChange=function (evt){
        setCurrMessage(evt.target.value);
    }
    const toggle =function (){
        setOpen(curr => !curr);
    }
    const sendChanges=async function (){
        setStopSend(true);
        setMessage("");
        const response=await axios.post("/api/chatWithAi",JSON.stringify({txt:currMessage}),{
            headers: {
              'Content-Type': 'application/json'
            }});

        console.log(response.data);
        if (response.data.message){
            console.log(response.data.message);
            setMessage(response.data.message);
            setStopSend(false);
        }
        else {
            dispatch(setUser({...JSON.parse(response.data)}));
            setMessage("");
            setStopSend(false);
            setCurrMessage("");
        }
    }
    return (
        <>
            {
                !open &&
                <button className="w-16 h-16 z-30 border rounded-full fixed bottom-0 right-0 mr-5 mb-6 bg-[url(../assets/AskmeLogo.gif)] overflow-hidden flex justify-center" onClick={toggle}>
                    <img src={ai_assistant} className="w-full "/>
                </button>
            }
            <AnimatePresence>
            {
                open &&
                <m.div className=" bg-[#b2b1d8d3]  h-screen z-30  md:w-[70%] lg:w-[65%] xl:w-[60%] fixed top-0 right-0"
                    initial={{ opacity: 0 ,x:"150%"}}
                    animate={{ opacity: 1,x:"0%" }}
                    exit={{ opacity: 0, x:"150%" }}
                    transition={{duration:0.8}}
                >
                    <div className="flex flex-col items-center h-screen gap-6">
                    <div className="flex justify-end pr-3 w-full pt-2">
                    <button onClick={toggle} className="w-12">
                        <ClearIcon/>
                    </button>
                </div>
                <h1 className="text-4xl font-bold">Ask The AI</h1>
                <div className="w-[90%] h-[75%] rounded-md shadow-md overflow-x-hidden">
                    {user.chat && 
                        user.chat.contents.map( e =>{
                            let txt=e.parts[0].text;
                            let role=e.role;
                            if (role=="model"){
                                return (
                                <h1 className="rounded-lg px-2 bg-[#71c2e5] py-4">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{txt}</ReactMarkdown>
                                </h1>);
                            } else {
                                return (
                                <h1 className="text-right rounded-lg px-2 bg-green-300 py-4 ">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{txt}</ReactMarkdown>
                                </h1>)
                            }
                        })
                    }
                    {
                        message && 

                        <Flash type="warning" message={message} duration={10000}/>
                    }

                </div>
                <div className="w-full flex justify-center gap-2 items-center">

                    <input name="user" value={currMessage} placeholder="Want to know something?" className="w-[80%]  border rounded-md h-12 px-2 focus:border-blue-500 focus:caret-blue-500 outline-none" onChange={handleChange}/>
                    <button onClick={sendChanges} disabled={stopSend} className={`${!stopSend?"text-blue-500":""} hover:cursor-pointer`}><SendIcon/></button> 
                </div>
                </div>
                </m.div>
            }
            </AnimatePresence>  
        </>
    );
}