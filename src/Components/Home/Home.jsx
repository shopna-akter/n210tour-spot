
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";
import CulturalDelights from "../CulturalDelights/CulturalDelights";
import AdventureAwaits from "../AdventureAwaits/AdventureAwaits";

const Home = () => {
    const tours = useLoaderData()
    const newTours = tours.slice(0, 6)
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <div className="text-center my-6">
                    <h1 className="font-bold text-3xl mb-2">Explore Top Destinations</h1>
                    <p>Discover the best destinations for your next adventure. Find the perfect spot for culture, relaxation, and fun,<br />complete with photos, descriptions, and all the essential details to plan your visit.</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        newTours.map(newTour => <TouristSpot key={newTour._id} newTour={newTour}></TouristSpot>)
                    }
                </div>
            </div>
            <AdventureAwaits></AdventureAwaits>
            <CulturalDelights></CulturalDelights>
        </div>
    );
};

export default Home;