
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import FrequentQuestion from "../components/FrequentQuestions";
import pizzaImage from "../assets/pizzaImage.png"
import deliveryGuy from "../assets/deliveryGuy.png"
export default function Contact(){

    return (
        <>
        
        <div className="bg-[#f5f6fa]  flex font-bold  justify-center text-6xl items-center h-60 font-[Merriweather] z-0">Get In Touch</div>
            <div className="flex flex-col items-center pb-8 -translate-y-8 z-50 bg-white lg:max-w-[85rem] lg:mx-auto lg:rounded-md lg:shadow-2xl">
                 <img src={pizzaImage} alt="Leaf" className="-translate-y-10 w-40 lg:mb-8" />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 w-full">
                <div className="border border-slate-300 rounded-lg mx-4 flex flex-col items-center pt-3 pb-6">
                    <PhoneEnabledRoundedIcon sx={{color:"#000000",fontSize:"2rem"}}/>
                    <h1>+9711997055</h1>
                    <h1>+8899772213</h1>
                    
                </div>
                <div className="border border-slate-300 rounded-lg mx-4 flex flex-col items-center pt-3 pb-6">
                    <PhoneEnabledRoundedIcon sx={{color:"#000000",fontSize:"2rem"}}/>
                    <h1>+9711997055</h1>
                    <h1>+8899772213</h1>
                    
                </div>
                <div className="border border-slate-300 rounded-lg mx-4 flex flex-col items-center pt-3 pb-6">
                    <PhoneEnabledRoundedIcon sx={{color:"#000000",fontSize:"2rem"}}/>
                    <h1>+9711997055</h1>
                    <h1>+8899772213</h1>
                    
                </div>
            </div>
            </div>
            <div className="flex flex-col items-center mt-5 lg:mt-20">
                <h1 className="text-4xl text-center">Frequently Asked Questions</h1>
                <img src={deliveryGuy} alt="image of a leaf" className="my-6 w-28 md:w-16"/>
            </div>
            <div className="px-10 md:max-w-[80rem] mb-24 md:mx-auto">
                <FrequentQuestion number={6}/>
            </div>
        
        </>
    )
}