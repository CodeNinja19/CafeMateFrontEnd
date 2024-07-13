import Rating from '@mui/material/Rating';
import ShowReviews from './ShowReviews';
import {useSelector,useDispatch} from "react-redux";
import { useState,useEffect } from 'react';
import { setUser } from '../src/actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Flash from './Flash';


export default function CafeShow({cafe,setCafe}){
    const user=useSelector( state => state.ChangeUser);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [message,setMessage]=useState("");
    const profile=function(){
        navigate("/profile",{replace:true});
    }
    const [reviewRating,setReviewRating]=useState(0);
    const [currReview,setCurrReview]=useState({title:"",description:""});
    const handleChange=function (evt){
        setCurrReview({...currReview,[evt.target.name]:evt.target.value});
    }
    const ratingChange=function(evt,newValue){
        setReviewRating(newValue);
    }
    const reviewPost=function (evt){
        evt.preventDefault();
    }
    const clearReview=function(){
        setCurrReview({title:"",description:""});
        setReviewRating(0);
    }
    const postReview=async function(){
        try{
            
            if (!currReview.title || !currReview.description){
                setMessage("Please fill all the fields completely!!!");
                console.log("fill it");
            }
            else {
                const response=await axios.post("/api/postReview",JSON.stringify({
                    user_id:user._id,
                    cafe_id:cafe._id,
                    title:currReview.title,
                    description:currReview.description,
                    rating:reviewRating,
                }),{
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                const data=response.data;
                if (data.message) setMessage(data.message);
                else {
                    // will send the modified cafe as a response on success
                    console.dir(data);
                    setCafe(JSON.parse(data));
                    clearReview(); 
                }
            }

        }catch(err){
            console.log("error",err);
            
        }
    };
    console.log(message);
    return (
        <>
            <div className='w-full flex flex-col gap-6 lg:flex-row lg:justify-evenly lg:gap-4'>
            <div className='flex flex-col w-full rounded-md overflow-hidden gap-3 items-center shadow-lg'>
                {cafe.cafeImage &&
                    <img src={`data:image/jpeg;base64,${cafe.cafeImage}`} placeholder="cafe image" className="w-full aspect-[5/3] shadow-lg"/>
                }
                <h1 className='text-5xl text-center font-semibold'>{cafe.cafeName}</h1>
                <h2 className='text-xl text-gray-900'>Average Price: <b>&#8377;{cafe.avgPrice}</b></h2>
                <h2 className='text-3xl text-gray-400 text-center'>Located Near: {cafe.location}</h2>
                <span className='flex gap-2'>
                    <h1 className='text-gray-400 text-md'>{cafe.rating.$numberDecimal}</h1>
                    <Rating name="half-rating-read" defaultValue={parseFloat(cafe.rating.$numberDecimal)} precision={0.5} readOnly />
                </span>
                <p className='mb-3 mx-3 font-sans text-lg md:text-xl'>The cafe <b>{cafe.cafeName}</b> is located in <b>{cafe.location}</b> and has rating of <b>{cafe.rating.$numberDecimal}</b>.
                    If you have visited <b>{cafe.cafeName}</b> or are planning to visit then we recommend you leave a customer review
                    for <b>{cafe.cafeName}</b>. This will help us and future customers to make a wise decision in their choice of location
                    and the food of their liking.
                </p>
            </div>
            <div className='flex flex-col w-full'>
                    <ShowReviews reviews={cafe.reviews}/>
            </div>
            </div>
            <div className='flex flex-col items-center my-8 border shadow-lg rounded-md gap-4 p-4'>
                <h1 className='text-5xl font-bold'>Leave a review</h1>
                <h1 className='w-full flex justify-center'>
                        {user && 
                        <img src={`data:image/jpeg;base64,${user.profileImage}`} placeholder="user" className="w-8 aspect-square" onClick={profile}/>
                        }
                </h1>
                {message && <Flash type="warning" message={message} duration={4*1000} reset={setMessage}/>}
                <form className='w-full flex flex-col items-center gap-4' onSubmit={reviewPost}>
                    <input name="title" id="title" value={currReview.title} placeholder="title" onChange={handleChange} className=' text-left text-wrap w-5/6 border focus:border-2 text-lg font-sans border-gray-600 outline-none focus:border-blue-600 focus:text-blue-600 rounded-md h-12'/>
                    <textarea type="text" name="description" value={currReview.description} placeholder="desciption" onChange={handleChange} className='text-left text-wrap w-5/6 min-h-32 border focus:border-2 text-lg font-sans focus:caret-blue-600 focus:text-blue-600 border-gray-600 outline-none focus:border-blue-500 rounded-md h-36'/>
                    <h1 className='text-3xl font-bold'>Rate it</h1>
                    <div className='flex justify-between items-center w-fit gap-2'>
                    <Rating name="half-rating-read" value={reviewRating} size="large" sx={{fontSize:"3rem"}} precision={1} onChange={ratingChange} />
                    <h1 className='text-2xl font-semibold text-gray-500'>{reviewRating}</h1>
                    </div>
                    {message && <Flash type="warning" message={message} duration={4*1000} reset={setMessage}/>}
                    <div className='grid gap-7 sm:gap-0 grid-cols-1 sm:grid-cols-2 w-5/6'>
                        <button className='mx-auto w-[90%] text-2xl text-white bg-black font-semibold py-2 px-6 rounded-md hover:shadow-lg hover:shadow-gray-500 max-w-52' onClick={postReview}>Post</button>
                        <button className='mx-auto w-[90%] text-2xl text-white bg-black font-semibold py-2 px-6 rounded-md hover:shadow-lg hover:shadow-gray-500 max-w-52' onClick={clearReview}>Clear</button>
                    </div>
                
                </form>
            </div>
        </>
    );
}