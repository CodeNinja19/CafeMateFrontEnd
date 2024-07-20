import logo from "../assets/cafeMateLogo.png";
import playStore from "../assets/play-store-logo.png"
import appleStore from '../assets/apple-store-logo.png'
import facebook from '../assets/faceBook.svg'
import twitter from "../assets/twitter.svg"
import god from '../assets/god.svg'
import instagram from '../assets/instagram.svg'

export default function Footer() {
    const QuickLinks = ["About",
        "Home",
        "Search",
        "Contact",
        "About",
        "Compare",
        "Profile"]

    const SiteLinks = ["Privacy Policy", "Delivery Details", "Offer coupons", "Teams & Conditions"]

    return (
        <>
        <div className="bg-[#001524]  flex flex-col items-center mt-5 pb-5 md:flex-row md:items-start md:justify-between md:px-5 font-sans">
            <div id="about" className="flex flex-col items-center mt-5 md:w-1/3">
                {/* <img src={logo} alt="organic logo" /> */}
                <h1 className="text-6xl font-bold text-white">About Us</h1>
                <p className="w-3/6 text-center text-slate-400 mt-5">Welcome to Café Explorer, your
                 ultimate guide to discovering the best cafes in town! Our app showcases nearly 300 
                 unique cafes, each offering a distinct ambiance and menu. Whether you're seeking a 
                 cozy spot for a quiet coffee or a lively café for socializing, Café Explorer has you 
                 covered. Join us on a journey to explore new flavors, meet new people, and find your 
                 favorite café experience today!
                </p>
            </div>
            <div id="general info" className="md:flex">
                <div id="links">
                    <div id="Quick Links" className="flex flex-col items-center mt-5">
                        <h1 className="text-3xl text-white font-bold text-center">Quick Links</h1>
                        <ul className="flex flex-col items-center mt-5">
                            {QuickLinks.map(
                                (e) => (
                                    <h1 className="text-slate-400">{e}</h1>
                                )
                            )}
                        </ul>
                    </div>
                    <div id="Site Links" className="flex flex-col items-center mt-5">
                        <h1 className="text-3xl text-white font-bold text-center">Site Links</h1>
                        <ul className="flex flex-col items-center mt-5">
                            {SiteLinks.map(
                                (e) => (
                                    <h1 className="text-slate-400 text-center">{e}</h1>
                                )
                            )}
                        </ul>

                    </div>
                </div>
                <div id="app">
                    <div id="download our mobile app" className="flex flex-col items-center mt-5">
                    <h1 className="text-3xl text-white font-bold text-center">Download our mobile app</h1>
                    <p className="w-3/6 text-center text-slate-400 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo tenetur est modi excepturi
                </p>
                    </div>
                    <div id="Quick Links" className="flex flex-col items-center mt-5">
                    <h1 className="text-3xl text-white font-bold">Quick Links</h1>
                        <ul className="flex flex-col items-center mt-5">
                            {SiteLinks.map(
                                (e) => (
                                    <h1 className="text-green-500">{e}</h1>
                                )
                            )}
                        </ul>
                        <div className="flex space-x-5 mt-5 w-2/3">
                            <img src={playStore} alt="play store" className="w-5 grow"/>
                            <img src={appleStore} alt="apple store" className="w-5 grow"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="font-sans bg-[#001524] flex flex-col items-center h-32 sm:flex-row sm:justify-between sm:px-4 border-t border-slate-400">
            <h1 className="text-md text-slate-400 my-6">Copyright| Organic Store </h1>
            <div className="flex space-x-3">
                <img src={god}  className="w-4"/>
                <img src={facebook} className="w-4" />
                <img src={twitter} className="w-4" />
                <img src={instagram} className="w-4" />
            </div>
        </div>
        </>
    )
}