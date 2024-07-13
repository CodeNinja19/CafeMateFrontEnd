import { useSearchParams } from "react-router-dom";
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import CafeShow from "../components/CafeShow";
import axios from "axios";
import Flash from "../components/Flash";
import Container from '@mui/material/Container';


export default function CafeDisplay(){
    const [searchParams]=useSearchParams();
    const navigate=useNavigate();
    const [currCafe,setCurrCafe]=useState("");
    const [id,setId]=useState(searchParams.get("cafe_id"));
    const [message,setMessage]=useState("");
    console.log(currCafe);
    useEffect(function(){
        if (!id) navigate("/",{replace:true});
        async function getCafe(){
            try{
                const response=await axios.get("/api/getCafe",{
                    params:{
                        cafe_id:id,
                    }
                })
                if (response.data.message) setMessage(response.data.message);
                else{
                    setCurrCafe(JSON.parse(response.data).resCafe);
                    // console.log(response.data);
                }

            }catch(err){
                console.log(err);
                setMessage("BackEnd is not Responding!!!");
            }
        }
        getCafe();
    },[]);

    return (
        <>
            <Container maxWidth={false} sx={{maxWidth:"84rem"}}>
            {message && <Flash type="warning" message={message} duration={10*1000}/>}
            {currCafe && <CafeShow cafe={{...currCafe}} setCafe={setCurrCafe}/>}
            </Container>
        </>
    );
}