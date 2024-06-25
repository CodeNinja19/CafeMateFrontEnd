import Rating from '@mui/material/Rating';

export default function Cafe({enter}){
    return (
        <>
            <div className="w-full my-4 sm:my-1 gap-3 flex flex-col justify center rounded-lg">
                <img src={`data:image/jpeg;base64,${enter.cafeImage}`} placeholder="fetching image" className="w-full aspect-[3/2] rounded-lg"/>
                <h1 className="text-lg">{enter.cafeName}</h1>
                <h1 className="text-md text-gray-500">{enter.location}</h1>
                <span className='flex gap-2'>
                    <h1 className='text-gray-400 text-md'>{enter.rating.$numberDecimal}</h1>
                    <Rating name="half-rating-read" defaultValue={parseFloat(enter.rating.$numberDecimal)} precision={0.5} readOnly />
                </span>
            </div>
            
        </>
    );
}