import { useState,useEffect } from "react";

export default function Search(){

    const [message,setMessage]=useState("Loading..");
    const [img,setImg]=useState("");
    useEffect(()=>{
        async function Hello(){
            const request=await fetch("/api");
            const data=await request.json();
            setMessage(data.message);
        }
        async function getImage(){
            const request=await fetch("/api/image",{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({name:"hhh"}),
              });
            const data=await request.json();
            console.log(data);
            if (data.cafeImage){
                setImg(data.cafeImage);
            } else console.log("i fucked up in seach page!!");
        }
        
        Hello();
        getImage();
    },[])
    
    return (
        <>
        <h1>{message}</h1>
        {img.length!=0 &&
        <img src={`data:image/jpeg;base64,${img}`} placeholder="fetching image"/>
        }
        </>
    );
}