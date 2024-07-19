import { useState,useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchCafe from "../components/SearchCafe";
import Container from "@mui/material/Container";
import { motion as m, AnimatePresence } from "framer-motion"
import axios from "axios";
import QuickLink from "../components/QuickLink";
import Flash from "../components/Flash"

export default function Search(){
    const [searchName,setSearchName]=useState("");
    const [cafeData,setCafeData]=useState([]);
    const [page,setPage]=useState(1);
    const [prices,setPrices]=useState({minPrice:0,maxPrice:1000});
    const updatePrice=function(evt){
        
    }
    console.log("page:", page);
    const limit=10;
    const [showFilter,setShowFilter]=useState(false);
    const handleChange=function (evt){
        evt.preventDefault();
        setPage(1);
        setCafeData([]);
        setSearchName(evt.target.value);
    }
    const deleteAll=function(){
        setSearchName("");
        setPage(1);
        setCafeData([]);
    }
    const onSearch=async function(){
        console.log("clicked!!");
        const response=await axios.get("api/searchCafes",{ params: {
            searchName,
            page,
            limit,
          }});
        const data=response.data;
        if (data.message) console.log(data.message);
        else {
            setCafeData([...cafeData,...data.cafes]);
            setPage(curr=> curr+1);
        }
    }
    const moreSearch=function(){
        onSearch();
        setPage(curr=> curr+1);
    }
    return (
        <>
        <Container maxWidth={false} sx={{maxWidth:"84rem"}}>
            <Flash duration={1000*60*5} type="success" message="Please click on search button to search and can click on product to see them individually"/>

            <div className="px-4 mt-6 border rounded-lg h-screen overflow-y-auto py-4 shadow-lg">
            <SearchBar message={searchName} setMessage={handleChange} search={onSearch} deleteAll={deleteAll} filterToggle={setShowFilter}/>
            <AnimatePresence>
            {showFilter &&
            <m.div
                className="h-fit sm:h-36 p-4 border shadow-sm bg-[#f5f6fa]"
                initial={{ opacity: 0 ,y:"-10%"}}
                animate={{ opacity: 1,y:"0%" }}
                exit={{ opacity: 0, y:"-10%" }}
                transition={{duration:0.7}}
            >
                <h1 className="text-3xl font-bold">Filter</h1>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-evenly ">
                    <div className="flex flex-col items-center">
                        <h1 className="text-lg font-semibold">By Average Price</h1>
                        <div className="flex gap-2">
                            <input type="text" value={prices.minPrice} placeholder="" className="w-12 border bg-white rounded-md"/>
                            <input type="text" value={prices.maxPrice} placeholder="" className="w-12 border bg-white rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-lg font-semibold">By Rating</h1>
                        <div className="flex gap-2">
                            <input type="text" value={""} placeholder="" className="w-12 border bg-white rounded-md"/>
                            <input type="text" value={""} placeholder="" className="w-12 border bg-white rounded-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-lg font-semibold">Order</h1>
                        <div className="flex gap-2">
                            <button className="w-12 border text-white bg-black rounded-md">INC</button>
                            <button className="w-12 border text-white bg-black rounded-md">DEC</button>
                        </div>
                    </div>
                    
                </div>
            </m.div>
            }
            </AnimatePresence>
            <div className="mt-6">
                {cafeData.length==0 &&
                    <div className="flex justify-center items-center text-center h-[24rem]">
                        <h1 className=" text-6xl sm:text-[7rem] md:text-[9rem] font-semibold text-gray-400">Search Cafes...</h1>
                    </div>
                }
                {cafeData.length>0 &&
                <div className="flex flex-col gap-4">
                    {cafeData.map( e =>(
                        <QuickLink to={`/Cafe?cafe_id=${e._id}`}>
                        <SearchCafe enter={e}/>
                        </QuickLink>
                    ))}
                </div>
                } 
                {cafeData.length>0 &&  
                <button onClick={moreSearch} className="border bg-black text-white text-lg px-2 py-3 rounded-md hover:opacity-50 duration-500">Show 10 more</button>
                }
            </div>
            </div>
        </Container>
        </>
    );
}