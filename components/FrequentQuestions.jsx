import AskedQuestion from "./AskedQuestion"


export default function FrequentQuestion({number}){

    const list=new Array(number).fill(0);
    return (
        <div className=" grid grid-cols-1 w-full md:grid-cols-2">
            {list.map((e)=>(
                <AskedQuestion/>
            ))}
        </div>
    )
}