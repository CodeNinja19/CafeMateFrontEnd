import Flash from '../components/Flash'
import SearchButton from '../components/SearchButton';
import Container from '@mui/material/Container';
import cafeCoverPage from "../assets/cafeCoverPage.jpg"
import GetCafes from '../components/GetCafes.jsx';
import LazyLoadParent from '../components/LazyLoadParent.jsx';
import {useSelector} from "react-redux";


export default function Home(){
    const loginState=useSelector((state)=> state.IsLoggedIn);
    return (
        <>  {loginState &&
                <Flash type="success" message="You can visit your profile and talk to the AI assitant in case of any doubts" duration={1000*60*5}/>
            }
            {
                !loginState &&
                <Flash type="warning" message="Please login to use all features!!!" duration={1000*20}/>
            }
            <div className="w-full h-4"></div>
            <Container maxWidth={false} sx={{maxWidth:"84rem"}}>
                    <div className="rounded-md bg-black relative px-auto">
                        <img src={cafeCoverPage} alt="cafe Cover Page" className="border rounded-md opacity-60 aspect-[18/9]"/>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-10 ">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h1 className=" text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans text-white">Search a cafe</h1>
                            <SearchButton/>
                        </div>
                        </div>   
                    </div>
                    <h1 className='text-4xl font-bold mt-16 mb-10'>Popular Cafes</h1>
                    <GetCafes category={"rating"} number={8}/>
                    <h1 className='text-4xl font-bold mt-16 mb-10'>Cheapest Cafes</h1>
                    <GetCafes category={"avgPrice"} number={8}/>
            </Container>
        </>
    );
}