import {useState} from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {motion as m,AnimatePresence} from "framer-motion"

export default function AskedQuestion(){
    
    const [active,setActive]=useState(false);


    return (
        <div className="w-full flex flex-col items-center" onClick={()=>setActive(!active)}>
        <div className="w-full border-t border-b z-10 bg-white border-slate-200 flex items-center justify-between px-2 h-16">
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            <h1 onClick={()=>(setActive(!active))}>{active?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</h1>
            
        </div>
        <div className="h-fit">
        <AnimatePresence>
        {active &&
            <m.div 
            initial={{y:"-50%"}}
            animate={{y:"0%"}}
            exit={{y:"-50%"}}
            transition={{duration:0.8,ease:"linear"}}
            className="w-full px-2 h-fit text-lg border-b border-slate-200 z-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam 
            dolorum repellendus in officia mollitia, saepe expedita nihil voluptate.Lorem ipsum dolor sit amet consectetur sit sat hello.
            </m.div>}
        </AnimatePresence>
        </div>
        </div>
    )
}