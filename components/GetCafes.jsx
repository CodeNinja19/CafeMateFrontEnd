import { useState,useEffect } from "react";
import Cafe from "./Cafe";
import QuickLink from "./QuickLink";
export default function FourCafe({category,number}){
    const [cafes,setCafes]=useState(null);
    useEffect(function (){
        async function initialize(){
            const request=await fetch(`/api/getCafes`, {
                method: "POST", 
                mode: "cors", 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({category,number}), 
              });
            const data=await request.json();
            if (data){  
                console.log(data.cafes);
                setCafes(data.cafes);
            } else console.log("Request failed");
        }
        initialize();
    },[])
    return (
        <>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                
                {cafes && cafes.map( e => 
                <QuickLink to={`/Cafe?cafe_id=${e._id}`}>
                <Cafe key={e._id} enter={{...e}}/>
                </QuickLink>
                )}
            </div>

        </>
    );
}