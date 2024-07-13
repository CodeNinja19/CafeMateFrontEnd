import Rating from '@mui/material/Rating';

export default function SingleReview({review}){
    return (
        <>
            <div className="flex flex-col items-center w-full border rounded-md">
                <h1>{review.title}</h1>
                <Rating name="half-rating-read" value={review.rating} size="large" precision={1} readOnly />
                <p>{review.content}</p>
            </div>
        </>
    );
}