
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";
import CulturalDelights from "../CulturalDelights/CulturalDelights";
import AdventureAwaits from "../AdventureAwaits/AdventureAwaits";

const Home = () => {
    const tours = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="text-center my-6">
                    <h1 className="font-bold text-3xl mb-2">Real Estate</h1>
                    <p>The Real Estate section offers detailed listings for buying, selling, or renting properties, featuring images,<br /> descriptions, prices, and amenities to help users make informed decisions quickly and efficiently.</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        tours.map(tour => <TouristSpot key={tour._id} tour={tour}></TouristSpot>)
                    }
                </div>
            </div>
            <AdventureAwaits></AdventureAwaits>
            <CulturalDelights></CulturalDelights>
        </div>
    );
};

export default Home;