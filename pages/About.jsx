
import grapes from "../assets/aboutPageCafe.jpg"
import pizza from "../assets/pizzaImage.png"



export default function About() {
    

    return (
        <>
            <div className="bg-[#f5f6fa] h-40 flex font-bold  justify-center text-6xl md:items-center md:h-52 font-[Merriweather]">About Us</div>
            <div className="flex justify-center">
                <img src={pizza} alt="Leaf" className="-translate-y-12 w-40" />
            </div>
            <div className="flex flex-col items-center mx-5 lg:flex-row lg:items-start">
                <div className="flex  lg:w-1 lg:grow  flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold mb-3 text-center">We Are Your Favourite Platform</h1>
                    <p className="text-center">
                    Welcome to Café Explorer, your ultimate guide to discovering the best cafes in town! Our app showcases nearly 300 unique 
                    cafes, each offering a distinct ambiance and menu. Whether you're seeking a cozy spot for a quiet coffee or a lively café 
                    for socializing, Café Explorer has you covered. Join us on a journey to explore new flavors, meet new people, and find your 
                    favorite café experience today!</p>
                    <br />

                    <p className="text-center">With Café Explorer, you can easily browse, filter, and find cafes based on your preferences, read reviews
                        from fellow coffee enthusiasts, and even get directions. Discover your next favorite café with us!</p>
                </div>
                <div className="flex w-screen lg:w-1 lg:grow flex-col items-center justify-center mt-5 lg:mt-0 ">
                    <img src={grapes} alt="grapes" className=" w-4/5 aspect-[4/3]" />
                </div>
            </div>
            <div className="flex flex-col bg-[#001524] text-white text-xl items-center space-y-4 py-16 mt-4 md:flex-row md:space-y-0 ">
                <h1 className="pl-10">Numbers Speak For Themselves!</h1>
                <div className="flex w-screen flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-around">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold">5,000+</h1>
                        <h1>Curated Products</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold">300+</h1>
                        <h1>Cafes</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold">40+</h1>
                        <h1>Locations</h1>
                    </div>
                </div>
            </div>
        </>
    )
}