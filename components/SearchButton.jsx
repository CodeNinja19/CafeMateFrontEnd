import QuickLink from "./QuickLink";
export default function SearchButton(){
    return (
    <QuickLink to="/Search">
        <button className="bg-black text-white font text-xl px-6 py-3 rounded-md">
            Search
        </button>
    </QuickLink>);
}