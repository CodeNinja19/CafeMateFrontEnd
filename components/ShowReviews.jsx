import SingleReview from "./SingleReview";

export default function ShowReviews({reviews}){
    return (
        <>
            <div className="w-full flex flex-col items-center rounded-md shadow-lg border ">
                <h1 className="text-6xl font-semibold py-3">Cafe Reviews</h1>
                {reviews.length==0 &&
                        <div className="flex justify-center items-center h-[40rem]">
                            <h1 className="text-gray-500 text-6xl">No reviews yet...</h1>
                        </div>
                }
                {
                    reviews.length>0 &&
                    <div className="w-full overflow-y-auto max-h-[40rem] border shadow-md">
                    {reviews.map( rev =>{
                        return <SingleReview review={rev}/>;
                    })}

                    </div>
                }
            </div>
        </>
    );
}