
import { NavLink } from "react-router-dom";

export default function QuickLink(props){
    return (
        <NavLink to={props.to}
        className={({isActive})=>{
            return isActive?"text-2xl font-semibold":"";
        }} 
        ><h1 className="hover:underline duration-500">{props.children}</h1>
        </NavLink> 
    );
}