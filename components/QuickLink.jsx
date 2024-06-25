
import { NavLink } from "react-router-dom";

export default function QuickLink(props){
    return (
        <NavLink to={props.to}
        className={({isActive})=>{
            return isActive?"text-xl":"";
        }} 
        >{props.children}
        </NavLink> 
    );
}