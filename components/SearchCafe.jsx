import Rating from '@mui/material/Rating';
export default function SearchCafe({enter}){

    return (
        <>
            <div className="flex flex-col items-center md:items-start md:flex-row no-underline w-[90%]">
            <img src={`data:image/jpeg;base64,${enter.cafeImage}`} placeholder="fetching image" className=" w-[60%] md:w-[40%] aspect-[3/2] rounded-lg"/>
                <div className='flex flex-col items-center justify-between gap-4 py-3 md:w-[44%]'>
                <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-semibold ">{enter.cafeName}</h1>
                <h1 className="text-xl md:text-2xl lg:text-4xl text-gray-500">{enter.location}</h1>
                <span className='flex gap-2'>
                    <h1 className='text-gray-400 text-md'>{enter.rating.$numberDecimal}</h1>
                    <Rating name="half-rating-read" defaultValue={parseFloat(enter.rating.$numberDecimal)} precision={0.5} readOnly />
                </span>
                </div>
            </div>
        </>
    );
}